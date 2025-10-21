import { useState, useEffect, useRef } from 'react';
import { IMState, React, type AllWidgetProps } from 'jimu-core';
import { ToastContainer, toast } from 'react-toastify';
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import { loadModules } from 'esri-loader';
import './assets/style.css';
import ImageryLayer from '@arcgis/core/layers/ImageryLayer'

import { useDispatch, useSelector } from 'react-redux';
import { Button, Select, FloatingPanel, Loading } from 'jimu-ui';

interface Band {
  name: string;
  value: string;
}

interface Sensor {
  id: string;
  title: string;
  bands: Band[];
}

const Widget = (props: AllWidgetProps<unknown>) => {

  const dispatch = useDispatch()

  const selectedSensor = useSelector((state: IMState) => state.myState?.selectedSensor)
  const bandFormula = useSelector((state: IMState) => state.myState?.bandFormula)
  const selectedImageries = useSelector((state: IMState) => state.myState?.selectedImages)
  //Constante del Mapa
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>(null)
  const [bands, setBands] = useState({ r: '1', g: '2', b: '3' })
  const [stretch, setStretch] = useState('percent-clip')
  const [gamma, setGamma] = useState('1')
  const [availableBands, setAvailableBands] = useState<Band[]>([]);

  //Valores para generar el stretchRenderer
  const [inputTypeAreaMax, setInputTypeAreaMax] = useState(1);
  const [inputTypeAreaMin, setInputTypeAreaMin] = useState(-1);
  const [color, setColor] = useState([0, 255, 0, 255]);


  const [loading, setLoading] = useState(false)
  //Referencias
  const imageryLayerRef = useRef(null)
  const esriModulesRef = useRef<any>(null);

  // Definición de bandas por sensor
  const sensors: Sensor[] = [
    {
      id: 'worldview',
      title: 'Worldview2',
      bands: [
        { name: 'Coastal(1)', value: '1' },
        { name: 'Blue(2)', value: '2' },
        { name: 'Green(3)', value: '3' },
        { name: 'Yellow(4)', value: '4' },
        { name: 'Red(5)', value: '5' },
        { name: 'Red Edge(6)', value: '6' },
        { name: 'NIR -1(7)', value: '7' },
        { name: 'NIR -2(8)', value: '8' },
      ]
    },
    {
      id: 'fasat',
      title: 'OWD_FasatC_MS_v2_20250312',
      bands: [
        { name: 'Red(1)', value: '1' },
        { name: 'Green(2)', value: '2' },
        { name: 'Blue(3)', value: '3' },
        { name: 'NIR(4)', value: '4' },
      ]
    },
    {
      id: 'default',
      title: 'Default',
      bands: [
        { name: 'Blue(1)', value: '1' },
        { name: 'Green(2)', value: '2' },
        { name: 'Red(3)', value: '3' },
        { name: 'NIR(4)', value: '4' },
      ]
    }
  ];

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    setJimuMapView(jmv);
    loadEsriModules();


  };

  const resetRenderer = () => {
    const existingLayer = jimuMapView.view.map.findLayerById('Formula de banda')
    if (existingLayer) {
      jimuMapView.view.map.remove(existingLayer)
    }
  }

  const loadEsriModules = async () => {
    try {
      const [RasterFunction, ImageryLayer, RasterStretchRenderer] = await loadModules([
        'esri/layers/support/RasterFunction',
        'esri/layers/ImageryLayer',
        'esri/renderers/RasterStretchRenderer',
      ]);
      esriModulesRef.current = { RasterFunction, ImageryLayer: ImageryLayer, RasterStretchRenderer };
    } catch (err) {
      console.error('Error loading ESRI modules: ', err);
      toast.error('Error al cargar módulos de ArcGIS');
    }
  };
  const createResultLayer = () => {
    setLoading(true);
    try {
      let selectedImage = selectedImageries[0]?.OBJECTID;
      if (selectedImage !== null) {
        const { RasterFunction, RasterStretchRenderer } = esriModulesRef.current

        const definitionExpression = `OBJECTID IN (${selectedImage})`

        // Crear la función de composición de bandas para RGB
        const bandArithmeticFunction = new RasterFunction({
          functionName: 'BandArithmetic',
          outputPixelType: 'F32',
          functionArguments: {
            Method: 0,
            BandIndexes: [`B${bands.r}, B${bands.g}  (B${bands.b}`],
          },
        });

        const stretchRenderer = new RasterStretchRenderer({
          stretchType: 'min-max',
          customStatistics: [
            {
              min: inputTypeAreaMin,
              max: inputTypeAreaMax,
              avg: 0.75,
              stddev: 0.1
            }
          ],
        });

        //Verificamos que no exista y si existe se elimina
        const existingLayer = jimuMapView.view.map.findLayerById('Formula de banda')
        if (existingLayer) {
          jimuMapView.view.map.remove(existingLayer)
        }
        const newImageryLayer = new ImageryLayer({
          url: selectedSensor.url,
          id: 'Formula de banda',
          visible: true,
          title: 'Formula de banda',
          definitionExpression,
          rasterFunction: bandArithmeticFunction,
          renderer: stretchRenderer,
        })
        //Se agrega la nueva capa
        jimuMapView.view.map.add(newImageryLayer)
        imageryLayerRef.current = newImageryLayer;

        newImageryLayer.when(() => {
          imageryLayerRef.current = newImageryLayer;
          setLoading(false);
        }, (err) => {
          console.error("Error cargando el layer:", err)
          setLoading(false);
        });

      }
    } catch (error) {
      console.error("No se pudo crear la capa de resultado,", error)
    }
  }

  const closeWidget = () => {
    dispatch({type: 'BAND_FORMULA', val: false})
    resetRenderer()
  }

  useEffect(() => {
    if (selectedSensor) {
      const sensor = sensors.find(s => s.title === selectedSensor.title) || sensors[2];
      setAvailableBands(sensor.bands);
      // Resetear a valores por defecto al cambiar sensor
      setBands({ r: sensor.bands[0].value, g: sensor.bands[1].value, b: sensor.bands[2].value });
    }


  }, [selectedSensor]);
  useEffect(() => {
    loadEsriModules()
  }, [jimuMapView]);
  return (

    bandFormula && (
      <FloatingPanel autoSize={true} className='formula-container' headerTitle="Fórmulas de banda" onHeaderClose={closeWidget}>
        <div className="jimu-widget widget-starter">
          {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
            <JimuMapViewComponent
              useMapWidgetId={props.useMapWidgetIds[0]}
              onActiveViewChange={activeViewChangeHandler}
            />
          )}
          <div className="bands-container p-2">
            <div className="band-selector">
              <label>Composición RGB:</label>
              <div className="band-inputs">
                <div className="mb-2">
                  <label>Rojo:</label>
                  <Select
                    value={bands.r}
                    size="sm"
                    onChange={(e) => setBands({ ...bands, r: e.target.value })}
                  >
                    {availableBands.map((band, index) => (
                      <option key={`r-${index}`} value={band.value}>
                        {band.name}
                      </option>
                    ))}
                  </Select>
                </div>

                <div className="mb-2">
                  <label>Verde:</label>
                  <Select
                    value={bands.g}
                    size="sm"
                    onChange={(e) => setBands({ ...bands, g: e.target.value })}
                  >
                    {availableBands.map((band, index) => (
                      <option key={`g-${index}`} value={band.value}>
                        {band.name}
                      </option>
                    ))}
                  </Select>
                </div>

                <div className="mb-2">
                  <label>Azul:</label>
                  <Select
                    value={bands.b}
                    size="sm"
                    onChange={(e) => setBands({ ...bands, b: e.target.value })}
                  >
                    {availableBands.map((band, index) => (
                      <option key={`b-${index}`} value={band.value}>
                        {band.name}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="stretch-gamma-controls p-2">
            <div className="control-group">
              <label>Stretch:</label>
              <Select value={stretch} size="sm" onChange={e => setStretch(e.target.value)}>
                <option value="percent-clip">0.1% Clip</option>
                <option value="min-max">Min-Max</option>
                <option value="std-dev">Desviación estándar</option>
              </Select>
            </div>

            <div className="control-group">
              <label>Gamma:</label>
              <Select value={gamma} size="sm" onChange={e => setGamma(e.target.value)}>
                <option value="1">1</option>
                <option value="0.8">0.8</option>
                <option value="1.2">1.2</option>
                <option value="0.8,0.8,0.8">0.8 (todos)</option>
              </Select>
            </div>
          </div>

          <div className="button-group p-2">
            {
              loading === true ? (
                <Button size="sm" type="primary">
                  <Loading type="DONUT" height={20} width={20} />
                </Button>

              )
                :
                (
                  <Button onClick={createResultLayer} size="sm" type="primary">Aplicar</Button>
                )
            }
            <Button onClick={resetRenderer} size="sm" type="secondary">Resetear</Button>
          </div>

          <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
      </FloatingPanel>
    )


  );
};

export default Widget;