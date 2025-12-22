System.register(["jimu-core/react","jimu-core","jimu-arcgis","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
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
___CSS_LOADER_EXPORT___.push([module.id, `.widgetMask {
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
  .slider input {
    color: #008ecc;
  }
}

.contentSliceMaskPri {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label1Mask {
  width: 80px;
  height: 20px;
  text-align: center;
  font-size: 12px;
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
}

.slider-marks {
  position: relative;
  width: 100%;
  height: 12px;
  margin-bottom: 4px;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.slider-mark {
  position: relative;
  width: 2px;
  height: 8px;
  background: #fff;
  opacity: 0.7;
  border-radius: 1px;
  z-index: 2;
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
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #1a5276;
  }
}

.multi-range-slider--range {
  background: #008ecc !important;
  height: 4px;
  opacity: 1;
}

.multi-range-slider--track {
  height: 4px !important;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/mask/src/runtime/assets/style.css","webpack://./../../../geoprocesos%20exprience%20builder/ArcGISExperienceBuilder/client/your-extensions/widgets/mask/src/runtime/assets/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,aAAA;EACA,gBAAA;EACA,YAAA;ACCF;;ADCA;EACE,WAAA;EACA,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,iBAAA;ACEF;;ADAA;EACE,YAAA;EACA,iBAAA;EACA,qBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;ACGF;;ADDA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EAEA;IACE,cAAA;ECGF;AACF;;ADDA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;ACIF;;ADFA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;ACKF;;ADHA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,kHAAA;EAKA,kBAAA;ACEF;;ADAA;EACE,kBAAA;ACGF;;ADDA;EACE,kBAAA;ACIF;;ADFA;EACE,WAAA;ACKF;;ADHA;EACE,UAAA;EACA,gBAAA;ACMF;;ADJA;EACE,UAAA;EACA,eAAA;EACA,YAAA;ACOF;;ADLA;EACE,8BAAA;EACA,aAAA;EACA,mBAAA;ACQF;;ADNA;EACE,YAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;ACSF;;ADPA;EACE,UAAA;EACA,gBAAA;EAEA;IACE,WAAA;ECSF;AACF;;ADPA;EACE,eAAA;ACUF;;ADRA;EACE,qBAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,kCAAA;EACA,mCAAA;EACA,YAAA;ACWF;;ADRA;EACE,WAAA;EACA,YAAA;ACWF;;ADRA;EACE,yBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;ACWF;;ADRA;EACE,aAAA;EACA,8BAAA;ACWF;;ADTA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA;IACE,SAAA;IACA,UAAA;IACA,eAAA;IACA,WAAA;ECYF;AACF;;ADVA;EACE,aAAA;EACA,2BAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EAEA;IACE,yBAAA;IACA,cAAA;IACA,oBAAA;IACA,YAAA;IACA,WAAA;IACA,yBAAA;IAEA;MACE,yBAAA;MACA,oCAAA;MACA,wCAAA;ICWF;EACF;AACF;;ADTA;EACE,UAAA;ACYF;;ADVA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,qBAAA;ACaF;;ADVA;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;ACaF;;ADVA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;ACaF;;ADVA;EACE,kBAAA;EACA,MAAA;EACA,2BAAA;EACA,eAAA;EACA,WAAA;EACA,mBAAA;EACA,oBAAA;ACaF;;ADXA;EACE;IACE,wBAAA;IACA,mBAAA;ECcF;AACF;;ADXA;EACE,8BAAA;EACA,WAAA;EACA,UAAA;ACcF;;ADZA;EACE,sBAAA;ACeF","sourcesContent":[".widgetMask {\n  background-color: #052042;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 15px;\n  overflow: hidden;\n  color: white;\n}\n\n.interHome {\n  height: 75%;\n  width: 100%;\n  justify-content: left;\n  text-align: left;\n  padding-top: 10px;\n}\n\n.contentSliceMask-Base {\n  height: 100%;\n  min-height: 180px;\n  justify-content: left;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0.3rem;\n}\n\n.contentSliceMask {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  .slider input {\n    color: #008ecc;\n  }\n}\n\n.contentSliceMaskPri {\n  width: 100%;\n  height: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.label1Mask {\n  width: 80px;\n  height: 20px;\n  text-align: center;\n  font-size: 12px;\n}\n\n.rangeInputMask {\n  height: 20px;\n  width: 400px;\n  height: 0.5em;\n  display: block;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4039215686) calc((var(--value) + 1) * 50%), #004a98 0);\n  border-radius: 3px;\n}\n\n.centerMask {\n  text-align: center;\n}\n\n.rightMask {\n  text-align: center;\n}\n\n.porcentajeClassMask {\n  width: 80px;\n}\n\n.intermedioNegativo {\n  width: 75%;\n  margin-left: 25%;\n}\n\n.intermedioPositivo {\n  width: 75%;\n  text-align: end;\n  height: 20px;\n}\n\n.selectClassIndice {\n  justify-content: space-between;\n  display: flex;\n  margin-bottom: 15px;\n}\n\n.selectClassIndice label {\n  width: 200px;\n  font-size: 13px;\n  height: 23px;\n  padding-top: 5px;\n}\n\n.selectClassIndice select {\n  width: 70%;\n  max-width: 400px;\n  &:hover {\n    color: #fff;\n  }\n}\n\n.contentBtnVolver {\n  padding-top: 5%;\n}\n\n.btnWidgetsPri {\n  text-decoration: none;\n  border: none;\n  box-shadow: none;\n  height: 30px;\n  width: auto;\n  border-radius: 5px;\n  font-weight: 700;\n  background-color: rgb(15, 89, 194);\n  border: solid 2px rgb(78, 151, 255);\n  color: white;\n}\n\n#contentIndicesNomales {\n  width: 100%;\n  height: 100%;\n}\n\n.btnMask {\n  background-color: #6a6969;\n  color: white;\n  width: auto;\n  height: 30px;\n  text-decoration: none;\n  border: none;\n  margin: 6px;\n  border-radius: 5px;\n  padding: 6px 20px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n#contentConsultaBai {\n  display: flex;\n  justify-content: space-between;\n}\n\n.spectral-index-description {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: start;\n  align-items: start;\n  p {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    color: #fff;\n  }\n}\n\n.mask-buttons {\n  display: flex;\n  justify-content: flex-start;\n  gap: 1rem;\n  width: 35%;\n  margin-top: auto;\n  button {\n    background-color: #1a5276;\n    flex: 0 0 auto;\n    padding: 0.5rem 2rem;\n    height: 2rem;\n    width: 100%;\n    transition: all 0.3s ease;\n    &:hover {\n      border: 1px solid #008ecc;\n      background-color: #052042 !important;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n}\n\n.slider {\n  padding: 0;\n}\n\n.slider-marks {\n  position: relative;\n  width: 100%;\n  height: 12px;\n  margin-bottom: 4px;\n  padding: 0 0.3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.slider-mark {\n  position: relative;\n  width: 2px;\n  height: 8px;\n  background: #fff;\n  opacity: 0.7;\n  border-radius: 1px;\n  z-index: 2;\n}\n\n.slider-labels {\n  position: relative;\n  width: 100%;\n  height: 20px;\n  margin-top: 2px;\n}\n\n.slider-label {\n  position: absolute;\n  top: 0;\n  transform: translateX(-50%);\n  font-size: 12px;\n  color: #fff;\n  white-space: nowrap;\n  pointer-events: none;\n}\n\n.multi-range-slider {\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: #1a5276;\n  }\n}\n\n.multi-range-slider--range {\n  background: #008ecc !important;\n  height: 4px;\n  opacity: 1;\n}\n\n.multi-range-slider--track {\n  height: 4px !important;\n}",".widgetMask {\n  background-color: #052042;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 15px;\n  overflow: hidden;\n  color: white;\n}\n\n.interHome {\n  height: 75%;\n  width: 100%;\n  justify-content: left;\n  text-align: left;\n  padding-top: 10px;\n}\n\n.contentSliceMask-Base {\n  height: 100%;\n  min-height: 180px;\n  justify-content: left;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0.3rem;\n}\n\n.contentSliceMask {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  .slider input {\n    color: #008ecc;\n  }\n}\n\n.contentSliceMaskPri {\n  width: 100%;\n  height: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.label1Mask {\n  width: 80px;\n  height: 20px;\n  text-align: center;\n  font-size: 12px;\n}\n\n.rangeInputMask {\n  height: 20px;\n  width: 400px;\n  height: 0.5em;\n  display: block;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4039215686) calc((var(--value) + 1) * 50%), #004a98 0);\n  border-radius: 3px;\n}\n\n.centerMask {\n  text-align: center;\n}\n\n.rightMask {\n  text-align: center;\n}\n\n.porcentajeClassMask {\n  width: 80px;\n}\n\n.intermedioNegativo {\n  width: 75%;\n  margin-left: 25%;\n}\n\n.intermedioPositivo {\n  width: 75%;\n  text-align: end;\n  height: 20px;\n}\n\n.selectClassIndice {\n  justify-content: space-between;\n  display: flex;\n  margin-bottom: 15px;\n}\n\n.selectClassIndice label {\n  width: 200px;\n  font-size: 13px;\n  height: 23px;\n  padding-top: 5px;\n}\n\n.selectClassIndice select {\n  width: 70%;\n  max-width: 400px;\n  &:hover {\n    color: #fff;\n  }\n}\n\n.contentBtnVolver {\n  padding-top: 5%;\n}\n\n.btnWidgetsPri {\n  text-decoration: none;\n  border: none;\n  box-shadow: none;\n  height: 30px;\n  width: auto;\n  border-radius: 5px;\n  font-weight: 700;\n  background-color: rgb(15, 89, 194);\n  border: solid 2px rgb(78, 151, 255);\n  color: white;\n}\n\n#contentIndicesNomales {\n  width: 100%;\n  height: 100%;\n}\n\n.btnMask {\n  background-color: #6a6969;\n  color: white;\n  width: auto;\n  height: 30px;\n  text-decoration: none;\n  border: none;\n  margin: 6px;\n  border-radius: 5px;\n  padding: 6px 20px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n#contentConsultaBai {\n  display: flex;\n  justify-content: space-between;\n}\n\n.spectral-index-description {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: start;\n  align-items: start;\n  p {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    color: #fff;\n  }\n}\n\n.mask-buttons {\n  display: flex;\n  justify-content: flex-start;\n  gap: 1rem;\n  width: 35%;\n  margin-top: auto;\n  button {\n    background-color: #1a5276;\n    flex: 0 0 auto;\n    padding: 0.5rem 2rem;\n    height: 2rem;\n    width: 100%;\n    transition: all 0.3s ease;\n    &:hover {\n      border: 1px solid #008ecc;\n      background-color: #052042 !important;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n}\n\n.slider {\n  padding: 0;\n}\n\n.slider-marks {\n  position: relative;\n  width: 100%;\n  height: 12px;\n  margin-bottom: 4px;\n  padding: 0 0.3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.slider-mark {\n  position: relative;\n  width: 2px;\n  height: 8px;\n  background: #fff;\n  opacity: 0.7;\n  border-radius: 1px;\n  z-index: 2;\n}\n\n.slider-labels {\n  position: relative;\n  width: 100%;\n  height: 20px;\n  margin-top: 2px;\n}\n\n.slider-label {\n  position: absolute;\n  top: 0;\n  transform: translateX(-50%);\n  font-size: 12px;\n  color: #fff;\n  white-space: nowrap;\n  pointer-events: none;\n}\n\n.multi-range-slider {\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: #1a5276;\n  }\n}\n\n.multi-range-slider--range {\n  background: #008ecc !important;\n  height: 4px;\n  opacity: 1;\n}\n\n.multi-range-slider--track {\n  height: 4px !important;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/esm/esri-loader.js");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/style.css */ "./your-extensions/widgets/mask/src/runtime/assets/style.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useLocale */ "./your-extensions/hooks/useLocale.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./translations */ "./your-extensions/widgets/mask/src/runtime/translations.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









const sensors = [
    {
        id: 'worldview',
        title: 'Worldview2',
        bands: [
            { name: 'Coastal(1)', value: '1' },
            { name: 'Blue(2)', value: '2' },
            { name: 'Green(3)', value: '3' },
            { name: 'Yellow(4)', value: '4' },
            { name: 'Red(5)', value: '5' },
            { name: 'Red Edge(6)', value: '6' },
            { name: 'NIR -1(7)', value: '7' },
            { name: 'NIR -2(8)', value: '8' },
        ]
    },
    {
        id: 'fasat',
        title: 'OWD_FasatC_MS_v2_20250312',
        bands: [
            { name: 'Red(1)', value: '1' },
            { name: 'Green(2)', value: '2' },
            { name: 'Blue(3)', value: '3' },
            { name: 'NIR(4)', value: '4' },
        ]
    },
    {
        id: 'default',
        title: 'Default',
        bands: [
            { name: 'Blue(1)', value: '1' },
            { name: 'Green(2)', value: '2' },
            { name: 'Red(3)', value: '3' },
            { name: 'NIR(4)', value: '4' },
        ]
    }
];
const Widget = (props) => {
    const { t } = (0,_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__.useLocale)(_translations__WEBPACK_IMPORTED_MODULE_7__.translations);
    const selectedImageries = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedImages; });
    const selectedSensor = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedSensor; });
    const geoprocess = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.geoprocess; });
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [inputMinRange, setInputMinRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [inputMaxRange, setInputMaxRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0.5);
    const [inputTypeAreaMax, setInputTypeAreaMax] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [inputTypeAreaMin, setInputTypeAreaMin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1);
    const [selectedFormula, setSelectedFormula] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('(b4 - b1) / (b4 + b1)');
    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([0, 255, 0, 255]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isFire, setIsFire] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [availableSensors, setAvailableSensors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sensors);
    const [isAplied, setIsAplied] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    //refs
    const imageryLayerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const esriModulesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const activeViewChangeHandler = (jmv) => {
        if (jmv) {
            // if (jimuMapView) {
            //   jimuMapView.view.watch('extent', null);
            //   jimuMapView.view.watch('zoom', null);
            // }
            setJimuMapView(jmv);
            // if (jmv) {
            //   jmv.view.watch('extent', aplicarMascara);
            //   jmv.view.watch('zoom', aplicarMascara);
            // }
        }
    };
    function parseBands(value) {
        return value
            .trim()
            .split(/\s+/) // separa por uno o más espacios
            .map(Number); // convierte a number
    }
    const handleRangeChange = (minValue, maxValue) => {
        setInputMinRange(minValue);
        setInputMaxRange(maxValue);
        crearImageryLayer();
    };
    const handleFormulaChange = (event) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17;
        setIsAplied(false);
        removeLayer();
        const formula = event.target.value;
        switch (formula) {
            case "NDVI":
                setIsFire(false);
                //setIndiceType("NDVI");
                if (selectedSensor) {
                    const sensor = availableSensors.find(s => s.title === selectedSensor.title || s.title === "Default");
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'Worldview2') {
                        setSelectedFormula(`(B${(_a = sensor.bands[6]) === null || _a === void 0 ? void 0 : _a.value} - B${(_b = sensor.bands[4]) === null || _b === void 0 ? void 0 : _b.value}) / (B${(_c = sensor.bands[6]) === null || _c === void 0 ? void 0 : _c.value} + B${(_d = sensor.bands[4]) === null || _d === void 0 ? void 0 : _d.value})`);
                    }
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'OWD_FasatC_MS_v2_20250312') {
                        setSelectedFormula(`(B${(_e = sensor.bands[3]) === null || _e === void 0 ? void 0 : _e.value} - B${(_f = sensor.bands[0]) === null || _f === void 0 ? void 0 : _f.value}) / (B${(_g = sensor.bands[3]) === null || _g === void 0 ? void 0 : _g.value} + B${(_h = sensor.bands[0]) === null || _h === void 0 ? void 0 : _h.value})`);
                    }
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'Default') {
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
                setIsFire(false);
                if (selectedSensor) {
                    const sensor = availableSensors.find(s => s.title === selectedSensor.title || s.title === "Default");
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'Worldview2') {
                        setSelectedFormula(`((B${(_o = sensor.bands[6]) === null || _o === void 0 ? void 0 : _o.value} - B${(_p = sensor.bands[4]) === null || _p === void 0 ? void 0 : _p.value}) / (B${(_q = sensor.bands[6]) === null || _q === void 0 ? void 0 : _q.value} + B${(_r = sensor.bands[4]) === null || _r === void 0 ? void 0 : _r.value} + 0,5)) * (1 + 0,5)`);
                    }
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'OWD_FasatC_MS_v2_20250312') {
                        setSelectedFormula(`((B${(_s = sensor.bands[3]) === null || _s === void 0 ? void 0 : _s.value} - B${(_t = sensor.bands[0]) === null || _t === void 0 ? void 0 : _t.value}) / (B${(_u = sensor.bands[3]) === null || _u === void 0 ? void 0 : _u.value} + B${(_v = sensor.bands[0]) === null || _v === void 0 ? void 0 : _v.value} + 0,5)) * (1 + 0,5)`);
                    }
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'Default') {
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
                setIsFire(false);
                //setIndiceType("NDWI");
                if (selectedSensor) {
                    const sensor = availableSensors.find(s => s.title === selectedSensor.title || s.title === "Default");
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'Worldview2') {
                        setSelectedFormula(`(B${(_0 = sensor.bands[2]) === null || _0 === void 0 ? void 0 : _0.value} - B${(_1 = sensor.bands[6]) === null || _1 === void 0 ? void 0 : _1.value}) / (B${(_2 = sensor.bands[2]) === null || _2 === void 0 ? void 0 : _2.value} + B${(_3 = sensor.bands[6]) === null || _3 === void 0 ? void 0 : _3.value})`);
                    }
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'OWD_FasatC_MS_v2_20250312') {
                        setSelectedFormula(`(B${(_4 = sensor.bands[1]) === null || _4 === void 0 ? void 0 : _4.value} - B${(_5 = sensor.bands[3]) === null || _5 === void 0 ? void 0 : _5.value}) / (B${(_6 = sensor.bands[1]) === null || _6 === void 0 ? void 0 : _6.value} + B${(_7 = sensor.bands[3]) === null || _7 === void 0 ? void 0 : _7.value})`);
                    }
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'Default') {
                        setSelectedFormula(`(B${(_8 = sensor.bands[1]) === null || _8 === void 0 ? void 0 : _8.value} - B${(_9 = sensor.bands[3]) === null || _9 === void 0 ? void 0 : _9.value}) / (B${(_10 = sensor.bands[1]) === null || _10 === void 0 ? void 0 : _10.value} + B${(_11 = sensor.bands[3]) === null || _11 === void 0 ? void 0 : _11.value})`);
                    }
                }
                setColor([0, 0, 255, 255]);
                setInputTypeAreaMax(1);
                setInputTypeAreaMin(-1);
                setInputMinRange(0.3);
                setInputMaxRange(0.7);
                break;
            case "BAI":
                //aplicar la formula  1 / ((0.1 - Rojo)^2 + (0.06 - NIR)^2)
                if (selectedSensor) {
                    const sensor = availableSensors.find(s => s.title === selectedSensor.title || s.title === "Default");
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'Worldview2') {
                        setSelectedFormula(`1 / ((0.1 - B${(_12 = sensor.bands[4]) === null || _12 === void 0 ? void 0 : _12.value})**2 + (0.06 - B${(_13 = sensor.bands[6]) === null || _13 === void 0 ? void 0 : _13.value})**2)`);
                    }
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'OWD_FasatC_MS_v2_20250312') {
                        setSelectedFormula(`1 / ((0.1 - B${(_14 = sensor.bands[0]) === null || _14 === void 0 ? void 0 : _14.value})**2 + (0.06 - B${(_15 = sensor.bands[3]) === null || _15 === void 0 ? void 0 : _15.value})**2)`);
                    }
                    if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'Default') {
                        setSelectedFormula(`1 / ((0.1 - B${(_16 = sensor.bands[2]) === null || _16 === void 0 ? void 0 : _16.value})**2 + (0.06 - B${(_17 = sensor.bands[3]) === null || _17 === void 0 ? void 0 : _17.value})**2)`);
                    }
                }
                setIsFire(true);
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
                        functionName: 'BandArithmetic',
                        outputPixelType: 'F32',
                        functionArguments: {
                            Method: 0,
                            BandIndexes: selectedFormula,
                        },
                    });
                    const remapFunction = new RasterFunction({
                        functionName: 'Remap',
                        outputPixelType: 'F32',
                        functionArguments: {
                            Raster: bandArithmeticFunction,
                            InputRanges: [inputMinRange, inputMaxRange],
                            OutputValues: [2],
                            NoDataRanges: [-Infinity, inputTypeAreaMin, inputTypeAreaMax, Infinity],
                            AllowUnmatched: false,
                        },
                    });
                    const stretchRenderer = new RasterStretchRenderer({
                        stretchType: 'min-max',
                        statistics: [
                            {
                                min: inputTypeAreaMin,
                                max: inputTypeAreaMax,
                                avg: (inputTypeAreaMin + inputTypeAreaMax) / 2,
                                stddev: 0.1,
                            },
                        ],
                        colorRamp: {
                            type: 'algorithmic',
                            fromColor: [255, 255, 255, 0],
                            toColor: color,
                        },
                    });
                    //Se crea la nueva capa filtrada por id
                    const newImageryLayer = new ImageryLayer({
                        url: layerUrl,
                        id: 'Índices espectrales',
                        visible: true,
                        title: t("widgetLabel"),
                        definitionExpression, // Filtro por OBJECTID
                    });
                    // Eliminar la capa existente si ya está cargada
                    const existingLayer = jimuMapView.view.map.findLayerById('Índices espectrales');
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
    const indiceBai = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f;
        setLoading(true);
        try {
            const selectedImage = selectedImageries[0];
            const objectId = selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.OBJECTID;
            const proceso = 5;
            const entrada = objectId;
            const geometry = {
                x: selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.longitude,
                y: selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.latitude,
                spatialReference: { wkid: 4326 }
            };
            const session = jimu_core__WEBPACK_IMPORTED_MODULE_1__.SessionManager.getInstance().getMainSession();
            const token = session === null || session === void 0 ? void 0 : session.token;
            let baseUrl = (selectedSensor === null || selectedSensor === void 0 ? void 0 : selectedSensor.url) || "https://gisciv.snsat.cl/dynimage/rest/services/02_Geoproceso_en_linea/OWD_FasatC_MS_v2_20250312/ImageServer";
            let newUrlSample = `${baseUrl}/getSamples?geometry=${JSON.stringify(geometry)}&geometryType=esriGeometryPoint&inSR=4326&outSR=4326&returnGeometry=true&returnCatalogItems=true&f=json`;
            if (token) {
                newUrlSample += `&token=${token}`;
            }
            const responseSample = yield fetch(newUrlSample, {
                method: 'GET',
            });
            const dataSample = yield responseSample.json();
            console.log({ dataSample });
            const bands = parseBands(dataSample.samples[0].value);
            // Desestructuración limpia
            const [B1, B2, B3, B4] = bands;
            console.log({ B1, B2, B3, B4 });
            // 1 / ((0.1 - 10.522630692)**2 + ((0.06 - 11.429913521)**2));
            //1 / (110.7257566802204 + 130.6429230975386)
            // 1/ 241.368679777759
            //0.0041430396061359
            const denominador = 1 / ((Math.pow((0.1 - B1), 2) + (Math.pow((0.06 - B4), 2))));
            console.log(Math.pow((0.1 - B1), 2));
            console.log(Math.pow((0.06 - B4), 2));
            console.log({ denominador });
            var urlConsulta = `http://127.0.0.1:5000/proxy?proceso=${proceso}&Entrada=${entrada}&url=${selectedSensor.url}&denominador=${denominador}`;
            const response = yield fetch(urlConsulta, {
                method: 'GET',
            });
            const data = yield response.json();
            const responseData = yield fetch(`http://127.0.0.1:5000${data.urlJson}`, {
                method: 'GET',
            });
            const dataValidada = yield responseData.json();
            //setIndiceType("BAI");
            if (selectedSensor) {
                const sensor = sensors.find(s => s.title === selectedSensor.title);
                if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'Worldview2') {
                    setSelectedFormula(`1 / (((0,1 - B${(_a = sensor.bands[4]) === null || _a === void 0 ? void 0 : _a.value})^2) + ((0,06 - B${(_b = sensor.bands[6]) === null || _b === void 0 ? void 0 : _b.value})^2))`);
                }
                if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'OWD_FasatC_MS_v2_20250312') {
                    setSelectedFormula(`1 / (((0,1 - B${(_c = sensor.bands[0]) === null || _c === void 0 ? void 0 : _c.value})^2) + ((0,06 - B${(_d = sensor.bands[3]) === null || _d === void 0 ? void 0 : _d.value})^2))`);
                }
                if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'Default') {
                    setSelectedFormula(`1 / (((0,1 - B${(_e = sensor.bands[2]) === null || _e === void 0 ? void 0 : _e.value})^2) + ((0,06 - B${(_f = sensor.bands[3]) === null || _f === void 0 ? void 0 : _f.value})^2))`);
                }
            }
            console.log(dataValidada);
            setColor([255, 0, 0, 255]);
            setInputTypeAreaMin(parseFloat(dataValidada.etiquetas.etiqueta_1));
            setInputMinRange(parseFloat(dataValidada.etiquetas.etiqueta_3));
            setInputMaxRange(parseFloat(dataValidada.etiquetas.etiqueta_4));
            setInputTypeAreaMax(parseFloat(dataValidada.etiquetas.etiqueta_5));
        }
        catch (error) {
            console.error('Error al enviar la solicitud:', error);
            setLoading(false);
        }
    });
    //Se crea una funcion para cargar los modulos de Esri
    const loadEsriModules = () => {
        if (jimuMapView) {
            (0,esri_loader__WEBPACK_IMPORTED_MODULE_3__.loadModules)([
                'esri/layers/support/RasterFunction',
                'esri/renderers/RasterStretchRenderer',
                'esri/layers/ImageryLayer',
                'esri/rest/query',
                'esri/widgets/Histogram',
                "esri/request"
            ])
                .then(([RasterFunction, RasterStretchRenderer, ImageryLayer, query, Histogram, esriRequest]) => {
                esriModulesRef.current = { RasterFunction, RasterStretchRenderer, ImageryLayer, query, Histogram, esriRequest };
            })
                .catch((err) => {
                console.error('Error loading ESRI modules: ', err);
            });
        }
    };
    const removeLayer = () => {
        if (selectedSensor) {
            const existingLayer = jimuMapView.view.map.findLayerById('Índices espectrales');
            if (existingLayer) {
                jimuMapView.view.map.remove(existingLayer);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        removeLayer();
        if (selectedSensor) {
            const sensor = availableSensors.find(s => s.title === selectedSensor.title || s.title === "Default");
            if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'Worldview2') {
                setSelectedFormula(`(B${(_a = sensor.bands[6]) === null || _a === void 0 ? void 0 : _a.value} - B${(_b = sensor.bands[4]) === null || _b === void 0 ? void 0 : _b.value}) / (B${(_c = sensor.bands[6]) === null || _c === void 0 ? void 0 : _c.value} + B${(_d = sensor.bands[4]) === null || _d === void 0 ? void 0 : _d.value})`);
            }
            if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'OWD_FasatC_MS_v2_20250312') {
                setSelectedFormula(`(B${(_e = sensor.bands[3]) === null || _e === void 0 ? void 0 : _e.value} - B${(_f = sensor.bands[0]) === null || _f === void 0 ? void 0 : _f.value}) / (B${(_g = sensor.bands[3]) === null || _g === void 0 ? void 0 : _g.value} + B${(_h = sensor.bands[0]) === null || _h === void 0 ? void 0 : _h.value})`);
            }
            if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'Default') {
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
                const sensor = availableSensors.find(s => s.title === selectedSensor.title || s.title === "Default");
                if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'Worldview2') {
                    setSelectedFormula(`(B${(_a = sensor.bands[6]) === null || _a === void 0 ? void 0 : _a.value} - B${(_b = sensor.bands[4]) === null || _b === void 0 ? void 0 : _b.value}) / (B${(_c = sensor.bands[6]) === null || _c === void 0 ? void 0 : _c.value} + B${(_d = sensor.bands[4]) === null || _d === void 0 ? void 0 : _d.value})`);
                }
                if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'OWD_FasatC_MS_v2_20250312') {
                    setSelectedFormula(`(B${(_e = sensor.bands[3]) === null || _e === void 0 ? void 0 : _e.value} - B${(_f = sensor.bands[0]) === null || _f === void 0 ? void 0 : _f.value}) / (B${(_g = sensor.bands[3]) === null || _g === void 0 ? void 0 : _g.value} + B${(_h = sensor.bands[0]) === null || _h === void 0 ? void 0 : _h.value})`);
                }
                if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === 'Default') {
                    setSelectedFormula(`(B${(_j = sensor.bands[3]) === null || _j === void 0 ? void 0 : _j.value} - B${(_k = sensor.bands[2]) === null || _k === void 0 ? void 0 : _k.value}) / (B${(_l = sensor.bands[3]) === null || _l === void 0 ? void 0 : _l.value} + B${(_m = sensor.bands[2]) === null || _m === void 0 ? void 0 : _m.value})`);
                }
            }
            setColor([0, 255, 0, 255]);
            setInputTypeAreaMax(1);
            setInputTypeAreaMin(-1);
            setInputMinRange(0.3);
            setInputMaxRange(0.7);
        }
        if (selectedImageries.length === 0 && jimuMapView) {
            const existingLayer = jimuMapView.view.map.findLayerById('Índices espectrales');
            if (existingLayer) {
                jimuMapView.view.map.remove(existingLayer);
            }
        }
    }, [selectedImageries, selectedSensor]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (isFire) {
            setLoading(true);
            indiceBai()
                .finally(() => {
                setLoading(false);
            });
        }
    }, [isFire]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "jimu-widget widgetMask" },
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: activeViewChangeHandler })),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'homeMask' },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h4", null, t("widgetLabel"))),
            selectedImageries.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'spectral-index-description' },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, t("spectralRule"))))
                :
                    (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { id: 'activeMask2' },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'contentSliceMask-Base' },
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'selectClassIndice' },
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { htmlFor: "formulaSelect" }, t("selectName")),
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Select, { id: "formulaSelect", onChange: handleFormulaChange, size: "sm", defaultValue: "NDVI" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", { value: "NDVI" },
                                        t("ndvi"),
                                        " - NDVI"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", { value: "SAVI" },
                                        t("savi"),
                                        " - SAVI"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", { value: "NDWI" },
                                        t("ndwi"),
                                        " - NDWI"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", { value: "BAI" }, t("bai")))),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'contentSliceMask' },
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.MultiRangeSlider, { "aria-label": "Multi range slider", maxValue: inputMaxRange, minValue: inputMinRange, max: inputTypeAreaMax, min: inputTypeAreaMin, onAcceptValue: () => { }, onChange: (min, max, activeThumb) => handleRangeChange(min, max), step: isFire ? 0.00001 : 0.05, tooltip: true }),
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'slider-marks' },
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'slider-mark' }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'slider-mark' }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'slider-mark' }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'slider-mark' }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'slider-mark' })),
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'contentSliceMaskPri' },
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: 'label1Mask' }, inputTypeAreaMin.toFixed(4)),
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: 'label1Mask' }, ((inputTypeAreaMax / 2) + inputTypeAreaMin).toFixed(4)),
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: 'centerMask label1Mask' }, ((inputTypeAreaMin + inputTypeAreaMax) / 2).toFixed(4)),
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: 'label1Mask' }, (inputTypeAreaMax / 2).toFixed(4)),
                                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: 'rightMask label1Mask' }, (inputTypeAreaMax).toFixed(4)))),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'mask-buttons' }, loading === true ? (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { size: "sm", type: "primary" },
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Loading, { type: "DONUT", height: 20, width: 20 })))
                                :
                                    (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: () => { crearImageryLayer(), setIsAplied(true); }, size: "sm", type: "primary" }, t("apply"))))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXNrL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQ2pCO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sOFFBQThRLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVcsUUFBUSxhQUFhLCtDQUErQyxNQUFNO0FBQzlGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsYUFBYTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFlBQVksTUFBTSxNQUFNLHFDQUFxQyw2QkFBNkI7QUFDekg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGtEQUFrRCxrQ0FBa0M7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RSxHQUFHLEVBQUUsR0FBRyxpQkFBaUIsRUFBRSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsU0FBUyxJQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBVSxDQUNsSCxDQUVELENBQ0YsQ0FDRixDQUNQLENBSUQsQ0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixpRUFBZSxNQUFNLEVBQUM7QUFDZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXNrL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vZXNyaS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9tb2R1bGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vc2NyaXB0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vdXRpbHMvY3NzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy91cmwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hc2svc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzcz8yMmQ5Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy9ob29rcy91c2VMb2NhbGUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hc2svc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS93aXRoLXNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9kaXN0L3JlYWN0LXJlZHV4Lm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFzay9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAud2lkZ2V0TWFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW50ZXJIb21lIHtcbiAgaGVpZ2h0OiA3NSU7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uY29udGVudFNsaWNlTWFzay1CYXNlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxODBweDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC4zcmVtO1xufVxuXG4uY29udGVudFNsaWNlTWFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLnNsaWRlciBpbnB1dCB7XG4gICAgY29sb3I6ICMwMDhlY2M7XG4gIH1cbn1cblxuLmNvbnRlbnRTbGljZU1hc2tQcmkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sYWJlbDFNYXNrIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yYW5nZUlucHV0TWFzayB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDAuNWVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDAzOTIxNTY4NikgY2FsYygodmFyKC0tdmFsdWUpICsgMSkgKiA1MCUpLCAjMDA0YTk4IDApO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5jZW50ZXJNYXNrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmlnaHRNYXNrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9yY2VudGFqZUNsYXNzTWFzayB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4uaW50ZXJtZWRpb05lZ2F0aXZvIHtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuLmludGVybWVkaW9Qb3NpdGl2byB7XG4gIHdpZHRoOiA3NSU7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uc2VsZWN0Q2xhc3NJbmRpY2Uge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5zZWxlY3RDbGFzc0luZGljZSBsYWJlbCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5zZWxlY3RDbGFzc0luZGljZSBzZWxlY3Qge1xuICB3aWR0aDogNzAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4uY29udGVudEJ0blZvbHZlciB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLmJ0bldpZGdldHNQcmkge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDg5LCAxOTQpO1xuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoNzgsIDE1MSwgMjU1KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jY29udGVudEluZGljZXNOb21hbGVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJ0bk1hc2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmE2OTY5O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA2cHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2NvbnRlbnRDb25zdWx0YUJhaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNwZWN0cmFsLWluZGV4LWRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLm1hc2stYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiAxcmVtO1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MiAhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG4gIH1cbn1cblxuLnNsaWRlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zbGlkZXItbWFya3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgcGFkZGluZzogMCAwLjNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uc2xpZGVyLW1hcmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBvcGFjaXR5OiAwLjc7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgei1pbmRleDogMjtcbn1cblxuLnNsaWRlci1sYWJlbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnNsaWRlci1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubXVsdGktcmFuZ2Utc2xpZGVyIHtcbiAgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzFhNTI3NjtcbiAgfVxufVxuXG4ubXVsdGktcmFuZ2Utc2xpZGVyLS1yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICMwMDhlY2MgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0cHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tdWx0aS1yYW5nZS1zbGlkZXItLXRyYWNrIHtcbiAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hc2svc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzc1wiLFwid2VicGFjazovLy4vLi4vLi4vLi4vZ2VvcHJvY2Vzb3MlMjBleHByaWVuY2UlMjBidWlsZGVyL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXNrL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBO0lBQ0UsY0FBQTtFQ0dGO0FBQ0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0tGOztBREhBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtIQUFBO0VBS0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsV0FBQTtBQ0tGOztBREhBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNPRjs7QURMQTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDUUY7O0FETkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1NGOztBRFBBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBRUE7SUFDRSxXQUFBO0VDU0Y7QUFDRjs7QURQQTtFQUNFLGVBQUE7QUNVRjs7QURSQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7QUNXRjs7QURSQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDV0Y7O0FEUkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1dGOztBRFJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDV0Y7O0FEVEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0E7SUFDRSxTQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VDWUY7QUFDRjs7QURWQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFFQTtJQUNFLHlCQUFBO0lBQ0EsY0FBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUVBO01BQ0UseUJBQUE7TUFDQSxvQ0FBQTtNQUNBLHdDQUFBO0lDV0Y7RUFDRjtBQUNGOztBRFRBO0VBQ0UsVUFBQTtBQ1lGOztBRFZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQ2FGOztBRFZBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ2FGOztBRFZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNhRjs7QURWQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDYUY7O0FEWEE7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsbUJBQUE7RUNjRjtBQUNGOztBRFhBO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ2NGOztBRFpBO0VBQ0Usc0JBQUE7QUNlRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2lkZ2V0TWFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmludGVySG9tZSB7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudFNsaWNlTWFzay1CYXNlIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG59XFxuXFxuLmNvbnRlbnRTbGljZU1hc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgLnNsaWRlciBpbnB1dCB7XFxuICAgIGNvbG9yOiAjMDA4ZWNjO1xcbiAgfVxcbn1cXG5cXG4uY29udGVudFNsaWNlTWFza1ByaSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGFiZWwxTWFzayB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnJhbmdlSW5wdXRNYXNrIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMC41ZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQwMzkyMTU2ODYpIGNhbGMoKHZhcigtLXZhbHVlKSArIDEpICogNTAlKSwgIzAwNGE5OCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmNlbnRlck1hc2sge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmlnaHRNYXNrIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBvcmNlbnRhamVDbGFzc01hc2sge1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5pbnRlcm1lZGlvTmVnYXRpdm8ge1xcbiAgd2lkdGg6IDc1JTtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcblxcbi5pbnRlcm1lZGlvUG9zaXRpdm8ge1xcbiAgd2lkdGg6IDc1JTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnNlbGVjdENsYXNzSW5kaWNlIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uc2VsZWN0Q2xhc3NJbmRpY2UgbGFiZWwge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuLnNlbGVjdENsYXNzSW5kaWNlIHNlbGVjdCB7XFxuICB3aWR0aDogNzAlO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG59XFxuXFxuLmNvbnRlbnRCdG5Wb2x2ZXIge1xcbiAgcGFkZGluZy10b3A6IDUlO1xcbn1cXG5cXG4uYnRuV2lkZ2V0c1ByaSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCA4OSwgMTk0KTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYig3OCwgMTUxLCAyNTUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29udGVudEluZGljZXNOb21hbGVzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYnRuTWFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmE2OTY5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDZweCAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnRDb25zdWx0YUJhaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc3BlY3RyYWwtaW5kZXgtZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxufVxcblxcbi5tYXNrLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiAzNSU7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDIgIWltcG9ydGFudDtcXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNsaWRlci1tYXJrcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIHBhZGRpbmc6IDAgMC4zcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLnNsaWRlci1tYXJrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uc2xpZGVyLWxhYmVscyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjBweDtcXG4gIG1hcmdpbi10b3A6IDJweDtcXG59XFxuXFxuLnNsaWRlci1sYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm11bHRpLXJhbmdlLXNsaWRlciB7XFxuICBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICMxYTUyNzY7XFxuICB9XFxufVxcblxcbi5tdWx0aS1yYW5nZS1zbGlkZXItLXJhbmdlIHtcXG4gIGJhY2tncm91bmQ6ICMwMDhlY2MgIWltcG9ydGFudDtcXG4gIGhlaWdodDogNHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm11bHRpLXJhbmdlLXNsaWRlci0tdHJhY2sge1xcbiAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcXG59XCIsXCIud2lkZ2V0TWFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmludGVySG9tZSB7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudFNsaWNlTWFzay1CYXNlIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG59XFxuXFxuLmNvbnRlbnRTbGljZU1hc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgLnNsaWRlciBpbnB1dCB7XFxuICAgIGNvbG9yOiAjMDA4ZWNjO1xcbiAgfVxcbn1cXG5cXG4uY29udGVudFNsaWNlTWFza1ByaSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGFiZWwxTWFzayB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnJhbmdlSW5wdXRNYXNrIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMC41ZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQwMzkyMTU2ODYpIGNhbGMoKHZhcigtLXZhbHVlKSArIDEpICogNTAlKSwgIzAwNGE5OCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmNlbnRlck1hc2sge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmlnaHRNYXNrIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBvcmNlbnRhamVDbGFzc01hc2sge1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5pbnRlcm1lZGlvTmVnYXRpdm8ge1xcbiAgd2lkdGg6IDc1JTtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcblxcbi5pbnRlcm1lZGlvUG9zaXRpdm8ge1xcbiAgd2lkdGg6IDc1JTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnNlbGVjdENsYXNzSW5kaWNlIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uc2VsZWN0Q2xhc3NJbmRpY2UgbGFiZWwge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuLnNlbGVjdENsYXNzSW5kaWNlIHNlbGVjdCB7XFxuICB3aWR0aDogNzAlO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG59XFxuXFxuLmNvbnRlbnRCdG5Wb2x2ZXIge1xcbiAgcGFkZGluZy10b3A6IDUlO1xcbn1cXG5cXG4uYnRuV2lkZ2V0c1ByaSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCA4OSwgMTk0KTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYig3OCwgMTUxLCAyNTUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29udGVudEluZGljZXNOb21hbGVzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYnRuTWFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmE2OTY5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDZweCAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnRDb25zdWx0YUJhaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc3BlY3RyYWwtaW5kZXgtZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxufVxcblxcbi5tYXNrLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiAzNSU7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDIgIWltcG9ydGFudDtcXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNsaWRlci1tYXJrcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIHBhZGRpbmc6IDAgMC4zcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLnNsaWRlci1tYXJrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uc2xpZGVyLWxhYmVscyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjBweDtcXG4gIG1hcmdpbi10b3A6IDJweDtcXG59XFxuXFxuLnNsaWRlci1sYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm11bHRpLXJhbmdlLXNsaWRlciB7XFxuICBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICMxYTUyNzY7XFxuICB9XFxufVxcblxcbi5tdWx0aS1yYW5nZS1zbGlkZXItLXJhbmdlIHtcXG4gIGJhY2tncm91bmQ6ICMwMDhlY2MgIWltcG9ydGFudDtcXG4gIGhlaWdodDogNHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm11bHRpLXJhbmdlLXNsaWRlci0tdHJhY2sge1xcbiAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKlxuICBDb3B5cmlnaHQgKGMpIDIwMjIgRXNyaVxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLy8gcmUtZXhwb3J0IHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgcGFydCBvZiB0aGUgcHVibGljIEFQSVxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuZXhwb3J0IHsgbG9hZE1vZHVsZXMgfSBmcm9tICcuL21vZHVsZXMnO1xuZXhwb3J0IHsgZ2V0U2NyaXB0LCBpc0xvYWRlZCwgbG9hZFNjcmlwdCwgc2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL3NjcmlwdCc7XG5leHBvcnQgeyBsb2FkQ3NzIH0gZnJvbSAnLi91dGlscy9jc3MnO1xuZXhwb3J0IHsgdXRpbHMgfTtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBnZXRTY3JpcHQsIGlzTG9hZGVkLCBsb2FkU2NyaXB0IH0gZnJvbSAnLi9zY3JpcHQnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuLy8gd3JhcCBEb2pvJ3MgcmVxdWlyZSgpIGluIGEgcHJvbWlzZVxuZnVuY3Rpb24gcmVxdWlyZU1vZHVsZXMobW9kdWxlcykge1xuICAgIHJldHVybiBuZXcgdXRpbHMuUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIGxvYWRpbmcgdGhlIGVzcmkvZG9qbyBzY3JpcHRzLCByZWplY3Qgd2l0aCB0aGUgZXJyb3IuXG4gICAgICAgIHZhciBlcnJvckhhbmRsZXIgPSB3aW5kb3dbJ3JlcXVpcmUnXS5vbignZXJyb3InLCByZWplY3QpO1xuICAgICAgICB3aW5kb3dbJ3JlcXVpcmUnXShtb2R1bGVzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZW1vdmUgZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgZXJyb3JIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgLy8gUmVzb2x2ZSB3aXRoIHRoZSBwYXJhbWV0ZXJzIGZyb20gZG9qbyByZXF1aXJlIGFzIGFuIGFycmF5LlxuICAgICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYXJyYXkgb2YgdGhlIHJlcXVpcmVkIG1vZHVsZXNcbi8vIGFsc28gd2lsbCBhdHRlbXB0IHRvIGxhenkgbG9hZCB0aGUgQXJjR0lTIEFQSSBpZiBpdCBoYXMgbm90IGFscmVhZHkgYmVlbiBsb2FkZWRcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTW9kdWxlcyhtb2R1bGVzLCBsb2FkU2NyaXB0T3B0aW9ucykge1xuICAgIGlmIChsb2FkU2NyaXB0T3B0aW9ucyA9PT0gdm9pZCAwKSB7IGxvYWRTY3JpcHRPcHRpb25zID0ge307IH1cbiAgICBpZiAoIWlzTG9hZGVkKCkpIHtcbiAgICAgICAgLy8gc2NyaXB0IGlzIG5vdCB5ZXQgbG9hZGVkLCBpcyBpdCBpbiB0aGUgcHJvY2VzcyBvZiBsb2FkaW5nP1xuICAgICAgICB2YXIgc2NyaXB0ID0gZ2V0U2NyaXB0KCk7XG4gICAgICAgIHZhciBzcmMgPSBzY3JpcHQgJiYgc2NyaXB0LmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGlmICghbG9hZFNjcmlwdE9wdGlvbnMudXJsICYmIHNyYykge1xuICAgICAgICAgICAgLy8gc2NyaXB0IGlzIHN0aWxsIGxvYWRpbmcgYW5kIHVzZXIgZGlkIG5vdCBzcGVjaWZ5IGEgVVJMXG4gICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBkZWZhdWx0IHRvIHRoZSBVUkwgdGhhdCdzIGJlaW5nIGxvYWRlZFxuICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBkZWZhdWx0aW5nIHRvIHRoZSBsYXRlc3QgNC54IFVSTFxuICAgICAgICAgICAgbG9hZFNjcmlwdE9wdGlvbnMudXJsID0gc3JjO1xuICAgICAgICB9XG4gICAgICAgIC8vIGF0dGVtcHQgdG8gbG9hZCB0aGUgc2NyaXB0IHRoZW4gbG9hZCB0aGUgbW9kdWxlc1xuICAgICAgICByZXR1cm4gbG9hZFNjcmlwdChsb2FkU2NyaXB0T3B0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKTsgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBzY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQsIGp1c3QgbG9hZCB0aGUgbW9kdWxlc1xuICAgICAgICByZXR1cm4gcmVxdWlyZU1vZHVsZXMobW9kdWxlcyk7XG4gICAgfVxufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGxvYWRDc3MgfSBmcm9tICcuL3V0aWxzL2Nzcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBnZXRDZG5VcmwgfSBmcm9tICcuL3V0aWxzL3VybCc7XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmZ1bmN0aW9uIGNyZWF0ZVNjcmlwdCh1cmwpIHtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBzY3JpcHQuc3JjID0gdXJsO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXNyaS1sb2FkZXInLCAnbG9hZGluZycpO1xuICAgIHJldHVybiBzY3JpcHQ7XG59XG4vLyBhZGQgYSBvbmUtdGltZSBsb2FkIGhhbmRsZXIgdG8gc2NyaXB0XG4vLyBhbmQgb3B0aW9uYWxseSBhZGQgYSBvbmUgdGltZSBlcnJvciBoYW5kbGVyIGFzIHdlbGxcbmZ1bmN0aW9uIGhhbmRsZVNjcmlwdExvYWQoc2NyaXB0LCBjYWxsYmFjaywgZXJyYmFjaykge1xuICAgIHZhciBvblNjcmlwdEVycm9yO1xuICAgIGlmIChlcnJiYWNrKSB7XG4gICAgICAgIC8vIHNldCB1cCBhbiBlcnJvciBoYW5kbGVyIGFzIHdlbGxcbiAgICAgICAgb25TY3JpcHRFcnJvciA9IGhhbmRsZVNjcmlwdEVycm9yKHNjcmlwdCwgZXJyYmFjayk7XG4gICAgfVxuICAgIHZhciBvblNjcmlwdExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHBhc3MgdGhlIHNjcmlwdCB0byB0aGUgY2FsbGJhY2tcbiAgICAgICAgY2FsbGJhY2soc2NyaXB0KTtcbiAgICAgICAgLy8gcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvblNjcmlwdExvYWQsIGZhbHNlKTtcbiAgICAgICAgaWYgKG9uU2NyaXB0RXJyb3IpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZXJyb3IgbGlzdGVuZXIgYXMgd2VsbFxuICAgICAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25TY3JpcHRFcnJvciwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uU2NyaXB0TG9hZCwgZmFsc2UpO1xufVxuLy8gYWRkIGEgb25lLXRpbWUgZXJyb3IgaGFuZGxlciB0byB0aGUgc2NyaXB0XG5mdW5jdGlvbiBoYW5kbGVTY3JpcHRFcnJvcihzY3JpcHQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG9uU2NyaXB0RXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyByZWplY3QgdGhlIHByb21pc2UgYW5kIHJlbW92ZSB0aGlzIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGNhbGxiYWNrKGUuZXJyb3IgfHwgbmV3IEVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIGF0dGVtcHRpbmcgdG8gbG9hZCBcIi5jb25jYXQoc2NyaXB0LnNyYykpKTtcbiAgICAgICAgLy8gcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25TY3JpcHRFcnJvciwgZmFsc2UpO1xuICAgIH07XG4gICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25TY3JpcHRFcnJvciwgZmFsc2UpO1xuICAgIHJldHVybiBvblNjcmlwdEVycm9yO1xufVxuLy8gYWxsb3cgdGhlIHVzZXIgdG8gY29uZmlndXJlIGRlZmF1bHQgc2NyaXB0IG9wdGlvbnMgcmF0aGVyIHRoYW4gcGFzc2luZyBvcHRpb25zIHRvIGBsb2FkTW9kdWxlc2AgZWFjaCB0aW1lXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgZGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zO1xufVxuLy8gZ2V0IHRoZSBzY3JpcHQgaW5qZWN0ZWQgYnkgdGhpcyBsaWJyYXJ5XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyaXB0KCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1lc3JpLWxvYWRlcl0nKTtcbn1cbi8vIGhhcyBBcmNHSVMgQVBJIGJlZW4gbG9hZGVkIG9uIHRoZSBwYWdlIHlldD9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvYWRlZCgpIHtcbiAgICB2YXIgZ2xvYmFsUmVxdWlyZSA9IHdpbmRvd1sncmVxdWlyZSddO1xuICAgIC8vIC5vbigpIGVuc3VyZXMgdGhhdCBpdCdzIERvam8ncyBBTUQgbG9hZGVyXG4gICAgcmV0dXJuIGdsb2JhbFJlcXVpcmUgJiYgZ2xvYmFsUmVxdWlyZS5vbjtcbn1cbi8vIGxvYWQgdGhlIEFyY0dJUyBBUEkgb24gdGhlIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBsb2FkU2NyaXB0KG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIC8vIHdlIHdvdWxkIGhhdmUgbGlrZWQgdG8gdXNlIHNwcmVhZCBsaWtlIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfVxuICAgIC8vIGJ1dCBUUyB3b3VsZCBpbmplY3QgYSBwb2x5ZmlsbCB0aGF0IHdvdWxkIHJlcXVpcmUgdXNlIHRvIGNvbmZpZ3VyZSByb2xsdXAgdyBjb250ZW50OiAnd2luZG93J1xuICAgIC8vIGlmIHdlIGhhdmUgYW5vdGhlciBvY2Nhc2lvbiB0byB1c2Ugc3ByZWFkLCBsZXQncyBkbyB0aGF0IGFuZCByZXBsYWNlIHRoaXMgZm9yLi4uaW5cbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIFtkZWZhdWx0T3B0aW9ucywgb3B0aW9uc10uZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICBvcHRzW3Byb3BdID0gb2JqW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gVVJMIHRvIGxvYWRcbiAgICB2YXIgdmVyc2lvbiA9IG9wdHMudmVyc2lvbjtcbiAgICB2YXIgdXJsID0gb3B0cy51cmwgfHwgZ2V0Q2RuVXJsKHZlcnNpb24pO1xuICAgIHJldHVybiBuZXcgdXRpbHMuUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBzY3JpcHQgPSBnZXRTY3JpcHQoKTtcbiAgICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICAgICAgLy8gdGhlIEFQSSBpcyBhbHJlYWR5IGxvYWRlZCBvciBpbiB0aGUgcHJvY2VzcyBvZiBsb2FkaW5nLi4uXG4gICAgICAgICAgICAvLyBOT1RFOiBoYXZlIHRvIHRlc3QgYWdhaW5zdCBzY3IgYXR0cmlidXRlIHZhbHVlLCBub3Qgc2NyaXB0LnNyY1xuICAgICAgICAgICAgLy8gYi9jIHRoZSBsYXR0ZXIgd2lsbCByZXR1cm4gdGhlIGZ1bGwgdXJsIGZvciByZWxhdGl2ZSBwYXRoc1xuICAgICAgICAgICAgdmFyIHNyYyA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICAgICAgaWYgKHNyYyAhPT0gdXJsKSB7XG4gICAgICAgICAgICAgICAgLy8gcG90ZW50aWFsbHkgdHJ5aW5nIHRvIGxvYWQgYSBkaWZmZXJlbnQgdmVyc2lvbiBvZiB0aGUgQVBJXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0IGlzIGFscmVhZHkgbG9hZGVkIChcIi5jb25jYXQoc3JjLCBcIikuXCIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc2NyaXB0IGhhcyBhbHJlYWR5IHN1Y2Nlc3NmdWxseSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzY3JpcHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgdGhlIHNjcmlwdCB0byBsb2FkIGFuZCB0aGVuIHJlc29sdmVcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgQVBJIGhhcyBiZWVuIGxvYWRlZCBieSBzb21lIG90aGVyIG1lYW5zXG4gICAgICAgICAgICAgICAgLy8gcG90ZW50aWFsbHkgdHJ5aW5nIHRvIGxvYWQgYSBkaWZmZXJlbnQgdmVyc2lvbiBvZiB0aGUgQVBJXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0IGlzIGFscmVhZHkgbG9hZGVkLlwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIGF0dGVtcHRpbmcgdG8gbG9hZCB0aGUgQVBJXG4gICAgICAgICAgICAgICAgdmFyIGNzcyA9IG9wdHMuY3NzO1xuICAgICAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZVZlcnNpb24gPSBjc3MgPT09IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxvYWQgdGhlIGNzcyBiZWZvcmUgbG9hZGluZyB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIGxvYWRDc3ModXNlVmVyc2lvbiA/IHZlcnNpb24gOiBjc3MsIG9wdHMuaW5zZXJ0Q3NzQmVmb3JlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgc2NyaXB0IG9iamVjdCB3aG9zZSBzb3VyY2UgcG9pbnRzIHRvIHRoZSBBUElcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBjcmVhdGVTY3JpcHQodXJsKTtcbiAgICAgICAgICAgICAgICAvLyBfY3VycmVudFVybCA9IHVybDtcbiAgICAgICAgICAgICAgICAvLyBvbmNlIHRoZSBzY3JpcHQgaXMgbG9hZGVkLi4uXG4gICAgICAgICAgICAgICAgaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBzdGF0dXMgb2YgdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLWVzcmktbG9hZGVyJywgJ2xvYWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAvLyBsb2FkIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBnZXRDZG5Dc3NVcmwsIHBhcnNlVmVyc2lvbiB9IGZyb20gJy4vdXJsJztcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlc2hlZXRMaW5rKGhyZWYpIHtcbiAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgIHJldHVybiBsaW5rO1xufVxuZnVuY3Rpb24gaW5zZXJ0TGluayhsaW5rLCBiZWZvcmUpIHtcbiAgICBpZiAoYmVmb3JlKSB7XG4gICAgICAgIC8vIHRoZSBsaW5rIHNob3VsZCBiZSBpbnNlcnRlZCBiZWZvcmUgYSBzcGVjaWZpYyBub2RlXG4gICAgICAgIHZhciBiZWZvcmVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihiZWZvcmUpO1xuICAgICAgICBiZWZvcmVOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGJlZm9yZU5vZGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gYXBwZW5kIHRoZSBsaW5rIHRvIHRoZW4gZW5kIG9mIHRoZSBoZWFkIHRhZ1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH1cbn1cbi8vIGNoZWNrIGlmIHRoZSBjc3MgdXJsIGhhcyBiZWVuIGluamVjdGVkIG9yIGFkZGVkIG1hbnVhbGx5XG5mdW5jdGlvbiBnZXRDc3ModXJsKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW2hyZWYqPVxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJdXCIpKTtcbn1cbmZ1bmN0aW9uIGdldENzc1VybCh1cmxPclZlcnNpb24pIHtcbiAgICByZXR1cm4gIXVybE9yVmVyc2lvbiB8fCBwYXJzZVZlcnNpb24odXJsT3JWZXJzaW9uKVxuICAgICAgICAvLyBpZiBpdCdzIGEgdmFsaWQgdmVyc2lvbiBzdHJpbmcgcmV0dXJuIHRoZSBDRE4gVVJMXG4gICAgICAgID8gZ2V0Q2RuQ3NzVXJsKHVybE9yVmVyc2lvbilcbiAgICAgICAgLy8gb3RoZXJ3aXNlIGFzc3VtZSBpdCdzIGEgVVJMIGFuZCByZXR1cm4gdGhhdFxuICAgICAgICA6IHVybE9yVmVyc2lvbjtcbn1cbi8vIGxhenkgbG9hZCB0aGUgQ1NTIG5lZWRlZCBmb3IgdGhlIEFyY0dJUyBBUElcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ3NzKHVybE9yVmVyc2lvbiwgYmVmb3JlKSB7XG4gICAgdmFyIHVybCA9IGdldENzc1VybCh1cmxPclZlcnNpb24pO1xuICAgIHZhciBsaW5rID0gZ2V0Q3NzKHVybCk7XG4gICAgaWYgKCFsaW5rKSB7XG4gICAgICAgIC8vIGNyZWF0ZSAmIGxvYWQgdGhlIGNzcyBsaW5rXG4gICAgICAgIGxpbmsgPSBjcmVhdGVTdHlsZXNoZWV0TGluayh1cmwpO1xuICAgICAgICBpbnNlcnRMaW5rKGxpbmssIGJlZm9yZSk7XG4gICAgfVxuICAgIHJldHVybiBsaW5rO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbi8vIGFsbG93IGNvbnN1bWluZyBsaWJyYXJpZXMgdG8gcHJvdmlkZSB0aGVpciBvd24gUHJvbWlzZSBpbXBsZW1lbnRhdGlvbnNcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBQcm9taXNlOiBpc0Jyb3dzZXIgPyB3aW5kb3dbJ1Byb21pc2UnXSA6IHVuZGVmaW5lZFxufTtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG52YXIgREVGQVVMVF9WRVJTSU9OID0gJzQuMjUnO1xudmFyIE5FWFQgPSAnbmV4dCc7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWZXJzaW9uKHZlcnNpb24pIHtcbiAgICBpZiAodmVyc2lvbi50b0xvd2VyQ2FzZSgpID09PSBORVhUKSB7XG4gICAgICAgIHJldHVybiBORVhUO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSB2ZXJzaW9uICYmIHZlcnNpb24ubWF0Y2goL14oXFxkKVxcLihcXGQrKS8pO1xuICAgIHJldHVybiBtYXRjaCAmJiB7XG4gICAgICAgIG1ham9yOiBwYXJzZUludChtYXRjaFsxXSwgMTApLFxuICAgICAgICBtaW5vcjogcGFyc2VJbnQobWF0Y2hbMl0sIDEwKVxuICAgIH07XG59XG4vKipcbiAqIEdldCB0aGUgQ0ROIHVybCBmb3IgYSBnaXZlbiB2ZXJzaW9uXG4gKlxuICogQHBhcmFtIHZlcnNpb24gRXg6ICc0LjI1JyBvciAnMy40MicuIERlZmF1bHRzIHRvIHRoZSBsYXRlc3QgNC54IHZlcnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5VcmwodmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uID09PSB2b2lkIDApIHsgdmVyc2lvbiA9IERFRkFVTFRfVkVSU0lPTjsgfVxuICAgIHJldHVybiBcImh0dHBzOi8vanMuYXJjZ2lzLmNvbS9cIi5jb25jYXQodmVyc2lvbiwgXCIvXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIENETiB1cmwgZm9yIGEgdGhlIENTUyBmb3IgYSBnaXZlbiB2ZXJzaW9uIGFuZC9vciB0aGVtZVxuICpcbiAqIEBwYXJhbSB2ZXJzaW9uIEV4OiAnNC4yNScsICczLjQyJywgb3IgJ25leHQnLiBEZWZhdWx0cyB0byB0aGUgbGF0ZXN0IDQueCB2ZXJzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2RuQ3NzVXJsKHZlcnNpb24pIHtcbiAgICBpZiAodmVyc2lvbiA9PT0gdm9pZCAwKSB7IHZlcnNpb24gPSBERUZBVUxUX1ZFUlNJT047IH1cbiAgICB2YXIgYmFzZVVybCA9IGdldENkblVybCh2ZXJzaW9uKTtcbiAgICB2YXIgcGFyc2VkVmVyc2lvbiA9IHBhcnNlVmVyc2lvbih2ZXJzaW9uKTtcbiAgICBpZiAocGFyc2VkVmVyc2lvbiAhPT0gTkVYVCAmJiBwYXJzZWRWZXJzaW9uLm1ham9yID09PSAzKSB7XG4gICAgICAgIC8vIE5PVEU6IGF0IDMuMTEgdGhlIENTUyBtb3ZlZCBmcm9tIHRoZSAvanMgZm9sZGVyIHRvIHRoZSByb290XG4gICAgICAgIHZhciBwYXRoID0gcGFyc2VkVmVyc2lvbi5taW5vciA8PSAxMCA/ICdqcy8nIDogJyc7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChiYXNlVXJsKS5jb25jYXQocGF0aCwgXCJlc3JpL2Nzcy9lc3JpLmNzc1wiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGFzc3VtZSA0LnhcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiZXNyaS90aGVtZXMvbGlnaHQvbWFpbi5jc3NcIik7XG4gICAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsZSh0cmFuc2xhdGlvbnMpIHtcclxuICAvLyBEZXRlY3RhIGxvY2FsZSBkZXNkZSBsYSBVUkwgKD9sb2NhbGU9ZW4pIG8gZmFsbGJhY2sgYSBcImVzXCJcclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gIGNvbnN0IGxvY2FsZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJsb2NhbGVcIikgfHwgXCJlc1wiO1xyXG5cclxuICBjb25zdCB0ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gKGtleToga2V5b2YgdHlwZW9mIHRyYW5zbGF0aW9uc1tcImVzXCJdKSA9PlxyXG4gICAgICB0cmFuc2xhdGlvbnNbbG9jYWxlIGFzIFwiZXNcIiB8IFwiZW5cIl1ba2V5XSA/PyBrZXk7XHJcbiAgfSwgW2xvY2FsZV0pO1xyXG5cclxuICByZXR1cm4geyB0LCBsb2NhbGUgfTtcclxufSIsImV4cG9ydCBjb25zdCB0cmFuc2xhdGlvbnMgPSB7XHJcbiAgZXM6IHtcclxuICAgIHdpZGdldExhYmVsOiBcIsONbmRpY2VzIGVzcGVjdHJhbGVzXCIsXHJcbiAgICBzcGVjdHJhbFJ1bGU6IFwiRGViZXMgc2VsZWNjaW9uYXIgdW5hIGltYWdlbiBwYXJhIHV0aWxpemFyIGxvcyBpbmRpY2VzIGVzcGVjdHJhbGVzXCIsXHJcbiAgICBzZWxlY3ROYW1lOiBcIlNlbGVjY2lvbmEgZsOzcm11bGE6XCIsXHJcbiAgICBuZHZpOiBcIsONbmRpY2Ugbm9ybWFsaXphZG8gZGUgdmVnZXRhY2nDs25cIixcclxuICAgIHNhdmk6IFwiw41uZGljZSBkZSB2ZWdldGFjacOzbiBhanVzdGFkbyBhbCBzdWVsb1wiLFxyXG4gICAgbmR3aTogXCLDjW5kaWNlIGRlIGFndWEgZGUgZGlmZXJlbmNpYSBub3JtYWxpemFkYVwiLFxyXG4gICAgYmFpOiBcIsONbmRpY2UgZGUgw6FyZWFzIHF1ZW1hZGFzXCIsXHJcbiAgICBhcHBseTogXCJBcGxpY2FyXCJcclxuICB9LFxyXG4gIGVuOiB7XHJcbiAgICB3aWRnZXRMYWJlbDogXCJTcGVjdHJhbCBpbmRpY2VzXCIsXHJcbiAgICBzcGVjdHJhbFJ1bGU6IFwiWW91IG11c3Qgc2VsZWN0IGFuIGltYWdlIHRvIHVzZSB0aGUgc3BlY3RyYWwgaW5kaWNlc1wiLFxyXG4gICAgc2VsZWN0TmFtZTogXCJTZWxlY3QgZm9ybXVsYTpcIixcclxuICAgIG5kdmk6IFwiTm9ybWFsaXplZCB2ZWdldGF0aW9uIGluZGV4XCIsXHJcbiAgICBzYXZpOiBcIlNvaWwtYWRqdXN0ZWQgdmVnZXRhdGlvbiBpbmRleFwiLFxyXG4gICAgbmR3aTogXCJOb3JtYWxpemVkIGRpZmZlcmVuY2Ugd2F0ZXIgaW5kZXhcIixcclxuICAgIGJhaTogXCJCdXJuZWQgQXJlYSBJbmRleFwiLFxyXG4gICAgYXBwbHk6IFwiQXBwbHlcIlxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIHJldHVybiB4ID09PSB5ICYmICh4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSkgfHwgeCAhPT0geCAmJiB5ICE9PSB5IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIDtcbn1cblxudmFyIG9iamVjdElzID0gdHlwZW9mIE9iamVjdC5pcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5pcyA6IGlzO1xuXG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBSZWFjdC51c2VTeW5jRXh0ZXJuYWxTdG9yZTtcblxuLy8gZm9yIENvbW1vbkpTIGludGVyb3AuXG5cbnZhciB1c2VSZWYgPSBSZWFjdC51c2VSZWYsXG4gICAgdXNlRWZmZWN0ID0gUmVhY3QudXNlRWZmZWN0LFxuICAgIHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vLFxuICAgIHVzZURlYnVnVmFsdWUgPSBSZWFjdC51c2VEZWJ1Z1ZhbHVlOyAvLyBTYW1lIGFzIHVzZVN5bmNFeHRlcm5hbFN0b3JlLCBidXQgc3VwcG9ydHMgc2VsZWN0b3IgYW5kIGlzRXF1YWwgYXJndW1lbnRzLlxuXG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWwpIHtcbiAgLy8gVXNlIHRoaXMgdG8gdHJhY2sgdGhlIHJlbmRlcmVkIHNuYXBzaG90LlxuICB2YXIgaW5zdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGluc3Q7XG5cbiAgaWYgKGluc3RSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgIGluc3QgPSB7XG4gICAgICBoYXNWYWx1ZTogZmFsc2UsXG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH07XG4gICAgaW5zdFJlZi5jdXJyZW50ID0gaW5zdDtcbiAgfSBlbHNlIHtcbiAgICBpbnN0ID0gaW5zdFJlZi5jdXJyZW50O1xuICB9XG5cbiAgdmFyIF91c2VNZW1vID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gVHJhY2sgdGhlIG1lbW9pemVkIHN0YXRlIHVzaW5nIGNsb3N1cmUgdmFyaWFibGVzIHRoYXQgYXJlIGxvY2FsIHRvIHRoaXNcbiAgICAvLyBtZW1vaXplZCBpbnN0YW5jZSBvZiBhIGdldFNuYXBzaG90IGZ1bmN0aW9uLiBJbnRlbnRpb25hbGx5IG5vdCB1c2luZyBhXG4gICAgLy8gdXNlUmVmIGhvb2ssIGJlY2F1c2UgdGhhdCBzdGF0ZSB3b3VsZCBiZSBzaGFyZWQgYWNyb3NzIGFsbCBjb25jdXJyZW50XG4gICAgLy8gY29waWVzIG9mIHRoZSBob29rL2NvbXBvbmVudC5cbiAgICB2YXIgaGFzTWVtbyA9IGZhbHNlO1xuICAgIHZhciBtZW1vaXplZFNuYXBzaG90O1xuICAgIHZhciBtZW1vaXplZFNlbGVjdGlvbjtcblxuICAgIHZhciBtZW1vaXplZFNlbGVjdG9yID0gZnVuY3Rpb24gKG5leHRTbmFwc2hvdCkge1xuICAgICAgaWYgKCFoYXNNZW1vKSB7XG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHRoZSBob29rIGlzIGNhbGxlZCwgdGhlcmUgaXMgbm8gbWVtb2l6ZWQgcmVzdWx0LlxuICAgICAgICBoYXNNZW1vID0gdHJ1ZTtcbiAgICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcblxuICAgICAgICB2YXIgX25leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpO1xuXG4gICAgICAgIGlmIChpc0VxdWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBFdmVuIGlmIHRoZSBzZWxlY3RvciBoYXMgY2hhbmdlZCwgdGhlIGN1cnJlbnRseSByZW5kZXJlZCBzZWxlY3Rpb25cbiAgICAgICAgICAvLyBtYXkgYmUgZXF1YWwgdG8gdGhlIG5ldyBzZWxlY3Rpb24uIFdlIHNob3VsZCBhdHRlbXB0IHRvIHJldXNlIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgdmFsdWUgaWYgcG9zc2libGUsIHRvIHByZXNlcnZlIGRvd25zdHJlYW0gbWVtb2l6YXRpb25zLlxuICAgICAgICAgIGlmIChpbnN0Lmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdGlvbiA9IGluc3QudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChpc0VxdWFsKGN1cnJlbnRTZWxlY3Rpb24sIF9uZXh0U2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IGN1cnJlbnRTZWxlY3Rpb247XG4gICAgICAgICAgICAgIHJldHVybiBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gX25leHRTZWxlY3Rpb247XG4gICAgICAgIHJldHVybiBfbmV4dFNlbGVjdGlvbjtcbiAgICAgIH0gLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG5cblxuICAgICAgLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG4gICAgICB2YXIgcHJldlNuYXBzaG90ID0gbWVtb2l6ZWRTbmFwc2hvdDtcbiAgICAgIHZhciBwcmV2U2VsZWN0aW9uID0gbWVtb2l6ZWRTZWxlY3Rpb247XG5cbiAgICAgIGlmIChvYmplY3RJcyhwcmV2U25hcHNob3QsIG5leHRTbmFwc2hvdCkpIHtcbiAgICAgICAgLy8gVGhlIHNuYXBzaG90IGlzIHRoZSBzYW1lIGFzIGxhc3QgdGltZS4gUmV1c2UgdGhlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgcmV0dXJuIHByZXZTZWxlY3Rpb247XG4gICAgICB9IC8vIFRoZSBzbmFwc2hvdCBoYXMgY2hhbmdlZCwgc28gd2UgbmVlZCB0byBjb21wdXRlIGEgbmV3IHNlbGVjdGlvbi5cblxuXG4gICAgICAvLyBUaGUgc25hcHNob3QgaGFzIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBzZWxlY3Rpb24uXG4gICAgICB2YXIgbmV4dFNlbGVjdGlvbiA9IHNlbGVjdG9yKG5leHRTbmFwc2hvdCk7IC8vIElmIGEgY3VzdG9tIGlzRXF1YWwgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHVzZSB0aGF0IHRvIGNoZWNrIGlmIHRoZSBkYXRhXG4gICAgICAvLyBoYXMgY2hhbmdlZC4gSWYgaXQgaGFzbid0LCByZXR1cm4gdGhlIHByZXZpb3VzIHNlbGVjdGlvbi4gVGhhdCBzaWduYWxzXG4gICAgICAvLyB0byBSZWFjdCB0aGF0IHRoZSBzZWxlY3Rpb25zIGFyZSBjb25jZXB0dWFsbHkgZXF1YWwsIGFuZCB3ZSBjYW4gYmFpbFxuICAgICAgLy8gb3V0IG9mIHJlbmRlcmluZy5cblxuICAgICAgLy8gSWYgYSBjdXN0b20gaXNFcXVhbCBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdXNlIHRoYXQgdG8gY2hlY2sgaWYgdGhlIGRhdGFcbiAgICAgIC8vIGhhcyBjaGFuZ2VkLiBJZiBpdCBoYXNuJ3QsIHJldHVybiB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLiBUaGF0IHNpZ25hbHNcbiAgICAgIC8vIHRvIFJlYWN0IHRoYXQgdGhlIHNlbGVjdGlvbnMgYXJlIGNvbmNlcHR1YWxseSBlcXVhbCwgYW5kIHdlIGNhbiBiYWlsXG4gICAgICAvLyBvdXQgb2YgcmVuZGVyaW5nLlxuICAgICAgaWYgKGlzRXF1YWwgIT09IHVuZGVmaW5lZCAmJiBpc0VxdWFsKHByZXZTZWxlY3Rpb24sIG5leHRTZWxlY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiBwcmV2U2VsZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBtZW1vaXplZFNuYXBzaG90ID0gbmV4dFNuYXBzaG90O1xuICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBuZXh0U2VsZWN0aW9uO1xuICAgICAgcmV0dXJuIG5leHRTZWxlY3Rpb247XG4gICAgfTsgLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuXG5cbiAgICAvLyBBc3NpZ25pbmcgdGhpcyB0byBhIGNvbnN0YW50IHNvIHRoYXQgRmxvdyBrbm93cyBpdCBjYW4ndCBjaGFuZ2UuXG4gICAgdmFyIG1heWJlR2V0U2VydmVyU25hcHNob3QgPSBnZXRTZXJ2ZXJTbmFwc2hvdCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGdldFNlcnZlclNuYXBzaG90O1xuXG4gICAgdmFyIGdldFNuYXBzaG90V2l0aFNlbGVjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IoZ2V0U25hcHNob3QoKSk7XG4gICAgfTtcblxuICAgIHZhciBnZXRTZXJ2ZXJTbmFwc2hvdFdpdGhTZWxlY3RvciA9IG1heWJlR2V0U2VydmVyU25hcHNob3QgPT09IG51bGwgPyB1bmRlZmluZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihtYXliZUdldFNlcnZlclNuYXBzaG90KCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFtnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciwgZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3JdO1xuICB9LCBbZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90LCBzZWxlY3RvciwgaXNFcXVhbF0pLFxuICAgICAgZ2V0U2VsZWN0aW9uID0gX3VzZU1lbW9bMF0sXG4gICAgICBnZXRTZXJ2ZXJTZWxlY3Rpb24gPSBfdXNlTWVtb1sxXTtcblxuICB2YXIgdmFsdWUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNlbGVjdGlvbiwgZ2V0U2VydmVyU2VsZWN0aW9uKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbnN0Lmhhc1ZhbHVlID0gdHJ1ZTtcbiAgICBpbnN0LnZhbHVlID0gdmFsdWU7XG4gIH0sIFt2YWx1ZV0pO1xuICB1c2VEZWJ1Z1ZhbHVlKHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3I7XG4gICAgICAgICAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO1xufVxuICAgICAgICBcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIHNyYy9pbmRleC50c1xuaW1wb3J0ICogYXMgUmVhY3QyIGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgYXMgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IyIH0gZnJvbSBcInVzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3dpdGgtc2VsZWN0b3IuanNcIjtcblxuLy8gc3JjL3V0aWxzL3JlYWN0LnRzXG5pbXBvcnQgKiBhcyBSZWFjdE9yaWdpbmFsIGZyb20gXCJyZWFjdFwiO1xudmFyIFJlYWN0ID0gKFxuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgLy8gQHRzLWlnbm9yZVxuICBcImRlZmF1bHRcIiBpbiBSZWFjdE9yaWdpbmFsID8gUmVhY3RPcmlnaW5hbFtcImRlZmF1bHRcIl0gOiBSZWFjdE9yaWdpbmFsXG4pO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Db250ZXh0LnRzXG52YXIgQ29udGV4dEtleSA9IFN5bWJvbC5mb3IoYHJlYWN0LXJlZHV4LWNvbnRleHRgKTtcbnZhciBnVCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IChcbiAgLyogZmFsbCBiYWNrIHRvIGEgcGVyLW1vZHVsZSBzY29wZSAocHJlLTguMSBiZWhhdmlvdXIpIGlmIGBnbG9iYWxUaGlzYCBpcyBub3QgYXZhaWxhYmxlICovXG4gIHt9XG4pO1xuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgaWYgKCFSZWFjdC5jcmVhdGVDb250ZXh0KVxuICAgIHJldHVybiB7fTtcbiAgY29uc3QgY29udGV4dE1hcCA9IGdUW0NvbnRleHRLZXldID8/IChnVFtDb250ZXh0S2V5XSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuICBsZXQgcmVhbENvbnRleHQgPSBjb250ZXh0TWFwLmdldChSZWFjdC5jcmVhdGVDb250ZXh0KTtcbiAgaWYgKCFyZWFsQ29udGV4dCkge1xuICAgIHJlYWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChcbiAgICAgIG51bGxcbiAgICApO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIHJlYWxDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJSZWFjdFJlZHV4XCI7XG4gICAgfVxuICAgIGNvbnRleHRNYXAuc2V0KFJlYWN0LmNyZWF0ZUNvbnRleHQsIHJlYWxDb250ZXh0KTtcbiAgfVxuICByZXR1cm4gcmVhbENvbnRleHQ7XG59XG52YXIgUmVhY3RSZWR1eENvbnRleHQgPSAvKiBAX19QVVJFX18gKi8gZ2V0Q29udGV4dCgpO1xuXG4vLyBzcmMvdXRpbHMvdXNlU3luY0V4dGVybmFsU3RvcmUudHNcbnZhciBub3RJbml0aWFsaXplZCA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKFwidVNFUyBub3QgaW5pdGlhbGl6ZWQhXCIpO1xufTtcblxuLy8gc3JjL2hvb2tzL3VzZVJlZHV4Q29udGV4dC50c1xuZnVuY3Rpb24gY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZVJlZHV4Q29udGV4dDIoKSB7XG4gICAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlQ29udGV4dChjb250ZXh0KTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFjb250ZXh0VmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJjb3VsZCBub3QgZmluZCByZWFjdC1yZWR1eCBjb250ZXh0IHZhbHVlOyBwbGVhc2UgZW5zdXJlIHRoZSBjb21wb25lbnQgaXMgd3JhcHBlZCBpbiBhIDxQcm92aWRlcj5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbiAgfTtcbn1cbnZhciB1c2VSZWR1eENvbnRleHQgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlUmVkdXhDb250ZXh0SG9vaygpO1xuXG4vLyBzcmMvaG9va3MvdXNlU2VsZWN0b3IudHNcbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IG5vdEluaXRpYWxpemVkO1xudmFyIGluaXRpYWxpemVVc2VTZWxlY3RvciA9IChmbikgPT4ge1xuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IGZuO1xufTtcbnZhciByZWZFcXVhbGl0eSA9IChhLCBiKSA9PiBhID09PSBiO1xuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICBjb25zdCB1c2VSZWR1eENvbnRleHQyID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VSZWR1eENvbnRleHQgOiBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQpO1xuICBjb25zdCB1c2VTZWxlY3RvcjIgPSAoc2VsZWN0b3IsIGVxdWFsaXR5Rm5Pck9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHsgZXF1YWxpdHlGbiA9IHJlZkVxdWFsaXR5LCBkZXZNb2RlQ2hlY2tzID0ge30gfSA9IHR5cGVvZiBlcXVhbGl0eUZuT3JPcHRpb25zID09PSBcImZ1bmN0aW9uXCIgPyB7IGVxdWFsaXR5Rm46IGVxdWFsaXR5Rm5Pck9wdGlvbnMgfSA6IGVxdWFsaXR5Rm5Pck9wdGlvbnM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvcmApO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgZXF1YWxpdHlGbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIGFuIGVxdWFsaXR5IGZ1bmN0aW9uIHRvIHVzZVNlbGVjdG9yYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGdldFNlcnZlclN0YXRlLFxuICAgICAgc3RhYmlsaXR5Q2hlY2ssXG4gICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2tcbiAgICB9ID0gdXNlUmVkdXhDb250ZXh0MigpO1xuICAgIGNvbnN0IGZpcnN0UnVuID0gUmVhY3QudXNlUmVmKHRydWUpO1xuICAgIGNvbnN0IHdyYXBwZWRTZWxlY3RvciA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICAge1xuICAgICAgICBbc2VsZWN0b3IubmFtZV0oc3RhdGUpIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdG9yKHN0YXRlKTtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVjazogZmluYWxJZGVudGl0eUZ1bmN0aW9uQ2hlY2ssXG4gICAgICAgICAgICAgIHN0YWJpbGl0eUNoZWNrOiBmaW5hbFN0YWJpbGl0eUNoZWNrXG4gICAgICAgICAgICB9ID0ge1xuICAgICAgICAgICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgICAgICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrLFxuICAgICAgICAgICAgICAuLi5kZXZNb2RlQ2hlY2tzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGZpbmFsU3RhYmlsaXR5Q2hlY2sgPT09IFwiYWx3YXlzXCIgfHwgZmluYWxTdGFiaWxpdHlDaGVjayA9PT0gXCJvbmNlXCIgJiYgZmlyc3RSdW4uY3VycmVudCkge1xuICAgICAgICAgICAgICBjb25zdCB0b0NvbXBhcmUgPSBzZWxlY3RvcihzdGF0ZSk7XG4gICAgICAgICAgICAgIGlmICghZXF1YWxpdHlGbihzZWxlY3RlZCwgdG9Db21wYXJlKSkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFjayA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgKHsgc3RhY2sgfSA9IGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICBcIlNlbGVjdG9yIFwiICsgKHNlbGVjdG9yLm5hbWUgfHwgXCJ1bmtub3duXCIpICsgXCIgcmV0dXJuZWQgYSBkaWZmZXJlbnQgcmVzdWx0IHdoZW4gY2FsbGVkIHdpdGggdGhlIHNhbWUgcGFyYW1ldGVycy4gVGhpcyBjYW4gbGVhZCB0byB1bm5lY2Vzc2FyeSByZXJlbmRlcnMuXFxuU2VsZWN0b3JzIHRoYXQgcmV0dXJuIGEgbmV3IHJlZmVyZW5jZSAoc3VjaCBhcyBhbiBvYmplY3Qgb3IgYW4gYXJyYXkpIHNob3VsZCBiZSBtZW1vaXplZDogaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdXNhZ2UvZGVyaXZpbmctZGF0YS1zZWxlY3RvcnMjb3B0aW1pemluZy1zZWxlY3RvcnMtd2l0aC1tZW1vaXphdGlvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkMjogdG9Db21wYXJlLFxuICAgICAgICAgICAgICAgICAgICBzdGFja1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayA9PT0gXCJhbHdheXNcIiB8fCBmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayA9PT0gXCJvbmNlXCIgJiYgZmlyc3RSdW4uY3VycmVudCkge1xuICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAoeyBzdGFjayB9ID0gZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgIFwiU2VsZWN0b3IgXCIgKyAoc2VsZWN0b3IubmFtZSB8fCBcInVua25vd25cIikgKyBcIiByZXR1cm5lZCB0aGUgcm9vdCBzdGF0ZSB3aGVuIGNhbGxlZC4gVGhpcyBjYW4gbGVhZCB0byB1bm5lY2Vzc2FyeSByZXJlbmRlcnMuXFxuU2VsZWN0b3JzIHRoYXQgcmV0dXJuIHRoZSBlbnRpcmUgc3RhdGUgYXJlIGFsbW9zdCBjZXJ0YWlubHkgYSBtaXN0YWtlLCBhcyB0aGV5IHdpbGwgY2F1c2UgYSByZXJlbmRlciB3aGVuZXZlciAqYW55dGhpbmcqIGluIHN0YXRlIGNoYW5nZXMuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YWNrIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlyc3RSdW4uY3VycmVudClcbiAgICAgICAgICAgICAgZmlyc3RSdW4uY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1bc2VsZWN0b3IubmFtZV0sXG4gICAgICBbc2VsZWN0b3IsIHN0YWJpbGl0eUNoZWNrLCBkZXZNb2RlQ2hlY2tzLnN0YWJpbGl0eUNoZWNrXVxuICAgICk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTdGF0ZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yKFxuICAgICAgc3Vic2NyaXB0aW9uLmFkZE5lc3RlZFN1YixcbiAgICAgIHN0b3JlLmdldFN0YXRlLFxuICAgICAgZ2V0U2VydmVyU3RhdGUgfHwgc3RvcmUuZ2V0U3RhdGUsXG4gICAgICB3cmFwcGVkU2VsZWN0b3IsXG4gICAgICBlcXVhbGl0eUZuXG4gICAgKTtcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHNlbGVjdGVkU3RhdGUpO1xuICAgIHJldHVybiBzZWxlY3RlZFN0YXRlO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZVNlbGVjdG9yMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlU2VsZWN0b3IyXG4gIH0pO1xuICByZXR1cm4gdXNlU2VsZWN0b3IyO1xufVxudmFyIHVzZVNlbGVjdG9yID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVNlbGVjdG9ySG9vaygpO1xuXG4vLyBzcmMvdXRpbHMvcmVhY3QtaXMudHNcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTtcbnZhciBSRUFDVF9TRVJWRVJfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnNlcnZlcl9jb250ZXh0XCIpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5vZmZzY3JlZW5cIik7XG52YXIgUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jbGllbnQucmVmZXJlbmNlXCIpO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSBcIm9iamVjdFwiICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIGNvbnN0ICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBvYmplY3QudHlwZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgY29uc3QgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9TRVJWRVJfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6IHtcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdm9pZCAwO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cblxuLy8gc3JjL3V0aWxzL3dhcm5pbmcudHNcbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgdHJ5IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxufVxuXG4vLyBzcmMvY29ubmVjdC92ZXJpZnlTdWJzZWxlY3RvcnMudHNcbmZ1bmN0aW9uIHZlcmlmeShzZWxlY3RvciwgbWV0aG9kTmFtZSkge1xuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHZhbHVlIGZvciAke21ldGhvZE5hbWV9IGluIGNvbm5lY3QuYCk7XG4gIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gXCJtYXBTdGF0ZVRvUHJvcHNcIiB8fCBtZXRob2ROYW1lID09PSBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2VsZWN0b3IsIFwiZGVwZW5kc09uT3duUHJvcHNcIikpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgIGBUaGUgc2VsZWN0b3IgZm9yICR7bWV0aG9kTmFtZX0gb2YgY29ubmVjdCBkaWQgbm90IHNwZWNpZnkgYSB2YWx1ZSBmb3IgZGVwZW5kc09uT3duUHJvcHMuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcykge1xuICB2ZXJpZnkobWFwU3RhdGVUb1Byb3BzLCBcIm1hcFN0YXRlVG9Qcm9wc1wiKTtcbiAgdmVyaWZ5KG1hcERpc3BhdGNoVG9Qcm9wcywgXCJtYXBEaXNwYXRjaFRvUHJvcHNcIik7XG4gIHZlcmlmeShtZXJnZVByb3BzLCBcIm1lcmdlUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L3NlbGVjdG9yRmFjdG9yeS50c1xuZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCB7XG4gIGFyZVN0YXRlc0VxdWFsLFxuICBhcmVPd25Qcm9wc0VxdWFsLFxuICBhcmVTdGF0ZVByb3BzRXF1YWxcbn0pIHtcbiAgbGV0IGhhc1J1bkF0TGVhc3RPbmNlID0gZmFsc2U7XG4gIGxldCBzdGF0ZTtcbiAgbGV0IG93blByb3BzO1xuICBsZXQgc3RhdGVQcm9wcztcbiAgbGV0IGRpc3BhdGNoUHJvcHM7XG4gIGxldCBtZXJnZWRQcm9wcztcbiAgZnVuY3Rpb24gaGFuZGxlRmlyc3RDYWxsKGZpcnN0U3RhdGUsIGZpcnN0T3duUHJvcHMpIHtcbiAgICBzdGF0ZSA9IGZpcnN0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBmaXJzdE93blByb3BzO1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICBoYXNSdW5BdExlYXN0T25jZSA9IHRydWU7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKSB7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHMoKSB7XG4gICAgaWYgKG1hcFN0YXRlVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1N0YXRlKCkge1xuICAgIGNvbnN0IG5leHRTdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgY29uc3Qgc3RhdGVQcm9wc0NoYW5nZWQgPSAhYXJlU3RhdGVQcm9wc0VxdWFsKG5leHRTdGF0ZVByb3BzLCBzdGF0ZVByb3BzKTtcbiAgICBzdGF0ZVByb3BzID0gbmV4dFN0YXRlUHJvcHM7XG4gICAgaWYgKHN0YXRlUHJvcHNDaGFuZ2VkKVxuICAgICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgY29uc3QgcHJvcHNDaGFuZ2VkID0gIWFyZU93blByb3BzRXF1YWwobmV4dE93blByb3BzLCBvd25Qcm9wcyk7XG4gICAgY29uc3Qgc3RhdGVDaGFuZ2VkID0gIWFyZVN0YXRlc0VxdWFsKFxuICAgICAgbmV4dFN0YXRlLFxuICAgICAgc3RhdGUsXG4gICAgICBuZXh0T3duUHJvcHMsXG4gICAgICBvd25Qcm9wc1xuICAgICk7XG4gICAgc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBuZXh0T3duUHJvcHM7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCAmJiBzdGF0ZUNoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpO1xuICAgIGlmIChwcm9wc0NoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3UHJvcHMoKTtcbiAgICBpZiAoc3RhdGVDaGFuZ2VkKVxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1N0YXRlKCk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgcmV0dXJuIGhhc1J1bkF0TGVhc3RPbmNlID8gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA6IGhhbmRsZUZpcnN0Q2FsbChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcyk7XG4gIH07XG59XG5mdW5jdGlvbiBmaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KGRpc3BhdGNoLCB7XG4gIGluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gIGluaXRNZXJnZVByb3BzLFxuICAuLi5vcHRpb25zXG59KSB7XG4gIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IGluaXRNYXBTdGF0ZVRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgY29uc3QgbWVyZ2VQcm9wcyA9IGluaXRNZXJnZVByb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwgb3B0aW9ucyk7XG59XG5cbi8vIHNyYy91dGlscy9iaW5kQWN0aW9uQ3JlYXRvcnMudHNcbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgY29uc3QgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xuICAgIGNvbnN0IGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSAoLi4uYXJncykgPT4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvciguLi5hcmdzKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG4vLyBzcmMvdXRpbHMvaXNQbGFpbk9iamVjdC50c1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgfHwgb2JqID09PSBudWxsKVxuICAgIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgaWYgKHByb3RvID09PSBudWxsKVxuICAgIHJldHVybiB0cnVlO1xuICBsZXQgYmFzZVByb3RvID0gcHJvdG87XG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKSAhPT0gbnVsbCkge1xuICAgIGJhc2VQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pO1xuICB9XG4gIHJldHVybiBwcm90byA9PT0gYmFzZVByb3RvO1xufVxuXG4vLyBzcmMvdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QudHNcbmZ1bmN0aW9uIHZlcmlmeVBsYWluT2JqZWN0KHZhbHVlLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybmluZyhcbiAgICAgIGAke21ldGhvZE5hbWV9KCkgaW4gJHtkaXNwbGF5TmFtZX0gbXVzdCByZXR1cm4gYSBwbGFpbiBvYmplY3QuIEluc3RlYWQgcmVjZWl2ZWQgJHt2YWx1ZX0uYFxuICAgICk7XG4gIH1cbn1cblxuLy8gc3JjL2Nvbm5lY3Qvd3JhcE1hcFRvUHJvcHMudHNcbmZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZ2V0Q29uc3RhbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRDb25zdGFudFNlbGVjdG9yKGRpc3BhdGNoKSB7XG4gICAgY29uc3QgY29uc3RhbnQgPSBnZXRDb25zdGFudChkaXNwYXRjaCk7XG4gICAgZnVuY3Rpb24gY29uc3RhbnRTZWxlY3RvcigpIHtcbiAgICAgIHJldHVybiBjb25zdGFudDtcbiAgICB9XG4gICAgY29uc3RhbnRTZWxlY3Rvci5kZXBlbmRzT25Pd25Qcm9wcyA9IGZhbHNlO1xuICAgIHJldHVybiBjb25zdGFudFNlbGVjdG9yO1xuICB9O1xufVxuZnVuY3Rpb24gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcykge1xuICByZXR1cm4gbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyA/IEJvb2xlYW4obWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgOiBtYXBUb1Byb3BzLmxlbmd0aCAhPT0gMTtcbn1cbmZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBUb1Byb3BzLCBtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0UHJveHlTZWxlY3RvcihkaXNwYXRjaCwgeyBkaXNwbGF5TmFtZSB9KSB7XG4gICAgY29uc3QgcHJveHkgPSBmdW5jdGlvbiBtYXBUb1Byb3BzUHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcmV0dXJuIHByb3h5LmRlcGVuZHNPbk93blByb3BzID8gcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSA6IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLCB2b2lkIDApO1xuICAgIH07XG4gICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSB0cnVlO1xuICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBmdW5jdGlvbiBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBtYXBUb1Byb3BzO1xuICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKTtcbiAgICAgIGxldCBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBwcm9wcztcbiAgICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhwcm9wcyk7XG4gICAgICAgIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICB2ZXJpZnlQbGFpbk9iamVjdChwcm9wcywgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH07XG4gICAgcmV0dXJuIHByb3h5O1xuICB9O1xufVxuXG4vLyBzcmMvY29ubmVjdC9pbnZhbGlkQXJnRmFjdG9yeS50c1xuZnVuY3Rpb24gY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkoYXJnLCBuYW1lKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSW52YWxpZCB2YWx1ZSBvZiB0eXBlICR7dHlwZW9mIGFyZ30gZm9yICR7bmFtZX0gYXJndW1lbnQgd2hlbiBjb25uZWN0aW5nIGNvbXBvbmVudCAke29wdGlvbnMud3JhcHBlZENvbXBvbmVudE5hbWV9LmBcbiAgICApO1xuICB9O1xufVxuXG4vLyBzcmMvY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMudHNcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBEaXNwYXRjaFRvUHJvcHMgJiYgdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gXCJvYmplY3RcIiA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoXG4gICAgKGRpc3BhdGNoKSA9PiAoXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBiaW5kQWN0aW9uQ3JlYXRvcnMobWFwRGlzcGF0Y2hUb1Byb3BzLCBkaXNwYXRjaClcbiAgICApXG4gICkgOiAhbWFwRGlzcGF0Y2hUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudCgoZGlzcGF0Y2gpID0+ICh7XG4gICAgZGlzcGF0Y2hcbiAgfSkpIDogdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKVxuICApIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvbWFwU3RhdGVUb1Byb3BzLnRzXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHNGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gIW1hcFN0YXRlVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoKCkgPT4gKHt9KSkgOiB0eXBlb2YgbWFwU3RhdGVUb1Byb3BzID09PSBcImZ1bmN0aW9uXCIgPyAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpXG4gICkgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9tZXJnZVByb3BzLnRzXG5mdW5jdGlvbiBkZWZhdWx0TWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICByZXR1cm4geyAuLi5vd25Qcm9wcywgLi4uc3RhdGVQcm9wcywgLi4uZGlzcGF0Y2hQcm9wcyB9O1xufVxuZnVuY3Rpb24gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRNZXJnZVByb3BzUHJveHkoZGlzcGF0Y2gsIHsgZGlzcGxheU5hbWUsIGFyZU1lcmdlZFByb3BzRXF1YWwgfSkge1xuICAgIGxldCBoYXNSdW5PbmNlID0gZmFsc2U7XG4gICAgbGV0IG1lcmdlZFByb3BzO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZVByb3BzUHJveHkoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgICAgIGNvbnN0IG5leHRNZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgICAgaWYgKGhhc1J1bk9uY2UpIHtcbiAgICAgICAgaWYgKCFhcmVNZXJnZWRQcm9wc0VxdWFsKG5leHRNZXJnZWRQcm9wcywgbWVyZ2VkUHJvcHMpKVxuICAgICAgICAgIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFzUnVuT25jZSA9IHRydWU7XG4gICAgICAgIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgIHZlcmlmeVBsYWluT2JqZWN0KG1lcmdlZFByb3BzLCBkaXNwbGF5TmFtZSwgXCJtZXJnZVByb3BzXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBtZXJnZVByb3BzRmFjdG9yeShtZXJnZVByb3BzKSB7XG4gIHJldHVybiAhbWVyZ2VQcm9wcyA/ICgpID0+IGRlZmF1bHRNZXJnZVByb3BzIDogdHlwZW9mIG1lcmdlUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1lcmdlUHJvcHMsIFwibWVyZ2VQcm9wc1wiKTtcbn1cblxuLy8gc3JjL3V0aWxzL2JhdGNoLnRzXG5mdW5jdGlvbiBkZWZhdWx0Tm9vcEJhdGNoKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKCk7XG59XG5cbi8vIHNyYy91dGlscy9TdWJzY3JpcHRpb24udHNcbmZ1bmN0aW9uIGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpIHtcbiAgbGV0IGZpcnN0ID0gbnVsbDtcbiAgbGV0IGxhc3QgPSBudWxsO1xuICByZXR1cm4ge1xuICAgIGNsZWFyKCkge1xuICAgICAgZmlyc3QgPSBudWxsO1xuICAgICAgbGFzdCA9IG51bGw7XG4gICAgfSxcbiAgICBub3RpZnkoKSB7XG4gICAgICBkZWZhdWx0Tm9vcEJhdGNoKCgpID0+IHtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gZmlyc3Q7XG4gICAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKCk7XG4gICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IFtdO1xuICAgICAgbGV0IGxpc3RlbmVyID0gZmlyc3Q7XG4gICAgICB3aGlsZSAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgICBsZXQgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gbGFzdCA9IHtcbiAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgIHByZXY6IGxhc3RcbiAgICAgIH07XG4gICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0ID0gbGlzdGVuZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIGlmICghaXNTdWJzY3JpYmVkIHx8IGZpcnN0ID09PSBudWxsKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIGlmIChsaXN0ZW5lci5uZXh0KSB7XG4gICAgICAgICAgbGlzdGVuZXIubmV4dC5wcmV2ID0gbGlzdGVuZXIucHJldjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0ID0gbGlzdGVuZXIucHJldjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlyc3QgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cbnZhciBudWxsTGlzdGVuZXJzID0ge1xuICBub3RpZnkoKSB7XG4gIH0sXG4gIGdldDogKCkgPT4gW11cbn07XG5mdW5jdGlvbiBjcmVhdGVTdWJzY3JpcHRpb24oc3RvcmUsIHBhcmVudFN1Yikge1xuICBsZXQgdW5zdWJzY3JpYmU7XG4gIGxldCBsaXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuICBsZXQgc3Vic2NyaXB0aW9uc0Ftb3VudCA9IDA7XG4gIGxldCBzZWxmU3Vic2NyaWJlZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBhZGROZXN0ZWRTdWIobGlzdGVuZXIpIHtcbiAgICB0cnlTdWJzY3JpYmUoKTtcbiAgICBjb25zdCBjbGVhbnVwTGlzdGVuZXIgPSBsaXN0ZW5lcnMuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICBsZXQgcmVtb3ZlZCA9IGZhbHNlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoIXJlbW92ZWQpIHtcbiAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgIGNsZWFudXBMaXN0ZW5lcigpO1xuICAgICAgICB0cnlVbnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbm90aWZ5TmVzdGVkU3VicygpIHtcbiAgICBsaXN0ZW5lcnMubm90aWZ5KCk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlV3JhcHBlcigpIHtcbiAgICBpZiAoc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGlzU3Vic2NyaWJlZCgpIHtcbiAgICByZXR1cm4gc2VsZlN1YnNjcmliZWQ7XG4gIH1cbiAgZnVuY3Rpb24gdHJ5U3Vic2NyaWJlKCkge1xuICAgIHN1YnNjcmlwdGlvbnNBbW91bnQrKztcbiAgICBpZiAoIXVuc3Vic2NyaWJlKSB7XG4gICAgICB1bnN1YnNjcmliZSA9IHBhcmVudFN1YiA/IHBhcmVudFN1Yi5hZGROZXN0ZWRTdWIoaGFuZGxlQ2hhbmdlV3JhcHBlcikgOiBzdG9yZS5zdWJzY3JpYmUoaGFuZGxlQ2hhbmdlV3JhcHBlcik7XG4gICAgICBsaXN0ZW5lcnMgPSBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmUoKSB7XG4gICAgc3Vic2NyaXB0aW9uc0Ftb3VudC0tO1xuICAgIGlmICh1bnN1YnNjcmliZSAmJiBzdWJzY3JpcHRpb25zQW1vdW50ID09PSAwKSB7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgdW5zdWJzY3JpYmUgPSB2b2lkIDA7XG4gICAgICBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgIGxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyeVN1YnNjcmliZVNlbGYoKSB7XG4gICAgaWYgKCFzZWxmU3Vic2NyaWJlZCkge1xuICAgICAgc2VsZlN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgdHJ5U3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlU2VsZigpIHtcbiAgICBpZiAoc2VsZlN1YnNjcmliZWQpIHtcbiAgICAgIHNlbGZTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICB0cnlVbnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICBjb25zdCBzdWJzY3JpcHRpb24gPSB7XG4gICAgYWRkTmVzdGVkU3ViLFxuICAgIG5vdGlmeU5lc3RlZFN1YnMsXG4gICAgaGFuZGxlQ2hhbmdlV3JhcHBlcixcbiAgICBpc1N1YnNjcmliZWQsXG4gICAgdHJ5U3Vic2NyaWJlOiB0cnlTdWJzY3JpYmVTZWxmLFxuICAgIHRyeVVuc3Vic2NyaWJlOiB0cnlVbnN1YnNjcmliZVNlbGYsXG4gICAgZ2V0TGlzdGVuZXJzOiAoKSA9PiBsaXN0ZW5lcnNcbiAgfTtcbiAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbn1cblxuLy8gc3JjL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QudHNcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiKTtcbnZhciBpc1JlYWN0TmF0aXZlID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gXCJSZWFjdE5hdGl2ZVwiO1xudmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBjYW5Vc2VET00gfHwgaXNSZWFjdE5hdGl2ZSA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcblxuLy8gc3JjL3V0aWxzL3NoYWxsb3dFcXVhbC50c1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IHkgIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICBjb25zdCBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBzcmMvdXRpbHMvaG9pc3RTdGF0aWNzLnRzXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAkJHR5cGVvZjogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAkJHR5cGVvZjogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHtcbiAgW0ZvcndhcmRSZWZdOiBGT1JXQVJEX1JFRl9TVEFUSUNTLFxuICBbTWVtb106IE1FTU9fU1RBVElDU1xufTtcbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIGlmIChpc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH1cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbXCIkJHR5cGVvZlwiXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIGNvbnN0IGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICBjb25zdCBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbi8vIHNyYy9jb21wb25lbnRzL2Nvbm5lY3QudHN4XG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBub3RJbml0aWFsaXplZDtcbnZhciBpbml0aWFsaXplQ29ubmVjdCA9IChmbikgPT4ge1xuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IGZuO1xufTtcbnZhciBOT19TVUJTQ1JJUFRJT05fQVJSQVkgPSBbbnVsbCwgbnVsbF07XG52YXIgc3RyaW5naWZ5Q29tcG9uZW50ID0gKENvbXApID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoQ29tcCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcoQ29tcCk7XG4gIH1cbn07XG5mdW5jdGlvbiB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3MoZWZmZWN0RnVuYywgZWZmZWN0QXJncywgZGVwZW5kZW5jaWVzKSB7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4gZWZmZWN0RnVuYyguLi5lZmZlY3RBcmdzKSwgZGVwZW5kZW5jaWVzKTtcbn1cbmZ1bmN0aW9uIGNhcHR1cmVXcmFwcGVyUHJvcHMobGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCB3cmFwcGVyUHJvcHMsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMpIHtcbiAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50ID0gd3JhcHBlclByb3BzO1xuICByZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50ID0gZmFsc2U7XG4gIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQpIHtcbiAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBudWxsO1xuICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgfVxufVxuZnVuY3Rpb24gc3Vic2NyaWJlVXBkYXRlcyhzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsIHN0b3JlLCBzdWJzY3JpcHRpb24sIGNoaWxkUHJvcHNTZWxlY3RvciwgbGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCBpc01vdW50ZWQsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMsIGFkZGl0aW9uYWxTdWJzY3JpYmVMaXN0ZW5lcikge1xuICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcylcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgIH07XG4gIGxldCBkaWRVbnN1YnNjcmliZSA9IGZhbHNlO1xuICBsZXQgbGFzdFRocm93bkVycm9yID0gbnVsbDtcbiAgY29uc3QgY2hlY2tGb3JVcGRhdGVzID0gKCkgPT4ge1xuICAgIGlmIChkaWRVbnN1YnNjcmliZSB8fCAhaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGF0ZXN0U3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgbGV0IG5ld0NoaWxkUHJvcHMsIGVycm9yO1xuICAgIHRyeSB7XG4gICAgICBuZXdDaGlsZFByb3BzID0gY2hpbGRQcm9wc1NlbGVjdG9yKFxuICAgICAgICBsYXRlc3RTdG9yZVN0YXRlLFxuICAgICAgICBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnRcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IgPSBlO1xuICAgICAgbGFzdFRocm93bkVycm9yID0gZTtcbiAgICB9XG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgbGFzdFRocm93bkVycm9yID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKG5ld0NoaWxkUHJvcHMgPT09IGxhc3RDaGlsZFByb3BzLmN1cnJlbnQpIHtcbiAgICAgIGlmICghcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCkge1xuICAgICAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgYWRkaXRpb25hbFN1YnNjcmliZUxpc3RlbmVyKCk7XG4gICAgfVxuICB9O1xuICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IGNoZWNrRm9yVXBkYXRlcztcbiAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgY29uc3QgdW5zdWJzY3JpYmVXcmFwcGVyID0gKCkgPT4ge1xuICAgIGRpZFVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IG51bGw7XG4gICAgaWYgKGxhc3RUaHJvd25FcnJvcikge1xuICAgICAgdGhyb3cgbGFzdFRocm93bkVycm9yO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVuc3Vic2NyaWJlV3JhcHBlcjtcbn1cbmZ1bmN0aW9uIHN0cmljdEVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbiA9IGZhbHNlO1xuZnVuY3Rpb24gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywge1xuICAvLyBUaGUgYHB1cmVgIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLCBzbyBUUyBkb2Vzbid0IGxpa2UgdXMgZGVzdHJ1Y3R1cmluZyB0aGlzIHRvIGNoZWNrIGl0cyBleGlzdGVuY2UuXG4gIC8vIEB0cy1pZ25vcmVcbiAgcHVyZSxcbiAgYXJlU3RhdGVzRXF1YWwgPSBzdHJpY3RFcXVhbCxcbiAgYXJlT3duUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgYXJlU3RhdGVQcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICAvLyB1c2UgUmVhY3QncyBmb3J3YXJkUmVmIHRvIGV4cG9zZSBhIHJlZiBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnRcbiAgZm9yd2FyZFJlZiA9IGZhbHNlLFxuICAvLyB0aGUgY29udGV4dCBjb25zdW1lciB0byB1c2VcbiAgY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0XG59ID0ge30pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmIChwdXJlICE9PSB2b2lkIDAgJiYgIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24pIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24gPSB0cnVlO1xuICAgICAgd2FybmluZyhcbiAgICAgICAgJ1RoZSBgcHVyZWAgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQuIGBjb25uZWN0YCBpcyBub3cgYWx3YXlzIGEgXCJwdXJlL21lbW9pemVkXCIgY29tcG9uZW50J1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgQ29udGV4dCA9IGNvbnRleHQ7XG4gIGNvbnN0IGluaXRNYXBTdGF0ZVRvUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHNGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcyk7XG4gIGNvbnN0IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcyk7XG4gIGNvbnN0IGluaXRNZXJnZVByb3BzID0gbWVyZ2VQcm9wc0ZhY3RvcnkobWVyZ2VQcm9wcyk7XG4gIGNvbnN0IHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyA9IEJvb2xlYW4obWFwU3RhdGVUb1Byb3BzKTtcbiAgY29uc3Qgd3JhcFdpdGhDb25uZWN0ID0gKFdyYXBwZWRDb21wb25lbnQpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zdCBpc1ZhbGlkID0gLyogQF9fUFVSRV9fICovIGlzVmFsaWRFbGVtZW50VHlwZShXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgIGlmICghaXNWYWxpZClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBZb3UgbXVzdCBwYXNzIGEgY29tcG9uZW50IHRvIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBieSBjb25uZWN0LiBJbnN0ZWFkIHJlY2VpdmVkICR7c3RyaW5naWZ5Q29tcG9uZW50KFxuICAgICAgICAgICAgV3JhcHBlZENvbXBvbmVudFxuICAgICAgICAgICl9YFxuICAgICAgICApO1xuICAgIH1cbiAgICBjb25zdCB3cmFwcGVkQ29tcG9uZW50TmFtZSA9IFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8IFwiQ29tcG9uZW50XCI7XG4gICAgY29uc3QgZGlzcGxheU5hbWUgPSBgQ29ubmVjdCgke3dyYXBwZWRDb21wb25lbnROYW1lfSlgO1xuICAgIGNvbnN0IHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMgPSB7XG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBkaXNwbGF5TmFtZSxcbiAgICAgIHdyYXBwZWRDb21wb25lbnROYW1lLFxuICAgICAgV3JhcHBlZENvbXBvbmVudCxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHMsXG4gICAgICBhcmVTdGF0ZXNFcXVhbCxcbiAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbCxcbiAgICAgIGFyZU93blByb3BzRXF1YWwsXG4gICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsXG4gICAgfTtcbiAgICBmdW5jdGlvbiBDb25uZWN0RnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgIGNvbnN0IFtwcm9wc0NvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIHdyYXBwZXJQcm9wc10gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmOiByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmMiwgLi4ud3JhcHBlclByb3BzMiB9ID0gcHJvcHM7XG4gICAgICAgIHJldHVybiBbcHJvcHMuY29udGV4dCwgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjIsIHdyYXBwZXJQcm9wczJdO1xuICAgICAgfSwgW3Byb3BzXSk7XG4gICAgICBjb25zdCBDb250ZXh0VG9Vc2UgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgbGV0IFJlc3VsdENvbnRleHQgPSBDb250ZXh0O1xuICAgICAgICBpZiAocHJvcHNDb250ZXh0Py5Db25zdW1lcikge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSAvKiBAX19QVVJFX18gKi8gaXNDb250ZXh0Q29uc3VtZXIoXG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcHNDb250ZXh0LkNvbnN1bWVyLCBudWxsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJZb3UgbXVzdCBwYXNzIGEgdmFsaWQgUmVhY3QgY29udGV4dCBjb25zdW1lciBhcyBgcHJvcHMuY29udGV4dGBcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVzdWx0Q29udGV4dCA9IHByb3BzQ29udGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlc3VsdENvbnRleHQ7XG4gICAgICB9LCBbcHJvcHNDb250ZXh0LCBDb250ZXh0XSk7XG4gICAgICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHRUb1VzZSk7XG4gICAgICBjb25zdCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPSBCb29sZWFuKHByb3BzLnN0b3JlKSAmJiBCb29sZWFuKHByb3BzLnN0b3JlLmdldFN0YXRlKSAmJiBCb29sZWFuKHByb3BzLnN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIGNvbnN0IGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID0gQm9vbGVhbihjb250ZXh0VmFsdWUpICYmIEJvb2xlYW4oY29udGV4dFZhbHVlLnN0b3JlKTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWRpZFN0b3JlQ29tZUZyb21Qcm9wcyAmJiAhZGlkU3RvcmVDb21lRnJvbUNvbnRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDb3VsZCBub3QgZmluZCBcInN0b3JlXCIgaW4gdGhlIGNvbnRleHQgb2YgXCIke2Rpc3BsYXlOYW1lfVwiLiBFaXRoZXIgd3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYSA8UHJvdmlkZXI+LCBvciBwYXNzIGEgY3VzdG9tIFJlYWN0IGNvbnRleHQgcHJvdmlkZXIgdG8gPFByb3ZpZGVyPiBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgUmVhY3QgY29udGV4dCBjb25zdW1lciB0byAke2Rpc3BsYXlOYW1lfSBpbiBjb25uZWN0IG9wdGlvbnMuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RvcmUgPSBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyBwcm9wcy5zdG9yZSA6IGNvbnRleHRWYWx1ZS5zdG9yZTtcbiAgICAgIGNvbnN0IGdldFNlcnZlclN0YXRlID0gZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPyBjb250ZXh0VmFsdWUuZ2V0U2VydmVyU3RhdGUgOiBzdG9yZS5nZXRTdGF0ZTtcbiAgICAgIGNvbnN0IGNoaWxkUHJvcHNTZWxlY3RvciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gZmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShzdG9yZS5kaXNwYXRjaCwgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyk7XG4gICAgICB9LCBbc3RvcmVdKTtcbiAgICAgIGNvbnN0IFtzdWJzY3JpcHRpb24sIG5vdGlmeU5lc3RlZFN1YnNdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKVxuICAgICAgICAgIHJldHVybiBOT19TVUJTQ1JJUFRJT05fQVJSQVk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbjIgPSBjcmVhdGVTdWJzY3JpcHRpb24oXG4gICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgZGlkU3RvcmVDb21lRnJvbVByb3BzID8gdm9pZCAwIDogY29udGV4dFZhbHVlLnN1YnNjcmlwdGlvblxuICAgICAgICApO1xuICAgICAgICBjb25zdCBub3RpZnlOZXN0ZWRTdWJzMiA9IHN1YnNjcmlwdGlvbjIubm90aWZ5TmVzdGVkU3Vicy5iaW5kKHN1YnNjcmlwdGlvbjIpO1xuICAgICAgICByZXR1cm4gW3N1YnNjcmlwdGlvbjIsIG5vdGlmeU5lc3RlZFN1YnMyXTtcbiAgICAgIH0sIFtzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWVdKTtcbiAgICAgIGNvbnN0IG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGRpZFN0b3JlQ29tZUZyb21Qcm9wcykge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5jb250ZXh0VmFsdWUsXG4gICAgICAgICAgc3Vic2NyaXB0aW9uXG4gICAgICAgIH07XG4gICAgICB9LCBbZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWUsIHN1YnNjcmlwdGlvbl0pO1xuICAgICAgY29uc3QgbGFzdENoaWxkUHJvcHMgPSBSZWFjdC51c2VSZWYodm9pZCAwKTtcbiAgICAgIGNvbnN0IGxhc3RXcmFwcGVyUHJvcHMgPSBSZWFjdC51c2VSZWYod3JhcHBlclByb3BzKTtcbiAgICAgIGNvbnN0IGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUgPSBSZWFjdC51c2VSZWYodm9pZCAwKTtcbiAgICAgIGNvbnN0IHJlbmRlcklzU2NoZWR1bGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICAgIGNvbnN0IGlzTW91bnRlZCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgICBjb25zdCBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yID0gUmVhY3QudXNlUmVmKFxuICAgICAgICB2b2lkIDBcbiAgICAgICk7XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICB9LCBbXSk7XG4gICAgICBjb25zdCBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCAmJiB3cmFwcGVyUHJvcHMgPT09IGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNTZWxlY3RvcihzdG9yZS5nZXRTdGF0ZSgpLCB3cmFwcGVyUHJvcHMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICB9LCBbc3RvcmUsIHdyYXBwZXJQcm9wc10pO1xuICAgICAgY29uc3Qgc3Vic2NyaWJlRm9yUmVhY3QgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlID0gKHJlYWN0TGlzdGVuZXIpID0+IHtcbiAgICAgICAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdWJzY3JpYmVVcGRhdGVzKFxuICAgICAgICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24sXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjaGlsZFByb3BzU2VsZWN0b3IsXG4gICAgICAgICAgICBsYXN0V3JhcHBlclByb3BzLFxuICAgICAgICAgICAgbGFzdENoaWxkUHJvcHMsXG4gICAgICAgICAgICByZW5kZXJJc1NjaGVkdWxlZCxcbiAgICAgICAgICAgIGlzTW91bnRlZCxcbiAgICAgICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsXG4gICAgICAgICAgICBub3RpZnlOZXN0ZWRTdWJzLFxuICAgICAgICAgICAgcmVhY3RMaXN0ZW5lclxuICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmU7XG4gICAgICB9LCBbc3Vic2NyaXB0aW9uXSk7XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3MoY2FwdHVyZVdyYXBwZXJQcm9wcywgW1xuICAgICAgICBsYXN0V3JhcHBlclByb3BzLFxuICAgICAgICBsYXN0Q2hpbGRQcm9wcyxcbiAgICAgICAgcmVuZGVySXNTY2hlZHVsZWQsXG4gICAgICAgIHdyYXBwZXJQcm9wcyxcbiAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSxcbiAgICAgICAgbm90aWZ5TmVzdGVkU3Vic1xuICAgICAgXSk7XG4gICAgICBsZXQgYWN0dWFsQ2hpbGRQcm9wcztcbiAgICAgIHRyeSB7XG4gICAgICAgIGFjdHVhbENoaWxkUHJvcHMgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShcbiAgICAgICAgICAvLyBUT0RPIFdlJ3JlIHBhc3NpbmcgdGhyb3VnaCBhIGJpZyB3cmFwcGVyIHRoYXQgZG9lcyBhIGJ1bmNoIG9mIGV4dHJhIHNpZGUgZWZmZWN0cyBiZXNpZGVzIHN1YnNjcmliaW5nXG4gICAgICAgICAgc3Vic2NyaWJlRm9yUmVhY3QsXG4gICAgICAgICAgLy8gVE9ETyBUaGlzIGlzIGluY3JlZGlibHkgaGFja3kuIFdlJ3ZlIGFscmVhZHkgcHJvY2Vzc2VkIHRoZSBzdG9yZSB1cGRhdGUgYW5kIGNhbGN1bGF0ZWQgbmV3IGNoaWxkIHByb3BzLFxuICAgICAgICAgIC8vIFRPRE8gYW5kIHdlJ3JlIGp1c3QgcGFzc2luZyB0aGF0IHRocm91Z2ggc28gaXQgdHJpZ2dlcnMgYSByZS1yZW5kZXIgZm9yIHVzIHJhdGhlciB0aGFuIHJlbHlpbmcgb24gYHVTRVNgLlxuICAgICAgICAgIGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvcixcbiAgICAgICAgICBnZXRTZXJ2ZXJTdGF0ZSA/ICgpID0+IGNoaWxkUHJvcHNTZWxlY3RvcihnZXRTZXJ2ZXJTdGF0ZSgpLCB3cmFwcGVyUHJvcHMpIDogYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgICAgIDtcbiAgICAgICAgICBlcnIubWVzc2FnZSArPSBgXG5UaGUgZXJyb3IgbWF5IGJlIGNvcnJlbGF0ZWQgd2l0aCB0aGlzIHByZXZpb3VzIGVycm9yOlxuJHtsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQuc3RhY2t9XG5cbmA7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCA9IHZvaWQgMDtcbiAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gdm9pZCAwO1xuICAgICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gYWN0dWFsQ2hpbGRQcm9wcztcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgV3JhcHBlZENvbXBvbmVudCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLi4uYWN0dWFsQ2hpbGRQcm9wcyxcbiAgICAgICAgICAgICAgcmVmOiByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSwgW3JlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIFdyYXBwZWRDb21wb25lbnQsIGFjdHVhbENoaWxkUHJvcHNdKTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkQ2hpbGQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykge1xuICAgICAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0VG9Vc2UuUHJvdmlkZXIsIHsgdmFsdWU6IG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgfSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgfSwgW0NvbnRleHRUb1VzZSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50LCBvdmVycmlkZGVuQ29udGV4dFZhbHVlXSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZDtcbiAgICB9XG4gICAgY29uc3QgX0Nvbm5lY3QgPSBSZWFjdC5tZW1vKENvbm5lY3RGdW5jdGlvbik7XG4gICAgY29uc3QgQ29ubmVjdCA9IF9Db25uZWN0O1xuICAgIENvbm5lY3QuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IENvbm5lY3RGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIGlmIChmb3J3YXJkUmVmKSB7XG4gICAgICBjb25zdCBfZm9yd2FyZGVkID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgICAgICAgZnVuY3Rpb24gZm9yd2FyZENvbm5lY3RSZWYocHJvcHMsIHJlZikge1xuICAgICAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0LCB7IC4uLnByb3BzLCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmOiByZWYgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBmb3J3YXJkZWQgPSBfZm9yd2FyZGVkO1xuICAgICAgZm9yd2FyZGVkLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgICBmb3J3YXJkZWQuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKGZvcndhcmRlZCwgV3JhcHBlZENvbXBvbmVudCk7XG4gICAgfVxuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaG9pc3ROb25SZWFjdFN0YXRpY3MoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG4gIHJldHVybiB3cmFwV2l0aENvbm5lY3Q7XG59XG52YXIgY29ubmVjdF9kZWZhdWx0ID0gY29ubmVjdDtcblxuLy8gc3JjL2NvbXBvbmVudHMvUHJvdmlkZXIudHN4XG5mdW5jdGlvbiBQcm92aWRlcih7XG4gIHN0b3JlLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgc2VydmVyU3RhdGUsXG4gIHN0YWJpbGl0eUNoZWNrID0gXCJvbmNlXCIsXG4gIGlkZW50aXR5RnVuY3Rpb25DaGVjayA9IFwib25jZVwiXG59KSB7XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgZ2V0U2VydmVyU3RhdGU6IHNlcnZlclN0YXRlID8gKCkgPT4gc2VydmVyU3RhdGUgOiB2b2lkIDAsXG4gICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVja1xuICAgIH07XG4gIH0sIFtzdG9yZSwgc2VydmVyU3RhdGUsIHN0YWJpbGl0eUNoZWNrLCBpZGVudGl0eUZ1bmN0aW9uQ2hlY2tdKTtcbiAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gc3RvcmUuZ2V0U3RhdGUoKSwgW3N0b3JlXSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgc3Vic2NyaXB0aW9uIH0gPSBjb250ZXh0VmFsdWU7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicztcbiAgICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gICAgaWYgKHByZXZpb3VzU3RhdGUgIT09IHN0b3JlLmdldFN0YXRlKCkpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gdm9pZCAwO1xuICAgIH07XG4gIH0sIFtjb250ZXh0VmFsdWUsIHByZXZpb3VzU3RhdGVdKTtcbiAgY29uc3QgQ29udGV4dCA9IGNvbnRleHQgfHwgUmVhY3RSZWR1eENvbnRleHQ7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0VmFsdWUgfSwgY2hpbGRyZW4pO1xufVxudmFyIFByb3ZpZGVyX2RlZmF1bHQgPSBQcm92aWRlcjtcblxuLy8gc3JjL2hvb2tzL3VzZVN0b3JlLnRzXG5mdW5jdGlvbiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVJlZHV4Q29udGV4dDIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVJlZHV4Q29udGV4dCA6IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0KVxuICApO1xuICBjb25zdCB1c2VTdG9yZTIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdXNlUmVkdXhDb250ZXh0MigpO1xuICAgIHJldHVybiBzdG9yZTtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VTdG9yZTIsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHVzZVN0b3JlMlxuICB9KTtcbiAgcmV0dXJuIHVzZVN0b3JlMjtcbn1cbnZhciB1c2VTdG9yZSA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTdG9yZUhvb2soKTtcblxuLy8gc3JjL2hvb2tzL3VzZURpc3BhdGNoLnRzXG5mdW5jdGlvbiBjcmVhdGVEaXNwYXRjaEhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVN0b3JlMiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlU3RvcmUgOiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCk7XG4gIGNvbnN0IHVzZURpc3BhdGNoMiA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlMigpO1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaDtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VEaXNwYXRjaDIsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHVzZURpc3BhdGNoMlxuICB9KTtcbiAgcmV0dXJuIHVzZURpc3BhdGNoMjtcbn1cbnZhciB1c2VEaXNwYXRjaCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVEaXNwYXRjaEhvb2soKTtcblxuLy8gc3JjL2V4cG9ydHMudHNcbnZhciBiYXRjaCA9IGRlZmF1bHROb29wQmF0Y2g7XG5cbi8vIHNyYy9pbmRleC50c1xuaW5pdGlhbGl6ZVVzZVNlbGVjdG9yKHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yMik7XG5pbml0aWFsaXplQ29ubmVjdChSZWFjdDIudXNlU3luY0V4dGVybmFsU3RvcmUpO1xuZXhwb3J0IHtcbiAgUHJvdmlkZXJfZGVmYXVsdCBhcyBQcm92aWRlcixcbiAgUmVhY3RSZWR1eENvbnRleHQsXG4gIGJhdGNoLFxuICBjb25uZWN0X2RlZmF1bHQgYXMgY29ubmVjdCxcbiAgY3JlYXRlRGlzcGF0Y2hIb29rLFxuICBjcmVhdGVTZWxlY3Rvckhvb2ssXG4gIGNyZWF0ZVN0b3JlSG9vayxcbiAgc2hhbGxvd0VxdWFsLFxuICB1c2VEaXNwYXRjaCxcbiAgdXNlU2VsZWN0b3IsXG4gIHVzZVN0b3JlXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtcmVkdXgubWpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBbGxXaWRnZXRQcm9wcywgSU1TdGF0ZSwgU2Vzc2lvbk1hbmFnZXIgfSBmcm9tICdqaW11LWNvcmUnO1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcclxuaW1wb3J0IHsgbG9hZE1vZHVsZXMgfSBmcm9tICdlc3JpLWxvYWRlcic7XHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTG9hZGluZywgU2VsZWN0LCBNdWx0aVJhbmdlU2xpZGVyIH0gZnJvbSAnamltdS11aSc7XHJcblxyXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaG9va3MvdXNlTG9jYWxlXCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0aW9ucyB9IGZyb20gJy4vdHJhbnNsYXRpb25zJztcclxuXHJcbmludGVyZmFjZSBCYW5kIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgU2Vuc29yIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgYmFuZHM6IEJhbmRbXTtcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBJTUNvbmZpZyB7XHJcbiAgZXhhbXBsZUNvbmZpZ1Byb3BlcnR5OiBzdHJpbmc7XHJcbn1cclxuY29uc3Qgc2Vuc29yczogU2Vuc29yW10gPSBbXHJcbiAge1xyXG4gICAgaWQ6ICd3b3JsZHZpZXcnLFxyXG4gICAgdGl0bGU6ICdXb3JsZHZpZXcyJyxcclxuICAgIGJhbmRzOiBbXHJcbiAgICAgIHsgbmFtZTogJ0NvYXN0YWwoMSknLCB2YWx1ZTogJzEnIH0sXHJcbiAgICAgIHsgbmFtZTogJ0JsdWUoMiknLCB2YWx1ZTogJzInIH0sXHJcbiAgICAgIHsgbmFtZTogJ0dyZWVuKDMpJywgdmFsdWU6ICczJyB9LFxyXG4gICAgICB7IG5hbWU6ICdZZWxsb3coNCknLCB2YWx1ZTogJzQnIH0sXHJcbiAgICAgIHsgbmFtZTogJ1JlZCg1KScsIHZhbHVlOiAnNScgfSxcclxuICAgICAgeyBuYW1lOiAnUmVkIEVkZ2UoNiknLCB2YWx1ZTogJzYnIH0sXHJcbiAgICAgIHsgbmFtZTogJ05JUiAtMSg3KScsIHZhbHVlOiAnNycgfSxcclxuICAgICAgeyBuYW1lOiAnTklSIC0yKDgpJywgdmFsdWU6ICc4JyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdmYXNhdCcsXHJcbiAgICB0aXRsZTogJ09XRF9GYXNhdENfTVNfdjJfMjAyNTAzMTInLFxyXG4gICAgYmFuZHM6IFtcclxuICAgICAgeyBuYW1lOiAnUmVkKDEpJywgdmFsdWU6ICcxJyB9LFxyXG4gICAgICB7IG5hbWU6ICdHcmVlbigyKScsIHZhbHVlOiAnMicgfSxcclxuICAgICAgeyBuYW1lOiAnQmx1ZSgzKScsIHZhbHVlOiAnMycgfSxcclxuICAgICAgeyBuYW1lOiAnTklSKDQpJywgdmFsdWU6ICc0JyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdkZWZhdWx0JyxcclxuICAgIHRpdGxlOiAnRGVmYXVsdCcsXHJcbiAgICBiYW5kczogW1xyXG4gICAgICB7IG5hbWU6ICdCbHVlKDEpJywgdmFsdWU6ICcxJyB9LFxyXG4gICAgICB7IG5hbWU6ICdHcmVlbigyKScsIHZhbHVlOiAnMicgfSxcclxuICAgICAgeyBuYW1lOiAnUmVkKDMpJywgdmFsdWU6ICczJyB9LFxyXG4gICAgICB7IG5hbWU6ICdOSVIoNCknLCB2YWx1ZTogJzQnIH0sXHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgV2lkZ2V0OiBSZWFjdC5GQzxBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgdCB9ID0gdXNlTG9jYWxlKHRyYW5zbGF0aW9ucyk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkSW1hZ2VyaWVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5teVN0YXRlPy5zZWxlY3RlZEltYWdlcylcclxuICBjb25zdCBzZWxlY3RlZFNlbnNvciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUubXlTdGF0ZT8uc2VsZWN0ZWRTZW5zb3IpXHJcbiAgY29uc3QgZ2VvcHJvY2VzcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUubXlTdGF0ZT8uZ2VvcHJvY2VzcylcclxuXHJcbiAgY29uc3QgW2ppbXVNYXBWaWV3LCBzZXRKaW11TWFwVmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW5wdXRNaW5SYW5nZSwgc2V0SW5wdXRNaW5SYW5nZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaW5wdXRNYXhSYW5nZSwgc2V0SW5wdXRNYXhSYW5nZV0gPSB1c2VTdGF0ZSgwLjUpO1xyXG4gIGNvbnN0IFtpbnB1dFR5cGVBcmVhTWF4LCBzZXRJbnB1dFR5cGVBcmVhTWF4XSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtpbnB1dFR5cGVBcmVhTWluLCBzZXRJbnB1dFR5cGVBcmVhTWluXSA9IHVzZVN0YXRlKC0xKTtcclxuICBjb25zdCBbc2VsZWN0ZWRGb3JtdWxhLCBzZXRTZWxlY3RlZEZvcm11bGFdID0gdXNlU3RhdGUoJyhiNCAtIGIxKSAvIChiNCArIGIxKScpO1xyXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoWzAsIDI1NSwgMCwgMjU1XSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0ZpcmUsIHNldElzRmlyZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2F2YWlsYWJsZVNlbnNvcnMsIHNldEF2YWlsYWJsZVNlbnNvcnNdID0gdXNlU3RhdGUoc2Vuc29ycylcclxuICBjb25zdCBbaXNBcGxpZWQsIHNldElzQXBsaWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgLy9yZWZzXHJcbiAgY29uc3QgaW1hZ2VyeUxheWVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGVzcmlNb2R1bGVzUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHJcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12KSA9PiB7XHJcbiAgICBpZiAoam12KSB7XHJcbiAgICAgIC8vIGlmIChqaW11TWFwVmlldykge1xyXG4gICAgICAvLyAgIGppbXVNYXBWaWV3LnZpZXcud2F0Y2goJ2V4dGVudCcsIG51bGwpO1xyXG4gICAgICAvLyAgIGppbXVNYXBWaWV3LnZpZXcud2F0Y2goJ3pvb20nLCBudWxsKTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgc2V0SmltdU1hcFZpZXcoam12KTtcclxuXHJcbiAgICAgIC8vIGlmIChqbXYpIHtcclxuICAgICAgLy8gICBqbXYudmlldy53YXRjaCgnZXh0ZW50JywgYXBsaWNhck1hc2NhcmEpO1xyXG4gICAgICAvLyAgIGptdi52aWV3LndhdGNoKCd6b29tJywgYXBsaWNhck1hc2NhcmEpO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gcGFyc2VCYW5kcyh2YWx1ZTogc3RyaW5nKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgIC50cmltKClcclxuICAgICAgLnNwbGl0KC9cXHMrLykgICAgICAvLyBzZXBhcmEgcG9yIHVubyBvIG3DoXMgZXNwYWNpb3NcclxuICAgICAgLm1hcChOdW1iZXIpOyAgICAgIC8vIGNvbnZpZXJ0ZSBhIG51bWJlclxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVSYW5nZUNoYW5nZSA9IChtaW5WYWx1ZSwgbWF4VmFsdWUpID0+IHtcclxuICAgIHNldElucHV0TWluUmFuZ2UobWluVmFsdWUpXHJcbiAgICBzZXRJbnB1dE1heFJhbmdlKG1heFZhbHVlKVxyXG4gICAgY3JlYXJJbWFnZXJ5TGF5ZXIoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtdWxhQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRJc0FwbGllZChmYWxzZSlcclxuICAgIHJlbW92ZUxheWVyKClcclxuICAgIGNvbnN0IGZvcm11bGEgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBzd2l0Y2ggKGZvcm11bGEpIHtcclxuXHJcblxyXG4gICAgICBjYXNlIFwiTkRWSVwiOlxyXG4gICAgICAgIHNldElzRmlyZShmYWxzZSlcclxuICAgICAgICAvL3NldEluZGljZVR5cGUoXCJORFZJXCIpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFNlbnNvcikge1xyXG4gICAgICAgICAgY29uc3Qgc2Vuc29yID0gYXZhaWxhYmxlU2Vuc29ycy5maW5kKHMgPT4gcy50aXRsZSA9PT0gc2VsZWN0ZWRTZW5zb3IudGl0bGUgfHwgcy50aXRsZSA9PT0gXCJEZWZhdWx0XCIpO1xyXG5cclxuICAgICAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSAnV29ybGR2aWV3MicpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKGAoQiR7c2Vuc29yLmJhbmRzWzZdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbNF0/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzZdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbNF0/LnZhbHVlfSlgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSAnT1dEX0Zhc2F0Q19NU192Ml8yMDI1MDMxMicpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKGAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbMF0/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbMF0/LnZhbHVlfSlgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSAnRGVmYXVsdCcpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKGAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbMl0/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbMl0/LnZhbHVlfSlgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q29sb3IoWzAsIDI1NSwgMCwgMjU1XSk7XHJcbiAgICAgICAgc2V0SW5wdXRUeXBlQXJlYU1heCgxKTtcclxuICAgICAgICBzZXRJbnB1dFR5cGVBcmVhTWluKC0xKTtcclxuICAgICAgICBzZXRJbnB1dE1pblJhbmdlKDAuMyk7XHJcbiAgICAgICAgc2V0SW5wdXRNYXhSYW5nZSgwLjcpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJTQVZJXCI6XHJcbiAgICAgICAgc2V0SXNGaXJlKGZhbHNlKVxyXG4gICAgICAgIGlmIChzZWxlY3RlZFNlbnNvcikge1xyXG4gICAgICAgICAgY29uc3Qgc2Vuc29yID0gYXZhaWxhYmxlU2Vuc29ycy5maW5kKHMgPT4gcy50aXRsZSA9PT0gc2VsZWN0ZWRTZW5zb3IudGl0bGUgfHwgcy50aXRsZSA9PT0gXCJEZWZhdWx0XCIpO1xyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdXb3JsZHZpZXcyJykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYCgoQiR7c2Vuc29yLmJhbmRzWzZdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbNF0/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzZdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbNF0/LnZhbHVlfSArIDAsNSkpICogKDEgKyAwLDUpYCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdPV0RfRmFzYXRDX01TX3YyXzIwMjUwMzEyJykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYCgoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbMF0/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbMF0/LnZhbHVlfSArIDAsNSkpICogKDEgKyAwLDUpYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ0RlZmF1bHQnKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgKChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9ICsgMCw1KSkgKiAoMSArIDAsNSlgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDb2xvcihbMjU1LCAyNTUsIDAsIDI1NV0pO1xyXG4gICAgICAgIHNldElucHV0VHlwZUFyZWFNYXgoMS41KTtcclxuICAgICAgICBzZXRJbnB1dFR5cGVBcmVhTWluKC0xLjUpO1xyXG4gICAgICAgIHNldElucHV0TWluUmFuZ2UoMC4zKTtcclxuICAgICAgICBzZXRJbnB1dE1heFJhbmdlKDAuNylcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIk5EV0lcIjpcclxuICAgICAgICBzZXRJc0ZpcmUoZmFsc2UpXHJcbiAgICAgICAgLy9zZXRJbmRpY2VUeXBlKFwiTkRXSVwiKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRTZW5zb3IpIHtcclxuICAgICAgICAgIGNvbnN0IHNlbnNvciA9IGF2YWlsYWJsZVNlbnNvcnMuZmluZChzID0+IHMudGl0bGUgPT09IHNlbGVjdGVkU2Vuc29yLnRpdGxlIHx8IHMudGl0bGUgPT09IFwiRGVmYXVsdFwiKTtcclxuXHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ1dvcmxkdmlldzInKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgKEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzZdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzZdPy52YWx1ZX0pYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ09XRF9GYXNhdENfTVNfdjJfMjAyNTAzMTInKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgKEIke3NlbnNvci5iYW5kc1sxXT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1sxXT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0pYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ0RlZmF1bHQnKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgKEIke3NlbnNvci5iYW5kc1sxXT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1sxXT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0pYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENvbG9yKFswLCAwLCAyNTUsIDI1NV0pO1xyXG4gICAgICAgIHNldElucHV0VHlwZUFyZWFNYXgoMSk7XHJcbiAgICAgICAgc2V0SW5wdXRUeXBlQXJlYU1pbigtMSk7XHJcbiAgICAgICAgc2V0SW5wdXRNaW5SYW5nZSgwLjMpO1xyXG4gICAgICAgIHNldElucHV0TWF4UmFuZ2UoMC43KVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiQkFJXCI6XHJcblxyXG4gICAgICAgIC8vYXBsaWNhciBsYSBmb3JtdWxhICAxIC8gKCgwLjEgLSBSb2pvKV4yICsgKDAuMDYgLSBOSVIpXjIpXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkU2Vuc29yKSB7XHJcbiAgICAgICAgICBjb25zdCBzZW5zb3IgPSBhdmFpbGFibGVTZW5zb3JzLmZpbmQocyA9PiBzLnRpdGxlID09PSBzZWxlY3RlZFNlbnNvci50aXRsZSB8fCBzLnRpdGxlID09PSBcIkRlZmF1bHRcIik7XHJcblxyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdXb3JsZHZpZXcyJykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYDEgLyAoKDAuMSAtIEIke3NlbnNvci5iYW5kc1s0XT8udmFsdWV9KSoqMiArICgwLjA2IC0gQiR7c2Vuc29yLmJhbmRzWzZdPy52YWx1ZX0pKioyKWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdPV0RfRmFzYXRDX01TX3YyXzIwMjUwMzEyJykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYDEgLyAoKDAuMSAtIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9KSoqMiArICgwLjA2IC0gQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0pKioyKWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdEZWZhdWx0Jykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYDEgLyAoKDAuMSAtIEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9KSoqMiArICgwLjA2IC0gQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0pKioyKWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc0ZpcmUodHJ1ZSlcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXJJbWFnZXJ5TGF5ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIC8vU2llbXByZSB5IGN1YW5kbyBlbCBhcnJheSBzZWxlY3RlZEltYWdlcmllcyB0ZW5nYSBhbCBtZW5vcyAyIGVsZW1lbnRvc1xyXG4gICAgaWYgKHNlbGVjdGVkSW1hZ2VyaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy9TZSBhc2lnbmFuIGxhcyBpbWFnZW5lcyBhIGxhcyB2YXJpYWJsZXNcclxuICAgICAgbGV0IGltZzFEYXRhID0gc2VsZWN0ZWRJbWFnZXJpZXNbMF0/Lk9CSkVDVElEO1xyXG5cclxuICAgICAgLy8gVmFsaWRhciBxdWUgYWwgbWVub3MgdW5hIHNlbGVjY2nDs24gc2VhIHbDoWxpZGFcclxuICAgICAgaWYgKGltZzFEYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgLy9TaSBleGl0ZSBlbCBtYXBhIHkgZXhpc3RhbiBsb3MgbW9kdWxvcyBkZSBFc3JpXHJcbiAgICAgICAgaWYgKGppbXVNYXBWaWV3ICYmIGVzcmlNb2R1bGVzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIC8vU2UgdXRpbGl6YW4gbG9zIG1vZHVsb3MgZGUgRXNyaVxyXG4gICAgICAgICAgY29uc3QgeyBJbWFnZXJ5TGF5ZXIsIFJhc3RlckZ1bmN0aW9uLCBSYXN0ZXJTdHJldGNoUmVuZGVyZXIgfSA9IGVzcmlNb2R1bGVzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgICAvL1NlIGJ1c2NhIGxhIGNhcGEgXHJcbiAgICAgICAgICBjb25zdCBpbWFnZXJ5TGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKHNlbGVjdGVkU2Vuc29yPy5pZCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IGltYWdlcnlMYXllciB9KVxyXG4gICAgICAgICAgLy9TZSBhc2lnbmEgbGEgdXJsIGRlIGxhIGNhcGFcclxuICAgICAgICAgIGNvbnN0IGxheWVyVXJsID0gaW1hZ2VyeUxheWVyLnVybFxyXG4gICAgICAgICAgLy9TZSBjcmVhIGxhIGV4cHJlc2lvbiBkZSBsYSBjb25zdWx0YVxyXG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBgT0JKRUNUSUQgSU4gKCR7aW1nMURhdGF9KWA7XHJcblxyXG4gICAgICAgICAgLy9TZSBjcmVhIGxhIGZ1bmNpb24gUmFzdGVyIGRlIGxhIGNvbnN1bHRhXHJcbiAgICAgICAgICBjb25zdCBiYW5kQXJpdGhtZXRpY0Z1bmN0aW9uID0gbmV3IFJhc3RlckZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiAnQmFuZEFyaXRobWV0aWMnLFxyXG4gICAgICAgICAgICBvdXRwdXRQaXhlbFR5cGU6ICdGMzInLFxyXG4gICAgICAgICAgICBmdW5jdGlvbkFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICAgIE1ldGhvZDogMCxcclxuICAgICAgICAgICAgICBCYW5kSW5kZXhlczogc2VsZWN0ZWRGb3JtdWxhLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmVtYXBGdW5jdGlvbiA9IG5ldyBSYXN0ZXJGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogJ1JlbWFwJyxcclxuICAgICAgICAgICAgb3V0cHV0UGl4ZWxUeXBlOiAnRjMyJyxcclxuICAgICAgICAgICAgZnVuY3Rpb25Bcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgICBSYXN0ZXI6IGJhbmRBcml0aG1ldGljRnVuY3Rpb24sXHJcbiAgICAgICAgICAgICAgSW5wdXRSYW5nZXM6IFtpbnB1dE1pblJhbmdlLCBpbnB1dE1heFJhbmdlXSxcclxuICAgICAgICAgICAgICBPdXRwdXRWYWx1ZXM6IFsyXSxcclxuICAgICAgICAgICAgICBOb0RhdGFSYW5nZXM6IFstSW5maW5pdHksIGlucHV0VHlwZUFyZWFNaW4sIGlucHV0VHlwZUFyZWFNYXgsIEluZmluaXR5XSxcclxuICAgICAgICAgICAgICBBbGxvd1VubWF0Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzdHJldGNoUmVuZGVyZXIgPSBuZXcgUmFzdGVyU3RyZXRjaFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgc3RyZXRjaFR5cGU6ICdtaW4tbWF4JyxcclxuICAgICAgICAgICAgc3RhdGlzdGljczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1pbjogaW5wdXRUeXBlQXJlYU1pbixcclxuICAgICAgICAgICAgICAgIG1heDogaW5wdXRUeXBlQXJlYU1heCxcclxuICAgICAgICAgICAgICAgIGF2ZzogKGlucHV0VHlwZUFyZWFNaW4gKyBpbnB1dFR5cGVBcmVhTWF4KSAvIDIsXHJcbiAgICAgICAgICAgICAgICBzdGRkZXY6IDAuMSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjb2xvclJhbXA6IHtcclxuICAgICAgICAgICAgICB0eXBlOiAnYWxnb3JpdGhtaWMnLFxyXG4gICAgICAgICAgICAgIGZyb21Db2xvcjogWzI1NSwgMjU1LCAyNTUsIDBdLFxyXG4gICAgICAgICAgICAgIHRvQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvL1NlIGNyZWEgbGEgbnVldmEgY2FwYSBmaWx0cmFkYSBwb3IgaWRcclxuICAgICAgICAgIGNvbnN0IG5ld0ltYWdlcnlMYXllciA9IG5ldyBJbWFnZXJ5TGF5ZXIoe1xyXG4gICAgICAgICAgICB1cmw6IGxheWVyVXJsLFxyXG4gICAgICAgICAgICBpZDogJ8ONbmRpY2VzIGVzcGVjdHJhbGVzJyxcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgdGl0bGU6IHQoXCJ3aWRnZXRMYWJlbFwiKSxcclxuICAgICAgICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb24sIC8vIEZpbHRybyBwb3IgT0JKRUNUSURcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIEVsaW1pbmFyIGxhIGNhcGEgZXhpc3RlbnRlIHNpIHlhIGVzdMOhIGNhcmdhZGFcclxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKCfDjW5kaWNlcyBlc3BlY3RyYWxlcycpO1xyXG4gICAgICAgICAgaWYgKGV4aXN0aW5nTGF5ZXIpIHtcclxuICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGV4aXN0aW5nTGF5ZXIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIEFncmVnYXIgbGEgbnVldmEgY2FwYSBjb24gbG9zIGZpbHRyb3MgeSByZW5kZXJpemFkb3Jlc1xyXG4gICAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAuYWRkKG5ld0ltYWdlcnlMYXllcik7XHJcblxyXG4gICAgICAgICAgLy8gQXNpZ25hciBmdW5jaW9uZXMgeSByZW5kZXJpemFkb3JcclxuICAgICAgICAgIG5ld0ltYWdlcnlMYXllci5yYXN0ZXJGdW5jdGlvbiA9IHJlbWFwRnVuY3Rpb247XHJcbiAgICAgICAgICBuZXdJbWFnZXJ5TGF5ZXIucmVuZGVyZXIgPSBzdHJldGNoUmVuZGVyZXI7XHJcblxyXG4gICAgICAgICAgaW1hZ2VyeUxheWVyUmVmLmN1cnJlbnQgPSBuZXdJbWFnZXJ5TGF5ZXI7XHJcblxyXG4gICAgICAgICAgLy8gVmFsaWRhciBjdWFuZG8gbGEgY2FwYSBlc3TDqSBsaXN0YVxyXG4gICAgICAgICAgbmV3SW1hZ2VyeUxheWVyLndoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2FyZ2FuZG8gZWwgbGF5ZXI6XCIsIGVycilcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5kaWNlQmFpID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3RlZEltYWdlOiBhbnkgPSBzZWxlY3RlZEltYWdlcmllc1swXTtcclxuICAgICAgY29uc3Qgb2JqZWN0SWQgPSBzZWxlY3RlZEltYWdlPy5PQkpFQ1RJRDtcclxuXHJcbiAgICAgIGNvbnN0IHByb2Nlc28gPSA1O1xyXG4gICAgICBjb25zdCBlbnRyYWRhID0gb2JqZWN0SWQ7XHJcblxyXG4gICAgICBjb25zdCBnZW9tZXRyeSA9IHtcclxuICAgICAgICB4OiBzZWxlY3RlZEltYWdlPy5sb25naXR1ZGUsXHJcbiAgICAgICAgeTogc2VsZWN0ZWRJbWFnZT8ubGF0aXR1ZGUsXHJcbiAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHNlc3Npb24gPSBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE1haW5TZXNzaW9uKCk7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gc2Vzc2lvbj8udG9rZW47XHJcblxyXG4gICAgICBsZXQgYmFzZVVybCA9IHNlbGVjdGVkU2Vuc29yPy51cmwgfHwgXCJodHRwczovL2dpc2Npdi5zbnNhdC5jbC9keW5pbWFnZS9yZXN0L3NlcnZpY2VzLzAyX0dlb3Byb2Nlc29fZW5fbGluZWEvT1dEX0Zhc2F0Q19NU192Ml8yMDI1MDMxMi9JbWFnZVNlcnZlclwiO1xyXG5cclxuICAgICAgbGV0IG5ld1VybFNhbXBsZSA9IGAke2Jhc2VVcmx9L2dldFNhbXBsZXM/Z2VvbWV0cnk9JHtKU09OLnN0cmluZ2lmeShnZW9tZXRyeSl9Jmdlb21ldHJ5VHlwZT1lc3JpR2VvbWV0cnlQb2ludCZpblNSPTQzMjYmb3V0U1I9NDMyNiZyZXR1cm5HZW9tZXRyeT10cnVlJnJldHVybkNhdGFsb2dJdGVtcz10cnVlJmY9anNvbmBcclxuXHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIG5ld1VybFNhbXBsZSArPSBgJnRva2VuPSR7dG9rZW59YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2VTYW1wbGUgPSBhd2FpdCBmZXRjaChuZXdVcmxTYW1wbGUsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZGF0YVNhbXBsZSA9IGF3YWl0IHJlc3BvbnNlU2FtcGxlLmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHsgZGF0YVNhbXBsZSB9KTtcclxuICAgICAgY29uc3QgYmFuZHMgPSBwYXJzZUJhbmRzKGRhdGFTYW1wbGUuc2FtcGxlc1swXS52YWx1ZSk7XHJcblxyXG4gICAgICAvLyBEZXNlc3RydWN0dXJhY2nDs24gbGltcGlhXHJcbiAgICAgIGNvbnN0IFtCMSwgQjIsIEIzLCBCNF0gPSBiYW5kcztcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHsgQjEsIEIyLCBCMywgQjQgfSk7XHJcbiAgICAgIC8vIDEgLyAoKDAuMSAtIDEwLjUyMjYzMDY5MikqKjIgKyAoKDAuMDYgLSAxMS40Mjk5MTM1MjEpKioyKSk7XHJcbiAgICAgIC8vMSAvICgxMTAuNzI1NzU2NjgwMjIwNCArIDEzMC42NDI5MjMwOTc1Mzg2KVxyXG4gICAgICAvLyAxLyAyNDEuMzY4Njc5Nzc3NzU5XHJcbiAgICAgIC8vMC4wMDQxNDMwMzk2MDYxMzU5XHJcbiAgICAgIGNvbnN0IGRlbm9taW5hZG9yID0gMSAvICgoTWF0aC5wb3coKDAuMSAtIEIxKSwgMikgKyAoTWF0aC5wb3coKDAuMDYgLSBCNCksIDIpKSkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhNYXRoLnBvdygoMC4xIC0gQjEpLCAyKSlcclxuICAgICAgY29uc29sZS5sb2coTWF0aC5wb3coKDAuMDYgLSBCNCksIDIpKVxyXG4gICAgICBjb25zb2xlLmxvZyh7IGRlbm9taW5hZG9yIH0pXHJcblxyXG4gICAgICB2YXIgdXJsQ29uc3VsdGEgPSBgaHR0cDovLzEyNy4wLjAuMTo1MDAwL3Byb3h5P3Byb2Nlc289JHtwcm9jZXNvfSZFbnRyYWRhPSR7ZW50cmFkYX0mdXJsPSR7c2VsZWN0ZWRTZW5zb3IudXJsfSZkZW5vbWluYWRvcj0ke2Rlbm9taW5hZG9yfWBcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsQ29uc3VsdGEsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMCR7ZGF0YS51cmxKc29ufWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGFWYWxpZGFkYSA9IGF3YWl0IHJlc3BvbnNlRGF0YS5qc29uKCk7XHJcblxyXG4gICAgICAvL3NldEluZGljZVR5cGUoXCJCQUlcIik7XHJcbiAgICAgIGlmIChzZWxlY3RlZFNlbnNvcikge1xyXG4gICAgICAgIGNvbnN0IHNlbnNvciA9IHNlbnNvcnMuZmluZChzID0+IHMudGl0bGUgPT09IHNlbGVjdGVkU2Vuc29yLnRpdGxlKTtcclxuICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ1dvcmxkdmlldzInKSB7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYDEgLyAoKCgwLDEgLSBCJHtzZW5zb3IuYmFuZHNbNF0/LnZhbHVlfSleMikgKyAoKDAsMDYgLSBCJHtzZW5zb3IuYmFuZHNbNl0/LnZhbHVlfSleMikpYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSAnT1dEX0Zhc2F0Q19NU192Ml8yMDI1MDMxMicpIHtcclxuICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgMSAvICgoKDAsMSAtIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9KV4yKSArICgoMCwwNiAtIEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9KV4yKSlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdEZWZhdWx0Jykge1xyXG4gICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKGAxIC8gKCgoMCwxIC0gQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0pXjIpICsgKCgwLDA2IC0gQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0pXjIpKWApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YVZhbGlkYWRhKVxyXG4gICAgICBzZXRDb2xvcihbMjU1LCAwLCAwLCAyNTVdKTtcclxuICAgICAgc2V0SW5wdXRUeXBlQXJlYU1pbihwYXJzZUZsb2F0KGRhdGFWYWxpZGFkYS5ldGlxdWV0YXMuZXRpcXVldGFfMSkpO1xyXG4gICAgICBzZXRJbnB1dE1pblJhbmdlKHBhcnNlRmxvYXQoZGF0YVZhbGlkYWRhLmV0aXF1ZXRhcy5ldGlxdWV0YV8zKSk7XHJcbiAgICAgIHNldElucHV0TWF4UmFuZ2UocGFyc2VGbG9hdChkYXRhVmFsaWRhZGEuZXRpcXVldGFzLmV0aXF1ZXRhXzQpKTtcclxuICAgICAgc2V0SW5wdXRUeXBlQXJlYU1heChwYXJzZUZsb2F0KGRhdGFWYWxpZGFkYS5ldGlxdWV0YXMuZXRpcXVldGFfNSkpO1xyXG5cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBlbnZpYXIgbGEgc29saWNpdHVkOicsIGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vU2UgY3JlYSB1bmEgZnVuY2lvbiBwYXJhIGNhcmdhciBsb3MgbW9kdWxvcyBkZSBFc3JpXHJcbiAgY29uc3QgbG9hZEVzcmlNb2R1bGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgIGxvYWRNb2R1bGVzKFtcclxuICAgICAgICAnZXNyaS9sYXllcnMvc3VwcG9ydC9SYXN0ZXJGdW5jdGlvbicsXHJcbiAgICAgICAgJ2VzcmkvcmVuZGVyZXJzL1Jhc3RlclN0cmV0Y2hSZW5kZXJlcicsXHJcbiAgICAgICAgJ2VzcmkvbGF5ZXJzL0ltYWdlcnlMYXllcicsXHJcbiAgICAgICAgJ2VzcmkvcmVzdC9xdWVyeScsXHJcbiAgICAgICAgJ2Vzcmkvd2lkZ2V0cy9IaXN0b2dyYW0nLFxyXG4gICAgICAgIFwiZXNyaS9yZXF1ZXN0XCJcclxuICAgICAgXSlcclxuICAgICAgICAudGhlbigoW1Jhc3RlckZ1bmN0aW9uLCBSYXN0ZXJTdHJldGNoUmVuZGVyZXIsIEltYWdlcnlMYXllciwgcXVlcnksIEhpc3RvZ3JhbSwgZXNyaVJlcXVlc3RdKSA9PiB7XHJcbiAgICAgICAgICBlc3JpTW9kdWxlc1JlZi5jdXJyZW50ID0geyBSYXN0ZXJGdW5jdGlvbiwgUmFzdGVyU3RyZXRjaFJlbmRlcmVyLCBJbWFnZXJ5TGF5ZXIsIHF1ZXJ5LCBIaXN0b2dyYW0sIGVzcmlSZXF1ZXN0IH07XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBFU1JJIG1vZHVsZXM6ICcsIGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHJlbW92ZUxheWVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkU2Vuc29yKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nTGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKCfDjW5kaWNlcyBlc3BlY3RyYWxlcycpO1xyXG4gICAgICBpZiAoZXhpc3RpbmdMYXllcikge1xyXG4gICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShleGlzdGluZ0xheWVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVtb3ZlTGF5ZXIoKVxyXG4gICAgaWYgKHNlbGVjdGVkU2Vuc29yKSB7XHJcbiAgICAgIGNvbnN0IHNlbnNvciA9IGF2YWlsYWJsZVNlbnNvcnMuZmluZChzID0+IHMudGl0bGUgPT09IHNlbGVjdGVkU2Vuc29yLnRpdGxlIHx8IHMudGl0bGUgPT09IFwiRGVmYXVsdFwiKTtcclxuICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdXb3JsZHZpZXcyJykge1xyXG4gICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pYCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdPV0RfRmFzYXRDX01TX3YyXzIwMjUwMzEyJykge1xyXG4gICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzBdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzBdPy52YWx1ZX0pYCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdEZWZhdWx0Jykge1xyXG4gICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0pYCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRDb2xvcihbMCwgMjU1LCAwLCAyNTVdKTtcclxuICAgIHNldElucHV0VHlwZUFyZWFNYXgoMSk7XHJcbiAgICBzZXRJbnB1dFR5cGVBcmVhTWluKC0xKTtcclxuICAgIHNldElucHV0TWluUmFuZ2UoMC4zKTtcclxuICAgIHNldElucHV0TWF4UmFuZ2UoMC43KVxyXG4gIH0sIFtzZWxlY3RlZFNlbnNvciwgZ2VvcHJvY2Vzc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEVzcmlNb2R1bGVzKClcclxuICB9LCBbamltdU1hcFZpZXddKTtcclxuXHJcbiAgLy9FamVjdXRhIGxhIGNyZWFjaW9uIGRlbCBsYXllciBkZSBsYXMgaW1hZ2VuZXMsIHkgZGV0ZWN0YSBjdWFuZG8gc2UgbW9kaWZpY2EgZWwgaW5wdXQgcmFuZ2UgcXVlIHNlIGVuY2FyZ2EgZGUgY2FsY3VsYXIgbnVldmFtZW50ZSBlbCByYW5nb1xyXG4gIC8vVGFtYmllbiBjdWFuZG8gY2FtYmlhIGVsIGFycmF5IGRlIGltYWdlbmVzIHNlbGVjY2lvbmFkYXNcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZEltYWdlcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmIChzZWxlY3RlZFNlbnNvcikge1xyXG4gICAgICAgIGNvbnN0IHNlbnNvciA9IGF2YWlsYWJsZVNlbnNvcnMuZmluZChzID0+IHMudGl0bGUgPT09IHNlbGVjdGVkU2Vuc29yLnRpdGxlIHx8IHMudGl0bGUgPT09IFwiRGVmYXVsdFwiKTtcclxuICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ1dvcmxkdmlldzInKSB7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYChCJHtzZW5zb3IuYmFuZHNbNl0/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1s0XT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbNl0/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1s0XT8udmFsdWV9KWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ09XRF9GYXNhdENfTVNfdjJfMjAyNTAzMTInKSB7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9KWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ0RlZmF1bHQnKSB7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9KWApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0Q29sb3IoWzAsIDI1NSwgMCwgMjU1XSk7XHJcbiAgICAgIHNldElucHV0VHlwZUFyZWFNYXgoMSk7XHJcbiAgICAgIHNldElucHV0VHlwZUFyZWFNaW4oLTEpO1xyXG4gICAgICBzZXRJbnB1dE1pblJhbmdlKDAuMyk7XHJcbiAgICAgIHNldElucHV0TWF4UmFuZ2UoMC43KVxyXG5cclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZEltYWdlcmllcy5sZW5ndGggPT09IDAgJiYgamltdU1hcFZpZXcpIHtcclxuICAgICAgY29uc3QgZXhpc3RpbmdMYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmZpbmRMYXllckJ5SWQoJ8ONbmRpY2VzIGVzcGVjdHJhbGVzJyk7XHJcbiAgICAgIGlmIChleGlzdGluZ0xheWVyKSB7XHJcbiAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGV4aXN0aW5nTGF5ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH0sIFtzZWxlY3RlZEltYWdlcmllcywgc2VsZWN0ZWRTZW5zb3JdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzRmlyZSkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIGluZGljZUJhaSgpXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfSwgW2lzRmlyZV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0IHdpZGdldE1hc2tcIj5cclxuICAgICAge3Byb3BzLnVzZU1hcFdpZGdldElkcyAmJiBwcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcclxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XHJcbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lTWFzayc+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoND57dChcIndpZGdldExhYmVsXCIpfTwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2VsZWN0ZWRJbWFnZXJpZXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BlY3RyYWwtaW5kZXgtZGVzY3JpcHRpb24nPlxyXG4gICAgICAgICAgICAgIDxwPnt0KFwic3BlY3RyYWxSdWxlXCIpfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9J2FjdGl2ZU1hc2syJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50U2xpY2VNYXNrLUJhc2UnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0Q2xhc3NJbmRpY2UnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZm9ybXVsYVNlbGVjdFwiPnt0KFwic2VsZWN0TmFtZVwiKX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgaWQ9XCJmb3JtdWxhU2VsZWN0XCIgb25DaGFuZ2U9e2hhbmRsZUZvcm11bGFDaGFuZ2V9IHNpemU9XCJzbVwiIGRlZmF1bHRWYWx1ZT17XCJORFZJXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5EVklcIj57dChcIm5kdmlcIil9IC0gTkRWSTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNBVklcIj57dChcInNhdmlcIil9IC0gU0FWSTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5EV0lcIj57dChcIm5kd2lcIil9IC0gTkRXSTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJBSVwiPnt0KFwiYmFpXCIpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50U2xpY2VNYXNrJz5cclxuICAgICAgICAgICAgICAgICAgICA8TXVsdGlSYW5nZVNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk11bHRpIHJhbmdlIHNsaWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZT17aW5wdXRNYXhSYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1pblZhbHVlPXtpbnB1dE1pblJhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWF4PXtpbnB1dFR5cGVBcmVhTWF4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWluPXtpbnB1dFR5cGVBcmVhTWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17KCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhtaW4sIG1heCwgYWN0aXZlVGh1bWIpID0+IGhhbmRsZVJhbmdlQ2hhbmdlKG1pbiwgbWF4KX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e2lzRmlyZSA/IDAuMDAwMDEgOiAwLjA1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTWFyY2Fkb3JlcyBkZSBsw61uZWFzIHBlcXVlw7FhcyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyLW1hcmtzJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXItbWFyayc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyLW1hcmsnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1tYXJrJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXItbWFyayc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyLW1hcmsnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudFNsaWNlTWFza1ByaSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbDFNYXNrJz57aW5wdXRUeXBlQXJlYU1pbi50b0ZpeGVkKDQpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbDFNYXNrJz57KChpbnB1dFR5cGVBcmVhTWF4IC8gMikgKyBpbnB1dFR5cGVBcmVhTWluKS50b0ZpeGVkKDQpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdjZW50ZXJNYXNrIGxhYmVsMU1hc2snPnsoKGlucHV0VHlwZUFyZWFNaW4gKyBpbnB1dFR5cGVBcmVhTWF4KSAvIDIpLnRvRml4ZWQoNCl9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsMU1hc2snPnsoaW5wdXRUeXBlQXJlYU1heCAvIDIpLnRvRml4ZWQoNCl9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3JpZ2h0TWFzayBsYWJlbDFNYXNrJz57KGlucHV0VHlwZUFyZWFNYXgpLnRvRml4ZWQoNCl9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFzay1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgdHlwZT1cIkRPTlVUXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IGNyZWFySW1hZ2VyeUxheWVyKCksIHNldElzQXBsaWVkKHRydWUpIH19IHNpemU9XCJzbVwiIHR5cGU9XCJwcmltYXJ5XCI+e3QoXCJhcHBseVwiKX08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==