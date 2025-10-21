import { React } from 'jimu-core';
import { useState, useRef } from 'react';
import { JimuMapViewComponent } from 'jimu-arcgis';
import { loadModules } from 'esri-loader';

const Widget = (props) => {
  const [jimuMapView, setJimuMapView] = useState(null);

  const activeViewChangeHandler = (jmv) => {
    setJimuMapView(jmv);
  };









  







//ESTE SERIA EL CODIGO DEL HOTSPOT QUE TIENE DE ENTRADA UN GEOJSON DE PUNTOS   

const loadImageryLayer = async () => {
  try {
      const imageUrl = "http://127.0.0.1:5000/geoprocess_output/test11.geojson";
      console.log("Cargando GeoJSON desde URL:", imageUrl);
      const layerResponse = await fetch(imageUrl);
      const geojsonData = await layerResponse.json();
      console.log("Datos GeoJSON cargados:", geojsonData);

      const [
          FeatureLayer,
          Graphic,
          Point,
          SpatialReference,
          heatmapRendererCreator
      ] = await loadModules([
          "esri/layers/FeatureLayer",
          "esri/Graphic",
          "esri/geometry/Point",
          "esri/geometry/SpatialReference",
          "esri/smartMapping/renderers/heatmap"
      ]);

      const graphics = [];
      let graphicIndex = 0;
      const geojsonSpatialReference = new SpatialReference({ wkid: 102100 });
      const viewSpatialReference = jimuMapView.view.spatialReference;

      geojsonData.features.forEach((feature) => {
          if (feature.geometry.type === "Point") {
              const point = new Point({
                  x: feature.geometry.coordinates[0],
                  y: feature.geometry.coordinates[1],
                  spatialReference: geojsonSpatialReference
              });

              graphics.push(new Graphic({
                  geometry: point,
                  attributes: { OBJECTID: graphicIndex, Nombre: feature.properties?.Nombre || "Sin Nombre" },
              }));
              graphicIndex++;
          }
      });

      console.log(graphics);

      const hotspotLayer = new FeatureLayer({
          title: "Hotspot",
          source: graphics,
          fields: [
              { name: "ObjectID", alias: "ObjectID", type: "oid" },
              { name: "Nombre", alias: "Nombre", type: "string" },
          ],
          objectIdField: "ObjectID",
          geometryType: "point",
          spatialReference: viewSpatialReference,
          opacity: 1
      });

      const { renderer } = await heatmapRendererCreator.createRenderer({
          layer: hotspotLayer, 
          view: jimuMapView.view, 
          blurRadius: 5,
      });

      renderer.referenceScale = jimuMapView.scale; // Opcional: revisar si es necesario



      if (jimuMapView) {
          jimuMapView.view.map.add(hotspotLayer);
          hotspotLayer.when(() => {
              jimuMapView.view.goTo(hotspotLayer.fullExtent);
              console.log("Capa de puntos 'hotspot' cargada correctamente.");
              renderer.referenceScale = jimuMapView.view.scale;
              hotspotLayer.renderer = renderer;
          });
      } else {
          console.error("jimuMapView no está configurado.");
      }
  } catch (error) {
      console.error("Error al cargar la capa:", error);
      alert("No se pudo cargar la capa. Revisa la URL o la consola.");
  }
};




























const poligonoresultante = async () => {

  try {

    const imageUrl = "http://127.0.0.1:5000/geoprocess_output/test4.geojson"

    const layerResponse = await fetch(imageUrl);

    if (!layerResponse.ok) {
      throw new Error(`Error al consultar la capa: ${layerResponse.status} ${layerResponse.statusText}`);
    }

    const geojsonData = await layerResponse.json();

    const [FeatureLayer, Graphic, Polygon, SimpleFillSymbol] = await loadModules([
        "esri/layers/FeatureLayer",
        "esri/Graphic",
        "esri/geometry/Polygon",
        "esri/symbols/SimpleFillSymbol"
    ]);

    const colorPoligon = new SimpleFillSymbol({
        color: [255, 0, 0, 0.5],
        outline: { color: [255, 0, 0], width: 1 }
    });

    const featureLayer = new FeatureLayer({
        title: "Capa de Desastre",
        source: [],
        objectIdField: "OBJECTID",
        fields: [
            { name: "OBJECTID", alias: "OBJECTID", type: "oid" },
            { name: "Nombre", alias: "Nombre", type: "string" }
        ],
        renderer: {
            type: "simple",
            symbol: colorPoligon
        }
    });

    const graphics = [];
    let graphicIndex = 0; // Nuevo índice para gráficos únicos

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
            graphics.push(new Graphic({
                geometry: geometry,
                attributes: { OBJECTID: graphicIndex, Nombre: feature.properties?.Nombre || "Sin Nombre" }
            }));
            graphicIndex++; // Incrementa el índice para cada gráfico
        });
    });

    featureLayer.source = graphics;

    const existingLayer = jimuMapView.view.map.layers.find(layer => layer.title === "Capa de Desastre");
    if (existingLayer) {
        jimuMapView.view.map.remove(existingLayer);
    }

    if (jimuMapView) {
        jimuMapView.view.map.add(featureLayer);
        featureLayer.when(() => {
            jimuMapView.view.goTo(featureLayer.fullExtent);
            console.log("FeatureLayer cargado correctamente.");
        });
    } else {
        console.error("jimuMapView no está configurado.");
    }


    
  } catch (error) {
    console.error("Error al cargar el ImageryTileLayer:", error);
    alert("No se pudo cargar la capa. Revisa la URL o la consola.");
  }
};


const mascaraBAI = async () => {

  try {

    
  } catch (error) {
    console.error("Error al cargar el ImageryTileLayer:", error);
    alert("No se pudo cargar la capa. Revisa la URL o la consola.");
  }
};





const deteccionDeCambios = async () => {

  try {

    const imageUrl = "http://127.0.0.1:5000/geoprocess_output/test12.tif"

    console.log("Cargando imagen desde URL:", imageUrl);

    // Validar la URL con una solicitud fetch
    const response = await fetch(imageUrl, { method: "HEAD" });
    if (!response.ok) {
      throw new Error(`Error al validar la URL. Estado: ${response.status}`);
    }

    // Cargar módulos necesarios de la API de ArcGIS
    const [
      
      ImageryTileLayer,
      RasterFunction,
      RasterStretchRenderer

    ] = await loadModules([
    
      "esri/layers/ImageryTileLayer",
      "esri/layers/support/RasterFunction",
      "esri/renderers/RasterStretchRenderer"

    ]);


    const rasterFunctionMask = new RasterFunction({
      functionName: "Mask", 
      functionArguments: {
        NoDataValues: [0, 0, 3, 0], 
      },
    });

    // Crear el ImageryTileLayer
    const imageryLayer = new ImageryTileLayer({
      url: imageUrl,
      //rasterFunction: rasterFunctionMask,
      //opacity: 0.7
    });

    const renderer = new RasterStretchRenderer({
      stretchType: "min-max", 
      gamma: [1, 1, 1],
    });

    // Asigna el renderer a la capa
    //imageryLayer.renderer = renderer;

    // Agregar la capa al mapa
    if (jimuMapView) {
      jimuMapView.view.map.add(imageryLayer);
      imageryLayer.when(() => {
        jimuMapView.view.goTo(imageryLayer.fullExtent);
        console.log("ImageryTileLayer cargado correctamente.");
      });
    } else {
      console.error("jimuMapView no está configurado.");
    }
  } catch (error) {
    console.error("Error al cargar el ImageryTileLayer:", error);
    alert("No se pudo cargar la capa. Revisa la URL o la consola.");
  }
};



  return (
    <div className="widget-demo jimu-widget m-2">
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds?.[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}
      <div>
        <button onClick={loadImageryLayer}>Cargar TIFF como ImageryTileLayer</button>
      </div>
    </div>
  );
};

export default Widget;