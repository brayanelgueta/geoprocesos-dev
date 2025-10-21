import { useState, useEffect, } from 'react';
import { IMState, React, type AllWidgetProps } from 'jimu-core';
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import './assets/style.css';
import { useLocale } from "../../../../hooks/useLocale";
import { translations } from './translations';

import { useDispatch, useSelector } from 'react-redux';
import {FloatingPanel} from 'jimu-ui';


const Widget = (props: AllWidgetProps<unknown>) => {

  const { t } = useLocale(translations);
  const dispatch = useDispatch()

  const onlineProcessor = useSelector((state: IMState) => state.myState?.onlineProcessor)
  //Constante del Mapa
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>(null)

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    setJimuMapView(jmv);
  };
  const closeWidget = () => {
    dispatch({ type: 'ONLINE_PROCESSOR', val: null })
  }

  useEffect(() => {
    console.log({ onlineProcessor })
  }, [onlineProcessor])
  return (

    onlineProcessor?.valueOf() > 1 && (
      <FloatingPanel autoSize={true} className='symbologyContainer' placement='bottom' defaultPosition={{ x: window.innerWidth - 350, y: window.innerHeight - 500 }} headerTitle=''  onHeaderClose={closeWidget}>
        <div className="jimu-widget widget-starter">
          {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
            <JimuMapViewComponent
              useMapWidgetId={props.useMapWidgetIds[0]}
              onActiveViewChange={activeViewChangeHandler}
            />
          )}
          {
            <div className='headerTitle'>
              {onlineProcessor.valueOf() === 2 ? `NDWI`: onlineProcessor.valueOf() === 3 ? "CGI" : onlineProcessor.valueOf() === 4 ? "NDVI" : "SAVI"}
            </div>
          }
          {onlineProcessor?.valueOf() === 2 &&
            <div>
              <p className="title">{t("NDWITitle")}</p>
              <p className="formula">{t("NDWIFormula1")} {t("NDWIFormula2")}</p>
              <p>{t("NDWIDescription")}</p>
              <div className="ndwicolorbar"></div>
            </div>


          }

          {onlineProcessor?.valueOf() === 3 &&
            <div>
              <p className="title">{t("CGITitle")}</p>
              <p className="formula">{t("CGIFormula1")} {t("CGIFormula2")}</p>
              <p>{t("CGIDescription")}</p>
              <div className="colorbar"></div>
            </div>


          }
          {onlineProcessor?.valueOf() === 4 &&
            <div>
              <p className="title">{t("NDVITitle")}</p>
              <p className="formula">{t("NDVIFormula1")} {t("NDVIFormula2")}</p>
              <p>{t("NDVIDescription")}</p>
              <div className="colorbar"></div>
            </div>


          }
          {onlineProcessor?.valueOf() === 5 &&
            <div>
              <p className="title">{t("SAVITitle")}</p>
              <p className="formula">{t("SAVIFormula1")} {t("SAVIFormula2")}</p>
              <p>{t("SAVIDescription")}</p>
              <div className="colorbar"></div>
            </div>


          }
        </div>
      </FloatingPanel>
    )

  );
};

export default Widget;