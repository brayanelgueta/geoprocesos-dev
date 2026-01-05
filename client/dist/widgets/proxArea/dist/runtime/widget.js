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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useLocale */ "./your-extensions/hooks/useLocale.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./translations */ "./your-extensions/widgets/proxArea/src/runtime/translations.ts");
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
    const { t } = (0,_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__.useLocale)(_translations__WEBPACK_IMPORTED_MODULE_7__.translations);
    const selectedSensor = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedSensor; });
    const selectedImageries = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedImages; });
    const geoprocess = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.geoprocess; });
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
    const cargarGeometriaEnMapa = (geojsonFileName, proceso) => __awaiter(void 0, void 0, void 0, function* () {
        if (!jimuMapView)
            return;
        if (!geojsonFileName) {
            throw new Error("No se recibió un nombre de archivo válido.");
        }
        try {
            // Obtener la URL base dinámicamente
            // const baseUrl = window.location.origin;
            const baseUrl = "http://127.0.0.1:5000";
            const queryUrl = String(baseUrl + geojsonFileName);
            const layerResponse = yield fetch(queryUrl);
            if (!layerResponse.ok) {
                throw new Error(`Error al consultar la capa: ${layerResponse.status} ${layerResponse.statusText}`);
            }
            const geojsonData = yield layerResponse.json();
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
            geojsonData.features.forEach((feature) => {
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
        var _a;
        setLoadingIncendio(true);
        if (jimuMapView) {
            try {
                let imagen1 = (_a = selectedImageries[0]) === null || _a === void 0 ? void 0 : _a.OBJECTID;
                // Construir la URL con los parámetros
                const proceso = 2;
                const entrada = imagen1;
                //Desarrollo
                const response = yield fetch(`http://127.0.0.1:5000/proxy?proceso=${proceso}&Entrada=${entrada}&url=${selectedSensor.url}`, {
                    method: "GET",
                }).finally(() => {
                    setLoadingIncendio(false);
                });
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
                    setLoadingIncendio(false);
                }
                const responseData = yield response.json();
                const urlLayer = responseData.PoligonGeoJson;
                yield cargarGeometriaEnMapa(urlLayer, proceso);
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
            }
        }
    });
    const inundacion = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
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
            const entrada = imagen1;
            //Desarrollo
            const response = yield fetch(`http://127.0.0.1:5000/proxy?proceso=${proceso}&Entrada=${entrada}&url=${selectedSensor.url}`, {
                method: "GET",
            }).finally(() => {
                setLoadingInundacion(false);
            });
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
                setLoadingInundacion(false);
            }
            const responseData = yield response.json();
            const urlLayer = responseData.PoligonGeoJson;
            console.log({ urlLayer });
            yield cargarGeometriaEnMapa(urlLayer, proceso);
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
            if (!bufferGeometry)
                return;
            const [geometryEngine, Point] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_3__.loadModules)([
                "esri/geometry/geometryEngine",
                "esri/geometry/Point",
            ]);
            const centroid = new Point({
                x: bufferGeometry.extent.center.longitude,
                y: bufferGeometry.extent.center.latitude,
                spatialReference: bufferGeometry.spatialReference,
            });
            const tempGraphicsLayer = jimuMapView.view.map.findLayerById("tempGraphicsLayer");
            if (!tempGraphicsLayer) {
                console.error("La capa 'tempGraphicsLayer' no existe.");
                return;
            }
            const touchingPolygon = tempGraphicsLayer.graphics.items.find((graphic) => graphic.geometry.type === "polygon" && // Solo polígonos
                geometryEngine.intersects(graphic.geometry, selectedPolygon) // Verificar intersección
            );
            const urbanLimit = jimuMapView.view.map.layers.find((layer) => layer.title === "Límite urbano Plan Regulador Comunal");
            urbanLimit.visible = true;
            // Obtener todas las capas visibles del mapa
            const visibleLayers = jimuMapView.view.map.layers.filter((layer) => layer.visible &&
                layer.type === "feature" &&
                layer.title !== t("fireLayer") &&
                layer.title !== t("floodLayer"));
            let geometriesInBuffer = [];
            const query = urbanLimit.createQuery();
            query.geometry = bufferGeometry; // Buscar dentro del buffer
            query.spatialRelationship = "intersects"; // Intersección con el buffer
            query.returnGeometry = true;
            try {
                const results = yield urbanLimit.queryFeatures(query);
                results.features.forEach((feature) => {
                    geometriesInBuffer.push(feature.geometry);
                });
            }
            catch (error) {
                console.error(`Error consultando la capa `, error);
            }
            if (touchingPolygon && visibleLayers) {
                dibujarLineasProximidad(touchingPolygon, geometriesInBuffer);
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
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        removeLayer("tempGraphicsLayer");
        removeLayer(t("fireLayer"));
        removeLayer(t("floodLayer"));
        removeLayer(t("bufferLayer"));
        removeLayer(t("proximityLayer"));
        cleanLayers("Límite urbano Plan Regulador Comunal");
        setShowBuffer(false);
        setSelectedPolygon(null);
    }, [selectedImageries, geoprocess]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "jimu-widget proximity-widget" },
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler })),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "proximity-main-content" },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, null),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h4", null, t("widgetLabel")),
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
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Kms")),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wcm94QXJlYS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQ2pCO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDZSQUE2UixNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sV0FBVyxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyw0Q0FBNEMscUJBQXFCLDhCQUE4QixnQkFBZ0IsaUJBQWlCLHlCQUF5QixxQkFBcUIsaUJBQWlCLEdBQUcsNkJBQTZCLGtCQUFrQixpQkFBaUIsR0FBRyx3QkFBd0Isa0JBQWtCLDJCQUEyQixtQ0FBbUMsd0JBQXdCLGdCQUFnQixzQkFBc0IsT0FBTyxzQkFBc0IsbUJBQW1CLEtBQUssR0FBRyx3QkFBd0IsZ0JBQWdCLGtCQUFrQixZQUFZLGdDQUFnQyxjQUFjLDJCQUEyQixtQkFBbUIsbUJBQW1CLGdDQUFnQyxvQ0FBb0MsZUFBZSxrQ0FBa0MsNkNBQTZDLGlEQUFpRCxPQUFPLEtBQUssR0FBRyw2QkFBNkIsa0JBQWtCLDRCQUE0QixhQUFhLHdCQUF3QixnQkFBZ0IsV0FBVyxpQkFBaUIsc0JBQXNCLDZCQUE2QixnQ0FBZ0MsbUJBQW1CLGdDQUFnQyxlQUFlLDhCQUE4QixpREFBaUQsc0JBQXNCLE9BQU8sS0FBSyxPQUFPLGlCQUFpQix1QkFBdUIsZ0JBQWdCLHNCQUFzQixtQkFBbUIsS0FBSyxHQUFHLHVCQUF1QixnQkFBZ0Isa0JBQWtCLG1DQUFtQyx3QkFBd0IsNkJBQTZCLG9CQUFvQixzQkFBc0IsaUJBQWlCLHVCQUF1Qiw4QkFBOEIseUJBQXlCLGdDQUFnQyxrQkFBa0IsS0FBSywrQkFBK0Isb0JBQW9CLDZCQUE2QixlQUFlLDJCQUEyQixjQUFjLGtDQUFrQyw2QkFBNkIsdUJBQXVCLDRCQUE0QixrQ0FBa0Msb0JBQW9CLGlCQUFpQixvQ0FBb0MsK0NBQStDLG1EQUFtRCxTQUFTLE9BQU8sS0FBSyxHQUFHLHVJQUF1SSw0QkFBNEIsaUNBQWlDLDRDQUE0QyxHQUFHLHdJQUF3SSxtQ0FBbUMsR0FBRyx3SUFBd0ksdUNBQXVDLEdBQUcsOEdBQThHLCtCQUErQix1QkFBdUIsR0FBRyxxSUFBcUksaUJBQWlCLEdBQUcsK0VBQStFLG9CQUFvQiwyQ0FBMkMsbUJBQW1CLHNCQUFzQixHQUFHLHNCQUFzQixxQkFBcUIsOEJBQThCLGdCQUFnQixpQkFBaUIseUJBQXlCLHFCQUFxQixpQkFBaUIsR0FBRyw2QkFBNkIsa0JBQWtCLGlCQUFpQixHQUFHLHdCQUF3QixrQkFBa0IsMkJBQTJCLG1DQUFtQyx3QkFBd0IsZ0JBQWdCLHNCQUFzQixPQUFPLHNCQUFzQixtQkFBbUIsS0FBSyxHQUFHLHdCQUF3QixnQkFBZ0Isa0JBQWtCLFlBQVksZ0NBQWdDLGNBQWMsMkJBQTJCLG1CQUFtQixtQkFBbUIsZ0NBQWdDLG9DQUFvQyxlQUFlLGtDQUFrQyw2Q0FBNkMsaURBQWlELE9BQU8sS0FBSyxHQUFHLDZCQUE2QixrQkFBa0IsNEJBQTRCLGFBQWEsd0JBQXdCLGdCQUFnQixXQUFXLGlCQUFpQixzQkFBc0IsNkJBQTZCLGdDQUFnQyxtQkFBbUIsZ0NBQWdDLGVBQWUsOEJBQThCLGlEQUFpRCxzQkFBc0IsT0FBTyxLQUFLLE9BQU8saUJBQWlCLHVCQUF1QixnQkFBZ0Isc0JBQXNCLG1CQUFtQixLQUFLLEdBQUcsdUJBQXVCLGdCQUFnQixrQkFBa0IsbUNBQW1DLHdCQUF3Qiw2QkFBNkIsb0JBQW9CLHNCQUFzQixpQkFBaUIsdUJBQXVCLDhCQUE4Qix5QkFBeUIsZ0NBQWdDLGtCQUFrQixLQUFLLCtCQUErQixvQkFBb0IsNkJBQTZCLGVBQWUsMkJBQTJCLGNBQWMsa0NBQWtDLDZCQUE2Qix1QkFBdUIsNEJBQTRCLGtDQUFrQyxvQkFBb0IsaUJBQWlCLG9DQUFvQywrQ0FBK0MsbURBQW1ELFNBQVMsT0FBTyxLQUFLLEdBQUcsdUlBQXVJLDRCQUE0QixpQ0FBaUMsNENBQTRDLEdBQUcsd0lBQXdJLG1DQUFtQyxHQUFHLHdJQUF3SSx1Q0FBdUMsR0FBRyw4R0FBOEcsK0JBQStCLHVCQUF1QixHQUFHLHFJQUFxSSxpQkFBaUIsR0FBRywrRUFBK0Usb0JBQW9CLDJDQUEyQyxtQkFBbUIsc0JBQXNCLEdBQUcsbUJBQW1CO0FBQ3A4UDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUN2SjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7QUFDTTtBQUNzQztBQUN4QztBQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJqQjtBQUNBO0FBQzJEO0FBQ3pCO0FBQ2xDO0FBQ0E7QUFDQSxlQUFlLG9EQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asd0NBQXdDO0FBQ3hDLFNBQVMsaURBQVE7QUFDakI7QUFDQSxxQkFBcUIsa0RBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbURBQVUsdUNBQXVDLGlDQUFpQztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNzQztBQUNKO0FBQ007QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBCQUEwQixxREFBUztBQUNuQyxlQUFlLG9EQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtREFBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFDQTtBQUNtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrREFBWTtBQUN4QztBQUNBLFVBQVUsa0RBQVk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0FBQ2Y7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05GO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQSxNQUE4RztBQUM5RyxNQUFvRztBQUNwRyxNQUEyRztBQUMzRyxNQUE4SDtBQUM5SCxNQUF1SDtBQUN2SCxNQUF1SDtBQUN2SCxNQUF3VDtBQUN4VDtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRPQUFPOzs7O0FBSWtRO0FBQzFSLE9BQU8saUVBQWUsNE9BQU8sSUFBSSw0T0FBTyxVQUFVLDRPQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYmdDO0FBRXpCLFNBQVMsU0FBUyxDQUFDLFlBQVk7SUFDcEMsNkRBQTZEO0lBQzdELE1BQU0sWUFBWSxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakUsTUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUM7SUFFbEQsTUFBTSxDQUFDLEdBQUcsOENBQU8sQ0FBQyxHQUFHLEVBQUU7UUFDckIsT0FBTyxDQUFDLEdBQW9DLEVBQUUsRUFBRSxXQUM5Qyx5QkFBWSxDQUFDLE1BQXFCLENBQUMsQ0FBQyxHQUFHLENBQUMsbUNBQUksR0FBRyxJQUFDO0lBQ3BELENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFYixPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBQ3ZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTSxNQUFNLFlBQVksR0FBRztJQUN4QixFQUFFLEVBQUU7UUFDRixXQUFXLEVBQUUsK0JBQStCO1FBQzVDLFdBQVcsRUFBRSwwSUFBMEk7UUFDdkosUUFBUSxFQUFFLFdBQVc7UUFDckIsVUFBVSxFQUFFLGNBQWM7UUFDMUIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxhQUFhLEVBQUUsNEJBQTRCO1FBQzNDLGFBQWEsRUFBRSw4QkFBOEI7UUFDN0MsV0FBVyxFQUFFLDREQUE0RDtRQUN6RSxXQUFXLEVBQUUsc0NBQXNDO1FBQ25ELFlBQVksRUFBRSx5Q0FBeUM7UUFDdkQsWUFBWSxFQUFFLHVDQUF1QztRQUNyRCxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFVBQVUsRUFBRSxpQkFBaUI7UUFDN0IsU0FBUyxFQUFFLHNEQUFzRDtRQUNqRSxVQUFVLEVBQUUsd0RBQXdEO1FBQ3BFLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsYUFBYSxFQUFFLHNDQUFzQztRQUNyRCxXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLGNBQWMsRUFBRSxzQkFBc0I7UUFDdEMsZ0JBQWdCLEVBQUUsNkNBQTZDO0tBRWhFO0lBQ0QsRUFBRSxFQUFFO1FBQ0YsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxXQUFXLEVBQUUseUdBQXlHO1FBQ3RILFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsYUFBYSxFQUFFLHNCQUFzQjtRQUNyQyxhQUFhLEVBQUUsc0JBQXNCO1FBQ3JDLFdBQVcsRUFBRSxzREFBc0Q7UUFDbkUsV0FBVyxFQUFFLHVDQUF1QztRQUNwRCxZQUFZLEVBQUUsaURBQWlEO1FBQy9ELFlBQVksRUFBRSxrREFBa0Q7UUFDaEUsU0FBUyxFQUFFLGNBQWM7UUFDekIsVUFBVSxFQUFFLGVBQWU7UUFDM0IsU0FBUyxFQUFFLHFDQUFxQztRQUNoRCxVQUFVLEVBQUUsc0NBQXNDO1FBQ2xELFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsYUFBYSxFQUFFLHVDQUF1QztRQUN0RCxXQUFXLEVBQUUsMEJBQTBCO1FBQ3ZDLGNBQWMsRUFBRSxvQkFBb0I7UUFDcEMsZ0JBQWdCLEVBQUUsZ0RBQWdEO0tBQ25FO0NBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7O0FDOUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixJQUFJLElBQXFDO0FBQ3pDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyxvQkFBTzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ25LYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUseU1BQXNGO0FBQ3hGOzs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGNBQWMsYUFBYSwrQ0FBK0MsZ0RBQWdELGVBQWUsUUFBUSxJQUFJLDBDQUEwQyx5Q0FBeUMsU0FBZ0IsZ0JBQWdCLHdDQUF3QyxJQUFJLG1EQUFtRCxTQUFTLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FuWTtBQUNnQztBQUNpRzs7QUFFakk7QUFDdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrQ0FBMEIsR0FBRyw2Q0FBd0IsR0FBRyxrQ0FBYTtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRCxZQUFZLCtDQUErQyxnREFBZ0Qsa0NBQWtDO0FBQzdJLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQXFDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RCxJQUFJO0FBQ0o7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXLFFBQVEsYUFBYSwrQ0FBK0MsTUFBTTtBQUM5RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGFBQWE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZLE1BQU0sTUFBTSxxQ0FBcUMsNkJBQTZCO0FBQ3pIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxrREFBa0Qsa0NBQWtDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUk7QUFDTixNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQSw2RkFBNkY7QUFDN0Y7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9FQUFvRTtBQUNwRjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQXFDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQSx1REFBdUQsWUFBWSwySkFBMkosYUFBYTtBQUMzTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsOEVBQThFLCtCQUErQjtBQUM3RztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSx1Q0FBdUM7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWlFLHFCQUFxQjtBQUN0RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isc0dBQWlDO0FBQ3ZELGtCQUFrQix1REFBMkI7QUFhM0M7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2htQ0E7QUFDQSxlQUFlLDJDQUEyQyxnR0FBZ0csNkpBQTZKLFVBQVUsNkJBQTZCLCtCQUErQiwrQkFBK0Isa0NBQWtDLGtDQUFrQyx5Q0FBeUMsc0RBQXNELHVEQUF1RCw2REFBNkQsNkRBQTZELHlEQUF5RCx3Q0FBd0MsOEJBQThCLDhCQUE4QixrRkFBa0Ysc0ZBQXNGLG9GQUFvRix3RkFBd0Ysa0NBQWtDLCtCQUErQixrQ0FBa0MsbUNBQW1DLGdDQUFnQyx3REFBd0QsbUNBQW1DLHlCQUF5QixxQ0FBcUMsaUNBQWlDLGlDQUFpQyxvQ0FBb0Msb0NBQW9DLGtDQUFrQyxrQ0FBa0MsNkNBQTZDLGlIQUFpSCx3Q0FBd0MsMkRBQTJELGlFQUFpRSxpRUFBaUUsNkRBQTZELGtDQUFrQywyQkFBMkIsZ0NBQWdDLDJEQUEyRCxlQUFlLHNDQUFzQyxzQkFBc0IsV0FBVyxhQUFhLHNCQUFzQixxQ0FBcUMsOEJBQThCLGdDQUFnQyx1Q0FBdUMsOEJBQThCLFNBQVMsMEJBQTBCLG1CQUFtQixzQ0FBc0MsOEJBQThCLGtDQUFrQyxnQkFBZ0Isd0NBQXdDLG9DQUFvQyxnQ0FBZ0MsMENBQTBDLG9DQUFvQyxTQUFTLDBCQUEwQixtQkFBbUIseUNBQXlDLG9DQUFvQyxrQ0FBa0MsZ0JBQWdCLGlCQUFpQixPQUFPLGtCQUFrQixrQkFBa0Isa0NBQWtDLDRDQUE0QyxzQkFBc0IsbUJBQW1CLHNDQUFzQyw4Q0FBOEMsd0NBQXdDLDRDQUE0Qyx3Q0FBd0MsVUFBVSxhQUFhLFlBQVksbUJBQW1CLHNCQUFzQiwwQ0FBMEMsMkJBQTJCLFlBQVksK0JBQStCLFNBQVMsa0hBQWtILDZCQUE2Qix1QkFBdUIsMkhBQTJILG1DQUFtQyx1QkFBdUIsZ0NBQWdDLGlDQUFpQyxhQUFhLGlCQUFpQiw2QkFBNkIsZ0JBQWdCLGlCQUFpQiw4Q0FBOEMsa0NBQWtDLDBCQUEwQixrQkFBa0IsV0FBVyxvREFBb0QseUJBQXlCLGtJQUFrSSx1QkFBdUIsZ0RBQWdELGlCQUFpQixrRUFBa0UsVUFBVSxnQ0FBZ0MsV0FBVyxrQkFBa0IsT0FBTyxRQUFRLDRCQUE0QixZQUFZLHdDQUF3QyxNQUFNLHdDQUF3QyxTQUFTLHdFQUF3RSxxQkFBcUIsd0VBQXdFLHdCQUF3QixpQ0FBaUMsV0FBVyxrQkFBa0IsT0FBTyxRQUFRLFNBQVMsWUFBWSxvQkFBb0IsV0FBVyxzQkFBc0IsY0FBYyxpQ0FBaUMsZUFBZSxzQkFBc0IsdUJBQXVCLFdBQVcsY0FBYyxhQUFhLG1CQUFtQix5QkFBeUIsdUJBQXVCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLDZCQUE2QixzQ0FBc0Msc0NBQXNDLHVGQUF1Rix1Q0FBdUMsdUNBQXVDLHNEQUFzRCxzQ0FBc0Msc0NBQXNDLHlEQUF5RCx5Q0FBeUMseUNBQXlDLHlEQUF5RCx5Q0FBeUMseUNBQXlDLHVEQUF1RCx1Q0FBdUMsdUNBQXVDLHFDQUFxQyxnREFBZ0Qsb0NBQW9DLCtDQUErQyw4QkFBOEIsK0NBQStDLGlDQUFpQyxrREFBa0QsaUNBQWlDLGtEQUFrRCwrQkFBK0IsZ0RBQWdELHVSQUF1Uiw2Q0FBNkMsd0JBQXdCLFdBQVcsa0JBQWtCLFFBQVEsVUFBVSx1QkFBdUIsYUFBYSxZQUFZLFVBQVUsZUFBZSxXQUFXLG9CQUFvQixVQUFVLDhDQUE4QyxTQUFTLFlBQVksK0JBQStCLFdBQVcsV0FBVyw0QkFBNEIsa0JBQWtCLFlBQVksV0FBVyw0REFBNEQsVUFBVSxtQ0FBbUMsR0FBRyxvQkFBb0IsR0FBRyxxQkFBcUIsd0JBQXdCLGtCQUFrQixTQUFTLE9BQU8sV0FBVyxZQUFZLFVBQVUsV0FBVyxzQkFBc0Isa0NBQWtDLG9EQUFvRCxvQ0FBb0MseUJBQXlCLDZCQUE2QixRQUFRLGFBQWEsdUJBQXVCLGtDQUFrQyw2QkFBNkIsa0JBQWtCLGdCQUFnQixTQUFTLE9BQU8sV0FBVyxXQUFXLDBEQUEwRCwyREFBMkQsK0NBQStDLFVBQVUsNEJBQTRCLDJDQUEyQyxXQUFXLFlBQVksbUJBQW1CLFdBQVcsWUFBWSxzQkFBc0IsaUJBQWlCLG1CQUFtQixzREFBc0QsaURBQWlELDhDQUE4QyxtQ0FBbUMsa0JBQWtCLHdEQUF3RCxHQUFHLFVBQVUsa0NBQWtDLElBQUksVUFBVSxpQ0FBaUMsSUFBSSxnQ0FBZ0MsSUFBSSxnQ0FBZ0MsR0FBRyxnQkFBZ0Isb0NBQW9DLElBQUksVUFBVSx3Q0FBd0MsR0FBRyxVQUFVLDBDQUEwQyxrQ0FBa0Msa0JBQWtCLHdEQUF3RCxHQUFHLFVBQVUsbUNBQW1DLElBQUksVUFBVSxnQ0FBZ0MsSUFBSSxpQ0FBaUMsSUFBSSwrQkFBK0IsR0FBRyxnQkFBZ0IsbUNBQW1DLElBQUksVUFBVSx1Q0FBdUMsR0FBRyxVQUFVLDJDQUEyQyxnQ0FBZ0Msa0JBQWtCLHdEQUF3RCxHQUFHLFVBQVUsa0NBQWtDLElBQUksVUFBVSxpQ0FBaUMsSUFBSSxnQ0FBZ0MsSUFBSSxnQ0FBZ0MsR0FBRyx5QkFBeUIsaUNBQWlDLElBQUksaURBQWlELFFBQVEsVUFBVSxpREFBaUQsR0FBRyxVQUFVLG9DQUFvQyxrQ0FBa0Msa0JBQWtCLHdEQUF3RCxHQUFHLFVBQVUsbUNBQW1DLElBQUksVUFBVSxnQ0FBZ0MsSUFBSSxpQ0FBaUMsSUFBSSwrQkFBK0IsR0FBRyxnQkFBZ0IsbUNBQW1DLElBQUksaURBQWlELFFBQVEsVUFBVSxpREFBaUQsR0FBRyxVQUFVLG1DQUFtQyx1RUFBdUUsc0NBQXNDLHlFQUF5RSx1Q0FBdUMsb0NBQW9DLHNDQUFzQyx1Q0FBdUMsb0NBQW9DLHFFQUFxRSx1Q0FBdUMsdUVBQXVFLHdDQUF3QyxtQ0FBbUMscUNBQXFDLHNDQUFzQyx1Q0FBdUMsNEJBQTRCLEdBQUcsVUFBVSw0QkFBNEIsSUFBSSxXQUFXLDZCQUE2QixHQUFHLFVBQVUsSUFBSSxVQUFVLHNEQUFzRCxHQUFHLFdBQVcsc0JBQXNCLGdDQUFnQyxxQkFBcUIsaUNBQWlDLDRCQUE0QixHQUFHLDRDQUE0QyxrQ0FBa0MsVUFBVSxJQUFJLDZDQUE2QyxrQ0FBa0MsSUFBSSw0Q0FBNEMsVUFBVSxJQUFJLDRDQUE0QyxHQUFHLDhCQUE4Qiw2QkFBNkIsR0FBRyx1REFBdUQsSUFBSSx1RUFBdUUsVUFBVSxHQUFHLHNFQUFzRSxXQUFXLHNCQUFzQixnQ0FBZ0MscUJBQXFCLGlDQUFpQyxrQ0FBa0MsR0FBRyxnQ0FBZ0MsbUJBQW1CLEdBQUcscUNBQXFDLGlDQUFpQyxHQUFHLGlDQUFpQyxtQkFBbUIsR0FBRyxxQ0FBcUMsK0JBQStCLEdBQUcsZ0NBQWdDLG1CQUFtQixHQUFHLHFDQUFxQyxpQ0FBaUMsR0FBRyxpQ0FBaUMsbUJBQW1CLEdBQUcscUNBQXFDLG1DQUFtQyxHQUFHLG9DQUFvQyxHQUFHLGtCQUFrQix3Q0FBd0Msa0NBQWtDLEdBQUcsb0NBQW9DLEdBQUcsa0JBQWtCLHlDQUF5QyxrQ0FBa0MsR0FBRyxvQ0FBb0MsR0FBRyxrQkFBa0Isa0NBQWtDLGdDQUFnQyxHQUFHLG9DQUFvQyxHQUFHLGtCQUFrQixtQ0FBbUMscUVBQXFFLHFDQUFxQyx1RUFBdUUsc0NBQXNDLG1DQUFtQyxxQ0FBcUMsc0NBQXNDLG1DQUFtQyxtRUFBbUUsc0NBQXNDLGtDQUFrQyx1QkFBdUIscUVBQXFFLHVDQUF1QyxrQ0FBa0MsdUJBQXVCLGtDQUFrQyxvQ0FBb0Msa0NBQWtDLHVCQUF1QixxQ0FBcUMsc0NBQXNDLGtDQUFrQyx1QkFBdUIsMEJBQTBCLEdBQUcsb0JBQW9CLEdBQUc7QUFDM21jLEdBQTJDLHNLQUFzSyxxREFBRSxzQkFBZ0csc0JBQXNCLElBQUksdUJBQXVCLEdBQUcsMkJBQTJCLDBEQUEwRCxFQUFFLCtCQUErQix3REFBd0QsRUFBRSxFQUFFLFlBQVksd0VBQXdFLEVBQUUsaUJBQWlCLGtGQUFrRixFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLDZDQUFFLElBQUksT0FBTyxzREFBRSxNQUFNLHFDQUFxQyxvTEFBb0wsTUFBTSxtR0FBbUcsSUFBSSxLQUFLLGdEQUFFLE1BQU0sdUJBQXVCLHdEQUF3RCxnQkFBZ0IsNkJBQTZCLEVBQUUsdUNBQXVDLEtBQUssTUFBTSwyREFBZ0IsQ0FBQyxzREFBVyxVQUFxRSxnQkFBZ0IsT0FBTyw0SUFBNEksZ0ZBQWdGLHNCQUFzQixPQUFPLHFEQUFFLGdCQUFnQixtREFBRSxJQUFJLDREQUE0RCxVQUFVLDREQUE0RCxJQUEwQixhQUFhLHlDQUF5QyxFQUFFLE9BQU8sMkRBQWdCLFdBQVcsNERBQTRELEVBQUUsNEJBQTRCLDBCQUEwQixnQkFBZ0IsQ0FBQywyREFBZ0IsUUFBUSx5Q0FBeUMsQ0FBQywyREFBZ0IsU0FBUyxnSkFBZ0osSUFBK0MsYUFBYSwwSEFBMEgsRUFBRSxxQkFBcUIscUJBQXFCLEVBQUUsNkNBQTZDLDBCQUEwQixFQUFFLElBQUksTUFBTSxnREFBRSxxSUFBcUksRUFBRSw2QkFBNkIsRUFBRSxHQUFHLGtDQUFrQyxZQUFZLGdDQUFnQyxFQUFFLGdEQUFFLFNBQVMsOERBQThELFNBQVMsT0FBTywyREFBZ0IsUUFBUSx3REFBd0QsQ0FBQywyREFBZ0IsUUFBUSxzRUFBc0UsR0FBRywwQkFBMEIsRUFBRSxFQUFFLEVBQUUsMkRBQWdCLFFBQVEsNkdBQTZHLEdBQTJGLG1CQUFtQixLQUFLLEVBQUUsbUJBQW1CLHFGQUFxRiwyQ0FBMkMsS0FBSyxtQ0FBbUMsSUFBSSx3Q0FBd0MsWUFBWSxXQUFXLGNBQWMsTUFBTSxrRUFBa0UsRUFBRSxPQUFPLFFBQVEsc0ZBQXNGLE9BQU8sd0JBQXdCLEtBQUssZUFBZSxRQUFRLElBQUksUUFBUSxpQkFBaUIsT0FBTyxRQUFRLElBQUkscUJBQXFCLG1CQUFtQixzSUFBc0ksT0FBTyx1RkFBdUYsZUFBZSxJQUFJLDhDQUE4QyxhQUFhLE9BQU8sT0FBTyxrVEFBa1QsOEJBQThCLGVBQWUsZUFBZSxZQUFZLDREQUE0RCxhQUFhLE9BQU8sT0FBTyxtS0FBbUssT0FBTyw2QkFBNkIsZ0VBQWdFLEtBQUssU0FBUyxhQUFhLElBQUksbUJBQW1CLGVBQWUsZ0JBQWdCLG1CQUFtQixNQUFNLDJDQUEyQyxvQkFBb0Isd0VBQXdFLGNBQWMsMkNBQTJDLFdBQVcsY0FBYyxJQUFJLE1BQU0sb0RBQW9ELGdCQUFnQixNQUFNLHNEQUFzRCxTQUFTLHFCQUFxQiwyQkFBMkIsSUFBSSxlQUFlLFVBQVUsOENBQThDLE9BQU8sZ0NBQWdDLGlCQUFpQixFQUFFLDBDQUEwQywyQkFBMkIsb0NBQW9DLG9CQUFvQixHQUFHLFlBQVksSUFBSSxjQUFjLHNFQUFzRSxHQUFHLGlCQUFpQixxQkFBcUIsb0JBQW9CLGdCQUFnQixrQkFBa0IsR0FBRyxlQUFlLE1BQU0sMERBQTBELGlCQUFpQixjQUFjLDZHQUE2RyxFQUFFLGVBQWUsdUJBQXVCLE9BQU8sYUFBYSxpQkFBaUIsV0FBVyxtQkFBbUIsaUJBQWlCLGlCQUFpQixhQUFhLE1BQU0sa0NBQWtDLGVBQWUsTUFBTSxrREFBa0QsZUFBZSxzQkFBc0IsY0FBYyxlQUFlLHNEQUFzRCxnQkFBZ0IseUJBQXlCLGdCQUFnQixPQUFPLHNDQUFzQyxjQUFjLHlCQUF5QixnQkFBZ0IsMkJBQTJCLGtDQUFrQywyRUFBMkUsR0FBRyxlQUFlLDRCQUE0QixJQUFJLE1BQU0sOENBQThDLFVBQVUsR0FBRyxPQUFPLGdGQUFnRixhQUFhLFlBQVksYUFBYSxPQUFPLE9BQU8sd0JBQXdCLFNBQVMsU0FBUyxHQUFHLHFCQUFxQixVQUFVLGNBQWMsVUFBVSxJQUFJLGNBQWMsOERBQThELGFBQWEsdUJBQXVCLGlCQUFpQixtQkFBbUIsdUJBQXVCLGlCQUFpQiwrQkFBK0Isa0JBQWtCLEdBQUcsZUFBZSxNQUFNLGFBQWEsdUJBQXVCLGFBQWEsZ0JBQWdCLElBQUksY0FBYyxNQUFNLElBQUksa0JBQWtCLE1BQU0sd0RBQXdELDZCQUE2QixrQkFBa0IseUJBQXlCLFdBQVcsWUFBWSxXQUFXLEdBQUcsY0FBYyxtQkFBbUIsb0JBQStFLGVBQWUsTUFBTSxJQUFJLHFDQUFxQyxDQUFDLDZDQUFFLGdCQUFnQixLQUFLLFNBQVMsMkRBQUUsZ0NBQWdDLGNBQWMsZUFBZSxjQUFjLGdEQUFnRCxJQUFJLFdBQVcsU0FBUyx1Q0FBdUMsZ0NBQWdDLE9BQU8sa0VBQWlJLGVBQWUsU0FBUywrQ0FBRSxXQUFXLCtDQUFFLE9BQU8sNkNBQUUsU0FBUyw2Q0FBRSxFQUFFLDJFQUEyRSxXQUFXLGlFQUFpRSxHQUFHLElBQUksNENBQTRDLEVBQUUsZ0RBQUUsTUFBTSxzQ0FBc0MsS0FBSyx1QkFBdUIsYUFBYSw4RkFBOEYsYUFBYSwyRUFBMkUsY0FBYyxrREFBa0QsSUFBSSxnQkFBZ0Isa1NBQWtTLGNBQWMsSUFBSSw4QkFBOEIsbUNBQW1DLGdIQUFnSCxhQUFhLE1BQU0sYUFBYSxNQUFNLGFBQWEsaUdBQWlHLGFBQWEsMEZBQTBGLGNBQWMsZ0JBQWdCLGlCQUFpQiwrSUFBK0ksb0NBQW9DLFFBQVEseUJBQXlCLFFBQVEsZ0JBQWdCLGlDQUFpQyxFQUFFLHdCQUF3QixzQ0FBc0MsR0FBRyxhQUFhLElBQUksZ0JBQWdCLDRCQUE0QixxREFBcUQsdUNBQXVDLE9BQU8seUhBQXlILE9BQU8sK0JBQStCLGdGQUFnRixpQ0FBaUMsR0FBRyx5RkFBa0osa0NBQWtDLGtEQUFFLENBQUMsNENBQUUsQ0FBa0osUUFBUSxnQ0FBZ0MsR0FBRywyREFBZSxRQUFRLDhHQUE4RyxFQUFFLFFBQVEsRUFBRSxlQUFlLE9BQU8sMkRBQWUsSUFBSSxLQUFLLENBQUMsMkRBQWUsU0FBUywrZUFBK2UsR0FBRyxlQUFlLE9BQU8sMkRBQWUsSUFBSSxLQUFLLENBQUMsMkRBQWUsU0FBUyxrUEFBa1AsR0FBRyxlQUFlLE9BQU8sMkRBQWUsSUFBSSxLQUFLLENBQUMsMkRBQWUsU0FBUywrS0FBK0ssR0FBRyxlQUFlLE9BQU8sMkRBQWUsSUFBSSxLQUFLLENBQUMsMkRBQWUsU0FBUyx1VUFBdVUsR0FBRyxjQUFjLE9BQU8sMkRBQWUsUUFBUSw4QkFBOEIsRUFBRSxPQUFPLGtEQUFrRCxjQUFjLGFBQWEsa0NBQWtDLEVBQUUsY0FBYyxnQkFBZ0IsMEJBQTBCLGlCQUFpQixFQUFFLHFEQUFFLE1BQU0sbURBQUUsNENBQTRDLFdBQVcsSUFBSSwyRUFBMkUsUUFBUSxzUUFBc1EsS0FBSyxnREFBRSw2Q0FBNkMsRUFBRSxzQkFBc0IsRUFBRSxHQUFHLDJCQUEyQixFQUFFLHNDQUFzQyxZQUFZLDJDQUEyQyxFQUFFLGdEQUFFLDZCQUE2Qiw0QkFBNEIsUUFBUSw0QkFBNEIscURBQUUsTUFBTSxtREFBRSxlQUFlLDJEQUFlLElBQUksdUVBQXVFLENBQUMsMkRBQWUsUUFBUSw0RUFBNEUsdUJBQXVCLFdBQVcsMkRBQWUsUUFBUSxVQUFVLGdEQUFFLHlCQUF5QixtREFBbUQsRUFBRSx3Q0FBd0MsMkRBQWUsS0FBSyxXQUFXLFNBQVMsRUFBRSxFQUFFLEdBQUcscUhBQXFILEtBQUssa0JBQWtCLHFDQUFxQyxFQUFFLDRDQUE0QyxFQUFFLHdCQUF3QiwyRUFBMkUsUUFBUSxxUUFBcVEsZUFBZSxPQUFPLFdBQVcsbUJBQW1CLCtDQUFFLE9BQU8sNkNBQUUsUUFBUSwyQ0FBMkMsUUFBUSxrREFBa0QsR0FBRyxjQUFjLE1BQU0sZ0RBQUUsMkRBQTJELEVBQUUsR0FBRyxxQ0FBcUMsRUFBRSxlQUFlLG9DQUFvQyxFQUFFLGdEQUFFLFNBQVMsYUFBYSxvQkFBb0IsZUFBZSxNQUFNLE1BQU0sa0hBQWtILHdDQUF3QyxRQUFRLHlFQUF5RSxFQUFFLGdEQUFnRCwyQkFBMkIsNkJBQTZCLFNBQVMsa0NBQWtDLEVBQUUsZ0NBQWdDLFVBQVUsNkJBQTZCLEdBQUcsVUFBVSxnREFBRSxNQUFNLGNBQWMsTUFBTSxnQkFBZ0IsNkxBQTZMLG1EQUFtRCwyQ0FBMkMsTUFBTSwyREFBZ0IsWUFBWSxrREFBa0QscUJBQXFCLHlIQUF5SCxXQUFXLGdCQUFnQixLQUFLLEVBQUUsMkJBQTJCLE9BQU8sMkRBQWdCLFFBQVEsNkRBQTZELEVBQUUsRUFBRSxTQUFTLGtCQUFrQixHQUFHLDJEQUFnQixLQUFLLHNFQUFzRSxNQUFNLEVBQUUsTUFBTSxHQUEySTtBQUNqcGdCOzs7Ozs7VUNIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUN2QjtBQUNjO0FBQ0E7QUFFVztBQUNVO0FBRVA7QUFDVjtBQUU5QyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQTBCLEVBQUUsRUFBRTs7SUFDNUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLDJEQUFTLENBQUMsdURBQVksQ0FBQyxDQUFDO0lBRXRDLE1BQU0sY0FBYyxHQUFHLHdEQUFXLENBQ2hDLENBQUMsS0FBYyxFQUFFLEVBQUUsV0FBQyxrQkFBSyxDQUFDLE9BQU8sMENBQUUsY0FBYyxJQUNsRCxDQUFDO0lBQ0YsTUFBTSxpQkFBaUIsR0FBRyx3REFBVyxDQUNuQyxDQUFDLEtBQWMsRUFBRSxFQUFFLFdBQUMsa0JBQUssQ0FBQyxPQUFPLDBDQUFFLGNBQWMsSUFDbEQsQ0FBQztJQUNGLE1BQU0sVUFBVSxHQUFHLHdEQUFXLENBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRSxXQUFDLGtCQUFLLENBQUMsT0FBTywwQ0FBRSxVQUFVLElBQUMsQ0FBQztJQUU5RSxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHLCtDQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRywrQ0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELE1BQU0sQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsR0FBRywrQ0FBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlELE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxvQkFBb0IsQ0FBQyxHQUFHLCtDQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEUsTUFBTSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHLCtDQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLCtDQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRywrQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsR0FBRywrQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO0lBQ2hGLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUzQyxNQUFNLHVCQUF1QixHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDdEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQztJQUVGLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNuQyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQyxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNoQixpREFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQy9CLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixTQUFTLEVBQUUsSUFBSTtnQkFDZixlQUFlLEVBQUUsS0FBSztnQkFDdEIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixTQUFTLEVBQUUsSUFBSTtnQkFDZixRQUFRLEVBQUUsU0FBUztnQkFDbkIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsVUFBVSxFQUFFLGtEQUFNO2FBQ25CLENBQUMsQ0FBQztZQUNILGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDZCxpREFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQy9CLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixTQUFTLEVBQUUsSUFBSTtnQkFDZixlQUFlLEVBQUUsS0FBSztnQkFDdEIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixTQUFTLEVBQUUsSUFBSTtnQkFDZixRQUFRLEVBQUUsU0FBUztnQkFDbkIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsVUFBVSxFQUFFLGtEQUFNO2FBQ25CLENBQUMsQ0FBQztZQUNILGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE9BQU87UUFDVCxDQUFDO1FBQ0QsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxtREFBbUQ7SUFDL0UsQ0FBQyxDQUFDO0lBRUYsTUFBTSxxQkFBcUIsR0FBRyxDQUFPLGVBQWUsRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUMvRCxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDekIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBRUQsSUFBSSxDQUFDO1lBQ0gsb0NBQW9DO1lBQ3BDLDBDQUEwQztZQUMxQyxNQUFNLE9BQU8sR0FBRyx1QkFBdUIsQ0FBQztZQUN4QyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxDQUFDO1lBRW5ELE1BQU0sYUFBYSxHQUFHLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQ2IsK0JBQStCLGFBQWEsQ0FBQyxNQUFNLElBQUksYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUNsRixDQUFDO1lBQ0osQ0FBQztZQUVELE1BQU0sV0FBVyxHQUFHLE1BQU0sYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRS9DLE1BQU0sQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsR0FDdEUsTUFBTSx3REFBVyxDQUFDO2dCQUNoQiwwQkFBMEI7Z0JBQzFCLGNBQWM7Z0JBQ2QsdUJBQXVCO2dCQUN2QiwrQkFBK0I7Z0JBQy9CLDhCQUE4QjthQUMvQixDQUFDLENBQUM7WUFFTCxJQUFJLFVBQVUsQ0FBQztZQUVmLElBQUksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNqQixVQUFVLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlCLENBQUM7aUJBQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3hCLFVBQVUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDL0IsQ0FBQztZQUVELE1BQU0sWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDO2dCQUNwQyxLQUFLLEVBQUUsVUFBVTtnQkFDakIsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsYUFBYSxFQUFFLFVBQVU7Z0JBQ3pCLE1BQU0sRUFBRTtvQkFDTixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO29CQUNwRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO29CQUN2RCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO29CQUN2RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO2lCQUMxRDtnQkFDRCxRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLFFBQVE7aUJBQ2Y7YUFDRixDQUFDLENBQUM7WUFFSCxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDcEIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBRXJCLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFFcEIsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztvQkFDeEMsVUFBVSxDQUFDLElBQUksQ0FDYixJQUFJLE9BQU8sQ0FBQzt3QkFDVixLQUFLLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXO3dCQUNuQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtxQkFDcEQsQ0FBQyxDQUNILENBQUM7Z0JBQ0osQ0FBQztxQkFBTSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLGNBQWMsRUFBRSxDQUFDO29CQUNwRCxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO3dCQUMxRCxVQUFVLENBQUMsSUFBSSxDQUNiLElBQUksT0FBTyxDQUFDOzRCQUNWLEtBQUssRUFBRSxrQkFBa0I7NEJBQ3pCLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO3lCQUNwRCxDQUFDLENBQ0gsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDOUIsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7b0JBQ3RFLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQzlCLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxPQUFTLENBQUM7b0JBRW5DLFFBQVEsQ0FBQyxJQUFJLENBQ1gsSUFBSSxPQUFPLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFVBQVUsRUFBRTs0QkFDVixRQUFRLEVBQUUsWUFBWTs0QkFDdEIsT0FBTyxFQUFFLE1BQU07NEJBQ2YsT0FBTyxFQUFFLE1BQU07NEJBQ2YsUUFBUSxFQUFFLE9BQU87eUJBQ2xCO3FCQUNGLENBQUMsQ0FDSCxDQUFDO29CQUNGLFlBQVksRUFBRSxDQUFDO2dCQUNqQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsWUFBWSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFFL0IsK0RBQStEO1lBQy9ELE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3BELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLG1CQUFtQixDQUMvQyxDQUFDO1lBQ0YsSUFBSSxhQUFhLEVBQUUsQ0FBQztnQkFDbEIsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFFRCxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25FLENBQUM7SUFDSCxDQUFDLEVBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxHQUFTLEVBQUU7O1FBQzFCLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksV0FBVyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDO2dCQUNILElBQUksT0FBTyxHQUFHLHVCQUFpQixDQUFDLENBQUMsQ0FBQywwQ0FBRSxRQUFRLENBQUM7Z0JBRTdDLHNDQUFzQztnQkFDdEMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3hCLFlBQVk7Z0JBQ1osTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLHVDQUF1QyxPQUFPLFlBQVksT0FBTyxRQUFRLGNBQWMsQ0FBQyxHQUFHLEVBQUUsRUFDN0Y7b0JBQ0UsTUFBTSxFQUFFLEtBQUs7aUJBQ2QsQ0FDRixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7b0JBQ2Isa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQ2IsMEJBQTBCLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUNuRSxDQUFDO29CQUNGLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUVELE1BQU0sWUFBWSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUUzQyxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDO2dCQUU3QyxNQUFNLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFL0Msa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixDQUFDO1lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztnQkFDZixpREFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQzFCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixTQUFTLEVBQUUsSUFBSTtvQkFDZixlQUFlLEVBQUUsS0FBSztvQkFDdEIsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLFlBQVksRUFBRSxJQUFJO29CQUNsQixTQUFTLEVBQUUsSUFBSTtvQkFDZixRQUFRLEVBQUUsU0FBUztvQkFDbkIsS0FBSyxFQUFFLE1BQU07b0JBQ2IsVUFBVSxFQUFFLGtEQUFNO2lCQUNuQixDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsRUFBQztJQUVGLE1BQU0sVUFBVSxHQUFHLEdBQVMsRUFBRTs7UUFDNUIsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQ3pCLElBQUksQ0FBQztZQUNILElBQUksT0FBTyxHQUFHLHVCQUFpQixDQUFDLENBQUMsQ0FBQywwQ0FBRSxRQUFRLENBQUM7WUFFN0MsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQzdELG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFFRCxzQ0FBc0M7WUFDdEMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUV4QixZQUFZO1lBQ1osTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLHVDQUF1QyxPQUFPLFlBQVksT0FBTyxRQUFRLGNBQWMsQ0FBQyxHQUFHLEVBQUUsRUFDN0Y7Z0JBQ0UsTUFBTSxFQUFFLEtBQUs7YUFDZCxDQUNGLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtnQkFDYixvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQ2IsMEJBQTBCLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUNuRSxDQUFDO2dCQUNGLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFDRCxNQUFNLFlBQVksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUUzQyxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDO1lBRTdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLE1BQU0scUJBQXFCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixpREFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzNCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixTQUFTLEVBQUUsSUFBSTtnQkFDZixlQUFlLEVBQUUsS0FBSztnQkFDdEIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixTQUFTLEVBQUUsSUFBSTtnQkFDZixRQUFRLEVBQUUsU0FBUztnQkFDbkIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsVUFBVSxFQUFFLGtEQUFNO2FBQ25CLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDLEVBQUM7SUFFRixNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtRQUM5QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDakIsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUN4RCxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxXQUFXLENBQ3pFLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbkIsT0FBTztRQUNULENBQUM7UUFDRCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBRUYsTUFBTSxPQUFPLEdBQUcsQ0FBTyxNQUFjLEVBQUUsRUFBRTtRQUN2QyxJQUFJLENBQUM7WUFDSCxJQUFJLGlCQUFpQixDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDbEMsaURBQUssQ0FBQyxPQUFPLENBQ1gsNERBQTRELEVBQzVEO29CQUNFLFFBQVEsRUFBRSxZQUFZO29CQUN0QixTQUFTLEVBQUUsSUFBSTtvQkFDZixlQUFlLEVBQUUsS0FBSztvQkFDdEIsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLFlBQVksRUFBRSxJQUFJO29CQUNsQixTQUFTLEVBQUUsSUFBSTtvQkFDZixRQUFRLEVBQUUsU0FBUztvQkFDbkIsS0FBSyxFQUFFLE1BQU07b0JBQ2IsVUFBVSxFQUFFLGtEQUFNO2lCQUNuQixDQUNGLENBQUM7Z0JBQ0Ysa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixPQUFPO1lBQ1QsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksV0FBVyxFQUFFLENBQUM7b0JBQ2hCLElBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3BELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FDMUMsQ0FBQztvQkFDRixJQUFJLGVBQWUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNwRCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQzNDLENBQUM7b0JBRUYsSUFBSSxDQUFDLGVBQWUsSUFBSSxNQUFNLEtBQUssVUFBVSxFQUFFLENBQUM7d0JBQzlDLE1BQU0sUUFBUSxFQUFFLENBQUM7d0JBQ2pCLGVBQWUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNoRCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQzFDLENBQUM7b0JBQ0osQ0FBQztvQkFDRCxJQUFJLENBQUMsZUFBZSxJQUFJLE1BQU0sS0FBSyxZQUFZLEVBQUUsQ0FBQzt3QkFDaEQsTUFBTSxVQUFVLEVBQUUsQ0FBQzt3QkFDbkIsZUFBZSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2hELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FDM0MsQ0FBQztvQkFDSixDQUFDO29CQUVELElBQUksQ0FBQyxXQUFXLElBQUksZUFBZSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUM7d0JBQ3hELElBQUksZUFBZSxFQUFFLENBQUM7NEJBQ3BCLFlBQVksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQ3hDLENBQUM7d0JBQ0QsSUFBSSxlQUFlLEVBQUUsQ0FBQzs0QkFDcEIsWUFBWSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDeEMsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNILENBQUMsRUFBQztJQUVGLE1BQU0sWUFBWSxHQUFHLENBQU8sY0FBYyxFQUFFLE1BQWMsRUFBRSxFQUFFO1FBQzVELGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU0sd0RBQVcsQ0FBQztZQUNsRSxxQkFBcUI7WUFDckIsMkJBQTJCO1lBQzNCLCtCQUErQjtTQUNoQyxDQUFDLENBQUM7UUFFSCxrQ0FBa0M7UUFDbEMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGFBQWEsQ0FBQztZQUMxQyxFQUFFLEVBQUUsbUJBQW1CO1lBQ3ZCLEtBQUssRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDO1NBQ3hCLENBQUMsQ0FBQztRQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTVDLDJFQUEyRTtRQUMzRSxNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0MsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxrQ0FBa0M7UUFDdkQsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDNUIsS0FBSyxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFOUQsTUFBTSxPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQztnQkFDcEMsS0FBSyxFQUFFLE1BQU0sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwRSxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztZQUVILGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQixpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBRUgsMERBQTBEO1FBQzFELE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDO1lBQzVCLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtZQUN0QixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFlBQVksRUFBRSxRQUFRO1lBQ3RCLG9CQUFvQixFQUFFLENBQUMsRUFBRSxDQUFDO1lBQzFCLEtBQUssRUFBRSxHQUFHO1lBQ1YsZUFBZSxFQUFFO2dCQUNmLFdBQVcsRUFBRSxLQUFLO2dCQUNsQixjQUFjLEVBQUUsS0FBSztnQkFDckIsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLFlBQVksRUFBRSxLQUFLO2dCQUNuQixlQUFlLEVBQUUsS0FBSztnQkFDdEIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxvQkFBb0IsRUFBRTtnQkFDcEIsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLGNBQWMsRUFBRSxJQUFJO2dCQUNwQix3QkFBd0IsRUFBRSxLQUFLO2dCQUMvQixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0QsdURBQXVEO1lBQ3ZELG9CQUFvQixFQUFFLElBQUk7WUFDMUIsZUFBZSxFQUFFO2dCQUNmLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRCxTQUFTLEVBQUUsd0JBQXdCO1NBQ3BDLENBQUMsQ0FBQztRQUVILHFGQUFxRjtRQUNyRixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBRTFFLElBQUksZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLHNEQUFzRDtnQkFDdEQsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7b0JBQ2hDLDZCQUE2QjtvQkFDN0IsTUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMxRCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBb0IsRUFBRSxFQUFFO3dCQUMzQyxpQ0FBaUM7d0JBQ2pDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7OzRCQUNsQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dDQUNyQyxJQUNFLFdBQUksQ0FBQyxXQUFXLDBDQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUM7cUNBQ3ZDLFVBQUksQ0FBQyxXQUFXLDBDQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FDdkMsQ0FBQztvQ0FDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUN6QyxxQkFBcUIsRUFDckIseUJBQXlCLENBQzFCLENBQUM7Z0NBQ0osQ0FBQzs0QkFDSCxDQUFDO3dCQUNILENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUVILCtDQUErQztvQkFDL0MsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUM3QyxvRkFBb0YsQ0FDckYsQ0FBQztvQkFDRixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFOzt3QkFDcEMsSUFDRSxZQUFLLENBQUMsV0FBVywwQ0FBRSxRQUFRLENBQUMsV0FBVyxDQUFDOzZCQUN4QyxXQUFLLENBQUMsV0FBVywwQ0FBRSxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQ3hDLENBQUM7NEJBQ0QsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FDM0MscUJBQXFCLEVBQ3JCLHlCQUF5QixDQUMxQixDQUFDO3dCQUNKLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDO2dCQUVGLDBCQUEwQjtnQkFDMUIsb0JBQW9CLEVBQUUsQ0FBQztnQkFFdkIsbUJBQW1CO2dCQUNuQixNQUFNLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRTtvQkFDekMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7b0JBQ2hDLFNBQVMsRUFBRSxJQUFJO29CQUNmLE9BQU8sRUFBRSxJQUFJO29CQUNiLGFBQWEsRUFBRSxJQUFJO2lCQUNwQixDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsd0RBQXdEO1FBQ3hELCtFQUErRTtRQUUvRSxvQ0FBb0M7UUFDcEMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBTyxLQUFLLEVBQUUsRUFBRTtZQUN0QyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFLENBQUM7Z0JBQ3hELElBQ0UsS0FBSyxDQUFDLFFBQVE7b0JBQ2QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQywrQkFBK0I7a0JBQzdFLENBQUM7b0JBQ0QsTUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7b0JBRW5ELGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0lBRUYsTUFBTSxjQUFjLEdBQUcsR0FBUyxFQUFFO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNyQixpREFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ2hDLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixTQUFTLEVBQUUsSUFBSTtnQkFDZixlQUFlLEVBQUUsS0FBSztnQkFDdEIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixTQUFTLEVBQUUsSUFBSTtnQkFDZixRQUFRLEVBQUUsU0FBUztnQkFDbkIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsVUFBVSxFQUFFLGtEQUFNO2FBQ25CLENBQUMsQ0FBQztZQUNILE9BQU87UUFDVCxDQUFDO1FBRUQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsR0FBRyxNQUFNLHdEQUFXLENBQUM7Z0JBQ2xELDhCQUE4QjtnQkFDOUIsY0FBYzthQUNmLENBQUMsQ0FBQztZQUVILCtEQUErRDtZQUMvRCxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUM1QyxhQUFhLENBQ00sQ0FBQztZQUN0QixNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELE1BQU0sY0FBYyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFFekMsZ0NBQWdDO1lBQ2hDLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO2lCQUNoQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFDLGVBQUMsQ0FBQyxVQUFVLDBDQUFFLEVBQUUsTUFBSyxXQUFXLElBQUM7aUJBQy9DLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUzQywrQ0FBK0M7WUFDL0MsTUFBTSxjQUFjLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FDMUMsZUFBZSxFQUNmLGNBQWMsRUFDZCxRQUFRLENBQ1QsQ0FBQztZQUVGLGlDQUFpQztZQUNqQyxNQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsWUFBWSxDQUM1QyxjQUFjLEVBQ2QsZUFBZSxDQUNoQixDQUFDO1lBQ0YsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRTFCLHNEQUFzRDtZQUN0RCxNQUFNLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQztnQkFDaEMsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsYUFBYTtvQkFDbkIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO29CQUN2QixPQUFPLEVBQUU7d0JBQ1AsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2xCLEtBQUssRUFBRSxDQUFDO3FCQUNUO2lCQUNGO2dCQUNELFVBQVUsRUFBRTtvQkFDVixFQUFFLEVBQUUsV0FBVyxFQUFFLCtCQUErQjtpQkFDakQ7YUFDRixDQUFDLENBQUM7WUFFSCxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3BELGlEQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDNUIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGVBQWUsRUFBRSxLQUFLO2dCQUN0QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixLQUFLLEVBQUUsTUFBTTtnQkFDYixVQUFVLEVBQUUsa0RBQU07YUFDbkIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztnQkFBUyxDQUFDO1lBQ1QsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUMsRUFBQztJQUVGLE1BQU0sdUJBQXVCLEdBQUcsQ0FDOUIsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixFQUFFO1FBQ0YsSUFBSSxDQUFDLGVBQWUsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDeEQsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2pELE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxHQUN0RCxNQUFNLHdEQUFXLENBQUM7WUFDaEIsOEJBQThCO1lBQzlCLHdCQUF3QjtZQUN4QixjQUFjO1lBQ2QsMkJBQTJCO1NBQzVCLENBQUMsQ0FBQztRQUVMLGtEQUFrRDtRQUNsRCxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDZixTQUFTLEdBQUcsSUFBSSxhQUFhLENBQUM7Z0JBQzVCLEVBQUUsRUFBRSxxQkFBcUI7Z0JBQ3pCLEtBQUssRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1lBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFRCx5Q0FBeUM7UUFDekMsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFFcEQsOEVBQThFO1FBRTlFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3RDLElBQUksT0FBTyxDQUFDO1lBRVosSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLE9BQU8sR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsMENBQTBDO1lBQ3pFLENBQUM7aUJBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzNCLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9DQUFvQztZQUN4RSxDQUFDO2lCQUFNLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUUsQ0FBQztnQkFDckMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLHNDQUFzQztZQUM1RCxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sT0FBTyxDQUFDLElBQUksQ0FBQywrQ0FBK0MsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDeEUsT0FBTyxDQUFDLG9FQUFvRTtZQUM5RSxDQUFDO1lBRUQsTUFBTSxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUM7Z0JBQ2hDLEtBQUssRUFBRTtvQkFDTCxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ3ZCO2dCQUNELGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO2FBQ3BELENBQUMsQ0FBQztZQUVILE1BQU0sY0FBYyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQ2xELFlBQVksRUFDWixRQUFRLENBQ1QsQ0FBQztZQUNGLE1BQU0sa0JBQWtCLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQztZQUVqRCxNQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQztnQkFDOUIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsYUFBYTtvQkFDbkIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPO29CQUMzQixLQUFLLEVBQUUsQ0FBQztpQkFDVDtnQkFDRCxVQUFVLEVBQUU7b0JBQ1YsVUFBVSxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDM0M7Z0JBQ0QsYUFBYSxFQUFFO29CQUNiLEtBQUssRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUM7b0JBQzFCLE9BQU8sRUFDTCxhQUFhO3dCQUNiLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixtQkFBbUI7d0JBQ25CLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQzdCLEtBQUs7aUJBQ1I7YUFDRixDQUFDLENBQUM7WUFFSCxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNCLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0lBRUYsTUFBTSxtQkFBbUIsR0FBRyxHQUFTLEVBQUU7UUFDckMsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNoQixNQUFNLGNBQWMsR0FBRyxrQkFBa0IsRUFBRSxDQUFDO1lBRTVDLElBQUksQ0FBQyxjQUFjO2dCQUFFLE9BQU87WUFFNUIsTUFBTSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLHdEQUFXLENBQUM7Z0JBQ2hELDhCQUE4QjtnQkFDOUIscUJBQXFCO2FBQ3RCLENBQUMsQ0FBQztZQUVILE1BQU0sUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDO2dCQUN6QixDQUFDLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUztnQkFDekMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQ3hDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxnQkFBZ0I7YUFDbEQsQ0FBQyxDQUFDO1lBRUgsTUFBTSxpQkFBaUIsR0FDckIsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFFMUQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztnQkFDeEQsT0FBTztZQUNULENBQUM7WUFFRCxNQUFNLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDM0QsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUNWLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxpQkFBaUI7Z0JBQ3hELGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQyx5QkFBeUI7YUFDekYsQ0FBQztZQUNGLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2pELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLHNDQUFzQyxDQUNsRSxDQUFDO1lBQ0YsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDMUIsNENBQTRDO1lBQzVDLE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ3RELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDUixLQUFLLENBQUMsT0FBTztnQkFDYixLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVM7Z0JBQ3hCLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFDOUIsS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQ2xDLENBQUM7WUFFRixJQUFJLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztZQUU1QixNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdkMsS0FBSyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsQ0FBQywyQkFBMkI7WUFDNUQsS0FBSyxDQUFDLG1CQUFtQixHQUFHLFlBQVksQ0FBQyxDQUFDLDZCQUE2QjtZQUN2RSxLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUU1QixJQUFJLENBQUM7Z0JBQ0gsTUFBTSxPQUFPLEdBQUcsTUFBTSxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0RCxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUNuQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckQsQ0FBQztZQUVELElBQUksZUFBZSxJQUFJLGFBQWEsRUFBRSxDQUFDO2dCQUNyQyx1QkFBdUIsQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUMvRCxDQUFDO2lCQUFNLENBQUM7Z0JBQ04saURBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7b0JBQ2pDLFFBQVEsRUFBRSxZQUFZO29CQUN0QixTQUFTLEVBQUUsSUFBSTtvQkFDZixlQUFlLEVBQUUsS0FBSztvQkFDdEIsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLFlBQVksRUFBRSxJQUFJO29CQUNsQixTQUFTLEVBQUUsSUFBSTtvQkFDZixRQUFRLEVBQUUsU0FBUztvQkFDbkIsS0FBSyxFQUFFLE1BQU07b0JBQ2IsVUFBVSxFQUFFLGtEQUFNO2lCQUNuQixDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsRUFBQztJQUVGLG9DQUFvQztJQUNwQyxvRUFBb0U7SUFDcEUsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtRQUNwQyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ2hCLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQy9DLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FDaEMsQ0FBQztZQUNGLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ1YsaURBQWlEO2dCQUNqRCxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDdEIsc0RBQXNEO2dCQUN0RCxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztZQUMxQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsQ0FBQztJQUNGLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7UUFDcEMsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNoQixNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUMvQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQ2hDLENBQUM7WUFDRixJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNWLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsQ0FBQztJQUVGLGdEQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzVCLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM3QixXQUFXLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDOUIsV0FBVyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDakMsV0FBVyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDcEQsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFFcEMsT0FBTyxDQUNMLHFFQUFLLFNBQVMsRUFBQyw4QkFBOEI7UUFDMUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FDOUQsNERBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxXQUFLLENBQUMsZUFBZSwwQ0FBRyxDQUFDLENBQUMsRUFDMUMsa0JBQWtCLEVBQUUsdUJBQXVCLEdBQzNDLENBQ0g7UUFDRCxxRUFBSyxTQUFTLEVBQUMsd0JBQXdCO1lBQ3JDLDREQUFDLDBEQUFjLE9BQUc7WUFDbEI7Z0JBQ0Usd0VBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFNO2dCQUMzQixxRUFBSyxTQUFTLEVBQUMsbUJBQW1CO29CQUMvQixVQUFVLEtBQUssS0FBSyxJQUFJLENBQ3ZCO3dCQUNFLHVFQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBSzt3QkFDekIscUVBQUssU0FBUyxFQUFDLG1CQUFtQjs0QkFDL0IsZUFBZSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDMUIsNERBQUMsMkNBQU0sSUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxTQUFTO2dDQUM5Qiw0REFBQyw0Q0FBTyxJQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFJLENBQ3hDLENBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FDRiw0REFBQywyQ0FBTSxJQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFDLElBQUksSUFDbEQsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUNQLENBQ1Y7NEJBQ0EsaUJBQWlCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUM1Qiw0REFBQywyQ0FBTSxJQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVM7Z0NBQzlCLDREQUFDLDRDQUFPLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUksQ0FDeEMsQ0FDVixDQUFDLENBQUMsQ0FBQyxDQUNGLDREQUFDLDJDQUFNLElBQ0wsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFDcEMsSUFBSSxFQUFDLElBQUksRUFDVCxJQUFJLEVBQUMsU0FBUyxJQUViLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FDVCxDQUNWLENBQ0csQ0FDTCxDQUNKO29CQUNBLFVBQVUsS0FBSyxJQUFJLElBQUksQ0FDdEIscUVBQUssU0FBUyxFQUFDLGtCQUFrQjt3QkFDL0IscUVBQUssRUFBRSxFQUFDLHdCQUF3QixHQUFPO3dCQUN2QyxxRUFBSyxTQUFTLEVBQUMsMEJBQTBCOzRCQUN2Qyx1RUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUs7NEJBQ3pCLHFFQUFLLFNBQVMsRUFBQyx3QkFBd0I7Z0NBQ3JDLHVFQUNFLEVBQUUsRUFBQyxhQUFhLEVBQ2hCLElBQUksRUFBQyxNQUFNLEVBQ1gsR0FBRyxFQUFDLEdBQUcsRUFDUCxHQUFHLEVBQUMsS0FBSyxFQUNULEtBQUssRUFBRSxjQUFjLEVBQ3JCLFFBQVEsRUFBRSxrQkFBa0IsR0FDNUI7Z0NBQ0YsNkVBQVUsQ0FDTjs0QkFFTiw0REFBQywyQ0FBTSxJQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsU0FBUyxJQUN0RCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQ1o7NEJBQ1QsNERBQUMsMkNBQU0sSUFDTCxPQUFPLEVBQUUsbUJBQW1CLEVBQzVCLElBQUksRUFBQyxJQUFJLEVBQ1QsSUFBSSxFQUFDLFNBQVMsSUFFYixDQUFDLENBQUMsZUFBZSxDQUFDLENBQ1osQ0FDTCxDQUNGLENBQ1AsQ0FDRyxDQUNGLENBQ0YsQ0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixpRUFBZSxNQUFNLEVBQUM7QUFFZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94QXJlYS9zcmMvcnVudGltZS9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL2VzcmktbG9hZGVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vbW9kdWxlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL3V0aWxzL2Nzcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vdXRpbHMvdXJsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94QXJlYS9zcmMvcnVudGltZS9hc3NldHMvc3R5bGUuY3NzP2E4NGEiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL2hvb2tzL3VzZUxvY2FsZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveEFyZWEvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS93aXRoLXNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZGlzdC9yZWFjdC1yZWR1eC5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC10b2FzdGlmeS9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveEFyZWEvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnByb3hpbWl0eS13aWRnZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJveGltaXR5LW1haW4tY29udGVudCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByb3hpbWl0eS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTcwcHg7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLnByb3hpbWl0eS1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhlY2M7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIH1cbiAgfVxufVxuXG4ucHJveGltaXR5LWJ1ZmZlci1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGlucHV0IHtcbiAgICB3aWR0aDogNjAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzI4MkI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICMwMDhlY2M7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cbiAgcCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi5wcm94aW1pdHktYnVmZmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgI215U2tldGNoQ29udGFpbmVyUHVudG8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWluLXdpZHRoOiAxODBweDtcbiAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAucHJveGltaXR5LWJ1ZmZlci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIE92ZXJyaWRlIGRlbCBoaWdobGlnaHQgZGUgc2VsZWNjacOzbiBkZWwgU2tldGNoIC0gQ29sb3IgY3lhbiAqL1xuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19ncmFwaGljcy1sYXllci1oaWdobGlnaHQge1xuICBzdHJva2U6IGN5YW4gIWltcG9ydGFudDtcbiAgc3Ryb2tlLXdpZHRoOiAzcHggIWltcG9ydGFudDtcbiAgZmlsbDogcmdiYSgwLCAyNTUsIDI1NSwgMC4xKSAhaW1wb3J0YW50O1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgZWwgY29udGVuZWRvciBkZWwgU2tldGNoIGN1YW5kbyBoYXkgc2VsZWNjacOzbiBhY3RpdmEgKi9cbi5lc3JpLXZpZXcgLmVzcmktdmlldy1zdXJmYWNlLS1pbnNldC1vdXRsaW5lOmZvY3VzOjphZnRlciB7XG4gIG91dGxpbmUtY29sb3I6IGN5YW4gIWltcG9ydGFudDtcbn1cblxuLyogT3ZlcnJpZGUgZGVsIGNvbG9yIGRlIHNlbGVjY2nDs24gZGVsIHBvbMOtZ29ubyBlbiBlbCBtYXBhICovXG4uZXNyaS1za2V0Y2hfX2dyYXBoaWNzLWxheWVyIC5lc3JpLXNrZXRjaF9fZ3JhcGhpY3MtbGF5ZXItLXNlbGVjdGVkIHtcbiAgb3V0bGluZTogM3B4IHNvbGlkIGN5YW4gIWltcG9ydGFudDtcbn1cblxuLyogUGVyc29uYWxpemFjacOzbiBkZWwgdGV4dG8gXCJTZWxlY2Npw7NuXCIgKi9cbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9faGVhZGluZy10ZXh0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGRlIHBvbMOtZ29ub3NcIjtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4vKiBNw6l0b2RvIGFsdGVybmF0aXZvIHBhcmEgc29icmVzY3JpYmlyIGVsIGxhYmVsIGNvbXBsZXRvICovXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX3NlY3Rpb24tbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XG4gIGZvbnQtc2l6ZTogMDtcbn1cblxuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19zZWN0aW9uLWxhYmVsOmZpcnN0LW9mLXR5cGU6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29udGVudDogXCJQb2zDrWdvbm9zIHNlbGVjY2lvbmFkb3M6IFwiO1xuICBjb2xvcjogIzAwRkZGRjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9nZW9wcm9jZXNvcyUyMGV4cHJpZW5jZSUyMGJ1aWxkZXIvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hBcmVhL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3NcIixcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hBcmVhL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FERUY7O0FDQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBREdGOztBQ0FBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RURHRjtBQUNGOztBQ0FBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFFQTtJQUNFLHlCQUFBO0lBQ0EsT0FBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtJQUNBLDZCQUFBO0lBQ0E7TUFDRSx5QkFBQTtNQUNBLG9DQUFBO01BQ0Esd0NBQUE7SURFRjtFQUNGO0FBQ0Y7O0FDQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUE7SUFDRSxVQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQTtNQUNFLHFCQUFBO01BQ0Esd0NBQUE7TUFDQSxhQUFBO0lERUY7RUFDRjtFQ0FBO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VERUY7QUFDRjs7QUNBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUVBO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0VERUY7RUNDQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLFFBQUE7SUFDQSxvQkFBQTtJQUVBO01BQ0UseUJBQUE7TUFDQSxvQkFBQTtNQUNBLGNBQUE7TUFDQSxtQkFBQTtNQUNBLHlCQUFBO01BQ0EsV0FBQTtNQUVBO1FBQ0UseUJBQUE7UUFDQSxvQ0FBQTtRQUNBLHdDQUFBO01EREY7SUFDRjtFQUNGO0FBQ0Y7O0FDSUEsZ0VBQUE7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1Q0FBQTtBRERGOztBQ0lBLHNFQUFBO0FBQ0E7RUFDRSw4QkFBQTtBRERGOztBQ0lBLDREQUFBO0FBQ0E7RUFDRSxrQ0FBQTtBRERGOztBQ0lBLDBDQUFBO0FBQ0E7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0FEREY7O0FDSUEsMkRBQUE7QUFDQTtFQUNFLFlBQUE7QURERjs7QUNJQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRERGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLnByb3hpbWl0eS13aWRnZXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJveGltaXR5LW1haW4tY29udGVudCB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucHJveGltaXR5LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxNzBweDtcXG4gIHAge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLnByb3hpbWl0eS1idXR0b25zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhlY2M7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MiAhaW1wb3J0YW50O1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnByb3hpbWl0eS1idWZmZXItaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBpbnB1dCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjgyQjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICAmOmZvY3VzIHtcXG4gICAgICBib3JkZXItY29sb3I6ICMwMDhlY2M7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICB9XFxuICBwIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLnByb3hpbWl0eS1idWZmZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICNteVNrZXRjaENvbnRhaW5lclB1bnRvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG4gIC5wcm94aW1pdHktYnVmZmVyLWFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MiAhaW1wb3J0YW50O1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyogT3ZlcnJpZGUgZGVsIGhpZ2hsaWdodCBkZSBzZWxlY2Npw7NuIGRlbCBTa2V0Y2ggLSBDb2xvciBjeWFuICovXFxuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19ncmFwaGljcy1sYXllci1oaWdobGlnaHQge1xcbiAgc3Ryb2tlOiBjeWFuICFpbXBvcnRhbnQ7XFxuICBzdHJva2Utd2lkdGg6IDNweCAhaW1wb3J0YW50O1xcbiAgZmlsbDogcmdiYSgwLCAyNTUsIDI1NSwgMC4xKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBFc3RpbG9zIHBhcmEgZWwgY29udGVuZWRvciBkZWwgU2tldGNoIGN1YW5kbyBoYXkgc2VsZWNjacOzbiBhY3RpdmEgKi9cXG4uZXNyaS12aWV3IC5lc3JpLXZpZXctc3VyZmFjZS0taW5zZXQtb3V0bGluZTpmb2N1czo6YWZ0ZXIge1xcbiAgb3V0bGluZS1jb2xvcjogY3lhbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBPdmVycmlkZSBkZWwgY29sb3IgZGUgc2VsZWNjacOzbiBkZWwgcG9sw61nb25vIGVuIGVsIG1hcGEgKi9cXG4uZXNyaS1za2V0Y2hfX2dyYXBoaWNzLWxheWVyIC5lc3JpLXNrZXRjaF9fZ3JhcGhpY3MtbGF5ZXItLXNlbGVjdGVkIHtcXG4gIG91dGxpbmU6IDNweCBzb2xpZCBjeWFuICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFBlcnNvbmFsaXphY2nDs24gZGVsIHRleHRvIFxcXCJTZWxlY2Npw7NuXFxcIiAqL1xcbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9faGVhZGluZy10ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIGRlIHBvbMOtZ29ub3NcXFwiO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBNw6l0b2RvIGFsdGVybmF0aXZvIHBhcmEgc29icmVzY3JpYmlyIGVsIGxhYmVsIGNvbXBsZXRvICovXFxuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19zZWN0aW9uLWxhYmVsOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC1zaXplOiAwO1xcbn1cXG5cXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX3NlY3Rpb24tbGFiZWw6Zmlyc3Qtb2YtdHlwZTo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbnRlbnQ6IFxcXCJQb2zDrWdvbm9zIHNlbGVjY2lvbmFkb3M6IFxcXCI7XFxuICBjb2xvcjogIzAwRkZGRjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIixcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLnByb3hpbWl0eS13aWRnZXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJveGltaXR5LW1haW4tY29udGVudCB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucHJveGltaXR5LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxNzBweDtcXG4gIHAge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLnByb3hpbWl0eS1idXR0b25zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhlY2M7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MiAhaW1wb3J0YW50O1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnByb3hpbWl0eS1idWZmZXItaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBpbnB1dCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjgyQjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICAmOmZvY3VzIHtcXG4gICAgICBib3JkZXItY29sb3I6ICMwMDhlY2M7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICB9XFxuICBwIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLnByb3hpbWl0eS1idWZmZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICNteVNrZXRjaENvbnRhaW5lclB1bnRvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG4gIC5wcm94aW1pdHktYnVmZmVyLWFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MiAhaW1wb3J0YW50O1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyogT3ZlcnJpZGUgZGVsIGhpZ2hsaWdodCBkZSBzZWxlY2Npw7NuIGRlbCBTa2V0Y2ggLSBDb2xvciBjeWFuICovXFxuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19ncmFwaGljcy1sYXllci1oaWdobGlnaHQge1xcbiAgc3Ryb2tlOiBjeWFuICFpbXBvcnRhbnQ7XFxuICBzdHJva2Utd2lkdGg6IDNweCAhaW1wb3J0YW50O1xcbiAgZmlsbDogcmdiYSgwLCAyNTUsIDI1NSwgMC4xKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBFc3RpbG9zIHBhcmEgZWwgY29udGVuZWRvciBkZWwgU2tldGNoIGN1YW5kbyBoYXkgc2VsZWNjacOzbiBhY3RpdmEgKi9cXG4uZXNyaS12aWV3IC5lc3JpLXZpZXctc3VyZmFjZS0taW5zZXQtb3V0bGluZTpmb2N1czo6YWZ0ZXIge1xcbiAgb3V0bGluZS1jb2xvcjogY3lhbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBPdmVycmlkZSBkZWwgY29sb3IgZGUgc2VsZWNjacOzbiBkZWwgcG9sw61nb25vIGVuIGVsIG1hcGEgKi9cXG4uZXNyaS1za2V0Y2hfX2dyYXBoaWNzLWxheWVyIC5lc3JpLXNrZXRjaF9fZ3JhcGhpY3MtbGF5ZXItLXNlbGVjdGVkIHtcXG4gIG91dGxpbmU6IDNweCBzb2xpZCBjeWFuICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFBlcnNvbmFsaXphY2nDs24gZGVsIHRleHRvIFxcXCJTZWxlY2Npw7NuXFxcIiAqL1xcbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9faGVhZGluZy10ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIGRlIHBvbMOtZ29ub3NcXFwiO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBNw6l0b2RvIGFsdGVybmF0aXZvIHBhcmEgc29icmVzY3JpYmlyIGVsIGxhYmVsIGNvbXBsZXRvICovXFxuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19zZWN0aW9uLWxhYmVsOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC1zaXplOiAwO1xcbn1cXG5cXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX3NlY3Rpb24tbGFiZWw6Zmlyc3Qtb2YtdHlwZTo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbnRlbnQ6IFxcXCJQb2zDrWdvbm9zIHNlbGVjY2lvbmFkb3M6IFxcXCI7XFxuICBjb2xvcjogIzAwRkZGRjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qXG4gIENvcHlyaWdodCAoYykgMjAyMiBFc3JpXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vLyByZS1leHBvcnQgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG5leHBvcnQgeyBsb2FkTW9kdWxlcyB9IGZyb20gJy4vbW9kdWxlcyc7XG5leHBvcnQgeyBnZXRTY3JpcHQsIGlzTG9hZGVkLCBsb2FkU2NyaXB0LCBzZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vc2NyaXB0JztcbmV4cG9ydCB7IGxvYWRDc3MgfSBmcm9tICcuL3V0aWxzL2Nzcyc7XG5leHBvcnQgeyB1dGlscyB9O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGdldFNjcmlwdCwgaXNMb2FkZWQsIGxvYWRTY3JpcHQgfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG4vLyB3cmFwIERvam8ncyByZXF1aXJlKCkgaW4gYSBwcm9taXNlXG5mdW5jdGlvbiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKSB7XG4gICAgcmV0dXJuIG5ldyB1dGlscy5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgbG9hZGluZyB0aGUgZXNyaS9kb2pvIHNjcmlwdHMsIHJlamVjdCB3aXRoIHRoZSBlcnJvci5cbiAgICAgICAgdmFyIGVycm9ySGFuZGxlciA9IHdpbmRvd1sncmVxdWlyZSddLm9uKCdlcnJvcicsIHJlamVjdCk7XG4gICAgICAgIHdpbmRvd1sncmVxdWlyZSddKG1vZHVsZXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlbW92ZSBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICBlcnJvckhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIHdpdGggdGhlIHBhcmFtZXRlcnMgZnJvbSBkb2pvIHJlcXVpcmUgYXMgYW4gYXJyYXkuXG4gICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbiBhcnJheSBvZiB0aGUgcmVxdWlyZWQgbW9kdWxlc1xuLy8gYWxzbyB3aWxsIGF0dGVtcHQgdG8gbGF6eSBsb2FkIHRoZSBBcmNHSVMgQVBJIGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGxvYWRlZFxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNb2R1bGVzKG1vZHVsZXMsIGxvYWRTY3JpcHRPcHRpb25zKSB7XG4gICAgaWYgKGxvYWRTY3JpcHRPcHRpb25zID09PSB2b2lkIDApIHsgbG9hZFNjcmlwdE9wdGlvbnMgPSB7fTsgfVxuICAgIGlmICghaXNMb2FkZWQoKSkge1xuICAgICAgICAvLyBzY3JpcHQgaXMgbm90IHlldCBsb2FkZWQsIGlzIGl0IGluIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmc/XG4gICAgICAgIHZhciBzY3JpcHQgPSBnZXRTY3JpcHQoKTtcbiAgICAgICAgdmFyIHNyYyA9IHNjcmlwdCAmJiBzY3JpcHQuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgaWYgKCFsb2FkU2NyaXB0T3B0aW9ucy51cmwgJiYgc3JjKSB7XG4gICAgICAgICAgICAvLyBzY3JpcHQgaXMgc3RpbGwgbG9hZGluZyBhbmQgdXNlciBkaWQgbm90IHNwZWNpZnkgYSBVUkxcbiAgICAgICAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIGRlZmF1bHQgdG8gdGhlIFVSTCB0aGF0J3MgYmVpbmcgbG9hZGVkXG4gICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGRlZmF1bHRpbmcgdG8gdGhlIGxhdGVzdCA0LnggVVJMXG4gICAgICAgICAgICBsb2FkU2NyaXB0T3B0aW9ucy51cmwgPSBzcmM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXR0ZW1wdCB0byBsb2FkIHRoZSBzY3JpcHQgdGhlbiBsb2FkIHRoZSBtb2R1bGVzXG4gICAgICAgIHJldHVybiBsb2FkU2NyaXB0KGxvYWRTY3JpcHRPcHRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlcXVpcmVNb2R1bGVzKG1vZHVsZXMpOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHNjcmlwdCBpcyBhbHJlYWR5IGxvYWRlZCwganVzdCBsb2FkIHRoZSBtb2R1bGVzXG4gICAgICAgIHJldHVybiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKTtcbiAgICB9XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgbG9hZENzcyB9IGZyb20gJy4vdXRpbHMvY3NzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IGdldENkblVybCB9IGZyb20gJy4vdXRpbHMvdXJsJztcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZnVuY3Rpb24gY3JlYXRlU2NyaXB0KHVybCkge1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1lc3JpLWxvYWRlcicsICdsb2FkaW5nJyk7XG4gICAgcmV0dXJuIHNjcmlwdDtcbn1cbi8vIGFkZCBhIG9uZS10aW1lIGxvYWQgaGFuZGxlciB0byBzY3JpcHRcbi8vIGFuZCBvcHRpb25hbGx5IGFkZCBhIG9uZSB0aW1lIGVycm9yIGhhbmRsZXIgYXMgd2VsbFxuZnVuY3Rpb24gaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIGNhbGxiYWNrLCBlcnJiYWNrKSB7XG4gICAgdmFyIG9uU2NyaXB0RXJyb3I7XG4gICAgaWYgKGVycmJhY2spIHtcbiAgICAgICAgLy8gc2V0IHVwIGFuIGVycm9yIGhhbmRsZXIgYXMgd2VsbFxuICAgICAgICBvblNjcmlwdEVycm9yID0gaGFuZGxlU2NyaXB0RXJyb3Ioc2NyaXB0LCBlcnJiYWNrKTtcbiAgICB9XG4gICAgdmFyIG9uU2NyaXB0TG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gcGFzcyB0aGUgc2NyaXB0IHRvIHRoZSBjYWxsYmFja1xuICAgICAgICBjYWxsYmFjayhzY3JpcHQpO1xuICAgICAgICAvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uU2NyaXB0TG9hZCwgZmFsc2UpO1xuICAgICAgICBpZiAob25TY3JpcHRFcnJvcikge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBlcnJvciBsaXN0ZW5lciBhcyB3ZWxsXG4gICAgICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25TY3JpcHRMb2FkLCBmYWxzZSk7XG59XG4vLyBhZGQgYSBvbmUtdGltZSBlcnJvciBoYW5kbGVyIHRvIHRoZSBzY3JpcHRcbmZ1bmN0aW9uIGhhbmRsZVNjcmlwdEVycm9yKHNjcmlwdCwgY2FsbGJhY2spIHtcbiAgICB2YXIgb25TY3JpcHRFcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIHJlamVjdCB0aGUgcHJvbWlzZSBhbmQgcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgY2FsbGJhY2soZS5lcnJvciB8fCBuZXcgRXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgYXR0ZW1wdGluZyB0byBsb2FkIFwiLmNvbmNhdChzY3JpcHQuc3JjKSkpO1xuICAgICAgICAvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgfTtcbiAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgcmV0dXJuIG9uU2NyaXB0RXJyb3I7XG59XG4vLyBhbGxvdyB0aGUgdXNlciB0byBjb25maWd1cmUgZGVmYXVsdCBzY3JpcHQgb3B0aW9ucyByYXRoZXIgdGhhbiBwYXNzaW5nIG9wdGlvbnMgdG8gYGxvYWRNb2R1bGVzYCBlYWNoIHRpbWVcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBkZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG59XG4vLyBnZXQgdGhlIHNjcmlwdCBpbmplY3RlZCBieSB0aGlzIGxpYnJhcnlcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JpcHQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLWVzcmktbG9hZGVyXScpO1xufVxuLy8gaGFzIEFyY0dJUyBBUEkgYmVlbiBsb2FkZWQgb24gdGhlIHBhZ2UgeWV0P1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9hZGVkKCkge1xuICAgIHZhciBnbG9iYWxSZXF1aXJlID0gd2luZG93WydyZXF1aXJlJ107XG4gICAgLy8gLm9uKCkgZW5zdXJlcyB0aGF0IGl0J3MgRG9qbydzIEFNRCBsb2FkZXJcbiAgICByZXR1cm4gZ2xvYmFsUmVxdWlyZSAmJiBnbG9iYWxSZXF1aXJlLm9uO1xufVxuLy8gbG9hZCB0aGUgQXJjR0lTIEFQSSBvbiB0aGUgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTY3JpcHQob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgLy8gd2Ugd291bGQgaGF2ZSBsaWtlZCB0byB1c2Ugc3ByZWFkIGxpa2UgeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9XG4gICAgLy8gYnV0IFRTIHdvdWxkIGluamVjdCBhIHBvbHlmaWxsIHRoYXQgd291bGQgcmVxdWlyZSB1c2UgdG8gY29uZmlndXJlIHJvbGx1cCB3IGNvbnRlbnQ6ICd3aW5kb3cnXG4gICAgLy8gaWYgd2UgaGF2ZSBhbm90aGVyIG9jY2FzaW9uIHRvIHVzZSBzcHJlYWQsIGxldCdzIGRvIHRoYXQgYW5kIHJlcGxhY2UgdGhpcyBmb3IuLi5pblxuICAgIHZhciBvcHRzID0ge307XG4gICAgW2RlZmF1bHRPcHRpb25zLCBvcHRpb25zXS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIG9wdHNbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBVUkwgdG8gbG9hZFxuICAgIHZhciB2ZXJzaW9uID0gb3B0cy52ZXJzaW9uO1xuICAgIHZhciB1cmwgPSBvcHRzLnVybCB8fCBnZXRDZG5VcmwodmVyc2lvbik7XG4gICAgcmV0dXJuIG5ldyB1dGlscy5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9IGdldFNjcmlwdCgpO1xuICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgICAvLyB0aGUgQVBJIGlzIGFscmVhZHkgbG9hZGVkIG9yIGluIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmcuLi5cbiAgICAgICAgICAgIC8vIE5PVEU6IGhhdmUgdG8gdGVzdCBhZ2FpbnN0IHNjciBhdHRyaWJ1dGUgdmFsdWUsIG5vdCBzY3JpcHQuc3JjXG4gICAgICAgICAgICAvLyBiL2MgdGhlIGxhdHRlciB3aWxsIHJldHVybiB0aGUgZnVsbCB1cmwgZm9yIHJlbGF0aXZlIHBhdGhzXG4gICAgICAgICAgICB2YXIgc3JjID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgICAgICBpZiAoc3JjICE9PSB1cmwpIHtcbiAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSB0cnlpbmcgdG8gbG9hZCBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIHRoZSBBUElcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQgKFwiLmNvbmNhdChzcmMsIFwiKS5cIikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzY3JpcHQgaGFzIGFscmVhZHkgc3VjY2Vzc2Z1bGx5IGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciB0aGUgc2NyaXB0IHRvIGxvYWQgYW5kIHRoZW4gcmVzb2x2ZVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBBUEkgaGFzIGJlZW4gbG9hZGVkIGJ5IHNvbWUgb3RoZXIgbWVhbnNcbiAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSB0cnlpbmcgdG8gbG9hZCBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIHRoZSBBUElcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQuXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYXR0ZW1wdGluZyB0byBsb2FkIHRoZSBBUElcbiAgICAgICAgICAgICAgICB2YXIgY3NzID0gb3B0cy5jc3M7XG4gICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlVmVyc2lvbiA9IGNzcyA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCB0aGUgY3NzIGJlZm9yZSBsb2FkaW5nIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgbG9hZENzcyh1c2VWZXJzaW9uID8gdmVyc2lvbiA6IGNzcywgb3B0cy5pbnNlcnRDc3NCZWZvcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBzY3JpcHQgb2JqZWN0IHdob3NlIHNvdXJjZSBwb2ludHMgdG8gdGhlIEFQSVxuICAgICAgICAgICAgICAgIHNjcmlwdCA9IGNyZWF0ZVNjcmlwdCh1cmwpO1xuICAgICAgICAgICAgICAgIC8vIF9jdXJyZW50VXJsID0gdXJsO1xuICAgICAgICAgICAgICAgIC8vIG9uY2UgdGhlIHNjcmlwdCBpcyBsb2FkZWQuLi5cbiAgICAgICAgICAgICAgICBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHN0YXR1cyBvZiB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXNyaS1sb2FkZXInLCAnbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICAgICAgICAgIC8vIGxvYWQgdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGdldENkbkNzc1VybCwgcGFyc2VWZXJzaW9uIH0gZnJvbSAnLi91cmwnO1xuZnVuY3Rpb24gY3JlYXRlU3R5bGVzaGVldExpbmsoaHJlZikge1xuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgcmV0dXJuIGxpbms7XG59XG5mdW5jdGlvbiBpbnNlcnRMaW5rKGxpbmssIGJlZm9yZSkge1xuICAgIGlmIChiZWZvcmUpIHtcbiAgICAgICAgLy8gdGhlIGxpbmsgc2hvdWxkIGJlIGluc2VydGVkIGJlZm9yZSBhIHNwZWNpZmljIG5vZGVcbiAgICAgICAgdmFyIGJlZm9yZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJlZm9yZSk7XG4gICAgICAgIGJlZm9yZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGluaywgYmVmb3JlTm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBhcHBlbmQgdGhlIGxpbmsgdG8gdGhlbiBlbmQgb2YgdGhlIGhlYWQgdGFnXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfVxufVxuLy8gY2hlY2sgaWYgdGhlIGNzcyB1cmwgaGFzIGJlZW4gaW5qZWN0ZWQgb3IgYWRkZWQgbWFudWFsbHlcbmZ1bmN0aW9uIGdldENzcyh1cmwpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbaHJlZio9XFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIl1cIikpO1xufVxuZnVuY3Rpb24gZ2V0Q3NzVXJsKHVybE9yVmVyc2lvbikge1xuICAgIHJldHVybiAhdXJsT3JWZXJzaW9uIHx8IHBhcnNlVmVyc2lvbih1cmxPclZlcnNpb24pXG4gICAgICAgIC8vIGlmIGl0J3MgYSB2YWxpZCB2ZXJzaW9uIHN0cmluZyByZXR1cm4gdGhlIENETiBVUkxcbiAgICAgICAgPyBnZXRDZG5Dc3NVcmwodXJsT3JWZXJzaW9uKVxuICAgICAgICAvLyBvdGhlcndpc2UgYXNzdW1lIGl0J3MgYSBVUkwgYW5kIHJldHVybiB0aGF0XG4gICAgICAgIDogdXJsT3JWZXJzaW9uO1xufVxuLy8gbGF6eSBsb2FkIHRoZSBDU1MgbmVlZGVkIGZvciB0aGUgQXJjR0lTIEFQSVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDc3ModXJsT3JWZXJzaW9uLCBiZWZvcmUpIHtcbiAgICB2YXIgdXJsID0gZ2V0Q3NzVXJsKHVybE9yVmVyc2lvbik7XG4gICAgdmFyIGxpbmsgPSBnZXRDc3ModXJsKTtcbiAgICBpZiAoIWxpbmspIHtcbiAgICAgICAgLy8gY3JlYXRlICYgbG9hZCB0aGUgY3NzIGxpbmtcbiAgICAgICAgbGluayA9IGNyZWF0ZVN0eWxlc2hlZXRMaW5rKHVybCk7XG4gICAgICAgIGluc2VydExpbmsobGluaywgYmVmb3JlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbms7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuLy8gYWxsb3cgY29uc3VtaW5nIGxpYnJhcmllcyB0byBwcm92aWRlIHRoZWlyIG93biBQcm9taXNlIGltcGxlbWVudGF0aW9uc1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIFByb21pc2U6IGlzQnJvd3NlciA/IHdpbmRvd1snUHJvbWlzZSddIDogdW5kZWZpbmVkXG59O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbnZhciBERUZBVUxUX1ZFUlNJT04gPSAnNC4yNSc7XG52YXIgTkVYVCA9ICduZXh0JztcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZlcnNpb24odmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uLnRvTG93ZXJDYXNlKCkgPT09IE5FWFQpIHtcbiAgICAgICAgcmV0dXJuIE5FWFQ7XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHZlcnNpb24gJiYgdmVyc2lvbi5tYXRjaCgvXihcXGQpXFwuKFxcZCspLyk7XG4gICAgcmV0dXJuIG1hdGNoICYmIHtcbiAgICAgICAgbWFqb3I6IHBhcnNlSW50KG1hdGNoWzFdLCAxMCksXG4gICAgICAgIG1pbm9yOiBwYXJzZUludChtYXRjaFsyXSwgMTApXG4gICAgfTtcbn1cbi8qKlxuICogR2V0IHRoZSBDRE4gdXJsIGZvciBhIGdpdmVuIHZlcnNpb25cbiAqXG4gKiBAcGFyYW0gdmVyc2lvbiBFeDogJzQuMjUnIG9yICczLjQyJy4gRGVmYXVsdHMgdG8gdGhlIGxhdGVzdCA0LnggdmVyc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENkblVybCh2ZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24gPT09IHZvaWQgMCkgeyB2ZXJzaW9uID0gREVGQVVMVF9WRVJTSU9OOyB9XG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9qcy5hcmNnaXMuY29tL1wiLmNvbmNhdCh2ZXJzaW9uLCBcIi9cIik7XG59XG4vKipcbiAqIEdldCB0aGUgQ0ROIHVybCBmb3IgYSB0aGUgQ1NTIGZvciBhIGdpdmVuIHZlcnNpb24gYW5kL29yIHRoZW1lXG4gKlxuICogQHBhcmFtIHZlcnNpb24gRXg6ICc0LjI1JywgJzMuNDInLCBvciAnbmV4dCcuIERlZmF1bHRzIHRvIHRoZSBsYXRlc3QgNC54IHZlcnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5Dc3NVcmwodmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uID09PSB2b2lkIDApIHsgdmVyc2lvbiA9IERFRkFVTFRfVkVSU0lPTjsgfVxuICAgIHZhciBiYXNlVXJsID0gZ2V0Q2RuVXJsKHZlcnNpb24pO1xuICAgIHZhciBwYXJzZWRWZXJzaW9uID0gcGFyc2VWZXJzaW9uKHZlcnNpb24pO1xuICAgIGlmIChwYXJzZWRWZXJzaW9uICE9PSBORVhUICYmIHBhcnNlZFZlcnNpb24ubWFqb3IgPT09IDMpIHtcbiAgICAgICAgLy8gTk9URTogYXQgMy4xMSB0aGUgQ1NTIG1vdmVkIGZyb20gdGhlIC9qcyBmb2xkZXIgdG8gdGhlIHJvb3RcbiAgICAgICAgdmFyIHBhdGggPSBwYXJzZWRWZXJzaW9uLm1pbm9yIDw9IDEwID8gJ2pzLycgOiAnJztcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGJhc2VVcmwpLmNvbmNhdChwYXRoLCBcImVzcmkvY3NzL2VzcmkuY3NzXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gYXNzdW1lIDQueFxuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoYmFzZVVybCwgXCJlc3JpL3RoZW1lcy9saWdodC9tYWluLmNzc1wiKTtcbiAgICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxlKHRyYW5zbGF0aW9ucykge1xyXG4gIC8vIERldGVjdGEgbG9jYWxlIGRlc2RlIGxhIFVSTCAoP2xvY2FsZT1lbikgbyBmYWxsYmFjayBhIFwiZXNcIlxyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgY29uc3QgbG9jYWxlID0gc2VhcmNoUGFyYW1zLmdldChcImxvY2FsZVwiKSB8fCBcImVzXCI7XHJcblxyXG4gIGNvbnN0IHQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiAoa2V5OiBrZXlvZiB0eXBlb2YgdHJhbnNsYXRpb25zW1wiZXNcIl0pID0+XHJcbiAgICAgIHRyYW5zbGF0aW9uc1tsb2NhbGUgYXMgXCJlc1wiIHwgXCJlblwiXVtrZXldID8/IGtleTtcclxuICB9LCBbbG9jYWxlXSk7XHJcblxyXG4gIHJldHVybiB7IHQsIGxvY2FsZSB9O1xyXG59IiwiZXhwb3J0IGNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcclxuICAgIGVzOiB7XHJcbiAgICAgIHdpZGdldExhYmVsOiBcIlByb3hpbWlkYWQgZGUgw6FyZWFzIGRlIFJpZXNnb1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJFc3RlIHdpZGdldCBwZXJtaXRlIGEgcGFydGlyIGRlIGxhIGRldGVjY2nDs24gZGUgw6FyZWFzIHF1ZW1hZGFzIGUgaW51bmRhZGFzLCBnZW5lcmFyIGzDrW5lYXMgZGUgcHJveGltaWRhZCBhIGzDrW1pdGVzIHVyYmFub3MgbcOhcyBjZXJjYW5vcy5cIixcclxuICAgICAgaW5jZW5kaW86IFwiSW5jZW5kaW9zXCIsXHJcbiAgICAgIGludW5kYWNpb246IFwiSW51bmRhY2lvbmVzXCIsXHJcbiAgICAgIGJ1ZmZlckxhYmVsOiBcIkttcyDDoXJlYSBkZSBpbmZsdWVuY2lhXCIsXHJcbiAgICAgIGdlbmVyYXJCdWZmZXI6IFwiR2VuZXJhciDDoXJlYSBkZSBpbmZsdWVuY2lhXCIsXHJcbiAgICAgIGRpYnVqYXJMaW5lYXM6IFwiRGlidWphciBsw61uZWFzIGRlIHByb3hpbWlkYWRcIixcclxuICAgICAgZXJyb3JJbWFnZW46IFwiRGViZSBzZWxlY2Npb25hciB1bmEgaW1hZ2VuIGFudGVzIGRlIGVqZWN1dGFyIGVzdGUgcHJvY2Vzb1wiLFxyXG4gICAgICBlcnJvckJ1ZmZlcjogXCJEZWJlIHNlbGVjY2lvbmFyIG3DrW5pbW8gdW4gcG9sw61nb25vLlwiLFxyXG4gICAgICBtaW5LbVdhcm5pbmc6IFwiRWwgdmFsb3IgZGViZSBzZXIgbWVub3IgbyBpZ3VhbCAxMDAga20uXCIsXHJcbiAgICAgIG1heEttV2FybmluZzogXCJFbCB2YWxvciBkZWJlIHNlciBtYXlvciBvIGlndWFsIDEga20uXCIsXHJcbiAgICAgIGZpcmVMYXllcjogXCJab25hcyBxdWVtYWRhc1wiLFxyXG4gICAgICBmbG9vZExheWVyOiBcIlpvbmFzIGludW5kYWRhc1wiLFxyXG4gICAgICBmaXJlRXJyb3I6IFwiRXJyb3IgYWwgY2FyZ2FyIHJpZXNnbyBkZSBpbmNlbmRpbywgaW50ZW50YSBkZSBudWV2b1wiLFxyXG4gICAgICBmbG9vZEVycm9yOiBcIkVycm9yIGFsIGNhcmdhciByaWVzZ28gZGUgaW51bmRhY2lvbiwgaW50ZW50YSBkZSBudWV2b1wiLFxyXG4gICAgICBidWZmZXJMYXllcjogXCJCdWZmZXIgZGUgem9uYSBhZmVjdGFkYVwiLFxyXG4gICAgICBidWZmZXJXYXJuaW5nOiBcIkRlYmUgc2VsZWNjaW9uYXIgbcOtbmltbyB1biBwb2zDrWdvbm8uXCIsXHJcbiAgICAgIGJ1ZmZlckVycm9yOiBcIkVycm9yIGFsIGdlbmVyYXIgZWwgYnVmZmVyLlwiLFxyXG4gICAgICBwcm94aW1pdHlMYXllcjogXCJMw61uZWFzIGRlIFByb3hpbWlkYWRcIixcclxuICAgICAgdXJiYW5MaW1pdHNFcnJvcjogXCJObyBleGlzdGVuIGzDrW1pdGVzIHVyYmFub3MgZGVudHJvIGRlbCDDoXJlYS5cIlxyXG5cclxuICAgIH0sXHJcbiAgICBlbjoge1xyXG4gICAgICB3aWRnZXRMYWJlbDogXCJSaXNrIEFyZWEgUHJveGltaXR5XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgd2lkZ2V0IGFsbG93cyBnZW5lcmF0aW5nIHByb3hpbWl0eSBsaW5lcyB0byB0aGUgbmVhcmVzdCB1cmJhbiBsaW1pdHMgZnJvbSBidXJuZWQgb3IgZmxvb2RlZCBhcmVhcy5cIixcclxuICAgICAgaW5jZW5kaW86IFwiV2lsZGZpcmVzXCIsXHJcbiAgICAgIGludW5kYWNpb246IFwiRmxvb2RzXCIsXHJcbiAgICAgIGJ1ZmZlckxhYmVsOiBcIkJ1ZmZlciBkaXN0YW5jZSAoa20pXCIsXHJcbiAgICAgIGdlbmVyYXJCdWZmZXI6IFwiR2VuZXJhdGUgYnVmZmVyIGFyZWFcIixcclxuICAgICAgZGlidWphckxpbmVhczogXCJEcmF3IHByb3hpbWl0eSBsaW5lc1wiLFxyXG4gICAgICBlcnJvckltYWdlbjogXCJZb3UgbXVzdCBzZWxlY3QgYW4gaW1hZ2UgYmVmb3JlIHJ1bm5pbmcgdGhpcyBwcm9jZXNzXCIsXHJcbiAgICAgIGVycm9yQnVmZmVyOiBcIllvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCBvbmUgcG9seWdvbi5cIixcclxuICAgICAgbWluS21XYXJuaW5nOiBcIlRoZSB2YWx1ZSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAxMDAga20uXCIsXHJcbiAgICAgIG1heEttV2FybmluZzogXCJUaGUgdmFsdWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMSBrbS5cIixcclxuICAgICAgZmlyZUxheWVyOiBcIkJ1cm5lZCBhcmVhc1wiLFxyXG4gICAgICBmbG9vZExheWVyOiBcIkZsb29kZWQgYXJlYXNcIixcclxuICAgICAgZmlyZUVycm9yOiBcIkVycm9yIGxvYWRpbmcgZmlyZSByaXNrLCB0cnkgYWdhaW4uXCIsXHJcbiAgICAgIGZsb29kRXJyb3I6IFwiRXJyb3IgbG9hZGluZyBmbG9vZCByaXNrLCB0cnkgYWdhaW4uXCIsXHJcbiAgICAgIGJ1ZmZlckxheWVyOiBcImFmZmVjdGVkIGFyZWEgYnVmZmVyXCIsXHJcbiAgICAgIGJ1ZmZlcldhcm5pbmc6IFwiWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IG9uZSBwb2x5Z29uLlwiLFxyXG4gICAgICBidWZmZXJFcnJvcjogXCJFcnJvciBnZW5lcmF0aW5nIGJ1ZmZlci5cIixcclxuICAgICAgcHJveGltaXR5TGF5ZXI6IFwiTGluZXMgb2YgUHJveGltaXR5XCIsXHJcbiAgICAgIHVyYmFuTGltaXRzRXJyb3I6IFwiVGhlcmUgYXJlIG5vIHVyYmFuIGJvdW5kYXJpZXMgd2l0aGluIHRoZSBhcmVhLlwiXHJcbiAgICB9XHJcbiAgfTsiLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiB1c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICd1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgICAgdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuICA7XG59XG5cbnZhciBvYmplY3RJcyA9IHR5cGVvZiBPYmplY3QuaXMgPT09ICdmdW5jdGlvbicgPyBPYmplY3QuaXMgOiBpcztcblxudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gUmVhY3QudXNlU3luY0V4dGVybmFsU3RvcmU7XG5cbi8vIGZvciBDb21tb25KUyBpbnRlcm9wLlxuXG52YXIgdXNlUmVmID0gUmVhY3QudXNlUmVmLFxuICAgIHVzZUVmZmVjdCA9IFJlYWN0LnVzZUVmZmVjdCxcbiAgICB1c2VNZW1vID0gUmVhY3QudXNlTWVtbyxcbiAgICB1c2VEZWJ1Z1ZhbHVlID0gUmVhY3QudXNlRGVidWdWYWx1ZTsgLy8gU2FtZSBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSwgYnV0IHN1cHBvcnRzIHNlbGVjdG9yIGFuZCBpc0VxdWFsIGFyZ3VtZW50cy5cblxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3Ioc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QsIHNlbGVjdG9yLCBpc0VxdWFsKSB7XG4gIC8vIFVzZSB0aGlzIHRvIHRyYWNrIHRoZSByZW5kZXJlZCBzbmFwc2hvdC5cbiAgdmFyIGluc3RSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBpbnN0O1xuXG4gIGlmIChpbnN0UmVmLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICBpbnN0ID0ge1xuICAgICAgaGFzVmFsdWU6IGZhbHNlLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9O1xuICAgIGluc3RSZWYuY3VycmVudCA9IGluc3Q7XG4gIH0gZWxzZSB7XG4gICAgaW5zdCA9IGluc3RSZWYuY3VycmVudDtcbiAgfVxuXG4gIHZhciBfdXNlTWVtbyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIC8vIFRyYWNrIHRoZSBtZW1vaXplZCBzdGF0ZSB1c2luZyBjbG9zdXJlIHZhcmlhYmxlcyB0aGF0IGFyZSBsb2NhbCB0byB0aGlzXG4gICAgLy8gbWVtb2l6ZWQgaW5zdGFuY2Ugb2YgYSBnZXRTbmFwc2hvdCBmdW5jdGlvbi4gSW50ZW50aW9uYWxseSBub3QgdXNpbmcgYVxuICAgIC8vIHVzZVJlZiBob29rLCBiZWNhdXNlIHRoYXQgc3RhdGUgd291bGQgYmUgc2hhcmVkIGFjcm9zcyBhbGwgY29uY3VycmVudFxuICAgIC8vIGNvcGllcyBvZiB0aGUgaG9vay9jb21wb25lbnQuXG4gICAgdmFyIGhhc01lbW8gPSBmYWxzZTtcbiAgICB2YXIgbWVtb2l6ZWRTbmFwc2hvdDtcbiAgICB2YXIgbWVtb2l6ZWRTZWxlY3Rpb247XG5cbiAgICB2YXIgbWVtb2l6ZWRTZWxlY3RvciA9IGZ1bmN0aW9uIChuZXh0U25hcHNob3QpIHtcbiAgICAgIGlmICghaGFzTWVtbykge1xuICAgICAgICAvLyBUaGUgZmlyc3QgdGltZSB0aGUgaG9vayBpcyBjYWxsZWQsIHRoZXJlIGlzIG5vIG1lbW9pemVkIHJlc3VsdC5cbiAgICAgICAgaGFzTWVtbyA9IHRydWU7XG4gICAgICAgIG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG5cbiAgICAgICAgdmFyIF9uZXh0U2VsZWN0aW9uID0gc2VsZWN0b3IobmV4dFNuYXBzaG90KTtcblxuICAgICAgICBpZiAoaXNFcXVhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gRXZlbiBpZiB0aGUgc2VsZWN0b3IgaGFzIGNoYW5nZWQsIHRoZSBjdXJyZW50bHkgcmVuZGVyZWQgc2VsZWN0aW9uXG4gICAgICAgICAgLy8gbWF5IGJlIGVxdWFsIHRvIHRoZSBuZXcgc2VsZWN0aW9uLiBXZSBzaG91bGQgYXR0ZW1wdCB0byByZXVzZSB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IHZhbHVlIGlmIHBvc3NpYmxlLCB0byBwcmVzZXJ2ZSBkb3duc3RyZWFtIG1lbW9pemF0aW9ucy5cbiAgICAgICAgICBpZiAoaW5zdC5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3Rpb24gPSBpbnN0LnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoaXNFcXVhbChjdXJyZW50U2VsZWN0aW9uLCBfbmV4dFNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFNlbGVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IF9uZXh0U2VsZWN0aW9uO1xuICAgICAgICByZXR1cm4gX25leHRTZWxlY3Rpb247XG4gICAgICB9IC8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuXG5cbiAgICAgIC8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuICAgICAgdmFyIHByZXZTbmFwc2hvdCA9IG1lbW9pemVkU25hcHNob3Q7XG4gICAgICB2YXIgcHJldlNlbGVjdGlvbiA9IG1lbW9pemVkU2VsZWN0aW9uO1xuXG4gICAgICBpZiAob2JqZWN0SXMocHJldlNuYXBzaG90LCBuZXh0U25hcHNob3QpKSB7XG4gICAgICAgIC8vIFRoZSBzbmFwc2hvdCBpcyB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuIFJldXNlIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uXG4gICAgICAgIHJldHVybiBwcmV2U2VsZWN0aW9uO1xuICAgICAgfSAvLyBUaGUgc25hcHNob3QgaGFzIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBzZWxlY3Rpb24uXG5cblxuICAgICAgLy8gVGhlIHNuYXBzaG90IGhhcyBjaGFuZ2VkLCBzbyB3ZSBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgc2VsZWN0aW9uLlxuICAgICAgdmFyIG5leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpOyAvLyBJZiBhIGN1c3RvbSBpc0VxdWFsIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB1c2UgdGhhdCB0byBjaGVjayBpZiB0aGUgZGF0YVxuICAgICAgLy8gaGFzIGNoYW5nZWQuIElmIGl0IGhhc24ndCwgcmV0dXJuIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uIFRoYXQgc2lnbmFsc1xuICAgICAgLy8gdG8gUmVhY3QgdGhhdCB0aGUgc2VsZWN0aW9ucyBhcmUgY29uY2VwdHVhbGx5IGVxdWFsLCBhbmQgd2UgY2FuIGJhaWxcbiAgICAgIC8vIG91dCBvZiByZW5kZXJpbmcuXG5cbiAgICAgIC8vIElmIGEgY3VzdG9tIGlzRXF1YWwgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHVzZSB0aGF0IHRvIGNoZWNrIGlmIHRoZSBkYXRhXG4gICAgICAvLyBoYXMgY2hhbmdlZC4gSWYgaXQgaGFzbid0LCByZXR1cm4gdGhlIHByZXZpb3VzIHNlbGVjdGlvbi4gVGhhdCBzaWduYWxzXG4gICAgICAvLyB0byBSZWFjdCB0aGF0IHRoZSBzZWxlY3Rpb25zIGFyZSBjb25jZXB0dWFsbHkgZXF1YWwsIGFuZCB3ZSBjYW4gYmFpbFxuICAgICAgLy8gb3V0IG9mIHJlbmRlcmluZy5cbiAgICAgIGlmIChpc0VxdWFsICE9PSB1bmRlZmluZWQgJiYgaXNFcXVhbChwcmV2U2VsZWN0aW9uLCBuZXh0U2VsZWN0aW9uKSkge1xuICAgICAgICByZXR1cm4gcHJldlNlbGVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcbiAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gbmV4dFNlbGVjdGlvbjtcbiAgICAgIHJldHVybiBuZXh0U2VsZWN0aW9uO1xuICAgIH07IC8vIEFzc2lnbmluZyB0aGlzIHRvIGEgY29uc3RhbnQgc28gdGhhdCBGbG93IGtub3dzIGl0IGNhbid0IGNoYW5nZS5cblxuXG4gICAgLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuICAgIHZhciBtYXliZUdldFNlcnZlclNuYXBzaG90ID0gZ2V0U2VydmVyU25hcHNob3QgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBnZXRTZXJ2ZXJTbmFwc2hvdDtcblxuICAgIHZhciBnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZW1vaXplZFNlbGVjdG9yKGdldFNuYXBzaG90KCkpO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3IgPSBtYXliZUdldFNlcnZlclNuYXBzaG90ID09PSBudWxsID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IobWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCgpKTtcbiAgICB9O1xuICAgIHJldHVybiBbZ2V0U25hcHNob3RXaXRoU2VsZWN0b3IsIGdldFNlcnZlclNuYXBzaG90V2l0aFNlbGVjdG9yXTtcbiAgfSwgW2dldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWxdKSxcbiAgICAgIGdldFNlbGVjdGlvbiA9IF91c2VNZW1vWzBdLFxuICAgICAgZ2V0U2VydmVyU2VsZWN0aW9uID0gX3VzZU1lbW9bMV07XG5cbiAgdmFyIHZhbHVlID0gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTZWxlY3Rpb24sIGdldFNlcnZlclNlbGVjdGlvbik7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaW5zdC5oYXNWYWx1ZSA9IHRydWU7XG4gICAgaW5zdC52YWx1ZSA9IHZhbHVlO1xuICB9LCBbdmFsdWVdKTtcbiAgdXNlRGVidWdWYWx1ZSh2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsImZ1bmN0aW9uIHIoZSl7dmFyIHQsZixuPVwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlKW4rPWU7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlpZihBcnJheS5pc0FycmF5KGUpKXt2YXIgbz1lLmxlbmd0aDtmb3IodD0wO3Q8bzt0KyspZVt0XSYmKGY9cihlW3RdKSkmJihuJiYobis9XCIgXCIpLG4rPWYpfWVsc2UgZm9yKGYgaW4gZSllW2ZdJiYobiYmKG4rPVwiIFwiKSxuKz1mKTtyZXR1cm4gbn1leHBvcnQgZnVuY3Rpb24gY2xzeCgpe2Zvcih2YXIgZSx0LGY9MCxuPVwiXCIsbz1hcmd1bWVudHMubGVuZ3RoO2Y8bztmKyspKGU9YXJndW1lbnRzW2ZdKSYmKHQ9cihlKSkmJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBkZWZhdWx0IGNsc3g7IiwiLy8gc3JjL2luZGV4LnRzXG5pbXBvcnQgKiBhcyBSZWFjdDIgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjIgfSBmcm9tIFwidXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qc1wiO1xuXG4vLyBzcmMvdXRpbHMvcmVhY3QudHNcbmltcG9ydCAqIGFzIFJlYWN0T3JpZ2luYWwgZnJvbSBcInJlYWN0XCI7XG52YXIgUmVhY3QgPSAoXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICAvLyBAdHMtaWdub3JlXG4gIFwiZGVmYXVsdFwiIGluIFJlYWN0T3JpZ2luYWwgPyBSZWFjdE9yaWdpbmFsW1wiZGVmYXVsdFwiXSA6IFJlYWN0T3JpZ2luYWxcbik7XG5cbi8vIHNyYy9jb21wb25lbnRzL0NvbnRleHQudHNcbnZhciBDb250ZXh0S2V5ID0gU3ltYm9sLmZvcihgcmVhY3QtcmVkdXgtY29udGV4dGApO1xudmFyIGdUID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogKFxuICAvKiBmYWxsIGJhY2sgdG8gYSBwZXItbW9kdWxlIHNjb3BlIChwcmUtOC4xIGJlaGF2aW91cikgaWYgYGdsb2JhbFRoaXNgIGlzIG5vdCBhdmFpbGFibGUgKi9cbiAge31cbik7XG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICBpZiAoIVJlYWN0LmNyZWF0ZUNvbnRleHQpXG4gICAgcmV0dXJuIHt9O1xuICBjb25zdCBjb250ZXh0TWFwID0gZ1RbQ29udGV4dEtleV0gPz8gKGdUW0NvbnRleHRLZXldID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gIGxldCByZWFsQ29udGV4dCA9IGNvbnRleHRNYXAuZ2V0KFJlYWN0LmNyZWF0ZUNvbnRleHQpO1xuICBpZiAoIXJlYWxDb250ZXh0KSB7XG4gICAgcmVhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgcmVhbENvbnRleHQuZGlzcGxheU5hbWUgPSBcIlJlYWN0UmVkdXhcIjtcbiAgICB9XG4gICAgY29udGV4dE1hcC5zZXQoUmVhY3QuY3JlYXRlQ29udGV4dCwgcmVhbENvbnRleHQpO1xuICB9XG4gIHJldHVybiByZWFsQ29udGV4dDtcbn1cbnZhciBSZWFjdFJlZHV4Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBnZXRDb250ZXh0KCk7XG5cbi8vIHNyYy91dGlscy91c2VTeW5jRXh0ZXJuYWxTdG9yZS50c1xudmFyIG5vdEluaXRpYWxpemVkID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJ1U0VTIG5vdCBpbml0aWFsaXplZCFcIik7XG59O1xuXG4vLyBzcmMvaG9va3MvdXNlUmVkdXhDb250ZXh0LnRzXG5mdW5jdGlvbiBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gdXNlUmVkdXhDb250ZXh0MigpIHtcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KGNvbnRleHQpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWNvbnRleHRWYWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcImNvdWxkIG5vdCBmaW5kIHJlYWN0LXJlZHV4IGNvbnRleHQgdmFsdWU7IHBsZWFzZSBlbnN1cmUgdGhlIGNvbXBvbmVudCBpcyB3cmFwcGVkIGluIGEgPFByb3ZpZGVyPlwiXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICB9O1xufVxudmFyIHVzZVJlZHV4Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVSZWR1eENvbnRleHRIb29rKCk7XG5cbi8vIHNyYy9ob29rcy91c2VTZWxlY3Rvci50c1xudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gbm90SW5pdGlhbGl6ZWQ7XG52YXIgaW5pdGlhbGl6ZVVzZVNlbGVjdG9yID0gKGZuKSA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gZm47XG59O1xudmFyIHJlZkVxdWFsaXR5ID0gKGEsIGIpID0+IGEgPT09IGI7XG5mdW5jdGlvbiBjcmVhdGVTZWxlY3Rvckhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVJlZHV4Q29udGV4dDIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVJlZHV4Q29udGV4dCA6IGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dCk7XG4gIGNvbnN0IHVzZVNlbGVjdG9yMiA9IChzZWxlY3RvciwgZXF1YWxpdHlGbk9yT3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyBlcXVhbGl0eUZuID0gcmVmRXF1YWxpdHksIGRldk1vZGVDaGVja3MgPSB7fSB9ID0gdHlwZW9mIGVxdWFsaXR5Rm5Pck9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIiA/IHsgZXF1YWxpdHlGbjogZXF1YWxpdHlGbk9yT3B0aW9ucyB9IDogZXF1YWxpdHlGbk9yT3B0aW9ucztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yYCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvcmApO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlcXVhbGl0eUZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYW4gZXF1YWxpdHkgZnVuY3Rpb24gdG8gdXNlU2VsZWN0b3JgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgZ2V0U2VydmVyU3RhdGUsXG4gICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVja1xuICAgIH0gPSB1c2VSZWR1eENvbnRleHQyKCk7XG4gICAgY29uc3QgZmlyc3RSdW4gPSBSZWFjdC51c2VSZWYodHJ1ZSk7XG4gICAgY29uc3Qgd3JhcHBlZFNlbGVjdG9yID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgICB7XG4gICAgICAgIFtzZWxlY3Rvci5uYW1lXShzdGF0ZSkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrOiBmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayxcbiAgICAgICAgICAgICAgc3RhYmlsaXR5Q2hlY2s6IGZpbmFsU3RhYmlsaXR5Q2hlY2tcbiAgICAgICAgICAgIH0gPSB7XG4gICAgICAgICAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgICAgICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2ssXG4gICAgICAgICAgICAgIC4uLmRldk1vZGVDaGVja3NcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZmluYWxTdGFiaWxpdHlDaGVjayA9PT0gXCJhbHdheXNcIiB8fCBmaW5hbFN0YWJpbGl0eUNoZWNrID09PSBcIm9uY2VcIiAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRvQ29tcGFyZSA9IHNlbGVjdG9yKHN0YXRlKTtcbiAgICAgICAgICAgICAgaWYgKCFlcXVhbGl0eUZuKHNlbGVjdGVkLCB0b0NvbXBhcmUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAoeyBzdGFjayB9ID0gZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgIFwiU2VsZWN0b3IgXCIgKyAoc2VsZWN0b3IubmFtZSB8fCBcInVua25vd25cIikgKyBcIiByZXR1cm5lZCBhIGRpZmZlcmVudCByZXN1bHQgd2hlbiBjYWxsZWQgd2l0aCB0aGUgc2FtZSBwYXJhbWV0ZXJzLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy5cXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gYSBuZXcgcmVmZXJlbmNlIChzdWNoIGFzIGFuIG9iamVjdCBvciBhbiBhcnJheSkgc2hvdWxkIGJlIG1lbW9pemVkOiBodHRwczovL3JlZHV4LmpzLm9yZy91c2FnZS9kZXJpdmluZy1kYXRhLXNlbGVjdG9ycyNvcHRpbWl6aW5nLXNlbGVjdG9ycy13aXRoLW1lbW9pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQyOiB0b0NvbXBhcmUsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrID09PSBcImFsd2F5c1wiIHx8IGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrID09PSBcIm9uY2VcIiAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhY2sgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICh7IHN0YWNrIH0gPSBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgXCJTZWxlY3RvciBcIiArIChzZWxlY3Rvci5uYW1lIHx8IFwidW5rbm93blwiKSArIFwiIHJldHVybmVkIHRoZSByb290IHN0YXRlIHdoZW4gY2FsbGVkLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy5cXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gdGhlIGVudGlyZSBzdGF0ZSBhcmUgYWxtb3N0IGNlcnRhaW5seSBhIG1pc3Rha2UsIGFzIHRoZXkgd2lsbCBjYXVzZSBhIHJlcmVuZGVyIHdoZW5ldmVyICphbnl0aGluZyogaW4gc3RhdGUgY2hhbmdlcy5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhY2sgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaXJzdFJ1bi5jdXJyZW50KVxuICAgICAgICAgICAgICBmaXJzdFJ1bi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgfVtzZWxlY3Rvci5uYW1lXSxcbiAgICAgIFtzZWxlY3Rvciwgc3RhYmlsaXR5Q2hlY2ssIGRldk1vZGVDaGVja3Muc3RhYmlsaXR5Q2hlY2tdXG4gICAgKTtcbiAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IoXG4gICAgICBzdWJzY3JpcHRpb24uYWRkTmVzdGVkU3ViLFxuICAgICAgc3RvcmUuZ2V0U3RhdGUsXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZSB8fCBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgIHdyYXBwZWRTZWxlY3RvcixcbiAgICAgIGVxdWFsaXR5Rm5cbiAgICApO1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUoc2VsZWN0ZWRTdGF0ZSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkU3RhdGU7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlU2VsZWN0b3IyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VTZWxlY3RvcjJcbiAgfSk7XG4gIHJldHVybiB1c2VTZWxlY3RvcjI7XG59XG52YXIgdXNlU2VsZWN0b3IgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlU2VsZWN0b3JIb29rKCk7XG5cbi8vIHNyYy91dGlscy9yZWFjdC1pcy50c1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpO1xudmFyIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc2VydmVyX2NvbnRleHRcIik7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm9mZnNjcmVlblwiKTtcbnZhciBSRUFDVF9DTElFTlRfUkVGRVJFTkNFID0gU3ltYm9sLmZvcihcInJlYWN0LmNsaWVudC5yZWZlcmVuY2VcIik7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSBcIm9iamVjdFwiICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DTElFTlRfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG9iamVjdC50eXBlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBjb25zdCAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRToge1xuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2b2lkIDA7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuXG4vLyBzcmMvdXRpbHMvd2FybmluZy50c1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbi8vIHNyYy9jb25uZWN0L3ZlcmlmeVN1YnNlbGVjdG9ycy50c1xuZnVuY3Rpb24gdmVyaWZ5KHNlbGVjdG9yLCBtZXRob2ROYW1lKSB7XG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdmFsdWUgZm9yICR7bWV0aG9kTmFtZX0gaW4gY29ubmVjdC5gKTtcbiAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09PSBcIm1hcFN0YXRlVG9Qcm9wc1wiIHx8IG1ldGhvZE5hbWUgPT09IFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWxlY3RvciwgXCJkZXBlbmRzT25Pd25Qcm9wc1wiKSkge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgYFRoZSBzZWxlY3RvciBmb3IgJHttZXRob2ROYW1lfSBvZiBjb25uZWN0IGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy5gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKSB7XG4gIHZlcmlmeShtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpO1xuICB2ZXJpZnkobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKTtcbiAgdmVyaWZ5KG1lcmdlUHJvcHMsIFwibWVyZ2VQcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LnRzXG5mdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIHtcbiAgYXJlU3RhdGVzRXF1YWwsXG4gIGFyZU93blByb3BzRXF1YWwsXG4gIGFyZVN0YXRlUHJvcHNFcXVhbFxufSkge1xuICBsZXQgaGFzUnVuQXRMZWFzdE9uY2UgPSBmYWxzZTtcbiAgbGV0IHN0YXRlO1xuICBsZXQgb3duUHJvcHM7XG4gIGxldCBzdGF0ZVByb3BzO1xuICBsZXQgZGlzcGF0Y2hQcm9wcztcbiAgbGV0IG1lcmdlZFByb3BzO1xuICBmdW5jdGlvbiBoYW5kbGVGaXJzdENhbGwoZmlyc3RTdGF0ZSwgZmlyc3RPd25Qcm9wcykge1xuICAgIHN0YXRlID0gZmlyc3RTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IGZpcnN0T3duUHJvcHM7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIGhhc1J1bkF0TGVhc3RPbmNlID0gdHJ1ZTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpIHtcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wcygpIHtcbiAgICBpZiAobWFwU3RhdGVUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3U3RhdGUoKSB7XG4gICAgY29uc3QgbmV4dFN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpXG4gICAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICBjb25zdCBwcm9wc0NoYW5nZWQgPSAhYXJlT3duUHJvcHNFcXVhbChuZXh0T3duUHJvcHMsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZUNoYW5nZWQgPSAhYXJlU3RhdGVzRXF1YWwoXG4gICAgICBuZXh0U3RhdGUsXG4gICAgICBzdGF0ZSxcbiAgICAgIG5leHRPd25Qcm9wcyxcbiAgICAgIG93blByb3BzXG4gICAgKTtcbiAgICBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IG5leHRPd25Qcm9wcztcbiAgICBpZiAocHJvcHNDaGFuZ2VkICYmIHN0YXRlQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdQcm9wcygpO1xuICAgIGlmIChzdGF0ZUNoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3U3RhdGUoKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIHtcbiAgaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgaW5pdE1lcmdlUHJvcHMsXG4gIC4uLm9wdGlvbnNcbn0pIHtcbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gaW5pdE1hcFN0YXRlVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBjb25zdCBtZXJnZVByb3BzID0gaW5pdE1lcmdlUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKTtcbiAgfVxuICByZXR1cm4gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBvcHRpb25zKTtcbn1cblxuLy8gc3JjL3V0aWxzL2JpbmRBY3Rpb25DcmVhdG9ycy50c1xuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBjb25zdCBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgY29uc3QgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9ICguLi5hcmdzKSA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yKC4uLmFyZ3MpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cbi8vIHNyYy91dGlscy9pc1BsYWluT2JqZWN0LnRzXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiB8fCBvYmogPT09IG51bGwpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICBpZiAocHJvdG8gPT09IG51bGwpXG4gICAgcmV0dXJuIHRydWU7XG4gIGxldCBiYXNlUHJvdG8gPSBwcm90bztcbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pICE9PSBudWxsKSB7XG4gICAgYmFzZVByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90byk7XG4gIH1cbiAgcmV0dXJuIHByb3RvID09PSBiYXNlUHJvdG87XG59XG5cbi8vIHNyYy91dGlscy92ZXJpZnlQbGFpbk9iamVjdC50c1xuZnVuY3Rpb24gdmVyaWZ5UGxhaW5PYmplY3QodmFsdWUsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuaW5nKFxuICAgICAgYCR7bWV0aG9kTmFtZX0oKSBpbiAke2Rpc3BsYXlOYW1lfSBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdC4gSW5zdGVhZCByZWNlaXZlZCAke3ZhbHVlfS5gXG4gICAgKTtcbiAgfVxufVxuXG4vLyBzcmMvY29ubmVjdC93cmFwTWFwVG9Qcm9wcy50c1xuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNDb25zdGFudChnZXRDb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdENvbnN0YW50U2VsZWN0b3IoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBjb25zdGFudCA9IGdldENvbnN0YW50KGRpc3BhdGNoKTtcbiAgICBmdW5jdGlvbiBjb25zdGFudFNlbGVjdG9yKCkge1xuICAgICAgcmV0dXJuIGNvbnN0YW50O1xuICAgIH1cbiAgICBjb25zdGFudFNlbGVjdG9yLmRlcGVuZHNPbk93blByb3BzID0gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnN0YW50U2VsZWN0b3I7XG4gIH07XG59XG5mdW5jdGlvbiBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzID8gQm9vbGVhbihtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSA6IG1hcFRvUHJvcHMubGVuZ3RoICE9PSAxO1xufVxuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLCB7IGRpc3BsYXlOYW1lIH0pIHtcbiAgICBjb25zdCBwcm94eSA9IGZ1bmN0aW9uIG1hcFRvUHJvcHNQcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICByZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPyBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIDogcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIHZvaWQgMCk7XG4gICAgfTtcbiAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IHRydWU7XG4gICAgcHJveHkubWFwVG9Qcm9wcyA9IGZ1bmN0aW9uIGRldGVjdEZhY3RvcnlBbmRWZXJpZnkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IG1hcFRvUHJvcHM7XG4gICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpO1xuICAgICAgbGV0IHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICBpZiAodHlwZW9mIHByb3BzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IHByb3BzO1xuICAgICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKHByb3BzKTtcbiAgICAgICAgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHZlcmlmeVBsYWluT2JqZWN0KHByb3BzLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG59XG5cbi8vIHNyYy9jb25uZWN0L2ludmFsaWRBcmdGYWN0b3J5LnRzXG5mdW5jdGlvbiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShhcmcsIG5hbWUpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgb3B0aW9ucykgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIHZhbHVlIG9mIHR5cGUgJHt0eXBlb2YgYXJnfSBmb3IgJHtuYW1lfSBhcmd1bWVudCB3aGVuIGNvbm5lY3RpbmcgY29tcG9uZW50ICR7b3B0aW9ucy53cmFwcGVkQ29tcG9uZW50TmFtZX0uYFxuICAgICk7XG4gIH07XG59XG5cbi8vIHNyYy9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcy50c1xuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcyAmJiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSBcIm9iamVjdFwiID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChcbiAgICAoZGlzcGF0Y2gpID0+IChcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGJpbmRBY3Rpb25DcmVhdG9ycyhtYXBEaXNwYXRjaFRvUHJvcHMsIGRpc3BhdGNoKVxuICAgIClcbiAgKSA6ICFtYXBEaXNwYXRjaFRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KChkaXNwYXRjaCkgPT4gKHtcbiAgICBkaXNwYXRjaFxuICB9KSkgOiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSBcImZ1bmN0aW9uXCIgPyAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpXG4gICkgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9tYXBTdGF0ZVRvUHJvcHMudHNcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwU3RhdGVUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudCgoKSA9PiAoe30pKSA6IHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIilcbiAgKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L21lcmdlUHJvcHMudHNcbmZ1bmN0aW9uIGRlZmF1bHRNZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gIHJldHVybiB7IC4uLm93blByb3BzLCAuLi5zdGF0ZVByb3BzLCAuLi5kaXNwYXRjaFByb3BzIH07XG59XG5mdW5jdGlvbiB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdE1lcmdlUHJvcHNQcm94eShkaXNwYXRjaCwgeyBkaXNwbGF5TmFtZSwgYXJlTWVyZ2VkUHJvcHNFcXVhbCB9KSB7XG4gICAgbGV0IGhhc1J1bk9uY2UgPSBmYWxzZTtcbiAgICBsZXQgbWVyZ2VkUHJvcHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlUHJvcHNQcm94eShzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAgICAgY29uc3QgbmV4dE1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgICBpZiAoaGFzUnVuT25jZSkge1xuICAgICAgICBpZiAoIWFyZU1lcmdlZFByb3BzRXF1YWwobmV4dE1lcmdlZFByb3BzLCBtZXJnZWRQcm9wcykpXG4gICAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNSdW5PbmNlID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgdmVyaWZ5UGxhaW5PYmplY3QobWVyZ2VkUHJvcHMsIGRpc3BsYXlOYW1lLCBcIm1lcmdlUHJvcHNcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gKCkgPT4gZGVmYXVsdE1lcmdlUHJvcHMgOiB0eXBlb2YgbWVyZ2VQcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWVyZ2VQcm9wcywgXCJtZXJnZVByb3BzXCIpO1xufVxuXG4vLyBzcmMvdXRpbHMvYmF0Y2gudHNcbmZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soKTtcbn1cblxuLy8gc3JjL3V0aWxzL1N1YnNjcmlwdGlvbi50c1xuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICBsZXQgZmlyc3QgPSBudWxsO1xuICBsZXQgbGFzdCA9IG51bGw7XG4gIHJldHVybiB7XG4gICAgY2xlYXIoKSB7XG4gICAgICBmaXJzdCA9IG51bGw7XG4gICAgICBsYXN0ID0gbnVsbDtcbiAgICB9LFxuICAgIG5vdGlmeSgpIHtcbiAgICAgIGRlZmF1bHROb29wQmF0Y2goKCkgPT4ge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcbiAgICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKTtcbiAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0KCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gW107XG4gICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcbiAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgfSxcbiAgICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgIGxldCBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBsYXN0ID0ge1xuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgcHJldjogbGFzdFxuICAgICAgfTtcbiAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3QgPSBsaXN0ZW5lcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgZmlyc3QgPT09IG51bGwpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGxpc3RlbmVyLm5leHQpIHtcbiAgICAgICAgICBsaXN0ZW5lci5uZXh0LnByZXYgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3QgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgICAgbGlzdGVuZXIucHJldi5uZXh0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaXJzdCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxudmFyIG51bGxMaXN0ZW5lcnMgPSB7XG4gIG5vdGlmeSgpIHtcbiAgfSxcbiAgZ2V0OiAoKSA9PiBbXVxufTtcbmZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSwgcGFyZW50U3ViKSB7XG4gIGxldCB1bnN1YnNjcmliZTtcbiAgbGV0IGxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gIGxldCBzdWJzY3JpcHRpb25zQW1vdW50ID0gMDtcbiAgbGV0IHNlbGZTdWJzY3JpYmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGFkZE5lc3RlZFN1YihsaXN0ZW5lcikge1xuICAgIHRyeVN1YnNjcmliZSgpO1xuICAgIGNvbnN0IGNsZWFudXBMaXN0ZW5lciA9IGxpc3RlbmVycy5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghcmVtb3ZlZCkge1xuICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgY2xlYW51cExpc3RlbmVyKCk7XG4gICAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBub3RpZnlOZXN0ZWRTdWJzKCkge1xuICAgIGxpc3RlbmVycy5ub3RpZnkoKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VXcmFwcGVyKCkge1xuICAgIGlmIChzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBzZWxmU3Vic2NyaWJlZDtcbiAgfVxuICBmdW5jdGlvbiB0cnlTdWJzY3JpYmUoKSB7XG4gICAgc3Vic2NyaXB0aW9uc0Ftb3VudCsrO1xuICAgIGlmICghdW5zdWJzY3JpYmUpIHtcbiAgICAgIHVuc3Vic2NyaWJlID0gcGFyZW50U3ViID8gcGFyZW50U3ViLmFkZE5lc3RlZFN1YihoYW5kbGVDaGFuZ2VXcmFwcGVyKSA6IHN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2VXcmFwcGVyKTtcbiAgICAgIGxpc3RlbmVycyA9IGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpIHtcbiAgICBzdWJzY3JpcHRpb25zQW1vdW50LS07XG4gICAgaWYgKHVuc3Vic2NyaWJlICYmIHN1YnNjcmlwdGlvbnNBbW91bnQgPT09IDApIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICB1bnN1YnNjcmliZSA9IHZvaWQgMDtcbiAgICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgbGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5U3Vic2NyaWJlU2VsZigpIHtcbiAgICBpZiAoIXNlbGZTdWJzY3JpYmVkKSB7XG4gICAgICBzZWxmU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICB0cnlTdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmVTZWxmKCkge1xuICAgIGlmIChzZWxmU3Vic2NyaWJlZCkge1xuICAgICAgc2VsZlN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHtcbiAgICBhZGROZXN0ZWRTdWIsXG4gICAgbm90aWZ5TmVzdGVkU3VicyxcbiAgICBoYW5kbGVDaGFuZ2VXcmFwcGVyLFxuICAgIGlzU3Vic2NyaWJlZCxcbiAgICB0cnlTdWJzY3JpYmU6IHRyeVN1YnNjcmliZVNlbGYsXG4gICAgdHJ5VW5zdWJzY3JpYmU6IHRyeVVuc3Vic2NyaWJlU2VsZixcbiAgICBnZXRMaXN0ZW5lcnM6ICgpID0+IGxpc3RlbmVyc1xuICB9O1xuICByZXR1cm4gc3Vic2NyaXB0aW9uO1xufVxuXG4vLyBzcmMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC50c1xudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpO1xudmFyIGlzUmVhY3ROYXRpdmUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSBcIlJlYWN0TmF0aXZlXCI7XG52YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IGNhblVzZURPTSB8fCBpc1JlYWN0TmF0aXZlID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0O1xuXG4vLyBzcmMvdXRpbHMvc2hhbGxvd0VxdWFsLnRzXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKVxuICAgIHJldHVybiB0cnVlO1xuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gXCJvYmplY3RcIiB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIHNyYy91dGlscy9ob2lzdFN0YXRpY3MudHNcbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICQkdHlwZW9mOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICQkdHlwZW9mOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge1xuICBbRm9yd2FyZFJlZl06IEZPUldBUkRfUkVGX1NUQVRJQ1MsXG4gIFtNZW1vXTogTUVNT19TVEFUSUNTXG59O1xuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgaWYgKGlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfVxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFtcIiQkdHlwZW9mXCJdXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgY29uc3QgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIGNvbnN0IHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxuLy8gc3JjL2NvbXBvbmVudHMvY29ubmVjdC50c3hcbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IG5vdEluaXRpYWxpemVkO1xudmFyIGluaXRpYWxpemVDb25uZWN0ID0gKGZuKSA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gZm47XG59O1xudmFyIE5PX1NVQlNDUklQVElPTl9BUlJBWSA9IFtudWxsLCBudWxsXTtcbnZhciBzdHJpbmdpZnlDb21wb25lbnQgPSAoQ29tcCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShDb21wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhDb21wKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhlZmZlY3RGdW5jLCBlZmZlY3RBcmdzLCBkZXBlbmRlbmNpZXMpIHtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiBlZmZlY3RGdW5jKC4uLmVmZmVjdEFyZ3MpLCBkZXBlbmRlbmNpZXMpO1xufVxuZnVuY3Rpb24gY2FwdHVyZVdyYXBwZXJQcm9wcyhsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIHdyYXBwZXJQcm9wcywgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3Vicykge1xuICBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQgPSB3cmFwcGVyUHJvcHM7XG4gIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCkge1xuICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG51bGw7XG4gICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmVVcGRhdGVzKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcywgc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yLCBsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIGlzTW91bnRlZCwgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3VicywgYWRkaXRpb25hbFN1YnNjcmliZUxpc3RlbmVyKSB7XG4gIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgfTtcbiAgbGV0IGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG4gIGxldCBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICBjb25zdCBjaGVja0ZvclVwZGF0ZXMgPSAoKSA9PiB7XG4gICAgaWYgKGRpZFVuc3Vic2NyaWJlIHx8ICFpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYXRlc3RTdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBsZXQgbmV3Q2hpbGRQcm9wcywgZXJyb3I7XG4gICAgdHJ5IHtcbiAgICAgIG5ld0NoaWxkUHJvcHMgPSBjaGlsZFByb3BzU2VsZWN0b3IoXG4gICAgICAgIGxhdGVzdFN0b3JlU3RhdGUsXG4gICAgICAgIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvciA9IGU7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBlO1xuICAgIH1cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICAgIH1cbiAgICBpZiAobmV3Q2hpbGRQcm9wcyA9PT0gbGFzdENoaWxkUHJvcHMuY3VycmVudCkge1xuICAgICAgaWYgKCFyZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50KSB7XG4gICAgICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IHRydWU7XG4gICAgICBhZGRpdGlvbmFsU3Vic2NyaWJlTGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG4gIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gY2hlY2tGb3JVcGRhdGVzO1xuICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gIGNoZWNrRm9yVXBkYXRlcygpO1xuICBjb25zdCB1bnN1YnNjcmliZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcbiAgICBpZiAobGFzdFRocm93bkVycm9yKSB7XG4gICAgICB0aHJvdyBsYXN0VGhyb3duRXJyb3I7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdW5zdWJzY3JpYmVXcmFwcGVyO1xufVxuZnVuY3Rpb24gc3RyaWN0RXF1YWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uID0gZmFsc2U7XG5mdW5jdGlvbiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCB7XG4gIC8vIFRoZSBgcHVyZWAgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQsIHNvIFRTIGRvZXNuJ3QgbGlrZSB1cyBkZXN0cnVjdHVyaW5nIHRoaXMgdG8gY2hlY2sgaXRzIGV4aXN0ZW5jZS5cbiAgLy8gQHRzLWlnbm9yZVxuICBwdXJlLFxuICBhcmVTdGF0ZXNFcXVhbCA9IHN0cmljdEVxdWFsLFxuICBhcmVPd25Qcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIGFyZU1lcmdlZFByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIC8vIHVzZSBSZWFjdCdzIGZvcndhcmRSZWYgdG8gZXhwb3NlIGEgcmVmIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudFxuICBmb3J3YXJkUmVmID0gZmFsc2UsXG4gIC8vIHRoZSBjb250ZXh0IGNvbnN1bWVyIHRvIHVzZVxuICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHRcbn0gPSB7fSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHB1cmUgIT09IHZvaWQgMCAmJiAhaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbikge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbiA9IHRydWU7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICAnVGhlIGBwdXJlYCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZC4gYGNvbm5lY3RgIGlzIG5vdyBhbHdheXMgYSBcInB1cmUvbWVtb2l6ZWRcIiBjb21wb25lbnQnXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjb25zdCBDb250ZXh0ID0gY29udGV4dDtcbiAgY29uc3QgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKTtcbiAgY29uc3QgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzKTtcbiAgY29uc3QgaW5pdE1lcmdlUHJvcHMgPSBtZXJnZVByb3BzRmFjdG9yeShtZXJnZVByb3BzKTtcbiAgY29uc3Qgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzID0gQm9vbGVhbihtYXBTdGF0ZVRvUHJvcHMpO1xuICBjb25zdCB3cmFwV2l0aENvbm5lY3QgPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSAvKiBAX19QVVJFX18gKi8gaXNWYWxpZEVsZW1lbnRUeXBlKFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgaWYgKCFpc1ZhbGlkKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFlvdSBtdXN0IHBhc3MgYSBjb21wb25lbnQgdG8gdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGNvbm5lY3QuIEluc3RlYWQgcmVjZWl2ZWQgJHtzdHJpbmdpZnlDb21wb25lbnQoXG4gICAgICAgICAgICBXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgKX1gXG4gICAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID0gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgXCJDb21wb25lbnRcIjtcbiAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGBDb25uZWN0KCR7d3JhcHBlZENvbXBvbmVudE5hbWV9KWA7XG4gICAgY29uc3Qgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IHtcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIGRpc3BsYXlOYW1lLFxuICAgICAgd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50LFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wcyxcbiAgICAgIGFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIENvbm5lY3RGdW5jdGlvbihwcm9wcykge1xuICAgICAgY29uc3QgW3Byb3BzQ29udGV4dCwgcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgd3JhcHBlclByb3BzXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYyLCAuLi53cmFwcGVyUHJvcHMyIH0gPSBwcm9wcztcbiAgICAgICAgcmV0dXJuIFtwcm9wcy5jb250ZXh0LCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmMiwgd3JhcHBlclByb3BzMl07XG4gICAgICB9LCBbcHJvcHNdKTtcbiAgICAgIGNvbnN0IENvbnRleHRUb1VzZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBsZXQgUmVzdWx0Q29udGV4dCA9IENvbnRleHQ7XG4gICAgICAgIGlmIChwcm9wc0NvbnRleHQ/LkNvbnN1bWVyKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IC8qIEBfX1BVUkVfXyAqLyBpc0NvbnRleHRDb25zdW1lcihcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wc0NvbnRleHQuQ29uc3VtZXIsIG51bGwpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBcIllvdSBtdXN0IHBhc3MgYSB2YWxpZCBSZWFjdCBjb250ZXh0IGNvbnN1bWVyIGFzIGBwcm9wcy5jb250ZXh0YFwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZXN1bHRDb250ZXh0ID0gcHJvcHNDb250ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVzdWx0Q29udGV4dDtcbiAgICAgIH0sIFtwcm9wc0NvbnRleHQsIENvbnRleHRdKTtcbiAgICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dFRvVXNlKTtcbiAgICAgIGNvbnN0IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA9IEJvb2xlYW4ocHJvcHMuc3RvcmUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZ2V0U3RhdGUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgY29uc3QgZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPSBCb29sZWFuKGNvbnRleHRWYWx1ZSkgJiYgQm9vbGVhbihjb250ZXh0VmFsdWUuc3RvcmUpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhZGlkU3RvcmVDb21lRnJvbVByb3BzICYmICFkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENvdWxkIG5vdCBmaW5kIFwic3RvcmVcIiBpbiB0aGUgY29udGV4dCBvZiBcIiR7ZGlzcGxheU5hbWV9XCIuIEVpdGhlciB3cmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhIDxQcm92aWRlcj4sIG9yIHBhc3MgYSBjdXN0b20gUmVhY3QgY29udGV4dCBwcm92aWRlciB0byA8UHJvdmlkZXI+IGFuZCB0aGUgY29ycmVzcG9uZGluZyBSZWFjdCBjb250ZXh0IGNvbnN1bWVyIHRvICR7ZGlzcGxheU5hbWV9IGluIGNvbm5lY3Qgb3B0aW9ucy5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBzdG9yZSA9IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHByb3BzLnN0b3JlIDogY29udGV4dFZhbHVlLnN0b3JlO1xuICAgICAgY29uc3QgZ2V0U2VydmVyU3RhdGUgPSBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA/IGNvbnRleHRWYWx1ZS5nZXRTZXJ2ZXJTdGF0ZSA6IHN0b3JlLmdldFN0YXRlO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc1NlbGVjdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiBmaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KHN0b3JlLmRpc3BhdGNoLCBzZWxlY3RvckZhY3RvcnlPcHRpb25zKTtcbiAgICAgIH0sIFtzdG9yZV0pO1xuICAgICAgY29uc3QgW3N1YnNjcmlwdGlvbiwgbm90aWZ5TmVzdGVkU3Vic10gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpXG4gICAgICAgICAgcmV0dXJuIE5PX1NVQlNDUklQVElPTl9BUlJBWTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uMiA9IGNyZWF0ZVN1YnNjcmlwdGlvbihcbiAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyB2b2lkIDAgOiBjb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5vdGlmeU5lc3RlZFN1YnMyID0gc3Vic2NyaXB0aW9uMi5ub3RpZnlOZXN0ZWRTdWJzLmJpbmQoc3Vic2NyaXB0aW9uMik7XG4gICAgICAgIHJldHVybiBbc3Vic2NyaXB0aW9uMiwgbm90aWZ5TmVzdGVkU3ViczJdO1xuICAgICAgfSwgW3N0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZV0pO1xuICAgICAgY29uc3Qgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoZGlkU3RvcmVDb21lRnJvbVByb3BzKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmNvbnRleHRWYWx1ZSxcbiAgICAgICAgICBzdWJzY3JpcHRpb25cbiAgICAgICAgfTtcbiAgICAgIH0sIFtkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZSwgc3Vic2NyaXB0aW9uXSk7XG4gICAgICBjb25zdCBsYXN0Q2hpbGRQcm9wcyA9IFJlYWN0LnVzZVJlZih2b2lkIDApO1xuICAgICAgY29uc3QgbGFzdFdyYXBwZXJQcm9wcyA9IFJlYWN0LnVzZVJlZih3cmFwcGVyUHJvcHMpO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSA9IFJlYWN0LnVzZVJlZih2b2lkIDApO1xuICAgICAgY29uc3QgcmVuZGVySXNTY2hlZHVsZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgICAgY29uc3QgaXNNb3VudGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICAgIGNvbnN0IGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IgPSBSZWFjdC51c2VSZWYoXG4gICAgICAgIHZvaWQgMFxuICAgICAgKTtcbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFtdKTtcbiAgICAgIGNvbnN0IGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ICYmIHdyYXBwZXJQcm9wcyA9PT0gbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc1NlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHdyYXBwZXJQcm9wcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgIH0sIFtzdG9yZSwgd3JhcHBlclByb3BzXSk7XG4gICAgICBjb25zdCBzdWJzY3JpYmVGb3JSZWFjdCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmUgPSAocmVhY3RMaXN0ZW5lcikgPT4ge1xuICAgICAgICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN1YnNjcmliZVVwZGF0ZXMoXG4gICAgICAgICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNoaWxkUHJvcHNTZWxlY3RvcixcbiAgICAgICAgICAgIGxhc3RXcmFwcGVyUHJvcHMsXG4gICAgICAgICAgICBsYXN0Q2hpbGRQcm9wcyxcbiAgICAgICAgICAgIHJlbmRlcklzU2NoZWR1bGVkLFxuICAgICAgICAgICAgaXNNb3VudGVkLFxuICAgICAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSxcbiAgICAgICAgICAgIG5vdGlmeU5lc3RlZFN1YnMsXG4gICAgICAgICAgICByZWFjdExpc3RlbmVyXG4gICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZTtcbiAgICAgIH0sIFtzdWJzY3JpcHRpb25dKTtcbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhjYXB0dXJlV3JhcHBlclByb3BzLCBbXG4gICAgICAgIGxhc3RXcmFwcGVyUHJvcHMsXG4gICAgICAgIGxhc3RDaGlsZFByb3BzLFxuICAgICAgICByZW5kZXJJc1NjaGVkdWxlZCxcbiAgICAgICAgd3JhcHBlclByb3BzLFxuICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLFxuICAgICAgICBub3RpZnlOZXN0ZWRTdWJzXG4gICAgICBdKTtcbiAgICAgIGxldCBhY3R1YWxDaGlsZFByb3BzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYWN0dWFsQ2hpbGRQcm9wcyA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKFxuICAgICAgICAgIC8vIFRPRE8gV2UncmUgcGFzc2luZyB0aHJvdWdoIGEgYmlnIHdyYXBwZXIgdGhhdCBkb2VzIGEgYnVuY2ggb2YgZXh0cmEgc2lkZSBlZmZlY3RzIGJlc2lkZXMgc3Vic2NyaWJpbmdcbiAgICAgICAgICBzdWJzY3JpYmVGb3JSZWFjdCxcbiAgICAgICAgICAvLyBUT0RPIFRoaXMgaXMgaW5jcmVkaWJseSBoYWNreS4gV2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgdGhlIHN0b3JlIHVwZGF0ZSBhbmQgY2FsY3VsYXRlZCBuZXcgY2hpbGQgcHJvcHMsXG4gICAgICAgICAgLy8gVE9ETyBhbmQgd2UncmUganVzdCBwYXNzaW5nIHRoYXQgdGhyb3VnaCBzbyBpdCB0cmlnZ2VycyBhIHJlLXJlbmRlciBmb3IgdXMgcmF0aGVyIHRoYW4gcmVseWluZyBvbiBgdVNFU2AuXG4gICAgICAgICAgYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yLFxuICAgICAgICAgIGdldFNlcnZlclN0YXRlID8gKCkgPT4gY2hpbGRQcm9wc1NlbGVjdG9yKGdldFNlcnZlclN0YXRlKCksIHdyYXBwZXJQcm9wcykgOiBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3JcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAobGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50KSB7XG4gICAgICAgICAgO1xuICAgICAgICAgIGVyci5tZXNzYWdlICs9IGBcblRoZSBlcnJvciBtYXkgYmUgY29ycmVsYXRlZCB3aXRoIHRoaXMgcHJldmlvdXMgZXJyb3I6XG4ke2xhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudC5zdGFja31cblxuYDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gdm9pZCAwO1xuICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSB2b2lkIDA7XG4gICAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBhY3R1YWxDaGlsZFByb3BzO1xuICAgICAgfSk7XG4gICAgICBjb25zdCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBXcmFwcGVkQ29tcG9uZW50LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5hY3R1YWxDaGlsZFByb3BzLFxuICAgICAgICAgICAgICByZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9LCBbcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgV3JhcHBlZENvbXBvbmVudCwgYWN0dWFsQ2hpbGRQcm9wc10pO1xuICAgICAgY29uc3QgcmVuZGVyZWRDaGlsZCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHRUb1VzZS5Qcm92aWRlciwgeyB2YWx1ZTogb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZSB9LCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICB9LCBbQ29udGV4dFRvVXNlLCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQsIG92ZXJyaWRkZW5Db250ZXh0VmFsdWVdKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkO1xuICAgIH1cbiAgICBjb25zdCBfQ29ubmVjdCA9IFJlYWN0Lm1lbW8oQ29ubmVjdEZ1bmN0aW9uKTtcbiAgICBjb25zdCBDb25uZWN0ID0gX0Nvbm5lY3Q7XG4gICAgQ29ubmVjdC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICBDb25uZWN0LmRpc3BsYXlOYW1lID0gQ29ubmVjdEZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgaWYgKGZvcndhcmRSZWYpIHtcbiAgICAgIGNvbnN0IF9mb3J3YXJkZWQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAgICAgICBmdW5jdGlvbiBmb3J3YXJkQ29ubmVjdFJlZihwcm9wcywgcmVmKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbm5lY3QsIHsgLi4ucHJvcHMsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlZiB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGZvcndhcmRlZCA9IF9mb3J3YXJkZWQ7XG4gICAgICBmb3J3YXJkZWQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgIGZvcndhcmRlZC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaG9pc3ROb25SZWFjdFN0YXRpY3MoZm9yd2FyZGVkLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBob2lzdE5vblJlYWN0U3RhdGljcyhDb25uZWN0LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcbiAgcmV0dXJuIHdyYXBXaXRoQ29ubmVjdDtcbn1cbnZhciBjb25uZWN0X2RlZmF1bHQgPSBjb25uZWN0O1xuXG4vLyBzcmMvY29tcG9uZW50cy9Qcm92aWRlci50c3hcbmZ1bmN0aW9uIFByb3ZpZGVyKHtcbiAgc3RvcmUsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICBzZXJ2ZXJTdGF0ZSxcbiAgc3RhYmlsaXR5Q2hlY2sgPSBcIm9uY2VcIixcbiAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrID0gXCJvbmNlXCJcbn0pIHtcbiAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZTogc2VydmVyU3RhdGUgPyAoKSA9PiBzZXJ2ZXJTdGF0ZSA6IHZvaWQgMCxcbiAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrXG4gICAgfTtcbiAgfSwgW3N0b3JlLCBzZXJ2ZXJTdGF0ZSwgc3RhYmlsaXR5Q2hlY2ssIGlkZW50aXR5RnVuY3Rpb25DaGVja10pO1xuICBjb25zdCBwcmV2aW91c1N0YXRlID0gUmVhY3QudXNlTWVtbygoKSA9PiBzdG9yZS5nZXRTdGF0ZSgpLCBbc3RvcmVdKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBzdWJzY3JpcHRpb24gfSA9IGNvbnRleHRWYWx1ZTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgICBpZiAocHJldmlvdXNTdGF0ZSAhPT0gc3RvcmUuZ2V0U3RhdGUoKSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSB2b2lkIDA7XG4gICAgfTtcbiAgfSwgW2NvbnRleHRWYWx1ZSwgcHJldmlvdXNTdGF0ZV0pO1xuICBjb25zdCBDb250ZXh0ID0gY29udGV4dCB8fCBSZWFjdFJlZHV4Q29udGV4dDtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbnRleHRWYWx1ZSB9LCBjaGlsZHJlbik7XG59XG52YXIgUHJvdmlkZXJfZGVmYXVsdCA9IFByb3ZpZGVyO1xuXG4vLyBzcmMvaG9va3MvdXNlU3RvcmUudHNcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlUmVkdXhDb250ZXh0MiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlUmVkdXhDb250ZXh0IDogKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQpXG4gICk7XG4gIGNvbnN0IHVzZVN0b3JlMiA9ICgpID0+IHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB1c2VSZWR1eENvbnRleHQyKCk7XG4gICAgcmV0dXJuIHN0b3JlO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZVN0b3JlMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlU3RvcmUyXG4gIH0pO1xuICByZXR1cm4gdXNlU3RvcmUyO1xufVxudmFyIHVzZVN0b3JlID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVN0b3JlSG9vaygpO1xuXG4vLyBzcmMvaG9va3MvdXNlRGlzcGF0Y2gudHNcbmZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlU3RvcmUyID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VTdG9yZSA6IGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0KTtcbiAgY29uc3QgdXNlRGlzcGF0Y2gyID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUyKCk7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZURpc3BhdGNoMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlRGlzcGF0Y2gyXG4gIH0pO1xuICByZXR1cm4gdXNlRGlzcGF0Y2gyO1xufVxudmFyIHVzZURpc3BhdGNoID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZURpc3BhdGNoSG9vaygpO1xuXG4vLyBzcmMvZXhwb3J0cy50c1xudmFyIGJhdGNoID0gZGVmYXVsdE5vb3BCYXRjaDtcblxuLy8gc3JjL2luZGV4LnRzXG5pbml0aWFsaXplVXNlU2VsZWN0b3IodXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IyKTtcbmluaXRpYWxpemVDb25uZWN0KFJlYWN0Mi51c2VTeW5jRXh0ZXJuYWxTdG9yZSk7XG5leHBvcnQge1xuICBQcm92aWRlcl9kZWZhdWx0IGFzIFByb3ZpZGVyLFxuICBSZWFjdFJlZHV4Q29udGV4dCxcbiAgYmF0Y2gsXG4gIGNvbm5lY3RfZGVmYXVsdCBhcyBjb25uZWN0LFxuICBjcmVhdGVEaXNwYXRjaEhvb2ssXG4gIGNyZWF0ZVNlbGVjdG9ySG9vayxcbiAgY3JlYXRlU3RvcmVIb29rLFxuICBzaGFsbG93RXF1YWwsXG4gIHVzZURpc3BhdGNoLFxuICB1c2VTZWxlY3RvcixcbiAgdXNlU3RvcmVcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1yZWR1eC5tanMubWFwIiwiXCJ1c2UgY2xpZW50XCI7XG5mdW5jdGlvbiBNdCh0KXtpZighdHx8dHlwZW9mIGRvY3VtZW50PT1cInVuZGVmaW5lZFwiKXJldHVybjtsZXQgbz1kb2N1bWVudC5oZWFkfHxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0sZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7ZS50eXBlPVwidGV4dC9jc3NcIixvLmZpcnN0Q2hpbGQ/by5pbnNlcnRCZWZvcmUoZSxvLmZpcnN0Q2hpbGQpOm8uYXBwZW5kQ2hpbGQoZSksZS5zdHlsZVNoZWV0P2Uuc3R5bGVTaGVldC5jc3NUZXh0PXQ6ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KSl9TXQoYDpyb290ey0tdG9hc3RpZnktY29sb3ItbGlnaHQ6ICNmZmY7LS10b2FzdGlmeS1jb2xvci1kYXJrOiAjMTIxMjEyOy0tdG9hc3RpZnktY29sb3ItaW5mbzogIzM0OThkYjstLXRvYXN0aWZ5LWNvbG9yLXN1Y2Nlc3M6ICMwN2JjMGM7LS10b2FzdGlmeS1jb2xvci13YXJuaW5nOiAjZjFjNDBmOy0tdG9hc3RpZnktY29sb3ItZXJyb3I6IGhzbCg2LCA3OCUsIDU3JSk7LS10b2FzdGlmeS1jb2xvci10cmFuc3BhcmVudDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNyk7LS10b2FzdGlmeS1pY29uLWNvbG9yLWluZm86IHZhcigtLXRvYXN0aWZ5LWNvbG9yLWluZm8pOy0tdG9hc3RpZnktaWNvbi1jb2xvci1zdWNjZXNzOiB2YXIoLS10b2FzdGlmeS1jb2xvci1zdWNjZXNzKTstLXRvYXN0aWZ5LWljb24tY29sb3Itd2FybmluZzogdmFyKC0tdG9hc3RpZnktY29sb3Itd2FybmluZyk7LS10b2FzdGlmeS1pY29uLWNvbG9yLWVycm9yOiB2YXIoLS10b2FzdGlmeS1jb2xvci1lcnJvcik7LS10b2FzdGlmeS1jb250YWluZXItd2lkdGg6IGZpdC1jb250ZW50Oy0tdG9hc3RpZnktdG9hc3Qtd2lkdGg6IDMyMHB4Oy0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0OiAxNnB4Oy0tdG9hc3RpZnktdG9hc3QtdG9wOiBtYXgodmFyKC0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0KSwgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTstLXRvYXN0aWZ5LXRvYXN0LXJpZ2h0OiBtYXgodmFyKC0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0KSwgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpOy0tdG9hc3RpZnktdG9hc3QtbGVmdDogbWF4KHZhcigtLXRvYXN0aWZ5LXRvYXN0LW9mZnNldCksIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkpOy0tdG9hc3RpZnktdG9hc3QtYm90dG9tOiBtYXgodmFyKC0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0KSwgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTstLXRvYXN0aWZ5LXRvYXN0LWJhY2tncm91bmQ6ICNmZmY7LS10b2FzdGlmeS10b2FzdC1wYWRkaW5nOiAxNHB4Oy0tdG9hc3RpZnktdG9hc3QtbWluLWhlaWdodDogNjRweDstLXRvYXN0aWZ5LXRvYXN0LW1heC1oZWlnaHQ6IDgwMHB4Oy0tdG9hc3RpZnktdG9hc3QtYmQtcmFkaXVzOiA2cHg7LS10b2FzdGlmeS10b2FzdC1zaGFkb3c6IDBweCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIC4xKTstLXRvYXN0aWZ5LWZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOy0tdG9hc3RpZnktei1pbmRleDogOTk5OTstLXRvYXN0aWZ5LXRleHQtY29sb3ItbGlnaHQ6ICM3NTc1NzU7LS10b2FzdGlmeS10ZXh0LWNvbG9yLWRhcms6ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLWluZm86ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLXN1Y2Nlc3M6ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLXdhcm5pbmc6ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLWVycm9yOiAjZmZmOy0tdG9hc3RpZnktc3Bpbm5lci1jb2xvcjogIzYxNjE2MTstLXRvYXN0aWZ5LXNwaW5uZXItY29sb3ItZW1wdHktYXJlYTogI2UwZTBlMDstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWxpZ2h0OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0Y2Q5NjQsICM1YWM4ZmEsICMwMDdhZmYsICMzNGFhZGMsICM1ODU2ZDYsICNmZjJkNTUpOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtZGFyazogI2JiODZmYzstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWluZm86IHZhcigtLXRvYXN0aWZ5LWNvbG9yLWluZm8pOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3Mtc3VjY2VzczogdmFyKC0tdG9hc3RpZnktY29sb3Itc3VjY2Vzcyk7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy13YXJuaW5nOiB2YXIoLS10b2FzdGlmeS1jb2xvci13YXJuaW5nKTstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWVycm9yOiB2YXIoLS10b2FzdGlmeS1jb2xvci1lcnJvcik7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1iZ286IC4yfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVye3otaW5kZXg6dmFyKC0tdG9hc3RpZnktei1pbmRleCk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLHZhcigtLXRvYXN0aWZ5LXotaW5kZXgpKTtwb3NpdGlvbjpmaXhlZDt3aWR0aDp2YXIoLS10b2FzdGlmeS1jb250YWluZXItd2lkdGgpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjojZmZmO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1sZWZ0e3RvcDp2YXIoLS10b2FzdGlmeS10b2FzdC10b3ApO2xlZnQ6dmFyKC0tdG9hc3RpZnktdG9hc3QtbGVmdCl9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1jZW50ZXJ7dG9wOnZhcigtLXRvYXN0aWZ5LXRvYXN0LXRvcCk7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKTthbGlnbi1pdGVtczpjZW50ZXJ9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1yaWdodHt0b3A6dmFyKC0tdG9hc3RpZnktdG9hc3QtdG9wKTtyaWdodDp2YXIoLS10b2FzdGlmeS10b2FzdC1yaWdodCk7YWxpZ24taXRlbXM6ZW5kfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tbGVmdHtib3R0b206dmFyKC0tdG9hc3RpZnktdG9hc3QtYm90dG9tKTtsZWZ0OnZhcigtLXRvYXN0aWZ5LXRvYXN0LWxlZnQpfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tY2VudGVye2JvdHRvbTp2YXIoLS10b2FzdGlmeS10b2FzdC1ib3R0b20pO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7YWxpZ24taXRlbXM6Y2VudGVyfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tcmlnaHR7Ym90dG9tOnZhcigtLXRvYXN0aWZ5LXRvYXN0LWJvdHRvbSk7cmlnaHQ6dmFyKC0tdG9hc3RpZnktdG9hc3QtcmlnaHQpO2FsaWduLWl0ZW1zOmVuZH0uVG9hc3RpZnlfX3RvYXN0ey0teTogMDtwb3NpdGlvbjpyZWxhdGl2ZTt0b3VjaC1hY3Rpb246bm9uZTt3aWR0aDp2YXIoLS10b2FzdGlmeS10b2FzdC13aWR0aCk7bWluLWhlaWdodDp2YXIoLS10b2FzdGlmeS10b2FzdC1taW4taGVpZ2h0KTtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luLWJvdHRvbToxcmVtO3BhZGRpbmc6dmFyKC0tdG9hc3RpZnktdG9hc3QtcGFkZGluZyk7Ym9yZGVyLXJhZGl1czp2YXIoLS10b2FzdGlmeS10b2FzdC1iZC1yYWRpdXMpO2JveC1zaGFkb3c6dmFyKC0tdG9hc3RpZnktdG9hc3Qtc2hhZG93KTttYXgtaGVpZ2h0OnZhcigtLXRvYXN0aWZ5LXRvYXN0LW1heC1oZWlnaHQpO2ZvbnQtZmFtaWx5OnZhcigtLXRvYXN0aWZ5LWZvbnQtZmFtaWx5KTt6LWluZGV4OjA7ZGlzcGxheTpmbGV4O2ZsZXg6MSBhdXRvO2FsaWduLWl0ZW1zOmNlbnRlcjt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXJ7d2lkdGg6MTAwdnc7bGVmdDplbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO21hcmdpbjowfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS10b3AtbGVmdCwuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLWNlbnRlciwuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLXJpZ2h0e3RvcDplbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tYm90dG9tLWxlZnQsLlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1jZW50ZXIsLlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1yaWdodHtib3R0b206ZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXJ0bHtyaWdodDplbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtsZWZ0OmluaXRpYWx9LlRvYXN0aWZ5X190b2FzdHstLXRvYXN0aWZ5LXRvYXN0LXdpZHRoOiAxMDAlO21hcmdpbi1ib3R0b206MDtib3JkZXItcmFkaXVzOjB9fS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyW2RhdGEtc3RhY2tlZD10cnVlXXt3aWR0aDp2YXIoLS10b2FzdGlmeS10b2FzdC13aWR0aCl9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApIHNjYWxlKHZhcigtLXMpKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3N9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLWNvbGxhcHNlZF0gLlRvYXN0aWZ5X190b2FzdC1ib2R5LC5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1jb2xsYXBzZWRdIC5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9ue3RyYW5zaXRpb246b3BhY2l0eSAuMXN9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLWNvbGxhcHNlZD1mYWxzZV17b3ZlcmZsb3c6dmlzaWJsZX0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtY29sbGFwc2VkPXRydWVdOm5vdCg6bGFzdC1jaGlsZCk+KntvcGFjaXR5OjB9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDphZnRlcntjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OmNhbGModmFyKC0tZykgKiAxcHgpO2JvdHRvbToxMDAlfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1wb3M9dG9wXXt0b3A6MH0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtcG9zPWJvdF17Ym90dG9tOjB9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLXBvcz1ib3RdLlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDpiZWZvcmV7dHJhbnNmb3JtLW9yaWdpbjp0b3B9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLXBvcz10b3BdLlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDpiZWZvcmV7dHJhbnNmb3JtLW9yaWdpbjpib3R0b219LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2hlaWdodDoxMDAlO3RyYW5zZm9ybTpzY2FsZVkoMyk7ei1pbmRleDotMX0uVG9hc3RpZnlfX3RvYXN0LS1ydGx7ZGlyZWN0aW9uOnJ0bH0uVG9hc3RpZnlfX3RvYXN0LS1jbG9zZS1vbi1jbGlja3tjdXJzb3I6cG9pbnRlcn0uVG9hc3RpZnlfX3RvYXN0LWljb257bWFyZ2luLWlubGluZS1lbmQ6MTBweDt3aWR0aDoyMnB4O2ZsZXgtc2hyaW5rOjA7ZGlzcGxheTpmbGV4fS5Ub2FzdGlmeS0tYW5pbWF0ZXthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOi41c30uVG9hc3RpZnktLWFuaW1hdGUtaWNvbnthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOi4zc30uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1kYXJre2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItZGFyayk7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci1kYXJrKX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1saWdodCwuVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0tZGVmYXVsdHtiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLWxpZ2h0KTtjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLWxpZ2h0KX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0taW5mb3tjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLWluZm8pO2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItaW5mbyl9LlRvYXN0aWZ5X190b2FzdC10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fdG9hc3QtLXN1Y2Nlc3N7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci1zdWNjZXNzKTtiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXN1Y2Nlc3MpfS5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3RvYXN0LS13YXJuaW5ne2NvbG9yOnZhcigtLXRvYXN0aWZ5LXRleHQtY29sb3Itd2FybmluZyk7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci13YXJuaW5nKX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0tZXJyb3J7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci1lcnJvcik7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1lcnJvcil9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWxpZ2h0e2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtbGlnaHQpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1kYXJre2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtZGFyayl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWluZm97YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1pbmZvKX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tc3VjY2Vzc3tiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLXN1Y2Nlc3MpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13YXJuaW5ne2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3Mtd2FybmluZyl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWVycm9ye2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtZXJyb3IpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWluZm8sLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tc3VjY2VzcywuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13YXJuaW5nLC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWVycm9ye2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItdHJhbnNwYXJlbnQpfS5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9ue2NvbG9yOiNmZmY7cG9zaXRpb246YWJzb2x1dGU7dG9wOjZweDtyaWdodDo2cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtvdXRsaW5lOm5vbmU7Ym9yZGVyOm5vbmU7cGFkZGluZzowO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6Ljc7dHJhbnNpdGlvbjouM3MgZWFzZTt6LWluZGV4OjF9LlRvYXN0aWZ5X190b2FzdC0tcnRsIC5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9ue2xlZnQ6NnB4O3JpZ2h0OnVuc2V0fS5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uLS1saWdodHtjb2xvcjojMDAwO29wYWNpdHk6LjN9LlRvYXN0aWZ5X19jbG9zZS1idXR0b24+c3Zne2ZpbGw6Y3VycmVudENvbG9yO2hlaWdodDoxNnB4O3dpZHRoOjE0cHh9LlRvYXN0aWZ5X19jbG9zZS1idXR0b246aG92ZXIsLlRvYXN0aWZ5X19jbG9zZS1idXR0b246Zm9jdXN7b3BhY2l0eToxfUBrZXlmcmFtZXMgVG9hc3RpZnlfX3RyYWNrUHJvZ3Jlc3N7MCV7dHJhbnNmb3JtOnNjYWxlWCgxKX10b3t0cmFuc2Zvcm06c2NhbGVYKDApfX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjE7b3BhY2l0eTouNzt0cmFuc2Zvcm0tb3JpZ2luOmxlZnR9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWFuaW1hdGVke2FuaW1hdGlvbjpUb2FzdGlmeV9fdHJhY2tQcm9ncmVzcyBsaW5lYXIgMSBmb3J3YXJkc30uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tY29udHJvbGxlZHt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnN9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXJ0bHtyaWdodDowO2xlZnQ6aW5pdGlhbDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6aW5pdGlhbH0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0td3Jwe3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OmhpZGRlbjtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6NXB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tdG9hc3RpZnktdG9hc3QtYmQtcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS10b2FzdGlmeS10b2FzdC1iZC1yYWRpdXMpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13cnBbZGF0YS1oaWRkZW49dHJ1ZV17b3BhY2l0eTowfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1iZ3tvcGFjaXR5OnZhcigtLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWJnbyk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uVG9hc3RpZnlfX3NwaW5uZXJ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjJweCBzb2xpZDtib3JkZXItcmFkaXVzOjEwMCU7Ym9yZGVyLWNvbG9yOnZhcigtLXRvYXN0aWZ5LXNwaW5uZXItY29sb3ItZW1wdHktYXJlYSk7Ym9yZGVyLXJpZ2h0LWNvbG9yOnZhcigtLXRvYXN0aWZ5LXNwaW5uZXItY29sb3IpO2FuaW1hdGlvbjpUb2FzdGlmeV9fc3BpbiAuNjVzIGxpbmVhciBpbmZpbml0ZX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VJblJpZ2h0ezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMDAwcHgsMCwwKX02MCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjVweCwwLDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTVweCwwLDApfXRve3RyYW5zZm9ybTpub25lfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXRSaWdodHsyMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjBweCx2YXIoLS15KSwwKX10b3tvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlSW5MZWZ0ezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMzAwMHB4LDAsMCl9NjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjVweCwwLDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDVweCwwLDApfXRve3RyYW5zZm9ybTpub25lfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXRMZWZ0ezIwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwcHgsdmFyKC0teSksMCl9dG97b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VJblVwezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDMwMDBweCwwKX02MCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMHB4LDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMHB4LDApfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNXB4LDApfXRve3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXRVcHsyMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYyh2YXIoLS15KSAtIDEwcHgpLDApfTQwJSw0NSV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLGNhbGModmFyKC0teSkgKyAyMHB4KSwwKX10b3tvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlSW5Eb3duezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0zMDAwcHgsMCl9NjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyNXB4LDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApfXRve3RyYW5zZm9ybTpub25lfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXREb3duezIwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKHZhcigtLXkpIC0gMTBweCksMCl9NDAlLDQ1JXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYyh2YXIoLS15KSArIDIwcHgpLDApfXRve29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMDAwcHgsMCl9fS5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS10b3AtbGVmdCwuVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tYm90dG9tLWxlZnR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZUluTGVmdH0uVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tdG9wLXJpZ2h0LC5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS1ib3R0b20tcmlnaHR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZUluUmlnaHR9LlRvYXN0aWZ5X19ib3VuY2UtZW50ZXItLXRvcC1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZUluRG93bn0uVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tYm90dG9tLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlSW5VcH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS10b3AtbGVmdCwuVG9hc3RpZnlfX2JvdW5jZS1leGl0LS1ib3R0b20tbGVmdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlT3V0TGVmdH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS10b3AtcmlnaHQsLlRvYXN0aWZ5X19ib3VuY2UtZXhpdC0tYm90dG9tLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VPdXRSaWdodH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS10b3AtY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VPdXRVcH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS1ib3R0b20tY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VPdXREb3dufUBrZXlmcmFtZXMgVG9hc3RpZnlfX3pvb21JbnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfTUwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3pvb21PdXR7MCV7b3BhY2l0eToxfTUwJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCkgc2NhbGUzZCguMywuMywuMyl9dG97b3BhY2l0eTowfX0uVG9hc3RpZnlfX3pvb20tZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3pvb21Jbn0uVG9hc3RpZnlfX3pvb20tZXhpdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fem9vbU91dH1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19mbGlwSW57MCV7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47b3BhY2l0eTowfTQwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTIwZGVnKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59NjAle3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7b3BhY2l0eToxfTgwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTVkZWcpfXRve3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2ZsaXBPdXR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCkgcGVyc3BlY3RpdmUoNDAwcHgpfTMwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKSBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpO29wYWNpdHk6MX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKSBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7b3BhY2l0eTowfX0uVG9hc3RpZnlfX2ZsaXAtZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2ZsaXBJbn0uVG9hc3RpZnlfX2ZsaXAtZXhpdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fZmxpcE91dH1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZUluUmlnaHR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDExMCUsMCwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlSW5MZWZ0ezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTEwJSwwLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVJblVwezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDExMCUsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZUluRG93bnswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTEwJSwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlT3V0UmlnaHR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDExMCUsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlT3V0TGVmdHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTExMCUsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlT3V0RG93bnswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1MDBweCwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVPdXRVcHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNTAwcHgsMCl9fS5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLXRvcC1sZWZ0LC5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLWJvdHRvbS1sZWZ0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZUluTGVmdH0uVG9hc3RpZnlfX3NsaWRlLWVudGVyLS10b3AtcmlnaHQsLlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tYm90dG9tLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZUluUmlnaHR9LlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tdG9wLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVJbkRvd259LlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tYm90dG9tLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVJblVwfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tdG9wLWxlZnQsLlRvYXN0aWZ5X19zbGlkZS1leGl0LS1ib3R0b20tbGVmdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVPdXRMZWZ0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tZHVyYXRpb246LjNzfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tdG9wLXJpZ2h0LC5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tYm90dG9tLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZU91dFJpZ2h0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tZHVyYXRpb246LjNzfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tdG9wLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVPdXRVcDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLWR1cmF0aW9uOi4zc30uVG9hc3RpZnlfX3NsaWRlLWV4aXQtLWJvdHRvbS1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlT3V0RG93bjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLWR1cmF0aW9uOi4zc31Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zcGluezAle3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1cbmApO2ltcG9ydHtpc1ZhbGlkRWxlbWVudCBhcyAkdH1mcm9tXCJyZWFjdFwiO3ZhciBMPXQ9PnR5cGVvZiB0PT1cIm51bWJlclwiJiYhaXNOYU4odCksTj10PT50eXBlb2YgdD09XCJzdHJpbmdcIixQPXQ9PnR5cGVvZiB0PT1cImZ1bmN0aW9uXCIsbXQ9dD0+Tih0KXx8TCh0KSxCPXQ9Pk4odCl8fFAodCk/dDpudWxsLHB0PSh0LG8pPT50PT09ITF8fEwodCkmJnQ+MD90Om8sej10PT4kdCh0KXx8Tih0KXx8UCh0KXx8TCh0KTtpbXBvcnQgdXQse3VzZUVmZmVjdCBhcyBSdCx1c2VMYXlvdXRFZmZlY3QgYXMgQnQsdXNlUmVmIGFzIHp0fWZyb21cInJlYWN0XCI7ZnVuY3Rpb24gWih0LG8sZT0zMDApe2xldHtzY3JvbGxIZWlnaHQ6cixzdHlsZTpzfT10O3JlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e3MubWluSGVpZ2h0PVwiaW5pdGlhbFwiLHMuaGVpZ2h0PXIrXCJweFwiLHMudHJhbnNpdGlvbj1gYWxsICR7ZX1tc2AscmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57cy5oZWlnaHQ9XCIwXCIscy5wYWRkaW5nPVwiMFwiLHMubWFyZ2luPVwiMFwiLHNldFRpbWVvdXQobyxlKX0pfSl9ZnVuY3Rpb24gJCh7ZW50ZXI6dCxleGl0Om8sYXBwZW5kUG9zaXRpb246ZT0hMSxjb2xsYXBzZTpyPSEwLGNvbGxhcHNlRHVyYXRpb246cz0zMDB9KXtyZXR1cm4gZnVuY3Rpb24oe2NoaWxkcmVuOmEscG9zaXRpb246ZCxwcmV2ZW50RXhpdFRyYW5zaXRpb246Yyxkb25lOlQsbm9kZVJlZjpnLGlzSW46dixwbGF5VG9hc3Q6eH0pe2xldCBDPWU/YCR7dH0tLSR7ZH1gOnQsUz1lP2Ake299LS0ke2R9YDpvLEU9enQoMCk7cmV0dXJuIEJ0KCgpPT57bGV0IGY9Zy5jdXJyZW50LHA9Qy5zcGxpdChcIiBcIiksYj1uPT57bi50YXJnZXQ9PT1nLmN1cnJlbnQmJih4KCksZi5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsYiksZi5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uY2FuY2VsXCIsYiksRS5jdXJyZW50PT09MCYmbi50eXBlIT09XCJhbmltYXRpb25jYW5jZWxcIiYmZi5jbGFzc0xpc3QucmVtb3ZlKC4uLnApKX07KCgpPT57Zi5jbGFzc0xpc3QuYWRkKC4uLnApLGYuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLGIpLGYuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmNhbmNlbFwiLGIpfSkoKX0sW10pLFJ0KCgpPT57bGV0IGY9Zy5jdXJyZW50LHA9KCk9PntmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIixwKSxyP1ooZixULHMpOlQoKX07dnx8KGM/cCgpOigoKT0+e0UuY3VycmVudD0xLGYuY2xhc3NOYW1lKz1gICR7U31gLGYuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLHApfSkoKSl9LFt2XSksdXQuY3JlYXRlRWxlbWVudCh1dC5GcmFnbWVudCxudWxsLGEpfX1pbXBvcnR7Y2xvbmVFbGVtZW50IGFzIEZ0LGlzVmFsaWRFbGVtZW50IGFzIFV0fWZyb21cInJlYWN0XCI7ZnVuY3Rpb24gSih0LG8pe3JldHVybntjb250ZW50OnR0KHQuY29udGVudCx0LnByb3BzKSxjb250YWluZXJJZDp0LnByb3BzLmNvbnRhaW5lcklkLGlkOnQucHJvcHMudG9hc3RJZCx0aGVtZTp0LnByb3BzLnRoZW1lLHR5cGU6dC5wcm9wcy50eXBlLGRhdGE6dC5wcm9wcy5kYXRhfHx7fSxpc0xvYWRpbmc6dC5wcm9wcy5pc0xvYWRpbmcsaWNvbjp0LnByb3BzLmljb24scmVhc29uOnQucmVtb3ZhbFJlYXNvbixzdGF0dXM6b319ZnVuY3Rpb24gdHQodCxvLGU9ITEpe3JldHVybiBVdCh0KSYmIU4odC50eXBlKT9GdCh0LHtjbG9zZVRvYXN0Om8uY2xvc2VUb2FzdCx0b2FzdFByb3BzOm8sZGF0YTpvLmRhdGEsaXNQYXVzZWQ6ZX0pOlAodCk/dCh7Y2xvc2VUb2FzdDpvLmNsb3NlVG9hc3QsdG9hc3RQcm9wczpvLGRhdGE6by5kYXRhLGlzUGF1c2VkOmV9KTp0fWltcG9ydCBvdCBmcm9tXCJyZWFjdFwiO2Z1bmN0aW9uIHl0KHtjbG9zZVRvYXN0OnQsdGhlbWU6byxhcmlhTGFiZWw6ZT1cImNsb3NlXCJ9KXtyZXR1cm4gb3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLHtjbGFzc05hbWU6YFRvYXN0aWZ5X19jbG9zZS1idXR0b24gVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbi0tJHtvfWAsdHlwZTpcImJ1dHRvblwiLG9uQ2xpY2s6cj0+e3Iuc3RvcFByb3BhZ2F0aW9uKCksdCghMCl9LFwiYXJpYS1sYWJlbFwiOmV9LG90LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLHZpZXdCb3g6XCIwIDAgMTQgMTZcIn0sb3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZmlsbFJ1bGU6XCJldmVub2RkXCIsZDpcIk03LjcxIDguMjNsMy43NSAzLjc1LTEuNDggMS40OC0zLjc1LTMuNzUtMy43NSAzLjc1TDEgMTEuOThsMy43NS0zLjc1TDEgNC40OCAyLjQ4IDNsMy43NSAzLjc1TDkuOTggM2wxLjQ4IDEuNDgtMy43NSAzLjc1elwifSkpKX1pbXBvcnQgZXQgZnJvbVwicmVhY3RcIjtpbXBvcnQgVHQgZnJvbVwiY2xzeFwiO2Z1bmN0aW9uIGd0KHtkZWxheTp0LGlzUnVubmluZzpvLGNsb3NlVG9hc3Q6ZSx0eXBlOnI9XCJkZWZhdWx0XCIsaGlkZTpzLGNsYXNzTmFtZTpsLGNvbnRyb2xsZWRQcm9ncmVzczphLHByb2dyZXNzOmQscnRsOmMsaXNJbjpULHRoZW1lOmd9KXtsZXQgdj1zfHxhJiZkPT09MCx4PXthbmltYXRpb25EdXJhdGlvbjpgJHt0fW1zYCxhbmltYXRpb25QbGF5U3RhdGU6bz9cInJ1bm5pbmdcIjpcInBhdXNlZFwifTthJiYoeC50cmFuc2Zvcm09YHNjYWxlWCgke2R9KWApO2xldCBDPVR0KFwiVG9hc3RpZnlfX3Byb2dyZXNzLWJhclwiLGE/XCJUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1jb250cm9sbGVkXCI6XCJUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1hbmltYXRlZFwiLGBUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS0ke2d9YCxgVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tJHtyfWAse1tcIlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXJ0bFwiXTpjfSksUz1QKGwpP2woe3J0bDpjLHR5cGU6cixkZWZhdWx0Q2xhc3NOYW1lOkN9KTpUdChDLGwpLEU9e1thJiZkPj0xP1wib25UcmFuc2l0aW9uRW5kXCI6XCJvbkFuaW1hdGlvbkVuZFwiXTphJiZkPDE/bnVsbDooKT0+e1QmJmUoKX19O3JldHVybiBldC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXdycFwiLFwiZGF0YS1oaWRkZW5cIjp2fSxldC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpgVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tYmcgVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tJHtnfSBUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS0ke3J9YH0pLGV0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7cm9sZTpcInByb2dyZXNzYmFyXCIsXCJhcmlhLWhpZGRlblwiOnY/XCJ0cnVlXCI6XCJmYWxzZVwiLFwiYXJpYS1sYWJlbFwiOlwibm90aWZpY2F0aW9uIHRpbWVyXCIsY2xhc3NOYW1lOlMsc3R5bGU6eCwuLi5FfSkpfWltcG9ydCBEdCBmcm9tXCJjbHN4XCI7aW1wb3J0IGN0LHt1c2VFZmZlY3QgYXMgeW8sdXNlUmVmIGFzIFRvLHVzZVN0YXRlIGFzIGdvfWZyb21cInJlYWN0XCI7dmFyIFh0PTEsYXQ9KCk9PmAke1h0Kyt9YDtmdW5jdGlvbiBfdCh0LG8sZSl7bGV0IHI9MSxzPTAsbD1bXSxhPVtdLGQ9byxjPW5ldyBNYXAsVD1uZXcgU2V0LGc9aT0+KFQuYWRkKGkpLCgpPT5ULmRlbGV0ZShpKSksdj0oKT0+e2E9QXJyYXkuZnJvbShjLnZhbHVlcygpKSxULmZvckVhY2goaT0+aSgpKX0seD0oe2NvbnRhaW5lcklkOmksdG9hc3RJZDpuLHVwZGF0ZUlkOnV9KT0+e2xldCBoPWk/aSE9PXQ6dCE9PTEsbT1jLmhhcyhuKSYmdT09bnVsbDtyZXR1cm4gaHx8bX0sQz0oaSxuKT0+e2MuZm9yRWFjaCh1PT57dmFyIGg7KG49PW51bGx8fG49PT11LnByb3BzLnRvYXN0SWQpJiYoKGg9dS50b2dnbGUpPT1udWxsfHxoLmNhbGwodSxpKSl9KX0sUz1pPT57dmFyIG4sdTsodT0obj1pLnByb3BzKT09bnVsbD92b2lkIDA6bi5vbkNsb3NlKT09bnVsbHx8dS5jYWxsKG4saS5yZW1vdmFsUmVhc29uKSxpLmlzQWN0aXZlPSExfSxFPWk9PntpZihpPT1udWxsKWMuZm9yRWFjaChTKTtlbHNle2xldCBuPWMuZ2V0KGkpO24mJlMobil9digpfSxmPSgpPT57cy09bC5sZW5ndGgsbD1bXX0scD1pPT57dmFyIG0sXztsZXR7dG9hc3RJZDpuLHVwZGF0ZUlkOnV9PWkucHJvcHMsaD11PT1udWxsO2kuc3RhbGVJZCYmYy5kZWxldGUoaS5zdGFsZUlkKSxpLmlzQWN0aXZlPSEwLGMuc2V0KG4saSksdigpLGUoSihpLGg/XCJhZGRlZFwiOlwidXBkYXRlZFwiKSksaCYmKChfPShtPWkucHJvcHMpLm9uT3Blbik9PW51bGx8fF8uY2FsbChtKSl9O3JldHVybntpZDp0LHByb3BzOmQsb2JzZXJ2ZTpnLHRvZ2dsZTpDLHJlbW92ZVRvYXN0OkUsdG9hc3RzOmMsY2xlYXJRdWV1ZTpmLGJ1aWxkVG9hc3Q6KGksbik9PntpZih4KG4pKXJldHVybjtsZXR7dG9hc3RJZDp1LHVwZGF0ZUlkOmgsZGF0YTptLHN0YWxlSWQ6XyxkZWxheTprfT1uLE09aD09bnVsbDtNJiZzKys7bGV0IEE9ey4uLmQsc3R5bGU6ZC50b2FzdFN0eWxlLGtleTpyKyssLi4uT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKG4pLmZpbHRlcigoW0QsWV0pPT5ZIT1udWxsKSksdG9hc3RJZDp1LHVwZGF0ZUlkOmgsZGF0YTptLGlzSW46ITEsY2xhc3NOYW1lOkIobi5jbGFzc05hbWV8fGQudG9hc3RDbGFzc05hbWUpLHByb2dyZXNzQ2xhc3NOYW1lOkIobi5wcm9ncmVzc0NsYXNzTmFtZXx8ZC5wcm9ncmVzc0NsYXNzTmFtZSksYXV0b0Nsb3NlOm4uaXNMb2FkaW5nPyExOnB0KG4uYXV0b0Nsb3NlLGQuYXV0b0Nsb3NlKSxjbG9zZVRvYXN0KEQpe2MuZ2V0KHUpLnJlbW92YWxSZWFzb249RCxFKHUpfSxkZWxldGVUb2FzdCgpe2xldCBEPWMuZ2V0KHUpO2lmKEQhPW51bGwpe2lmKGUoSihELFwicmVtb3ZlZFwiKSksYy5kZWxldGUodSkscy0tLHM8MCYmKHM9MCksbC5sZW5ndGg+MCl7cChsLnNoaWZ0KCkpO3JldHVybn12KCl9fX07QS5jbG9zZUJ1dHRvbj1kLmNsb3NlQnV0dG9uLG4uY2xvc2VCdXR0b249PT0hMXx8eihuLmNsb3NlQnV0dG9uKT9BLmNsb3NlQnV0dG9uPW4uY2xvc2VCdXR0b246bi5jbG9zZUJ1dHRvbj09PSEwJiYoQS5jbG9zZUJ1dHRvbj16KGQuY2xvc2VCdXR0b24pP2QuY2xvc2VCdXR0b246ITApO2xldCBSPXtjb250ZW50OmkscHJvcHM6QSxzdGFsZUlkOl99O2QubGltaXQmJmQubGltaXQ+MCYmcz5kLmxpbWl0JiZNP2wucHVzaChSKTpMKGspP3NldFRpbWVvdXQoKCk9PntwKFIpfSxrKTpwKFIpfSxzZXRQcm9wcyhpKXtkPWl9LHNldFRvZ2dsZTooaSxuKT0+e2xldCB1PWMuZ2V0KGkpO3UmJih1LnRvZ2dsZT1uKX0saXNUb2FzdEFjdGl2ZTppPT57dmFyIG47cmV0dXJuKG49Yy5nZXQoaSkpPT1udWxsP3ZvaWQgMDpuLmlzQWN0aXZlfSxnZXRTbmFwc2hvdDooKT0+YX19dmFyIEk9bmV3IE1hcCxGPVtdLHN0PW5ldyBTZXQsVnQ9dD0+c3QuZm9yRWFjaChvPT5vKHQpKSxidD0oKT0+SS5zaXplPjA7ZnVuY3Rpb24gUXQoKXtGLmZvckVhY2godD0+bnQodC5jb250ZW50LHQub3B0aW9ucykpLEY9W119dmFyIHZ0PSh0LHtjb250YWluZXJJZDpvfSk9Pnt2YXIgZTtyZXR1cm4oZT1JLmdldChvfHwxKSk9PW51bGw/dm9pZCAwOmUudG9hc3RzLmdldCh0KX07ZnVuY3Rpb24gWCh0LG8pe3ZhciByO2lmKG8pcmV0dXJuISEoKHI9SS5nZXQobykpIT1udWxsJiZyLmlzVG9hc3RBY3RpdmUodCkpO2xldCBlPSExO3JldHVybiBJLmZvckVhY2gocz0+e3MuaXNUb2FzdEFjdGl2ZSh0KSYmKGU9ITApfSksZX1mdW5jdGlvbiBodCh0KXtpZighYnQoKSl7Rj1GLmZpbHRlcihvPT50IT1udWxsJiZvLm9wdGlvbnMudG9hc3RJZCE9PXQpO3JldHVybn1pZih0PT1udWxsfHxtdCh0KSlJLmZvckVhY2gobz0+e28ucmVtb3ZlVG9hc3QodCl9KTtlbHNlIGlmKHQmJihcImNvbnRhaW5lcklkXCJpbiB0fHxcImlkXCJpbiB0KSl7bGV0IG89SS5nZXQodC5jb250YWluZXJJZCk7bz9vLnJlbW92ZVRvYXN0KHQuaWQpOkkuZm9yRWFjaChlPT57ZS5yZW1vdmVUb2FzdCh0LmlkKX0pfX12YXIgQ3Q9KHQ9e30pPT57SS5mb3JFYWNoKG89PntvLnByb3BzLmxpbWl0JiYoIXQuY29udGFpbmVySWR8fG8uaWQ9PT10LmNvbnRhaW5lcklkKSYmby5jbGVhclF1ZXVlKCl9KX07ZnVuY3Rpb24gbnQodCxvKXt6KHQpJiYoYnQoKXx8Ri5wdXNoKHtjb250ZW50OnQsb3B0aW9uczpvfSksSS5mb3JFYWNoKGU9PntlLmJ1aWxkVG9hc3QodCxvKX0pKX1mdW5jdGlvbiB4dCh0KXt2YXIgbzsobz1JLmdldCh0LmNvbnRhaW5lcklkfHwxKSk9PW51bGx8fG8uc2V0VG9nZ2xlKHQuaWQsdC5mbil9ZnVuY3Rpb24gcnQodCxvKXtJLmZvckVhY2goZT0+eyhvPT1udWxsfHwhKG8hPW51bGwmJm8uY29udGFpbmVySWQpfHwobz09bnVsbD92b2lkIDA6by5jb250YWluZXJJZCk9PT1lLmlkKSYmZS50b2dnbGUodCxvPT1udWxsP3ZvaWQgMDpvLmlkKX0pfWZ1bmN0aW9uIEV0KHQpe2xldCBvPXQuY29udGFpbmVySWR8fDE7cmV0dXJue3N1YnNjcmliZShlKXtsZXQgcj1fdChvLHQsVnQpO0kuc2V0KG8scik7bGV0IHM9ci5vYnNlcnZlKGUpO3JldHVybiBRdCgpLCgpPT57cygpLEkuZGVsZXRlKG8pfX0sc2V0UHJvcHMoZSl7dmFyIHI7KHI9SS5nZXQobykpPT1udWxsfHxyLnNldFByb3BzKGUpfSxnZXRTbmFwc2hvdCgpe3ZhciBlO3JldHVybihlPUkuZ2V0KG8pKT09bnVsbD92b2lkIDA6ZS5nZXRTbmFwc2hvdCgpfX19ZnVuY3Rpb24gUHQodCl7cmV0dXJuIHN0LmFkZCh0KSwoKT0+e3N0LmRlbGV0ZSh0KX19ZnVuY3Rpb24gV3QodCl7cmV0dXJuIHQmJihOKHQudG9hc3RJZCl8fEwodC50b2FzdElkKSk/dC50b2FzdElkOmF0KCl9ZnVuY3Rpb24gVSh0LG8pe3JldHVybiBudCh0LG8pLG8udG9hc3RJZH1mdW5jdGlvbiBWKHQsbyl7cmV0dXJuey4uLm8sdHlwZTpvJiZvLnR5cGV8fHQsdG9hc3RJZDpXdChvKX19ZnVuY3Rpb24gUSh0KXtyZXR1cm4obyxlKT0+VShvLFYodCxlKSl9ZnVuY3Rpb24geSh0LG8pe3JldHVybiBVKHQsVihcImRlZmF1bHRcIixvKSl9eS5sb2FkaW5nPSh0LG8pPT5VKHQsVihcImRlZmF1bHRcIix7aXNMb2FkaW5nOiEwLGF1dG9DbG9zZTohMSxjbG9zZU9uQ2xpY2s6ITEsY2xvc2VCdXR0b246ITEsZHJhZ2dhYmxlOiExLC4uLm99KSk7ZnVuY3Rpb24gR3QodCx7cGVuZGluZzpvLGVycm9yOmUsc3VjY2VzczpyfSxzKXtsZXQgbDtvJiYobD1OKG8pP3kubG9hZGluZyhvLHMpOnkubG9hZGluZyhvLnJlbmRlcix7Li4ucywuLi5vfSkpO2xldCBhPXtpc0xvYWRpbmc6bnVsbCxhdXRvQ2xvc2U6bnVsbCxjbG9zZU9uQ2xpY2s6bnVsbCxjbG9zZUJ1dHRvbjpudWxsLGRyYWdnYWJsZTpudWxsfSxkPShULGcsdik9PntpZihnPT1udWxsKXt5LmRpc21pc3MobCk7cmV0dXJufWxldCB4PXt0eXBlOlQsLi4uYSwuLi5zLGRhdGE6dn0sQz1OKGcpP3tyZW5kZXI6Z306ZztyZXR1cm4gbD95LnVwZGF0ZShsLHsuLi54LC4uLkN9KTp5KEMucmVuZGVyLHsuLi54LC4uLkN9KSx2fSxjPVAodCk/dCgpOnQ7cmV0dXJuIGMudGhlbihUPT5kKFwic3VjY2Vzc1wiLHIsVCkpLmNhdGNoKFQ9PmQoXCJlcnJvclwiLGUsVCkpLGN9eS5wcm9taXNlPUd0O3kuc3VjY2Vzcz1RKFwic3VjY2Vzc1wiKTt5LmluZm89UShcImluZm9cIik7eS5lcnJvcj1RKFwiZXJyb3JcIik7eS53YXJuaW5nPVEoXCJ3YXJuaW5nXCIpO3kud2Fybj15Lndhcm5pbmc7eS5kYXJrPSh0LG8pPT5VKHQsVihcImRlZmF1bHRcIix7dGhlbWU6XCJkYXJrXCIsLi4ub30pKTtmdW5jdGlvbiBxdCh0KXtodCh0KX15LmRpc21pc3M9cXQ7eS5jbGVhcldhaXRpbmdRdWV1ZT1DdDt5LmlzQWN0aXZlPVg7eS51cGRhdGU9KHQsbz17fSk9PntsZXQgZT12dCh0LG8pO2lmKGUpe2xldHtwcm9wczpyLGNvbnRlbnQ6c309ZSxsPXtkZWxheToxMDAsLi4uciwuLi5vLHRvYXN0SWQ6by50b2FzdElkfHx0LHVwZGF0ZUlkOmF0KCl9O2wudG9hc3RJZCE9PXQmJihsLnN0YWxlSWQ9dCk7bGV0IGE9bC5yZW5kZXJ8fHM7ZGVsZXRlIGwucmVuZGVyLFUoYSxsKX19O3kuZG9uZT10PT57eS51cGRhdGUodCx7cHJvZ3Jlc3M6MX0pfTt5Lm9uQ2hhbmdlPVB0O3kucGxheT10PT5ydCghMCx0KTt5LnBhdXNlPXQ9PnJ0KCExLHQpO2ltcG9ydHt1c2VSZWYgYXMgS3QsdXNlU3luY0V4dGVybmFsU3RvcmUgYXMgWXR9ZnJvbVwicmVhY3RcIjtmdW5jdGlvbiBJdCh0KXt2YXIgYTtsZXR7c3Vic2NyaWJlOm8sZ2V0U25hcHNob3Q6ZSxzZXRQcm9wczpyfT1LdChFdCh0KSkuY3VycmVudDtyKHQpO2xldCBzPShhPVl0KG8sZSxlKSk9PW51bGw/dm9pZCAwOmEuc2xpY2UoKTtmdW5jdGlvbiBsKGQpe2lmKCFzKXJldHVybltdO2xldCBjPW5ldyBNYXA7cmV0dXJuIHQubmV3ZXN0T25Ub3AmJnMucmV2ZXJzZSgpLHMuZm9yRWFjaChUPT57bGV0e3Bvc2l0aW9uOmd9PVQucHJvcHM7Yy5oYXMoZyl8fGMuc2V0KGcsW10pLGMuZ2V0KGcpLnB1c2goVCl9KSxBcnJheS5mcm9tKGMsVD0+ZChUWzBdLFRbMV0pKX1yZXR1cm57Z2V0VG9hc3RUb1JlbmRlcjpsLGlzVG9hc3RBY3RpdmU6WCxjb3VudDpzPT1udWxsP3ZvaWQgMDpzLmxlbmd0aH19aW1wb3J0e3VzZUVmZmVjdCBhcyBadCx1c2VSZWYgYXMgU3QsdXNlU3RhdGUgYXMga3R9ZnJvbVwicmVhY3RcIjtmdW5jdGlvbiBBdCh0KXtsZXRbbyxlXT1rdCghMSksW3Isc109a3QoITEpLGw9U3QobnVsbCksYT1TdCh7c3RhcnQ6MCxkZWx0YTowLHJlbW92YWxEaXN0YW5jZTowLGNhbkNsb3NlT25DbGljazohMCxjYW5EcmFnOiExLGRpZE1vdmU6ITF9KS5jdXJyZW50LHthdXRvQ2xvc2U6ZCxwYXVzZU9uSG92ZXI6YyxjbG9zZVRvYXN0OlQsb25DbGljazpnLGNsb3NlT25DbGljazp2fT10O3h0KHtpZDp0LnRvYXN0SWQsY29udGFpbmVySWQ6dC5jb250YWluZXJJZCxmbjplfSksWnQoKCk9PntpZih0LnBhdXNlT25Gb2N1c0xvc3MpcmV0dXJuIHgoKSwoKT0+e0MoKX19LFt0LnBhdXNlT25Gb2N1c0xvc3NdKTtmdW5jdGlvbiB4KCl7ZG9jdW1lbnQuaGFzRm9jdXMoKXx8cCgpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIixmKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIixwKX1mdW5jdGlvbiBDKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLGYpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLHApfWZ1bmN0aW9uIFMobSl7aWYodC5kcmFnZ2FibGU9PT0hMHx8dC5kcmFnZ2FibGU9PT1tLnBvaW50ZXJUeXBlKXtiKCk7bGV0IF89bC5jdXJyZW50O2EuY2FuQ2xvc2VPbkNsaWNrPSEwLGEuY2FuRHJhZz0hMCxfLnN0eWxlLnRyYW5zaXRpb249XCJub25lXCIsdC5kcmFnZ2FibGVEaXJlY3Rpb249PT1cInhcIj8oYS5zdGFydD1tLmNsaWVudFgsYS5yZW1vdmFsRGlzdGFuY2U9Xy5vZmZzZXRXaWR0aCoodC5kcmFnZ2FibGVQZXJjZW50LzEwMCkpOihhLnN0YXJ0PW0uY2xpZW50WSxhLnJlbW92YWxEaXN0YW5jZT1fLm9mZnNldEhlaWdodCoodC5kcmFnZ2FibGVQZXJjZW50PT09ODA/dC5kcmFnZ2FibGVQZXJjZW50KjEuNTp0LmRyYWdnYWJsZVBlcmNlbnQpLzEwMCl9fWZ1bmN0aW9uIEUobSl7bGV0e3RvcDpfLGJvdHRvbTprLGxlZnQ6TSxyaWdodDpBfT1sLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bS5uYXRpdmVFdmVudC50eXBlIT09XCJ0b3VjaGVuZFwiJiZ0LnBhdXNlT25Ib3ZlciYmbS5jbGllbnRYPj1NJiZtLmNsaWVudFg8PUEmJm0uY2xpZW50WT49XyYmbS5jbGllbnRZPD1rP3AoKTpmKCl9ZnVuY3Rpb24gZigpe2UoITApfWZ1bmN0aW9uIHAoKXtlKCExKX1mdW5jdGlvbiBiKCl7YS5kaWRNb3ZlPSExLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLG4pLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIix1KX1mdW5jdGlvbiBpKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsbiksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLHUpfWZ1bmN0aW9uIG4obSl7bGV0IF89bC5jdXJyZW50O2lmKGEuY2FuRHJhZyYmXyl7YS5kaWRNb3ZlPSEwLG8mJnAoKSx0LmRyYWdnYWJsZURpcmVjdGlvbj09PVwieFwiP2EuZGVsdGE9bS5jbGllbnRYLWEuc3RhcnQ6YS5kZWx0YT1tLmNsaWVudFktYS5zdGFydCxhLnN0YXJ0IT09bS5jbGllbnRYJiYoYS5jYW5DbG9zZU9uQ2xpY2s9ITEpO2xldCBrPXQuZHJhZ2dhYmxlRGlyZWN0aW9uPT09XCJ4XCI/YCR7YS5kZWx0YX1weCwgdmFyKC0teSlgOmAwLCBjYWxjKCR7YS5kZWx0YX1weCArIHZhcigtLXkpKWA7Xy5zdHlsZS50cmFuc2Zvcm09YHRyYW5zbGF0ZTNkKCR7a30sMClgLF8uc3R5bGUub3BhY2l0eT1gJHsxLU1hdGguYWJzKGEuZGVsdGEvYS5yZW1vdmFsRGlzdGFuY2UpfWB9fWZ1bmN0aW9uIHUoKXtpKCk7bGV0IG09bC5jdXJyZW50O2lmKGEuY2FuRHJhZyYmYS5kaWRNb3ZlJiZtKXtpZihhLmNhbkRyYWc9ITEsTWF0aC5hYnMoYS5kZWx0YSk+YS5yZW1vdmFsRGlzdGFuY2Upe3MoITApLHQuY2xvc2VUb2FzdCghMCksdC5jb2xsYXBzZUFsbCgpO3JldHVybn1tLnN0eWxlLnRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjJzXCIsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zZm9ybVwiKSxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKX19bGV0IGg9e29uUG9pbnRlckRvd246UyxvblBvaW50ZXJVcDpFfTtyZXR1cm4gZCYmYyYmKGgub25Nb3VzZUVudGVyPXAsdC5zdGFja2VkfHwoaC5vbk1vdXNlTGVhdmU9ZikpLHYmJihoLm9uQ2xpY2s9bT0+e2cmJmcobSksYS5jYW5DbG9zZU9uQ2xpY2smJlQoITApfSkse3BsYXlUb2FzdDpmLHBhdXNlVG9hc3Q6cCxpc1J1bm5pbmc6byxwcmV2ZW50RXhpdFRyYW5zaXRpb246cix0b2FzdFJlZjpsLGV2ZW50SGFuZGxlcnM6aH19aW1wb3J0e3VzZUVmZmVjdCBhcyBKdCx1c2VMYXlvdXRFZmZlY3QgYXMgdG99ZnJvbVwicmVhY3RcIjt2YXIgT3Q9dHlwZW9mIHdpbmRvdyE9XCJ1bmRlZmluZWRcIj90bzpKdDtpbXBvcnQgaXQgZnJvbVwiY2xzeFwiO2ltcG9ydCBxLHtjbG9uZUVsZW1lbnQgYXMgY28saXNWYWxpZEVsZW1lbnQgYXMgZm99ZnJvbVwicmVhY3RcIjtpbXBvcnQgTyx7Y2xvbmVFbGVtZW50IGFzIG9vLGlzVmFsaWRFbGVtZW50IGFzIGVvfWZyb21cInJlYWN0XCI7dmFyIEc9KHt0aGVtZTp0LHR5cGU6byxpc0xvYWRpbmc6ZSwuLi5yfSk9Pk8uY3JlYXRlRWxlbWVudChcInN2Z1wiLHt2aWV3Qm94OlwiMCAwIDI0IDI0XCIsd2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLGZpbGw6dD09PVwiY29sb3JlZFwiP1wiY3VycmVudENvbG9yXCI6YHZhcigtLXRvYXN0aWZ5LWljb24tY29sb3ItJHtvfSlgLC4uLnJ9KTtmdW5jdGlvbiBhbyh0KXtyZXR1cm4gTy5jcmVhdGVFbGVtZW50KEcsey4uLnR9LE8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0yMy4zMiAxNy4xOTFMMTUuNDM4IDIuMTg0QzE0LjcyOC44MzMgMTMuNDE2IDAgMTEuOTk2IDBjLTEuNDIgMC0yLjczMy44MzMtMy40NDMgMi4xODRMLjUzMyAxNy40NDhhNC43NDQgNC43NDQgMCAwMDAgNC4zNjhDMS4yNDMgMjMuMTY3IDIuNTU1IDI0IDMuOTc1IDI0aDE2LjA1QzIyLjIyIDI0IDI0IDIyLjA0NCAyNCAxOS42MzJjMC0uOTA0LS4yNTEtMS43NDYtLjY4LTIuNDR6bS05LjYyMiAxLjQ2YzAgMS4wMzMtLjcyNCAxLjgyMy0xLjY5OCAxLjgyM3MtMS42OTgtLjc5LTEuNjk4LTEuODIydi0uMDQzYzAtMS4wMjguNzI0LTEuODIyIDEuNjk4LTEuODIyczEuNjk4Ljc5IDEuNjk4IDEuODIydi4wNDN6bS4wMzktMTIuMjg1bC0uODQgOC4wNmMtLjA1Ny41ODEtLjQwOC45NDMtLjg5Ny45NDMtLjQ5IDAtLjg0LS4zNjctLjg5Ni0uOTQybC0uODQtOC4wNjVjLS4wNTctLjYyNC4yNS0xLjA5NS43NzktMS4wOTVoMS45MWMuNTI4LjAwNS44NC40NzYuNzg0IDEuMXpcIn0pKX1mdW5jdGlvbiBzbyh0KXtyZXR1cm4gTy5jcmVhdGVFbGVtZW50KEcsey4uLnR9LE8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMiAwYTEyIDEyIDAgMTAxMiAxMkExMi4wMTMgMTIuMDEzIDAgMDAxMiAwem0uMjUgNWExLjUgMS41IDAgMTEtMS41IDEuNSAxLjUgMS41IDAgMDExLjUtMS41em0yLjI1IDEzLjVoLTRhMSAxIDAgMDEwLTJoLjc1YS4yNS4yNSAwIDAwLjI1LS4yNXYtNC41YS4yNS4yNSAwIDAwLS4yNS0uMjVoLS43NWExIDEgMCAwMTAtMmgxYTIgMiAwIDAxMiAydjQuNzVhLjI1LjI1IDAgMDAuMjUuMjVoLjc1YTEgMSAwIDExMCAyelwifSkpfWZ1bmN0aW9uIG5vKHQpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnQoRyx7Li4udH0sTy5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTEyIDBhMTIgMTIgMCAxMDEyIDEyQTEyLjAxNCAxMi4wMTQgMCAwMDEyIDB6bTYuOTI3IDguMmwtNi44NDUgOS4yODlhMS4wMTEgMS4wMTEgMCAwMS0xLjQzLjE4OGwtNC44ODgtMy45MDhhMSAxIDAgMTExLjI1LTEuNTYybDQuMDc2IDMuMjYxIDYuMjI3LTguNDUxYTEgMSAwIDExMS42MSAxLjE4M3pcIn0pKX1mdW5jdGlvbiBybyh0KXtyZXR1cm4gTy5jcmVhdGVFbGVtZW50KEcsey4uLnR9LE8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMS45ODMgMGExMi4yMDYgMTIuMjA2IDAgMDAtOC41MSAzLjY1M0ExMS44IDExLjggMCAwMDAgMTIuMjA3IDExLjc3OSAxMS43NzkgMCAwMDExLjggMjRoLjIxNEExMi4xMTEgMTIuMTExIDAgMDAyNCAxMS43OTEgMTEuNzY2IDExLjc2NiAwIDAwMTEuOTgzIDB6TTEwLjUgMTYuNTQyYTEuNDc2IDEuNDc2IDAgMDExLjQ0OS0xLjUzaC4wMjdhMS41MjcgMS41MjcgMCAwMTEuNTIzIDEuNDcgMS40NzUgMS40NzUgMCAwMS0xLjQ0OSAxLjUzaC0uMDI3YTEuNTI5IDEuNTI5IDAgMDEtMS41MjMtMS40N3pNMTEgMTIuNXYtNmExIDEgMCAwMTIgMHY2YTEgMSAwIDExLTIgMHpcIn0pKX1mdW5jdGlvbiBpbygpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiVG9hc3RpZnlfX3NwaW5uZXJcIn0pfXZhciBXPXtpbmZvOnNvLHdhcm5pbmc6YW8sc3VjY2VzczpubyxlcnJvcjpybyxzcGlubmVyOmlvfSxsbz10PT50IGluIFc7ZnVuY3Rpb24gTnQoe3RoZW1lOnQsdHlwZTpvLGlzTG9hZGluZzplLGljb246cn0pe2xldCBzPW51bGwsbD17dGhlbWU6dCx0eXBlOm99O3JldHVybiByPT09ITF8fChQKHIpP3M9cih7Li4ubCxpc0xvYWRpbmc6ZX0pOmVvKHIpP3M9b28ocixsKTplP3M9Vy5zcGlubmVyKCk6bG8obykmJihzPVdbb10obCkpKSxzfXZhciB3dD10PT57bGV0e2lzUnVubmluZzpvLHByZXZlbnRFeGl0VHJhbnNpdGlvbjplLHRvYXN0UmVmOnIsZXZlbnRIYW5kbGVyczpzLHBsYXlUb2FzdDpsfT1BdCh0KSx7Y2xvc2VCdXR0b246YSxjaGlsZHJlbjpkLGF1dG9DbG9zZTpjLG9uQ2xpY2s6VCx0eXBlOmcsaGlkZVByb2dyZXNzQmFyOnYsY2xvc2VUb2FzdDp4LHRyYW5zaXRpb246Qyxwb3NpdGlvbjpTLGNsYXNzTmFtZTpFLHN0eWxlOmYscHJvZ3Jlc3NDbGFzc05hbWU6cCx1cGRhdGVJZDpiLHJvbGU6aSxwcm9ncmVzczpuLHJ0bDp1LHRvYXN0SWQ6aCxkZWxldGVUb2FzdDptLGlzSW46Xyxpc0xvYWRpbmc6ayxjbG9zZU9uQ2xpY2s6TSx0aGVtZTpBLGFyaWFMYWJlbDpSfT10LEQ9aXQoXCJUb2FzdGlmeV9fdG9hc3RcIixgVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS0ke0F9YCxgVG9hc3RpZnlfX3RvYXN0LS0ke2d9YCx7W1wiVG9hc3RpZnlfX3RvYXN0LS1ydGxcIl06dX0se1tcIlRvYXN0aWZ5X190b2FzdC0tY2xvc2Utb24tY2xpY2tcIl06TX0pLFk9UChFKT9FKHtydGw6dSxwb3NpdGlvbjpTLHR5cGU6ZyxkZWZhdWx0Q2xhc3NOYW1lOkR9KTppdChELEUpLGZ0PU50KHQpLGR0PSEhbnx8IWMsaj17Y2xvc2VUb2FzdDp4LHR5cGU6Zyx0aGVtZTpBfSxIPW51bGw7cmV0dXJuIGE9PT0hMXx8KFAoYSk/SD1hKGopOmZvKGEpP0g9Y28oYSxqKTpIPXl0KGopKSxxLmNyZWF0ZUVsZW1lbnQoQyx7aXNJbjpfLGRvbmU6bSxwb3NpdGlvbjpTLHByZXZlbnRFeGl0VHJhbnNpdGlvbjplLG5vZGVSZWY6cixwbGF5VG9hc3Q6bH0scS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2lkOmgsdGFiSW5kZXg6MCxvbkNsaWNrOlQsXCJkYXRhLWluXCI6XyxjbGFzc05hbWU6WSwuLi5zLHN0eWxlOmYscmVmOnIsLi4uXyYme3JvbGU6aSxcImFyaWEtbGFiZWxcIjpSfX0sZnQhPW51bGwmJnEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6aXQoXCJUb2FzdGlmeV9fdG9hc3QtaWNvblwiLHtbXCJUb2FzdGlmeS0tYW5pbWF0ZS1pY29uIFRvYXN0aWZ5X196b29tLWVudGVyXCJdOiFrfSl9LGZ0KSx0dChkLHQsIW8pLEgsIXQuY3VzdG9tUHJvZ3Jlc3NCYXImJnEuY3JlYXRlRWxlbWVudChndCx7Li4uYiYmIWR0P3trZXk6YHAtJHtifWB9Ont9LHJ0bDp1LHRoZW1lOkEsZGVsYXk6Yyxpc1J1bm5pbmc6byxpc0luOl8sY2xvc2VUb2FzdDp4LGhpZGU6dix0eXBlOmcsY2xhc3NOYW1lOnAsY29udHJvbGxlZFByb2dyZXNzOmR0LHByb2dyZXNzOm58fDB9KSkpfTt2YXIgSz0odCxvPSExKT0+KHtlbnRlcjpgVG9hc3RpZnktLWFuaW1hdGUgVG9hc3RpZnlfXyR7dH0tZW50ZXJgLGV4aXQ6YFRvYXN0aWZ5LS1hbmltYXRlIFRvYXN0aWZ5X18ke3R9LWV4aXRgLGFwcGVuZFBvc2l0aW9uOm99KSxsdD0kKEsoXCJib3VuY2VcIiwhMCkpLG1vPSQoSyhcInNsaWRlXCIsITApKSxwbz0kKEsoXCJ6b29tXCIpKSx1bz0kKEsoXCJmbGlwXCIpKTt2YXIgX289e3Bvc2l0aW9uOlwidG9wLXJpZ2h0XCIsdHJhbnNpdGlvbjpsdCxhdXRvQ2xvc2U6NWUzLGNsb3NlQnV0dG9uOiEwLHBhdXNlT25Ib3ZlcjohMCxwYXVzZU9uRm9jdXNMb3NzOiEwLGRyYWdnYWJsZTpcInRvdWNoXCIsZHJhZ2dhYmxlUGVyY2VudDo4MCxkcmFnZ2FibGVEaXJlY3Rpb246XCJ4XCIscm9sZTpcImFsZXJ0XCIsdGhlbWU6XCJsaWdodFwiLFwiYXJpYS1sYWJlbFwiOlwiTm90aWZpY2F0aW9ucyBBbHQrVFwiLGhvdEtleXM6dD0+dC5hbHRLZXkmJnQuY29kZT09PVwiS2V5VFwifTtmdW5jdGlvbiBMdCh0KXtsZXQgbz17Li4uX28sLi4udH0sZT10LnN0YWNrZWQsW3Isc109Z28oITApLGw9VG8obnVsbCkse2dldFRvYXN0VG9SZW5kZXI6YSxpc1RvYXN0QWN0aXZlOmQsY291bnQ6Y309SXQobykse2NsYXNzTmFtZTpULHN0eWxlOmcscnRsOnYsY29udGFpbmVySWQ6eCxob3RLZXlzOkN9PW87ZnVuY3Rpb24gUyhmKXtsZXQgcD1EdChcIlRvYXN0aWZ5X190b2FzdC1jb250YWluZXJcIixgVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tJHtmfWAse1tcIlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXJ0bFwiXTp2fSk7cmV0dXJuIFAoVCk/VCh7cG9zaXRpb246ZixydGw6dixkZWZhdWx0Q2xhc3NOYW1lOnB9KTpEdChwLEIoVCkpfWZ1bmN0aW9uIEUoKXtlJiYocyghMCkseS5wbGF5KCkpfXJldHVybiBPdCgoKT0+e3ZhciBmO2lmKGUpe2xldCBwPWwuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbj1cInRydWVcIl0nKSxiPTEyLGk9KGY9by5wb3NpdGlvbik9PW51bGw/dm9pZCAwOmYuaW5jbHVkZXMoXCJ0b3BcIiksbj0wLHU9MDtBcnJheS5mcm9tKHApLnJldmVyc2UoKS5mb3JFYWNoKChoLG0pPT57bGV0IF89aDtfLmNsYXNzTGlzdC5hZGQoXCJUb2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRcIiksbT4wJiYoXy5kYXRhc2V0LmNvbGxhcHNlZD1gJHtyfWApLF8uZGF0YXNldC5wb3N8fChfLmRhdGFzZXQucG9zPWk/XCJ0b3BcIjpcImJvdFwiKTtsZXQgaz1uKihyPy4yOjEpKyhyPzA6YiptKTtfLnN0eWxlLnNldFByb3BlcnR5KFwiLS15XCIsYCR7aT9rOmsqLTF9cHhgKSxfLnN0eWxlLnNldFByb3BlcnR5KFwiLS1nXCIsYCR7Yn1gKSxfLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zXCIsYCR7MS0ocj91OjApfWApLG4rPV8ub2Zmc2V0SGVpZ2h0LHUrPS4wMjV9KX19LFtyLGMsZV0pLHlvKCgpPT57ZnVuY3Rpb24gZihwKXt2YXIgaTtsZXQgYj1sLmN1cnJlbnQ7QyhwKSYmKChpPWIucXVlcnlTZWxlY3RvcignW3RhYkluZGV4PVwiMFwiXScpKT09bnVsbHx8aS5mb2N1cygpLHMoITEpLHkucGF1c2UoKSkscC5rZXk9PT1cIkVzY2FwZVwiJiYoZG9jdW1lbnQuYWN0aXZlRWxlbWVudD09PWJ8fGIhPW51bGwmJmIuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpJiYocyghMCkseS5wbGF5KCkpfXJldHVybiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGYpLCgpPT57ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixmKX19LFtDXSksY3QuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIix7cmVmOmwsY2xhc3NOYW1lOlwiVG9hc3RpZnlcIixpZDp4LG9uTW91c2VFbnRlcjooKT0+e2UmJihzKCExKSx5LnBhdXNlKCkpfSxvbk1vdXNlTGVhdmU6RSxcImFyaWEtbGl2ZVwiOlwicG9saXRlXCIsXCJhcmlhLWF0b21pY1wiOlwiZmFsc2VcIixcImFyaWEtcmVsZXZhbnRcIjpcImFkZGl0aW9ucyB0ZXh0XCIsXCJhcmlhLWxhYmVsXCI6b1tcImFyaWEtbGFiZWxcIl19LGEoKGYscCk9PntsZXQgYj1wLmxlbmd0aD97Li4uZ306ey4uLmcscG9pbnRlckV2ZW50czpcIm5vbmVcIn07cmV0dXJuIGN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7dGFiSW5kZXg6LTEsY2xhc3NOYW1lOlMoZiksXCJkYXRhLXN0YWNrZWRcIjplLHN0eWxlOmIsa2V5OmBjLSR7Zn1gfSxwLm1hcCgoe2NvbnRlbnQ6aSxwcm9wczpufSk9PmN0LmNyZWF0ZUVsZW1lbnQod3Qsey4uLm4sc3RhY2tlZDplLGNvbGxhcHNlQWxsOkUsaXNJbjpkKG4udG9hc3RJZCxuLmNvbnRhaW5lcklkKSxrZXk6YHQtJHtuLmtleX1gfSxpKSkpfSkpfWV4cG9ydHtsdCBhcyBCb3VuY2UsdW8gYXMgRmxpcCxXIGFzIEljb25zLG1vIGFzIFNsaWRlLEx0IGFzIFRvYXN0Q29udGFpbmVyLHBvIGFzIFpvb20sWiBhcyBjb2xsYXBzZVRvYXN0LCQgYXMgY3NzVHJhbnNpdGlvbix5IGFzIHRvYXN0fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGxvYWRNb2R1bGVzIH0gZnJvbSBcImVzcmktbG9hZGVyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IElNU3RhdGUsIEFsbFdpZGdldFByb3BzIH0gZnJvbSBcImppbXUtY29yZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIExvYWRpbmcsIFRleHRJbnB1dCB9IGZyb20gXCJqaW11LXVpXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCwgQm91bmNlIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaG9va3MvdXNlTG9jYWxlXCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0aW9ucyB9IGZyb20gXCIuL3RyYW5zbGF0aW9uc1wiO1xyXG5cclxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSA9PiB7XHJcbiAgY29uc3QgeyB0IH0gPSB1c2VMb2NhbGUodHJhbnNsYXRpb25zKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRTZW5zb3IgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUubXlTdGF0ZT8uc2VsZWN0ZWRTZW5zb3JcclxuICApO1xyXG4gIGNvbnN0IHNlbGVjdGVkSW1hZ2VyaWVzID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IElNU3RhdGUpID0+IHN0YXRlLm15U3RhdGU/LnNlbGVjdGVkSW1hZ2VzXHJcbiAgKTtcclxuICBjb25zdCBnZW9wcm9jZXNzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5teVN0YXRlPy5nZW9wcm9jZXNzKTtcclxuXHJcbiAgY29uc3QgW2ppbXVNYXBWaWV3LCBzZXRKaW11TWFwVmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2hvd0J1ZmZlciwgc2V0U2hvd0J1ZmZlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbG9hZGluZ0luY2VuZGlvLCBzZXRMb2FkaW5nSW5jZW5kaW9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nSW51bmRhY2lvbiwgc2V0TG9hZGluZ0ludW5kYWNpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBvbHlnb24sIHNldFNlbGVjdGVkUG9seWdvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9hZGluZ0J1ZmZlciwgc2V0TG9hZGluZ0J1ZmZlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FyZWFCdWZmZXIsIHNldEFyZWFCdWZmZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2J1ZmZlckRpc3RhbmNlLCBzZXRCdWZmZXJEaXN0YW5jZV0gPSB1c2VTdGF0ZSgxKTsgLy8gRXN0YWRvIHBhcmEgZWwgaW5wdXRcclxuICBjb25zdCBbYnVmZmVyLCBzZXRCdWZmZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdikgPT4ge1xyXG4gICAgc2V0SmltdU1hcFZpZXcoam12KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCdWZmZXJDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKHZhbHVlID4gMTAwKSB7XHJcbiAgICAgIHRvYXN0Lndhcm5pbmcodChcIm1pbkttV2FybmluZ1wiKSwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRCdWZmZXJEaXN0YW5jZSgxMDApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgIHRvYXN0Lndhcm5pbmcodChcIm1heEttV2FybmluZ1wiKSwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRCdWZmZXJEaXN0YW5jZSgxKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0QnVmZmVyRGlzdGFuY2UodmFsdWUpOyAvLyBBY3R1YWxpemEgZWwgZXN0YWRvIGNvbiBlbCBudWV2byB2YWxvciBkZWwgaW5wdXRcclxuICB9O1xyXG5cclxuICBjb25zdCBjYXJnYXJHZW9tZXRyaWFFbk1hcGEgPSBhc3luYyAoZ2VvanNvbkZpbGVOYW1lLCBwcm9jZXNvKSA9PiB7XHJcbiAgICBpZiAoIWppbXVNYXBWaWV3KSByZXR1cm47XHJcbiAgICBpZiAoIWdlb2pzb25GaWxlTmFtZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSByZWNpYmnDsyB1biBub21icmUgZGUgYXJjaGl2byB2w6FsaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBPYnRlbmVyIGxhIFVSTCBiYXNlIGRpbsOhbWljYW1lbnRlXHJcbiAgICAgIC8vIGNvbnN0IGJhc2VVcmwgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xyXG4gICAgICBjb25zdCBiYXNlVXJsID0gXCJodHRwOi8vMTI3LjAuMC4xOjUwMDBcIjtcclxuICAgICAgY29uc3QgcXVlcnlVcmwgPSBTdHJpbmcoYmFzZVVybCArIGdlb2pzb25GaWxlTmFtZSk7XHJcblxyXG4gICAgICBjb25zdCBsYXllclJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocXVlcnlVcmwpO1xyXG5cclxuICAgICAgaWYgKCFsYXllclJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYEVycm9yIGFsIGNvbnN1bHRhciBsYSBjYXBhOiAke2xheWVyUmVzcG9uc2Uuc3RhdHVzfSAke2xheWVyUmVzcG9uc2Uuc3RhdHVzVGV4dH1gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZ2VvanNvbkRhdGEgPSBhd2FpdCBsYXllclJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnN0IFtGZWF0dXJlTGF5ZXIsIEdyYXBoaWMsIFBvbHlnb24sIFNpbXBsZUZpbGxTeW1ib2wsIGdlb21ldHJ5RW5naW5lXSA9XHJcbiAgICAgICAgYXdhaXQgbG9hZE1vZHVsZXMoW1xyXG4gICAgICAgICAgXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIixcclxuICAgICAgICAgIFwiZXNyaS9HcmFwaGljXCIsXHJcbiAgICAgICAgICBcImVzcmkvZ2VvbWV0cnkvUG9seWdvblwiLFxyXG4gICAgICAgICAgXCJlc3JpL3N5bWJvbHMvU2ltcGxlRmlsbFN5bWJvbFwiLFxyXG4gICAgICAgICAgXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIsXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICB2YXIgbm9tYnJlQ2FwYTtcclxuXHJcbiAgICAgIGlmIChwcm9jZXNvID09IDIpIHtcclxuICAgICAgICBub21icmVDYXBhID0gdChcImZpcmVMYXllclwiKTtcclxuICAgICAgfSBlbHNlIGlmIChwcm9jZXNvID09IDMpIHtcclxuICAgICAgICBub21icmVDYXBhID0gdChcImZsb29kTGF5ZXJcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGZlYXR1cmVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgIHRpdGxlOiBub21icmVDYXBhLFxyXG4gICAgICAgIHNvdXJjZTogW10sXHJcbiAgICAgICAgb2JqZWN0SWRGaWVsZDogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgeyBuYW1lOiBcIk9CSkVDVElEXCIsIGFsaWFzOiBcIk9CSkVDVElEXCIsIHR5cGU6IFwib2lkXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJhcmVhX20yXCIsIGFsaWFzOiBcIsOBcmVhIChtwrIpXCIsIHR5cGU6IFwiZG91YmxlXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJhcmVhX2hhXCIsIGFsaWFzOiBcIsOBcmVhIChoYSlcIiwgdHlwZTogXCJkb3VibGVcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImFyZWFfa20yXCIsIGFsaWFzOiBcIsOBcmVhIChrbcKyKVwiLCB0eXBlOiBcImRvdWJsZVwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICByZW5kZXJlcjoge1xyXG4gICAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGdyYXBoaWNzID0gW107XHJcbiAgICAgIGxldCBncmFwaGljSW5kZXggPSAwO1xyXG5cclxuICAgICAgZ2VvanNvbkRhdGEuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4ge1xyXG4gICAgICAgIGxldCBnZW9tZXRyaWVzID0gW107XHJcblxyXG4gICAgICAgIGlmIChmZWF0dXJlLmdlb21ldHJ5LnR5cGUgPT09IFwiUG9seWdvblwiKSB7XHJcbiAgICAgICAgICBnZW9tZXRyaWVzLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBQb2x5Z29uKHtcclxuICAgICAgICAgICAgICByaW5nczogZmVhdHVyZS5nZW9tZXRyeS5jb29yZGluYXRlcyxcclxuICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBqaW11TWFwVmlldy52aWV3LnNwYXRpYWxSZWZlcmVuY2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmVhdHVyZS5nZW9tZXRyeS50eXBlID09PSBcIk11bHRpUG9seWdvblwiKSB7XHJcbiAgICAgICAgICBmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzLmZvckVhY2goKHBvbHlnb25Db29yZGluYXRlcykgPT4ge1xyXG4gICAgICAgICAgICBnZW9tZXRyaWVzLnB1c2goXHJcbiAgICAgICAgICAgICAgbmV3IFBvbHlnb24oe1xyXG4gICAgICAgICAgICAgICAgcmluZ3M6IHBvbHlnb25Db29yZGluYXRlcyxcclxuICAgICAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IGppbXVNYXBWaWV3LnZpZXcuc3BhdGlhbFJlZmVyZW5jZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZW9tZXRyaWVzLmZvckVhY2goKGdlb21ldHJ5KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhcmVhTTIgPSBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0FyZWEoZ2VvbWV0cnksIFwic3F1YXJlLW1ldGVyc1wiKTtcclxuICAgICAgICAgIGNvbnN0IGFyZWFIYSA9IGFyZWFNMiAvIDEwMDAwO1xyXG4gICAgICAgICAgY29uc3QgYXJlYUttMiA9IGFyZWFNMiAvIDFfMDAwXzAwMDtcclxuXHJcbiAgICAgICAgICBncmFwaGljcy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgR3JhcGhpYyh7XHJcbiAgICAgICAgICAgICAgZ2VvbWV0cnk6IGdlb21ldHJ5LFxyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgICAgIE9CSkVDVElEOiBncmFwaGljSW5kZXgsXHJcbiAgICAgICAgICAgICAgICBhcmVhX20yOiBhcmVhTTIsXHJcbiAgICAgICAgICAgICAgICBhcmVhX2hhOiBhcmVhSGEsXHJcbiAgICAgICAgICAgICAgICBhcmVhX2ttMjogYXJlYUttMixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGdyYXBoaWNJbmRleCsrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZlYXR1cmVMYXllci5zb3VyY2UgPSBncmFwaGljcztcclxuXHJcbiAgICAgIC8vIEFncmVnYXIgbGEgY2FwYSBhbCBtYXBhIHNpIG5vIGV4aXN0ZSB1bmEgY29uIGVsIG1pc21vIG5vbWJyZVxyXG4gICAgICBjb25zdCBleGlzdGluZ0xheWVyID0gamltdU1hcFZpZXcudmlldy5tYXAubGF5ZXJzLmZpbmQoXHJcbiAgICAgICAgKGxheWVyKSA9PiBsYXllci50aXRsZSA9PT0gXCJQb2xpZ29ubyBkZXNhc3RyZVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChleGlzdGluZ0xheWVyKSB7XHJcbiAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGV4aXN0aW5nTGF5ZXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQoZmVhdHVyZUxheWVyKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBjYXJnYXIgbGEgZ2VvbWV0csOtYSBlbiBlbCBtYXBhOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5jZW5kaW8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nSW5jZW5kaW8odHJ1ZSk7XHJcbiAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgaW1hZ2VuMSA9IHNlbGVjdGVkSW1hZ2VyaWVzWzBdPy5PQkpFQ1RJRDtcclxuXHJcbiAgICAgICAgLy8gQ29uc3RydWlyIGxhIFVSTCBjb24gbG9zIHBhcsOhbWV0cm9zXHJcbiAgICAgICAgY29uc3QgcHJvY2VzbyA9IDI7XHJcbiAgICAgICAgY29uc3QgZW50cmFkYSA9IGltYWdlbjE7XHJcbiAgICAgICAgLy9EZXNhcnJvbGxvXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvcHJveHk/cHJvY2Vzbz0ke3Byb2Nlc299JkVudHJhZGE9JHtlbnRyYWRhfSZ1cmw9JHtzZWxlY3RlZFNlbnNvci51cmx9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nSW5jZW5kaW8oZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgIGBFcnJvciBlbiBsYSBzb2xpY2l0dWQ6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHNldExvYWRpbmdJbmNlbmRpbyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVybExheWVyID0gcmVzcG9uc2VEYXRhLlBvbGlnb25HZW9Kc29uO1xyXG5cclxuICAgICAgICBhd2FpdCBjYXJnYXJHZW9tZXRyaWFFbk1hcGEodXJsTGF5ZXIsIHByb2Nlc28pO1xyXG5cclxuICAgICAgICBzZXRMb2FkaW5nSW5jZW5kaW8oZmFsc2UpO1xyXG4gICAgICAgIHNldFNob3dCdWZmZXIodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IodChcImZpcmVFcnJvclwiKSwge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBpbnVuZGFjaW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ0ludW5kYWNpb24odHJ1ZSk7XHJcblxyXG4gICAgaWYgKCFqaW11TWFwVmlldykgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGltYWdlbjEgPSBzZWxlY3RlZEltYWdlcmllc1swXT8uT0JKRUNUSUQ7XHJcblxyXG4gICAgICBpZiAoaW1hZ2VuMSA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBlbiBsYSBjYXJnYSBkZSBpbWFnZW5lczogJHtpbWFnZW4xfWApO1xyXG4gICAgICAgIHNldExvYWRpbmdJbnVuZGFjaW9uKGZhbHNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ29uc3RydWlyIGxhIFVSTCBjb24gbG9zIHBhcsOhbWV0cm9zXHJcbiAgICAgIGNvbnN0IHByb2Nlc28gPSAzO1xyXG4gICAgICBjb25zdCBlbnRyYWRhID0gaW1hZ2VuMTtcclxuXHJcbiAgICAgIC8vRGVzYXJyb2xsb1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvcHJveHk/cHJvY2Vzbz0ke3Byb2Nlc299JkVudHJhZGE9JHtlbnRyYWRhfSZ1cmw9JHtzZWxlY3RlZFNlbnNvci51cmx9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICApLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmdJbnVuZGFjaW9uKGZhbHNlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYEVycm9yIGVuIGxhIHNvbGljaXR1ZDogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRMb2FkaW5nSW51bmRhY2lvbihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgY29uc3QgdXJsTGF5ZXIgPSByZXNwb25zZURhdGEuUG9saWdvbkdlb0pzb247XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh7IHVybExheWVyIH0pO1xyXG4gICAgICBhd2FpdCBjYXJnYXJHZW9tZXRyaWFFbk1hcGEodXJsTGF5ZXIsIHByb2Nlc28pO1xyXG4gICAgICBzZXRMb2FkaW5nSW51bmRhY2lvbihmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgdG9hc3QuZXJyb3IodChcImZsb29kRXJyb3JcIiksIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmaW5kQnVmZmVyR2VvbWV0cnkgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWppbXVNYXBWaWV3KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidWZmZXJHcmFwaGljID0gamltdU1hcFZpZXcudmlldy5ncmFwaGljcy5pdGVtcy5maW5kKFxyXG4gICAgICAoZ3JhcGhpYykgPT4gZ3JhcGhpYy5hdHRyaWJ1dGVzICYmIGdyYXBoaWMuYXR0cmlidXRlcy5pZCA9PT0gXCJidWZmZXJfRElcIlxyXG4gICAgKTtcclxuICAgIGlmICghYnVmZmVyR3JhcGhpYykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnVmZmVyR3JhcGhpYy5nZW9tZXRyeTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdGFydERBID0gYXN5bmMgKHJpZXNnbzogU3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWRJbWFnZXJpZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICB0b2FzdC53YXJuaW5nKFxyXG4gICAgICAgICAgYERlYmUgc2VsZWNjaW9uYXIgdW5hIGltYWdlbiBhbnRlcyBkZSBlamVjdXRhciBlc3RlIHByb2Nlc29gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRMb2FkaW5nSW5jZW5kaW8oZmFsc2UpO1xyXG4gICAgICAgIHNldExvYWRpbmdJbnVuZGFjaW9uKGZhbHNlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgICAgICBsZXQgZGFnZXJab25lTGF5ZXIxID0gamltdU1hcFZpZXcudmlldy5tYXAubGF5ZXJzLmZpbmQoXHJcbiAgICAgICAgICAgIChsYXllcikgPT4gbGF5ZXIudGl0bGUgPT09IHQoXCJmaXJlTGF5ZXJcIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBsZXQgZGFnZXJab25lTGF5ZXIyID0gamltdU1hcFZpZXcudmlldy5tYXAubGF5ZXJzLmZpbmQoXHJcbiAgICAgICAgICAgIChsYXllcikgPT4gbGF5ZXIudGl0bGUgPT09IHQoXCJmbG9vZExheWVyXCIpXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGlmICghZGFnZXJab25lTGF5ZXIxICYmIHJpZXNnbyA9PT0gXCJpbmNlbmRpb1wiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGluY2VuZGlvKCk7XHJcbiAgICAgICAgICAgIGRhZ2VyWm9uZUxheWVyMSA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmxheWVycy5maW5kKFxyXG4gICAgICAgICAgICAgIChsYXllcikgPT4gbGF5ZXIudGl0bGUgPT09IHQoXCJmaXJlTGF5ZXJcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghZGFnZXJab25lTGF5ZXIyICYmIHJpZXNnbyA9PT0gXCJpbnVuZGFjaW9uXCIpIHtcclxuICAgICAgICAgICAgYXdhaXQgaW51bmRhY2lvbigpO1xyXG4gICAgICAgICAgICBkYWdlclpvbmVMYXllcjIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChcclxuICAgICAgICAgICAgICAobGF5ZXIpID0+IGxheWVyLnRpdGxlID09PSB0KFwiZmxvb2RMYXllclwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICgoamltdU1hcFZpZXcgJiYgZGFnZXJab25lTGF5ZXIxKSB8fCBkYWdlclpvbmVMYXllcjIpIHtcclxuICAgICAgICAgICAgaWYgKGRhZ2VyWm9uZUxheWVyMSkge1xyXG4gICAgICAgICAgICAgIGNhcGFUZW1wb3JhbChkYWdlclpvbmVMYXllcjEsIHJpZXNnbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhZ2VyWm9uZUxheWVyMikge1xyXG4gICAgICAgICAgICAgIGNhcGFUZW1wb3JhbChkYWdlclpvbmVMYXllcjIsIHJpZXNnbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJqaW11TWFwVmlldyBvIGNhcGEgbm8gZW5jb250cmFkYS5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FwYVRlbXBvcmFsID0gYXN5bmMgKGRhZ2VyWm9uZUxheWVyLCByaWVzZ286IFN0cmluZykgPT4ge1xyXG4gICAgc2V0U2hvd0J1ZmZlcih0cnVlKTtcclxuICAgIGNvbnN0IFtTa2V0Y2gsIEdyYXBoaWNzTGF5ZXIsIFNpbXBsZUZpbGxTeW1ib2xdID0gYXdhaXQgbG9hZE1vZHVsZXMoW1xyXG4gICAgICBcImVzcmkvd2lkZ2V0cy9Ta2V0Y2hcIixcclxuICAgICAgXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCIsXHJcbiAgICAgIFwiZXNyaS9zeW1ib2xzL1NpbXBsZUZpbGxTeW1ib2xcIixcclxuICAgIF0pO1xyXG5cclxuICAgIC8vIENyZWFyIHVuYSBjYXBhIGdyw6FmaWNhIHRlbXBvcmFsXHJcbiAgICBjb25zdCB0ZW1wR3JhcGhpY3NMYXllciA9IG5ldyBHcmFwaGljc0xheWVyKHtcclxuICAgICAgaWQ6IFwidGVtcEdyYXBoaWNzTGF5ZXJcIixcclxuICAgICAgdGl0bGU6IHQoXCJidWZmZXJMYXllclwiKSxcclxuICAgIH0pO1xyXG4gICAgamltdU1hcFZpZXcudmlldy5tYXAuYWRkKHRlbXBHcmFwaGljc0xheWVyKTtcclxuXHJcbiAgICAvLyBPYnRlbmVyIGxhcyBlbnRpZGFkZXMgZGUgbGEgY2FwYSBvcmlnaW5hbCB5IGNvcGlhcmxhcyBhIGxhIGNhcGEgdGVtcG9yYWxcclxuICAgIGNvbnN0IHF1ZXJ5ID0gZGFnZXJab25lTGF5ZXIuY3JlYXRlUXVlcnkoKTtcclxuICAgIHF1ZXJ5LndoZXJlID0gXCIxPTFcIjsgLy8gU2VsZWNjaW9uYXIgdG9kb3MgbG9zIGVsZW1lbnRvc1xyXG4gICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xyXG4gICAgcXVlcnkub3V0U3BhdGlhbFJlZmVyZW5jZSA9IGppbXVNYXBWaWV3LnZpZXcuc3BhdGlhbFJlZmVyZW5jZTtcclxuXHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZGFnZXJab25lTGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSk7XHJcbiAgICByZXN1bHRzLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHtcclxuICAgICAgY29uc3QgZ3JhcGhpYyA9IGZlYXR1cmUuY2xvbmUoKTtcclxuICAgICAgZ3JhcGhpYy5zeW1ib2wgPSBuZXcgU2ltcGxlRmlsbFN5bWJvbCh7XHJcbiAgICAgICAgY29sb3I6IHJpZXNnbyA9PT0gXCJpbmNlbmRpb1wiID8gWzI1NSwgMjU1LCAwLCAwLjhdIDogWzAsIDAsIDI1NSwgMC41XSxcclxuICAgICAgICBvdXRsaW5lOiBudWxsLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRlbXBHcmFwaGljc0xheWVyLmFkZChncmFwaGljKTtcclxuICAgICAgdGVtcEdyYXBoaWNzTGF5ZXIubGlzdE1vZGUgPSBcImhpZGVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENvbmZpZ3VyYXIgZWwgU2tldGNoIHBhcmEgdHJhYmFqYXIgY29uIGxhIGNhcGEgdGVtcG9yYWxcclxuICAgIGNvbnN0IHNrZXRjaEVkaXQgPSBuZXcgU2tldGNoKHtcclxuICAgICAgdmlldzogamltdU1hcFZpZXcudmlldyxcclxuICAgICAgbGF5ZXI6IHRlbXBHcmFwaGljc0xheWVyLFxyXG4gICAgICBjcmVhdGlvbk1vZGU6IFwidXBkYXRlXCIsXHJcbiAgICAgIGF2YWlsYWJsZUNyZWF0ZVRvb2xzOiBbXCJcIl0sXHJcbiAgICAgIHNjYWxlOiBcIm1cIixcclxuICAgICAgdmlzaWJsZUVsZW1lbnRzOiB7XHJcbiAgICAgICAgY3JlYXRlVG9vbHM6IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGlvblRvb2xzOiBmYWxzZSxcclxuICAgICAgICBzZXR0aW5nc01lbnU6IGZhbHNlLFxyXG4gICAgICAgIHVuZG9SZWRvTWVudTogZmFsc2UsXHJcbiAgICAgICAgZHVwbGljYXRlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICBkZWxldGVCdXR0b246IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0VXBkYXRlT3B0aW9uczoge1xyXG4gICAgICAgIGVuYWJsZVNjYWxpbmc6IHRydWUsXHJcbiAgICAgICAgZW5hYmxlUm90YXRpb246IHRydWUsXHJcbiAgICAgICAgbXVsdGlwbGVTZWxlY3Rpb25FbmFibGVkOiBmYWxzZSxcclxuICAgICAgICB0b29sOiBcIm1vdmVcIixcclxuICAgICAgfSxcclxuICAgICAgLy8gQ29uZmlndXJhciBlbCBjb2xvciBkZWwgb3V0bGluZSBkZSBzZWxlY2Npw7NuIGVuIGN5YW5cclxuICAgICAgdXBkYXRlT25HcmFwaGljQ2xpY2s6IHRydWUsXHJcbiAgICAgIHNuYXBwaW5nT3B0aW9uczoge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250YWluZXI6IFwibXlTa2V0Y2hDb250YWluZXJQdW50b1wiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUGVyc29uYWxpemFyIGVsIHRleHRvIGRlbCBsYWJlbCBkZSBzZWxlY2Npw7NuIGRlc3B1w6lzIGRlIHF1ZSBlbCBTa2V0Y2ggc2UgcmVuZGVyaWNlXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3Qgc2tldGNoQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVNrZXRjaENvbnRhaW5lclB1bnRvXCIpO1xyXG5cclxuICAgICAgaWYgKHNrZXRjaENvbnRhaW5lcikge1xyXG4gICAgICAgIC8vIEZ1bmNpw7NuIHBhcmEgcmVlbXBsYXphciBlbCB0ZXh0byBlbiB0b2RvcyBsb3Mgbm9kb3NcclxuICAgICAgICBjb25zdCByZXBsYWNlU2VsZWN0aW9uVGV4dCA9ICgpID0+IHtcclxuICAgICAgICAgIC8vIEJ1c2NhciB0b2RvcyBsb3MgZWxlbWVudG9zXHJcbiAgICAgICAgICBjb25zdCBhbGxFbGVtZW50cyA9IHNrZXRjaENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKTtcclxuICAgICAgICAgIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEJ1c2NhciBub2RvcyBkZSB0ZXh0byBkaXJlY3Rvc1xyXG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50Py5pbmNsdWRlcyhcIlNlbGVjY2nDs25cIikgfHxcclxuICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudD8uaW5jbHVkZXMoXCJTZWxlY3Rpb25cIilcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgIC9TZWxlY2Npw7NufFNlbGVjdGlvbi8sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQb2zDrWdvbm9zIHNlbGVjY2lvbmFkb3NcIlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyBCdXNjYXIgcG9yIHNlbGVjdG9yZXMgZXNwZWPDrWZpY29zIGRlbCBTa2V0Y2hcclxuICAgICAgICAgIGNvbnN0IGxhYmVscyA9IHNrZXRjaENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICBcIi5lc3JpLXNrZXRjaF9fcGFuZWwtbGFiZWwsIC5lc3JpLXNrZXRjaF9fc2VjdGlvbi1sYWJlbCwgLmVzcmktc2tldGNoX19oZWFkaW5nLXRleHRcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGxhYmVscy5mb3JFYWNoKChsYWJlbDogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50Py5pbmNsdWRlcyhcIlNlbGVjY2nDs25cIikgfHxcclxuICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudD8uaW5jbHVkZXMoXCJTZWxlY3Rpb25cIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbC50ZXh0Q29udGVudC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgL1NlbGVjY2nDs258U2VsZWN0aW9uLyxcclxuICAgICAgICAgICAgICAgIFwiUG9sw61nb25vcyBzZWxlY2Npb25hZG9zXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBFamVjdXRhciBpbm1lZGlhdGFtZW50ZVxyXG4gICAgICAgIHJlcGxhY2VTZWxlY3Rpb25UZXh0KCk7XHJcblxyXG4gICAgICAgIC8vIE9ic2VydmFyIGNhbWJpb3NcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICAgIHJlcGxhY2VTZWxlY3Rpb25UZXh0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShza2V0Y2hDb250YWluZXIsIHtcclxuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCA1MDApO1xyXG5cclxuICAgIC8vIEFwbGljYXIgY29sb3IgY3lhbiBhbCBvdXRsaW5lIGRlIHNlbGVjY2nDs24gZGVsIFNrZXRjaFxyXG4gICAgLy8gQWNjZWRlciBhIGxhIGNhcGEgaW50ZXJuYSBkZSBncsOhZmljb3MgZGVsIFNrZXRjaCBwYXJhIG1vZGlmaWNhciBsb3Mgc8OtbWJvbG9zXHJcblxyXG4gICAgLy8gQ2FwdHVyYXIgZWwgcG9sw61nb25vIHNlbGVjY2lvbmFkb1xyXG4gICAgc2tldGNoRWRpdC5vbihcInVwZGF0ZVwiLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnN0YXRlID09PSBcImFjdGl2ZVwiIHx8IGV2ZW50LnN0YXRlID09PSBcInN0YXJ0XCIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBldmVudC5ncmFwaGljcyAmJlxyXG4gICAgICAgICAgZXZlbnQuZ3JhcGhpY3NbMF0uZ2VvbWV0cnkudHlwZSA9PT0gXCJwb2x5Z29uXCIgLy8gVmVyaWZpY2FyIHF1ZSBlcyB1biBwb2zDrWdvbm9cclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNvbnN0IHBvbHlnb25HZW9tZXRyeSA9IGV2ZW50LmdyYXBoaWNzWzBdLmdlb21ldHJ5O1xyXG5cclxuICAgICAgICAgIHNldFNlbGVjdGVkUG9seWdvbihwb2x5Z29uR2VvbWV0cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWplY3V0YXJCdWZmZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXNlbGVjdGVkUG9seWdvbikge1xyXG4gICAgICB0b2FzdC53YXJuaW5nKHQoXCJidWZmZXJXYXJuaW5nXCIpLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nQnVmZmVyKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IFtnZW9tZXRyeUVuZ2luZSwgR3JhcGhpY10gPSBhd2FpdCBsb2FkTW9kdWxlcyhbXHJcbiAgICAgICAgXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIsXHJcbiAgICAgICAgXCJlc3JpL0dyYXBoaWNcIixcclxuICAgICAgXSk7XHJcblxyXG4gICAgICAvLyBDb252ZXJ0aXIgZWwgdmFsb3IgZGVsIGlucHV0IGEgbsO6bWVybyAoZGlzdGFuY2lhIGRlbCBidWZmZXIpXHJcbiAgICAgIGNvbnN0IGJ1ZmZlckRpc3RhbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgXCJpbnB1dEJ1ZmZlclwiXHJcbiAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgY29uc3QgZGlzdGFuY2VLbSA9IHBhcnNlRmxvYXQoYnVmZmVyRGlzdGFuY2UudmFsdWUpO1xyXG4gICAgICBjb25zdCBkaXN0YW5jZU1ldGVycyA9IGRpc3RhbmNlS20gKiAxMDAwO1xyXG5cclxuICAgICAgLy9TZSBlbGltaW5hciBlbCBidWZmZXIgYW50ZXJpb3JcclxuICAgICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3LnZpZXc7XHJcbiAgICAgIHZpZXcuZ3JhcGhpY3MuaXRlbXNcclxuICAgICAgICAuZmlsdGVyKChnKSA9PiBnLmF0dHJpYnV0ZXM/LmlkID09PSBcImJ1ZmZlcl9ESVwiKVxyXG4gICAgICAgIC5mb3JFYWNoKChnKSA9PiB2aWV3LmdyYXBoaWNzLnJlbW92ZShnKSk7XHJcblxyXG4gICAgICAvLyBHZW5lcmFyIGVsIGJ1ZmZlciBjb24gbGEgZGlzdGFuY2lhIGluZ3Jlc2FkYVxyXG4gICAgICBjb25zdCBidWZmZXJHZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlcihcclxuICAgICAgICBzZWxlY3RlZFBvbHlnb24sXHJcbiAgICAgICAgZGlzdGFuY2VNZXRlcnMsXHJcbiAgICAgICAgXCJtZXRlcnNcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXIgw6FyZWEgZGVsIGJ1ZmZlciBlbiBtwrJcclxuICAgICAgY29uc3QgYXJlYUJ1ZmZlciA9IGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljQXJlYShcclxuICAgICAgICBidWZmZXJHZW9tZXRyeSxcclxuICAgICAgICBcInNxdWFyZS1tZXRlcnNcIlxyXG4gICAgICApO1xyXG4gICAgICBzZXRBcmVhQnVmZmVyKGFyZWFCdWZmZXIpO1xyXG5cclxuICAgICAgLy8gQ3JlYXIgdW4gZ3LDoWZpY28gcGFyYSBlbCBidWZmZXIgeSBhZ3JlZ2FybG8gYWwgbWFwYVxyXG4gICAgICBjb25zdCBidWZmZXJHcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgIGdlb21ldHJ5OiBidWZmZXJHZW9tZXRyeSxcclxuICAgICAgICBzeW1ib2w6IHtcclxuICAgICAgICAgIHR5cGU6IFwic2ltcGxlLWZpbGxcIixcclxuICAgICAgICAgIGNvbG9yOiBbMjU1LCAwLCAwLCAwLjFdLFxyXG4gICAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgICBjb2xvcjogWzI1NSwgMCwgMF0sXHJcbiAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGlkOiBcImJ1ZmZlcl9ESVwiLCAvLyBJRCDDum5pY28gYmFzYWRvIGVuIHRpbWVzdGFtcFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0QnVmZmVyKGJ1ZmZlckdyYXBoaWMpO1xyXG5cclxuICAgICAgdmlldy5ncmFwaGljcy5hZGQoYnVmZmVyR3JhcGhpYyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWwgZ2VuZXJhciBlbCBidWZmZXI6XCIsIGVycm9yKTtcclxuICAgICAgdG9hc3QuZXJyb3IodChcImJ1ZmZlckVycm9yXCIpLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nQnVmZmVyKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkaWJ1amFyTGluZWFzUHJveGltaWRhZCA9IGFzeW5jIChcclxuICAgIHRvdWNoaW5nUG9seWdvbixcclxuICAgIGdlb21ldHJpZXNJbkJ1ZmZlclxyXG4gICkgPT4ge1xyXG4gICAgaWYgKCF0b3VjaGluZ1BvbHlnb24gfHwgZ2VvbWV0cmllc0luQnVmZmVyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJObyBoYXkgZ2VvbWV0csOtYXMgcGFyYSBjb25lY3Rhci5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbZ2VvbWV0cnlFbmdpbmUsIFBvbHlsaW5lLCBHcmFwaGljLCBHcmFwaGljc0xheWVyXSA9XHJcbiAgICAgIGF3YWl0IGxvYWRNb2R1bGVzKFtcclxuICAgICAgICBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIixcclxuICAgICAgICBcImVzcmkvZ2VvbWV0cnkvUG9seWxpbmVcIixcclxuICAgICAgICBcImVzcmkvR3JhcGhpY1wiLFxyXG4gICAgICAgIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiLFxyXG4gICAgICBdKTtcclxuXHJcbiAgICAvLyBDcmVhciBvIGxpbXBpYXIgbGEgY2FwYSBkZSBsw61uZWFzIGRlIHByb3hpbWlkYWRcclxuICAgIGxldCBsaW5lTGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKFwicHJveGltaXR5TGluZXNMYXllclwiKTtcclxuICAgIGlmICghbGluZUxheWVyKSB7XHJcbiAgICAgIGxpbmVMYXllciA9IG5ldyBHcmFwaGljc0xheWVyKHtcclxuICAgICAgICBpZDogXCJwcm94aW1pdHlMaW5lc0xheWVyXCIsXHJcbiAgICAgICAgdGl0bGU6IHQoXCJwcm94aW1pdHlMYXllclwiKSxcclxuICAgICAgfSk7XHJcbiAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChsaW5lTGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9idGVuZXIgY2VudHJvaWRlIGRlbCBwb2zDrWdvbm8gY2VudHJhbFxyXG4gICAgY29uc3QgY2VudHJvaWRlID0gdG91Y2hpbmdQb2x5Z29uLmdlb21ldHJ5LmNlbnRyb2lkO1xyXG5cclxuICAgIC8vIERpYnVqYXIgdW5hIGzDrW5lYSBkZXNkZSBlbCBjZW50cm9pZGUgYSBjYWRhIGdlb21ldHLDrWEgZW4gZ2VvbWV0cmllc0luQnVmZmVyXHJcblxyXG4gICAgZ2VvbWV0cmllc0luQnVmZmVyLmZvckVhY2goKGdlb21ldHJ5KSA9PiB7XHJcbiAgICAgIGxldCBkZXN0aW5vO1xyXG5cclxuICAgICAgaWYgKGdlb21ldHJ5LmNlbnRyb2lkKSB7XHJcbiAgICAgICAgZGVzdGlubyA9IGdlb21ldHJ5LmNlbnRyb2lkOyAvLyBTaSBsYSBnZW9tZXRyw61hIHRpZW5lIGNlbnRyb2lkZSwgdXNhcmxvXHJcbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkuZXh0ZW50KSB7XHJcbiAgICAgICAgZGVzdGlubyA9IGdlb21ldHJ5LmV4dGVudC5jZW50ZXI7IC8vIFNpIHRpZW5lIGBleHRlbnRgLCB1c2FyIHN1IGNlbnRyb1xyXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5LnR5cGUgPT09IFwicG9pbnRcIikge1xyXG4gICAgICAgIGRlc3Rpbm8gPSBnZW9tZXRyeTsgLy8gU2kgZXMgdW4gcHVudG8sIHVzYXJsbyBkaXJlY3RhbWVudGVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJHZW9tZXRyw61hIHNpbiBjZW50cm9pZGUgbmkgZXh0ZW50LCBpZ25vcmFuZG86XCIsIGdlb21ldHJ5KTtcclxuICAgICAgICByZXR1cm47IC8vIElnbm9yYXIgbGEgZ2VvbWV0csOtYSBzaSBubyB0aWVuZSBjZW50cm9pZGUsIGV4dGVudCBuaSBlcyB1biBwdW50b1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBsaW5lR2VvbWV0cnkgPSBuZXcgUG9seWxpbmUoe1xyXG4gICAgICAgIHBhdGhzOiBbXHJcbiAgICAgICAgICBbY2VudHJvaWRlLngsIGNlbnRyb2lkZS55XSxcclxuICAgICAgICAgIFtkZXN0aW5vLngsIGRlc3Rpbm8ueV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBqaW11TWFwVmlldy52aWV3LnNwYXRpYWxSZWZlcmVuY2UsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGlzdGFuY2VNZXRlcnMgPSBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0xlbmd0aChcclxuICAgICAgICBsaW5lR2VvbWV0cnksXHJcbiAgICAgICAgXCJtZXRlcnNcIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkaXN0YW5jZUtpbG9tZXRlcnMgPSBkaXN0YW5jZU1ldGVycyAvIDEwMDA7XHJcblxyXG4gICAgICBjb25zdCBsaW5lR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICBnZW9tZXRyeTogbGluZUdlb21ldHJ5LFxyXG4gICAgICAgIHN5bWJvbDoge1xyXG4gICAgICAgICAgdHlwZTogXCJzaW1wbGUtbGluZVwiLFxyXG4gICAgICAgICAgY29sb3I6IFswLCAwLCAyNTVdLCAvLyBBenVsXHJcbiAgICAgICAgICB3aWR0aDogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGRpc3RhbmNlX206IGRpc3RhbmNlTWV0ZXJzLnRvRml4ZWQoMiksXHJcbiAgICAgICAgICBkaXN0YW5jZV9rbTogZGlzdGFuY2VLaWxvbWV0ZXJzLnRvRml4ZWQoMiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3B1cFRlbXBsYXRlOiB7XHJcbiAgICAgICAgICB0aXRsZTogdChcInByb3hpbWl0eUxheWVyXCIpLFxyXG4gICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgXCI8Yj5NdHM6PC9iPlwiICtcclxuICAgICAgICAgICAgZGlzdGFuY2VNZXRlcnMudG9GaXhlZCgyKSArXHJcbiAgICAgICAgICAgIFwibTxicj48Yj5LbXM6PC9iPiBcIiArXHJcbiAgICAgICAgICAgIGRpc3RhbmNlS2lsb21ldGVycy50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCIga21cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxpbmVMYXllci5hZGQobGluZUdyYXBoaWMpO1xyXG4gICAgICBsaW5lTGF5ZXIudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIGxpbmVMYXllci5saXN0TW9kZSA9IFwic2hvd1wiO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXBwbHlSYXN0ZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChqaW11TWFwVmlldykge1xyXG4gICAgICBjb25zdCBidWZmZXJHZW9tZXRyeSA9IGZpbmRCdWZmZXJHZW9tZXRyeSgpO1xyXG5cclxuICAgICAgaWYgKCFidWZmZXJHZW9tZXRyeSkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgW2dlb21ldHJ5RW5naW5lLCBQb2ludF0gPSBhd2FpdCBsb2FkTW9kdWxlcyhbXHJcbiAgICAgICAgXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIsXHJcbiAgICAgICAgXCJlc3JpL2dlb21ldHJ5L1BvaW50XCIsXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgY29uc3QgY2VudHJvaWQgPSBuZXcgUG9pbnQoe1xyXG4gICAgICAgIHg6IGJ1ZmZlckdlb21ldHJ5LmV4dGVudC5jZW50ZXIubG9uZ2l0dWRlLFxyXG4gICAgICAgIHk6IGJ1ZmZlckdlb21ldHJ5LmV4dGVudC5jZW50ZXIubGF0aXR1ZGUsXHJcbiAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogYnVmZmVyR2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB0ZW1wR3JhcGhpY3NMYXllciA9XHJcbiAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAuZmluZExheWVyQnlJZChcInRlbXBHcmFwaGljc0xheWVyXCIpO1xyXG5cclxuICAgICAgaWYgKCF0ZW1wR3JhcGhpY3NMYXllcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMYSBjYXBhICd0ZW1wR3JhcGhpY3NMYXllcicgbm8gZXhpc3RlLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRvdWNoaW5nUG9seWdvbiA9IHRlbXBHcmFwaGljc0xheWVyLmdyYXBoaWNzLml0ZW1zLmZpbmQoXHJcbiAgICAgICAgKGdyYXBoaWMpID0+XHJcbiAgICAgICAgICBncmFwaGljLmdlb21ldHJ5LnR5cGUgPT09IFwicG9seWdvblwiICYmIC8vIFNvbG8gcG9sw61nb25vc1xyXG4gICAgICAgICAgZ2VvbWV0cnlFbmdpbmUuaW50ZXJzZWN0cyhncmFwaGljLmdlb21ldHJ5LCBzZWxlY3RlZFBvbHlnb24pIC8vIFZlcmlmaWNhciBpbnRlcnNlY2Npw7NuXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHVyYmFuTGltaXQgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChcclxuICAgICAgICAobGF5ZXIpID0+IGxheWVyLnRpdGxlID09PSBcIkzDrW1pdGUgdXJiYW5vIFBsYW4gUmVndWxhZG9yIENvbXVuYWxcIlxyXG4gICAgICApO1xyXG4gICAgICB1cmJhbkxpbWl0LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAvLyBPYnRlbmVyIHRvZGFzIGxhcyBjYXBhcyB2aXNpYmxlcyBkZWwgbWFwYVxyXG4gICAgICBjb25zdCB2aXNpYmxlTGF5ZXJzID0gamltdU1hcFZpZXcudmlldy5tYXAubGF5ZXJzLmZpbHRlcihcclxuICAgICAgICAobGF5ZXIpID0+XHJcbiAgICAgICAgICBsYXllci52aXNpYmxlICYmXHJcbiAgICAgICAgICBsYXllci50eXBlID09PSBcImZlYXR1cmVcIiAmJlxyXG4gICAgICAgICAgbGF5ZXIudGl0bGUgIT09IHQoXCJmaXJlTGF5ZXJcIikgJiZcclxuICAgICAgICAgIGxheWVyLnRpdGxlICE9PSB0KFwiZmxvb2RMYXllclwiKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGV0IGdlb21ldHJpZXNJbkJ1ZmZlciA9IFtdO1xyXG5cclxuICAgICAgY29uc3QgcXVlcnkgPSB1cmJhbkxpbWl0LmNyZWF0ZVF1ZXJ5KCk7XHJcbiAgICAgIHF1ZXJ5Lmdlb21ldHJ5ID0gYnVmZmVyR2VvbWV0cnk7IC8vIEJ1c2NhciBkZW50cm8gZGVsIGJ1ZmZlclxyXG4gICAgICBxdWVyeS5zcGF0aWFsUmVsYXRpb25zaGlwID0gXCJpbnRlcnNlY3RzXCI7IC8vIEludGVyc2VjY2nDs24gY29uIGVsIGJ1ZmZlclxyXG4gICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWU7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCB1cmJhbkxpbWl0LnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xyXG4gICAgICAgIHJlc3VsdHMuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4ge1xyXG4gICAgICAgICAgZ2VvbWV0cmllc0luQnVmZmVyLnB1c2goZmVhdHVyZS5nZW9tZXRyeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgY29uc3VsdGFuZG8gbGEgY2FwYSBgLCBlcnJvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0b3VjaGluZ1BvbHlnb24gJiYgdmlzaWJsZUxheWVycykge1xyXG4gICAgICAgIGRpYnVqYXJMaW5lYXNQcm94aW1pZGFkKHRvdWNoaW5nUG9seWdvbiwgZ2VvbWV0cmllc0luQnVmZmVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdC5lcnJvcih0KFwidXJiYW5MaW1pdHNFcnJvclwiKSwge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyA8IS0tLS0tLS0tIEhlbHBlcnMgLS0tLS0tLS0tLS0tLT5cclxuICAvL0xpbXBpYSBsYXMgY2FwYXMgZ2VuZXJhZGFzIHNpIHNlIGNhbWJpYSBsYXMgaW1hZ2VuZXMgc2VsZWNjaW9uYWRhc1xyXG4gIGNvbnN0IGNsZWFuTGF5ZXJzID0gKHRpdGxlOiBTdHJpbmcpID0+IHtcclxuICAgIGlmIChqaW11TWFwVmlldykge1xyXG4gICAgICBjb25zdCBsYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5maW5kKFxyXG4gICAgICAgIChsYXllcikgPT4gbGF5ZXIudGl0bGUgPT0gdGl0bGVcclxuICAgICAgKTtcclxuICAgICAgaWYgKGxheWVyKSB7XHJcbiAgICAgICAgLy8gT2N1bHRhIHRvZGFzIGxhcyBjYXBhcyBkZSBzZW5zb3JlcyBwb3IgZGVmZWN0b1xyXG4gICAgICAgIGxheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAvLyBFc3RvIG9jdWx0YSBsYSBjYXBhIGRlbCB3aWRnZXQgZGUgY2FwYXMgKExheWVyTGlzdClcclxuICAgICAgICBsYXllci5saXN0TW9kZSA9IFwiaGlkZVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByZW1vdmVMYXllciA9ICh0aXRsZTogU3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgY29uc3QgbGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZmluZChcclxuICAgICAgICAobGF5ZXIpID0+IGxheWVyLnRpdGxlID09IHRpdGxlXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShsYXllcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVtb3ZlTGF5ZXIoXCJ0ZW1wR3JhcGhpY3NMYXllclwiKTtcclxuICAgIHJlbW92ZUxheWVyKHQoXCJmaXJlTGF5ZXJcIikpO1xyXG4gICAgcmVtb3ZlTGF5ZXIodChcImZsb29kTGF5ZXJcIikpO1xyXG4gICAgcmVtb3ZlTGF5ZXIodChcImJ1ZmZlckxheWVyXCIpKTtcclxuICAgIHJlbW92ZUxheWVyKHQoXCJwcm94aW1pdHlMYXllclwiKSk7XHJcbiAgICBjbGVhbkxheWVycyhcIkzDrW1pdGUgdXJiYW5vIFBsYW4gUmVndWxhZG9yIENvbXVuYWxcIik7XHJcbiAgICBzZXRTaG93QnVmZmVyKGZhbHNlKTtcclxuICAgIHNldFNlbGVjdGVkUG9seWdvbihudWxsKTtcclxuICB9LCBbc2VsZWN0ZWRJbWFnZXJpZXMsIGdlb3Byb2Nlc3NdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiamltdS13aWRnZXQgcHJveGltaXR5LXdpZGdldFwiPlxyXG4gICAgICB7cHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmIHByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3hpbWl0eS1tYWluLWNvbnRlbnRcIj5cclxuICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGg0Pnt0KFwid2lkZ2V0TGFiZWxcIil9PC9oND5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJveGltaXR5LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAge3Nob3dCdWZmZXIgPT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHA+e3QoXCJkZXNjcmlwdGlvblwiKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3hpbWl0eS1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nSW5jZW5kaW8gPT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgdHlwZT1cIkRPTlVUXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc3RhcnREQShcImluY2VuZGlvXCIpfSBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KFwiaW5jZW5kaW9cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nSW51bmRhY2lvbiA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyB0eXBlPVwiRE9OVVRcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3RhcnREQShcImludW5kYWNpb25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KFwiaW51bmRhY2lvblwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7c2hvd0J1ZmZlciA9PT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm94aW1pdHktYnVmZmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibXlTa2V0Y2hDb250YWluZXJQdW50b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm94aW1pdHktYnVmZmVyLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+e3QoXCJidWZmZXJMYWJlbFwiKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJveGltaXR5LWJ1ZmZlci1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dEJ1ZmZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YnVmZmVyRGlzdGFuY2V9IC8vIFVzYSBlbCBlc3RhZG9cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVCdWZmZXJDaGFuZ2V9IC8vIE1hbmVqYSBsb3MgY2FtYmlvc1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+S21zPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZWplY3V0YXJCdWZmZXJ9IHNpemU9XCJzbVwiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoXCJnZW5lcmFyQnVmZmVyXCIpfVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FwcGx5UmFzdGVyRnVuY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dChcImRpYnVqYXJMaW5lYXNcIil9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9