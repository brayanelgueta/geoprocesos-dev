import { AllWidgetProps, React } from 'jimu-core';
import { useState, useEffect, useRef } from 'react'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis';

import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { DataSourceManager } from 'jimu-core';
import { Button, NumericInput } from 'jimu-ui';
import { loadModules } from 'esri-loader';

import { useLocale } from "../../../../hooks/useLocale";
import { translations } from './translations';

const Widget = (props: AllWidgetProps<unknown>) => {

  const { t } = useLocale(translations);

  const [jimuMapView, setJimuMapView] = useState<JimuMapView>(null);
  const [availableData, setAvailableData] = useState<any | null>([])
  const [maxDensity, setMaxDensity] = useState<number>(0.319)
  const [minDensity, setMinDensity] = useState<number>(0)
  const [blur, setBlur] = useState<number>(30)
  const [sourceLayer, setSourceLayer] = useState<FeatureLayer | null>(null);
  const [isAplied, setIsAplied] = useState(false)

  const layerWatcher = useRef<any>(null);

  const activeViewChangeHandler = (jmv) => {
    setJimuMapView(jmv);
  };

  const handleApplyHeatmap = async () => {
    if (!jimuMapView) return;

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
    const layer = jimuMapView.view.map.allLayers.find(layer =>{
      if (layer.type !== "feature") return false;
      if (layer.title === "Límite urbano Plan Regulador Comunal") return false;
      if (layer.title === "HotSpot") return false;
  
      // Subir en la jerarquía de parents
      let parent = layer.parent;
      let title = 'title' in parent ? parent.title: 'No title property'
      if(title === "Transporte") return false
      if(title === "Infraestructura crítica") return false
      if(title === "Combustibles") return false
      if(title === "Transmisión eléctrica") return false
      if(title === "Centrales de generación eléctrica") return false
  
      return true;
      
   } ) as FeatureLayer;

    if (!layer) {
      console.log("No se encontró ningún layer cargado.");
      return;
    }
    setSourceLayer(layer)

    const graphics = [];
    const geojsonSpatialReference = new SpatialReference({ wkid: 102100 });

    const source = Object(layer.source)
    if (!source?.items) {
      console.log("Layer no tiene items")
    }

    source.items.forEach((item) => {

      const point = new Point({
        x: item.geometry.x,
        y: item.geometry.y,
        spatialReference: geojsonSpatialReference
      });

      graphics.push(new Graphic({
        geometry: point,
        attributes: {
          OBJECTID: item.attributes.OBJECTID,
          Nombre: item.attributes?.NOMBRE || "Sin Nombre"
        },
      }));
    });
    // Antes de crear, eliminar capa previa si existe
    removeHeatMap();


    const hotspot = new FeatureLayer({
      title: "HotSpot",
      source: graphics,
      objectIdField: 'OBJECTID',
      fields: [
        { name: "OBJECTID", alias: "OBJECTID", type: "oid" },
        { name: "Nombre", alias: "Nombre", type: "string" },
      ],
      geometryType: 'point',
      spatialReference: jimuMapView.view.spatialReference,
      opacity: 1
    });

    const renderer = {
      type: "heatmap",
      colorStops: [
        { color: [133, 193, 200, 0], ratio: 0 },
        { color: [133, 193, 200, 0], ratio: 0.01 },
        { color: [133, 193, 200, 255], ratio: 0.01 },
        { color: [133, 193, 200, 255], ratio: 0.01 },
        { color: [144, 161, 190, 255], ratio: 0.0925 },
        { color: [156, 129, 132, 255], ratio: 0.175 },
        { color: [167, 97, 170, 255], ratio: 0.2575 },
        { color: [175, 73, 128, 255], ratio: 0.34 },
        { color: [184, 48, 85, 255], ratio: 0.4225 },
        { color: [192, 24, 42, 255], ratio: 0.505 },
        { color: [200, 0, 0, 255], ratio: 0.5875 },
        { color: [211, 51, 0, 255], ratio: 0.67 },
        { color: [222, 102, 0, 255], ratio: 0.7525 },
        { color: [233, 153, 0, 255], ratio: 0.835 },
        { color: [244, 204, 0, 255], ratio: 0.9175 },
        { color: [255, 255, 0, 255], ratio: 1 },
      ],
   
      
      radius: 200,

    };

    let heatmapParams = {
      layer: hotspot,
      view: jimuMapView.view,
      renderer: renderer,
      blurRadius: blur,
      maxDensity: maxDensity,
      minDensity: minDensity,
      referenceScale: 3000,
    }
    heatmapRendererCreator.createRenderer(heatmapParams).then((response) => {

      hotspot.renderer = response.renderer
      hotspot.listMode = "show"
      hotspot.visible = true
      jimuMapView.view.map.add(hotspot)
    })
    setIsAplied(true)
  };
  // Detecta los cambios en los layers
  const handleLayerChange = () => {
    if (!jimuMapView) return;
  
    const layers = jimuMapView.view.map.allLayers.filter(layer => {
      if (layer.type !== "feature") return false;
      if (layer.title === "Límite urbano Plan Regulador Comunal") return false;
      if (layer.title === "HotSpot") return false;
  
      // Subir en la jerarquía de parents
      let parent = layer.parent;
      let title = 'title' in parent ? parent.title: 'No title property'
      if(title === "Transporte") return false
      if(title === "Infraestructura crítica") return false
      if(title === "Combustibles") return false
      if(title === "Transmisión eléctrica") return false
      if(title === "Centrales de generación eléctrica") return false
  
      return true;
    });
  
    console.log("Layers filtrados:", layers);
    setAvailableData(layers);
  };

  // Detecta los cambios en los dataSources
  const handleDataSourceChange = () => {
    if (!jimuMapView) return;
    const dataSources = DataSourceManager.getInstance().getDataSourcesAsArray();
    console.log("DataSources actuales:", dataSources);
  };

  // Elimina el heatmap
  const removeHeatMap = () => {
    if (!jimuMapView) return;
    const layer = jimuMapView.view.map.allLayers.find(layer =>
      layer.title === "HotSpot")
    if (layer) {
      jimuMapView.view.map.remove(layer)
      setIsAplied(false)
    }
  }
  // Elimina el heatmap y lo vuelve a generar
  const regenerateHeatmap = () => {
    removeHeatMap();
    handleApplyHeatmap();
  };
  // Debounce para evitar que se ejecute la función demasiadas veces
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };
  // Detecta si el layer fuente es removido
  useEffect(() => {
    if (!jimuMapView) return;

    if (layerWatcher.current) layerWatcher.current.remove();

    layerWatcher.current = jimuMapView.view.map.allLayers.on('change', () => {
      const stillExists = jimuMapView.view.map.allLayers.find(l =>
        l === sourceLayer
      );
      if (!stillExists && sourceLayer) {
        console.log('⚠️ Layer fuente ha sido eliminado.');
        removeHeatMap();
        setSourceLayer(null);
      }
      handleLayerChange();
    });

    return () => {
      if (layerWatcher.current) layerWatcher.current.remove();
    };
  }, [jimuMapView, sourceLayer]);

  // // Detecta los cambios del extend y vuelve a generar el heatmap
  useEffect(() => {
    if (!jimuMapView) return;
    const debouncedRegenerate = debounce(() => {
      if (availableData.length > 0) {
        regenerateHeatmap();
      }
    }, 1000);
    const extentWatcher = jimuMapView.view.watch("extent", () => {
      if(isAplied)debouncedRegenerate();
    });

    return () => {
      extentWatcher.remove();

    };

  }, [jimuMapView, availableData, blur, maxDensity, minDensity]);


  // Detecta cada vez que cambia el mapa o los dataSources
  useEffect(() => {
    if (!jimuMapView) return;
    handleLayerChange();
    handleDataSourceChange();
  }, [jimuMapView]);

  return (
    <div className="jimu-widget">
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}
      <div className='heatmap-main-container'>
        {
          availableData.length === 0 ?
            (
              <div className='heatmap-container p-4'>
                <h5>{t("warning")}</h5>
              </div>
            )
            :
            (
              <div className='heatmap-container p-4'>
                <div className='heatmap-settings'>
                  <label htmlFor="blur">{t("blur")}</label>
                  <NumericInput type='text' value={blur} onChange={(e) => setBlur(e)} />
                </div>
                <div className='heatmap-settings'>
                  <label htmlFor="maxDensity">Max {t("density")}</label>
                  <NumericInput type='text' value={maxDensity} onChange={(e) => setMaxDensity(e)} />
                </div>
                <div className='heatmap-settings'>
                  <label htmlFor="minDensity">Min {t("density")}</label>
                  <NumericInput type='text' value={minDensity} onChange={(e) => setMinDensity(e)} />
                </div>

                <div className='heatmap-buttons d-flex justify-content-around mt-3'>
                  <Button type='primary' size="sm" onClick={() => handleApplyHeatmap()}>{t("apply")} hotspot</Button>
                  <Button type='primary' size="sm" onClick={() => removeHeatMap()}>{t("delete")} hotspot</Button>

                </div>
              </div>
            )
        }
      </div>

      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={(jmv) => setJimuMapView(jmv)}
      />
    </div>
  );
}

export default Widget;