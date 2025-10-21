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
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/symbolRenderer/src/extensions/my-store.ts ***!
  \***************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zeW1ib2xSZW5kZXJlci9kaXN0L2V4dGVuc2lvbnMvbXktc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUNHbkQsT0FBTztBQUNQLElBQVksWUFzQlg7QUF0QkQsV0FBWSxZQUFZO0lBQ3RCLGVBQWU7SUFDZixtQ0FBbUI7SUFDbkIsdUNBQXVCO0lBRXZCLHFCQUFxQjtJQUNyQixtREFBbUM7SUFDbkMseUNBQXlCO0lBQ3pCLG1EQUFtQztJQUNuQywyQ0FBMkI7SUFFM0IseUJBQXlCO0lBQ3pCLDZEQUE2QztJQUM3QyxpREFBaUM7SUFDakMsaURBQWlDO0lBQ2pDLGlFQUFpRDtJQUVqRCw2Q0FBNkI7SUFDN0IsK0NBQStCO0lBRS9CLHlDQUF5QjtJQUN6QixxREFBcUM7QUFDdkMsQ0FBQyxFQXRCVyxZQUFZLEtBQVosWUFBWSxRQXNCdkI7QUFxSWMsTUFBTSxxQkFBcUI7SUFBMUM7UUFHRSxPQUFFLEdBQUcsZ0NBQWdDLENBQUM7SUEwRXhDLENBQUM7SUF4RUMsVUFBVTtRQUNSLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxpQkFBaUI7UUFDZixPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLLEVBQUUsSUFBSTtZQUVYLGdCQUFnQixFQUFFLEVB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Q0QsV0FBVztRQUNULE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc3ltYm9sUmVuZGVyZXIvc3JjL2V4dGVuc2lvbnMvbXktc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHR5cGUge1xyXG4gIERhdGFMZXZlbCxcclxuICBleHRlbnNpb25TcGVjLFxyXG4gIEltbXV0YWJsZU9iamVjdCxcclxuICBJTVN0YXRlLFxyXG59IGZyb20gXCJqaW11LWNvcmVcIjtcclxuXHJcbi8vVHlwZXNcclxuZXhwb3J0IGVudW0gTXlBY3Rpb25LZXlzIHtcclxuICAvLyBTSEFSRUQgU1RBVEVcclxuICBMT0FESU5HID0gXCJMT0FESU5HXCIsXHJcbiAgU0VUX0VSUk9SID0gXCJTRVRfRVJST1JcIixcclxuXHJcbiAgLy8gSU1BR0UgU0VBUkNIIFNUQVRFXHJcbiAgU0VUX0FMTF9TRU5TT1JTID0gXCJTRVRfQUxMX1NFTlNPUlNcIixcclxuICBTRVRfU0VOU09SID0gXCJTRVRfU0VOU09SXCIsXHJcbiAgU0VUX1NFQVJDSF9EQVRFID0gXCJTRVRfU0VBUkNIX0RBVEVcIixcclxuICBBRERfSU1BR0VSWSA9IFwiQUREX0lNQUdFUllcIixcclxuXHJcbiAgLy8gQ0hBTkdFIERFVEVDVElPTiBTVEFURVxyXG4gIFNFVF9TRUxFQ1RFRF9TRU5TT1JTID0gXCJTRVRfU0VMRUNURURfU0VOU09SU1wiLFxyXG4gIFNFTEVDVF9JTUFHRVJZID0gXCJTRUxFQ1RfSU1BR0VSWVwiLFxyXG4gIFJFTU9WRV9JTUFHRVJZID0gXCJSRU1PVkVfSU1BR0VSWVwiLFxyXG4gIENIQU5HRV9ERVRFQ1RJT05fUkVBRFkgPSBcIkNIQU5HRV9ERVRFQ1RJT05fUkVBRFlcIixcclxuXHJcbiAgQkFORF9GT1JNVUxBID0gXCJCQU5EX0ZPUk1VTEFcIixcclxuICBJTkRFWF9GT1JNVUxBID0gXCJJTkRFWF9GT1JNVUxBXCIsXHJcblxyXG4gIEdFT1BST0NFU1MgPSBcIkdFT1BST0NFU1NcIixcclxuICBPTkxJTkVfUFJPQ0VTU09SID0gXCJPTkxJTkVfUFJPQ0VTU09SXCJcclxufVxyXG5cclxuLy9BY3Rpb25zXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGxvYWRpbmcge1xyXG4gIHR5cGU6IE15QWN0aW9uS2V5cy5MT0FESU5HO1xyXG4gIHZhbDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIHNldEVycm9yIHtcclxuICB0eXBlOiBNeUFjdGlvbktleXMuU0VUX0VSUk9SO1xyXG4gIHZhbDogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzZXRBbGxTZW5zb3JzIHtcclxuICB0eXBlOiBNeUFjdGlvbktleXMuU0VUX0FMTF9TRU5TT1JTO1xyXG4gIHZhbDogU2Vuc29yW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBzZXRTZW5zb3Ige1xyXG4gIHR5cGU6IE15QWN0aW9uS2V5cy5TRVRfU0VOU09SO1xyXG4gIHZhbDogU2Vuc29yO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2Ugc2V0U2VhcmNoRGF0ZSB7XHJcbiAgdHlwZTogTXlBY3Rpb25LZXlzLlNFVF9TRUFSQ0hfREFURTtcclxuICB2YWw6IEltYWdlcnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBhZGRJbWFnZXJ5IHtcclxuICB0eXBlOiBNeUFjdGlvbktleXMuQUREX0lNQUdFUlk7XHJcbiAgdmFsOiBJbWFnZXJ5W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugc2V0U2VsZWN0ZWRTZW5zb3JzIHtcclxuICB0eXBlOiBNeUFjdGlvbktleXMuU0VUX1NFTEVDVEVEX1NFTlNPUlM7XHJcbiAgdmFsOiBbU2Vuc29yIHwgbnVsbCwgU2Vuc29yIHwgbnVsbF07XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBzZWxlY3RJbWFnZXJ5IHtcclxuICB0eXBlOiBNeUFjdGlvbktleXMuU0VMRUNUX0lNQUdFUlk7XHJcbiAgdmFsOiBbSW1hZ2VyeSB8IG51bGwsIEltYWdlcnkgfCBudWxsXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIHJlbW92ZUltYWdlcnkge1xyXG4gIHR5cGU6IE15QWN0aW9uS2V5cy5SRU1PVkVfSU1BR0VSWTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGNoYW5nZURldGVjdGlvblJlYWR5IHtcclxuICB0eXBlOiBNeUFjdGlvbktleXMuQ0hBTkdFX0RFVEVDVElPTl9SRUFEWTtcclxuICB2YWw6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBiYW5kRm9ybXVsYSB7XHJcbiAgdHlwZTogTXlBY3Rpb25LZXlzLkJBTkRfRk9STVVMQTtcclxuICB2YWw6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBpbmRleEZvcm11bGEge1xyXG4gIHR5cGU6IE15QWN0aW9uS2V5cy5JTkRFWF9GT1JNVUxBO1xyXG4gIHZhbDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBnZW9wcm9jZXNze1xyXG4gIHR5cGU6IE15QWN0aW9uS2V5cy5HRU9QUk9DRVNTO1xyXG4gIHZhbDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG9ubGluZVByb2Nlc3NvcntcclxuICB0eXBlOiBNeUFjdGlvbktleXMuT05MSU5FX1BST0NFU1NPUjtcclxuICB2YWw6IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBBY3Rpb25UeXBlcyA9XHJcbiAgfCBsb2FkaW5nXHJcbiAgfCBzZXRFcnJvclxyXG4gIHwgc2V0QWxsU2Vuc29yc1xyXG4gIHwgc2V0U2Vuc29yXHJcbiAgfCBzZXRTZWFyY2hEYXRlXHJcbiAgfCBhZGRJbWFnZXJ5XHJcbiAgfCBzZXRTZWxlY3RlZFNlbnNvcnNcclxuICB8IHNlbGVjdEltYWdlcnlcclxuICB8IHJlbW92ZUltYWdlcnlcclxuICB8IGNoYW5nZURldGVjdGlvblJlYWR5XHJcbiAgfCBiYW5kRm9ybXVsYVxyXG4gIHwgaW5kZXhGb3JtdWxhXHJcbiAgfCBnZW9wcm9jZXNzXHJcbiAgfCBvbmxpbmVQcm9jZXNzb3I7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlcnkge1xyXG4gIElEOiBzdHJpbmc7XHJcbiAgQ2F0ZWdvcnk/OiBudW1iZXI7XHJcbiAgQ2VudGVyWD86IERvdWJsZVJhbmdlO1xyXG4gIENlbnRlclk/OiBEb3VibGVSYW5nZTtcclxuICBJZGVudGlmaWNhY2lvblNlbnNvcj86IHN0cmluZztcclxuICBGZWNoYUNyZWFjaW9uTWV0YWRhdGE/OiBEYXRlO1xyXG4gIEZlY2hhQ2FwdHVyYT86IHN0cmluZztcclxuICBTRU5TT1I/OiBEb3VibGVSYW5nZTtcclxuICBPQkpFQ1RJRD86IG51bWJlcjtcclxuICBjbG91ZENvdmVyUGVyY2VudGFnZT86IHN0cmluZztcclxuICBzbm93Q292ZXJQZXJjZW50YWdlPzogc3RyaW5nO1xyXG4gIGxvY2FsaXphY2lvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZW5zb3Ige1xyXG4gIHVpZDogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgZGVmaW5pdGlvbkV4cHJlc3Npb246IHN0cmluZztcclxuICB2aXNpYmxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNeVN0YXRlIHtcclxuICBsb2FkaW5nOiBCb29sZWFuO1xyXG4gIGVycm9yOiBCb29sZWFuO1xyXG5cclxuICBhdmFpbGFibGVTZW5zb3JzOiBTZW5zb3JbXTtcclxuICBzZWxlY3RlZFNlbnNvcjogU2Vuc29yO1xyXG4gIHNlYXJjaERhdGU6IEltYWdlcnk7XHJcbiAgZmlsdGVyZWRJbWFnZXM6IEltYWdlcnlbXTtcclxuXHJcbiAgc2VsZWN0ZWRTZW5zb3JzOiBTZW5zb3JbXTtcclxuICBzZWxlY3RlZEltYWdlczogSW1hZ2VyeVtdO1xyXG4gIGlzUmVhZHk6IEJvb2xlYW47XHJcblxyXG4gIGJhbmRGb3JtdWxhOiBCb29sZWFuO1xyXG4gIGluZGV4Rm9ybXVsYTogQm9vbGVhbjtcclxuXHJcbiAgZ2VvcHJvY2VzczogTnVtYmVyO1xyXG4gIG9ubGluZVByb2Nlc3NvcjogTnVtYmVyO1xyXG59XHJcblxyXG50eXBlIElNTXlTdGF0ZSA9IEltbXV0YWJsZU9iamVjdDxNeVN0YXRlPjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiamltdS1jb3JlL2xpYi90eXBlcy9zdGF0ZVwiIHtcclxuICBpbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgbXlTdGF0ZT86IElNTXlTdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UmVkdXhTdG9yZUV4dGVuc2lvblxyXG4gIGltcGxlbWVudHMgZXh0ZW5zaW9uU3BlYy5SZWR1eFN0b3JlRXh0ZW5zaW9uXHJcbntcclxuICBpZCA9IFwibXktbG9jYWwtcmVkdXgtc3RvcmUtZXh0ZW5zaW9uXCI7XHJcblxyXG4gIGdldEFjdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoTXlBY3Rpb25LZXlzKS5tYXAoKGspID0+IE15QWN0aW9uS2V5c1trXSk7XHJcbiAgfVxyXG4gIGdldEluaXRMb2NhbFN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgZXJyb3I6IG51bGwsXHJcblxyXG4gICAgICBhdmFpbGFibGVTZW5zb3JzOiBbXSxcclxuICAgICAgc2VsZWN0ZWRTZW5zb3I6IG51bGwsXHJcbiAgICAgIHNlYXJjaERhdGU6IG51bGwsXHJcbiAgICAgIGZpbHRlcmVkSW1hZ2VzOiBbXSxcclxuXHJcbiAgICAgIHNlbGVjdGVkU2Vuc29yczogW251bGwsIG51bGxdLFxyXG4gICAgICBzZWxlY3RlZEltYWdlczogW251bGwsIG51bGxdLFxyXG4gICAgICBpc1JlYWR5OiB0cnVlLFxyXG5cclxuICAgICAgYmFuZEZvcm11bGE6IGZhbHNlLFxyXG4gICAgICBpbmRleEZvcm11bGE6IGZhbHNlLFxyXG5cclxuICAgICAgZ2VvcHJvY2VzczogbnVsbCxcclxuICAgICAgb25saW5lUHJvY2Vzc29yOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuICAvL1JlZHVjZXJcclxuICBnZXRSZWR1Y2VyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgbG9jYWxTdGF0ZTogSU1NeVN0YXRlLFxyXG4gICAgICBhY3Rpb246IEFjdGlvblR5cGVzLFxyXG4gICAgICBzdGF0ZTogSU1TdGF0ZVxyXG4gICAgKTogSU1NeVN0YXRlID0+IHtcclxuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIC8vIFNIQVJFRFxyXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLkxPQURJTkc6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoXCJsb2FkaW5nXCIsIGFjdGlvbi52YWwpO1xyXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLlNFVF9FUlJPUjpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldChcImVycm9yXCIsIGFjdGlvbi52YWwpO1xyXG5cclxuICAgICAgICAvLyBJTUFHRSBTRUFSQ0hcclxuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5TRVRfQUxMX1NFTlNPUlM6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoXCJhdmFpbGFibGVTZW5zb3JzXCIsIGFjdGlvbi52YWwpO1xyXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLlNFVF9TRU5TT1I6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoXCJzZWxlY3RlZFNlbnNvclwiLCBhY3Rpb24udmFsKTtcclxuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5TRVRfU0VBUkNIX0RBVEU6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoXCJzZWFyY2hEYXRlXCIsIGFjdGlvbi52YWwpO1xyXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLkFERF9JTUFHRVJZOlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KFwiZmlsdGVyZWRJbWFnZXNcIiwgYWN0aW9uLnZhbCk7XHJcbiAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuQkFORF9GT1JNVUxBOlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KFwiYmFuZEZvcm11bGFcIiwgYWN0aW9uLnZhbCk7XHJcbiAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuSU5ERVhfRk9STVVMQTpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldChcImluZGV4Rm9ybXVsYVwiLCBhY3Rpb24udmFsKTtcclxuICAgICAgICAvLyBDSEFOR0UgREVURUNUSU9OXHJcbiAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuU0VUX1NFTEVDVEVEX1NFTlNPUlM6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoXCJzZWxlY3RlZFNlbnNvcnNcIiwgYWN0aW9uLnZhbCk7XHJcbiAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuU0VMRUNUX0lNQUdFUlk6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoXCJzZWxlY3RlZEltYWdlc1wiLCBhY3Rpb24udmFsKTtcclxuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5SRU1PVkVfSU1BR0VSWTpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldChcInNlbGVjdGVkSW1hZ2VzXCIsIFtdKTtcclxuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5DSEFOR0VfREVURUNUSU9OX1JFQURZOlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KFwiaXNSZWFkeVwiLCBhY3Rpb24udmFsKTtcclxuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5HRU9QUk9DRVNTOlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KFwiZ2VvcHJvY2Vzc1wiLCBhY3Rpb24udmFsKVxyXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLk9OTElORV9QUk9DRVNTT1I6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoXCJvbmxpbmVQcm9jZXNzb3JcIiwgYWN0aW9uLnZhbClcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG4gIGdldFN0b3JlS2V5KCkge1xyXG4gICAgcmV0dXJuIFwibXlTdGF0ZVwiO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=