System.register(["jimu-core/react","jimu-arcgis","jimu-ui","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/mask/src/runtime/assets/style.css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/mask/src/runtime/assets/style.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.widgetMask {
  background-color: #052042;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 15px;
  overflow: hidden;
  color: white;
}

.interHome {
  height: 75%;
  width: 100%;
  justify-content: left;
  text-align: left;
  padding-top: 10px;
}

.contentSliceMask-Base {
  height: 100%;
  min-height: 180px;
  justify-content: left;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.3rem;
}

.contentSliceMask {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0; /* Sin padding para que el slider llegue a los extremos */
  .slider input {
    color: #008ecc;
  }
}

.contentSliceMaskPri {
  position: relative;
  width: 100%;
  height: 20px;
  margin-top: 8px; /* Separación de las marcas */
}

.label1Mask {
  position: absolute;
  width: 80px;
  height: 20px;
  text-align: center;
  font-size: 12px;
  transform: translateX(-50%); /* Centrar el label en su posición */
}

/* Posiciones específicas para cada label */
.label1Mask:nth-child(1) {
  left: 0%;
}

.label1Mask:nth-child(2) {
  left: 25%;
}

.label1Mask:nth-child(3) {
  left: 50%;
}

.label1Mask:nth-child(4) {
  left: 75%;
}

.label1Mask:nth-child(5) {
  left: 100%;
}

.rangeInputMask {
  height: 20px;
  width: 400px;
  height: 0.5em;
  display: block;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4039215686) calc((var(--value) + 1) * 50%), #004a98 0);
  border-radius: 3px;
}

.centerMask {
  text-align: center;
}

.rightMask {
  text-align: center;
}

.porcentajeClassMask {
  width: 80px;
}

.intermedioNegativo {
  width: 75%;
  margin-left: 25%;
}

.intermedioPositivo {
  width: 75%;
  text-align: end;
  height: 20px;
}

.selectClassIndice {
  justify-content: space-between;
  display: flex;
  margin-bottom: 15px;
}

.selectClassIndice label {
  width: 200px;
  font-size: 13px;
  height: 23px;
  padding-top: 5px;
}

.selectClassIndice select {
  width: 70%;
  max-width: 400px;
  &:hover {
    color: #fff;
  }
}

.contentBtnVolver {
  padding-top: 5%;
}

.btnWidgetsPri {
  text-decoration: none;
  border: none;
  box-shadow: none;
  height: 30px;
  width: auto;
  border-radius: 5px;
  font-weight: 700;
  background-color: rgb(15, 89, 194);
  border: solid 2px rgb(78, 151, 255);
  color: white;
}

#contentIndicesNomales {
  width: 100%;
  height: 100%;
}

.btnMask {
  background-color: #6a6969;
  color: white;
  width: auto;
  height: 30px;
  text-decoration: none;
  border: none;
  margin: 6px;
  border-radius: 5px;
  padding: 6px 20px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

#contentConsultaBai {
  display: flex;
  justify-content: space-between;
}

.spectral-index-description {
  margin-top: 7px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  p {
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #fff;
  }
}

.mask-buttons {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  width: 35%;
  margin-top: auto;
  button {
    background-color: #1a5276;
    flex: 0 0 auto;
    padding: 0.5rem 2rem;
    height: 2rem;
    width: 100%;
    transition: all 0.3s ease;
    &:hover {
      border: 1px solid #008ecc;
      background-color: #052042 !important;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
}

.slider {
  padding: 0;
  margin: 0;
}

.slider-marks {
  position: relative;
  width: 100%;
  height: 12px;
  margin-bottom: 12px; /* Más espacio entre las marcas y los labels */
}

.slider-mark {
  position: absolute;
  width: 2px;
  background: #fff;
  opacity: 0.7;
  border-radius: 1px;
  z-index: 2;
  transform: translateX(-50%); /* Centrar la marca en su posición */
}

/* Marcas principales (más altas) - en 0%, 25%, 50%, 75%, 100% */
.slider-mark-main {
  height: 10px;
  opacity: 0.9;
}

/* Marcas intermedias (medianas) - en 12.5%, 37.5%, 62.5%, 87.5% */
.slider-mark-small {
  height: 7px;
  opacity: 0.7;
}

/* Marcas adicionales (pequeñas) - cada 6.25% */
.slider-mark-tiny {
  height: 5px;
  opacity: 0.5;
}

.slider-labels {
  position: relative;
  width: 100%;
  height: 20px;
  margin-top: 2px;
}

.slider-label {
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  pointer-events: none;
}

.multi-range-slider {
  padding: 0 !important;
  margin: 0 !important;
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #1a5276;
  }
}

/* Remover padding interno del contenedor del slider */
.multi-range-slider .multi-range-slider-container {
  padding: 0 !important;
}

.multi-range-slider--range {
  background: #008ecc !important;
  height: 4px;
  opacity: 1;
}

.multi-range-slider--track {
  height: 4px !important;
  margin: 0 !important;
  padding: 0 !important;
}`, "",{"version":3,"sources":["webpack://./../../../geoprocesos%20exprience%20builder/ArcGISExperienceBuilder/client/your-extensions/widgets/mask/src/runtime/assets/style.css","webpack://./your-extensions/widgets/mask/src/runtime/assets/style.css"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,yBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,aAAA;EACA,gBAAA;EACA,YAAA;ADEF;;ACAA;EACE,WAAA;EACA,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,iBAAA;ADGF;;ACDA;EACE,YAAA;EACA,iBAAA;EACA,qBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;ADIF;;ACFA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,UAAA,EAAA,yDAAA;EAEA;IACE,cAAA;EDIF;AACF;;ACFA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA,EAAA,6BAAA;ADKF;;ACHA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,2BAAA,EAAA,oCAAA;ADMF;;ACHA,2CAAA;AACA;EACE,QAAA;ADMF;;ACJA;EACE,SAAA;ADOF;;ACLA;EACE,SAAA;ADQF;;ACNA;EACE,SAAA;ADSF;;ACPA;EACE,UAAA;ADUF;;ACRA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,kHAAA;EAKA,kBAAA;ADOF;;ACLA;EACE,kBAAA;ADQF;;ACNA;EACE,kBAAA;ADSF;;ACPA;EACE,WAAA;ADUF;;ACRA;EACE,UAAA;EACA,gBAAA;ADWF;;ACTA;EACE,UAAA;EACA,eAAA;EACA,YAAA;ADYF;;ACVA;EACE,8BAAA;EACA,aAAA;EACA,mBAAA;ADaF;;ACXA;EACE,YAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;ADcF;;ACZA;EACE,UAAA;EACA,gBAAA;EAEA;IACE,WAAA;EDcF;AACF;;ACZA;EACE,eAAA;ADeF;;ACbA;EACE,qBAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,kCAAA;EACA,mCAAA;EACA,YAAA;ADgBF;;ACbA;EACE,WAAA;EACA,YAAA;ADgBF;;ACbA;EACE,yBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;ADgBF;;ACbA;EACE,aAAA;EACA,8BAAA;ADgBF;;ACdA;EACE,eAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA;IACE,SAAA;IACA,UAAA;IACA,eAAA;IACA,WAAA;EDiBF;AACF;;ACfA;EACE,aAAA;EACA,2BAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EAEA;IACE,yBAAA;IACA,cAAA;IACA,oBAAA;IACA,YAAA;IACA,WAAA;IACA,yBAAA;IAEA;MACE,yBAAA;MACA,oCAAA;MACA,wCAAA;IDgBF;EACF;AACF;;ACdA;EACE,UAAA;EACA,SAAA;ADiBF;;ACfA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA,EAAA,8CAAA;ADkBF;;ACfA;EACE,kBAAA;EACA,UAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,2BAAA,EAAA,oCAAA;ADkBF;;ACfA,gEAAA;AACA;EACE,YAAA;EACA,YAAA;ADkBF;;ACfA,kEAAA;AACA;EACE,WAAA;EACA,YAAA;ADkBF;;ACfA,+CAAA;AACA;EACE,WAAA;EACA,YAAA;ADkBF;;ACfA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;ADkBF;;ACfA;EACE,kBAAA;EACA,MAAA;EACA,2BAAA;EACA,eAAA;EACA,WAAA;EACA,mBAAA;EACA,oBAAA;ADkBF;;AChBA;EACE,qBAAA;EACA,oBAAA;EAEA;IACE,wBAAA;IACA,mBAAA;EDkBF;AACF;;ACfA,sDAAA;AACA;EACE,qBAAA;ADkBF;;ACfA;EACE,8BAAA;EACA,WAAA;EACA,UAAA;ADkBF;;AChBA;EACE,sBAAA;EACA,oBAAA;EACA,qBAAA;ADmBF","sourcesContent":["@charset \"UTF-8\";\n.widgetMask {\n  background-color: #052042;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 15px;\n  overflow: hidden;\n  color: white;\n}\n\n.interHome {\n  height: 75%;\n  width: 100%;\n  justify-content: left;\n  text-align: left;\n  padding-top: 10px;\n}\n\n.contentSliceMask-Base {\n  height: 100%;\n  min-height: 180px;\n  justify-content: left;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0.3rem;\n}\n\n.contentSliceMask {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 0; /* Sin padding para que el slider llegue a los extremos */\n  .slider input {\n    color: #008ecc;\n  }\n}\n\n.contentSliceMaskPri {\n  position: relative;\n  width: 100%;\n  height: 20px;\n  margin-top: 8px; /* Separación de las marcas */\n}\n\n.label1Mask {\n  position: absolute;\n  width: 80px;\n  height: 20px;\n  text-align: center;\n  font-size: 12px;\n  transform: translateX(-50%); /* Centrar el label en su posición */\n}\n\n/* Posiciones específicas para cada label */\n.label1Mask:nth-child(1) {\n  left: 0%;\n}\n\n.label1Mask:nth-child(2) {\n  left: 25%;\n}\n\n.label1Mask:nth-child(3) {\n  left: 50%;\n}\n\n.label1Mask:nth-child(4) {\n  left: 75%;\n}\n\n.label1Mask:nth-child(5) {\n  left: 100%;\n}\n\n.rangeInputMask {\n  height: 20px;\n  width: 400px;\n  height: 0.5em;\n  display: block;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4039215686) calc((var(--value) + 1) * 50%), #004a98 0);\n  border-radius: 3px;\n}\n\n.centerMask {\n  text-align: center;\n}\n\n.rightMask {\n  text-align: center;\n}\n\n.porcentajeClassMask {\n  width: 80px;\n}\n\n.intermedioNegativo {\n  width: 75%;\n  margin-left: 25%;\n}\n\n.intermedioPositivo {\n  width: 75%;\n  text-align: end;\n  height: 20px;\n}\n\n.selectClassIndice {\n  justify-content: space-between;\n  display: flex;\n  margin-bottom: 15px;\n}\n\n.selectClassIndice label {\n  width: 200px;\n  font-size: 13px;\n  height: 23px;\n  padding-top: 5px;\n}\n\n.selectClassIndice select {\n  width: 70%;\n  max-width: 400px;\n  &:hover {\n    color: #fff;\n  }\n}\n\n.contentBtnVolver {\n  padding-top: 5%;\n}\n\n.btnWidgetsPri {\n  text-decoration: none;\n  border: none;\n  box-shadow: none;\n  height: 30px;\n  width: auto;\n  border-radius: 5px;\n  font-weight: 700;\n  background-color: rgb(15, 89, 194);\n  border: solid 2px rgb(78, 151, 255);\n  color: white;\n}\n\n#contentIndicesNomales {\n  width: 100%;\n  height: 100%;\n}\n\n.btnMask {\n  background-color: #6a6969;\n  color: white;\n  width: auto;\n  height: 30px;\n  text-decoration: none;\n  border: none;\n  margin: 6px;\n  border-radius: 5px;\n  padding: 6px 20px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n#contentConsultaBai {\n  display: flex;\n  justify-content: space-between;\n}\n\n.spectral-index-description {\n  margin-top: 7px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: start;\n  align-items: start;\n  p {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    color: #fff;\n  }\n}\n\n.mask-buttons {\n  display: flex;\n  justify-content: flex-start;\n  gap: 1rem;\n  width: 35%;\n  margin-top: auto;\n  button {\n    background-color: #1a5276;\n    flex: 0 0 auto;\n    padding: 0.5rem 2rem;\n    height: 2rem;\n    width: 100%;\n    transition: all 0.3s ease;\n    &:hover {\n      border: 1px solid #008ecc;\n      background-color: #052042 !important;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n}\n\n.slider {\n  padding: 0;\n  margin: 0;\n}\n\n.slider-marks {\n  position: relative;\n  width: 100%;\n  height: 12px;\n  margin-bottom: 12px; /* Más espacio entre las marcas y los labels */\n}\n\n.slider-mark {\n  position: absolute;\n  width: 2px;\n  background: #fff;\n  opacity: 0.7;\n  border-radius: 1px;\n  z-index: 2;\n  transform: translateX(-50%); /* Centrar la marca en su posición */\n}\n\n/* Marcas principales (más altas) - en 0%, 25%, 50%, 75%, 100% */\n.slider-mark-main {\n  height: 10px;\n  opacity: 0.9;\n}\n\n/* Marcas intermedias (medianas) - en 12.5%, 37.5%, 62.5%, 87.5% */\n.slider-mark-small {\n  height: 7px;\n  opacity: 0.7;\n}\n\n/* Marcas adicionales (pequeñas) - cada 6.25% */\n.slider-mark-tiny {\n  height: 5px;\n  opacity: 0.5;\n}\n\n.slider-labels {\n  position: relative;\n  width: 100%;\n  height: 20px;\n  margin-top: 2px;\n}\n\n.slider-label {\n  position: absolute;\n  top: 0;\n  transform: translateX(-50%);\n  font-size: 12px;\n  color: #fff;\n  white-space: nowrap;\n  pointer-events: none;\n}\n\n.multi-range-slider {\n  padding: 0 !important;\n  margin: 0 !important;\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: #1a5276;\n  }\n}\n\n/* Remover padding interno del contenedor del slider */\n.multi-range-slider .multi-range-slider-container {\n  padding: 0 !important;\n}\n\n.multi-range-slider--range {\n  background: #008ecc !important;\n  height: 4px;\n  opacity: 1;\n}\n\n.multi-range-slider--track {\n  height: 4px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}","@charset \"UTF-8\";\n.widgetMask {\n  background-color: #052042;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 15px;\n  overflow: hidden;\n  color: white;\n}\n\n.interHome {\n  height: 75%;\n  width: 100%;\n  justify-content: left;\n  text-align: left;\n  padding-top: 10px;\n}\n\n.contentSliceMask-Base {\n  height: 100%;\n  min-height: 180px;\n  justify-content: left;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0.3rem;\n}\n\n.contentSliceMask {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 0; /* Sin padding para que el slider llegue a los extremos */\n  .slider input {\n    color: #008ecc;\n  }\n}\n\n.contentSliceMaskPri {\n  position: relative;\n  width: 100%;\n  height: 20px;\n  margin-top: 8px; /* Separación de las marcas */\n}\n\n.label1Mask {\n  position: absolute;\n  width: 80px;\n  height: 20px;\n  text-align: center;\n  font-size: 12px;\n  transform: translateX(-50%); /* Centrar el label en su posición */\n}\n\n/* Posiciones específicas para cada label */\n.label1Mask:nth-child(1) {\n  left: 0%;\n}\n\n.label1Mask:nth-child(2) {\n  left: 25%;\n}\n\n.label1Mask:nth-child(3) {\n  left: 50%;\n}\n\n.label1Mask:nth-child(4) {\n  left: 75%;\n}\n\n.label1Mask:nth-child(5) {\n  left: 100%;\n}\n\n.rangeInputMask {\n  height: 20px;\n  width: 400px;\n  height: 0.5em;\n  display: block;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4039215686) calc((var(--value) + 1) * 50%), #004a98 0);\n  border-radius: 3px;\n}\n\n.centerMask {\n  text-align: center;\n}\n\n.rightMask {\n  text-align: center;\n}\n\n.porcentajeClassMask {\n  width: 80px;\n}\n\n.intermedioNegativo {\n  width: 75%;\n  margin-left: 25%;\n}\n\n.intermedioPositivo {\n  width: 75%;\n  text-align: end;\n  height: 20px;\n}\n\n.selectClassIndice {\n  justify-content: space-between;\n  display: flex;\n  margin-bottom: 15px;\n}\n\n.selectClassIndice label {\n  width: 200px;\n  font-size: 13px;\n  height: 23px;\n  padding-top: 5px;\n}\n\n.selectClassIndice select {\n  width: 70%;\n  max-width: 400px;\n  &:hover {\n    color: #fff;\n  }\n}\n\n.contentBtnVolver {\n  padding-top: 5%;\n}\n\n.btnWidgetsPri {\n  text-decoration: none;\n  border: none;\n  box-shadow: none;\n  height: 30px;\n  width: auto;\n  border-radius: 5px;\n  font-weight: 700;\n  background-color: rgb(15, 89, 194);\n  border: solid 2px rgb(78, 151, 255);\n  color: white;\n}\n\n#contentIndicesNomales {\n  width: 100%;\n  height: 100%;\n}\n\n.btnMask {\n  background-color: #6a6969;\n  color: white;\n  width: auto;\n  height: 30px;\n  text-decoration: none;\n  border: none;\n  margin: 6px;\n  border-radius: 5px;\n  padding: 6px 20px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n#contentConsultaBai {\n  display: flex;\n  justify-content: space-between;\n}\n\n.spectral-index-description {\n  margin-top: 7px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: start;\n  align-items: start;\n  p {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    color: #fff;\n  }\n}\n\n.mask-buttons {\n  display: flex;\n  justify-content: flex-start;\n  gap: 1rem;\n  width: 35%;\n  margin-top: auto;\n  button {\n    background-color: #1a5276;\n    flex: 0 0 auto;\n    padding: 0.5rem 2rem;\n    height: 2rem;\n    width: 100%;\n    transition: all 0.3s ease;\n    &:hover {\n      border: 1px solid #008ecc;\n      background-color: #052042 !important;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n}\n\n.slider {\n  padding: 0;\n  margin: 0;\n}\n\n.slider-marks {\n  position: relative;\n  width: 100%;\n  height: 12px;\n  margin-bottom: 12px; /* Más espacio entre las marcas y los labels */\n}\n\n.slider-mark {\n  position: absolute;\n  width: 2px;\n  background: #fff;\n  opacity: 0.7;\n  border-radius: 1px;\n  z-index: 2;\n  transform: translateX(-50%); /* Centrar la marca en su posición */\n}\n\n/* Marcas principales (más altas) - en 0%, 25%, 50%, 75%, 100% */\n.slider-mark-main {\n  height: 10px;\n  opacity: 0.9;\n}\n\n/* Marcas intermedias (medianas) - en 12.5%, 37.5%, 62.5%, 87.5% */\n.slider-mark-small {\n  height: 7px;\n  opacity: 0.7;\n}\n\n/* Marcas adicionales (pequeñas) - cada 6.25% */\n.slider-mark-tiny {\n  height: 5px;\n  opacity: 0.5;\n}\n\n.slider-labels {\n  position: relative;\n  width: 100%;\n  height: 20px;\n  margin-top: 2px;\n}\n\n.slider-label {\n  position: absolute;\n  top: 0;\n  transform: translateX(-50%);\n  font-size: 12px;\n  color: #fff;\n  white-space: nowrap;\n  pointer-events: none;\n}\n\n.multi-range-slider {\n  padding: 0 !important;\n  margin: 0 !important;\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: #1a5276;\n  }\n}\n\n/* Remover padding interno del contenedor del slider */\n.multi-range-slider .multi-range-slider-container {\n  padding: 0 !important;\n}\n\n.multi-range-slider--range {\n  background: #008ecc !important;\n  height: 4px;\n  opacity: 1;\n}\n\n.multi-range-slider--track {\n  height: 4px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/esri-loader/dist/esm/esri-loader.js":
/*!**********************************************************!*\
  !*** ./node_modules/esri-loader/dist/esm/esri-loader.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getScript: () => (/* reexport safe */ _script__WEBPACK_IMPORTED_MODULE_2__.getScript),
/* harmony export */   isLoaded: () => (/* reexport safe */ _script__WEBPACK_IMPORTED_MODULE_2__.isLoaded),
/* harmony export */   loadCss: () => (/* reexport safe */ _utils_css__WEBPACK_IMPORTED_MODULE_3__.loadCss),
/* harmony export */   loadModules: () => (/* reexport safe */ _modules__WEBPACK_IMPORTED_MODULE_1__.loadModules),
/* harmony export */   loadScript: () => (/* reexport safe */ _script__WEBPACK_IMPORTED_MODULE_2__.loadScript),
/* harmony export */   setDefaultOptions: () => (/* reexport safe */ _script__WEBPACK_IMPORTED_MODULE_2__.setDefaultOptions),
/* harmony export */   utils: () => (/* reexport safe */ _utils_index__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/index */ "./node_modules/esri-loader/dist/esm/utils/index.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules */ "./node_modules/esri-loader/dist/esm/modules.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script */ "./node_modules/esri-loader/dist/esm/script.js");
/* harmony import */ var _utils_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/css */ "./node_modules/esri-loader/dist/esm/utils/css.js");
/*
  Copyright (c) 2022 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
// re-export the functions that are part of the public API







/***/ }),

/***/ "./node_modules/esri-loader/dist/esm/modules.js":
/*!******************************************************!*\
  !*** ./node_modules/esri-loader/dist/esm/modules.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadModules: () => (/* binding */ loadModules)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./node_modules/esri-loader/dist/esm/script.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/index */ "./node_modules/esri-loader/dist/esm/utils/index.js");
/* Copyright (c) 2022 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */


// wrap Dojo's require() in a promise
function requireModules(modules) {
    return new _utils_index__WEBPACK_IMPORTED_MODULE_1__["default"].Promise(function (resolve, reject) {
        // If something goes wrong loading the esri/dojo scripts, reject with the error.
        var errorHandler = window['require'].on('error', reject);
        window['require'](modules, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // remove error handler
            errorHandler.remove();
            // Resolve with the parameters from dojo require as an array.
            resolve(args);
        });
    });
}
// returns a promise that resolves with an array of the required modules
// also will attempt to lazy load the ArcGIS API if it has not already been loaded
function loadModules(modules, loadScriptOptions) {
    if (loadScriptOptions === void 0) { loadScriptOptions = {}; }
    if (!(0,_script__WEBPACK_IMPORTED_MODULE_0__.isLoaded)()) {
        // script is not yet loaded, is it in the process of loading?
        var script = (0,_script__WEBPACK_IMPORTED_MODULE_0__.getScript)();
        var src = script && script.getAttribute('src');
        if (!loadScriptOptions.url && src) {
            // script is still loading and user did not specify a URL
            // in this case we want to default to the URL that's being loaded
            // instead of defaulting to the latest 4.x URL
            loadScriptOptions.url = src;
        }
        // attempt to load the script then load the modules
        return (0,_script__WEBPACK_IMPORTED_MODULE_0__.loadScript)(loadScriptOptions).then(function () { return requireModules(modules); });
    }
    else {
        // script is already loaded, just load the modules
        return requireModules(modules);
    }
}


/***/ }),

/***/ "./node_modules/esri-loader/dist/esm/script.js":
/*!*****************************************************!*\
  !*** ./node_modules/esri-loader/dist/esm/script.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getScript: () => (/* binding */ getScript),
/* harmony export */   isLoaded: () => (/* binding */ isLoaded),
/* harmony export */   loadScript: () => (/* binding */ loadScript),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
/* harmony import */ var _utils_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/css */ "./node_modules/esri-loader/dist/esm/utils/css.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/index */ "./node_modules/esri-loader/dist/esm/utils/index.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/url */ "./node_modules/esri-loader/dist/esm/utils/url.js");
/* Copyright (c) 2022 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */



var defaultOptions = {};
function createScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.setAttribute('data-esri-loader', 'loading');
    return script;
}
// add a one-time load handler to script
// and optionally add a one time error handler as well
function handleScriptLoad(script, callback, errback) {
    var onScriptError;
    if (errback) {
        // set up an error handler as well
        onScriptError = handleScriptError(script, errback);
    }
    var onScriptLoad = function () {
        // pass the script to the callback
        callback(script);
        // remove this event listener
        script.removeEventListener('load', onScriptLoad, false);
        if (onScriptError) {
            // remove the error listener as well
            script.removeEventListener('error', onScriptError, false);
        }
    };
    script.addEventListener('load', onScriptLoad, false);
}
// add a one-time error handler to the script
function handleScriptError(script, callback) {
    var onScriptError = function (e) {
        // reject the promise and remove this event listener
        callback(e.error || new Error("There was an error attempting to load ".concat(script.src)));
        // remove this event listener
        script.removeEventListener('error', onScriptError, false);
    };
    script.addEventListener('error', onScriptError, false);
    return onScriptError;
}
// allow the user to configure default script options rather than passing options to `loadModules` each time
function setDefaultOptions(options) {
    if (options === void 0) { options = {}; }
    defaultOptions = options;
}
// get the script injected by this library
function getScript() {
    return document.querySelector('script[data-esri-loader]');
}
// has ArcGIS API been loaded on the page yet?
function isLoaded() {
    var globalRequire = window['require'];
    // .on() ensures that it's Dojo's AMD loader
    return globalRequire && globalRequire.on;
}
// load the ArcGIS API on the page
function loadScript(options) {
    if (options === void 0) { options = {}; }
    // we would have liked to use spread like { ...defaultOptions, ...options }
    // but TS would inject a polyfill that would require use to configure rollup w content: 'window'
    // if we have another occasion to use spread, let's do that and replace this for...in
    var opts = {};
    [defaultOptions, options].forEach(function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                opts[prop] = obj[prop];
            }
        }
    });
    // URL to load
    var version = opts.version;
    var url = opts.url || (0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.getCdnUrl)(version);
    return new _utils_index__WEBPACK_IMPORTED_MODULE_1__["default"].Promise(function (resolve, reject) {
        var script = getScript();
        if (script) {
            // the API is already loaded or in the process of loading...
            // NOTE: have to test against scr attribute value, not script.src
            // b/c the latter will return the full url for relative paths
            var src = script.getAttribute('src');
            if (src !== url) {
                // potentially trying to load a different version of the API
                reject(new Error("The ArcGIS API for JavaScript is already loaded (".concat(src, ").")));
            }
            else {
                if (isLoaded()) {
                    // the script has already successfully loaded
                    resolve(script);
                }
                else {
                    // wait for the script to load and then resolve
                    handleScriptLoad(script, resolve, reject);
                }
            }
        }
        else {
            if (isLoaded()) {
                // the API has been loaded by some other means
                // potentially trying to load a different version of the API
                reject(new Error("The ArcGIS API for JavaScript is already loaded."));
            }
            else {
                // this is the first time attempting to load the API
                var css = opts.css;
                if (css) {
                    var useVersion = css === true;
                    // load the css before loading the script
                    (0,_utils_css__WEBPACK_IMPORTED_MODULE_0__.loadCss)(useVersion ? version : css, opts.insertCssBefore);
                }
                // create a script object whose source points to the API
                script = createScript(url);
                // _currentUrl = url;
                // once the script is loaded...
                handleScriptLoad(script, function () {
                    // update the status of the script
                    script.setAttribute('data-esri-loader', 'loaded');
                    // return the script
                    resolve(script);
                }, reject);
                // load the script
                document.body.appendChild(script);
            }
        }
    });
}


/***/ }),

/***/ "./node_modules/esri-loader/dist/esm/utils/css.js":
/*!********************************************************!*\
  !*** ./node_modules/esri-loader/dist/esm/utils/css.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadCss: () => (/* binding */ loadCss)
/* harmony export */ });
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ "./node_modules/esri-loader/dist/esm/utils/url.js");
/* Copyright (c) 2022 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

function createStylesheetLink(href) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    return link;
}
function insertLink(link, before) {
    if (before) {
        // the link should be inserted before a specific node
        var beforeNode = document.querySelector(before);
        beforeNode.parentNode.insertBefore(link, beforeNode);
    }
    else {
        // append the link to then end of the head tag
        document.head.appendChild(link);
    }
}
// check if the css url has been injected or added manually
function getCss(url) {
    return document.querySelector("link[href*=\"".concat(url, "\"]"));
}
function getCssUrl(urlOrVersion) {
    return !urlOrVersion || (0,_url__WEBPACK_IMPORTED_MODULE_0__.parseVersion)(urlOrVersion)
        // if it's a valid version string return the CDN URL
        ? (0,_url__WEBPACK_IMPORTED_MODULE_0__.getCdnCssUrl)(urlOrVersion)
        // otherwise assume it's a URL and return that
        : urlOrVersion;
}
// lazy load the CSS needed for the ArcGIS API
function loadCss(urlOrVersion, before) {
    var url = getCssUrl(urlOrVersion);
    var link = getCss(url);
    if (!link) {
        // create & load the css link
        link = createStylesheetLink(url);
        insertLink(link, before);
    }
    return link;
}


/***/ }),

/***/ "./node_modules/esri-loader/dist/esm/utils/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/esri-loader/dist/esm/utils/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* Copyright (c) 2022 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
var isBrowser = typeof window !== 'undefined';
// allow consuming libraries to provide their own Promise implementations
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    Promise: isBrowser ? window['Promise'] : undefined
});


/***/ }),

/***/ "./node_modules/esri-loader/dist/esm/utils/url.js":
/*!********************************************************!*\
  !*** ./node_modules/esri-loader/dist/esm/utils/url.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCdnCssUrl: () => (/* binding */ getCdnCssUrl),
/* harmony export */   getCdnUrl: () => (/* binding */ getCdnUrl),
/* harmony export */   parseVersion: () => (/* binding */ parseVersion)
/* harmony export */ });
/* Copyright (c) 2022 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
var DEFAULT_VERSION = '4.25';
var NEXT = 'next';
function parseVersion(version) {
    if (version.toLowerCase() === NEXT) {
        return NEXT;
    }
    var match = version && version.match(/^(\d)\.(\d+)/);
    return match && {
        major: parseInt(match[1], 10),
        minor: parseInt(match[2], 10)
    };
}
/**
 * Get the CDN url for a given version
 *
 * @param version Ex: '4.25' or '3.42'. Defaults to the latest 4.x version.
 */
function getCdnUrl(version) {
    if (version === void 0) { version = DEFAULT_VERSION; }
    return "https://js.arcgis.com/".concat(version, "/");
}
/**
 * Get the CDN url for a the CSS for a given version and/or theme
 *
 * @param version Ex: '4.25', '3.42', or 'next'. Defaults to the latest 4.x version.
 */
function getCdnCssUrl(version) {
    if (version === void 0) { version = DEFAULT_VERSION; }
    var baseUrl = getCdnUrl(version);
    var parsedVersion = parseVersion(version);
    if (parsedVersion !== NEXT && parsedVersion.major === 3) {
        // NOTE: at 3.11 the CSS moved from the /js folder to the root
        var path = parsedVersion.minor <= 10 ? 'js/' : '';
        return "".concat(baseUrl).concat(path, "esri/css/esri.css");
    }
    else {
        // assume 4.x
        return "".concat(baseUrl, "esri/themes/light/main.css");
    }
}


/***/ }),

/***/ "./your-extensions/widgets/mask/src/runtime/assets/style.css":
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/mask/src/runtime/assets/style.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/mask/src/runtime/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./jimu-icons/svg/filled/suggested/help.svg":
/*!**************************************************!*\
  !*** ./jimu-icons/svg/filled/suggested/help.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M1 8c0-3.85 3.15-7 7-7s7 3.15 7 7-3.15 7-7 7-7-3.15-7-7m7.875 4.375a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0m-.063-2.656c.132-.571.415-.916.848-1.299s.701-.709.701-.709c.39-.472.701-1.102.701-1.811 0-1.732-1.402-3.15-3.117-3.15-1.357 0-2.52.928-2.946 2.157-.06.152-.06.299-.06.299a.65.65 0 0 0 .668.694l.1-.006c.4-.046.679-.275.829-.65.078-.164.108-.208.122-.229.281-.416.754-.69 1.287-.69.858 0 1.559.709 1.559 1.575 0 .472-.156.866-.468 1.103l-.935 1.023c-.505.447-.806 1.049-.901 1.722l-.005.064v.117a.75.75 0 0 0 .75.696l.092-.005c.393-.043.714-.358.743-.74z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/filled/suggested/help.tsx":
/*!**********************************************!*\
  !*** ./jimu-icons/filled/suggested/help.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpFilled: () => (/* binding */ HelpFilled)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_filled_suggested_help_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/filled/suggested/help.svg */ "./jimu-icons/svg/filled/suggested/help.svg");
/* harmony import */ var _svg_filled_suggested_help_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_filled_suggested_help_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const HelpFilled = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_filled_suggested_help_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./your-extensions/components/TitleWithTooltip.tsx":
/*!*********************************************************!*\
  !*** ./your-extensions/components/TitleWithTooltip.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_filled_suggested_help__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/filled/suggested/help */ "./jimu-icons/filled/suggested/help.tsx");



const styles = {
    container: {
        display: "flex",
        gap: "5px",
        justifyContent: "start",
        alignItems: "start",
        marginBottom: "7px",
    },
    tooltip: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
    },
};
const TitleWithTooltip = ({ title, description, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.container },
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h4", { style: { margin: "0" } }, title),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { placement: "top", role: "tooltip", enterDelay: 100, enterNextDelay: 0, enterTouchDelay: 700, leaveDelay: 0, leaveTouchDelay: 1500, offsetOptions: 4, title: description },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: styles.tooltip },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_icons_filled_suggested_help__WEBPACK_IMPORTED_MODULE_2__.HelpFilled, { size: 15, color: "#808080" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleWithTooltip);


/***/ }),

/***/ "./your-extensions/hooks/useLocale.ts":
/*!********************************************!*\
  !*** ./your-extensions/hooks/useLocale.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLocale: () => (/* binding */ useLocale)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function useLocale(translations) {
    // Detecta locale desde la URL (?locale=en) o fallback a "es"
    const searchParams = new URLSearchParams(window.location.search);
    const locale = searchParams.get("locale") || "es";
    const t = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return (key) => { var _a; return (_a = translations[locale][key]) !== null && _a !== void 0 ? _a : key; };
    }, [locale]);
    return { t, locale };
}


/***/ }),

/***/ "./your-extensions/widgets/mask/src/runtime/translations.ts":
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/mask/src/runtime/translations.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translations: () => (/* binding */ translations)
/* harmony export */ });
const translations = {
    es: {
        widgetLabel: "Índices espectrales",
        spectralRule: "Debes seleccionar una imagen para utilizar los indices espectrales",
        selectName: "Selecciona fórmula:",
        ndvi: "Índice normalizado de vegetación",
        savi: "Índice de vegetación ajustado al suelo",
        ndwi: "Índice de agua de diferencia normalizada",
        bai: "Índice de áreas quemadas",
        apply: "Aplicar"
    },
    en: {
        widgetLabel: "Spectral indices",
        spectralRule: "You must select an image to use the spectral indices",
        selectName: "Select formula:",
        ndvi: "Normalized vegetation index",
        savi: "Soil-adjusted vegetation index",
        ndwi: "Normalized difference water index",
        bai: "Burned Area Index",
        apply: "Apply"
    },
};


/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "react");

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var useSyncExternalStore = React.useSyncExternalStore;

// for CommonJS interop.

var useRef = React.useRef,
    useEffect = React.useEffect,
    useMemo = React.useMemo,
    useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
  // Use this to track the rendered snapshot.
  var instRef = useRef(null);
  var inst;

  if (instRef.current === null) {
    inst = {
      hasValue: false,
      value: null
    };
    instRef.current = inst;
  } else {
    inst = instRef.current;
  }

  var _useMemo = useMemo(function () {
    // Track the memoized state using closure variables that are local to this
    // memoized instance of a getSnapshot function. Intentionally not using a
    // useRef hook, because that state would be shared across all concurrent
    // copies of the hook/component.
    var hasMemo = false;
    var memoizedSnapshot;
    var memoizedSelection;

    var memoizedSelector = function (nextSnapshot) {
      if (!hasMemo) {
        // The first time the hook is called, there is no memoized result.
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;

        var _nextSelection = selector(nextSnapshot);

        if (isEqual !== undefined) {
          // Even if the selector has changed, the currently rendered selection
          // may be equal to the new selection. We should attempt to reuse the
          // current value if possible, to preserve downstream memoizations.
          if (inst.hasValue) {
            var currentSelection = inst.value;

            if (isEqual(currentSelection, _nextSelection)) {
              memoizedSelection = currentSelection;
              return currentSelection;
            }
          }
        }

        memoizedSelection = _nextSelection;
        return _nextSelection;
      } // We may be able to reuse the previous invocation's result.


      // We may be able to reuse the previous invocation's result.
      var prevSnapshot = memoizedSnapshot;
      var prevSelection = memoizedSelection;

      if (objectIs(prevSnapshot, nextSnapshot)) {
        // The snapshot is the same as last time. Reuse the previous selection.
        return prevSelection;
      } // The snapshot has changed, so we need to compute a new selection.


      // The snapshot has changed, so we need to compute a new selection.
      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.

      // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.
      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
        return prevSelection;
      }

      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    }; // Assigning this to a constant so that Flow knows it can't change.


    // Assigning this to a constant so that Flow knows it can't change.
    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

    var getSnapshotWithSelector = function () {
      return memoizedSelector(getSnapshot());
    };

    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
      return memoizedSelector(maybeGetServerSnapshot());
    };
    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
      getSelection = _useMemo[0],
      getServerSelection = _useMemo[1];

  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
  useEffect(function () {
    inst.hasValue = true;
    inst.value = value;
  }, [value]);
  useDebugValue(value);
  return value;
}

exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/with-selector.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-sync-external-store/with-selector.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-sync-external-store-with-selector.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js");
}


/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "./node_modules/react-redux/dist/react-redux.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/dist/react-redux.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* binding */ Provider_default),
/* harmony export */   ReactReduxContext: () => (/* binding */ ReactReduxContext),
/* harmony export */   batch: () => (/* binding */ batch),
/* harmony export */   connect: () => (/* binding */ connect_default),
/* harmony export */   createDispatchHook: () => (/* binding */ createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* binding */ createSelectorHook),
/* harmony export */   createStoreHook: () => (/* binding */ createStoreHook),
/* harmony export */   shallowEqual: () => (/* binding */ shallowEqual),
/* harmony export */   useDispatch: () => (/* binding */ useDispatch),
/* harmony export */   useSelector: () => (/* binding */ useSelector),
/* harmony export */   useStore: () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var use_sync_external_store_with_selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-sync-external-store/with-selector.js */ "./node_modules/use-sync-external-store/with-selector.js");
// src/index.ts



// src/utils/react.ts

var React = (
  // prettier-ignore
  // @ts-ignore
  "default" in react__WEBPACK_IMPORTED_MODULE_0__ ? react__WEBPACK_IMPORTED_MODULE_0__["default"] : react__WEBPACK_IMPORTED_MODULE_0__
);

// src/components/Context.ts
var ContextKey = Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function getContext() {
  if (!React.createContext)
    return {};
  const contextMap = gT[ContextKey] ?? (gT[ContextKey] = /* @__PURE__ */ new Map());
  let realContext = contextMap.get(React.createContext);
  if (!realContext) {
    realContext = React.createContext(
      null
    );
    if (true) {
      realContext.displayName = "ReactRedux";
    }
    contextMap.set(React.createContext, realContext);
  }
  return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();

// src/utils/useSyncExternalStore.ts
var notInitialized = () => {
  throw new Error("uSES not initialized!");
};

// src/hooks/useReduxContext.ts
function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext2() {
    const contextValue = React.useContext(context);
    if ( true && !contextValue) {
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    }
    return contextValue;
  };
}
var useReduxContext = /* @__PURE__ */ createReduxContextHook();

// src/hooks/useSelector.ts
var useSyncExternalStoreWithSelector = notInitialized;
var initializeUseSelector = (fn) => {
  useSyncExternalStoreWithSelector = fn;
};
var refEquality = (a, b) => a === b;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
  const useSelector2 = (selector, equalityFnOrOptions = {}) => {
    const { equalityFn = refEquality, devModeChecks = {} } = typeof equalityFnOrOptions === "function" ? { equalityFn: equalityFnOrOptions } : equalityFnOrOptions;
    if (true) {
      if (!selector) {
        throw new Error(`You must pass a selector to useSelector`);
      }
      if (typeof selector !== "function") {
        throw new Error(`You must pass a function as a selector to useSelector`);
      }
      if (typeof equalityFn !== "function") {
        throw new Error(
          `You must pass a function as an equality function to useSelector`
        );
      }
    }
    const {
      store,
      subscription,
      getServerState,
      stabilityCheck,
      identityFunctionCheck
    } = useReduxContext2();
    const firstRun = React.useRef(true);
    const wrappedSelector = React.useCallback(
      {
        [selector.name](state) {
          const selected = selector(state);
          if (true) {
            const {
              identityFunctionCheck: finalIdentityFunctionCheck,
              stabilityCheck: finalStabilityCheck
            } = {
              stabilityCheck,
              identityFunctionCheck,
              ...devModeChecks
            };
            if (finalStabilityCheck === "always" || finalStabilityCheck === "once" && firstRun.current) {
              const toCompare = selector(state);
              if (!equalityFn(selected, toCompare)) {
                let stack = void 0;
                try {
                  throw new Error();
                } catch (e) {
                  ;
                  ({ stack } = e);
                }
                console.warn(
                  "Selector " + (selector.name || "unknown") + " returned a different result when called with the same parameters. This can lead to unnecessary rerenders.\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization",
                  {
                    state,
                    selected,
                    selected2: toCompare,
                    stack
                  }
                );
              }
            }
            if (finalIdentityFunctionCheck === "always" || finalIdentityFunctionCheck === "once" && firstRun.current) {
              if (selected === state) {
                let stack = void 0;
                try {
                  throw new Error();
                } catch (e) {
                  ;
                  ({ stack } = e);
                }
                console.warn(
                  "Selector " + (selector.name || "unknown") + " returned the root state when called. This can lead to unnecessary rerenders.\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.",
                  { stack }
                );
              }
            }
            if (firstRun.current)
              firstRun.current = false;
          }
          return selected;
        }
      }[selector.name],
      [selector, stabilityCheck, devModeChecks.stabilityCheck]
    );
    const selectedState = useSyncExternalStoreWithSelector(
      subscription.addNestedSub,
      store.getState,
      getServerState || store.getState,
      wrappedSelector,
      equalityFn
    );
    React.useDebugValue(selectedState);
    return selectedState;
  };
  Object.assign(useSelector2, {
    withTypes: () => useSelector2
  });
  return useSelector2;
}
var useSelector = /* @__PURE__ */ createSelectorHook();

// src/utils/react-is.ts
var REACT_ELEMENT_TYPE = Symbol.for("react.element");
var REACT_PORTAL_TYPE = Symbol.for("react.portal");
var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
var REACT_CONTEXT_TYPE = Symbol.for("react.context");
var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
var REACT_MEMO_TYPE = Symbol.for("react.memo");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Memo = REACT_MEMO_TYPE;
function isValidElementType(type) {
  if (typeof type === "string" || typeof type === "function") {
    return true;
  }
  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE) {
    return true;
  }
  if (typeof type === "object" && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_CLIENT_REFERENCE || type.getModuleId !== void 0) {
      return true;
    }
  }
  return false;
}
function typeOf(object) {
  if (typeof object === "object" && object !== null) {
    const $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE: {
        const type = object.type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;
          default: {
            const $$typeofType = type && type.$$typeof;
            switch ($$typeofType) {
              case REACT_SERVER_CONTEXT_TYPE:
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
          }
        }
      }
      case REACT_PORTAL_TYPE: {
        return $$typeof;
      }
    }
  }
  return void 0;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}

// src/utils/warning.ts
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}

// src/connect/verifySubselectors.ts
function verify(selector, methodName) {
  if (!selector) {
    throw new Error(`Unexpected value for ${methodName} in connect.`);
  } else if (methodName === "mapStateToProps" || methodName === "mapDispatchToProps") {
    if (!Object.prototype.hasOwnProperty.call(selector, "dependsOnOwnProps")) {
      warning(
        `The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`
      );
    }
  }
}
function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
  verify(mapStateToProps, "mapStateToProps");
  verify(mapDispatchToProps, "mapDispatchToProps");
  verify(mergeProps, "mergeProps");
}

// src/connect/selectorFactory.ts
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
  areStatesEqual,
  areOwnPropsEqual,
  areStatePropsEqual
}) {
  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;
  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps)
      stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps);
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged)
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    const stateChanged = !areStatesEqual(
      nextState,
      state,
      nextOwnProps,
      ownProps
    );
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged)
      return handleNewPropsAndNewState();
    if (propsChanged)
      return handleNewProps();
    if (stateChanged)
      return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch, {
  initMapStateToProps,
  initMapDispatchToProps,
  initMergeProps,
  ...options
}) {
  const mapStateToProps = initMapStateToProps(dispatch, options);
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  const mergeProps = initMergeProps(dispatch, options);
  if (true) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps);
  }
  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

// src/utils/bindActionCreators.ts
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  }
  return boundActionCreators;
}

// src/utils/isPlainObject.ts
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  const proto = Object.getPrototypeOf(obj);
  if (proto === null)
    return true;
  let baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}

// src/utils/verifyPlainObject.ts
function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject(value)) {
    warning(
      `${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`
    );
  }
}

// src/connect/wrapMapToProps.ts
function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch) {
    const constant = getConstant(dispatch);
    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, { displayName }) {
    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, void 0);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      let props = proxy(stateOrDispatch, ownProps);
      if (typeof props === "function") {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }
      if (true)
        verifyPlainObject(props, displayName, methodName);
      return props;
    };
    return proxy;
  };
}

// src/connect/invalidArgFactory.ts
function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error(
      `Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`
    );
  };
}

// src/connect/mapDispatchToProps.ts
function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === "object" ? wrapMapToPropsConstant(
    (dispatch) => (
      // @ts-ignore
      bindActionCreators(mapDispatchToProps, dispatch)
    )
  ) : !mapDispatchToProps ? wrapMapToPropsConstant((dispatch) => ({
    dispatch
  })) : typeof mapDispatchToProps === "function" ? (
    // @ts-ignore
    wrapMapToPropsFunc(mapDispatchToProps, "mapDispatchToProps")
  ) : createInvalidArgFactory(mapDispatchToProps, "mapDispatchToProps");
}

// src/connect/mapStateToProps.ts
function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(() => ({})) : typeof mapStateToProps === "function" ? (
    // @ts-ignore
    wrapMapToPropsFunc(mapStateToProps, "mapStateToProps")
  ) : createInvalidArgFactory(mapStateToProps, "mapStateToProps");
}

// src/connect/mergeProps.ts
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return { ...ownProps, ...stateProps, ...dispatchProps };
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, { displayName, areMergedPropsEqual }) {
    let hasRunOnce = false;
    let mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps))
          mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true)
          verifyPlainObject(mergedProps, displayName, "mergeProps");
      }
      return mergedProps;
    };
  };
}
function mergePropsFactory(mergeProps) {
  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : createInvalidArgFactory(mergeProps, "mergeProps");
}

// src/utils/batch.ts
function defaultNoopBatch(callback) {
  callback();
}

// src/utils/Subscription.ts
function createListenerCollection() {
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      defaultNoopBatch(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      const listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      const listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  let subscriptionsAmount = 0;
  let selfSubscribed = false;
  function addNestedSub(listener) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener);
    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return selfSubscribed;
  }
  function trySubscribe() {
    subscriptionsAmount++;
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    subscriptionsAmount--;
    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }
  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}

// src/utils/useIsomorphicLayoutEffect.ts
var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isReactNative = typeof navigator !== "undefined" && navigator.product === "ReactNative";
var useIsomorphicLayoutEffect = canUseDOM || isReactNative ? React.useLayoutEffect : React.useEffect;

// src/utils/shallowEqual.ts
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB))
    return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return false;
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}

// src/utils/hoistStatics.ts
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {
  [ForwardRef]: FORWARD_REF_STATICS,
  [Memo]: MEMO_STATICS
};
function getStatics(component) {
  if (isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      const inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent);
      }
    }
    let keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    const targetStatics = getStatics(targetComponent);
    const sourceStatics = getStatics(sourceComponent);
    for (let i = 0; i < keys.length; ++i) {
      const key = keys[i];
      if (!KNOWN_STATICS[key] && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        const descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {
        }
      }
    }
  }
  return targetComponent;
}

// src/components/connect.tsx
var useSyncExternalStore = notInitialized;
var initializeConnect = (fn) => {
  useSyncExternalStore = fn;
};
var NO_SUBSCRIPTION_ARRAY = [null, null];
var stringifyComponent = (Comp) => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(() => effectFunc(...effectArgs), dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false;
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, additionalSubscribeListener) {
  if (!shouldHandleStateChanges)
    return () => {
    };
  let didUnsubscribe = false;
  let lastThrownError = null;
  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      return;
    }
    const latestStoreState = store.getState();
    let newChildProps, error;
    try {
      newChildProps = childPropsSelector(
        latestStoreState,
        lastWrapperProps.current
      );
    } catch (e) {
      error = e;
      lastThrownError = e;
    }
    if (!error) {
      lastThrownError = null;
    }
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true;
      additionalSubscribeListener();
    }
  };
  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe();
  checkForUpdates();
  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;
    if (lastThrownError) {
      throw lastThrownError;
    }
  };
  return unsubscribeWrapper;
}
function strictEqual(a, b) {
  return a === b;
}
var hasWarnedAboutDeprecatedPureOption = false;
function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = shallowEqual,
  areStatePropsEqual = shallowEqual,
  areMergedPropsEqual = shallowEqual,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = ReactReduxContext
} = {}) {
  if (true) {
    if (pure !== void 0 && !hasWarnedAboutDeprecatedPureOption) {
      hasWarnedAboutDeprecatedPureOption = true;
      warning(
        'The `pure` option has been removed. `connect` is now always a "pure/memoized" component'
      );
    }
  }
  const Context = context;
  const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
  const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
  const initMergeProps = mergePropsFactory(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);
  const wrapWithConnect = (WrappedComponent) => {
    if (true) {
      const isValid = /* @__PURE__ */ isValidElementType(WrappedComponent);
      if (!isValid)
        throw new Error(
          `You must pass a component to the function returned by connect. Instead received ${stringifyComponent(
            WrappedComponent
          )}`
        );
    }
    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };
    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = React.useMemo(() => {
        const { reactReduxForwardedRef: reactReduxForwardedRef2, ...wrapperProps2 } = props;
        return [props.context, reactReduxForwardedRef2, wrapperProps2];
      }, [props]);
      const ContextToUse = React.useMemo(() => {
        let ResultContext = Context;
        if (propsContext?.Consumer) {
          if (true) {
            const isValid = /* @__PURE__ */ isContextConsumer(
              // @ts-ignore
              /* @__PURE__ */ React.createElement(propsContext.Consumer, null)
            );
            if (!isValid) {
              throw new Error(
                "You must pass a valid React context consumer as `props.context`"
              );
            }
            ResultContext = propsContext;
          }
        }
        return ResultContext;
      }, [propsContext, Context]);
      const contextValue = React.useContext(ContextToUse);
      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error(
          `Could not find "store" in the context of "${displayName}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${displayName} in connect options.`
        );
      }
      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = React.useMemo(() => {
        return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = React.useMemo(() => {
        if (!shouldHandleStateChanges)
          return NO_SUBSCRIPTION_ARRAY;
        const subscription2 = createSubscription(
          store,
          didStoreComeFromProps ? void 0 : contextValue.subscription
        );
        const notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
        return [subscription2, notifyNestedSubs2];
      }, [store, didStoreComeFromProps, contextValue]);
      const overriddenContextValue = React.useMemo(() => {
        if (didStoreComeFromProps) {
          return contextValue;
        }
        return {
          ...contextValue,
          subscription
        };
      }, [didStoreComeFromProps, contextValue, subscription]);
      const lastChildProps = React.useRef(void 0);
      const lastWrapperProps = React.useRef(wrapperProps);
      const childPropsFromStoreUpdate = React.useRef(void 0);
      const renderIsScheduled = React.useRef(false);
      const isMounted = React.useRef(false);
      const latestSubscriptionCallbackError = React.useRef(
        void 0
      );
      useIsomorphicLayoutEffect(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = React.useMemo(() => {
        const selector = () => {
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          }
          return childPropsSelector(store.getState(), wrapperProps);
        };
        return selector;
      }, [store, wrapperProps]);
      const subscribeForReact = React.useMemo(() => {
        const subscribe = (reactListener) => {
          if (!subscription) {
            return () => {
            };
          }
          return subscribeUpdates(
            shouldHandleStateChanges,
            store,
            subscription,
            // @ts-ignore
            childPropsSelector,
            lastWrapperProps,
            lastChildProps,
            renderIsScheduled,
            isMounted,
            childPropsFromStoreUpdate,
            notifyNestedSubs,
            reactListener
          );
        };
        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
        lastWrapperProps,
        lastChildProps,
        renderIsScheduled,
        wrapperProps,
        childPropsFromStoreUpdate,
        notifyNestedSubs
      ]);
      let actualChildProps;
      try {
        actualChildProps = useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          subscribeForReact,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          actualChildPropsSelector,
          getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector
        );
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `
The error may be correlated with this previous error:
${latestSubscriptionCallbackError.current.stack}

`;
        }
        throw err;
      }
      useIsomorphicLayoutEffect(() => {
        latestSubscriptionCallbackError.current = void 0;
        childPropsFromStoreUpdate.current = void 0;
        lastChildProps.current = actualChildProps;
      });
      const renderedWrappedComponent = React.useMemo(() => {
        return (
          // @ts-ignore
          /* @__PURE__ */ React.createElement(
            WrappedComponent,
            {
              ...actualChildProps,
              ref: reactReduxForwardedRef
            }
          )
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]);
      const renderedChild = React.useMemo(() => {
        if (shouldHandleStateChanges) {
          return /* @__PURE__ */ React.createElement(ContextToUse.Provider, { value: overriddenContextValue }, renderedWrappedComponent);
        }
        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }
    const _Connect = React.memo(ConnectFunction);
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;
    if (forwardRef) {
      const _forwarded = React.forwardRef(
        function forwardConnectRef(props, ref) {
          return /* @__PURE__ */ React.createElement(Connect, { ...props, reactReduxForwardedRef: ref });
        }
      );
      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return /* @__PURE__ */ hoistNonReactStatics(forwarded, WrappedComponent);
    }
    return /* @__PURE__ */ hoistNonReactStatics(Connect, WrappedComponent);
  };
  return wrapWithConnect;
}
var connect_default = connect;

// src/components/Provider.tsx
function Provider({
  store,
  context,
  children,
  serverState,
  stabilityCheck = "once",
  identityFunctionCheck = "once"
}) {
  const contextValue = React.useMemo(() => {
    const subscription = createSubscription(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : void 0,
      stabilityCheck,
      identityFunctionCheck
    };
  }, [store, serverState, stabilityCheck, identityFunctionCheck]);
  const previousState = React.useMemo(() => store.getState(), [store]);
  useIsomorphicLayoutEffect(() => {
    const { subscription } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ React.createElement(Context.Provider, { value: contextValue }, children);
}
var Provider_default = Provider;

// src/hooks/useStore.ts
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : (
    // @ts-ignore
    createReduxContextHook(context)
  );
  const useStore2 = () => {
    const { store } = useReduxContext2();
    return store;
  };
  Object.assign(useStore2, {
    withTypes: () => useStore2
  });
  return useStore2;
}
var useStore = /* @__PURE__ */ createStoreHook();

// src/hooks/useDispatch.ts
function createDispatchHook(context = ReactReduxContext) {
  const useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
  const useDispatch2 = () => {
    const store = useStore2();
    return store.dispatch;
  };
  Object.assign(useDispatch2, {
    withTypes: () => useDispatch2
  });
  return useDispatch2;
}
var useDispatch = /* @__PURE__ */ createDispatchHook();

// src/exports.ts
var batch = defaultNoopBatch;

// src/index.ts
initializeUseSelector(use_sync_external_store_with_selector_js__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStoreWithSelector);
initializeConnect(react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore);

//# sourceMappingURL=react-redux.mjs.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************************************************!*\
  !*** ./your-extensions/widgets/mask/src/runtime/widget.tsx ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/esm/esri-loader.js");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/style.css */ "./your-extensions/widgets/mask/src/runtime/assets/style.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useLocale */ "./your-extensions/hooks/useLocale.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translations */ "./your-extensions/widgets/mask/src/runtime/translations.ts");
/* harmony import */ var _components_TitleWithTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/TitleWithTooltip */ "./your-extensions/components/TitleWithTooltip.tsx");









const sensors = [
    {
        id: "worldview",
        title: "Worldview2",
        bands: [
            { name: "Coastal(1)", value: "1" },
            { name: "Blue(2)", value: "2" },
            { name: "Green(3)", value: "3" },
            { name: "Yellow(4)", value: "4" },
            { name: "Red(5)", value: "5" },
            { name: "Red Edge(6)", value: "6" },
            { name: "NIR -1(7)", value: "7" },
            { name: "NIR -2(8)", value: "8" },
        ],
    },
    {
        id: "fasat",
        title: "OWD_FasatC_MS_v2_20250312",
        bands: [
            { name: "Red(1)", value: "1" },
            { name: "Green(2)", value: "2" },
            { name: "Blue(3)", value: "3" },
            { name: "NIR(4)", value: "4" },
        ],
    },
    {
        id: "default",
        title: "Default",
        bands: [
            { name: "Blue(1)", value: "1" },
            { name: "Green(2)", value: "2" },
            { name: "Red(3)", value: "3" },
            { name: "NIR(4)", value: "4" },
        ],
    },
];
const Widget = (props) => {
    const { t } = (0,_hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__.useLocale)(_translations__WEBPACK_IMPORTED_MODULE_6__.translations);
    const selectedImageries = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedImages; });
    const selectedSensor = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedSensor; });
    const geoprocess = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.geoprocess; });
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [inputMinRange, setInputMinRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [inputMaxRange, setInputMaxRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0.5);
    const [inputTypeAreaMax, setInputTypeAreaMax] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [inputTypeAreaMin, setInputTypeAreaMin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1);
    const [selectedFormula, setSelectedFormula] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("(b4 - b1) / (b4 + b1)");
    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("NDVI");
    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([0, 255, 0, 255]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [availableSensors, setAvailableSensors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sensors);
    //refs
    const imageryLayerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const esriModulesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const activeViewChangeHandler = (jmv) => {
        if (jmv)
            setJimuMapView(jmv);
    };
    const handleRangeChange = (minValue, maxValue) => {
        setInputMinRange(minValue);
        setInputMaxRange(maxValue);
        setTimeout(() => {
            crearImageryLayer();
        }, 500);
    };
    const handleFormulaChange = (event) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
        removeLayer();
        const formula = event.target.value;
        setSelectedIndex(formula);
        switch (formula) {
            case "NDVI":
                //setIndiceType("NDVI");
                if (selectedSensor) {
                    const sensor = availableSensors.find((s) => s.title === selectedSensor.title || s.title === "Default");
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "Worldview2") {
                        setSelectedFormula(`(B${(_a = sensor.bands[6]) === null || _a === void 0 ? void 0 : _a.value} - B${(_b = sensor.bands[4]) === null || _b === void 0 ? void 0 : _b.value}) / (B${(_c = sensor.bands[6]) === null || _c === void 0 ? void 0 : _c.value} + B${(_d = sensor.bands[4]) === null || _d === void 0 ? void 0 : _d.value})`);
                    }
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "OWD_FasatC_MS_v2_20250312") {
                        setSelectedFormula(`(B${(_e = sensor.bands[3]) === null || _e === void 0 ? void 0 : _e.value} - B${(_f = sensor.bands[0]) === null || _f === void 0 ? void 0 : _f.value}) / (B${(_g = sensor.bands[3]) === null || _g === void 0 ? void 0 : _g.value} + B${(_h = sensor.bands[0]) === null || _h === void 0 ? void 0 : _h.value})`);
                    }
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "Default") {
                        setSelectedFormula(`(B${(_j = sensor.bands[3]) === null || _j === void 0 ? void 0 : _j.value} - B${(_k = sensor.bands[2]) === null || _k === void 0 ? void 0 : _k.value}) / (B${(_l = sensor.bands[3]) === null || _l === void 0 ? void 0 : _l.value} + B${(_m = sensor.bands[2]) === null || _m === void 0 ? void 0 : _m.value})`);
                    }
                }
                setColor([0, 255, 0, 255]);
                setInputTypeAreaMax(1);
                setInputTypeAreaMin(-1);
                setInputMinRange(0.3);
                setInputMaxRange(0.7);
                break;
            case "SAVI":
                if (selectedSensor) {
                    const sensor = availableSensors.find((s) => s.title === selectedSensor.title || s.title === "Default");
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "Worldview2") {
                        setSelectedFormula(`((B${(_o = sensor.bands[6]) === null || _o === void 0 ? void 0 : _o.value} - B${(_p = sensor.bands[4]) === null || _p === void 0 ? void 0 : _p.value}) / (B${(_q = sensor.bands[6]) === null || _q === void 0 ? void 0 : _q.value} + B${(_r = sensor.bands[4]) === null || _r === void 0 ? void 0 : _r.value} + 0,5)) * (1 + 0,5)`);
                    }
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "OWD_FasatC_MS_v2_20250312") {
                        setSelectedFormula(`((B${(_s = sensor.bands[3]) === null || _s === void 0 ? void 0 : _s.value} - B${(_t = sensor.bands[0]) === null || _t === void 0 ? void 0 : _t.value}) / (B${(_u = sensor.bands[3]) === null || _u === void 0 ? void 0 : _u.value} + B${(_v = sensor.bands[0]) === null || _v === void 0 ? void 0 : _v.value} + 0,5)) * (1 + 0,5)`);
                    }
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "Default") {
                        setSelectedFormula(`((B${(_w = sensor.bands[3]) === null || _w === void 0 ? void 0 : _w.value} - B${(_x = sensor.bands[2]) === null || _x === void 0 ? void 0 : _x.value}) / (B${(_y = sensor.bands[3]) === null || _y === void 0 ? void 0 : _y.value} + B${(_z = sensor.bands[2]) === null || _z === void 0 ? void 0 : _z.value} + 0,5)) * (1 + 0,5)`);
                    }
                }
                setColor([255, 255, 0, 255]);
                setInputTypeAreaMax(1.5);
                setInputTypeAreaMin(-1.5);
                setInputMinRange(0.3);
                setInputMaxRange(0.7);
                break;
            case "NDWI":
                if (selectedSensor) {
                    const sensor = availableSensors.find((s) => s.title === selectedSensor.title || s.title === "Default");
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "Worldview2") {
                        setSelectedFormula(`(B${(_0 = sensor.bands[2]) === null || _0 === void 0 ? void 0 : _0.value} - B${(_1 = sensor.bands[6]) === null || _1 === void 0 ? void 0 : _1.value}) / (B${(_2 = sensor.bands[2]) === null || _2 === void 0 ? void 0 : _2.value} + B${(_3 = sensor.bands[6]) === null || _3 === void 0 ? void 0 : _3.value})`);
                    }
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "OWD_FasatC_MS_v2_20250312") {
                        setSelectedFormula(`(B${(_4 = sensor.bands[1]) === null || _4 === void 0 ? void 0 : _4.value} - B${(_5 = sensor.bands[3]) === null || _5 === void 0 ? void 0 : _5.value}) / (B${(_6 = sensor.bands[1]) === null || _6 === void 0 ? void 0 : _6.value} + B${(_7 = sensor.bands[3]) === null || _7 === void 0 ? void 0 : _7.value})`);
                    }
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "Default") {
                        setSelectedFormula(`(B${(_8 = sensor.bands[1]) === null || _8 === void 0 ? void 0 : _8.value} - B${(_9 = sensor.bands[3]) === null || _9 === void 0 ? void 0 : _9.value}) / (B${(_10 = sensor.bands[1]) === null || _10 === void 0 ? void 0 : _10.value} + B${(_11 = sensor.bands[3]) === null || _11 === void 0 ? void 0 : _11.value})`);
                    }
                }
                setColor([0, 0, 255, 255]);
                setInputTypeAreaMax(1);
                setInputTypeAreaMin(-1);
                setInputMinRange(0.3);
                setInputMaxRange(0.7);
                break;
            default:
                break;
        }
    };
    const crearImageryLayer = () => {
        var _a;
        setLoading(true);
        //Siempre y cuando el array selectedImageries tenga al menos 2 elementos
        if (selectedImageries.length > 0) {
            //Se asignan las imagenes a las variables
            let img1Data = (_a = selectedImageries[0]) === null || _a === void 0 ? void 0 : _a.OBJECTID;
            // Validar que al menos una selección sea válida
            if (img1Data !== null) {
                //Si exite el mapa y existan los modulos de Esri
                if (jimuMapView && esriModulesRef.current) {
                    //Se utilizan los modulos de Esri
                    const { ImageryLayer, RasterFunction, RasterStretchRenderer } = esriModulesRef.current;
                    //Se busca la capa
                    const imageryLayer = jimuMapView.view.map.findLayerById(selectedSensor === null || selectedSensor === void 0 ? void 0 : selectedSensor.id);
                    console.log({ imageryLayer });
                    //Se asigna la url de la capa
                    const layerUrl = imageryLayer.url;
                    //Se crea la expresion de la consulta
                    const definitionExpression = `OBJECTID IN (${img1Data})`;
                    //Se crea la funcion Raster de la consulta
                    const bandArithmeticFunction = new RasterFunction({
                        functionName: "BandArithmetic",
                        outputPixelType: "F32",
                        functionArguments: {
                            Method: 0,
                            BandIndexes: selectedFormula,
                        },
                    });
                    const remapFunction = new RasterFunction({
                        functionName: "Remap",
                        outputPixelType: "F32",
                        functionArguments: {
                            Raster: bandArithmeticFunction,
                            InputRanges: [inputMinRange, inputMaxRange],
                            OutputValues: [2],
                            NoDataRanges: [
                                -Infinity,
                                inputTypeAreaMin,
                                inputTypeAreaMax,
                                Infinity,
                            ],
                            AllowUnmatched: false,
                        },
                    });
                    const stretchRenderer = new RasterStretchRenderer({
                        stretchType: "min-max",
                        statistics: [
                            {
                                min: inputTypeAreaMin,
                                max: inputTypeAreaMax,
                                avg: (inputTypeAreaMin + inputTypeAreaMax) / 2,
                                stddev: 0.1,
                            },
                        ],
                        colorRamp: {
                            type: "algorithmic",
                            fromColor: [255, 255, 255, 0],
                            toColor: color,
                        },
                    });
                    //Se crea la nueva capa filtrada por id
                    const newImageryLayer = new ImageryLayer({
                        url: layerUrl,
                        id: "Índices espectrales",
                        visible: true,
                        title: t("widgetLabel"),
                        definitionExpression, // Filtro por OBJECTID
                    });
                    // Eliminar la capa existente si ya está cargada
                    const existingLayer = jimuMapView.view.map.findLayerById("Índices espectrales");
                    if (existingLayer) {
                        jimuMapView.view.map.remove(existingLayer);
                    }
                    // Agregar la nueva capa con los filtros y renderizadores
                    jimuMapView.view.map.add(newImageryLayer);
                    // Asignar funciones y renderizador
                    newImageryLayer.rasterFunction = remapFunction;
                    newImageryLayer.renderer = stretchRenderer;
                    imageryLayerRef.current = newImageryLayer;
                    // Validar cuando la capa esté lista
                    newImageryLayer.when(() => {
                        setLoading(false);
                    }, (err) => {
                        console.error("Error cargando el layer:", err);
                        setLoading(false);
                    });
                }
            }
        }
    };
    //   setLoading(true);
    //   try {
    //     const img1Data = selectedImageries[0].OBJECTID;
    //     const proceso = 5;
    //     const entrada = img1Data;
    //     var urlConsulta = `http://127.0.0.1:5000/proxy?proceso=${proceso}&Entrada=${entrada}&url=${selectedSensor.url}`;
    //     const response = await fetch(urlConsulta, {
    //       method: "GET",
    //     });
    //     const data = await response.json();
    //     const responseData = await fetch(`http://127.0.0.1:5000${data.urlJson}`, {
    //       method: "GET",
    //     });
    //     const dataValidada = await responseData.json();
    //     //setIndiceType("BAI");
    //     if (selectedSensor) {
    //       const sensor = sensors.find((s) => s.title === selectedSensor.title);
    //       if (sensor?.title === "Worldview2") {
    //         setSelectedFormula(
    //           `1 / (((0,1 - B${sensor.bands[4]?.value})^2) + ((0,06 - B${sensor.bands[6]?.value})^2))`
    //         );
    //       }
    //       if (sensor?.title === "OWD_FasatC_MS_v2_20250312") {
    //         setSelectedFormula(
    //           `1 / (((0,1 - B${sensor.bands[0]?.value})^2) + ((0,06 - B${sensor.bands[3]?.value})^2))`
    //         );
    //       }
    //       if (sensor?.title === "Default") {
    //         setSelectedFormula(
    //           `1 / (((0,1 - B${sensor.bands[2]?.value})^2) + ((0,06 - B${sensor.bands[3]?.value})^2))`
    //         );
    //       }
    //     }
    //     console.log(dataValidada);
    //     setColor([255, 0, 0, 255]);
    //     setInputTypeAreaMin(parseFloat(dataValidada.etiquetas.etiqueta_1));
    //     setInputMinRange(parseFloat(dataValidada.etiquetas.etiqueta_3));
    //     setInputMaxRange(parseFloat(dataValidada.etiquetas.etiqueta_4));
    //     setInputTypeAreaMax(parseFloat(dataValidada.etiquetas.etiqueta_5));
    //   } catch (error) {
    //     console.error("Error al enviar la solicitud:", error);
    //     setLoading(false);
    //   }
    // };
    //Se crea una funcion para cargar los modulos de Esri
    const loadEsriModules = () => {
        if (jimuMapView) {
            (0,esri_loader__WEBPACK_IMPORTED_MODULE_2__.loadModules)([
                "esri/layers/support/RasterFunction",
                "esri/renderers/RasterStretchRenderer",
                "esri/layers/ImageryLayer",
                "esri/rest/query",
                "esri/widgets/Histogram",
                "esri/request",
            ])
                .then(([RasterFunction, RasterStretchRenderer, ImageryLayer, query, Histogram, esriRequest,]) => {
                esriModulesRef.current = {
                    RasterFunction,
                    RasterStretchRenderer,
                    ImageryLayer,
                    query,
                    Histogram,
                    esriRequest,
                };
            })
                .catch((err) => {
                console.error("Error loading ESRI modules: ", err);
            });
        }
    };
    const removeLayer = () => {
        if (selectedSensor) {
            const existingLayer = jimuMapView.view.map.findLayerById("Índices espectrales");
            if (existingLayer) {
                jimuMapView.view.map.remove(existingLayer);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        removeLayer();
        if (selectedSensor) {
            const sensor = availableSensors.find((s) => s.title === selectedSensor.title || s.title === "Default");
            if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "Worldview2") {
                setSelectedFormula(`(B${(_a = sensor.bands[6]) === null || _a === void 0 ? void 0 : _a.value} - B${(_b = sensor.bands[4]) === null || _b === void 0 ? void 0 : _b.value}) / (B${(_c = sensor.bands[6]) === null || _c === void 0 ? void 0 : _c.value} + B${(_d = sensor.bands[4]) === null || _d === void 0 ? void 0 : _d.value})`);
            }
            if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "OWD_FasatC_MS_v2_20250312") {
                setSelectedFormula(`(B${(_e = sensor.bands[3]) === null || _e === void 0 ? void 0 : _e.value} - B${(_f = sensor.bands[0]) === null || _f === void 0 ? void 0 : _f.value}) / (B${(_g = sensor.bands[3]) === null || _g === void 0 ? void 0 : _g.value} + B${(_h = sensor.bands[0]) === null || _h === void 0 ? void 0 : _h.value})`);
            }
            if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "Default") {
                setSelectedFormula(`(B${(_j = sensor.bands[3]) === null || _j === void 0 ? void 0 : _j.value} - B${(_k = sensor.bands[2]) === null || _k === void 0 ? void 0 : _k.value}) / (B${(_l = sensor.bands[3]) === null || _l === void 0 ? void 0 : _l.value} + B${(_m = sensor.bands[2]) === null || _m === void 0 ? void 0 : _m.value})`);
            }
        }
        setColor([0, 255, 0, 255]);
        setInputTypeAreaMax(1);
        setInputTypeAreaMin(-1);
        setInputMinRange(0.3);
        setInputMaxRange(0.7);
    }, [selectedSensor, geoprocess]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        loadEsriModules();
    }, [jimuMapView]);
    //Ejecuta la creacion del layer de las imagenes, y detecta cuando se modifica el input range que se encarga de calcular nuevamente el rango
    //Tambien cuando cambia el array de imagenes seleccionadas
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (selectedImageries.length > 0) {
            if (selectedSensor) {
                const sensor = availableSensors.find((s) => s.title === selectedSensor.title || s.title === "Default");
                if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "Worldview2") {
                    setSelectedFormula(`(B${(_a = sensor.bands[6]) === null || _a === void 0 ? void 0 : _a.value} - B${(_b = sensor.bands[4]) === null || _b === void 0 ? void 0 : _b.value}) / (B${(_c = sensor.bands[6]) === null || _c === void 0 ? void 0 : _c.value} + B${(_d = sensor.bands[4]) === null || _d === void 0 ? void 0 : _d.value})`);
                }
                if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "OWD_FasatC_MS_v2_20250312") {
                    setSelectedFormula(`(B${(_e = sensor.bands[3]) === null || _e === void 0 ? void 0 : _e.value} - B${(_f = sensor.bands[0]) === null || _f === void 0 ? void 0 : _f.value}) / (B${(_g = sensor.bands[3]) === null || _g === void 0 ? void 0 : _g.value} + B${(_h = sensor.bands[0]) === null || _h === void 0 ? void 0 : _h.value})`);
                }
                if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "Default") {
                    setSelectedFormula(`(B${(_j = sensor.bands[3]) === null || _j === void 0 ? void 0 : _j.value} - B${(_k = sensor.bands[2]) === null || _k === void 0 ? void 0 : _k.value}) / (B${(_l = sensor.bands[3]) === null || _l === void 0 ? void 0 : _l.value} + B${(_m = sensor.bands[2]) === null || _m === void 0 ? void 0 : _m.value})`);
                }
            }
            setColor([0, 255, 0, 255]);
            setInputTypeAreaMax(1);
            setInputTypeAreaMin(-1);
            setInputMinRange(0.3);
            setInputMaxRange(0.7);
            setSelectedIndex("NDVI");
        }
        if (selectedImageries.length === 0 && jimuMapView) {
            const existingLayer = jimuMapView.view.map.findLayerById("Índices espectrales");
            if (existingLayer) {
                jimuMapView.view.map.remove(existingLayer);
            }
        }
    }, [selectedImageries, selectedSensor, geoprocess]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "jimu-widget widgetMask" },
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: activeViewChangeHandler })),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "homeMask" },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_TitleWithTooltip__WEBPACK_IMPORTED_MODULE_7__["default"], { title: t("widgetLabel"), description: t("widgetDescription") }),
            selectedImageries.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "spectral-index-description" },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, t("spectralRule")))) : (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { id: "activeMask2" },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "contentSliceMask-Base" },
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "selectClassIndice" },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { htmlFor: "formulaSelect" }, t("selectName")),
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Select, { id: "formulaSelect", onChange: handleFormulaChange, size: "sm", value: selectedIndex },
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", { value: "NDVI" },
                                t("ndvi"),
                                " - NDVI"),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", { value: "SAVI" },
                                t("savi"),
                                " - SAVI"),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", { value: "NDWI" },
                                t("ndwi"),
                                " - NDWI"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "contentSliceMask" },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.MultiRangeSlider, { "aria-label": "Multi range slider", maxValue: inputMaxRange, minValue: inputMinRange, max: inputTypeAreaMax, min: inputTypeAreaMin, onAcceptValue: () => { }, onChange: (min, max) => handleRangeChange(min, max), step: 0.0125, tooltip: true }),
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-marks" },
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-main", style: { left: "0%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-main", style: { left: "25%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-main", style: { left: "50%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-main", style: { left: "75%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-main", style: { left: "100%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-small", style: { left: "12.5%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-small", style: { left: "37.5%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-small", style: { left: "62.5%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-small", style: { left: "87.5%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-tiny", style: { left: "6.25%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-tiny", style: { left: "18.75%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-tiny", style: { left: "31.25%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-tiny", style: { left: "43.75%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-tiny", style: { left: "56.25%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-tiny", style: { left: "68.75%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-tiny", style: { left: "81.25%" } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark slider-mark-tiny", style: { left: "93.75%" } })),
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "contentSliceMaskPri" },
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: "label1Mask" }, inputTypeAreaMin.toFixed(4)),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: "label1Mask" }, (inputTypeAreaMin +
                                (inputTypeAreaMax - inputTypeAreaMin) * 0.25).toFixed(4)),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: "centerMask label1Mask" }, ((inputTypeAreaMin + inputTypeAreaMax) / 2).toFixed(4)),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: "label1Mask" }, (inputTypeAreaMin +
                                (inputTypeAreaMax - inputTypeAreaMin) * 0.75).toFixed(4)),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: "rightMask label1Mask" }, inputTypeAreaMax.toFixed(4)))),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "mask-buttons" }, loading === true ? (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: "sm", type: "primary" },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Loading, { type: "DONUT", height: 20, width: 20 }))) : (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { onClick: () => {
                            crearImageryLayer();
                        }, size: "sm", type: "primary" }, t("apply"))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXNrL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQ2pCO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scVJBQXFSLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUscUJBQXFCLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsc0JBQXNCLE1BQU0sV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLHNCQUFzQixPQUFPLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsc0JBQXNCLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxXQUFXLFVBQVUsV0FBVyxV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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZO0FBQ3hELElBQUk7QUFDSjtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVcsUUFBUSxhQUFhLCtDQUErQyxNQUFNO0FBQzlGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsYUFBYTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFlBQVksTUFBTSxNQUFNLHFDQUFxQyw2QkFBNkI7QUFDekg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGtEQUFrRCxrQ0FBa0M7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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TSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFJLENBQ3hDLENBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FDRiw0REFBQywyQ0FBTSxJQUNMLE9BQU8sRUFBRSxHQUFHLEVBQUU7NEJBQ1osaUJBQWlCLEVBQUUsQ0FBQzt3QkFDdEIsQ0FBQyxFQUNELElBQUksRUFBQyxJQUFJLEVBQ1QsSUFBSSxFQUFDLFNBQVMsSUFFYixDQUFDLENBQUMsT0FBTyxDQUFDLENBQ0osQ0FDVixDQUNHLENBQ0YsQ0FDRixDQUNQLENBQ0csQ0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixpRUFBZSxNQUFNLEVBQUM7QUFFZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXNrL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vZXNyaS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9tb2R1bGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vc2NyaXB0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vdXRpbHMvY3NzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy91cmwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hc2svc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzcz8yMmQ5Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL2ZpbGxlZC9zdWdnZXN0ZWQvaGVscC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvZmlsbGVkL3N1Z2dlc3RlZC9oZWxwLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL2NvbXBvbmVudHMvVGl0bGVXaXRoVG9vbHRpcC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy9ob29rcy91c2VMb2NhbGUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hc2svc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS93aXRoLXNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9kaXN0L3JlYWN0LXJlZHV4Lm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFzay9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4ud2lkZ2V0TWFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW50ZXJIb21lIHtcbiAgaGVpZ2h0OiA3NSU7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uY29udGVudFNsaWNlTWFzay1CYXNlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxODBweDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC4zcmVtO1xufVxuXG4uY29udGVudFNsaWNlTWFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMDsgLyogU2luIHBhZGRpbmcgcGFyYSBxdWUgZWwgc2xpZGVyIGxsZWd1ZSBhIGxvcyBleHRyZW1vcyAqL1xuICAuc2xpZGVyIGlucHV0IHtcbiAgICBjb2xvcjogIzAwOGVjYztcbiAgfVxufVxuXG4uY29udGVudFNsaWNlTWFza1ByaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogOHB4OyAvKiBTZXBhcmFjacOzbiBkZSBsYXMgbWFyY2FzICovXG59XG5cbi5sYWJlbDFNYXNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyAvKiBDZW50cmFyIGVsIGxhYmVsIGVuIHN1IHBvc2ljacOzbiAqL1xufVxuXG4vKiBQb3NpY2lvbmVzIGVzcGVjw61maWNhcyBwYXJhIGNhZGEgbGFiZWwgKi9cbi5sYWJlbDFNYXNrOm50aC1jaGlsZCgxKSB7XG4gIGxlZnQ6IDAlO1xufVxuXG4ubGFiZWwxTWFzazpudGgtY2hpbGQoMikge1xuICBsZWZ0OiAyNSU7XG59XG5cbi5sYWJlbDFNYXNrOm50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLmxhYmVsMU1hc2s6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNzUlO1xufVxuXG4ubGFiZWwxTWFzazpudGgtY2hpbGQoNSkge1xuICBsZWZ0OiAxMDAlO1xufVxuXG4ucmFuZ2VJbnB1dE1hc2sge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAwLjVlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQwMzkyMTU2ODYpIGNhbGMoKHZhcigtLXZhbHVlKSArIDEpICogNTAlKSwgIzAwNGE5OCAwKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uY2VudGVyTWFzayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0TWFzayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvcmNlbnRhamVDbGFzc01hc2sge1xuICB3aWR0aDogODBweDtcbn1cblxuLmludGVybWVkaW9OZWdhdGl2byB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5pbnRlcm1lZGlvUG9zaXRpdm8ge1xuICB3aWR0aDogNzUlO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnNlbGVjdENsYXNzSW5kaWNlIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc2VsZWN0Q2xhc3NJbmRpY2UgbGFiZWwge1xuICB3aWR0aDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uc2VsZWN0Q2xhc3NJbmRpY2Ugc2VsZWN0IHtcbiAgd2lkdGg6IDcwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLmNvbnRlbnRCdG5Wb2x2ZXIge1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5idG5XaWRnZXRzUHJpIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCA4OSwgMTk0KTtcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDc4LCAxNTEsIDI1NSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2NvbnRlbnRJbmRpY2VzTm9tYWxlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5idG5NYXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhNjk2OTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNjb250ZW50Q29uc3VsdGFCYWkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zcGVjdHJhbC1pbmRleC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLm1hc2stYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiAxcmVtO1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MiAhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG4gIH1cbn1cblxuLnNsaWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNsaWRlci1tYXJrcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDsgLyogTcOhcyBlc3BhY2lvIGVudHJlIGxhcyBtYXJjYXMgeSBsb3MgbGFiZWxzICovXG59XG5cbi5zbGlkZXItbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgb3BhY2l0eTogMC43O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIHotaW5kZXg6IDI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgLyogQ2VudHJhciBsYSBtYXJjYSBlbiBzdSBwb3NpY2nDs24gKi9cbn1cblxuLyogTWFyY2FzIHByaW5jaXBhbGVzIChtw6FzIGFsdGFzKSAtIGVuIDAlLCAyNSUsIDUwJSwgNzUlLCAxMDAlICovXG4uc2xpZGVyLW1hcmstbWFpbiB7XG4gIGhlaWdodDogMTBweDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4vKiBNYXJjYXMgaW50ZXJtZWRpYXMgKG1lZGlhbmFzKSAtIGVuIDEyLjUlLCAzNy41JSwgNjIuNSUsIDg3LjUlICovXG4uc2xpZGVyLW1hcmstc21hbGwge1xuICBoZWlnaHQ6IDdweDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4vKiBNYXJjYXMgYWRpY2lvbmFsZXMgKHBlcXVlw7FhcykgLSBjYWRhIDYuMjUlICovXG4uc2xpZGVyLW1hcmstdGlueSB7XG4gIGhlaWdodDogNXB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5zbGlkZXItbGFiZWxzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5zbGlkZXItbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm11bHRpLXJhbmdlLXNsaWRlciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICMxYTUyNzY7XG4gIH1cbn1cblxuLyogUmVtb3ZlciBwYWRkaW5nIGludGVybm8gZGVsIGNvbnRlbmVkb3IgZGVsIHNsaWRlciAqL1xuLm11bHRpLXJhbmdlLXNsaWRlciAubXVsdGktcmFuZ2Utc2xpZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLm11bHRpLXJhbmdlLXNsaWRlci0tcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjMDA4ZWNjICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubXVsdGktcmFuZ2Utc2xpZGVyLS10cmFjayB7XG4gIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9nZW9wcm9jZXNvcyUyMGV4cHJpZW5jZSUyMGJ1aWxkZXIvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hc2svc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzc1wiLFwid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFzay9zcmMvcnVudGltZS9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBREVG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QUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FEa0JGOztBQ2ZBLCtDQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRGtCRjs7QUNmQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FEa0JGOztBQ2ZBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QURrQkY7O0FDaEJBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUVBO0lBQ0Usd0JBQUE7SUFDQSxtQkFBQTtFRGtCRjtBQUNGOztBQ2ZBLHNEQUFBO0FBQ0E7RUFDRSxxQkFBQTtBRGtCRjs7QUNmQTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QURrQkY7O0FDaEJBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FEbUJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLndpZGdldE1hc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbnRlckhvbWUge1xcbiAgaGVpZ2h0OiA3NSU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLmNvbnRlbnRTbGljZU1hc2stQmFzZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxODBweDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxufVxcblxcbi5jb250ZW50U2xpY2VNYXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHBhZGRpbmc6IDA7IC8qIFNpbiBwYWRkaW5nIHBhcmEgcXVlIGVsIHNsaWRlciBsbGVndWUgYSBsb3MgZXh0cmVtb3MgKi9cXG4gIC5zbGlkZXIgaW5wdXQge1xcbiAgICBjb2xvcjogIzAwOGVjYztcXG4gIH1cXG59XFxuXFxuLmNvbnRlbnRTbGljZU1hc2tQcmkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiA4cHg7IC8qIFNlcGFyYWNpw7NuIGRlIGxhcyBtYXJjYXMgKi9cXG59XFxuXFxuLmxhYmVsMU1hc2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IC8qIENlbnRyYXIgZWwgbGFiZWwgZW4gc3UgcG9zaWNpw7NuICovXFxufVxcblxcbi8qIFBvc2ljaW9uZXMgZXNwZWPDrWZpY2FzIHBhcmEgY2FkYSBsYWJlbCAqL1xcbi5sYWJlbDFNYXNrOm50aC1jaGlsZCgxKSB7XFxuICBsZWZ0OiAwJTtcXG59XFxuXFxuLmxhYmVsMU1hc2s6bnRoLWNoaWxkKDIpIHtcXG4gIGxlZnQ6IDI1JTtcXG59XFxuXFxuLmxhYmVsMU1hc2s6bnRoLWNoaWxkKDMpIHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLmxhYmVsMU1hc2s6bnRoLWNoaWxkKDQpIHtcXG4gIGxlZnQ6IDc1JTtcXG59XFxuXFxuLmxhYmVsMU1hc2s6bnRoLWNoaWxkKDUpIHtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbi5yYW5nZUlucHV0TWFzayB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDAuNWVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40MDM5MjE1Njg2KSBjYWxjKCh2YXIoLS12YWx1ZSkgKyAxKSAqIDUwJSksICMwMDRhOTggMCk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5jZW50ZXJNYXNrIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0TWFzayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wb3JjZW50YWplQ2xhc3NNYXNrIHtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4uaW50ZXJtZWRpb05lZ2F0aXZvIHtcXG4gIHdpZHRoOiA3NSU7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uaW50ZXJtZWRpb1Bvc2l0aXZvIHtcXG4gIHdpZHRoOiA3NSU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5zZWxlY3RDbGFzc0luZGljZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLnNlbGVjdENsYXNzSW5kaWNlIGxhYmVsIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGhlaWdodDogMjNweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi5zZWxlY3RDbGFzc0luZGljZSBzZWxlY3Qge1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxufVxcblxcbi5jb250ZW50QnRuVm9sdmVyIHtcXG4gIHBhZGRpbmctdG9wOiA1JTtcXG59XFxuXFxuLmJ0bldpZGdldHNQcmkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgODksIDE5NCk7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoNzgsIDE1MSwgMjU1KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2NvbnRlbnRJbmRpY2VzTm9tYWxlcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJ0bk1hc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhNjk2OTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiA2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA2cHggMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50Q29uc3VsdGFCYWkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNwZWN0cmFsLWluZGV4LWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbn1cXG5cXG4ubWFzay1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMzUlO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zbGlkZXItbWFya3Mge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4OyAvKiBNw6FzIGVzcGFjaW8gZW50cmUgbGFzIG1hcmNhcyB5IGxvcyBsYWJlbHMgKi9cXG59XFxuXFxuLnNsaWRlci1tYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgei1pbmRleDogMjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgLyogQ2VudHJhciBsYSBtYXJjYSBlbiBzdSBwb3NpY2nDs24gKi9cXG59XFxuXFxuLyogTWFyY2FzIHByaW5jaXBhbGVzIChtw6FzIGFsdGFzKSAtIGVuIDAlLCAyNSUsIDUwJSwgNzUlLCAxMDAlICovXFxuLnNsaWRlci1tYXJrLW1haW4ge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4vKiBNYXJjYXMgaW50ZXJtZWRpYXMgKG1lZGlhbmFzKSAtIGVuIDEyLjUlLCAzNy41JSwgNjIuNSUsIDg3LjUlICovXFxuLnNsaWRlci1tYXJrLXNtYWxsIHtcXG4gIGhlaWdodDogN3B4O1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4vKiBNYXJjYXMgYWRpY2lvbmFsZXMgKHBlcXVlw7FhcykgLSBjYWRhIDYuMjUlICovXFxuLnNsaWRlci1tYXJrLXRpbnkge1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5zbGlkZXItbGFiZWxzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG5cXG4uc2xpZGVyLWxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubXVsdGktcmFuZ2Utc2xpZGVyIHtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWE1Mjc2O1xcbiAgfVxcbn1cXG5cXG4vKiBSZW1vdmVyIHBhZGRpbmcgaW50ZXJubyBkZWwgY29udGVuZWRvciBkZWwgc2xpZGVyICovXFxuLm11bHRpLXJhbmdlLXNsaWRlciAubXVsdGktcmFuZ2Utc2xpZGVyLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tdWx0aS1yYW5nZS1zbGlkZXItLXJhbmdlIHtcXG4gIGJhY2tncm91bmQ6ICMwMDhlY2MgIWltcG9ydGFudDtcXG4gIGhlaWdodDogNHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm11bHRpLXJhbmdlLXNsaWRlci0tdHJhY2sge1xcbiAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbn1cIixcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLndpZGdldE1hc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbnRlckhvbWUge1xcbiAgaGVpZ2h0OiA3NSU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLmNvbnRlbnRTbGljZU1hc2stQmFzZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxODBweDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxufVxcblxcbi5jb250ZW50U2xpY2VNYXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHBhZGRpbmc6IDA7IC8qIFNpbiBwYWRkaW5nIHBhcmEgcXVlIGVsIHNsaWRlciBsbGVndWUgYSBsb3MgZXh0cmVtb3MgKi9cXG4gIC5zbGlkZXIgaW5wdXQge1xcbiAgICBjb2xvcjogIzAwOGVjYztcXG4gIH1cXG59XFxuXFxuLmNvbnRlbnRTbGljZU1hc2tQcmkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiA4cHg7IC8qIFNlcGFyYWNpw7NuIGRlIGxhcyBtYXJjYXMgKi9cXG59XFxuXFxuLmxhYmVsMU1hc2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IC8qIENlbnRyYXIgZWwgbGFiZWwgZW4gc3UgcG9zaWNpw7NuICovXFxufVxcblxcbi8qIFBvc2ljaW9uZXMgZXNwZWPDrWZpY2FzIHBhcmEgY2FkYSBsYWJlbCAqL1xcbi5sYWJlbDFNYXNrOm50aC1jaGlsZCgxKSB7XFxuICBsZWZ0OiAwJTtcXG59XFxuXFxuLmxhYmVsMU1hc2s6bnRoLWNoaWxkKDIpIHtcXG4gIGxlZnQ6IDI1JTtcXG59XFxuXFxuLmxhYmVsMU1hc2s6bnRoLWNoaWxkKDMpIHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLmxhYmVsMU1hc2s6bnRoLWNoaWxkKDQpIHtcXG4gIGxlZnQ6IDc1JTtcXG59XFxuXFxuLmxhYmVsMU1hc2s6bnRoLWNoaWxkKDUpIHtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbi5yYW5nZUlucHV0TWFzayB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDAuNWVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40MDM5MjE1Njg2KSBjYWxjKCh2YXIoLS12YWx1ZSkgKyAxKSAqIDUwJSksICMwMDRhOTggMCk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5jZW50ZXJNYXNrIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0TWFzayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wb3JjZW50YWplQ2xhc3NNYXNrIHtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4uaW50ZXJtZWRpb05lZ2F0aXZvIHtcXG4gIHdpZHRoOiA3NSU7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uaW50ZXJtZWRpb1Bvc2l0aXZvIHtcXG4gIHdpZHRoOiA3NSU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5zZWxlY3RDbGFzc0luZGljZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLnNlbGVjdENsYXNzSW5kaWNlIGxhYmVsIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGhlaWdodDogMjNweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi5zZWxlY3RDbGFzc0luZGljZSBzZWxlY3Qge1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxufVxcblxcbi5jb250ZW50QnRuVm9sdmVyIHtcXG4gIHBhZGRpbmctdG9wOiA1JTtcXG59XFxuXFxuLmJ0bldpZGdldHNQcmkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgODksIDE5NCk7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoNzgsIDE1MSwgMjU1KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2NvbnRlbnRJbmRpY2VzTm9tYWxlcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJ0bk1hc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhNjk2OTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiA2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA2cHggMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50Q29uc3VsdGFCYWkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNwZWN0cmFsLWluZGV4LWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbn1cXG5cXG4ubWFzay1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMzUlO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zbGlkZXItbWFya3Mge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4OyAvKiBNw6FzIGVzcGFjaW8gZW50cmUgbGFzIG1hcmNhcyB5IGxvcyBsYWJlbHMgKi9cXG59XFxuXFxuLnNsaWRlci1tYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgei1pbmRleDogMjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgLyogQ2VudHJhciBsYSBtYXJjYSBlbiBzdSBwb3NpY2nDs24gKi9cXG59XFxuXFxuLyogTWFyY2FzIHByaW5jaXBhbGVzIChtw6FzIGFsdGFzKSAtIGVuIDAlLCAyNSUsIDUwJSwgNzUlLCAxMDAlICovXFxuLnNsaWRlci1tYXJrLW1haW4ge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4vKiBNYXJjYXMgaW50ZXJtZWRpYXMgKG1lZGlhbmFzKSAtIGVuIDEyLjUlLCAzNy41JSwgNjIuNSUsIDg3LjUlICovXFxuLnNsaWRlci1tYXJrLXNtYWxsIHtcXG4gIGhlaWdodDogN3B4O1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4vKiBNYXJjYXMgYWRpY2lvbmFsZXMgKHBlcXVlw7FhcykgLSBjYWRhIDYuMjUlICovXFxuLnNsaWRlci1tYXJrLXRpbnkge1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5zbGlkZXItbGFiZWxzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG5cXG4uc2xpZGVyLWxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubXVsdGktcmFuZ2Utc2xpZGVyIHtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWE1Mjc2O1xcbiAgfVxcbn1cXG5cXG4vKiBSZW1vdmVyIHBhZGRpbmcgaW50ZXJubyBkZWwgY29udGVuZWRvciBkZWwgc2xpZGVyICovXFxuLm11bHRpLXJhbmdlLXNsaWRlciAubXVsdGktcmFuZ2Utc2xpZGVyLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tdWx0aS1yYW5nZS1zbGlkZXItLXJhbmdlIHtcXG4gIGJhY2tncm91bmQ6ICMwMDhlY2MgIWltcG9ydGFudDtcXG4gIGhlaWdodDogNHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm11bHRpLXJhbmdlLXNsaWRlci0tdHJhY2sge1xcbiAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qXG4gIENvcHlyaWdodCAoYykgMjAyMiBFc3JpXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vLyByZS1leHBvcnQgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG5leHBvcnQgeyBsb2FkTW9kdWxlcyB9IGZyb20gJy4vbW9kdWxlcyc7XG5leHBvcnQgeyBnZXRTY3JpcHQsIGlzTG9hZGVkLCBsb2FkU2NyaXB0LCBzZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vc2NyaXB0JztcbmV4cG9ydCB7IGxvYWRDc3MgfSBmcm9tICcuL3V0aWxzL2Nzcyc7XG5leHBvcnQgeyB1dGlscyB9O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGdldFNjcmlwdCwgaXNMb2FkZWQsIGxvYWRTY3JpcHQgfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG4vLyB3cmFwIERvam8ncyByZXF1aXJlKCkgaW4gYSBwcm9taXNlXG5mdW5jdGlvbiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKSB7XG4gICAgcmV0dXJuIG5ldyB1dGlscy5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgbG9hZGluZyB0aGUgZXNyaS9kb2pvIHNjcmlwdHMsIHJlamVjdCB3aXRoIHRoZSBlcnJvci5cbiAgICAgICAgdmFyIGVycm9ySGFuZGxlciA9IHdpbmRvd1sncmVxdWlyZSddLm9uKCdlcnJvcicsIHJlamVjdCk7XG4gICAgICAgIHdpbmRvd1sncmVxdWlyZSddKG1vZHVsZXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlbW92ZSBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICBlcnJvckhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIHdpdGggdGhlIHBhcmFtZXRlcnMgZnJvbSBkb2pvIHJlcXVpcmUgYXMgYW4gYXJyYXkuXG4gICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbiBhcnJheSBvZiB0aGUgcmVxdWlyZWQgbW9kdWxlc1xuLy8gYWxzbyB3aWxsIGF0dGVtcHQgdG8gbGF6eSBsb2FkIHRoZSBBcmNHSVMgQVBJIGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGxvYWRlZFxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNb2R1bGVzKG1vZHVsZXMsIGxvYWRTY3JpcHRPcHRpb25zKSB7XG4gICAgaWYgKGxvYWRTY3JpcHRPcHRpb25zID09PSB2b2lkIDApIHsgbG9hZFNjcmlwdE9wdGlvbnMgPSB7fTsgfVxuICAgIGlmICghaXNMb2FkZWQoKSkge1xuICAgICAgICAvLyBzY3JpcHQgaXMgbm90IHlldCBsb2FkZWQsIGlzIGl0IGluIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmc/XG4gICAgICAgIHZhciBzY3JpcHQgPSBnZXRTY3JpcHQoKTtcbiAgICAgICAgdmFyIHNyYyA9IHNjcmlwdCAmJiBzY3JpcHQuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgaWYgKCFsb2FkU2NyaXB0T3B0aW9ucy51cmwgJiYgc3JjKSB7XG4gICAgICAgICAgICAvLyBzY3JpcHQgaXMgc3RpbGwgbG9hZGluZyBhbmQgdXNlciBkaWQgbm90IHNwZWNpZnkgYSBVUkxcbiAgICAgICAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIGRlZmF1bHQgdG8gdGhlIFVSTCB0aGF0J3MgYmVpbmcgbG9hZGVkXG4gICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGRlZmF1bHRpbmcgdG8gdGhlIGxhdGVzdCA0LnggVVJMXG4gICAgICAgICAgICBsb2FkU2NyaXB0T3B0aW9ucy51cmwgPSBzcmM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXR0ZW1wdCB0byBsb2FkIHRoZSBzY3JpcHQgdGhlbiBsb2FkIHRoZSBtb2R1bGVzXG4gICAgICAgIHJldHVybiBsb2FkU2NyaXB0KGxvYWRTY3JpcHRPcHRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlcXVpcmVNb2R1bGVzKG1vZHVsZXMpOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHNjcmlwdCBpcyBhbHJlYWR5IGxvYWRlZCwganVzdCBsb2FkIHRoZSBtb2R1bGVzXG4gICAgICAgIHJldHVybiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKTtcbiAgICB9XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgbG9hZENzcyB9IGZyb20gJy4vdXRpbHMvY3NzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IGdldENkblVybCB9IGZyb20gJy4vdXRpbHMvdXJsJztcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZnVuY3Rpb24gY3JlYXRlU2NyaXB0KHVybCkge1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1lc3JpLWxvYWRlcicsICdsb2FkaW5nJyk7XG4gICAgcmV0dXJuIHNjcmlwdDtcbn1cbi8vIGFkZCBhIG9uZS10aW1lIGxvYWQgaGFuZGxlciB0byBzY3JpcHRcbi8vIGFuZCBvcHRpb25hbGx5IGFkZCBhIG9uZSB0aW1lIGVycm9yIGhhbmRsZXIgYXMgd2VsbFxuZnVuY3Rpb24gaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIGNhbGxiYWNrLCBlcnJiYWNrKSB7XG4gICAgdmFyIG9uU2NyaXB0RXJyb3I7XG4gICAgaWYgKGVycmJhY2spIHtcbiAgICAgICAgLy8gc2V0IHVwIGFuIGVycm9yIGhhbmRsZXIgYXMgd2VsbFxuICAgICAgICBvblNjcmlwdEVycm9yID0gaGFuZGxlU2NyaXB0RXJyb3Ioc2NyaXB0LCBlcnJiYWNrKTtcbiAgICB9XG4gICAgdmFyIG9uU2NyaXB0TG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gcGFzcyB0aGUgc2NyaXB0IHRvIHRoZSBjYWxsYmFja1xuICAgICAgICBjYWxsYmFjayhzY3JpcHQpO1xuICAgICAgICAvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uU2NyaXB0TG9hZCwgZmFsc2UpO1xuICAgICAgICBpZiAob25TY3JpcHRFcnJvcikge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBlcnJvciBsaXN0ZW5lciBhcyB3ZWxsXG4gICAgICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25TY3JpcHRMb2FkLCBmYWxzZSk7XG59XG4vLyBhZGQgYSBvbmUtdGltZSBlcnJvciBoYW5kbGVyIHRvIHRoZSBzY3JpcHRcbmZ1bmN0aW9uIGhhbmRsZVNjcmlwdEVycm9yKHNjcmlwdCwgY2FsbGJhY2spIHtcbiAgICB2YXIgb25TY3JpcHRFcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIHJlamVjdCB0aGUgcHJvbWlzZSBhbmQgcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgY2FsbGJhY2soZS5lcnJvciB8fCBuZXcgRXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgYXR0ZW1wdGluZyB0byBsb2FkIFwiLmNvbmNhdChzY3JpcHQuc3JjKSkpO1xuICAgICAgICAvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgfTtcbiAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgcmV0dXJuIG9uU2NyaXB0RXJyb3I7XG59XG4vLyBhbGxvdyB0aGUgdXNlciB0byBjb25maWd1cmUgZGVmYXVsdCBzY3JpcHQgb3B0aW9ucyByYXRoZXIgdGhhbiBwYXNzaW5nIG9wdGlvbnMgdG8gYGxvYWRNb2R1bGVzYCBlYWNoIHRpbWVcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBkZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG59XG4vLyBnZXQgdGhlIHNjcmlwdCBpbmplY3RlZCBieSB0aGlzIGxpYnJhcnlcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JpcHQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLWVzcmktbG9hZGVyXScpO1xufVxuLy8gaGFzIEFyY0dJUyBBUEkgYmVlbiBsb2FkZWQgb24gdGhlIHBhZ2UgeWV0P1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9hZGVkKCkge1xuICAgIHZhciBnbG9iYWxSZXF1aXJlID0gd2luZG93WydyZXF1aXJlJ107XG4gICAgLy8gLm9uKCkgZW5zdXJlcyB0aGF0IGl0J3MgRG9qbydzIEFNRCBsb2FkZXJcbiAgICByZXR1cm4gZ2xvYmFsUmVxdWlyZSAmJiBnbG9iYWxSZXF1aXJlLm9uO1xufVxuLy8gbG9hZCB0aGUgQXJjR0lTIEFQSSBvbiB0aGUgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTY3JpcHQob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgLy8gd2Ugd291bGQgaGF2ZSBsaWtlZCB0byB1c2Ugc3ByZWFkIGxpa2UgeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9XG4gICAgLy8gYnV0IFRTIHdvdWxkIGluamVjdCBhIHBvbHlmaWxsIHRoYXQgd291bGQgcmVxdWlyZSB1c2UgdG8gY29uZmlndXJlIHJvbGx1cCB3IGNvbnRlbnQ6ICd3aW5kb3cnXG4gICAgLy8gaWYgd2UgaGF2ZSBhbm90aGVyIG9jY2FzaW9uIHRvIHVzZSBzcHJlYWQsIGxldCdzIGRvIHRoYXQgYW5kIHJlcGxhY2UgdGhpcyBmb3IuLi5pblxuICAgIHZhciBvcHRzID0ge307XG4gICAgW2RlZmF1bHRPcHRpb25zLCBvcHRpb25zXS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIG9wdHNbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBVUkwgdG8gbG9hZFxuICAgIHZhciB2ZXJzaW9uID0gb3B0cy52ZXJzaW9uO1xuICAgIHZhciB1cmwgPSBvcHRzLnVybCB8fCBnZXRDZG5VcmwodmVyc2lvbik7XG4gICAgcmV0dXJuIG5ldyB1dGlscy5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9IGdldFNjcmlwdCgpO1xuICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgICAvLyB0aGUgQVBJIGlzIGFscmVhZHkgbG9hZGVkIG9yIGluIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmcuLi5cbiAgICAgICAgICAgIC8vIE5PVEU6IGhhdmUgdG8gdGVzdCBhZ2FpbnN0IHNjciBhdHRyaWJ1dGUgdmFsdWUsIG5vdCBzY3JpcHQuc3JjXG4gICAgICAgICAgICAvLyBiL2MgdGhlIGxhdHRlciB3aWxsIHJldHVybiB0aGUgZnVsbCB1cmwgZm9yIHJlbGF0aXZlIHBhdGhzXG4gICAgICAgICAgICB2YXIgc3JjID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgICAgICBpZiAoc3JjICE9PSB1cmwpIHtcbiAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSB0cnlpbmcgdG8gbG9hZCBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIHRoZSBBUElcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQgKFwiLmNvbmNhdChzcmMsIFwiKS5cIikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzY3JpcHQgaGFzIGFscmVhZHkgc3VjY2Vzc2Z1bGx5IGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciB0aGUgc2NyaXB0IHRvIGxvYWQgYW5kIHRoZW4gcmVzb2x2ZVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBBUEkgaGFzIGJlZW4gbG9hZGVkIGJ5IHNvbWUgb3RoZXIgbWVhbnNcbiAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSB0cnlpbmcgdG8gbG9hZCBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIHRoZSBBUElcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQuXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYXR0ZW1wdGluZyB0byBsb2FkIHRoZSBBUElcbiAgICAgICAgICAgICAgICB2YXIgY3NzID0gb3B0cy5jc3M7XG4gICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlVmVyc2lvbiA9IGNzcyA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCB0aGUgY3NzIGJlZm9yZSBsb2FkaW5nIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgbG9hZENzcyh1c2VWZXJzaW9uID8gdmVyc2lvbiA6IGNzcywgb3B0cy5pbnNlcnRDc3NCZWZvcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBzY3JpcHQgb2JqZWN0IHdob3NlIHNvdXJjZSBwb2ludHMgdG8gdGhlIEFQSVxuICAgICAgICAgICAgICAgIHNjcmlwdCA9IGNyZWF0ZVNjcmlwdCh1cmwpO1xuICAgICAgICAgICAgICAgIC8vIF9jdXJyZW50VXJsID0gdXJsO1xuICAgICAgICAgICAgICAgIC8vIG9uY2UgdGhlIHNjcmlwdCBpcyBsb2FkZWQuLi5cbiAgICAgICAgICAgICAgICBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHN0YXR1cyBvZiB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXNyaS1sb2FkZXInLCAnbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICAgICAgICAgIC8vIGxvYWQgdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGdldENkbkNzc1VybCwgcGFyc2VWZXJzaW9uIH0gZnJvbSAnLi91cmwnO1xuZnVuY3Rpb24gY3JlYXRlU3R5bGVzaGVldExpbmsoaHJlZikge1xuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgcmV0dXJuIGxpbms7XG59XG5mdW5jdGlvbiBpbnNlcnRMaW5rKGxpbmssIGJlZm9yZSkge1xuICAgIGlmIChiZWZvcmUpIHtcbiAgICAgICAgLy8gdGhlIGxpbmsgc2hvdWxkIGJlIGluc2VydGVkIGJlZm9yZSBhIHNwZWNpZmljIG5vZGVcbiAgICAgICAgdmFyIGJlZm9yZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJlZm9yZSk7XG4gICAgICAgIGJlZm9yZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGluaywgYmVmb3JlTm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBhcHBlbmQgdGhlIGxpbmsgdG8gdGhlbiBlbmQgb2YgdGhlIGhlYWQgdGFnXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfVxufVxuLy8gY2hlY2sgaWYgdGhlIGNzcyB1cmwgaGFzIGJlZW4gaW5qZWN0ZWQgb3IgYWRkZWQgbWFudWFsbHlcbmZ1bmN0aW9uIGdldENzcyh1cmwpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbaHJlZio9XFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIl1cIikpO1xufVxuZnVuY3Rpb24gZ2V0Q3NzVXJsKHVybE9yVmVyc2lvbikge1xuICAgIHJldHVybiAhdXJsT3JWZXJzaW9uIHx8IHBhcnNlVmVyc2lvbih1cmxPclZlcnNpb24pXG4gICAgICAgIC8vIGlmIGl0J3MgYSB2YWxpZCB2ZXJzaW9uIHN0cmluZyByZXR1cm4gdGhlIENETiBVUkxcbiAgICAgICAgPyBnZXRDZG5Dc3NVcmwodXJsT3JWZXJzaW9uKVxuICAgICAgICAvLyBvdGhlcndpc2UgYXNzdW1lIGl0J3MgYSBVUkwgYW5kIHJldHVybiB0aGF0XG4gICAgICAgIDogdXJsT3JWZXJzaW9uO1xufVxuLy8gbGF6eSBsb2FkIHRoZSBDU1MgbmVlZGVkIGZvciB0aGUgQXJjR0lTIEFQSVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDc3ModXJsT3JWZXJzaW9uLCBiZWZvcmUpIHtcbiAgICB2YXIgdXJsID0gZ2V0Q3NzVXJsKHVybE9yVmVyc2lvbik7XG4gICAgdmFyIGxpbmsgPSBnZXRDc3ModXJsKTtcbiAgICBpZiAoIWxpbmspIHtcbiAgICAgICAgLy8gY3JlYXRlICYgbG9hZCB0aGUgY3NzIGxpbmtcbiAgICAgICAgbGluayA9IGNyZWF0ZVN0eWxlc2hlZXRMaW5rKHVybCk7XG4gICAgICAgIGluc2VydExpbmsobGluaywgYmVmb3JlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbms7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuLy8gYWxsb3cgY29uc3VtaW5nIGxpYnJhcmllcyB0byBwcm92aWRlIHRoZWlyIG93biBQcm9taXNlIGltcGxlbWVudGF0aW9uc1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIFByb21pc2U6IGlzQnJvd3NlciA/IHdpbmRvd1snUHJvbWlzZSddIDogdW5kZWZpbmVkXG59O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbnZhciBERUZBVUxUX1ZFUlNJT04gPSAnNC4yNSc7XG52YXIgTkVYVCA9ICduZXh0JztcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZlcnNpb24odmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uLnRvTG93ZXJDYXNlKCkgPT09IE5FWFQpIHtcbiAgICAgICAgcmV0dXJuIE5FWFQ7XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHZlcnNpb24gJiYgdmVyc2lvbi5tYXRjaCgvXihcXGQpXFwuKFxcZCspLyk7XG4gICAgcmV0dXJuIG1hdGNoICYmIHtcbiAgICAgICAgbWFqb3I6IHBhcnNlSW50KG1hdGNoWzFdLCAxMCksXG4gICAgICAgIG1pbm9yOiBwYXJzZUludChtYXRjaFsyXSwgMTApXG4gICAgfTtcbn1cbi8qKlxuICogR2V0IHRoZSBDRE4gdXJsIGZvciBhIGdpdmVuIHZlcnNpb25cbiAqXG4gKiBAcGFyYW0gdmVyc2lvbiBFeDogJzQuMjUnIG9yICczLjQyJy4gRGVmYXVsdHMgdG8gdGhlIGxhdGVzdCA0LnggdmVyc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENkblVybCh2ZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24gPT09IHZvaWQgMCkgeyB2ZXJzaW9uID0gREVGQVVMVF9WRVJTSU9OOyB9XG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9qcy5hcmNnaXMuY29tL1wiLmNvbmNhdCh2ZXJzaW9uLCBcIi9cIik7XG59XG4vKipcbiAqIEdldCB0aGUgQ0ROIHVybCBmb3IgYSB0aGUgQ1NTIGZvciBhIGdpdmVuIHZlcnNpb24gYW5kL29yIHRoZW1lXG4gKlxuICogQHBhcmFtIHZlcnNpb24gRXg6ICc0LjI1JywgJzMuNDInLCBvciAnbmV4dCcuIERlZmF1bHRzIHRvIHRoZSBsYXRlc3QgNC54IHZlcnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5Dc3NVcmwodmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uID09PSB2b2lkIDApIHsgdmVyc2lvbiA9IERFRkFVTFRfVkVSU0lPTjsgfVxuICAgIHZhciBiYXNlVXJsID0gZ2V0Q2RuVXJsKHZlcnNpb24pO1xuICAgIHZhciBwYXJzZWRWZXJzaW9uID0gcGFyc2VWZXJzaW9uKHZlcnNpb24pO1xuICAgIGlmIChwYXJzZWRWZXJzaW9uICE9PSBORVhUICYmIHBhcnNlZFZlcnNpb24ubWFqb3IgPT09IDMpIHtcbiAgICAgICAgLy8gTk9URTogYXQgMy4xMSB0aGUgQ1NTIG1vdmVkIGZyb20gdGhlIC9qcyBmb2xkZXIgdG8gdGhlIHJvb3RcbiAgICAgICAgdmFyIHBhdGggPSBwYXJzZWRWZXJzaW9uLm1pbm9yIDw9IDEwID8gJ2pzLycgOiAnJztcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGJhc2VVcmwpLmNvbmNhdChwYXRoLCBcImVzcmkvY3NzL2VzcmkuY3NzXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gYXNzdW1lIDQueFxuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoYmFzZVVybCwgXCJlc3JpL3RoZW1lcy9saWdodC9tYWluLmNzc1wiKTtcbiAgICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMSA4YzAtMy44NSAzLjE1LTcgNy03czcgMy4xNSA3IDctMy4xNSA3LTcgNy03LTMuMTUtNy03bTcuODc1IDQuMzc1YS44NzUuODc1IDAgMSAxLTEuNzUgMCAuODc1Ljg3NSAwIDAgMSAxLjc1IDBtLS4wNjMtMi42NTZjLjEzMi0uNTcxLjQxNS0uOTE2Ljg0OC0xLjI5OXMuNzAxLS43MDkuNzAxLS43MDljLjM5LS40NzIuNzAxLTEuMTAyLjcwMS0xLjgxMSAwLTEuNzMyLTEuNDAyLTMuMTUtMy4xMTctMy4xNS0xLjM1NyAwLTIuNTIuOTI4LTIuOTQ2IDIuMTU3LS4wNi4xNTItLjA2LjI5OS0uMDYuMjk5YS42NS42NSAwIDAgMCAuNjY4LjY5NGwuMS0uMDA2Yy40LS4wNDYuNjc5LS4yNzUuODI5LS42NS4wNzgtLjE2NC4xMDgtLjIwOC4xMjItLjIyOS4yODEtLjQxNi43NTQtLjY5IDEuMjg3LS42OS44NTggMCAxLjU1OS43MDkgMS41NTkgMS41NzUgMCAuNDcyLS4xNTYuODY2LS40NjggMS4xMDNsLS45MzUgMS4wMjNjLS41MDUuNDQ3LS44MDYgMS4wNDktLjkwMSAxLjcyMmwtLjAwNS4wNjR2LjExN2EuNzUuNzUgMCAwIDAgLjc1LjY5NmwuMDkyLS4wMDVjLjM5My0uMDQzLjcxNC0uMzU4Ljc0My0uNzR6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgdHlwZSB7IFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvZmlsbGVkL3N1Z2dlc3RlZC9oZWxwLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBIZWxwRmlsbGVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiamltdS11aVwiO1xyXG5pbXBvcnQgeyBIZWxwRmlsbGVkIH0gZnJvbSBcImppbXUtaWNvbnMvZmlsbGVkL3N1Z2dlc3RlZC9oZWxwXCI7XHJcblxyXG5pbnRlcmZhY2UgSGVscFRvb2x0aXBQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGdhcDogXCI1cHhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInN0YXJ0XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcInN0YXJ0XCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiN3B4XCIsXHJcbiAgfSxcclxuICB0b29sdGlwOiB7XHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbn07XHJcbmNvbnN0IFRpdGxlV2l0aFRvb2x0aXA6IFJlYWN0LkZDPEhlbHBUb29sdGlwUHJvcHM+ID0gKHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+e3RpdGxlfTwvaDQ+XHJcbiAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICByb2xlPVwidG9vbHRpcFwiXHJcbiAgICAgICAgZW50ZXJEZWxheT17MTAwfVxyXG4gICAgICAgIGVudGVyTmV4dERlbGF5PXswfVxyXG4gICAgICAgIGVudGVyVG91Y2hEZWxheT17NzAwfVxyXG4gICAgICAgIGxlYXZlRGVsYXk9ezB9XHJcbiAgICAgICAgbGVhdmVUb3VjaERlbGF5PXsxNTAwfVxyXG4gICAgICAgIG9mZnNldE9wdGlvbnM9ezR9XHJcbiAgICAgICAgdGl0bGU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRvb2x0aXB9PlxyXG4gICAgICAgICAgPEhlbHBGaWxsZWQgc2l6ZT17MTV9IGNvbG9yPVwiIzgwODA4MFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZVdpdGhUb29sdGlwO1xyXG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxlKHRyYW5zbGF0aW9ucykge1xyXG4gIC8vIERldGVjdGEgbG9jYWxlIGRlc2RlIGxhIFVSTCAoP2xvY2FsZT1lbikgbyBmYWxsYmFjayBhIFwiZXNcIlxyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgY29uc3QgbG9jYWxlID0gc2VhcmNoUGFyYW1zLmdldChcImxvY2FsZVwiKSB8fCBcImVzXCI7XHJcblxyXG4gIGNvbnN0IHQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiAoa2V5OiBrZXlvZiB0eXBlb2YgdHJhbnNsYXRpb25zW1wiZXNcIl0pID0+XHJcbiAgICAgIHRyYW5zbGF0aW9uc1tsb2NhbGUgYXMgXCJlc1wiIHwgXCJlblwiXVtrZXldID8/IGtleTtcclxuICB9LCBbbG9jYWxlXSk7XHJcblxyXG4gIHJldHVybiB7IHQsIGxvY2FsZSB9O1xyXG59IiwiZXhwb3J0IGNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcclxuICBlczoge1xyXG4gICAgd2lkZ2V0TGFiZWw6IFwiw41uZGljZXMgZXNwZWN0cmFsZXNcIixcclxuICAgIHNwZWN0cmFsUnVsZTogXCJEZWJlcyBzZWxlY2Npb25hciB1bmEgaW1hZ2VuIHBhcmEgdXRpbGl6YXIgbG9zIGluZGljZXMgZXNwZWN0cmFsZXNcIixcclxuICAgIHNlbGVjdE5hbWU6IFwiU2VsZWNjaW9uYSBmw7NybXVsYTpcIixcclxuICAgIG5kdmk6IFwiw41uZGljZSBub3JtYWxpemFkbyBkZSB2ZWdldGFjacOzblwiLFxyXG4gICAgc2F2aTogXCLDjW5kaWNlIGRlIHZlZ2V0YWNpw7NuIGFqdXN0YWRvIGFsIHN1ZWxvXCIsXHJcbiAgICBuZHdpOiBcIsONbmRpY2UgZGUgYWd1YSBkZSBkaWZlcmVuY2lhIG5vcm1hbGl6YWRhXCIsXHJcbiAgICBiYWk6IFwiw41uZGljZSBkZSDDoXJlYXMgcXVlbWFkYXNcIixcclxuICAgIGFwcGx5OiBcIkFwbGljYXJcIlxyXG4gIH0sXHJcbiAgZW46IHtcclxuICAgIHdpZGdldExhYmVsOiBcIlNwZWN0cmFsIGluZGljZXNcIixcclxuICAgIHNwZWN0cmFsUnVsZTogXCJZb3UgbXVzdCBzZWxlY3QgYW4gaW1hZ2UgdG8gdXNlIHRoZSBzcGVjdHJhbCBpbmRpY2VzXCIsXHJcbiAgICBzZWxlY3ROYW1lOiBcIlNlbGVjdCBmb3JtdWxhOlwiLFxyXG4gICAgbmR2aTogXCJOb3JtYWxpemVkIHZlZ2V0YXRpb24gaW5kZXhcIixcclxuICAgIHNhdmk6IFwiU29pbC1hZGp1c3RlZCB2ZWdldGF0aW9uIGluZGV4XCIsXHJcbiAgICBuZHdpOiBcIk5vcm1hbGl6ZWQgZGlmZmVyZW5jZSB3YXRlciBpbmRleFwiLFxyXG4gICAgYmFpOiBcIkJ1cm5lZCBBcmVhIEluZGV4XCIsXHJcbiAgICBhcHBseTogXCJBcHBseVwiXHJcbiAgfSxcclxufTtcclxuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgcmV0dXJuIHggPT09IHkgJiYgKHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5KSB8fCB4ICE9PSB4ICYmIHkgIT09IHkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgO1xufVxuXG52YXIgb2JqZWN0SXMgPSB0eXBlb2YgT2JqZWN0LmlzID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmlzIDogaXM7XG5cbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlO1xuXG4vLyBmb3IgQ29tbW9uSlMgaW50ZXJvcC5cblxudmFyIHVzZVJlZiA9IFJlYWN0LnVzZVJlZixcbiAgICB1c2VFZmZlY3QgPSBSZWFjdC51c2VFZmZlY3QsXG4gICAgdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8sXG4gICAgdXNlRGVidWdWYWx1ZSA9IFJlYWN0LnVzZURlYnVnVmFsdWU7IC8vIFNhbWUgYXMgdXNlU3luY0V4dGVybmFsU3RvcmUsIGJ1dCBzdXBwb3J0cyBzZWxlY3RvciBhbmQgaXNFcXVhbCBhcmd1bWVudHMuXG5cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90LCBzZWxlY3RvciwgaXNFcXVhbCkge1xuICAvLyBVc2UgdGhpcyB0byB0cmFjayB0aGUgcmVuZGVyZWQgc25hcHNob3QuXG4gIHZhciBpbnN0UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgaW5zdDtcblxuICBpZiAoaW5zdFJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgaW5zdCA9IHtcbiAgICAgIGhhc1ZhbHVlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBudWxsXG4gICAgfTtcbiAgICBpbnN0UmVmLmN1cnJlbnQgPSBpbnN0O1xuICB9IGVsc2Uge1xuICAgIGluc3QgPSBpbnN0UmVmLmN1cnJlbnQ7XG4gIH1cblxuICB2YXIgX3VzZU1lbW8gPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUcmFjayB0aGUgbWVtb2l6ZWQgc3RhdGUgdXNpbmcgY2xvc3VyZSB2YXJpYWJsZXMgdGhhdCBhcmUgbG9jYWwgdG8gdGhpc1xuICAgIC8vIG1lbW9pemVkIGluc3RhbmNlIG9mIGEgZ2V0U25hcHNob3QgZnVuY3Rpb24uIEludGVudGlvbmFsbHkgbm90IHVzaW5nIGFcbiAgICAvLyB1c2VSZWYgaG9vaywgYmVjYXVzZSB0aGF0IHN0YXRlIHdvdWxkIGJlIHNoYXJlZCBhY3Jvc3MgYWxsIGNvbmN1cnJlbnRcbiAgICAvLyBjb3BpZXMgb2YgdGhlIGhvb2svY29tcG9uZW50LlxuICAgIHZhciBoYXNNZW1vID0gZmFsc2U7XG4gICAgdmFyIG1lbW9pemVkU25hcHNob3Q7XG4gICAgdmFyIG1lbW9pemVkU2VsZWN0aW9uO1xuXG4gICAgdmFyIG1lbW9pemVkU2VsZWN0b3IgPSBmdW5jdGlvbiAobmV4dFNuYXBzaG90KSB7XG4gICAgICBpZiAoIWhhc01lbW8pIHtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgdGhlIGhvb2sgaXMgY2FsbGVkLCB0aGVyZSBpcyBubyBtZW1vaXplZCByZXN1bHQuXG4gICAgICAgIGhhc01lbW8gPSB0cnVlO1xuICAgICAgICBtZW1vaXplZFNuYXBzaG90ID0gbmV4dFNuYXBzaG90O1xuXG4gICAgICAgIHZhciBfbmV4dFNlbGVjdGlvbiA9IHNlbGVjdG9yKG5leHRTbmFwc2hvdCk7XG5cbiAgICAgICAgaWYgKGlzRXF1YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIEV2ZW4gaWYgdGhlIHNlbGVjdG9yIGhhcyBjaGFuZ2VkLCB0aGUgY3VycmVudGx5IHJlbmRlcmVkIHNlbGVjdGlvblxuICAgICAgICAgIC8vIG1heSBiZSBlcXVhbCB0byB0aGUgbmV3IHNlbGVjdGlvbi4gV2Ugc2hvdWxkIGF0dGVtcHQgdG8gcmV1c2UgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCB2YWx1ZSBpZiBwb3NzaWJsZSwgdG8gcHJlc2VydmUgZG93bnN0cmVhbSBtZW1vaXphdGlvbnMuXG4gICAgICAgICAgaWYgKGluc3QuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2VsZWN0aW9uID0gaW5zdC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKGlzRXF1YWwoY3VycmVudFNlbGVjdGlvbiwgX25leHRTZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gY3VycmVudFNlbGVjdGlvbjtcbiAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRTZWxlY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBfbmV4dFNlbGVjdGlvbjtcbiAgICAgICAgcmV0dXJuIF9uZXh0U2VsZWN0aW9uO1xuICAgICAgfSAvLyBXZSBtYXkgYmUgYWJsZSB0byByZXVzZSB0aGUgcHJldmlvdXMgaW52b2NhdGlvbidzIHJlc3VsdC5cblxuXG4gICAgICAvLyBXZSBtYXkgYmUgYWJsZSB0byByZXVzZSB0aGUgcHJldmlvdXMgaW52b2NhdGlvbidzIHJlc3VsdC5cbiAgICAgIHZhciBwcmV2U25hcHNob3QgPSBtZW1vaXplZFNuYXBzaG90O1xuICAgICAgdmFyIHByZXZTZWxlY3Rpb24gPSBtZW1vaXplZFNlbGVjdGlvbjtcblxuICAgICAgaWYgKG9iamVjdElzKHByZXZTbmFwc2hvdCwgbmV4dFNuYXBzaG90KSkge1xuICAgICAgICAvLyBUaGUgc25hcHNob3QgaXMgdGhlIHNhbWUgYXMgbGFzdCB0aW1lLiBSZXVzZSB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLlxuICAgICAgICByZXR1cm4gcHJldlNlbGVjdGlvbjtcbiAgICAgIH0gLy8gVGhlIHNuYXBzaG90IGhhcyBjaGFuZ2VkLCBzbyB3ZSBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgc2VsZWN0aW9uLlxuXG5cbiAgICAgIC8vIFRoZSBzbmFwc2hvdCBoYXMgY2hhbmdlZCwgc28gd2UgbmVlZCB0byBjb21wdXRlIGEgbmV3IHNlbGVjdGlvbi5cbiAgICAgIHZhciBuZXh0U2VsZWN0aW9uID0gc2VsZWN0b3IobmV4dFNuYXBzaG90KTsgLy8gSWYgYSBjdXN0b20gaXNFcXVhbCBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdXNlIHRoYXQgdG8gY2hlY2sgaWYgdGhlIGRhdGFcbiAgICAgIC8vIGhhcyBjaGFuZ2VkLiBJZiBpdCBoYXNuJ3QsIHJldHVybiB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLiBUaGF0IHNpZ25hbHNcbiAgICAgIC8vIHRvIFJlYWN0IHRoYXQgdGhlIHNlbGVjdGlvbnMgYXJlIGNvbmNlcHR1YWxseSBlcXVhbCwgYW5kIHdlIGNhbiBiYWlsXG4gICAgICAvLyBvdXQgb2YgcmVuZGVyaW5nLlxuXG4gICAgICAvLyBJZiBhIGN1c3RvbSBpc0VxdWFsIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB1c2UgdGhhdCB0byBjaGVjayBpZiB0aGUgZGF0YVxuICAgICAgLy8gaGFzIGNoYW5nZWQuIElmIGl0IGhhc24ndCwgcmV0dXJuIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uIFRoYXQgc2lnbmFsc1xuICAgICAgLy8gdG8gUmVhY3QgdGhhdCB0aGUgc2VsZWN0aW9ucyBhcmUgY29uY2VwdHVhbGx5IGVxdWFsLCBhbmQgd2UgY2FuIGJhaWxcbiAgICAgIC8vIG91dCBvZiByZW5kZXJpbmcuXG4gICAgICBpZiAoaXNFcXVhbCAhPT0gdW5kZWZpbmVkICYmIGlzRXF1YWwocHJldlNlbGVjdGlvbiwgbmV4dFNlbGVjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHByZXZTZWxlY3Rpb247XG4gICAgICB9XG5cbiAgICAgIG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG4gICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IG5leHRTZWxlY3Rpb247XG4gICAgICByZXR1cm4gbmV4dFNlbGVjdGlvbjtcbiAgICB9OyAvLyBBc3NpZ25pbmcgdGhpcyB0byBhIGNvbnN0YW50IHNvIHRoYXQgRmxvdyBrbm93cyBpdCBjYW4ndCBjaGFuZ2UuXG5cblxuICAgIC8vIEFzc2lnbmluZyB0aGlzIHRvIGEgY29uc3RhbnQgc28gdGhhdCBGbG93IGtub3dzIGl0IGNhbid0IGNoYW5nZS5cbiAgICB2YXIgbWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCA9IGdldFNlcnZlclNuYXBzaG90ID09PSB1bmRlZmluZWQgPyBudWxsIDogZ2V0U2VydmVyU25hcHNob3Q7XG5cbiAgICB2YXIgZ2V0U25hcHNob3RXaXRoU2VsZWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihnZXRTbmFwc2hvdCgpKTtcbiAgICB9O1xuXG4gICAgdmFyIGdldFNlcnZlclNuYXBzaG90V2l0aFNlbGVjdG9yID0gbWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZW1vaXplZFNlbGVjdG9yKG1heWJlR2V0U2VydmVyU25hcHNob3QoKSk7XG4gICAgfTtcbiAgICByZXR1cm4gW2dldFNuYXBzaG90V2l0aFNlbGVjdG9yLCBnZXRTZXJ2ZXJTbmFwc2hvdFdpdGhTZWxlY3Rvcl07XG4gIH0sIFtnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QsIHNlbGVjdG9yLCBpc0VxdWFsXSksXG4gICAgICBnZXRTZWxlY3Rpb24gPSBfdXNlTWVtb1swXSxcbiAgICAgIGdldFNlcnZlclNlbGVjdGlvbiA9IF91c2VNZW1vWzFdO1xuXG4gIHZhciB2YWx1ZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U2VsZWN0aW9uLCBnZXRTZXJ2ZXJTZWxlY3Rpb24pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGluc3QuaGFzVmFsdWUgPSB0cnVlO1xuICAgIGluc3QudmFsdWUgPSB2YWx1ZTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHVzZURlYnVnVmFsdWUodmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjtcbiAgICAgICAgICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgIFxuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gc3JjL2luZGV4LnRzXG5pbXBvcnQgKiBhcyBSZWFjdDIgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjIgfSBmcm9tIFwidXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qc1wiO1xuXG4vLyBzcmMvdXRpbHMvcmVhY3QudHNcbmltcG9ydCAqIGFzIFJlYWN0T3JpZ2luYWwgZnJvbSBcInJlYWN0XCI7XG52YXIgUmVhY3QgPSAoXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICAvLyBAdHMtaWdub3JlXG4gIFwiZGVmYXVsdFwiIGluIFJlYWN0T3JpZ2luYWwgPyBSZWFjdE9yaWdpbmFsW1wiZGVmYXVsdFwiXSA6IFJlYWN0T3JpZ2luYWxcbik7XG5cbi8vIHNyYy9jb21wb25lbnRzL0NvbnRleHQudHNcbnZhciBDb250ZXh0S2V5ID0gU3ltYm9sLmZvcihgcmVhY3QtcmVkdXgtY29udGV4dGApO1xudmFyIGdUID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogKFxuICAvKiBmYWxsIGJhY2sgdG8gYSBwZXItbW9kdWxlIHNjb3BlIChwcmUtOC4xIGJlaGF2aW91cikgaWYgYGdsb2JhbFRoaXNgIGlzIG5vdCBhdmFpbGFibGUgKi9cbiAge31cbik7XG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICBpZiAoIVJlYWN0LmNyZWF0ZUNvbnRleHQpXG4gICAgcmV0dXJuIHt9O1xuICBjb25zdCBjb250ZXh0TWFwID0gZ1RbQ29udGV4dEtleV0gPz8gKGdUW0NvbnRleHRLZXldID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gIGxldCByZWFsQ29udGV4dCA9IGNvbnRleHRNYXAuZ2V0KFJlYWN0LmNyZWF0ZUNvbnRleHQpO1xuICBpZiAoIXJlYWxDb250ZXh0KSB7XG4gICAgcmVhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgcmVhbENvbnRleHQuZGlzcGxheU5hbWUgPSBcIlJlYWN0UmVkdXhcIjtcbiAgICB9XG4gICAgY29udGV4dE1hcC5zZXQoUmVhY3QuY3JlYXRlQ29udGV4dCwgcmVhbENvbnRleHQpO1xuICB9XG4gIHJldHVybiByZWFsQ29udGV4dDtcbn1cbnZhciBSZWFjdFJlZHV4Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBnZXRDb250ZXh0KCk7XG5cbi8vIHNyYy91dGlscy91c2VTeW5jRXh0ZXJuYWxTdG9yZS50c1xudmFyIG5vdEluaXRpYWxpemVkID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJ1U0VTIG5vdCBpbml0aWFsaXplZCFcIik7XG59O1xuXG4vLyBzcmMvaG9va3MvdXNlUmVkdXhDb250ZXh0LnRzXG5mdW5jdGlvbiBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gdXNlUmVkdXhDb250ZXh0MigpIHtcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KGNvbnRleHQpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWNvbnRleHRWYWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcImNvdWxkIG5vdCBmaW5kIHJlYWN0LXJlZHV4IGNvbnRleHQgdmFsdWU7IHBsZWFzZSBlbnN1cmUgdGhlIGNvbXBvbmVudCBpcyB3cmFwcGVkIGluIGEgPFByb3ZpZGVyPlwiXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICB9O1xufVxudmFyIHVzZVJlZHV4Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVSZWR1eENvbnRleHRIb29rKCk7XG5cbi8vIHNyYy9ob29rcy91c2VTZWxlY3Rvci50c1xudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gbm90SW5pdGlhbGl6ZWQ7XG52YXIgaW5pdGlhbGl6ZVVzZVNlbGVjdG9yID0gKGZuKSA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gZm47XG59O1xudmFyIHJlZkVxdWFsaXR5ID0gKGEsIGIpID0+IGEgPT09IGI7XG5mdW5jdGlvbiBjcmVhdGVTZWxlY3Rvckhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVJlZHV4Q29udGV4dDIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVJlZHV4Q29udGV4dCA6IGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dCk7XG4gIGNvbnN0IHVzZVNlbGVjdG9yMiA9IChzZWxlY3RvciwgZXF1YWxpdHlGbk9yT3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyBlcXVhbGl0eUZuID0gcmVmRXF1YWxpdHksIGRldk1vZGVDaGVja3MgPSB7fSB9ID0gdHlwZW9mIGVxdWFsaXR5Rm5Pck9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIiA/IHsgZXF1YWxpdHlGbjogZXF1YWxpdHlGbk9yT3B0aW9ucyB9IDogZXF1YWxpdHlGbk9yT3B0aW9ucztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yYCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvcmApO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlcXVhbGl0eUZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYW4gZXF1YWxpdHkgZnVuY3Rpb24gdG8gdXNlU2VsZWN0b3JgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgZ2V0U2VydmVyU3RhdGUsXG4gICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVja1xuICAgIH0gPSB1c2VSZWR1eENvbnRleHQyKCk7XG4gICAgY29uc3QgZmlyc3RSdW4gPSBSZWFjdC51c2VSZWYodHJ1ZSk7XG4gICAgY29uc3Qgd3JhcHBlZFNlbGVjdG9yID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgICB7XG4gICAgICAgIFtzZWxlY3Rvci5uYW1lXShzdGF0ZSkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrOiBmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayxcbiAgICAgICAgICAgICAgc3RhYmlsaXR5Q2hlY2s6IGZpbmFsU3RhYmlsaXR5Q2hlY2tcbiAgICAgICAgICAgIH0gPSB7XG4gICAgICAgICAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgICAgICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2ssXG4gICAgICAgICAgICAgIC4uLmRldk1vZGVDaGVja3NcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZmluYWxTdGFiaWxpdHlDaGVjayA9PT0gXCJhbHdheXNcIiB8fCBmaW5hbFN0YWJpbGl0eUNoZWNrID09PSBcIm9uY2VcIiAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRvQ29tcGFyZSA9IHNlbGVjdG9yKHN0YXRlKTtcbiAgICAgICAgICAgICAgaWYgKCFlcXVhbGl0eUZuKHNlbGVjdGVkLCB0b0NvbXBhcmUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAoeyBzdGFjayB9ID0gZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgIFwiU2VsZWN0b3IgXCIgKyAoc2VsZWN0b3IubmFtZSB8fCBcInVua25vd25cIikgKyBcIiByZXR1cm5lZCBhIGRpZmZlcmVudCByZXN1bHQgd2hlbiBjYWxsZWQgd2l0aCB0aGUgc2FtZSBwYXJhbWV0ZXJzLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy5cXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gYSBuZXcgcmVmZXJlbmNlIChzdWNoIGFzIGFuIG9iamVjdCBvciBhbiBhcnJheSkgc2hvdWxkIGJlIG1lbW9pemVkOiBodHRwczovL3JlZHV4LmpzLm9yZy91c2FnZS9kZXJpdmluZy1kYXRhLXNlbGVjdG9ycyNvcHRpbWl6aW5nLXNlbGVjdG9ycy13aXRoLW1lbW9pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQyOiB0b0NvbXBhcmUsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrID09PSBcImFsd2F5c1wiIHx8IGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrID09PSBcIm9uY2VcIiAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhY2sgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICh7IHN0YWNrIH0gPSBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgXCJTZWxlY3RvciBcIiArIChzZWxlY3Rvci5uYW1lIHx8IFwidW5rbm93blwiKSArIFwiIHJldHVybmVkIHRoZSByb290IHN0YXRlIHdoZW4gY2FsbGVkLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy5cXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gdGhlIGVudGlyZSBzdGF0ZSBhcmUgYWxtb3N0IGNlcnRhaW5seSBhIG1pc3Rha2UsIGFzIHRoZXkgd2lsbCBjYXVzZSBhIHJlcmVuZGVyIHdoZW5ldmVyICphbnl0aGluZyogaW4gc3RhdGUgY2hhbmdlcy5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhY2sgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaXJzdFJ1bi5jdXJyZW50KVxuICAgICAgICAgICAgICBmaXJzdFJ1bi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgfVtzZWxlY3Rvci5uYW1lXSxcbiAgICAgIFtzZWxlY3Rvciwgc3RhYmlsaXR5Q2hlY2ssIGRldk1vZGVDaGVja3Muc3RhYmlsaXR5Q2hlY2tdXG4gICAgKTtcbiAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IoXG4gICAgICBzdWJzY3JpcHRpb24uYWRkTmVzdGVkU3ViLFxuICAgICAgc3RvcmUuZ2V0U3RhdGUsXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZSB8fCBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgIHdyYXBwZWRTZWxlY3RvcixcbiAgICAgIGVxdWFsaXR5Rm5cbiAgICApO1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUoc2VsZWN0ZWRTdGF0ZSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkU3RhdGU7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlU2VsZWN0b3IyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VTZWxlY3RvcjJcbiAgfSk7XG4gIHJldHVybiB1c2VTZWxlY3RvcjI7XG59XG52YXIgdXNlU2VsZWN0b3IgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlU2VsZWN0b3JIb29rKCk7XG5cbi8vIHNyYy91dGlscy9yZWFjdC1pcy50c1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpO1xudmFyIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc2VydmVyX2NvbnRleHRcIik7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm9mZnNjcmVlblwiKTtcbnZhciBSRUFDVF9DTElFTlRfUkVGRVJFTkNFID0gU3ltYm9sLmZvcihcInJlYWN0LmNsaWVudC5yZWZlcmVuY2VcIik7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSBcIm9iamVjdFwiICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DTElFTlRfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG9iamVjdC50eXBlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBjb25zdCAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRToge1xuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2b2lkIDA7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuXG4vLyBzcmMvdXRpbHMvd2FybmluZy50c1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbi8vIHNyYy9jb25uZWN0L3ZlcmlmeVN1YnNlbGVjdG9ycy50c1xuZnVuY3Rpb24gdmVyaWZ5KHNlbGVjdG9yLCBtZXRob2ROYW1lKSB7XG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdmFsdWUgZm9yICR7bWV0aG9kTmFtZX0gaW4gY29ubmVjdC5gKTtcbiAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09PSBcIm1hcFN0YXRlVG9Qcm9wc1wiIHx8IG1ldGhvZE5hbWUgPT09IFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWxlY3RvciwgXCJkZXBlbmRzT25Pd25Qcm9wc1wiKSkge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgYFRoZSBzZWxlY3RvciBmb3IgJHttZXRob2ROYW1lfSBvZiBjb25uZWN0IGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy5gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKSB7XG4gIHZlcmlmeShtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpO1xuICB2ZXJpZnkobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKTtcbiAgdmVyaWZ5KG1lcmdlUHJvcHMsIFwibWVyZ2VQcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LnRzXG5mdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIHtcbiAgYXJlU3RhdGVzRXF1YWwsXG4gIGFyZU93blByb3BzRXF1YWwsXG4gIGFyZVN0YXRlUHJvcHNFcXVhbFxufSkge1xuICBsZXQgaGFzUnVuQXRMZWFzdE9uY2UgPSBmYWxzZTtcbiAgbGV0IHN0YXRlO1xuICBsZXQgb3duUHJvcHM7XG4gIGxldCBzdGF0ZVByb3BzO1xuICBsZXQgZGlzcGF0Y2hQcm9wcztcbiAgbGV0IG1lcmdlZFByb3BzO1xuICBmdW5jdGlvbiBoYW5kbGVGaXJzdENhbGwoZmlyc3RTdGF0ZSwgZmlyc3RPd25Qcm9wcykge1xuICAgIHN0YXRlID0gZmlyc3RTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IGZpcnN0T3duUHJvcHM7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIGhhc1J1bkF0TGVhc3RPbmNlID0gdHJ1ZTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpIHtcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wcygpIHtcbiAgICBpZiAobWFwU3RhdGVUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3U3RhdGUoKSB7XG4gICAgY29uc3QgbmV4dFN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpXG4gICAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICBjb25zdCBwcm9wc0NoYW5nZWQgPSAhYXJlT3duUHJvcHNFcXVhbChuZXh0T3duUHJvcHMsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZUNoYW5nZWQgPSAhYXJlU3RhdGVzRXF1YWwoXG4gICAgICBuZXh0U3RhdGUsXG4gICAgICBzdGF0ZSxcbiAgICAgIG5leHRPd25Qcm9wcyxcbiAgICAgIG93blByb3BzXG4gICAgKTtcbiAgICBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IG5leHRPd25Qcm9wcztcbiAgICBpZiAocHJvcHNDaGFuZ2VkICYmIHN0YXRlQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdQcm9wcygpO1xuICAgIGlmIChzdGF0ZUNoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3U3RhdGUoKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIHtcbiAgaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgaW5pdE1lcmdlUHJvcHMsXG4gIC4uLm9wdGlvbnNcbn0pIHtcbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gaW5pdE1hcFN0YXRlVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBjb25zdCBtZXJnZVByb3BzID0gaW5pdE1lcmdlUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKTtcbiAgfVxuICByZXR1cm4gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBvcHRpb25zKTtcbn1cblxuLy8gc3JjL3V0aWxzL2JpbmRBY3Rpb25DcmVhdG9ycy50c1xuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBjb25zdCBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgY29uc3QgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9ICguLi5hcmdzKSA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yKC4uLmFyZ3MpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cbi8vIHNyYy91dGlscy9pc1BsYWluT2JqZWN0LnRzXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiB8fCBvYmogPT09IG51bGwpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICBpZiAocHJvdG8gPT09IG51bGwpXG4gICAgcmV0dXJuIHRydWU7XG4gIGxldCBiYXNlUHJvdG8gPSBwcm90bztcbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pICE9PSBudWxsKSB7XG4gICAgYmFzZVByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90byk7XG4gIH1cbiAgcmV0dXJuIHByb3RvID09PSBiYXNlUHJvdG87XG59XG5cbi8vIHNyYy91dGlscy92ZXJpZnlQbGFpbk9iamVjdC50c1xuZnVuY3Rpb24gdmVyaWZ5UGxhaW5PYmplY3QodmFsdWUsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuaW5nKFxuICAgICAgYCR7bWV0aG9kTmFtZX0oKSBpbiAke2Rpc3BsYXlOYW1lfSBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdC4gSW5zdGVhZCByZWNlaXZlZCAke3ZhbHVlfS5gXG4gICAgKTtcbiAgfVxufVxuXG4vLyBzcmMvY29ubmVjdC93cmFwTWFwVG9Qcm9wcy50c1xuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNDb25zdGFudChnZXRDb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdENvbnN0YW50U2VsZWN0b3IoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBjb25zdGFudCA9IGdldENvbnN0YW50KGRpc3BhdGNoKTtcbiAgICBmdW5jdGlvbiBjb25zdGFudFNlbGVjdG9yKCkge1xuICAgICAgcmV0dXJuIGNvbnN0YW50O1xuICAgIH1cbiAgICBjb25zdGFudFNlbGVjdG9yLmRlcGVuZHNPbk93blByb3BzID0gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnN0YW50U2VsZWN0b3I7XG4gIH07XG59XG5mdW5jdGlvbiBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzID8gQm9vbGVhbihtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSA6IG1hcFRvUHJvcHMubGVuZ3RoICE9PSAxO1xufVxuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLCB7IGRpc3BsYXlOYW1lIH0pIHtcbiAgICBjb25zdCBwcm94eSA9IGZ1bmN0aW9uIG1hcFRvUHJvcHNQcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICByZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPyBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIDogcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIHZvaWQgMCk7XG4gICAgfTtcbiAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IHRydWU7XG4gICAgcHJveHkubWFwVG9Qcm9wcyA9IGZ1bmN0aW9uIGRldGVjdEZhY3RvcnlBbmRWZXJpZnkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IG1hcFRvUHJvcHM7XG4gICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpO1xuICAgICAgbGV0IHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICBpZiAodHlwZW9mIHByb3BzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IHByb3BzO1xuICAgICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKHByb3BzKTtcbiAgICAgICAgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHZlcmlmeVBsYWluT2JqZWN0KHByb3BzLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG59XG5cbi8vIHNyYy9jb25uZWN0L2ludmFsaWRBcmdGYWN0b3J5LnRzXG5mdW5jdGlvbiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShhcmcsIG5hbWUpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgb3B0aW9ucykgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIHZhbHVlIG9mIHR5cGUgJHt0eXBlb2YgYXJnfSBmb3IgJHtuYW1lfSBhcmd1bWVudCB3aGVuIGNvbm5lY3RpbmcgY29tcG9uZW50ICR7b3B0aW9ucy53cmFwcGVkQ29tcG9uZW50TmFtZX0uYFxuICAgICk7XG4gIH07XG59XG5cbi8vIHNyYy9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcy50c1xuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcyAmJiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSBcIm9iamVjdFwiID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChcbiAgICAoZGlzcGF0Y2gpID0+IChcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGJpbmRBY3Rpb25DcmVhdG9ycyhtYXBEaXNwYXRjaFRvUHJvcHMsIGRpc3BhdGNoKVxuICAgIClcbiAgKSA6ICFtYXBEaXNwYXRjaFRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KChkaXNwYXRjaCkgPT4gKHtcbiAgICBkaXNwYXRjaFxuICB9KSkgOiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSBcImZ1bmN0aW9uXCIgPyAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpXG4gICkgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9tYXBTdGF0ZVRvUHJvcHMudHNcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwU3RhdGVUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudCgoKSA9PiAoe30pKSA6IHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIilcbiAgKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L21lcmdlUHJvcHMudHNcbmZ1bmN0aW9uIGRlZmF1bHRNZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gIHJldHVybiB7IC4uLm93blByb3BzLCAuLi5zdGF0ZVByb3BzLCAuLi5kaXNwYXRjaFByb3BzIH07XG59XG5mdW5jdGlvbiB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdE1lcmdlUHJvcHNQcm94eShkaXNwYXRjaCwgeyBkaXNwbGF5TmFtZSwgYXJlTWVyZ2VkUHJvcHNFcXVhbCB9KSB7XG4gICAgbGV0IGhhc1J1bk9uY2UgPSBmYWxzZTtcbiAgICBsZXQgbWVyZ2VkUHJvcHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlUHJvcHNQcm94eShzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAgICAgY29uc3QgbmV4dE1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgICBpZiAoaGFzUnVuT25jZSkge1xuICAgICAgICBpZiAoIWFyZU1lcmdlZFByb3BzRXF1YWwobmV4dE1lcmdlZFByb3BzLCBtZXJnZWRQcm9wcykpXG4gICAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNSdW5PbmNlID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgdmVyaWZ5UGxhaW5PYmplY3QobWVyZ2VkUHJvcHMsIGRpc3BsYXlOYW1lLCBcIm1lcmdlUHJvcHNcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gKCkgPT4gZGVmYXVsdE1lcmdlUHJvcHMgOiB0eXBlb2YgbWVyZ2VQcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWVyZ2VQcm9wcywgXCJtZXJnZVByb3BzXCIpO1xufVxuXG4vLyBzcmMvdXRpbHMvYmF0Y2gudHNcbmZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soKTtcbn1cblxuLy8gc3JjL3V0aWxzL1N1YnNjcmlwdGlvbi50c1xuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICBsZXQgZmlyc3QgPSBudWxsO1xuICBsZXQgbGFzdCA9IG51bGw7XG4gIHJldHVybiB7XG4gICAgY2xlYXIoKSB7XG4gICAgICBmaXJzdCA9IG51bGw7XG4gICAgICBsYXN0ID0gbnVsbDtcbiAgICB9LFxuICAgIG5vdGlmeSgpIHtcbiAgICAgIGRlZmF1bHROb29wQmF0Y2goKCkgPT4ge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcbiAgICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKTtcbiAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0KCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gW107XG4gICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcbiAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgfSxcbiAgICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgIGxldCBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBsYXN0ID0ge1xuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgcHJldjogbGFzdFxuICAgICAgfTtcbiAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3QgPSBsaXN0ZW5lcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgZmlyc3QgPT09IG51bGwpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGxpc3RlbmVyLm5leHQpIHtcbiAgICAgICAgICBsaXN0ZW5lci5uZXh0LnByZXYgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3QgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgICAgbGlzdGVuZXIucHJldi5uZXh0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaXJzdCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxudmFyIG51bGxMaXN0ZW5lcnMgPSB7XG4gIG5vdGlmeSgpIHtcbiAgfSxcbiAgZ2V0OiAoKSA9PiBbXVxufTtcbmZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSwgcGFyZW50U3ViKSB7XG4gIGxldCB1bnN1YnNjcmliZTtcbiAgbGV0IGxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gIGxldCBzdWJzY3JpcHRpb25zQW1vdW50ID0gMDtcbiAgbGV0IHNlbGZTdWJzY3JpYmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGFkZE5lc3RlZFN1YihsaXN0ZW5lcikge1xuICAgIHRyeVN1YnNjcmliZSgpO1xuICAgIGNvbnN0IGNsZWFudXBMaXN0ZW5lciA9IGxpc3RlbmVycy5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghcmVtb3ZlZCkge1xuICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgY2xlYW51cExpc3RlbmVyKCk7XG4gICAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBub3RpZnlOZXN0ZWRTdWJzKCkge1xuICAgIGxpc3RlbmVycy5ub3RpZnkoKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VXcmFwcGVyKCkge1xuICAgIGlmIChzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBzZWxmU3Vic2NyaWJlZDtcbiAgfVxuICBmdW5jdGlvbiB0cnlTdWJzY3JpYmUoKSB7XG4gICAgc3Vic2NyaXB0aW9uc0Ftb3VudCsrO1xuICAgIGlmICghdW5zdWJzY3JpYmUpIHtcbiAgICAgIHVuc3Vic2NyaWJlID0gcGFyZW50U3ViID8gcGFyZW50U3ViLmFkZE5lc3RlZFN1YihoYW5kbGVDaGFuZ2VXcmFwcGVyKSA6IHN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2VXcmFwcGVyKTtcbiAgICAgIGxpc3RlbmVycyA9IGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpIHtcbiAgICBzdWJzY3JpcHRpb25zQW1vdW50LS07XG4gICAgaWYgKHVuc3Vic2NyaWJlICYmIHN1YnNjcmlwdGlvbnNBbW91bnQgPT09IDApIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICB1bnN1YnNjcmliZSA9IHZvaWQgMDtcbiAgICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgbGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5U3Vic2NyaWJlU2VsZigpIHtcbiAgICBpZiAoIXNlbGZTdWJzY3JpYmVkKSB7XG4gICAgICBzZWxmU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICB0cnlTdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmVTZWxmKCkge1xuICAgIGlmIChzZWxmU3Vic2NyaWJlZCkge1xuICAgICAgc2VsZlN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHtcbiAgICBhZGROZXN0ZWRTdWIsXG4gICAgbm90aWZ5TmVzdGVkU3VicyxcbiAgICBoYW5kbGVDaGFuZ2VXcmFwcGVyLFxuICAgIGlzU3Vic2NyaWJlZCxcbiAgICB0cnlTdWJzY3JpYmU6IHRyeVN1YnNjcmliZVNlbGYsXG4gICAgdHJ5VW5zdWJzY3JpYmU6IHRyeVVuc3Vic2NyaWJlU2VsZixcbiAgICBnZXRMaXN0ZW5lcnM6ICgpID0+IGxpc3RlbmVyc1xuICB9O1xuICByZXR1cm4gc3Vic2NyaXB0aW9uO1xufVxuXG4vLyBzcmMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC50c1xudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpO1xudmFyIGlzUmVhY3ROYXRpdmUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSBcIlJlYWN0TmF0aXZlXCI7XG52YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IGNhblVzZURPTSB8fCBpc1JlYWN0TmF0aXZlID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0O1xuXG4vLyBzcmMvdXRpbHMvc2hhbGxvd0VxdWFsLnRzXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKVxuICAgIHJldHVybiB0cnVlO1xuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gXCJvYmplY3RcIiB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIHNyYy91dGlscy9ob2lzdFN0YXRpY3MudHNcbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICQkdHlwZW9mOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICQkdHlwZW9mOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge1xuICBbRm9yd2FyZFJlZl06IEZPUldBUkRfUkVGX1NUQVRJQ1MsXG4gIFtNZW1vXTogTUVNT19TVEFUSUNTXG59O1xuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgaWYgKGlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfVxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFtcIiQkdHlwZW9mXCJdXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgY29uc3QgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIGNvbnN0IHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxuLy8gc3JjL2NvbXBvbmVudHMvY29ubmVjdC50c3hcbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IG5vdEluaXRpYWxpemVkO1xudmFyIGluaXRpYWxpemVDb25uZWN0ID0gKGZuKSA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gZm47XG59O1xudmFyIE5PX1NVQlNDUklQVElPTl9BUlJBWSA9IFtudWxsLCBudWxsXTtcbnZhciBzdHJpbmdpZnlDb21wb25lbnQgPSAoQ29tcCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShDb21wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhDb21wKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhlZmZlY3RGdW5jLCBlZmZlY3RBcmdzLCBkZXBlbmRlbmNpZXMpIHtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiBlZmZlY3RGdW5jKC4uLmVmZmVjdEFyZ3MpLCBkZXBlbmRlbmNpZXMpO1xufVxuZnVuY3Rpb24gY2FwdHVyZVdyYXBwZXJQcm9wcyhsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIHdyYXBwZXJQcm9wcywgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3Vicykge1xuICBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQgPSB3cmFwcGVyUHJvcHM7XG4gIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCkge1xuICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG51bGw7XG4gICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmVVcGRhdGVzKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcywgc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yLCBsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIGlzTW91bnRlZCwgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3VicywgYWRkaXRpb25hbFN1YnNjcmliZUxpc3RlbmVyKSB7XG4gIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgfTtcbiAgbGV0IGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG4gIGxldCBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICBjb25zdCBjaGVja0ZvclVwZGF0ZXMgPSAoKSA9PiB7XG4gICAgaWYgKGRpZFVuc3Vic2NyaWJlIHx8ICFpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYXRlc3RTdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBsZXQgbmV3Q2hpbGRQcm9wcywgZXJyb3I7XG4gICAgdHJ5IHtcbiAgICAgIG5ld0NoaWxkUHJvcHMgPSBjaGlsZFByb3BzU2VsZWN0b3IoXG4gICAgICAgIGxhdGVzdFN0b3JlU3RhdGUsXG4gICAgICAgIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvciA9IGU7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBlO1xuICAgIH1cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICAgIH1cbiAgICBpZiAobmV3Q2hpbGRQcm9wcyA9PT0gbGFzdENoaWxkUHJvcHMuY3VycmVudCkge1xuICAgICAgaWYgKCFyZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50KSB7XG4gICAgICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IHRydWU7XG4gICAgICBhZGRpdGlvbmFsU3Vic2NyaWJlTGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG4gIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gY2hlY2tGb3JVcGRhdGVzO1xuICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gIGNoZWNrRm9yVXBkYXRlcygpO1xuICBjb25zdCB1bnN1YnNjcmliZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcbiAgICBpZiAobGFzdFRocm93bkVycm9yKSB7XG4gICAgICB0aHJvdyBsYXN0VGhyb3duRXJyb3I7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdW5zdWJzY3JpYmVXcmFwcGVyO1xufVxuZnVuY3Rpb24gc3RyaWN0RXF1YWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uID0gZmFsc2U7XG5mdW5jdGlvbiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCB7XG4gIC8vIFRoZSBgcHVyZWAgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQsIHNvIFRTIGRvZXNuJ3QgbGlrZSB1cyBkZXN0cnVjdHVyaW5nIHRoaXMgdG8gY2hlY2sgaXRzIGV4aXN0ZW5jZS5cbiAgLy8gQHRzLWlnbm9yZVxuICBwdXJlLFxuICBhcmVTdGF0ZXNFcXVhbCA9IHN0cmljdEVxdWFsLFxuICBhcmVPd25Qcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIGFyZU1lcmdlZFByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIC8vIHVzZSBSZWFjdCdzIGZvcndhcmRSZWYgdG8gZXhwb3NlIGEgcmVmIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudFxuICBmb3J3YXJkUmVmID0gZmFsc2UsXG4gIC8vIHRoZSBjb250ZXh0IGNvbnN1bWVyIHRvIHVzZVxuICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHRcbn0gPSB7fSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHB1cmUgIT09IHZvaWQgMCAmJiAhaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbikge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbiA9IHRydWU7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICAnVGhlIGBwdXJlYCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZC4gYGNvbm5lY3RgIGlzIG5vdyBhbHdheXMgYSBcInB1cmUvbWVtb2l6ZWRcIiBjb21wb25lbnQnXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjb25zdCBDb250ZXh0ID0gY29udGV4dDtcbiAgY29uc3QgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKTtcbiAgY29uc3QgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzKTtcbiAgY29uc3QgaW5pdE1lcmdlUHJvcHMgPSBtZXJnZVByb3BzRmFjdG9yeShtZXJnZVByb3BzKTtcbiAgY29uc3Qgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzID0gQm9vbGVhbihtYXBTdGF0ZVRvUHJvcHMpO1xuICBjb25zdCB3cmFwV2l0aENvbm5lY3QgPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSAvKiBAX19QVVJFX18gKi8gaXNWYWxpZEVsZW1lbnRUeXBlKFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgaWYgKCFpc1ZhbGlkKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFlvdSBtdXN0IHBhc3MgYSBjb21wb25lbnQgdG8gdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGNvbm5lY3QuIEluc3RlYWQgcmVjZWl2ZWQgJHtzdHJpbmdpZnlDb21wb25lbnQoXG4gICAgICAgICAgICBXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgKX1gXG4gICAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID0gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgXCJDb21wb25lbnRcIjtcbiAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGBDb25uZWN0KCR7d3JhcHBlZENvbXBvbmVudE5hbWV9KWA7XG4gICAgY29uc3Qgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IHtcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIGRpc3BsYXlOYW1lLFxuICAgICAgd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50LFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wcyxcbiAgICAgIGFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIENvbm5lY3RGdW5jdGlvbihwcm9wcykge1xuICAgICAgY29uc3QgW3Byb3BzQ29udGV4dCwgcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgd3JhcHBlclByb3BzXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYyLCAuLi53cmFwcGVyUHJvcHMyIH0gPSBwcm9wcztcbiAgICAgICAgcmV0dXJuIFtwcm9wcy5jb250ZXh0LCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmMiwgd3JhcHBlclByb3BzMl07XG4gICAgICB9LCBbcHJvcHNdKTtcbiAgICAgIGNvbnN0IENvbnRleHRUb1VzZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBsZXQgUmVzdWx0Q29udGV4dCA9IENvbnRleHQ7XG4gICAgICAgIGlmIChwcm9wc0NvbnRleHQ/LkNvbnN1bWVyKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IC8qIEBfX1BVUkVfXyAqLyBpc0NvbnRleHRDb25zdW1lcihcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wc0NvbnRleHQuQ29uc3VtZXIsIG51bGwpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBcIllvdSBtdXN0IHBhc3MgYSB2YWxpZCBSZWFjdCBjb250ZXh0IGNvbnN1bWVyIGFzIGBwcm9wcy5jb250ZXh0YFwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZXN1bHRDb250ZXh0ID0gcHJvcHNDb250ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVzdWx0Q29udGV4dDtcbiAgICAgIH0sIFtwcm9wc0NvbnRleHQsIENvbnRleHRdKTtcbiAgICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dFRvVXNlKTtcbiAgICAgIGNvbnN0IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA9IEJvb2xlYW4ocHJvcHMuc3RvcmUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZ2V0U3RhdGUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgY29uc3QgZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPSBCb29sZWFuKGNvbnRleHRWYWx1ZSkgJiYgQm9vbGVhbihjb250ZXh0VmFsdWUuc3RvcmUpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhZGlkU3RvcmVDb21lRnJvbVByb3BzICYmICFkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENvdWxkIG5vdCBmaW5kIFwic3RvcmVcIiBpbiB0aGUgY29udGV4dCBvZiBcIiR7ZGlzcGxheU5hbWV9XCIuIEVpdGhlciB3cmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhIDxQcm92aWRlcj4sIG9yIHBhc3MgYSBjdXN0b20gUmVhY3QgY29udGV4dCBwcm92aWRlciB0byA8UHJvdmlkZXI+IGFuZCB0aGUgY29ycmVzcG9uZGluZyBSZWFjdCBjb250ZXh0IGNvbnN1bWVyIHRvICR7ZGlzcGxheU5hbWV9IGluIGNvbm5lY3Qgb3B0aW9ucy5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBzdG9yZSA9IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHByb3BzLnN0b3JlIDogY29udGV4dFZhbHVlLnN0b3JlO1xuICAgICAgY29uc3QgZ2V0U2VydmVyU3RhdGUgPSBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA/IGNvbnRleHRWYWx1ZS5nZXRTZXJ2ZXJTdGF0ZSA6IHN0b3JlLmdldFN0YXRlO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc1NlbGVjdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiBmaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KHN0b3JlLmRpc3BhdGNoLCBzZWxlY3RvckZhY3RvcnlPcHRpb25zKTtcbiAgICAgIH0sIFtzdG9yZV0pO1xuICAgICAgY29uc3QgW3N1YnNjcmlwdGlvbiwgbm90aWZ5TmVzdGVkU3Vic10gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpXG4gICAgICAgICAgcmV0dXJuIE5PX1NVQlNDUklQVElPTl9BUlJBWTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uMiA9IGNyZWF0ZVN1YnNjcmlwdGlvbihcbiAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyB2b2lkIDAgOiBjb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5vdGlmeU5lc3RlZFN1YnMyID0gc3Vic2NyaXB0aW9uMi5ub3RpZnlOZXN0ZWRTdWJzLmJpbmQoc3Vic2NyaXB0aW9uMik7XG4gICAgICAgIHJldHVybiBbc3Vic2NyaXB0aW9uMiwgbm90aWZ5TmVzdGVkU3ViczJdO1xuICAgICAgfSwgW3N0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZV0pO1xuICAgICAgY29uc3Qgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoZGlkU3RvcmVDb21lRnJvbVByb3BzKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmNvbnRleHRWYWx1ZSxcbiAgICAgICAgICBzdWJzY3JpcHRpb25cbiAgICAgICAgfTtcbiAgICAgIH0sIFtkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZSwgc3Vic2NyaXB0aW9uXSk7XG4gICAgICBjb25zdCBsYXN0Q2hpbGRQcm9wcyA9IFJlYWN0LnVzZVJlZih2b2lkIDApO1xuICAgICAgY29uc3QgbGFzdFdyYXBwZXJQcm9wcyA9IFJlYWN0LnVzZVJlZih3cmFwcGVyUHJvcHMpO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSA9IFJlYWN0LnVzZVJlZih2b2lkIDApO1xuICAgICAgY29uc3QgcmVuZGVySXNTY2hlZHVsZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgICAgY29uc3QgaXNNb3VudGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICAgIGNvbnN0IGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IgPSBSZWFjdC51c2VSZWYoXG4gICAgICAgIHZvaWQgMFxuICAgICAgKTtcbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFtdKTtcbiAgICAgIGNvbnN0IGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ICYmIHdyYXBwZXJQcm9wcyA9PT0gbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc1NlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHdyYXBwZXJQcm9wcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgIH0sIFtzdG9yZSwgd3JhcHBlclByb3BzXSk7XG4gICAgICBjb25zdCBzdWJzY3JpYmVGb3JSZWFjdCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmUgPSAocmVhY3RMaXN0ZW5lcikgPT4ge1xuICAgICAgICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN1YnNjcmliZVVwZGF0ZXMoXG4gICAgICAgICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNoaWxkUHJvcHNTZWxlY3RvcixcbiAgICAgICAgICAgIGxhc3RXcmFwcGVyUHJvcHMsXG4gICAgICAgICAgICBsYXN0Q2hpbGRQcm9wcyxcbiAgICAgICAgICAgIHJlbmRlcklzU2NoZWR1bGVkLFxuICAgICAgICAgICAgaXNNb3VudGVkLFxuICAgICAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSxcbiAgICAgICAgICAgIG5vdGlmeU5lc3RlZFN1YnMsXG4gICAgICAgICAgICByZWFjdExpc3RlbmVyXG4gICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZTtcbiAgICAgIH0sIFtzdWJzY3JpcHRpb25dKTtcbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhjYXB0dXJlV3JhcHBlclByb3BzLCBbXG4gICAgICAgIGxhc3RXcmFwcGVyUHJvcHMsXG4gICAgICAgIGxhc3RDaGlsZFByb3BzLFxuICAgICAgICByZW5kZXJJc1NjaGVkdWxlZCxcbiAgICAgICAgd3JhcHBlclByb3BzLFxuICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLFxuICAgICAgICBub3RpZnlOZXN0ZWRTdWJzXG4gICAgICBdKTtcbiAgICAgIGxldCBhY3R1YWxDaGlsZFByb3BzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYWN0dWFsQ2hpbGRQcm9wcyA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKFxuICAgICAgICAgIC8vIFRPRE8gV2UncmUgcGFzc2luZyB0aHJvdWdoIGEgYmlnIHdyYXBwZXIgdGhhdCBkb2VzIGEgYnVuY2ggb2YgZXh0cmEgc2lkZSBlZmZlY3RzIGJlc2lkZXMgc3Vic2NyaWJpbmdcbiAgICAgICAgICBzdWJzY3JpYmVGb3JSZWFjdCxcbiAgICAgICAgICAvLyBUT0RPIFRoaXMgaXMgaW5jcmVkaWJseSBoYWNreS4gV2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgdGhlIHN0b3JlIHVwZGF0ZSBhbmQgY2FsY3VsYXRlZCBuZXcgY2hpbGQgcHJvcHMsXG4gICAgICAgICAgLy8gVE9ETyBhbmQgd2UncmUganVzdCBwYXNzaW5nIHRoYXQgdGhyb3VnaCBzbyBpdCB0cmlnZ2VycyBhIHJlLXJlbmRlciBmb3IgdXMgcmF0aGVyIHRoYW4gcmVseWluZyBvbiBgdVNFU2AuXG4gICAgICAgICAgYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yLFxuICAgICAgICAgIGdldFNlcnZlclN0YXRlID8gKCkgPT4gY2hpbGRQcm9wc1NlbGVjdG9yKGdldFNlcnZlclN0YXRlKCksIHdyYXBwZXJQcm9wcykgOiBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3JcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAobGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50KSB7XG4gICAgICAgICAgO1xuICAgICAgICAgIGVyci5tZXNzYWdlICs9IGBcblRoZSBlcnJvciBtYXkgYmUgY29ycmVsYXRlZCB3aXRoIHRoaXMgcHJldmlvdXMgZXJyb3I6XG4ke2xhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudC5zdGFja31cblxuYDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gdm9pZCAwO1xuICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSB2b2lkIDA7XG4gICAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBhY3R1YWxDaGlsZFByb3BzO1xuICAgICAgfSk7XG4gICAgICBjb25zdCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBXcmFwcGVkQ29tcG9uZW50LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5hY3R1YWxDaGlsZFByb3BzLFxuICAgICAgICAgICAgICByZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9LCBbcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgV3JhcHBlZENvbXBvbmVudCwgYWN0dWFsQ2hpbGRQcm9wc10pO1xuICAgICAgY29uc3QgcmVuZGVyZWRDaGlsZCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHRUb1VzZS5Qcm92aWRlciwgeyB2YWx1ZTogb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZSB9LCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICB9LCBbQ29udGV4dFRvVXNlLCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQsIG92ZXJyaWRkZW5Db250ZXh0VmFsdWVdKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkO1xuICAgIH1cbiAgICBjb25zdCBfQ29ubmVjdCA9IFJlYWN0Lm1lbW8oQ29ubmVjdEZ1bmN0aW9uKTtcbiAgICBjb25zdCBDb25uZWN0ID0gX0Nvbm5lY3Q7XG4gICAgQ29ubmVjdC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICBDb25uZWN0LmRpc3BsYXlOYW1lID0gQ29ubmVjdEZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgaWYgKGZvcndhcmRSZWYpIHtcbiAgICAgIGNvbnN0IF9mb3J3YXJkZWQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAgICAgICBmdW5jdGlvbiBmb3J3YXJkQ29ubmVjdFJlZihwcm9wcywgcmVmKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbm5lY3QsIHsgLi4ucHJvcHMsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlZiB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGZvcndhcmRlZCA9IF9mb3J3YXJkZWQ7XG4gICAgICBmb3J3YXJkZWQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgIGZvcndhcmRlZC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaG9pc3ROb25SZWFjdFN0YXRpY3MoZm9yd2FyZGVkLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBob2lzdE5vblJlYWN0U3RhdGljcyhDb25uZWN0LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcbiAgcmV0dXJuIHdyYXBXaXRoQ29ubmVjdDtcbn1cbnZhciBjb25uZWN0X2RlZmF1bHQgPSBjb25uZWN0O1xuXG4vLyBzcmMvY29tcG9uZW50cy9Qcm92aWRlci50c3hcbmZ1bmN0aW9uIFByb3ZpZGVyKHtcbiAgc3RvcmUsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICBzZXJ2ZXJTdGF0ZSxcbiAgc3RhYmlsaXR5Q2hlY2sgPSBcIm9uY2VcIixcbiAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrID0gXCJvbmNlXCJcbn0pIHtcbiAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZTogc2VydmVyU3RhdGUgPyAoKSA9PiBzZXJ2ZXJTdGF0ZSA6IHZvaWQgMCxcbiAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrXG4gICAgfTtcbiAgfSwgW3N0b3JlLCBzZXJ2ZXJTdGF0ZSwgc3RhYmlsaXR5Q2hlY2ssIGlkZW50aXR5RnVuY3Rpb25DaGVja10pO1xuICBjb25zdCBwcmV2aW91c1N0YXRlID0gUmVhY3QudXNlTWVtbygoKSA9PiBzdG9yZS5nZXRTdGF0ZSgpLCBbc3RvcmVdKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBzdWJzY3JpcHRpb24gfSA9IGNvbnRleHRWYWx1ZTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgICBpZiAocHJldmlvdXNTdGF0ZSAhPT0gc3RvcmUuZ2V0U3RhdGUoKSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSB2b2lkIDA7XG4gICAgfTtcbiAgfSwgW2NvbnRleHRWYWx1ZSwgcHJldmlvdXNTdGF0ZV0pO1xuICBjb25zdCBDb250ZXh0ID0gY29udGV4dCB8fCBSZWFjdFJlZHV4Q29udGV4dDtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbnRleHRWYWx1ZSB9LCBjaGlsZHJlbik7XG59XG52YXIgUHJvdmlkZXJfZGVmYXVsdCA9IFByb3ZpZGVyO1xuXG4vLyBzcmMvaG9va3MvdXNlU3RvcmUudHNcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlUmVkdXhDb250ZXh0MiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlUmVkdXhDb250ZXh0IDogKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQpXG4gICk7XG4gIGNvbnN0IHVzZVN0b3JlMiA9ICgpID0+IHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB1c2VSZWR1eENvbnRleHQyKCk7XG4gICAgcmV0dXJuIHN0b3JlO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZVN0b3JlMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlU3RvcmUyXG4gIH0pO1xuICByZXR1cm4gdXNlU3RvcmUyO1xufVxudmFyIHVzZVN0b3JlID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVN0b3JlSG9vaygpO1xuXG4vLyBzcmMvaG9va3MvdXNlRGlzcGF0Y2gudHNcbmZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlU3RvcmUyID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VTdG9yZSA6IGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0KTtcbiAgY29uc3QgdXNlRGlzcGF0Y2gyID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUyKCk7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZURpc3BhdGNoMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlRGlzcGF0Y2gyXG4gIH0pO1xuICByZXR1cm4gdXNlRGlzcGF0Y2gyO1xufVxudmFyIHVzZURpc3BhdGNoID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZURpc3BhdGNoSG9vaygpO1xuXG4vLyBzcmMvZXhwb3J0cy50c1xudmFyIGJhdGNoID0gZGVmYXVsdE5vb3BCYXRjaDtcblxuLy8gc3JjL2luZGV4LnRzXG5pbml0aWFsaXplVXNlU2VsZWN0b3IodXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IyKTtcbmluaXRpYWxpemVDb25uZWN0KFJlYWN0Mi51c2VTeW5jRXh0ZXJuYWxTdG9yZSk7XG5leHBvcnQge1xuICBQcm92aWRlcl9kZWZhdWx0IGFzIFByb3ZpZGVyLFxuICBSZWFjdFJlZHV4Q29udGV4dCxcbiAgYmF0Y2gsXG4gIGNvbm5lY3RfZGVmYXVsdCBhcyBjb25uZWN0LFxuICBjcmVhdGVEaXNwYXRjaEhvb2ssXG4gIGNyZWF0ZVNlbGVjdG9ySG9vayxcbiAgY3JlYXRlU3RvcmVIb29rLFxuICBzaGFsbG93RXF1YWwsXG4gIHVzZURpc3BhdGNoLFxuICB1c2VTZWxlY3RvcixcbiAgdXNlU3RvcmVcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1yZWR1eC5tanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWxsV2lkZ2V0UHJvcHMsIElNU3RhdGUgfSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XHJcbmltcG9ydCB7IGxvYWRNb2R1bGVzIH0gZnJvbSBcImVzcmktbG9hZGVyXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIExvYWRpbmcsIFNlbGVjdCwgTXVsdGlSYW5nZVNsaWRlciB9IGZyb20gXCJqaW11LXVpXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaG9va3MvdXNlTG9jYWxlXCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0aW9ucyB9IGZyb20gXCIuL3RyYW5zbGF0aW9uc1wiO1xyXG5pbXBvcnQgVGl0bGVXaXRoVG9vbHRpcCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9UaXRsZVdpdGhUb29sdGlwXCI7XHJcblxyXG5pbnRlcmZhY2UgQmFuZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIFNlbnNvciB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGJhbmRzOiBCYW5kW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBJTUNvbmZpZyB7XHJcbiAgZXhhbXBsZUNvbmZpZ1Byb3BlcnR5OiBzdHJpbmc7XHJcbn1cclxuY29uc3Qgc2Vuc29yczogU2Vuc29yW10gPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwid29ybGR2aWV3XCIsXHJcbiAgICB0aXRsZTogXCJXb3JsZHZpZXcyXCIsXHJcbiAgICBiYW5kczogW1xyXG4gICAgICB7IG5hbWU6IFwiQ29hc3RhbCgxKVwiLCB2YWx1ZTogXCIxXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIkJsdWUoMilcIiwgdmFsdWU6IFwiMlwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJHcmVlbigzKVwiLCB2YWx1ZTogXCIzXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIlllbGxvdyg0KVwiLCB2YWx1ZTogXCI0XCIgfSxcclxuICAgICAgeyBuYW1lOiBcIlJlZCg1KVwiLCB2YWx1ZTogXCI1XCIgfSxcclxuICAgICAgeyBuYW1lOiBcIlJlZCBFZGdlKDYpXCIsIHZhbHVlOiBcIjZcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiTklSIC0xKDcpXCIsIHZhbHVlOiBcIjdcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiTklSIC0yKDgpXCIsIHZhbHVlOiBcIjhcIiB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcImZhc2F0XCIsXHJcbiAgICB0aXRsZTogXCJPV0RfRmFzYXRDX01TX3YyXzIwMjUwMzEyXCIsXHJcbiAgICBiYW5kczogW1xyXG4gICAgICB7IG5hbWU6IFwiUmVkKDEpXCIsIHZhbHVlOiBcIjFcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiR3JlZW4oMilcIiwgdmFsdWU6IFwiMlwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJCbHVlKDMpXCIsIHZhbHVlOiBcIjNcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiTklSKDQpXCIsIHZhbHVlOiBcIjRcIiB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcImRlZmF1bHRcIixcclxuICAgIHRpdGxlOiBcIkRlZmF1bHRcIixcclxuICAgIGJhbmRzOiBbXHJcbiAgICAgIHsgbmFtZTogXCJCbHVlKDEpXCIsIHZhbHVlOiBcIjFcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiR3JlZW4oMilcIiwgdmFsdWU6IFwiMlwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJSZWQoMylcIiwgdmFsdWU6IFwiM1wiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJOSVIoNClcIiwgdmFsdWU6IFwiNFwiIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBXaWRnZXQ6IFJlYWN0LkZDPEFsbFdpZGdldFByb3BzPElNQ29uZmlnPj4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHQgfSA9IHVzZUxvY2FsZSh0cmFuc2xhdGlvbnMpO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZEltYWdlcmllcyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5teVN0YXRlPy5zZWxlY3RlZEltYWdlc1xyXG4gICk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRTZW5zb3IgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUubXlTdGF0ZT8uc2VsZWN0ZWRTZW5zb3JcclxuICApO1xyXG4gIGNvbnN0IGdlb3Byb2Nlc3MgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElNU3RhdGUpID0+IHN0YXRlLm15U3RhdGU/Lmdlb3Byb2Nlc3MpO1xyXG5cclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbnB1dE1pblJhbmdlLCBzZXRJbnB1dE1pblJhbmdlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbnB1dE1heFJhbmdlLCBzZXRJbnB1dE1heFJhbmdlXSA9IHVzZVN0YXRlKDAuNSk7XHJcbiAgY29uc3QgW2lucHV0VHlwZUFyZWFNYXgsIHNldElucHV0VHlwZUFyZWFNYXhdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2lucHV0VHlwZUFyZWFNaW4sIHNldElucHV0VHlwZUFyZWFNaW5dID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEZvcm11bGEsIHNldFNlbGVjdGVkRm9ybXVsYV0gPSB1c2VTdGF0ZShcclxuICAgIFwiKGI0IC0gYjEpIC8gKGI0ICsgYjEpXCJcclxuICApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKFwiTkRWSVwiKTtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFswLCAyNTUsIDAsIDI1NV0pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYXZhaWxhYmxlU2Vuc29ycywgc2V0QXZhaWxhYmxlU2Vuc29yc10gPSB1c2VTdGF0ZShzZW5zb3JzKTtcclxuXHJcbiAgLy9yZWZzXHJcbiAgY29uc3QgaW1hZ2VyeUxheWVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGVzcmlNb2R1bGVzUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXYpID0+IHtcclxuICAgIGlmIChqbXYpIHNldEppbXVNYXBWaWV3KGptdik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmFuZ2VDaGFuZ2UgPSAobWluVmFsdWUsIG1heFZhbHVlKSA9PiB7XHJcbiAgICBzZXRJbnB1dE1pblJhbmdlKG1pblZhbHVlKTtcclxuICAgIHNldElucHV0TWF4UmFuZ2UobWF4VmFsdWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNyZWFySW1hZ2VyeUxheWVyKCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm11bGFDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHJlbW92ZUxheWVyKCk7XHJcbiAgICBjb25zdCBmb3JtdWxhID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0U2VsZWN0ZWRJbmRleChmb3JtdWxhKTtcclxuICAgIHN3aXRjaCAoZm9ybXVsYSkge1xyXG4gICAgICBjYXNlIFwiTkRWSVwiOlxyXG4gICAgICAgIC8vc2V0SW5kaWNlVHlwZShcIk5EVklcIik7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkU2Vuc29yKSB7XHJcbiAgICAgICAgICBjb25zdCBzZW5zb3IgPSBhdmFpbGFibGVTZW5zb3JzLmZpbmQoXHJcbiAgICAgICAgICAgIChzKSA9PiBzLnRpdGxlID09PSBzZWxlY3RlZFNlbnNvci50aXRsZSB8fCBzLnRpdGxlID09PSBcIkRlZmF1bHRcIlxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gXCJXb3JsZHZpZXcyXCIpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKFxyXG4gICAgICAgICAgICAgIGAoQiR7c2Vuc29yLmJhbmRzWzZdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbNF0/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzZdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbNF0/LnZhbHVlfSlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gXCJPV0RfRmFzYXRDX01TX3YyXzIwMjUwMzEyXCIpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKFxyXG4gICAgICAgICAgICAgIGAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbMF0/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbMF0/LnZhbHVlfSlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gXCJEZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKFxyXG4gICAgICAgICAgICAgIGAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbMl0/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbMl0/LnZhbHVlfSlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENvbG9yKFswLCAyNTUsIDAsIDI1NV0pO1xyXG4gICAgICAgIHNldElucHV0VHlwZUFyZWFNYXgoMSk7XHJcbiAgICAgICAgc2V0SW5wdXRUeXBlQXJlYU1pbigtMSk7XHJcbiAgICAgICAgc2V0SW5wdXRNaW5SYW5nZSgwLjMpO1xyXG4gICAgICAgIHNldElucHV0TWF4UmFuZ2UoMC43KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlNBVklcIjpcclxuICAgICAgICBpZiAoc2VsZWN0ZWRTZW5zb3IpIHtcclxuICAgICAgICAgIGNvbnN0IHNlbnNvciA9IGF2YWlsYWJsZVNlbnNvcnMuZmluZChcclxuICAgICAgICAgICAgKHMpID0+IHMudGl0bGUgPT09IHNlbGVjdGVkU2Vuc29yLnRpdGxlIHx8IHMudGl0bGUgPT09IFwiRGVmYXVsdFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09IFwiV29ybGR2aWV3MlwiKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShcclxuICAgICAgICAgICAgICBgKChCJHtzZW5zb3IuYmFuZHNbNl0/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1s0XT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbNl0/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1s0XT8udmFsdWV9ICsgMCw1KSkgKiAoMSArIDAsNSlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09IFwiT1dEX0Zhc2F0Q19NU192Ml8yMDI1MDMxMlwiKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShcclxuICAgICAgICAgICAgICBgKChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9ICsgMCw1KSkgKiAoMSArIDAsNSlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gXCJEZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKFxyXG4gICAgICAgICAgICAgIGAoKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0gKyAwLDUpKSAqICgxICsgMCw1KWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldENvbG9yKFsyNTUsIDI1NSwgMCwgMjU1XSk7XHJcbiAgICAgICAgc2V0SW5wdXRUeXBlQXJlYU1heCgxLjUpO1xyXG4gICAgICAgIHNldElucHV0VHlwZUFyZWFNaW4oLTEuNSk7XHJcbiAgICAgICAgc2V0SW5wdXRNaW5SYW5nZSgwLjMpO1xyXG4gICAgICAgIHNldElucHV0TWF4UmFuZ2UoMC43KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIk5EV0lcIjpcclxuICAgICAgICBpZiAoc2VsZWN0ZWRTZW5zb3IpIHtcclxuICAgICAgICAgIGNvbnN0IHNlbnNvciA9IGF2YWlsYWJsZVNlbnNvcnMuZmluZChcclxuICAgICAgICAgICAgKHMpID0+IHMudGl0bGUgPT09IHNlbGVjdGVkU2Vuc29yLnRpdGxlIHx8IHMudGl0bGUgPT09IFwiRGVmYXVsdFwiXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSBcIldvcmxkdmlldzJcIikge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoXHJcbiAgICAgICAgICAgICAgYChCJHtzZW5zb3IuYmFuZHNbMl0/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbMl0/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9KWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSBcIk9XRF9GYXNhdENfTVNfdjJfMjAyNTAzMTJcIikge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoXHJcbiAgICAgICAgICAgICAgYChCJHtzZW5zb3IuYmFuZHNbMV0/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbMV0/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9KWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSBcIkRlZmF1bHRcIikge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoXHJcbiAgICAgICAgICAgICAgYChCJHtzZW5zb3IuYmFuZHNbMV0/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbMV0/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9KWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q29sb3IoWzAsIDAsIDI1NSwgMjU1XSk7XHJcbiAgICAgICAgc2V0SW5wdXRUeXBlQXJlYU1heCgxKTtcclxuICAgICAgICBzZXRJbnB1dFR5cGVBcmVhTWluKC0xKTtcclxuICAgICAgICBzZXRJbnB1dE1pblJhbmdlKDAuMyk7XHJcbiAgICAgICAgc2V0SW5wdXRNYXhSYW5nZSgwLjcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWFySW1hZ2VyeUxheWVyID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIC8vU2llbXByZSB5IGN1YW5kbyBlbCBhcnJheSBzZWxlY3RlZEltYWdlcmllcyB0ZW5nYSBhbCBtZW5vcyAyIGVsZW1lbnRvc1xyXG4gICAgaWYgKHNlbGVjdGVkSW1hZ2VyaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy9TZSBhc2lnbmFuIGxhcyBpbWFnZW5lcyBhIGxhcyB2YXJpYWJsZXNcclxuICAgICAgbGV0IGltZzFEYXRhID0gc2VsZWN0ZWRJbWFnZXJpZXNbMF0/Lk9CSkVDVElEO1xyXG5cclxuICAgICAgLy8gVmFsaWRhciBxdWUgYWwgbWVub3MgdW5hIHNlbGVjY2nDs24gc2VhIHbDoWxpZGFcclxuICAgICAgaWYgKGltZzFEYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgLy9TaSBleGl0ZSBlbCBtYXBhIHkgZXhpc3RhbiBsb3MgbW9kdWxvcyBkZSBFc3JpXHJcbiAgICAgICAgaWYgKGppbXVNYXBWaWV3ICYmIGVzcmlNb2R1bGVzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIC8vU2UgdXRpbGl6YW4gbG9zIG1vZHVsb3MgZGUgRXNyaVxyXG4gICAgICAgICAgY29uc3QgeyBJbWFnZXJ5TGF5ZXIsIFJhc3RlckZ1bmN0aW9uLCBSYXN0ZXJTdHJldGNoUmVuZGVyZXIgfSA9XHJcbiAgICAgICAgICAgIGVzcmlNb2R1bGVzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgICAvL1NlIGJ1c2NhIGxhIGNhcGFcclxuICAgICAgICAgIGNvbnN0IGltYWdlcnlMYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmZpbmRMYXllckJ5SWQoXHJcbiAgICAgICAgICAgIHNlbGVjdGVkU2Vuc29yPy5pZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgaW1hZ2VyeUxheWVyIH0pO1xyXG4gICAgICAgICAgLy9TZSBhc2lnbmEgbGEgdXJsIGRlIGxhIGNhcGFcclxuICAgICAgICAgIGNvbnN0IGxheWVyVXJsID0gaW1hZ2VyeUxheWVyLnVybDtcclxuICAgICAgICAgIC8vU2UgY3JlYSBsYSBleHByZXNpb24gZGUgbGEgY29uc3VsdGFcclxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25FeHByZXNzaW9uID0gYE9CSkVDVElEIElOICgke2ltZzFEYXRhfSlgO1xyXG5cclxuICAgICAgICAgIC8vU2UgY3JlYSBsYSBmdW5jaW9uIFJhc3RlciBkZSBsYSBjb25zdWx0YVxyXG4gICAgICAgICAgY29uc3QgYmFuZEFyaXRobWV0aWNGdW5jdGlvbiA9IG5ldyBSYXN0ZXJGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogXCJCYW5kQXJpdGhtZXRpY1wiLFxyXG4gICAgICAgICAgICBvdXRwdXRQaXhlbFR5cGU6IFwiRjMyXCIsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uQXJndW1lbnRzOiB7XHJcbiAgICAgICAgICAgICAgTWV0aG9kOiAwLFxyXG4gICAgICAgICAgICAgIEJhbmRJbmRleGVzOiBzZWxlY3RlZEZvcm11bGEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZW1hcEZ1bmN0aW9uID0gbmV3IFJhc3RlckZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBcIlJlbWFwXCIsXHJcbiAgICAgICAgICAgIG91dHB1dFBpeGVsVHlwZTogXCJGMzJcIixcclxuICAgICAgICAgICAgZnVuY3Rpb25Bcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgICBSYXN0ZXI6IGJhbmRBcml0aG1ldGljRnVuY3Rpb24sXHJcbiAgICAgICAgICAgICAgSW5wdXRSYW5nZXM6IFtpbnB1dE1pblJhbmdlLCBpbnB1dE1heFJhbmdlXSxcclxuICAgICAgICAgICAgICBPdXRwdXRWYWx1ZXM6IFsyXSxcclxuICAgICAgICAgICAgICBOb0RhdGFSYW5nZXM6IFtcclxuICAgICAgICAgICAgICAgIC1JbmZpbml0eSxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZUFyZWFNaW4sXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGVBcmVhTWF4LFxyXG4gICAgICAgICAgICAgICAgSW5maW5pdHksXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBBbGxvd1VubWF0Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzdHJldGNoUmVuZGVyZXIgPSBuZXcgUmFzdGVyU3RyZXRjaFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgc3RyZXRjaFR5cGU6IFwibWluLW1heFwiLFxyXG4gICAgICAgICAgICBzdGF0aXN0aWNzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWluOiBpbnB1dFR5cGVBcmVhTWluLFxyXG4gICAgICAgICAgICAgICAgbWF4OiBpbnB1dFR5cGVBcmVhTWF4LFxyXG4gICAgICAgICAgICAgICAgYXZnOiAoaW5wdXRUeXBlQXJlYU1pbiArIGlucHV0VHlwZUFyZWFNYXgpIC8gMixcclxuICAgICAgICAgICAgICAgIHN0ZGRldjogMC4xLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNvbG9yUmFtcDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiYWxnb3JpdGhtaWNcIixcclxuICAgICAgICAgICAgICBmcm9tQ29sb3I6IFsyNTUsIDI1NSwgMjU1LCAwXSxcclxuICAgICAgICAgICAgICB0b0NvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy9TZSBjcmVhIGxhIG51ZXZhIGNhcGEgZmlsdHJhZGEgcG9yIGlkXHJcbiAgICAgICAgICBjb25zdCBuZXdJbWFnZXJ5TGF5ZXIgPSBuZXcgSW1hZ2VyeUxheWVyKHtcclxuICAgICAgICAgICAgdXJsOiBsYXllclVybCxcclxuICAgICAgICAgICAgaWQ6IFwiw41uZGljZXMgZXNwZWN0cmFsZXNcIixcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgdGl0bGU6IHQoXCJ3aWRnZXRMYWJlbFwiKSxcclxuICAgICAgICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb24sIC8vIEZpbHRybyBwb3IgT0JKRUNUSURcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIEVsaW1pbmFyIGxhIGNhcGEgZXhpc3RlbnRlIHNpIHlhIGVzdMOhIGNhcmdhZGFcclxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKFxyXG4gICAgICAgICAgICBcIsONbmRpY2VzIGVzcGVjdHJhbGVzXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoZXhpc3RpbmdMYXllcikge1xyXG4gICAgICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUoZXhpc3RpbmdMYXllcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gQWdyZWdhciBsYSBudWV2YSBjYXBhIGNvbiBsb3MgZmlsdHJvcyB5IHJlbmRlcml6YWRvcmVzXHJcbiAgICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobmV3SW1hZ2VyeUxheWVyKTtcclxuXHJcbiAgICAgICAgICAvLyBBc2lnbmFyIGZ1bmNpb25lcyB5IHJlbmRlcml6YWRvclxyXG4gICAgICAgICAgbmV3SW1hZ2VyeUxheWVyLnJhc3RlckZ1bmN0aW9uID0gcmVtYXBGdW5jdGlvbjtcclxuICAgICAgICAgIG5ld0ltYWdlcnlMYXllci5yZW5kZXJlciA9IHN0cmV0Y2hSZW5kZXJlcjtcclxuXHJcbiAgICAgICAgICBpbWFnZXJ5TGF5ZXJSZWYuY3VycmVudCA9IG5ld0ltYWdlcnlMYXllcjtcclxuXHJcbiAgICAgICAgICAvLyBWYWxpZGFyIGN1YW5kbyBsYSBjYXBhIGVzdMOpIGxpc3RhXHJcbiAgICAgICAgICBuZXdJbWFnZXJ5TGF5ZXIud2hlbihcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNhcmdhbmRvIGVsIGxheWVyOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAvLyAgIHRyeSB7XHJcbiAgLy8gICAgIGNvbnN0IGltZzFEYXRhID0gc2VsZWN0ZWRJbWFnZXJpZXNbMF0uT0JKRUNUSUQ7XHJcblxyXG4gIC8vICAgICBjb25zdCBwcm9jZXNvID0gNTtcclxuICAvLyAgICAgY29uc3QgZW50cmFkYSA9IGltZzFEYXRhO1xyXG4gIC8vICAgICB2YXIgdXJsQ29uc3VsdGEgPSBgaHR0cDovLzEyNy4wLjAuMTo1MDAwL3Byb3h5P3Byb2Nlc289JHtwcm9jZXNvfSZFbnRyYWRhPSR7ZW50cmFkYX0mdXJsPSR7c2VsZWN0ZWRTZW5zb3IudXJsfWA7XHJcblxyXG4gIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybENvbnN1bHRhLCB7XHJcbiAgLy8gICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIC8vICAgICB9KTtcclxuXHJcbiAgLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIC8vICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo1MDAwJHtkYXRhLnVybEpzb259YCwge1xyXG4gIC8vICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAvLyAgICAgfSk7XHJcblxyXG4gIC8vICAgICBjb25zdCBkYXRhVmFsaWRhZGEgPSBhd2FpdCByZXNwb25zZURhdGEuanNvbigpO1xyXG5cclxuICAvLyAgICAgLy9zZXRJbmRpY2VUeXBlKFwiQkFJXCIpO1xyXG4gIC8vICAgICBpZiAoc2VsZWN0ZWRTZW5zb3IpIHtcclxuICAvLyAgICAgICBjb25zdCBzZW5zb3IgPSBzZW5zb3JzLmZpbmQoKHMpID0+IHMudGl0bGUgPT09IHNlbGVjdGVkU2Vuc29yLnRpdGxlKTtcclxuICAvLyAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gXCJXb3JsZHZpZXcyXCIpIHtcclxuICAvLyAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShcclxuICAvLyAgICAgICAgICAgYDEgLyAoKCgwLDEgLSBCJHtzZW5zb3IuYmFuZHNbNF0/LnZhbHVlfSleMikgKyAoKDAsMDYgLSBCJHtzZW5zb3IuYmFuZHNbNl0/LnZhbHVlfSleMikpYFxyXG4gIC8vICAgICAgICAgKTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09IFwiT1dEX0Zhc2F0Q19NU192Ml8yMDI1MDMxMlwiKSB7XHJcbiAgLy8gICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoXHJcbiAgLy8gICAgICAgICAgIGAxIC8gKCgoMCwxIC0gQiR7c2Vuc29yLmJhbmRzWzBdPy52YWx1ZX0pXjIpICsgKCgwLDA2IC0gQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0pXjIpKWBcclxuICAvLyAgICAgICAgICk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSBcIkRlZmF1bHRcIikge1xyXG4gIC8vICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKFxyXG4gIC8vICAgICAgICAgICBgMSAvICgoKDAsMSAtIEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9KV4yKSArICgoMCwwNiAtIEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9KV4yKSlgXHJcbiAgLy8gICAgICAgICApO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfVxyXG5cclxuICAvLyAgICAgY29uc29sZS5sb2coZGF0YVZhbGlkYWRhKTtcclxuICAvLyAgICAgc2V0Q29sb3IoWzI1NSwgMCwgMCwgMjU1XSk7XHJcbiAgLy8gICAgIHNldElucHV0VHlwZUFyZWFNaW4ocGFyc2VGbG9hdChkYXRhVmFsaWRhZGEuZXRpcXVldGFzLmV0aXF1ZXRhXzEpKTtcclxuICAvLyAgICAgc2V0SW5wdXRNaW5SYW5nZShwYXJzZUZsb2F0KGRhdGFWYWxpZGFkYS5ldGlxdWV0YXMuZXRpcXVldGFfMykpO1xyXG4gIC8vICAgICBzZXRJbnB1dE1heFJhbmdlKHBhcnNlRmxvYXQoZGF0YVZhbGlkYWRhLmV0aXF1ZXRhcy5ldGlxdWV0YV80KSk7XHJcbiAgLy8gICAgIHNldElucHV0VHlwZUFyZWFNYXgocGFyc2VGbG9hdChkYXRhVmFsaWRhZGEuZXRpcXVldGFzLmV0aXF1ZXRhXzUpKTtcclxuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBlbnZpYXIgbGEgc29saWNpdHVkOlwiLCBlcnJvcik7XHJcbiAgLy8gICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH07XHJcbiAgLy9TZSBjcmVhIHVuYSBmdW5jaW9uIHBhcmEgY2FyZ2FyIGxvcyBtb2R1bG9zIGRlIEVzcmlcclxuICBjb25zdCBsb2FkRXNyaU1vZHVsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgbG9hZE1vZHVsZXMoW1xyXG4gICAgICAgIFwiZXNyaS9sYXllcnMvc3VwcG9ydC9SYXN0ZXJGdW5jdGlvblwiLFxyXG4gICAgICAgIFwiZXNyaS9yZW5kZXJlcnMvUmFzdGVyU3RyZXRjaFJlbmRlcmVyXCIsXHJcbiAgICAgICAgXCJlc3JpL2xheWVycy9JbWFnZXJ5TGF5ZXJcIixcclxuICAgICAgICBcImVzcmkvcmVzdC9xdWVyeVwiLFxyXG4gICAgICAgIFwiZXNyaS93aWRnZXRzL0hpc3RvZ3JhbVwiLFxyXG4gICAgICAgIFwiZXNyaS9yZXF1ZXN0XCIsXHJcbiAgICAgIF0pXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAoW1xyXG4gICAgICAgICAgICBSYXN0ZXJGdW5jdGlvbixcclxuICAgICAgICAgICAgUmFzdGVyU3RyZXRjaFJlbmRlcmVyLFxyXG4gICAgICAgICAgICBJbWFnZXJ5TGF5ZXIsXHJcbiAgICAgICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgICAgICBIaXN0b2dyYW0sXHJcbiAgICAgICAgICAgIGVzcmlSZXF1ZXN0LFxyXG4gICAgICAgICAgXSkgPT4ge1xyXG4gICAgICAgICAgICBlc3JpTW9kdWxlc1JlZi5jdXJyZW50ID0ge1xyXG4gICAgICAgICAgICAgIFJhc3RlckZ1bmN0aW9uLFxyXG4gICAgICAgICAgICAgIFJhc3RlclN0cmV0Y2hSZW5kZXJlcixcclxuICAgICAgICAgICAgICBJbWFnZXJ5TGF5ZXIsXHJcbiAgICAgICAgICAgICAgcXVlcnksXHJcbiAgICAgICAgICAgICAgSGlzdG9ncmFtLFxyXG4gICAgICAgICAgICAgIGVzcmlSZXF1ZXN0LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgRVNSSSBtb2R1bGVzOiBcIiwgZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbW92ZUxheWVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkU2Vuc29yKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nTGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKFxyXG4gICAgICAgIFwiw41uZGljZXMgZXNwZWN0cmFsZXNcIlxyXG4gICAgICApO1xyXG4gICAgICBpZiAoZXhpc3RpbmdMYXllcikge1xyXG4gICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShleGlzdGluZ0xheWVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlbW92ZUxheWVyKCk7XHJcbiAgICBpZiAoc2VsZWN0ZWRTZW5zb3IpIHtcclxuICAgICAgY29uc3Qgc2Vuc29yID0gYXZhaWxhYmxlU2Vuc29ycy5maW5kKFxyXG4gICAgICAgIChzKSA9PiBzLnRpdGxlID09PSBzZWxlY3RlZFNlbnNvci50aXRsZSB8fCBzLnRpdGxlID09PSBcIkRlZmF1bHRcIlxyXG4gICAgICApO1xyXG4gICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gXCJXb3JsZHZpZXcyXCIpIHtcclxuICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoXHJcbiAgICAgICAgICBgKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09IFwiT1dEX0Zhc2F0Q19NU192Ml8yMDI1MDMxMlwiKSB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKFxyXG4gICAgICAgICAgYChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9KWBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSBcIkRlZmF1bHRcIikge1xyXG4gICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShcclxuICAgICAgICAgIGAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbMl0/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbMl0/LnZhbHVlfSlgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldENvbG9yKFswLCAyNTUsIDAsIDI1NV0pO1xyXG4gICAgc2V0SW5wdXRUeXBlQXJlYU1heCgxKTtcclxuICAgIHNldElucHV0VHlwZUFyZWFNaW4oLTEpO1xyXG4gICAgc2V0SW5wdXRNaW5SYW5nZSgwLjMpO1xyXG4gICAgc2V0SW5wdXRNYXhSYW5nZSgwLjcpO1xyXG4gIH0sIFtzZWxlY3RlZFNlbnNvciwgZ2VvcHJvY2Vzc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEVzcmlNb2R1bGVzKCk7XHJcbiAgfSwgW2ppbXVNYXBWaWV3XSk7XHJcblxyXG4gIC8vRWplY3V0YSBsYSBjcmVhY2lvbiBkZWwgbGF5ZXIgZGUgbGFzIGltYWdlbmVzLCB5IGRldGVjdGEgY3VhbmRvIHNlIG1vZGlmaWNhIGVsIGlucHV0IHJhbmdlIHF1ZSBzZSBlbmNhcmdhIGRlIGNhbGN1bGFyIG51ZXZhbWVudGUgZWwgcmFuZ29cclxuICAvL1RhbWJpZW4gY3VhbmRvIGNhbWJpYSBlbCBhcnJheSBkZSBpbWFnZW5lcyBzZWxlY2Npb25hZGFzXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRJbWFnZXJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWRTZW5zb3IpIHtcclxuICAgICAgICBjb25zdCBzZW5zb3IgPSBhdmFpbGFibGVTZW5zb3JzLmZpbmQoXHJcbiAgICAgICAgICAocykgPT4gcy50aXRsZSA9PT0gc2VsZWN0ZWRTZW5zb3IudGl0bGUgfHwgcy50aXRsZSA9PT0gXCJEZWZhdWx0XCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSBcIldvcmxkdmlldzJcIikge1xyXG4gICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKFxyXG4gICAgICAgICAgICBgKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pYFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09IFwiT1dEX0Zhc2F0Q19NU192Ml8yMDI1MDMxMlwiKSB7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoXHJcbiAgICAgICAgICAgIGAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbMF0/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbMF0/LnZhbHVlfSlgXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gXCJEZWZhdWx0XCIpIHtcclxuICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShcclxuICAgICAgICAgICAgYChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9KWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRDb2xvcihbMCwgMjU1LCAwLCAyNTVdKTtcclxuICAgICAgc2V0SW5wdXRUeXBlQXJlYU1heCgxKTtcclxuICAgICAgc2V0SW5wdXRUeXBlQXJlYU1pbigtMSk7XHJcbiAgICAgIHNldElucHV0TWluUmFuZ2UoMC4zKTtcclxuICAgICAgc2V0SW5wdXRNYXhSYW5nZSgwLjcpO1xyXG4gICAgICBzZXRTZWxlY3RlZEluZGV4KFwiTkRWSVwiKTtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZEltYWdlcmllcy5sZW5ndGggPT09IDAgJiYgamltdU1hcFZpZXcpIHtcclxuICAgICAgY29uc3QgZXhpc3RpbmdMYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmZpbmRMYXllckJ5SWQoXHJcbiAgICAgICAgXCLDjW5kaWNlcyBlc3BlY3RyYWxlc1wiXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChleGlzdGluZ0xheWVyKSB7XHJcbiAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGV4aXN0aW5nTGF5ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3NlbGVjdGVkSW1hZ2VyaWVzLCBzZWxlY3RlZFNlbnNvciwgZ2VvcHJvY2Vzc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldCB3aWRnZXRNYXNrXCI+XHJcbiAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgcHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVNYXNrXCI+XHJcbiAgICAgICAgPFRpdGxlV2l0aFRvb2x0aXBcclxuICAgICAgICAgIHRpdGxlPXt0KFwid2lkZ2V0TGFiZWxcIil9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17dChcIndpZGdldERlc2NyaXB0aW9uXCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3NlbGVjdGVkSW1hZ2VyaWVzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlY3RyYWwtaW5kZXgtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgPHA+e3QoXCJzcGVjdHJhbFJ1bGVcIil9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgaWQ9XCJhY3RpdmVNYXNrMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRTbGljZU1hc2stQmFzZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0Q2xhc3NJbmRpY2VcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZm9ybXVsYVNlbGVjdFwiPnt0KFwic2VsZWN0TmFtZVwiKX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBpZD1cImZvcm11bGFTZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybXVsYUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkSW5kZXh9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJORFZJXCI+e3QoXCJuZHZpXCIpfSAtIE5EVkk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNBVklcIj57dChcInNhdmlcIil9IC0gU0FWSTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTkRXSVwiPnt0KFwibmR3aVwiKX0gLSBORFdJPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50U2xpY2VNYXNrXCI+XHJcbiAgICAgICAgICAgICAgICA8TXVsdGlSYW5nZVNsaWRlclxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTXVsdGkgcmFuZ2Ugc2xpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgbWF4VmFsdWU9e2lucHV0TWF4UmFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG1pblZhbHVlPXtpbnB1dE1pblJhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBtYXg9e2lucHV0VHlwZUFyZWFNYXh9XHJcbiAgICAgICAgICAgICAgICAgIG1pbj17aW5wdXRUeXBlQXJlYU1pbn1cclxuICAgICAgICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobWluLCBtYXgpID0+IGhhbmRsZVJhbmdlQ2hhbmdlKG1pbiwgbWF4KX1cclxuICAgICAgICAgICAgICAgICAgc3RlcD17MC4wMTI1fVxyXG4gICAgICAgICAgICAgICAgICB0b29sdGlwXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNYXJjYWRvcmVzIGRlIGzDrW5lYXMgLSB1c2FuZG8gcG9zaWNpw7NuIGFic29sdXRhIHBhcmEgYWxpbmVhY2nDs24gcGVyZmVjdGEgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1tYXJrc1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogTWFyY2FzIHByaW5jaXBhbGVzIChtw6FzIGFsdGFzKSAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlci1tYXJrIHNsaWRlci1tYXJrLW1haW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IFwiMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItbWFyayBzbGlkZXItbWFyay1tYWluXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBcIjI1JVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlci1tYXJrIHNsaWRlci1tYXJrLW1haW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IFwiNTAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyLW1hcmsgc2xpZGVyLW1hcmstbWFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogXCI3NSVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItbWFyayBzbGlkZXItbWFyay1tYWluXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogTWFyY2FzIGludGVybWVkaWFzIHBlcXVlw7FhcyAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlci1tYXJrIHNsaWRlci1tYXJrLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBcIjEyLjUlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyLW1hcmsgc2xpZGVyLW1hcmstc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IFwiMzcuNSVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItbWFyayBzbGlkZXItbWFyay1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogXCI2Mi41JVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlci1tYXJrIHNsaWRlci1tYXJrLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBcIjg3LjUlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIE1hcmNhcyBhZGljaW9uYWxlcyBtw6FzIHBlcXVlw7FhcyAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlci1tYXJrIHNsaWRlci1tYXJrLXRpbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IFwiNi4yNSVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItbWFyayBzbGlkZXItbWFyay10aW55XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBcIjE4Ljc1JVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlci1tYXJrIHNsaWRlci1tYXJrLXRpbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IFwiMzEuMjUlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyLW1hcmsgc2xpZGVyLW1hcmstdGlueVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogXCI0My43NSVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItbWFyayBzbGlkZXItbWFyay10aW55XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBcIjU2LjI1JVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlci1tYXJrIHNsaWRlci1tYXJrLXRpbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IFwiNjguNzUlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyLW1hcmsgc2xpZGVyLW1hcmstdGlueVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogXCI4MS4yNSVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItbWFyayBzbGlkZXItbWFyay10aW55XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBcIjkzLjc1JVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFNsaWNlTWFza1ByaVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwxTWFza1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbnB1dFR5cGVBcmVhTWluLnRvRml4ZWQoNCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbDFNYXNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhcclxuICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZUFyZWFNaW4gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgKGlucHV0VHlwZUFyZWFNYXggLSBpbnB1dFR5cGVBcmVhTWluKSAqIDAuMjVcclxuICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoNCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjZW50ZXJNYXNrIGxhYmVsMU1hc2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7KChpbnB1dFR5cGVBcmVhTWluICsgaW5wdXRUeXBlQXJlYU1heCkgLyAyKS50b0ZpeGVkKDQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwxTWFza1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsoXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGVBcmVhTWluICtcclxuICAgICAgICAgICAgICAgICAgICAgIChpbnB1dFR5cGVBcmVhTWF4IC0gaW5wdXRUeXBlQXJlYU1pbikgKiAwLjc1XHJcbiAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmlnaHRNYXNrIGxhYmVsMU1hc2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW5wdXRUeXBlQXJlYU1heC50b0ZpeGVkKDQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFzay1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIHR5cGU9XCJET05VVFwiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXJJbWFnZXJ5TGF5ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoXCJhcHBseVwiKX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldDtcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==