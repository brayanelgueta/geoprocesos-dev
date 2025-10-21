import React, { useEffect, useState, useRef } from 'react';
import { AllWidgetProps, IMState } from 'jimu-core';
import { JimuMapViewComponent } from 'jimu-arcgis';
import { loadModules } from 'esri-loader';
import './assets/style.css';
import { useSelector } from 'react-redux';
import { Button, Loading, Select, MultiRangeSlider } from 'jimu-ui';

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


interface IMConfig {
  exampleConfigProperty: string;
}
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

const Widget: React.FC<AllWidgetProps<IMConfig>> = (props) => {

  const { t } = useLocale(translations);

  const selectedImageries = useSelector((state: IMState) => state.myState?.selectedImages)
  const selectedSensor = useSelector((state: IMState) => state.myState?.selectedSensor)
  const geoprocess = useSelector((state: IMState) => state.myState?.geoprocess)

  const [jimuMapView, setJimuMapView] = useState(null);
  const [inputMinRange, setInputMinRange] = useState(0);
  const [inputMaxRange, setInputMaxRange] = useState(0.5);
  const [inputTypeAreaMax, setInputTypeAreaMax] = useState(1);
  const [inputTypeAreaMin, setInputTypeAreaMin] = useState(-1);
  const [selectedFormula, setSelectedFormula] = useState('(b4 - b1) / (b4 + b1)');
  const [color, setColor] = useState([0, 255, 0, 255]);
  const [loading, setLoading] = useState(false);
  const [isFire, setIsFire] = useState(false);
  const [availableSensors, setAvailableSensors] = useState(sensors)
  const [isAplied, setIsAplied] = useState(false)


  //refs
  const imageryLayerRef = useRef(null);
  const esriModulesRef = useRef(null);


  const activeViewChangeHandler = (jmv) => {
    if (jmv) {
      // if (jimuMapView) {
      //   jimuMapView.view.watch('extent', null);
      //   jimuMapView.view.watch('zoom', null);
      // }

      setJimuMapView(jmv);

      // if (jmv) {
      //   jmv.view.watch('extent', aplicarMascara);
      //   jmv.view.watch('zoom', aplicarMascara);
      // }
    }
  };

  const handleRangeChange = (minValue, maxValue) => {
    setInputMinRange(minValue)
    setInputMaxRange(maxValue)
    crearImageryLayer();
  };

  const handleFormulaChange = (event) => {
    setIsAplied(false)
    removeLayer()
    const formula = event.target.value;
    switch (formula) {


      case "NDVI":
        setIsFire(false)
        //setIndiceType("NDVI");
        if (selectedSensor) {
          const sensor = availableSensors.find(s => s.title === selectedSensor.title || s.title === "Default");

          if (sensor?.title === 'Worldview2') {
            setSelectedFormula(`(B${sensor.bands[6]?.value} - B${sensor.bands[4]?.value}) / (B${sensor.bands[6]?.value} + B${sensor.bands[4]?.value})`);
          }
          if (sensor?.title === 'OWD_FasatC_MS_v2_20250312') {
            setSelectedFormula(`(B${sensor.bands[3]?.value} - B${sensor.bands[0]?.value}) / (B${sensor.bands[3]?.value} + B${sensor.bands[0]?.value})`);
          }
          if (sensor?.title === 'Default') {
            setSelectedFormula(`(B${sensor.bands[3]?.value} - B${sensor.bands[2]?.value}) / (B${sensor.bands[3]?.value} + B${sensor.bands[2]?.value})`);
          }
        }
        setColor([0, 255, 0, 255]);
        setInputTypeAreaMax(1);
        setInputTypeAreaMin(-1);
        setInputMinRange(0.3);
        setInputMaxRange(0.7)
        break;
      case "SAVI":
        setIsFire(false)
        if (selectedSensor) {
          const sensor = availableSensors.find(s => s.title === selectedSensor.title || s.title === "Default");
          if (sensor?.title === 'Worldview2') {
            setSelectedFormula(`((B${sensor.bands[6]?.value} - B${sensor.bands[4]?.value}) / (B${sensor.bands[6]?.value} + B${sensor.bands[4]?.value} + 0,5)) * (1 + 0,5)`);
          }

          if (sensor?.title === 'OWD_FasatC_MS_v2_20250312') {
            setSelectedFormula(`((B${sensor.bands[3]?.value} - B${sensor.bands[0]?.value}) / (B${sensor.bands[3]?.value} + B${sensor.bands[0]?.value} + 0,5)) * (1 + 0,5)`);
          }
          if (sensor?.title === 'Default') {
            setSelectedFormula(`((B${sensor.bands[3]?.value} - B${sensor.bands[2]?.value}) / (B${sensor.bands[3]?.value} + B${sensor.bands[2]?.value} + 0,5)) * (1 + 0,5)`);
          }

        }

        setColor([255, 255, 0, 255]);
        setInputTypeAreaMax(1.5);
        setInputTypeAreaMin(-1.5);
        setInputMinRange(0.3);
        setInputMaxRange(0.7)
        break;
      case "NDWI":
        setIsFire(false)
        //setIndiceType("NDWI");
        if (selectedSensor) {
          const sensor = availableSensors.find(s => s.title === selectedSensor.title || s.title === "Default");

          if (sensor?.title === 'Worldview2') {
            setSelectedFormula(`(B${sensor.bands[2]?.value} - B${sensor.bands[6]?.value}) / (B${sensor.bands[2]?.value} + B${sensor.bands[6]?.value})`);
          }
          if (sensor?.title === 'OWD_FasatC_MS_v2_20250312') {
            setSelectedFormula(`(B${sensor.bands[1]?.value} - B${sensor.bands[3]?.value}) / (B${sensor.bands[1]?.value} + B${sensor.bands[3]?.value})`);
          }
          if (sensor?.title === 'Default') {
            setSelectedFormula(`(B${sensor.bands[1]?.value} - B${sensor.bands[3]?.value}) / (B${sensor.bands[1]?.value} + B${sensor.bands[3]?.value})`);
          }
        }
        setColor([0, 0, 255, 255]);
        setInputTypeAreaMax(1);
        setInputTypeAreaMin(-1);
        setInputMinRange(0.3);
        setInputMaxRange(0.7)
        break;
      case "BAI":
        setIsFire(true)

        break;
      default:
        break;
    }
  };

  const crearImageryLayer = () => {

    setLoading(true);
    //Siempre y cuando el array selectedImageries tenga al menos 2 elementos
    if (selectedImageries.length > 0) {
      //Se asignan las imagenes a las variables
      let img1Data = selectedImageries[0]?.OBJECTID;

      // Validar que al menos una selección sea válida
      if (img1Data !== null) {
        //Si exite el mapa y existan los modulos de Esri
        if (jimuMapView && esriModulesRef.current) {
          //Se utilizan los modulos de Esri
          const { ImageryLayer, RasterFunction, RasterStretchRenderer } = esriModulesRef.current;
          //Se busca la capa 
          const imageryLayer = jimuMapView.view.map.findLayerById(selectedSensor?.id);
          console.log({ imageryLayer })
          //Se asigna la url de la capa
          const layerUrl = imageryLayer.url
          //Se crea la expresion de la consulta
          const definitionExpression = `OBJECTID IN (${img1Data})`;

          //Se crea la funcion Raster de la consulta
          const bandArithmeticFunction = new RasterFunction({
            functionName: 'BandArithmetic',
            outputPixelType: 'F32',
            functionArguments: {
              Method: 0,
              BandIndexes: selectedFormula,
            },
          });

          const remapFunction = new RasterFunction({
            functionName: 'Remap',
            outputPixelType: 'F32',
            functionArguments: {
              Raster: bandArithmeticFunction,
              InputRanges: [inputMinRange, inputMaxRange],
              OutputValues: [2],
              NoDataRanges: [-Infinity, inputTypeAreaMin, inputTypeAreaMax, Infinity],
              AllowUnmatched: false,
            },
          });

          const stretchRenderer = new RasterStretchRenderer({
            stretchType: 'min-max',
            statistics: [
              {
                min: inputTypeAreaMin,
                max: inputTypeAreaMax,
                avg: (inputTypeAreaMin + inputTypeAreaMax) / 2,
                stddev: 0.1,
              },
            ],
            colorRamp: {
              type: 'algorithmic',
              fromColor: [255, 255, 255, 0],
              toColor: color,
            },
          });
          //Se crea la nueva capa filtrada por id
          const newImageryLayer = new ImageryLayer({
            url: layerUrl,
            id: 'Índices espectrales',
            visible: true,
            title: t("widgetLabel"),
            definitionExpression, // Filtro por OBJECTID
          });

          // Eliminar la capa existente si ya está cargada
          const existingLayer = jimuMapView.view.map.findLayerById('Índices espectrales');
          if (existingLayer) {
            jimuMapView.view.map.remove(existingLayer);
          }

          // Agregar la nueva capa con los filtros y renderizadores
          jimuMapView.view.map.add(newImageryLayer);

          // Asignar funciones y renderizador
          newImageryLayer.rasterFunction = remapFunction;
          newImageryLayer.renderer = stretchRenderer;

          imageryLayerRef.current = newImageryLayer;

          // Validar cuando la capa esté lista
          newImageryLayer.when(() => {
            setLoading(false)
          }, (err) => {
            console.error("Error cargando el layer:", err)
            setLoading(false);
          });
        }
      }
    }

  };

  const indiceBai = async () => {
    setLoading(true);
    try {

      const img1Data = selectedImageries[0].OBJECTID;

      const proceso = 5;
      const entrada = img1Data;
      var urlConsulta = `http://127.0.0.1:5000/proxy?proceso=${proceso}&Entrada=${entrada}&url=${selectedSensor.url}`

      const response = await fetch(urlConsulta, {
        method: 'GET',
      });

      const data = await response.json();

      
      const responseData = await fetch(`http://127.0.0.1:5000${data.urlJson}`, {
        method: 'GET',
      });

      const dataValidada = await responseData.json();

      //setIndiceType("BAI");
      if (selectedSensor) {
        const sensor = sensors.find(s => s.title === selectedSensor.title);
        if (sensor?.title === 'Worldview2') {
          setSelectedFormula(`1 / (((0,1 - B${sensor.bands[4]?.value})^2) + ((0,06 - B${sensor.bands[6]?.value})^2))`);
        }
        if (sensor?.title === 'OWD_FasatC_MS_v2_20250312') {
          setSelectedFormula(`1 / (((0,1 - B${sensor.bands[0]?.value})^2) + ((0,06 - B${sensor.bands[3]?.value})^2))`);
        }
        if (sensor?.title === 'Default') {
          setSelectedFormula(`1 / (((0,1 - B${sensor.bands[2]?.value})^2) + ((0,06 - B${sensor.bands[3]?.value})^2))`);
        }
      }

      console.log(dataValidada)
      setColor([255, 0, 0, 255]);
      setInputTypeAreaMin(parseFloat(dataValidada.etiquetas.etiqueta_1));
      setInputMinRange(parseFloat(dataValidada.etiquetas.etiqueta_3));
      setInputMaxRange(parseFloat(dataValidada.etiquetas.etiqueta_4));
      setInputTypeAreaMax(parseFloat(dataValidada.etiquetas.etiqueta_5));


    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      setLoading(false);
    }
  }
  //Se crea una funcion para cargar los modulos de Esri
  const loadEsriModules = () => {
    if (jimuMapView) {
      loadModules([
        'esri/layers/support/RasterFunction',
        'esri/renderers/RasterStretchRenderer',
        'esri/layers/ImageryLayer',
        'esri/rest/query',
        'esri/widgets/Histogram',
        "esri/request"
      ])
        .then(([RasterFunction, RasterStretchRenderer, ImageryLayer, query, Histogram, esriRequest]) => {
          esriModulesRef.current = { RasterFunction, RasterStretchRenderer, ImageryLayer, query, Histogram, esriRequest };
        })
        .catch((err) => {
          console.error('Error loading ESRI modules: ', err);
        });
    }
  }
  const removeLayer = () => {
    if (selectedSensor) {
      const existingLayer = jimuMapView.view.map.findLayerById('Índices espectrales');
      if (existingLayer) {
        jimuMapView.view.map.remove(existingLayer);
      }
    }
  }
  useEffect(() => {
    removeLayer()
    if (selectedSensor) {
      const sensor = availableSensors.find(s => s.title === selectedSensor.title || s.title === "Default");
      if (sensor?.title === 'Worldview2') {
        setSelectedFormula(`(B${sensor.bands[6]?.value} - B${sensor.bands[4]?.value}) / (B${sensor.bands[6]?.value} + B${sensor.bands[4]?.value})`);
      }
      if (sensor?.title === 'OWD_FasatC_MS_v2_20250312') {
        setSelectedFormula(`(B${sensor.bands[3]?.value} - B${sensor.bands[0]?.value}) / (B${sensor.bands[3]?.value} + B${sensor.bands[0]?.value})`);
      }
      if (sensor?.title === 'Default') {
        setSelectedFormula(`(B${sensor.bands[3]?.value} - B${sensor.bands[2]?.value}) / (B${sensor.bands[3]?.value} + B${sensor.bands[2]?.value})`);
      }
    }

    setColor([0, 255, 0, 255]);
    setInputTypeAreaMax(1);
    setInputTypeAreaMin(-1);
    setInputMinRange(0.3);
    setInputMaxRange(0.7)
  }, [selectedSensor, geoprocess]);

  useEffect(() => {
    loadEsriModules()
  }, [jimuMapView]);

  //Ejecuta la creacion del layer de las imagenes, y detecta cuando se modifica el input range que se encarga de calcular nuevamente el rango
  //Tambien cuando cambia el array de imagenes seleccionadas

  useEffect(() => {
    if (selectedImageries.length > 0) {
      if (selectedSensor) {
        const sensor = availableSensors.find(s => s.title === selectedSensor.title || s.title === "Default");
        if (sensor?.title === 'Worldview2') {
          setSelectedFormula(`(B${sensor.bands[6]?.value} - B${sensor.bands[4]?.value}) / (B${sensor.bands[6]?.value} + B${sensor.bands[4]?.value})`);
        }
        if (sensor?.title === 'OWD_FasatC_MS_v2_20250312') {
          setSelectedFormula(`(B${sensor.bands[3]?.value} - B${sensor.bands[0]?.value}) / (B${sensor.bands[3]?.value} + B${sensor.bands[0]?.value})`);
        }
        if (sensor?.title === 'Default') {
          setSelectedFormula(`(B${sensor.bands[3]?.value} - B${sensor.bands[2]?.value}) / (B${sensor.bands[3]?.value} + B${sensor.bands[2]?.value})`);
        }
      }

      setColor([0, 255, 0, 255]);
      setInputTypeAreaMax(1);
      setInputTypeAreaMin(-1);
      setInputMinRange(0.3);
      setInputMaxRange(0.7)

    }
    if (selectedImageries.length === 0 && jimuMapView) {
      const existingLayer = jimuMapView.view.map.findLayerById('Índices espectrales');
      if (existingLayer) {
        jimuMapView.view.map.remove(existingLayer);
      }
    }

  }, [selectedImageries, selectedSensor])

  useEffect(() => {
    if (isFire) {
      setLoading(true)
      indiceBai()
        .finally(() => {
          setLoading(false)
        })
    }


  }, [isFire])

  return (
    <div className="jimu-widget widgetMask">
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}
      <div className='homeMask'>
        <div>
          <h4>{t("widgetLabel")}</h4>
        </div>
        {
          selectedImageries.length === 0 ? (
            <div className='spectral-index-description'>
              <p>{t("spectralRule")}</p>
            </div>
          )
            :
            (
              <div id='activeMask2'>
                <div className='contentSliceMask-Base'>
                  <div className='selectClassIndice'>
                    <label htmlFor="formulaSelect">{t("selectName")}</label>
                    <Select id="formulaSelect" onChange={handleFormulaChange} size="sm" defaultValue={"NDVI"}>
                      <option value="NDVI">{t("ndvi")} - NDVI</option>
                      <option value="SAVI">{t("savi")} - SAVI</option>
                      <option value="NDWI">{t("ndwi")} - NDWI</option>
                      <option value="BAI">{t("bai")}</option>
                    </Select>
                  </div>

                  <div className='contentSliceMask'>
                    <MultiRangeSlider
                      aria-label="Multi range slider"
                      maxValue={inputMaxRange}
                      minValue={inputMinRange}
                      max={inputTypeAreaMax}
                      min={inputTypeAreaMin}
                      onAcceptValue={() => { }}
                      onChange={(min, max, activeThumb) => handleRangeChange(min, max)}
                      step={isFire ? 0.00001 : 0.05}
                      tooltip

                    />
                    
                    {/* Marcadores de líneas pequeñas */}
                    <div className='slider-marks'>
                      <div className='slider-mark'></div>
                      <div className='slider-mark'></div>
                      <div className='slider-mark'></div>
                      <div className='slider-mark'></div>
                      <div className='slider-mark'></div>
                    </div>
                    
                    <div className='contentSliceMaskPri'>
                      <label className='label1Mask'>{inputTypeAreaMin.toFixed(4)}</label>
                      <label className='label1Mask'>{((inputTypeAreaMax / 2) + inputTypeAreaMin).toFixed(4)}</label>
                      <label className='centerMask label1Mask'>{((inputTypeAreaMin + inputTypeAreaMax) / 2).toFixed(4)}</label>
                      <label className='label1Mask'>{(inputTypeAreaMax / 2).toFixed(4)}</label>
                      <label className='rightMask label1Mask'>{(inputTypeAreaMax).toFixed(4)}</label>
                    </div>
                  </div>

                  <div className='mask-buttons'>
                    {
                      loading === true ? (
                        <Button size="sm" type="primary">
                          <Loading type="DONUT" height={20} width={20} />
                        </Button>
                      )
                        :
                        (
                          <Button onClick={() => { crearImageryLayer(), setIsAplied(true) }} size="sm" type="primary">{t("apply")}</Button>
                        )
                    }
                  </div>
                </div>
              </div>
            )

        }

      </div>
    </div>
  );
};

export default Widget;