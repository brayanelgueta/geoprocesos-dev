System.register(["jimu-core/react","jimu-arcgis","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useLocale */ "./your-extensions/hooks/useLocale.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translations */ "./your-extensions/widgets/mask/src/runtime/translations.ts");
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
    const selectedImageries = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedImages; });
    const selectedSensor = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedSensor; });
    const geoprocess = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.geoprocess; });
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [inputMinRange, setInputMinRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [inputMaxRange, setInputMaxRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0.5);
    const [inputTypeAreaMax, setInputTypeAreaMax] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [inputTypeAreaMin, setInputTypeAreaMin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1);
    const [selectedFormula, setSelectedFormula] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("(b4 - b1) / (b4 + b1)");
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
    const handleRangeChange = (minValue, maxValue) => {
        setInputMinRange(minValue);
        setInputMaxRange(maxValue);
        crearImageryLayer();
    };
    const handleFormulaChange = (event) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
        setIsAplied(false);
        removeLayer();
        const formula = event.target.value;
        switch (formula) {
            case "NDVI":
                setIsFire(false);
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
                setIsFire(false);
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
                setIsFire(false);
                //setIndiceType("NDWI");
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
            case "BAI":
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
    const indiceBai = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f;
        setLoading(true);
        try {
            const img1Data = selectedImageries[0].OBJECTID;
            const proceso = 5;
            const entrada = img1Data;
            var urlConsulta = `http://127.0.0.1:5000/proxy?proceso=${proceso}&Entrada=${entrada}&url=${selectedSensor.url}`;
            const response = yield fetch(urlConsulta, {
                method: "GET",
            });
            const data = yield response.json();
            const responseData = yield fetch(`http://127.0.0.1:5000${data.urlJson}`, {
                method: "GET",
            });
            const dataValidada = yield responseData.json();
            //setIndiceType("BAI");
            if (selectedSensor) {
                const sensor = sensors.find((s) => s.title === selectedSensor.title);
                if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "Worldview2") {
                    setSelectedFormula(`1 / (((0,1 - B${(_a = sensor.bands[4]) === null || _a === void 0 ? void 0 : _a.value})^2) + ((0,06 - B${(_b = sensor.bands[6]) === null || _b === void 0 ? void 0 : _b.value})^2))`);
                }
                if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "OWD_FasatC_MS_v2_20250312") {
                    setSelectedFormula(`1 / (((0,1 - B${(_c = sensor.bands[0]) === null || _c === void 0 ? void 0 : _c.value})^2) + ((0,06 - B${(_d = sensor.bands[3]) === null || _d === void 0 ? void 0 : _d.value})^2))`);
                }
                if ((sensor === null || sensor === void 0 ? void 0 : sensor.title) === "Default") {
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
            console.error("Error al enviar la solicitud:", error);
            setLoading(false);
        }
    });
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
        }
        if (selectedImageries.length === 0 && jimuMapView) {
            const existingLayer = jimuMapView.view.map.findLayerById("Índices espectrales");
            if (existingLayer) {
                jimuMapView.view.map.remove(existingLayer);
            }
        }
    }, [selectedImageries, selectedSensor]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (isFire) {
            setLoading(true);
            indiceBai().finally(() => {
                setLoading(false);
            });
        }
    }, [isFire]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "jimu-widget widgetMask" },
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: activeViewChangeHandler })),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "homeMask" },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h4", null, t("widgetLabel"))),
            selectedImageries.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "spectral-index-description" },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, t("spectralRule")))) : (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { id: "activeMask2" },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "contentSliceMask-Base" },
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "selectClassIndice" },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { htmlFor: "formulaSelect" }, t("selectName")),
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Select, { id: "formulaSelect", onChange: handleFormulaChange, size: "sm", defaultValue: "NDVI" },
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
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "contentSliceMask" },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.MultiRangeSlider, { "aria-label": "Multi range slider", maxValue: inputMaxRange, minValue: inputMinRange, max: inputTypeAreaMax, min: inputTypeAreaMin, onAcceptValue: () => { }, onChange: (min, max, activeThumb) => handleRangeChange(min, max), step: isFire ? 0.00001 : 0.05, tooltip: true }),
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-marks" },
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-mark" })),
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "contentSliceMaskPri" },
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: "label1Mask" }, inputTypeAreaMin.toFixed(4)),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: "label1Mask" }, (inputTypeAreaMax / 2 + inputTypeAreaMin).toFixed(4)),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: "centerMask label1Mask" }, ((inputTypeAreaMin + inputTypeAreaMax) / 2).toFixed(4)),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: "label1Mask" }, (inputTypeAreaMax / 2).toFixed(4)),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", { className: "rightMask label1Mask" }, inputTypeAreaMax.toFixed(4)))),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "mask-buttons" }, loading === true ? (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: "sm", type: "primary" },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Loading, { type: "DONUT", height: 20, width: 20 }))) : (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { onClick: () => {
                            crearImageryLayer(), setIsAplied(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXNrL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDakI7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyw4UUFBOFEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFV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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0Esa0RBQWtELGtDQUFrQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsWUFBWSxJQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QyxDQUNqRDs0QkFDUix1RUFBTyxTQUFTLEVBQUMsWUFBWSxJQUMxQixDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDNUI7NEJBQ1IsdUVBQU8sU0FBUyxFQUFDLHNCQUFzQixJQUNwQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQ3RCLENBQ0osQ0FDRjtvQkFFTixxRUFBSyxTQUFTLEVBQUMsY0FBYyxJQUMxQixPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNsQiw0REFBQywyQ0FBTSxJQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVM7d0JBQzlCLDREQUFDLDRDQUFPLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUksQ0FDeEMsQ0FDVixDQUFDLENBQUMsQ0FBQyxDQUNGLDREQUFDLDJDQUFNLElBQ0wsT0FBTyxFQUFFLEdBQUcsRUFBRTs0QkFDWixpQkFBaUIsRUFBRSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDekMsQ0FBQyxFQUNELElBQUksRUFBQyxJQUFJLEVBQ1QsSUFBSSxFQUFDLFNBQVMsSUFFYixDQUFDLENBQUMsT0FBTyxDQUFDLENBQ0osQ0FDVixDQUNHLENBQ0YsQ0FDRixDQUNQLENBQ0csQ0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixpRUFBZSxNQUFNLEVBQUM7QUFFZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXNrL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vZXNyaS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9tb2R1bGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vc2NyaXB0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vdXRpbHMvY3NzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy91cmwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hc2svc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzcz8yMmQ5Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy9ob29rcy91c2VMb2NhbGUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hc2svc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS93aXRoLXNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZGlzdC9yZWFjdC1yZWR1eC5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hc2svc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndpZGdldE1hc2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmludGVySG9tZSB7XG4gIGhlaWdodDogNzUlO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmNvbnRlbnRTbGljZU1hc2stQmFzZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTgwcHg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbn1cblxuLmNvbnRlbnRTbGljZU1hc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC5zbGlkZXIgaW5wdXQge1xuICAgIGNvbG9yOiAjMDA4ZWNjO1xuICB9XG59XG5cbi5jb250ZW50U2xpY2VNYXNrUHJpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGFiZWwxTWFzayB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucmFuZ2VJbnB1dE1hc2sge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAwLjVlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQwMzkyMTU2ODYpIGNhbGMoKHZhcigtLXZhbHVlKSArIDEpICogNTAlKSwgIzAwNGE5OCAwKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uY2VudGVyTWFzayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0TWFzayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvcmNlbnRhamVDbGFzc01hc2sge1xuICB3aWR0aDogODBweDtcbn1cblxuLmludGVybWVkaW9OZWdhdGl2byB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5pbnRlcm1lZGlvUG9zaXRpdm8ge1xuICB3aWR0aDogNzUlO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnNlbGVjdENsYXNzSW5kaWNlIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc2VsZWN0Q2xhc3NJbmRpY2UgbGFiZWwge1xuICB3aWR0aDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uc2VsZWN0Q2xhc3NJbmRpY2Ugc2VsZWN0IHtcbiAgd2lkdGg6IDcwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLmNvbnRlbnRCdG5Wb2x2ZXIge1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5idG5XaWRnZXRzUHJpIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCA4OSwgMTk0KTtcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDc4LCAxNTEsIDI1NSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2NvbnRlbnRJbmRpY2VzTm9tYWxlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5idG5NYXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhNjk2OTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNjb250ZW50Q29uc3VsdGFCYWkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zcGVjdHJhbC1pbmRleC1kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi5tYXNrLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMXJlbTtcbiAgd2lkdGg6IDM1JTtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDIgIWltcG9ydGFudDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgfVxuICB9XG59XG5cbi5zbGlkZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc2xpZGVyLW1hcmtzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHBhZGRpbmc6IDAgMC4zcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnNsaWRlci1tYXJrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgb3BhY2l0eTogMC43O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5zbGlkZXItbGFiZWxzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5zbGlkZXItbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm11bHRpLXJhbmdlLXNsaWRlciB7XG4gIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICMxYTUyNzY7XG4gIH1cbn1cblxuLm11bHRpLXJhbmdlLXNsaWRlci0tcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjMDA4ZWNjICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubXVsdGktcmFuZ2Utc2xpZGVyLS10cmFjayB7XG4gIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXNrL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3NcIixcIndlYnBhY2s6Ly8uLy4uLy4uLy4uL2dlb3Byb2Nlc29zJTIwZXhwcmllbmNlJTIwYnVpbGRlci9BcmNHSVNFeHBlcmllbmNlQnVpbGRlci9jbGllbnQveW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFzay9zcmMvcnVudGltZS9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQTtJQUNFLGNBQUE7RUNHRjtBQUNGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNLRjs7QURIQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrSEFBQTtFQUtBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7QUNLRjs7QURIQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ01GOztBREpBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDT0Y7O0FETEE7RUFDRSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1FGOztBRE5BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QURQQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUVBO0lBQ0UsV0FBQTtFQ1NGO0FBQ0Y7O0FEUEE7RUFDRSxlQUFBO0FDVUY7O0FEUkE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0FDV0Y7O0FEUkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1dGOztBRFJBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNXRjs7QURSQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ1dGOztBRFRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBO0lBQ0UsU0FBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBRUE7SUFDRSx5QkFBQTtJQUNBLGNBQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EseUJBQUE7SUFFQTtNQUNFLHlCQUFBO01BQ0Esb0NBQUE7TUFDQSx3Q0FBQTtJQ1dGO0VBQ0Y7QUFDRjs7QURUQTtFQUNFLFVBQUE7QUNZRjs7QURWQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUNhRjs7QURWQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNhRjs7QURWQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDYUY7O0FEVkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ2FGOztBRFhBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLG1CQUFBO0VDY0Y7QUFDRjs7QURYQTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNjRjs7QURaQTtFQUNFLHNCQUFBO0FDZUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndpZGdldE1hc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbnRlckhvbWUge1xcbiAgaGVpZ2h0OiA3NSU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLmNvbnRlbnRTbGljZU1hc2stQmFzZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxODBweDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxufVxcblxcbi5jb250ZW50U2xpY2VNYXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIC5zbGlkZXIgaW5wdXQge1xcbiAgICBjb2xvcjogIzAwOGVjYztcXG4gIH1cXG59XFxuXFxuLmNvbnRlbnRTbGljZU1hc2tQcmkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxhYmVsMU1hc2sge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5yYW5nZUlucHV0TWFzayB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDAuNWVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40MDM5MjE1Njg2KSBjYWxjKCh2YXIoLS12YWx1ZSkgKyAxKSAqIDUwJSksICMwMDRhOTggMCk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5jZW50ZXJNYXNrIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0TWFzayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wb3JjZW50YWplQ2xhc3NNYXNrIHtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4uaW50ZXJtZWRpb05lZ2F0aXZvIHtcXG4gIHdpZHRoOiA3NSU7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uaW50ZXJtZWRpb1Bvc2l0aXZvIHtcXG4gIHdpZHRoOiA3NSU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5zZWxlY3RDbGFzc0luZGljZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLnNlbGVjdENsYXNzSW5kaWNlIGxhYmVsIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGhlaWdodDogMjNweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi5zZWxlY3RDbGFzc0luZGljZSBzZWxlY3Qge1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxufVxcblxcbi5jb250ZW50QnRuVm9sdmVyIHtcXG4gIHBhZGRpbmctdG9wOiA1JTtcXG59XFxuXFxuLmJ0bldpZGdldHNQcmkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgODksIDE5NCk7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoNzgsIDE1MSwgMjU1KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2NvbnRlbnRJbmRpY2VzTm9tYWxlcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJ0bk1hc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhNjk2OTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiA2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA2cHggMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50Q29uc3VsdGFCYWkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNwZWN0cmFsLWluZGV4LWRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbn1cXG5cXG4ubWFzay1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMzUlO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zbGlkZXItbWFya3Mge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBwYWRkaW5nOiAwIDAuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5zbGlkZXItbWFyayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLnNsaWRlci1sYWJlbHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxufVxcblxcbi5zbGlkZXItbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5tdWx0aS1yYW5nZS1zbGlkZXIge1xcbiAgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWE1Mjc2O1xcbiAgfVxcbn1cXG5cXG4ubXVsdGktcmFuZ2Utc2xpZGVyLS1yYW5nZSB7XFxuICBiYWNrZ3JvdW5kOiAjMDA4ZWNjICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDRweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5tdWx0aS1yYW5nZS1zbGlkZXItLXRyYWNrIHtcXG4gIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XFxufVwiLFwiLndpZGdldE1hc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbnRlckhvbWUge1xcbiAgaGVpZ2h0OiA3NSU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLmNvbnRlbnRTbGljZU1hc2stQmFzZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxODBweDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxufVxcblxcbi5jb250ZW50U2xpY2VNYXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIC5zbGlkZXIgaW5wdXQge1xcbiAgICBjb2xvcjogIzAwOGVjYztcXG4gIH1cXG59XFxuXFxuLmNvbnRlbnRTbGljZU1hc2tQcmkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxhYmVsMU1hc2sge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5yYW5nZUlucHV0TWFzayB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDAuNWVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40MDM5MjE1Njg2KSBjYWxjKCh2YXIoLS12YWx1ZSkgKyAxKSAqIDUwJSksICMwMDRhOTggMCk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5jZW50ZXJNYXNrIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0TWFzayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wb3JjZW50YWplQ2xhc3NNYXNrIHtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4uaW50ZXJtZWRpb05lZ2F0aXZvIHtcXG4gIHdpZHRoOiA3NSU7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uaW50ZXJtZWRpb1Bvc2l0aXZvIHtcXG4gIHdpZHRoOiA3NSU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5zZWxlY3RDbGFzc0luZGljZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLnNlbGVjdENsYXNzSW5kaWNlIGxhYmVsIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGhlaWdodDogMjNweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi5zZWxlY3RDbGFzc0luZGljZSBzZWxlY3Qge1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxufVxcblxcbi5jb250ZW50QnRuVm9sdmVyIHtcXG4gIHBhZGRpbmctdG9wOiA1JTtcXG59XFxuXFxuLmJ0bldpZGdldHNQcmkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgODksIDE5NCk7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoNzgsIDE1MSwgMjU1KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2NvbnRlbnRJbmRpY2VzTm9tYWxlcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJ0bk1hc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhNjk2OTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiA2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA2cHggMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50Q29uc3VsdGFCYWkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNwZWN0cmFsLWluZGV4LWRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbn1cXG5cXG4ubWFzay1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMzUlO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zbGlkZXItbWFya3Mge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBwYWRkaW5nOiAwIDAuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5zbGlkZXItbWFyayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLnNsaWRlci1sYWJlbHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxufVxcblxcbi5zbGlkZXItbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5tdWx0aS1yYW5nZS1zbGlkZXIge1xcbiAgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWE1Mjc2O1xcbiAgfVxcbn1cXG5cXG4ubXVsdGktcmFuZ2Utc2xpZGVyLS1yYW5nZSB7XFxuICBiYWNrZ3JvdW5kOiAjMDA4ZWNjICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDRweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5tdWx0aS1yYW5nZS1zbGlkZXItLXRyYWNrIHtcXG4gIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLypcbiAgQ29weXJpZ2h0IChjKSAyMDIyIEVzcmlcbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi8vIHJlLWV4cG9ydCB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHBhcnQgb2YgdGhlIHB1YmxpYyBBUElcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzL2luZGV4JztcbmV4cG9ydCB7IGxvYWRNb2R1bGVzIH0gZnJvbSAnLi9tb2R1bGVzJztcbmV4cG9ydCB7IGdldFNjcmlwdCwgaXNMb2FkZWQsIGxvYWRTY3JpcHQsIHNldERlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9zY3JpcHQnO1xuZXhwb3J0IHsgbG9hZENzcyB9IGZyb20gJy4vdXRpbHMvY3NzJztcbmV4cG9ydCB7IHV0aWxzIH07XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgZ2V0U2NyaXB0LCBpc0xvYWRlZCwgbG9hZFNjcmlwdCB9IGZyb20gJy4vc2NyaXB0JztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzL2luZGV4Jztcbi8vIHdyYXAgRG9qbydzIHJlcXVpcmUoKSBpbiBhIHByb21pc2VcbmZ1bmN0aW9uIHJlcXVpcmVNb2R1bGVzKG1vZHVsZXMpIHtcbiAgICByZXR1cm4gbmV3IHV0aWxzLlByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBJZiBzb21ldGhpbmcgZ29lcyB3cm9uZyBsb2FkaW5nIHRoZSBlc3JpL2Rvam8gc2NyaXB0cywgcmVqZWN0IHdpdGggdGhlIGVycm9yLlxuICAgICAgICB2YXIgZXJyb3JIYW5kbGVyID0gd2luZG93WydyZXF1aXJlJ10ub24oJ2Vycm9yJywgcmVqZWN0KTtcbiAgICAgICAgd2luZG93WydyZXF1aXJlJ10obW9kdWxlcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVtb3ZlIGVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgIGVycm9ySGFuZGxlci5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIFJlc29sdmUgd2l0aCB0aGUgcGFyYW1ldGVycyBmcm9tIGRvam8gcmVxdWlyZSBhcyBhbiBhcnJheS5cbiAgICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGFuIGFycmF5IG9mIHRoZSByZXF1aXJlZCBtb2R1bGVzXG4vLyBhbHNvIHdpbGwgYXR0ZW1wdCB0byBsYXp5IGxvYWQgdGhlIEFyY0dJUyBBUEkgaWYgaXQgaGFzIG5vdCBhbHJlYWR5IGJlZW4gbG9hZGVkXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1vZHVsZXMobW9kdWxlcywgbG9hZFNjcmlwdE9wdGlvbnMpIHtcbiAgICBpZiAobG9hZFNjcmlwdE9wdGlvbnMgPT09IHZvaWQgMCkgeyBsb2FkU2NyaXB0T3B0aW9ucyA9IHt9OyB9XG4gICAgaWYgKCFpc0xvYWRlZCgpKSB7XG4gICAgICAgIC8vIHNjcmlwdCBpcyBub3QgeWV0IGxvYWRlZCwgaXMgaXQgaW4gdGhlIHByb2Nlc3Mgb2YgbG9hZGluZz9cbiAgICAgICAgdmFyIHNjcmlwdCA9IGdldFNjcmlwdCgpO1xuICAgICAgICB2YXIgc3JjID0gc2NyaXB0ICYmIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICBpZiAoIWxvYWRTY3JpcHRPcHRpb25zLnVybCAmJiBzcmMpIHtcbiAgICAgICAgICAgIC8vIHNjcmlwdCBpcyBzdGlsbCBsb2FkaW5nIGFuZCB1c2VyIGRpZCBub3Qgc3BlY2lmeSBhIFVSTFxuICAgICAgICAgICAgLy8gaW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gZGVmYXVsdCB0byB0aGUgVVJMIHRoYXQncyBiZWluZyBsb2FkZWRcbiAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgZGVmYXVsdGluZyB0byB0aGUgbGF0ZXN0IDQueCBVUkxcbiAgICAgICAgICAgIGxvYWRTY3JpcHRPcHRpb25zLnVybCA9IHNyYztcbiAgICAgICAgfVxuICAgICAgICAvLyBhdHRlbXB0IHRvIGxvYWQgdGhlIHNjcmlwdCB0aGVuIGxvYWQgdGhlIG1vZHVsZXNcbiAgICAgICAgcmV0dXJuIGxvYWRTY3JpcHQobG9hZFNjcmlwdE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVxdWlyZU1vZHVsZXMobW9kdWxlcyk7IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gc2NyaXB0IGlzIGFscmVhZHkgbG9hZGVkLCBqdXN0IGxvYWQgdGhlIG1vZHVsZXNcbiAgICAgICAgcmV0dXJuIHJlcXVpcmVNb2R1bGVzKG1vZHVsZXMpO1xuICAgIH1cbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBsb2FkQ3NzIH0gZnJvbSAnLi91dGlscy9jc3MnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgZ2V0Q2RuVXJsIH0gZnJvbSAnLi91dGlscy91cmwnO1xudmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5mdW5jdGlvbiBjcmVhdGVTY3JpcHQodXJsKSB7XG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLWVzcmktbG9hZGVyJywgJ2xvYWRpbmcnKTtcbiAgICByZXR1cm4gc2NyaXB0O1xufVxuLy8gYWRkIGEgb25lLXRpbWUgbG9hZCBoYW5kbGVyIHRvIHNjcmlwdFxuLy8gYW5kIG9wdGlvbmFsbHkgYWRkIGEgb25lIHRpbWUgZXJyb3IgaGFuZGxlciBhcyB3ZWxsXG5mdW5jdGlvbiBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgY2FsbGJhY2ssIGVycmJhY2spIHtcbiAgICB2YXIgb25TY3JpcHRFcnJvcjtcbiAgICBpZiAoZXJyYmFjaykge1xuICAgICAgICAvLyBzZXQgdXAgYW4gZXJyb3IgaGFuZGxlciBhcyB3ZWxsXG4gICAgICAgIG9uU2NyaXB0RXJyb3IgPSBoYW5kbGVTY3JpcHRFcnJvcihzY3JpcHQsIGVycmJhY2spO1xuICAgIH1cbiAgICB2YXIgb25TY3JpcHRMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBwYXNzIHRoZSBzY3JpcHQgdG8gdGhlIGNhbGxiYWNrXG4gICAgICAgIGNhbGxiYWNrKHNjcmlwdCk7XG4gICAgICAgIC8vIHJlbW92ZSB0aGlzIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25TY3JpcHRMb2FkLCBmYWxzZSk7XG4gICAgICAgIGlmIChvblNjcmlwdEVycm9yKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGVycm9yIGxpc3RlbmVyIGFzIHdlbGxcbiAgICAgICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uU2NyaXB0RXJyb3IsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvblNjcmlwdExvYWQsIGZhbHNlKTtcbn1cbi8vIGFkZCBhIG9uZS10aW1lIGVycm9yIGhhbmRsZXIgdG8gdGhlIHNjcmlwdFxuZnVuY3Rpb24gaGFuZGxlU2NyaXB0RXJyb3Ioc2NyaXB0LCBjYWxsYmFjaykge1xuICAgIHZhciBvblNjcmlwdEVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gcmVqZWN0IHRoZSBwcm9taXNlIGFuZCByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBjYWxsYmFjayhlLmVycm9yIHx8IG5ldyBFcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciBhdHRlbXB0aW5nIHRvIGxvYWQgXCIuY29uY2F0KHNjcmlwdC5zcmMpKSk7XG4gICAgICAgIC8vIHJlbW92ZSB0aGlzIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uU2NyaXB0RXJyb3IsIGZhbHNlKTtcbiAgICB9O1xuICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uU2NyaXB0RXJyb3IsIGZhbHNlKTtcbiAgICByZXR1cm4gb25TY3JpcHRFcnJvcjtcbn1cbi8vIGFsbG93IHRoZSB1c2VyIHRvIGNvbmZpZ3VyZSBkZWZhdWx0IHNjcmlwdCBvcHRpb25zIHJhdGhlciB0aGFuIHBhc3Npbmcgb3B0aW9ucyB0byBgbG9hZE1vZHVsZXNgIGVhY2ggdGltZVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIGRlZmF1bHRPcHRpb25zID0gb3B0aW9ucztcbn1cbi8vIGdldCB0aGUgc2NyaXB0IGluamVjdGVkIGJ5IHRoaXMgbGlicmFyeVxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcmlwdCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W2RhdGEtZXNyaS1sb2FkZXJdJyk7XG59XG4vLyBoYXMgQXJjR0lTIEFQSSBiZWVuIGxvYWRlZCBvbiB0aGUgcGFnZSB5ZXQ/XG5leHBvcnQgZnVuY3Rpb24gaXNMb2FkZWQoKSB7XG4gICAgdmFyIGdsb2JhbFJlcXVpcmUgPSB3aW5kb3dbJ3JlcXVpcmUnXTtcbiAgICAvLyAub24oKSBlbnN1cmVzIHRoYXQgaXQncyBEb2pvJ3MgQU1EIGxvYWRlclxuICAgIHJldHVybiBnbG9iYWxSZXF1aXJlICYmIGdsb2JhbFJlcXVpcmUub247XG59XG4vLyBsb2FkIHRoZSBBcmNHSVMgQVBJIG9uIHRoZSBwYWdlXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNjcmlwdChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAvLyB3ZSB3b3VsZCBoYXZlIGxpa2VkIHRvIHVzZSBzcHJlYWQgbGlrZSB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH1cbiAgICAvLyBidXQgVFMgd291bGQgaW5qZWN0IGEgcG9seWZpbGwgdGhhdCB3b3VsZCByZXF1aXJlIHVzZSB0byBjb25maWd1cmUgcm9sbHVwIHcgY29udGVudDogJ3dpbmRvdydcbiAgICAvLyBpZiB3ZSBoYXZlIGFub3RoZXIgb2NjYXNpb24gdG8gdXNlIHNwcmVhZCwgbGV0J3MgZG8gdGhhdCBhbmQgcmVwbGFjZSB0aGlzIGZvci4uLmluXG4gICAgdmFyIG9wdHMgPSB7fTtcbiAgICBbZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnNdLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgb3B0c1twcm9wXSA9IG9ialtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFVSTCB0byBsb2FkXG4gICAgdmFyIHZlcnNpb24gPSBvcHRzLnZlcnNpb247XG4gICAgdmFyIHVybCA9IG9wdHMudXJsIHx8IGdldENkblVybCh2ZXJzaW9uKTtcbiAgICByZXR1cm4gbmV3IHV0aWxzLlByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgc2NyaXB0ID0gZ2V0U2NyaXB0KCk7XG4gICAgICAgIGlmIChzY3JpcHQpIHtcbiAgICAgICAgICAgIC8vIHRoZSBBUEkgaXMgYWxyZWFkeSBsb2FkZWQgb3IgaW4gdGhlIHByb2Nlc3Mgb2YgbG9hZGluZy4uLlxuICAgICAgICAgICAgLy8gTk9URTogaGF2ZSB0byB0ZXN0IGFnYWluc3Qgc2NyIGF0dHJpYnV0ZSB2YWx1ZSwgbm90IHNjcmlwdC5zcmNcbiAgICAgICAgICAgIC8vIGIvYyB0aGUgbGF0dGVyIHdpbGwgcmV0dXJuIHRoZSBmdWxsIHVybCBmb3IgcmVsYXRpdmUgcGF0aHNcbiAgICAgICAgICAgIHZhciBzcmMgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgICAgIGlmIChzcmMgIT09IHVybCkge1xuICAgICAgICAgICAgICAgIC8vIHBvdGVudGlhbGx5IHRyeWluZyB0byBsb2FkIGEgZGlmZmVyZW50IHZlcnNpb24gb2YgdGhlIEFQSVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJUaGUgQXJjR0lTIEFQSSBmb3IgSmF2YVNjcmlwdCBpcyBhbHJlYWR5IGxvYWRlZCAoXCIuY29uY2F0KHNyYywgXCIpLlwiKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHNjcmlwdCBoYXMgYWxyZWFkeSBzdWNjZXNzZnVsbHkgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIHRoZSBzY3JpcHQgdG8gbG9hZCBhbmQgdGhlbiByZXNvbHZlXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVNjcmlwdExvYWQoc2NyaXB0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIEFQSSBoYXMgYmVlbiBsb2FkZWQgYnkgc29tZSBvdGhlciBtZWFuc1xuICAgICAgICAgICAgICAgIC8vIHBvdGVudGlhbGx5IHRyeWluZyB0byBsb2FkIGEgZGlmZmVyZW50IHZlcnNpb24gb2YgdGhlIEFQSVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJUaGUgQXJjR0lTIEFQSSBmb3IgSmF2YVNjcmlwdCBpcyBhbHJlYWR5IGxvYWRlZC5cIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZmlyc3QgdGltZSBhdHRlbXB0aW5nIHRvIGxvYWQgdGhlIEFQSVxuICAgICAgICAgICAgICAgIHZhciBjc3MgPSBvcHRzLmNzcztcbiAgICAgICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1c2VWZXJzaW9uID0gY3NzID09PSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBsb2FkIHRoZSBjc3MgYmVmb3JlIGxvYWRpbmcgdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBsb2FkQ3NzKHVzZVZlcnNpb24gPyB2ZXJzaW9uIDogY3NzLCBvcHRzLmluc2VydENzc0JlZm9yZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIHNjcmlwdCBvYmplY3Qgd2hvc2Ugc291cmNlIHBvaW50cyB0byB0aGUgQVBJXG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gY3JlYXRlU2NyaXB0KHVybCk7XG4gICAgICAgICAgICAgICAgLy8gX2N1cnJlbnRVcmwgPSB1cmw7XG4gICAgICAgICAgICAgICAgLy8gb25jZSB0aGUgc2NyaXB0IGlzIGxvYWRlZC4uLlxuICAgICAgICAgICAgICAgIGhhbmRsZVNjcmlwdExvYWQoc2NyaXB0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgc3RhdHVzIG9mIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1lc3JpLWxvYWRlcicsICdsb2FkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzY3JpcHQpO1xuICAgICAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgLy8gbG9hZCB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgZ2V0Q2RuQ3NzVXJsLCBwYXJzZVZlcnNpb24gfSBmcm9tICcuL3VybCc7XG5mdW5jdGlvbiBjcmVhdGVTdHlsZXNoZWV0TGluayhocmVmKSB7XG4gICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgbGluay5ocmVmID0gaHJlZjtcbiAgICByZXR1cm4gbGluaztcbn1cbmZ1bmN0aW9uIGluc2VydExpbmsobGluaywgYmVmb3JlKSB7XG4gICAgaWYgKGJlZm9yZSkge1xuICAgICAgICAvLyB0aGUgbGluayBzaG91bGQgYmUgaW5zZXJ0ZWQgYmVmb3JlIGEgc3BlY2lmaWMgbm9kZVxuICAgICAgICB2YXIgYmVmb3JlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYmVmb3JlKTtcbiAgICAgICAgYmVmb3JlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsaW5rLCBiZWZvcmVOb2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGFwcGVuZCB0aGUgbGluayB0byB0aGVuIGVuZCBvZiB0aGUgaGVhZCB0YWdcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9XG59XG4vLyBjaGVjayBpZiB0aGUgY3NzIHVybCBoYXMgYmVlbiBpbmplY3RlZCBvciBhZGRlZCBtYW51YWxseVxuZnVuY3Rpb24gZ2V0Q3NzKHVybCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGlua1tocmVmKj1cXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXVwiKSk7XG59XG5mdW5jdGlvbiBnZXRDc3NVcmwodXJsT3JWZXJzaW9uKSB7XG4gICAgcmV0dXJuICF1cmxPclZlcnNpb24gfHwgcGFyc2VWZXJzaW9uKHVybE9yVmVyc2lvbilcbiAgICAgICAgLy8gaWYgaXQncyBhIHZhbGlkIHZlcnNpb24gc3RyaW5nIHJldHVybiB0aGUgQ0ROIFVSTFxuICAgICAgICA/IGdldENkbkNzc1VybCh1cmxPclZlcnNpb24pXG4gICAgICAgIC8vIG90aGVyd2lzZSBhc3N1bWUgaXQncyBhIFVSTCBhbmQgcmV0dXJuIHRoYXRcbiAgICAgICAgOiB1cmxPclZlcnNpb247XG59XG4vLyBsYXp5IGxvYWQgdGhlIENTUyBuZWVkZWQgZm9yIHRoZSBBcmNHSVMgQVBJXG5leHBvcnQgZnVuY3Rpb24gbG9hZENzcyh1cmxPclZlcnNpb24sIGJlZm9yZSkge1xuICAgIHZhciB1cmwgPSBnZXRDc3NVcmwodXJsT3JWZXJzaW9uKTtcbiAgICB2YXIgbGluayA9IGdldENzcyh1cmwpO1xuICAgIGlmICghbGluaykge1xuICAgICAgICAvLyBjcmVhdGUgJiBsb2FkIHRoZSBjc3MgbGlua1xuICAgICAgICBsaW5rID0gY3JlYXRlU3R5bGVzaGVldExpbmsodXJsKTtcbiAgICAgICAgaW5zZXJ0TGluayhsaW5rLCBiZWZvcmUpO1xuICAgIH1cbiAgICByZXR1cm4gbGluaztcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4vLyBhbGxvdyBjb25zdW1pbmcgbGlicmFyaWVzIHRvIHByb3ZpZGUgdGhlaXIgb3duIFByb21pc2UgaW1wbGVtZW50YXRpb25zXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgUHJvbWlzZTogaXNCcm93c2VyID8gd2luZG93WydQcm9taXNlJ10gOiB1bmRlZmluZWRcbn07XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xudmFyIERFRkFVTFRfVkVSU0lPTiA9ICc0LjI1JztcbnZhciBORVhUID0gJ25leHQnO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVmVyc2lvbih2ZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24udG9Mb3dlckNhc2UoKSA9PT0gTkVYVCkge1xuICAgICAgICByZXR1cm4gTkVYVDtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0gdmVyc2lvbiAmJiB2ZXJzaW9uLm1hdGNoKC9eKFxcZClcXC4oXFxkKykvKTtcbiAgICByZXR1cm4gbWF0Y2ggJiYge1xuICAgICAgICBtYWpvcjogcGFyc2VJbnQobWF0Y2hbMV0sIDEwKSxcbiAgICAgICAgbWlub3I6IHBhcnNlSW50KG1hdGNoWzJdLCAxMClcbiAgICB9O1xufVxuLyoqXG4gKiBHZXQgdGhlIENETiB1cmwgZm9yIGEgZ2l2ZW4gdmVyc2lvblxuICpcbiAqIEBwYXJhbSB2ZXJzaW9uIEV4OiAnNC4yNScgb3IgJzMuNDInLiBEZWZhdWx0cyB0byB0aGUgbGF0ZXN0IDQueCB2ZXJzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2RuVXJsKHZlcnNpb24pIHtcbiAgICBpZiAodmVyc2lvbiA9PT0gdm9pZCAwKSB7IHZlcnNpb24gPSBERUZBVUxUX1ZFUlNJT047IH1cbiAgICByZXR1cm4gXCJodHRwczovL2pzLmFyY2dpcy5jb20vXCIuY29uY2F0KHZlcnNpb24sIFwiL1wiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBDRE4gdXJsIGZvciBhIHRoZSBDU1MgZm9yIGEgZ2l2ZW4gdmVyc2lvbiBhbmQvb3IgdGhlbWVcbiAqXG4gKiBAcGFyYW0gdmVyc2lvbiBFeDogJzQuMjUnLCAnMy40MicsIG9yICduZXh0Jy4gRGVmYXVsdHMgdG8gdGhlIGxhdGVzdCA0LnggdmVyc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENkbkNzc1VybCh2ZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24gPT09IHZvaWQgMCkgeyB2ZXJzaW9uID0gREVGQVVMVF9WRVJTSU9OOyB9XG4gICAgdmFyIGJhc2VVcmwgPSBnZXRDZG5VcmwodmVyc2lvbik7XG4gICAgdmFyIHBhcnNlZFZlcnNpb24gPSBwYXJzZVZlcnNpb24odmVyc2lvbik7XG4gICAgaWYgKHBhcnNlZFZlcnNpb24gIT09IE5FWFQgJiYgcGFyc2VkVmVyc2lvbi5tYWpvciA9PT0gMykge1xuICAgICAgICAvLyBOT1RFOiBhdCAzLjExIHRoZSBDU1MgbW92ZWQgZnJvbSB0aGUgL2pzIGZvbGRlciB0byB0aGUgcm9vdFxuICAgICAgICB2YXIgcGF0aCA9IHBhcnNlZFZlcnNpb24ubWlub3IgPD0gMTAgPyAnanMvJyA6ICcnO1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoYmFzZVVybCkuY29uY2F0KHBhdGgsIFwiZXNyaS9jc3MvZXNyaS5jc3NcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBhc3N1bWUgNC54XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChiYXNlVXJsLCBcImVzcmkvdGhlbWVzL2xpZ2h0L21haW4uY3NzXCIpO1xuICAgIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2NhbGUodHJhbnNsYXRpb25zKSB7XHJcbiAgLy8gRGV0ZWN0YSBsb2NhbGUgZGVzZGUgbGEgVVJMICg/bG9jYWxlPWVuKSBvIGZhbGxiYWNrIGEgXCJlc1wiXHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICBjb25zdCBsb2NhbGUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibG9jYWxlXCIpIHx8IFwiZXNcIjtcclxuXHJcbiAgY29uc3QgdCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIChrZXk6IGtleW9mIHR5cGVvZiB0cmFuc2xhdGlvbnNbXCJlc1wiXSkgPT5cclxuICAgICAgdHJhbnNsYXRpb25zW2xvY2FsZSBhcyBcImVzXCIgfCBcImVuXCJdW2tleV0gPz8ga2V5O1xyXG4gIH0sIFtsb2NhbGVdKTtcclxuXHJcbiAgcmV0dXJuIHsgdCwgbG9jYWxlIH07XHJcbn0iLCJleHBvcnQgY29uc3QgdHJhbnNsYXRpb25zID0ge1xyXG4gIGVzOiB7XHJcbiAgICB3aWRnZXRMYWJlbDogXCLDjW5kaWNlcyBlc3BlY3RyYWxlc1wiLFxyXG4gICAgc3BlY3RyYWxSdWxlOiBcIkRlYmVzIHNlbGVjY2lvbmFyIHVuYSBpbWFnZW4gcGFyYSB1dGlsaXphciBsb3MgaW5kaWNlcyBlc3BlY3RyYWxlc1wiLFxyXG4gICAgc2VsZWN0TmFtZTogXCJTZWxlY2Npb25hIGbDs3JtdWxhOlwiLFxyXG4gICAgbmR2aTogXCLDjW5kaWNlIG5vcm1hbGl6YWRvIGRlIHZlZ2V0YWNpw7NuXCIsXHJcbiAgICBzYXZpOiBcIsONbmRpY2UgZGUgdmVnZXRhY2nDs24gYWp1c3RhZG8gYWwgc3VlbG9cIixcclxuICAgIG5kd2k6IFwiw41uZGljZSBkZSBhZ3VhIGRlIGRpZmVyZW5jaWEgbm9ybWFsaXphZGFcIixcclxuICAgIGJhaTogXCLDjW5kaWNlIGRlIMOhcmVhcyBxdWVtYWRhc1wiLFxyXG4gICAgYXBwbHk6IFwiQXBsaWNhclwiXHJcbiAgfSxcclxuICBlbjoge1xyXG4gICAgd2lkZ2V0TGFiZWw6IFwiU3BlY3RyYWwgaW5kaWNlc1wiLFxyXG4gICAgc3BlY3RyYWxSdWxlOiBcIllvdSBtdXN0IHNlbGVjdCBhbiBpbWFnZSB0byB1c2UgdGhlIHNwZWN0cmFsIGluZGljZXNcIixcclxuICAgIHNlbGVjdE5hbWU6IFwiU2VsZWN0IGZvcm11bGE6XCIsXHJcbiAgICBuZHZpOiBcIk5vcm1hbGl6ZWQgdmVnZXRhdGlvbiBpbmRleFwiLFxyXG4gICAgc2F2aTogXCJTb2lsLWFkanVzdGVkIHZlZ2V0YXRpb24gaW5kZXhcIixcclxuICAgIG5kd2k6IFwiTm9ybWFsaXplZCBkaWZmZXJlbmNlIHdhdGVyIGluZGV4XCIsXHJcbiAgICBiYWk6IFwiQnVybmVkIEFyZWEgSW5kZXhcIixcclxuICAgIGFwcGx5OiBcIkFwcGx5XCJcclxuICB9LFxyXG59O1xyXG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiB1c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICd1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgICAgdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuICA7XG59XG5cbnZhciBvYmplY3RJcyA9IHR5cGVvZiBPYmplY3QuaXMgPT09ICdmdW5jdGlvbicgPyBPYmplY3QuaXMgOiBpcztcblxudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gUmVhY3QudXNlU3luY0V4dGVybmFsU3RvcmU7XG5cbi8vIGZvciBDb21tb25KUyBpbnRlcm9wLlxuXG52YXIgdXNlUmVmID0gUmVhY3QudXNlUmVmLFxuICAgIHVzZUVmZmVjdCA9IFJlYWN0LnVzZUVmZmVjdCxcbiAgICB1c2VNZW1vID0gUmVhY3QudXNlTWVtbyxcbiAgICB1c2VEZWJ1Z1ZhbHVlID0gUmVhY3QudXNlRGVidWdWYWx1ZTsgLy8gU2FtZSBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSwgYnV0IHN1cHBvcnRzIHNlbGVjdG9yIGFuZCBpc0VxdWFsIGFyZ3VtZW50cy5cblxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3Ioc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QsIHNlbGVjdG9yLCBpc0VxdWFsKSB7XG4gIC8vIFVzZSB0aGlzIHRvIHRyYWNrIHRoZSByZW5kZXJlZCBzbmFwc2hvdC5cbiAgdmFyIGluc3RSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBpbnN0O1xuXG4gIGlmIChpbnN0UmVmLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICBpbnN0ID0ge1xuICAgICAgaGFzVmFsdWU6IGZhbHNlLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9O1xuICAgIGluc3RSZWYuY3VycmVudCA9IGluc3Q7XG4gIH0gZWxzZSB7XG4gICAgaW5zdCA9IGluc3RSZWYuY3VycmVudDtcbiAgfVxuXG4gIHZhciBfdXNlTWVtbyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIC8vIFRyYWNrIHRoZSBtZW1vaXplZCBzdGF0ZSB1c2luZyBjbG9zdXJlIHZhcmlhYmxlcyB0aGF0IGFyZSBsb2NhbCB0byB0aGlzXG4gICAgLy8gbWVtb2l6ZWQgaW5zdGFuY2Ugb2YgYSBnZXRTbmFwc2hvdCBmdW5jdGlvbi4gSW50ZW50aW9uYWxseSBub3QgdXNpbmcgYVxuICAgIC8vIHVzZVJlZiBob29rLCBiZWNhdXNlIHRoYXQgc3RhdGUgd291bGQgYmUgc2hhcmVkIGFjcm9zcyBhbGwgY29uY3VycmVudFxuICAgIC8vIGNvcGllcyBvZiB0aGUgaG9vay9jb21wb25lbnQuXG4gICAgdmFyIGhhc01lbW8gPSBmYWxzZTtcbiAgICB2YXIgbWVtb2l6ZWRTbmFwc2hvdDtcbiAgICB2YXIgbWVtb2l6ZWRTZWxlY3Rpb247XG5cbiAgICB2YXIgbWVtb2l6ZWRTZWxlY3RvciA9IGZ1bmN0aW9uIChuZXh0U25hcHNob3QpIHtcbiAgICAgIGlmICghaGFzTWVtbykge1xuICAgICAgICAvLyBUaGUgZmlyc3QgdGltZSB0aGUgaG9vayBpcyBjYWxsZWQsIHRoZXJlIGlzIG5vIG1lbW9pemVkIHJlc3VsdC5cbiAgICAgICAgaGFzTWVtbyA9IHRydWU7XG4gICAgICAgIG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG5cbiAgICAgICAgdmFyIF9uZXh0U2VsZWN0aW9uID0gc2VsZWN0b3IobmV4dFNuYXBzaG90KTtcblxuICAgICAgICBpZiAoaXNFcXVhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gRXZlbiBpZiB0aGUgc2VsZWN0b3IgaGFzIGNoYW5nZWQsIHRoZSBjdXJyZW50bHkgcmVuZGVyZWQgc2VsZWN0aW9uXG4gICAgICAgICAgLy8gbWF5IGJlIGVxdWFsIHRvIHRoZSBuZXcgc2VsZWN0aW9uLiBXZSBzaG91bGQgYXR0ZW1wdCB0byByZXVzZSB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IHZhbHVlIGlmIHBvc3NpYmxlLCB0byBwcmVzZXJ2ZSBkb3duc3RyZWFtIG1lbW9pemF0aW9ucy5cbiAgICAgICAgICBpZiAoaW5zdC5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3Rpb24gPSBpbnN0LnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoaXNFcXVhbChjdXJyZW50U2VsZWN0aW9uLCBfbmV4dFNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFNlbGVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IF9uZXh0U2VsZWN0aW9uO1xuICAgICAgICByZXR1cm4gX25leHRTZWxlY3Rpb247XG4gICAgICB9IC8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuXG5cbiAgICAgIC8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuICAgICAgdmFyIHByZXZTbmFwc2hvdCA9IG1lbW9pemVkU25hcHNob3Q7XG4gICAgICB2YXIgcHJldlNlbGVjdGlvbiA9IG1lbW9pemVkU2VsZWN0aW9uO1xuXG4gICAgICBpZiAob2JqZWN0SXMocHJldlNuYXBzaG90LCBuZXh0U25hcHNob3QpKSB7XG4gICAgICAgIC8vIFRoZSBzbmFwc2hvdCBpcyB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuIFJldXNlIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uXG4gICAgICAgIHJldHVybiBwcmV2U2VsZWN0aW9uO1xuICAgICAgfSAvLyBUaGUgc25hcHNob3QgaGFzIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBzZWxlY3Rpb24uXG5cblxuICAgICAgLy8gVGhlIHNuYXBzaG90IGhhcyBjaGFuZ2VkLCBzbyB3ZSBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgc2VsZWN0aW9uLlxuICAgICAgdmFyIG5leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpOyAvLyBJZiBhIGN1c3RvbSBpc0VxdWFsIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB1c2UgdGhhdCB0byBjaGVjayBpZiB0aGUgZGF0YVxuICAgICAgLy8gaGFzIGNoYW5nZWQuIElmIGl0IGhhc24ndCwgcmV0dXJuIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uIFRoYXQgc2lnbmFsc1xuICAgICAgLy8gdG8gUmVhY3QgdGhhdCB0aGUgc2VsZWN0aW9ucyBhcmUgY29uY2VwdHVhbGx5IGVxdWFsLCBhbmQgd2UgY2FuIGJhaWxcbiAgICAgIC8vIG91dCBvZiByZW5kZXJpbmcuXG5cbiAgICAgIC8vIElmIGEgY3VzdG9tIGlzRXF1YWwgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHVzZSB0aGF0IHRvIGNoZWNrIGlmIHRoZSBkYXRhXG4gICAgICAvLyBoYXMgY2hhbmdlZC4gSWYgaXQgaGFzbid0LCByZXR1cm4gdGhlIHByZXZpb3VzIHNlbGVjdGlvbi4gVGhhdCBzaWduYWxzXG4gICAgICAvLyB0byBSZWFjdCB0aGF0IHRoZSBzZWxlY3Rpb25zIGFyZSBjb25jZXB0dWFsbHkgZXF1YWwsIGFuZCB3ZSBjYW4gYmFpbFxuICAgICAgLy8gb3V0IG9mIHJlbmRlcmluZy5cbiAgICAgIGlmIChpc0VxdWFsICE9PSB1bmRlZmluZWQgJiYgaXNFcXVhbChwcmV2U2VsZWN0aW9uLCBuZXh0U2VsZWN0aW9uKSkge1xuICAgICAgICByZXR1cm4gcHJldlNlbGVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcbiAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gbmV4dFNlbGVjdGlvbjtcbiAgICAgIHJldHVybiBuZXh0U2VsZWN0aW9uO1xuICAgIH07IC8vIEFzc2lnbmluZyB0aGlzIHRvIGEgY29uc3RhbnQgc28gdGhhdCBGbG93IGtub3dzIGl0IGNhbid0IGNoYW5nZS5cblxuXG4gICAgLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuICAgIHZhciBtYXliZUdldFNlcnZlclNuYXBzaG90ID0gZ2V0U2VydmVyU25hcHNob3QgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBnZXRTZXJ2ZXJTbmFwc2hvdDtcblxuICAgIHZhciBnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZW1vaXplZFNlbGVjdG9yKGdldFNuYXBzaG90KCkpO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3IgPSBtYXliZUdldFNlcnZlclNuYXBzaG90ID09PSBudWxsID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IobWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCgpKTtcbiAgICB9O1xuICAgIHJldHVybiBbZ2V0U25hcHNob3RXaXRoU2VsZWN0b3IsIGdldFNlcnZlclNuYXBzaG90V2l0aFNlbGVjdG9yXTtcbiAgfSwgW2dldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWxdKSxcbiAgICAgIGdldFNlbGVjdGlvbiA9IF91c2VNZW1vWzBdLFxuICAgICAgZ2V0U2VydmVyU2VsZWN0aW9uID0gX3VzZU1lbW9bMV07XG5cbiAgdmFyIHZhbHVlID0gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTZWxlY3Rpb24sIGdldFNlcnZlclNlbGVjdGlvbik7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaW5zdC5oYXNWYWx1ZSA9IHRydWU7XG4gICAgaW5zdC52YWx1ZSA9IHZhbHVlO1xuICB9LCBbdmFsdWVdKTtcbiAgdXNlRGVidWdWYWx1ZSh2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIHNyYy9pbmRleC50c1xuaW1wb3J0ICogYXMgUmVhY3QyIGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgYXMgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IyIH0gZnJvbSBcInVzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3dpdGgtc2VsZWN0b3IuanNcIjtcblxuLy8gc3JjL3V0aWxzL3JlYWN0LnRzXG5pbXBvcnQgKiBhcyBSZWFjdE9yaWdpbmFsIGZyb20gXCJyZWFjdFwiO1xudmFyIFJlYWN0ID0gKFxuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgLy8gQHRzLWlnbm9yZVxuICBcImRlZmF1bHRcIiBpbiBSZWFjdE9yaWdpbmFsID8gUmVhY3RPcmlnaW5hbFtcImRlZmF1bHRcIl0gOiBSZWFjdE9yaWdpbmFsXG4pO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Db250ZXh0LnRzXG52YXIgQ29udGV4dEtleSA9IFN5bWJvbC5mb3IoYHJlYWN0LXJlZHV4LWNvbnRleHRgKTtcbnZhciBnVCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IChcbiAgLyogZmFsbCBiYWNrIHRvIGEgcGVyLW1vZHVsZSBzY29wZSAocHJlLTguMSBiZWhhdmlvdXIpIGlmIGBnbG9iYWxUaGlzYCBpcyBub3QgYXZhaWxhYmxlICovXG4gIHt9XG4pO1xuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgaWYgKCFSZWFjdC5jcmVhdGVDb250ZXh0KVxuICAgIHJldHVybiB7fTtcbiAgY29uc3QgY29udGV4dE1hcCA9IGdUW0NvbnRleHRLZXldID8/IChnVFtDb250ZXh0S2V5XSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuICBsZXQgcmVhbENvbnRleHQgPSBjb250ZXh0TWFwLmdldChSZWFjdC5jcmVhdGVDb250ZXh0KTtcbiAgaWYgKCFyZWFsQ29udGV4dCkge1xuICAgIHJlYWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChcbiAgICAgIG51bGxcbiAgICApO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIHJlYWxDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJSZWFjdFJlZHV4XCI7XG4gICAgfVxuICAgIGNvbnRleHRNYXAuc2V0KFJlYWN0LmNyZWF0ZUNvbnRleHQsIHJlYWxDb250ZXh0KTtcbiAgfVxuICByZXR1cm4gcmVhbENvbnRleHQ7XG59XG52YXIgUmVhY3RSZWR1eENvbnRleHQgPSAvKiBAX19QVVJFX18gKi8gZ2V0Q29udGV4dCgpO1xuXG4vLyBzcmMvdXRpbHMvdXNlU3luY0V4dGVybmFsU3RvcmUudHNcbnZhciBub3RJbml0aWFsaXplZCA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKFwidVNFUyBub3QgaW5pdGlhbGl6ZWQhXCIpO1xufTtcblxuLy8gc3JjL2hvb2tzL3VzZVJlZHV4Q29udGV4dC50c1xuZnVuY3Rpb24gY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZVJlZHV4Q29udGV4dDIoKSB7XG4gICAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlQ29udGV4dChjb250ZXh0KTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFjb250ZXh0VmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJjb3VsZCBub3QgZmluZCByZWFjdC1yZWR1eCBjb250ZXh0IHZhbHVlOyBwbGVhc2UgZW5zdXJlIHRoZSBjb21wb25lbnQgaXMgd3JhcHBlZCBpbiBhIDxQcm92aWRlcj5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbiAgfTtcbn1cbnZhciB1c2VSZWR1eENvbnRleHQgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlUmVkdXhDb250ZXh0SG9vaygpO1xuXG4vLyBzcmMvaG9va3MvdXNlU2VsZWN0b3IudHNcbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IG5vdEluaXRpYWxpemVkO1xudmFyIGluaXRpYWxpemVVc2VTZWxlY3RvciA9IChmbikgPT4ge1xuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IGZuO1xufTtcbnZhciByZWZFcXVhbGl0eSA9IChhLCBiKSA9PiBhID09PSBiO1xuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICBjb25zdCB1c2VSZWR1eENvbnRleHQyID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VSZWR1eENvbnRleHQgOiBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQpO1xuICBjb25zdCB1c2VTZWxlY3RvcjIgPSAoc2VsZWN0b3IsIGVxdWFsaXR5Rm5Pck9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHsgZXF1YWxpdHlGbiA9IHJlZkVxdWFsaXR5LCBkZXZNb2RlQ2hlY2tzID0ge30gfSA9IHR5cGVvZiBlcXVhbGl0eUZuT3JPcHRpb25zID09PSBcImZ1bmN0aW9uXCIgPyB7IGVxdWFsaXR5Rm46IGVxdWFsaXR5Rm5Pck9wdGlvbnMgfSA6IGVxdWFsaXR5Rm5Pck9wdGlvbnM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvcmApO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgZXF1YWxpdHlGbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIGFuIGVxdWFsaXR5IGZ1bmN0aW9uIHRvIHVzZVNlbGVjdG9yYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGdldFNlcnZlclN0YXRlLFxuICAgICAgc3RhYmlsaXR5Q2hlY2ssXG4gICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2tcbiAgICB9ID0gdXNlUmVkdXhDb250ZXh0MigpO1xuICAgIGNvbnN0IGZpcnN0UnVuID0gUmVhY3QudXNlUmVmKHRydWUpO1xuICAgIGNvbnN0IHdyYXBwZWRTZWxlY3RvciA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICAge1xuICAgICAgICBbc2VsZWN0b3IubmFtZV0oc3RhdGUpIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdG9yKHN0YXRlKTtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVjazogZmluYWxJZGVudGl0eUZ1bmN0aW9uQ2hlY2ssXG4gICAgICAgICAgICAgIHN0YWJpbGl0eUNoZWNrOiBmaW5hbFN0YWJpbGl0eUNoZWNrXG4gICAgICAgICAgICB9ID0ge1xuICAgICAgICAgICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgICAgICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrLFxuICAgICAgICAgICAgICAuLi5kZXZNb2RlQ2hlY2tzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGZpbmFsU3RhYmlsaXR5Q2hlY2sgPT09IFwiYWx3YXlzXCIgfHwgZmluYWxTdGFiaWxpdHlDaGVjayA9PT0gXCJvbmNlXCIgJiYgZmlyc3RSdW4uY3VycmVudCkge1xuICAgICAgICAgICAgICBjb25zdCB0b0NvbXBhcmUgPSBzZWxlY3RvcihzdGF0ZSk7XG4gICAgICAgICAgICAgIGlmICghZXF1YWxpdHlGbihzZWxlY3RlZCwgdG9Db21wYXJlKSkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFjayA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgKHsgc3RhY2sgfSA9IGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICBcIlNlbGVjdG9yIFwiICsgKHNlbGVjdG9yLm5hbWUgfHwgXCJ1bmtub3duXCIpICsgXCIgcmV0dXJuZWQgYSBkaWZmZXJlbnQgcmVzdWx0IHdoZW4gY2FsbGVkIHdpdGggdGhlIHNhbWUgcGFyYW1ldGVycy4gVGhpcyBjYW4gbGVhZCB0byB1bm5lY2Vzc2FyeSByZXJlbmRlcnMuXFxuU2VsZWN0b3JzIHRoYXQgcmV0dXJuIGEgbmV3IHJlZmVyZW5jZSAoc3VjaCBhcyBhbiBvYmplY3Qgb3IgYW4gYXJyYXkpIHNob3VsZCBiZSBtZW1vaXplZDogaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdXNhZ2UvZGVyaXZpbmctZGF0YS1zZWxlY3RvcnMjb3B0aW1pemluZy1zZWxlY3RvcnMtd2l0aC1tZW1vaXphdGlvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkMjogdG9Db21wYXJlLFxuICAgICAgICAgICAgICAgICAgICBzdGFja1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayA9PT0gXCJhbHdheXNcIiB8fCBmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayA9PT0gXCJvbmNlXCIgJiYgZmlyc3RSdW4uY3VycmVudCkge1xuICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAoeyBzdGFjayB9ID0gZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgIFwiU2VsZWN0b3IgXCIgKyAoc2VsZWN0b3IubmFtZSB8fCBcInVua25vd25cIikgKyBcIiByZXR1cm5lZCB0aGUgcm9vdCBzdGF0ZSB3aGVuIGNhbGxlZC4gVGhpcyBjYW4gbGVhZCB0byB1bm5lY2Vzc2FyeSByZXJlbmRlcnMuXFxuU2VsZWN0b3JzIHRoYXQgcmV0dXJuIHRoZSBlbnRpcmUgc3RhdGUgYXJlIGFsbW9zdCBjZXJ0YWlubHkgYSBtaXN0YWtlLCBhcyB0aGV5IHdpbGwgY2F1c2UgYSByZXJlbmRlciB3aGVuZXZlciAqYW55dGhpbmcqIGluIHN0YXRlIGNoYW5nZXMuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YWNrIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlyc3RSdW4uY3VycmVudClcbiAgICAgICAgICAgICAgZmlyc3RSdW4uY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1bc2VsZWN0b3IubmFtZV0sXG4gICAgICBbc2VsZWN0b3IsIHN0YWJpbGl0eUNoZWNrLCBkZXZNb2RlQ2hlY2tzLnN0YWJpbGl0eUNoZWNrXVxuICAgICk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTdGF0ZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yKFxuICAgICAgc3Vic2NyaXB0aW9uLmFkZE5lc3RlZFN1YixcbiAgICAgIHN0b3JlLmdldFN0YXRlLFxuICAgICAgZ2V0U2VydmVyU3RhdGUgfHwgc3RvcmUuZ2V0U3RhdGUsXG4gICAgICB3cmFwcGVkU2VsZWN0b3IsXG4gICAgICBlcXVhbGl0eUZuXG4gICAgKTtcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHNlbGVjdGVkU3RhdGUpO1xuICAgIHJldHVybiBzZWxlY3RlZFN0YXRlO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZVNlbGVjdG9yMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlU2VsZWN0b3IyXG4gIH0pO1xuICByZXR1cm4gdXNlU2VsZWN0b3IyO1xufVxudmFyIHVzZVNlbGVjdG9yID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVNlbGVjdG9ySG9vaygpO1xuXG4vLyBzcmMvdXRpbHMvcmVhY3QtaXMudHNcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTtcbnZhciBSRUFDVF9TRVJWRVJfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnNlcnZlcl9jb250ZXh0XCIpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5vZmZzY3JlZW5cIik7XG52YXIgUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jbGllbnQucmVmZXJlbmNlXCIpO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSBcIm9iamVjdFwiICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIGNvbnN0ICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBvYmplY3QudHlwZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgY29uc3QgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9TRVJWRVJfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6IHtcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdm9pZCAwO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cblxuLy8gc3JjL3V0aWxzL3dhcm5pbmcudHNcbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgdHJ5IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxufVxuXG4vLyBzcmMvY29ubmVjdC92ZXJpZnlTdWJzZWxlY3RvcnMudHNcbmZ1bmN0aW9uIHZlcmlmeShzZWxlY3RvciwgbWV0aG9kTmFtZSkge1xuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHZhbHVlIGZvciAke21ldGhvZE5hbWV9IGluIGNvbm5lY3QuYCk7XG4gIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gXCJtYXBTdGF0ZVRvUHJvcHNcIiB8fCBtZXRob2ROYW1lID09PSBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2VsZWN0b3IsIFwiZGVwZW5kc09uT3duUHJvcHNcIikpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgIGBUaGUgc2VsZWN0b3IgZm9yICR7bWV0aG9kTmFtZX0gb2YgY29ubmVjdCBkaWQgbm90IHNwZWNpZnkgYSB2YWx1ZSBmb3IgZGVwZW5kc09uT3duUHJvcHMuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcykge1xuICB2ZXJpZnkobWFwU3RhdGVUb1Byb3BzLCBcIm1hcFN0YXRlVG9Qcm9wc1wiKTtcbiAgdmVyaWZ5KG1hcERpc3BhdGNoVG9Qcm9wcywgXCJtYXBEaXNwYXRjaFRvUHJvcHNcIik7XG4gIHZlcmlmeShtZXJnZVByb3BzLCBcIm1lcmdlUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L3NlbGVjdG9yRmFjdG9yeS50c1xuZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCB7XG4gIGFyZVN0YXRlc0VxdWFsLFxuICBhcmVPd25Qcm9wc0VxdWFsLFxuICBhcmVTdGF0ZVByb3BzRXF1YWxcbn0pIHtcbiAgbGV0IGhhc1J1bkF0TGVhc3RPbmNlID0gZmFsc2U7XG4gIGxldCBzdGF0ZTtcbiAgbGV0IG93blByb3BzO1xuICBsZXQgc3RhdGVQcm9wcztcbiAgbGV0IGRpc3BhdGNoUHJvcHM7XG4gIGxldCBtZXJnZWRQcm9wcztcbiAgZnVuY3Rpb24gaGFuZGxlRmlyc3RDYWxsKGZpcnN0U3RhdGUsIGZpcnN0T3duUHJvcHMpIHtcbiAgICBzdGF0ZSA9IGZpcnN0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBmaXJzdE93blByb3BzO1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICBoYXNSdW5BdExlYXN0T25jZSA9IHRydWU7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKSB7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHMoKSB7XG4gICAgaWYgKG1hcFN0YXRlVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1N0YXRlKCkge1xuICAgIGNvbnN0IG5leHRTdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgY29uc3Qgc3RhdGVQcm9wc0NoYW5nZWQgPSAhYXJlU3RhdGVQcm9wc0VxdWFsKG5leHRTdGF0ZVByb3BzLCBzdGF0ZVByb3BzKTtcbiAgICBzdGF0ZVByb3BzID0gbmV4dFN0YXRlUHJvcHM7XG4gICAgaWYgKHN0YXRlUHJvcHNDaGFuZ2VkKVxuICAgICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgY29uc3QgcHJvcHNDaGFuZ2VkID0gIWFyZU93blByb3BzRXF1YWwobmV4dE93blByb3BzLCBvd25Qcm9wcyk7XG4gICAgY29uc3Qgc3RhdGVDaGFuZ2VkID0gIWFyZVN0YXRlc0VxdWFsKFxuICAgICAgbmV4dFN0YXRlLFxuICAgICAgc3RhdGUsXG4gICAgICBuZXh0T3duUHJvcHMsXG4gICAgICBvd25Qcm9wc1xuICAgICk7XG4gICAgc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBuZXh0T3duUHJvcHM7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCAmJiBzdGF0ZUNoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpO1xuICAgIGlmIChwcm9wc0NoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3UHJvcHMoKTtcbiAgICBpZiAoc3RhdGVDaGFuZ2VkKVxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1N0YXRlKCk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgcmV0dXJuIGhhc1J1bkF0TGVhc3RPbmNlID8gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA6IGhhbmRsZUZpcnN0Q2FsbChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcyk7XG4gIH07XG59XG5mdW5jdGlvbiBmaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KGRpc3BhdGNoLCB7XG4gIGluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gIGluaXRNZXJnZVByb3BzLFxuICAuLi5vcHRpb25zXG59KSB7XG4gIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IGluaXRNYXBTdGF0ZVRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgY29uc3QgbWVyZ2VQcm9wcyA9IGluaXRNZXJnZVByb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwgb3B0aW9ucyk7XG59XG5cbi8vIHNyYy91dGlscy9iaW5kQWN0aW9uQ3JlYXRvcnMudHNcbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgY29uc3QgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xuICAgIGNvbnN0IGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSAoLi4uYXJncykgPT4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvciguLi5hcmdzKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG4vLyBzcmMvdXRpbHMvaXNQbGFpbk9iamVjdC50c1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgfHwgb2JqID09PSBudWxsKVxuICAgIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgaWYgKHByb3RvID09PSBudWxsKVxuICAgIHJldHVybiB0cnVlO1xuICBsZXQgYmFzZVByb3RvID0gcHJvdG87XG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKSAhPT0gbnVsbCkge1xuICAgIGJhc2VQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pO1xuICB9XG4gIHJldHVybiBwcm90byA9PT0gYmFzZVByb3RvO1xufVxuXG4vLyBzcmMvdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QudHNcbmZ1bmN0aW9uIHZlcmlmeVBsYWluT2JqZWN0KHZhbHVlLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybmluZyhcbiAgICAgIGAke21ldGhvZE5hbWV9KCkgaW4gJHtkaXNwbGF5TmFtZX0gbXVzdCByZXR1cm4gYSBwbGFpbiBvYmplY3QuIEluc3RlYWQgcmVjZWl2ZWQgJHt2YWx1ZX0uYFxuICAgICk7XG4gIH1cbn1cblxuLy8gc3JjL2Nvbm5lY3Qvd3JhcE1hcFRvUHJvcHMudHNcbmZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZ2V0Q29uc3RhbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRDb25zdGFudFNlbGVjdG9yKGRpc3BhdGNoKSB7XG4gICAgY29uc3QgY29uc3RhbnQgPSBnZXRDb25zdGFudChkaXNwYXRjaCk7XG4gICAgZnVuY3Rpb24gY29uc3RhbnRTZWxlY3RvcigpIHtcbiAgICAgIHJldHVybiBjb25zdGFudDtcbiAgICB9XG4gICAgY29uc3RhbnRTZWxlY3Rvci5kZXBlbmRzT25Pd25Qcm9wcyA9IGZhbHNlO1xuICAgIHJldHVybiBjb25zdGFudFNlbGVjdG9yO1xuICB9O1xufVxuZnVuY3Rpb24gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcykge1xuICByZXR1cm4gbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyA/IEJvb2xlYW4obWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgOiBtYXBUb1Byb3BzLmxlbmd0aCAhPT0gMTtcbn1cbmZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBUb1Byb3BzLCBtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0UHJveHlTZWxlY3RvcihkaXNwYXRjaCwgeyBkaXNwbGF5TmFtZSB9KSB7XG4gICAgY29uc3QgcHJveHkgPSBmdW5jdGlvbiBtYXBUb1Byb3BzUHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcmV0dXJuIHByb3h5LmRlcGVuZHNPbk93blByb3BzID8gcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSA6IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLCB2b2lkIDApO1xuICAgIH07XG4gICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSB0cnVlO1xuICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBmdW5jdGlvbiBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBtYXBUb1Byb3BzO1xuICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKTtcbiAgICAgIGxldCBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBwcm9wcztcbiAgICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhwcm9wcyk7XG4gICAgICAgIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICB2ZXJpZnlQbGFpbk9iamVjdChwcm9wcywgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH07XG4gICAgcmV0dXJuIHByb3h5O1xuICB9O1xufVxuXG4vLyBzcmMvY29ubmVjdC9pbnZhbGlkQXJnRmFjdG9yeS50c1xuZnVuY3Rpb24gY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkoYXJnLCBuYW1lKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSW52YWxpZCB2YWx1ZSBvZiB0eXBlICR7dHlwZW9mIGFyZ30gZm9yICR7bmFtZX0gYXJndW1lbnQgd2hlbiBjb25uZWN0aW5nIGNvbXBvbmVudCAke29wdGlvbnMud3JhcHBlZENvbXBvbmVudE5hbWV9LmBcbiAgICApO1xuICB9O1xufVxuXG4vLyBzcmMvY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMudHNcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBEaXNwYXRjaFRvUHJvcHMgJiYgdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gXCJvYmplY3RcIiA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoXG4gICAgKGRpc3BhdGNoKSA9PiAoXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBiaW5kQWN0aW9uQ3JlYXRvcnMobWFwRGlzcGF0Y2hUb1Byb3BzLCBkaXNwYXRjaClcbiAgICApXG4gICkgOiAhbWFwRGlzcGF0Y2hUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudCgoZGlzcGF0Y2gpID0+ICh7XG4gICAgZGlzcGF0Y2hcbiAgfSkpIDogdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKVxuICApIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvbWFwU3RhdGVUb1Byb3BzLnRzXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHNGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gIW1hcFN0YXRlVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoKCkgPT4gKHt9KSkgOiB0eXBlb2YgbWFwU3RhdGVUb1Byb3BzID09PSBcImZ1bmN0aW9uXCIgPyAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpXG4gICkgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9tZXJnZVByb3BzLnRzXG5mdW5jdGlvbiBkZWZhdWx0TWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICByZXR1cm4geyAuLi5vd25Qcm9wcywgLi4uc3RhdGVQcm9wcywgLi4uZGlzcGF0Y2hQcm9wcyB9O1xufVxuZnVuY3Rpb24gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRNZXJnZVByb3BzUHJveHkoZGlzcGF0Y2gsIHsgZGlzcGxheU5hbWUsIGFyZU1lcmdlZFByb3BzRXF1YWwgfSkge1xuICAgIGxldCBoYXNSdW5PbmNlID0gZmFsc2U7XG4gICAgbGV0IG1lcmdlZFByb3BzO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZVByb3BzUHJveHkoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgICAgIGNvbnN0IG5leHRNZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgICAgaWYgKGhhc1J1bk9uY2UpIHtcbiAgICAgICAgaWYgKCFhcmVNZXJnZWRQcm9wc0VxdWFsKG5leHRNZXJnZWRQcm9wcywgbWVyZ2VkUHJvcHMpKVxuICAgICAgICAgIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFzUnVuT25jZSA9IHRydWU7XG4gICAgICAgIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgIHZlcmlmeVBsYWluT2JqZWN0KG1lcmdlZFByb3BzLCBkaXNwbGF5TmFtZSwgXCJtZXJnZVByb3BzXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBtZXJnZVByb3BzRmFjdG9yeShtZXJnZVByb3BzKSB7XG4gIHJldHVybiAhbWVyZ2VQcm9wcyA/ICgpID0+IGRlZmF1bHRNZXJnZVByb3BzIDogdHlwZW9mIG1lcmdlUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1lcmdlUHJvcHMsIFwibWVyZ2VQcm9wc1wiKTtcbn1cblxuLy8gc3JjL3V0aWxzL2JhdGNoLnRzXG5mdW5jdGlvbiBkZWZhdWx0Tm9vcEJhdGNoKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKCk7XG59XG5cbi8vIHNyYy91dGlscy9TdWJzY3JpcHRpb24udHNcbmZ1bmN0aW9uIGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpIHtcbiAgbGV0IGZpcnN0ID0gbnVsbDtcbiAgbGV0IGxhc3QgPSBudWxsO1xuICByZXR1cm4ge1xuICAgIGNsZWFyKCkge1xuICAgICAgZmlyc3QgPSBudWxsO1xuICAgICAgbGFzdCA9IG51bGw7XG4gICAgfSxcbiAgICBub3RpZnkoKSB7XG4gICAgICBkZWZhdWx0Tm9vcEJhdGNoKCgpID0+IHtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gZmlyc3Q7XG4gICAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKCk7XG4gICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IFtdO1xuICAgICAgbGV0IGxpc3RlbmVyID0gZmlyc3Q7XG4gICAgICB3aGlsZSAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgICBsZXQgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gbGFzdCA9IHtcbiAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgIHByZXY6IGxhc3RcbiAgICAgIH07XG4gICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0ID0gbGlzdGVuZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIGlmICghaXNTdWJzY3JpYmVkIHx8IGZpcnN0ID09PSBudWxsKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIGlmIChsaXN0ZW5lci5uZXh0KSB7XG4gICAgICAgICAgbGlzdGVuZXIubmV4dC5wcmV2ID0gbGlzdGVuZXIucHJldjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0ID0gbGlzdGVuZXIucHJldjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlyc3QgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cbnZhciBudWxsTGlzdGVuZXJzID0ge1xuICBub3RpZnkoKSB7XG4gIH0sXG4gIGdldDogKCkgPT4gW11cbn07XG5mdW5jdGlvbiBjcmVhdGVTdWJzY3JpcHRpb24oc3RvcmUsIHBhcmVudFN1Yikge1xuICBsZXQgdW5zdWJzY3JpYmU7XG4gIGxldCBsaXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuICBsZXQgc3Vic2NyaXB0aW9uc0Ftb3VudCA9IDA7XG4gIGxldCBzZWxmU3Vic2NyaWJlZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBhZGROZXN0ZWRTdWIobGlzdGVuZXIpIHtcbiAgICB0cnlTdWJzY3JpYmUoKTtcbiAgICBjb25zdCBjbGVhbnVwTGlzdGVuZXIgPSBsaXN0ZW5lcnMuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICBsZXQgcmVtb3ZlZCA9IGZhbHNlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoIXJlbW92ZWQpIHtcbiAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgIGNsZWFudXBMaXN0ZW5lcigpO1xuICAgICAgICB0cnlVbnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbm90aWZ5TmVzdGVkU3VicygpIHtcbiAgICBsaXN0ZW5lcnMubm90aWZ5KCk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlV3JhcHBlcigpIHtcbiAgICBpZiAoc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGlzU3Vic2NyaWJlZCgpIHtcbiAgICByZXR1cm4gc2VsZlN1YnNjcmliZWQ7XG4gIH1cbiAgZnVuY3Rpb24gdHJ5U3Vic2NyaWJlKCkge1xuICAgIHN1YnNjcmlwdGlvbnNBbW91bnQrKztcbiAgICBpZiAoIXVuc3Vic2NyaWJlKSB7XG4gICAgICB1bnN1YnNjcmliZSA9IHBhcmVudFN1YiA/IHBhcmVudFN1Yi5hZGROZXN0ZWRTdWIoaGFuZGxlQ2hhbmdlV3JhcHBlcikgOiBzdG9yZS5zdWJzY3JpYmUoaGFuZGxlQ2hhbmdlV3JhcHBlcik7XG4gICAgICBsaXN0ZW5lcnMgPSBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmUoKSB7XG4gICAgc3Vic2NyaXB0aW9uc0Ftb3VudC0tO1xuICAgIGlmICh1bnN1YnNjcmliZSAmJiBzdWJzY3JpcHRpb25zQW1vdW50ID09PSAwKSB7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgdW5zdWJzY3JpYmUgPSB2b2lkIDA7XG4gICAgICBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgIGxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyeVN1YnNjcmliZVNlbGYoKSB7XG4gICAgaWYgKCFzZWxmU3Vic2NyaWJlZCkge1xuICAgICAgc2VsZlN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgdHJ5U3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlU2VsZigpIHtcbiAgICBpZiAoc2VsZlN1YnNjcmliZWQpIHtcbiAgICAgIHNlbGZTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICB0cnlVbnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICBjb25zdCBzdWJzY3JpcHRpb24gPSB7XG4gICAgYWRkTmVzdGVkU3ViLFxuICAgIG5vdGlmeU5lc3RlZFN1YnMsXG4gICAgaGFuZGxlQ2hhbmdlV3JhcHBlcixcbiAgICBpc1N1YnNjcmliZWQsXG4gICAgdHJ5U3Vic2NyaWJlOiB0cnlTdWJzY3JpYmVTZWxmLFxuICAgIHRyeVVuc3Vic2NyaWJlOiB0cnlVbnN1YnNjcmliZVNlbGYsXG4gICAgZ2V0TGlzdGVuZXJzOiAoKSA9PiBsaXN0ZW5lcnNcbiAgfTtcbiAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbn1cblxuLy8gc3JjL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QudHNcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiKTtcbnZhciBpc1JlYWN0TmF0aXZlID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gXCJSZWFjdE5hdGl2ZVwiO1xudmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBjYW5Vc2VET00gfHwgaXNSZWFjdE5hdGl2ZSA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcblxuLy8gc3JjL3V0aWxzL3NoYWxsb3dFcXVhbC50c1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IHkgIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICBjb25zdCBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBzcmMvdXRpbHMvaG9pc3RTdGF0aWNzLnRzXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAkJHR5cGVvZjogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAkJHR5cGVvZjogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHtcbiAgW0ZvcndhcmRSZWZdOiBGT1JXQVJEX1JFRl9TVEFUSUNTLFxuICBbTWVtb106IE1FTU9fU1RBVElDU1xufTtcbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIGlmIChpc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH1cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbXCIkJHR5cGVvZlwiXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIGNvbnN0IGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICBjb25zdCBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbi8vIHNyYy9jb21wb25lbnRzL2Nvbm5lY3QudHN4XG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBub3RJbml0aWFsaXplZDtcbnZhciBpbml0aWFsaXplQ29ubmVjdCA9IChmbikgPT4ge1xuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IGZuO1xufTtcbnZhciBOT19TVUJTQ1JJUFRJT05fQVJSQVkgPSBbbnVsbCwgbnVsbF07XG52YXIgc3RyaW5naWZ5Q29tcG9uZW50ID0gKENvbXApID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoQ29tcCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcoQ29tcCk7XG4gIH1cbn07XG5mdW5jdGlvbiB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3MoZWZmZWN0RnVuYywgZWZmZWN0QXJncywgZGVwZW5kZW5jaWVzKSB7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4gZWZmZWN0RnVuYyguLi5lZmZlY3RBcmdzKSwgZGVwZW5kZW5jaWVzKTtcbn1cbmZ1bmN0aW9uIGNhcHR1cmVXcmFwcGVyUHJvcHMobGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCB3cmFwcGVyUHJvcHMsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMpIHtcbiAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50ID0gd3JhcHBlclByb3BzO1xuICByZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50ID0gZmFsc2U7XG4gIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQpIHtcbiAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBudWxsO1xuICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgfVxufVxuZnVuY3Rpb24gc3Vic2NyaWJlVXBkYXRlcyhzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsIHN0b3JlLCBzdWJzY3JpcHRpb24sIGNoaWxkUHJvcHNTZWxlY3RvciwgbGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCBpc01vdW50ZWQsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMsIGFkZGl0aW9uYWxTdWJzY3JpYmVMaXN0ZW5lcikge1xuICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcylcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgIH07XG4gIGxldCBkaWRVbnN1YnNjcmliZSA9IGZhbHNlO1xuICBsZXQgbGFzdFRocm93bkVycm9yID0gbnVsbDtcbiAgY29uc3QgY2hlY2tGb3JVcGRhdGVzID0gKCkgPT4ge1xuICAgIGlmIChkaWRVbnN1YnNjcmliZSB8fCAhaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGF0ZXN0U3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgbGV0IG5ld0NoaWxkUHJvcHMsIGVycm9yO1xuICAgIHRyeSB7XG4gICAgICBuZXdDaGlsZFByb3BzID0gY2hpbGRQcm9wc1NlbGVjdG9yKFxuICAgICAgICBsYXRlc3RTdG9yZVN0YXRlLFxuICAgICAgICBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnRcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IgPSBlO1xuICAgICAgbGFzdFRocm93bkVycm9yID0gZTtcbiAgICB9XG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgbGFzdFRocm93bkVycm9yID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKG5ld0NoaWxkUHJvcHMgPT09IGxhc3RDaGlsZFByb3BzLmN1cnJlbnQpIHtcbiAgICAgIGlmICghcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCkge1xuICAgICAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgYWRkaXRpb25hbFN1YnNjcmliZUxpc3RlbmVyKCk7XG4gICAgfVxuICB9O1xuICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IGNoZWNrRm9yVXBkYXRlcztcbiAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgY29uc3QgdW5zdWJzY3JpYmVXcmFwcGVyID0gKCkgPT4ge1xuICAgIGRpZFVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IG51bGw7XG4gICAgaWYgKGxhc3RUaHJvd25FcnJvcikge1xuICAgICAgdGhyb3cgbGFzdFRocm93bkVycm9yO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVuc3Vic2NyaWJlV3JhcHBlcjtcbn1cbmZ1bmN0aW9uIHN0cmljdEVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbiA9IGZhbHNlO1xuZnVuY3Rpb24gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywge1xuICAvLyBUaGUgYHB1cmVgIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLCBzbyBUUyBkb2Vzbid0IGxpa2UgdXMgZGVzdHJ1Y3R1cmluZyB0aGlzIHRvIGNoZWNrIGl0cyBleGlzdGVuY2UuXG4gIC8vIEB0cy1pZ25vcmVcbiAgcHVyZSxcbiAgYXJlU3RhdGVzRXF1YWwgPSBzdHJpY3RFcXVhbCxcbiAgYXJlT3duUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgYXJlU3RhdGVQcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICAvLyB1c2UgUmVhY3QncyBmb3J3YXJkUmVmIHRvIGV4cG9zZSBhIHJlZiBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnRcbiAgZm9yd2FyZFJlZiA9IGZhbHNlLFxuICAvLyB0aGUgY29udGV4dCBjb25zdW1lciB0byB1c2VcbiAgY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0XG59ID0ge30pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmIChwdXJlICE9PSB2b2lkIDAgJiYgIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24pIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24gPSB0cnVlO1xuICAgICAgd2FybmluZyhcbiAgICAgICAgJ1RoZSBgcHVyZWAgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQuIGBjb25uZWN0YCBpcyBub3cgYWx3YXlzIGEgXCJwdXJlL21lbW9pemVkXCIgY29tcG9uZW50J1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgQ29udGV4dCA9IGNvbnRleHQ7XG4gIGNvbnN0IGluaXRNYXBTdGF0ZVRvUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHNGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcyk7XG4gIGNvbnN0IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcyk7XG4gIGNvbnN0IGluaXRNZXJnZVByb3BzID0gbWVyZ2VQcm9wc0ZhY3RvcnkobWVyZ2VQcm9wcyk7XG4gIGNvbnN0IHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyA9IEJvb2xlYW4obWFwU3RhdGVUb1Byb3BzKTtcbiAgY29uc3Qgd3JhcFdpdGhDb25uZWN0ID0gKFdyYXBwZWRDb21wb25lbnQpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zdCBpc1ZhbGlkID0gLyogQF9fUFVSRV9fICovIGlzVmFsaWRFbGVtZW50VHlwZShXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgIGlmICghaXNWYWxpZClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBZb3UgbXVzdCBwYXNzIGEgY29tcG9uZW50IHRvIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBieSBjb25uZWN0LiBJbnN0ZWFkIHJlY2VpdmVkICR7c3RyaW5naWZ5Q29tcG9uZW50KFxuICAgICAgICAgICAgV3JhcHBlZENvbXBvbmVudFxuICAgICAgICAgICl9YFxuICAgICAgICApO1xuICAgIH1cbiAgICBjb25zdCB3cmFwcGVkQ29tcG9uZW50TmFtZSA9IFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8IFwiQ29tcG9uZW50XCI7XG4gICAgY29uc3QgZGlzcGxheU5hbWUgPSBgQ29ubmVjdCgke3dyYXBwZWRDb21wb25lbnROYW1lfSlgO1xuICAgIGNvbnN0IHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMgPSB7XG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBkaXNwbGF5TmFtZSxcbiAgICAgIHdyYXBwZWRDb21wb25lbnROYW1lLFxuICAgICAgV3JhcHBlZENvbXBvbmVudCxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHMsXG4gICAgICBhcmVTdGF0ZXNFcXVhbCxcbiAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbCxcbiAgICAgIGFyZU93blByb3BzRXF1YWwsXG4gICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsXG4gICAgfTtcbiAgICBmdW5jdGlvbiBDb25uZWN0RnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgIGNvbnN0IFtwcm9wc0NvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIHdyYXBwZXJQcm9wc10gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmOiByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmMiwgLi4ud3JhcHBlclByb3BzMiB9ID0gcHJvcHM7XG4gICAgICAgIHJldHVybiBbcHJvcHMuY29udGV4dCwgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjIsIHdyYXBwZXJQcm9wczJdO1xuICAgICAgfSwgW3Byb3BzXSk7XG4gICAgICBjb25zdCBDb250ZXh0VG9Vc2UgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgbGV0IFJlc3VsdENvbnRleHQgPSBDb250ZXh0O1xuICAgICAgICBpZiAocHJvcHNDb250ZXh0Py5Db25zdW1lcikge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSAvKiBAX19QVVJFX18gKi8gaXNDb250ZXh0Q29uc3VtZXIoXG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcHNDb250ZXh0LkNvbnN1bWVyLCBudWxsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJZb3UgbXVzdCBwYXNzIGEgdmFsaWQgUmVhY3QgY29udGV4dCBjb25zdW1lciBhcyBgcHJvcHMuY29udGV4dGBcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVzdWx0Q29udGV4dCA9IHByb3BzQ29udGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlc3VsdENvbnRleHQ7XG4gICAgICB9LCBbcHJvcHNDb250ZXh0LCBDb250ZXh0XSk7XG4gICAgICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHRUb1VzZSk7XG4gICAgICBjb25zdCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPSBCb29sZWFuKHByb3BzLnN0b3JlKSAmJiBCb29sZWFuKHByb3BzLnN0b3JlLmdldFN0YXRlKSAmJiBCb29sZWFuKHByb3BzLnN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIGNvbnN0IGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID0gQm9vbGVhbihjb250ZXh0VmFsdWUpICYmIEJvb2xlYW4oY29udGV4dFZhbHVlLnN0b3JlKTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWRpZFN0b3JlQ29tZUZyb21Qcm9wcyAmJiAhZGlkU3RvcmVDb21lRnJvbUNvbnRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDb3VsZCBub3QgZmluZCBcInN0b3JlXCIgaW4gdGhlIGNvbnRleHQgb2YgXCIke2Rpc3BsYXlOYW1lfVwiLiBFaXRoZXIgd3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYSA8UHJvdmlkZXI+LCBvciBwYXNzIGEgY3VzdG9tIFJlYWN0IGNvbnRleHQgcHJvdmlkZXIgdG8gPFByb3ZpZGVyPiBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgUmVhY3QgY29udGV4dCBjb25zdW1lciB0byAke2Rpc3BsYXlOYW1lfSBpbiBjb25uZWN0IG9wdGlvbnMuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RvcmUgPSBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyBwcm9wcy5zdG9yZSA6IGNvbnRleHRWYWx1ZS5zdG9yZTtcbiAgICAgIGNvbnN0IGdldFNlcnZlclN0YXRlID0gZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPyBjb250ZXh0VmFsdWUuZ2V0U2VydmVyU3RhdGUgOiBzdG9yZS5nZXRTdGF0ZTtcbiAgICAgIGNvbnN0IGNoaWxkUHJvcHNTZWxlY3RvciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gZmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShzdG9yZS5kaXNwYXRjaCwgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyk7XG4gICAgICB9LCBbc3RvcmVdKTtcbiAgICAgIGNvbnN0IFtzdWJzY3JpcHRpb24sIG5vdGlmeU5lc3RlZFN1YnNdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKVxuICAgICAgICAgIHJldHVybiBOT19TVUJTQ1JJUFRJT05fQVJSQVk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbjIgPSBjcmVhdGVTdWJzY3JpcHRpb24oXG4gICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgZGlkU3RvcmVDb21lRnJvbVByb3BzID8gdm9pZCAwIDogY29udGV4dFZhbHVlLnN1YnNjcmlwdGlvblxuICAgICAgICApO1xuICAgICAgICBjb25zdCBub3RpZnlOZXN0ZWRTdWJzMiA9IHN1YnNjcmlwdGlvbjIubm90aWZ5TmVzdGVkU3Vicy5iaW5kKHN1YnNjcmlwdGlvbjIpO1xuICAgICAgICByZXR1cm4gW3N1YnNjcmlwdGlvbjIsIG5vdGlmeU5lc3RlZFN1YnMyXTtcbiAgICAgIH0sIFtzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWVdKTtcbiAgICAgIGNvbnN0IG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGRpZFN0b3JlQ29tZUZyb21Qcm9wcykge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5jb250ZXh0VmFsdWUsXG4gICAgICAgICAgc3Vic2NyaXB0aW9uXG4gICAgICAgIH07XG4gICAgICB9LCBbZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWUsIHN1YnNjcmlwdGlvbl0pO1xuICAgICAgY29uc3QgbGFzdENoaWxkUHJvcHMgPSBSZWFjdC51c2VSZWYodm9pZCAwKTtcbiAgICAgIGNvbnN0IGxhc3RXcmFwcGVyUHJvcHMgPSBSZWFjdC51c2VSZWYod3JhcHBlclByb3BzKTtcbiAgICAgIGNvbnN0IGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUgPSBSZWFjdC51c2VSZWYodm9pZCAwKTtcbiAgICAgIGNvbnN0IHJlbmRlcklzU2NoZWR1bGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICAgIGNvbnN0IGlzTW91bnRlZCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgICBjb25zdCBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yID0gUmVhY3QudXNlUmVmKFxuICAgICAgICB2b2lkIDBcbiAgICAgICk7XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICB9LCBbXSk7XG4gICAgICBjb25zdCBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCAmJiB3cmFwcGVyUHJvcHMgPT09IGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNTZWxlY3RvcihzdG9yZS5nZXRTdGF0ZSgpLCB3cmFwcGVyUHJvcHMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICB9LCBbc3RvcmUsIHdyYXBwZXJQcm9wc10pO1xuICAgICAgY29uc3Qgc3Vic2NyaWJlRm9yUmVhY3QgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlID0gKHJlYWN0TGlzdGVuZXIpID0+IHtcbiAgICAgICAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdWJzY3JpYmVVcGRhdGVzKFxuICAgICAgICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24sXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjaGlsZFByb3BzU2VsZWN0b3IsXG4gICAgICAgICAgICBsYXN0V3JhcHBlclByb3BzLFxuICAgICAgICAgICAgbGFzdENoaWxkUHJvcHMsXG4gICAgICAgICAgICByZW5kZXJJc1NjaGVkdWxlZCxcbiAgICAgICAgICAgIGlzTW91bnRlZCxcbiAgICAgICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsXG4gICAgICAgICAgICBub3RpZnlOZXN0ZWRTdWJzLFxuICAgICAgICAgICAgcmVhY3RMaXN0ZW5lclxuICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmU7XG4gICAgICB9LCBbc3Vic2NyaXB0aW9uXSk7XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3MoY2FwdHVyZVdyYXBwZXJQcm9wcywgW1xuICAgICAgICBsYXN0V3JhcHBlclByb3BzLFxuICAgICAgICBsYXN0Q2hpbGRQcm9wcyxcbiAgICAgICAgcmVuZGVySXNTY2hlZHVsZWQsXG4gICAgICAgIHdyYXBwZXJQcm9wcyxcbiAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSxcbiAgICAgICAgbm90aWZ5TmVzdGVkU3Vic1xuICAgICAgXSk7XG4gICAgICBsZXQgYWN0dWFsQ2hpbGRQcm9wcztcbiAgICAgIHRyeSB7XG4gICAgICAgIGFjdHVhbENoaWxkUHJvcHMgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShcbiAgICAgICAgICAvLyBUT0RPIFdlJ3JlIHBhc3NpbmcgdGhyb3VnaCBhIGJpZyB3cmFwcGVyIHRoYXQgZG9lcyBhIGJ1bmNoIG9mIGV4dHJhIHNpZGUgZWZmZWN0cyBiZXNpZGVzIHN1YnNjcmliaW5nXG4gICAgICAgICAgc3Vic2NyaWJlRm9yUmVhY3QsXG4gICAgICAgICAgLy8gVE9ETyBUaGlzIGlzIGluY3JlZGlibHkgaGFja3kuIFdlJ3ZlIGFscmVhZHkgcHJvY2Vzc2VkIHRoZSBzdG9yZSB1cGRhdGUgYW5kIGNhbGN1bGF0ZWQgbmV3IGNoaWxkIHByb3BzLFxuICAgICAgICAgIC8vIFRPRE8gYW5kIHdlJ3JlIGp1c3QgcGFzc2luZyB0aGF0IHRocm91Z2ggc28gaXQgdHJpZ2dlcnMgYSByZS1yZW5kZXIgZm9yIHVzIHJhdGhlciB0aGFuIHJlbHlpbmcgb24gYHVTRVNgLlxuICAgICAgICAgIGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvcixcbiAgICAgICAgICBnZXRTZXJ2ZXJTdGF0ZSA/ICgpID0+IGNoaWxkUHJvcHNTZWxlY3RvcihnZXRTZXJ2ZXJTdGF0ZSgpLCB3cmFwcGVyUHJvcHMpIDogYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgICAgIDtcbiAgICAgICAgICBlcnIubWVzc2FnZSArPSBgXG5UaGUgZXJyb3IgbWF5IGJlIGNvcnJlbGF0ZWQgd2l0aCB0aGlzIHByZXZpb3VzIGVycm9yOlxuJHtsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQuc3RhY2t9XG5cbmA7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCA9IHZvaWQgMDtcbiAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gdm9pZCAwO1xuICAgICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gYWN0dWFsQ2hpbGRQcm9wcztcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgV3JhcHBlZENvbXBvbmVudCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLi4uYWN0dWFsQ2hpbGRQcm9wcyxcbiAgICAgICAgICAgICAgcmVmOiByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSwgW3JlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIFdyYXBwZWRDb21wb25lbnQsIGFjdHVhbENoaWxkUHJvcHNdKTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkQ2hpbGQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykge1xuICAgICAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0VG9Vc2UuUHJvdmlkZXIsIHsgdmFsdWU6IG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgfSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgfSwgW0NvbnRleHRUb1VzZSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50LCBvdmVycmlkZGVuQ29udGV4dFZhbHVlXSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZDtcbiAgICB9XG4gICAgY29uc3QgX0Nvbm5lY3QgPSBSZWFjdC5tZW1vKENvbm5lY3RGdW5jdGlvbik7XG4gICAgY29uc3QgQ29ubmVjdCA9IF9Db25uZWN0O1xuICAgIENvbm5lY3QuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IENvbm5lY3RGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIGlmIChmb3J3YXJkUmVmKSB7XG4gICAgICBjb25zdCBfZm9yd2FyZGVkID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgICAgICAgZnVuY3Rpb24gZm9yd2FyZENvbm5lY3RSZWYocHJvcHMsIHJlZikge1xuICAgICAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0LCB7IC4uLnByb3BzLCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmOiByZWYgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBmb3J3YXJkZWQgPSBfZm9yd2FyZGVkO1xuICAgICAgZm9yd2FyZGVkLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgICBmb3J3YXJkZWQuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKGZvcndhcmRlZCwgV3JhcHBlZENvbXBvbmVudCk7XG4gICAgfVxuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaG9pc3ROb25SZWFjdFN0YXRpY3MoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG4gIHJldHVybiB3cmFwV2l0aENvbm5lY3Q7XG59XG52YXIgY29ubmVjdF9kZWZhdWx0ID0gY29ubmVjdDtcblxuLy8gc3JjL2NvbXBvbmVudHMvUHJvdmlkZXIudHN4XG5mdW5jdGlvbiBQcm92aWRlcih7XG4gIHN0b3JlLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgc2VydmVyU3RhdGUsXG4gIHN0YWJpbGl0eUNoZWNrID0gXCJvbmNlXCIsXG4gIGlkZW50aXR5RnVuY3Rpb25DaGVjayA9IFwib25jZVwiXG59KSB7XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgZ2V0U2VydmVyU3RhdGU6IHNlcnZlclN0YXRlID8gKCkgPT4gc2VydmVyU3RhdGUgOiB2b2lkIDAsXG4gICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVja1xuICAgIH07XG4gIH0sIFtzdG9yZSwgc2VydmVyU3RhdGUsIHN0YWJpbGl0eUNoZWNrLCBpZGVudGl0eUZ1bmN0aW9uQ2hlY2tdKTtcbiAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gc3RvcmUuZ2V0U3RhdGUoKSwgW3N0b3JlXSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgc3Vic2NyaXB0aW9uIH0gPSBjb250ZXh0VmFsdWU7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicztcbiAgICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gICAgaWYgKHByZXZpb3VzU3RhdGUgIT09IHN0b3JlLmdldFN0YXRlKCkpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gdm9pZCAwO1xuICAgIH07XG4gIH0sIFtjb250ZXh0VmFsdWUsIHByZXZpb3VzU3RhdGVdKTtcbiAgY29uc3QgQ29udGV4dCA9IGNvbnRleHQgfHwgUmVhY3RSZWR1eENvbnRleHQ7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0VmFsdWUgfSwgY2hpbGRyZW4pO1xufVxudmFyIFByb3ZpZGVyX2RlZmF1bHQgPSBQcm92aWRlcjtcblxuLy8gc3JjL2hvb2tzL3VzZVN0b3JlLnRzXG5mdW5jdGlvbiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVJlZHV4Q29udGV4dDIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVJlZHV4Q29udGV4dCA6IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0KVxuICApO1xuICBjb25zdCB1c2VTdG9yZTIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdXNlUmVkdXhDb250ZXh0MigpO1xuICAgIHJldHVybiBzdG9yZTtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VTdG9yZTIsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHVzZVN0b3JlMlxuICB9KTtcbiAgcmV0dXJuIHVzZVN0b3JlMjtcbn1cbnZhciB1c2VTdG9yZSA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTdG9yZUhvb2soKTtcblxuLy8gc3JjL2hvb2tzL3VzZURpc3BhdGNoLnRzXG5mdW5jdGlvbiBjcmVhdGVEaXNwYXRjaEhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVN0b3JlMiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlU3RvcmUgOiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCk7XG4gIGNvbnN0IHVzZURpc3BhdGNoMiA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlMigpO1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaDtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VEaXNwYXRjaDIsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHVzZURpc3BhdGNoMlxuICB9KTtcbiAgcmV0dXJuIHVzZURpc3BhdGNoMjtcbn1cbnZhciB1c2VEaXNwYXRjaCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVEaXNwYXRjaEhvb2soKTtcblxuLy8gc3JjL2V4cG9ydHMudHNcbnZhciBiYXRjaCA9IGRlZmF1bHROb29wQmF0Y2g7XG5cbi8vIHNyYy9pbmRleC50c1xuaW5pdGlhbGl6ZVVzZVNlbGVjdG9yKHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yMik7XG5pbml0aWFsaXplQ29ubmVjdChSZWFjdDIudXNlU3luY0V4dGVybmFsU3RvcmUpO1xuZXhwb3J0IHtcbiAgUHJvdmlkZXJfZGVmYXVsdCBhcyBQcm92aWRlcixcbiAgUmVhY3RSZWR1eENvbnRleHQsXG4gIGJhdGNoLFxuICBjb25uZWN0X2RlZmF1bHQgYXMgY29ubmVjdCxcbiAgY3JlYXRlRGlzcGF0Y2hIb29rLFxuICBjcmVhdGVTZWxlY3Rvckhvb2ssXG4gIGNyZWF0ZVN0b3JlSG9vayxcbiAgc2hhbGxvd0VxdWFsLFxuICB1c2VEaXNwYXRjaCxcbiAgdXNlU2VsZWN0b3IsXG4gIHVzZVN0b3JlXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtcmVkdXgubWpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFsbFdpZGdldFByb3BzLCBJTVN0YXRlIH0gZnJvbSBcImppbXUtY29yZVwiO1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xyXG5pbXBvcnQgeyBsb2FkTW9kdWxlcyB9IGZyb20gXCJlc3JpLWxvYWRlclwiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBMb2FkaW5nLCBTZWxlY3QsIE11bHRpUmFuZ2VTbGlkZXIgfSBmcm9tIFwiamltdS11aVwiO1xyXG5cclxuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2hvb2tzL3VzZUxvY2FsZVwiO1xyXG5pbXBvcnQgeyB0cmFuc2xhdGlvbnMgfSBmcm9tIFwiLi90cmFuc2xhdGlvbnNcIjtcclxuXHJcbmludGVyZmFjZSBCYW5kIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgU2Vuc29yIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgYmFuZHM6IEJhbmRbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElNQ29uZmlnIHtcclxuICBleGFtcGxlQ29uZmlnUHJvcGVydHk6IHN0cmluZztcclxufVxyXG5jb25zdCBzZW5zb3JzOiBTZW5zb3JbXSA9IFtcclxuICB7XHJcbiAgICBpZDogXCJ3b3JsZHZpZXdcIixcclxuICAgIHRpdGxlOiBcIldvcmxkdmlldzJcIixcclxuICAgIGJhbmRzOiBbXHJcbiAgICAgIHsgbmFtZTogXCJDb2FzdGFsKDEpXCIsIHZhbHVlOiBcIjFcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiQmx1ZSgyKVwiLCB2YWx1ZTogXCIyXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIkdyZWVuKDMpXCIsIHZhbHVlOiBcIjNcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiWWVsbG93KDQpXCIsIHZhbHVlOiBcIjRcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiUmVkKDUpXCIsIHZhbHVlOiBcIjVcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiUmVkIEVkZ2UoNilcIiwgdmFsdWU6IFwiNlwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJOSVIgLTEoNylcIiwgdmFsdWU6IFwiN1wiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJOSVIgLTIoOClcIiwgdmFsdWU6IFwiOFwiIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiZmFzYXRcIixcclxuICAgIHRpdGxlOiBcIk9XRF9GYXNhdENfTVNfdjJfMjAyNTAzMTJcIixcclxuICAgIGJhbmRzOiBbXHJcbiAgICAgIHsgbmFtZTogXCJSZWQoMSlcIiwgdmFsdWU6IFwiMVwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJHcmVlbigyKVwiLCB2YWx1ZTogXCIyXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIkJsdWUoMylcIiwgdmFsdWU6IFwiM1wiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJOSVIoNClcIiwgdmFsdWU6IFwiNFwiIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiZGVmYXVsdFwiLFxyXG4gICAgdGl0bGU6IFwiRGVmYXVsdFwiLFxyXG4gICAgYmFuZHM6IFtcclxuICAgICAgeyBuYW1lOiBcIkJsdWUoMSlcIiwgdmFsdWU6IFwiMVwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJHcmVlbigyKVwiLCB2YWx1ZTogXCIyXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIlJlZCgzKVwiLCB2YWx1ZTogXCIzXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIk5JUig0KVwiLCB2YWx1ZTogXCI0XCIgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFdpZGdldDogUmVhY3QuRkM8QWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+PiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlTG9jYWxlKHRyYW5zbGF0aW9ucyk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkSW1hZ2VyaWVzID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IElNU3RhdGUpID0+IHN0YXRlLm15U3RhdGU/LnNlbGVjdGVkSW1hZ2VzXHJcbiAgKTtcclxuICBjb25zdCBzZWxlY3RlZFNlbnNvciA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5teVN0YXRlPy5zZWxlY3RlZFNlbnNvclxyXG4gICk7XHJcbiAgY29uc3QgZ2VvcHJvY2VzcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUubXlTdGF0ZT8uZ2VvcHJvY2Vzcyk7XHJcblxyXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lucHV0TWluUmFuZ2UsIHNldElucHV0TWluUmFuZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lucHV0TWF4UmFuZ2UsIHNldElucHV0TWF4UmFuZ2VdID0gdXNlU3RhdGUoMC41KTtcclxuICBjb25zdCBbaW5wdXRUeXBlQXJlYU1heCwgc2V0SW5wdXRUeXBlQXJlYU1heF0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbaW5wdXRUeXBlQXJlYU1pbiwgc2V0SW5wdXRUeXBlQXJlYU1pbl0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkRm9ybXVsYSwgc2V0U2VsZWN0ZWRGb3JtdWxhXSA9IHVzZVN0YXRlKFxyXG4gICAgXCIoYjQgLSBiMSkgLyAoYjQgKyBiMSlcIlxyXG4gICk7XHJcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShbMCwgMjU1LCAwLCAyNTVdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRmlyZSwgc2V0SXNGaXJlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYXZhaWxhYmxlU2Vuc29ycywgc2V0QXZhaWxhYmxlU2Vuc29yc10gPSB1c2VTdGF0ZShzZW5zb3JzKTtcclxuICBjb25zdCBbaXNBcGxpZWQsIHNldElzQXBsaWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy9yZWZzXHJcbiAgY29uc3QgaW1hZ2VyeUxheWVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGVzcmlNb2R1bGVzUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXYpID0+IHtcclxuICAgIGlmIChqbXYpIHtcclxuICAgICAgLy8gaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgIC8vICAgamltdU1hcFZpZXcudmlldy53YXRjaCgnZXh0ZW50JywgbnVsbCk7XHJcbiAgICAgIC8vICAgamltdU1hcFZpZXcudmlldy53YXRjaCgnem9vbScsIG51bGwpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICBzZXRKaW11TWFwVmlldyhqbXYpO1xyXG5cclxuICAgICAgLy8gaWYgKGptdikge1xyXG4gICAgICAvLyAgIGptdi52aWV3LndhdGNoKCdleHRlbnQnLCBhcGxpY2FyTWFzY2FyYSk7XHJcbiAgICAgIC8vICAgam12LnZpZXcud2F0Y2goJ3pvb20nLCBhcGxpY2FyTWFzY2FyYSk7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSYW5nZUNoYW5nZSA9IChtaW5WYWx1ZSwgbWF4VmFsdWUpID0+IHtcclxuICAgIHNldElucHV0TWluUmFuZ2UobWluVmFsdWUpO1xyXG4gICAgc2V0SW5wdXRNYXhSYW5nZShtYXhWYWx1ZSk7XHJcbiAgICBjcmVhckltYWdlcnlMYXllcigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm11bGFDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldElzQXBsaWVkKGZhbHNlKTtcclxuICAgIHJlbW92ZUxheWVyKCk7XHJcbiAgICBjb25zdCBmb3JtdWxhID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgc3dpdGNoIChmb3JtdWxhKSB7XHJcbiAgICAgIGNhc2UgXCJORFZJXCI6XHJcbiAgICAgICAgc2V0SXNGaXJlKGZhbHNlKTtcclxuICAgICAgICAvL3NldEluZGljZVR5cGUoXCJORFZJXCIpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFNlbnNvcikge1xyXG4gICAgICAgICAgY29uc3Qgc2Vuc29yID0gYXZhaWxhYmxlU2Vuc29ycy5maW5kKFxyXG4gICAgICAgICAgICAocykgPT4gcy50aXRsZSA9PT0gc2VsZWN0ZWRTZW5zb3IudGl0bGUgfHwgcy50aXRsZSA9PT0gXCJEZWZhdWx0XCJcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09IFwiV29ybGR2aWV3MlwiKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShcclxuICAgICAgICAgICAgICBgKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09IFwiT1dEX0Zhc2F0Q19NU192Ml8yMDI1MDMxMlwiKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShcclxuICAgICAgICAgICAgICBgKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzBdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzBdPy52YWx1ZX0pYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09IFwiRGVmYXVsdFwiKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShcclxuICAgICAgICAgICAgICBgKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0pYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDb2xvcihbMCwgMjU1LCAwLCAyNTVdKTtcclxuICAgICAgICBzZXRJbnB1dFR5cGVBcmVhTWF4KDEpO1xyXG4gICAgICAgIHNldElucHV0VHlwZUFyZWFNaW4oLTEpO1xyXG4gICAgICAgIHNldElucHV0TWluUmFuZ2UoMC4zKTtcclxuICAgICAgICBzZXRJbnB1dE1heFJhbmdlKDAuNyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJTQVZJXCI6XHJcbiAgICAgICAgc2V0SXNGaXJlKGZhbHNlKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRTZW5zb3IpIHtcclxuICAgICAgICAgIGNvbnN0IHNlbnNvciA9IGF2YWlsYWJsZVNlbnNvcnMuZmluZChcclxuICAgICAgICAgICAgKHMpID0+IHMudGl0bGUgPT09IHNlbGVjdGVkU2Vuc29yLnRpdGxlIHx8IHMudGl0bGUgPT09IFwiRGVmYXVsdFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09IFwiV29ybGR2aWV3MlwiKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShcclxuICAgICAgICAgICAgICBgKChCJHtzZW5zb3IuYmFuZHNbNl0/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1s0XT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbNl0/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1s0XT8udmFsdWV9ICsgMCw1KSkgKiAoMSArIDAsNSlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09IFwiT1dEX0Zhc2F0Q19NU192Ml8yMDI1MDMxMlwiKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShcclxuICAgICAgICAgICAgICBgKChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9ICsgMCw1KSkgKiAoMSArIDAsNSlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gXCJEZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKFxyXG4gICAgICAgICAgICAgIGAoKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0gKyAwLDUpKSAqICgxICsgMCw1KWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldENvbG9yKFsyNTUsIDI1NSwgMCwgMjU1XSk7XHJcbiAgICAgICAgc2V0SW5wdXRUeXBlQXJlYU1heCgxLjUpO1xyXG4gICAgICAgIHNldElucHV0VHlwZUFyZWFNaW4oLTEuNSk7XHJcbiAgICAgICAgc2V0SW5wdXRNaW5SYW5nZSgwLjMpO1xyXG4gICAgICAgIHNldElucHV0TWF4UmFuZ2UoMC43KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIk5EV0lcIjpcclxuICAgICAgICBzZXRJc0ZpcmUoZmFsc2UpO1xyXG4gICAgICAgIC8vc2V0SW5kaWNlVHlwZShcIk5EV0lcIik7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkU2Vuc29yKSB7XHJcbiAgICAgICAgICBjb25zdCBzZW5zb3IgPSBhdmFpbGFibGVTZW5zb3JzLmZpbmQoXHJcbiAgICAgICAgICAgIChzKSA9PiBzLnRpdGxlID09PSBzZWxlY3RlZFNlbnNvci50aXRsZSB8fCBzLnRpdGxlID09PSBcIkRlZmF1bHRcIlxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gXCJXb3JsZHZpZXcyXCIpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKFxyXG4gICAgICAgICAgICAgIGAoQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbNl0/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbNl0/LnZhbHVlfSlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gXCJPV0RfRmFzYXRDX01TX3YyXzIwMjUwMzEyXCIpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKFxyXG4gICAgICAgICAgICAgIGAoQiR7c2Vuc29yLmJhbmRzWzFdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzFdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gXCJEZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKFxyXG4gICAgICAgICAgICAgIGAoQiR7c2Vuc29yLmJhbmRzWzFdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzFdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENvbG9yKFswLCAwLCAyNTUsIDI1NV0pO1xyXG4gICAgICAgIHNldElucHV0VHlwZUFyZWFNYXgoMSk7XHJcbiAgICAgICAgc2V0SW5wdXRUeXBlQXJlYU1pbigtMSk7XHJcbiAgICAgICAgc2V0SW5wdXRNaW5SYW5nZSgwLjMpO1xyXG4gICAgICAgIHNldElucHV0TWF4UmFuZ2UoMC43KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkJBSVwiOlxyXG4gICAgICAgIHNldElzRmlyZSh0cnVlKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXJJbWFnZXJ5TGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgLy9TaWVtcHJlIHkgY3VhbmRvIGVsIGFycmF5IHNlbGVjdGVkSW1hZ2VyaWVzIHRlbmdhIGFsIG1lbm9zIDIgZWxlbWVudG9zXHJcbiAgICBpZiAoc2VsZWN0ZWRJbWFnZXJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvL1NlIGFzaWduYW4gbGFzIGltYWdlbmVzIGEgbGFzIHZhcmlhYmxlc1xyXG4gICAgICBsZXQgaW1nMURhdGEgPSBzZWxlY3RlZEltYWdlcmllc1swXT8uT0JKRUNUSUQ7XHJcblxyXG4gICAgICAvLyBWYWxpZGFyIHF1ZSBhbCBtZW5vcyB1bmEgc2VsZWNjacOzbiBzZWEgdsOhbGlkYVxyXG4gICAgICBpZiAoaW1nMURhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAvL1NpIGV4aXRlIGVsIG1hcGEgeSBleGlzdGFuIGxvcyBtb2R1bG9zIGRlIEVzcmlcclxuICAgICAgICBpZiAoamltdU1hcFZpZXcgJiYgZXNyaU1vZHVsZXNSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgLy9TZSB1dGlsaXphbiBsb3MgbW9kdWxvcyBkZSBFc3JpXHJcbiAgICAgICAgICBjb25zdCB7IEltYWdlcnlMYXllciwgUmFzdGVyRnVuY3Rpb24sIFJhc3RlclN0cmV0Y2hSZW5kZXJlciB9ID1cclxuICAgICAgICAgICAgZXNyaU1vZHVsZXNSZWYuY3VycmVudDtcclxuICAgICAgICAgIC8vU2UgYnVzY2EgbGEgY2FwYVxyXG4gICAgICAgICAgY29uc3QgaW1hZ2VyeUxheWVyID0gamltdU1hcFZpZXcudmlldy5tYXAuZmluZExheWVyQnlJZChcclxuICAgICAgICAgICAgc2VsZWN0ZWRTZW5zb3I/LmlkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coeyBpbWFnZXJ5TGF5ZXIgfSk7XHJcbiAgICAgICAgICAvL1NlIGFzaWduYSBsYSB1cmwgZGUgbGEgY2FwYVxyXG4gICAgICAgICAgY29uc3QgbGF5ZXJVcmwgPSBpbWFnZXJ5TGF5ZXIudXJsO1xyXG4gICAgICAgICAgLy9TZSBjcmVhIGxhIGV4cHJlc2lvbiBkZSBsYSBjb25zdWx0YVxyXG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBgT0JKRUNUSUQgSU4gKCR7aW1nMURhdGF9KWA7XHJcblxyXG4gICAgICAgICAgLy9TZSBjcmVhIGxhIGZ1bmNpb24gUmFzdGVyIGRlIGxhIGNvbnN1bHRhXHJcbiAgICAgICAgICBjb25zdCBiYW5kQXJpdGhtZXRpY0Z1bmN0aW9uID0gbmV3IFJhc3RlckZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBcIkJhbmRBcml0aG1ldGljXCIsXHJcbiAgICAgICAgICAgIG91dHB1dFBpeGVsVHlwZTogXCJGMzJcIixcclxuICAgICAgICAgICAgZnVuY3Rpb25Bcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgICBNZXRob2Q6IDAsXHJcbiAgICAgICAgICAgICAgQmFuZEluZGV4ZXM6IHNlbGVjdGVkRm9ybXVsYSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlbWFwRnVuY3Rpb24gPSBuZXcgUmFzdGVyRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IFwiUmVtYXBcIixcclxuICAgICAgICAgICAgb3V0cHV0UGl4ZWxUeXBlOiBcIkYzMlwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbkFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICAgIFJhc3RlcjogYmFuZEFyaXRobWV0aWNGdW5jdGlvbixcclxuICAgICAgICAgICAgICBJbnB1dFJhbmdlczogW2lucHV0TWluUmFuZ2UsIGlucHV0TWF4UmFuZ2VdLFxyXG4gICAgICAgICAgICAgIE91dHB1dFZhbHVlczogWzJdLFxyXG4gICAgICAgICAgICAgIE5vRGF0YVJhbmdlczogW1xyXG4gICAgICAgICAgICAgICAgLUluZmluaXR5LFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlQXJlYU1pbixcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZUFyZWFNYXgsXHJcbiAgICAgICAgICAgICAgICBJbmZpbml0eSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIEFsbG93VW5tYXRjaGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHN0cmV0Y2hSZW5kZXJlciA9IG5ldyBSYXN0ZXJTdHJldGNoUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICBzdHJldGNoVHlwZTogXCJtaW4tbWF4XCIsXHJcbiAgICAgICAgICAgIHN0YXRpc3RpY3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtaW46IGlucHV0VHlwZUFyZWFNaW4sXHJcbiAgICAgICAgICAgICAgICBtYXg6IGlucHV0VHlwZUFyZWFNYXgsXHJcbiAgICAgICAgICAgICAgICBhdmc6IChpbnB1dFR5cGVBcmVhTWluICsgaW5wdXRUeXBlQXJlYU1heCkgLyAyLFxyXG4gICAgICAgICAgICAgICAgc3RkZGV2OiAwLjEsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgY29sb3JSYW1wOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJhbGdvcml0aG1pY1wiLFxyXG4gICAgICAgICAgICAgIGZyb21Db2xvcjogWzI1NSwgMjU1LCAyNTUsIDBdLFxyXG4gICAgICAgICAgICAgIHRvQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvL1NlIGNyZWEgbGEgbnVldmEgY2FwYSBmaWx0cmFkYSBwb3IgaWRcclxuICAgICAgICAgIGNvbnN0IG5ld0ltYWdlcnlMYXllciA9IG5ldyBJbWFnZXJ5TGF5ZXIoe1xyXG4gICAgICAgICAgICB1cmw6IGxheWVyVXJsLFxyXG4gICAgICAgICAgICBpZDogXCLDjW5kaWNlcyBlc3BlY3RyYWxlc1wiLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB0aXRsZTogdChcIndpZGdldExhYmVsXCIpLFxyXG4gICAgICAgICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbiwgLy8gRmlsdHJvIHBvciBPQkpFQ1RJRFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gRWxpbWluYXIgbGEgY2FwYSBleGlzdGVudGUgc2kgeWEgZXN0w6EgY2FyZ2FkYVxyXG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmZpbmRMYXllckJ5SWQoXHJcbiAgICAgICAgICAgIFwiw41uZGljZXMgZXNwZWN0cmFsZXNcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChleGlzdGluZ0xheWVyKSB7XHJcbiAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShleGlzdGluZ0xheWVyKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBBZ3JlZ2FyIGxhIG51ZXZhIGNhcGEgY29uIGxvcyBmaWx0cm9zIHkgcmVuZGVyaXphZG9yZXNcclxuICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChuZXdJbWFnZXJ5TGF5ZXIpO1xyXG5cclxuICAgICAgICAgIC8vIEFzaWduYXIgZnVuY2lvbmVzIHkgcmVuZGVyaXphZG9yXHJcbiAgICAgICAgICBuZXdJbWFnZXJ5TGF5ZXIucmFzdGVyRnVuY3Rpb24gPSByZW1hcEZ1bmN0aW9uO1xyXG4gICAgICAgICAgbmV3SW1hZ2VyeUxheWVyLnJlbmRlcmVyID0gc3RyZXRjaFJlbmRlcmVyO1xyXG5cclxuICAgICAgICAgIGltYWdlcnlMYXllclJlZi5jdXJyZW50ID0gbmV3SW1hZ2VyeUxheWVyO1xyXG5cclxuICAgICAgICAgIC8vIFZhbGlkYXIgY3VhbmRvIGxhIGNhcGEgZXN0w6kgbGlzdGFcclxuICAgICAgICAgIG5ld0ltYWdlcnlMYXllci53aGVuKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2FyZ2FuZG8gZWwgbGF5ZXI6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5kaWNlQmFpID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGltZzFEYXRhID0gc2VsZWN0ZWRJbWFnZXJpZXNbMF0uT0JKRUNUSUQ7XHJcblxyXG4gICAgICBjb25zdCBwcm9jZXNvID0gNTtcclxuICAgICAgY29uc3QgZW50cmFkYSA9IGltZzFEYXRhO1xyXG4gICAgICB2YXIgdXJsQ29uc3VsdGEgPSBgaHR0cDovLzEyNy4wLjAuMTo1MDAwL3Byb3h5P3Byb2Nlc289JHtwcm9jZXNvfSZFbnRyYWRhPSR7ZW50cmFkYX0mdXJsPSR7c2VsZWN0ZWRTZW5zb3IudXJsfWA7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybENvbnN1bHRhLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo1MDAwJHtkYXRhLnVybEpzb259YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhVmFsaWRhZGEgPSBhd2FpdCByZXNwb25zZURhdGEuanNvbigpO1xyXG5cclxuICAgICAgLy9zZXRJbmRpY2VUeXBlKFwiQkFJXCIpO1xyXG4gICAgICBpZiAoc2VsZWN0ZWRTZW5zb3IpIHtcclxuICAgICAgICBjb25zdCBzZW5zb3IgPSBzZW5zb3JzLmZpbmQoKHMpID0+IHMudGl0bGUgPT09IHNlbGVjdGVkU2Vuc29yLnRpdGxlKTtcclxuICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gXCJXb3JsZHZpZXcyXCIpIHtcclxuICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShcclxuICAgICAgICAgICAgYDEgLyAoKCgwLDEgLSBCJHtzZW5zb3IuYmFuZHNbNF0/LnZhbHVlfSleMikgKyAoKDAsMDYgLSBCJHtzZW5zb3IuYmFuZHNbNl0/LnZhbHVlfSleMikpYFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09IFwiT1dEX0Zhc2F0Q19NU192Ml8yMDI1MDMxMlwiKSB7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoXHJcbiAgICAgICAgICAgIGAxIC8gKCgoMCwxIC0gQiR7c2Vuc29yLmJhbmRzWzBdPy52YWx1ZX0pXjIpICsgKCgwLDA2IC0gQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0pXjIpKWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSBcIkRlZmF1bHRcIikge1xyXG4gICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKFxyXG4gICAgICAgICAgICBgMSAvICgoKDAsMSAtIEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9KV4yKSArICgoMCwwNiAtIEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9KV4yKSlgXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YVZhbGlkYWRhKTtcclxuICAgICAgc2V0Q29sb3IoWzI1NSwgMCwgMCwgMjU1XSk7XHJcbiAgICAgIHNldElucHV0VHlwZUFyZWFNaW4ocGFyc2VGbG9hdChkYXRhVmFsaWRhZGEuZXRpcXVldGFzLmV0aXF1ZXRhXzEpKTtcclxuICAgICAgc2V0SW5wdXRNaW5SYW5nZShwYXJzZUZsb2F0KGRhdGFWYWxpZGFkYS5ldGlxdWV0YXMuZXRpcXVldGFfMykpO1xyXG4gICAgICBzZXRJbnB1dE1heFJhbmdlKHBhcnNlRmxvYXQoZGF0YVZhbGlkYWRhLmV0aXF1ZXRhcy5ldGlxdWV0YV80KSk7XHJcbiAgICAgIHNldElucHV0VHlwZUFyZWFNYXgocGFyc2VGbG9hdChkYXRhVmFsaWRhZGEuZXRpcXVldGFzLmV0aXF1ZXRhXzUpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBlbnZpYXIgbGEgc29saWNpdHVkOlwiLCBlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy9TZSBjcmVhIHVuYSBmdW5jaW9uIHBhcmEgY2FyZ2FyIGxvcyBtb2R1bG9zIGRlIEVzcmlcclxuICBjb25zdCBsb2FkRXNyaU1vZHVsZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgbG9hZE1vZHVsZXMoW1xyXG4gICAgICAgIFwiZXNyaS9sYXllcnMvc3VwcG9ydC9SYXN0ZXJGdW5jdGlvblwiLFxyXG4gICAgICAgIFwiZXNyaS9yZW5kZXJlcnMvUmFzdGVyU3RyZXRjaFJlbmRlcmVyXCIsXHJcbiAgICAgICAgXCJlc3JpL2xheWVycy9JbWFnZXJ5TGF5ZXJcIixcclxuICAgICAgICBcImVzcmkvcmVzdC9xdWVyeVwiLFxyXG4gICAgICAgIFwiZXNyaS93aWRnZXRzL0hpc3RvZ3JhbVwiLFxyXG4gICAgICAgIFwiZXNyaS9yZXF1ZXN0XCIsXHJcbiAgICAgIF0pXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAoW1xyXG4gICAgICAgICAgICBSYXN0ZXJGdW5jdGlvbixcclxuICAgICAgICAgICAgUmFzdGVyU3RyZXRjaFJlbmRlcmVyLFxyXG4gICAgICAgICAgICBJbWFnZXJ5TGF5ZXIsXHJcbiAgICAgICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgICAgICBIaXN0b2dyYW0sXHJcbiAgICAgICAgICAgIGVzcmlSZXF1ZXN0LFxyXG4gICAgICAgICAgXSkgPT4ge1xyXG4gICAgICAgICAgICBlc3JpTW9kdWxlc1JlZi5jdXJyZW50ID0ge1xyXG4gICAgICAgICAgICAgIFJhc3RlckZ1bmN0aW9uLFxyXG4gICAgICAgICAgICAgIFJhc3RlclN0cmV0Y2hSZW5kZXJlcixcclxuICAgICAgICAgICAgICBJbWFnZXJ5TGF5ZXIsXHJcbiAgICAgICAgICAgICAgcXVlcnksXHJcbiAgICAgICAgICAgICAgSGlzdG9ncmFtLFxyXG4gICAgICAgICAgICAgIGVzcmlSZXF1ZXN0LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgRVNSSSBtb2R1bGVzOiBcIiwgZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbW92ZUxheWVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkU2Vuc29yKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nTGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKFxyXG4gICAgICAgIFwiw41uZGljZXMgZXNwZWN0cmFsZXNcIlxyXG4gICAgICApO1xyXG4gICAgICBpZiAoZXhpc3RpbmdMYXllcikge1xyXG4gICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShleGlzdGluZ0xheWVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlbW92ZUxheWVyKCk7XHJcbiAgICBpZiAoc2VsZWN0ZWRTZW5zb3IpIHtcclxuICAgICAgY29uc3Qgc2Vuc29yID0gYXZhaWxhYmxlU2Vuc29ycy5maW5kKFxyXG4gICAgICAgIChzKSA9PiBzLnRpdGxlID09PSBzZWxlY3RlZFNlbnNvci50aXRsZSB8fCBzLnRpdGxlID09PSBcIkRlZmF1bHRcIlxyXG4gICAgICApO1xyXG4gICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gXCJXb3JsZHZpZXcyXCIpIHtcclxuICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoXHJcbiAgICAgICAgICBgKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09IFwiT1dEX0Zhc2F0Q19NU192Ml8yMDI1MDMxMlwiKSB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKFxyXG4gICAgICAgICAgYChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9KWBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSBcIkRlZmF1bHRcIikge1xyXG4gICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShcclxuICAgICAgICAgIGAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbMl0/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbMl0/LnZhbHVlfSlgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldENvbG9yKFswLCAyNTUsIDAsIDI1NV0pO1xyXG4gICAgc2V0SW5wdXRUeXBlQXJlYU1heCgxKTtcclxuICAgIHNldElucHV0VHlwZUFyZWFNaW4oLTEpO1xyXG4gICAgc2V0SW5wdXRNaW5SYW5nZSgwLjMpO1xyXG4gICAgc2V0SW5wdXRNYXhSYW5nZSgwLjcpO1xyXG4gIH0sIFtzZWxlY3RlZFNlbnNvciwgZ2VvcHJvY2Vzc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEVzcmlNb2R1bGVzKCk7XHJcbiAgfSwgW2ppbXVNYXBWaWV3XSk7XHJcblxyXG4gIC8vRWplY3V0YSBsYSBjcmVhY2lvbiBkZWwgbGF5ZXIgZGUgbGFzIGltYWdlbmVzLCB5IGRldGVjdGEgY3VhbmRvIHNlIG1vZGlmaWNhIGVsIGlucHV0IHJhbmdlIHF1ZSBzZSBlbmNhcmdhIGRlIGNhbGN1bGFyIG51ZXZhbWVudGUgZWwgcmFuZ29cclxuICAvL1RhbWJpZW4gY3VhbmRvIGNhbWJpYSBlbCBhcnJheSBkZSBpbWFnZW5lcyBzZWxlY2Npb25hZGFzXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRJbWFnZXJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWRTZW5zb3IpIHtcclxuICAgICAgICBjb25zdCBzZW5zb3IgPSBhdmFpbGFibGVTZW5zb3JzLmZpbmQoXHJcbiAgICAgICAgICAocykgPT4gcy50aXRsZSA9PT0gc2VsZWN0ZWRTZW5zb3IudGl0bGUgfHwgcy50aXRsZSA9PT0gXCJEZWZhdWx0XCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSBcIldvcmxkdmlldzJcIikge1xyXG4gICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKFxyXG4gICAgICAgICAgICBgKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pYFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09IFwiT1dEX0Zhc2F0Q19NU192Ml8yMDI1MDMxMlwiKSB7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoXHJcbiAgICAgICAgICAgIGAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbMF0/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbMF0/LnZhbHVlfSlgXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gXCJEZWZhdWx0XCIpIHtcclxuICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShcclxuICAgICAgICAgICAgYChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9KWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRDb2xvcihbMCwgMjU1LCAwLCAyNTVdKTtcclxuICAgICAgc2V0SW5wdXRUeXBlQXJlYU1heCgxKTtcclxuICAgICAgc2V0SW5wdXRUeXBlQXJlYU1pbigtMSk7XHJcbiAgICAgIHNldElucHV0TWluUmFuZ2UoMC4zKTtcclxuICAgICAgc2V0SW5wdXRNYXhSYW5nZSgwLjcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdGVkSW1hZ2VyaWVzLmxlbmd0aCA9PT0gMCAmJiBqaW11TWFwVmlldykge1xyXG4gICAgICBjb25zdCBleGlzdGluZ0xheWVyID0gamltdU1hcFZpZXcudmlldy5tYXAuZmluZExheWVyQnlJZChcclxuICAgICAgICBcIsONbmRpY2VzIGVzcGVjdHJhbGVzXCJcclxuICAgICAgKTtcclxuICAgICAgaWYgKGV4aXN0aW5nTGF5ZXIpIHtcclxuICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUoZXhpc3RpbmdMYXllcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbc2VsZWN0ZWRJbWFnZXJpZXMsIHNlbGVjdGVkU2Vuc29yXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNGaXJlKSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGluZGljZUJhaSgpLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbaXNGaXJlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0IHdpZGdldE1hc2tcIj5cclxuICAgICAge3Byb3BzLnVzZU1hcFdpZGdldElkcyAmJiBwcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcclxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XHJcbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZU1hc2tcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGg0Pnt0KFwid2lkZ2V0TGFiZWxcIil9PC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2VsZWN0ZWRJbWFnZXJpZXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVjdHJhbC1pbmRleC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICA8cD57dChcInNwZWN0cmFsUnVsZVwiKX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBpZD1cImFjdGl2ZU1hc2syXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFNsaWNlTWFzay1CYXNlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RDbGFzc0luZGljZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmb3JtdWxhU2VsZWN0XCI+e3QoXCJzZWxlY3ROYW1lXCIpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZm9ybXVsYVNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtdWxhQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1wiTkRWSVwifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTkRWSVwiPnt0KFwibmR2aVwiKX0gLSBORFZJPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTQVZJXCI+e3QoXCJzYXZpXCIpfSAtIFNBVkk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5EV0lcIj57dChcIm5kd2lcIil9IC0gTkRXSTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQkFJXCI+e3QoXCJiYWlcIil9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50U2xpY2VNYXNrXCI+XHJcbiAgICAgICAgICAgICAgICA8TXVsdGlSYW5nZVNsaWRlclxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTXVsdGkgcmFuZ2Ugc2xpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgbWF4VmFsdWU9e2lucHV0TWF4UmFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG1pblZhbHVlPXtpbnB1dE1pblJhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBtYXg9e2lucHV0VHlwZUFyZWFNYXh9XHJcbiAgICAgICAgICAgICAgICAgIG1pbj17aW5wdXRUeXBlQXJlYU1pbn1cclxuICAgICAgICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobWluLCBtYXgsIGFjdGl2ZVRodW1iKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVJhbmdlQ2hhbmdlKG1pbiwgbWF4KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN0ZXA9e2lzRmlyZSA/IDAuMDAwMDEgOiAwLjA1fVxyXG4gICAgICAgICAgICAgICAgICB0b29sdGlwXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNYXJjYWRvcmVzIGRlIGzDrW5lYXMgcGVxdWXDsWFzICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItbWFya3NcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItbWFya1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1tYXJrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLW1hcmtcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItbWFya1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1tYXJrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRTbGljZU1hc2tQcmlcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsMU1hc2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW5wdXRUeXBlQXJlYU1pbi50b0ZpeGVkKDQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwxTWFza1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsoaW5wdXRUeXBlQXJlYU1heCAvIDIgKyBpbnB1dFR5cGVBcmVhTWluKS50b0ZpeGVkKDQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2VudGVyTWFzayBsYWJlbDFNYXNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeygoaW5wdXRUeXBlQXJlYU1pbiArIGlucHV0VHlwZUFyZWFNYXgpIC8gMikudG9GaXhlZCg0KX1cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsMU1hc2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7KGlucHV0VHlwZUFyZWFNYXggLyAyKS50b0ZpeGVkKDQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmlnaHRNYXNrIGxhYmVsMU1hc2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW5wdXRUeXBlQXJlYU1heC50b0ZpeGVkKDQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFzay1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIHR5cGU9XCJET05VVFwiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXJJbWFnZXJ5TGF5ZXIoKSwgc2V0SXNBcGxpZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KFwiYXBwbHlcIil9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=