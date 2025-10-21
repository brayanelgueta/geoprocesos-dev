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
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/mask/src/runtime/assets/style.css","webpack://./../../../Nueva%20carpeta/ArcGISExperienceBuilder/client/your-extensions/widgets/mask/src/runtime/assets/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,aAAA;EACA,gBAAA;EACA,YAAA;ACCF;;ADCA;EACE,WAAA;EACA,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,iBAAA;ACEF;;ADAA;EACE,YAAA;EACA,iBAAA;EACA,qBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;ACGF;;ADDA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EAEA;IACE,cAAA;ECGF;AACF;;ADDA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;ACIF;;ADFA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;ACKF;;ADHA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,kHAAA;EAKA,kBAAA;ACEF;;ADAA;EACE,kBAAA;ACGF;;ADDA;EACE,kBAAA;ACIF;;ADFA;EACE,WAAA;ACKF;;ADHA;EACE,UAAA;EACA,gBAAA;ACMF;;ADJA;EACE,UAAA;EACA,eAAA;EACA,YAAA;ACOF;;ADLA;EACE,8BAAA;EACA,aAAA;EACA,mBAAA;ACQF;;ADNA;EACE,YAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;ACSF;;ADPA;EACE,UAAA;EACA,gBAAA;EAEA;IACE,WAAA;ECSF;AACF;;ADPA;EACE,eAAA;ACUF;;ADRA;EACE,qBAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,kCAAA;EACA,mCAAA;EACA,YAAA;ACWF;;ADRA;EACE,WAAA;EACA,YAAA;ACWF;;ADRA;EACE,yBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;ACWF;;ADRA;EACE,aAAA;EACA,8BAAA;ACWF;;ADTA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA;IACE,SAAA;IACA,UAAA;IACA,eAAA;IACA,WAAA;ECYF;AACF;;ADVA;EACE,aAAA;EACA,2BAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EAEA;IACE,yBAAA;IACA,cAAA;IACA,oBAAA;IACA,YAAA;IACA,WAAA;IACA,yBAAA;IAEA;MACE,yBAAA;MACA,oCAAA;MACA,wCAAA;ICWF;EACF;AACF;;ADTA;EACE,UAAA;ACYF;;ADVA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,qBAAA;ACaF;;ADVA;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;ACaF;;ADVA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;ACaF;;ADVA;EACE,kBAAA;EACA,MAAA;EACA,2BAAA;EACA,eAAA;EACA,WAAA;EACA,mBAAA;EACA,oBAAA;ACaF;;ADXA;EACE;IACE,wBAAA;IACA,mBAAA;ECcF;AACF;;ADXA;EACE,8BAAA;EACA,WAAA;EACA,UAAA;ACcF;;ADZA;EACE,sBAAA;ACeF","sourcesContent":[".widgetMask {\n  background-color: #052042;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 15px;\n  overflow: hidden;\n  color: white;\n}\n\n.interHome {\n  height: 75%;\n  width: 100%;\n  justify-content: left;\n  text-align: left;\n  padding-top: 10px;\n}\n\n.contentSliceMask-Base {\n  height: 100%;\n  min-height: 180px;\n  justify-content: left;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0.3rem;\n}\n\n.contentSliceMask {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  .slider input {\n    color: #008ecc;\n  }\n}\n\n.contentSliceMaskPri {\n  width: 100%;\n  height: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.label1Mask {\n  width: 80px;\n  height: 20px;\n  text-align: center;\n  font-size: 12px;\n}\n\n.rangeInputMask {\n  height: 20px;\n  width: 400px;\n  height: 0.5em;\n  display: block;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4039215686) calc((var(--value) + 1) * 50%), #004a98 0);\n  border-radius: 3px;\n}\n\n.centerMask {\n  text-align: center;\n}\n\n.rightMask {\n  text-align: center;\n}\n\n.porcentajeClassMask {\n  width: 80px;\n}\n\n.intermedioNegativo {\n  width: 75%;\n  margin-left: 25%;\n}\n\n.intermedioPositivo {\n  width: 75%;\n  text-align: end;\n  height: 20px;\n}\n\n.selectClassIndice {\n  justify-content: space-between;\n  display: flex;\n  margin-bottom: 15px;\n}\n\n.selectClassIndice label {\n  width: 200px;\n  font-size: 13px;\n  height: 23px;\n  padding-top: 5px;\n}\n\n.selectClassIndice select {\n  width: 70%;\n  max-width: 400px;\n  &:hover {\n    color: #fff;\n  }\n}\n\n.contentBtnVolver {\n  padding-top: 5%;\n}\n\n.btnWidgetsPri {\n  text-decoration: none;\n  border: none;\n  box-shadow: none;\n  height: 30px;\n  width: auto;\n  border-radius: 5px;\n  font-weight: 700;\n  background-color: rgb(15, 89, 194);\n  border: solid 2px rgb(78, 151, 255);\n  color: white;\n}\n\n#contentIndicesNomales {\n  width: 100%;\n  height: 100%;\n}\n\n.btnMask {\n  background-color: #6a6969;\n  color: white;\n  width: auto;\n  height: 30px;\n  text-decoration: none;\n  border: none;\n  margin: 6px;\n  border-radius: 5px;\n  padding: 6px 20px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n#contentConsultaBai {\n  display: flex;\n  justify-content: space-between;\n}\n\n.spectral-index-description {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: start;\n  align-items: start;\n  p {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    color: #fff;\n  }\n}\n\n.mask-buttons {\n  display: flex;\n  justify-content: flex-start;\n  gap: 1rem;\n  width: 35%;\n  margin-top: auto;\n  button {\n    background-color: #1a5276;\n    flex: 0 0 auto;\n    padding: 0.5rem 2rem;\n    height: 2rem;\n    width: 100%;\n    transition: all 0.3s ease;\n    &:hover {\n      border: 1px solid #008ecc;\n      background-color: #052042 !important;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n}\n\n.slider {\n  padding: 0;\n}\n\n.slider-marks {\n  position: relative;\n  width: 100%;\n  height: 12px;\n  margin-bottom: 4px;\n  padding: 0 0.3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.slider-mark {\n  position: relative;\n  width: 2px;\n  height: 8px;\n  background: #fff;\n  opacity: 0.7;\n  border-radius: 1px;\n  z-index: 2;\n}\n\n.slider-labels {\n  position: relative;\n  width: 100%;\n  height: 20px;\n  margin-top: 2px;\n}\n\n.slider-label {\n  position: absolute;\n  top: 0;\n  transform: translateX(-50%);\n  font-size: 12px;\n  color: #fff;\n  white-space: nowrap;\n  pointer-events: none;\n}\n\n.multi-range-slider {\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: #1a5276;\n  }\n}\n\n.multi-range-slider--range {\n  background: #008ecc !important;\n  height: 4px;\n  opacity: 1;\n}\n\n.multi-range-slider--track {\n  height: 4px !important;\n}",".widgetMask {\n  background-color: #052042;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 15px;\n  overflow: hidden;\n  color: white;\n}\n\n.interHome {\n  height: 75%;\n  width: 100%;\n  justify-content: left;\n  text-align: left;\n  padding-top: 10px;\n}\n\n.contentSliceMask-Base {\n  height: 100%;\n  min-height: 180px;\n  justify-content: left;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0.3rem;\n}\n\n.contentSliceMask {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  .slider input {\n    color: #008ecc;\n  }\n}\n\n.contentSliceMaskPri {\n  width: 100%;\n  height: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.label1Mask {\n  width: 80px;\n  height: 20px;\n  text-align: center;\n  font-size: 12px;\n}\n\n.rangeInputMask {\n  height: 20px;\n  width: 400px;\n  height: 0.5em;\n  display: block;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4039215686) calc((var(--value) + 1) * 50%), #004a98 0);\n  border-radius: 3px;\n}\n\n.centerMask {\n  text-align: center;\n}\n\n.rightMask {\n  text-align: center;\n}\n\n.porcentajeClassMask {\n  width: 80px;\n}\n\n.intermedioNegativo {\n  width: 75%;\n  margin-left: 25%;\n}\n\n.intermedioPositivo {\n  width: 75%;\n  text-align: end;\n  height: 20px;\n}\n\n.selectClassIndice {\n  justify-content: space-between;\n  display: flex;\n  margin-bottom: 15px;\n}\n\n.selectClassIndice label {\n  width: 200px;\n  font-size: 13px;\n  height: 23px;\n  padding-top: 5px;\n}\n\n.selectClassIndice select {\n  width: 70%;\n  max-width: 400px;\n  &:hover {\n    color: #fff;\n  }\n}\n\n.contentBtnVolver {\n  padding-top: 5%;\n}\n\n.btnWidgetsPri {\n  text-decoration: none;\n  border: none;\n  box-shadow: none;\n  height: 30px;\n  width: auto;\n  border-radius: 5px;\n  font-weight: 700;\n  background-color: rgb(15, 89, 194);\n  border: solid 2px rgb(78, 151, 255);\n  color: white;\n}\n\n#contentIndicesNomales {\n  width: 100%;\n  height: 100%;\n}\n\n.btnMask {\n  background-color: #6a6969;\n  color: white;\n  width: auto;\n  height: 30px;\n  text-decoration: none;\n  border: none;\n  margin: 6px;\n  border-radius: 5px;\n  padding: 6px 20px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n#contentConsultaBai {\n  display: flex;\n  justify-content: space-between;\n}\n\n.spectral-index-description {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: start;\n  align-items: start;\n  p {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    color: #fff;\n  }\n}\n\n.mask-buttons {\n  display: flex;\n  justify-content: flex-start;\n  gap: 1rem;\n  width: 35%;\n  margin-top: auto;\n  button {\n    background-color: #1a5276;\n    flex: 0 0 auto;\n    padding: 0.5rem 2rem;\n    height: 2rem;\n    width: 100%;\n    transition: all 0.3s ease;\n    &:hover {\n      border: 1px solid #008ecc;\n      background-color: #052042 !important;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n}\n\n.slider {\n  padding: 0;\n}\n\n.slider-marks {\n  position: relative;\n  width: 100%;\n  height: 12px;\n  margin-bottom: 4px;\n  padding: 0 0.3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.slider-mark {\n  position: relative;\n  width: 2px;\n  height: 8px;\n  background: #fff;\n  opacity: 0.7;\n  border-radius: 1px;\n  z-index: 2;\n}\n\n.slider-labels {\n  position: relative;\n  width: 100%;\n  height: 20px;\n  margin-top: 2px;\n}\n\n.slider-label {\n  position: absolute;\n  top: 0;\n  transform: translateX(-50%);\n  font-size: 12px;\n  color: #fff;\n  white-space: nowrap;\n  pointer-events: none;\n}\n\n.multi-range-slider {\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: #1a5276;\n  }\n}\n\n.multi-range-slider--range {\n  background: #008ecc !important;\n  height: 4px;\n  opacity: 1;\n}\n\n.multi-range-slider--track {\n  height: 4px !important;\n}"],"sourceRoot":""}]);
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
    const { t } = (0,_hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__.useLocale)(_translations__WEBPACK_IMPORTED_MODULE_6__.translations);
    const selectedImageries = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedImages; });
    const selectedSensor = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedSensor; });
    const geoprocess = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.geoprocess; });
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
            const img1Data = selectedImageries[0].OBJECTID;
            const proceso = 5;
            const entrada = img1Data;
            var urlConsulta = `http://127.0.0.1:5000/proxy?proceso=${proceso}&Entrada=${entrada}&url=${selectedSensor.url}`;
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
            (0,esri_loader__WEBPACK_IMPORTED_MODULE_2__.loadModules)([
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
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: activeViewChangeHandler })),
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
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'contentSliceMask' },
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.MultiRangeSlider, { "aria-label": "Multi range slider", maxValue: inputMaxRange, minValue: inputMinRange, max: inputTypeAreaMax, min: inputTypeAreaMin, onAcceptValue: () => { }, onChange: (min, max, activeThumb) => handleRangeChange(min, max), step: isFire ? 0.00001 : 0.05, tooltip: true }),
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
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'mask-buttons' }, loading === true ? (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: "sm", type: "primary" },
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Loading, { type: "DONUT", height: 20, width: 20 })))
                                :
                                    (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { onClick: () => { crearImageryLayer(), setIsAplied(true); }, size: "sm", type: "primary" }, t("apply"))))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXNrL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDakI7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyw0UEFBNFAsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFV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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0Esa0RBQWtELGtDQUFrQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsWUFBWSxJQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDLENBQUMsQ0FBQyxDQUNqQiw0REFBQywyQ0FBTSxJQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVM7Z0NBQzlCLDREQUFDLDRDQUFPLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUksQ0FDeEMsQ0FDVjtnQ0FDQyxDQUFDO29DQUNELENBQ0UsNERBQUMsMkNBQU0sSUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsaUJBQWlCLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVMsSUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQVUsQ0FDbEgsQ0FFRCxDQUNGLENBQ0YsQ0FDUCxDQUlELENBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsaUVBQWUsTUFBTSxFQUFDO0FBQ2QsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFzay9zcmMvcnVudGltZS9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL2VzcmktbG9hZGVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vbW9kdWxlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL3V0aWxzL2Nzcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vdXRpbHMvdXJsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXNrL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3M/MjJkOSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvaG9va3MvdXNlTG9jYWxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXNrL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2Rpc3QvcmVhY3QtcmVkdXgubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXNrL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC53aWRnZXRNYXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnRlckhvbWUge1xuICBoZWlnaHQ6IDc1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5jb250ZW50U2xpY2VNYXNrLUJhc2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjNyZW07XG59XG5cbi5jb250ZW50U2xpY2VNYXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAuc2xpZGVyIGlucHV0IHtcbiAgICBjb2xvcjogIzAwOGVjYztcbiAgfVxufVxuXG4uY29udGVudFNsaWNlTWFza1ByaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxhYmVsMU1hc2sge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnJhbmdlSW5wdXRNYXNrIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMC41ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40MDM5MjE1Njg2KSBjYWxjKCh2YXIoLS12YWx1ZSkgKyAxKSAqIDUwJSksICMwMDRhOTggMCk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmNlbnRlck1hc2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yaWdodE1hc2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb3JjZW50YWplQ2xhc3NNYXNrIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5pbnRlcm1lZGlvTmVnYXRpdm8ge1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uaW50ZXJtZWRpb1Bvc2l0aXZvIHtcbiAgd2lkdGg6IDc1JTtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5zZWxlY3RDbGFzc0luZGljZSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnNlbGVjdENsYXNzSW5kaWNlIGxhYmVsIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGhlaWdodDogMjNweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnNlbGVjdENsYXNzSW5kaWNlIHNlbGVjdCB7XG4gIHdpZHRoOiA3MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi5jb250ZW50QnRuVm9sdmVyIHtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4uYnRuV2lkZ2V0c1ByaSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgODksIDE5NCk7XG4gIGJvcmRlcjogc29saWQgMnB4IHJnYig3OCwgMTUxLCAyNTUpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNjb250ZW50SW5kaWNlc05vbWFsZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYnRuTWFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YTY5Njk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMzBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jY29udGVudENvbnN1bHRhQmFpIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3BlY3RyYWwtaW5kZXgtZGVzY3JpcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4ubWFzay1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDFyZW07XG4gIHdpZHRoOiAzNSU7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhlY2M7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIH1cbiAgfVxufVxuXG4uc2xpZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNsaWRlci1tYXJrcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBwYWRkaW5nOiAwIDAuM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5zbGlkZXItbWFyayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNztcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4uc2xpZGVyLWxhYmVscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uc2xpZGVyLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5tdWx0aS1yYW5nZS1zbGlkZXIge1xuICBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjMWE1Mjc2O1xuICB9XG59XG5cbi5tdWx0aS1yYW5nZS1zbGlkZXItLXJhbmdlIHtcbiAgYmFja2dyb3VuZDogIzAwOGVjYyAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDRweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm11bHRpLXJhbmdlLXNsaWRlci0tdHJhY2sge1xuICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFzay9zcmMvcnVudGltZS9hc3NldHMvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9OdWV2YSUyMGNhcnBldGEvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hc2svc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUE7SUFDRSxjQUFBO0VDR0Y7QUFDRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0hBQUE7RUFLQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxXQUFBO0FDS0Y7O0FESEE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURKQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ09GOztBRExBO0VBQ0UsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNRRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDU0Y7O0FEUEE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFFQTtJQUNFLFdBQUE7RUNTRjtBQUNGOztBRFBBO0VBQ0UsZUFBQTtBQ1VGOztBRFJBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtBQ1dGOztBRFJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNXRjs7QURSQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDV0Y7O0FEUkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNXRjs7QURUQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQTtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUNZRjtBQUNGOztBRFZBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUVBO0lBQ0UseUJBQUE7SUFDQSxjQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLHlCQUFBO0lBRUE7TUFDRSx5QkFBQTtNQUNBLG9DQUFBO01BQ0Esd0NBQUE7SUNXRjtFQUNGO0FBQ0Y7O0FEVEE7RUFDRSxVQUFBO0FDWUY7O0FEVkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDYUY7O0FEVkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDYUY7O0FEVkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ2FGOztBRFZBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNhRjs7QURYQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxtQkFBQTtFQ2NGO0FBQ0Y7O0FEWEE7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDY0Y7O0FEWkE7RUFDRSxzQkFBQTtBQ2VGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53aWRnZXRNYXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW50ZXJIb21lIHtcXG4gIGhlaWdodDogNzUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi5jb250ZW50U2xpY2VNYXNrLUJhc2Uge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTgwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbn1cXG5cXG4uY29udGVudFNsaWNlTWFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAuc2xpZGVyIGlucHV0IHtcXG4gICAgY29sb3I6ICMwMDhlY2M7XFxuICB9XFxufVxcblxcbi5jb250ZW50U2xpY2VNYXNrUHJpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sYWJlbDFNYXNrIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ucmFuZ2VJbnB1dE1hc2sge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAwLjVlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDAzOTIxNTY4NikgY2FsYygodmFyKC0tdmFsdWUpICsgMSkgKiA1MCUpLCAjMDA0YTk4IDApO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uY2VudGVyTWFzayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yaWdodE1hc2sge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9yY2VudGFqZUNsYXNzTWFzayB7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuLmludGVybWVkaW9OZWdhdGl2byB7XFxuICB3aWR0aDogNzUlO1xcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuXFxuLmludGVybWVkaW9Qb3NpdGl2byB7XFxuICB3aWR0aDogNzUlO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc2VsZWN0Q2xhc3NJbmRpY2Uge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5zZWxlY3RDbGFzc0luZGljZSBsYWJlbCB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBoZWlnaHQ6IDIzcHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG4uc2VsZWN0Q2xhc3NJbmRpY2Ugc2VsZWN0IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbn1cXG5cXG4uY29udGVudEJ0blZvbHZlciB7XFxuICBwYWRkaW5nLXRvcDogNSU7XFxufVxcblxcbi5idG5XaWRnZXRzUHJpIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDg5LCAxOTQpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDc4LCAxNTEsIDI1NSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNjb250ZW50SW5kaWNlc05vbWFsZXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5idG5NYXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YTY5Njk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMzBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNnB4IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudENvbnN1bHRhQmFpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zcGVjdHJhbC1pbmRleC1kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG59XFxuXFxuLm1hc2stYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDM1JTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhlY2M7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MiAhaW1wb3J0YW50O1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnNsaWRlciB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2xpZGVyLW1hcmtzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgcGFkZGluZzogMCAwLjNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc2xpZGVyLW1hcmsge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5zbGlkZXItbGFiZWxzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG5cXG4uc2xpZGVyLWxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubXVsdGktcmFuZ2Utc2xpZGVyIHtcXG4gIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogIzFhNTI3NjtcXG4gIH1cXG59XFxuXFxuLm11bHRpLXJhbmdlLXNsaWRlci0tcmFuZ2Uge1xcbiAgYmFja2dyb3VuZDogIzAwOGVjYyAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubXVsdGktcmFuZ2Utc2xpZGVyLS10cmFjayB7XFxuICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xcbn1cIixcIi53aWRnZXRNYXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW50ZXJIb21lIHtcXG4gIGhlaWdodDogNzUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi5jb250ZW50U2xpY2VNYXNrLUJhc2Uge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTgwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbn1cXG5cXG4uY29udGVudFNsaWNlTWFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAuc2xpZGVyIGlucHV0IHtcXG4gICAgY29sb3I6ICMwMDhlY2M7XFxuICB9XFxufVxcblxcbi5jb250ZW50U2xpY2VNYXNrUHJpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sYWJlbDFNYXNrIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ucmFuZ2VJbnB1dE1hc2sge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAwLjVlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDAzOTIxNTY4NikgY2FsYygodmFyKC0tdmFsdWUpICsgMSkgKiA1MCUpLCAjMDA0YTk4IDApO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uY2VudGVyTWFzayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yaWdodE1hc2sge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9yY2VudGFqZUNsYXNzTWFzayB7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuLmludGVybWVkaW9OZWdhdGl2byB7XFxuICB3aWR0aDogNzUlO1xcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuXFxuLmludGVybWVkaW9Qb3NpdGl2byB7XFxuICB3aWR0aDogNzUlO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc2VsZWN0Q2xhc3NJbmRpY2Uge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5zZWxlY3RDbGFzc0luZGljZSBsYWJlbCB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBoZWlnaHQ6IDIzcHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG4uc2VsZWN0Q2xhc3NJbmRpY2Ugc2VsZWN0IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbn1cXG5cXG4uY29udGVudEJ0blZvbHZlciB7XFxuICBwYWRkaW5nLXRvcDogNSU7XFxufVxcblxcbi5idG5XaWRnZXRzUHJpIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDg5LCAxOTQpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDc4LCAxNTEsIDI1NSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNjb250ZW50SW5kaWNlc05vbWFsZXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5idG5NYXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YTY5Njk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMzBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNnB4IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudENvbnN1bHRhQmFpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zcGVjdHJhbC1pbmRleC1kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG59XFxuXFxuLm1hc2stYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDM1JTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhlY2M7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MiAhaW1wb3J0YW50O1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnNsaWRlciB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2xpZGVyLW1hcmtzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgcGFkZGluZzogMCAwLjNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc2xpZGVyLW1hcmsge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5zbGlkZXItbGFiZWxzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG5cXG4uc2xpZGVyLWxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubXVsdGktcmFuZ2Utc2xpZGVyIHtcXG4gIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogIzFhNTI3NjtcXG4gIH1cXG59XFxuXFxuLm11bHRpLXJhbmdlLXNsaWRlci0tcmFuZ2Uge1xcbiAgYmFja2dyb3VuZDogIzAwOGVjYyAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubXVsdGktcmFuZ2Utc2xpZGVyLS10cmFjayB7XFxuICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qXG4gIENvcHlyaWdodCAoYykgMjAyMiBFc3JpXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vLyByZS1leHBvcnQgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG5leHBvcnQgeyBsb2FkTW9kdWxlcyB9IGZyb20gJy4vbW9kdWxlcyc7XG5leHBvcnQgeyBnZXRTY3JpcHQsIGlzTG9hZGVkLCBsb2FkU2NyaXB0LCBzZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vc2NyaXB0JztcbmV4cG9ydCB7IGxvYWRDc3MgfSBmcm9tICcuL3V0aWxzL2Nzcyc7XG5leHBvcnQgeyB1dGlscyB9O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGdldFNjcmlwdCwgaXNMb2FkZWQsIGxvYWRTY3JpcHQgfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG4vLyB3cmFwIERvam8ncyByZXF1aXJlKCkgaW4gYSBwcm9taXNlXG5mdW5jdGlvbiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKSB7XG4gICAgcmV0dXJuIG5ldyB1dGlscy5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgbG9hZGluZyB0aGUgZXNyaS9kb2pvIHNjcmlwdHMsIHJlamVjdCB3aXRoIHRoZSBlcnJvci5cbiAgICAgICAgdmFyIGVycm9ySGFuZGxlciA9IHdpbmRvd1sncmVxdWlyZSddLm9uKCdlcnJvcicsIHJlamVjdCk7XG4gICAgICAgIHdpbmRvd1sncmVxdWlyZSddKG1vZHVsZXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlbW92ZSBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICBlcnJvckhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIHdpdGggdGhlIHBhcmFtZXRlcnMgZnJvbSBkb2pvIHJlcXVpcmUgYXMgYW4gYXJyYXkuXG4gICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbiBhcnJheSBvZiB0aGUgcmVxdWlyZWQgbW9kdWxlc1xuLy8gYWxzbyB3aWxsIGF0dGVtcHQgdG8gbGF6eSBsb2FkIHRoZSBBcmNHSVMgQVBJIGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGxvYWRlZFxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNb2R1bGVzKG1vZHVsZXMsIGxvYWRTY3JpcHRPcHRpb25zKSB7XG4gICAgaWYgKGxvYWRTY3JpcHRPcHRpb25zID09PSB2b2lkIDApIHsgbG9hZFNjcmlwdE9wdGlvbnMgPSB7fTsgfVxuICAgIGlmICghaXNMb2FkZWQoKSkge1xuICAgICAgICAvLyBzY3JpcHQgaXMgbm90IHlldCBsb2FkZWQsIGlzIGl0IGluIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmc/XG4gICAgICAgIHZhciBzY3JpcHQgPSBnZXRTY3JpcHQoKTtcbiAgICAgICAgdmFyIHNyYyA9IHNjcmlwdCAmJiBzY3JpcHQuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgaWYgKCFsb2FkU2NyaXB0T3B0aW9ucy51cmwgJiYgc3JjKSB7XG4gICAgICAgICAgICAvLyBzY3JpcHQgaXMgc3RpbGwgbG9hZGluZyBhbmQgdXNlciBkaWQgbm90IHNwZWNpZnkgYSBVUkxcbiAgICAgICAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIGRlZmF1bHQgdG8gdGhlIFVSTCB0aGF0J3MgYmVpbmcgbG9hZGVkXG4gICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGRlZmF1bHRpbmcgdG8gdGhlIGxhdGVzdCA0LnggVVJMXG4gICAgICAgICAgICBsb2FkU2NyaXB0T3B0aW9ucy51cmwgPSBzcmM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXR0ZW1wdCB0byBsb2FkIHRoZSBzY3JpcHQgdGhlbiBsb2FkIHRoZSBtb2R1bGVzXG4gICAgICAgIHJldHVybiBsb2FkU2NyaXB0KGxvYWRTY3JpcHRPcHRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlcXVpcmVNb2R1bGVzKG1vZHVsZXMpOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHNjcmlwdCBpcyBhbHJlYWR5IGxvYWRlZCwganVzdCBsb2FkIHRoZSBtb2R1bGVzXG4gICAgICAgIHJldHVybiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKTtcbiAgICB9XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgbG9hZENzcyB9IGZyb20gJy4vdXRpbHMvY3NzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IGdldENkblVybCB9IGZyb20gJy4vdXRpbHMvdXJsJztcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZnVuY3Rpb24gY3JlYXRlU2NyaXB0KHVybCkge1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1lc3JpLWxvYWRlcicsICdsb2FkaW5nJyk7XG4gICAgcmV0dXJuIHNjcmlwdDtcbn1cbi8vIGFkZCBhIG9uZS10aW1lIGxvYWQgaGFuZGxlciB0byBzY3JpcHRcbi8vIGFuZCBvcHRpb25hbGx5IGFkZCBhIG9uZSB0aW1lIGVycm9yIGhhbmRsZXIgYXMgd2VsbFxuZnVuY3Rpb24gaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIGNhbGxiYWNrLCBlcnJiYWNrKSB7XG4gICAgdmFyIG9uU2NyaXB0RXJyb3I7XG4gICAgaWYgKGVycmJhY2spIHtcbiAgICAgICAgLy8gc2V0IHVwIGFuIGVycm9yIGhhbmRsZXIgYXMgd2VsbFxuICAgICAgICBvblNjcmlwdEVycm9yID0gaGFuZGxlU2NyaXB0RXJyb3Ioc2NyaXB0LCBlcnJiYWNrKTtcbiAgICB9XG4gICAgdmFyIG9uU2NyaXB0TG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gcGFzcyB0aGUgc2NyaXB0IHRvIHRoZSBjYWxsYmFja1xuICAgICAgICBjYWxsYmFjayhzY3JpcHQpO1xuICAgICAgICAvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uU2NyaXB0TG9hZCwgZmFsc2UpO1xuICAgICAgICBpZiAob25TY3JpcHRFcnJvcikge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBlcnJvciBsaXN0ZW5lciBhcyB3ZWxsXG4gICAgICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25TY3JpcHRMb2FkLCBmYWxzZSk7XG59XG4vLyBhZGQgYSBvbmUtdGltZSBlcnJvciBoYW5kbGVyIHRvIHRoZSBzY3JpcHRcbmZ1bmN0aW9uIGhhbmRsZVNjcmlwdEVycm9yKHNjcmlwdCwgY2FsbGJhY2spIHtcbiAgICB2YXIgb25TY3JpcHRFcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIHJlamVjdCB0aGUgcHJvbWlzZSBhbmQgcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgY2FsbGJhY2soZS5lcnJvciB8fCBuZXcgRXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgYXR0ZW1wdGluZyB0byBsb2FkIFwiLmNvbmNhdChzY3JpcHQuc3JjKSkpO1xuICAgICAgICAvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgfTtcbiAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgcmV0dXJuIG9uU2NyaXB0RXJyb3I7XG59XG4vLyBhbGxvdyB0aGUgdXNlciB0byBjb25maWd1cmUgZGVmYXVsdCBzY3JpcHQgb3B0aW9ucyByYXRoZXIgdGhhbiBwYXNzaW5nIG9wdGlvbnMgdG8gYGxvYWRNb2R1bGVzYCBlYWNoIHRpbWVcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBkZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG59XG4vLyBnZXQgdGhlIHNjcmlwdCBpbmplY3RlZCBieSB0aGlzIGxpYnJhcnlcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JpcHQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLWVzcmktbG9hZGVyXScpO1xufVxuLy8gaGFzIEFyY0dJUyBBUEkgYmVlbiBsb2FkZWQgb24gdGhlIHBhZ2UgeWV0P1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9hZGVkKCkge1xuICAgIHZhciBnbG9iYWxSZXF1aXJlID0gd2luZG93WydyZXF1aXJlJ107XG4gICAgLy8gLm9uKCkgZW5zdXJlcyB0aGF0IGl0J3MgRG9qbydzIEFNRCBsb2FkZXJcbiAgICByZXR1cm4gZ2xvYmFsUmVxdWlyZSAmJiBnbG9iYWxSZXF1aXJlLm9uO1xufVxuLy8gbG9hZCB0aGUgQXJjR0lTIEFQSSBvbiB0aGUgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTY3JpcHQob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgLy8gd2Ugd291bGQgaGF2ZSBsaWtlZCB0byB1c2Ugc3ByZWFkIGxpa2UgeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9XG4gICAgLy8gYnV0IFRTIHdvdWxkIGluamVjdCBhIHBvbHlmaWxsIHRoYXQgd291bGQgcmVxdWlyZSB1c2UgdG8gY29uZmlndXJlIHJvbGx1cCB3IGNvbnRlbnQ6ICd3aW5kb3cnXG4gICAgLy8gaWYgd2UgaGF2ZSBhbm90aGVyIG9jY2FzaW9uIHRvIHVzZSBzcHJlYWQsIGxldCdzIGRvIHRoYXQgYW5kIHJlcGxhY2UgdGhpcyBmb3IuLi5pblxuICAgIHZhciBvcHRzID0ge307XG4gICAgW2RlZmF1bHRPcHRpb25zLCBvcHRpb25zXS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIG9wdHNbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBVUkwgdG8gbG9hZFxuICAgIHZhciB2ZXJzaW9uID0gb3B0cy52ZXJzaW9uO1xuICAgIHZhciB1cmwgPSBvcHRzLnVybCB8fCBnZXRDZG5VcmwodmVyc2lvbik7XG4gICAgcmV0dXJuIG5ldyB1dGlscy5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9IGdldFNjcmlwdCgpO1xuICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgICAvLyB0aGUgQVBJIGlzIGFscmVhZHkgbG9hZGVkIG9yIGluIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmcuLi5cbiAgICAgICAgICAgIC8vIE5PVEU6IGhhdmUgdG8gdGVzdCBhZ2FpbnN0IHNjciBhdHRyaWJ1dGUgdmFsdWUsIG5vdCBzY3JpcHQuc3JjXG4gICAgICAgICAgICAvLyBiL2MgdGhlIGxhdHRlciB3aWxsIHJldHVybiB0aGUgZnVsbCB1cmwgZm9yIHJlbGF0aXZlIHBhdGhzXG4gICAgICAgICAgICB2YXIgc3JjID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgICAgICBpZiAoc3JjICE9PSB1cmwpIHtcbiAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSB0cnlpbmcgdG8gbG9hZCBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIHRoZSBBUElcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQgKFwiLmNvbmNhdChzcmMsIFwiKS5cIikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzY3JpcHQgaGFzIGFscmVhZHkgc3VjY2Vzc2Z1bGx5IGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciB0aGUgc2NyaXB0IHRvIGxvYWQgYW5kIHRoZW4gcmVzb2x2ZVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBBUEkgaGFzIGJlZW4gbG9hZGVkIGJ5IHNvbWUgb3RoZXIgbWVhbnNcbiAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSB0cnlpbmcgdG8gbG9hZCBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIHRoZSBBUElcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQuXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYXR0ZW1wdGluZyB0byBsb2FkIHRoZSBBUElcbiAgICAgICAgICAgICAgICB2YXIgY3NzID0gb3B0cy5jc3M7XG4gICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlVmVyc2lvbiA9IGNzcyA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCB0aGUgY3NzIGJlZm9yZSBsb2FkaW5nIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgbG9hZENzcyh1c2VWZXJzaW9uID8gdmVyc2lvbiA6IGNzcywgb3B0cy5pbnNlcnRDc3NCZWZvcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBzY3JpcHQgb2JqZWN0IHdob3NlIHNvdXJjZSBwb2ludHMgdG8gdGhlIEFQSVxuICAgICAgICAgICAgICAgIHNjcmlwdCA9IGNyZWF0ZVNjcmlwdCh1cmwpO1xuICAgICAgICAgICAgICAgIC8vIF9jdXJyZW50VXJsID0gdXJsO1xuICAgICAgICAgICAgICAgIC8vIG9uY2UgdGhlIHNjcmlwdCBpcyBsb2FkZWQuLi5cbiAgICAgICAgICAgICAgICBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHN0YXR1cyBvZiB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXNyaS1sb2FkZXInLCAnbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICAgICAgICAgIC8vIGxvYWQgdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGdldENkbkNzc1VybCwgcGFyc2VWZXJzaW9uIH0gZnJvbSAnLi91cmwnO1xuZnVuY3Rpb24gY3JlYXRlU3R5bGVzaGVldExpbmsoaHJlZikge1xuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgcmV0dXJuIGxpbms7XG59XG5mdW5jdGlvbiBpbnNlcnRMaW5rKGxpbmssIGJlZm9yZSkge1xuICAgIGlmIChiZWZvcmUpIHtcbiAgICAgICAgLy8gdGhlIGxpbmsgc2hvdWxkIGJlIGluc2VydGVkIGJlZm9yZSBhIHNwZWNpZmljIG5vZGVcbiAgICAgICAgdmFyIGJlZm9yZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJlZm9yZSk7XG4gICAgICAgIGJlZm9yZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGluaywgYmVmb3JlTm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBhcHBlbmQgdGhlIGxpbmsgdG8gdGhlbiBlbmQgb2YgdGhlIGhlYWQgdGFnXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfVxufVxuLy8gY2hlY2sgaWYgdGhlIGNzcyB1cmwgaGFzIGJlZW4gaW5qZWN0ZWQgb3IgYWRkZWQgbWFudWFsbHlcbmZ1bmN0aW9uIGdldENzcyh1cmwpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbaHJlZio9XFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIl1cIikpO1xufVxuZnVuY3Rpb24gZ2V0Q3NzVXJsKHVybE9yVmVyc2lvbikge1xuICAgIHJldHVybiAhdXJsT3JWZXJzaW9uIHx8IHBhcnNlVmVyc2lvbih1cmxPclZlcnNpb24pXG4gICAgICAgIC8vIGlmIGl0J3MgYSB2YWxpZCB2ZXJzaW9uIHN0cmluZyByZXR1cm4gdGhlIENETiBVUkxcbiAgICAgICAgPyBnZXRDZG5Dc3NVcmwodXJsT3JWZXJzaW9uKVxuICAgICAgICAvLyBvdGhlcndpc2UgYXNzdW1lIGl0J3MgYSBVUkwgYW5kIHJldHVybiB0aGF0XG4gICAgICAgIDogdXJsT3JWZXJzaW9uO1xufVxuLy8gbGF6eSBsb2FkIHRoZSBDU1MgbmVlZGVkIGZvciB0aGUgQXJjR0lTIEFQSVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDc3ModXJsT3JWZXJzaW9uLCBiZWZvcmUpIHtcbiAgICB2YXIgdXJsID0gZ2V0Q3NzVXJsKHVybE9yVmVyc2lvbik7XG4gICAgdmFyIGxpbmsgPSBnZXRDc3ModXJsKTtcbiAgICBpZiAoIWxpbmspIHtcbiAgICAgICAgLy8gY3JlYXRlICYgbG9hZCB0aGUgY3NzIGxpbmtcbiAgICAgICAgbGluayA9IGNyZWF0ZVN0eWxlc2hlZXRMaW5rKHVybCk7XG4gICAgICAgIGluc2VydExpbmsobGluaywgYmVmb3JlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbms7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuLy8gYWxsb3cgY29uc3VtaW5nIGxpYnJhcmllcyB0byBwcm92aWRlIHRoZWlyIG93biBQcm9taXNlIGltcGxlbWVudGF0aW9uc1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIFByb21pc2U6IGlzQnJvd3NlciA/IHdpbmRvd1snUHJvbWlzZSddIDogdW5kZWZpbmVkXG59O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbnZhciBERUZBVUxUX1ZFUlNJT04gPSAnNC4yNSc7XG52YXIgTkVYVCA9ICduZXh0JztcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZlcnNpb24odmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uLnRvTG93ZXJDYXNlKCkgPT09IE5FWFQpIHtcbiAgICAgICAgcmV0dXJuIE5FWFQ7XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHZlcnNpb24gJiYgdmVyc2lvbi5tYXRjaCgvXihcXGQpXFwuKFxcZCspLyk7XG4gICAgcmV0dXJuIG1hdGNoICYmIHtcbiAgICAgICAgbWFqb3I6IHBhcnNlSW50KG1hdGNoWzFdLCAxMCksXG4gICAgICAgIG1pbm9yOiBwYXJzZUludChtYXRjaFsyXSwgMTApXG4gICAgfTtcbn1cbi8qKlxuICogR2V0IHRoZSBDRE4gdXJsIGZvciBhIGdpdmVuIHZlcnNpb25cbiAqXG4gKiBAcGFyYW0gdmVyc2lvbiBFeDogJzQuMjUnIG9yICczLjQyJy4gRGVmYXVsdHMgdG8gdGhlIGxhdGVzdCA0LnggdmVyc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENkblVybCh2ZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24gPT09IHZvaWQgMCkgeyB2ZXJzaW9uID0gREVGQVVMVF9WRVJTSU9OOyB9XG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9qcy5hcmNnaXMuY29tL1wiLmNvbmNhdCh2ZXJzaW9uLCBcIi9cIik7XG59XG4vKipcbiAqIEdldCB0aGUgQ0ROIHVybCBmb3IgYSB0aGUgQ1NTIGZvciBhIGdpdmVuIHZlcnNpb24gYW5kL29yIHRoZW1lXG4gKlxuICogQHBhcmFtIHZlcnNpb24gRXg6ICc0LjI1JywgJzMuNDInLCBvciAnbmV4dCcuIERlZmF1bHRzIHRvIHRoZSBsYXRlc3QgNC54IHZlcnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5Dc3NVcmwodmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uID09PSB2b2lkIDApIHsgdmVyc2lvbiA9IERFRkFVTFRfVkVSU0lPTjsgfVxuICAgIHZhciBiYXNlVXJsID0gZ2V0Q2RuVXJsKHZlcnNpb24pO1xuICAgIHZhciBwYXJzZWRWZXJzaW9uID0gcGFyc2VWZXJzaW9uKHZlcnNpb24pO1xuICAgIGlmIChwYXJzZWRWZXJzaW9uICE9PSBORVhUICYmIHBhcnNlZFZlcnNpb24ubWFqb3IgPT09IDMpIHtcbiAgICAgICAgLy8gTk9URTogYXQgMy4xMSB0aGUgQ1NTIG1vdmVkIGZyb20gdGhlIC9qcyBmb2xkZXIgdG8gdGhlIHJvb3RcbiAgICAgICAgdmFyIHBhdGggPSBwYXJzZWRWZXJzaW9uLm1pbm9yIDw9IDEwID8gJ2pzLycgOiAnJztcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGJhc2VVcmwpLmNvbmNhdChwYXRoLCBcImVzcmkvY3NzL2VzcmkuY3NzXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gYXNzdW1lIDQueFxuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoYmFzZVVybCwgXCJlc3JpL3RoZW1lcy9saWdodC9tYWluLmNzc1wiKTtcbiAgICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxlKHRyYW5zbGF0aW9ucykge1xyXG4gIC8vIERldGVjdGEgbG9jYWxlIGRlc2RlIGxhIFVSTCAoP2xvY2FsZT1lbikgbyBmYWxsYmFjayBhIFwiZXNcIlxyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgY29uc3QgbG9jYWxlID0gc2VhcmNoUGFyYW1zLmdldChcImxvY2FsZVwiKSB8fCBcImVzXCI7XHJcblxyXG4gIGNvbnN0IHQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiAoa2V5OiBrZXlvZiB0eXBlb2YgdHJhbnNsYXRpb25zW1wiZXNcIl0pID0+XHJcbiAgICAgIHRyYW5zbGF0aW9uc1tsb2NhbGUgYXMgXCJlc1wiIHwgXCJlblwiXVtrZXldID8/IGtleTtcclxuICB9LCBbbG9jYWxlXSk7XHJcblxyXG4gIHJldHVybiB7IHQsIGxvY2FsZSB9O1xyXG59IiwiZXhwb3J0IGNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcclxuICBlczoge1xyXG4gICAgd2lkZ2V0TGFiZWw6IFwiw41uZGljZXMgZXNwZWN0cmFsZXNcIixcclxuICAgIHNwZWN0cmFsUnVsZTogXCJEZWJlcyBzZWxlY2Npb25hciB1bmEgaW1hZ2VuIHBhcmEgdXRpbGl6YXIgbG9zIGluZGljZXMgZXNwZWN0cmFsZXNcIixcclxuICAgIHNlbGVjdE5hbWU6IFwiU2VsZWNjaW9uYSBmw7NybXVsYTpcIixcclxuICAgIG5kdmk6IFwiw41uZGljZSBub3JtYWxpemFkbyBkZSB2ZWdldGFjacOzblwiLFxyXG4gICAgc2F2aTogXCLDjW5kaWNlIGRlIHZlZ2V0YWNpw7NuIGFqdXN0YWRvIGFsIHN1ZWxvXCIsXHJcbiAgICBuZHdpOiBcIsONbmRpY2UgZGUgYWd1YSBkZSBkaWZlcmVuY2lhIG5vcm1hbGl6YWRhXCIsXHJcbiAgICBiYWk6IFwiw41uZGljZSBkZSDDoXJlYXMgcXVlbWFkYXNcIixcclxuICAgIGFwcGx5OiBcIkFwbGljYXJcIlxyXG4gIH0sXHJcbiAgZW46IHtcclxuICAgIHdpZGdldExhYmVsOiBcIlNwZWN0cmFsIGluZGljZXNcIixcclxuICAgIHNwZWN0cmFsUnVsZTogXCJZb3UgbXVzdCBzZWxlY3QgYW4gaW1hZ2UgdG8gdXNlIHRoZSBzcGVjdHJhbCBpbmRpY2VzXCIsXHJcbiAgICBzZWxlY3ROYW1lOiBcIlNlbGVjdCBmb3JtdWxhOlwiLFxyXG4gICAgbmR2aTogXCJOb3JtYWxpemVkIHZlZ2V0YXRpb24gaW5kZXhcIixcclxuICAgIHNhdmk6IFwiU29pbC1hZGp1c3RlZCB2ZWdldGF0aW9uIGluZGV4XCIsXHJcbiAgICBuZHdpOiBcIk5vcm1hbGl6ZWQgZGlmZmVyZW5jZSB3YXRlciBpbmRleFwiLFxyXG4gICAgYmFpOiBcIkJ1cm5lZCBBcmVhIEluZGV4XCIsXHJcbiAgICBhcHBseTogXCJBcHBseVwiXHJcbiAgfSxcclxufTtcclxuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgcmV0dXJuIHggPT09IHkgJiYgKHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5KSB8fCB4ICE9PSB4ICYmIHkgIT09IHkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgO1xufVxuXG52YXIgb2JqZWN0SXMgPSB0eXBlb2YgT2JqZWN0LmlzID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmlzIDogaXM7XG5cbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlO1xuXG4vLyBmb3IgQ29tbW9uSlMgaW50ZXJvcC5cblxudmFyIHVzZVJlZiA9IFJlYWN0LnVzZVJlZixcbiAgICB1c2VFZmZlY3QgPSBSZWFjdC51c2VFZmZlY3QsXG4gICAgdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8sXG4gICAgdXNlRGVidWdWYWx1ZSA9IFJlYWN0LnVzZURlYnVnVmFsdWU7IC8vIFNhbWUgYXMgdXNlU3luY0V4dGVybmFsU3RvcmUsIGJ1dCBzdXBwb3J0cyBzZWxlY3RvciBhbmQgaXNFcXVhbCBhcmd1bWVudHMuXG5cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90LCBzZWxlY3RvciwgaXNFcXVhbCkge1xuICAvLyBVc2UgdGhpcyB0byB0cmFjayB0aGUgcmVuZGVyZWQgc25hcHNob3QuXG4gIHZhciBpbnN0UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgaW5zdDtcblxuICBpZiAoaW5zdFJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgaW5zdCA9IHtcbiAgICAgIGhhc1ZhbHVlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBudWxsXG4gICAgfTtcbiAgICBpbnN0UmVmLmN1cnJlbnQgPSBpbnN0O1xuICB9IGVsc2Uge1xuICAgIGluc3QgPSBpbnN0UmVmLmN1cnJlbnQ7XG4gIH1cblxuICB2YXIgX3VzZU1lbW8gPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUcmFjayB0aGUgbWVtb2l6ZWQgc3RhdGUgdXNpbmcgY2xvc3VyZSB2YXJpYWJsZXMgdGhhdCBhcmUgbG9jYWwgdG8gdGhpc1xuICAgIC8vIG1lbW9pemVkIGluc3RhbmNlIG9mIGEgZ2V0U25hcHNob3QgZnVuY3Rpb24uIEludGVudGlvbmFsbHkgbm90IHVzaW5nIGFcbiAgICAvLyB1c2VSZWYgaG9vaywgYmVjYXVzZSB0aGF0IHN0YXRlIHdvdWxkIGJlIHNoYXJlZCBhY3Jvc3MgYWxsIGNvbmN1cnJlbnRcbiAgICAvLyBjb3BpZXMgb2YgdGhlIGhvb2svY29tcG9uZW50LlxuICAgIHZhciBoYXNNZW1vID0gZmFsc2U7XG4gICAgdmFyIG1lbW9pemVkU25hcHNob3Q7XG4gICAgdmFyIG1lbW9pemVkU2VsZWN0aW9uO1xuXG4gICAgdmFyIG1lbW9pemVkU2VsZWN0b3IgPSBmdW5jdGlvbiAobmV4dFNuYXBzaG90KSB7XG4gICAgICBpZiAoIWhhc01lbW8pIHtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgdGhlIGhvb2sgaXMgY2FsbGVkLCB0aGVyZSBpcyBubyBtZW1vaXplZCByZXN1bHQuXG4gICAgICAgIGhhc01lbW8gPSB0cnVlO1xuICAgICAgICBtZW1vaXplZFNuYXBzaG90ID0gbmV4dFNuYXBzaG90O1xuXG4gICAgICAgIHZhciBfbmV4dFNlbGVjdGlvbiA9IHNlbGVjdG9yKG5leHRTbmFwc2hvdCk7XG5cbiAgICAgICAgaWYgKGlzRXF1YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIEV2ZW4gaWYgdGhlIHNlbGVjdG9yIGhhcyBjaGFuZ2VkLCB0aGUgY3VycmVudGx5IHJlbmRlcmVkIHNlbGVjdGlvblxuICAgICAgICAgIC8vIG1heSBiZSBlcXVhbCB0byB0aGUgbmV3IHNlbGVjdGlvbi4gV2Ugc2hvdWxkIGF0dGVtcHQgdG8gcmV1c2UgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCB2YWx1ZSBpZiBwb3NzaWJsZSwgdG8gcHJlc2VydmUgZG93bnN0cmVhbSBtZW1vaXphdGlvbnMuXG4gICAgICAgICAgaWYgKGluc3QuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2VsZWN0aW9uID0gaW5zdC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKGlzRXF1YWwoY3VycmVudFNlbGVjdGlvbiwgX25leHRTZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gY3VycmVudFNlbGVjdGlvbjtcbiAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRTZWxlY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBfbmV4dFNlbGVjdGlvbjtcbiAgICAgICAgcmV0dXJuIF9uZXh0U2VsZWN0aW9uO1xuICAgICAgfSAvLyBXZSBtYXkgYmUgYWJsZSB0byByZXVzZSB0aGUgcHJldmlvdXMgaW52b2NhdGlvbidzIHJlc3VsdC5cblxuXG4gICAgICAvLyBXZSBtYXkgYmUgYWJsZSB0byByZXVzZSB0aGUgcHJldmlvdXMgaW52b2NhdGlvbidzIHJlc3VsdC5cbiAgICAgIHZhciBwcmV2U25hcHNob3QgPSBtZW1vaXplZFNuYXBzaG90O1xuICAgICAgdmFyIHByZXZTZWxlY3Rpb24gPSBtZW1vaXplZFNlbGVjdGlvbjtcblxuICAgICAgaWYgKG9iamVjdElzKHByZXZTbmFwc2hvdCwgbmV4dFNuYXBzaG90KSkge1xuICAgICAgICAvLyBUaGUgc25hcHNob3QgaXMgdGhlIHNhbWUgYXMgbGFzdCB0aW1lLiBSZXVzZSB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLlxuICAgICAgICByZXR1cm4gcHJldlNlbGVjdGlvbjtcbiAgICAgIH0gLy8gVGhlIHNuYXBzaG90IGhhcyBjaGFuZ2VkLCBzbyB3ZSBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgc2VsZWN0aW9uLlxuXG5cbiAgICAgIC8vIFRoZSBzbmFwc2hvdCBoYXMgY2hhbmdlZCwgc28gd2UgbmVlZCB0byBjb21wdXRlIGEgbmV3IHNlbGVjdGlvbi5cbiAgICAgIHZhciBuZXh0U2VsZWN0aW9uID0gc2VsZWN0b3IobmV4dFNuYXBzaG90KTsgLy8gSWYgYSBjdXN0b20gaXNFcXVhbCBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdXNlIHRoYXQgdG8gY2hlY2sgaWYgdGhlIGRhdGFcbiAgICAgIC8vIGhhcyBjaGFuZ2VkLiBJZiBpdCBoYXNuJ3QsIHJldHVybiB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLiBUaGF0IHNpZ25hbHNcbiAgICAgIC8vIHRvIFJlYWN0IHRoYXQgdGhlIHNlbGVjdGlvbnMgYXJlIGNvbmNlcHR1YWxseSBlcXVhbCwgYW5kIHdlIGNhbiBiYWlsXG4gICAgICAvLyBvdXQgb2YgcmVuZGVyaW5nLlxuXG4gICAgICAvLyBJZiBhIGN1c3RvbSBpc0VxdWFsIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB1c2UgdGhhdCB0byBjaGVjayBpZiB0aGUgZGF0YVxuICAgICAgLy8gaGFzIGNoYW5nZWQuIElmIGl0IGhhc24ndCwgcmV0dXJuIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uIFRoYXQgc2lnbmFsc1xuICAgICAgLy8gdG8gUmVhY3QgdGhhdCB0aGUgc2VsZWN0aW9ucyBhcmUgY29uY2VwdHVhbGx5IGVxdWFsLCBhbmQgd2UgY2FuIGJhaWxcbiAgICAgIC8vIG91dCBvZiByZW5kZXJpbmcuXG4gICAgICBpZiAoaXNFcXVhbCAhPT0gdW5kZWZpbmVkICYmIGlzRXF1YWwocHJldlNlbGVjdGlvbiwgbmV4dFNlbGVjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHByZXZTZWxlY3Rpb247XG4gICAgICB9XG5cbiAgICAgIG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG4gICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IG5leHRTZWxlY3Rpb247XG4gICAgICByZXR1cm4gbmV4dFNlbGVjdGlvbjtcbiAgICB9OyAvLyBBc3NpZ25pbmcgdGhpcyB0byBhIGNvbnN0YW50IHNvIHRoYXQgRmxvdyBrbm93cyBpdCBjYW4ndCBjaGFuZ2UuXG5cblxuICAgIC8vIEFzc2lnbmluZyB0aGlzIHRvIGEgY29uc3RhbnQgc28gdGhhdCBGbG93IGtub3dzIGl0IGNhbid0IGNoYW5nZS5cbiAgICB2YXIgbWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCA9IGdldFNlcnZlclNuYXBzaG90ID09PSB1bmRlZmluZWQgPyBudWxsIDogZ2V0U2VydmVyU25hcHNob3Q7XG5cbiAgICB2YXIgZ2V0U25hcHNob3RXaXRoU2VsZWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihnZXRTbmFwc2hvdCgpKTtcbiAgICB9O1xuXG4gICAgdmFyIGdldFNlcnZlclNuYXBzaG90V2l0aFNlbGVjdG9yID0gbWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZW1vaXplZFNlbGVjdG9yKG1heWJlR2V0U2VydmVyU25hcHNob3QoKSk7XG4gICAgfTtcbiAgICByZXR1cm4gW2dldFNuYXBzaG90V2l0aFNlbGVjdG9yLCBnZXRTZXJ2ZXJTbmFwc2hvdFdpdGhTZWxlY3Rvcl07XG4gIH0sIFtnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QsIHNlbGVjdG9yLCBpc0VxdWFsXSksXG4gICAgICBnZXRTZWxlY3Rpb24gPSBfdXNlTWVtb1swXSxcbiAgICAgIGdldFNlcnZlclNlbGVjdGlvbiA9IF91c2VNZW1vWzFdO1xuXG4gIHZhciB2YWx1ZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U2VsZWN0aW9uLCBnZXRTZXJ2ZXJTZWxlY3Rpb24pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGluc3QuaGFzVmFsdWUgPSB0cnVlO1xuICAgIGluc3QudmFsdWUgPSB2YWx1ZTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHVzZURlYnVnVmFsdWUodmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjtcbiAgICAgICAgICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgIFxuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBzcmMvaW5kZXgudHNcbmltcG9ydCAqIGFzIFJlYWN0MiBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yIGFzIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yMiB9IGZyb20gXCJ1c2Utc3luYy1leHRlcm5hbC1zdG9yZS93aXRoLXNlbGVjdG9yLmpzXCI7XG5cbi8vIHNyYy91dGlscy9yZWFjdC50c1xuaW1wb3J0ICogYXMgUmVhY3RPcmlnaW5hbCBmcm9tIFwicmVhY3RcIjtcbnZhciBSZWFjdCA9IChcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIC8vIEB0cy1pZ25vcmVcbiAgXCJkZWZhdWx0XCIgaW4gUmVhY3RPcmlnaW5hbCA/IFJlYWN0T3JpZ2luYWxbXCJkZWZhdWx0XCJdIDogUmVhY3RPcmlnaW5hbFxuKTtcblxuLy8gc3JjL2NvbXBvbmVudHMvQ29udGV4dC50c1xudmFyIENvbnRleHRLZXkgPSBTeW1ib2wuZm9yKGByZWFjdC1yZWR1eC1jb250ZXh0YCk7XG52YXIgZ1QgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiAoXG4gIC8qIGZhbGwgYmFjayB0byBhIHBlci1tb2R1bGUgc2NvcGUgKHByZS04LjEgYmVoYXZpb3VyKSBpZiBgZ2xvYmFsVGhpc2AgaXMgbm90IGF2YWlsYWJsZSAqL1xuICB7fVxuKTtcbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIGlmICghUmVhY3QuY3JlYXRlQ29udGV4dClcbiAgICByZXR1cm4ge307XG4gIGNvbnN0IGNvbnRleHRNYXAgPSBnVFtDb250ZXh0S2V5XSA/PyAoZ1RbQ29udGV4dEtleV0gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbiAgbGV0IHJlYWxDb250ZXh0ID0gY29udGV4dE1hcC5nZXQoUmVhY3QuY3JlYXRlQ29udGV4dCk7XG4gIGlmICghcmVhbENvbnRleHQpIHtcbiAgICByZWFsQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXG4gICAgICBudWxsXG4gICAgKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICByZWFsQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUmVhY3RSZWR1eFwiO1xuICAgIH1cbiAgICBjb250ZXh0TWFwLnNldChSZWFjdC5jcmVhdGVDb250ZXh0LCByZWFsQ29udGV4dCk7XG4gIH1cbiAgcmV0dXJuIHJlYWxDb250ZXh0O1xufVxudmFyIFJlYWN0UmVkdXhDb250ZXh0ID0gLyogQF9fUFVSRV9fICovIGdldENvbnRleHQoKTtcblxuLy8gc3JjL3V0aWxzL3VzZVN5bmNFeHRlcm5hbFN0b3JlLnRzXG52YXIgbm90SW5pdGlhbGl6ZWQgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihcInVTRVMgbm90IGluaXRpYWxpemVkIVwiKTtcbn07XG5cbi8vIHNyYy9ob29rcy91c2VSZWR1eENvbnRleHQudHNcbmZ1bmN0aW9uIGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiB1c2VSZWR1eENvbnRleHQyKCkge1xuICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoY29udGV4dCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhY29udGV4dFZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiY291bGQgbm90IGZpbmQgcmVhY3QtcmVkdXggY29udGV4dCB2YWx1ZTsgcGxlYXNlIGVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHdyYXBwZWQgaW4gYSA8UHJvdmlkZXI+XCJcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0VmFsdWU7XG4gIH07XG59XG52YXIgdXNlUmVkdXhDb250ZXh0ID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soKTtcblxuLy8gc3JjL2hvb2tzL3VzZVNlbGVjdG9yLnRzXG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSBub3RJbml0aWFsaXplZDtcbnZhciBpbml0aWFsaXplVXNlU2VsZWN0b3IgPSAoZm4pID0+IHtcbiAgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSBmbjtcbn07XG52YXIgcmVmRXF1YWxpdHkgPSAoYSwgYikgPT4gYSA9PT0gYjtcbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9ySG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlUmVkdXhDb250ZXh0MiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlUmVkdXhDb250ZXh0IDogY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0KTtcbiAgY29uc3QgdXNlU2VsZWN0b3IyID0gKHNlbGVjdG9yLCBlcXVhbGl0eUZuT3JPcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB7IGVxdWFsaXR5Rm4gPSByZWZFcXVhbGl0eSwgZGV2TW9kZUNoZWNrcyA9IHt9IH0gPSB0eXBlb2YgZXF1YWxpdHlGbk9yT3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiID8geyBlcXVhbGl0eUZuOiBlcXVhbGl0eUZuT3JPcHRpb25zIH0gOiBlcXVhbGl0eUZuT3JPcHRpb25zO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYSBmdW5jdGlvbiBhcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yYCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGVxdWFsaXR5Rm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFlvdSBtdXN0IHBhc3MgYSBmdW5jdGlvbiBhcyBhbiBlcXVhbGl0eSBmdW5jdGlvbiB0byB1c2VTZWxlY3RvcmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZSxcbiAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrXG4gICAgfSA9IHVzZVJlZHV4Q29udGV4dDIoKTtcbiAgICBjb25zdCBmaXJzdFJ1biA9IFJlYWN0LnVzZVJlZih0cnVlKTtcbiAgICBjb25zdCB3cmFwcGVkU2VsZWN0b3IgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAgIHtcbiAgICAgICAgW3NlbGVjdG9yLm5hbWVdKHN0YXRlKSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RvcihzdGF0ZSk7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2s6IGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrLFxuICAgICAgICAgICAgICBzdGFiaWxpdHlDaGVjazogZmluYWxTdGFiaWxpdHlDaGVja1xuICAgICAgICAgICAgfSA9IHtcbiAgICAgICAgICAgICAgc3RhYmlsaXR5Q2hlY2ssXG4gICAgICAgICAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVjayxcbiAgICAgICAgICAgICAgLi4uZGV2TW9kZUNoZWNrc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChmaW5hbFN0YWJpbGl0eUNoZWNrID09PSBcImFsd2F5c1wiIHx8IGZpbmFsU3RhYmlsaXR5Q2hlY2sgPT09IFwib25jZVwiICYmIGZpcnN0UnVuLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgY29uc3QgdG9Db21wYXJlID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgICAgICAgICBpZiAoIWVxdWFsaXR5Rm4oc2VsZWN0ZWQsIHRvQ29tcGFyZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhY2sgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICh7IHN0YWNrIH0gPSBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgXCJTZWxlY3RvciBcIiArIChzZWxlY3Rvci5uYW1lIHx8IFwidW5rbm93blwiKSArIFwiIHJldHVybmVkIGEgZGlmZmVyZW50IHJlc3VsdCB3aGVuIGNhbGxlZCB3aXRoIHRoZSBzYW1lIHBhcmFtZXRlcnMuIFRoaXMgY2FuIGxlYWQgdG8gdW5uZWNlc3NhcnkgcmVyZW5kZXJzLlxcblNlbGVjdG9ycyB0aGF0IHJldHVybiBhIG5ldyByZWZlcmVuY2UgKHN1Y2ggYXMgYW4gb2JqZWN0IG9yIGFuIGFycmF5KSBzaG91bGQgYmUgbWVtb2l6ZWQ6IGh0dHBzOi8vcmVkdXguanMub3JnL3VzYWdlL2Rlcml2aW5nLWRhdGEtc2VsZWN0b3JzI29wdGltaXppbmctc2VsZWN0b3JzLXdpdGgtbWVtb2l6YXRpb25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDI6IHRvQ29tcGFyZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmluYWxJZGVudGl0eUZ1bmN0aW9uQ2hlY2sgPT09IFwiYWx3YXlzXCIgfHwgZmluYWxJZGVudGl0eUZ1bmN0aW9uQ2hlY2sgPT09IFwib25jZVwiICYmIGZpcnN0UnVuLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSBzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFjayA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgKHsgc3RhY2sgfSA9IGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICBcIlNlbGVjdG9yIFwiICsgKHNlbGVjdG9yLm5hbWUgfHwgXCJ1bmtub3duXCIpICsgXCIgcmV0dXJuZWQgdGhlIHJvb3Qgc3RhdGUgd2hlbiBjYWxsZWQuIFRoaXMgY2FuIGxlYWQgdG8gdW5uZWNlc3NhcnkgcmVyZW5kZXJzLlxcblNlbGVjdG9ycyB0aGF0IHJldHVybiB0aGUgZW50aXJlIHN0YXRlIGFyZSBhbG1vc3QgY2VydGFpbmx5IGEgbWlzdGFrZSwgYXMgdGhleSB3aWxsIGNhdXNlIGEgcmVyZW5kZXIgd2hlbmV2ZXIgKmFueXRoaW5nKiBpbiBzdGF0ZSBjaGFuZ2VzLlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGFjayB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpcnN0UnVuLmN1cnJlbnQpXG4gICAgICAgICAgICAgIGZpcnN0UnVuLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgICAgICB9XG4gICAgICB9W3NlbGVjdG9yLm5hbWVdLFxuICAgICAgW3NlbGVjdG9yLCBzdGFiaWxpdHlDaGVjaywgZGV2TW9kZUNoZWNrcy5zdGFiaWxpdHlDaGVja11cbiAgICApO1xuICAgIGNvbnN0IHNlbGVjdGVkU3RhdGUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihcbiAgICAgIHN1YnNjcmlwdGlvbi5hZGROZXN0ZWRTdWIsXG4gICAgICBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgIGdldFNlcnZlclN0YXRlIHx8IHN0b3JlLmdldFN0YXRlLFxuICAgICAgd3JhcHBlZFNlbGVjdG9yLFxuICAgICAgZXF1YWxpdHlGblxuICAgICk7XG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZShzZWxlY3RlZFN0YXRlKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRTdGF0ZTtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VTZWxlY3RvcjIsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHVzZVNlbGVjdG9yMlxuICB9KTtcbiAgcmV0dXJuIHVzZVNlbGVjdG9yMjtcbn1cbnZhciB1c2VTZWxlY3RvciA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTZWxlY3Rvckhvb2soKTtcblxuLy8gc3JjL3V0aWxzL3JlYWN0LWlzLnRzXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik7XG52YXIgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zZXJ2ZXJfY29udGV4dFwiKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Qub2Zmc2NyZWVuXCIpO1xudmFyIFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKFwicmVhY3QuY2xpZW50LnJlZmVyZW5jZVwiKTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIiAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICBjb25zdCAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRToge1xuICAgICAgICBjb25zdCB0eXBlID0gb2JqZWN0LnR5cGU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGNvbnN0ICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOiB7XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZvaWQgMDtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5cbi8vIHNyYy91dGlscy93YXJuaW5nLnRzXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIHRyeSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxuLy8gc3JjL2Nvbm5lY3QvdmVyaWZ5U3Vic2VsZWN0b3JzLnRzXG5mdW5jdGlvbiB2ZXJpZnkoc2VsZWN0b3IsIG1ldGhvZE5hbWUpIHtcbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCB2YWx1ZSBmb3IgJHttZXRob2ROYW1lfSBpbiBjb25uZWN0LmApO1xuICB9IGVsc2UgaWYgKG1ldGhvZE5hbWUgPT09IFwibWFwU3RhdGVUb1Byb3BzXCIgfHwgbWV0aG9kTmFtZSA9PT0gXCJtYXBEaXNwYXRjaFRvUHJvcHNcIikge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNlbGVjdG9yLCBcImRlcGVuZHNPbk93blByb3BzXCIpKSB7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICBgVGhlIHNlbGVjdG9yIGZvciAke21ldGhvZE5hbWV9IG9mIGNvbm5lY3QgZGlkIG5vdCBzcGVjaWZ5IGEgdmFsdWUgZm9yIGRlcGVuZHNPbk93blByb3BzLmBcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpIHtcbiAgdmVyaWZ5KG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIik7XG4gIHZlcmlmeShtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpO1xuICB2ZXJpZnkobWVyZ2VQcm9wcywgXCJtZXJnZVByb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9zZWxlY3RvckZhY3RvcnkudHNcbmZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwge1xuICBhcmVTdGF0ZXNFcXVhbCxcbiAgYXJlT3duUHJvcHNFcXVhbCxcbiAgYXJlU3RhdGVQcm9wc0VxdWFsXG59KSB7XG4gIGxldCBoYXNSdW5BdExlYXN0T25jZSA9IGZhbHNlO1xuICBsZXQgc3RhdGU7XG4gIGxldCBvd25Qcm9wcztcbiAgbGV0IHN0YXRlUHJvcHM7XG4gIGxldCBkaXNwYXRjaFByb3BzO1xuICBsZXQgbWVyZ2VkUHJvcHM7XG4gIGZ1bmN0aW9uIGhhbmRsZUZpcnN0Q2FsbChmaXJzdFN0YXRlLCBmaXJzdE93blByb3BzKSB7XG4gICAgc3RhdGUgPSBmaXJzdFN0YXRlO1xuICAgIG93blByb3BzID0gZmlyc3RPd25Qcm9wcztcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgaGFzUnVuQXRMZWFzdE9uY2UgPSB0cnVlO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCkge1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzKCkge1xuICAgIGlmIChtYXBTdGF0ZVRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdTdGF0ZSgpIHtcbiAgICBjb25zdCBuZXh0U3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlUHJvcHNDaGFuZ2VkID0gIWFyZVN0YXRlUHJvcHNFcXVhbChuZXh0U3RhdGVQcm9wcywgc3RhdGVQcm9wcyk7XG4gICAgc3RhdGVQcm9wcyA9IG5leHRTdGF0ZVByb3BzO1xuICAgIGlmIChzdGF0ZVByb3BzQ2hhbmdlZClcbiAgICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIGNvbnN0IHByb3BzQ2hhbmdlZCA9ICFhcmVPd25Qcm9wc0VxdWFsKG5leHRPd25Qcm9wcywgb3duUHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlQ2hhbmdlZCA9ICFhcmVTdGF0ZXNFcXVhbChcbiAgICAgIG5leHRTdGF0ZSxcbiAgICAgIHN0YXRlLFxuICAgICAgbmV4dE93blByb3BzLFxuICAgICAgb3duUHJvcHNcbiAgICApO1xuICAgIHN0YXRlID0gbmV4dFN0YXRlO1xuICAgIG93blByb3BzID0gbmV4dE93blByb3BzO1xuICAgIGlmIChwcm9wc0NoYW5nZWQgJiYgc3RhdGVDaGFuZ2VkKVxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKTtcbiAgICBpZiAocHJvcHNDaGFuZ2VkKVxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1Byb3BzKCk7XG4gICAgaWYgKHN0YXRlQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdTdGF0ZSgpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvcihuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIHJldHVybiBoYXNSdW5BdExlYXN0T25jZSA/IGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykgOiBoYW5kbGVGaXJzdENhbGwobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpO1xuICB9O1xufVxuZnVuY3Rpb24gZmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShkaXNwYXRjaCwge1xuICBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICBpbml0TWVyZ2VQcm9wcyxcbiAgLi4ub3B0aW9uc1xufSkge1xuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBpbml0TWFwU3RhdGVUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGNvbnN0IG1lcmdlUHJvcHMgPSBpbml0TWVyZ2VQcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpO1xuICB9XG4gIHJldHVybiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIG9wdGlvbnMpO1xufVxuXG4vLyBzcmMvdXRpbHMvYmluZEFjdGlvbkNyZWF0b3JzLnRzXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGNvbnN0IGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICBjb25zdCBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gKC4uLmFyZ3MpID0+IGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IoLi4uYXJncykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuLy8gc3JjL3V0aWxzL2lzUGxhaW5PYmplY3QudHNcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiIHx8IG9iaiA9PT0gbnVsbClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG4gIGlmIChwcm90byA9PT0gbnVsbClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgbGV0IGJhc2VQcm90byA9IHByb3RvO1xuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90bykgIT09IG51bGwpIHtcbiAgICBiYXNlUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKTtcbiAgfVxuICByZXR1cm4gcHJvdG8gPT09IGJhc2VQcm90bztcbn1cblxuLy8gc3JjL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LnRzXG5mdW5jdGlvbiB2ZXJpZnlQbGFpbk9iamVjdCh2YWx1ZSwgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm5pbmcoXG4gICAgICBgJHttZXRob2ROYW1lfSgpIGluICR7ZGlzcGxheU5hbWV9IG11c3QgcmV0dXJuIGEgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkIHJlY2VpdmVkICR7dmFsdWV9LmBcbiAgICApO1xuICB9XG59XG5cbi8vIHNyYy9jb25uZWN0L3dyYXBNYXBUb1Byb3BzLnRzXG5mdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGdldENvbnN0YW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0Q29uc3RhbnRTZWxlY3RvcihkaXNwYXRjaCkge1xuICAgIGNvbnN0IGNvbnN0YW50ID0gZ2V0Q29uc3RhbnQoZGlzcGF0Y2gpO1xuICAgIGZ1bmN0aW9uIGNvbnN0YW50U2VsZWN0b3IoKSB7XG4gICAgICByZXR1cm4gY29uc3RhbnQ7XG4gICAgfVxuICAgIGNvbnN0YW50U2VsZWN0b3IuZGVwZW5kc09uT3duUHJvcHMgPSBmYWxzZTtcbiAgICByZXR1cm4gY29uc3RhbnRTZWxlY3RvcjtcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMgPyBCb29sZWFuKG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIDogbWFwVG9Qcm9wcy5sZW5ndGggIT09IDE7XG59XG5mdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwVG9Qcm9wcywgbWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdFByb3h5U2VsZWN0b3IoZGlzcGF0Y2gsIHsgZGlzcGxheU5hbWUgfSkge1xuICAgIGNvbnN0IHByb3h5ID0gZnVuY3Rpb24gbWFwVG9Qcm9wc1Byb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHJldHVybiBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA/IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykgOiBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgdm9pZCAwKTtcbiAgICB9O1xuICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gdHJ1ZTtcbiAgICBwcm94eS5tYXBUb1Byb3BzID0gZnVuY3Rpb24gZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICBwcm94eS5tYXBUb1Byb3BzID0gbWFwVG9Qcm9wcztcbiAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcyk7XG4gICAgICBsZXQgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBwcm94eS5tYXBUb1Byb3BzID0gcHJvcHM7XG4gICAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMocHJvcHMpO1xuICAgICAgICBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgICAgfVxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgdmVyaWZ5UGxhaW5PYmplY3QocHJvcHMsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgIHJldHVybiBwcm9wcztcbiAgICB9O1xuICAgIHJldHVybiBwcm94eTtcbiAgfTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvaW52YWxpZEFyZ0ZhY3RvcnkudHNcbmZ1bmN0aW9uIGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KGFyZywgbmFtZSkge1xuICByZXR1cm4gKGRpc3BhdGNoLCBvcHRpb25zKSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgdmFsdWUgb2YgdHlwZSAke3R5cGVvZiBhcmd9IGZvciAke25hbWV9IGFyZ3VtZW50IHdoZW4gY29ubmVjdGluZyBjb21wb25lbnQgJHtvcHRpb25zLndyYXBwZWRDb21wb25lbnROYW1lfS5gXG4gICAgKTtcbiAgfTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvbWFwRGlzcGF0Y2hUb1Byb3BzLnRzXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gbWFwRGlzcGF0Y2hUb1Byb3BzICYmIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09IFwib2JqZWN0XCIgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KFxuICAgIChkaXNwYXRjaCkgPT4gKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgYmluZEFjdGlvbkNyZWF0b3JzKG1hcERpc3BhdGNoVG9Qcm9wcywgZGlzcGF0Y2gpXG4gICAgKVxuICApIDogIW1hcERpc3BhdGNoVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoKGRpc3BhdGNoKSA9PiAoe1xuICAgIGRpc3BhdGNoXG4gIH0pKSA6IHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd3JhcE1hcFRvUHJvcHNGdW5jKG1hcERpc3BhdGNoVG9Qcm9wcywgXCJtYXBEaXNwYXRjaFRvUHJvcHNcIilcbiAgKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcywgXCJtYXBEaXNwYXRjaFRvUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L21hcFN0YXRlVG9Qcm9wcy50c1xuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBTdGF0ZVRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KCgpID0+ICh7fSkpIDogdHlwZW9mIG1hcFN0YXRlVG9Qcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwU3RhdGVUb1Byb3BzLCBcIm1hcFN0YXRlVG9Qcm9wc1wiKVxuICApIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBcIm1hcFN0YXRlVG9Qcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvbWVyZ2VQcm9wcy50c1xuZnVuY3Rpb24gZGVmYXVsdE1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHsgLi4ub3duUHJvcHMsIC4uLnN0YXRlUHJvcHMsIC4uLmRpc3BhdGNoUHJvcHMgfTtcbn1cbmZ1bmN0aW9uIHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0TWVyZ2VQcm9wc1Byb3h5KGRpc3BhdGNoLCB7IGRpc3BsYXlOYW1lLCBhcmVNZXJnZWRQcm9wc0VxdWFsIH0pIHtcbiAgICBsZXQgaGFzUnVuT25jZSA9IGZhbHNlO1xuICAgIGxldCBtZXJnZWRQcm9wcztcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VQcm9wc1Byb3h5KHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gICAgICBjb25zdCBuZXh0TWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICAgIGlmIChoYXNSdW5PbmNlKSB7XG4gICAgICAgIGlmICghYXJlTWVyZ2VkUHJvcHNFcXVhbChuZXh0TWVyZ2VkUHJvcHMsIG1lcmdlZFByb3BzKSlcbiAgICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhc1J1bk9uY2UgPSB0cnVlO1xuICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICB2ZXJpZnlQbGFpbk9iamVjdChtZXJnZWRQcm9wcywgZGlzcGxheU5hbWUsIFwibWVyZ2VQcm9wc1wiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gbWVyZ2VQcm9wc0ZhY3RvcnkobWVyZ2VQcm9wcykge1xuICByZXR1cm4gIW1lcmdlUHJvcHMgPyAoKSA9PiBkZWZhdWx0TWVyZ2VQcm9wcyA6IHR5cGVvZiBtZXJnZVByb3BzID09PSBcImZ1bmN0aW9uXCIgPyB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtZXJnZVByb3BzLCBcIm1lcmdlUHJvcHNcIik7XG59XG5cbi8vIHNyYy91dGlscy9iYXRjaC50c1xuZnVuY3Rpb24gZGVmYXVsdE5vb3BCYXRjaChjYWxsYmFjaykge1xuICBjYWxsYmFjaygpO1xufVxuXG4vLyBzcmMvdXRpbHMvU3Vic2NyaXB0aW9uLnRzXG5mdW5jdGlvbiBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKSB7XG4gIGxldCBmaXJzdCA9IG51bGw7XG4gIGxldCBsYXN0ID0gbnVsbDtcbiAgcmV0dXJuIHtcbiAgICBjbGVhcigpIHtcbiAgICAgIGZpcnN0ID0gbnVsbDtcbiAgICAgIGxhc3QgPSBudWxsO1xuICAgIH0sXG4gICAgbm90aWZ5KCkge1xuICAgICAgZGVmYXVsdE5vb3BCYXRjaCgoKSA9PiB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IGZpcnN0O1xuICAgICAgICB3aGlsZSAobGlzdGVuZXIpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjaygpO1xuICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgIGxldCBsaXN0ZW5lciA9IGZpcnN0O1xuICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICB9LFxuICAgIHN1YnNjcmliZShjYWxsYmFjaykge1xuICAgICAgbGV0IGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGxhc3QgPSB7XG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICBwcmV2OiBsYXN0XG4gICAgICB9O1xuICAgICAgaWYgKGxpc3RlbmVyLnByZXYpIHtcbiAgICAgICAgbGlzdGVuZXIucHJldi5uZXh0ID0gbGlzdGVuZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXJzdCA9IGxpc3RlbmVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBpZiAoIWlzU3Vic2NyaWJlZCB8fCBmaXJzdCA9PT0gbnVsbClcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICBpZiAobGlzdGVuZXIubmV4dCkge1xuICAgICAgICAgIGxpc3RlbmVyLm5leHQucHJldiA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdCA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3RlbmVyLnByZXYpIHtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpcnN0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG52YXIgbnVsbExpc3RlbmVycyA9IHtcbiAgbm90aWZ5KCkge1xuICB9LFxuICBnZXQ6ICgpID0+IFtdXG59O1xuZnVuY3Rpb24gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlLCBwYXJlbnRTdWIpIHtcbiAgbGV0IHVuc3Vic2NyaWJlO1xuICBsZXQgbGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgbGV0IHN1YnNjcmlwdGlvbnNBbW91bnQgPSAwO1xuICBsZXQgc2VsZlN1YnNjcmliZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gYWRkTmVzdGVkU3ViKGxpc3RlbmVyKSB7XG4gICAgdHJ5U3Vic2NyaWJlKCk7XG4gICAgY29uc3QgY2xlYW51cExpc3RlbmVyID0gbGlzdGVuZXJzLnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgbGV0IHJlbW92ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKCFyZW1vdmVkKSB7XG4gICAgICAgIHJlbW92ZWQgPSB0cnVlO1xuICAgICAgICBjbGVhbnVwTGlzdGVuZXIoKTtcbiAgICAgICAgdHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG5vdGlmeU5lc3RlZFN1YnMoKSB7XG4gICAgbGlzdGVuZXJzLm5vdGlmeSgpO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVdyYXBwZXIoKSB7XG4gICAgaWYgKHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlKSB7XG4gICAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpc1N1YnNjcmliZWQoKSB7XG4gICAgcmV0dXJuIHNlbGZTdWJzY3JpYmVkO1xuICB9XG4gIGZ1bmN0aW9uIHRyeVN1YnNjcmliZSgpIHtcbiAgICBzdWJzY3JpcHRpb25zQW1vdW50Kys7XG4gICAgaWYgKCF1bnN1YnNjcmliZSkge1xuICAgICAgdW5zdWJzY3JpYmUgPSBwYXJlbnRTdWIgPyBwYXJlbnRTdWIuYWRkTmVzdGVkU3ViKGhhbmRsZUNoYW5nZVdyYXBwZXIpIDogc3RvcmUuc3Vic2NyaWJlKGhhbmRsZUNoYW5nZVdyYXBwZXIpO1xuICAgICAgbGlzdGVuZXJzID0gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlKCkge1xuICAgIHN1YnNjcmlwdGlvbnNBbW91bnQtLTtcbiAgICBpZiAodW5zdWJzY3JpYmUgJiYgc3Vic2NyaXB0aW9uc0Ftb3VudCA9PT0gMCkge1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgIHVuc3Vic2NyaWJlID0gdm9pZCAwO1xuICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICBsaXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlTdWJzY3JpYmVTZWxmKCkge1xuICAgIGlmICghc2VsZlN1YnNjcmliZWQpIHtcbiAgICAgIHNlbGZTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgIHRyeVN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZVNlbGYoKSB7XG4gICAgaWYgKHNlbGZTdWJzY3JpYmVkKSB7XG4gICAgICBzZWxmU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgdHJ5VW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc3Vic2NyaXB0aW9uID0ge1xuICAgIGFkZE5lc3RlZFN1YixcbiAgICBub3RpZnlOZXN0ZWRTdWJzLFxuICAgIGhhbmRsZUNoYW5nZVdyYXBwZXIsXG4gICAgaXNTdWJzY3JpYmVkLFxuICAgIHRyeVN1YnNjcmliZTogdHJ5U3Vic2NyaWJlU2VsZixcbiAgICB0cnlVbnN1YnNjcmliZTogdHJ5VW5zdWJzY3JpYmVTZWxmLFxuICAgIGdldExpc3RlbmVyczogKCkgPT4gbGlzdGVuZXJzXG4gIH07XG4gIHJldHVybiBzdWJzY3JpcHRpb247XG59XG5cbi8vIHNyYy91dGlscy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0LnRzXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIik7XG52YXIgaXNSZWFjdE5hdGl2ZSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIjtcbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gY2FuVXNlRE9NIHx8IGlzUmVhY3ROYXRpdmUgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG5cbi8vIHNyYy91dGlscy9zaGFsbG93RXF1YWwudHNcbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAoaXMob2JqQSwgb2JqQikpXG4gICAgcmV0dXJuIHRydWU7XG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gXCJvYmplY3RcIiB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgY29uc3Qga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gc3JjL3V0aWxzL2hvaXN0U3RhdGljcy50c1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJCR0eXBlb2Y6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJCR0eXBlb2Y6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7XG4gIFtGb3J3YXJkUmVmXTogRk9SV0FSRF9SRUZfU1RBVElDUyxcbiAgW01lbW9dOiBNRU1PX1NUQVRJQ1Ncbn07XG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICBpZiAoaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9XG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50W1wiJCR0eXBlb2ZcIl1dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICBjb25zdCBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgY29uc3Qgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG4vLyBzcmMvY29tcG9uZW50cy9jb25uZWN0LnRzeFxudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gbm90SW5pdGlhbGl6ZWQ7XG52YXIgaW5pdGlhbGl6ZUNvbm5lY3QgPSAoZm4pID0+IHtcbiAgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBmbjtcbn07XG52YXIgTk9fU1VCU0NSSVBUSU9OX0FSUkFZID0gW251bGwsIG51bGxdO1xudmFyIHN0cmluZ2lmeUNvbXBvbmVudCA9IChDb21wKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KENvbXApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nKENvbXApO1xuICB9XG59O1xuZnVuY3Rpb24gdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGVmZmVjdEZ1bmMsIGVmZmVjdEFyZ3MsIGRlcGVuZGVuY2llcykge1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IGVmZmVjdEZ1bmMoLi4uZWZmZWN0QXJncyksIGRlcGVuZGVuY2llcyk7XG59XG5mdW5jdGlvbiBjYXB0dXJlV3JhcHBlclByb3BzKGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgd3JhcHBlclByb3BzLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzKSB7XG4gIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCA9IHdyYXBwZXJQcm9wcztcbiAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IGZhbHNlO1xuICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50KSB7XG4gICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbnVsbDtcbiAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHN1YnNjcmliZVVwZGF0ZXMoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLCBzdG9yZSwgc3Vic2NyaXB0aW9uLCBjaGlsZFByb3BzU2VsZWN0b3IsIGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgaXNNb3VudGVkLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzLCBhZGRpdGlvbmFsU3Vic2NyaWJlTGlzdGVuZXIpIHtcbiAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICBsZXQgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgbGV0IGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gIGNvbnN0IGNoZWNrRm9yVXBkYXRlcyA9ICgpID0+IHtcbiAgICBpZiAoZGlkVW5zdWJzY3JpYmUgfHwgIWlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxhdGVzdFN0b3JlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIGxldCBuZXdDaGlsZFByb3BzLCBlcnJvcjtcbiAgICB0cnkge1xuICAgICAgbmV3Q2hpbGRQcm9wcyA9IGNoaWxkUHJvcHNTZWxlY3RvcihcbiAgICAgICAgbGF0ZXN0U3RvcmVTdGF0ZSxcbiAgICAgICAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50XG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yID0gZTtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IGU7XG4gICAgfVxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gICAgfVxuICAgIGlmIChuZXdDaGlsZFByb3BzID09PSBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50KSB7XG4gICAgICBpZiAoIXJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQpIHtcbiAgICAgICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICByZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGFkZGl0aW9uYWxTdWJzY3JpYmVMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcbiAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBjaGVja0ZvclVwZGF0ZXM7XG4gIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgY2hlY2tGb3JVcGRhdGVzKCk7XG4gIGNvbnN0IHVuc3Vic2NyaWJlV3JhcHBlciA9ICgpID0+IHtcbiAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBudWxsO1xuICAgIGlmIChsYXN0VGhyb3duRXJyb3IpIHtcbiAgICAgIHRocm93IGxhc3RUaHJvd25FcnJvcjtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1bnN1YnNjcmliZVdyYXBwZXI7XG59XG5mdW5jdGlvbiBzdHJpY3RFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufVxudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24gPSBmYWxzZTtcbmZ1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIHtcbiAgLy8gVGhlIGBwdXJlYCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZCwgc28gVFMgZG9lc24ndCBsaWtlIHVzIGRlc3RydWN0dXJpbmcgdGhpcyB0byBjaGVjayBpdHMgZXhpc3RlbmNlLlxuICAvLyBAdHMtaWdub3JlXG4gIHB1cmUsXG4gIGFyZVN0YXRlc0VxdWFsID0gc3RyaWN0RXF1YWwsXG4gIGFyZU93blByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIGFyZVN0YXRlUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgLy8gdXNlIFJlYWN0J3MgZm9yd2FyZFJlZiB0byBleHBvc2UgYSByZWYgb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50XG4gIGZvcndhcmRSZWYgPSBmYWxzZSxcbiAgLy8gdGhlIGNvbnRleHQgY29uc3VtZXIgdG8gdXNlXG4gIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dFxufSA9IHt9KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAocHVyZSAhPT0gdm9pZCAwICYmICFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgICdUaGUgYHB1cmVgIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLiBgY29ubmVjdGAgaXMgbm93IGFsd2F5cyBhIFwicHVyZS9tZW1vaXplZFwiIGNvbXBvbmVudCdcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGNvbnN0IENvbnRleHQgPSBjb250ZXh0O1xuICBjb25zdCBpbml0TWFwU3RhdGVUb1Byb3BzID0gbWFwU3RhdGVUb1Byb3BzRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMpO1xuICBjb25zdCBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpO1xuICBjb25zdCBpbml0TWVyZ2VQcm9wcyA9IG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpO1xuICBjb25zdCBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMgPSBCb29sZWFuKG1hcFN0YXRlVG9Qcm9wcyk7XG4gIGNvbnN0IHdyYXBXaXRoQ29ubmVjdCA9IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc3QgaXNWYWxpZCA9IC8qIEBfX1BVUkVfXyAqLyBpc1ZhbGlkRWxlbWVudFR5cGUoV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICBpZiAoIWlzVmFsaWQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgWW91IG11c3QgcGFzcyBhIGNvbXBvbmVudCB0byB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgY29ubmVjdC4gSW5zdGVhZCByZWNlaXZlZCAke3N0cmluZ2lmeUNvbXBvbmVudChcbiAgICAgICAgICAgIFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgICApfWBcbiAgICAgICAgKTtcbiAgICB9XG4gICAgY29uc3Qgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCBcIkNvbXBvbmVudFwiO1xuICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gYENvbm5lY3QoJHt3cmFwcGVkQ29tcG9uZW50TmFtZX0pYDtcbiAgICBjb25zdCBzZWxlY3RvckZhY3RvcnlPcHRpb25zID0ge1xuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgZGlzcGxheU5hbWUsXG4gICAgICB3cmFwcGVkQ29tcG9uZW50TmFtZSxcbiAgICAgIFdyYXBwZWRDb21wb25lbnQsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIGluaXRNZXJnZVByb3BzLFxuICAgICAgYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbFxuICAgIH07XG4gICAgZnVuY3Rpb24gQ29ubmVjdEZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICBjb25zdCBbcHJvcHNDb250ZXh0LCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCB3cmFwcGVyUHJvcHNdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjogcmVhY3RSZWR1eEZvcndhcmRlZFJlZjIsIC4uLndyYXBwZXJQcm9wczIgfSA9IHByb3BzO1xuICAgICAgICByZXR1cm4gW3Byb3BzLmNvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYyLCB3cmFwcGVyUHJvcHMyXTtcbiAgICAgIH0sIFtwcm9wc10pO1xuICAgICAgY29uc3QgQ29udGV4dFRvVXNlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGxldCBSZXN1bHRDb250ZXh0ID0gQ29udGV4dDtcbiAgICAgICAgaWYgKHByb3BzQ29udGV4dD8uQ29uc3VtZXIpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gLyogQF9fUFVSRV9fICovIGlzQ29udGV4dENvbnN1bWVyKFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KHByb3BzQ29udGV4dC5Db25zdW1lciwgbnVsbClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIFwiWW91IG11c3QgcGFzcyBhIHZhbGlkIFJlYWN0IGNvbnRleHQgY29uc3VtZXIgYXMgYHByb3BzLmNvbnRleHRgXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlc3VsdENvbnRleHQgPSBwcm9wc0NvbnRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZXN1bHRDb250ZXh0O1xuICAgICAgfSwgW3Byb3BzQ29udGV4dCwgQ29udGV4dF0pO1xuICAgICAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0VG9Vc2UpO1xuICAgICAgY29uc3QgZGlkU3RvcmVDb21lRnJvbVByb3BzID0gQm9vbGVhbihwcm9wcy5zdG9yZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5nZXRTdGF0ZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5kaXNwYXRjaCk7XG4gICAgICBjb25zdCBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA9IEJvb2xlYW4oY29udGV4dFZhbHVlKSAmJiBCb29sZWFuKGNvbnRleHRWYWx1ZS5zdG9yZSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFkaWRTdG9yZUNvbWVGcm9tUHJvcHMgJiYgIWRpZFN0b3JlQ29tZUZyb21Db250ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ291bGQgbm90IGZpbmQgXCJzdG9yZVwiIGluIHRoZSBjb250ZXh0IG9mIFwiJHtkaXNwbGF5TmFtZX1cIi4gRWl0aGVyIHdyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGEgPFByb3ZpZGVyPiwgb3IgcGFzcyBhIGN1c3RvbSBSZWFjdCBjb250ZXh0IHByb3ZpZGVyIHRvIDxQcm92aWRlcj4gYW5kIHRoZSBjb3JyZXNwb25kaW5nIFJlYWN0IGNvbnRleHQgY29uc3VtZXIgdG8gJHtkaXNwbGF5TmFtZX0gaW4gY29ubmVjdCBvcHRpb25zLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0b3JlID0gZGlkU3RvcmVDb21lRnJvbVByb3BzID8gcHJvcHMuc3RvcmUgOiBjb250ZXh0VmFsdWUuc3RvcmU7XG4gICAgICBjb25zdCBnZXRTZXJ2ZXJTdGF0ZSA9IGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID8gY29udGV4dFZhbHVlLmdldFNlcnZlclN0YXRlIDogc3RvcmUuZ2V0U3RhdGU7XG4gICAgICBjb25zdCBjaGlsZFByb3BzU2VsZWN0b3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnkoc3RvcmUuZGlzcGF0Y2gsIHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMpO1xuICAgICAgfSwgW3N0b3JlXSk7XG4gICAgICBjb25zdCBbc3Vic2NyaXB0aW9uLCBub3RpZnlOZXN0ZWRTdWJzXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcylcbiAgICAgICAgICByZXR1cm4gTk9fU1VCU0NSSVBUSU9OX0FSUkFZO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24yID0gY3JlYXRlU3Vic2NyaXB0aW9uKFxuICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgIGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHZvaWQgMCA6IGNvbnRleHRWYWx1ZS5zdWJzY3JpcHRpb25cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgbm90aWZ5TmVzdGVkU3ViczIgPSBzdWJzY3JpcHRpb24yLm5vdGlmeU5lc3RlZFN1YnMuYmluZChzdWJzY3JpcHRpb24yKTtcbiAgICAgICAgcmV0dXJuIFtzdWJzY3JpcHRpb24yLCBub3RpZnlOZXN0ZWRTdWJzMl07XG4gICAgICB9LCBbc3RvcmUsIGRpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlXSk7XG4gICAgICBjb25zdCBvdmVycmlkZGVuQ29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChkaWRTdG9yZUNvbWVGcm9tUHJvcHMpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uY29udGV4dFZhbHVlLFxuICAgICAgICAgIHN1YnNjcmlwdGlvblxuICAgICAgICB9O1xuICAgICAgfSwgW2RpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlLCBzdWJzY3JpcHRpb25dKTtcbiAgICAgIGNvbnN0IGxhc3RDaGlsZFByb3BzID0gUmVhY3QudXNlUmVmKHZvaWQgMCk7XG4gICAgICBjb25zdCBsYXN0V3JhcHBlclByb3BzID0gUmVhY3QudXNlUmVmKHdyYXBwZXJQcm9wcyk7XG4gICAgICBjb25zdCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlID0gUmVhY3QudXNlUmVmKHZvaWQgMCk7XG4gICAgICBjb25zdCByZW5kZXJJc1NjaGVkdWxlZCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgICBjb25zdCBpc01vdW50ZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgICAgY29uc3QgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvciA9IFJlYWN0LnVzZVJlZihcbiAgICAgICAgdm9pZCAwXG4gICAgICApO1xuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgfSwgW10pO1xuICAgICAgY29uc3QgYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgJiYgd3JhcHBlclByb3BzID09PSBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaGlsZFByb3BzU2VsZWN0b3Ioc3RvcmUuZ2V0U3RhdGUoKSwgd3JhcHBlclByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgfSwgW3N0b3JlLCB3cmFwcGVyUHJvcHNdKTtcbiAgICAgIGNvbnN0IHN1YnNjcmliZUZvclJlYWN0ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZSA9IChyZWFjdExpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlVXBkYXRlcyhcbiAgICAgICAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2hpbGRQcm9wc1NlbGVjdG9yLFxuICAgICAgICAgICAgbGFzdFdyYXBwZXJQcm9wcyxcbiAgICAgICAgICAgIGxhc3RDaGlsZFByb3BzLFxuICAgICAgICAgICAgcmVuZGVySXNTY2hlZHVsZWQsXG4gICAgICAgICAgICBpc01vdW50ZWQsXG4gICAgICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLFxuICAgICAgICAgICAgbm90aWZ5TmVzdGVkU3VicyxcbiAgICAgICAgICAgIHJlYWN0TGlzdGVuZXJcbiAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlO1xuICAgICAgfSwgW3N1YnNjcmlwdGlvbl0pO1xuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGNhcHR1cmVXcmFwcGVyUHJvcHMsIFtcbiAgICAgICAgbGFzdFdyYXBwZXJQcm9wcyxcbiAgICAgICAgbGFzdENoaWxkUHJvcHMsXG4gICAgICAgIHJlbmRlcklzU2NoZWR1bGVkLFxuICAgICAgICB3cmFwcGVyUHJvcHMsXG4gICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsXG4gICAgICAgIG5vdGlmeU5lc3RlZFN1YnNcbiAgICAgIF0pO1xuICAgICAgbGV0IGFjdHVhbENoaWxkUHJvcHM7XG4gICAgICB0cnkge1xuICAgICAgICBhY3R1YWxDaGlsZFByb3BzID0gdXNlU3luY0V4dGVybmFsU3RvcmUoXG4gICAgICAgICAgLy8gVE9ETyBXZSdyZSBwYXNzaW5nIHRocm91Z2ggYSBiaWcgd3JhcHBlciB0aGF0IGRvZXMgYSBidW5jaCBvZiBleHRyYSBzaWRlIGVmZmVjdHMgYmVzaWRlcyBzdWJzY3JpYmluZ1xuICAgICAgICAgIHN1YnNjcmliZUZvclJlYWN0LFxuICAgICAgICAgIC8vIFRPRE8gVGhpcyBpcyBpbmNyZWRpYmx5IGhhY2t5LiBXZSd2ZSBhbHJlYWR5IHByb2Nlc3NlZCB0aGUgc3RvcmUgdXBkYXRlIGFuZCBjYWxjdWxhdGVkIG5ldyBjaGlsZCBwcm9wcyxcbiAgICAgICAgICAvLyBUT0RPIGFuZCB3ZSdyZSBqdXN0IHBhc3NpbmcgdGhhdCB0aHJvdWdoIHNvIGl0IHRyaWdnZXJzIGEgcmUtcmVuZGVyIGZvciB1cyByYXRoZXIgdGhhbiByZWx5aW5nIG9uIGB1U0VTYC5cbiAgICAgICAgICBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3IsXG4gICAgICAgICAgZ2V0U2VydmVyU3RhdGUgPyAoKSA9PiBjaGlsZFByb3BzU2VsZWN0b3IoZ2V0U2VydmVyU3RhdGUoKSwgd3JhcHBlclByb3BzKSA6IGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvclxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQpIHtcbiAgICAgICAgICA7XG4gICAgICAgICAgZXJyLm1lc3NhZ2UgKz0gYFxuVGhlIGVycm9yIG1heSBiZSBjb3JyZWxhdGVkIHdpdGggdGhpcyBwcmV2aW91cyBlcnJvcjpcbiR7bGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50LnN0YWNrfVxuXG5gO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQgPSB2b2lkIDA7XG4gICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IHZvaWQgMDtcbiAgICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IGFjdHVhbENoaWxkUHJvcHM7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFdyYXBwZWRDb21wb25lbnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLmFjdHVhbENoaWxkUHJvcHMsXG4gICAgICAgICAgICAgIHJlZjogcmVhY3RSZWR1eEZvcndhcmRlZFJlZlxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0sIFtyZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCBXcmFwcGVkQ29tcG9uZW50LCBhY3R1YWxDaGlsZFByb3BzXSk7XG4gICAgICBjb25zdCByZW5kZXJlZENoaWxkID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHtcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dFRvVXNlLlByb3ZpZGVyLCB7IHZhbHVlOiBvdmVycmlkZGVuQ29udGV4dFZhbHVlIH0sIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIH0sIFtDb250ZXh0VG9Vc2UsIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCwgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZV0pO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGQ7XG4gICAgfVxuICAgIGNvbnN0IF9Db25uZWN0ID0gUmVhY3QubWVtbyhDb25uZWN0RnVuY3Rpb24pO1xuICAgIGNvbnN0IENvbm5lY3QgPSBfQ29ubmVjdDtcbiAgICBDb25uZWN0LldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgIENvbm5lY3QuZGlzcGxheU5hbWUgPSBDb25uZWN0RnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICBpZiAoZm9yd2FyZFJlZikge1xuICAgICAgY29uc3QgX2ZvcndhcmRlZCA9IFJlYWN0LmZvcndhcmRSZWYoXG4gICAgICAgIGZ1bmN0aW9uIGZvcndhcmRDb25uZWN0UmVmKHByb3BzLCByZWYpIHtcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29ubmVjdCwgeyAuLi5wcm9wcywgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjogcmVmIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc3QgZm9yd2FyZGVkID0gX2ZvcndhcmRlZDtcbiAgICAgIGZvcndhcmRlZC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgICAgZm9yd2FyZGVkLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBob2lzdE5vblJlYWN0U3RhdGljcyhmb3J3YXJkZWQsIFdyYXBwZWRDb21wb25lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKENvbm5lY3QsIFdyYXBwZWRDb21wb25lbnQpO1xuICB9O1xuICByZXR1cm4gd3JhcFdpdGhDb25uZWN0O1xufVxudmFyIGNvbm5lY3RfZGVmYXVsdCA9IGNvbm5lY3Q7XG5cbi8vIHNyYy9jb21wb25lbnRzL1Byb3ZpZGVyLnRzeFxuZnVuY3Rpb24gUHJvdmlkZXIoe1xuICBzdG9yZSxcbiAgY29udGV4dCxcbiAgY2hpbGRyZW4sXG4gIHNlcnZlclN0YXRlLFxuICBzdGFiaWxpdHlDaGVjayA9IFwib25jZVwiLFxuICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2sgPSBcIm9uY2VcIlxufSkge1xuICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBjcmVhdGVTdWJzY3JpcHRpb24oc3RvcmUpO1xuICAgIHJldHVybiB7XG4gICAgICBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGdldFNlcnZlclN0YXRlOiBzZXJ2ZXJTdGF0ZSA/ICgpID0+IHNlcnZlclN0YXRlIDogdm9pZCAwLFxuICAgICAgc3RhYmlsaXR5Q2hlY2ssXG4gICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2tcbiAgICB9O1xuICB9LCBbc3RvcmUsIHNlcnZlclN0YXRlLCBzdGFiaWxpdHlDaGVjaywgaWRlbnRpdHlGdW5jdGlvbkNoZWNrXSk7XG4gIGNvbnN0IHByZXZpb3VzU3RhdGUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHN0b3JlLmdldFN0YXRlKCksIFtzdG9yZV0pO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IHN1YnNjcmlwdGlvbiB9ID0gY29udGV4dFZhbHVlO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnM7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBzdG9yZS5nZXRTdGF0ZSgpKSB7XG4gICAgICBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicygpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IHZvaWQgMDtcbiAgICB9O1xuICB9LCBbY29udGV4dFZhbHVlLCBwcmV2aW91c1N0YXRlXSk7XG4gIGNvbnN0IENvbnRleHQgPSBjb250ZXh0IHx8IFJlYWN0UmVkdXhDb250ZXh0O1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dFZhbHVlIH0sIGNoaWxkcmVuKTtcbn1cbnZhciBQcm92aWRlcl9kZWZhdWx0ID0gUHJvdmlkZXI7XG5cbi8vIHNyYy9ob29rcy91c2VTdG9yZS50c1xuZnVuY3Rpb24gY3JlYXRlU3RvcmVIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICBjb25zdCB1c2VSZWR1eENvbnRleHQyID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VSZWR1eENvbnRleHQgOiAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dClcbiAgKTtcbiAgY29uc3QgdXNlU3RvcmUyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHVzZVJlZHV4Q29udGV4dDIoKTtcbiAgICByZXR1cm4gc3RvcmU7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlU3RvcmUyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VTdG9yZTJcbiAgfSk7XG4gIHJldHVybiB1c2VTdG9yZTI7XG59XG52YXIgdXNlU3RvcmUgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlU3RvcmVIb29rKCk7XG5cbi8vIHNyYy9ob29rcy91c2VEaXNwYXRjaC50c1xuZnVuY3Rpb24gY3JlYXRlRGlzcGF0Y2hIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICBjb25zdCB1c2VTdG9yZTIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVN0b3JlIDogY3JlYXRlU3RvcmVIb29rKGNvbnRleHQpO1xuICBjb25zdCB1c2VEaXNwYXRjaDIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZTIoKTtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2g7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlRGlzcGF0Y2gyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VEaXNwYXRjaDJcbiAgfSk7XG4gIHJldHVybiB1c2VEaXNwYXRjaDI7XG59XG52YXIgdXNlRGlzcGF0Y2ggPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlRGlzcGF0Y2hIb29rKCk7XG5cbi8vIHNyYy9leHBvcnRzLnRzXG52YXIgYmF0Y2ggPSBkZWZhdWx0Tm9vcEJhdGNoO1xuXG4vLyBzcmMvaW5kZXgudHNcbmluaXRpYWxpemVVc2VTZWxlY3Rvcih1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjIpO1xuaW5pdGlhbGl6ZUNvbm5lY3QoUmVhY3QyLnVzZVN5bmNFeHRlcm5hbFN0b3JlKTtcbmV4cG9ydCB7XG4gIFByb3ZpZGVyX2RlZmF1bHQgYXMgUHJvdmlkZXIsXG4gIFJlYWN0UmVkdXhDb250ZXh0LFxuICBiYXRjaCxcbiAgY29ubmVjdF9kZWZhdWx0IGFzIGNvbm5lY3QsXG4gIGNyZWF0ZURpc3BhdGNoSG9vayxcbiAgY3JlYXRlU2VsZWN0b3JIb29rLFxuICBjcmVhdGVTdG9yZUhvb2ssXG4gIHNoYWxsb3dFcXVhbCxcbiAgdXNlRGlzcGF0Y2gsXG4gIHVzZVNlbGVjdG9yLFxuICB1c2VTdG9yZVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LXJlZHV4Lm1qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWxsV2lkZ2V0UHJvcHMsIElNU3RhdGUgfSBmcm9tICdqaW11LWNvcmUnO1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcclxuaW1wb3J0IHsgbG9hZE1vZHVsZXMgfSBmcm9tICdlc3JpLWxvYWRlcic7XHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTG9hZGluZywgU2VsZWN0LCBNdWx0aVJhbmdlU2xpZGVyIH0gZnJvbSAnamltdS11aSc7XHJcblxyXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaG9va3MvdXNlTG9jYWxlXCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0aW9ucyB9IGZyb20gJy4vdHJhbnNsYXRpb25zJztcclxuXHJcbmludGVyZmFjZSBCYW5kIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgU2Vuc29yIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgYmFuZHM6IEJhbmRbXTtcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBJTUNvbmZpZyB7XHJcbiAgZXhhbXBsZUNvbmZpZ1Byb3BlcnR5OiBzdHJpbmc7XHJcbn1cclxuY29uc3Qgc2Vuc29yczogU2Vuc29yW10gPSBbXHJcbiAge1xyXG4gICAgaWQ6ICd3b3JsZHZpZXcnLFxyXG4gICAgdGl0bGU6ICdXb3JsZHZpZXcyJyxcclxuICAgIGJhbmRzOiBbXHJcbiAgICAgIHsgbmFtZTogJ0NvYXN0YWwoMSknLCB2YWx1ZTogJzEnIH0sXHJcbiAgICAgIHsgbmFtZTogJ0JsdWUoMiknLCB2YWx1ZTogJzInIH0sXHJcbiAgICAgIHsgbmFtZTogJ0dyZWVuKDMpJywgdmFsdWU6ICczJyB9LFxyXG4gICAgICB7IG5hbWU6ICdZZWxsb3coNCknLCB2YWx1ZTogJzQnIH0sXHJcbiAgICAgIHsgbmFtZTogJ1JlZCg1KScsIHZhbHVlOiAnNScgfSxcclxuICAgICAgeyBuYW1lOiAnUmVkIEVkZ2UoNiknLCB2YWx1ZTogJzYnIH0sXHJcbiAgICAgIHsgbmFtZTogJ05JUiAtMSg3KScsIHZhbHVlOiAnNycgfSxcclxuICAgICAgeyBuYW1lOiAnTklSIC0yKDgpJywgdmFsdWU6ICc4JyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdmYXNhdCcsXHJcbiAgICB0aXRsZTogJ09XRF9GYXNhdENfTVNfdjJfMjAyNTAzMTInLFxyXG4gICAgYmFuZHM6IFtcclxuICAgICAgeyBuYW1lOiAnUmVkKDEpJywgdmFsdWU6ICcxJyB9LFxyXG4gICAgICB7IG5hbWU6ICdHcmVlbigyKScsIHZhbHVlOiAnMicgfSxcclxuICAgICAgeyBuYW1lOiAnQmx1ZSgzKScsIHZhbHVlOiAnMycgfSxcclxuICAgICAgeyBuYW1lOiAnTklSKDQpJywgdmFsdWU6ICc0JyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdkZWZhdWx0JyxcclxuICAgIHRpdGxlOiAnRGVmYXVsdCcsXHJcbiAgICBiYW5kczogW1xyXG4gICAgICB7IG5hbWU6ICdCbHVlKDEpJywgdmFsdWU6ICcxJyB9LFxyXG4gICAgICB7IG5hbWU6ICdHcmVlbigyKScsIHZhbHVlOiAnMicgfSxcclxuICAgICAgeyBuYW1lOiAnUmVkKDMpJywgdmFsdWU6ICczJyB9LFxyXG4gICAgICB7IG5hbWU6ICdOSVIoNCknLCB2YWx1ZTogJzQnIH0sXHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgV2lkZ2V0OiBSZWFjdC5GQzxBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgdCB9ID0gdXNlTG9jYWxlKHRyYW5zbGF0aW9ucyk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkSW1hZ2VyaWVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5teVN0YXRlPy5zZWxlY3RlZEltYWdlcylcclxuICBjb25zdCBzZWxlY3RlZFNlbnNvciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUubXlTdGF0ZT8uc2VsZWN0ZWRTZW5zb3IpXHJcbiAgY29uc3QgZ2VvcHJvY2VzcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUubXlTdGF0ZT8uZ2VvcHJvY2VzcylcclxuXHJcbiAgY29uc3QgW2ppbXVNYXBWaWV3LCBzZXRKaW11TWFwVmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW5wdXRNaW5SYW5nZSwgc2V0SW5wdXRNaW5SYW5nZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaW5wdXRNYXhSYW5nZSwgc2V0SW5wdXRNYXhSYW5nZV0gPSB1c2VTdGF0ZSgwLjUpO1xyXG4gIGNvbnN0IFtpbnB1dFR5cGVBcmVhTWF4LCBzZXRJbnB1dFR5cGVBcmVhTWF4XSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtpbnB1dFR5cGVBcmVhTWluLCBzZXRJbnB1dFR5cGVBcmVhTWluXSA9IHVzZVN0YXRlKC0xKTtcclxuICBjb25zdCBbc2VsZWN0ZWRGb3JtdWxhLCBzZXRTZWxlY3RlZEZvcm11bGFdID0gdXNlU3RhdGUoJyhiNCAtIGIxKSAvIChiNCArIGIxKScpO1xyXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoWzAsIDI1NSwgMCwgMjU1XSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0ZpcmUsIHNldElzRmlyZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2F2YWlsYWJsZVNlbnNvcnMsIHNldEF2YWlsYWJsZVNlbnNvcnNdID0gdXNlU3RhdGUoc2Vuc29ycylcclxuICBjb25zdCBbaXNBcGxpZWQsIHNldElzQXBsaWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgLy9yZWZzXHJcbiAgY29uc3QgaW1hZ2VyeUxheWVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGVzcmlNb2R1bGVzUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHJcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12KSA9PiB7XHJcbiAgICBpZiAoam12KSB7XHJcbiAgICAgIC8vIGlmIChqaW11TWFwVmlldykge1xyXG4gICAgICAvLyAgIGppbXVNYXBWaWV3LnZpZXcud2F0Y2goJ2V4dGVudCcsIG51bGwpO1xyXG4gICAgICAvLyAgIGppbXVNYXBWaWV3LnZpZXcud2F0Y2goJ3pvb20nLCBudWxsKTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgc2V0SmltdU1hcFZpZXcoam12KTtcclxuXHJcbiAgICAgIC8vIGlmIChqbXYpIHtcclxuICAgICAgLy8gICBqbXYudmlldy53YXRjaCgnZXh0ZW50JywgYXBsaWNhck1hc2NhcmEpO1xyXG4gICAgICAvLyAgIGptdi52aWV3LndhdGNoKCd6b29tJywgYXBsaWNhck1hc2NhcmEpO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmFuZ2VDaGFuZ2UgPSAobWluVmFsdWUsIG1heFZhbHVlKSA9PiB7XHJcbiAgICBzZXRJbnB1dE1pblJhbmdlKG1pblZhbHVlKVxyXG4gICAgc2V0SW5wdXRNYXhSYW5nZShtYXhWYWx1ZSlcclxuICAgIGNyZWFySW1hZ2VyeUxheWVyKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9ybXVsYUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0SXNBcGxpZWQoZmFsc2UpXHJcbiAgICByZW1vdmVMYXllcigpXHJcbiAgICBjb25zdCBmb3JtdWxhID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgc3dpdGNoIChmb3JtdWxhKSB7XHJcblxyXG5cclxuICAgICAgY2FzZSBcIk5EVklcIjpcclxuICAgICAgICBzZXRJc0ZpcmUoZmFsc2UpXHJcbiAgICAgICAgLy9zZXRJbmRpY2VUeXBlKFwiTkRWSVwiKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRTZW5zb3IpIHtcclxuICAgICAgICAgIGNvbnN0IHNlbnNvciA9IGF2YWlsYWJsZVNlbnNvcnMuZmluZChzID0+IHMudGl0bGUgPT09IHNlbGVjdGVkU2Vuc29yLnRpdGxlIHx8IHMudGl0bGUgPT09IFwiRGVmYXVsdFwiKTtcclxuXHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ1dvcmxkdmlldzInKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ09XRF9GYXNhdENfTVNfdjJfMjAyNTAzMTInKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzBdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzBdPy52YWx1ZX0pYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ0RlZmF1bHQnKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0pYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENvbG9yKFswLCAyNTUsIDAsIDI1NV0pO1xyXG4gICAgICAgIHNldElucHV0VHlwZUFyZWFNYXgoMSk7XHJcbiAgICAgICAgc2V0SW5wdXRUeXBlQXJlYU1pbigtMSk7XHJcbiAgICAgICAgc2V0SW5wdXRNaW5SYW5nZSgwLjMpO1xyXG4gICAgICAgIHNldElucHV0TWF4UmFuZ2UoMC43KVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiU0FWSVwiOlxyXG4gICAgICAgIHNldElzRmlyZShmYWxzZSlcclxuICAgICAgICBpZiAoc2VsZWN0ZWRTZW5zb3IpIHtcclxuICAgICAgICAgIGNvbnN0IHNlbnNvciA9IGF2YWlsYWJsZVNlbnNvcnMuZmluZChzID0+IHMudGl0bGUgPT09IHNlbGVjdGVkU2Vuc29yLnRpdGxlIHx8IHMudGl0bGUgPT09IFwiRGVmYXVsdFwiKTtcclxuICAgICAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSAnV29ybGR2aWV3MicpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKGAoKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0gKyAwLDUpKSAqICgxICsgMCw1KWApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSAnT1dEX0Zhc2F0Q19NU192Ml8yMDI1MDMxMicpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKGAoKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzBdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzBdPy52YWx1ZX0gKyAwLDUpKSAqICgxICsgMCw1KWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdEZWZhdWx0Jykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYCgoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gLSBCJHtzZW5zb3IuYmFuZHNbMl0/LnZhbHVlfSkgLyAoQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0gKyBCJHtzZW5zb3IuYmFuZHNbMl0/LnZhbHVlfSArIDAsNSkpICogKDEgKyAwLDUpYCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q29sb3IoWzI1NSwgMjU1LCAwLCAyNTVdKTtcclxuICAgICAgICBzZXRJbnB1dFR5cGVBcmVhTWF4KDEuNSk7XHJcbiAgICAgICAgc2V0SW5wdXRUeXBlQXJlYU1pbigtMS41KTtcclxuICAgICAgICBzZXRJbnB1dE1pblJhbmdlKDAuMyk7XHJcbiAgICAgICAgc2V0SW5wdXRNYXhSYW5nZSgwLjcpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJORFdJXCI6XHJcbiAgICAgICAgc2V0SXNGaXJlKGZhbHNlKVxyXG4gICAgICAgIC8vc2V0SW5kaWNlVHlwZShcIk5EV0lcIik7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkU2Vuc29yKSB7XHJcbiAgICAgICAgICBjb25zdCBzZW5zb3IgPSBhdmFpbGFibGVTZW5zb3JzLmZpbmQocyA9PiBzLnRpdGxlID09PSBzZWxlY3RlZFNlbnNvci50aXRsZSB8fCBzLnRpdGxlID09PSBcIkRlZmF1bHRcIik7XHJcblxyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdXb3JsZHZpZXcyJykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYChCJHtzZW5zb3IuYmFuZHNbMl0/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbMl0/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9KWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdPV0RfRmFzYXRDX01TX3YyXzIwMjUwMzEyJykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYChCJHtzZW5zb3IuYmFuZHNbMV0/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbMV0/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9KWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdEZWZhdWx0Jykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYChCJHtzZW5zb3IuYmFuZHNbMV0/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbMV0/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9KWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDb2xvcihbMCwgMCwgMjU1LCAyNTVdKTtcclxuICAgICAgICBzZXRJbnB1dFR5cGVBcmVhTWF4KDEpO1xyXG4gICAgICAgIHNldElucHV0VHlwZUFyZWFNaW4oLTEpO1xyXG4gICAgICAgIHNldElucHV0TWluUmFuZ2UoMC4zKTtcclxuICAgICAgICBzZXRJbnB1dE1heFJhbmdlKDAuNylcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkJBSVwiOlxyXG4gICAgICAgIHNldElzRmlyZSh0cnVlKVxyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhckltYWdlcnlMYXllciA9ICgpID0+IHtcclxuXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgLy9TaWVtcHJlIHkgY3VhbmRvIGVsIGFycmF5IHNlbGVjdGVkSW1hZ2VyaWVzIHRlbmdhIGFsIG1lbm9zIDIgZWxlbWVudG9zXHJcbiAgICBpZiAoc2VsZWN0ZWRJbWFnZXJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvL1NlIGFzaWduYW4gbGFzIGltYWdlbmVzIGEgbGFzIHZhcmlhYmxlc1xyXG4gICAgICBsZXQgaW1nMURhdGEgPSBzZWxlY3RlZEltYWdlcmllc1swXT8uT0JKRUNUSUQ7XHJcblxyXG4gICAgICAvLyBWYWxpZGFyIHF1ZSBhbCBtZW5vcyB1bmEgc2VsZWNjacOzbiBzZWEgdsOhbGlkYVxyXG4gICAgICBpZiAoaW1nMURhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAvL1NpIGV4aXRlIGVsIG1hcGEgeSBleGlzdGFuIGxvcyBtb2R1bG9zIGRlIEVzcmlcclxuICAgICAgICBpZiAoamltdU1hcFZpZXcgJiYgZXNyaU1vZHVsZXNSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgLy9TZSB1dGlsaXphbiBsb3MgbW9kdWxvcyBkZSBFc3JpXHJcbiAgICAgICAgICBjb25zdCB7IEltYWdlcnlMYXllciwgUmFzdGVyRnVuY3Rpb24sIFJhc3RlclN0cmV0Y2hSZW5kZXJlciB9ID0gZXNyaU1vZHVsZXNSZWYuY3VycmVudDtcclxuICAgICAgICAgIC8vU2UgYnVzY2EgbGEgY2FwYSBcclxuICAgICAgICAgIGNvbnN0IGltYWdlcnlMYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmZpbmRMYXllckJ5SWQoc2VsZWN0ZWRTZW5zb3I/LmlkKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgaW1hZ2VyeUxheWVyIH0pXHJcbiAgICAgICAgICAvL1NlIGFzaWduYSBsYSB1cmwgZGUgbGEgY2FwYVxyXG4gICAgICAgICAgY29uc3QgbGF5ZXJVcmwgPSBpbWFnZXJ5TGF5ZXIudXJsXHJcbiAgICAgICAgICAvL1NlIGNyZWEgbGEgZXhwcmVzaW9uIGRlIGxhIGNvbnN1bHRhXHJcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uRXhwcmVzc2lvbiA9IGBPQkpFQ1RJRCBJTiAoJHtpbWcxRGF0YX0pYDtcclxuXHJcbiAgICAgICAgICAvL1NlIGNyZWEgbGEgZnVuY2lvbiBSYXN0ZXIgZGUgbGEgY29uc3VsdGFcclxuICAgICAgICAgIGNvbnN0IGJhbmRBcml0aG1ldGljRnVuY3Rpb24gPSBuZXcgUmFzdGVyRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6ICdCYW5kQXJpdGhtZXRpYycsXHJcbiAgICAgICAgICAgIG91dHB1dFBpeGVsVHlwZTogJ0YzMicsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uQXJndW1lbnRzOiB7XHJcbiAgICAgICAgICAgICAgTWV0aG9kOiAwLFxyXG4gICAgICAgICAgICAgIEJhbmRJbmRleGVzOiBzZWxlY3RlZEZvcm11bGEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZW1hcEZ1bmN0aW9uID0gbmV3IFJhc3RlckZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiAnUmVtYXAnLFxyXG4gICAgICAgICAgICBvdXRwdXRQaXhlbFR5cGU6ICdGMzInLFxyXG4gICAgICAgICAgICBmdW5jdGlvbkFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICAgIFJhc3RlcjogYmFuZEFyaXRobWV0aWNGdW5jdGlvbixcclxuICAgICAgICAgICAgICBJbnB1dFJhbmdlczogW2lucHV0TWluUmFuZ2UsIGlucHV0TWF4UmFuZ2VdLFxyXG4gICAgICAgICAgICAgIE91dHB1dFZhbHVlczogWzJdLFxyXG4gICAgICAgICAgICAgIE5vRGF0YVJhbmdlczogWy1JbmZpbml0eSwgaW5wdXRUeXBlQXJlYU1pbiwgaW5wdXRUeXBlQXJlYU1heCwgSW5maW5pdHldLFxyXG4gICAgICAgICAgICAgIEFsbG93VW5tYXRjaGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHN0cmV0Y2hSZW5kZXJlciA9IG5ldyBSYXN0ZXJTdHJldGNoUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICBzdHJldGNoVHlwZTogJ21pbi1tYXgnLFxyXG4gICAgICAgICAgICBzdGF0aXN0aWNzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWluOiBpbnB1dFR5cGVBcmVhTWluLFxyXG4gICAgICAgICAgICAgICAgbWF4OiBpbnB1dFR5cGVBcmVhTWF4LFxyXG4gICAgICAgICAgICAgICAgYXZnOiAoaW5wdXRUeXBlQXJlYU1pbiArIGlucHV0VHlwZUFyZWFNYXgpIC8gMixcclxuICAgICAgICAgICAgICAgIHN0ZGRldjogMC4xLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNvbG9yUmFtcDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdhbGdvcml0aG1pYycsXHJcbiAgICAgICAgICAgICAgZnJvbUNvbG9yOiBbMjU1LCAyNTUsIDI1NSwgMF0sXHJcbiAgICAgICAgICAgICAgdG9Db2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vU2UgY3JlYSBsYSBudWV2YSBjYXBhIGZpbHRyYWRhIHBvciBpZFxyXG4gICAgICAgICAgY29uc3QgbmV3SW1hZ2VyeUxheWVyID0gbmV3IEltYWdlcnlMYXllcih7XHJcbiAgICAgICAgICAgIHVybDogbGF5ZXJVcmwsXHJcbiAgICAgICAgICAgIGlkOiAnw41uZGljZXMgZXNwZWN0cmFsZXMnLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB0aXRsZTogdChcIndpZGdldExhYmVsXCIpLFxyXG4gICAgICAgICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbiwgLy8gRmlsdHJvIHBvciBPQkpFQ1RJRFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gRWxpbWluYXIgbGEgY2FwYSBleGlzdGVudGUgc2kgeWEgZXN0w6EgY2FyZ2FkYVxyXG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmZpbmRMYXllckJ5SWQoJ8ONbmRpY2VzIGVzcGVjdHJhbGVzJyk7XHJcbiAgICAgICAgICBpZiAoZXhpc3RpbmdMYXllcikge1xyXG4gICAgICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUoZXhpc3RpbmdMYXllcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gQWdyZWdhciBsYSBudWV2YSBjYXBhIGNvbiBsb3MgZmlsdHJvcyB5IHJlbmRlcml6YWRvcmVzXHJcbiAgICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobmV3SW1hZ2VyeUxheWVyKTtcclxuXHJcbiAgICAgICAgICAvLyBBc2lnbmFyIGZ1bmNpb25lcyB5IHJlbmRlcml6YWRvclxyXG4gICAgICAgICAgbmV3SW1hZ2VyeUxheWVyLnJhc3RlckZ1bmN0aW9uID0gcmVtYXBGdW5jdGlvbjtcclxuICAgICAgICAgIG5ld0ltYWdlcnlMYXllci5yZW5kZXJlciA9IHN0cmV0Y2hSZW5kZXJlcjtcclxuXHJcbiAgICAgICAgICBpbWFnZXJ5TGF5ZXJSZWYuY3VycmVudCA9IG5ld0ltYWdlcnlMYXllcjtcclxuXHJcbiAgICAgICAgICAvLyBWYWxpZGFyIGN1YW5kbyBsYSBjYXBhIGVzdMOpIGxpc3RhXHJcbiAgICAgICAgICBuZXdJbWFnZXJ5TGF5ZXIud2hlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjYXJnYW5kbyBlbCBsYXllcjpcIiwgZXJyKVxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCBpbmRpY2VCYWkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgIGNvbnN0IGltZzFEYXRhID0gc2VsZWN0ZWRJbWFnZXJpZXNbMF0uT0JKRUNUSUQ7XHJcblxyXG4gICAgICBjb25zdCBwcm9jZXNvID0gNTtcclxuICAgICAgY29uc3QgZW50cmFkYSA9IGltZzFEYXRhO1xyXG4gICAgICB2YXIgdXJsQ29uc3VsdGEgPSBgaHR0cDovLzEyNy4wLjAuMTo1MDAwL3Byb3h5P3Byb2Nlc289JHtwcm9jZXNvfSZFbnRyYWRhPSR7ZW50cmFkYX0mdXJsPSR7c2VsZWN0ZWRTZW5zb3IudXJsfWBcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsQ29uc3VsdGEsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBcclxuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMCR7ZGF0YS51cmxKc29ufWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGFWYWxpZGFkYSA9IGF3YWl0IHJlc3BvbnNlRGF0YS5qc29uKCk7XHJcblxyXG4gICAgICAvL3NldEluZGljZVR5cGUoXCJCQUlcIik7XHJcbiAgICAgIGlmIChzZWxlY3RlZFNlbnNvcikge1xyXG4gICAgICAgIGNvbnN0IHNlbnNvciA9IHNlbnNvcnMuZmluZChzID0+IHMudGl0bGUgPT09IHNlbGVjdGVkU2Vuc29yLnRpdGxlKTtcclxuICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ1dvcmxkdmlldzInKSB7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYDEgLyAoKCgwLDEgLSBCJHtzZW5zb3IuYmFuZHNbNF0/LnZhbHVlfSleMikgKyAoKDAsMDYgLSBCJHtzZW5zb3IuYmFuZHNbNl0/LnZhbHVlfSleMikpYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZW5zb3I/LnRpdGxlID09PSAnT1dEX0Zhc2F0Q19NU192Ml8yMDI1MDMxMicpIHtcclxuICAgICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgMSAvICgoKDAsMSAtIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9KV4yKSArICgoMCwwNiAtIEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9KV4yKSlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdEZWZhdWx0Jykge1xyXG4gICAgICAgICAgc2V0U2VsZWN0ZWRGb3JtdWxhKGAxIC8gKCgoMCwxIC0gQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0pXjIpICsgKCgwLDA2IC0gQiR7c2Vuc29yLmJhbmRzWzNdPy52YWx1ZX0pXjIpKWApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YVZhbGlkYWRhKVxyXG4gICAgICBzZXRDb2xvcihbMjU1LCAwLCAwLCAyNTVdKTtcclxuICAgICAgc2V0SW5wdXRUeXBlQXJlYU1pbihwYXJzZUZsb2F0KGRhdGFWYWxpZGFkYS5ldGlxdWV0YXMuZXRpcXVldGFfMSkpO1xyXG4gICAgICBzZXRJbnB1dE1pblJhbmdlKHBhcnNlRmxvYXQoZGF0YVZhbGlkYWRhLmV0aXF1ZXRhcy5ldGlxdWV0YV8zKSk7XHJcbiAgICAgIHNldElucHV0TWF4UmFuZ2UocGFyc2VGbG9hdChkYXRhVmFsaWRhZGEuZXRpcXVldGFzLmV0aXF1ZXRhXzQpKTtcclxuICAgICAgc2V0SW5wdXRUeXBlQXJlYU1heChwYXJzZUZsb2F0KGRhdGFWYWxpZGFkYS5ldGlxdWV0YXMuZXRpcXVldGFfNSkpO1xyXG5cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBlbnZpYXIgbGEgc29saWNpdHVkOicsIGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vU2UgY3JlYSB1bmEgZnVuY2lvbiBwYXJhIGNhcmdhciBsb3MgbW9kdWxvcyBkZSBFc3JpXHJcbiAgY29uc3QgbG9hZEVzcmlNb2R1bGVzID0gKCkgPT4ge1xyXG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgIGxvYWRNb2R1bGVzKFtcclxuICAgICAgICAnZXNyaS9sYXllcnMvc3VwcG9ydC9SYXN0ZXJGdW5jdGlvbicsXHJcbiAgICAgICAgJ2VzcmkvcmVuZGVyZXJzL1Jhc3RlclN0cmV0Y2hSZW5kZXJlcicsXHJcbiAgICAgICAgJ2VzcmkvbGF5ZXJzL0ltYWdlcnlMYXllcicsXHJcbiAgICAgICAgJ2VzcmkvcmVzdC9xdWVyeScsXHJcbiAgICAgICAgJ2Vzcmkvd2lkZ2V0cy9IaXN0b2dyYW0nLFxyXG4gICAgICAgIFwiZXNyaS9yZXF1ZXN0XCJcclxuICAgICAgXSlcclxuICAgICAgICAudGhlbigoW1Jhc3RlckZ1bmN0aW9uLCBSYXN0ZXJTdHJldGNoUmVuZGVyZXIsIEltYWdlcnlMYXllciwgcXVlcnksIEhpc3RvZ3JhbSwgZXNyaVJlcXVlc3RdKSA9PiB7XHJcbiAgICAgICAgICBlc3JpTW9kdWxlc1JlZi5jdXJyZW50ID0geyBSYXN0ZXJGdW5jdGlvbiwgUmFzdGVyU3RyZXRjaFJlbmRlcmVyLCBJbWFnZXJ5TGF5ZXIsIHF1ZXJ5LCBIaXN0b2dyYW0sIGVzcmlSZXF1ZXN0IH07XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBFU1JJIG1vZHVsZXM6ICcsIGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHJlbW92ZUxheWVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkU2Vuc29yKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nTGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKCfDjW5kaWNlcyBlc3BlY3RyYWxlcycpO1xyXG4gICAgICBpZiAoZXhpc3RpbmdMYXllcikge1xyXG4gICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShleGlzdGluZ0xheWVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVtb3ZlTGF5ZXIoKVxyXG4gICAgaWYgKHNlbGVjdGVkU2Vuc29yKSB7XHJcbiAgICAgIGNvbnN0IHNlbnNvciA9IGF2YWlsYWJsZVNlbnNvcnMuZmluZChzID0+IHMudGl0bGUgPT09IHNlbGVjdGVkU2Vuc29yLnRpdGxlIHx8IHMudGl0bGUgPT09IFwiRGVmYXVsdFwiKTtcclxuICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdXb3JsZHZpZXcyJykge1xyXG4gICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1s2XT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzRdPy52YWx1ZX0pYCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdPV0RfRmFzYXRDX01TX3YyXzIwMjUwMzEyJykge1xyXG4gICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzBdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzBdPy52YWx1ZX0pYCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlbnNvcj8udGl0bGUgPT09ICdEZWZhdWx0Jykge1xyXG4gICAgICAgIHNldFNlbGVjdGVkRm9ybXVsYShgKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9IC0gQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0pIC8gKEIke3NlbnNvci5iYW5kc1szXT8udmFsdWV9ICsgQiR7c2Vuc29yLmJhbmRzWzJdPy52YWx1ZX0pYCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRDb2xvcihbMCwgMjU1LCAwLCAyNTVdKTtcclxuICAgIHNldElucHV0VHlwZUFyZWFNYXgoMSk7XHJcbiAgICBzZXRJbnB1dFR5cGVBcmVhTWluKC0xKTtcclxuICAgIHNldElucHV0TWluUmFuZ2UoMC4zKTtcclxuICAgIHNldElucHV0TWF4UmFuZ2UoMC43KVxyXG4gIH0sIFtzZWxlY3RlZFNlbnNvciwgZ2VvcHJvY2Vzc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZEVzcmlNb2R1bGVzKClcclxuICB9LCBbamltdU1hcFZpZXddKTtcclxuXHJcbiAgLy9FamVjdXRhIGxhIGNyZWFjaW9uIGRlbCBsYXllciBkZSBsYXMgaW1hZ2VuZXMsIHkgZGV0ZWN0YSBjdWFuZG8gc2UgbW9kaWZpY2EgZWwgaW5wdXQgcmFuZ2UgcXVlIHNlIGVuY2FyZ2EgZGUgY2FsY3VsYXIgbnVldmFtZW50ZSBlbCByYW5nb1xyXG4gIC8vVGFtYmllbiBjdWFuZG8gY2FtYmlhIGVsIGFycmF5IGRlIGltYWdlbmVzIHNlbGVjY2lvbmFkYXNcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZEltYWdlcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmIChzZWxlY3RlZFNlbnNvcikge1xyXG4gICAgICAgIGNvbnN0IHNlbnNvciA9IGF2YWlsYWJsZVNlbnNvcnMuZmluZChzID0+IHMudGl0bGUgPT09IHNlbGVjdGVkU2Vuc29yLnRpdGxlIHx8IHMudGl0bGUgPT09IFwiRGVmYXVsdFwiKTtcclxuICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ1dvcmxkdmlldzInKSB7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYChCJHtzZW5zb3IuYmFuZHNbNl0/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1s0XT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbNl0/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1s0XT8udmFsdWV9KWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ09XRF9GYXNhdENfTVNfdjJfMjAyNTAzMTInKSB7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1swXT8udmFsdWV9KWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2Vuc29yPy50aXRsZSA9PT0gJ0RlZmF1bHQnKSB7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZEZvcm11bGEoYChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSAtIEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9KSAvIChCJHtzZW5zb3IuYmFuZHNbM10/LnZhbHVlfSArIEIke3NlbnNvci5iYW5kc1syXT8udmFsdWV9KWApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0Q29sb3IoWzAsIDI1NSwgMCwgMjU1XSk7XHJcbiAgICAgIHNldElucHV0VHlwZUFyZWFNYXgoMSk7XHJcbiAgICAgIHNldElucHV0VHlwZUFyZWFNaW4oLTEpO1xyXG4gICAgICBzZXRJbnB1dE1pblJhbmdlKDAuMyk7XHJcbiAgICAgIHNldElucHV0TWF4UmFuZ2UoMC43KVxyXG5cclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZEltYWdlcmllcy5sZW5ndGggPT09IDAgJiYgamltdU1hcFZpZXcpIHtcclxuICAgICAgY29uc3QgZXhpc3RpbmdMYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmZpbmRMYXllckJ5SWQoJ8ONbmRpY2VzIGVzcGVjdHJhbGVzJyk7XHJcbiAgICAgIGlmIChleGlzdGluZ0xheWVyKSB7XHJcbiAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGV4aXN0aW5nTGF5ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH0sIFtzZWxlY3RlZEltYWdlcmllcywgc2VsZWN0ZWRTZW5zb3JdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzRmlyZSkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIGluZGljZUJhaSgpXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfSwgW2lzRmlyZV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0IHdpZGdldE1hc2tcIj5cclxuICAgICAge3Byb3BzLnVzZU1hcFdpZGdldElkcyAmJiBwcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcclxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XHJcbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lTWFzayc+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoND57dChcIndpZGdldExhYmVsXCIpfTwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2VsZWN0ZWRJbWFnZXJpZXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BlY3RyYWwtaW5kZXgtZGVzY3JpcHRpb24nPlxyXG4gICAgICAgICAgICAgIDxwPnt0KFwic3BlY3RyYWxSdWxlXCIpfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9J2FjdGl2ZU1hc2syJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50U2xpY2VNYXNrLUJhc2UnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0Q2xhc3NJbmRpY2UnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZm9ybXVsYVNlbGVjdFwiPnt0KFwic2VsZWN0TmFtZVwiKX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgaWQ9XCJmb3JtdWxhU2VsZWN0XCIgb25DaGFuZ2U9e2hhbmRsZUZvcm11bGFDaGFuZ2V9IHNpemU9XCJzbVwiIGRlZmF1bHRWYWx1ZT17XCJORFZJXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5EVklcIj57dChcIm5kdmlcIil9IC0gTkRWSTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNBVklcIj57dChcInNhdmlcIil9IC0gU0FWSTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5EV0lcIj57dChcIm5kd2lcIil9IC0gTkRXSTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJBSVwiPnt0KFwiYmFpXCIpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50U2xpY2VNYXNrJz5cclxuICAgICAgICAgICAgICAgICAgICA8TXVsdGlSYW5nZVNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk11bHRpIHJhbmdlIHNsaWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZT17aW5wdXRNYXhSYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1pblZhbHVlPXtpbnB1dE1pblJhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWF4PXtpbnB1dFR5cGVBcmVhTWF4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWluPXtpbnB1dFR5cGVBcmVhTWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17KCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhtaW4sIG1heCwgYWN0aXZlVGh1bWIpID0+IGhhbmRsZVJhbmdlQ2hhbmdlKG1pbiwgbWF4KX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e2lzRmlyZSA/IDAuMDAwMDEgOiAwLjA1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNYXJjYWRvcmVzIGRlIGzDrW5lYXMgcGVxdWXDsWFzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXItbWFya3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1tYXJrJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXItbWFyayc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyLW1hcmsnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlci1tYXJrJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXItbWFyayc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnRTbGljZU1hc2tQcmknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbGFiZWwxTWFzayc+e2lucHV0VHlwZUFyZWFNaW4udG9GaXhlZCg0KX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbGFiZWwxTWFzayc+eygoaW5wdXRUeXBlQXJlYU1heCAvIDIpICsgaW5wdXRUeXBlQXJlYU1pbikudG9GaXhlZCg0KX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nY2VudGVyTWFzayBsYWJlbDFNYXNrJz57KChpbnB1dFR5cGVBcmVhTWluICsgaW5wdXRUeXBlQXJlYU1heCkgLyAyKS50b0ZpeGVkKDQpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbDFNYXNrJz57KGlucHV0VHlwZUFyZWFNYXggLyAyKS50b0ZpeGVkKDQpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdyaWdodE1hc2sgbGFiZWwxTWFzayc+eyhpbnB1dFR5cGVBcmVhTWF4KS50b0ZpeGVkKDQpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21hc2stYnV0dG9ucyc+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIHR5cGU9XCJET05VVFwiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4geyBjcmVhckltYWdlcnlMYXllcigpLCBzZXRJc0FwbGllZCh0cnVlKSB9fSBzaXplPVwic21cIiB0eXBlPVwicHJpbWFyeVwiPnt0KFwiYXBwbHlcIil9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=