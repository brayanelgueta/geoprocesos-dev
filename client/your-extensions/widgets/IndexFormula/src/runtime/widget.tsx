import { useState, useEffect, useRef } from 'react';
import { IMState, React, type AllWidgetProps } from 'jimu-core';
import { ToastContainer, toast } from 'react-toastify';
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import { loadModules } from 'esri-loader';
import './assets/style.css';
import ImageryLayer from '@arcgis/core/layers/ImageryLayer'

import { useSelector } from 'react-redux';
import { Button, Loading, Select, TextInput } from 'jimu-ui';

import { useLocale } from "../../../../hooks/useLocale";
import { translations } from './translations';

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

  const { t } = useLocale(translations);
  //Estados
  const selectedSensor = useSelector((state: IMState) => state.myState?.selectedSensor)
  const selectedImageries = useSelector((state: IMState) => state.myState?.selectedImages)
  const geoprocess = useSelector((state: IMState) => state.myState?.geoprocess)

  //Constante del Mapa
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>(null)
  const [bands, setBands] = useState({ r: '1', g: '2' })
  const [offset, setOffset] = useState('0')
  const [scale, setScale] = useState('5')
  const [availableBands, setAvailableBands] = useState<Band[]>([]);

  //Valores para generar el stretchRenderer
  const [inputTypeAreaMax, setInputTypeAreaMax] = useState(1);
  const [inputTypeAreaMin, setInputTypeAreaMin] = useState(-1);
  const [color, setColor] = useState('1');


  //Referencias
  const imageryLayerRef = useRef(null)
  const esriModulesRef = useRef<any>(null);

  //Estados locales
  const [loading, setLoading] = useState(false)

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
    const existingLayer = jimuMapView.view.map.findLayerById('Fórmula índices')
    if (!existingLayer) return
    jimuMapView.view.map.remove(existingLayer)
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
    }
  };
  const createResultLayer = async () => {
    setLoading(true)
    try {
      let selectedImage = selectedImageries[0]?.OBJECTID;
      if (selectedImage !== null) {
        const { RasterFunction, RasterStretchRenderer } = esriModulesRef.current

        const definitionExpression = `OBJECTID IN (${selectedImage})`

        const colorRampOptions = {
          '1': { from: '#ffe400', to: '#ff0000' },
          '2': { from: '#ff0000', to: '#00FF00' },
          '3': { from: '#00FF00', to: '#0000FF' },
          '4': { from: '#00FFFF', to: '#A020F0' },
          '5': { from: '#000000', to: '#FFFFFF' },
        };

        const selectedRamp = colorRampOptions[color];

        const bandArithmeticFunction = new RasterFunction({
          functionName: 'BandArithmetic',
          outputPixelType: 'F32',
          functionArguments: {
            Method: 0,
            BandIndexes: `(B${bands.r} - B${bands.g}) / (B${bands.r} + B${bands.g}) * (${offset} + ${scale})`,
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
          colorRamp: {
            type: "algorithmic",
            fromColor: selectedRamp.from,
            toColor: selectedRamp.to,
          }
        });
        //Verificamos que no exista y si existe se elimina
        const existingLayer = await jimuMapView.view.map.findLayerById('Fórmula índices')
        if (existingLayer) {
          jimuMapView.view.map.remove(existingLayer)
        }
        const newImageryLayer = new ImageryLayer({
          url: selectedSensor.url,
          id: 'Fórmula índices',
          visible: true,
          title: t("formulaLayer"),
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
  useEffect(() => {
    if (jimuMapView) {
      const layer = jimuMapView.view.map.allLayers.find(layer => layer.title == "Fórmula índices")
      if (layer) {
        jimuMapView.view.map.remove(layer);
      }
    }
  }, [geoprocess])
  useEffect(() => {
    if (selectedSensor) {
      const sensor = sensors.find(s => s.title === selectedSensor.title) || sensors[2];
      setAvailableBands(sensor.bands);
      // Resetear a valores por defecto al cambiar sensor
      setBands({ r: sensor.bands[0].value, g: sensor.bands[1].value });
    }


  }, [selectedSensor]);
  useEffect(() => {
    if (!jimuMapView) return
    loadEsriModules()
  }, [jimuMapView]);

  return (
    <div className="jimu-widget index-widget">
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}
      <div className="bands-main-widget-container">
        <div className="bands-title">
          <h4>{t("widgetLabel")}</h4> <span>  {t("offset")} + {t("scale")} * ((A-B)/(A+B))</span>
        </div>

        {
          selectedImageries && selectedImageries?.length < 1 ? (
            <div>
              <p>{t("formulaRule")}</p>
            </div>
          )
            :
            (
              <div className='bands-main-container'>
                <div className="bands-container">
                  <div className="band-selector-index">

                    <div className="band-inputs">
                      <div>
                        <label>{t("band")} A:</label>
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

                      <div>
                        <label>{t("band")} B:</label>
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

                    </div>
                  </div>
                  <div className="band-selector-index">
                    <div className="input-group">
                      <div className="control-group-input">
                        <label>{t("offset")}:</label>
                        <TextInput type="text" size="sm" value={offset} onChange={e => setOffset(e.target.value)} />
                      </div>

                      <div className="control-group-input">
                        <label>{t("scale")}:</label>
                        <TextInput value={scale} className="form-control" size="sm" onChange={e => setScale(e.target.value)} />

                      </div>


                    </div>
                    <div className="control-group">
                      <label>{t("render")}:</label>
                      <Select value={color} size="sm" onChange={e => setColor(e.target.value)} >
                        <option value="1">{t("yellowred")}</option>
                        <option value="2">{t("redgreen")}</option>
                        <option value="3">{t("greenblue")}</option>
                        <option value="4">{t("cianpurple")}</option>
                        <option value="5">{t("blackwhite")}</option>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="button-group">
                  {
                    loading === true ? (
                      <Button size="sm" type="primary">
                        <Loading type="DONUT" height={20} width={20} />
                      </Button>

                    )
                      :
                      (
                        <Button onClick={createResultLayer} size="sm" type="primary">{t("apply")}</Button>
                      )
                  }

                  <Button onClick={resetRenderer} size="sm" type="primary">{t("reset")}</Button>
                </div>
              </div>
            )
        }


      </div>



      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Widget;