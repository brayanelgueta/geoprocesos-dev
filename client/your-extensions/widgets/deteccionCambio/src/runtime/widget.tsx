import { useState, useEffect } from 'react';
import { IMState, React } from 'jimu-core';
import { JimuMapViewComponent } from 'jimu-arcgis';
import './assets/style.css'

import { loadModules } from 'esri-loader';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Button, Loading } from 'jimu-ui';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useLocale } from "../../../../hooks/useLocale";
import { translations } from './translations';

const Widget = (props) => {
  const { t } = useLocale(translations);
  const dispatch = useDispatch()
  const selectedImageries = useSelector((state: IMState) => state.myState?.selectedImages || [])
  const selectedSensor = useSelector((state: IMState) => state.myState?.selectedSensor)
  const changeGeoProcess = useSelector((state: IMState) => state.myState?.isReady)

  const [jimuMapView, setJimuMapView] = useState(null);

  const imgRango2 = require('./img/img2.png')
  const [loading, setLoading] = useState(false)
  const [loadQuery, setLoadQuery] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isEjecuted, setIsEjecuted] = useState(false)

  const activeViewChangeHandler = (jmv) => {
    setJimuMapView(jmv);
  };
  const ejecutarConsulta = async () => {
    setLoadQuery(true)
    try {
      var imagen1 = selectedImageries[0].OBJECTID
      var imagen2 = selectedImageries[1].OBJECTID

      if (imagen1 == null && imagen2 == null) {
        throw new Error(`Error en la carga de imagenes: ${imagen1} , ${imagen2}`);
      }

      // Construir la URL con los parámetros
      const proceso = 1;
      const entrada = imagen1 + "," + imagen2;
      //Produccion
      // const response = await fetch(`/proxy?proceso=${proceso}&Entrada=${entrada}`, {
      //   method: 'GET',
      // });
      //Desarrollo
      const response = await fetch(`http://127.0.0.1:5000/proxy?proceso=${proceso}&Entrada=${entrada}&url=${selectedSensor.url}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        setLoadQuery(false)
      }
      const data = await response.json();
      loadImageryLayer(data.urlTif)

    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      toast.error(t("superpositionError"), {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setLoadQuery(false)
    }

  };
  const loadImageryLayer = async (url_file) => {

    try {
      // const baseUrl = window.location.origin;
      const baseUrl = "http://127.0.0.1:5000"

      const imageUrl = String(url_file)

      const structuredUrl = baseUrl + imageUrl;
      // Validar la URL con una solicitud fetch
      const response = await fetch(String(structuredUrl), { method: "GET" });
      if (!response.ok) {
        throw new Error(`Error al validar la URL. Estado: ${response.status}`);
      }

      // Cargar módulos necesarios de la API de ArcGIS
      const [ImageryTileLayer] = await loadModules(["esri/layers/ImageryTileLayer"]);

      // Crear el ImageryTileLayer
      const imageryLayer = new ImageryTileLayer({
        id: "detección de cambio",
        name: t("widgetLabel"),
        url: structuredUrl,
      });

      // Agregar la capa al mapa
      if (jimuMapView) {
        jimuMapView.view.map.add(imageryLayer);
        imageryLayer.when(() => {
          jimuMapView.view.goTo(imageryLayer.fullExtent);
        });
        setIsEjecuted(true)
      }
    } catch (error) {
      console.error("Error al cargar el ImageryTileLayer:", error);

    }

  }
  const validarSuperposicion = () => {
    setLoading(true)
    try {
      const imageryLayer = jimuMapView?.view.map.findLayerById(selectedSensor?.id);

      if (jimuMapView && imageryLayer) {

        const loadEsriModules = async () => {
          const [Query, geometryEngine] = await loadModules([
            "esri/rest/support/Query",
            "esri/geometry/geometryEngine",
          ]);

          if (!isNaN(selectedImageries[0].OBJECTID) && !isNaN(selectedImageries[1].OBJECTID)) {
            // Crear la consulta para obtener las geometrías de las imágenes
            const query = new Query();
            query.where = `OBJECTID IN (${selectedImageries[0].OBJECTID}, ${selectedImageries[1].OBJECTID})`; // Buscar las imágenes por sus ObjectID
            query.returnGeometry = true; // Devolver geometrías
            query.outFields = ["OBJECTID"]; // Devolver el campo OBJECTID

            // Ejecutar la consulta en la capa
            const results = await imageryLayer.queryFeatures(query);

            // Verificar si se obtuvieron resultados
            if (results.features.length === 2) {
              const geometries = results.features.map((feature) => feature.geometry);

              // Validar si hay intersección entre las dos geometrías
              const intersectan = geometryEngine.intersects(geometries[0], geometries[1]);

              const elements = document.querySelectorAll(".contentNameImg");
              if (intersectan) {

                setIsValid(true)
                // Iterar sobre cada elemento y aplicar los cambios
                elements.forEach((element) => {
                  element.classList.remove("colorBoderBottom1");
                  element.classList.add("colorBoderBottom2");
                });

                document.getElementById("img1Data").style.color = "rgb(78, 248, 89)"
                document.getElementById("img2Data").style.color = "rgb(78, 248, 89)"
                document.getElementById("validacionCD").style.color = "rgb(78, 248, 89)"

                document.getElementById("validacionCD").innerText = t("valid")

              } else {
                // Iterar sobre cada elemento y aplicar los cambios
                elements.forEach((element) => {
                  element.classList.remove("colorBoderBottom1");
                  element.classList.add("colorBoderBottom3")
                });


                document.getElementById("img1Data").style.color = "rgb(248, 78, 78)"
                document.getElementById("img2Data").style.color = "rgb(248, 78, 78)"
                document.getElementById("validacionCD").style.color = "rgb(248, 78, 78)"

                document.getElementById("validacionCD").innerText = t("invalid")
              }
            } else {
              console.error("No se encontraron ambas geometrías para validar la superposición");
            }
          } else {
            throw new Error("Uno o ambos valores no se pueden convertir a entero.");
          }

        };

        loadEsriModules();
      } else {
        console.error("No se encontró el mapa o la capa");
        setLoading(false)
      }
    } catch (error) {
      console.error("Error al consultar las geometrías:", error);
      setLoading(false)
    }
    setLoading(false)
  };

  //Limpia las capas generadas si se cambia las imagenes seleccionadas
  const cleanLayers = (id: String) => {
    if (jimuMapView) {
      const layer = jimuMapView.view.map.findLayerById(id);
      if (layer) {
        jimuMapView.view.map.remove(layer);
      }
    }

  }
  
  useEffect(() => {
    dispatch({ type: "CHANGE_DETECTION_READY", val: true })
  }, [])
  useEffect(() => {
    setIsValid(false)
    setIsEjecuted(false)
    cleanLayers("detección de cambio")
  }, [selectedImageries, changeGeoProcess])

  return (
    <div className="jimu-widget widgetChangeDetection">
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds?.[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}


      <div className='homeCD'>
        <ToastContainer />
        <h4>{t("widgetLabel")}</h4>
        {
          selectedImageries && selectedImageries?.length < 2 ? (

            <div className='change-detection-description'>
              <p>{t("text")}</p>
            </div>
          )
            :
            (
              <div className='contentWidgetsCD'>
                {
                  isEjecuted === true ?
                    <div className='graphic-container'>
                      <p>{t("graphicLabel")}</p>
                      <img id='graphic-image' src={imgRango2} />

                    </div>
                    :
                    (
                      <div className='main-content' id='btn1Data'>
                        <div className='contentNameImgs'>
                          <p id='parrafoValidacion'>{t("validation")} : <b id='validacionCD'>{t("withoutValidation")}</b></p>

                          {
                            selectedImageries?.map((item, index) => (
                              <div id='contentNameImg' className='contentNameImg colorBoderBottom1'>
                                <p>{t("image")} {index + 1}:</p>
                                <p id={`img${index + 1}Data`}>{item?.OBJECTID}</p>
                              </div>
                            ))
                          }
                        </div>
                        <div className='contentBtnFlujo'>
                          {
                            !isValid ?
                              (
                                loading === true ? (
                                  <Button size="sm" type="primary"  >
                                    <Loading type="DONUT" height={20} width={20} />
                                  </Button>

                                )
                                  :
                                  (
                                    <Button onClick={validarSuperposicion} size="sm">{t("validate")}</Button>
                                  )
                              ) :
                              (
                                loadQuery === true ? (
                                  <Button size="sm" type="primary">
                                    <Loading type="DONUT" height={20} width={20} />
                                  </Button>

                                )
                                  :
                                  (
                                    <Button onClick={ejecutarConsulta} size="sm" type="primary">{t("runQuery")}</Button>
                                  )
                              )
                          }
                        </div>
                      </div>
                    )
                }
              </div>
            )
        }
      </div>
    </div>
  )
}

export default Widget;
