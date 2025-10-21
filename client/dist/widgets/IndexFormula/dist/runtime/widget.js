System.register(["jimu-core/react","jimu-core","jimu-arcgis","esri/layers/ImageryLayer","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_ImageryLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_ImageryLayer__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_ImageryLayer__[key] = module[key];
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/IndexFormula/src/runtime/assets/style.css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/IndexFormula/src/runtime/assets/style.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.index-widget {
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: #052042;
  color: #fff;
}

.bands-main-widget-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: start;
  .bands-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    span {
      font-size: 14px;
      color: gray;
    }
  }
}

.bands-main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: start;
  justify-content: space-between;
}

.bands-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.band-selector-index {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  label {
    display: block;
    font-weight: 500;
  }
}

.band-inputs {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  width: 80%;
}

.band-inputs select {
  width: 80%;
  padding: 0.1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  background-color: white;
}

.input-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.1rem;
}

.control-group-input {
  width: 45%;
  margin: 0.1rem;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  input {
    width: 80%;
  }
}

.control-group select {
  width: 90%;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  background-color: white;
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.button-group {
  display: flex;
  width: 100%;
  justify-content: space-between;
  button {
    background-color: #1a5276;
    flex: 1;
    padding: 0.5rem 1rem;
    height: 2rem;
    margin: 1rem;
    transition: all 0.3s ease;
    &:hover {
      border: 1px solid #008ecc;
      background-color: #052042 !important;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
}

/* Utilidades */
.m-0 {
  margin: 0;
}

.p-0 {
  padding: 0;
}

.d-flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.align-items {
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/IndexFormula/src/runtime/assets/style.css","webpack://./../../../Nueva%20carpeta/ArcGISExperienceBuilder/client/your-extensions/widgets/IndexFormula/src/runtime/assets/style.css"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,WAAA;ACCF;;ADCA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EAEE;IACA,aAAA;IACA,8BAAA;IACA,mBAAA;IACA,WAAA;IACA;MACE,eAAA;MACA,WAAA;ICCF;EACF;AACF;;ADCA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,8BAAA;ACEF;;ADEA;EACE,aAAA;EACA,WAAA;EACA,8BAAA;ACCF;;ADCA;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA;IACE,cAAA;IACA,gBAAA;ECEF;AACF;;ADCA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,UAAA;ACEF;;ADCA;EACE,UAAA;EACA,eAAA;EACA,yBAAA;EACA,kBAAA;EACA,uBAAA;ACEF;;ADCA;EACE,WAAA;EACA,aAAA;EACA,8BAAA;EACA,WAAA;ACEF;;ADAA;EACE,UAAA;EACA,cAAA;EAEA;IACE,cAAA;IACA,qBAAA;IACA,gBAAA;ECEF;EDAA;IACE,UAAA;ECEF;AACF;;ADCA;EACE,UAAA;EACA,eAAA;EACA,yBAAA;EACA,kBAAA;EACA,uBAAA;ACEF;;ADCA;EACE,aAAA;EACA,SAAA;EACA,gBAAA;ACEF;;ADCA;EACE,aAAA;EACA,WAAA;EACA,8BAAA;EACA;IACE,yBAAA;IACA,OAAA;IACA,oBAAA;IACA,YAAA;IACA,YAAA;IACA,yBAAA;IAEA;MACE,yBAAA;MACA,oCAAA;MACA,wCAAA;ICCF;EACF;AACF;;ADCA,eAAA;AAEA;EACE,SAAA;ACCF;;ADCA;EACE,UAAA;ACEF;;ADAA;EACE,aAAA;ACGF;;ADDA;EACE,uBAAA;ACIF;;ADDA;EACE,8BAAA;ACIF;;ADFA;EACE,mBAAA;ACKF","sourcesContent":[".index-widget {\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n  background-color: #052042;\n  color: #fff;\n}\n\n.bands-main-widget-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  align-items: start;\n  .bands-title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    span {\n      font-size: 14px;\n      color: gray;\n    }\n  }\n}\n\n.bands-main-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  align-items: start;\n  justify-content: space-between;\n}\n\n.bands-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.band-selector-index {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  label {\n    display: block;\n    font-weight: 500;\n  }\n}\n\n.band-inputs {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  width: 80%;\n}\n\n.band-inputs select {\n  width: 80%;\n  padding: 0.1rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  background-color: white;\n}\n\n.input-group {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  gap: 0.1rem;\n}\n\n.control-group-input {\n  width: 45%;\n  margin: 0.1rem;\n  label {\n    display: block;\n    margin-bottom: 0.5rem;\n    font-weight: 500;\n  }\n  input {\n    width: 80%;\n  }\n}\n\n.control-group select {\n  width: 90%;\n  padding: 0.5rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  background-color: white;\n}\n\n.button-group {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.button-group {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  button {\n    background-color: #1a5276;\n    flex: 1;\n    padding: 0.5rem 1rem;\n    height: 2rem;\n    margin: 1rem;\n    transition: all 0.3s ease;\n    &:hover {\n      border: 1px solid #008ecc;\n      background-color: #052042 !important;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n}\n\n/* Utilidades */\n.m-0 {\n  margin: 0;\n}\n\n.p-0 {\n  padding: 0;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.align-items {\n  align-items: center;\n}",".index-widget {\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n  background-color: #052042;\n  color: #fff;\n}\n\n.bands-main-widget-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  align-items: start;\n  .bands-title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    span {\n      font-size: 14px;\n      color: gray;\n    }\n  }\n}\n\n.bands-main-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  align-items: start;\n  justify-content: space-between;\n}\n\n.bands-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.band-selector-index {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  label {\n    display: block;\n    font-weight: 500;\n  }\n}\n\n.band-inputs {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  width: 80%;\n}\n\n.band-inputs select {\n  width: 80%;\n  padding: 0.1rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  background-color: white;\n}\n\n.input-group {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  gap: 0.1rem;\n}\n\n.control-group-input {\n  width: 45%;\n  margin: 0.1rem;\n  label {\n    display: block;\n    margin-bottom: 0.5rem;\n    font-weight: 500;\n  }\n  input {\n    width: 80%;\n  }\n}\n\n.control-group select {\n  width: 90%;\n  padding: 0.5rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  background-color: white;\n}\n\n.button-group {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.button-group {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  button {\n    background-color: #1a5276;\n    flex: 1;\n    padding: 0.5rem 1rem;\n    height: 2rem;\n    margin: 1rem;\n    transition: all 0.3s ease;\n    &:hover {\n      border: 1px solid #008ecc;\n      background-color: #052042 !important;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n}\n\n/* Utilidades */\n.m-0 {\n  margin: 0;\n}\n\n.p-0 {\n  padding: 0;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.align-items {\n  align-items: center;\n}"],"sourceRoot":""}]);
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

/***/ "./your-extensions/widgets/IndexFormula/src/runtime/assets/style.css":
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/IndexFormula/src/runtime/assets/style.css ***!
  \***************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/IndexFormula/src/runtime/assets/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./your-extensions/widgets/IndexFormula/src/runtime/translations.ts":
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/IndexFormula/src/runtime/translations.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translations: () => (/* binding */ translations)
/* harmony export */ });
const translations = {
    es: {
        formulaLayer: "Fórmula índices",
        widgetLabel: "Formulador de Índices",
        offset: "Compensar",
        scale: "Escala",
        formulaRule: "Necesita seleccionar 1 imagen para ejecutar el formulador de índices",
        band: "Banda",
        render: "Renderizador",
        yellowred: "Amarillo a rojo",
        redgreen: "Rojo a verde",
        greenblue: "Verde a azúl",
        cianpurple: "Cian a púrpura",
        blackwhite: "Negro a blanco",
        apply: "Aplicar",
        reset: "Resetear",
    },
    en: {
        formulaLayer: "Index formula",
        widgetLabel: "Index Formulator",
        offset: "Offset",
        scale: "Scale",
        formulaRule: "You need to select 1 image to run the index formulator",
        band: "Band",
        render: "Renderer",
        yellowred: "Yellow to red",
        redgreen: "Red to green",
        greenblue: "Green to blue",
        cianpurple: "Cyan to purple",
        blackwhite: "Black to white",
        apply: "Apply",
        reset: "Reset",
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

/***/ "@arcgis/core/layers/ImageryLayer":
/*!*******************************************!*\
  !*** external "esri/layers/ImageryLayer" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_ImageryLayer__;

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
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/IndexFormula/src/runtime/widget.tsx ***!
  \*********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/esm/esri-loader.js");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/style.css */ "./your-extensions/widgets/IndexFormula/src/runtime/assets/style.css");
/* harmony import */ var _arcgis_core_layers_ImageryLayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @arcgis/core/layers/ImageryLayer */ "@arcgis/core/layers/ImageryLayer");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _hooks_useLocale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useLocale */ "./your-extensions/hooks/useLocale.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./translations */ "./your-extensions/widgets/IndexFormula/src/runtime/translations.ts");
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
    const { t } = (0,_hooks_useLocale__WEBPACK_IMPORTED_MODULE_8__.useLocale)(_translations__WEBPACK_IMPORTED_MODULE_9__.translations);
    //Estados
    const selectedSensor = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedSensor; });
    const selectedImageries = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedImages; });
    const geoprocess = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.geoprocess; });
    //Constante del Mapa
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [bands, setBands] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ r: '1', g: '2' });
    const [offset, setOffset] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0');
    const [scale, setScale] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('5');
    const [availableBands, setAvailableBands] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    //Valores para generar el stretchRenderer
    const [inputTypeAreaMax, setInputTypeAreaMax] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [inputTypeAreaMin, setInputTypeAreaMin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1);
    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('1');
    //Referencias
    const imageryLayerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const esriModulesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    //Estados locales
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // Definición de bandas por sensor
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
    const activeViewChangeHandler = (jmv) => {
        setJimuMapView(jmv);
        loadEsriModules();
    };
    const resetRenderer = () => {
        const existingLayer = jimuMapView.view.map.findLayerById('Fórmula índices');
        if (!existingLayer)
            return;
        jimuMapView.view.map.remove(existingLayer);
    };
    const loadEsriModules = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const [RasterFunction, ImageryLayer, RasterStretchRenderer] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_4__.loadModules)([
                'esri/layers/support/RasterFunction',
                'esri/layers/ImageryLayer',
                'esri/renderers/RasterStretchRenderer',
            ]);
            esriModulesRef.current = { RasterFunction, ImageryLayer: ImageryLayer, RasterStretchRenderer };
        }
        catch (err) {
            console.error('Error loading ESRI modules: ', err);
        }
    });
    const createResultLayer = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        setLoading(true);
        try {
            let selectedImage = (_a = selectedImageries[0]) === null || _a === void 0 ? void 0 : _a.OBJECTID;
            if (selectedImage !== null) {
                const { RasterFunction, RasterStretchRenderer } = esriModulesRef.current;
                const definitionExpression = `OBJECTID IN (${selectedImage})`;
                const colorRampOptions = {
                    '1': { from: '#ffe400', to: '#ff0000' },
                    '2': { from: '#ff0000', to: '#00FF00' },
                    '3': { from: '#00FF00', to: '#0000FF' },
                    '4': { from: '#00FFFF', to: '#A020F0' },
                    '5': { from: '#000000', to: '#FFFFFF' },
                };
                const selectedRamp = colorRampOptions[color];
                const bandArithmeticFunction = new RasterFunction({
                    functionName: 'BandArithmetic',
                    outputPixelType: 'F32',
                    functionArguments: {
                        Method: 0,
                        BandIndexes: `(B${bands.r} - B${bands.g}) / (B${bands.r} + B${bands.g}) * (${offset} + ${scale})`,
                    },
                });
                const stretchRenderer = new RasterStretchRenderer({
                    stretchType: 'min-max',
                    customStatistics: [
                        {
                            min: inputTypeAreaMin,
                            max: inputTypeAreaMax,
                            avg: 0.75,
                            stddev: 0.1
                        }
                    ],
                    colorRamp: {
                        type: "algorithmic",
                        fromColor: selectedRamp.from,
                        toColor: selectedRamp.to,
                    }
                });
                //Verificamos que no exista y si existe se elimina
                const existingLayer = yield jimuMapView.view.map.findLayerById('Fórmula índices');
                if (existingLayer) {
                    jimuMapView.view.map.remove(existingLayer);
                }
                const newImageryLayer = new _arcgis_core_layers_ImageryLayer__WEBPACK_IMPORTED_MODULE_6__["default"]({
                    url: selectedSensor.url,
                    id: 'Fórmula índices',
                    visible: true,
                    title: t("formulaLayer"),
                    definitionExpression,
                    rasterFunction: bandArithmeticFunction,
                    renderer: stretchRenderer,
                });
                //Se agrega la nueva capa
                jimuMapView.view.map.add(newImageryLayer);
                imageryLayerRef.current = newImageryLayer;
                newImageryLayer.when(() => {
                    imageryLayerRef.current = newImageryLayer;
                    setLoading(false);
                }, (err) => {
                    console.error("Error cargando el layer:", err);
                    setLoading(false);
                });
            }
        }
        catch (error) {
            console.error("No se pudo crear la capa de resultado,", error);
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (jimuMapView) {
            const layer = jimuMapView.view.map.allLayers.find(layer => layer.title == "Fórmula índices");
            if (layer) {
                jimuMapView.view.map.remove(layer);
            }
        }
    }, [geoprocess]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (selectedSensor) {
            const sensor = sensors.find(s => s.title === selectedSensor.title) || sensors[2];
            setAvailableBands(sensor.bands);
            // Resetear a valores por defecto al cambiar sensor
            setBands({ r: sensor.bands[0].value, g: sensor.bands[1].value });
        }
    }, [selectedSensor]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!jimuMapView)
            return;
        loadEsriModules();
    }, [jimuMapView]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "jimu-widget index-widget" },
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: activeViewChangeHandler })),
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "bands-main-widget-container" },
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "bands-title" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("h4", null, t("widgetLabel")),
                " ",
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", null,
                    "  ",
                    t("offset"),
                    " + ",
                    t("scale"),
                    " * ((A-B)/(A+B))")),
            selectedImageries && (selectedImageries === null || selectedImageries === void 0 ? void 0 : selectedImageries.length) < 1 ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null, t("formulaRule"))))
                :
                    (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: 'bands-main-container' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "bands-container" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "band-selector-index" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "band-inputs" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", null,
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("label", null,
                                            t("band"),
                                            " A:"),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_7__.Select, { value: bands.r, size: "sm", onChange: (e) => setBands(Object.assign(Object.assign({}, bands), { r: e.target.value })) }, availableBands.map((band, index) => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("option", { key: `r-${index}`, value: band.value }, band.name))))),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", null,
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("label", null,
                                            t("band"),
                                            " B:"),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_7__.Select, { value: bands.g, size: "sm", onChange: (e) => setBands(Object.assign(Object.assign({}, bands), { g: e.target.value })) }, availableBands.map((band, index) => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("option", { key: `g-${index}`, value: band.value }, band.name))))))),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "band-selector-index" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "input-group" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "control-group-input" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("label", null,
                                            t("offset"),
                                            ":"),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_7__.TextInput, { type: "text", size: "sm", value: offset, onChange: e => setOffset(e.target.value) })),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "control-group-input" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("label", null,
                                            t("scale"),
                                            ":"),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_7__.TextInput, { value: scale, className: "form-control", size: "sm", onChange: e => setScale(e.target.value) }))),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "control-group" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("label", null,
                                        t("render"),
                                        ":"),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_7__.Select, { value: color, size: "sm", onChange: e => setColor(e.target.value) },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("option", { value: "1" }, t("yellowred")),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("option", { value: "2" }, t("redgreen")),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("option", { value: "3" }, t("greenblue")),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("option", { value: "4" }, t("cianpurple")),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("option", { value: "5" }, t("blackwhite")))))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "button-group" },
                            loading === true ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { size: "sm", type: "primary" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_7__.Loading, { type: "DONUT", height: 20, width: 20 })))
                                :
                                    (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { onClick: createResultLayer, size: "sm", type: "primary" }, t("apply"))),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { onClick: resetRenderer, size: "sm", type: "primary" }, t("reset")))))),
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, { position: "bottom-right", autoClose: 3000 })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9JbmRleEZvcm11bGEvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQ2pCO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyw0UUFBNFEsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFV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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUk7QUFDTixNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQSw2RkFBNkY7QUFDN0Y7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9FQUFvRTtBQUNwRjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQXFDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQSx1REFBdUQsWUFBWSwySkFBMkosYUFBYTtBQUMzTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsOEVBQThFLCtCQUErQjtBQUM3RztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSx1Q0FBdUM7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDakIsMkRBQUMsMkNBQU0sSUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxTQUFTO2dDQUM5QiwyREFBQyw0Q0FBTyxJQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFJLENBQ3hDLENBRVY7Z0NBQ0MsQ0FBQztvQ0FDRCxDQUNFLDJEQUFDLDJDQUFNLElBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVMsSUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQVUsQ0FDbkY7NEJBR0wsMkRBQUMsMkNBQU0sSUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVMsSUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQVUsQ0FDMUUsQ0FDRixDQUNQLENBSUQ7UUFJTiwyREFBQywwREFBYyxJQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFFLElBQUksR0FBSSxDQUN2RCxDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixpRUFBZSxNQUFNLEVBQUM7QUFDZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9JbmRleEZvcm11bGEvc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9lc3JpLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy9jc3MuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL3V0aWxzL3VybC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvSW5kZXhGb3JtdWxhL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3M/YzJjNyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvaG9va3MvdXNlTG9jYWxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9JbmRleEZvcm11bGEvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS93aXRoLXNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvSW1hZ2VyeUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2Rpc3QvcmVhY3QtcmVkdXgubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtdG9hc3RpZnkvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0luZGV4Rm9ybXVsYS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaW5kZXgtd2lkZ2V0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5iYW5kcy1tYWluLXdpZGdldC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIC5iYW5kcy10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgfVxufVxuXG4uYmFuZHMtbWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJhbmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5iYW5kLXNlbGVjdG9yLWluZGV4IHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjFyZW07XG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbi5iYW5kLWlucHV0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4xcmVtO1xuICB3aWR0aDogODAlO1xufVxuXG4uYmFuZC1pbnB1dHMgc2VsZWN0IHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMC4xcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuMXJlbTtcbn1cblxuLmNvbnRyb2wtZ3JvdXAtaW5wdXQge1xuICB3aWR0aDogNDUlO1xuICBtYXJnaW46IDAuMXJlbTtcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIGlucHV0IHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5cbi5jb250cm9sLWdyb3VwIHNlbGVjdCB7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmJ1dHRvbi1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhlY2M7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIH1cbiAgfVxufVxuXG4vKiBVdGlsaWRhZGVzICovXG4ubS0wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucC0wIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5qdXN0aWZ5LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uanVzdGlmeS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWxpZ24taXRlbXMge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvSW5kZXhGb3JtdWxhL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3NcIixcIndlYnBhY2s6Ly8uLy4uLy4uLy4uL051ZXZhJTIwY2FycGV0YS9BcmNHSVNFeHBlcmllbmNlQnVpbGRlci9jbGllbnQveW91ci1leHRlbnNpb25zL3dpZGdldHMvSW5kZXhGb3JtdWxhL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFRTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBO01BQ0UsZUFBQTtNQUNBLFdBQUE7SUNDRjtFQUNGO0FBQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNFRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0E7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RUNFRjtBQUNGOztBRENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNFRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFFQTtJQUNFLGNBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0VDRUY7RURBQTtJQUNFLFVBQUE7RUNFRjtBQUNGOztBRENBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQTtJQUNFLHlCQUFBO0lBQ0EsT0FBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtJQUVBO01BQ0UseUJBQUE7TUFDQSxvQ0FBQTtNQUNBLHdDQUFBO0lDQ0Y7RUFDRjtBQUNGOztBRENBLGVBQUE7QUFFQTtFQUNFLFNBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7QUNHRjs7QUREQTtFQUNFLHVCQUFBO0FDSUY7O0FEREE7RUFDRSw4QkFBQTtBQ0lGOztBREZBO0VBQ0UsbUJBQUE7QUNLRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW5kZXgtd2lkZ2V0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJhbmRzLW1haW4td2lkZ2V0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgLmJhbmRzLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgc3BhbiB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIGNvbG9yOiBncmF5O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5iYW5kcy1tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYmFuZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJhbmQtc2VsZWN0b3ItaW5kZXgge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjFyZW07XFxuICBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgfVxcbn1cXG5cXG4uYmFuZC1pbnB1dHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMXJlbTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5iYW5kLWlucHV0cyBzZWxlY3Qge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IDAuMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmlucHV0LWdyb3VwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC4xcmVtO1xcbn1cXG5cXG4uY29udHJvbC1ncm91cC1pbnB1dCB7XFxuICB3aWR0aDogNDUlO1xcbiAgbWFyZ2luOiAwLjFyZW07XFxuICBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB9XFxuICBpbnB1dCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxufVxcblxcbi5jb250cm9sLWdyb3VwIHNlbGVjdCB7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYnV0dG9uLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uYnV0dG9uLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiBVdGlsaWRhZGVzICovXFxuLm0tMCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5wLTAge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWxpZ24taXRlbXMge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsXCIuaW5kZXgtd2lkZ2V0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJhbmRzLW1haW4td2lkZ2V0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgLmJhbmRzLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgc3BhbiB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIGNvbG9yOiBncmF5O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5iYW5kcy1tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYmFuZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJhbmQtc2VsZWN0b3ItaW5kZXgge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjFyZW07XFxuICBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgfVxcbn1cXG5cXG4uYmFuZC1pbnB1dHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMXJlbTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5iYW5kLWlucHV0cyBzZWxlY3Qge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IDAuMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmlucHV0LWdyb3VwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC4xcmVtO1xcbn1cXG5cXG4uY29udHJvbC1ncm91cC1pbnB1dCB7XFxuICB3aWR0aDogNDUlO1xcbiAgbWFyZ2luOiAwLjFyZW07XFxuICBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB9XFxuICBpbnB1dCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxufVxcblxcbi5jb250cm9sLWdyb3VwIHNlbGVjdCB7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYnV0dG9uLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uYnV0dG9uLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiBVdGlsaWRhZGVzICovXFxuLm0tMCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5wLTAge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWxpZ24taXRlbXMge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKlxuICBDb3B5cmlnaHQgKGMpIDIwMjIgRXNyaVxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLy8gcmUtZXhwb3J0IHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgcGFydCBvZiB0aGUgcHVibGljIEFQSVxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuZXhwb3J0IHsgbG9hZE1vZHVsZXMgfSBmcm9tICcuL21vZHVsZXMnO1xuZXhwb3J0IHsgZ2V0U2NyaXB0LCBpc0xvYWRlZCwgbG9hZFNjcmlwdCwgc2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL3NjcmlwdCc7XG5leHBvcnQgeyBsb2FkQ3NzIH0gZnJvbSAnLi91dGlscy9jc3MnO1xuZXhwb3J0IHsgdXRpbHMgfTtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBnZXRTY3JpcHQsIGlzTG9hZGVkLCBsb2FkU2NyaXB0IH0gZnJvbSAnLi9zY3JpcHQnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuLy8gd3JhcCBEb2pvJ3MgcmVxdWlyZSgpIGluIGEgcHJvbWlzZVxuZnVuY3Rpb24gcmVxdWlyZU1vZHVsZXMobW9kdWxlcykge1xuICAgIHJldHVybiBuZXcgdXRpbHMuUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIGxvYWRpbmcgdGhlIGVzcmkvZG9qbyBzY3JpcHRzLCByZWplY3Qgd2l0aCB0aGUgZXJyb3IuXG4gICAgICAgIHZhciBlcnJvckhhbmRsZXIgPSB3aW5kb3dbJ3JlcXVpcmUnXS5vbignZXJyb3InLCByZWplY3QpO1xuICAgICAgICB3aW5kb3dbJ3JlcXVpcmUnXShtb2R1bGVzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZW1vdmUgZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgZXJyb3JIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgLy8gUmVzb2x2ZSB3aXRoIHRoZSBwYXJhbWV0ZXJzIGZyb20gZG9qbyByZXF1aXJlIGFzIGFuIGFycmF5LlxuICAgICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYXJyYXkgb2YgdGhlIHJlcXVpcmVkIG1vZHVsZXNcbi8vIGFsc28gd2lsbCBhdHRlbXB0IHRvIGxhenkgbG9hZCB0aGUgQXJjR0lTIEFQSSBpZiBpdCBoYXMgbm90IGFscmVhZHkgYmVlbiBsb2FkZWRcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTW9kdWxlcyhtb2R1bGVzLCBsb2FkU2NyaXB0T3B0aW9ucykge1xuICAgIGlmIChsb2FkU2NyaXB0T3B0aW9ucyA9PT0gdm9pZCAwKSB7IGxvYWRTY3JpcHRPcHRpb25zID0ge307IH1cbiAgICBpZiAoIWlzTG9hZGVkKCkpIHtcbiAgICAgICAgLy8gc2NyaXB0IGlzIG5vdCB5ZXQgbG9hZGVkLCBpcyBpdCBpbiB0aGUgcHJvY2VzcyBvZiBsb2FkaW5nP1xuICAgICAgICB2YXIgc2NyaXB0ID0gZ2V0U2NyaXB0KCk7XG4gICAgICAgIHZhciBzcmMgPSBzY3JpcHQgJiYgc2NyaXB0LmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGlmICghbG9hZFNjcmlwdE9wdGlvbnMudXJsICYmIHNyYykge1xuICAgICAgICAgICAgLy8gc2NyaXB0IGlzIHN0aWxsIGxvYWRpbmcgYW5kIHVzZXIgZGlkIG5vdCBzcGVjaWZ5IGEgVVJMXG4gICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBkZWZhdWx0IHRvIHRoZSBVUkwgdGhhdCdzIGJlaW5nIGxvYWRlZFxuICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBkZWZhdWx0aW5nIHRvIHRoZSBsYXRlc3QgNC54IFVSTFxuICAgICAgICAgICAgbG9hZFNjcmlwdE9wdGlvbnMudXJsID0gc3JjO1xuICAgICAgICB9XG4gICAgICAgIC8vIGF0dGVtcHQgdG8gbG9hZCB0aGUgc2NyaXB0IHRoZW4gbG9hZCB0aGUgbW9kdWxlc1xuICAgICAgICByZXR1cm4gbG9hZFNjcmlwdChsb2FkU2NyaXB0T3B0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKTsgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBzY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQsIGp1c3QgbG9hZCB0aGUgbW9kdWxlc1xuICAgICAgICByZXR1cm4gcmVxdWlyZU1vZHVsZXMobW9kdWxlcyk7XG4gICAgfVxufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGxvYWRDc3MgfSBmcm9tICcuL3V0aWxzL2Nzcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBnZXRDZG5VcmwgfSBmcm9tICcuL3V0aWxzL3VybCc7XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmZ1bmN0aW9uIGNyZWF0ZVNjcmlwdCh1cmwpIHtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBzY3JpcHQuc3JjID0gdXJsO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXNyaS1sb2FkZXInLCAnbG9hZGluZycpO1xuICAgIHJldHVybiBzY3JpcHQ7XG59XG4vLyBhZGQgYSBvbmUtdGltZSBsb2FkIGhhbmRsZXIgdG8gc2NyaXB0XG4vLyBhbmQgb3B0aW9uYWxseSBhZGQgYSBvbmUgdGltZSBlcnJvciBoYW5kbGVyIGFzIHdlbGxcbmZ1bmN0aW9uIGhhbmRsZVNjcmlwdExvYWQoc2NyaXB0LCBjYWxsYmFjaywgZXJyYmFjaykge1xuICAgIHZhciBvblNjcmlwdEVycm9yO1xuICAgIGlmIChlcnJiYWNrKSB7XG4gICAgICAgIC8vIHNldCB1cCBhbiBlcnJvciBoYW5kbGVyIGFzIHdlbGxcbiAgICAgICAgb25TY3JpcHRFcnJvciA9IGhhbmRsZVNjcmlwdEVycm9yKHNjcmlwdCwgZXJyYmFjayk7XG4gICAgfVxuICAgIHZhciBvblNjcmlwdExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHBhc3MgdGhlIHNjcmlwdCB0byB0aGUgY2FsbGJhY2tcbiAgICAgICAgY2FsbGJhY2soc2NyaXB0KTtcbiAgICAgICAgLy8gcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvblNjcmlwdExvYWQsIGZhbHNlKTtcbiAgICAgICAgaWYgKG9uU2NyaXB0RXJyb3IpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZXJyb3IgbGlzdGVuZXIgYXMgd2VsbFxuICAgICAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25TY3JpcHRFcnJvciwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uU2NyaXB0TG9hZCwgZmFsc2UpO1xufVxuLy8gYWRkIGEgb25lLXRpbWUgZXJyb3IgaGFuZGxlciB0byB0aGUgc2NyaXB0XG5mdW5jdGlvbiBoYW5kbGVTY3JpcHRFcnJvcihzY3JpcHQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG9uU2NyaXB0RXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyByZWplY3QgdGhlIHByb21pc2UgYW5kIHJlbW92ZSB0aGlzIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGNhbGxiYWNrKGUuZXJyb3IgfHwgbmV3IEVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIGF0dGVtcHRpbmcgdG8gbG9hZCBcIi5jb25jYXQoc2NyaXB0LnNyYykpKTtcbiAgICAgICAgLy8gcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25TY3JpcHRFcnJvciwgZmFsc2UpO1xuICAgIH07XG4gICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25TY3JpcHRFcnJvciwgZmFsc2UpO1xuICAgIHJldHVybiBvblNjcmlwdEVycm9yO1xufVxuLy8gYWxsb3cgdGhlIHVzZXIgdG8gY29uZmlndXJlIGRlZmF1bHQgc2NyaXB0IG9wdGlvbnMgcmF0aGVyIHRoYW4gcGFzc2luZyBvcHRpb25zIHRvIGBsb2FkTW9kdWxlc2AgZWFjaCB0aW1lXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgZGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zO1xufVxuLy8gZ2V0IHRoZSBzY3JpcHQgaW5qZWN0ZWQgYnkgdGhpcyBsaWJyYXJ5XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyaXB0KCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1lc3JpLWxvYWRlcl0nKTtcbn1cbi8vIGhhcyBBcmNHSVMgQVBJIGJlZW4gbG9hZGVkIG9uIHRoZSBwYWdlIHlldD9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvYWRlZCgpIHtcbiAgICB2YXIgZ2xvYmFsUmVxdWlyZSA9IHdpbmRvd1sncmVxdWlyZSddO1xuICAgIC8vIC5vbigpIGVuc3VyZXMgdGhhdCBpdCdzIERvam8ncyBBTUQgbG9hZGVyXG4gICAgcmV0dXJuIGdsb2JhbFJlcXVpcmUgJiYgZ2xvYmFsUmVxdWlyZS5vbjtcbn1cbi8vIGxvYWQgdGhlIEFyY0dJUyBBUEkgb24gdGhlIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBsb2FkU2NyaXB0KG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIC8vIHdlIHdvdWxkIGhhdmUgbGlrZWQgdG8gdXNlIHNwcmVhZCBsaWtlIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfVxuICAgIC8vIGJ1dCBUUyB3b3VsZCBpbmplY3QgYSBwb2x5ZmlsbCB0aGF0IHdvdWxkIHJlcXVpcmUgdXNlIHRvIGNvbmZpZ3VyZSByb2xsdXAgdyBjb250ZW50OiAnd2luZG93J1xuICAgIC8vIGlmIHdlIGhhdmUgYW5vdGhlciBvY2Nhc2lvbiB0byB1c2Ugc3ByZWFkLCBsZXQncyBkbyB0aGF0IGFuZCByZXBsYWNlIHRoaXMgZm9yLi4uaW5cbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIFtkZWZhdWx0T3B0aW9ucywgb3B0aW9uc10uZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICBvcHRzW3Byb3BdID0gb2JqW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gVVJMIHRvIGxvYWRcbiAgICB2YXIgdmVyc2lvbiA9IG9wdHMudmVyc2lvbjtcbiAgICB2YXIgdXJsID0gb3B0cy51cmwgfHwgZ2V0Q2RuVXJsKHZlcnNpb24pO1xuICAgIHJldHVybiBuZXcgdXRpbHMuUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBzY3JpcHQgPSBnZXRTY3JpcHQoKTtcbiAgICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICAgICAgLy8gdGhlIEFQSSBpcyBhbHJlYWR5IGxvYWRlZCBvciBpbiB0aGUgcHJvY2VzcyBvZiBsb2FkaW5nLi4uXG4gICAgICAgICAgICAvLyBOT1RFOiBoYXZlIHRvIHRlc3QgYWdhaW5zdCBzY3IgYXR0cmlidXRlIHZhbHVlLCBub3Qgc2NyaXB0LnNyY1xuICAgICAgICAgICAgLy8gYi9jIHRoZSBsYXR0ZXIgd2lsbCByZXR1cm4gdGhlIGZ1bGwgdXJsIGZvciByZWxhdGl2ZSBwYXRoc1xuICAgICAgICAgICAgdmFyIHNyYyA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICAgICAgaWYgKHNyYyAhPT0gdXJsKSB7XG4gICAgICAgICAgICAgICAgLy8gcG90ZW50aWFsbHkgdHJ5aW5nIHRvIGxvYWQgYSBkaWZmZXJlbnQgdmVyc2lvbiBvZiB0aGUgQVBJXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0IGlzIGFscmVhZHkgbG9hZGVkIChcIi5jb25jYXQoc3JjLCBcIikuXCIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc2NyaXB0IGhhcyBhbHJlYWR5IHN1Y2Nlc3NmdWxseSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzY3JpcHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgdGhlIHNjcmlwdCB0byBsb2FkIGFuZCB0aGVuIHJlc29sdmVcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgQVBJIGhhcyBiZWVuIGxvYWRlZCBieSBzb21lIG90aGVyIG1lYW5zXG4gICAgICAgICAgICAgICAgLy8gcG90ZW50aWFsbHkgdHJ5aW5nIHRvIGxvYWQgYSBkaWZmZXJlbnQgdmVyc2lvbiBvZiB0aGUgQVBJXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0IGlzIGFscmVhZHkgbG9hZGVkLlwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIGF0dGVtcHRpbmcgdG8gbG9hZCB0aGUgQVBJXG4gICAgICAgICAgICAgICAgdmFyIGNzcyA9IG9wdHMuY3NzO1xuICAgICAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZVZlcnNpb24gPSBjc3MgPT09IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxvYWQgdGhlIGNzcyBiZWZvcmUgbG9hZGluZyB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIGxvYWRDc3ModXNlVmVyc2lvbiA/IHZlcnNpb24gOiBjc3MsIG9wdHMuaW5zZXJ0Q3NzQmVmb3JlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgc2NyaXB0IG9iamVjdCB3aG9zZSBzb3VyY2UgcG9pbnRzIHRvIHRoZSBBUElcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBjcmVhdGVTY3JpcHQodXJsKTtcbiAgICAgICAgICAgICAgICAvLyBfY3VycmVudFVybCA9IHVybDtcbiAgICAgICAgICAgICAgICAvLyBvbmNlIHRoZSBzY3JpcHQgaXMgbG9hZGVkLi4uXG4gICAgICAgICAgICAgICAgaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBzdGF0dXMgb2YgdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLWVzcmktbG9hZGVyJywgJ2xvYWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAvLyBsb2FkIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBnZXRDZG5Dc3NVcmwsIHBhcnNlVmVyc2lvbiB9IGZyb20gJy4vdXJsJztcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlc2hlZXRMaW5rKGhyZWYpIHtcbiAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgIHJldHVybiBsaW5rO1xufVxuZnVuY3Rpb24gaW5zZXJ0TGluayhsaW5rLCBiZWZvcmUpIHtcbiAgICBpZiAoYmVmb3JlKSB7XG4gICAgICAgIC8vIHRoZSBsaW5rIHNob3VsZCBiZSBpbnNlcnRlZCBiZWZvcmUgYSBzcGVjaWZpYyBub2RlXG4gICAgICAgIHZhciBiZWZvcmVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihiZWZvcmUpO1xuICAgICAgICBiZWZvcmVOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGJlZm9yZU5vZGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gYXBwZW5kIHRoZSBsaW5rIHRvIHRoZW4gZW5kIG9mIHRoZSBoZWFkIHRhZ1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH1cbn1cbi8vIGNoZWNrIGlmIHRoZSBjc3MgdXJsIGhhcyBiZWVuIGluamVjdGVkIG9yIGFkZGVkIG1hbnVhbGx5XG5mdW5jdGlvbiBnZXRDc3ModXJsKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW2hyZWYqPVxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJdXCIpKTtcbn1cbmZ1bmN0aW9uIGdldENzc1VybCh1cmxPclZlcnNpb24pIHtcbiAgICByZXR1cm4gIXVybE9yVmVyc2lvbiB8fCBwYXJzZVZlcnNpb24odXJsT3JWZXJzaW9uKVxuICAgICAgICAvLyBpZiBpdCdzIGEgdmFsaWQgdmVyc2lvbiBzdHJpbmcgcmV0dXJuIHRoZSBDRE4gVVJMXG4gICAgICAgID8gZ2V0Q2RuQ3NzVXJsKHVybE9yVmVyc2lvbilcbiAgICAgICAgLy8gb3RoZXJ3aXNlIGFzc3VtZSBpdCdzIGEgVVJMIGFuZCByZXR1cm4gdGhhdFxuICAgICAgICA6IHVybE9yVmVyc2lvbjtcbn1cbi8vIGxhenkgbG9hZCB0aGUgQ1NTIG5lZWRlZCBmb3IgdGhlIEFyY0dJUyBBUElcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ3NzKHVybE9yVmVyc2lvbiwgYmVmb3JlKSB7XG4gICAgdmFyIHVybCA9IGdldENzc1VybCh1cmxPclZlcnNpb24pO1xuICAgIHZhciBsaW5rID0gZ2V0Q3NzKHVybCk7XG4gICAgaWYgKCFsaW5rKSB7XG4gICAgICAgIC8vIGNyZWF0ZSAmIGxvYWQgdGhlIGNzcyBsaW5rXG4gICAgICAgIGxpbmsgPSBjcmVhdGVTdHlsZXNoZWV0TGluayh1cmwpO1xuICAgICAgICBpbnNlcnRMaW5rKGxpbmssIGJlZm9yZSk7XG4gICAgfVxuICAgIHJldHVybiBsaW5rO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbi8vIGFsbG93IGNvbnN1bWluZyBsaWJyYXJpZXMgdG8gcHJvdmlkZSB0aGVpciBvd24gUHJvbWlzZSBpbXBsZW1lbnRhdGlvbnNcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBQcm9taXNlOiBpc0Jyb3dzZXIgPyB3aW5kb3dbJ1Byb21pc2UnXSA6IHVuZGVmaW5lZFxufTtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG52YXIgREVGQVVMVF9WRVJTSU9OID0gJzQuMjUnO1xudmFyIE5FWFQgPSAnbmV4dCc7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWZXJzaW9uKHZlcnNpb24pIHtcbiAgICBpZiAodmVyc2lvbi50b0xvd2VyQ2FzZSgpID09PSBORVhUKSB7XG4gICAgICAgIHJldHVybiBORVhUO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSB2ZXJzaW9uICYmIHZlcnNpb24ubWF0Y2goL14oXFxkKVxcLihcXGQrKS8pO1xuICAgIHJldHVybiBtYXRjaCAmJiB7XG4gICAgICAgIG1ham9yOiBwYXJzZUludChtYXRjaFsxXSwgMTApLFxuICAgICAgICBtaW5vcjogcGFyc2VJbnQobWF0Y2hbMl0sIDEwKVxuICAgIH07XG59XG4vKipcbiAqIEdldCB0aGUgQ0ROIHVybCBmb3IgYSBnaXZlbiB2ZXJzaW9uXG4gKlxuICogQHBhcmFtIHZlcnNpb24gRXg6ICc0LjI1JyBvciAnMy40MicuIERlZmF1bHRzIHRvIHRoZSBsYXRlc3QgNC54IHZlcnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5VcmwodmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uID09PSB2b2lkIDApIHsgdmVyc2lvbiA9IERFRkFVTFRfVkVSU0lPTjsgfVxuICAgIHJldHVybiBcImh0dHBzOi8vanMuYXJjZ2lzLmNvbS9cIi5jb25jYXQodmVyc2lvbiwgXCIvXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIENETiB1cmwgZm9yIGEgdGhlIENTUyBmb3IgYSBnaXZlbiB2ZXJzaW9uIGFuZC9vciB0aGVtZVxuICpcbiAqIEBwYXJhbSB2ZXJzaW9uIEV4OiAnNC4yNScsICczLjQyJywgb3IgJ25leHQnLiBEZWZhdWx0cyB0byB0aGUgbGF0ZXN0IDQueCB2ZXJzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2RuQ3NzVXJsKHZlcnNpb24pIHtcbiAgICBpZiAodmVyc2lvbiA9PT0gdm9pZCAwKSB7IHZlcnNpb24gPSBERUZBVUxUX1ZFUlNJT047IH1cbiAgICB2YXIgYmFzZVVybCA9IGdldENkblVybCh2ZXJzaW9uKTtcbiAgICB2YXIgcGFyc2VkVmVyc2lvbiA9IHBhcnNlVmVyc2lvbih2ZXJzaW9uKTtcbiAgICBpZiAocGFyc2VkVmVyc2lvbiAhPT0gTkVYVCAmJiBwYXJzZWRWZXJzaW9uLm1ham9yID09PSAzKSB7XG4gICAgICAgIC8vIE5PVEU6IGF0IDMuMTEgdGhlIENTUyBtb3ZlZCBmcm9tIHRoZSAvanMgZm9sZGVyIHRvIHRoZSByb290XG4gICAgICAgIHZhciBwYXRoID0gcGFyc2VkVmVyc2lvbi5taW5vciA8PSAxMCA/ICdqcy8nIDogJyc7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChiYXNlVXJsKS5jb25jYXQocGF0aCwgXCJlc3JpL2Nzcy9lc3JpLmNzc1wiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGFzc3VtZSA0LnhcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiZXNyaS90aGVtZXMvbGlnaHQvbWFpbi5jc3NcIik7XG4gICAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsZSh0cmFuc2xhdGlvbnMpIHtcclxuICAvLyBEZXRlY3RhIGxvY2FsZSBkZXNkZSBsYSBVUkwgKD9sb2NhbGU9ZW4pIG8gZmFsbGJhY2sgYSBcImVzXCJcclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gIGNvbnN0IGxvY2FsZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJsb2NhbGVcIikgfHwgXCJlc1wiO1xyXG5cclxuICBjb25zdCB0ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gKGtleToga2V5b2YgdHlwZW9mIHRyYW5zbGF0aW9uc1tcImVzXCJdKSA9PlxyXG4gICAgICB0cmFuc2xhdGlvbnNbbG9jYWxlIGFzIFwiZXNcIiB8IFwiZW5cIl1ba2V5XSA/PyBrZXk7XHJcbiAgfSwgW2xvY2FsZV0pO1xyXG5cclxuICByZXR1cm4geyB0LCBsb2NhbGUgfTtcclxufSIsImV4cG9ydCBjb25zdCB0cmFuc2xhdGlvbnMgPSB7XHJcbiAgZXM6IHtcclxuICAgIGZvcm11bGFMYXllcjogXCJGw7NybXVsYSDDrW5kaWNlc1wiLFxyXG4gICAgd2lkZ2V0TGFiZWw6IFwiRm9ybXVsYWRvciBkZSDDjW5kaWNlc1wiLFxyXG4gICAgb2Zmc2V0OiBcIkNvbXBlbnNhclwiLFxyXG4gICAgc2NhbGU6IFwiRXNjYWxhXCIsXHJcbiAgICBmb3JtdWxhUnVsZTpcclxuICAgICAgXCJOZWNlc2l0YSBzZWxlY2Npb25hciAxIGltYWdlbiBwYXJhIGVqZWN1dGFyIGVsIGZvcm11bGFkb3IgZGUgw61uZGljZXNcIixcclxuICAgIGJhbmQ6IFwiQmFuZGFcIixcclxuICAgIHJlbmRlcjogXCJSZW5kZXJpemFkb3JcIixcclxuICAgIHllbGxvd3JlZDogXCJBbWFyaWxsbyBhIHJvam9cIixcclxuICAgIHJlZGdyZWVuOiBcIlJvam8gYSB2ZXJkZVwiLFxyXG4gICAgZ3JlZW5ibHVlOiBcIlZlcmRlIGEgYXrDumxcIixcclxuICAgIGNpYW5wdXJwbGU6IFwiQ2lhbiBhIHDDunJwdXJhXCIsXHJcbiAgICBibGFja3doaXRlOiBcIk5lZ3JvIGEgYmxhbmNvXCIsXHJcbiAgICBhcHBseTogXCJBcGxpY2FyXCIsXHJcbiAgICByZXNldDogXCJSZXNldGVhclwiLFxyXG4gIH0sXHJcbiAgZW46IHtcclxuICAgIGZvcm11bGFMYXllcjogXCJJbmRleCBmb3JtdWxhXCIsXHJcbiAgICB3aWRnZXRMYWJlbDogXCJJbmRleCBGb3JtdWxhdG9yXCIsXHJcbiAgICBvZmZzZXQ6IFwiT2Zmc2V0XCIsXHJcbiAgICBzY2FsZTogXCJTY2FsZVwiLFxyXG4gICAgZm9ybXVsYVJ1bGU6IFwiWW91IG5lZWQgdG8gc2VsZWN0IDEgaW1hZ2UgdG8gcnVuIHRoZSBpbmRleCBmb3JtdWxhdG9yXCIsXHJcbiAgICBiYW5kOiBcIkJhbmRcIixcclxuICAgIHJlbmRlcjogXCJSZW5kZXJlclwiLFxyXG4gICAgeWVsbG93cmVkOiBcIlllbGxvdyB0byByZWRcIixcclxuICAgIHJlZGdyZWVuOiBcIlJlZCB0byBncmVlblwiLFxyXG4gICAgZ3JlZW5ibHVlOiBcIkdyZWVuIHRvIGJsdWVcIixcclxuICAgIGNpYW5wdXJwbGU6IFwiQ3lhbiB0byBwdXJwbGVcIixcclxuICAgIGJsYWNrd2hpdGU6IFwiQmxhY2sgdG8gd2hpdGVcIixcclxuICAgIGFwcGx5OiBcIkFwcGx5XCIsXHJcbiAgICByZXNldDogXCJSZXNldFwiLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIHJldHVybiB4ID09PSB5ICYmICh4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSkgfHwgeCAhPT0geCAmJiB5ICE9PSB5IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIDtcbn1cblxudmFyIG9iamVjdElzID0gdHlwZW9mIE9iamVjdC5pcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5pcyA6IGlzO1xuXG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBSZWFjdC51c2VTeW5jRXh0ZXJuYWxTdG9yZTtcblxuLy8gZm9yIENvbW1vbkpTIGludGVyb3AuXG5cbnZhciB1c2VSZWYgPSBSZWFjdC51c2VSZWYsXG4gICAgdXNlRWZmZWN0ID0gUmVhY3QudXNlRWZmZWN0LFxuICAgIHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vLFxuICAgIHVzZURlYnVnVmFsdWUgPSBSZWFjdC51c2VEZWJ1Z1ZhbHVlOyAvLyBTYW1lIGFzIHVzZVN5bmNFeHRlcm5hbFN0b3JlLCBidXQgc3VwcG9ydHMgc2VsZWN0b3IgYW5kIGlzRXF1YWwgYXJndW1lbnRzLlxuXG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWwpIHtcbiAgLy8gVXNlIHRoaXMgdG8gdHJhY2sgdGhlIHJlbmRlcmVkIHNuYXBzaG90LlxuICB2YXIgaW5zdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGluc3Q7XG5cbiAgaWYgKGluc3RSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgIGluc3QgPSB7XG4gICAgICBoYXNWYWx1ZTogZmFsc2UsXG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH07XG4gICAgaW5zdFJlZi5jdXJyZW50ID0gaW5zdDtcbiAgfSBlbHNlIHtcbiAgICBpbnN0ID0gaW5zdFJlZi5jdXJyZW50O1xuICB9XG5cbiAgdmFyIF91c2VNZW1vID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gVHJhY2sgdGhlIG1lbW9pemVkIHN0YXRlIHVzaW5nIGNsb3N1cmUgdmFyaWFibGVzIHRoYXQgYXJlIGxvY2FsIHRvIHRoaXNcbiAgICAvLyBtZW1vaXplZCBpbnN0YW5jZSBvZiBhIGdldFNuYXBzaG90IGZ1bmN0aW9uLiBJbnRlbnRpb25hbGx5IG5vdCB1c2luZyBhXG4gICAgLy8gdXNlUmVmIGhvb2ssIGJlY2F1c2UgdGhhdCBzdGF0ZSB3b3VsZCBiZSBzaGFyZWQgYWNyb3NzIGFsbCBjb25jdXJyZW50XG4gICAgLy8gY29waWVzIG9mIHRoZSBob29rL2NvbXBvbmVudC5cbiAgICB2YXIgaGFzTWVtbyA9IGZhbHNlO1xuICAgIHZhciBtZW1vaXplZFNuYXBzaG90O1xuICAgIHZhciBtZW1vaXplZFNlbGVjdGlvbjtcblxuICAgIHZhciBtZW1vaXplZFNlbGVjdG9yID0gZnVuY3Rpb24gKG5leHRTbmFwc2hvdCkge1xuICAgICAgaWYgKCFoYXNNZW1vKSB7XG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHRoZSBob29rIGlzIGNhbGxlZCwgdGhlcmUgaXMgbm8gbWVtb2l6ZWQgcmVzdWx0LlxuICAgICAgICBoYXNNZW1vID0gdHJ1ZTtcbiAgICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcblxuICAgICAgICB2YXIgX25leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpO1xuXG4gICAgICAgIGlmIChpc0VxdWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBFdmVuIGlmIHRoZSBzZWxlY3RvciBoYXMgY2hhbmdlZCwgdGhlIGN1cnJlbnRseSByZW5kZXJlZCBzZWxlY3Rpb25cbiAgICAgICAgICAvLyBtYXkgYmUgZXF1YWwgdG8gdGhlIG5ldyBzZWxlY3Rpb24uIFdlIHNob3VsZCBhdHRlbXB0IHRvIHJldXNlIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgdmFsdWUgaWYgcG9zc2libGUsIHRvIHByZXNlcnZlIGRvd25zdHJlYW0gbWVtb2l6YXRpb25zLlxuICAgICAgICAgIGlmIChpbnN0Lmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdGlvbiA9IGluc3QudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChpc0VxdWFsKGN1cnJlbnRTZWxlY3Rpb24sIF9uZXh0U2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IGN1cnJlbnRTZWxlY3Rpb247XG4gICAgICAgICAgICAgIHJldHVybiBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gX25leHRTZWxlY3Rpb247XG4gICAgICAgIHJldHVybiBfbmV4dFNlbGVjdGlvbjtcbiAgICAgIH0gLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG5cblxuICAgICAgLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG4gICAgICB2YXIgcHJldlNuYXBzaG90ID0gbWVtb2l6ZWRTbmFwc2hvdDtcbiAgICAgIHZhciBwcmV2U2VsZWN0aW9uID0gbWVtb2l6ZWRTZWxlY3Rpb247XG5cbiAgICAgIGlmIChvYmplY3RJcyhwcmV2U25hcHNob3QsIG5leHRTbmFwc2hvdCkpIHtcbiAgICAgICAgLy8gVGhlIHNuYXBzaG90IGlzIHRoZSBzYW1lIGFzIGxhc3QgdGltZS4gUmV1c2UgdGhlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgcmV0dXJuIHByZXZTZWxlY3Rpb247XG4gICAgICB9IC8vIFRoZSBzbmFwc2hvdCBoYXMgY2hhbmdlZCwgc28gd2UgbmVlZCB0byBjb21wdXRlIGEgbmV3IHNlbGVjdGlvbi5cblxuXG4gICAgICAvLyBUaGUgc25hcHNob3QgaGFzIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBzZWxlY3Rpb24uXG4gICAgICB2YXIgbmV4dFNlbGVjdGlvbiA9IHNlbGVjdG9yKG5leHRTbmFwc2hvdCk7IC8vIElmIGEgY3VzdG9tIGlzRXF1YWwgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHVzZSB0aGF0IHRvIGNoZWNrIGlmIHRoZSBkYXRhXG4gICAgICAvLyBoYXMgY2hhbmdlZC4gSWYgaXQgaGFzbid0LCByZXR1cm4gdGhlIHByZXZpb3VzIHNlbGVjdGlvbi4gVGhhdCBzaWduYWxzXG4gICAgICAvLyB0byBSZWFjdCB0aGF0IHRoZSBzZWxlY3Rpb25zIGFyZSBjb25jZXB0dWFsbHkgZXF1YWwsIGFuZCB3ZSBjYW4gYmFpbFxuICAgICAgLy8gb3V0IG9mIHJlbmRlcmluZy5cblxuICAgICAgLy8gSWYgYSBjdXN0b20gaXNFcXVhbCBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdXNlIHRoYXQgdG8gY2hlY2sgaWYgdGhlIGRhdGFcbiAgICAgIC8vIGhhcyBjaGFuZ2VkLiBJZiBpdCBoYXNuJ3QsIHJldHVybiB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLiBUaGF0IHNpZ25hbHNcbiAgICAgIC8vIHRvIFJlYWN0IHRoYXQgdGhlIHNlbGVjdGlvbnMgYXJlIGNvbmNlcHR1YWxseSBlcXVhbCwgYW5kIHdlIGNhbiBiYWlsXG4gICAgICAvLyBvdXQgb2YgcmVuZGVyaW5nLlxuICAgICAgaWYgKGlzRXF1YWwgIT09IHVuZGVmaW5lZCAmJiBpc0VxdWFsKHByZXZTZWxlY3Rpb24sIG5leHRTZWxlY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiBwcmV2U2VsZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBtZW1vaXplZFNuYXBzaG90ID0gbmV4dFNuYXBzaG90O1xuICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBuZXh0U2VsZWN0aW9uO1xuICAgICAgcmV0dXJuIG5leHRTZWxlY3Rpb247XG4gICAgfTsgLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuXG5cbiAgICAvLyBBc3NpZ25pbmcgdGhpcyB0byBhIGNvbnN0YW50IHNvIHRoYXQgRmxvdyBrbm93cyBpdCBjYW4ndCBjaGFuZ2UuXG4gICAgdmFyIG1heWJlR2V0U2VydmVyU25hcHNob3QgPSBnZXRTZXJ2ZXJTbmFwc2hvdCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGdldFNlcnZlclNuYXBzaG90O1xuXG4gICAgdmFyIGdldFNuYXBzaG90V2l0aFNlbGVjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IoZ2V0U25hcHNob3QoKSk7XG4gICAgfTtcblxuICAgIHZhciBnZXRTZXJ2ZXJTbmFwc2hvdFdpdGhTZWxlY3RvciA9IG1heWJlR2V0U2VydmVyU25hcHNob3QgPT09IG51bGwgPyB1bmRlZmluZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihtYXliZUdldFNlcnZlclNuYXBzaG90KCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFtnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciwgZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3JdO1xuICB9LCBbZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90LCBzZWxlY3RvciwgaXNFcXVhbF0pLFxuICAgICAgZ2V0U2VsZWN0aW9uID0gX3VzZU1lbW9bMF0sXG4gICAgICBnZXRTZXJ2ZXJTZWxlY3Rpb24gPSBfdXNlTWVtb1sxXTtcblxuICB2YXIgdmFsdWUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNlbGVjdGlvbiwgZ2V0U2VydmVyU2VsZWN0aW9uKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbnN0Lmhhc1ZhbHVlID0gdHJ1ZTtcbiAgICBpbnN0LnZhbHVlID0gdmFsdWU7XG4gIH0sIFt2YWx1ZV0pO1xuICB1c2VEZWJ1Z1ZhbHVlKHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3I7XG4gICAgICAgICAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO1xufVxuICAgICAgICBcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfbGF5ZXJzX0ltYWdlcnlMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsImZ1bmN0aW9uIHIoZSl7dmFyIHQsZixuPVwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlKW4rPWU7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlpZihBcnJheS5pc0FycmF5KGUpKXt2YXIgbz1lLmxlbmd0aDtmb3IodD0wO3Q8bzt0KyspZVt0XSYmKGY9cihlW3RdKSkmJihuJiYobis9XCIgXCIpLG4rPWYpfWVsc2UgZm9yKGYgaW4gZSllW2ZdJiYobiYmKG4rPVwiIFwiKSxuKz1mKTtyZXR1cm4gbn1leHBvcnQgZnVuY3Rpb24gY2xzeCgpe2Zvcih2YXIgZSx0LGY9MCxuPVwiXCIsbz1hcmd1bWVudHMubGVuZ3RoO2Y8bztmKyspKGU9YXJndW1lbnRzW2ZdKSYmKHQ9cihlKSkmJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBkZWZhdWx0IGNsc3g7IiwiLy8gc3JjL2luZGV4LnRzXG5pbXBvcnQgKiBhcyBSZWFjdDIgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjIgfSBmcm9tIFwidXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qc1wiO1xuXG4vLyBzcmMvdXRpbHMvcmVhY3QudHNcbmltcG9ydCAqIGFzIFJlYWN0T3JpZ2luYWwgZnJvbSBcInJlYWN0XCI7XG52YXIgUmVhY3QgPSAoXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICAvLyBAdHMtaWdub3JlXG4gIFwiZGVmYXVsdFwiIGluIFJlYWN0T3JpZ2luYWwgPyBSZWFjdE9yaWdpbmFsW1wiZGVmYXVsdFwiXSA6IFJlYWN0T3JpZ2luYWxcbik7XG5cbi8vIHNyYy9jb21wb25lbnRzL0NvbnRleHQudHNcbnZhciBDb250ZXh0S2V5ID0gU3ltYm9sLmZvcihgcmVhY3QtcmVkdXgtY29udGV4dGApO1xudmFyIGdUID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogKFxuICAvKiBmYWxsIGJhY2sgdG8gYSBwZXItbW9kdWxlIHNjb3BlIChwcmUtOC4xIGJlaGF2aW91cikgaWYgYGdsb2JhbFRoaXNgIGlzIG5vdCBhdmFpbGFibGUgKi9cbiAge31cbik7XG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICBpZiAoIVJlYWN0LmNyZWF0ZUNvbnRleHQpXG4gICAgcmV0dXJuIHt9O1xuICBjb25zdCBjb250ZXh0TWFwID0gZ1RbQ29udGV4dEtleV0gPz8gKGdUW0NvbnRleHRLZXldID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gIGxldCByZWFsQ29udGV4dCA9IGNvbnRleHRNYXAuZ2V0KFJlYWN0LmNyZWF0ZUNvbnRleHQpO1xuICBpZiAoIXJlYWxDb250ZXh0KSB7XG4gICAgcmVhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgcmVhbENvbnRleHQuZGlzcGxheU5hbWUgPSBcIlJlYWN0UmVkdXhcIjtcbiAgICB9XG4gICAgY29udGV4dE1hcC5zZXQoUmVhY3QuY3JlYXRlQ29udGV4dCwgcmVhbENvbnRleHQpO1xuICB9XG4gIHJldHVybiByZWFsQ29udGV4dDtcbn1cbnZhciBSZWFjdFJlZHV4Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBnZXRDb250ZXh0KCk7XG5cbi8vIHNyYy91dGlscy91c2VTeW5jRXh0ZXJuYWxTdG9yZS50c1xudmFyIG5vdEluaXRpYWxpemVkID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJ1U0VTIG5vdCBpbml0aWFsaXplZCFcIik7XG59O1xuXG4vLyBzcmMvaG9va3MvdXNlUmVkdXhDb250ZXh0LnRzXG5mdW5jdGlvbiBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gdXNlUmVkdXhDb250ZXh0MigpIHtcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KGNvbnRleHQpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWNvbnRleHRWYWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcImNvdWxkIG5vdCBmaW5kIHJlYWN0LXJlZHV4IGNvbnRleHQgdmFsdWU7IHBsZWFzZSBlbnN1cmUgdGhlIGNvbXBvbmVudCBpcyB3cmFwcGVkIGluIGEgPFByb3ZpZGVyPlwiXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICB9O1xufVxudmFyIHVzZVJlZHV4Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVSZWR1eENvbnRleHRIb29rKCk7XG5cbi8vIHNyYy9ob29rcy91c2VTZWxlY3Rvci50c1xudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gbm90SW5pdGlhbGl6ZWQ7XG52YXIgaW5pdGlhbGl6ZVVzZVNlbGVjdG9yID0gKGZuKSA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gZm47XG59O1xudmFyIHJlZkVxdWFsaXR5ID0gKGEsIGIpID0+IGEgPT09IGI7XG5mdW5jdGlvbiBjcmVhdGVTZWxlY3Rvckhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVJlZHV4Q29udGV4dDIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVJlZHV4Q29udGV4dCA6IGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dCk7XG4gIGNvbnN0IHVzZVNlbGVjdG9yMiA9IChzZWxlY3RvciwgZXF1YWxpdHlGbk9yT3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyBlcXVhbGl0eUZuID0gcmVmRXF1YWxpdHksIGRldk1vZGVDaGVja3MgPSB7fSB9ID0gdHlwZW9mIGVxdWFsaXR5Rm5Pck9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIiA/IHsgZXF1YWxpdHlGbjogZXF1YWxpdHlGbk9yT3B0aW9ucyB9IDogZXF1YWxpdHlGbk9yT3B0aW9ucztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yYCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvcmApO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlcXVhbGl0eUZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYW4gZXF1YWxpdHkgZnVuY3Rpb24gdG8gdXNlU2VsZWN0b3JgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgZ2V0U2VydmVyU3RhdGUsXG4gICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVja1xuICAgIH0gPSB1c2VSZWR1eENvbnRleHQyKCk7XG4gICAgY29uc3QgZmlyc3RSdW4gPSBSZWFjdC51c2VSZWYodHJ1ZSk7XG4gICAgY29uc3Qgd3JhcHBlZFNlbGVjdG9yID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgICB7XG4gICAgICAgIFtzZWxlY3Rvci5uYW1lXShzdGF0ZSkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrOiBmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayxcbiAgICAgICAgICAgICAgc3RhYmlsaXR5Q2hlY2s6IGZpbmFsU3RhYmlsaXR5Q2hlY2tcbiAgICAgICAgICAgIH0gPSB7XG4gICAgICAgICAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgICAgICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2ssXG4gICAgICAgICAgICAgIC4uLmRldk1vZGVDaGVja3NcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZmluYWxTdGFiaWxpdHlDaGVjayA9PT0gXCJhbHdheXNcIiB8fCBmaW5hbFN0YWJpbGl0eUNoZWNrID09PSBcIm9uY2VcIiAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRvQ29tcGFyZSA9IHNlbGVjdG9yKHN0YXRlKTtcbiAgICAgICAgICAgICAgaWYgKCFlcXVhbGl0eUZuKHNlbGVjdGVkLCB0b0NvbXBhcmUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAoeyBzdGFjayB9ID0gZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgIFwiU2VsZWN0b3IgXCIgKyAoc2VsZWN0b3IubmFtZSB8fCBcInVua25vd25cIikgKyBcIiByZXR1cm5lZCBhIGRpZmZlcmVudCByZXN1bHQgd2hlbiBjYWxsZWQgd2l0aCB0aGUgc2FtZSBwYXJhbWV0ZXJzLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy5cXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gYSBuZXcgcmVmZXJlbmNlIChzdWNoIGFzIGFuIG9iamVjdCBvciBhbiBhcnJheSkgc2hvdWxkIGJlIG1lbW9pemVkOiBodHRwczovL3JlZHV4LmpzLm9yZy91c2FnZS9kZXJpdmluZy1kYXRhLXNlbGVjdG9ycyNvcHRpbWl6aW5nLXNlbGVjdG9ycy13aXRoLW1lbW9pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQyOiB0b0NvbXBhcmUsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrID09PSBcImFsd2F5c1wiIHx8IGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrID09PSBcIm9uY2VcIiAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhY2sgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICh7IHN0YWNrIH0gPSBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgXCJTZWxlY3RvciBcIiArIChzZWxlY3Rvci5uYW1lIHx8IFwidW5rbm93blwiKSArIFwiIHJldHVybmVkIHRoZSByb290IHN0YXRlIHdoZW4gY2FsbGVkLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy5cXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gdGhlIGVudGlyZSBzdGF0ZSBhcmUgYWxtb3N0IGNlcnRhaW5seSBhIG1pc3Rha2UsIGFzIHRoZXkgd2lsbCBjYXVzZSBhIHJlcmVuZGVyIHdoZW5ldmVyICphbnl0aGluZyogaW4gc3RhdGUgY2hhbmdlcy5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhY2sgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaXJzdFJ1bi5jdXJyZW50KVxuICAgICAgICAgICAgICBmaXJzdFJ1bi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgfVtzZWxlY3Rvci5uYW1lXSxcbiAgICAgIFtzZWxlY3Rvciwgc3RhYmlsaXR5Q2hlY2ssIGRldk1vZGVDaGVja3Muc3RhYmlsaXR5Q2hlY2tdXG4gICAgKTtcbiAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IoXG4gICAgICBzdWJzY3JpcHRpb24uYWRkTmVzdGVkU3ViLFxuICAgICAgc3RvcmUuZ2V0U3RhdGUsXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZSB8fCBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgIHdyYXBwZWRTZWxlY3RvcixcbiAgICAgIGVxdWFsaXR5Rm5cbiAgICApO1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUoc2VsZWN0ZWRTdGF0ZSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkU3RhdGU7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlU2VsZWN0b3IyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VTZWxlY3RvcjJcbiAgfSk7XG4gIHJldHVybiB1c2VTZWxlY3RvcjI7XG59XG52YXIgdXNlU2VsZWN0b3IgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlU2VsZWN0b3JIb29rKCk7XG5cbi8vIHNyYy91dGlscy9yZWFjdC1pcy50c1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpO1xudmFyIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc2VydmVyX2NvbnRleHRcIik7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm9mZnNjcmVlblwiKTtcbnZhciBSRUFDVF9DTElFTlRfUkVGRVJFTkNFID0gU3ltYm9sLmZvcihcInJlYWN0LmNsaWVudC5yZWZlcmVuY2VcIik7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSBcIm9iamVjdFwiICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DTElFTlRfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG9iamVjdC50eXBlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBjb25zdCAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRToge1xuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2b2lkIDA7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuXG4vLyBzcmMvdXRpbHMvd2FybmluZy50c1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbi8vIHNyYy9jb25uZWN0L3ZlcmlmeVN1YnNlbGVjdG9ycy50c1xuZnVuY3Rpb24gdmVyaWZ5KHNlbGVjdG9yLCBtZXRob2ROYW1lKSB7XG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdmFsdWUgZm9yICR7bWV0aG9kTmFtZX0gaW4gY29ubmVjdC5gKTtcbiAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09PSBcIm1hcFN0YXRlVG9Qcm9wc1wiIHx8IG1ldGhvZE5hbWUgPT09IFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWxlY3RvciwgXCJkZXBlbmRzT25Pd25Qcm9wc1wiKSkge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgYFRoZSBzZWxlY3RvciBmb3IgJHttZXRob2ROYW1lfSBvZiBjb25uZWN0IGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy5gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKSB7XG4gIHZlcmlmeShtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpO1xuICB2ZXJpZnkobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKTtcbiAgdmVyaWZ5KG1lcmdlUHJvcHMsIFwibWVyZ2VQcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LnRzXG5mdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIHtcbiAgYXJlU3RhdGVzRXF1YWwsXG4gIGFyZU93blByb3BzRXF1YWwsXG4gIGFyZVN0YXRlUHJvcHNFcXVhbFxufSkge1xuICBsZXQgaGFzUnVuQXRMZWFzdE9uY2UgPSBmYWxzZTtcbiAgbGV0IHN0YXRlO1xuICBsZXQgb3duUHJvcHM7XG4gIGxldCBzdGF0ZVByb3BzO1xuICBsZXQgZGlzcGF0Y2hQcm9wcztcbiAgbGV0IG1lcmdlZFByb3BzO1xuICBmdW5jdGlvbiBoYW5kbGVGaXJzdENhbGwoZmlyc3RTdGF0ZSwgZmlyc3RPd25Qcm9wcykge1xuICAgIHN0YXRlID0gZmlyc3RTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IGZpcnN0T3duUHJvcHM7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIGhhc1J1bkF0TGVhc3RPbmNlID0gdHJ1ZTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpIHtcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wcygpIHtcbiAgICBpZiAobWFwU3RhdGVUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3U3RhdGUoKSB7XG4gICAgY29uc3QgbmV4dFN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpXG4gICAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICBjb25zdCBwcm9wc0NoYW5nZWQgPSAhYXJlT3duUHJvcHNFcXVhbChuZXh0T3duUHJvcHMsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZUNoYW5nZWQgPSAhYXJlU3RhdGVzRXF1YWwoXG4gICAgICBuZXh0U3RhdGUsXG4gICAgICBzdGF0ZSxcbiAgICAgIG5leHRPd25Qcm9wcyxcbiAgICAgIG93blByb3BzXG4gICAgKTtcbiAgICBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IG5leHRPd25Qcm9wcztcbiAgICBpZiAocHJvcHNDaGFuZ2VkICYmIHN0YXRlQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdQcm9wcygpO1xuICAgIGlmIChzdGF0ZUNoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3U3RhdGUoKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIHtcbiAgaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgaW5pdE1lcmdlUHJvcHMsXG4gIC4uLm9wdGlvbnNcbn0pIHtcbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gaW5pdE1hcFN0YXRlVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBjb25zdCBtZXJnZVByb3BzID0gaW5pdE1lcmdlUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKTtcbiAgfVxuICByZXR1cm4gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBvcHRpb25zKTtcbn1cblxuLy8gc3JjL3V0aWxzL2JpbmRBY3Rpb25DcmVhdG9ycy50c1xuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBjb25zdCBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgY29uc3QgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9ICguLi5hcmdzKSA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yKC4uLmFyZ3MpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cbi8vIHNyYy91dGlscy9pc1BsYWluT2JqZWN0LnRzXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiB8fCBvYmogPT09IG51bGwpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICBpZiAocHJvdG8gPT09IG51bGwpXG4gICAgcmV0dXJuIHRydWU7XG4gIGxldCBiYXNlUHJvdG8gPSBwcm90bztcbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pICE9PSBudWxsKSB7XG4gICAgYmFzZVByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90byk7XG4gIH1cbiAgcmV0dXJuIHByb3RvID09PSBiYXNlUHJvdG87XG59XG5cbi8vIHNyYy91dGlscy92ZXJpZnlQbGFpbk9iamVjdC50c1xuZnVuY3Rpb24gdmVyaWZ5UGxhaW5PYmplY3QodmFsdWUsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuaW5nKFxuICAgICAgYCR7bWV0aG9kTmFtZX0oKSBpbiAke2Rpc3BsYXlOYW1lfSBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdC4gSW5zdGVhZCByZWNlaXZlZCAke3ZhbHVlfS5gXG4gICAgKTtcbiAgfVxufVxuXG4vLyBzcmMvY29ubmVjdC93cmFwTWFwVG9Qcm9wcy50c1xuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNDb25zdGFudChnZXRDb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdENvbnN0YW50U2VsZWN0b3IoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBjb25zdGFudCA9IGdldENvbnN0YW50KGRpc3BhdGNoKTtcbiAgICBmdW5jdGlvbiBjb25zdGFudFNlbGVjdG9yKCkge1xuICAgICAgcmV0dXJuIGNvbnN0YW50O1xuICAgIH1cbiAgICBjb25zdGFudFNlbGVjdG9yLmRlcGVuZHNPbk93blByb3BzID0gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnN0YW50U2VsZWN0b3I7XG4gIH07XG59XG5mdW5jdGlvbiBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzID8gQm9vbGVhbihtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSA6IG1hcFRvUHJvcHMubGVuZ3RoICE9PSAxO1xufVxuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLCB7IGRpc3BsYXlOYW1lIH0pIHtcbiAgICBjb25zdCBwcm94eSA9IGZ1bmN0aW9uIG1hcFRvUHJvcHNQcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICByZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPyBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIDogcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIHZvaWQgMCk7XG4gICAgfTtcbiAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IHRydWU7XG4gICAgcHJveHkubWFwVG9Qcm9wcyA9IGZ1bmN0aW9uIGRldGVjdEZhY3RvcnlBbmRWZXJpZnkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IG1hcFRvUHJvcHM7XG4gICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpO1xuICAgICAgbGV0IHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICBpZiAodHlwZW9mIHByb3BzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IHByb3BzO1xuICAgICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKHByb3BzKTtcbiAgICAgICAgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHZlcmlmeVBsYWluT2JqZWN0KHByb3BzLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG59XG5cbi8vIHNyYy9jb25uZWN0L2ludmFsaWRBcmdGYWN0b3J5LnRzXG5mdW5jdGlvbiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShhcmcsIG5hbWUpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgb3B0aW9ucykgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIHZhbHVlIG9mIHR5cGUgJHt0eXBlb2YgYXJnfSBmb3IgJHtuYW1lfSBhcmd1bWVudCB3aGVuIGNvbm5lY3RpbmcgY29tcG9uZW50ICR7b3B0aW9ucy53cmFwcGVkQ29tcG9uZW50TmFtZX0uYFxuICAgICk7XG4gIH07XG59XG5cbi8vIHNyYy9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcy50c1xuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcyAmJiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSBcIm9iamVjdFwiID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChcbiAgICAoZGlzcGF0Y2gpID0+IChcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGJpbmRBY3Rpb25DcmVhdG9ycyhtYXBEaXNwYXRjaFRvUHJvcHMsIGRpc3BhdGNoKVxuICAgIClcbiAgKSA6ICFtYXBEaXNwYXRjaFRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KChkaXNwYXRjaCkgPT4gKHtcbiAgICBkaXNwYXRjaFxuICB9KSkgOiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSBcImZ1bmN0aW9uXCIgPyAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpXG4gICkgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9tYXBTdGF0ZVRvUHJvcHMudHNcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwU3RhdGVUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudCgoKSA9PiAoe30pKSA6IHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIilcbiAgKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L21lcmdlUHJvcHMudHNcbmZ1bmN0aW9uIGRlZmF1bHRNZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gIHJldHVybiB7IC4uLm93blByb3BzLCAuLi5zdGF0ZVByb3BzLCAuLi5kaXNwYXRjaFByb3BzIH07XG59XG5mdW5jdGlvbiB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdE1lcmdlUHJvcHNQcm94eShkaXNwYXRjaCwgeyBkaXNwbGF5TmFtZSwgYXJlTWVyZ2VkUHJvcHNFcXVhbCB9KSB7XG4gICAgbGV0IGhhc1J1bk9uY2UgPSBmYWxzZTtcbiAgICBsZXQgbWVyZ2VkUHJvcHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlUHJvcHNQcm94eShzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAgICAgY29uc3QgbmV4dE1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgICBpZiAoaGFzUnVuT25jZSkge1xuICAgICAgICBpZiAoIWFyZU1lcmdlZFByb3BzRXF1YWwobmV4dE1lcmdlZFByb3BzLCBtZXJnZWRQcm9wcykpXG4gICAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNSdW5PbmNlID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgdmVyaWZ5UGxhaW5PYmplY3QobWVyZ2VkUHJvcHMsIGRpc3BsYXlOYW1lLCBcIm1lcmdlUHJvcHNcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gKCkgPT4gZGVmYXVsdE1lcmdlUHJvcHMgOiB0eXBlb2YgbWVyZ2VQcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWVyZ2VQcm9wcywgXCJtZXJnZVByb3BzXCIpO1xufVxuXG4vLyBzcmMvdXRpbHMvYmF0Y2gudHNcbmZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soKTtcbn1cblxuLy8gc3JjL3V0aWxzL1N1YnNjcmlwdGlvbi50c1xuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICBsZXQgZmlyc3QgPSBudWxsO1xuICBsZXQgbGFzdCA9IG51bGw7XG4gIHJldHVybiB7XG4gICAgY2xlYXIoKSB7XG4gICAgICBmaXJzdCA9IG51bGw7XG4gICAgICBsYXN0ID0gbnVsbDtcbiAgICB9LFxuICAgIG5vdGlmeSgpIHtcbiAgICAgIGRlZmF1bHROb29wQmF0Y2goKCkgPT4ge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcbiAgICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKTtcbiAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0KCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gW107XG4gICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcbiAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgfSxcbiAgICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgIGxldCBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBsYXN0ID0ge1xuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgcHJldjogbGFzdFxuICAgICAgfTtcbiAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3QgPSBsaXN0ZW5lcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgZmlyc3QgPT09IG51bGwpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGxpc3RlbmVyLm5leHQpIHtcbiAgICAgICAgICBsaXN0ZW5lci5uZXh0LnByZXYgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3QgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgICAgbGlzdGVuZXIucHJldi5uZXh0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaXJzdCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxudmFyIG51bGxMaXN0ZW5lcnMgPSB7XG4gIG5vdGlmeSgpIHtcbiAgfSxcbiAgZ2V0OiAoKSA9PiBbXVxufTtcbmZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSwgcGFyZW50U3ViKSB7XG4gIGxldCB1bnN1YnNjcmliZTtcbiAgbGV0IGxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gIGxldCBzdWJzY3JpcHRpb25zQW1vdW50ID0gMDtcbiAgbGV0IHNlbGZTdWJzY3JpYmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGFkZE5lc3RlZFN1YihsaXN0ZW5lcikge1xuICAgIHRyeVN1YnNjcmliZSgpO1xuICAgIGNvbnN0IGNsZWFudXBMaXN0ZW5lciA9IGxpc3RlbmVycy5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghcmVtb3ZlZCkge1xuICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgY2xlYW51cExpc3RlbmVyKCk7XG4gICAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBub3RpZnlOZXN0ZWRTdWJzKCkge1xuICAgIGxpc3RlbmVycy5ub3RpZnkoKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VXcmFwcGVyKCkge1xuICAgIGlmIChzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBzZWxmU3Vic2NyaWJlZDtcbiAgfVxuICBmdW5jdGlvbiB0cnlTdWJzY3JpYmUoKSB7XG4gICAgc3Vic2NyaXB0aW9uc0Ftb3VudCsrO1xuICAgIGlmICghdW5zdWJzY3JpYmUpIHtcbiAgICAgIHVuc3Vic2NyaWJlID0gcGFyZW50U3ViID8gcGFyZW50U3ViLmFkZE5lc3RlZFN1YihoYW5kbGVDaGFuZ2VXcmFwcGVyKSA6IHN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2VXcmFwcGVyKTtcbiAgICAgIGxpc3RlbmVycyA9IGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpIHtcbiAgICBzdWJzY3JpcHRpb25zQW1vdW50LS07XG4gICAgaWYgKHVuc3Vic2NyaWJlICYmIHN1YnNjcmlwdGlvbnNBbW91bnQgPT09IDApIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICB1bnN1YnNjcmliZSA9IHZvaWQgMDtcbiAgICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgbGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5U3Vic2NyaWJlU2VsZigpIHtcbiAgICBpZiAoIXNlbGZTdWJzY3JpYmVkKSB7XG4gICAgICBzZWxmU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICB0cnlTdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmVTZWxmKCkge1xuICAgIGlmIChzZWxmU3Vic2NyaWJlZCkge1xuICAgICAgc2VsZlN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHtcbiAgICBhZGROZXN0ZWRTdWIsXG4gICAgbm90aWZ5TmVzdGVkU3VicyxcbiAgICBoYW5kbGVDaGFuZ2VXcmFwcGVyLFxuICAgIGlzU3Vic2NyaWJlZCxcbiAgICB0cnlTdWJzY3JpYmU6IHRyeVN1YnNjcmliZVNlbGYsXG4gICAgdHJ5VW5zdWJzY3JpYmU6IHRyeVVuc3Vic2NyaWJlU2VsZixcbiAgICBnZXRMaXN0ZW5lcnM6ICgpID0+IGxpc3RlbmVyc1xuICB9O1xuICByZXR1cm4gc3Vic2NyaXB0aW9uO1xufVxuXG4vLyBzcmMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC50c1xudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpO1xudmFyIGlzUmVhY3ROYXRpdmUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSBcIlJlYWN0TmF0aXZlXCI7XG52YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IGNhblVzZURPTSB8fCBpc1JlYWN0TmF0aXZlID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0O1xuXG4vLyBzcmMvdXRpbHMvc2hhbGxvd0VxdWFsLnRzXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKVxuICAgIHJldHVybiB0cnVlO1xuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gXCJvYmplY3RcIiB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIHNyYy91dGlscy9ob2lzdFN0YXRpY3MudHNcbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICQkdHlwZW9mOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICQkdHlwZW9mOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge1xuICBbRm9yd2FyZFJlZl06IEZPUldBUkRfUkVGX1NUQVRJQ1MsXG4gIFtNZW1vXTogTUVNT19TVEFUSUNTXG59O1xuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgaWYgKGlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfVxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFtcIiQkdHlwZW9mXCJdXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgY29uc3QgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIGNvbnN0IHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxuLy8gc3JjL2NvbXBvbmVudHMvY29ubmVjdC50c3hcbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IG5vdEluaXRpYWxpemVkO1xudmFyIGluaXRpYWxpemVDb25uZWN0ID0gKGZuKSA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gZm47XG59O1xudmFyIE5PX1NVQlNDUklQVElPTl9BUlJBWSA9IFtudWxsLCBudWxsXTtcbnZhciBzdHJpbmdpZnlDb21wb25lbnQgPSAoQ29tcCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShDb21wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhDb21wKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhlZmZlY3RGdW5jLCBlZmZlY3RBcmdzLCBkZXBlbmRlbmNpZXMpIHtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiBlZmZlY3RGdW5jKC4uLmVmZmVjdEFyZ3MpLCBkZXBlbmRlbmNpZXMpO1xufVxuZnVuY3Rpb24gY2FwdHVyZVdyYXBwZXJQcm9wcyhsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIHdyYXBwZXJQcm9wcywgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3Vicykge1xuICBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQgPSB3cmFwcGVyUHJvcHM7XG4gIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCkge1xuICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG51bGw7XG4gICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmVVcGRhdGVzKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcywgc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yLCBsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIGlzTW91bnRlZCwgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3VicywgYWRkaXRpb25hbFN1YnNjcmliZUxpc3RlbmVyKSB7XG4gIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgfTtcbiAgbGV0IGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG4gIGxldCBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICBjb25zdCBjaGVja0ZvclVwZGF0ZXMgPSAoKSA9PiB7XG4gICAgaWYgKGRpZFVuc3Vic2NyaWJlIHx8ICFpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYXRlc3RTdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBsZXQgbmV3Q2hpbGRQcm9wcywgZXJyb3I7XG4gICAgdHJ5IHtcbiAgICAgIG5ld0NoaWxkUHJvcHMgPSBjaGlsZFByb3BzU2VsZWN0b3IoXG4gICAgICAgIGxhdGVzdFN0b3JlU3RhdGUsXG4gICAgICAgIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvciA9IGU7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBlO1xuICAgIH1cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICAgIH1cbiAgICBpZiAobmV3Q2hpbGRQcm9wcyA9PT0gbGFzdENoaWxkUHJvcHMuY3VycmVudCkge1xuICAgICAgaWYgKCFyZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50KSB7XG4gICAgICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IHRydWU7XG4gICAgICBhZGRpdGlvbmFsU3Vic2NyaWJlTGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG4gIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gY2hlY2tGb3JVcGRhdGVzO1xuICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gIGNoZWNrRm9yVXBkYXRlcygpO1xuICBjb25zdCB1bnN1YnNjcmliZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcbiAgICBpZiAobGFzdFRocm93bkVycm9yKSB7XG4gICAgICB0aHJvdyBsYXN0VGhyb3duRXJyb3I7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdW5zdWJzY3JpYmVXcmFwcGVyO1xufVxuZnVuY3Rpb24gc3RyaWN0RXF1YWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uID0gZmFsc2U7XG5mdW5jdGlvbiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCB7XG4gIC8vIFRoZSBgcHVyZWAgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQsIHNvIFRTIGRvZXNuJ3QgbGlrZSB1cyBkZXN0cnVjdHVyaW5nIHRoaXMgdG8gY2hlY2sgaXRzIGV4aXN0ZW5jZS5cbiAgLy8gQHRzLWlnbm9yZVxuICBwdXJlLFxuICBhcmVTdGF0ZXNFcXVhbCA9IHN0cmljdEVxdWFsLFxuICBhcmVPd25Qcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIGFyZU1lcmdlZFByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIC8vIHVzZSBSZWFjdCdzIGZvcndhcmRSZWYgdG8gZXhwb3NlIGEgcmVmIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudFxuICBmb3J3YXJkUmVmID0gZmFsc2UsXG4gIC8vIHRoZSBjb250ZXh0IGNvbnN1bWVyIHRvIHVzZVxuICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHRcbn0gPSB7fSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHB1cmUgIT09IHZvaWQgMCAmJiAhaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbikge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbiA9IHRydWU7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICAnVGhlIGBwdXJlYCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZC4gYGNvbm5lY3RgIGlzIG5vdyBhbHdheXMgYSBcInB1cmUvbWVtb2l6ZWRcIiBjb21wb25lbnQnXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjb25zdCBDb250ZXh0ID0gY29udGV4dDtcbiAgY29uc3QgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKTtcbiAgY29uc3QgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzKTtcbiAgY29uc3QgaW5pdE1lcmdlUHJvcHMgPSBtZXJnZVByb3BzRmFjdG9yeShtZXJnZVByb3BzKTtcbiAgY29uc3Qgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzID0gQm9vbGVhbihtYXBTdGF0ZVRvUHJvcHMpO1xuICBjb25zdCB3cmFwV2l0aENvbm5lY3QgPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSAvKiBAX19QVVJFX18gKi8gaXNWYWxpZEVsZW1lbnRUeXBlKFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgaWYgKCFpc1ZhbGlkKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFlvdSBtdXN0IHBhc3MgYSBjb21wb25lbnQgdG8gdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGNvbm5lY3QuIEluc3RlYWQgcmVjZWl2ZWQgJHtzdHJpbmdpZnlDb21wb25lbnQoXG4gICAgICAgICAgICBXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgKX1gXG4gICAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID0gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgXCJDb21wb25lbnRcIjtcbiAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGBDb25uZWN0KCR7d3JhcHBlZENvbXBvbmVudE5hbWV9KWA7XG4gICAgY29uc3Qgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IHtcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIGRpc3BsYXlOYW1lLFxuICAgICAgd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50LFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wcyxcbiAgICAgIGFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIENvbm5lY3RGdW5jdGlvbihwcm9wcykge1xuICAgICAgY29uc3QgW3Byb3BzQ29udGV4dCwgcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgd3JhcHBlclByb3BzXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYyLCAuLi53cmFwcGVyUHJvcHMyIH0gPSBwcm9wcztcbiAgICAgICAgcmV0dXJuIFtwcm9wcy5jb250ZXh0LCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmMiwgd3JhcHBlclByb3BzMl07XG4gICAgICB9LCBbcHJvcHNdKTtcbiAgICAgIGNvbnN0IENvbnRleHRUb1VzZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBsZXQgUmVzdWx0Q29udGV4dCA9IENvbnRleHQ7XG4gICAgICAgIGlmIChwcm9wc0NvbnRleHQ/LkNvbnN1bWVyKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IC8qIEBfX1BVUkVfXyAqLyBpc0NvbnRleHRDb25zdW1lcihcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wc0NvbnRleHQuQ29uc3VtZXIsIG51bGwpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBcIllvdSBtdXN0IHBhc3MgYSB2YWxpZCBSZWFjdCBjb250ZXh0IGNvbnN1bWVyIGFzIGBwcm9wcy5jb250ZXh0YFwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZXN1bHRDb250ZXh0ID0gcHJvcHNDb250ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVzdWx0Q29udGV4dDtcbiAgICAgIH0sIFtwcm9wc0NvbnRleHQsIENvbnRleHRdKTtcbiAgICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dFRvVXNlKTtcbiAgICAgIGNvbnN0IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA9IEJvb2xlYW4ocHJvcHMuc3RvcmUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZ2V0U3RhdGUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgY29uc3QgZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPSBCb29sZWFuKGNvbnRleHRWYWx1ZSkgJiYgQm9vbGVhbihjb250ZXh0VmFsdWUuc3RvcmUpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhZGlkU3RvcmVDb21lRnJvbVByb3BzICYmICFkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENvdWxkIG5vdCBmaW5kIFwic3RvcmVcIiBpbiB0aGUgY29udGV4dCBvZiBcIiR7ZGlzcGxheU5hbWV9XCIuIEVpdGhlciB3cmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhIDxQcm92aWRlcj4sIG9yIHBhc3MgYSBjdXN0b20gUmVhY3QgY29udGV4dCBwcm92aWRlciB0byA8UHJvdmlkZXI+IGFuZCB0aGUgY29ycmVzcG9uZGluZyBSZWFjdCBjb250ZXh0IGNvbnN1bWVyIHRvICR7ZGlzcGxheU5hbWV9IGluIGNvbm5lY3Qgb3B0aW9ucy5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBzdG9yZSA9IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHByb3BzLnN0b3JlIDogY29udGV4dFZhbHVlLnN0b3JlO1xuICAgICAgY29uc3QgZ2V0U2VydmVyU3RhdGUgPSBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA/IGNvbnRleHRWYWx1ZS5nZXRTZXJ2ZXJTdGF0ZSA6IHN0b3JlLmdldFN0YXRlO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc1NlbGVjdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiBmaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KHN0b3JlLmRpc3BhdGNoLCBzZWxlY3RvckZhY3RvcnlPcHRpb25zKTtcbiAgICAgIH0sIFtzdG9yZV0pO1xuICAgICAgY29uc3QgW3N1YnNjcmlwdGlvbiwgbm90aWZ5TmVzdGVkU3Vic10gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpXG4gICAgICAgICAgcmV0dXJuIE5PX1NVQlNDUklQVElPTl9BUlJBWTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uMiA9IGNyZWF0ZVN1YnNjcmlwdGlvbihcbiAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyB2b2lkIDAgOiBjb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5vdGlmeU5lc3RlZFN1YnMyID0gc3Vic2NyaXB0aW9uMi5ub3RpZnlOZXN0ZWRTdWJzLmJpbmQoc3Vic2NyaXB0aW9uMik7XG4gICAgICAgIHJldHVybiBbc3Vic2NyaXB0aW9uMiwgbm90aWZ5TmVzdGVkU3ViczJdO1xuICAgICAgfSwgW3N0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZV0pO1xuICAgICAgY29uc3Qgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoZGlkU3RvcmVDb21lRnJvbVByb3BzKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmNvbnRleHRWYWx1ZSxcbiAgICAgICAgICBzdWJzY3JpcHRpb25cbiAgICAgICAgfTtcbiAgICAgIH0sIFtkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZSwgc3Vic2NyaXB0aW9uXSk7XG4gICAgICBjb25zdCBsYXN0Q2hpbGRQcm9wcyA9IFJlYWN0LnVzZVJlZih2b2lkIDApO1xuICAgICAgY29uc3QgbGFzdFdyYXBwZXJQcm9wcyA9IFJlYWN0LnVzZVJlZih3cmFwcGVyUHJvcHMpO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSA9IFJlYWN0LnVzZVJlZih2b2lkIDApO1xuICAgICAgY29uc3QgcmVuZGVySXNTY2hlZHVsZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgICAgY29uc3QgaXNNb3VudGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICAgIGNvbnN0IGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IgPSBSZWFjdC51c2VSZWYoXG4gICAgICAgIHZvaWQgMFxuICAgICAgKTtcbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFtdKTtcbiAgICAgIGNvbnN0IGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ICYmIHdyYXBwZXJQcm9wcyA9PT0gbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc1NlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHdyYXBwZXJQcm9wcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgIH0sIFtzdG9yZSwgd3JhcHBlclByb3BzXSk7XG4gICAgICBjb25zdCBzdWJzY3JpYmVGb3JSZWFjdCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmUgPSAocmVhY3RMaXN0ZW5lcikgPT4ge1xuICAgICAgICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN1YnNjcmliZVVwZGF0ZXMoXG4gICAgICAgICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNoaWxkUHJvcHNTZWxlY3RvcixcbiAgICAgICAgICAgIGxhc3RXcmFwcGVyUHJvcHMsXG4gICAgICAgICAgICBsYXN0Q2hpbGRQcm9wcyxcbiAgICAgICAgICAgIHJlbmRlcklzU2NoZWR1bGVkLFxuICAgICAgICAgICAgaXNNb3VudGVkLFxuICAgICAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSxcbiAgICAgICAgICAgIG5vdGlmeU5lc3RlZFN1YnMsXG4gICAgICAgICAgICByZWFjdExpc3RlbmVyXG4gICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZTtcbiAgICAgIH0sIFtzdWJzY3JpcHRpb25dKTtcbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhjYXB0dXJlV3JhcHBlclByb3BzLCBbXG4gICAgICAgIGxhc3RXcmFwcGVyUHJvcHMsXG4gICAgICAgIGxhc3RDaGlsZFByb3BzLFxuICAgICAgICByZW5kZXJJc1NjaGVkdWxlZCxcbiAgICAgICAgd3JhcHBlclByb3BzLFxuICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLFxuICAgICAgICBub3RpZnlOZXN0ZWRTdWJzXG4gICAgICBdKTtcbiAgICAgIGxldCBhY3R1YWxDaGlsZFByb3BzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYWN0dWFsQ2hpbGRQcm9wcyA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKFxuICAgICAgICAgIC8vIFRPRE8gV2UncmUgcGFzc2luZyB0aHJvdWdoIGEgYmlnIHdyYXBwZXIgdGhhdCBkb2VzIGEgYnVuY2ggb2YgZXh0cmEgc2lkZSBlZmZlY3RzIGJlc2lkZXMgc3Vic2NyaWJpbmdcbiAgICAgICAgICBzdWJzY3JpYmVGb3JSZWFjdCxcbiAgICAgICAgICAvLyBUT0RPIFRoaXMgaXMgaW5jcmVkaWJseSBoYWNreS4gV2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgdGhlIHN0b3JlIHVwZGF0ZSBhbmQgY2FsY3VsYXRlZCBuZXcgY2hpbGQgcHJvcHMsXG4gICAgICAgICAgLy8gVE9ETyBhbmQgd2UncmUganVzdCBwYXNzaW5nIHRoYXQgdGhyb3VnaCBzbyBpdCB0cmlnZ2VycyBhIHJlLXJlbmRlciBmb3IgdXMgcmF0aGVyIHRoYW4gcmVseWluZyBvbiBgdVNFU2AuXG4gICAgICAgICAgYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yLFxuICAgICAgICAgIGdldFNlcnZlclN0YXRlID8gKCkgPT4gY2hpbGRQcm9wc1NlbGVjdG9yKGdldFNlcnZlclN0YXRlKCksIHdyYXBwZXJQcm9wcykgOiBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3JcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAobGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50KSB7XG4gICAgICAgICAgO1xuICAgICAgICAgIGVyci5tZXNzYWdlICs9IGBcblRoZSBlcnJvciBtYXkgYmUgY29ycmVsYXRlZCB3aXRoIHRoaXMgcHJldmlvdXMgZXJyb3I6XG4ke2xhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudC5zdGFja31cblxuYDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gdm9pZCAwO1xuICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSB2b2lkIDA7XG4gICAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBhY3R1YWxDaGlsZFByb3BzO1xuICAgICAgfSk7XG4gICAgICBjb25zdCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBXcmFwcGVkQ29tcG9uZW50LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5hY3R1YWxDaGlsZFByb3BzLFxuICAgICAgICAgICAgICByZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9LCBbcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgV3JhcHBlZENvbXBvbmVudCwgYWN0dWFsQ2hpbGRQcm9wc10pO1xuICAgICAgY29uc3QgcmVuZGVyZWRDaGlsZCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHRUb1VzZS5Qcm92aWRlciwgeyB2YWx1ZTogb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZSB9LCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICB9LCBbQ29udGV4dFRvVXNlLCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQsIG92ZXJyaWRkZW5Db250ZXh0VmFsdWVdKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkO1xuICAgIH1cbiAgICBjb25zdCBfQ29ubmVjdCA9IFJlYWN0Lm1lbW8oQ29ubmVjdEZ1bmN0aW9uKTtcbiAgICBjb25zdCBDb25uZWN0ID0gX0Nvbm5lY3Q7XG4gICAgQ29ubmVjdC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICBDb25uZWN0LmRpc3BsYXlOYW1lID0gQ29ubmVjdEZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgaWYgKGZvcndhcmRSZWYpIHtcbiAgICAgIGNvbnN0IF9mb3J3YXJkZWQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAgICAgICBmdW5jdGlvbiBmb3J3YXJkQ29ubmVjdFJlZihwcm9wcywgcmVmKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbm5lY3QsIHsgLi4ucHJvcHMsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlZiB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGZvcndhcmRlZCA9IF9mb3J3YXJkZWQ7XG4gICAgICBmb3J3YXJkZWQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgIGZvcndhcmRlZC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaG9pc3ROb25SZWFjdFN0YXRpY3MoZm9yd2FyZGVkLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBob2lzdE5vblJlYWN0U3RhdGljcyhDb25uZWN0LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcbiAgcmV0dXJuIHdyYXBXaXRoQ29ubmVjdDtcbn1cbnZhciBjb25uZWN0X2RlZmF1bHQgPSBjb25uZWN0O1xuXG4vLyBzcmMvY29tcG9uZW50cy9Qcm92aWRlci50c3hcbmZ1bmN0aW9uIFByb3ZpZGVyKHtcbiAgc3RvcmUsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICBzZXJ2ZXJTdGF0ZSxcbiAgc3RhYmlsaXR5Q2hlY2sgPSBcIm9uY2VcIixcbiAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrID0gXCJvbmNlXCJcbn0pIHtcbiAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZTogc2VydmVyU3RhdGUgPyAoKSA9PiBzZXJ2ZXJTdGF0ZSA6IHZvaWQgMCxcbiAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrXG4gICAgfTtcbiAgfSwgW3N0b3JlLCBzZXJ2ZXJTdGF0ZSwgc3RhYmlsaXR5Q2hlY2ssIGlkZW50aXR5RnVuY3Rpb25DaGVja10pO1xuICBjb25zdCBwcmV2aW91c1N0YXRlID0gUmVhY3QudXNlTWVtbygoKSA9PiBzdG9yZS5nZXRTdGF0ZSgpLCBbc3RvcmVdKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBzdWJzY3JpcHRpb24gfSA9IGNvbnRleHRWYWx1ZTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgICBpZiAocHJldmlvdXNTdGF0ZSAhPT0gc3RvcmUuZ2V0U3RhdGUoKSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSB2b2lkIDA7XG4gICAgfTtcbiAgfSwgW2NvbnRleHRWYWx1ZSwgcHJldmlvdXNTdGF0ZV0pO1xuICBjb25zdCBDb250ZXh0ID0gY29udGV4dCB8fCBSZWFjdFJlZHV4Q29udGV4dDtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbnRleHRWYWx1ZSB9LCBjaGlsZHJlbik7XG59XG52YXIgUHJvdmlkZXJfZGVmYXVsdCA9IFByb3ZpZGVyO1xuXG4vLyBzcmMvaG9va3MvdXNlU3RvcmUudHNcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlUmVkdXhDb250ZXh0MiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlUmVkdXhDb250ZXh0IDogKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQpXG4gICk7XG4gIGNvbnN0IHVzZVN0b3JlMiA9ICgpID0+IHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB1c2VSZWR1eENvbnRleHQyKCk7XG4gICAgcmV0dXJuIHN0b3JlO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZVN0b3JlMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlU3RvcmUyXG4gIH0pO1xuICByZXR1cm4gdXNlU3RvcmUyO1xufVxudmFyIHVzZVN0b3JlID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVN0b3JlSG9vaygpO1xuXG4vLyBzcmMvaG9va3MvdXNlRGlzcGF0Y2gudHNcbmZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlU3RvcmUyID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VTdG9yZSA6IGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0KTtcbiAgY29uc3QgdXNlRGlzcGF0Y2gyID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUyKCk7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZURpc3BhdGNoMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlRGlzcGF0Y2gyXG4gIH0pO1xuICByZXR1cm4gdXNlRGlzcGF0Y2gyO1xufVxudmFyIHVzZURpc3BhdGNoID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZURpc3BhdGNoSG9vaygpO1xuXG4vLyBzcmMvZXhwb3J0cy50c1xudmFyIGJhdGNoID0gZGVmYXVsdE5vb3BCYXRjaDtcblxuLy8gc3JjL2luZGV4LnRzXG5pbml0aWFsaXplVXNlU2VsZWN0b3IodXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IyKTtcbmluaXRpYWxpemVDb25uZWN0KFJlYWN0Mi51c2VTeW5jRXh0ZXJuYWxTdG9yZSk7XG5leHBvcnQge1xuICBQcm92aWRlcl9kZWZhdWx0IGFzIFByb3ZpZGVyLFxuICBSZWFjdFJlZHV4Q29udGV4dCxcbiAgYmF0Y2gsXG4gIGNvbm5lY3RfZGVmYXVsdCBhcyBjb25uZWN0LFxuICBjcmVhdGVEaXNwYXRjaEhvb2ssXG4gIGNyZWF0ZVNlbGVjdG9ySG9vayxcbiAgY3JlYXRlU3RvcmVIb29rLFxuICBzaGFsbG93RXF1YWwsXG4gIHVzZURpc3BhdGNoLFxuICB1c2VTZWxlY3RvcixcbiAgdXNlU3RvcmVcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1yZWR1eC5tanMubWFwIiwiXCJ1c2UgY2xpZW50XCI7XG5mdW5jdGlvbiBNdCh0KXtpZighdHx8dHlwZW9mIGRvY3VtZW50PT1cInVuZGVmaW5lZFwiKXJldHVybjtsZXQgbz1kb2N1bWVudC5oZWFkfHxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0sZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7ZS50eXBlPVwidGV4dC9jc3NcIixvLmZpcnN0Q2hpbGQ/by5pbnNlcnRCZWZvcmUoZSxvLmZpcnN0Q2hpbGQpOm8uYXBwZW5kQ2hpbGQoZSksZS5zdHlsZVNoZWV0P2Uuc3R5bGVTaGVldC5jc3NUZXh0PXQ6ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KSl9TXQoYDpyb290ey0tdG9hc3RpZnktY29sb3ItbGlnaHQ6ICNmZmY7LS10b2FzdGlmeS1jb2xvci1kYXJrOiAjMTIxMjEyOy0tdG9hc3RpZnktY29sb3ItaW5mbzogIzM0OThkYjstLXRvYXN0aWZ5LWNvbG9yLXN1Y2Nlc3M6ICMwN2JjMGM7LS10b2FzdGlmeS1jb2xvci13YXJuaW5nOiAjZjFjNDBmOy0tdG9hc3RpZnktY29sb3ItZXJyb3I6IGhzbCg2LCA3OCUsIDU3JSk7LS10b2FzdGlmeS1jb2xvci10cmFuc3BhcmVudDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNyk7LS10b2FzdGlmeS1pY29uLWNvbG9yLWluZm86IHZhcigtLXRvYXN0aWZ5LWNvbG9yLWluZm8pOy0tdG9hc3RpZnktaWNvbi1jb2xvci1zdWNjZXNzOiB2YXIoLS10b2FzdGlmeS1jb2xvci1zdWNjZXNzKTstLXRvYXN0aWZ5LWljb24tY29sb3Itd2FybmluZzogdmFyKC0tdG9hc3RpZnktY29sb3Itd2FybmluZyk7LS10b2FzdGlmeS1pY29uLWNvbG9yLWVycm9yOiB2YXIoLS10b2FzdGlmeS1jb2xvci1lcnJvcik7LS10b2FzdGlmeS1jb250YWluZXItd2lkdGg6IGZpdC1jb250ZW50Oy0tdG9hc3RpZnktdG9hc3Qtd2lkdGg6IDMyMHB4Oy0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0OiAxNnB4Oy0tdG9hc3RpZnktdG9hc3QtdG9wOiBtYXgodmFyKC0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0KSwgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTstLXRvYXN0aWZ5LXRvYXN0LXJpZ2h0OiBtYXgodmFyKC0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0KSwgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpOy0tdG9hc3RpZnktdG9hc3QtbGVmdDogbWF4KHZhcigtLXRvYXN0aWZ5LXRvYXN0LW9mZnNldCksIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkpOy0tdG9hc3RpZnktdG9hc3QtYm90dG9tOiBtYXgodmFyKC0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0KSwgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTstLXRvYXN0aWZ5LXRvYXN0LWJhY2tncm91bmQ6ICNmZmY7LS10b2FzdGlmeS10b2FzdC1wYWRkaW5nOiAxNHB4Oy0tdG9hc3RpZnktdG9hc3QtbWluLWhlaWdodDogNjRweDstLXRvYXN0aWZ5LXRvYXN0LW1heC1oZWlnaHQ6IDgwMHB4Oy0tdG9hc3RpZnktdG9hc3QtYmQtcmFkaXVzOiA2cHg7LS10b2FzdGlmeS10b2FzdC1zaGFkb3c6IDBweCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIC4xKTstLXRvYXN0aWZ5LWZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOy0tdG9hc3RpZnktei1pbmRleDogOTk5OTstLXRvYXN0aWZ5LXRleHQtY29sb3ItbGlnaHQ6ICM3NTc1NzU7LS10b2FzdGlmeS10ZXh0LWNvbG9yLWRhcms6ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLWluZm86ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLXN1Y2Nlc3M6ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLXdhcm5pbmc6ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLWVycm9yOiAjZmZmOy0tdG9hc3RpZnktc3Bpbm5lci1jb2xvcjogIzYxNjE2MTstLXRvYXN0aWZ5LXNwaW5uZXItY29sb3ItZW1wdHktYXJlYTogI2UwZTBlMDstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWxpZ2h0OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0Y2Q5NjQsICM1YWM4ZmEsICMwMDdhZmYsICMzNGFhZGMsICM1ODU2ZDYsICNmZjJkNTUpOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtZGFyazogI2JiODZmYzstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWluZm86IHZhcigtLXRvYXN0aWZ5LWNvbG9yLWluZm8pOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3Mtc3VjY2VzczogdmFyKC0tdG9hc3RpZnktY29sb3Itc3VjY2Vzcyk7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy13YXJuaW5nOiB2YXIoLS10b2FzdGlmeS1jb2xvci13YXJuaW5nKTstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWVycm9yOiB2YXIoLS10b2FzdGlmeS1jb2xvci1lcnJvcik7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1iZ286IC4yfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVye3otaW5kZXg6dmFyKC0tdG9hc3RpZnktei1pbmRleCk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLHZhcigtLXRvYXN0aWZ5LXotaW5kZXgpKTtwb3NpdGlvbjpmaXhlZDt3aWR0aDp2YXIoLS10b2FzdGlmeS1jb250YWluZXItd2lkdGgpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjojZmZmO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1sZWZ0e3RvcDp2YXIoLS10b2FzdGlmeS10b2FzdC10b3ApO2xlZnQ6dmFyKC0tdG9hc3RpZnktdG9hc3QtbGVmdCl9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1jZW50ZXJ7dG9wOnZhcigtLXRvYXN0aWZ5LXRvYXN0LXRvcCk7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKTthbGlnbi1pdGVtczpjZW50ZXJ9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1yaWdodHt0b3A6dmFyKC0tdG9hc3RpZnktdG9hc3QtdG9wKTtyaWdodDp2YXIoLS10b2FzdGlmeS10b2FzdC1yaWdodCk7YWxpZ24taXRlbXM6ZW5kfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tbGVmdHtib3R0b206dmFyKC0tdG9hc3RpZnktdG9hc3QtYm90dG9tKTtsZWZ0OnZhcigtLXRvYXN0aWZ5LXRvYXN0LWxlZnQpfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tY2VudGVye2JvdHRvbTp2YXIoLS10b2FzdGlmeS10b2FzdC1ib3R0b20pO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7YWxpZ24taXRlbXM6Y2VudGVyfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tcmlnaHR7Ym90dG9tOnZhcigtLXRvYXN0aWZ5LXRvYXN0LWJvdHRvbSk7cmlnaHQ6dmFyKC0tdG9hc3RpZnktdG9hc3QtcmlnaHQpO2FsaWduLWl0ZW1zOmVuZH0uVG9hc3RpZnlfX3RvYXN0ey0teTogMDtwb3NpdGlvbjpyZWxhdGl2ZTt0b3VjaC1hY3Rpb246bm9uZTt3aWR0aDp2YXIoLS10b2FzdGlmeS10b2FzdC13aWR0aCk7bWluLWhlaWdodDp2YXIoLS10b2FzdGlmeS10b2FzdC1taW4taGVpZ2h0KTtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luLWJvdHRvbToxcmVtO3BhZGRpbmc6dmFyKC0tdG9hc3RpZnktdG9hc3QtcGFkZGluZyk7Ym9yZGVyLXJhZGl1czp2YXIoLS10b2FzdGlmeS10b2FzdC1iZC1yYWRpdXMpO2JveC1zaGFkb3c6dmFyKC0tdG9hc3RpZnktdG9hc3Qtc2hhZG93KTttYXgtaGVpZ2h0OnZhcigtLXRvYXN0aWZ5LXRvYXN0LW1heC1oZWlnaHQpO2ZvbnQtZmFtaWx5OnZhcigtLXRvYXN0aWZ5LWZvbnQtZmFtaWx5KTt6LWluZGV4OjA7ZGlzcGxheTpmbGV4O2ZsZXg6MSBhdXRvO2FsaWduLWl0ZW1zOmNlbnRlcjt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXJ7d2lkdGg6MTAwdnc7bGVmdDplbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO21hcmdpbjowfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS10b3AtbGVmdCwuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLWNlbnRlciwuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLXJpZ2h0e3RvcDplbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tYm90dG9tLWxlZnQsLlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1jZW50ZXIsLlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1yaWdodHtib3R0b206ZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXJ0bHtyaWdodDplbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtsZWZ0OmluaXRpYWx9LlRvYXN0aWZ5X190b2FzdHstLXRvYXN0aWZ5LXRvYXN0LXdpZHRoOiAxMDAlO21hcmdpbi1ib3R0b206MDtib3JkZXItcmFkaXVzOjB9fS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyW2RhdGEtc3RhY2tlZD10cnVlXXt3aWR0aDp2YXIoLS10b2FzdGlmeS10b2FzdC13aWR0aCl9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApIHNjYWxlKHZhcigtLXMpKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3N9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLWNvbGxhcHNlZF0gLlRvYXN0aWZ5X190b2FzdC1ib2R5LC5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1jb2xsYXBzZWRdIC5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9ue3RyYW5zaXRpb246b3BhY2l0eSAuMXN9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLWNvbGxhcHNlZD1mYWxzZV17b3ZlcmZsb3c6dmlzaWJsZX0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtY29sbGFwc2VkPXRydWVdOm5vdCg6bGFzdC1jaGlsZCk+KntvcGFjaXR5OjB9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDphZnRlcntjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OmNhbGModmFyKC0tZykgKiAxcHgpO2JvdHRvbToxMDAlfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1wb3M9dG9wXXt0b3A6MH0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtcG9zPWJvdF17Ym90dG9tOjB9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLXBvcz1ib3RdLlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDpiZWZvcmV7dHJhbnNmb3JtLW9yaWdpbjp0b3B9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLXBvcz10b3BdLlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDpiZWZvcmV7dHJhbnNmb3JtLW9yaWdpbjpib3R0b219LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2hlaWdodDoxMDAlO3RyYW5zZm9ybTpzY2FsZVkoMyk7ei1pbmRleDotMX0uVG9hc3RpZnlfX3RvYXN0LS1ydGx7ZGlyZWN0aW9uOnJ0bH0uVG9hc3RpZnlfX3RvYXN0LS1jbG9zZS1vbi1jbGlja3tjdXJzb3I6cG9pbnRlcn0uVG9hc3RpZnlfX3RvYXN0LWljb257bWFyZ2luLWlubGluZS1lbmQ6MTBweDt3aWR0aDoyMnB4O2ZsZXgtc2hyaW5rOjA7ZGlzcGxheTpmbGV4fS5Ub2FzdGlmeS0tYW5pbWF0ZXthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOi41c30uVG9hc3RpZnktLWFuaW1hdGUtaWNvbnthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOi4zc30uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1kYXJre2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItZGFyayk7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci1kYXJrKX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1saWdodCwuVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0tZGVmYXVsdHtiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLWxpZ2h0KTtjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLWxpZ2h0KX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0taW5mb3tjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLWluZm8pO2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItaW5mbyl9LlRvYXN0aWZ5X190b2FzdC10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fdG9hc3QtLXN1Y2Nlc3N7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci1zdWNjZXNzKTtiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXN1Y2Nlc3MpfS5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3RvYXN0LS13YXJuaW5ne2NvbG9yOnZhcigtLXRvYXN0aWZ5LXRleHQtY29sb3Itd2FybmluZyk7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci13YXJuaW5nKX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0tZXJyb3J7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci1lcnJvcik7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1lcnJvcil9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWxpZ2h0e2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtbGlnaHQpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1kYXJre2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtZGFyayl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWluZm97YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1pbmZvKX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tc3VjY2Vzc3tiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLXN1Y2Nlc3MpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13YXJuaW5ne2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3Mtd2FybmluZyl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWVycm9ye2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtZXJyb3IpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWluZm8sLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tc3VjY2VzcywuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13YXJuaW5nLC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWVycm9ye2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItdHJhbnNwYXJlbnQpfS5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9ue2NvbG9yOiNmZmY7cG9zaXRpb246YWJzb2x1dGU7dG9wOjZweDtyaWdodDo2cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtvdXRsaW5lOm5vbmU7Ym9yZGVyOm5vbmU7cGFkZGluZzowO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6Ljc7dHJhbnNpdGlvbjouM3MgZWFzZTt6LWluZGV4OjF9LlRvYXN0aWZ5X190b2FzdC0tcnRsIC5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9ue2xlZnQ6NnB4O3JpZ2h0OnVuc2V0fS5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uLS1saWdodHtjb2xvcjojMDAwO29wYWNpdHk6LjN9LlRvYXN0aWZ5X19jbG9zZS1idXR0b24+c3Zne2ZpbGw6Y3VycmVudENvbG9yO2hlaWdodDoxNnB4O3dpZHRoOjE0cHh9LlRvYXN0aWZ5X19jbG9zZS1idXR0b246aG92ZXIsLlRvYXN0aWZ5X19jbG9zZS1idXR0b246Zm9jdXN7b3BhY2l0eToxfUBrZXlmcmFtZXMgVG9hc3RpZnlfX3RyYWNrUHJvZ3Jlc3N7MCV7dHJhbnNmb3JtOnNjYWxlWCgxKX10b3t0cmFuc2Zvcm06c2NhbGVYKDApfX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjE7b3BhY2l0eTouNzt0cmFuc2Zvcm0tb3JpZ2luOmxlZnR9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWFuaW1hdGVke2FuaW1hdGlvbjpUb2FzdGlmeV9fdHJhY2tQcm9ncmVzcyBsaW5lYXIgMSBmb3J3YXJkc30uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tY29udHJvbGxlZHt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnN9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXJ0bHtyaWdodDowO2xlZnQ6aW5pdGlhbDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6aW5pdGlhbH0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0td3Jwe3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OmhpZGRlbjtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6NXB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tdG9hc3RpZnktdG9hc3QtYmQtcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS10b2FzdGlmeS10b2FzdC1iZC1yYWRpdXMpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13cnBbZGF0YS1oaWRkZW49dHJ1ZV17b3BhY2l0eTowfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1iZ3tvcGFjaXR5OnZhcigtLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWJnbyk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uVG9hc3RpZnlfX3NwaW5uZXJ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjJweCBzb2xpZDtib3JkZXItcmFkaXVzOjEwMCU7Ym9yZGVyLWNvbG9yOnZhcigtLXRvYXN0aWZ5LXNwaW5uZXItY29sb3ItZW1wdHktYXJlYSk7Ym9yZGVyLXJpZ2h0LWNvbG9yOnZhcigtLXRvYXN0aWZ5LXNwaW5uZXItY29sb3IpO2FuaW1hdGlvbjpUb2FzdGlmeV9fc3BpbiAuNjVzIGxpbmVhciBpbmZpbml0ZX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VJblJpZ2h0ezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMDAwcHgsMCwwKX02MCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjVweCwwLDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTVweCwwLDApfXRve3RyYW5zZm9ybTpub25lfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXRSaWdodHsyMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjBweCx2YXIoLS15KSwwKX10b3tvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlSW5MZWZ0ezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMzAwMHB4LDAsMCl9NjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjVweCwwLDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDVweCwwLDApfXRve3RyYW5zZm9ybTpub25lfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXRMZWZ0ezIwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwcHgsdmFyKC0teSksMCl9dG97b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VJblVwezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDMwMDBweCwwKX02MCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMHB4LDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMHB4LDApfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNXB4LDApfXRve3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXRVcHsyMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYyh2YXIoLS15KSAtIDEwcHgpLDApfTQwJSw0NSV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLGNhbGModmFyKC0teSkgKyAyMHB4KSwwKX10b3tvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlSW5Eb3duezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0zMDAwcHgsMCl9NjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyNXB4LDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApfXRve3RyYW5zZm9ybTpub25lfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXREb3duezIwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKHZhcigtLXkpIC0gMTBweCksMCl9NDAlLDQ1JXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYyh2YXIoLS15KSArIDIwcHgpLDApfXRve29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMDAwcHgsMCl9fS5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS10b3AtbGVmdCwuVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tYm90dG9tLWxlZnR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZUluTGVmdH0uVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tdG9wLXJpZ2h0LC5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS1ib3R0b20tcmlnaHR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZUluUmlnaHR9LlRvYXN0aWZ5X19ib3VuY2UtZW50ZXItLXRvcC1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZUluRG93bn0uVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tYm90dG9tLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlSW5VcH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS10b3AtbGVmdCwuVG9hc3RpZnlfX2JvdW5jZS1leGl0LS1ib3R0b20tbGVmdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlT3V0TGVmdH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS10b3AtcmlnaHQsLlRvYXN0aWZ5X19ib3VuY2UtZXhpdC0tYm90dG9tLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VPdXRSaWdodH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS10b3AtY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VPdXRVcH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS1ib3R0b20tY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VPdXREb3dufUBrZXlmcmFtZXMgVG9hc3RpZnlfX3pvb21JbnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfTUwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3pvb21PdXR7MCV7b3BhY2l0eToxfTUwJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCkgc2NhbGUzZCguMywuMywuMyl9dG97b3BhY2l0eTowfX0uVG9hc3RpZnlfX3pvb20tZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3pvb21Jbn0uVG9hc3RpZnlfX3pvb20tZXhpdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fem9vbU91dH1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19mbGlwSW57MCV7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47b3BhY2l0eTowfTQwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTIwZGVnKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59NjAle3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7b3BhY2l0eToxfTgwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTVkZWcpfXRve3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2ZsaXBPdXR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCkgcGVyc3BlY3RpdmUoNDAwcHgpfTMwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKSBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpO29wYWNpdHk6MX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKSBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7b3BhY2l0eTowfX0uVG9hc3RpZnlfX2ZsaXAtZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2ZsaXBJbn0uVG9hc3RpZnlfX2ZsaXAtZXhpdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fZmxpcE91dH1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZUluUmlnaHR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDExMCUsMCwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlSW5MZWZ0ezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTEwJSwwLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVJblVwezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDExMCUsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZUluRG93bnswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTEwJSwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlT3V0UmlnaHR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDExMCUsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlT3V0TGVmdHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTExMCUsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlT3V0RG93bnswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1MDBweCwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVPdXRVcHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNTAwcHgsMCl9fS5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLXRvcC1sZWZ0LC5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLWJvdHRvbS1sZWZ0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZUluTGVmdH0uVG9hc3RpZnlfX3NsaWRlLWVudGVyLS10b3AtcmlnaHQsLlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tYm90dG9tLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZUluUmlnaHR9LlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tdG9wLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVJbkRvd259LlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tYm90dG9tLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVJblVwfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tdG9wLWxlZnQsLlRvYXN0aWZ5X19zbGlkZS1leGl0LS1ib3R0b20tbGVmdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVPdXRMZWZ0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tZHVyYXRpb246LjNzfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tdG9wLXJpZ2h0LC5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tYm90dG9tLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZU91dFJpZ2h0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tZHVyYXRpb246LjNzfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tdG9wLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVPdXRVcDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLWR1cmF0aW9uOi4zc30uVG9hc3RpZnlfX3NsaWRlLWV4aXQtLWJvdHRvbS1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlT3V0RG93bjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLWR1cmF0aW9uOi4zc31Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zcGluezAle3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1cbmApO2ltcG9ydHtpc1ZhbGlkRWxlbWVudCBhcyAkdH1mcm9tXCJyZWFjdFwiO3ZhciBMPXQ9PnR5cGVvZiB0PT1cIm51bWJlclwiJiYhaXNOYU4odCksTj10PT50eXBlb2YgdD09XCJzdHJpbmdcIixQPXQ9PnR5cGVvZiB0PT1cImZ1bmN0aW9uXCIsbXQ9dD0+Tih0KXx8TCh0KSxCPXQ9Pk4odCl8fFAodCk/dDpudWxsLHB0PSh0LG8pPT50PT09ITF8fEwodCkmJnQ+MD90Om8sej10PT4kdCh0KXx8Tih0KXx8UCh0KXx8TCh0KTtpbXBvcnQgdXQse3VzZUVmZmVjdCBhcyBSdCx1c2VMYXlvdXRFZmZlY3QgYXMgQnQsdXNlUmVmIGFzIHp0fWZyb21cInJlYWN0XCI7ZnVuY3Rpb24gWih0LG8sZT0zMDApe2xldHtzY3JvbGxIZWlnaHQ6cixzdHlsZTpzfT10O3JlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e3MubWluSGVpZ2h0PVwiaW5pdGlhbFwiLHMuaGVpZ2h0PXIrXCJweFwiLHMudHJhbnNpdGlvbj1gYWxsICR7ZX1tc2AscmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57cy5oZWlnaHQ9XCIwXCIscy5wYWRkaW5nPVwiMFwiLHMubWFyZ2luPVwiMFwiLHNldFRpbWVvdXQobyxlKX0pfSl9ZnVuY3Rpb24gJCh7ZW50ZXI6dCxleGl0Om8sYXBwZW5kUG9zaXRpb246ZT0hMSxjb2xsYXBzZTpyPSEwLGNvbGxhcHNlRHVyYXRpb246cz0zMDB9KXtyZXR1cm4gZnVuY3Rpb24oe2NoaWxkcmVuOmEscG9zaXRpb246ZCxwcmV2ZW50RXhpdFRyYW5zaXRpb246Yyxkb25lOlQsbm9kZVJlZjpnLGlzSW46dixwbGF5VG9hc3Q6eH0pe2xldCBDPWU/YCR7dH0tLSR7ZH1gOnQsUz1lP2Ake299LS0ke2R9YDpvLEU9enQoMCk7cmV0dXJuIEJ0KCgpPT57bGV0IGY9Zy5jdXJyZW50LHA9Qy5zcGxpdChcIiBcIiksYj1uPT57bi50YXJnZXQ9PT1nLmN1cnJlbnQmJih4KCksZi5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsYiksZi5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uY2FuY2VsXCIsYiksRS5jdXJyZW50PT09MCYmbi50eXBlIT09XCJhbmltYXRpb25jYW5jZWxcIiYmZi5jbGFzc0xpc3QucmVtb3ZlKC4uLnApKX07KCgpPT57Zi5jbGFzc0xpc3QuYWRkKC4uLnApLGYuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLGIpLGYuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmNhbmNlbFwiLGIpfSkoKX0sW10pLFJ0KCgpPT57bGV0IGY9Zy5jdXJyZW50LHA9KCk9PntmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIixwKSxyP1ooZixULHMpOlQoKX07dnx8KGM/cCgpOigoKT0+e0UuY3VycmVudD0xLGYuY2xhc3NOYW1lKz1gICR7U31gLGYuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLHApfSkoKSl9LFt2XSksdXQuY3JlYXRlRWxlbWVudCh1dC5GcmFnbWVudCxudWxsLGEpfX1pbXBvcnR7Y2xvbmVFbGVtZW50IGFzIEZ0LGlzVmFsaWRFbGVtZW50IGFzIFV0fWZyb21cInJlYWN0XCI7ZnVuY3Rpb24gSih0LG8pe3JldHVybntjb250ZW50OnR0KHQuY29udGVudCx0LnByb3BzKSxjb250YWluZXJJZDp0LnByb3BzLmNvbnRhaW5lcklkLGlkOnQucHJvcHMudG9hc3RJZCx0aGVtZTp0LnByb3BzLnRoZW1lLHR5cGU6dC5wcm9wcy50eXBlLGRhdGE6dC5wcm9wcy5kYXRhfHx7fSxpc0xvYWRpbmc6dC5wcm9wcy5pc0xvYWRpbmcsaWNvbjp0LnByb3BzLmljb24scmVhc29uOnQucmVtb3ZhbFJlYXNvbixzdGF0dXM6b319ZnVuY3Rpb24gdHQodCxvLGU9ITEpe3JldHVybiBVdCh0KSYmIU4odC50eXBlKT9GdCh0LHtjbG9zZVRvYXN0Om8uY2xvc2VUb2FzdCx0b2FzdFByb3BzOm8sZGF0YTpvLmRhdGEsaXNQYXVzZWQ6ZX0pOlAodCk/dCh7Y2xvc2VUb2FzdDpvLmNsb3NlVG9hc3QsdG9hc3RQcm9wczpvLGRhdGE6by5kYXRhLGlzUGF1c2VkOmV9KTp0fWltcG9ydCBvdCBmcm9tXCJyZWFjdFwiO2Z1bmN0aW9uIHl0KHtjbG9zZVRvYXN0OnQsdGhlbWU6byxhcmlhTGFiZWw6ZT1cImNsb3NlXCJ9KXtyZXR1cm4gb3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLHtjbGFzc05hbWU6YFRvYXN0aWZ5X19jbG9zZS1idXR0b24gVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbi0tJHtvfWAsdHlwZTpcImJ1dHRvblwiLG9uQ2xpY2s6cj0+e3Iuc3RvcFByb3BhZ2F0aW9uKCksdCghMCl9LFwiYXJpYS1sYWJlbFwiOmV9LG90LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLHZpZXdCb3g6XCIwIDAgMTQgMTZcIn0sb3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZmlsbFJ1bGU6XCJldmVub2RkXCIsZDpcIk03LjcxIDguMjNsMy43NSAzLjc1LTEuNDggMS40OC0zLjc1LTMuNzUtMy43NSAzLjc1TDEgMTEuOThsMy43NS0zLjc1TDEgNC40OCAyLjQ4IDNsMy43NSAzLjc1TDkuOTggM2wxLjQ4IDEuNDgtMy43NSAzLjc1elwifSkpKX1pbXBvcnQgZXQgZnJvbVwicmVhY3RcIjtpbXBvcnQgVHQgZnJvbVwiY2xzeFwiO2Z1bmN0aW9uIGd0KHtkZWxheTp0LGlzUnVubmluZzpvLGNsb3NlVG9hc3Q6ZSx0eXBlOnI9XCJkZWZhdWx0XCIsaGlkZTpzLGNsYXNzTmFtZTpsLGNvbnRyb2xsZWRQcm9ncmVzczphLHByb2dyZXNzOmQscnRsOmMsaXNJbjpULHRoZW1lOmd9KXtsZXQgdj1zfHxhJiZkPT09MCx4PXthbmltYXRpb25EdXJhdGlvbjpgJHt0fW1zYCxhbmltYXRpb25QbGF5U3RhdGU6bz9cInJ1bm5pbmdcIjpcInBhdXNlZFwifTthJiYoeC50cmFuc2Zvcm09YHNjYWxlWCgke2R9KWApO2xldCBDPVR0KFwiVG9hc3RpZnlfX3Byb2dyZXNzLWJhclwiLGE/XCJUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1jb250cm9sbGVkXCI6XCJUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1hbmltYXRlZFwiLGBUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS0ke2d9YCxgVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tJHtyfWAse1tcIlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXJ0bFwiXTpjfSksUz1QKGwpP2woe3J0bDpjLHR5cGU6cixkZWZhdWx0Q2xhc3NOYW1lOkN9KTpUdChDLGwpLEU9e1thJiZkPj0xP1wib25UcmFuc2l0aW9uRW5kXCI6XCJvbkFuaW1hdGlvbkVuZFwiXTphJiZkPDE/bnVsbDooKT0+e1QmJmUoKX19O3JldHVybiBldC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXdycFwiLFwiZGF0YS1oaWRkZW5cIjp2fSxldC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpgVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tYmcgVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tJHtnfSBUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS0ke3J9YH0pLGV0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7cm9sZTpcInByb2dyZXNzYmFyXCIsXCJhcmlhLWhpZGRlblwiOnY/XCJ0cnVlXCI6XCJmYWxzZVwiLFwiYXJpYS1sYWJlbFwiOlwibm90aWZpY2F0aW9uIHRpbWVyXCIsY2xhc3NOYW1lOlMsc3R5bGU6eCwuLi5FfSkpfWltcG9ydCBEdCBmcm9tXCJjbHN4XCI7aW1wb3J0IGN0LHt1c2VFZmZlY3QgYXMgeW8sdXNlUmVmIGFzIFRvLHVzZVN0YXRlIGFzIGdvfWZyb21cInJlYWN0XCI7dmFyIFh0PTEsYXQ9KCk9PmAke1h0Kyt9YDtmdW5jdGlvbiBfdCh0LG8sZSl7bGV0IHI9MSxzPTAsbD1bXSxhPVtdLGQ9byxjPW5ldyBNYXAsVD1uZXcgU2V0LGc9aT0+KFQuYWRkKGkpLCgpPT5ULmRlbGV0ZShpKSksdj0oKT0+e2E9QXJyYXkuZnJvbShjLnZhbHVlcygpKSxULmZvckVhY2goaT0+aSgpKX0seD0oe2NvbnRhaW5lcklkOmksdG9hc3RJZDpuLHVwZGF0ZUlkOnV9KT0+e2xldCBoPWk/aSE9PXQ6dCE9PTEsbT1jLmhhcyhuKSYmdT09bnVsbDtyZXR1cm4gaHx8bX0sQz0oaSxuKT0+e2MuZm9yRWFjaCh1PT57dmFyIGg7KG49PW51bGx8fG49PT11LnByb3BzLnRvYXN0SWQpJiYoKGg9dS50b2dnbGUpPT1udWxsfHxoLmNhbGwodSxpKSl9KX0sUz1pPT57dmFyIG4sdTsodT0obj1pLnByb3BzKT09bnVsbD92b2lkIDA6bi5vbkNsb3NlKT09bnVsbHx8dS5jYWxsKG4saS5yZW1vdmFsUmVhc29uKSxpLmlzQWN0aXZlPSExfSxFPWk9PntpZihpPT1udWxsKWMuZm9yRWFjaChTKTtlbHNle2xldCBuPWMuZ2V0KGkpO24mJlMobil9digpfSxmPSgpPT57cy09bC5sZW5ndGgsbD1bXX0scD1pPT57dmFyIG0sXztsZXR7dG9hc3RJZDpuLHVwZGF0ZUlkOnV9PWkucHJvcHMsaD11PT1udWxsO2kuc3RhbGVJZCYmYy5kZWxldGUoaS5zdGFsZUlkKSxpLmlzQWN0aXZlPSEwLGMuc2V0KG4saSksdigpLGUoSihpLGg/XCJhZGRlZFwiOlwidXBkYXRlZFwiKSksaCYmKChfPShtPWkucHJvcHMpLm9uT3Blbik9PW51bGx8fF8uY2FsbChtKSl9O3JldHVybntpZDp0LHByb3BzOmQsb2JzZXJ2ZTpnLHRvZ2dsZTpDLHJlbW92ZVRvYXN0OkUsdG9hc3RzOmMsY2xlYXJRdWV1ZTpmLGJ1aWxkVG9hc3Q6KGksbik9PntpZih4KG4pKXJldHVybjtsZXR7dG9hc3RJZDp1LHVwZGF0ZUlkOmgsZGF0YTptLHN0YWxlSWQ6XyxkZWxheTprfT1uLE09aD09bnVsbDtNJiZzKys7bGV0IEE9ey4uLmQsc3R5bGU6ZC50b2FzdFN0eWxlLGtleTpyKyssLi4uT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKG4pLmZpbHRlcigoW0QsWV0pPT5ZIT1udWxsKSksdG9hc3RJZDp1LHVwZGF0ZUlkOmgsZGF0YTptLGlzSW46ITEsY2xhc3NOYW1lOkIobi5jbGFzc05hbWV8fGQudG9hc3RDbGFzc05hbWUpLHByb2dyZXNzQ2xhc3NOYW1lOkIobi5wcm9ncmVzc0NsYXNzTmFtZXx8ZC5wcm9ncmVzc0NsYXNzTmFtZSksYXV0b0Nsb3NlOm4uaXNMb2FkaW5nPyExOnB0KG4uYXV0b0Nsb3NlLGQuYXV0b0Nsb3NlKSxjbG9zZVRvYXN0KEQpe2MuZ2V0KHUpLnJlbW92YWxSZWFzb249RCxFKHUpfSxkZWxldGVUb2FzdCgpe2xldCBEPWMuZ2V0KHUpO2lmKEQhPW51bGwpe2lmKGUoSihELFwicmVtb3ZlZFwiKSksYy5kZWxldGUodSkscy0tLHM8MCYmKHM9MCksbC5sZW5ndGg+MCl7cChsLnNoaWZ0KCkpO3JldHVybn12KCl9fX07QS5jbG9zZUJ1dHRvbj1kLmNsb3NlQnV0dG9uLG4uY2xvc2VCdXR0b249PT0hMXx8eihuLmNsb3NlQnV0dG9uKT9BLmNsb3NlQnV0dG9uPW4uY2xvc2VCdXR0b246bi5jbG9zZUJ1dHRvbj09PSEwJiYoQS5jbG9zZUJ1dHRvbj16KGQuY2xvc2VCdXR0b24pP2QuY2xvc2VCdXR0b246ITApO2xldCBSPXtjb250ZW50OmkscHJvcHM6QSxzdGFsZUlkOl99O2QubGltaXQmJmQubGltaXQ+MCYmcz5kLmxpbWl0JiZNP2wucHVzaChSKTpMKGspP3NldFRpbWVvdXQoKCk9PntwKFIpfSxrKTpwKFIpfSxzZXRQcm9wcyhpKXtkPWl9LHNldFRvZ2dsZTooaSxuKT0+e2xldCB1PWMuZ2V0KGkpO3UmJih1LnRvZ2dsZT1uKX0saXNUb2FzdEFjdGl2ZTppPT57dmFyIG47cmV0dXJuKG49Yy5nZXQoaSkpPT1udWxsP3ZvaWQgMDpuLmlzQWN0aXZlfSxnZXRTbmFwc2hvdDooKT0+YX19dmFyIEk9bmV3IE1hcCxGPVtdLHN0PW5ldyBTZXQsVnQ9dD0+c3QuZm9yRWFjaChvPT5vKHQpKSxidD0oKT0+SS5zaXplPjA7ZnVuY3Rpb24gUXQoKXtGLmZvckVhY2godD0+bnQodC5jb250ZW50LHQub3B0aW9ucykpLEY9W119dmFyIHZ0PSh0LHtjb250YWluZXJJZDpvfSk9Pnt2YXIgZTtyZXR1cm4oZT1JLmdldChvfHwxKSk9PW51bGw/dm9pZCAwOmUudG9hc3RzLmdldCh0KX07ZnVuY3Rpb24gWCh0LG8pe3ZhciByO2lmKG8pcmV0dXJuISEoKHI9SS5nZXQobykpIT1udWxsJiZyLmlzVG9hc3RBY3RpdmUodCkpO2xldCBlPSExO3JldHVybiBJLmZvckVhY2gocz0+e3MuaXNUb2FzdEFjdGl2ZSh0KSYmKGU9ITApfSksZX1mdW5jdGlvbiBodCh0KXtpZighYnQoKSl7Rj1GLmZpbHRlcihvPT50IT1udWxsJiZvLm9wdGlvbnMudG9hc3RJZCE9PXQpO3JldHVybn1pZih0PT1udWxsfHxtdCh0KSlJLmZvckVhY2gobz0+e28ucmVtb3ZlVG9hc3QodCl9KTtlbHNlIGlmKHQmJihcImNvbnRhaW5lcklkXCJpbiB0fHxcImlkXCJpbiB0KSl7bGV0IG89SS5nZXQodC5jb250YWluZXJJZCk7bz9vLnJlbW92ZVRvYXN0KHQuaWQpOkkuZm9yRWFjaChlPT57ZS5yZW1vdmVUb2FzdCh0LmlkKX0pfX12YXIgQ3Q9KHQ9e30pPT57SS5mb3JFYWNoKG89PntvLnByb3BzLmxpbWl0JiYoIXQuY29udGFpbmVySWR8fG8uaWQ9PT10LmNvbnRhaW5lcklkKSYmby5jbGVhclF1ZXVlKCl9KX07ZnVuY3Rpb24gbnQodCxvKXt6KHQpJiYoYnQoKXx8Ri5wdXNoKHtjb250ZW50OnQsb3B0aW9uczpvfSksSS5mb3JFYWNoKGU9PntlLmJ1aWxkVG9hc3QodCxvKX0pKX1mdW5jdGlvbiB4dCh0KXt2YXIgbzsobz1JLmdldCh0LmNvbnRhaW5lcklkfHwxKSk9PW51bGx8fG8uc2V0VG9nZ2xlKHQuaWQsdC5mbil9ZnVuY3Rpb24gcnQodCxvKXtJLmZvckVhY2goZT0+eyhvPT1udWxsfHwhKG8hPW51bGwmJm8uY29udGFpbmVySWQpfHwobz09bnVsbD92b2lkIDA6by5jb250YWluZXJJZCk9PT1lLmlkKSYmZS50b2dnbGUodCxvPT1udWxsP3ZvaWQgMDpvLmlkKX0pfWZ1bmN0aW9uIEV0KHQpe2xldCBvPXQuY29udGFpbmVySWR8fDE7cmV0dXJue3N1YnNjcmliZShlKXtsZXQgcj1fdChvLHQsVnQpO0kuc2V0KG8scik7bGV0IHM9ci5vYnNlcnZlKGUpO3JldHVybiBRdCgpLCgpPT57cygpLEkuZGVsZXRlKG8pfX0sc2V0UHJvcHMoZSl7dmFyIHI7KHI9SS5nZXQobykpPT1udWxsfHxyLnNldFByb3BzKGUpfSxnZXRTbmFwc2hvdCgpe3ZhciBlO3JldHVybihlPUkuZ2V0KG8pKT09bnVsbD92b2lkIDA6ZS5nZXRTbmFwc2hvdCgpfX19ZnVuY3Rpb24gUHQodCl7cmV0dXJuIHN0LmFkZCh0KSwoKT0+e3N0LmRlbGV0ZSh0KX19ZnVuY3Rpb24gV3QodCl7cmV0dXJuIHQmJihOKHQudG9hc3RJZCl8fEwodC50b2FzdElkKSk/dC50b2FzdElkOmF0KCl9ZnVuY3Rpb24gVSh0LG8pe3JldHVybiBudCh0LG8pLG8udG9hc3RJZH1mdW5jdGlvbiBWKHQsbyl7cmV0dXJuey4uLm8sdHlwZTpvJiZvLnR5cGV8fHQsdG9hc3RJZDpXdChvKX19ZnVuY3Rpb24gUSh0KXtyZXR1cm4obyxlKT0+VShvLFYodCxlKSl9ZnVuY3Rpb24geSh0LG8pe3JldHVybiBVKHQsVihcImRlZmF1bHRcIixvKSl9eS5sb2FkaW5nPSh0LG8pPT5VKHQsVihcImRlZmF1bHRcIix7aXNMb2FkaW5nOiEwLGF1dG9DbG9zZTohMSxjbG9zZU9uQ2xpY2s6ITEsY2xvc2VCdXR0b246ITEsZHJhZ2dhYmxlOiExLC4uLm99KSk7ZnVuY3Rpb24gR3QodCx7cGVuZGluZzpvLGVycm9yOmUsc3VjY2VzczpyfSxzKXtsZXQgbDtvJiYobD1OKG8pP3kubG9hZGluZyhvLHMpOnkubG9hZGluZyhvLnJlbmRlcix7Li4ucywuLi5vfSkpO2xldCBhPXtpc0xvYWRpbmc6bnVsbCxhdXRvQ2xvc2U6bnVsbCxjbG9zZU9uQ2xpY2s6bnVsbCxjbG9zZUJ1dHRvbjpudWxsLGRyYWdnYWJsZTpudWxsfSxkPShULGcsdik9PntpZihnPT1udWxsKXt5LmRpc21pc3MobCk7cmV0dXJufWxldCB4PXt0eXBlOlQsLi4uYSwuLi5zLGRhdGE6dn0sQz1OKGcpP3tyZW5kZXI6Z306ZztyZXR1cm4gbD95LnVwZGF0ZShsLHsuLi54LC4uLkN9KTp5KEMucmVuZGVyLHsuLi54LC4uLkN9KSx2fSxjPVAodCk/dCgpOnQ7cmV0dXJuIGMudGhlbihUPT5kKFwic3VjY2Vzc1wiLHIsVCkpLmNhdGNoKFQ9PmQoXCJlcnJvclwiLGUsVCkpLGN9eS5wcm9taXNlPUd0O3kuc3VjY2Vzcz1RKFwic3VjY2Vzc1wiKTt5LmluZm89UShcImluZm9cIik7eS5lcnJvcj1RKFwiZXJyb3JcIik7eS53YXJuaW5nPVEoXCJ3YXJuaW5nXCIpO3kud2Fybj15Lndhcm5pbmc7eS5kYXJrPSh0LG8pPT5VKHQsVihcImRlZmF1bHRcIix7dGhlbWU6XCJkYXJrXCIsLi4ub30pKTtmdW5jdGlvbiBxdCh0KXtodCh0KX15LmRpc21pc3M9cXQ7eS5jbGVhcldhaXRpbmdRdWV1ZT1DdDt5LmlzQWN0aXZlPVg7eS51cGRhdGU9KHQsbz17fSk9PntsZXQgZT12dCh0LG8pO2lmKGUpe2xldHtwcm9wczpyLGNvbnRlbnQ6c309ZSxsPXtkZWxheToxMDAsLi4uciwuLi5vLHRvYXN0SWQ6by50b2FzdElkfHx0LHVwZGF0ZUlkOmF0KCl9O2wudG9hc3RJZCE9PXQmJihsLnN0YWxlSWQ9dCk7bGV0IGE9bC5yZW5kZXJ8fHM7ZGVsZXRlIGwucmVuZGVyLFUoYSxsKX19O3kuZG9uZT10PT57eS51cGRhdGUodCx7cHJvZ3Jlc3M6MX0pfTt5Lm9uQ2hhbmdlPVB0O3kucGxheT10PT5ydCghMCx0KTt5LnBhdXNlPXQ9PnJ0KCExLHQpO2ltcG9ydHt1c2VSZWYgYXMgS3QsdXNlU3luY0V4dGVybmFsU3RvcmUgYXMgWXR9ZnJvbVwicmVhY3RcIjtmdW5jdGlvbiBJdCh0KXt2YXIgYTtsZXR7c3Vic2NyaWJlOm8sZ2V0U25hcHNob3Q6ZSxzZXRQcm9wczpyfT1LdChFdCh0KSkuY3VycmVudDtyKHQpO2xldCBzPShhPVl0KG8sZSxlKSk9PW51bGw/dm9pZCAwOmEuc2xpY2UoKTtmdW5jdGlvbiBsKGQpe2lmKCFzKXJldHVybltdO2xldCBjPW5ldyBNYXA7cmV0dXJuIHQubmV3ZXN0T25Ub3AmJnMucmV2ZXJzZSgpLHMuZm9yRWFjaChUPT57bGV0e3Bvc2l0aW9uOmd9PVQucHJvcHM7Yy5oYXMoZyl8fGMuc2V0KGcsW10pLGMuZ2V0KGcpLnB1c2goVCl9KSxBcnJheS5mcm9tKGMsVD0+ZChUWzBdLFRbMV0pKX1yZXR1cm57Z2V0VG9hc3RUb1JlbmRlcjpsLGlzVG9hc3RBY3RpdmU6WCxjb3VudDpzPT1udWxsP3ZvaWQgMDpzLmxlbmd0aH19aW1wb3J0e3VzZUVmZmVjdCBhcyBadCx1c2VSZWYgYXMgU3QsdXNlU3RhdGUgYXMga3R9ZnJvbVwicmVhY3RcIjtmdW5jdGlvbiBBdCh0KXtsZXRbbyxlXT1rdCghMSksW3Isc109a3QoITEpLGw9U3QobnVsbCksYT1TdCh7c3RhcnQ6MCxkZWx0YTowLHJlbW92YWxEaXN0YW5jZTowLGNhbkNsb3NlT25DbGljazohMCxjYW5EcmFnOiExLGRpZE1vdmU6ITF9KS5jdXJyZW50LHthdXRvQ2xvc2U6ZCxwYXVzZU9uSG92ZXI6YyxjbG9zZVRvYXN0OlQsb25DbGljazpnLGNsb3NlT25DbGljazp2fT10O3h0KHtpZDp0LnRvYXN0SWQsY29udGFpbmVySWQ6dC5jb250YWluZXJJZCxmbjplfSksWnQoKCk9PntpZih0LnBhdXNlT25Gb2N1c0xvc3MpcmV0dXJuIHgoKSwoKT0+e0MoKX19LFt0LnBhdXNlT25Gb2N1c0xvc3NdKTtmdW5jdGlvbiB4KCl7ZG9jdW1lbnQuaGFzRm9jdXMoKXx8cCgpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIixmKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIixwKX1mdW5jdGlvbiBDKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLGYpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLHApfWZ1bmN0aW9uIFMobSl7aWYodC5kcmFnZ2FibGU9PT0hMHx8dC5kcmFnZ2FibGU9PT1tLnBvaW50ZXJUeXBlKXtiKCk7bGV0IF89bC5jdXJyZW50O2EuY2FuQ2xvc2VPbkNsaWNrPSEwLGEuY2FuRHJhZz0hMCxfLnN0eWxlLnRyYW5zaXRpb249XCJub25lXCIsdC5kcmFnZ2FibGVEaXJlY3Rpb249PT1cInhcIj8oYS5zdGFydD1tLmNsaWVudFgsYS5yZW1vdmFsRGlzdGFuY2U9Xy5vZmZzZXRXaWR0aCoodC5kcmFnZ2FibGVQZXJjZW50LzEwMCkpOihhLnN0YXJ0PW0uY2xpZW50WSxhLnJlbW92YWxEaXN0YW5jZT1fLm9mZnNldEhlaWdodCoodC5kcmFnZ2FibGVQZXJjZW50PT09ODA/dC5kcmFnZ2FibGVQZXJjZW50KjEuNTp0LmRyYWdnYWJsZVBlcmNlbnQpLzEwMCl9fWZ1bmN0aW9uIEUobSl7bGV0e3RvcDpfLGJvdHRvbTprLGxlZnQ6TSxyaWdodDpBfT1sLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bS5uYXRpdmVFdmVudC50eXBlIT09XCJ0b3VjaGVuZFwiJiZ0LnBhdXNlT25Ib3ZlciYmbS5jbGllbnRYPj1NJiZtLmNsaWVudFg8PUEmJm0uY2xpZW50WT49XyYmbS5jbGllbnRZPD1rP3AoKTpmKCl9ZnVuY3Rpb24gZigpe2UoITApfWZ1bmN0aW9uIHAoKXtlKCExKX1mdW5jdGlvbiBiKCl7YS5kaWRNb3ZlPSExLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLG4pLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIix1KX1mdW5jdGlvbiBpKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsbiksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLHUpfWZ1bmN0aW9uIG4obSl7bGV0IF89bC5jdXJyZW50O2lmKGEuY2FuRHJhZyYmXyl7YS5kaWRNb3ZlPSEwLG8mJnAoKSx0LmRyYWdnYWJsZURpcmVjdGlvbj09PVwieFwiP2EuZGVsdGE9bS5jbGllbnRYLWEuc3RhcnQ6YS5kZWx0YT1tLmNsaWVudFktYS5zdGFydCxhLnN0YXJ0IT09bS5jbGllbnRYJiYoYS5jYW5DbG9zZU9uQ2xpY2s9ITEpO2xldCBrPXQuZHJhZ2dhYmxlRGlyZWN0aW9uPT09XCJ4XCI/YCR7YS5kZWx0YX1weCwgdmFyKC0teSlgOmAwLCBjYWxjKCR7YS5kZWx0YX1weCArIHZhcigtLXkpKWA7Xy5zdHlsZS50cmFuc2Zvcm09YHRyYW5zbGF0ZTNkKCR7a30sMClgLF8uc3R5bGUub3BhY2l0eT1gJHsxLU1hdGguYWJzKGEuZGVsdGEvYS5yZW1vdmFsRGlzdGFuY2UpfWB9fWZ1bmN0aW9uIHUoKXtpKCk7bGV0IG09bC5jdXJyZW50O2lmKGEuY2FuRHJhZyYmYS5kaWRNb3ZlJiZtKXtpZihhLmNhbkRyYWc9ITEsTWF0aC5hYnMoYS5kZWx0YSk+YS5yZW1vdmFsRGlzdGFuY2Upe3MoITApLHQuY2xvc2VUb2FzdCghMCksdC5jb2xsYXBzZUFsbCgpO3JldHVybn1tLnN0eWxlLnRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjJzXCIsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zZm9ybVwiKSxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKX19bGV0IGg9e29uUG9pbnRlckRvd246UyxvblBvaW50ZXJVcDpFfTtyZXR1cm4gZCYmYyYmKGgub25Nb3VzZUVudGVyPXAsdC5zdGFja2VkfHwoaC5vbk1vdXNlTGVhdmU9ZikpLHYmJihoLm9uQ2xpY2s9bT0+e2cmJmcobSksYS5jYW5DbG9zZU9uQ2xpY2smJlQoITApfSkse3BsYXlUb2FzdDpmLHBhdXNlVG9hc3Q6cCxpc1J1bm5pbmc6byxwcmV2ZW50RXhpdFRyYW5zaXRpb246cix0b2FzdFJlZjpsLGV2ZW50SGFuZGxlcnM6aH19aW1wb3J0e3VzZUVmZmVjdCBhcyBKdCx1c2VMYXlvdXRFZmZlY3QgYXMgdG99ZnJvbVwicmVhY3RcIjt2YXIgT3Q9dHlwZW9mIHdpbmRvdyE9XCJ1bmRlZmluZWRcIj90bzpKdDtpbXBvcnQgaXQgZnJvbVwiY2xzeFwiO2ltcG9ydCBxLHtjbG9uZUVsZW1lbnQgYXMgY28saXNWYWxpZEVsZW1lbnQgYXMgZm99ZnJvbVwicmVhY3RcIjtpbXBvcnQgTyx7Y2xvbmVFbGVtZW50IGFzIG9vLGlzVmFsaWRFbGVtZW50IGFzIGVvfWZyb21cInJlYWN0XCI7dmFyIEc9KHt0aGVtZTp0LHR5cGU6byxpc0xvYWRpbmc6ZSwuLi5yfSk9Pk8uY3JlYXRlRWxlbWVudChcInN2Z1wiLHt2aWV3Qm94OlwiMCAwIDI0IDI0XCIsd2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLGZpbGw6dD09PVwiY29sb3JlZFwiP1wiY3VycmVudENvbG9yXCI6YHZhcigtLXRvYXN0aWZ5LWljb24tY29sb3ItJHtvfSlgLC4uLnJ9KTtmdW5jdGlvbiBhbyh0KXtyZXR1cm4gTy5jcmVhdGVFbGVtZW50KEcsey4uLnR9LE8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0yMy4zMiAxNy4xOTFMMTUuNDM4IDIuMTg0QzE0LjcyOC44MzMgMTMuNDE2IDAgMTEuOTk2IDBjLTEuNDIgMC0yLjczMy44MzMtMy40NDMgMi4xODRMLjUzMyAxNy40NDhhNC43NDQgNC43NDQgMCAwMDAgNC4zNjhDMS4yNDMgMjMuMTY3IDIuNTU1IDI0IDMuOTc1IDI0aDE2LjA1QzIyLjIyIDI0IDI0IDIyLjA0NCAyNCAxOS42MzJjMC0uOTA0LS4yNTEtMS43NDYtLjY4LTIuNDR6bS05LjYyMiAxLjQ2YzAgMS4wMzMtLjcyNCAxLjgyMy0xLjY5OCAxLjgyM3MtMS42OTgtLjc5LTEuNjk4LTEuODIydi0uMDQzYzAtMS4wMjguNzI0LTEuODIyIDEuNjk4LTEuODIyczEuNjk4Ljc5IDEuNjk4IDEuODIydi4wNDN6bS4wMzktMTIuMjg1bC0uODQgOC4wNmMtLjA1Ny41ODEtLjQwOC45NDMtLjg5Ny45NDMtLjQ5IDAtLjg0LS4zNjctLjg5Ni0uOTQybC0uODQtOC4wNjVjLS4wNTctLjYyNC4yNS0xLjA5NS43NzktMS4wOTVoMS45MWMuNTI4LjAwNS44NC40NzYuNzg0IDEuMXpcIn0pKX1mdW5jdGlvbiBzbyh0KXtyZXR1cm4gTy5jcmVhdGVFbGVtZW50KEcsey4uLnR9LE8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMiAwYTEyIDEyIDAgMTAxMiAxMkExMi4wMTMgMTIuMDEzIDAgMDAxMiAwem0uMjUgNWExLjUgMS41IDAgMTEtMS41IDEuNSAxLjUgMS41IDAgMDExLjUtMS41em0yLjI1IDEzLjVoLTRhMSAxIDAgMDEwLTJoLjc1YS4yNS4yNSAwIDAwLjI1LS4yNXYtNC41YS4yNS4yNSAwIDAwLS4yNS0uMjVoLS43NWExIDEgMCAwMTAtMmgxYTIgMiAwIDAxMiAydjQuNzVhLjI1LjI1IDAgMDAuMjUuMjVoLjc1YTEgMSAwIDExMCAyelwifSkpfWZ1bmN0aW9uIG5vKHQpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnQoRyx7Li4udH0sTy5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTEyIDBhMTIgMTIgMCAxMDEyIDEyQTEyLjAxNCAxMi4wMTQgMCAwMDEyIDB6bTYuOTI3IDguMmwtNi44NDUgOS4yODlhMS4wMTEgMS4wMTEgMCAwMS0xLjQzLjE4OGwtNC44ODgtMy45MDhhMSAxIDAgMTExLjI1LTEuNTYybDQuMDc2IDMuMjYxIDYuMjI3LTguNDUxYTEgMSAwIDExMS42MSAxLjE4M3pcIn0pKX1mdW5jdGlvbiBybyh0KXtyZXR1cm4gTy5jcmVhdGVFbGVtZW50KEcsey4uLnR9LE8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMS45ODMgMGExMi4yMDYgMTIuMjA2IDAgMDAtOC41MSAzLjY1M0ExMS44IDExLjggMCAwMDAgMTIuMjA3IDExLjc3OSAxMS43NzkgMCAwMDExLjggMjRoLjIxNEExMi4xMTEgMTIuMTExIDAgMDAyNCAxMS43OTEgMTEuNzY2IDExLjc2NiAwIDAwMTEuOTgzIDB6TTEwLjUgMTYuNTQyYTEuNDc2IDEuNDc2IDAgMDExLjQ0OS0xLjUzaC4wMjdhMS41MjcgMS41MjcgMCAwMTEuNTIzIDEuNDcgMS40NzUgMS40NzUgMCAwMS0xLjQ0OSAxLjUzaC0uMDI3YTEuNTI5IDEuNTI5IDAgMDEtMS41MjMtMS40N3pNMTEgMTIuNXYtNmExIDEgMCAwMTIgMHY2YTEgMSAwIDExLTIgMHpcIn0pKX1mdW5jdGlvbiBpbygpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiVG9hc3RpZnlfX3NwaW5uZXJcIn0pfXZhciBXPXtpbmZvOnNvLHdhcm5pbmc6YW8sc3VjY2VzczpubyxlcnJvcjpybyxzcGlubmVyOmlvfSxsbz10PT50IGluIFc7ZnVuY3Rpb24gTnQoe3RoZW1lOnQsdHlwZTpvLGlzTG9hZGluZzplLGljb246cn0pe2xldCBzPW51bGwsbD17dGhlbWU6dCx0eXBlOm99O3JldHVybiByPT09ITF8fChQKHIpP3M9cih7Li4ubCxpc0xvYWRpbmc6ZX0pOmVvKHIpP3M9b28ocixsKTplP3M9Vy5zcGlubmVyKCk6bG8obykmJihzPVdbb10obCkpKSxzfXZhciB3dD10PT57bGV0e2lzUnVubmluZzpvLHByZXZlbnRFeGl0VHJhbnNpdGlvbjplLHRvYXN0UmVmOnIsZXZlbnRIYW5kbGVyczpzLHBsYXlUb2FzdDpsfT1BdCh0KSx7Y2xvc2VCdXR0b246YSxjaGlsZHJlbjpkLGF1dG9DbG9zZTpjLG9uQ2xpY2s6VCx0eXBlOmcsaGlkZVByb2dyZXNzQmFyOnYsY2xvc2VUb2FzdDp4LHRyYW5zaXRpb246Qyxwb3NpdGlvbjpTLGNsYXNzTmFtZTpFLHN0eWxlOmYscHJvZ3Jlc3NDbGFzc05hbWU6cCx1cGRhdGVJZDpiLHJvbGU6aSxwcm9ncmVzczpuLHJ0bDp1LHRvYXN0SWQ6aCxkZWxldGVUb2FzdDptLGlzSW46Xyxpc0xvYWRpbmc6ayxjbG9zZU9uQ2xpY2s6TSx0aGVtZTpBLGFyaWFMYWJlbDpSfT10LEQ9aXQoXCJUb2FzdGlmeV9fdG9hc3RcIixgVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS0ke0F9YCxgVG9hc3RpZnlfX3RvYXN0LS0ke2d9YCx7W1wiVG9hc3RpZnlfX3RvYXN0LS1ydGxcIl06dX0se1tcIlRvYXN0aWZ5X190b2FzdC0tY2xvc2Utb24tY2xpY2tcIl06TX0pLFk9UChFKT9FKHtydGw6dSxwb3NpdGlvbjpTLHR5cGU6ZyxkZWZhdWx0Q2xhc3NOYW1lOkR9KTppdChELEUpLGZ0PU50KHQpLGR0PSEhbnx8IWMsaj17Y2xvc2VUb2FzdDp4LHR5cGU6Zyx0aGVtZTpBfSxIPW51bGw7cmV0dXJuIGE9PT0hMXx8KFAoYSk/SD1hKGopOmZvKGEpP0g9Y28oYSxqKTpIPXl0KGopKSxxLmNyZWF0ZUVsZW1lbnQoQyx7aXNJbjpfLGRvbmU6bSxwb3NpdGlvbjpTLHByZXZlbnRFeGl0VHJhbnNpdGlvbjplLG5vZGVSZWY6cixwbGF5VG9hc3Q6bH0scS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2lkOmgsdGFiSW5kZXg6MCxvbkNsaWNrOlQsXCJkYXRhLWluXCI6XyxjbGFzc05hbWU6WSwuLi5zLHN0eWxlOmYscmVmOnIsLi4uXyYme3JvbGU6aSxcImFyaWEtbGFiZWxcIjpSfX0sZnQhPW51bGwmJnEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6aXQoXCJUb2FzdGlmeV9fdG9hc3QtaWNvblwiLHtbXCJUb2FzdGlmeS0tYW5pbWF0ZS1pY29uIFRvYXN0aWZ5X196b29tLWVudGVyXCJdOiFrfSl9LGZ0KSx0dChkLHQsIW8pLEgsIXQuY3VzdG9tUHJvZ3Jlc3NCYXImJnEuY3JlYXRlRWxlbWVudChndCx7Li4uYiYmIWR0P3trZXk6YHAtJHtifWB9Ont9LHJ0bDp1LHRoZW1lOkEsZGVsYXk6Yyxpc1J1bm5pbmc6byxpc0luOl8sY2xvc2VUb2FzdDp4LGhpZGU6dix0eXBlOmcsY2xhc3NOYW1lOnAsY29udHJvbGxlZFByb2dyZXNzOmR0LHByb2dyZXNzOm58fDB9KSkpfTt2YXIgSz0odCxvPSExKT0+KHtlbnRlcjpgVG9hc3RpZnktLWFuaW1hdGUgVG9hc3RpZnlfXyR7dH0tZW50ZXJgLGV4aXQ6YFRvYXN0aWZ5LS1hbmltYXRlIFRvYXN0aWZ5X18ke3R9LWV4aXRgLGFwcGVuZFBvc2l0aW9uOm99KSxsdD0kKEsoXCJib3VuY2VcIiwhMCkpLG1vPSQoSyhcInNsaWRlXCIsITApKSxwbz0kKEsoXCJ6b29tXCIpKSx1bz0kKEsoXCJmbGlwXCIpKTt2YXIgX289e3Bvc2l0aW9uOlwidG9wLXJpZ2h0XCIsdHJhbnNpdGlvbjpsdCxhdXRvQ2xvc2U6NWUzLGNsb3NlQnV0dG9uOiEwLHBhdXNlT25Ib3ZlcjohMCxwYXVzZU9uRm9jdXNMb3NzOiEwLGRyYWdnYWJsZTpcInRvdWNoXCIsZHJhZ2dhYmxlUGVyY2VudDo4MCxkcmFnZ2FibGVEaXJlY3Rpb246XCJ4XCIscm9sZTpcImFsZXJ0XCIsdGhlbWU6XCJsaWdodFwiLFwiYXJpYS1sYWJlbFwiOlwiTm90aWZpY2F0aW9ucyBBbHQrVFwiLGhvdEtleXM6dD0+dC5hbHRLZXkmJnQuY29kZT09PVwiS2V5VFwifTtmdW5jdGlvbiBMdCh0KXtsZXQgbz17Li4uX28sLi4udH0sZT10LnN0YWNrZWQsW3Isc109Z28oITApLGw9VG8obnVsbCkse2dldFRvYXN0VG9SZW5kZXI6YSxpc1RvYXN0QWN0aXZlOmQsY291bnQ6Y309SXQobykse2NsYXNzTmFtZTpULHN0eWxlOmcscnRsOnYsY29udGFpbmVySWQ6eCxob3RLZXlzOkN9PW87ZnVuY3Rpb24gUyhmKXtsZXQgcD1EdChcIlRvYXN0aWZ5X190b2FzdC1jb250YWluZXJcIixgVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tJHtmfWAse1tcIlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXJ0bFwiXTp2fSk7cmV0dXJuIFAoVCk/VCh7cG9zaXRpb246ZixydGw6dixkZWZhdWx0Q2xhc3NOYW1lOnB9KTpEdChwLEIoVCkpfWZ1bmN0aW9uIEUoKXtlJiYocyghMCkseS5wbGF5KCkpfXJldHVybiBPdCgoKT0+e3ZhciBmO2lmKGUpe2xldCBwPWwuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbj1cInRydWVcIl0nKSxiPTEyLGk9KGY9by5wb3NpdGlvbik9PW51bGw/dm9pZCAwOmYuaW5jbHVkZXMoXCJ0b3BcIiksbj0wLHU9MDtBcnJheS5mcm9tKHApLnJldmVyc2UoKS5mb3JFYWNoKChoLG0pPT57bGV0IF89aDtfLmNsYXNzTGlzdC5hZGQoXCJUb2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRcIiksbT4wJiYoXy5kYXRhc2V0LmNvbGxhcHNlZD1gJHtyfWApLF8uZGF0YXNldC5wb3N8fChfLmRhdGFzZXQucG9zPWk/XCJ0b3BcIjpcImJvdFwiKTtsZXQgaz1uKihyPy4yOjEpKyhyPzA6YiptKTtfLnN0eWxlLnNldFByb3BlcnR5KFwiLS15XCIsYCR7aT9rOmsqLTF9cHhgKSxfLnN0eWxlLnNldFByb3BlcnR5KFwiLS1nXCIsYCR7Yn1gKSxfLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zXCIsYCR7MS0ocj91OjApfWApLG4rPV8ub2Zmc2V0SGVpZ2h0LHUrPS4wMjV9KX19LFtyLGMsZV0pLHlvKCgpPT57ZnVuY3Rpb24gZihwKXt2YXIgaTtsZXQgYj1sLmN1cnJlbnQ7QyhwKSYmKChpPWIucXVlcnlTZWxlY3RvcignW3RhYkluZGV4PVwiMFwiXScpKT09bnVsbHx8aS5mb2N1cygpLHMoITEpLHkucGF1c2UoKSkscC5rZXk9PT1cIkVzY2FwZVwiJiYoZG9jdW1lbnQuYWN0aXZlRWxlbWVudD09PWJ8fGIhPW51bGwmJmIuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpJiYocyghMCkseS5wbGF5KCkpfXJldHVybiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGYpLCgpPT57ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixmKX19LFtDXSksY3QuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIix7cmVmOmwsY2xhc3NOYW1lOlwiVG9hc3RpZnlcIixpZDp4LG9uTW91c2VFbnRlcjooKT0+e2UmJihzKCExKSx5LnBhdXNlKCkpfSxvbk1vdXNlTGVhdmU6RSxcImFyaWEtbGl2ZVwiOlwicG9saXRlXCIsXCJhcmlhLWF0b21pY1wiOlwiZmFsc2VcIixcImFyaWEtcmVsZXZhbnRcIjpcImFkZGl0aW9ucyB0ZXh0XCIsXCJhcmlhLWxhYmVsXCI6b1tcImFyaWEtbGFiZWxcIl19LGEoKGYscCk9PntsZXQgYj1wLmxlbmd0aD97Li4uZ306ey4uLmcscG9pbnRlckV2ZW50czpcIm5vbmVcIn07cmV0dXJuIGN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7dGFiSW5kZXg6LTEsY2xhc3NOYW1lOlMoZiksXCJkYXRhLXN0YWNrZWRcIjplLHN0eWxlOmIsa2V5OmBjLSR7Zn1gfSxwLm1hcCgoe2NvbnRlbnQ6aSxwcm9wczpufSk9PmN0LmNyZWF0ZUVsZW1lbnQod3Qsey4uLm4sc3RhY2tlZDplLGNvbGxhcHNlQWxsOkUsaXNJbjpkKG4udG9hc3RJZCxuLmNvbnRhaW5lcklkKSxrZXk6YHQtJHtuLmtleX1gfSxpKSkpfSkpfWV4cG9ydHtsdCBhcyBCb3VuY2UsdW8gYXMgRmxpcCxXIGFzIEljb25zLG1vIGFzIFNsaWRlLEx0IGFzIFRvYXN0Q29udGFpbmVyLHBvIGFzIFpvb20sWiBhcyBjb2xsYXBzZVRvYXN0LCQgYXMgY3NzVHJhbnNpdGlvbix5IGFzIHRvYXN0fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSU1TdGF0ZSwgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgSmltdU1hcFZpZXcsIEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnamltdS1hcmNnaXMnO1xuaW1wb3J0IHsgbG9hZE1vZHVsZXMgfSBmcm9tICdlc3JpLWxvYWRlcic7XG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlLmNzcyc7XG5pbXBvcnQgSW1hZ2VyeUxheWVyIGZyb20gJ0BhcmNnaXMvY29yZS9sYXllcnMvSW1hZ2VyeUxheWVyJ1xuXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJ1dHRvbiwgTG9hZGluZywgU2VsZWN0LCBUZXh0SW5wdXQgfSBmcm9tICdqaW11LXVpJztcblxuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2hvb2tzL3VzZUxvY2FsZVwiO1xuaW1wb3J0IHsgdHJhbnNsYXRpb25zIH0gZnJvbSAnLi90cmFuc2xhdGlvbnMnO1xuXG5pbnRlcmZhY2UgQmFuZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNlbnNvciB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGJhbmRzOiBCYW5kW107XG59XG5cbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8dW5rbm93bj4pID0+IHtcblxuICBjb25zdCB7IHQgfSA9IHVzZUxvY2FsZSh0cmFuc2xhdGlvbnMpO1xuICAvL0VzdGFkb3NcbiAgY29uc3Qgc2VsZWN0ZWRTZW5zb3IgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElNU3RhdGUpID0+IHN0YXRlLm15U3RhdGU/LnNlbGVjdGVkU2Vuc29yKVxuICBjb25zdCBzZWxlY3RlZEltYWdlcmllcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUubXlTdGF0ZT8uc2VsZWN0ZWRJbWFnZXMpXG4gIGNvbnN0IGdlb3Byb2Nlc3MgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElNU3RhdGUpID0+IHN0YXRlLm15U3RhdGU/Lmdlb3Byb2Nlc3MpXG5cbiAgLy9Db25zdGFudGUgZGVsIE1hcGFcbiAgY29uc3QgW2ppbXVNYXBWaWV3LCBzZXRKaW11TWFwVmlld10gPSB1c2VTdGF0ZTxKaW11TWFwVmlldz4obnVsbClcbiAgY29uc3QgW2JhbmRzLCBzZXRCYW5kc10gPSB1c2VTdGF0ZSh7IHI6ICcxJywgZzogJzInIH0pXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSgnMCcpXG4gIGNvbnN0IFtzY2FsZSwgc2V0U2NhbGVdID0gdXNlU3RhdGUoJzUnKVxuICBjb25zdCBbYXZhaWxhYmxlQmFuZHMsIHNldEF2YWlsYWJsZUJhbmRzXSA9IHVzZVN0YXRlPEJhbmRbXT4oW10pO1xuXG4gIC8vVmFsb3JlcyBwYXJhIGdlbmVyYXIgZWwgc3RyZXRjaFJlbmRlcmVyXG4gIGNvbnN0IFtpbnB1dFR5cGVBcmVhTWF4LCBzZXRJbnB1dFR5cGVBcmVhTWF4XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbaW5wdXRUeXBlQXJlYU1pbiwgc2V0SW5wdXRUeXBlQXJlYU1pbl0gPSB1c2VTdGF0ZSgtMSk7XG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoJzEnKTtcblxuXG4gIC8vUmVmZXJlbmNpYXNcbiAgY29uc3QgaW1hZ2VyeUxheWVyUmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IGVzcmlNb2R1bGVzUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XG5cbiAgLy9Fc3RhZG9zIGxvY2FsZXNcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgLy8gRGVmaW5pY2nDs24gZGUgYmFuZGFzIHBvciBzZW5zb3JcbiAgY29uc3Qgc2Vuc29yczogU2Vuc29yW10gPSBbXG4gICAge1xuICAgICAgaWQ6ICd3b3JsZHZpZXcnLFxuICAgICAgdGl0bGU6ICdXb3JsZHZpZXcyJyxcbiAgICAgIGJhbmRzOiBbXG4gICAgICAgIHsgbmFtZTogJ0NvYXN0YWwoMSknLCB2YWx1ZTogJzEnIH0sXG4gICAgICAgIHsgbmFtZTogJ0JsdWUoMiknLCB2YWx1ZTogJzInIH0sXG4gICAgICAgIHsgbmFtZTogJ0dyZWVuKDMpJywgdmFsdWU6ICczJyB9LFxuICAgICAgICB7IG5hbWU6ICdZZWxsb3coNCknLCB2YWx1ZTogJzQnIH0sXG4gICAgICAgIHsgbmFtZTogJ1JlZCg1KScsIHZhbHVlOiAnNScgfSxcbiAgICAgICAgeyBuYW1lOiAnUmVkIEVkZ2UoNiknLCB2YWx1ZTogJzYnIH0sXG4gICAgICAgIHsgbmFtZTogJ05JUiAtMSg3KScsIHZhbHVlOiAnNycgfSxcbiAgICAgICAgeyBuYW1lOiAnTklSIC0yKDgpJywgdmFsdWU6ICc4JyB9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdmYXNhdCcsXG4gICAgICB0aXRsZTogJ09XRF9GYXNhdENfTVNfdjJfMjAyNTAzMTInLFxuICAgICAgYmFuZHM6IFtcbiAgICAgICAgeyBuYW1lOiAnUmVkKDEpJywgdmFsdWU6ICcxJyB9LFxuICAgICAgICB7IG5hbWU6ICdHcmVlbigyKScsIHZhbHVlOiAnMicgfSxcbiAgICAgICAgeyBuYW1lOiAnQmx1ZSgzKScsIHZhbHVlOiAnMycgfSxcbiAgICAgICAgeyBuYW1lOiAnTklSKDQpJywgdmFsdWU6ICc0JyB9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdkZWZhdWx0JyxcbiAgICAgIHRpdGxlOiAnRGVmYXVsdCcsXG4gICAgICBiYW5kczogW1xuICAgICAgICB7IG5hbWU6ICdCbHVlKDEpJywgdmFsdWU6ICcxJyB9LFxuICAgICAgICB7IG5hbWU6ICdHcmVlbigyKScsIHZhbHVlOiAnMicgfSxcbiAgICAgICAgeyBuYW1lOiAnUmVkKDMpJywgdmFsdWU6ICczJyB9LFxuICAgICAgICB7IG5hbWU6ICdOSVIoNCknLCB2YWx1ZTogJzQnIH0sXG4gICAgICBdXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICBzZXRKaW11TWFwVmlldyhqbXYpO1xuICAgIGxvYWRFc3JpTW9kdWxlcygpO1xuXG5cbiAgfTtcblxuICBjb25zdCByZXNldFJlbmRlcmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nTGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKCdGw7NybXVsYSDDrW5kaWNlcycpXG4gICAgaWYgKCFleGlzdGluZ0xheWVyKSByZXR1cm5cbiAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUoZXhpc3RpbmdMYXllcilcbiAgfVxuXG4gIGNvbnN0IGxvYWRFc3JpTW9kdWxlcyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgW1Jhc3RlckZ1bmN0aW9uLCBJbWFnZXJ5TGF5ZXIsIFJhc3RlclN0cmV0Y2hSZW5kZXJlcl0gPSBhd2FpdCBsb2FkTW9kdWxlcyhbXG4gICAgICAgICdlc3JpL2xheWVycy9zdXBwb3J0L1Jhc3RlckZ1bmN0aW9uJyxcbiAgICAgICAgJ2VzcmkvbGF5ZXJzL0ltYWdlcnlMYXllcicsXG4gICAgICAgICdlc3JpL3JlbmRlcmVycy9SYXN0ZXJTdHJldGNoUmVuZGVyZXInLFxuICAgICAgXSk7XG4gICAgICBlc3JpTW9kdWxlc1JlZi5jdXJyZW50ID0geyBSYXN0ZXJGdW5jdGlvbiwgSW1hZ2VyeUxheWVyOiBJbWFnZXJ5TGF5ZXIsIFJhc3RlclN0cmV0Y2hSZW5kZXJlciB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBFU1JJIG1vZHVsZXM6ICcsIGVycik7XG4gICAgfVxuICB9O1xuICBjb25zdCBjcmVhdGVSZXN1bHRMYXllciA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgdHJ5IHtcbiAgICAgIGxldCBzZWxlY3RlZEltYWdlID0gc2VsZWN0ZWRJbWFnZXJpZXNbMF0/Lk9CSkVDVElEO1xuICAgICAgaWYgKHNlbGVjdGVkSW1hZ2UgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyBSYXN0ZXJGdW5jdGlvbiwgUmFzdGVyU3RyZXRjaFJlbmRlcmVyIH0gPSBlc3JpTW9kdWxlc1JlZi5jdXJyZW50XG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBgT0JKRUNUSUQgSU4gKCR7c2VsZWN0ZWRJbWFnZX0pYFxuXG4gICAgICAgIGNvbnN0IGNvbG9yUmFtcE9wdGlvbnMgPSB7XG4gICAgICAgICAgJzEnOiB7IGZyb206ICcjZmZlNDAwJywgdG86ICcjZmYwMDAwJyB9LFxuICAgICAgICAgICcyJzogeyBmcm9tOiAnI2ZmMDAwMCcsIHRvOiAnIzAwRkYwMCcgfSxcbiAgICAgICAgICAnMyc6IHsgZnJvbTogJyMwMEZGMDAnLCB0bzogJyMwMDAwRkYnIH0sXG4gICAgICAgICAgJzQnOiB7IGZyb206ICcjMDBGRkZGJywgdG86ICcjQTAyMEYwJyB9LFxuICAgICAgICAgICc1JzogeyBmcm9tOiAnIzAwMDAwMCcsIHRvOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZFJhbXAgPSBjb2xvclJhbXBPcHRpb25zW2NvbG9yXTtcblxuICAgICAgICBjb25zdCBiYW5kQXJpdGhtZXRpY0Z1bmN0aW9uID0gbmV3IFJhc3RlckZ1bmN0aW9uKHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6ICdCYW5kQXJpdGhtZXRpYycsXG4gICAgICAgICAgb3V0cHV0UGl4ZWxUeXBlOiAnRjMyJyxcbiAgICAgICAgICBmdW5jdGlvbkFyZ3VtZW50czoge1xuICAgICAgICAgICAgTWV0aG9kOiAwLFxuICAgICAgICAgICAgQmFuZEluZGV4ZXM6IGAoQiR7YmFuZHMucn0gLSBCJHtiYW5kcy5nfSkgLyAoQiR7YmFuZHMucn0gKyBCJHtiYW5kcy5nfSkgKiAoJHtvZmZzZXR9ICsgJHtzY2FsZX0pYCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzdHJldGNoUmVuZGVyZXIgPSBuZXcgUmFzdGVyU3RyZXRjaFJlbmRlcmVyKHtcbiAgICAgICAgICBzdHJldGNoVHlwZTogJ21pbi1tYXgnLFxuICAgICAgICAgIGN1c3RvbVN0YXRpc3RpY3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWluOiBpbnB1dFR5cGVBcmVhTWluLFxuICAgICAgICAgICAgICBtYXg6IGlucHV0VHlwZUFyZWFNYXgsXG4gICAgICAgICAgICAgIGF2ZzogMC43NSxcbiAgICAgICAgICAgICAgc3RkZGV2OiAwLjFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGNvbG9yUmFtcDoge1xuICAgICAgICAgICAgdHlwZTogXCJhbGdvcml0aG1pY1wiLFxuICAgICAgICAgICAgZnJvbUNvbG9yOiBzZWxlY3RlZFJhbXAuZnJvbSxcbiAgICAgICAgICAgIHRvQ29sb3I6IHNlbGVjdGVkUmFtcC50byxcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvL1ZlcmlmaWNhbW9zIHF1ZSBubyBleGlzdGEgeSBzaSBleGlzdGUgc2UgZWxpbWluYVxuICAgICAgICBjb25zdCBleGlzdGluZ0xheWVyID0gYXdhaXQgamltdU1hcFZpZXcudmlldy5tYXAuZmluZExheWVyQnlJZCgnRsOzcm11bGEgw61uZGljZXMnKVxuICAgICAgICBpZiAoZXhpc3RpbmdMYXllcikge1xuICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShleGlzdGluZ0xheWVyKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0ltYWdlcnlMYXllciA9IG5ldyBJbWFnZXJ5TGF5ZXIoe1xuICAgICAgICAgIHVybDogc2VsZWN0ZWRTZW5zb3IudXJsLFxuICAgICAgICAgIGlkOiAnRsOzcm11bGEgw61uZGljZXMnLFxuICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgdGl0bGU6IHQoXCJmb3JtdWxhTGF5ZXJcIiksXG4gICAgICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb24sXG4gICAgICAgICAgcmFzdGVyRnVuY3Rpb246IGJhbmRBcml0aG1ldGljRnVuY3Rpb24sXG4gICAgICAgICAgcmVuZGVyZXI6IHN0cmV0Y2hSZW5kZXJlcixcbiAgICAgICAgfSlcblxuICAgICAgICAvL1NlIGFncmVnYSBsYSBudWV2YSBjYXBhXG4gICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChuZXdJbWFnZXJ5TGF5ZXIpXG5cbiAgICAgICAgaW1hZ2VyeUxheWVyUmVmLmN1cnJlbnQgPSBuZXdJbWFnZXJ5TGF5ZXI7XG5cbiAgICAgICAgbmV3SW1hZ2VyeUxheWVyLndoZW4oKCkgPT4ge1xuICAgICAgICAgIGltYWdlcnlMYXllclJlZi5jdXJyZW50ID0gbmV3SW1hZ2VyeUxheWVyO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNhcmdhbmRvIGVsIGxheWVyOlwiLCBlcnIpXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTm8gc2UgcHVkbyBjcmVhciBsYSBjYXBhIGRlIHJlc3VsdGFkbyxcIiwgZXJyb3IpXG4gICAgfVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XG4gICAgICBjb25zdCBsYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5maW5kKGxheWVyID0+IGxheWVyLnRpdGxlID09IFwiRsOzcm11bGEgw61uZGljZXNcIilcbiAgICAgIGlmIChsYXllcikge1xuICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUobGF5ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2dlb3Byb2Nlc3NdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZFNlbnNvcikge1xuICAgICAgY29uc3Qgc2Vuc29yID0gc2Vuc29ycy5maW5kKHMgPT4gcy50aXRsZSA9PT0gc2VsZWN0ZWRTZW5zb3IudGl0bGUpIHx8IHNlbnNvcnNbMl07XG4gICAgICBzZXRBdmFpbGFibGVCYW5kcyhzZW5zb3IuYmFuZHMpO1xuICAgICAgLy8gUmVzZXRlYXIgYSB2YWxvcmVzIHBvciBkZWZlY3RvIGFsIGNhbWJpYXIgc2Vuc29yXG4gICAgICBzZXRCYW5kcyh7IHI6IHNlbnNvci5iYW5kc1swXS52YWx1ZSwgZzogc2Vuc29yLmJhbmRzWzFdLnZhbHVlIH0pO1xuICAgIH1cblxuXG4gIH0sIFtzZWxlY3RlZFNlbnNvcl0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghamltdU1hcFZpZXcpIHJldHVyblxuICAgIGxvYWRFc3JpTW9kdWxlcygpXG4gIH0sIFtqaW11TWFwVmlld10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldCBpbmRleC13aWRnZXRcIj5cbiAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgcHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmRzLW1haW4td2lkZ2V0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmRzLXRpdGxlXCI+XG4gICAgICAgICAgPGg0Pnt0KFwid2lkZ2V0TGFiZWxcIil9PC9oND4gPHNwYW4+ICB7dChcIm9mZnNldFwiKX0gKyB7dChcInNjYWxlXCIpfSAqICgoQS1CKS8oQStCKSk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZEltYWdlcmllcyAmJiBzZWxlY3RlZEltYWdlcmllcz8ubGVuZ3RoIDwgMSA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPnt0KFwiZm9ybXVsYVJ1bGVcIil9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFuZHMtbWFpbi1jb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuZHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmQtc2VsZWN0b3ItaW5kZXhcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmQtaW5wdXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57dChcImJhbmRcIil9IEE6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhbmRzLnJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QmFuZHMoeyAuLi5iYW5kcywgcjogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHthdmFpbGFibGVCYW5kcy5tYXAoKGJhbmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2ByLSR7aW5kZXh9YH0gdmFsdWU9e2JhbmQudmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JhbmQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3QoXCJiYW5kXCIpfSBCOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYW5kcy5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJhbmRzKHsgLi4uYmFuZHMsIGc6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7YXZhaWxhYmxlQmFuZHMubWFwKChiYW5kLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtgZy0ke2luZGV4fWB9IHZhbHVlPXtiYW5kLnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYW5kLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuZC1zZWxlY3Rvci1pbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sLWdyb3VwLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3QoXCJvZmZzZXRcIil9OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0IHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e29mZnNldH0gb25DaGFuZ2U9e2UgPT4gc2V0T2Zmc2V0KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbC1ncm91cC1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt0KFwic2NhbGVcIil9OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0IHZhbHVlPXtzY2FsZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgc2l6ZT1cInNtXCIgb25DaGFuZ2U9e2UgPT4gc2V0U2NhbGUoZS50YXJnZXQudmFsdWUpfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt0KFwicmVuZGVyXCIpfTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2NvbG9yfSBzaXplPVwic21cIiBvbkNoYW5nZT17ZSA9PiBzZXRDb2xvcihlLnRhcmdldC52YWx1ZSl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+e3QoXCJ5ZWxsb3dyZWRcIil9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPnt0KFwicmVkZ3JlZW5cIil9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPnt0KFwiZ3JlZW5ibHVlXCIpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj57dChcImNpYW5wdXJwbGVcIil9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPnt0KFwiYmxhY2t3aGl0ZVwiKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdHlwZT1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIHR5cGU9XCJET05VVFwiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Y3JlYXRlUmVzdWx0TGF5ZXJ9IHNpemU9XCJzbVwiIHR5cGU9XCJwcmltYXJ5XCI+e3QoXCJhcHBseVwiKX08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17cmVzZXRSZW5kZXJlcn0gc2l6ZT1cInNtXCIgdHlwZT1cInByaW1hcnlcIj57dChcInJlc2V0XCIpfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG5cbiAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgPFRvYXN0Q29udGFpbmVyIHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCIgYXV0b0Nsb3NlPXszMDAwfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=