import React, { useEffect, useState } from "react";
import { JimuMapViewComponent } from "jimu-arcgis";
import "./assets/style.css";
import "@esri/calcite-components/dist/calcite/calcite.css";

import { loadModules } from "esri-loader";
import { useSelector } from "react-redux";
import { IMState } from "jimu-core";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Button, Loading } from "jimu-ui";

import { useLocale } from "../../../../hooks/useLocale";
import { translations } from "./translations";
import TitleWithTooltip from "../../../../components/TitleWithTooltip";
import { getSessionToken } from "../../../../helpers/getSessionToken";

const Widget = (props) => {
  const { t } = useLocale(translations);

  const [jimuMapView, setJimuMapView] = useState(null);
  const [loadingIncendio, setLoadingIncendio] = useState(false);
  const [loadingInundacion, setLoadingInundacion] = useState(false);

  const selectedImageries = useSelector(
    (state: IMState) => state.myState?.selectedImages
  );
  const geoprocess = useSelector((state: IMState) => state.myState?.geoprocess);
  const selectedSensor = useSelector(
    (state: IMState) => state.myState?.selectedSensor
  );

  const activeViewChangeHandler = (jmv) => {
    setJimuMapView(jmv);
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

      var colorPoligon;
      var nombreCapa;

      if (proceso == 2) {
        colorPoligon = new SimpleFillSymbol({
          color: [255, 255, 0, 0.8],
          outline: { color: [255, 255, 0], width: 0.5 },
        });

        nombreCapa = t("fireLayer");
      } else if (proceso == 3) {
        colorPoligon = new SimpleFillSymbol({
          color: [0, 0, 255, 0.5],
          outline: { color: [0, 0, 255], width: 0.5 },
        });

        nombreCapa = t("floodLayer");
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
            { name: "area_km2", alias: "Área (km²)", type: "double" },
          ],
          renderer: {
            type: "simple",
            symbol: colorPoligon,
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
            const areaM2 = geometryEngine.geodesicArea(
              geometry,
              "square-meters"
            );
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
      }
    } catch (error) {
      console.error("Error al cargar la geometría en el mapa:", error);
    }
  };

  const incendio = async () => {
    setLoadingIncendio(true);

    if (jimuMapView) {
      try {
        const existingLayer = jimuMapView.view.map.layers.find(
          (layer) => layer.title === t("floodLayer")
        );
        if (existingLayer) {
          jimuMapView.view.map.remove(existingLayer);
        }
        let imagen1 = selectedImageries[0]?.OBJECTID;
        if (!imagen1) {
          toast.warning(t("errorImage"), {
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
        // Construir la URL con los parámetros
        const proceso = 2;
        console.log(selectedImageries[0]);

        // Obtener el token de la sesión
        const token = getSessionToken();

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
      } catch (error) {
        console.error("Error al cargar la geometría en el mapa:", error);
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
    // }
  };

  const inundacion = async () => {
    try {
      setLoadingInundacion(true);

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
        setLoadingInundacion(false);
      } else {
        if (jimuMapView) {
          const existingLayer = jimuMapView.view.map.layers.find(
            (layer) => layer.title === t("fireLayer")
          );
          if (existingLayer) {
            jimuMapView.view.map.remove(existingLayer);
          }
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

          await cargarGeometriaEnMapa(urlLayer, proceso);
          setLoadingInundacion(false);
        }
      }
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

  const cleanLayers = () => {
    if (jimuMapView) {
      const layer = jimuMapView.view.map.allLayers.find(
        (layer) =>
          layer.title == t("fireLayer") || layer.title == t("floodLayer")
      );
      if (layer) {
        jimuMapView.view.map.remove(layer);
      }
    }
  };
  useEffect(() => {
    cleanLayers();
  }, [selectedImageries, geoprocess]);
  return (
    <div className="jimu-widget widgetZoneArea">
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds?.[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}

      <div className="zona-riesgo-main-container">
        <ToastContainer />
        <div className="zona-riesgo-container">
          <div>
            <TitleWithTooltip
              title={t("widgetLabel")}
              description={t("description")}
            />
            <p>{t("description")}</p>
          </div>
          <div className="zona-riesgo-buttons">
            {loadingIncendio === true ? (
              <Button size="sm" type="primary">
                <Loading type="DONUT" height={20} width={20} />
              </Button>
            ) : (
              <Button onClick={incendio} size="sm" type="primary">
                {t("incendio")}
              </Button>
            )}
            {loadingInundacion === true ? (
              <Button size="sm" type="primary">
                <Loading type="DONUT" height={20} width={20} />
              </Button>
            ) : (
              <Button onClick={inundacion} size="sm" type="primary">
                {t("inundacion")}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
