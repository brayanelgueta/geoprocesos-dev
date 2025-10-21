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
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/deteccionCambio/src/extensions/my-store.ts ***!
  \****************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9kZXRlY2Npb25DYW1iaW8vZGlzdC9leHRlbnNpb25zL215LXN0b3JlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O0FDR25ELE9BQU87QUFDUCxJQUFZLFlBc0JYO0FBdEJELFdBQVksWUFBWTtJQUN0QixlQUFlO0lBQ2YsbUNBQW1CO0lBQ25CLHVDQUF1QjtJQUV2QixxQkFBcUI7SUFDckIsbURBQW1DO0lBQ25DLHlDQUF5QjtJQUN6QixtREFBbUM7SUFDbkMsMkNBQTJCO0lBRTNCLHlCQUF5QjtJQUN6Qiw2REFBNkM7SUFDN0MsaURBQWlDO0lBQ2pDLGlEQUFpQztJQUNqQyxpRUFBaUQ7SUFFakQsNkNBQTZCO0lBQzdCLCtDQUErQjtJQUUvQix5Q0FBeUI7SUFDekIscURBQXFDO0FBQ3ZDLENBQUMsRUF0QlcsWUFBWSxLQUFaLFlBQVksUUFzQnZCO0FBcUljLE1BQU0scUJBQXFCO0lBQTFDO1FBR0UsT0FBRSxHQUFHLGdDQUFnQyxDQUFDO0lBMEV4QyxDQUFDO0lBeEVDLFVBQVU7UUFDUixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLE9BQU8sRUFBRSxJQUFJO1lBQ2IsS0FBSyxFQUFFLElBQUk7WUFFWCxnQkFBZ0IsRUFBRSxF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QUNELFdBQVc7UUFDVCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2RldGVjY2lvbkNhbWJpby9zcmMvZXh0ZW5zaW9ucy9teS1zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgdHlwZSB7XHJcbiAgRGF0YUxldmVsLFxyXG4gIGV4dGVuc2lvblNwZWMsXHJcbiAgSW1tdXRhYmxlT2JqZWN0LFxyXG4gIElNU3RhdGUsXHJcbn0gZnJvbSBcImppbXUtY29yZVwiO1xyXG5cclxuLy9UeXBlc1xyXG5leHBvcnQgZW51bSBNeUFjdGlvbktleXMge1xyXG4gIC8vIFNIQVJFRCBTVEFURVxyXG4gIExPQURJTkcgPSBcIkxPQURJTkdcIixcclxuICBTRVRfRVJST1IgPSBcIlNFVF9FUlJPUlwiLFxyXG5cclxuICAvLyBJTUFHRSBTRUFSQ0ggU1RBVEVcclxuICBTRVRfQUxMX1NFTlNPUlMgPSBcIlNFVF9BTExfU0VOU09SU1wiLFxyXG4gIFNFVF9TRU5TT1IgPSBcIlNFVF9TRU5TT1JcIixcclxuICBTRVRfU0VBUkNIX0RBVEUgPSBcIlNFVF9TRUFSQ0hfREFURVwiLFxyXG4gIEFERF9JTUFHRVJZID0gXCJBRERfSU1BR0VSWVwiLFxyXG5cclxuICAvLyBDSEFOR0UgREVURUNUSU9OIFNUQVRFXHJcbiAgU0VUX1NFTEVDVEVEX1NFTlNPUlMgPSBcIlNFVF9TRUxFQ1RFRF9TRU5TT1JTXCIsXHJcbiAgU0VMRUNUX0lNQUdFUlkgPSBcIlNFTEVDVF9JTUFHRVJZXCIsXHJcbiAgUkVNT1ZFX0lNQUdFUlkgPSBcIlJFTU9WRV9JTUFHRVJZXCIsXHJcbiAgQ0hBTkdFX0RFVEVDVElPTl9SRUFEWSA9IFwiQ0hBTkdFX0RFVEVDVElPTl9SRUFEWVwiLFxyXG5cclxuICBCQU5EX0ZPUk1VTEEgPSBcIkJBTkRfRk9STVVMQVwiLFxyXG4gIElOREVYX0ZPUk1VTEEgPSBcIklOREVYX0ZPUk1VTEFcIixcclxuXHJcbiAgR0VPUFJPQ0VTUyA9IFwiR0VPUFJPQ0VTU1wiLFxyXG4gIE9OTElORV9QUk9DRVNTT1IgPSBcIk9OTElORV9QUk9DRVNTT1JcIlxyXG59XHJcblxyXG4vL0FjdGlvbnNcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgbG9hZGluZyB7XHJcbiAgdHlwZTogTXlBY3Rpb25LZXlzLkxPQURJTkc7XHJcbiAgdmFsOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2Ugc2V0RXJyb3Ige1xyXG4gIHR5cGU6IE15QWN0aW9uS2V5cy5TRVRfRVJST1I7XHJcbiAgdmFsOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHNldEFsbFNlbnNvcnMge1xyXG4gIHR5cGU6IE15QWN0aW9uS2V5cy5TRVRfQUxMX1NFTlNPUlM7XHJcbiAgdmFsOiBTZW5zb3JbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIHNldFNlbnNvciB7XHJcbiAgdHlwZTogTXlBY3Rpb25LZXlzLlNFVF9TRU5TT1I7XHJcbiAgdmFsOiBTZW5zb3I7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBzZXRTZWFyY2hEYXRlIHtcclxuICB0eXBlOiBNeUFjdGlvbktleXMuU0VUX1NFQVJDSF9EQVRFO1xyXG4gIHZhbDogSW1hZ2VyeTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGFkZEltYWdlcnkge1xyXG4gIHR5cGU6IE15QWN0aW9uS2V5cy5BRERfSU1BR0VSWTtcclxuICB2YWw6IEltYWdlcnlbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzZXRTZWxlY3RlZFNlbnNvcnMge1xyXG4gIHR5cGU6IE15QWN0aW9uS2V5cy5TRVRfU0VMRUNURURfU0VOU09SUztcclxuICB2YWw6IFtTZW5zb3IgfCBudWxsLCBTZW5zb3IgfCBudWxsXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIHNlbGVjdEltYWdlcnkge1xyXG4gIHR5cGU6IE15QWN0aW9uS2V5cy5TRUxFQ1RfSU1BR0VSWTtcclxuICB2YWw6IFtJbWFnZXJ5IHwgbnVsbCwgSW1hZ2VyeSB8IG51bGxdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgcmVtb3ZlSW1hZ2VyeSB7XHJcbiAgdHlwZTogTXlBY3Rpb25LZXlzLlJFTU9WRV9JTUFHRVJZO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgY2hhbmdlRGV0ZWN0aW9uUmVhZHkge1xyXG4gIHR5cGU6IE15QWN0aW9uS2V5cy5DSEFOR0VfREVURUNUSU9OX1JFQURZO1xyXG4gIHZhbDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGJhbmRGb3JtdWxhIHtcclxuICB0eXBlOiBNeUFjdGlvbktleXMuQkFORF9GT1JNVUxBO1xyXG4gIHZhbDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIGluZGV4Rm9ybXVsYSB7XHJcbiAgdHlwZTogTXlBY3Rpb25LZXlzLklOREVYX0ZPUk1VTEE7XHJcbiAgdmFsOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGdlb3Byb2Nlc3N7XHJcbiAgdHlwZTogTXlBY3Rpb25LZXlzLkdFT1BST0NFU1M7XHJcbiAgdmFsOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugb25saW5lUHJvY2Vzc29ye1xyXG4gIHR5cGU6IE15QWN0aW9uS2V5cy5PTkxJTkVfUFJPQ0VTU09SO1xyXG4gIHZhbDogbnVtYmVyO1xyXG59XHJcblxyXG50eXBlIEFjdGlvblR5cGVzID1cclxuICB8IGxvYWRpbmdcclxuICB8IHNldEVycm9yXHJcbiAgfCBzZXRBbGxTZW5zb3JzXHJcbiAgfCBzZXRTZW5zb3JcclxuICB8IHNldFNlYXJjaERhdGVcclxuICB8IGFkZEltYWdlcnlcclxuICB8IHNldFNlbGVjdGVkU2Vuc29yc1xyXG4gIHwgc2VsZWN0SW1hZ2VyeVxyXG4gIHwgcmVtb3ZlSW1hZ2VyeVxyXG4gIHwgY2hhbmdlRGV0ZWN0aW9uUmVhZHlcclxuICB8IGJhbmRGb3JtdWxhXHJcbiAgfCBpbmRleEZvcm11bGFcclxuICB8IGdlb3Byb2Nlc3NcclxuICB8IG9ubGluZVByb2Nlc3NvcjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VyeSB7XHJcbiAgSUQ6IHN0cmluZztcclxuICBDYXRlZ29yeT86IG51bWJlcjtcclxuICBDZW50ZXJYPzogRG91YmxlUmFuZ2U7XHJcbiAgQ2VudGVyWT86IERvdWJsZVJhbmdlO1xyXG4gIElkZW50aWZpY2FjaW9uU2Vuc29yPzogc3RyaW5nO1xyXG4gIEZlY2hhQ3JlYWNpb25NZXRhZGF0YT86IERhdGU7XHJcbiAgRmVjaGFDYXB0dXJhPzogc3RyaW5nO1xyXG4gIFNFTlNPUj86IERvdWJsZVJhbmdlO1xyXG4gIE9CSkVDVElEPzogbnVtYmVyO1xyXG4gIGNsb3VkQ292ZXJQZXJjZW50YWdlPzogc3RyaW5nO1xyXG4gIHNub3dDb3ZlclBlcmNlbnRhZ2U/OiBzdHJpbmc7XHJcbiAgbG9jYWxpemFjaW9uPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbnNvciB7XHJcbiAgdWlkOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBkZWZpbml0aW9uRXhwcmVzc2lvbjogc3RyaW5nO1xyXG4gIHZpc2libGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE15U3RhdGUge1xyXG4gIGxvYWRpbmc6IEJvb2xlYW47XHJcbiAgZXJyb3I6IEJvb2xlYW47XHJcblxyXG4gIGF2YWlsYWJsZVNlbnNvcnM6IFNlbnNvcltdO1xyXG4gIHNlbGVjdGVkU2Vuc29yOiBTZW5zb3I7XHJcbiAgc2VhcmNoRGF0ZTogSW1hZ2VyeTtcclxuICBmaWx0ZXJlZEltYWdlczogSW1hZ2VyeVtdO1xyXG5cclxuICBzZWxlY3RlZFNlbnNvcnM6IFNlbnNvcltdO1xyXG4gIHNlbGVjdGVkSW1hZ2VzOiBJbWFnZXJ5W107XHJcbiAgaXNSZWFkeTogQm9vbGVhbjtcclxuXHJcbiAgYmFuZEZvcm11bGE6IEJvb2xlYW47XHJcbiAgaW5kZXhGb3JtdWxhOiBCb29sZWFuO1xyXG5cclxuICBnZW9wcm9jZXNzOiBOdW1iZXI7XHJcbiAgb25saW5lUHJvY2Vzc29yOiBOdW1iZXI7XHJcbn1cclxuXHJcbnR5cGUgSU1NeVN0YXRlID0gSW1tdXRhYmxlT2JqZWN0PE15U3RhdGU+O1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJqaW11LWNvcmUvbGliL3R5cGVzL3N0YXRlXCIge1xyXG4gIGludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBteVN0YXRlPzogSU1NeVN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlSZWR1eFN0b3JlRXh0ZW5zaW9uXHJcbiAgaW1wbGVtZW50cyBleHRlbnNpb25TcGVjLlJlZHV4U3RvcmVFeHRlbnNpb25cclxue1xyXG4gIGlkID0gXCJteS1sb2NhbC1yZWR1eC1zdG9yZS1leHRlbnNpb25cIjtcclxuXHJcbiAgZ2V0QWN0aW9ucygpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhNeUFjdGlvbktleXMpLm1hcCgoaykgPT4gTXlBY3Rpb25LZXlzW2tdKTtcclxuICB9XHJcbiAgZ2V0SW5pdExvY2FsU3RhdGUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICBlcnJvcjogbnVsbCxcclxuXHJcbiAgICAgIGF2YWlsYWJsZVNlbnNvcnM6IFtdLFxyXG4gICAgICBzZWxlY3RlZFNlbnNvcjogbnVsbCxcclxuICAgICAgc2VhcmNoRGF0ZTogbnVsbCxcclxuICAgICAgZmlsdGVyZWRJbWFnZXM6IFtdLFxyXG5cclxuICAgICAgc2VsZWN0ZWRTZW5zb3JzOiBbbnVsbCwgbnVsbF0sXHJcbiAgICAgIHNlbGVjdGVkSW1hZ2VzOiBbbnVsbCwgbnVsbF0sXHJcbiAgICAgIGlzUmVhZHk6IHRydWUsXHJcblxyXG4gICAgICBiYW5kRm9ybXVsYTogZmFsc2UsXHJcbiAgICAgIGluZGV4Rm9ybXVsYTogZmFsc2UsXHJcblxyXG4gICAgICBnZW9wcm9jZXNzOiBudWxsLFxyXG4gICAgICBvbmxpbmVQcm9jZXNzb3I6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG4gIC8vUmVkdWNlclxyXG4gIGdldFJlZHVjZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBsb2NhbFN0YXRlOiBJTU15U3RhdGUsXHJcbiAgICAgIGFjdGlvbjogQWN0aW9uVHlwZXMsXHJcbiAgICAgIHN0YXRlOiBJTVN0YXRlXHJcbiAgICApOiBJTU15U3RhdGUgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgLy8gU0hBUkVEXHJcbiAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuTE9BRElORzpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldChcImxvYWRpbmdcIiwgYWN0aW9uLnZhbCk7XHJcbiAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuU0VUX0VSUk9SOlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KFwiZXJyb3JcIiwgYWN0aW9uLnZhbCk7XHJcblxyXG4gICAgICAgIC8vIElNQUdFIFNFQVJDSFxyXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLlNFVF9BTExfU0VOU09SUzpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldChcImF2YWlsYWJsZVNlbnNvcnNcIiwgYWN0aW9uLnZhbCk7XHJcbiAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuU0VUX1NFTlNPUjpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldChcInNlbGVjdGVkU2Vuc29yXCIsIGFjdGlvbi52YWwpO1xyXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLlNFVF9TRUFSQ0hfREFURTpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldChcInNlYXJjaERhdGVcIiwgYWN0aW9uLnZhbCk7XHJcbiAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuQUREX0lNQUdFUlk6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoXCJmaWx0ZXJlZEltYWdlc1wiLCBhY3Rpb24udmFsKTtcclxuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5CQU5EX0ZPUk1VTEE6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoXCJiYW5kRm9ybXVsYVwiLCBhY3Rpb24udmFsKTtcclxuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5JTkRFWF9GT1JNVUxBOlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KFwiaW5kZXhGb3JtdWxhXCIsIGFjdGlvbi52YWwpO1xyXG4gICAgICAgIC8vIENIQU5HRSBERVRFQ1RJT05cclxuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5TRVRfU0VMRUNURURfU0VOU09SUzpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldChcInNlbGVjdGVkU2Vuc29yc1wiLCBhY3Rpb24udmFsKTtcclxuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5TRUxFQ1RfSU1BR0VSWTpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldChcInNlbGVjdGVkSW1hZ2VzXCIsIGFjdGlvbi52YWwpO1xyXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLlJFTU9WRV9JTUFHRVJZOlxyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KFwic2VsZWN0ZWRJbWFnZXNcIiwgW10pO1xyXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLkNIQU5HRV9ERVRFQ1RJT05fUkVBRFk6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoXCJpc1JlYWR5XCIsIGFjdGlvbi52YWwpO1xyXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLkdFT1BST0NFU1M6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXQoXCJnZW9wcm9jZXNzXCIsIGFjdGlvbi52YWwpXHJcbiAgICAgICAgY2FzZSBNeUFjdGlvbktleXMuT05MSU5FX1BST0NFU1NPUjpcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0YXRlLnNldChcIm9ubGluZVByb2Nlc3NvclwiLCBhY3Rpb24udmFsKVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiAgZ2V0U3RvcmVLZXkoKSB7XHJcbiAgICByZXR1cm4gXCJteVN0YXRlXCI7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==