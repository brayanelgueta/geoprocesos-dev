import { useEffect, useState } from 'react';
import { JimuMapViewComponent } from 'jimu-arcgis';
import './assets/style.css';
import { useDispatch } from 'react-redux';

import { React, AllWidgetProps } from 'jimu-core';
import { useLocale } from "../../../../hooks/useLocale";
import { translations } from './translations';

const Widget = (props: AllWidgetProps<any>) => {

  const dispatch = useDispatch()
  const { t } = useLocale(translations);

  const [jimuMapView, setJimuMapView] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(1)
  const [selectedOption, setSelectedOption] = useState<number | null>(0)

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
  const handleCategoryClick = (categoryNumber: number) => {
    setSelectedCategory(categoryNumber)
  }

  const handleOptionClick = async (optionNumber: number) => {

    const isDetectionReady = optionNumber === 0

    dispatch({ type: "CHANGE_DETECTION_READY", val: isDetectionReady })
    dispatch({ type: "SET_SENSORS", val: null })

    setSelectedOption(optionNumber)
    toggleWidgetVisibility(optionNumber)
    switch (optionNumber) {
      case 0:
        dispatch({ type: "GEOPROCESS", val: 1 })
        break
      case 1:
        dispatch({ type: "GEOPROCESS", val: 2 })
        break
      case 3:
        dispatch({ type: "GEOPROCESS", val: 3 })
        break
      case 2:
        dispatch({ type: "GEOPROCESS", val: 4 })
        break
      case 4:
        dispatch({ type: "GEOPROCESS", val: 5 })
        break
      case 5:
        dispatch({ type: "GEOPROCESS", val: 6 })
        break
    }
    removeBuffers()

  }

  // Configuracion del MAPA
  const activeViewChangeHandler = (jmv) => {
    setJimuMapView(jmv);
  };

  const eventoPunto = () => {
    const test2 = document.getElementsByClassName("section-content")[0] as HTMLDivElement
    for (let i = 0; i < test2.children.length; i++) {
      const child = test2.children[i] as HTMLDivElement;
      if (child) {
        var chilNodeInter = child.childNodes[0] as HTMLDivElement
        if (chilNodeInter) {
          chilNodeInter.style.pointerEvents = "auto"
        }
      }
    }
  }
  eventoPunto()

  // Manejo del Slide de geoprocesos
  const toggleWidgetVisibility = (index) => {
    const sectionContent = document.getElementsByClassName('section-content')[0];
    if (sectionContent) {
      Array.from(sectionContent.children).forEach((child, i) => {
        if (child instanceof HTMLDivElement) {
          if (i === index) {
            child.style.display = 'block';
            child.style.opacity = '1';
          } else {
            child.style.display = 'none';
            child.style.opacity = '0';
          }
        }

      });
    }
  };
  useEffect(() => {
    toggleWidgetVisibility(0)
  }, [])

  return (
    <div className="jimu-widget widgetControlerBTN">
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds?.[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}
      <div className="contenedorPri-WidgetControler">
        <h4>{t("widgetLabel")}</h4>

        <div className='two-column-selector'>
          <div className="category-row">
            <div
              className={`category-button ${selectedCategory === 1 ? "active" : ""}`}
              style={{
                backgroundColor: selectedCategory === 1 ? "#0057B8" : "#1a5276",
                boxShadow: selectedCategory === 1 ? "0 0 0 1px #ffffff" : "none",
              }}
              onClick={() => handleCategoryClick(1)}
            >
              {t("analisis")}
            </div>
            <div
              className={`category-button ${selectedCategory === 2 ? "active" : ""}`}
              style={{
                backgroundColor: selectedCategory === 2 ? "#0057B8" : "#1a5276",
                boxShadow: selectedCategory === 2 ? "0 0 0 1px #ffffff" : "none",
              }}
              onClick={() => handleCategoryClick(2)}
            >
              {t("riskDetection")}
            </div>
          </div>
          {
            selectedCategory === 1 && (
              <div className="options-container">
                <div className={`option-button ${selectedOption === 0 ? "active" : ""}`}
                  style={{
                    backgroundColor: selectedOption === 0 ? "#0057B8" : "#1a5276",
                    boxShadow: selectedOption === 0 ? "0 0 0 1px #ffffff" : "none",
                  }}
                  onClick={() => handleOptionClick(0)}>
                  {t("changeDetection")}
                </div>

                <div
                  className={`option-button ${selectedOption === 1 ? "active" : ""}`}
                  style={{
                    backgroundColor: selectedOption === 1 ? "#0057B8" : "#1a5276",
                    boxShadow: selectedOption === 1 ? "0 0 0 1px #ffffff" : "none",
                  }}
                  onClick={() => handleOptionClick(1)}>
                  {t("spectralIndex")}
                </div>
                <div
                  className={`option-button ${selectedOption === 3 ? "active" : ""}`}
                  style={{
                    backgroundColor: selectedOption === 3 ? "#0057B8" : "#1a5276",
                    boxShadow: selectedOption === 3 ? "0 0 0 1px #ffffff" : "none",
                  }}
                  onClick={() => handleOptionClick(3)}>
                  {t("indexFormulator")}
                </div>
              </div>
            )
          }
          {
            selectedCategory === 2 && (
              <div className="options-container">
                <div className={`option-button ${selectedOption === 2 ? "active" : ""}`}
                  style={{
                    backgroundColor: selectedOption === 2 ? "#0057B8" : "#1a5276",
                    boxShadow: selectedOption === 2 ? "0 0 0 1px #ffffff" : "none",
                  }} onClick={() => handleOptionClick(2)}>
                  {t("areaRiskDetection")}
                </div>

                <div
                  className={`option-button ${selectedOption === 4 ? "active" : ""}`}
                  style={{
                    backgroundColor: selectedOption === 4 ? "#0057B8" : "#1a5276",
                    boxShadow: selectedOption === 4 ? "0 0 0 1px #ffffff" : "none",
                  }}
                  onClick={() => handleOptionClick(4)}>
                  {t("infrastructureDetection")}
                </div>
                <div className={`option-button ${selectedOption === 5 ? "active" : ""}`}
                  style={{
                    backgroundColor: selectedOption === 5 ? "#0057B8" : "#1a5276",
                    boxShadow: selectedOption === 5 ? "0 0 0 1px #ffffff" : "none",
                  }} onClick={() => handleOptionClick(5)}>
                  {t("proximityRisk")}
                </div>
              </div>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default Widget;