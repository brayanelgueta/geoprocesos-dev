System.register([], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {


	return {

		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*****************************************************************!*\
  !*** ./your-extensions/widgets/mask/src/extensions/my-store.ts ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyActionKeys: () => (/* binding */ MyActionKeys),
/* harmony export */   "default": () => (/* binding */ MyReduxStoreExtension)
/* harmony export */ });
//Types
var MyActionKeys;
(function (MyActionKeys) {
    // SHARED STATE
    MyActionKeys["LOADING"] = "LOADING";
    MyActionKeys["SET_ERROR"] = "SET_ERROR";
    // IMAGE SEARCH STATE
    MyActionKeys["SET_ALL_SENSORS"] = "SET_ALL_SENSORS";
    MyActionKeys["SET_SENSOR"] = "SET_SENSOR";
    MyActionKeys["SET_SEARCH_DATE"] = "SET_SEARCH_DATE";
    MyActionKeys["ADD_IMAGERY"] = "ADD_IMAGERY";
    // CHANGE DETECTION STATE
    MyActionKeys["SET_SELECTED_SENSORS"] = "SET_SELECTED_SENSORS";
    MyActionKeys["SELECT_IMAGERY"] = "SELECT_IMAGERY";
    MyActionKeys["REMOVE_IMAGERY"] = "REMOVE_IMAGERY";
    MyActionKeys["CHANGE_DETECTION_READY"] = "CHANGE_DETECTION_READY";
    MyActionKeys["BAND_FORMULA"] = "BAND_FORMULA";
    MyActionKeys["INDEX_FORMULA"] = "INDEX_FORMULA";
    MyActionKeys["GEOPROCESS"] = "GEOPROCESS";
    MyActionKeys["ONLINE_PROCESSOR"] = "ONLINE_PROCESSOR";
})(MyActionKeys || (MyActionKeys = {}));
class MyReduxStoreExtension {
    constructor() {
        this.id = "my-local-redux-store-extension";
    }
    getActions() {
        return Object.keys(MyActionKeys).map((k) => MyActionKeys[k]);
    }
    getInitLocalState() {
        return {
            loading: true,
            error: null,
            availableSensors: [],
            selectedSensor: null,
            searchDate: null,
            filteredImages: [],
            selectedSensors: [null, null],
            selectedImages: [null, null],
            isReady: true,
            bandFormula: false,
            indexFormula: false,
            geoprocess: null,
            onlineProcessor: null
        };
    }
    //Reducer
    getReducer() {
        return (localState, action, state) => {
            switch (action.type) {
                // SHARED
                case MyActionKeys.LOADING:
                    return localState.set("loading", action.val);
                case MyActionKeys.SET_ERROR:
                    return localState.set("error", action.val);
                // IMAGE SEARCH
                case MyActionKeys.SET_ALL_SENSORS:
                    return localState.set("availableSensors", action.val);
                case MyActionKeys.SET_SENSOR:
                    return localState.set("selectedSensor", action.val);
                case MyActionKeys.SET_SEARCH_DATE:
                    return localState.set("searchDate", action.val);
                case MyActionKeys.ADD_IMAGERY:
                    return localState.set("filteredImages", action.val);
                case MyActionKeys.BAND_FORMULA:
                    return localState.set("bandFormula", action.val);
                case MyActionKeys.INDEX_FORMULA:
                    return localState.set("indexFormula", action.val);
                // CHANGE DETECTION
                case MyActionKeys.SET_SELECTED_SENSORS:
                    return localState.set("selectedSensors", action.val);
                case MyActionKeys.SELECT_IMAGERY:
                    return localState.set("selectedImages", action.val);
                case MyActionKeys.REMOVE_IMAGERY:
                    return localState.set("selectedImages", []);
                case MyActionKeys.CHANGE_DETECTION_READY:
                    return localState.set("isReady", action.val);
                case MyActionKeys.GEOPROCESS:
                    return localState.set("geoprocess", action.val);
                case MyActionKeys.ONLINE_PROCESSOR:
                    return localState.set("onlineProcessor", action.val);
                default:
                    return localState;
            }
        };
    }
    getStoreKey() {
        return "myState";
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXNrL2Rpc3QvZXh0ZW5zaW9ucy9teS1zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7OztBQ0duRCxPQUFPO0FBQ1AsSUFBWSxZQXNCWDtBQXRCRCxXQUFZLFlBQVk7SUFDdEIsZUFBZTtJQUNmLG1DQUFtQjtJQUNuQix1Q0FBdUI7SUFFdkIscUJBQXFCO0lBQ3JCLG1EQUFtQztJQUNuQyx5Q0FBeUI7SUFDekIsbURBQW1DO0lBQ25DLDJDQUEyQjtJQUUzQix5QkFBeUI7SUFDekIsNkRBQTZDO0lBQzdDLGlEQUFpQztJQUNqQyxpREFBaUM7SUFDakMsaUVBQWlEO0lBRWpELDZDQUE2QjtJQUM3QiwrQ0FBK0I7SUFFL0IseUNBQXlCO0lBQ3pCLHFEQUFxQztBQUN2QyxDQUFDLEVBdEJXLFlBQVksS0FBWixZQUFZLFFBc0J2QjtBQXFJYyxNQUFNLHFCQUFxQjtJQUExQztRQUdFLE9BQUUsR0FBRyxnQ0FBZ0MsQ0FBQztJQTBFeEMsQ0FBQztJQXhFQyxVQUFVO1FBQ1IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELGlCQUFpQjtRQUNmLE9BQU87WUFDTCxPQUFPLEVBQUUsSUFBSTtZQUNiLEtBQUssRUFBRSxJQUFJO1lBRVgsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixj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Q1QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXNrL3NyYy9leHRlbnNpb25zL215LXN0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB0eXBlIHtcclxuICBEYXRhTGV2ZWwsXHJcbiAgZXh0ZW5zaW9uU3BlYyxcclxuICBJbW11dGFibGVPYmplY3QsXHJcbiAgSU1TdGF0ZSxcclxufSBmcm9tIFwiamltdS1jb3JlXCI7XHJcblxyXG4vL1R5cGVzXHJcbmV4cG9ydCBlbnVtIE15QWN0aW9uS2V5cyB7XHJcbiAgLy8gU0hBUkVEIFNUQVRFXHJcbiAgTE9BRElORyA9IFwiTE9BRElOR1wiLFxyXG4gIFNFVF9FUlJPUiA9IFwiU0VUX0VSUk9SXCIsXHJcblxyXG4gIC8vIElNQUdFIFNFQVJDSCBTVEFURVxyXG4gIFNFVF9BTExfU0VOU09SUyA9IFwiU0VUX0FMTF9TRU5TT1JTXCIsXHJcbiAgU0VUX1NFTlNPUiA9IFwiU0VUX1NFTlNPUlwiLFxyXG4gIFNFVF9TRUFSQ0hfREFURSA9IFwiU0VUX1NFQVJDSF9EQVRFXCIsXHJcbiAgQUREX0lNQUdFUlkgPSBcIkFERF9JTUFHRVJZXCIsXHJcblxyXG4gIC8vIENIQU5HRSBERVRFQ1RJT04gU1RBVEVcclxuICBTRVRfU0VMRUNURURfU0VOU09SUyA9IFwiU0VUX1NFTEVDVEVEX1NFTlNPUlNcIixcclxuICBTRUxFQ1RfSU1BR0VSWSA9IFwiU0VMRUNUX0lNQUdFUllcIixcclxuICBSRU1PVkVfSU1BR0VSWSA9IFwiUkVNT1ZFX0lNQUdFUllcIixcclxuICBDSEFOR0VfREVURUNUSU9OX1JFQURZID0gXCJDSEFOR0VfREVURUNUSU9OX1JFQURZXCIsXHJcblxyXG4gIEJBTkRfRk9STVVMQSA9IFwiQkFORF9GT1JNVUxBXCIsXHJcbiAgSU5ERVhfRk9STVVMQSA9IFwiSU5ERVhfRk9STVVMQVwiLFxyXG5cclxuICBHRU9QUk9DRVNTID0gXCJHRU9QUk9DRVNTXCIsXHJcbiAgT05MSU5FX1BST0NFU1NPUiA9IFwiT05MSU5FX1BST0NFU1NPUlwiXHJcbn1cclxuXHJcbi8vQWN0aW9uc1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBsb2FkaW5nIHtcclxuICB0eXBlOiBNeUFjdGlvbktleXMuTE9BRElORztcclxuICB2YWw6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBzZXRFcnJvciB7XHJcbiAgdHlwZTogTXlBY3Rpb25LZXlzLlNFVF9FUlJPUjtcclxuICB2YWw6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugc2V0QWxsU2Vuc29ycyB7XHJcbiAgdHlwZTogTXlBY3Rpb25LZXlzLlNFVF9BTExfU0VOU09SUztcclxuICB2YWw6IFNlbnNvcltdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2Ugc2V0U2Vuc29yIHtcclxuICB0eXBlOiBNeUFjdGlvbktleXMuU0VUX1NFTlNPUjtcclxuICB2YWw6IFNlbnNvcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIHNldFNlYXJjaERhdGUge1xyXG4gIHR5cGU6IE15QWN0aW9uS2V5cy5TRVRfU0VBUkNIX0RBVEU7XHJcbiAgdmFsOiBJbWFnZXJ5O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgYWRkSW1hZ2VyeSB7XHJcbiAgdHlwZTogTXlBY3Rpb25LZXlzLkFERF9JTUFHRVJZO1xyXG4gIHZhbDogSW1hZ2VyeVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHNldFNlbGVjdGVkU2Vuc29ycyB7XHJcbiAgdHlwZTogTXlBY3Rpb25LZXlzLlNFVF9TRUxFQ1RFRF9TRU5TT1JTO1xyXG4gIHZhbDogW1NlbnNvciB8IG51bGwsIFNlbnNvciB8IG51bGxdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2Ugc2VsZWN0SW1hZ2VyeSB7XHJcbiAgdHlwZTogTXlBY3Rpb25LZXlzLlNFTEVDVF9JTUFHRVJZO1xyXG4gIHZhbDogW0ltYWdlcnkgfCBudWxsLCBJbWFnZXJ5IHwgbnVsbF07XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSByZW1vdmVJbWFnZXJ5IHtcclxuICB0eXBlOiBNeUFjdGlvbktleXMuUkVNT1ZFX0lNQUdFUlk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBjaGFuZ2VEZXRlY3Rpb25SZWFkeSB7XHJcbiAgdHlwZTogTXlBY3Rpb25LZXlzLkNIQU5HRV9ERVRFQ1RJT05fUkVBRFk7XHJcbiAgdmFsOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgYmFuZEZvcm11bGEge1xyXG4gIHR5cGU6IE15QWN0aW9uS2V5cy5CQU5EX0ZPUk1VTEE7XHJcbiAgdmFsOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgaW5kZXhGb3JtdWxhIHtcclxuICB0eXBlOiBNeUFjdGlvbktleXMuSU5ERVhfRk9STVVMQTtcclxuICB2YWw6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZ2VvcHJvY2Vzc3tcclxuICB0eXBlOiBNeUFjdGlvbktleXMuR0VPUFJPQ0VTUztcclxuICB2YWw6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBvbmxpbmVQcm9jZXNzb3J7XHJcbiAgdHlwZTogTXlBY3Rpb25LZXlzLk9OTElORV9QUk9DRVNTT1I7XHJcbiAgdmFsOiBudW1iZXI7XHJcbn1cclxuXHJcbnR5cGUgQWN0aW9uVHlwZXMgPVxyXG4gIHwgbG9hZGluZ1xyXG4gIHwgc2V0RXJyb3JcclxuICB8IHNldEFsbFNlbnNvcnNcclxuICB8IHNldFNlbnNvclxyXG4gIHwgc2V0U2VhcmNoRGF0ZVxyXG4gIHwgYWRkSW1hZ2VyeVxyXG4gIHwgc2V0U2VsZWN0ZWRTZW5zb3JzXHJcbiAgfCBzZWxlY3RJbWFnZXJ5XHJcbiAgfCByZW1vdmVJbWFnZXJ5XHJcbiAgfCBjaGFuZ2VEZXRlY3Rpb25SZWFkeVxyXG4gIHwgYmFuZEZvcm11bGFcclxuICB8IGluZGV4Rm9ybXVsYVxyXG4gIHwgZ2VvcHJvY2Vzc1xyXG4gIHwgb25saW5lUHJvY2Vzc29yO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZXJ5IHtcclxuICBJRDogc3RyaW5nO1xyXG4gIENhdGVnb3J5PzogbnVtYmVyO1xyXG4gIENlbnRlclg/OiBEb3VibGVSYW5nZTtcclxuICBDZW50ZXJZPzogRG91YmxlUmFuZ2U7XHJcbiAgSWRlbnRpZmljYWNpb25TZW5zb3I/OiBzdHJpbmc7XHJcbiAgRmVjaGFDcmVhY2lvbk1ldGFkYXRhPzogRGF0ZTtcclxuICBGZWNoYUNhcHR1cmE/OiBzdHJpbmc7XHJcbiAgU0VOU09SPzogRG91YmxlUmFuZ2U7XHJcbiAgT0JKRUNUSUQ/OiBudW1iZXI7XHJcbiAgY2xvdWRDb3ZlclBlcmNlbnRhZ2U/OiBzdHJpbmc7XHJcbiAgc25vd0NvdmVyUGVyY2VudGFnZT86IHN0cmluZztcclxuICBsb2NhbGl6YWNpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2Vuc29yIHtcclxuICB1aWQ6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGRlZmluaXRpb25FeHByZXNzaW9uOiBzdHJpbmc7XHJcbiAgdmlzaWJsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlTdGF0ZSB7XHJcbiAgbG9hZGluZzogQm9vbGVhbjtcclxuICBlcnJvcjogQm9vbGVhbjtcclxuXHJcbiAgYXZhaWxhYmxlU2Vuc29yczogU2Vuc29yW107XHJcbiAgc2VsZWN0ZWRTZW5zb3I6IFNlbnNvcjtcclxuICBzZWFyY2hEYXRlOiBJbWFnZXJ5O1xyXG4gIGZpbHRlcmVkSW1hZ2VzOiBJbWFnZXJ5W107XHJcblxyXG4gIHNlbGVjdGVkU2Vuc29yczogU2Vuc29yW107XHJcbiAgc2VsZWN0ZWRJbWFnZXM6IEltYWdlcnlbXTtcclxuICBpc1JlYWR5OiBCb29sZWFuO1xyXG5cclxuICBiYW5kRm9ybXVsYTogQm9vbGVhbjtcclxuICBpbmRleEZvcm11bGE6IEJvb2xlYW47XHJcblxyXG4gIGdlb3Byb2Nlc3M6IE51bWJlcjtcclxuICBvbmxpbmVQcm9jZXNzb3I6IE51bWJlcjtcclxufVxyXG5cclxudHlwZSBJTU15U3RhdGUgPSBJbW11dGFibGVPYmplY3Q8TXlTdGF0ZT47XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcImppbXUtY29yZS9saWIvdHlwZXMvc3RhdGVcIiB7XHJcbiAgaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIG15U3RhdGU/OiBJTU15U3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVJlZHV4U3RvcmVFeHRlbnNpb25cclxuICBpbXBsZW1lbnRzIGV4dGVuc2lvblNwZWMuUmVkdXhTdG9yZUV4dGVuc2lvblxyXG57XHJcbiAgaWQgPSBcIm15LWxvY2FsLXJlZHV4LXN0b3JlLWV4dGVuc2lvblwiO1xyXG5cclxuICBnZXRBY3Rpb25zKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKE15QWN0aW9uS2V5cykubWFwKChrKSA9PiBNeUFjdGlvbktleXNba10pO1xyXG4gIH1cclxuICBnZXRJbml0TG9jYWxTdGF0ZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgIGVycm9yOiBudWxsLFxyXG5cclxuICAgICAgYXZhaWxhYmxlU2Vuc29yczogW10sXHJcbiAgICAgIHNlbGVjdGVkU2Vuc29yOiBudWxsLFxyXG4gICAgICBzZWFyY2hEYXRlOiBudWxsLFxyXG4gICAgICBmaWx0ZXJlZEltYWdlczogW10sXHJcblxyXG4gICAgICBzZWxlY3RlZFNlbnNvcnM6IFtudWxsLCBudWxsXSxcclxuICAgICAgc2VsZWN0ZWRJbWFnZXM6IFtudWxsLCBudWxsXSxcclxuICAgICAgaXNSZWFkeTogdHJ1ZSxcclxuXHJcbiAgICAgIGJhbmRGb3JtdWxhOiBmYWxzZSxcclxuICAgICAgaW5kZXhGb3JtdWxhOiBmYWxzZSxcclxuXHJcbiAgICAgIGdlb3Byb2Nlc3M6IG51bGwsXHJcbiAgICAgIG9ubGluZVByb2Nlc3NvcjogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbiAgLy9SZWR1Y2VyXHJcbiAgZ2V0UmVkdWNlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGxvY2FsU3RhdGU6IElNTXlTdGF0ZSxcclxuICAgICAgYWN0aW9uOiBBY3Rpb25UeXBlcyxcclxuICAgICAgc3RhdGU6IElNU3RhdGVcclxuICAgICk6IElNTXlTdGF0ZSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAvLyBTSEFSRURcclxuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5MT0FESU5HOlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KFwibG9hZGluZ1wiLCBhY3Rpb24udmFsKTtcclxuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5TRVRfRVJST1I6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoXCJlcnJvclwiLCBhY3Rpb24udmFsKTtcclxuXHJcbiAgICAgICAgLy8gSU1BR0UgU0VBUkNIXHJcbiAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuU0VUX0FMTF9TRU5TT1JTOlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KFwiYXZhaWxhYmxlU2Vuc29yc1wiLCBhY3Rpb24udmFsKTtcclxuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5TRVRfU0VOU09SOlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KFwic2VsZWN0ZWRTZW5zb3JcIiwgYWN0aW9uLnZhbCk7XHJcbiAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuU0VUX1NFQVJDSF9EQVRFOlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KFwic2VhcmNoRGF0ZVwiLCBhY3Rpb24udmFsKTtcclxuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5BRERfSU1BR0VSWTpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldChcImZpbHRlcmVkSW1hZ2VzXCIsIGFjdGlvbi52YWwpO1xyXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLkJBTkRfRk9STVVMQTpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldChcImJhbmRGb3JtdWxhXCIsIGFjdGlvbi52YWwpO1xyXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLklOREVYX0ZPUk1VTEE6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoXCJpbmRleEZvcm11bGFcIiwgYWN0aW9uLnZhbCk7XHJcbiAgICAgICAgLy8gQ0hBTkdFIERFVEVDVElPTlxyXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLlNFVF9TRUxFQ1RFRF9TRU5TT1JTOlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KFwic2VsZWN0ZWRTZW5zb3JzXCIsIGFjdGlvbi52YWwpO1xyXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLlNFTEVDVF9JTUFHRVJZOlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KFwic2VsZWN0ZWRJbWFnZXNcIiwgYWN0aW9uLnZhbCk7XHJcbiAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuUkVNT1ZFX0lNQUdFUlk6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoXCJzZWxlY3RlZEltYWdlc1wiLCBbXSk7XHJcbiAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuQ0hBTkdFX0RFVEVDVElPTl9SRUFEWTpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldChcImlzUmVhZHlcIiwgYWN0aW9uLnZhbCk7XHJcbiAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuR0VPUFJPQ0VTUzpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldChcImdlb3Byb2Nlc3NcIiwgYWN0aW9uLnZhbClcclxuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5PTkxJTkVfUFJPQ0VTU09SOlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KFwib25saW5lUHJvY2Vzc29yXCIsIGFjdGlvbi52YWwpXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuICBnZXRTdG9yZUtleSgpIHtcclxuICAgIHJldHVybiBcIm15U3RhdGVcIjtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9