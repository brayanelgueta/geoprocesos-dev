import React, { useState, useEffect } from 'react';
import { JimuMapViewComponent } from 'jimu-arcgis';
import './assets/style.css';
import { loadModules } from 'esri-loader';
import { useSelector } from 'react-redux';
import { IMState, AllWidgetProps } from 'jimu-core';
import { Button, Loading, TextInput } from 'jimu-ui';
import { ToastContainer, toast, Bounce } from 'react-toastify';

import { useLocale } from "../../../../hooks/useLocale";
import { translations } from './translations';

const Widget = (props: AllWidgetProps<any>) => {

  const { t } = useLocale(translations);

  const selectedSensor = useSelector((state: IMState) => state.myState?.selectedSensor);
  const selectedImageries = useSelector((state: IMState) => state.myState?.selectedImages);
  const geoprocess = useSelector((state: IMState) => state.myState?.geoprocess)

  const [jimuMapView, setJimuMapView] = useState(null);
  const [showBuffer, setShowBuffer] = useState(true);
  const [loadingIncendio, setLoadingIncendio] = useState(false);
  const [loadingInundacion, setLoadingInundacion] = useState(false);
  const [selectedPolygon, setSelectedPolygon] = useState(null);
  const [loadingBuffer, setLoadingBuffer] = useState(false);
  const [areaBuffer, setAreaBuffer] = useState(0);
  const [bufferDistance, setBufferDistance] = useState(1); // Estado para el input
  const [buffer, setBuffer] = useState(null);

  const activeViewChangeHandler = (jmv) => {
    setJimuMapView(jmv);
  };

  const handleBufferChange = (event) => {
    const value = event.target.value;
    if (value > 100) {
      toast.warning(t('minKmWarning'), {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
      setBufferDistance(100)
      return;
    }
    if (value < 0) {
      toast.warning(t('maxKmWarning'), {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
      setBufferDistance(1)
      return;
    }
    setBufferDistance(value); // Actualiza el estado con el nuevo valor del input
  };

  const cargarGeometriaEnMapa = async (geojsonFileName, proceso) => {
    if (!jimuMapView) return;
    if (!geojsonFileName) {
      throw new Error("No se recibió un nombre de archivo válido.");
    }

    try {
      // Obtener la URL base dinámicamente
      // const baseUrl = window.location.origin;
      const baseUrl = "http://127.0.0.1:5000";
      const queryUrl = String(baseUrl + geojsonFileName);


      const layerResponse = await fetch(queryUrl);

      if (!layerResponse.ok) {
        throw new Error(`Error al consultar la capa: ${layerResponse.status} ${layerResponse.statusText}`);
      }

      const geojsonData = await layerResponse.json();


      const [FeatureLayer, Graphic, Polygon, SimpleFillSymbol, geometryEngine] = await loadModules([
        "esri/layers/FeatureLayer",
        "esri/Graphic",
        "esri/geometry/Polygon",
        "esri/symbols/SimpleFillSymbol",
        "esri/geometry/geometryEngine"
      ]);

      var colorPoligon
      var nombreCapa

      if (proceso == 2) {
        colorPoligon = new SimpleFillSymbol({
          color: [255, 0, 0, 0.5],
          outline: { color: [255, 0, 0], width: 1 }
        })

        nombreCapa = t("fireLayer")
      } else if (proceso == 3) {
        colorPoligon = new SimpleFillSymbol({
          color: [0, 0, 255, 0.5],
          outline: { color: [0, 0, 255], width: 1 }
        })

        nombreCapa = t("floodLayer")
      }

      if (colorPoligon != null) {
        const featureLayer = new FeatureLayer({
          title: nombreCapa,
          source: [],
          objectIdField: "OBJECTID",
          fields: [
            { name: "OBJECTID", alias: "OBJECTID", type: "oid" },
            { name: "area_m2", alias: "Área (m²)", type: "double" },
            { name: "area_ha", alias: "Área (ha)", type: "double" },
            { name: "area_km2", alias: "Área (km²)", type: "double" }
          ],
          renderer: {
            type: "simple",
            symbol: colorPoligon
          }
        });

        const graphics = [];
        let graphicIndex = 0;

        geojsonData.features.forEach((feature) => {
          let geometries = [];

          if (feature.geometry.type === "Polygon") {
            geometries.push(new Polygon({
              rings: feature.geometry.coordinates,
              spatialReference: jimuMapView.view.spatialReference
            }));
          } else if (feature.geometry.type === "MultiPolygon") {
            feature.geometry.coordinates.forEach(polygonCoordinates => {
              geometries.push(new Polygon({
                rings: polygonCoordinates,
                spatialReference: jimuMapView.view.spatialReference
              }));
            });
          }

          geometries.forEach(geometry => {
            const areaM2 = geometryEngine.geodesicArea(geometry, "square-meters");
            const areaHa = areaM2 / 10000;
            const areaKm2 = areaM2 / 1_000_000;

            graphics.push(new Graphic({
              geometry: geometry,
              attributes: {
                OBJECTID: graphicIndex,
                area_m2: areaM2,
                area_ha: areaHa,
                area_km2: areaKm2
              }
            }));
            graphicIndex++;
          });
        });

        featureLayer.source = graphics;

        // Agregar la capa al mapa si no existe una con el mismo nombre
        const existingLayer = jimuMapView.view.map.layers.find(layer => layer.title === "Poligono desastre");
        if (existingLayer) {
          jimuMapView.view.map.remove(existingLayer);
        }

        jimuMapView.view.map.add(featureLayer);


      }
    } catch (error) {
      console.error("Error al cargar la geometría en el mapa:", error);
    }
  };

  const incendio = async () => {
    setLoadingIncendio(true)
    if (jimuMapView) {
      try {

        let imagen1 = selectedImageries[0]?.OBJECTID

        // Construir la URL con los parámetros
        const proceso = 2;
        const entrada = imagen1
        //Desarrollo
        const response = await fetch(`http://127.0.0.1:5000/proxy?proceso=${proceso}&Entrada=${entrada}&url=${selectedSensor.url}`, {
          method: 'GET',
        }).finally(() => {
          setLoadingIncendio(false)
        });;

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
          setLoadingIncendio(false)

        }

        const responseData = await response.json();

        const urlLayer = responseData.PoligonGeoJson;

        await cargarGeometriaEnMapa(urlLayer, proceso);

        setLoadingIncendio(false)
        setShowBuffer(true)

      } catch (error) {
        toast.error(t("fireError"), {
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
      }

    }
  };

  const inundacion = async () => {
    setLoadingInundacion(true)

    if (!jimuMapView) return
    try {
      let imagen1 = selectedImageries[0]?.OBJECTID

      if (imagen1 == null) {
        throw new Error(`Error en la carga de imagenes: ${imagen1}`);
        setLoadingInundacion(false)
      }

      // Construir la URL con los parámetros
      const proceso = 3;
      const entrada = imagen1


      //Desarrollo
      const response = await fetch(`http://127.0.0.1:5000/proxy?proceso=${proceso}&Entrada=${entrada}&url=${selectedSensor.url}`, {
        method: 'GET',
      }).finally(() => {
        setLoadingInundacion(false)
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        setLoadingInundacion(false)
      }
      const responseData = await response.json();

      const urlLayer = responseData.PoligonGeoJson;

      console.log({urlLayer})
      await cargarGeometriaEnMapa(urlLayer, proceso);
      setLoadingInundacion(false)
    } catch (error) {
      console.error(error)
      toast.error(t("floodError"), {
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
    }


  };

  const findBufferGeometry = () => {
    if (!jimuMapView) {
      return;
    }

    const bufferGraphic = jimuMapView.view.graphics.items.find(
      (graphic) => graphic.attributes && graphic.attributes.id === "buffer_DI"
    );
    if (!bufferGraphic) {
      return;
    }
    return bufferGraphic.geometry;
  };

  const startDA = async (riesgo: String) => {
    try {
      if (selectedImageries.length == 0) {
        toast.warning(`Debe seleccionar una imagen antes de ejecutar este proceso`, {
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
        setLoadingIncendio(false)
        setLoadingInundacion(false)
        return;
      } else {
        if (jimuMapView) {
          let dagerZoneLayer1 = jimuMapView.view.map.layers.find(layer => layer.title === t("fireLayer"));
          let dagerZoneLayer2 = jimuMapView.view.map.layers.find(layer => layer.title === t("floodLayer"));

          if (!dagerZoneLayer1 && riesgo === "incendio") {
            await incendio()
            dagerZoneLayer1 = jimuMapView.view.map.layers.find(layer => layer.title === t("fireLayer"));
          }
          if (!dagerZoneLayer2 && riesgo === "inundacion") {
            await inundacion()
            dagerZoneLayer2 = jimuMapView.view.map.layers.find(layer => layer.title === t("floodLayer"));
          }


          if (jimuMapView && dagerZoneLayer1 || dagerZoneLayer2) {

            if (dagerZoneLayer1) {
              capaTemporal(dagerZoneLayer1, riesgo);
            }
            if (dagerZoneLayer2) {
              capaTemporal(dagerZoneLayer2, riesgo);
            }

          }

        }
      }


    } catch (error) {
      console.error("jimuMapView o capa no encontrada.");
    }


  };

  const capaTemporal = async (dagerZoneLayer, riesgo: String) => {

    setShowBuffer(true)
    const [Sketch, GraphicsLayer, SimpleFillSymbol] = await loadModules([
      "esri/widgets/Sketch",
      "esri/layers/GraphicsLayer",
      "esri/symbols/SimpleFillSymbol"
    ]);

    // Crear una capa gráfica temporal
    const tempGraphicsLayer = new GraphicsLayer({
      id: "tempGraphicsLayer",
      title: t("bufferLayer")
    });
    jimuMapView.view.map.add(tempGraphicsLayer);

    // Obtener las entidades de la capa original y copiarlas a la capa temporal
    const query = dagerZoneLayer.createQuery();
    query.where = "1=1"; // Seleccionar todos los elementos
    query.returnGeometry = true;
    query.outSpatialReference = jimuMapView.view.spatialReference;

    const results = await dagerZoneLayer.queryFeatures(query);
    results.features.forEach((feature) => {
      const graphic = feature.clone();
      graphic.symbol = new SimpleFillSymbol({
        color: riesgo === "incendio" ? [255, 0, 0, 0.8] : [0, 0, 255, 0.5],
        outline: null
      });

      tempGraphicsLayer.add(graphic);
      tempGraphicsLayer.listMode = "hide"
    });

    // Configurar el Sketch para trabajar con la capa temporal
    const sketchEdit = new Sketch({
      view: jimuMapView.view,
      layer: tempGraphicsLayer,
      creationMode: "update",
      availableCreateTools: [""],
      visibleElements: {
        createTools: false,
        selectionTools: false,
        settingsMenu: false,
        undoRedoMenu: false
      },
      defaultUpdateOptions: {
        enableScaling: true,
        enableRotation: true,
        multipleSelectionEnabled: false,
        tool: "move",

      },
      container: "mySketchContainerPunto",
    });

    // Capturar el polígono seleccionado
    sketchEdit.on("update", async (event) => {
      if (event.state === "active" || event.state === "start") {
        if (
          event.graphics &&
          event.graphics[0].geometry.type === "polygon" // Verificar que es un polígono
        ) {
          const polygonGeometry = event.graphics[0].geometry;

          setSelectedPolygon(polygonGeometry);
        }
      }

    });


  }

  const ejecutarBuffer = async () => {
    if (!selectedPolygon) {
      toast.warning(t("bufferWarning"), {
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
      return;
    }

    setLoadingBuffer(true)

    try {
      const [geometryEngine, Graphic] = await loadModules([
        "esri/geometry/geometryEngine",
        "esri/Graphic",
      ]);

      // Convertir el valor del input a número (distancia del buffer)
      const bufferDistance = document.getElementById("inputBuffer") as HTMLInputElement
      const distanceKm = parseFloat(bufferDistance.value);
      const distanceMeters = distanceKm * 1000;

      //Se eliminar el buffer anterior
      const view = jimuMapView.view;
      view.graphics.items
        .filter((g) => g.attributes?.id === "buffer_DI")
        .forEach((g) => view.graphics.remove(g));


      // Generar el buffer con la distancia ingresada
      const bufferGeometry = geometryEngine.buffer(selectedPolygon, distanceMeters, "meters");

      // Calcular área del buffer en m²
      const areaBuffer = geometryEngine.geodesicArea(bufferGeometry, "square-meters");
      setAreaBuffer(areaBuffer)

      // Crear un gráfico para el buffer y agregarlo al mapa
      const bufferGraphic = new Graphic({
        geometry: bufferGeometry,
        symbol: {
          type: "simple-fill",
          color: [255, 0, 0, 0.1],
          outline: {
            color: [255, 0, 0],
            width: 2,
          },
        },
        attributes: {
          id: 'buffer_DI' // ID único basado en timestamp
        }
      });

      setBuffer(bufferGraphic)

      view.graphics.add(bufferGraphic);

    } catch (error) {
      console.error("Error al generar el buffer:", error);
      toast.error(t("bufferError"), {
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
      setLoadingBuffer(false)
    }

  };

  const dibujarLineasProximidad = async (touchingPolygon, geometriesInBuffer) => {
    if (!touchingPolygon || geometriesInBuffer.length === 0) {
      console.warn("No hay geometrías para conectar.");
      return;
    }

    const [geometryEngine, Polyline, Graphic, GraphicsLayer] = await loadModules([
      "esri/geometry/geometryEngine",
      "esri/geometry/Polyline",
      "esri/Graphic",
      "esri/layers/GraphicsLayer",
    ]);

    // Crear o limpiar la capa de líneas de proximidad
    let lineLayer = jimuMapView.view.map.findLayerById("proximityLinesLayer");
    if (!lineLayer) {
      lineLayer = new GraphicsLayer({ id: "proximityLinesLayer", title: t("proximityLayer") });
      jimuMapView.view.map.add(lineLayer);
    }

    // Obtener centroide del polígono central
    const centroide = touchingPolygon.geometry.centroid;

    // Dibujar una línea desde el centroide a cada geometría en geometriesInBuffer



    geometriesInBuffer.forEach((geometry) => {
      let destino;

      if (geometry.centroid) {
        destino = geometry.centroid; // Si la geometría tiene centroide, usarlo
      } else if (geometry.extent) {
        destino = geometry.extent.center; // Si tiene `extent`, usar su centro
      } else if (geometry.type === "point") {
        destino = geometry; // Si es un punto, usarlo directamente
      } else {
        console.warn("Geometría sin centroide ni extent, ignorando:", geometry);
        return; // Ignorar la geometría si no tiene centroide, extent ni es un punto
      }

      const lineGeometry = new Polyline({
        paths: [
          [centroide.x, centroide.y],
          [destino.x, destino.y],
        ],
        spatialReference: jimuMapView.view.spatialReference,
      });

      const distanceMeters = geometryEngine.geodesicLength(lineGeometry, "meters");
      const distanceKilometers = distanceMeters / 1000;

      const lineGraphic = new Graphic({
        geometry: lineGeometry,
        symbol: {
          type: "simple-line",
          color: [0, 0, 255], // Azul
          width: 2,
        },
        attributes: {
          distance_m: distanceMeters.toFixed(2),
          distance_km: distanceKilometers.toFixed(2)
        },
        popupTemplate: {
          title: t("proximityLayer"),
          content: "<b>Mts:</b>" + distanceMeters.toFixed(2) + "m<br><b>Kms:</b> " + distanceKilometers.toFixed(2) + " km"
        }
      });

      lineLayer.add(lineGraphic);
      lineLayer.visible = true
      lineLayer.listMode = "show"
    });

  }

  const applyRasterFunction = async () => {
    if (jimuMapView) {
      const bufferGeometry = findBufferGeometry();

      if (!bufferGeometry) return;

      const [geometryEngine, Point] = await loadModules(["esri/geometry/geometryEngine", "esri/geometry/Point"]);


      const centroid = new Point({
        x: bufferGeometry.extent.center.longitude,
        y: bufferGeometry.extent.center.latitude,
        spatialReference: bufferGeometry.spatialReference
      });


      const tempGraphicsLayer = jimuMapView.view.map.findLayerById("tempGraphicsLayer");


      if (!tempGraphicsLayer) {
        console.error("La capa 'tempGraphicsLayer' no existe.");
        return;
      }

      const touchingPolygon = tempGraphicsLayer.graphics.items.find(
        (graphic) =>
          graphic.geometry.type === "polygon" && // Solo polígonos
          geometryEngine.intersects(graphic.geometry, selectedPolygon) // Verificar intersección

      );
      const urbanLimit = jimuMapView.view.map.layers.find((layer) => layer.title === "Límite urbano Plan Regulador Comunal");
      urbanLimit.visible = true;
      // Obtener todas las capas visibles del mapa
      const visibleLayers = jimuMapView.view.map.layers.filter(
        (layer) => layer.visible && layer.type === "feature" && layer.title !== t("fireLayer") && layer.title !== t("floodLayer")
      );

      let geometriesInBuffer = [];

      const query = urbanLimit.createQuery();
      query.geometry = bufferGeometry; // Buscar dentro del buffer
      query.spatialRelationship = "intersects"; // Intersección con el buffer
      query.returnGeometry = true;

      try {
        const results = await urbanLimit.queryFeatures(query);
        results.features.forEach((feature) => {
          geometriesInBuffer.push(feature.geometry);
        });
      } catch (error) {
        console.error(`Error consultando la capa `, error);
      }

      if (touchingPolygon && visibleLayers) {
        dibujarLineasProximidad(touchingPolygon, geometriesInBuffer)
      } else {
        toast.error(t("urbanLimitsError"), {
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
      }
    }
  };

  // <!-------- Helpers ------------->
  //Limpia las capas generadas si se cambia las imagenes seleccionadas
  const cleanLayers = (title: String) => {
    if (jimuMapView) {
      const layer = jimuMapView.view.map.allLayers.find(layer => layer.title == title)
      if (layer) {
        // Oculta todas las capas de sensores por defecto
        layer.visible = false;
        // Esto oculta la capa del widget de capas (LayerList)
        layer.listMode = "hide";
      }
    }

  }
  const removeLayer = (title: String) => {
    if (jimuMapView) {
      const layer = jimuMapView.view.map.allLayers.find(layer => layer.title == title)
      if (layer) {
        jimuMapView.view.map.remove(layer)
      }
    }
  }

  useEffect(() => {
    removeLayer("tempGraphicsLayer")
    removeLayer(t("fireLayer"))
    removeLayer(t("floodLayer"))
    removeLayer(t("bufferLayer"))
    removeLayer(t("proximityLayer"))
    cleanLayers('Límite urbano Plan Regulador Comunal')
    setShowBuffer(false)
    setSelectedPolygon(null)
  }, [selectedImageries, geoprocess])

  return (
    <div className="jimu-widget proximity-widget">
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds?.[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}
      <div className="proximity-main-content">
        <ToastContainer />
        <div>
          <h4>{t('widgetLabel')}</h4>
          <div className='proximity-content'>
            {
              showBuffer === false && (
                <>
                  <p>
                    {t('description')}
                  </p>
                  <div className='proximity-buttons' >
                    {
                      loadingIncendio === true ? (
                        <Button size="sm" type="primary" >
                          <Loading type="DONUT" height={20} width={20} />
                        </Button>

                      )
                        :
                        (
                          <Button onClick={() => startDA("incendio")} size="sm">{t('incendio')}</Button>
                        )
                    }
                    {
                      loadingInundacion === true ? (
                        <Button size="sm" type="primary">
                          <Loading type="DONUT" height={20} width={20} />
                        </Button>

                      )
                        :
                        (
                          <Button onClick={() => startDA("inundacion")} size="sm" type="primary">{t('inundacion')}</Button>
                        )
                    }
                  </div>
                </>

              )
            }
            {
              showBuffer === true && (
                <div className='proximity-buffer'>
                  <div id="mySketchContainerPunto"></div>
                  <div className='proximity-buffer-actions'>
                    <p>{t('bufferLabel')}</p>
                    <TextInput
                      id='inputBuffer'
                      type="text"
                      min="1"
                      max="100"
                      value={bufferDistance} // Usa el estado
                      onChange={handleBufferChange} // Maneja los cambios
                    />

                    <Button onClick={ejecutarBuffer} size="sm" type="primary">{t('generarBuffer')}</Button>
                    <Button onClick={applyRasterFunction} size="sm" type="primary">{t('dibujarLineas')}</Button>
                  </div>

                </div>
              )
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default Widget;