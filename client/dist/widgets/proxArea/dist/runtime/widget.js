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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/proxArea/src/runtime/assets/style.css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/proxArea/src/runtime/assets/style.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
.proximity-widget {
  background-color: #052042;
  width: 100%;
  height: 100%;
  margin: 0 !important;
  overflow: hidden;
  color: white;
}

.proximity-main-content {
  padding: 15px;
  height: 100%;
}

.proximity-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 170px;
  p {
    font-size: 14px;
    color: white;
  }
}

.proximity-buttons {
  width: 100%;
  display: flex;
  button {
    background-color: #1a5276;
    flex: 1;
    padding: 0.5rem 1rem;
    height: 2rem;
    margin: 1rem;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    &:hover {
      border: 1px solid #008ecc;
      background-color: #052042 !important;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
}

.proximity-buffer-input {
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  width: 100%;
  input {
    width: 60%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    background-color: #23282B;
    color: white;
    transition: all 0.3s ease;
    &:focus {
      border-color: #008ecc;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      outline: none;
    }
  }
  p {
    width: 30%;
    text-align: left;
    margin: 0;
    font-size: 14px;
    color: white;
  }
}

.proximity-buffer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #mySketchContainerPunto {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    min-width: 180px;
    border: white solid 1px;
    border-radius: 5px;
    background-color: #1a5276;
    color: #fff;
  }
  .proximity-buffer-actions {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: end;
    button {
      background-color: #1a5276;
      padding: 0.5rem 1rem;
      height: 1.5rem;
      border-radius: 25px;
      transition: all 0.3s ease;
      width: 100%;
      &:hover {
        border: 1px solid #008ecc;
        background-color: #052042 !important;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    }
  }
}

/* Override del highlight de selección del Sketch - Color cyan */
#mySketchContainerPunto .esri-sketch__graphics-layer-highlight {
  stroke: cyan !important;
  stroke-width: 3px !important;
  fill: rgba(0, 255, 255, 0.1) !important;
}

/* Estilos para el contenedor del Sketch cuando hay selección activa */
.esri-view .esri-view-surface--inset-outline:focus::after {
  outline-color: cyan !important;
}

/* Override del color de selección del polígono en el mapa */
.esri-sketch__graphics-layer .esri-sketch__graphics-layer--selected {
  outline: 3px solid cyan !important;
}

/* Personalización del texto "Selección" */
#mySketchContainerPunto .esri-sketch__heading-text::after {
  content: " de polígonos";
  font-size: inherit;
}

/* Método alternativo para sobrescribir el label completo */
#mySketchContainerPunto .esri-sketch__section-label:first-of-type {
  font-size: 0;
}

#mySketchContainerPunto .esri-sketch__section-label:first-of-type::before {
  font-size: 14px;
  content: "Polígonos seleccionados: ";
  color: #00FFFF;
  font-weight: bold;
}`, "",{"version":3,"sources":["webpack://./../../../geoprocesos%20exprience%20builder/ArcGISExperienceBuilder/client/your-extensions/widgets/proxArea/src/runtime/assets/style.css","webpack://./your-extensions/widgets/proxArea/src/runtime/assets/style.css"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,yBAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,YAAA;ADEF;;ACAA;EACE,aAAA;EACA,YAAA;ADGF;;ACAA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;EACA;IACE,eAAA;IACA,YAAA;EDGF;AACF;;ACAA;EACE,WAAA;EACA,aAAA;EAEA;IACE,yBAAA;IACA,OAAA;IACA,oBAAA;IACA,YAAA;IACA,YAAA;IACA,yBAAA;IACA,6BAAA;IACA;MACE,yBAAA;MACA,oCAAA;MACA,wCAAA;IDEF;EACF;AACF;;ACAA;EACE,aAAA;EACA,uBAAA;EACA,QAAA;EACA,mBAAA;EACA,WAAA;EAEA;IACE,UAAA;IACA,eAAA;IACA,sBAAA;IACA,yBAAA;IACA,YAAA;IACA,yBAAA;IACA;MACE,qBAAA;MACA,wCAAA;MACA,aAAA;IDEF;EACF;ECAA;IACE,UAAA;IACA,gBAAA;IACA,SAAA;IACA,eAAA;IACA,YAAA;EDEF;AACF;;ACAA;EACE,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EAEA;IACE,aAAA;IACA,eAAA;IACA,UAAA;IACA,gBAAA;IACA,uBAAA;IACA,kBAAA;IACA,yBAAA;IACA,WAAA;EDEF;ECCA;IACE,aAAA;IACA,sBAAA;IACA,QAAA;IACA,oBAAA;IAEA;MACE,yBAAA;MACA,oBAAA;MACA,cAAA;MACA,mBAAA;MACA,yBAAA;MACA,WAAA;MAEA;QACE,yBAAA;QACA,oCAAA;QACA,wCAAA;MDDF;IACF;EACF;AACF;;ACIA,gEAAA;AACA;EACE,uBAAA;EACA,4BAAA;EACA,uCAAA;ADDF;;ACIA,sEAAA;AACA;EACE,8BAAA;ADDF;;ACIA,4DAAA;AACA;EACE,kCAAA;ADDF;;ACIA,0CAAA;AACA;EACE,wBAAA;EACA,kBAAA;ADDF;;ACIA,2DAAA;AACA;EACE,YAAA;ADDF;;ACIA;EACE,eAAA;EACA,oCAAA;EACA,cAAA;EACA,iBAAA;ADDF","sourcesContent":["@charset \"UTF-8\";\n.proximity-widget {\n  background-color: #052042;\n  width: 100%;\n  height: 100%;\n  margin: 0 !important;\n  overflow: hidden;\n  color: white;\n}\n\n.proximity-main-content {\n  padding: 15px;\n  height: 100%;\n}\n\n.proximity-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  min-height: 170px;\n  p {\n    font-size: 14px;\n    color: white;\n  }\n}\n\n.proximity-buttons {\n  width: 100%;\n  display: flex;\n  button {\n    background-color: #1a5276;\n    flex: 1;\n    padding: 0.5rem 1rem;\n    height: 2rem;\n    margin: 1rem;\n    transition: all 0.3s ease;\n    border: 1px solid transparent;\n    &:hover {\n      border: 1px solid #008ecc;\n      background-color: #052042 !important;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n}\n\n.proximity-buffer-input {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n  align-items: center;\n  width: 100%;\n  input {\n    width: 60%;\n    padding: 0.5rem;\n    border: 1px solid #ccc;\n    background-color: #23282B;\n    color: white;\n    transition: all 0.3s ease;\n    &:focus {\n      border-color: #008ecc;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      outline: none;\n    }\n  }\n  p {\n    width: 30%;\n    text-align: left;\n    margin: 0;\n    font-size: 14px;\n    color: white;\n  }\n}\n\n.proximity-buffer {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  #mySketchContainerPunto {\n    display: flex;\n    flex-wrap: wrap;\n    width: 50%;\n    min-width: 180px;\n    border: white solid 1px;\n    border-radius: 5px;\n    background-color: #1a5276;\n    color: #fff;\n  }\n  .proximity-buffer-actions {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    justify-content: end;\n    button {\n      background-color: #1a5276;\n      padding: 0.5rem 1rem;\n      height: 1.5rem;\n      border-radius: 25px;\n      transition: all 0.3s ease;\n      width: 100%;\n      &:hover {\n        border: 1px solid #008ecc;\n        background-color: #052042 !important;\n        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      }\n    }\n  }\n}\n\n/* Override del highlight de selección del Sketch - Color cyan */\n#mySketchContainerPunto .esri-sketch__graphics-layer-highlight {\n  stroke: cyan !important;\n  stroke-width: 3px !important;\n  fill: rgba(0, 255, 255, 0.1) !important;\n}\n\n/* Estilos para el contenedor del Sketch cuando hay selección activa */\n.esri-view .esri-view-surface--inset-outline:focus::after {\n  outline-color: cyan !important;\n}\n\n/* Override del color de selección del polígono en el mapa */\n.esri-sketch__graphics-layer .esri-sketch__graphics-layer--selected {\n  outline: 3px solid cyan !important;\n}\n\n/* Personalización del texto \"Selección\" */\n#mySketchContainerPunto .esri-sketch__heading-text::after {\n  content: \" de polígonos\";\n  font-size: inherit;\n}\n\n/* Método alternativo para sobrescribir el label completo */\n#mySketchContainerPunto .esri-sketch__section-label:first-of-type {\n  font-size: 0;\n}\n\n#mySketchContainerPunto .esri-sketch__section-label:first-of-type::before {\n  font-size: 14px;\n  content: \"Polígonos seleccionados: \";\n  color: #00FFFF;\n  font-weight: bold;\n}","@charset \"UTF-8\";\n.proximity-widget {\n  background-color: #052042;\n  width: 100%;\n  height: 100%;\n  margin: 0 !important;\n  overflow: hidden;\n  color: white;\n}\n\n.proximity-main-content {\n  padding: 15px;\n  height: 100%;\n}\n\n.proximity-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  min-height: 170px;\n  p {\n    font-size: 14px;\n    color: white;\n  }\n}\n\n.proximity-buttons {\n  width: 100%;\n  display: flex;\n  button {\n    background-color: #1a5276;\n    flex: 1;\n    padding: 0.5rem 1rem;\n    height: 2rem;\n    margin: 1rem;\n    transition: all 0.3s ease;\n    border: 1px solid transparent;\n    &:hover {\n      border: 1px solid #008ecc;\n      background-color: #052042 !important;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n}\n\n.proximity-buffer-input {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n  align-items: center;\n  width: 100%;\n  input {\n    width: 60%;\n    padding: 0.5rem;\n    border: 1px solid #ccc;\n    background-color: #23282B;\n    color: white;\n    transition: all 0.3s ease;\n    &:focus {\n      border-color: #008ecc;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      outline: none;\n    }\n  }\n  p {\n    width: 30%;\n    text-align: left;\n    margin: 0;\n    font-size: 14px;\n    color: white;\n  }\n}\n\n.proximity-buffer {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  #mySketchContainerPunto {\n    display: flex;\n    flex-wrap: wrap;\n    width: 50%;\n    min-width: 180px;\n    border: white solid 1px;\n    border-radius: 5px;\n    background-color: #1a5276;\n    color: #fff;\n  }\n  .proximity-buffer-actions {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    justify-content: end;\n    button {\n      background-color: #1a5276;\n      padding: 0.5rem 1rem;\n      height: 1.5rem;\n      border-radius: 25px;\n      transition: all 0.3s ease;\n      width: 100%;\n      &:hover {\n        border: 1px solid #008ecc;\n        background-color: #052042 !important;\n        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      }\n    }\n  }\n}\n\n/* Override del highlight de selección del Sketch - Color cyan */\n#mySketchContainerPunto .esri-sketch__graphics-layer-highlight {\n  stroke: cyan !important;\n  stroke-width: 3px !important;\n  fill: rgba(0, 255, 255, 0.1) !important;\n}\n\n/* Estilos para el contenedor del Sketch cuando hay selección activa */\n.esri-view .esri-view-surface--inset-outline:focus::after {\n  outline-color: cyan !important;\n}\n\n/* Override del color de selección del polígono en el mapa */\n.esri-sketch__graphics-layer .esri-sketch__graphics-layer--selected {\n  outline: 3px solid cyan !important;\n}\n\n/* Personalización del texto \"Selección\" */\n#mySketchContainerPunto .esri-sketch__heading-text::after {\n  content: \" de polígonos\";\n  font-size: inherit;\n}\n\n/* Método alternativo para sobrescribir el label completo */\n#mySketchContainerPunto .esri-sketch__section-label:first-of-type {\n  font-size: 0;\n}\n\n#mySketchContainerPunto .esri-sketch__section-label:first-of-type::before {\n  font-size: 14px;\n  content: \"Polígonos seleccionados: \";\n  color: #00FFFF;\n  font-weight: bold;\n}"],"sourceRoot":""}]);
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

/***/ "./your-extensions/widgets/proxArea/src/runtime/assets/style.css":
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/proxArea/src/runtime/assets/style.css ***!
  \***********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/proxArea/src/runtime/assets/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./your-extensions/helpers/getSessionToken.ts":
/*!****************************************************!*\
  !*** ./your-extensions/helpers/getSessionToken.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSessionToken: () => (/* binding */ getSessionToken)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

// Función helper para obtener el token de la sesión
const getSessionToken = () => {
    try {
        const sessionManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance();
        const sessions = sessionManager === null || sessionManager === void 0 ? void 0 : sessionManager.getSessions();
        // Obtener el token de la primera sesión activa
        if (sessions && sessions.length > 0) {
            return sessions[0].token || null;
        }
        return null;
    }
    catch (error) {
        console.error("Error al obtener el token de sesión:", error);
        return null;
    }
};


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

/***/ "./your-extensions/widgets/proxArea/src/runtime/translations.ts":
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/proxArea/src/runtime/translations.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translations: () => (/* binding */ translations)
/* harmony export */ });
const translations = {
    es: {
        widgetLabel: "Proximidad de áreas de Riesgo",
        description: "Este widget permite a partir de la detección de áreas quemadas e inundadas, generar líneas de proximidad a límites urbanos más cercanos.",
        incendio: "Incendios",
        inundacion: "Inundaciones",
        bufferLabel: "Kms área de influencia",
        generarBuffer: "Generar área de influencia",
        dibujarLineas: "Dibujar líneas de proximidad",
        errorImagen: "Debe seleccionar una imagen antes de ejecutar este proceso",
        errorBuffer: "Debe seleccionar mínimo un polígono.",
        minKmWarning: "El valor debe ser menor o igual 100 km.",
        maxKmWarning: "El valor debe ser mayor o igual 1 km.",
        fireLayer: "Zonas quemadas",
        floodLayer: "Zonas inundadas",
        fireError: "Error al cargar riesgo de incendio, intenta de nuevo",
        floodError: "Error al cargar riesgo de inundacion, intenta de nuevo",
        bufferLayer: "Buffer de zona afectada",
        bufferWarning: "Debe seleccionar mínimo un polígono.",
        bufferError: "Error al generar el buffer.",
        proximityLayer: "Líneas de Proximidad",
        urbanLimitsError: "No existen límites urbanos dentro del área."
    },
    en: {
        widgetLabel: "Risk Area Proximity",
        description: "This widget allows generating proximity lines to the nearest urban limits from burned or flooded areas.",
        incendio: "Wildfires",
        inundacion: "Floods",
        bufferLabel: "Buffer distance (km)",
        generarBuffer: "Generate buffer area",
        dibujarLineas: "Draw proximity lines",
        errorImagen: "You must select an image before running this process",
        errorBuffer: "You must select at least one polygon.",
        minKmWarning: "The value must be less than or equal to 100 km.",
        maxKmWarning: "The value must be greater than or equal to 1 km.",
        fireLayer: "Burned areas",
        floodLayer: "Flooded areas",
        fireError: "Error loading fire risk, try again.",
        floodError: "Error loading flood risk, try again.",
        bufferLayer: "affected area buffer",
        bufferWarning: "You must select at least one polygon.",
        bufferError: "Error generating buffer.",
        proximityLayer: "Lines of Proximity",
        urbanLimitsError: "There are no urban boundaries within the area."
    }
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

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

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

/***/ }),

/***/ "./node_modules/react-toastify/dist/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/react-toastify/dist/index.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bounce: () => (/* binding */ lt),
/* harmony export */   Flip: () => (/* binding */ uo),
/* harmony export */   Icons: () => (/* binding */ W),
/* harmony export */   Slide: () => (/* binding */ mo),
/* harmony export */   ToastContainer: () => (/* binding */ Lt),
/* harmony export */   Zoom: () => (/* binding */ po),
/* harmony export */   collapseToast: () => (/* binding */ Z),
/* harmony export */   cssTransition: () => (/* binding */ $),
/* harmony export */   toast: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
"use client";
function Mt(t){if(!t||typeof document=="undefined")return;let o=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",o.firstChild?o.insertBefore(e,o.firstChild):o.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}Mt(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var L=t=>typeof t=="number"&&!isNaN(t),N=t=>typeof t=="string",P=t=>typeof t=="function",mt=t=>N(t)||L(t),B=t=>N(t)||P(t)?t:null,pt=(t,o)=>t===!1||L(t)&&t>0?t:o,z=t=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(t)||N(t)||P(t)||L(t);function Z(t,o,e=300){let{scrollHeight:r,style:s}=t;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition=`all ${e}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(o,e)})})}function $({enter:t,exit:o,appendPosition:e=!1,collapse:r=!0,collapseDuration:s=300}){return function({children:a,position:d,preventExitTransition:c,done:T,nodeRef:g,isIn:v,playToast:x}){let C=e?`${t}--${d}`:t,S=e?`${o}--${d}`:o,E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{let f=g.current,p=C.split(" "),b=n=>{n.target===g.current&&(x(),f.removeEventListener("animationend",b),f.removeEventListener("animationcancel",b),E.current===0&&n.type!=="animationcancel"&&f.classList.remove(...p))};(()=>{f.classList.add(...p),f.addEventListener("animationend",b),f.addEventListener("animationcancel",b)})()},[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let f=g.current,p=()=>{f.removeEventListener("animationend",p),r?Z(f,T,s):T()};v||(c?p():(()=>{E.current=1,f.className+=` ${S}`,f.addEventListener("animationend",p)})())},[v]),react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment,null,a)}}function J(t,o){return{content:tt(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:o}}function tt(t,o,e=!1){return (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(t)&&!N(t.type)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(t,{closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:e}):P(t)?t({closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:e}):t}function yt({closeToast:t,theme:o,ariaLabel:e="close"}){return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:r=>{r.stopPropagation(),t(!0)},"aria-label":e},react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function gt({delay:t,isRunning:o,closeToast:e,type:r="default",hide:s,className:l,controlledProgress:a,progress:d,rtl:c,isIn:T,theme:g}){let v=s||a&&d===0,x={animationDuration:`${t}ms`,animationPlayState:o?"running":"paused"};a&&(x.transform=`scaleX(${d})`);let C=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${r}`,{["Toastify__progress-bar--rtl"]:c}),S=P(l)?l({rtl:c,type:r,defaultClassName:C}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(C,l),E={[a&&d>=1?"onTransitionEnd":"onAnimationEnd"]:a&&d<1?null:()=>{T&&e()}};return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${r}`}),react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:S,style:x,...E}))}var Xt=1,at=()=>`${Xt++}`;function _t(t,o,e){let r=1,s=0,l=[],a=[],d=o,c=new Map,T=new Set,g=i=>(T.add(i),()=>T.delete(i)),v=()=>{a=Array.from(c.values()),T.forEach(i=>i())},x=({containerId:i,toastId:n,updateId:u})=>{let h=i?i!==t:t!==1,m=c.has(n)&&u==null;return h||m},C=(i,n)=>{c.forEach(u=>{var h;(n==null||n===u.props.toastId)&&((h=u.toggle)==null||h.call(u,i))})},S=i=>{var n,u;(u=(n=i.props)==null?void 0:n.onClose)==null||u.call(n,i.removalReason),i.isActive=!1},E=i=>{if(i==null)c.forEach(S);else{let n=c.get(i);n&&S(n)}v()},f=()=>{s-=l.length,l=[]},p=i=>{var m,_;let{toastId:n,updateId:u}=i.props,h=u==null;i.staleId&&c.delete(i.staleId),i.isActive=!0,c.set(n,i),v(),e(J(i,h?"added":"updated")),h&&((_=(m=i.props).onOpen)==null||_.call(m))};return{id:t,props:d,observe:g,toggle:C,removeToast:E,toasts:c,clearQueue:f,buildToast:(i,n)=>{if(x(n))return;let{toastId:u,updateId:h,data:m,staleId:_,delay:k}=n,M=h==null;M&&s++;let A={...d,style:d.toastStyle,key:r++,...Object.fromEntries(Object.entries(n).filter(([D,Y])=>Y!=null)),toastId:u,updateId:h,data:m,isIn:!1,className:B(n.className||d.toastClassName),progressClassName:B(n.progressClassName||d.progressClassName),autoClose:n.isLoading?!1:pt(n.autoClose,d.autoClose),closeToast(D){c.get(u).removalReason=D,E(u)},deleteToast(){let D=c.get(u);if(D!=null){if(e(J(D,"removed")),c.delete(u),s--,s<0&&(s=0),l.length>0){p(l.shift());return}v()}}};A.closeButton=d.closeButton,n.closeButton===!1||z(n.closeButton)?A.closeButton=n.closeButton:n.closeButton===!0&&(A.closeButton=z(d.closeButton)?d.closeButton:!0);let R={content:i,props:A,staleId:_};d.limit&&d.limit>0&&s>d.limit&&M?l.push(R):L(k)?setTimeout(()=>{p(R)},k):p(R)},setProps(i){d=i},setToggle:(i,n)=>{let u=c.get(i);u&&(u.toggle=n)},isToastActive:i=>{var n;return(n=c.get(i))==null?void 0:n.isActive},getSnapshot:()=>a}}var I=new Map,F=[],st=new Set,Vt=t=>st.forEach(o=>o(t)),bt=()=>I.size>0;function Qt(){F.forEach(t=>nt(t.content,t.options)),F=[]}var vt=(t,{containerId:o})=>{var e;return(e=I.get(o||1))==null?void 0:e.toasts.get(t)};function X(t,o){var r;if(o)return!!((r=I.get(o))!=null&&r.isToastActive(t));let e=!1;return I.forEach(s=>{s.isToastActive(t)&&(e=!0)}),e}function ht(t){if(!bt()){F=F.filter(o=>t!=null&&o.options.toastId!==t);return}if(t==null||mt(t))I.forEach(o=>{o.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let o=I.get(t.containerId);o?o.removeToast(t.id):I.forEach(e=>{e.removeToast(t.id)})}}var Ct=(t={})=>{I.forEach(o=>{o.props.limit&&(!t.containerId||o.id===t.containerId)&&o.clearQueue()})};function nt(t,o){z(t)&&(bt()||F.push({content:t,options:o}),I.forEach(e=>{e.buildToast(t,o)}))}function xt(t){var o;(o=I.get(t.containerId||1))==null||o.setToggle(t.id,t.fn)}function rt(t,o){I.forEach(e=>{(o==null||!(o!=null&&o.containerId)||(o==null?void 0:o.containerId)===e.id)&&e.toggle(t,o==null?void 0:o.id)})}function Et(t){let o=t.containerId||1;return{subscribe(e){let r=_t(o,t,Vt);I.set(o,r);let s=r.observe(e);return Qt(),()=>{s(),I.delete(o)}},setProps(e){var r;(r=I.get(o))==null||r.setProps(e)},getSnapshot(){var e;return(e=I.get(o))==null?void 0:e.getSnapshot()}}}function Pt(t){return st.add(t),()=>{st.delete(t)}}function Wt(t){return t&&(N(t.toastId)||L(t.toastId))?t.toastId:at()}function U(t,o){return nt(t,o),o.toastId}function V(t,o){return{...o,type:o&&o.type||t,toastId:Wt(o)}}function Q(t){return(o,e)=>U(o,V(t,e))}function y(t,o){return U(t,V("default",o))}y.loading=(t,o)=>U(t,V("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...o}));function Gt(t,{pending:o,error:e,success:r},s){let l;o&&(l=N(o)?y.loading(o,s):y.loading(o.render,{...s,...o}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(T,g,v)=>{if(g==null){y.dismiss(l);return}let x={type:T,...a,...s,data:v},C=N(g)?{render:g}:g;return l?y.update(l,{...x,...C}):y(C.render,{...x,...C}),v},c=P(t)?t():t;return c.then(T=>d("success",r,T)).catch(T=>d("error",e,T)),c}y.promise=Gt;y.success=Q("success");y.info=Q("info");y.error=Q("error");y.warning=Q("warning");y.warn=y.warning;y.dark=(t,o)=>U(t,V("default",{theme:"dark",...o}));function qt(t){ht(t)}y.dismiss=qt;y.clearWaitingQueue=Ct;y.isActive=X;y.update=(t,o={})=>{let e=vt(t,o);if(e){let{props:r,content:s}=e,l={delay:100,...r,...o,toastId:o.toastId||t,updateId:at()};l.toastId!==t&&(l.staleId=t);let a=l.render||s;delete l.render,U(a,l)}};y.done=t=>{y.update(t,{progress:1})};y.onChange=Pt;y.play=t=>rt(!0,t);y.pause=t=>rt(!1,t);function It(t){var a;let{subscribe:o,getSnapshot:e,setProps:r}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(Et(t)).current;r(t);let s=(a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(o,e,e))==null?void 0:a.slice();function l(d){if(!s)return[];let c=new Map;return t.newestOnTop&&s.reverse(),s.forEach(T=>{let{position:g}=T.props;c.has(g)||c.set(g,[]),c.get(g).push(T)}),Array.from(c,T=>d(T[0],T[1]))}return{getToastToRender:l,isToastActive:X,count:s==null?void 0:s.length}}function At(t){let[o,e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[r,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:c,closeToast:T,onClick:g,closeOnClick:v}=t;xt({id:t.toastId,containerId:t.containerId,fn:e}),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(t.pauseOnFocusLoss)return x(),()=>{C()}},[t.pauseOnFocusLoss]);function x(){document.hasFocus()||p(),window.addEventListener("focus",f),window.addEventListener("blur",p)}function C(){window.removeEventListener("focus",f),window.removeEventListener("blur",p)}function S(m){if(t.draggable===!0||t.draggable===m.pointerType){b();let _=l.current;a.canCloseOnClick=!0,a.canDrag=!0,_.style.transition="none",t.draggableDirection==="x"?(a.start=m.clientX,a.removalDistance=_.offsetWidth*(t.draggablePercent/100)):(a.start=m.clientY,a.removalDistance=_.offsetHeight*(t.draggablePercent===80?t.draggablePercent*1.5:t.draggablePercent)/100)}}function E(m){let{top:_,bottom:k,left:M,right:A}=l.current.getBoundingClientRect();m.nativeEvent.type!=="touchend"&&t.pauseOnHover&&m.clientX>=M&&m.clientX<=A&&m.clientY>=_&&m.clientY<=k?p():f()}function f(){e(!0)}function p(){e(!1)}function b(){a.didMove=!1,document.addEventListener("pointermove",n),document.addEventListener("pointerup",u)}function i(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",u)}function n(m){let _=l.current;if(a.canDrag&&_){a.didMove=!0,o&&p(),t.draggableDirection==="x"?a.delta=m.clientX-a.start:a.delta=m.clientY-a.start,a.start!==m.clientX&&(a.canCloseOnClick=!1);let k=t.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;_.style.transform=`translate3d(${k},0)`,_.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function u(){i();let m=l.current;if(a.canDrag&&a.didMove&&m){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){s(!0),t.closeToast(!0),t.collapseAll();return}m.style.transition="transform 0.2s, opacity 0.2s",m.style.removeProperty("transform"),m.style.removeProperty("opacity")}}let h={onPointerDown:S,onPointerUp:E};return d&&c&&(h.onMouseEnter=p,t.stacked||(h.onMouseLeave=f)),v&&(h.onClick=m=>{g&&g(m),a.canCloseOnClick&&T(!0)}),{playToast:f,pauseToast:p,isRunning:o,preventExitTransition:r,toastRef:l,eventHandlers:h}}var Ot=typeof window!="undefined"?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;var G=({theme:t,type:o,isLoading:e,...r})=>react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...r});function ao(t){return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(G,{...t},react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function so(t){return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(G,{...t},react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function no(t){return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(G,{...t},react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function ro(t){return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(G,{...t},react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function io(){return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",{className:"Toastify__spinner"})}var W={info:so,warning:ao,success:no,error:ro,spinner:io},lo=t=>t in W;function Nt({theme:t,type:o,isLoading:e,icon:r}){let s=null,l={theme:t,type:o};return r===!1||(P(r)?s=r({...l,isLoading:e}):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(r)?s=(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(r,l):e?s=W.spinner():lo(o)&&(s=W[o](l))),s}var wt=t=>{let{isRunning:o,preventExitTransition:e,toastRef:r,eventHandlers:s,playToast:l}=At(t),{closeButton:a,children:d,autoClose:c,onClick:T,type:g,hideProgressBar:v,closeToast:x,transition:C,position:S,className:E,style:f,progressClassName:p,updateId:b,role:i,progress:n,rtl:u,toastId:h,deleteToast:m,isIn:_,isLoading:k,closeOnClick:M,theme:A,ariaLabel:R}=t,D=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${g}`,{["Toastify__toast--rtl"]:u},{["Toastify__toast--close-on-click"]:M}),Y=P(E)?E({rtl:u,position:S,type:g,defaultClassName:D}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(D,E),ft=Nt(t),dt=!!n||!c,j={closeToast:x,type:g,theme:A},H=null;return a===!1||(P(a)?H=a(j):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(a)?H=(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(a,j):H=yt(j)),react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(C,{isIn:_,done:m,position:S,preventExitTransition:e,nodeRef:r,playToast:l},react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",{id:h,tabIndex:0,onClick:T,"data-in":_,className:Y,...s,style:f,ref:r,..._&&{role:i,"aria-label":R}},ft!=null&&react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-icon",{["Toastify--animate-icon Toastify__zoom-enter"]:!k})},ft),tt(d,t,!o),H,!t.customProgressBar&&react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(gt,{...b&&!dt?{key:`p-${b}`}:{},rtl:u,theme:A,delay:c,isRunning:o,isIn:_,closeToast:x,hide:v,type:g,className:p,controlledProgress:dt,progress:n||0})))};var K=(t,o=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:o}),lt=$(K("bounce",!0)),mo=$(K("slide",!0)),po=$(K("zoom")),uo=$(K("flip"));var _o={position:"top-right",transition:lt,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&t.code==="KeyT"};function Lt(t){let o={..._o,...t},e=t.stacked,[r,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),{getToastToRender:a,isToastActive:d,count:c}=It(o),{className:T,style:g,rtl:v,containerId:x,hotKeys:C}=o;function S(f){let p=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-container",`Toastify__toast-container--${f}`,{["Toastify__toast-container--rtl"]:v});return P(T)?T({position:f,rtl:v,defaultClassName:p}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(p,B(T))}function E(){e&&(s(!0),y.play())}return Ot(()=>{var f;if(e){let p=l.current.querySelectorAll('[data-in="true"]'),b=12,i=(f=o.position)==null?void 0:f.includes("top"),n=0,u=0;Array.from(p).reverse().forEach((h,m)=>{let _=h;_.classList.add("Toastify__toast--stacked"),m>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=i?"top":"bot");let k=n*(r?.2:1)+(r?0:b*m);_.style.setProperty("--y",`${i?k:k*-1}px`),_.style.setProperty("--g",`${b}`),_.style.setProperty("--s",`${1-(r?u:0)}`),n+=_.offsetHeight,u+=.025})}},[r,c,e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function f(p){var i;let b=l.current;C(p)&&((i=b.querySelector('[tabIndex="0"]'))==null||i.focus(),s(!1),y.pause()),p.key==="Escape"&&(document.activeElement===b||b!=null&&b.contains(document.activeElement))&&(s(!0),y.play())}return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f)}},[C]),react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section",{ref:l,className:"Toastify",id:x,onMouseEnter:()=>{e&&(s(!1),y.pause())},onMouseLeave:E,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":o["aria-label"]},a((f,p)=>{let b=p.length?{...g}:{...g,pointerEvents:"none"};return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",{tabIndex:-1,className:S(f),"data-stacked":e,style:b,key:`c-${f}`},p.map(({content:i,props:n})=>react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(wt,{...n,stacked:e,collapseAll:E,isIn:d(n.toastId,n.containerId),key:`t-${n.key}`},i)))}))}
//# sourceMappingURL=index.mjs.map

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
/*!*****************************************************************!*\
  !*** ./your-extensions/widgets/proxArea/src/runtime/widget.tsx ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/style.css */ "./your-extensions/widgets/proxArea/src/runtime/assets/style.css");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/esm/esri-loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useLocale */ "./your-extensions/hooks/useLocale.ts");
/* harmony import */ var _helpers_getSessionToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helpers/getSessionToken */ "./your-extensions/helpers/getSessionToken.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./translations */ "./your-extensions/widgets/proxArea/src/runtime/translations.ts");
/* harmony import */ var _components_TitleWithTooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/TitleWithTooltip */ "./your-extensions/components/TitleWithTooltip.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











const Widget = (props) => {
    var _a;
    const { t } = (0,_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__.useLocale)(_translations__WEBPACK_IMPORTED_MODULE_8__.translations);
    const selectedSensor = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedSensor; });
    const selectedImageries = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedImages; });
    const geoprocess = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.geoprocess; });
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [showBuffer, setShowBuffer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [loadingIncendio, setLoadingIncendio] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [loadingInundacion, setLoadingInundacion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [selectedPolygon, setSelectedPolygon] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [loadingBuffer, setLoadingBuffer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [areaBuffer, setAreaBuffer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [bufferDistance, setBufferDistance] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1); // Estado para el input
    const [buffer, setBuffer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const activeViewChangeHandler = (jmv) => {
        setJimuMapView(jmv);
    };
    const handleBufferChange = (event) => {
        const value = event.target.value;
        if (value > 100) {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warning(t("minKmWarning"), {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__.Bounce,
            });
            setBufferDistance(100);
            return;
        }
        if (value < 0) {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warning(t("maxKmWarning"), {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__.Bounce,
            });
            setBufferDistance(1);
            return;
        }
        setBufferDistance(value); // Actualiza el estado con el nuevo valor del input
    };
    const cargarGeometriaEnMapa = (geojson, proceso) => __awaiter(void 0, void 0, void 0, function* () {
        if (!jimuMapView)
            return;
        if (!geojson) {
            throw new Error("No se recibió un nombre de archivo válido.");
        }
        try {
            const [FeatureLayer, Graphic, Polygon, SimpleFillSymbol, geometryEngine] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_3__.loadModules)([
                "esri/layers/FeatureLayer",
                "esri/Graphic",
                "esri/geometry/Polygon",
                "esri/symbols/SimpleFillSymbol",
                "esri/geometry/geometryEngine",
            ]);
            var nombreCapa;
            if (proceso == 2) {
                nombreCapa = t("fireLayer");
            }
            else if (proceso == 3) {
                nombreCapa = t("floodLayer");
            }
            const featureLayer = new FeatureLayer({
                title: nombreCapa,
                source: [],
                objectIdField: "OBJECTID",
                fields: [
                    { name: "OBJECTID", alias: "OBJECTID", type: "oid" },
                    { name: "area_m2", alias: "Área (m²)", type: "double" },
                    { name: "area_ha", alias: "Área (ha)", type: "double" },
                    { name: "area_km2", alias: "Área (km²)", type: "double" },
                ],
                renderer: {
                    type: "simple",
                },
            });
            const graphics = [];
            let graphicIndex = 0;
            geojson.features.forEach((feature) => {
                let geometries = [];
                if (feature.geometry.type === "Polygon") {
                    geometries.push(new Polygon({
                        rings: feature.geometry.coordinates,
                        spatialReference: jimuMapView.view.spatialReference,
                    }));
                }
                else if (feature.geometry.type === "MultiPolygon") {
                    feature.geometry.coordinates.forEach((polygonCoordinates) => {
                        geometries.push(new Polygon({
                            rings: polygonCoordinates,
                            spatialReference: jimuMapView.view.spatialReference,
                        }));
                    });
                }
                geometries.forEach((geometry) => {
                    const areaM2 = geometryEngine.geodesicArea(geometry, "square-meters");
                    const areaHa = areaM2 / 10000;
                    const areaKm2 = areaM2 / 1000000;
                    graphics.push(new Graphic({
                        geometry: geometry,
                        attributes: {
                            OBJECTID: graphicIndex,
                            area_m2: areaM2,
                            area_ha: areaHa,
                            area_km2: areaKm2,
                        },
                    }));
                    graphicIndex++;
                });
            });
            featureLayer.source = graphics;
            // Agregar la capa al mapa si no existe una con el mismo nombre
            const existingLayer = jimuMapView.view.map.layers.find((layer) => layer.title === "Poligono desastre");
            if (existingLayer) {
                jimuMapView.view.map.remove(existingLayer);
            }
            jimuMapView.view.map.add(featureLayer);
        }
        catch (error) {
            console.error("Error al cargar la geometría en el mapa:", error);
        }
    });
    const incendio = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        setLoadingIncendio(true);
        if (jimuMapView) {
            try {
                let imagen1 = (_a = selectedImageries[0]) === null || _a === void 0 ? void 0 : _a.OBJECTID;
                // Construir la URL con los parámetros
                const proceso = 2;
                const token = (0,_helpers_getSessionToken__WEBPACK_IMPORTED_MODULE_7__.getSessionToken)();
                //Desarrollo
                const response = yield fetch(`/getFireZone`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        objectId: imagen1,
                        url: selectedSensor.url,
                        geometry: (_b = selectedImageries[0]) === null || _b === void 0 ? void 0 : _b.geometry,
                        token,
                    }),
                });
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
                    setLoadingIncendio(false);
                }
                const responseData = yield response.json();
                const responseGeojson = responseData.geojson;
                yield cargarGeometriaEnMapa(responseGeojson, proceso);
                setLoadingIncendio(false);
                setShowBuffer(true);
            }
            catch (error) {
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(t("fireError"), {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__.Bounce,
                });
                setLoadingIncendio(false);
            }
        }
    });
    const inundacion = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        setLoadingInundacion(true);
        if (!jimuMapView)
            return;
        try {
            let imagen1 = (_a = selectedImageries[0]) === null || _a === void 0 ? void 0 : _a.OBJECTID;
            if (imagen1 == null) {
                throw new Error(`Error en la carga de imagenes: ${imagen1}`);
                setLoadingInundacion(false);
            }
            // Construir la URL con los parámetros
            const proceso = 3;
            const token = (0,_helpers_getSessionToken__WEBPACK_IMPORTED_MODULE_7__.getSessionToken)();
            const response = yield fetch(`/getFloodZone`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    objectId: imagen1,
                    url: selectedSensor.url,
                    geometry: (_b = selectedImageries[0]) === null || _b === void 0 ? void 0 : _b.geometry,
                    token,
                }),
            });
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
                setLoadingInundacion(false);
            }
            const responseData = yield response.json();
            const responseGeojson = responseData.geojson;
            yield cargarGeometriaEnMapa(responseGeojson, proceso);
            setLoadingInundacion(false);
        }
        catch (error) {
            console.error(error);
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(t("floodError"), {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__.Bounce,
            });
            setLoadingInundacion(false);
        }
    });
    const findBufferGeometry = () => {
        if (!jimuMapView) {
            return;
        }
        const bufferGraphic = jimuMapView.view.graphics.items.find((graphic) => graphic.attributes && graphic.attributes.id === "buffer_DI");
        if (!bufferGraphic) {
            return;
        }
        return bufferGraphic.geometry;
    };
    const startDA = (riesgo) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (selectedImageries.length == 0) {
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warning(`Debe seleccionar una imagen antes de ejecutar este proceso`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__.Bounce,
                });
                setLoadingIncendio(false);
                setLoadingInundacion(false);
                return;
            }
            else {
                if (jimuMapView) {
                    // Agregar capa de límite urbano al mapa
                    const [FeatureLayer] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_3__.loadModules)([
                        "esri/layers/FeatureLayer",
                    ]);
                    let urbanLimitLayer = jimuMapView.view.map.layers.find((layer) => layer.id === "urbanLimitLayer");
                    if (!urbanLimitLayer) {
                        urbanLimitLayer = new FeatureLayer({
                            id: "urbanLimitLayer",
                            title: "Límite urbano Plan Regulador Comunal",
                            url: "https://gisciv.snsat.cl/vector/rest/services/Comando_Control/Límite_urbano_Plan_Regulador_Comunal/FeatureServer/117",
                            visible: true,
                        });
                        jimuMapView.view.map.add(urbanLimitLayer);
                    }
                    else {
                        urbanLimitLayer.visible = true;
                    }
                    let dagerZoneLayer1 = jimuMapView.view.map.layers.find((layer) => layer.title === t("fireLayer"));
                    let dagerZoneLayer2 = jimuMapView.view.map.layers.find((layer) => layer.title === t("floodLayer"));
                    if (!dagerZoneLayer1 && riesgo === "incendio") {
                        yield incendio();
                        dagerZoneLayer1 = jimuMapView.view.map.layers.find((layer) => layer.title === t("fireLayer"));
                    }
                    if (!dagerZoneLayer2 && riesgo === "inundacion") {
                        yield inundacion();
                        dagerZoneLayer2 = jimuMapView.view.map.layers.find((layer) => layer.title === t("floodLayer"));
                    }
                    if ((jimuMapView && dagerZoneLayer1) || dagerZoneLayer2) {
                        if (dagerZoneLayer1) {
                            capaTemporal(dagerZoneLayer1, riesgo);
                        }
                        if (dagerZoneLayer2) {
                            capaTemporal(dagerZoneLayer2, riesgo);
                        }
                    }
                }
            }
        }
        catch (error) {
            console.error("jimuMapView o capa no encontrada.");
        }
    });
    const capaTemporal = (dagerZoneLayer, riesgo) => __awaiter(void 0, void 0, void 0, function* () {
        setShowBuffer(true);
        const [Sketch, GraphicsLayer, SimpleFillSymbol] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_3__.loadModules)([
            "esri/widgets/Sketch",
            "esri/layers/GraphicsLayer",
            "esri/symbols/SimpleFillSymbol",
        ]);
        // Crear una capa gráfica temporal
        const tempGraphicsLayer = new GraphicsLayer({
            id: "tempGraphicsLayer",
            title: t("bufferLayer"),
        });
        jimuMapView.view.map.add(tempGraphicsLayer);
        // Obtener las entidades de la capa original y copiarlas a la capa temporal
        const query = dagerZoneLayer.createQuery();
        query.where = "1=1"; // Seleccionar todos los elementos
        query.returnGeometry = true;
        query.outSpatialReference = jimuMapView.view.spatialReference;
        const results = yield dagerZoneLayer.queryFeatures(query);
        results.features.forEach((feature) => {
            const graphic = feature.clone();
            graphic.symbol = new SimpleFillSymbol({
                color: riesgo === "incendio" ? [255, 255, 0, 0.8] : [0, 0, 255, 0.5],
                outline: null,
            });
            tempGraphicsLayer.add(graphic);
            tempGraphicsLayer.listMode = "hide";
        });
        // Configurar el Sketch para trabajar con la capa temporal
        const sketchEdit = new Sketch({
            view: jimuMapView.view,
            layer: tempGraphicsLayer,
            creationMode: "update",
            availableCreateTools: [""],
            scale: "m",
            visibleElements: {
                createTools: false,
                selectionTools: false,
                settingsMenu: false,
                undoRedoMenu: false,
                duplicateButton: false,
                deleteButton: false,
            },
            defaultUpdateOptions: {
                enableScaling: true,
                enableRotation: true,
                multipleSelectionEnabled: false,
                tool: "move",
            },
            // Configurar el color del outline de selección en cyan
            updateOnGraphicClick: true,
            snappingOptions: {
                enabled: false,
            },
            container: "mySketchContainerPunto",
        });
        // Personalizar el texto del label de selección después de que el Sketch se renderice
        setTimeout(() => {
            const sketchContainer = document.getElementById("mySketchContainerPunto");
            if (sketchContainer) {
                // Función para reemplazar el texto en todos los nodos
                const replaceSelectionText = () => {
                    // Buscar todos los elementos
                    const allElements = sketchContainer.querySelectorAll("*");
                    allElements.forEach((element) => {
                        // Buscar nodos de texto directos
                        element.childNodes.forEach((node) => {
                            var _a, _b;
                            if (node.nodeType === Node.TEXT_NODE) {
                                if (((_a = node.textContent) === null || _a === void 0 ? void 0 : _a.includes("Selección")) ||
                                    ((_b = node.textContent) === null || _b === void 0 ? void 0 : _b.includes("Selection"))) {
                                    node.textContent = node.textContent.replace(/Selección|Selection/, "Polígonos seleccionados");
                                }
                            }
                        });
                    });
                    // Buscar por selectores específicos del Sketch
                    const labels = sketchContainer.querySelectorAll(".esri-sketch__panel-label, .esri-sketch__section-label, .esri-sketch__heading-text");
                    labels.forEach((label) => {
                        var _a, _b;
                        if (((_a = label.textContent) === null || _a === void 0 ? void 0 : _a.includes("Selección")) ||
                            ((_b = label.textContent) === null || _b === void 0 ? void 0 : _b.includes("Selection"))) {
                            label.textContent = label.textContent.replace(/Selección|Selection/, "Polígonos seleccionados");
                        }
                    });
                };
                // Ejecutar inmediatamente
                replaceSelectionText();
                // Observar cambios
                const observer = new MutationObserver(() => {
                    replaceSelectionText();
                });
                observer.observe(sketchContainer, {
                    childList: true,
                    subtree: true,
                    characterData: true,
                });
            }
        }, 500);
        // Aplicar color cyan al outline de selección del Sketch
        // Acceder a la capa interna de gráficos del Sketch para modificar los símbolos
        // Capturar el polígono seleccionado
        sketchEdit.on("update", (event) => __awaiter(void 0, void 0, void 0, function* () {
            if (event.state === "active" || event.state === "start") {
                if (event.graphics &&
                    event.graphics[0].geometry.type === "polygon" // Verificar que es un polígono
                ) {
                    const polygonGeometry = event.graphics[0].geometry;
                    setSelectedPolygon(polygonGeometry);
                }
            }
        }));
    });
    const ejecutarBuffer = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!selectedPolygon) {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warning(t("bufferWarning"), {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__.Bounce,
            });
            return;
        }
        setLoadingBuffer(true);
        try {
            const [geometryEngine, Graphic] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_3__.loadModules)([
                "esri/geometry/geometryEngine",
                "esri/Graphic",
            ]);
            // Convertir el valor del input a número (distancia del buffer)
            const bufferDistance = document.getElementById("inputBuffer");
            const distanceKm = parseFloat(bufferDistance.value);
            const distanceMeters = distanceKm * 1000;
            //Se eliminar el buffer anterior
            const view = jimuMapView.view;
            view.graphics.items
                .filter((g) => { var _a; return ((_a = g.attributes) === null || _a === void 0 ? void 0 : _a.id) === "buffer_DI"; })
                .forEach((g) => view.graphics.remove(g));
            // Generar el buffer con la distancia ingresada
            const bufferGeometry = geometryEngine.buffer(selectedPolygon, distanceMeters, "meters");
            // Calcular área del buffer en m²
            const areaBuffer = geometryEngine.geodesicArea(bufferGeometry, "square-meters");
            setAreaBuffer(areaBuffer);
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
                    id: "buffer_DI", // ID único basado en timestamp
                },
            });
            setBuffer(bufferGraphic);
            view.graphics.add(bufferGraphic);
        }
        catch (error) {
            console.error("Error al generar el buffer:", error);
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(t("bufferError"), {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__.Bounce,
            });
        }
        finally {
            setLoadingBuffer(false);
        }
    });
    const dibujarLineasProximidad = (touchingPolygon, geometriesInBuffer) => __awaiter(void 0, void 0, void 0, function* () {
        if (!touchingPolygon || geometriesInBuffer.length === 0) {
            console.warn("No hay geometrías para conectar.");
            return;
        }
        const [geometryEngine, Polyline, Graphic, GraphicsLayer] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_3__.loadModules)([
            "esri/geometry/geometryEngine",
            "esri/geometry/Polyline",
            "esri/Graphic",
            "esri/layers/GraphicsLayer",
        ]);
        // Crear o limpiar la capa de líneas de proximidad
        let lineLayer = jimuMapView.view.map.findLayerById("proximityLinesLayer");
        if (!lineLayer) {
            lineLayer = new GraphicsLayer({
                id: "proximityLinesLayer",
                title: t("proximityLayer"),
            });
            jimuMapView.view.map.add(lineLayer);
        }
        // Obtener centroide del polígono central
        const centroide = touchingPolygon.geometry.centroid;
        // Dibujar una línea desde el centroide a cada geometría en geometriesInBuffer
        geometriesInBuffer.forEach((geometry) => {
            let destino;
            if (geometry.centroid) {
                destino = geometry.centroid; // Si la geometría tiene centroide, usarlo
            }
            else if (geometry.extent) {
                destino = geometry.extent.center; // Si tiene `extent`, usar su centro
            }
            else if (geometry.type === "point") {
                destino = geometry; // Si es un punto, usarlo directamente
            }
            else {
                console.warn("Geometría sin centroide ni extent, ignorando:", geometry);
                return; // Ignorar la geometría si no tiene centroide, extent ni es un punto
            }
            const lineGeometry = new Polyline({
                paths: [
                    [centroide.x, centroide.y],
                    [destino.x, destino.y],
                ],
                spatialReference: jimuMapView.view.spatialReference,
            });
            const distanceMeters = geometryEngine.geodesicLength(lineGeometry, "meters");
            const distanceKilometers = distanceMeters / 1000;
            const lineGraphic = new Graphic({
                geometry: lineGeometry,
                symbol: {
                    type: "simple-line",
                    color: [0, 0, 255], // Azul
                    width: 2,
                },
                attributes: {
                    distance_m: distanceMeters.toFixed(2),
                    distance_km: distanceKilometers.toFixed(2),
                },
                popupTemplate: {
                    title: t("proximityLayer"),
                    content: "<b>Mts:</b>" +
                        distanceMeters.toFixed(2) +
                        "m<br><b>Kms:</b> " +
                        distanceKilometers.toFixed(2) +
                        " km",
                },
            });
            lineLayer.add(lineGraphic);
            lineLayer.visible = true;
            lineLayer.listMode = "show";
        });
    });
    const applyRasterFunction = () => __awaiter(void 0, void 0, void 0, function* () {
        if (jimuMapView) {
            const bufferGeometry = findBufferGeometry();
            if (!bufferGeometry) {
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warning("No se encontró la geometría del buffer", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__.Bounce,
                });
                return;
            }
            const [geometryEngine] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_3__.loadModules)([
                "esri/geometry/geometryEngine",
            ]);
            const tempGraphicsLayer = jimuMapView.view.map.findLayerById("tempGraphicsLayer");
            if (!tempGraphicsLayer) {
                console.error("La capa 'tempGraphicsLayer' no existe.");
                return;
            }
            const touchingPolygon = tempGraphicsLayer.graphics.items.find((graphic) => graphic.geometry.type === "polygon" && // Solo polígonos
                geometryEngine.intersects(graphic.geometry, selectedPolygon) // Verificar intersección
            );
            if (!touchingPolygon) {
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warning("No se encontró el polígono seleccionado", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__.Bounce,
                });
                return;
            }
            // Buscar la capa de límite urbano que ya está en el mapa
            let urbanLimit = jimuMapView.view.map.layers.find((layer) => layer.id === "urbanLimitLayer");
            if (!urbanLimit) {
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("No se encontró la capa de límite urbano", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__.Bounce,
                });
                return;
            }
            urbanLimit.visible = true;
            let geometriesInBuffer = [];
            const query = urbanLimit.createQuery();
            query.geometry = bufferGeometry; // Buscar dentro del buffer
            query.spatialRelationship = "intersects"; // Intersección con el buffer
            query.returnGeometry = true;
            query.outSpatialReference = jimuMapView.view.spatialReference;
            try {
                // Esperar a que la capa esté completamente cargada
                yield urbanLimit.load();
                const results = yield urbanLimit.queryFeatures(query);
                if (results.features.length === 0) {
                    console.warn("No se encontraron geometrías dentro del buffer");
                    react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warning("No se encontraron límites urbanos en el área del buffer", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__.Bounce,
                    });
                }
                else {
                    results.features.forEach((feature) => {
                        geometriesInBuffer.push(feature.geometry);
                    });
                    console.log(`Se encontraron ${geometriesInBuffer.length} geometrías`);
                }
            }
            catch (error) {
                console.error(`Error consultando la capa: `, error);
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Error al consultar el límite urbano", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__.Bounce,
                });
                return;
            }
            if (touchingPolygon && geometriesInBuffer.length > 0) {
                dibujarLineasProximidad(touchingPolygon, geometriesInBuffer);
            }
            else if (geometriesInBuffer.length === 0) {
                // Ya se mostró el warning arriba
            }
            else {
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(t("urbanLimitsError"), {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__.Bounce,
                });
            }
        }
    });
    // <!-------- Helpers ------------->
    //Limpia las capas generadas si se cambia las imagenes seleccionadas
    const cleanLayers = (title) => {
        if (jimuMapView) {
            const layer = jimuMapView.view.map.allLayers.find((layer) => layer.title == title);
            if (layer) {
                // Oculta todas las capas de sensores por defecto
                layer.visible = false;
                // Esto oculta la capa del widget de capas (LayerList)
                layer.listMode = "hide";
            }
        }
    };
    const removeLayer = (title) => {
        if (jimuMapView) {
            const layer = jimuMapView.view.map.allLayers.find((layer) => layer.title == title);
            if (layer) {
                jimuMapView.view.map.remove(layer);
            }
        }
    };
    const removeLayerById = (id) => {
        if (jimuMapView) {
            const layer = jimuMapView.view.map.allLayers.find((layer) => layer.id == id);
            if (layer) {
                jimuMapView.view.map.remove(layer);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        removeLayer("tempGraphicsLayer");
        removeLayer(t("fireLayer"));
        removeLayer(t("floodLayer"));
        removeLayer(t("bufferLayer"));
        removeLayer(t("proximityLayer"));
        removeLayerById("urbanLimitLayer"); // Eliminar la capa de límite urbano
        setShowBuffer(false);
        setSelectedPolygon(null);
    }, [selectedImageries, geoprocess]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "jimu-widget proximity-widget" },
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler })),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "proximity-main-content" },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, null),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_TitleWithTooltip__WEBPACK_IMPORTED_MODULE_9__["default"], { title: t("widgetLabel"), description: t("description") }),
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "proximity-content" },
                    showBuffer === false && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null,
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, t("description")),
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "proximity-buttons" },
                            loadingIncendio === true ? (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: "sm", type: "primary" },
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Loading, { type: "DONUT", height: 20, width: 20 }))) : (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { onClick: () => startDA("incendio"), size: "sm" }, t("incendio"))),
                            loadingInundacion === true ? (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: "sm", type: "primary" },
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Loading, { type: "DONUT", height: 20, width: 20 }))) : (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { onClick: () => startDA("inundacion"), size: "sm", type: "primary" }, t("inundacion")))))),
                    showBuffer === true && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "proximity-buffer" },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { id: "mySketchContainerPunto" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "proximity-buffer-actions" },
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, t("bufferLabel")),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "proximity-buffer-input" },
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", { id: "inputBuffer", type: "text", min: "1", max: "100", value: bufferDistance, onChange: handleBufferChange }),
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Km")),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { onClick: ejecutarBuffer, size: "sm", type: "primary" }, t("generarBuffer")),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { onClick: applyRasterFunction, size: "sm", type: "primary" }, t("dibujarLineas"))))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wcm94QXJlYS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUNqQjtBQUN4Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2UkFBNlIsTUFBTSxXQUFXLFVBQVUsVUFBVSxX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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RCxJQUFJO0FBQ0o7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXLFFBQVEsYUFBYSwrQ0FBK0MsTUFBTTtBQUM5RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGFBQWE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZLE1BQU0sTUFBTSxxQ0FBcUMsNkJBQTZCO0FBQ3pIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxrREFBa0Qsa0NBQWtDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QVMsSUFFYixDQUFDLENBQUMsWUFBWSxDQUFDLENBQ1QsQ0FDVixDQUNHLENBQ0wsQ0FDSjtvQkFDQSxVQUFVLEtBQUssSUFBSSxJQUFJLENBQ3RCLHFFQUFLLFNBQVMsRUFBQyxrQkFBa0I7d0JBQy9CLHFFQUFLLEVBQUUsRUFBQyx3QkFBd0IsR0FBTzt3QkFDdkMscUVBQUssU0FBUyxFQUFDLDBCQUEwQjs0QkFDdkMsdUVBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFLOzRCQUN6QixxRUFBSyxTQUFTLEVBQUMsd0JBQXdCO2dDQUNyQyx1RUFDRSxFQUFFLEVBQUMsYUFBYSxFQUNoQixJQUFJLEVBQUMsTUFBTSxFQUNYLEdBQUcsRUFBQyxHQUFHLEVBQ1AsR0FBRyxFQUFDLEtBQUssRUFDVCxLQUFLLEVBQUUsY0FBYyxFQUNyQixRQUFRLEVBQUUsa0JBQWtCLEdBQzVCO2dDQUNGLDRFQUFTLENBQ0w7NEJBRU4sNERBQUMsMkNBQU0sSUFBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVMsSUFDdEQsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUNaOzRCQUNULDREQUFDLDJDQUFNLElBQ0wsT0FBTyxFQUFFLG1CQUFtQixFQUM1QixJQUFJLEVBQUMsSUFBSSxFQUNULElBQUksRUFBQyxTQUFTLElBRWIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUNaLENBQ0wsQ0FDRixDQUNQLENBQ0csQ0FDRixDQUNGLENBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsaUVBQWUsTUFBTSxFQUFDO0FBRWQsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveEFyZWEvc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9lc3JpLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy9jc3MuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL3V0aWxzL3VybC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveEFyZWEvc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzcz9hODRhIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL2ZpbGxlZC9zdWdnZXN0ZWQvaGVscC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvZmlsbGVkL3N1Z2dlc3RlZC9oZWxwLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL2NvbXBvbmVudHMvVGl0bGVXaXRoVG9vbHRpcC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy9oZWxwZXJzL2dldFNlc3Npb25Ub2tlbi50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL2hvb2tzL3VzZUxvY2FsZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveEFyZWEvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS93aXRoLXNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9kaXN0L3JlYWN0LXJlZHV4Lm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXRvYXN0aWZ5L2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94QXJlYS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4ucHJveGltaXR5LXdpZGdldCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm94aW1pdHktbWFpbi1jb250ZW50IHtcbiAgcGFkZGluZzogMTVweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucHJveGltaXR5LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxNzBweDtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4ucHJveGltaXR5LWJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDIgIWltcG9ydGFudDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgfVxuICB9XG59XG5cbi5wcm94aW1pdHktYnVmZmVyLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaW5wdXQge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjgyQjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwOGVjYztcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxuICBwIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLnByb3hpbWl0eS1idWZmZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAjbXlTa2V0Y2hDb250YWluZXJQdW50byB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgIGJvcmRlcjogd2hpdGUgc29saWQgMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5wcm94aW1pdHktYnVmZmVyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhlY2M7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDIgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogT3ZlcnJpZGUgZGVsIGhpZ2hsaWdodCBkZSBzZWxlY2Npw7NuIGRlbCBTa2V0Y2ggLSBDb2xvciBjeWFuICovXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX2dyYXBoaWNzLWxheWVyLWhpZ2hsaWdodCB7XG4gIHN0cm9rZTogY3lhbiAhaW1wb3J0YW50O1xuICBzdHJva2Utd2lkdGg6IDNweCAhaW1wb3J0YW50O1xuICBmaWxsOiByZ2JhKDAsIDI1NSwgMjU1LCAwLjEpICFpbXBvcnRhbnQ7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBlbCBjb250ZW5lZG9yIGRlbCBTa2V0Y2ggY3VhbmRvIGhheSBzZWxlY2Npw7NuIGFjdGl2YSAqL1xuLmVzcmktdmlldyAuZXNyaS12aWV3LXN1cmZhY2UtLWluc2V0LW91dGxpbmU6Zm9jdXM6OmFmdGVyIHtcbiAgb3V0bGluZS1jb2xvcjogY3lhbiAhaW1wb3J0YW50O1xufVxuXG4vKiBPdmVycmlkZSBkZWwgY29sb3IgZGUgc2VsZWNjacOzbiBkZWwgcG9sw61nb25vIGVuIGVsIG1hcGEgKi9cbi5lc3JpLXNrZXRjaF9fZ3JhcGhpY3MtbGF5ZXIgLmVzcmktc2tldGNoX19ncmFwaGljcy1sYXllci0tc2VsZWN0ZWQge1xuICBvdXRsaW5lOiAzcHggc29saWQgY3lhbiAhaW1wb3J0YW50O1xufVxuXG4vKiBQZXJzb25hbGl6YWNpw7NuIGRlbCB0ZXh0byBcIlNlbGVjY2nDs25cIiAqL1xuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19oZWFkaW5nLXRleHQ6OmFmdGVyIHtcbiAgY29udGVudDogXCIgZGUgcG9sw61nb25vc1wiO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi8qIE3DqXRvZG8gYWx0ZXJuYXRpdm8gcGFyYSBzb2JyZXNjcmliaXIgZWwgbGFiZWwgY29tcGxldG8gKi9cbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9fc2VjdGlvbi1sYWJlbDpmaXJzdC1vZi10eXBlIHtcbiAgZm9udC1zaXplOiAwO1xufVxuXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX3NlY3Rpb24tbGFiZWw6Zmlyc3Qtb2YtdHlwZTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb250ZW50OiBcIlBvbMOtZ29ub3Mgc2VsZWNjaW9uYWRvczogXCI7XG4gIGNvbG9yOiAjMDBGRkZGO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uLy4uLy4uL2dlb3Byb2Nlc29zJTIwZXhwcmllbmNlJTIwYnVpbGRlci9BcmNHSVNFeHBlcmllbmNlQnVpbGRlci9jbGllbnQveW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveEFyZWEvc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzc1wiLFwid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveEFyZWEvc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QURFRjs7QUNBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FER0Y7O0FDQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0E7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFREdGO0FBQ0Y7O0FDQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUVBO0lBQ0UseUJBQUE7SUFDQSxPQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0EsNkJBQUE7SUFDQTtNQUNFLHlCQUFBO01BQ0Esb0NBQUE7TUFDQSx3Q0FBQTtJREVGO0VBQ0Y7QUFDRjs7QUNBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQTtJQUNFLFVBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7SUFDQSx5QkFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtJQUNBO01BQ0UscUJBQUE7TUFDQSx3Q0FBQTtNQUNBLGFBQUE7SURFRjtFQUNGO0VDQUE7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RURFRjtBQUNGOztBQ0FBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBRUE7SUFDRSxhQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7RURFRjtFQ0NBO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsUUFBQTtJQUNBLG9CQUFBO0lBRUE7TUFDRSx5QkFBQTtNQUNBLG9CQUFBO01BQ0EsY0FBQTtNQUNBLG1CQUFBO01BQ0EseUJBQUE7TUFDQSxXQUFBO01BRUE7UUFDRSx5QkFBQTtRQUNBLG9DQUFBO1FBQ0Esd0NBQUE7TURERjtJQUNGO0VBQ0Y7QUFDRjs7QUNJQSxnRUFBQTtBQUNBO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLHVDQUFBO0FEREY7O0FDSUEsc0VBQUE7QUFDQTtFQUNFLDhCQUFBO0FEREY7O0FDSUEsNERBQUE7QUFDQTtFQUNFLGtDQUFBO0FEREY7O0FDSUEsMENBQUE7QUFDQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7QURERjs7QUNJQSwyREFBQTtBQUNBO0VBQ0UsWUFBQTtBRERGOztBQ0lBO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FEREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4ucHJveGltaXR5LXdpZGdldCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm94aW1pdHktbWFpbi1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm94aW1pdHktY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDE3MHB4O1xcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbn1cXG5cXG4ucHJveGltaXR5LWJ1dHRvbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucHJveGltaXR5LWJ1ZmZlci1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGlucHV0IHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyODJCO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgICY6Zm9jdXMge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwOGVjYztcXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG4gIHAge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbn1cXG5cXG4ucHJveGltaXR5LWJ1ZmZlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgI215U2tldGNoQ29udGFpbmVyUHVudG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1pbi13aWR0aDogMTgwcHg7XFxuICAgIGJvcmRlcjogd2hpdGUgc29saWQgMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbiAgLnByb3hpbWl0eS1idWZmZXItYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYnV0dG9uIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhlY2M7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiBPdmVycmlkZSBkZWwgaGlnaGxpZ2h0IGRlIHNlbGVjY2nDs24gZGVsIFNrZXRjaCAtIENvbG9yIGN5YW4gKi9cXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX2dyYXBoaWNzLWxheWVyLWhpZ2hsaWdodCB7XFxuICBzdHJva2U6IGN5YW4gIWltcG9ydGFudDtcXG4gIHN0cm9rZS13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XFxuICBmaWxsOiByZ2JhKDAsIDI1NSwgMjU1LCAwLjEpICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIEVzdGlsb3MgcGFyYSBlbCBjb250ZW5lZG9yIGRlbCBTa2V0Y2ggY3VhbmRvIGhheSBzZWxlY2Npw7NuIGFjdGl2YSAqL1xcbi5lc3JpLXZpZXcgLmVzcmktdmlldy1zdXJmYWNlLS1pbnNldC1vdXRsaW5lOmZvY3VzOjphZnRlciB7XFxuICBvdXRsaW5lLWNvbG9yOiBjeWFuICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIE92ZXJyaWRlIGRlbCBjb2xvciBkZSBzZWxlY2Npw7NuIGRlbCBwb2zDrWdvbm8gZW4gZWwgbWFwYSAqL1xcbi5lc3JpLXNrZXRjaF9fZ3JhcGhpY3MtbGF5ZXIgLmVzcmktc2tldGNoX19ncmFwaGljcy1sYXllci0tc2VsZWN0ZWQge1xcbiAgb3V0bGluZTogM3B4IHNvbGlkIGN5YW4gIWltcG9ydGFudDtcXG59XFxuXFxuLyogUGVyc29uYWxpemFjacOzbiBkZWwgdGV4dG8gXFxcIlNlbGVjY2nDs25cXFwiICovXFxuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19oZWFkaW5nLXRleHQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgZGUgcG9sw61nb25vc1xcXCI7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcblxcbi8qIE3DqXRvZG8gYWx0ZXJuYXRpdm8gcGFyYSBzb2JyZXNjcmliaXIgZWwgbGFiZWwgY29tcGxldG8gKi9cXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX3NlY3Rpb24tbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LXNpemU6IDA7XFxufVxcblxcbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9fc2VjdGlvbi1sYWJlbDpmaXJzdC1vZi10eXBlOjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29udGVudDogXFxcIlBvbMOtZ29ub3Mgc2VsZWNjaW9uYWRvczogXFxcIjtcXG4gIGNvbG9yOiAjMDBGRkZGO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiLFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4ucHJveGltaXR5LXdpZGdldCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm94aW1pdHktbWFpbi1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm94aW1pdHktY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDE3MHB4O1xcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbn1cXG5cXG4ucHJveGltaXR5LWJ1dHRvbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucHJveGltaXR5LWJ1ZmZlci1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGlucHV0IHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyODJCO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgICY6Zm9jdXMge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwOGVjYztcXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG4gIHAge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbn1cXG5cXG4ucHJveGltaXR5LWJ1ZmZlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgI215U2tldGNoQ29udGFpbmVyUHVudG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1pbi13aWR0aDogMTgwcHg7XFxuICAgIGJvcmRlcjogd2hpdGUgc29saWQgMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbiAgLnByb3hpbWl0eS1idWZmZXItYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYnV0dG9uIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhlY2M7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiBPdmVycmlkZSBkZWwgaGlnaGxpZ2h0IGRlIHNlbGVjY2nDs24gZGVsIFNrZXRjaCAtIENvbG9yIGN5YW4gKi9cXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX2dyYXBoaWNzLWxheWVyLWhpZ2hsaWdodCB7XFxuICBzdHJva2U6IGN5YW4gIWltcG9ydGFudDtcXG4gIHN0cm9rZS13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XFxuICBmaWxsOiByZ2JhKDAsIDI1NSwgMjU1LCAwLjEpICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIEVzdGlsb3MgcGFyYSBlbCBjb250ZW5lZG9yIGRlbCBTa2V0Y2ggY3VhbmRvIGhheSBzZWxlY2Npw7NuIGFjdGl2YSAqL1xcbi5lc3JpLXZpZXcgLmVzcmktdmlldy1zdXJmYWNlLS1pbnNldC1vdXRsaW5lOmZvY3VzOjphZnRlciB7XFxuICBvdXRsaW5lLWNvbG9yOiBjeWFuICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIE92ZXJyaWRlIGRlbCBjb2xvciBkZSBzZWxlY2Npw7NuIGRlbCBwb2zDrWdvbm8gZW4gZWwgbWFwYSAqL1xcbi5lc3JpLXNrZXRjaF9fZ3JhcGhpY3MtbGF5ZXIgLmVzcmktc2tldGNoX19ncmFwaGljcy1sYXllci0tc2VsZWN0ZWQge1xcbiAgb3V0bGluZTogM3B4IHNvbGlkIGN5YW4gIWltcG9ydGFudDtcXG59XFxuXFxuLyogUGVyc29uYWxpemFjacOzbiBkZWwgdGV4dG8gXFxcIlNlbGVjY2nDs25cXFwiICovXFxuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19oZWFkaW5nLXRleHQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgZGUgcG9sw61nb25vc1xcXCI7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcblxcbi8qIE3DqXRvZG8gYWx0ZXJuYXRpdm8gcGFyYSBzb2JyZXNjcmliaXIgZWwgbGFiZWwgY29tcGxldG8gKi9cXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX3NlY3Rpb24tbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LXNpemU6IDA7XFxufVxcblxcbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9fc2VjdGlvbi1sYWJlbDpmaXJzdC1vZi10eXBlOjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29udGVudDogXFxcIlBvbMOtZ29ub3Mgc2VsZWNjaW9uYWRvczogXFxcIjtcXG4gIGNvbG9yOiAjMDBGRkZGO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLypcbiAgQ29weXJpZ2h0IChjKSAyMDIyIEVzcmlcbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbi8vIHJlLWV4cG9ydCB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHBhcnQgb2YgdGhlIHB1YmxpYyBBUElcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzL2luZGV4JztcbmV4cG9ydCB7IGxvYWRNb2R1bGVzIH0gZnJvbSAnLi9tb2R1bGVzJztcbmV4cG9ydCB7IGdldFNjcmlwdCwgaXNMb2FkZWQsIGxvYWRTY3JpcHQsIHNldERlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9zY3JpcHQnO1xuZXhwb3J0IHsgbG9hZENzcyB9IGZyb20gJy4vdXRpbHMvY3NzJztcbmV4cG9ydCB7IHV0aWxzIH07XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgZ2V0U2NyaXB0LCBpc0xvYWRlZCwgbG9hZFNjcmlwdCB9IGZyb20gJy4vc2NyaXB0JztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzL2luZGV4Jztcbi8vIHdyYXAgRG9qbydzIHJlcXVpcmUoKSBpbiBhIHByb21pc2VcbmZ1bmN0aW9uIHJlcXVpcmVNb2R1bGVzKG1vZHVsZXMpIHtcbiAgICByZXR1cm4gbmV3IHV0aWxzLlByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBJZiBzb21ldGhpbmcgZ29lcyB3cm9uZyBsb2FkaW5nIHRoZSBlc3JpL2Rvam8gc2NyaXB0cywgcmVqZWN0IHdpdGggdGhlIGVycm9yLlxuICAgICAgICB2YXIgZXJyb3JIYW5kbGVyID0gd2luZG93WydyZXF1aXJlJ10ub24oJ2Vycm9yJywgcmVqZWN0KTtcbiAgICAgICAgd2luZG93WydyZXF1aXJlJ10obW9kdWxlcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVtb3ZlIGVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgIGVycm9ySGFuZGxlci5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIFJlc29sdmUgd2l0aCB0aGUgcGFyYW1ldGVycyBmcm9tIGRvam8gcmVxdWlyZSBhcyBhbiBhcnJheS5cbiAgICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGFuIGFycmF5IG9mIHRoZSByZXF1aXJlZCBtb2R1bGVzXG4vLyBhbHNvIHdpbGwgYXR0ZW1wdCB0byBsYXp5IGxvYWQgdGhlIEFyY0dJUyBBUEkgaWYgaXQgaGFzIG5vdCBhbHJlYWR5IGJlZW4gbG9hZGVkXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1vZHVsZXMobW9kdWxlcywgbG9hZFNjcmlwdE9wdGlvbnMpIHtcbiAgICBpZiAobG9hZFNjcmlwdE9wdGlvbnMgPT09IHZvaWQgMCkgeyBsb2FkU2NyaXB0T3B0aW9ucyA9IHt9OyB9XG4gICAgaWYgKCFpc0xvYWRlZCgpKSB7XG4gICAgICAgIC8vIHNjcmlwdCBpcyBub3QgeWV0IGxvYWRlZCwgaXMgaXQgaW4gdGhlIHByb2Nlc3Mgb2YgbG9hZGluZz9cbiAgICAgICAgdmFyIHNjcmlwdCA9IGdldFNjcmlwdCgpO1xuICAgICAgICB2YXIgc3JjID0gc2NyaXB0ICYmIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICBpZiAoIWxvYWRTY3JpcHRPcHRpb25zLnVybCAmJiBzcmMpIHtcbiAgICAgICAgICAgIC8vIHNjcmlwdCBpcyBzdGlsbCBsb2FkaW5nIGFuZCB1c2VyIGRpZCBub3Qgc3BlY2lmeSBhIFVSTFxuICAgICAgICAgICAgLy8gaW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gZGVmYXVsdCB0byB0aGUgVVJMIHRoYXQncyBiZWluZyBsb2FkZWRcbiAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgZGVmYXVsdGluZyB0byB0aGUgbGF0ZXN0IDQueCBVUkxcbiAgICAgICAgICAgIGxvYWRTY3JpcHRPcHRpb25zLnVybCA9IHNyYztcbiAgICAgICAgfVxuICAgICAgICAvLyBhdHRlbXB0IHRvIGxvYWQgdGhlIHNjcmlwdCB0aGVuIGxvYWQgdGhlIG1vZHVsZXNcbiAgICAgICAgcmV0dXJuIGxvYWRTY3JpcHQobG9hZFNjcmlwdE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVxdWlyZU1vZHVsZXMobW9kdWxlcyk7IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gc2NyaXB0IGlzIGFscmVhZHkgbG9hZGVkLCBqdXN0IGxvYWQgdGhlIG1vZHVsZXNcbiAgICAgICAgcmV0dXJuIHJlcXVpcmVNb2R1bGVzKG1vZHVsZXMpO1xuICAgIH1cbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBsb2FkQ3NzIH0gZnJvbSAnLi91dGlscy9jc3MnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgZ2V0Q2RuVXJsIH0gZnJvbSAnLi91dGlscy91cmwnO1xudmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5mdW5jdGlvbiBjcmVhdGVTY3JpcHQodXJsKSB7XG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLWVzcmktbG9hZGVyJywgJ2xvYWRpbmcnKTtcbiAgICByZXR1cm4gc2NyaXB0O1xufVxuLy8gYWRkIGEgb25lLXRpbWUgbG9hZCBoYW5kbGVyIHRvIHNjcmlwdFxuLy8gYW5kIG9wdGlvbmFsbHkgYWRkIGEgb25lIHRpbWUgZXJyb3IgaGFuZGxlciBhcyB3ZWxsXG5mdW5jdGlvbiBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgY2FsbGJhY2ssIGVycmJhY2spIHtcbiAgICB2YXIgb25TY3JpcHRFcnJvcjtcbiAgICBpZiAoZXJyYmFjaykge1xuICAgICAgICAvLyBzZXQgdXAgYW4gZXJyb3IgaGFuZGxlciBhcyB3ZWxsXG4gICAgICAgIG9uU2NyaXB0RXJyb3IgPSBoYW5kbGVTY3JpcHRFcnJvcihzY3JpcHQsIGVycmJhY2spO1xuICAgIH1cbiAgICB2YXIgb25TY3JpcHRMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBwYXNzIHRoZSBzY3JpcHQgdG8gdGhlIGNhbGxiYWNrXG4gICAgICAgIGNhbGxiYWNrKHNjcmlwdCk7XG4gICAgICAgIC8vIHJlbW92ZSB0aGlzIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25TY3JpcHRMb2FkLCBmYWxzZSk7XG4gICAgICAgIGlmIChvblNjcmlwdEVycm9yKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGVycm9yIGxpc3RlbmVyIGFzIHdlbGxcbiAgICAgICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uU2NyaXB0RXJyb3IsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvblNjcmlwdExvYWQsIGZhbHNlKTtcbn1cbi8vIGFkZCBhIG9uZS10aW1lIGVycm9yIGhhbmRsZXIgdG8gdGhlIHNjcmlwdFxuZnVuY3Rpb24gaGFuZGxlU2NyaXB0RXJyb3Ioc2NyaXB0LCBjYWxsYmFjaykge1xuICAgIHZhciBvblNjcmlwdEVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gcmVqZWN0IHRoZSBwcm9taXNlIGFuZCByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBjYWxsYmFjayhlLmVycm9yIHx8IG5ldyBFcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciBhdHRlbXB0aW5nIHRvIGxvYWQgXCIuY29uY2F0KHNjcmlwdC5zcmMpKSk7XG4gICAgICAgIC8vIHJlbW92ZSB0aGlzIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uU2NyaXB0RXJyb3IsIGZhbHNlKTtcbiAgICB9O1xuICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uU2NyaXB0RXJyb3IsIGZhbHNlKTtcbiAgICByZXR1cm4gb25TY3JpcHRFcnJvcjtcbn1cbi8vIGFsbG93IHRoZSB1c2VyIHRvIGNvbmZpZ3VyZSBkZWZhdWx0IHNjcmlwdCBvcHRpb25zIHJhdGhlciB0aGFuIHBhc3Npbmcgb3B0aW9ucyB0byBgbG9hZE1vZHVsZXNgIGVhY2ggdGltZVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIGRlZmF1bHRPcHRpb25zID0gb3B0aW9ucztcbn1cbi8vIGdldCB0aGUgc2NyaXB0IGluamVjdGVkIGJ5IHRoaXMgbGlicmFyeVxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcmlwdCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W2RhdGEtZXNyaS1sb2FkZXJdJyk7XG59XG4vLyBoYXMgQXJjR0lTIEFQSSBiZWVuIGxvYWRlZCBvbiB0aGUgcGFnZSB5ZXQ/XG5leHBvcnQgZnVuY3Rpb24gaXNMb2FkZWQoKSB7XG4gICAgdmFyIGdsb2JhbFJlcXVpcmUgPSB3aW5kb3dbJ3JlcXVpcmUnXTtcbiAgICAvLyAub24oKSBlbnN1cmVzIHRoYXQgaXQncyBEb2pvJ3MgQU1EIGxvYWRlclxuICAgIHJldHVybiBnbG9iYWxSZXF1aXJlICYmIGdsb2JhbFJlcXVpcmUub247XG59XG4vLyBsb2FkIHRoZSBBcmNHSVMgQVBJIG9uIHRoZSBwYWdlXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNjcmlwdChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAvLyB3ZSB3b3VsZCBoYXZlIGxpa2VkIHRvIHVzZSBzcHJlYWQgbGlrZSB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH1cbiAgICAvLyBidXQgVFMgd291bGQgaW5qZWN0IGEgcG9seWZpbGwgdGhhdCB3b3VsZCByZXF1aXJlIHVzZSB0byBjb25maWd1cmUgcm9sbHVwIHcgY29udGVudDogJ3dpbmRvdydcbiAgICAvLyBpZiB3ZSBoYXZlIGFub3RoZXIgb2NjYXNpb24gdG8gdXNlIHNwcmVhZCwgbGV0J3MgZG8gdGhhdCBhbmQgcmVwbGFjZSB0aGlzIGZvci4uLmluXG4gICAgdmFyIG9wdHMgPSB7fTtcbiAgICBbZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnNdLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgb3B0c1twcm9wXSA9IG9ialtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFVSTCB0byBsb2FkXG4gICAgdmFyIHZlcnNpb24gPSBvcHRzLnZlcnNpb247XG4gICAgdmFyIHVybCA9IG9wdHMudXJsIHx8IGdldENkblVybCh2ZXJzaW9uKTtcbiAgICByZXR1cm4gbmV3IHV0aWxzLlByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgc2NyaXB0ID0gZ2V0U2NyaXB0KCk7XG4gICAgICAgIGlmIChzY3JpcHQpIHtcbiAgICAgICAgICAgIC8vIHRoZSBBUEkgaXMgYWxyZWFkeSBsb2FkZWQgb3IgaW4gdGhlIHByb2Nlc3Mgb2YgbG9hZGluZy4uLlxuICAgICAgICAgICAgLy8gTk9URTogaGF2ZSB0byB0ZXN0IGFnYWluc3Qgc2NyIGF0dHJpYnV0ZSB2YWx1ZSwgbm90IHNjcmlwdC5zcmNcbiAgICAgICAgICAgIC8vIGIvYyB0aGUgbGF0dGVyIHdpbGwgcmV0dXJuIHRoZSBmdWxsIHVybCBmb3IgcmVsYXRpdmUgcGF0aHNcbiAgICAgICAgICAgIHZhciBzcmMgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgICAgIGlmIChzcmMgIT09IHVybCkge1xuICAgICAgICAgICAgICAgIC8vIHBvdGVudGlhbGx5IHRyeWluZyB0byBsb2FkIGEgZGlmZmVyZW50IHZlcnNpb24gb2YgdGhlIEFQSVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJUaGUgQXJjR0lTIEFQSSBmb3IgSmF2YVNjcmlwdCBpcyBhbHJlYWR5IGxvYWRlZCAoXCIuY29uY2F0KHNyYywgXCIpLlwiKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHNjcmlwdCBoYXMgYWxyZWFkeSBzdWNjZXNzZnVsbHkgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIHRoZSBzY3JpcHQgdG8gbG9hZCBhbmQgdGhlbiByZXNvbHZlXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVNjcmlwdExvYWQoc2NyaXB0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIEFQSSBoYXMgYmVlbiBsb2FkZWQgYnkgc29tZSBvdGhlciBtZWFuc1xuICAgICAgICAgICAgICAgIC8vIHBvdGVudGlhbGx5IHRyeWluZyB0byBsb2FkIGEgZGlmZmVyZW50IHZlcnNpb24gb2YgdGhlIEFQSVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJUaGUgQXJjR0lTIEFQSSBmb3IgSmF2YVNjcmlwdCBpcyBhbHJlYWR5IGxvYWRlZC5cIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZmlyc3QgdGltZSBhdHRlbXB0aW5nIHRvIGxvYWQgdGhlIEFQSVxuICAgICAgICAgICAgICAgIHZhciBjc3MgPSBvcHRzLmNzcztcbiAgICAgICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1c2VWZXJzaW9uID0gY3NzID09PSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBsb2FkIHRoZSBjc3MgYmVmb3JlIGxvYWRpbmcgdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBsb2FkQ3NzKHVzZVZlcnNpb24gPyB2ZXJzaW9uIDogY3NzLCBvcHRzLmluc2VydENzc0JlZm9yZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIHNjcmlwdCBvYmplY3Qgd2hvc2Ugc291cmNlIHBvaW50cyB0byB0aGUgQVBJXG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gY3JlYXRlU2NyaXB0KHVybCk7XG4gICAgICAgICAgICAgICAgLy8gX2N1cnJlbnRVcmwgPSB1cmw7XG4gICAgICAgICAgICAgICAgLy8gb25jZSB0aGUgc2NyaXB0IGlzIGxvYWRlZC4uLlxuICAgICAgICAgICAgICAgIGhhbmRsZVNjcmlwdExvYWQoc2NyaXB0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgc3RhdHVzIG9mIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1lc3JpLWxvYWRlcicsICdsb2FkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzY3JpcHQpO1xuICAgICAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgLy8gbG9hZCB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgZ2V0Q2RuQ3NzVXJsLCBwYXJzZVZlcnNpb24gfSBmcm9tICcuL3VybCc7XG5mdW5jdGlvbiBjcmVhdGVTdHlsZXNoZWV0TGluayhocmVmKSB7XG4gICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgbGluay5ocmVmID0gaHJlZjtcbiAgICByZXR1cm4gbGluaztcbn1cbmZ1bmN0aW9uIGluc2VydExpbmsobGluaywgYmVmb3JlKSB7XG4gICAgaWYgKGJlZm9yZSkge1xuICAgICAgICAvLyB0aGUgbGluayBzaG91bGQgYmUgaW5zZXJ0ZWQgYmVmb3JlIGEgc3BlY2lmaWMgbm9kZVxuICAgICAgICB2YXIgYmVmb3JlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYmVmb3JlKTtcbiAgICAgICAgYmVmb3JlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsaW5rLCBiZWZvcmVOb2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGFwcGVuZCB0aGUgbGluayB0byB0aGVuIGVuZCBvZiB0aGUgaGVhZCB0YWdcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9XG59XG4vLyBjaGVjayBpZiB0aGUgY3NzIHVybCBoYXMgYmVlbiBpbmplY3RlZCBvciBhZGRlZCBtYW51YWxseVxuZnVuY3Rpb24gZ2V0Q3NzKHVybCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGlua1tocmVmKj1cXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXVwiKSk7XG59XG5mdW5jdGlvbiBnZXRDc3NVcmwodXJsT3JWZXJzaW9uKSB7XG4gICAgcmV0dXJuICF1cmxPclZlcnNpb24gfHwgcGFyc2VWZXJzaW9uKHVybE9yVmVyc2lvbilcbiAgICAgICAgLy8gaWYgaXQncyBhIHZhbGlkIHZlcnNpb24gc3RyaW5nIHJldHVybiB0aGUgQ0ROIFVSTFxuICAgICAgICA/IGdldENkbkNzc1VybCh1cmxPclZlcnNpb24pXG4gICAgICAgIC8vIG90aGVyd2lzZSBhc3N1bWUgaXQncyBhIFVSTCBhbmQgcmV0dXJuIHRoYXRcbiAgICAgICAgOiB1cmxPclZlcnNpb247XG59XG4vLyBsYXp5IGxvYWQgdGhlIENTUyBuZWVkZWQgZm9yIHRoZSBBcmNHSVMgQVBJXG5leHBvcnQgZnVuY3Rpb24gbG9hZENzcyh1cmxPclZlcnNpb24sIGJlZm9yZSkge1xuICAgIHZhciB1cmwgPSBnZXRDc3NVcmwodXJsT3JWZXJzaW9uKTtcbiAgICB2YXIgbGluayA9IGdldENzcyh1cmwpO1xuICAgIGlmICghbGluaykge1xuICAgICAgICAvLyBjcmVhdGUgJiBsb2FkIHRoZSBjc3MgbGlua1xuICAgICAgICBsaW5rID0gY3JlYXRlU3R5bGVzaGVldExpbmsodXJsKTtcbiAgICAgICAgaW5zZXJ0TGluayhsaW5rLCBiZWZvcmUpO1xuICAgIH1cbiAgICByZXR1cm4gbGluaztcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4vLyBhbGxvdyBjb25zdW1pbmcgbGlicmFyaWVzIHRvIHByb3ZpZGUgdGhlaXIgb3duIFByb21pc2UgaW1wbGVtZW50YXRpb25zXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgUHJvbWlzZTogaXNCcm93c2VyID8gd2luZG93WydQcm9taXNlJ10gOiB1bmRlZmluZWRcbn07XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xudmFyIERFRkFVTFRfVkVSU0lPTiA9ICc0LjI1JztcbnZhciBORVhUID0gJ25leHQnO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVmVyc2lvbih2ZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24udG9Mb3dlckNhc2UoKSA9PT0gTkVYVCkge1xuICAgICAgICByZXR1cm4gTkVYVDtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0gdmVyc2lvbiAmJiB2ZXJzaW9uLm1hdGNoKC9eKFxcZClcXC4oXFxkKykvKTtcbiAgICByZXR1cm4gbWF0Y2ggJiYge1xuICAgICAgICBtYWpvcjogcGFyc2VJbnQobWF0Y2hbMV0sIDEwKSxcbiAgICAgICAgbWlub3I6IHBhcnNlSW50KG1hdGNoWzJdLCAxMClcbiAgICB9O1xufVxuLyoqXG4gKiBHZXQgdGhlIENETiB1cmwgZm9yIGEgZ2l2ZW4gdmVyc2lvblxuICpcbiAqIEBwYXJhbSB2ZXJzaW9uIEV4OiAnNC4yNScgb3IgJzMuNDInLiBEZWZhdWx0cyB0byB0aGUgbGF0ZXN0IDQueCB2ZXJzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2RuVXJsKHZlcnNpb24pIHtcbiAgICBpZiAodmVyc2lvbiA9PT0gdm9pZCAwKSB7IHZlcnNpb24gPSBERUZBVUxUX1ZFUlNJT047IH1cbiAgICByZXR1cm4gXCJodHRwczovL2pzLmFyY2dpcy5jb20vXCIuY29uY2F0KHZlcnNpb24sIFwiL1wiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBDRE4gdXJsIGZvciBhIHRoZSBDU1MgZm9yIGEgZ2l2ZW4gdmVyc2lvbiBhbmQvb3IgdGhlbWVcbiAqXG4gKiBAcGFyYW0gdmVyc2lvbiBFeDogJzQuMjUnLCAnMy40MicsIG9yICduZXh0Jy4gRGVmYXVsdHMgdG8gdGhlIGxhdGVzdCA0LnggdmVyc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENkbkNzc1VybCh2ZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24gPT09IHZvaWQgMCkgeyB2ZXJzaW9uID0gREVGQVVMVF9WRVJTSU9OOyB9XG4gICAgdmFyIGJhc2VVcmwgPSBnZXRDZG5VcmwodmVyc2lvbik7XG4gICAgdmFyIHBhcnNlZFZlcnNpb24gPSBwYXJzZVZlcnNpb24odmVyc2lvbik7XG4gICAgaWYgKHBhcnNlZFZlcnNpb24gIT09IE5FWFQgJiYgcGFyc2VkVmVyc2lvbi5tYWpvciA9PT0gMykge1xuICAgICAgICAvLyBOT1RFOiBhdCAzLjExIHRoZSBDU1MgbW92ZWQgZnJvbSB0aGUgL2pzIGZvbGRlciB0byB0aGUgcm9vdFxuICAgICAgICB2YXIgcGF0aCA9IHBhcnNlZFZlcnNpb24ubWlub3IgPD0gMTAgPyAnanMvJyA6ICcnO1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoYmFzZVVybCkuY29uY2F0KHBhdGgsIFwiZXNyaS9jc3MvZXNyaS5jc3NcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBhc3N1bWUgNC54XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChiYXNlVXJsLCBcImVzcmkvdGhlbWVzL2xpZ2h0L21haW4uY3NzXCIpO1xuICAgIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xIDhjMC0zLjg1IDMuMTUtNyA3LTdzNyAzLjE1IDcgNy0zLjE1IDctNyA3LTctMy4xNS03LTdtNy44NzUgNC4zNzVhLjg3NS44NzUgMCAxIDEtMS43NSAwIC44NzUuODc1IDAgMCAxIDEuNzUgMG0tLjA2My0yLjY1NmMuMTMyLS41NzEuNDE1LS45MTYuODQ4LTEuMjk5cy43MDEtLjcwOS43MDEtLjcwOWMuMzktLjQ3Mi43MDEtMS4xMDIuNzAxLTEuODExIDAtMS43MzItMS40MDItMy4xNS0zLjExNy0zLjE1LTEuMzU3IDAtMi41Mi45MjgtMi45NDYgMi4xNTctLjA2LjE1Mi0uMDYuMjk5LS4wNi4yOTlhLjY1LjY1IDAgMCAwIC42NjguNjk0bC4xLS4wMDZjLjQtLjA0Ni42NzktLjI3NS44MjktLjY1LjA3OC0uMTY0LjEwOC0uMjA4LjEyMi0uMjI5LjI4MS0uNDE2Ljc1NC0uNjkgMS4yODctLjY5Ljg1OCAwIDEuNTU5LjcwOSAxLjU1OSAxLjU3NSAwIC40NzItLjE1Ni44NjYtLjQ2OCAxLjEwM2wtLjkzNSAxLjAyM2MtLjUwNS40NDctLjgwNiAxLjA0OS0uOTAxIDEuNzIybC0uMDA1LjA2NHYuMTE3YS43NS43NSAwIDAgMCAuNzUuNjk2bC4wOTItLjAwNWMuMzkzLS4wNDMuNzE0LS4zNTguNzQzLS43NHpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9maWxsZWQvc3VnZ2VzdGVkL2hlbHAuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlbHBGaWxsZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJqaW11LXVpXCI7XHJcbmltcG9ydCB7IEhlbHBGaWxsZWQgfSBmcm9tIFwiamltdS1pY29ucy9maWxsZWQvc3VnZ2VzdGVkL2hlbHBcIjtcclxuXHJcbmludGVyZmFjZSBIZWxwVG9vbHRpcFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZ2FwOiBcIjVweFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3RhcnRcIixcclxuICAgIGFsaWduSXRlbXM6IFwic3RhcnRcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCI3cHhcIixcclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxufTtcclxuY29uc3QgVGl0bGVXaXRoVG9vbHRpcDogUmVhY3QuRkM8SGVscFRvb2x0aXBQcm9wcz4gPSAoe1xyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT57dGl0bGV9PC9oND5cclxuICAgICAgPFRvb2x0aXBcclxuICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgIHJvbGU9XCJ0b29sdGlwXCJcclxuICAgICAgICBlbnRlckRlbGF5PXsxMDB9XHJcbiAgICAgICAgZW50ZXJOZXh0RGVsYXk9ezB9XHJcbiAgICAgICAgZW50ZXJUb3VjaERlbGF5PXs3MDB9XHJcbiAgICAgICAgbGVhdmVEZWxheT17MH1cclxuICAgICAgICBsZWF2ZVRvdWNoRGVsYXk9ezE1MDB9XHJcbiAgICAgICAgb2Zmc2V0T3B0aW9ucz17NH1cclxuICAgICAgICB0aXRsZT17ZGVzY3JpcHRpb259XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudG9vbHRpcH0+XHJcbiAgICAgICAgICA8SGVscEZpbGxlZCBzaXplPXsxNX0gY29sb3I9XCIjODA4MDgwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlV2l0aFRvb2x0aXA7XHJcbiIsIiAgaW1wb3J0IHsgU2Vzc2lvbk1hbmFnZXIgfSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbiAgXHJcbiAgLy8gRnVuY2nDs24gaGVscGVyIHBhcmEgb2J0ZW5lciBlbCB0b2tlbiBkZSBsYSBzZXNpw7NuXHJcbiAgZXhwb3J0IGNvbnN0IGdldFNlc3Npb25Ub2tlbiA9ICgpOiBzdHJpbmcgfCBudWxsID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNlc3Npb25NYW5hZ2VyID0gU2Vzc2lvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgY29uc3Qgc2Vzc2lvbnMgPSBzZXNzaW9uTWFuYWdlcj8uZ2V0U2Vzc2lvbnMoKTtcclxuICAgICAgLy8gT2J0ZW5lciBlbCB0b2tlbiBkZSBsYSBwcmltZXJhIHNlc2nDs24gYWN0aXZhXHJcbiAgICAgIGlmIChzZXNzaW9ucyAmJiBzZXNzaW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlc3Npb25zWzBdLnRva2VuIHx8IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWwgb2J0ZW5lciBlbCB0b2tlbiBkZSBzZXNpw7NuOlwiLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2NhbGUodHJhbnNsYXRpb25zKSB7XHJcbiAgLy8gRGV0ZWN0YSBsb2NhbGUgZGVzZGUgbGEgVVJMICg/bG9jYWxlPWVuKSBvIGZhbGxiYWNrIGEgXCJlc1wiXHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICBjb25zdCBsb2NhbGUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibG9jYWxlXCIpIHx8IFwiZXNcIjtcclxuXHJcbiAgY29uc3QgdCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIChrZXk6IGtleW9mIHR5cGVvZiB0cmFuc2xhdGlvbnNbXCJlc1wiXSkgPT5cclxuICAgICAgdHJhbnNsYXRpb25zW2xvY2FsZSBhcyBcImVzXCIgfCBcImVuXCJdW2tleV0gPz8ga2V5O1xyXG4gIH0sIFtsb2NhbGVdKTtcclxuXHJcbiAgcmV0dXJuIHsgdCwgbG9jYWxlIH07XHJcbn0iLCJleHBvcnQgY29uc3QgdHJhbnNsYXRpb25zID0ge1xyXG4gICAgZXM6IHtcclxuICAgICAgd2lkZ2V0TGFiZWw6IFwiUHJveGltaWRhZCBkZSDDoXJlYXMgZGUgUmllc2dvXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkVzdGUgd2lkZ2V0IHBlcm1pdGUgYSBwYXJ0aXIgZGUgbGEgZGV0ZWNjacOzbiBkZSDDoXJlYXMgcXVlbWFkYXMgZSBpbnVuZGFkYXMsIGdlbmVyYXIgbMOtbmVhcyBkZSBwcm94aW1pZGFkIGEgbMOtbWl0ZXMgdXJiYW5vcyBtw6FzIGNlcmNhbm9zLlwiLFxyXG4gICAgICBpbmNlbmRpbzogXCJJbmNlbmRpb3NcIixcclxuICAgICAgaW51bmRhY2lvbjogXCJJbnVuZGFjaW9uZXNcIixcclxuICAgICAgYnVmZmVyTGFiZWw6IFwiS21zIMOhcmVhIGRlIGluZmx1ZW5jaWFcIixcclxuICAgICAgZ2VuZXJhckJ1ZmZlcjogXCJHZW5lcmFyIMOhcmVhIGRlIGluZmx1ZW5jaWFcIixcclxuICAgICAgZGlidWphckxpbmVhczogXCJEaWJ1amFyIGzDrW5lYXMgZGUgcHJveGltaWRhZFwiLFxyXG4gICAgICBlcnJvckltYWdlbjogXCJEZWJlIHNlbGVjY2lvbmFyIHVuYSBpbWFnZW4gYW50ZXMgZGUgZWplY3V0YXIgZXN0ZSBwcm9jZXNvXCIsXHJcbiAgICAgIGVycm9yQnVmZmVyOiBcIkRlYmUgc2VsZWNjaW9uYXIgbcOtbmltbyB1biBwb2zDrWdvbm8uXCIsXHJcbiAgICAgIG1pbkttV2FybmluZzogXCJFbCB2YWxvciBkZWJlIHNlciBtZW5vciBvIGlndWFsIDEwMCBrbS5cIixcclxuICAgICAgbWF4S21XYXJuaW5nOiBcIkVsIHZhbG9yIGRlYmUgc2VyIG1heW9yIG8gaWd1YWwgMSBrbS5cIixcclxuICAgICAgZmlyZUxheWVyOiBcIlpvbmFzIHF1ZW1hZGFzXCIsXHJcbiAgICAgIGZsb29kTGF5ZXI6IFwiWm9uYXMgaW51bmRhZGFzXCIsXHJcbiAgICAgIGZpcmVFcnJvcjogXCJFcnJvciBhbCBjYXJnYXIgcmllc2dvIGRlIGluY2VuZGlvLCBpbnRlbnRhIGRlIG51ZXZvXCIsXHJcbiAgICAgIGZsb29kRXJyb3I6IFwiRXJyb3IgYWwgY2FyZ2FyIHJpZXNnbyBkZSBpbnVuZGFjaW9uLCBpbnRlbnRhIGRlIG51ZXZvXCIsXHJcbiAgICAgIGJ1ZmZlckxheWVyOiBcIkJ1ZmZlciBkZSB6b25hIGFmZWN0YWRhXCIsXHJcbiAgICAgIGJ1ZmZlcldhcm5pbmc6IFwiRGViZSBzZWxlY2Npb25hciBtw61uaW1vIHVuIHBvbMOtZ29uby5cIixcclxuICAgICAgYnVmZmVyRXJyb3I6IFwiRXJyb3IgYWwgZ2VuZXJhciBlbCBidWZmZXIuXCIsXHJcbiAgICAgIHByb3hpbWl0eUxheWVyOiBcIkzDrW5lYXMgZGUgUHJveGltaWRhZFwiLFxyXG4gICAgICB1cmJhbkxpbWl0c0Vycm9yOiBcIk5vIGV4aXN0ZW4gbMOtbWl0ZXMgdXJiYW5vcyBkZW50cm8gZGVsIMOhcmVhLlwiXHJcblxyXG4gICAgfSxcclxuICAgIGVuOiB7XHJcbiAgICAgIHdpZGdldExhYmVsOiBcIlJpc2sgQXJlYSBQcm94aW1pdHlcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyB3aWRnZXQgYWxsb3dzIGdlbmVyYXRpbmcgcHJveGltaXR5IGxpbmVzIHRvIHRoZSBuZWFyZXN0IHVyYmFuIGxpbWl0cyBmcm9tIGJ1cm5lZCBvciBmbG9vZGVkIGFyZWFzLlwiLFxyXG4gICAgICBpbmNlbmRpbzogXCJXaWxkZmlyZXNcIixcclxuICAgICAgaW51bmRhY2lvbjogXCJGbG9vZHNcIixcclxuICAgICAgYnVmZmVyTGFiZWw6IFwiQnVmZmVyIGRpc3RhbmNlIChrbSlcIixcclxuICAgICAgZ2VuZXJhckJ1ZmZlcjogXCJHZW5lcmF0ZSBidWZmZXIgYXJlYVwiLFxyXG4gICAgICBkaWJ1amFyTGluZWFzOiBcIkRyYXcgcHJveGltaXR5IGxpbmVzXCIsXHJcbiAgICAgIGVycm9ySW1hZ2VuOiBcIllvdSBtdXN0IHNlbGVjdCBhbiBpbWFnZSBiZWZvcmUgcnVubmluZyB0aGlzIHByb2Nlc3NcIixcclxuICAgICAgZXJyb3JCdWZmZXI6IFwiWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IG9uZSBwb2x5Z29uLlwiLFxyXG4gICAgICBtaW5LbVdhcm5pbmc6IFwiVGhlIHZhbHVlIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDEwMCBrbS5cIixcclxuICAgICAgbWF4S21XYXJuaW5nOiBcIlRoZSB2YWx1ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAxIGttLlwiLFxyXG4gICAgICBmaXJlTGF5ZXI6IFwiQnVybmVkIGFyZWFzXCIsXHJcbiAgICAgIGZsb29kTGF5ZXI6IFwiRmxvb2RlZCBhcmVhc1wiLFxyXG4gICAgICBmaXJlRXJyb3I6IFwiRXJyb3IgbG9hZGluZyBmaXJlIHJpc2ssIHRyeSBhZ2Fpbi5cIixcclxuICAgICAgZmxvb2RFcnJvcjogXCJFcnJvciBsb2FkaW5nIGZsb29kIHJpc2ssIHRyeSBhZ2Fpbi5cIixcclxuICAgICAgYnVmZmVyTGF5ZXI6IFwiYWZmZWN0ZWQgYXJlYSBidWZmZXJcIixcclxuICAgICAgYnVmZmVyV2FybmluZzogXCJZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3Qgb25lIHBvbHlnb24uXCIsXHJcbiAgICAgIGJ1ZmZlckVycm9yOiBcIkVycm9yIGdlbmVyYXRpbmcgYnVmZmVyLlwiLFxyXG4gICAgICBwcm94aW1pdHlMYXllcjogXCJMaW5lcyBvZiBQcm94aW1pdHlcIixcclxuICAgICAgdXJiYW5MaW1pdHNFcnJvcjogXCJUaGVyZSBhcmUgbm8gdXJiYW4gYm91bmRhcmllcyB3aXRoaW4gdGhlIGFyZWEuXCJcclxuICAgIH1cclxuICB9OyIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIHJldHVybiB4ID09PSB5ICYmICh4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSkgfHwgeCAhPT0geCAmJiB5ICE9PSB5IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIDtcbn1cblxudmFyIG9iamVjdElzID0gdHlwZW9mIE9iamVjdC5pcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5pcyA6IGlzO1xuXG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBSZWFjdC51c2VTeW5jRXh0ZXJuYWxTdG9yZTtcblxuLy8gZm9yIENvbW1vbkpTIGludGVyb3AuXG5cbnZhciB1c2VSZWYgPSBSZWFjdC51c2VSZWYsXG4gICAgdXNlRWZmZWN0ID0gUmVhY3QudXNlRWZmZWN0LFxuICAgIHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vLFxuICAgIHVzZURlYnVnVmFsdWUgPSBSZWFjdC51c2VEZWJ1Z1ZhbHVlOyAvLyBTYW1lIGFzIHVzZVN5bmNFeHRlcm5hbFN0b3JlLCBidXQgc3VwcG9ydHMgc2VsZWN0b3IgYW5kIGlzRXF1YWwgYXJndW1lbnRzLlxuXG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWwpIHtcbiAgLy8gVXNlIHRoaXMgdG8gdHJhY2sgdGhlIHJlbmRlcmVkIHNuYXBzaG90LlxuICB2YXIgaW5zdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGluc3Q7XG5cbiAgaWYgKGluc3RSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgIGluc3QgPSB7XG4gICAgICBoYXNWYWx1ZTogZmFsc2UsXG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH07XG4gICAgaW5zdFJlZi5jdXJyZW50ID0gaW5zdDtcbiAgfSBlbHNlIHtcbiAgICBpbnN0ID0gaW5zdFJlZi5jdXJyZW50O1xuICB9XG5cbiAgdmFyIF91c2VNZW1vID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gVHJhY2sgdGhlIG1lbW9pemVkIHN0YXRlIHVzaW5nIGNsb3N1cmUgdmFyaWFibGVzIHRoYXQgYXJlIGxvY2FsIHRvIHRoaXNcbiAgICAvLyBtZW1vaXplZCBpbnN0YW5jZSBvZiBhIGdldFNuYXBzaG90IGZ1bmN0aW9uLiBJbnRlbnRpb25hbGx5IG5vdCB1c2luZyBhXG4gICAgLy8gdXNlUmVmIGhvb2ssIGJlY2F1c2UgdGhhdCBzdGF0ZSB3b3VsZCBiZSBzaGFyZWQgYWNyb3NzIGFsbCBjb25jdXJyZW50XG4gICAgLy8gY29waWVzIG9mIHRoZSBob29rL2NvbXBvbmVudC5cbiAgICB2YXIgaGFzTWVtbyA9IGZhbHNlO1xuICAgIHZhciBtZW1vaXplZFNuYXBzaG90O1xuICAgIHZhciBtZW1vaXplZFNlbGVjdGlvbjtcblxuICAgIHZhciBtZW1vaXplZFNlbGVjdG9yID0gZnVuY3Rpb24gKG5leHRTbmFwc2hvdCkge1xuICAgICAgaWYgKCFoYXNNZW1vKSB7XG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHRoZSBob29rIGlzIGNhbGxlZCwgdGhlcmUgaXMgbm8gbWVtb2l6ZWQgcmVzdWx0LlxuICAgICAgICBoYXNNZW1vID0gdHJ1ZTtcbiAgICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcblxuICAgICAgICB2YXIgX25leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpO1xuXG4gICAgICAgIGlmIChpc0VxdWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBFdmVuIGlmIHRoZSBzZWxlY3RvciBoYXMgY2hhbmdlZCwgdGhlIGN1cnJlbnRseSByZW5kZXJlZCBzZWxlY3Rpb25cbiAgICAgICAgICAvLyBtYXkgYmUgZXF1YWwgdG8gdGhlIG5ldyBzZWxlY3Rpb24uIFdlIHNob3VsZCBhdHRlbXB0IHRvIHJldXNlIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgdmFsdWUgaWYgcG9zc2libGUsIHRvIHByZXNlcnZlIGRvd25zdHJlYW0gbWVtb2l6YXRpb25zLlxuICAgICAgICAgIGlmIChpbnN0Lmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdGlvbiA9IGluc3QudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChpc0VxdWFsKGN1cnJlbnRTZWxlY3Rpb24sIF9uZXh0U2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IGN1cnJlbnRTZWxlY3Rpb247XG4gICAgICAgICAgICAgIHJldHVybiBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gX25leHRTZWxlY3Rpb247XG4gICAgICAgIHJldHVybiBfbmV4dFNlbGVjdGlvbjtcbiAgICAgIH0gLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG5cblxuICAgICAgLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG4gICAgICB2YXIgcHJldlNuYXBzaG90ID0gbWVtb2l6ZWRTbmFwc2hvdDtcbiAgICAgIHZhciBwcmV2U2VsZWN0aW9uID0gbWVtb2l6ZWRTZWxlY3Rpb247XG5cbiAgICAgIGlmIChvYmplY3RJcyhwcmV2U25hcHNob3QsIG5leHRTbmFwc2hvdCkpIHtcbiAgICAgICAgLy8gVGhlIHNuYXBzaG90IGlzIHRoZSBzYW1lIGFzIGxhc3QgdGltZS4gUmV1c2UgdGhlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgcmV0dXJuIHByZXZTZWxlY3Rpb247XG4gICAgICB9IC8vIFRoZSBzbmFwc2hvdCBoYXMgY2hhbmdlZCwgc28gd2UgbmVlZCB0byBjb21wdXRlIGEgbmV3IHNlbGVjdGlvbi5cblxuXG4gICAgICAvLyBUaGUgc25hcHNob3QgaGFzIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBzZWxlY3Rpb24uXG4gICAgICB2YXIgbmV4dFNlbGVjdGlvbiA9IHNlbGVjdG9yKG5leHRTbmFwc2hvdCk7IC8vIElmIGEgY3VzdG9tIGlzRXF1YWwgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHVzZSB0aGF0IHRvIGNoZWNrIGlmIHRoZSBkYXRhXG4gICAgICAvLyBoYXMgY2hhbmdlZC4gSWYgaXQgaGFzbid0LCByZXR1cm4gdGhlIHByZXZpb3VzIHNlbGVjdGlvbi4gVGhhdCBzaWduYWxzXG4gICAgICAvLyB0byBSZWFjdCB0aGF0IHRoZSBzZWxlY3Rpb25zIGFyZSBjb25jZXB0dWFsbHkgZXF1YWwsIGFuZCB3ZSBjYW4gYmFpbFxuICAgICAgLy8gb3V0IG9mIHJlbmRlcmluZy5cblxuICAgICAgLy8gSWYgYSBjdXN0b20gaXNFcXVhbCBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdXNlIHRoYXQgdG8gY2hlY2sgaWYgdGhlIGRhdGFcbiAgICAgIC8vIGhhcyBjaGFuZ2VkLiBJZiBpdCBoYXNuJ3QsIHJldHVybiB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLiBUaGF0IHNpZ25hbHNcbiAgICAgIC8vIHRvIFJlYWN0IHRoYXQgdGhlIHNlbGVjdGlvbnMgYXJlIGNvbmNlcHR1YWxseSBlcXVhbCwgYW5kIHdlIGNhbiBiYWlsXG4gICAgICAvLyBvdXQgb2YgcmVuZGVyaW5nLlxuICAgICAgaWYgKGlzRXF1YWwgIT09IHVuZGVmaW5lZCAmJiBpc0VxdWFsKHByZXZTZWxlY3Rpb24sIG5leHRTZWxlY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiBwcmV2U2VsZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBtZW1vaXplZFNuYXBzaG90ID0gbmV4dFNuYXBzaG90O1xuICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBuZXh0U2VsZWN0aW9uO1xuICAgICAgcmV0dXJuIG5leHRTZWxlY3Rpb247XG4gICAgfTsgLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuXG5cbiAgICAvLyBBc3NpZ25pbmcgdGhpcyB0byBhIGNvbnN0YW50IHNvIHRoYXQgRmxvdyBrbm93cyBpdCBjYW4ndCBjaGFuZ2UuXG4gICAgdmFyIG1heWJlR2V0U2VydmVyU25hcHNob3QgPSBnZXRTZXJ2ZXJTbmFwc2hvdCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGdldFNlcnZlclNuYXBzaG90O1xuXG4gICAgdmFyIGdldFNuYXBzaG90V2l0aFNlbGVjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IoZ2V0U25hcHNob3QoKSk7XG4gICAgfTtcblxuICAgIHZhciBnZXRTZXJ2ZXJTbmFwc2hvdFdpdGhTZWxlY3RvciA9IG1heWJlR2V0U2VydmVyU25hcHNob3QgPT09IG51bGwgPyB1bmRlZmluZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihtYXliZUdldFNlcnZlclNuYXBzaG90KCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFtnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciwgZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3JdO1xuICB9LCBbZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90LCBzZWxlY3RvciwgaXNFcXVhbF0pLFxuICAgICAgZ2V0U2VsZWN0aW9uID0gX3VzZU1lbW9bMF0sXG4gICAgICBnZXRTZXJ2ZXJTZWxlY3Rpb24gPSBfdXNlTWVtb1sxXTtcblxuICB2YXIgdmFsdWUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNlbGVjdGlvbiwgZ2V0U2VydmVyU2VsZWN0aW9uKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbnN0Lmhhc1ZhbHVlID0gdHJ1ZTtcbiAgICBpbnN0LnZhbHVlID0gdmFsdWU7XG4gIH0sIFt2YWx1ZV0pO1xuICB1c2VEZWJ1Z1ZhbHVlKHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3I7XG4gICAgICAgICAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO1xufVxuICAgICAgICBcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsImZ1bmN0aW9uIHIoZSl7dmFyIHQsZixuPVwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlKW4rPWU7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlpZihBcnJheS5pc0FycmF5KGUpKXt2YXIgbz1lLmxlbmd0aDtmb3IodD0wO3Q8bzt0KyspZVt0XSYmKGY9cihlW3RdKSkmJihuJiYobis9XCIgXCIpLG4rPWYpfWVsc2UgZm9yKGYgaW4gZSllW2ZdJiYobiYmKG4rPVwiIFwiKSxuKz1mKTtyZXR1cm4gbn1leHBvcnQgZnVuY3Rpb24gY2xzeCgpe2Zvcih2YXIgZSx0LGY9MCxuPVwiXCIsbz1hcmd1bWVudHMubGVuZ3RoO2Y8bztmKyspKGU9YXJndW1lbnRzW2ZdKSYmKHQ9cihlKSkmJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBkZWZhdWx0IGNsc3g7IiwiLy8gc3JjL2luZGV4LnRzXG5pbXBvcnQgKiBhcyBSZWFjdDIgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjIgfSBmcm9tIFwidXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qc1wiO1xuXG4vLyBzcmMvdXRpbHMvcmVhY3QudHNcbmltcG9ydCAqIGFzIFJlYWN0T3JpZ2luYWwgZnJvbSBcInJlYWN0XCI7XG52YXIgUmVhY3QgPSAoXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICAvLyBAdHMtaWdub3JlXG4gIFwiZGVmYXVsdFwiIGluIFJlYWN0T3JpZ2luYWwgPyBSZWFjdE9yaWdpbmFsW1wiZGVmYXVsdFwiXSA6IFJlYWN0T3JpZ2luYWxcbik7XG5cbi8vIHNyYy9jb21wb25lbnRzL0NvbnRleHQudHNcbnZhciBDb250ZXh0S2V5ID0gU3ltYm9sLmZvcihgcmVhY3QtcmVkdXgtY29udGV4dGApO1xudmFyIGdUID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogKFxuICAvKiBmYWxsIGJhY2sgdG8gYSBwZXItbW9kdWxlIHNjb3BlIChwcmUtOC4xIGJlaGF2aW91cikgaWYgYGdsb2JhbFRoaXNgIGlzIG5vdCBhdmFpbGFibGUgKi9cbiAge31cbik7XG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICBpZiAoIVJlYWN0LmNyZWF0ZUNvbnRleHQpXG4gICAgcmV0dXJuIHt9O1xuICBjb25zdCBjb250ZXh0TWFwID0gZ1RbQ29udGV4dEtleV0gPz8gKGdUW0NvbnRleHRLZXldID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gIGxldCByZWFsQ29udGV4dCA9IGNvbnRleHRNYXAuZ2V0KFJlYWN0LmNyZWF0ZUNvbnRleHQpO1xuICBpZiAoIXJlYWxDb250ZXh0KSB7XG4gICAgcmVhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgcmVhbENvbnRleHQuZGlzcGxheU5hbWUgPSBcIlJlYWN0UmVkdXhcIjtcbiAgICB9XG4gICAgY29udGV4dE1hcC5zZXQoUmVhY3QuY3JlYXRlQ29udGV4dCwgcmVhbENvbnRleHQpO1xuICB9XG4gIHJldHVybiByZWFsQ29udGV4dDtcbn1cbnZhciBSZWFjdFJlZHV4Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBnZXRDb250ZXh0KCk7XG5cbi8vIHNyYy91dGlscy91c2VTeW5jRXh0ZXJuYWxTdG9yZS50c1xudmFyIG5vdEluaXRpYWxpemVkID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJ1U0VTIG5vdCBpbml0aWFsaXplZCFcIik7XG59O1xuXG4vLyBzcmMvaG9va3MvdXNlUmVkdXhDb250ZXh0LnRzXG5mdW5jdGlvbiBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gdXNlUmVkdXhDb250ZXh0MigpIHtcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KGNvbnRleHQpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWNvbnRleHRWYWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcImNvdWxkIG5vdCBmaW5kIHJlYWN0LXJlZHV4IGNvbnRleHQgdmFsdWU7IHBsZWFzZSBlbnN1cmUgdGhlIGNvbXBvbmVudCBpcyB3cmFwcGVkIGluIGEgPFByb3ZpZGVyPlwiXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICB9O1xufVxudmFyIHVzZVJlZHV4Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVSZWR1eENvbnRleHRIb29rKCk7XG5cbi8vIHNyYy9ob29rcy91c2VTZWxlY3Rvci50c1xudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gbm90SW5pdGlhbGl6ZWQ7XG52YXIgaW5pdGlhbGl6ZVVzZVNlbGVjdG9yID0gKGZuKSA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gZm47XG59O1xudmFyIHJlZkVxdWFsaXR5ID0gKGEsIGIpID0+IGEgPT09IGI7XG5mdW5jdGlvbiBjcmVhdGVTZWxlY3Rvckhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVJlZHV4Q29udGV4dDIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVJlZHV4Q29udGV4dCA6IGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dCk7XG4gIGNvbnN0IHVzZVNlbGVjdG9yMiA9IChzZWxlY3RvciwgZXF1YWxpdHlGbk9yT3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyBlcXVhbGl0eUZuID0gcmVmRXF1YWxpdHksIGRldk1vZGVDaGVja3MgPSB7fSB9ID0gdHlwZW9mIGVxdWFsaXR5Rm5Pck9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIiA/IHsgZXF1YWxpdHlGbjogZXF1YWxpdHlGbk9yT3B0aW9ucyB9IDogZXF1YWxpdHlGbk9yT3B0aW9ucztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yYCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvcmApO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlcXVhbGl0eUZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYW4gZXF1YWxpdHkgZnVuY3Rpb24gdG8gdXNlU2VsZWN0b3JgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgZ2V0U2VydmVyU3RhdGUsXG4gICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVja1xuICAgIH0gPSB1c2VSZWR1eENvbnRleHQyKCk7XG4gICAgY29uc3QgZmlyc3RSdW4gPSBSZWFjdC51c2VSZWYodHJ1ZSk7XG4gICAgY29uc3Qgd3JhcHBlZFNlbGVjdG9yID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgICB7XG4gICAgICAgIFtzZWxlY3Rvci5uYW1lXShzdGF0ZSkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrOiBmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayxcbiAgICAgICAgICAgICAgc3RhYmlsaXR5Q2hlY2s6IGZpbmFsU3RhYmlsaXR5Q2hlY2tcbiAgICAgICAgICAgIH0gPSB7XG4gICAgICAgICAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgICAgICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2ssXG4gICAgICAgICAgICAgIC4uLmRldk1vZGVDaGVja3NcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZmluYWxTdGFiaWxpdHlDaGVjayA9PT0gXCJhbHdheXNcIiB8fCBmaW5hbFN0YWJpbGl0eUNoZWNrID09PSBcIm9uY2VcIiAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRvQ29tcGFyZSA9IHNlbGVjdG9yKHN0YXRlKTtcbiAgICAgICAgICAgICAgaWYgKCFlcXVhbGl0eUZuKHNlbGVjdGVkLCB0b0NvbXBhcmUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAoeyBzdGFjayB9ID0gZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgIFwiU2VsZWN0b3IgXCIgKyAoc2VsZWN0b3IubmFtZSB8fCBcInVua25vd25cIikgKyBcIiByZXR1cm5lZCBhIGRpZmZlcmVudCByZXN1bHQgd2hlbiBjYWxsZWQgd2l0aCB0aGUgc2FtZSBwYXJhbWV0ZXJzLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy5cXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gYSBuZXcgcmVmZXJlbmNlIChzdWNoIGFzIGFuIG9iamVjdCBvciBhbiBhcnJheSkgc2hvdWxkIGJlIG1lbW9pemVkOiBodHRwczovL3JlZHV4LmpzLm9yZy91c2FnZS9kZXJpdmluZy1kYXRhLXNlbGVjdG9ycyNvcHRpbWl6aW5nLXNlbGVjdG9ycy13aXRoLW1lbW9pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQyOiB0b0NvbXBhcmUsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrID09PSBcImFsd2F5c1wiIHx8IGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrID09PSBcIm9uY2VcIiAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhY2sgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICh7IHN0YWNrIH0gPSBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgXCJTZWxlY3RvciBcIiArIChzZWxlY3Rvci5uYW1lIHx8IFwidW5rbm93blwiKSArIFwiIHJldHVybmVkIHRoZSByb290IHN0YXRlIHdoZW4gY2FsbGVkLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy5cXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gdGhlIGVudGlyZSBzdGF0ZSBhcmUgYWxtb3N0IGNlcnRhaW5seSBhIG1pc3Rha2UsIGFzIHRoZXkgd2lsbCBjYXVzZSBhIHJlcmVuZGVyIHdoZW5ldmVyICphbnl0aGluZyogaW4gc3RhdGUgY2hhbmdlcy5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhY2sgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaXJzdFJ1bi5jdXJyZW50KVxuICAgICAgICAgICAgICBmaXJzdFJ1bi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgfVtzZWxlY3Rvci5uYW1lXSxcbiAgICAgIFtzZWxlY3Rvciwgc3RhYmlsaXR5Q2hlY2ssIGRldk1vZGVDaGVja3Muc3RhYmlsaXR5Q2hlY2tdXG4gICAgKTtcbiAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IoXG4gICAgICBzdWJzY3JpcHRpb24uYWRkTmVzdGVkU3ViLFxuICAgICAgc3RvcmUuZ2V0U3RhdGUsXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZSB8fCBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgIHdyYXBwZWRTZWxlY3RvcixcbiAgICAgIGVxdWFsaXR5Rm5cbiAgICApO1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUoc2VsZWN0ZWRTdGF0ZSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkU3RhdGU7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlU2VsZWN0b3IyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VTZWxlY3RvcjJcbiAgfSk7XG4gIHJldHVybiB1c2VTZWxlY3RvcjI7XG59XG52YXIgdXNlU2VsZWN0b3IgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlU2VsZWN0b3JIb29rKCk7XG5cbi8vIHNyYy91dGlscy9yZWFjdC1pcy50c1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpO1xudmFyIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc2VydmVyX2NvbnRleHRcIik7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm9mZnNjcmVlblwiKTtcbnZhciBSRUFDVF9DTElFTlRfUkVGRVJFTkNFID0gU3ltYm9sLmZvcihcInJlYWN0LmNsaWVudC5yZWZlcmVuY2VcIik7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSBcIm9iamVjdFwiICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DTElFTlRfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG9iamVjdC50eXBlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBjb25zdCAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRToge1xuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2b2lkIDA7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuXG4vLyBzcmMvdXRpbHMvd2FybmluZy50c1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbi8vIHNyYy9jb25uZWN0L3ZlcmlmeVN1YnNlbGVjdG9ycy50c1xuZnVuY3Rpb24gdmVyaWZ5KHNlbGVjdG9yLCBtZXRob2ROYW1lKSB7XG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdmFsdWUgZm9yICR7bWV0aG9kTmFtZX0gaW4gY29ubmVjdC5gKTtcbiAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09PSBcIm1hcFN0YXRlVG9Qcm9wc1wiIHx8IG1ldGhvZE5hbWUgPT09IFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWxlY3RvciwgXCJkZXBlbmRzT25Pd25Qcm9wc1wiKSkge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgYFRoZSBzZWxlY3RvciBmb3IgJHttZXRob2ROYW1lfSBvZiBjb25uZWN0IGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy5gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKSB7XG4gIHZlcmlmeShtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpO1xuICB2ZXJpZnkobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKTtcbiAgdmVyaWZ5KG1lcmdlUHJvcHMsIFwibWVyZ2VQcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LnRzXG5mdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIHtcbiAgYXJlU3RhdGVzRXF1YWwsXG4gIGFyZU93blByb3BzRXF1YWwsXG4gIGFyZVN0YXRlUHJvcHNFcXVhbFxufSkge1xuICBsZXQgaGFzUnVuQXRMZWFzdE9uY2UgPSBmYWxzZTtcbiAgbGV0IHN0YXRlO1xuICBsZXQgb3duUHJvcHM7XG4gIGxldCBzdGF0ZVByb3BzO1xuICBsZXQgZGlzcGF0Y2hQcm9wcztcbiAgbGV0IG1lcmdlZFByb3BzO1xuICBmdW5jdGlvbiBoYW5kbGVGaXJzdENhbGwoZmlyc3RTdGF0ZSwgZmlyc3RPd25Qcm9wcykge1xuICAgIHN0YXRlID0gZmlyc3RTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IGZpcnN0T3duUHJvcHM7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIGhhc1J1bkF0TGVhc3RPbmNlID0gdHJ1ZTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpIHtcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wcygpIHtcbiAgICBpZiAobWFwU3RhdGVUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3U3RhdGUoKSB7XG4gICAgY29uc3QgbmV4dFN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpXG4gICAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICBjb25zdCBwcm9wc0NoYW5nZWQgPSAhYXJlT3duUHJvcHNFcXVhbChuZXh0T3duUHJvcHMsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZUNoYW5nZWQgPSAhYXJlU3RhdGVzRXF1YWwoXG4gICAgICBuZXh0U3RhdGUsXG4gICAgICBzdGF0ZSxcbiAgICAgIG5leHRPd25Qcm9wcyxcbiAgICAgIG93blByb3BzXG4gICAgKTtcbiAgICBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IG5leHRPd25Qcm9wcztcbiAgICBpZiAocHJvcHNDaGFuZ2VkICYmIHN0YXRlQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdQcm9wcygpO1xuICAgIGlmIChzdGF0ZUNoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3U3RhdGUoKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIHtcbiAgaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgaW5pdE1lcmdlUHJvcHMsXG4gIC4uLm9wdGlvbnNcbn0pIHtcbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gaW5pdE1hcFN0YXRlVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBjb25zdCBtZXJnZVByb3BzID0gaW5pdE1lcmdlUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKTtcbiAgfVxuICByZXR1cm4gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBvcHRpb25zKTtcbn1cblxuLy8gc3JjL3V0aWxzL2JpbmRBY3Rpb25DcmVhdG9ycy50c1xuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBjb25zdCBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgY29uc3QgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9ICguLi5hcmdzKSA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yKC4uLmFyZ3MpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cbi8vIHNyYy91dGlscy9pc1BsYWluT2JqZWN0LnRzXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiB8fCBvYmogPT09IG51bGwpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICBpZiAocHJvdG8gPT09IG51bGwpXG4gICAgcmV0dXJuIHRydWU7XG4gIGxldCBiYXNlUHJvdG8gPSBwcm90bztcbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pICE9PSBudWxsKSB7XG4gICAgYmFzZVByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90byk7XG4gIH1cbiAgcmV0dXJuIHByb3RvID09PSBiYXNlUHJvdG87XG59XG5cbi8vIHNyYy91dGlscy92ZXJpZnlQbGFpbk9iamVjdC50c1xuZnVuY3Rpb24gdmVyaWZ5UGxhaW5PYmplY3QodmFsdWUsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuaW5nKFxuICAgICAgYCR7bWV0aG9kTmFtZX0oKSBpbiAke2Rpc3BsYXlOYW1lfSBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdC4gSW5zdGVhZCByZWNlaXZlZCAke3ZhbHVlfS5gXG4gICAgKTtcbiAgfVxufVxuXG4vLyBzcmMvY29ubmVjdC93cmFwTWFwVG9Qcm9wcy50c1xuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNDb25zdGFudChnZXRDb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdENvbnN0YW50U2VsZWN0b3IoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBjb25zdGFudCA9IGdldENvbnN0YW50KGRpc3BhdGNoKTtcbiAgICBmdW5jdGlvbiBjb25zdGFudFNlbGVjdG9yKCkge1xuICAgICAgcmV0dXJuIGNvbnN0YW50O1xuICAgIH1cbiAgICBjb25zdGFudFNlbGVjdG9yLmRlcGVuZHNPbk93blByb3BzID0gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnN0YW50U2VsZWN0b3I7XG4gIH07XG59XG5mdW5jdGlvbiBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzID8gQm9vbGVhbihtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSA6IG1hcFRvUHJvcHMubGVuZ3RoICE9PSAxO1xufVxuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLCB7IGRpc3BsYXlOYW1lIH0pIHtcbiAgICBjb25zdCBwcm94eSA9IGZ1bmN0aW9uIG1hcFRvUHJvcHNQcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICByZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPyBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIDogcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIHZvaWQgMCk7XG4gICAgfTtcbiAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IHRydWU7XG4gICAgcHJveHkubWFwVG9Qcm9wcyA9IGZ1bmN0aW9uIGRldGVjdEZhY3RvcnlBbmRWZXJpZnkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IG1hcFRvUHJvcHM7XG4gICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpO1xuICAgICAgbGV0IHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICBpZiAodHlwZW9mIHByb3BzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IHByb3BzO1xuICAgICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKHByb3BzKTtcbiAgICAgICAgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHZlcmlmeVBsYWluT2JqZWN0KHByb3BzLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG59XG5cbi8vIHNyYy9jb25uZWN0L2ludmFsaWRBcmdGYWN0b3J5LnRzXG5mdW5jdGlvbiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShhcmcsIG5hbWUpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgb3B0aW9ucykgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIHZhbHVlIG9mIHR5cGUgJHt0eXBlb2YgYXJnfSBmb3IgJHtuYW1lfSBhcmd1bWVudCB3aGVuIGNvbm5lY3RpbmcgY29tcG9uZW50ICR7b3B0aW9ucy53cmFwcGVkQ29tcG9uZW50TmFtZX0uYFxuICAgICk7XG4gIH07XG59XG5cbi8vIHNyYy9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcy50c1xuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcyAmJiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSBcIm9iamVjdFwiID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChcbiAgICAoZGlzcGF0Y2gpID0+IChcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGJpbmRBY3Rpb25DcmVhdG9ycyhtYXBEaXNwYXRjaFRvUHJvcHMsIGRpc3BhdGNoKVxuICAgIClcbiAgKSA6ICFtYXBEaXNwYXRjaFRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KChkaXNwYXRjaCkgPT4gKHtcbiAgICBkaXNwYXRjaFxuICB9KSkgOiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSBcImZ1bmN0aW9uXCIgPyAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpXG4gICkgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9tYXBTdGF0ZVRvUHJvcHMudHNcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwU3RhdGVUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudCgoKSA9PiAoe30pKSA6IHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIilcbiAgKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L21lcmdlUHJvcHMudHNcbmZ1bmN0aW9uIGRlZmF1bHRNZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gIHJldHVybiB7IC4uLm93blByb3BzLCAuLi5zdGF0ZVByb3BzLCAuLi5kaXNwYXRjaFByb3BzIH07XG59XG5mdW5jdGlvbiB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdE1lcmdlUHJvcHNQcm94eShkaXNwYXRjaCwgeyBkaXNwbGF5TmFtZSwgYXJlTWVyZ2VkUHJvcHNFcXVhbCB9KSB7XG4gICAgbGV0IGhhc1J1bk9uY2UgPSBmYWxzZTtcbiAgICBsZXQgbWVyZ2VkUHJvcHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlUHJvcHNQcm94eShzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAgICAgY29uc3QgbmV4dE1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgICBpZiAoaGFzUnVuT25jZSkge1xuICAgICAgICBpZiAoIWFyZU1lcmdlZFByb3BzRXF1YWwobmV4dE1lcmdlZFByb3BzLCBtZXJnZWRQcm9wcykpXG4gICAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNSdW5PbmNlID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgdmVyaWZ5UGxhaW5PYmplY3QobWVyZ2VkUHJvcHMsIGRpc3BsYXlOYW1lLCBcIm1lcmdlUHJvcHNcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gKCkgPT4gZGVmYXVsdE1lcmdlUHJvcHMgOiB0eXBlb2YgbWVyZ2VQcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWVyZ2VQcm9wcywgXCJtZXJnZVByb3BzXCIpO1xufVxuXG4vLyBzcmMvdXRpbHMvYmF0Y2gudHNcbmZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soKTtcbn1cblxuLy8gc3JjL3V0aWxzL1N1YnNjcmlwdGlvbi50c1xuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICBsZXQgZmlyc3QgPSBudWxsO1xuICBsZXQgbGFzdCA9IG51bGw7XG4gIHJldHVybiB7XG4gICAgY2xlYXIoKSB7XG4gICAgICBmaXJzdCA9IG51bGw7XG4gICAgICBsYXN0ID0gbnVsbDtcbiAgICB9LFxuICAgIG5vdGlmeSgpIHtcbiAgICAgIGRlZmF1bHROb29wQmF0Y2goKCkgPT4ge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcbiAgICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKTtcbiAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0KCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gW107XG4gICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcbiAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgfSxcbiAgICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgIGxldCBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBsYXN0ID0ge1xuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgcHJldjogbGFzdFxuICAgICAgfTtcbiAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3QgPSBsaXN0ZW5lcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgZmlyc3QgPT09IG51bGwpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGxpc3RlbmVyLm5leHQpIHtcbiAgICAgICAgICBsaXN0ZW5lci5uZXh0LnByZXYgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3QgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgICAgbGlzdGVuZXIucHJldi5uZXh0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaXJzdCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxudmFyIG51bGxMaXN0ZW5lcnMgPSB7XG4gIG5vdGlmeSgpIHtcbiAgfSxcbiAgZ2V0OiAoKSA9PiBbXVxufTtcbmZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSwgcGFyZW50U3ViKSB7XG4gIGxldCB1bnN1YnNjcmliZTtcbiAgbGV0IGxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gIGxldCBzdWJzY3JpcHRpb25zQW1vdW50ID0gMDtcbiAgbGV0IHNlbGZTdWJzY3JpYmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGFkZE5lc3RlZFN1YihsaXN0ZW5lcikge1xuICAgIHRyeVN1YnNjcmliZSgpO1xuICAgIGNvbnN0IGNsZWFudXBMaXN0ZW5lciA9IGxpc3RlbmVycy5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghcmVtb3ZlZCkge1xuICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgY2xlYW51cExpc3RlbmVyKCk7XG4gICAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBub3RpZnlOZXN0ZWRTdWJzKCkge1xuICAgIGxpc3RlbmVycy5ub3RpZnkoKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VXcmFwcGVyKCkge1xuICAgIGlmIChzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBzZWxmU3Vic2NyaWJlZDtcbiAgfVxuICBmdW5jdGlvbiB0cnlTdWJzY3JpYmUoKSB7XG4gICAgc3Vic2NyaXB0aW9uc0Ftb3VudCsrO1xuICAgIGlmICghdW5zdWJzY3JpYmUpIHtcbiAgICAgIHVuc3Vic2NyaWJlID0gcGFyZW50U3ViID8gcGFyZW50U3ViLmFkZE5lc3RlZFN1YihoYW5kbGVDaGFuZ2VXcmFwcGVyKSA6IHN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2VXcmFwcGVyKTtcbiAgICAgIGxpc3RlbmVycyA9IGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpIHtcbiAgICBzdWJzY3JpcHRpb25zQW1vdW50LS07XG4gICAgaWYgKHVuc3Vic2NyaWJlICYmIHN1YnNjcmlwdGlvbnNBbW91bnQgPT09IDApIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICB1bnN1YnNjcmliZSA9IHZvaWQgMDtcbiAgICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgbGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5U3Vic2NyaWJlU2VsZigpIHtcbiAgICBpZiAoIXNlbGZTdWJzY3JpYmVkKSB7XG4gICAgICBzZWxmU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICB0cnlTdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmVTZWxmKCkge1xuICAgIGlmIChzZWxmU3Vic2NyaWJlZCkge1xuICAgICAgc2VsZlN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHtcbiAgICBhZGROZXN0ZWRTdWIsXG4gICAgbm90aWZ5TmVzdGVkU3VicyxcbiAgICBoYW5kbGVDaGFuZ2VXcmFwcGVyLFxuICAgIGlzU3Vic2NyaWJlZCxcbiAgICB0cnlTdWJzY3JpYmU6IHRyeVN1YnNjcmliZVNlbGYsXG4gICAgdHJ5VW5zdWJzY3JpYmU6IHRyeVVuc3Vic2NyaWJlU2VsZixcbiAgICBnZXRMaXN0ZW5lcnM6ICgpID0+IGxpc3RlbmVyc1xuICB9O1xuICByZXR1cm4gc3Vic2NyaXB0aW9uO1xufVxuXG4vLyBzcmMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC50c1xudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpO1xudmFyIGlzUmVhY3ROYXRpdmUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSBcIlJlYWN0TmF0aXZlXCI7XG52YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IGNhblVzZURPTSB8fCBpc1JlYWN0TmF0aXZlID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0O1xuXG4vLyBzcmMvdXRpbHMvc2hhbGxvd0VxdWFsLnRzXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKVxuICAgIHJldHVybiB0cnVlO1xuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gXCJvYmplY3RcIiB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIHNyYy91dGlscy9ob2lzdFN0YXRpY3MudHNcbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICQkdHlwZW9mOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICQkdHlwZW9mOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge1xuICBbRm9yd2FyZFJlZl06IEZPUldBUkRfUkVGX1NUQVRJQ1MsXG4gIFtNZW1vXTogTUVNT19TVEFUSUNTXG59O1xuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgaWYgKGlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfVxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFtcIiQkdHlwZW9mXCJdXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgY29uc3QgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIGNvbnN0IHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxuLy8gc3JjL2NvbXBvbmVudHMvY29ubmVjdC50c3hcbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IG5vdEluaXRpYWxpemVkO1xudmFyIGluaXRpYWxpemVDb25uZWN0ID0gKGZuKSA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gZm47XG59O1xudmFyIE5PX1NVQlNDUklQVElPTl9BUlJBWSA9IFtudWxsLCBudWxsXTtcbnZhciBzdHJpbmdpZnlDb21wb25lbnQgPSAoQ29tcCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShDb21wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhDb21wKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhlZmZlY3RGdW5jLCBlZmZlY3RBcmdzLCBkZXBlbmRlbmNpZXMpIHtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiBlZmZlY3RGdW5jKC4uLmVmZmVjdEFyZ3MpLCBkZXBlbmRlbmNpZXMpO1xufVxuZnVuY3Rpb24gY2FwdHVyZVdyYXBwZXJQcm9wcyhsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIHdyYXBwZXJQcm9wcywgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3Vicykge1xuICBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQgPSB3cmFwcGVyUHJvcHM7XG4gIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCkge1xuICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG51bGw7XG4gICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmVVcGRhdGVzKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcywgc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yLCBsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIGlzTW91bnRlZCwgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3VicywgYWRkaXRpb25hbFN1YnNjcmliZUxpc3RlbmVyKSB7XG4gIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgfTtcbiAgbGV0IGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG4gIGxldCBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICBjb25zdCBjaGVja0ZvclVwZGF0ZXMgPSAoKSA9PiB7XG4gICAgaWYgKGRpZFVuc3Vic2NyaWJlIHx8ICFpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYXRlc3RTdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBsZXQgbmV3Q2hpbGRQcm9wcywgZXJyb3I7XG4gICAgdHJ5IHtcbiAgICAgIG5ld0NoaWxkUHJvcHMgPSBjaGlsZFByb3BzU2VsZWN0b3IoXG4gICAgICAgIGxhdGVzdFN0b3JlU3RhdGUsXG4gICAgICAgIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvciA9IGU7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBlO1xuICAgIH1cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICAgIH1cbiAgICBpZiAobmV3Q2hpbGRQcm9wcyA9PT0gbGFzdENoaWxkUHJvcHMuY3VycmVudCkge1xuICAgICAgaWYgKCFyZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50KSB7XG4gICAgICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IHRydWU7XG4gICAgICBhZGRpdGlvbmFsU3Vic2NyaWJlTGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG4gIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gY2hlY2tGb3JVcGRhdGVzO1xuICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gIGNoZWNrRm9yVXBkYXRlcygpO1xuICBjb25zdCB1bnN1YnNjcmliZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcbiAgICBpZiAobGFzdFRocm93bkVycm9yKSB7XG4gICAgICB0aHJvdyBsYXN0VGhyb3duRXJyb3I7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdW5zdWJzY3JpYmVXcmFwcGVyO1xufVxuZnVuY3Rpb24gc3RyaWN0RXF1YWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uID0gZmFsc2U7XG5mdW5jdGlvbiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCB7XG4gIC8vIFRoZSBgcHVyZWAgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQsIHNvIFRTIGRvZXNuJ3QgbGlrZSB1cyBkZXN0cnVjdHVyaW5nIHRoaXMgdG8gY2hlY2sgaXRzIGV4aXN0ZW5jZS5cbiAgLy8gQHRzLWlnbm9yZVxuICBwdXJlLFxuICBhcmVTdGF0ZXNFcXVhbCA9IHN0cmljdEVxdWFsLFxuICBhcmVPd25Qcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIGFyZU1lcmdlZFByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIC8vIHVzZSBSZWFjdCdzIGZvcndhcmRSZWYgdG8gZXhwb3NlIGEgcmVmIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudFxuICBmb3J3YXJkUmVmID0gZmFsc2UsXG4gIC8vIHRoZSBjb250ZXh0IGNvbnN1bWVyIHRvIHVzZVxuICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHRcbn0gPSB7fSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHB1cmUgIT09IHZvaWQgMCAmJiAhaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbikge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbiA9IHRydWU7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICAnVGhlIGBwdXJlYCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZC4gYGNvbm5lY3RgIGlzIG5vdyBhbHdheXMgYSBcInB1cmUvbWVtb2l6ZWRcIiBjb21wb25lbnQnXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjb25zdCBDb250ZXh0ID0gY29udGV4dDtcbiAgY29uc3QgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKTtcbiAgY29uc3QgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzKTtcbiAgY29uc3QgaW5pdE1lcmdlUHJvcHMgPSBtZXJnZVByb3BzRmFjdG9yeShtZXJnZVByb3BzKTtcbiAgY29uc3Qgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzID0gQm9vbGVhbihtYXBTdGF0ZVRvUHJvcHMpO1xuICBjb25zdCB3cmFwV2l0aENvbm5lY3QgPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSAvKiBAX19QVVJFX18gKi8gaXNWYWxpZEVsZW1lbnRUeXBlKFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgaWYgKCFpc1ZhbGlkKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFlvdSBtdXN0IHBhc3MgYSBjb21wb25lbnQgdG8gdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGNvbm5lY3QuIEluc3RlYWQgcmVjZWl2ZWQgJHtzdHJpbmdpZnlDb21wb25lbnQoXG4gICAgICAgICAgICBXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgKX1gXG4gICAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID0gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgXCJDb21wb25lbnRcIjtcbiAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGBDb25uZWN0KCR7d3JhcHBlZENvbXBvbmVudE5hbWV9KWA7XG4gICAgY29uc3Qgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IHtcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIGRpc3BsYXlOYW1lLFxuICAgICAgd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50LFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wcyxcbiAgICAgIGFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIENvbm5lY3RGdW5jdGlvbihwcm9wcykge1xuICAgICAgY29uc3QgW3Byb3BzQ29udGV4dCwgcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgd3JhcHBlclByb3BzXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYyLCAuLi53cmFwcGVyUHJvcHMyIH0gPSBwcm9wcztcbiAgICAgICAgcmV0dXJuIFtwcm9wcy5jb250ZXh0LCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmMiwgd3JhcHBlclByb3BzMl07XG4gICAgICB9LCBbcHJvcHNdKTtcbiAgICAgIGNvbnN0IENvbnRleHRUb1VzZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBsZXQgUmVzdWx0Q29udGV4dCA9IENvbnRleHQ7XG4gICAgICAgIGlmIChwcm9wc0NvbnRleHQ/LkNvbnN1bWVyKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IC8qIEBfX1BVUkVfXyAqLyBpc0NvbnRleHRDb25zdW1lcihcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wc0NvbnRleHQuQ29uc3VtZXIsIG51bGwpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBcIllvdSBtdXN0IHBhc3MgYSB2YWxpZCBSZWFjdCBjb250ZXh0IGNvbnN1bWVyIGFzIGBwcm9wcy5jb250ZXh0YFwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZXN1bHRDb250ZXh0ID0gcHJvcHNDb250ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVzdWx0Q29udGV4dDtcbiAgICAgIH0sIFtwcm9wc0NvbnRleHQsIENvbnRleHRdKTtcbiAgICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dFRvVXNlKTtcbiAgICAgIGNvbnN0IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA9IEJvb2xlYW4ocHJvcHMuc3RvcmUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZ2V0U3RhdGUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgY29uc3QgZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPSBCb29sZWFuKGNvbnRleHRWYWx1ZSkgJiYgQm9vbGVhbihjb250ZXh0VmFsdWUuc3RvcmUpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhZGlkU3RvcmVDb21lRnJvbVByb3BzICYmICFkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENvdWxkIG5vdCBmaW5kIFwic3RvcmVcIiBpbiB0aGUgY29udGV4dCBvZiBcIiR7ZGlzcGxheU5hbWV9XCIuIEVpdGhlciB3cmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhIDxQcm92aWRlcj4sIG9yIHBhc3MgYSBjdXN0b20gUmVhY3QgY29udGV4dCBwcm92aWRlciB0byA8UHJvdmlkZXI+IGFuZCB0aGUgY29ycmVzcG9uZGluZyBSZWFjdCBjb250ZXh0IGNvbnN1bWVyIHRvICR7ZGlzcGxheU5hbWV9IGluIGNvbm5lY3Qgb3B0aW9ucy5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBzdG9yZSA9IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHByb3BzLnN0b3JlIDogY29udGV4dFZhbHVlLnN0b3JlO1xuICAgICAgY29uc3QgZ2V0U2VydmVyU3RhdGUgPSBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA/IGNvbnRleHRWYWx1ZS5nZXRTZXJ2ZXJTdGF0ZSA6IHN0b3JlLmdldFN0YXRlO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc1NlbGVjdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiBmaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KHN0b3JlLmRpc3BhdGNoLCBzZWxlY3RvckZhY3RvcnlPcHRpb25zKTtcbiAgICAgIH0sIFtzdG9yZV0pO1xuICAgICAgY29uc3QgW3N1YnNjcmlwdGlvbiwgbm90aWZ5TmVzdGVkU3Vic10gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpXG4gICAgICAgICAgcmV0dXJuIE5PX1NVQlNDUklQVElPTl9BUlJBWTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uMiA9IGNyZWF0ZVN1YnNjcmlwdGlvbihcbiAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyB2b2lkIDAgOiBjb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5vdGlmeU5lc3RlZFN1YnMyID0gc3Vic2NyaXB0aW9uMi5ub3RpZnlOZXN0ZWRTdWJzLmJpbmQoc3Vic2NyaXB0aW9uMik7XG4gICAgICAgIHJldHVybiBbc3Vic2NyaXB0aW9uMiwgbm90aWZ5TmVzdGVkU3ViczJdO1xuICAgICAgfSwgW3N0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZV0pO1xuICAgICAgY29uc3Qgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoZGlkU3RvcmVDb21lRnJvbVByb3BzKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmNvbnRleHRWYWx1ZSxcbiAgICAgICAgICBzdWJzY3JpcHRpb25cbiAgICAgICAgfTtcbiAgICAgIH0sIFtkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZSwgc3Vic2NyaXB0aW9uXSk7XG4gICAgICBjb25zdCBsYXN0Q2hpbGRQcm9wcyA9IFJlYWN0LnVzZVJlZih2b2lkIDApO1xuICAgICAgY29uc3QgbGFzdFdyYXBwZXJQcm9wcyA9IFJlYWN0LnVzZVJlZih3cmFwcGVyUHJvcHMpO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSA9IFJlYWN0LnVzZVJlZih2b2lkIDApO1xuICAgICAgY29uc3QgcmVuZGVySXNTY2hlZHVsZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgICAgY29uc3QgaXNNb3VudGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICAgIGNvbnN0IGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IgPSBSZWFjdC51c2VSZWYoXG4gICAgICAgIHZvaWQgMFxuICAgICAgKTtcbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFtdKTtcbiAgICAgIGNvbnN0IGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ICYmIHdyYXBwZXJQcm9wcyA9PT0gbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc1NlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHdyYXBwZXJQcm9wcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgIH0sIFtzdG9yZSwgd3JhcHBlclByb3BzXSk7XG4gICAgICBjb25zdCBzdWJzY3JpYmVGb3JSZWFjdCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmUgPSAocmVhY3RMaXN0ZW5lcikgPT4ge1xuICAgICAgICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN1YnNjcmliZVVwZGF0ZXMoXG4gICAgICAgICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNoaWxkUHJvcHNTZWxlY3RvcixcbiAgICAgICAgICAgIGxhc3RXcmFwcGVyUHJvcHMsXG4gICAgICAgICAgICBsYXN0Q2hpbGRQcm9wcyxcbiAgICAgICAgICAgIHJlbmRlcklzU2NoZWR1bGVkLFxuICAgICAgICAgICAgaXNNb3VudGVkLFxuICAgICAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSxcbiAgICAgICAgICAgIG5vdGlmeU5lc3RlZFN1YnMsXG4gICAgICAgICAgICByZWFjdExpc3RlbmVyXG4gICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZTtcbiAgICAgIH0sIFtzdWJzY3JpcHRpb25dKTtcbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhjYXB0dXJlV3JhcHBlclByb3BzLCBbXG4gICAgICAgIGxhc3RXcmFwcGVyUHJvcHMsXG4gICAgICAgIGxhc3RDaGlsZFByb3BzLFxuICAgICAgICByZW5kZXJJc1NjaGVkdWxlZCxcbiAgICAgICAgd3JhcHBlclByb3BzLFxuICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLFxuICAgICAgICBub3RpZnlOZXN0ZWRTdWJzXG4gICAgICBdKTtcbiAgICAgIGxldCBhY3R1YWxDaGlsZFByb3BzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYWN0dWFsQ2hpbGRQcm9wcyA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKFxuICAgICAgICAgIC8vIFRPRE8gV2UncmUgcGFzc2luZyB0aHJvdWdoIGEgYmlnIHdyYXBwZXIgdGhhdCBkb2VzIGEgYnVuY2ggb2YgZXh0cmEgc2lkZSBlZmZlY3RzIGJlc2lkZXMgc3Vic2NyaWJpbmdcbiAgICAgICAgICBzdWJzY3JpYmVGb3JSZWFjdCxcbiAgICAgICAgICAvLyBUT0RPIFRoaXMgaXMgaW5jcmVkaWJseSBoYWNreS4gV2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgdGhlIHN0b3JlIHVwZGF0ZSBhbmQgY2FsY3VsYXRlZCBuZXcgY2hpbGQgcHJvcHMsXG4gICAgICAgICAgLy8gVE9ETyBhbmQgd2UncmUganVzdCBwYXNzaW5nIHRoYXQgdGhyb3VnaCBzbyBpdCB0cmlnZ2VycyBhIHJlLXJlbmRlciBmb3IgdXMgcmF0aGVyIHRoYW4gcmVseWluZyBvbiBgdVNFU2AuXG4gICAgICAgICAgYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yLFxuICAgICAgICAgIGdldFNlcnZlclN0YXRlID8gKCkgPT4gY2hpbGRQcm9wc1NlbGVjdG9yKGdldFNlcnZlclN0YXRlKCksIHdyYXBwZXJQcm9wcykgOiBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3JcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAobGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50KSB7XG4gICAgICAgICAgO1xuICAgICAgICAgIGVyci5tZXNzYWdlICs9IGBcblRoZSBlcnJvciBtYXkgYmUgY29ycmVsYXRlZCB3aXRoIHRoaXMgcHJldmlvdXMgZXJyb3I6XG4ke2xhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudC5zdGFja31cblxuYDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gdm9pZCAwO1xuICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSB2b2lkIDA7XG4gICAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBhY3R1YWxDaGlsZFByb3BzO1xuICAgICAgfSk7XG4gICAgICBjb25zdCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBXcmFwcGVkQ29tcG9uZW50LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5hY3R1YWxDaGlsZFByb3BzLFxuICAgICAgICAgICAgICByZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9LCBbcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgV3JhcHBlZENvbXBvbmVudCwgYWN0dWFsQ2hpbGRQcm9wc10pO1xuICAgICAgY29uc3QgcmVuZGVyZWRDaGlsZCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHRUb1VzZS5Qcm92aWRlciwgeyB2YWx1ZTogb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZSB9LCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICB9LCBbQ29udGV4dFRvVXNlLCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQsIG92ZXJyaWRkZW5Db250ZXh0VmFsdWVdKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkO1xuICAgIH1cbiAgICBjb25zdCBfQ29ubmVjdCA9IFJlYWN0Lm1lbW8oQ29ubmVjdEZ1bmN0aW9uKTtcbiAgICBjb25zdCBDb25uZWN0ID0gX0Nvbm5lY3Q7XG4gICAgQ29ubmVjdC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICBDb25uZWN0LmRpc3BsYXlOYW1lID0gQ29ubmVjdEZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgaWYgKGZvcndhcmRSZWYpIHtcbiAgICAgIGNvbnN0IF9mb3J3YXJkZWQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAgICAgICBmdW5jdGlvbiBmb3J3YXJkQ29ubmVjdFJlZihwcm9wcywgcmVmKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbm5lY3QsIHsgLi4ucHJvcHMsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlZiB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGZvcndhcmRlZCA9IF9mb3J3YXJkZWQ7XG4gICAgICBmb3J3YXJkZWQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgIGZvcndhcmRlZC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaG9pc3ROb25SZWFjdFN0YXRpY3MoZm9yd2FyZGVkLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBob2lzdE5vblJlYWN0U3RhdGljcyhDb25uZWN0LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcbiAgcmV0dXJuIHdyYXBXaXRoQ29ubmVjdDtcbn1cbnZhciBjb25uZWN0X2RlZmF1bHQgPSBjb25uZWN0O1xuXG4vLyBzcmMvY29tcG9uZW50cy9Qcm92aWRlci50c3hcbmZ1bmN0aW9uIFByb3ZpZGVyKHtcbiAgc3RvcmUsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICBzZXJ2ZXJTdGF0ZSxcbiAgc3RhYmlsaXR5Q2hlY2sgPSBcIm9uY2VcIixcbiAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrID0gXCJvbmNlXCJcbn0pIHtcbiAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZTogc2VydmVyU3RhdGUgPyAoKSA9PiBzZXJ2ZXJTdGF0ZSA6IHZvaWQgMCxcbiAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrXG4gICAgfTtcbiAgfSwgW3N0b3JlLCBzZXJ2ZXJTdGF0ZSwgc3RhYmlsaXR5Q2hlY2ssIGlkZW50aXR5RnVuY3Rpb25DaGVja10pO1xuICBjb25zdCBwcmV2aW91c1N0YXRlID0gUmVhY3QudXNlTWVtbygoKSA9PiBzdG9yZS5nZXRTdGF0ZSgpLCBbc3RvcmVdKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBzdWJzY3JpcHRpb24gfSA9IGNvbnRleHRWYWx1ZTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgICBpZiAocHJldmlvdXNTdGF0ZSAhPT0gc3RvcmUuZ2V0U3RhdGUoKSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSB2b2lkIDA7XG4gICAgfTtcbiAgfSwgW2NvbnRleHRWYWx1ZSwgcHJldmlvdXNTdGF0ZV0pO1xuICBjb25zdCBDb250ZXh0ID0gY29udGV4dCB8fCBSZWFjdFJlZHV4Q29udGV4dDtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbnRleHRWYWx1ZSB9LCBjaGlsZHJlbik7XG59XG52YXIgUHJvdmlkZXJfZGVmYXVsdCA9IFByb3ZpZGVyO1xuXG4vLyBzcmMvaG9va3MvdXNlU3RvcmUudHNcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlUmVkdXhDb250ZXh0MiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlUmVkdXhDb250ZXh0IDogKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQpXG4gICk7XG4gIGNvbnN0IHVzZVN0b3JlMiA9ICgpID0+IHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB1c2VSZWR1eENvbnRleHQyKCk7XG4gICAgcmV0dXJuIHN0b3JlO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZVN0b3JlMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlU3RvcmUyXG4gIH0pO1xuICByZXR1cm4gdXNlU3RvcmUyO1xufVxudmFyIHVzZVN0b3JlID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVN0b3JlSG9vaygpO1xuXG4vLyBzcmMvaG9va3MvdXNlRGlzcGF0Y2gudHNcbmZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlU3RvcmUyID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VTdG9yZSA6IGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0KTtcbiAgY29uc3QgdXNlRGlzcGF0Y2gyID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUyKCk7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZURpc3BhdGNoMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlRGlzcGF0Y2gyXG4gIH0pO1xuICByZXR1cm4gdXNlRGlzcGF0Y2gyO1xufVxudmFyIHVzZURpc3BhdGNoID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZURpc3BhdGNoSG9vaygpO1xuXG4vLyBzcmMvZXhwb3J0cy50c1xudmFyIGJhdGNoID0gZGVmYXVsdE5vb3BCYXRjaDtcblxuLy8gc3JjL2luZGV4LnRzXG5pbml0aWFsaXplVXNlU2VsZWN0b3IodXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IyKTtcbmluaXRpYWxpemVDb25uZWN0KFJlYWN0Mi51c2VTeW5jRXh0ZXJuYWxTdG9yZSk7XG5leHBvcnQge1xuICBQcm92aWRlcl9kZWZhdWx0IGFzIFByb3ZpZGVyLFxuICBSZWFjdFJlZHV4Q29udGV4dCxcbiAgYmF0Y2gsXG4gIGNvbm5lY3RfZGVmYXVsdCBhcyBjb25uZWN0LFxuICBjcmVhdGVEaXNwYXRjaEhvb2ssXG4gIGNyZWF0ZVNlbGVjdG9ySG9vayxcbiAgY3JlYXRlU3RvcmVIb29rLFxuICBzaGFsbG93RXF1YWwsXG4gIHVzZURpc3BhdGNoLFxuICB1c2VTZWxlY3RvcixcbiAgdXNlU3RvcmVcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1yZWR1eC5tanMubWFwIiwiXCJ1c2UgY2xpZW50XCI7XG5mdW5jdGlvbiBNdCh0KXtpZighdHx8dHlwZW9mIGRvY3VtZW50PT1cInVuZGVmaW5lZFwiKXJldHVybjtsZXQgbz1kb2N1bWVudC5oZWFkfHxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0sZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7ZS50eXBlPVwidGV4dC9jc3NcIixvLmZpcnN0Q2hpbGQ/by5pbnNlcnRCZWZvcmUoZSxvLmZpcnN0Q2hpbGQpOm8uYXBwZW5kQ2hpbGQoZSksZS5zdHlsZVNoZWV0P2Uuc3R5bGVTaGVldC5jc3NUZXh0PXQ6ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KSl9TXQoYDpyb290ey0tdG9hc3RpZnktY29sb3ItbGlnaHQ6ICNmZmY7LS10b2FzdGlmeS1jb2xvci1kYXJrOiAjMTIxMjEyOy0tdG9hc3RpZnktY29sb3ItaW5mbzogIzM0OThkYjstLXRvYXN0aWZ5LWNvbG9yLXN1Y2Nlc3M6ICMwN2JjMGM7LS10b2FzdGlmeS1jb2xvci13YXJuaW5nOiAjZjFjNDBmOy0tdG9hc3RpZnktY29sb3ItZXJyb3I6IGhzbCg2LCA3OCUsIDU3JSk7LS10b2FzdGlmeS1jb2xvci10cmFuc3BhcmVudDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNyk7LS10b2FzdGlmeS1pY29uLWNvbG9yLWluZm86IHZhcigtLXRvYXN0aWZ5LWNvbG9yLWluZm8pOy0tdG9hc3RpZnktaWNvbi1jb2xvci1zdWNjZXNzOiB2YXIoLS10b2FzdGlmeS1jb2xvci1zdWNjZXNzKTstLXRvYXN0aWZ5LWljb24tY29sb3Itd2FybmluZzogdmFyKC0tdG9hc3RpZnktY29sb3Itd2FybmluZyk7LS10b2FzdGlmeS1pY29uLWNvbG9yLWVycm9yOiB2YXIoLS10b2FzdGlmeS1jb2xvci1lcnJvcik7LS10b2FzdGlmeS1jb250YWluZXItd2lkdGg6IGZpdC1jb250ZW50Oy0tdG9hc3RpZnktdG9hc3Qtd2lkdGg6IDMyMHB4Oy0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0OiAxNnB4Oy0tdG9hc3RpZnktdG9hc3QtdG9wOiBtYXgodmFyKC0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0KSwgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTstLXRvYXN0aWZ5LXRvYXN0LXJpZ2h0OiBtYXgodmFyKC0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0KSwgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpOy0tdG9hc3RpZnktdG9hc3QtbGVmdDogbWF4KHZhcigtLXRvYXN0aWZ5LXRvYXN0LW9mZnNldCksIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkpOy0tdG9hc3RpZnktdG9hc3QtYm90dG9tOiBtYXgodmFyKC0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0KSwgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTstLXRvYXN0aWZ5LXRvYXN0LWJhY2tncm91bmQ6ICNmZmY7LS10b2FzdGlmeS10b2FzdC1wYWRkaW5nOiAxNHB4Oy0tdG9hc3RpZnktdG9hc3QtbWluLWhlaWdodDogNjRweDstLXRvYXN0aWZ5LXRvYXN0LW1heC1oZWlnaHQ6IDgwMHB4Oy0tdG9hc3RpZnktdG9hc3QtYmQtcmFkaXVzOiA2cHg7LS10b2FzdGlmeS10b2FzdC1zaGFkb3c6IDBweCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIC4xKTstLXRvYXN0aWZ5LWZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOy0tdG9hc3RpZnktei1pbmRleDogOTk5OTstLXRvYXN0aWZ5LXRleHQtY29sb3ItbGlnaHQ6ICM3NTc1NzU7LS10b2FzdGlmeS10ZXh0LWNvbG9yLWRhcms6ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLWluZm86ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLXN1Y2Nlc3M6ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLXdhcm5pbmc6ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLWVycm9yOiAjZmZmOy0tdG9hc3RpZnktc3Bpbm5lci1jb2xvcjogIzYxNjE2MTstLXRvYXN0aWZ5LXNwaW5uZXItY29sb3ItZW1wdHktYXJlYTogI2UwZTBlMDstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWxpZ2h0OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0Y2Q5NjQsICM1YWM4ZmEsICMwMDdhZmYsICMzNGFhZGMsICM1ODU2ZDYsICNmZjJkNTUpOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtZGFyazogI2JiODZmYzstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWluZm86IHZhcigtLXRvYXN0aWZ5LWNvbG9yLWluZm8pOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3Mtc3VjY2VzczogdmFyKC0tdG9hc3RpZnktY29sb3Itc3VjY2Vzcyk7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy13YXJuaW5nOiB2YXIoLS10b2FzdGlmeS1jb2xvci13YXJuaW5nKTstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWVycm9yOiB2YXIoLS10b2FzdGlmeS1jb2xvci1lcnJvcik7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1iZ286IC4yfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVye3otaW5kZXg6dmFyKC0tdG9hc3RpZnktei1pbmRleCk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLHZhcigtLXRvYXN0aWZ5LXotaW5kZXgpKTtwb3NpdGlvbjpmaXhlZDt3aWR0aDp2YXIoLS10b2FzdGlmeS1jb250YWluZXItd2lkdGgpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjojZmZmO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1sZWZ0e3RvcDp2YXIoLS10b2FzdGlmeS10b2FzdC10b3ApO2xlZnQ6dmFyKC0tdG9hc3RpZnktdG9hc3QtbGVmdCl9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1jZW50ZXJ7dG9wOnZhcigtLXRvYXN0aWZ5LXRvYXN0LXRvcCk7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKTthbGlnbi1pdGVtczpjZW50ZXJ9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1yaWdodHt0b3A6dmFyKC0tdG9hc3RpZnktdG9hc3QtdG9wKTtyaWdodDp2YXIoLS10b2FzdGlmeS10b2FzdC1yaWdodCk7YWxpZ24taXRlbXM6ZW5kfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tbGVmdHtib3R0b206dmFyKC0tdG9hc3RpZnktdG9hc3QtYm90dG9tKTtsZWZ0OnZhcigtLXRvYXN0aWZ5LXRvYXN0LWxlZnQpfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tY2VudGVye2JvdHRvbTp2YXIoLS10b2FzdGlmeS10b2FzdC1ib3R0b20pO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7YWxpZ24taXRlbXM6Y2VudGVyfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tcmlnaHR7Ym90dG9tOnZhcigtLXRvYXN0aWZ5LXRvYXN0LWJvdHRvbSk7cmlnaHQ6dmFyKC0tdG9hc3RpZnktdG9hc3QtcmlnaHQpO2FsaWduLWl0ZW1zOmVuZH0uVG9hc3RpZnlfX3RvYXN0ey0teTogMDtwb3NpdGlvbjpyZWxhdGl2ZTt0b3VjaC1hY3Rpb246bm9uZTt3aWR0aDp2YXIoLS10b2FzdGlmeS10b2FzdC13aWR0aCk7bWluLWhlaWdodDp2YXIoLS10b2FzdGlmeS10b2FzdC1taW4taGVpZ2h0KTtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luLWJvdHRvbToxcmVtO3BhZGRpbmc6dmFyKC0tdG9hc3RpZnktdG9hc3QtcGFkZGluZyk7Ym9yZGVyLXJhZGl1czp2YXIoLS10b2FzdGlmeS10b2FzdC1iZC1yYWRpdXMpO2JveC1zaGFkb3c6dmFyKC0tdG9hc3RpZnktdG9hc3Qtc2hhZG93KTttYXgtaGVpZ2h0OnZhcigtLXRvYXN0aWZ5LXRvYXN0LW1heC1oZWlnaHQpO2ZvbnQtZmFtaWx5OnZhcigtLXRvYXN0aWZ5LWZvbnQtZmFtaWx5KTt6LWluZGV4OjA7ZGlzcGxheTpmbGV4O2ZsZXg6MSBhdXRvO2FsaWduLWl0ZW1zOmNlbnRlcjt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXJ7d2lkdGg6MTAwdnc7bGVmdDplbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO21hcmdpbjowfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS10b3AtbGVmdCwuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLWNlbnRlciwuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLXJpZ2h0e3RvcDplbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tYm90dG9tLWxlZnQsLlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1jZW50ZXIsLlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1yaWdodHtib3R0b206ZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXJ0bHtyaWdodDplbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtsZWZ0OmluaXRpYWx9LlRvYXN0aWZ5X190b2FzdHstLXRvYXN0aWZ5LXRvYXN0LXdpZHRoOiAxMDAlO21hcmdpbi1ib3R0b206MDtib3JkZXItcmFkaXVzOjB9fS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyW2RhdGEtc3RhY2tlZD10cnVlXXt3aWR0aDp2YXIoLS10b2FzdGlmeS10b2FzdC13aWR0aCl9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApIHNjYWxlKHZhcigtLXMpKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3N9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLWNvbGxhcHNlZF0gLlRvYXN0aWZ5X190b2FzdC1ib2R5LC5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1jb2xsYXBzZWRdIC5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9ue3RyYW5zaXRpb246b3BhY2l0eSAuMXN9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLWNvbGxhcHNlZD1mYWxzZV17b3ZlcmZsb3c6dmlzaWJsZX0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtY29sbGFwc2VkPXRydWVdOm5vdCg6bGFzdC1jaGlsZCk+KntvcGFjaXR5OjB9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDphZnRlcntjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OmNhbGModmFyKC0tZykgKiAxcHgpO2JvdHRvbToxMDAlfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1wb3M9dG9wXXt0b3A6MH0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtcG9zPWJvdF17Ym90dG9tOjB9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLXBvcz1ib3RdLlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDpiZWZvcmV7dHJhbnNmb3JtLW9yaWdpbjp0b3B9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLXBvcz10b3BdLlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDpiZWZvcmV7dHJhbnNmb3JtLW9yaWdpbjpib3R0b219LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2hlaWdodDoxMDAlO3RyYW5zZm9ybTpzY2FsZVkoMyk7ei1pbmRleDotMX0uVG9hc3RpZnlfX3RvYXN0LS1ydGx7ZGlyZWN0aW9uOnJ0bH0uVG9hc3RpZnlfX3RvYXN0LS1jbG9zZS1vbi1jbGlja3tjdXJzb3I6cG9pbnRlcn0uVG9hc3RpZnlfX3RvYXN0LWljb257bWFyZ2luLWlubGluZS1lbmQ6MTBweDt3aWR0aDoyMnB4O2ZsZXgtc2hyaW5rOjA7ZGlzcGxheTpmbGV4fS5Ub2FzdGlmeS0tYW5pbWF0ZXthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOi41c30uVG9hc3RpZnktLWFuaW1hdGUtaWNvbnthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOi4zc30uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1kYXJre2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItZGFyayk7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci1kYXJrKX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1saWdodCwuVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0tZGVmYXVsdHtiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLWxpZ2h0KTtjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLWxpZ2h0KX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0taW5mb3tjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLWluZm8pO2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItaW5mbyl9LlRvYXN0aWZ5X190b2FzdC10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fdG9hc3QtLXN1Y2Nlc3N7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci1zdWNjZXNzKTtiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXN1Y2Nlc3MpfS5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3RvYXN0LS13YXJuaW5ne2NvbG9yOnZhcigtLXRvYXN0aWZ5LXRleHQtY29sb3Itd2FybmluZyk7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci13YXJuaW5nKX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0tZXJyb3J7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci1lcnJvcik7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1lcnJvcil9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWxpZ2h0e2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtbGlnaHQpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1kYXJre2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtZGFyayl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWluZm97YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1pbmZvKX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tc3VjY2Vzc3tiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLXN1Y2Nlc3MpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13YXJuaW5ne2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3Mtd2FybmluZyl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWVycm9ye2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtZXJyb3IpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWluZm8sLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tc3VjY2VzcywuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13YXJuaW5nLC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWVycm9ye2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItdHJhbnNwYXJlbnQpfS5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9ue2NvbG9yOiNmZmY7cG9zaXRpb246YWJzb2x1dGU7dG9wOjZweDtyaWdodDo2cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtvdXRsaW5lOm5vbmU7Ym9yZGVyOm5vbmU7cGFkZGluZzowO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6Ljc7dHJhbnNpdGlvbjouM3MgZWFzZTt6LWluZGV4OjF9LlRvYXN0aWZ5X190b2FzdC0tcnRsIC5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9ue2xlZnQ6NnB4O3JpZ2h0OnVuc2V0fS5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uLS1saWdodHtjb2xvcjojMDAwO29wYWNpdHk6LjN9LlRvYXN0aWZ5X19jbG9zZS1idXR0b24+c3Zne2ZpbGw6Y3VycmVudENvbG9yO2hlaWdodDoxNnB4O3dpZHRoOjE0cHh9LlRvYXN0aWZ5X19jbG9zZS1idXR0b246aG92ZXIsLlRvYXN0aWZ5X19jbG9zZS1idXR0b246Zm9jdXN7b3BhY2l0eToxfUBrZXlmcmFtZXMgVG9hc3RpZnlfX3RyYWNrUHJvZ3Jlc3N7MCV7dHJhbnNmb3JtOnNjYWxlWCgxKX10b3t0cmFuc2Zvcm06c2NhbGVYKDApfX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjE7b3BhY2l0eTouNzt0cmFuc2Zvcm0tb3JpZ2luOmxlZnR9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWFuaW1hdGVke2FuaW1hdGlvbjpUb2FzdGlmeV9fdHJhY2tQcm9ncmVzcyBsaW5lYXIgMSBmb3J3YXJkc30uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tY29udHJvbGxlZHt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnN9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXJ0bHtyaWdodDowO2xlZnQ6aW5pdGlhbDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6aW5pdGlhbH0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0td3Jwe3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OmhpZGRlbjtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6NXB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tdG9hc3RpZnktdG9hc3QtYmQtcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS10b2FzdGlmeS10b2FzdC1iZC1yYWRpdXMpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13cnBbZGF0YS1oaWRkZW49dHJ1ZV17b3BhY2l0eTowfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1iZ3tvcGFjaXR5OnZhcigtLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWJnbyk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uVG9hc3RpZnlfX3NwaW5uZXJ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjJweCBzb2xpZDtib3JkZXItcmFkaXVzOjEwMCU7Ym9yZGVyLWNvbG9yOnZhcigtLXRvYXN0aWZ5LXNwaW5uZXItY29sb3ItZW1wdHktYXJlYSk7Ym9yZGVyLXJpZ2h0LWNvbG9yOnZhcigtLXRvYXN0aWZ5LXNwaW5uZXItY29sb3IpO2FuaW1hdGlvbjpUb2FzdGlmeV9fc3BpbiAuNjVzIGxpbmVhciBpbmZpbml0ZX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VJblJpZ2h0ezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMDAwcHgsMCwwKX02MCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjVweCwwLDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTVweCwwLDApfXRve3RyYW5zZm9ybTpub25lfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXRSaWdodHsyMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjBweCx2YXIoLS15KSwwKX10b3tvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlSW5MZWZ0ezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMzAwMHB4LDAsMCl9NjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjVweCwwLDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDVweCwwLDApfXRve3RyYW5zZm9ybTpub25lfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXRMZWZ0ezIwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwcHgsdmFyKC0teSksMCl9dG97b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VJblVwezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDMwMDBweCwwKX02MCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMHB4LDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMHB4LDApfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNXB4LDApfXRve3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXRVcHsyMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYyh2YXIoLS15KSAtIDEwcHgpLDApfTQwJSw0NSV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLGNhbGModmFyKC0teSkgKyAyMHB4KSwwKX10b3tvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlSW5Eb3duezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0zMDAwcHgsMCl9NjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyNXB4LDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApfXRve3RyYW5zZm9ybTpub25lfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXREb3duezIwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKHZhcigtLXkpIC0gMTBweCksMCl9NDAlLDQ1JXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYyh2YXIoLS15KSArIDIwcHgpLDApfXRve29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMDAwcHgsMCl9fS5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS10b3AtbGVmdCwuVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tYm90dG9tLWxlZnR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZUluTGVmdH0uVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tdG9wLXJpZ2h0LC5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS1ib3R0b20tcmlnaHR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZUluUmlnaHR9LlRvYXN0aWZ5X19ib3VuY2UtZW50ZXItLXRvcC1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZUluRG93bn0uVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tYm90dG9tLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlSW5VcH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS10b3AtbGVmdCwuVG9hc3RpZnlfX2JvdW5jZS1leGl0LS1ib3R0b20tbGVmdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlT3V0TGVmdH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS10b3AtcmlnaHQsLlRvYXN0aWZ5X19ib3VuY2UtZXhpdC0tYm90dG9tLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VPdXRSaWdodH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS10b3AtY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VPdXRVcH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS1ib3R0b20tY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VPdXREb3dufUBrZXlmcmFtZXMgVG9hc3RpZnlfX3pvb21JbnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfTUwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3pvb21PdXR7MCV7b3BhY2l0eToxfTUwJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCkgc2NhbGUzZCguMywuMywuMyl9dG97b3BhY2l0eTowfX0uVG9hc3RpZnlfX3pvb20tZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3pvb21Jbn0uVG9hc3RpZnlfX3pvb20tZXhpdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fem9vbU91dH1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19mbGlwSW57MCV7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47b3BhY2l0eTowfTQwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTIwZGVnKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59NjAle3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7b3BhY2l0eToxfTgwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTVkZWcpfXRve3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2ZsaXBPdXR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCkgcGVyc3BlY3RpdmUoNDAwcHgpfTMwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKSBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpO29wYWNpdHk6MX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKSBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7b3BhY2l0eTowfX0uVG9hc3RpZnlfX2ZsaXAtZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2ZsaXBJbn0uVG9hc3RpZnlfX2ZsaXAtZXhpdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fZmxpcE91dH1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZUluUmlnaHR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDExMCUsMCwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlSW5MZWZ0ezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTEwJSwwLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVJblVwezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDExMCUsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZUluRG93bnswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTEwJSwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlT3V0UmlnaHR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDExMCUsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlT3V0TGVmdHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTExMCUsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlT3V0RG93bnswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1MDBweCwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVPdXRVcHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNTAwcHgsMCl9fS5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLXRvcC1sZWZ0LC5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLWJvdHRvbS1sZWZ0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZUluTGVmdH0uVG9hc3RpZnlfX3NsaWRlLWVudGVyLS10b3AtcmlnaHQsLlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tYm90dG9tLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZUluUmlnaHR9LlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tdG9wLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVJbkRvd259LlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tYm90dG9tLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVJblVwfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tdG9wLWxlZnQsLlRvYXN0aWZ5X19zbGlkZS1leGl0LS1ib3R0b20tbGVmdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVPdXRMZWZ0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tZHVyYXRpb246LjNzfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tdG9wLXJpZ2h0LC5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tYm90dG9tLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZU91dFJpZ2h0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tZHVyYXRpb246LjNzfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tdG9wLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVPdXRVcDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLWR1cmF0aW9uOi4zc30uVG9hc3RpZnlfX3NsaWRlLWV4aXQtLWJvdHRvbS1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlT3V0RG93bjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLWR1cmF0aW9uOi4zc31Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zcGluezAle3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1cbmApO2ltcG9ydHtpc1ZhbGlkRWxlbWVudCBhcyAkdH1mcm9tXCJyZWFjdFwiO3ZhciBMPXQ9PnR5cGVvZiB0PT1cIm51bWJlclwiJiYhaXNOYU4odCksTj10PT50eXBlb2YgdD09XCJzdHJpbmdcIixQPXQ9PnR5cGVvZiB0PT1cImZ1bmN0aW9uXCIsbXQ9dD0+Tih0KXx8TCh0KSxCPXQ9Pk4odCl8fFAodCk/dDpudWxsLHB0PSh0LG8pPT50PT09ITF8fEwodCkmJnQ+MD90Om8sej10PT4kdCh0KXx8Tih0KXx8UCh0KXx8TCh0KTtpbXBvcnQgdXQse3VzZUVmZmVjdCBhcyBSdCx1c2VMYXlvdXRFZmZlY3QgYXMgQnQsdXNlUmVmIGFzIHp0fWZyb21cInJlYWN0XCI7ZnVuY3Rpb24gWih0LG8sZT0zMDApe2xldHtzY3JvbGxIZWlnaHQ6cixzdHlsZTpzfT10O3JlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e3MubWluSGVpZ2h0PVwiaW5pdGlhbFwiLHMuaGVpZ2h0PXIrXCJweFwiLHMudHJhbnNpdGlvbj1gYWxsICR7ZX1tc2AscmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57cy5oZWlnaHQ9XCIwXCIscy5wYWRkaW5nPVwiMFwiLHMubWFyZ2luPVwiMFwiLHNldFRpbWVvdXQobyxlKX0pfSl9ZnVuY3Rpb24gJCh7ZW50ZXI6dCxleGl0Om8sYXBwZW5kUG9zaXRpb246ZT0hMSxjb2xsYXBzZTpyPSEwLGNvbGxhcHNlRHVyYXRpb246cz0zMDB9KXtyZXR1cm4gZnVuY3Rpb24oe2NoaWxkcmVuOmEscG9zaXRpb246ZCxwcmV2ZW50RXhpdFRyYW5zaXRpb246Yyxkb25lOlQsbm9kZVJlZjpnLGlzSW46dixwbGF5VG9hc3Q6eH0pe2xldCBDPWU/YCR7dH0tLSR7ZH1gOnQsUz1lP2Ake299LS0ke2R9YDpvLEU9enQoMCk7cmV0dXJuIEJ0KCgpPT57bGV0IGY9Zy5jdXJyZW50LHA9Qy5zcGxpdChcIiBcIiksYj1uPT57bi50YXJnZXQ9PT1nLmN1cnJlbnQmJih4KCksZi5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsYiksZi5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uY2FuY2VsXCIsYiksRS5jdXJyZW50PT09MCYmbi50eXBlIT09XCJhbmltYXRpb25jYW5jZWxcIiYmZi5jbGFzc0xpc3QucmVtb3ZlKC4uLnApKX07KCgpPT57Zi5jbGFzc0xpc3QuYWRkKC4uLnApLGYuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLGIpLGYuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmNhbmNlbFwiLGIpfSkoKX0sW10pLFJ0KCgpPT57bGV0IGY9Zy5jdXJyZW50LHA9KCk9PntmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIixwKSxyP1ooZixULHMpOlQoKX07dnx8KGM/cCgpOigoKT0+e0UuY3VycmVudD0xLGYuY2xhc3NOYW1lKz1gICR7U31gLGYuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLHApfSkoKSl9LFt2XSksdXQuY3JlYXRlRWxlbWVudCh1dC5GcmFnbWVudCxudWxsLGEpfX1pbXBvcnR7Y2xvbmVFbGVtZW50IGFzIEZ0LGlzVmFsaWRFbGVtZW50IGFzIFV0fWZyb21cInJlYWN0XCI7ZnVuY3Rpb24gSih0LG8pe3JldHVybntjb250ZW50OnR0KHQuY29udGVudCx0LnByb3BzKSxjb250YWluZXJJZDp0LnByb3BzLmNvbnRhaW5lcklkLGlkOnQucHJvcHMudG9hc3RJZCx0aGVtZTp0LnByb3BzLnRoZW1lLHR5cGU6dC5wcm9wcy50eXBlLGRhdGE6dC5wcm9wcy5kYXRhfHx7fSxpc0xvYWRpbmc6dC5wcm9wcy5pc0xvYWRpbmcsaWNvbjp0LnByb3BzLmljb24scmVhc29uOnQucmVtb3ZhbFJlYXNvbixzdGF0dXM6b319ZnVuY3Rpb24gdHQodCxvLGU9ITEpe3JldHVybiBVdCh0KSYmIU4odC50eXBlKT9GdCh0LHtjbG9zZVRvYXN0Om8uY2xvc2VUb2FzdCx0b2FzdFByb3BzOm8sZGF0YTpvLmRhdGEsaXNQYXVzZWQ6ZX0pOlAodCk/dCh7Y2xvc2VUb2FzdDpvLmNsb3NlVG9hc3QsdG9hc3RQcm9wczpvLGRhdGE6by5kYXRhLGlzUGF1c2VkOmV9KTp0fWltcG9ydCBvdCBmcm9tXCJyZWFjdFwiO2Z1bmN0aW9uIHl0KHtjbG9zZVRvYXN0OnQsdGhlbWU6byxhcmlhTGFiZWw6ZT1cImNsb3NlXCJ9KXtyZXR1cm4gb3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLHtjbGFzc05hbWU6YFRvYXN0aWZ5X19jbG9zZS1idXR0b24gVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbi0tJHtvfWAsdHlwZTpcImJ1dHRvblwiLG9uQ2xpY2s6cj0+e3Iuc3RvcFByb3BhZ2F0aW9uKCksdCghMCl9LFwiYXJpYS1sYWJlbFwiOmV9LG90LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLHZpZXdCb3g6XCIwIDAgMTQgMTZcIn0sb3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZmlsbFJ1bGU6XCJldmVub2RkXCIsZDpcIk03LjcxIDguMjNsMy43NSAzLjc1LTEuNDggMS40OC0zLjc1LTMuNzUtMy43NSAzLjc1TDEgMTEuOThsMy43NS0zLjc1TDEgNC40OCAyLjQ4IDNsMy43NSAzLjc1TDkuOTggM2wxLjQ4IDEuNDgtMy43NSAzLjc1elwifSkpKX1pbXBvcnQgZXQgZnJvbVwicmVhY3RcIjtpbXBvcnQgVHQgZnJvbVwiY2xzeFwiO2Z1bmN0aW9uIGd0KHtkZWxheTp0LGlzUnVubmluZzpvLGNsb3NlVG9hc3Q6ZSx0eXBlOnI9XCJkZWZhdWx0XCIsaGlkZTpzLGNsYXNzTmFtZTpsLGNvbnRyb2xsZWRQcm9ncmVzczphLHByb2dyZXNzOmQscnRsOmMsaXNJbjpULHRoZW1lOmd9KXtsZXQgdj1zfHxhJiZkPT09MCx4PXthbmltYXRpb25EdXJhdGlvbjpgJHt0fW1zYCxhbmltYXRpb25QbGF5U3RhdGU6bz9cInJ1bm5pbmdcIjpcInBhdXNlZFwifTthJiYoeC50cmFuc2Zvcm09YHNjYWxlWCgke2R9KWApO2xldCBDPVR0KFwiVG9hc3RpZnlfX3Byb2dyZXNzLWJhclwiLGE/XCJUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1jb250cm9sbGVkXCI6XCJUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1hbmltYXRlZFwiLGBUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS0ke2d9YCxgVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tJHtyfWAse1tcIlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXJ0bFwiXTpjfSksUz1QKGwpP2woe3J0bDpjLHR5cGU6cixkZWZhdWx0Q2xhc3NOYW1lOkN9KTpUdChDLGwpLEU9e1thJiZkPj0xP1wib25UcmFuc2l0aW9uRW5kXCI6XCJvbkFuaW1hdGlvbkVuZFwiXTphJiZkPDE/bnVsbDooKT0+e1QmJmUoKX19O3JldHVybiBldC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXdycFwiLFwiZGF0YS1oaWRkZW5cIjp2fSxldC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpgVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tYmcgVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tJHtnfSBUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS0ke3J9YH0pLGV0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7cm9sZTpcInByb2dyZXNzYmFyXCIsXCJhcmlhLWhpZGRlblwiOnY/XCJ0cnVlXCI6XCJmYWxzZVwiLFwiYXJpYS1sYWJlbFwiOlwibm90aWZpY2F0aW9uIHRpbWVyXCIsY2xhc3NOYW1lOlMsc3R5bGU6eCwuLi5FfSkpfWltcG9ydCBEdCBmcm9tXCJjbHN4XCI7aW1wb3J0IGN0LHt1c2VFZmZlY3QgYXMgeW8sdXNlUmVmIGFzIFRvLHVzZVN0YXRlIGFzIGdvfWZyb21cInJlYWN0XCI7dmFyIFh0PTEsYXQ9KCk9PmAke1h0Kyt9YDtmdW5jdGlvbiBfdCh0LG8sZSl7bGV0IHI9MSxzPTAsbD1bXSxhPVtdLGQ9byxjPW5ldyBNYXAsVD1uZXcgU2V0LGc9aT0+KFQuYWRkKGkpLCgpPT5ULmRlbGV0ZShpKSksdj0oKT0+e2E9QXJyYXkuZnJvbShjLnZhbHVlcygpKSxULmZvckVhY2goaT0+aSgpKX0seD0oe2NvbnRhaW5lcklkOmksdG9hc3RJZDpuLHVwZGF0ZUlkOnV9KT0+e2xldCBoPWk/aSE9PXQ6dCE9PTEsbT1jLmhhcyhuKSYmdT09bnVsbDtyZXR1cm4gaHx8bX0sQz0oaSxuKT0+e2MuZm9yRWFjaCh1PT57dmFyIGg7KG49PW51bGx8fG49PT11LnByb3BzLnRvYXN0SWQpJiYoKGg9dS50b2dnbGUpPT1udWxsfHxoLmNhbGwodSxpKSl9KX0sUz1pPT57dmFyIG4sdTsodT0obj1pLnByb3BzKT09bnVsbD92b2lkIDA6bi5vbkNsb3NlKT09bnVsbHx8dS5jYWxsKG4saS5yZW1vdmFsUmVhc29uKSxpLmlzQWN0aXZlPSExfSxFPWk9PntpZihpPT1udWxsKWMuZm9yRWFjaChTKTtlbHNle2xldCBuPWMuZ2V0KGkpO24mJlMobil9digpfSxmPSgpPT57cy09bC5sZW5ndGgsbD1bXX0scD1pPT57dmFyIG0sXztsZXR7dG9hc3RJZDpuLHVwZGF0ZUlkOnV9PWkucHJvcHMsaD11PT1udWxsO2kuc3RhbGVJZCYmYy5kZWxldGUoaS5zdGFsZUlkKSxpLmlzQWN0aXZlPSEwLGMuc2V0KG4saSksdigpLGUoSihpLGg/XCJhZGRlZFwiOlwidXBkYXRlZFwiKSksaCYmKChfPShtPWkucHJvcHMpLm9uT3Blbik9PW51bGx8fF8uY2FsbChtKSl9O3JldHVybntpZDp0LHByb3BzOmQsb2JzZXJ2ZTpnLHRvZ2dsZTpDLHJlbW92ZVRvYXN0OkUsdG9hc3RzOmMsY2xlYXJRdWV1ZTpmLGJ1aWxkVG9hc3Q6KGksbik9PntpZih4KG4pKXJldHVybjtsZXR7dG9hc3RJZDp1LHVwZGF0ZUlkOmgsZGF0YTptLHN0YWxlSWQ6XyxkZWxheTprfT1uLE09aD09bnVsbDtNJiZzKys7bGV0IEE9ey4uLmQsc3R5bGU6ZC50b2FzdFN0eWxlLGtleTpyKyssLi4uT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKG4pLmZpbHRlcigoW0QsWV0pPT5ZIT1udWxsKSksdG9hc3RJZDp1LHVwZGF0ZUlkOmgsZGF0YTptLGlzSW46ITEsY2xhc3NOYW1lOkIobi5jbGFzc05hbWV8fGQudG9hc3RDbGFzc05hbWUpLHByb2dyZXNzQ2xhc3NOYW1lOkIobi5wcm9ncmVzc0NsYXNzTmFtZXx8ZC5wcm9ncmVzc0NsYXNzTmFtZSksYXV0b0Nsb3NlOm4uaXNMb2FkaW5nPyExOnB0KG4uYXV0b0Nsb3NlLGQuYXV0b0Nsb3NlKSxjbG9zZVRvYXN0KEQpe2MuZ2V0KHUpLnJlbW92YWxSZWFzb249RCxFKHUpfSxkZWxldGVUb2FzdCgpe2xldCBEPWMuZ2V0KHUpO2lmKEQhPW51bGwpe2lmKGUoSihELFwicmVtb3ZlZFwiKSksYy5kZWxldGUodSkscy0tLHM8MCYmKHM9MCksbC5sZW5ndGg+MCl7cChsLnNoaWZ0KCkpO3JldHVybn12KCl9fX07QS5jbG9zZUJ1dHRvbj1kLmNsb3NlQnV0dG9uLG4uY2xvc2VCdXR0b249PT0hMXx8eihuLmNsb3NlQnV0dG9uKT9BLmNsb3NlQnV0dG9uPW4uY2xvc2VCdXR0b246bi5jbG9zZUJ1dHRvbj09PSEwJiYoQS5jbG9zZUJ1dHRvbj16KGQuY2xvc2VCdXR0b24pP2QuY2xvc2VCdXR0b246ITApO2xldCBSPXtjb250ZW50OmkscHJvcHM6QSxzdGFsZUlkOl99O2QubGltaXQmJmQubGltaXQ+MCYmcz5kLmxpbWl0JiZNP2wucHVzaChSKTpMKGspP3NldFRpbWVvdXQoKCk9PntwKFIpfSxrKTpwKFIpfSxzZXRQcm9wcyhpKXtkPWl9LHNldFRvZ2dsZTooaSxuKT0+e2xldCB1PWMuZ2V0KGkpO3UmJih1LnRvZ2dsZT1uKX0saXNUb2FzdEFjdGl2ZTppPT57dmFyIG47cmV0dXJuKG49Yy5nZXQoaSkpPT1udWxsP3ZvaWQgMDpuLmlzQWN0aXZlfSxnZXRTbmFwc2hvdDooKT0+YX19dmFyIEk9bmV3IE1hcCxGPVtdLHN0PW5ldyBTZXQsVnQ9dD0+c3QuZm9yRWFjaChvPT5vKHQpKSxidD0oKT0+SS5zaXplPjA7ZnVuY3Rpb24gUXQoKXtGLmZvckVhY2godD0+bnQodC5jb250ZW50LHQub3B0aW9ucykpLEY9W119dmFyIHZ0PSh0LHtjb250YWluZXJJZDpvfSk9Pnt2YXIgZTtyZXR1cm4oZT1JLmdldChvfHwxKSk9PW51bGw/dm9pZCAwOmUudG9hc3RzLmdldCh0KX07ZnVuY3Rpb24gWCh0LG8pe3ZhciByO2lmKG8pcmV0dXJuISEoKHI9SS5nZXQobykpIT1udWxsJiZyLmlzVG9hc3RBY3RpdmUodCkpO2xldCBlPSExO3JldHVybiBJLmZvckVhY2gocz0+e3MuaXNUb2FzdEFjdGl2ZSh0KSYmKGU9ITApfSksZX1mdW5jdGlvbiBodCh0KXtpZighYnQoKSl7Rj1GLmZpbHRlcihvPT50IT1udWxsJiZvLm9wdGlvbnMudG9hc3RJZCE9PXQpO3JldHVybn1pZih0PT1udWxsfHxtdCh0KSlJLmZvckVhY2gobz0+e28ucmVtb3ZlVG9hc3QodCl9KTtlbHNlIGlmKHQmJihcImNvbnRhaW5lcklkXCJpbiB0fHxcImlkXCJpbiB0KSl7bGV0IG89SS5nZXQodC5jb250YWluZXJJZCk7bz9vLnJlbW92ZVRvYXN0KHQuaWQpOkkuZm9yRWFjaChlPT57ZS5yZW1vdmVUb2FzdCh0LmlkKX0pfX12YXIgQ3Q9KHQ9e30pPT57SS5mb3JFYWNoKG89PntvLnByb3BzLmxpbWl0JiYoIXQuY29udGFpbmVySWR8fG8uaWQ9PT10LmNvbnRhaW5lcklkKSYmby5jbGVhclF1ZXVlKCl9KX07ZnVuY3Rpb24gbnQodCxvKXt6KHQpJiYoYnQoKXx8Ri5wdXNoKHtjb250ZW50OnQsb3B0aW9uczpvfSksSS5mb3JFYWNoKGU9PntlLmJ1aWxkVG9hc3QodCxvKX0pKX1mdW5jdGlvbiB4dCh0KXt2YXIgbzsobz1JLmdldCh0LmNvbnRhaW5lcklkfHwxKSk9PW51bGx8fG8uc2V0VG9nZ2xlKHQuaWQsdC5mbil9ZnVuY3Rpb24gcnQodCxvKXtJLmZvckVhY2goZT0+eyhvPT1udWxsfHwhKG8hPW51bGwmJm8uY29udGFpbmVySWQpfHwobz09bnVsbD92b2lkIDA6by5jb250YWluZXJJZCk9PT1lLmlkKSYmZS50b2dnbGUodCxvPT1udWxsP3ZvaWQgMDpvLmlkKX0pfWZ1bmN0aW9uIEV0KHQpe2xldCBvPXQuY29udGFpbmVySWR8fDE7cmV0dXJue3N1YnNjcmliZShlKXtsZXQgcj1fdChvLHQsVnQpO0kuc2V0KG8scik7bGV0IHM9ci5vYnNlcnZlKGUpO3JldHVybiBRdCgpLCgpPT57cygpLEkuZGVsZXRlKG8pfX0sc2V0UHJvcHMoZSl7dmFyIHI7KHI9SS5nZXQobykpPT1udWxsfHxyLnNldFByb3BzKGUpfSxnZXRTbmFwc2hvdCgpe3ZhciBlO3JldHVybihlPUkuZ2V0KG8pKT09bnVsbD92b2lkIDA6ZS5nZXRTbmFwc2hvdCgpfX19ZnVuY3Rpb24gUHQodCl7cmV0dXJuIHN0LmFkZCh0KSwoKT0+e3N0LmRlbGV0ZSh0KX19ZnVuY3Rpb24gV3QodCl7cmV0dXJuIHQmJihOKHQudG9hc3RJZCl8fEwodC50b2FzdElkKSk/dC50b2FzdElkOmF0KCl9ZnVuY3Rpb24gVSh0LG8pe3JldHVybiBudCh0LG8pLG8udG9hc3RJZH1mdW5jdGlvbiBWKHQsbyl7cmV0dXJuey4uLm8sdHlwZTpvJiZvLnR5cGV8fHQsdG9hc3RJZDpXdChvKX19ZnVuY3Rpb24gUSh0KXtyZXR1cm4obyxlKT0+VShvLFYodCxlKSl9ZnVuY3Rpb24geSh0LG8pe3JldHVybiBVKHQsVihcImRlZmF1bHRcIixvKSl9eS5sb2FkaW5nPSh0LG8pPT5VKHQsVihcImRlZmF1bHRcIix7aXNMb2FkaW5nOiEwLGF1dG9DbG9zZTohMSxjbG9zZU9uQ2xpY2s6ITEsY2xvc2VCdXR0b246ITEsZHJhZ2dhYmxlOiExLC4uLm99KSk7ZnVuY3Rpb24gR3QodCx7cGVuZGluZzpvLGVycm9yOmUsc3VjY2VzczpyfSxzKXtsZXQgbDtvJiYobD1OKG8pP3kubG9hZGluZyhvLHMpOnkubG9hZGluZyhvLnJlbmRlcix7Li4ucywuLi5vfSkpO2xldCBhPXtpc0xvYWRpbmc6bnVsbCxhdXRvQ2xvc2U6bnVsbCxjbG9zZU9uQ2xpY2s6bnVsbCxjbG9zZUJ1dHRvbjpudWxsLGRyYWdnYWJsZTpudWxsfSxkPShULGcsdik9PntpZihnPT1udWxsKXt5LmRpc21pc3MobCk7cmV0dXJufWxldCB4PXt0eXBlOlQsLi4uYSwuLi5zLGRhdGE6dn0sQz1OKGcpP3tyZW5kZXI6Z306ZztyZXR1cm4gbD95LnVwZGF0ZShsLHsuLi54LC4uLkN9KTp5KEMucmVuZGVyLHsuLi54LC4uLkN9KSx2fSxjPVAodCk/dCgpOnQ7cmV0dXJuIGMudGhlbihUPT5kKFwic3VjY2Vzc1wiLHIsVCkpLmNhdGNoKFQ9PmQoXCJlcnJvclwiLGUsVCkpLGN9eS5wcm9taXNlPUd0O3kuc3VjY2Vzcz1RKFwic3VjY2Vzc1wiKTt5LmluZm89UShcImluZm9cIik7eS5lcnJvcj1RKFwiZXJyb3JcIik7eS53YXJuaW5nPVEoXCJ3YXJuaW5nXCIpO3kud2Fybj15Lndhcm5pbmc7eS5kYXJrPSh0LG8pPT5VKHQsVihcImRlZmF1bHRcIix7dGhlbWU6XCJkYXJrXCIsLi4ub30pKTtmdW5jdGlvbiBxdCh0KXtodCh0KX15LmRpc21pc3M9cXQ7eS5jbGVhcldhaXRpbmdRdWV1ZT1DdDt5LmlzQWN0aXZlPVg7eS51cGRhdGU9KHQsbz17fSk9PntsZXQgZT12dCh0LG8pO2lmKGUpe2xldHtwcm9wczpyLGNvbnRlbnQ6c309ZSxsPXtkZWxheToxMDAsLi4uciwuLi5vLHRvYXN0SWQ6by50b2FzdElkfHx0LHVwZGF0ZUlkOmF0KCl9O2wudG9hc3RJZCE9PXQmJihsLnN0YWxlSWQ9dCk7bGV0IGE9bC5yZW5kZXJ8fHM7ZGVsZXRlIGwucmVuZGVyLFUoYSxsKX19O3kuZG9uZT10PT57eS51cGRhdGUodCx7cHJvZ3Jlc3M6MX0pfTt5Lm9uQ2hhbmdlPVB0O3kucGxheT10PT5ydCghMCx0KTt5LnBhdXNlPXQ9PnJ0KCExLHQpO2ltcG9ydHt1c2VSZWYgYXMgS3QsdXNlU3luY0V4dGVybmFsU3RvcmUgYXMgWXR9ZnJvbVwicmVhY3RcIjtmdW5jdGlvbiBJdCh0KXt2YXIgYTtsZXR7c3Vic2NyaWJlOm8sZ2V0U25hcHNob3Q6ZSxzZXRQcm9wczpyfT1LdChFdCh0KSkuY3VycmVudDtyKHQpO2xldCBzPShhPVl0KG8sZSxlKSk9PW51bGw/dm9pZCAwOmEuc2xpY2UoKTtmdW5jdGlvbiBsKGQpe2lmKCFzKXJldHVybltdO2xldCBjPW5ldyBNYXA7cmV0dXJuIHQubmV3ZXN0T25Ub3AmJnMucmV2ZXJzZSgpLHMuZm9yRWFjaChUPT57bGV0e3Bvc2l0aW9uOmd9PVQucHJvcHM7Yy5oYXMoZyl8fGMuc2V0KGcsW10pLGMuZ2V0KGcpLnB1c2goVCl9KSxBcnJheS5mcm9tKGMsVD0+ZChUWzBdLFRbMV0pKX1yZXR1cm57Z2V0VG9hc3RUb1JlbmRlcjpsLGlzVG9hc3RBY3RpdmU6WCxjb3VudDpzPT1udWxsP3ZvaWQgMDpzLmxlbmd0aH19aW1wb3J0e3VzZUVmZmVjdCBhcyBadCx1c2VSZWYgYXMgU3QsdXNlU3RhdGUgYXMga3R9ZnJvbVwicmVhY3RcIjtmdW5jdGlvbiBBdCh0KXtsZXRbbyxlXT1rdCghMSksW3Isc109a3QoITEpLGw9U3QobnVsbCksYT1TdCh7c3RhcnQ6MCxkZWx0YTowLHJlbW92YWxEaXN0YW5jZTowLGNhbkNsb3NlT25DbGljazohMCxjYW5EcmFnOiExLGRpZE1vdmU6ITF9KS5jdXJyZW50LHthdXRvQ2xvc2U6ZCxwYXVzZU9uSG92ZXI6YyxjbG9zZVRvYXN0OlQsb25DbGljazpnLGNsb3NlT25DbGljazp2fT10O3h0KHtpZDp0LnRvYXN0SWQsY29udGFpbmVySWQ6dC5jb250YWluZXJJZCxmbjplfSksWnQoKCk9PntpZih0LnBhdXNlT25Gb2N1c0xvc3MpcmV0dXJuIHgoKSwoKT0+e0MoKX19LFt0LnBhdXNlT25Gb2N1c0xvc3NdKTtmdW5jdGlvbiB4KCl7ZG9jdW1lbnQuaGFzRm9jdXMoKXx8cCgpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIixmKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIixwKX1mdW5jdGlvbiBDKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLGYpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLHApfWZ1bmN0aW9uIFMobSl7aWYodC5kcmFnZ2FibGU9PT0hMHx8dC5kcmFnZ2FibGU9PT1tLnBvaW50ZXJUeXBlKXtiKCk7bGV0IF89bC5jdXJyZW50O2EuY2FuQ2xvc2VPbkNsaWNrPSEwLGEuY2FuRHJhZz0hMCxfLnN0eWxlLnRyYW5zaXRpb249XCJub25lXCIsdC5kcmFnZ2FibGVEaXJlY3Rpb249PT1cInhcIj8oYS5zdGFydD1tLmNsaWVudFgsYS5yZW1vdmFsRGlzdGFuY2U9Xy5vZmZzZXRXaWR0aCoodC5kcmFnZ2FibGVQZXJjZW50LzEwMCkpOihhLnN0YXJ0PW0uY2xpZW50WSxhLnJlbW92YWxEaXN0YW5jZT1fLm9mZnNldEhlaWdodCoodC5kcmFnZ2FibGVQZXJjZW50PT09ODA/dC5kcmFnZ2FibGVQZXJjZW50KjEuNTp0LmRyYWdnYWJsZVBlcmNlbnQpLzEwMCl9fWZ1bmN0aW9uIEUobSl7bGV0e3RvcDpfLGJvdHRvbTprLGxlZnQ6TSxyaWdodDpBfT1sLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bS5uYXRpdmVFdmVudC50eXBlIT09XCJ0b3VjaGVuZFwiJiZ0LnBhdXNlT25Ib3ZlciYmbS5jbGllbnRYPj1NJiZtLmNsaWVudFg8PUEmJm0uY2xpZW50WT49XyYmbS5jbGllbnRZPD1rP3AoKTpmKCl9ZnVuY3Rpb24gZigpe2UoITApfWZ1bmN0aW9uIHAoKXtlKCExKX1mdW5jdGlvbiBiKCl7YS5kaWRNb3ZlPSExLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLG4pLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIix1KX1mdW5jdGlvbiBpKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsbiksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLHUpfWZ1bmN0aW9uIG4obSl7bGV0IF89bC5jdXJyZW50O2lmKGEuY2FuRHJhZyYmXyl7YS5kaWRNb3ZlPSEwLG8mJnAoKSx0LmRyYWdnYWJsZURpcmVjdGlvbj09PVwieFwiP2EuZGVsdGE9bS5jbGllbnRYLWEuc3RhcnQ6YS5kZWx0YT1tLmNsaWVudFktYS5zdGFydCxhLnN0YXJ0IT09bS5jbGllbnRYJiYoYS5jYW5DbG9zZU9uQ2xpY2s9ITEpO2xldCBrPXQuZHJhZ2dhYmxlRGlyZWN0aW9uPT09XCJ4XCI/YCR7YS5kZWx0YX1weCwgdmFyKC0teSlgOmAwLCBjYWxjKCR7YS5kZWx0YX1weCArIHZhcigtLXkpKWA7Xy5zdHlsZS50cmFuc2Zvcm09YHRyYW5zbGF0ZTNkKCR7a30sMClgLF8uc3R5bGUub3BhY2l0eT1gJHsxLU1hdGguYWJzKGEuZGVsdGEvYS5yZW1vdmFsRGlzdGFuY2UpfWB9fWZ1bmN0aW9uIHUoKXtpKCk7bGV0IG09bC5jdXJyZW50O2lmKGEuY2FuRHJhZyYmYS5kaWRNb3ZlJiZtKXtpZihhLmNhbkRyYWc9ITEsTWF0aC5hYnMoYS5kZWx0YSk+YS5yZW1vdmFsRGlzdGFuY2Upe3MoITApLHQuY2xvc2VUb2FzdCghMCksdC5jb2xsYXBzZUFsbCgpO3JldHVybn1tLnN0eWxlLnRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjJzXCIsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zZm9ybVwiKSxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKX19bGV0IGg9e29uUG9pbnRlckRvd246UyxvblBvaW50ZXJVcDpFfTtyZXR1cm4gZCYmYyYmKGgub25Nb3VzZUVudGVyPXAsdC5zdGFja2VkfHwoaC5vbk1vdXNlTGVhdmU9ZikpLHYmJihoLm9uQ2xpY2s9bT0+e2cmJmcobSksYS5jYW5DbG9zZU9uQ2xpY2smJlQoITApfSkse3BsYXlUb2FzdDpmLHBhdXNlVG9hc3Q6cCxpc1J1bm5pbmc6byxwcmV2ZW50RXhpdFRyYW5zaXRpb246cix0b2FzdFJlZjpsLGV2ZW50SGFuZGxlcnM6aH19aW1wb3J0e3VzZUVmZmVjdCBhcyBKdCx1c2VMYXlvdXRFZmZlY3QgYXMgdG99ZnJvbVwicmVhY3RcIjt2YXIgT3Q9dHlwZW9mIHdpbmRvdyE9XCJ1bmRlZmluZWRcIj90bzpKdDtpbXBvcnQgaXQgZnJvbVwiY2xzeFwiO2ltcG9ydCBxLHtjbG9uZUVsZW1lbnQgYXMgY28saXNWYWxpZEVsZW1lbnQgYXMgZm99ZnJvbVwicmVhY3RcIjtpbXBvcnQgTyx7Y2xvbmVFbGVtZW50IGFzIG9vLGlzVmFsaWRFbGVtZW50IGFzIGVvfWZyb21cInJlYWN0XCI7dmFyIEc9KHt0aGVtZTp0LHR5cGU6byxpc0xvYWRpbmc6ZSwuLi5yfSk9Pk8uY3JlYXRlRWxlbWVudChcInN2Z1wiLHt2aWV3Qm94OlwiMCAwIDI0IDI0XCIsd2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLGZpbGw6dD09PVwiY29sb3JlZFwiP1wiY3VycmVudENvbG9yXCI6YHZhcigtLXRvYXN0aWZ5LWljb24tY29sb3ItJHtvfSlgLC4uLnJ9KTtmdW5jdGlvbiBhbyh0KXtyZXR1cm4gTy5jcmVhdGVFbGVtZW50KEcsey4uLnR9LE8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0yMy4zMiAxNy4xOTFMMTUuNDM4IDIuMTg0QzE0LjcyOC44MzMgMTMuNDE2IDAgMTEuOTk2IDBjLTEuNDIgMC0yLjczMy44MzMtMy40NDMgMi4xODRMLjUzMyAxNy40NDhhNC43NDQgNC43NDQgMCAwMDAgNC4zNjhDMS4yNDMgMjMuMTY3IDIuNTU1IDI0IDMuOTc1IDI0aDE2LjA1QzIyLjIyIDI0IDI0IDIyLjA0NCAyNCAxOS42MzJjMC0uOTA0LS4yNTEtMS43NDYtLjY4LTIuNDR6bS05LjYyMiAxLjQ2YzAgMS4wMzMtLjcyNCAxLjgyMy0xLjY5OCAxLjgyM3MtMS42OTgtLjc5LTEuNjk4LTEuODIydi0uMDQzYzAtMS4wMjguNzI0LTEuODIyIDEuNjk4LTEuODIyczEuNjk4Ljc5IDEuNjk4IDEuODIydi4wNDN6bS4wMzktMTIuMjg1bC0uODQgOC4wNmMtLjA1Ny41ODEtLjQwOC45NDMtLjg5Ny45NDMtLjQ5IDAtLjg0LS4zNjctLjg5Ni0uOTQybC0uODQtOC4wNjVjLS4wNTctLjYyNC4yNS0xLjA5NS43NzktMS4wOTVoMS45MWMuNTI4LjAwNS44NC40NzYuNzg0IDEuMXpcIn0pKX1mdW5jdGlvbiBzbyh0KXtyZXR1cm4gTy5jcmVhdGVFbGVtZW50KEcsey4uLnR9LE8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMiAwYTEyIDEyIDAgMTAxMiAxMkExMi4wMTMgMTIuMDEzIDAgMDAxMiAwem0uMjUgNWExLjUgMS41IDAgMTEtMS41IDEuNSAxLjUgMS41IDAgMDExLjUtMS41em0yLjI1IDEzLjVoLTRhMSAxIDAgMDEwLTJoLjc1YS4yNS4yNSAwIDAwLjI1LS4yNXYtNC41YS4yNS4yNSAwIDAwLS4yNS0uMjVoLS43NWExIDEgMCAwMTAtMmgxYTIgMiAwIDAxMiAydjQuNzVhLjI1LjI1IDAgMDAuMjUuMjVoLjc1YTEgMSAwIDExMCAyelwifSkpfWZ1bmN0aW9uIG5vKHQpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnQoRyx7Li4udH0sTy5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTEyIDBhMTIgMTIgMCAxMDEyIDEyQTEyLjAxNCAxMi4wMTQgMCAwMDEyIDB6bTYuOTI3IDguMmwtNi44NDUgOS4yODlhMS4wMTEgMS4wMTEgMCAwMS0xLjQzLjE4OGwtNC44ODgtMy45MDhhMSAxIDAgMTExLjI1LTEuNTYybDQuMDc2IDMuMjYxIDYuMjI3LTguNDUxYTEgMSAwIDExMS42MSAxLjE4M3pcIn0pKX1mdW5jdGlvbiBybyh0KXtyZXR1cm4gTy5jcmVhdGVFbGVtZW50KEcsey4uLnR9LE8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMS45ODMgMGExMi4yMDYgMTIuMjA2IDAgMDAtOC41MSAzLjY1M0ExMS44IDExLjggMCAwMDAgMTIuMjA3IDExLjc3OSAxMS43NzkgMCAwMDExLjggMjRoLjIxNEExMi4xMTEgMTIuMTExIDAgMDAyNCAxMS43OTEgMTEuNzY2IDExLjc2NiAwIDAwMTEuOTgzIDB6TTEwLjUgMTYuNTQyYTEuNDc2IDEuNDc2IDAgMDExLjQ0OS0xLjUzaC4wMjdhMS41MjcgMS41MjcgMCAwMTEuNTIzIDEuNDcgMS40NzUgMS40NzUgMCAwMS0xLjQ0OSAxLjUzaC0uMDI3YTEuNTI5IDEuNTI5IDAgMDEtMS41MjMtMS40N3pNMTEgMTIuNXYtNmExIDEgMCAwMTIgMHY2YTEgMSAwIDExLTIgMHpcIn0pKX1mdW5jdGlvbiBpbygpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiVG9hc3RpZnlfX3NwaW5uZXJcIn0pfXZhciBXPXtpbmZvOnNvLHdhcm5pbmc6YW8sc3VjY2VzczpubyxlcnJvcjpybyxzcGlubmVyOmlvfSxsbz10PT50IGluIFc7ZnVuY3Rpb24gTnQoe3RoZW1lOnQsdHlwZTpvLGlzTG9hZGluZzplLGljb246cn0pe2xldCBzPW51bGwsbD17dGhlbWU6dCx0eXBlOm99O3JldHVybiByPT09ITF8fChQKHIpP3M9cih7Li4ubCxpc0xvYWRpbmc6ZX0pOmVvKHIpP3M9b28ocixsKTplP3M9Vy5zcGlubmVyKCk6bG8obykmJihzPVdbb10obCkpKSxzfXZhciB3dD10PT57bGV0e2lzUnVubmluZzpvLHByZXZlbnRFeGl0VHJhbnNpdGlvbjplLHRvYXN0UmVmOnIsZXZlbnRIYW5kbGVyczpzLHBsYXlUb2FzdDpsfT1BdCh0KSx7Y2xvc2VCdXR0b246YSxjaGlsZHJlbjpkLGF1dG9DbG9zZTpjLG9uQ2xpY2s6VCx0eXBlOmcsaGlkZVByb2dyZXNzQmFyOnYsY2xvc2VUb2FzdDp4LHRyYW5zaXRpb246Qyxwb3NpdGlvbjpTLGNsYXNzTmFtZTpFLHN0eWxlOmYscHJvZ3Jlc3NDbGFzc05hbWU6cCx1cGRhdGVJZDpiLHJvbGU6aSxwcm9ncmVzczpuLHJ0bDp1LHRvYXN0SWQ6aCxkZWxldGVUb2FzdDptLGlzSW46Xyxpc0xvYWRpbmc6ayxjbG9zZU9uQ2xpY2s6TSx0aGVtZTpBLGFyaWFMYWJlbDpSfT10LEQ9aXQoXCJUb2FzdGlmeV9fdG9hc3RcIixgVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS0ke0F9YCxgVG9hc3RpZnlfX3RvYXN0LS0ke2d9YCx7W1wiVG9hc3RpZnlfX3RvYXN0LS1ydGxcIl06dX0se1tcIlRvYXN0aWZ5X190b2FzdC0tY2xvc2Utb24tY2xpY2tcIl06TX0pLFk9UChFKT9FKHtydGw6dSxwb3NpdGlvbjpTLHR5cGU6ZyxkZWZhdWx0Q2xhc3NOYW1lOkR9KTppdChELEUpLGZ0PU50KHQpLGR0PSEhbnx8IWMsaj17Y2xvc2VUb2FzdDp4LHR5cGU6Zyx0aGVtZTpBfSxIPW51bGw7cmV0dXJuIGE9PT0hMXx8KFAoYSk/SD1hKGopOmZvKGEpP0g9Y28oYSxqKTpIPXl0KGopKSxxLmNyZWF0ZUVsZW1lbnQoQyx7aXNJbjpfLGRvbmU6bSxwb3NpdGlvbjpTLHByZXZlbnRFeGl0VHJhbnNpdGlvbjplLG5vZGVSZWY6cixwbGF5VG9hc3Q6bH0scS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2lkOmgsdGFiSW5kZXg6MCxvbkNsaWNrOlQsXCJkYXRhLWluXCI6XyxjbGFzc05hbWU6WSwuLi5zLHN0eWxlOmYscmVmOnIsLi4uXyYme3JvbGU6aSxcImFyaWEtbGFiZWxcIjpSfX0sZnQhPW51bGwmJnEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6aXQoXCJUb2FzdGlmeV9fdG9hc3QtaWNvblwiLHtbXCJUb2FzdGlmeS0tYW5pbWF0ZS1pY29uIFRvYXN0aWZ5X196b29tLWVudGVyXCJdOiFrfSl9LGZ0KSx0dChkLHQsIW8pLEgsIXQuY3VzdG9tUHJvZ3Jlc3NCYXImJnEuY3JlYXRlRWxlbWVudChndCx7Li4uYiYmIWR0P3trZXk6YHAtJHtifWB9Ont9LHJ0bDp1LHRoZW1lOkEsZGVsYXk6Yyxpc1J1bm5pbmc6byxpc0luOl8sY2xvc2VUb2FzdDp4LGhpZGU6dix0eXBlOmcsY2xhc3NOYW1lOnAsY29udHJvbGxlZFByb2dyZXNzOmR0LHByb2dyZXNzOm58fDB9KSkpfTt2YXIgSz0odCxvPSExKT0+KHtlbnRlcjpgVG9hc3RpZnktLWFuaW1hdGUgVG9hc3RpZnlfXyR7dH0tZW50ZXJgLGV4aXQ6YFRvYXN0aWZ5LS1hbmltYXRlIFRvYXN0aWZ5X18ke3R9LWV4aXRgLGFwcGVuZFBvc2l0aW9uOm99KSxsdD0kKEsoXCJib3VuY2VcIiwhMCkpLG1vPSQoSyhcInNsaWRlXCIsITApKSxwbz0kKEsoXCJ6b29tXCIpKSx1bz0kKEsoXCJmbGlwXCIpKTt2YXIgX289e3Bvc2l0aW9uOlwidG9wLXJpZ2h0XCIsdHJhbnNpdGlvbjpsdCxhdXRvQ2xvc2U6NWUzLGNsb3NlQnV0dG9uOiEwLHBhdXNlT25Ib3ZlcjohMCxwYXVzZU9uRm9jdXNMb3NzOiEwLGRyYWdnYWJsZTpcInRvdWNoXCIsZHJhZ2dhYmxlUGVyY2VudDo4MCxkcmFnZ2FibGVEaXJlY3Rpb246XCJ4XCIscm9sZTpcImFsZXJ0XCIsdGhlbWU6XCJsaWdodFwiLFwiYXJpYS1sYWJlbFwiOlwiTm90aWZpY2F0aW9ucyBBbHQrVFwiLGhvdEtleXM6dD0+dC5hbHRLZXkmJnQuY29kZT09PVwiS2V5VFwifTtmdW5jdGlvbiBMdCh0KXtsZXQgbz17Li4uX28sLi4udH0sZT10LnN0YWNrZWQsW3Isc109Z28oITApLGw9VG8obnVsbCkse2dldFRvYXN0VG9SZW5kZXI6YSxpc1RvYXN0QWN0aXZlOmQsY291bnQ6Y309SXQobykse2NsYXNzTmFtZTpULHN0eWxlOmcscnRsOnYsY29udGFpbmVySWQ6eCxob3RLZXlzOkN9PW87ZnVuY3Rpb24gUyhmKXtsZXQgcD1EdChcIlRvYXN0aWZ5X190b2FzdC1jb250YWluZXJcIixgVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tJHtmfWAse1tcIlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXJ0bFwiXTp2fSk7cmV0dXJuIFAoVCk/VCh7cG9zaXRpb246ZixydGw6dixkZWZhdWx0Q2xhc3NOYW1lOnB9KTpEdChwLEIoVCkpfWZ1bmN0aW9uIEUoKXtlJiYocyghMCkseS5wbGF5KCkpfXJldHVybiBPdCgoKT0+e3ZhciBmO2lmKGUpe2xldCBwPWwuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbj1cInRydWVcIl0nKSxiPTEyLGk9KGY9by5wb3NpdGlvbik9PW51bGw/dm9pZCAwOmYuaW5jbHVkZXMoXCJ0b3BcIiksbj0wLHU9MDtBcnJheS5mcm9tKHApLnJldmVyc2UoKS5mb3JFYWNoKChoLG0pPT57bGV0IF89aDtfLmNsYXNzTGlzdC5hZGQoXCJUb2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRcIiksbT4wJiYoXy5kYXRhc2V0LmNvbGxhcHNlZD1gJHtyfWApLF8uZGF0YXNldC5wb3N8fChfLmRhdGFzZXQucG9zPWk/XCJ0b3BcIjpcImJvdFwiKTtsZXQgaz1uKihyPy4yOjEpKyhyPzA6YiptKTtfLnN0eWxlLnNldFByb3BlcnR5KFwiLS15XCIsYCR7aT9rOmsqLTF9cHhgKSxfLnN0eWxlLnNldFByb3BlcnR5KFwiLS1nXCIsYCR7Yn1gKSxfLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zXCIsYCR7MS0ocj91OjApfWApLG4rPV8ub2Zmc2V0SGVpZ2h0LHUrPS4wMjV9KX19LFtyLGMsZV0pLHlvKCgpPT57ZnVuY3Rpb24gZihwKXt2YXIgaTtsZXQgYj1sLmN1cnJlbnQ7QyhwKSYmKChpPWIucXVlcnlTZWxlY3RvcignW3RhYkluZGV4PVwiMFwiXScpKT09bnVsbHx8aS5mb2N1cygpLHMoITEpLHkucGF1c2UoKSkscC5rZXk9PT1cIkVzY2FwZVwiJiYoZG9jdW1lbnQuYWN0aXZlRWxlbWVudD09PWJ8fGIhPW51bGwmJmIuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpJiYocyghMCkseS5wbGF5KCkpfXJldHVybiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGYpLCgpPT57ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixmKX19LFtDXSksY3QuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIix7cmVmOmwsY2xhc3NOYW1lOlwiVG9hc3RpZnlcIixpZDp4LG9uTW91c2VFbnRlcjooKT0+e2UmJihzKCExKSx5LnBhdXNlKCkpfSxvbk1vdXNlTGVhdmU6RSxcImFyaWEtbGl2ZVwiOlwicG9saXRlXCIsXCJhcmlhLWF0b21pY1wiOlwiZmFsc2VcIixcImFyaWEtcmVsZXZhbnRcIjpcImFkZGl0aW9ucyB0ZXh0XCIsXCJhcmlhLWxhYmVsXCI6b1tcImFyaWEtbGFiZWxcIl19LGEoKGYscCk9PntsZXQgYj1wLmxlbmd0aD97Li4uZ306ey4uLmcscG9pbnRlckV2ZW50czpcIm5vbmVcIn07cmV0dXJuIGN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7dGFiSW5kZXg6LTEsY2xhc3NOYW1lOlMoZiksXCJkYXRhLXN0YWNrZWRcIjplLHN0eWxlOmIsa2V5OmBjLSR7Zn1gfSxwLm1hcCgoe2NvbnRlbnQ6aSxwcm9wczpufSk9PmN0LmNyZWF0ZUVsZW1lbnQod3Qsey4uLm4sc3RhY2tlZDplLGNvbGxhcHNlQWxsOkUsaXNJbjpkKG4udG9hc3RJZCxuLmNvbnRhaW5lcklkKSxrZXk6YHQtJHtuLmtleX1gfSxpKSkpfSkpfWV4cG9ydHtsdCBhcyBCb3VuY2UsdW8gYXMgRmxpcCxXIGFzIEljb25zLG1vIGFzIFNsaWRlLEx0IGFzIFRvYXN0Q29udGFpbmVyLHBvIGFzIFpvb20sWiBhcyBjb2xsYXBzZVRvYXN0LCQgYXMgY3NzVHJhbnNpdGlvbix5IGFzIHRvYXN0fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGxvYWRNb2R1bGVzIH0gZnJvbSBcImVzcmktbG9hZGVyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IElNU3RhdGUsIEFsbFdpZGdldFByb3BzIH0gZnJvbSBcImppbXUtY29yZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIExvYWRpbmcgfSBmcm9tIFwiamltdS11aVwiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QsIEJvdW5jZSB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2hvb2tzL3VzZUxvY2FsZVwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uVG9rZW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy9nZXRTZXNzaW9uVG9rZW5cIjtcclxuaW1wb3J0IHsgdHJhbnNsYXRpb25zIH0gZnJvbSBcIi4vdHJhbnNsYXRpb25zXCI7XHJcbmltcG9ydCBUaXRsZVdpdGhUb29sdGlwIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL1RpdGxlV2l0aFRvb2x0aXBcIjtcclxuXHJcbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8YW55PikgPT4ge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlTG9jYWxlKHRyYW5zbGF0aW9ucyk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkU2Vuc29yID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IElNU3RhdGUpID0+IHN0YXRlLm15U3RhdGU/LnNlbGVjdGVkU2Vuc29yXHJcbiAgKTtcclxuICBjb25zdCBzZWxlY3RlZEltYWdlcmllcyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5teVN0YXRlPy5zZWxlY3RlZEltYWdlc1xyXG4gICk7XHJcbiAgY29uc3QgZ2VvcHJvY2VzcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUubXlTdGF0ZT8uZ2VvcHJvY2Vzcyk7XHJcblxyXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Nob3dCdWZmZXIsIHNldFNob3dCdWZmZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdJbmNlbmRpbywgc2V0TG9hZGluZ0luY2VuZGlvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ0ludW5kYWNpb24sIHNldExvYWRpbmdJbnVuZGFjaW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRQb2x5Z29uLCBzZXRTZWxlY3RlZFBvbHlnb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmdCdWZmZXIsIHNldExvYWRpbmdCdWZmZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthcmVhQnVmZmVyLCBzZXRBcmVhQnVmZmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtidWZmZXJEaXN0YW5jZSwgc2V0QnVmZmVyRGlzdGFuY2VdID0gdXNlU3RhdGUoMSk7IC8vIEVzdGFkbyBwYXJhIGVsIGlucHV0XHJcbiAgY29uc3QgW2J1ZmZlciwgc2V0QnVmZmVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXYpID0+IHtcclxuICAgIHNldEppbXVNYXBWaWV3KGptdik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnVmZmVyQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIGlmICh2YWx1ZSA+IDEwMCkge1xyXG4gICAgICB0b2FzdC53YXJuaW5nKHQoXCJtaW5LbVdhcm5pbmdcIiksIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0QnVmZmVyRGlzdGFuY2UoMTAwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICB0b2FzdC53YXJuaW5nKHQoXCJtYXhLbVdhcm5pbmdcIiksIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0QnVmZmVyRGlzdGFuY2UoMSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldEJ1ZmZlckRpc3RhbmNlKHZhbHVlKTsgLy8gQWN0dWFsaXphIGVsIGVzdGFkbyBjb24gZWwgbnVldm8gdmFsb3IgZGVsIGlucHV0XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FyZ2FyR2VvbWV0cmlhRW5NYXBhID0gYXN5bmMgKGdlb2pzb24sIHByb2Nlc28pID0+IHtcclxuICAgIGlmICghamltdU1hcFZpZXcpIHJldHVybjtcclxuICAgIGlmICghZ2VvanNvbikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSByZWNpYmnDsyB1biBub21icmUgZGUgYXJjaGl2byB2w6FsaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBbRmVhdHVyZUxheWVyLCBHcmFwaGljLCBQb2x5Z29uLCBTaW1wbGVGaWxsU3ltYm9sLCBnZW9tZXRyeUVuZ2luZV0gPVxyXG4gICAgICAgIGF3YWl0IGxvYWRNb2R1bGVzKFtcclxuICAgICAgICAgIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIsXHJcbiAgICAgICAgICBcImVzcmkvR3JhcGhpY1wiLFxyXG4gICAgICAgICAgXCJlc3JpL2dlb21ldHJ5L1BvbHlnb25cIixcclxuICAgICAgICAgIFwiZXNyaS9zeW1ib2xzL1NpbXBsZUZpbGxTeW1ib2xcIixcclxuICAgICAgICAgIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiLFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgdmFyIG5vbWJyZUNhcGE7XHJcblxyXG4gICAgICBpZiAocHJvY2VzbyA9PSAyKSB7XHJcbiAgICAgICAgbm9tYnJlQ2FwYSA9IHQoXCJmaXJlTGF5ZXJcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAocHJvY2VzbyA9PSAzKSB7XHJcbiAgICAgICAgbm9tYnJlQ2FwYSA9IHQoXCJmbG9vZExheWVyXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBmZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgICB0aXRsZTogbm9tYnJlQ2FwYSxcclxuICAgICAgICBzb3VyY2U6IFtdLFxyXG4gICAgICAgIG9iamVjdElkRmllbGQ6IFwiT0JKRUNUSURcIixcclxuICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgIHsgbmFtZTogXCJPQkpFQ1RJRFwiLCBhbGlhczogXCJPQkpFQ1RJRFwiLCB0eXBlOiBcIm9pZFwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiYXJlYV9tMlwiLCBhbGlhczogXCLDgXJlYSAobcKyKVwiLCB0eXBlOiBcImRvdWJsZVwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiYXJlYV9oYVwiLCBhbGlhczogXCLDgXJlYSAoaGEpXCIsIHR5cGU6IFwiZG91YmxlXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJhcmVhX2ttMlwiLCBhbGlhczogXCLDgXJlYSAoa23CsilcIiwgdHlwZTogXCJkb3VibGVcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmVuZGVyZXI6IHtcclxuICAgICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBncmFwaGljcyA9IFtdO1xyXG4gICAgICBsZXQgZ3JhcGhpY0luZGV4ID0gMDtcclxuXHJcbiAgICAgIGdlb2pzb24uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4ge1xyXG4gICAgICAgIGxldCBnZW9tZXRyaWVzID0gW107XHJcblxyXG4gICAgICAgIGlmIChmZWF0dXJlLmdlb21ldHJ5LnR5cGUgPT09IFwiUG9seWdvblwiKSB7XHJcbiAgICAgICAgICBnZW9tZXRyaWVzLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBQb2x5Z29uKHtcclxuICAgICAgICAgICAgICByaW5nczogZmVhdHVyZS5nZW9tZXRyeS5jb29yZGluYXRlcyxcclxuICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBqaW11TWFwVmlldy52aWV3LnNwYXRpYWxSZWZlcmVuY2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmVhdHVyZS5nZW9tZXRyeS50eXBlID09PSBcIk11bHRpUG9seWdvblwiKSB7XHJcbiAgICAgICAgICBmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzLmZvckVhY2goKHBvbHlnb25Db29yZGluYXRlcykgPT4ge1xyXG4gICAgICAgICAgICBnZW9tZXRyaWVzLnB1c2goXHJcbiAgICAgICAgICAgICAgbmV3IFBvbHlnb24oe1xyXG4gICAgICAgICAgICAgICAgcmluZ3M6IHBvbHlnb25Db29yZGluYXRlcyxcclxuICAgICAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IGppbXVNYXBWaWV3LnZpZXcuc3BhdGlhbFJlZmVyZW5jZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZW9tZXRyaWVzLmZvckVhY2goKGdlb21ldHJ5KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTTIgPSBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0FyZWEoZ2VvbWV0cnksIFwic3F1YXJlLW1ldGVyc1wiKTtcclxuICAgICAgICAgIGNvbnN0IGFyZWFIYSA9IGFyZWFNMiAvIDEwMDAwO1xyXG4gICAgICAgICAgY29uc3QgYXJlYUttMiA9IGFyZWFNMiAvIDFfMDAwXzAwMDtcclxuXHJcbiAgICAgICAgICBncmFwaGljcy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgR3JhcGhpYyh7XHJcbiAgICAgICAgICAgICAgZ2VvbWV0cnk6IGdlb21ldHJ5LFxyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgICAgIE9CSkVDVElEOiBncmFwaGljSW5kZXgsXHJcbiAgICAgICAgICAgICAgICBhcmVhX20yOiBhcmVhTTIsXHJcbiAgICAgICAgICAgICAgICBhcmVhX2hhOiBhcmVhSGEsXHJcbiAgICAgICAgICAgICAgICBhcmVhX2ttMjogYXJlYUttMixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGdyYXBoaWNJbmRleCsrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZlYXR1cmVMYXllci5zb3VyY2UgPSBncmFwaGljcztcclxuXHJcbiAgICAgIC8vIEFncmVnYXIgbGEgY2FwYSBhbCBtYXBhIHNpIG5vIGV4aXN0ZSB1bmEgY29uIGVsIG1pc21vIG5vbWJyZVxyXG4gICAgICBjb25zdCBleGlzdGluZ0xheWVyID0gamltdU1hcFZpZXcudmlldy5tYXAubGF5ZXJzLmZpbmQoXHJcbiAgICAgICAgKGxheWVyKSA9PiBsYXllci50aXRsZSA9PT0gXCJQb2xpZ29ubyBkZXNhc3RyZVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChleGlzdGluZ0xheWVyKSB7XHJcbiAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGV4aXN0aW5nTGF5ZXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQoZmVhdHVyZUxheWVyKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBjYXJnYXIgbGEgZ2VvbWV0csOtYSBlbiBlbCBtYXBhOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5jZW5kaW8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nSW5jZW5kaW8odHJ1ZSk7XHJcbiAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgaW1hZ2VuMSA9IHNlbGVjdGVkSW1hZ2VyaWVzWzBdPy5PQkpFQ1RJRDtcclxuXHJcbiAgICAgICAgLy8gQ29uc3RydWlyIGxhIFVSTCBjb24gbG9zIHBhcsOhbWV0cm9zXHJcbiAgICAgICAgY29uc3QgcHJvY2VzbyA9IDI7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnZXRTZXNzaW9uVG9rZW4oKTtcclxuICAgICAgICAvL0Rlc2Fycm9sbG9cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvZ2V0RmlyZVpvbmVgLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG9iamVjdElkOiBpbWFnZW4xLFxyXG4gICAgICAgICAgICB1cmw6IHNlbGVjdGVkU2Vuc29yLnVybCxcclxuICAgICAgICAgICAgZ2VvbWV0cnk6IHNlbGVjdGVkSW1hZ2VyaWVzWzBdPy5nZW9tZXRyeSxcclxuICAgICAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICBgRXJyb3IgZW4gbGEgc29saWNpdHVkOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nSW5jZW5kaW8oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZUdlb2pzb24gPSByZXNwb25zZURhdGEuZ2VvanNvbjtcclxuXHJcbiAgICAgICAgYXdhaXQgY2FyZ2FyR2VvbWV0cmlhRW5NYXBhKHJlc3BvbnNlR2VvanNvbiwgcHJvY2Vzbyk7XHJcblxyXG4gICAgICAgIHNldExvYWRpbmdJbmNlbmRpbyhmYWxzZSk7XHJcbiAgICAgICAgc2V0U2hvd0J1ZmZlcih0cnVlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0b2FzdC5lcnJvcih0KFwiZmlyZUVycm9yXCIpLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRMb2FkaW5nSW5jZW5kaW8oZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW51bmRhY2lvbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmdJbnVuZGFjaW9uKHRydWUpO1xyXG5cclxuICAgIGlmICghamltdU1hcFZpZXcpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBpbWFnZW4xID0gc2VsZWN0ZWRJbWFnZXJpZXNbMF0/Lk9CSkVDVElEO1xyXG5cclxuICAgICAgaWYgKGltYWdlbjEgPT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgZW4gbGEgY2FyZ2EgZGUgaW1hZ2VuZXM6ICR7aW1hZ2VuMX1gKTtcclxuICAgICAgICBzZXRMb2FkaW5nSW51bmRhY2lvbihmYWxzZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENvbnN0cnVpciBsYSBVUkwgY29uIGxvcyBwYXLDoW1ldHJvc1xyXG4gICAgICBjb25zdCBwcm9jZXNvID0gMztcclxuICAgICAgY29uc3QgdG9rZW4gPSBnZXRTZXNzaW9uVG9rZW4oKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9nZXRGbG9vZFpvbmVgLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIG9iamVjdElkOiBpbWFnZW4xLFxyXG4gICAgICAgICAgdXJsOiBzZWxlY3RlZFNlbnNvci51cmwsXHJcbiAgICAgICAgICBnZW9tZXRyeTogc2VsZWN0ZWRJbWFnZXJpZXNbMF0/Lmdlb21ldHJ5LFxyXG4gICAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGBFcnJvciBlbiBsYSBzb2xpY2l0dWQ6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0TG9hZGluZ0ludW5kYWNpb24oZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlR2VvanNvbiA9IHJlc3BvbnNlRGF0YS5nZW9qc29uO1xyXG5cclxuICAgICAgYXdhaXQgY2FyZ2FyR2VvbWV0cmlhRW5NYXBhKHJlc3BvbnNlR2VvanNvbiwgcHJvY2Vzbyk7XHJcbiAgICAgIHNldExvYWRpbmdJbnVuZGFjaW9uKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB0b2FzdC5lcnJvcih0KFwiZmxvb2RFcnJvclwiKSwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRMb2FkaW5nSW51bmRhY2lvbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmluZEJ1ZmZlckdlb21ldHJ5ID0gKCkgPT4ge1xyXG4gICAgaWYgKCFqaW11TWFwVmlldykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVmZmVyR3JhcGhpYyA9IGppbXVNYXBWaWV3LnZpZXcuZ3JhcGhpY3MuaXRlbXMuZmluZChcclxuICAgICAgKGdyYXBoaWMpID0+IGdyYXBoaWMuYXR0cmlidXRlcyAmJiBncmFwaGljLmF0dHJpYnV0ZXMuaWQgPT09IFwiYnVmZmVyX0RJXCJcclxuICAgICk7XHJcbiAgICBpZiAoIWJ1ZmZlckdyYXBoaWMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJ1ZmZlckdyYXBoaWMuZ2VvbWV0cnk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RhcnREQSA9IGFzeW5jIChyaWVzZ286IFN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHNlbGVjdGVkSW1hZ2VyaWVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgdG9hc3Qud2FybmluZyhcclxuICAgICAgICAgIGBEZWJlIHNlbGVjY2lvbmFyIHVuYSBpbWFnZW4gYW50ZXMgZGUgZWplY3V0YXIgZXN0ZSBwcm9jZXNvYCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0TG9hZGluZ0luY2VuZGlvKGZhbHNlKTtcclxuICAgICAgICBzZXRMb2FkaW5nSW51bmRhY2lvbihmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChqaW11TWFwVmlldykge1xyXG4gICAgICAgICAgLy8gQWdyZWdhciBjYXBhIGRlIGzDrW1pdGUgdXJiYW5vIGFsIG1hcGFcclxuICAgICAgICAgIGNvbnN0IFtGZWF0dXJlTGF5ZXJdID0gYXdhaXQgbG9hZE1vZHVsZXMoW1xyXG4gICAgICAgICAgICBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiLFxyXG4gICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICAgbGV0IHVyYmFuTGltaXRMYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmxheWVycy5maW5kKFxyXG4gICAgICAgICAgICAobGF5ZXIpID0+IGxheWVyLmlkID09PSBcInVyYmFuTGltaXRMYXllclwiXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGlmICghdXJiYW5MaW1pdExheWVyKSB7XHJcbiAgICAgICAgICAgIHVyYmFuTGltaXRMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgICAgICAgIGlkOiBcInVyYmFuTGltaXRMYXllclwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkzDrW1pdGUgdXJiYW5vIFBsYW4gUmVndWxhZG9yIENvbXVuYWxcIixcclxuICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9naXNjaXYuc25zYXQuY2wvdmVjdG9yL3Jlc3Qvc2VydmljZXMvQ29tYW5kb19Db250cm9sL0zDrW1pdGVfdXJiYW5vX1BsYW5fUmVndWxhZG9yX0NvbXVuYWwvRmVhdHVyZVNlcnZlci8xMTdcIixcclxuICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAuYWRkKHVyYmFuTGltaXRMYXllcik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cmJhbkxpbWl0TGF5ZXIudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGV0IGRhZ2VyWm9uZUxheWVyMSA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmxheWVycy5maW5kKFxyXG4gICAgICAgICAgICAobGF5ZXIpID0+IGxheWVyLnRpdGxlID09PSB0KFwiZmlyZUxheWVyXCIpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbGV0IGRhZ2VyWm9uZUxheWVyMiA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmxheWVycy5maW5kKFxyXG4gICAgICAgICAgICAobGF5ZXIpID0+IGxheWVyLnRpdGxlID09PSB0KFwiZmxvb2RMYXllclwiKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAoIWRhZ2VyWm9uZUxheWVyMSAmJiByaWVzZ28gPT09IFwiaW5jZW5kaW9cIikge1xyXG4gICAgICAgICAgICBhd2FpdCBpbmNlbmRpbygpO1xyXG4gICAgICAgICAgICBkYWdlclpvbmVMYXllcjEgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChcclxuICAgICAgICAgICAgICAobGF5ZXIpID0+IGxheWVyLnRpdGxlID09PSB0KFwiZmlyZUxheWVyXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIWRhZ2VyWm9uZUxheWVyMiAmJiByaWVzZ28gPT09IFwiaW51bmRhY2lvblwiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGludW5kYWNpb24oKTtcclxuICAgICAgICAgICAgZGFnZXJab25lTGF5ZXIyID0gamltdU1hcFZpZXcudmlldy5tYXAubGF5ZXJzLmZpbmQoXHJcbiAgICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci50aXRsZSA9PT0gdChcImZsb29kTGF5ZXJcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoKGppbXVNYXBWaWV3ICYmIGRhZ2VyWm9uZUxheWVyMSkgfHwgZGFnZXJab25lTGF5ZXIyKSB7XHJcbiAgICAgICAgICAgIGlmIChkYWdlclpvbmVMYXllcjEpIHtcclxuICAgICAgICAgICAgICBjYXBhVGVtcG9yYWwoZGFnZXJab25lTGF5ZXIxLCByaWVzZ28pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYWdlclpvbmVMYXllcjIpIHtcclxuICAgICAgICAgICAgICBjYXBhVGVtcG9yYWwoZGFnZXJab25lTGF5ZXIyLCByaWVzZ28pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiamltdU1hcFZpZXcgbyBjYXBhIG5vIGVuY29udHJhZGEuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhcGFUZW1wb3JhbCA9IGFzeW5jIChkYWdlclpvbmVMYXllciwgcmllc2dvOiBTdHJpbmcpID0+IHtcclxuICAgIHNldFNob3dCdWZmZXIodHJ1ZSk7XHJcbiAgICBjb25zdCBbU2tldGNoLCBHcmFwaGljc0xheWVyLCBTaW1wbGVGaWxsU3ltYm9sXSA9IGF3YWl0IGxvYWRNb2R1bGVzKFtcclxuICAgICAgXCJlc3JpL3dpZGdldHMvU2tldGNoXCIsXHJcbiAgICAgIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiLFxyXG4gICAgICBcImVzcmkvc3ltYm9scy9TaW1wbGVGaWxsU3ltYm9sXCIsXHJcbiAgICBdKTtcclxuXHJcbiAgICAvLyBDcmVhciB1bmEgY2FwYSBncsOhZmljYSB0ZW1wb3JhbFxyXG4gICAgY29uc3QgdGVtcEdyYXBoaWNzTGF5ZXIgPSBuZXcgR3JhcGhpY3NMYXllcih7XHJcbiAgICAgIGlkOiBcInRlbXBHcmFwaGljc0xheWVyXCIsXHJcbiAgICAgIHRpdGxlOiB0KFwiYnVmZmVyTGF5ZXJcIiksXHJcbiAgICB9KTtcclxuICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmFkZCh0ZW1wR3JhcGhpY3NMYXllcik7XHJcblxyXG4gICAgLy8gT2J0ZW5lciBsYXMgZW50aWRhZGVzIGRlIGxhIGNhcGEgb3JpZ2luYWwgeSBjb3BpYXJsYXMgYSBsYSBjYXBhIHRlbXBvcmFsXHJcbiAgICBjb25zdCBxdWVyeSA9IGRhZ2VyWm9uZUxheWVyLmNyZWF0ZVF1ZXJ5KCk7XHJcbiAgICBxdWVyeS53aGVyZSA9IFwiMT0xXCI7IC8vIFNlbGVjY2lvbmFyIHRvZG9zIGxvcyBlbGVtZW50b3NcclxuICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZTtcclxuICAgIHF1ZXJ5Lm91dFNwYXRpYWxSZWZlcmVuY2UgPSBqaW11TWFwVmlldy52aWV3LnNwYXRpYWxSZWZlcmVuY2U7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGRhZ2VyWm9uZUxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xyXG4gICAgcmVzdWx0cy5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdyYXBoaWMgPSBmZWF0dXJlLmNsb25lKCk7XHJcbiAgICAgIGdyYXBoaWMuc3ltYm9sID0gbmV3IFNpbXBsZUZpbGxTeW1ib2woe1xyXG4gICAgICAgIGNvbG9yOiByaWVzZ28gPT09IFwiaW5jZW5kaW9cIiA/IFsyNTUsIDI1NSwgMCwgMC44XSA6IFswLCAwLCAyNTUsIDAuNV0sXHJcbiAgICAgICAgb3V0bGluZTogbnVsbCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0ZW1wR3JhcGhpY3NMYXllci5hZGQoZ3JhcGhpYyk7XHJcbiAgICAgIHRlbXBHcmFwaGljc0xheWVyLmxpc3RNb2RlID0gXCJoaWRlXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDb25maWd1cmFyIGVsIFNrZXRjaCBwYXJhIHRyYWJhamFyIGNvbiBsYSBjYXBhIHRlbXBvcmFsXHJcbiAgICBjb25zdCBza2V0Y2hFZGl0ID0gbmV3IFNrZXRjaCh7XHJcbiAgICAgIHZpZXc6IGppbXVNYXBWaWV3LnZpZXcsXHJcbiAgICAgIGxheWVyOiB0ZW1wR3JhcGhpY3NMYXllcixcclxuICAgICAgY3JlYXRpb25Nb2RlOiBcInVwZGF0ZVwiLFxyXG4gICAgICBhdmFpbGFibGVDcmVhdGVUb29sczogW1wiXCJdLFxyXG4gICAgICBzY2FsZTogXCJtXCIsXHJcbiAgICAgIHZpc2libGVFbGVtZW50czoge1xyXG4gICAgICAgIGNyZWF0ZVRvb2xzOiBmYWxzZSxcclxuICAgICAgICBzZWxlY3Rpb25Ub29sczogZmFsc2UsXHJcbiAgICAgICAgc2V0dGluZ3NNZW51OiBmYWxzZSxcclxuICAgICAgICB1bmRvUmVkb01lbnU6IGZhbHNlLFxyXG4gICAgICAgIGR1cGxpY2F0ZUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdFVwZGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICBlbmFibGVTY2FsaW5nOiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZVJvdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgIG11bHRpcGxlU2VsZWN0aW9uRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgdG9vbDogXCJtb3ZlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIENvbmZpZ3VyYXIgZWwgY29sb3IgZGVsIG91dGxpbmUgZGUgc2VsZWNjacOzbiBlbiBjeWFuXHJcbiAgICAgIHVwZGF0ZU9uR3JhcGhpY0NsaWNrOiB0cnVlLFxyXG4gICAgICBzbmFwcGluZ09wdGlvbnM6IHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgY29udGFpbmVyOiBcIm15U2tldGNoQ29udGFpbmVyUHVudG9cIixcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFBlcnNvbmFsaXphciBlbCB0ZXh0byBkZWwgbGFiZWwgZGUgc2VsZWNjacOzbiBkZXNwdcOpcyBkZSBxdWUgZWwgU2tldGNoIHNlIHJlbmRlcmljZVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNrZXRjaENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlTa2V0Y2hDb250YWluZXJQdW50b1wiKTtcclxuXHJcbiAgICAgIGlmIChza2V0Y2hDb250YWluZXIpIHtcclxuICAgICAgICAvLyBGdW5jacOzbiBwYXJhIHJlZW1wbGF6YXIgZWwgdGV4dG8gZW4gdG9kb3MgbG9zIG5vZG9zXHJcbiAgICAgICAgY29uc3QgcmVwbGFjZVNlbGVjdGlvblRleHQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAvLyBCdXNjYXIgdG9kb3MgbG9zIGVsZW1lbnRvc1xyXG4gICAgICAgICAgY29uc3QgYWxsRWxlbWVudHMgPSBza2V0Y2hDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIipcIik7XHJcbiAgICAgICAgICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBCdXNjYXIgbm9kb3MgZGUgdGV4dG8gZGlyZWN0b3NcclxuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudD8uaW5jbHVkZXMoXCJTZWxlY2Npw7NuXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQ/LmluY2x1ZGVzKFwiU2VsZWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IG5vZGUudGV4dENvbnRlbnQucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAvU2VsZWNjacOzbnxTZWxlY3Rpb24vLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUG9sw61nb25vcyBzZWxlY2Npb25hZG9zXCJcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gQnVzY2FyIHBvciBzZWxlY3RvcmVzIGVzcGVjw61maWNvcyBkZWwgU2tldGNoXHJcbiAgICAgICAgICBjb25zdCBsYWJlbHMgPSBza2V0Y2hDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgXCIuZXNyaS1za2V0Y2hfX3BhbmVsLWxhYmVsLCAuZXNyaS1za2V0Y2hfX3NlY3Rpb24tbGFiZWwsIC5lc3JpLXNrZXRjaF9faGVhZGluZy10ZXh0XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBsYWJlbHMuZm9yRWFjaCgobGFiZWw6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudD8uaW5jbHVkZXMoXCJTZWxlY2Npw7NuXCIpIHx8XHJcbiAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQ/LmluY2x1ZGVzKFwiU2VsZWN0aW9uXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWwudGV4dENvbnRlbnQucmVwbGFjZShcclxuICAgICAgICAgICAgICAgIC9TZWxlY2Npw7NufFNlbGVjdGlvbi8sXHJcbiAgICAgICAgICAgICAgICBcIlBvbMOtZ29ub3Mgc2VsZWNjaW9uYWRvc1wiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gRWplY3V0YXIgaW5tZWRpYXRhbWVudGVcclxuICAgICAgICByZXBsYWNlU2VsZWN0aW9uVGV4dCgpO1xyXG5cclxuICAgICAgICAvLyBPYnNlcnZhciBjYW1iaW9zXHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgICByZXBsYWNlU2VsZWN0aW9uVGV4dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2tldGNoQ29udGFpbmVyLCB7XHJcbiAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG4gICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgNTAwKTtcclxuXHJcbiAgICAvLyBBcGxpY2FyIGNvbG9yIGN5YW4gYWwgb3V0bGluZSBkZSBzZWxlY2Npw7NuIGRlbCBTa2V0Y2hcclxuICAgIC8vIEFjY2VkZXIgYSBsYSBjYXBhIGludGVybmEgZGUgZ3LDoWZpY29zIGRlbCBTa2V0Y2ggcGFyYSBtb2RpZmljYXIgbG9zIHPDrW1ib2xvc1xyXG5cclxuICAgIC8vIENhcHR1cmFyIGVsIHBvbMOtZ29ubyBzZWxlY2Npb25hZG9cclxuICAgIHNrZXRjaEVkaXQub24oXCJ1cGRhdGVcIiwgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5zdGF0ZSA9PT0gXCJhY3RpdmVcIiB8fCBldmVudC5zdGF0ZSA9PT0gXCJzdGFydFwiKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZXZlbnQuZ3JhcGhpY3MgJiZcclxuICAgICAgICAgIGV2ZW50LmdyYXBoaWNzWzBdLmdlb21ldHJ5LnR5cGUgPT09IFwicG9seWdvblwiIC8vIFZlcmlmaWNhciBxdWUgZXMgdW4gcG9sw61nb25vXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjb25zdCBwb2x5Z29uR2VvbWV0cnkgPSBldmVudC5ncmFwaGljc1swXS5nZW9tZXRyeTtcclxuXHJcbiAgICAgICAgICBzZXRTZWxlY3RlZFBvbHlnb24ocG9seWdvbkdlb21ldHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVqZWN1dGFyQnVmZmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFzZWxlY3RlZFBvbHlnb24pIHtcclxuICAgICAgdG9hc3Qud2FybmluZyh0KFwiYnVmZmVyV2FybmluZ1wiKSwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9hZGluZ0J1ZmZlcih0cnVlKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBbZ2VvbWV0cnlFbmdpbmUsIEdyYXBoaWNdID0gYXdhaXQgbG9hZE1vZHVsZXMoW1xyXG4gICAgICAgIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiLFxyXG4gICAgICAgIFwiZXNyaS9HcmFwaGljXCIsXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgLy8gQ29udmVydGlyIGVsIHZhbG9yIGRlbCBpbnB1dCBhIG7Dum1lcm8gKGRpc3RhbmNpYSBkZWwgYnVmZmVyKVxyXG4gICAgICBjb25zdCBidWZmZXJEaXN0YW5jZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgIFwiaW5wdXRCdWZmZXJcIlxyXG4gICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlS20gPSBwYXJzZUZsb2F0KGJ1ZmZlckRpc3RhbmNlLnZhbHVlKTtcclxuICAgICAgY29uc3QgZGlzdGFuY2VNZXRlcnMgPSBkaXN0YW5jZUttICogMTAwMDtcclxuXHJcbiAgICAgIC8vU2UgZWxpbWluYXIgZWwgYnVmZmVyIGFudGVyaW9yXHJcbiAgICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3O1xyXG4gICAgICB2aWV3LmdyYXBoaWNzLml0ZW1zXHJcbiAgICAgICAgLmZpbHRlcigoZykgPT4gZy5hdHRyaWJ1dGVzPy5pZCA9PT0gXCJidWZmZXJfRElcIilcclxuICAgICAgICAuZm9yRWFjaCgoZykgPT4gdmlldy5ncmFwaGljcy5yZW1vdmUoZykpO1xyXG5cclxuICAgICAgLy8gR2VuZXJhciBlbCBidWZmZXIgY29uIGxhIGRpc3RhbmNpYSBpbmdyZXNhZGFcclxuICAgICAgY29uc3QgYnVmZmVyR2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoXHJcbiAgICAgICAgc2VsZWN0ZWRQb2x5Z29uLFxyXG4gICAgICAgIGRpc3RhbmNlTWV0ZXJzLFxyXG4gICAgICAgIFwibWV0ZXJzXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIENhbGN1bGFyIMOhcmVhIGRlbCBidWZmZXIgZW4gbcKyXHJcbiAgICAgIGNvbnN0IGFyZWFCdWZmZXIgPSBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0FyZWEoXHJcbiAgICAgICAgYnVmZmVyR2VvbWV0cnksXHJcbiAgICAgICAgXCJzcXVhcmUtbWV0ZXJzXCJcclxuICAgICAgKTtcclxuICAgICAgc2V0QXJlYUJ1ZmZlcihhcmVhQnVmZmVyKTtcclxuXHJcbiAgICAgIC8vIENyZWFyIHVuIGdyw6FmaWNvIHBhcmEgZWwgYnVmZmVyIHkgYWdyZWdhcmxvIGFsIG1hcGFcclxuICAgICAgY29uc3QgYnVmZmVyR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICBnZW9tZXRyeTogYnVmZmVyR2VvbWV0cnksXHJcbiAgICAgICAgc3ltYm9sOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInNpbXBsZS1maWxsXCIsXHJcbiAgICAgICAgICBjb2xvcjogWzI1NSwgMCwgMCwgMC4xXSxcclxuICAgICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgICAgY29sb3I6IFsyNTUsIDAsIDBdLFxyXG4gICAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBpZDogXCJidWZmZXJfRElcIiwgLy8gSUQgw7puaWNvIGJhc2FkbyBlbiB0aW1lc3RhbXBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldEJ1ZmZlcihidWZmZXJHcmFwaGljKTtcclxuXHJcbiAgICAgIHZpZXcuZ3JhcGhpY3MuYWRkKGJ1ZmZlckdyYXBoaWMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIGdlbmVyYXIgZWwgYnVmZmVyOlwiLCBlcnJvcik7XHJcbiAgICAgIHRvYXN0LmVycm9yKHQoXCJidWZmZXJFcnJvclwiKSwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZ0J1ZmZlcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGlidWphckxpbmVhc1Byb3hpbWlkYWQgPSBhc3luYyAoXHJcbiAgICB0b3VjaGluZ1BvbHlnb24sXHJcbiAgICBnZW9tZXRyaWVzSW5CdWZmZXJcclxuICApID0+IHtcclxuICAgIGlmICghdG91Y2hpbmdQb2x5Z29uIHx8IGdlb21ldHJpZXNJbkJ1ZmZlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiTm8gaGF5IGdlb21ldHLDrWFzIHBhcmEgY29uZWN0YXIuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2dlb21ldHJ5RW5naW5lLCBQb2x5bGluZSwgR3JhcGhpYywgR3JhcGhpY3NMYXllcl0gPVxyXG4gICAgICBhd2FpdCBsb2FkTW9kdWxlcyhbXHJcbiAgICAgICAgXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIsXHJcbiAgICAgICAgXCJlc3JpL2dlb21ldHJ5L1BvbHlsaW5lXCIsXHJcbiAgICAgICAgXCJlc3JpL0dyYXBoaWNcIixcclxuICAgICAgICBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIixcclxuICAgICAgXSk7XHJcblxyXG4gICAgLy8gQ3JlYXIgbyBsaW1waWFyIGxhIGNhcGEgZGUgbMOtbmVhcyBkZSBwcm94aW1pZGFkXHJcbiAgICBsZXQgbGluZUxheWVyID0gamltdU1hcFZpZXcudmlldy5tYXAuZmluZExheWVyQnlJZChcInByb3hpbWl0eUxpbmVzTGF5ZXJcIik7XHJcbiAgICBpZiAoIWxpbmVMYXllcikge1xyXG4gICAgICBsaW5lTGF5ZXIgPSBuZXcgR3JhcGhpY3NMYXllcih7XHJcbiAgICAgICAgaWQ6IFwicHJveGltaXR5TGluZXNMYXllclwiLFxyXG4gICAgICAgIHRpdGxlOiB0KFwicHJveGltaXR5TGF5ZXJcIiksXHJcbiAgICAgIH0pO1xyXG4gICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobGluZUxheWVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPYnRlbmVyIGNlbnRyb2lkZSBkZWwgcG9sw61nb25vIGNlbnRyYWxcclxuICAgIGNvbnN0IGNlbnRyb2lkZSA9IHRvdWNoaW5nUG9seWdvbi5nZW9tZXRyeS5jZW50cm9pZDtcclxuXHJcbiAgICAvLyBEaWJ1amFyIHVuYSBsw61uZWEgZGVzZGUgZWwgY2VudHJvaWRlIGEgY2FkYSBnZW9tZXRyw61hIGVuIGdlb21ldHJpZXNJbkJ1ZmZlclxyXG5cclxuICAgIGdlb21ldHJpZXNJbkJ1ZmZlci5mb3JFYWNoKChnZW9tZXRyeSkgPT4ge1xyXG4gICAgICBsZXQgZGVzdGlubztcclxuXHJcbiAgICAgIGlmIChnZW9tZXRyeS5jZW50cm9pZCkge1xyXG4gICAgICAgIGRlc3Rpbm8gPSBnZW9tZXRyeS5jZW50cm9pZDsgLy8gU2kgbGEgZ2VvbWV0csOtYSB0aWVuZSBjZW50cm9pZGUsIHVzYXJsb1xyXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5LmV4dGVudCkge1xyXG4gICAgICAgIGRlc3Rpbm8gPSBnZW9tZXRyeS5leHRlbnQuY2VudGVyOyAvLyBTaSB0aWVuZSBgZXh0ZW50YCwgdXNhciBzdSBjZW50cm9cclxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeS50eXBlID09PSBcInBvaW50XCIpIHtcclxuICAgICAgICBkZXN0aW5vID0gZ2VvbWV0cnk7IC8vIFNpIGVzIHVuIHB1bnRvLCB1c2FybG8gZGlyZWN0YW1lbnRlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiR2VvbWV0csOtYSBzaW4gY2VudHJvaWRlIG5pIGV4dGVudCwgaWdub3JhbmRvOlwiLCBnZW9tZXRyeSk7XHJcbiAgICAgICAgcmV0dXJuOyAvLyBJZ25vcmFyIGxhIGdlb21ldHLDrWEgc2kgbm8gdGllbmUgY2VudHJvaWRlLCBleHRlbnQgbmkgZXMgdW4gcHVudG9cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbGluZUdlb21ldHJ5ID0gbmV3IFBvbHlsaW5lKHtcclxuICAgICAgICBwYXRoczogW1xyXG4gICAgICAgICAgW2NlbnRyb2lkZS54LCBjZW50cm9pZGUueV0sXHJcbiAgICAgICAgICBbZGVzdGluby54LCBkZXN0aW5vLnldLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogamltdU1hcFZpZXcudmlldy5zcGF0aWFsUmVmZXJlbmNlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlTWV0ZXJzID0gZ2VvbWV0cnlFbmdpbmUuZ2VvZGVzaWNMZW5ndGgoXHJcbiAgICAgICAgbGluZUdlb21ldHJ5LFxyXG4gICAgICAgIFwibWV0ZXJzXCJcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGlzdGFuY2VLaWxvbWV0ZXJzID0gZGlzdGFuY2VNZXRlcnMgLyAxMDAwO1xyXG5cclxuICAgICAgY29uc3QgbGluZUdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7XHJcbiAgICAgICAgZ2VvbWV0cnk6IGxpbmVHZW9tZXRyeSxcclxuICAgICAgICBzeW1ib2w6IHtcclxuICAgICAgICAgIHR5cGU6IFwic2ltcGxlLWxpbmVcIixcclxuICAgICAgICAgIGNvbG9yOiBbMCwgMCwgMjU1XSwgLy8gQXp1bFxyXG4gICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBkaXN0YW5jZV9tOiBkaXN0YW5jZU1ldGVycy50b0ZpeGVkKDIpLFxyXG4gICAgICAgICAgZGlzdGFuY2Vfa206IGRpc3RhbmNlS2lsb21ldGVycy50b0ZpeGVkKDIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9wdXBUZW1wbGF0ZToge1xyXG4gICAgICAgICAgdGl0bGU6IHQoXCJwcm94aW1pdHlMYXllclwiKSxcclxuICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgIFwiPGI+TXRzOjwvYj5cIiArXHJcbiAgICAgICAgICAgIGRpc3RhbmNlTWV0ZXJzLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICBcIm08YnI+PGI+S21zOjwvYj4gXCIgK1xyXG4gICAgICAgICAgICBkaXN0YW5jZUtpbG9tZXRlcnMudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwiIGttXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsaW5lTGF5ZXIuYWRkKGxpbmVHcmFwaGljKTtcclxuICAgICAgbGluZUxheWVyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICBsaW5lTGF5ZXIubGlzdE1vZGUgPSBcInNob3dcIjtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFwcGx5UmFzdGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgY29uc3QgYnVmZmVyR2VvbWV0cnkgPSBmaW5kQnVmZmVyR2VvbWV0cnkoKTtcclxuXHJcbiAgICAgIGlmICghYnVmZmVyR2VvbWV0cnkpIHtcclxuICAgICAgICB0b2FzdC53YXJuaW5nKFwiTm8gc2UgZW5jb250csOzIGxhIGdlb21ldHLDrWEgZGVsIGJ1ZmZlclwiLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IFtnZW9tZXRyeUVuZ2luZV0gPSBhd2FpdCBsb2FkTW9kdWxlcyhbXHJcbiAgICAgICAgXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIsXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgY29uc3QgdGVtcEdyYXBoaWNzTGF5ZXIgPVxyXG4gICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmZpbmRMYXllckJ5SWQoXCJ0ZW1wR3JhcGhpY3NMYXllclwiKTtcclxuXHJcbiAgICAgIGlmICghdGVtcEdyYXBoaWNzTGF5ZXIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTGEgY2FwYSAndGVtcEdyYXBoaWNzTGF5ZXInIG5vIGV4aXN0ZS5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0b3VjaGluZ1BvbHlnb24gPSB0ZW1wR3JhcGhpY3NMYXllci5ncmFwaGljcy5pdGVtcy5maW5kKFxyXG4gICAgICAgIChncmFwaGljKSA9PlxyXG4gICAgICAgICAgZ3JhcGhpYy5nZW9tZXRyeS50eXBlID09PSBcInBvbHlnb25cIiAmJiAvLyBTb2xvIHBvbMOtZ29ub3NcclxuICAgICAgICAgIGdlb21ldHJ5RW5naW5lLmludGVyc2VjdHMoZ3JhcGhpYy5nZW9tZXRyeSwgc2VsZWN0ZWRQb2x5Z29uKSAvLyBWZXJpZmljYXIgaW50ZXJzZWNjacOzblxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKCF0b3VjaGluZ1BvbHlnb24pIHtcclxuICAgICAgICB0b2FzdC53YXJuaW5nKFwiTm8gc2UgZW5jb250csOzIGVsIHBvbMOtZ29ubyBzZWxlY2Npb25hZG9cIiwge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCdXNjYXIgbGEgY2FwYSBkZSBsw61taXRlIHVyYmFubyBxdWUgeWEgZXN0w6EgZW4gZWwgbWFwYVxyXG4gICAgICBsZXQgdXJiYW5MaW1pdCA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmxheWVycy5maW5kKFxyXG4gICAgICAgIChsYXllcikgPT4gbGF5ZXIuaWQgPT09IFwidXJiYW5MaW1pdExheWVyXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICghdXJiYW5MaW1pdCkge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiTm8gc2UgZW5jb250csOzIGxhIGNhcGEgZGUgbMOtbWl0ZSB1cmJhbm9cIiwge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1cmJhbkxpbWl0LnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgbGV0IGdlb21ldHJpZXNJbkJ1ZmZlciA9IFtdO1xyXG5cclxuICAgICAgY29uc3QgcXVlcnkgPSB1cmJhbkxpbWl0LmNyZWF0ZVF1ZXJ5KCk7XHJcbiAgICAgIHF1ZXJ5Lmdlb21ldHJ5ID0gYnVmZmVyR2VvbWV0cnk7IC8vIEJ1c2NhciBkZW50cm8gZGVsIGJ1ZmZlclxyXG4gICAgICBxdWVyeS5zcGF0aWFsUmVsYXRpb25zaGlwID0gXCJpbnRlcnNlY3RzXCI7IC8vIEludGVyc2VjY2nDs24gY29uIGVsIGJ1ZmZlclxyXG4gICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWU7XHJcbiAgICAgIHF1ZXJ5Lm91dFNwYXRpYWxSZWZlcmVuY2UgPSBqaW11TWFwVmlldy52aWV3LnNwYXRpYWxSZWZlcmVuY2U7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIEVzcGVyYXIgYSBxdWUgbGEgY2FwYSBlc3TDqSBjb21wbGV0YW1lbnRlIGNhcmdhZGFcclxuICAgICAgICBhd2FpdCB1cmJhbkxpbWl0LmxvYWQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHVyYmFuTGltaXQucXVlcnlGZWF0dXJlcyhxdWVyeSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gc2UgZW5jb250cmFyb24gZ2VvbWV0csOtYXMgZGVudHJvIGRlbCBidWZmZXJcIik7XHJcbiAgICAgICAgICB0b2FzdC53YXJuaW5nKFxyXG4gICAgICAgICAgICBcIk5vIHNlIGVuY29udHJhcm9uIGzDrW1pdGVzIHVyYmFub3MgZW4gZWwgw6FyZWEgZGVsIGJ1ZmZlclwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzdWx0cy5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgIGdlb21ldHJpZXNJbkJ1ZmZlci5wdXNoKGZlYXR1cmUuZ2VvbWV0cnkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgU2UgZW5jb250cmFyb24gJHtnZW9tZXRyaWVzSW5CdWZmZXIubGVuZ3RofSBnZW9tZXRyw61hc2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBjb25zdWx0YW5kbyBsYSBjYXBhOiBgLCBlcnJvcik7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvciBhbCBjb25zdWx0YXIgZWwgbMOtbWl0ZSB1cmJhbm9cIiwge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodG91Y2hpbmdQb2x5Z29uICYmIGdlb21ldHJpZXNJbkJ1ZmZlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZGlidWphckxpbmVhc1Byb3hpbWlkYWQodG91Y2hpbmdQb2x5Z29uLCBnZW9tZXRyaWVzSW5CdWZmZXIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJpZXNJbkJ1ZmZlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAvLyBZYSBzZSBtb3N0csOzIGVsIHdhcm5pbmcgYXJyaWJhXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IodChcInVyYmFuTGltaXRzRXJyb3JcIiksIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gPCEtLS0tLS0tLSBIZWxwZXJzIC0tLS0tLS0tLS0tLS0+XHJcbiAgLy9MaW1waWEgbGFzIGNhcGFzIGdlbmVyYWRhcyBzaSBzZSBjYW1iaWEgbGFzIGltYWdlbmVzIHNlbGVjY2lvbmFkYXNcclxuICBjb25zdCBjbGVhbkxheWVycyA9ICh0aXRsZTogU3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgY29uc3QgbGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZmluZChcclxuICAgICAgICAobGF5ZXIpID0+IGxheWVyLnRpdGxlID09IHRpdGxlXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgIC8vIE9jdWx0YSB0b2RhcyBsYXMgY2FwYXMgZGUgc2Vuc29yZXMgcG9yIGRlZmVjdG9cclxuICAgICAgICBsYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gRXN0byBvY3VsdGEgbGEgY2FwYSBkZWwgd2lkZ2V0IGRlIGNhcGFzIChMYXllckxpc3QpXHJcbiAgICAgICAgbGF5ZXIubGlzdE1vZGUgPSBcImhpZGVcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVtb3ZlTGF5ZXIgPSAodGl0bGU6IFN0cmluZykgPT4ge1xyXG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgIGNvbnN0IGxheWVyID0gamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZpbmQoXHJcbiAgICAgICAgKGxheWVyKSA9PiBsYXllci50aXRsZSA9PSB0aXRsZVxyXG4gICAgICApO1xyXG4gICAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUobGF5ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlTGF5ZXJCeUlkID0gKGlkOiBTdHJpbmcpID0+IHtcclxuICAgIGlmIChqaW11TWFwVmlldykge1xyXG4gICAgICBjb25zdCBsYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5maW5kKFxyXG4gICAgICAgIChsYXllcikgPT4gbGF5ZXIuaWQgPT0gaWRcclxuICAgICAgKTtcclxuICAgICAgaWYgKGxheWVyKSB7XHJcbiAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGxheWVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZW1vdmVMYXllcihcInRlbXBHcmFwaGljc0xheWVyXCIpO1xyXG4gICAgcmVtb3ZlTGF5ZXIodChcImZpcmVMYXllclwiKSk7XHJcbiAgICByZW1vdmVMYXllcih0KFwiZmxvb2RMYXllclwiKSk7XHJcbiAgICByZW1vdmVMYXllcih0KFwiYnVmZmVyTGF5ZXJcIikpO1xyXG4gICAgcmVtb3ZlTGF5ZXIodChcInByb3hpbWl0eUxheWVyXCIpKTtcclxuICAgIHJlbW92ZUxheWVyQnlJZChcInVyYmFuTGltaXRMYXllclwiKTsgLy8gRWxpbWluYXIgbGEgY2FwYSBkZSBsw61taXRlIHVyYmFub1xyXG4gICAgc2V0U2hvd0J1ZmZlcihmYWxzZSk7XHJcbiAgICBzZXRTZWxlY3RlZFBvbHlnb24obnVsbCk7XHJcbiAgfSwgW3NlbGVjdGVkSW1hZ2VyaWVzLCBnZW9wcm9jZXNzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0IHByb3hpbWl0eS13aWRnZXRcIj5cclxuICAgICAge3Byb3BzLnVzZU1hcFdpZGdldElkcyAmJiBwcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcclxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17YWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm94aW1pdHktbWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxUaXRsZVdpdGhUb29sdGlwXHJcbiAgICAgICAgICAgIHRpdGxlPXt0KFwid2lkZ2V0TGFiZWxcIil9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KFwiZGVzY3JpcHRpb25cIil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm94aW1pdHktY29udGVudFwiPlxyXG4gICAgICAgICAgICB7c2hvd0J1ZmZlciA9PT0gZmFsc2UgJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8cD57dChcImRlc2NyaXB0aW9uXCIpfTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJveGltaXR5LWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAge2xvYWRpbmdJbmNlbmRpbyA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyB0eXBlPVwiRE9OVVRcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzdGFydERBKFwiaW5jZW5kaW9cIil9IHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoXCJpbmNlbmRpb1wiKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAge2xvYWRpbmdJbnVuZGFjaW9uID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIHR5cGU9XCJET05VVFwiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdGFydERBKFwiaW51bmRhY2lvblwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoXCJpbnVuZGFjaW9uXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtzaG93QnVmZmVyID09PSB0cnVlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3hpbWl0eS1idWZmZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJteVNrZXRjaENvbnRhaW5lclB1bnRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3hpbWl0eS1idWZmZXItYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8cD57dChcImJ1ZmZlckxhYmVsXCIpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm94aW1pdHktYnVmZmVyLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0QnVmZmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtidWZmZXJEaXN0YW5jZX0gLy8gVXNhIGVsIGVzdGFkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUJ1ZmZlckNoYW5nZX0gLy8gTWFuZWphIGxvcyBjYW1iaW9zXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5LbTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2VqZWN1dGFyQnVmZmVyfSBzaXplPVwic21cIiB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KFwiZ2VuZXJhckJ1ZmZlclwiKX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthcHBseVJhc3RlckZ1bmN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoXCJkaWJ1amFyTGluZWFzXCIpfVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldDtcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==