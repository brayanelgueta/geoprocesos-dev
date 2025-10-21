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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/deteccionCambio/src/runtime/assets/style.css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/deteccionCambio/src/runtime/assets/style.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.widgetChangeDetection {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #052042;
}

.homeCD {
  height: 100%;
  width: 100%;
  padding: 15px;
}

.contentWidgetsCD {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.main-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 100%;
  width: 100%;
}

.contentNameImgs {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  gap: 5px;
  font-size: 16px;
  p {
    width: 100%;
  }
}

.contentBtnFlujo {
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: start;
  align-items: center;
  gap: 5px;
  button {
    background-color: #1a5276;
    width: 100%;
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

.colorBoderBottom1 {
  border-bottom: white solid 1px;
}

.colorBoderBottom2 {
  border-bottom: rgb(78, 248, 89) solid 1px;
}

.colorBoderBottom3 {
  border-bottom: rgb(248, 78, 78) solid 1px;
}

.contentNameImg {
  display: flex;
  width: 100%;
  margin-bottom: 12px;
}

.contentNameImg p {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  padding: 0;
}

.contentNameImg #img1Data, .contentNameImg #img2Data {
  color: white(0, 193, 0);
}

/* #parrafoValidicion{
    margin-bottom: 5px;
    margin-top: 10px;
    margin-left: 4px;
    font-size: 16px;
} */
.change-detection-description {
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

.graphic-container {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  p {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  #graphic-image {
    width: 100%;
  }
}

.btnCD {
  color: white;
  width: auto;
  height: 30px;
  text-decoration: none;
  border: none;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/deteccionCambio/src/runtime/assets/style.css","webpack://./../../../Nueva%20carpeta/ArcGISExperienceBuilder/client/your-extensions/widgets/deteccionCambio/src/runtime/assets/style.css"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,SAAA;EACA,yBAAA;ACCJ;;ADCA;EACI,YAAA;EACA,WAAA;EACA,aAAA;ACEJ;;ADCA;EACI,aAAA;EACA,8BAAA;EACA,YAAA;EACA,WAAA;ACEJ;;ADAA;EACI,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;ACGJ;;ADAA;EACI,aAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;EACA,eAAA;EAEA;IACQ,WAAA;ECEV;AACF;;ADAA;EACI,aAAA;EACA,UAAA;EACA,YAAA;EACA,sBAAA;EACA,mBAAA;EACA,QAAA;EAEA;IACA,yBAAA;IACA,WAAA;IACA,OAAA;IACA,oBAAA;IACA,YAAA;IACA,YAAA;IACA,yBAAA;IAEA;MACE,yBAAA;MACA,oCAAA;MACA,wCAAA;ICCF;EACF;AACF;;ADEA;EACI,8BAAA;ACCJ;;ADCA;EACI,yCAAA;ACEJ;;ADAA;EACI,yCAAA;ACGJ;;ADDA;EACI,aAAA;EACA,WAAA;EACA,mBAAA;ACIJ;;ADDA;EACI,eAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;ACIJ;;ADDA;EACI,uBAAA;ACIJ;;ADFA;;;;;GAAA;AAMA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA;IACI,SAAA;IACA,UAAA;IACA,eAAA;IACA,WAAA;ECKN;AACF;;ADHA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EAEA;IACI,SAAA;IACA,UAAA;IACA,eAAA;ECKN;EDHE;IACI,WAAA;ECKN;AACF;;ADFA;EACI,YAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,YAAA;ACKJ","sourcesContent":[".widgetChangeDetection {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  background-color: #052042;\n}\n\n.homeCD {\n  height: 100%;\n  width: 100%;\n  padding: 15px;\n}\n\n.contentWidgetsCD {\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: start;\n  height: 100%;\n  width: 100%;\n}\n\n.contentNameImgs {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 5px;\n  gap: 5px;\n  font-size: 16px;\n  p {\n    width: 100%;\n  }\n}\n\n.contentBtnFlujo {\n  display: flex;\n  width: 50%;\n  height: 100%;\n  justify-content: start;\n  align-items: center;\n  gap: 5px;\n  button {\n    background-color: #1a5276;\n    width: 100%;\n    flex: 1;\n    padding: 0.5rem 1rem;\n    height: 2rem;\n    margin: 1rem;\n    transition: all 0.3s ease;\n    &:hover {\n      border: 1px solid #008ecc;\n      background-color: #052042 !important;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n}\n\n.colorBoderBottom1 {\n  border-bottom: white solid 1px;\n}\n\n.colorBoderBottom2 {\n  border-bottom: rgb(78, 248, 89) solid 1px;\n}\n\n.colorBoderBottom3 {\n  border-bottom: rgb(248, 78, 78) solid 1px;\n}\n\n.contentNameImg {\n  display: flex;\n  width: 100%;\n  margin-bottom: 12px;\n}\n\n.contentNameImg p {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n  padding: 0;\n}\n\n.contentNameImg #img1Data, .contentNameImg #img2Data {\n  color: white(0, 193, 0);\n}\n\n/* #parrafoValidicion{\n    margin-bottom: 5px;\n    margin-top: 10px;\n    margin-left: 4px;\n    font-size: 16px;\n} */\n.change-detection-description {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: start;\n  align-items: start;\n  p {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    color: #fff;\n  }\n}\n\n.graphic-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  padding: 1rem;\n  flex-direction: column;\n  p {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n  }\n  #graphic-image {\n    width: 100%;\n  }\n}\n\n.btnCD {\n  color: white;\n  width: auto;\n  height: 30px;\n  text-decoration: none;\n  border: none;\n}",".widgetChangeDetection {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  background-color: #052042;\n}\n\n.homeCD {\n  height: 100%;\n  width: 100%;\n  padding: 15px;\n}\n\n.contentWidgetsCD {\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: start;\n  height: 100%;\n  width: 100%;\n}\n\n.contentNameImgs {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 5px;\n  gap: 5px;\n  font-size: 16px;\n  p {\n    width: 100%;\n  }\n}\n\n.contentBtnFlujo {\n  display: flex;\n  width: 50%;\n  height: 100%;\n  justify-content: start;\n  align-items: center;\n  gap: 5px;\n  button {\n    background-color: #1a5276;\n    width: 100%;\n    flex: 1;\n    padding: 0.5rem 1rem;\n    height: 2rem;\n    margin: 1rem;\n    transition: all 0.3s ease;\n    &:hover {\n      border: 1px solid #008ecc;\n      background-color: #052042 !important;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n}\n\n.colorBoderBottom1 {\n  border-bottom: white solid 1px;\n}\n\n.colorBoderBottom2 {\n  border-bottom: rgb(78, 248, 89) solid 1px;\n}\n\n.colorBoderBottom3 {\n  border-bottom: rgb(248, 78, 78) solid 1px;\n}\n\n.contentNameImg {\n  display: flex;\n  width: 100%;\n  margin-bottom: 12px;\n}\n\n.contentNameImg p {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n  padding: 0;\n}\n\n.contentNameImg #img1Data, .contentNameImg #img2Data {\n  color: white(0, 193, 0);\n}\n\n/* #parrafoValidicion{\n    margin-bottom: 5px;\n    margin-top: 10px;\n    margin-left: 4px;\n    font-size: 16px;\n} */\n.change-detection-description {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: start;\n  align-items: start;\n  p {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    color: #fff;\n  }\n}\n\n.graphic-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  padding: 1rem;\n  flex-direction: column;\n  p {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n  }\n  #graphic-image {\n    width: 100%;\n  }\n}\n\n.btnCD {\n  color: white;\n  width: auto;\n  height: 30px;\n  text-decoration: none;\n  border: none;\n}"],"sourceRoot":""}]);
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

/***/ "./your-extensions/widgets/deteccionCambio/src/runtime/assets/style.css":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/deteccionCambio/src/runtime/assets/style.css ***!
  \******************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/deteccionCambio/src/runtime/assets/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./your-extensions/widgets/deteccionCambio/src/runtime/translations.ts":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/deteccionCambio/src/runtime/translations.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translations: () => (/* binding */ translations)
/* harmony export */ });
const translations = {
    es: {
        widgetLabel: "Detección de cambio",
        text: "Necesita seleccionar 2 imagenes para ejecutar la detección de cambio",
        graphicLabel: "Gráfico comparativo",
        validation: "Validación",
        withoutValidation: "Sin validación",
        image: "Imagen",
        validate: "Validar",
        runQuery: "Ejecutar consulta",
        superpositionError: "Error al calcular superposición, intenta de nuevo.",
        valid: "Las imágenes están superpuestas",
        invalid: "Las imágenes no están superpuestas"
    },
    en: {
        widgetLabel: "Change detection",
        text: "You need to select 2 images to run change detection.",
        graphicLabel: "Comparative chart",
        validation: "Validation",
        withoutValidation: "No validation",
        image: "Image",
        validate: "Validate",
        runQuery: "Run query",
        superpositionError: "Error calculating overlap, please try again.",
        valid: "The images are superimposed",
        invalid: "The images are not superimposed"
    },
};


/***/ }),

/***/ "./your-extensions/widgets/deteccionCambio/src/runtime/img/img2.png":
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/deteccionCambio/src/runtime/img/img2.png ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

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
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/deteccionCambio/src/runtime/widget.tsx ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/style.css */ "./your-extensions/widgets/deteccionCambio/src/runtime/assets/style.css");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/esm/esri-loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _hooks_useLocale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useLocale */ "./your-extensions/hooks/useLocale.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./translations */ "./your-extensions/widgets/deteccionCambio/src/runtime/translations.ts");
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
    const { t } = (0,_hooks_useLocale__WEBPACK_IMPORTED_MODULE_7__.useLocale)(_translations__WEBPACK_IMPORTED_MODULE_8__.translations);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
    const selectedImageries = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state) => { var _a; return ((_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedImages) || []; });
    const selectedSensor = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedSensor; });
    const changeGeoProcess = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.isReady; });
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const imgRango2 = __webpack_require__(/*! ./img/img2.png */ "./your-extensions/widgets/deteccionCambio/src/runtime/img/img2.png");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [loadQuery, setLoadQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isValid, setIsValid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isEjecuted, setIsEjecuted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const activeViewChangeHandler = (jmv) => {
        setJimuMapView(jmv);
    };
    const ejecutarConsulta = () => __awaiter(void 0, void 0, void 0, function* () {
        setLoadQuery(true);
        try {
            var imagen1 = selectedImageries[0].OBJECTID;
            var imagen2 = selectedImageries[1].OBJECTID;
            if (imagen1 == null && imagen2 == null) {
                throw new Error(`Error en la carga de imagenes: ${imagen1} , ${imagen2}`);
            }
            // Construir la URL con los parámetros
            const proceso = 1;
            const entrada = imagen1 + "," + imagen2;
            //Produccion
            // const response = await fetch(`/proxy?proceso=${proceso}&Entrada=${entrada}`, {
            //   method: 'GET',
            // });
            //Desarrollo
            const response = yield fetch(`http://127.0.0.1:5000/proxy?proceso=${proceso}&Entrada=${entrada}&url=${selectedSensor.url}`, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
                setLoadQuery(false);
            }
            const data = yield response.json();
            loadImageryLayer(data.urlTif);
        }
        catch (error) {
            console.error('Error al enviar la solicitud:', error);
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(t("superpositionError"), {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: react_toastify__WEBPACK_IMPORTED_MODULE_6__.Bounce,
            });
        }
        finally {
            setLoadQuery(false);
        }
    });
    const loadImageryLayer = (url_file) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // const baseUrl = window.location.origin;
            const baseUrl = "http://127.0.0.1:5000";
            const imageUrl = String(url_file);
            const structuredUrl = baseUrl + imageUrl;
            // Validar la URL con una solicitud fetch
            const response = yield fetch(String(structuredUrl), { method: "GET" });
            if (!response.ok) {
                throw new Error(`Error al validar la URL. Estado: ${response.status}`);
            }
            // Cargar módulos necesarios de la API de ArcGIS
            const [ImageryTileLayer] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_4__.loadModules)(["esri/layers/ImageryTileLayer"]);
            // Crear el ImageryTileLayer
            const imageryLayer = new ImageryTileLayer({
                id: "detección de cambio",
                name: t("widgetLabel"),
                url: structuredUrl,
            });
            // Agregar la capa al mapa
            if (jimuMapView) {
                jimuMapView.view.map.add(imageryLayer);
                imageryLayer.when(() => {
                    jimuMapView.view.goTo(imageryLayer.fullExtent);
                });
                setIsEjecuted(true);
            }
        }
        catch (error) {
            console.error("Error al cargar el ImageryTileLayer:", error);
        }
    });
    const validarSuperposicion = () => {
        setLoading(true);
        try {
            const imageryLayer = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view.map.findLayerById(selectedSensor === null || selectedSensor === void 0 ? void 0 : selectedSensor.id);
            if (jimuMapView && imageryLayer) {
                const loadEsriModules = () => __awaiter(void 0, void 0, void 0, function* () {
                    const [Query, geometryEngine] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_4__.loadModules)([
                        "esri/rest/support/Query",
                        "esri/geometry/geometryEngine",
                    ]);
                    if (!isNaN(selectedImageries[0].OBJECTID) && !isNaN(selectedImageries[1].OBJECTID)) {
                        // Crear la consulta para obtener las geometrías de las imágenes
                        const query = new Query();
                        query.where = `OBJECTID IN (${selectedImageries[0].OBJECTID}, ${selectedImageries[1].OBJECTID})`; // Buscar las imágenes por sus ObjectID
                        query.returnGeometry = true; // Devolver geometrías
                        query.outFields = ["OBJECTID"]; // Devolver el campo OBJECTID
                        // Ejecutar la consulta en la capa
                        const results = yield imageryLayer.queryFeatures(query);
                        // Verificar si se obtuvieron resultados
                        if (results.features.length === 2) {
                            const geometries = results.features.map((feature) => feature.geometry);
                            // Validar si hay intersección entre las dos geometrías
                            const intersectan = geometryEngine.intersects(geometries[0], geometries[1]);
                            const elements = document.querySelectorAll(".contentNameImg");
                            if (intersectan) {
                                setIsValid(true);
                                // Iterar sobre cada elemento y aplicar los cambios
                                elements.forEach((element) => {
                                    element.classList.remove("colorBoderBottom1");
                                    element.classList.add("colorBoderBottom2");
                                });
                                document.getElementById("img1Data").style.color = "rgb(78, 248, 89)";
                                document.getElementById("img2Data").style.color = "rgb(78, 248, 89)";
                                document.getElementById("validacionCD").style.color = "rgb(78, 248, 89)";
                                document.getElementById("validacionCD").innerText = t("valid");
                            }
                            else {
                                // Iterar sobre cada elemento y aplicar los cambios
                                elements.forEach((element) => {
                                    element.classList.remove("colorBoderBottom1");
                                    element.classList.add("colorBoderBottom3");
                                });
                                document.getElementById("img1Data").style.color = "rgb(248, 78, 78)";
                                document.getElementById("img2Data").style.color = "rgb(248, 78, 78)";
                                document.getElementById("validacionCD").style.color = "rgb(248, 78, 78)";
                                document.getElementById("validacionCD").innerText = t("invalid");
                            }
                        }
                        else {
                            console.error("No se encontraron ambas geometrías para validar la superposición");
                        }
                    }
                    else {
                        throw new Error("Uno o ambos valores no se pueden convertir a entero.");
                    }
                });
                loadEsriModules();
            }
            else {
                console.error("No se encontró el mapa o la capa");
                setLoading(false);
            }
        }
        catch (error) {
            console.error("Error al consultar las geometrías:", error);
            setLoading(false);
        }
        setLoading(false);
    };
    //Limpia las capas generadas si se cambia las imagenes seleccionadas
    const cleanLayers = (id) => {
        if (jimuMapView) {
            const layer = jimuMapView.view.map.findLayerById(id);
            if (layer) {
                jimuMapView.view.map.remove(layer);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        dispatch({ type: "CHANGE_DETECTION_READY", val: true });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setIsValid(false);
        setIsEjecuted(false);
        cleanLayers("detección de cambio");
    }, [selectedImageries, changeGeoProcess]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "jimu-widget widgetChangeDetection" },
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler })),
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: 'homeCD' },
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, null),
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("h4", null, t("widgetLabel")),
            selectedImageries && (selectedImageries === null || selectedImageries === void 0 ? void 0 : selectedImageries.length) < 2 ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: 'change-detection-description' },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null, t("text"))))
                :
                    (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: 'contentWidgetsCD' }, isEjecuted === true ?
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: 'graphic-container' },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null, t("graphicLabel")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("img", { id: 'graphic-image', src: imgRango2 }))
                        :
                            (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: 'main-content', id: 'btn1Data' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: 'contentNameImgs' },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", { id: 'parrafoValidacion' },
                                        t("validation"),
                                        " : ",
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("b", { id: 'validacionCD' }, t("withoutValidation"))), selectedImageries === null || selectedImageries === void 0 ? void 0 :
                                    selectedImageries.map((item, index) => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { id: 'contentNameImg', className: 'contentNameImg colorBoderBottom1' },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null,
                                            t("image"),
                                            " ",
                                            index + 1,
                                            ":"),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", { id: `img${index + 1}Data` }, item === null || item === void 0 ? void 0 : item.OBJECTID))))),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: 'contentBtnFlujo' }, !isValid ?
                                    (loading === true ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { size: "sm", type: "primary" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Loading, { type: "DONUT", height: 20, width: 20 })))
                                        :
                                            (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: validarSuperposicion, size: "sm" }, t("validate")))) :
                                    (loadQuery === true ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { size: "sm", type: "primary" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Loading, { type: "DONUT", height: 20, width: 20 })))
                                        :
                                            (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: ejecutarConsulta, size: "sm", type: "primary" }, t("runQuery"))))))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9kZXRlY2Npb25DYW1iaW8vZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDakI7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxrUkFBa1IsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxL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Q0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0Esa0RBQWtELGtDQUFrQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsWUFBWSxJQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUMsQ0FBQyxDQUNqQiwyREFBQywyQ0FBTSxJQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVM7d0NBQzlCLDJEQUFDLDRDQUFPLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUksQ0FDeEMsQ0FFVjt3Q0FDQyxDQUFDOzRDQUNELENBQ0UsMkRBQUMsMkNBQU0sSUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFDLElBQUksSUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQVUsQ0FDMUUsQ0FDSixDQUFDLENBQUM7b0NBQ0gsQ0FDRSxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNuQiwyREFBQywyQ0FBTSxJQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVM7d0NBQzlCLDJEQUFDLDRDQUFPLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUksQ0FDeEMsQ0FFVjt3Q0FDQyxDQUFDOzRDQUNELENBQ0UsMkRBQUMsMkNBQU0sSUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsU0FBUyxJQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBVSxDQUNyRixDQUNKLENBRUQsQ0FDRixDQUNQLENBRUQsQ0FDUCxDQUVELENBQ0YsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxNQUFNLEVBQUM7QUFFZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kZXRlY2Npb25DYW1iaW8vc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9lc3JpLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy9jc3MuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL3V0aWxzL3VybC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZGV0ZWNjaW9uQ2FtYmlvL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3M/Mjk5NyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvaG9va3MvdXNlTG9jYWxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kZXRlY2Npb25DYW1iaW8vc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kZXRlY2Npb25DYW1iaW8vc3JjL3J1bnRpbWUvaW1nL2ltZzIucG5nIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS93aXRoLXNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9kaXN0L3JlYWN0LXJlZHV4Lm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXRvYXN0aWZ5L2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kZXRlY2Npb25DYW1iaW8vc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndpZGdldENoYW5nZURldGVjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0Mjtcbn1cblxuLmhvbWVDRCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5jb250ZW50V2lkZ2V0c0NEIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50TmFtZUltZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBnYXA6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uY29udGVudEJ0bkZsdWpvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDIgIWltcG9ydGFudDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgfVxuICB9XG59XG5cbi5jb2xvckJvZGVyQm90dG9tMSB7XG4gIGJvcmRlci1ib3R0b206IHdoaXRlIHNvbGlkIDFweDtcbn1cblxuLmNvbG9yQm9kZXJCb3R0b20yIHtcbiAgYm9yZGVyLWJvdHRvbTogcmdiKDc4LCAyNDgsIDg5KSBzb2xpZCAxcHg7XG59XG5cbi5jb2xvckJvZGVyQm90dG9tMyB7XG4gIGJvcmRlci1ib3R0b206IHJnYigyNDgsIDc4LCA3OCkgc29saWQgMXB4O1xufVxuXG4uY29udGVudE5hbWVJbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmNvbnRlbnROYW1lSW1nIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRlbnROYW1lSW1nICNpbWcxRGF0YSwgLmNvbnRlbnROYW1lSW1nICNpbWcyRGF0YSB7XG4gIGNvbG9yOiB3aGl0ZSgwLCAxOTMsIDApO1xufVxuXG4vKiAjcGFycmFmb1ZhbGlkaWNpb257XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59ICovXG4uY2hhbmdlLWRldGVjdGlvbi1kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi5ncmFwaGljLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAjZ3JhcGhpYy1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmJ0bkNEIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2RldGVjY2lvbkNhbWJpby9zcmMvcnVudGltZS9hc3NldHMvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9OdWV2YSUyMGNhcnBldGEvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2RldGVjY2lvbkNhbWJpby9zcmMvcnVudGltZS9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0VKOztBRENBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0dKOztBREFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUVBO0lBQ1EsV0FBQTtFQ0VWO0FBQ0Y7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUVBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsT0FBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtJQUVBO01BQ0UseUJBQUE7TUFDQSxvQ0FBQTtNQUNBLHdDQUFBO0lDQ0Y7RUFDRjtBQUNGOztBREVBO0VBQ0ksOEJBQUE7QUNDSjs7QURDQTtFQUNJLHlDQUFBO0FDRUo7O0FEQUE7RUFDSSx5Q0FBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0lKOztBRERBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNJSjs7QUREQTtFQUNJLHVCQUFBO0FDSUo7O0FERkE7Ozs7O0dBQUE7QUFNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQTtJQUNJLFNBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUNLTjtBQUNGOztBREhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUE7SUFDSSxTQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7RUNLTjtFREhFO0lBQ0ksV0FBQTtFQ0tOO0FBQ0Y7O0FERkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNLSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2lkZ2V0Q2hhbmdlRGV0ZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjA0MjtcXG59XFxuXFxuLmhvbWVDRCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5jb250ZW50V2lkZ2V0c0NEIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGVudE5hbWVJbWdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBnYXA6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHAge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLmNvbnRlbnRCdG5GbHVqbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDIgIWltcG9ydGFudDtcXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5jb2xvckJvZGVyQm90dG9tMSB7XFxuICBib3JkZXItYm90dG9tOiB3aGl0ZSBzb2xpZCAxcHg7XFxufVxcblxcbi5jb2xvckJvZGVyQm90dG9tMiB7XFxuICBib3JkZXItYm90dG9tOiByZ2IoNzgsIDI0OCwgODkpIHNvbGlkIDFweDtcXG59XFxuXFxuLmNvbG9yQm9kZXJCb3R0b20zIHtcXG4gIGJvcmRlci1ib3R0b206IHJnYigyNDgsIDc4LCA3OCkgc29saWQgMXB4O1xcbn1cXG5cXG4uY29udGVudE5hbWVJbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmNvbnRlbnROYW1lSW1nIHAge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250ZW50TmFtZUltZyAjaW1nMURhdGEsIC5jb250ZW50TmFtZUltZyAjaW1nMkRhdGEge1xcbiAgY29sb3I6IHdoaXRlKDAsIDE5MywgMCk7XFxufVxcblxcbi8qICNwYXJyYWZvVmFsaWRpY2lvbntcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufSAqL1xcbi5jaGFuZ2UtZGV0ZWN0aW9uLWRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbn1cXG5cXG4uZ3JhcGhpYy1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuICAjZ3JhcGhpYy1pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uYnRuQ0Qge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVwiLFwiLndpZGdldENoYW5nZURldGVjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDI7XFxufVxcblxcbi5ob21lQ0Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uY29udGVudFdpZGdldHNDRCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnROYW1lSW1ncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZ2FwOiA1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5jb250ZW50QnRuRmx1am8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOGVjYztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyICFpbXBvcnRhbnQ7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uY29sb3JCb2RlckJvdHRvbTEge1xcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgc29saWQgMXB4O1xcbn1cXG5cXG4uY29sb3JCb2RlckJvdHRvbTIge1xcbiAgYm9yZGVyLWJvdHRvbTogcmdiKDc4LCAyNDgsIDg5KSBzb2xpZCAxcHg7XFxufVxcblxcbi5jb2xvckJvZGVyQm90dG9tMyB7XFxuICBib3JkZXItYm90dG9tOiByZ2IoMjQ4LCA3OCwgNzgpIHNvbGlkIDFweDtcXG59XFxuXFxuLmNvbnRlbnROYW1lSW1nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5jb250ZW50TmFtZUltZyBwIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGVudE5hbWVJbWcgI2ltZzFEYXRhLCAuY29udGVudE5hbWVJbWcgI2ltZzJEYXRhIHtcXG4gIGNvbG9yOiB3aGl0ZSgwLCAxOTMsIDApO1xcbn1cXG5cXG4vKiAjcGFycmFmb1ZhbGlkaWNpb257XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn0gKi9cXG4uY2hhbmdlLWRldGVjdGlvbi1kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG59XFxuXFxuLmdyYXBoaWMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcbiAgI2dyYXBoaWMtaW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLmJ0bkNEIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qXG4gIENvcHlyaWdodCAoYykgMjAyMiBFc3JpXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vLyByZS1leHBvcnQgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG5leHBvcnQgeyBsb2FkTW9kdWxlcyB9IGZyb20gJy4vbW9kdWxlcyc7XG5leHBvcnQgeyBnZXRTY3JpcHQsIGlzTG9hZGVkLCBsb2FkU2NyaXB0LCBzZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vc2NyaXB0JztcbmV4cG9ydCB7IGxvYWRDc3MgfSBmcm9tICcuL3V0aWxzL2Nzcyc7XG5leHBvcnQgeyB1dGlscyB9O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGdldFNjcmlwdCwgaXNMb2FkZWQsIGxvYWRTY3JpcHQgfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG4vLyB3cmFwIERvam8ncyByZXF1aXJlKCkgaW4gYSBwcm9taXNlXG5mdW5jdGlvbiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKSB7XG4gICAgcmV0dXJuIG5ldyB1dGlscy5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgbG9hZGluZyB0aGUgZXNyaS9kb2pvIHNjcmlwdHMsIHJlamVjdCB3aXRoIHRoZSBlcnJvci5cbiAgICAgICAgdmFyIGVycm9ySGFuZGxlciA9IHdpbmRvd1sncmVxdWlyZSddLm9uKCdlcnJvcicsIHJlamVjdCk7XG4gICAgICAgIHdpbmRvd1sncmVxdWlyZSddKG1vZHVsZXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlbW92ZSBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICBlcnJvckhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIHdpdGggdGhlIHBhcmFtZXRlcnMgZnJvbSBkb2pvIHJlcXVpcmUgYXMgYW4gYXJyYXkuXG4gICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbiBhcnJheSBvZiB0aGUgcmVxdWlyZWQgbW9kdWxlc1xuLy8gYWxzbyB3aWxsIGF0dGVtcHQgdG8gbGF6eSBsb2FkIHRoZSBBcmNHSVMgQVBJIGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGxvYWRlZFxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNb2R1bGVzKG1vZHVsZXMsIGxvYWRTY3JpcHRPcHRpb25zKSB7XG4gICAgaWYgKGxvYWRTY3JpcHRPcHRpb25zID09PSB2b2lkIDApIHsgbG9hZFNjcmlwdE9wdGlvbnMgPSB7fTsgfVxuICAgIGlmICghaXNMb2FkZWQoKSkge1xuICAgICAgICAvLyBzY3JpcHQgaXMgbm90IHlldCBsb2FkZWQsIGlzIGl0IGluIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmc/XG4gICAgICAgIHZhciBzY3JpcHQgPSBnZXRTY3JpcHQoKTtcbiAgICAgICAgdmFyIHNyYyA9IHNjcmlwdCAmJiBzY3JpcHQuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgaWYgKCFsb2FkU2NyaXB0T3B0aW9ucy51cmwgJiYgc3JjKSB7XG4gICAgICAgICAgICAvLyBzY3JpcHQgaXMgc3RpbGwgbG9hZGluZyBhbmQgdXNlciBkaWQgbm90IHNwZWNpZnkgYSBVUkxcbiAgICAgICAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIGRlZmF1bHQgdG8gdGhlIFVSTCB0aGF0J3MgYmVpbmcgbG9hZGVkXG4gICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGRlZmF1bHRpbmcgdG8gdGhlIGxhdGVzdCA0LnggVVJMXG4gICAgICAgICAgICBsb2FkU2NyaXB0T3B0aW9ucy51cmwgPSBzcmM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXR0ZW1wdCB0byBsb2FkIHRoZSBzY3JpcHQgdGhlbiBsb2FkIHRoZSBtb2R1bGVzXG4gICAgICAgIHJldHVybiBsb2FkU2NyaXB0KGxvYWRTY3JpcHRPcHRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlcXVpcmVNb2R1bGVzKG1vZHVsZXMpOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHNjcmlwdCBpcyBhbHJlYWR5IGxvYWRlZCwganVzdCBsb2FkIHRoZSBtb2R1bGVzXG4gICAgICAgIHJldHVybiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKTtcbiAgICB9XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgbG9hZENzcyB9IGZyb20gJy4vdXRpbHMvY3NzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IGdldENkblVybCB9IGZyb20gJy4vdXRpbHMvdXJsJztcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZnVuY3Rpb24gY3JlYXRlU2NyaXB0KHVybCkge1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1lc3JpLWxvYWRlcicsICdsb2FkaW5nJyk7XG4gICAgcmV0dXJuIHNjcmlwdDtcbn1cbi8vIGFkZCBhIG9uZS10aW1lIGxvYWQgaGFuZGxlciB0byBzY3JpcHRcbi8vIGFuZCBvcHRpb25hbGx5IGFkZCBhIG9uZSB0aW1lIGVycm9yIGhhbmRsZXIgYXMgd2VsbFxuZnVuY3Rpb24gaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIGNhbGxiYWNrLCBlcnJiYWNrKSB7XG4gICAgdmFyIG9uU2NyaXB0RXJyb3I7XG4gICAgaWYgKGVycmJhY2spIHtcbiAgICAgICAgLy8gc2V0IHVwIGFuIGVycm9yIGhhbmRsZXIgYXMgd2VsbFxuICAgICAgICBvblNjcmlwdEVycm9yID0gaGFuZGxlU2NyaXB0RXJyb3Ioc2NyaXB0LCBlcnJiYWNrKTtcbiAgICB9XG4gICAgdmFyIG9uU2NyaXB0TG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gcGFzcyB0aGUgc2NyaXB0IHRvIHRoZSBjYWxsYmFja1xuICAgICAgICBjYWxsYmFjayhzY3JpcHQpO1xuICAgICAgICAvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uU2NyaXB0TG9hZCwgZmFsc2UpO1xuICAgICAgICBpZiAob25TY3JpcHRFcnJvcikge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBlcnJvciBsaXN0ZW5lciBhcyB3ZWxsXG4gICAgICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25TY3JpcHRMb2FkLCBmYWxzZSk7XG59XG4vLyBhZGQgYSBvbmUtdGltZSBlcnJvciBoYW5kbGVyIHRvIHRoZSBzY3JpcHRcbmZ1bmN0aW9uIGhhbmRsZVNjcmlwdEVycm9yKHNjcmlwdCwgY2FsbGJhY2spIHtcbiAgICB2YXIgb25TY3JpcHRFcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIHJlamVjdCB0aGUgcHJvbWlzZSBhbmQgcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgY2FsbGJhY2soZS5lcnJvciB8fCBuZXcgRXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgYXR0ZW1wdGluZyB0byBsb2FkIFwiLmNvbmNhdChzY3JpcHQuc3JjKSkpO1xuICAgICAgICAvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgfTtcbiAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgcmV0dXJuIG9uU2NyaXB0RXJyb3I7XG59XG4vLyBhbGxvdyB0aGUgdXNlciB0byBjb25maWd1cmUgZGVmYXVsdCBzY3JpcHQgb3B0aW9ucyByYXRoZXIgdGhhbiBwYXNzaW5nIG9wdGlvbnMgdG8gYGxvYWRNb2R1bGVzYCBlYWNoIHRpbWVcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBkZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG59XG4vLyBnZXQgdGhlIHNjcmlwdCBpbmplY3RlZCBieSB0aGlzIGxpYnJhcnlcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JpcHQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLWVzcmktbG9hZGVyXScpO1xufVxuLy8gaGFzIEFyY0dJUyBBUEkgYmVlbiBsb2FkZWQgb24gdGhlIHBhZ2UgeWV0P1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9hZGVkKCkge1xuICAgIHZhciBnbG9iYWxSZXF1aXJlID0gd2luZG93WydyZXF1aXJlJ107XG4gICAgLy8gLm9uKCkgZW5zdXJlcyB0aGF0IGl0J3MgRG9qbydzIEFNRCBsb2FkZXJcbiAgICByZXR1cm4gZ2xvYmFsUmVxdWlyZSAmJiBnbG9iYWxSZXF1aXJlLm9uO1xufVxuLy8gbG9hZCB0aGUgQXJjR0lTIEFQSSBvbiB0aGUgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTY3JpcHQob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgLy8gd2Ugd291bGQgaGF2ZSBsaWtlZCB0byB1c2Ugc3ByZWFkIGxpa2UgeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9XG4gICAgLy8gYnV0IFRTIHdvdWxkIGluamVjdCBhIHBvbHlmaWxsIHRoYXQgd291bGQgcmVxdWlyZSB1c2UgdG8gY29uZmlndXJlIHJvbGx1cCB3IGNvbnRlbnQ6ICd3aW5kb3cnXG4gICAgLy8gaWYgd2UgaGF2ZSBhbm90aGVyIG9jY2FzaW9uIHRvIHVzZSBzcHJlYWQsIGxldCdzIGRvIHRoYXQgYW5kIHJlcGxhY2UgdGhpcyBmb3IuLi5pblxuICAgIHZhciBvcHRzID0ge307XG4gICAgW2RlZmF1bHRPcHRpb25zLCBvcHRpb25zXS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIG9wdHNbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBVUkwgdG8gbG9hZFxuICAgIHZhciB2ZXJzaW9uID0gb3B0cy52ZXJzaW9uO1xuICAgIHZhciB1cmwgPSBvcHRzLnVybCB8fCBnZXRDZG5VcmwodmVyc2lvbik7XG4gICAgcmV0dXJuIG5ldyB1dGlscy5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9IGdldFNjcmlwdCgpO1xuICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgICAvLyB0aGUgQVBJIGlzIGFscmVhZHkgbG9hZGVkIG9yIGluIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmcuLi5cbiAgICAgICAgICAgIC8vIE5PVEU6IGhhdmUgdG8gdGVzdCBhZ2FpbnN0IHNjciBhdHRyaWJ1dGUgdmFsdWUsIG5vdCBzY3JpcHQuc3JjXG4gICAgICAgICAgICAvLyBiL2MgdGhlIGxhdHRlciB3aWxsIHJldHVybiB0aGUgZnVsbCB1cmwgZm9yIHJlbGF0aXZlIHBhdGhzXG4gICAgICAgICAgICB2YXIgc3JjID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgICAgICBpZiAoc3JjICE9PSB1cmwpIHtcbiAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSB0cnlpbmcgdG8gbG9hZCBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIHRoZSBBUElcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQgKFwiLmNvbmNhdChzcmMsIFwiKS5cIikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzY3JpcHQgaGFzIGFscmVhZHkgc3VjY2Vzc2Z1bGx5IGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciB0aGUgc2NyaXB0IHRvIGxvYWQgYW5kIHRoZW4gcmVzb2x2ZVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBBUEkgaGFzIGJlZW4gbG9hZGVkIGJ5IHNvbWUgb3RoZXIgbWVhbnNcbiAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSB0cnlpbmcgdG8gbG9hZCBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIHRoZSBBUElcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQuXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYXR0ZW1wdGluZyB0byBsb2FkIHRoZSBBUElcbiAgICAgICAgICAgICAgICB2YXIgY3NzID0gb3B0cy5jc3M7XG4gICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlVmVyc2lvbiA9IGNzcyA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCB0aGUgY3NzIGJlZm9yZSBsb2FkaW5nIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgbG9hZENzcyh1c2VWZXJzaW9uID8gdmVyc2lvbiA6IGNzcywgb3B0cy5pbnNlcnRDc3NCZWZvcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBzY3JpcHQgb2JqZWN0IHdob3NlIHNvdXJjZSBwb2ludHMgdG8gdGhlIEFQSVxuICAgICAgICAgICAgICAgIHNjcmlwdCA9IGNyZWF0ZVNjcmlwdCh1cmwpO1xuICAgICAgICAgICAgICAgIC8vIF9jdXJyZW50VXJsID0gdXJsO1xuICAgICAgICAgICAgICAgIC8vIG9uY2UgdGhlIHNjcmlwdCBpcyBsb2FkZWQuLi5cbiAgICAgICAgICAgICAgICBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHN0YXR1cyBvZiB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXNyaS1sb2FkZXInLCAnbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICAgICAgICAgIC8vIGxvYWQgdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGdldENkbkNzc1VybCwgcGFyc2VWZXJzaW9uIH0gZnJvbSAnLi91cmwnO1xuZnVuY3Rpb24gY3JlYXRlU3R5bGVzaGVldExpbmsoaHJlZikge1xuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgcmV0dXJuIGxpbms7XG59XG5mdW5jdGlvbiBpbnNlcnRMaW5rKGxpbmssIGJlZm9yZSkge1xuICAgIGlmIChiZWZvcmUpIHtcbiAgICAgICAgLy8gdGhlIGxpbmsgc2hvdWxkIGJlIGluc2VydGVkIGJlZm9yZSBhIHNwZWNpZmljIG5vZGVcbiAgICAgICAgdmFyIGJlZm9yZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJlZm9yZSk7XG4gICAgICAgIGJlZm9yZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGluaywgYmVmb3JlTm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBhcHBlbmQgdGhlIGxpbmsgdG8gdGhlbiBlbmQgb2YgdGhlIGhlYWQgdGFnXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfVxufVxuLy8gY2hlY2sgaWYgdGhlIGNzcyB1cmwgaGFzIGJlZW4gaW5qZWN0ZWQgb3IgYWRkZWQgbWFudWFsbHlcbmZ1bmN0aW9uIGdldENzcyh1cmwpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbaHJlZio9XFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIl1cIikpO1xufVxuZnVuY3Rpb24gZ2V0Q3NzVXJsKHVybE9yVmVyc2lvbikge1xuICAgIHJldHVybiAhdXJsT3JWZXJzaW9uIHx8IHBhcnNlVmVyc2lvbih1cmxPclZlcnNpb24pXG4gICAgICAgIC8vIGlmIGl0J3MgYSB2YWxpZCB2ZXJzaW9uIHN0cmluZyByZXR1cm4gdGhlIENETiBVUkxcbiAgICAgICAgPyBnZXRDZG5Dc3NVcmwodXJsT3JWZXJzaW9uKVxuICAgICAgICAvLyBvdGhlcndpc2UgYXNzdW1lIGl0J3MgYSBVUkwgYW5kIHJldHVybiB0aGF0XG4gICAgICAgIDogdXJsT3JWZXJzaW9uO1xufVxuLy8gbGF6eSBsb2FkIHRoZSBDU1MgbmVlZGVkIGZvciB0aGUgQXJjR0lTIEFQSVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDc3ModXJsT3JWZXJzaW9uLCBiZWZvcmUpIHtcbiAgICB2YXIgdXJsID0gZ2V0Q3NzVXJsKHVybE9yVmVyc2lvbik7XG4gICAgdmFyIGxpbmsgPSBnZXRDc3ModXJsKTtcbiAgICBpZiAoIWxpbmspIHtcbiAgICAgICAgLy8gY3JlYXRlICYgbG9hZCB0aGUgY3NzIGxpbmtcbiAgICAgICAgbGluayA9IGNyZWF0ZVN0eWxlc2hlZXRMaW5rKHVybCk7XG4gICAgICAgIGluc2VydExpbmsobGluaywgYmVmb3JlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbms7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuLy8gYWxsb3cgY29uc3VtaW5nIGxpYnJhcmllcyB0byBwcm92aWRlIHRoZWlyIG93biBQcm9taXNlIGltcGxlbWVudGF0aW9uc1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIFByb21pc2U6IGlzQnJvd3NlciA/IHdpbmRvd1snUHJvbWlzZSddIDogdW5kZWZpbmVkXG59O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbnZhciBERUZBVUxUX1ZFUlNJT04gPSAnNC4yNSc7XG52YXIgTkVYVCA9ICduZXh0JztcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZlcnNpb24odmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uLnRvTG93ZXJDYXNlKCkgPT09IE5FWFQpIHtcbiAgICAgICAgcmV0dXJuIE5FWFQ7XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHZlcnNpb24gJiYgdmVyc2lvbi5tYXRjaCgvXihcXGQpXFwuKFxcZCspLyk7XG4gICAgcmV0dXJuIG1hdGNoICYmIHtcbiAgICAgICAgbWFqb3I6IHBhcnNlSW50KG1hdGNoWzFdLCAxMCksXG4gICAgICAgIG1pbm9yOiBwYXJzZUludChtYXRjaFsyXSwgMTApXG4gICAgfTtcbn1cbi8qKlxuICogR2V0IHRoZSBDRE4gdXJsIGZvciBhIGdpdmVuIHZlcnNpb25cbiAqXG4gKiBAcGFyYW0gdmVyc2lvbiBFeDogJzQuMjUnIG9yICczLjQyJy4gRGVmYXVsdHMgdG8gdGhlIGxhdGVzdCA0LnggdmVyc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENkblVybCh2ZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24gPT09IHZvaWQgMCkgeyB2ZXJzaW9uID0gREVGQVVMVF9WRVJTSU9OOyB9XG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9qcy5hcmNnaXMuY29tL1wiLmNvbmNhdCh2ZXJzaW9uLCBcIi9cIik7XG59XG4vKipcbiAqIEdldCB0aGUgQ0ROIHVybCBmb3IgYSB0aGUgQ1NTIGZvciBhIGdpdmVuIHZlcnNpb24gYW5kL29yIHRoZW1lXG4gKlxuICogQHBhcmFtIHZlcnNpb24gRXg6ICc0LjI1JywgJzMuNDInLCBvciAnbmV4dCcuIERlZmF1bHRzIHRvIHRoZSBsYXRlc3QgNC54IHZlcnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5Dc3NVcmwodmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uID09PSB2b2lkIDApIHsgdmVyc2lvbiA9IERFRkFVTFRfVkVSU0lPTjsgfVxuICAgIHZhciBiYXNlVXJsID0gZ2V0Q2RuVXJsKHZlcnNpb24pO1xuICAgIHZhciBwYXJzZWRWZXJzaW9uID0gcGFyc2VWZXJzaW9uKHZlcnNpb24pO1xuICAgIGlmIChwYXJzZWRWZXJzaW9uICE9PSBORVhUICYmIHBhcnNlZFZlcnNpb24ubWFqb3IgPT09IDMpIHtcbiAgICAgICAgLy8gTk9URTogYXQgMy4xMSB0aGUgQ1NTIG1vdmVkIGZyb20gdGhlIC9qcyBmb2xkZXIgdG8gdGhlIHJvb3RcbiAgICAgICAgdmFyIHBhdGggPSBwYXJzZWRWZXJzaW9uLm1pbm9yIDw9IDEwID8gJ2pzLycgOiAnJztcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGJhc2VVcmwpLmNvbmNhdChwYXRoLCBcImVzcmkvY3NzL2VzcmkuY3NzXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gYXNzdW1lIDQueFxuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoYmFzZVVybCwgXCJlc3JpL3RoZW1lcy9saWdodC9tYWluLmNzc1wiKTtcbiAgICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxlKHRyYW5zbGF0aW9ucykge1xyXG4gIC8vIERldGVjdGEgbG9jYWxlIGRlc2RlIGxhIFVSTCAoP2xvY2FsZT1lbikgbyBmYWxsYmFjayBhIFwiZXNcIlxyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgY29uc3QgbG9jYWxlID0gc2VhcmNoUGFyYW1zLmdldChcImxvY2FsZVwiKSB8fCBcImVzXCI7XHJcblxyXG4gIGNvbnN0IHQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiAoa2V5OiBrZXlvZiB0eXBlb2YgdHJhbnNsYXRpb25zW1wiZXNcIl0pID0+XHJcbiAgICAgIHRyYW5zbGF0aW9uc1tsb2NhbGUgYXMgXCJlc1wiIHwgXCJlblwiXVtrZXldID8/IGtleTtcclxuICB9LCBbbG9jYWxlXSk7XHJcblxyXG4gIHJldHVybiB7IHQsIGxvY2FsZSB9O1xyXG59IiwiZXhwb3J0IGNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcclxuICBlczoge1xyXG4gICAgd2lkZ2V0TGFiZWw6IFwiRGV0ZWNjacOzbiBkZSBjYW1iaW9cIixcclxuICAgIHRleHQ6IFwiTmVjZXNpdGEgc2VsZWNjaW9uYXIgMiBpbWFnZW5lcyBwYXJhIGVqZWN1dGFyIGxhIGRldGVjY2nDs24gZGUgY2FtYmlvXCIsXHJcbiAgICBncmFwaGljTGFiZWw6IFwiR3LDoWZpY28gY29tcGFyYXRpdm9cIixcclxuICAgIHZhbGlkYXRpb246IFwiVmFsaWRhY2nDs25cIixcclxuICAgIHdpdGhvdXRWYWxpZGF0aW9uOiBcIlNpbiB2YWxpZGFjacOzblwiLFxyXG4gICAgaW1hZ2U6IFwiSW1hZ2VuXCIsXHJcbiAgICB2YWxpZGF0ZTogXCJWYWxpZGFyXCIsXHJcbiAgICBydW5RdWVyeTogXCJFamVjdXRhciBjb25zdWx0YVwiLFxyXG4gICAgc3VwZXJwb3NpdGlvbkVycm9yOiBcIkVycm9yIGFsIGNhbGN1bGFyIHN1cGVycG9zaWNpw7NuLCBpbnRlbnRhIGRlIG51ZXZvLlwiLFxyXG4gICAgdmFsaWQ6IFwiTGFzIGltw6FnZW5lcyBlc3TDoW4gc3VwZXJwdWVzdGFzXCIsXHJcbiAgICBpbnZhbGlkOiBcIkxhcyBpbcOhZ2VuZXMgbm8gZXN0w6FuIHN1cGVycHVlc3Rhc1wiXHJcbiAgICBcclxuICB9LFxyXG4gIGVuOiB7XHJcbiAgICB3aWRnZXRMYWJlbDogXCJDaGFuZ2UgZGV0ZWN0aW9uXCIsXHJcbiAgICB0ZXh0OiBcIllvdSBuZWVkIHRvIHNlbGVjdCAyIGltYWdlcyB0byBydW4gY2hhbmdlIGRldGVjdGlvbi5cIixcclxuICAgIGdyYXBoaWNMYWJlbDogXCJDb21wYXJhdGl2ZSBjaGFydFwiLFxyXG4gICAgdmFsaWRhdGlvbjogXCJWYWxpZGF0aW9uXCIsXHJcbiAgICB3aXRob3V0VmFsaWRhdGlvbjogXCJObyB2YWxpZGF0aW9uXCIsXHJcbiAgICBpbWFnZTogXCJJbWFnZVwiLFxyXG4gICAgdmFsaWRhdGU6IFwiVmFsaWRhdGVcIixcclxuICAgIHJ1blF1ZXJ5OiBcIlJ1biBxdWVyeVwiLFxyXG4gICAgc3VwZXJwb3NpdGlvbkVycm9yOiBcIkVycm9yIGNhbGN1bGF0aW5nIG92ZXJsYXAsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXHJcbiAgICB2YWxpZDogXCJUaGUgaW1hZ2VzIGFyZSBzdXBlcmltcG9zZWRcIixcclxuICAgIGludmFsaWQ6IFwiVGhlIGltYWdlcyBhcmUgbm90IHN1cGVyaW1wb3NlZFwiXHJcbiAgICBcclxuICB9LFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUJKOEFBQUVtQ0FZQUFBRE1jREZyQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQ0ZiVWxFUVZSNG5PMjlmZGhmUlhYdi9aMGZuT3M2SkxhZVJvUnlpQ2pHZUVRUkpISm83dHJqa3lJcDJBcWlyZVFnTDYyV0ZMQllJUWc4RWhYZlFpOVJBcmErWVdpMUlITEFGbEZvUlFPYTQyTk5TaEVFVVRnaW9oQ09FbU04bmhybzFTYS9lZjdZczJiV3pKNzk4bnZadWU5a2Z6OFg0Zjd0dldmV3JGa3plL2JzMld1dmJheTFJSVFRUWdnaGhCQkNDQ0drQ3dhenJRQWhoQkJDQ0NHRUVFSUkyWFBoNGhNaGhCQkNDQ0dFRUVJSTZRd3VQaEZDQ0NHRUVFSUlJWVNRenVEaUV5R0VFRUlJSVlRUVFnanBEQzQrRVVJSUlZUVFRZ2doaEpETzRPSVRJWVFRUWdnaGhCQkNDT2tNTGo0UlFnZ2hoQkJDQ0NHRWtNN2c0aE1oaEJCQ0NDR0VFRUlJNlF3dVBoRkNDQ0dFRUVJSUlZU1F6dURpRXlHRUVFSUlJWVFRUWdqcERDNCtFVUlJSVlRUVFnZ2hoSkRPNE9JVElZUVFRZ2doaEJCQ0NPbU12YnNVYm96SjdyL3V0azNQQVBCNkFNZFphNDh3eHZ3NmdIeGlRZ2doaEJCQ0NDR0VFRElPZGpnY1BqRVlETzRHY0J1QXo1eHkzTktmWlJOYTI1a1NwbFBoeWVMVGRiZHRtZ2ZnUEd2dDI0d3g4enNybUJCQ0NDR0VFRUlJSVlSRVdHdTNHMlArSE1BVnB4eTM5TW5rV0dmbDdyTEZwK3R1Mi9SY2ErMFhqREV2QW9CN3Z2c1Evcjl2M285LytzNzNnWi8rSE9oUUQwSUlJWVFRUWdnaGhKRGVZUXp3ekYvRGI3em9lZmh2THowVVI3eHdNUURBV3ZzZFk4d0pweHkzOUFlU2RMZGZmTHJ1dGszUHM5WiszUml6Ly8vZThqTjg4Rzl1d2hNUC9LQWhOeUdFRUVJSUlZUVFRZ2laRnZzZjhseTg5UTlmaS8rODN6TmdyZjJKTWVhL25YTGMwdThEdS9uaTAzVzNiZHJIV3Z2UHhwZ1hmZWVoSCtMU3Y3d1crT1dUelprSklZUVFRZ2doaEJCQ3lIUjUyank4N2MybjR0REZCNHNIMUg4OTViaWxUM1c1UHJRcnZuWjNzVEhtUlp0LzhsTmMrcUZydVBCRUNDR0VFRUlJSVlRUU1sdjg4a244K1lldXhlYWYvQlF1Tk5McXJvdnNkUEhwdXRzMlBjTmFlNTYxRnUvLzFFM0FrMDkxV1J3aGhCQkNDQ0dFRUVJSWFlTEpwL0QrVDkwRWF5MnN0ZWRlZDl1bVozUlpYTmVlVHl1TU1mUHZmZkJoYlB2ZUR6c3VpaEJDQ0NHRUVFSUlJWVMwWWR2M2ZvaDdIM3dZeHBqNUFJN3ZzcXl1RjUrT0JZQ3ZiTHEzNDJJSUlZUVFRZ2doaEJCQ3lDamNIdFpyZHV2RnA4TUI0SnVQYk82NEdFSUlJWVFRUWdnaGhCQXlDdmY4NERINStjSXV5K2w2OFdrL0FNQzJYM1JjRENHRUVFSUlJWVFRUWdnWmlaLy9YL2wxUUpmRmRMMzR0QThBQmhvbmhCQkNDQ0dFRUVJSW1XdUU5WnFuZDFsTTE0dFBoQkJDQ0NHRUVFSUlJYVRIY1BHSkVFSUlJWVFRUWdnaGhIUUdGNThJSVlRUVFnZ2hoQkJDU0dkdzhZa1FRZ2doaEJCQ0NDR0VkQVlYbndnaGhCQkNDQ0dFRUVKSVozRHhpUkJDQ0NHRUVFSUlJWVIwQmhlZkNDR0VFRUlJSVlRUVFraG5jUEdKRUVJSUlZUVFRZ2doaEhRR0Y1OElJWVFRUWdnaGhCQkNTR2R3OFlrUVFnZ2hoQkJDQ0NHRWRBWVhud2doaEJCQ0NDR0VFRUpJWjNEeGlSQkNDQ0dFRUVJSUlZUjBCaGVmQ0NHRUVFSUlJWVFRUWtobmNQR0pFRUlJSVlRUVFnZ2hoSFFHRjU4SUlZUVFRZ2doaEJCQ1NHZHc4WWtRUWdnaGhCQkNDQ0dFZEFZWG53Z2hoQkJDQ0NHRUVFSklaM0R4aVJCQ0NDR0VFRUlJSVlSMEJoZWZDQ0dFRUVJSUlZUVFRa2huY1BHSkVFSUlJWVFRUWdnaGhIUUdGNThJSVlRUVFnZ2hoQkJDU0dkdzhZa1FRZ2doaEJCQ0NDR0VkQVlYbndnaGhCQkNDQ0dFRUVKSVozRHhpUkJDQ0NHRUVFSUlJWVIwQmhlZkNDR0VFRUlJSVlRUVFraG5jUEdKRUVJSUlZUVFRZ2doaEhRR0Y1OElJWVFRUWdnaGhCQkNTR2R3OFlrUVFnZ2hoQkJDQ0NHRWRBWVhud2doaEJCQ0NDR0VFRUpJWjNEeGlSQkNDQ0dFRUVJSUlZUjBCaGVmQ0NHRUVFSUlJWVFRUWtobjdEM2JDdXp1bkxianF3QUFrK3czeVk5QnVsKzJEUURyL3VieU93WXQwaG41WHlaZHFYeFRrVCtYVHNsTFZ5dk5BTUF3SERDSS8vcDBUczRnVTI2VXo1VDNSZnBYMUw5SzM1S01tdU5hejZweWZQMEhlWHRWMlhmVTloUTk2dVFNVUQ1ZStxM2s1TklNbXNvWjAxNmwvbGJWUDlKeTAzTFM4eWUxVnlaOXJ2NUdGNXlyajRuN3RobVVqK2YwYksxSFpwK1VhVTFvU3l0eVRIemMyODhkTU1ZV1NycUNqVEZPdml2RUdGZm1BTUFnU2gvMnUzeUROTDF4NVJzWWw4Nm01UmlubEt0WXZEK1JiNExlUmZwQktiMGQ1T3FSU1YrcVg1elBPcjJrdmszcGc3NWlWeWZEREZxbkwreFUyQ0Z2cDFTTzB3OXgrOW5LOU5wK1NYb1pVR0hDYjlWdXNWMTAvNUYwSVk5RmtGZFlTOWt1eWgvcWJHdmtsZXRsWEIrME1IQi8vWWxtQU9talNwN1dRY3VWTTBuT0Y4QmdxUFpMZlFDNHY1SSs3SmQ4dHJUZitIeGhmempCcmRWNkRJcHlEV0NUTTM2WTZKSHVGMnpsZm1jN0N3eFZ2YTJxdDRXQnRVNVhXMXlLYzcvbEx6REFUZ3dCNi9RR3NOTXBPSFIvZHlMWmpvNGI3SFFYREd1dEw3K3EzS0VxUC82dDgxc01NU2lsMGZsRlp2bTQ1RGZSOFp5Y1lhcURoU3JmUk1kemY0dmZhYnFRZnlkc2ROeW5HeFkyRmYxMnVuL1c2cjhHUTJ1eEV3WTduSndkQUhZNFBmL2QvZjAzQVA4S1lJY0ZmaWw5Sityb3ZvUDZmdVFiV3ZZTnc2R29jNmI1UzhlUzMrbGZLY1BuVCtURUowSzFITkVETGVSazlUSnEyOG14eWg0MlVVUzIvZTR4dHJNNlRTaTNTczlvMjJDOGZMbnRxbnBWNlZrbFoxaWhqMVdIVmQ1R2ZlcnNsSk5UWlk5UjY1RXBwK3IzS09XTW0wOFlwdnNUZXpmVnE2MjlTOGRkbXNiK08wRi9BMEw5S3ZQTEFOWlIrWFh5dnI4TlpEcHc4V2xDalA1aG83a2pnSXBGbnpTZHlmdzBjWDRnemxNbHo2VHkzT1RWMytDV2k0eTJzNHNoZXA5YmJES0RlRjk4U3hCK0dKV3RkRGR1SytxVTBjZW0reXNxb3ZYMXYyMnk2TldraC83dDZqdElWdDF5ZW1UMVQzWkUvU0V0TTlNdldzblJXVXhtdjVhajVuUzU0MGlPVjltenF2K092VGhYMFNGRlhxbi9wdldzazZjS3o5WkhsV09TZGs3bGx0cDVCRDJ5L2RHVTliQ20yUGEvZlY1WjVMQmUwV0svTFMvdXVOL0dkeXlkUHNncktwNm1qeFczWGhlakRPVFNpN0RJTG1yaEpsa3NrRVVIdnhnVTlzTG1GaS9TOU81L3dSNXgrZ0VHc05HaVJzNStpVjZxSG42UkptdFhVMHF2NVFRN0lhU0I2Q3YxRVB2RjdWSGtEUXNkcGZyNWNvUDZScWZYaTNlU3c4aUpXbTFmSmRySlM4cUw1QVVGakxlM2NmVXR5NE1wRnVNR1FDSFhPSjFFdDdDaTZ2VXMyVFU2WVkzNkhTd3JOaERiNjJ1Rk5RYkdqV2REM3dlZGJtNHJ1cmFZdUEwTW9CYVhwTzVGZW90QnRQaGxsRHdiblEvcGZ1UHlGK1hKNHBLazkvdWQxS0dUNVcwbys1R1VJYkp0MGU0REczU0h0NEdGc1FPL3FHV2RXVjBXREdGZzNLS1FnZnRyd2lWaENNQlk0M1dNN3V2bHQzWDFsWW1IS2VSNElkN2d4c2wwWmRtaURYZjZlbHRYVDZlTmhUb09iNHVoV05RZDk3ZGt2dThVK1FmcTNtS0lZZ3lXQlVzRFJNY2x2NG55V3d4TmtETTBSUjVwdTcyc3dVNFQ1RWlqREFjV0F4Z01oNFdjdlp3aEpObE9BK3psR21JSVlHOXJzTU1BZTdzRU93endIeXp3NzI2TStJL1c0bCtOd2RPc1c0QlM3ZXM3Z3E2SXh5V1N5Wmgwb09pRVFYd3VxMnpTcmxEdEd2VkFYNTQ2WDlPNWhrK25sUGJ5MG5ScUxFcXlRUFh6c0FpVFM0Y2dXL1c3WW44eXF6UTJwRysxbmRqSC94NVZUckl0aXFaNlZtN0gxUWp0UDRvY0crdVR0bldrSnlya3lIRVoxL1VxcDZyZlFBYWpLbjJTOUw1YU9idVpHbnNrSGJ1eEhTdnNvVThBTTBiNXFiM1FOcCtVbWZiWFJGNXE3NnA4NmVTL3l0NVplOGkycVdpSHBuTHJ5a3ZreVJTcGJmOW8xWjdwZGwxL2FHbC9NaEZjZkpxUTBuaVI5UGU2ZEdwdVZKb3ZwT09tbnJ0bDAxV2NmOGE2aVpaVjh3cGJUdWYxckRvL0pZR01iKzZ2TE03WVFYSjlUL1FmSnVOS3VxaWN6bFA4Y0srT214WjIwbk1ZUFErb3NrK1RIbExmb2ZzN1NEeTl0QjZwZmV2c2tSc24wL3Bxc25MMC9yUSt5YmpwRHlmemhFcDdadVJFODZxSy9pdlRqY0hRN2E3cUg3RmE1WHE3YmQ5dnRIMVYrZW4xb21yZUpUSkwvU1A2NGViamVuRTFjMTNTZXVTT1YrbWg3U2RkeURxZG9vVTFWOFl3MWRYZEZCYi82VTRvTjRNV2NqdFhEQmdEV05kNDBYMkM3MzkxNmNNa3cvanoxOExZWVdoNGR4T3I1MlRHMWM1aUFKTk9GdVNHeTVva2ZlRTVNTEJXM1hqcms5MzRQNUxlUW02U0FmajlSVjJNSFNUN3BkNWlQK3ZzRVU1RzYyNlFCKzUzWkZleGs1cE1XbWNEYlZkdkoyOFBzYTh0YW1qMXluM1JmaFloL1RCS3Irdm43S0VHRlp2SWw3dnBhSml4c29pVnNXK21QempyS0V5WWJ3S3dOckVEaW9VQitISmllYUtOTEM2RVZUbXJqZ3dBYTUyOWl1V09ranc5V2ZkbGxBZnlZYkxmK2phSGsybURKNU9hU0JmM1Y4YTNoVFNtOXFTeWFuK3dVdHpYNEZxdVNDYWVUTG9PWWxNMU1GczVVaDZRcFkzRGZ1djdwSFVOYUYxT0N6R1A2RzM5V0d4dEtOZGdnS0h1ZTdwdUtNWVl5UytLK0h0UlZ5K3JKeVJBZER3ZythenIzOTR5Z01wdnRhMFFyaC9XNVIrS2RXem9NZEpUeFhOSzZtQ1I4NUN5N3JjTm5raUZkaGphV002d0lyK1dNM1JMWWFubms0WEJ6aVIvOGMvQ0RvdS9RNmQ1NGZsVTJHT255MTk0UEJVeWR3QmVWdXI1TklURnZ3TFlEb3QvZC9Vb2VScnA1b3ZRRitrMFFWczUwdGpxYjVRdWJ0K1NESnYrU09VbEV5Ums4dHJTQnNKWk1GRDZWOGxKSzFXem5hMWpoWndxdVdtZG03YXJhSzEyZzE2amVyYVU3RkVsSjR5TFdmMWt4ekRkbmNySkZaWkpVTnNldVhwVXlMZEptbFJPVmZucDRjcnljOGRyOXBmMHE3S0RHREk5VjV2cU5ZazlxdEpQTVgvci91RTJLdVZWNVIrMVBnM25KUmtMTGo1TlNMcVlyQzkxV1UrakpGMDh5WTdsRFZTZTlCS2E5WlJCT1owMXhZMTdsVWRObXRHZ090M0EveTlKcHoyZkVudEk0cEl0Y25iUWFUTDZtSXlkcXVxVjJqdTMyVVlQOGZTS1BKL1ViMTFmWFdhVFBkclVOM2U4dEYvTFRQdGhKbytXayt1ZjJmNlV5clNKdmxwbWsyZGNxZUlvdGFPV09kSHJkc2x4dlozMkd3Q3dnMHdmcjh1WE9WN3FieTNxSlVuODJvSUpubEhXNXkwT0JubUQwT0RhUTBmN3hCa29UeGV0NHlCNEFGV210MHF2NERFMGtOZndVbjBNSUQ0dVduN0pjOGQ3dm9pK2dCMFk3MEdUcHZlNmFLOFhWSGdHT2J0WW56NGg4Znd4U2IwTDI5dmdQYUhxWGZ4blNuYlN4Vmh2RDVYUDUwMWVNM01uaFZJSDNvdkhCQStna2oyVWZQRlVNb0R2TUVwZDFia3k5bzM2US9DeTBUcm8rcVh5QVBIME1tRk5LYkp6S0JjSS9jVXZhQUxRcjQwR2o3TzRucUYwMlcvSzQ2bkw3L3RyYU5tb2cwWlRkVmxzZ3Zic0tjcVEvZUl0NWgwc2dvYUFHYVJULzBLR1M1LzFjSEs2UlErNmZYVk5QT2ZPN1BlMlVmdjlZcUJiTE5hZVM3TEVxZXZuUFo5a3Y2NmJkWFpVaTl6Ui9idjhUaGI0OUZ4OUFQVmFYaEJScUczaGJUQkE0ZkZqNEx5eEFPZjVaTERUV0xmNHJmSVprZTllUWJUQnBvWDNrVDRPREd6aE9RWGtQWlpnZ1lFSnIycUtITjh1TU5GaWNPSDVwTm9UK3VHQWVENGhPZzZYRTg3ekNjT2lQZlp5eDhUamFhZXJ4OTRXa2NjVGpIaEJ1Znl3enZPcE9Md0Q0dm1renhObGNPbGcya0F3c2VlVHBsWU93ckhVVTZtVXprUi9sREZDcDFQOXE1ek9aTXFWZENwVDdyaVVVU3RIanR2cWJkVUcwZSttZkxsdGZ4TXJkbW03bmFuZk9ITFFVczlLenhiUlJVN2dwSDFMY2hvOGNkSVRzYVJQWFQzMUpEZXhVMk05MGtVSHZkKzB0RWN5WUViOW8wVytrcjFVZmRwNklrbXNqR0h5aERScnQxeTlvSTZQYW8rcWNrYkpuMXhZU3A1UFRmMURIcnE2aDZhdFBSVEhyVStTbjB3RkxqNU5TTW5qMU8wM2lGM2VCMm0vaGtxb3I4VktucDRicERmaHVVVnNmMTFJemxlTGNENUg1MW5tdk5heTBuUkRGQjR0YVQyQmNMMUJoVDJHeWc2NWNkdVhXNkdQM0JDS2wwaGEvMVRmOVBya1BVMlM2MGRWZTNnOVVzOG5WZCswdmZROHF1UkJyZlFBeWpHZmF1MmZxV2RVSDFWK2FsQTl6a2Y2aW96a09sRFhueUo3NWNxQnN0TXd5QUF5L1NNdFRsMFhkUC9RbmsrNm5PQ0prTlEvcWFkdnozTDFJajJHSm5ockFjWDFMYXB2Mmc0MWVrajYxTjdLbVNqMEE3ZC9vT3RydzlneGNHMGpIZ1JTa0hnK1JUZURjTS9rVGZHcnNJbUwrWVFockx4Nlo0ZVFKUll6SEJZUGk2UDB3VXZFQU9GbUZMYndtakJGQ3U4cDVkTzdGMkNVZkttOGNib1g2V1Z5V3R6VW1hRXQ1bEhLbGo2OWNXNXpia1ZUUExMQ0UzOWxmbE40SnZqMC92VS9hVXVMcUZ1VU9rVlJENG12byt0dFlKeW5VWkhlQmlrb0ZqSnM0VFhsQlJwQXB6ZlN1YVFlMXRrajREMlpyQTNqV01sK1FiN29FOFE2cnhwMUVzamlST3JzVU5SZjFkUElTMWErYVVKN3FjNGVQTE4wZjQzN0M1VGRnSEF1d0NwNXRoaUJUTFNTYjR0K1k0MnlqSjVjUnNaeXA0TU5ZMFhVSnZCOUpHNXo3Zm1reEJyeHVnb3lyRHRtcFJLaW96TjRzVWRpUHNWOXN2RG1rYjRSeWd2emdtRFQ2RklXN1hkdGJOMkNpeHVvaSt1ZzdFZkpReWZ5K0FIOEhNQzY4OXRpQ0t2T1hURkY1RG1sOVlxT0t6dTcvakJVbmpMV2h0cjRPWXcvWDRLc29XOGI0N3l0Qm02L2RlbXQxMXZrV0dpUEpQbXJZa2VwNDhNS2Urajh3eVIvNFowa2NuTDU0NWhPYWZraDVsT0lJV1VSUEora0wrVmlQbWw5ZHFoeWRzQjZqeWZ0K2RRKzVwTnFCTm1uQjRQb25FcnlaejJnYkNnMEtqZjluWkdqbGRVVGlGU09PZ2VqdjFHNVZmcmJjSzVtN1pHVXJiZDFIVWZaSHNzelpCeTVUZHZqNWtzYW9DU25Tazh0Wnhqc0RqV1J5c21wamZsa3E4dkoyaWtuWjVKNlZLWFA2VFZKK1MzeVZlazMxWmhQTmZadXJWL2IvRlhsSmR0ekl1WlRWZjhrMDRLTFQ5TWlXVXdRNUNHVHFVdW5qa2ZwQUQwMWg4bjlUdVNaSktGeGMvZlNxejFwT3BVK3JWWlVjTTZ6SmFkYm9sY2E4OGxrN0pDclg3cFlYeFZEQzVuNmF6MUdpZmtVNmFsZXM4dDZDdVdVcnpxdTlOQjFpOUsza1lPR21FOTEvU3V4VjNxOHFUL2xkTmMweFh4S1pWYldPNmxucWY4bStXdmwxZGs4dFdlTG1FODVQVk41dGZiR3BER2ZncUxGL2luR2ZKS0RTWU0weDN5SzAzdjUyclVIUUZQTUo3Ky9sSDRRMlNuWUk1YmZQdVpUOFRldGR5bm1FMHpTU0hJOHJyZDRBTFdPK1JTVkUvcTNEZEt6OWZQcU8vaytmZHVZVDRuZTJoemlTZVV0WmxKNUlZUFlNUnZ6U2RrNzhzcFE4aHBqUGdXbGxOQkVsdnR0dlM1d0M3WEJobk16NXBQa2QzV3lzdDlFKzhVaUllYVROb3VKWHNzTlpwR1UrWmhQeGV1UDh1VEV2ZHhxaXZtMWNUYVN4VWdmKzhtRUlheUkrUlJzVWFnYVhsbTBTdEZXTVo5c3ZMQ21ZenBKektWSll6NUovcXFZVDVJLzU5azBjSjVIUmY1OHpLY2RSanlmSk9hVDZtY0FkZ3hRRy9QcDM0ekVmQ3IwU1dNK1BXVWFZajZwOW85K2xPNlpYQ0ZWTVo5OGRuV2VxV3krQS9yT2xGellNdTNyTzFoSkRkZnBSRTc1aEFrWFB6bWdpczdLcVVxWDJxUE5rNlBXMjBuOXg1WGpiYXNFWlQxRzZyWVJVMVhmSnMrUHFIeWIwVHNuZDREZzZTU1R2MkhTWHU1SGJjd25VN2FQME5yREprbVBxbnFvL3RKb2o0eGUyZkl6NVFpajVzdDVXa1gya1BxMmpmbmtNNnI5dVhxbDltaXlYMGJmVXY2NjhwTHR6bU0rTmVXdjZsZWxBWlZNUUhxclJjWkYrcTlGYVdGVmZ0b2tIWnJTNlg5eHNwSTgyV0hUZEZaTkdGWGFVanFWdmk2ZFgyUWZJaXhBcHc4Nk1ub05ROWFvUUYxZWt6NTZMRzlUZjMxOFdHR2Z4blpUZFJ5cTMxazlFcnZsOUJ5cWRJMzJUNDVYbGROWUgzM1ladVJrOUl6c1dTVW5ZeS9mem0zN1IwNmVLbC9rbWVTNDFmcmw2dE5rUjUzY3FsZ2pXbStWb2E2Y3FEMXplcFRWQ09YWitMeVF1aUxaYjEzaUlFOTNRdm5pbFZWU0NxTVhUK1VSVjhyWHg0YkdrdlJ3bmgzSnhFL2lwaFJ5Y3VuaitsbWZYZzVhdGQ5RTV3aGdYYjJMOUNGbFZYcHREMXZVUXowRk5ONGVWZlpMVGdLM3I5QkIzMHdZVlErVnZxaTFseWw0RHcwdk52UzB3dHZFeENlRnIxL0lHOUxyK2dWN3lNK2kzNmllUExRK1p4aEx3cVJWN0p2VFc4d3hWUFh6ZGxGMkRPMGM0Z21KaDBpdS9ZdFh2Rko1NFFiZlM3R1NUdlduSExVWEpsdlN4ZHZRN1E5bHhHMGE3OWQxVE9JbTJXQmhPUWROdEQvOFg4WXIzY2Q5bjliN1hkbkdTdnVvS2xwdHcvSitMVlYwbC80eWRQb0RSUitTdjBYTXB0RDN0RmxESDRtT1J1ZXhzZm9Zdk81cCswZHB2ZTFWKzdtQ0xkdzU1L3FGZnFadFhIM2tMNVRtMG9aV2JPLzdjUGhuZmI3aXI5aEV2SkNHTnZRTEdZZlQvRU9FOG92OXd5RERxdlBLaGpoTjhrKzJ6UkFZRHNzeG4zYTYzd05iL04zaDZpRXhuK1JyZDN0WkZmUEpocGhQdjBUU1ZucWN5cDVESmpTMG40aWsvN1NjZkx2NnYvcUV5YmF2Mml6SlMrUkVnNDM2VzFGMFZvNGFUK0o2SlBhb21teWsyK3Jjem80NXZ2NFpPZGw4TmR0MWVyUThYTnF1cW05cEc0a082ZStxK3FkeTVEd084NE5ZbEJPUTNneFU2bE5ab1JiNnBIWkd4WDQ3NWZKcmpwZjZSNXF2UXUvY0JSWkFiTWhoSmgvYTFTdmJQOVAra3F0R3JqOUwramI5cmVKODhPTlRVMzdrOHpmMjAvVDRpUG5KVktEbjA0U2tuZzM2bGkzeWNrbCtSTTkwZExyU1U1dXlYSjNPTDRyWHBQTVB3RldpT25sVjZYdzhuTlR6cVNubUUrSlZUbDNuNU5sV3JFK3lYejhjeStxYms1Y3NwcHMwYlNLbjFCNVRqdmxVNjdHVTJaOHJSMWVnbEw2Tm5ISTFZdDNUL3B6K3JySFhiTVo4YW5NOHE0ZkplejVsKyttWWVxVHlxbUkrK2RmdzVHR0x6MXNrRFBMaTE1V2FZejdwOUNybTA2QXFmVDdtRTh4QVh0aEwwbXNiaEsvZDViL1dWbzdoVkJYenFTcDlTYjdQbDQvNWxFdHZrbm9iQUZhdmNDZWVVdm1ZVDZFYzY5c25rMzZVbUU5b2l2bWswMHVITWo2bnJxOTB1bkxNSitWNXByeHN0QTZSZmhYeTZtSStHWmhnVnkvUEtubE5NWitpMW9QM2tNcGNYK0tZVDRuT2prclBwNmlPOFB2RlYzQ0lVR3l3Y0JFM3liOWVxL3FrdGJMZkJIMlVIYUlIOUtvZlJvNG8zZ3pHdjNxY2ova2ttUXk4cDU0dFlnTlpJTkxkUUJaVDhqR2YvSmZiYkJ6elNUOTRqMTd6TmVYN2dGQ0RPT2FUNUJjYkZER2ZUTkFKZ0kvNUpOWTBOcTZucllyNVpEcUkrUlE4cjZSMXg0bjVCSVN2M1dGWXRFZDF6Q2N6ZnN3bmFWQklYMUNLaUZHa0YxVEdmRUlpQjdFY1NaUjZLcFhTbWVpUFIzYzYxYitpdjVIK2lZRFEyWXUvVm1mSzZJOEtlelI1QW5uOXBaeDRkMlUrdmEwSGs3RThxblQ5UmI3ZU5PM2xvS0crWTNrZTJSbzVxU2NPWW51TUhmUEpLNUxmMzhyRFJuV0VSaytaaW5vM2xsK1JMOXMvMHZybjlFNzA4NTVCT3BhRjlqeEwrMjlEdllTMm5qK1Y3ZE5rVDcxdHEvTTNmZzF4bEpoUGRmMTB6UHFRcWNERnB3bngvVGNkaDZCYzNxRnVDWFBqYU83OGtQSFpKYXVNRWFUaytldDFrazZQOTZYelROWERvT0o4ZFBLR1VER2YzRi85TlRPdFQxclBOT1pUTG93SFVCNmY5ZnhKSzViV1A5VTN2VDY0TitkS25xeGVEOTF3Mm42dW5yczg1bE15UHVma2xGN0xRdGx1V2s3YXZ2THFRWG9kS00yWFJyRFh0R0krK1hycTZ4RXk5c3BjTDB4NjNLTGNQK0xzeFEwTDRuNWRza09pNXloNnlMa1o5UU1UWWpxTkZ2UEozWklaK1ZwYUtGeStScGVMK1NUcEo0bjVaREFNTjJWUnpLZFFaMWdYWDBwVjNqZzlRd3ducDYrVEc0V0I4SGJLcEZldjhhUXhuSXI3S1VsZjFGZmZQK1JpUGhsWHJuVjc5UmZSUm9uNVpDQmVKY2luVDJNK09UMzFhUjkvSFMreGg5aXZsTjc5SGlMRWZGS2RNeC96S1JPanlTUXhuM3g1R1htKzFURkd6Q2ZYdU80SmVXM01wMmd3TVBFZ0tRc0JzcGdsNTR3L0VWM3B2czNqdHRXeWlpb2tYOEZ6ZFF6T1krRWNLNUs0MHV6c3hYd3E4Z1N2Ui84WDhGNDUxaFV0Zi8zWDdtejVhM2ZGY2VWZFpIUEhYYjFjWFkwenRPK3FObmpqK0RaUjF5U1JWUnZ6Q1hGOXZFY2hsRWVUL3p2Tm1FKzVjc2FKK2FROW9OckdmQXBmMzV0dXpDZUVScEI5ZWpDSUJwUWtmK21ZKzJIMTMwU0diK21NbkZUWk5IOWFENit6bG1Oak9hbEhBMlJzU2VSRUhxMlJ3cXFESjVYMTVkUWRUK3JTbEc2VTdTbzlmWm5hUG0zejFXMVgxYXRLenlvNXd6aDltaSsrR0dYa1ZKUlQyVDROOWFpclgyMDlNdVZVL1I2bG5ISHpDWkU3cnRyUnRsNXQ3VjNTejZWcDdMOFQ5RGNBY3lQbVU0MDhNaFc0K0RRaFJ2K3dZZTRvVk1Vb1NqMHZzdkpVZmlET1V5WFBSQWVML1RMWHI0b2ZwYmRMbmgxcDRpYlBsa1NnVWRtUTF0bFcxQ21qajAzM1YxUkU2K3QvMjlGaVBrVy9jNTVQRlhwazlVOTJSUDBoTFRQVEwxckowVmxNWnIrV28rZDBPZDJUNDFYMnJPcS9UVEdmcXZwSDJ1L1NlcGI2YjFyUE9ubXE4R3g5VkRsdFlqNUZva2ZRSTlzZlRWa1A4U1NwanZsazBWbk1KKzJLNHdnZVdRYlZNWiswWFlMblUvb1V1aW5tVXpuR1VaTGUvUy9ZSTA3ZlB1WlQzQ2txWXo1RmRqV2w5RnFPOWx6emFTRDZKakdmRUxlSDl5THk2WlA2K1hLRCttUEZmTXEwYjJqQ3BwaFBRUUhqN1oySithVDZselh5RFVTUlo0TnVkVEdmY2hjMGFRdTlTOWtnanZua1RqVXpGMk0rR1plL0tFOFdseVM5Mysra2hwaFBvUTlFSGtHUjNRM2thWG91NXBQM2ZESUlEeHBDRnVpdjVjbHlwRjhEaEx5YXA3NklhTU1ZNVg5YlYxL3ZJVk1UOHdtdVRCUUxMaUdtVS9qYTNLUXhuNEQ2bUUvU0lzMmVUL21ZVDlKMkllWlQzQ2ppK1ZRVjgwazhvR0NLTmswOW9IYVlocGhQcW4xOVI5QVY4YmhFVlRHZnZCeVR6U2J0Q3RXdVVRLzA1YW56TloxcitIUks2ZFNUeXFkVFkxR1NCYXFmaDBXWVhEb0UyYXJmRmZ1VFdlWElIa3FKZmZ6dlVlVWsyNkpvbzhkRzBzNmw5aDlGam8zMVNkczYwaE1WY3VSNDR2a2t0UFpzU2RMN2F1WHNabXJza1hUc2tUeDFrb0ZOWkpneHlrL3RoYmI1cE15MHZ5YnlXc2Q4U2s2TUtudG43U0hicHFJZG1zcXRLeStSMTNuTXA2YiswTkwrWkNLNCtEUWhwZkVpNmU5MTZkVGNxRFJmU01kTlBYZkxwcXM0LytTcDRjQ3FlWVV0cC9ONlZwMmZrcURHOHltNnZpZjZENU54SlYxVVR1Y3BmcmhYeDAwTE81Vzh3UnZzMDZTSDFOZDc5TGo2U2tXMEhxbDk2K3pSNkhuVzBIOUtka2pyazR5Yi9uQXlUNmkwWjBaT05LK3E2TC9lczhzNWVsVDJqMWl0Y3IzZHR2WjhzdXE0dDFkeXZhaWFkNG5NVXYrSWZvUVlIWDZOSUhOZDBucmtqbGZwb2UzblBkZWNUdEhDbWl0am1Pb3FIaVVHTUZFbkRGLytrdHU1WXNCd25rbnFCbHpiQWFoTEh5WVp4cCsvd2JQS3AwL21aTWJWemtLKzZLYktsUnN1bTNoS29mZzYxRUM4Sm93c0tZZ1JqZjhqNlNQUEo3Ky9xSXU4VmdSbFAya004Ynd4eWNscTNRM3l3UDJPN0NwMlVwTko2MnlnN2VydDVPMmhQWVVLdmNMS2ZkRitGaUg5TUVxdjYrZnNvUVlWbThpWHUrbG9tTEd5aUpXeGI2WS9hTThuMzE0MjJOSGF4QTV3WGpDK25GaWVhQ09MQzJGVlRzVk1RdUVoVjloTHZqaVh5Tk9UZFY5R2VTQWZKdnV0YjNOQWUyZkpmdEdsdUw4S1FiT2xNYlVubFZYN2c1WGl2Z2JYY2tVeUUzays2NUV2OWs2VEkrVUJXZG80N0xlK1QxclhnTmJsdEJEekJNK2wrQUc1Y2UzblBKOVE5bndxOUM1RmhBcjNvcTVlM3U5TlhVdVVpQ1NmZGYwN2VLQkI1YmZhVmxBUDlTRWVUODQ2TnZRWTZhbmljU1Ixc01oN0xnMWRmdTNacEQyTjJucytGWjZWa3Jid3NOS2VUM0grMVBOcDZEU1htRThXd0U2WGZ5Y01kamlaRXZPcDhId3E3c0Y4ekNlRW1FLy83dW9SUEl6MG1GbHFrSEFzOVR5Ulk2M2tTR09ydjFHNnVIMUxNbXo2STVXWFRKQ1F5V3RMR3dobndVRHBYeVVuclZUTmRyYU9GWEtxNUtaMWJ0cXVvclhhRFhxTjZ0bFNza2VWbkRBdVp2V1RIZW5ybmsyZU9DWGF0RWV1SGhYeWJaSW1sVk5WZm5xNHN2emM4WnI5SmYycTdDQ0dUTS9WcG5wTllvK3E5RlBNMzdwL3VJMUtlVlg1UjYxUHczbEp4b0tMVHhPU0xpYnJTMTFWVEIyOUhVK3lZM242VmJQMEVwcjFsRUU1blgrbHg4U0pTcGZralA1cE9oL3pLVTNYRlBNcHZibk9sSmV0WHlvbVk2ZXFlcVgyem0yMjBVTTh2YVlWOHlrOUhzbkpsWjhjTCszWE10TittTW1qNWVUNlo3WS9wVEp0b3ErV09Zc3huM0o5cGZLOEszVUV3QTR5ZmJ3dVgrWjRxYisxcUpjazhXc0xwbVhNSjJsdzdhRlRHZk5KNjZoaVBsV216OGQ4R3JpR3RhaytCaEFmRnkyLzVMbmpQVjlFWDhBT3FtTStlVjIwMXdzcVBJT2NYWEl4bjVDbTk1NG1vZDZGN2VXRlJFbXYwc0NVN0tTTHNkNGVLcC9QTzBMTUp4TThnUEl4bjR4SzcrcmhZejRwMC9uT2xZdjVwUHREOExMUk91ajZwZktBNXBoUFVpNFErb3RmMEFUUUhQTkp0NjNzTitYeDFPWDMvVFcwYk5SQm82bTZMRFpCZS9ZVVpjaCs4UmJ6RGhaQlE4QU0wcWwvSWNPTUd2TkphbWZpT1hkbXY3ZU4ydThYQTkxaXNmWmNraVZPWGIrNm1FL0Z2WHJJN3hUT2VEYUZUbUdsSHU2NHhHeVMvbUdnbXN2QzI2Q0krVlJzbDJJKytkZHJWVDRqOHBHSitZUU9ZajZaYURHNDhIeFM3UW0waXZsa1lZRFdNWjh3ZnN3bnlTQUtpT0ZkK2UxaVB0WEpRVGlXZWlxVjBwbm9qekpHNkhTcWY1WFRtVXk1a2s1bHloMlhNbXJseUhGYnZhM2FJUHJkbEMrMzdXOWl4UzV0dHpQMUcwY09XdXBaNmRraXVzZ0puTFJ2U1U2REo4N1lNWitTRGxQcmlaV3JSN3Jvb1BlYmx2WklCc3lvZjdUSVY3S1hxazliVHlTSmxSSEZmTXJscTZvWDFQRlI3VkZWemlqNWt3dEx5Zk9wcVgrTUV2TUpaZnVOWEo4a1A1a0tYSHlha0pMSHFkdHZFTHU4RDlKK0RaVlFYNHVWUEQwM1NHL0NjNHZZL3JxUW5LOFdGVEdmTXVlMWxwV21HMExGZkVyVGpSanpLUjIzZmJrVitzZ05vWGlKcFBWUDlVMnZUOTdUSkxsK1ZMV0gxeVAxZkZMMVRkdEx6Nk5LSHRSS0Q2QkZ6S2NxT2NqVVI1V2ZHbFNQODVHK0lpTzVEdFQxcDhoZXVYS0FxY1Y4a3Y0eFNzd242N1pOZXR4bXlvdXpGemNzdzNCOGw4UjhRbWpEMFdJK0FlTDVGTjBNd2oyVE44V3Z3aVloNXBPVlYrOG1pUGswZFBLTDEzdDB6Q2NMYTl3TE1FcStWTjQ0M1l2MGNjd25NN1RGUEVyWjBxZjNNWitLRlUwZDgwbDNRdVArRjhWODhxLy9TVnVXWXo3cE5wVjZER1VoUk5YYm9EN21rNFV0dkthOFFBUG85R25NSnpkQjFmM1JlekpaRzhheGt2MkNmTkVuaUhWZU5lb2trTVdKMU5taHFMK3FwMGxpUHVuMlVwMDllR2JwL2hyM0Z5aTdBZUZjZ0ZYeWJERUMxY1o4aWl1UHhGanVkTEJocklqYUJMNlB4RzFlanZsVXlCR3ZxeUREdW1OV0tpRTZPb01YZTJZdjVwTjQycVVlT3BISEQrRG5BTmFkMzhXWEY4TzVLNmFJUEtlMFh0RnhaV2ZYSDRiS1U4YmFVQnMvaC9IblM1QlZHL01wcWtlWUMxbG9qeVQ1TzgyWVQ4WGluVVZWL3JZeG53bzU0dW5VTHVaVDBHZTZNWjlVSThpKzFqR2ZWQjZyRWxuOU55ZWpRbzVXVms4Z1VqbnFISXorUnVWVzZXL0R1WnExUjFLMjN0WjFIR1Y3TE0rUWNlUTJiWStiTDJtQWtwd3FQYldjWWJBNzFFUXFKNmMyNXBPdExpZHJwNXljU2VwUmxUNm4xeVRsdDhoWHBkOHczVDlKektjYWU3ZldyMjMrcXZLUzdUa1I4Nm1xZjVKcHdjV25hWkVzSmdqeWtNblVwVlBIbzNTQW5wckQ1SDRuOGt5UzBMaTVlK25WbmpTZFNwOVdLeW80NTltUzB5M1JLNDM1WkRKMnlOVXZYYXl2aXFHRlRQMjFIcVBFZklyMFZLL1paVDJGY3NwWEhWZDY2THBGNmR2SVFVUE1wN3IrbGRnclBkN1VuM0s2YTVwaVBxVXlLK3VkMUxQVWY1UDh0ZkxxYko3YXMwWE1wNXllcWJ4YWUyUFNtRTlCMFdML0ZHTSt5Y0drUVpwalBzWHB2WHp0MmdPZ0tlYVQzMTlLUDRqc0ZPd1J5MjhmODZuNG05YTdGUE1KSm1ra09SN1hPM3o5TGJSZnFLRkJLZVpUVkU3bzN6Wkl6OWJQcSsvaysvUnRZejRsZW10emlDZVZ0NWhKNVlVTVlzZHN6Q2RsNzhnclE4bHJqUGtVbEZKQ0UxbnV0L1c2d0MzVUJodk96WmhQa3QvVnljcCtFKzBYaTRTWVQ5b3NKbm90TjVoRlV1WmpQaFd2UDhxVEUvZHlxeW5tMThiWlNCWWpmZXduRTRhd0l1WlRzRVdoYW5obDBTcEZXOFY4c3ZIQ21vN3BKREdYSm8zNUpQbXJZajVKL3B4bjA4QjVIaFg1OHpHZmRoanhmSktZVDZxZkFkZ3hRRzNNcDM4ekV2T3AwQ2VOK2ZTVWFZajVwTm8vK2xHNlozS0ZWTVY4OHRuVmVhYXkrUTdvTzFOeVljdTByKzlnSlRWY3B4TTU1Uk1tWFB6a2dDbzZLNmNxWFdxUE5rK09XbThuOVI5WGpyZXRFcFQxR0tuYlJreFZmWnM4UDZMeWJVYnZuTndCZ3FlVFRQNkdTWHU1SDdVeG4welpQa0pyRDVza1BhcnFvZnBMb3oweWVtWEx6NVFqakpvdjUya1YyVVBxMnpibWs4K285dWZxbGRxanlYNFpmVXY1NjhwTHRqdVArZFNVdjZwZmxRWlVNZ0hwclJZWkYrbS9GcVdGVmZscGszUm9TcWYveGNsSzhtU0hUZE5aTldGVWFVdnBWUHE2ZEg2UmZZaXdBSjArNk1qb05ReFpvd0oxZVUzNjZMRzhUZjMxOFdHRmZScmJUZFZ4cUg1bjlVanNsdE56cU5JMTJqODVYbFZPWTMzMFladVJrOUV6c21lVm5JeTlmRHUzN1I4NWVhcDhrV2VTNDFicmw2dFBreDExY3F0aWpXaTlWWWE2Y3FMMnpPbFJWaU9VWitQelF1cUtaTDkxaVlNODNRbkRGNitDbE1Mb3hWTjV4Slh5OWJHaHNTUTluR2RITXZHVHVDbUZuRno2dUg3V3A1ZURWdTAzMFRrQ1dGZnZJbjFJV1pWZTI4TVc5VkJQQVkyM1I1WDlrcFBBN1N0MDBEY1RSdFZEcFM5cTdXVUsza1BEaXcwOXJmQTJNZkZKNGVzWDhvYjB1bjdCSHZLejZEZXFKdyt0enhuR2tqQnBGZnZtOUJaekRGWDl2RjJVSFVNN2gzaEM0aUdTYS8vaUZhOVVYcmpCOTFLc3BGUDlLVWZ0aGNtV2RQRTJkUHRER1hHYnh2dDFIWk80U1RaWVdNNUJFKzBQLzVmeFN2ZHgzNmYxZmxlMnNkSStxb3BXMjdDOFgwc1YzYVcvREozK1FOR0g1RzhSc3luMFBXM1cwRWVpbzlGNWJLdytCcTk3MnY1UldtOTcxWDZ1WUF0M3pybCtvWjlwRzFjZitRdWx1YlNoRmR2N1BoeitXWit2K0NzMkVTK2tvUTM5UXNiaE5QOFFvZnhpL3pESXNPcThzaUZPay95VGJUTUVoc055ektlZDd2ZkFGbjkzdUhwSXpLY2Q3dDllVnNWOHNpSG0weStSdEpVZXA3TG5rQWtON1NjaTZUOHRKOSt1L3E4K1liTHRxelpMOGhJNTBXQ2ovbFlVblpXanhwTzRIb2s5cWlZYjZiWTZ0N05qanE5L1JrNDJYODEyblI0dEQ1ZTJxK3BiMmthaVEvcTdxdjZwSERtUHcvd2dGdVVFcERjRGxmcFVWcWlGUHFtZFViSGZUcm44bXVPbC9wSG1xOUE3ZDRFRkVCdHltTW1IZHZYSzlzKzB2K1Nxa2V2UGtyNU5mNnM0SC96NDFKUWYrZnlOL1RROVBtSitNaFhvK1RRaHFXZUR2bVdMdkZ5U0g5RXpIWjJ1OU5TbUxGZW44NHZpTmVuOEEzQ1ZxRTVlVlRvZkR5ZjFmR3FLK1lSNGxWUFhPWG0yRmV1VDdOY1B4N0w2NXVRbGkra21UWnZJS2JYSGxHTSsxWG9zWmZibnl0RVZLS1Z2STZkY2pWajN0RCtudjJ2c05ac3huOW9jeitwaDhwNVAyWDQ2cGg2cHZLcVlULzQxUEhuWTR2TVdDWU84K0hXbDVwaFBPcjJLK1RTb1NwK1ArUVF6a0JmMmt2VGFCdUZyZC9tdnRaVmpPRlhGZktwS1g1THY4K1ZqUHVYU202VGVCb0RWSzl5SnAxUSs1bE1veC9yMnlhUWZKZVlUbW1JKzZmVFNvWXpQcWVzcm5hNGM4MGw1bmlrdkc2MURwRitGdkxxWVR3WW0yTlhMczBwZVU4eW5xUFhnUGFReTE1YzQ1bE9pczZQUzh5bXFJL3grOFJVY0loUWJMRnpFVGZLdjE2bythYTNzTjBFZlpZZm9BYjNxaDVFamlqZUQ4YThlNTJNK1NTWUQ3NmxuaTloQUZvaDBONURGbEh6TUovL2xOaHZIZk5JUDNxUFhmRTM1UGlEVUlJNzVKUG5GQmtYTUp4TjBBdUJqUG9rMWpZM3JhYXRpUHBrT1lqNEZ6eXRwM1hGaVBnSGhhM2NZRnUxUkhmUEpqQi96U1JvVTBoZVVJbUlVNlFXVk1aK1F5RUVzUnhLbG5rcWxkQ2I2NDlHZFR2V3Y2RytrZnlJZ2RQYmlyOVdaTXZxandoNU5ua0JlZnlrbjNsMlpUMi9yd1dRc2p5cGRmNUd2TjAxN09XaW83MWllUjdaR1R1cUpnOWdlWThkODhvcms5N2Z5c0ZFZG9kRlRwcUxlamVWWDVNdjJqN1QrT2IwVC9ieG5rSTVsb1QzUDB2N2JVQytocmVkUFpmczAyVk52MityOGpWOURIQ1htVTEwL0hiTStaQ3B3OFdsQ2ZQOU54eUVvbDNlb1c4TGNPSm83UDJSOGRza3FZd1FwZWY1Nm5hVFQ0MzNwUEZQMU1LZzRINTI4SVZUTUovZFhmODFNNjVQV000MzVsQXZqQVpUSFp6MS8wb3FsOVUvMVRhOFA3czI1a2llcjEwTTNuTGFmcStjdWovbVVqTTg1T2FYWHNsQzJtNWFUdHErOGVwQmVCMHJ6cFJIc05hMllUNzZlK25xRWpMMHkxd3VUSHJjbzk0ODRlM0hEZ3JoZmwreVE2RG1LSG5KdVJ2M0FoSmhPbzhWOGNyZGtScjZXRmdxWHI5SGxZajVKK2tsaVBoa013MDFaRlBNcDFCbld4WmRTbFRkT3p4RER5ZW5yNUVaaElMeWRNdW5WYXp4cERLZmlma3JTRi9YVjl3KzVtRS9HbFd2ZFh2MUZ0RkZpUGhtSVZ3bnk2ZE9ZVDA1UGZkckhYOGRMN0NIMks2VjN2NGNJTVo5VTU4ekhmTXJFYURKSnpDZGZYa2FlYjNXTUVmUEpOYTU3UWw0Yjh5a2FERXc4U01wQ2dDeG15VG5qVDBSWHVtL3p1RzIxcktJS3lWZndYQjJEODFnNHg0b2tyalE3ZXpHZmlqekI2OUgvQmJ4WGpuVkZ5MS8vdFR0Yi90cGRjVng1RjluY2NWY3ZWMWZqRE8yN3FnM2VPTDVOMURWSlpOWEdmRUpjSCs5UkNPWFI1UDlPTStaVHJweHhZajVwRDZpMk1aL0MxL2VtRy9NSm9SRmtueDRNb2dFbHlWODY1bjVZL1RlUjRWczZJeWRWTnMyZjFzUHJyT1hZV0U3cTBRQVpXeEk1a1VkcnBMRHE0RWxsZlRsMXg1TzZOS1ViWmJ0S1QxK210ay9iZkhYYlZmV3Ewck5LempCT24rYUxMMFlaT1JYbFZMWlBRejNxNmxkYmowdzVWYjlIS1dmY2ZFTGtqcXQydEsxWFczdVg5SE5wR3Z2dkJQME53TnlJK1ZRamowd0ZMajVOaU5FL2JKZzdDbFV4aWxMUGk2dzhsUitJODFUSk05SEJZci9NOWF2aVIrbnRrbWRIbXJqSnN5VVJhRlEycEhXMkZYWEs2R1BUL1JVVjBmcjYzM2EwbUUvUjc1em5VNFVlV2YyVEhWRi9TTXZNOUl0V2NuUVdrOW12NWVnNVhVNzM1SGlWUGF2NmIxUE1wNnIra2ZhN3RKNmwvcHZXczA2ZUtqeGJIMVZPbTVoUGtlZ1I5TWoyUjFQV1F6eEpxbU0rV1hRVzgwbTc0amlDUjVaQmRjd25iWmZnK1pRK2hXNksrVlNPY1pTa2QvOEw5b2pUdDQvNUZIZUt5cGhQa1YxTktiMldvejNYZkJxSXZrbk1KOFR0NGIySWZQcWtmcjdjb1A1WU1aOHk3UnVhc0NubVUxREFlSHRuWWo2cC9tV05mQU5SNU5tZ1cxM01wOXdGVGRwQzcxSTJpR00rdVZQTnpNV1lUOGJsTDhxVHhTVko3L2M3cVNIbVUrZ0RrVWRRWkhjRGVacWVpL25rUFo4TXdvT0drQVg2YTNteUhPblhBQ0d2NXFrdkl0b3dSdm5mMXRYWGU4alV4SHlDS3hQRmdrdUk2UlMrTmpkcHpDZWdQdWFUdEVpejUxTSs1cE8wWFlqNUZEZUtlRDVWeFh3U0R5aVlvazFURDZnZHBpSG1rMnBmM3hGMFJUd3VVVlhNSnkvSFpMTkp1MEsxYTlRRGZYbnFmRTNuR2o2ZFVqcjFwUExwMUZpVVpJSHE1MkVSSnBjT1FiYnFkOFgrWkZZNXNvZFNZaC8vZTFRNXliWW8ydWl4a2JSenFmMUhrV05qZmRLMmp2UkVoUnc1bm5nK0NhMDlXNUwwdmxvNXU1a2FleVFkZXlSUG5XUmdFeGxtalBKVGU2RnRQaWt6N2ErSnZOWXhuNUlUbzhyZVdYdkl0cWxvaDZaeTY4cEw1SFVlODZtcFA3UzBQNWtJTGo1TlNHbThTUHA3WFRvMU55ck5GOUp4VTgvZHN1a3F6ajk1YWppd2FsNWh5K204bmxYbnB5U284WHlLcnUrSi9zTmtYRWtYbGRONWloL3UxWEhUd2s0bGIvQUcrelRwSWZYMUhqMnV2bElSclVkcTN6cDdOSHFlTmZTZmtoM1MraVRqcGorY3pCTXE3Wm1SRTgyckt2cXY5K3h5amg2Vi9TTldxMXh2dDYwOW42dzY3dTJWWEMrcTVsMGlzOVEvb2g4aFJvZGZJOGhjbDdRZXVlTlZlbWo3ZWM4MXAxTzBzT2JLR0thNmlrZUpBVXpVQ2NPWHYrUjJyaGd3bkdlU3VnSFhkZ0RxMG9kSmh2SG5iL0NzOHVtVE9abHh0Yk9RTDdxcGN1V0d5eWFlVWlpK0RqVVFyd2tqU3dwaVJPUC9TUHJJODhudkwrb2lyeFZCMlU4YVF6eHZUSEt5V25lRFBIQy9JN3VLbmRSazBqb2JhTHQ2TzNsN2FFK2hRcSt3Y2wrMG4wVklQNHpTNi9vNWU2aEJ4U2J5NVc0NkdtYXNMR0psN0p2cEQ5cnp5YmVYRFhhME5yRURuQmVNTHllV0o5ckk0a0pZbFZNeGsxQjR5Qlgya2kvT0pmTDBaTjJYVVI3SWg4bCs2OXNjME41WnNsOTBLZTZ2UXRCc2FVenRTV1hWL21DbHVLL0J0VnlSekVTZXozcmtpNzNUNUVoNVFKWTJEdnV0NzVQV05hQjFPUzNFUE1GektYNUFibHo3T2M4bmxEMmZDcjFMRWFIQ3ZhaXJsL2Q3VTljU0pTTEpaMTMvRGg1b1VQbXR0aFhVUTMySXg1T3pqZzA5Um5xcWVCeEpIU3p5bmt0RGwxOTdObWxQby9hZVQ0Vm5wYVF0UEt5MDUxT2NQL1Y4R2pyTkplYVRCYkRUNWQ4Smd4MU9wc1I4S2p5Zmluc3dIL01KSWViVHY3dDZCQThqUFdhV0dpUWNTejFQNUZnck9kTFk2bStVTG03ZmtneWIva2psSlJNa1pQTGEwZ2JDV1RCUStsZkpTU3RWczUydFk0V2NLcmxwblp1MnEyaXRkb05lbzNxMmxPeFJKU2VNaTFuOVpFZjZ1bWVUSjA2Sk51MlJxMGVGZkp1a1NlVlVsWjhlcml3L2Q3eG1mMG0vS2p1SUlkTnp0YWxlazlpakt2MFU4N2Z1SDI2alVsNVYvbEhyMDNCZWtySGc0dE9FcEl2SitsSlhGVk5IYjhlVDdGaWVmdFVzdllSbVBXVlFUdWRmNlRGeG90SWxPYU4vbXM3SGZFclROY1Y4U20rdU0rVmw2NWVLeWRpcHFsNnB2WE9iYmZRUVQ2OXB4WHhLajBkeWN1VW54MHY3dGN5MEgyYnlhRG01L3BudFQ2bE1tK2lyWmM1aXpLZGNYNms4NzBvZEFiQ0RUQit2eTVjNVh1cHZMZW9sU2Z6YWdta1o4MGthWEh2b1ZNWjgwanFxbUUrVjZmTXhud2F1WVcycWp3SEV4MFhMTDNudWVNOFgwUmV3ZytxWVQxNFg3ZldDQ3M4Z1o1ZGN6Q2VrNmIyblNhaDNZWHQ1SVZIU3F6UXdKVHZwWXF5M2g4cm44NDRRODhrRUQ2Qjh6Q2VqMHJ0NitKaFB5blMrYytWaVB1bitFTHhzdEE2NmZxazhvRG5tazVRTGhQN2lGelFCTk1kODBtMHIrMDE1UEhYNWZYOE5MUnQxMEdpcUxvdE4wSjQ5UlJteVg3ekZ2SU5GMEJBd2czVHFYOGd3bzhaOGt0cVplTTZkMmU5dG8vYjd4VUMzV0t3OWwyU0pVOWV2THVaVGNhOGU4anVGTTU1Tm9WTllxWWM3TGpHYnBIOFlxT2F5OERZb1lqNFYyNldZVC83MVdwWFBpSHhrWWo2aGc1aFBKbG9NTGp5ZlZIc0NyV0krV1JpZ2Rjd25qQi96U1RLSUFtSjRWMzY3bUU5MWNoQ09wWjVLcFhRbStxT01FVHFkNmwvbGRDWlRycVJUbVhMSHBZeGFPWExjVm0rck5vaCtOK1hMYmZ1YldMRkwyKzFNL2NhUmc1WjZWbnEyaUM1eUFpZnRXNUxUNElremRzeW5wTVBVZW1MbDZwRXVPdWo5cHFVOWtnRXo2aDh0OHBYc3BlclQxaE5KWW1WRU1aOXkrYXJxQlhWOFZIdFVsVE5LL3VUQ1V2SjhhdW9mbzhSOFF0bCtJOWNueVUrbUFoZWZKcVRrY2VyMkc4UXU3NE8wWDBNbDFOZGlKVS9QRGRLYjhOd2l0cjh1Sk9lclJVWE1wOHg1cldXbDZZWlFNWi9TZENQR2ZFckhiVjl1aFQ1eVF5aGVJbW45VTMzVDY1UDNORW11SDFYdDRmVklQWjlVZmRQMjB2T29rZ2UxMGdOb0VmT3BTZzR5OVZIbHB3YlY0M3lrcjhoSXJnTjEvU215VjY0Y1lHb3huNlIvakJMenlicHRreDYzbWZMaTdNVU55ekFjM3lVeG54RGFjTFNZVDRCNFBrVTNnM0RQNUUzeHE3QkppUGxrNWRXN0NXSStEWjM4NHZVZUhmUEp3aHIzQW95U0w1VTNUdmNpZlJ6enlReHRNWTlTdHZUcGZjeW5Za1ZUeDN6U25kQzQvMFV4bi96cmY5S1c1WmhQdWsybEhrTlpDRkgxTnFpUCtXUmhDNjhwTDlBQU9uMGE4OGxOVUhWLzlKNU0xb1p4ckdTL0lGLzBDV0tkVjQwNkNXUnhJblYyS09xdjZtbVNtRSs2dlZSbkQ1NVp1ci9HL1FYS2JrQTRGMkNWUEZ1TVFMVXhuK0xLSXpHV094MXNHQ3VpTm9IdkkzR2JsMk0rRlhMRTZ5cklzTzZZbFVxSWpzN2d4WjdaaS9ra25uYXBoMDdrOFFQNE9ZQjE1M2Z4NWNWdzdvb3BJczhwclZkMFhOblo5WWVoOHBTeE50VEd6Mkg4K1JKazFjWjhpdW9SNWtJVzJpTkovazR6NWxPeGVHZFJsYjl0ektkQ2puZzZ0WXY1RlBTWmJzd24xUWl5cjNYTUo1WEhxa1JXLzgzSnFKQ2psZFVUaUZTT09nZWp2MUc1VmZyYmNLNW03WkdVcmJkMUhVZlpIc3N6WkJ5NVRkdmo1a3Nhb0NTblNrOHRaeGpzRGpXUnlzbXBqZmxrcTh2SjJpa25aNUo2VktYUDZUVkorUzN5VmVrM1RQZFBFdk9weHQ2dDlXdWJ2NnE4Wkh0T3hIeXE2cDlrV25EeGFWb2tpd21DUEdReWRlblU4U2dkb0tmbU1MbmZpVHlUSkRSdTdsNTZ0U2ROcDlLbjFZb0t6bm0yNUhSTDlFcGpQcG1NSFhMMVN4ZnJxMkpvSVZOL3JjY29NWjhpUGRWcmRsbFBvWnp5VmNlVkhycHVVZm8yY3RBUTg2bXVmeVgyU284MzlhZWM3cHFtbUUrcHpNcDZKL1VzOWQ4a2Y2MjhPcHVuOW13Ujh5bW5aeXF2MXQ2WU5PWlRVTFRZUDhXWVQzSXdhWkRtbUU5eGVpOWZ1L1lBYUlyNTVQZVgwZzhpT3dWN3hQTGJ4M3dxL3FiMUxzVjhna2thU1k3SDlRNWZmd3Z0RjJwb1VJcjVGSlVUK3JjTjByUDE4K283K1Q1OTI1aFBpZDdhSE9KSjVTMW1VbmtoZzlneEcvTkoyVHZ5eWxEeUdtTStCYVdVMEVTVysyMjlMbkFMdGNHR2N6UG1rK1IzZGJLeTMwVDd4U0loNXBNMmk0bGV5dzFta1pUNW1FL0Y2NC95NU1TOTNHcUsrYlZ4TnBMRlNCLzd5WVFocklqNUZHeFJxQnBlV2JSSzBWWXhuMnk4c0taak9rbk1wVWxqUGtuK3FwaFBrai9uMlRSd25rZEYvbnpNcHgxR1BKOGs1cFBxWndCMkRGQWI4K25mak1SOEt2UkpZejQ5WlJwaVBxbjJqMzZVN3BsY0lWVXhuM3gyZFo2cGJMNEQrczZVWE5neTdlczdXRWtOMStsRVR2bUVDUmMvT2FDS3pzcXBTcGZhbzgyVG85YmJTZjNIbGVOdHF3UmxQVWJxdGhGVFZkOG16NCtvZkp2Uk95ZDNnT0RwSkpPL1lkSmU3a2R0ekNkVHRvL1Eyc01tU1krcWVxaiswbWlQakY3WjhqUGxDS1BteTNsYVJmYVErcmFOK2VRenF2MjVlcVgyYUxKZlJ0OVMvcnJ5a3UzT1l6NDE1YS9xVjZVQmxVeEFlcXRGeGtYNnIwVnBZVlYrMmlRZG10THBmM0d5a2p6WllkTjBWazBZVmRwU09wVytMcDFmWkI4aUxFQ25Eem95ZWcxRDFxaEFYVjZUUG5vc2IxTi9mWHhZWVovR2RsTjFIS3JmV1QwU3UrWDBIS3AwamZaUGpsZVYwMWdmZmRobTVHVDBqT3haSlNkakw5L09iZnRIVHA0cVgrU1o1TGpWK3VYcTAyUkhuZHlxV0NOYWI1V2hycHlvUFhONmxOVUk1ZG40dkpDNkl0bHZYZUlnVDNmQzhNV3JJS1V3ZXZGVUhuR2xmSDFzYUN4SkQrZlprVXo4Skc1S0lTZVhQcTZmOWVubG9GWDdUWFNPQU5iVnUwZ2ZVbGFsMS9hd1JUM1VVMERqN1ZGbHYrUWtjUHNLSGZUTmhGSDFVT21MV251Wmd2ZlE4R0pEVHl1OFRVeDhVdmo2aGJ3aHZhNWZzSWY4TFBxTjZzbEQ2M09Hc1NSTVdzVytPYjNGSEVOVlAyOFhaY2ZRemlHZWtIaUk1TnEvZU1VcmxSZHU4TDBVSytsVWY4cFJlMkd5SlYyOERkMytVRWJjcHZGK1hjY2ticElORnBaejBFVDd3Lzlsdk5KOTNQZHB2ZCtWYmF5MGo2cWkxVFlzNzlkU1JYZnBMME9uUDFEMElmbGJ4R3dLZlUrYk5mU1I2R2gwSGh1cmo4SHJuclovbE5iYlhyV2ZLOWpDblhPdVgraG4yc2JWUi81Q2FTNXRhTVgydmcrSGY5Ym5LLzZLVGNRTGFXaER2NUJ4T00wL1JDaS8yRDhNTXF3NnIyeUkweVQvWk5zTWdlR3dIUE5wcC9zOXNNWGZIYTRlRXZOcGgvdTNsMVV4bjJ5SStmUkxKRzJseDZuc09XUkNRL3VKU1BwUHk4bTNxLytyVDVocys2ck5rcnhFVGpUWXFMOFZSV2ZscVBFa3JrZGlqNnJKUnJxdHp1M3NtT1BybjVHVHpWZXpYYWRIeThPbDdhcjZscmFSNkpEK3JxcC9La2ZPNHpBL2lFVTVBZW5OUUtVK2xSVnFvVTlxWjFUc3QxTXV2K1o0cVgraytTcjB6bDFnQWNTR0hHYnlvVjI5c3YwejdTKzVhdVQ2czZSdjA5OHF6Z2MvUGpYbFJ6NS9ZejlOajQrWW4wd0ZlajVOU09yWm9HL1pJaStYNUVmMFRFZW5LejIxS2N2VjZmeWllRTA2L3dCY0phcVRWNVhPeDhOSlBaK2FZajRoWHVYVWRVNmViY1g2SlB2MXc3R3N2amw1eVdLNlNkTW1ja3J0TWVXWVQ3VWVTNW45dVhKMEJVcnAyOGdwVnlQV1BlM1A2ZThhZTgxbXpLYzJ4N042bUx6blU3YWZqcWxIS3E4cTVwTi9EVThldHZpOFJjSWdMMzVkcVRubWswNnZZajROcXRMbll6N0JET1NGdlNTOXRrSDQybDMrYTIzbEdFNVZNWitxMHBmayszejVtRSs1OUNhcHR3Rmc5UXAzNGltVmova1V5ckcrZlRMcFI0bjVoS2FZVHpxOWRDampjK3I2U3FjcngzeFNubWZLeTBickVPbFhJYTh1NXBPQkNYYjE4cXlTMXhUektXbzllQStwelBVbGp2bVU2T3lvOUh5SzZnaS9YM3dGaHdqRkJnc1hjWlA4NjdXcVQxb3IrMDNRUjlraGVrQ3YrbUhraU9MTllQeXJ4L21ZVDVMSndIdnEyU0kya0FVaTNRMWtNU1VmODhsL3VjM0dNWi8wZy9mb05WOVR2ZzhJTlloalBrbCtzVUVSODhrRW5RRDRtRTlpVFdQamV0cXFtRSttZzVoUHdmTktXbmVjbUU5QStOb2Roa1Y3Vk1kOE11UEhmSklHaGZRRnBZZ1lSWHBCWmN3bkpISVF5NUZFcWFkU0taMkovbmgwcDFQOUsvb2I2WjhJQ0oyOStHdDFwb3orcUxCSGt5ZVExMS9LaVhkWDV0UGJlakFaeTZOSzExL2s2MDNUWGc0YTZqdVc1NUd0a1pONjRpQzJ4OWd4bjd3aStmMnRQR3hVUjJqMGxLbW9kMlA1RmZteS9TT3RmMDd2UkQvdkdhUmpXV2pQczdUL050UkxhT3Y1VTlrK1RmYlUyN1k2ZitQWEVFZUorVlRYVDhlc0Q1a0tYSHlhRU45LzAzRUl5dVVkNnBZd040N216ZzhabjEyeXloaEJTcDYvWGlmcDlIaGZPczlVUFF3cXprY25id2dWODhuOTFWOHowL3FrOVV4alB1WENlQURsOFZuUG43UmlhZjFUZmRQcmczdHpydVRKNnZYUURhZnQ1K3E1eTJNK0plTnpUazdwdFN5VTdhYmxwTzBycng2azE0SFNmR2tFZTAwcjVwT3ZwNzRlSVdPdnpQWENwTWN0eXYwanpsN2NzQ0R1MXlVN0pIcU9vb2VjbTFFL01DR20wMmd4bjl3dG1aR3ZwWVhDNVd0MHVaaFBrbjZTbUU4R3czQlRGc1Y4Q25XR2RmR2xWT1dOMHpQRWNITDZPcmxSR0FodnAweDY5UnBQR3NPcHVKK1M5RVY5OWYxREx1YVRjZVZhdDFkL0VXMlVtRThHNGxXQ2ZQbzA1cFBUVTUvMjhkZnhFbnVJL1VycDNlOGhRc3duMVRuek1aOHlNWnBNRXZQSmw1ZVI1MXNkWThSOGNvM3JucERYeG55S0JnTVRENUt5RUNDTFdYTE8rQlBSbGU3YlBHNWJMYXVvUXZJVlBGZkg0RHdXenJFaWlTdk56bDdNcHlKUDhIcjBmd0h2bFdOZDBmTFhmKzNPbHI5MlZ4eFgza1UyZDl6Vnk5WFZPRVA3cm1xRE40NXZFM1ZORWxtMU1aOFExOGQ3RkVKNU5QbS8wNHo1bEN0bm5KaFAyZ09xYmN5bjhQVzk2Y1o4UW1nRTJhY0hnMmhBU2ZLWGpya2ZWdjlOWlBpV3pzaEpsVTN6cC9Yd09tczVOcGFUZWpSQXhwWkVUdVRSR2ltc09uaFNXVjlPM2ZHa0xrM3BSdG11MHRPWHFlM1RObC9kZGxXOXF2U3Nrak9NMDZmNTRvdFJSazVGT1pYdDAxQ1B1dnJWMWlOVFR0WHZVY29aTjU4UXVlT3FIVzNyMWRiZUpmMWNtc2IrTzBGL0F6QTNZajdWeUNOVGdZdFBFMkwwRHh2bWprSlZqS0xVOHlJclQrVUg0anhWOGt4MHNOZ3ZjLzJxK0ZGNnUrVFprU1p1OG14SkJCcVZEV21kYlVXZE12cllkSDlGUmJTKy9yY2RMZVpUOUR2bitWU2hSMWIvWkVmVUg5SXlNLzJpbFJ5ZHhXVDJhemw2VHBmVFBUbGVaYytxL3RzVTg2bXFmNlQ5THExbnFmK205YXlUcHdyUDFrZVYweWJtVXlSNkJEMnkvZEdVOVJCUGt1cVlUeGFkeFh6U3JqaU80SkZsVUIzelNkc2xlRDZsVDZHYllqNlZZeHdsNmQzL2dqM2k5TzFqUHNXZG9qTG1VMlJYVTBxdjVXalBOWjhHb204Uzh3bHhlM2d2SXA4K3FaOHZONmcvVnN5blRQdUdKbXlLK1JRVU1ON2VtWmhQcW45Wkk5OUFGSGsyNkZZWDh5bDNRWk8yMEx1VURlS1lUKzVVTTNNeDVwTngrWXZ5WkhGSjB2djlUbXFJK1JUNlFPUVJGTm5kUUo2bTUySStlYzhuZy9DZ0lXU0IvbHFlTEVmNk5VRElxM25xaTRnMmpGSCt0M1gxOVI0eU5UR2Y0TXBFc2VBU1lqcUZyODFOR3ZNSnFJLzVKQzNTN1BtVWova2tiUmRpUHNXTklwNVBWVEdmeEFNS3BtalQxQU5xaDJtSSthVGExM2NFWFJHUFMxUVY4OG5MTWRsczBxNVE3UnIxUUYrZU9sL1R1WVpQcDVST1BhbDhPalVXSlZtZytubFloTW1sUTVDdCtsMnhQNWxWanV5aGxOakgveDVWVHJJdGlqWjZiQ1R0WEdyL1VlVFlXSiswclNNOVVTRkhqaWVlVDBKcno1WWt2YTlXem02bXhoNUp4eDdKVXljWjJFU0dHYVA4MUY1b20wL0tUUHRySXE5MXpLZmt4S2l5ZDlZZXNtMHEycUdwM0xyeUVubWR4M3hxNmc4dDdVOG1nb3RQRTFJYUw1TCtYcGRPelkxSzg0VjAzTlJ6dDJ5Nml2TlBuaG9PckpwWDJISTZyMmZWK1NrSmFqeWZvdXQ3b3Y4d0dWZlNSZVYwbnVLSGUzWGN0TEJUeVJ1OHdUNU5la2g5dlVlUHE2OVVST3VSMnJmT0hvMmVadzM5cDJTSHREN0p1T2tQSi9PRVNudG01RVR6cW9yKzZ6MjduS05IWmYrSTFTclgyMjFyenllcmpudDdKZGVMcW5tWHlDejFqK2hIaU5IaDF3Z3kxeVd0Uis1NGxSN2FmdDV6emVrVUxheTVNb2FwcnVKUllnQVRkY0x3NVMrNW5Tc0dET2VacEc3QXRSMkF1dlJoa21IOCtSczhxM3o2WkU1bVhPMHM1SXR1cWx5NTRiS0pweFNLcjBNTnhHdkN5SktDR05INFA1SSs4bnp5KzR1NnlHdEZVUGFUeGhEUEc1T2NyTmJkSUEvYzc4aXVZaWMxbWJUT0J0cXUzazdlSHRwVHFOQXJyTndYN1djUjBnK2o5THAremg1cVVMR0pmTG1iam9ZWks0dFlHZnRtK29QMmZQTHRaWU1kclUzc0FPY0Y0OHVKNVlrMnNyZ1FWdVZVekNRVUhuS0Z2ZVNMYzRrOFBWbjNaWlFIOG1HeTMvbzJCN1IzbHV3WFhZcjdxeEEwV3hwVGUxSlp0VDlZS2U1cmNDMVhKRE9SNTdNZStXTHZORGxTSHBDbGpjTis2L3VrZFExb1hVNExNVS93WElvZmtCdlhmczd6Q1dYUHAwTHZVa1NvY0MvcTZ1WDkzdFMxUklsSThsblh2NE1IR2xSK3EyMEY5VkFmNHZIa3JHTkRqNUdlS2g1SFVnZUx2T2ZTME9YWG5rM2EwNmk5NTFQaFdTbHBDdzhyN2ZrVTUwODluNFpPYzRuNVpBSHNkUGwzd21DSGt5a3hud3JQcCtJZXpNZDhRb2o1OU8rdUhzSERTSStacFFZSngxTFBFem5XU280MHR2b2JwWXZidHlURHBqOVNlY2tFQ1ptOHRyU0JjQllNbFA1VmN0SksxV3huNjFnaHAwcHVXdWVtN1NwYXE5MmcxNmllTFNWN1ZNa0o0MkpXUDltUnZ1N1o1SWxUb2sxNzVPcFJJZDhtYVZJNVZlV25oeXZMengydjJWL1NyOG9PWXNqMFhHMnExeVQycUVvL3hmeXQrNGZicUpSWGxYL1UralNjbDJRc3VQZzBJZWxpc3I3VVZjWFUwZHZ4SkR1V3AxODFTeStoV1U4WmxOUDVWM3BNbktoMFNjN29uNmJ6TVovU2RFMHhuOUtiNjB4NTJmcWxZakoycXFwWGF1L2NaaHM5eE5OcldqR2YwdU9SbkZ6NXlmSFNmaTB6N1llWlBGcE9ybjltKzFNcTB5YjZhcG16R1BNcDExY3F6N3RTUndEc0lOUEg2L0psanBmNlc0dDZTUksvdG1CYXhueVNCdGNlT3BVeG43U09LdVpUWmZwOHpLZUJhMWliNm1NQThYSFI4a3VlTzk3elJmUUY3S0E2NXBQWFJYdTlvTUl6eU5rbEYvTUphWHJ2YVJMcVhkaGVYa2lVOUNvTlRNbE91aGpyN2FIeStid2p4SHd5d1FNb0gvUEpxUFN1SGo3bWt6S2Q3MXk1bUUrNlB3UXZHNjJEcmw4cUQyaU8rU1RsQXFHLytBVk5BTTB4bjNUYnluNVRIazlkZnQ5ZlE4dEdIVFNhcXN0aUU3Um5UMUdHN0Jkdk1lOWdFVFFFekNDZCtoY3l6S2d4bjZSMkpwNXpaL1o3MjZqOWZqSFFMUlpyenlWWjR0VDFxNHY1Vk55cmgveE80WXhuVStnVVZ1cmhqa3ZNSnVrZkJxcTVMTHdOaXBoUHhYWXA1cE4vdlZibE15SWZtWmhQNkNEbWs0a1dnd3ZQSjlXZVFLdVlUeFlHYUIzekNlUEhmSklNb29BWTNwWGZMdVpUblJ5RVk2bW5VaW1kaWY0b1k0Uk9wL3BYT1ozSmxDdnBWS2JjY1NtalZvNGN0OVhicWcyaTMwMzVjdHYrSmxiczBuWTdVNzl4NUtDbG5wV2VMYUtMbk1CSis1YmtOSGppakIzektla3d0WjVZdVhxa2l3NTZ2MmxwajJUQWpQcEhpM3dsZTZuNnRQVkVrbGdaVWN5blhMNnFla0VkSDlVZVZlV01rais1c0pROG41cjZ4eWd4bjFDMjM4ajFTZktUcWNERnB3a3BlWnk2L1FheHkvc2c3ZGRRQ2ZXMVdNblRjNFAwSmp5M2lPMnZDOG41YWxFUjh5bHpYbXRaYWJvaFZNeW5OTjJJTVovU2NkdVhXNkdQM0JDS2wwaGEvMVRmOVBya1BVMlM2MGRWZTNnOVVzOG5WZCswdmZROHF1UkJyZlFBV3NSOHFwS0RUSDFVK2FsQjlUZ2Y2U3N5a3V0QVhYK0s3SlVyQjVoYXpDZnBINlBFZkxKdTI2VEhiYWE4T0h0eHd6SU14M2RKekNlRU5od3Q1aE1nbmsvUnpTRGNNM2xUL0Nwc0VtSStXWG4xYm9LWVQwTW52M2k5UjhkOHNyREd2UUNqNUV2bGpkTzlTQi9IZkRKRFc4eWpsQzE5ZWgvenFWalIxREdmZENjMDduOVJ6Q2YvK3ArMFpUbm1rMjVUcWNkUUZrSlV2UTNxWXo1WjJNSnJ5Z3MwZ0U2ZnhueHlFMVRkSDcwbms3VmhIQ3ZaTDhnWGZZSlk1MVdqVGdKWm5FaWRIWXI2cTNxYUpPYVRiaS9WMllObmx1NnZjWCtCc2hzUXpnVllKYzhXSTFCdHpLZTQ4a2lNNVU0SEc4YUtxRTNnKzBqYzV1V1lUNFVjOGJvS01xdzdacVVTb3FNemVMRm45bUkraWFkZDZxRVRlZndBZmc1ZzNmbGRmSGt4bkx0aWlzaHpTdXNWSFZkMmR2MWhxRHhsckEyMThYTVlmNzRFV2JVeG42SjZoTG1RaGZaSWtyL1RqUGxVTE41WlZPVnZHL09wa0NPZVR1MWlQZ1Y5cGh2elNUV0M3R3NkODBubHNTcVIxWDl6TWlya2FHWDFCQ0tWbzg3QjZHOVVicFgrTnB5cldYc2taZXR0WGNkUnRzZnlEQmxIYnRQMnVQbVNCaWpKcWRKVHl4a0d1ME5OcEhKeWFtTSsyZXB5c25iS3labWtIbFhwYzNwTlVuNkxmRlg2RGRQOWs4UjhxckYzYS8zYTVxOHFMOW1lRXpHZnF2b25tUlpjZkpvV3lXS0NJQStaVEYwNmRUeEtCK2lwT1V6dWR5TFBKQW1ObTd1WFh1MUowNm4wYWJXaWduT2VMVG5kRXIzU21FOG1ZNGRjL2RMRitxb1lXc2pVWCtzeFNzeW5TRS8xbWwzV1V5aW5mTlZ4cFlldVc1UytqUncweEh5cTYxK0p2ZExqVGYwcHA3dW1LZVpUS3JPeTNrazlTLzAzeVY4cnI4N21xVDFieEh6SzZabktxN1UzSm8zNUZCUXQ5azh4NXBNY1RCcWtPZVpUbk43TDE2NDlBSnBpUHZuOXBmU0R5RTdCSHJIODlqR2ZpcjlwdlVzeG4yQ1NScExqY2IzRDE5OUMrNFVhR3BSaVBrWGxoUDV0Zy9Scy9iejZUcjVQM3pibVU2SzNOb2Q0VW5tTG1WUmV5Q0Iyek1aOFV2YU92REtVdk1hWVQwRXBKVFNSNVg1YnJ3dmNRbTJ3NGR5TStTVDVYWjJzN0RmUmZyRklpUG1reldLaTEzS0RXU1JsUHVaVDhmcWpQRGx4TDdlYVluNXRuSTFrTWRMSGZqSmhDQ3RpUGdWYkZLcUdWeGF0VXJSVnpDY2JMNnpwbUU0U2MyblNtRStTdnlybWsrVFBlVFlObk9kUmtUOGY4Mm1IRWM4bmlmbWsraG1BSFFQVXhuejZOeU14bndwOTBwaFBUNW1HbUUrcS9hTWZwWHNtVjBoVnpDZWZYWjFuS3B2dmdMNHpKUmUyVFB2NkRsWlN3M1U2a1ZNK1ljTEZUdzZvb3JOeXF0S2w5bWp6NUtqMWRsTC9jZVY0MnlwQldZK1J1bTNFVk5XM3lmTWpLdDltOU03SkhTQjRPc25rYjVpMGwvdFJHL1BKbE8wanRQYXdTZEtqcWg2cXZ6VGFJNk5YdHZ4TU9jS28rWEtlVnBFOXBMNXRZejc1akdwL3JsNnBQWnJzbDlHM2xMK3V2R1M3ODVoUFRmbXIrbFZwUUNVVGtONXFrWEdSL210UldsaVZuelpKaDZaMCtsK2NyQ1JQZHRnMG5WVVRScFcybEU2bHIwdm5GOW1IQ0F2UTZZT09qRjdEa0RVcVVKZlhwSThleTl2VVh4OGZWdGluc2QxVUhZZnFkMWFQeEc0NVBZY3FYYVA5aytOVjVUVFdSeCsyR1RrWlBTTjdWc25KMk11M2M5ditrWk9ueWhkNUpqbHV0WDY1K2pUWlVTZTNLdGFJMWx0bHFDc25hcytjSG1VMVFuazJQaStrcmtqMlc1YzR5Tk9kTUh6eEtrZ3BqRjQ4bFVkY0tWOGZHeHBMMHNONWRpUVRQNG1iVXNqSnBZL3JaMzE2T1dqVmZoT2RJNEIxOVM3U2g1UlY2YlU5YkZFUDlSVFFlSHRVMlM4NUNkeStRZ2Q5TTJGVVBWVDZvdFplcHVBOU5MelkwTk1LYnhNVG54UytmaUZ2U0svckYrd2hQNHQrbzNyeTBQcWNZU3dKazFheGIwNXZNY2RRMWMvYlJka3h0SE9JSnlRZUlybjJMMTd4U3VXRkczd3Z4VW82MVo5eTFGNlliRWtYYjBPM1A1UVJ0Mm04WDljeGladGtnNFhsSERUUi92Qi9HYTkwSC9kOVd1OTNaUnNyN2FPcWFMVU55L3UxVk5GZCtzdlE2UThVZlVqK0ZqR2JRdC9UWmcxOUpEb2FuY2ZHNm1Qd3VxZnRINlgxdGxmdDV3cTJjT2VjNnhmNm1iWng5WkcvVUpwTEcxcXh2ZS9ENFovMStZcS9ZaFB4UWhyYTBDOWtIRTd6RHhIS0wvWVBnd3lyemlzYjRqVEpQOWsyUTJBNExNZDgydWwrRDJ6eGQ0ZXJoOFI4MnVIKzdXVlZ6Q2NiWWo3OUVrbGI2WEVxZXc2WjBOQitJcEwrMDNMeTdlci82aE1tMjc1cXN5UXZrUk1OTnVwdlJkRlpPV284aWV1UjJLTnFzcEZ1cTNNN08rYjQrbWZrWlBQVmJOZnAwZkp3YWJ1cXZxVnRKRHFrdjZ2cW44cVI4empNRDJKUlRrQjZNMUNwVDJXRld1aVQyaGtWKysyVXk2ODVYdW9mYWI0S3ZYTVhXQUN4SVllWmZHaFhyMnovVFB0THJocTUvaXpwMi9TM2l2UEJqMDlOK1pIUDM5aFAwK01qNWlkVGdaNVBFNUo2TnVoYnRzakxKZmtSUGRQUjZVcFBiY3B5ZFRxL0tGNlR6ajhBVjRucTVGV2w4L0Z3VXMrbnBwaFBpRmM1ZFoyVFoxdXhQc2wrL1hBc3EyOU9YcktZYnRLMGlaeFNlMHc1NWxPdHgxSm1mNjRjWFlGUytqWnl5dFdJZFUvN2MvcTd4bDZ6R2ZPcHpmR3NIaWJ2K1pUdHAyUHFrY3FyaXZua1g4T1RoeTArYjVFd3lJdGZWMnFPK2FUVHE1aFBnNnIwK1poUE1BTjVZUzlKcjIwUXZuYVgvMXBiT1laVFZjeW5xdlFsK1Q1ZlB1WlRMcjFKNm0wQVdMM0NuWGhLNVdNK2hYS3NiNTlNK2xGaVBxRXA1cE5PTHgzSytKeTZ2dExweWpHZmxPZVo4ckxST2tUNlZjaXJpL2xrWUlKZHZUeXI1RFhGZklwYUQ5NURLbk45aVdNK0pUbzdLajJmb2pyQzd4ZGZ3U0ZDc2NIQ1Jkd2svM3F0NnBQV3luNFQ5RkYyaUI3UXEzNFlPYUo0TXhqLzZuRSs1cE5rTXZDZWVyYUlEV1NCU0hjRFdVekp4M3p5WDI2emNjd24vZUE5ZXMzWGxPOERRZzNpbUUrU1gyeFF4SHd5UVNjQVB1YVRXTlBZdUo2Mkt1YVQ2U0RtVS9DOGt0WWRKK1lURUw1MmgySFJIdFV4bjh6NE1aK2tRU0Y5UVNraVJwRmVVQm56Q1lrY3hISWtVZXFwVkVwbm9qOGUzZWxVLzRyK1J2b25Ba0puTC81YW5TbWpQeXJzMGVRSjVQV1hjdUxkbGZuMHRoNU14dktvMHZVWCtYclR0SmVEaHZxTzVYbGthK1NrbmppSTdURjJ6Q2V2U0g1L0t3OGIxUkVhUFdVcTZ0MVlma1crYlA5STY1L1RPOUhQZXdicFdCYmE4eXp0dnczMUV0cDYvbFMyVDVNOTliYXR6dC80TmNSUllqN1Y5ZE14NjBPbUFoZWZKdVQzUHZXTmFQc2Z2bmFYLzUxZTJ3a2hoRXdSbS93bFpFNlRkbFIyM04wZGc3Q2d4QWsxMlcxSUZ3ZlQ3YWtWTUhYQmhNd0t2L3UySTZQdEZYKzhlcFkwMmYzaGEzZUVFRUlJSVlRUVFnZ2hwRE80K0VRSUlZUVFRZ2doaEJCQ09vT0xUNFFRUWdnaGhCQkNDQ0drTTdqNFJBZ2hoQkJDQ0NHRUVFSTZnNHRQaEJCQ0NDR0VFRUlJSWFRenVQaEVDQ0dFRUVJSUlZUVFRanFEaTArRUVFSUlJWVFRUWdnaHBEUDJubTBGZG5kVy9QSHEyVmFCRUVJSUlZUVFRZ2doVStadi91WnpzNjNDSGdNOW53Z2hoQkJDQ0NHRUVFSklaM0R4aVJCQ0NDR0VFRUlJSVlSMEJoZWZDQ0dFRUVJSUlZUVFRa2huY1BHSkVFSUlJWVFRUWdnaGhIUUdGNThJSVlRUVFnZ2hoQkJDU0dkdzhZa1FRZ2doaEJCQ0NDR0VkQVlYbndnaGhCQkNDQ0dFRUVKSVozRHhpUkJDQ0NHRUVFSUlJWVIwQmhlZkNDR0VFRUlJSVlRUVFraG5jUEdKRUVJSUlZUVFRZ2doaEhRR0Y1OElJWVFRUWdnaGhCQkNTR2R3OFlrUVFnZ2hoQkJDQ0NHRWRBWVhud2doaEJCQ0NDR0VFRUpJWjNEeGlSQkNDQ0dFRUVJSUlZUjBCaGVmQ0NHRUVFSUlJWVFRUWtobmNQR0pFRUlJSVlRUVFnZ2hoSFFHRjU4SUlZUVFRZ2doaEJCQ1NHZHc4WWtRUWdnaGhCQkNDQ0dFZEFZWG53Z2hoQkJDQ0NHRUVFSklaM0R4aVJCQ0NDR0VFRUlJSVlSMEJoZWZDQ0dFRUVJSUlZUVFRa2huY1BHSkVFSUlJWVFRUWdnaGhIUUdGNThJSVlRUVFnZ2hoQkJDU0dkdzhZa1FRZ2doaEJCQ0NDR0VkQVlYbndnaGhCQkNDQ0dFRUVKSVozRHhpUkJDQ0NHRUVFSUlJWVIwQmhlZkNDR0VFRUlJSVlRUVFraG5jUEdKRUVJSUlZUVFRZ2doaEhRR0Y1OElJWVFRUWdnaGhCQkNTR2R3OFlrUVFnZ2hoQkJDQ0NHRWRBWVhud2doaEJCQ0NDR0VFRUpJWjNEeGlSQkNDQ0dFRUVJSUlZUjBCaGVmQ0NHRUVFSUlJWVFRUWtobmNQR0pFRUlJSVlRUVFnZ2hoSFFHRjU4SUlZUVFRZ2doaEJCQ1NHZnNQZHNLN083OHdVbXZCR0FBV0FEQTM5NzR4Vm5WWjFkendPTG53Qm9EWXkxMkF0ankwQTluVzZWZGl0Ui9hSXYyNzFQOS8vUHpENGExMXRlL1QzVUhnRDg0NlhkUm5QZkYrZCszYzcvdjdkL24raCt3K0Rrd3h2ajYvK1I3ajh5MlNydVUrTHB2OExjMy9zTXNhN1JyMlcveGM3QjNqOXUvei8xL3Y4WFBBUURmL2ovdTBiZ0h5TGtQOVBXNnY5L2k1MkF2d1BmL3ZyVi9uL3YvQWYvbFlPd2NGdmM2ZXh1RC85MmpjUThBWHJmaWQySGR2VjRmci92VGhKNVBFMkpNV0hncWZ2ZU1RYkh3QkFCN0RmcGIvNzBBL0lkQnYwNm5IZFpHOWU4Zk5qci8rNGJ0ZWZ2M3V2OFBURlQvdmlIbmZWL1AvNzE2M3Y1OTd2OTdHNE85QnNhUC8zMGtQdi83eGQ3R1JQMi9iL1M2L3crTHVZNGYvM3VHdGNVNTM5ZnIvalRwMTkxeWg4aFRnTDVoTExBVHdHQXc4Q3ZpdldKWWVIeGhZUER2dytGc2E3TkwyV3Rnb3ZidkgySGkwY2RKcURFbTZ2OTlvOC85ZitmUVltOFQ2dDgzaW10OVA2LzVBSXFia0VGLzI3L1AvZCthb3Y0eS92Y05tZXYzOFpvdjZQN2ZOL3JlL3pFd2Z2enZJOWFHNno4Wkg3NTJOeUZ5RWVyckpOVGFZaEFhRG9mOWUvcnYyTXNOeG52M2JUSXl0TENBYi8rK1lVeS96MytyUFI3N09BbnJjZi9mYTJBQUc4Yi92cUhQK1Y3ZWhMcHpYdnAvMytoMS8zYzNucmFQWXo3NmZjMEhWSiszNktjTit0ei9aYTdYMHprZkY1Nm5SNzhlMTNhQTdveTk3SkFENHoyZStsei9QdFpkUEY3Nld2KytUMEw3M3Y2OXJ2L1ErdGN1K3VqeHFoZWVlbm4rSzQvSFByWi9yL3Yvb044ZXIzMWZlQmFQbjc2K2R0Zm4vcjlUTFR6MXplTVRpRDJlZTNuZG55SmNmSm9RM1FGNzJSbmRPOEFZOUhjU3ZoY0tWOXkrdlFNdEhpOVMvNzdSOTBsbzM5dWY5US8xN3lPOVhYaHk5TDM5ZTF2L1ljODlYaDA4LzN2YS9qM3UvL0txdGZ6dUc0V1RTZmhOeG9ldjNVMkIzcnZpYVZmTW5tR01LVzQ4Ky9nT3RGeDRlM2dSQnVqOUFPZnhJLzIvZC9TNS8rczY5MjNjQTYvNWZXOS8xdC80OGI5djlOM2oyUWZhN3RzMVQ5UFgvdTlldGU1eisvZjkvSjhXOUh5YUVEMEo3V1ZuRkxmem5nNUdFbnl3ai9VMzdxc25mVjE0QlBwOUV5b0xUenQ3MnY2OTd2L3F4cnQzcngwQjBUbmZ5K3UrM0hqMThMb0hvTi85WDkxNDk5SGprNkUydVBEYTUvN2YyNFUzY09GcG1uRHhhVUw0MVJ0KzlZWmZ2ZW5uRFVpZkY1NEVmdldtdi8yZlg3M3A5MWR2b3Y3ZlIzcmEvL1ZpVys4VzNzQlFHenYxd2xNUDI3L1gvVjh0dHZkeDRhM3ZvVGFtQ1JlZkpxVG9nRDN1alBMVm16NSs5UVhodmVkZTFsKysrdEhEQ1JnUVB3WHBvdzEwbis5ai9YdmQvL25WR3dEaS9URGIyc3dDYXVHRi9iOWY5ZC9iZWJ6MWNzN2o2UE9ESjRueDJrdVBYL1M4LzZzWXYzMGI5d0NHMnBnbVhIeWFrTjUzUm43MXByZGZ2WWs4UHZwMkVRYWZndlQ5cXpkOTd2Lzg2azIvRjU1NzdmRUg5djgrdDMvZlEyMFkwKzlRRzBCLys3OTFDMjk5OW5qdDg4THpOT0hpMHhUbzYwVUlLRjQxMjhzTlJyMzc2Z3RDL2Z2NDFSdHIrNzN3S0tkOFg4OS9hZjgrZnZVRjZIZi9MenhlMVBqWE0vcSs4Q3dlVDMzODNEalE3LzYvdzlxNC9YdEdueGVlQU4zKy9RczFBZlM3L3h2M3FuVmZQVjdqaGVmWjFtYjNob3RQRTlMM1NlamVKaXc4OWJIKytzYTd6L1h2MjhKYlFiOG5vVUIvRjU2RTN2Yi9vY1hRV2ovKzl3MTZQUGYzYytNQWV0My85MVllSDMxYmVBTTQ1NWYybC83Zk4vcmMveVhHWnkvSGZLUUx6LzIwd2JUZzR0T0U5SDBTdXNOYURKd3I1bzRlMWw4SFgreGQvYlhIUjg4dXdvQSs1L3Y3MVpzK3QzK2Y2eThlSDM3ODd5Rjl2ZVo3ZXVqeEovUzUvL2ZaNHhQZ25GOTdQUGR1em90KzkvL0k0NmxuY3g2QUM4L1RoSXRQVTZEUDc0QVdIazlxUmJ4bmlNZVh1S0wyQ2UzeDFyZUxNS0Fub1QwT3VJMyt0bitmKzc5KzFicUh3ejRub1FONlBQZTEvL2M1MUlEUTE0VW5nS0UyZXQzL2V4N2p0KytoTnFZSkY1OG1wTy9CQi8wa3RLZnZBSXZIVXg5ZlB4Z1l4UFh2SVgxZWVBYlE2L2J2Yy8vM054NjluWVQyMi9zQlF4djEvNzdSNS80ZnpYVjZOdTRCWEhpT0ZwNTYyUDU5N3YvR0dGLy9ubFhkMGVONy9TbkR4YWNKNmZYQ0UvZ09zUGQ0NnVGWGJ3WXd2Vzcvdmk4OFJ4NS9QV3ovUHZkL2VkVzZyeDZ2QUJlZW8vN2ZNL3JjLzJXeHJZOGVud0FYbm5jT2JkVC8rMGFmKzc4MW9mNEQ5R3ZjQXhocVk1cHc4V2xDK0JTRVg3M2hWMi82dC9BR2NPR1pYNzNwYi8vblYyLzZ2ZkNzUGY3NldQOCs5My94ZU9tang2ZlE1NFZuSFdxamorM2Y1LzZ2UGQ3NjZQSGErMUFiVTRTTFR4UFM5NmNnOHNTL2owLy9BZkNyTjdyOWUwYmZGNTc1MVp2Kzl2KytlbndKdlY1NEF0dS96L1VYajQ4KzE3L1A1ei9idjcvMTF6RXUremJuRWZxODhEeE51UGcwQmZwNkVRTGNUWGNQbi81cDVPbG5INzk2QTZDMzdTOFhvTDZlLzFMblBqNzlCL3JkLzZYTlpmenZHMzFmZU83N1Y0LzYzUC83N1BFR2NPRlp0MzhmeDc1ZTkvL2VlN3oyZStGNW1wZ3VEZmlaTC8yVEJZQlQzdmkyenNvZ2hCQkNDQ0dFRUVJSUllTngzVi8vT1FEZzljZitSbWVyeS9SOElvUVFRZ2doaEJCQ0NDR2R3Y1VuUWdnaGhCQkNDQ0dFRU5JWlhId2loQkJDQ0NHRUVFSUlJWjNCeFNkQ0NDR0VFRUlJSVlRUTBobGNmQ0tFRUVJSUlZUVFRZ2dobmNIRkowSUlJWVFRUWdnaGhCRFNHVng4SW9RUVFnZ2hoQkJDQ0NHZHdjVW5RZ2doaEJCQ0NDR0VFTklaWEh3aWhCQkNDQ0dFRUVJSUlaM0J4U2RDQ0NHRUVFSUlJWVFRMGhsY2ZDS0VFRUlJSVlRUVFnZ2huY0hGSjBJSUlZUVFRZ2doaEJEU0dWeDhJb1FRUWdnaGhCQkNDQ0dkd2NVblFnZ2hoQkJDQ0NHRUVOSVpYSHdpaEJCQ0NDR0VFRUlJSVozQnhTZENDQ0dFRUVJSUlZUVEwaGxjZkNLRUVFSUlJWVFRUWdnaG5jSEZKMElJSVlRUVFnZ2hoQkRTR1Z4OElvUVFRZ2doaEJCQ0NDR2R3Y1VuUWdnaGhCQkNDQ0dFRU5JWlhId2loQkJDQ0NHRUVFSUlJWjNCeFNkQ0NDR0VFRUlJSVlRUTBobGNmQ0tFRUVJSUlZUVFRZ2dobmNIRkowSUlJWVFRUWdnaGhCRFNHVng4SW9RUVFnZ2hoQkJDQ0NHZHdjVW5RZ2doaEJCQ0NDR0VFTklaWEh3aWhCQkNDQ0dFRUVJSUlaM0J4U2RDQ0NHRUVFSUlJWVFRMGhsY2ZDS0VFRUlJSVlRUVFnZ2huY0hGSjBJSUlZUVFRZ2doaEJEU0dWeDhJb1FRUWdnaGhCQkNDQ0dkd2NVblFnZ2hoQkJDQ0NHRUVOSVpYSHdpaEJCQ0NDR0VFRUlJSVozQnhTZENDQ0dFRUVJSUlZUVEwaGxjZkNLRUVFSUlJWVFRUWdnaG5jSEZKMElJSVlRUVFnZ2hoQkRTR1Z4OElvUVFRZ2doaEJCQ0NDR2R3Y1VuUWdnaGhCQkNDQ0dFRU5JWlhIemFWUmd6MnhvUVFnZ2hoQkJDQ0NHRTdISzQrRFF0MnF3dEdjTkZLRUlJSVlRUVFnZ2hoUFFLTGo1TkM5dDAzTVovQ1NHRUVFSUlJWVFRUW5vQUY1K21RVnR2Smk0OEVVSUlJWVFRUWdnaHBHZHc4V2thakx1b3hGZndDQ0dFRUVJSUlZUVFzb2ZEeGFmWmhKNVFoQkJDQ0NHRUVFSUkyY1BoNGhNaGhCQkNDQ0dFRUVJSTZRd3VQaEZDQ0NHRUVFSUlJWVNRenVEaUV5R0VFRUlJSVlRUVFnanBEQzQrRVVJSUlZUVFRZ2doaEpETzRPSVRJWVFRUWdnaGhCQkNDT2tNTGo0UlFnZ2hoQkJDQ0NHRWtNN2c0aE1oaEJCQ0NDR0VFRUlJNlF3dVBoRkNDQ0dFRUVJSUlZU1F6dURpRXlHRUVFSUlJWVFRUWdqcERDNCtFVUlJSVlRUVFnZ2hoSkRPNE9JVElZUVFRZ2doaEJCQ0NPa01MajRSUWdnaGhCQkNDQ0dFa003ZzRoTWhoQkJDQ0NHRUVFSUk2UXd1UGhGQ0NDR0VFRUlJSVlTUXp1RGlFeUdFRUVJSUlZUVFRZ2pwREM0K0VVSUlJWVFRUWdnaGhKRE82Ti9pa3pIeHYvUVlJV1JPc25EaGd0bFdnUkJDQ0NHRUVFTElHT3c5MndyTUtheWRtcWlaSll2d291YzlDd0J3MnpmdXcrYk4yNmFhbmhRc1hMZ0F4LzNtWVFDQTczei9NV3k4KytGWjFxZy9uSEhTTWdEQTFwLy9BamV2djJmcThpOVllVHd1ZTlkNUFJRHRUejZGVTkvMGRwNFhoR1RvK2x3ay9XUzJycThuTGo4QysvN2Ewd0VBVjkrNFlaZVVTUWdoaEpEdTZlZmlrekZUWFdqS2NmYXB4K08wRlNjQUFGYWU5NTdHQ2RTbzZVbkJjYjk1R05aZDhVNEF3TFUzZkFFYjc3NXlkaFhxRVdMMyt4OTRDRGV2UDNPcXNoY3VYSUJMTGp3TFFGaDQ0azAxSVhtNlBCZEpmNW10Nit0N0x6b0xoeDZ5R0FBWG53Z2hoSkE5aWY0dFBsbmIrY0lUSVdReXZ2aXBQOGY4ZWZzQUFONTkyY2U1OEVRSUlZUVFRZ2pKd3JkaGRnLzZ0L2hFQ0puVFhMUDJYUC9VKzlLMTYvQ0JkYmZNc2thRUVFSUlJWVNRdVFyZmh0azk2Ri9BY1VMSW5PWEU1VWY0MTA4dlhic09xeSsvZnBZMUlvUVFRZ2doaEJBeUtmUjhtaU44YmRPMy9PL3ZmUCt4MlZOa04rTTczMzhNMTk3d0JRQ3hEVW4zaU4wZmUveUpxY2hidUhBQnJ2cmdhZ0RBNTI2OWd3dFBoTFJrMnVjaUliUEpGNzY0QWZmYzk4QnNxMEVJSVlTUUtjUEZwem5DMVRkdVlHRE5NZGg0OThOMHE1d2xUbDkxNVZUbEhmZWJoK0ZMZDN3ZHYvaVg3WGp6SmV1bUtwdVFQWmxwbjR1RXpDWjg4RUFJSVlUc21YRHhpUkF5SitBQ0xDR0VFRUlJSVlUc21URG1FeUdFRUVJSUlZUVFRZ2pwREhvK3RlU0NsY2ZqZDVZdHhXR0gvaGZzdCs4Q3YvLytCeDdDaG4rOEM1LzUvRmNtK3FUanpKSkZlTkh6bmdVQXVPMGI5Mkh6NW0ydDh5NWN1QUJucnpnV1I3LzhLRHozT2MrSzlIdmswY2Z4OEE4ZXhRMmZYeit5VjRuV1NlZGR1SEFCTGxyNSsxajJzaVA5Vjhta3JHL2Q5eUErY05YL3lOcEM1enY0MlFzeGY5NCtBSUF0VzdmaHZ2di8xMWc2anZwWnpUbzdyem4vWkJ6OThxUHc0aGMrMytzR0ZHMTh6MzBQNEdPZnZtWGtOajV4K1JIWTk5ZWVEZ0JqZWZWTW1oOEF6amhwR1g3M0ZTL0RTdzU3QVE0KzZFQy9mOHZXYmZqQkR4L0RWNzUyNTFpdk9aeHgwaklBd05hZi93STNyNzluTE4xT1hINEVUditEMzhYaVJRZEZmVW5yOXJFYnZqVFMrU0RzNnJZbXBJbXEvcjc5eWFmd3lJODJZOE0vM29YM3IvdTdrZnY3cU9kaVZmcVpKWXR3d1puL1BUdFczSGYvLzhLZGQ5OC9aMTZKV25QK3lUaHF5YUdsYS9JazE3d2NjdTFmOU55RElwdEltejMwOEtPVjE3dzY5TFdyemZqVTVqb3ArZlE4WVB1VFQrSGIzLzNlMk9OOEZUTkxGdUgxcno2Nk5BOFFQYis4WWRQWVh5cWR4blZQNjZmbkcvcGNtM1RlUmdpWmpMcjdseTFidDJITFQzODI5blZ4a3Z1cWNmTEx1TlgydWlyM2oxVjFrM3pwZktIcFhtdFVxcTV4azE1THE4YnhxbnRJdVZiZDlhM3Z0bTV2ZlIwRmdNTmZGT1Fkc1A4ei9WeEhHS2NmZEhtZjBsZU10Yll6NFovNTBqOVpBRGpsalcvcnJJeXVPZU9rWlZpeitweG9RS3ppMmh1KzRHTnZYTFAyWFAvVnJwWG52YWZ4eEIwMXZmQ1g3MTZKTjd6K3hPZ0d1b3I3SDNnSWYzTGhaYTBISzYyVE9mQm9BTVVnZGNtRlo5V1d0LzNKcC9DaGozODZtdWllY2RJeVhMbm1na1k5Yjkrd0VXKzQ2UExXSi9FWkp5MkxQcXZaRlBza1orY1RseCtCdGU5WkZRMjZWYlFwUS9QdDI2L3lnNVhZY0JRbXlYL2k4aVB3M292T2lnYkxLclkvK1JUZWZkbkhSN3Bac0k5L0JVRFJyMTU4ekptZDZuYlRMZXRIam11enE5dWFrQ3BtbGl6Q0p5NjdzSFYvLytSbmJoNHA3dG1vNTJJdXZUNWY2bmprMGNleDZwMXJ4MTV3bnBRTFZoNlB0NTd6aDYydXlaUG9Pc3ExSHlnK2t2Qm43LzNZV05ldVVjZW56OTE2QjE1NzVocS9QYk5rRWE3N3lMc2E4ejN5Nk9NNDVVL2YxWG9PVUhWOWJkdFh0bXpkaHRWclBqenlqY3NrMTcyRkN4ZmdrKzgvSDhjc20ybVZmdFE1QnlGa09veHkvekxPZFhIYys2cHg4OHU0TmVwMWRjdldiVGp6cld1aTY5UmZ2bnNsempuajVFWWRQM3oxOVdQSFNCMWxQanpxL1NPUUg4ZmIzRU1DN2U5SjlEV3FEYVAwZzExeG56SVh1ZTZ2L3h3QThQcGpmOE4wVlFZOW4ycFljLzdKdUhqVlNyKzkvY21uc1BIT2IrSEhUL3dVQUdDTndmT2ZlNUIvT25uYWloTnd3UDdQeFBKVFZ1OFMvZFpmdHlhYVlEM3k2T1A0K3NadlJtbCthK2FsZm1BNTlKREZXSC9EWCtEVU43MTlyTW00dHNlV3JkdndqNXZ1d1MrM2J3Y0FQRzMrZkx4czZSSFliOThGbUQ5dkgxeThhaVVlZWV6SHVQckdEYmhnNWZHNDdGM25aZk9sT2g2emJBYWYvY2c3TVBQcTgwYldieHhPWEg0RVB2M1I5L21CY05OZDkrS2hoMy9rangrdy96TXhjOVJML0hHNWlNejFBU2J0dTBCOTNlYlAyd2VYdmVzOC9LZGZmVnJubmcxcnpqOFpiem5yMU9qaWsrcVc5cWZUVnB5QUl3NDdCSy84bzdlTmZaT3dwN1kxbWR1ay9TNjlqZ0RsYy9HY00wN0dDNTczbkZtNWxqU04wUWNmZENBKy9kSDM0UVcvZmRvdXYyRlByM2s1V3k1ZTlHd3NQZkx3U05kUnIzbnArQ25lUExxY3A4MmZIejNKZnMyclhvSEZpdzRhZVNGZTBQMGtWeS9kQnE5NTFTdHd6ZHJ0T0gzVmxaaFpzZ2pyYi9pTHlueXBQVzcrNVB2eDB0LzdrN0hiVHJlQlBLbXVHa2YzMjNjQjFsM3hUaHo4ckFOMmljZmNpY3VQd0ZVZlhGM3loS3ViRngyemJBYmYvUHRQbEc3K0NDSGRrYnQvK2RaOUQwYlhuUVAyZjZiM2JKWHI0dE4vWmY1dU15ZlRkVXpIb1hTYzFOZlVtNjVhamRlODZoWFpmSHB1RE1BdlVJMjZBTlhtSGtGZk95YTlmMHpMYkxwV3lUM0p6My94TDdNU0MzYTI3bFA2QWhlZktyaGc1ZkhSaVZuM1ZIUGh3Z1c0ZE5YcE9HM0ZDVGhtMlF5dVdYdHU1L3I5NWJ0WFJvUGFwVmY4VmVVSnFwK0t6cCszRDlhK1p4VnVYbi9hU09YTkxGbUV0NXgxYXUzVGgvU0o0NXJWNStBNzMzOE1sMXg0Rm9CNlR4THRHYlgweU1OeHhrbkxPaDl3ZnUzcHYrTEwzSFRYdlhqZG43NjNzbjExdlU1YmNjS2NmaTByN2J1Yjdyb1hxOTc5NGNwWElhWHZBc0RGcTFiaS8vemZYNDc5dXNRMGRRUGlDOENoaHl6RzF6NzdJVHgzWnJTK0MreTViVTNtTmdzWExzQlZIMXp0SnpEWDN2QUZYTHoybXNxSmlYN2FlY3l5R1Z5dzh2ak96a1hobXJYbjRwaGxNNDFQR3ZVWVBYL2VQdmprKzgvZlpZdGpBSERUVmF1am01VTZXODRzV1lTMWw1eURwVWNlanZuejlzR25QL28rTEYveFo2M080eE9YSHhHTlVVMVBsclZkRGoxa01kYWNmL0pZQ3kxcjM3TUs4K2Z0VXp2WDBQMUR4cWJyUHZLdXhuRk56d0gyMjdjWTg4ZTVnWk8rQXRUYmYrSENCZmlMZDV6dGI2QzZ2cTRBUlIzMUltL1R2T2lNazViaDR2UCsyTnRrbEQ1Q0NCa2ZmZit5L2NtbmNPN3FEOVRPOTNQajNsdy9UeTlZZVR5T1dUWlQ2LzJaM3B0OTh2M240OHNiTnVFMXIzcEY0L1ZZMitRTnJ6OXhwTmNTenpocFdXa2VYamNuL3V4SDNqSFd0YlNxekxwN3dkU0xkODNxYzJyN3htM2Z1QThyejN1UDN6NzhSWXU5WFc3ZnNCRTNmSDU5S1gwVHMzV2YwaWNZY0R6RHdvVUwvSUlKQUZ5NmRoMWVlK2FheWhONzgrWnRPSDNWbGJqd1hWY0FnUGVBNnBLVFRqd1dRREZ3di94MWI2azlPVGZlL1RCZS9ycTM0UDRISGdKUVBQMjhZT1h4STVYM2ljc3V4UHg1KytEYzFSK29uSWh2M3J3TnkwOVpqUzFiQ3p2dHQrOENQekgrOE5YWDEwNTJyNzV4QXo3MDhVLzc3VDgrNWRVajZUY09aNy94Sk15ZnR3OHVYYnNPTTY4K3I3WjlsNSt5R3B2dXV0ZnZ1K0RNLzk2NWZ1TXdzMlJSMUhjL2ZQWDFtSG4xZVpXRHB2VGREMThkYnBZdXVmQXNMRnpZN2xXVFNYVDczSzEzMU9vR0ZKL2NYcjdpejdEOXlhY0FGSDEzbk1YZFBiR3R5ZHpuN0JYSCtpZVVNdUdxbXlDKytaSjEvam9DRlAyMlMrYlBuNGZUVnB5QVJ4NTlIQy80N2ROcUZ3ZXV2bkVEVG4zVDIvMzJNY3RtT2hrbmNseXc4bmkva0FFQXIvbWo4MnR0dWZIdWh6SHo2dlA4ZVR4LzNqNzR4R1VYdGlycm9uTk85Nzh2WGJ1dThZbHlhcGVULytCM1c1V2plY3Vmbkl5RER6b1ExOTd3aGRxNXhwc3ZXWWZiTjJ6MDJ6SkozM1RYdmJYajJzYTdIOFlwZi9vdXYvM2E0NWVQck9NQit6L1RQNlM0OEYxWDFOcC84K1p0ZU8yWmEzRHAybUM3cnE0cmdzdzFnT0lWa2FaNTBkVTNib2ptUmFQMEVVTEkrTHpoOVNjQ0tPNWZUbjNUMnhzZk5MLzVrblhSSEhXdXo4bm16NStIU3k0OEM5dWZmQW92L2IwL3FheGZPaTdQSFBVU3ZQV2NQd1FBblBxbXQ5ZGVqL1cxWVA2OGZYRFJ5dDl2cGR2Q2hRdXdadlU1ZnZ2MkRSc2I1OFF6cno0dkttdWNjZkxpOC80WTI1OTh5bCs3cTVEN1ZYMGZXWGUvdW5uek52K2w3S3R2M0lCN3YvT1FQL2JqSjM0YUhidjZ4ZzJOQzNTemVaL1NKN2o0bE9IU1ZhZjdTY3p0R3phMmZvcjVnWFczK0FHeWJieUJjWmhac3NqZjBHeTg4MXV0VnJzM2I5NkdkN3ovNDM3N3RhOGFMWTdDb1ljc3hyVTNmS0dWTjlMVjEveWQvMzN3UVFkaXk5WnRyVnhDVjE5K3ZSOXdYdnpDNTQrazN6aklwTDF0KzY1Njk0Zjk3NWN0UGFJcnRTYmlQZWUvTWVxN2JWMXgzM3pKdW1nU2Z2YUtZenZYVGNjc3FXUGozUS9qMURlOTNRL3NwNjA0QVROTEZvMVU5cDdZMW1UdWM5U1NRLzN2ajMyNm5kZkhCOWJkNGhkTkRqN29RSnk0dkx2K0owOFhWNzF6YmF2cnlNM3I3NGtXUDdvWUozTEloQndvRm9UYXV2Mi83ay9mNjhlTlF3OVozRGh1TEZ5NHdMdjkzLy9BUTYzSGk1dlgzeE8xMmFoSW5KQTIza2p2dlB5di9XL2ZmbXE4cW1MajNROUhOeENqOWl1WjAzejQ2dXRiZXpDdHZ2ejZxTXhMVjUzZWtHTTgxcHgvc3JmRkk0OCszdnExaDgyYnQrR1ZmL1EyUFBMbzR3RGdQZGNJSWQxd3djcmovVHp3cGx2V3R4N0wzM3pKT2orV0wxNTBVR2Y2VFFQeFpEcDM5UWNheDZGMFhONXYzd1c0ZmNQR1ZuYlIxNElqWC9MQ1ZycGR1dXAwZi8rNDZhNTdXM3N2NjRleWh4Nnl1QlRJdTRtRER6b1FuL3pNemEzcXRYbnp0dWcrOG5lV0xSMnByRW1ZemZ1VVBzSEZwd3p5VkhEN2swL2hEUmRkUGxMZU4xK3l6azlrdWtLK3ZnQWdlbCsyaVp2WDMrTVhkNTc3bkdjMXBDNXo4ZHByV3FYNzUvc2VqTGIxSU5MRUQzNzRHSUJpRU40VkoyNmJTYnV3OGU2SGZkdTJEVUs3SzVsWnNpaHlaUjYxNzE1enc2Mys5d212WERaTjFTYlc3ZWIxOStDbVc0TDc3SHZPZitQSU91eEpiVTEyRDM1OS8zMzk3MUhjMUwveXRUdjk3Lzk2MkF1bXFsTksyNG11OE9VTm0venZaeDI0ZnhjcVJhdzUvMlIvRG82eUlBUVVrOWd2ZitVYmZ2dnNVK3M5Zms5KzVjdjg3dzMvZU5kSWV1cFlFS05PeklGNC9LMWo0OTBQK3drdVVMUmYyNzcxNFBkLzZIK1AwNjhlZWZUeGtXT0x2T0dpeTcyKzQzaGN0ZUdNMDhOVC8wdXYrS3VSNG0xczNyd05sMTd4VjFsWmhKRHBNbk5rK0RMWlRWLzhueVBsZmVSSG13R2dWUURvMmVhUlJ4OXZIVHBFajh0QXZLaFVoNzRXdEwybjAvZTNyL3ZUOTdiS0krZzU5S2h2cDdSMVFoQStkc09YL0c4OWorcVN1WENmMGhlNCtKU2dWK1hiZWhXbFhQKzMvekJ0dFNLMi92d1gvdmNSaHgweVV0NnJyL2s3WEh2REYvQ2xPNzQrVXI1TmQ5M2IyaGJwamN5dFg3MnpJbVVaUFlIWGkyeGRjUDhERDQzODN2TERQM2pVL3g3bkJxTkxYdi9xNE0zMnljL2NQSExmL2NDNlc0TGI2TE1YemluZGdHTHhVL1NiT2VvbEkrWGQwOXFhN0I3OGN2dVQvdmNvZmVqV3I5NkphMi80QXE2OTRRdDQ1TEVmZDZCWklJMkowTVRYdi9sZC8zdlU2ODg0SFAzeW8veHY3YjNibG12VTlYanhvbWZYcHYxUHYvbzAzUC9BUTdqL2dZZHd4OWRIVzN5YWhPMVBQalZTUENTNUNRT0FPKysrdjNVKy9VckNPQXVINDh4dE5tL2VobzEzZmd0QThWQnAxRmYrbXpoeCtSSFJrL3h4WWtWZWZlTUc3L203Mzc0TE92VTJKS1R2eUJpN0p3ZjQvL3N2ZjYxMVdqMHViOW02YmFTNXFsd0wyandrbmZUK1ZudHBMVDN5OEpGZW94NzFublB6NW0zZVdXSlhMVGJPOW4xS24rRGlVNEplbGRkUGVFZEJyOWgyd2Mzcjc0bGVKUmpGVFh6MTVVWHNwVkdEamVwRm9WSFkvdVJUY3pZdzREMzNQVEJ5bmxFOHpYWTF5MTUycFAvOW1jOS9aU3daVDF2OGV6QUhIbzJuTGY2OWFha0ZZRHE2cFRjeG85ek03Mmx0VFhZUDd2cFdXS2k1K0x3L2JqMVoyM2ozdzM2Yzd2ckRDNlBLMzlYanVid0d0MlhydHJGdVZtNWVmdy9NZ1VmREhIaDA0MWRVVjE5K1BWNTh6Smw0OFRGbmpseFcwOEpXSFhveGFWUlNUK011R1hkdW8rZFNlbzQxRFY3N3l2L0gvOVllZzZQeWhTOXV5TW9raEV5UDE1NjV4byt4b3pMdGg2SmRvaGVVUmtIZS91Z0NQZlorNUZOL081WU1QWlpyVCtFbXZyYnBXeU9YdGVXblB4czV6eVRNOW4xS24rRGlVNEorbDNqY0w3TnMzcnpOUDBYckN1M2FkL0dxbGRqNCtTczZmVm8zenNBQlREYXA3cHB4NnpSWGthY0Rqeno2K0p4YjhKdVdidnJDOS9LbEwybWRiMDlyYTdKNzhQNTFmeGNGb1h6d3E5ZGl6ZmtuNzdKQTNVMTBmWjJhRkQxeCs4ZE5jL2NwK1pyelQvYUxaT013enVLNHNLdThCKzUvNEtHeFB4K3Q1MUxUanRlaXZlOG1lZkNuOCs0S2p6NUNTSHZXWDdjbSt1ejlYR2ZjaDBialB1aHZneDU3eDcxdWFNL25GeC9TUGpSSzF3L1Jwc0ZzMzZmMGliMW5XNEc1eG43UGZBWUFlSGUvY2ZuSkUxczdkUlU4ZmRXVldMem8yWDdDdS9USXcvRzVUMTJPTFZ1MzRSODMzWU1IdnZjRDNQclZPK2ZjSWdUcEJoMGZTNzh1TmhlWXBtNzZ3dGYxRnlVSm1aVE5tN2ZoM05VZndKVnJMc0Q4ZWZ0Zy9yeDljUEdxbGJoNDFVcHN1dXRlUFBUd2ovQzFUZC9hTFNabXM4SEJ6enJBLzM3Z2V6K1lSVTJLWU9USC9lWmhPUGhaQitCWkIrNlBwODJmajhXTERzSit6M3hHTCtMQy9lU0pyUlBsMzdKMUcvYmJkNEdmWTAwTFBXY2JkM0VNQ0s5NWRLRWpJYVNabVNXTDhLTG5QUXVIdjJneG52NHI4M0hBL3MvRXIrKy9MdzUrOXNMZGF1RnByakovL2p3QXhlTEtORHh5OXFRNU9POVRkaTFjZkVxUVNlU2s3bjY3NHBXZG1WZWZoMnZXbm92WEhyL2NEOHo3N2JzQXIzblZLL0FhdkFJWHIxcUo3VTgraFc5LzkzdTQ2MXZmeFdjKy94VXVSdTJoakJ1RWZsY3dUZDEwLzkxVlFRZ0ptWVNyYjl5QXJULy9CZDU3MFZuUkE0bWxSeDZPcFVjZWp0TlduSUIxVjd3VGp6ejZPTDUxMzRQWWVOZDlZM3ZkN21ub3VFUmR4NzVLV2Jod0FjNWVjU3lPZnZsUmVQRUxuMTk3OHlQWDJVbThuK1k2azQ3ZFczNzZzMkpoWjhvTGRkT2FzNG1NTG5Ra2hKU1pXYklJcjMvMTBWajJzaU1iSDliTEIyREcrWm9vS1JEYkhYelFnVmgzeFRzbmxyY256Y0Y1bjdKcjRlTFRibzdFQlZsei9zazRhc21obURucUpkRWtlZjY4ZmZ4TnpqbG5uSXpiTjJ6RUd5NjZmS0luaElRUVF0cHo4L3A3Y1BQNk16R3paQkhPUHZWNC9OYk1TMHVUNklNUE9oQUhIM1FnWHZPcVYrQ3Q1L3doUHZqaHYrRWkxQ3l3Y09FQy9NVTd6c1pyWHZXSzdQRXRXN2RoeTA5L2hudnVld0MvK0pmdHVQYzdEK0hxR3pmZ21yWG43dEdMVDRRUU1nMW1saXpDSnk2N3NITEI2WkZISDhjVFc3YmlvWWQvaE1jZWZ3TC9mTitEdUhuOVBmajI3VmZ0WWswSklWM0F4YWM5QlAzNTZaa2xpL0JiTDMwaFpvNDhEQzg1N0FYUlRjNHh5MmJ3NEZldnhhbHZldnNlL2FVSlFnaVphMnk4KzJGc3ZQdEt2MzNHU2N0dytJc1c0OGlYdkREeXJ0bHYzd1c0N0YzbjRYZVdMY1h5VTFiUGtyYjlZK0hDQmZqYVp6OFVYVE1mZWZSeC9QMlh2K1lYbVFnaGhJekhpY3VQd0tjLytyN29JZm1tdSs3RlY3NTJwMTlrSXQzeXlLT1A0OUlyL21waU9mckw2NFNNQWhlZkVoNTU5UEhpQ2ZTRVgxV1k1TXMzazFMYzREd011S2ZtOHJSZFhzK2JQMjhmckgzUEt0eTgvclJaMDVGTWw5dStjWi8vUFp0OUw4YzBkZE5COVI5NmVHN0Z0aUprVklyRmpBMSsrNEtWeCtQMEZhL3lUNFNQV1RhREMxWWUzMXNQcUc4L0VOelhEMy9SWW1oYmRjRm5QL0lPdi9Ba0UzUXVPQlZNR3J0QzVsVHkrc3kwbU5hY0RlaE9SMEpJc2JoLzFRZFgrNFduVFhmZGkxWHYvakREZ2V3aVpLemN2djFKWHRjU2VKK3lhK0hYN2hLMmIzOFNRUEc2MmlSZkpOcC92N256bnFkOHR2dlVONzNkQjFJLytLQURjY0hLNDJkWk05SkUyNkQxbXpkdjgxL1ZldTV6bnRXUXVwb1RseCtCTTA1YWhqTk9XamExTDNKTlN6Y0ErSytIdmNEL2Z2d25XeWFTUmNoYzR3UHJic0dManprVG43djFEci92N0RlZU5Jc2F6UzRQL1RCOExmVUZ6M3ZPMkhKa1RLc0xzanF6WkpGL2JXN0wxbTE0K2V2ZXdnbTZZdEZ6eC85SzNjS0ZDL3dOcDh5eHBzVVRXNHBBNlBQbjdSTUZqUjJWbVNXTHZJNGlreEF5UGM1ZWNheVBwN2Jwcm5zeDgrcno1dlRDMDU3MjFVc1plN3Y4R05idUN1OVRkaTFjZkVyUW56dytlOFd4WThtWVdiS28wNkI0MTZ3OUY5ZXNQUmRyemo5NXBIdzNyNzhISC96dzMvanQzMW0yZE5xcWtTbWlWOC9iOE8zdmZnOUE4Y3JPdUpQdzkxNTBGdFpkOGM2cEJDUFVhTjFHclpmbTZKY2Y1WC9mOGZXN0p0YUxrSzQ0NDZSbGZxd2U5WHg4N1pscm9nQ3JrOXhVNzg3Y3ZQNGVQeUU4N05EL01yWWNHZE11UHUrUEs5Tzg2cmZEMkhManpWOGFPUzdpbnY1Vm0wbjZvWjVMNlRuV05ManJXK0hMUXE5LzlkRmp5OUY1dFV4Q3lIUTRhc21oL3ZmN1Azek55UGwzOVZjb3ArRk5PWmZRWGpqak9oL01MRm1FYjk5K0ZiNTkrMVg0eTNldm5KWnFjd0xlcCt3NnVQaVVjTk1YLzZmL3JUdlFLRXd5QVdyRHNhLzRMWnkyNGdTY2NmcnZqNXhYdjc3QktQemQ4MHYxbEhmVWlmdnBmL0M3STZYL3l0ZnU5TDh2T1BPL2o1UVhLSjVPeThWMjBzOVcxK2syYXIyRTFET0JzUUhJWE9iZ1p4MkEwMWFjZ05OV25CQXRiTFRsNnh1LzZYL3JMN0gwalkxM2ZndEFNU0VjWjhLc3ZaM3FQcUdzdjZ4MzczY2VHcm1jU1JiSGRoZkduZHZvdVpTZVkwMkR6M3orSy83MzcvM095OGVXYzlLSllZRk15eVNFVEFkOXp6SHEvRzFteWFLUnYwTDVpMy9aN244Zi9Ld0RSc3A3d2NyamE3OXd1anV5OGE3d2F0bTR6Z2RubjNvOERqMWtNUTQ5WkRFZTNmeVRhYWsySitCOXlxNkRpMDhKTjYrL3g3K2F0dlRJdzBkZU1GaTRjQUhlOFBvVE85QXM4SU1mUGdaZ01nOFhzbXQ0Nk9FZitkK2ozSUF1WExnQUwxczYyc3I3eDI3NGt2Y1MrSjJqZjNQa3ZuSDJpbVA5eGZaTGQzeDlwTHlqNlBhYVY3MWlySDc3bnZQZjZIOVBXejlDcHMwLzMvZWcvNjJmK0pMUnVPSHo2LzN2Y1Y1QlhQSHE1VmxaZGZ6YTAzOWxwRExXbkgveXlEZEd1eU52ZVAySkk3K08zZlZrZk9QZEQrUCtCNHJGd29NUE9uQmtqM0FnYnIvN0gzaG9UcjhLUk1pZXdLamppSjcvdFVVL1JCajFHdnphVjNYclJEQWJmR0RkTFg0ZWZzeXltYkhtNGNlKzRyY0FBTnVmZkFyWGYvRWZwNnJmYk1QN2xGMEhGNTh5WEgzTjMvbmYxMzNrWFNQbC9lVDd6OGY4ZWZ2NEJhd3V1T25XOEZSdTdTWG5qSlJYVDh5bTdmNU95dWlBdVNlOGNsbnJmSmV1T2gzNzdidkFENFJ0Mkx4NUcyNjZwYmk1bWo5dkgzemlzZ3RiNTEyNGNBSGVjdGFwZnZ0am41NXVnR090RzFDY1Y2Tk1QdGFjZnpLT1dUWURvTGpvWGJ4MmRKZHRRbllsTjYrL3g3ODZkOHl5bVpIZHVHV1NCNkRYc1lldXZuRkR0TGh3emRwelcrYzk0NlJsZnR6WXNuVmJyUjMxV0QzS1UrRVRseDhSaloxN0tsdTJic1A4ZWZ2Z2srOC9mNlI4ZWc2bDUxYlQ1RU9mQ0YvN2ZjdFpwNDUwcnFYdHAyVVJRcWFIZnUxcmxMQW1ldjQzQ2pxSTlNeFJMMms5NXp6anBHVllldVRoSTgyL2R4ZjBQSHlVZXdTZ0NQa2lpL1JmL3NvM3B2cDJ4RnlBOXltN0RpNCtaVmg5K2ZWUnZJMzExNjFwbGUrbXExYjdqdGZWSkFzb1ZxKzFkMWJiSjMzcEpHdmFDd3lrakg3U2NPZ2hpMXUxMVpyelQ4WnBLMDdBOWllZndwZS84bzJSeXJ0NDdUVytieHg2eUdLc3YyNU40K0FwbnhjWHI2ZlAzWHBISjA5K0wxNTdUWFJlZmZGVGY5NXFZTDlnNWZHNGVGVjR0L3hESC8vMEhuZlJJM3NtMS8vdFAvamZhOSt6cXZWRVp2MTFhL3drNy9ZTkd6dlJiWGZpSGUvL3VQOTkyb29UV3NXYU9ISDVFYmh5elFWK1c4Yzd6S0dmNHJaZExEeHgrUkgrNjAwNlNQeW9ubE83QXpLbk9XYlpERzY2YW5XclBPdXZXeE45UFhEMTVkMHM3Rng5NHdaL25zeWZ0dyt1K3VEcWtkc1BLTTYxUGkvMEV0SWwrcld2TTA3Ly9aSG1mOXVmZkNxNkZyYkp1M256Tm15NjYxNEFhTDF3cnE4YmVpRmlUeUYzajlBR3VTOEJpb1dWUDN2dnh6clRjUksyL3Z3WC92YzRYNjNqZmNxdWdZdFBGYXg2NTlySVBmRUhHNit0L0ZMT0dTY3R3N2R2dndxdmVkVXJBQUNYcmwySFJ4NzdjYWY2NlluMHhhdFdZdVBucjZpY2JNMHNXWVJyMXA2TFQzLzBmWjB2TUpBeStnSjI4YXFWdUdidHVkbkJiT0hDQmJobTdibCtBSHYzWlIvSEw3ZHZMNldyWS9QbWJUanpyV3VpdnZ2TnYvOUVaYXlVTmVlZmpBZS9lbTEwZzlEVlJXWHo1bTNSZVhYb0lZdnh6Yi8vUk9XQzNNeVNSVmgvM1JwYzlxN3ovTDdiTjJ6czdBYUdrR21UUHNoNDhLdlhZczM1SjFkT1ppNVllVHkrZmZ0VjBkT3pkMTcrMTd0TTM3bkt6ZXZ2d2FWcjEvbnRjODQ0R2QrKy9hcnNOVS9HMGM5OTZ2Sm9VVUhITzh5eGVmTzJhQUhwMHg5OVgrVWlsNHhObi92VTVkaHYzd1g0M0sxMzRCcTEwSGpKaFdmaG1yWG43bEVCV1I5NTdNZTQ5b1l2QUNoZVNmajI3VmZWem9sK3NQSGFxQit2ZXVmYVR2Vjd3MFdYKzNOdHYzMFg0Tk1mZlYvanRmYlRIMzJmWCtSOTVOSEg4WWFMTHU5VVIwTDZ6QWZXM1JLZG85LzgrMDgwM2xmSi9PL2RsMzBjRDM3L2gvNzQxejc3SVZ5ejl0ekdPSUIvZGQzbi9lOWpsczFnNCtldnFIeWRhczM1Si92N3BNL2RlZ2UrdHVsYjdTdTNtNUM3UjZpN3Y1MVpzZ2diUDMvRmJyT3dvbC9yWG5yazRiaG03Ym5SMTI2YkZwSjRuN0pyMkh1MkZaaXIzTHorSHB6NnByZjdnZWpnZ3c3RXVpdmVpVFdyejhHV24vN01wenY0MlF1am9IU1hybDJIMVpkZlgvdEo1Mm53Z1hXMzRELzk2dFA4Z0xEMHlNUHh1VTlkanUxUFBvVkhmaFErVHoxLy9yelNsL2MrZCtzZGVPMlo3VmE3eWVTY3Z1cEtISEhZSWY3enBoS0UrSkZISDQ4K082MC9mM3JwMm5YNHdMcGJSbnJGUkpDK2U5VUhWMk8vZlJkZ3YzMFg0TEozbllkTExqd3I2aHRwMzMzazBjZng4dGU5cGRPTGl1aTI5ajJyY1BCQkIySy9mUmZnNGxVcjhaYXpUbTNzdDlmZThBV2N2dXJLem5RanBBdGUvcnEzNEd1Zi9SQU9QdWhBekorM0R5NWV0UklYcjFwWk92L1Q4M0hMMW1LU3lJY0VCVEtaZTh0WnAyTCt2SDF3NkNHTDhibFBYWTR0VzdkRjErVDBNOUszYjlpSTVhZTA4OVQ1cy9kK0RDODU3QVcrcmM0NTQyUzg0ZlVuUm1QVGZzOThSaFRmNmZZTkcvMzFkTXZXYmRodjN3V1lQMjhmbkxiaUJQZTY0THEwbU4yVzAxZGRpUVAyZnlhT1dUYURRdzlaakhWWHZCTlhycm1nMWo3Ym4zd0twNzdwN1owSFh0MjhlUnRlL3JxMzRMTWZlUWVXSG5tNGI0UFFEb0cwajJ5NjYxNjg3ay9mTzJkdnFBalpVMWoxenJYK3ZtcS9mUmUwdnEvNndMcGJNTE5rRWM0NW8xZ0VPUGlnQTNId1FRZjZCZkVxcnI1eEExNis5Q1hlYTJmcGtZZmpHN2VzSzEwM2RKa3lwbmQ5SHpkYlZOM2ZObzNsUUxqSG5jdDg3dFk3dkRPSVhBT0VsZWU5cDlHN2xmY3AzY1BGcHhwdVhuOFBYdkRicCtHVDd6L2ZQOEdUbS9tVSt4OTRDTzk0LzhkM2FXVDcxWmRmajBjZSt6SGU4aWNuKzhtVVRNcHozUC9BUS9qUUo2Nm5XL2tzOE9KanpzUk5WNjMyQXlLQTBxQUZUSzhmM2J6K0h0ejFlMytDUzFlZGp0Y2V2eHp6NSsxVDJUZTJQL2tVYnJwbC9TNGJNRzllZncvdWV1QXRyWFFEMkcvSjdvM2NGT3YrRHVUUGZ5Q2NqeGV2dllZM3d3bXJMNzhldDM3MVRyem4vRGMyWHBPM2JOMkdEMzc0YnhvOW5qVFNWbi94anJQOVdGMDNibjd5TXpmanpaZUV4YVV6MzdvR0Y1MXp1Zyt3L1pNbnRvNVV2OTJCNWFlc3hnVXJqOGRiei9sRHY5QldOWGJmdm1FajNuRFI1YnVzSDIvZXZBMHpyejRQYTg0L0dXZWMvdnUrWDFUcHQyWHJObHg5emQvTitac3BRdllVYmw1L0Q1YXYrRE44NHJJTC9YbFpONGF2WHZOaFAvZmJlUGZEdVBCZFYrRHNONTdrcjUrUFBmNUVZNW1ucjdvU2p6MytoSDl3VVZYbU9OZU0zUlZwQjMwdGJacUg3K3A3M0hHUnR6ZjAvZGFvOEQ2bFc0eTF0alBobi9uU1Axa0FPT1dOYit1c2pGM0Z6SkpGZU5Wdkg0V2psaHpxUHhmNnkrMVA0cUdIZjRTYnZ2Zy9aLzJFUEhINUVYakZieDJKRnp6dk9kSG5USC95eEZZOCtQMGY0ak9mL3dxZm9NOEJacFlzd3V0ZmZYU3BuZTY1NzRITyt0SENoUXR3OW9wamNjanpuNHZGaXc3eSszL3l4RmJjZWZmOStOZ05YNXJWbTl3TFZoNlBGeCt5Q0VjY2RraWtHL3N0MmROWXVIQUJUbjdseTByOUhTakdnRzgvOEhBdkpyN1RvR29zZmVqaFI3SHhydnNtdG1QWDh2Y0Vxc2J1TysrK0g3ZCs5YzVaSDd0UFhINEVYdnZLL3dlTEZ6MGJUNXMvRDhEY21yY1IwbWR5NXlmUTNYeTRhaTdjOXpGZDdtOXo5d2dQZnYrSHVPUHJkKzIyWTJYcXZYYmJOKzRiNjM2blQvY3AxLzMxbndNQVhuL3NiNWl1eXVEaUV5R0VFRUlJSVlRUVFraFAyUldMVHd3NFRnZ2hoQkJDQ0NHRUVFSTZnNHRQaEJCQ0NDR0VFRUlJSWFRenVQaEVDQ0dFRUVJSUlZUVFRanFEaTArRUVFSUlJWVFRUWdnaHBETzQrRVFJSVlRUVFnZ2hoQkJDT29PTFQ0UVFRZ2doaEJCQ0NDR2tNN2o0UkFnaGhCQkNDQ0dFRUVJNmc0dFBoQkJDQ0NHRUVFSUlJYVF6dVBoRUNDR0VFRUlJSVlRUVFqcURpMCtFRUVJSUlZUVFRZ2docERPNCtFUUlJWVFRUWdnaGhCQkNPb09MVDRRUVFnZ2hoQkJDQ0NHa003ajRSQWdoaEJCQ0NDR0VFRUk2ZzR0UGhCQkNDQ0dFRUVJSUlhUXp1UGhFQ0NHRUVFSUlJWVFRUWpxRGkwK0VFRUlJSVlRUVFnZ2hwRE80K0VRSUlZUVFRZ2doaEJCQ09vT0xUNFFRUWdnaGhCQkNDQ0drTTdqNFJBZ2hoQkJDQ0NHRUVFSTZnNHRQaEJCQ0NDR0VFRUlJSWFRenVQaEVDQ0dFRUVJSUlZUVFRanFEaTArRUVFSUlJWVFRUWdnaHBETzQrRVFJSVlRUVFnZ2hoQkJDT3FQcnhhZW5BQUR6OXVtNEdFSUlJWVFRUWdnaGhCQXlFbUc5NWhkZEZ0UDE0dE1XQU1DQ3AzZGNEQ0dFRUVJSUlZUVFRZ2daaVYvN1ZmbjE0eTZMNlhyeDZWNEFlT25CQ3pzdWhoQkNDQ0dFRUVJSUlZU013aEhQZlpiOC9HNlg1WFM5K1BSbEFEaDY2ZUVkRjBNSUlZUVFRZ2doaEJCQ1J1R1lzRjV6UzVmbGRMMzQ5RCtzdGRzUGY4RWlMSGorY3pvdWloQkNDQ0dFRUVJSUlZUzA0ZGNXUHh1SHYyQVJyTFhic1RzdlBwMXkzTktmR1dPdU5NYmdvajk2TGJEUGYreXlPRUlJSVlRUVFnZ2hoQkRTeEQ3L0VmL3ZHMzRmeGhnWVk2NDg1YmlsUCt1eXVLNDlud0JnamJYMk93dC8vWmw0MjdtbkEwK2J0d3VLSklRUVFnZ2hoQkJDQ0NFbG5qWVBienYzZEN6ODlXZkNXdnNkQUd1Nkx0SllhN3NUYmd3QTRMcmJOajNQV3Z0MVk4eitQMzVpSzk3OTE1L0Z2enowYUdmbEVrSUlJWVFRUWdnaGhKQ1lYMWw4RUM1NTQrdHd3UDc3d2xyN0UyUE1menZsdUtYZkI0Qk8xNGQyeGVJVEFGeDMyNmJuV211L1lJeDVrYlVXMy96TzkzREh4bnR4MzBNL0JINzJmNEFPOVNDRUVFSUlJWVFRUWdqcEhjWUF6L2hQT0d6eGMvQ0ttY1B4MGhjOUg4WVlXR3UvWTR3NTRaVGpsdjVBa3U0UmkwOEFjTjF0bStZQldHMnRYV1dNWVFBb1FnZ2hoQkJDQ0NHRWtGMkV0ZlpmalRGWEFIamZLY2N0ZlRJNTFsbTV1M1R4U2JqdXRrMzdBamdGd0xIVzJpT01NYi9lbVJLRUVFSUlJWVFRUWdnaFBXVTRIRDR4R0F6dUJ2QmxBSjgrNWJpbFczUHBkdHZGSjBJSUlZUVFRZ2doaEJEU2IzYkYxKzRJSVlRUVFnZ2hoQkJDU0UvaDRoTWhoQkJDQ0NHRUVFSUk2UXd1UGhGQ0NDR0VFRUlJSVlTUXp1RGlFeUdFRUVJSUlZUVFRZ2pwREM0K0VVSUlJWVFRUWdnaGhKRE80T0lUSVlRUVFnZ2hoQkJDQ09rTUxqNFJRZ2doaEJCQ0NDR0VrTTdnNGhNaGhCQkNDQ0dFRUVJSTZRd3VQaEZDQ0NHRUVFSUlJWVNRenVEaUV5R0VFRUlJSVlRUVFnanBqUDhmNzJCeHY5bWMyTW9BQUFBQVNVVk9SSzVDWUlJPVwiIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgcmV0dXJuIHggPT09IHkgJiYgKHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5KSB8fCB4ICE9PSB4ICYmIHkgIT09IHkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgO1xufVxuXG52YXIgb2JqZWN0SXMgPSB0eXBlb2YgT2JqZWN0LmlzID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmlzIDogaXM7XG5cbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlO1xuXG4vLyBmb3IgQ29tbW9uSlMgaW50ZXJvcC5cblxudmFyIHVzZVJlZiA9IFJlYWN0LnVzZVJlZixcbiAgICB1c2VFZmZlY3QgPSBSZWFjdC51c2VFZmZlY3QsXG4gICAgdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8sXG4gICAgdXNlRGVidWdWYWx1ZSA9IFJlYWN0LnVzZURlYnVnVmFsdWU7IC8vIFNhbWUgYXMgdXNlU3luY0V4dGVybmFsU3RvcmUsIGJ1dCBzdXBwb3J0cyBzZWxlY3RvciBhbmQgaXNFcXVhbCBhcmd1bWVudHMuXG5cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90LCBzZWxlY3RvciwgaXNFcXVhbCkge1xuICAvLyBVc2UgdGhpcyB0byB0cmFjayB0aGUgcmVuZGVyZWQgc25hcHNob3QuXG4gIHZhciBpbnN0UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgaW5zdDtcblxuICBpZiAoaW5zdFJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgaW5zdCA9IHtcbiAgICAgIGhhc1ZhbHVlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBudWxsXG4gICAgfTtcbiAgICBpbnN0UmVmLmN1cnJlbnQgPSBpbnN0O1xuICB9IGVsc2Uge1xuICAgIGluc3QgPSBpbnN0UmVmLmN1cnJlbnQ7XG4gIH1cblxuICB2YXIgX3VzZU1lbW8gPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUcmFjayB0aGUgbWVtb2l6ZWQgc3RhdGUgdXNpbmcgY2xvc3VyZSB2YXJpYWJsZXMgdGhhdCBhcmUgbG9jYWwgdG8gdGhpc1xuICAgIC8vIG1lbW9pemVkIGluc3RhbmNlIG9mIGEgZ2V0U25hcHNob3QgZnVuY3Rpb24uIEludGVudGlvbmFsbHkgbm90IHVzaW5nIGFcbiAgICAvLyB1c2VSZWYgaG9vaywgYmVjYXVzZSB0aGF0IHN0YXRlIHdvdWxkIGJlIHNoYXJlZCBhY3Jvc3MgYWxsIGNvbmN1cnJlbnRcbiAgICAvLyBjb3BpZXMgb2YgdGhlIGhvb2svY29tcG9uZW50LlxuICAgIHZhciBoYXNNZW1vID0gZmFsc2U7XG4gICAgdmFyIG1lbW9pemVkU25hcHNob3Q7XG4gICAgdmFyIG1lbW9pemVkU2VsZWN0aW9uO1xuXG4gICAgdmFyIG1lbW9pemVkU2VsZWN0b3IgPSBmdW5jdGlvbiAobmV4dFNuYXBzaG90KSB7XG4gICAgICBpZiAoIWhhc01lbW8pIHtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgdGhlIGhvb2sgaXMgY2FsbGVkLCB0aGVyZSBpcyBubyBtZW1vaXplZCByZXN1bHQuXG4gICAgICAgIGhhc01lbW8gPSB0cnVlO1xuICAgICAgICBtZW1vaXplZFNuYXBzaG90ID0gbmV4dFNuYXBzaG90O1xuXG4gICAgICAgIHZhciBfbmV4dFNlbGVjdGlvbiA9IHNlbGVjdG9yKG5leHRTbmFwc2hvdCk7XG5cbiAgICAgICAgaWYgKGlzRXF1YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIEV2ZW4gaWYgdGhlIHNlbGVjdG9yIGhhcyBjaGFuZ2VkLCB0aGUgY3VycmVudGx5IHJlbmRlcmVkIHNlbGVjdGlvblxuICAgICAgICAgIC8vIG1heSBiZSBlcXVhbCB0byB0aGUgbmV3IHNlbGVjdGlvbi4gV2Ugc2hvdWxkIGF0dGVtcHQgdG8gcmV1c2UgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCB2YWx1ZSBpZiBwb3NzaWJsZSwgdG8gcHJlc2VydmUgZG93bnN0cmVhbSBtZW1vaXphdGlvbnMuXG4gICAgICAgICAgaWYgKGluc3QuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2VsZWN0aW9uID0gaW5zdC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKGlzRXF1YWwoY3VycmVudFNlbGVjdGlvbiwgX25leHRTZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gY3VycmVudFNlbGVjdGlvbjtcbiAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRTZWxlY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBfbmV4dFNlbGVjdGlvbjtcbiAgICAgICAgcmV0dXJuIF9uZXh0U2VsZWN0aW9uO1xuICAgICAgfSAvLyBXZSBtYXkgYmUgYWJsZSB0byByZXVzZSB0aGUgcHJldmlvdXMgaW52b2NhdGlvbidzIHJlc3VsdC5cblxuXG4gICAgICAvLyBXZSBtYXkgYmUgYWJsZSB0byByZXVzZSB0aGUgcHJldmlvdXMgaW52b2NhdGlvbidzIHJlc3VsdC5cbiAgICAgIHZhciBwcmV2U25hcHNob3QgPSBtZW1vaXplZFNuYXBzaG90O1xuICAgICAgdmFyIHByZXZTZWxlY3Rpb24gPSBtZW1vaXplZFNlbGVjdGlvbjtcblxuICAgICAgaWYgKG9iamVjdElzKHByZXZTbmFwc2hvdCwgbmV4dFNuYXBzaG90KSkge1xuICAgICAgICAvLyBUaGUgc25hcHNob3QgaXMgdGhlIHNhbWUgYXMgbGFzdCB0aW1lLiBSZXVzZSB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLlxuICAgICAgICByZXR1cm4gcHJldlNlbGVjdGlvbjtcbiAgICAgIH0gLy8gVGhlIHNuYXBzaG90IGhhcyBjaGFuZ2VkLCBzbyB3ZSBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgc2VsZWN0aW9uLlxuXG5cbiAgICAgIC8vIFRoZSBzbmFwc2hvdCBoYXMgY2hhbmdlZCwgc28gd2UgbmVlZCB0byBjb21wdXRlIGEgbmV3IHNlbGVjdGlvbi5cbiAgICAgIHZhciBuZXh0U2VsZWN0aW9uID0gc2VsZWN0b3IobmV4dFNuYXBzaG90KTsgLy8gSWYgYSBjdXN0b20gaXNFcXVhbCBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdXNlIHRoYXQgdG8gY2hlY2sgaWYgdGhlIGRhdGFcbiAgICAgIC8vIGhhcyBjaGFuZ2VkLiBJZiBpdCBoYXNuJ3QsIHJldHVybiB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLiBUaGF0IHNpZ25hbHNcbiAgICAgIC8vIHRvIFJlYWN0IHRoYXQgdGhlIHNlbGVjdGlvbnMgYXJlIGNvbmNlcHR1YWxseSBlcXVhbCwgYW5kIHdlIGNhbiBiYWlsXG4gICAgICAvLyBvdXQgb2YgcmVuZGVyaW5nLlxuXG4gICAgICAvLyBJZiBhIGN1c3RvbSBpc0VxdWFsIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB1c2UgdGhhdCB0byBjaGVjayBpZiB0aGUgZGF0YVxuICAgICAgLy8gaGFzIGNoYW5nZWQuIElmIGl0IGhhc24ndCwgcmV0dXJuIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uIFRoYXQgc2lnbmFsc1xuICAgICAgLy8gdG8gUmVhY3QgdGhhdCB0aGUgc2VsZWN0aW9ucyBhcmUgY29uY2VwdHVhbGx5IGVxdWFsLCBhbmQgd2UgY2FuIGJhaWxcbiAgICAgIC8vIG91dCBvZiByZW5kZXJpbmcuXG4gICAgICBpZiAoaXNFcXVhbCAhPT0gdW5kZWZpbmVkICYmIGlzRXF1YWwocHJldlNlbGVjdGlvbiwgbmV4dFNlbGVjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHByZXZTZWxlY3Rpb247XG4gICAgICB9XG5cbiAgICAgIG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG4gICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IG5leHRTZWxlY3Rpb247XG4gICAgICByZXR1cm4gbmV4dFNlbGVjdGlvbjtcbiAgICB9OyAvLyBBc3NpZ25pbmcgdGhpcyB0byBhIGNvbnN0YW50IHNvIHRoYXQgRmxvdyBrbm93cyBpdCBjYW4ndCBjaGFuZ2UuXG5cblxuICAgIC8vIEFzc2lnbmluZyB0aGlzIHRvIGEgY29uc3RhbnQgc28gdGhhdCBGbG93IGtub3dzIGl0IGNhbid0IGNoYW5nZS5cbiAgICB2YXIgbWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCA9IGdldFNlcnZlclNuYXBzaG90ID09PSB1bmRlZmluZWQgPyBudWxsIDogZ2V0U2VydmVyU25hcHNob3Q7XG5cbiAgICB2YXIgZ2V0U25hcHNob3RXaXRoU2VsZWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihnZXRTbmFwc2hvdCgpKTtcbiAgICB9O1xuXG4gICAgdmFyIGdldFNlcnZlclNuYXBzaG90V2l0aFNlbGVjdG9yID0gbWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZW1vaXplZFNlbGVjdG9yKG1heWJlR2V0U2VydmVyU25hcHNob3QoKSk7XG4gICAgfTtcbiAgICByZXR1cm4gW2dldFNuYXBzaG90V2l0aFNlbGVjdG9yLCBnZXRTZXJ2ZXJTbmFwc2hvdFdpdGhTZWxlY3Rvcl07XG4gIH0sIFtnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QsIHNlbGVjdG9yLCBpc0VxdWFsXSksXG4gICAgICBnZXRTZWxlY3Rpb24gPSBfdXNlTWVtb1swXSxcbiAgICAgIGdldFNlcnZlclNlbGVjdGlvbiA9IF91c2VNZW1vWzFdO1xuXG4gIHZhciB2YWx1ZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U2VsZWN0aW9uLCBnZXRTZXJ2ZXJTZWxlY3Rpb24pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGluc3QuaGFzVmFsdWUgPSB0cnVlO1xuICAgIGluc3QudmFsdWUgPSB2YWx1ZTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHVzZURlYnVnVmFsdWUodmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjtcbiAgICAgICAgICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgIFxuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiZnVuY3Rpb24gcihlKXt2YXIgdCxmLG49XCJcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGUpbis9ZTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKWlmKEFycmF5LmlzQXJyYXkoZSkpe3ZhciBvPWUubGVuZ3RoO2Zvcih0PTA7dDxvO3QrKyllW3RdJiYoZj1yKGVbdF0pKSYmKG4mJihuKz1cIiBcIiksbis9Zil9ZWxzZSBmb3IoZiBpbiBlKWVbZl0mJihuJiYobis9XCIgXCIpLG4rPWYpO3JldHVybiBufWV4cG9ydCBmdW5jdGlvbiBjbHN4KCl7Zm9yKHZhciBlLHQsZj0wLG49XCJcIixvPWFyZ3VtZW50cy5sZW5ndGg7ZjxvO2YrKykoZT1hcmd1bWVudHNbZl0pJiYodD1yKGUpKSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGRlZmF1bHQgY2xzeDsiLCIvLyBzcmMvaW5kZXgudHNcbmltcG9ydCAqIGFzIFJlYWN0MiBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yIGFzIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yMiB9IGZyb20gXCJ1c2Utc3luYy1leHRlcm5hbC1zdG9yZS93aXRoLXNlbGVjdG9yLmpzXCI7XG5cbi8vIHNyYy91dGlscy9yZWFjdC50c1xuaW1wb3J0ICogYXMgUmVhY3RPcmlnaW5hbCBmcm9tIFwicmVhY3RcIjtcbnZhciBSZWFjdCA9IChcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIC8vIEB0cy1pZ25vcmVcbiAgXCJkZWZhdWx0XCIgaW4gUmVhY3RPcmlnaW5hbCA/IFJlYWN0T3JpZ2luYWxbXCJkZWZhdWx0XCJdIDogUmVhY3RPcmlnaW5hbFxuKTtcblxuLy8gc3JjL2NvbXBvbmVudHMvQ29udGV4dC50c1xudmFyIENvbnRleHRLZXkgPSBTeW1ib2wuZm9yKGByZWFjdC1yZWR1eC1jb250ZXh0YCk7XG52YXIgZ1QgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiAoXG4gIC8qIGZhbGwgYmFjayB0byBhIHBlci1tb2R1bGUgc2NvcGUgKHByZS04LjEgYmVoYXZpb3VyKSBpZiBgZ2xvYmFsVGhpc2AgaXMgbm90IGF2YWlsYWJsZSAqL1xuICB7fVxuKTtcbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIGlmICghUmVhY3QuY3JlYXRlQ29udGV4dClcbiAgICByZXR1cm4ge307XG4gIGNvbnN0IGNvbnRleHRNYXAgPSBnVFtDb250ZXh0S2V5XSA/PyAoZ1RbQ29udGV4dEtleV0gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbiAgbGV0IHJlYWxDb250ZXh0ID0gY29udGV4dE1hcC5nZXQoUmVhY3QuY3JlYXRlQ29udGV4dCk7XG4gIGlmICghcmVhbENvbnRleHQpIHtcbiAgICByZWFsQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXG4gICAgICBudWxsXG4gICAgKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICByZWFsQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUmVhY3RSZWR1eFwiO1xuICAgIH1cbiAgICBjb250ZXh0TWFwLnNldChSZWFjdC5jcmVhdGVDb250ZXh0LCByZWFsQ29udGV4dCk7XG4gIH1cbiAgcmV0dXJuIHJlYWxDb250ZXh0O1xufVxudmFyIFJlYWN0UmVkdXhDb250ZXh0ID0gLyogQF9fUFVSRV9fICovIGdldENvbnRleHQoKTtcblxuLy8gc3JjL3V0aWxzL3VzZVN5bmNFeHRlcm5hbFN0b3JlLnRzXG52YXIgbm90SW5pdGlhbGl6ZWQgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihcInVTRVMgbm90IGluaXRpYWxpemVkIVwiKTtcbn07XG5cbi8vIHNyYy9ob29rcy91c2VSZWR1eENvbnRleHQudHNcbmZ1bmN0aW9uIGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiB1c2VSZWR1eENvbnRleHQyKCkge1xuICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoY29udGV4dCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhY29udGV4dFZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiY291bGQgbm90IGZpbmQgcmVhY3QtcmVkdXggY29udGV4dCB2YWx1ZTsgcGxlYXNlIGVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHdyYXBwZWQgaW4gYSA8UHJvdmlkZXI+XCJcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0VmFsdWU7XG4gIH07XG59XG52YXIgdXNlUmVkdXhDb250ZXh0ID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soKTtcblxuLy8gc3JjL2hvb2tzL3VzZVNlbGVjdG9yLnRzXG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSBub3RJbml0aWFsaXplZDtcbnZhciBpbml0aWFsaXplVXNlU2VsZWN0b3IgPSAoZm4pID0+IHtcbiAgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSBmbjtcbn07XG52YXIgcmVmRXF1YWxpdHkgPSAoYSwgYikgPT4gYSA9PT0gYjtcbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9ySG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlUmVkdXhDb250ZXh0MiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlUmVkdXhDb250ZXh0IDogY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0KTtcbiAgY29uc3QgdXNlU2VsZWN0b3IyID0gKHNlbGVjdG9yLCBlcXVhbGl0eUZuT3JPcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB7IGVxdWFsaXR5Rm4gPSByZWZFcXVhbGl0eSwgZGV2TW9kZUNoZWNrcyA9IHt9IH0gPSB0eXBlb2YgZXF1YWxpdHlGbk9yT3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiID8geyBlcXVhbGl0eUZuOiBlcXVhbGl0eUZuT3JPcHRpb25zIH0gOiBlcXVhbGl0eUZuT3JPcHRpb25zO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYSBmdW5jdGlvbiBhcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yYCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGVxdWFsaXR5Rm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFlvdSBtdXN0IHBhc3MgYSBmdW5jdGlvbiBhcyBhbiBlcXVhbGl0eSBmdW5jdGlvbiB0byB1c2VTZWxlY3RvcmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZSxcbiAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrXG4gICAgfSA9IHVzZVJlZHV4Q29udGV4dDIoKTtcbiAgICBjb25zdCBmaXJzdFJ1biA9IFJlYWN0LnVzZVJlZih0cnVlKTtcbiAgICBjb25zdCB3cmFwcGVkU2VsZWN0b3IgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAgIHtcbiAgICAgICAgW3NlbGVjdG9yLm5hbWVdKHN0YXRlKSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RvcihzdGF0ZSk7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2s6IGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrLFxuICAgICAgICAgICAgICBzdGFiaWxpdHlDaGVjazogZmluYWxTdGFiaWxpdHlDaGVja1xuICAgICAgICAgICAgfSA9IHtcbiAgICAgICAgICAgICAgc3RhYmlsaXR5Q2hlY2ssXG4gICAgICAgICAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVjayxcbiAgICAgICAgICAgICAgLi4uZGV2TW9kZUNoZWNrc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChmaW5hbFN0YWJpbGl0eUNoZWNrID09PSBcImFsd2F5c1wiIHx8IGZpbmFsU3RhYmlsaXR5Q2hlY2sgPT09IFwib25jZVwiICYmIGZpcnN0UnVuLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgY29uc3QgdG9Db21wYXJlID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgICAgICAgICBpZiAoIWVxdWFsaXR5Rm4oc2VsZWN0ZWQsIHRvQ29tcGFyZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhY2sgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICh7IHN0YWNrIH0gPSBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgXCJTZWxlY3RvciBcIiArIChzZWxlY3Rvci5uYW1lIHx8IFwidW5rbm93blwiKSArIFwiIHJldHVybmVkIGEgZGlmZmVyZW50IHJlc3VsdCB3aGVuIGNhbGxlZCB3aXRoIHRoZSBzYW1lIHBhcmFtZXRlcnMuIFRoaXMgY2FuIGxlYWQgdG8gdW5uZWNlc3NhcnkgcmVyZW5kZXJzLlxcblNlbGVjdG9ycyB0aGF0IHJldHVybiBhIG5ldyByZWZlcmVuY2UgKHN1Y2ggYXMgYW4gb2JqZWN0IG9yIGFuIGFycmF5KSBzaG91bGQgYmUgbWVtb2l6ZWQ6IGh0dHBzOi8vcmVkdXguanMub3JnL3VzYWdlL2Rlcml2aW5nLWRhdGEtc2VsZWN0b3JzI29wdGltaXppbmctc2VsZWN0b3JzLXdpdGgtbWVtb2l6YXRpb25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDI6IHRvQ29tcGFyZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmluYWxJZGVudGl0eUZ1bmN0aW9uQ2hlY2sgPT09IFwiYWx3YXlzXCIgfHwgZmluYWxJZGVudGl0eUZ1bmN0aW9uQ2hlY2sgPT09IFwib25jZVwiICYmIGZpcnN0UnVuLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSBzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFjayA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgKHsgc3RhY2sgfSA9IGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICBcIlNlbGVjdG9yIFwiICsgKHNlbGVjdG9yLm5hbWUgfHwgXCJ1bmtub3duXCIpICsgXCIgcmV0dXJuZWQgdGhlIHJvb3Qgc3RhdGUgd2hlbiBjYWxsZWQuIFRoaXMgY2FuIGxlYWQgdG8gdW5uZWNlc3NhcnkgcmVyZW5kZXJzLlxcblNlbGVjdG9ycyB0aGF0IHJldHVybiB0aGUgZW50aXJlIHN0YXRlIGFyZSBhbG1vc3QgY2VydGFpbmx5IGEgbWlzdGFrZSwgYXMgdGhleSB3aWxsIGNhdXNlIGEgcmVyZW5kZXIgd2hlbmV2ZXIgKmFueXRoaW5nKiBpbiBzdGF0ZSBjaGFuZ2VzLlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGFjayB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpcnN0UnVuLmN1cnJlbnQpXG4gICAgICAgICAgICAgIGZpcnN0UnVuLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgICAgICB9XG4gICAgICB9W3NlbGVjdG9yLm5hbWVdLFxuICAgICAgW3NlbGVjdG9yLCBzdGFiaWxpdHlDaGVjaywgZGV2TW9kZUNoZWNrcy5zdGFiaWxpdHlDaGVja11cbiAgICApO1xuICAgIGNvbnN0IHNlbGVjdGVkU3RhdGUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihcbiAgICAgIHN1YnNjcmlwdGlvbi5hZGROZXN0ZWRTdWIsXG4gICAgICBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgIGdldFNlcnZlclN0YXRlIHx8IHN0b3JlLmdldFN0YXRlLFxuICAgICAgd3JhcHBlZFNlbGVjdG9yLFxuICAgICAgZXF1YWxpdHlGblxuICAgICk7XG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZShzZWxlY3RlZFN0YXRlKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRTdGF0ZTtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VTZWxlY3RvcjIsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHVzZVNlbGVjdG9yMlxuICB9KTtcbiAgcmV0dXJuIHVzZVNlbGVjdG9yMjtcbn1cbnZhciB1c2VTZWxlY3RvciA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTZWxlY3Rvckhvb2soKTtcblxuLy8gc3JjL3V0aWxzL3JlYWN0LWlzLnRzXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik7XG52YXIgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zZXJ2ZXJfY29udGV4dFwiKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Qub2Zmc2NyZWVuXCIpO1xudmFyIFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKFwicmVhY3QuY2xpZW50LnJlZmVyZW5jZVwiKTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIiAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICBjb25zdCAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRToge1xuICAgICAgICBjb25zdCB0eXBlID0gb2JqZWN0LnR5cGU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGNvbnN0ICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOiB7XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZvaWQgMDtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5cbi8vIHNyYy91dGlscy93YXJuaW5nLnRzXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIHRyeSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxuLy8gc3JjL2Nvbm5lY3QvdmVyaWZ5U3Vic2VsZWN0b3JzLnRzXG5mdW5jdGlvbiB2ZXJpZnkoc2VsZWN0b3IsIG1ldGhvZE5hbWUpIHtcbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCB2YWx1ZSBmb3IgJHttZXRob2ROYW1lfSBpbiBjb25uZWN0LmApO1xuICB9IGVsc2UgaWYgKG1ldGhvZE5hbWUgPT09IFwibWFwU3RhdGVUb1Byb3BzXCIgfHwgbWV0aG9kTmFtZSA9PT0gXCJtYXBEaXNwYXRjaFRvUHJvcHNcIikge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNlbGVjdG9yLCBcImRlcGVuZHNPbk93blByb3BzXCIpKSB7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICBgVGhlIHNlbGVjdG9yIGZvciAke21ldGhvZE5hbWV9IG9mIGNvbm5lY3QgZGlkIG5vdCBzcGVjaWZ5IGEgdmFsdWUgZm9yIGRlcGVuZHNPbk93blByb3BzLmBcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpIHtcbiAgdmVyaWZ5KG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIik7XG4gIHZlcmlmeShtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpO1xuICB2ZXJpZnkobWVyZ2VQcm9wcywgXCJtZXJnZVByb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9zZWxlY3RvckZhY3RvcnkudHNcbmZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwge1xuICBhcmVTdGF0ZXNFcXVhbCxcbiAgYXJlT3duUHJvcHNFcXVhbCxcbiAgYXJlU3RhdGVQcm9wc0VxdWFsXG59KSB7XG4gIGxldCBoYXNSdW5BdExlYXN0T25jZSA9IGZhbHNlO1xuICBsZXQgc3RhdGU7XG4gIGxldCBvd25Qcm9wcztcbiAgbGV0IHN0YXRlUHJvcHM7XG4gIGxldCBkaXNwYXRjaFByb3BzO1xuICBsZXQgbWVyZ2VkUHJvcHM7XG4gIGZ1bmN0aW9uIGhhbmRsZUZpcnN0Q2FsbChmaXJzdFN0YXRlLCBmaXJzdE93blByb3BzKSB7XG4gICAgc3RhdGUgPSBmaXJzdFN0YXRlO1xuICAgIG93blByb3BzID0gZmlyc3RPd25Qcm9wcztcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgaGFzUnVuQXRMZWFzdE9uY2UgPSB0cnVlO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCkge1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzKCkge1xuICAgIGlmIChtYXBTdGF0ZVRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdTdGF0ZSgpIHtcbiAgICBjb25zdCBuZXh0U3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlUHJvcHNDaGFuZ2VkID0gIWFyZVN0YXRlUHJvcHNFcXVhbChuZXh0U3RhdGVQcm9wcywgc3RhdGVQcm9wcyk7XG4gICAgc3RhdGVQcm9wcyA9IG5leHRTdGF0ZVByb3BzO1xuICAgIGlmIChzdGF0ZVByb3BzQ2hhbmdlZClcbiAgICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIGNvbnN0IHByb3BzQ2hhbmdlZCA9ICFhcmVPd25Qcm9wc0VxdWFsKG5leHRPd25Qcm9wcywgb3duUHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlQ2hhbmdlZCA9ICFhcmVTdGF0ZXNFcXVhbChcbiAgICAgIG5leHRTdGF0ZSxcbiAgICAgIHN0YXRlLFxuICAgICAgbmV4dE93blByb3BzLFxuICAgICAgb3duUHJvcHNcbiAgICApO1xuICAgIHN0YXRlID0gbmV4dFN0YXRlO1xuICAgIG93blByb3BzID0gbmV4dE93blByb3BzO1xuICAgIGlmIChwcm9wc0NoYW5nZWQgJiYgc3RhdGVDaGFuZ2VkKVxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKTtcbiAgICBpZiAocHJvcHNDaGFuZ2VkKVxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1Byb3BzKCk7XG4gICAgaWYgKHN0YXRlQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdTdGF0ZSgpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvcihuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIHJldHVybiBoYXNSdW5BdExlYXN0T25jZSA/IGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykgOiBoYW5kbGVGaXJzdENhbGwobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpO1xuICB9O1xufVxuZnVuY3Rpb24gZmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShkaXNwYXRjaCwge1xuICBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICBpbml0TWVyZ2VQcm9wcyxcbiAgLi4ub3B0aW9uc1xufSkge1xuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBpbml0TWFwU3RhdGVUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGNvbnN0IG1lcmdlUHJvcHMgPSBpbml0TWVyZ2VQcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpO1xuICB9XG4gIHJldHVybiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIG9wdGlvbnMpO1xufVxuXG4vLyBzcmMvdXRpbHMvYmluZEFjdGlvbkNyZWF0b3JzLnRzXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGNvbnN0IGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICBjb25zdCBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gKC4uLmFyZ3MpID0+IGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IoLi4uYXJncykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuLy8gc3JjL3V0aWxzL2lzUGxhaW5PYmplY3QudHNcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiIHx8IG9iaiA9PT0gbnVsbClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG4gIGlmIChwcm90byA9PT0gbnVsbClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgbGV0IGJhc2VQcm90byA9IHByb3RvO1xuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90bykgIT09IG51bGwpIHtcbiAgICBiYXNlUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKTtcbiAgfVxuICByZXR1cm4gcHJvdG8gPT09IGJhc2VQcm90bztcbn1cblxuLy8gc3JjL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LnRzXG5mdW5jdGlvbiB2ZXJpZnlQbGFpbk9iamVjdCh2YWx1ZSwgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm5pbmcoXG4gICAgICBgJHttZXRob2ROYW1lfSgpIGluICR7ZGlzcGxheU5hbWV9IG11c3QgcmV0dXJuIGEgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkIHJlY2VpdmVkICR7dmFsdWV9LmBcbiAgICApO1xuICB9XG59XG5cbi8vIHNyYy9jb25uZWN0L3dyYXBNYXBUb1Byb3BzLnRzXG5mdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGdldENvbnN0YW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0Q29uc3RhbnRTZWxlY3RvcihkaXNwYXRjaCkge1xuICAgIGNvbnN0IGNvbnN0YW50ID0gZ2V0Q29uc3RhbnQoZGlzcGF0Y2gpO1xuICAgIGZ1bmN0aW9uIGNvbnN0YW50U2VsZWN0b3IoKSB7XG4gICAgICByZXR1cm4gY29uc3RhbnQ7XG4gICAgfVxuICAgIGNvbnN0YW50U2VsZWN0b3IuZGVwZW5kc09uT3duUHJvcHMgPSBmYWxzZTtcbiAgICByZXR1cm4gY29uc3RhbnRTZWxlY3RvcjtcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMgPyBCb29sZWFuKG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIDogbWFwVG9Qcm9wcy5sZW5ndGggIT09IDE7XG59XG5mdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwVG9Qcm9wcywgbWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdFByb3h5U2VsZWN0b3IoZGlzcGF0Y2gsIHsgZGlzcGxheU5hbWUgfSkge1xuICAgIGNvbnN0IHByb3h5ID0gZnVuY3Rpb24gbWFwVG9Qcm9wc1Byb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHJldHVybiBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA/IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykgOiBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgdm9pZCAwKTtcbiAgICB9O1xuICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gdHJ1ZTtcbiAgICBwcm94eS5tYXBUb1Byb3BzID0gZnVuY3Rpb24gZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICBwcm94eS5tYXBUb1Byb3BzID0gbWFwVG9Qcm9wcztcbiAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcyk7XG4gICAgICBsZXQgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBwcm94eS5tYXBUb1Byb3BzID0gcHJvcHM7XG4gICAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMocHJvcHMpO1xuICAgICAgICBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgICAgfVxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgdmVyaWZ5UGxhaW5PYmplY3QocHJvcHMsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgIHJldHVybiBwcm9wcztcbiAgICB9O1xuICAgIHJldHVybiBwcm94eTtcbiAgfTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvaW52YWxpZEFyZ0ZhY3RvcnkudHNcbmZ1bmN0aW9uIGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KGFyZywgbmFtZSkge1xuICByZXR1cm4gKGRpc3BhdGNoLCBvcHRpb25zKSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgdmFsdWUgb2YgdHlwZSAke3R5cGVvZiBhcmd9IGZvciAke25hbWV9IGFyZ3VtZW50IHdoZW4gY29ubmVjdGluZyBjb21wb25lbnQgJHtvcHRpb25zLndyYXBwZWRDb21wb25lbnROYW1lfS5gXG4gICAgKTtcbiAgfTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvbWFwRGlzcGF0Y2hUb1Byb3BzLnRzXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gbWFwRGlzcGF0Y2hUb1Byb3BzICYmIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09IFwib2JqZWN0XCIgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KFxuICAgIChkaXNwYXRjaCkgPT4gKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgYmluZEFjdGlvbkNyZWF0b3JzKG1hcERpc3BhdGNoVG9Qcm9wcywgZGlzcGF0Y2gpXG4gICAgKVxuICApIDogIW1hcERpc3BhdGNoVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoKGRpc3BhdGNoKSA9PiAoe1xuICAgIGRpc3BhdGNoXG4gIH0pKSA6IHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd3JhcE1hcFRvUHJvcHNGdW5jKG1hcERpc3BhdGNoVG9Qcm9wcywgXCJtYXBEaXNwYXRjaFRvUHJvcHNcIilcbiAgKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcywgXCJtYXBEaXNwYXRjaFRvUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L21hcFN0YXRlVG9Qcm9wcy50c1xuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBTdGF0ZVRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KCgpID0+ICh7fSkpIDogdHlwZW9mIG1hcFN0YXRlVG9Qcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwU3RhdGVUb1Byb3BzLCBcIm1hcFN0YXRlVG9Qcm9wc1wiKVxuICApIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBcIm1hcFN0YXRlVG9Qcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvbWVyZ2VQcm9wcy50c1xuZnVuY3Rpb24gZGVmYXVsdE1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHsgLi4ub3duUHJvcHMsIC4uLnN0YXRlUHJvcHMsIC4uLmRpc3BhdGNoUHJvcHMgfTtcbn1cbmZ1bmN0aW9uIHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0TWVyZ2VQcm9wc1Byb3h5KGRpc3BhdGNoLCB7IGRpc3BsYXlOYW1lLCBhcmVNZXJnZWRQcm9wc0VxdWFsIH0pIHtcbiAgICBsZXQgaGFzUnVuT25jZSA9IGZhbHNlO1xuICAgIGxldCBtZXJnZWRQcm9wcztcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VQcm9wc1Byb3h5KHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gICAgICBjb25zdCBuZXh0TWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICAgIGlmIChoYXNSdW5PbmNlKSB7XG4gICAgICAgIGlmICghYXJlTWVyZ2VkUHJvcHNFcXVhbChuZXh0TWVyZ2VkUHJvcHMsIG1lcmdlZFByb3BzKSlcbiAgICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhc1J1bk9uY2UgPSB0cnVlO1xuICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICB2ZXJpZnlQbGFpbk9iamVjdChtZXJnZWRQcm9wcywgZGlzcGxheU5hbWUsIFwibWVyZ2VQcm9wc1wiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gbWVyZ2VQcm9wc0ZhY3RvcnkobWVyZ2VQcm9wcykge1xuICByZXR1cm4gIW1lcmdlUHJvcHMgPyAoKSA9PiBkZWZhdWx0TWVyZ2VQcm9wcyA6IHR5cGVvZiBtZXJnZVByb3BzID09PSBcImZ1bmN0aW9uXCIgPyB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtZXJnZVByb3BzLCBcIm1lcmdlUHJvcHNcIik7XG59XG5cbi8vIHNyYy91dGlscy9iYXRjaC50c1xuZnVuY3Rpb24gZGVmYXVsdE5vb3BCYXRjaChjYWxsYmFjaykge1xuICBjYWxsYmFjaygpO1xufVxuXG4vLyBzcmMvdXRpbHMvU3Vic2NyaXB0aW9uLnRzXG5mdW5jdGlvbiBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKSB7XG4gIGxldCBmaXJzdCA9IG51bGw7XG4gIGxldCBsYXN0ID0gbnVsbDtcbiAgcmV0dXJuIHtcbiAgICBjbGVhcigpIHtcbiAgICAgIGZpcnN0ID0gbnVsbDtcbiAgICAgIGxhc3QgPSBudWxsO1xuICAgIH0sXG4gICAgbm90aWZ5KCkge1xuICAgICAgZGVmYXVsdE5vb3BCYXRjaCgoKSA9PiB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IGZpcnN0O1xuICAgICAgICB3aGlsZSAobGlzdGVuZXIpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjaygpO1xuICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgIGxldCBsaXN0ZW5lciA9IGZpcnN0O1xuICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICB9LFxuICAgIHN1YnNjcmliZShjYWxsYmFjaykge1xuICAgICAgbGV0IGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGxhc3QgPSB7XG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICBwcmV2OiBsYXN0XG4gICAgICB9O1xuICAgICAgaWYgKGxpc3RlbmVyLnByZXYpIHtcbiAgICAgICAgbGlzdGVuZXIucHJldi5uZXh0ID0gbGlzdGVuZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXJzdCA9IGxpc3RlbmVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBpZiAoIWlzU3Vic2NyaWJlZCB8fCBmaXJzdCA9PT0gbnVsbClcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICBpZiAobGlzdGVuZXIubmV4dCkge1xuICAgICAgICAgIGxpc3RlbmVyLm5leHQucHJldiA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdCA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3RlbmVyLnByZXYpIHtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpcnN0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG52YXIgbnVsbExpc3RlbmVycyA9IHtcbiAgbm90aWZ5KCkge1xuICB9LFxuICBnZXQ6ICgpID0+IFtdXG59O1xuZnVuY3Rpb24gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlLCBwYXJlbnRTdWIpIHtcbiAgbGV0IHVuc3Vic2NyaWJlO1xuICBsZXQgbGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgbGV0IHN1YnNjcmlwdGlvbnNBbW91bnQgPSAwO1xuICBsZXQgc2VsZlN1YnNjcmliZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gYWRkTmVzdGVkU3ViKGxpc3RlbmVyKSB7XG4gICAgdHJ5U3Vic2NyaWJlKCk7XG4gICAgY29uc3QgY2xlYW51cExpc3RlbmVyID0gbGlzdGVuZXJzLnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgbGV0IHJlbW92ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKCFyZW1vdmVkKSB7XG4gICAgICAgIHJlbW92ZWQgPSB0cnVlO1xuICAgICAgICBjbGVhbnVwTGlzdGVuZXIoKTtcbiAgICAgICAgdHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG5vdGlmeU5lc3RlZFN1YnMoKSB7XG4gICAgbGlzdGVuZXJzLm5vdGlmeSgpO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVdyYXBwZXIoKSB7XG4gICAgaWYgKHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlKSB7XG4gICAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpc1N1YnNjcmliZWQoKSB7XG4gICAgcmV0dXJuIHNlbGZTdWJzY3JpYmVkO1xuICB9XG4gIGZ1bmN0aW9uIHRyeVN1YnNjcmliZSgpIHtcbiAgICBzdWJzY3JpcHRpb25zQW1vdW50Kys7XG4gICAgaWYgKCF1bnN1YnNjcmliZSkge1xuICAgICAgdW5zdWJzY3JpYmUgPSBwYXJlbnRTdWIgPyBwYXJlbnRTdWIuYWRkTmVzdGVkU3ViKGhhbmRsZUNoYW5nZVdyYXBwZXIpIDogc3RvcmUuc3Vic2NyaWJlKGhhbmRsZUNoYW5nZVdyYXBwZXIpO1xuICAgICAgbGlzdGVuZXJzID0gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlKCkge1xuICAgIHN1YnNjcmlwdGlvbnNBbW91bnQtLTtcbiAgICBpZiAodW5zdWJzY3JpYmUgJiYgc3Vic2NyaXB0aW9uc0Ftb3VudCA9PT0gMCkge1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgIHVuc3Vic2NyaWJlID0gdm9pZCAwO1xuICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICBsaXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlTdWJzY3JpYmVTZWxmKCkge1xuICAgIGlmICghc2VsZlN1YnNjcmliZWQpIHtcbiAgICAgIHNlbGZTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgIHRyeVN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZVNlbGYoKSB7XG4gICAgaWYgKHNlbGZTdWJzY3JpYmVkKSB7XG4gICAgICBzZWxmU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgdHJ5VW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc3Vic2NyaXB0aW9uID0ge1xuICAgIGFkZE5lc3RlZFN1YixcbiAgICBub3RpZnlOZXN0ZWRTdWJzLFxuICAgIGhhbmRsZUNoYW5nZVdyYXBwZXIsXG4gICAgaXNTdWJzY3JpYmVkLFxuICAgIHRyeVN1YnNjcmliZTogdHJ5U3Vic2NyaWJlU2VsZixcbiAgICB0cnlVbnN1YnNjcmliZTogdHJ5VW5zdWJzY3JpYmVTZWxmLFxuICAgIGdldExpc3RlbmVyczogKCkgPT4gbGlzdGVuZXJzXG4gIH07XG4gIHJldHVybiBzdWJzY3JpcHRpb247XG59XG5cbi8vIHNyYy91dGlscy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0LnRzXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIik7XG52YXIgaXNSZWFjdE5hdGl2ZSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIjtcbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gY2FuVXNlRE9NIHx8IGlzUmVhY3ROYXRpdmUgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG5cbi8vIHNyYy91dGlscy9zaGFsbG93RXF1YWwudHNcbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAoaXMob2JqQSwgb2JqQikpXG4gICAgcmV0dXJuIHRydWU7XG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gXCJvYmplY3RcIiB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgY29uc3Qga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gc3JjL3V0aWxzL2hvaXN0U3RhdGljcy50c1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJCR0eXBlb2Y6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJCR0eXBlb2Y6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7XG4gIFtGb3J3YXJkUmVmXTogRk9SV0FSRF9SRUZfU1RBVElDUyxcbiAgW01lbW9dOiBNRU1PX1NUQVRJQ1Ncbn07XG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICBpZiAoaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9XG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50W1wiJCR0eXBlb2ZcIl1dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICBjb25zdCBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgY29uc3Qgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG4vLyBzcmMvY29tcG9uZW50cy9jb25uZWN0LnRzeFxudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gbm90SW5pdGlhbGl6ZWQ7XG52YXIgaW5pdGlhbGl6ZUNvbm5lY3QgPSAoZm4pID0+IHtcbiAgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBmbjtcbn07XG52YXIgTk9fU1VCU0NSSVBUSU9OX0FSUkFZID0gW251bGwsIG51bGxdO1xudmFyIHN0cmluZ2lmeUNvbXBvbmVudCA9IChDb21wKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KENvbXApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nKENvbXApO1xuICB9XG59O1xuZnVuY3Rpb24gdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGVmZmVjdEZ1bmMsIGVmZmVjdEFyZ3MsIGRlcGVuZGVuY2llcykge1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IGVmZmVjdEZ1bmMoLi4uZWZmZWN0QXJncyksIGRlcGVuZGVuY2llcyk7XG59XG5mdW5jdGlvbiBjYXB0dXJlV3JhcHBlclByb3BzKGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgd3JhcHBlclByb3BzLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzKSB7XG4gIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCA9IHdyYXBwZXJQcm9wcztcbiAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IGZhbHNlO1xuICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50KSB7XG4gICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbnVsbDtcbiAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHN1YnNjcmliZVVwZGF0ZXMoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLCBzdG9yZSwgc3Vic2NyaXB0aW9uLCBjaGlsZFByb3BzU2VsZWN0b3IsIGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgaXNNb3VudGVkLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzLCBhZGRpdGlvbmFsU3Vic2NyaWJlTGlzdGVuZXIpIHtcbiAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICBsZXQgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgbGV0IGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gIGNvbnN0IGNoZWNrRm9yVXBkYXRlcyA9ICgpID0+IHtcbiAgICBpZiAoZGlkVW5zdWJzY3JpYmUgfHwgIWlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxhdGVzdFN0b3JlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIGxldCBuZXdDaGlsZFByb3BzLCBlcnJvcjtcbiAgICB0cnkge1xuICAgICAgbmV3Q2hpbGRQcm9wcyA9IGNoaWxkUHJvcHNTZWxlY3RvcihcbiAgICAgICAgbGF0ZXN0U3RvcmVTdGF0ZSxcbiAgICAgICAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50XG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yID0gZTtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IGU7XG4gICAgfVxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gICAgfVxuICAgIGlmIChuZXdDaGlsZFByb3BzID09PSBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50KSB7XG4gICAgICBpZiAoIXJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQpIHtcbiAgICAgICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICByZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGFkZGl0aW9uYWxTdWJzY3JpYmVMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcbiAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBjaGVja0ZvclVwZGF0ZXM7XG4gIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgY2hlY2tGb3JVcGRhdGVzKCk7XG4gIGNvbnN0IHVuc3Vic2NyaWJlV3JhcHBlciA9ICgpID0+IHtcbiAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBudWxsO1xuICAgIGlmIChsYXN0VGhyb3duRXJyb3IpIHtcbiAgICAgIHRocm93IGxhc3RUaHJvd25FcnJvcjtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1bnN1YnNjcmliZVdyYXBwZXI7XG59XG5mdW5jdGlvbiBzdHJpY3RFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufVxudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24gPSBmYWxzZTtcbmZ1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIHtcbiAgLy8gVGhlIGBwdXJlYCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZCwgc28gVFMgZG9lc24ndCBsaWtlIHVzIGRlc3RydWN0dXJpbmcgdGhpcyB0byBjaGVjayBpdHMgZXhpc3RlbmNlLlxuICAvLyBAdHMtaWdub3JlXG4gIHB1cmUsXG4gIGFyZVN0YXRlc0VxdWFsID0gc3RyaWN0RXF1YWwsXG4gIGFyZU93blByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIGFyZVN0YXRlUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgLy8gdXNlIFJlYWN0J3MgZm9yd2FyZFJlZiB0byBleHBvc2UgYSByZWYgb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50XG4gIGZvcndhcmRSZWYgPSBmYWxzZSxcbiAgLy8gdGhlIGNvbnRleHQgY29uc3VtZXIgdG8gdXNlXG4gIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dFxufSA9IHt9KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAocHVyZSAhPT0gdm9pZCAwICYmICFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgICdUaGUgYHB1cmVgIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLiBgY29ubmVjdGAgaXMgbm93IGFsd2F5cyBhIFwicHVyZS9tZW1vaXplZFwiIGNvbXBvbmVudCdcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGNvbnN0IENvbnRleHQgPSBjb250ZXh0O1xuICBjb25zdCBpbml0TWFwU3RhdGVUb1Byb3BzID0gbWFwU3RhdGVUb1Byb3BzRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMpO1xuICBjb25zdCBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpO1xuICBjb25zdCBpbml0TWVyZ2VQcm9wcyA9IG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpO1xuICBjb25zdCBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMgPSBCb29sZWFuKG1hcFN0YXRlVG9Qcm9wcyk7XG4gIGNvbnN0IHdyYXBXaXRoQ29ubmVjdCA9IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc3QgaXNWYWxpZCA9IC8qIEBfX1BVUkVfXyAqLyBpc1ZhbGlkRWxlbWVudFR5cGUoV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICBpZiAoIWlzVmFsaWQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgWW91IG11c3QgcGFzcyBhIGNvbXBvbmVudCB0byB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgY29ubmVjdC4gSW5zdGVhZCByZWNlaXZlZCAke3N0cmluZ2lmeUNvbXBvbmVudChcbiAgICAgICAgICAgIFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgICApfWBcbiAgICAgICAgKTtcbiAgICB9XG4gICAgY29uc3Qgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCBcIkNvbXBvbmVudFwiO1xuICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gYENvbm5lY3QoJHt3cmFwcGVkQ29tcG9uZW50TmFtZX0pYDtcbiAgICBjb25zdCBzZWxlY3RvckZhY3RvcnlPcHRpb25zID0ge1xuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgZGlzcGxheU5hbWUsXG4gICAgICB3cmFwcGVkQ29tcG9uZW50TmFtZSxcbiAgICAgIFdyYXBwZWRDb21wb25lbnQsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIGluaXRNZXJnZVByb3BzLFxuICAgICAgYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbFxuICAgIH07XG4gICAgZnVuY3Rpb24gQ29ubmVjdEZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICBjb25zdCBbcHJvcHNDb250ZXh0LCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCB3cmFwcGVyUHJvcHNdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjogcmVhY3RSZWR1eEZvcndhcmRlZFJlZjIsIC4uLndyYXBwZXJQcm9wczIgfSA9IHByb3BzO1xuICAgICAgICByZXR1cm4gW3Byb3BzLmNvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYyLCB3cmFwcGVyUHJvcHMyXTtcbiAgICAgIH0sIFtwcm9wc10pO1xuICAgICAgY29uc3QgQ29udGV4dFRvVXNlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGxldCBSZXN1bHRDb250ZXh0ID0gQ29udGV4dDtcbiAgICAgICAgaWYgKHByb3BzQ29udGV4dD8uQ29uc3VtZXIpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gLyogQF9fUFVSRV9fICovIGlzQ29udGV4dENvbnN1bWVyKFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KHByb3BzQ29udGV4dC5Db25zdW1lciwgbnVsbClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIFwiWW91IG11c3QgcGFzcyBhIHZhbGlkIFJlYWN0IGNvbnRleHQgY29uc3VtZXIgYXMgYHByb3BzLmNvbnRleHRgXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlc3VsdENvbnRleHQgPSBwcm9wc0NvbnRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZXN1bHRDb250ZXh0O1xuICAgICAgfSwgW3Byb3BzQ29udGV4dCwgQ29udGV4dF0pO1xuICAgICAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0VG9Vc2UpO1xuICAgICAgY29uc3QgZGlkU3RvcmVDb21lRnJvbVByb3BzID0gQm9vbGVhbihwcm9wcy5zdG9yZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5nZXRTdGF0ZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5kaXNwYXRjaCk7XG4gICAgICBjb25zdCBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA9IEJvb2xlYW4oY29udGV4dFZhbHVlKSAmJiBCb29sZWFuKGNvbnRleHRWYWx1ZS5zdG9yZSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFkaWRTdG9yZUNvbWVGcm9tUHJvcHMgJiYgIWRpZFN0b3JlQ29tZUZyb21Db250ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ291bGQgbm90IGZpbmQgXCJzdG9yZVwiIGluIHRoZSBjb250ZXh0IG9mIFwiJHtkaXNwbGF5TmFtZX1cIi4gRWl0aGVyIHdyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGEgPFByb3ZpZGVyPiwgb3IgcGFzcyBhIGN1c3RvbSBSZWFjdCBjb250ZXh0IHByb3ZpZGVyIHRvIDxQcm92aWRlcj4gYW5kIHRoZSBjb3JyZXNwb25kaW5nIFJlYWN0IGNvbnRleHQgY29uc3VtZXIgdG8gJHtkaXNwbGF5TmFtZX0gaW4gY29ubmVjdCBvcHRpb25zLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0b3JlID0gZGlkU3RvcmVDb21lRnJvbVByb3BzID8gcHJvcHMuc3RvcmUgOiBjb250ZXh0VmFsdWUuc3RvcmU7XG4gICAgICBjb25zdCBnZXRTZXJ2ZXJTdGF0ZSA9IGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID8gY29udGV4dFZhbHVlLmdldFNlcnZlclN0YXRlIDogc3RvcmUuZ2V0U3RhdGU7XG4gICAgICBjb25zdCBjaGlsZFByb3BzU2VsZWN0b3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnkoc3RvcmUuZGlzcGF0Y2gsIHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMpO1xuICAgICAgfSwgW3N0b3JlXSk7XG4gICAgICBjb25zdCBbc3Vic2NyaXB0aW9uLCBub3RpZnlOZXN0ZWRTdWJzXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcylcbiAgICAgICAgICByZXR1cm4gTk9fU1VCU0NSSVBUSU9OX0FSUkFZO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24yID0gY3JlYXRlU3Vic2NyaXB0aW9uKFxuICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgIGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHZvaWQgMCA6IGNvbnRleHRWYWx1ZS5zdWJzY3JpcHRpb25cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgbm90aWZ5TmVzdGVkU3ViczIgPSBzdWJzY3JpcHRpb24yLm5vdGlmeU5lc3RlZFN1YnMuYmluZChzdWJzY3JpcHRpb24yKTtcbiAgICAgICAgcmV0dXJuIFtzdWJzY3JpcHRpb24yLCBub3RpZnlOZXN0ZWRTdWJzMl07XG4gICAgICB9LCBbc3RvcmUsIGRpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlXSk7XG4gICAgICBjb25zdCBvdmVycmlkZGVuQ29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChkaWRTdG9yZUNvbWVGcm9tUHJvcHMpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uY29udGV4dFZhbHVlLFxuICAgICAgICAgIHN1YnNjcmlwdGlvblxuICAgICAgICB9O1xuICAgICAgfSwgW2RpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlLCBzdWJzY3JpcHRpb25dKTtcbiAgICAgIGNvbnN0IGxhc3RDaGlsZFByb3BzID0gUmVhY3QudXNlUmVmKHZvaWQgMCk7XG4gICAgICBjb25zdCBsYXN0V3JhcHBlclByb3BzID0gUmVhY3QudXNlUmVmKHdyYXBwZXJQcm9wcyk7XG4gICAgICBjb25zdCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlID0gUmVhY3QudXNlUmVmKHZvaWQgMCk7XG4gICAgICBjb25zdCByZW5kZXJJc1NjaGVkdWxlZCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgICBjb25zdCBpc01vdW50ZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgICAgY29uc3QgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvciA9IFJlYWN0LnVzZVJlZihcbiAgICAgICAgdm9pZCAwXG4gICAgICApO1xuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgfSwgW10pO1xuICAgICAgY29uc3QgYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgJiYgd3JhcHBlclByb3BzID09PSBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaGlsZFByb3BzU2VsZWN0b3Ioc3RvcmUuZ2V0U3RhdGUoKSwgd3JhcHBlclByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgfSwgW3N0b3JlLCB3cmFwcGVyUHJvcHNdKTtcbiAgICAgIGNvbnN0IHN1YnNjcmliZUZvclJlYWN0ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZSA9IChyZWFjdExpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlVXBkYXRlcyhcbiAgICAgICAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2hpbGRQcm9wc1NlbGVjdG9yLFxuICAgICAgICAgICAgbGFzdFdyYXBwZXJQcm9wcyxcbiAgICAgICAgICAgIGxhc3RDaGlsZFByb3BzLFxuICAgICAgICAgICAgcmVuZGVySXNTY2hlZHVsZWQsXG4gICAgICAgICAgICBpc01vdW50ZWQsXG4gICAgICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLFxuICAgICAgICAgICAgbm90aWZ5TmVzdGVkU3VicyxcbiAgICAgICAgICAgIHJlYWN0TGlzdGVuZXJcbiAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlO1xuICAgICAgfSwgW3N1YnNjcmlwdGlvbl0pO1xuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGNhcHR1cmVXcmFwcGVyUHJvcHMsIFtcbiAgICAgICAgbGFzdFdyYXBwZXJQcm9wcyxcbiAgICAgICAgbGFzdENoaWxkUHJvcHMsXG4gICAgICAgIHJlbmRlcklzU2NoZWR1bGVkLFxuICAgICAgICB3cmFwcGVyUHJvcHMsXG4gICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsXG4gICAgICAgIG5vdGlmeU5lc3RlZFN1YnNcbiAgICAgIF0pO1xuICAgICAgbGV0IGFjdHVhbENoaWxkUHJvcHM7XG4gICAgICB0cnkge1xuICAgICAgICBhY3R1YWxDaGlsZFByb3BzID0gdXNlU3luY0V4dGVybmFsU3RvcmUoXG4gICAgICAgICAgLy8gVE9ETyBXZSdyZSBwYXNzaW5nIHRocm91Z2ggYSBiaWcgd3JhcHBlciB0aGF0IGRvZXMgYSBidW5jaCBvZiBleHRyYSBzaWRlIGVmZmVjdHMgYmVzaWRlcyBzdWJzY3JpYmluZ1xuICAgICAgICAgIHN1YnNjcmliZUZvclJlYWN0LFxuICAgICAgICAgIC8vIFRPRE8gVGhpcyBpcyBpbmNyZWRpYmx5IGhhY2t5LiBXZSd2ZSBhbHJlYWR5IHByb2Nlc3NlZCB0aGUgc3RvcmUgdXBkYXRlIGFuZCBjYWxjdWxhdGVkIG5ldyBjaGlsZCBwcm9wcyxcbiAgICAgICAgICAvLyBUT0RPIGFuZCB3ZSdyZSBqdXN0IHBhc3NpbmcgdGhhdCB0aHJvdWdoIHNvIGl0IHRyaWdnZXJzIGEgcmUtcmVuZGVyIGZvciB1cyByYXRoZXIgdGhhbiByZWx5aW5nIG9uIGB1U0VTYC5cbiAgICAgICAgICBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3IsXG4gICAgICAgICAgZ2V0U2VydmVyU3RhdGUgPyAoKSA9PiBjaGlsZFByb3BzU2VsZWN0b3IoZ2V0U2VydmVyU3RhdGUoKSwgd3JhcHBlclByb3BzKSA6IGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvclxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQpIHtcbiAgICAgICAgICA7XG4gICAgICAgICAgZXJyLm1lc3NhZ2UgKz0gYFxuVGhlIGVycm9yIG1heSBiZSBjb3JyZWxhdGVkIHdpdGggdGhpcyBwcmV2aW91cyBlcnJvcjpcbiR7bGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50LnN0YWNrfVxuXG5gO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQgPSB2b2lkIDA7XG4gICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IHZvaWQgMDtcbiAgICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IGFjdHVhbENoaWxkUHJvcHM7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFdyYXBwZWRDb21wb25lbnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLmFjdHVhbENoaWxkUHJvcHMsXG4gICAgICAgICAgICAgIHJlZjogcmVhY3RSZWR1eEZvcndhcmRlZFJlZlxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0sIFtyZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCBXcmFwcGVkQ29tcG9uZW50LCBhY3R1YWxDaGlsZFByb3BzXSk7XG4gICAgICBjb25zdCByZW5kZXJlZENoaWxkID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHtcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dFRvVXNlLlByb3ZpZGVyLCB7IHZhbHVlOiBvdmVycmlkZGVuQ29udGV4dFZhbHVlIH0sIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIH0sIFtDb250ZXh0VG9Vc2UsIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCwgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZV0pO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGQ7XG4gICAgfVxuICAgIGNvbnN0IF9Db25uZWN0ID0gUmVhY3QubWVtbyhDb25uZWN0RnVuY3Rpb24pO1xuICAgIGNvbnN0IENvbm5lY3QgPSBfQ29ubmVjdDtcbiAgICBDb25uZWN0LldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgIENvbm5lY3QuZGlzcGxheU5hbWUgPSBDb25uZWN0RnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICBpZiAoZm9yd2FyZFJlZikge1xuICAgICAgY29uc3QgX2ZvcndhcmRlZCA9IFJlYWN0LmZvcndhcmRSZWYoXG4gICAgICAgIGZ1bmN0aW9uIGZvcndhcmRDb25uZWN0UmVmKHByb3BzLCByZWYpIHtcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29ubmVjdCwgeyAuLi5wcm9wcywgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjogcmVmIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc3QgZm9yd2FyZGVkID0gX2ZvcndhcmRlZDtcbiAgICAgIGZvcndhcmRlZC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgICAgZm9yd2FyZGVkLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBob2lzdE5vblJlYWN0U3RhdGljcyhmb3J3YXJkZWQsIFdyYXBwZWRDb21wb25lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKENvbm5lY3QsIFdyYXBwZWRDb21wb25lbnQpO1xuICB9O1xuICByZXR1cm4gd3JhcFdpdGhDb25uZWN0O1xufVxudmFyIGNvbm5lY3RfZGVmYXVsdCA9IGNvbm5lY3Q7XG5cbi8vIHNyYy9jb21wb25lbnRzL1Byb3ZpZGVyLnRzeFxuZnVuY3Rpb24gUHJvdmlkZXIoe1xuICBzdG9yZSxcbiAgY29udGV4dCxcbiAgY2hpbGRyZW4sXG4gIHNlcnZlclN0YXRlLFxuICBzdGFiaWxpdHlDaGVjayA9IFwib25jZVwiLFxuICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2sgPSBcIm9uY2VcIlxufSkge1xuICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBjcmVhdGVTdWJzY3JpcHRpb24oc3RvcmUpO1xuICAgIHJldHVybiB7XG4gICAgICBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGdldFNlcnZlclN0YXRlOiBzZXJ2ZXJTdGF0ZSA/ICgpID0+IHNlcnZlclN0YXRlIDogdm9pZCAwLFxuICAgICAgc3RhYmlsaXR5Q2hlY2ssXG4gICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2tcbiAgICB9O1xuICB9LCBbc3RvcmUsIHNlcnZlclN0YXRlLCBzdGFiaWxpdHlDaGVjaywgaWRlbnRpdHlGdW5jdGlvbkNoZWNrXSk7XG4gIGNvbnN0IHByZXZpb3VzU3RhdGUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHN0b3JlLmdldFN0YXRlKCksIFtzdG9yZV0pO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IHN1YnNjcmlwdGlvbiB9ID0gY29udGV4dFZhbHVlO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnM7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBzdG9yZS5nZXRTdGF0ZSgpKSB7XG4gICAgICBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicygpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IHZvaWQgMDtcbiAgICB9O1xuICB9LCBbY29udGV4dFZhbHVlLCBwcmV2aW91c1N0YXRlXSk7XG4gIGNvbnN0IENvbnRleHQgPSBjb250ZXh0IHx8IFJlYWN0UmVkdXhDb250ZXh0O1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dFZhbHVlIH0sIGNoaWxkcmVuKTtcbn1cbnZhciBQcm92aWRlcl9kZWZhdWx0ID0gUHJvdmlkZXI7XG5cbi8vIHNyYy9ob29rcy91c2VTdG9yZS50c1xuZnVuY3Rpb24gY3JlYXRlU3RvcmVIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICBjb25zdCB1c2VSZWR1eENvbnRleHQyID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VSZWR1eENvbnRleHQgOiAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dClcbiAgKTtcbiAgY29uc3QgdXNlU3RvcmUyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHVzZVJlZHV4Q29udGV4dDIoKTtcbiAgICByZXR1cm4gc3RvcmU7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlU3RvcmUyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VTdG9yZTJcbiAgfSk7XG4gIHJldHVybiB1c2VTdG9yZTI7XG59XG52YXIgdXNlU3RvcmUgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlU3RvcmVIb29rKCk7XG5cbi8vIHNyYy9ob29rcy91c2VEaXNwYXRjaC50c1xuZnVuY3Rpb24gY3JlYXRlRGlzcGF0Y2hIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICBjb25zdCB1c2VTdG9yZTIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVN0b3JlIDogY3JlYXRlU3RvcmVIb29rKGNvbnRleHQpO1xuICBjb25zdCB1c2VEaXNwYXRjaDIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZTIoKTtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2g7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlRGlzcGF0Y2gyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VEaXNwYXRjaDJcbiAgfSk7XG4gIHJldHVybiB1c2VEaXNwYXRjaDI7XG59XG52YXIgdXNlRGlzcGF0Y2ggPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlRGlzcGF0Y2hIb29rKCk7XG5cbi8vIHNyYy9leHBvcnRzLnRzXG52YXIgYmF0Y2ggPSBkZWZhdWx0Tm9vcEJhdGNoO1xuXG4vLyBzcmMvaW5kZXgudHNcbmluaXRpYWxpemVVc2VTZWxlY3Rvcih1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjIpO1xuaW5pdGlhbGl6ZUNvbm5lY3QoUmVhY3QyLnVzZVN5bmNFeHRlcm5hbFN0b3JlKTtcbmV4cG9ydCB7XG4gIFByb3ZpZGVyX2RlZmF1bHQgYXMgUHJvdmlkZXIsXG4gIFJlYWN0UmVkdXhDb250ZXh0LFxuICBiYXRjaCxcbiAgY29ubmVjdF9kZWZhdWx0IGFzIGNvbm5lY3QsXG4gIGNyZWF0ZURpc3BhdGNoSG9vayxcbiAgY3JlYXRlU2VsZWN0b3JIb29rLFxuICBjcmVhdGVTdG9yZUhvb2ssXG4gIHNoYWxsb3dFcXVhbCxcbiAgdXNlRGlzcGF0Y2gsXG4gIHVzZVNlbGVjdG9yLFxuICB1c2VTdG9yZVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LXJlZHV4Lm1qcy5tYXAiLCJcInVzZSBjbGllbnRcIjtcbmZ1bmN0aW9uIE10KHQpe2lmKCF0fHx0eXBlb2YgZG9jdW1lbnQ9PVwidW5kZWZpbmVkXCIpcmV0dXJuO2xldCBvPWRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtlLnR5cGU9XCJ0ZXh0L2Nzc1wiLG8uZmlyc3RDaGlsZD9vLmluc2VydEJlZm9yZShlLG8uZmlyc3RDaGlsZCk6by5hcHBlbmRDaGlsZChlKSxlLnN0eWxlU2hlZXQ/ZS5zdHlsZVNoZWV0LmNzc1RleHQ9dDplLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpKX1NdChgOnJvb3R7LS10b2FzdGlmeS1jb2xvci1saWdodDogI2ZmZjstLXRvYXN0aWZ5LWNvbG9yLWRhcms6ICMxMjEyMTI7LS10b2FzdGlmeS1jb2xvci1pbmZvOiAjMzQ5OGRiOy0tdG9hc3RpZnktY29sb3Itc3VjY2VzczogIzA3YmMwYzstLXRvYXN0aWZ5LWNvbG9yLXdhcm5pbmc6ICNmMWM0MGY7LS10b2FzdGlmeS1jb2xvci1lcnJvcjogaHNsKDYsIDc4JSwgNTclKTstLXRvYXN0aWZ5LWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KTstLXRvYXN0aWZ5LWljb24tY29sb3ItaW5mbzogdmFyKC0tdG9hc3RpZnktY29sb3ItaW5mbyk7LS10b2FzdGlmeS1pY29uLWNvbG9yLXN1Y2Nlc3M6IHZhcigtLXRvYXN0aWZ5LWNvbG9yLXN1Y2Nlc3MpOy0tdG9hc3RpZnktaWNvbi1jb2xvci13YXJuaW5nOiB2YXIoLS10b2FzdGlmeS1jb2xvci13YXJuaW5nKTstLXRvYXN0aWZ5LWljb24tY29sb3ItZXJyb3I6IHZhcigtLXRvYXN0aWZ5LWNvbG9yLWVycm9yKTstLXRvYXN0aWZ5LWNvbnRhaW5lci13aWR0aDogZml0LWNvbnRlbnQ7LS10b2FzdGlmeS10b2FzdC13aWR0aDogMzIwcHg7LS10b2FzdGlmeS10b2FzdC1vZmZzZXQ6IDE2cHg7LS10b2FzdGlmeS10b2FzdC10b3A6IG1heCh2YXIoLS10b2FzdGlmeS10b2FzdC1vZmZzZXQpLCBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpOy0tdG9hc3RpZnktdG9hc3QtcmlnaHQ6IG1heCh2YXIoLS10b2FzdGlmeS10b2FzdC1vZmZzZXQpLCBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSk7LS10b2FzdGlmeS10b2FzdC1sZWZ0OiBtYXgodmFyKC0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0KSwgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7LS10b2FzdGlmeS10b2FzdC1ib3R0b206IG1heCh2YXIoLS10b2FzdGlmeS10b2FzdC1vZmZzZXQpLCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpOy0tdG9hc3RpZnktdG9hc3QtYmFja2dyb3VuZDogI2ZmZjstLXRvYXN0aWZ5LXRvYXN0LXBhZGRpbmc6IDE0cHg7LS10b2FzdGlmeS10b2FzdC1taW4taGVpZ2h0OiA2NHB4Oy0tdG9hc3RpZnktdG9hc3QtbWF4LWhlaWdodDogODAwcHg7LS10b2FzdGlmeS10b2FzdC1iZC1yYWRpdXM6IDZweDstLXRvYXN0aWZ5LXRvYXN0LXNoYWRvdzogMHB4IDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgLjEpOy0tdG9hc3RpZnktZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7LS10b2FzdGlmeS16LWluZGV4OiA5OTk5Oy0tdG9hc3RpZnktdGV4dC1jb2xvci1saWdodDogIzc1NzU3NTstLXRvYXN0aWZ5LXRleHQtY29sb3ItZGFyazogI2ZmZjstLXRvYXN0aWZ5LXRleHQtY29sb3ItaW5mbzogI2ZmZjstLXRvYXN0aWZ5LXRleHQtY29sb3Itc3VjY2VzczogI2ZmZjstLXRvYXN0aWZ5LXRleHQtY29sb3Itd2FybmluZzogI2ZmZjstLXRvYXN0aWZ5LXRleHQtY29sb3ItZXJyb3I6ICNmZmY7LS10b2FzdGlmeS1zcGlubmVyLWNvbG9yOiAjNjE2MTYxOy0tdG9hc3RpZnktc3Bpbm5lci1jb2xvci1lbXB0eS1hcmVhOiAjZTBlMGUwOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtbGlnaHQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRjZDk2NCwgIzVhYzhmYSwgIzAwN2FmZiwgIzM0YWFkYywgIzU4NTZkNiwgI2ZmMmQ1NSk7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1kYXJrOiAjYmI4NmZjOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtaW5mbzogdmFyKC0tdG9hc3RpZnktY29sb3ItaW5mbyk7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1zdWNjZXNzOiB2YXIoLS10b2FzdGlmeS1jb2xvci1zdWNjZXNzKTstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLXdhcm5pbmc6IHZhcigtLXRvYXN0aWZ5LWNvbG9yLXdhcm5pbmcpOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtZXJyb3I6IHZhcigtLXRvYXN0aWZ5LWNvbG9yLWVycm9yKTstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWJnbzogLjJ9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXJ7ei1pbmRleDp2YXIoLS10b2FzdGlmeS16LWluZGV4KTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsdmFyKC0tdG9hc3RpZnktei1pbmRleCkpO3Bvc2l0aW9uOmZpeGVkO3dpZHRoOnZhcigtLXRvYXN0aWZ5LWNvbnRhaW5lci13aWR0aCk7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOiNmZmY7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLWxlZnR7dG9wOnZhcigtLXRvYXN0aWZ5LXRvYXN0LXRvcCk7bGVmdDp2YXIoLS10b2FzdGlmeS10b2FzdC1sZWZ0KX0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLWNlbnRlcnt0b3A6dmFyKC0tdG9hc3RpZnktdG9hc3QtdG9wKTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpO2FsaWduLWl0ZW1zOmNlbnRlcn0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLXJpZ2h0e3RvcDp2YXIoLS10b2FzdGlmeS10b2FzdC10b3ApO3JpZ2h0OnZhcigtLXRvYXN0aWZ5LXRvYXN0LXJpZ2h0KTthbGlnbi1pdGVtczplbmR9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1sZWZ0e2JvdHRvbTp2YXIoLS10b2FzdGlmeS10b2FzdC1ib3R0b20pO2xlZnQ6dmFyKC0tdG9hc3RpZnktdG9hc3QtbGVmdCl9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1jZW50ZXJ7Ym90dG9tOnZhcigtLXRvYXN0aWZ5LXRvYXN0LWJvdHRvbSk7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKTthbGlnbi1pdGVtczpjZW50ZXJ9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1yaWdodHtib3R0b206dmFyKC0tdG9hc3RpZnktdG9hc3QtYm90dG9tKTtyaWdodDp2YXIoLS10b2FzdGlmeS10b2FzdC1yaWdodCk7YWxpZ24taXRlbXM6ZW5kfS5Ub2FzdGlmeV9fdG9hc3R7LS15OiAwO3Bvc2l0aW9uOnJlbGF0aXZlO3RvdWNoLWFjdGlvbjpub25lO3dpZHRoOnZhcigtLXRvYXN0aWZ5LXRvYXN0LXdpZHRoKTttaW4taGVpZ2h0OnZhcigtLXRvYXN0aWZ5LXRvYXN0LW1pbi1oZWlnaHQpO2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW4tYm90dG9tOjFyZW07cGFkZGluZzp2YXIoLS10b2FzdGlmeS10b2FzdC1wYWRkaW5nKTtib3JkZXItcmFkaXVzOnZhcigtLXRvYXN0aWZ5LXRvYXN0LWJkLXJhZGl1cyk7Ym94LXNoYWRvdzp2YXIoLS10b2FzdGlmeS10b2FzdC1zaGFkb3cpO21heC1oZWlnaHQ6dmFyKC0tdG9hc3RpZnktdG9hc3QtbWF4LWhlaWdodCk7Zm9udC1mYW1pbHk6dmFyKC0tdG9hc3RpZnktZm9udC1mYW1pbHkpO3otaW5kZXg6MDtkaXNwbGF5OmZsZXg7ZmxleDoxIGF1dG87YWxpZ24taXRlbXM6Y2VudGVyO3dvcmQtYnJlYWs6YnJlYWstd29yZH1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lcnt3aWR0aDoxMDB2dztsZWZ0OmVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7bWFyZ2luOjB9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1sZWZ0LC5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS10b3AtY2VudGVyLC5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS10b3AtcmlnaHR7dG9wOmVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDApfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tbGVmdCwuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tYm90dG9tLWNlbnRlciwuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tYm90dG9tLXJpZ2h0e2JvdHRvbTplbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tcnRse3JpZ2h0OmVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO2xlZnQ6aW5pdGlhbH0uVG9hc3RpZnlfX3RvYXN0ey0tdG9hc3RpZnktdG9hc3Qtd2lkdGg6IDEwMCU7bWFyZ2luLWJvdHRvbTowO2JvcmRlci1yYWRpdXM6MH19LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXJbZGF0YS1zdGFja2VkPXRydWVde3dpZHRoOnZhcigtLXRvYXN0aWZ5LXRvYXN0LXdpZHRoKX0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2Vke3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCkgc2NhbGUodmFyKC0tcykpO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zc30uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtY29sbGFwc2VkXSAuVG9hc3RpZnlfX3RvYXN0LWJvZHksLlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLWNvbGxhcHNlZF0gLlRvYXN0aWZ5X19jbG9zZS1idXR0b257dHJhbnNpdGlvbjpvcGFjaXR5IC4xc30uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtY29sbGFwc2VkPWZhbHNlXXtvdmVyZmxvdzp2aXNpYmxlfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1jb2xsYXBzZWQ9dHJ1ZV06bm90KDpsYXN0LWNoaWxkKT4qe29wYWNpdHk6MH0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkOmFmdGVye2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDtoZWlnaHQ6Y2FsYyh2YXIoLS1nKSAqIDFweCk7Ym90dG9tOjEwMCV9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLXBvcz10b3Bde3RvcDowfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1wb3M9Ym90XXtib3R0b206MH0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtcG9zPWJvdF0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkOmJlZm9yZXt0cmFuc2Zvcm0tb3JpZ2luOnRvcH0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtcG9zPXRvcF0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkOmJlZm9yZXt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbX0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkOmJlZm9yZXtjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7aGVpZ2h0OjEwMCU7dHJhbnNmb3JtOnNjYWxlWSgzKTt6LWluZGV4Oi0xfS5Ub2FzdGlmeV9fdG9hc3QtLXJ0bHtkaXJlY3Rpb246cnRsfS5Ub2FzdGlmeV9fdG9hc3QtLWNsb3NlLW9uLWNsaWNre2N1cnNvcjpwb2ludGVyfS5Ub2FzdGlmeV9fdG9hc3QtaWNvbnttYXJnaW4taW5saW5lLWVuZDoxMHB4O3dpZHRoOjIycHg7ZmxleC1zaHJpbms6MDtkaXNwbGF5OmZsZXh9LlRvYXN0aWZ5LS1hbmltYXRle2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246LjVzfS5Ub2FzdGlmeS0tYW5pbWF0ZS1pY29ue2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246LjNzfS5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWRhcmt7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1kYXJrKTtjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLWRhcmspfS5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWxpZ2h0LC5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3RvYXN0LS1kZWZhdWx0e2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItbGlnaHQpO2NvbG9yOnZhcigtLXRvYXN0aWZ5LXRleHQtY29sb3ItbGlnaHQpfS5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3RvYXN0LS1pbmZve2NvbG9yOnZhcigtLXRvYXN0aWZ5LXRleHQtY29sb3ItaW5mbyk7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1pbmZvKX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0tc3VjY2Vzc3tjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLXN1Y2Nlc3MpO2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3Itc3VjY2Vzcyl9LlRvYXN0aWZ5X190b2FzdC10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fdG9hc3QtLXdhcm5pbmd7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci13YXJuaW5nKTtiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXdhcm5pbmcpfS5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3RvYXN0LS1lcnJvcntjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLWVycm9yKTtiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLWVycm9yKX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tbGlnaHR7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1saWdodCl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWRhcmt7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1kYXJrKX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0taW5mb3tiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWluZm8pfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1zdWNjZXNze2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3Mtc3VjY2Vzcyl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXdhcm5pbmd7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy13YXJuaW5nKX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tZXJyb3J7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1lcnJvcil9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0taW5mbywuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1zdWNjZXNzLC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXdhcm5pbmcsLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tZXJyb3J7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci10cmFuc3BhcmVudCl9LlRvYXN0aWZ5X19jbG9zZS1idXR0b257Y29sb3I6I2ZmZjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NnB4O3JpZ2h0OjZweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O291dGxpbmU6bm9uZTtib3JkZXI6bm9uZTtwYWRkaW5nOjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTouNzt0cmFuc2l0aW9uOi4zcyBlYXNlO3otaW5kZXg6MX0uVG9hc3RpZnlfX3RvYXN0LS1ydGwgLlRvYXN0aWZ5X19jbG9zZS1idXR0b257bGVmdDo2cHg7cmlnaHQ6dW5zZXR9LlRvYXN0aWZ5X19jbG9zZS1idXR0b24tLWxpZ2h0e2NvbG9yOiMwMDA7b3BhY2l0eTouM30uVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbj5zdmd7ZmlsbDpjdXJyZW50Q29sb3I7aGVpZ2h0OjE2cHg7d2lkdGg6MTRweH0uVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbjpob3ZlciwuVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbjpmb2N1c3tvcGFjaXR5OjF9QGtleWZyYW1lcyBUb2FzdGlmeV9fdHJhY2tQcm9ncmVzc3swJXt0cmFuc2Zvcm06c2NhbGVYKDEpfXRve3RyYW5zZm9ybTpzY2FsZVgoMCl9fS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFye3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtvcGFjaXR5Oi43O3RyYW5zZm9ybS1vcmlnaW46bGVmdH0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tYW5pbWF0ZWR7YW5pbWF0aW9uOlRvYXN0aWZ5X190cmFja1Byb2dyZXNzIGxpbmVhciAxIGZvcndhcmRzfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1jb250cm9sbGVke3RyYW5zaXRpb246dHJhbnNmb3JtIC4yc30uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tcnRse3JpZ2h0OjA7bGVmdDppbml0aWFsO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQ7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czppbml0aWFsfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13cnB7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6aGlkZGVuO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDo1cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS10b2FzdGlmeS10b2FzdC1iZC1yYWRpdXMpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLXRvYXN0aWZ5LXRvYXN0LWJkLXJhZGl1cyl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXdycFtkYXRhLWhpZGRlbj10cnVlXXtvcGFjaXR5OjB9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWJne29wYWNpdHk6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtYmdvKTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5Ub2FzdGlmeV9fc3Bpbm5lcnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MnB4IHNvbGlkO2JvcmRlci1yYWRpdXM6MTAwJTtib3JkZXItY29sb3I6dmFyKC0tdG9hc3RpZnktc3Bpbm5lci1jb2xvci1lbXB0eS1hcmVhKTtib3JkZXItcmlnaHQtY29sb3I6dmFyKC0tdG9hc3RpZnktc3Bpbm5lci1jb2xvcik7YW5pbWF0aW9uOlRvYXN0aWZ5X19zcGluIC42NXMgbGluZWFyIGluZmluaXRlfUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZUluUmlnaHR7MCUsNjAlLDc1JSw5MCUsdG97YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDMwMDBweCwwLDApfTYwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yNXB4LDAsMCl9NzUle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMHB4LDAsMCl9OTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXB4LDAsMCl9dG97dHJhbnNmb3JtOm5vbmV9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZU91dFJpZ2h0ezIwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMHB4LHZhcigtLXkpLDApfXRve29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VJbkxlZnR7MCUsNjAlLDc1JSw5MCUsdG97YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zMDAwcHgsMCwwKX02MCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyNXB4LDAsMCl9NzUle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTBweCwwLDApfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNXB4LDAsMCl9dG97dHJhbnNmb3JtOm5vbmV9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZU91dExlZnR7MjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjBweCx2YXIoLS15KSwwKX10b3tvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMDAwcHgsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZUluVXB7MCUsNjAlLDc1JSw5MCUsdG97YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMzAwMHB4LDApfTYwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwcHgsMCl9NzUle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCl9OTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01cHgsMCl9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZU91dFVwezIwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKHZhcigtLXkpIC0gMTBweCksMCl9NDAlLDQ1JXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYyh2YXIoLS15KSArIDIwcHgpLDApfXRve29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VJbkRvd257MCUsNjAlLDc1JSw5MCUsdG97YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwMDBweCwwKX02MCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDI1cHgsMCl9NzUle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1cHgsMCl9dG97dHJhbnNmb3JtOm5vbmV9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZU91dERvd257MjAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLGNhbGModmFyKC0teSkgLSAxMHB4KSwwKX00MCUsNDUle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKHZhcigtLXkpICsgMjBweCksMCl9dG97b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKX19LlRvYXN0aWZ5X19ib3VuY2UtZW50ZXItLXRvcC1sZWZ0LC5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS1ib3R0b20tbGVmdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlSW5MZWZ0fS5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS10b3AtcmlnaHQsLlRvYXN0aWZ5X19ib3VuY2UtZW50ZXItLWJvdHRvbS1yaWdodHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlSW5SaWdodH0uVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tdG9wLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlSW5Eb3dufS5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS1ib3R0b20tY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VJblVwfS5Ub2FzdGlmeV9fYm91bmNlLWV4aXQtLXRvcC1sZWZ0LC5Ub2FzdGlmeV9fYm91bmNlLWV4aXQtLWJvdHRvbS1sZWZ0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VPdXRMZWZ0fS5Ub2FzdGlmeV9fYm91bmNlLWV4aXQtLXRvcC1yaWdodCwuVG9hc3RpZnlfX2JvdW5jZS1leGl0LS1ib3R0b20tcmlnaHR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZU91dFJpZ2h0fS5Ub2FzdGlmeV9fYm91bmNlLWV4aXQtLXRvcC1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZU91dFVwfS5Ub2FzdGlmeV9fYm91bmNlLWV4aXQtLWJvdHRvbS1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZU91dERvd259QGtleWZyYW1lcyBUb2FzdGlmeV9fem9vbUluezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyl9NTAle29wYWNpdHk6MX19QGtleWZyYW1lcyBUb2FzdGlmeV9fem9vbU91dHswJXtvcGFjaXR5OjF9NTAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKSBzY2FsZTNkKC4zLC4zLC4zKX10b3tvcGFjaXR5OjB9fS5Ub2FzdGlmeV9fem9vbS1lbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fem9vbUlufS5Ub2FzdGlmeV9fem9vbS1leGl0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X196b29tT3V0fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2ZsaXBJbnswJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjtvcGFjaXR5OjB9NDAle3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn02MCV7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDEwZGVnKTtvcGFjaXR5OjF9ODAle3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtNWRlZyl9dG97dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KX19QGtleWZyYW1lcyBUb2FzdGlmeV9fZmxpcE91dHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKSBwZXJzcGVjdGl2ZSg0MDBweCl9MzAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApIHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0yMGRlZyk7b3BhY2l0eToxfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApIHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtvcGFjaXR5OjB9fS5Ub2FzdGlmeV9fZmxpcC1lbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fZmxpcElufS5Ub2FzdGlmeV9fZmxpcC1leGl0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19mbGlwT3V0fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlSW5SaWdodHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTEwJSwwLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVJbkxlZnR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMTAlLDAsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZUluVXB7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTEwJSwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlSW5Eb3duezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMTAlLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVPdXRSaWdodHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTEwJSx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVPdXRMZWZ0ezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfXRve3Zpc2liaWxpdHk6aGlkZGVuO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTEwJSx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVPdXREb3duezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfXRve3Zpc2liaWxpdHk6aGlkZGVuO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDUwMHB4LDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZU91dFVwezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfXRve3Zpc2liaWxpdHk6aGlkZGVuO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01MDBweCwwKX19LlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tdG9wLWxlZnQsLlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tYm90dG9tLWxlZnR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlSW5MZWZ0fS5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLXRvcC1yaWdodCwuVG9hc3RpZnlfX3NsaWRlLWVudGVyLS1ib3R0b20tcmlnaHR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlSW5SaWdodH0uVG9hc3RpZnlfX3NsaWRlLWVudGVyLS10b3AtY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZUluRG93bn0uVG9hc3RpZnlfX3NsaWRlLWVudGVyLS1ib3R0b20tY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZUluVXB9LlRvYXN0aWZ5X19zbGlkZS1leGl0LS10b3AtbGVmdCwuVG9hc3RpZnlfX3NsaWRlLWV4aXQtLWJvdHRvbS1sZWZ0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZU91dExlZnQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi1kdXJhdGlvbjouM3N9LlRvYXN0aWZ5X19zbGlkZS1leGl0LS10b3AtcmlnaHQsLlRvYXN0aWZ5X19zbGlkZS1leGl0LS1ib3R0b20tcmlnaHR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlT3V0UmlnaHQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi1kdXJhdGlvbjouM3N9LlRvYXN0aWZ5X19zbGlkZS1leGl0LS10b3AtY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZU91dFVwO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tZHVyYXRpb246LjNzfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tYm90dG9tLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVPdXREb3duO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tZHVyYXRpb246LjNzfUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NwaW57MCV7dHJhbnNmb3JtOnJvdGF0ZSgwKX10b3t0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fVxuYCk7aW1wb3J0e2lzVmFsaWRFbGVtZW50IGFzICR0fWZyb21cInJlYWN0XCI7dmFyIEw9dD0+dHlwZW9mIHQ9PVwibnVtYmVyXCImJiFpc05hTih0KSxOPXQ9PnR5cGVvZiB0PT1cInN0cmluZ1wiLFA9dD0+dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIixtdD10PT5OKHQpfHxMKHQpLEI9dD0+Tih0KXx8UCh0KT90Om51bGwscHQ9KHQsbyk9PnQ9PT0hMXx8TCh0KSYmdD4wP3Q6byx6PXQ9PiR0KHQpfHxOKHQpfHxQKHQpfHxMKHQpO2ltcG9ydCB1dCx7dXNlRWZmZWN0IGFzIFJ0LHVzZUxheW91dEVmZmVjdCBhcyBCdCx1c2VSZWYgYXMgenR9ZnJvbVwicmVhY3RcIjtmdW5jdGlvbiBaKHQsbyxlPTMwMCl7bGV0e3Njcm9sbEhlaWdodDpyLHN0eWxlOnN9PXQ7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57cy5taW5IZWlnaHQ9XCJpbml0aWFsXCIscy5oZWlnaHQ9citcInB4XCIscy50cmFuc2l0aW9uPWBhbGwgJHtlfW1zYCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PntzLmhlaWdodD1cIjBcIixzLnBhZGRpbmc9XCIwXCIscy5tYXJnaW49XCIwXCIsc2V0VGltZW91dChvLGUpfSl9KX1mdW5jdGlvbiAkKHtlbnRlcjp0LGV4aXQ6byxhcHBlbmRQb3NpdGlvbjplPSExLGNvbGxhcHNlOnI9ITAsY29sbGFwc2VEdXJhdGlvbjpzPTMwMH0pe3JldHVybiBmdW5jdGlvbih7Y2hpbGRyZW46YSxwb3NpdGlvbjpkLHByZXZlbnRFeGl0VHJhbnNpdGlvbjpjLGRvbmU6VCxub2RlUmVmOmcsaXNJbjp2LHBsYXlUb2FzdDp4fSl7bGV0IEM9ZT9gJHt0fS0tJHtkfWA6dCxTPWU/YCR7b30tLSR7ZH1gOm8sRT16dCgwKTtyZXR1cm4gQnQoKCk9PntsZXQgZj1nLmN1cnJlbnQscD1DLnNwbGl0KFwiIFwiKSxiPW49PntuLnRhcmdldD09PWcuY3VycmVudCYmKHgoKSxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIixiKSxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25jYW5jZWxcIixiKSxFLmN1cnJlbnQ9PT0wJiZuLnR5cGUhPT1cImFuaW1hdGlvbmNhbmNlbFwiJiZmLmNsYXNzTGlzdC5yZW1vdmUoLi4ucCkpfTsoKCk9PntmLmNsYXNzTGlzdC5hZGQoLi4ucCksZi5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsYiksZi5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uY2FuY2VsXCIsYil9KSgpfSxbXSksUnQoKCk9PntsZXQgZj1nLmN1cnJlbnQscD0oKT0+e2YucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLHApLHI/WihmLFQscyk6VCgpfTt2fHwoYz9wKCk6KCgpPT57RS5jdXJyZW50PTEsZi5jbGFzc05hbWUrPWAgJHtTfWAsZi5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIscCl9KSgpKX0sW3ZdKSx1dC5jcmVhdGVFbGVtZW50KHV0LkZyYWdtZW50LG51bGwsYSl9fWltcG9ydHtjbG9uZUVsZW1lbnQgYXMgRnQsaXNWYWxpZEVsZW1lbnQgYXMgVXR9ZnJvbVwicmVhY3RcIjtmdW5jdGlvbiBKKHQsbyl7cmV0dXJue2NvbnRlbnQ6dHQodC5jb250ZW50LHQucHJvcHMpLGNvbnRhaW5lcklkOnQucHJvcHMuY29udGFpbmVySWQsaWQ6dC5wcm9wcy50b2FzdElkLHRoZW1lOnQucHJvcHMudGhlbWUsdHlwZTp0LnByb3BzLnR5cGUsZGF0YTp0LnByb3BzLmRhdGF8fHt9LGlzTG9hZGluZzp0LnByb3BzLmlzTG9hZGluZyxpY29uOnQucHJvcHMuaWNvbixyZWFzb246dC5yZW1vdmFsUmVhc29uLHN0YXR1czpvfX1mdW5jdGlvbiB0dCh0LG8sZT0hMSl7cmV0dXJuIFV0KHQpJiYhTih0LnR5cGUpP0Z0KHQse2Nsb3NlVG9hc3Q6by5jbG9zZVRvYXN0LHRvYXN0UHJvcHM6byxkYXRhOm8uZGF0YSxpc1BhdXNlZDplfSk6UCh0KT90KHtjbG9zZVRvYXN0Om8uY2xvc2VUb2FzdCx0b2FzdFByb3BzOm8sZGF0YTpvLmRhdGEsaXNQYXVzZWQ6ZX0pOnR9aW1wb3J0IG90IGZyb21cInJlYWN0XCI7ZnVuY3Rpb24geXQoe2Nsb3NlVG9hc3Q6dCx0aGVtZTpvLGFyaWFMYWJlbDplPVwiY2xvc2VcIn0pe3JldHVybiBvdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIse2NsYXNzTmFtZTpgVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbiBUb2FzdGlmeV9fY2xvc2UtYnV0dG9uLS0ke299YCx0eXBlOlwiYnV0dG9uXCIsb25DbGljazpyPT57ci5zdG9wUHJvcGFnYXRpb24oKSx0KCEwKX0sXCJhcmlhLWxhYmVsXCI6ZX0sb3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCIsdmlld0JveDpcIjAgMCAxNCAxNlwifSxvdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtmaWxsUnVsZTpcImV2ZW5vZGRcIixkOlwiTTcuNzEgOC4yM2wzLjc1IDMuNzUtMS40OCAxLjQ4LTMuNzUtMy43NS0zLjc1IDMuNzVMMSAxMS45OGwzLjc1LTMuNzVMMSA0LjQ4IDIuNDggM2wzLjc1IDMuNzVMOS45OCAzbDEuNDggMS40OC0zLjc1IDMuNzV6XCJ9KSkpfWltcG9ydCBldCBmcm9tXCJyZWFjdFwiO2ltcG9ydCBUdCBmcm9tXCJjbHN4XCI7ZnVuY3Rpb24gZ3Qoe2RlbGF5OnQsaXNSdW5uaW5nOm8sY2xvc2VUb2FzdDplLHR5cGU6cj1cImRlZmF1bHRcIixoaWRlOnMsY2xhc3NOYW1lOmwsY29udHJvbGxlZFByb2dyZXNzOmEscHJvZ3Jlc3M6ZCxydGw6Yyxpc0luOlQsdGhlbWU6Z30pe2xldCB2PXN8fGEmJmQ9PT0wLHg9e2FuaW1hdGlvbkR1cmF0aW9uOmAke3R9bXNgLGFuaW1hdGlvblBsYXlTdGF0ZTpvP1wicnVubmluZ1wiOlwicGF1c2VkXCJ9O2EmJih4LnRyYW5zZm9ybT1gc2NhbGVYKCR7ZH0pYCk7bGV0IEM9VHQoXCJUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyXCIsYT9cIlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWNvbnRyb2xsZWRcIjpcIlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWFuaW1hdGVkXCIsYFRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLSR7Z31gLGBUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS0ke3J9YCx7W1wiVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tcnRsXCJdOmN9KSxTPVAobCk/bCh7cnRsOmMsdHlwZTpyLGRlZmF1bHRDbGFzc05hbWU6Q30pOlR0KEMsbCksRT17W2EmJmQ+PTE/XCJvblRyYW5zaXRpb25FbmRcIjpcIm9uQW5pbWF0aW9uRW5kXCJdOmEmJmQ8MT9udWxsOigpPT57VCYmZSgpfX07cmV0dXJuIGV0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0td3JwXCIsXCJkYXRhLWhpZGRlblwiOnZ9LGV0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOmBUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1iZyBUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS0ke2d9IFRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLSR7cn1gfSksZXQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtyb2xlOlwicHJvZ3Jlc3NiYXJcIixcImFyaWEtaGlkZGVuXCI6dj9cInRydWVcIjpcImZhbHNlXCIsXCJhcmlhLWxhYmVsXCI6XCJub3RpZmljYXRpb24gdGltZXJcIixjbGFzc05hbWU6UyxzdHlsZTp4LC4uLkV9KSl9aW1wb3J0IER0IGZyb21cImNsc3hcIjtpbXBvcnQgY3Qse3VzZUVmZmVjdCBhcyB5byx1c2VSZWYgYXMgVG8sdXNlU3RhdGUgYXMgZ299ZnJvbVwicmVhY3RcIjt2YXIgWHQ9MSxhdD0oKT0+YCR7WHQrK31gO2Z1bmN0aW9uIF90KHQsbyxlKXtsZXQgcj0xLHM9MCxsPVtdLGE9W10sZD1vLGM9bmV3IE1hcCxUPW5ldyBTZXQsZz1pPT4oVC5hZGQoaSksKCk9PlQuZGVsZXRlKGkpKSx2PSgpPT57YT1BcnJheS5mcm9tKGMudmFsdWVzKCkpLFQuZm9yRWFjaChpPT5pKCkpfSx4PSh7Y29udGFpbmVySWQ6aSx0b2FzdElkOm4sdXBkYXRlSWQ6dX0pPT57bGV0IGg9aT9pIT09dDp0IT09MSxtPWMuaGFzKG4pJiZ1PT1udWxsO3JldHVybiBofHxtfSxDPShpLG4pPT57Yy5mb3JFYWNoKHU9Pnt2YXIgaDsobj09bnVsbHx8bj09PXUucHJvcHMudG9hc3RJZCkmJigoaD11LnRvZ2dsZSk9PW51bGx8fGguY2FsbCh1LGkpKX0pfSxTPWk9Pnt2YXIgbix1Oyh1PShuPWkucHJvcHMpPT1udWxsP3ZvaWQgMDpuLm9uQ2xvc2UpPT1udWxsfHx1LmNhbGwobixpLnJlbW92YWxSZWFzb24pLGkuaXNBY3RpdmU9ITF9LEU9aT0+e2lmKGk9PW51bGwpYy5mb3JFYWNoKFMpO2Vsc2V7bGV0IG49Yy5nZXQoaSk7biYmUyhuKX12KCl9LGY9KCk9PntzLT1sLmxlbmd0aCxsPVtdfSxwPWk9Pnt2YXIgbSxfO2xldHt0b2FzdElkOm4sdXBkYXRlSWQ6dX09aS5wcm9wcyxoPXU9PW51bGw7aS5zdGFsZUlkJiZjLmRlbGV0ZShpLnN0YWxlSWQpLGkuaXNBY3RpdmU9ITAsYy5zZXQobixpKSx2KCksZShKKGksaD9cImFkZGVkXCI6XCJ1cGRhdGVkXCIpKSxoJiYoKF89KG09aS5wcm9wcykub25PcGVuKT09bnVsbHx8Xy5jYWxsKG0pKX07cmV0dXJue2lkOnQscHJvcHM6ZCxvYnNlcnZlOmcsdG9nZ2xlOkMscmVtb3ZlVG9hc3Q6RSx0b2FzdHM6YyxjbGVhclF1ZXVlOmYsYnVpbGRUb2FzdDooaSxuKT0+e2lmKHgobikpcmV0dXJuO2xldHt0b2FzdElkOnUsdXBkYXRlSWQ6aCxkYXRhOm0sc3RhbGVJZDpfLGRlbGF5Omt9PW4sTT1oPT1udWxsO00mJnMrKztsZXQgQT17Li4uZCxzdHlsZTpkLnRvYXN0U3R5bGUsa2V5OnIrKywuLi5PYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMobikuZmlsdGVyKChbRCxZXSk9PlkhPW51bGwpKSx0b2FzdElkOnUsdXBkYXRlSWQ6aCxkYXRhOm0saXNJbjohMSxjbGFzc05hbWU6QihuLmNsYXNzTmFtZXx8ZC50b2FzdENsYXNzTmFtZSkscHJvZ3Jlc3NDbGFzc05hbWU6QihuLnByb2dyZXNzQ2xhc3NOYW1lfHxkLnByb2dyZXNzQ2xhc3NOYW1lKSxhdXRvQ2xvc2U6bi5pc0xvYWRpbmc/ITE6cHQobi5hdXRvQ2xvc2UsZC5hdXRvQ2xvc2UpLGNsb3NlVG9hc3QoRCl7Yy5nZXQodSkucmVtb3ZhbFJlYXNvbj1ELEUodSl9LGRlbGV0ZVRvYXN0KCl7bGV0IEQ9Yy5nZXQodSk7aWYoRCE9bnVsbCl7aWYoZShKKEQsXCJyZW1vdmVkXCIpKSxjLmRlbGV0ZSh1KSxzLS0sczwwJiYocz0wKSxsLmxlbmd0aD4wKXtwKGwuc2hpZnQoKSk7cmV0dXJufXYoKX19fTtBLmNsb3NlQnV0dG9uPWQuY2xvc2VCdXR0b24sbi5jbG9zZUJ1dHRvbj09PSExfHx6KG4uY2xvc2VCdXR0b24pP0EuY2xvc2VCdXR0b249bi5jbG9zZUJ1dHRvbjpuLmNsb3NlQnV0dG9uPT09ITAmJihBLmNsb3NlQnV0dG9uPXooZC5jbG9zZUJ1dHRvbik/ZC5jbG9zZUJ1dHRvbjohMCk7bGV0IFI9e2NvbnRlbnQ6aSxwcm9wczpBLHN0YWxlSWQ6X307ZC5saW1pdCYmZC5saW1pdD4wJiZzPmQubGltaXQmJk0/bC5wdXNoKFIpOkwoayk/c2V0VGltZW91dCgoKT0+e3AoUil9LGspOnAoUil9LHNldFByb3BzKGkpe2Q9aX0sc2V0VG9nZ2xlOihpLG4pPT57bGV0IHU9Yy5nZXQoaSk7dSYmKHUudG9nZ2xlPW4pfSxpc1RvYXN0QWN0aXZlOmk9Pnt2YXIgbjtyZXR1cm4obj1jLmdldChpKSk9PW51bGw/dm9pZCAwOm4uaXNBY3RpdmV9LGdldFNuYXBzaG90OigpPT5hfX12YXIgST1uZXcgTWFwLEY9W10sc3Q9bmV3IFNldCxWdD10PT5zdC5mb3JFYWNoKG89Pm8odCkpLGJ0PSgpPT5JLnNpemU+MDtmdW5jdGlvbiBRdCgpe0YuZm9yRWFjaCh0PT5udCh0LmNvbnRlbnQsdC5vcHRpb25zKSksRj1bXX12YXIgdnQ9KHQse2NvbnRhaW5lcklkOm99KT0+e3ZhciBlO3JldHVybihlPUkuZ2V0KG98fDEpKT09bnVsbD92b2lkIDA6ZS50b2FzdHMuZ2V0KHQpfTtmdW5jdGlvbiBYKHQsbyl7dmFyIHI7aWYobylyZXR1cm4hISgocj1JLmdldChvKSkhPW51bGwmJnIuaXNUb2FzdEFjdGl2ZSh0KSk7bGV0IGU9ITE7cmV0dXJuIEkuZm9yRWFjaChzPT57cy5pc1RvYXN0QWN0aXZlKHQpJiYoZT0hMCl9KSxlfWZ1bmN0aW9uIGh0KHQpe2lmKCFidCgpKXtGPUYuZmlsdGVyKG89PnQhPW51bGwmJm8ub3B0aW9ucy50b2FzdElkIT09dCk7cmV0dXJufWlmKHQ9PW51bGx8fG10KHQpKUkuZm9yRWFjaChvPT57by5yZW1vdmVUb2FzdCh0KX0pO2Vsc2UgaWYodCYmKFwiY29udGFpbmVySWRcImluIHR8fFwiaWRcImluIHQpKXtsZXQgbz1JLmdldCh0LmNvbnRhaW5lcklkKTtvP28ucmVtb3ZlVG9hc3QodC5pZCk6SS5mb3JFYWNoKGU9PntlLnJlbW92ZVRvYXN0KHQuaWQpfSl9fXZhciBDdD0odD17fSk9PntJLmZvckVhY2gobz0+e28ucHJvcHMubGltaXQmJighdC5jb250YWluZXJJZHx8by5pZD09PXQuY29udGFpbmVySWQpJiZvLmNsZWFyUXVldWUoKX0pfTtmdW5jdGlvbiBudCh0LG8pe3oodCkmJihidCgpfHxGLnB1c2goe2NvbnRlbnQ6dCxvcHRpb25zOm99KSxJLmZvckVhY2goZT0+e2UuYnVpbGRUb2FzdCh0LG8pfSkpfWZ1bmN0aW9uIHh0KHQpe3ZhciBvOyhvPUkuZ2V0KHQuY29udGFpbmVySWR8fDEpKT09bnVsbHx8by5zZXRUb2dnbGUodC5pZCx0LmZuKX1mdW5jdGlvbiBydCh0LG8pe0kuZm9yRWFjaChlPT57KG89PW51bGx8fCEobyE9bnVsbCYmby5jb250YWluZXJJZCl8fChvPT1udWxsP3ZvaWQgMDpvLmNvbnRhaW5lcklkKT09PWUuaWQpJiZlLnRvZ2dsZSh0LG89PW51bGw/dm9pZCAwOm8uaWQpfSl9ZnVuY3Rpb24gRXQodCl7bGV0IG89dC5jb250YWluZXJJZHx8MTtyZXR1cm57c3Vic2NyaWJlKGUpe2xldCByPV90KG8sdCxWdCk7SS5zZXQobyxyKTtsZXQgcz1yLm9ic2VydmUoZSk7cmV0dXJuIFF0KCksKCk9PntzKCksSS5kZWxldGUobyl9fSxzZXRQcm9wcyhlKXt2YXIgcjsocj1JLmdldChvKSk9PW51bGx8fHIuc2V0UHJvcHMoZSl9LGdldFNuYXBzaG90KCl7dmFyIGU7cmV0dXJuKGU9SS5nZXQobykpPT1udWxsP3ZvaWQgMDplLmdldFNuYXBzaG90KCl9fX1mdW5jdGlvbiBQdCh0KXtyZXR1cm4gc3QuYWRkKHQpLCgpPT57c3QuZGVsZXRlKHQpfX1mdW5jdGlvbiBXdCh0KXtyZXR1cm4gdCYmKE4odC50b2FzdElkKXx8TCh0LnRvYXN0SWQpKT90LnRvYXN0SWQ6YXQoKX1mdW5jdGlvbiBVKHQsbyl7cmV0dXJuIG50KHQsbyksby50b2FzdElkfWZ1bmN0aW9uIFYodCxvKXtyZXR1cm57Li4ubyx0eXBlOm8mJm8udHlwZXx8dCx0b2FzdElkOld0KG8pfX1mdW5jdGlvbiBRKHQpe3JldHVybihvLGUpPT5VKG8sVih0LGUpKX1mdW5jdGlvbiB5KHQsbyl7cmV0dXJuIFUodCxWKFwiZGVmYXVsdFwiLG8pKX15LmxvYWRpbmc9KHQsbyk9PlUodCxWKFwiZGVmYXVsdFwiLHtpc0xvYWRpbmc6ITAsYXV0b0Nsb3NlOiExLGNsb3NlT25DbGljazohMSxjbG9zZUJ1dHRvbjohMSxkcmFnZ2FibGU6ITEsLi4ub30pKTtmdW5jdGlvbiBHdCh0LHtwZW5kaW5nOm8sZXJyb3I6ZSxzdWNjZXNzOnJ9LHMpe2xldCBsO28mJihsPU4obyk/eS5sb2FkaW5nKG8scyk6eS5sb2FkaW5nKG8ucmVuZGVyLHsuLi5zLC4uLm99KSk7bGV0IGE9e2lzTG9hZGluZzpudWxsLGF1dG9DbG9zZTpudWxsLGNsb3NlT25DbGljazpudWxsLGNsb3NlQnV0dG9uOm51bGwsZHJhZ2dhYmxlOm51bGx9LGQ9KFQsZyx2KT0+e2lmKGc9PW51bGwpe3kuZGlzbWlzcyhsKTtyZXR1cm59bGV0IHg9e3R5cGU6VCwuLi5hLC4uLnMsZGF0YTp2fSxDPU4oZyk/e3JlbmRlcjpnfTpnO3JldHVybiBsP3kudXBkYXRlKGwsey4uLngsLi4uQ30pOnkoQy5yZW5kZXIsey4uLngsLi4uQ30pLHZ9LGM9UCh0KT90KCk6dDtyZXR1cm4gYy50aGVuKFQ9PmQoXCJzdWNjZXNzXCIscixUKSkuY2F0Y2goVD0+ZChcImVycm9yXCIsZSxUKSksY315LnByb21pc2U9R3Q7eS5zdWNjZXNzPVEoXCJzdWNjZXNzXCIpO3kuaW5mbz1RKFwiaW5mb1wiKTt5LmVycm9yPVEoXCJlcnJvclwiKTt5Lndhcm5pbmc9UShcIndhcm5pbmdcIik7eS53YXJuPXkud2FybmluZzt5LmRhcms9KHQsbyk9PlUodCxWKFwiZGVmYXVsdFwiLHt0aGVtZTpcImRhcmtcIiwuLi5vfSkpO2Z1bmN0aW9uIHF0KHQpe2h0KHQpfXkuZGlzbWlzcz1xdDt5LmNsZWFyV2FpdGluZ1F1ZXVlPUN0O3kuaXNBY3RpdmU9WDt5LnVwZGF0ZT0odCxvPXt9KT0+e2xldCBlPXZ0KHQsbyk7aWYoZSl7bGV0e3Byb3BzOnIsY29udGVudDpzfT1lLGw9e2RlbGF5OjEwMCwuLi5yLC4uLm8sdG9hc3RJZDpvLnRvYXN0SWR8fHQsdXBkYXRlSWQ6YXQoKX07bC50b2FzdElkIT09dCYmKGwuc3RhbGVJZD10KTtsZXQgYT1sLnJlbmRlcnx8cztkZWxldGUgbC5yZW5kZXIsVShhLGwpfX07eS5kb25lPXQ9Pnt5LnVwZGF0ZSh0LHtwcm9ncmVzczoxfSl9O3kub25DaGFuZ2U9UHQ7eS5wbGF5PXQ9PnJ0KCEwLHQpO3kucGF1c2U9dD0+cnQoITEsdCk7aW1wb3J0e3VzZVJlZiBhcyBLdCx1c2VTeW5jRXh0ZXJuYWxTdG9yZSBhcyBZdH1mcm9tXCJyZWFjdFwiO2Z1bmN0aW9uIEl0KHQpe3ZhciBhO2xldHtzdWJzY3JpYmU6byxnZXRTbmFwc2hvdDplLHNldFByb3BzOnJ9PUt0KEV0KHQpKS5jdXJyZW50O3IodCk7bGV0IHM9KGE9WXQobyxlLGUpKT09bnVsbD92b2lkIDA6YS5zbGljZSgpO2Z1bmN0aW9uIGwoZCl7aWYoIXMpcmV0dXJuW107bGV0IGM9bmV3IE1hcDtyZXR1cm4gdC5uZXdlc3RPblRvcCYmcy5yZXZlcnNlKCkscy5mb3JFYWNoKFQ9PntsZXR7cG9zaXRpb246Z309VC5wcm9wcztjLmhhcyhnKXx8Yy5zZXQoZyxbXSksYy5nZXQoZykucHVzaChUKX0pLEFycmF5LmZyb20oYyxUPT5kKFRbMF0sVFsxXSkpfXJldHVybntnZXRUb2FzdFRvUmVuZGVyOmwsaXNUb2FzdEFjdGl2ZTpYLGNvdW50OnM9PW51bGw/dm9pZCAwOnMubGVuZ3RofX1pbXBvcnR7dXNlRWZmZWN0IGFzIFp0LHVzZVJlZiBhcyBTdCx1c2VTdGF0ZSBhcyBrdH1mcm9tXCJyZWFjdFwiO2Z1bmN0aW9uIEF0KHQpe2xldFtvLGVdPWt0KCExKSxbcixzXT1rdCghMSksbD1TdChudWxsKSxhPVN0KHtzdGFydDowLGRlbHRhOjAscmVtb3ZhbERpc3RhbmNlOjAsY2FuQ2xvc2VPbkNsaWNrOiEwLGNhbkRyYWc6ITEsZGlkTW92ZTohMX0pLmN1cnJlbnQse2F1dG9DbG9zZTpkLHBhdXNlT25Ib3ZlcjpjLGNsb3NlVG9hc3Q6VCxvbkNsaWNrOmcsY2xvc2VPbkNsaWNrOnZ9PXQ7eHQoe2lkOnQudG9hc3RJZCxjb250YWluZXJJZDp0LmNvbnRhaW5lcklkLGZuOmV9KSxadCgoKT0+e2lmKHQucGF1c2VPbkZvY3VzTG9zcylyZXR1cm4geCgpLCgpPT57QygpfX0sW3QucGF1c2VPbkZvY3VzTG9zc10pO2Z1bmN0aW9uIHgoKXtkb2N1bWVudC5oYXNGb2N1cygpfHxwKCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLGYpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLHApfWZ1bmN0aW9uIEMoKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsZiksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIscCl9ZnVuY3Rpb24gUyhtKXtpZih0LmRyYWdnYWJsZT09PSEwfHx0LmRyYWdnYWJsZT09PW0ucG9pbnRlclR5cGUpe2IoKTtsZXQgXz1sLmN1cnJlbnQ7YS5jYW5DbG9zZU9uQ2xpY2s9ITAsYS5jYW5EcmFnPSEwLF8uc3R5bGUudHJhbnNpdGlvbj1cIm5vbmVcIix0LmRyYWdnYWJsZURpcmVjdGlvbj09PVwieFwiPyhhLnN0YXJ0PW0uY2xpZW50WCxhLnJlbW92YWxEaXN0YW5jZT1fLm9mZnNldFdpZHRoKih0LmRyYWdnYWJsZVBlcmNlbnQvMTAwKSk6KGEuc3RhcnQ9bS5jbGllbnRZLGEucmVtb3ZhbERpc3RhbmNlPV8ub2Zmc2V0SGVpZ2h0Kih0LmRyYWdnYWJsZVBlcmNlbnQ9PT04MD90LmRyYWdnYWJsZVBlcmNlbnQqMS41OnQuZHJhZ2dhYmxlUGVyY2VudCkvMTAwKX19ZnVuY3Rpb24gRShtKXtsZXR7dG9wOl8sYm90dG9tOmssbGVmdDpNLHJpZ2h0OkF9PWwuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTttLm5hdGl2ZUV2ZW50LnR5cGUhPT1cInRvdWNoZW5kXCImJnQucGF1c2VPbkhvdmVyJiZtLmNsaWVudFg+PU0mJm0uY2xpZW50WDw9QSYmbS5jbGllbnRZPj1fJiZtLmNsaWVudFk8PWs/cCgpOmYoKX1mdW5jdGlvbiBmKCl7ZSghMCl9ZnVuY3Rpb24gcCgpe2UoITEpfWZ1bmN0aW9uIGIoKXthLmRpZE1vdmU9ITEsZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsbiksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLHUpfWZ1bmN0aW9uIGkoKXtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIixuKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsdSl9ZnVuY3Rpb24gbihtKXtsZXQgXz1sLmN1cnJlbnQ7aWYoYS5jYW5EcmFnJiZfKXthLmRpZE1vdmU9ITAsbyYmcCgpLHQuZHJhZ2dhYmxlRGlyZWN0aW9uPT09XCJ4XCI/YS5kZWx0YT1tLmNsaWVudFgtYS5zdGFydDphLmRlbHRhPW0uY2xpZW50WS1hLnN0YXJ0LGEuc3RhcnQhPT1tLmNsaWVudFgmJihhLmNhbkNsb3NlT25DbGljaz0hMSk7bGV0IGs9dC5kcmFnZ2FibGVEaXJlY3Rpb249PT1cInhcIj9gJHthLmRlbHRhfXB4LCB2YXIoLS15KWA6YDAsIGNhbGMoJHthLmRlbHRhfXB4ICsgdmFyKC0teSkpYDtfLnN0eWxlLnRyYW5zZm9ybT1gdHJhbnNsYXRlM2QoJHtrfSwwKWAsXy5zdHlsZS5vcGFjaXR5PWAkezEtTWF0aC5hYnMoYS5kZWx0YS9hLnJlbW92YWxEaXN0YW5jZSl9YH19ZnVuY3Rpb24gdSgpe2koKTtsZXQgbT1sLmN1cnJlbnQ7aWYoYS5jYW5EcmFnJiZhLmRpZE1vdmUmJm0pe2lmKGEuY2FuRHJhZz0hMSxNYXRoLmFicyhhLmRlbHRhKT5hLnJlbW92YWxEaXN0YW5jZSl7cyghMCksdC5jbG9zZVRvYXN0KCEwKSx0LmNvbGxhcHNlQWxsKCk7cmV0dXJufW0uc3R5bGUudHJhbnNpdGlvbj1cInRyYW5zZm9ybSAwLjJzLCBvcGFjaXR5IDAuMnNcIixtLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNmb3JtXCIpLG0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvcGFjaXR5XCIpfX1sZXQgaD17b25Qb2ludGVyRG93bjpTLG9uUG9pbnRlclVwOkV9O3JldHVybiBkJiZjJiYoaC5vbk1vdXNlRW50ZXI9cCx0LnN0YWNrZWR8fChoLm9uTW91c2VMZWF2ZT1mKSksdiYmKGgub25DbGljaz1tPT57ZyYmZyhtKSxhLmNhbkNsb3NlT25DbGljayYmVCghMCl9KSx7cGxheVRvYXN0OmYscGF1c2VUb2FzdDpwLGlzUnVubmluZzpvLHByZXZlbnRFeGl0VHJhbnNpdGlvbjpyLHRvYXN0UmVmOmwsZXZlbnRIYW5kbGVyczpofX1pbXBvcnR7dXNlRWZmZWN0IGFzIEp0LHVzZUxheW91dEVmZmVjdCBhcyB0b31mcm9tXCJyZWFjdFwiO3ZhciBPdD10eXBlb2Ygd2luZG93IT1cInVuZGVmaW5lZFwiP3RvOkp0O2ltcG9ydCBpdCBmcm9tXCJjbHN4XCI7aW1wb3J0IHEse2Nsb25lRWxlbWVudCBhcyBjbyxpc1ZhbGlkRWxlbWVudCBhcyBmb31mcm9tXCJyZWFjdFwiO2ltcG9ydCBPLHtjbG9uZUVsZW1lbnQgYXMgb28saXNWYWxpZEVsZW1lbnQgYXMgZW99ZnJvbVwicmVhY3RcIjt2YXIgRz0oe3RoZW1lOnQsdHlwZTpvLGlzTG9hZGluZzplLC4uLnJ9KT0+Ty5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3ZpZXdCb3g6XCIwIDAgMjQgMjRcIix3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCIsZmlsbDp0PT09XCJjb2xvcmVkXCI/XCJjdXJyZW50Q29sb3JcIjpgdmFyKC0tdG9hc3RpZnktaWNvbi1jb2xvci0ke299KWAsLi4ucn0pO2Z1bmN0aW9uIGFvKHQpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnQoRyx7Li4udH0sTy5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTIzLjMyIDE3LjE5MUwxNS40MzggMi4xODRDMTQuNzI4LjgzMyAxMy40MTYgMCAxMS45OTYgMGMtMS40MiAwLTIuNzMzLjgzMy0zLjQ0MyAyLjE4NEwuNTMzIDE3LjQ0OGE0Ljc0NCA0Ljc0NCAwIDAwMCA0LjM2OEMxLjI0MyAyMy4xNjcgMi41NTUgMjQgMy45NzUgMjRoMTYuMDVDMjIuMjIgMjQgMjQgMjIuMDQ0IDI0IDE5LjYzMmMwLS45MDQtLjI1MS0xLjc0Ni0uNjgtMi40NHptLTkuNjIyIDEuNDZjMCAxLjAzMy0uNzI0IDEuODIzLTEuNjk4IDEuODIzcy0xLjY5OC0uNzktMS42OTgtMS44MjJ2LS4wNDNjMC0xLjAyOC43MjQtMS44MjIgMS42OTgtMS44MjJzMS42OTguNzkgMS42OTggMS44MjJ2LjA0M3ptLjAzOS0xMi4yODVsLS44NCA4LjA2Yy0uMDU3LjU4MS0uNDA4Ljk0My0uODk3Ljk0My0uNDkgMC0uODQtLjM2Ny0uODk2LS45NDJsLS44NC04LjA2NWMtLjA1Ny0uNjI0LjI1LTEuMDk1Ljc3OS0xLjA5NWgxLjkxYy41MjguMDA1Ljg0LjQ3Ni43ODQgMS4xelwifSkpfWZ1bmN0aW9uIHNvKHQpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnQoRyx7Li4udH0sTy5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTEyIDBhMTIgMTIgMCAxMDEyIDEyQTEyLjAxMyAxMi4wMTMgMCAwMDEyIDB6bS4yNSA1YTEuNSAxLjUgMCAxMS0xLjUgMS41IDEuNSAxLjUgMCAwMTEuNS0xLjV6bTIuMjUgMTMuNWgtNGExIDEgMCAwMTAtMmguNzVhLjI1LjI1IDAgMDAuMjUtLjI1di00LjVhLjI1LjI1IDAgMDAtLjI1LS4yNWgtLjc1YTEgMSAwIDAxMC0yaDFhMiAyIDAgMDEyIDJ2NC43NWEuMjUuMjUgMCAwMC4yNS4yNWguNzVhMSAxIDAgMTEwIDJ6XCJ9KSl9ZnVuY3Rpb24gbm8odCl7cmV0dXJuIE8uY3JlYXRlRWxlbWVudChHLHsuLi50fSxPLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTIgMGExMiAxMiAwIDEwMTIgMTJBMTIuMDE0IDEyLjAxNCAwIDAwMTIgMHptNi45MjcgOC4ybC02Ljg0NSA5LjI4OWExLjAxMSAxLjAxMSAwIDAxLTEuNDMuMTg4bC00Ljg4OC0zLjkwOGExIDEgMCAxMTEuMjUtMS41NjJsNC4wNzYgMy4yNjEgNi4yMjctOC40NTFhMSAxIDAgMTExLjYxIDEuMTgzelwifSkpfWZ1bmN0aW9uIHJvKHQpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnQoRyx7Li4udH0sTy5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTExLjk4MyAwYTEyLjIwNiAxMi4yMDYgMCAwMC04LjUxIDMuNjUzQTExLjggMTEuOCAwIDAwMCAxMi4yMDcgMTEuNzc5IDExLjc3OSAwIDAwMTEuOCAyNGguMjE0QTEyLjExMSAxMi4xMTEgMCAwMDI0IDExLjc5MSAxMS43NjYgMTEuNzY2IDAgMDAxMS45ODMgMHpNMTAuNSAxNi41NDJhMS40NzYgMS40NzYgMCAwMTEuNDQ5LTEuNTNoLjAyN2ExLjUyNyAxLjUyNyAwIDAxMS41MjMgMS40NyAxLjQ3NSAxLjQ3NSAwIDAxLTEuNDQ5IDEuNTNoLS4wMjdhMS41MjkgMS41MjkgMCAwMS0xLjUyMy0xLjQ3ek0xMSAxMi41di02YTEgMSAwIDAxMiAwdjZhMSAxIDAgMTEtMiAwelwifSkpfWZ1bmN0aW9uIGlvKCl7cmV0dXJuIE8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJUb2FzdGlmeV9fc3Bpbm5lclwifSl9dmFyIFc9e2luZm86c28sd2FybmluZzphbyxzdWNjZXNzOm5vLGVycm9yOnJvLHNwaW5uZXI6aW99LGxvPXQ9PnQgaW4gVztmdW5jdGlvbiBOdCh7dGhlbWU6dCx0eXBlOm8saXNMb2FkaW5nOmUsaWNvbjpyfSl7bGV0IHM9bnVsbCxsPXt0aGVtZTp0LHR5cGU6b307cmV0dXJuIHI9PT0hMXx8KFAocik/cz1yKHsuLi5sLGlzTG9hZGluZzplfSk6ZW8ocik/cz1vbyhyLGwpOmU/cz1XLnNwaW5uZXIoKTpsbyhvKSYmKHM9V1tvXShsKSkpLHN9dmFyIHd0PXQ9PntsZXR7aXNSdW5uaW5nOm8scHJldmVudEV4aXRUcmFuc2l0aW9uOmUsdG9hc3RSZWY6cixldmVudEhhbmRsZXJzOnMscGxheVRvYXN0Omx9PUF0KHQpLHtjbG9zZUJ1dHRvbjphLGNoaWxkcmVuOmQsYXV0b0Nsb3NlOmMsb25DbGljazpULHR5cGU6ZyxoaWRlUHJvZ3Jlc3NCYXI6dixjbG9zZVRvYXN0OngsdHJhbnNpdGlvbjpDLHBvc2l0aW9uOlMsY2xhc3NOYW1lOkUsc3R5bGU6Zixwcm9ncmVzc0NsYXNzTmFtZTpwLHVwZGF0ZUlkOmIscm9sZTppLHByb2dyZXNzOm4scnRsOnUsdG9hc3RJZDpoLGRlbGV0ZVRvYXN0Om0saXNJbjpfLGlzTG9hZGluZzprLGNsb3NlT25DbGljazpNLHRoZW1lOkEsYXJpYUxhYmVsOlJ9PXQsRD1pdChcIlRvYXN0aWZ5X190b2FzdFwiLGBUb2FzdGlmeV9fdG9hc3QtdGhlbWUtLSR7QX1gLGBUb2FzdGlmeV9fdG9hc3QtLSR7Z31gLHtbXCJUb2FzdGlmeV9fdG9hc3QtLXJ0bFwiXTp1fSx7W1wiVG9hc3RpZnlfX3RvYXN0LS1jbG9zZS1vbi1jbGlja1wiXTpNfSksWT1QKEUpP0Uoe3J0bDp1LHBvc2l0aW9uOlMsdHlwZTpnLGRlZmF1bHRDbGFzc05hbWU6RH0pOml0KEQsRSksZnQ9TnQodCksZHQ9ISFufHwhYyxqPXtjbG9zZVRvYXN0OngsdHlwZTpnLHRoZW1lOkF9LEg9bnVsbDtyZXR1cm4gYT09PSExfHwoUChhKT9IPWEoaik6Zm8oYSk/SD1jbyhhLGopOkg9eXQoaikpLHEuY3JlYXRlRWxlbWVudChDLHtpc0luOl8sZG9uZTptLHBvc2l0aW9uOlMscHJldmVudEV4aXRUcmFuc2l0aW9uOmUsbm9kZVJlZjpyLHBsYXlUb2FzdDpsfSxxLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7aWQ6aCx0YWJJbmRleDowLG9uQ2xpY2s6VCxcImRhdGEtaW5cIjpfLGNsYXNzTmFtZTpZLC4uLnMsc3R5bGU6ZixyZWY6ciwuLi5fJiZ7cm9sZTppLFwiYXJpYS1sYWJlbFwiOlJ9fSxmdCE9bnVsbCYmcS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTppdChcIlRvYXN0aWZ5X190b2FzdC1pY29uXCIse1tcIlRvYXN0aWZ5LS1hbmltYXRlLWljb24gVG9hc3RpZnlfX3pvb20tZW50ZXJcIl06IWt9KX0sZnQpLHR0KGQsdCwhbyksSCwhdC5jdXN0b21Qcm9ncmVzc0JhciYmcS5jcmVhdGVFbGVtZW50KGd0LHsuLi5iJiYhZHQ/e2tleTpgcC0ke2J9YH06e30scnRsOnUsdGhlbWU6QSxkZWxheTpjLGlzUnVubmluZzpvLGlzSW46XyxjbG9zZVRvYXN0OngsaGlkZTp2LHR5cGU6ZyxjbGFzc05hbWU6cCxjb250cm9sbGVkUHJvZ3Jlc3M6ZHQscHJvZ3Jlc3M6bnx8MH0pKSl9O3ZhciBLPSh0LG89ITEpPT4oe2VudGVyOmBUb2FzdGlmeS0tYW5pbWF0ZSBUb2FzdGlmeV9fJHt0fS1lbnRlcmAsZXhpdDpgVG9hc3RpZnktLWFuaW1hdGUgVG9hc3RpZnlfXyR7dH0tZXhpdGAsYXBwZW5kUG9zaXRpb246b30pLGx0PSQoSyhcImJvdW5jZVwiLCEwKSksbW89JChLKFwic2xpZGVcIiwhMCkpLHBvPSQoSyhcInpvb21cIikpLHVvPSQoSyhcImZsaXBcIikpO3ZhciBfbz17cG9zaXRpb246XCJ0b3AtcmlnaHRcIix0cmFuc2l0aW9uOmx0LGF1dG9DbG9zZTo1ZTMsY2xvc2VCdXR0b246ITAscGF1c2VPbkhvdmVyOiEwLHBhdXNlT25Gb2N1c0xvc3M6ITAsZHJhZ2dhYmxlOlwidG91Y2hcIixkcmFnZ2FibGVQZXJjZW50OjgwLGRyYWdnYWJsZURpcmVjdGlvbjpcInhcIixyb2xlOlwiYWxlcnRcIix0aGVtZTpcImxpZ2h0XCIsXCJhcmlhLWxhYmVsXCI6XCJOb3RpZmljYXRpb25zIEFsdCtUXCIsaG90S2V5czp0PT50LmFsdEtleSYmdC5jb2RlPT09XCJLZXlUXCJ9O2Z1bmN0aW9uIEx0KHQpe2xldCBvPXsuLi5fbywuLi50fSxlPXQuc3RhY2tlZCxbcixzXT1nbyghMCksbD1UbyhudWxsKSx7Z2V0VG9hc3RUb1JlbmRlcjphLGlzVG9hc3RBY3RpdmU6ZCxjb3VudDpjfT1JdChvKSx7Y2xhc3NOYW1lOlQsc3R5bGU6ZyxydGw6dixjb250YWluZXJJZDp4LGhvdEtleXM6Q309bztmdW5jdGlvbiBTKGYpe2xldCBwPUR0KFwiVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lclwiLGBUb2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS0ke2Z9YCx7W1wiVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tcnRsXCJdOnZ9KTtyZXR1cm4gUChUKT9UKHtwb3NpdGlvbjpmLHJ0bDp2LGRlZmF1bHRDbGFzc05hbWU6cH0pOkR0KHAsQihUKSl9ZnVuY3Rpb24gRSgpe2UmJihzKCEwKSx5LnBsYXkoKSl9cmV0dXJuIE90KCgpPT57dmFyIGY7aWYoZSl7bGV0IHA9bC5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWluPVwidHJ1ZVwiXScpLGI9MTIsaT0oZj1vLnBvc2l0aW9uKT09bnVsbD92b2lkIDA6Zi5pbmNsdWRlcyhcInRvcFwiKSxuPTAsdT0wO0FycmF5LmZyb20ocCkucmV2ZXJzZSgpLmZvckVhY2goKGgsbSk9PntsZXQgXz1oO18uY2xhc3NMaXN0LmFkZChcIlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFwiKSxtPjAmJihfLmRhdGFzZXQuY29sbGFwc2VkPWAke3J9YCksXy5kYXRhc2V0LnBvc3x8KF8uZGF0YXNldC5wb3M9aT9cInRvcFwiOlwiYm90XCIpO2xldCBrPW4qKHI/LjI6MSkrKHI/MDpiKm0pO18uc3R5bGUuc2V0UHJvcGVydHkoXCItLXlcIixgJHtpP2s6ayotMX1weGApLF8uc3R5bGUuc2V0UHJvcGVydHkoXCItLWdcIixgJHtifWApLF8uc3R5bGUuc2V0UHJvcGVydHkoXCItLXNcIixgJHsxLShyP3U6MCl9YCksbis9Xy5vZmZzZXRIZWlnaHQsdSs9LjAyNX0pfX0sW3IsYyxlXSkseW8oKCk9PntmdW5jdGlvbiBmKHApe3ZhciBpO2xldCBiPWwuY3VycmVudDtDKHApJiYoKGk9Yi5xdWVyeVNlbGVjdG9yKCdbdGFiSW5kZXg9XCIwXCJdJykpPT1udWxsfHxpLmZvY3VzKCkscyghMSkseS5wYXVzZSgpKSxwLmtleT09PVwiRXNjYXBlXCImJihkb2N1bWVudC5hY3RpdmVFbGVtZW50PT09Ynx8YiE9bnVsbCYmYi5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkmJihzKCEwKSx5LnBsYXkoKSl9cmV0dXJuIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZiksKCk9Pntkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGYpfX0sW0NdKSxjdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLHtyZWY6bCxjbGFzc05hbWU6XCJUb2FzdGlmeVwiLGlkOngsb25Nb3VzZUVudGVyOigpPT57ZSYmKHMoITEpLHkucGF1c2UoKSl9LG9uTW91c2VMZWF2ZTpFLFwiYXJpYS1saXZlXCI6XCJwb2xpdGVcIixcImFyaWEtYXRvbWljXCI6XCJmYWxzZVwiLFwiYXJpYS1yZWxldmFudFwiOlwiYWRkaXRpb25zIHRleHRcIixcImFyaWEtbGFiZWxcIjpvW1wiYXJpYS1sYWJlbFwiXX0sYSgoZixwKT0+e2xldCBiPXAubGVuZ3RoP3suLi5nfTp7Li4uZyxwb2ludGVyRXZlbnRzOlwibm9uZVwifTtyZXR1cm4gY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLHt0YWJJbmRleDotMSxjbGFzc05hbWU6UyhmKSxcImRhdGEtc3RhY2tlZFwiOmUsc3R5bGU6YixrZXk6YGMtJHtmfWB9LHAubWFwKCh7Y29udGVudDppLHByb3BzOm59KT0+Y3QuY3JlYXRlRWxlbWVudCh3dCx7Li4ubixzdGFja2VkOmUsY29sbGFwc2VBbGw6RSxpc0luOmQobi50b2FzdElkLG4uY29udGFpbmVySWQpLGtleTpgdC0ke24ua2V5fWB9LGkpKSl9KSl9ZXhwb3J0e2x0IGFzIEJvdW5jZSx1byBhcyBGbGlwLFcgYXMgSWNvbnMsbW8gYXMgU2xpZGUsTHQgYXMgVG9hc3RDb250YWluZXIscG8gYXMgWm9vbSxaIGFzIGNvbGxhcHNlVG9hc3QsJCBhcyBjc3NUcmFuc2l0aW9uLHkgYXMgdG9hc3R9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJTVN0YXRlLCBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnamltdS1hcmNnaXMnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlLmNzcydcclxuXHJcbmltcG9ydCB7IGxvYWRNb2R1bGVzIH0gZnJvbSAnZXNyaS1sb2FkZXInO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTG9hZGluZyB9IGZyb20gJ2ppbXUtdWknO1xyXG5pbXBvcnQgeyBCb3VuY2UsIFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2hvb2tzL3VzZUxvY2FsZVwiO1xyXG5pbXBvcnQgeyB0cmFuc2xhdGlvbnMgfSBmcm9tICcuL3RyYW5zbGF0aW9ucyc7XHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHQgfSA9IHVzZUxvY2FsZSh0cmFuc2xhdGlvbnMpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHNlbGVjdGVkSW1hZ2VyaWVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5teVN0YXRlPy5zZWxlY3RlZEltYWdlcyB8fCBbXSlcclxuICBjb25zdCBzZWxlY3RlZFNlbnNvciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUubXlTdGF0ZT8uc2VsZWN0ZWRTZW5zb3IpXHJcbiAgY29uc3QgY2hhbmdlR2VvUHJvY2VzcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUubXlTdGF0ZT8uaXNSZWFkeSlcclxuXHJcbiAgY29uc3QgW2ppbXVNYXBWaWV3LCBzZXRKaW11TWFwVmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaW1nUmFuZ28yID0gcmVxdWlyZSgnLi9pbWcvaW1nMi5wbmcnKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2FkUXVlcnksIHNldExvYWRRdWVyeV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbaXNWYWxpZCwgc2V0SXNWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbaXNFamVjdXRlZCwgc2V0SXNFamVjdXRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12KSA9PiB7XHJcbiAgICBzZXRKaW11TWFwVmlldyhqbXYpO1xyXG4gIH07XHJcbiAgY29uc3QgZWplY3V0YXJDb25zdWx0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRRdWVyeSh0cnVlKVxyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIGltYWdlbjEgPSBzZWxlY3RlZEltYWdlcmllc1swXS5PQkpFQ1RJRFxyXG4gICAgICB2YXIgaW1hZ2VuMiA9IHNlbGVjdGVkSW1hZ2VyaWVzWzFdLk9CSkVDVElEXHJcblxyXG4gICAgICBpZiAoaW1hZ2VuMSA9PSBudWxsICYmIGltYWdlbjIgPT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgZW4gbGEgY2FyZ2EgZGUgaW1hZ2VuZXM6ICR7aW1hZ2VuMX0gLCAke2ltYWdlbjJ9YCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENvbnN0cnVpciBsYSBVUkwgY29uIGxvcyBwYXLDoW1ldHJvc1xyXG4gICAgICBjb25zdCBwcm9jZXNvID0gMTtcclxuICAgICAgY29uc3QgZW50cmFkYSA9IGltYWdlbjEgKyBcIixcIiArIGltYWdlbjI7XHJcbiAgICAgIC8vUHJvZHVjY2lvblxyXG4gICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvcHJveHk/cHJvY2Vzbz0ke3Byb2Nlc299JkVudHJhZGE9JHtlbnRyYWRhfWAsIHtcclxuICAgICAgLy8gICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAvLyB9KTtcclxuICAgICAgLy9EZXNhcnJvbGxvXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9wcm94eT9wcm9jZXNvPSR7cHJvY2Vzb30mRW50cmFkYT0ke2VudHJhZGF9JnVybD0ke3NlbGVjdGVkU2Vuc29yLnVybH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBlbiBsYSBzb2xpY2l0dWQ6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgc2V0TG9hZFF1ZXJ5KGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGxvYWRJbWFnZXJ5TGF5ZXIoZGF0YS51cmxUaWYpXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWwgZW52aWFyIGxhIHNvbGljaXR1ZDonLCBlcnJvcik7XHJcbiAgICAgIHRvYXN0LmVycm9yKHQoXCJzdXBlcnBvc2l0aW9uRXJyb3JcIiksIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICB9KTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRRdWVyeShmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgfTtcclxuICBjb25zdCBsb2FkSW1hZ2VyeUxheWVyID0gYXN5bmMgKHVybF9maWxlKSA9PiB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc3QgYmFzZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XHJcbiAgICAgIGNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6NTAwMFwiXHJcblxyXG4gICAgICBjb25zdCBpbWFnZVVybCA9IFN0cmluZyh1cmxfZmlsZSlcclxuXHJcbiAgICAgIGNvbnN0IHN0cnVjdHVyZWRVcmwgPSBiYXNlVXJsICsgaW1hZ2VVcmw7XHJcbiAgICAgIC8vIFZhbGlkYXIgbGEgVVJMIGNvbiB1bmEgc29saWNpdHVkIGZldGNoXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goU3RyaW5nKHN0cnVjdHVyZWRVcmwpLCB7IG1ldGhvZDogXCJHRVRcIiB9KTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgYWwgdmFsaWRhciBsYSBVUkwuIEVzdGFkbzogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENhcmdhciBtw7NkdWxvcyBuZWNlc2FyaW9zIGRlIGxhIEFQSSBkZSBBcmNHSVNcclxuICAgICAgY29uc3QgW0ltYWdlcnlUaWxlTGF5ZXJdID0gYXdhaXQgbG9hZE1vZHVsZXMoW1wiZXNyaS9sYXllcnMvSW1hZ2VyeVRpbGVMYXllclwiXSk7XHJcblxyXG4gICAgICAvLyBDcmVhciBlbCBJbWFnZXJ5VGlsZUxheWVyXHJcbiAgICAgIGNvbnN0IGltYWdlcnlMYXllciA9IG5ldyBJbWFnZXJ5VGlsZUxheWVyKHtcclxuICAgICAgICBpZDogXCJkZXRlY2Npw7NuIGRlIGNhbWJpb1wiLFxyXG4gICAgICAgIG5hbWU6IHQoXCJ3aWRnZXRMYWJlbFwiKSxcclxuICAgICAgICB1cmw6IHN0cnVjdHVyZWRVcmwsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQWdyZWdhciBsYSBjYXBhIGFsIG1hcGFcclxuICAgICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGltYWdlcnlMYXllcik7XHJcbiAgICAgICAgaW1hZ2VyeUxheWVyLndoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgamltdU1hcFZpZXcudmlldy5nb1RvKGltYWdlcnlMYXllci5mdWxsRXh0ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJc0VqZWN1dGVkKHRydWUpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBjYXJnYXIgZWwgSW1hZ2VyeVRpbGVMYXllcjpcIiwgZXJyb3IpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIGNvbnN0IHZhbGlkYXJTdXBlcnBvc2ljaW9uID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaW1hZ2VyeUxheWVyID0gamltdU1hcFZpZXc/LnZpZXcubWFwLmZpbmRMYXllckJ5SWQoc2VsZWN0ZWRTZW5zb3I/LmlkKTtcclxuXHJcbiAgICAgIGlmIChqaW11TWFwVmlldyAmJiBpbWFnZXJ5TGF5ZXIpIHtcclxuXHJcbiAgICAgICAgY29uc3QgbG9hZEVzcmlNb2R1bGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgW1F1ZXJ5LCBnZW9tZXRyeUVuZ2luZV0gPSBhd2FpdCBsb2FkTW9kdWxlcyhbXHJcbiAgICAgICAgICAgIFwiZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnlcIixcclxuICAgICAgICAgICAgXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIsXHJcbiAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgICBpZiAoIWlzTmFOKHNlbGVjdGVkSW1hZ2VyaWVzWzBdLk9CSkVDVElEKSAmJiAhaXNOYU4oc2VsZWN0ZWRJbWFnZXJpZXNbMV0uT0JKRUNUSUQpKSB7XHJcbiAgICAgICAgICAgIC8vIENyZWFyIGxhIGNvbnN1bHRhIHBhcmEgb2J0ZW5lciBsYXMgZ2VvbWV0csOtYXMgZGUgbGFzIGltw6FnZW5lc1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpO1xyXG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGBPQkpFQ1RJRCBJTiAoJHtzZWxlY3RlZEltYWdlcmllc1swXS5PQkpFQ1RJRH0sICR7c2VsZWN0ZWRJbWFnZXJpZXNbMV0uT0JKRUNUSUR9KWA7IC8vIEJ1c2NhciBsYXMgaW3DoWdlbmVzIHBvciBzdXMgT2JqZWN0SURcclxuICAgICAgICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlOyAvLyBEZXZvbHZlciBnZW9tZXRyw61hc1xyXG4gICAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbXCJPQkpFQ1RJRFwiXTsgLy8gRGV2b2x2ZXIgZWwgY2FtcG8gT0JKRUNUSURcclxuXHJcbiAgICAgICAgICAgIC8vIEVqZWN1dGFyIGxhIGNvbnN1bHRhIGVuIGxhIGNhcGFcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGltYWdlcnlMYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWNhciBzaSBzZSBvYnR1dmllcm9uIHJlc3VsdGFkb3NcclxuICAgICAgICAgICAgaWYgKHJlc3VsdHMuZmVhdHVyZXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cmllcyA9IHJlc3VsdHMuZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiBmZWF0dXJlLmdlb21ldHJ5KTtcclxuXHJcbiAgICAgICAgICAgICAgLy8gVmFsaWRhciBzaSBoYXkgaW50ZXJzZWNjacOzbiBlbnRyZSBsYXMgZG9zIGdlb21ldHLDrWFzXHJcbiAgICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0YW4gPSBnZW9tZXRyeUVuZ2luZS5pbnRlcnNlY3RzKGdlb21ldHJpZXNbMF0sIGdlb21ldHJpZXNbMV0pO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGVudE5hbWVJbWdcIik7XHJcbiAgICAgICAgICAgICAgaWYgKGludGVyc2VjdGFuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0SXNWYWxpZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgLy8gSXRlcmFyIHNvYnJlIGNhZGEgZWxlbWVudG8geSBhcGxpY2FyIGxvcyBjYW1iaW9zXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImNvbG9yQm9kZXJCb3R0b20xXCIpO1xyXG4gICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb2xvckJvZGVyQm90dG9tMlwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nMURhdGFcIikuc3R5bGUuY29sb3IgPSBcInJnYig3OCwgMjQ4LCA4OSlcIlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWcyRGF0YVwiKS5zdHlsZS5jb2xvciA9IFwicmdiKDc4LCAyNDgsIDg5KVwiXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbGlkYWNpb25DRFwiKS5zdHlsZS5jb2xvciA9IFwicmdiKDc4LCAyNDgsIDg5KVwiXHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWxpZGFjaW9uQ0RcIikuaW5uZXJUZXh0ID0gdChcInZhbGlkXCIpXHJcblxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJdGVyYXIgc29icmUgY2FkYSBlbGVtZW50byB5IGFwbGljYXIgbG9zIGNhbWJpb3NcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sb3JCb2RlckJvdHRvbTFcIik7XHJcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbG9yQm9kZXJCb3R0b20zXCIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWcxRGF0YVwiKS5zdHlsZS5jb2xvciA9IFwicmdiKDI0OCwgNzgsIDc4KVwiXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZzJEYXRhXCIpLnN0eWxlLmNvbG9yID0gXCJyZ2IoMjQ4LCA3OCwgNzgpXCJcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhY2lvbkNEXCIpLnN0eWxlLmNvbG9yID0gXCJyZ2IoMjQ4LCA3OCwgNzgpXCJcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbGlkYWNpb25DRFwiKS5pbm5lclRleHQgPSB0KFwiaW52YWxpZFwiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gc2UgZW5jb250cmFyb24gYW1iYXMgZ2VvbWV0csOtYXMgcGFyYSB2YWxpZGFyIGxhIHN1cGVycG9zaWNpw7NuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbm8gbyBhbWJvcyB2YWxvcmVzIG5vIHNlIHB1ZWRlbiBjb252ZXJ0aXIgYSBlbnRlcm8uXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsb2FkRXNyaU1vZHVsZXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIG1hcGEgbyBsYSBjYXBhXCIpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBjb25zdWx0YXIgbGFzIGdlb21ldHLDrWFzOlwiLCBlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIC8vTGltcGlhIGxhcyBjYXBhcyBnZW5lcmFkYXMgc2kgc2UgY2FtYmlhIGxhcyBpbWFnZW5lcyBzZWxlY2Npb25hZGFzXHJcbiAgY29uc3QgY2xlYW5MYXllcnMgPSAoaWQ6IFN0cmluZykgPT4ge1xyXG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgIGNvbnN0IGxheWVyID0gamltdU1hcFZpZXcudmlldy5tYXAuZmluZExheWVyQnlJZChpZCk7XHJcbiAgICAgIGlmIChsYXllcikge1xyXG4gICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShsYXllcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQ0hBTkdFX0RFVEVDVElPTl9SRUFEWVwiLCB2YWw6IHRydWUgfSlcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNWYWxpZChmYWxzZSlcclxuICAgIHNldElzRWplY3V0ZWQoZmFsc2UpXHJcbiAgICBjbGVhbkxheWVycyhcImRldGVjY2nDs24gZGUgY2FtYmlvXCIpXHJcbiAgfSwgW3NlbGVjdGVkSW1hZ2VyaWVzLCBjaGFuZ2VHZW9Qcm9jZXNzXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiamltdS13aWRnZXQgd2lkZ2V0Q2hhbmdlRGV0ZWN0aW9uXCI+XHJcbiAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgcHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XHJcbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcblxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWVDRCc+XHJcbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPGg0Pnt0KFwid2lkZ2V0TGFiZWxcIil9PC9oND5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBzZWxlY3RlZEltYWdlcmllcyAmJiBzZWxlY3RlZEltYWdlcmllcz8ubGVuZ3RoIDwgMiA/IChcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFuZ2UtZGV0ZWN0aW9uLWRlc2NyaXB0aW9uJz5cclxuICAgICAgICAgICAgICA8cD57dChcInRleHRcIil9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnRXaWRnZXRzQ0QnPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpc0VqZWN1dGVkID09PSB0cnVlID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JhcGhpYy1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+e3QoXCJncmFwaGljTGFiZWxcIil9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD0nZ3JhcGhpYy1pbWFnZScgc3JjPXtpbWdSYW5nbzJ9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1jb250ZW50JyBpZD0nYnRuMURhdGEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudE5hbWVJbWdzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD0ncGFycmFmb1ZhbGlkYWNpb24nPnt0KFwidmFsaWRhdGlvblwiKX0gOiA8YiBpZD0ndmFsaWRhY2lvbkNEJz57dChcIndpdGhvdXRWYWxpZGF0aW9uXCIpfTwvYj48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW1hZ2VyaWVzPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2NvbnRlbnROYW1lSW1nJyBjbGFzc05hbWU9J2NvbnRlbnROYW1lSW1nIGNvbG9yQm9kZXJCb3R0b20xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dChcImltYWdlXCIpfSB7aW5kZXggKyAxfTo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9e2BpbWcke2luZGV4ICsgMX1EYXRhYH0+e2l0ZW0/Lk9CSkVDVElEfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50QnRuRmx1am8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1ZhbGlkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgPT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9XCJwcmltYXJ5XCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgdHlwZT1cIkRPTlVUXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt2YWxpZGFyU3VwZXJwb3NpY2lvbn0gc2l6ZT1cInNtXCI+e3QoXCJ2YWxpZGF0ZVwiKX08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkUXVlcnkgPT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIHR5cGU9XCJET05VVFwiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZWplY3V0YXJDb25zdWx0YX0gc2l6ZT1cInNtXCIgdHlwZT1cInByaW1hcnlcIj57dChcInJ1blF1ZXJ5XCIpfTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldDtcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==