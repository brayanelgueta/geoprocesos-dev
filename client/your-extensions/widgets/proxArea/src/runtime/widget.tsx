import React, { useState, useEffect } from "react";
import { JimuMapViewComponent } from "jimu-arcgis";
import "./assets/style.css";
import { loadModules } from "esri-loader";
import { useSelector } from "react-redux";
import { IMState, AllWidgetProps } from "jimu-core";
import { Button, Loading } from "jimu-ui";
import { ToastContainer, toast, Bounce } from "react-toastify";

import { useLocale } from "../../../../hooks/useLocale";
import { getSessionToken } from "../../../../helpers/getSessionToken";
import { translations } from "./translations";
import TitleWithTooltip from "../../../../components/TitleWithTooltip";

const Widget = (props: AllWidgetProps<any>) => {
  const { t } = useLocale(translations);

  const selectedSensor = useSelector(
    (state: IMState) => state.myState?.selectedSensor
  );
  const selectedImageries = useSelector(
    (state: IMState) => state.myState?.selectedImages
  );
  const geoprocess = useSelector((state: IMState) => state.myState?.geoprocess);

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
      toast.warning(t("minKmWarning"), {
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
      setBufferDistance(100);
      return;
    }
    if (value < 0) {
      toast.warning(t("maxKmWarning"), {
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
      setBufferDistance(1);
      return;
    }
    setBufferDistance(value); // Actualiza el estado con el nuevo valor del input
  };

  const cargarGeometriaEnMapa = async (geojson, proceso) => {
    if (!jimuMapView) return;
    if (!geojson) {
      throw new Error("No se recibió un nombre de archivo válido.");
    }

    try {
      const [FeatureLayer, Graphic, Polygon, SimpleFillSymbol, geometryEngine] =
        await loadModules([
          "esri/layers/FeatureLayer",
          "esri/Graphic",
          "esri/geometry/Polygon",
          "esri/symbols/SimpleFillSymbol",
          "esri/geometry/geometryEngine",
        ]);

      var nombreCapa;

      if (proceso == 2) {
        nombreCapa = t("fireLayer");
      } else if (proceso == 3) {
        nombreCapa = t("floodLayer");
      }

      const featureLayer = new FeatureLayer({
        title: nombreCapa,
        source: [],
        objectIdField: "OBJECTID",
        fields: [
          { name: "OBJECTID", alias: "OBJECTID", type: "oid" },
          { name: "area_m2", alias: "Área (m²)", type: "double" },
          { name: "area_ha", alias: "Área (ha)", type: "double" },
          { name: "area_km2", alias: "Área (km²)", type: "double" },
        ],
        renderer: {
          type: "simple",
        },
      });

      const graphics = [];
      let graphicIndex = 0;

      geojson.features.forEach((feature) => {
        let geometries = [];

        if (feature.geometry.type === "Polygon") {
          geometries.push(
            new Polygon({
              rings: feature.geometry.coordinates,
              spatialReference: jimuMapView.view.spatialReference,
            })
          );
        } else if (feature.geometry.type === "MultiPolygon") {
          feature.geometry.coordinates.forEach((polygonCoordinates) => {
            geometries.push(
              new Polygon({
                rings: polygonCoordinates,
                spatialReference: jimuMapView.view.spatialReference,
              })
            );
          });
        }

        geometries.forEach((geometry) => {
          const areaM2 = geometryEngine.geodesicArea(geometry, "square-meters");
          const areaHa = areaM2 / 10000;
          const areaKm2 = areaM2 / 1_000_000;

          graphics.push(
            new Graphic({
              geometry: geometry,
              attributes: {
                OBJECTID: graphicIndex,
                area_m2: areaM2,
                area_ha: areaHa,
                area_km2: areaKm2,
              },
            })
          );
          graphicIndex++;
        });
      });

      featureLayer.source = graphics;

      // Agregar la capa al mapa si no existe una con el mismo nombre
      const existingLayer = jimuMapView.view.map.layers.find(
        (layer) => layer.title === "Poligono desastre"
      );
      if (existingLayer) {
        jimuMapView.view.map.remove(existingLayer);
      }

      jimuMapView.view.map.add(featureLayer);
    } catch (error) {
      console.error("Error al cargar la geometría en el mapa:", error);
    }
  };

  const incendio = async () => {
    setLoadingIncendio(true);
    if (jimuMapView) {
      try {
        let imagen1 = selectedImageries[0]?.OBJECTID;

        // Construir la URL con los parámetros
        const proceso = 2;
        const token = getSessionToken();
        //Desarrollo
        const response = await fetch(`http://127.0.0.1:5000/getFireZone`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            objectId: imagen1,
            url: selectedSensor.url,
            geometry: selectedImageries[0]?.geometry,
            token,
          }),
        });

        if (!response.ok) {
          throw new Error(
            `Error en la solicitud: ${response.status} ${response.statusText}`
          );
          setLoadingIncendio(false);
        }

        const responseData = await response.json();

        const responseGeojson = responseData.geojson;

        await cargarGeometriaEnMapa(responseGeojson, proceso);

        setLoadingIncendio(false);
        setShowBuffer(true);
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
        setLoadingIncendio(false);
      }
    }
  };

  const inundacion = async () => {
    setLoadingInundacion(true);

    if (!jimuMapView) return;
    try {
      let imagen1 = selectedImageries[0]?.OBJECTID;

      if (imagen1 == null) {
        throw new Error(`Error en la carga de imagenes: ${imagen1}`);
        setLoadingInundacion(false);
      }

      // Construir la URL con los parámetros
      const proceso = 3;
      const entrada = imagen1;

      //Desarrollo
      const response = await fetch(
        `http://127.0.0.1:5000/proxy?proceso=${proceso}&Entrada=${entrada}&url=${selectedSensor.url}`,
        {
          method: "GET",
        }
      ).finally(() => {
        setLoadingInundacion(false);
      });

      if (!response.ok) {
        throw new Error(
          `Error en la solicitud: ${response.status} ${response.statusText}`
        );
        setLoadingInundacion(false);
      }
      const responseData = await response.json();

      const urlLayer = responseData.PoligonGeoJson;

      console.log({ urlLayer });
      await cargarGeometriaEnMapa(urlLayer, proceso);
      setLoadingInundacion(false);
    } catch (error) {
      console.error(error);
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
        toast.warning(
          `Debe seleccionar una imagen antes de ejecutar este proceso`,
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          }
        );
        setLoadingIncendio(false);
        setLoadingInundacion(false);
        return;
      } else {
        if (jimuMapView) {
          // Agregar capa de límite urbano al mapa
          const [FeatureLayer] = await loadModules([
            "esri/layers/FeatureLayer",
          ]);

          let urbanLimitLayer = jimuMapView.view.map.layers.find(
            (layer) => layer.id === "urbanLimitLayer"
          );

          if (!urbanLimitLayer) {
            urbanLimitLayer = new FeatureLayer({
              id: "urbanLimitLayer",
              title: "Límite urbano Plan Regulador Comunal",
              url: "https://gisciv.snsat.cl/vector/rest/services/Comando_Control/Límite_urbano_Plan_Regulador_Comunal/FeatureServer/117",
              visible: true,
            });
            jimuMapView.view.map.add(urbanLimitLayer);
          } else {
            urbanLimitLayer.visible = true;
          }

          let dagerZoneLayer1 = jimuMapView.view.map.layers.find(
            (layer) => layer.title === t("fireLayer")
          );
          let dagerZoneLayer2 = jimuMapView.view.map.layers.find(
            (layer) => layer.title === t("floodLayer")
          );

          if (!dagerZoneLayer1 && riesgo === "incendio") {
            await incendio();
            dagerZoneLayer1 = jimuMapView.view.map.layers.find(
              (layer) => layer.title === t("fireLayer")
            );
          }
          if (!dagerZoneLayer2 && riesgo === "inundacion") {
            await inundacion();
            dagerZoneLayer2 = jimuMapView.view.map.layers.find(
              (layer) => layer.title === t("floodLayer")
            );
          }

          if ((jimuMapView && dagerZoneLayer1) || dagerZoneLayer2) {
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
    setShowBuffer(true);
    const [Sketch, GraphicsLayer, SimpleFillSymbol] = await loadModules([
      "esri/widgets/Sketch",
      "esri/layers/GraphicsLayer",
      "esri/symbols/SimpleFillSymbol",
    ]);

    // Crear una capa gráfica temporal
    const tempGraphicsLayer = new GraphicsLayer({
      id: "tempGraphicsLayer",
      title: t("bufferLayer"),
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
        color: riesgo === "incendio" ? [255, 255, 0, 0.8] : [0, 0, 255, 0.5],
        outline: null,
      });

      tempGraphicsLayer.add(graphic);
      tempGraphicsLayer.listMode = "hide";
    });

    // Configurar el Sketch para trabajar con la capa temporal
    const sketchEdit = new Sketch({
      view: jimuMapView.view,
      layer: tempGraphicsLayer,
      creationMode: "update",
      availableCreateTools: [""],
      scale: "m",
      visibleElements: {
        createTools: false,
        selectionTools: false,
        settingsMenu: false,
        undoRedoMenu: false,
        duplicateButton: false,
        deleteButton: false,
      },
      defaultUpdateOptions: {
        enableScaling: true,
        enableRotation: true,
        multipleSelectionEnabled: false,
        tool: "move",
      },
      // Configurar el color del outline de selección en cyan
      updateOnGraphicClick: true,
      snappingOptions: {
        enabled: false,
      },
      container: "mySketchContainerPunto",
    });

    // Personalizar el texto del label de selección después de que el Sketch se renderice
    setTimeout(() => {
      const sketchContainer = document.getElementById("mySketchContainerPunto");

      if (sketchContainer) {
        // Función para reemplazar el texto en todos los nodos
        const replaceSelectionText = () => {
          // Buscar todos los elementos
          const allElements = sketchContainer.querySelectorAll("*");
          allElements.forEach((element: HTMLElement) => {
            // Buscar nodos de texto directos
            element.childNodes.forEach((node) => {
              if (node.nodeType === Node.TEXT_NODE) {
                if (
                  node.textContent?.includes("Selección") ||
                  node.textContent?.includes("Selection")
                ) {
                  node.textContent = node.textContent.replace(
                    /Selección|Selection/,
                    "Polígonos seleccionados"
                  );
                }
              }
            });
          });

          // Buscar por selectores específicos del Sketch
          const labels = sketchContainer.querySelectorAll(
            ".esri-sketch__panel-label, .esri-sketch__section-label, .esri-sketch__heading-text"
          );
          labels.forEach((label: HTMLElement) => {
            if (
              label.textContent?.includes("Selección") ||
              label.textContent?.includes("Selection")
            ) {
              label.textContent = label.textContent.replace(
                /Selección|Selection/,
                "Polígonos seleccionados"
              );
            }
          });
        };

        // Ejecutar inmediatamente
        replaceSelectionText();

        // Observar cambios
        const observer = new MutationObserver(() => {
          replaceSelectionText();
        });
        observer.observe(sketchContainer, {
          childList: true,
          subtree: true,
          characterData: true,
        });
      }
    }, 500);

    // Aplicar color cyan al outline de selección del Sketch
    // Acceder a la capa interna de gráficos del Sketch para modificar los símbolos

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
  };

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

    setLoadingBuffer(true);

    try {
      const [geometryEngine, Graphic] = await loadModules([
        "esri/geometry/geometryEngine",
        "esri/Graphic",
      ]);

      // Convertir el valor del input a número (distancia del buffer)
      const bufferDistance = document.getElementById(
        "inputBuffer"
      ) as HTMLInputElement;
      const distanceKm = parseFloat(bufferDistance.value);
      const distanceMeters = distanceKm * 1000;

      //Se eliminar el buffer anterior
      const view = jimuMapView.view;
      view.graphics.items
        .filter((g) => g.attributes?.id === "buffer_DI")
        .forEach((g) => view.graphics.remove(g));

      // Generar el buffer con la distancia ingresada
      const bufferGeometry = geometryEngine.buffer(
        selectedPolygon,
        distanceMeters,
        "meters"
      );

      // Calcular área del buffer en m²
      const areaBuffer = geometryEngine.geodesicArea(
        bufferGeometry,
        "square-meters"
      );
      setAreaBuffer(areaBuffer);

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
          id: "buffer_DI", // ID único basado en timestamp
        },
      });

      setBuffer(bufferGraphic);

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
      setLoadingBuffer(false);
    }
  };

  const dibujarLineasProximidad = async (
    touchingPolygon,
    geometriesInBuffer
  ) => {
    if (!touchingPolygon || geometriesInBuffer.length === 0) {
      console.warn("No hay geometrías para conectar.");
      return;
    }

    const [geometryEngine, Polyline, Graphic, GraphicsLayer] =
      await loadModules([
        "esri/geometry/geometryEngine",
        "esri/geometry/Polyline",
        "esri/Graphic",
        "esri/layers/GraphicsLayer",
      ]);

    // Crear o limpiar la capa de líneas de proximidad
    let lineLayer = jimuMapView.view.map.findLayerById("proximityLinesLayer");
    if (!lineLayer) {
      lineLayer = new GraphicsLayer({
        id: "proximityLinesLayer",
        title: t("proximityLayer"),
      });
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

      const distanceMeters = geometryEngine.geodesicLength(
        lineGeometry,
        "meters"
      );
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
          distance_km: distanceKilometers.toFixed(2),
        },
        popupTemplate: {
          title: t("proximityLayer"),
          content:
            "<b>Mts:</b>" +
            distanceMeters.toFixed(2) +
            "m<br><b>Kms:</b> " +
            distanceKilometers.toFixed(2) +
            " km",
        },
      });

      lineLayer.add(lineGraphic);
      lineLayer.visible = true;
      lineLayer.listMode = "show";
    });
  };

  const applyRasterFunction = async () => {
    if (jimuMapView) {
      const bufferGeometry = findBufferGeometry();

      if (!bufferGeometry) {
        toast.warning("No se encontró la geometría del buffer", {
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

      const [geometryEngine] = await loadModules([
        "esri/geometry/geometryEngine",
      ]);

      const tempGraphicsLayer =
        jimuMapView.view.map.findLayerById("tempGraphicsLayer");

      if (!tempGraphicsLayer) {
        console.error("La capa 'tempGraphicsLayer' no existe.");
        return;
      }

      const touchingPolygon = tempGraphicsLayer.graphics.items.find(
        (graphic) =>
          graphic.geometry.type === "polygon" && // Solo polígonos
          geometryEngine.intersects(graphic.geometry, selectedPolygon) // Verificar intersección
      );

      if (!touchingPolygon) {
        toast.warning("No se encontró el polígono seleccionado", {
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

      // Buscar la capa de límite urbano que ya está en el mapa
      let urbanLimit = jimuMapView.view.map.layers.find(
        (layer) => layer.id === "urbanLimitLayer"
      );

      if (!urbanLimit) {
        toast.error("No se encontró la capa de límite urbano", {
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

      urbanLimit.visible = true;

      let geometriesInBuffer = [];

      const query = urbanLimit.createQuery();
      query.geometry = bufferGeometry; // Buscar dentro del buffer
      query.spatialRelationship = "intersects"; // Intersección con el buffer
      query.returnGeometry = true;
      query.outSpatialReference = jimuMapView.view.spatialReference;

      try {
        // Esperar a que la capa esté completamente cargada
        await urbanLimit.load();

        const results = await urbanLimit.queryFeatures(query);

        if (results.features.length === 0) {
          console.warn("No se encontraron geometrías dentro del buffer");
          toast.warning(
            "No se encontraron límites urbanos en el área del buffer",
            {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            }
          );
        } else {
          results.features.forEach((feature) => {
            geometriesInBuffer.push(feature.geometry);
          });
          console.log(`Se encontraron ${geometriesInBuffer.length} geometrías`);
        }
      } catch (error) {
        console.error(`Error consultando la capa: `, error);
        toast.error("Error al consultar el límite urbano", {
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

      if (touchingPolygon && geometriesInBuffer.length > 0) {
        dibujarLineasProximidad(touchingPolygon, geometriesInBuffer);
      } else if (geometriesInBuffer.length === 0) {
        // Ya se mostró el warning arriba
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
      const layer = jimuMapView.view.map.allLayers.find(
        (layer) => layer.title == title
      );
      if (layer) {
        // Oculta todas las capas de sensores por defecto
        layer.visible = false;
        // Esto oculta la capa del widget de capas (LayerList)
        layer.listMode = "hide";
      }
    }
  };
  const removeLayer = (title: String) => {
    if (jimuMapView) {
      const layer = jimuMapView.view.map.allLayers.find(
        (layer) => layer.title == title
      );
      if (layer) {
        jimuMapView.view.map.remove(layer);
      }
    }
  };

  const removeLayerById = (id: String) => {
    if (jimuMapView) {
      const layer = jimuMapView.view.map.allLayers.find(
        (layer) => layer.id == id
      );
      if (layer) {
        jimuMapView.view.map.remove(layer);
      }
    }
  };

  useEffect(() => {
    removeLayer("tempGraphicsLayer");
    removeLayer(t("fireLayer"));
    removeLayer(t("floodLayer"));
    removeLayer(t("bufferLayer"));
    removeLayer(t("proximityLayer"));
    removeLayerById("urbanLimitLayer"); // Eliminar la capa de límite urbano
    setShowBuffer(false);
    setSelectedPolygon(null);
  }, [selectedImageries, geoprocess]);

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
          <TitleWithTooltip
            title={t("widgetLabel")}
            description={t("description")}
          />
          <div className="proximity-content">
            {showBuffer === false && (
              <>
                <p>{t("description")}</p>
                <div className="proximity-buttons">
                  {loadingIncendio === true ? (
                    <Button size="sm" type="primary">
                      <Loading type="DONUT" height={20} width={20} />
                    </Button>
                  ) : (
                    <Button onClick={() => startDA("incendio")} size="sm">
                      {t("incendio")}
                    </Button>
                  )}
                  {loadingInundacion === true ? (
                    <Button size="sm" type="primary">
                      <Loading type="DONUT" height={20} width={20} />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => startDA("inundacion")}
                      size="sm"
                      type="primary"
                    >
                      {t("inundacion")}
                    </Button>
                  )}
                </div>
              </>
            )}
            {showBuffer === true && (
              <div className="proximity-buffer">
                <div id="mySketchContainerPunto"></div>
                <div className="proximity-buffer-actions">
                  <p>{t("bufferLabel")}</p>
                  <div className="proximity-buffer-input">
                    <input
                      id="inputBuffer"
                      type="text"
                      min="1"
                      max="100"
                      value={bufferDistance} // Usa el estado
                      onChange={handleBufferChange} // Maneja los cambios
                    />
                    <p>Km</p>
                  </div>

                  <Button onClick={ejecutarBuffer} size="sm" type="primary">
                    {t("generarBuffer")}
                  </Button>
                  <Button
                    onClick={applyRasterFunction}
                    size="sm"
                    type="primary"
                  >
                    {t("dibujarLineas")}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
