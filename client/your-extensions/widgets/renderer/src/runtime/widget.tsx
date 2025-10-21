import React, { useState, useEffect } from 'react';
import { JimuMapViewComponent } from 'jimu-arcgis';
import './assets/style.css';
import { loadModules } from 'esri-loader';
import { Tooltip, Loading } from 'jimu-ui'
import { useSelector } from 'react-redux';
import { IMState } from 'jimu-core';
import { useDispatch } from 'react-redux';
import { useLocale } from "../../../../hooks/useLocale";
import { translations } from './translations';
import { toast, Bounce, ToastContainer } from 'react-toastify';

const Widget = (props) => {
  const dispatch = useDispatch()

  const { t } = useLocale(translations);
  const [jimuMapView, setJimuMapView] = useState(null);
  const [active, setActive] = useState(0)
  const [loading, setLoading] = useState(false)
  const selectedSensor = useSelector((state: IMState) => state.myState?.selectedSensor)


  const activeViewChangeHandler = (jmv) => {
    setJimuMapView(jmv);
  };
  const renderers = [
    {
      img: require('./img/color_verdadero.png'),
      name: t("naturalColor"),
      function: "Color Verdadero",
      tooltip: t("naturalColorToolTip")
    },
    {
      img: require('./img/falso_color.png'),
      name: t("infraredName"),
      function: "Color IR",
      tooltip: t("infraredTooltip")
    },
    {
      img: require('./img/NDWI.png'),
      name: "NDWI",
      function: "NDWI Coloreado",
      tooltip: t("ndwiTooltip")
    },
    {
      img: require('./img/CGI.png'),
      name: "CGI",
      function: "CGI Coloreado",
      tooltip: t("cgiTooltip")
    },
    {
      img: require('./img/NDVI.png'),
      name: "NDVI",
      function: "NDVI_coloreado",
      tooltip: t("ndviTooltip")
    },
    {
      img: require('./img/SAVI.png'),
      name: "SAVI",
      function: "SAVI Coloreado",
      tooltip: t("saviTooltip")
    },
  ]

  const handleRender = async (functionName: string, index: number) => {
    if (!selectedSensor) {
      toast.warning(t("errorSensor"), {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce
      });
      return;
    }
    setActive(index) 
    setLoading(true)
    await applyRasterFunction(functionName, index)
    dispatch({ type: "ONLINE_PROCESSOR", val: index })
  }


  const applyRasterFunction = async (functionName: string, index: number) => {
   
    if (!jimuMapView) {
      console.error("MapView or ESRI modules not initialized.");
      return;
    }

    await loadModules(['esri/layers/support/RasterFunction'])
      .then(([RasterFunction]) => {
        const imageryLayer = jimuMapView.view.map.findLayerById(selectedSensor.id);

        if (!imageryLayer) {
          console.error("Imagery layer not found.");
          return;
        }

        const rasterFunction = new RasterFunction({
          functionName: functionName,
          variableName: 'Raster'
        });

        imageryLayer.rasterFunction = rasterFunction;
        imageryLayer.refresh();

        setLoading(false)
      })
  };
  useEffect(() => {
    dispatch({ type: "LOADING", val: false })
  }, [])
  return (
    <div className="widget-demo jimu-widget widgetRender">
      <ToastContainer />
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}
      <h4>{t("widgetLabel")}</h4>
      <div className='contentTarjet'>
        {
          // loading ?
          //   (
          //     <div>
          //       <Loading type="DONUT" height={20} width={20} />
          //     </div>
          //   )
          //   :

          renderers.map((item, index) => (
            <Tooltip
              key={index}
              enterDelay={100}
              enterNextDelay={0}
              enterTouchDelay={700}
              leaveDelay={0}
              leaveTouchDelay={1500}
              offsetOptions={4}
              placement="top"
              role="tooltip"
              title={item.tooltip}
            >
              <div
                className={`tarjetRender ${active === index ? "active" : ""}`}
                style={{ backgroundImage: `url(${item.img})` }}
                onClick={() => handleRender(item.function, index)}
              >
                <p>{item.name}</p>

                {loading && active === index && (
                  <div className="spinner-overlay">
                    <Loading type="DONUT" width={28} height={28} />
                  </div>
                )}
              </div>
            </Tooltip>
          ))
        }
      </div>
    </div>
  );
};

export default Widget;