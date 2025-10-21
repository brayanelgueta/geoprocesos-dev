System.register(["jimu-core","jimu-core/react","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/******/ 			// no module.id needed
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
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/testConect/src/runtime/widget.tsx ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/esm/esri-loader.js");
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
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const activeViewChangeHandler = (jmv) => {
        setJimuMapView(jmv);
    };
    //ESTE SERIA EL CODIGO DEL HOTSPOT QUE TIENE DE ENTRADA UN GEOJSON DE PUNTOS   
    const loadImageryLayer = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const imageUrl = "http://127.0.0.1:5000/geoprocess_output/test11.geojson";
            console.log("Cargando GeoJSON desde URL:", imageUrl);
            const layerResponse = yield fetch(imageUrl);
            const geojsonData = yield layerResponse.json();
            console.log("Datos GeoJSON cargados:", geojsonData);
            const [FeatureLayer, Graphic, Point, SpatialReference, heatmapRendererCreator] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_3__.loadModules)([
                "esri/layers/FeatureLayer",
                "esri/Graphic",
                "esri/geometry/Point",
                "esri/geometry/SpatialReference",
                "esri/smartMapping/renderers/heatmap"
            ]);
            const graphics = [];
            let graphicIndex = 0;
            const geojsonSpatialReference = new SpatialReference({ wkid: 102100 });
            const viewSpatialReference = jimuMapView.view.spatialReference;
            geojsonData.features.forEach((feature) => {
                var _a;
                if (feature.geometry.type === "Point") {
                    const point = new Point({
                        x: feature.geometry.coordinates[0],
                        y: feature.geometry.coordinates[1],
                        spatialReference: geojsonSpatialReference
                    });
                    graphics.push(new Graphic({
                        geometry: point,
                        attributes: { OBJECTID: graphicIndex, Nombre: ((_a = feature.properties) === null || _a === void 0 ? void 0 : _a.Nombre) || "Sin Nombre" },
                    }));
                    graphicIndex++;
                }
            });
            console.log(graphics);
            const hotspotLayer = new FeatureLayer({
                title: "Hotspot",
                source: graphics,
                fields: [
                    { name: "ObjectID", alias: "ObjectID", type: "oid" },
                    { name: "Nombre", alias: "Nombre", type: "string" },
                ],
                objectIdField: "ObjectID",
                geometryType: "point",
                spatialReference: viewSpatialReference,
                opacity: 1
            });
            const { renderer } = yield heatmapRendererCreator.createRenderer({
                layer: hotspotLayer,
                view: jimuMapView.view,
                blurRadius: 5,
            });
            renderer.referenceScale = jimuMapView.scale; // Opcional: revisar si es necesario
            if (jimuMapView) {
                jimuMapView.view.map.add(hotspotLayer);
                hotspotLayer.when(() => {
                    jimuMapView.view.goTo(hotspotLayer.fullExtent);
                    console.log("Capa de puntos 'hotspot' cargada correctamente.");
                    renderer.referenceScale = jimuMapView.view.scale;
                    hotspotLayer.renderer = renderer;
                });
            }
            else {
                console.error("jimuMapView no está configurado.");
            }
        }
        catch (error) {
            console.error("Error al cargar la capa:", error);
            alert("No se pudo cargar la capa. Revisa la URL o la consola.");
        }
    });
    const poligonoresultante = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const imageUrl = "http://127.0.0.1:5000/geoprocess_output/test4.geojson";
            const layerResponse = yield fetch(imageUrl);
            if (!layerResponse.ok) {
                throw new Error(`Error al consultar la capa: ${layerResponse.status} ${layerResponse.statusText}`);
            }
            const geojsonData = yield layerResponse.json();
            const [FeatureLayer, Graphic, Polygon, SimpleFillSymbol] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_3__.loadModules)([
                "esri/layers/FeatureLayer",
                "esri/Graphic",
                "esri/geometry/Polygon",
                "esri/symbols/SimpleFillSymbol"
            ]);
            const colorPoligon = new SimpleFillSymbol({
                color: [255, 0, 0, 0.5],
                outline: { color: [255, 0, 0], width: 1 }
            });
            const featureLayer = new FeatureLayer({
                title: "Capa de Desastre",
                source: [],
                objectIdField: "OBJECTID",
                fields: [
                    { name: "OBJECTID", alias: "OBJECTID", type: "oid" },
                    { name: "Nombre", alias: "Nombre", type: "string" }
                ],
                renderer: {
                    type: "simple",
                    symbol: colorPoligon
                }
            });
            const graphics = [];
            let graphicIndex = 0; // Nuevo índice para gráficos únicos
            geojsonData.features.forEach((feature) => {
                let geometries = [];
                if (feature.geometry.type === "Polygon") {
                    geometries.push(new Polygon({
                        rings: feature.geometry.coordinates,
                        spatialReference: jimuMapView.view.spatialReference
                    }));
                }
                else if (feature.geometry.type === "MultiPolygon") {
                    feature.geometry.coordinates.forEach(polygonCoordinates => {
                        geometries.push(new Polygon({
                            rings: polygonCoordinates,
                            spatialReference: jimuMapView.view.spatialReference
                        }));
                    });
                }
                geometries.forEach(geometry => {
                    var _a;
                    graphics.push(new Graphic({
                        geometry: geometry,
                        attributes: { OBJECTID: graphicIndex, Nombre: ((_a = feature.properties) === null || _a === void 0 ? void 0 : _a.Nombre) || "Sin Nombre" }
                    }));
                    graphicIndex++; // Incrementa el índice para cada gráfico
                });
            });
            featureLayer.source = graphics;
            const existingLayer = jimuMapView.view.map.layers.find(layer => layer.title === "Capa de Desastre");
            if (existingLayer) {
                jimuMapView.view.map.remove(existingLayer);
            }
            if (jimuMapView) {
                jimuMapView.view.map.add(featureLayer);
                featureLayer.when(() => {
                    jimuMapView.view.goTo(featureLayer.fullExtent);
                    console.log("FeatureLayer cargado correctamente.");
                });
            }
            else {
                console.error("jimuMapView no está configurado.");
            }
        }
        catch (error) {
            console.error("Error al cargar el ImageryTileLayer:", error);
            alert("No se pudo cargar la capa. Revisa la URL o la consola.");
        }
    });
    const mascaraBAI = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
        }
        catch (error) {
            console.error("Error al cargar el ImageryTileLayer:", error);
            alert("No se pudo cargar la capa. Revisa la URL o la consola.");
        }
    });
    const deteccionDeCambios = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const imageUrl = "http://127.0.0.1:5000/geoprocess_output/test12.tif";
            console.log("Cargando imagen desde URL:", imageUrl);
            // Validar la URL con una solicitud fetch
            const response = yield fetch(imageUrl, { method: "HEAD" });
            if (!response.ok) {
                throw new Error(`Error al validar la URL. Estado: ${response.status}`);
            }
            // Cargar módulos necesarios de la API de ArcGIS
            const [ImageryTileLayer, RasterFunction, RasterStretchRenderer] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_3__.loadModules)([
                "esri/layers/ImageryTileLayer",
                "esri/layers/support/RasterFunction",
                "esri/renderers/RasterStretchRenderer"
            ]);
            const rasterFunctionMask = new RasterFunction({
                functionName: "Mask",
                functionArguments: {
                    NoDataValues: [0, 0, 3, 0],
                },
            });
            // Crear el ImageryTileLayer
            const imageryLayer = new ImageryTileLayer({
                url: imageUrl,
                //rasterFunction: rasterFunctionMask,
                //opacity: 0.7
            });
            const renderer = new RasterStretchRenderer({
                stretchType: "min-max",
                gamma: [1, 1, 1],
            });
            // Asigna el renderer a la capa
            //imageryLayer.renderer = renderer;
            // Agregar la capa al mapa
            if (jimuMapView) {
                jimuMapView.view.map.add(imageryLayer);
                imageryLayer.when(() => {
                    jimuMapView.view.goTo(imageryLayer.fullExtent);
                    console.log("ImageryTileLayer cargado correctamente.");
                });
            }
            else {
                console.error("jimuMapView no está configurado.");
            }
        }
        catch (error) {
            console.error("Error al cargar el ImageryTileLayer:", error);
            alert("No se pudo cargar la capa. Revisa la URL o la consola.");
        }
    });
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-demo jimu-widget m-2" },
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler })),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: loadImageryLayer }, "Cargar TIFF como ImageryTileLayer"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90ZXN0Q29uZWN0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7QUFDTTtBQUNzQztBQUN4QztBQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJqQjtBQUNBO0FBQzJEO0FBQ3pCO0FBQ2xDO0FBQ0E7QUFDQSxlQUFlLG9EQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asd0NBQXdDO0FBQ3hDLFNBQVMsaURBQVE7QUFDakI7QUFDQSxxQkFBcUIsa0RBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbURBQVUsdUNBQXVDLGlDQUFpQztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNzQztBQUNKO0FBQ007QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsOEJB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QUM7UUFDSCxDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0NBQXNDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0QsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7UUFDbEUsQ0FBQztJQUNILENBQUMsRUFBQztJQUlBLE9BQU8sQ0FDTCxvRUFBSyxTQUFTLEVBQUMsNkJBQTZCO1FBQ3pDLEtBQUssQ0FBQyxlQUFlLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQzlELDJEQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQzFDLGtCQUFrQixFQUFFLHVCQUF1QixHQUMzQyxDQUNIO1FBQ0Q7WUFDRSx1RUFBUSxPQUFPLEVBQUUsZ0JBQWdCLHdDQUE0QyxDQUN6RSxDQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGlFQUFlLE1BQU0sRUFBQztBQUNkLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9lc3JpLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy9jc3MuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL3V0aWxzL3VybC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdGVzdENvbmVjdC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIENvcHlyaWdodCAoYykgMjAyMiBFc3JpXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vLyByZS1leHBvcnQgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG5leHBvcnQgeyBsb2FkTW9kdWxlcyB9IGZyb20gJy4vbW9kdWxlcyc7XG5leHBvcnQgeyBnZXRTY3JpcHQsIGlzTG9hZGVkLCBsb2FkU2NyaXB0LCBzZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vc2NyaXB0JztcbmV4cG9ydCB7IGxvYWRDc3MgfSBmcm9tICcuL3V0aWxzL2Nzcyc7XG5leHBvcnQgeyB1dGlscyB9O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGdldFNjcmlwdCwgaXNMb2FkZWQsIGxvYWRTY3JpcHQgfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG4vLyB3cmFwIERvam8ncyByZXF1aXJlKCkgaW4gYSBwcm9taXNlXG5mdW5jdGlvbiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKSB7XG4gICAgcmV0dXJuIG5ldyB1dGlscy5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgbG9hZGluZyB0aGUgZXNyaS9kb2pvIHNjcmlwdHMsIHJlamVjdCB3aXRoIHRoZSBlcnJvci5cbiAgICAgICAgdmFyIGVycm9ySGFuZGxlciA9IHdpbmRvd1sncmVxdWlyZSddLm9uKCdlcnJvcicsIHJlamVjdCk7XG4gICAgICAgIHdpbmRvd1sncmVxdWlyZSddKG1vZHVsZXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlbW92ZSBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICBlcnJvckhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIHdpdGggdGhlIHBhcmFtZXRlcnMgZnJvbSBkb2pvIHJlcXVpcmUgYXMgYW4gYXJyYXkuXG4gICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbiBhcnJheSBvZiB0aGUgcmVxdWlyZWQgbW9kdWxlc1xuLy8gYWxzbyB3aWxsIGF0dGVtcHQgdG8gbGF6eSBsb2FkIHRoZSBBcmNHSVMgQVBJIGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGxvYWRlZFxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNb2R1bGVzKG1vZHVsZXMsIGxvYWRTY3JpcHRPcHRpb25zKSB7XG4gICAgaWYgKGxvYWRTY3JpcHRPcHRpb25zID09PSB2b2lkIDApIHsgbG9hZFNjcmlwdE9wdGlvbnMgPSB7fTsgfVxuICAgIGlmICghaXNMb2FkZWQoKSkge1xuICAgICAgICAvLyBzY3JpcHQgaXMgbm90IHlldCBsb2FkZWQsIGlzIGl0IGluIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmc/XG4gICAgICAgIHZhciBzY3JpcHQgPSBnZXRTY3JpcHQoKTtcbiAgICAgICAgdmFyIHNyYyA9IHNjcmlwdCAmJiBzY3JpcHQuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgaWYgKCFsb2FkU2NyaXB0T3B0aW9ucy51cmwgJiYgc3JjKSB7XG4gICAgICAgICAgICAvLyBzY3JpcHQgaXMgc3RpbGwgbG9hZGluZyBhbmQgdXNlciBkaWQgbm90IHNwZWNpZnkgYSBVUkxcbiAgICAgICAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIGRlZmF1bHQgdG8gdGhlIFVSTCB0aGF0J3MgYmVpbmcgbG9hZGVkXG4gICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGRlZmF1bHRpbmcgdG8gdGhlIGxhdGVzdCA0LnggVVJMXG4gICAgICAgICAgICBsb2FkU2NyaXB0T3B0aW9ucy51cmwgPSBzcmM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXR0ZW1wdCB0byBsb2FkIHRoZSBzY3JpcHQgdGhlbiBsb2FkIHRoZSBtb2R1bGVzXG4gICAgICAgIHJldHVybiBsb2FkU2NyaXB0KGxvYWRTY3JpcHRPcHRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlcXVpcmVNb2R1bGVzKG1vZHVsZXMpOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHNjcmlwdCBpcyBhbHJlYWR5IGxvYWRlZCwganVzdCBsb2FkIHRoZSBtb2R1bGVzXG4gICAgICAgIHJldHVybiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKTtcbiAgICB9XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgbG9hZENzcyB9IGZyb20gJy4vdXRpbHMvY3NzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IGdldENkblVybCB9IGZyb20gJy4vdXRpbHMvdXJsJztcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZnVuY3Rpb24gY3JlYXRlU2NyaXB0KHVybCkge1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1lc3JpLWxvYWRlcicsICdsb2FkaW5nJyk7XG4gICAgcmV0dXJuIHNjcmlwdDtcbn1cbi8vIGFkZCBhIG9uZS10aW1lIGxvYWQgaGFuZGxlciB0byBzY3JpcHRcbi8vIGFuZCBvcHRpb25hbGx5IGFkZCBhIG9uZSB0aW1lIGVycm9yIGhhbmRsZXIgYXMgd2VsbFxuZnVuY3Rpb24gaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIGNhbGxiYWNrLCBlcnJiYWNrKSB7XG4gICAgdmFyIG9uU2NyaXB0RXJyb3I7XG4gICAgaWYgKGVycmJhY2spIHtcbiAgICAgICAgLy8gc2V0IHVwIGFuIGVycm9yIGhhbmRsZXIgYXMgd2VsbFxuICAgICAgICBvblNjcmlwdEVycm9yID0gaGFuZGxlU2NyaXB0RXJyb3Ioc2NyaXB0LCBlcnJiYWNrKTtcbiAgICB9XG4gICAgdmFyIG9uU2NyaXB0TG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gcGFzcyB0aGUgc2NyaXB0IHRvIHRoZSBjYWxsYmFja1xuICAgICAgICBjYWxsYmFjayhzY3JpcHQpO1xuICAgICAgICAvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uU2NyaXB0TG9hZCwgZmFsc2UpO1xuICAgICAgICBpZiAob25TY3JpcHRFcnJvcikge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBlcnJvciBsaXN0ZW5lciBhcyB3ZWxsXG4gICAgICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25TY3JpcHRMb2FkLCBmYWxzZSk7XG59XG4vLyBhZGQgYSBvbmUtdGltZSBlcnJvciBoYW5kbGVyIHRvIHRoZSBzY3JpcHRcbmZ1bmN0aW9uIGhhbmRsZVNjcmlwdEVycm9yKHNjcmlwdCwgY2FsbGJhY2spIHtcbiAgICB2YXIgb25TY3JpcHRFcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIHJlamVjdCB0aGUgcHJvbWlzZSBhbmQgcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgY2FsbGJhY2soZS5lcnJvciB8fCBuZXcgRXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgYXR0ZW1wdGluZyB0byBsb2FkIFwiLmNvbmNhdChzY3JpcHQuc3JjKSkpO1xuICAgICAgICAvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgfTtcbiAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgcmV0dXJuIG9uU2NyaXB0RXJyb3I7XG59XG4vLyBhbGxvdyB0aGUgdXNlciB0byBjb25maWd1cmUgZGVmYXVsdCBzY3JpcHQgb3B0aW9ucyByYXRoZXIgdGhhbiBwYXNzaW5nIG9wdGlvbnMgdG8gYGxvYWRNb2R1bGVzYCBlYWNoIHRpbWVcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBkZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG59XG4vLyBnZXQgdGhlIHNjcmlwdCBpbmplY3RlZCBieSB0aGlzIGxpYnJhcnlcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JpcHQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLWVzcmktbG9hZGVyXScpO1xufVxuLy8gaGFzIEFyY0dJUyBBUEkgYmVlbiBsb2FkZWQgb24gdGhlIHBhZ2UgeWV0P1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9hZGVkKCkge1xuICAgIHZhciBnbG9iYWxSZXF1aXJlID0gd2luZG93WydyZXF1aXJlJ107XG4gICAgLy8gLm9uKCkgZW5zdXJlcyB0aGF0IGl0J3MgRG9qbydzIEFNRCBsb2FkZXJcbiAgICByZXR1cm4gZ2xvYmFsUmVxdWlyZSAmJiBnbG9iYWxSZXF1aXJlLm9uO1xufVxuLy8gbG9hZCB0aGUgQXJjR0lTIEFQSSBvbiB0aGUgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTY3JpcHQob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgLy8gd2Ugd291bGQgaGF2ZSBsaWtlZCB0byB1c2Ugc3ByZWFkIGxpa2UgeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9XG4gICAgLy8gYnV0IFRTIHdvdWxkIGluamVjdCBhIHBvbHlmaWxsIHRoYXQgd291bGQgcmVxdWlyZSB1c2UgdG8gY29uZmlndXJlIHJvbGx1cCB3IGNvbnRlbnQ6ICd3aW5kb3cnXG4gICAgLy8gaWYgd2UgaGF2ZSBhbm90aGVyIG9jY2FzaW9uIHRvIHVzZSBzcHJlYWQsIGxldCdzIGRvIHRoYXQgYW5kIHJlcGxhY2UgdGhpcyBmb3IuLi5pblxuICAgIHZhciBvcHRzID0ge307XG4gICAgW2RlZmF1bHRPcHRpb25zLCBvcHRpb25zXS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIG9wdHNbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBVUkwgdG8gbG9hZFxuICAgIHZhciB2ZXJzaW9uID0gb3B0cy52ZXJzaW9uO1xuICAgIHZhciB1cmwgPSBvcHRzLnVybCB8fCBnZXRDZG5VcmwodmVyc2lvbik7XG4gICAgcmV0dXJuIG5ldyB1dGlscy5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9IGdldFNjcmlwdCgpO1xuICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgICAvLyB0aGUgQVBJIGlzIGFscmVhZHkgbG9hZGVkIG9yIGluIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmcuLi5cbiAgICAgICAgICAgIC8vIE5PVEU6IGhhdmUgdG8gdGVzdCBhZ2FpbnN0IHNjciBhdHRyaWJ1dGUgdmFsdWUsIG5vdCBzY3JpcHQuc3JjXG4gICAgICAgICAgICAvLyBiL2MgdGhlIGxhdHRlciB3aWxsIHJldHVybiB0aGUgZnVsbCB1cmwgZm9yIHJlbGF0aXZlIHBhdGhzXG4gICAgICAgICAgICB2YXIgc3JjID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgICAgICBpZiAoc3JjICE9PSB1cmwpIHtcbiAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSB0cnlpbmcgdG8gbG9hZCBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIHRoZSBBUElcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQgKFwiLmNvbmNhdChzcmMsIFwiKS5cIikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzY3JpcHQgaGFzIGFscmVhZHkgc3VjY2Vzc2Z1bGx5IGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciB0aGUgc2NyaXB0IHRvIGxvYWQgYW5kIHRoZW4gcmVzb2x2ZVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBBUEkgaGFzIGJlZW4gbG9hZGVkIGJ5IHNvbWUgb3RoZXIgbWVhbnNcbiAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSB0cnlpbmcgdG8gbG9hZCBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIHRoZSBBUElcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQuXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYXR0ZW1wdGluZyB0byBsb2FkIHRoZSBBUElcbiAgICAgICAgICAgICAgICB2YXIgY3NzID0gb3B0cy5jc3M7XG4gICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlVmVyc2lvbiA9IGNzcyA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCB0aGUgY3NzIGJlZm9yZSBsb2FkaW5nIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgbG9hZENzcyh1c2VWZXJzaW9uID8gdmVyc2lvbiA6IGNzcywgb3B0cy5pbnNlcnRDc3NCZWZvcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBzY3JpcHQgb2JqZWN0IHdob3NlIHNvdXJjZSBwb2ludHMgdG8gdGhlIEFQSVxuICAgICAgICAgICAgICAgIHNjcmlwdCA9IGNyZWF0ZVNjcmlwdCh1cmwpO1xuICAgICAgICAgICAgICAgIC8vIF9jdXJyZW50VXJsID0gdXJsO1xuICAgICAgICAgICAgICAgIC8vIG9uY2UgdGhlIHNjcmlwdCBpcyBsb2FkZWQuLi5cbiAgICAgICAgICAgICAgICBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHN0YXR1cyBvZiB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXNyaS1sb2FkZXInLCAnbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICAgICAgICAgIC8vIGxvYWQgdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGdldENkbkNzc1VybCwgcGFyc2VWZXJzaW9uIH0gZnJvbSAnLi91cmwnO1xuZnVuY3Rpb24gY3JlYXRlU3R5bGVzaGVldExpbmsoaHJlZikge1xuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgcmV0dXJuIGxpbms7XG59XG5mdW5jdGlvbiBpbnNlcnRMaW5rKGxpbmssIGJlZm9yZSkge1xuICAgIGlmIChiZWZvcmUpIHtcbiAgICAgICAgLy8gdGhlIGxpbmsgc2hvdWxkIGJlIGluc2VydGVkIGJlZm9yZSBhIHNwZWNpZmljIG5vZGVcbiAgICAgICAgdmFyIGJlZm9yZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJlZm9yZSk7XG4gICAgICAgIGJlZm9yZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGluaywgYmVmb3JlTm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBhcHBlbmQgdGhlIGxpbmsgdG8gdGhlbiBlbmQgb2YgdGhlIGhlYWQgdGFnXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfVxufVxuLy8gY2hlY2sgaWYgdGhlIGNzcyB1cmwgaGFzIGJlZW4gaW5qZWN0ZWQgb3IgYWRkZWQgbWFudWFsbHlcbmZ1bmN0aW9uIGdldENzcyh1cmwpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbaHJlZio9XFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIl1cIikpO1xufVxuZnVuY3Rpb24gZ2V0Q3NzVXJsKHVybE9yVmVyc2lvbikge1xuICAgIHJldHVybiAhdXJsT3JWZXJzaW9uIHx8IHBhcnNlVmVyc2lvbih1cmxPclZlcnNpb24pXG4gICAgICAgIC8vIGlmIGl0J3MgYSB2YWxpZCB2ZXJzaW9uIHN0cmluZyByZXR1cm4gdGhlIENETiBVUkxcbiAgICAgICAgPyBnZXRDZG5Dc3NVcmwodXJsT3JWZXJzaW9uKVxuICAgICAgICAvLyBvdGhlcndpc2UgYXNzdW1lIGl0J3MgYSBVUkwgYW5kIHJldHVybiB0aGF0XG4gICAgICAgIDogdXJsT3JWZXJzaW9uO1xufVxuLy8gbGF6eSBsb2FkIHRoZSBDU1MgbmVlZGVkIGZvciB0aGUgQXJjR0lTIEFQSVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDc3ModXJsT3JWZXJzaW9uLCBiZWZvcmUpIHtcbiAgICB2YXIgdXJsID0gZ2V0Q3NzVXJsKHVybE9yVmVyc2lvbik7XG4gICAgdmFyIGxpbmsgPSBnZXRDc3ModXJsKTtcbiAgICBpZiAoIWxpbmspIHtcbiAgICAgICAgLy8gY3JlYXRlICYgbG9hZCB0aGUgY3NzIGxpbmtcbiAgICAgICAgbGluayA9IGNyZWF0ZVN0eWxlc2hlZXRMaW5rKHVybCk7XG4gICAgICAgIGluc2VydExpbmsobGluaywgYmVmb3JlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbms7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuLy8gYWxsb3cgY29uc3VtaW5nIGxpYnJhcmllcyB0byBwcm92aWRlIHRoZWlyIG93biBQcm9taXNlIGltcGxlbWVudGF0aW9uc1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIFByb21pc2U6IGlzQnJvd3NlciA/IHdpbmRvd1snUHJvbWlzZSddIDogdW5kZWZpbmVkXG59O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbnZhciBERUZBVUxUX1ZFUlNJT04gPSAnNC4yNSc7XG52YXIgTkVYVCA9ICduZXh0JztcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZlcnNpb24odmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uLnRvTG93ZXJDYXNlKCkgPT09IE5FWFQpIHtcbiAgICAgICAgcmV0dXJuIE5FWFQ7XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHZlcnNpb24gJiYgdmVyc2lvbi5tYXRjaCgvXihcXGQpXFwuKFxcZCspLyk7XG4gICAgcmV0dXJuIG1hdGNoICYmIHtcbiAgICAgICAgbWFqb3I6IHBhcnNlSW50KG1hdGNoWzFdLCAxMCksXG4gICAgICAgIG1pbm9yOiBwYXJzZUludChtYXRjaFsyXSwgMTApXG4gICAgfTtcbn1cbi8qKlxuICogR2V0IHRoZSBDRE4gdXJsIGZvciBhIGdpdmVuIHZlcnNpb25cbiAqXG4gKiBAcGFyYW0gdmVyc2lvbiBFeDogJzQuMjUnIG9yICczLjQyJy4gRGVmYXVsdHMgdG8gdGhlIGxhdGVzdCA0LnggdmVyc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENkblVybCh2ZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24gPT09IHZvaWQgMCkgeyB2ZXJzaW9uID0gREVGQVVMVF9WRVJTSU9OOyB9XG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9qcy5hcmNnaXMuY29tL1wiLmNvbmNhdCh2ZXJzaW9uLCBcIi9cIik7XG59XG4vKipcbiAqIEdldCB0aGUgQ0ROIHVybCBmb3IgYSB0aGUgQ1NTIGZvciBhIGdpdmVuIHZlcnNpb24gYW5kL29yIHRoZW1lXG4gKlxuICogQHBhcmFtIHZlcnNpb24gRXg6ICc0LjI1JywgJzMuNDInLCBvciAnbmV4dCcuIERlZmF1bHRzIHRvIHRoZSBsYXRlc3QgNC54IHZlcnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5Dc3NVcmwodmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uID09PSB2b2lkIDApIHsgdmVyc2lvbiA9IERFRkFVTFRfVkVSU0lPTjsgfVxuICAgIHZhciBiYXNlVXJsID0gZ2V0Q2RuVXJsKHZlcnNpb24pO1xuICAgIHZhciBwYXJzZWRWZXJzaW9uID0gcGFyc2VWZXJzaW9uKHZlcnNpb24pO1xuICAgIGlmIChwYXJzZWRWZXJzaW9uICE9PSBORVhUICYmIHBhcnNlZFZlcnNpb24ubWFqb3IgPT09IDMpIHtcbiAgICAgICAgLy8gTk9URTogYXQgMy4xMSB0aGUgQ1NTIG1vdmVkIGZyb20gdGhlIC9qcyBmb2xkZXIgdG8gdGhlIHJvb3RcbiAgICAgICAgdmFyIHBhdGggPSBwYXJzZWRWZXJzaW9uLm1pbm9yIDw9IDEwID8gJ2pzLycgOiAnJztcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGJhc2VVcmwpLmNvbmNhdChwYXRoLCBcImVzcmkvY3NzL2VzcmkuY3NzXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gYXNzdW1lIDQueFxuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoYmFzZVVybCwgXCJlc3JpL3RoZW1lcy9saWdodC9tYWluLmNzc1wiKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcclxuaW1wb3J0IHsgbG9hZE1vZHVsZXMgfSBmcm9tICdlc3JpLWxvYWRlcic7XHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXYpID0+IHtcclxuICAgIHNldEppbXVNYXBWaWV3KGptdik7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vRVNURSBTRVJJQSBFTCBDT0RJR08gREVMIEhPVFNQT1QgUVVFIFRJRU5FIERFIEVOVFJBREEgVU4gR0VPSlNPTiBERSBQVU5UT1MgICBcclxuXHJcbmNvbnN0IGxvYWRJbWFnZXJ5TGF5ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgICAgY29uc3QgaW1hZ2VVcmwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9nZW9wcm9jZXNzX291dHB1dC90ZXN0MTEuZ2VvanNvblwiO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhcmdhbmRvIEdlb0pTT04gZGVzZGUgVVJMOlwiLCBpbWFnZVVybCk7XHJcbiAgICAgIGNvbnN0IGxheWVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpbWFnZVVybCk7XHJcbiAgICAgIGNvbnN0IGdlb2pzb25EYXRhID0gYXdhaXQgbGF5ZXJSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF0b3MgR2VvSlNPTiBjYXJnYWRvczpcIiwgZ2VvanNvbkRhdGEpO1xyXG5cclxuICAgICAgY29uc3QgW1xyXG4gICAgICAgICAgRmVhdHVyZUxheWVyLFxyXG4gICAgICAgICAgR3JhcGhpYyxcclxuICAgICAgICAgIFBvaW50LFxyXG4gICAgICAgICAgU3BhdGlhbFJlZmVyZW5jZSxcclxuICAgICAgICAgIGhlYXRtYXBSZW5kZXJlckNyZWF0b3JcclxuICAgICAgXSA9IGF3YWl0IGxvYWRNb2R1bGVzKFtcclxuICAgICAgICAgIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIsXHJcbiAgICAgICAgICBcImVzcmkvR3JhcGhpY1wiLFxyXG4gICAgICAgICAgXCJlc3JpL2dlb21ldHJ5L1BvaW50XCIsXHJcbiAgICAgICAgICBcImVzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZVwiLFxyXG4gICAgICAgICAgXCJlc3JpL3NtYXJ0TWFwcGluZy9yZW5kZXJlcnMvaGVhdG1hcFwiXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgY29uc3QgZ3JhcGhpY3MgPSBbXTtcclxuICAgICAgbGV0IGdyYXBoaWNJbmRleCA9IDA7XHJcbiAgICAgIGNvbnN0IGdlb2pzb25TcGF0aWFsUmVmZXJlbmNlID0gbmV3IFNwYXRpYWxSZWZlcmVuY2UoeyB3a2lkOiAxMDIxMDAgfSk7XHJcbiAgICAgIGNvbnN0IHZpZXdTcGF0aWFsUmVmZXJlbmNlID0gamltdU1hcFZpZXcudmlldy5zcGF0aWFsUmVmZXJlbmNlO1xyXG5cclxuICAgICAgZ2VvanNvbkRhdGEuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGZlYXR1cmUuZ2VvbWV0cnkudHlwZSA9PT0gXCJQb2ludFwiKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBuZXcgUG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgICB4OiBmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzBdLFxyXG4gICAgICAgICAgICAgICAgICB5OiBmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzFdLFxyXG4gICAgICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBnZW9qc29uU3BhdGlhbFJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICBncmFwaGljcy5wdXNoKG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7IE9CSkVDVElEOiBncmFwaGljSW5kZXgsIE5vbWJyZTogZmVhdHVyZS5wcm9wZXJ0aWVzPy5Ob21icmUgfHwgXCJTaW4gTm9tYnJlXCIgfSxcclxuICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgZ3JhcGhpY0luZGV4Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZ3JhcGhpY3MpO1xyXG5cclxuICAgICAgY29uc3QgaG90c3BvdExheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgICB0aXRsZTogXCJIb3RzcG90XCIsXHJcbiAgICAgICAgICBzb3VyY2U6IGdyYXBoaWNzLFxyXG4gICAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgICAgeyBuYW1lOiBcIk9iamVjdElEXCIsIGFsaWFzOiBcIk9iamVjdElEXCIsIHR5cGU6IFwib2lkXCIgfSxcclxuICAgICAgICAgICAgICB7IG5hbWU6IFwiTm9tYnJlXCIsIGFsaWFzOiBcIk5vbWJyZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgb2JqZWN0SWRGaWVsZDogXCJPYmplY3RJRFwiLFxyXG4gICAgICAgICAgZ2VvbWV0cnlUeXBlOiBcInBvaW50XCIsXHJcbiAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiB2aWV3U3BhdGlhbFJlZmVyZW5jZSxcclxuICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB7IHJlbmRlcmVyIH0gPSBhd2FpdCBoZWF0bWFwUmVuZGVyZXJDcmVhdG9yLmNyZWF0ZVJlbmRlcmVyKHtcclxuICAgICAgICAgIGxheWVyOiBob3RzcG90TGF5ZXIsIFxyXG4gICAgICAgICAgdmlldzogamltdU1hcFZpZXcudmlldywgXHJcbiAgICAgICAgICBibHVyUmFkaXVzOiA1LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlbmRlcmVyLnJlZmVyZW5jZVNjYWxlID0gamltdU1hcFZpZXcuc2NhbGU7IC8vIE9wY2lvbmFsOiByZXZpc2FyIHNpIGVzIG5lY2VzYXJpb1xyXG5cclxuXHJcblxyXG4gICAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChob3RzcG90TGF5ZXIpO1xyXG4gICAgICAgICAgaG90c3BvdExheWVyLndoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcuZ29Ubyhob3RzcG90TGF5ZXIuZnVsbEV4dGVudCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYXBhIGRlIHB1bnRvcyAnaG90c3BvdCcgY2FyZ2FkYSBjb3JyZWN0YW1lbnRlLlwiKTtcclxuICAgICAgICAgICAgICByZW5kZXJlci5yZWZlcmVuY2VTY2FsZSA9IGppbXVNYXBWaWV3LnZpZXcuc2NhbGU7XHJcbiAgICAgICAgICAgICAgaG90c3BvdExheWVyLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJqaW11TWFwVmlldyBubyBlc3TDoSBjb25maWd1cmFkby5cIik7XHJcbiAgICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWwgY2FyZ2FyIGxhIGNhcGE6XCIsIGVycm9yKTtcclxuICAgICAgYWxlcnQoXCJObyBzZSBwdWRvIGNhcmdhciBsYSBjYXBhLiBSZXZpc2EgbGEgVVJMIG8gbGEgY29uc29sYS5cIik7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgcG9saWdvbm9yZXN1bHRhbnRlID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IGltYWdlVXJsID0gXCJodHRwOi8vMTI3LjAuMC4xOjUwMDAvZ2VvcHJvY2Vzc19vdXRwdXQvdGVzdDQuZ2VvanNvblwiXHJcblxyXG4gICAgY29uc3QgbGF5ZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKGltYWdlVXJsKTtcclxuXHJcbiAgICBpZiAoIWxheWVyUmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBhbCBjb25zdWx0YXIgbGEgY2FwYTogJHtsYXllclJlc3BvbnNlLnN0YXR1c30gJHtsYXllclJlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2VvanNvbkRhdGEgPSBhd2FpdCBsYXllclJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBbRmVhdHVyZUxheWVyLCBHcmFwaGljLCBQb2x5Z29uLCBTaW1wbGVGaWxsU3ltYm9sXSA9IGF3YWl0IGxvYWRNb2R1bGVzKFtcclxuICAgICAgICBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiLFxyXG4gICAgICAgIFwiZXNyaS9HcmFwaGljXCIsXHJcbiAgICAgICAgXCJlc3JpL2dlb21ldHJ5L1BvbHlnb25cIixcclxuICAgICAgICBcImVzcmkvc3ltYm9scy9TaW1wbGVGaWxsU3ltYm9sXCJcclxuICAgIF0pO1xyXG5cclxuICAgIGNvbnN0IGNvbG9yUG9saWdvbiA9IG5ldyBTaW1wbGVGaWxsU3ltYm9sKHtcclxuICAgICAgICBjb2xvcjogWzI1NSwgMCwgMCwgMC41XSxcclxuICAgICAgICBvdXRsaW5lOiB7IGNvbG9yOiBbMjU1LCAwLCAwXSwgd2lkdGg6IDEgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgdGl0bGU6IFwiQ2FwYSBkZSBEZXNhc3RyZVwiLFxyXG4gICAgICAgIHNvdXJjZTogW10sXHJcbiAgICAgICAgb2JqZWN0SWRGaWVsZDogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6IFwiT0JKRUNUSURcIiwgYWxpYXM6IFwiT0JKRUNUSURcIiwgdHlwZTogXCJvaWRcIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiTm9tYnJlXCIsIGFsaWFzOiBcIk5vbWJyZVwiLCB0eXBlOiBcInN0cmluZ1wiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHJlbmRlcmVyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXHJcbiAgICAgICAgICAgIHN5bWJvbDogY29sb3JQb2xpZ29uXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ3JhcGhpY3MgPSBbXTtcclxuICAgIGxldCBncmFwaGljSW5kZXggPSAwOyAvLyBOdWV2byDDrW5kaWNlIHBhcmEgZ3LDoWZpY29zIMO6bmljb3NcclxuXHJcbiAgICBnZW9qc29uRGF0YS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKSA9PiB7XHJcbiAgICAgICAgbGV0IGdlb21ldHJpZXMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGZlYXR1cmUuZ2VvbWV0cnkudHlwZSA9PT0gXCJQb2x5Z29uXCIpIHtcclxuICAgICAgICAgICAgZ2VvbWV0cmllcy5wdXNoKG5ldyBQb2x5Z29uKHtcclxuICAgICAgICAgICAgICAgIHJpbmdzOiBmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzLFxyXG4gICAgICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogamltdU1hcFZpZXcudmlldy5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmUuZ2VvbWV0cnkudHlwZSA9PT0gXCJNdWx0aVBvbHlnb25cIikge1xyXG4gICAgICAgICAgICBmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzLmZvckVhY2gocG9seWdvbkNvb3JkaW5hdGVzID0+IHtcclxuICAgICAgICAgICAgICAgIGdlb21ldHJpZXMucHVzaChuZXcgUG9seWdvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgcmluZ3M6IHBvbHlnb25Db29yZGluYXRlcyxcclxuICAgICAgICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBqaW11TWFwVmlldy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZW9tZXRyaWVzLmZvckVhY2goZ2VvbWV0cnkgPT4ge1xyXG4gICAgICAgICAgICBncmFwaGljcy5wdXNoKG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBnZW9tZXRyeSxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgT0JKRUNUSUQ6IGdyYXBoaWNJbmRleCwgTm9tYnJlOiBmZWF0dXJlLnByb3BlcnRpZXM/Lk5vbWJyZSB8fCBcIlNpbiBOb21icmVcIiB9XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgZ3JhcGhpY0luZGV4Kys7IC8vIEluY3JlbWVudGEgZWwgw61uZGljZSBwYXJhIGNhZGEgZ3LDoWZpY29cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZlYXR1cmVMYXllci5zb3VyY2UgPSBncmFwaGljcztcclxuXHJcbiAgICBjb25zdCBleGlzdGluZ0xheWVyID0gamltdU1hcFZpZXcudmlldy5tYXAubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIudGl0bGUgPT09IFwiQ2FwYSBkZSBEZXNhc3RyZVwiKTtcclxuICAgIGlmIChleGlzdGluZ0xheWVyKSB7XHJcbiAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGV4aXN0aW5nTGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqaW11TWFwVmlldykge1xyXG4gICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChmZWF0dXJlTGF5ZXIpO1xyXG4gICAgICAgIGZlYXR1cmVMYXllci53aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5nb1RvKGZlYXR1cmVMYXllci5mdWxsRXh0ZW50KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGZWF0dXJlTGF5ZXIgY2FyZ2FkbyBjb3JyZWN0YW1lbnRlLlwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImppbXVNYXBWaWV3IG5vIGVzdMOhIGNvbmZpZ3VyYWRvLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBjYXJnYXIgZWwgSW1hZ2VyeVRpbGVMYXllcjpcIiwgZXJyb3IpO1xyXG4gICAgYWxlcnQoXCJObyBzZSBwdWRvIGNhcmdhciBsYSBjYXBhLiBSZXZpc2EgbGEgVVJMIG8gbGEgY29uc29sYS5cIik7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmNvbnN0IG1hc2NhcmFCQUkgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBjYXJnYXIgZWwgSW1hZ2VyeVRpbGVMYXllcjpcIiwgZXJyb3IpO1xyXG4gICAgYWxlcnQoXCJObyBzZSBwdWRvIGNhcmdhciBsYSBjYXBhLiBSZXZpc2EgbGEgVVJMIG8gbGEgY29uc29sYS5cIik7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGRldGVjY2lvbkRlQ2FtYmlvcyA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCBpbWFnZVVybCA9IFwiaHR0cDovLzEyNy4wLjAuMTo1MDAwL2dlb3Byb2Nlc3Nfb3V0cHV0L3Rlc3QxMi50aWZcIlxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQ2FyZ2FuZG8gaW1hZ2VuIGRlc2RlIFVSTDpcIiwgaW1hZ2VVcmwpO1xyXG5cclxuICAgIC8vIFZhbGlkYXIgbGEgVVJMIGNvbiB1bmEgc29saWNpdHVkIGZldGNoXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGltYWdlVXJsLCB7IG1ldGhvZDogXCJIRUFEXCIgfSk7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgYWwgdmFsaWRhciBsYSBVUkwuIEVzdGFkbzogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FyZ2FyIG3Ds2R1bG9zIG5lY2VzYXJpb3MgZGUgbGEgQVBJIGRlIEFyY0dJU1xyXG4gICAgY29uc3QgW1xyXG4gICAgICBcclxuICAgICAgSW1hZ2VyeVRpbGVMYXllcixcclxuICAgICAgUmFzdGVyRnVuY3Rpb24sXHJcbiAgICAgIFJhc3RlclN0cmV0Y2hSZW5kZXJlclxyXG5cclxuICAgIF0gPSBhd2FpdCBsb2FkTW9kdWxlcyhbXHJcbiAgICBcclxuICAgICAgXCJlc3JpL2xheWVycy9JbWFnZXJ5VGlsZUxheWVyXCIsXHJcbiAgICAgIFwiZXNyaS9sYXllcnMvc3VwcG9ydC9SYXN0ZXJGdW5jdGlvblwiLFxyXG4gICAgICBcImVzcmkvcmVuZGVyZXJzL1Jhc3RlclN0cmV0Y2hSZW5kZXJlclwiXHJcblxyXG4gICAgXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHJhc3RlckZ1bmN0aW9uTWFzayA9IG5ldyBSYXN0ZXJGdW5jdGlvbih7XHJcbiAgICAgIGZ1bmN0aW9uTmFtZTogXCJNYXNrXCIsIFxyXG4gICAgICBmdW5jdGlvbkFyZ3VtZW50czoge1xyXG4gICAgICAgIE5vRGF0YVZhbHVlczogWzAsIDAsIDMsIDBdLCBcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENyZWFyIGVsIEltYWdlcnlUaWxlTGF5ZXJcclxuICAgIGNvbnN0IGltYWdlcnlMYXllciA9IG5ldyBJbWFnZXJ5VGlsZUxheWVyKHtcclxuICAgICAgdXJsOiBpbWFnZVVybCxcclxuICAgICAgLy9yYXN0ZXJGdW5jdGlvbjogcmFzdGVyRnVuY3Rpb25NYXNrLFxyXG4gICAgICAvL29wYWNpdHk6IDAuN1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgUmFzdGVyU3RyZXRjaFJlbmRlcmVyKHtcclxuICAgICAgc3RyZXRjaFR5cGU6IFwibWluLW1heFwiLCBcclxuICAgICAgZ2FtbWE6IFsxLCAxLCAxXSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFzaWduYSBlbCByZW5kZXJlciBhIGxhIGNhcGFcclxuICAgIC8vaW1hZ2VyeUxheWVyLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcblxyXG4gICAgLy8gQWdyZWdhciBsYSBjYXBhIGFsIG1hcGFcclxuICAgIGlmIChqaW11TWFwVmlldykge1xyXG4gICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQoaW1hZ2VyeUxheWVyKTtcclxuICAgICAgaW1hZ2VyeUxheWVyLndoZW4oKCkgPT4ge1xyXG4gICAgICAgIGppbXVNYXBWaWV3LnZpZXcuZ29UbyhpbWFnZXJ5TGF5ZXIuZnVsbEV4dGVudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbWFnZXJ5VGlsZUxheWVyIGNhcmdhZG8gY29ycmVjdGFtZW50ZS5cIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcImppbXVNYXBWaWV3IG5vIGVzdMOhIGNvbmZpZ3VyYWRvLlwiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIGNhcmdhciBlbCBJbWFnZXJ5VGlsZUxheWVyOlwiLCBlcnJvcik7XHJcbiAgICBhbGVydChcIk5vIHNlIHB1ZG8gY2FyZ2FyIGxhIGNhcGEuIFJldmlzYSBsYSBVUkwgbyBsYSBjb25zb2xhLlwiKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWRlbW8gamltdS13aWRnZXQgbS0yXCI+XHJcbiAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgcHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XHJcbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2FkSW1hZ2VyeUxheWVyfT5DYXJnYXIgVElGRiBjb21vIEltYWdlcnlUaWxlTGF5ZXI8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=