import { useState, useEffect } from "react";
import { IMState, React, type AllWidgetProps } from "jimu-core";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Button, Tooltip, Select } from "jimu-ui";
import { JimuMapViewComponent } from "jimu-arcgis";
import "./assets/style.css";
import { loadModules } from "esri-loader";
import { useDispatch, useSelector } from "react-redux";
import { TbSnowflake, TbSnowflakeOff } from "react-icons/tb";
import { IoCloudSharp } from "react-icons/io5";
import { BsCloudSlashFill } from "react-icons/bs";
import { TrashOutlined } from "jimu-icons/outlined/editor/trash";

import { Sensor } from "../extensions/my-store";

import { useLocale } from "../../../../hooks/useLocale";
import { translations } from "./translations";
import HelpTooltip from "../../../../components/TitleWithTooltip";
import TitleWithTooltip from "../../../../components/TitleWithTooltip";

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};
const Widget = (props: AllWidgetProps<unknown>) => {
  const { t } = useLocale(translations);
  const dispatch = useDispatch();
  //Estados del store Redux
  const filteredImages = useSelector(
    (state: IMState) => state.myState?.filteredImages || null
  );
  const selectedImages = useSelector(
    (state: IMState) => state.myState?.selectedImages || []
  );
  const isReadyDetection = useSelector(
    (state: IMState) => state.myState?.isReady
  );
  const selectedSensor = useSelector(
    (state: IMState) => state.myState?.selectedSensor
  );
  const availableSensors = useSelector(
    (state: IMState) => state.myState?.availableSensors
  );

  //Constante del Mapa
  const [jimuMapView, setJimuMapView] = useState(null);

  //Sensores
  const [activeSensor, setActiveSensor] = useState(selectedSensor?.id || "");

  //Filtros
  const [snow, setSnow] = useState("50");
  const [clouds, setClouds] = useState("50");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState(new Date() || "");
  const [extension, setExtension] = useState("off");
  const [mapExtend, setMapExtend] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredSensors = isReadyDetection
    ? availableSensors
    : availableSensors?.filter(
        (sensor) => !["Eros B", "Eros C"].includes(sensor.title)
      );

  const activeViewChangeHandler = (jmv) => {
    setJimuMapView(jmv);
    setMapExtend(jimuMapView?.view.extent);
  };
  const loadAllLayers = () => {
    try {
      const allLayersFromMap = jimuMapView?.view.map.allLayers.items;
      if (!allLayersFromMap) return;

      const parsedLayers: Sensor[] = allLayersFromMap
        ?.filter((layer: Sensor) => layer.type === "imagery")
        .map((layer: Sensor) => ({
          url: layer.url,
          uid: layer.uid,
          id: layer.id,
          title: layer.title,
          definitionExpression: layer.definitionExpression || null,
        }));

      const filteredSensor = isReadyDetection
        ? parsedLayers
        : parsedLayers.filter(
            (item) => !["Eros B", "Eros C"].includes(item.title)
          );

      if (filteredSensor.length > 0) {
        // Establecer el sensor por defecto según el modo
        dispatch({ type: "SET_ALL_SENSORS", val: filteredSensor });
      }
    } catch (e) {
      console.error("Error al cargar capas:", e);
    }
  };

  const limitarCheckboxes = (event) => {
    const checkboxes = document.querySelectorAll("input[name='horns']:checked"); // Todos los checkboxes marcados
    const MAX_SELECTION = isReadyDetection ? 2 : 1;
    if (checkboxes.length > MAX_SELECTION) {
      // Si hay más de dos checkboxes seleccionados, desmarcar el último
      event.target.checked = false;
      toast.warning(
        `${t("checkboxLimitWarning")} ${
          MAX_SELECTION < 2
            ? MAX_SELECTION + ` ${t("image")}.`
            : MAX_SELECTION + ` ${t("images")}.`
        }`,
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
    }
  };

  const selectImages = (image) => {
    const isSelected = selectedImages.some(
      (img) => img.OBJECTID === image.OBJECTID
    );
    let newSelectedImages;
    const MAX_SELECTION = isReadyDetection ? 2 : 1;
    if (isSelected) {
      // Deseleccionar
      newSelectedImages = selectedImages.filter(
        (img) => img.OBJECTID !== image.OBJECTID
      );
    } else if (selectedImages.length < MAX_SELECTION) {
      // Seleccionar (si no hemos alcanzado el límite)
      newSelectedImages = [...selectedImages, image];
    } else {
      return;
    }
    // if (!isReadyDetection) {
    jimuMapView.view
      .when(function () {
        jimuMapView.view.goTo({
          center: [image.longitude, image.latitude],
          zoom: 12,
        });
      })
      .catch(function (err) {
        console.error("MapView rejected:", err);
      });
    // }

    // queryFiltradoYPintado(newSelectedImages.map(img => img.OBJECTID))
    dispatch({
      type: "SELECT_IMAGERY",
      val: newSelectedImages,
    });
  };
  const clearImageries = () => {
    const checkboxes = document.querySelectorAll("input[name='horns']");
    dispatch({ type: "REMOVE_IMAGERY" });
    checkboxes.forEach((item) => {
      const newCheckbox = item as HTMLInputElement;
      newCheckbox.checked = false;
    });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    if (name == "fromDate") setFromDate(value);
    if (name == "toDate") setToDate(value);
    if (name == "clouds") setClouds(value);
    if (name == "snow") setSnow(value);
    if (name == "extension") {
      if (value == "on") {
        setExtension("off");
      } else {
        setExtension("on");
      }
    }
  };

  const handleSensorChange = (e) => {
    const newSensor = filteredSensors.find(
      (item) => item.id === e.target.value
    );
    if (newSensor) {
      dispatch({ type: "SET_SENSOR", val: newSensor });
      dispatch({ type: "REMOVE_IMAGERY" });
    }
  };
  //utils
  const formatDateToYMD = (date: Date | string): string => {
    try {
      const d = new Date(date);

      if (isNaN(d.getTime())) {
        return ""; // Retorna cadena vacía si la fecha no es válida
      }

      const pad = (num: number): string => num.toString().padStart(2, "0");

      const year = d.getFullYear();
      const month = pad(d.getMonth() + 1);
      const day = pad(d.getDate());

      return `${year}-${month}-${day}`;
    } catch (error) {
      console.error("Error al formatear fecha:", error);
      return "";
    }
  };

  //  <-- UseEffects -->

  // useEffect que se encarga de cargar las capas al iniciar el widget
  useEffect(() => {
    if (typeof isReadyDetection !== "undefined") {
      // Limpiar el estado al cambiar el modo de detección
      dispatch({ type: "SET_SENSOR", val: null });
      dispatch({ type: "SET_ALL_SENSORS", val: [] });
      dispatch({ type: "SELECT_IMAGERY", val: [] });
      dispatch({ type: "ADD_IMAGERY", val: [] });
      setActiveSensor("");

      // Cargar las capas correspondientes al nuevo modo
      loadAllLayers();
    }
  }, [jimuMapView, isReadyDetection]);

  // useEffect consolidado: sincroniza activeSensor con selectedSensor y gestiona la visibilidad de capas
  useEffect(() => {
    // Sincronizar el estado local activeSensor con el selectedSensor de Redux
    if (selectedSensor) {
      setActiveSensor(selectedSensor.id);
    } else {
      setActiveSensor("");
    }

    // Gestionar la visibilidad de capas
    if (!jimuMapView?.view?.map?.allLayers || !filteredSensors) return;

    const allLayers = jimuMapView.view.map.allLayers;
    const sensorTitles = filteredSensors.map((s) =>
      s.title?.toLowerCase().trim()
    );
    const selectedTitle = selectedSensor?.title?.toLowerCase().trim();

    allLayers.forEach((layer: any) => {
      const layerTitle = layer.title?.toLowerCase().trim();
      const isSensorLayer = sensorTitles.includes(layerTitle);
      const isTarget = layerTitle === selectedTitle;

      if (isSensorLayer) {
        // Oculta todas las capas de sensores por defecto
        layer.visible = isTarget;
        // Esto oculta la capa del widget de capas (LayerList)
        layer.listMode = "hide";
      }
    });
  }, [selectedSensor, jimuMapView, filteredSensors]);

  // useEffect que se encarga de hacer la query cuando cambian los filtros o el sensor
  useEffect(() => {
    // Validaciones previas
    if (
      !selectedSensor ||
      !jimuMapView ||
      typeof isReadyDetection === "undefined"
    ) {
      return;
    }

    // Limpiar imágenes anteriores ANTES de hacer la nueva query
    dispatch({ type: "ADD_IMAGERY", val: [] });

    const imageryLayer = jimuMapView.view.map.findLayerById(selectedSensor.id);
    if (!imageryLayer || imageryLayer.type !== "imagery") {
      console.warn("Capa de imagery no encontrada o tipo incorrecto");
      return;
    }

    let isCancelled = false; // Flag para evitar actualizaciones de estado después del cleanup

    const loadEsriModules = async (newExtent) => {
      try {
        const [Polygon, Query] = await loadModules([
          "esri/geometry/Polygon",
          "esri/rest/support/Query",
        ]);

        // Si el componente se desmontó o cambió el sensor, no continuar
        if (isCancelled) return;

        const polygonGeometry = Polygon.fromExtent(newExtent);
        const query = new Query();
        query.geometry = polygonGeometry;
        query.spatialRelationship = "intersects";
        query.returnGeometry = true;
        query.outFields = ["*"];

        // Filtro por fechas y condiciones
        let whereClause = "1=1";
        if (fromDate && formatDateToYMD(toDate)) {
          whereClause = `FechaCaptura BETWEEN timestamp '${fromDate} 00:00:00' AND timestamp '${formatDateToYMD(
            toDate
          )} 00:00:00'`;
        }

        const conditions = [];
        if (
          selectedSensor.title !== "Eros C" &&
          selectedSensor.title !== "Eros B"
        ) {
          if (clouds)
            conditions.push(
              `CAST(cloudCoverPercentage AS FLOAT) <= ${Number(clouds).toFixed(
                4
              )}`
            );
          if (snow)
            conditions.push(
              `CAST(snowCoverPercentage AS FLOAT) <= ${Number(snow).toFixed(4)}`
            );
        }

        if (conditions.length > 0)
          whereClause += ` AND ${conditions.join(" AND ")}`;
        query.where = whereClause;

        setLoading(true);
        const result = await imageryLayer.queryFeatures(query);

        // Si el componente se desmontó o cambió el sensor durante la query, no actualizar el estado
        if (isCancelled) return;

        if (result.features.length > 0) {
          const parsedFeatures = result.features.map((f) => ({
            OBJECTID: f.attributes?.OBJECTID,
            FechaCaptura: f.attributes?.FechaCaptura,
            localizacion: f.attributes?.localizacion,
            longitude: f.geometry?.centroid?.longitude,
            latitude: f.geometry?.centroid?.latitude,
            // Convertir el Extent a un objeto plano para que sea serializable en Redux
            geometry: f.geometry?.extent
              ? {
                  xmin: f.geometry.extent.xmin,
                  ymin: f.geometry.extent.ymin,
                  xmax: f.geometry.extent.xmax,
                  ymax: f.geometry.extent.ymax,
                  spatialReference:
                    f.geometry.extent.spatialReference?.wkid ||
                    f.geometry.extent.spatialReference,
                }
              : null,
          }));

          imageryLayer.definitionExpression = `OBJECTID IN (${parsedFeatures
            .map((f) => f.OBJECTID)
            .join(",")})`;
          dispatch({ type: "ADD_IMAGERY", val: parsedFeatures });
        } else {
          imageryLayer.definitionExpression = "1=0";
          dispatch({ type: "ADD_IMAGERY", val: [] });
        }
      } catch (error) {
        if (!isCancelled) {
          console.error("Error en query de imágenes:", error);
          dispatch({ type: "ADD_IMAGERY", val: [] });
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    // Carga inicial con extent actual
    loadEsriModules(jimuMapView.view.extent);

    // Debounce para evitar spam de queries al mover el mapa
    const debouncedLoad = debounce((newExtent) => {
      if (!isCancelled) {
        loadEsriModules(newExtent);
      }
    }, 1000);

    const watcher = jimuMapView.view.watch("extent", (newExtent) => {
      debouncedLoad(newExtent);
    });

    // Cleanup function: se ejecuta cuando el sensor cambia o el componente se desmonta
    return () => {
      isCancelled = true;
      watcher.remove();
      setLoading(false);
    };
  }, [
    selectedSensor,
    snow,
    toDate,
    fromDate,
    clouds,
    mapExtend,
    jimuMapView,
    isReadyDetection,
  ]);

  return (
    <div className=" jimu-widget img-list-main-container">
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}
      <div id="panel2" className="contentFiltro">
        <ToastContainer />
        <div className="table-container">
          <div className="listHeader">
            <TitleWithTooltip
              title={t("images")}
              description={
                "Aquí puedes filtrar las imágenes por fecha, sensor y condiciones meteorológicas, Primero selecciona el sensor, luego las fechas y las condiciones meteorológicas"
              }
            />

            <Select
              value={activeSensor}
              size="sm"
              onChange={handleSensorChange}
              className="w-auto mx-2"
            >
              <option value="">{t("selectSensor")}</option>
              {[...filteredSensors]?.map((sensor, index) => (
                <option key={index} value={sensor?.id}>
                  {sensor?.title}
                </option>
              ))}
            </Select>
            <Button
              size="sm"
              block={false}
              type="primary"
              onClick={clearImageries}
              htmlType="button"
              unstyled
            >
              <TrashOutlined size={"s"} />
              <p>{t("cleanImages")}</p>
            </Button>
          </div>
          <div>
            <div className="jimu-widget filter-main-container">
              <div className="filter-container">
                <div className="date-inputs">
                  <input
                    id="fecha1"
                    type="date"
                    placeholder="mm/dd/yyyy"
                    value={fromDate}
                    name="fromDate"
                    onChange={handleFilterChange}
                  />
                  <input
                    id="fecha2"
                    type="date"
                    placeholder="mm/dd/yyyy"
                    value={formatDateToYMD(toDate)}
                    name="toDate"
                    onChange={handleFilterChange}
                  />
                </div>

                <div className="sliders">
                  <Tooltip
                    placement="top"
                    role="tooltip"
                    enterDelay={100}
                    enterNextDelay={0}
                    enterTouchDelay={700}
                    leaveDelay={0}
                    leaveTouchDelay={1500}
                    offsetOptions={4}
                    title={t("clouds")}
                  >
                    <div className="slider-item">
                      <p id="rangoNube" className="m-0 d-flex align-items">
                        {clouds} %
                      </p>
                      <BsCloudSlashFill />
                      <input
                        id="nube"
                        type="range"
                        min="0"
                        max="100"
                        step="2"
                        value={clouds}
                        className="slider-input"
                        onChange={handleFilterChange}
                        name="clouds"
                      />
                      <IoCloudSharp />
                    </div>
                  </Tooltip>
                  <Tooltip
                    placement="top"
                    role="tooltip"
                    enterDelay={100}
                    enterNextDelay={0}
                    enterTouchDelay={700}
                    leaveDelay={0}
                    leaveTouchDelay={1500}
                    offsetOptions={4}
                    title={t("snow")}
                  >
                    <div className="slider-item">
                      <p id="rangoNieve" className="m-0 d-flex align-items">
                        {snow} %
                      </p>
                      <TbSnowflakeOff />
                      <input
                        id="nieve"
                        type="range"
                        min="0"
                        max="100"
                        step="2"
                        name="snow"
                        value={snow}
                        className="slider-input"
                        onChange={handleFilterChange}
                      />
                      <TbSnowflake />
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className="interTableContent">
            <table className="table-head">
              <thead>
                <tr>
                  <th></th>
                  <th>Id</th>
                  <th>{t("thDate")}</th>
                  <th>{t("location")}</th>
                </tr>
              </thead>
            </table>

            <div className="table-body-container">
              <table className="table-body">
                <tbody>
                  {filteredImages.length === 0 ? (
                    <tr className="empty-row">
                      <td colSpan={4}>{t("noImage")}</td>
                    </tr>
                  ) : (
                    filteredImages.map((item) => (
                      <tr key={item.OBJECTID}>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedImages.some(
                              (img) => img.OBJECTID === item.OBJECTID
                            )}
                            name="horns"
                            onChange={(e) => {
                              limitarCheckboxes(e);
                              selectImages(item);
                            }}
                          />
                        </td>
                        <td>{item.OBJECTID || "N/A"}</td>
                        <td>{formatDateToYMD(new Date(item.FechaCaptura))}</td>
                        <td>{item.localizacion || "Sin Localidad"}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
