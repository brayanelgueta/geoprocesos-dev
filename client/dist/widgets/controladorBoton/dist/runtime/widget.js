System.register(["jimu-core/react","jimu-arcgis","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/controladorBoton/src/runtime/assets/style.css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/controladorBoton/src/runtime/assets/style.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.widgetControlerBTN {
  width: 100%;
  height: 100%;
  background-color: #052042;
  margin: 0;
  padding: 15px;
}

.contenedorPri-WidgetControler h1 {
  font-size: 18px;
  color: #ffffff;
  width: 100%;
  height: 15%;
  margin-bottom: 0;
}

.contenedorBtns-WidgetControler {
  display: block;
  width: 100%;
  height: 100% px;
  overflow: auto;
  margin-top: 10px;
}

.btnControl {
  width: 95%;
  text-decoration: none;
  border: none;
  margin: 4px 0px;
  border-radius: 5px;
  padding-top: 4px;
  display: flex;
  text-align: center;
  justify-content: center;
  height: 23px;
  align-items: center;
}

.buttonActive {
  font-weight: 800;
  color: #ffffff;
  background: #6a6969;
}

.buttonActive:hover {
  background-color: #d91b1f;
  color: #ffffff;
  font-weight: 900;
  border-radius: 2px;
}

.buttonDeactivate {
  font-weight: 800;
  color: #6a6969;
  background: #2a2a2a;
  pointer-events: none;
}

.buttonActiveClick {
  background-color: #d1ced2;
  color: #00161d;
  font-weight: 800;
}

.buttonDect {
  width: 95%;
  font-weight: 800;
  color: rgba(191, 238, 254, 0.2117647059);
  text-decoration: none;
  border: none;
  background: #6a6969;
  margin: 1px 0px;
  border-radius: 2px;
  pointer-events: none;
}

/* Base container styles */
.geoprocesos-container {
  background-color: #0a1929;
  color: white;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  font-family: "Arial", sans-serif;
}

.geoprocesos-title {
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Two-column selector layout */
.two-column-selector {
  margin-top: 1rem;
  display: flex;
  gap: 15px;
}

.category-row {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  height: 100%;
}

/* Button styles */
.category-button {
  color: white;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  height: 100%;
  text-align: center;
  border: none;
  transition: all 0.3s ease;
  font-weight: bold;
}

.category-button.analisis {
  background-color: #001489;
}

.category-button.deteccion {
  background-color: #1a5276;
  border: 2px solid #001489;
}

.category-button.active {
  box-shadow: 0 0 0 2px #ffffff;
  transform: translateY(-2px);
}

.category-button:hover:not(.active) {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Options container */
.options-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Option button styles */
.option-button {
  background-color: #1a5276;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  border: none;
  transition: all 0.2s ease;
}

.option-button:hover {
  background-color: #2980b9;
  transform: translateX(5px);
}

.option-button.active {
  background-color: #2980b9;
  box-shadow: 0 0 0 2px #ffffff;
}

.option-description {
  font-size: 0.8em;
  opacity: 0.8;
  margin-top: 5px;
}

/* Responsive design */
@media (max-width: 768px) {
  .category-row {
    flex-direction: column;
  }
  .category-button {
    width: 100%;
    min-width: auto;
  }
  .options-container {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/controladorBoton/src/runtime/assets/style.css","webpack://./../../../Nueva%20carpeta/ArcGISExperienceBuilder/client/your-extensions/widgets/controladorBoton/src/runtime/assets/style.css"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,yBAAA;EACA,SAAA;EACA,aAAA;ACCJ;;ADCA;EACI,eAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;ACEJ;;ADAA;EACI,cAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;ACGJ;;ADDA;EACI,UAAA;EACA,qBAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,uBAAA;EACA,YAAA;EACA,mBAAA;ACIJ;;ADFA;EACI,gBAAA;EACA,cAAA;EACA,mBAAA;ACKJ;;ADHA;EACI,yBAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;ACMJ;;ADFA;EACI,gBAAA;EACA,cAAA;EACA,mBAAA;EACA,oBAAA;ACKJ;;ADFA;EACI,yBAAA;EACA,cAAA;EACA,gBAAA;ACKJ;;ADHA;EACI,UAAA;EACA,gBAAA;EACA,wCAAA;EACA,qBAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,oBAAA;ACMJ;;ADHA,0BAAA;AACA;EACI,yBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,gCAAA;ACMJ;;ADHE;EACE,mBAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;ACMJ;;ADHE,+BAAA;AACA;EACE,gBAAA;EACA,aAAA;EACA,SAAA;ACMJ;;ADHE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;ACMJ;;ADHE,kBAAA;AACA;EACE,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,iBAAA;ACMJ;;ADFE;EACE,yBAAA;ACKJ;;ADFE;EACE,yBAAA;EACA,yBAAA;ACKJ;;ADFE;EACE,6BAAA;EACA,2BAAA;ACKJ;;ADFE;EACE,YAAA;EACA,2BAAA;ACKJ;;ADFE,sBAAA;AACA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,OAAA;EACA,kCAAA;ACKJ;;ADFE;EACE;IACE,UAAA;IACA,4BAAA;ECKJ;EDHE;IACE,UAAA;IACA,wBAAA;ECKJ;AACF;ADFE,yBAAA;AACA;EACE,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;ACIJ;;ADDE;EACE,yBAAA;EACA,0BAAA;ACIJ;;ADDE;EACE,yBAAA;EACA,6BAAA;ACIJ;;ADDE;EACE,gBAAA;EACA,YAAA;EACA,eAAA;ACIJ;;ADDE,sBAAA;AACA;EACE;IACE,sBAAA;ECIJ;EDDE;IACE,WAAA;IACA,eAAA;ECGJ;EDAE;IACE,WAAA;ECEJ;AACF","sourcesContent":[".widgetControlerBTN {\n  width: 100%;\n  height: 100%;\n  background-color: #052042;\n  margin: 0;\n  padding: 15px;\n}\n\n.contenedorPri-WidgetControler h1 {\n  font-size: 18px;\n  color: #ffffff;\n  width: 100%;\n  height: 15%;\n  margin-bottom: 0;\n}\n\n.contenedorBtns-WidgetControler {\n  display: block;\n  width: 100%;\n  height: 100% px;\n  overflow: auto;\n  margin-top: 10px;\n}\n\n.btnControl {\n  width: 95%;\n  text-decoration: none;\n  border: none;\n  margin: 4px 0px;\n  border-radius: 5px;\n  padding-top: 4px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  height: 23px;\n  align-items: center;\n}\n\n.buttonActive {\n  font-weight: 800;\n  color: #ffffff;\n  background: #6a6969;\n}\n\n.buttonActive:hover {\n  background-color: #d91b1f;\n  color: #ffffff;\n  font-weight: 900;\n  border-radius: 2px;\n}\n\n.buttonDeactivate {\n  font-weight: 800;\n  color: #6a6969;\n  background: #2a2a2a;\n  pointer-events: none;\n}\n\n.buttonActiveClick {\n  background-color: #d1ced2;\n  color: #00161d;\n  font-weight: 800;\n}\n\n.buttonDect {\n  width: 95%;\n  font-weight: 800;\n  color: rgba(191, 238, 254, 0.2117647059);\n  text-decoration: none;\n  border: none;\n  background: #6a6969;\n  margin: 1px 0px;\n  border-radius: 2px;\n  pointer-events: none;\n}\n\n/* Base container styles */\n.geoprocesos-container {\n  background-color: #0a1929;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 100%;\n  font-family: \"Arial\", sans-serif;\n}\n\n.geoprocesos-title {\n  margin-bottom: 20px;\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n/* Two-column selector layout */\n.two-column-selector {\n  margin-top: 1rem;\n  display: flex;\n  gap: 15px;\n}\n\n.category-row {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: flex-start;\n  height: 100%;\n}\n\n/* Button styles */\n.category-button {\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n  width: 100px;\n  height: 100%;\n  text-align: center;\n  border: none;\n  transition: all 0.3s ease;\n  font-weight: bold;\n}\n\n.category-button.analisis {\n  background-color: #001489;\n}\n\n.category-button.deteccion {\n  background-color: #1a5276;\n  border: 2px solid #001489;\n}\n\n.category-button.active {\n  box-shadow: 0 0 0 2px #ffffff;\n  transform: translateY(-2px);\n}\n\n.category-button:hover:not(.active) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n\n/* Options container */\n.options-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n  animation: fadeIn 0.3s ease-in-out;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/* Option button styles */\n.option-button {\n  background-color: #1a5276;\n  color: white;\n  padding: 10px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n  text-align: center;\n  border: none;\n  transition: all 0.2s ease;\n}\n\n.option-button:hover {\n  background-color: #2980b9;\n  transform: translateX(5px);\n}\n\n.option-button.active {\n  background-color: #2980b9;\n  box-shadow: 0 0 0 2px #ffffff;\n}\n\n.option-description {\n  font-size: 0.8em;\n  opacity: 0.8;\n  margin-top: 5px;\n}\n\n/* Responsive design */\n@media (max-width: 768px) {\n  .category-row {\n    flex-direction: column;\n  }\n  .category-button {\n    width: 100%;\n    min-width: auto;\n  }\n  .options-container {\n    width: 100%;\n  }\n}",".widgetControlerBTN {\n  width: 100%;\n  height: 100%;\n  background-color: #052042;\n  margin: 0;\n  padding: 15px;\n}\n\n.contenedorPri-WidgetControler h1 {\n  font-size: 18px;\n  color: #ffffff;\n  width: 100%;\n  height: 15%;\n  margin-bottom: 0;\n}\n\n.contenedorBtns-WidgetControler {\n  display: block;\n  width: 100%;\n  height: 100% px;\n  overflow: auto;\n  margin-top: 10px;\n}\n\n.btnControl {\n  width: 95%;\n  text-decoration: none;\n  border: none;\n  margin: 4px 0px;\n  border-radius: 5px;\n  padding-top: 4px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  height: 23px;\n  align-items: center;\n}\n\n.buttonActive {\n  font-weight: 800;\n  color: #ffffff;\n  background: #6a6969;\n}\n\n.buttonActive:hover {\n  background-color: #d91b1f;\n  color: #ffffff;\n  font-weight: 900;\n  border-radius: 2px;\n}\n\n.buttonDeactivate {\n  font-weight: 800;\n  color: #6a6969;\n  background: #2a2a2a;\n  pointer-events: none;\n}\n\n.buttonActiveClick {\n  background-color: #d1ced2;\n  color: #00161d;\n  font-weight: 800;\n}\n\n.buttonDect {\n  width: 95%;\n  font-weight: 800;\n  color: rgba(191, 238, 254, 0.2117647059);\n  text-decoration: none;\n  border: none;\n  background: #6a6969;\n  margin: 1px 0px;\n  border-radius: 2px;\n  pointer-events: none;\n}\n\n/* Base container styles */\n.geoprocesos-container {\n  background-color: #0a1929;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 100%;\n  font-family: \"Arial\", sans-serif;\n}\n\n.geoprocesos-title {\n  margin-bottom: 20px;\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n/* Two-column selector layout */\n.two-column-selector {\n  margin-top: 1rem;\n  display: flex;\n  gap: 15px;\n}\n\n.category-row {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: flex-start;\n  height: 100%;\n}\n\n/* Button styles */\n.category-button {\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n  width: 100px;\n  height: 100%;\n  text-align: center;\n  border: none;\n  transition: all 0.3s ease;\n  font-weight: bold;\n}\n\n.category-button.analisis {\n  background-color: #001489;\n}\n\n.category-button.deteccion {\n  background-color: #1a5276;\n  border: 2px solid #001489;\n}\n\n.category-button.active {\n  box-shadow: 0 0 0 2px #ffffff;\n  transform: translateY(-2px);\n}\n\n.category-button:hover:not(.active) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n\n/* Options container */\n.options-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n  animation: fadeIn 0.3s ease-in-out;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/* Option button styles */\n.option-button {\n  background-color: #1a5276;\n  color: white;\n  padding: 10px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n  text-align: center;\n  border: none;\n  transition: all 0.2s ease;\n}\n\n.option-button:hover {\n  background-color: #2980b9;\n  transform: translateX(5px);\n}\n\n.option-button.active {\n  background-color: #2980b9;\n  box-shadow: 0 0 0 2px #ffffff;\n}\n\n.option-description {\n  font-size: 0.8em;\n  opacity: 0.8;\n  margin-top: 5px;\n}\n\n/* Responsive design */\n@media (max-width: 768px) {\n  .category-row {\n    flex-direction: column;\n  }\n  .category-button {\n    width: 100%;\n    min-width: auto;\n  }\n  .options-container {\n    width: 100%;\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./your-extensions/widgets/controladorBoton/src/runtime/assets/style.css":
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/controladorBoton/src/runtime/assets/style.css ***!
  \*******************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/controladorBoton/src/runtime/assets/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./your-extensions/widgets/controladorBoton/src/runtime/translations.ts":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/controladorBoton/src/runtime/translations.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translations: () => (/* binding */ translations)
/* harmony export */ });
const translations = {
    es: {
        widgetLabel: "Geoprocesos",
        analisis: "Análisis",
        riskDetection: "Detección de riesgo",
        changeDetection: "Detección del cambio",
        spectralIndex: "Índices espectrales",
        indexFormulator: "Formulador de índices",
        areaRiskDetection: "Detección de áreas de riesgo",
        infrastructureDetection: "Detección de Infraestructuras",
        proximityRisk: "Proximidad área de riesgo",
    },
    en: {
        widgetLabel: "Geoprocess",
        analisis: "Analysis",
        riskDetection: "Risk detection",
        changeDetection: "Change detection",
        spectralIndex: "Spectral indices",
        indexFormulator: "Index Formulator",
        areaRiskDetection: "Detection of risk areas",
        infrastructureDetection: "Infrastructure Detection",
        proximityRisk: "Proximity to risk area",
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
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/controladorBoton/src/runtime/widget.tsx ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/style.css */ "./your-extensions/widgets/controladorBoton/src/runtime/assets/style.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _hooks_useLocale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useLocale */ "./your-extensions/hooks/useLocale.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translations */ "./your-extensions/widgets/controladorBoton/src/runtime/translations.ts");
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
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const { t } = (0,_hooks_useLocale__WEBPACK_IMPORTED_MODULE_4__.useLocale)(_translations__WEBPACK_IMPORTED_MODULE_5__.translations);
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const removeBuffers = () => {
        if (!jimuMapView)
            return;
        // Buscar los gráficos con el id que usamos para el buffer
        const graphicsToRemove = jimuMapView.view.graphics.filter((graphic) => {
            var _a;
            return ((_a = graphic.attributes) === null || _a === void 0 ? void 0 : _a.id) === "buffer_DI";
        });
        graphicsToRemove.forEach((graphic) => {
            jimuMapView.view.graphics.remove(graphic);
        });
    };
    const handleCategoryClick = (categoryNumber) => {
        setSelectedCategory(categoryNumber);
    };
    const handleOptionClick = (optionNumber) => __awaiter(void 0, void 0, void 0, function* () {
        const isDetectionReady = optionNumber === 0;
        dispatch({ type: "CHANGE_DETECTION_READY", val: isDetectionReady });
        dispatch({ type: "SET_SENSORS", val: null });
        setSelectedOption(optionNumber);
        toggleWidgetVisibility(optionNumber);
        switch (optionNumber) {
            case 0:
                dispatch({ type: "GEOPROCESS", val: 1 });
                break;
            case 1:
                dispatch({ type: "GEOPROCESS", val: 2 });
                break;
            case 3:
                dispatch({ type: "GEOPROCESS", val: 3 });
                break;
            case 2:
                dispatch({ type: "GEOPROCESS", val: 4 });
                break;
            case 4:
                dispatch({ type: "GEOPROCESS", val: 5 });
                break;
            case 5:
                dispatch({ type: "GEOPROCESS", val: 6 });
                break;
        }
        removeBuffers();
    });
    // Configuracion del MAPA
    const activeViewChangeHandler = (jmv) => {
        setJimuMapView(jmv);
    };
    const eventoPunto = () => {
        const test2 = document.getElementsByClassName("section-content")[0];
        for (let i = 0; i < test2.children.length; i++) {
            const child = test2.children[i];
            if (child) {
                var chilNodeInter = child.childNodes[0];
                if (chilNodeInter) {
                    chilNodeInter.style.pointerEvents = "auto";
                }
            }
        }
    };
    eventoPunto();
    // Manejo del Slide de geoprocesos
    const toggleWidgetVisibility = (index) => {
        const sectionContent = document.getElementsByClassName('section-content')[0];
        if (sectionContent) {
            Array.from(sectionContent.children).forEach((child, i) => {
                if (child instanceof HTMLDivElement) {
                    if (i === index) {
                        child.style.display = 'block';
                        child.style.opacity = '1';
                    }
                    else {
                        child.style.display = 'none';
                        child.style.opacity = '0';
                    }
                }
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        toggleWidgetVisibility(0);
    }, []);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("div", { className: "jimu-widget widgetControlerBTN" },
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler })),
        jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("div", { className: "contenedorPri-WidgetControler" },
            jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("h4", null, t("widgetLabel")),
            jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("div", { className: 'two-column-selector' },
                jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("div", { className: "category-row" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("div", { className: `category-button ${selectedCategory === 1 ? "active" : ""}`, style: {
                            backgroundColor: selectedCategory === 1 ? "#0057B8" : "#1a5276",
                            boxShadow: selectedCategory === 1 ? "0 0 0 1px #ffffff" : "none",
                        }, onClick: () => handleCategoryClick(1) }, t("analisis")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("div", { className: `category-button ${selectedCategory === 2 ? "active" : ""}`, style: {
                            backgroundColor: selectedCategory === 2 ? "#0057B8" : "#1a5276",
                            boxShadow: selectedCategory === 2 ? "0 0 0 1px #ffffff" : "none",
                        }, onClick: () => handleCategoryClick(2) }, t("riskDetection"))),
                selectedCategory === 1 && (jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("div", { className: "options-container" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("div", { className: `option-button ${selectedOption === 0 ? "active" : ""}`, style: {
                            backgroundColor: selectedOption === 0 ? "#0057B8" : "#1a5276",
                            boxShadow: selectedOption === 0 ? "0 0 0 1px #ffffff" : "none",
                        }, onClick: () => handleOptionClick(0) }, t("changeDetection")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("div", { className: `option-button ${selectedOption === 1 ? "active" : ""}`, style: {
                            backgroundColor: selectedOption === 1 ? "#0057B8" : "#1a5276",
                            boxShadow: selectedOption === 1 ? "0 0 0 1px #ffffff" : "none",
                        }, onClick: () => handleOptionClick(1) }, t("spectralIndex")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("div", { className: `option-button ${selectedOption === 3 ? "active" : ""}`, style: {
                            backgroundColor: selectedOption === 3 ? "#0057B8" : "#1a5276",
                            boxShadow: selectedOption === 3 ? "0 0 0 1px #ffffff" : "none",
                        }, onClick: () => handleOptionClick(3) }, t("indexFormulator")))),
                selectedCategory === 2 && (jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("div", { className: "options-container" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("div", { className: `option-button ${selectedOption === 2 ? "active" : ""}`, style: {
                            backgroundColor: selectedOption === 2 ? "#0057B8" : "#1a5276",
                            boxShadow: selectedOption === 2 ? "0 0 0 1px #ffffff" : "none",
                        }, onClick: () => handleOptionClick(2) }, t("areaRiskDetection")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("div", { className: `option-button ${selectedOption === 4 ? "active" : ""}`, style: {
                            backgroundColor: selectedOption === 4 ? "#0057B8" : "#1a5276",
                            boxShadow: selectedOption === 4 ? "0 0 0 1px #ffffff" : "none",
                        }, onClick: () => handleOptionClick(4) }, t("infrastructureDetection")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_3__.React.createElement("div", { className: `option-button ${selectedOption === 5 ? "active" : ""}`, style: {
                            backgroundColor: selectedOption === 5 ? "#0057B8" : "#1a5276",
                            boxShadow: selectedOption === 5 ? "0 0 0 1px #ffffff" : "none",
                        }, onClick: () => handleOptionClick(5) }, t("proximityRisk"))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb250cm9sYWRvckJvdG9uL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDakI7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvUkFBb1IsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsV0FB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QUNBLDRDQUE0QyxZQUFZO0FBQ3hELElBQUk7QUFDSjtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVcsUUFBUSxhQUFhLCtDQUErQyxNQUFNO0FBQzlGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsYUFBYTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFlBQVksTUFBTSxNQUFNLHFDQUFxQyw2QkFBNkI7QUFDekg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGtEQUFrRCxrQ0FBa0M7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QkFDTCxlQUFlLEVBQUUsY0FBYyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTOzRCQUM3RCxTQUFTLEVBQUUsY0FBYyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLE1BQU07eUJBQy9ELEVBQ0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUNsQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FDekI7b0JBQ04sb0VBQUssU0FBUyxFQUFFLGlCQUFpQixjQUFjLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUNyRSxLQUFLLEVBQUU7NEJBQ0wsZUFBZSxFQUFFLGNBQWMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUzs0QkFDN0QsU0FBUyxFQUFFLGNBQWMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxNQUFNO3lCQUMvRCxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFDckMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUNmLENBQ0YsQ0FDUCxDQUdDLENBQ0YsQ0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixpRUFBZSxNQUFNLEVBQUM7QUFDZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb250cm9sYWRvckJvdG9uL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb250cm9sYWRvckJvdG9uL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3M/NGI3YiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvaG9va3MvdXNlTG9jYWxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb250cm9sYWRvckJvdG9uL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZGlzdC9yZWFjdC1yZWR1eC5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbnRyb2xhZG9yQm90b24vc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndpZGdldENvbnRyb2xlckJUTiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmNvbnRlbmVkb3JQcmktV2lkZ2V0Q29udHJvbGVyIGgxIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY29udGVuZWRvckJ0bnMtV2lkZ2V0Q29udHJvbGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCUgcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnRuQ29udHJvbCB7XG4gIHdpZHRoOiA5NSU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDRweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyM3B4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnV0dG9uQWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICM2YTY5Njk7XG59XG5cbi5idXR0b25BY3RpdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDkxYjFmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uYnV0dG9uRGVhY3RpdmF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjNmE2OTY5O1xuICBiYWNrZ3JvdW5kOiAjMmEyYTJhO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJ1dHRvbkFjdGl2ZUNsaWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2VkMjtcbiAgY29sb3I6ICMwMDE2MWQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5idXR0b25EZWN0IHtcbiAgd2lkdGg6IDk1JTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHJnYmEoMTkxLCAyMzgsIDI1NCwgMC4yMTE3NjQ3MDU5KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM2YTY5Njk7XG4gIG1hcmdpbjogMXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogQmFzZSBjb250YWluZXIgc3R5bGVzICovXG4uZ2VvcHJvY2Vzb3MtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMTkyOTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uZ2VvcHJvY2Vzb3MtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogVHdvLWNvbHVtbiBzZWxlY3RvciBsYXlvdXQgKi9cbi50d28tY29sdW1uLXNlbGVjdG9yIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xufVxuXG4uY2F0ZWdvcnktcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBCdXR0b24gc3R5bGVzICovXG4uY2F0ZWdvcnktYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXRlZ29yeS1idXR0b24uYW5hbGlzaXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNDg5O1xufVxuXG4uY2F0ZWdvcnktYnV0dG9uLmRldGVjY2lvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTUyNzY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDE0ODk7XG59XG5cbi5jYXRlZ29yeS1idXR0b24uYWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNmZmZmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuLmNhdGVnb3J5LWJ1dHRvbjpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICBvcGFjaXR5OiAwLjk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLyogT3B0aW9ucyBjb250YWluZXIgKi9cbi5vcHRpb25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgZmxleDogMTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4vKiBPcHRpb24gYnV0dG9uIHN0eWxlcyAqL1xuLm9wdGlvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4ub3B0aW9uLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xufVxuXG4ub3B0aW9uLWJ1dHRvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZmZmZmZjtcbn1cblxuLm9wdGlvbi1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIG9wYWNpdHk6IDAuODtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4vKiBSZXNwb25zaXZlIGRlc2lnbiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXRlZ29yeS1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmNhdGVnb3J5LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICB9XG4gIC5vcHRpb25zLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbnRyb2xhZG9yQm90b24vc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzc1wiLFwid2VicGFjazovLy4vLi4vLi4vLi4vTnVldmElMjBjYXJwZXRhL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb250cm9sYWRvckJvdG9uL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNLSjs7QURIQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURGQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNLSjs7QURGQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNNSjs7QURIQSwwQkFBQTtBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDTUo7O0FESEU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ01KOztBREhFLCtCQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDTUo7O0FESEU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDTUo7O0FESEUsa0JBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDTUo7O0FERkU7RUFDRSx5QkFBQTtBQ0tKOztBREZFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQ0tKOztBREZFO0VBQ0UsNkJBQUE7RUFDQSwyQkFBQTtBQ0tKOztBREZFO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0FDS0o7O0FERkUsc0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0NBQUE7QUNLSjs7QURGRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VDS0o7RURIRTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQ0tKO0FBQ0Y7QURGRSx5QkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0lKOztBRERFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ0lKOztBRERFO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtBQ0lKOztBRERFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0lKOztBRERFLHNCQUFBO0FBQ0E7RUFDRTtJQUNFLHNCQUFBO0VDSUo7RURERTtJQUNFLFdBQUE7SUFDQSxlQUFBO0VDR0o7RURBRTtJQUNFLFdBQUE7RUNFSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53aWRnZXRDb250cm9sZXJCVE4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmNvbnRlbmVkb3JQcmktV2lkZ2V0Q29udHJvbGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5jb250ZW5lZG9yQnRucy1XaWRnZXRDb250cm9sZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJSBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmJ0bkNvbnRyb2wge1xcbiAgd2lkdGg6IDk1JTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogNHB4IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDIzcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uQWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQ6ICM2YTY5Njk7XFxufVxcblxcbi5idXR0b25BY3RpdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5MWIxZjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLmJ1dHRvbkRlYWN0aXZhdGUge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGNvbG9yOiAjNmE2OTY5O1xcbiAgYmFja2dyb3VuZDogIzJhMmEyYTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYnV0dG9uQWN0aXZlQ2xpY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2VkMjtcXG4gIGNvbG9yOiAjMDAxNjFkO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmJ1dHRvbkRlY3Qge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBjb2xvcjogcmdiYSgxOTEsIDIzOCwgMjU0LCAwLjIxMTc2NDcwNTkpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzZhNjk2OTtcXG4gIG1hcmdpbjogMXB4IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBCYXNlIGNvbnRhaW5lciBzdHlsZXMgKi9cXG4uZ2VvcHJvY2Vzb3MtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTE5Mjk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmdlb3Byb2Nlc29zLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBUd28tY29sdW1uIHNlbGVjdG9yIGxheW91dCAqL1xcbi50d28tY29sdW1uLXNlbGVjdG9yIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uY2F0ZWdvcnktcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIEJ1dHRvbiBzdHlsZXMgKi9cXG4uY2F0ZWdvcnktYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jYXRlZ29yeS1idXR0b24uYW5hbGlzaXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTQ4OTtcXG59XFxuXFxuLmNhdGVnb3J5LWJ1dHRvbi5kZXRlY2Npb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDE0ODk7XFxufVxcblxcbi5jYXRlZ29yeS1idXR0b24uYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmZmZmO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbn1cXG5cXG4uY2F0ZWdvcnktYnV0dG9uOmhvdmVyOm5vdCguYWN0aXZlKSB7XFxuICBvcGFjaXR5OiAwLjk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi8qIE9wdGlvbnMgY29udGFpbmVyICovXFxuLm9wdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmxleDogMTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcbi8qIE9wdGlvbiBidXR0b24gc3R5bGVzICovXFxuLm9wdGlvbi1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi5vcHRpb24tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXG59XFxuXFxuLm9wdGlvbi1idXR0b24uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZmZmZmZjtcXG59XFxuXFxuLm9wdGlvbi1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlIGRlc2lnbiAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNhdGVnb3J5LXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuY2F0ZWdvcnktYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG4gIH1cXG4gIC5vcHRpb25zLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cIixcIi53aWRnZXRDb250cm9sZXJCVE4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmNvbnRlbmVkb3JQcmktV2lkZ2V0Q29udHJvbGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5jb250ZW5lZG9yQnRucy1XaWRnZXRDb250cm9sZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJSBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmJ0bkNvbnRyb2wge1xcbiAgd2lkdGg6IDk1JTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogNHB4IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDIzcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uQWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQ6ICM2YTY5Njk7XFxufVxcblxcbi5idXR0b25BY3RpdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5MWIxZjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLmJ1dHRvbkRlYWN0aXZhdGUge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGNvbG9yOiAjNmE2OTY5O1xcbiAgYmFja2dyb3VuZDogIzJhMmEyYTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYnV0dG9uQWN0aXZlQ2xpY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2VkMjtcXG4gIGNvbG9yOiAjMDAxNjFkO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmJ1dHRvbkRlY3Qge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBjb2xvcjogcmdiYSgxOTEsIDIzOCwgMjU0LCAwLjIxMTc2NDcwNTkpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzZhNjk2OTtcXG4gIG1hcmdpbjogMXB4IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBCYXNlIGNvbnRhaW5lciBzdHlsZXMgKi9cXG4uZ2VvcHJvY2Vzb3MtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTE5Mjk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmdlb3Byb2Nlc29zLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBUd28tY29sdW1uIHNlbGVjdG9yIGxheW91dCAqL1xcbi50d28tY29sdW1uLXNlbGVjdG9yIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uY2F0ZWdvcnktcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIEJ1dHRvbiBzdHlsZXMgKi9cXG4uY2F0ZWdvcnktYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jYXRlZ29yeS1idXR0b24uYW5hbGlzaXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTQ4OTtcXG59XFxuXFxuLmNhdGVnb3J5LWJ1dHRvbi5kZXRlY2Npb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDE0ODk7XFxufVxcblxcbi5jYXRlZ29yeS1idXR0b24uYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmZmZmO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbn1cXG5cXG4uY2F0ZWdvcnktYnV0dG9uOmhvdmVyOm5vdCguYWN0aXZlKSB7XFxuICBvcGFjaXR5OiAwLjk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi8qIE9wdGlvbnMgY29udGFpbmVyICovXFxuLm9wdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmxleDogMTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcbi8qIE9wdGlvbiBidXR0b24gc3R5bGVzICovXFxuLm9wdGlvbi1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi5vcHRpb24tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXG59XFxuXFxuLm9wdGlvbi1idXR0b24uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZmZmZmZjtcXG59XFxuXFxuLm9wdGlvbi1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlIGRlc2lnbiAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNhdGVnb3J5LXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuY2F0ZWdvcnktYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG4gIH1cXG4gIC5vcHRpb25zLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2NhbGUodHJhbnNsYXRpb25zKSB7XHJcbiAgLy8gRGV0ZWN0YSBsb2NhbGUgZGVzZGUgbGEgVVJMICg/bG9jYWxlPWVuKSBvIGZhbGxiYWNrIGEgXCJlc1wiXHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICBjb25zdCBsb2NhbGUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibG9jYWxlXCIpIHx8IFwiZXNcIjtcclxuXHJcbiAgY29uc3QgdCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIChrZXk6IGtleW9mIHR5cGVvZiB0cmFuc2xhdGlvbnNbXCJlc1wiXSkgPT5cclxuICAgICAgdHJhbnNsYXRpb25zW2xvY2FsZSBhcyBcImVzXCIgfCBcImVuXCJdW2tleV0gPz8ga2V5O1xyXG4gIH0sIFtsb2NhbGVdKTtcclxuXHJcbiAgcmV0dXJuIHsgdCwgbG9jYWxlIH07XHJcbn0iLCJleHBvcnQgY29uc3QgdHJhbnNsYXRpb25zID0ge1xyXG4gIGVzOiB7XHJcbiAgICB3aWRnZXRMYWJlbDogXCJHZW9wcm9jZXNvc1wiLFxyXG4gICAgYW5hbGlzaXM6IFwiQW7DoWxpc2lzXCIsXHJcbiAgICByaXNrRGV0ZWN0aW9uOiBcIkRldGVjY2nDs24gZGUgcmllc2dvXCIsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IFwiRGV0ZWNjacOzbiBkZWwgY2FtYmlvXCIsXHJcbiAgICBzcGVjdHJhbEluZGV4OiBcIsONbmRpY2VzIGVzcGVjdHJhbGVzXCIsXHJcbiAgICBpbmRleEZvcm11bGF0b3I6IFwiRm9ybXVsYWRvciBkZSDDrW5kaWNlc1wiLFxyXG4gICAgYXJlYVJpc2tEZXRlY3Rpb246IFwiRGV0ZWNjacOzbiBkZSDDoXJlYXMgZGUgcmllc2dvXCIsXHJcbiAgICBpbmZyYXN0cnVjdHVyZURldGVjdGlvbjogXCJEZXRlY2Npw7NuIGRlIEluZnJhZXN0cnVjdHVyYXNcIixcclxuICAgIHByb3hpbWl0eVJpc2s6IFwiUHJveGltaWRhZCDDoXJlYSBkZSByaWVzZ29cIixcclxuICB9LFxyXG4gIGVuOiB7XHJcbiAgICB3aWRnZXRMYWJlbDogXCJHZW9wcm9jZXNzXCIsXHJcbiAgICBhbmFsaXNpczogXCJBbmFseXNpc1wiLFxyXG4gICAgcmlza0RldGVjdGlvbjogXCJSaXNrIGRldGVjdGlvblwiLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBcIkNoYW5nZSBkZXRlY3Rpb25cIixcclxuICAgIHNwZWN0cmFsSW5kZXg6IFwiU3BlY3RyYWwgaW5kaWNlc1wiLFxyXG4gICAgaW5kZXhGb3JtdWxhdG9yOiBcIkluZGV4IEZvcm11bGF0b3JcIixcclxuICAgIGFyZWFSaXNrRGV0ZWN0aW9uOiBcIkRldGVjdGlvbiBvZiByaXNrIGFyZWFzXCIsXHJcbiAgICBpbmZyYXN0cnVjdHVyZURldGVjdGlvbjogXCJJbmZyYXN0cnVjdHVyZSBEZXRlY3Rpb25cIixcclxuICAgIHByb3hpbWl0eVJpc2s6IFwiUHJveGltaXR5IHRvIHJpc2sgYXJlYVwiLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIHJldHVybiB4ID09PSB5ICYmICh4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSkgfHwgeCAhPT0geCAmJiB5ICE9PSB5IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIDtcbn1cblxudmFyIG9iamVjdElzID0gdHlwZW9mIE9iamVjdC5pcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5pcyA6IGlzO1xuXG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBSZWFjdC51c2VTeW5jRXh0ZXJuYWxTdG9yZTtcblxuLy8gZm9yIENvbW1vbkpTIGludGVyb3AuXG5cbnZhciB1c2VSZWYgPSBSZWFjdC51c2VSZWYsXG4gICAgdXNlRWZmZWN0ID0gUmVhY3QudXNlRWZmZWN0LFxuICAgIHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vLFxuICAgIHVzZURlYnVnVmFsdWUgPSBSZWFjdC51c2VEZWJ1Z1ZhbHVlOyAvLyBTYW1lIGFzIHVzZVN5bmNFeHRlcm5hbFN0b3JlLCBidXQgc3VwcG9ydHMgc2VsZWN0b3IgYW5kIGlzRXF1YWwgYXJndW1lbnRzLlxuXG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWwpIHtcbiAgLy8gVXNlIHRoaXMgdG8gdHJhY2sgdGhlIHJlbmRlcmVkIHNuYXBzaG90LlxuICB2YXIgaW5zdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGluc3Q7XG5cbiAgaWYgKGluc3RSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgIGluc3QgPSB7XG4gICAgICBoYXNWYWx1ZTogZmFsc2UsXG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH07XG4gICAgaW5zdFJlZi5jdXJyZW50ID0gaW5zdDtcbiAgfSBlbHNlIHtcbiAgICBpbnN0ID0gaW5zdFJlZi5jdXJyZW50O1xuICB9XG5cbiAgdmFyIF91c2VNZW1vID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gVHJhY2sgdGhlIG1lbW9pemVkIHN0YXRlIHVzaW5nIGNsb3N1cmUgdmFyaWFibGVzIHRoYXQgYXJlIGxvY2FsIHRvIHRoaXNcbiAgICAvLyBtZW1vaXplZCBpbnN0YW5jZSBvZiBhIGdldFNuYXBzaG90IGZ1bmN0aW9uLiBJbnRlbnRpb25hbGx5IG5vdCB1c2luZyBhXG4gICAgLy8gdXNlUmVmIGhvb2ssIGJlY2F1c2UgdGhhdCBzdGF0ZSB3b3VsZCBiZSBzaGFyZWQgYWNyb3NzIGFsbCBjb25jdXJyZW50XG4gICAgLy8gY29waWVzIG9mIHRoZSBob29rL2NvbXBvbmVudC5cbiAgICB2YXIgaGFzTWVtbyA9IGZhbHNlO1xuICAgIHZhciBtZW1vaXplZFNuYXBzaG90O1xuICAgIHZhciBtZW1vaXplZFNlbGVjdGlvbjtcblxuICAgIHZhciBtZW1vaXplZFNlbGVjdG9yID0gZnVuY3Rpb24gKG5leHRTbmFwc2hvdCkge1xuICAgICAgaWYgKCFoYXNNZW1vKSB7XG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHRoZSBob29rIGlzIGNhbGxlZCwgdGhlcmUgaXMgbm8gbWVtb2l6ZWQgcmVzdWx0LlxuICAgICAgICBoYXNNZW1vID0gdHJ1ZTtcbiAgICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcblxuICAgICAgICB2YXIgX25leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpO1xuXG4gICAgICAgIGlmIChpc0VxdWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBFdmVuIGlmIHRoZSBzZWxlY3RvciBoYXMgY2hhbmdlZCwgdGhlIGN1cnJlbnRseSByZW5kZXJlZCBzZWxlY3Rpb25cbiAgICAgICAgICAvLyBtYXkgYmUgZXF1YWwgdG8gdGhlIG5ldyBzZWxlY3Rpb24uIFdlIHNob3VsZCBhdHRlbXB0IHRvIHJldXNlIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgdmFsdWUgaWYgcG9zc2libGUsIHRvIHByZXNlcnZlIGRvd25zdHJlYW0gbWVtb2l6YXRpb25zLlxuICAgICAgICAgIGlmIChpbnN0Lmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdGlvbiA9IGluc3QudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChpc0VxdWFsKGN1cnJlbnRTZWxlY3Rpb24sIF9uZXh0U2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IGN1cnJlbnRTZWxlY3Rpb247XG4gICAgICAgICAgICAgIHJldHVybiBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gX25leHRTZWxlY3Rpb247XG4gICAgICAgIHJldHVybiBfbmV4dFNlbGVjdGlvbjtcbiAgICAgIH0gLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG5cblxuICAgICAgLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG4gICAgICB2YXIgcHJldlNuYXBzaG90ID0gbWVtb2l6ZWRTbmFwc2hvdDtcbiAgICAgIHZhciBwcmV2U2VsZWN0aW9uID0gbWVtb2l6ZWRTZWxlY3Rpb247XG5cbiAgICAgIGlmIChvYmplY3RJcyhwcmV2U25hcHNob3QsIG5leHRTbmFwc2hvdCkpIHtcbiAgICAgICAgLy8gVGhlIHNuYXBzaG90IGlzIHRoZSBzYW1lIGFzIGxhc3QgdGltZS4gUmV1c2UgdGhlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgcmV0dXJuIHByZXZTZWxlY3Rpb247XG4gICAgICB9IC8vIFRoZSBzbmFwc2hvdCBoYXMgY2hhbmdlZCwgc28gd2UgbmVlZCB0byBjb21wdXRlIGEgbmV3IHNlbGVjdGlvbi5cblxuXG4gICAgICAvLyBUaGUgc25hcHNob3QgaGFzIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBzZWxlY3Rpb24uXG4gICAgICB2YXIgbmV4dFNlbGVjdGlvbiA9IHNlbGVjdG9yKG5leHRTbmFwc2hvdCk7IC8vIElmIGEgY3VzdG9tIGlzRXF1YWwgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHVzZSB0aGF0IHRvIGNoZWNrIGlmIHRoZSBkYXRhXG4gICAgICAvLyBoYXMgY2hhbmdlZC4gSWYgaXQgaGFzbid0LCByZXR1cm4gdGhlIHByZXZpb3VzIHNlbGVjdGlvbi4gVGhhdCBzaWduYWxzXG4gICAgICAvLyB0byBSZWFjdCB0aGF0IHRoZSBzZWxlY3Rpb25zIGFyZSBjb25jZXB0dWFsbHkgZXF1YWwsIGFuZCB3ZSBjYW4gYmFpbFxuICAgICAgLy8gb3V0IG9mIHJlbmRlcmluZy5cblxuICAgICAgLy8gSWYgYSBjdXN0b20gaXNFcXVhbCBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdXNlIHRoYXQgdG8gY2hlY2sgaWYgdGhlIGRhdGFcbiAgICAgIC8vIGhhcyBjaGFuZ2VkLiBJZiBpdCBoYXNuJ3QsIHJldHVybiB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLiBUaGF0IHNpZ25hbHNcbiAgICAgIC8vIHRvIFJlYWN0IHRoYXQgdGhlIHNlbGVjdGlvbnMgYXJlIGNvbmNlcHR1YWxseSBlcXVhbCwgYW5kIHdlIGNhbiBiYWlsXG4gICAgICAvLyBvdXQgb2YgcmVuZGVyaW5nLlxuICAgICAgaWYgKGlzRXF1YWwgIT09IHVuZGVmaW5lZCAmJiBpc0VxdWFsKHByZXZTZWxlY3Rpb24sIG5leHRTZWxlY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiBwcmV2U2VsZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBtZW1vaXplZFNuYXBzaG90ID0gbmV4dFNuYXBzaG90O1xuICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBuZXh0U2VsZWN0aW9uO1xuICAgICAgcmV0dXJuIG5leHRTZWxlY3Rpb247XG4gICAgfTsgLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuXG5cbiAgICAvLyBBc3NpZ25pbmcgdGhpcyB0byBhIGNvbnN0YW50IHNvIHRoYXQgRmxvdyBrbm93cyBpdCBjYW4ndCBjaGFuZ2UuXG4gICAgdmFyIG1heWJlR2V0U2VydmVyU25hcHNob3QgPSBnZXRTZXJ2ZXJTbmFwc2hvdCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGdldFNlcnZlclNuYXBzaG90O1xuXG4gICAgdmFyIGdldFNuYXBzaG90V2l0aFNlbGVjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IoZ2V0U25hcHNob3QoKSk7XG4gICAgfTtcblxuICAgIHZhciBnZXRTZXJ2ZXJTbmFwc2hvdFdpdGhTZWxlY3RvciA9IG1heWJlR2V0U2VydmVyU25hcHNob3QgPT09IG51bGwgPyB1bmRlZmluZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihtYXliZUdldFNlcnZlclNuYXBzaG90KCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFtnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciwgZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3JdO1xuICB9LCBbZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90LCBzZWxlY3RvciwgaXNFcXVhbF0pLFxuICAgICAgZ2V0U2VsZWN0aW9uID0gX3VzZU1lbW9bMF0sXG4gICAgICBnZXRTZXJ2ZXJTZWxlY3Rpb24gPSBfdXNlTWVtb1sxXTtcblxuICB2YXIgdmFsdWUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNlbGVjdGlvbiwgZ2V0U2VydmVyU2VsZWN0aW9uKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbnN0Lmhhc1ZhbHVlID0gdHJ1ZTtcbiAgICBpbnN0LnZhbHVlID0gdmFsdWU7XG4gIH0sIFt2YWx1ZV0pO1xuICB1c2VEZWJ1Z1ZhbHVlKHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3I7XG4gICAgICAgICAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO1xufVxuICAgICAgICBcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXdpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBzcmMvaW5kZXgudHNcbmltcG9ydCAqIGFzIFJlYWN0MiBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yIGFzIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yMiB9IGZyb20gXCJ1c2Utc3luYy1leHRlcm5hbC1zdG9yZS93aXRoLXNlbGVjdG9yLmpzXCI7XG5cbi8vIHNyYy91dGlscy9yZWFjdC50c1xuaW1wb3J0ICogYXMgUmVhY3RPcmlnaW5hbCBmcm9tIFwicmVhY3RcIjtcbnZhciBSZWFjdCA9IChcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIC8vIEB0cy1pZ25vcmVcbiAgXCJkZWZhdWx0XCIgaW4gUmVhY3RPcmlnaW5hbCA/IFJlYWN0T3JpZ2luYWxbXCJkZWZhdWx0XCJdIDogUmVhY3RPcmlnaW5hbFxuKTtcblxuLy8gc3JjL2NvbXBvbmVudHMvQ29udGV4dC50c1xudmFyIENvbnRleHRLZXkgPSBTeW1ib2wuZm9yKGByZWFjdC1yZWR1eC1jb250ZXh0YCk7XG52YXIgZ1QgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiAoXG4gIC8qIGZhbGwgYmFjayB0byBhIHBlci1tb2R1bGUgc2NvcGUgKHByZS04LjEgYmVoYXZpb3VyKSBpZiBgZ2xvYmFsVGhpc2AgaXMgbm90IGF2YWlsYWJsZSAqL1xuICB7fVxuKTtcbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIGlmICghUmVhY3QuY3JlYXRlQ29udGV4dClcbiAgICByZXR1cm4ge307XG4gIGNvbnN0IGNvbnRleHRNYXAgPSBnVFtDb250ZXh0S2V5XSA/PyAoZ1RbQ29udGV4dEtleV0gPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbiAgbGV0IHJlYWxDb250ZXh0ID0gY29udGV4dE1hcC5nZXQoUmVhY3QuY3JlYXRlQ29udGV4dCk7XG4gIGlmICghcmVhbENvbnRleHQpIHtcbiAgICByZWFsQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXG4gICAgICBudWxsXG4gICAgKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICByZWFsQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUmVhY3RSZWR1eFwiO1xuICAgIH1cbiAgICBjb250ZXh0TWFwLnNldChSZWFjdC5jcmVhdGVDb250ZXh0LCByZWFsQ29udGV4dCk7XG4gIH1cbiAgcmV0dXJuIHJlYWxDb250ZXh0O1xufVxudmFyIFJlYWN0UmVkdXhDb250ZXh0ID0gLyogQF9fUFVSRV9fICovIGdldENvbnRleHQoKTtcblxuLy8gc3JjL3V0aWxzL3VzZVN5bmNFeHRlcm5hbFN0b3JlLnRzXG52YXIgbm90SW5pdGlhbGl6ZWQgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihcInVTRVMgbm90IGluaXRpYWxpemVkIVwiKTtcbn07XG5cbi8vIHNyYy9ob29rcy91c2VSZWR1eENvbnRleHQudHNcbmZ1bmN0aW9uIGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiB1c2VSZWR1eENvbnRleHQyKCkge1xuICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoY29udGV4dCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhY29udGV4dFZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiY291bGQgbm90IGZpbmQgcmVhY3QtcmVkdXggY29udGV4dCB2YWx1ZTsgcGxlYXNlIGVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHdyYXBwZWQgaW4gYSA8UHJvdmlkZXI+XCJcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0VmFsdWU7XG4gIH07XG59XG52YXIgdXNlUmVkdXhDb250ZXh0ID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soKTtcblxuLy8gc3JjL2hvb2tzL3VzZVNlbGVjdG9yLnRzXG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSBub3RJbml0aWFsaXplZDtcbnZhciBpbml0aWFsaXplVXNlU2VsZWN0b3IgPSAoZm4pID0+IHtcbiAgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSBmbjtcbn07XG52YXIgcmVmRXF1YWxpdHkgPSAoYSwgYikgPT4gYSA9PT0gYjtcbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9ySG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlUmVkdXhDb250ZXh0MiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlUmVkdXhDb250ZXh0IDogY3JlYXRlUmVkdXhDb250ZXh0SG9vayhjb250ZXh0KTtcbiAgY29uc3QgdXNlU2VsZWN0b3IyID0gKHNlbGVjdG9yLCBlcXVhbGl0eUZuT3JPcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB7IGVxdWFsaXR5Rm4gPSByZWZFcXVhbGl0eSwgZGV2TW9kZUNoZWNrcyA9IHt9IH0gPSB0eXBlb2YgZXF1YWxpdHlGbk9yT3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiID8geyBlcXVhbGl0eUZuOiBlcXVhbGl0eUZuT3JPcHRpb25zIH0gOiBlcXVhbGl0eUZuT3JPcHRpb25zO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYSBmdW5jdGlvbiBhcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yYCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGVxdWFsaXR5Rm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFlvdSBtdXN0IHBhc3MgYSBmdW5jdGlvbiBhcyBhbiBlcXVhbGl0eSBmdW5jdGlvbiB0byB1c2VTZWxlY3RvcmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZSxcbiAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrXG4gICAgfSA9IHVzZVJlZHV4Q29udGV4dDIoKTtcbiAgICBjb25zdCBmaXJzdFJ1biA9IFJlYWN0LnVzZVJlZih0cnVlKTtcbiAgICBjb25zdCB3cmFwcGVkU2VsZWN0b3IgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAgIHtcbiAgICAgICAgW3NlbGVjdG9yLm5hbWVdKHN0YXRlKSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RvcihzdGF0ZSk7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2s6IGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrLFxuICAgICAgICAgICAgICBzdGFiaWxpdHlDaGVjazogZmluYWxTdGFiaWxpdHlDaGVja1xuICAgICAgICAgICAgfSA9IHtcbiAgICAgICAgICAgICAgc3RhYmlsaXR5Q2hlY2ssXG4gICAgICAgICAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVjayxcbiAgICAgICAgICAgICAgLi4uZGV2TW9kZUNoZWNrc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChmaW5hbFN0YWJpbGl0eUNoZWNrID09PSBcImFsd2F5c1wiIHx8IGZpbmFsU3RhYmlsaXR5Q2hlY2sgPT09IFwib25jZVwiICYmIGZpcnN0UnVuLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgY29uc3QgdG9Db21wYXJlID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgICAgICAgICBpZiAoIWVxdWFsaXR5Rm4oc2VsZWN0ZWQsIHRvQ29tcGFyZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhY2sgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICh7IHN0YWNrIH0gPSBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgXCJTZWxlY3RvciBcIiArIChzZWxlY3Rvci5uYW1lIHx8IFwidW5rbm93blwiKSArIFwiIHJldHVybmVkIGEgZGlmZmVyZW50IHJlc3VsdCB3aGVuIGNhbGxlZCB3aXRoIHRoZSBzYW1lIHBhcmFtZXRlcnMuIFRoaXMgY2FuIGxlYWQgdG8gdW5uZWNlc3NhcnkgcmVyZW5kZXJzLlxcblNlbGVjdG9ycyB0aGF0IHJldHVybiBhIG5ldyByZWZlcmVuY2UgKHN1Y2ggYXMgYW4gb2JqZWN0IG9yIGFuIGFycmF5KSBzaG91bGQgYmUgbWVtb2l6ZWQ6IGh0dHBzOi8vcmVkdXguanMub3JnL3VzYWdlL2Rlcml2aW5nLWRhdGEtc2VsZWN0b3JzI29wdGltaXppbmctc2VsZWN0b3JzLXdpdGgtbWVtb2l6YXRpb25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDI6IHRvQ29tcGFyZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmluYWxJZGVudGl0eUZ1bmN0aW9uQ2hlY2sgPT09IFwiYWx3YXlzXCIgfHwgZmluYWxJZGVudGl0eUZ1bmN0aW9uQ2hlY2sgPT09IFwib25jZVwiICYmIGZpcnN0UnVuLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSBzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFjayA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgKHsgc3RhY2sgfSA9IGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICBcIlNlbGVjdG9yIFwiICsgKHNlbGVjdG9yLm5hbWUgfHwgXCJ1bmtub3duXCIpICsgXCIgcmV0dXJuZWQgdGhlIHJvb3Qgc3RhdGUgd2hlbiBjYWxsZWQuIFRoaXMgY2FuIGxlYWQgdG8gdW5uZWNlc3NhcnkgcmVyZW5kZXJzLlxcblNlbGVjdG9ycyB0aGF0IHJldHVybiB0aGUgZW50aXJlIHN0YXRlIGFyZSBhbG1vc3QgY2VydGFpbmx5IGEgbWlzdGFrZSwgYXMgdGhleSB3aWxsIGNhdXNlIGEgcmVyZW5kZXIgd2hlbmV2ZXIgKmFueXRoaW5nKiBpbiBzdGF0ZSBjaGFuZ2VzLlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGFjayB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpcnN0UnVuLmN1cnJlbnQpXG4gICAgICAgICAgICAgIGZpcnN0UnVuLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgICAgICB9XG4gICAgICB9W3NlbGVjdG9yLm5hbWVdLFxuICAgICAgW3NlbGVjdG9yLCBzdGFiaWxpdHlDaGVjaywgZGV2TW9kZUNoZWNrcy5zdGFiaWxpdHlDaGVja11cbiAgICApO1xuICAgIGNvbnN0IHNlbGVjdGVkU3RhdGUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihcbiAgICAgIHN1YnNjcmlwdGlvbi5hZGROZXN0ZWRTdWIsXG4gICAgICBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgIGdldFNlcnZlclN0YXRlIHx8IHN0b3JlLmdldFN0YXRlLFxuICAgICAgd3JhcHBlZFNlbGVjdG9yLFxuICAgICAgZXF1YWxpdHlGblxuICAgICk7XG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZShzZWxlY3RlZFN0YXRlKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRTdGF0ZTtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbih1c2VTZWxlY3RvcjIsIHtcbiAgICB3aXRoVHlwZXM6ICgpID0+IHVzZVNlbGVjdG9yMlxuICB9KTtcbiAgcmV0dXJuIHVzZVNlbGVjdG9yMjtcbn1cbnZhciB1c2VTZWxlY3RvciA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTZWxlY3Rvckhvb2soKTtcblxuLy8gc3JjL3V0aWxzL3JlYWN0LWlzLnRzXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik7XG52YXIgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zZXJ2ZXJfY29udGV4dFwiKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Qub2Zmc2NyZWVuXCIpO1xudmFyIFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKFwicmVhY3QuY2xpZW50LnJlZmVyZW5jZVwiKTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIiAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICBjb25zdCAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRToge1xuICAgICAgICBjb25zdCB0eXBlID0gb2JqZWN0LnR5cGU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGNvbnN0ICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOiB7XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZvaWQgMDtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5cbi8vIHNyYy91dGlscy93YXJuaW5nLnRzXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIHRyeSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxuLy8gc3JjL2Nvbm5lY3QvdmVyaWZ5U3Vic2VsZWN0b3JzLnRzXG5mdW5jdGlvbiB2ZXJpZnkoc2VsZWN0b3IsIG1ldGhvZE5hbWUpIHtcbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCB2YWx1ZSBmb3IgJHttZXRob2ROYW1lfSBpbiBjb25uZWN0LmApO1xuICB9IGVsc2UgaWYgKG1ldGhvZE5hbWUgPT09IFwibWFwU3RhdGVUb1Byb3BzXCIgfHwgbWV0aG9kTmFtZSA9PT0gXCJtYXBEaXNwYXRjaFRvUHJvcHNcIikge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNlbGVjdG9yLCBcImRlcGVuZHNPbk93blByb3BzXCIpKSB7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICBgVGhlIHNlbGVjdG9yIGZvciAke21ldGhvZE5hbWV9IG9mIGNvbm5lY3QgZGlkIG5vdCBzcGVjaWZ5IGEgdmFsdWUgZm9yIGRlcGVuZHNPbk93blByb3BzLmBcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpIHtcbiAgdmVyaWZ5KG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIik7XG4gIHZlcmlmeShtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpO1xuICB2ZXJpZnkobWVyZ2VQcm9wcywgXCJtZXJnZVByb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9zZWxlY3RvckZhY3RvcnkudHNcbmZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwge1xuICBhcmVTdGF0ZXNFcXVhbCxcbiAgYXJlT3duUHJvcHNFcXVhbCxcbiAgYXJlU3RhdGVQcm9wc0VxdWFsXG59KSB7XG4gIGxldCBoYXNSdW5BdExlYXN0T25jZSA9IGZhbHNlO1xuICBsZXQgc3RhdGU7XG4gIGxldCBvd25Qcm9wcztcbiAgbGV0IHN0YXRlUHJvcHM7XG4gIGxldCBkaXNwYXRjaFByb3BzO1xuICBsZXQgbWVyZ2VkUHJvcHM7XG4gIGZ1bmN0aW9uIGhhbmRsZUZpcnN0Q2FsbChmaXJzdFN0YXRlLCBmaXJzdE93blByb3BzKSB7XG4gICAgc3RhdGUgPSBmaXJzdFN0YXRlO1xuICAgIG93blByb3BzID0gZmlyc3RPd25Qcm9wcztcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgaGFzUnVuQXRMZWFzdE9uY2UgPSB0cnVlO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCkge1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzKCkge1xuICAgIGlmIChtYXBTdGF0ZVRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdTdGF0ZSgpIHtcbiAgICBjb25zdCBuZXh0U3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlUHJvcHNDaGFuZ2VkID0gIWFyZVN0YXRlUHJvcHNFcXVhbChuZXh0U3RhdGVQcm9wcywgc3RhdGVQcm9wcyk7XG4gICAgc3RhdGVQcm9wcyA9IG5leHRTdGF0ZVByb3BzO1xuICAgIGlmIChzdGF0ZVByb3BzQ2hhbmdlZClcbiAgICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIGNvbnN0IHByb3BzQ2hhbmdlZCA9ICFhcmVPd25Qcm9wc0VxdWFsKG5leHRPd25Qcm9wcywgb3duUHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlQ2hhbmdlZCA9ICFhcmVTdGF0ZXNFcXVhbChcbiAgICAgIG5leHRTdGF0ZSxcbiAgICAgIHN0YXRlLFxuICAgICAgbmV4dE93blByb3BzLFxuICAgICAgb3duUHJvcHNcbiAgICApO1xuICAgIHN0YXRlID0gbmV4dFN0YXRlO1xuICAgIG93blByb3BzID0gbmV4dE93blByb3BzO1xuICAgIGlmIChwcm9wc0NoYW5nZWQgJiYgc3RhdGVDaGFuZ2VkKVxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKTtcbiAgICBpZiAocHJvcHNDaGFuZ2VkKVxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1Byb3BzKCk7XG4gICAgaWYgKHN0YXRlQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdTdGF0ZSgpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvcihuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIHJldHVybiBoYXNSdW5BdExlYXN0T25jZSA/IGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykgOiBoYW5kbGVGaXJzdENhbGwobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpO1xuICB9O1xufVxuZnVuY3Rpb24gZmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShkaXNwYXRjaCwge1xuICBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICBpbml0TWVyZ2VQcm9wcyxcbiAgLi4ub3B0aW9uc1xufSkge1xuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBpbml0TWFwU3RhdGVUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGNvbnN0IG1lcmdlUHJvcHMgPSBpbml0TWVyZ2VQcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpO1xuICB9XG4gIHJldHVybiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIG9wdGlvbnMpO1xufVxuXG4vLyBzcmMvdXRpbHMvYmluZEFjdGlvbkNyZWF0b3JzLnRzXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGNvbnN0IGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICBjb25zdCBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gKC4uLmFyZ3MpID0+IGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IoLi4uYXJncykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuLy8gc3JjL3V0aWxzL2lzUGxhaW5PYmplY3QudHNcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiIHx8IG9iaiA9PT0gbnVsbClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG4gIGlmIChwcm90byA9PT0gbnVsbClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgbGV0IGJhc2VQcm90byA9IHByb3RvO1xuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90bykgIT09IG51bGwpIHtcbiAgICBiYXNlUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKTtcbiAgfVxuICByZXR1cm4gcHJvdG8gPT09IGJhc2VQcm90bztcbn1cblxuLy8gc3JjL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LnRzXG5mdW5jdGlvbiB2ZXJpZnlQbGFpbk9iamVjdCh2YWx1ZSwgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm5pbmcoXG4gICAgICBgJHttZXRob2ROYW1lfSgpIGluICR7ZGlzcGxheU5hbWV9IG11c3QgcmV0dXJuIGEgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkIHJlY2VpdmVkICR7dmFsdWV9LmBcbiAgICApO1xuICB9XG59XG5cbi8vIHNyYy9jb25uZWN0L3dyYXBNYXBUb1Byb3BzLnRzXG5mdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGdldENvbnN0YW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0Q29uc3RhbnRTZWxlY3RvcihkaXNwYXRjaCkge1xuICAgIGNvbnN0IGNvbnN0YW50ID0gZ2V0Q29uc3RhbnQoZGlzcGF0Y2gpO1xuICAgIGZ1bmN0aW9uIGNvbnN0YW50U2VsZWN0b3IoKSB7XG4gICAgICByZXR1cm4gY29uc3RhbnQ7XG4gICAgfVxuICAgIGNvbnN0YW50U2VsZWN0b3IuZGVwZW5kc09uT3duUHJvcHMgPSBmYWxzZTtcbiAgICByZXR1cm4gY29uc3RhbnRTZWxlY3RvcjtcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMgPyBCb29sZWFuKG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIDogbWFwVG9Qcm9wcy5sZW5ndGggIT09IDE7XG59XG5mdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwVG9Qcm9wcywgbWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdFByb3h5U2VsZWN0b3IoZGlzcGF0Y2gsIHsgZGlzcGxheU5hbWUgfSkge1xuICAgIGNvbnN0IHByb3h5ID0gZnVuY3Rpb24gbWFwVG9Qcm9wc1Byb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHJldHVybiBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA/IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykgOiBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgdm9pZCAwKTtcbiAgICB9O1xuICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gdHJ1ZTtcbiAgICBwcm94eS5tYXBUb1Byb3BzID0gZnVuY3Rpb24gZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICBwcm94eS5tYXBUb1Byb3BzID0gbWFwVG9Qcm9wcztcbiAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcyk7XG4gICAgICBsZXQgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBwcm94eS5tYXBUb1Byb3BzID0gcHJvcHM7XG4gICAgICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gZ2V0RGVwZW5kc09uT3duUHJvcHMocHJvcHMpO1xuICAgICAgICBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgICAgfVxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgdmVyaWZ5UGxhaW5PYmplY3QocHJvcHMsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgIHJldHVybiBwcm9wcztcbiAgICB9O1xuICAgIHJldHVybiBwcm94eTtcbiAgfTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvaW52YWxpZEFyZ0ZhY3RvcnkudHNcbmZ1bmN0aW9uIGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KGFyZywgbmFtZSkge1xuICByZXR1cm4gKGRpc3BhdGNoLCBvcHRpb25zKSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgdmFsdWUgb2YgdHlwZSAke3R5cGVvZiBhcmd9IGZvciAke25hbWV9IGFyZ3VtZW50IHdoZW4gY29ubmVjdGluZyBjb21wb25lbnQgJHtvcHRpb25zLndyYXBwZWRDb21wb25lbnROYW1lfS5gXG4gICAgKTtcbiAgfTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvbWFwRGlzcGF0Y2hUb1Byb3BzLnRzXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gbWFwRGlzcGF0Y2hUb1Byb3BzICYmIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09IFwib2JqZWN0XCIgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KFxuICAgIChkaXNwYXRjaCkgPT4gKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgYmluZEFjdGlvbkNyZWF0b3JzKG1hcERpc3BhdGNoVG9Qcm9wcywgZGlzcGF0Y2gpXG4gICAgKVxuICApIDogIW1hcERpc3BhdGNoVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoKGRpc3BhdGNoKSA9PiAoe1xuICAgIGRpc3BhdGNoXG4gIH0pKSA6IHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd3JhcE1hcFRvUHJvcHNGdW5jKG1hcERpc3BhdGNoVG9Qcm9wcywgXCJtYXBEaXNwYXRjaFRvUHJvcHNcIilcbiAgKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1hcERpc3BhdGNoVG9Qcm9wcywgXCJtYXBEaXNwYXRjaFRvUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L21hcFN0YXRlVG9Qcm9wcy50c1xuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBTdGF0ZVRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KCgpID0+ICh7fSkpIDogdHlwZW9mIG1hcFN0YXRlVG9Qcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwU3RhdGVUb1Byb3BzLCBcIm1hcFN0YXRlVG9Qcm9wc1wiKVxuICApIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBcIm1hcFN0YXRlVG9Qcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3QvbWVyZ2VQcm9wcy50c1xuZnVuY3Rpb24gZGVmYXVsdE1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHsgLi4ub3duUHJvcHMsIC4uLnN0YXRlUHJvcHMsIC4uLmRpc3BhdGNoUHJvcHMgfTtcbn1cbmZ1bmN0aW9uIHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0TWVyZ2VQcm9wc1Byb3h5KGRpc3BhdGNoLCB7IGRpc3BsYXlOYW1lLCBhcmVNZXJnZWRQcm9wc0VxdWFsIH0pIHtcbiAgICBsZXQgaGFzUnVuT25jZSA9IGZhbHNlO1xuICAgIGxldCBtZXJnZWRQcm9wcztcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VQcm9wc1Byb3h5KHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gICAgICBjb25zdCBuZXh0TWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICAgIGlmIChoYXNSdW5PbmNlKSB7XG4gICAgICAgIGlmICghYXJlTWVyZ2VkUHJvcHNFcXVhbChuZXh0TWVyZ2VkUHJvcHMsIG1lcmdlZFByb3BzKSlcbiAgICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhc1J1bk9uY2UgPSB0cnVlO1xuICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICB2ZXJpZnlQbGFpbk9iamVjdChtZXJnZWRQcm9wcywgZGlzcGxheU5hbWUsIFwibWVyZ2VQcm9wc1wiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gbWVyZ2VQcm9wc0ZhY3RvcnkobWVyZ2VQcm9wcykge1xuICByZXR1cm4gIW1lcmdlUHJvcHMgPyAoKSA9PiBkZWZhdWx0TWVyZ2VQcm9wcyA6IHR5cGVvZiBtZXJnZVByb3BzID09PSBcImZ1bmN0aW9uXCIgPyB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtZXJnZVByb3BzLCBcIm1lcmdlUHJvcHNcIik7XG59XG5cbi8vIHNyYy91dGlscy9iYXRjaC50c1xuZnVuY3Rpb24gZGVmYXVsdE5vb3BCYXRjaChjYWxsYmFjaykge1xuICBjYWxsYmFjaygpO1xufVxuXG4vLyBzcmMvdXRpbHMvU3Vic2NyaXB0aW9uLnRzXG5mdW5jdGlvbiBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKSB7XG4gIGxldCBmaXJzdCA9IG51bGw7XG4gIGxldCBsYXN0ID0gbnVsbDtcbiAgcmV0dXJuIHtcbiAgICBjbGVhcigpIHtcbiAgICAgIGZpcnN0ID0gbnVsbDtcbiAgICAgIGxhc3QgPSBudWxsO1xuICAgIH0sXG4gICAgbm90aWZ5KCkge1xuICAgICAgZGVmYXVsdE5vb3BCYXRjaCgoKSA9PiB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IGZpcnN0O1xuICAgICAgICB3aGlsZSAobGlzdGVuZXIpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjaygpO1xuICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgIGxldCBsaXN0ZW5lciA9IGZpcnN0O1xuICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICB9LFxuICAgIHN1YnNjcmliZShjYWxsYmFjaykge1xuICAgICAgbGV0IGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGxhc3QgPSB7XG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICBwcmV2OiBsYXN0XG4gICAgICB9O1xuICAgICAgaWYgKGxpc3RlbmVyLnByZXYpIHtcbiAgICAgICAgbGlzdGVuZXIucHJldi5uZXh0ID0gbGlzdGVuZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXJzdCA9IGxpc3RlbmVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBpZiAoIWlzU3Vic2NyaWJlZCB8fCBmaXJzdCA9PT0gbnVsbClcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICBpZiAobGlzdGVuZXIubmV4dCkge1xuICAgICAgICAgIGxpc3RlbmVyLm5leHQucHJldiA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdCA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3RlbmVyLnByZXYpIHtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpcnN0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG52YXIgbnVsbExpc3RlbmVycyA9IHtcbiAgbm90aWZ5KCkge1xuICB9LFxuICBnZXQ6ICgpID0+IFtdXG59O1xuZnVuY3Rpb24gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlLCBwYXJlbnRTdWIpIHtcbiAgbGV0IHVuc3Vic2NyaWJlO1xuICBsZXQgbGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgbGV0IHN1YnNjcmlwdGlvbnNBbW91bnQgPSAwO1xuICBsZXQgc2VsZlN1YnNjcmliZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gYWRkTmVzdGVkU3ViKGxpc3RlbmVyKSB7XG4gICAgdHJ5U3Vic2NyaWJlKCk7XG4gICAgY29uc3QgY2xlYW51cExpc3RlbmVyID0gbGlzdGVuZXJzLnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgbGV0IHJlbW92ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKCFyZW1vdmVkKSB7XG4gICAgICAgIHJlbW92ZWQgPSB0cnVlO1xuICAgICAgICBjbGVhbnVwTGlzdGVuZXIoKTtcbiAgICAgICAgdHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG5vdGlmeU5lc3RlZFN1YnMoKSB7XG4gICAgbGlzdGVuZXJzLm5vdGlmeSgpO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVdyYXBwZXIoKSB7XG4gICAgaWYgKHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlKSB7XG4gICAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpc1N1YnNjcmliZWQoKSB7XG4gICAgcmV0dXJuIHNlbGZTdWJzY3JpYmVkO1xuICB9XG4gIGZ1bmN0aW9uIHRyeVN1YnNjcmliZSgpIHtcbiAgICBzdWJzY3JpcHRpb25zQW1vdW50Kys7XG4gICAgaWYgKCF1bnN1YnNjcmliZSkge1xuICAgICAgdW5zdWJzY3JpYmUgPSBwYXJlbnRTdWIgPyBwYXJlbnRTdWIuYWRkTmVzdGVkU3ViKGhhbmRsZUNoYW5nZVdyYXBwZXIpIDogc3RvcmUuc3Vic2NyaWJlKGhhbmRsZUNoYW5nZVdyYXBwZXIpO1xuICAgICAgbGlzdGVuZXJzID0gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlKCkge1xuICAgIHN1YnNjcmlwdGlvbnNBbW91bnQtLTtcbiAgICBpZiAodW5zdWJzY3JpYmUgJiYgc3Vic2NyaXB0aW9uc0Ftb3VudCA9PT0gMCkge1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgIHVuc3Vic2NyaWJlID0gdm9pZCAwO1xuICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICBsaXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlTdWJzY3JpYmVTZWxmKCkge1xuICAgIGlmICghc2VsZlN1YnNjcmliZWQpIHtcbiAgICAgIHNlbGZTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgIHRyeVN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZVNlbGYoKSB7XG4gICAgaWYgKHNlbGZTdWJzY3JpYmVkKSB7XG4gICAgICBzZWxmU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgdHJ5VW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc3Vic2NyaXB0aW9uID0ge1xuICAgIGFkZE5lc3RlZFN1YixcbiAgICBub3RpZnlOZXN0ZWRTdWJzLFxuICAgIGhhbmRsZUNoYW5nZVdyYXBwZXIsXG4gICAgaXNTdWJzY3JpYmVkLFxuICAgIHRyeVN1YnNjcmliZTogdHJ5U3Vic2NyaWJlU2VsZixcbiAgICB0cnlVbnN1YnNjcmliZTogdHJ5VW5zdWJzY3JpYmVTZWxmLFxuICAgIGdldExpc3RlbmVyczogKCkgPT4gbGlzdGVuZXJzXG4gIH07XG4gIHJldHVybiBzdWJzY3JpcHRpb247XG59XG5cbi8vIHNyYy91dGlscy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0LnRzXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIik7XG52YXIgaXNSZWFjdE5hdGl2ZSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIjtcbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gY2FuVXNlRE9NIHx8IGlzUmVhY3ROYXRpdmUgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG5cbi8vIHNyYy91dGlscy9zaGFsbG93RXF1YWwudHNcbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAoaXMob2JqQSwgb2JqQikpXG4gICAgcmV0dXJuIHRydWU7XG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gXCJvYmplY3RcIiB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgY29uc3Qga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gc3JjL3V0aWxzL2hvaXN0U3RhdGljcy50c1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJCR0eXBlb2Y6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJCR0eXBlb2Y6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7XG4gIFtGb3J3YXJkUmVmXTogRk9SV0FSRF9SRUZfU1RBVElDUyxcbiAgW01lbW9dOiBNRU1PX1NUQVRJQ1Ncbn07XG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICBpZiAoaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9XG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50W1wiJCR0eXBlb2ZcIl1dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICBjb25zdCBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgY29uc3Qgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG4vLyBzcmMvY29tcG9uZW50cy9jb25uZWN0LnRzeFxudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gbm90SW5pdGlhbGl6ZWQ7XG52YXIgaW5pdGlhbGl6ZUNvbm5lY3QgPSAoZm4pID0+IHtcbiAgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBmbjtcbn07XG52YXIgTk9fU1VCU0NSSVBUSU9OX0FSUkFZID0gW251bGwsIG51bGxdO1xudmFyIHN0cmluZ2lmeUNvbXBvbmVudCA9IChDb21wKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KENvbXApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nKENvbXApO1xuICB9XG59O1xuZnVuY3Rpb24gdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGVmZmVjdEZ1bmMsIGVmZmVjdEFyZ3MsIGRlcGVuZGVuY2llcykge1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IGVmZmVjdEZ1bmMoLi4uZWZmZWN0QXJncyksIGRlcGVuZGVuY2llcyk7XG59XG5mdW5jdGlvbiBjYXB0dXJlV3JhcHBlclByb3BzKGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgd3JhcHBlclByb3BzLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzKSB7XG4gIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCA9IHdyYXBwZXJQcm9wcztcbiAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IGZhbHNlO1xuICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50KSB7XG4gICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbnVsbDtcbiAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHN1YnNjcmliZVVwZGF0ZXMoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLCBzdG9yZSwgc3Vic2NyaXB0aW9uLCBjaGlsZFByb3BzU2VsZWN0b3IsIGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgaXNNb3VudGVkLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzLCBhZGRpdGlvbmFsU3Vic2NyaWJlTGlzdGVuZXIpIHtcbiAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICBsZXQgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgbGV0IGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gIGNvbnN0IGNoZWNrRm9yVXBkYXRlcyA9ICgpID0+IHtcbiAgICBpZiAoZGlkVW5zdWJzY3JpYmUgfHwgIWlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxhdGVzdFN0b3JlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIGxldCBuZXdDaGlsZFByb3BzLCBlcnJvcjtcbiAgICB0cnkge1xuICAgICAgbmV3Q2hpbGRQcm9wcyA9IGNoaWxkUHJvcHNTZWxlY3RvcihcbiAgICAgICAgbGF0ZXN0U3RvcmVTdGF0ZSxcbiAgICAgICAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50XG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yID0gZTtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IGU7XG4gICAgfVxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gICAgfVxuICAgIGlmIChuZXdDaGlsZFByb3BzID09PSBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50KSB7XG4gICAgICBpZiAoIXJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQpIHtcbiAgICAgICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICByZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGFkZGl0aW9uYWxTdWJzY3JpYmVMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcbiAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBjaGVja0ZvclVwZGF0ZXM7XG4gIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgY2hlY2tGb3JVcGRhdGVzKCk7XG4gIGNvbnN0IHVuc3Vic2NyaWJlV3JhcHBlciA9ICgpID0+IHtcbiAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBudWxsO1xuICAgIGlmIChsYXN0VGhyb3duRXJyb3IpIHtcbiAgICAgIHRocm93IGxhc3RUaHJvd25FcnJvcjtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1bnN1YnNjcmliZVdyYXBwZXI7XG59XG5mdW5jdGlvbiBzdHJpY3RFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufVxudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24gPSBmYWxzZTtcbmZ1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIHtcbiAgLy8gVGhlIGBwdXJlYCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZCwgc28gVFMgZG9lc24ndCBsaWtlIHVzIGRlc3RydWN0dXJpbmcgdGhpcyB0byBjaGVjayBpdHMgZXhpc3RlbmNlLlxuICAvLyBAdHMtaWdub3JlXG4gIHB1cmUsXG4gIGFyZVN0YXRlc0VxdWFsID0gc3RyaWN0RXF1YWwsXG4gIGFyZU93blByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIGFyZVN0YXRlUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgLy8gdXNlIFJlYWN0J3MgZm9yd2FyZFJlZiB0byBleHBvc2UgYSByZWYgb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50XG4gIGZvcndhcmRSZWYgPSBmYWxzZSxcbiAgLy8gdGhlIGNvbnRleHQgY29uc3VtZXIgdG8gdXNlXG4gIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dFxufSA9IHt9KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAocHVyZSAhPT0gdm9pZCAwICYmICFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgICdUaGUgYHB1cmVgIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLiBgY29ubmVjdGAgaXMgbm93IGFsd2F5cyBhIFwicHVyZS9tZW1vaXplZFwiIGNvbXBvbmVudCdcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGNvbnN0IENvbnRleHQgPSBjb250ZXh0O1xuICBjb25zdCBpbml0TWFwU3RhdGVUb1Byb3BzID0gbWFwU3RhdGVUb1Byb3BzRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMpO1xuICBjb25zdCBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpO1xuICBjb25zdCBpbml0TWVyZ2VQcm9wcyA9IG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpO1xuICBjb25zdCBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMgPSBCb29sZWFuKG1hcFN0YXRlVG9Qcm9wcyk7XG4gIGNvbnN0IHdyYXBXaXRoQ29ubmVjdCA9IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc3QgaXNWYWxpZCA9IC8qIEBfX1BVUkVfXyAqLyBpc1ZhbGlkRWxlbWVudFR5cGUoV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICBpZiAoIWlzVmFsaWQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgWW91IG11c3QgcGFzcyBhIGNvbXBvbmVudCB0byB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgY29ubmVjdC4gSW5zdGVhZCByZWNlaXZlZCAke3N0cmluZ2lmeUNvbXBvbmVudChcbiAgICAgICAgICAgIFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgICApfWBcbiAgICAgICAgKTtcbiAgICB9XG4gICAgY29uc3Qgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCBcIkNvbXBvbmVudFwiO1xuICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gYENvbm5lY3QoJHt3cmFwcGVkQ29tcG9uZW50TmFtZX0pYDtcbiAgICBjb25zdCBzZWxlY3RvckZhY3RvcnlPcHRpb25zID0ge1xuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgZGlzcGxheU5hbWUsXG4gICAgICB3cmFwcGVkQ29tcG9uZW50TmFtZSxcbiAgICAgIFdyYXBwZWRDb21wb25lbnQsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIGluaXRNZXJnZVByb3BzLFxuICAgICAgYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbFxuICAgIH07XG4gICAgZnVuY3Rpb24gQ29ubmVjdEZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICBjb25zdCBbcHJvcHNDb250ZXh0LCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCB3cmFwcGVyUHJvcHNdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjogcmVhY3RSZWR1eEZvcndhcmRlZFJlZjIsIC4uLndyYXBwZXJQcm9wczIgfSA9IHByb3BzO1xuICAgICAgICByZXR1cm4gW3Byb3BzLmNvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYyLCB3cmFwcGVyUHJvcHMyXTtcbiAgICAgIH0sIFtwcm9wc10pO1xuICAgICAgY29uc3QgQ29udGV4dFRvVXNlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGxldCBSZXN1bHRDb250ZXh0ID0gQ29udGV4dDtcbiAgICAgICAgaWYgKHByb3BzQ29udGV4dD8uQ29uc3VtZXIpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gLyogQF9fUFVSRV9fICovIGlzQ29udGV4dENvbnN1bWVyKFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KHByb3BzQ29udGV4dC5Db25zdW1lciwgbnVsbClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIFwiWW91IG11c3QgcGFzcyBhIHZhbGlkIFJlYWN0IGNvbnRleHQgY29uc3VtZXIgYXMgYHByb3BzLmNvbnRleHRgXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlc3VsdENvbnRleHQgPSBwcm9wc0NvbnRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZXN1bHRDb250ZXh0O1xuICAgICAgfSwgW3Byb3BzQ29udGV4dCwgQ29udGV4dF0pO1xuICAgICAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0VG9Vc2UpO1xuICAgICAgY29uc3QgZGlkU3RvcmVDb21lRnJvbVByb3BzID0gQm9vbGVhbihwcm9wcy5zdG9yZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5nZXRTdGF0ZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5kaXNwYXRjaCk7XG4gICAgICBjb25zdCBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA9IEJvb2xlYW4oY29udGV4dFZhbHVlKSAmJiBCb29sZWFuKGNvbnRleHRWYWx1ZS5zdG9yZSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFkaWRTdG9yZUNvbWVGcm9tUHJvcHMgJiYgIWRpZFN0b3JlQ29tZUZyb21Db250ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ291bGQgbm90IGZpbmQgXCJzdG9yZVwiIGluIHRoZSBjb250ZXh0IG9mIFwiJHtkaXNwbGF5TmFtZX1cIi4gRWl0aGVyIHdyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGEgPFByb3ZpZGVyPiwgb3IgcGFzcyBhIGN1c3RvbSBSZWFjdCBjb250ZXh0IHByb3ZpZGVyIHRvIDxQcm92aWRlcj4gYW5kIHRoZSBjb3JyZXNwb25kaW5nIFJlYWN0IGNvbnRleHQgY29uc3VtZXIgdG8gJHtkaXNwbGF5TmFtZX0gaW4gY29ubmVjdCBvcHRpb25zLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0b3JlID0gZGlkU3RvcmVDb21lRnJvbVByb3BzID8gcHJvcHMuc3RvcmUgOiBjb250ZXh0VmFsdWUuc3RvcmU7XG4gICAgICBjb25zdCBnZXRTZXJ2ZXJTdGF0ZSA9IGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID8gY29udGV4dFZhbHVlLmdldFNlcnZlclN0YXRlIDogc3RvcmUuZ2V0U3RhdGU7XG4gICAgICBjb25zdCBjaGlsZFByb3BzU2VsZWN0b3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnkoc3RvcmUuZGlzcGF0Y2gsIHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMpO1xuICAgICAgfSwgW3N0b3JlXSk7XG4gICAgICBjb25zdCBbc3Vic2NyaXB0aW9uLCBub3RpZnlOZXN0ZWRTdWJzXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcylcbiAgICAgICAgICByZXR1cm4gTk9fU1VCU0NSSVBUSU9OX0FSUkFZO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24yID0gY3JlYXRlU3Vic2NyaXB0aW9uKFxuICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgIGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHZvaWQgMCA6IGNvbnRleHRWYWx1ZS5zdWJzY3JpcHRpb25cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgbm90aWZ5TmVzdGVkU3ViczIgPSBzdWJzY3JpcHRpb24yLm5vdGlmeU5lc3RlZFN1YnMuYmluZChzdWJzY3JpcHRpb24yKTtcbiAgICAgICAgcmV0dXJuIFtzdWJzY3JpcHRpb24yLCBub3RpZnlOZXN0ZWRTdWJzMl07XG4gICAgICB9LCBbc3RvcmUsIGRpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlXSk7XG4gICAgICBjb25zdCBvdmVycmlkZGVuQ29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChkaWRTdG9yZUNvbWVGcm9tUHJvcHMpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uY29udGV4dFZhbHVlLFxuICAgICAgICAgIHN1YnNjcmlwdGlvblxuICAgICAgICB9O1xuICAgICAgfSwgW2RpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlLCBzdWJzY3JpcHRpb25dKTtcbiAgICAgIGNvbnN0IGxhc3RDaGlsZFByb3BzID0gUmVhY3QudXNlUmVmKHZvaWQgMCk7XG4gICAgICBjb25zdCBsYXN0V3JhcHBlclByb3BzID0gUmVhY3QudXNlUmVmKHdyYXBwZXJQcm9wcyk7XG4gICAgICBjb25zdCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlID0gUmVhY3QudXNlUmVmKHZvaWQgMCk7XG4gICAgICBjb25zdCByZW5kZXJJc1NjaGVkdWxlZCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgICBjb25zdCBpc01vdW50ZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgICAgY29uc3QgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvciA9IFJlYWN0LnVzZVJlZihcbiAgICAgICAgdm9pZCAwXG4gICAgICApO1xuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgfSwgW10pO1xuICAgICAgY29uc3QgYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgJiYgd3JhcHBlclByb3BzID09PSBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaGlsZFByb3BzU2VsZWN0b3Ioc3RvcmUuZ2V0U3RhdGUoKSwgd3JhcHBlclByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgfSwgW3N0b3JlLCB3cmFwcGVyUHJvcHNdKTtcbiAgICAgIGNvbnN0IHN1YnNjcmliZUZvclJlYWN0ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZSA9IChyZWFjdExpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlVXBkYXRlcyhcbiAgICAgICAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2hpbGRQcm9wc1NlbGVjdG9yLFxuICAgICAgICAgICAgbGFzdFdyYXBwZXJQcm9wcyxcbiAgICAgICAgICAgIGxhc3RDaGlsZFByb3BzLFxuICAgICAgICAgICAgcmVuZGVySXNTY2hlZHVsZWQsXG4gICAgICAgICAgICBpc01vdW50ZWQsXG4gICAgICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLFxuICAgICAgICAgICAgbm90aWZ5TmVzdGVkU3VicyxcbiAgICAgICAgICAgIHJlYWN0TGlzdGVuZXJcbiAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlO1xuICAgICAgfSwgW3N1YnNjcmlwdGlvbl0pO1xuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGNhcHR1cmVXcmFwcGVyUHJvcHMsIFtcbiAgICAgICAgbGFzdFdyYXBwZXJQcm9wcyxcbiAgICAgICAgbGFzdENoaWxkUHJvcHMsXG4gICAgICAgIHJlbmRlcklzU2NoZWR1bGVkLFxuICAgICAgICB3cmFwcGVyUHJvcHMsXG4gICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsXG4gICAgICAgIG5vdGlmeU5lc3RlZFN1YnNcbiAgICAgIF0pO1xuICAgICAgbGV0IGFjdHVhbENoaWxkUHJvcHM7XG4gICAgICB0cnkge1xuICAgICAgICBhY3R1YWxDaGlsZFByb3BzID0gdXNlU3luY0V4dGVybmFsU3RvcmUoXG4gICAgICAgICAgLy8gVE9ETyBXZSdyZSBwYXNzaW5nIHRocm91Z2ggYSBiaWcgd3JhcHBlciB0aGF0IGRvZXMgYSBidW5jaCBvZiBleHRyYSBzaWRlIGVmZmVjdHMgYmVzaWRlcyBzdWJzY3JpYmluZ1xuICAgICAgICAgIHN1YnNjcmliZUZvclJlYWN0LFxuICAgICAgICAgIC8vIFRPRE8gVGhpcyBpcyBpbmNyZWRpYmx5IGhhY2t5LiBXZSd2ZSBhbHJlYWR5IHByb2Nlc3NlZCB0aGUgc3RvcmUgdXBkYXRlIGFuZCBjYWxjdWxhdGVkIG5ldyBjaGlsZCBwcm9wcyxcbiAgICAgICAgICAvLyBUT0RPIGFuZCB3ZSdyZSBqdXN0IHBhc3NpbmcgdGhhdCB0aHJvdWdoIHNvIGl0IHRyaWdnZXJzIGEgcmUtcmVuZGVyIGZvciB1cyByYXRoZXIgdGhhbiByZWx5aW5nIG9uIGB1U0VTYC5cbiAgICAgICAgICBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3IsXG4gICAgICAgICAgZ2V0U2VydmVyU3RhdGUgPyAoKSA9PiBjaGlsZFByb3BzU2VsZWN0b3IoZ2V0U2VydmVyU3RhdGUoKSwgd3JhcHBlclByb3BzKSA6IGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvclxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQpIHtcbiAgICAgICAgICA7XG4gICAgICAgICAgZXJyLm1lc3NhZ2UgKz0gYFxuVGhlIGVycm9yIG1heSBiZSBjb3JyZWxhdGVkIHdpdGggdGhpcyBwcmV2aW91cyBlcnJvcjpcbiR7bGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50LnN0YWNrfVxuXG5gO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQgPSB2b2lkIDA7XG4gICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IHZvaWQgMDtcbiAgICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IGFjdHVhbENoaWxkUHJvcHM7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFdyYXBwZWRDb21wb25lbnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLmFjdHVhbENoaWxkUHJvcHMsXG4gICAgICAgICAgICAgIHJlZjogcmVhY3RSZWR1eEZvcndhcmRlZFJlZlxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0sIFtyZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCBXcmFwcGVkQ29tcG9uZW50LCBhY3R1YWxDaGlsZFByb3BzXSk7XG4gICAgICBjb25zdCByZW5kZXJlZENoaWxkID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHtcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dFRvVXNlLlByb3ZpZGVyLCB7IHZhbHVlOiBvdmVycmlkZGVuQ29udGV4dFZhbHVlIH0sIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIH0sIFtDb250ZXh0VG9Vc2UsIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCwgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZV0pO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGQ7XG4gICAgfVxuICAgIGNvbnN0IF9Db25uZWN0ID0gUmVhY3QubWVtbyhDb25uZWN0RnVuY3Rpb24pO1xuICAgIGNvbnN0IENvbm5lY3QgPSBfQ29ubmVjdDtcbiAgICBDb25uZWN0LldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgIENvbm5lY3QuZGlzcGxheU5hbWUgPSBDb25uZWN0RnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICBpZiAoZm9yd2FyZFJlZikge1xuICAgICAgY29uc3QgX2ZvcndhcmRlZCA9IFJlYWN0LmZvcndhcmRSZWYoXG4gICAgICAgIGZ1bmN0aW9uIGZvcndhcmRDb25uZWN0UmVmKHByb3BzLCByZWYpIHtcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29ubmVjdCwgeyAuLi5wcm9wcywgcmVhY3RSZWR1eEZvcndhcmRlZFJlZjogcmVmIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc3QgZm9yd2FyZGVkID0gX2ZvcndhcmRlZDtcbiAgICAgIGZvcndhcmRlZC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgICAgZm9yd2FyZGVkLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBob2lzdE5vblJlYWN0U3RhdGljcyhmb3J3YXJkZWQsIFdyYXBwZWRDb21wb25lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKENvbm5lY3QsIFdyYXBwZWRDb21wb25lbnQpO1xuICB9O1xuICByZXR1cm4gd3JhcFdpdGhDb25uZWN0O1xufVxudmFyIGNvbm5lY3RfZGVmYXVsdCA9IGNvbm5lY3Q7XG5cbi8vIHNyYy9jb21wb25lbnRzL1Byb3ZpZGVyLnRzeFxuZnVuY3Rpb24gUHJvdmlkZXIoe1xuICBzdG9yZSxcbiAgY29udGV4dCxcbiAgY2hpbGRyZW4sXG4gIHNlcnZlclN0YXRlLFxuICBzdGFiaWxpdHlDaGVjayA9IFwib25jZVwiLFxuICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2sgPSBcIm9uY2VcIlxufSkge1xuICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBjcmVhdGVTdWJzY3JpcHRpb24oc3RvcmUpO1xuICAgIHJldHVybiB7XG4gICAgICBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGdldFNlcnZlclN0YXRlOiBzZXJ2ZXJTdGF0ZSA/ICgpID0+IHNlcnZlclN0YXRlIDogdm9pZCAwLFxuICAgICAgc3RhYmlsaXR5Q2hlY2ssXG4gICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2tcbiAgICB9O1xuICB9LCBbc3RvcmUsIHNlcnZlclN0YXRlLCBzdGFiaWxpdHlDaGVjaywgaWRlbnRpdHlGdW5jdGlvbkNoZWNrXSk7XG4gIGNvbnN0IHByZXZpb3VzU3RhdGUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHN0b3JlLmdldFN0YXRlKCksIFtzdG9yZV0pO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IHN1YnNjcmlwdGlvbiB9ID0gY29udGV4dFZhbHVlO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnM7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBzdG9yZS5nZXRTdGF0ZSgpKSB7XG4gICAgICBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicygpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IHZvaWQgMDtcbiAgICB9O1xuICB9LCBbY29udGV4dFZhbHVlLCBwcmV2aW91c1N0YXRlXSk7XG4gIGNvbnN0IENvbnRleHQgPSBjb250ZXh0IHx8IFJlYWN0UmVkdXhDb250ZXh0O1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dFZhbHVlIH0sIGNoaWxkcmVuKTtcbn1cbnZhciBQcm92aWRlcl9kZWZhdWx0ID0gUHJvdmlkZXI7XG5cbi8vIHNyYy9ob29rcy91c2VTdG9yZS50c1xuZnVuY3Rpb24gY3JlYXRlU3RvcmVIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICBjb25zdCB1c2VSZWR1eENvbnRleHQyID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VSZWR1eENvbnRleHQgOiAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dClcbiAgKTtcbiAgY29uc3QgdXNlU3RvcmUyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHVzZVJlZHV4Q29udGV4dDIoKTtcbiAgICByZXR1cm4gc3RvcmU7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlU3RvcmUyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VTdG9yZTJcbiAgfSk7XG4gIHJldHVybiB1c2VTdG9yZTI7XG59XG52YXIgdXNlU3RvcmUgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlU3RvcmVIb29rKCk7XG5cbi8vIHNyYy9ob29rcy91c2VEaXNwYXRjaC50c1xuZnVuY3Rpb24gY3JlYXRlRGlzcGF0Y2hIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICBjb25zdCB1c2VTdG9yZTIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVN0b3JlIDogY3JlYXRlU3RvcmVIb29rKGNvbnRleHQpO1xuICBjb25zdCB1c2VEaXNwYXRjaDIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZTIoKTtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2g7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlRGlzcGF0Y2gyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VEaXNwYXRjaDJcbiAgfSk7XG4gIHJldHVybiB1c2VEaXNwYXRjaDI7XG59XG52YXIgdXNlRGlzcGF0Y2ggPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlRGlzcGF0Y2hIb29rKCk7XG5cbi8vIHNyYy9leHBvcnRzLnRzXG52YXIgYmF0Y2ggPSBkZWZhdWx0Tm9vcEJhdGNoO1xuXG4vLyBzcmMvaW5kZXgudHNcbmluaXRpYWxpemVVc2VTZWxlY3Rvcih1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjIpO1xuaW5pdGlhbGl6ZUNvbm5lY3QoUmVhY3QyLnVzZVN5bmNFeHRlcm5hbFN0b3JlKTtcbmV4cG9ydCB7XG4gIFByb3ZpZGVyX2RlZmF1bHQgYXMgUHJvdmlkZXIsXG4gIFJlYWN0UmVkdXhDb250ZXh0LFxuICBiYXRjaCxcbiAgY29ubmVjdF9kZWZhdWx0IGFzIGNvbm5lY3QsXG4gIGNyZWF0ZURpc3BhdGNoSG9vayxcbiAgY3JlYXRlU2VsZWN0b3JIb29rLFxuICBjcmVhdGVTdG9yZUhvb2ssXG4gIHNoYWxsb3dFcXVhbCxcbiAgdXNlRGlzcGF0Y2gsXG4gIHVzZVNlbGVjdG9yLFxuICB1c2VTdG9yZVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LXJlZHV4Lm1qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tICdqaW11LWFyY2dpcyc7XHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBSZWFjdCwgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnO1xyXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaG9va3MvdXNlTG9jYWxlXCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0aW9ucyB9IGZyb20gJy4vdHJhbnNsYXRpb25zJztcclxuXHJcbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8YW55PikgPT4ge1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCB7IHQgfSA9IHVzZUxvY2FsZSh0cmFuc2xhdGlvbnMpO1xyXG5cclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KDEpXHJcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPigwKVxyXG5cclxuICBjb25zdCByZW1vdmVCdWZmZXJzID0gKCkgPT4ge1xyXG4gICAgaWYgKCFqaW11TWFwVmlldykgcmV0dXJuO1xyXG5cclxuICAgIC8vIEJ1c2NhciBsb3MgZ3LDoWZpY29zIGNvbiBlbCBpZCBxdWUgdXNhbW9zIHBhcmEgZWwgYnVmZmVyXHJcbiAgICBjb25zdCBncmFwaGljc1RvUmVtb3ZlID0gamltdU1hcFZpZXcudmlldy5ncmFwaGljcy5maWx0ZXIoKGdyYXBoaWMpID0+IHtcclxuICAgICAgcmV0dXJuIGdyYXBoaWMuYXR0cmlidXRlcz8uaWQgPT09IFwiYnVmZmVyX0RJXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBncmFwaGljc1RvUmVtb3ZlLmZvckVhY2goKGdyYXBoaWMpID0+IHtcclxuICAgICAgamltdU1hcFZpZXcudmlldy5ncmFwaGljcy5yZW1vdmUoZ3JhcGhpYyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2xpY2sgPSAoY2F0ZWdvcnlOdW1iZXI6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeU51bWJlcilcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wdGlvbkNsaWNrID0gYXN5bmMgKG9wdGlvbk51bWJlcjogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaXNEZXRlY3Rpb25SZWFkeSA9IG9wdGlvbk51bWJlciA9PT0gMFxyXG5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJDSEFOR0VfREVURUNUSU9OX1JFQURZXCIsIHZhbDogaXNEZXRlY3Rpb25SZWFkeSB9KVxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TRU5TT1JTXCIsIHZhbDogbnVsbCB9KVxyXG5cclxuICAgIHNldFNlbGVjdGVkT3B0aW9uKG9wdGlvbk51bWJlcilcclxuICAgIHRvZ2dsZVdpZGdldFZpc2liaWxpdHkob3B0aW9uTnVtYmVyKVxyXG4gICAgc3dpdGNoIChvcHRpb25OdW1iZXIpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJHRU9QUk9DRVNTXCIsIHZhbDogMSB9KVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiR0VPUFJPQ0VTU1wiLCB2YWw6IDIgfSlcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkdFT1BST0NFU1NcIiwgdmFsOiAzIH0pXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJHRU9QUk9DRVNTXCIsIHZhbDogNCB9KVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiR0VPUFJPQ0VTU1wiLCB2YWw6IDUgfSlcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIDU6XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkdFT1BST0NFU1NcIiwgdmFsOiA2IH0pXHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICAgIHJlbW92ZUJ1ZmZlcnMoKVxyXG5cclxuICB9XHJcblxyXG4gIC8vIENvbmZpZ3VyYWNpb24gZGVsIE1BUEFcclxuICBjb25zdCBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXYpID0+IHtcclxuICAgIHNldEppbXVNYXBWaWV3KGptdik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZXZlbnRvUHVudG8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0ZXN0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZWN0aW9uLWNvbnRlbnRcIilbMF0gYXMgSFRNTERpdkVsZW1lbnRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdDIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2hpbGQgPSB0ZXN0Mi5jaGlsZHJlbltpXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgdmFyIGNoaWxOb2RlSW50ZXIgPSBjaGlsZC5jaGlsZE5vZGVzWzBdIGFzIEhUTUxEaXZFbGVtZW50XHJcbiAgICAgICAgaWYgKGNoaWxOb2RlSW50ZXIpIHtcclxuICAgICAgICAgIGNoaWxOb2RlSW50ZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV2ZW50b1B1bnRvKClcclxuXHJcbiAgLy8gTWFuZWpvIGRlbCBTbGlkZSBkZSBnZW9wcm9jZXNvc1xyXG4gIGNvbnN0IHRvZ2dsZVdpZGdldFZpc2liaWxpdHkgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VjdGlvbi1jb250ZW50JylbMF07XHJcbiAgICBpZiAoc2VjdGlvbkNvbnRlbnQpIHtcclxuICAgICAgQXJyYXkuZnJvbShzZWN0aW9uQ29udGVudC5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcclxuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBjaGlsZC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hpbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgY2hpbGQuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB0b2dnbGVXaWRnZXRWaXNpYmlsaXR5KDApXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0IHdpZGdldENvbnRyb2xlckJUTlwiPlxyXG4gICAgICB7cHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmIHByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbmVkb3JQcmktV2lkZ2V0Q29udHJvbGVyXCI+XHJcbiAgICAgICAgPGg0Pnt0KFwid2lkZ2V0TGFiZWxcIil9PC9oND5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R3by1jb2x1bW4tc2VsZWN0b3InPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1yb3dcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNhdGVnb3J5LWJ1dHRvbiAke3NlbGVjdGVkQ2F0ZWdvcnkgPT09IDEgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNlbGVjdGVkQ2F0ZWdvcnkgPT09IDEgPyBcIiMwMDU3QjhcIiA6IFwiIzFhNTI3NlwiLFxyXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBzZWxlY3RlZENhdGVnb3J5ID09PSAxID8gXCIwIDAgMCAxcHggI2ZmZmZmZlwiIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYXRlZ29yeUNsaWNrKDEpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3QoXCJhbmFsaXNpc1wiKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjYXRlZ29yeS1idXR0b24gJHtzZWxlY3RlZENhdGVnb3J5ID09PSAyID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZENhdGVnb3J5ID09PSAyID8gXCIjMDA1N0I4XCIgOiBcIiMxYTUyNzZcIixcclxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogc2VsZWN0ZWRDYXRlZ29yeSA9PT0gMiA/IFwiMCAwIDAgMXB4ICNmZmZmZmZcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlDbGljaygyKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0KFwicmlza0RldGVjdGlvblwiKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeSA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BvcHRpb24tYnV0dG9uICR7c2VsZWN0ZWRPcHRpb24gPT09IDAgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRPcHRpb24gPT09IDAgPyBcIiMwMDU3QjhcIiA6IFwiIzFhNTI3NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogc2VsZWN0ZWRPcHRpb24gPT09IDAgPyBcIjAgMCAwIDFweCAjZmZmZmZmXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlT3B0aW9uQ2xpY2soMCl9PlxyXG4gICAgICAgICAgICAgICAgICB7dChcImNoYW5nZURldGVjdGlvblwiKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgb3B0aW9uLWJ1dHRvbiAke3NlbGVjdGVkT3B0aW9uID09PSAxID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNlbGVjdGVkT3B0aW9uID09PSAxID8gXCIjMDA1N0I4XCIgOiBcIiMxYTUyNzZcIixcclxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IHNlbGVjdGVkT3B0aW9uID09PSAxID8gXCIwIDAgMCAxcHggI2ZmZmZmZlwiIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wdGlvbkNsaWNrKDEpfT5cclxuICAgICAgICAgICAgICAgICAge3QoXCJzcGVjdHJhbEluZGV4XCIpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG9wdGlvbi1idXR0b24gJHtzZWxlY3RlZE9wdGlvbiA9PT0gMyA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZE9wdGlvbiA9PT0gMyA/IFwiIzAwNTdCOFwiIDogXCIjMWE1Mjc2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBzZWxlY3RlZE9wdGlvbiA9PT0gMyA/IFwiMCAwIDAgMXB4ICNmZmZmZmZcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcHRpb25DbGljaygzKX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0KFwiaW5kZXhGb3JtdWxhdG9yXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeSA9PT0gMiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BvcHRpb24tYnV0dG9uICR7c2VsZWN0ZWRPcHRpb24gPT09IDIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRPcHRpb24gPT09IDIgPyBcIiMwMDU3QjhcIiA6IFwiIzFhNTI3NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogc2VsZWN0ZWRPcHRpb24gPT09IDIgPyBcIjAgMCAwIDFweCAjZmZmZmZmXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgfX0gb25DbGljaz17KCkgPT4gaGFuZGxlT3B0aW9uQ2xpY2soMil9PlxyXG4gICAgICAgICAgICAgICAgICB7dChcImFyZWFSaXNrRGV0ZWN0aW9uXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BvcHRpb24tYnV0dG9uICR7c2VsZWN0ZWRPcHRpb24gPT09IDQgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRPcHRpb24gPT09IDQgPyBcIiMwMDU3QjhcIiA6IFwiIzFhNTI3NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogc2VsZWN0ZWRPcHRpb24gPT09IDQgPyBcIjAgMCAwIDFweCAjZmZmZmZmXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlT3B0aW9uQ2xpY2soNCl9PlxyXG4gICAgICAgICAgICAgICAgICB7dChcImluZnJhc3RydWN0dXJlRGV0ZWN0aW9uXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG9wdGlvbi1idXR0b24gJHtzZWxlY3RlZE9wdGlvbiA9PT0gNSA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZE9wdGlvbiA9PT0gNSA/IFwiIzAwNTdCOFwiIDogXCIjMWE1Mjc2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBzZWxlY3RlZE9wdGlvbiA9PT0gNSA/IFwiMCAwIDAgMXB4ICNmZmZmZmZcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcHRpb25DbGljayg1KX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0KFwicHJveGltaXR5Umlza1wiKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==