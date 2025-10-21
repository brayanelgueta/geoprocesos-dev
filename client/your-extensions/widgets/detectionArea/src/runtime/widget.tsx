import React, { useState, useEffect } from 'react';
import { JimuMapViewComponent } from 'jimu-arcgis';
import { loadModules } from 'esri-loader';
import './assets/style.css';
import { useSelector } from 'react-redux';
import { IMState } from 'jimu-core';
import { Button, Loading, TextInput } from 'jimu-ui';
import { Page, Text, View, Document, StyleSheet, Image, PDFDownloadLink } from '@react-pdf/renderer';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { Table, TR, TD, TableHeader } from '@ag-media/react-pdf-table';
import HeaderImage from './assets/header.png'
import FooterImage from './assets/Footer.png'
import { PageFilled } from 'jimu-icons/filled/data/page'
import { CircleDoubleFilled } from 'jimu-icons/filled/data/circle-double'
import layers from '../config';
import { useLocale } from "../../../../hooks/useLocale";
import { translations } from './translations';

type FeatureLayer = {
  name: string,
  id: number,
  features: Array<any>,
}



const Widget = (props) => {

  const { t } = useLocale(translations);

  const selectedImageries = useSelector((state: IMState) => state.myState?.selectedImages);
  const selectedSensor = useSelector((state: IMState) => state.myState?.selectedSensor)
  const geoprocess = useSelector((state: IMState) => state.myState?.geoprocess)

  const [jimuMapView, setJimuMapView] = useState(null);
  const [buffer, setbuffer] = useState(null);
  const [selectedPolygon, setSelectedPolygon] = useState(null);
  const [bufferDistance, setBufferDistance] = useState(1); // Estado para el input
  const [showBuffer, setShowBuffer] = useState(false);
  const [loadingIncendio, setLoadingIncendio] = useState(false);
  const [loadingInundacion, setLoadingInundacion] = useState(false);
  const [loadingBuffer, setLoadingBuffer] = useState(false);
  const [loadingReporte, setLoadingReporte] = useState(false);
  const [data, setData] = useState({});
  const [mapScreenshot, setMapScreenshot] = useState(null);
  const [ready, setReady] = useState(false);
  const [areaBuffer, setAreaBuffer] = useState(0);

  const date = new Date()

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
      })
      setBufferDistance(100)
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

      let colorPoligon
      let nombreCapa

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
    if (selectedImageries.length == 0) {
      toast.warning(t("errorImagen"), {
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
      setLoadingInundacion(false)
    } else {
      if (!jimuMapView) return
      try {
        let imagen1 = selectedImageries[0]?.OBJECTID

        if (imagen1 == null) {
          throw new Error(`Error en la carga de imagenes: ${imagen1}`);
          setLoadingInundacion(false)
        }

        // Construir la URL con los parámetros
        const proceso = 3;
        const entrada = imagen1;

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

    }
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

      setbuffer(bufferGraphic)

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

  const capaTemporal = async (dagerZoneLayer, riesgo: String) => {

    setShowBuffer(true)
    const [Sketch, GraphicsLayer, SimpleFillSymbol, geometryEngine] = await loadModules([
      "esri/widgets/Sketch",
      "esri/layers/GraphicsLayer",
      "esri/symbols/SimpleFillSymbol",
      "esri/geometry/geometryEngine"
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
      // Calcular área del polígono
      if (graphic.geometry.type === "polygon") {
        const areaM2 = geometryEngine.geodesicArea(graphic.geometry, "square-meters");
        const areaHa = areaM2 / 10000;
        const areaKm2 = areaM2 / 1e6;

        graphic.attributes = {
          ...graphic.attributes,
          Riesgo: riesgo,
          Area_m2: areaM2.toFixed(2),
          Area_ha: areaHa.toFixed(2),
          Area_km2: areaKm2.toFixed(4)
        };
      }
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

          // Recalcular área al mover/escalar el polígono
          const areaM2 = geometryEngine.geodesicArea(polygonGeometry, "square-meters");
          const areaHa = areaM2 / 10000;
          const areaKm2 = areaM2 / 1e6;

          event.graphics[0].attributes = {
            ...event.graphics[0].attributes,
            Area_m2: areaM2.toFixed(2),
            Area_ha: areaHa.toFixed(2),
            Area_km2: areaKm2.toFixed(4)
          };

          setSelectedPolygon(polygonGeometry);
        }
      }
    });

  }

  const startDA = async (riesgo) => {
    try {
      if (selectedImageries.length == 0) {
        toast.warning(t("errorImagen"), {
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
  // Función principal para generar el reporte
  const generarReporte = async () => {
    setLoadingReporte(true)
    await takeScreenshot();
    await getLayerData();
    setReady(true);
    setLoadingReporte(false)
  };
  // Función para tomar screenshot del mapa
  const takeScreenshot = () => {
    return new Promise((resolve, reject) => {
      setReady(false);
      if (jimuMapView && jimuMapView.view && jimuMapView.view.takeScreenshot) {
        jimuMapView.view.takeScreenshot().then((screenshot) => {
          setMapScreenshot(screenshot.dataUrl);
          resolve(screenshot.dataUrl);
        }).catch(reject);
      } else {
        reject(new Error("No se puede tomar captura del mapa"));
        toast.warning(t("screenShotWarning"), {
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
    });
  };
  // Función para obtener datos de la capa
  const getLayerData = async () => {
    const nuevaInfraestructura = {}
    const [
      Polygon,
      FeatureLayer
    ] = await loadModules([
      "esri/geometry/Polygon",
      "esri/layers/FeatureLayer"
    ]);
    const polygonGeometry = {
      type: "polygon",
      rings: buffer.geometry.rings,
      spatialReference: { wkid: 102100 }
    };
    const polygon = new Polygon(polygonGeometry);

    const query = {
      geometry: polygon,
      geometryType: "esriGeometryPolygon",
      inSR: "102100",
      spatialRel: "esriSpatialRelContains",
      units: "esriSRUnit_Kilometer",
      outFields: "*",
      returnGeometry: true,
      f: "geojson"
    };
    for (let i = 0; i < layers.length; i++) {
      const url = layers[i];
      const layer = new FeatureLayer({ url });

      try {
        const response: FeatureLayer = await layer.queryFeatures(query);
        if (response.features.length > 0) {
          // Obtenemos el nombre del tipo de infraestructura desde el nombre de capa (puede ser un alias mejor)
          const tipo = layer.title || `Capa_${i}`;

          // Transformamos los features al formato que necesitas
          const featuresFormateados = response.features.map(f => {
            return {
              id: f.attributes?.numero || f.attributes?.cod_compania || f.attributes?.sistema || f.attributes?.id || f.attributes?.OBJECTID || "No aplica",
              name: f.attributes?.nombre || f.attributes?.NOMBRE || f.attributes?.nom_unidad || f.attributes?.nom_com || f.attributes?.nombre_ins || f.attributes?.nom_estacion || f.attributes?.compania || f.attributes?.soporte || f.attributes?.empresa || f.attributes?.nom_obra || `Código_${f.attributes?.OBJECTID}` || "No aplica",
              latitud: f.attributes?.latitud || f.attributes?.coor_y || f.attributes?.coord_norte || f.attributes?.COORD_NORT || f.attributes?.Y || f.attributes?.geometry?.y || "No aplica",
              longitud: f.attributes?.longitud || f.attributes?.coor_x || f.attributes?.coord_este || f.attributes?.COORD_ESTE || f.attributes?.X || f.attributes?.geometry?.x || "No aplica"
            };
          });

          // Agregamos al objeto temporal bajo el nombre del tipo
          nuevaInfraestructura[tipo] = featuresFormateados;
        }
      } catch (error) {
        toast.error(t("dataError"), {
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
    setData(nuevaInfraestructura);
  }
  // Componente PDF integrado como función
  const ReportePDF = ({ data, mapScreenshot, areaBuffer, HeaderImage, FooterImage }) => {

    const styles = StyleSheet.create({
      page: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 20,
        justifyContent: 'space-between',
      },
      subheader: {
        fontSize: 14,
        marginBottom: 5,
        fontWeight: 'bold'
      },
      sectionHeader: {
        fontSize: 14,
        marginTop: 15,
        marginBottom: 10,
        fontWeight: 'bold',
        backgroundColor: '#f0f0f0',
        padding: 5,
        textAlign: 'center'
      },
      text: {
        fontSize: 12,
        marginBottom: 5
      },
      metricas: {
        marginBottom: 5,
      },
      attributeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
      },
      attributeName: {
        fontWeight: 'bold'
      },
      mapImage: {
        width: '100%',
        height: 220,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#cccccc'
      },
      separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginVertical: 10
      },
      table: {
        width: '100%',
        marginBottom: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#cccccc'
      },
      tableRow: {
        flexDirection: 'row'
      },
      tableHeader: {
        backgroundColor: '#1a5276',
        fontWeight: 'bold',
        padding: 3,
        fontSize: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#cccccc',
        textAlign: 'center',
        color: '#ffffff'
      },
      tableCell: {
        padding: 3,
        fontSize: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#cccccc'
      },
      headerImage: {
        width: '100%',
        height: 66,
        marginHorizontal: 'auto',
        marginBottom: 20,
        justifyContent: 'flex-start'

      },
      footerImage: {
        width: '100%',
        height: 30,
        marginHorizontal: 'auto',
        marginTop: 'auto',
        justifyContent: 'flex-end'
      }

    });



    return (
      <Document>
        <Page size="A4" style={styles.page} wrap>
          {/* Encabezado */}
          <View fixed>
            {
              HeaderImage && (
                <Image style={styles.headerImage} src={HeaderImage} />
              )
            }
          </View>
          {/* Mapa */}
          {mapScreenshot && (
            <Image style={styles.mapImage} src={mapScreenshot} />
          )}
          {/* Sección Superficie Afectada */}
          <View style={styles.metricas}>
            <Text style={styles.subheader}>{t("reportSubHeader")}</Text>
            <Text style={styles.text}>{t("reportMeters")} {(areaBuffer).toFixed(2)}</Text>
            <Text style={styles.text}>{t("reportKm")} {(areaBuffer / 1000000).toFixed(2)}</Text>
            <Text style={styles.text}>{t("reportHa")} {(areaBuffer / 10000).toFixed(2)}</Text>
          </View>

          {/* Tabla de Infraestructura Crítica */}

          <View>
            <Text style={styles.subheader}>{t("reportSubHeader2")}</Text>
            <Table style={styles.table}>
              <TableHeader style={styles.tableHeader}>
                <TD style={styles.tableCell}>{t("name")}</TD>
                <TD style={styles.tableCell}>{t("quantity")}</TD>
              </TableHeader>


              {
                Object.entries(data).map(([type, features]) => (
                  <TR key={type} style={styles.tableRow}>
                    <TD style={styles.tableCell}>{decodeURIComponent(type)}</TD>
                    <TD style={styles.tableCell}>{Array.isArray(features) ? features.length : 0}</TD>
                  </TR>
                ))

              }
            </Table>
          </View>
          {/* Tabla de Infraestructura Crítica */}
          <View break style={styles.page}>
            <Text style={styles.subheader}>{t("reportSubHeader3")}</Text>
            {
              Object.entries(data).map(([type, features]) => (
                <View key={type} wrap>
                  <Text style={styles.sectionHeader}>{decodeURIComponent(type)}</Text>
                  <Table style={styles.table}>
                    <TableHeader style={styles.tableHeader}>
                      <TD style={styles.tableCell}>Id</TD>
                      <TD style={styles.tableCell}>{t("name")}</TD>
                      <TD style={styles.tableCell}>{t("latitude")}</TD>
                      <TD style={styles.tableCell}>{t("longitude")}</TD>
                    </TableHeader>
                    {(Array.isArray(features) ? features : []).map((item, index) => (

                      <TR key={index}>
                        <TD style={styles.tableCell}>{item.id}</TD>
                        <TD style={styles.tableCell}>{item.name}</TD>
                        <TD style={styles.tableCell}>{item.latitud}</TD>
                        <TD style={styles.tableCell}>{item.longitud}</TD>
                      </TR>
                    ))}
                  </Table>
                </View>
              ))
            }
            <View>

            </View>
          </View>
          {/* Footer con el logo/título */}
          <View fixed>
            <Image style={styles.footerImage} src={FooterImage} />
          </View>
        </Page>
      </Document>
    );

  };

  const cleanLayers = (title: String) => {
    if (jimuMapView) {
      const layer = jimuMapView.view.map.allLayers.find(layer => layer.title == title)
      if (layer) {
        jimuMapView.view.map.remove(layer);
      }
    }

  }
  const removeBuffers = () => {
    if (!jimuMapView) return;

    // Buscar los gráficos con el id que usamos para el buffer
    const graphicsToRemove = jimuMapView.view.graphics.filter((graphic) => {
      return graphic.attributes?.id === "buffer_DI";
    });

    graphicsToRemove.forEach((graphic) => {
      jimuMapView.view.graphics.remove(graphic);
    });
  };
  // <!-------- useEffects ------------->
  useEffect(() => {
    cleanLayers(t("fireLayer"))
    cleanLayers(t("floodLayer"))
    cleanLayers(t("bufferLayer"))
    cleanLayers("Poligono desastre")
    removeBuffers()
    setShowBuffer(false)
    setReady(false)
  }, [selectedImageries, geoprocess])


  return (
    <div className="jimu-widget area-detection-widget">

      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds?.[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}
      <div className='area-detection-main-content'>
        <ToastContainer />
        <div>
          <h4>{t("widgetLabel")}</h4>
          <div className='area-detection-content'>
            {
              showBuffer === false && (
                <>
                  <p>
                    {t("description")}
                  </p>
                  <div className='area-detection-buttons' >
                    {
                      loadingIncendio === true ? (
                        <Button size="sm" type="primary" >
                          <Loading type="DONUT" height={20} width={20} />
                        </Button>

                      )
                        :
                        (
                          <Button onClick={() => startDA("incendio")} size="sm" >{t("incendio")}</Button>
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
                          <Button onClick={() => startDA("inundacion")} size="sm">{t("inundacion")}</Button>
                        )
                    }
                  </div>
                </>

              )
            }
            {
              showBuffer && (
                <div id="btnDA2" className='area-detection-buffer'>
                  <div id="mySketchContainerPunto"></div>
                  <div className='area-detection-buffer-actions'>
                    <p>{t("bufferLabel")}</p>
                    <TextInput
                      id='inputBuffer'
                      size='sm'
                      type="text"
                      min="1"
                      max="100"
                      value={bufferDistance} // Usa el estado
                      onChange={handleBufferChange} // Maneja los cambios
                    />

                    <Button onClick={ejecutarBuffer} size="sm" type="primary"><CircleDoubleFilled size={"s"} />{t("generateBuffer")}</Button>
                    {
                      loadingReporte === true ? (
                        <Button size="sm" type="primary" >
                          <Loading type="DONUT" height={20} width={20} />
                        </Button>

                      )
                        :
                        (
                          <Button size="sm" type="primary" onClick={generarReporte} >
                            <PageFilled size={12} /> {t("generateReport")}
                          </Button>
                        )
                    }
                    {
                      ready === true && (
                        <PDFDownloadLink
                          document={<ReportePDF data={data} mapScreenshot={mapScreenshot} areaBuffer={areaBuffer} HeaderImage={HeaderImage} FooterImage={FooterImage} />}
                          fileName={`Reporte Zonificación ${date.toLocaleDateString("es-ES")} " "${date.toLocaleTimeString("es-ES")}.pdf`}
                        >
                          {({ loading }) => (
                            loading ?
                              <Button size="sm" type="primary">
                                <Loading type="DONUT" height={20} width={20} />
                              </Button> :
                              <Button size="sm" type="primary">
                                <PageFilled size={12} /> Descargar
                              </Button>)}
                        </PDFDownloadLink>
                      )
                    }



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
