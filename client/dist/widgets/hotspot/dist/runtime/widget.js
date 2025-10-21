System.register(["jimu-core","jimu-core/react","jimu-arcgis","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
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

/***/ "./your-extensions/widgets/hotspot/src/runtime/translations.ts":
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/hotspot/src/runtime/translations.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translations: () => (/* binding */ translations)
/* harmony export */ });
const translations = {
    es: {
        widgetLabel: "Detección de Infraestructura Afectada",
        blur: "Difuminar",
        density: "Densidad",
        warning: "Debe cargar datos antes de generar un mapa de calor",
        apply: "Aplicar",
        delete: "Eliminar"
    },
    en: {
        widgetLabel: "Detection of Affected Infrastructure",
        blur: "Blur",
        density: "Density",
        warning: "You must load data before generating a heat map",
        apply: "Apply",
        delete: "Delete"
    },
};


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
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/hotspot/src/runtime/widget.tsx ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/esm/esri-loader.js");
/* harmony import */ var _hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useLocale */ "./your-extensions/hooks/useLocale.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translations */ "./your-extensions/widgets/hotspot/src/runtime/translations.ts");
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
    const { t } = (0,_hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__.useLocale)(_translations__WEBPACK_IMPORTED_MODULE_6__.translations);
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [availableData, setAvailableData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [maxDensity, setMaxDensity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.319);
    const [minDensity, setMinDensity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [blur, setBlur] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(30);
    const [sourceLayer, setSourceLayer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isAplied, setIsAplied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const layerWatcher = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const activeViewChangeHandler = (jmv) => {
        setJimuMapView(jmv);
    };
    const handleApplyHeatmap = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!jimuMapView)
            return;
        const [FeatureLayer, Graphic, Point, SpatialReference, heatmapRendererCreator] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_4__.loadModules)([
            "esri/layers/FeatureLayer",
            "esri/Graphic",
            "esri/geometry/Point",
            "esri/geometry/SpatialReference",
            "esri/smartMapping/renderers/heatmap"
        ]);
        const layer = jimuMapView.view.map.allLayers.find(layer => {
            if (layer.type !== "feature")
                return false;
            if (layer.title === "Límite urbano Plan Regulador Comunal")
                return false;
            if (layer.title === "HotSpot")
                return false;
            // Subir en la jerarquía de parents
            let parent = layer.parent;
            let title = 'title' in parent ? parent.title : 'No title property';
            if (title === "Transporte")
                return false;
            if (title === "Infraestructura crítica")
                return false;
            if (title === "Combustibles")
                return false;
            if (title === "Transmisión eléctrica")
                return false;
            if (title === "Centrales de generación eléctrica")
                return false;
            return true;
        });
        if (!layer) {
            console.log("No se encontró ningún layer cargado.");
            return;
        }
        setSourceLayer(layer);
        const graphics = [];
        const geojsonSpatialReference = new SpatialReference({ wkid: 102100 });
        const source = Object(layer.source);
        if (!(source === null || source === void 0 ? void 0 : source.items)) {
            console.log("Layer no tiene items");
        }
        source.items.forEach((item) => {
            var _a;
            const point = new Point({
                x: item.geometry.x,
                y: item.geometry.y,
                spatialReference: geojsonSpatialReference
            });
            graphics.push(new Graphic({
                geometry: point,
                attributes: {
                    OBJECTID: item.attributes.OBJECTID,
                    Nombre: ((_a = item.attributes) === null || _a === void 0 ? void 0 : _a.NOMBRE) || "Sin Nombre"
                },
            }));
        });
        // Antes de crear, eliminar capa previa si existe
        removeHeatMap();
        const hotspot = new FeatureLayer({
            title: "HotSpot",
            source: graphics,
            objectIdField: 'OBJECTID',
            fields: [
                { name: "OBJECTID", alias: "OBJECTID", type: "oid" },
                { name: "Nombre", alias: "Nombre", type: "string" },
            ],
            geometryType: 'point',
            spatialReference: jimuMapView.view.spatialReference,
            opacity: 1
        });
        const renderer = {
            type: "heatmap",
            colorStops: [
                { color: [133, 193, 200, 0], ratio: 0 },
                { color: [133, 193, 200, 0], ratio: 0.01 },
                { color: [133, 193, 200, 255], ratio: 0.01 },
                { color: [133, 193, 200, 255], ratio: 0.01 },
                { color: [144, 161, 190, 255], ratio: 0.0925 },
                { color: [156, 129, 132, 255], ratio: 0.175 },
                { color: [167, 97, 170, 255], ratio: 0.2575 },
                { color: [175, 73, 128, 255], ratio: 0.34 },
                { color: [184, 48, 85, 255], ratio: 0.4225 },
                { color: [192, 24, 42, 255], ratio: 0.505 },
                { color: [200, 0, 0, 255], ratio: 0.5875 },
                { color: [211, 51, 0, 255], ratio: 0.67 },
                { color: [222, 102, 0, 255], ratio: 0.7525 },
                { color: [233, 153, 0, 255], ratio: 0.835 },
                { color: [244, 204, 0, 255], ratio: 0.9175 },
                { color: [255, 255, 0, 255], ratio: 1 },
            ],
            radius: 200,
        };
        let heatmapParams = {
            layer: hotspot,
            view: jimuMapView.view,
            renderer: renderer,
            blurRadius: blur,
            maxDensity: maxDensity,
            minDensity: minDensity,
            referenceScale: 3000,
        };
        heatmapRendererCreator.createRenderer(heatmapParams).then((response) => {
            hotspot.renderer = response.renderer;
            hotspot.listMode = "show";
            hotspot.visible = true;
            jimuMapView.view.map.add(hotspot);
        });
        setIsAplied(true);
    });
    // Detecta los cambios en los layers
    const handleLayerChange = () => {
        if (!jimuMapView)
            return;
        const layers = jimuMapView.view.map.allLayers.filter(layer => {
            if (layer.type !== "feature")
                return false;
            if (layer.title === "Límite urbano Plan Regulador Comunal")
                return false;
            if (layer.title === "HotSpot")
                return false;
            // Subir en la jerarquía de parents
            let parent = layer.parent;
            let title = 'title' in parent ? parent.title : 'No title property';
            if (title === "Transporte")
                return false;
            if (title === "Infraestructura crítica")
                return false;
            if (title === "Combustibles")
                return false;
            if (title === "Transmisión eléctrica")
                return false;
            if (title === "Centrales de generación eléctrica")
                return false;
            return true;
        });
        console.log("Layers filtrados:", layers);
        setAvailableData(layers);
    };
    // Detecta los cambios en los dataSources
    const handleDataSourceChange = () => {
        if (!jimuMapView)
            return;
        const dataSources = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSourcesAsArray();
        console.log("DataSources actuales:", dataSources);
    };
    // Elimina el heatmap
    const removeHeatMap = () => {
        if (!jimuMapView)
            return;
        const layer = jimuMapView.view.map.allLayers.find(layer => layer.title === "HotSpot");
        if (layer) {
            jimuMapView.view.map.remove(layer);
            setIsAplied(false);
        }
    };
    // Elimina el heatmap y lo vuelve a generar
    const regenerateHeatmap = () => {
        removeHeatMap();
        handleApplyHeatmap();
    };
    // Debounce para evitar que se ejecute la función demasiadas veces
    const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    };
    // Detecta si el layer fuente es removido
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!jimuMapView)
            return;
        if (layerWatcher.current)
            layerWatcher.current.remove();
        layerWatcher.current = jimuMapView.view.map.allLayers.on('change', () => {
            const stillExists = jimuMapView.view.map.allLayers.find(l => l === sourceLayer);
            if (!stillExists && sourceLayer) {
                console.log('⚠️ Layer fuente ha sido eliminado.');
                removeHeatMap();
                setSourceLayer(null);
            }
            handleLayerChange();
        });
        return () => {
            if (layerWatcher.current)
                layerWatcher.current.remove();
        };
    }, [jimuMapView, sourceLayer]);
    // // Detecta los cambios del extend y vuelve a generar el heatmap
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!jimuMapView)
            return;
        const debouncedRegenerate = debounce(() => {
            if (availableData.length > 0) {
                regenerateHeatmap();
            }
        }, 1000);
        const extentWatcher = jimuMapView.view.watch("extent", () => {
            if (isAplied)
                debouncedRegenerate();
        });
        return () => {
            extentWatcher.remove();
        };
    }, [jimuMapView, availableData, blur, maxDensity, minDensity]);
    // Detecta cada vez que cambia el mapa o los dataSources
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!jimuMapView)
            return;
        handleLayerChange();
        handleDataSourceChange();
    }, [jimuMapView]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "jimu-widget" },
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: activeViewChangeHandler })),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'heatmap-main-container' }, availableData.length === 0 ?
            (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'heatmap-container p-4' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h5", null, t("warning"))))
            :
                (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'heatmap-container p-4' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'heatmap-settings' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { htmlFor: "blur" }, t("blur")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.NumericInput, { type: 'text', value: blur, onChange: (e) => setBlur(e) })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'heatmap-settings' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { htmlFor: "maxDensity" },
                            "Max ",
                            t("density")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.NumericInput, { type: 'text', value: maxDensity, onChange: (e) => setMaxDensity(e) })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'heatmap-settings' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { htmlFor: "minDensity" },
                            "Min ",
                            t("density")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.NumericInput, { type: 'text', value: minDensity, onChange: (e) => setMinDensity(e) })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'heatmap-buttons d-flex justify-content-around mt-3' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { type: 'primary', size: "sm", onClick: () => handleApplyHeatmap() },
                            t("apply"),
                            " hotspot"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { type: 'primary', size: "sm", onClick: () => removeHeatMap() },
                            t("delete"),
                            " hotspot"))))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jmv) => setJimuMapView(jmv) })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9ob3RzcG90L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ007QUFDc0M7QUFDeEM7QUFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCakI7QUFDQTtBQUMyRDtBQUN6QjtBQUNsQztBQUNBO0FBQ0EsZUFBZSxvREFBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1QkFBdUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQLHdDQUF3QztBQUN4QyxTQUFTLGlEQUFRO0FBQ2pCO0FBQ0EscUJBQXFCLGtEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1EQUFVLHVDQUF1QyxpQ0FBaUM7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDc0M7QUFDSjtBQUNNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQ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QUU7Z0JBQzVDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtnQkFDOUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO2dCQUM3QyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7Z0JBQzdDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtnQkFDM0MsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO2dCQUM1QyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7Z0JBQzNDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtnQkFDMUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2dCQUN6QyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7Z0JBQzVDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVB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RUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9lc3JpLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy9jc3MuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL3V0aWxzL3VybC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL2hvb2tzL3VzZUxvY2FsZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaG90c3BvdC9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2hvdHNwb3Qvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb3B5cmlnaHQgKGMpIDIwMjIgRXNyaVxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuLy8gcmUtZXhwb3J0IHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgcGFydCBvZiB0aGUgcHVibGljIEFQSVxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuZXhwb3J0IHsgbG9hZE1vZHVsZXMgfSBmcm9tICcuL21vZHVsZXMnO1xuZXhwb3J0IHsgZ2V0U2NyaXB0LCBpc0xvYWRlZCwgbG9hZFNjcmlwdCwgc2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL3NjcmlwdCc7XG5leHBvcnQgeyBsb2FkQ3NzIH0gZnJvbSAnLi91dGlscy9jc3MnO1xuZXhwb3J0IHsgdXRpbHMgfTtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBnZXRTY3JpcHQsIGlzTG9hZGVkLCBsb2FkU2NyaXB0IH0gZnJvbSAnLi9zY3JpcHQnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuLy8gd3JhcCBEb2pvJ3MgcmVxdWlyZSgpIGluIGEgcHJvbWlzZVxuZnVuY3Rpb24gcmVxdWlyZU1vZHVsZXMobW9kdWxlcykge1xuICAgIHJldHVybiBuZXcgdXRpbHMuUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIGxvYWRpbmcgdGhlIGVzcmkvZG9qbyBzY3JpcHRzLCByZWplY3Qgd2l0aCB0aGUgZXJyb3IuXG4gICAgICAgIHZhciBlcnJvckhhbmRsZXIgPSB3aW5kb3dbJ3JlcXVpcmUnXS5vbignZXJyb3InLCByZWplY3QpO1xuICAgICAgICB3aW5kb3dbJ3JlcXVpcmUnXShtb2R1bGVzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZW1vdmUgZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgZXJyb3JIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgLy8gUmVzb2x2ZSB3aXRoIHRoZSBwYXJhbWV0ZXJzIGZyb20gZG9qbyByZXF1aXJlIGFzIGFuIGFycmF5LlxuICAgICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYXJyYXkgb2YgdGhlIHJlcXVpcmVkIG1vZHVsZXNcbi8vIGFsc28gd2lsbCBhdHRlbXB0IHRvIGxhenkgbG9hZCB0aGUgQXJjR0lTIEFQSSBpZiBpdCBoYXMgbm90IGFscmVhZHkgYmVlbiBsb2FkZWRcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTW9kdWxlcyhtb2R1bGVzLCBsb2FkU2NyaXB0T3B0aW9ucykge1xuICAgIGlmIChsb2FkU2NyaXB0T3B0aW9ucyA9PT0gdm9pZCAwKSB7IGxvYWRTY3JpcHRPcHRpb25zID0ge307IH1cbiAgICBpZiAoIWlzTG9hZGVkKCkpIHtcbiAgICAgICAgLy8gc2NyaXB0IGlzIG5vdCB5ZXQgbG9hZGVkLCBpcyBpdCBpbiB0aGUgcHJvY2VzcyBvZiBsb2FkaW5nP1xuICAgICAgICB2YXIgc2NyaXB0ID0gZ2V0U2NyaXB0KCk7XG4gICAgICAgIHZhciBzcmMgPSBzY3JpcHQgJiYgc2NyaXB0LmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGlmICghbG9hZFNjcmlwdE9wdGlvbnMudXJsICYmIHNyYykge1xuICAgICAgICAgICAgLy8gc2NyaXB0IGlzIHN0aWxsIGxvYWRpbmcgYW5kIHVzZXIgZGlkIG5vdCBzcGVjaWZ5IGEgVVJMXG4gICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBkZWZhdWx0IHRvIHRoZSBVUkwgdGhhdCdzIGJlaW5nIGxvYWRlZFxuICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBkZWZhdWx0aW5nIHRvIHRoZSBsYXRlc3QgNC54IFVSTFxuICAgICAgICAgICAgbG9hZFNjcmlwdE9wdGlvbnMudXJsID0gc3JjO1xuICAgICAgICB9XG4gICAgICAgIC8vIGF0dGVtcHQgdG8gbG9hZCB0aGUgc2NyaXB0IHRoZW4gbG9hZCB0aGUgbW9kdWxlc1xuICAgICAgICByZXR1cm4gbG9hZFNjcmlwdChsb2FkU2NyaXB0T3B0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKTsgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBzY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQsIGp1c3QgbG9hZCB0aGUgbW9kdWxlc1xuICAgICAgICByZXR1cm4gcmVxdWlyZU1vZHVsZXMobW9kdWxlcyk7XG4gICAgfVxufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGxvYWRDc3MgfSBmcm9tICcuL3V0aWxzL2Nzcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBnZXRDZG5VcmwgfSBmcm9tICcuL3V0aWxzL3VybCc7XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmZ1bmN0aW9uIGNyZWF0ZVNjcmlwdCh1cmwpIHtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBzY3JpcHQuc3JjID0gdXJsO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXNyaS1sb2FkZXInLCAnbG9hZGluZycpO1xuICAgIHJldHVybiBzY3JpcHQ7XG59XG4vLyBhZGQgYSBvbmUtdGltZSBsb2FkIGhhbmRsZXIgdG8gc2NyaXB0XG4vLyBhbmQgb3B0aW9uYWxseSBhZGQgYSBvbmUgdGltZSBlcnJvciBoYW5kbGVyIGFzIHdlbGxcbmZ1bmN0aW9uIGhhbmRsZVNjcmlwdExvYWQoc2NyaXB0LCBjYWxsYmFjaywgZXJyYmFjaykge1xuICAgIHZhciBvblNjcmlwdEVycm9yO1xuICAgIGlmIChlcnJiYWNrKSB7XG4gICAgICAgIC8vIHNldCB1cCBhbiBlcnJvciBoYW5kbGVyIGFzIHdlbGxcbiAgICAgICAgb25TY3JpcHRFcnJvciA9IGhhbmRsZVNjcmlwdEVycm9yKHNjcmlwdCwgZXJyYmFjayk7XG4gICAgfVxuICAgIHZhciBvblNjcmlwdExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHBhc3MgdGhlIHNjcmlwdCB0byB0aGUgY2FsbGJhY2tcbiAgICAgICAgY2FsbGJhY2soc2NyaXB0KTtcbiAgICAgICAgLy8gcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvblNjcmlwdExvYWQsIGZhbHNlKTtcbiAgICAgICAgaWYgKG9uU2NyaXB0RXJyb3IpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZXJyb3IgbGlzdGVuZXIgYXMgd2VsbFxuICAgICAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25TY3JpcHRFcnJvciwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uU2NyaXB0TG9hZCwgZmFsc2UpO1xufVxuLy8gYWRkIGEgb25lLXRpbWUgZXJyb3IgaGFuZGxlciB0byB0aGUgc2NyaXB0XG5mdW5jdGlvbiBoYW5kbGVTY3JpcHRFcnJvcihzY3JpcHQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG9uU2NyaXB0RXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyByZWplY3QgdGhlIHByb21pc2UgYW5kIHJlbW92ZSB0aGlzIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGNhbGxiYWNrKGUuZXJyb3IgfHwgbmV3IEVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIGF0dGVtcHRpbmcgdG8gbG9hZCBcIi5jb25jYXQoc2NyaXB0LnNyYykpKTtcbiAgICAgICAgLy8gcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25TY3JpcHRFcnJvciwgZmFsc2UpO1xuICAgIH07XG4gICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25TY3JpcHRFcnJvciwgZmFsc2UpO1xuICAgIHJldHVybiBvblNjcmlwdEVycm9yO1xufVxuLy8gYWxsb3cgdGhlIHVzZXIgdG8gY29uZmlndXJlIGRlZmF1bHQgc2NyaXB0IG9wdGlvbnMgcmF0aGVyIHRoYW4gcGFzc2luZyBvcHRpb25zIHRvIGBsb2FkTW9kdWxlc2AgZWFjaCB0aW1lXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgZGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zO1xufVxuLy8gZ2V0IHRoZSBzY3JpcHQgaW5qZWN0ZWQgYnkgdGhpcyBsaWJyYXJ5XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyaXB0KCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1lc3JpLWxvYWRlcl0nKTtcbn1cbi8vIGhhcyBBcmNHSVMgQVBJIGJlZW4gbG9hZGVkIG9uIHRoZSBwYWdlIHlldD9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvYWRlZCgpIHtcbiAgICB2YXIgZ2xvYmFsUmVxdWlyZSA9IHdpbmRvd1sncmVxdWlyZSddO1xuICAgIC8vIC5vbigpIGVuc3VyZXMgdGhhdCBpdCdzIERvam8ncyBBTUQgbG9hZGVyXG4gICAgcmV0dXJuIGdsb2JhbFJlcXVpcmUgJiYgZ2xvYmFsUmVxdWlyZS5vbjtcbn1cbi8vIGxvYWQgdGhlIEFyY0dJUyBBUEkgb24gdGhlIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBsb2FkU2NyaXB0KG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIC8vIHdlIHdvdWxkIGhhdmUgbGlrZWQgdG8gdXNlIHNwcmVhZCBsaWtlIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfVxuICAgIC8vIGJ1dCBUUyB3b3VsZCBpbmplY3QgYSBwb2x5ZmlsbCB0aGF0IHdvdWxkIHJlcXVpcmUgdXNlIHRvIGNvbmZpZ3VyZSByb2xsdXAgdyBjb250ZW50OiAnd2luZG93J1xuICAgIC8vIGlmIHdlIGhhdmUgYW5vdGhlciBvY2Nhc2lvbiB0byB1c2Ugc3ByZWFkLCBsZXQncyBkbyB0aGF0IGFuZCByZXBsYWNlIHRoaXMgZm9yLi4uaW5cbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIFtkZWZhdWx0T3B0aW9ucywgb3B0aW9uc10uZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICBvcHRzW3Byb3BdID0gb2JqW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gVVJMIHRvIGxvYWRcbiAgICB2YXIgdmVyc2lvbiA9IG9wdHMudmVyc2lvbjtcbiAgICB2YXIgdXJsID0gb3B0cy51cmwgfHwgZ2V0Q2RuVXJsKHZlcnNpb24pO1xuICAgIHJldHVybiBuZXcgdXRpbHMuUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBzY3JpcHQgPSBnZXRTY3JpcHQoKTtcbiAgICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICAgICAgLy8gdGhlIEFQSSBpcyBhbHJlYWR5IGxvYWRlZCBvciBpbiB0aGUgcHJvY2VzcyBvZiBsb2FkaW5nLi4uXG4gICAgICAgICAgICAvLyBOT1RFOiBoYXZlIHRvIHRlc3QgYWdhaW5zdCBzY3IgYXR0cmlidXRlIHZhbHVlLCBub3Qgc2NyaXB0LnNyY1xuICAgICAgICAgICAgLy8gYi9jIHRoZSBsYXR0ZXIgd2lsbCByZXR1cm4gdGhlIGZ1bGwgdXJsIGZvciByZWxhdGl2ZSBwYXRoc1xuICAgICAgICAgICAgdmFyIHNyYyA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICAgICAgaWYgKHNyYyAhPT0gdXJsKSB7XG4gICAgICAgICAgICAgICAgLy8gcG90ZW50aWFsbHkgdHJ5aW5nIHRvIGxvYWQgYSBkaWZmZXJlbnQgdmVyc2lvbiBvZiB0aGUgQVBJXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0IGlzIGFscmVhZHkgbG9hZGVkIChcIi5jb25jYXQoc3JjLCBcIikuXCIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc2NyaXB0IGhhcyBhbHJlYWR5IHN1Y2Nlc3NmdWxseSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzY3JpcHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgdGhlIHNjcmlwdCB0byBsb2FkIGFuZCB0aGVuIHJlc29sdmVcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgQVBJIGhhcyBiZWVuIGxvYWRlZCBieSBzb21lIG90aGVyIG1lYW5zXG4gICAgICAgICAgICAgICAgLy8gcG90ZW50aWFsbHkgdHJ5aW5nIHRvIGxvYWQgYSBkaWZmZXJlbnQgdmVyc2lvbiBvZiB0aGUgQVBJXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0IGlzIGFscmVhZHkgbG9hZGVkLlwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIGF0dGVtcHRpbmcgdG8gbG9hZCB0aGUgQVBJXG4gICAgICAgICAgICAgICAgdmFyIGNzcyA9IG9wdHMuY3NzO1xuICAgICAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZVZlcnNpb24gPSBjc3MgPT09IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxvYWQgdGhlIGNzcyBiZWZvcmUgbG9hZGluZyB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIGxvYWRDc3ModXNlVmVyc2lvbiA/IHZlcnNpb24gOiBjc3MsIG9wdHMuaW5zZXJ0Q3NzQmVmb3JlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgc2NyaXB0IG9iamVjdCB3aG9zZSBzb3VyY2UgcG9pbnRzIHRvIHRoZSBBUElcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBjcmVhdGVTY3JpcHQodXJsKTtcbiAgICAgICAgICAgICAgICAvLyBfY3VycmVudFVybCA9IHVybDtcbiAgICAgICAgICAgICAgICAvLyBvbmNlIHRoZSBzY3JpcHQgaXMgbG9hZGVkLi4uXG4gICAgICAgICAgICAgICAgaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBzdGF0dXMgb2YgdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLWVzcmktbG9hZGVyJywgJ2xvYWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAvLyBsb2FkIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG5pbXBvcnQgeyBnZXRDZG5Dc3NVcmwsIHBhcnNlVmVyc2lvbiB9IGZyb20gJy4vdXJsJztcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlc2hlZXRMaW5rKGhyZWYpIHtcbiAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgIHJldHVybiBsaW5rO1xufVxuZnVuY3Rpb24gaW5zZXJ0TGluayhsaW5rLCBiZWZvcmUpIHtcbiAgICBpZiAoYmVmb3JlKSB7XG4gICAgICAgIC8vIHRoZSBsaW5rIHNob3VsZCBiZSBpbnNlcnRlZCBiZWZvcmUgYSBzcGVjaWZpYyBub2RlXG4gICAgICAgIHZhciBiZWZvcmVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihiZWZvcmUpO1xuICAgICAgICBiZWZvcmVOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGJlZm9yZU5vZGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gYXBwZW5kIHRoZSBsaW5rIHRvIHRoZW4gZW5kIG9mIHRoZSBoZWFkIHRhZ1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH1cbn1cbi8vIGNoZWNrIGlmIHRoZSBjc3MgdXJsIGhhcyBiZWVuIGluamVjdGVkIG9yIGFkZGVkIG1hbnVhbGx5XG5mdW5jdGlvbiBnZXRDc3ModXJsKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW2hyZWYqPVxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJdXCIpKTtcbn1cbmZ1bmN0aW9uIGdldENzc1VybCh1cmxPclZlcnNpb24pIHtcbiAgICByZXR1cm4gIXVybE9yVmVyc2lvbiB8fCBwYXJzZVZlcnNpb24odXJsT3JWZXJzaW9uKVxuICAgICAgICAvLyBpZiBpdCdzIGEgdmFsaWQgdmVyc2lvbiBzdHJpbmcgcmV0dXJuIHRoZSBDRE4gVVJMXG4gICAgICAgID8gZ2V0Q2RuQ3NzVXJsKHVybE9yVmVyc2lvbilcbiAgICAgICAgLy8gb3RoZXJ3aXNlIGFzc3VtZSBpdCdzIGEgVVJMIGFuZCByZXR1cm4gdGhhdFxuICAgICAgICA6IHVybE9yVmVyc2lvbjtcbn1cbi8vIGxhenkgbG9hZCB0aGUgQ1NTIG5lZWRlZCBmb3IgdGhlIEFyY0dJUyBBUElcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ3NzKHVybE9yVmVyc2lvbiwgYmVmb3JlKSB7XG4gICAgdmFyIHVybCA9IGdldENzc1VybCh1cmxPclZlcnNpb24pO1xuICAgIHZhciBsaW5rID0gZ2V0Q3NzKHVybCk7XG4gICAgaWYgKCFsaW5rKSB7XG4gICAgICAgIC8vIGNyZWF0ZSAmIGxvYWQgdGhlIGNzcyBsaW5rXG4gICAgICAgIGxpbmsgPSBjcmVhdGVTdHlsZXNoZWV0TGluayh1cmwpO1xuICAgICAgICBpbnNlcnRMaW5rKGxpbmssIGJlZm9yZSk7XG4gICAgfVxuICAgIHJldHVybiBsaW5rO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbi8vIGFsbG93IGNvbnN1bWluZyBsaWJyYXJpZXMgdG8gcHJvdmlkZSB0aGVpciBvd24gUHJvbWlzZSBpbXBsZW1lbnRhdGlvbnNcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBQcm9taXNlOiBpc0Jyb3dzZXIgPyB3aW5kb3dbJ1Byb21pc2UnXSA6IHVuZGVmaW5lZFxufTtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAyMiBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4gKiBBcGFjaGUtMi4wICovXG52YXIgREVGQVVMVF9WRVJTSU9OID0gJzQuMjUnO1xudmFyIE5FWFQgPSAnbmV4dCc7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VWZXJzaW9uKHZlcnNpb24pIHtcbiAgICBpZiAodmVyc2lvbi50b0xvd2VyQ2FzZSgpID09PSBORVhUKSB7XG4gICAgICAgIHJldHVybiBORVhUO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSB2ZXJzaW9uICYmIHZlcnNpb24ubWF0Y2goL14oXFxkKVxcLihcXGQrKS8pO1xuICAgIHJldHVybiBtYXRjaCAmJiB7XG4gICAgICAgIG1ham9yOiBwYXJzZUludChtYXRjaFsxXSwgMTApLFxuICAgICAgICBtaW5vcjogcGFyc2VJbnQobWF0Y2hbMl0sIDEwKVxuICAgIH07XG59XG4vKipcbiAqIEdldCB0aGUgQ0ROIHVybCBmb3IgYSBnaXZlbiB2ZXJzaW9uXG4gKlxuICogQHBhcmFtIHZlcnNpb24gRXg6ICc0LjI1JyBvciAnMy40MicuIERlZmF1bHRzIHRvIHRoZSBsYXRlc3QgNC54IHZlcnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5VcmwodmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uID09PSB2b2lkIDApIHsgdmVyc2lvbiA9IERFRkFVTFRfVkVSU0lPTjsgfVxuICAgIHJldHVybiBcImh0dHBzOi8vanMuYXJjZ2lzLmNvbS9cIi5jb25jYXQodmVyc2lvbiwgXCIvXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIENETiB1cmwgZm9yIGEgdGhlIENTUyBmb3IgYSBnaXZlbiB2ZXJzaW9uIGFuZC9vciB0aGVtZVxuICpcbiAqIEBwYXJhbSB2ZXJzaW9uIEV4OiAnNC4yNScsICczLjQyJywgb3IgJ25leHQnLiBEZWZhdWx0cyB0byB0aGUgbGF0ZXN0IDQueCB2ZXJzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2RuQ3NzVXJsKHZlcnNpb24pIHtcbiAgICBpZiAodmVyc2lvbiA9PT0gdm9pZCAwKSB7IHZlcnNpb24gPSBERUZBVUxUX1ZFUlNJT047IH1cbiAgICB2YXIgYmFzZVVybCA9IGdldENkblVybCh2ZXJzaW9uKTtcbiAgICB2YXIgcGFyc2VkVmVyc2lvbiA9IHBhcnNlVmVyc2lvbih2ZXJzaW9uKTtcbiAgICBpZiAocGFyc2VkVmVyc2lvbiAhPT0gTkVYVCAmJiBwYXJzZWRWZXJzaW9uLm1ham9yID09PSAzKSB7XG4gICAgICAgIC8vIE5PVEU6IGF0IDMuMTEgdGhlIENTUyBtb3ZlZCBmcm9tIHRoZSAvanMgZm9sZGVyIHRvIHRoZSByb290XG4gICAgICAgIHZhciBwYXRoID0gcGFyc2VkVmVyc2lvbi5taW5vciA8PSAxMCA/ICdqcy8nIDogJyc7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChiYXNlVXJsKS5jb25jYXQocGF0aCwgXCJlc3JpL2Nzcy9lc3JpLmNzc1wiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGFzc3VtZSA0LnhcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiZXNyaS90aGVtZXMvbGlnaHQvbWFpbi5jc3NcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsZSh0cmFuc2xhdGlvbnMpIHtcclxuICAvLyBEZXRlY3RhIGxvY2FsZSBkZXNkZSBsYSBVUkwgKD9sb2NhbGU9ZW4pIG8gZmFsbGJhY2sgYSBcImVzXCJcclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gIGNvbnN0IGxvY2FsZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJsb2NhbGVcIikgfHwgXCJlc1wiO1xyXG5cclxuICBjb25zdCB0ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gKGtleToga2V5b2YgdHlwZW9mIHRyYW5zbGF0aW9uc1tcImVzXCJdKSA9PlxyXG4gICAgICB0cmFuc2xhdGlvbnNbbG9jYWxlIGFzIFwiZXNcIiB8IFwiZW5cIl1ba2V5XSA/PyBrZXk7XHJcbiAgfSwgW2xvY2FsZV0pO1xyXG5cclxuICByZXR1cm4geyB0LCBsb2NhbGUgfTtcclxufSIsImV4cG9ydCBjb25zdCB0cmFuc2xhdGlvbnMgPSB7XHJcbiAgZXM6IHtcclxuICAgIHdpZGdldExhYmVsOiBcIkRldGVjY2nDs24gZGUgSW5mcmFlc3RydWN0dXJhIEFmZWN0YWRhXCIsXHJcbiAgICBibHVyOiBcIkRpZnVtaW5hclwiLFxyXG4gICAgZGVuc2l0eTogXCJEZW5zaWRhZFwiLFxyXG4gICAgd2FybmluZzogXCJEZWJlIGNhcmdhciBkYXRvcyBhbnRlcyBkZSBnZW5lcmFyIHVuIG1hcGEgZGUgY2Fsb3JcIixcclxuICAgIGFwcGx5OiBcIkFwbGljYXJcIixcclxuICAgIGRlbGV0ZTogXCJFbGltaW5hclwiXHJcbiAgfSxcclxuICBlbjoge1xyXG4gICAgd2lkZ2V0TGFiZWw6IFwiRGV0ZWN0aW9uIG9mIEFmZmVjdGVkIEluZnJhc3RydWN0dXJlXCIsXHJcbiAgICBibHVyOiBcIkJsdXJcIixcclxuICAgIGRlbnNpdHk6IFwiRGVuc2l0eVwiLFxyXG4gICAgd2FybmluZzogXCJZb3UgbXVzdCBsb2FkIGRhdGEgYmVmb3JlIGdlbmVyYXRpbmcgYSBoZWF0IG1hcFwiLFxyXG4gICAgYXBwbHk6IFwiQXBwbHlcIixcclxuICAgIGRlbGV0ZTogXCJEZWxldGVcIlxyXG4gIH0sXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IEFsbFdpZGdldFByb3BzLCBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcyc7XHJcblxyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ0BhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZU1hbmFnZXIgfSBmcm9tICdqaW11LWNvcmUnO1xyXG5pbXBvcnQgeyBCdXR0b24sIE51bWVyaWNJbnB1dCB9IGZyb20gJ2ppbXUtdWknO1xyXG5pbXBvcnQgeyBsb2FkTW9kdWxlcyB9IGZyb20gJ2VzcmktbG9hZGVyJztcclxuXHJcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9ob29rcy91c2VMb2NhbGVcIjtcclxuaW1wb3J0IHsgdHJhbnNsYXRpb25zIH0gZnJvbSAnLi90cmFuc2xhdGlvbnMnO1xyXG5cclxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczx1bmtub3duPikgPT4ge1xyXG5cclxuICBjb25zdCB7IHQgfSA9IHVzZUxvY2FsZSh0cmFuc2xhdGlvbnMpO1xyXG5cclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3PihudWxsKTtcclxuICBjb25zdCBbYXZhaWxhYmxlRGF0YSwgc2V0QXZhaWxhYmxlRGF0YV0gPSB1c2VTdGF0ZTxhbnkgfCBudWxsPihbXSlcclxuICBjb25zdCBbbWF4RGVuc2l0eSwgc2V0TWF4RGVuc2l0eV0gPSB1c2VTdGF0ZTxudW1iZXI+KDAuMzE5KVxyXG4gIGNvbnN0IFttaW5EZW5zaXR5LCBzZXRNaW5EZW5zaXR5XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcclxuICBjb25zdCBbYmx1ciwgc2V0Qmx1cl0gPSB1c2VTdGF0ZTxudW1iZXI+KDMwKVxyXG4gIGNvbnN0IFtzb3VyY2VMYXllciwgc2V0U291cmNlTGF5ZXJdID0gdXNlU3RhdGU8RmVhdHVyZUxheWVyIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2lzQXBsaWVkLCBzZXRJc0FwbGllZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgbGF5ZXJXYXRjaGVyID0gdXNlUmVmPGFueT4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdikgPT4ge1xyXG4gICAgc2V0SmltdU1hcFZpZXcoam12KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBcHBseUhlYXRtYXAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWppbXVNYXBWaWV3KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgW1xyXG4gICAgICBGZWF0dXJlTGF5ZXIsXHJcbiAgICAgIEdyYXBoaWMsXHJcbiAgICAgIFBvaW50LFxyXG4gICAgICBTcGF0aWFsUmVmZXJlbmNlLFxyXG4gICAgICBoZWF0bWFwUmVuZGVyZXJDcmVhdG9yXHJcbiAgICBdID0gYXdhaXQgbG9hZE1vZHVsZXMoW1xyXG4gICAgICBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiLFxyXG4gICAgICBcImVzcmkvR3JhcGhpY1wiLFxyXG4gICAgICBcImVzcmkvZ2VvbWV0cnkvUG9pbnRcIixcclxuICAgICAgXCJlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2VcIixcclxuICAgICAgXCJlc3JpL3NtYXJ0TWFwcGluZy9yZW5kZXJlcnMvaGVhdG1hcFwiXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IGxheWVyID0gamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZpbmQobGF5ZXIgPT57XHJcbiAgICAgIGlmIChsYXllci50eXBlICE9PSBcImZlYXR1cmVcIikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZiAobGF5ZXIudGl0bGUgPT09IFwiTMOtbWl0ZSB1cmJhbm8gUGxhbiBSZWd1bGFkb3IgQ29tdW5hbFwiKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmIChsYXllci50aXRsZSA9PT0gXCJIb3RTcG90XCIpIHJldHVybiBmYWxzZTtcclxuICBcclxuICAgICAgLy8gU3ViaXIgZW4gbGEgamVyYXJxdcOtYSBkZSBwYXJlbnRzXHJcbiAgICAgIGxldCBwYXJlbnQgPSBsYXllci5wYXJlbnQ7XHJcbiAgICAgIGxldCB0aXRsZSA9ICd0aXRsZScgaW4gcGFyZW50ID8gcGFyZW50LnRpdGxlOiAnTm8gdGl0bGUgcHJvcGVydHknXHJcbiAgICAgIGlmKHRpdGxlID09PSBcIlRyYW5zcG9ydGVcIikgcmV0dXJuIGZhbHNlXHJcbiAgICAgIGlmKHRpdGxlID09PSBcIkluZnJhZXN0cnVjdHVyYSBjcsOtdGljYVwiKSByZXR1cm4gZmFsc2VcclxuICAgICAgaWYodGl0bGUgPT09IFwiQ29tYnVzdGlibGVzXCIpIHJldHVybiBmYWxzZVxyXG4gICAgICBpZih0aXRsZSA9PT0gXCJUcmFuc21pc2nDs24gZWzDqWN0cmljYVwiKSByZXR1cm4gZmFsc2VcclxuICAgICAgaWYodGl0bGUgPT09IFwiQ2VudHJhbGVzIGRlIGdlbmVyYWNpw7NuIGVsw6ljdHJpY2FcIikgcmV0dXJuIGZhbHNlXHJcbiAgXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICBcclxuICAgfSApIGFzIEZlYXR1cmVMYXllcjtcclxuXHJcbiAgICBpZiAoIWxheWVyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gc2UgZW5jb250csOzIG5pbmfDum4gbGF5ZXIgY2FyZ2Fkby5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldFNvdXJjZUxheWVyKGxheWVyKVxyXG5cclxuICAgIGNvbnN0IGdyYXBoaWNzID0gW107XHJcbiAgICBjb25zdCBnZW9qc29uU3BhdGlhbFJlZmVyZW5jZSA9IG5ldyBTcGF0aWFsUmVmZXJlbmNlKHsgd2tpZDogMTAyMTAwIH0pO1xyXG5cclxuICAgIGNvbnN0IHNvdXJjZSA9IE9iamVjdChsYXllci5zb3VyY2UpXHJcbiAgICBpZiAoIXNvdXJjZT8uaXRlbXMpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJMYXllciBubyB0aWVuZSBpdGVtc1wiKVxyXG4gICAgfVxyXG5cclxuICAgIHNvdXJjZS5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCBwb2ludCA9IG5ldyBQb2ludCh7XHJcbiAgICAgICAgeDogaXRlbS5nZW9tZXRyeS54LFxyXG4gICAgICAgIHk6IGl0ZW0uZ2VvbWV0cnkueSxcclxuICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBnZW9qc29uU3BhdGlhbFJlZmVyZW5jZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGdyYXBoaWNzLnB1c2gobmV3IEdyYXBoaWMoe1xyXG4gICAgICAgIGdlb21ldHJ5OiBwb2ludCxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBPQkpFQ1RJRDogaXRlbS5hdHRyaWJ1dGVzLk9CSkVDVElELFxyXG4gICAgICAgICAgTm9tYnJlOiBpdGVtLmF0dHJpYnV0ZXM/Lk5PTUJSRSB8fCBcIlNpbiBOb21icmVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pKTtcclxuICAgIH0pO1xyXG4gICAgLy8gQW50ZXMgZGUgY3JlYXIsIGVsaW1pbmFyIGNhcGEgcHJldmlhIHNpIGV4aXN0ZVxyXG4gICAgcmVtb3ZlSGVhdE1hcCgpO1xyXG5cclxuXHJcbiAgICBjb25zdCBob3RzcG90ID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgIHRpdGxlOiBcIkhvdFNwb3RcIixcclxuICAgICAgc291cmNlOiBncmFwaGljcyxcclxuICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJyxcclxuICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcIk9CSkVDVElEXCIsIGFsaWFzOiBcIk9CSkVDVElEXCIsIHR5cGU6IFwib2lkXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiTm9tYnJlXCIsIGFsaWFzOiBcIk5vbWJyZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcclxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogamltdU1hcFZpZXcudmlldy5zcGF0aWFsUmVmZXJlbmNlLFxyXG4gICAgICBvcGFjaXR5OiAxXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJlciA9IHtcclxuICAgICAgdHlwZTogXCJoZWF0bWFwXCIsXHJcbiAgICAgIGNvbG9yU3RvcHM6IFtcclxuICAgICAgICB7IGNvbG9yOiBbMTMzLCAxOTMsIDIwMCwgMF0sIHJhdGlvOiAwIH0sXHJcbiAgICAgICAgeyBjb2xvcjogWzEzMywgMTkzLCAyMDAsIDBdLCByYXRpbzogMC4wMSB9LFxyXG4gICAgICAgIHsgY29sb3I6IFsxMzMsIDE5MywgMjAwLCAyNTVdLCByYXRpbzogMC4wMSB9LFxyXG4gICAgICAgIHsgY29sb3I6IFsxMzMsIDE5MywgMjAwLCAyNTVdLCByYXRpbzogMC4wMSB9LFxyXG4gICAgICAgIHsgY29sb3I6IFsxNDQsIDE2MSwgMTkwLCAyNTVdLCByYXRpbzogMC4wOTI1IH0sXHJcbiAgICAgICAgeyBjb2xvcjogWzE1NiwgMTI5LCAxMzIsIDI1NV0sIHJhdGlvOiAwLjE3NSB9LFxyXG4gICAgICAgIHsgY29sb3I6IFsxNjcsIDk3LCAxNzAsIDI1NV0sIHJhdGlvOiAwLjI1NzUgfSxcclxuICAgICAgICB7IGNvbG9yOiBbMTc1LCA3MywgMTI4LCAyNTVdLCByYXRpbzogMC4zNCB9LFxyXG4gICAgICAgIHsgY29sb3I6IFsxODQsIDQ4LCA4NSwgMjU1XSwgcmF0aW86IDAuNDIyNSB9LFxyXG4gICAgICAgIHsgY29sb3I6IFsxOTIsIDI0LCA0MiwgMjU1XSwgcmF0aW86IDAuNTA1IH0sXHJcbiAgICAgICAgeyBjb2xvcjogWzIwMCwgMCwgMCwgMjU1XSwgcmF0aW86IDAuNTg3NSB9LFxyXG4gICAgICAgIHsgY29sb3I6IFsyMTEsIDUxLCAwLCAyNTVdLCByYXRpbzogMC42NyB9LFxyXG4gICAgICAgIHsgY29sb3I6IFsyMjIsIDEwMiwgMCwgMjU1XSwgcmF0aW86IDAuNzUyNSB9LFxyXG4gICAgICAgIHsgY29sb3I6IFsyMzMsIDE1MywgMCwgMjU1XSwgcmF0aW86IDAuODM1IH0sXHJcbiAgICAgICAgeyBjb2xvcjogWzI0NCwgMjA0LCAwLCAyNTVdLCByYXRpbzogMC45MTc1IH0sXHJcbiAgICAgICAgeyBjb2xvcjogWzI1NSwgMjU1LCAwLCAyNTVdLCByYXRpbzogMSB9LFxyXG4gICAgICBdLFxyXG4gICBcclxuICAgICAgXHJcbiAgICAgIHJhZGl1czogMjAwLFxyXG5cclxuICAgIH07XHJcblxyXG4gICAgbGV0IGhlYXRtYXBQYXJhbXMgPSB7XHJcbiAgICAgIGxheWVyOiBob3RzcG90LFxyXG4gICAgICB2aWV3OiBqaW11TWFwVmlldy52aWV3LFxyXG4gICAgICByZW5kZXJlcjogcmVuZGVyZXIsXHJcbiAgICAgIGJsdXJSYWRpdXM6IGJsdXIsXHJcbiAgICAgIG1heERlbnNpdHk6IG1heERlbnNpdHksXHJcbiAgICAgIG1pbkRlbnNpdHk6IG1pbkRlbnNpdHksXHJcbiAgICAgIHJlZmVyZW5jZVNjYWxlOiAzMDAwLFxyXG4gICAgfVxyXG4gICAgaGVhdG1hcFJlbmRlcmVyQ3JlYXRvci5jcmVhdGVSZW5kZXJlcihoZWF0bWFwUGFyYW1zKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuICAgICAgaG90c3BvdC5yZW5kZXJlciA9IHJlc3BvbnNlLnJlbmRlcmVyXHJcbiAgICAgIGhvdHNwb3QubGlzdE1vZGUgPSBcInNob3dcIlxyXG4gICAgICBob3RzcG90LnZpc2libGUgPSB0cnVlXHJcbiAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChob3RzcG90KVxyXG4gICAgfSlcclxuICAgIHNldElzQXBsaWVkKHRydWUpXHJcbiAgfTtcclxuICAvLyBEZXRlY3RhIGxvcyBjYW1iaW9zIGVuIGxvcyBsYXllcnNcclxuICBjb25zdCBoYW5kbGVMYXllckNoYW5nZSA9ICgpID0+IHtcclxuICAgIGlmICghamltdU1hcFZpZXcpIHJldHVybjtcclxuICBcclxuICAgIGNvbnN0IGxheWVycyA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5maWx0ZXIobGF5ZXIgPT4ge1xyXG4gICAgICBpZiAobGF5ZXIudHlwZSAhPT0gXCJmZWF0dXJlXCIpIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYgKGxheWVyLnRpdGxlID09PSBcIkzDrW1pdGUgdXJiYW5vIFBsYW4gUmVndWxhZG9yIENvbXVuYWxcIikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZiAobGF5ZXIudGl0bGUgPT09IFwiSG90U3BvdFwiKSByZXR1cm4gZmFsc2U7XHJcbiAgXHJcbiAgICAgIC8vIFN1YmlyIGVuIGxhIGplcmFycXXDrWEgZGUgcGFyZW50c1xyXG4gICAgICBsZXQgcGFyZW50ID0gbGF5ZXIucGFyZW50O1xyXG4gICAgICBsZXQgdGl0bGUgPSAndGl0bGUnIGluIHBhcmVudCA/IHBhcmVudC50aXRsZTogJ05vIHRpdGxlIHByb3BlcnR5J1xyXG4gICAgICBpZih0aXRsZSA9PT0gXCJUcmFuc3BvcnRlXCIpIHJldHVybiBmYWxzZVxyXG4gICAgICBpZih0aXRsZSA9PT0gXCJJbmZyYWVzdHJ1Y3R1cmEgY3LDrXRpY2FcIikgcmV0dXJuIGZhbHNlXHJcbiAgICAgIGlmKHRpdGxlID09PSBcIkNvbWJ1c3RpYmxlc1wiKSByZXR1cm4gZmFsc2VcclxuICAgICAgaWYodGl0bGUgPT09IFwiVHJhbnNtaXNpw7NuIGVsw6ljdHJpY2FcIikgcmV0dXJuIGZhbHNlXHJcbiAgICAgIGlmKHRpdGxlID09PSBcIkNlbnRyYWxlcyBkZSBnZW5lcmFjacOzbiBlbMOpY3RyaWNhXCIpIHJldHVybiBmYWxzZVxyXG4gIFxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgY29uc29sZS5sb2coXCJMYXllcnMgZmlsdHJhZG9zOlwiLCBsYXllcnMpO1xyXG4gICAgc2V0QXZhaWxhYmxlRGF0YShsYXllcnMpO1xyXG4gIH07XHJcblxyXG4gIC8vIERldGVjdGEgbG9zIGNhbWJpb3MgZW4gbG9zIGRhdGFTb3VyY2VzXHJcbiAgY29uc3QgaGFuZGxlRGF0YVNvdXJjZUNoYW5nZSA9ICgpID0+IHtcclxuICAgIGlmICghamltdU1hcFZpZXcpIHJldHVybjtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2VzID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlc0FzQXJyYXkoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRGF0YVNvdXJjZXMgYWN0dWFsZXM6XCIsIGRhdGFTb3VyY2VzKTtcclxuICB9O1xyXG5cclxuICAvLyBFbGltaW5hIGVsIGhlYXRtYXBcclxuICBjb25zdCByZW1vdmVIZWF0TWFwID0gKCkgPT4ge1xyXG4gICAgaWYgKCFqaW11TWFwVmlldykgcmV0dXJuO1xyXG4gICAgY29uc3QgbGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZmluZChsYXllciA9PlxyXG4gICAgICBsYXllci50aXRsZSA9PT0gXCJIb3RTcG90XCIpXHJcbiAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGxheWVyKVxyXG4gICAgICBzZXRJc0FwbGllZChmYWxzZSlcclxuICAgIH1cclxuICB9XHJcbiAgLy8gRWxpbWluYSBlbCBoZWF0bWFwIHkgbG8gdnVlbHZlIGEgZ2VuZXJhclxyXG4gIGNvbnN0IHJlZ2VuZXJhdGVIZWF0bWFwID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlSGVhdE1hcCgpO1xyXG4gICAgaGFuZGxlQXBwbHlIZWF0bWFwKCk7XHJcbiAgfTtcclxuICAvLyBEZWJvdW5jZSBwYXJhIGV2aXRhciBxdWUgc2UgZWplY3V0ZSBsYSBmdW5jacOzbiBkZW1hc2lhZGFzIHZlY2VzXHJcbiAgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgZGVsYXkpID0+IHtcclxuICAgIGxldCB0aW1lb3V0O1xyXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYyguLi5hcmdzKSwgZGVsYXkpO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIC8vIERldGVjdGEgc2kgZWwgbGF5ZXIgZnVlbnRlIGVzIHJlbW92aWRvXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghamltdU1hcFZpZXcpIHJldHVybjtcclxuXHJcbiAgICBpZiAobGF5ZXJXYXRjaGVyLmN1cnJlbnQpIGxheWVyV2F0Y2hlci5jdXJyZW50LnJlbW92ZSgpO1xyXG5cclxuICAgIGxheWVyV2F0Y2hlci5jdXJyZW50ID0gamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0aWxsRXhpc3RzID0gamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZpbmQobCA9PlxyXG4gICAgICAgIGwgPT09IHNvdXJjZUxheWVyXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghc3RpbGxFeGlzdHMgJiYgc291cmNlTGF5ZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn4pqg77iPIExheWVyIGZ1ZW50ZSBoYSBzaWRvIGVsaW1pbmFkby4nKTtcclxuICAgICAgICByZW1vdmVIZWF0TWFwKCk7XHJcbiAgICAgICAgc2V0U291cmNlTGF5ZXIobnVsbCk7XHJcbiAgICAgIH1cclxuICAgICAgaGFuZGxlTGF5ZXJDaGFuZ2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChsYXllcldhdGNoZXIuY3VycmVudCkgbGF5ZXJXYXRjaGVyLmN1cnJlbnQucmVtb3ZlKCk7XHJcbiAgICB9O1xyXG4gIH0sIFtqaW11TWFwVmlldywgc291cmNlTGF5ZXJdKTtcclxuXHJcbiAgLy8gLy8gRGV0ZWN0YSBsb3MgY2FtYmlvcyBkZWwgZXh0ZW5kIHkgdnVlbHZlIGEgZ2VuZXJhciBlbCBoZWF0bWFwXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghamltdU1hcFZpZXcpIHJldHVybjtcclxuICAgIGNvbnN0IGRlYm91bmNlZFJlZ2VuZXJhdGUgPSBkZWJvdW5jZSgoKSA9PiB7XHJcbiAgICAgIGlmIChhdmFpbGFibGVEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZWdlbmVyYXRlSGVhdG1hcCgpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIGNvbnN0IGV4dGVudFdhdGNoZXIgPSBqaW11TWFwVmlldy52aWV3LndhdGNoKFwiZXh0ZW50XCIsICgpID0+IHtcclxuICAgICAgaWYoaXNBcGxpZWQpZGVib3VuY2VkUmVnZW5lcmF0ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZXh0ZW50V2F0Y2hlci5yZW1vdmUoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICB9LCBbamltdU1hcFZpZXcsIGF2YWlsYWJsZURhdGEsIGJsdXIsIG1heERlbnNpdHksIG1pbkRlbnNpdHldKTtcclxuXHJcblxyXG4gIC8vIERldGVjdGEgY2FkYSB2ZXogcXVlIGNhbWJpYSBlbCBtYXBhIG8gbG9zIGRhdGFTb3VyY2VzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghamltdU1hcFZpZXcpIHJldHVybjtcclxuICAgIGhhbmRsZUxheWVyQ2hhbmdlKCk7XHJcbiAgICBoYW5kbGVEYXRhU291cmNlQ2hhbmdlKCk7XHJcbiAgfSwgW2ppbXVNYXBWaWV3XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0XCI+XHJcbiAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgcHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhdG1hcC1tYWluLWNvbnRhaW5lcic+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYXZhaWxhYmxlRGF0YS5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYXRtYXAtY29udGFpbmVyIHAtNCc+XHJcbiAgICAgICAgICAgICAgICA8aDU+e3QoXCJ3YXJuaW5nXCIpfTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYXRtYXAtY29udGFpbmVyIHAtNCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhdG1hcC1zZXR0aW5ncyc+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmx1clwiPnt0KFwiYmx1clwiKX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtibHVyfSBvbkNoYW5nZT17KGUpID0+IHNldEJsdXIoZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWF0bWFwLXNldHRpbmdzJz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYXhEZW5zaXR5XCI+TWF4IHt0KFwiZGVuc2l0eVwiKX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IHR5cGU9J3RleHQnIHZhbHVlPXttYXhEZW5zaXR5fSBvbkNoYW5nZT17KGUpID0+IHNldE1heERlbnNpdHkoZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWF0bWFwLXNldHRpbmdzJz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtaW5EZW5zaXR5XCI+TWluIHt0KFwiZGVuc2l0eVwiKX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IHR5cGU9J3RleHQnIHZhbHVlPXttaW5EZW5zaXR5fSBvbkNoYW5nZT17KGUpID0+IHNldE1pbkRlbnNpdHkoZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhdG1hcC1idXR0b25zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIG10LTMnPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFwcGx5SGVhdG1hcCgpfT57dChcImFwcGx5XCIpfSBob3RzcG90PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0ncHJpbWFyeScgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlSGVhdE1hcCgpfT57dChcImRlbGV0ZVwiKX0gaG90c3BvdDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXYpID0+IHNldEppbXVNYXBWaWV3KGptdil9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==