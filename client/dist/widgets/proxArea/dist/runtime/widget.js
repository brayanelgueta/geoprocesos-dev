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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useLocale */ "./your-extensions/hooks/useLocale.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./translations */ "./your-extensions/widgets/proxArea/src/runtime/translations.ts");
/* harmony import */ var _components_TitleWithTooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/TitleWithTooltip */ "./your-extensions/components/TitleWithTooltip.tsx");
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
    const selectedSensor = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedSensor; });
    const selectedImageries = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedImages; });
    const geoprocess = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.geoprocess; });
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
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_TitleWithTooltip__WEBPACK_IMPORTED_MODULE_8__["default"], { title: t("widgetLabel"), description: t("description") }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wcm94QXJlYS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUNqQjtBQUN4Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2UkFBNlIsTUFBTSxXQUFXLFVBQVUsVUFBVSxX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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RCxJQUFJO0FBQ0o7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXLFFBQVEsYUFBYSwrQ0FBK0MsTUFBTTtBQUM5RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGFBQWE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZLE1BQU0sTUFBTSxxQ0FBcUMsNkJBQTZCO0FBQ3pIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxrREFBa0Qsa0NBQWtDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUk7QUFDTixNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQSw2RkFBNkY7QUFDN0Y7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9FQUFvRTtBQUNwRjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQXFDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQSx1REFBdUQsWUFBWSwySkFBMkosYUFBYTtBQUMzTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsOEVBQThFLCtCQUErQjtBQUM3RztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSx1Q0FBdUM7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWlFLHFCQUFxQjtBQUN0RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isc0dBQWlDO0FBQ3ZELGtCQUFrQix1REFBMkI7QUFhM0M7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2htQ0E7QUFDQSxlQUFlLDJDQUEyQyxnR0FBZ0csNkpBQTZKLFVBQVUsNkJBQTZCLCtCQUErQiwrQkFBK0Isa0NBQWtDLGtDQUFrQyx5Q0FBeUMsc0RBQXNELHVEQUF1RCw2REFBNkQsNkRBQTZELHlEQUF5RCx3Q0FBd0MsOEJBQThCLDhCQUE4QixrRkFBa0Ysc0ZBQXNGLG9GQUFvRix3RkFBd0Ysa0NBQWtDLCtCQUErQixrQ0FBa0MsbUNBQW1DLGdDQUFnQyx3REFBd0QsbUNBQW1DLHlCQUF5QixxQ0FBcUMsaUNBQWlDLGlDQUFpQyxvQ0FBb0Msb0NBQW9DLGtDQUFrQyxrQ0FBa0MsNkNBQTZDLGlIQUFpSCx3Q0FBd0MsMkRBQTJELGlFQUFpRSxpRUFBaUUsNkRBQTZELGtDQUFrQywyQkFBMkIsZ0NBQWdDLDJEQUEyRCxlQUFlLHNDQUFzQyxzQkFBc0IsV0FBVyxhQUFhLHNCQUFzQixxQ0FBcUMsOEJBQThCLGdDQUFnQyx1Q0FBdUMsOEJBQThCLFNBQVMsMEJBQTBCLG1CQUFtQixzQ0FBc0MsOEJBQThCLGtDQUFrQyxnQkFBZ0Isd0NBQXdDLG9DQUFvQyxnQ0FBZ0MsMENBQTBDLG9DQUFvQyxTQUFTLDBCQUEwQixtQkFBbUIseUNBQXlDLG9DQUFvQyxrQ0FBa0MsZ0JBQWdCLGlCQUFpQixPQUFPLGtCQUFrQixrQkFBa0Isa0NBQWtDLDRDQUE0QyxzQkFBc0IsbUJBQW1CLHNDQUFzQyw4Q0FBOEMsd0NBQXdDLDRDQUE0Qyx3Q0FBd0MsVUFBVSxhQUFhLFlBQVksbUJBQW1CLHNCQUFzQiwwQ0FBMEMsMkJBQTJCLFlBQVksK0JBQStCLFNBQVMsa0hBQWtILDZCQUE2Qix1QkFBdUIsMkhBQTJILG1DQUFtQyx1QkFBdUIsZ0NBQWdDLGlDQUFpQyxhQUFhLGlCQUFpQiw2QkFBNkIsZ0JBQWdCLGlCQUFpQiw4Q0FBOEMsa0NBQWtDLDBCQUEwQixrQkFBa0IsV0FBVyxvREFBb0QseUJBQXlCLGtJQUFrSSx1QkFBdUIsZ0RBQWdELGlCQUFpQixrRUFBa0UsVUFBVSxnQ0FBZ0MsV0FBVyxrQkFBa0IsT0FBTyxRQUFRLDRCQUE0QixZQUFZLHdDQUF3QyxNQUFNLHdDQUF3QyxTQUFTLHdFQUF3RSxxQkFBcUIsd0VBQXdFLHdCQUF3QixpQ0FBaUMsV0FBVyxrQkFBa0IsT0FBTyxRQUFRLFNBQVMsWUFBWSxvQkFBb0IsV0FBVyxzQkFBc0IsY0FBYyxpQ0FBaUMsZUFBZSxzQkFBc0IsdUJBQXVCLFdBQVcsY0FBYyxhQUFhLG1CQUFtQix5QkFBeUIsdUJBQXVCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLDZCQUE2QixzQ0FBc0Msc0NBQXNDLHVGQUF1Rix1Q0FBdUMsdUNBQXVDLHNEQUFzRCxzQ0FBc0Msc0NBQXNDLHlEQUF5RCx5Q0FBeUMseUNBQXlDLHlEQUF5RCx5Q0FBeUMseUNBQXlDLHVEQUF1RCx1Q0FBdUMsdUNBQXVDLHFDQUFxQyxnREFBZ0Qsb0NBQW9DLCtDQUErQyw4QkFBOEIsK0NBQStDLGlDQUFpQyxrREFBa0QsaUNBQWlDLGtEQUFrRCwrQkFBK0IsZ0RBQWdELHVSQUF1Uiw2Q0FBNkMsd0JBQXdCLFdBQVcsa0JBQWtCLFFBQVEsVUFBVSx1QkFBdUIsYUFBYSxZQUFZLFVBQVUsZUFBZSxXQUFXLG9CQUFvQixVQUFVLDhDQUE4QyxTQUFTLFlBQVksK0JBQStCLFdBQVcsV0FBVyw0QkFBNEIsa0JBQWtCLFlBQVksV0FBVyw0REFBNEQsVUFBVSxtQ0FBbUMsR0FBRyxvQkFBb0IsR0FBRyxxQkFBcUIsd0JBQXdCLGtCQUFrQixTQUFTLE9BQU8sV0FBVyxZQUFZLFVBQVUsV0FBVyxzQkFBc0Isa0NBQWtDLG9EQUFvRCxvQ0FBb0MseUJBQXlCLDZCQUE2QixRQUFRLGFBQWEsdUJBQXVCLGtDQUFrQyw2QkFBNkIsa0JBQWtCLGdCQUFnQixTQUFTLE9BQU8sV0FBVyxXQUFXLDBEQUEwRCwyREFBMkQsK0NBQStDLFVBQVUsNEJBQTRCLDJDQUEyQyxXQUFXLFlBQVksbUJBQW1CLFdBQVcsWUFBWSxzQkFBc0IsaUJBQWlCLG1CQUFtQixzREFBc0QsaURBQWlELDhDQUE4QyxtQ0FBbUMsa0JBQWtCLHdEQUF3RCxHQUFHLFVBQVUsa0NBQWtDLElBQUksVUFBVSxpQ0FBaUMsSUFBSSxnQ0FBZ0MsSUFBSSxnQ0FBZ0MsR0FBRyxnQkFBZ0Isb0NBQW9DLElBQUksVUFBVSx3Q0FBd0MsR0FBRyxVQUFVLDBDQUEwQyxrQ0FBa0Msa0JBQWtCLHdEQUF3RCxHQUFHLFVBQVUsbUNBQW1DLElBQUksVUFBVSxnQ0FBZ0MsSUFBSSxpQ0FBaUMsSUFBSSwrQkFBK0IsR0FBRyxnQkFBZ0IsbUNBQW1DLElBQUksVUFBVSx1Q0FBdUMsR0FBRyxVQUFVLDJDQUEyQyxnQ0FBZ0Msa0JBQWtCLHdEQUF3RCxHQUFHLFVBQVUsa0NBQWtDLElBQUksVUFBVSxpQ0FBaUMsSUFBSSxnQ0FBZ0MsSUFBSSxnQ0FBZ0MsR0FBRyx5QkFBeUIsaUNBQWlDLElBQUksaURBQWlELFFBQVEsVUFBVSxpREFBaUQsR0FBRyxVQUFVLG9DQUFvQyxrQ0FBa0Msa0JBQWtCLHdEQUF3RCxHQUFHLFVBQVUsbUNBQW1DLElBQUksVUFBVSxnQ0FBZ0MsSUFBSSxpQ0FBaUMsSUFBSSwrQkFBK0IsR0FBRyxnQkFBZ0IsbUNBQW1DLElBQUksaURBQWlELFFBQVEsVUFBVSxpREFBaUQsR0FBRyxVQUFVLG1DQUFtQyx1RUFBdUUsc0NBQXNDLHlFQUF5RSx1Q0FBdUMsb0NBQW9DLHNDQUFzQyx1Q0FBdUMsb0NBQW9DLHFFQUFxRSx1Q0FBdUMsdUVBQXVFLHdDQUF3QyxtQ0FBbUMscUNBQXFDLHNDQUFzQyx1Q0FBdUMsNEJBQTRCLEdBQUcsVUFBVSw0QkFBNEIsSUFBSSxXQUFXLDZCQUE2QixHQUFHLFVBQVUsSUFBSSxVQUFVLHNEQUFzRCxHQUFHLFdBQVcsc0JBQXNCLGdDQUFnQyxxQkFBcUIsaUNBQWlDLDRCQUE0QixHQUFHLDRDQUE0QyxrQ0FBa0MsVUFBVSxJQUFJLDZDQUE2QyxrQ0FBa0MsSUFBSSw0Q0FBNEMsVUFBVSxJQUFJLDRDQUE0QyxHQUFHLDhCQUE4Qiw2QkFBNkIsR0FBRyx1REFBdUQsSUFBSSx1RUFBdUUsVUFBVSxHQUFHLHNFQUFzRSxXQUFXLHNCQUFzQixnQ0FBZ0MscUJBQXFCLGlDQUFpQyxrQ0FBa0MsR0FBRyxnQ0FBZ0MsbUJBQW1CLEdBQUcscUNBQXFDLGlDQUFpQyxHQUFHLGlDQUFpQyxtQkFBbUIsR0FBRyxxQ0FBcUMsK0JBQStCLEdBQUcsZ0NBQWdDLG1CQUFtQixHQUFHLHFDQUFxQyxpQ0FBaUMsR0FBRyxpQ0FBaUMsbUJBQW1CLEdBQUcscUNBQXFDLG1DQUFtQyxHQUFHLG9DQUFvQyxHQUFHLGtCQUFrQix3Q0FBd0Msa0NBQWtDLEdBQUcsb0NBQW9DLEdBQUcsa0JBQWtCLHlDQUF5QyxrQ0FBa0MsR0FBRyxvQ0FBb0MsR0FBRyxrQkFBa0Isa0NBQWtDLGdDQUFnQyxHQUFHLG9DQUFvQyxHQUFHLGtCQUFrQixtQ0FBbUMscUVBQXFFLHFDQUFxQyx1RUFBdUUsc0NBQXNDLG1DQUFtQyxxQ0FBcUMsc0NBQXNDLG1DQUFtQyxtRUFBbUUsc0NBQXNDLGtDQUFrQyx1QkFBdUIscUVBQXFFLHVDQUF1QyxrQ0FBa0MsdUJBQXVCLGtDQUFrQyxvQ0FBb0Msa0NBQWtDLHVCQUF1QixxQ0FBcUMsc0NBQXNDLGtDQUFrQyx1QkFBdUIsMEJBQTBCLEdBQUcsb0JBQW9CLEdBQUc7QUFDM21jLEdBQTJDLHNLQUFzSyxxREFBRSxzQkFBZ0csc0JBQXNCLElBQUksdUJBQXVCLEdBQUcsMkJBQTJCLDBEQUEwRCxFQUFFLCtCQUErQix3REFBd0QsRUFBRSxFQUFFLFlBQVksd0VBQXdFLEVBQUUsaUJBQWlCLGtGQUFrRixFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLDZDQUFFLElBQUksT0FBTyxzREFBRSxNQUFNLHFDQUFxQyxvTEFBb0wsTUFBTSxtR0FBbUcsSUFBSSxLQUFLLGdEQUFFLE1BQU0sdUJBQXVCLHdEQUF3RCxnQkFBZ0IsNkJBQTZCLEVBQUUsdUNBQXVDLEtBQUssTUFBTSwyREFBZ0IsQ0FBQyxzREFBVyxVQUFxRSxnQkFBZ0IsT0FBTyw0SUFBNEksZ0ZBQWdGLHNCQUFzQixPQUFPLHFEQUFFLGdCQUFnQixtREFBRSxJQUFJLDREQUE0RCxVQUFVLDREQUE0RCxJQUEwQixhQUFhLHlDQUF5QyxFQUFFLE9BQU8sMkRBQWdCLFdBQVcsNERBQTRELEVBQUUsNEJBQTRCLDBCQUEwQixnQkFBZ0IsQ0FBQywyREFBZ0IsUUFBUSx5Q0FBeUMsQ0FBQywyREFBZ0IsU0FBUyxnSkFBZ0osSUFBK0MsYUFBYSwwSEFBMEgsRUFBRSxxQkFBcUIscUJBQXFCLEVBQUUsNkNBQTZDLDBCQUEwQixFQUFFLElBQUksTUFBTSxnREFBRSxxSUFBcUksRUFBRSw2QkFBNkIsRUFBRSxHQUFHLGtDQUFrQyxZQUFZLGdDQUFnQyxFQUFFLGdEQUFFLFNBQVMsOERBQThELFNBQVMsT0FBTywyREFBZ0IsUUFBUSx3REFBd0QsQ0FBQywyREFBZ0IsUUFBUSxzRUFBc0UsR0FBRywwQkFBMEIsRUFBRSxFQUFFLEVBQUUsMkRBQWdCLFFBQVEsNkdBQTZHLEdBQTJGLG1CQUFtQixLQUFLLEVBQUUsbUJBQW1CLHFGQUFxRiwyQ0FBMkMsS0FBSyxtQ0FBbUMsSUFBSSx3Q0FBd0MsWUFBWSxXQUFXLGNBQWMsTUFBTSxrRUFBa0UsRUFBRSxPQUFPLFFBQVEsc0ZBQXNGLE9BQU8sd0JBQXdCLEtBQUssZUFBZSxRQUFRLElBQUksUUFBUSxpQkFBaUIsT0FBTyxRQUFRLElBQUkscUJBQXFCLG1CQUFtQixzSUFBc0ksT0FBTyx1RkFBdUYsZUFBZSxJQUFJLDhDQUE4QyxhQUFhLE9BQU8sT0FBTyxrVEFBa1QsOEJBQThCLGVBQWUsZUFBZSxZQUFZLDREQUE0RCxhQUFhLE9BQU8sT0FBTyxtS0FBbUssT0FBTyw2QkFBNkIsZ0VBQWdFLEtBQUssU0FBUyxhQUFhLElBQUksbUJBQW1CLGVBQWUsZ0JBQWdCLG1CQUFtQixNQUFNLDJDQUEyQyxvQkFBb0Isd0VBQXdFLGNBQWMsMkNBQTJDLFdBQVcsY0FBYyxJQUFJLE1BQU0sb0RBQW9ELGdCQUFnQixNQUFNLHNEQUFzRCxTQUFTLHFCQUFxQiwyQkFBMkIsSUFBSSxlQUFlLFVBQVUsOENBQThDLE9BQU8sZ0NBQWdDLGlCQUFpQixFQUFFLDBDQUEwQywyQkFBMkIsb0NBQW9DLG9CQUFvQixHQUFHLFlBQVksSUFBSSxjQUFjLHNFQUFzRSxHQUFHLGlCQUFpQixxQkFBcUIsb0JBQW9CLGdCQUFnQixrQkFBa0IsR0FBRyxlQUFlLE1BQU0sMERBQTBELGlCQUFpQixjQUFjLDZHQUE2RyxFQUFFLGVBQWUsdUJBQXVCLE9BQU8sYUFBYSxpQkFBaUIsV0FBVyxtQkFBbUIsaUJBQWlCLGlCQUFpQixhQUFhLE1BQU0sa0NBQWtDLGVBQWUsTUFBTSxrREFBa0QsZUFBZSxzQkFBc0IsY0FBYyxlQUFlLHNEQUFzRCxnQkFBZ0IseUJBQXlCLGdCQUFnQixPQUFPLHNDQUFzQyxjQUFjLHlCQUF5QixnQkFBZ0IsMkJBQTJCLGtDQUFrQywyRUFBMkUsR0FBRyxlQUFlLDRCQUE0QixJQUFJLE1BQU0sOENBQThDLFVBQVUsR0FBRyxPQUFPLGdGQUFnRixhQUFhLFlBQVksYUFBYSxPQUFPLE9BQU8sd0JBQXdCLFNBQVMsU0FBUyxHQUFHLHFCQUFxQixVQUFVLGNBQWMsVUFBVSxJQUFJLGNBQWMsOERBQThELGFBQWEsdUJBQXVCLGlCQUFpQixtQkFBbUIsdUJBQXVCLGlCQUFpQiwrQkFBK0Isa0JBQWtCLEdBQUcsZUFBZSxNQUFNLGFBQWEsdUJBQXVCLGFBQWEsZ0JBQWdCLElBQUksY0FBYyxNQUFNLElBQUksa0JBQWtCLE1BQU0sd0RBQXdELDZCQUE2QixrQkFBa0IseUJBQXlCLFdBQVcsWUFBWSxXQUFXLEdBQUcsY0FBYyxtQkFBbUIsb0JBQStFLGVBQWUsTUFBTSxJQUFJLHFDQUFxQyxDQUFDLDZDQUFFLGdCQUFnQixLQUFLLFNBQVMsMkRBQUUsZ0NBQWdDLGNBQWMsZUFBZSxjQUFjLGdEQUFnRCxJQUFJLFdBQVcsU0FBUyx1Q0FBdUMsZ0NBQWdDLE9BQU8sa0VBQWlJLGVBQWUsU0FBUywrQ0FBRSxXQUFXLCtDQUFFLE9BQU8sNkNBQUUsU0FBUyw2Q0FBRSxFQUFFLDJFQUEyRSxXQUFXLGlFQUFpRSxHQUFHLElBQUksNENBQTRDLEVBQUUsZ0RBQUUsTUFBTSxzQ0FBc0MsS0FBSyx1QkFBdUIsYUFBYSw4RkFBOEYsYUFBYSwyRUFBMkUsY0FBYyxrREFBa0QsSUFBSSxnQkFBZ0Isa1NBQWtTLGNBQWMsSUFBSSw4QkFBOEIsbUNBQW1DLGdIQUFnSCxhQUFhLE1BQU0sYUFBYSxNQUFNLGFBQWEsaUdBQWlHLGFBQWEsMEZBQTBGLGNBQWMsZ0JBQWdCLGlCQUFpQiwrSUFBK0ksb0NBQW9DLFFBQVEseUJBQXlCLFFBQVEsZ0JBQWdCLGlDQUFpQyxFQUFFLHdCQUF3QixzQ0FBc0MsR0FBRyxhQUFhLElBQUksZ0JBQWdCLDRCQUE0QixxREFBcUQsdUNBQXVDLE9BQU8seUhBQXlILE9BQU8sK0JBQStCLGdGQUFnRixpQ0FBaUMsR0FBRyx5RkFBa0osa0NBQWtDLGtEQUFFLENBQUMsNENBQUUsQ0FBa0osUUFBUSxnQ0FBZ0MsR0FBRywyREFBZSxRQUFRLDhHQUE4RyxFQUFFLFFBQVEsRUFBRSxlQUFlLE9BQU8sMkRBQWUsSUFBSSxLQUFLLENBQUMsMkRBQWUsU0FBUywrZUFBK2UsR0FBRyxlQUFlLE9BQU8sMkRBQWUsSUFBSSxLQUFLLENBQUMsMkRBQWUsU0FBUyxrUEFBa1AsR0FBRyxlQUFlLE9BQU8sMkRBQWUsSUFBSSxLQUFLLENBQUMsMkRBQWUsU0FBUywrS0FBK0ssR0FBRyxlQUFlLE9BQU8sMkRBQWUsSUFBSSxLQUFLLENBQUMsMkRBQWUsU0FBUyx1VUFBdVUsR0FBRyxjQUFjLE9BQU8sMkRBQWUsUUFBUSw4QkFBOEIsRUFBRSxPQUFPLGtEQUFrRCxjQUFjLGFBQWEsa0NBQWtDLEVBQUUsY0FBYyxnQkFBZ0IsMEJBQTBCLGlCQUFpQixFQUFFLHFEQUFFLE1BQU0sbURBQUUsNENBQTRDLFdBQVcsSUFBSSwyRUFBMkUsUUFBUSxzUUFBc1EsS0FBSyxnREFBRSw2Q0FBNkMsRUFBRSxzQkFBc0IsRUFBRSxHQUFHLDJCQUEyQixFQUFFLHNDQUFzQyxZQUFZLDJDQUEyQyxFQUFFLGdEQUFFLDZCQUE2Qiw0QkFBNEIsUUFBUSw0QkFBNEIscURBQUUsTUFBTSxtREFBRSxlQUFlLDJEQUFlLElBQUksdUVBQXVFLENBQUMsMkRBQWUsUUFBUSw0RUFBNEUsdUJBQXVCLFdBQVcsMkRBQWUsUUFBUSxVQUFVLGdEQUFFLHlCQUF5QixtREFBbUQsRUFBRSx3Q0FBd0MsMkRBQWUsS0FBSyxXQUFXLFNBQVMsRUFBRSxFQUFFLEdBQUcscUhBQXFILEtBQUssa0JBQWtCLHFDQUFxQyxFQUFFLDRDQUE0QyxFQUFFLHdCQUF3QiwyRUFBMkUsUUFBUSxxUUFBcVEsZUFBZSxPQUFPLFdBQVcsbUJBQW1CLCtDQUFFLE9BQU8sNkNBQUUsUUFBUSwyQ0FBMkMsUUFBUSxrREFBa0QsR0FBRyxjQUFjLE1BQU0sZ0RBQUUsMkRBQTJELEVBQUUsR0FBRyxxQ0FBcUMsRUFBRSxlQUFlLG9DQUFvQyxFQUFFLGdEQUFFLFNBQVMsYUFBYSxvQkFBb0IsZUFBZSxNQUFNLE1BQU0sa0hBQWtILHdDQUF3QyxRQUFRLHlFQUF5RSxFQUFFLGdEQUFnRCwyQkFBMkIsNkJBQTZCLFNBQVMsa0NBQWtDLEVBQUUsZ0NBQWdDLFVBQVUsNkJBQTZCLEdBQUcsVUFBVSxnREFBRSxNQUFNLGNBQWMsTUFBTSxnQkFBZ0IsNkxBQTZMLG1EQUFtRCwyQ0FBMkMsTUFBTSwyREFBZ0IsWUFBWSxrREFBa0QscUJBQXFCLHlIQUF5SCxXQUFXLGdCQUFnQixLQUFLLEVBQUUsMkJBQTJCLE9BQU8sMkRBQWdCLFFBQVEsNkRBQTZELEVBQUUsRUFBRSxTQUFTLGtCQUFrQixHQUFHLDJEQUFnQixLQUFLLHNFQUFzRSxNQUFNLEVBQUUsTUFBTSxHQUEySTtBQUNqcGdCOzs7Ozs7VUNIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDdkI7QUFDYztBQUNBO0FBRUE7QUFDcUI7QUFFUDtBQUNWO0FBQ3lCO0FBRXZFLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBMEIsRUFBRSxFQUFFOztJQUM1QyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsMkRBQVMsQ0FBQyx1REFBWSxDQUFDLENBQUM7SUFFdEMsTUFBTSxjQUFjLEdBQUcsd0RBQVcsQ0FDaEMsQ0FBQyxLQUFjLEVBQUUsRUFBRSxXQUFDLGtCQUFLLENBQUMsT0FBTywwQ0FBRSxjQUFjLElBQ2xELENBQUM7SUFDRixNQUFNLGlCQUFpQixHQUFHLHdEQUFXLENBQ25DLENBQUMsS0FBYyxFQUFFLEVBQUUsV0FBQyxrQkFBSyxDQUFDLE9BQU8sMENBQUUsY0FBYyxJQUNsRCxDQUFDO0lBQ0YsTUFBTSxVQUFVLEdBQUcsd0RBQVcsQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFLFdBQUMsa0JBQUssQ0FBQyxPQUFPLDBDQUFFLFVBQVUsSUFBQyxDQUFDO0lBRTlFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLCtDQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsTUFBTSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHLCtDQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUQsTUFBTSxDQUFDLGlCQUFpQixFQUFFLG9CQUFvQixDQUFDLEdBQUcsK0NBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRSxNQUFNLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDLEdBQUcsK0NBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsK0NBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLCtDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLCtDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7SUFDaEYsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRywrQ0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTNDLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUN0QyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ25DLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLGlEQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDL0IsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGVBQWUsRUFBRSxLQUFLO2dCQUN0QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixLQUFLLEVBQUUsTUFBTTtnQkFDYixVQUFVLEVBQUUsa0RBQU07YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNkLGlEQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDL0IsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGVBQWUsRUFBRSxLQUFLO2dCQUN0QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixLQUFLLEVBQUUsTUFBTTtnQkFDYixVQUFVLEVBQUUsa0RBQU07YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsT0FBTztRQUNULENBQUM7UUFDRCxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG1EQUFtRDtJQUMvRSxDQUFDLENBQUM7SUFFRixNQUFNLHFCQUFxQixHQUFHLENBQU8sZUFBZSxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQy9ELElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUN6QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRCxJQUFJLENBQUM7WUFDSCxvQ0FBb0M7WUFDcEMsMENBQTBDO1lBQzFDLE1BQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFDO1lBQ3hDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLENBQUM7WUFFbkQsTUFBTSxhQUFhLEdBQUcsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdEIsTUFBTSxJQUFJLEtBQUssQ0FDYiwrQkFBK0IsYUFBYSxDQUFDLE1BQU0sSUFBSSxhQUFhLENBQUMsVUFBVSxFQUFFLENBQ2xGLENBQUM7WUFDSixDQUFDO1lBRUQsTUFBTSxXQUFXLEdBQUcsTUFBTSxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFL0MsTUFBTSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxHQUN0RSxNQUFNLHdEQUFXLENBQUM7Z0JBQ2hCLDBCQUEwQjtnQkFDMUIsY0FBYztnQkFDZCx1QkFBdUI7Z0JBQ3ZCLCtCQUErQjtnQkFDL0IsOEJBQThCO2FBQy9CLENBQUMsQ0FBQztZQUVMLElBQUksVUFBVSxDQUFDO1lBRWYsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ2pCLFVBQVUsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUIsQ0FBQztpQkFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsVUFBVSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvQixDQUFDO1lBRUQsTUFBTSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUM7Z0JBQ3BDLEtBQUssRUFBRSxVQUFVO2dCQUNqQixNQUFNLEVBQUUsRUFBRTtnQkFDVixhQUFhLEVBQUUsVUFBVTtnQkFDekIsTUFBTSxFQUFFO29CQUNOLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7b0JBQ3BELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7b0JBQ3ZELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7b0JBQ3ZELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7aUJBQzFEO2dCQUNELFFBQVEsRUFBRTtvQkFDUixJQUFJLEVBQUUsUUFBUTtpQkFDZjthQUNGLENBQUMsQ0FBQztZQUVILE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7WUFFckIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDdkMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUVwQixJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO29CQUN4QyxVQUFVLENBQUMsSUFBSSxDQUNiLElBQUksT0FBTyxDQUFDO3dCQUNWLEtBQUssRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVc7d0JBQ25DLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO3FCQUNwRCxDQUFDLENBQ0gsQ0FBQztnQkFDSixDQUFDO3FCQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssY0FBYyxFQUFFLENBQUM7b0JBQ3BELE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEVBQUU7d0JBQzFELFVBQVUsQ0FBQyxJQUFJLENBQ2IsSUFBSSxPQUFPLENBQUM7NEJBQ1YsS0FBSyxFQUFFLGtCQUFrQjs0QkFDekIsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7eUJBQ3BELENBQUMsQ0FDSCxDQUFDO29CQUNKLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUM5QixNQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztvQkFDdEUsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDOUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLE9BQVMsQ0FBQztvQkFFbkMsUUFBUSxDQUFDLElBQUksQ0FDWCxJQUFJLE9BQU8sQ0FBQzt3QkFDVixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsVUFBVSxFQUFFOzRCQUNWLFFBQVEsRUFBRSxZQUFZOzRCQUN0QixPQUFPLEVBQUUsTUFBTTs0QkFDZixPQUFPLEVBQUUsTUFBTTs0QkFDZixRQUFRLEVBQUUsT0FBTzt5QkFDbEI7cUJBQ0YsQ0FBQyxDQUNILENBQUM7b0JBQ0YsWUFBWSxFQUFFLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxZQUFZLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUUvQiwrREFBK0Q7WUFDL0QsTUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDcEQsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssbUJBQW1CLENBQy9DLENBQUM7WUFDRixJQUFJLGFBQWEsRUFBRSxDQUFDO2dCQUNsQixXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0MsQ0FBQztZQUVELFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsMENBQTBDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkUsQ0FBQztJQUNILENBQUMsRUFBQztJQUVGLE1BQU0sUUFBUSxHQUFHLEdBQVMsRUFBRTs7UUFDMUIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUM7Z0JBQ0gsSUFBSSxPQUFPLEdBQUcsdUJBQWlCLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFFBQVEsQ0FBQztnQkFFN0Msc0NBQXNDO2dCQUN0QyxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDeEIsWUFBWTtnQkFDWixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FDMUIsdUNBQXVDLE9BQU8sWUFBWSxPQUFPLFFBQVEsY0FBYyxDQUFDLEdBQUcsRUFBRSxFQUM3RjtvQkFDRSxNQUFNLEVBQUUsS0FBSztpQkFDZCxDQUNGLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtvQkFDYixrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDakIsTUFBTSxJQUFJLEtBQUssQ0FDYiwwQkFBMEIsUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFLENBQ25FLENBQUM7b0JBQ0Ysa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsTUFBTSxZQUFZLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRTNDLE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUM7Z0JBRTdDLE1BQU0scUJBQXFCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUUvQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLENBQUM7WUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO2dCQUNmLGlEQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDMUIsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFNBQVMsRUFBRSxJQUFJO29CQUNmLGVBQWUsRUFBRSxLQUFLO29CQUN0QixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLFNBQVMsRUFBRSxJQUFJO29CQUNmLFFBQVEsRUFBRSxTQUFTO29CQUNuQixLQUFLLEVBQUUsTUFBTTtvQkFDYixVQUFVLEVBQUUsa0RBQU07aUJBQ25CLENBQUMsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQyxFQUFDO0lBRUYsTUFBTSxVQUFVLEdBQUcsR0FBUyxFQUFFOztRQUM1QixvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDekIsSUFBSSxDQUFDO1lBQ0gsSUFBSSxPQUFPLEdBQUcsdUJBQWlCLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFFBQVEsQ0FBQztZQUU3QyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDN0Qsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUVELHNDQUFzQztZQUN0QyxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDbEIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBRXhCLFlBQVk7WUFDWixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FDMUIsdUNBQXVDLE9BQU8sWUFBWSxPQUFPLFFBQVEsY0FBYyxDQUFDLEdBQUcsRUFBRSxFQUM3RjtnQkFDRSxNQUFNLEVBQUUsS0FBSzthQUNkLENBQ0YsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO2dCQUNiLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxJQUFJLEtBQUssQ0FDYiwwQkFBMEIsUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFLENBQ25FLENBQUM7Z0JBQ0Ysb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUNELE1BQU0sWUFBWSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRTNDLE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUM7WUFFN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDMUIsTUFBTSxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDL0Msb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLGlEQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDM0IsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGVBQWUsRUFBRSxLQUFLO2dCQUN0QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixLQUFLLEVBQUUsTUFBTTtnQkFDYixVQUFVLEVBQUUsa0RBQU07YUFDbkIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUMsRUFBQztJQUVGLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFO1FBQzlCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQixPQUFPO1FBQ1QsQ0FBQztRQUVELE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3hELENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLFdBQVcsQ0FDekUsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNuQixPQUFPO1FBQ1QsQ0FBQztRQUNELE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFFRixNQUFNLE9BQU8sR0FBRyxDQUFPLE1BQWMsRUFBRSxFQUFFO1FBQ3ZDLElBQUksQ0FBQztZQUNILElBQUksaUJBQWlCLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNsQyxpREFBSyxDQUFDLE9BQU8sQ0FDWCw0REFBNEQsRUFDNUQ7b0JBQ0UsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFNBQVMsRUFBRSxJQUFJO29CQUNmLGVBQWUsRUFBRSxLQUFLO29CQUN0QixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLFNBQVMsRUFBRSxJQUFJO29CQUNmLFFBQVEsRUFBRSxTQUFTO29CQUNuQixLQUFLLEVBQUUsTUFBTTtvQkFDYixVQUFVLEVBQUUsa0RBQU07aUJBQ25CLENBQ0YsQ0FBQztnQkFDRixrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLE9BQU87WUFDVCxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSxXQUFXLEVBQUUsQ0FBQztvQkFDaEIsd0NBQXdDO29CQUN4QyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSx3REFBVyxDQUFDO3dCQUN2QywwQkFBMEI7cUJBQzNCLENBQUMsQ0FBQztvQkFFSCxJQUFJLGVBQWUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNwRCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxpQkFBaUIsQ0FDMUMsQ0FBQztvQkFFRixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7d0JBQ3JCLGVBQWUsR0FBRyxJQUFJLFlBQVksQ0FBQzs0QkFDakMsRUFBRSxFQUFFLGlCQUFpQjs0QkFDckIsS0FBSyxFQUFFLHNDQUFzQzs0QkFDN0MsR0FBRyxFQUFFLHFIQUFxSDs0QkFDMUgsT0FBTyxFQUFFLElBQUk7eUJBQ2QsQ0FBQyxDQUFDO3dCQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDNUMsQ0FBQzt5QkFBTSxDQUFDO3dCQUNOLGVBQWUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNqQyxDQUFDO29CQUVELElBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3BELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FDMUMsQ0FBQztvQkFDRixJQUFJLGVBQWUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNwRCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQzNDLENBQUM7b0JBRUYsSUFBSSxDQUFDLGVBQWUsSUFBSSxNQUFNLEtBQUssVUFBVSxFQUFFLENBQUM7d0JBQzlDLE1BQU0sUUFBUSxFQUFFLENBQUM7d0JBQ2pCLGVBQWUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNoRCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQzFDLENBQUM7b0JBQ0osQ0FBQztvQkFDRCxJQUFJLENBQUMsZUFBZSxJQUFJLE1BQU0sS0FBSyxZQUFZLEVBQUUsQ0FBQzt3QkFDaEQsTUFBTSxVQUFVLEVBQUUsQ0FBQzt3QkFDbkIsZUFBZSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2hELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FDM0MsQ0FBQztvQkFDSixDQUFDO29CQUVELElBQUksQ0FBQyxXQUFXLElBQUksZUFBZSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUM7d0JBQ3hELElBQUksZUFBZSxFQUFFLENBQUM7NEJBQ3BCLFlBQVksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQ3hDLENBQUM7d0JBQ0QsSUFBSSxlQUFlLEVBQUUsQ0FBQzs0QkFDcEIsWUFBWSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDeEMsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNILENBQUMsRUFBQztJQUVGLE1BQU0sWUFBWSxHQUFHLENBQU8sY0FBYyxFQUFFLE1BQWMsRUFBRSxFQUFFO1FBQzVELGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU0sd0RBQVcsQ0FBQztZQUNsRSxxQkFBcUI7WUFDckIsMkJBQTJCO1lBQzNCLCtCQUErQjtTQUNoQyxDQUFDLENBQUM7UUFFSCxrQ0FBa0M7UUFDbEMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGFBQWEsQ0FBQztZQUMxQyxFQUFFLEVBQUUsbUJBQW1CO1lBQ3ZCLEtBQUssRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDO1NBQ3hCLENBQUMsQ0FBQztRQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTVDLDJFQUEyRTtRQUMzRSxNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0MsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxrQ0FBa0M7UUFDdkQsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDNUIsS0FBSyxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFOUQsTUFBTSxPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQztnQkFDcEMsS0FBSyxFQUFFLE1BQU0sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwRSxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztZQUVILGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQixpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBRUgsMERBQTBEO1FBQzFELE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDO1lBQzVCLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtZQUN0QixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFlBQVksRUFBRSxRQUFRO1lBQ3RCLG9CQUFvQixFQUFFLENBQUMsRUFBRSxDQUFDO1lBQzFCLEtBQUssRUFBRSxHQUFHO1lBQ1YsZUFBZSxFQUFFO2dCQUNmLFdBQVcsRUFBRSxLQUFLO2dCQUNsQixjQUFjLEVBQUUsS0FBSztnQkFDckIsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLFlBQVksRUFBRSxLQUFLO2dCQUNuQixlQUFlLEVBQUUsS0FBSztnQkFDdEIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxvQkFBb0IsRUFBRTtnQkFDcEIsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLGNBQWMsRUFBRSxJQUFJO2dCQUNwQix3QkFBd0IsRUFBRSxLQUFLO2dCQUMvQixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0QsdURBQXVEO1lBQ3ZELG9CQUFvQixFQUFFLElBQUk7WUFDMUIsZUFBZSxFQUFFO2dCQUNmLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRCxTQUFTLEVBQUUsd0JBQXdCO1NBQ3BDLENBQUMsQ0FBQztRQUVILHFGQUFxRjtRQUNyRixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBRTFFLElBQUksZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLHNEQUFzRDtnQkFDdEQsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7b0JBQ2hDLDZCQUE2QjtvQkFDN0IsTUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMxRCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBb0IsRUFBRSxFQUFFO3dCQUMzQyxpQ0FBaUM7d0JBQ2pDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7OzRCQUNsQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dDQUNyQyxJQUNFLFdBQUksQ0FBQyxXQUFXLDBDQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUM7cUNBQ3ZDLFVBQUksQ0FBQyxXQUFXLDBDQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FDdkMsQ0FBQztvQ0FDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUN6QyxxQkFBcUIsRUFDckIseUJBQXlCLENBQzFCLENBQUM7Z0NBQ0osQ0FBQzs0QkFDSCxDQUFDO3dCQUNILENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUVILCtDQUErQztvQkFDL0MsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUM3QyxvRkFBb0YsQ0FDckYsQ0FBQztvQkFDRixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFOzt3QkFDcEMsSUFDRSxZQUFLLENBQUMsV0FBVywwQ0FBRSxRQUFRLENBQUMsV0FBVyxDQUFDOzZCQUN4QyxXQUFLLENBQUMsV0FBVywwQ0FBRSxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQ3hDLENBQUM7NEJBQ0QsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FDM0MscUJBQXFCLEVBQ3JCLHlCQUF5QixDQUMxQixDQUFDO3dCQUNKLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDO2dCQUVGLDBCQUEwQjtnQkFDMUIsb0JBQW9CLEVBQUUsQ0FBQztnQkFFdkIsbUJBQW1CO2dCQUNuQixNQUFNLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRTtvQkFDekMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7b0JBQ2hDLFNBQVMsRUFBRSxJQUFJO29CQUNmLE9BQU8sRUFBRSxJQUFJO29CQUNiLGFBQWEsRUFBRSxJQUFJO2lCQUNwQixDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsd0RBQXdEO1FBQ3hELCtFQUErRTtRQUUvRSxvQ0FBb0M7UUFDcEMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBTyxLQUFLLEVBQUUsRUFBRTtZQUN0QyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFLENBQUM7Z0JBQ3hELElBQ0UsS0FBSyxDQUFDLFFBQVE7b0JBQ2QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQywrQkFBK0I7a0JBQzdFLENBQUM7b0JBQ0QsTUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7b0JBRW5ELGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0lBRUYsTUFBTSxjQUFjLEdBQUcsR0FBUyxFQUFFO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNyQixpREFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ2hDLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixTQUFTLEVBQUUsSUFBSTtnQkFDZixlQUFlLEVBQUUsS0FBSztnQkFDdEIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixTQUFTLEVBQUUsSUFBSTtnQkFDZixRQUFRLEVBQUUsU0FBUztnQkFDbkIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsVUFBVSxFQUFFLGtEQUFNO2FBQ25CLENBQUMsQ0FBQztZQUNILE9BQU87UUFDVCxDQUFDO1FBRUQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsR0FBRyxNQUFNLHdEQUFXLENBQUM7Z0JBQ2xELDhCQUE4QjtnQkFDOUIsY0FBYzthQUNmLENBQUMsQ0FBQztZQUVILCtEQUErRDtZQUMvRCxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUM1QyxhQUFhLENBQ00sQ0FBQztZQUN0QixNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELE1BQU0sY0FBYyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFFekMsZ0NBQWdDO1lBQ2hDLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO2lCQUNoQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFDLGVBQUMsQ0FBQyxVQUFVLDBDQUFFLEVBQUUsTUFBSyxXQUFXLElBQUM7aUJBQy9DLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUzQywrQ0FBK0M7WUFDL0MsTUFBTSxjQUFjLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FDMUMsZUFBZSxFQUNmLGNBQWMsRUFDZCxRQUFRLENBQ1QsQ0FBQztZQUVGLGlDQUFpQztZQUNqQyxNQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsWUFBWSxDQUM1QyxjQUFjLEVBQ2QsZUFBZSxDQUNoQixDQUFDO1lBQ0YsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRTFCLHNEQUFzRDtZQUN0RCxNQUFNLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQztnQkFDaEMsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsYUFBYTtvQkFDbkIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO29CQUN2QixPQUFPLEVBQUU7d0JBQ1AsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2xCLEtBQUssRUFBRSxDQUFDO3FCQUNUO2lCQUNGO2dCQUNELFVBQVUsRUFBRTtvQkFDVixFQUFFLEVBQUUsV0FBVyxFQUFFLCtCQUErQjtpQkFDakQ7YUFDRixDQUFDLENBQUM7WUFFSCxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3BELGlEQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDNUIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGVBQWUsRUFBRSxLQUFLO2dCQUN0QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixLQUFLLEVBQUUsTUFBTTtnQkFDYixVQUFVLEVBQUUsa0RBQU07YUFDbkIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztnQkFBUyxDQUFDO1lBQ1QsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUMsRUFBQztJQUVGLE1BQU0sdUJBQXVCLEdBQUcsQ0FDOUIsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixFQUFFO1FBQ0YsSUFBSSxDQUFDLGVBQWUsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDeEQsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2pELE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxHQUN0RCxNQUFNLHdEQUFXLENBQUM7WUFDaEIsOEJBQThCO1lBQzlCLHdCQUF3QjtZQUN4QixjQUFjO1lBQ2QsMkJBQTJCO1NBQzVCLENBQUMsQ0FBQztRQUVMLGtEQUFrRDtRQUNsRCxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDZixTQUFTLEdBQUcsSUFBSSxhQUFhLENBQUM7Z0JBQzVCLEVBQUUsRUFBRSxxQkFBcUI7Z0JBQ3pCLEtBQUssRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1lBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFRCx5Q0FBeUM7UUFDekMsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFFcEQsOEVBQThFO1FBRTlFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3RDLElBQUksT0FBTyxDQUFDO1lBRVosSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLE9BQU8sR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsMENBQTBDO1lBQ3pFLENBQUM7aUJBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzNCLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9DQUFvQztZQUN4RSxDQUFDO2lCQUFNLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUUsQ0FBQztnQkFDckMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLHNDQUFzQztZQUM1RCxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sT0FBTyxDQUFDLElBQUksQ0FBQywrQ0FBK0MsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDeEUsT0FBTyxDQUFDLG9FQUFvRTtZQUM5RSxDQUFDO1lBRUQsTUFBTSxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUM7Z0JBQ2hDLEtBQUssRUFBRTtvQkFDTCxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ3ZCO2dCQUNELGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO2FBQ3BELENBQUMsQ0FBQztZQUVILE1BQU0sY0FBYyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQ2xELFlBQVksRUFDWixRQUFRLENBQ1QsQ0FBQztZQUNGLE1BQU0sa0JBQWtCLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQztZQUVqRCxNQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQztnQkFDOUIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsYUFBYTtvQkFDbkIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPO29CQUMzQixLQUFLLEVBQUUsQ0FBQztpQkFDVDtnQkFDRCxVQUFVLEVBQUU7b0JBQ1YsVUFBVSxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDM0M7Z0JBQ0QsYUFBYSxFQUFFO29CQUNiLEtBQUssRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUM7b0JBQzFCLE9BQU8sRUFDTCxhQUFhO3dCQUNiLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixtQkFBbUI7d0JBQ25CLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQzdCLEtBQUs7aUJBQ1I7YUFDRixDQUFDLENBQUM7WUFFSCxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNCLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0lBRUYsTUFBTSxtQkFBbUIsR0FBRyxHQUFTLEVBQUU7UUFDckMsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNoQixNQUFNLGNBQWMsR0FBRyxrQkFBa0IsRUFBRSxDQUFDO1lBRTVDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDcEIsaURBQUssQ0FBQyxPQUFPLENBQUMsd0NBQXdDLEVBQUU7b0JBQ3RELFFBQVEsRUFBRSxZQUFZO29CQUN0QixTQUFTLEVBQUUsSUFBSTtvQkFDZixlQUFlLEVBQUUsS0FBSztvQkFDdEIsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLFlBQVksRUFBRSxJQUFJO29CQUNsQixTQUFTLEVBQUUsSUFBSTtvQkFDZixRQUFRLEVBQUUsU0FBUztvQkFDbkIsS0FBSyxFQUFFLE1BQU07b0JBQ2IsVUFBVSxFQUFFLGtEQUFNO2lCQUNuQixDQUFDLENBQUM7Z0JBQ0gsT0FBTztZQUNULENBQUM7WUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsTUFBTSx3REFBVyxDQUFDO2dCQUN6Qyw4QkFBOEI7YUFDL0IsQ0FBQyxDQUFDO1lBRUgsTUFBTSxpQkFBaUIsR0FDckIsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFFMUQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztnQkFDeEQsT0FBTztZQUNULENBQUM7WUFFRCxNQUFNLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDM0QsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUNWLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxpQkFBaUI7Z0JBQ3hELGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQyx5QkFBeUI7YUFDekYsQ0FBQztZQUVGLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDckIsaURBQUssQ0FBQyxPQUFPLENBQUMseUNBQXlDLEVBQUU7b0JBQ3ZELFFBQVEsRUFBRSxZQUFZO29CQUN0QixTQUFTLEVBQUUsSUFBSTtvQkFDZixlQUFlLEVBQUUsS0FBSztvQkFDdEIsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLFlBQVksRUFBRSxJQUFJO29CQUNsQixTQUFTLEVBQUUsSUFBSTtvQkFDZixRQUFRLEVBQUUsU0FBUztvQkFDbkIsS0FBSyxFQUFFLE1BQU07b0JBQ2IsVUFBVSxFQUFFLGtEQUFNO2lCQUNuQixDQUFDLENBQUM7Z0JBQ0gsT0FBTztZQUNULENBQUM7WUFFRCx5REFBeUQ7WUFDekQsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDL0MsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssaUJBQWlCLENBQzFDLENBQUM7WUFFRixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2hCLGlEQUFLLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxFQUFFO29CQUNyRCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsZUFBZSxFQUFFLEtBQUs7b0JBQ3RCLFlBQVksRUFBRSxJQUFJO29CQUNsQixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLEtBQUssRUFBRSxNQUFNO29CQUNiLFVBQVUsRUFBRSxrREFBTTtpQkFDbkIsQ0FBQyxDQUFDO2dCQUNILE9BQU87WUFDVCxDQUFDO1lBRUQsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFMUIsSUFBSSxrQkFBa0IsR0FBRyxFQUFFLENBQUM7WUFFNUIsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3ZDLEtBQUssQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLENBQUMsMkJBQTJCO1lBQzVELEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxZQUFZLENBQUMsQ0FBQyw2QkFBNkI7WUFDdkUsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDNUIsS0FBSyxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFFOUQsSUFBSSxDQUFDO2dCQUNILG1EQUFtRDtnQkFDbkQsTUFBTSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRXhCLE1BQU0sT0FBTyxHQUFHLE1BQU0sVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFdEQsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO29CQUMvRCxpREFBSyxDQUFDLE9BQU8sQ0FDWCx5REFBeUQsRUFDekQ7d0JBQ0UsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFNBQVMsRUFBRSxJQUFJO3dCQUNmLGVBQWUsRUFBRSxLQUFLO3dCQUN0QixZQUFZLEVBQUUsSUFBSTt3QkFDbEIsWUFBWSxFQUFFLElBQUk7d0JBQ2xCLFNBQVMsRUFBRSxJQUFJO3dCQUNmLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixLQUFLLEVBQUUsTUFBTTt3QkFDYixVQUFVLEVBQUUsa0RBQU07cUJBQ25CLENBQ0YsQ0FBQztnQkFDSixDQUFDO3FCQUFNLENBQUM7b0JBQ04sT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTt3QkFDbkMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDNUMsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0Isa0JBQWtCLENBQUMsTUFBTSxhQUFhLENBQUMsQ0FBQztnQkFDeEUsQ0FBQztZQUNILENBQUM7WUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELGlEQUFLLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFO29CQUNqRCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsZUFBZSxFQUFFLEtBQUs7b0JBQ3RCLFlBQVksRUFBRSxJQUFJO29CQUNsQixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLEtBQUssRUFBRSxNQUFNO29CQUNiLFVBQVUsRUFBRSxrREFBTTtpQkFDbkIsQ0FBQyxDQUFDO2dCQUNILE9BQU87WUFDVCxDQUFDO1lBRUQsSUFBSSxlQUFlLElBQUksa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNyRCx1QkFBdUIsQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUMvRCxDQUFDO2lCQUFNLElBQUksa0JBQWtCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMzQyxpQ0FBaUM7WUFDbkMsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLGlEQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO29CQUNqQyxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsZUFBZSxFQUFFLEtBQUs7b0JBQ3RCLFlBQVksRUFBRSxJQUFJO29CQUNsQixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLEtBQUssRUFBRSxNQUFNO29CQUNiLFVBQVUsRUFBRSxrREFBTTtpQkFDbkIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQUM7SUFFRixvQ0FBb0M7SUFDcEMsb0VBQW9FO0lBQ3BFLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7UUFDcEMsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNoQixNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUMvQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQ2hDLENBQUM7WUFDRixJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNWLGlEQUFpRDtnQkFDakQsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLHNEQUFzRDtnQkFDdEQsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDMUIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLENBQUM7SUFDRixNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO1FBQ3BDLElBQUksV0FBVyxFQUFFLENBQUM7WUFDaEIsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDL0MsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUNoQyxDQUFDO1lBQ0YsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDVixXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLENBQUM7SUFFRixNQUFNLGVBQWUsR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFFO1FBQ3JDLElBQUksV0FBVyxFQUFFLENBQUM7WUFDaEIsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDL0MsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxDQUMxQixDQUFDO1lBQ0YsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDVixXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLENBQUM7SUFFRixnREFBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM1QixXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDN0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzlCLFdBQVcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsb0NBQW9DO1FBQ3hFLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRXBDLE9BQU8sQ0FDTCxxRUFBSyxTQUFTLEVBQUMsOEJBQThCO1FBQzFDLEtBQUssQ0FBQyxlQUFlLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQzlELDREQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQzFDLGtCQUFrQixFQUFFLHVCQUF1QixHQUMzQyxDQUNIO1FBQ0QscUVBQUssU0FBUyxFQUFDLHdCQUF3QjtZQUNyQyw0REFBQywwREFBYyxPQUFHO1lBQ2xCO2dCQUNFLDREQUFDLG9FQUFnQixJQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQ3ZCLFdBQVcsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQzdCO2dCQUNGLHFFQUFLLFNBQVMsRUFBQyxtQkFBbUI7b0JBQy9CLFVBQVUsS0FBSyxLQUFLLElBQUksQ0FDdkI7d0JBQ0UsdUVBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFLO3dCQUN6QixxRUFBSyxTQUFTLEVBQUMsbUJBQW1COzRCQUMvQixlQUFlLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUMxQiw0REFBQywyQ0FBTSxJQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVM7Z0NBQzlCLDREQUFDLDRDQUFPLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUksQ0FDeEMsQ0FDVixDQUFDLENBQUMsQ0FBQyxDQUNGLDREQUFDLDJDQUFNLElBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxJQUNsRCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQ1AsQ0FDVjs0QkFDQSxpQkFBaUIsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQzVCLDREQUFDLDJDQUFNLElBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsU0FBUztnQ0FDOUIsNERBQUMsNENBQU8sSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBSSxDQUN4QyxDQUNWLENBQUMsQ0FBQyxDQUFDLENBQ0YsNERBQUMsMkNBQU0sSUFDTCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUNwQyxJQUFJLEVBQUMsSUFBSSxFQUNULElBQUksRUFBQyxTQUFTLElBRWIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUNULENBQ1YsQ0FDRyxDQUNMLENBQ0o7b0JBQ0EsVUFBVSxLQUFLLElBQUksSUFBSSxDQUN0QixxRUFBSyxTQUFTLEVBQUMsa0JBQWtCO3dCQUMvQixxRUFBSyxFQUFFLEVBQUMsd0JBQXdCLEdBQU87d0JBQ3ZDLHFFQUFLLFNBQVMsRUFBQywwQkFBMEI7NEJBQ3ZDLHVFQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBSzs0QkFDekIscUVBQUssU0FBUyxFQUFDLHdCQUF3QjtnQ0FDckMsdUVBQ0UsRUFBRSxFQUFDLGFBQWEsRUFDaEIsSUFBSSxFQUFDLE1BQU0sRUFDWCxHQUFHLEVBQUMsR0FBRyxFQUNQLEdBQUcsRUFBQyxLQUFLLEVBQ1QsS0FBSyxFQUFFLGNBQWMsRUFDckIsUUFBUSxFQUFFLGtCQUFrQixHQUM1QjtnQ0FDRiw0RUFBUyxDQUNMOzRCQUVOLDREQUFDLDJDQUFNLElBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxTQUFTLElBQ3RELENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FDWjs0QkFDVCw0REFBQywyQ0FBTSxJQUNMLE9BQU8sRUFBRSxtQkFBbUIsRUFDNUIsSUFBSSxFQUFDLElBQUksRUFDVCxJQUFJLEVBQUMsU0FBUyxJQUViLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FDWixDQUNMLENBQ0YsQ0FDUCxDQUNHLENBQ0YsQ0FDRixDQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGlFQUFlLE1BQU0sRUFBQztBQUVkLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hBcmVhL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vZXNyaS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9tb2R1bGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vc2NyaXB0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vdXRpbHMvY3NzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy91cmwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hBcmVhL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3M/YTg0YSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9maWxsZWQvc3VnZ2VzdGVkL2hlbHAuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL2ZpbGxlZC9zdWdnZXN0ZWQvaGVscC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy9jb21wb25lbnRzL1RpdGxlV2l0aFRvb2x0aXAudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvaG9va3MvdXNlTG9jYWxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94QXJlYS9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3dpdGgtc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2Rpc3QvcmVhY3QtcmVkdXgubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtdG9hc3RpZnkvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hBcmVhL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbi5wcm94aW1pdHktd2lkZ2V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb3hpbWl0eS1tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm94aW1pdHktY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDE3MHB4O1xuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi5wcm94aW1pdHktYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MiAhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG4gIH1cbn1cblxuLnByb3hpbWl0eS1idWZmZXItaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyODJCO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA4ZWNjO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICB9XG4gIHAge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4ucHJveGltaXR5LWJ1ZmZlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICNteVNrZXRjaENvbnRhaW5lclB1bnRvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLnByb3hpbWl0eS1idWZmZXItYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MiAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiBPdmVycmlkZSBkZWwgaGlnaGxpZ2h0IGRlIHNlbGVjY2nDs24gZGVsIFNrZXRjaCAtIENvbG9yIGN5YW4gKi9cbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9fZ3JhcGhpY3MtbGF5ZXItaGlnaGxpZ2h0IHtcbiAgc3Ryb2tlOiBjeWFuICFpbXBvcnRhbnQ7XG4gIHN0cm9rZS13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XG4gIGZpbGw6IHJnYmEoMCwgMjU1LCAyNTUsIDAuMSkgIWltcG9ydGFudDtcbn1cblxuLyogRXN0aWxvcyBwYXJhIGVsIGNvbnRlbmVkb3IgZGVsIFNrZXRjaCBjdWFuZG8gaGF5IHNlbGVjY2nDs24gYWN0aXZhICovXG4uZXNyaS12aWV3IC5lc3JpLXZpZXctc3VyZmFjZS0taW5zZXQtb3V0bGluZTpmb2N1czo6YWZ0ZXIge1xuICBvdXRsaW5lLWNvbG9yOiBjeWFuICFpbXBvcnRhbnQ7XG59XG5cbi8qIE92ZXJyaWRlIGRlbCBjb2xvciBkZSBzZWxlY2Npw7NuIGRlbCBwb2zDrWdvbm8gZW4gZWwgbWFwYSAqL1xuLmVzcmktc2tldGNoX19ncmFwaGljcy1sYXllciAuZXNyaS1za2V0Y2hfX2dyYXBoaWNzLWxheWVyLS1zZWxlY3RlZCB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCBjeWFuICFpbXBvcnRhbnQ7XG59XG5cbi8qIFBlcnNvbmFsaXphY2nDs24gZGVsIHRleHRvIFwiU2VsZWNjacOzblwiICovXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX2hlYWRpbmctdGV4dDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBkZSBwb2zDrWdvbm9zXCI7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLyogTcOpdG9kbyBhbHRlcm5hdGl2byBwYXJhIHNvYnJlc2NyaWJpciBlbCBsYWJlbCBjb21wbGV0byAqL1xuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19zZWN0aW9uLWxhYmVsOmZpcnN0LW9mLXR5cGUge1xuICBmb250LXNpemU6IDA7XG59XG5cbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9fc2VjdGlvbi1sYWJlbDpmaXJzdC1vZi10eXBlOjpiZWZvcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbnRlbnQ6IFwiUG9sw61nb25vcyBzZWxlY2Npb25hZG9zOiBcIjtcbiAgY29sb3I6ICMwMEZGRkY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vLi4vLi4vLi4vZ2VvcHJvY2Vzb3MlMjBleHByaWVuY2UlMjBidWlsZGVyL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94QXJlYS9zcmMvcnVudGltZS9hc3NldHMvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wcm94QXJlYS9zcmMvcnVudGltZS9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBREVGOztBQ0FBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QURHRjs7QUNBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0VER0Y7QUFDRjs7QUNBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBRUE7SUFDRSx5QkFBQTtJQUNBLE9BQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSw2QkFBQTtJQUNBO01BQ0UseUJBQUE7TUFDQSxvQ0FBQTtNQUNBLHdDQUFBO0lERUY7RUFDRjtBQUNGOztBQ0FBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBO0lBQ0UsVUFBQTtJQUNBLGVBQUE7SUFDQSxzQkFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0E7TUFDRSxxQkFBQTtNQUNBLHdDQUFBO01BQ0EsYUFBQTtJREVGO0VBQ0Y7RUNBQTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFREVGO0FBQ0Y7O0FDQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtFREVGO0VDQ0E7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxRQUFBO0lBQ0Esb0JBQUE7SUFFQTtNQUNFLHlCQUFBO01BQ0Esb0JBQUE7TUFDQSxjQUFBO01BQ0EsbUJBQUE7TUFDQSx5QkFBQTtNQUNBLFdBQUE7TUFFQTtRQUNFLHlCQUFBO1FBQ0Esb0NBQUE7UUFDQSx3Q0FBQTtNRERGO0lBQ0Y7RUFDRjtBQUNGOztBQ0lBLGdFQUFBO0FBQ0E7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7QURERjs7QUNJQSxzRUFBQTtBQUNBO0VBQ0UsOEJBQUE7QURERjs7QUNJQSw0REFBQTtBQUNBO0VBQ0Usa0NBQUE7QURERjs7QUNJQSwwQ0FBQTtBQUNBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtBRERGOztBQ0lBLDJEQUFBO0FBQ0E7RUFDRSxZQUFBO0FEREY7O0FDSUE7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QURERlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi5wcm94aW1pdHktd2lkZ2V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb3hpbWl0eS1tYWluLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnByb3hpbWl0eS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTcwcHg7XFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxufVxcblxcbi5wcm94aW1pdHktYnV0dG9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDIgIWltcG9ydGFudDtcXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5wcm94aW1pdHktYnVmZmVyLWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaW5wdXQge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzI4MkI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgJjpmb2N1cyB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA4ZWNjO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbiAgcCB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxufVxcblxcbi5wcm94aW1pdHktYnVmZmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAjbXlTa2V0Y2hDb250YWluZXJQdW50byB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWluLXdpZHRoOiAxODBweDtcXG4gICAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuICAucHJveGltaXR5LWJ1ZmZlci1hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBidXR0b24ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XFxuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDIgIWltcG9ydGFudDtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8qIE92ZXJyaWRlIGRlbCBoaWdobGlnaHQgZGUgc2VsZWNjacOzbiBkZWwgU2tldGNoIC0gQ29sb3IgY3lhbiAqL1xcbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9fZ3JhcGhpY3MtbGF5ZXItaGlnaGxpZ2h0IHtcXG4gIHN0cm9rZTogY3lhbiAhaW1wb3J0YW50O1xcbiAgc3Ryb2tlLXdpZHRoOiAzcHggIWltcG9ydGFudDtcXG4gIGZpbGw6IHJnYmEoMCwgMjU1LCAyNTUsIDAuMSkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogRXN0aWxvcyBwYXJhIGVsIGNvbnRlbmVkb3IgZGVsIFNrZXRjaCBjdWFuZG8gaGF5IHNlbGVjY2nDs24gYWN0aXZhICovXFxuLmVzcmktdmlldyAuZXNyaS12aWV3LXN1cmZhY2UtLWluc2V0LW91dGxpbmU6Zm9jdXM6OmFmdGVyIHtcXG4gIG91dGxpbmUtY29sb3I6IGN5YW4gIWltcG9ydGFudDtcXG59XFxuXFxuLyogT3ZlcnJpZGUgZGVsIGNvbG9yIGRlIHNlbGVjY2nDs24gZGVsIHBvbMOtZ29ubyBlbiBlbCBtYXBhICovXFxuLmVzcmktc2tldGNoX19ncmFwaGljcy1sYXllciAuZXNyaS1za2V0Y2hfX2dyYXBoaWNzLWxheWVyLS1zZWxlY3RlZCB7XFxuICBvdXRsaW5lOiAzcHggc29saWQgY3lhbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBQZXJzb25hbGl6YWNpw7NuIGRlbCB0ZXh0byBcXFwiU2VsZWNjacOzblxcXCIgKi9cXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX2hlYWRpbmctdGV4dDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBkZSBwb2zDrWdvbm9zXFxcIjtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLyogTcOpdG9kbyBhbHRlcm5hdGl2byBwYXJhIHNvYnJlc2NyaWJpciBlbCBsYWJlbCBjb21wbGV0byAqL1xcbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9fc2VjdGlvbi1sYWJlbDpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtc2l6ZTogMDtcXG59XFxuXFxuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19zZWN0aW9uLWxhYmVsOmZpcnN0LW9mLXR5cGU6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb250ZW50OiBcXFwiUG9sw61nb25vcyBzZWxlY2Npb25hZG9zOiBcXFwiO1xcbiAgY29sb3I6ICMwMEZGRkY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XCIsXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi5wcm94aW1pdHktd2lkZ2V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb3hpbWl0eS1tYWluLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnByb3hpbWl0eS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTcwcHg7XFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxufVxcblxcbi5wcm94aW1pdHktYnV0dG9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDIgIWltcG9ydGFudDtcXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5wcm94aW1pdHktYnVmZmVyLWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaW5wdXQge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzI4MkI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgJjpmb2N1cyB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA4ZWNjO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbiAgcCB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxufVxcblxcbi5wcm94aW1pdHktYnVmZmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAjbXlTa2V0Y2hDb250YWluZXJQdW50byB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWluLXdpZHRoOiAxODBweDtcXG4gICAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuICAucHJveGltaXR5LWJ1ZmZlci1hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBidXR0b24ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XFxuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDIgIWltcG9ydGFudDtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8qIE92ZXJyaWRlIGRlbCBoaWdobGlnaHQgZGUgc2VsZWNjacOzbiBkZWwgU2tldGNoIC0gQ29sb3IgY3lhbiAqL1xcbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9fZ3JhcGhpY3MtbGF5ZXItaGlnaGxpZ2h0IHtcXG4gIHN0cm9rZTogY3lhbiAhaW1wb3J0YW50O1xcbiAgc3Ryb2tlLXdpZHRoOiAzcHggIWltcG9ydGFudDtcXG4gIGZpbGw6IHJnYmEoMCwgMjU1LCAyNTUsIDAuMSkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogRXN0aWxvcyBwYXJhIGVsIGNvbnRlbmVkb3IgZGVsIFNrZXRjaCBjdWFuZG8gaGF5IHNlbGVjY2nDs24gYWN0aXZhICovXFxuLmVzcmktdmlldyAuZXNyaS12aWV3LXN1cmZhY2UtLWluc2V0LW91dGxpbmU6Zm9jdXM6OmFmdGVyIHtcXG4gIG91dGxpbmUtY29sb3I6IGN5YW4gIWltcG9ydGFudDtcXG59XFxuXFxuLyogT3ZlcnJpZGUgZGVsIGNvbG9yIGRlIHNlbGVjY2nDs24gZGVsIHBvbMOtZ29ubyBlbiBlbCBtYXBhICovXFxuLmVzcmktc2tldGNoX19ncmFwaGljcy1sYXllciAuZXNyaS1za2V0Y2hfX2dyYXBoaWNzLWxheWVyLS1zZWxlY3RlZCB7XFxuICBvdXRsaW5lOiAzcHggc29saWQgY3lhbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBQZXJzb25hbGl6YWNpw7NuIGRlbCB0ZXh0byBcXFwiU2VsZWNjacOzblxcXCIgKi9cXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX2hlYWRpbmctdGV4dDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBkZSBwb2zDrWdvbm9zXFxcIjtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLyogTcOpdG9kbyBhbHRlcm5hdGl2byBwYXJhIHNvYnJlc2NyaWJpciBlbCBsYWJlbCBjb21wbGV0byAqL1xcbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9fc2VjdGlvbi1sYWJlbDpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtc2l6ZTogMDtcXG59XFxuXFxuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19zZWN0aW9uLWxhYmVsOmZpcnN0LW9mLXR5cGU6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb250ZW50OiBcXFwiUG9sw61nb25vcyBzZWxlY2Npb25hZG9zOiBcXFwiO1xcbiAgY29sb3I6ICMwMEZGRkY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKlxuICBDb3B5cmlnaHQgKGMpIDIwMjIgRXNyaVxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLy8gcmUtZXhwb3J0IHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgcGFydCBvZiB0aGUgcHVibGljIEFQSVxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuZXhwb3J0IHsgbG9hZE1vZHVsZXMgfSBmcm9tICcuL21vZHVsZXMnO1xuZXhwb3J0IHsgZ2V0U2NyaXB0LCBpc0xvYWRlZCwgbG9hZFNjcmlwdCwgc2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL3NjcmlwdCc7XG5leHBvcnQgeyBsb2FkQ3NzIH0gZnJvbSAnLi91dGlscy9jc3MnO1xuZXhwb3J0IHsgdXRpbHMgfTtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBnZXRTY3JpcHQsIGlzTG9hZGVkLCBsb2FkU2NyaXB0IH0gZnJvbSAnLi9zY3JpcHQnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuLy8gd3JhcCBEb2pvJ3MgcmVxdWlyZSgpIGluIGEgcHJvbWlzZVxuZnVuY3Rpb24gcmVxdWlyZU1vZHVsZXMobW9kdWxlcykge1xuICAgIHJldHVybiBuZXcgdXRpbHMuUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIGxvYWRpbmcgdGhlIGVzcmkvZG9qbyBzY3JpcHRzLCByZWplY3Qgd2l0aCB0aGUgZXJyb3IuXG4gICAgICAgIHZhciBlcnJvckhhbmRsZXIgPSB3aW5kb3dbJ3JlcXVpcmUnXS5vbignZXJyb3InLCByZWplY3QpO1xuICAgICAgICB3aW5kb3dbJ3JlcXVpcmUnXShtb2R1bGVzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZW1vdmUgZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgZXJyb3JIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgLy8gUmVzb2x2ZSB3aXRoIHRoZSBwYXJhbWV0ZXJzIGZyb20gZG9qbyByZXF1aXJlIGFzIGFuIGFycmF5LlxuICAgICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYXJyYXkgb2YgdGhlIHJlcXVpcmVkIG1vZHVsZXNcbi8vIGFsc28gd2lsbCBhdHRlbXB0IHRvIGxhenkgbG9hZCB0aGUgQXJjR0lTIEFQSSBpZiBpdCBoYXMgbm90IGFscmVhZHkgYmVlbiBsb2FkZWRcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTW9kdWxlcyhtb2R1bGVzLCBsb2FkU2NyaXB0T3B0aW9ucykge1xuICAgIGlmIChsb2FkU2NyaXB0T3B0aW9ucyA9PT0gdm9pZCAwKSB7IGxvYWRTY3JpcHRPcHRpb25zID0ge307IH1cbiAgICBpZiAoIWlzTG9hZGVkKCkpIHtcbiAgICAgICAgLy8gc2NyaXB0IGlzIG5vdCB5ZXQgbG9hZGVkLCBpcyBpdCBpbiB0aGUgcHJvY2VzcyBvZiBsb2FkaW5nP1xuICAgICAgICB2YXIgc2NyaXB0ID0gZ2V0U2NyaXB0KCk7XG4gICAgICAgIHZhciBzcmMgPSBzY3JpcHQgJiYgc2NyaXB0LmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGlmICghbG9hZFNjcmlwdE9wdGlvbnMudXJsICYmIHNyYykge1xuICAgICAgICAgICAgLy8gc2NyaXB0IGlzIHN0aWxsIGxvYWRpbmcgYW5kIHVzZXIgZGlkIG5vdCBzcGVjaWZ5IGEgVVJMXG4gICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBkZWZhdWx0IHRvIHRoZSBVUkwgdGhhdCdzIGJlaW5nIGxvYWRlZFxuICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBkZWZhdWx0aW5nIHRvIHRoZSBsYXRlc3QgNC54IFVSTFxuICAgICAgICAgICAgbG9hZFNjcmlwdE9wdGlvbnMudXJsID0gc3JjO1xuICAgICAgICB9XG4gICAgICAgIC8vIGF0dGVtcHQgdG8gbG9hZCB0aGUgc2NyaXB0IHRoZW4gbG9hZCB0aGUgbW9kdWxlc1xuICAgICAgICByZXR1cm4gbG9hZFNjcmlwdChsb2FkU2NyaXB0T3B0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKTsgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBzY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQsIGp1c3QgbG9hZCB0aGUgbW9kdWxlc1xuICAgICAgICByZXR1cm4gcmVxdWlyZU1vZHVsZXMobW9kdWxlcyk7XG4gICAgfVxufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGxvYWRDc3MgfSBmcm9tICcuL3V0aWxzL2Nzcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBnZXRDZG5VcmwgfSBmcm9tICcuL3V0aWxzL3VybCc7XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmZ1bmN0aW9uIGNyZWF0ZVNjcmlwdCh1cmwpIHtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBzY3JpcHQuc3JjID0gdXJsO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXNyaS1sb2FkZXInLCAnbG9hZGluZycpO1xuICAgIHJldHVybiBzY3JpcHQ7XG59XG4vLyBhZGQgYSBvbmUtdGltZSBsb2FkIGhhbmRsZXIgdG8gc2NyaXB0XG4vLyBhbmQgb3B0aW9uYWxseSBhZGQgYSBvbmUgdGltZSBlcnJvciBoYW5kbGVyIGFzIHdlbGxcbmZ1bmN0aW9uIGhhbmRsZVNjcmlwdExvYWQoc2NyaXB0LCBjYWxsYmFjaywgZXJyYmFjaykge1xuICAgIHZhciBvblNjcmlwdEVycm9yO1xuICAgIGlmIChlcnJiYWNrKSB7XG4gICAgICAgIC8vIHNldCB1cCBhbiBlcnJvciBoYW5kbGVyIGFzIHdlbGxcbiAgICAgICAgb25TY3JpcHRFcnJvciA9IGhhbmRsZVNjcmlwdEVycm9yKHNjcmlwdCwgZXJyYmFjayk7XG4gICAgfVxuICAgIHZhciBvblNjcmlwdExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHBhc3MgdGhlIHNjcmlwdCB0byB0aGUgY2FsbGJhY2tcbiAgICAgICAgY2FsbGJhY2soc2NyaXB0KTtcbiAgICAgICAgLy8gcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvblNjcmlwdExvYWQsIGZhbHNlKTtcbiAgICAgICAgaWYgKG9uU2NyaXB0RXJyb3IpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZXJyb3IgbGlzdGVuZXIgYXMgd2VsbFxuICAgICAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25TY3JpcHRFcnJvciwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uU2NyaXB0TG9hZCwgZmFsc2UpO1xufVxuLy8gYWRkIGEgb25lLXRpbWUgZXJyb3IgaGFuZGxlciB0byB0aGUgc2NyaXB0XG5mdW5jdGlvbiBoYW5kbGVTY3JpcHRFcnJvcihzY3JpcHQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG9uU2NyaXB0RXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyByZWplY3QgdGhlIHByb21pc2UgYW5kIHJlbW92ZSB0aGlzIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGNhbGxiYWNrKGUuZXJyb3IgfHwgbmV3IEVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIGF0dGVtcHRpbmcgdG8gbG9hZCBcIi5jb25jYXQoc2NyaXB0LnNyYykpKTtcbiAgICAgICAgLy8gcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25TY3JpcHRFcnJvciwgZmFsc2UpO1xuICAgIH07XG4gICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25TY3JpcHRFcnJvciwgZmFsc2UpO1xuICAgIHJldHVybiBvblNjcmlwdEVycm9yO1xufVxuLy8gYWxsb3cgdGhlIHVzZXIgdG8gY29uZmlndXJlIGRlZmF1bHQgc2NyaXB0IG9wdGlvbnMgcmF0aGVyIHRoYW4gcGFzc2luZyBvcHRpb25zIHRvIGBsb2FkTW9kdWxlc2AgZWFjaCB0aW1lXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgZGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zO1xufVxuLy8gZ2V0IHRoZSBzY3JpcHQgaW5qZWN0ZWQgYnkgdGhpcyBsaWJyYXJ5XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyaXB0KCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1lc3JpLWxvYWRlcl0nKTtcbn1cbi8vIGhhcyBBcmNHSVMgQVBJIGJlZW4gbG9hZGVkIG9uIHRoZSBwYWdlIHlldD9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvYWRlZCgpIHtcbiAgICB2YXIgZ2xvYmFsUmVxdWlyZSA9IHdpbmRvd1sncmVxdWlyZSddO1xuICAgIC8vIC5vbigpIGVuc3VyZXMgdGhhdCBpdCdzIERvam8ncyBBTUQgbG9hZGVyXG4gICAgcmV0dXJuIGdsb2JhbFJlcXVpcmUgJiYgZ2xvYmFsUmVxdWlyZS5vbjtcbn1cbi8vIGxvYWQgdGhlIEFyY0dJUyBBUEkgb24gdGhlIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBsb2FkU2NyaXB0KG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIC8vIHdlIHdvdWxkIGhhdmUgbGlrZWQgdG8gdXNlIHNwcmVhZCBsaWtlIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfVxuICAgIC8vIGJ1dCBUUyB3b3VsZCBpbmplY3QgYSBwb2x5ZmlsbCB0aGF0IHdvdWxkIHJlcXVpcmUgdXNlIHRvIGNvbmZpZ3VyZSByb2xsdXAgdyBjb250ZW50OiAnd2luZG93J1xuICAgIC8vIGlmIHdlIGhhdmUgYW5vdGhlciBvY2Nhc2lvbiB0byB1c2Ugc3ByZWFkLCBsZXQncyBkbyB0aGF0IGFuZCByZXBsYWNlIHRoaXMgZm9yLi4uaW5cbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIFtkZWZhdWx0T3B0aW9ucywgb3B0aW9uc10uZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICBvcHRzW3Byb3BdID0gb2JqW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gVVJMIHRvIGxvYWRcbiAgICB2YXIgdmVyc2lvbiA9IG9wdHMudmVyc2lvbjtcbiAgICB2YXIgdXJsID0gb3B0cy51cmwgfHwgZ2V0Q2RuVXJsKHZlcnNpb24pO1xuICAgIHJldHVybiBuZXcgdXRpbHMuUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBzY3JpcHQgPSBnZXRTY3JpcHQoKTtcbiAgICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICAgICAgLy8gdGhlIEFQSSBpcyBhbHJlYWR5IGxvYWRlZCBvciBpbiB0aGUgcHJvY2VzcyBvZiBsb2FkaW5nLi4uXG4gICAgICAgICAgICAvLyBOT1RFOiBoYXZlIHRvIHRlc3QgYWdhaW5zdCBzY3IgYXR0cmlidXRlIHZhbHVlLCBub3Qgc2NyaXB0LnNyY1xuICAgICAgICAgICAgLy8gYi9jIHRoZSBsYXR0ZXIgd2lsbCByZXR1cm4gdGhlIGZ1bGwgdXJsIGZvciByZWxhdGl2ZSBwYXRoc1xuICAgICAgICAgICAgdmFyIHNyYyA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICAgICAgaWYgKHNyYyAhPT0gdXJsKSB7XG4gICAgICAgICAgICAgICAgLy8gcG90ZW50aWFsbHkgdHJ5aW5nIHRvIGxvYWQgYSBkaWZmZXJlbnQgdmVyc2lvbiBvZiB0aGUgQVBJXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0IGlzIGFscmVhZHkgbG9hZGVkIChcIi5jb25jYXQoc3JjLCBcIikuXCIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc2NyaXB0IGhhcyBhbHJlYWR5IHN1Y2Nlc3NmdWxseSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzY3JpcHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgdGhlIHNjcmlwdCB0byBsb2FkIGFuZCB0aGVuIHJlc29sdmVcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgQVBJIGhhcyBiZWVuIGxvYWRlZCBieSBzb21lIG90aGVyIG1lYW5zXG4gICAgICAgICAgICAgICAgLy8gcG90ZW50aWFsbHkgdHJ5aW5nIHRvIGxvYWQgYSBkaWZmZXJlbnQgdmVyc2lvbiBvZiB0aGUgQVBJXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0IGlzIGFscmVhZHkgbG9hZGVkLlwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIGF0dGVtcHRpbmcgdG8gbG9hZCB0aGUgQVBJXG4gICAgICAgICAgICAgICAgdmFyIGNzcyA9IG9wdHMuY3NzO1xuICAgICAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZVZlcnNpb24gPSBjc3MgPT09IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxvYWQgdGhlIGNzcyBiZWZvcmUgbG9hZGluZyB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIGxvYWRDc3ModXNlVmVyc2lvbiA/IHZlcnNpb24gOiBjc3MsIG9wdHMuaW5zZXJ0Q3NzQmVmb3JlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgc2NyaXB0IG9iamVjdCB3aG9zZSBzb3VyY2UgcG9pbnRzIHRvIHRoZSBBUElcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBjcmVhdGVTY3JpcHQodXJsKTtcbiAgICAgICAgICAgICAgICAvLyBfY3VycmVudFVybCA9IHVybDtcbiAgICAgICAgICAgICAgICAvLyBvbmNlIHRoZSBzY3JpcHQgaXMgbG9hZGVkLi4uXG4gICAgICAgICAgICAgICAgaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBzdGF0dXMgb2YgdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLWVzcmktbG9hZGVyJywgJ2xvYWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAvLyBsb2FkIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBnZXRDZG5Dc3NVcmwsIHBhcnNlVmVyc2lvbiB9IGZyb20gJy4vdXJsJztcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlc2hlZXRMaW5rKGhyZWYpIHtcbiAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgIHJldHVybiBsaW5rO1xufVxuZnVuY3Rpb24gaW5zZXJ0TGluayhsaW5rLCBiZWZvcmUpIHtcbiAgICBpZiAoYmVmb3JlKSB7XG4gICAgICAgIC8vIHRoZSBsaW5rIHNob3VsZCBiZSBpbnNlcnRlZCBiZWZvcmUgYSBzcGVjaWZpYyBub2RlXG4gICAgICAgIHZhciBiZWZvcmVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihiZWZvcmUpO1xuICAgICAgICBiZWZvcmVOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGJlZm9yZU5vZGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gYXBwZW5kIHRoZSBsaW5rIHRvIHRoZW4gZW5kIG9mIHRoZSBoZWFkIHRhZ1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH1cbn1cbi8vIGNoZWNrIGlmIHRoZSBjc3MgdXJsIGhhcyBiZWVuIGluamVjdGVkIG9yIGFkZGVkIG1hbnVhbGx5XG5mdW5jdGlvbiBnZXRDc3ModXJsKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW2hyZWYqPVxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJdXCIpKTtcbn1cbmZ1bmN0aW9uIGdldENzc1VybCh1cmxPclZlcnNpb24pIHtcbiAgICByZXR1cm4gIXVybE9yVmVyc2lvbiB8fCBwYXJzZVZlcnNpb24odXJsT3JWZXJzaW9uKVxuICAgICAgICAvLyBpZiBpdCdzIGEgdmFsaWQgdmVyc2lvbiBzdHJpbmcgcmV0dXJuIHRoZSBDRE4gVVJMXG4gICAgICAgID8gZ2V0Q2RuQ3NzVXJsKHVybE9yVmVyc2lvbilcbiAgICAgICAgLy8gb3RoZXJ3aXNlIGFzc3VtZSBpdCdzIGEgVVJMIGFuZCByZXR1cm4gdGhhdFxuICAgICAgICA6IHVybE9yVmVyc2lvbjtcbn1cbi8vIGxhenkgbG9hZCB0aGUgQ1NTIG5lZWRlZCBmb3IgdGhlIEFyY0dJUyBBUElcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ3NzKHVybE9yVmVyc2lvbiwgYmVmb3JlKSB7XG4gICAgdmFyIHVybCA9IGdldENzc1VybCh1cmxPclZlcnNpb24pO1xuICAgIHZhciBsaW5rID0gZ2V0Q3NzKHVybCk7XG4gICAgaWYgKCFsaW5rKSB7XG4gICAgICAgIC8vIGNyZWF0ZSAmIGxvYWQgdGhlIGNzcyBsaW5rXG4gICAgICAgIGxpbmsgPSBjcmVhdGVTdHlsZXNoZWV0TGluayh1cmwpO1xuICAgICAgICBpbnNlcnRMaW5rKGxpbmssIGJlZm9yZSk7XG4gICAgfVxuICAgIHJldHVybiBsaW5rO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbi8vIGFsbG93IGNvbnN1bWluZyBsaWJyYXJpZXMgdG8gcHJvdmlkZSB0aGVpciBvd24gUHJvbWlzZSBpbXBsZW1lbnRhdGlvbnNcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBQcm9taXNlOiBpc0Jyb3dzZXIgPyB3aW5kb3dbJ1Byb21pc2UnXSA6IHVuZGVmaW5lZFxufTtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG52YXIgREVGQVVMVF9WRVJTSU9OID0gJzQuMjUnO1xudmFyIE5FWFQgPSAnbmV4dCc7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWZXJzaW9uKHZlcnNpb24pIHtcbiAgICBpZiAodmVyc2lvbi50b0xvd2VyQ2FzZSgpID09PSBORVhUKSB7XG4gICAgICAgIHJldHVybiBORVhUO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSB2ZXJzaW9uICYmIHZlcnNpb24ubWF0Y2goL14oXFxkKVxcLihcXGQrKS8pO1xuICAgIHJldHVybiBtYXRjaCAmJiB7XG4gICAgICAgIG1ham9yOiBwYXJzZUludChtYXRjaFsxXSwgMTApLFxuICAgICAgICBtaW5vcjogcGFyc2VJbnQobWF0Y2hbMl0sIDEwKVxuICAgIH07XG59XG4vKipcbiAqIEdldCB0aGUgQ0ROIHVybCBmb3IgYSBnaXZlbiB2ZXJzaW9uXG4gKlxuICogQHBhcmFtIHZlcnNpb24gRXg6ICc0LjI1JyBvciAnMy40MicuIERlZmF1bHRzIHRvIHRoZSBsYXRlc3QgNC54IHZlcnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5VcmwodmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uID09PSB2b2lkIDApIHsgdmVyc2lvbiA9IERFRkFVTFRfVkVSU0lPTjsgfVxuICAgIHJldHVybiBcImh0dHBzOi8vanMuYXJjZ2lzLmNvbS9cIi5jb25jYXQodmVyc2lvbiwgXCIvXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIENETiB1cmwgZm9yIGEgdGhlIENTUyBmb3IgYSBnaXZlbiB2ZXJzaW9uIGFuZC9vciB0aGVtZVxuICpcbiAqIEBwYXJhbSB2ZXJzaW9uIEV4OiAnNC4yNScsICczLjQyJywgb3IgJ25leHQnLiBEZWZhdWx0cyB0byB0aGUgbGF0ZXN0IDQueCB2ZXJzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2RuQ3NzVXJsKHZlcnNpb24pIHtcbiAgICBpZiAodmVyc2lvbiA9PT0gdm9pZCAwKSB7IHZlcnNpb24gPSBERUZBVUxUX1ZFUlNJT047IH1cbiAgICB2YXIgYmFzZVVybCA9IGdldENkblVybCh2ZXJzaW9uKTtcbiAgICB2YXIgcGFyc2VkVmVyc2lvbiA9IHBhcnNlVmVyc2lvbih2ZXJzaW9uKTtcbiAgICBpZiAocGFyc2VkVmVyc2lvbiAhPT0gTkVYVCAmJiBwYXJzZWRWZXJzaW9uLm1ham9yID09PSAzKSB7XG4gICAgICAgIC8vIE5PVEU6IGF0IDMuMTEgdGhlIENTUyBtb3ZlZCBmcm9tIHRoZSAvanMgZm9sZGVyIHRvIHRoZSByb290XG4gICAgICAgIHZhciBwYXRoID0gcGFyc2VkVmVyc2lvbi5taW5vciA8PSAxMCA/ICdqcy8nIDogJyc7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChiYXNlVXJsKS5jb25jYXQocGF0aCwgXCJlc3JpL2Nzcy9lc3JpLmNzc1wiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGFzc3VtZSA0LnhcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiZXNyaS90aGVtZXMvbGlnaHQvbWFpbi5jc3NcIik7XG4gICAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTEgOGMwLTMuODUgMy4xNS03IDctN3M3IDMuMTUgNyA3LTMuMTUgNy03IDctNy0zLjE1LTctN203Ljg3NSA0LjM3NWEuODc1Ljg3NSAwIDEgMS0xLjc1IDAgLjg3NS44NzUgMCAwIDEgMS43NSAwbS0uMDYzLTIuNjU2Yy4xMzItLjU3MS40MTUtLjkxNi44NDgtMS4yOTlzLjcwMS0uNzA5LjcwMS0uNzA5Yy4zOS0uNDcyLjcwMS0xLjEwMi43MDEtMS44MTEgMC0xLjczMi0xLjQwMi0zLjE1LTMuMTE3LTMuMTUtMS4zNTcgMC0yLjUyLjkyOC0yLjk0NiAyLjE1Ny0uMDYuMTUyLS4wNi4yOTktLjA2LjI5OWEuNjUuNjUgMCAwIDAgLjY2OC42OTRsLjEtLjAwNmMuNC0uMDQ2LjY3OS0uMjc1LjgyOS0uNjUuMDc4LS4xNjQuMTA4LS4yMDguMTIyLS4yMjkuMjgxLS40MTYuNzU0LS42OSAxLjI4Ny0uNjkuODU4IDAgMS41NTkuNzA5IDEuNTU5IDEuNTc1IDAgLjQ3Mi0uMTU2Ljg2Ni0uNDY4IDEuMTAzbC0uOTM1IDEuMDIzYy0uNTA1LjQ0Ny0uODA2IDEuMDQ5LS45MDEgMS43MjJsLS4wMDUuMDY0di4xMTdhLjc1Ljc1IDAgMCAwIC43NS42OTZsLjA5Mi0uMDA1Yy4zOTMtLjA0My43MTQtLjM1OC43NDMtLjc0elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHR5cGUgeyBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL2ZpbGxlZC9zdWdnZXN0ZWQvaGVscC5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgSGVscEZpbGxlZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcImppbXUtdWlcIjtcclxuaW1wb3J0IHsgSGVscEZpbGxlZCB9IGZyb20gXCJqaW11LWljb25zL2ZpbGxlZC9zdWdnZXN0ZWQvaGVscFwiO1xyXG5cclxuaW50ZXJmYWNlIEhlbHBUb29sdGlwUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBnYXA6IFwiNXB4XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzdGFydFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJzdGFydFwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjdweFwiLFxyXG4gIH0sXHJcbiAgdG9vbHRpcDoge1xyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICB9LFxyXG59O1xyXG5jb25zdCBUaXRsZVdpdGhUb29sdGlwOiBSZWFjdC5GQzxIZWxwVG9vbHRpcFByb3BzPiA9ICh7XHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19Pnt0aXRsZX08L2g0PlxyXG4gICAgICA8VG9vbHRpcFxyXG4gICAgICAgIHBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgcm9sZT1cInRvb2x0aXBcIlxyXG4gICAgICAgIGVudGVyRGVsYXk9ezEwMH1cclxuICAgICAgICBlbnRlck5leHREZWxheT17MH1cclxuICAgICAgICBlbnRlclRvdWNoRGVsYXk9ezcwMH1cclxuICAgICAgICBsZWF2ZURlbGF5PXswfVxyXG4gICAgICAgIGxlYXZlVG91Y2hEZWxheT17MTUwMH1cclxuICAgICAgICBvZmZzZXRPcHRpb25zPXs0fVxyXG4gICAgICAgIHRpdGxlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy50b29sdGlwfT5cclxuICAgICAgICAgIDxIZWxwRmlsbGVkIHNpemU9ezE1fSBjb2xvcj1cIiM4MDgwODBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1Rvb2x0aXA+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGVXaXRoVG9vbHRpcDtcclxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsZSh0cmFuc2xhdGlvbnMpIHtcclxuICAvLyBEZXRlY3RhIGxvY2FsZSBkZXNkZSBsYSBVUkwgKD9sb2NhbGU9ZW4pIG8gZmFsbGJhY2sgYSBcImVzXCJcclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gIGNvbnN0IGxvY2FsZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJsb2NhbGVcIikgfHwgXCJlc1wiO1xyXG5cclxuICBjb25zdCB0ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gKGtleToga2V5b2YgdHlwZW9mIHRyYW5zbGF0aW9uc1tcImVzXCJdKSA9PlxyXG4gICAgICB0cmFuc2xhdGlvbnNbbG9jYWxlIGFzIFwiZXNcIiB8IFwiZW5cIl1ba2V5XSA/PyBrZXk7XHJcbiAgfSwgW2xvY2FsZV0pO1xyXG5cclxuICByZXR1cm4geyB0LCBsb2NhbGUgfTtcclxufSIsImV4cG9ydCBjb25zdCB0cmFuc2xhdGlvbnMgPSB7XHJcbiAgICBlczoge1xyXG4gICAgICB3aWRnZXRMYWJlbDogXCJQcm94aW1pZGFkIGRlIMOhcmVhcyBkZSBSaWVzZ29cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRXN0ZSB3aWRnZXQgcGVybWl0ZSBhIHBhcnRpciBkZSBsYSBkZXRlY2Npw7NuIGRlIMOhcmVhcyBxdWVtYWRhcyBlIGludW5kYWRhcywgZ2VuZXJhciBsw61uZWFzIGRlIHByb3hpbWlkYWQgYSBsw61taXRlcyB1cmJhbm9zIG3DoXMgY2VyY2Fub3MuXCIsXHJcbiAgICAgIGluY2VuZGlvOiBcIkluY2VuZGlvc1wiLFxyXG4gICAgICBpbnVuZGFjaW9uOiBcIkludW5kYWNpb25lc1wiLFxyXG4gICAgICBidWZmZXJMYWJlbDogXCJLbXMgw6FyZWEgZGUgaW5mbHVlbmNpYVwiLFxyXG4gICAgICBnZW5lcmFyQnVmZmVyOiBcIkdlbmVyYXIgw6FyZWEgZGUgaW5mbHVlbmNpYVwiLFxyXG4gICAgICBkaWJ1amFyTGluZWFzOiBcIkRpYnVqYXIgbMOtbmVhcyBkZSBwcm94aW1pZGFkXCIsXHJcbiAgICAgIGVycm9ySW1hZ2VuOiBcIkRlYmUgc2VsZWNjaW9uYXIgdW5hIGltYWdlbiBhbnRlcyBkZSBlamVjdXRhciBlc3RlIHByb2Nlc29cIixcclxuICAgICAgZXJyb3JCdWZmZXI6IFwiRGViZSBzZWxlY2Npb25hciBtw61uaW1vIHVuIHBvbMOtZ29uby5cIixcclxuICAgICAgbWluS21XYXJuaW5nOiBcIkVsIHZhbG9yIGRlYmUgc2VyIG1lbm9yIG8gaWd1YWwgMTAwIGttLlwiLFxyXG4gICAgICBtYXhLbVdhcm5pbmc6IFwiRWwgdmFsb3IgZGViZSBzZXIgbWF5b3IgbyBpZ3VhbCAxIGttLlwiLFxyXG4gICAgICBmaXJlTGF5ZXI6IFwiWm9uYXMgcXVlbWFkYXNcIixcclxuICAgICAgZmxvb2RMYXllcjogXCJab25hcyBpbnVuZGFkYXNcIixcclxuICAgICAgZmlyZUVycm9yOiBcIkVycm9yIGFsIGNhcmdhciByaWVzZ28gZGUgaW5jZW5kaW8sIGludGVudGEgZGUgbnVldm9cIixcclxuICAgICAgZmxvb2RFcnJvcjogXCJFcnJvciBhbCBjYXJnYXIgcmllc2dvIGRlIGludW5kYWNpb24sIGludGVudGEgZGUgbnVldm9cIixcclxuICAgICAgYnVmZmVyTGF5ZXI6IFwiQnVmZmVyIGRlIHpvbmEgYWZlY3RhZGFcIixcclxuICAgICAgYnVmZmVyV2FybmluZzogXCJEZWJlIHNlbGVjY2lvbmFyIG3DrW5pbW8gdW4gcG9sw61nb25vLlwiLFxyXG4gICAgICBidWZmZXJFcnJvcjogXCJFcnJvciBhbCBnZW5lcmFyIGVsIGJ1ZmZlci5cIixcclxuICAgICAgcHJveGltaXR5TGF5ZXI6IFwiTMOtbmVhcyBkZSBQcm94aW1pZGFkXCIsXHJcbiAgICAgIHVyYmFuTGltaXRzRXJyb3I6IFwiTm8gZXhpc3RlbiBsw61taXRlcyB1cmJhbm9zIGRlbnRybyBkZWwgw6FyZWEuXCJcclxuXHJcbiAgICB9LFxyXG4gICAgZW46IHtcclxuICAgICAgd2lkZ2V0TGFiZWw6IFwiUmlzayBBcmVhIFByb3hpbWl0eVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHdpZGdldCBhbGxvd3MgZ2VuZXJhdGluZyBwcm94aW1pdHkgbGluZXMgdG8gdGhlIG5lYXJlc3QgdXJiYW4gbGltaXRzIGZyb20gYnVybmVkIG9yIGZsb29kZWQgYXJlYXMuXCIsXHJcbiAgICAgIGluY2VuZGlvOiBcIldpbGRmaXJlc1wiLFxyXG4gICAgICBpbnVuZGFjaW9uOiBcIkZsb29kc1wiLFxyXG4gICAgICBidWZmZXJMYWJlbDogXCJCdWZmZXIgZGlzdGFuY2UgKGttKVwiLFxyXG4gICAgICBnZW5lcmFyQnVmZmVyOiBcIkdlbmVyYXRlIGJ1ZmZlciBhcmVhXCIsXHJcbiAgICAgIGRpYnVqYXJMaW5lYXM6IFwiRHJhdyBwcm94aW1pdHkgbGluZXNcIixcclxuICAgICAgZXJyb3JJbWFnZW46IFwiWW91IG11c3Qgc2VsZWN0IGFuIGltYWdlIGJlZm9yZSBydW5uaW5nIHRoaXMgcHJvY2Vzc1wiLFxyXG4gICAgICBlcnJvckJ1ZmZlcjogXCJZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3Qgb25lIHBvbHlnb24uXCIsXHJcbiAgICAgIG1pbkttV2FybmluZzogXCJUaGUgdmFsdWUgbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMTAwIGttLlwiLFxyXG4gICAgICBtYXhLbVdhcm5pbmc6IFwiVGhlIHZhbHVlIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDEga20uXCIsXHJcbiAgICAgIGZpcmVMYXllcjogXCJCdXJuZWQgYXJlYXNcIixcclxuICAgICAgZmxvb2RMYXllcjogXCJGbG9vZGVkIGFyZWFzXCIsXHJcbiAgICAgIGZpcmVFcnJvcjogXCJFcnJvciBsb2FkaW5nIGZpcmUgcmlzaywgdHJ5IGFnYWluLlwiLFxyXG4gICAgICBmbG9vZEVycm9yOiBcIkVycm9yIGxvYWRpbmcgZmxvb2QgcmlzaywgdHJ5IGFnYWluLlwiLFxyXG4gICAgICBidWZmZXJMYXllcjogXCJhZmZlY3RlZCBhcmVhIGJ1ZmZlclwiLFxyXG4gICAgICBidWZmZXJXYXJuaW5nOiBcIllvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCBvbmUgcG9seWdvbi5cIixcclxuICAgICAgYnVmZmVyRXJyb3I6IFwiRXJyb3IgZ2VuZXJhdGluZyBidWZmZXIuXCIsXHJcbiAgICAgIHByb3hpbWl0eUxheWVyOiBcIkxpbmVzIG9mIFByb3hpbWl0eVwiLFxyXG4gICAgICB1cmJhbkxpbWl0c0Vycm9yOiBcIlRoZXJlIGFyZSBubyB1cmJhbiBib3VuZGFyaWVzIHdpdGhpbiB0aGUgYXJlYS5cIlxyXG4gICAgfVxyXG4gIH07IiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgcmV0dXJuIHggPT09IHkgJiYgKHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5KSB8fCB4ICE9PSB4ICYmIHkgIT09IHkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgO1xufVxuXG52YXIgb2JqZWN0SXMgPSB0eXBlb2YgT2JqZWN0LmlzID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmlzIDogaXM7XG5cbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlO1xuXG4vLyBmb3IgQ29tbW9uSlMgaW50ZXJvcC5cblxudmFyIHVzZVJlZiA9IFJlYWN0LnVzZVJlZixcbiAgICB1c2VFZmZlY3QgPSBSZWFjdC51c2VFZmZlY3QsXG4gICAgdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8sXG4gICAgdXNlRGVidWdWYWx1ZSA9IFJlYWN0LnVzZURlYnVnVmFsdWU7IC8vIFNhbWUgYXMgdXNlU3luY0V4dGVybmFsU3RvcmUsIGJ1dCBzdXBwb3J0cyBzZWxlY3RvciBhbmQgaXNFcXVhbCBhcmd1bWVudHMuXG5cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90LCBzZWxlY3RvciwgaXNFcXVhbCkge1xuICAvLyBVc2UgdGhpcyB0byB0cmFjayB0aGUgcmVuZGVyZWQgc25hcHNob3QuXG4gIHZhciBpbnN0UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgaW5zdDtcblxuICBpZiAoaW5zdFJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgaW5zdCA9IHtcbiAgICAgIGhhc1ZhbHVlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBudWxsXG4gICAgfTtcbiAgICBpbnN0UmVmLmN1cnJlbnQgPSBpbnN0O1xuICB9IGVsc2Uge1xuICAgIGluc3QgPSBpbnN0UmVmLmN1cnJlbnQ7XG4gIH1cblxuICB2YXIgX3VzZU1lbW8gPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUcmFjayB0aGUgbWVtb2l6ZWQgc3RhdGUgdXNpbmcgY2xvc3VyZSB2YXJpYWJsZXMgdGhhdCBhcmUgbG9jYWwgdG8gdGhpc1xuICAgIC8vIG1lbW9pemVkIGluc3RhbmNlIG9mIGEgZ2V0U25hcHNob3QgZnVuY3Rpb24uIEludGVudGlvbmFsbHkgbm90IHVzaW5nIGFcbiAgICAvLyB1c2VSZWYgaG9vaywgYmVjYXVzZSB0aGF0IHN0YXRlIHdvdWxkIGJlIHNoYXJlZCBhY3Jvc3MgYWxsIGNvbmN1cnJlbnRcbiAgICAvLyBjb3BpZXMgb2YgdGhlIGhvb2svY29tcG9uZW50LlxuICAgIHZhciBoYXNNZW1vID0gZmFsc2U7XG4gICAgdmFyIG1lbW9pemVkU25hcHNob3Q7XG4gICAgdmFyIG1lbW9pemVkU2VsZWN0aW9uO1xuXG4gICAgdmFyIG1lbW9pemVkU2VsZWN0b3IgPSBmdW5jdGlvbiAobmV4dFNuYXBzaG90KSB7XG4gICAgICBpZiAoIWhhc01lbW8pIHtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgdGhlIGhvb2sgaXMgY2FsbGVkLCB0aGVyZSBpcyBubyBtZW1vaXplZCByZXN1bHQuXG4gICAgICAgIGhhc01lbW8gPSB0cnVlO1xuICAgICAgICBtZW1vaXplZFNuYXBzaG90ID0gbmV4dFNuYXBzaG90O1xuXG4gICAgICAgIHZhciBfbmV4dFNlbGVjdGlvbiA9IHNlbGVjdG9yKG5leHRTbmFwc2hvdCk7XG5cbiAgICAgICAgaWYgKGlzRXF1YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIEV2ZW4gaWYgdGhlIHNlbGVjdG9yIGhhcyBjaGFuZ2VkLCB0aGUgY3VycmVudGx5IHJlbmRlcmVkIHNlbGVjdGlvblxuICAgICAgICAgIC8vIG1heSBiZSBlcXVhbCB0byB0aGUgbmV3IHNlbGVjdGlvbi4gV2Ugc2hvdWxkIGF0dGVtcHQgdG8gcmV1c2UgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCB2YWx1ZSBpZiBwb3NzaWJsZSwgdG8gcHJlc2VydmUgZG93bnN0cmVhbSBtZW1vaXphdGlvbnMuXG4gICAgICAgICAgaWYgKGluc3QuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2VsZWN0aW9uID0gaW5zdC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKGlzRXF1YWwoY3VycmVudFNlbGVjdGlvbiwgX25leHRTZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gY3VycmVudFNlbGVjdGlvbjtcbiAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRTZWxlY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBfbmV4dFNlbGVjdGlvbjtcbiAgICAgICAgcmV0dXJuIF9uZXh0U2VsZWN0aW9uO1xuICAgICAgfSAvLyBXZSBtYXkgYmUgYWJsZSB0byByZXVzZSB0aGUgcHJldmlvdXMgaW52b2NhdGlvbidzIHJlc3VsdC5cblxuXG4gICAgICAvLyBXZSBtYXkgYmUgYWJsZSB0byByZXVzZSB0aGUgcHJldmlvdXMgaW52b2NhdGlvbidzIHJlc3VsdC5cbiAgICAgIHZhciBwcmV2U25hcHNob3QgPSBtZW1vaXplZFNuYXBzaG90O1xuICAgICAgdmFyIHByZXZTZWxlY3Rpb24gPSBtZW1vaXplZFNlbGVjdGlvbjtcblxuICAgICAgaWYgKG9iamVjdElzKHByZXZTbmFwc2hvdCwgbmV4dFNuYXBzaG90KSkge1xuICAgICAgICAvLyBUaGUgc25hcHNob3QgaXMgdGhlIHNhbWUgYXMgbGFzdCB0aW1lLiBSZXVzZSB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLlxuICAgICAgICByZXR1cm4gcHJldlNlbGVjdGlvbjtcbiAgICAgIH0gLy8gVGhlIHNuYXBzaG90IGhhcyBjaGFuZ2VkLCBzbyB3ZSBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgc2VsZWN0aW9uLlxuXG5cbiAgICAgIC8vIFRoZSBzbmFwc2hvdCBoYXMgY2hhbmdlZCwgc28gd2UgbmVlZCB0byBjb21wdXRlIGEgbmV3IHNlbGVjdGlvbi5cbiAgICAgIHZhciBuZXh0U2VsZWN0aW9uID0gc2VsZWN0b3IobmV4dFNuYXBzaG90KTsgLy8gSWYgYSBjdXN0b20gaXNFcXVhbCBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdXNlIHRoYXQgdG8gY2hlY2sgaWYgdGhlIGRhdGFcbiAgICAgIC8vIGhhcyBjaGFuZ2VkLiBJZiBpdCBoYXNuJ3QsIHJldHVybiB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLiBUaGF0IHNpZ25hbHNcbiAgICAgIC8vIHRvIFJlYWN0IHRoYXQgdGhlIHNlbGVjdGlvbnMgYXJlIGNvbmNlcHR1YWxseSBlcXVhbCwgYW5kIHdlIGNhbiBiYWlsXG4gICAgICAvLyBvdXQgb2YgcmVuZGVyaW5nLlxuXG4gICAgICAvLyBJZiBhIGN1c3RvbSBpc0VxdWFsIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB1c2UgdGhhdCB0byBjaGVjayBpZiB0aGUgZGF0YVxuICAgICAgLy8gaGFzIGNoYW5nZWQuIElmIGl0IGhhc24ndCwgcmV0dXJuIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uIFRoYXQgc2lnbmFsc1xuICAgICAgLy8gdG8gUmVhY3QgdGhhdCB0aGUgc2VsZWN0aW9ucyBhcmUgY29uY2VwdHVhbGx5IGVxdWFsLCBhbmQgd2UgY2FuIGJhaWxcbiAgICAgIC8vIG91dCBvZiByZW5kZXJpbmcuXG4gICAgICBpZiAoaXNFcXVhbCAhPT0gdW5kZWZpbmVkICYmIGlzRXF1YWwocHJldlNlbGVjdGlvbiwgbmV4dFNlbGVjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHByZXZTZWxlY3Rpb247XG4gICAgICB9XG5cbiAgICAgIG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG4gICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IG5leHRTZWxlY3Rpb247XG4gICAgICByZXR1cm4gbmV4dFNlbGVjdGlvbjtcbiAgICB9OyAvLyBBc3NpZ25pbmcgdGhpcyB0byBhIGNvbnN0YW50IHNvIHRoYXQgRmxvdyBrbm93cyBpdCBjYW4ndCBjaGFuZ2UuXG5cblxuICAgIC8vIEFzc2lnbmluZyB0aGlzIHRvIGEgY29uc3RhbnQgc28gdGhhdCBGbG93IGtub3dzIGl0IGNhbid0IGNoYW5nZS5cbiAgICB2YXIgbWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCA9IGdldFNlcnZlclNuYXBzaG90ID09PSB1bmRlZmluZWQgPyBudWxsIDogZ2V0U2VydmVyU25hcHNob3Q7XG5cbiAgICB2YXIgZ2V0U25hcHNob3RXaXRoU2VsZWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihnZXRTbmFwc2hvdCgpKTtcbiAgICB9O1xuXG4gICAgdmFyIGdldFNlcnZlclNuYXBzaG90V2l0aFNlbGVjdG9yID0gbWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZW1vaXplZFNlbGVjdG9yKG1heWJlR2V0U2VydmVyU25hcHNob3QoKSk7XG4gICAgfTtcbiAgICByZXR1cm4gW2dldFNuYXBzaG90V2l0aFNlbGVjdG9yLCBnZXRTZXJ2ZXJTbmFwc2hvdFdpdGhTZWxlY3Rvcl07XG4gIH0sIFtnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QsIHNlbGVjdG9yLCBpc0VxdWFsXSksXG4gICAgICBnZXRTZWxlY3Rpb24gPSBfdXNlTWVtb1swXSxcbiAgICAgIGdldFNlcnZlclNlbGVjdGlvbiA9IF91c2VNZW1vWzFdO1xuXG4gIHZhciB2YWx1ZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U2VsZWN0aW9uLCBnZXRTZXJ2ZXJTZWxlY3Rpb24pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGluc3QuaGFzVmFsdWUgPSB0cnVlO1xuICAgIGluc3QudmFsdWUgPSB2YWx1ZTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHVzZURlYnVnVmFsdWUodmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjtcbiAgICAgICAgICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgIFxuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiZnVuY3Rpb24gcihlKXt2YXIgdCxmLG49XCJcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGUpbis9ZTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKWlmKEFycmF5LmlzQXJyYXkoZSkpe3ZhciBvPWUubGVuZ3RoO2Zvcih0PTA7dDxvO3QrKyllW3RdJiYoZj1yKGVbdF0pKSYmKG4mJihuKz1cIiBcIiksbis9Zil9ZWxzZSBmb3IoZiBpbiBlKWVbZl0mJihuJiYobis9XCIgXCIpLG4rPWYpO3JldHVybiBufWV4cG9ydCBmdW5jdGlvbiBjbHN4KCl7Zm9yKHZhciBlLHQsZj0wLG49XCJcIixvPWFyZ3VtZW50cy5sZW5ndGg7ZjxvO2YrKykoZT1hcmd1bWVudHNbZl0pJiYodD1yKGUpKSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGRlZmF1bHQgY2xzeDsiLCIvLyBzcmMvaW5kZXgudHNcbmltcG9ydCAqIGFzIFJlYWN0MiBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yIGFzIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yMiB9IGZyb20gXCJ1c2Utc3luYy1leHRlcm5hbC1zdG9yZS93aXRoLXNlbGVjdG9yLmpzXCI7XG5cbi8vIHNyYy91dGlscy9yZWFjdC50c1xuaW1wb3J0ICogYXMgUmVhY3RPcmlnaW5hbCBmcm9tIFwicmVhY3RcIjtcbnZhciBSZWFjdCA9IChcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIC8vIEB0cy1pZ25vcmVcbiAgXCJkZWZhdWx0XCIgaW4gUmVhY3RPcmlnaW5hbCA/IFJlYWN0T3JpZ2luYWxbXCJkZWZhdWx0XCJdIDogUmVhY3RPcmlnaW5hbFxuKTtcblxuLy8gc3JjL2NvbXBvbmVudHMvQ29udGV4dC50c1xudmFyIENvbnRleHRLZXkgPSBTeW1ib2wuZm9yKGByZWFjdC1yZWR1eC1jb250ZXh0YCk7XG52YXIgZ1QgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiAoXG4gIC8qIGZhbGwgYmFjayB0byBhIHBlci1tb2R1bGUgc2NvcGUgKHByZS04LjEgYmVoYXZpb3VyKSBpZiBgZ2xvYmFsVGhpc2AgaXMgbm90IGF2YWlsYWJsZSAqL1xuICB7fVxuKTtcbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIGlmICghUmVhY3QuY3JlYXRlQ29udGV4dClcbiAgICByZXR1cm4ge307XG4gIGNvbnN0IGNvbnRleHRNYXAgPSBnVFtDb250ZXh0S2V5XSA/PyAoZ1RbQ29udGV4dEtleV0gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbiAgbGV0IHJlYWxDb250ZXh0ID0gY29udGV4dE1hcC5nZXQoUmVhY3QuY3JlYXRlQ29udGV4dCk7XG4gIGlmICghcmVhbENvbnRleHQpIHtcbiAgICByZWFsQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXG4gICAgICBudWxsXG4gICAgKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICByZWFsQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUmVhY3RSZWR1eFwiO1xuICAgIH1cbiAgICBjb250ZXh0TWFwLnNldChSZWFjdC5jcmVhdGVDb250ZXh0LCByZWFsQ29udGV4dCk7XG4gIH1cbiAgcmV0dXJuIHJlYWxDb250ZXh0O1xufVxudmFyIFJlYWN0UmVkdXhDb250ZXh0ID0gLyogQF9fUFVSRV9fICovIGdldENvbnRleHQoKTtcblxuLy8gc3JjL3V0aWxzL3VzZVN5bmNFeHRlcm5hbFN0b3JlLnRzXG52YXIgbm90SW5pdGlhbGl6ZWQgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihcInVTRVMgbm90IGluaXRpYWxpemVkIVwiKTtcbn07XG5cbi8vIHNyYy9ob29rcy91c2VSZWR1eENvbnRleHQudHNcbmZ1bmN0aW9uIGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiB1c2VSZWR1eENvbnRleHQyKCkge1xuICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoY29udGV4dCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhY29udGV4dFZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiY291bGQgbm90IGZpbmQgcmVhY3QtcmVkdXggY29udGV4dCB2YWx1ZTsgcGxlYXNlIGVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHdyYXBwZWQgaW4gYSA8UHJvdmlkZXI+XCJcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0VmFsdWU7XG4gIH07XG59XG52YXIgdXNlUmVkdXhDb250ZXh0ID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soKTtcblxuLy8gc3JjL2hvb2tzL3VzZVNlbGVjdG9yLnRzXG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSBub3RJbml0aWFsaXplZDtcbnZhciBpbml0aWFsaXplVXNlU2VsZWN0b3IgPSAoZm4pID0+IHtcbiAgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSBmbjtcbn07XG52YXIgcmVmRXF1YWxpdHkgPSAoYSwgYikgPT4gYSA9PT0gYjtcbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9ySG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlUmVkdXhDb250ZXh0MiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlUmVkdXhDb250ZXh0IDogY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0KTtcbiAgY29uc3QgdXNlU2VsZWN0b3IyID0gKHNlbGVjdG9yLCBlcXVhbGl0eUZuT3JPcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB7IGVxdWFsaXR5Rm4gPSByZWZFcXVhbGl0eSwgZGV2TW9kZUNoZWNrcyA9IHt9IH0gPSB0eXBlb2YgZXF1YWxpdHlGbk9yT3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiID8geyBlcXVhbGl0eUZuOiBlcXVhbGl0eUZuT3JPcHRpb25zIH0gOiBlcXVhbGl0eUZuT3JPcHRpb25zO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYSBmdW5jdGlvbiBhcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yYCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGVxdWFsaXR5Rm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFlvdSBtdXN0IHBhc3MgYSBmdW5jdGlvbiBhcyBhbiBlcXVhbGl0eSBmdW5jdGlvbiB0byB1c2VTZWxlY3RvcmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZSxcbiAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrXG4gICAgfSA9IHVzZVJlZHV4Q29udGV4dDIoKTtcbiAgICBjb25zdCBmaXJzdFJ1biA9IFJlYWN0LnVzZVJlZih0cnVlKTtcbiAgICBjb25zdCB3cmFwcGVkU2VsZWN0b3IgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAgIHtcbiAgICAgICAgW3NlbGVjdG9yLm5hbWVdKHN0YXRlKSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RvcihzdGF0ZSk7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2s6IGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrLFxuICAgICAgICAgICAgICBzdGFiaWxpdHlDaGVjazogZmluYWxTdGFiaWxpdHlDaGVja1xuICAgICAgICAgICAgfSA9IHtcbiAgICAgICAgICAgICAgc3RhYmlsaXR5Q2hlY2ssXG4gICAgICAgICAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVjayxcbiAgICAgICAgICAgICAgLi4uZGV2TW9kZUNoZWNrc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChmaW5hbFN0YWJpbGl0eUNoZWNrID09PSBcImFsd2F5c1wiIHx8IGZpbmFsU3RhYmlsaXR5Q2hlY2sgPT09IFwib25jZVwiICYmIGZpcnN0UnVuLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgY29uc3QgdG9Db21wYXJlID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgICAgICAgICBpZiAoIWVxdWFsaXR5Rm4oc2VsZWN0ZWQsIHRvQ29tcGFyZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhY2sgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICh7IHN0YWNrIH0gPSBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgXCJTZWxlY3RvciBcIiArIChzZWxlY3Rvci5uYW1lIHx8IFwidW5rbm93blwiKSArIFwiIHJldHVybmVkIGEgZGlmZmVyZW50IHJlc3VsdCB3aGVuIGNhbGxlZCB3aXRoIHRoZSBzYW1lIHBhcmFtZXRlcnMuIFRoaXMgY2FuIGxlYWQgdG8gdW5uZWNlc3NhcnkgcmVyZW5kZXJzLlxcblNlbGVjdG9ycyB0aGF0IHJldHVybiBhIG5ldyByZWZlcmVuY2UgKHN1Y2ggYXMgYW4gb2JqZWN0IG9yIGFuIGFycmF5KSBzaG91bGQgYmUgbWVtb2l6ZWQ6IGh0dHBzOi8vcmVkdXguanMub3JnL3VzYWdlL2Rlcml2aW5nLWRhdGEtc2VsZWN0b3JzI29wdGltaXppbmctc2VsZWN0b3JzLXdpdGgtbWVtb2l6YXRpb25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDI6IHRvQ29tcGFyZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmluYWxJZGVudGl0eUZ1bmN0aW9uQ2hlY2sgPT09IFwiYWx3YXlzXCIgfHwgZmluYWxJZGVudGl0eUZ1bmN0aW9uQ2hlY2sgPT09IFwib25jZVwiICYmIGZpcnN0UnVuLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSBzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFjayA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgKHsgc3RhY2sgfSA9IGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICBcIlNlbGVjdG9yIFwiICsgKHNlbGVjdG9yLm5hbWUgfHwgXCJ1bmtub3duXCIpICsgXCIgcmV0dXJuZWQgdGhlIHJvb3Qgc3RhdGUgd2hlbiBjYWxsZWQuIFRoaXMgY2FuIGxlYWQgdG8gdW5uZWNlc3NhcnkgcmVyZW5kZXJzLlxcblNlbGVjdG9ycyB0aGF0IHJldHVybiB0aGUgZW50aXJlIHN0YXRlIGFyZSBhbG1vc3QgY2VydGFpbmx5IGEgbWlzdGFrZSwgYXMgdGhleSB3aWxsIGNhdXNlIGEgcmVyZW5kZXIgd2hlbmV2ZXIgKmFueXRoaW5nKiBpbiBzdGF0ZSBjaGFuZ2VzLlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGFjayB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpcnN0UnVuLmN1cnJlbnQpXG4gICAgICAgICAgICAgIGZpcnN0UnVuLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgICAgICB9XG4gICAgICB9W3NlbGVjdG9yLm5hbWVdLFxuICAgICAgW3NlbGVjdG9yLCBzdGFiaWxpdHlDaGVjaywgZGV2TW9kZUNoZWNrcy5zdGFiaWxpdHlDaGVja11cbiAgICApO1xuICAgIGNvbnN0IHNlbGVjdGVkU3RhdGUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihcbiAgICAgIHN1YnNjcmlwdGlvbi5hZGROZXN0ZWRTdWIsXG4gICAgICBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgIGdldFNlcnZlclN0YXRlIHx8IHN0b3JlLmdldFN0YXRlLFxuICAgICAgd3JhcHBlZFNlbGVjdG9yLFxuICAgICAgZXF1YWxpdHlGblxuICAgICk7XG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZShzZWxlY3RlZFN0YXRlKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRTdGF0ZTtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VTZWxlY3RvcjIsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHVzZVNlbGVjdG9yMlxuICB9KTtcbiAgcmV0dXJuIHVzZVNlbGVjdG9yMjtcbn1cbnZhciB1c2VTZWxlY3RvciA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTZWxlY3Rvckhvb2soKTtcblxuLy8gc3JjL3V0aWxzL3JlYWN0LWlzLnRzXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik7XG52YXIgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zZXJ2ZXJfY29udGV4dFwiKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Qub2Zmc2NyZWVuXCIpO1xudmFyIFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKFwicmVhY3QuY2xpZW50LnJlZmVyZW5jZVwiKTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIiAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICBjb25zdCAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRToge1xuICAgICAgICBjb25zdCB0eXBlID0gb2JqZWN0LnR5cGU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGNvbnN0ICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOiB7XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZvaWQgMDtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5cbi8vIHNyYy91dGlscy93YXJuaW5nLnRzXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIHRyeSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxuLy8gc3JjL2Nvbm5lY3QvdmVyaWZ5U3Vic2VsZWN0b3JzLnRzXG5mdW5jdGlvbiB2ZXJpZnkoc2VsZWN0b3IsIG1ldGhvZE5hbWUpIHtcbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCB2YWx1ZSBmb3IgJHttZXRob2ROYW1lfSBpbiBjb25uZWN0LmApO1xuICB9IGVsc2UgaWYgKG1ldGhvZE5hbWUgPT09IFwibWFwU3RhdGVUb1Byb3BzXCIgfHwgbWV0aG9kTmFtZSA9PT0gXCJtYXBEaXNwYXRjaFRvUHJvcHNcIikge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNlbGVjdG9yLCBcImRlcGVuZHNPbk93blByb3BzXCIpKSB7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICBgVGhlIHNlbGVjdG9yIGZvciAke21ldGhvZE5hbWV9IG9mIGNvbm5lY3QgZGlkIG5vdCBzcGVjaWZ5IGEgdmFsdWUgZm9yIGRlcGVuZHNPbk93blByb3BzLmBcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpIHtcbiAgdmVyaWZ5KG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIik7XG4gIHZlcmlmeShtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpO1xuICB2ZXJpZnkobWVyZ2VQcm9wcywgXCJtZXJnZVByb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9zZWxlY3RvckZhY3RvcnkudHNcbmZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwge1xuICBhcmVTdGF0ZXNFcXVhbCxcbiAgYXJlT3duUHJvcHNFcXVhbCxcbiAgYXJlU3RhdGVQcm9wc0VxdWFsXG59KSB7XG4gIGxldCBoYXNSdW5BdExlYXN0T25jZSA9IGZhbHNlO1xuICBsZXQgc3RhdGU7XG4gIGxldCBvd25Qcm9wcztcbiAgbGV0IHN0YXRlUHJvcHM7XG4gIGxldCBkaXNwYXRjaFByb3BzO1xuICBsZXQgbWVyZ2VkUHJvcHM7XG4gIGZ1bmN0aW9uIGhhbmRsZUZpcnN0Q2FsbChmaXJzdFN0YXRlLCBmaXJzdE93blByb3BzKSB7XG4gICAgc3RhdGUgPSBmaXJzdFN0YXRlO1xuICAgIG93blByb3BzID0gZmlyc3RPd25Qcm9wcztcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgaGFzUnVuQXRMZWFzdE9uY2UgPSB0cnVlO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCkge1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzKCkge1xuICAgIGlmIChtYXBTdGF0ZVRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdTdGF0ZSgpIHtcbiAgICBjb25zdCBuZXh0U3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlUHJvcHNDaGFuZ2VkID0gIWFyZVN0YXRlUHJvcHNFcXVhbChuZXh0U3RhdGVQcm9wcywgc3RhdGVQcm9wcyk7XG4gICAgc3RhdGVQcm9wcyA9IG5leHRTdGF0ZVByb3BzO1xuICAgIGlmIChzdGF0ZVByb3BzQ2hhbmdlZClcbiAgICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIGNvbnN0IHByb3BzQ2hhbmdlZCA9ICFhcmVPd25Qcm9wc0VxdWFsKG5leHRPd25Qcm9wcywgb3duUHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlQ2hhbmdlZCA9ICFhcmVTdGF0ZXNFcXVhbChcbiAgICAgIG5leHRTdGF0ZSxcbiAgICAgIHN0YXRlLFxuICAgICAgbmV4dE93blByb3BzLFxuICAgICAgb3duUHJvcHNcbiAgICApO1xuICAgIHN0YXRlID0gbmV4dFN0YXRlO1xuICAgIG93blByb3BzID0gbmV4dE93blByb3BzO1xuICAgIGlmIChwcm9wc0NoYW5nZWQgJiYgc3RhdGVDaGFuZ2VkKVxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKTtcbiAgICBpZiAocHJvcHNDaGFuZ2VkKVxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1Byb3BzKCk7XG4gICAgaWYgKHN0YXRlQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdTdGF0ZSgpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvcihuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIHJldHVybiBoYXNSdW5BdExlYXN0T25jZSA/IGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykgOiBoYW5kbGVGaXJzdENhbGwobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpO1xuICB9O1xufVxuZnVuY3Rpb24gZmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShkaXNwYXRjaCwge1xuICBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICBpbml0TWVyZ2VQcm9wcyxcbiAgLi4ub3B0aW9uc1xufSkge1xuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBpbml0TWFwU3RhdGVUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGNvbnN0IG1lcmdlUHJvcHMgPSBpbml0TWVyZ2VQcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpO1xuICB9XG4gIHJldHVybiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIG9wdGlvbnMpO1xufVxuXG4vLyBzcmMvdXRpbHMvYmluZEFjdGlvbkNyZWF0b3JzLnRzXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGNvbnN0IGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICBjb25zdCBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gKC4uLmFyZ3MpID0+IGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IoLi4uYXJncykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuLy8gc3JjL3V0aWxzL2lzUGxhaW5PYmplY3QudHNcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiIHx8IG9iaiA9PT0gbnVsbClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG4gIGlmIChwcm90byA9PT0gbnVsbClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgbGV0IGJhc2VQcm90byA9IHByb3RvO1xuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90bykgIT09IG51bGwpIHtcbiAgICBiYXNlUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKTtcbiAgfVxuICByZXR1cm4gcHJvdG8gPT09IGJhc2VQcm90bztcbn1cblxuLy8gc3JjL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LnRzXG5mdW5jdGlvbiB2ZXJpZnlQbGFpbk9iamVjdCh2YWx1ZSwgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm5pbmcoXG4gICAgICBgJHttZXRob2ROYW1lfSgpIGluICR7ZGlzcGxheU5hbWV9IG11c3QgcmV0dXJuIGEgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkIHJlY2VpdmVkICR7dmFsdWV9LmBcbiAgICApO1xuICB9XG59XG5cbi8vIHNyYy9jb25uZWN0L3dyYXBNYXBUb1Byb3BzLnRzXG5mdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGdldENvbnN0YW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0Q29uc3RhbnRTZWxlY3RvcihkaXNwYXRjaCkge1xuICAgIGNvbnN0IGNvbnN0YW50ID0gZ2V0Q29uc3RhbnQoZGlzcGF0Y2gpO1xuICAgIGZ1bmN0aW9uIGNvbnN0YW50U2VsZWN0b3IoKSB7XG4gICAgICByZXR1cm4gY29uc3RhbnQ7XG4gICAgfVxuICAgIGNvbnN0YW50U2VsZWN0b3IuZGVwZW5kc09uT3duUHJvcHMgPSBmYWxzZTtcbiAgICByZXR1cm4gY29uc3RhbnRTZWxlY3RvcjtcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMgPyBCb29sZWFuKG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIDogbWFwVG9Qcm9wcy5sZW5ndGggIT09IDE7XG59XG5mdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwVG9Qcm9wcywgbWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdFByb3h5U2VsZWN0b3IoZGlzcGF0Y2gsIHsgZGlzcGxheU5hbWUgfSkge1xuICAgIGNvbnN0IHByb3h5ID0gZnVuY3Rpb24gbWFwVG9Qcm9wc1Byb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHJldHVybiBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA/IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykgOiBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgdm9pZCAwKTtcbiAgICB9O1xuICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gdHJ1ZTtcbiAgICBwcm94eS5tYXBUb1Byb3BzID0gZnVuY3Rpb24gZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICBwcm94eS5tYXBUb1Byb3BzID0gbWFwVG9Qcm9wcztcbiAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcyk7XG4gICAgICBsZXQgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBwcm94eS5tYXBUb1Byb3BzID0gcHJvcHM7XG4gICAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMocHJvcHMpO1xuICAgICAgICBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgICAgfVxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgdmVyaWZ5UGxhaW5PYmplY3QocHJvcHMsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgIHJldHVybiBwcm9wcztcbiAgICB9O1xuICAgIHJldHVybiBwcm94eTtcbiAgfTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvaW52YWxpZEFyZ0ZhY3RvcnkudHNcbmZ1bmN0aW9uIGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KGFyZywgbmFtZSkge1xuICByZXR1cm4gKGRpc3BhdGNoLCBvcHRpb25zKSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgdmFsdWUgb2YgdHlwZSAke3R5cGVvZiBhcmd9IGZvciAke25hbWV9IGFyZ3VtZW50IHdoZW4gY29ubmVjdGluZyBjb21wb25lbnQgJHtvcHRpb25zLndyYXBwZWRDb21wb25lbnROYW1lfS5gXG4gICAgKTtcbiAgfTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvbWFwRGlzcGF0Y2hUb1Byb3BzLnRzXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gbWFwRGlzcGF0Y2hUb1Byb3BzICYmIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09IFwib2JqZWN0XCIgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KFxuICAgIChkaXNwYXRjaCkgPT4gKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgYmluZEFjdGlvbkNyZWF0b3JzKG1hcERpc3BhdGNoVG9Qcm9wcywgZGlzcGF0Y2gpXG4gICAgKVxuICApIDogIW1hcERpc3BhdGNoVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoKGRpc3BhdGNoKSA9PiAoe1xuICAgIGRpc3BhdGNoXG4gIH0pKSA6IHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd3JhcE1hcFRvUHJvcHNGdW5jKG1hcERpc3BhdGNoVG9Qcm9wcywgXCJtYXBEaXNwYXRjaFRvUHJvcHNcIilcbiAgKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcywgXCJtYXBEaXNwYXRjaFRvUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L21hcFN0YXRlVG9Qcm9wcy50c1xuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBTdGF0ZVRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KCgpID0+ICh7fSkpIDogdHlwZW9mIG1hcFN0YXRlVG9Qcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwU3RhdGVUb1Byb3BzLCBcIm1hcFN0YXRlVG9Qcm9wc1wiKVxuICApIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBcIm1hcFN0YXRlVG9Qcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvbWVyZ2VQcm9wcy50c1xuZnVuY3Rpb24gZGVmYXVsdE1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHsgLi4ub3duUHJvcHMsIC4uLnN0YXRlUHJvcHMsIC4uLmRpc3BhdGNoUHJvcHMgfTtcbn1cbmZ1bmN0aW9uIHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0TWVyZ2VQcm9wc1Byb3h5KGRpc3BhdGNoLCB7IGRpc3BsYXlOYW1lLCBhcmVNZXJnZWRQcm9wc0VxdWFsIH0pIHtcbiAgICBsZXQgaGFzUnVuT25jZSA9IGZhbHNlO1xuICAgIGxldCBtZXJnZWRQcm9wcztcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VQcm9wc1Byb3h5KHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gICAgICBjb25zdCBuZXh0TWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICAgIGlmIChoYXNSdW5PbmNlKSB7XG4gICAgICAgIGlmICghYXJlTWVyZ2VkUHJvcHNFcXVhbChuZXh0TWVyZ2VkUHJvcHMsIG1lcmdlZFByb3BzKSlcbiAgICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhc1J1bk9uY2UgPSB0cnVlO1xuICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICB2ZXJpZnlQbGFpbk9iamVjdChtZXJnZWRQcm9wcywgZGlzcGxheU5hbWUsIFwibWVyZ2VQcm9wc1wiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gbWVyZ2VQcm9wc0ZhY3RvcnkobWVyZ2VQcm9wcykge1xuICByZXR1cm4gIW1lcmdlUHJvcHMgPyAoKSA9PiBkZWZhdWx0TWVyZ2VQcm9wcyA6IHR5cGVvZiBtZXJnZVByb3BzID09PSBcImZ1bmN0aW9uXCIgPyB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtZXJnZVByb3BzLCBcIm1lcmdlUHJvcHNcIik7XG59XG5cbi8vIHNyYy91dGlscy9iYXRjaC50c1xuZnVuY3Rpb24gZGVmYXVsdE5vb3BCYXRjaChjYWxsYmFjaykge1xuICBjYWxsYmFjaygpO1xufVxuXG4vLyBzcmMvdXRpbHMvU3Vic2NyaXB0aW9uLnRzXG5mdW5jdGlvbiBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKSB7XG4gIGxldCBmaXJzdCA9IG51bGw7XG4gIGxldCBsYXN0ID0gbnVsbDtcbiAgcmV0dXJuIHtcbiAgICBjbGVhcigpIHtcbiAgICAgIGZpcnN0ID0gbnVsbDtcbiAgICAgIGxhc3QgPSBudWxsO1xuICAgIH0sXG4gICAgbm90aWZ5KCkge1xuICAgICAgZGVmYXVsdE5vb3BCYXRjaCgoKSA9PiB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IGZpcnN0O1xuICAgICAgICB3aGlsZSAobGlzdGVuZXIpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjaygpO1xuICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgIGxldCBsaXN0ZW5lciA9IGZpcnN0O1xuICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICB9LFxuICAgIHN1YnNjcmliZShjYWxsYmFjaykge1xuICAgICAgbGV0IGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGxhc3QgPSB7XG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICBwcmV2OiBsYXN0XG4gICAgICB9O1xuICAgICAgaWYgKGxpc3RlbmVyLnByZXYpIHtcbiAgICAgICAgbGlzdGVuZXIucHJldi5uZXh0ID0gbGlzdGVuZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXJzdCA9IGxpc3RlbmVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBpZiAoIWlzU3Vic2NyaWJlZCB8fCBmaXJzdCA9PT0gbnVsbClcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICBpZiAobGlzdGVuZXIubmV4dCkge1xuICAgICAgICAgIGxpc3RlbmVyLm5leHQucHJldiA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdCA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3RlbmVyLnByZXYpIHtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpcnN0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG52YXIgbnVsbExpc3RlbmVycyA9IHtcbiAgbm90aWZ5KCkge1xuICB9LFxuICBnZXQ6ICgpID0+IFtdXG59O1xuZnVuY3Rpb24gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlLCBwYXJlbnRTdWIpIHtcbiAgbGV0IHVuc3Vic2NyaWJlO1xuICBsZXQgbGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgbGV0IHN1YnNjcmlwdGlvbnNBbW91bnQgPSAwO1xuICBsZXQgc2VsZlN1YnNjcmliZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gYWRkTmVzdGVkU3ViKGxpc3RlbmVyKSB7XG4gICAgdHJ5U3Vic2NyaWJlKCk7XG4gICAgY29uc3QgY2xlYW51cExpc3RlbmVyID0gbGlzdGVuZXJzLnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgbGV0IHJlbW92ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKCFyZW1vdmVkKSB7XG4gICAgICAgIHJlbW92ZWQgPSB0cnVlO1xuICAgICAgICBjbGVhbnVwTGlzdGVuZXIoKTtcbiAgICAgICAgdHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG5vdGlmeU5lc3RlZFN1YnMoKSB7XG4gICAgbGlzdGVuZXJzLm5vdGlmeSgpO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVdyYXBwZXIoKSB7XG4gICAgaWYgKHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlKSB7XG4gICAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpc1N1YnNjcmliZWQoKSB7XG4gICAgcmV0dXJuIHNlbGZTdWJzY3JpYmVkO1xuICB9XG4gIGZ1bmN0aW9uIHRyeVN1YnNjcmliZSgpIHtcbiAgICBzdWJzY3JpcHRpb25zQW1vdW50Kys7XG4gICAgaWYgKCF1bnN1YnNjcmliZSkge1xuICAgICAgdW5zdWJzY3JpYmUgPSBwYXJlbnRTdWIgPyBwYXJlbnRTdWIuYWRkTmVzdGVkU3ViKGhhbmRsZUNoYW5nZVdyYXBwZXIpIDogc3RvcmUuc3Vic2NyaWJlKGhhbmRsZUNoYW5nZVdyYXBwZXIpO1xuICAgICAgbGlzdGVuZXJzID0gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlKCkge1xuICAgIHN1YnNjcmlwdGlvbnNBbW91bnQtLTtcbiAgICBpZiAodW5zdWJzY3JpYmUgJiYgc3Vic2NyaXB0aW9uc0Ftb3VudCA9PT0gMCkge1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgIHVuc3Vic2NyaWJlID0gdm9pZCAwO1xuICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICBsaXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlTdWJzY3JpYmVTZWxmKCkge1xuICAgIGlmICghc2VsZlN1YnNjcmliZWQpIHtcbiAgICAgIHNlbGZTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgIHRyeVN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZVNlbGYoKSB7XG4gICAgaWYgKHNlbGZTdWJzY3JpYmVkKSB7XG4gICAgICBzZWxmU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgdHJ5VW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc3Vic2NyaXB0aW9uID0ge1xuICAgIGFkZE5lc3RlZFN1YixcbiAgICBub3RpZnlOZXN0ZWRTdWJzLFxuICAgIGhhbmRsZUNoYW5nZVdyYXBwZXIsXG4gICAgaXNTdWJzY3JpYmVkLFxuICAgIHRyeVN1YnNjcmliZTogdHJ5U3Vic2NyaWJlU2VsZixcbiAgICB0cnlVbnN1YnNjcmliZTogdHJ5VW5zdWJzY3JpYmVTZWxmLFxuICAgIGdldExpc3RlbmVyczogKCkgPT4gbGlzdGVuZXJzXG4gIH07XG4gIHJldHVybiBzdWJzY3JpcHRpb247XG59XG5cbi8vIHNyYy91dGlscy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0LnRzXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIik7XG52YXIgaXNSZWFjdE5hdGl2ZSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIjtcbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gY2FuVXNlRE9NIHx8IGlzUmVhY3ROYXRpdmUgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG5cbi8vIHNyYy91dGlscy9zaGFsbG93RXF1YWwudHNcbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAoaXMob2JqQSwgb2JqQikpXG4gICAgcmV0dXJuIHRydWU7XG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gXCJvYmplY3RcIiB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgY29uc3Qga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gc3JjL3V0aWxzL2hvaXN0U3RhdGljcy50c1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJCR0eXBlb2Y6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJCR0eXBlb2Y6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7XG4gIFtGb3J3YXJkUmVmXTogRk9SV0FSRF9SRUZfU1RBVElDUyxcbiAgW01lbW9dOiBNRU1PX1NUQVRJQ1Ncbn07XG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICBpZiAoaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9XG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50W1wiJCR0eXBlb2ZcIl1dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICBjb25zdCBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgY29uc3Qgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG4vLyBzcmMvY29tcG9uZW50cy9jb25uZWN0LnRzeFxudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gbm90SW5pdGlhbGl6ZWQ7XG52YXIgaW5pdGlhbGl6ZUNvbm5lY3QgPSAoZm4pID0+IHtcbiAgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBmbjtcbn07XG52YXIgTk9fU1VCU0NSSVBUSU9OX0FSUkFZID0gW251bGwsIG51bGxdO1xudmFyIHN0cmluZ2lmeUNvbXBvbmVudCA9IChDb21wKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KENvbXApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nKENvbXApO1xuICB9XG59O1xuZnVuY3Rpb24gdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGVmZmVjdEZ1bmMsIGVmZmVjdEFyZ3MsIGRlcGVuZGVuY2llcykge1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IGVmZmVjdEZ1bmMoLi4uZWZmZWN0QXJncyksIGRlcGVuZGVuY2llcyk7XG59XG5mdW5jdGlvbiBjYXB0dXJlV3JhcHBlclByb3BzKGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgd3JhcHBlclByb3BzLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzKSB7XG4gIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCA9IHdyYXBwZXJQcm9wcztcbiAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IGZhbHNlO1xuICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50KSB7XG4gICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbnVsbDtcbiAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHN1YnNjcmliZVVwZGF0ZXMoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLCBzdG9yZSwgc3Vic2NyaXB0aW9uLCBjaGlsZFByb3BzU2VsZWN0b3IsIGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgaXNNb3VudGVkLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzLCBhZGRpdGlvbmFsU3Vic2NyaWJlTGlzdGVuZXIpIHtcbiAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICBsZXQgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgbGV0IGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gIGNvbnN0IGNoZWNrRm9yVXBkYXRlcyA9ICgpID0+IHtcbiAgICBpZiAoZGlkVW5zdWJzY3JpYmUgfHwgIWlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxhdGVzdFN0b3JlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIGxldCBuZXdDaGlsZFByb3BzLCBlcnJvcjtcbiAgICB0cnkge1xuICAgICAgbmV3Q2hpbGRQcm9wcyA9IGNoaWxkUHJvcHNTZWxlY3RvcihcbiAgICAgICAgbGF0ZXN0U3RvcmVTdGF0ZSxcbiAgICAgICAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50XG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yID0gZTtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IGU7XG4gICAgfVxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gICAgfVxuICAgIGlmIChuZXdDaGlsZFByb3BzID09PSBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50KSB7XG4gICAgICBpZiAoIXJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQpIHtcbiAgICAgICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICByZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGFkZGl0aW9uYWxTdWJzY3JpYmVMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcbiAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBjaGVja0ZvclVwZGF0ZXM7XG4gIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgY2hlY2tGb3JVcGRhdGVzKCk7XG4gIGNvbnN0IHVuc3Vic2NyaWJlV3JhcHBlciA9ICgpID0+IHtcbiAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBudWxsO1xuICAgIGlmIChsYXN0VGhyb3duRXJyb3IpIHtcbiAgICAgIHRocm93IGxhc3RUaHJvd25FcnJvcjtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1bnN1YnNjcmliZVdyYXBwZXI7XG59XG5mdW5jdGlvbiBzdHJpY3RFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufVxudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24gPSBmYWxzZTtcbmZ1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIHtcbiAgLy8gVGhlIGBwdXJlYCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZCwgc28gVFMgZG9lc24ndCBsaWtlIHVzIGRlc3RydWN0dXJpbmcgdGhpcyB0byBjaGVjayBpdHMgZXhpc3RlbmNlLlxuICAvLyBAdHMtaWdub3JlXG4gIHB1cmUsXG4gIGFyZVN0YXRlc0VxdWFsID0gc3RyaWN0RXF1YWwsXG4gIGFyZU93blByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIGFyZVN0YXRlUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgLy8gdXNlIFJlYWN0J3MgZm9yd2FyZFJlZiB0byBleHBvc2UgYSByZWYgb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50XG4gIGZvcndhcmRSZWYgPSBmYWxzZSxcbiAgLy8gdGhlIGNvbnRleHQgY29uc3VtZXIgdG8gdXNlXG4gIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dFxufSA9IHt9KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAocHVyZSAhPT0gdm9pZCAwICYmICFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgICdUaGUgYHB1cmVgIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLiBgY29ubmVjdGAgaXMgbm93IGFsd2F5cyBhIFwicHVyZS9tZW1vaXplZFwiIGNvbXBvbmVudCdcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGNvbnN0IENvbnRleHQgPSBjb250ZXh0O1xuICBjb25zdCBpbml0TWFwU3RhdGVUb1Byb3BzID0gbWFwU3RhdGVUb1Byb3BzRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMpO1xuICBjb25zdCBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpO1xuICBjb25zdCBpbml0TWVyZ2VQcm9wcyA9IG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpO1xuICBjb25zdCBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMgPSBCb29sZWFuKG1hcFN0YXRlVG9Qcm9wcyk7XG4gIGNvbnN0IHdyYXBXaXRoQ29ubmVjdCA9IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc3QgaXNWYWxpZCA9IC8qIEBfX1BVUkVfXyAqLyBpc1ZhbGlkRWxlbWVudFR5cGUoV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICBpZiAoIWlzVmFsaWQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgWW91IG11c3QgcGFzcyBhIGNvbXBvbmVudCB0byB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgY29ubmVjdC4gSW5zdGVhZCByZWNlaXZlZCAke3N0cmluZ2lmeUNvbXBvbmVudChcbiAgICAgICAgICAgIFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgICApfWBcbiAgICAgICAgKTtcbiAgICB9XG4gICAgY29uc3Qgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCBcIkNvbXBvbmVudFwiO1xuICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gYENvbm5lY3QoJHt3cmFwcGVkQ29tcG9uZW50TmFtZX0pYDtcbiAgICBjb25zdCBzZWxlY3RvckZhY3RvcnlPcHRpb25zID0ge1xuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgZGlzcGxheU5hbWUsXG4gICAgICB3cmFwcGVkQ29tcG9uZW50TmFtZSxcbiAgICAgIFdyYXBwZWRDb21wb25lbnQsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIGluaXRNZXJnZVByb3BzLFxuICAgICAgYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbFxuICAgIH07XG4gICAgZnVuY3Rpb24gQ29ubmVjdEZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICBjb25zdCBbcHJvcHNDb250ZXh0LCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCB3cmFwcGVyUHJvcHNdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjogcmVhY3RSZWR1eEZvcndhcmRlZFJlZjIsIC4uLndyYXBwZXJQcm9wczIgfSA9IHByb3BzO1xuICAgICAgICByZXR1cm4gW3Byb3BzLmNvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYyLCB3cmFwcGVyUHJvcHMyXTtcbiAgICAgIH0sIFtwcm9wc10pO1xuICAgICAgY29uc3QgQ29udGV4dFRvVXNlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGxldCBSZXN1bHRDb250ZXh0ID0gQ29udGV4dDtcbiAgICAgICAgaWYgKHByb3BzQ29udGV4dD8uQ29uc3VtZXIpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gLyogQF9fUFVSRV9fICovIGlzQ29udGV4dENvbnN1bWVyKFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KHByb3BzQ29udGV4dC5Db25zdW1lciwgbnVsbClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIFwiWW91IG11c3QgcGFzcyBhIHZhbGlkIFJlYWN0IGNvbnRleHQgY29uc3VtZXIgYXMgYHByb3BzLmNvbnRleHRgXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlc3VsdENvbnRleHQgPSBwcm9wc0NvbnRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZXN1bHRDb250ZXh0O1xuICAgICAgfSwgW3Byb3BzQ29udGV4dCwgQ29udGV4dF0pO1xuICAgICAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0VG9Vc2UpO1xuICAgICAgY29uc3QgZGlkU3RvcmVDb21lRnJvbVByb3BzID0gQm9vbGVhbihwcm9wcy5zdG9yZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5nZXRTdGF0ZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5kaXNwYXRjaCk7XG4gICAgICBjb25zdCBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA9IEJvb2xlYW4oY29udGV4dFZhbHVlKSAmJiBCb29sZWFuKGNvbnRleHRWYWx1ZS5zdG9yZSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFkaWRTdG9yZUNvbWVGcm9tUHJvcHMgJiYgIWRpZFN0b3JlQ29tZUZyb21Db250ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ291bGQgbm90IGZpbmQgXCJzdG9yZVwiIGluIHRoZSBjb250ZXh0IG9mIFwiJHtkaXNwbGF5TmFtZX1cIi4gRWl0aGVyIHdyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGEgPFByb3ZpZGVyPiwgb3IgcGFzcyBhIGN1c3RvbSBSZWFjdCBjb250ZXh0IHByb3ZpZGVyIHRvIDxQcm92aWRlcj4gYW5kIHRoZSBjb3JyZXNwb25kaW5nIFJlYWN0IGNvbnRleHQgY29uc3VtZXIgdG8gJHtkaXNwbGF5TmFtZX0gaW4gY29ubmVjdCBvcHRpb25zLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0b3JlID0gZGlkU3RvcmVDb21lRnJvbVByb3BzID8gcHJvcHMuc3RvcmUgOiBjb250ZXh0VmFsdWUuc3RvcmU7XG4gICAgICBjb25zdCBnZXRTZXJ2ZXJTdGF0ZSA9IGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID8gY29udGV4dFZhbHVlLmdldFNlcnZlclN0YXRlIDogc3RvcmUuZ2V0U3RhdGU7XG4gICAgICBjb25zdCBjaGlsZFByb3BzU2VsZWN0b3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnkoc3RvcmUuZGlzcGF0Y2gsIHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMpO1xuICAgICAgfSwgW3N0b3JlXSk7XG4gICAgICBjb25zdCBbc3Vic2NyaXB0aW9uLCBub3RpZnlOZXN0ZWRTdWJzXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcylcbiAgICAgICAgICByZXR1cm4gTk9fU1VCU0NSSVBUSU9OX0FSUkFZO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24yID0gY3JlYXRlU3Vic2NyaXB0aW9uKFxuICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgIGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHZvaWQgMCA6IGNvbnRleHRWYWx1ZS5zdWJzY3JpcHRpb25cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgbm90aWZ5TmVzdGVkU3ViczIgPSBzdWJzY3JpcHRpb24yLm5vdGlmeU5lc3RlZFN1YnMuYmluZChzdWJzY3JpcHRpb24yKTtcbiAgICAgICAgcmV0dXJuIFtzdWJzY3JpcHRpb24yLCBub3RpZnlOZXN0ZWRTdWJzMl07XG4gICAgICB9LCBbc3RvcmUsIGRpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlXSk7XG4gICAgICBjb25zdCBvdmVycmlkZGVuQ29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChkaWRTdG9yZUNvbWVGcm9tUHJvcHMpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uY29udGV4dFZhbHVlLFxuICAgICAgICAgIHN1YnNjcmlwdGlvblxuICAgICAgICB9O1xuICAgICAgfSwgW2RpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlLCBzdWJzY3JpcHRpb25dKTtcbiAgICAgIGNvbnN0IGxhc3RDaGlsZFByb3BzID0gUmVhY3QudXNlUmVmKHZvaWQgMCk7XG4gICAgICBjb25zdCBsYXN0V3JhcHBlclByb3BzID0gUmVhY3QudXNlUmVmKHdyYXBwZXJQcm9wcyk7XG4gICAgICBjb25zdCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlID0gUmVhY3QudXNlUmVmKHZvaWQgMCk7XG4gICAgICBjb25zdCByZW5kZXJJc1NjaGVkdWxlZCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgICBjb25zdCBpc01vdW50ZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgICAgY29uc3QgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvciA9IFJlYWN0LnVzZVJlZihcbiAgICAgICAgdm9pZCAwXG4gICAgICApO1xuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgfSwgW10pO1xuICAgICAgY29uc3QgYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgJiYgd3JhcHBlclByb3BzID09PSBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaGlsZFByb3BzU2VsZWN0b3Ioc3RvcmUuZ2V0U3RhdGUoKSwgd3JhcHBlclByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgfSwgW3N0b3JlLCB3cmFwcGVyUHJvcHNdKTtcbiAgICAgIGNvbnN0IHN1YnNjcmliZUZvclJlYWN0ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZSA9IChyZWFjdExpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlVXBkYXRlcyhcbiAgICAgICAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2hpbGRQcm9wc1NlbGVjdG9yLFxuICAgICAgICAgICAgbGFzdFdyYXBwZXJQcm9wcyxcbiAgICAgICAgICAgIGxhc3RDaGlsZFByb3BzLFxuICAgICAgICAgICAgcmVuZGVySXNTY2hlZHVsZWQsXG4gICAgICAgICAgICBpc01vdW50ZWQsXG4gICAgICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLFxuICAgICAgICAgICAgbm90aWZ5TmVzdGVkU3VicyxcbiAgICAgICAgICAgIHJlYWN0TGlzdGVuZXJcbiAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlO1xuICAgICAgfSwgW3N1YnNjcmlwdGlvbl0pO1xuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGNhcHR1cmVXcmFwcGVyUHJvcHMsIFtcbiAgICAgICAgbGFzdFdyYXBwZXJQcm9wcyxcbiAgICAgICAgbGFzdENoaWxkUHJvcHMsXG4gICAgICAgIHJlbmRlcklzU2NoZWR1bGVkLFxuICAgICAgICB3cmFwcGVyUHJvcHMsXG4gICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsXG4gICAgICAgIG5vdGlmeU5lc3RlZFN1YnNcbiAgICAgIF0pO1xuICAgICAgbGV0IGFjdHVhbENoaWxkUHJvcHM7XG4gICAgICB0cnkge1xuICAgICAgICBhY3R1YWxDaGlsZFByb3BzID0gdXNlU3luY0V4dGVybmFsU3RvcmUoXG4gICAgICAgICAgLy8gVE9ETyBXZSdyZSBwYXNzaW5nIHRocm91Z2ggYSBiaWcgd3JhcHBlciB0aGF0IGRvZXMgYSBidW5jaCBvZiBleHRyYSBzaWRlIGVmZmVjdHMgYmVzaWRlcyBzdWJzY3JpYmluZ1xuICAgICAgICAgIHN1YnNjcmliZUZvclJlYWN0LFxuICAgICAgICAgIC8vIFRPRE8gVGhpcyBpcyBpbmNyZWRpYmx5IGhhY2t5LiBXZSd2ZSBhbHJlYWR5IHByb2Nlc3NlZCB0aGUgc3RvcmUgdXBkYXRlIGFuZCBjYWxjdWxhdGVkIG5ldyBjaGlsZCBwcm9wcyxcbiAgICAgICAgICAvLyBUT0RPIGFuZCB3ZSdyZSBqdXN0IHBhc3NpbmcgdGhhdCB0aHJvdWdoIHNvIGl0IHRyaWdnZXJzIGEgcmUtcmVuZGVyIGZvciB1cyByYXRoZXIgdGhhbiByZWx5aW5nIG9uIGB1U0VTYC5cbiAgICAgICAgICBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3IsXG4gICAgICAgICAgZ2V0U2VydmVyU3RhdGUgPyAoKSA9PiBjaGlsZFByb3BzU2VsZWN0b3IoZ2V0U2VydmVyU3RhdGUoKSwgd3JhcHBlclByb3BzKSA6IGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvclxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQpIHtcbiAgICAgICAgICA7XG4gICAgICAgICAgZXJyLm1lc3NhZ2UgKz0gYFxuVGhlIGVycm9yIG1heSBiZSBjb3JyZWxhdGVkIHdpdGggdGhpcyBwcmV2aW91cyBlcnJvcjpcbiR7bGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50LnN0YWNrfVxuXG5gO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQgPSB2b2lkIDA7XG4gICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IHZvaWQgMDtcbiAgICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IGFjdHVhbENoaWxkUHJvcHM7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFdyYXBwZWRDb21wb25lbnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLmFjdHVhbENoaWxkUHJvcHMsXG4gICAgICAgICAgICAgIHJlZjogcmVhY3RSZWR1eEZvcndhcmRlZFJlZlxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0sIFtyZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCBXcmFwcGVkQ29tcG9uZW50LCBhY3R1YWxDaGlsZFByb3BzXSk7XG4gICAgICBjb25zdCByZW5kZXJlZENoaWxkID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHtcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dFRvVXNlLlByb3ZpZGVyLCB7IHZhbHVlOiBvdmVycmlkZGVuQ29udGV4dFZhbHVlIH0sIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIH0sIFtDb250ZXh0VG9Vc2UsIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCwgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZV0pO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGQ7XG4gICAgfVxuICAgIGNvbnN0IF9Db25uZWN0ID0gUmVhY3QubWVtbyhDb25uZWN0RnVuY3Rpb24pO1xuICAgIGNvbnN0IENvbm5lY3QgPSBfQ29ubmVjdDtcbiAgICBDb25uZWN0LldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgIENvbm5lY3QuZGlzcGxheU5hbWUgPSBDb25uZWN0RnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICBpZiAoZm9yd2FyZFJlZikge1xuICAgICAgY29uc3QgX2ZvcndhcmRlZCA9IFJlYWN0LmZvcndhcmRSZWYoXG4gICAgICAgIGZ1bmN0aW9uIGZvcndhcmRDb25uZWN0UmVmKHByb3BzLCByZWYpIHtcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29ubmVjdCwgeyAuLi5wcm9wcywgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjogcmVmIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc3QgZm9yd2FyZGVkID0gX2ZvcndhcmRlZDtcbiAgICAgIGZvcndhcmRlZC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgICAgZm9yd2FyZGVkLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBob2lzdE5vblJlYWN0U3RhdGljcyhmb3J3YXJkZWQsIFdyYXBwZWRDb21wb25lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKENvbm5lY3QsIFdyYXBwZWRDb21wb25lbnQpO1xuICB9O1xuICByZXR1cm4gd3JhcFdpdGhDb25uZWN0O1xufVxudmFyIGNvbm5lY3RfZGVmYXVsdCA9IGNvbm5lY3Q7XG5cbi8vIHNyYy9jb21wb25lbnRzL1Byb3ZpZGVyLnRzeFxuZnVuY3Rpb24gUHJvdmlkZXIoe1xuICBzdG9yZSxcbiAgY29udGV4dCxcbiAgY2hpbGRyZW4sXG4gIHNlcnZlclN0YXRlLFxuICBzdGFiaWxpdHlDaGVjayA9IFwib25jZVwiLFxuICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2sgPSBcIm9uY2VcIlxufSkge1xuICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBjcmVhdGVTdWJzY3JpcHRpb24oc3RvcmUpO1xuICAgIHJldHVybiB7XG4gICAgICBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGdldFNlcnZlclN0YXRlOiBzZXJ2ZXJTdGF0ZSA/ICgpID0+IHNlcnZlclN0YXRlIDogdm9pZCAwLFxuICAgICAgc3RhYmlsaXR5Q2hlY2ssXG4gICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2tcbiAgICB9O1xuICB9LCBbc3RvcmUsIHNlcnZlclN0YXRlLCBzdGFiaWxpdHlDaGVjaywgaWRlbnRpdHlGdW5jdGlvbkNoZWNrXSk7XG4gIGNvbnN0IHByZXZpb3VzU3RhdGUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHN0b3JlLmdldFN0YXRlKCksIFtzdG9yZV0pO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IHN1YnNjcmlwdGlvbiB9ID0gY29udGV4dFZhbHVlO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnM7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBzdG9yZS5nZXRTdGF0ZSgpKSB7XG4gICAgICBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicygpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IHZvaWQgMDtcbiAgICB9O1xuICB9LCBbY29udGV4dFZhbHVlLCBwcmV2aW91c1N0YXRlXSk7XG4gIGNvbnN0IENvbnRleHQgPSBjb250ZXh0IHx8IFJlYWN0UmVkdXhDb250ZXh0O1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dFZhbHVlIH0sIGNoaWxkcmVuKTtcbn1cbnZhciBQcm92aWRlcl9kZWZhdWx0ID0gUHJvdmlkZXI7XG5cbi8vIHNyYy9ob29rcy91c2VTdG9yZS50c1xuZnVuY3Rpb24gY3JlYXRlU3RvcmVIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICBjb25zdCB1c2VSZWR1eENvbnRleHQyID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VSZWR1eENvbnRleHQgOiAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dClcbiAgKTtcbiAgY29uc3QgdXNlU3RvcmUyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHVzZVJlZHV4Q29udGV4dDIoKTtcbiAgICByZXR1cm4gc3RvcmU7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlU3RvcmUyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VTdG9yZTJcbiAgfSk7XG4gIHJldHVybiB1c2VTdG9yZTI7XG59XG52YXIgdXNlU3RvcmUgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlU3RvcmVIb29rKCk7XG5cbi8vIHNyYy9ob29rcy91c2VEaXNwYXRjaC50c1xuZnVuY3Rpb24gY3JlYXRlRGlzcGF0Y2hIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICBjb25zdCB1c2VTdG9yZTIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVN0b3JlIDogY3JlYXRlU3RvcmVIb29rKGNvbnRleHQpO1xuICBjb25zdCB1c2VEaXNwYXRjaDIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZTIoKTtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2g7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlRGlzcGF0Y2gyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VEaXNwYXRjaDJcbiAgfSk7XG4gIHJldHVybiB1c2VEaXNwYXRjaDI7XG59XG52YXIgdXNlRGlzcGF0Y2ggPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlRGlzcGF0Y2hIb29rKCk7XG5cbi8vIHNyYy9leHBvcnRzLnRzXG52YXIgYmF0Y2ggPSBkZWZhdWx0Tm9vcEJhdGNoO1xuXG4vLyBzcmMvaW5kZXgudHNcbmluaXRpYWxpemVVc2VTZWxlY3Rvcih1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjIpO1xuaW5pdGlhbGl6ZUNvbm5lY3QoUmVhY3QyLnVzZVN5bmNFeHRlcm5hbFN0b3JlKTtcbmV4cG9ydCB7XG4gIFByb3ZpZGVyX2RlZmF1bHQgYXMgUHJvdmlkZXIsXG4gIFJlYWN0UmVkdXhDb250ZXh0LFxuICBiYXRjaCxcbiAgY29ubmVjdF9kZWZhdWx0IGFzIGNvbm5lY3QsXG4gIGNyZWF0ZURpc3BhdGNoSG9vayxcbiAgY3JlYXRlU2VsZWN0b3JIb29rLFxuICBjcmVhdGVTdG9yZUhvb2ssXG4gIHNoYWxsb3dFcXVhbCxcbiAgdXNlRGlzcGF0Y2gsXG4gIHVzZVNlbGVjdG9yLFxuICB1c2VTdG9yZVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LXJlZHV4Lm1qcy5tYXAiLCJcInVzZSBjbGllbnRcIjtcbmZ1bmN0aW9uIE10KHQpe2lmKCF0fHx0eXBlb2YgZG9jdW1lbnQ9PVwidW5kZWZpbmVkXCIpcmV0dXJuO2xldCBvPWRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtlLnR5cGU9XCJ0ZXh0L2Nzc1wiLG8uZmlyc3RDaGlsZD9vLmluc2VydEJlZm9yZShlLG8uZmlyc3RDaGlsZCk6by5hcHBlbmRDaGlsZChlKSxlLnN0eWxlU2hlZXQ/ZS5zdHlsZVNoZWV0LmNzc1RleHQ9dDplLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpKX1NdChgOnJvb3R7LS10b2FzdGlmeS1jb2xvci1saWdodDogI2ZmZjstLXRvYXN0aWZ5LWNvbG9yLWRhcms6ICMxMjEyMTI7LS10b2FzdGlmeS1jb2xvci1pbmZvOiAjMzQ5OGRiOy0tdG9hc3RpZnktY29sb3Itc3VjY2VzczogIzA3YmMwYzstLXRvYXN0aWZ5LWNvbG9yLXdhcm5pbmc6ICNmMWM0MGY7LS10b2FzdGlmeS1jb2xvci1lcnJvcjogaHNsKDYsIDc4JSwgNTclKTstLXRvYXN0aWZ5LWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KTstLXRvYXN0aWZ5LWljb24tY29sb3ItaW5mbzogdmFyKC0tdG9hc3RpZnktY29sb3ItaW5mbyk7LS10b2FzdGlmeS1pY29uLWNvbG9yLXN1Y2Nlc3M6IHZhcigtLXRvYXN0aWZ5LWNvbG9yLXN1Y2Nlc3MpOy0tdG9hc3RpZnktaWNvbi1jb2xvci13YXJuaW5nOiB2YXIoLS10b2FzdGlmeS1jb2xvci13YXJuaW5nKTstLXRvYXN0aWZ5LWljb24tY29sb3ItZXJyb3I6IHZhcigtLXRvYXN0aWZ5LWNvbG9yLWVycm9yKTstLXRvYXN0aWZ5LWNvbnRhaW5lci13aWR0aDogZml0LWNvbnRlbnQ7LS10b2FzdGlmeS10b2FzdC13aWR0aDogMzIwcHg7LS10b2FzdGlmeS10b2FzdC1vZmZzZXQ6IDE2cHg7LS10b2FzdGlmeS10b2FzdC10b3A6IG1heCh2YXIoLS10b2FzdGlmeS10b2FzdC1vZmZzZXQpLCBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpOy0tdG9hc3RpZnktdG9hc3QtcmlnaHQ6IG1heCh2YXIoLS10b2FzdGlmeS10b2FzdC1vZmZzZXQpLCBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSk7LS10b2FzdGlmeS10b2FzdC1sZWZ0OiBtYXgodmFyKC0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0KSwgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7LS10b2FzdGlmeS10b2FzdC1ib3R0b206IG1heCh2YXIoLS10b2FzdGlmeS10b2FzdC1vZmZzZXQpLCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpOy0tdG9hc3RpZnktdG9hc3QtYmFja2dyb3VuZDogI2ZmZjstLXRvYXN0aWZ5LXRvYXN0LXBhZGRpbmc6IDE0cHg7LS10b2FzdGlmeS10b2FzdC1taW4taGVpZ2h0OiA2NHB4Oy0tdG9hc3RpZnktdG9hc3QtbWF4LWhlaWdodDogODAwcHg7LS10b2FzdGlmeS10b2FzdC1iZC1yYWRpdXM6IDZweDstLXRvYXN0aWZ5LXRvYXN0LXNoYWRvdzogMHB4IDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgLjEpOy0tdG9hc3RpZnktZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7LS10b2FzdGlmeS16LWluZGV4OiA5OTk5Oy0tdG9hc3RpZnktdGV4dC1jb2xvci1saWdodDogIzc1NzU3NTstLXRvYXN0aWZ5LXRleHQtY29sb3ItZGFyazogI2ZmZjstLXRvYXN0aWZ5LXRleHQtY29sb3ItaW5mbzogI2ZmZjstLXRvYXN0aWZ5LXRleHQtY29sb3Itc3VjY2VzczogI2ZmZjstLXRvYXN0aWZ5LXRleHQtY29sb3Itd2FybmluZzogI2ZmZjstLXRvYXN0aWZ5LXRleHQtY29sb3ItZXJyb3I6ICNmZmY7LS10b2FzdGlmeS1zcGlubmVyLWNvbG9yOiAjNjE2MTYxOy0tdG9hc3RpZnktc3Bpbm5lci1jb2xvci1lbXB0eS1hcmVhOiAjZTBlMGUwOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtbGlnaHQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRjZDk2NCwgIzVhYzhmYSwgIzAwN2FmZiwgIzM0YWFkYywgIzU4NTZkNiwgI2ZmMmQ1NSk7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1kYXJrOiAjYmI4NmZjOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtaW5mbzogdmFyKC0tdG9hc3RpZnktY29sb3ItaW5mbyk7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1zdWNjZXNzOiB2YXIoLS10b2FzdGlmeS1jb2xvci1zdWNjZXNzKTstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLXdhcm5pbmc6IHZhcigtLXRvYXN0aWZ5LWNvbG9yLXdhcm5pbmcpOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtZXJyb3I6IHZhcigtLXRvYXN0aWZ5LWNvbG9yLWVycm9yKTstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWJnbzogLjJ9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXJ7ei1pbmRleDp2YXIoLS10b2FzdGlmeS16LWluZGV4KTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsdmFyKC0tdG9hc3RpZnktei1pbmRleCkpO3Bvc2l0aW9uOmZpeGVkO3dpZHRoOnZhcigtLXRvYXN0aWZ5LWNvbnRhaW5lci13aWR0aCk7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOiNmZmY7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLWxlZnR7dG9wOnZhcigtLXRvYXN0aWZ5LXRvYXN0LXRvcCk7bGVmdDp2YXIoLS10b2FzdGlmeS10b2FzdC1sZWZ0KX0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLWNlbnRlcnt0b3A6dmFyKC0tdG9hc3RpZnktdG9hc3QtdG9wKTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpO2FsaWduLWl0ZW1zOmNlbnRlcn0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLXJpZ2h0e3RvcDp2YXIoLS10b2FzdGlmeS10b2FzdC10b3ApO3JpZ2h0OnZhcigtLXRvYXN0aWZ5LXRvYXN0LXJpZ2h0KTthbGlnbi1pdGVtczplbmR9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1sZWZ0e2JvdHRvbTp2YXIoLS10b2FzdGlmeS10b2FzdC1ib3R0b20pO2xlZnQ6dmFyKC0tdG9hc3RpZnktdG9hc3QtbGVmdCl9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1jZW50ZXJ7Ym90dG9tOnZhcigtLXRvYXN0aWZ5LXRvYXN0LWJvdHRvbSk7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKTthbGlnbi1pdGVtczpjZW50ZXJ9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1yaWdodHtib3R0b206dmFyKC0tdG9hc3RpZnktdG9hc3QtYm90dG9tKTtyaWdodDp2YXIoLS10b2FzdGlmeS10b2FzdC1yaWdodCk7YWxpZ24taXRlbXM6ZW5kfS5Ub2FzdGlmeV9fdG9hc3R7LS15OiAwO3Bvc2l0aW9uOnJlbGF0aXZlO3RvdWNoLWFjdGlvbjpub25lO3dpZHRoOnZhcigtLXRvYXN0aWZ5LXRvYXN0LXdpZHRoKTttaW4taGVpZ2h0OnZhcigtLXRvYXN0aWZ5LXRvYXN0LW1pbi1oZWlnaHQpO2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW4tYm90dG9tOjFyZW07cGFkZGluZzp2YXIoLS10b2FzdGlmeS10b2FzdC1wYWRkaW5nKTtib3JkZXItcmFkaXVzOnZhcigtLXRvYXN0aWZ5LXRvYXN0LWJkLXJhZGl1cyk7Ym94LXNoYWRvdzp2YXIoLS10b2FzdGlmeS10b2FzdC1zaGFkb3cpO21heC1oZWlnaHQ6dmFyKC0tdG9hc3RpZnktdG9hc3QtbWF4LWhlaWdodCk7Zm9udC1mYW1pbHk6dmFyKC0tdG9hc3RpZnktZm9udC1mYW1pbHkpO3otaW5kZXg6MDtkaXNwbGF5OmZsZXg7ZmxleDoxIGF1dG87YWxpZ24taXRlbXM6Y2VudGVyO3dvcmQtYnJlYWs6YnJlYWstd29yZH1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lcnt3aWR0aDoxMDB2dztsZWZ0OmVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7bWFyZ2luOjB9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1sZWZ0LC5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS10b3AtY2VudGVyLC5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS10b3AtcmlnaHR7dG9wOmVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDApfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tbGVmdCwuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tYm90dG9tLWNlbnRlciwuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tYm90dG9tLXJpZ2h0e2JvdHRvbTplbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tcnRse3JpZ2h0OmVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO2xlZnQ6aW5pdGlhbH0uVG9hc3RpZnlfX3RvYXN0ey0tdG9hc3RpZnktdG9hc3Qtd2lkdGg6IDEwMCU7bWFyZ2luLWJvdHRvbTowO2JvcmRlci1yYWRpdXM6MH19LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXJbZGF0YS1zdGFja2VkPXRydWVde3dpZHRoOnZhcigtLXRvYXN0aWZ5LXRvYXN0LXdpZHRoKX0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2Vke3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCkgc2NhbGUodmFyKC0tcykpO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zc30uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtY29sbGFwc2VkXSAuVG9hc3RpZnlfX3RvYXN0LWJvZHksLlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLWNvbGxhcHNlZF0gLlRvYXN0aWZ5X19jbG9zZS1idXR0b257dHJhbnNpdGlvbjpvcGFjaXR5IC4xc30uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtY29sbGFwc2VkPWZhbHNlXXtvdmVyZmxvdzp2aXNpYmxlfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1jb2xsYXBzZWQ9dHJ1ZV06bm90KDpsYXN0LWNoaWxkKT4qe29wYWNpdHk6MH0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkOmFmdGVye2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDtoZWlnaHQ6Y2FsYyh2YXIoLS1nKSAqIDFweCk7Ym90dG9tOjEwMCV9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLXBvcz10b3Bde3RvcDowfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1wb3M9Ym90XXtib3R0b206MH0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtcG9zPWJvdF0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkOmJlZm9yZXt0cmFuc2Zvcm0tb3JpZ2luOnRvcH0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtcG9zPXRvcF0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkOmJlZm9yZXt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbX0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkOmJlZm9yZXtjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7aGVpZ2h0OjEwMCU7dHJhbnNmb3JtOnNjYWxlWSgzKTt6LWluZGV4Oi0xfS5Ub2FzdGlmeV9fdG9hc3QtLXJ0bHtkaXJlY3Rpb246cnRsfS5Ub2FzdGlmeV9fdG9hc3QtLWNsb3NlLW9uLWNsaWNre2N1cnNvcjpwb2ludGVyfS5Ub2FzdGlmeV9fdG9hc3QtaWNvbnttYXJnaW4taW5saW5lLWVuZDoxMHB4O3dpZHRoOjIycHg7ZmxleC1zaHJpbms6MDtkaXNwbGF5OmZsZXh9LlRvYXN0aWZ5LS1hbmltYXRle2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246LjVzfS5Ub2FzdGlmeS0tYW5pbWF0ZS1pY29ue2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246LjNzfS5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWRhcmt7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1kYXJrKTtjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLWRhcmspfS5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWxpZ2h0LC5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3RvYXN0LS1kZWZhdWx0e2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItbGlnaHQpO2NvbG9yOnZhcigtLXRvYXN0aWZ5LXRleHQtY29sb3ItbGlnaHQpfS5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3RvYXN0LS1pbmZve2NvbG9yOnZhcigtLXRvYXN0aWZ5LXRleHQtY29sb3ItaW5mbyk7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1pbmZvKX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0tc3VjY2Vzc3tjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLXN1Y2Nlc3MpO2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3Itc3VjY2Vzcyl9LlRvYXN0aWZ5X190b2FzdC10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fdG9hc3QtLXdhcm5pbmd7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci13YXJuaW5nKTtiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXdhcm5pbmcpfS5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3RvYXN0LS1lcnJvcntjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLWVycm9yKTtiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLWVycm9yKX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tbGlnaHR7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1saWdodCl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWRhcmt7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1kYXJrKX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0taW5mb3tiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWluZm8pfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1zdWNjZXNze2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3Mtc3VjY2Vzcyl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXdhcm5pbmd7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy13YXJuaW5nKX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tZXJyb3J7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1lcnJvcil9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0taW5mbywuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1zdWNjZXNzLC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXdhcm5pbmcsLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tZXJyb3J7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci10cmFuc3BhcmVudCl9LlRvYXN0aWZ5X19jbG9zZS1idXR0b257Y29sb3I6I2ZmZjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NnB4O3JpZ2h0OjZweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O291dGxpbmU6bm9uZTtib3JkZXI6bm9uZTtwYWRkaW5nOjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTouNzt0cmFuc2l0aW9uOi4zcyBlYXNlO3otaW5kZXg6MX0uVG9hc3RpZnlfX3RvYXN0LS1ydGwgLlRvYXN0aWZ5X19jbG9zZS1idXR0b257bGVmdDo2cHg7cmlnaHQ6dW5zZXR9LlRvYXN0aWZ5X19jbG9zZS1idXR0b24tLWxpZ2h0e2NvbG9yOiMwMDA7b3BhY2l0eTouM30uVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbj5zdmd7ZmlsbDpjdXJyZW50Q29sb3I7aGVpZ2h0OjE2cHg7d2lkdGg6MTRweH0uVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbjpob3ZlciwuVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbjpmb2N1c3tvcGFjaXR5OjF9QGtleWZyYW1lcyBUb2FzdGlmeV9fdHJhY2tQcm9ncmVzc3swJXt0cmFuc2Zvcm06c2NhbGVYKDEpfXRve3RyYW5zZm9ybTpzY2FsZVgoMCl9fS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFye3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtvcGFjaXR5Oi43O3RyYW5zZm9ybS1vcmlnaW46bGVmdH0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tYW5pbWF0ZWR7YW5pbWF0aW9uOlRvYXN0aWZ5X190cmFja1Byb2dyZXNzIGxpbmVhciAxIGZvcndhcmRzfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1jb250cm9sbGVke3RyYW5zaXRpb246dHJhbnNmb3JtIC4yc30uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tcnRse3JpZ2h0OjA7bGVmdDppbml0aWFsO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQ7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czppbml0aWFsfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13cnB7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6aGlkZGVuO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDo1cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS10b2FzdGlmeS10b2FzdC1iZC1yYWRpdXMpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLXRvYXN0aWZ5LXRvYXN0LWJkLXJhZGl1cyl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXdycFtkYXRhLWhpZGRlbj10cnVlXXtvcGFjaXR5OjB9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWJne29wYWNpdHk6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtYmdvKTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5Ub2FzdGlmeV9fc3Bpbm5lcnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MnB4IHNvbGlkO2JvcmRlci1yYWRpdXM6MTAwJTtib3JkZXItY29sb3I6dmFyKC0tdG9hc3RpZnktc3Bpbm5lci1jb2xvci1lbXB0eS1hcmVhKTtib3JkZXItcmlnaHQtY29sb3I6dmFyKC0tdG9hc3RpZnktc3Bpbm5lci1jb2xvcik7YW5pbWF0aW9uOlRvYXN0aWZ5X19zcGluIC42NXMgbGluZWFyIGluZmluaXRlfUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZUluUmlnaHR7MCUsNjAlLDc1JSw5MCUsdG97YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDMwMDBweCwwLDApfTYwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yNXB4LDAsMCl9NzUle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMHB4LDAsMCl9OTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXB4LDAsMCl9dG97dHJhbnNmb3JtOm5vbmV9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZU91dFJpZ2h0ezIwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMHB4LHZhcigtLXkpLDApfXRve29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VJbkxlZnR7MCUsNjAlLDc1JSw5MCUsdG97YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zMDAwcHgsMCwwKX02MCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyNXB4LDAsMCl9NzUle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTBweCwwLDApfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNXB4LDAsMCl9dG97dHJhbnNmb3JtOm5vbmV9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZU91dExlZnR7MjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjBweCx2YXIoLS15KSwwKX10b3tvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMDAwcHgsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZUluVXB7MCUsNjAlLDc1JSw5MCUsdG97YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMzAwMHB4LDApfTYwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwcHgsMCl9NzUle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCl9OTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01cHgsMCl9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZU91dFVwezIwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKHZhcigtLXkpIC0gMTBweCksMCl9NDAlLDQ1JXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYyh2YXIoLS15KSArIDIwcHgpLDApfXRve29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VJbkRvd257MCUsNjAlLDc1JSw5MCUsdG97YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwMDBweCwwKX02MCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDI1cHgsMCl9NzUle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1cHgsMCl9dG97dHJhbnNmb3JtOm5vbmV9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZU91dERvd257MjAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLGNhbGModmFyKC0teSkgLSAxMHB4KSwwKX00MCUsNDUle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKHZhcigtLXkpICsgMjBweCksMCl9dG97b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKX19LlRvYXN0aWZ5X19ib3VuY2UtZW50ZXItLXRvcC1sZWZ0LC5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS1ib3R0b20tbGVmdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlSW5MZWZ0fS5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS10b3AtcmlnaHQsLlRvYXN0aWZ5X19ib3VuY2UtZW50ZXItLWJvdHRvbS1yaWdodHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlSW5SaWdodH0uVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tdG9wLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlSW5Eb3dufS5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS1ib3R0b20tY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VJblVwfS5Ub2FzdGlmeV9fYm91bmNlLWV4aXQtLXRvcC1sZWZ0LC5Ub2FzdGlmeV9fYm91bmNlLWV4aXQtLWJvdHRvbS1sZWZ0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VPdXRMZWZ0fS5Ub2FzdGlmeV9fYm91bmNlLWV4aXQtLXRvcC1yaWdodCwuVG9hc3RpZnlfX2JvdW5jZS1leGl0LS1ib3R0b20tcmlnaHR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZU91dFJpZ2h0fS5Ub2FzdGlmeV9fYm91bmNlLWV4aXQtLXRvcC1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZU91dFVwfS5Ub2FzdGlmeV9fYm91bmNlLWV4aXQtLWJvdHRvbS1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZU91dERvd259QGtleWZyYW1lcyBUb2FzdGlmeV9fem9vbUluezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyl9NTAle29wYWNpdHk6MX19QGtleWZyYW1lcyBUb2FzdGlmeV9fem9vbU91dHswJXtvcGFjaXR5OjF9NTAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKSBzY2FsZTNkKC4zLC4zLC4zKX10b3tvcGFjaXR5OjB9fS5Ub2FzdGlmeV9fem9vbS1lbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fem9vbUlufS5Ub2FzdGlmeV9fem9vbS1leGl0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X196b29tT3V0fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2ZsaXBJbnswJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjtvcGFjaXR5OjB9NDAle3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn02MCV7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDEwZGVnKTtvcGFjaXR5OjF9ODAle3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtNWRlZyl9dG97dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KX19QGtleWZyYW1lcyBUb2FzdGlmeV9fZmxpcE91dHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKSBwZXJzcGVjdGl2ZSg0MDBweCl9MzAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApIHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0yMGRlZyk7b3BhY2l0eToxfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApIHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtvcGFjaXR5OjB9fS5Ub2FzdGlmeV9fZmxpcC1lbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fZmxpcElufS5Ub2FzdGlmeV9fZmxpcC1leGl0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19mbGlwT3V0fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlSW5SaWdodHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTEwJSwwLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVJbkxlZnR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMTAlLDAsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZUluVXB7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTEwJSwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlSW5Eb3duezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMTAlLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVPdXRSaWdodHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTEwJSx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVPdXRMZWZ0ezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfXRve3Zpc2liaWxpdHk6aGlkZGVuO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTEwJSx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVPdXREb3duezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfXRve3Zpc2liaWxpdHk6aGlkZGVuO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDUwMHB4LDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZU91dFVwezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfXRve3Zpc2liaWxpdHk6aGlkZGVuO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01MDBweCwwKX19LlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tdG9wLWxlZnQsLlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tYm90dG9tLWxlZnR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlSW5MZWZ0fS5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLXRvcC1yaWdodCwuVG9hc3RpZnlfX3NsaWRlLWVudGVyLS1ib3R0b20tcmlnaHR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlSW5SaWdodH0uVG9hc3RpZnlfX3NsaWRlLWVudGVyLS10b3AtY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZUluRG93bn0uVG9hc3RpZnlfX3NsaWRlLWVudGVyLS1ib3R0b20tY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZUluVXB9LlRvYXN0aWZ5X19zbGlkZS1leGl0LS10b3AtbGVmdCwuVG9hc3RpZnlfX3NsaWRlLWV4aXQtLWJvdHRvbS1sZWZ0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZU91dExlZnQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi1kdXJhdGlvbjouM3N9LlRvYXN0aWZ5X19zbGlkZS1leGl0LS10b3AtcmlnaHQsLlRvYXN0aWZ5X19zbGlkZS1leGl0LS1ib3R0b20tcmlnaHR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlT3V0UmlnaHQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi1kdXJhdGlvbjouM3N9LlRvYXN0aWZ5X19zbGlkZS1leGl0LS10b3AtY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZU91dFVwO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tZHVyYXRpb246LjNzfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tYm90dG9tLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVPdXREb3duO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tZHVyYXRpb246LjNzfUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NwaW57MCV7dHJhbnNmb3JtOnJvdGF0ZSgwKX10b3t0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fVxuYCk7aW1wb3J0e2lzVmFsaWRFbGVtZW50IGFzICR0fWZyb21cInJlYWN0XCI7dmFyIEw9dD0+dHlwZW9mIHQ9PVwibnVtYmVyXCImJiFpc05hTih0KSxOPXQ9PnR5cGVvZiB0PT1cInN0cmluZ1wiLFA9dD0+dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIixtdD10PT5OKHQpfHxMKHQpLEI9dD0+Tih0KXx8UCh0KT90Om51bGwscHQ9KHQsbyk9PnQ9PT0hMXx8TCh0KSYmdD4wP3Q6byx6PXQ9PiR0KHQpfHxOKHQpfHxQKHQpfHxMKHQpO2ltcG9ydCB1dCx7dXNlRWZmZWN0IGFzIFJ0LHVzZUxheW91dEVmZmVjdCBhcyBCdCx1c2VSZWYgYXMgenR9ZnJvbVwicmVhY3RcIjtmdW5jdGlvbiBaKHQsbyxlPTMwMCl7bGV0e3Njcm9sbEhlaWdodDpyLHN0eWxlOnN9PXQ7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57cy5taW5IZWlnaHQ9XCJpbml0aWFsXCIscy5oZWlnaHQ9citcInB4XCIscy50cmFuc2l0aW9uPWBhbGwgJHtlfW1zYCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PntzLmhlaWdodD1cIjBcIixzLnBhZGRpbmc9XCIwXCIscy5tYXJnaW49XCIwXCIsc2V0VGltZW91dChvLGUpfSl9KX1mdW5jdGlvbiAkKHtlbnRlcjp0LGV4aXQ6byxhcHBlbmRQb3NpdGlvbjplPSExLGNvbGxhcHNlOnI9ITAsY29sbGFwc2VEdXJhdGlvbjpzPTMwMH0pe3JldHVybiBmdW5jdGlvbih7Y2hpbGRyZW46YSxwb3NpdGlvbjpkLHByZXZlbnRFeGl0VHJhbnNpdGlvbjpjLGRvbmU6VCxub2RlUmVmOmcsaXNJbjp2LHBsYXlUb2FzdDp4fSl7bGV0IEM9ZT9gJHt0fS0tJHtkfWA6dCxTPWU/YCR7b30tLSR7ZH1gOm8sRT16dCgwKTtyZXR1cm4gQnQoKCk9PntsZXQgZj1nLmN1cnJlbnQscD1DLnNwbGl0KFwiIFwiKSxiPW49PntuLnRhcmdldD09PWcuY3VycmVudCYmKHgoKSxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIixiKSxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25jYW5jZWxcIixiKSxFLmN1cnJlbnQ9PT0wJiZuLnR5cGUhPT1cImFuaW1hdGlvbmNhbmNlbFwiJiZmLmNsYXNzTGlzdC5yZW1vdmUoLi4ucCkpfTsoKCk9PntmLmNsYXNzTGlzdC5hZGQoLi4ucCksZi5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsYiksZi5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uY2FuY2VsXCIsYil9KSgpfSxbXSksUnQoKCk9PntsZXQgZj1nLmN1cnJlbnQscD0oKT0+e2YucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLHApLHI/WihmLFQscyk6VCgpfTt2fHwoYz9wKCk6KCgpPT57RS5jdXJyZW50PTEsZi5jbGFzc05hbWUrPWAgJHtTfWAsZi5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIscCl9KSgpKX0sW3ZdKSx1dC5jcmVhdGVFbGVtZW50KHV0LkZyYWdtZW50LG51bGwsYSl9fWltcG9ydHtjbG9uZUVsZW1lbnQgYXMgRnQsaXNWYWxpZEVsZW1lbnQgYXMgVXR9ZnJvbVwicmVhY3RcIjtmdW5jdGlvbiBKKHQsbyl7cmV0dXJue2NvbnRlbnQ6dHQodC5jb250ZW50LHQucHJvcHMpLGNvbnRhaW5lcklkOnQucHJvcHMuY29udGFpbmVySWQsaWQ6dC5wcm9wcy50b2FzdElkLHRoZW1lOnQucHJvcHMudGhlbWUsdHlwZTp0LnByb3BzLnR5cGUsZGF0YTp0LnByb3BzLmRhdGF8fHt9LGlzTG9hZGluZzp0LnByb3BzLmlzTG9hZGluZyxpY29uOnQucHJvcHMuaWNvbixyZWFzb246dC5yZW1vdmFsUmVhc29uLHN0YXR1czpvfX1mdW5jdGlvbiB0dCh0LG8sZT0hMSl7cmV0dXJuIFV0KHQpJiYhTih0LnR5cGUpP0Z0KHQse2Nsb3NlVG9hc3Q6by5jbG9zZVRvYXN0LHRvYXN0UHJvcHM6byxkYXRhOm8uZGF0YSxpc1BhdXNlZDplfSk6UCh0KT90KHtjbG9zZVRvYXN0Om8uY2xvc2VUb2FzdCx0b2FzdFByb3BzOm8sZGF0YTpvLmRhdGEsaXNQYXVzZWQ6ZX0pOnR9aW1wb3J0IG90IGZyb21cInJlYWN0XCI7ZnVuY3Rpb24geXQoe2Nsb3NlVG9hc3Q6dCx0aGVtZTpvLGFyaWFMYWJlbDplPVwiY2xvc2VcIn0pe3JldHVybiBvdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIse2NsYXNzTmFtZTpgVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbiBUb2FzdGlmeV9fY2xvc2UtYnV0dG9uLS0ke299YCx0eXBlOlwiYnV0dG9uXCIsb25DbGljazpyPT57ci5zdG9wUHJvcGFnYXRpb24oKSx0KCEwKX0sXCJhcmlhLWxhYmVsXCI6ZX0sb3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCIsdmlld0JveDpcIjAgMCAxNCAxNlwifSxvdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtmaWxsUnVsZTpcImV2ZW5vZGRcIixkOlwiTTcuNzEgOC4yM2wzLjc1IDMuNzUtMS40OCAxLjQ4LTMuNzUtMy43NS0zLjc1IDMuNzVMMSAxMS45OGwzLjc1LTMuNzVMMSA0LjQ4IDIuNDggM2wzLjc1IDMuNzVMOS45OCAzbDEuNDggMS40OC0zLjc1IDMuNzV6XCJ9KSkpfWltcG9ydCBldCBmcm9tXCJyZWFjdFwiO2ltcG9ydCBUdCBmcm9tXCJjbHN4XCI7ZnVuY3Rpb24gZ3Qoe2RlbGF5OnQsaXNSdW5uaW5nOm8sY2xvc2VUb2FzdDplLHR5cGU6cj1cImRlZmF1bHRcIixoaWRlOnMsY2xhc3NOYW1lOmwsY29udHJvbGxlZFByb2dyZXNzOmEscHJvZ3Jlc3M6ZCxydGw6Yyxpc0luOlQsdGhlbWU6Z30pe2xldCB2PXN8fGEmJmQ9PT0wLHg9e2FuaW1hdGlvbkR1cmF0aW9uOmAke3R9bXNgLGFuaW1hdGlvblBsYXlTdGF0ZTpvP1wicnVubmluZ1wiOlwicGF1c2VkXCJ9O2EmJih4LnRyYW5zZm9ybT1gc2NhbGVYKCR7ZH0pYCk7bGV0IEM9VHQoXCJUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyXCIsYT9cIlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWNvbnRyb2xsZWRcIjpcIlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWFuaW1hdGVkXCIsYFRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLSR7Z31gLGBUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS0ke3J9YCx7W1wiVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tcnRsXCJdOmN9KSxTPVAobCk/bCh7cnRsOmMsdHlwZTpyLGRlZmF1bHRDbGFzc05hbWU6Q30pOlR0KEMsbCksRT17W2EmJmQ+PTE/XCJvblRyYW5zaXRpb25FbmRcIjpcIm9uQW5pbWF0aW9uRW5kXCJdOmEmJmQ8MT9udWxsOigpPT57VCYmZSgpfX07cmV0dXJuIGV0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0td3JwXCIsXCJkYXRhLWhpZGRlblwiOnZ9LGV0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOmBUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1iZyBUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS0ke2d9IFRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLSR7cn1gfSksZXQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtyb2xlOlwicHJvZ3Jlc3NiYXJcIixcImFyaWEtaGlkZGVuXCI6dj9cInRydWVcIjpcImZhbHNlXCIsXCJhcmlhLWxhYmVsXCI6XCJub3RpZmljYXRpb24gdGltZXJcIixjbGFzc05hbWU6UyxzdHlsZTp4LC4uLkV9KSl9aW1wb3J0IER0IGZyb21cImNsc3hcIjtpbXBvcnQgY3Qse3VzZUVmZmVjdCBhcyB5byx1c2VSZWYgYXMgVG8sdXNlU3RhdGUgYXMgZ299ZnJvbVwicmVhY3RcIjt2YXIgWHQ9MSxhdD0oKT0+YCR7WHQrK31gO2Z1bmN0aW9uIF90KHQsbyxlKXtsZXQgcj0xLHM9MCxsPVtdLGE9W10sZD1vLGM9bmV3IE1hcCxUPW5ldyBTZXQsZz1pPT4oVC5hZGQoaSksKCk9PlQuZGVsZXRlKGkpKSx2PSgpPT57YT1BcnJheS5mcm9tKGMudmFsdWVzKCkpLFQuZm9yRWFjaChpPT5pKCkpfSx4PSh7Y29udGFpbmVySWQ6aSx0b2FzdElkOm4sdXBkYXRlSWQ6dX0pPT57bGV0IGg9aT9pIT09dDp0IT09MSxtPWMuaGFzKG4pJiZ1PT1udWxsO3JldHVybiBofHxtfSxDPShpLG4pPT57Yy5mb3JFYWNoKHU9Pnt2YXIgaDsobj09bnVsbHx8bj09PXUucHJvcHMudG9hc3RJZCkmJigoaD11LnRvZ2dsZSk9PW51bGx8fGguY2FsbCh1LGkpKX0pfSxTPWk9Pnt2YXIgbix1Oyh1PShuPWkucHJvcHMpPT1udWxsP3ZvaWQgMDpuLm9uQ2xvc2UpPT1udWxsfHx1LmNhbGwobixpLnJlbW92YWxSZWFzb24pLGkuaXNBY3RpdmU9ITF9LEU9aT0+e2lmKGk9PW51bGwpYy5mb3JFYWNoKFMpO2Vsc2V7bGV0IG49Yy5nZXQoaSk7biYmUyhuKX12KCl9LGY9KCk9PntzLT1sLmxlbmd0aCxsPVtdfSxwPWk9Pnt2YXIgbSxfO2xldHt0b2FzdElkOm4sdXBkYXRlSWQ6dX09aS5wcm9wcyxoPXU9PW51bGw7aS5zdGFsZUlkJiZjLmRlbGV0ZShpLnN0YWxlSWQpLGkuaXNBY3RpdmU9ITAsYy5zZXQobixpKSx2KCksZShKKGksaD9cImFkZGVkXCI6XCJ1cGRhdGVkXCIpKSxoJiYoKF89KG09aS5wcm9wcykub25PcGVuKT09bnVsbHx8Xy5jYWxsKG0pKX07cmV0dXJue2lkOnQscHJvcHM6ZCxvYnNlcnZlOmcsdG9nZ2xlOkMscmVtb3ZlVG9hc3Q6RSx0b2FzdHM6YyxjbGVhclF1ZXVlOmYsYnVpbGRUb2FzdDooaSxuKT0+e2lmKHgobikpcmV0dXJuO2xldHt0b2FzdElkOnUsdXBkYXRlSWQ6aCxkYXRhOm0sc3RhbGVJZDpfLGRlbGF5Omt9PW4sTT1oPT1udWxsO00mJnMrKztsZXQgQT17Li4uZCxzdHlsZTpkLnRvYXN0U3R5bGUsa2V5OnIrKywuLi5PYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMobikuZmlsdGVyKChbRCxZXSk9PlkhPW51bGwpKSx0b2FzdElkOnUsdXBkYXRlSWQ6aCxkYXRhOm0saXNJbjohMSxjbGFzc05hbWU6QihuLmNsYXNzTmFtZXx8ZC50b2FzdENsYXNzTmFtZSkscHJvZ3Jlc3NDbGFzc05hbWU6QihuLnByb2dyZXNzQ2xhc3NOYW1lfHxkLnByb2dyZXNzQ2xhc3NOYW1lKSxhdXRvQ2xvc2U6bi5pc0xvYWRpbmc/ITE6cHQobi5hdXRvQ2xvc2UsZC5hdXRvQ2xvc2UpLGNsb3NlVG9hc3QoRCl7Yy5nZXQodSkucmVtb3ZhbFJlYXNvbj1ELEUodSl9LGRlbGV0ZVRvYXN0KCl7bGV0IEQ9Yy5nZXQodSk7aWYoRCE9bnVsbCl7aWYoZShKKEQsXCJyZW1vdmVkXCIpKSxjLmRlbGV0ZSh1KSxzLS0sczwwJiYocz0wKSxsLmxlbmd0aD4wKXtwKGwuc2hpZnQoKSk7cmV0dXJufXYoKX19fTtBLmNsb3NlQnV0dG9uPWQuY2xvc2VCdXR0b24sbi5jbG9zZUJ1dHRvbj09PSExfHx6KG4uY2xvc2VCdXR0b24pP0EuY2xvc2VCdXR0b249bi5jbG9zZUJ1dHRvbjpuLmNsb3NlQnV0dG9uPT09ITAmJihBLmNsb3NlQnV0dG9uPXooZC5jbG9zZUJ1dHRvbik/ZC5jbG9zZUJ1dHRvbjohMCk7bGV0IFI9e2NvbnRlbnQ6aSxwcm9wczpBLHN0YWxlSWQ6X307ZC5saW1pdCYmZC5saW1pdD4wJiZzPmQubGltaXQmJk0/bC5wdXNoKFIpOkwoayk/c2V0VGltZW91dCgoKT0+e3AoUil9LGspOnAoUil9LHNldFByb3BzKGkpe2Q9aX0sc2V0VG9nZ2xlOihpLG4pPT57bGV0IHU9Yy5nZXQoaSk7dSYmKHUudG9nZ2xlPW4pfSxpc1RvYXN0QWN0aXZlOmk9Pnt2YXIgbjtyZXR1cm4obj1jLmdldChpKSk9PW51bGw/dm9pZCAwOm4uaXNBY3RpdmV9LGdldFNuYXBzaG90OigpPT5hfX12YXIgST1uZXcgTWFwLEY9W10sc3Q9bmV3IFNldCxWdD10PT5zdC5mb3JFYWNoKG89Pm8odCkpLGJ0PSgpPT5JLnNpemU+MDtmdW5jdGlvbiBRdCgpe0YuZm9yRWFjaCh0PT5udCh0LmNvbnRlbnQsdC5vcHRpb25zKSksRj1bXX12YXIgdnQ9KHQse2NvbnRhaW5lcklkOm99KT0+e3ZhciBlO3JldHVybihlPUkuZ2V0KG98fDEpKT09bnVsbD92b2lkIDA6ZS50b2FzdHMuZ2V0KHQpfTtmdW5jdGlvbiBYKHQsbyl7dmFyIHI7aWYobylyZXR1cm4hISgocj1JLmdldChvKSkhPW51bGwmJnIuaXNUb2FzdEFjdGl2ZSh0KSk7bGV0IGU9ITE7cmV0dXJuIEkuZm9yRWFjaChzPT57cy5pc1RvYXN0QWN0aXZlKHQpJiYoZT0hMCl9KSxlfWZ1bmN0aW9uIGh0KHQpe2lmKCFidCgpKXtGPUYuZmlsdGVyKG89PnQhPW51bGwmJm8ub3B0aW9ucy50b2FzdElkIT09dCk7cmV0dXJufWlmKHQ9PW51bGx8fG10KHQpKUkuZm9yRWFjaChvPT57by5yZW1vdmVUb2FzdCh0KX0pO2Vsc2UgaWYodCYmKFwiY29udGFpbmVySWRcImluIHR8fFwiaWRcImluIHQpKXtsZXQgbz1JLmdldCh0LmNvbnRhaW5lcklkKTtvP28ucmVtb3ZlVG9hc3QodC5pZCk6SS5mb3JFYWNoKGU9PntlLnJlbW92ZVRvYXN0KHQuaWQpfSl9fXZhciBDdD0odD17fSk9PntJLmZvckVhY2gobz0+e28ucHJvcHMubGltaXQmJighdC5jb250YWluZXJJZHx8by5pZD09PXQuY29udGFpbmVySWQpJiZvLmNsZWFyUXVldWUoKX0pfTtmdW5jdGlvbiBudCh0LG8pe3oodCkmJihidCgpfHxGLnB1c2goe2NvbnRlbnQ6dCxvcHRpb25zOm99KSxJLmZvckVhY2goZT0+e2UuYnVpbGRUb2FzdCh0LG8pfSkpfWZ1bmN0aW9uIHh0KHQpe3ZhciBvOyhvPUkuZ2V0KHQuY29udGFpbmVySWR8fDEpKT09bnVsbHx8by5zZXRUb2dnbGUodC5pZCx0LmZuKX1mdW5jdGlvbiBydCh0LG8pe0kuZm9yRWFjaChlPT57KG89PW51bGx8fCEobyE9bnVsbCYmby5jb250YWluZXJJZCl8fChvPT1udWxsP3ZvaWQgMDpvLmNvbnRhaW5lcklkKT09PWUuaWQpJiZlLnRvZ2dsZSh0LG89PW51bGw/dm9pZCAwOm8uaWQpfSl9ZnVuY3Rpb24gRXQodCl7bGV0IG89dC5jb250YWluZXJJZHx8MTtyZXR1cm57c3Vic2NyaWJlKGUpe2xldCByPV90KG8sdCxWdCk7SS5zZXQobyxyKTtsZXQgcz1yLm9ic2VydmUoZSk7cmV0dXJuIFF0KCksKCk9PntzKCksSS5kZWxldGUobyl9fSxzZXRQcm9wcyhlKXt2YXIgcjsocj1JLmdldChvKSk9PW51bGx8fHIuc2V0UHJvcHMoZSl9LGdldFNuYXBzaG90KCl7dmFyIGU7cmV0dXJuKGU9SS5nZXQobykpPT1udWxsP3ZvaWQgMDplLmdldFNuYXBzaG90KCl9fX1mdW5jdGlvbiBQdCh0KXtyZXR1cm4gc3QuYWRkKHQpLCgpPT57c3QuZGVsZXRlKHQpfX1mdW5jdGlvbiBXdCh0KXtyZXR1cm4gdCYmKE4odC50b2FzdElkKXx8TCh0LnRvYXN0SWQpKT90LnRvYXN0SWQ6YXQoKX1mdW5jdGlvbiBVKHQsbyl7cmV0dXJuIG50KHQsbyksby50b2FzdElkfWZ1bmN0aW9uIFYodCxvKXtyZXR1cm57Li4ubyx0eXBlOm8mJm8udHlwZXx8dCx0b2FzdElkOld0KG8pfX1mdW5jdGlvbiBRKHQpe3JldHVybihvLGUpPT5VKG8sVih0LGUpKX1mdW5jdGlvbiB5KHQsbyl7cmV0dXJuIFUodCxWKFwiZGVmYXVsdFwiLG8pKX15LmxvYWRpbmc9KHQsbyk9PlUodCxWKFwiZGVmYXVsdFwiLHtpc0xvYWRpbmc6ITAsYXV0b0Nsb3NlOiExLGNsb3NlT25DbGljazohMSxjbG9zZUJ1dHRvbjohMSxkcmFnZ2FibGU6ITEsLi4ub30pKTtmdW5jdGlvbiBHdCh0LHtwZW5kaW5nOm8sZXJyb3I6ZSxzdWNjZXNzOnJ9LHMpe2xldCBsO28mJihsPU4obyk/eS5sb2FkaW5nKG8scyk6eS5sb2FkaW5nKG8ucmVuZGVyLHsuLi5zLC4uLm99KSk7bGV0IGE9e2lzTG9hZGluZzpudWxsLGF1dG9DbG9zZTpudWxsLGNsb3NlT25DbGljazpudWxsLGNsb3NlQnV0dG9uOm51bGwsZHJhZ2dhYmxlOm51bGx9LGQ9KFQsZyx2KT0+e2lmKGc9PW51bGwpe3kuZGlzbWlzcyhsKTtyZXR1cm59bGV0IHg9e3R5cGU6VCwuLi5hLC4uLnMsZGF0YTp2fSxDPU4oZyk/e3JlbmRlcjpnfTpnO3JldHVybiBsP3kudXBkYXRlKGwsey4uLngsLi4uQ30pOnkoQy5yZW5kZXIsey4uLngsLi4uQ30pLHZ9LGM9UCh0KT90KCk6dDtyZXR1cm4gYy50aGVuKFQ9PmQoXCJzdWNjZXNzXCIscixUKSkuY2F0Y2goVD0+ZChcImVycm9yXCIsZSxUKSksY315LnByb21pc2U9R3Q7eS5zdWNjZXNzPVEoXCJzdWNjZXNzXCIpO3kuaW5mbz1RKFwiaW5mb1wiKTt5LmVycm9yPVEoXCJlcnJvclwiKTt5Lndhcm5pbmc9UShcIndhcm5pbmdcIik7eS53YXJuPXkud2FybmluZzt5LmRhcms9KHQsbyk9PlUodCxWKFwiZGVmYXVsdFwiLHt0aGVtZTpcImRhcmtcIiwuLi5vfSkpO2Z1bmN0aW9uIHF0KHQpe2h0KHQpfXkuZGlzbWlzcz1xdDt5LmNsZWFyV2FpdGluZ1F1ZXVlPUN0O3kuaXNBY3RpdmU9WDt5LnVwZGF0ZT0odCxvPXt9KT0+e2xldCBlPXZ0KHQsbyk7aWYoZSl7bGV0e3Byb3BzOnIsY29udGVudDpzfT1lLGw9e2RlbGF5OjEwMCwuLi5yLC4uLm8sdG9hc3RJZDpvLnRvYXN0SWR8fHQsdXBkYXRlSWQ6YXQoKX07bC50b2FzdElkIT09dCYmKGwuc3RhbGVJZD10KTtsZXQgYT1sLnJlbmRlcnx8cztkZWxldGUgbC5yZW5kZXIsVShhLGwpfX07eS5kb25lPXQ9Pnt5LnVwZGF0ZSh0LHtwcm9ncmVzczoxfSl9O3kub25DaGFuZ2U9UHQ7eS5wbGF5PXQ9PnJ0KCEwLHQpO3kucGF1c2U9dD0+cnQoITEsdCk7aW1wb3J0e3VzZVJlZiBhcyBLdCx1c2VTeW5jRXh0ZXJuYWxTdG9yZSBhcyBZdH1mcm9tXCJyZWFjdFwiO2Z1bmN0aW9uIEl0KHQpe3ZhciBhO2xldHtzdWJzY3JpYmU6byxnZXRTbmFwc2hvdDplLHNldFByb3BzOnJ9PUt0KEV0KHQpKS5jdXJyZW50O3IodCk7bGV0IHM9KGE9WXQobyxlLGUpKT09bnVsbD92b2lkIDA6YS5zbGljZSgpO2Z1bmN0aW9uIGwoZCl7aWYoIXMpcmV0dXJuW107bGV0IGM9bmV3IE1hcDtyZXR1cm4gdC5uZXdlc3RPblRvcCYmcy5yZXZlcnNlKCkscy5mb3JFYWNoKFQ9PntsZXR7cG9zaXRpb246Z309VC5wcm9wcztjLmhhcyhnKXx8Yy5zZXQoZyxbXSksYy5nZXQoZykucHVzaChUKX0pLEFycmF5LmZyb20oYyxUPT5kKFRbMF0sVFsxXSkpfXJldHVybntnZXRUb2FzdFRvUmVuZGVyOmwsaXNUb2FzdEFjdGl2ZTpYLGNvdW50OnM9PW51bGw/dm9pZCAwOnMubGVuZ3RofX1pbXBvcnR7dXNlRWZmZWN0IGFzIFp0LHVzZVJlZiBhcyBTdCx1c2VTdGF0ZSBhcyBrdH1mcm9tXCJyZWFjdFwiO2Z1bmN0aW9uIEF0KHQpe2xldFtvLGVdPWt0KCExKSxbcixzXT1rdCghMSksbD1TdChudWxsKSxhPVN0KHtzdGFydDowLGRlbHRhOjAscmVtb3ZhbERpc3RhbmNlOjAsY2FuQ2xvc2VPbkNsaWNrOiEwLGNhbkRyYWc6ITEsZGlkTW92ZTohMX0pLmN1cnJlbnQse2F1dG9DbG9zZTpkLHBhdXNlT25Ib3ZlcjpjLGNsb3NlVG9hc3Q6VCxvbkNsaWNrOmcsY2xvc2VPbkNsaWNrOnZ9PXQ7eHQoe2lkOnQudG9hc3RJZCxjb250YWluZXJJZDp0LmNvbnRhaW5lcklkLGZuOmV9KSxadCgoKT0+e2lmKHQucGF1c2VPbkZvY3VzTG9zcylyZXR1cm4geCgpLCgpPT57QygpfX0sW3QucGF1c2VPbkZvY3VzTG9zc10pO2Z1bmN0aW9uIHgoKXtkb2N1bWVudC5oYXNGb2N1cygpfHxwKCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLGYpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLHApfWZ1bmN0aW9uIEMoKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsZiksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIscCl9ZnVuY3Rpb24gUyhtKXtpZih0LmRyYWdnYWJsZT09PSEwfHx0LmRyYWdnYWJsZT09PW0ucG9pbnRlclR5cGUpe2IoKTtsZXQgXz1sLmN1cnJlbnQ7YS5jYW5DbG9zZU9uQ2xpY2s9ITAsYS5jYW5EcmFnPSEwLF8uc3R5bGUudHJhbnNpdGlvbj1cIm5vbmVcIix0LmRyYWdnYWJsZURpcmVjdGlvbj09PVwieFwiPyhhLnN0YXJ0PW0uY2xpZW50WCxhLnJlbW92YWxEaXN0YW5jZT1fLm9mZnNldFdpZHRoKih0LmRyYWdnYWJsZVBlcmNlbnQvMTAwKSk6KGEuc3RhcnQ9bS5jbGllbnRZLGEucmVtb3ZhbERpc3RhbmNlPV8ub2Zmc2V0SGVpZ2h0Kih0LmRyYWdnYWJsZVBlcmNlbnQ9PT04MD90LmRyYWdnYWJsZVBlcmNlbnQqMS41OnQuZHJhZ2dhYmxlUGVyY2VudCkvMTAwKX19ZnVuY3Rpb24gRShtKXtsZXR7dG9wOl8sYm90dG9tOmssbGVmdDpNLHJpZ2h0OkF9PWwuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTttLm5hdGl2ZUV2ZW50LnR5cGUhPT1cInRvdWNoZW5kXCImJnQucGF1c2VPbkhvdmVyJiZtLmNsaWVudFg+PU0mJm0uY2xpZW50WDw9QSYmbS5jbGllbnRZPj1fJiZtLmNsaWVudFk8PWs/cCgpOmYoKX1mdW5jdGlvbiBmKCl7ZSghMCl9ZnVuY3Rpb24gcCgpe2UoITEpfWZ1bmN0aW9uIGIoKXthLmRpZE1vdmU9ITEsZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsbiksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLHUpfWZ1bmN0aW9uIGkoKXtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIixuKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsdSl9ZnVuY3Rpb24gbihtKXtsZXQgXz1sLmN1cnJlbnQ7aWYoYS5jYW5EcmFnJiZfKXthLmRpZE1vdmU9ITAsbyYmcCgpLHQuZHJhZ2dhYmxlRGlyZWN0aW9uPT09XCJ4XCI/YS5kZWx0YT1tLmNsaWVudFgtYS5zdGFydDphLmRlbHRhPW0uY2xpZW50WS1hLnN0YXJ0LGEuc3RhcnQhPT1tLmNsaWVudFgmJihhLmNhbkNsb3NlT25DbGljaz0hMSk7bGV0IGs9dC5kcmFnZ2FibGVEaXJlY3Rpb249PT1cInhcIj9gJHthLmRlbHRhfXB4LCB2YXIoLS15KWA6YDAsIGNhbGMoJHthLmRlbHRhfXB4ICsgdmFyKC0teSkpYDtfLnN0eWxlLnRyYW5zZm9ybT1gdHJhbnNsYXRlM2QoJHtrfSwwKWAsXy5zdHlsZS5vcGFjaXR5PWAkezEtTWF0aC5hYnMoYS5kZWx0YS9hLnJlbW92YWxEaXN0YW5jZSl9YH19ZnVuY3Rpb24gdSgpe2koKTtsZXQgbT1sLmN1cnJlbnQ7aWYoYS5jYW5EcmFnJiZhLmRpZE1vdmUmJm0pe2lmKGEuY2FuRHJhZz0hMSxNYXRoLmFicyhhLmRlbHRhKT5hLnJlbW92YWxEaXN0YW5jZSl7cyghMCksdC5jbG9zZVRvYXN0KCEwKSx0LmNvbGxhcHNlQWxsKCk7cmV0dXJufW0uc3R5bGUudHJhbnNpdGlvbj1cInRyYW5zZm9ybSAwLjJzLCBvcGFjaXR5IDAuMnNcIixtLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNmb3JtXCIpLG0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvcGFjaXR5XCIpfX1sZXQgaD17b25Qb2ludGVyRG93bjpTLG9uUG9pbnRlclVwOkV9O3JldHVybiBkJiZjJiYoaC5vbk1vdXNlRW50ZXI9cCx0LnN0YWNrZWR8fChoLm9uTW91c2VMZWF2ZT1mKSksdiYmKGgub25DbGljaz1tPT57ZyYmZyhtKSxhLmNhbkNsb3NlT25DbGljayYmVCghMCl9KSx7cGxheVRvYXN0OmYscGF1c2VUb2FzdDpwLGlzUnVubmluZzpvLHByZXZlbnRFeGl0VHJhbnNpdGlvbjpyLHRvYXN0UmVmOmwsZXZlbnRIYW5kbGVyczpofX1pbXBvcnR7dXNlRWZmZWN0IGFzIEp0LHVzZUxheW91dEVmZmVjdCBhcyB0b31mcm9tXCJyZWFjdFwiO3ZhciBPdD10eXBlb2Ygd2luZG93IT1cInVuZGVmaW5lZFwiP3RvOkp0O2ltcG9ydCBpdCBmcm9tXCJjbHN4XCI7aW1wb3J0IHEse2Nsb25lRWxlbWVudCBhcyBjbyxpc1ZhbGlkRWxlbWVudCBhcyBmb31mcm9tXCJyZWFjdFwiO2ltcG9ydCBPLHtjbG9uZUVsZW1lbnQgYXMgb28saXNWYWxpZEVsZW1lbnQgYXMgZW99ZnJvbVwicmVhY3RcIjt2YXIgRz0oe3RoZW1lOnQsdHlwZTpvLGlzTG9hZGluZzplLC4uLnJ9KT0+Ty5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3ZpZXdCb3g6XCIwIDAgMjQgMjRcIix3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCIsZmlsbDp0PT09XCJjb2xvcmVkXCI/XCJjdXJyZW50Q29sb3JcIjpgdmFyKC0tdG9hc3RpZnktaWNvbi1jb2xvci0ke299KWAsLi4ucn0pO2Z1bmN0aW9uIGFvKHQpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnQoRyx7Li4udH0sTy5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTIzLjMyIDE3LjE5MUwxNS40MzggMi4xODRDMTQuNzI4LjgzMyAxMy40MTYgMCAxMS45OTYgMGMtMS40MiAwLTIuNzMzLjgzMy0zLjQ0MyAyLjE4NEwuNTMzIDE3LjQ0OGE0Ljc0NCA0Ljc0NCAwIDAwMCA0LjM2OEMxLjI0MyAyMy4xNjcgMi41NTUgMjQgMy45NzUgMjRoMTYuMDVDMjIuMjIgMjQgMjQgMjIuMDQ0IDI0IDE5LjYzMmMwLS45MDQtLjI1MS0xLjc0Ni0uNjgtMi40NHptLTkuNjIyIDEuNDZjMCAxLjAzMy0uNzI0IDEuODIzLTEuNjk4IDEuODIzcy0xLjY5OC0uNzktMS42OTgtMS44MjJ2LS4wNDNjMC0xLjAyOC43MjQtMS44MjIgMS42OTgtMS44MjJzMS42OTguNzkgMS42OTggMS44MjJ2LjA0M3ptLjAzOS0xMi4yODVsLS44NCA4LjA2Yy0uMDU3LjU4MS0uNDA4Ljk0My0uODk3Ljk0My0uNDkgMC0uODQtLjM2Ny0uODk2LS45NDJsLS44NC04LjA2NWMtLjA1Ny0uNjI0LjI1LTEuMDk1Ljc3OS0xLjA5NWgxLjkxYy41MjguMDA1Ljg0LjQ3Ni43ODQgMS4xelwifSkpfWZ1bmN0aW9uIHNvKHQpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnQoRyx7Li4udH0sTy5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTEyIDBhMTIgMTIgMCAxMDEyIDEyQTEyLjAxMyAxMi4wMTMgMCAwMDEyIDB6bS4yNSA1YTEuNSAxLjUgMCAxMS0xLjUgMS41IDEuNSAxLjUgMCAwMTEuNS0xLjV6bTIuMjUgMTMuNWgtNGExIDEgMCAwMTAtMmguNzVhLjI1LjI1IDAgMDAuMjUtLjI1di00LjVhLjI1LjI1IDAgMDAtLjI1LS4yNWgtLjc1YTEgMSAwIDAxMC0yaDFhMiAyIDAgMDEyIDJ2NC43NWEuMjUuMjUgMCAwMC4yNS4yNWguNzVhMSAxIDAgMTEwIDJ6XCJ9KSl9ZnVuY3Rpb24gbm8odCl7cmV0dXJuIE8uY3JlYXRlRWxlbWVudChHLHsuLi50fSxPLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTIgMGExMiAxMiAwIDEwMTIgMTJBMTIuMDE0IDEyLjAxNCAwIDAwMTIgMHptNi45MjcgOC4ybC02Ljg0NSA5LjI4OWExLjAxMSAxLjAxMSAwIDAxLTEuNDMuMTg4bC00Ljg4OC0zLjkwOGExIDEgMCAxMTEuMjUtMS41NjJsNC4wNzYgMy4yNjEgNi4yMjctOC40NTFhMSAxIDAgMTExLjYxIDEuMTgzelwifSkpfWZ1bmN0aW9uIHJvKHQpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnQoRyx7Li4udH0sTy5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTExLjk4MyAwYTEyLjIwNiAxMi4yMDYgMCAwMC04LjUxIDMuNjUzQTExLjggMTEuOCAwIDAwMCAxMi4yMDcgMTEuNzc5IDExLjc3OSAwIDAwMTEuOCAyNGguMjE0QTEyLjExMSAxMi4xMTEgMCAwMDI0IDExLjc5MSAxMS43NjYgMTEuNzY2IDAgMDAxMS45ODMgMHpNMTAuNSAxNi41NDJhMS40NzYgMS40NzYgMCAwMTEuNDQ5LTEuNTNoLjAyN2ExLjUyNyAxLjUyNyAwIDAxMS41MjMgMS40NyAxLjQ3NSAxLjQ3NSAwIDAxLTEuNDQ5IDEuNTNoLS4wMjdhMS41MjkgMS41MjkgMCAwMS0xLjUyMy0xLjQ3ek0xMSAxMi41di02YTEgMSAwIDAxMiAwdjZhMSAxIDAgMTEtMiAwelwifSkpfWZ1bmN0aW9uIGlvKCl7cmV0dXJuIE8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJUb2FzdGlmeV9fc3Bpbm5lclwifSl9dmFyIFc9e2luZm86c28sd2FybmluZzphbyxzdWNjZXNzOm5vLGVycm9yOnJvLHNwaW5uZXI6aW99LGxvPXQ9PnQgaW4gVztmdW5jdGlvbiBOdCh7dGhlbWU6dCx0eXBlOm8saXNMb2FkaW5nOmUsaWNvbjpyfSl7bGV0IHM9bnVsbCxsPXt0aGVtZTp0LHR5cGU6b307cmV0dXJuIHI9PT0hMXx8KFAocik/cz1yKHsuLi5sLGlzTG9hZGluZzplfSk6ZW8ocik/cz1vbyhyLGwpOmU/cz1XLnNwaW5uZXIoKTpsbyhvKSYmKHM9V1tvXShsKSkpLHN9dmFyIHd0PXQ9PntsZXR7aXNSdW5uaW5nOm8scHJldmVudEV4aXRUcmFuc2l0aW9uOmUsdG9hc3RSZWY6cixldmVudEhhbmRsZXJzOnMscGxheVRvYXN0Omx9PUF0KHQpLHtjbG9zZUJ1dHRvbjphLGNoaWxkcmVuOmQsYXV0b0Nsb3NlOmMsb25DbGljazpULHR5cGU6ZyxoaWRlUHJvZ3Jlc3NCYXI6dixjbG9zZVRvYXN0OngsdHJhbnNpdGlvbjpDLHBvc2l0aW9uOlMsY2xhc3NOYW1lOkUsc3R5bGU6Zixwcm9ncmVzc0NsYXNzTmFtZTpwLHVwZGF0ZUlkOmIscm9sZTppLHByb2dyZXNzOm4scnRsOnUsdG9hc3RJZDpoLGRlbGV0ZVRvYXN0Om0saXNJbjpfLGlzTG9hZGluZzprLGNsb3NlT25DbGljazpNLHRoZW1lOkEsYXJpYUxhYmVsOlJ9PXQsRD1pdChcIlRvYXN0aWZ5X190b2FzdFwiLGBUb2FzdGlmeV9fdG9hc3QtdGhlbWUtLSR7QX1gLGBUb2FzdGlmeV9fdG9hc3QtLSR7Z31gLHtbXCJUb2FzdGlmeV9fdG9hc3QtLXJ0bFwiXTp1fSx7W1wiVG9hc3RpZnlfX3RvYXN0LS1jbG9zZS1vbi1jbGlja1wiXTpNfSksWT1QKEUpP0Uoe3J0bDp1LHBvc2l0aW9uOlMsdHlwZTpnLGRlZmF1bHRDbGFzc05hbWU6RH0pOml0KEQsRSksZnQ9TnQodCksZHQ9ISFufHwhYyxqPXtjbG9zZVRvYXN0OngsdHlwZTpnLHRoZW1lOkF9LEg9bnVsbDtyZXR1cm4gYT09PSExfHwoUChhKT9IPWEoaik6Zm8oYSk/SD1jbyhhLGopOkg9eXQoaikpLHEuY3JlYXRlRWxlbWVudChDLHtpc0luOl8sZG9uZTptLHBvc2l0aW9uOlMscHJldmVudEV4aXRUcmFuc2l0aW9uOmUsbm9kZVJlZjpyLHBsYXlUb2FzdDpsfSxxLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7aWQ6aCx0YWJJbmRleDowLG9uQ2xpY2s6VCxcImRhdGEtaW5cIjpfLGNsYXNzTmFtZTpZLC4uLnMsc3R5bGU6ZixyZWY6ciwuLi5fJiZ7cm9sZTppLFwiYXJpYS1sYWJlbFwiOlJ9fSxmdCE9bnVsbCYmcS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTppdChcIlRvYXN0aWZ5X190b2FzdC1pY29uXCIse1tcIlRvYXN0aWZ5LS1hbmltYXRlLWljb24gVG9hc3RpZnlfX3pvb20tZW50ZXJcIl06IWt9KX0sZnQpLHR0KGQsdCwhbyksSCwhdC5jdXN0b21Qcm9ncmVzc0JhciYmcS5jcmVhdGVFbGVtZW50KGd0LHsuLi5iJiYhZHQ/e2tleTpgcC0ke2J9YH06e30scnRsOnUsdGhlbWU6QSxkZWxheTpjLGlzUnVubmluZzpvLGlzSW46XyxjbG9zZVRvYXN0OngsaGlkZTp2LHR5cGU6ZyxjbGFzc05hbWU6cCxjb250cm9sbGVkUHJvZ3Jlc3M6ZHQscHJvZ3Jlc3M6bnx8MH0pKSl9O3ZhciBLPSh0LG89ITEpPT4oe2VudGVyOmBUb2FzdGlmeS0tYW5pbWF0ZSBUb2FzdGlmeV9fJHt0fS1lbnRlcmAsZXhpdDpgVG9hc3RpZnktLWFuaW1hdGUgVG9hc3RpZnlfXyR7dH0tZXhpdGAsYXBwZW5kUG9zaXRpb246b30pLGx0PSQoSyhcImJvdW5jZVwiLCEwKSksbW89JChLKFwic2xpZGVcIiwhMCkpLHBvPSQoSyhcInpvb21cIikpLHVvPSQoSyhcImZsaXBcIikpO3ZhciBfbz17cG9zaXRpb246XCJ0b3AtcmlnaHRcIix0cmFuc2l0aW9uOmx0LGF1dG9DbG9zZTo1ZTMsY2xvc2VCdXR0b246ITAscGF1c2VPbkhvdmVyOiEwLHBhdXNlT25Gb2N1c0xvc3M6ITAsZHJhZ2dhYmxlOlwidG91Y2hcIixkcmFnZ2FibGVQZXJjZW50OjgwLGRyYWdnYWJsZURpcmVjdGlvbjpcInhcIixyb2xlOlwiYWxlcnRcIix0aGVtZTpcImxpZ2h0XCIsXCJhcmlhLWxhYmVsXCI6XCJOb3RpZmljYXRpb25zIEFsdCtUXCIsaG90S2V5czp0PT50LmFsdEtleSYmdC5jb2RlPT09XCJLZXlUXCJ9O2Z1bmN0aW9uIEx0KHQpe2xldCBvPXsuLi5fbywuLi50fSxlPXQuc3RhY2tlZCxbcixzXT1nbyghMCksbD1UbyhudWxsKSx7Z2V0VG9hc3RUb1JlbmRlcjphLGlzVG9hc3RBY3RpdmU6ZCxjb3VudDpjfT1JdChvKSx7Y2xhc3NOYW1lOlQsc3R5bGU6ZyxydGw6dixjb250YWluZXJJZDp4LGhvdEtleXM6Q309bztmdW5jdGlvbiBTKGYpe2xldCBwPUR0KFwiVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lclwiLGBUb2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS0ke2Z9YCx7W1wiVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tcnRsXCJdOnZ9KTtyZXR1cm4gUChUKT9UKHtwb3NpdGlvbjpmLHJ0bDp2LGRlZmF1bHRDbGFzc05hbWU6cH0pOkR0KHAsQihUKSl9ZnVuY3Rpb24gRSgpe2UmJihzKCEwKSx5LnBsYXkoKSl9cmV0dXJuIE90KCgpPT57dmFyIGY7aWYoZSl7bGV0IHA9bC5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWluPVwidHJ1ZVwiXScpLGI9MTIsaT0oZj1vLnBvc2l0aW9uKT09bnVsbD92b2lkIDA6Zi5pbmNsdWRlcyhcInRvcFwiKSxuPTAsdT0wO0FycmF5LmZyb20ocCkucmV2ZXJzZSgpLmZvckVhY2goKGgsbSk9PntsZXQgXz1oO18uY2xhc3NMaXN0LmFkZChcIlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFwiKSxtPjAmJihfLmRhdGFzZXQuY29sbGFwc2VkPWAke3J9YCksXy5kYXRhc2V0LnBvc3x8KF8uZGF0YXNldC5wb3M9aT9cInRvcFwiOlwiYm90XCIpO2xldCBrPW4qKHI/LjI6MSkrKHI/MDpiKm0pO18uc3R5bGUuc2V0UHJvcGVydHkoXCItLXlcIixgJHtpP2s6ayotMX1weGApLF8uc3R5bGUuc2V0UHJvcGVydHkoXCItLWdcIixgJHtifWApLF8uc3R5bGUuc2V0UHJvcGVydHkoXCItLXNcIixgJHsxLShyP3U6MCl9YCksbis9Xy5vZmZzZXRIZWlnaHQsdSs9LjAyNX0pfX0sW3IsYyxlXSkseW8oKCk9PntmdW5jdGlvbiBmKHApe3ZhciBpO2xldCBiPWwuY3VycmVudDtDKHApJiYoKGk9Yi5xdWVyeVNlbGVjdG9yKCdbdGFiSW5kZXg9XCIwXCJdJykpPT1udWxsfHxpLmZvY3VzKCkscyghMSkseS5wYXVzZSgpKSxwLmtleT09PVwiRXNjYXBlXCImJihkb2N1bWVudC5hY3RpdmVFbGVtZW50PT09Ynx8YiE9bnVsbCYmYi5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkmJihzKCEwKSx5LnBsYXkoKSl9cmV0dXJuIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZiksKCk9Pntkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGYpfX0sW0NdKSxjdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLHtyZWY6bCxjbGFzc05hbWU6XCJUb2FzdGlmeVwiLGlkOngsb25Nb3VzZUVudGVyOigpPT57ZSYmKHMoITEpLHkucGF1c2UoKSl9LG9uTW91c2VMZWF2ZTpFLFwiYXJpYS1saXZlXCI6XCJwb2xpdGVcIixcImFyaWEtYXRvbWljXCI6XCJmYWxzZVwiLFwiYXJpYS1yZWxldmFudFwiOlwiYWRkaXRpb25zIHRleHRcIixcImFyaWEtbGFiZWxcIjpvW1wiYXJpYS1sYWJlbFwiXX0sYSgoZixwKT0+e2xldCBiPXAubGVuZ3RoP3suLi5nfTp7Li4uZyxwb2ludGVyRXZlbnRzOlwibm9uZVwifTtyZXR1cm4gY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLHt0YWJJbmRleDotMSxjbGFzc05hbWU6UyhmKSxcImRhdGEtc3RhY2tlZFwiOmUsc3R5bGU6YixrZXk6YGMtJHtmfWB9LHAubWFwKCh7Y29udGVudDppLHByb3BzOm59KT0+Y3QuY3JlYXRlRWxlbWVudCh3dCx7Li4ubixzdGFja2VkOmUsY29sbGFwc2VBbGw6RSxpc0luOmQobi50b2FzdElkLG4uY29udGFpbmVySWQpLGtleTpgdC0ke24ua2V5fWB9LGkpKSl9KSl9ZXhwb3J0e2x0IGFzIEJvdW5jZSx1byBhcyBGbGlwLFcgYXMgSWNvbnMsbW8gYXMgU2xpZGUsTHQgYXMgVG9hc3RDb250YWluZXIscG8gYXMgWm9vbSxaIGFzIGNvbGxhcHNlVG9hc3QsJCBhcyBjc3NUcmFuc2l0aW9uLHkgYXMgdG9hc3R9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgbG9hZE1vZHVsZXMgfSBmcm9tIFwiZXNyaS1sb2FkZXJcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgSU1TdGF0ZSwgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTG9hZGluZyB9IGZyb20gXCJqaW11LXVpXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCwgQm91bmNlIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaG9va3MvdXNlTG9jYWxlXCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0aW9ucyB9IGZyb20gXCIuL3RyYW5zbGF0aW9uc1wiO1xyXG5pbXBvcnQgVGl0bGVXaXRoVG9vbHRpcCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9UaXRsZVdpdGhUb29sdGlwXCI7XHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPGFueT4pID0+IHtcclxuICBjb25zdCB7IHQgfSA9IHVzZUxvY2FsZSh0cmFuc2xhdGlvbnMpO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZFNlbnNvciA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5teVN0YXRlPy5zZWxlY3RlZFNlbnNvclxyXG4gICk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRJbWFnZXJpZXMgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUubXlTdGF0ZT8uc2VsZWN0ZWRJbWFnZXNcclxuICApO1xyXG4gIGNvbnN0IGdlb3Byb2Nlc3MgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElNU3RhdGUpID0+IHN0YXRlLm15U3RhdGU/Lmdlb3Byb2Nlc3MpO1xyXG5cclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzaG93QnVmZmVyLCBzZXRTaG93QnVmZmVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtsb2FkaW5nSW5jZW5kaW8sIHNldExvYWRpbmdJbmNlbmRpb10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdJbnVuZGFjaW9uLCBzZXRMb2FkaW5nSW51bmRhY2lvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUG9seWdvbiwgc2V0U2VsZWN0ZWRQb2x5Z29uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nQnVmZmVyLCBzZXRMb2FkaW5nQnVmZmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYXJlYUJ1ZmZlciwgc2V0QXJlYUJ1ZmZlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYnVmZmVyRGlzdGFuY2UsIHNldEJ1ZmZlckRpc3RhbmNlXSA9IHVzZVN0YXRlKDEpOyAvLyBFc3RhZG8gcGFyYSBlbCBpbnB1dFxyXG4gIGNvbnN0IFtidWZmZXIsIHNldEJ1ZmZlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12KSA9PiB7XHJcbiAgICBzZXRKaW11TWFwVmlldyhqbXYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1ZmZlckNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAodmFsdWUgPiAxMDApIHtcclxuICAgICAgdG9hc3Qud2FybmluZyh0KFwibWluS21XYXJuaW5nXCIpLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEJ1ZmZlckRpc3RhbmNlKDEwMCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgdG9hc3Qud2FybmluZyh0KFwibWF4S21XYXJuaW5nXCIpLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEJ1ZmZlckRpc3RhbmNlKDEpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRCdWZmZXJEaXN0YW5jZSh2YWx1ZSk7IC8vIEFjdHVhbGl6YSBlbCBlc3RhZG8gY29uIGVsIG51ZXZvIHZhbG9yIGRlbCBpbnB1dFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhcmdhckdlb21ldHJpYUVuTWFwYSA9IGFzeW5jIChnZW9qc29uRmlsZU5hbWUsIHByb2Nlc28pID0+IHtcclxuICAgIGlmICghamltdU1hcFZpZXcpIHJldHVybjtcclxuICAgIGlmICghZ2VvanNvbkZpbGVOYW1lKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIHJlY2liacOzIHVuIG5vbWJyZSBkZSBhcmNoaXZvIHbDoWxpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIE9idGVuZXIgbGEgVVJMIGJhc2UgZGluw6FtaWNhbWVudGVcclxuICAgICAgLy8gY29uc3QgYmFzZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XHJcbiAgICAgIGNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6NTAwMFwiO1xyXG4gICAgICBjb25zdCBxdWVyeVVybCA9IFN0cmluZyhiYXNlVXJsICsgZ2VvanNvbkZpbGVOYW1lKTtcclxuXHJcbiAgICAgIGNvbnN0IGxheWVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChxdWVyeVVybCk7XHJcblxyXG4gICAgICBpZiAoIWxheWVyUmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgRXJyb3IgYWwgY29uc3VsdGFyIGxhIGNhcGE6ICR7bGF5ZXJSZXNwb25zZS5zdGF0dXN9ICR7bGF5ZXJSZXNwb25zZS5zdGF0dXNUZXh0fWBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBnZW9qc29uRGF0YSA9IGF3YWl0IGxheWVyUmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgY29uc3QgW0ZlYXR1cmVMYXllciwgR3JhcGhpYywgUG9seWdvbiwgU2ltcGxlRmlsbFN5bWJvbCwgZ2VvbWV0cnlFbmdpbmVdID1cclxuICAgICAgICBhd2FpdCBsb2FkTW9kdWxlcyhbXHJcbiAgICAgICAgICBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiLFxyXG4gICAgICAgICAgXCJlc3JpL0dyYXBoaWNcIixcclxuICAgICAgICAgIFwiZXNyaS9nZW9tZXRyeS9Qb2x5Z29uXCIsXHJcbiAgICAgICAgICBcImVzcmkvc3ltYm9scy9TaW1wbGVGaWxsU3ltYm9sXCIsXHJcbiAgICAgICAgICBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIixcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgIHZhciBub21icmVDYXBhO1xyXG5cclxuICAgICAgaWYgKHByb2Nlc28gPT0gMikge1xyXG4gICAgICAgIG5vbWJyZUNhcGEgPSB0KFwiZmlyZUxheWVyXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc28gPT0gMykge1xyXG4gICAgICAgIG5vbWJyZUNhcGEgPSB0KFwiZmxvb2RMYXllclwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgdGl0bGU6IG5vbWJyZUNhcGEsXHJcbiAgICAgICAgc291cmNlOiBbXSxcclxuICAgICAgICBvYmplY3RJZEZpZWxkOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICB7IG5hbWU6IFwiT0JKRUNUSURcIiwgYWxpYXM6IFwiT0JKRUNUSURcIiwgdHlwZTogXCJvaWRcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImFyZWFfbTJcIiwgYWxpYXM6IFwiw4FyZWEgKG3CsilcIiwgdHlwZTogXCJkb3VibGVcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImFyZWFfaGFcIiwgYWxpYXM6IFwiw4FyZWEgKGhhKVwiLCB0eXBlOiBcImRvdWJsZVwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiYXJlYV9rbTJcIiwgYWxpYXM6IFwiw4FyZWEgKGttwrIpXCIsIHR5cGU6IFwiZG91YmxlXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHJlbmRlcmVyOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZ3JhcGhpY3MgPSBbXTtcclxuICAgICAgbGV0IGdyYXBoaWNJbmRleCA9IDA7XHJcblxyXG4gICAgICBnZW9qc29uRGF0YS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKSA9PiB7XHJcbiAgICAgICAgbGV0IGdlb21ldHJpZXMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGZlYXR1cmUuZ2VvbWV0cnkudHlwZSA9PT0gXCJQb2x5Z29uXCIpIHtcclxuICAgICAgICAgIGdlb21ldHJpZXMucHVzaChcclxuICAgICAgICAgICAgbmV3IFBvbHlnb24oe1xyXG4gICAgICAgICAgICAgIHJpbmdzOiBmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzLFxyXG4gICAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IGppbXVNYXBWaWV3LnZpZXcuc3BhdGlhbFJlZmVyZW5jZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlLmdlb21ldHJ5LnR5cGUgPT09IFwiTXVsdGlQb2x5Z29uXCIpIHtcclxuICAgICAgICAgIGZlYXR1cmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXMuZm9yRWFjaCgocG9seWdvbkNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICAgICAgICAgIGdlb21ldHJpZXMucHVzaChcclxuICAgICAgICAgICAgICBuZXcgUG9seWdvbih7XHJcbiAgICAgICAgICAgICAgICByaW5nczogcG9seWdvbkNvb3JkaW5hdGVzLFxyXG4gICAgICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogamltdU1hcFZpZXcudmlldy5zcGF0aWFsUmVmZXJlbmNlLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdlb21ldHJpZXMuZm9yRWFjaCgoZ2VvbWV0cnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGFyZWFNMiA9IGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljQXJlYShnZW9tZXRyeSwgXCJzcXVhcmUtbWV0ZXJzXCIpO1xyXG4gICAgICAgICAgY29uc3QgYXJlYUhhID0gYXJlYU0yIC8gMTAwMDA7XHJcbiAgICAgICAgICBjb25zdCBhcmVhS20yID0gYXJlYU0yIC8gMV8wMDBfMDAwO1xyXG5cclxuICAgICAgICAgIGdyYXBoaWNzLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgICBnZW9tZXRyeTogZ2VvbWV0cnksXHJcbiAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICAgICAgT0JKRUNUSUQ6IGdyYXBoaWNJbmRleCxcclxuICAgICAgICAgICAgICAgIGFyZWFfbTI6IGFyZWFNMixcclxuICAgICAgICAgICAgICAgIGFyZWFfaGE6IGFyZWFIYSxcclxuICAgICAgICAgICAgICAgIGFyZWFfa20yOiBhcmVhS20yLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZ3JhcGhpY0luZGV4Kys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZmVhdHVyZUxheWVyLnNvdXJjZSA9IGdyYXBoaWNzO1xyXG5cclxuICAgICAgLy8gQWdyZWdhciBsYSBjYXBhIGFsIG1hcGEgc2kgbm8gZXhpc3RlIHVuYSBjb24gZWwgbWlzbW8gbm9tYnJlXHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nTGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChcclxuICAgICAgICAobGF5ZXIpID0+IGxheWVyLnRpdGxlID09PSBcIlBvbGlnb25vIGRlc2FzdHJlXCJcclxuICAgICAgKTtcclxuICAgICAgaWYgKGV4aXN0aW5nTGF5ZXIpIHtcclxuICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUoZXhpc3RpbmdMYXllcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChmZWF0dXJlTGF5ZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIGNhcmdhciBsYSBnZW9tZXRyw61hIGVuIGVsIG1hcGE6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBpbmNlbmRpbyA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmdJbmNlbmRpbyh0cnVlKTtcclxuICAgIGlmIChqaW11TWFwVmlldykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBpbWFnZW4xID0gc2VsZWN0ZWRJbWFnZXJpZXNbMF0/Lk9CSkVDVElEO1xyXG5cclxuICAgICAgICAvLyBDb25zdHJ1aXIgbGEgVVJMIGNvbiBsb3MgcGFyw6FtZXRyb3NcclxuICAgICAgICBjb25zdCBwcm9jZXNvID0gMjtcclxuICAgICAgICBjb25zdCBlbnRyYWRhID0gaW1hZ2VuMTtcclxuICAgICAgICAvL0Rlc2Fycm9sbG9cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9wcm94eT9wcm9jZXNvPSR7cHJvY2Vzb30mRW50cmFkYT0ke2VudHJhZGF9JnVybD0ke3NlbGVjdGVkU2Vuc29yLnVybH1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmdJbmNlbmRpbyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgYEVycm9yIGVuIGxhIHNvbGljaXR1ZDogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc2V0TG9hZGluZ0luY2VuZGlvKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXJsTGF5ZXIgPSByZXNwb25zZURhdGEuUG9saWdvbkdlb0pzb247XHJcblxyXG4gICAgICAgIGF3YWl0IGNhcmdhckdlb21ldHJpYUVuTWFwYSh1cmxMYXllciwgcHJvY2Vzbyk7XHJcblxyXG4gICAgICAgIHNldExvYWRpbmdJbmNlbmRpbyhmYWxzZSk7XHJcbiAgICAgICAgc2V0U2hvd0J1ZmZlcih0cnVlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0b2FzdC5lcnJvcih0KFwiZmlyZUVycm9yXCIpLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGludW5kYWNpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nSW51bmRhY2lvbih0cnVlKTtcclxuXHJcbiAgICBpZiAoIWppbXVNYXBWaWV3KSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgaW1hZ2VuMSA9IHNlbGVjdGVkSW1hZ2VyaWVzWzBdPy5PQkpFQ1RJRDtcclxuXHJcbiAgICAgIGlmIChpbWFnZW4xID09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGVuIGxhIGNhcmdhIGRlIGltYWdlbmVzOiAke2ltYWdlbjF9YCk7XHJcbiAgICAgICAgc2V0TG9hZGluZ0ludW5kYWNpb24oZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDb25zdHJ1aXIgbGEgVVJMIGNvbiBsb3MgcGFyw6FtZXRyb3NcclxuICAgICAgY29uc3QgcHJvY2VzbyA9IDM7XHJcbiAgICAgIGNvbnN0IGVudHJhZGEgPSBpbWFnZW4xO1xyXG5cclxuICAgICAgLy9EZXNhcnJvbGxvXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9wcm94eT9wcm9jZXNvPSR7cHJvY2Vzb30mRW50cmFkYT0ke2VudHJhZGF9JnVybD0ke3NlbGVjdGVkU2Vuc29yLnVybH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB9XHJcbiAgICAgICkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZ0ludW5kYWNpb24oZmFsc2UpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgRXJyb3IgZW4gbGEgc29saWNpdHVkOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWBcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldExvYWRpbmdJbnVuZGFjaW9uKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBjb25zdCB1cmxMYXllciA9IHJlc3BvbnNlRGF0YS5Qb2xpZ29uR2VvSnNvbjtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHsgdXJsTGF5ZXIgfSk7XHJcbiAgICAgIGF3YWl0IGNhcmdhckdlb21ldHJpYUVuTWFwYSh1cmxMYXllciwgcHJvY2Vzbyk7XHJcbiAgICAgIHNldExvYWRpbmdJbnVuZGFjaW9uKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB0b2FzdC5lcnJvcih0KFwiZmxvb2RFcnJvclwiKSwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbmRCdWZmZXJHZW9tZXRyeSA9ICgpID0+IHtcclxuICAgIGlmICghamltdU1hcFZpZXcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1ZmZlckdyYXBoaWMgPSBqaW11TWFwVmlldy52aWV3LmdyYXBoaWNzLml0ZW1zLmZpbmQoXHJcbiAgICAgIChncmFwaGljKSA9PiBncmFwaGljLmF0dHJpYnV0ZXMgJiYgZ3JhcGhpYy5hdHRyaWJ1dGVzLmlkID09PSBcImJ1ZmZlcl9ESVwiXHJcbiAgICApO1xyXG4gICAgaWYgKCFidWZmZXJHcmFwaGljKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJldHVybiBidWZmZXJHcmFwaGljLmdlb21ldHJ5O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXJ0REEgPSBhc3luYyAocmllc2dvOiBTdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChzZWxlY3RlZEltYWdlcmllcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHRvYXN0Lndhcm5pbmcoXHJcbiAgICAgICAgICBgRGViZSBzZWxlY2Npb25hciB1bmEgaW1hZ2VuIGFudGVzIGRlIGVqZWN1dGFyIGVzdGUgcHJvY2Vzb2AsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHNldExvYWRpbmdJbmNlbmRpbyhmYWxzZSk7XHJcbiAgICAgICAgc2V0TG9hZGluZ0ludW5kYWNpb24oZmFsc2UpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgICAgIC8vIEFncmVnYXIgY2FwYSBkZSBsw61taXRlIHVyYmFubyBhbCBtYXBhXHJcbiAgICAgICAgICBjb25zdCBbRmVhdHVyZUxheWVyXSA9IGF3YWl0IGxvYWRNb2R1bGVzKFtcclxuICAgICAgICAgICAgXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIixcclxuICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgIGxldCB1cmJhbkxpbWl0TGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChcclxuICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci5pZCA9PT0gXCJ1cmJhbkxpbWl0TGF5ZXJcIlxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAoIXVyYmFuTGltaXRMYXllcikge1xyXG4gICAgICAgICAgICB1cmJhbkxpbWl0TGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgICAgICAgICBpZDogXCJ1cmJhbkxpbWl0TGF5ZXJcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJMw61taXRlIHVyYmFubyBQbGFuIFJlZ3VsYWRvciBDb211bmFsXCIsXHJcbiAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vZ2lzY2l2LnNuc2F0LmNsL3ZlY3Rvci9yZXN0L3NlcnZpY2VzL0NvbWFuZG9fQ29udHJvbC9Mw61taXRlX3VyYmFub19QbGFuX1JlZ3VsYWRvcl9Db211bmFsL0ZlYXR1cmVTZXJ2ZXIvMTE3XCIsXHJcbiAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmFkZCh1cmJhbkxpbWl0TGF5ZXIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXJiYW5MaW1pdExheWVyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxldCBkYWdlclpvbmVMYXllcjEgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChcclxuICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci50aXRsZSA9PT0gdChcImZpcmVMYXllclwiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGxldCBkYWdlclpvbmVMYXllcjIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChcclxuICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci50aXRsZSA9PT0gdChcImZsb29kTGF5ZXJcIilcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgaWYgKCFkYWdlclpvbmVMYXllcjEgJiYgcmllc2dvID09PSBcImluY2VuZGlvXCIpIHtcclxuICAgICAgICAgICAgYXdhaXQgaW5jZW5kaW8oKTtcclxuICAgICAgICAgICAgZGFnZXJab25lTGF5ZXIxID0gamltdU1hcFZpZXcudmlldy5tYXAubGF5ZXJzLmZpbmQoXHJcbiAgICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci50aXRsZSA9PT0gdChcImZpcmVMYXllclwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFkYWdlclpvbmVMYXllcjIgJiYgcmllc2dvID09PSBcImludW5kYWNpb25cIikge1xyXG4gICAgICAgICAgICBhd2FpdCBpbnVuZGFjaW9uKCk7XHJcbiAgICAgICAgICAgIGRhZ2VyWm9uZUxheWVyMiA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmxheWVycy5maW5kKFxyXG4gICAgICAgICAgICAgIChsYXllcikgPT4gbGF5ZXIudGl0bGUgPT09IHQoXCJmbG9vZExheWVyXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKChqaW11TWFwVmlldyAmJiBkYWdlclpvbmVMYXllcjEpIHx8IGRhZ2VyWm9uZUxheWVyMikge1xyXG4gICAgICAgICAgICBpZiAoZGFnZXJab25lTGF5ZXIxKSB7XHJcbiAgICAgICAgICAgICAgY2FwYVRlbXBvcmFsKGRhZ2VyWm9uZUxheWVyMSwgcmllc2dvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGFnZXJab25lTGF5ZXIyKSB7XHJcbiAgICAgICAgICAgICAgY2FwYVRlbXBvcmFsKGRhZ2VyWm9uZUxheWVyMiwgcmllc2dvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcImppbXVNYXBWaWV3IG8gY2FwYSBubyBlbmNvbnRyYWRhLlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjYXBhVGVtcG9yYWwgPSBhc3luYyAoZGFnZXJab25lTGF5ZXIsIHJpZXNnbzogU3RyaW5nKSA9PiB7XHJcbiAgICBzZXRTaG93QnVmZmVyKHRydWUpO1xyXG4gICAgY29uc3QgW1NrZXRjaCwgR3JhcGhpY3NMYXllciwgU2ltcGxlRmlsbFN5bWJvbF0gPSBhd2FpdCBsb2FkTW9kdWxlcyhbXHJcbiAgICAgIFwiZXNyaS93aWRnZXRzL1NrZXRjaFwiLFxyXG4gICAgICBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIixcclxuICAgICAgXCJlc3JpL3N5bWJvbHMvU2ltcGxlRmlsbFN5bWJvbFwiLFxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gQ3JlYXIgdW5hIGNhcGEgZ3LDoWZpY2EgdGVtcG9yYWxcclxuICAgIGNvbnN0IHRlbXBHcmFwaGljc0xheWVyID0gbmV3IEdyYXBoaWNzTGF5ZXIoe1xyXG4gICAgICBpZDogXCJ0ZW1wR3JhcGhpY3NMYXllclwiLFxyXG4gICAgICB0aXRsZTogdChcImJ1ZmZlckxheWVyXCIpLFxyXG4gICAgfSk7XHJcbiAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQodGVtcEdyYXBoaWNzTGF5ZXIpO1xyXG5cclxuICAgIC8vIE9idGVuZXIgbGFzIGVudGlkYWRlcyBkZSBsYSBjYXBhIG9yaWdpbmFsIHkgY29waWFybGFzIGEgbGEgY2FwYSB0ZW1wb3JhbFxyXG4gICAgY29uc3QgcXVlcnkgPSBkYWdlclpvbmVMYXllci5jcmVhdGVRdWVyeSgpO1xyXG4gICAgcXVlcnkud2hlcmUgPSBcIjE9MVwiOyAvLyBTZWxlY2Npb25hciB0b2RvcyBsb3MgZWxlbWVudG9zXHJcbiAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWU7XHJcbiAgICBxdWVyeS5vdXRTcGF0aWFsUmVmZXJlbmNlID0gamltdU1hcFZpZXcudmlldy5zcGF0aWFsUmVmZXJlbmNlO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBkYWdlclpvbmVMYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcclxuICAgIHJlc3VsdHMuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4ge1xyXG4gICAgICBjb25zdCBncmFwaGljID0gZmVhdHVyZS5jbG9uZSgpO1xyXG4gICAgICBncmFwaGljLnN5bWJvbCA9IG5ldyBTaW1wbGVGaWxsU3ltYm9sKHtcclxuICAgICAgICBjb2xvcjogcmllc2dvID09PSBcImluY2VuZGlvXCIgPyBbMjU1LCAyNTUsIDAsIDAuOF0gOiBbMCwgMCwgMjU1LCAwLjVdLFxyXG4gICAgICAgIG91dGxpbmU6IG51bGwsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGVtcEdyYXBoaWNzTGF5ZXIuYWRkKGdyYXBoaWMpO1xyXG4gICAgICB0ZW1wR3JhcGhpY3NMYXllci5saXN0TW9kZSA9IFwiaGlkZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ29uZmlndXJhciBlbCBTa2V0Y2ggcGFyYSB0cmFiYWphciBjb24gbGEgY2FwYSB0ZW1wb3JhbFxyXG4gICAgY29uc3Qgc2tldGNoRWRpdCA9IG5ldyBTa2V0Y2goe1xyXG4gICAgICB2aWV3OiBqaW11TWFwVmlldy52aWV3LFxyXG4gICAgICBsYXllcjogdGVtcEdyYXBoaWNzTGF5ZXIsXHJcbiAgICAgIGNyZWF0aW9uTW9kZTogXCJ1cGRhdGVcIixcclxuICAgICAgYXZhaWxhYmxlQ3JlYXRlVG9vbHM6IFtcIlwiXSxcclxuICAgICAgc2NhbGU6IFwibVwiLFxyXG4gICAgICB2aXNpYmxlRWxlbWVudHM6IHtcclxuICAgICAgICBjcmVhdGVUb29sczogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0aW9uVG9vbHM6IGZhbHNlLFxyXG4gICAgICAgIHNldHRpbmdzTWVudTogZmFsc2UsXHJcbiAgICAgICAgdW5kb1JlZG9NZW51OiBmYWxzZSxcclxuICAgICAgICBkdXBsaWNhdGVCdXR0b246IGZhbHNlLFxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRVcGRhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgZW5hYmxlU2NhbGluZzogdHJ1ZSxcclxuICAgICAgICBlbmFibGVSb3RhdGlvbjogdHJ1ZSxcclxuICAgICAgICBtdWx0aXBsZVNlbGVjdGlvbkVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHRvb2w6IFwibW92ZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBDb25maWd1cmFyIGVsIGNvbG9yIGRlbCBvdXRsaW5lIGRlIHNlbGVjY2nDs24gZW4gY3lhblxyXG4gICAgICB1cGRhdGVPbkdyYXBoaWNDbGljazogdHJ1ZSxcclxuICAgICAgc25hcHBpbmdPcHRpb25zOiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRhaW5lcjogXCJteVNrZXRjaENvbnRhaW5lclB1bnRvXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQZXJzb25hbGl6YXIgZWwgdGV4dG8gZGVsIGxhYmVsIGRlIHNlbGVjY2nDs24gZGVzcHXDqXMgZGUgcXVlIGVsIFNrZXRjaCBzZSByZW5kZXJpY2VcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBza2V0Y2hDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2tldGNoQ29udGFpbmVyUHVudG9cIik7XHJcblxyXG4gICAgICBpZiAoc2tldGNoQ29udGFpbmVyKSB7XHJcbiAgICAgICAgLy8gRnVuY2nDs24gcGFyYSByZWVtcGxhemFyIGVsIHRleHRvIGVuIHRvZG9zIGxvcyBub2Rvc1xyXG4gICAgICAgIGNvbnN0IHJlcGxhY2VTZWxlY3Rpb25UZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgLy8gQnVzY2FyIHRvZG9zIGxvcyBlbGVtZW50b3NcclxuICAgICAgICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gc2tldGNoQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpO1xyXG4gICAgICAgICAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgLy8gQnVzY2FyIG5vZG9zIGRlIHRleHRvIGRpcmVjdG9zXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQ/LmluY2x1ZGVzKFwiU2VsZWNjacOzblwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50Py5pbmNsdWRlcyhcIlNlbGVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBub2RlLnRleHRDb250ZW50LnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgL1NlbGVjY2nDs258U2VsZWN0aW9uLyxcclxuICAgICAgICAgICAgICAgICAgICBcIlBvbMOtZ29ub3Mgc2VsZWNjaW9uYWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIEJ1c2NhciBwb3Igc2VsZWN0b3JlcyBlc3BlY8OtZmljb3MgZGVsIFNrZXRjaFxyXG4gICAgICAgICAgY29uc3QgbGFiZWxzID0gc2tldGNoQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgIFwiLmVzcmktc2tldGNoX19wYW5lbC1sYWJlbCwgLmVzcmktc2tldGNoX19zZWN0aW9uLWxhYmVsLCAuZXNyaS1za2V0Y2hfX2hlYWRpbmctdGV4dFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbGFiZWxzLmZvckVhY2goKGxhYmVsOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQ/LmluY2x1ZGVzKFwiU2VsZWNjacOzblwiKSB8fFxyXG4gICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50Py5pbmNsdWRlcyhcIlNlbGVjdGlvblwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsLnRleHRDb250ZW50LnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAvU2VsZWNjacOzbnxTZWxlY3Rpb24vLFxyXG4gICAgICAgICAgICAgICAgXCJQb2zDrWdvbm9zIHNlbGVjY2lvbmFkb3NcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEVqZWN1dGFyIGlubWVkaWF0YW1lbnRlXHJcbiAgICAgICAgcmVwbGFjZVNlbGVjdGlvblRleHQoKTtcclxuXHJcbiAgICAgICAgLy8gT2JzZXJ2YXIgY2FtYmlvc1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgcmVwbGFjZVNlbGVjdGlvblRleHQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNrZXRjaENvbnRhaW5lciwge1xyXG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwMCk7XHJcblxyXG4gICAgLy8gQXBsaWNhciBjb2xvciBjeWFuIGFsIG91dGxpbmUgZGUgc2VsZWNjacOzbiBkZWwgU2tldGNoXHJcbiAgICAvLyBBY2NlZGVyIGEgbGEgY2FwYSBpbnRlcm5hIGRlIGdyw6FmaWNvcyBkZWwgU2tldGNoIHBhcmEgbW9kaWZpY2FyIGxvcyBzw61tYm9sb3NcclxuXHJcbiAgICAvLyBDYXB0dXJhciBlbCBwb2zDrWdvbm8gc2VsZWNjaW9uYWRvXHJcbiAgICBza2V0Y2hFZGl0Lm9uKFwidXBkYXRlXCIsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuc3RhdGUgPT09IFwiYWN0aXZlXCIgfHwgZXZlbnQuc3RhdGUgPT09IFwic3RhcnRcIikge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGV2ZW50LmdyYXBoaWNzICYmXHJcbiAgICAgICAgICBldmVudC5ncmFwaGljc1swXS5nZW9tZXRyeS50eXBlID09PSBcInBvbHlnb25cIiAvLyBWZXJpZmljYXIgcXVlIGVzIHVuIHBvbMOtZ29ub1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY29uc3QgcG9seWdvbkdlb21ldHJ5ID0gZXZlbnQuZ3JhcGhpY3NbMF0uZ2VvbWV0cnk7XHJcblxyXG4gICAgICAgICAgc2V0U2VsZWN0ZWRQb2x5Z29uKHBvbHlnb25HZW9tZXRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlamVjdXRhckJ1ZmZlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghc2VsZWN0ZWRQb2x5Z29uKSB7XHJcbiAgICAgIHRvYXN0Lndhcm5pbmcodChcImJ1ZmZlcldhcm5pbmdcIiksIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvYWRpbmdCdWZmZXIodHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgW2dlb21ldHJ5RW5naW5lLCBHcmFwaGljXSA9IGF3YWl0IGxvYWRNb2R1bGVzKFtcclxuICAgICAgICBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIixcclxuICAgICAgICBcImVzcmkvR3JhcGhpY1wiLFxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIC8vIENvbnZlcnRpciBlbCB2YWxvciBkZWwgaW5wdXQgYSBuw7ptZXJvIChkaXN0YW5jaWEgZGVsIGJ1ZmZlcilcclxuICAgICAgY29uc3QgYnVmZmVyRGlzdGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICBcImlucHV0QnVmZmVyXCJcclxuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBjb25zdCBkaXN0YW5jZUttID0gcGFyc2VGbG9hdChidWZmZXJEaXN0YW5jZS52YWx1ZSk7XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlTWV0ZXJzID0gZGlzdGFuY2VLbSAqIDEwMDA7XHJcblxyXG4gICAgICAvL1NlIGVsaW1pbmFyIGVsIGJ1ZmZlciBhbnRlcmlvclxyXG4gICAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlldztcclxuICAgICAgdmlldy5ncmFwaGljcy5pdGVtc1xyXG4gICAgICAgIC5maWx0ZXIoKGcpID0+IGcuYXR0cmlidXRlcz8uaWQgPT09IFwiYnVmZmVyX0RJXCIpXHJcbiAgICAgICAgLmZvckVhY2goKGcpID0+IHZpZXcuZ3JhcGhpY3MucmVtb3ZlKGcpKTtcclxuXHJcbiAgICAgIC8vIEdlbmVyYXIgZWwgYnVmZmVyIGNvbiBsYSBkaXN0YW5jaWEgaW5ncmVzYWRhXHJcbiAgICAgIGNvbnN0IGJ1ZmZlckdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKFxyXG4gICAgICAgIHNlbGVjdGVkUG9seWdvbixcclxuICAgICAgICBkaXN0YW5jZU1ldGVycyxcclxuICAgICAgICBcIm1ldGVyc1wiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBDYWxjdWxhciDDoXJlYSBkZWwgYnVmZmVyIGVuIG3CslxyXG4gICAgICBjb25zdCBhcmVhQnVmZmVyID0gZ2VvbWV0cnlFbmdpbmUuZ2VvZGVzaWNBcmVhKFxyXG4gICAgICAgIGJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgICAgIFwic3F1YXJlLW1ldGVyc1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHNldEFyZWFCdWZmZXIoYXJlYUJ1ZmZlcik7XHJcblxyXG4gICAgICAvLyBDcmVhciB1biBncsOhZmljbyBwYXJhIGVsIGJ1ZmZlciB5IGFncmVnYXJsbyBhbCBtYXBhXHJcbiAgICAgIGNvbnN0IGJ1ZmZlckdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7XHJcbiAgICAgICAgZ2VvbWV0cnk6IGJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgICAgIHN5bWJvbDoge1xyXG4gICAgICAgICAgdHlwZTogXCJzaW1wbGUtZmlsbFwiLFxyXG4gICAgICAgICAgY29sb3I6IFsyNTUsIDAsIDAsIDAuMV0sXHJcbiAgICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBbMjU1LCAwLCAwXSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgaWQ6IFwiYnVmZmVyX0RJXCIsIC8vIElEIMO6bmljbyBiYXNhZG8gZW4gdGltZXN0YW1wXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRCdWZmZXIoYnVmZmVyR3JhcGhpYyk7XHJcblxyXG4gICAgICB2aWV3LmdyYXBoaWNzLmFkZChidWZmZXJHcmFwaGljKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBnZW5lcmFyIGVsIGJ1ZmZlcjpcIiwgZXJyb3IpO1xyXG4gICAgICB0b2FzdC5lcnJvcih0KFwiYnVmZmVyRXJyb3JcIiksIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICB9KTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmdCdWZmZXIoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRpYnVqYXJMaW5lYXNQcm94aW1pZGFkID0gYXN5bmMgKFxyXG4gICAgdG91Y2hpbmdQb2x5Z29uLFxyXG4gICAgZ2VvbWV0cmllc0luQnVmZmVyXHJcbiAgKSA9PiB7XHJcbiAgICBpZiAoIXRvdWNoaW5nUG9seWdvbiB8fCBnZW9tZXRyaWVzSW5CdWZmZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIk5vIGhheSBnZW9tZXRyw61hcyBwYXJhIGNvbmVjdGFyLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtnZW9tZXRyeUVuZ2luZSwgUG9seWxpbmUsIEdyYXBoaWMsIEdyYXBoaWNzTGF5ZXJdID1cclxuICAgICAgYXdhaXQgbG9hZE1vZHVsZXMoW1xyXG4gICAgICAgIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiLFxyXG4gICAgICAgIFwiZXNyaS9nZW9tZXRyeS9Qb2x5bGluZVwiLFxyXG4gICAgICAgIFwiZXNyaS9HcmFwaGljXCIsXHJcbiAgICAgICAgXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCIsXHJcbiAgICAgIF0pO1xyXG5cclxuICAgIC8vIENyZWFyIG8gbGltcGlhciBsYSBjYXBhIGRlIGzDrW5lYXMgZGUgcHJveGltaWRhZFxyXG4gICAgbGV0IGxpbmVMYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmZpbmRMYXllckJ5SWQoXCJwcm94aW1pdHlMaW5lc0xheWVyXCIpO1xyXG4gICAgaWYgKCFsaW5lTGF5ZXIpIHtcclxuICAgICAgbGluZUxheWVyID0gbmV3IEdyYXBoaWNzTGF5ZXIoe1xyXG4gICAgICAgIGlkOiBcInByb3hpbWl0eUxpbmVzTGF5ZXJcIixcclxuICAgICAgICB0aXRsZTogdChcInByb3hpbWl0eUxheWVyXCIpLFxyXG4gICAgICB9KTtcclxuICAgICAgamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGxpbmVMYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT2J0ZW5lciBjZW50cm9pZGUgZGVsIHBvbMOtZ29ubyBjZW50cmFsXHJcbiAgICBjb25zdCBjZW50cm9pZGUgPSB0b3VjaGluZ1BvbHlnb24uZ2VvbWV0cnkuY2VudHJvaWQ7XHJcblxyXG4gICAgLy8gRGlidWphciB1bmEgbMOtbmVhIGRlc2RlIGVsIGNlbnRyb2lkZSBhIGNhZGEgZ2VvbWV0csOtYSBlbiBnZW9tZXRyaWVzSW5CdWZmZXJcclxuXHJcbiAgICBnZW9tZXRyaWVzSW5CdWZmZXIuZm9yRWFjaCgoZ2VvbWV0cnkpID0+IHtcclxuICAgICAgbGV0IGRlc3Rpbm87XHJcblxyXG4gICAgICBpZiAoZ2VvbWV0cnkuY2VudHJvaWQpIHtcclxuICAgICAgICBkZXN0aW5vID0gZ2VvbWV0cnkuY2VudHJvaWQ7IC8vIFNpIGxhIGdlb21ldHLDrWEgdGllbmUgY2VudHJvaWRlLCB1c2FybG9cclxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeS5leHRlbnQpIHtcclxuICAgICAgICBkZXN0aW5vID0gZ2VvbWV0cnkuZXh0ZW50LmNlbnRlcjsgLy8gU2kgdGllbmUgYGV4dGVudGAsIHVzYXIgc3UgY2VudHJvXHJcbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkudHlwZSA9PT0gXCJwb2ludFwiKSB7XHJcbiAgICAgICAgZGVzdGlubyA9IGdlb21ldHJ5OyAvLyBTaSBlcyB1biBwdW50bywgdXNhcmxvIGRpcmVjdGFtZW50ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIkdlb21ldHLDrWEgc2luIGNlbnRyb2lkZSBuaSBleHRlbnQsIGlnbm9yYW5kbzpcIiwgZ2VvbWV0cnkpO1xyXG4gICAgICAgIHJldHVybjsgLy8gSWdub3JhciBsYSBnZW9tZXRyw61hIHNpIG5vIHRpZW5lIGNlbnRyb2lkZSwgZXh0ZW50IG5pIGVzIHVuIHB1bnRvXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGxpbmVHZW9tZXRyeSA9IG5ldyBQb2x5bGluZSh7XHJcbiAgICAgICAgcGF0aHM6IFtcclxuICAgICAgICAgIFtjZW50cm9pZGUueCwgY2VudHJvaWRlLnldLFxyXG4gICAgICAgICAgW2Rlc3Rpbm8ueCwgZGVzdGluby55XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IGppbXVNYXBWaWV3LnZpZXcuc3BhdGlhbFJlZmVyZW5jZSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkaXN0YW5jZU1ldGVycyA9IGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljTGVuZ3RoKFxyXG4gICAgICAgIGxpbmVHZW9tZXRyeSxcclxuICAgICAgICBcIm1ldGVyc1wiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlS2lsb21ldGVycyA9IGRpc3RhbmNlTWV0ZXJzIC8gMTAwMDtcclxuXHJcbiAgICAgIGNvbnN0IGxpbmVHcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgIGdlb21ldHJ5OiBsaW5lR2VvbWV0cnksXHJcbiAgICAgICAgc3ltYm9sOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInNpbXBsZS1saW5lXCIsXHJcbiAgICAgICAgICBjb2xvcjogWzAsIDAsIDI1NV0sIC8vIEF6dWxcclxuICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgZGlzdGFuY2VfbTogZGlzdGFuY2VNZXRlcnMudG9GaXhlZCgyKSxcclxuICAgICAgICAgIGRpc3RhbmNlX2ttOiBkaXN0YW5jZUtpbG9tZXRlcnMudG9GaXhlZCgyKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvcHVwVGVtcGxhdGU6IHtcclxuICAgICAgICAgIHRpdGxlOiB0KFwicHJveGltaXR5TGF5ZXJcIiksXHJcbiAgICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICBcIjxiPk10czo8L2I+XCIgK1xyXG4gICAgICAgICAgICBkaXN0YW5jZU1ldGVycy50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCJtPGJyPjxiPkttczo8L2I+IFwiICtcclxuICAgICAgICAgICAgZGlzdGFuY2VLaWxvbWV0ZXJzLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICBcIiBrbVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGluZUxheWVyLmFkZChsaW5lR3JhcGhpYyk7XHJcbiAgICAgIGxpbmVMYXllci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgbGluZUxheWVyLmxpc3RNb2RlID0gXCJzaG93XCI7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhcHBseVJhc3RlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgIGNvbnN0IGJ1ZmZlckdlb21ldHJ5ID0gZmluZEJ1ZmZlckdlb21ldHJ5KCk7XHJcblxyXG4gICAgICBpZiAoIWJ1ZmZlckdlb21ldHJ5KSB7XHJcbiAgICAgICAgdG9hc3Qud2FybmluZyhcIk5vIHNlIGVuY29udHLDsyBsYSBnZW9tZXRyw61hIGRlbCBidWZmZXJcIiwge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBbZ2VvbWV0cnlFbmdpbmVdID0gYXdhaXQgbG9hZE1vZHVsZXMoW1xyXG4gICAgICAgIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiLFxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGNvbnN0IHRlbXBHcmFwaGljc0xheWVyID1cclxuICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKFwidGVtcEdyYXBoaWNzTGF5ZXJcIik7XHJcblxyXG4gICAgICBpZiAoIXRlbXBHcmFwaGljc0xheWVyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkxhIGNhcGEgJ3RlbXBHcmFwaGljc0xheWVyJyBubyBleGlzdGUuXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdG91Y2hpbmdQb2x5Z29uID0gdGVtcEdyYXBoaWNzTGF5ZXIuZ3JhcGhpY3MuaXRlbXMuZmluZChcclxuICAgICAgICAoZ3JhcGhpYykgPT5cclxuICAgICAgICAgIGdyYXBoaWMuZ2VvbWV0cnkudHlwZSA9PT0gXCJwb2x5Z29uXCIgJiYgLy8gU29sbyBwb2zDrWdvbm9zXHJcbiAgICAgICAgICBnZW9tZXRyeUVuZ2luZS5pbnRlcnNlY3RzKGdyYXBoaWMuZ2VvbWV0cnksIHNlbGVjdGVkUG9seWdvbikgLy8gVmVyaWZpY2FyIGludGVyc2VjY2nDs25cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICghdG91Y2hpbmdQb2x5Z29uKSB7XHJcbiAgICAgICAgdG9hc3Qud2FybmluZyhcIk5vIHNlIGVuY29udHLDsyBlbCBwb2zDrWdvbm8gc2VsZWNjaW9uYWRvXCIsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQnVzY2FyIGxhIGNhcGEgZGUgbMOtbWl0ZSB1cmJhbm8gcXVlIHlhIGVzdMOhIGVuIGVsIG1hcGFcclxuICAgICAgbGV0IHVyYmFuTGltaXQgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChcclxuICAgICAgICAobGF5ZXIpID0+IGxheWVyLmlkID09PSBcInVyYmFuTGltaXRMYXllclwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoIXVyYmFuTGltaXQpIHtcclxuICAgICAgICB0b2FzdC5lcnJvcihcIk5vIHNlIGVuY29udHLDsyBsYSBjYXBhIGRlIGzDrW1pdGUgdXJiYW5vXCIsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdXJiYW5MaW1pdC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCBnZW9tZXRyaWVzSW5CdWZmZXIgPSBbXTtcclxuXHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gdXJiYW5MaW1pdC5jcmVhdGVRdWVyeSgpO1xyXG4gICAgICBxdWVyeS5nZW9tZXRyeSA9IGJ1ZmZlckdlb21ldHJ5OyAvLyBCdXNjYXIgZGVudHJvIGRlbCBidWZmZXJcclxuICAgICAgcXVlcnkuc3BhdGlhbFJlbGF0aW9uc2hpcCA9IFwiaW50ZXJzZWN0c1wiOyAvLyBJbnRlcnNlY2Npw7NuIGNvbiBlbCBidWZmZXJcclxuICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xyXG4gICAgICBxdWVyeS5vdXRTcGF0aWFsUmVmZXJlbmNlID0gamltdU1hcFZpZXcudmlldy5zcGF0aWFsUmVmZXJlbmNlO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBFc3BlcmFyIGEgcXVlIGxhIGNhcGEgZXN0w6kgY29tcGxldGFtZW50ZSBjYXJnYWRhXHJcbiAgICAgICAgYXdhaXQgdXJiYW5MaW1pdC5sb2FkKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCB1cmJhbkxpbWl0LnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0cy5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIHNlIGVuY29udHJhcm9uIGdlb21ldHLDrWFzIGRlbnRybyBkZWwgYnVmZmVyXCIpO1xyXG4gICAgICAgICAgdG9hc3Qud2FybmluZyhcclxuICAgICAgICAgICAgXCJObyBzZSBlbmNvbnRyYXJvbiBsw61taXRlcyB1cmJhbm9zIGVuIGVsIMOhcmVhIGRlbCBidWZmZXJcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3VsdHMuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4ge1xyXG4gICAgICAgICAgICBnZW9tZXRyaWVzSW5CdWZmZXIucHVzaChmZWF0dXJlLmdlb21ldHJ5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYFNlIGVuY29udHJhcm9uICR7Z2VvbWV0cmllc0luQnVmZmVyLmxlbmd0aH0gZ2VvbWV0csOtYXNgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgY29uc3VsdGFuZG8gbGEgY2FwYTogYCwgZXJyb3IpO1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiRXJyb3IgYWwgY29uc3VsdGFyIGVsIGzDrW1pdGUgdXJiYW5vXCIsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRvdWNoaW5nUG9seWdvbiAmJiBnZW9tZXRyaWVzSW5CdWZmZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGRpYnVqYXJMaW5lYXNQcm94aW1pZGFkKHRvdWNoaW5nUG9seWdvbiwgZ2VvbWV0cmllc0luQnVmZmVyKTtcclxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyaWVzSW5CdWZmZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gWWEgc2UgbW9zdHLDsyBlbCB3YXJuaW5nIGFycmliYVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKHQoXCJ1cmJhbkxpbWl0c0Vycm9yXCIpLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIDwhLS0tLS0tLS0gSGVscGVycyAtLS0tLS0tLS0tLS0tPlxyXG4gIC8vTGltcGlhIGxhcyBjYXBhcyBnZW5lcmFkYXMgc2kgc2UgY2FtYmlhIGxhcyBpbWFnZW5lcyBzZWxlY2Npb25hZGFzXHJcbiAgY29uc3QgY2xlYW5MYXllcnMgPSAodGl0bGU6IFN0cmluZykgPT4ge1xyXG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgIGNvbnN0IGxheWVyID0gamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZpbmQoXHJcbiAgICAgICAgKGxheWVyKSA9PiBsYXllci50aXRsZSA9PSB0aXRsZVxyXG4gICAgICApO1xyXG4gICAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgICAvLyBPY3VsdGEgdG9kYXMgbGFzIGNhcGFzIGRlIHNlbnNvcmVzIHBvciBkZWZlY3RvXHJcbiAgICAgICAgbGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIEVzdG8gb2N1bHRhIGxhIGNhcGEgZGVsIHdpZGdldCBkZSBjYXBhcyAoTGF5ZXJMaXN0KVxyXG4gICAgICAgIGxheWVyLmxpc3RNb2RlID0gXCJoaWRlXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbW92ZUxheWVyID0gKHRpdGxlOiBTdHJpbmcpID0+IHtcclxuICAgIGlmIChqaW11TWFwVmlldykge1xyXG4gICAgICBjb25zdCBsYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5maW5kKFxyXG4gICAgICAgIChsYXllcikgPT4gbGF5ZXIudGl0bGUgPT0gdGl0bGVcclxuICAgICAgKTtcclxuICAgICAgaWYgKGxheWVyKSB7XHJcbiAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGxheWVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUxheWVyQnlJZCA9IChpZDogU3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgY29uc3QgbGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZmluZChcclxuICAgICAgICAobGF5ZXIpID0+IGxheWVyLmlkID09IGlkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShsYXllcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVtb3ZlTGF5ZXIoXCJ0ZW1wR3JhcGhpY3NMYXllclwiKTtcclxuICAgIHJlbW92ZUxheWVyKHQoXCJmaXJlTGF5ZXJcIikpO1xyXG4gICAgcmVtb3ZlTGF5ZXIodChcImZsb29kTGF5ZXJcIikpO1xyXG4gICAgcmVtb3ZlTGF5ZXIodChcImJ1ZmZlckxheWVyXCIpKTtcclxuICAgIHJlbW92ZUxheWVyKHQoXCJwcm94aW1pdHlMYXllclwiKSk7XHJcbiAgICByZW1vdmVMYXllckJ5SWQoXCJ1cmJhbkxpbWl0TGF5ZXJcIik7IC8vIEVsaW1pbmFyIGxhIGNhcGEgZGUgbMOtbWl0ZSB1cmJhbm9cclxuICAgIHNldFNob3dCdWZmZXIoZmFsc2UpO1xyXG4gICAgc2V0U2VsZWN0ZWRQb2x5Z29uKG51bGwpO1xyXG4gIH0sIFtzZWxlY3RlZEltYWdlcmllcywgZ2VvcHJvY2Vzc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldCBwcm94aW1pdHktd2lkZ2V0XCI+XHJcbiAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgcHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XHJcbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJveGltaXR5LW1haW4tY29udGVudFwiPlxyXG4gICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8VGl0bGVXaXRoVG9vbHRpcFxyXG4gICAgICAgICAgICB0aXRsZT17dChcIndpZGdldExhYmVsXCIpfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17dChcImRlc2NyaXB0aW9uXCIpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJveGltaXR5LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAge3Nob3dCdWZmZXIgPT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHA+e3QoXCJkZXNjcmlwdGlvblwiKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3hpbWl0eS1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nSW5jZW5kaW8gPT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgdHlwZT1cIkRPTlVUXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc3RhcnREQShcImluY2VuZGlvXCIpfSBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KFwiaW5jZW5kaW9cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nSW51bmRhY2lvbiA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyB0eXBlPVwiRE9OVVRcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3RhcnREQShcImludW5kYWNpb25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KFwiaW51bmRhY2lvblwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7c2hvd0J1ZmZlciA9PT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm94aW1pdHktYnVmZmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibXlTa2V0Y2hDb250YWluZXJQdW50b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm94aW1pdHktYnVmZmVyLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+e3QoXCJidWZmZXJMYWJlbFwiKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJveGltaXR5LWJ1ZmZlci1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dEJ1ZmZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YnVmZmVyRGlzdGFuY2V9IC8vIFVzYSBlbCBlc3RhZG9cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVCdWZmZXJDaGFuZ2V9IC8vIE1hbmVqYSBsb3MgY2FtYmlvc1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+S208L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtlamVjdXRhckJ1ZmZlcn0gc2l6ZT1cInNtXCIgdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dChcImdlbmVyYXJCdWZmZXJcIil9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXBwbHlSYXN0ZXJGdW5jdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KFwiZGlidWphckxpbmVhc1wiKX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=