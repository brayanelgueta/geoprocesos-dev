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
                const response = yield fetch(`http://127.0.0.1:5000/getFireZone`, {
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
            const response = yield fetch(`http://127.0.0.1:5000/getFloodZone`, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wcm94QXJlYS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUNqQjtBQUN4Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2UkFBNlIsTUFBTSxXQUFXLFVBQVUsVUFBVSxX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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RCxJQUFJO0FBQ0o7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXLFFBQVEsYUFBYSwrQ0FBK0MsTUFBTTtBQUM5RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGFBQWE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZLE1BQU0sTUFBTSxxQ0FBcUMsNkJBQTZCO0FBQ3pIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxrREFBa0Qsa0NBQWtDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxZQUFZLElBQXFDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QyxTQUFTLElBRWIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUNULENBQ1YsQ0FDRyxDQUNMLENBQ0o7b0JBQ0EsVUFBVSxLQUFLLElBQUksSUFBSSxDQUN0QixxRUFBSyxTQUFTLEVBQUMsa0JBQWtCO3dCQUMvQixxRUFBSyxFQUFFLEVBQUMsd0JBQXdCLEdBQU87d0JBQ3ZDLHFFQUFLLFNBQVMsRUFBQywwQkFBMEI7NEJBQ3ZDLHVFQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBSzs0QkFDekIscUVBQUssU0FBUyxFQUFDLHdCQUF3QjtnQ0FDckMsdUVBQ0UsRUFBRSxFQUFDLGFBQWEsRUFDaEIsSUFBSSxFQUFDLE1BQU0sRUFDWCxHQUFHLEVBQUMsR0FBRyxFQUNQLEdBQUcsRUFBQyxLQUFLLEVBQ1QsS0FBSyxFQUFFLGNBQWMsRUFDckIsUUFBUSxFQUFFLGtCQUFrQixHQUM1QjtnQ0FDRiw0RUFBUyxDQUNMOzRCQUVOLDREQUFDLDJDQUFNLElBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxTQUFTLElBQ3RELENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FDWjs0QkFDVCw0REFBQywyQ0FBTSxJQUNMLE9BQU8sRUFBRSxtQkFBbUIsRUFDNUIsSUFBSSxFQUFDLElBQUksRUFDVCxJQUFJLEVBQUMsU0FBUyxJQUViLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FDWixDQUNMLENBQ0YsQ0FDUCxDQUNHLENBQ0YsQ0FDRixDQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGlFQUFlLE1BQU0sRUFBQztBQUVkLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hBcmVhL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vZXNyaS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9tb2R1bGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vc2NyaXB0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vdXRpbHMvY3NzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXNyaS1sb2FkZXIvZGlzdC9lc20vdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy91cmwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hBcmVhL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3M/YTg0YSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9maWxsZWQvc3VnZ2VzdGVkL2hlbHAuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL2ZpbGxlZC9zdWdnZXN0ZWQvaGVscC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy9jb21wb25lbnRzL1RpdGxlV2l0aFRvb2x0aXAudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvaGVscGVycy9nZXRTZXNzaW9uVG9rZW4udHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy9ob29rcy91c2VMb2NhbGUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hBcmVhL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZGlzdC9yZWFjdC1yZWR1eC5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC10b2FzdGlmeS9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcHJveEFyZWEvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnByb3hpbWl0eS13aWRnZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJveGltaXR5LW1haW4tY29udGVudCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByb3hpbWl0eS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTcwcHg7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLnByb3hpbWl0eS1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhlY2M7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIH1cbiAgfVxufVxuXG4ucHJveGltaXR5LWJ1ZmZlci1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGlucHV0IHtcbiAgICB3aWR0aDogNjAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzI4MkI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICMwMDhlY2M7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cbiAgcCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi5wcm94aW1pdHktYnVmZmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgI215U2tldGNoQ29udGFpbmVyUHVudG8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWluLXdpZHRoOiAxODBweDtcbiAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAucHJveGltaXR5LWJ1ZmZlci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIE92ZXJyaWRlIGRlbCBoaWdobGlnaHQgZGUgc2VsZWNjacOzbiBkZWwgU2tldGNoIC0gQ29sb3IgY3lhbiAqL1xuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19ncmFwaGljcy1sYXllci1oaWdobGlnaHQge1xuICBzdHJva2U6IGN5YW4gIWltcG9ydGFudDtcbiAgc3Ryb2tlLXdpZHRoOiAzcHggIWltcG9ydGFudDtcbiAgZmlsbDogcmdiYSgwLCAyNTUsIDI1NSwgMC4xKSAhaW1wb3J0YW50O1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgZWwgY29udGVuZWRvciBkZWwgU2tldGNoIGN1YW5kbyBoYXkgc2VsZWNjacOzbiBhY3RpdmEgKi9cbi5lc3JpLXZpZXcgLmVzcmktdmlldy1zdXJmYWNlLS1pbnNldC1vdXRsaW5lOmZvY3VzOjphZnRlciB7XG4gIG91dGxpbmUtY29sb3I6IGN5YW4gIWltcG9ydGFudDtcbn1cblxuLyogT3ZlcnJpZGUgZGVsIGNvbG9yIGRlIHNlbGVjY2nDs24gZGVsIHBvbMOtZ29ubyBlbiBlbCBtYXBhICovXG4uZXNyaS1za2V0Y2hfX2dyYXBoaWNzLWxheWVyIC5lc3JpLXNrZXRjaF9fZ3JhcGhpY3MtbGF5ZXItLXNlbGVjdGVkIHtcbiAgb3V0bGluZTogM3B4IHNvbGlkIGN5YW4gIWltcG9ydGFudDtcbn1cblxuLyogUGVyc29uYWxpemFjacOzbiBkZWwgdGV4dG8gXCJTZWxlY2Npw7NuXCIgKi9cbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9faGVhZGluZy10ZXh0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGRlIHBvbMOtZ29ub3NcIjtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4vKiBNw6l0b2RvIGFsdGVybmF0aXZvIHBhcmEgc29icmVzY3JpYmlyIGVsIGxhYmVsIGNvbXBsZXRvICovXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX3NlY3Rpb24tbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XG4gIGZvbnQtc2l6ZTogMDtcbn1cblxuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19zZWN0aW9uLWxhYmVsOmZpcnN0LW9mLXR5cGU6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29udGVudDogXCJQb2zDrWdvbm9zIHNlbGVjY2lvbmFkb3M6IFwiO1xuICBjb2xvcjogIzAwRkZGRjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9nZW9wcm9jZXNvcyUyMGV4cHJpZW5jZSUyMGJ1aWxkZXIvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hBcmVhL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3NcIixcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Byb3hBcmVhL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FERUY7O0FDQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBREdGOztBQ0FBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RURHRjtBQUNGOztBQ0FBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFFQTtJQUNFLHlCQUFBO0lBQ0EsT0FBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtJQUNBLDZCQUFBO0lBQ0E7TUFDRSx5QkFBQTtNQUNBLG9DQUFBO01BQ0Esd0NBQUE7SURFRjtFQUNGO0FBQ0Y7O0FDQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUE7SUFDRSxVQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQTtNQUNFLHFCQUFBO01BQ0Esd0NBQUE7TUFDQSxhQUFBO0lERUY7RUFDRjtFQ0FBO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VERUY7QUFDRjs7QUNBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUVBO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0VERUY7RUNDQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLFFBQUE7SUFDQSxvQkFBQTtJQUVBO01BQ0UseUJBQUE7TUFDQSxvQkFBQTtNQUNBLGNBQUE7TUFDQSxtQkFBQTtNQUNBLHlCQUFBO01BQ0EsV0FBQTtNQUVBO1FBQ0UseUJBQUE7UUFDQSxvQ0FBQTtRQUNBLHdDQUFBO01EREY7SUFDRjtFQUNGO0FBQ0Y7O0FDSUEsZ0VBQUE7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1Q0FBQTtBRERGOztBQ0lBLHNFQUFBO0FBQ0E7RUFDRSw4QkFBQTtBRERGOztBQ0lBLDREQUFBO0FBQ0E7RUFDRSxrQ0FBQTtBRERGOztBQ0lBLDBDQUFBO0FBQ0E7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0FEREY7O0FDSUEsMkRBQUE7QUFDQTtFQUNFLFlBQUE7QURERjs7QUNJQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRERGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLnByb3hpbWl0eS13aWRnZXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJveGltaXR5LW1haW4tY29udGVudCB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucHJveGltaXR5LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxNzBweDtcXG4gIHAge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLnByb3hpbWl0eS1idXR0b25zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhlY2M7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MiAhaW1wb3J0YW50O1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnByb3hpbWl0eS1idWZmZXItaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBpbnB1dCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjgyQjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICAmOmZvY3VzIHtcXG4gICAgICBib3JkZXItY29sb3I6ICMwMDhlY2M7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICB9XFxuICBwIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLnByb3hpbWl0eS1idWZmZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICNteVNrZXRjaENvbnRhaW5lclB1bnRvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG4gIC5wcm94aW1pdHktYnVmZmVyLWFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MiAhaW1wb3J0YW50O1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyogT3ZlcnJpZGUgZGVsIGhpZ2hsaWdodCBkZSBzZWxlY2Npw7NuIGRlbCBTa2V0Y2ggLSBDb2xvciBjeWFuICovXFxuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19ncmFwaGljcy1sYXllci1oaWdobGlnaHQge1xcbiAgc3Ryb2tlOiBjeWFuICFpbXBvcnRhbnQ7XFxuICBzdHJva2Utd2lkdGg6IDNweCAhaW1wb3J0YW50O1xcbiAgZmlsbDogcmdiYSgwLCAyNTUsIDI1NSwgMC4xKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBFc3RpbG9zIHBhcmEgZWwgY29udGVuZWRvciBkZWwgU2tldGNoIGN1YW5kbyBoYXkgc2VsZWNjacOzbiBhY3RpdmEgKi9cXG4uZXNyaS12aWV3IC5lc3JpLXZpZXctc3VyZmFjZS0taW5zZXQtb3V0bGluZTpmb2N1czo6YWZ0ZXIge1xcbiAgb3V0bGluZS1jb2xvcjogY3lhbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBPdmVycmlkZSBkZWwgY29sb3IgZGUgc2VsZWNjacOzbiBkZWwgcG9sw61nb25vIGVuIGVsIG1hcGEgKi9cXG4uZXNyaS1za2V0Y2hfX2dyYXBoaWNzLWxheWVyIC5lc3JpLXNrZXRjaF9fZ3JhcGhpY3MtbGF5ZXItLXNlbGVjdGVkIHtcXG4gIG91dGxpbmU6IDNweCBzb2xpZCBjeWFuICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFBlcnNvbmFsaXphY2nDs24gZGVsIHRleHRvIFxcXCJTZWxlY2Npw7NuXFxcIiAqL1xcbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9faGVhZGluZy10ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIGRlIHBvbMOtZ29ub3NcXFwiO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBNw6l0b2RvIGFsdGVybmF0aXZvIHBhcmEgc29icmVzY3JpYmlyIGVsIGxhYmVsIGNvbXBsZXRvICovXFxuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19zZWN0aW9uLWxhYmVsOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC1zaXplOiAwO1xcbn1cXG5cXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX3NlY3Rpb24tbGFiZWw6Zmlyc3Qtb2YtdHlwZTo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbnRlbnQ6IFxcXCJQb2zDrWdvbm9zIHNlbGVjY2lvbmFkb3M6IFxcXCI7XFxuICBjb2xvcjogIzAwRkZGRjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIixcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLnByb3hpbWl0eS13aWRnZXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJveGltaXR5LW1haW4tY29udGVudCB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucHJveGltaXR5LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxNzBweDtcXG4gIHAge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLnByb3hpbWl0eS1idXR0b25zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhlY2M7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MiAhaW1wb3J0YW50O1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnByb3hpbWl0eS1idWZmZXItaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBpbnB1dCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjgyQjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICAmOmZvY3VzIHtcXG4gICAgICBib3JkZXItY29sb3I6ICMwMDhlY2M7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICB9XFxuICBwIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLnByb3hpbWl0eS1idWZmZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICNteVNrZXRjaENvbnRhaW5lclB1bnRvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG4gIC5wcm94aW1pdHktYnVmZmVyLWFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MiAhaW1wb3J0YW50O1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyogT3ZlcnJpZGUgZGVsIGhpZ2hsaWdodCBkZSBzZWxlY2Npw7NuIGRlbCBTa2V0Y2ggLSBDb2xvciBjeWFuICovXFxuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19ncmFwaGljcy1sYXllci1oaWdobGlnaHQge1xcbiAgc3Ryb2tlOiBjeWFuICFpbXBvcnRhbnQ7XFxuICBzdHJva2Utd2lkdGg6IDNweCAhaW1wb3J0YW50O1xcbiAgZmlsbDogcmdiYSgwLCAyNTUsIDI1NSwgMC4xKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBFc3RpbG9zIHBhcmEgZWwgY29udGVuZWRvciBkZWwgU2tldGNoIGN1YW5kbyBoYXkgc2VsZWNjacOzbiBhY3RpdmEgKi9cXG4uZXNyaS12aWV3IC5lc3JpLXZpZXctc3VyZmFjZS0taW5zZXQtb3V0bGluZTpmb2N1czo6YWZ0ZXIge1xcbiAgb3V0bGluZS1jb2xvcjogY3lhbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBPdmVycmlkZSBkZWwgY29sb3IgZGUgc2VsZWNjacOzbiBkZWwgcG9sw61nb25vIGVuIGVsIG1hcGEgKi9cXG4uZXNyaS1za2V0Y2hfX2dyYXBoaWNzLWxheWVyIC5lc3JpLXNrZXRjaF9fZ3JhcGhpY3MtbGF5ZXItLXNlbGVjdGVkIHtcXG4gIG91dGxpbmU6IDNweCBzb2xpZCBjeWFuICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFBlcnNvbmFsaXphY2nDs24gZGVsIHRleHRvIFxcXCJTZWxlY2Npw7NuXFxcIiAqL1xcbiNteVNrZXRjaENvbnRhaW5lclB1bnRvIC5lc3JpLXNrZXRjaF9faGVhZGluZy10ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIGRlIHBvbMOtZ29ub3NcXFwiO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBNw6l0b2RvIGFsdGVybmF0aXZvIHBhcmEgc29icmVzY3JpYmlyIGVsIGxhYmVsIGNvbXBsZXRvICovXFxuI215U2tldGNoQ29udGFpbmVyUHVudG8gLmVzcmktc2tldGNoX19zZWN0aW9uLWxhYmVsOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC1zaXplOiAwO1xcbn1cXG5cXG4jbXlTa2V0Y2hDb250YWluZXJQdW50byAuZXNyaS1za2V0Y2hfX3NlY3Rpb24tbGFiZWw6Zmlyc3Qtb2YtdHlwZTo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbnRlbnQ6IFxcXCJQb2zDrWdvbm9zIHNlbGVjY2lvbmFkb3M6IFxcXCI7XFxuICBjb2xvcjogIzAwRkZGRjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qXG4gIENvcHlyaWdodCAoYykgMjAyMiBFc3JpXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vLyByZS1leHBvcnQgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG5leHBvcnQgeyBsb2FkTW9kdWxlcyB9IGZyb20gJy4vbW9kdWxlcyc7XG5leHBvcnQgeyBnZXRTY3JpcHQsIGlzTG9hZGVkLCBsb2FkU2NyaXB0LCBzZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vc2NyaXB0JztcbmV4cG9ydCB7IGxvYWRDc3MgfSBmcm9tICcuL3V0aWxzL2Nzcyc7XG5leHBvcnQgeyB1dGlscyB9O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGdldFNjcmlwdCwgaXNMb2FkZWQsIGxvYWRTY3JpcHQgfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG4vLyB3cmFwIERvam8ncyByZXF1aXJlKCkgaW4gYSBwcm9taXNlXG5mdW5jdGlvbiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKSB7XG4gICAgcmV0dXJuIG5ldyB1dGlscy5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgbG9hZGluZyB0aGUgZXNyaS9kb2pvIHNjcmlwdHMsIHJlamVjdCB3aXRoIHRoZSBlcnJvci5cbiAgICAgICAgdmFyIGVycm9ySGFuZGxlciA9IHdpbmRvd1sncmVxdWlyZSddLm9uKCdlcnJvcicsIHJlamVjdCk7XG4gICAgICAgIHdpbmRvd1sncmVxdWlyZSddKG1vZHVsZXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlbW92ZSBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICBlcnJvckhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIHdpdGggdGhlIHBhcmFtZXRlcnMgZnJvbSBkb2pvIHJlcXVpcmUgYXMgYW4gYXJyYXkuXG4gICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbiBhcnJheSBvZiB0aGUgcmVxdWlyZWQgbW9kdWxlc1xuLy8gYWxzbyB3aWxsIGF0dGVtcHQgdG8gbGF6eSBsb2FkIHRoZSBBcmNHSVMgQVBJIGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGxvYWRlZFxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNb2R1bGVzKG1vZHVsZXMsIGxvYWRTY3JpcHRPcHRpb25zKSB7XG4gICAgaWYgKGxvYWRTY3JpcHRPcHRpb25zID09PSB2b2lkIDApIHsgbG9hZFNjcmlwdE9wdGlvbnMgPSB7fTsgfVxuICAgIGlmICghaXNMb2FkZWQoKSkge1xuICAgICAgICAvLyBzY3JpcHQgaXMgbm90IHlldCBsb2FkZWQsIGlzIGl0IGluIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmc/XG4gICAgICAgIHZhciBzY3JpcHQgPSBnZXRTY3JpcHQoKTtcbiAgICAgICAgdmFyIHNyYyA9IHNjcmlwdCAmJiBzY3JpcHQuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgaWYgKCFsb2FkU2NyaXB0T3B0aW9ucy51cmwgJiYgc3JjKSB7XG4gICAgICAgICAgICAvLyBzY3JpcHQgaXMgc3RpbGwgbG9hZGluZyBhbmQgdXNlciBkaWQgbm90IHNwZWNpZnkgYSBVUkxcbiAgICAgICAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIGRlZmF1bHQgdG8gdGhlIFVSTCB0aGF0J3MgYmVpbmcgbG9hZGVkXG4gICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGRlZmF1bHRpbmcgdG8gdGhlIGxhdGVzdCA0LnggVVJMXG4gICAgICAgICAgICBsb2FkU2NyaXB0T3B0aW9ucy51cmwgPSBzcmM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXR0ZW1wdCB0byBsb2FkIHRoZSBzY3JpcHQgdGhlbiBsb2FkIHRoZSBtb2R1bGVzXG4gICAgICAgIHJldHVybiBsb2FkU2NyaXB0KGxvYWRTY3JpcHRPcHRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlcXVpcmVNb2R1bGVzKG1vZHVsZXMpOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHNjcmlwdCBpcyBhbHJlYWR5IGxvYWRlZCwganVzdCBsb2FkIHRoZSBtb2R1bGVzXG4gICAgICAgIHJldHVybiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKTtcbiAgICB9XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgbG9hZENzcyB9IGZyb20gJy4vdXRpbHMvY3NzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IGdldENkblVybCB9IGZyb20gJy4vdXRpbHMvdXJsJztcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZnVuY3Rpb24gY3JlYXRlU2NyaXB0KHVybCkge1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1lc3JpLWxvYWRlcicsICdsb2FkaW5nJyk7XG4gICAgcmV0dXJuIHNjcmlwdDtcbn1cbi8vIGFkZCBhIG9uZS10aW1lIGxvYWQgaGFuZGxlciB0byBzY3JpcHRcbi8vIGFuZCBvcHRpb25hbGx5IGFkZCBhIG9uZSB0aW1lIGVycm9yIGhhbmRsZXIgYXMgd2VsbFxuZnVuY3Rpb24gaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIGNhbGxiYWNrLCBlcnJiYWNrKSB7XG4gICAgdmFyIG9uU2NyaXB0RXJyb3I7XG4gICAgaWYgKGVycmJhY2spIHtcbiAgICAgICAgLy8gc2V0IHVwIGFuIGVycm9yIGhhbmRsZXIgYXMgd2VsbFxuICAgICAgICBvblNjcmlwdEVycm9yID0gaGFuZGxlU2NyaXB0RXJyb3Ioc2NyaXB0LCBlcnJiYWNrKTtcbiAgICB9XG4gICAgdmFyIG9uU2NyaXB0TG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gcGFzcyB0aGUgc2NyaXB0IHRvIHRoZSBjYWxsYmFja1xuICAgICAgICBjYWxsYmFjayhzY3JpcHQpO1xuICAgICAgICAvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uU2NyaXB0TG9hZCwgZmFsc2UpO1xuICAgICAgICBpZiAob25TY3JpcHRFcnJvcikge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBlcnJvciBsaXN0ZW5lciBhcyB3ZWxsXG4gICAgICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25TY3JpcHRMb2FkLCBmYWxzZSk7XG59XG4vLyBhZGQgYSBvbmUtdGltZSBlcnJvciBoYW5kbGVyIHRvIHRoZSBzY3JpcHRcbmZ1bmN0aW9uIGhhbmRsZVNjcmlwdEVycm9yKHNjcmlwdCwgY2FsbGJhY2spIHtcbiAgICB2YXIgb25TY3JpcHRFcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIHJlamVjdCB0aGUgcHJvbWlzZSBhbmQgcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgY2FsbGJhY2soZS5lcnJvciB8fCBuZXcgRXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgYXR0ZW1wdGluZyB0byBsb2FkIFwiLmNvbmNhdChzY3JpcHQuc3JjKSkpO1xuICAgICAgICAvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgfTtcbiAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgcmV0dXJuIG9uU2NyaXB0RXJyb3I7XG59XG4vLyBhbGxvdyB0aGUgdXNlciB0byBjb25maWd1cmUgZGVmYXVsdCBzY3JpcHQgb3B0aW9ucyByYXRoZXIgdGhhbiBwYXNzaW5nIG9wdGlvbnMgdG8gYGxvYWRNb2R1bGVzYCBlYWNoIHRpbWVcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBkZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG59XG4vLyBnZXQgdGhlIHNjcmlwdCBpbmplY3RlZCBieSB0aGlzIGxpYnJhcnlcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JpcHQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLWVzcmktbG9hZGVyXScpO1xufVxuLy8gaGFzIEFyY0dJUyBBUEkgYmVlbiBsb2FkZWQgb24gdGhlIHBhZ2UgeWV0P1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9hZGVkKCkge1xuICAgIHZhciBnbG9iYWxSZXF1aXJlID0gd2luZG93WydyZXF1aXJlJ107XG4gICAgLy8gLm9uKCkgZW5zdXJlcyB0aGF0IGl0J3MgRG9qbydzIEFNRCBsb2FkZXJcbiAgICByZXR1cm4gZ2xvYmFsUmVxdWlyZSAmJiBnbG9iYWxSZXF1aXJlLm9uO1xufVxuLy8gbG9hZCB0aGUgQXJjR0lTIEFQSSBvbiB0aGUgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTY3JpcHQob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgLy8gd2Ugd291bGQgaGF2ZSBsaWtlZCB0byB1c2Ugc3ByZWFkIGxpa2UgeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9XG4gICAgLy8gYnV0IFRTIHdvdWxkIGluamVjdCBhIHBvbHlmaWxsIHRoYXQgd291bGQgcmVxdWlyZSB1c2UgdG8gY29uZmlndXJlIHJvbGx1cCB3IGNvbnRlbnQ6ICd3aW5kb3cnXG4gICAgLy8gaWYgd2UgaGF2ZSBhbm90aGVyIG9jY2FzaW9uIHRvIHVzZSBzcHJlYWQsIGxldCdzIGRvIHRoYXQgYW5kIHJlcGxhY2UgdGhpcyBmb3IuLi5pblxuICAgIHZhciBvcHRzID0ge307XG4gICAgW2RlZmF1bHRPcHRpb25zLCBvcHRpb25zXS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIG9wdHNbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBVUkwgdG8gbG9hZFxuICAgIHZhciB2ZXJzaW9uID0gb3B0cy52ZXJzaW9uO1xuICAgIHZhciB1cmwgPSBvcHRzLnVybCB8fCBnZXRDZG5VcmwodmVyc2lvbik7XG4gICAgcmV0dXJuIG5ldyB1dGlscy5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9IGdldFNjcmlwdCgpO1xuICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgICAvLyB0aGUgQVBJIGlzIGFscmVhZHkgbG9hZGVkIG9yIGluIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmcuLi5cbiAgICAgICAgICAgIC8vIE5PVEU6IGhhdmUgdG8gdGVzdCBhZ2FpbnN0IHNjciBhdHRyaWJ1dGUgdmFsdWUsIG5vdCBzY3JpcHQuc3JjXG4gICAgICAgICAgICAvLyBiL2MgdGhlIGxhdHRlciB3aWxsIHJldHVybiB0aGUgZnVsbCB1cmwgZm9yIHJlbGF0aXZlIHBhdGhzXG4gICAgICAgICAgICB2YXIgc3JjID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgICAgICBpZiAoc3JjICE9PSB1cmwpIHtcbiAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSB0cnlpbmcgdG8gbG9hZCBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIHRoZSBBUElcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQgKFwiLmNvbmNhdChzcmMsIFwiKS5cIikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzY3JpcHQgaGFzIGFscmVhZHkgc3VjY2Vzc2Z1bGx5IGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciB0aGUgc2NyaXB0IHRvIGxvYWQgYW5kIHRoZW4gcmVzb2x2ZVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBBUEkgaGFzIGJlZW4gbG9hZGVkIGJ5IHNvbWUgb3RoZXIgbWVhbnNcbiAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSB0cnlpbmcgdG8gbG9hZCBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIHRoZSBBUElcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQuXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYXR0ZW1wdGluZyB0byBsb2FkIHRoZSBBUElcbiAgICAgICAgICAgICAgICB2YXIgY3NzID0gb3B0cy5jc3M7XG4gICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlVmVyc2lvbiA9IGNzcyA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCB0aGUgY3NzIGJlZm9yZSBsb2FkaW5nIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgbG9hZENzcyh1c2VWZXJzaW9uID8gdmVyc2lvbiA6IGNzcywgb3B0cy5pbnNlcnRDc3NCZWZvcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBzY3JpcHQgb2JqZWN0IHdob3NlIHNvdXJjZSBwb2ludHMgdG8gdGhlIEFQSVxuICAgICAgICAgICAgICAgIHNjcmlwdCA9IGNyZWF0ZVNjcmlwdCh1cmwpO1xuICAgICAgICAgICAgICAgIC8vIF9jdXJyZW50VXJsID0gdXJsO1xuICAgICAgICAgICAgICAgIC8vIG9uY2UgdGhlIHNjcmlwdCBpcyBsb2FkZWQuLi5cbiAgICAgICAgICAgICAgICBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHN0YXR1cyBvZiB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXNyaS1sb2FkZXInLCAnbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICAgICAgICAgIC8vIGxvYWQgdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGdldENkbkNzc1VybCwgcGFyc2VWZXJzaW9uIH0gZnJvbSAnLi91cmwnO1xuZnVuY3Rpb24gY3JlYXRlU3R5bGVzaGVldExpbmsoaHJlZikge1xuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgcmV0dXJuIGxpbms7XG59XG5mdW5jdGlvbiBpbnNlcnRMaW5rKGxpbmssIGJlZm9yZSkge1xuICAgIGlmIChiZWZvcmUpIHtcbiAgICAgICAgLy8gdGhlIGxpbmsgc2hvdWxkIGJlIGluc2VydGVkIGJlZm9yZSBhIHNwZWNpZmljIG5vZGVcbiAgICAgICAgdmFyIGJlZm9yZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJlZm9yZSk7XG4gICAgICAgIGJlZm9yZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGluaywgYmVmb3JlTm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBhcHBlbmQgdGhlIGxpbmsgdG8gdGhlbiBlbmQgb2YgdGhlIGhlYWQgdGFnXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfVxufVxuLy8gY2hlY2sgaWYgdGhlIGNzcyB1cmwgaGFzIGJlZW4gaW5qZWN0ZWQgb3IgYWRkZWQgbWFudWFsbHlcbmZ1bmN0aW9uIGdldENzcyh1cmwpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbaHJlZio9XFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIl1cIikpO1xufVxuZnVuY3Rpb24gZ2V0Q3NzVXJsKHVybE9yVmVyc2lvbikge1xuICAgIHJldHVybiAhdXJsT3JWZXJzaW9uIHx8IHBhcnNlVmVyc2lvbih1cmxPclZlcnNpb24pXG4gICAgICAgIC8vIGlmIGl0J3MgYSB2YWxpZCB2ZXJzaW9uIHN0cmluZyByZXR1cm4gdGhlIENETiBVUkxcbiAgICAgICAgPyBnZXRDZG5Dc3NVcmwodXJsT3JWZXJzaW9uKVxuICAgICAgICAvLyBvdGhlcndpc2UgYXNzdW1lIGl0J3MgYSBVUkwgYW5kIHJldHVybiB0aGF0XG4gICAgICAgIDogdXJsT3JWZXJzaW9uO1xufVxuLy8gbGF6eSBsb2FkIHRoZSBDU1MgbmVlZGVkIGZvciB0aGUgQXJjR0lTIEFQSVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDc3ModXJsT3JWZXJzaW9uLCBiZWZvcmUpIHtcbiAgICB2YXIgdXJsID0gZ2V0Q3NzVXJsKHVybE9yVmVyc2lvbik7XG4gICAgdmFyIGxpbmsgPSBnZXRDc3ModXJsKTtcbiAgICBpZiAoIWxpbmspIHtcbiAgICAgICAgLy8gY3JlYXRlICYgbG9hZCB0aGUgY3NzIGxpbmtcbiAgICAgICAgbGluayA9IGNyZWF0ZVN0eWxlc2hlZXRMaW5rKHVybCk7XG4gICAgICAgIGluc2VydExpbmsobGluaywgYmVmb3JlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbms7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuLy8gYWxsb3cgY29uc3VtaW5nIGxpYnJhcmllcyB0byBwcm92aWRlIHRoZWlyIG93biBQcm9taXNlIGltcGxlbWVudGF0aW9uc1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIFByb21pc2U6IGlzQnJvd3NlciA/IHdpbmRvd1snUHJvbWlzZSddIDogdW5kZWZpbmVkXG59O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbnZhciBERUZBVUxUX1ZFUlNJT04gPSAnNC4yNSc7XG52YXIgTkVYVCA9ICduZXh0JztcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZlcnNpb24odmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uLnRvTG93ZXJDYXNlKCkgPT09IE5FWFQpIHtcbiAgICAgICAgcmV0dXJuIE5FWFQ7XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHZlcnNpb24gJiYgdmVyc2lvbi5tYXRjaCgvXihcXGQpXFwuKFxcZCspLyk7XG4gICAgcmV0dXJuIG1hdGNoICYmIHtcbiAgICAgICAgbWFqb3I6IHBhcnNlSW50KG1hdGNoWzFdLCAxMCksXG4gICAgICAgIG1pbm9yOiBwYXJzZUludChtYXRjaFsyXSwgMTApXG4gICAgfTtcbn1cbi8qKlxuICogR2V0IHRoZSBDRE4gdXJsIGZvciBhIGdpdmVuIHZlcnNpb25cbiAqXG4gKiBAcGFyYW0gdmVyc2lvbiBFeDogJzQuMjUnIG9yICczLjQyJy4gRGVmYXVsdHMgdG8gdGhlIGxhdGVzdCA0LnggdmVyc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENkblVybCh2ZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24gPT09IHZvaWQgMCkgeyB2ZXJzaW9uID0gREVGQVVMVF9WRVJTSU9OOyB9XG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9qcy5hcmNnaXMuY29tL1wiLmNvbmNhdCh2ZXJzaW9uLCBcIi9cIik7XG59XG4vKipcbiAqIEdldCB0aGUgQ0ROIHVybCBmb3IgYSB0aGUgQ1NTIGZvciBhIGdpdmVuIHZlcnNpb24gYW5kL29yIHRoZW1lXG4gKlxuICogQHBhcmFtIHZlcnNpb24gRXg6ICc0LjI1JywgJzMuNDInLCBvciAnbmV4dCcuIERlZmF1bHRzIHRvIHRoZSBsYXRlc3QgNC54IHZlcnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5Dc3NVcmwodmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uID09PSB2b2lkIDApIHsgdmVyc2lvbiA9IERFRkFVTFRfVkVSU0lPTjsgfVxuICAgIHZhciBiYXNlVXJsID0gZ2V0Q2RuVXJsKHZlcnNpb24pO1xuICAgIHZhciBwYXJzZWRWZXJzaW9uID0gcGFyc2VWZXJzaW9uKHZlcnNpb24pO1xuICAgIGlmIChwYXJzZWRWZXJzaW9uICE9PSBORVhUICYmIHBhcnNlZFZlcnNpb24ubWFqb3IgPT09IDMpIHtcbiAgICAgICAgLy8gTk9URTogYXQgMy4xMSB0aGUgQ1NTIG1vdmVkIGZyb20gdGhlIC9qcyBmb2xkZXIgdG8gdGhlIHJvb3RcbiAgICAgICAgdmFyIHBhdGggPSBwYXJzZWRWZXJzaW9uLm1pbm9yIDw9IDEwID8gJ2pzLycgOiAnJztcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGJhc2VVcmwpLmNvbmNhdChwYXRoLCBcImVzcmkvY3NzL2VzcmkuY3NzXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gYXNzdW1lIDQueFxuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoYmFzZVVybCwgXCJlc3JpL3RoZW1lcy9saWdodC9tYWluLmNzc1wiKTtcbiAgICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMSA4YzAtMy44NSAzLjE1LTcgNy03czcgMy4xNSA3IDctMy4xNSA3LTcgNy03LTMuMTUtNy03bTcuODc1IDQuMzc1YS44NzUuODc1IDAgMSAxLTEuNzUgMCAuODc1Ljg3NSAwIDAgMSAxLjc1IDBtLS4wNjMtMi42NTZjLjEzMi0uNTcxLjQxNS0uOTE2Ljg0OC0xLjI5OXMuNzAxLS43MDkuNzAxLS43MDljLjM5LS40NzIuNzAxLTEuMTAyLjcwMS0xLjgxMSAwLTEuNzMyLTEuNDAyLTMuMTUtMy4xMTctMy4xNS0xLjM1NyAwLTIuNTIuOTI4LTIuOTQ2IDIuMTU3LS4wNi4xNTItLjA2LjI5OS0uMDYuMjk5YS42NS42NSAwIDAgMCAuNjY4LjY5NGwuMS0uMDA2Yy40LS4wNDYuNjc5LS4yNzUuODI5LS42NS4wNzgtLjE2NC4xMDgtLjIwOC4xMjItLjIyOS4yODEtLjQxNi43NTQtLjY5IDEuMjg3LS42OS44NTggMCAxLjU1OS43MDkgMS41NTkgMS41NzUgMCAuNDcyLS4xNTYuODY2LS40NjggMS4xMDNsLS45MzUgMS4wMjNjLS41MDUuNDQ3LS44MDYgMS4wNDktLjkwMSAxLjcyMmwtLjAwNS4wNjR2LjExN2EuNzUuNzUgMCAwIDAgLjc1LjY5NmwuMDkyLS4wMDVjLjM5My0uMDQzLjcxNC0uMzU4Ljc0My0uNzR6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgdHlwZSB7IFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvZmlsbGVkL3N1Z2dlc3RlZC9oZWxwLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBIZWxwRmlsbGVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiamltdS11aVwiO1xyXG5pbXBvcnQgeyBIZWxwRmlsbGVkIH0gZnJvbSBcImppbXUtaWNvbnMvZmlsbGVkL3N1Z2dlc3RlZC9oZWxwXCI7XHJcblxyXG5pbnRlcmZhY2UgSGVscFRvb2x0aXBQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGdhcDogXCI1cHhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInN0YXJ0XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcInN0YXJ0XCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiN3B4XCIsXHJcbiAgfSxcclxuICB0b29sdGlwOiB7XHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbn07XHJcbmNvbnN0IFRpdGxlV2l0aFRvb2x0aXA6IFJlYWN0LkZDPEhlbHBUb29sdGlwUHJvcHM+ID0gKHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+e3RpdGxlfTwvaDQ+XHJcbiAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICByb2xlPVwidG9vbHRpcFwiXHJcbiAgICAgICAgZW50ZXJEZWxheT17MTAwfVxyXG4gICAgICAgIGVudGVyTmV4dERlbGF5PXswfVxyXG4gICAgICAgIGVudGVyVG91Y2hEZWxheT17NzAwfVxyXG4gICAgICAgIGxlYXZlRGVsYXk9ezB9XHJcbiAgICAgICAgbGVhdmVUb3VjaERlbGF5PXsxNTAwfVxyXG4gICAgICAgIG9mZnNldE9wdGlvbnM9ezR9XHJcbiAgICAgICAgdGl0bGU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRvb2x0aXB9PlxyXG4gICAgICAgICAgPEhlbHBGaWxsZWQgc2l6ZT17MTV9IGNvbG9yPVwiIzgwODA4MFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZVdpdGhUb29sdGlwO1xyXG4iLCIgIGltcG9ydCB7IFNlc3Npb25NYW5hZ2VyIH0gZnJvbSBcImppbXUtY29yZVwiO1xyXG4gIFxyXG4gIC8vIEZ1bmNpw7NuIGhlbHBlciBwYXJhIG9idGVuZXIgZWwgdG9rZW4gZGUgbGEgc2VzacOzblxyXG4gIGV4cG9ydCBjb25zdCBnZXRTZXNzaW9uVG9rZW4gPSAoKTogc3RyaW5nIHwgbnVsbCA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzZXNzaW9uTWFuYWdlciA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgIGNvbnN0IHNlc3Npb25zID0gc2Vzc2lvbk1hbmFnZXI/LmdldFNlc3Npb25zKCk7XHJcbiAgICAgIC8vIE9idGVuZXIgZWwgdG9rZW4gZGUgbGEgcHJpbWVyYSBzZXNpw7NuIGFjdGl2YVxyXG4gICAgICBpZiAoc2Vzc2lvbnMgJiYgc2Vzc2lvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiBzZXNzaW9uc1swXS50b2tlbiB8fCBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIG9idGVuZXIgZWwgdG9rZW4gZGUgc2VzacOzbjpcIiwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxlKHRyYW5zbGF0aW9ucykge1xyXG4gIC8vIERldGVjdGEgbG9jYWxlIGRlc2RlIGxhIFVSTCAoP2xvY2FsZT1lbikgbyBmYWxsYmFjayBhIFwiZXNcIlxyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgY29uc3QgbG9jYWxlID0gc2VhcmNoUGFyYW1zLmdldChcImxvY2FsZVwiKSB8fCBcImVzXCI7XHJcblxyXG4gIGNvbnN0IHQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiAoa2V5OiBrZXlvZiB0eXBlb2YgdHJhbnNsYXRpb25zW1wiZXNcIl0pID0+XHJcbiAgICAgIHRyYW5zbGF0aW9uc1tsb2NhbGUgYXMgXCJlc1wiIHwgXCJlblwiXVtrZXldID8/IGtleTtcclxuICB9LCBbbG9jYWxlXSk7XHJcblxyXG4gIHJldHVybiB7IHQsIGxvY2FsZSB9O1xyXG59IiwiZXhwb3J0IGNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcclxuICAgIGVzOiB7XHJcbiAgICAgIHdpZGdldExhYmVsOiBcIlByb3hpbWlkYWQgZGUgw6FyZWFzIGRlIFJpZXNnb1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJFc3RlIHdpZGdldCBwZXJtaXRlIGEgcGFydGlyIGRlIGxhIGRldGVjY2nDs24gZGUgw6FyZWFzIHF1ZW1hZGFzIGUgaW51bmRhZGFzLCBnZW5lcmFyIGzDrW5lYXMgZGUgcHJveGltaWRhZCBhIGzDrW1pdGVzIHVyYmFub3MgbcOhcyBjZXJjYW5vcy5cIixcclxuICAgICAgaW5jZW5kaW86IFwiSW5jZW5kaW9zXCIsXHJcbiAgICAgIGludW5kYWNpb246IFwiSW51bmRhY2lvbmVzXCIsXHJcbiAgICAgIGJ1ZmZlckxhYmVsOiBcIkttcyDDoXJlYSBkZSBpbmZsdWVuY2lhXCIsXHJcbiAgICAgIGdlbmVyYXJCdWZmZXI6IFwiR2VuZXJhciDDoXJlYSBkZSBpbmZsdWVuY2lhXCIsXHJcbiAgICAgIGRpYnVqYXJMaW5lYXM6IFwiRGlidWphciBsw61uZWFzIGRlIHByb3hpbWlkYWRcIixcclxuICAgICAgZXJyb3JJbWFnZW46IFwiRGViZSBzZWxlY2Npb25hciB1bmEgaW1hZ2VuIGFudGVzIGRlIGVqZWN1dGFyIGVzdGUgcHJvY2Vzb1wiLFxyXG4gICAgICBlcnJvckJ1ZmZlcjogXCJEZWJlIHNlbGVjY2lvbmFyIG3DrW5pbW8gdW4gcG9sw61nb25vLlwiLFxyXG4gICAgICBtaW5LbVdhcm5pbmc6IFwiRWwgdmFsb3IgZGViZSBzZXIgbWVub3IgbyBpZ3VhbCAxMDAga20uXCIsXHJcbiAgICAgIG1heEttV2FybmluZzogXCJFbCB2YWxvciBkZWJlIHNlciBtYXlvciBvIGlndWFsIDEga20uXCIsXHJcbiAgICAgIGZpcmVMYXllcjogXCJab25hcyBxdWVtYWRhc1wiLFxyXG4gICAgICBmbG9vZExheWVyOiBcIlpvbmFzIGludW5kYWRhc1wiLFxyXG4gICAgICBmaXJlRXJyb3I6IFwiRXJyb3IgYWwgY2FyZ2FyIHJpZXNnbyBkZSBpbmNlbmRpbywgaW50ZW50YSBkZSBudWV2b1wiLFxyXG4gICAgICBmbG9vZEVycm9yOiBcIkVycm9yIGFsIGNhcmdhciByaWVzZ28gZGUgaW51bmRhY2lvbiwgaW50ZW50YSBkZSBudWV2b1wiLFxyXG4gICAgICBidWZmZXJMYXllcjogXCJCdWZmZXIgZGUgem9uYSBhZmVjdGFkYVwiLFxyXG4gICAgICBidWZmZXJXYXJuaW5nOiBcIkRlYmUgc2VsZWNjaW9uYXIgbcOtbmltbyB1biBwb2zDrWdvbm8uXCIsXHJcbiAgICAgIGJ1ZmZlckVycm9yOiBcIkVycm9yIGFsIGdlbmVyYXIgZWwgYnVmZmVyLlwiLFxyXG4gICAgICBwcm94aW1pdHlMYXllcjogXCJMw61uZWFzIGRlIFByb3hpbWlkYWRcIixcclxuICAgICAgdXJiYW5MaW1pdHNFcnJvcjogXCJObyBleGlzdGVuIGzDrW1pdGVzIHVyYmFub3MgZGVudHJvIGRlbCDDoXJlYS5cIlxyXG5cclxuICAgIH0sXHJcbiAgICBlbjoge1xyXG4gICAgICB3aWRnZXRMYWJlbDogXCJSaXNrIEFyZWEgUHJveGltaXR5XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgd2lkZ2V0IGFsbG93cyBnZW5lcmF0aW5nIHByb3hpbWl0eSBsaW5lcyB0byB0aGUgbmVhcmVzdCB1cmJhbiBsaW1pdHMgZnJvbSBidXJuZWQgb3IgZmxvb2RlZCBhcmVhcy5cIixcclxuICAgICAgaW5jZW5kaW86IFwiV2lsZGZpcmVzXCIsXHJcbiAgICAgIGludW5kYWNpb246IFwiRmxvb2RzXCIsXHJcbiAgICAgIGJ1ZmZlckxhYmVsOiBcIkJ1ZmZlciBkaXN0YW5jZSAoa20pXCIsXHJcbiAgICAgIGdlbmVyYXJCdWZmZXI6IFwiR2VuZXJhdGUgYnVmZmVyIGFyZWFcIixcclxuICAgICAgZGlidWphckxpbmVhczogXCJEcmF3IHByb3hpbWl0eSBsaW5lc1wiLFxyXG4gICAgICBlcnJvckltYWdlbjogXCJZb3UgbXVzdCBzZWxlY3QgYW4gaW1hZ2UgYmVmb3JlIHJ1bm5pbmcgdGhpcyBwcm9jZXNzXCIsXHJcbiAgICAgIGVycm9yQnVmZmVyOiBcIllvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCBvbmUgcG9seWdvbi5cIixcclxuICAgICAgbWluS21XYXJuaW5nOiBcIlRoZSB2YWx1ZSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAxMDAga20uXCIsXHJcbiAgICAgIG1heEttV2FybmluZzogXCJUaGUgdmFsdWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMSBrbS5cIixcclxuICAgICAgZmlyZUxheWVyOiBcIkJ1cm5lZCBhcmVhc1wiLFxyXG4gICAgICBmbG9vZExheWVyOiBcIkZsb29kZWQgYXJlYXNcIixcclxuICAgICAgZmlyZUVycm9yOiBcIkVycm9yIGxvYWRpbmcgZmlyZSByaXNrLCB0cnkgYWdhaW4uXCIsXHJcbiAgICAgIGZsb29kRXJyb3I6IFwiRXJyb3IgbG9hZGluZyBmbG9vZCByaXNrLCB0cnkgYWdhaW4uXCIsXHJcbiAgICAgIGJ1ZmZlckxheWVyOiBcImFmZmVjdGVkIGFyZWEgYnVmZmVyXCIsXHJcbiAgICAgIGJ1ZmZlcldhcm5pbmc6IFwiWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IG9uZSBwb2x5Z29uLlwiLFxyXG4gICAgICBidWZmZXJFcnJvcjogXCJFcnJvciBnZW5lcmF0aW5nIGJ1ZmZlci5cIixcclxuICAgICAgcHJveGltaXR5TGF5ZXI6IFwiTGluZXMgb2YgUHJveGltaXR5XCIsXHJcbiAgICAgIHVyYmFuTGltaXRzRXJyb3I6IFwiVGhlcmUgYXJlIG5vIHVyYmFuIGJvdW5kYXJpZXMgd2l0aGluIHRoZSBhcmVhLlwiXHJcbiAgICB9XHJcbiAgfTsiLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiB1c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICd1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgICAgdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuICA7XG59XG5cbnZhciBvYmplY3RJcyA9IHR5cGVvZiBPYmplY3QuaXMgPT09ICdmdW5jdGlvbicgPyBPYmplY3QuaXMgOiBpcztcblxudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gUmVhY3QudXNlU3luY0V4dGVybmFsU3RvcmU7XG5cbi8vIGZvciBDb21tb25KUyBpbnRlcm9wLlxuXG52YXIgdXNlUmVmID0gUmVhY3QudXNlUmVmLFxuICAgIHVzZUVmZmVjdCA9IFJlYWN0LnVzZUVmZmVjdCxcbiAgICB1c2VNZW1vID0gUmVhY3QudXNlTWVtbyxcbiAgICB1c2VEZWJ1Z1ZhbHVlID0gUmVhY3QudXNlRGVidWdWYWx1ZTsgLy8gU2FtZSBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSwgYnV0IHN1cHBvcnRzIHNlbGVjdG9yIGFuZCBpc0VxdWFsIGFyZ3VtZW50cy5cblxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3Ioc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QsIHNlbGVjdG9yLCBpc0VxdWFsKSB7XG4gIC8vIFVzZSB0aGlzIHRvIHRyYWNrIHRoZSByZW5kZXJlZCBzbmFwc2hvdC5cbiAgdmFyIGluc3RSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBpbnN0O1xuXG4gIGlmIChpbnN0UmVmLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICBpbnN0ID0ge1xuICAgICAgaGFzVmFsdWU6IGZhbHNlLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9O1xuICAgIGluc3RSZWYuY3VycmVudCA9IGluc3Q7XG4gIH0gZWxzZSB7XG4gICAgaW5zdCA9IGluc3RSZWYuY3VycmVudDtcbiAgfVxuXG4gIHZhciBfdXNlTWVtbyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIC8vIFRyYWNrIHRoZSBtZW1vaXplZCBzdGF0ZSB1c2luZyBjbG9zdXJlIHZhcmlhYmxlcyB0aGF0IGFyZSBsb2NhbCB0byB0aGlzXG4gICAgLy8gbWVtb2l6ZWQgaW5zdGFuY2Ugb2YgYSBnZXRTbmFwc2hvdCBmdW5jdGlvbi4gSW50ZW50aW9uYWxseSBub3QgdXNpbmcgYVxuICAgIC8vIHVzZVJlZiBob29rLCBiZWNhdXNlIHRoYXQgc3RhdGUgd291bGQgYmUgc2hhcmVkIGFjcm9zcyBhbGwgY29uY3VycmVudFxuICAgIC8vIGNvcGllcyBvZiB0aGUgaG9vay9jb21wb25lbnQuXG4gICAgdmFyIGhhc01lbW8gPSBmYWxzZTtcbiAgICB2YXIgbWVtb2l6ZWRTbmFwc2hvdDtcbiAgICB2YXIgbWVtb2l6ZWRTZWxlY3Rpb247XG5cbiAgICB2YXIgbWVtb2l6ZWRTZWxlY3RvciA9IGZ1bmN0aW9uIChuZXh0U25hcHNob3QpIHtcbiAgICAgIGlmICghaGFzTWVtbykge1xuICAgICAgICAvLyBUaGUgZmlyc3QgdGltZSB0aGUgaG9vayBpcyBjYWxsZWQsIHRoZXJlIGlzIG5vIG1lbW9pemVkIHJlc3VsdC5cbiAgICAgICAgaGFzTWVtbyA9IHRydWU7XG4gICAgICAgIG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG5cbiAgICAgICAgdmFyIF9uZXh0U2VsZWN0aW9uID0gc2VsZWN0b3IobmV4dFNuYXBzaG90KTtcblxuICAgICAgICBpZiAoaXNFcXVhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gRXZlbiBpZiB0aGUgc2VsZWN0b3IgaGFzIGNoYW5nZWQsIHRoZSBjdXJyZW50bHkgcmVuZGVyZWQgc2VsZWN0aW9uXG4gICAgICAgICAgLy8gbWF5IGJlIGVxdWFsIHRvIHRoZSBuZXcgc2VsZWN0aW9uLiBXZSBzaG91bGQgYXR0ZW1wdCB0byByZXVzZSB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IHZhbHVlIGlmIHBvc3NpYmxlLCB0byBwcmVzZXJ2ZSBkb3duc3RyZWFtIG1lbW9pemF0aW9ucy5cbiAgICAgICAgICBpZiAoaW5zdC5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3Rpb24gPSBpbnN0LnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoaXNFcXVhbChjdXJyZW50U2VsZWN0aW9uLCBfbmV4dFNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFNlbGVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IF9uZXh0U2VsZWN0aW9uO1xuICAgICAgICByZXR1cm4gX25leHRTZWxlY3Rpb247XG4gICAgICB9IC8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuXG5cbiAgICAgIC8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuICAgICAgdmFyIHByZXZTbmFwc2hvdCA9IG1lbW9pemVkU25hcHNob3Q7XG4gICAgICB2YXIgcHJldlNlbGVjdGlvbiA9IG1lbW9pemVkU2VsZWN0aW9uO1xuXG4gICAgICBpZiAob2JqZWN0SXMocHJldlNuYXBzaG90LCBuZXh0U25hcHNob3QpKSB7XG4gICAgICAgIC8vIFRoZSBzbmFwc2hvdCBpcyB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuIFJldXNlIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uXG4gICAgICAgIHJldHVybiBwcmV2U2VsZWN0aW9uO1xuICAgICAgfSAvLyBUaGUgc25hcHNob3QgaGFzIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBzZWxlY3Rpb24uXG5cblxuICAgICAgLy8gVGhlIHNuYXBzaG90IGhhcyBjaGFuZ2VkLCBzbyB3ZSBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgc2VsZWN0aW9uLlxuICAgICAgdmFyIG5leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpOyAvLyBJZiBhIGN1c3RvbSBpc0VxdWFsIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB1c2UgdGhhdCB0byBjaGVjayBpZiB0aGUgZGF0YVxuICAgICAgLy8gaGFzIGNoYW5nZWQuIElmIGl0IGhhc24ndCwgcmV0dXJuIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uIFRoYXQgc2lnbmFsc1xuICAgICAgLy8gdG8gUmVhY3QgdGhhdCB0aGUgc2VsZWN0aW9ucyBhcmUgY29uY2VwdHVhbGx5IGVxdWFsLCBhbmQgd2UgY2FuIGJhaWxcbiAgICAgIC8vIG91dCBvZiByZW5kZXJpbmcuXG5cbiAgICAgIC8vIElmIGEgY3VzdG9tIGlzRXF1YWwgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHVzZSB0aGF0IHRvIGNoZWNrIGlmIHRoZSBkYXRhXG4gICAgICAvLyBoYXMgY2hhbmdlZC4gSWYgaXQgaGFzbid0LCByZXR1cm4gdGhlIHByZXZpb3VzIHNlbGVjdGlvbi4gVGhhdCBzaWduYWxzXG4gICAgICAvLyB0byBSZWFjdCB0aGF0IHRoZSBzZWxlY3Rpb25zIGFyZSBjb25jZXB0dWFsbHkgZXF1YWwsIGFuZCB3ZSBjYW4gYmFpbFxuICAgICAgLy8gb3V0IG9mIHJlbmRlcmluZy5cbiAgICAgIGlmIChpc0VxdWFsICE9PSB1bmRlZmluZWQgJiYgaXNFcXVhbChwcmV2U2VsZWN0aW9uLCBuZXh0U2VsZWN0aW9uKSkge1xuICAgICAgICByZXR1cm4gcHJldlNlbGVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcbiAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gbmV4dFNlbGVjdGlvbjtcbiAgICAgIHJldHVybiBuZXh0U2VsZWN0aW9uO1xuICAgIH07IC8vIEFzc2lnbmluZyB0aGlzIHRvIGEgY29uc3RhbnQgc28gdGhhdCBGbG93IGtub3dzIGl0IGNhbid0IGNoYW5nZS5cblxuXG4gICAgLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuICAgIHZhciBtYXliZUdldFNlcnZlclNuYXBzaG90ID0gZ2V0U2VydmVyU25hcHNob3QgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBnZXRTZXJ2ZXJTbmFwc2hvdDtcblxuICAgIHZhciBnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZW1vaXplZFNlbGVjdG9yKGdldFNuYXBzaG90KCkpO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3IgPSBtYXliZUdldFNlcnZlclNuYXBzaG90ID09PSBudWxsID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IobWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCgpKTtcbiAgICB9O1xuICAgIHJldHVybiBbZ2V0U25hcHNob3RXaXRoU2VsZWN0b3IsIGdldFNlcnZlclNuYXBzaG90V2l0aFNlbGVjdG9yXTtcbiAgfSwgW2dldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWxdKSxcbiAgICAgIGdldFNlbGVjdGlvbiA9IF91c2VNZW1vWzBdLFxuICAgICAgZ2V0U2VydmVyU2VsZWN0aW9uID0gX3VzZU1lbW9bMV07XG5cbiAgdmFyIHZhbHVlID0gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTZWxlY3Rpb24sIGdldFNlcnZlclNlbGVjdGlvbik7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaW5zdC5oYXNWYWx1ZSA9IHRydWU7XG4gICAgaW5zdC52YWx1ZSA9IHZhbHVlO1xuICB9LCBbdmFsdWVdKTtcbiAgdXNlRGVidWdWYWx1ZSh2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJmdW5jdGlvbiByKGUpe3ZhciB0LGYsbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZSluKz1lO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpaWYoQXJyYXkuaXNBcnJheShlKSl7dmFyIG89ZS5sZW5ndGg7Zm9yKHQ9MDt0PG87dCsrKWVbdF0mJihmPXIoZVt0XSkpJiYobiYmKG4rPVwiIFwiKSxuKz1mKX1lbHNlIGZvcihmIGluIGUpZVtmXSYmKG4mJihuKz1cIiBcIiksbis9Zik7cmV0dXJuIG59ZXhwb3J0IGZ1bmN0aW9uIGNsc3goKXtmb3IodmFyIGUsdCxmPTAsbj1cIlwiLG89YXJndW1lbnRzLmxlbmd0aDtmPG87ZisrKShlPWFyZ3VtZW50c1tmXSkmJih0PXIoZSkpJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZGVmYXVsdCBjbHN4OyIsIi8vIHNyYy9pbmRleC50c1xuaW1wb3J0ICogYXMgUmVhY3QyIGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgYXMgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IyIH0gZnJvbSBcInVzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3dpdGgtc2VsZWN0b3IuanNcIjtcblxuLy8gc3JjL3V0aWxzL3JlYWN0LnRzXG5pbXBvcnQgKiBhcyBSZWFjdE9yaWdpbmFsIGZyb20gXCJyZWFjdFwiO1xudmFyIFJlYWN0ID0gKFxuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgLy8gQHRzLWlnbm9yZVxuICBcImRlZmF1bHRcIiBpbiBSZWFjdE9yaWdpbmFsID8gUmVhY3RPcmlnaW5hbFtcImRlZmF1bHRcIl0gOiBSZWFjdE9yaWdpbmFsXG4pO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Db250ZXh0LnRzXG52YXIgQ29udGV4dEtleSA9IFN5bWJvbC5mb3IoYHJlYWN0LXJlZHV4LWNvbnRleHRgKTtcbnZhciBnVCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IChcbiAgLyogZmFsbCBiYWNrIHRvIGEgcGVyLW1vZHVsZSBzY29wZSAocHJlLTguMSBiZWhhdmlvdXIpIGlmIGBnbG9iYWxUaGlzYCBpcyBub3QgYXZhaWxhYmxlICovXG4gIHt9XG4pO1xuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgaWYgKCFSZWFjdC5jcmVhdGVDb250ZXh0KVxuICAgIHJldHVybiB7fTtcbiAgY29uc3QgY29udGV4dE1hcCA9IGdUW0NvbnRleHRLZXldID8/IChnVFtDb250ZXh0S2V5XSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuICBsZXQgcmVhbENvbnRleHQgPSBjb250ZXh0TWFwLmdldChSZWFjdC5jcmVhdGVDb250ZXh0KTtcbiAgaWYgKCFyZWFsQ29udGV4dCkge1xuICAgIHJlYWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChcbiAgICAgIG51bGxcbiAgICApO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIHJlYWxDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJSZWFjdFJlZHV4XCI7XG4gICAgfVxuICAgIGNvbnRleHRNYXAuc2V0KFJlYWN0LmNyZWF0ZUNvbnRleHQsIHJlYWxDb250ZXh0KTtcbiAgfVxuICByZXR1cm4gcmVhbENvbnRleHQ7XG59XG52YXIgUmVhY3RSZWR1eENvbnRleHQgPSAvKiBAX19QVVJFX18gKi8gZ2V0Q29udGV4dCgpO1xuXG4vLyBzcmMvdXRpbHMvdXNlU3luY0V4dGVybmFsU3RvcmUudHNcbnZhciBub3RJbml0aWFsaXplZCA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKFwidVNFUyBub3QgaW5pdGlhbGl6ZWQhXCIpO1xufTtcblxuLy8gc3JjL2hvb2tzL3VzZVJlZHV4Q29udGV4dC50c1xuZnVuY3Rpb24gY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZVJlZHV4Q29udGV4dDIoKSB7XG4gICAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlQ29udGV4dChjb250ZXh0KTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFjb250ZXh0VmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJjb3VsZCBub3QgZmluZCByZWFjdC1yZWR1eCBjb250ZXh0IHZhbHVlOyBwbGVhc2UgZW5zdXJlIHRoZSBjb21wb25lbnQgaXMgd3JhcHBlZCBpbiBhIDxQcm92aWRlcj5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbiAgfTtcbn1cbnZhciB1c2VSZWR1eENvbnRleHQgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlUmVkdXhDb250ZXh0SG9vaygpO1xuXG4vLyBzcmMvaG9va3MvdXNlU2VsZWN0b3IudHNcbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IG5vdEluaXRpYWxpemVkO1xudmFyIGluaXRpYWxpemVVc2VTZWxlY3RvciA9IChmbikgPT4ge1xuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IGZuO1xufTtcbnZhciByZWZFcXVhbGl0eSA9IChhLCBiKSA9PiBhID09PSBiO1xuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICBjb25zdCB1c2VSZWR1eENvbnRleHQyID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VSZWR1eENvbnRleHQgOiBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQpO1xuICBjb25zdCB1c2VTZWxlY3RvcjIgPSAoc2VsZWN0b3IsIGVxdWFsaXR5Rm5Pck9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHsgZXF1YWxpdHlGbiA9IHJlZkVxdWFsaXR5LCBkZXZNb2RlQ2hlY2tzID0ge30gfSA9IHR5cGVvZiBlcXVhbGl0eUZuT3JPcHRpb25zID09PSBcImZ1bmN0aW9uXCIgPyB7IGVxdWFsaXR5Rm46IGVxdWFsaXR5Rm5Pck9wdGlvbnMgfSA6IGVxdWFsaXR5Rm5Pck9wdGlvbnM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvcmApO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgZXF1YWxpdHlGbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIGFuIGVxdWFsaXR5IGZ1bmN0aW9uIHRvIHVzZVNlbGVjdG9yYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGdldFNlcnZlclN0YXRlLFxuICAgICAgc3RhYmlsaXR5Q2hlY2ssXG4gICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2tcbiAgICB9ID0gdXNlUmVkdXhDb250ZXh0MigpO1xuICAgIGNvbnN0IGZpcnN0UnVuID0gUmVhY3QudXNlUmVmKHRydWUpO1xuICAgIGNvbnN0IHdyYXBwZWRTZWxlY3RvciA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICAge1xuICAgICAgICBbc2VsZWN0b3IubmFtZV0oc3RhdGUpIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdG9yKHN0YXRlKTtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVjazogZmluYWxJZGVudGl0eUZ1bmN0aW9uQ2hlY2ssXG4gICAgICAgICAgICAgIHN0YWJpbGl0eUNoZWNrOiBmaW5hbFN0YWJpbGl0eUNoZWNrXG4gICAgICAgICAgICB9ID0ge1xuICAgICAgICAgICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgICAgICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrLFxuICAgICAgICAgICAgICAuLi5kZXZNb2RlQ2hlY2tzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGZpbmFsU3RhYmlsaXR5Q2hlY2sgPT09IFwiYWx3YXlzXCIgfHwgZmluYWxTdGFiaWxpdHlDaGVjayA9PT0gXCJvbmNlXCIgJiYgZmlyc3RSdW4uY3VycmVudCkge1xuICAgICAgICAgICAgICBjb25zdCB0b0NvbXBhcmUgPSBzZWxlY3RvcihzdGF0ZSk7XG4gICAgICAgICAgICAgIGlmICghZXF1YWxpdHlGbihzZWxlY3RlZCwgdG9Db21wYXJlKSkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFjayA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgKHsgc3RhY2sgfSA9IGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICBcIlNlbGVjdG9yIFwiICsgKHNlbGVjdG9yLm5hbWUgfHwgXCJ1bmtub3duXCIpICsgXCIgcmV0dXJuZWQgYSBkaWZmZXJlbnQgcmVzdWx0IHdoZW4gY2FsbGVkIHdpdGggdGhlIHNhbWUgcGFyYW1ldGVycy4gVGhpcyBjYW4gbGVhZCB0byB1bm5lY2Vzc2FyeSByZXJlbmRlcnMuXFxuU2VsZWN0b3JzIHRoYXQgcmV0dXJuIGEgbmV3IHJlZmVyZW5jZSAoc3VjaCBhcyBhbiBvYmplY3Qgb3IgYW4gYXJyYXkpIHNob3VsZCBiZSBtZW1vaXplZDogaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdXNhZ2UvZGVyaXZpbmctZGF0YS1zZWxlY3RvcnMjb3B0aW1pemluZy1zZWxlY3RvcnMtd2l0aC1tZW1vaXphdGlvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkMjogdG9Db21wYXJlLFxuICAgICAgICAgICAgICAgICAgICBzdGFja1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayA9PT0gXCJhbHdheXNcIiB8fCBmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayA9PT0gXCJvbmNlXCIgJiYgZmlyc3RSdW4uY3VycmVudCkge1xuICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAoeyBzdGFjayB9ID0gZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgIFwiU2VsZWN0b3IgXCIgKyAoc2VsZWN0b3IubmFtZSB8fCBcInVua25vd25cIikgKyBcIiByZXR1cm5lZCB0aGUgcm9vdCBzdGF0ZSB3aGVuIGNhbGxlZC4gVGhpcyBjYW4gbGVhZCB0byB1bm5lY2Vzc2FyeSByZXJlbmRlcnMuXFxuU2VsZWN0b3JzIHRoYXQgcmV0dXJuIHRoZSBlbnRpcmUgc3RhdGUgYXJlIGFsbW9zdCBjZXJ0YWlubHkgYSBtaXN0YWtlLCBhcyB0aGV5IHdpbGwgY2F1c2UgYSByZXJlbmRlciB3aGVuZXZlciAqYW55dGhpbmcqIGluIHN0YXRlIGNoYW5nZXMuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YWNrIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlyc3RSdW4uY3VycmVudClcbiAgICAgICAgICAgICAgZmlyc3RSdW4uY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1bc2VsZWN0b3IubmFtZV0sXG4gICAgICBbc2VsZWN0b3IsIHN0YWJpbGl0eUNoZWNrLCBkZXZNb2RlQ2hlY2tzLnN0YWJpbGl0eUNoZWNrXVxuICAgICk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTdGF0ZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yKFxuICAgICAgc3Vic2NyaXB0aW9uLmFkZE5lc3RlZFN1YixcbiAgICAgIHN0b3JlLmdldFN0YXRlLFxuICAgICAgZ2V0U2VydmVyU3RhdGUgfHwgc3RvcmUuZ2V0U3RhdGUsXG4gICAgICB3cmFwcGVkU2VsZWN0b3IsXG4gICAgICBlcXVhbGl0eUZuXG4gICAgKTtcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHNlbGVjdGVkU3RhdGUpO1xuICAgIHJldHVybiBzZWxlY3RlZFN0YXRlO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZVNlbGVjdG9yMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlU2VsZWN0b3IyXG4gIH0pO1xuICByZXR1cm4gdXNlU2VsZWN0b3IyO1xufVxudmFyIHVzZVNlbGVjdG9yID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVNlbGVjdG9ySG9vaygpO1xuXG4vLyBzcmMvdXRpbHMvcmVhY3QtaXMudHNcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTtcbnZhciBSRUFDVF9TRVJWRVJfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnNlcnZlcl9jb250ZXh0XCIpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5vZmZzY3JlZW5cIik7XG52YXIgUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jbGllbnQucmVmZXJlbmNlXCIpO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSBcIm9iamVjdFwiICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIGNvbnN0ICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBvYmplY3QudHlwZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgY29uc3QgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9TRVJWRVJfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6IHtcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdm9pZCAwO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cblxuLy8gc3JjL3V0aWxzL3dhcm5pbmcudHNcbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgdHJ5IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxufVxuXG4vLyBzcmMvY29ubmVjdC92ZXJpZnlTdWJzZWxlY3RvcnMudHNcbmZ1bmN0aW9uIHZlcmlmeShzZWxlY3RvciwgbWV0aG9kTmFtZSkge1xuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHZhbHVlIGZvciAke21ldGhvZE5hbWV9IGluIGNvbm5lY3QuYCk7XG4gIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gXCJtYXBTdGF0ZVRvUHJvcHNcIiB8fCBtZXRob2ROYW1lID09PSBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2VsZWN0b3IsIFwiZGVwZW5kc09uT3duUHJvcHNcIikpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgIGBUaGUgc2VsZWN0b3IgZm9yICR7bWV0aG9kTmFtZX0gb2YgY29ubmVjdCBkaWQgbm90IHNwZWNpZnkgYSB2YWx1ZSBmb3IgZGVwZW5kc09uT3duUHJvcHMuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcykge1xuICB2ZXJpZnkobWFwU3RhdGVUb1Byb3BzLCBcIm1hcFN0YXRlVG9Qcm9wc1wiKTtcbiAgdmVyaWZ5KG1hcERpc3BhdGNoVG9Qcm9wcywgXCJtYXBEaXNwYXRjaFRvUHJvcHNcIik7XG4gIHZlcmlmeShtZXJnZVByb3BzLCBcIm1lcmdlUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L3NlbGVjdG9yRmFjdG9yeS50c1xuZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCB7XG4gIGFyZVN0YXRlc0VxdWFsLFxuICBhcmVPd25Qcm9wc0VxdWFsLFxuICBhcmVTdGF0ZVByb3BzRXF1YWxcbn0pIHtcbiAgbGV0IGhhc1J1bkF0TGVhc3RPbmNlID0gZmFsc2U7XG4gIGxldCBzdGF0ZTtcbiAgbGV0IG93blByb3BzO1xuICBsZXQgc3RhdGVQcm9wcztcbiAgbGV0IGRpc3BhdGNoUHJvcHM7XG4gIGxldCBtZXJnZWRQcm9wcztcbiAgZnVuY3Rpb24gaGFuZGxlRmlyc3RDYWxsKGZpcnN0U3RhdGUsIGZpcnN0T3duUHJvcHMpIHtcbiAgICBzdGF0ZSA9IGZpcnN0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBmaXJzdE93blByb3BzO1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICBoYXNSdW5BdExlYXN0T25jZSA9IHRydWU7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKSB7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHMoKSB7XG4gICAgaWYgKG1hcFN0YXRlVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1N0YXRlKCkge1xuICAgIGNvbnN0IG5leHRTdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgY29uc3Qgc3RhdGVQcm9wc0NoYW5nZWQgPSAhYXJlU3RhdGVQcm9wc0VxdWFsKG5leHRTdGF0ZVByb3BzLCBzdGF0ZVByb3BzKTtcbiAgICBzdGF0ZVByb3BzID0gbmV4dFN0YXRlUHJvcHM7XG4gICAgaWYgKHN0YXRlUHJvcHNDaGFuZ2VkKVxuICAgICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgY29uc3QgcHJvcHNDaGFuZ2VkID0gIWFyZU93blByb3BzRXF1YWwobmV4dE93blByb3BzLCBvd25Qcm9wcyk7XG4gICAgY29uc3Qgc3RhdGVDaGFuZ2VkID0gIWFyZVN0YXRlc0VxdWFsKFxuICAgICAgbmV4dFN0YXRlLFxuICAgICAgc3RhdGUsXG4gICAgICBuZXh0T3duUHJvcHMsXG4gICAgICBvd25Qcm9wc1xuICAgICk7XG4gICAgc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBuZXh0T3duUHJvcHM7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCAmJiBzdGF0ZUNoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpO1xuICAgIGlmIChwcm9wc0NoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3UHJvcHMoKTtcbiAgICBpZiAoc3RhdGVDaGFuZ2VkKVxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1N0YXRlKCk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgcmV0dXJuIGhhc1J1bkF0TGVhc3RPbmNlID8gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA6IGhhbmRsZUZpcnN0Q2FsbChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcyk7XG4gIH07XG59XG5mdW5jdGlvbiBmaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KGRpc3BhdGNoLCB7XG4gIGluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gIGluaXRNZXJnZVByb3BzLFxuICAuLi5vcHRpb25zXG59KSB7XG4gIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IGluaXRNYXBTdGF0ZVRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgY29uc3QgbWVyZ2VQcm9wcyA9IGluaXRNZXJnZVByb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwgb3B0aW9ucyk7XG59XG5cbi8vIHNyYy91dGlscy9iaW5kQWN0aW9uQ3JlYXRvcnMudHNcbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgY29uc3QgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xuICAgIGNvbnN0IGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSAoLi4uYXJncykgPT4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvciguLi5hcmdzKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG4vLyBzcmMvdXRpbHMvaXNQbGFpbk9iamVjdC50c1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgfHwgb2JqID09PSBudWxsKVxuICAgIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgaWYgKHByb3RvID09PSBudWxsKVxuICAgIHJldHVybiB0cnVlO1xuICBsZXQgYmFzZVByb3RvID0gcHJvdG87XG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKSAhPT0gbnVsbCkge1xuICAgIGJhc2VQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pO1xuICB9XG4gIHJldHVybiBwcm90byA9PT0gYmFzZVByb3RvO1xufVxuXG4vLyBzcmMvdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QudHNcbmZ1bmN0aW9uIHZlcmlmeVBsYWluT2JqZWN0KHZhbHVlLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybmluZyhcbiAgICAgIGAke21ldGhvZE5hbWV9KCkgaW4gJHtkaXNwbGF5TmFtZX0gbXVzdCByZXR1cm4gYSBwbGFpbiBvYmplY3QuIEluc3RlYWQgcmVjZWl2ZWQgJHt2YWx1ZX0uYFxuICAgICk7XG4gIH1cbn1cblxuLy8gc3JjL2Nvbm5lY3Qvd3JhcE1hcFRvUHJvcHMudHNcbmZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZ2V0Q29uc3RhbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRDb25zdGFudFNlbGVjdG9yKGRpc3BhdGNoKSB7XG4gICAgY29uc3QgY29uc3RhbnQgPSBnZXRDb25zdGFudChkaXNwYXRjaCk7XG4gICAgZnVuY3Rpb24gY29uc3RhbnRTZWxlY3RvcigpIHtcbiAgICAgIHJldHVybiBjb25zdGFudDtcbiAgICB9XG4gICAgY29uc3RhbnRTZWxlY3Rvci5kZXBlbmRzT25Pd25Qcm9wcyA9IGZhbHNlO1xuICAgIHJldHVybiBjb25zdGFudFNlbGVjdG9yO1xuICB9O1xufVxuZnVuY3Rpb24gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcykge1xuICByZXR1cm4gbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyA/IEJvb2xlYW4obWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgOiBtYXBUb1Byb3BzLmxlbmd0aCAhPT0gMTtcbn1cbmZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBUb1Byb3BzLCBtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0UHJveHlTZWxlY3RvcihkaXNwYXRjaCwgeyBkaXNwbGF5TmFtZSB9KSB7XG4gICAgY29uc3QgcHJveHkgPSBmdW5jdGlvbiBtYXBUb1Byb3BzUHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcmV0dXJuIHByb3h5LmRlcGVuZHNPbk93blByb3BzID8gcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSA6IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLCB2b2lkIDApO1xuICAgIH07XG4gICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSB0cnVlO1xuICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBmdW5jdGlvbiBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBtYXBUb1Byb3BzO1xuICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKTtcbiAgICAgIGxldCBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBwcm9wcztcbiAgICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhwcm9wcyk7XG4gICAgICAgIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICB2ZXJpZnlQbGFpbk9iamVjdChwcm9wcywgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH07XG4gICAgcmV0dXJuIHByb3h5O1xuICB9O1xufVxuXG4vLyBzcmMvY29ubmVjdC9pbnZhbGlkQXJnRmFjdG9yeS50c1xuZnVuY3Rpb24gY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkoYXJnLCBuYW1lKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSW52YWxpZCB2YWx1ZSBvZiB0eXBlICR7dHlwZW9mIGFyZ30gZm9yICR7bmFtZX0gYXJndW1lbnQgd2hlbiBjb25uZWN0aW5nIGNvbXBvbmVudCAke29wdGlvbnMud3JhcHBlZENvbXBvbmVudE5hbWV9LmBcbiAgICApO1xuICB9O1xufVxuXG4vLyBzcmMvY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMudHNcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBEaXNwYXRjaFRvUHJvcHMgJiYgdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gXCJvYmplY3RcIiA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoXG4gICAgKGRpc3BhdGNoKSA9PiAoXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBiaW5kQWN0aW9uQ3JlYXRvcnMobWFwRGlzcGF0Y2hUb1Byb3BzLCBkaXNwYXRjaClcbiAgICApXG4gICkgOiAhbWFwRGlzcGF0Y2hUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudCgoZGlzcGF0Y2gpID0+ICh7XG4gICAgZGlzcGF0Y2hcbiAgfSkpIDogdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKVxuICApIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvbWFwU3RhdGVUb1Byb3BzLnRzXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHNGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gIW1hcFN0YXRlVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoKCkgPT4gKHt9KSkgOiB0eXBlb2YgbWFwU3RhdGVUb1Byb3BzID09PSBcImZ1bmN0aW9uXCIgPyAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpXG4gICkgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9tZXJnZVByb3BzLnRzXG5mdW5jdGlvbiBkZWZhdWx0TWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICByZXR1cm4geyAuLi5vd25Qcm9wcywgLi4uc3RhdGVQcm9wcywgLi4uZGlzcGF0Y2hQcm9wcyB9O1xufVxuZnVuY3Rpb24gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRNZXJnZVByb3BzUHJveHkoZGlzcGF0Y2gsIHsgZGlzcGxheU5hbWUsIGFyZU1lcmdlZFByb3BzRXF1YWwgfSkge1xuICAgIGxldCBoYXNSdW5PbmNlID0gZmFsc2U7XG4gICAgbGV0IG1lcmdlZFByb3BzO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZVByb3BzUHJveHkoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgICAgIGNvbnN0IG5leHRNZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgICAgaWYgKGhhc1J1bk9uY2UpIHtcbiAgICAgICAgaWYgKCFhcmVNZXJnZWRQcm9wc0VxdWFsKG5leHRNZXJnZWRQcm9wcywgbWVyZ2VkUHJvcHMpKVxuICAgICAgICAgIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFzUnVuT25jZSA9IHRydWU7XG4gICAgICAgIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgIHZlcmlmeVBsYWluT2JqZWN0KG1lcmdlZFByb3BzLCBkaXNwbGF5TmFtZSwgXCJtZXJnZVByb3BzXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBtZXJnZVByb3BzRmFjdG9yeShtZXJnZVByb3BzKSB7XG4gIHJldHVybiAhbWVyZ2VQcm9wcyA/ICgpID0+IGRlZmF1bHRNZXJnZVByb3BzIDogdHlwZW9mIG1lcmdlUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1lcmdlUHJvcHMsIFwibWVyZ2VQcm9wc1wiKTtcbn1cblxuLy8gc3JjL3V0aWxzL2JhdGNoLnRzXG5mdW5jdGlvbiBkZWZhdWx0Tm9vcEJhdGNoKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKCk7XG59XG5cbi8vIHNyYy91dGlscy9TdWJzY3JpcHRpb24udHNcbmZ1bmN0aW9uIGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpIHtcbiAgbGV0IGZpcnN0ID0gbnVsbDtcbiAgbGV0IGxhc3QgPSBudWxsO1xuICByZXR1cm4ge1xuICAgIGNsZWFyKCkge1xuICAgICAgZmlyc3QgPSBudWxsO1xuICAgICAgbGFzdCA9IG51bGw7XG4gICAgfSxcbiAgICBub3RpZnkoKSB7XG4gICAgICBkZWZhdWx0Tm9vcEJhdGNoKCgpID0+IHtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gZmlyc3Q7XG4gICAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKCk7XG4gICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IFtdO1xuICAgICAgbGV0IGxpc3RlbmVyID0gZmlyc3Q7XG4gICAgICB3aGlsZSAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgICBsZXQgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gbGFzdCA9IHtcbiAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgIHByZXY6IGxhc3RcbiAgICAgIH07XG4gICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0ID0gbGlzdGVuZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIGlmICghaXNTdWJzY3JpYmVkIHx8IGZpcnN0ID09PSBudWxsKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIGlmIChsaXN0ZW5lci5uZXh0KSB7XG4gICAgICAgICAgbGlzdGVuZXIubmV4dC5wcmV2ID0gbGlzdGVuZXIucHJldjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0ID0gbGlzdGVuZXIucHJldjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlyc3QgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cbnZhciBudWxsTGlzdGVuZXJzID0ge1xuICBub3RpZnkoKSB7XG4gIH0sXG4gIGdldDogKCkgPT4gW11cbn07XG5mdW5jdGlvbiBjcmVhdGVTdWJzY3JpcHRpb24oc3RvcmUsIHBhcmVudFN1Yikge1xuICBsZXQgdW5zdWJzY3JpYmU7XG4gIGxldCBsaXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuICBsZXQgc3Vic2NyaXB0aW9uc0Ftb3VudCA9IDA7XG4gIGxldCBzZWxmU3Vic2NyaWJlZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBhZGROZXN0ZWRTdWIobGlzdGVuZXIpIHtcbiAgICB0cnlTdWJzY3JpYmUoKTtcbiAgICBjb25zdCBjbGVhbnVwTGlzdGVuZXIgPSBsaXN0ZW5lcnMuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICBsZXQgcmVtb3ZlZCA9IGZhbHNlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoIXJlbW92ZWQpIHtcbiAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgIGNsZWFudXBMaXN0ZW5lcigpO1xuICAgICAgICB0cnlVbnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbm90aWZ5TmVzdGVkU3VicygpIHtcbiAgICBsaXN0ZW5lcnMubm90aWZ5KCk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlV3JhcHBlcigpIHtcbiAgICBpZiAoc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGlzU3Vic2NyaWJlZCgpIHtcbiAgICByZXR1cm4gc2VsZlN1YnNjcmliZWQ7XG4gIH1cbiAgZnVuY3Rpb24gdHJ5U3Vic2NyaWJlKCkge1xuICAgIHN1YnNjcmlwdGlvbnNBbW91bnQrKztcbiAgICBpZiAoIXVuc3Vic2NyaWJlKSB7XG4gICAgICB1bnN1YnNjcmliZSA9IHBhcmVudFN1YiA/IHBhcmVudFN1Yi5hZGROZXN0ZWRTdWIoaGFuZGxlQ2hhbmdlV3JhcHBlcikgOiBzdG9yZS5zdWJzY3JpYmUoaGFuZGxlQ2hhbmdlV3JhcHBlcik7XG4gICAgICBsaXN0ZW5lcnMgPSBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmUoKSB7XG4gICAgc3Vic2NyaXB0aW9uc0Ftb3VudC0tO1xuICAgIGlmICh1bnN1YnNjcmliZSAmJiBzdWJzY3JpcHRpb25zQW1vdW50ID09PSAwKSB7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgdW5zdWJzY3JpYmUgPSB2b2lkIDA7XG4gICAgICBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgIGxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyeVN1YnNjcmliZVNlbGYoKSB7XG4gICAgaWYgKCFzZWxmU3Vic2NyaWJlZCkge1xuICAgICAgc2VsZlN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgdHJ5U3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlU2VsZigpIHtcbiAgICBpZiAoc2VsZlN1YnNjcmliZWQpIHtcbiAgICAgIHNlbGZTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICB0cnlVbnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICBjb25zdCBzdWJzY3JpcHRpb24gPSB7XG4gICAgYWRkTmVzdGVkU3ViLFxuICAgIG5vdGlmeU5lc3RlZFN1YnMsXG4gICAgaGFuZGxlQ2hhbmdlV3JhcHBlcixcbiAgICBpc1N1YnNjcmliZWQsXG4gICAgdHJ5U3Vic2NyaWJlOiB0cnlTdWJzY3JpYmVTZWxmLFxuICAgIHRyeVVuc3Vic2NyaWJlOiB0cnlVbnN1YnNjcmliZVNlbGYsXG4gICAgZ2V0TGlzdGVuZXJzOiAoKSA9PiBsaXN0ZW5lcnNcbiAgfTtcbiAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbn1cblxuLy8gc3JjL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QudHNcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiKTtcbnZhciBpc1JlYWN0TmF0aXZlID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gXCJSZWFjdE5hdGl2ZVwiO1xudmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBjYW5Vc2VET00gfHwgaXNSZWFjdE5hdGl2ZSA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcblxuLy8gc3JjL3V0aWxzL3NoYWxsb3dFcXVhbC50c1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IHkgIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICBjb25zdCBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBzcmMvdXRpbHMvaG9pc3RTdGF0aWNzLnRzXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAkJHR5cGVvZjogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAkJHR5cGVvZjogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHtcbiAgW0ZvcndhcmRSZWZdOiBGT1JXQVJEX1JFRl9TVEFUSUNTLFxuICBbTWVtb106IE1FTU9fU1RBVElDU1xufTtcbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIGlmIChpc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH1cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbXCIkJHR5cGVvZlwiXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIGNvbnN0IGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICBjb25zdCBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbi8vIHNyYy9jb21wb25lbnRzL2Nvbm5lY3QudHN4XG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBub3RJbml0aWFsaXplZDtcbnZhciBpbml0aWFsaXplQ29ubmVjdCA9IChmbikgPT4ge1xuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IGZuO1xufTtcbnZhciBOT19TVUJTQ1JJUFRJT05fQVJSQVkgPSBbbnVsbCwgbnVsbF07XG52YXIgc3RyaW5naWZ5Q29tcG9uZW50ID0gKENvbXApID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoQ29tcCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcoQ29tcCk7XG4gIH1cbn07XG5mdW5jdGlvbiB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3MoZWZmZWN0RnVuYywgZWZmZWN0QXJncywgZGVwZW5kZW5jaWVzKSB7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4gZWZmZWN0RnVuYyguLi5lZmZlY3RBcmdzKSwgZGVwZW5kZW5jaWVzKTtcbn1cbmZ1bmN0aW9uIGNhcHR1cmVXcmFwcGVyUHJvcHMobGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCB3cmFwcGVyUHJvcHMsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMpIHtcbiAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50ID0gd3JhcHBlclByb3BzO1xuICByZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50ID0gZmFsc2U7XG4gIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQpIHtcbiAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBudWxsO1xuICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgfVxufVxuZnVuY3Rpb24gc3Vic2NyaWJlVXBkYXRlcyhzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsIHN0b3JlLCBzdWJzY3JpcHRpb24sIGNoaWxkUHJvcHNTZWxlY3RvciwgbGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCBpc01vdW50ZWQsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMsIGFkZGl0aW9uYWxTdWJzY3JpYmVMaXN0ZW5lcikge1xuICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcylcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgIH07XG4gIGxldCBkaWRVbnN1YnNjcmliZSA9IGZhbHNlO1xuICBsZXQgbGFzdFRocm93bkVycm9yID0gbnVsbDtcbiAgY29uc3QgY2hlY2tGb3JVcGRhdGVzID0gKCkgPT4ge1xuICAgIGlmIChkaWRVbnN1YnNjcmliZSB8fCAhaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGF0ZXN0U3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgbGV0IG5ld0NoaWxkUHJvcHMsIGVycm9yO1xuICAgIHRyeSB7XG4gICAgICBuZXdDaGlsZFByb3BzID0gY2hpbGRQcm9wc1NlbGVjdG9yKFxuICAgICAgICBsYXRlc3RTdG9yZVN0YXRlLFxuICAgICAgICBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnRcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IgPSBlO1xuICAgICAgbGFzdFRocm93bkVycm9yID0gZTtcbiAgICB9XG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgbGFzdFRocm93bkVycm9yID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKG5ld0NoaWxkUHJvcHMgPT09IGxhc3RDaGlsZFByb3BzLmN1cnJlbnQpIHtcbiAgICAgIGlmICghcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCkge1xuICAgICAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgYWRkaXRpb25hbFN1YnNjcmliZUxpc3RlbmVyKCk7XG4gICAgfVxuICB9O1xuICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IGNoZWNrRm9yVXBkYXRlcztcbiAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgY29uc3QgdW5zdWJzY3JpYmVXcmFwcGVyID0gKCkgPT4ge1xuICAgIGRpZFVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IG51bGw7XG4gICAgaWYgKGxhc3RUaHJvd25FcnJvcikge1xuICAgICAgdGhyb3cgbGFzdFRocm93bkVycm9yO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVuc3Vic2NyaWJlV3JhcHBlcjtcbn1cbmZ1bmN0aW9uIHN0cmljdEVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbiA9IGZhbHNlO1xuZnVuY3Rpb24gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywge1xuICAvLyBUaGUgYHB1cmVgIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLCBzbyBUUyBkb2Vzbid0IGxpa2UgdXMgZGVzdHJ1Y3R1cmluZyB0aGlzIHRvIGNoZWNrIGl0cyBleGlzdGVuY2UuXG4gIC8vIEB0cy1pZ25vcmVcbiAgcHVyZSxcbiAgYXJlU3RhdGVzRXF1YWwgPSBzdHJpY3RFcXVhbCxcbiAgYXJlT3duUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgYXJlU3RhdGVQcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICAvLyB1c2UgUmVhY3QncyBmb3J3YXJkUmVmIHRvIGV4cG9zZSBhIHJlZiBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnRcbiAgZm9yd2FyZFJlZiA9IGZhbHNlLFxuICAvLyB0aGUgY29udGV4dCBjb25zdW1lciB0byB1c2VcbiAgY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0XG59ID0ge30pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmIChwdXJlICE9PSB2b2lkIDAgJiYgIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24pIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24gPSB0cnVlO1xuICAgICAgd2FybmluZyhcbiAgICAgICAgJ1RoZSBgcHVyZWAgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQuIGBjb25uZWN0YCBpcyBub3cgYWx3YXlzIGEgXCJwdXJlL21lbW9pemVkXCIgY29tcG9uZW50J1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgQ29udGV4dCA9IGNvbnRleHQ7XG4gIGNvbnN0IGluaXRNYXBTdGF0ZVRvUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHNGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcyk7XG4gIGNvbnN0IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcyk7XG4gIGNvbnN0IGluaXRNZXJnZVByb3BzID0gbWVyZ2VQcm9wc0ZhY3RvcnkobWVyZ2VQcm9wcyk7XG4gIGNvbnN0IHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyA9IEJvb2xlYW4obWFwU3RhdGVUb1Byb3BzKTtcbiAgY29uc3Qgd3JhcFdpdGhDb25uZWN0ID0gKFdyYXBwZWRDb21wb25lbnQpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zdCBpc1ZhbGlkID0gLyogQF9fUFVSRV9fICovIGlzVmFsaWRFbGVtZW50VHlwZShXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgIGlmICghaXNWYWxpZClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBZb3UgbXVzdCBwYXNzIGEgY29tcG9uZW50IHRvIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBieSBjb25uZWN0LiBJbnN0ZWFkIHJlY2VpdmVkICR7c3RyaW5naWZ5Q29tcG9uZW50KFxuICAgICAgICAgICAgV3JhcHBlZENvbXBvbmVudFxuICAgICAgICAgICl9YFxuICAgICAgICApO1xuICAgIH1cbiAgICBjb25zdCB3cmFwcGVkQ29tcG9uZW50TmFtZSA9IFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8IFwiQ29tcG9uZW50XCI7XG4gICAgY29uc3QgZGlzcGxheU5hbWUgPSBgQ29ubmVjdCgke3dyYXBwZWRDb21wb25lbnROYW1lfSlgO1xuICAgIGNvbnN0IHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMgPSB7XG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBkaXNwbGF5TmFtZSxcbiAgICAgIHdyYXBwZWRDb21wb25lbnROYW1lLFxuICAgICAgV3JhcHBlZENvbXBvbmVudCxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHMsXG4gICAgICBhcmVTdGF0ZXNFcXVhbCxcbiAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbCxcbiAgICAgIGFyZU93blByb3BzRXF1YWwsXG4gICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsXG4gICAgfTtcbiAgICBmdW5jdGlvbiBDb25uZWN0RnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgIGNvbnN0IFtwcm9wc0NvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIHdyYXBwZXJQcm9wc10gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmOiByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmMiwgLi4ud3JhcHBlclByb3BzMiB9ID0gcHJvcHM7XG4gICAgICAgIHJldHVybiBbcHJvcHMuY29udGV4dCwgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjIsIHdyYXBwZXJQcm9wczJdO1xuICAgICAgfSwgW3Byb3BzXSk7XG4gICAgICBjb25zdCBDb250ZXh0VG9Vc2UgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgbGV0IFJlc3VsdENvbnRleHQgPSBDb250ZXh0O1xuICAgICAgICBpZiAocHJvcHNDb250ZXh0Py5Db25zdW1lcikge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSAvKiBAX19QVVJFX18gKi8gaXNDb250ZXh0Q29uc3VtZXIoXG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcHNDb250ZXh0LkNvbnN1bWVyLCBudWxsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJZb3UgbXVzdCBwYXNzIGEgdmFsaWQgUmVhY3QgY29udGV4dCBjb25zdW1lciBhcyBgcHJvcHMuY29udGV4dGBcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVzdWx0Q29udGV4dCA9IHByb3BzQ29udGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlc3VsdENvbnRleHQ7XG4gICAgICB9LCBbcHJvcHNDb250ZXh0LCBDb250ZXh0XSk7XG4gICAgICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHRUb1VzZSk7XG4gICAgICBjb25zdCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPSBCb29sZWFuKHByb3BzLnN0b3JlKSAmJiBCb29sZWFuKHByb3BzLnN0b3JlLmdldFN0YXRlKSAmJiBCb29sZWFuKHByb3BzLnN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIGNvbnN0IGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID0gQm9vbGVhbihjb250ZXh0VmFsdWUpICYmIEJvb2xlYW4oY29udGV4dFZhbHVlLnN0b3JlKTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWRpZFN0b3JlQ29tZUZyb21Qcm9wcyAmJiAhZGlkU3RvcmVDb21lRnJvbUNvbnRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDb3VsZCBub3QgZmluZCBcInN0b3JlXCIgaW4gdGhlIGNvbnRleHQgb2YgXCIke2Rpc3BsYXlOYW1lfVwiLiBFaXRoZXIgd3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYSA8UHJvdmlkZXI+LCBvciBwYXNzIGEgY3VzdG9tIFJlYWN0IGNvbnRleHQgcHJvdmlkZXIgdG8gPFByb3ZpZGVyPiBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgUmVhY3QgY29udGV4dCBjb25zdW1lciB0byAke2Rpc3BsYXlOYW1lfSBpbiBjb25uZWN0IG9wdGlvbnMuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RvcmUgPSBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyBwcm9wcy5zdG9yZSA6IGNvbnRleHRWYWx1ZS5zdG9yZTtcbiAgICAgIGNvbnN0IGdldFNlcnZlclN0YXRlID0gZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPyBjb250ZXh0VmFsdWUuZ2V0U2VydmVyU3RhdGUgOiBzdG9yZS5nZXRTdGF0ZTtcbiAgICAgIGNvbnN0IGNoaWxkUHJvcHNTZWxlY3RvciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gZmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShzdG9yZS5kaXNwYXRjaCwgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyk7XG4gICAgICB9LCBbc3RvcmVdKTtcbiAgICAgIGNvbnN0IFtzdWJzY3JpcHRpb24sIG5vdGlmeU5lc3RlZFN1YnNdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKVxuICAgICAgICAgIHJldHVybiBOT19TVUJTQ1JJUFRJT05fQVJSQVk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbjIgPSBjcmVhdGVTdWJzY3JpcHRpb24oXG4gICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgZGlkU3RvcmVDb21lRnJvbVByb3BzID8gdm9pZCAwIDogY29udGV4dFZhbHVlLnN1YnNjcmlwdGlvblxuICAgICAgICApO1xuICAgICAgICBjb25zdCBub3RpZnlOZXN0ZWRTdWJzMiA9IHN1YnNjcmlwdGlvbjIubm90aWZ5TmVzdGVkU3Vicy5iaW5kKHN1YnNjcmlwdGlvbjIpO1xuICAgICAgICByZXR1cm4gW3N1YnNjcmlwdGlvbjIsIG5vdGlmeU5lc3RlZFN1YnMyXTtcbiAgICAgIH0sIFtzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWVdKTtcbiAgICAgIGNvbnN0IG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGRpZFN0b3JlQ29tZUZyb21Qcm9wcykge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5jb250ZXh0VmFsdWUsXG4gICAgICAgICAgc3Vic2NyaXB0aW9uXG4gICAgICAgIH07XG4gICAgICB9LCBbZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWUsIHN1YnNjcmlwdGlvbl0pO1xuICAgICAgY29uc3QgbGFzdENoaWxkUHJvcHMgPSBSZWFjdC51c2VSZWYodm9pZCAwKTtcbiAgICAgIGNvbnN0IGxhc3RXcmFwcGVyUHJvcHMgPSBSZWFjdC51c2VSZWYod3JhcHBlclByb3BzKTtcbiAgICAgIGNvbnN0IGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUgPSBSZWFjdC51c2VSZWYodm9pZCAwKTtcbiAgICAgIGNvbnN0IHJlbmRlcklzU2NoZWR1bGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICAgIGNvbnN0IGlzTW91bnRlZCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgICBjb25zdCBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yID0gUmVhY3QudXNlUmVmKFxuICAgICAgICB2b2lkIDBcbiAgICAgICk7XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICB9LCBbXSk7XG4gICAgICBjb25zdCBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCAmJiB3cmFwcGVyUHJvcHMgPT09IGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNTZWxlY3RvcihzdG9yZS5nZXRTdGF0ZSgpLCB3cmFwcGVyUHJvcHMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICB9LCBbc3RvcmUsIHdyYXBwZXJQcm9wc10pO1xuICAgICAgY29uc3Qgc3Vic2NyaWJlRm9yUmVhY3QgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlID0gKHJlYWN0TGlzdGVuZXIpID0+IHtcbiAgICAgICAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdWJzY3JpYmVVcGRhdGVzKFxuICAgICAgICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24sXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjaGlsZFByb3BzU2VsZWN0b3IsXG4gICAgICAgICAgICBsYXN0V3JhcHBlclByb3BzLFxuICAgICAgICAgICAgbGFzdENoaWxkUHJvcHMsXG4gICAgICAgICAgICByZW5kZXJJc1NjaGVkdWxlZCxcbiAgICAgICAgICAgIGlzTW91bnRlZCxcbiAgICAgICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsXG4gICAgICAgICAgICBub3RpZnlOZXN0ZWRTdWJzLFxuICAgICAgICAgICAgcmVhY3RMaXN0ZW5lclxuICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmU7XG4gICAgICB9LCBbc3Vic2NyaXB0aW9uXSk7XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3MoY2FwdHVyZVdyYXBwZXJQcm9wcywgW1xuICAgICAgICBsYXN0V3JhcHBlclByb3BzLFxuICAgICAgICBsYXN0Q2hpbGRQcm9wcyxcbiAgICAgICAgcmVuZGVySXNTY2hlZHVsZWQsXG4gICAgICAgIHdyYXBwZXJQcm9wcyxcbiAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSxcbiAgICAgICAgbm90aWZ5TmVzdGVkU3Vic1xuICAgICAgXSk7XG4gICAgICBsZXQgYWN0dWFsQ2hpbGRQcm9wcztcbiAgICAgIHRyeSB7XG4gICAgICAgIGFjdHVhbENoaWxkUHJvcHMgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShcbiAgICAgICAgICAvLyBUT0RPIFdlJ3JlIHBhc3NpbmcgdGhyb3VnaCBhIGJpZyB3cmFwcGVyIHRoYXQgZG9lcyBhIGJ1bmNoIG9mIGV4dHJhIHNpZGUgZWZmZWN0cyBiZXNpZGVzIHN1YnNjcmliaW5nXG4gICAgICAgICAgc3Vic2NyaWJlRm9yUmVhY3QsXG4gICAgICAgICAgLy8gVE9ETyBUaGlzIGlzIGluY3JlZGlibHkgaGFja3kuIFdlJ3ZlIGFscmVhZHkgcHJvY2Vzc2VkIHRoZSBzdG9yZSB1cGRhdGUgYW5kIGNhbGN1bGF0ZWQgbmV3IGNoaWxkIHByb3BzLFxuICAgICAgICAgIC8vIFRPRE8gYW5kIHdlJ3JlIGp1c3QgcGFzc2luZyB0aGF0IHRocm91Z2ggc28gaXQgdHJpZ2dlcnMgYSByZS1yZW5kZXIgZm9yIHVzIHJhdGhlciB0aGFuIHJlbHlpbmcgb24gYHVTRVNgLlxuICAgICAgICAgIGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvcixcbiAgICAgICAgICBnZXRTZXJ2ZXJTdGF0ZSA/ICgpID0+IGNoaWxkUHJvcHNTZWxlY3RvcihnZXRTZXJ2ZXJTdGF0ZSgpLCB3cmFwcGVyUHJvcHMpIDogYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgICAgIDtcbiAgICAgICAgICBlcnIubWVzc2FnZSArPSBgXG5UaGUgZXJyb3IgbWF5IGJlIGNvcnJlbGF0ZWQgd2l0aCB0aGlzIHByZXZpb3VzIGVycm9yOlxuJHtsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQuc3RhY2t9XG5cbmA7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCA9IHZvaWQgMDtcbiAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gdm9pZCAwO1xuICAgICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gYWN0dWFsQ2hpbGRQcm9wcztcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgV3JhcHBlZENvbXBvbmVudCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLi4uYWN0dWFsQ2hpbGRQcm9wcyxcbiAgICAgICAgICAgICAgcmVmOiByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSwgW3JlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIFdyYXBwZWRDb21wb25lbnQsIGFjdHVhbENoaWxkUHJvcHNdKTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkQ2hpbGQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykge1xuICAgICAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0VG9Vc2UuUHJvdmlkZXIsIHsgdmFsdWU6IG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgfSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgfSwgW0NvbnRleHRUb1VzZSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50LCBvdmVycmlkZGVuQ29udGV4dFZhbHVlXSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZDtcbiAgICB9XG4gICAgY29uc3QgX0Nvbm5lY3QgPSBSZWFjdC5tZW1vKENvbm5lY3RGdW5jdGlvbik7XG4gICAgY29uc3QgQ29ubmVjdCA9IF9Db25uZWN0O1xuICAgIENvbm5lY3QuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IENvbm5lY3RGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIGlmIChmb3J3YXJkUmVmKSB7XG4gICAgICBjb25zdCBfZm9yd2FyZGVkID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgICAgICAgZnVuY3Rpb24gZm9yd2FyZENvbm5lY3RSZWYocHJvcHMsIHJlZikge1xuICAgICAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0LCB7IC4uLnByb3BzLCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmOiByZWYgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBmb3J3YXJkZWQgPSBfZm9yd2FyZGVkO1xuICAgICAgZm9yd2FyZGVkLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgICBmb3J3YXJkZWQuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKGZvcndhcmRlZCwgV3JhcHBlZENvbXBvbmVudCk7XG4gICAgfVxuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaG9pc3ROb25SZWFjdFN0YXRpY3MoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG4gIHJldHVybiB3cmFwV2l0aENvbm5lY3Q7XG59XG52YXIgY29ubmVjdF9kZWZhdWx0ID0gY29ubmVjdDtcblxuLy8gc3JjL2NvbXBvbmVudHMvUHJvdmlkZXIudHN4XG5mdW5jdGlvbiBQcm92aWRlcih7XG4gIHN0b3JlLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgc2VydmVyU3RhdGUsXG4gIHN0YWJpbGl0eUNoZWNrID0gXCJvbmNlXCIsXG4gIGlkZW50aXR5RnVuY3Rpb25DaGVjayA9IFwib25jZVwiXG59KSB7XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgZ2V0U2VydmVyU3RhdGU6IHNlcnZlclN0YXRlID8gKCkgPT4gc2VydmVyU3RhdGUgOiB2b2lkIDAsXG4gICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVja1xuICAgIH07XG4gIH0sIFtzdG9yZSwgc2VydmVyU3RhdGUsIHN0YWJpbGl0eUNoZWNrLCBpZGVudGl0eUZ1bmN0aW9uQ2hlY2tdKTtcbiAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gc3RvcmUuZ2V0U3RhdGUoKSwgW3N0b3JlXSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgc3Vic2NyaXB0aW9uIH0gPSBjb250ZXh0VmFsdWU7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicztcbiAgICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gICAgaWYgKHByZXZpb3VzU3RhdGUgIT09IHN0b3JlLmdldFN0YXRlKCkpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gdm9pZCAwO1xuICAgIH07XG4gIH0sIFtjb250ZXh0VmFsdWUsIHByZXZpb3VzU3RhdGVdKTtcbiAgY29uc3QgQ29udGV4dCA9IGNvbnRleHQgfHwgUmVhY3RSZWR1eENvbnRleHQ7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0VmFsdWUgfSwgY2hpbGRyZW4pO1xufVxudmFyIFByb3ZpZGVyX2RlZmF1bHQgPSBQcm92aWRlcjtcblxuLy8gc3JjL2hvb2tzL3VzZVN0b3JlLnRzXG5mdW5jdGlvbiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVJlZHV4Q29udGV4dDIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVJlZHV4Q29udGV4dCA6IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0KVxuICApO1xuICBjb25zdCB1c2VTdG9yZTIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdXNlUmVkdXhDb250ZXh0MigpO1xuICAgIHJldHVybiBzdG9yZTtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VTdG9yZTIsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHVzZVN0b3JlMlxuICB9KTtcbiAgcmV0dXJuIHVzZVN0b3JlMjtcbn1cbnZhciB1c2VTdG9yZSA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTdG9yZUhvb2soKTtcblxuLy8gc3JjL2hvb2tzL3VzZURpc3BhdGNoLnRzXG5mdW5jdGlvbiBjcmVhdGVEaXNwYXRjaEhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVN0b3JlMiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlU3RvcmUgOiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCk7XG4gIGNvbnN0IHVzZURpc3BhdGNoMiA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlMigpO1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaDtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VEaXNwYXRjaDIsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHVzZURpc3BhdGNoMlxuICB9KTtcbiAgcmV0dXJuIHVzZURpc3BhdGNoMjtcbn1cbnZhciB1c2VEaXNwYXRjaCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVEaXNwYXRjaEhvb2soKTtcblxuLy8gc3JjL2V4cG9ydHMudHNcbnZhciBiYXRjaCA9IGRlZmF1bHROb29wQmF0Y2g7XG5cbi8vIHNyYy9pbmRleC50c1xuaW5pdGlhbGl6ZVVzZVNlbGVjdG9yKHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yMik7XG5pbml0aWFsaXplQ29ubmVjdChSZWFjdDIudXNlU3luY0V4dGVybmFsU3RvcmUpO1xuZXhwb3J0IHtcbiAgUHJvdmlkZXJfZGVmYXVsdCBhcyBQcm92aWRlcixcbiAgUmVhY3RSZWR1eENvbnRleHQsXG4gIGJhdGNoLFxuICBjb25uZWN0X2RlZmF1bHQgYXMgY29ubmVjdCxcbiAgY3JlYXRlRGlzcGF0Y2hIb29rLFxuICBjcmVhdGVTZWxlY3Rvckhvb2ssXG4gIGNyZWF0ZVN0b3JlSG9vayxcbiAgc2hhbGxvd0VxdWFsLFxuICB1c2VEaXNwYXRjaCxcbiAgdXNlU2VsZWN0b3IsXG4gIHVzZVN0b3JlXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtcmVkdXgubWpzLm1hcCIsIlwidXNlIGNsaWVudFwiO1xuZnVuY3Rpb24gTXQodCl7aWYoIXR8fHR5cGVvZiBkb2N1bWVudD09XCJ1bmRlZmluZWRcIilyZXR1cm47bGV0IG89ZG9jdW1lbnQuaGVhZHx8ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2UudHlwZT1cInRleHQvY3NzXCIsby5maXJzdENoaWxkP28uaW5zZXJ0QmVmb3JlKGUsby5maXJzdENoaWxkKTpvLmFwcGVuZENoaWxkKGUpLGUuc3R5bGVTaGVldD9lLnN0eWxlU2hlZXQuY3NzVGV4dD10OmUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkpfU10KGA6cm9vdHstLXRvYXN0aWZ5LWNvbG9yLWxpZ2h0OiAjZmZmOy0tdG9hc3RpZnktY29sb3ItZGFyazogIzEyMTIxMjstLXRvYXN0aWZ5LWNvbG9yLWluZm86ICMzNDk4ZGI7LS10b2FzdGlmeS1jb2xvci1zdWNjZXNzOiAjMDdiYzBjOy0tdG9hc3RpZnktY29sb3Itd2FybmluZzogI2YxYzQwZjstLXRvYXN0aWZ5LWNvbG9yLWVycm9yOiBoc2woNiwgNzglLCA1NyUpOy0tdG9hc3RpZnktY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjcpOy0tdG9hc3RpZnktaWNvbi1jb2xvci1pbmZvOiB2YXIoLS10b2FzdGlmeS1jb2xvci1pbmZvKTstLXRvYXN0aWZ5LWljb24tY29sb3Itc3VjY2VzczogdmFyKC0tdG9hc3RpZnktY29sb3Itc3VjY2Vzcyk7LS10b2FzdGlmeS1pY29uLWNvbG9yLXdhcm5pbmc6IHZhcigtLXRvYXN0aWZ5LWNvbG9yLXdhcm5pbmcpOy0tdG9hc3RpZnktaWNvbi1jb2xvci1lcnJvcjogdmFyKC0tdG9hc3RpZnktY29sb3ItZXJyb3IpOy0tdG9hc3RpZnktY29udGFpbmVyLXdpZHRoOiBmaXQtY29udGVudDstLXRvYXN0aWZ5LXRvYXN0LXdpZHRoOiAzMjBweDstLXRvYXN0aWZ5LXRvYXN0LW9mZnNldDogMTZweDstLXRvYXN0aWZ5LXRvYXN0LXRvcDogbWF4KHZhcigtLXRvYXN0aWZ5LXRvYXN0LW9mZnNldCksIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSk7LS10b2FzdGlmeS10b2FzdC1yaWdodDogbWF4KHZhcigtLXRvYXN0aWZ5LXRvYXN0LW9mZnNldCksIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTstLXRvYXN0aWZ5LXRvYXN0LWxlZnQ6IG1heCh2YXIoLS10b2FzdGlmeS10b2FzdC1vZmZzZXQpLCBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpKTstLXRvYXN0aWZ5LXRvYXN0LWJvdHRvbTogbWF4KHZhcigtLXRvYXN0aWZ5LXRvYXN0LW9mZnNldCksIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7LS10b2FzdGlmeS10b2FzdC1iYWNrZ3JvdW5kOiAjZmZmOy0tdG9hc3RpZnktdG9hc3QtcGFkZGluZzogMTRweDstLXRvYXN0aWZ5LXRvYXN0LW1pbi1oZWlnaHQ6IDY0cHg7LS10b2FzdGlmeS10b2FzdC1tYXgtaGVpZ2h0OiA4MDBweDstLXRvYXN0aWZ5LXRvYXN0LWJkLXJhZGl1czogNnB4Oy0tdG9hc3RpZnktdG9hc3Qtc2hhZG93OiAwcHggNHB4IDEycHggcmdiYSgwLCAwLCAwLCAuMSk7LS10b2FzdGlmeS1mb250LWZhbWlseTogc2Fucy1zZXJpZjstLXRvYXN0aWZ5LXotaW5kZXg6IDk5OTk7LS10b2FzdGlmeS10ZXh0LWNvbG9yLWxpZ2h0OiAjNzU3NTc1Oy0tdG9hc3RpZnktdGV4dC1jb2xvci1kYXJrOiAjZmZmOy0tdG9hc3RpZnktdGV4dC1jb2xvci1pbmZvOiAjZmZmOy0tdG9hc3RpZnktdGV4dC1jb2xvci1zdWNjZXNzOiAjZmZmOy0tdG9hc3RpZnktdGV4dC1jb2xvci13YXJuaW5nOiAjZmZmOy0tdG9hc3RpZnktdGV4dC1jb2xvci1lcnJvcjogI2ZmZjstLXRvYXN0aWZ5LXNwaW5uZXItY29sb3I6ICM2MTYxNjE7LS10b2FzdGlmeS1zcGlubmVyLWNvbG9yLWVtcHR5LWFyZWE6ICNlMGUwZTA7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1saWdodDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGNkOTY0LCAjNWFjOGZhLCAjMDA3YWZmLCAjMzRhYWRjLCAjNTg1NmQ2LCAjZmYyZDU1KTstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWRhcms6ICNiYjg2ZmM7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1pbmZvOiB2YXIoLS10b2FzdGlmeS1jb2xvci1pbmZvKTstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLXN1Y2Nlc3M6IHZhcigtLXRvYXN0aWZ5LWNvbG9yLXN1Y2Nlc3MpOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3Mtd2FybmluZzogdmFyKC0tdG9hc3RpZnktY29sb3Itd2FybmluZyk7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1lcnJvcjogdmFyKC0tdG9hc3RpZnktY29sb3ItZXJyb3IpOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtYmdvOiAuMn0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lcnt6LWluZGV4OnZhcigtLXRvYXN0aWZ5LXotaW5kZXgpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCx2YXIoLS10b2FzdGlmeS16LWluZGV4KSk7cG9zaXRpb246Zml4ZWQ7d2lkdGg6dmFyKC0tdG9hc3RpZnktY29udGFpbmVyLXdpZHRoKTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6I2ZmZjtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS10b3AtbGVmdHt0b3A6dmFyKC0tdG9hc3RpZnktdG9hc3QtdG9wKTtsZWZ0OnZhcigtLXRvYXN0aWZ5LXRvYXN0LWxlZnQpfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS10b3AtY2VudGVye3RvcDp2YXIoLS10b2FzdGlmeS10b2FzdC10b3ApO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7YWxpZ24taXRlbXM6Y2VudGVyfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS10b3AtcmlnaHR7dG9wOnZhcigtLXRvYXN0aWZ5LXRvYXN0LXRvcCk7cmlnaHQ6dmFyKC0tdG9hc3RpZnktdG9hc3QtcmlnaHQpO2FsaWduLWl0ZW1zOmVuZH0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tYm90dG9tLWxlZnR7Ym90dG9tOnZhcigtLXRvYXN0aWZ5LXRvYXN0LWJvdHRvbSk7bGVmdDp2YXIoLS10b2FzdGlmeS10b2FzdC1sZWZ0KX0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tYm90dG9tLWNlbnRlcntib3R0b206dmFyKC0tdG9hc3RpZnktdG9hc3QtYm90dG9tKTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpO2FsaWduLWl0ZW1zOmNlbnRlcn0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tYm90dG9tLXJpZ2h0e2JvdHRvbTp2YXIoLS10b2FzdGlmeS10b2FzdC1ib3R0b20pO3JpZ2h0OnZhcigtLXRvYXN0aWZ5LXRvYXN0LXJpZ2h0KTthbGlnbi1pdGVtczplbmR9LlRvYXN0aWZ5X190b2FzdHstLXk6IDA7cG9zaXRpb246cmVsYXRpdmU7dG91Y2gtYWN0aW9uOm5vbmU7d2lkdGg6dmFyKC0tdG9hc3RpZnktdG9hc3Qtd2lkdGgpO21pbi1oZWlnaHQ6dmFyKC0tdG9hc3RpZnktdG9hc3QtbWluLWhlaWdodCk7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbi1ib3R0b206MXJlbTtwYWRkaW5nOnZhcigtLXRvYXN0aWZ5LXRvYXN0LXBhZGRpbmcpO2JvcmRlci1yYWRpdXM6dmFyKC0tdG9hc3RpZnktdG9hc3QtYmQtcmFkaXVzKTtib3gtc2hhZG93OnZhcigtLXRvYXN0aWZ5LXRvYXN0LXNoYWRvdyk7bWF4LWhlaWdodDp2YXIoLS10b2FzdGlmeS10b2FzdC1tYXgtaGVpZ2h0KTtmb250LWZhbWlseTp2YXIoLS10b2FzdGlmeS1mb250LWZhbWlseSk7ei1pbmRleDowO2Rpc3BsYXk6ZmxleDtmbGV4OjEgYXV0bzthbGlnbi1pdGVtczpjZW50ZXI7d29yZC1icmVhazpicmVhay13b3JkfUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpey5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVye3dpZHRoOjEwMHZ3O2xlZnQ6ZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTttYXJnaW46MH0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLWxlZnQsLlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1jZW50ZXIsLlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1yaWdodHt0b3A6ZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1sZWZ0LC5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tY2VudGVyLC5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tcmlnaHR7Ym90dG9tOmVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDApfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ydGx7cmlnaHQ6ZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7bGVmdDppbml0aWFsfS5Ub2FzdGlmeV9fdG9hc3R7LS10b2FzdGlmeS10b2FzdC13aWR0aDogMTAwJTttYXJnaW4tYm90dG9tOjA7Ym9yZGVyLXJhZGl1czowfX0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lcltkYXRhLXN0YWNrZWQ9dHJ1ZV17d2lkdGg6dmFyKC0tdG9hc3RpZnktdG9hc3Qtd2lkdGgpfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWR7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKSBzY2FsZSh2YXIoLS1zKSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1jb2xsYXBzZWRdIC5Ub2FzdGlmeV9fdG9hc3QtYm9keSwuVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtY29sbGFwc2VkXSAuVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbnt0cmFuc2l0aW9uOm9wYWNpdHkgLjFzfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1jb2xsYXBzZWQ9ZmFsc2Vde292ZXJmbG93OnZpc2libGV9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLWNvbGxhcHNlZD10cnVlXTpub3QoOmxhc3QtY2hpbGQpPip7b3BhY2l0eTowfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWQ6YWZ0ZXJ7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO2hlaWdodDpjYWxjKHZhcigtLWcpICogMXB4KTtib3R0b206MTAwJX0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtcG9zPXRvcF17dG9wOjB9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLXBvcz1ib3Rde2JvdHRvbTowfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1wb3M9Ym90XS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWQ6YmVmb3Jle3RyYW5zZm9ybS1vcmlnaW46dG9wfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1wb3M9dG9wXS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWQ6YmVmb3Jle3RyYW5zZm9ybS1vcmlnaW46Ym90dG9tfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtoZWlnaHQ6MTAwJTt0cmFuc2Zvcm06c2NhbGVZKDMpO3otaW5kZXg6LTF9LlRvYXN0aWZ5X190b2FzdC0tcnRse2RpcmVjdGlvbjpydGx9LlRvYXN0aWZ5X190b2FzdC0tY2xvc2Utb24tY2xpY2t7Y3Vyc29yOnBvaW50ZXJ9LlRvYXN0aWZ5X190b2FzdC1pY29ue21hcmdpbi1pbmxpbmUtZW5kOjEwcHg7d2lkdGg6MjJweDtmbGV4LXNocmluazowO2Rpc3BsYXk6ZmxleH0uVG9hc3RpZnktLWFuaW1hdGV7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjouNXN9LlRvYXN0aWZ5LS1hbmltYXRlLWljb257YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjouM3N9LlRvYXN0aWZ5X190b2FzdC10aGVtZS0tZGFya3tiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLWRhcmspO2NvbG9yOnZhcigtLXRvYXN0aWZ5LXRleHQtY29sb3ItZGFyayl9LlRvYXN0aWZ5X190b2FzdC10aGVtZS0tbGlnaHQsLlRvYXN0aWZ5X190b2FzdC10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fdG9hc3QtLWRlZmF1bHR7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1saWdodCk7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci1saWdodCl9LlRvYXN0aWZ5X190b2FzdC10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fdG9hc3QtLWluZm97Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci1pbmZvKTtiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLWluZm8pfS5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3RvYXN0LS1zdWNjZXNze2NvbG9yOnZhcigtLXRvYXN0aWZ5LXRleHQtY29sb3Itc3VjY2Vzcyk7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1zdWNjZXNzKX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0td2FybmluZ3tjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLXdhcm5pbmcpO2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3Itd2FybmluZyl9LlRvYXN0aWZ5X190b2FzdC10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fdG9hc3QtLWVycm9ye2NvbG9yOnZhcigtLXRvYXN0aWZ5LXRleHQtY29sb3ItZXJyb3IpO2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItZXJyb3IpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1saWdodHtiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWxpZ2h0KX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tZGFya3tiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWRhcmspfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1pbmZve2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtaW5mbyl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXN1Y2Nlc3N7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1zdWNjZXNzKX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0td2FybmluZ3tiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLXdhcm5pbmcpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1lcnJvcntiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWVycm9yKX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1pbmZvLC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXN1Y2Nlc3MsLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0td2FybmluZywuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1lcnJvcntiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXRyYW5zcGFyZW50KX0uVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbntjb2xvcjojZmZmO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo2cHg7cmlnaHQ6NnB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7b3V0bGluZTpub25lO2JvcmRlcjpub25lO3BhZGRpbmc6MDtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5Oi43O3RyYW5zaXRpb246LjNzIGVhc2U7ei1pbmRleDoxfS5Ub2FzdGlmeV9fdG9hc3QtLXJ0bCAuVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbntsZWZ0OjZweDtyaWdodDp1bnNldH0uVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbi0tbGlnaHR7Y29sb3I6IzAwMDtvcGFjaXR5Oi4zfS5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uPnN2Z3tmaWxsOmN1cnJlbnRDb2xvcjtoZWlnaHQ6MTZweDt3aWR0aDoxNHB4fS5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uOmhvdmVyLC5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uOmZvY3Vze29wYWNpdHk6MX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X190cmFja1Byb2dyZXNzezAle3RyYW5zZm9ybTpzY2FsZVgoMSl9dG97dHJhbnNmb3JtOnNjYWxlWCgwKX19LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXJ7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoxO29wYWNpdHk6Ljc7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0fS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1hbmltYXRlZHthbmltYXRpb246VG9hc3RpZnlfX3RyYWNrUHJvZ3Jlc3MgbGluZWFyIDEgZm9yd2FyZHN9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWNvbnRyb2xsZWR7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1ydGx7cmlnaHQ6MDtsZWZ0OmluaXRpYWw7dHJhbnNmb3JtLW9yaWdpbjpyaWdodDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOmluaXRpYWx9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXdycHtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47Ym90dG9tOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjVweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLXRvYXN0aWZ5LXRvYXN0LWJkLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tdG9hc3RpZnktdG9hc3QtYmQtcmFkaXVzKX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0td3JwW2RhdGEtaGlkZGVuPXRydWVde29wYWNpdHk6MH0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tYmd7b3BhY2l0eTp2YXIoLS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1iZ28pO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LlRvYXN0aWZ5X19zcGlubmVye3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjoycHggc29saWQ7Ym9yZGVyLXJhZGl1czoxMDAlO2JvcmRlci1jb2xvcjp2YXIoLS10b2FzdGlmeS1zcGlubmVyLWNvbG9yLWVtcHR5LWFyZWEpO2JvcmRlci1yaWdodC1jb2xvcjp2YXIoLS10b2FzdGlmeS1zcGlubmVyLWNvbG9yKTthbmltYXRpb246VG9hc3RpZnlfX3NwaW4gLjY1cyBsaW5lYXIgaW5maW5pdGV9QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlSW5SaWdodHswJSw2MCUsNzUlLDkwJSx0b3thbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMzAwMHB4LDAsMCl9NjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTI1cHgsMCwwKX03NSV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwcHgsMCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01cHgsMCwwKX10b3t0cmFuc2Zvcm06bm9uZX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlT3V0UmlnaHR7MjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwcHgsdmFyKC0teSksMCl9dG97b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMDAwcHgsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZUluTGVmdHswJSw2MCUsNzUlLDkwJSx0b3thbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTMwMDBweCwwLDApfTYwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDI1cHgsMCwwKX03NSV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMHB4LDAsMCl9OTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg1cHgsMCwwKX10b3t0cmFuc2Zvcm06bm9uZX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlT3V0TGVmdHsyMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMHB4LHZhcigtLXkpLDApfXRve29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlSW5VcHswJSw2MCUsNzUlLDkwJSx0b3thbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwzMDAwcHgsMCl9NjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKX03NSV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTVweCwwKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlT3V0VXB7MjAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLGNhbGModmFyKC0teSkgLSAxMHB4KSwwKX00MCUsNDUle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKHZhcigtLXkpICsgMjBweCksMCl9dG97b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMDAwcHgsMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZUluRG93bnswJSw2MCUsNzUlLDkwJSx0b3thbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMzAwMHB4LDApfTYwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjVweCwwKX03NSV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCl9OTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDVweCwwKX10b3t0cmFuc2Zvcm06bm9uZX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlT3V0RG93bnsyMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYyh2YXIoLS15KSAtIDEwcHgpLDApfTQwJSw0NSV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLGNhbGModmFyKC0teSkgKyAyMHB4KSwwKX10b3tvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApfX0uVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tdG9wLWxlZnQsLlRvYXN0aWZ5X19ib3VuY2UtZW50ZXItLWJvdHRvbS1sZWZ0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VJbkxlZnR9LlRvYXN0aWZ5X19ib3VuY2UtZW50ZXItLXRvcC1yaWdodCwuVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tYm90dG9tLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VJblJpZ2h0fS5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS10b3AtY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VJbkRvd259LlRvYXN0aWZ5X19ib3VuY2UtZW50ZXItLWJvdHRvbS1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZUluVXB9LlRvYXN0aWZ5X19ib3VuY2UtZXhpdC0tdG9wLWxlZnQsLlRvYXN0aWZ5X19ib3VuY2UtZXhpdC0tYm90dG9tLWxlZnR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZU91dExlZnR9LlRvYXN0aWZ5X19ib3VuY2UtZXhpdC0tdG9wLXJpZ2h0LC5Ub2FzdGlmeV9fYm91bmNlLWV4aXQtLWJvdHRvbS1yaWdodHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlT3V0UmlnaHR9LlRvYXN0aWZ5X19ib3VuY2UtZXhpdC0tdG9wLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlT3V0VXB9LlRvYXN0aWZ5X19ib3VuY2UtZXhpdC0tYm90dG9tLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlT3V0RG93bn1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X196b29tSW57MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX01MCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X196b29tT3V0ezAle29wYWNpdHk6MX01MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApIHNjYWxlM2QoLjMsLjMsLjMpfXRve29wYWNpdHk6MH19LlRvYXN0aWZ5X196b29tLWVudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X196b29tSW59LlRvYXN0aWZ5X196b29tLWV4aXR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3pvb21PdXR9QGtleWZyYW1lcyBUb2FzdGlmeV9fZmxpcEluezAle3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO29wYWNpdHk6MH00MCV7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0yMGRlZyk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufTYwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMTBkZWcpO29wYWNpdHk6MX04MCV7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC01ZGVnKX10b3t0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19mbGlwT3V0ezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApIHBlcnNwZWN0aXZlKDQwMHB4KX0zMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCkgcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTIwZGVnKTtvcGFjaXR5OjF9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCkgcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO29wYWNpdHk6MH19LlRvYXN0aWZ5X19mbGlwLWVudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19mbGlwSW59LlRvYXN0aWZ5X19mbGlwLWV4aXR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2ZsaXBPdXR9QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVJblJpZ2h0ezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMTAlLDAsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZUluTGVmdHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTExMCUsMCwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlSW5VcHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMTAlLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVJbkRvd257MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTExMCUsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZU91dFJpZ2h0ezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfXRve3Zpc2liaWxpdHk6aGlkZGVuO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMTAlLHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZU91dExlZnR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMTAlLHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZU91dERvd257MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNTAwcHgsMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlT3V0VXB7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTUwMHB4LDApfX0uVG9hc3RpZnlfX3NsaWRlLWVudGVyLS10b3AtbGVmdCwuVG9hc3RpZnlfX3NsaWRlLWVudGVyLS1ib3R0b20tbGVmdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVJbkxlZnR9LlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tdG9wLXJpZ2h0LC5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLWJvdHRvbS1yaWdodHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVJblJpZ2h0fS5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLXRvcC1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlSW5Eb3dufS5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLWJvdHRvbS1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlSW5VcH0uVG9hc3RpZnlfX3NsaWRlLWV4aXQtLXRvcC1sZWZ0LC5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tYm90dG9tLWxlZnR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlT3V0TGVmdDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLWR1cmF0aW9uOi4zc30uVG9hc3RpZnlfX3NsaWRlLWV4aXQtLXRvcC1yaWdodCwuVG9hc3RpZnlfX3NsaWRlLWV4aXQtLWJvdHRvbS1yaWdodHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVPdXRSaWdodDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLWR1cmF0aW9uOi4zc30uVG9hc3RpZnlfX3NsaWRlLWV4aXQtLXRvcC1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlT3V0VXA7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi1kdXJhdGlvbjouM3N9LlRvYXN0aWZ5X19zbGlkZS1leGl0LS1ib3R0b20tY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZU91dERvd247YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi1kdXJhdGlvbjouM3N9QGtleWZyYW1lcyBUb2FzdGlmeV9fc3BpbnswJXt0cmFuc2Zvcm06cm90YXRlKDApfXRve3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19XG5gKTtpbXBvcnR7aXNWYWxpZEVsZW1lbnQgYXMgJHR9ZnJvbVwicmVhY3RcIjt2YXIgTD10PT50eXBlb2YgdD09XCJudW1iZXJcIiYmIWlzTmFOKHQpLE49dD0+dHlwZW9mIHQ9PVwic3RyaW5nXCIsUD10PT50eXBlb2YgdD09XCJmdW5jdGlvblwiLG10PXQ9Pk4odCl8fEwodCksQj10PT5OKHQpfHxQKHQpP3Q6bnVsbCxwdD0odCxvKT0+dD09PSExfHxMKHQpJiZ0PjA/dDpvLHo9dD0+JHQodCl8fE4odCl8fFAodCl8fEwodCk7aW1wb3J0IHV0LHt1c2VFZmZlY3QgYXMgUnQsdXNlTGF5b3V0RWZmZWN0IGFzIEJ0LHVzZVJlZiBhcyB6dH1mcm9tXCJyZWFjdFwiO2Z1bmN0aW9uIFoodCxvLGU9MzAwKXtsZXR7c2Nyb2xsSGVpZ2h0OnIsc3R5bGU6c309dDtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PntzLm1pbkhlaWdodD1cImluaXRpYWxcIixzLmhlaWdodD1yK1wicHhcIixzLnRyYW5zaXRpb249YGFsbCAke2V9bXNgLHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e3MuaGVpZ2h0PVwiMFwiLHMucGFkZGluZz1cIjBcIixzLm1hcmdpbj1cIjBcIixzZXRUaW1lb3V0KG8sZSl9KX0pfWZ1bmN0aW9uICQoe2VudGVyOnQsZXhpdDpvLGFwcGVuZFBvc2l0aW9uOmU9ITEsY29sbGFwc2U6cj0hMCxjb2xsYXBzZUR1cmF0aW9uOnM9MzAwfSl7cmV0dXJuIGZ1bmN0aW9uKHtjaGlsZHJlbjphLHBvc2l0aW9uOmQscHJldmVudEV4aXRUcmFuc2l0aW9uOmMsZG9uZTpULG5vZGVSZWY6Zyxpc0luOnYscGxheVRvYXN0Onh9KXtsZXQgQz1lP2Ake3R9LS0ke2R9YDp0LFM9ZT9gJHtvfS0tJHtkfWA6byxFPXp0KDApO3JldHVybiBCdCgoKT0+e2xldCBmPWcuY3VycmVudCxwPUMuc3BsaXQoXCIgXCIpLGI9bj0+e24udGFyZ2V0PT09Zy5jdXJyZW50JiYoeCgpLGYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLGIpLGYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmNhbmNlbFwiLGIpLEUuY3VycmVudD09PTAmJm4udHlwZSE9PVwiYW5pbWF0aW9uY2FuY2VsXCImJmYuY2xhc3NMaXN0LnJlbW92ZSguLi5wKSl9OygoKT0+e2YuY2xhc3NMaXN0LmFkZCguLi5wKSxmLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIixiKSxmLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25jYW5jZWxcIixiKX0pKCl9LFtdKSxSdCgoKT0+e2xldCBmPWcuY3VycmVudCxwPSgpPT57Zi5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIscCkscj9aKGYsVCxzKTpUKCl9O3Z8fChjP3AoKTooKCk9PntFLmN1cnJlbnQ9MSxmLmNsYXNzTmFtZSs9YCAke1N9YCxmLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIixwKX0pKCkpfSxbdl0pLHV0LmNyZWF0ZUVsZW1lbnQodXQuRnJhZ21lbnQsbnVsbCxhKX19aW1wb3J0e2Nsb25lRWxlbWVudCBhcyBGdCxpc1ZhbGlkRWxlbWVudCBhcyBVdH1mcm9tXCJyZWFjdFwiO2Z1bmN0aW9uIEoodCxvKXtyZXR1cm57Y29udGVudDp0dCh0LmNvbnRlbnQsdC5wcm9wcyksY29udGFpbmVySWQ6dC5wcm9wcy5jb250YWluZXJJZCxpZDp0LnByb3BzLnRvYXN0SWQsdGhlbWU6dC5wcm9wcy50aGVtZSx0eXBlOnQucHJvcHMudHlwZSxkYXRhOnQucHJvcHMuZGF0YXx8e30saXNMb2FkaW5nOnQucHJvcHMuaXNMb2FkaW5nLGljb246dC5wcm9wcy5pY29uLHJlYXNvbjp0LnJlbW92YWxSZWFzb24sc3RhdHVzOm99fWZ1bmN0aW9uIHR0KHQsbyxlPSExKXtyZXR1cm4gVXQodCkmJiFOKHQudHlwZSk/RnQodCx7Y2xvc2VUb2FzdDpvLmNsb3NlVG9hc3QsdG9hc3RQcm9wczpvLGRhdGE6by5kYXRhLGlzUGF1c2VkOmV9KTpQKHQpP3Qoe2Nsb3NlVG9hc3Q6by5jbG9zZVRvYXN0LHRvYXN0UHJvcHM6byxkYXRhOm8uZGF0YSxpc1BhdXNlZDplfSk6dH1pbXBvcnQgb3QgZnJvbVwicmVhY3RcIjtmdW5jdGlvbiB5dCh7Y2xvc2VUb2FzdDp0LHRoZW1lOm8sYXJpYUxhYmVsOmU9XCJjbG9zZVwifSl7cmV0dXJuIG90LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIix7Y2xhc3NOYW1lOmBUb2FzdGlmeV9fY2xvc2UtYnV0dG9uIFRvYXN0aWZ5X19jbG9zZS1idXR0b24tLSR7b31gLHR5cGU6XCJidXR0b25cIixvbkNsaWNrOnI9PntyLnN0b3BQcm9wYWdhdGlvbigpLHQoITApfSxcImFyaWEtbGFiZWxcIjplfSxvdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIix2aWV3Qm94OlwiMCAwIDE0IDE2XCJ9LG90LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2ZpbGxSdWxlOlwiZXZlbm9kZFwiLGQ6XCJNNy43MSA4LjIzbDMuNzUgMy43NS0xLjQ4IDEuNDgtMy43NS0zLjc1LTMuNzUgMy43NUwxIDExLjk4bDMuNzUtMy43NUwxIDQuNDggMi40OCAzbDMuNzUgMy43NUw5Ljk4IDNsMS40OCAxLjQ4LTMuNzUgMy43NXpcIn0pKSl9aW1wb3J0IGV0IGZyb21cInJlYWN0XCI7aW1wb3J0IFR0IGZyb21cImNsc3hcIjtmdW5jdGlvbiBndCh7ZGVsYXk6dCxpc1J1bm5pbmc6byxjbG9zZVRvYXN0OmUsdHlwZTpyPVwiZGVmYXVsdFwiLGhpZGU6cyxjbGFzc05hbWU6bCxjb250cm9sbGVkUHJvZ3Jlc3M6YSxwcm9ncmVzczpkLHJ0bDpjLGlzSW46VCx0aGVtZTpnfSl7bGV0IHY9c3x8YSYmZD09PTAseD17YW5pbWF0aW9uRHVyYXRpb246YCR7dH1tc2AsYW5pbWF0aW9uUGxheVN0YXRlOm8/XCJydW5uaW5nXCI6XCJwYXVzZWRcIn07YSYmKHgudHJhbnNmb3JtPWBzY2FsZVgoJHtkfSlgKTtsZXQgQz1UdChcIlRvYXN0aWZ5X19wcm9ncmVzcy1iYXJcIixhP1wiVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tY29udHJvbGxlZFwiOlwiVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tYW5pbWF0ZWRcIixgVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tJHtnfWAsYFRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLSR7cn1gLHtbXCJUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1ydGxcIl06Y30pLFM9UChsKT9sKHtydGw6Yyx0eXBlOnIsZGVmYXVsdENsYXNzTmFtZTpDfSk6VHQoQyxsKSxFPXtbYSYmZD49MT9cIm9uVHJhbnNpdGlvbkVuZFwiOlwib25BbmltYXRpb25FbmRcIl06YSYmZDwxP251bGw6KCk9PntUJiZlKCl9fTtyZXR1cm4gZXQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13cnBcIixcImRhdGEtaGlkZGVuXCI6dn0sZXQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6YFRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWJnIFRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLSR7Z30gVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tJHtyfWB9KSxldC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3JvbGU6XCJwcm9ncmVzc2JhclwiLFwiYXJpYS1oaWRkZW5cIjp2P1widHJ1ZVwiOlwiZmFsc2VcIixcImFyaWEtbGFiZWxcIjpcIm5vdGlmaWNhdGlvbiB0aW1lclwiLGNsYXNzTmFtZTpTLHN0eWxlOngsLi4uRX0pKX1pbXBvcnQgRHQgZnJvbVwiY2xzeFwiO2ltcG9ydCBjdCx7dXNlRWZmZWN0IGFzIHlvLHVzZVJlZiBhcyBUbyx1c2VTdGF0ZSBhcyBnb31mcm9tXCJyZWFjdFwiO3ZhciBYdD0xLGF0PSgpPT5gJHtYdCsrfWA7ZnVuY3Rpb24gX3QodCxvLGUpe2xldCByPTEscz0wLGw9W10sYT1bXSxkPW8sYz1uZXcgTWFwLFQ9bmV3IFNldCxnPWk9PihULmFkZChpKSwoKT0+VC5kZWxldGUoaSkpLHY9KCk9PnthPUFycmF5LmZyb20oYy52YWx1ZXMoKSksVC5mb3JFYWNoKGk9PmkoKSl9LHg9KHtjb250YWluZXJJZDppLHRvYXN0SWQ6bix1cGRhdGVJZDp1fSk9PntsZXQgaD1pP2khPT10OnQhPT0xLG09Yy5oYXMobikmJnU9PW51bGw7cmV0dXJuIGh8fG19LEM9KGksbik9PntjLmZvckVhY2godT0+e3ZhciBoOyhuPT1udWxsfHxuPT09dS5wcm9wcy50b2FzdElkKSYmKChoPXUudG9nZ2xlKT09bnVsbHx8aC5jYWxsKHUsaSkpfSl9LFM9aT0+e3ZhciBuLHU7KHU9KG49aS5wcm9wcyk9PW51bGw/dm9pZCAwOm4ub25DbG9zZSk9PW51bGx8fHUuY2FsbChuLGkucmVtb3ZhbFJlYXNvbiksaS5pc0FjdGl2ZT0hMX0sRT1pPT57aWYoaT09bnVsbCljLmZvckVhY2goUyk7ZWxzZXtsZXQgbj1jLmdldChpKTtuJiZTKG4pfXYoKX0sZj0oKT0+e3MtPWwubGVuZ3RoLGw9W119LHA9aT0+e3ZhciBtLF87bGV0e3RvYXN0SWQ6bix1cGRhdGVJZDp1fT1pLnByb3BzLGg9dT09bnVsbDtpLnN0YWxlSWQmJmMuZGVsZXRlKGkuc3RhbGVJZCksaS5pc0FjdGl2ZT0hMCxjLnNldChuLGkpLHYoKSxlKEooaSxoP1wiYWRkZWRcIjpcInVwZGF0ZWRcIikpLGgmJigoXz0obT1pLnByb3BzKS5vbk9wZW4pPT1udWxsfHxfLmNhbGwobSkpfTtyZXR1cm57aWQ6dCxwcm9wczpkLG9ic2VydmU6Zyx0b2dnbGU6QyxyZW1vdmVUb2FzdDpFLHRvYXN0czpjLGNsZWFyUXVldWU6ZixidWlsZFRvYXN0OihpLG4pPT57aWYoeChuKSlyZXR1cm47bGV0e3RvYXN0SWQ6dSx1cGRhdGVJZDpoLGRhdGE6bSxzdGFsZUlkOl8sZGVsYXk6a309bixNPWg9PW51bGw7TSYmcysrO2xldCBBPXsuLi5kLHN0eWxlOmQudG9hc3RTdHlsZSxrZXk6cisrLC4uLk9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhuKS5maWx0ZXIoKFtELFldKT0+WSE9bnVsbCkpLHRvYXN0SWQ6dSx1cGRhdGVJZDpoLGRhdGE6bSxpc0luOiExLGNsYXNzTmFtZTpCKG4uY2xhc3NOYW1lfHxkLnRvYXN0Q2xhc3NOYW1lKSxwcm9ncmVzc0NsYXNzTmFtZTpCKG4ucHJvZ3Jlc3NDbGFzc05hbWV8fGQucHJvZ3Jlc3NDbGFzc05hbWUpLGF1dG9DbG9zZTpuLmlzTG9hZGluZz8hMTpwdChuLmF1dG9DbG9zZSxkLmF1dG9DbG9zZSksY2xvc2VUb2FzdChEKXtjLmdldCh1KS5yZW1vdmFsUmVhc29uPUQsRSh1KX0sZGVsZXRlVG9hc3QoKXtsZXQgRD1jLmdldCh1KTtpZihEIT1udWxsKXtpZihlKEooRCxcInJlbW92ZWRcIikpLGMuZGVsZXRlKHUpLHMtLSxzPDAmJihzPTApLGwubGVuZ3RoPjApe3AobC5zaGlmdCgpKTtyZXR1cm59digpfX19O0EuY2xvc2VCdXR0b249ZC5jbG9zZUJ1dHRvbixuLmNsb3NlQnV0dG9uPT09ITF8fHoobi5jbG9zZUJ1dHRvbik/QS5jbG9zZUJ1dHRvbj1uLmNsb3NlQnV0dG9uOm4uY2xvc2VCdXR0b249PT0hMCYmKEEuY2xvc2VCdXR0b249eihkLmNsb3NlQnV0dG9uKT9kLmNsb3NlQnV0dG9uOiEwKTtsZXQgUj17Y29udGVudDppLHByb3BzOkEsc3RhbGVJZDpffTtkLmxpbWl0JiZkLmxpbWl0PjAmJnM+ZC5saW1pdCYmTT9sLnB1c2goUik6TChrKT9zZXRUaW1lb3V0KCgpPT57cChSKX0sayk6cChSKX0sc2V0UHJvcHMoaSl7ZD1pfSxzZXRUb2dnbGU6KGksbik9PntsZXQgdT1jLmdldChpKTt1JiYodS50b2dnbGU9bil9LGlzVG9hc3RBY3RpdmU6aT0+e3ZhciBuO3JldHVybihuPWMuZ2V0KGkpKT09bnVsbD92b2lkIDA6bi5pc0FjdGl2ZX0sZ2V0U25hcHNob3Q6KCk9PmF9fXZhciBJPW5ldyBNYXAsRj1bXSxzdD1uZXcgU2V0LFZ0PXQ9PnN0LmZvckVhY2gobz0+byh0KSksYnQ9KCk9Pkkuc2l6ZT4wO2Z1bmN0aW9uIFF0KCl7Ri5mb3JFYWNoKHQ9Pm50KHQuY29udGVudCx0Lm9wdGlvbnMpKSxGPVtdfXZhciB2dD0odCx7Y29udGFpbmVySWQ6b30pPT57dmFyIGU7cmV0dXJuKGU9SS5nZXQob3x8MSkpPT1udWxsP3ZvaWQgMDplLnRvYXN0cy5nZXQodCl9O2Z1bmN0aW9uIFgodCxvKXt2YXIgcjtpZihvKXJldHVybiEhKChyPUkuZ2V0KG8pKSE9bnVsbCYmci5pc1RvYXN0QWN0aXZlKHQpKTtsZXQgZT0hMTtyZXR1cm4gSS5mb3JFYWNoKHM9PntzLmlzVG9hc3RBY3RpdmUodCkmJihlPSEwKX0pLGV9ZnVuY3Rpb24gaHQodCl7aWYoIWJ0KCkpe0Y9Ri5maWx0ZXIobz0+dCE9bnVsbCYmby5vcHRpb25zLnRvYXN0SWQhPT10KTtyZXR1cm59aWYodD09bnVsbHx8bXQodCkpSS5mb3JFYWNoKG89PntvLnJlbW92ZVRvYXN0KHQpfSk7ZWxzZSBpZih0JiYoXCJjb250YWluZXJJZFwiaW4gdHx8XCJpZFwiaW4gdCkpe2xldCBvPUkuZ2V0KHQuY29udGFpbmVySWQpO28/by5yZW1vdmVUb2FzdCh0LmlkKTpJLmZvckVhY2goZT0+e2UucmVtb3ZlVG9hc3QodC5pZCl9KX19dmFyIEN0PSh0PXt9KT0+e0kuZm9yRWFjaChvPT57by5wcm9wcy5saW1pdCYmKCF0LmNvbnRhaW5lcklkfHxvLmlkPT09dC5jb250YWluZXJJZCkmJm8uY2xlYXJRdWV1ZSgpfSl9O2Z1bmN0aW9uIG50KHQsbyl7eih0KSYmKGJ0KCl8fEYucHVzaCh7Y29udGVudDp0LG9wdGlvbnM6b30pLEkuZm9yRWFjaChlPT57ZS5idWlsZFRvYXN0KHQsbyl9KSl9ZnVuY3Rpb24geHQodCl7dmFyIG87KG89SS5nZXQodC5jb250YWluZXJJZHx8MSkpPT1udWxsfHxvLnNldFRvZ2dsZSh0LmlkLHQuZm4pfWZ1bmN0aW9uIHJ0KHQsbyl7SS5mb3JFYWNoKGU9Pnsobz09bnVsbHx8IShvIT1udWxsJiZvLmNvbnRhaW5lcklkKXx8KG89PW51bGw/dm9pZCAwOm8uY29udGFpbmVySWQpPT09ZS5pZCkmJmUudG9nZ2xlKHQsbz09bnVsbD92b2lkIDA6by5pZCl9KX1mdW5jdGlvbiBFdCh0KXtsZXQgbz10LmNvbnRhaW5lcklkfHwxO3JldHVybntzdWJzY3JpYmUoZSl7bGV0IHI9X3Qobyx0LFZ0KTtJLnNldChvLHIpO2xldCBzPXIub2JzZXJ2ZShlKTtyZXR1cm4gUXQoKSwoKT0+e3MoKSxJLmRlbGV0ZShvKX19LHNldFByb3BzKGUpe3ZhciByOyhyPUkuZ2V0KG8pKT09bnVsbHx8ci5zZXRQcm9wcyhlKX0sZ2V0U25hcHNob3QoKXt2YXIgZTtyZXR1cm4oZT1JLmdldChvKSk9PW51bGw/dm9pZCAwOmUuZ2V0U25hcHNob3QoKX19fWZ1bmN0aW9uIFB0KHQpe3JldHVybiBzdC5hZGQodCksKCk9PntzdC5kZWxldGUodCl9fWZ1bmN0aW9uIFd0KHQpe3JldHVybiB0JiYoTih0LnRvYXN0SWQpfHxMKHQudG9hc3RJZCkpP3QudG9hc3RJZDphdCgpfWZ1bmN0aW9uIFUodCxvKXtyZXR1cm4gbnQodCxvKSxvLnRvYXN0SWR9ZnVuY3Rpb24gVih0LG8pe3JldHVybnsuLi5vLHR5cGU6byYmby50eXBlfHx0LHRvYXN0SWQ6V3Qobyl9fWZ1bmN0aW9uIFEodCl7cmV0dXJuKG8sZSk9PlUobyxWKHQsZSkpfWZ1bmN0aW9uIHkodCxvKXtyZXR1cm4gVSh0LFYoXCJkZWZhdWx0XCIsbykpfXkubG9hZGluZz0odCxvKT0+VSh0LFYoXCJkZWZhdWx0XCIse2lzTG9hZGluZzohMCxhdXRvQ2xvc2U6ITEsY2xvc2VPbkNsaWNrOiExLGNsb3NlQnV0dG9uOiExLGRyYWdnYWJsZTohMSwuLi5vfSkpO2Z1bmN0aW9uIEd0KHQse3BlbmRpbmc6byxlcnJvcjplLHN1Y2Nlc3M6cn0scyl7bGV0IGw7byYmKGw9TihvKT95LmxvYWRpbmcobyxzKTp5LmxvYWRpbmcoby5yZW5kZXIsey4uLnMsLi4ub30pKTtsZXQgYT17aXNMb2FkaW5nOm51bGwsYXV0b0Nsb3NlOm51bGwsY2xvc2VPbkNsaWNrOm51bGwsY2xvc2VCdXR0b246bnVsbCxkcmFnZ2FibGU6bnVsbH0sZD0oVCxnLHYpPT57aWYoZz09bnVsbCl7eS5kaXNtaXNzKGwpO3JldHVybn1sZXQgeD17dHlwZTpULC4uLmEsLi4ucyxkYXRhOnZ9LEM9TihnKT97cmVuZGVyOmd9Omc7cmV0dXJuIGw/eS51cGRhdGUobCx7Li4ueCwuLi5DfSk6eShDLnJlbmRlcix7Li4ueCwuLi5DfSksdn0sYz1QKHQpP3QoKTp0O3JldHVybiBjLnRoZW4oVD0+ZChcInN1Y2Nlc3NcIixyLFQpKS5jYXRjaChUPT5kKFwiZXJyb3JcIixlLFQpKSxjfXkucHJvbWlzZT1HdDt5LnN1Y2Nlc3M9UShcInN1Y2Nlc3NcIik7eS5pbmZvPVEoXCJpbmZvXCIpO3kuZXJyb3I9UShcImVycm9yXCIpO3kud2FybmluZz1RKFwid2FybmluZ1wiKTt5Lndhcm49eS53YXJuaW5nO3kuZGFyaz0odCxvKT0+VSh0LFYoXCJkZWZhdWx0XCIse3RoZW1lOlwiZGFya1wiLC4uLm99KSk7ZnVuY3Rpb24gcXQodCl7aHQodCl9eS5kaXNtaXNzPXF0O3kuY2xlYXJXYWl0aW5nUXVldWU9Q3Q7eS5pc0FjdGl2ZT1YO3kudXBkYXRlPSh0LG89e30pPT57bGV0IGU9dnQodCxvKTtpZihlKXtsZXR7cHJvcHM6cixjb250ZW50OnN9PWUsbD17ZGVsYXk6MTAwLC4uLnIsLi4ubyx0b2FzdElkOm8udG9hc3RJZHx8dCx1cGRhdGVJZDphdCgpfTtsLnRvYXN0SWQhPT10JiYobC5zdGFsZUlkPXQpO2xldCBhPWwucmVuZGVyfHxzO2RlbGV0ZSBsLnJlbmRlcixVKGEsbCl9fTt5LmRvbmU9dD0+e3kudXBkYXRlKHQse3Byb2dyZXNzOjF9KX07eS5vbkNoYW5nZT1QdDt5LnBsYXk9dD0+cnQoITAsdCk7eS5wYXVzZT10PT5ydCghMSx0KTtpbXBvcnR7dXNlUmVmIGFzIEt0LHVzZVN5bmNFeHRlcm5hbFN0b3JlIGFzIFl0fWZyb21cInJlYWN0XCI7ZnVuY3Rpb24gSXQodCl7dmFyIGE7bGV0e3N1YnNjcmliZTpvLGdldFNuYXBzaG90OmUsc2V0UHJvcHM6cn09S3QoRXQodCkpLmN1cnJlbnQ7cih0KTtsZXQgcz0oYT1ZdChvLGUsZSkpPT1udWxsP3ZvaWQgMDphLnNsaWNlKCk7ZnVuY3Rpb24gbChkKXtpZighcylyZXR1cm5bXTtsZXQgYz1uZXcgTWFwO3JldHVybiB0Lm5ld2VzdE9uVG9wJiZzLnJldmVyc2UoKSxzLmZvckVhY2goVD0+e2xldHtwb3NpdGlvbjpnfT1ULnByb3BzO2MuaGFzKGcpfHxjLnNldChnLFtdKSxjLmdldChnKS5wdXNoKFQpfSksQXJyYXkuZnJvbShjLFQ9PmQoVFswXSxUWzFdKSl9cmV0dXJue2dldFRvYXN0VG9SZW5kZXI6bCxpc1RvYXN0QWN0aXZlOlgsY291bnQ6cz09bnVsbD92b2lkIDA6cy5sZW5ndGh9fWltcG9ydHt1c2VFZmZlY3QgYXMgWnQsdXNlUmVmIGFzIFN0LHVzZVN0YXRlIGFzIGt0fWZyb21cInJlYWN0XCI7ZnVuY3Rpb24gQXQodCl7bGV0W28sZV09a3QoITEpLFtyLHNdPWt0KCExKSxsPVN0KG51bGwpLGE9U3Qoe3N0YXJ0OjAsZGVsdGE6MCxyZW1vdmFsRGlzdGFuY2U6MCxjYW5DbG9zZU9uQ2xpY2s6ITAsY2FuRHJhZzohMSxkaWRNb3ZlOiExfSkuY3VycmVudCx7YXV0b0Nsb3NlOmQscGF1c2VPbkhvdmVyOmMsY2xvc2VUb2FzdDpULG9uQ2xpY2s6ZyxjbG9zZU9uQ2xpY2s6dn09dDt4dCh7aWQ6dC50b2FzdElkLGNvbnRhaW5lcklkOnQuY29udGFpbmVySWQsZm46ZX0pLFp0KCgpPT57aWYodC5wYXVzZU9uRm9jdXNMb3NzKXJldHVybiB4KCksKCk9PntDKCl9fSxbdC5wYXVzZU9uRm9jdXNMb3NzXSk7ZnVuY3Rpb24geCgpe2RvY3VtZW50Lmhhc0ZvY3VzKCl8fHAoKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsZiksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIscCl9ZnVuY3Rpb24gQygpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIixmKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIixwKX1mdW5jdGlvbiBTKG0pe2lmKHQuZHJhZ2dhYmxlPT09ITB8fHQuZHJhZ2dhYmxlPT09bS5wb2ludGVyVHlwZSl7YigpO2xldCBfPWwuY3VycmVudDthLmNhbkNsb3NlT25DbGljaz0hMCxhLmNhbkRyYWc9ITAsXy5zdHlsZS50cmFuc2l0aW9uPVwibm9uZVwiLHQuZHJhZ2dhYmxlRGlyZWN0aW9uPT09XCJ4XCI/KGEuc3RhcnQ9bS5jbGllbnRYLGEucmVtb3ZhbERpc3RhbmNlPV8ub2Zmc2V0V2lkdGgqKHQuZHJhZ2dhYmxlUGVyY2VudC8xMDApKTooYS5zdGFydD1tLmNsaWVudFksYS5yZW1vdmFsRGlzdGFuY2U9Xy5vZmZzZXRIZWlnaHQqKHQuZHJhZ2dhYmxlUGVyY2VudD09PTgwP3QuZHJhZ2dhYmxlUGVyY2VudCoxLjU6dC5kcmFnZ2FibGVQZXJjZW50KS8xMDApfX1mdW5jdGlvbiBFKG0pe2xldHt0b3A6Xyxib3R0b206ayxsZWZ0Ok0scmlnaHQ6QX09bC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO20ubmF0aXZlRXZlbnQudHlwZSE9PVwidG91Y2hlbmRcIiYmdC5wYXVzZU9uSG92ZXImJm0uY2xpZW50WD49TSYmbS5jbGllbnRYPD1BJiZtLmNsaWVudFk+PV8mJm0uY2xpZW50WTw9az9wKCk6ZigpfWZ1bmN0aW9uIGYoKXtlKCEwKX1mdW5jdGlvbiBwKCl7ZSghMSl9ZnVuY3Rpb24gYigpe2EuZGlkTW92ZT0hMSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIixuKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsdSl9ZnVuY3Rpb24gaSgpe2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLG4pLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIix1KX1mdW5jdGlvbiBuKG0pe2xldCBfPWwuY3VycmVudDtpZihhLmNhbkRyYWcmJl8pe2EuZGlkTW92ZT0hMCxvJiZwKCksdC5kcmFnZ2FibGVEaXJlY3Rpb249PT1cInhcIj9hLmRlbHRhPW0uY2xpZW50WC1hLnN0YXJ0OmEuZGVsdGE9bS5jbGllbnRZLWEuc3RhcnQsYS5zdGFydCE9PW0uY2xpZW50WCYmKGEuY2FuQ2xvc2VPbkNsaWNrPSExKTtsZXQgaz10LmRyYWdnYWJsZURpcmVjdGlvbj09PVwieFwiP2Ake2EuZGVsdGF9cHgsIHZhcigtLXkpYDpgMCwgY2FsYygke2EuZGVsdGF9cHggKyB2YXIoLS15KSlgO18uc3R5bGUudHJhbnNmb3JtPWB0cmFuc2xhdGUzZCgke2t9LDApYCxfLnN0eWxlLm9wYWNpdHk9YCR7MS1NYXRoLmFicyhhLmRlbHRhL2EucmVtb3ZhbERpc3RhbmNlKX1gfX1mdW5jdGlvbiB1KCl7aSgpO2xldCBtPWwuY3VycmVudDtpZihhLmNhbkRyYWcmJmEuZGlkTW92ZSYmbSl7aWYoYS5jYW5EcmFnPSExLE1hdGguYWJzKGEuZGVsdGEpPmEucmVtb3ZhbERpc3RhbmNlKXtzKCEwKSx0LmNsb3NlVG9hc3QoITApLHQuY29sbGFwc2VBbGwoKTtyZXR1cm59bS5zdHlsZS50cmFuc2l0aW9uPVwidHJhbnNmb3JtIDAuMnMsIG9wYWNpdHkgMC4yc1wiLG0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2Zvcm1cIiksbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm9wYWNpdHlcIil9fWxldCBoPXtvblBvaW50ZXJEb3duOlMsb25Qb2ludGVyVXA6RX07cmV0dXJuIGQmJmMmJihoLm9uTW91c2VFbnRlcj1wLHQuc3RhY2tlZHx8KGgub25Nb3VzZUxlYXZlPWYpKSx2JiYoaC5vbkNsaWNrPW09PntnJiZnKG0pLGEuY2FuQ2xvc2VPbkNsaWNrJiZUKCEwKX0pLHtwbGF5VG9hc3Q6ZixwYXVzZVRvYXN0OnAsaXNSdW5uaW5nOm8scHJldmVudEV4aXRUcmFuc2l0aW9uOnIsdG9hc3RSZWY6bCxldmVudEhhbmRsZXJzOmh9fWltcG9ydHt1c2VFZmZlY3QgYXMgSnQsdXNlTGF5b3V0RWZmZWN0IGFzIHRvfWZyb21cInJlYWN0XCI7dmFyIE90PXR5cGVvZiB3aW5kb3chPVwidW5kZWZpbmVkXCI/dG86SnQ7aW1wb3J0IGl0IGZyb21cImNsc3hcIjtpbXBvcnQgcSx7Y2xvbmVFbGVtZW50IGFzIGNvLGlzVmFsaWRFbGVtZW50IGFzIGZvfWZyb21cInJlYWN0XCI7aW1wb3J0IE8se2Nsb25lRWxlbWVudCBhcyBvbyxpc1ZhbGlkRWxlbWVudCBhcyBlb31mcm9tXCJyZWFjdFwiO3ZhciBHPSh7dGhlbWU6dCx0eXBlOm8saXNMb2FkaW5nOmUsLi4ucn0pPT5PLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7dmlld0JveDpcIjAgMCAyNCAyNFwiLHdpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIixmaWxsOnQ9PT1cImNvbG9yZWRcIj9cImN1cnJlbnRDb2xvclwiOmB2YXIoLS10b2FzdGlmeS1pY29uLWNvbG9yLSR7b30pYCwuLi5yfSk7ZnVuY3Rpb24gYW8odCl7cmV0dXJuIE8uY3JlYXRlRWxlbWVudChHLHsuLi50fSxPLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMjMuMzIgMTcuMTkxTDE1LjQzOCAyLjE4NEMxNC43MjguODMzIDEzLjQxNiAwIDExLjk5NiAwYy0xLjQyIDAtMi43MzMuODMzLTMuNDQzIDIuMTg0TC41MzMgMTcuNDQ4YTQuNzQ0IDQuNzQ0IDAgMDAwIDQuMzY4QzEuMjQzIDIzLjE2NyAyLjU1NSAyNCAzLjk3NSAyNGgxNi4wNUMyMi4yMiAyNCAyNCAyMi4wNDQgMjQgMTkuNjMyYzAtLjkwNC0uMjUxLTEuNzQ2LS42OC0yLjQ0em0tOS42MjIgMS40NmMwIDEuMDMzLS43MjQgMS44MjMtMS42OTggMS44MjNzLTEuNjk4LS43OS0xLjY5OC0xLjgyMnYtLjA0M2MwLTEuMDI4LjcyNC0xLjgyMiAxLjY5OC0xLjgyMnMxLjY5OC43OSAxLjY5OCAxLjgyMnYuMDQzem0uMDM5LTEyLjI4NWwtLjg0IDguMDZjLS4wNTcuNTgxLS40MDguOTQzLS44OTcuOTQzLS40OSAwLS44NC0uMzY3LS44OTYtLjk0MmwtLjg0LTguMDY1Yy0uMDU3LS42MjQuMjUtMS4wOTUuNzc5LTEuMDk1aDEuOTFjLjUyOC4wMDUuODQuNDc2Ljc4NCAxLjF6XCJ9KSl9ZnVuY3Rpb24gc28odCl7cmV0dXJuIE8uY3JlYXRlRWxlbWVudChHLHsuLi50fSxPLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTIgMGExMiAxMiAwIDEwMTIgMTJBMTIuMDEzIDEyLjAxMyAwIDAwMTIgMHptLjI1IDVhMS41IDEuNSAwIDExLTEuNSAxLjUgMS41IDEuNSAwIDAxMS41LTEuNXptMi4yNSAxMy41aC00YTEgMSAwIDAxMC0yaC43NWEuMjUuMjUgMCAwMC4yNS0uMjV2LTQuNWEuMjUuMjUgMCAwMC0uMjUtLjI1aC0uNzVhMSAxIDAgMDEwLTJoMWEyIDIgMCAwMTIgMnY0Ljc1YS4yNS4yNSAwIDAwLjI1LjI1aC43NWExIDEgMCAxMTAgMnpcIn0pKX1mdW5jdGlvbiBubyh0KXtyZXR1cm4gTy5jcmVhdGVFbGVtZW50KEcsey4uLnR9LE8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMiAwYTEyIDEyIDAgMTAxMiAxMkExMi4wMTQgMTIuMDE0IDAgMDAxMiAwem02LjkyNyA4LjJsLTYuODQ1IDkuMjg5YTEuMDExIDEuMDExIDAgMDEtMS40My4xODhsLTQuODg4LTMuOTA4YTEgMSAwIDExMS4yNS0xLjU2Mmw0LjA3NiAzLjI2MSA2LjIyNy04LjQ1MWExIDEgMCAxMTEuNjEgMS4xODN6XCJ9KSl9ZnVuY3Rpb24gcm8odCl7cmV0dXJuIE8uY3JlYXRlRWxlbWVudChHLHsuLi50fSxPLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTEuOTgzIDBhMTIuMjA2IDEyLjIwNiAwIDAwLTguNTEgMy42NTNBMTEuOCAxMS44IDAgMDAwIDEyLjIwNyAxMS43NzkgMTEuNzc5IDAgMDAxMS44IDI0aC4yMTRBMTIuMTExIDEyLjExMSAwIDAwMjQgMTEuNzkxIDExLjc2NiAxMS43NjYgMCAwMDExLjk4MyAwek0xMC41IDE2LjU0MmExLjQ3NiAxLjQ3NiAwIDAxMS40NDktMS41M2guMDI3YTEuNTI3IDEuNTI3IDAgMDExLjUyMyAxLjQ3IDEuNDc1IDEuNDc1IDAgMDEtMS40NDkgMS41M2gtLjAyN2ExLjUyOSAxLjUyOSAwIDAxLTEuNTIzLTEuNDd6TTExIDEyLjV2LTZhMSAxIDAgMDEyIDB2NmExIDEgMCAxMS0yIDB6XCJ9KSl9ZnVuY3Rpb24gaW8oKXtyZXR1cm4gTy5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIlRvYXN0aWZ5X19zcGlubmVyXCJ9KX12YXIgVz17aW5mbzpzbyx3YXJuaW5nOmFvLHN1Y2Nlc3M6bm8sZXJyb3I6cm8sc3Bpbm5lcjppb30sbG89dD0+dCBpbiBXO2Z1bmN0aW9uIE50KHt0aGVtZTp0LHR5cGU6byxpc0xvYWRpbmc6ZSxpY29uOnJ9KXtsZXQgcz1udWxsLGw9e3RoZW1lOnQsdHlwZTpvfTtyZXR1cm4gcj09PSExfHwoUChyKT9zPXIoey4uLmwsaXNMb2FkaW5nOmV9KTplbyhyKT9zPW9vKHIsbCk6ZT9zPVcuc3Bpbm5lcigpOmxvKG8pJiYocz1XW29dKGwpKSksc312YXIgd3Q9dD0+e2xldHtpc1J1bm5pbmc6byxwcmV2ZW50RXhpdFRyYW5zaXRpb246ZSx0b2FzdFJlZjpyLGV2ZW50SGFuZGxlcnM6cyxwbGF5VG9hc3Q6bH09QXQodCkse2Nsb3NlQnV0dG9uOmEsY2hpbGRyZW46ZCxhdXRvQ2xvc2U6YyxvbkNsaWNrOlQsdHlwZTpnLGhpZGVQcm9ncmVzc0Jhcjp2LGNsb3NlVG9hc3Q6eCx0cmFuc2l0aW9uOkMscG9zaXRpb246UyxjbGFzc05hbWU6RSxzdHlsZTpmLHByb2dyZXNzQ2xhc3NOYW1lOnAsdXBkYXRlSWQ6Yixyb2xlOmkscHJvZ3Jlc3M6bixydGw6dSx0b2FzdElkOmgsZGVsZXRlVG9hc3Q6bSxpc0luOl8saXNMb2FkaW5nOmssY2xvc2VPbkNsaWNrOk0sdGhlbWU6QSxhcmlhTGFiZWw6Un09dCxEPWl0KFwiVG9hc3RpZnlfX3RvYXN0XCIsYFRvYXN0aWZ5X190b2FzdC10aGVtZS0tJHtBfWAsYFRvYXN0aWZ5X190b2FzdC0tJHtnfWAse1tcIlRvYXN0aWZ5X190b2FzdC0tcnRsXCJdOnV9LHtbXCJUb2FzdGlmeV9fdG9hc3QtLWNsb3NlLW9uLWNsaWNrXCJdOk19KSxZPVAoRSk/RSh7cnRsOnUscG9zaXRpb246Uyx0eXBlOmcsZGVmYXVsdENsYXNzTmFtZTpEfSk6aXQoRCxFKSxmdD1OdCh0KSxkdD0hIW58fCFjLGo9e2Nsb3NlVG9hc3Q6eCx0eXBlOmcsdGhlbWU6QX0sSD1udWxsO3JldHVybiBhPT09ITF8fChQKGEpP0g9YShqKTpmbyhhKT9IPWNvKGEsaik6SD15dChqKSkscS5jcmVhdGVFbGVtZW50KEMse2lzSW46Xyxkb25lOm0scG9zaXRpb246UyxwcmV2ZW50RXhpdFRyYW5zaXRpb246ZSxub2RlUmVmOnIscGxheVRvYXN0Omx9LHEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtpZDpoLHRhYkluZGV4OjAsb25DbGljazpULFwiZGF0YS1pblwiOl8sY2xhc3NOYW1lOlksLi4ucyxzdHlsZTpmLHJlZjpyLC4uLl8mJntyb2xlOmksXCJhcmlhLWxhYmVsXCI6Un19LGZ0IT1udWxsJiZxLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOml0KFwiVG9hc3RpZnlfX3RvYXN0LWljb25cIix7W1wiVG9hc3RpZnktLWFuaW1hdGUtaWNvbiBUb2FzdGlmeV9fem9vbS1lbnRlclwiXToha30pfSxmdCksdHQoZCx0LCFvKSxILCF0LmN1c3RvbVByb2dyZXNzQmFyJiZxLmNyZWF0ZUVsZW1lbnQoZ3Qsey4uLmImJiFkdD97a2V5OmBwLSR7Yn1gfTp7fSxydGw6dSx0aGVtZTpBLGRlbGF5OmMsaXNSdW5uaW5nOm8saXNJbjpfLGNsb3NlVG9hc3Q6eCxoaWRlOnYsdHlwZTpnLGNsYXNzTmFtZTpwLGNvbnRyb2xsZWRQcm9ncmVzczpkdCxwcm9ncmVzczpufHwwfSkpKX07dmFyIEs9KHQsbz0hMSk9Pih7ZW50ZXI6YFRvYXN0aWZ5LS1hbmltYXRlIFRvYXN0aWZ5X18ke3R9LWVudGVyYCxleGl0OmBUb2FzdGlmeS0tYW5pbWF0ZSBUb2FzdGlmeV9fJHt0fS1leGl0YCxhcHBlbmRQb3NpdGlvbjpvfSksbHQ9JChLKFwiYm91bmNlXCIsITApKSxtbz0kKEsoXCJzbGlkZVwiLCEwKSkscG89JChLKFwiem9vbVwiKSksdW89JChLKFwiZmxpcFwiKSk7dmFyIF9vPXtwb3NpdGlvbjpcInRvcC1yaWdodFwiLHRyYW5zaXRpb246bHQsYXV0b0Nsb3NlOjVlMyxjbG9zZUJ1dHRvbjohMCxwYXVzZU9uSG92ZXI6ITAscGF1c2VPbkZvY3VzTG9zczohMCxkcmFnZ2FibGU6XCJ0b3VjaFwiLGRyYWdnYWJsZVBlcmNlbnQ6ODAsZHJhZ2dhYmxlRGlyZWN0aW9uOlwieFwiLHJvbGU6XCJhbGVydFwiLHRoZW1lOlwibGlnaHRcIixcImFyaWEtbGFiZWxcIjpcIk5vdGlmaWNhdGlvbnMgQWx0K1RcIixob3RLZXlzOnQ9PnQuYWx0S2V5JiZ0LmNvZGU9PT1cIktleVRcIn07ZnVuY3Rpb24gTHQodCl7bGV0IG89ey4uLl9vLC4uLnR9LGU9dC5zdGFja2VkLFtyLHNdPWdvKCEwKSxsPVRvKG51bGwpLHtnZXRUb2FzdFRvUmVuZGVyOmEsaXNUb2FzdEFjdGl2ZTpkLGNvdW50OmN9PUl0KG8pLHtjbGFzc05hbWU6VCxzdHlsZTpnLHJ0bDp2LGNvbnRhaW5lcklkOngsaG90S2V5czpDfT1vO2Z1bmN0aW9uIFMoZil7bGV0IHA9RHQoXCJUb2FzdGlmeV9fdG9hc3QtY29udGFpbmVyXCIsYFRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLSR7Zn1gLHtbXCJUb2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ydGxcIl06dn0pO3JldHVybiBQKFQpP1Qoe3Bvc2l0aW9uOmYscnRsOnYsZGVmYXVsdENsYXNzTmFtZTpwfSk6RHQocCxCKFQpKX1mdW5jdGlvbiBFKCl7ZSYmKHMoITApLHkucGxheSgpKX1yZXR1cm4gT3QoKCk9Pnt2YXIgZjtpZihlKXtsZXQgcD1sLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW49XCJ0cnVlXCJdJyksYj0xMixpPShmPW8ucG9zaXRpb24pPT1udWxsP3ZvaWQgMDpmLmluY2x1ZGVzKFwidG9wXCIpLG49MCx1PTA7QXJyYXkuZnJvbShwKS5yZXZlcnNlKCkuZm9yRWFjaCgoaCxtKT0+e2xldCBfPWg7Xy5jbGFzc0xpc3QuYWRkKFwiVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkXCIpLG0+MCYmKF8uZGF0YXNldC5jb2xsYXBzZWQ9YCR7cn1gKSxfLmRhdGFzZXQucG9zfHwoXy5kYXRhc2V0LnBvcz1pP1widG9wXCI6XCJib3RcIik7bGV0IGs9bioocj8uMjoxKSsocj8wOmIqbSk7Xy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0teVwiLGAke2k/azprKi0xfXB4YCksXy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZ1wiLGAke2J9YCksXy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc1wiLGAkezEtKHI/dTowKX1gKSxuKz1fLm9mZnNldEhlaWdodCx1Kz0uMDI1fSl9fSxbcixjLGVdKSx5bygoKT0+e2Z1bmN0aW9uIGYocCl7dmFyIGk7bGV0IGI9bC5jdXJyZW50O0MocCkmJigoaT1iLnF1ZXJ5U2VsZWN0b3IoJ1t0YWJJbmRleD1cIjBcIl0nKSk9PW51bGx8fGkuZm9jdXMoKSxzKCExKSx5LnBhdXNlKCkpLHAua2V5PT09XCJFc2NhcGVcIiYmKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ9PT1ifHxiIT1udWxsJiZiLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSYmKHMoITApLHkucGxheSgpKX1yZXR1cm4gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixmKSwoKT0+e2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZil9fSxbQ10pLGN0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIse3JlZjpsLGNsYXNzTmFtZTpcIlRvYXN0aWZ5XCIsaWQ6eCxvbk1vdXNlRW50ZXI6KCk9PntlJiYocyghMSkseS5wYXVzZSgpKX0sb25Nb3VzZUxlYXZlOkUsXCJhcmlhLWxpdmVcIjpcInBvbGl0ZVwiLFwiYXJpYS1hdG9taWNcIjpcImZhbHNlXCIsXCJhcmlhLXJlbGV2YW50XCI6XCJhZGRpdGlvbnMgdGV4dFwiLFwiYXJpYS1sYWJlbFwiOm9bXCJhcmlhLWxhYmVsXCJdfSxhKChmLHApPT57bGV0IGI9cC5sZW5ndGg/ey4uLmd9OnsuLi5nLHBvaW50ZXJFdmVudHM6XCJub25lXCJ9O3JldHVybiBjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3RhYkluZGV4Oi0xLGNsYXNzTmFtZTpTKGYpLFwiZGF0YS1zdGFja2VkXCI6ZSxzdHlsZTpiLGtleTpgYy0ke2Z9YH0scC5tYXAoKHtjb250ZW50OmkscHJvcHM6bn0pPT5jdC5jcmVhdGVFbGVtZW50KHd0LHsuLi5uLHN0YWNrZWQ6ZSxjb2xsYXBzZUFsbDpFLGlzSW46ZChuLnRvYXN0SWQsbi5jb250YWluZXJJZCksa2V5OmB0LSR7bi5rZXl9YH0saSkpKX0pKX1leHBvcnR7bHQgYXMgQm91bmNlLHVvIGFzIEZsaXAsVyBhcyBJY29ucyxtbyBhcyBTbGlkZSxMdCBhcyBUb2FzdENvbnRhaW5lcixwbyBhcyBab29tLFogYXMgY29sbGFwc2VUb2FzdCwkIGFzIGNzc1RyYW5zaXRpb24seSBhcyB0b2FzdH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBsb2FkTW9kdWxlcyB9IGZyb20gXCJlc3JpLWxvYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBJTVN0YXRlLCBBbGxXaWRnZXRQcm9wcyB9IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBMb2FkaW5nIH0gZnJvbSBcImppbXUtdWlcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0LCBCb3VuY2UgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9ob29rcy91c2VMb2NhbGVcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvblRva2VuIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvZ2V0U2Vzc2lvblRva2VuXCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0aW9ucyB9IGZyb20gXCIuL3RyYW5zbGF0aW9uc1wiO1xyXG5pbXBvcnQgVGl0bGVXaXRoVG9vbHRpcCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9UaXRsZVdpdGhUb29sdGlwXCI7XHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPGFueT4pID0+IHtcclxuICBjb25zdCB7IHQgfSA9IHVzZUxvY2FsZSh0cmFuc2xhdGlvbnMpO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZFNlbnNvciA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5teVN0YXRlPy5zZWxlY3RlZFNlbnNvclxyXG4gICk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRJbWFnZXJpZXMgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUubXlTdGF0ZT8uc2VsZWN0ZWRJbWFnZXNcclxuICApO1xyXG4gIGNvbnN0IGdlb3Byb2Nlc3MgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElNU3RhdGUpID0+IHN0YXRlLm15U3RhdGU/Lmdlb3Byb2Nlc3MpO1xyXG5cclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzaG93QnVmZmVyLCBzZXRTaG93QnVmZmVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtsb2FkaW5nSW5jZW5kaW8sIHNldExvYWRpbmdJbmNlbmRpb10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdJbnVuZGFjaW9uLCBzZXRMb2FkaW5nSW51bmRhY2lvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUG9seWdvbiwgc2V0U2VsZWN0ZWRQb2x5Z29uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nQnVmZmVyLCBzZXRMb2FkaW5nQnVmZmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYXJlYUJ1ZmZlciwgc2V0QXJlYUJ1ZmZlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYnVmZmVyRGlzdGFuY2UsIHNldEJ1ZmZlckRpc3RhbmNlXSA9IHVzZVN0YXRlKDEpOyAvLyBFc3RhZG8gcGFyYSBlbCBpbnB1dFxyXG4gIGNvbnN0IFtidWZmZXIsIHNldEJ1ZmZlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12KSA9PiB7XHJcbiAgICBzZXRKaW11TWFwVmlldyhqbXYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1ZmZlckNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAodmFsdWUgPiAxMDApIHtcclxuICAgICAgdG9hc3Qud2FybmluZyh0KFwibWluS21XYXJuaW5nXCIpLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEJ1ZmZlckRpc3RhbmNlKDEwMCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgdG9hc3Qud2FybmluZyh0KFwibWF4S21XYXJuaW5nXCIpLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEJ1ZmZlckRpc3RhbmNlKDEpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRCdWZmZXJEaXN0YW5jZSh2YWx1ZSk7IC8vIEFjdHVhbGl6YSBlbCBlc3RhZG8gY29uIGVsIG51ZXZvIHZhbG9yIGRlbCBpbnB1dFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhcmdhckdlb21ldHJpYUVuTWFwYSA9IGFzeW5jIChnZW9qc29uLCBwcm9jZXNvKSA9PiB7XHJcbiAgICBpZiAoIWppbXVNYXBWaWV3KSByZXR1cm47XHJcbiAgICBpZiAoIWdlb2pzb24pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgcmVjaWJpw7MgdW4gbm9tYnJlIGRlIGFyY2hpdm8gdsOhbGlkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgW0ZlYXR1cmVMYXllciwgR3JhcGhpYywgUG9seWdvbiwgU2ltcGxlRmlsbFN5bWJvbCwgZ2VvbWV0cnlFbmdpbmVdID1cclxuICAgICAgICBhd2FpdCBsb2FkTW9kdWxlcyhbXHJcbiAgICAgICAgICBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiLFxyXG4gICAgICAgICAgXCJlc3JpL0dyYXBoaWNcIixcclxuICAgICAgICAgIFwiZXNyaS9nZW9tZXRyeS9Qb2x5Z29uXCIsXHJcbiAgICAgICAgICBcImVzcmkvc3ltYm9scy9TaW1wbGVGaWxsU3ltYm9sXCIsXHJcbiAgICAgICAgICBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIixcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgIHZhciBub21icmVDYXBhO1xyXG5cclxuICAgICAgaWYgKHByb2Nlc28gPT0gMikge1xyXG4gICAgICAgIG5vbWJyZUNhcGEgPSB0KFwiZmlyZUxheWVyXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc28gPT0gMykge1xyXG4gICAgICAgIG5vbWJyZUNhcGEgPSB0KFwiZmxvb2RMYXllclwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgdGl0bGU6IG5vbWJyZUNhcGEsXHJcbiAgICAgICAgc291cmNlOiBbXSxcclxuICAgICAgICBvYmplY3RJZEZpZWxkOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICB7IG5hbWU6IFwiT0JKRUNUSURcIiwgYWxpYXM6IFwiT0JKRUNUSURcIiwgdHlwZTogXCJvaWRcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImFyZWFfbTJcIiwgYWxpYXM6IFwiw4FyZWEgKG3CsilcIiwgdHlwZTogXCJkb3VibGVcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImFyZWFfaGFcIiwgYWxpYXM6IFwiw4FyZWEgKGhhKVwiLCB0eXBlOiBcImRvdWJsZVwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiYXJlYV9rbTJcIiwgYWxpYXM6IFwiw4FyZWEgKGttwrIpXCIsIHR5cGU6IFwiZG91YmxlXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHJlbmRlcmVyOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZ3JhcGhpY3MgPSBbXTtcclxuICAgICAgbGV0IGdyYXBoaWNJbmRleCA9IDA7XHJcblxyXG4gICAgICBnZW9qc29uLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHtcclxuICAgICAgICBsZXQgZ2VvbWV0cmllcyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoZmVhdHVyZS5nZW9tZXRyeS50eXBlID09PSBcIlBvbHlnb25cIikge1xyXG4gICAgICAgICAgZ2VvbWV0cmllcy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgUG9seWdvbih7XHJcbiAgICAgICAgICAgICAgcmluZ3M6IGZlYXR1cmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXMsXHJcbiAgICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogamltdU1hcFZpZXcudmlldy5zcGF0aWFsUmVmZXJlbmNlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmUuZ2VvbWV0cnkudHlwZSA9PT0gXCJNdWx0aVBvbHlnb25cIikge1xyXG4gICAgICAgICAgZmVhdHVyZS5nZW9tZXRyeS5jb29yZGluYXRlcy5mb3JFYWNoKChwb2x5Z29uQ29vcmRpbmF0ZXMpID0+IHtcclxuICAgICAgICAgICAgZ2VvbWV0cmllcy5wdXNoKFxyXG4gICAgICAgICAgICAgIG5ldyBQb2x5Z29uKHtcclxuICAgICAgICAgICAgICAgIHJpbmdzOiBwb2x5Z29uQ29vcmRpbmF0ZXMsXHJcbiAgICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBqaW11TWFwVmlldy52aWV3LnNwYXRpYWxSZWZlcmVuY2UsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2VvbWV0cmllcy5mb3JFYWNoKChnZW9tZXRyeSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYXJlYU0yID0gZ2VvbWV0cnlFbmdpbmUuZ2VvZGVzaWNBcmVhKGdlb21ldHJ5LCBcInNxdWFyZS1tZXRlcnNcIik7XHJcbiAgICAgICAgICBjb25zdCBhcmVhSGEgPSBhcmVhTTIgLyAxMDAwMDtcclxuICAgICAgICAgIGNvbnN0IGFyZWFLbTIgPSBhcmVhTTIgLyAxXzAwMF8wMDA7XHJcblxyXG4gICAgICAgICAgZ3JhcGhpY3MucHVzaChcclxuICAgICAgICAgICAgbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgICAgIGdlb21ldHJ5OiBnZW9tZXRyeSxcclxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAgICAgICBPQkpFQ1RJRDogZ3JhcGhpY0luZGV4LFxyXG4gICAgICAgICAgICAgICAgYXJlYV9tMjogYXJlYU0yLFxyXG4gICAgICAgICAgICAgICAgYXJlYV9oYTogYXJlYUhhLFxyXG4gICAgICAgICAgICAgICAgYXJlYV9rbTI6IGFyZWFLbTIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBncmFwaGljSW5kZXgrKztcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmZWF0dXJlTGF5ZXIuc291cmNlID0gZ3JhcGhpY3M7XHJcblxyXG4gICAgICAvLyBBZ3JlZ2FyIGxhIGNhcGEgYWwgbWFwYSBzaSBubyBleGlzdGUgdW5hIGNvbiBlbCBtaXNtbyBub21icmVcclxuICAgICAgY29uc3QgZXhpc3RpbmdMYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmxheWVycy5maW5kKFxyXG4gICAgICAgIChsYXllcikgPT4gbGF5ZXIudGl0bGUgPT09IFwiUG9saWdvbm8gZGVzYXN0cmVcIlxyXG4gICAgICApO1xyXG4gICAgICBpZiAoZXhpc3RpbmdMYXllcikge1xyXG4gICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShleGlzdGluZ0xheWVyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGZlYXR1cmVMYXllcik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWwgY2FyZ2FyIGxhIGdlb21ldHLDrWEgZW4gZWwgbWFwYTpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluY2VuZGlvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ0luY2VuZGlvKHRydWUpO1xyXG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGltYWdlbjEgPSBzZWxlY3RlZEltYWdlcmllc1swXT8uT0JKRUNUSUQ7XHJcblxyXG4gICAgICAgIC8vIENvbnN0cnVpciBsYSBVUkwgY29uIGxvcyBwYXLDoW1ldHJvc1xyXG4gICAgICAgIGNvbnN0IHByb2Nlc28gPSAyO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gZ2V0U2Vzc2lvblRva2VuKCk7XHJcbiAgICAgICAgLy9EZXNhcnJvbGxvXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo1MDAwL2dldEZpcmVab25lYCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBvYmplY3RJZDogaW1hZ2VuMSxcclxuICAgICAgICAgICAgdXJsOiBzZWxlY3RlZFNlbnNvci51cmwsXHJcbiAgICAgICAgICAgIGdlb21ldHJ5OiBzZWxlY3RlZEltYWdlcmllc1swXT8uZ2VvbWV0cnksXHJcbiAgICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgYEVycm9yIGVuIGxhIHNvbGljaXR1ZDogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc2V0TG9hZGluZ0luY2VuZGlvKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VHZW9qc29uID0gcmVzcG9uc2VEYXRhLmdlb2pzb247XHJcblxyXG4gICAgICAgIGF3YWl0IGNhcmdhckdlb21ldHJpYUVuTWFwYShyZXNwb25zZUdlb2pzb24sIHByb2Nlc28pO1xyXG5cclxuICAgICAgICBzZXRMb2FkaW5nSW5jZW5kaW8oZmFsc2UpO1xyXG4gICAgICAgIHNldFNob3dCdWZmZXIodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IodChcImZpcmVFcnJvclwiKSwge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0TG9hZGluZ0luY2VuZGlvKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGludW5kYWNpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nSW51bmRhY2lvbih0cnVlKTtcclxuXHJcbiAgICBpZiAoIWppbXVNYXBWaWV3KSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgaW1hZ2VuMSA9IHNlbGVjdGVkSW1hZ2VyaWVzWzBdPy5PQkpFQ1RJRDtcclxuXHJcbiAgICAgIGlmIChpbWFnZW4xID09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGVuIGxhIGNhcmdhIGRlIGltYWdlbmVzOiAke2ltYWdlbjF9YCk7XHJcbiAgICAgICAgc2V0TG9hZGluZ0ludW5kYWNpb24oZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDb25zdHJ1aXIgbGEgVVJMIGNvbiBsb3MgcGFyw6FtZXRyb3NcclxuICAgICAgY29uc3QgcHJvY2VzbyA9IDM7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gZ2V0U2Vzc2lvblRva2VuKCk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvZ2V0Rmxvb2Rab25lYCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBvYmplY3RJZDogaW1hZ2VuMSxcclxuICAgICAgICAgIHVybDogc2VsZWN0ZWRTZW5zb3IudXJsLFxyXG4gICAgICAgICAgZ2VvbWV0cnk6IHNlbGVjdGVkSW1hZ2VyaWVzWzBdPy5nZW9tZXRyeSxcclxuICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgRXJyb3IgZW4gbGEgc29saWNpdHVkOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWBcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldExvYWRpbmdJbnVuZGFjaW9uKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZUdlb2pzb24gPSByZXNwb25zZURhdGEuZ2VvanNvbjtcclxuXHJcbiAgICAgIGF3YWl0IGNhcmdhckdlb21ldHJpYUVuTWFwYShyZXNwb25zZUdlb2pzb24sIHByb2Nlc28pO1xyXG4gICAgICBzZXRMb2FkaW5nSW51bmRhY2lvbihmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgdG9hc3QuZXJyb3IodChcImZsb29kRXJyb3JcIiksIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0TG9hZGluZ0ludW5kYWNpb24oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbmRCdWZmZXJHZW9tZXRyeSA9ICgpID0+IHtcclxuICAgIGlmICghamltdU1hcFZpZXcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1ZmZlckdyYXBoaWMgPSBqaW11TWFwVmlldy52aWV3LmdyYXBoaWNzLml0ZW1zLmZpbmQoXHJcbiAgICAgIChncmFwaGljKSA9PiBncmFwaGljLmF0dHJpYnV0ZXMgJiYgZ3JhcGhpYy5hdHRyaWJ1dGVzLmlkID09PSBcImJ1ZmZlcl9ESVwiXHJcbiAgICApO1xyXG4gICAgaWYgKCFidWZmZXJHcmFwaGljKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJldHVybiBidWZmZXJHcmFwaGljLmdlb21ldHJ5O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXJ0REEgPSBhc3luYyAocmllc2dvOiBTdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChzZWxlY3RlZEltYWdlcmllcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHRvYXN0Lndhcm5pbmcoXHJcbiAgICAgICAgICBgRGViZSBzZWxlY2Npb25hciB1bmEgaW1hZ2VuIGFudGVzIGRlIGVqZWN1dGFyIGVzdGUgcHJvY2Vzb2AsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHNldExvYWRpbmdJbmNlbmRpbyhmYWxzZSk7XHJcbiAgICAgICAgc2V0TG9hZGluZ0ludW5kYWNpb24oZmFsc2UpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgICAgIC8vIEFncmVnYXIgY2FwYSBkZSBsw61taXRlIHVyYmFubyBhbCBtYXBhXHJcbiAgICAgICAgICBjb25zdCBbRmVhdHVyZUxheWVyXSA9IGF3YWl0IGxvYWRNb2R1bGVzKFtcclxuICAgICAgICAgICAgXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIixcclxuICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgIGxldCB1cmJhbkxpbWl0TGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChcclxuICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci5pZCA9PT0gXCJ1cmJhbkxpbWl0TGF5ZXJcIlxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAoIXVyYmFuTGltaXRMYXllcikge1xyXG4gICAgICAgICAgICB1cmJhbkxpbWl0TGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgICAgICAgICBpZDogXCJ1cmJhbkxpbWl0TGF5ZXJcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJMw61taXRlIHVyYmFubyBQbGFuIFJlZ3VsYWRvciBDb211bmFsXCIsXHJcbiAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vZ2lzY2l2LnNuc2F0LmNsL3ZlY3Rvci9yZXN0L3NlcnZpY2VzL0NvbWFuZG9fQ29udHJvbC9Mw61taXRlX3VyYmFub19QbGFuX1JlZ3VsYWRvcl9Db211bmFsL0ZlYXR1cmVTZXJ2ZXIvMTE3XCIsXHJcbiAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmFkZCh1cmJhbkxpbWl0TGF5ZXIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXJiYW5MaW1pdExheWVyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxldCBkYWdlclpvbmVMYXllcjEgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChcclxuICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci50aXRsZSA9PT0gdChcImZpcmVMYXllclwiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGxldCBkYWdlclpvbmVMYXllcjIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChcclxuICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci50aXRsZSA9PT0gdChcImZsb29kTGF5ZXJcIilcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgaWYgKCFkYWdlclpvbmVMYXllcjEgJiYgcmllc2dvID09PSBcImluY2VuZGlvXCIpIHtcclxuICAgICAgICAgICAgYXdhaXQgaW5jZW5kaW8oKTtcclxuICAgICAgICAgICAgZGFnZXJab25lTGF5ZXIxID0gamltdU1hcFZpZXcudmlldy5tYXAubGF5ZXJzLmZpbmQoXHJcbiAgICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci50aXRsZSA9PT0gdChcImZpcmVMYXllclwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFkYWdlclpvbmVMYXllcjIgJiYgcmllc2dvID09PSBcImludW5kYWNpb25cIikge1xyXG4gICAgICAgICAgICBhd2FpdCBpbnVuZGFjaW9uKCk7XHJcbiAgICAgICAgICAgIGRhZ2VyWm9uZUxheWVyMiA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmxheWVycy5maW5kKFxyXG4gICAgICAgICAgICAgIChsYXllcikgPT4gbGF5ZXIudGl0bGUgPT09IHQoXCJmbG9vZExheWVyXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKChqaW11TWFwVmlldyAmJiBkYWdlclpvbmVMYXllcjEpIHx8IGRhZ2VyWm9uZUxheWVyMikge1xyXG4gICAgICAgICAgICBpZiAoZGFnZXJab25lTGF5ZXIxKSB7XHJcbiAgICAgICAgICAgICAgY2FwYVRlbXBvcmFsKGRhZ2VyWm9uZUxheWVyMSwgcmllc2dvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGFnZXJab25lTGF5ZXIyKSB7XHJcbiAgICAgICAgICAgICAgY2FwYVRlbXBvcmFsKGRhZ2VyWm9uZUxheWVyMiwgcmllc2dvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcImppbXVNYXBWaWV3IG8gY2FwYSBubyBlbmNvbnRyYWRhLlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjYXBhVGVtcG9yYWwgPSBhc3luYyAoZGFnZXJab25lTGF5ZXIsIHJpZXNnbzogU3RyaW5nKSA9PiB7XHJcbiAgICBzZXRTaG93QnVmZmVyKHRydWUpO1xyXG4gICAgY29uc3QgW1NrZXRjaCwgR3JhcGhpY3NMYXllciwgU2ltcGxlRmlsbFN5bWJvbF0gPSBhd2FpdCBsb2FkTW9kdWxlcyhbXHJcbiAgICAgIFwiZXNyaS93aWRnZXRzL1NrZXRjaFwiLFxyXG4gICAgICBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIixcclxuICAgICAgXCJlc3JpL3N5bWJvbHMvU2ltcGxlRmlsbFN5bWJvbFwiLFxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gQ3JlYXIgdW5hIGNhcGEgZ3LDoWZpY2EgdGVtcG9yYWxcclxuICAgIGNvbnN0IHRlbXBHcmFwaGljc0xheWVyID0gbmV3IEdyYXBoaWNzTGF5ZXIoe1xyXG4gICAgICBpZDogXCJ0ZW1wR3JhcGhpY3NMYXllclwiLFxyXG4gICAgICB0aXRsZTogdChcImJ1ZmZlckxheWVyXCIpLFxyXG4gICAgfSk7XHJcbiAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQodGVtcEdyYXBoaWNzTGF5ZXIpO1xyXG5cclxuICAgIC8vIE9idGVuZXIgbGFzIGVudGlkYWRlcyBkZSBsYSBjYXBhIG9yaWdpbmFsIHkgY29waWFybGFzIGEgbGEgY2FwYSB0ZW1wb3JhbFxyXG4gICAgY29uc3QgcXVlcnkgPSBkYWdlclpvbmVMYXllci5jcmVhdGVRdWVyeSgpO1xyXG4gICAgcXVlcnkud2hlcmUgPSBcIjE9MVwiOyAvLyBTZWxlY2Npb25hciB0b2RvcyBsb3MgZWxlbWVudG9zXHJcbiAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWU7XHJcbiAgICBxdWVyeS5vdXRTcGF0aWFsUmVmZXJlbmNlID0gamltdU1hcFZpZXcudmlldy5zcGF0aWFsUmVmZXJlbmNlO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBkYWdlclpvbmVMYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcclxuICAgIHJlc3VsdHMuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4ge1xyXG4gICAgICBjb25zdCBncmFwaGljID0gZmVhdHVyZS5jbG9uZSgpO1xyXG4gICAgICBncmFwaGljLnN5bWJvbCA9IG5ldyBTaW1wbGVGaWxsU3ltYm9sKHtcclxuICAgICAgICBjb2xvcjogcmllc2dvID09PSBcImluY2VuZGlvXCIgPyBbMjU1LCAyNTUsIDAsIDAuOF0gOiBbMCwgMCwgMjU1LCAwLjVdLFxyXG4gICAgICAgIG91dGxpbmU6IG51bGwsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGVtcEdyYXBoaWNzTGF5ZXIuYWRkKGdyYXBoaWMpO1xyXG4gICAgICB0ZW1wR3JhcGhpY3NMYXllci5saXN0TW9kZSA9IFwiaGlkZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ29uZmlndXJhciBlbCBTa2V0Y2ggcGFyYSB0cmFiYWphciBjb24gbGEgY2FwYSB0ZW1wb3JhbFxyXG4gICAgY29uc3Qgc2tldGNoRWRpdCA9IG5ldyBTa2V0Y2goe1xyXG4gICAgICB2aWV3OiBqaW11TWFwVmlldy52aWV3LFxyXG4gICAgICBsYXllcjogdGVtcEdyYXBoaWNzTGF5ZXIsXHJcbiAgICAgIGNyZWF0aW9uTW9kZTogXCJ1cGRhdGVcIixcclxuICAgICAgYXZhaWxhYmxlQ3JlYXRlVG9vbHM6IFtcIlwiXSxcclxuICAgICAgc2NhbGU6IFwibVwiLFxyXG4gICAgICB2aXNpYmxlRWxlbWVudHM6IHtcclxuICAgICAgICBjcmVhdGVUb29sczogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0aW9uVG9vbHM6IGZhbHNlLFxyXG4gICAgICAgIHNldHRpbmdzTWVudTogZmFsc2UsXHJcbiAgICAgICAgdW5kb1JlZG9NZW51OiBmYWxzZSxcclxuICAgICAgICBkdXBsaWNhdGVCdXR0b246IGZhbHNlLFxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRVcGRhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgZW5hYmxlU2NhbGluZzogdHJ1ZSxcclxuICAgICAgICBlbmFibGVSb3RhdGlvbjogdHJ1ZSxcclxuICAgICAgICBtdWx0aXBsZVNlbGVjdGlvbkVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHRvb2w6IFwibW92ZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBDb25maWd1cmFyIGVsIGNvbG9yIGRlbCBvdXRsaW5lIGRlIHNlbGVjY2nDs24gZW4gY3lhblxyXG4gICAgICB1cGRhdGVPbkdyYXBoaWNDbGljazogdHJ1ZSxcclxuICAgICAgc25hcHBpbmdPcHRpb25zOiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRhaW5lcjogXCJteVNrZXRjaENvbnRhaW5lclB1bnRvXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQZXJzb25hbGl6YXIgZWwgdGV4dG8gZGVsIGxhYmVsIGRlIHNlbGVjY2nDs24gZGVzcHXDqXMgZGUgcXVlIGVsIFNrZXRjaCBzZSByZW5kZXJpY2VcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBza2V0Y2hDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2tldGNoQ29udGFpbmVyUHVudG9cIik7XHJcblxyXG4gICAgICBpZiAoc2tldGNoQ29udGFpbmVyKSB7XHJcbiAgICAgICAgLy8gRnVuY2nDs24gcGFyYSByZWVtcGxhemFyIGVsIHRleHRvIGVuIHRvZG9zIGxvcyBub2Rvc1xyXG4gICAgICAgIGNvbnN0IHJlcGxhY2VTZWxlY3Rpb25UZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgLy8gQnVzY2FyIHRvZG9zIGxvcyBlbGVtZW50b3NcclxuICAgICAgICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gc2tldGNoQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpO1xyXG4gICAgICAgICAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgLy8gQnVzY2FyIG5vZG9zIGRlIHRleHRvIGRpcmVjdG9zXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQ/LmluY2x1ZGVzKFwiU2VsZWNjacOzblwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50Py5pbmNsdWRlcyhcIlNlbGVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBub2RlLnRleHRDb250ZW50LnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgL1NlbGVjY2nDs258U2VsZWN0aW9uLyxcclxuICAgICAgICAgICAgICAgICAgICBcIlBvbMOtZ29ub3Mgc2VsZWNjaW9uYWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIEJ1c2NhciBwb3Igc2VsZWN0b3JlcyBlc3BlY8OtZmljb3MgZGVsIFNrZXRjaFxyXG4gICAgICAgICAgY29uc3QgbGFiZWxzID0gc2tldGNoQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgIFwiLmVzcmktc2tldGNoX19wYW5lbC1sYWJlbCwgLmVzcmktc2tldGNoX19zZWN0aW9uLWxhYmVsLCAuZXNyaS1za2V0Y2hfX2hlYWRpbmctdGV4dFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbGFiZWxzLmZvckVhY2goKGxhYmVsOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQ/LmluY2x1ZGVzKFwiU2VsZWNjacOzblwiKSB8fFxyXG4gICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50Py5pbmNsdWRlcyhcIlNlbGVjdGlvblwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsLnRleHRDb250ZW50LnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAvU2VsZWNjacOzbnxTZWxlY3Rpb24vLFxyXG4gICAgICAgICAgICAgICAgXCJQb2zDrWdvbm9zIHNlbGVjY2lvbmFkb3NcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEVqZWN1dGFyIGlubWVkaWF0YW1lbnRlXHJcbiAgICAgICAgcmVwbGFjZVNlbGVjdGlvblRleHQoKTtcclxuXHJcbiAgICAgICAgLy8gT2JzZXJ2YXIgY2FtYmlvc1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgcmVwbGFjZVNlbGVjdGlvblRleHQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNrZXRjaENvbnRhaW5lciwge1xyXG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwMCk7XHJcblxyXG4gICAgLy8gQXBsaWNhciBjb2xvciBjeWFuIGFsIG91dGxpbmUgZGUgc2VsZWNjacOzbiBkZWwgU2tldGNoXHJcbiAgICAvLyBBY2NlZGVyIGEgbGEgY2FwYSBpbnRlcm5hIGRlIGdyw6FmaWNvcyBkZWwgU2tldGNoIHBhcmEgbW9kaWZpY2FyIGxvcyBzw61tYm9sb3NcclxuXHJcbiAgICAvLyBDYXB0dXJhciBlbCBwb2zDrWdvbm8gc2VsZWNjaW9uYWRvXHJcbiAgICBza2V0Y2hFZGl0Lm9uKFwidXBkYXRlXCIsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuc3RhdGUgPT09IFwiYWN0aXZlXCIgfHwgZXZlbnQuc3RhdGUgPT09IFwic3RhcnRcIikge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGV2ZW50LmdyYXBoaWNzICYmXHJcbiAgICAgICAgICBldmVudC5ncmFwaGljc1swXS5nZW9tZXRyeS50eXBlID09PSBcInBvbHlnb25cIiAvLyBWZXJpZmljYXIgcXVlIGVzIHVuIHBvbMOtZ29ub1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY29uc3QgcG9seWdvbkdlb21ldHJ5ID0gZXZlbnQuZ3JhcGhpY3NbMF0uZ2VvbWV0cnk7XHJcblxyXG4gICAgICAgICAgc2V0U2VsZWN0ZWRQb2x5Z29uKHBvbHlnb25HZW9tZXRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlamVjdXRhckJ1ZmZlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghc2VsZWN0ZWRQb2x5Z29uKSB7XHJcbiAgICAgIHRvYXN0Lndhcm5pbmcodChcImJ1ZmZlcldhcm5pbmdcIiksIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvYWRpbmdCdWZmZXIodHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgW2dlb21ldHJ5RW5naW5lLCBHcmFwaGljXSA9IGF3YWl0IGxvYWRNb2R1bGVzKFtcclxuICAgICAgICBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIixcclxuICAgICAgICBcImVzcmkvR3JhcGhpY1wiLFxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIC8vIENvbnZlcnRpciBlbCB2YWxvciBkZWwgaW5wdXQgYSBuw7ptZXJvIChkaXN0YW5jaWEgZGVsIGJ1ZmZlcilcclxuICAgICAgY29uc3QgYnVmZmVyRGlzdGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICBcImlucHV0QnVmZmVyXCJcclxuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBjb25zdCBkaXN0YW5jZUttID0gcGFyc2VGbG9hdChidWZmZXJEaXN0YW5jZS52YWx1ZSk7XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlTWV0ZXJzID0gZGlzdGFuY2VLbSAqIDEwMDA7XHJcblxyXG4gICAgICAvL1NlIGVsaW1pbmFyIGVsIGJ1ZmZlciBhbnRlcmlvclxyXG4gICAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlldztcclxuICAgICAgdmlldy5ncmFwaGljcy5pdGVtc1xyXG4gICAgICAgIC5maWx0ZXIoKGcpID0+IGcuYXR0cmlidXRlcz8uaWQgPT09IFwiYnVmZmVyX0RJXCIpXHJcbiAgICAgICAgLmZvckVhY2goKGcpID0+IHZpZXcuZ3JhcGhpY3MucmVtb3ZlKGcpKTtcclxuXHJcbiAgICAgIC8vIEdlbmVyYXIgZWwgYnVmZmVyIGNvbiBsYSBkaXN0YW5jaWEgaW5ncmVzYWRhXHJcbiAgICAgIGNvbnN0IGJ1ZmZlckdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKFxyXG4gICAgICAgIHNlbGVjdGVkUG9seWdvbixcclxuICAgICAgICBkaXN0YW5jZU1ldGVycyxcclxuICAgICAgICBcIm1ldGVyc1wiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBDYWxjdWxhciDDoXJlYSBkZWwgYnVmZmVyIGVuIG3CslxyXG4gICAgICBjb25zdCBhcmVhQnVmZmVyID0gZ2VvbWV0cnlFbmdpbmUuZ2VvZGVzaWNBcmVhKFxyXG4gICAgICAgIGJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgICAgIFwic3F1YXJlLW1ldGVyc1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHNldEFyZWFCdWZmZXIoYXJlYUJ1ZmZlcik7XHJcblxyXG4gICAgICAvLyBDcmVhciB1biBncsOhZmljbyBwYXJhIGVsIGJ1ZmZlciB5IGFncmVnYXJsbyBhbCBtYXBhXHJcbiAgICAgIGNvbnN0IGJ1ZmZlckdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7XHJcbiAgICAgICAgZ2VvbWV0cnk6IGJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgICAgIHN5bWJvbDoge1xyXG4gICAgICAgICAgdHlwZTogXCJzaW1wbGUtZmlsbFwiLFxyXG4gICAgICAgICAgY29sb3I6IFsyNTUsIDAsIDAsIDAuMV0sXHJcbiAgICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBbMjU1LCAwLCAwXSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgaWQ6IFwiYnVmZmVyX0RJXCIsIC8vIElEIMO6bmljbyBiYXNhZG8gZW4gdGltZXN0YW1wXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRCdWZmZXIoYnVmZmVyR3JhcGhpYyk7XHJcblxyXG4gICAgICB2aWV3LmdyYXBoaWNzLmFkZChidWZmZXJHcmFwaGljKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBnZW5lcmFyIGVsIGJ1ZmZlcjpcIiwgZXJyb3IpO1xyXG4gICAgICB0b2FzdC5lcnJvcih0KFwiYnVmZmVyRXJyb3JcIiksIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICB9KTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmdCdWZmZXIoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRpYnVqYXJMaW5lYXNQcm94aW1pZGFkID0gYXN5bmMgKFxyXG4gICAgdG91Y2hpbmdQb2x5Z29uLFxyXG4gICAgZ2VvbWV0cmllc0luQnVmZmVyXHJcbiAgKSA9PiB7XHJcbiAgICBpZiAoIXRvdWNoaW5nUG9seWdvbiB8fCBnZW9tZXRyaWVzSW5CdWZmZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIk5vIGhheSBnZW9tZXRyw61hcyBwYXJhIGNvbmVjdGFyLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtnZW9tZXRyeUVuZ2luZSwgUG9seWxpbmUsIEdyYXBoaWMsIEdyYXBoaWNzTGF5ZXJdID1cclxuICAgICAgYXdhaXQgbG9hZE1vZHVsZXMoW1xyXG4gICAgICAgIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiLFxyXG4gICAgICAgIFwiZXNyaS9nZW9tZXRyeS9Qb2x5bGluZVwiLFxyXG4gICAgICAgIFwiZXNyaS9HcmFwaGljXCIsXHJcbiAgICAgICAgXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCIsXHJcbiAgICAgIF0pO1xyXG5cclxuICAgIC8vIENyZWFyIG8gbGltcGlhciBsYSBjYXBhIGRlIGzDrW5lYXMgZGUgcHJveGltaWRhZFxyXG4gICAgbGV0IGxpbmVMYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmZpbmRMYXllckJ5SWQoXCJwcm94aW1pdHlMaW5lc0xheWVyXCIpO1xyXG4gICAgaWYgKCFsaW5lTGF5ZXIpIHtcclxuICAgICAgbGluZUxheWVyID0gbmV3IEdyYXBoaWNzTGF5ZXIoe1xyXG4gICAgICAgIGlkOiBcInByb3hpbWl0eUxpbmVzTGF5ZXJcIixcclxuICAgICAgICB0aXRsZTogdChcInByb3hpbWl0eUxheWVyXCIpLFxyXG4gICAgICB9KTtcclxuICAgICAgamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGxpbmVMYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT2J0ZW5lciBjZW50cm9pZGUgZGVsIHBvbMOtZ29ubyBjZW50cmFsXHJcbiAgICBjb25zdCBjZW50cm9pZGUgPSB0b3VjaGluZ1BvbHlnb24uZ2VvbWV0cnkuY2VudHJvaWQ7XHJcblxyXG4gICAgLy8gRGlidWphciB1bmEgbMOtbmVhIGRlc2RlIGVsIGNlbnRyb2lkZSBhIGNhZGEgZ2VvbWV0csOtYSBlbiBnZW9tZXRyaWVzSW5CdWZmZXJcclxuXHJcbiAgICBnZW9tZXRyaWVzSW5CdWZmZXIuZm9yRWFjaCgoZ2VvbWV0cnkpID0+IHtcclxuICAgICAgbGV0IGRlc3Rpbm87XHJcblxyXG4gICAgICBpZiAoZ2VvbWV0cnkuY2VudHJvaWQpIHtcclxuICAgICAgICBkZXN0aW5vID0gZ2VvbWV0cnkuY2VudHJvaWQ7IC8vIFNpIGxhIGdlb21ldHLDrWEgdGllbmUgY2VudHJvaWRlLCB1c2FybG9cclxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeS5leHRlbnQpIHtcclxuICAgICAgICBkZXN0aW5vID0gZ2VvbWV0cnkuZXh0ZW50LmNlbnRlcjsgLy8gU2kgdGllbmUgYGV4dGVudGAsIHVzYXIgc3UgY2VudHJvXHJcbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkudHlwZSA9PT0gXCJwb2ludFwiKSB7XHJcbiAgICAgICAgZGVzdGlubyA9IGdlb21ldHJ5OyAvLyBTaSBlcyB1biBwdW50bywgdXNhcmxvIGRpcmVjdGFtZW50ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIkdlb21ldHLDrWEgc2luIGNlbnRyb2lkZSBuaSBleHRlbnQsIGlnbm9yYW5kbzpcIiwgZ2VvbWV0cnkpO1xyXG4gICAgICAgIHJldHVybjsgLy8gSWdub3JhciBsYSBnZW9tZXRyw61hIHNpIG5vIHRpZW5lIGNlbnRyb2lkZSwgZXh0ZW50IG5pIGVzIHVuIHB1bnRvXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGxpbmVHZW9tZXRyeSA9IG5ldyBQb2x5bGluZSh7XHJcbiAgICAgICAgcGF0aHM6IFtcclxuICAgICAgICAgIFtjZW50cm9pZGUueCwgY2VudHJvaWRlLnldLFxyXG4gICAgICAgICAgW2Rlc3Rpbm8ueCwgZGVzdGluby55XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IGppbXVNYXBWaWV3LnZpZXcuc3BhdGlhbFJlZmVyZW5jZSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkaXN0YW5jZU1ldGVycyA9IGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljTGVuZ3RoKFxyXG4gICAgICAgIGxpbmVHZW9tZXRyeSxcclxuICAgICAgICBcIm1ldGVyc1wiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlS2lsb21ldGVycyA9IGRpc3RhbmNlTWV0ZXJzIC8gMTAwMDtcclxuXHJcbiAgICAgIGNvbnN0IGxpbmVHcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgIGdlb21ldHJ5OiBsaW5lR2VvbWV0cnksXHJcbiAgICAgICAgc3ltYm9sOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInNpbXBsZS1saW5lXCIsXHJcbiAgICAgICAgICBjb2xvcjogWzAsIDAsIDI1NV0sIC8vIEF6dWxcclxuICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgZGlzdGFuY2VfbTogZGlzdGFuY2VNZXRlcnMudG9GaXhlZCgyKSxcclxuICAgICAgICAgIGRpc3RhbmNlX2ttOiBkaXN0YW5jZUtpbG9tZXRlcnMudG9GaXhlZCgyKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvcHVwVGVtcGxhdGU6IHtcclxuICAgICAgICAgIHRpdGxlOiB0KFwicHJveGltaXR5TGF5ZXJcIiksXHJcbiAgICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICBcIjxiPk10czo8L2I+XCIgK1xyXG4gICAgICAgICAgICBkaXN0YW5jZU1ldGVycy50b0ZpeGVkKDIpICtcclxuICAgICAgICAgICAgXCJtPGJyPjxiPkttczo8L2I+IFwiICtcclxuICAgICAgICAgICAgZGlzdGFuY2VLaWxvbWV0ZXJzLnRvRml4ZWQoMikgK1xyXG4gICAgICAgICAgICBcIiBrbVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGluZUxheWVyLmFkZChsaW5lR3JhcGhpYyk7XHJcbiAgICAgIGxpbmVMYXllci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgbGluZUxheWVyLmxpc3RNb2RlID0gXCJzaG93XCI7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhcHBseVJhc3RlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgIGNvbnN0IGJ1ZmZlckdlb21ldHJ5ID0gZmluZEJ1ZmZlckdlb21ldHJ5KCk7XHJcblxyXG4gICAgICBpZiAoIWJ1ZmZlckdlb21ldHJ5KSB7XHJcbiAgICAgICAgdG9hc3Qud2FybmluZyhcIk5vIHNlIGVuY29udHLDsyBsYSBnZW9tZXRyw61hIGRlbCBidWZmZXJcIiwge1xyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBbZ2VvbWV0cnlFbmdpbmVdID0gYXdhaXQgbG9hZE1vZHVsZXMoW1xyXG4gICAgICAgIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiLFxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGNvbnN0IHRlbXBHcmFwaGljc0xheWVyID1cclxuICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKFwidGVtcEdyYXBoaWNzTGF5ZXJcIik7XHJcblxyXG4gICAgICBpZiAoIXRlbXBHcmFwaGljc0xheWVyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkxhIGNhcGEgJ3RlbXBHcmFwaGljc0xheWVyJyBubyBleGlzdGUuXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdG91Y2hpbmdQb2x5Z29uID0gdGVtcEdyYXBoaWNzTGF5ZXIuZ3JhcGhpY3MuaXRlbXMuZmluZChcclxuICAgICAgICAoZ3JhcGhpYykgPT5cclxuICAgICAgICAgIGdyYXBoaWMuZ2VvbWV0cnkudHlwZSA9PT0gXCJwb2x5Z29uXCIgJiYgLy8gU29sbyBwb2zDrWdvbm9zXHJcbiAgICAgICAgICBnZW9tZXRyeUVuZ2luZS5pbnRlcnNlY3RzKGdyYXBoaWMuZ2VvbWV0cnksIHNlbGVjdGVkUG9seWdvbikgLy8gVmVyaWZpY2FyIGludGVyc2VjY2nDs25cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICghdG91Y2hpbmdQb2x5Z29uKSB7XHJcbiAgICAgICAgdG9hc3Qud2FybmluZyhcIk5vIHNlIGVuY29udHLDsyBlbCBwb2zDrWdvbm8gc2VsZWNjaW9uYWRvXCIsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQnVzY2FyIGxhIGNhcGEgZGUgbMOtbWl0ZSB1cmJhbm8gcXVlIHlhIGVzdMOhIGVuIGVsIG1hcGFcclxuICAgICAgbGV0IHVyYmFuTGltaXQgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChcclxuICAgICAgICAobGF5ZXIpID0+IGxheWVyLmlkID09PSBcInVyYmFuTGltaXRMYXllclwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoIXVyYmFuTGltaXQpIHtcclxuICAgICAgICB0b2FzdC5lcnJvcihcIk5vIHNlIGVuY29udHLDsyBsYSBjYXBhIGRlIGzDrW1pdGUgdXJiYW5vXCIsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdXJiYW5MaW1pdC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCBnZW9tZXRyaWVzSW5CdWZmZXIgPSBbXTtcclxuXHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gdXJiYW5MaW1pdC5jcmVhdGVRdWVyeSgpO1xyXG4gICAgICBxdWVyeS5nZW9tZXRyeSA9IGJ1ZmZlckdlb21ldHJ5OyAvLyBCdXNjYXIgZGVudHJvIGRlbCBidWZmZXJcclxuICAgICAgcXVlcnkuc3BhdGlhbFJlbGF0aW9uc2hpcCA9IFwiaW50ZXJzZWN0c1wiOyAvLyBJbnRlcnNlY2Npw7NuIGNvbiBlbCBidWZmZXJcclxuICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xyXG4gICAgICBxdWVyeS5vdXRTcGF0aWFsUmVmZXJlbmNlID0gamltdU1hcFZpZXcudmlldy5zcGF0aWFsUmVmZXJlbmNlO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBFc3BlcmFyIGEgcXVlIGxhIGNhcGEgZXN0w6kgY29tcGxldGFtZW50ZSBjYXJnYWRhXHJcbiAgICAgICAgYXdhaXQgdXJiYW5MaW1pdC5sb2FkKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCB1cmJhbkxpbWl0LnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0cy5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIHNlIGVuY29udHJhcm9uIGdlb21ldHLDrWFzIGRlbnRybyBkZWwgYnVmZmVyXCIpO1xyXG4gICAgICAgICAgdG9hc3Qud2FybmluZyhcclxuICAgICAgICAgICAgXCJObyBzZSBlbmNvbnRyYXJvbiBsw61taXRlcyB1cmJhbm9zIGVuIGVsIMOhcmVhIGRlbCBidWZmZXJcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3VsdHMuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4ge1xyXG4gICAgICAgICAgICBnZW9tZXRyaWVzSW5CdWZmZXIucHVzaChmZWF0dXJlLmdlb21ldHJ5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYFNlIGVuY29udHJhcm9uICR7Z2VvbWV0cmllc0luQnVmZmVyLmxlbmd0aH0gZ2VvbWV0csOtYXNgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgY29uc3VsdGFuZG8gbGEgY2FwYTogYCwgZXJyb3IpO1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiRXJyb3IgYWwgY29uc3VsdGFyIGVsIGzDrW1pdGUgdXJiYW5vXCIsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRvdWNoaW5nUG9seWdvbiAmJiBnZW9tZXRyaWVzSW5CdWZmZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGRpYnVqYXJMaW5lYXNQcm94aW1pZGFkKHRvdWNoaW5nUG9seWdvbiwgZ2VvbWV0cmllc0luQnVmZmVyKTtcclxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyaWVzSW5CdWZmZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gWWEgc2UgbW9zdHLDsyBlbCB3YXJuaW5nIGFycmliYVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKHQoXCJ1cmJhbkxpbWl0c0Vycm9yXCIpLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIDwhLS0tLS0tLS0gSGVscGVycyAtLS0tLS0tLS0tLS0tPlxyXG4gIC8vTGltcGlhIGxhcyBjYXBhcyBnZW5lcmFkYXMgc2kgc2UgY2FtYmlhIGxhcyBpbWFnZW5lcyBzZWxlY2Npb25hZGFzXHJcbiAgY29uc3QgY2xlYW5MYXllcnMgPSAodGl0bGU6IFN0cmluZykgPT4ge1xyXG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgIGNvbnN0IGxheWVyID0gamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZpbmQoXHJcbiAgICAgICAgKGxheWVyKSA9PiBsYXllci50aXRsZSA9PSB0aXRsZVxyXG4gICAgICApO1xyXG4gICAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgICAvLyBPY3VsdGEgdG9kYXMgbGFzIGNhcGFzIGRlIHNlbnNvcmVzIHBvciBkZWZlY3RvXHJcbiAgICAgICAgbGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIEVzdG8gb2N1bHRhIGxhIGNhcGEgZGVsIHdpZGdldCBkZSBjYXBhcyAoTGF5ZXJMaXN0KVxyXG4gICAgICAgIGxheWVyLmxpc3RNb2RlID0gXCJoaWRlXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbW92ZUxheWVyID0gKHRpdGxlOiBTdHJpbmcpID0+IHtcclxuICAgIGlmIChqaW11TWFwVmlldykge1xyXG4gICAgICBjb25zdCBsYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5maW5kKFxyXG4gICAgICAgIChsYXllcikgPT4gbGF5ZXIudGl0bGUgPT0gdGl0bGVcclxuICAgICAgKTtcclxuICAgICAgaWYgKGxheWVyKSB7XHJcbiAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGxheWVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUxheWVyQnlJZCA9IChpZDogU3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgY29uc3QgbGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZmluZChcclxuICAgICAgICAobGF5ZXIpID0+IGxheWVyLmlkID09IGlkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShsYXllcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVtb3ZlTGF5ZXIoXCJ0ZW1wR3JhcGhpY3NMYXllclwiKTtcclxuICAgIHJlbW92ZUxheWVyKHQoXCJmaXJlTGF5ZXJcIikpO1xyXG4gICAgcmVtb3ZlTGF5ZXIodChcImZsb29kTGF5ZXJcIikpO1xyXG4gICAgcmVtb3ZlTGF5ZXIodChcImJ1ZmZlckxheWVyXCIpKTtcclxuICAgIHJlbW92ZUxheWVyKHQoXCJwcm94aW1pdHlMYXllclwiKSk7XHJcbiAgICByZW1vdmVMYXllckJ5SWQoXCJ1cmJhbkxpbWl0TGF5ZXJcIik7IC8vIEVsaW1pbmFyIGxhIGNhcGEgZGUgbMOtbWl0ZSB1cmJhbm9cclxuICAgIHNldFNob3dCdWZmZXIoZmFsc2UpO1xyXG4gICAgc2V0U2VsZWN0ZWRQb2x5Z29uKG51bGwpO1xyXG4gIH0sIFtzZWxlY3RlZEltYWdlcmllcywgZ2VvcHJvY2Vzc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldCBwcm94aW1pdHktd2lkZ2V0XCI+XHJcbiAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgcHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XHJcbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJveGltaXR5LW1haW4tY29udGVudFwiPlxyXG4gICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8VGl0bGVXaXRoVG9vbHRpcFxyXG4gICAgICAgICAgICB0aXRsZT17dChcIndpZGdldExhYmVsXCIpfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17dChcImRlc2NyaXB0aW9uXCIpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJveGltaXR5LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAge3Nob3dCdWZmZXIgPT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHA+e3QoXCJkZXNjcmlwdGlvblwiKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3hpbWl0eS1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nSW5jZW5kaW8gPT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgdHlwZT1cIkRPTlVUXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc3RhcnREQShcImluY2VuZGlvXCIpfSBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KFwiaW5jZW5kaW9cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nSW51bmRhY2lvbiA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyB0eXBlPVwiRE9OVVRcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3RhcnREQShcImludW5kYWNpb25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KFwiaW51bmRhY2lvblwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7c2hvd0J1ZmZlciA9PT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm94aW1pdHktYnVmZmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibXlTa2V0Y2hDb250YWluZXJQdW50b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm94aW1pdHktYnVmZmVyLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+e3QoXCJidWZmZXJMYWJlbFwiKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJveGltaXR5LWJ1ZmZlci1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dEJ1ZmZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YnVmZmVyRGlzdGFuY2V9IC8vIFVzYSBlbCBlc3RhZG9cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVCdWZmZXJDaGFuZ2V9IC8vIE1hbmVqYSBsb3MgY2FtYmlvc1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+S208L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtlamVjdXRhckJ1ZmZlcn0gc2l6ZT1cInNtXCIgdHlwZT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dChcImdlbmVyYXJCdWZmZXJcIil9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXBwbHlSYXN0ZXJGdW5jdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KFwiZGlidWphckxpbmVhc1wiKX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=