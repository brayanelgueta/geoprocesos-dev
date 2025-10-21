System.register(["jimu-core/react","jimu-arcgis","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./node_modules/@esri/calcite-components/dist/calcite/calcite.css":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./node_modules/@esri/calcite-components/dist/calcite/calcite.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:not([calcite-hydrated]):is(calcite-accordion, calcite-accordion-item, calcite-action, calcite-action-bar, calcite-action-group, calcite-action-menu, calcite-action-pad, calcite-alert, calcite-autocomplete, calcite-autocomplete-item, calcite-autocomplete-item-group, calcite-avatar, calcite-block, calcite-block-group, calcite-block-section, calcite-button, calcite-card, calcite-card-group, calcite-carousel, calcite-carousel-item, calcite-checkbox, calcite-chip, calcite-chip-group, calcite-color-picker, calcite-color-picker-hex-input, calcite-color-picker-swatch, calcite-combobox, calcite-combobox-item, calcite-combobox-item-group, calcite-date-picker, calcite-date-picker-day, calcite-date-picker-month, calcite-date-picker-month-header, calcite-dialog, calcite-dropdown, calcite-dropdown-group, calcite-dropdown-item, calcite-fab, calcite-filter, calcite-flow, calcite-flow-item, calcite-graph, calcite-handle, calcite-icon, calcite-inline-editable, calcite-input, calcite-input-date-picker, calcite-input-message, calcite-input-number, calcite-input-text, calcite-input-time-picker, calcite-input-time-zone, calcite-label, calcite-link, calcite-list, calcite-list-item, calcite-list-item-group, calcite-loader, calcite-menu, calcite-menu-item, calcite-meter, calcite-modal, calcite-navigation, calcite-navigation-logo, calcite-navigation-user, calcite-notice, calcite-option, calcite-option-group, calcite-pagination, calcite-panel, calcite-popover, calcite-progress, calcite-radio-button, calcite-radio-button-group, calcite-rating, calcite-scrim, calcite-segmented-control, calcite-segmented-control-item, calcite-select, calcite-sheet, calcite-shell, calcite-shell-center-row, calcite-shell-panel, calcite-slider, calcite-sort-handle, calcite-sortable-list, calcite-split-button, calcite-stack, calcite-stepper, calcite-stepper-item, calcite-switch, calcite-tab, calcite-tab-nav, calcite-tab-title, calcite-table, calcite-table-cell, calcite-table-header, calcite-table-row, calcite-tabs, calcite-text-area, calcite-tile, calcite-tile-group, calcite-tile-select, calcite-tile-select-group, calcite-time-picker, calcite-tip, calcite-tip-group, calcite-tip-manager, calcite-tooltip, calcite-tree, calcite-tree-item) {
  visibility: hidden;
}

:root {
  --calcite-z-index-tooltip: 901;
  --calcite-z-index-popup: 900;
  --calcite-z-index-modal: 800;
  --calcite-z-index-overlay: 700;
  --calcite-z-index-dropdown: 600;
  --calcite-z-index-toast: 500;
  --calcite-z-index-header: 400;
  --calcite-z-index-sticky: 300;
  --calcite-z-index: 1;
  --calcite-z-index-deep: -999999;
  --calcite-spacing-xxxl: 2rem;
  --calcite-spacing-xxl: 1.5rem;
  --calcite-spacing-xl: 1.25rem;
  --calcite-spacing-lg: 1rem;
  --calcite-spacing-md-plus: .875rem;
  --calcite-spacing-md: .75rem;
  --calcite-spacing-sm-plus: .625rem;
  --calcite-spacing-sm: .5rem;
  --calcite-spacing-xs: .375rem;
  --calcite-spacing-xxs: .25rem;
  --calcite-spacing-base: 2px;
  --calcite-spacing-px: 1px;
  --calcite-spacing-none: 0;
  --calcite-spacing-fixed-xxxl: 32px;
  --calcite-spacing-fixed-xxl: 20px;
  --calcite-spacing-fixed-xl: 16px;
  --calcite-spacing-fixed-lg: 14px;
  --calcite-spacing-fixed-md: 12px;
  --calcite-spacing-fixed-sm: 8px;
  --calcite-spacing-fixed-xs: 6px;
  --calcite-spacing-fixed-xxs: 4px;
  --calcite-size-xxxl: 6rem;
  --calcite-size-xxl: 4rem;
  --calcite-size-xl: 3rem;
  --calcite-size-lg: 2.75rem;
  --calcite-size-md: 2rem;
  --calcite-size-sm: 1.5rem;
  --calcite-size-xs: 1rem;
  --calcite-size-xxs: .875rem;
  --calcite-size-xxxs: .75rem;
  --calcite-size-px: 1px;
  --calcite-size-fixed-xxxl: 32px;
  --calcite-size-fixed-xxl: 24px;
  --calcite-size-fixed-xl: 20px;
  --calcite-size-fixed-lg: 16px;
  --calcite-size-fixed-md-plus: 14px;
  --calcite-size-fixed-md: 12px;
  --calcite-size-fixed-sm-plus: 10px;
  --calcite-size-fixed-sm: 8px;
  --calcite-size-fixed-xs: 6px;
  --calcite-size-fixed-xxs: 4px;
  --calcite-size-fixed-xxxs: 2px;
  --calcite-opacity-disabled: .5;
  --calcite-opacity-full: 1;
  --calcite-opacity-dark: .85;
  --calcite-opacity-half: .5;
  --calcite-opacity-light: .4;
  --calcite-font-text-case-capitalize: capitalize;
  --calcite-font-text-case-lowercase: lowercase;
  --calcite-font-text-case-uppercase: uppercase;
  --calcite-font-text-case-none: none;
  --calcite-font-text-decoration-underline: underline;
  --calcite-font-text-decoration-none: none;
  --calcite-font-paragraph-spacing-normal: 4px;
  --calcite-font-letter-spacing-wide: .4;
  --calcite-font-letter-spacing-normal: 0;
  --calcite-font-letter-spacing-tight: -.4;
  --calcite-font-line-height-relative-loose: 2;
  --calcite-font-line-height-relative-relaxed: 1.625;
  --calcite-font-line-height-relative-normal: 1.5;
  --calcite-font-line-height-relative-snug: 1.375;
  --calcite-font-line-height-relative-tight: 1.25;
  --calcite-font-line-height-relative: auto;
  --calcite-font-line-height-fixed-xl: 24px;
  --calcite-font-line-height-fixed-lg: 20px;
  --calcite-font-line-height-fixed-base: 16px;
  --calcite-font-line-height-fixed-sm: 12px;
  --calcite-font-style-emphasis: italic;
  --calcite-font-size-xxl: 24px;
  --calcite-font-size-xl: 20px;
  --calcite-font-size-lg: 18px;
  --calcite-font-size-md: 16px;
  --calcite-font-size: 14px;
  --calcite-font-size-sm: 12px;
  --calcite-font-size-xs: 10px;
  --calcite-font-weight-bold: 600;
  --calcite-font-weight-semibold: 600;
  --calcite-font-weight-medium: 500;
  --calcite-font-weight-regular: 400;
  --calcite-font-weight-normal: 400;
  --calcite-font-weight-light: 300;
  --calcite-font-family-code: Monaco, Consolas, "Andale Mono", "Lucida Console", monospace;
  --calcite-font-family: "Avenir Next", Avenir, "Helvetica Neue", sans-serif;
  --calcite-corner-radius-pill: 100%;
  --calcite-corner-radius-round: 4px;
  --calcite-corner-radius-sharp: 0;
  --calcite-container-size-content-fixed: 1440px;
  --calcite-container-size-content-fluid: 100%;
  --calcite-container-size-gutter: 16px;
  --calcite-container-size-margin: 24px;
  --calcite-color-background-none: rgba(255, 255, 255, 0);
  --calcite-border-width-lg: 4px;
  --calcite-border-width-md: 2px;
  --calcite-border-width-sm: 1px;
  --calcite-border-width-none: 0;
  --calcite-shadow-md: 0 4px 20px 0 rgba(0, 0, 0, .08), 0 12px 30px rgba(0, 0, 0, .1);
  --calcite-shadow-sm: 0 2px 8px 0 rgba(0, 0, 0, .04), 0 4px 16px 0 rgba(0, 0, 0, .08);
  --calcite-shadow-none: 0 0 0 0 rgba(0, 0, 0, 0);
  --calcite-corner-radius: var(--calcite-corner-radius-sharp);
}

.calcite-typography-hierarchy-overline {
  line-height: var(--calcite-font-line-height-fixed-sm);
  text-case: var(--calcite-font-text-case-uppercase);
  font-weight: var(--calcite-font-weight-bold);
}

.calcite-typography-wrap-bold-minus-1 {
  font-weight: var(--calcite-font-weight-semibold);
  line-height: var(--calcite-font-line-height-relative-snug);
}

.calcite-typography-wrap-bold-minus-2 {
  font-weight: var(--calcite-font-weight-semibold);
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-sm);
}

.calcite-typography-wrap-bold-3 {
  font-weight: var(--calcite-font-weight-semibold);
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-xxl);
}

.calcite-typography-wrap-bold-2 {
  font-weight: var(--calcite-font-weight-semibold);
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-xl);
}

.calcite-typography-wrap-bold-1 {
  font-weight: var(--calcite-font-weight-semibold);
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-lg);
}

.calcite-typography-wrap-bold-0 {
  font-weight: var(--calcite-font-weight-semibold);
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-md);
}

.calcite-typography-wrap-medium-minus-1 {
  font-weight: var(--calcite-font-weight-medium);
  line-height: var(--calcite-font-line-height-relative-snug);
}

.calcite-typography-wrap-medium-minus-2 {
  font-weight: var(--calcite-font-weight-medium);
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-sm);
}

.calcite-typography-wrap-medium-3 {
  font-weight: var(--calcite-font-weight-medium);
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-xxl);
}

.calcite-typography-wrap-medium-2 {
  font-weight: var(--calcite-font-weight-medium);
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-xl);
}

.calcite-typography-wrap-medium-1 {
  font-weight: var(--calcite-font-weight-medium);
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-lg);
}

.calcite-typography-wrap-medium-0 {
  font-weight: var(--calcite-font-weight-medium);
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-md);
}

.calcite-typography-wrap-regular-minus-1 {
  line-height: var(--calcite-font-line-height-relative-snug);
}

.calcite-typography-wrap-regular-minus-2 {
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-sm);
}

.calcite-typography-wrap-regular-3 {
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-xxl);
}

.calcite-typography-wrap-regular-2 {
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-xl);
}

.calcite-typography-wrap-regular-1 {
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-lg);
}

.calcite-typography-wrap-regular-0 {
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-md);
}

.calcite-typography-wrap-light-minus-1 {
  font-weight: var(--calcite-font-weight-light);
  line-height: var(--calcite-font-line-height-relative-snug);
}

.calcite-typography-wrap-light-minus-2 {
  font-weight: var(--calcite-font-weight-light);
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-sm);
}

.calcite-typography-wrap-light-3 {
  font-weight: var(--calcite-font-weight-light);
  line-height: var(--calcite-font-line-height-relative-tight);
  font-size: var(--calcite-font-size-xxl);
}

.calcite-typography-wrap-light-2 {
  font-weight: var(--calcite-font-weight-light);
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-xl);
}

.calcite-typography-wrap-light-1 {
  font-weight: var(--calcite-font-weight-light);
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-lg);
}

.calcite-typography-wrap-light-0 {
  font-weight: var(--calcite-font-weight-light);
  line-height: var(--calcite-font-line-height-relative-snug);
  font-size: var(--calcite-font-size-md);
}

.calcite-typography-bold-1h {
  font-weight: var(--calcite-font-weight-semibold);
  line-height: var(--calcite-font-line-height-fixed-xl);
  font-size: var(--calcite-font-size-lg);
}

.calcite-typography-bold-0h {
  font-weight: var(--calcite-font-weight-semibold);
  line-height: var(--calcite-font-line-height-fixed-lg);
  font-size: var(--calcite-font-size-md);
}

.calcite-typography-bold-minus-1h {
  font-weight: var(--calcite-font-weight-semibold);
}

.calcite-typography-bold-minus-2h {
  font-weight: var(--calcite-font-weight-semibold);
  font-size: var(--calcite-font-size-sm);
}

.calcite-typography-bold-minus-3h {
  font-weight: var(--calcite-font-weight-semibold);
  line-height: var(--calcite-font-line-height-fixed-sm);
  font-size: var(--calcite-font-size-xs);
}

.calcite-typography-medium-1h {
  font-weight: var(--calcite-font-weight-medium);
  line-height: var(--calcite-font-line-height-fixed-xl);
  font-size: var(--calcite-font-size-lg);
}

.calcite-typography-medium-0h {
  font-weight: var(--calcite-font-weight-medium);
  line-height: var(--calcite-font-line-height-fixed-lg);
  font-size: var(--calcite-font-size-md);
}

.calcite-typography-medium-minus-1h {
  font-weight: var(--calcite-font-weight-medium);
}

.calcite-typography-medium-minus-2h {
  font-weight: var(--calcite-font-weight-medium);
  font-size: var(--calcite-font-size-sm);
}

.calcite-typography-medium-minus-3h {
  font-weight: var(--calcite-font-weight-medium);
  line-height: var(--calcite-font-line-height-fixed-sm);
  font-size: var(--calcite-font-size-xs);
}

.calcite-typography-regular-1h {
  line-height: var(--calcite-font-line-height-fixed-xl);
  font-size: var(--calcite-font-size-lg);
}

.calcite-typography-regular-0h {
  line-height: var(--calcite-font-line-height-fixed-lg);
  font-size: var(--calcite-font-size-md);
}

.calcite-typography-regular-minus-2h {
  font-size: var(--calcite-font-size-sm);
}

.calcite-typography-regular-minus-3h {
  line-height: var(--calcite-font-line-height-fixed-sm);
  font-size: var(--calcite-font-size-xs);
}

.calcite-typography-light-1h {
  font-size: var(--calcite-font-size-lg);
  font-weight: var(--calcite-font-weight-light);
  line-height: var(--calcite-font-line-height-fixed-xl);
}

.calcite-typography-light-0h {
  font-size: var(--calcite-font-size-md);
  font-weight: var(--calcite-font-weight-light);
  line-height: var(--calcite-font-line-height-fixed-lg);
}

.calcite-typography-light-minus-1h {
  font-weight: var(--calcite-font-weight-light);
}

.calcite-typography-light-minus-2h {
  font-size: var(--calcite-font-size-sm);
  font-weight: var(--calcite-font-weight-light);
}

.calcite-typography-light-minus-3h {
  font-size: var(--calcite-font-size-xs);
  font-weight: var(--calcite-font-weight-light);
  line-height: var(--calcite-font-line-height-fixed-sm);
}

.calcite-typography {
  font-family: var(--calcite-font-family);
  font-size: var(--calcite-font-size);
  font-weight: var(--calcite-font-weight-regular);
  letter-spacing: var(--calcite-font-letter-spacing-normal);
  line-height: var(--calcite-font-line-height-fixed-base);
  paragraph-spacing: var(--calcite-font-paragraph-spacing-normal);
  text-case: var(--calcite-font-text-case-none);
  -webkit-text-decoration: var(--calcite-font-text-decoration-none);
  text-decoration: var(--calcite-font-text-decoration-none);
}

.calcite-typography-hierarchy-caption {
  line-height: 1.375;
  font-size: 12px;
}

.calcite-typography-hierarchy-body {
  font-family: Avenir Next, Avenir, Helvetica Neue, sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 16px;
  paragraph-spacing: 4px;
  text-case: none;
  text-decoration: none;
}

.calcite-typography-hierarchy-body-snug {
  line-height: 1.375;
}

.calcite-typography-hierarchy-heading-5 {
  font-weight: 500;
  line-height: 1.375;
}

.calcite-typography-hierarchy-heading-4 {
  font-weight: 500;
  line-height: 1.375;
  font-size: 16px;
}

.calcite-typography-hierarchy-heading-3 {
  font-weight: 500;
  line-height: 1.375;
  font-size: 18px;
}

.calcite-typography-hierarchy-heading-2 {
  font-weight: 500;
  line-height: 1.375;
  font-size: 20px;
}

.calcite-typography-hierarchy-heading-1 {
  font-weight: 500;
  line-height: 1.375;
  font-size: 24px;
}

.calcite-typography-hierarchy-display-2 {
  font-weight: 600;
  line-height: 1.375;
  font-size: 20px;
}

.calcite-typography-hierarchy-display-1 {
  font-weight: 600;
  line-height: 1.375;
  font-size: 24px;
}

.calcite-typography-regular-minus-1h {
  font-family: Avenir Next, Avenir, Helvetica Neue, sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 16px;
  paragraph-spacing: 4px;
  text-case: none;
  text-decoration: none;
}

:root {
  --calcite-color-border-white: #ffffff;
  --calcite-color-border-ghost: rgba(0, 0, 0, .3);
  --calcite-color-border-input: #949494;
  --calcite-color-border-3: #dfdfdf;
  --calcite-color-border-2: #d4d4d4;
  --calcite-color-border-1: #cacaca;
  --calcite-color-text-link: #00619b;
  --calcite-color-text-inverse: #ffffff;
  --calcite-color-text-3: #6a6a6a;
  --calcite-color-text-2: #4a4a4a;
  --calcite-color-text-1: #151515;
  --calcite-color-inverse-press: #202020;
  --calcite-color-inverse-hover: #2b2b2b;
  --calcite-color-inverse: #353535;
  --calcite-color-status-danger-press: #7c1d13;
  --calcite-color-status-danger-hover: #a82b1e;
  --calcite-color-status-danger: #d83020;
  --calcite-color-status-warning-press: #bfa200;
  --calcite-color-status-warning-hover: #d9bc00;
  --calcite-color-status-warning: #edd317;
  --calcite-color-status-success-press: #1a6324;
  --calcite-color-status-success-hover: #288835;
  --calcite-color-status-success: #35ac46;
  --calcite-color-status-info-press: #00304d;
  --calcite-color-status-info-hover: #004874;
  --calcite-color-status-info: #00619b;
  --calcite-color-brand-underline: rgba(0, 97, 155, .4);
  --calcite-color-brand-press: #004874;
  --calcite-color-brand-hover: #00619b;
  --calcite-color-brand: #007ac2;
  --calcite-color-transparent-tint: rgba(255, 255, 255, .8);
  --calcite-color-transparent-scrim: rgba(255, 255, 255, .85);
  --calcite-color-transparent-press: rgba(0, 0, 0, .08);
  --calcite-color-transparent-hover: rgba(0, 0, 0, .04);
  --calcite-color-transparent: rgba(0, 0, 0, 0);
  --calcite-color-foreground-current: #c7eaff;
  --calcite-color-foreground-3: #eaeaea;
  --calcite-color-foreground-2: #f3f3f3;
  --calcite-color-foreground-1: #ffffff;
  --calcite-color-background: #f8f8f8;
  --calcite-color-focus: #007ac2;
}

.calcite-mode-light {
  --calcite-color-border-white: #ffffff;
  --calcite-color-border-ghost: rgba(0, 0, 0, .3);
  --calcite-color-border-input: #949494;
  --calcite-color-border-3: #dfdfdf;
  --calcite-color-border-2: #d4d4d4;
  --calcite-color-border-1: #cacaca;
  --calcite-color-text-link: #00619b;
  --calcite-color-text-inverse: #ffffff;
  --calcite-color-text-3: #6a6a6a;
  --calcite-color-text-2: #4a4a4a;
  --calcite-color-text-1: #151515;
  --calcite-color-inverse-press: #202020;
  --calcite-color-inverse-hover: #2b2b2b;
  --calcite-color-inverse: #353535;
  --calcite-color-status-danger-press: #7c1d13;
  --calcite-color-status-danger-hover: #a82b1e;
  --calcite-color-status-danger: #d83020;
  --calcite-color-status-warning-press: #bfa200;
  --calcite-color-status-warning-hover: #d9bc00;
  --calcite-color-status-warning: #edd317;
  --calcite-color-status-success-press: #1a6324;
  --calcite-color-status-success-hover: #288835;
  --calcite-color-status-success: #35ac46;
  --calcite-color-status-info-press: #00304d;
  --calcite-color-status-info-hover: #004874;
  --calcite-color-status-info: #00619b;
  --calcite-color-brand-underline: rgba(0, 97, 155, .4);
  --calcite-color-brand-press: #004874;
  --calcite-color-brand-hover: #00619b;
  --calcite-color-brand: #007ac2;
  --calcite-color-transparent-tint: rgba(255, 255, 255, .8);
  --calcite-color-transparent-scrim: rgba(255, 255, 255, .85);
  --calcite-color-transparent-press: rgba(0, 0, 0, .08);
  --calcite-color-transparent-hover: rgba(0, 0, 0, .04);
  --calcite-color-transparent: rgba(0, 0, 0, 0);
  --calcite-color-foreground-current: #c7eaff;
  --calcite-color-foreground-3: #eaeaea;
  --calcite-color-foreground-2: #f3f3f3;
  --calcite-color-foreground-1: #ffffff;
  --calcite-color-background: #f8f8f8;
  --calcite-color-focus: #007ac2;
}

.calcite-mode-dark {
  --calcite-color-border-white: #f8f8f8;
  --calcite-color-border-ghost: rgba(117, 117, 117, .3);
  --calcite-color-border-input: #757575;
  --calcite-color-border-3: #404040;
  --calcite-color-border-2: #4a4a4a;
  --calcite-color-border-1: #555555;
  --calcite-color-text-link: #00a0ff;
  --calcite-color-text-inverse: #151515;
  --calcite-color-text-3: #9f9f9f;
  --calcite-color-text-2: #bfbfbf;
  --calcite-color-text-1: #ffffff;
  --calcite-color-inverse-press: #f3f3f3;
  --calcite-color-inverse-hover: #ffffff;
  --calcite-color-inverse: #f8f8f8;
  --calcite-color-status-danger-press: #d90012;
  --calcite-color-status-danger-hover: #ff0015;
  --calcite-color-status-danger: #fe583e;
  --calcite-color-status-warning-press: #f5d000;
  --calcite-color-status-warning-hover: #ffee33;
  --calcite-color-status-warning: #ffc900;
  --calcite-color-status-success-press: #00b81b;
  --calcite-color-status-success-hover: #3bed52;
  --calcite-color-status-success: #36da43;
  --calcite-color-status-info-press: #009af2;
  --calcite-color-status-info-hover: #3db8ff;
  --calcite-color-status-info: #00a0ff;
  --calcite-color-brand-underline: rgba(0, 160, 255, .4);
  --calcite-color-brand-press: #00619b;
  --calcite-color-brand-hover: #007ac2;
  --calcite-color-brand: #009af2;
  --calcite-color-transparent-tint: rgba(43, 43, 43, .8);
  --calcite-color-transparent-scrim: rgba(0, 0, 0, .85);
  --calcite-color-transparent-press: rgba(255, 255, 255, .08);
  --calcite-color-transparent-hover: rgba(255, 255, 255, .04);
  --calcite-color-transparent: rgba(255, 255, 255, 0);
  --calcite-color-foreground-current: #214155;
  --calcite-color-foreground-3: #151515;
  --calcite-color-foreground-2: #202020;
  --calcite-color-foreground-1: #2b2b2b;
  --calcite-color-background: #353535;
  --calcite-color-focus: #009af2;
}

:root {
  --calcite-code-family: "Consolas", "Andale Mono", "Lucida Console", "Monaco", monospace;
  --calcite-sans-family: "Avenir Next", "Avenir", "Helvetica Neue", sans-serif;
  --calcite-font-size--3: .625rem;
  --calcite-font-size--2: .75rem;
  --calcite-font-size--1: .875rem;
  --calcite-font-size-0: 1rem;
  --calcite-font-size-1: 1.125rem;
  --calcite-font-size-2: 1.25rem;
  --calcite-font-size-3: 1.625rem;
  --calcite-font-size-4: 2rem;
  --calcite-font-size-5: 2.5rem;
  --calcite-font-size-6: 3rem;
  --calcite-font-size-7: 3.5rem;
  --calcite-font-size-8: 4rem;
  --calcite-font-weight-light: 300;
  --calcite-font-weight-normal: 400;
  --calcite-font-weight-medium: 500;
  --calcite-font-weight-bold: 600;
  --calcite-ui-brand: var(--calcite-color-brand);
  --calcite-ui-brand-hover: var(--calcite-color-brand-hover);
  --calcite-ui-brand-press: var(--calcite-color-brand-press);
  --calcite-ui-background: var(--calcite-color-background);
  --calcite-ui-foreground-1: var(--calcite-color-foreground-1);
  --calcite-ui-foreground-2: var(--calcite-color-foreground-2);
  --calcite-ui-foreground-3: var(--calcite-color-foreground-3);
  --calcite-ui-foreground-current: var(--calcite-color-foreground-current);
  --calcite-ui-focus-offset-invert: var(--calcite-offset-invert-focus);
  --calcite-semantic-ui-color-foreground-current: var(--calcite-color-foreground-current);
  --calcite-ui-text-1: var(--calcite-color-text-1);
  --calcite-ui-text-2: var(--calcite-color-text-2);
  --calcite-ui-text-3: var(--calcite-color-text-3);
  --calcite-ui-text-inverse: var(--calcite-color-text-inverse);
  --calcite-ui-text-link: var(--calcite-color-text-link);
  --calcite-ui-border-1: var(--calcite-color-border-1);
  --calcite-ui-border-2: var(--calcite-color-border-2);
  --calcite-ui-border-3: var(--calcite-color-border-3);
  --calcite-ui-border-input: var(--calcite-color-border-input);
  --calcite-ui-info: var(--calcite-color-status-info);
  --calcite-ui-info-hover: var(--calcite-color-status-info-hover);
  --calcite-ui-info-press: var(--calcite-color-status-info-press);
  --calcite-ui-success: var(--calcite-color-status-success);
  --calcite-ui-success-hover: var(--calcite-color-status-success-hover);
  --calcite-ui-success-press: var(--calcite-color-status-success-press);
  --calcite-ui-warning: var(--calcite-color-status-warning);
  --calcite-ui-warning-hover: var(--calcite-color-status-warning-hover);
  --calcite-ui-warning-press: var(--calcite-color-status-warning-press);
  --calcite-ui-danger: var(--calcite-color-status-danger);
  --calcite-ui-danger-hover: var(--calcite-color-status-danger-hover);
  --calcite-ui-danger-press: var(--calcite-color-status-danger-press);
  --calcite-ui-inverse: var(--calcite-color-inverse);
  --calcite-app-z-index: var(--calcite-z-index);
  --calcite-app-z-index-tooltip: var(--calcite-z-index-tooltip);
  --calcite-app-z-index-popup: var(--calcite-z-index-popup);
  --calcite-app-z-index-modal: var(--calcite-z-index-modal);
  --calcite-app-z-index-overlay: var(--calcite-z-index-overlay);
  --calcite-app-z-index-dropdown: var(--calcite-z-index-dropdown);
  --calcite-app-z-index-toast: var(--calcite-z-index-toast);
  --calcite-app-z-index-header: var(--calcite-z-index-header);
  --calcite-app-z-index-sticky: var(--calcite-z-index-sticky);
  --calcite-app-breakpoint-content-fixed: var(--calcite-container-size-content-fixed);
  --calcite-app-breakpoint-content-fluid: var(--calcite-container-size-content-fluid);
  --calcite-app-breakpoint-width-lg: var(--calcite-container-size-width-lg-max);
  --calcite-app-breakpoint-width-md: var(--calcite-container-size-width-md-max);
  --calcite-app-breakpoint-width-sm: var(--calcite-container-size-width-sm-max);
  --calcite-app-breakpoint-width-xs: var(--calcite-container-size-width-xs-max);
  --calcite-app-breakpoint-width-xxs: var(--calcite-container-size-width-xxs-max);
  --calcite-app-spacing-11: var(--calcite-spacing-xxxl);
  --calcite-app-spacing-8: var(--calcite-spacing-xl);
  --calcite-app-spacing-7: var(--calcite-spacing-lg);
  --calcite-app-spacing-6: var(--calcite-spacing-md-plus);
  --calcite-app-spacing-5: var(--calcite-spacing-md);
  --calcite-app-spacing-3: var(--calcite-spacing-sm);
  --calcite-app-spacing-2: var(--calcite-spacing-xs);
  --calcite-app-spacing-1: var(--calcite-spacing-xxs);
  --calcite-app-spacing-0: var(--calcite-spacing-base);
  --calcite-app-sizing-11: var(--calcite-size-md);
  --calcite-app-sizing-9: var(--calcite-size-sm);
  --calcite-app-sizing-8: var(--calcite-spacing-xl);
  --calcite-app-sizing-7: var(--calcite-size-xs);
  --calcite-app-sizing-6: var(--calcite-size-xxxs-plus);
  --calcite-app-sizing-5: var(--calcite-size-xxxs);
  --calcite-app-sizing-4: var(--calcite-spacing-sm-plus);
  --calcite-app-sizing-3: var(--calcite-spacing-sm);
  --calcite-app-sizing-2: var(--calcite-spacing-xs);
  --calcite-app-sizing-1: var(--calcite-spacing-xxs);
  --calcite-app-sizing-0: var(--calcite-spacing-base);
  --calcite-app-opacity-100: var(--calcite-app-opacity-full);
  --calcite-app-opacity-85: var(--calcite-app-opacity-dark);
  --calcite-app-opacity-50: var(--calcite-app-opacity-half);
  --calcite-app-opacity-40: var(--calcite-app-opacity-light);
  --calcite-app-border-width-none: var(--calcite-border-width-none);
  --calcite-app-border-width-2: var(--calcite-border-width-lg);
  --calcite-app-border-width-1: var(--calcite-border-width-md);
  --calcite-app-border-width-0: var(--calcite-border-width-sm);
  --calcite-app-border-radius-full: var(--calcite-corner-radius-pill);
  --calcite-app-border-radius-none: var(--calcite-corner-radius-sharp);
  --calcite-app-border-radius-1: var(--calcite-corner-radius-round);
  --calcite-app-border-radius-0: var(--calcite-corner-radius-0);
  --calcite-app-font-text-case-capitalize: var(--calcite-font-text-case-capitalize);
  --calcite-app-font-text-case-lowercase: var(--calcite-font-text-case-lowercase);
  --calcite-app-font-text-case-uppercase: var(--calcite-font-text-case-uppercase);
  --calcite-app-font-text-case-none: var(--calcite-font-text-case-none);
  --calcite-app-font-text-decoration-underline: var(--calcite-font-text-decoration-underline);
  --calcite-app-font-text-decoration-none: var(--calcite-font-text-decoration-none);
  --calcite-app-font-paragraph-spacing-normal: var(--calcite-font-paragraph-spacing-normal);
  --calcite-app-font-letter-spacing-wide: var(--calcite-font-letter-spacing-wide);
  --calcite-app-font-letter-spacing-normal: var(--calcite-font-letter-spacing-normal);
  --calcite-app-font-letter-spacing-tight: var(--calcite-font-letter-spacing-tight);
  --calcite-app-font-size-6: var(--calcite-font-size-xxl);
  --calcite-app-font-size-5: var(--calcite-font-size-xl);
  --calcite-app-font-size-4: var(--calcite-font-size-lg);
  --calcite-app-font-size-3: var(--calcite-font-size-md);
  --calcite-app-font-size-2: var(--calcite-font-size);
  --calcite-app-font-size-1: var(--calcite-font-size-sm);
  --calcite-app-font-size-0: var(--calcite-font-size-xs);
  --calcite-app-font-line-height-relative-loose: var(--calcite-font-line-height-relative-loose);
  --calcite-app-font-line-height-relative-relaxed: var(--calcite-font-line-height-relative-relaxed);
  --calcite-app-font-line-height-relative-normal: var(--calcite-font-line-height-relative-normal);
  --calcite-app-font-line-height-relative-snug: var(--calcite-font-line-height-relative-snug);
  --calcite-app-font-line-height-relative-tight: var(--calcite-font-line-height-relative-tight);
  --calcite-app-font-line-height-relative: var(--calcite-font-line-height-relative);
  --calcite-app-font-line-height-fixed-3: var(--calcite-font-line-height-fixed-xl);
  --calcite-app-font-line-height-fixed-2: var(--calcite-font-line-height-fixed-lg);
  --calcite-app-font-line-height-fixed: var(--calcite-font-line-height-fixed-sm);
  --calcite-app-font-weight-bold: var(--calcite-font-weight-bold);
  --calcite-app-font-weight-demi: var(--calcite-font-weight-semibold);
  --calcite-app-font-weight-medium: var(--calcite-font-weight-medium);
  --calcite-app-font-weight-regular: var(--calcite-font-weight-regular);
  --calcite-app-font-weight-light: var(--calcite-font-weight-light);
  --calcite-app-font-family-code: var(--calcite-font-family-code);
  --calcite-app-font-family-primary: var(--calcite-font-family-primary);
  --calcite-floating-ui-transition: var(--calcite-animation-timing);
  --calcite-floating-ui-z-index: var(--calcite-z-index-dropdown);
  --calcite-animation-timing: calc(.15s * var(--calcite-internal-duration-factor));
  --calcite-internal-duration-factor: var(--calcite-duration-factor, 1);
  --calcite-internal-animation-timing-fast: calc(.1s * var(--calcite-internal-duration-factor));
  --calcite-internal-animation-timing-medium: calc(.2s * var(--calcite-internal-duration-factor));
  --calcite-internal-animation-timing-slow: calc(.3s * var(--calcite-internal-duration-factor));
  --calcite-popover-z-index: var(--calcite-z-index-popup);
  --calcite-border-radius: var(--calcite-border-radius-round, 4px);
  --calcite-border-radius-base: 0;
  --calcite-offset-invert-focus: 0;
  --calcite-panel-width-multiplier: 1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: var(--calcite-font-family);
}

@media (prefers-color-scheme: dark) {
  .calcite-mode-auto {
    --calcite-color-border-white: #f8f8f8;
    --calcite-color-border-ghost: rgba(117, 117, 117, .3);
    --calcite-color-border-input: #757575;
    --calcite-color-border-3: #404040;
    --calcite-color-border-2: #4a4a4a;
    --calcite-color-border-1: #555555;
    --calcite-color-text-link: #00a0ff;
    --calcite-color-text-inverse: #151515;
    --calcite-color-text-3: #9f9f9f;
    --calcite-color-text-2: #bfbfbf;
    --calcite-color-text-1: #ffffff;
    --calcite-color-inverse-press: #f3f3f3;
    --calcite-color-inverse-hover: #ffffff;
    --calcite-color-inverse: #f8f8f8;
    --calcite-color-status-danger-press: #d90012;
    --calcite-color-status-danger-hover: #ff0015;
    --calcite-color-status-danger: #fe583e;
    --calcite-color-status-warning-press: #f5d000;
    --calcite-color-status-warning-hover: #ffee33;
    --calcite-color-status-warning: #ffc900;
    --calcite-color-status-success-press: #00b81b;
    --calcite-color-status-success-hover: #3bed52;
    --calcite-color-status-success: #36da43;
    --calcite-color-status-info-press: #009af2;
    --calcite-color-status-info-hover: #3db8ff;
    --calcite-color-status-info: #00a0ff;
    --calcite-color-brand-underline: rgba(0, 160, 255, .4);
    --calcite-color-brand-press: #00619b;
    --calcite-color-brand-hover: #007ac2;
    --calcite-color-brand: #009af2;
    --calcite-color-transparent-tint: rgba(43, 43, 43, .8);
    --calcite-color-transparent-scrim: rgba(0, 0, 0, .85);
    --calcite-color-transparent-press: rgba(255, 255, 255, .08);
    --calcite-color-transparent-hover: rgba(255, 255, 255, .04);
    --calcite-color-transparent: rgba(255, 255, 255, 0);
    --calcite-color-foreground-current: #214155;
    --calcite-color-foreground-3: #151515;
    --calcite-color-foreground-2: #202020;
    --calcite-color-foreground-1: #2b2b2b;
    --calcite-color-background: #353535;
    --calcite-color-focus: #009af2;
  }
}
@media (prefers-color-scheme: light) {
  .calcite-mode-auto {
    --calcite-color-border-white: #ffffff;
    --calcite-color-border-ghost: rgba(0, 0, 0, .3);
    --calcite-color-border-input: #949494;
    --calcite-color-border-3: #dfdfdf;
    --calcite-color-border-2: #d4d4d4;
    --calcite-color-border-1: #cacaca;
    --calcite-color-text-link: #00619b;
    --calcite-color-text-inverse: #ffffff;
    --calcite-color-text-3: #6a6a6a;
    --calcite-color-text-2: #4a4a4a;
    --calcite-color-text-1: #151515;
    --calcite-color-inverse-press: #202020;
    --calcite-color-inverse-hover: #2b2b2b;
    --calcite-color-inverse: #353535;
    --calcite-color-status-danger-press: #7c1d13;
    --calcite-color-status-danger-hover: #a82b1e;
    --calcite-color-status-danger: #d83020;
    --calcite-color-status-warning-press: #bfa200;
    --calcite-color-status-warning-hover: #d9bc00;
    --calcite-color-status-warning: #edd317;
    --calcite-color-status-success-press: #1a6324;
    --calcite-color-status-success-hover: #288835;
    --calcite-color-status-success: #35ac46;
    --calcite-color-status-info-press: #00304d;
    --calcite-color-status-info-hover: #004874;
    --calcite-color-status-info: #00619b;
    --calcite-color-brand-underline: rgba(0, 97, 155, .4);
    --calcite-color-brand-press: #004874;
    --calcite-color-brand-hover: #00619b;
    --calcite-color-brand: #007ac2;
    --calcite-color-transparent-tint: rgba(255, 255, 255, .8);
    --calcite-color-transparent-scrim: rgba(255, 255, 255, .85);
    --calcite-color-transparent-press: rgba(0, 0, 0, .08);
    --calcite-color-transparent-hover: rgba(0, 0, 0, .04);
    --calcite-color-transparent: rgba(0, 0, 0, 0);
    --calcite-color-foreground-current: #c7eaff;
    --calcite-color-foreground-3: #eaeaea;
    --calcite-color-foreground-2: #f3f3f3;
    --calcite-color-foreground-1: #ffffff;
    --calcite-color-background: #f8f8f8;
    --calcite-color-focus: #007ac2;
  }
}
@media (prefers-reduced-motion: reduce) {
  :root {
    --calcite-internal-duration-factor: 0;
  }
}
@keyframes in {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes in-down {
  0% {
    opacity: 0;
    transform: translate3D(0, -5px, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
}
@keyframes in-up {
  0% {
    opacity: 0;
    transform: translate3D(0, 5px, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
}
@keyframes in-right {
  0% {
    opacity: 0;
    transform: translate3D(-5px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
}
@keyframes in-left {
  0% {
    opacity: 0;
    transform: translate3D(5px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
}
@keyframes in-scale {
  0% {
    opacity: 0;
    transform: scale3D(0.95, 0.95, 1);
  }
  to {
    opacity: 1;
    transform: scaleZ(1);
  }
}
.calcite-animate {
  opacity: 0;
  animation-fill-mode: both;
  animation-duration: var(--calcite-animation-timing);
}

.calcite-animate__in {
  animation-name: in;
}

.calcite-animate__in-down {
  animation-name: in-down;
}

.calcite-animate__in-up {
  animation-name: in-up;
}

.calcite-animate__in-right {
  animation-name: in-right;
}

.calcite-animate__in-left {
  animation-name: in-left;
}

.calcite-animate__in-scale {
  animation-name: in-scale;
}

.calcite-sortable--chosen, .calcite-sortable--ghost, .calcite-sortable--drag, .calcite-sortable--fallback {
  position: relative;
  overflow: hidden;
}

.calcite-sortable--ghost:before {
  content: "";
  position: absolute;
  inset-block: 0px;
  inset-inline-start: 0px;
  inset-inline-end: 0px;
  z-index: var(--calcite-z-index);
  box-sizing: border-box;
  border-width: 1px;
  border-style: dashed;
  border-color: var(--calcite-color-brand);
  background-color: var(--calcite-color-foreground-2);
}

.calcite-sortable--drag {
  --tw-shadow: 0 6px 20px -4px rgba(0, 0, 0, .1), 0 4px 12px -2px rgba(0, 0, 0, .08);
  --tw-shadow-colored: 0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);
}`, "",{"version":3,"sources":["webpack://./node_modules/@esri/calcite-components/dist/calcite/calcite.css","webpack://./../../../Nueva%20carpeta/ArcGISExperienceBuilder/client/node_modules/@esri/calcite-components/dist/calcite/calcite.css"],"names":[],"mappings":"AAAA;EAAokE,kBAAA;ACEpkE;;ADFslE;EAAM,8BAAA;EAA+B,4BAAA;EAA6B,4BAAA;EAA6B,8BAAA;EAA+B,+BAAA;EAAgC,4BAAA;EAA6B,6BAAA;EAA8B,6BAAA;EAA8B,oBAAA;EAAqB,+BAAA;EAAgC,4BAAA;EAA6B,6BAAA;EAA8B,6BAAA;EAA8B,0BAAA;EAA2B,kCAAA;EAAmC,4BAAA;EAA6B,kCAAA;EAAmC,2BAAA;EAA4B,6BAAA;EAA8B,6BAAA;EAA8B,2BAAA;EAA4B,yBAAA;EAA0B,yBAAA;EAA0B,kCAAA;EAAmC,iCAAA;EAAkC,gCAAA;EAAiC,gCAAA;EAAiC,gCAAA;EAAiC,+BAAA;EAAgC,+BAAA;EAAgC,gCAAA;EAAiC,yBAAA;EAA0B,wBAAA;EAAyB,uBAAA;EAAwB,0BAAA;EAA2B,uBAAA;EAAwB,yBAAA;EAA0B,uBAAA;EAAwB,2BAAA;EAA4B,2BAAA;EAA4B,sBAAA;EAAuB,+BAAA;EAAgC,8BAAA;EAA+B,6BAAA;EAA8B,6BAAA;EAA8B,kCAAA;EAAmC,6BAAA;EAA8B,kCAAA;EAAmC,4BAAA;EAA6B,4BAAA;EAA6B,6BAAA;EAA8B,8BAAA;EAA+B,8BAAA;EAA+B,yBAAA;EAA0B,2BAAA;EAA4B,0BAAA;EAA2B,2BAAA;EAA4B,+CAAA;EAAgD,6CAAA;EAA8C,6CAAA;EAA8C,mCAAA;EAAoC,mDAAA;EAAoD,yCAAA;EAA0C,4CAAA;EAA6C,sCAAA;EAAuC,uCAAA;EAAwC,wCAAA;EAAyC,4CAAA;EAA6C,kDAAA;EAAmD,+CAAA;EAAgD,+CAAA;EAAgD,+CAAA;EAAgD,yCAAA;EAA0C,yCAAA;EAA0C,yCAAA;EAA0C,2CAAA;EAA4C,yCAAA;EAA0C,qCAAA;EAAsC,6BAAA;EAA8B,4BAAA;EAA6B,4BAAA;EAA6B,4BAAA;EAA6B,yBAAA;EAA0B,4BAAA;EAA6B,4BAAA;EAA6B,+BAAA;EAAgC,mCAAA;EAAoC,iCAAA;EAAkC,kCAAA;EAAmC,iCAAA;EAAkC,gCAAA;EAAiC,wFAAA;EAAyF,0EAAA;EAA2E,kCAAA;EAAmC,kCAAA;EAAmC,gCAAA;EAAiC,8CAAA;EAA+C,4CAAA;EAA6C,qCAAA;EAAsC,qCAAA;EAAsC,uDAAA;EAAwD,8BAAA;EAA+B,8BAAA;EAA+B,8BAAA;EAA+B,8BAAA;EAA+B,mFAAA;EAAoF,oFAAA;EAAqF,+CAAA;EAAgD,2DAAA;ACkH71L;;ADlHy5L;EAAuC,qDAAA;EAAqD,kDAAA;EAAkD,4CAAA;ACwHviM;;ADxHmlM;EAAsC,gDAAA;EAAgD,0DAAA;AC6HzqM;;AD7HmuM;EAAsC,gDAAA;EAAgD,0DAAA;EAA0D,sCAAA;ACmIn3M;;ADnIy5M;EAAgC,gDAAA;EAAgD,0DAAA;EAA0D,uCAAA;ACyIniN;;ADzI0kN;EAAgC,gDAAA;EAAgD,0DAAA;EAA0D,sCAAA;AC+IptN;;AD/I0vN;EAAgC,gDAAA;EAAgD,0DAAA;EAA0D,sCAAA;ACqJp4N;;ADrJ06N;EAAgC,gDAAA;EAAgD,0DAAA;EAA0D,sCAAA;AC2JpjO;;AD3J0lO;EAAwC,8CAAA;EAA8C,0DAAA;ACgKhrO;;ADhK0uO;EAAwC,8CAAA;EAA8C,0DAAA;EAA0D,sCAAA;ACsK13O;;ADtKg6O;EAAkC,8CAAA;EAA8C,0DAAA;EAA0D,uCAAA;AC4K1iP;;AD5KilP;EAAkC,8CAAA;EAA8C,0DAAA;EAA0D,sCAAA;ACkL3tP;;ADlLiwP;EAAkC,8CAAA;EAA8C,0DAAA;EAA0D,sCAAA;ACwL34P;;ADxLi7P;EAAkC,8CAAA;EAA8C,0DAAA;EAA0D,sCAAA;AC8L3jQ;;AD9LimQ;EAAyC,0DAAA;ACkM1oQ;;ADlMosQ;EAAyC,0DAAA;EAA0D,sCAAA;ACuMvyQ;;ADvM60Q;EAAmC,0DAAA;EAA0D,uCAAA;AC4M16Q;;AD5Mi9Q;EAAmC,0DAAA;EAA0D,sCAAA;ACiN9iR;;ADjNolR;EAAmC,0DAAA;EAA0D,sCAAA;ACsNjrR;;ADtNutR;EAAmC,0DAAA;EAA0D,sCAAA;AC2NpzR;;AD3N01R;EAAuC,6CAAA;EAA6C,0DAAA;ACgO96R;;ADhOw+R;EAAuC,6CAAA;EAA6C,0DAAA;EAA0D,sCAAA;ACsOtnS;;ADtO4pS;EAAiC,6CAAA;EAA6C,2DAAA;EAA2D,uCAAA;AC4OryS;;AD5O40S;EAAiC,6CAAA;EAA6C,0DAAA;EAA0D,sCAAA;ACkPp9S;;ADlP0/S;EAAiC,6CAAA;EAA6C,0DAAA;EAA0D,sCAAA;ACwPloT;;ADxPwqT;EAAiC,6CAAA;EAA6C,0DAAA;EAA0D,sCAAA;AC8PhzT;;AD9Ps1T;EAA4B,gDAAA;EAAgD,qDAAA;EAAqD,sCAAA;ACoQv9T;;ADpQ6/T;EAA4B,gDAAA;EAAgD,qDAAA;EAAqD,sCAAA;AC0Q9nU;;AD1QoqU;EAAkC,gDAAA;AC8QtsU;;AD9QsvU;EAAkC,gDAAA;EAAgD,sCAAA;ACmRx0U;;ADnR82U;EAAkC,gDAAA;EAAgD,qDAAA;EAAqD,sCAAA;ACyRr/U;;ADzR2hV;EAA8B,8CAAA;EAA8C,qDAAA;EAAqD,sCAAA;AC+R5pV;;AD/RksV;EAA8B,8CAAA;EAA8C,qDAAA;EAAqD,sCAAA;ACqSn0V;;ADrSy2V;EAAoC,8CAAA;ACyS74V;;ADzS27V;EAAoC,8CAAA;EAA8C,sCAAA;AC8S7gW;;AD9SmjW;EAAoC,8CAAA;EAA8C,qDAAA;EAAqD,sCAAA;ACoT1rW;;ADpTguW;EAA+B,qDAAA;EAAqD,sCAAA;ACyTpzW;;ADzT01W;EAA+B,qDAAA;EAAqD,sCAAA;AC8T96W;;AD9To9W;EAAqC,sCAAA;ACkUz/W;;ADlU+hX;EAAqC,qDAAA;EAAqD,sCAAA;ACuUznX;;ADvU+pX;EAA6B,sCAAA;EAAsC,6CAAA;EAA6C,qDAAA;AC6U/wX;;AD7Uo0X;EAA6B,sCAAA;EAAsC,6CAAA;EAA6C,qDAAA;ACmVp7X;;ADnVy+X;EAAmC,6CAAA;ACuV5gY;;ADvVyjY;EAAmC,sCAAA;EAAsC,6CAAA;AC4VloY;;AD5V+qY;EAAmC,sCAAA;EAAsC,6CAAA;EAA6C,qDAAA;ACkWryY;;ADlW01Y;EAAoB,uCAAA;EAAuC,mCAAA;EAAmC,+CAAA;EAA+C,yDAAA;EAAyD,uDAAA;EAAuD,+DAAA;EAA+D,6CAAA;EAA6C,iEAAA;EAAiE,yDAAA;AC8WpwZ;;AD9W6zZ;EAAsC,kBAAA;EAAkB,eAAA;ACmXr3Z;;ADnXo4Z;EAAmC,4DAAA;EAAyD,eAAA;EAAe,gBAAA;EAAgB,iBAAA;EAAiB,iBAAA;EAAiB,sBAAA;EAAsB,eAAA;EAAe,qBAAA;AC8Xtka;;AD9X2la;EAAwC,kBAAA;ACkYnoa;;ADlYqpa;EAAwC,gBAAA;EAAgB,kBAAA;ACuY7sa;;ADvY+ta;EAAwC,gBAAA;EAAgB,kBAAA;EAAkB,eAAA;AC6Yzya;;AD7Ywza;EAAwC,gBAAA;EAAgB,kBAAA;EAAkB,eAAA;ACmZl4a;;ADnZi5a;EAAwC,gBAAA;EAAgB,kBAAA;EAAkB,eAAA;ACyZ39a;;ADzZ0+a;EAAwC,gBAAA;EAAgB,kBAAA;EAAkB,eAAA;AC+Zpjb;;AD/Zmkb;EAAwC,gBAAA;EAAgB,kBAAA;EAAkB,eAAA;ACqa7ob;;ADra4pb;EAAwC,gBAAA;EAAgB,kBAAA;EAAkB,eAAA;AC2atub;;AD3aqvb;EAAqC,4DAAA;EAAyD,eAAA;EAAe,gBAAA;EAAgB,iBAAA;EAAiB,iBAAA;EAAiB,sBAAA;EAAsB,eAAA;EAAe,qBAAA;ACsbz7b;;ADtb88b;EAAM,qCAAA;EAAsC,+CAAA;EAAgD,qCAAA;EAAsC,iCAAA;EAAkC,iCAAA;EAAkC,iCAAA;EAAkC,kCAAA;EAAmC,qCAAA;EAAsC,+BAAA;EAAgC,+BAAA;EAAgC,+BAAA;EAAgC,sCAAA;EAAuC,sCAAA;EAAuC,gCAAA;EAAiC,4CAAA;EAA6C,4CAAA;EAA6C,sCAAA;EAAuC,6CAAA;EAA8C,6CAAA;EAA8C,uCAAA;EAAwC,6CAAA;EAA8C,6CAAA;EAA8C,uCAAA;EAAwC,0CAAA;EAA2C,0CAAA;EAA2C,oCAAA;EAAqC,qDAAA;EAAsD,oCAAA;EAAqC,oCAAA;EAAqC,8BAAA;EAA+B,yDAAA;EAA0D,2DAAA;EAA4D,qDAAA;EAAsD,qDAAA;EAAsD,6CAAA;EAA8C,2CAAA;EAA4C,qCAAA;EAAsC,qCAAA;EAAsC,qCAAA;EAAsC,mCAAA;EAAoC,8BAAA;ACkenkf;;ADlekmf;EAAoB,qCAAA;EAAsC,+CAAA;EAAgD,qCAAA;EAAsC,iCAAA;EAAkC,iCAAA;EAAkC,iCAAA;EAAkC,kCAAA;EAAmC,qCAAA;EAAsC,+BAAA;EAAgC,+BAAA;EAAgC,+BAAA;EAAgC,sCAAA;EAAuC,sCAAA;EAAuC,gCAAA;EAAiC,4CAAA;EAA6C,4CAAA;EAA6C,sCAAA;EAAuC,6CAAA;EAA8C,6CAAA;EAA8C,uCAAA;EAAwC,6CAAA;EAA8C,6CAAA;EAA8C,uCAAA;EAAwC,0CAAA;EAA2C,0CAAA;EAA2C,oCAAA;EAAqC,qDAAA;EAAsD,oCAAA;EAAqC,oCAAA;EAAqC,8BAAA;EAA+B,yDAAA;EAA0D,2DAAA;EAA4D,qDAAA;EAAsD,qDAAA;EAAsD,6CAAA;EAA8C,2CAAA;EAA4C,qCAAA;EAAsC,qCAAA;EAAsC,qCAAA;EAAsC,mCAAA;EAAoC,8BAAA;AC8gBruiB;;AD9gBowiB;EAAmB,qCAAA;EAAsC,qDAAA;EAAsD,qCAAA;EAAsC,iCAAA;EAAkC,iCAAA;EAAkC,iCAAA;EAAkC,kCAAA;EAAmC,qCAAA;EAAsC,+BAAA;EAAgC,+BAAA;EAAgC,+BAAA;EAAgC,sCAAA;EAAuC,sCAAA;EAAuC,gCAAA;EAAiC,4CAAA;EAA6C,4CAAA;EAA6C,sCAAA;EAAuC,6CAAA;EAA8C,6CAAA;EAA8C,uCAAA;EAAwC,6CAAA;EAA8C,6CAAA;EAA8C,uCAAA;EAAwC,0CAAA;EAA2C,0CAAA;EAA2C,oCAAA;EAAqC,sDAAA;EAAuD,oCAAA;EAAqC,oCAAA;EAAqC,8BAAA;EAA+B,sDAAA;EAAuD,qDAAA;EAAsD,2DAAA;EAA4D,2DAAA;EAA4D,mDAAA;EAAoD,2CAAA;EAA4C,qCAAA;EAAsC,qCAAA;EAAsC,qCAAA;EAAsC,mCAAA;EAAoC,8BAAA;AC0jBt5lB;;AD1jBq7lB;EAAM,uFAAA;EAAwF,4EAAA;EAA6E,+BAAA;EAAgC,8BAAA;EAA+B,+BAAA;EAAgC,2BAAA;EAA4B,+BAAA;EAAgC,8BAAA;EAA+B,+BAAA;EAAgC,2BAAA;EAA4B,6BAAA;EAA8B,2BAAA;EAA4B,6BAAA;EAA8B,2BAAA;EAA4B,gCAAA;EAAiC,iCAAA;EAAkC,iCAAA;EAAkC,+BAAA;EAAgC,8CAAA;EAA+C,0DAAA;EAA2D,0DAAA;EAA2D,wDAAA;EAAyD,4DAAA;EAA6D,4DAAA;EAA6D,4DAAA;EAA6D,wEAAA;EAAyE,oEAAA;EAAqE,uFAAA;EAAwF,gDAAA;EAAiD,gDAAA;EAAiD,gDAAA;EAAiD,4DAAA;EAA6D,sDAAA;EAAuD,oDAAA;EAAqD,oDAAA;EAAqD,oDAAA;EAAqD,4DAAA;EAA6D,mDAAA;EAAoD,+DAAA;EAAgE,+DAAA;EAAgE,yDAAA;EAA0D,qEAAA;EAAsE,qEAAA;EAAsE,yDAAA;EAA0D,qEAAA;EAAsE,qEAAA;EAAsE,uDAAA;EAAwD,mEAAA;EAAoE,mEAAA;EAAoE,kDAAA;EAAmD,6CAAA;EAA8C,6DAAA;EAA8D,yDAAA;EAA0D,yDAAA;EAA0D,6DAAA;EAA8D,+DAAA;EAAgE,yDAAA;EAA0D,2DAAA;EAA4D,2DAAA;EAA4D,mFAAA;EAAoF,mFAAA;EAAoF,6EAAA;EAA8E,6EAAA;EAA8E,6EAAA;EAA8E,6EAAA;EAA8E,+EAAA;EAAgF,qDAAA;EAAsD,kDAAA;EAAmD,kDAAA;EAAmD,uDAAA;EAAwD,kDAAA;EAAmD,kDAAA;EAAmD,kDAAA;EAAmD,mDAAA;EAAoD,oDAAA;EAAqD,+CAAA;EAAgD,8CAAA;EAA+C,iDAAA;EAAkD,8CAAA;EAA+C,qDAAA;EAAsD,gDAAA;EAAiD,sDAAA;EAAuD,iDAAA;EAAkD,iDAAA;EAAkD,kDAAA;EAAmD,mDAAA;EAAoD,0DAAA;EAA2D,yDAAA;EAA0D,yDAAA;EAA0D,0DAAA;EAA2D,iEAAA;EAAkE,4DAAA;EAA6D,4DAAA;EAA6D,4DAAA;EAA6D,mEAAA;EAAoE,oEAAA;EAAqE,iEAAA;EAAkE,6DAAA;EAA8D,iFAAA;EAAkF,+EAAA;EAAgF,+EAAA;EAAgF,qEAAA;EAAsE,2FAAA;EAA4F,iFAAA;EAAkF,yFAAA;EAA0F,+EAAA;EAAgF,mFAAA;EAAoF,iFAAA;EAAkF,uDAAA;EAAwD,sDAAA;EAAuD,sDAAA;EAAuD,sDAAA;EAAuD,mDAAA;EAAoD,sDAAA;EAAuD,sDAAA;EAAuD,6FAAA;EAA8F,iGAAA;EAAkG,+FAAA;EAAgG,2FAAA;EAA4F,6FAAA;EAA8F,iFAAA;EAAkF,gFAAA;EAAiF,gFAAA;EAAiF,8EAAA;EAA+E,+DAAA;EAAgE,mEAAA;EAAoE,mEAAA;EAAoE,qEAAA;EAAsE,iEAAA;EAAkE,+DAAA;EAAgE,qEAAA;EAAsE,iEAAA;EAAkE,8DAAA;EAA+D,gFAAA;EAAiF,qEAAA;EAAsE,6FAAA;EAA8F,+FAAA;EAAgG,6FAAA;EAA8F,uDAAA;EAAwD,gEAAA;EAAiE,+BAAA;EAAgC,gCAAA;EAAiC,mCAAA;EAAoC,kCAAA;EAAkC,mCAAA;EAAmC,kCAAA;EAAkC,uCAAA;ACgtB5i3B;;ADhtBml3B;EAAoC;IAAmB,qCAAA;IAAsC,qDAAA;IAAsD,qCAAA;IAAsC,iCAAA;IAAkC,iCAAA;IAAkC,iCAAA;IAAkC,kCAAA;IAAmC,qCAAA;IAAsC,+BAAA;IAAgC,+BAAA;IAAgC,+BAAA;IAAgC,sCAAA;IAAuC,sCAAA;IAAuC,gCAAA;IAAiC,4CAAA;IAA6C,4CAAA;IAA6C,sCAAA;IAAuC,6CAAA;IAA8C,6CAAA;IAA8C,uCAAA;IAAwC,6CAAA;IAA8C,6CAAA;IAA8C,uCAAA;IAAwC,0CAAA;IAA2C,0CAAA;IAA2C,oCAAA;IAAqC,sDAAA;IAAuD,oCAAA;IAAqC,oCAAA;IAAqC,8BAAA;IAA+B,sDAAA;IAAuD,qDAAA;IAAsD,2DAAA;IAA4D,2DAAA;IAA4D,mDAAA;IAAoD,2CAAA;IAA4C,qCAAA;IAAsC,qCAAA;IAAsC,qCAAA;IAAsC,mCAAA;IAAoC,8BAAA;EC6vBvw6B;AACF;AD9vByy6B;EAAqC;IAAmB,qCAAA;IAAsC,+CAAA;IAAgD,qCAAA;IAAsC,iCAAA;IAAkC,iCAAA;IAAkC,iCAAA;IAAkC,kCAAA;IAAmC,qCAAA;IAAsC,+BAAA;IAAgC,+BAAA;IAAgC,+BAAA;IAAgC,sCAAA;IAAuC,sCAAA;IAAuC,gCAAA;IAAiC,4CAAA;IAA6C,4CAAA;IAA6C,sCAAA;IAAuC,6CAAA;IAA8C,6CAAA;IAA8C,uCAAA;IAAwC,6CAAA;IAA8C,6CAAA;IAA8C,uCAAA;IAAwC,0CAAA;IAA2C,0CAAA;IAA2C,oCAAA;IAAqC,qDAAA;IAAsD,oCAAA;IAAqC,oCAAA;IAAqC,8BAAA;IAA+B,yDAAA;IAA0D,2DAAA;IAA4D,qDAAA;IAAsD,qDAAA;IAAsD,6CAAA;IAA8C,2CAAA;IAA4C,qCAAA;IAAsC,qCAAA;IAAsC,qCAAA;IAAsC,mCAAA;IAAoC,8BAAA;EC0yB989B;AACF;AD3yBg/9B;EAAwC;IAAM,qCAAA;EC+yB5h+B;AACF;ADhzBqk+B;EAAc;IAAG,UAAA;ECozBpl+B;EDpzB8l+B;IAAG,UAAA;ECuzBjm+B;AACF;ADxzB8m+B;EAAmB;IAAG,UAAA;IAAU,kCAAA;EC6zB5o+B;ED7zB4q+B;IAAG,UAAA;IAAU,wBAAA;ECi0Bzr+B;AACF;ADl0Bot+B;EAAiB;IAAG,UAAA;IAAU,iCAAA;ECu0Bhv+B;EDv0B+w+B;IAAG,UAAA;IAAU,wBAAA;EC20B5x+B;AACF;AD50Buz+B;EAAoB;IAAG,UAAA;IAAU,kCAAA;ECi1Bt1+B;EDj1Bs3+B;IAAG,UAAA;IAAU,wBAAA;ECq1Bn4+B;AACF;ADt1B85+B;EAAmB;IAAG,UAAA;IAAU,iCAAA;EC21B57+B;ED31B29+B;IAAG,UAAA;IAAU,wBAAA;EC+1Bx++B;AACF;ADh2Bmg/B;EAAoB;IAAG,UAAA;IAAU,iCAAA;ECq2Bli/B;EDr2B+j/B;IAAG,UAAA;IAAU,oBAAA;ECy2B5k/B;AACF;AD12Bmm/B;EAAiB,UAAA;EAAU,yBAAA;EAAyB,mDAAA;AC+2Bvp/B;;AD/2B0s/B;EAAqB,kBAAA;ACm3B/t/B;;ADn3Biv/B;EAA0B,uBAAA;ACu3B3w/B;;ADv3Bky/B;EAAwB,qBAAA;AC23B1z/B;;AD33B+0/B;EAA2B,wBAAA;AC+3B12/B;;AD/3Bk4/B;EAA0B,uBAAA;ACm4B55/B;;ADn4Bm7/B;EAA2B,wBAAA;ACu4B98/B;;ADv4Bs+/B;EAAuG,kBAAA;EAAkB,gBAAA;AC44B/lgC;;AD54B+mgC;EAAgC,WAAA;EAAW,kBAAA;EAAkB,gBAAA;EAAgB,uBAAA;EAAuB,qBAAA;EAAqB,+BAAA;EAA+B,sBAAA;EAAsB,iBAAA;EAAiB,oBAAA;EAAoB,wCAAA;EAAwC,mDAAA;AC05B12gC;;AD15B65gC;EAAwB,kFAAA;EAAmF,mGAAA;EAAoG,6HAAA;ACg6B5mhC","sourcesContent":[":not([calcite-hydrated]):is(calcite-accordion, calcite-accordion-item, calcite-action, calcite-action-bar, calcite-action-group, calcite-action-menu, calcite-action-pad, calcite-alert, calcite-autocomplete, calcite-autocomplete-item, calcite-autocomplete-item-group, calcite-avatar, calcite-block, calcite-block-group, calcite-block-section, calcite-button, calcite-card, calcite-card-group, calcite-carousel, calcite-carousel-item, calcite-checkbox, calcite-chip, calcite-chip-group, calcite-color-picker, calcite-color-picker-hex-input, calcite-color-picker-swatch, calcite-combobox, calcite-combobox-item, calcite-combobox-item-group, calcite-date-picker, calcite-date-picker-day, calcite-date-picker-month, calcite-date-picker-month-header, calcite-dialog, calcite-dropdown, calcite-dropdown-group, calcite-dropdown-item, calcite-fab, calcite-filter, calcite-flow, calcite-flow-item, calcite-graph, calcite-handle, calcite-icon, calcite-inline-editable, calcite-input, calcite-input-date-picker, calcite-input-message, calcite-input-number, calcite-input-text, calcite-input-time-picker, calcite-input-time-zone, calcite-label, calcite-link, calcite-list, calcite-list-item, calcite-list-item-group, calcite-loader, calcite-menu, calcite-menu-item, calcite-meter, calcite-modal, calcite-navigation, calcite-navigation-logo, calcite-navigation-user, calcite-notice, calcite-option, calcite-option-group, calcite-pagination, calcite-panel, calcite-popover, calcite-progress, calcite-radio-button, calcite-radio-button-group, calcite-rating, calcite-scrim, calcite-segmented-control, calcite-segmented-control-item, calcite-select, calcite-sheet, calcite-shell, calcite-shell-center-row, calcite-shell-panel, calcite-slider, calcite-sort-handle, calcite-sortable-list, calcite-split-button, calcite-stack, calcite-stepper, calcite-stepper-item, calcite-switch, calcite-tab, calcite-tab-nav, calcite-tab-title, calcite-table, calcite-table-cell, calcite-table-header, calcite-table-row, calcite-tabs, calcite-text-area, calcite-tile, calcite-tile-group, calcite-tile-select, calcite-tile-select-group, calcite-time-picker, calcite-tip, calcite-tip-group, calcite-tip-manager, calcite-tooltip, calcite-tree, calcite-tree-item) {\n  visibility: hidden;\n}\n\n:root {\n  --calcite-z-index-tooltip: 901;\n  --calcite-z-index-popup: 900;\n  --calcite-z-index-modal: 800;\n  --calcite-z-index-overlay: 700;\n  --calcite-z-index-dropdown: 600;\n  --calcite-z-index-toast: 500;\n  --calcite-z-index-header: 400;\n  --calcite-z-index-sticky: 300;\n  --calcite-z-index: 1;\n  --calcite-z-index-deep: -999999;\n  --calcite-spacing-xxxl: 2rem;\n  --calcite-spacing-xxl: 1.5rem;\n  --calcite-spacing-xl: 1.25rem;\n  --calcite-spacing-lg: 1rem;\n  --calcite-spacing-md-plus: .875rem;\n  --calcite-spacing-md: .75rem;\n  --calcite-spacing-sm-plus: .625rem;\n  --calcite-spacing-sm: .5rem;\n  --calcite-spacing-xs: .375rem;\n  --calcite-spacing-xxs: .25rem;\n  --calcite-spacing-base: 2px;\n  --calcite-spacing-px: 1px;\n  --calcite-spacing-none: 0;\n  --calcite-spacing-fixed-xxxl: 32px;\n  --calcite-spacing-fixed-xxl: 20px;\n  --calcite-spacing-fixed-xl: 16px;\n  --calcite-spacing-fixed-lg: 14px;\n  --calcite-spacing-fixed-md: 12px;\n  --calcite-spacing-fixed-sm: 8px;\n  --calcite-spacing-fixed-xs: 6px;\n  --calcite-spacing-fixed-xxs: 4px;\n  --calcite-size-xxxl: 6rem;\n  --calcite-size-xxl: 4rem;\n  --calcite-size-xl: 3rem;\n  --calcite-size-lg: 2.75rem;\n  --calcite-size-md: 2rem;\n  --calcite-size-sm: 1.5rem;\n  --calcite-size-xs: 1rem;\n  --calcite-size-xxs: .875rem;\n  --calcite-size-xxxs: .75rem;\n  --calcite-size-px: 1px;\n  --calcite-size-fixed-xxxl: 32px;\n  --calcite-size-fixed-xxl: 24px;\n  --calcite-size-fixed-xl: 20px;\n  --calcite-size-fixed-lg: 16px;\n  --calcite-size-fixed-md-plus: 14px;\n  --calcite-size-fixed-md: 12px;\n  --calcite-size-fixed-sm-plus: 10px;\n  --calcite-size-fixed-sm: 8px;\n  --calcite-size-fixed-xs: 6px;\n  --calcite-size-fixed-xxs: 4px;\n  --calcite-size-fixed-xxxs: 2px;\n  --calcite-opacity-disabled: .5;\n  --calcite-opacity-full: 1;\n  --calcite-opacity-dark: .85;\n  --calcite-opacity-half: .5;\n  --calcite-opacity-light: .4;\n  --calcite-font-text-case-capitalize: capitalize;\n  --calcite-font-text-case-lowercase: lowercase;\n  --calcite-font-text-case-uppercase: uppercase;\n  --calcite-font-text-case-none: none;\n  --calcite-font-text-decoration-underline: underline;\n  --calcite-font-text-decoration-none: none;\n  --calcite-font-paragraph-spacing-normal: 4px;\n  --calcite-font-letter-spacing-wide: .4;\n  --calcite-font-letter-spacing-normal: 0;\n  --calcite-font-letter-spacing-tight: -.4;\n  --calcite-font-line-height-relative-loose: 2;\n  --calcite-font-line-height-relative-relaxed: 1.625;\n  --calcite-font-line-height-relative-normal: 1.5;\n  --calcite-font-line-height-relative-snug: 1.375;\n  --calcite-font-line-height-relative-tight: 1.25;\n  --calcite-font-line-height-relative: auto;\n  --calcite-font-line-height-fixed-xl: 24px;\n  --calcite-font-line-height-fixed-lg: 20px;\n  --calcite-font-line-height-fixed-base: 16px;\n  --calcite-font-line-height-fixed-sm: 12px;\n  --calcite-font-style-emphasis: italic;\n  --calcite-font-size-xxl: 24px;\n  --calcite-font-size-xl: 20px;\n  --calcite-font-size-lg: 18px;\n  --calcite-font-size-md: 16px;\n  --calcite-font-size: 14px;\n  --calcite-font-size-sm: 12px;\n  --calcite-font-size-xs: 10px;\n  --calcite-font-weight-bold: 600;\n  --calcite-font-weight-semibold: 600;\n  --calcite-font-weight-medium: 500;\n  --calcite-font-weight-regular: 400;\n  --calcite-font-weight-normal: 400;\n  --calcite-font-weight-light: 300;\n  --calcite-font-family-code: Monaco, Consolas, \"Andale Mono\", \"Lucida Console\", monospace;\n  --calcite-font-family: \"Avenir Next\", Avenir, \"Helvetica Neue\", sans-serif;\n  --calcite-corner-radius-pill: 100%;\n  --calcite-corner-radius-round: 4px;\n  --calcite-corner-radius-sharp: 0;\n  --calcite-container-size-content-fixed: 1440px;\n  --calcite-container-size-content-fluid: 100%;\n  --calcite-container-size-gutter: 16px;\n  --calcite-container-size-margin: 24px;\n  --calcite-color-background-none: rgba(255, 255, 255, 0);\n  --calcite-border-width-lg: 4px;\n  --calcite-border-width-md: 2px;\n  --calcite-border-width-sm: 1px;\n  --calcite-border-width-none: 0;\n  --calcite-shadow-md: 0 4px 20px 0 rgba(0, 0, 0, .08), 0 12px 30px rgba(0, 0, 0, .1);\n  --calcite-shadow-sm: 0 2px 8px 0 rgba(0, 0, 0, .04), 0 4px 16px 0 rgba(0, 0, 0, .08);\n  --calcite-shadow-none: 0 0 0 0 rgba(0, 0, 0, 0);\n  --calcite-corner-radius: var(--calcite-corner-radius-sharp);\n}\n\n.calcite-typography-hierarchy-overline {\n  line-height: var(--calcite-font-line-height-fixed-sm);\n  text-case: var(--calcite-font-text-case-uppercase);\n  font-weight: var(--calcite-font-weight-bold);\n}\n\n.calcite-typography-wrap-bold-minus-1 {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-relative-snug);\n}\n\n.calcite-typography-wrap-bold-minus-2 {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-sm);\n}\n\n.calcite-typography-wrap-bold-3 {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-xxl);\n}\n\n.calcite-typography-wrap-bold-2 {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-xl);\n}\n\n.calcite-typography-wrap-bold-1 {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-lg);\n}\n\n.calcite-typography-wrap-bold-0 {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-md);\n}\n\n.calcite-typography-wrap-medium-minus-1 {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-relative-snug);\n}\n\n.calcite-typography-wrap-medium-minus-2 {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-sm);\n}\n\n.calcite-typography-wrap-medium-3 {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-xxl);\n}\n\n.calcite-typography-wrap-medium-2 {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-xl);\n}\n\n.calcite-typography-wrap-medium-1 {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-lg);\n}\n\n.calcite-typography-wrap-medium-0 {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-md);\n}\n\n.calcite-typography-wrap-regular-minus-1 {\n  line-height: var(--calcite-font-line-height-relative-snug);\n}\n\n.calcite-typography-wrap-regular-minus-2 {\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-sm);\n}\n\n.calcite-typography-wrap-regular-3 {\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-xxl);\n}\n\n.calcite-typography-wrap-regular-2 {\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-xl);\n}\n\n.calcite-typography-wrap-regular-1 {\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-lg);\n}\n\n.calcite-typography-wrap-regular-0 {\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-md);\n}\n\n.calcite-typography-wrap-light-minus-1 {\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-relative-snug);\n}\n\n.calcite-typography-wrap-light-minus-2 {\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-sm);\n}\n\n.calcite-typography-wrap-light-3 {\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-relative-tight);\n  font-size: var(--calcite-font-size-xxl);\n}\n\n.calcite-typography-wrap-light-2 {\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-xl);\n}\n\n.calcite-typography-wrap-light-1 {\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-lg);\n}\n\n.calcite-typography-wrap-light-0 {\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-md);\n}\n\n.calcite-typography-bold-1h {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-fixed-xl);\n  font-size: var(--calcite-font-size-lg);\n}\n\n.calcite-typography-bold-0h {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-fixed-lg);\n  font-size: var(--calcite-font-size-md);\n}\n\n.calcite-typography-bold-minus-1h {\n  font-weight: var(--calcite-font-weight-semibold);\n}\n\n.calcite-typography-bold-minus-2h {\n  font-weight: var(--calcite-font-weight-semibold);\n  font-size: var(--calcite-font-size-sm);\n}\n\n.calcite-typography-bold-minus-3h {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-fixed-sm);\n  font-size: var(--calcite-font-size-xs);\n}\n\n.calcite-typography-medium-1h {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-fixed-xl);\n  font-size: var(--calcite-font-size-lg);\n}\n\n.calcite-typography-medium-0h {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-fixed-lg);\n  font-size: var(--calcite-font-size-md);\n}\n\n.calcite-typography-medium-minus-1h {\n  font-weight: var(--calcite-font-weight-medium);\n}\n\n.calcite-typography-medium-minus-2h {\n  font-weight: var(--calcite-font-weight-medium);\n  font-size: var(--calcite-font-size-sm);\n}\n\n.calcite-typography-medium-minus-3h {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-fixed-sm);\n  font-size: var(--calcite-font-size-xs);\n}\n\n.calcite-typography-regular-1h {\n  line-height: var(--calcite-font-line-height-fixed-xl);\n  font-size: var(--calcite-font-size-lg);\n}\n\n.calcite-typography-regular-0h {\n  line-height: var(--calcite-font-line-height-fixed-lg);\n  font-size: var(--calcite-font-size-md);\n}\n\n.calcite-typography-regular-minus-2h {\n  font-size: var(--calcite-font-size-sm);\n}\n\n.calcite-typography-regular-minus-3h {\n  line-height: var(--calcite-font-line-height-fixed-sm);\n  font-size: var(--calcite-font-size-xs);\n}\n\n.calcite-typography-light-1h {\n  font-size: var(--calcite-font-size-lg);\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-fixed-xl);\n}\n\n.calcite-typography-light-0h {\n  font-size: var(--calcite-font-size-md);\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-fixed-lg);\n}\n\n.calcite-typography-light-minus-1h {\n  font-weight: var(--calcite-font-weight-light);\n}\n\n.calcite-typography-light-minus-2h {\n  font-size: var(--calcite-font-size-sm);\n  font-weight: var(--calcite-font-weight-light);\n}\n\n.calcite-typography-light-minus-3h {\n  font-size: var(--calcite-font-size-xs);\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-fixed-sm);\n}\n\n.calcite-typography {\n  font-family: var(--calcite-font-family);\n  font-size: var(--calcite-font-size);\n  font-weight: var(--calcite-font-weight-regular);\n  letter-spacing: var(--calcite-font-letter-spacing-normal);\n  line-height: var(--calcite-font-line-height-fixed-base);\n  paragraph-spacing: var(--calcite-font-paragraph-spacing-normal);\n  text-case: var(--calcite-font-text-case-none);\n  -webkit-text-decoration: var(--calcite-font-text-decoration-none);\n  text-decoration: var(--calcite-font-text-decoration-none);\n}\n\n.calcite-typography-hierarchy-caption {\n  line-height: 1.375;\n  font-size: 12px;\n}\n\n.calcite-typography-hierarchy-body {\n  font-family: Avenir Next, Avenir, Helvetica Neue, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 16px;\n  paragraph-spacing: 4px;\n  text-case: none;\n  text-decoration: none;\n}\n\n.calcite-typography-hierarchy-body-snug {\n  line-height: 1.375;\n}\n\n.calcite-typography-hierarchy-heading-5 {\n  font-weight: 500;\n  line-height: 1.375;\n}\n\n.calcite-typography-hierarchy-heading-4 {\n  font-weight: 500;\n  line-height: 1.375;\n  font-size: 16px;\n}\n\n.calcite-typography-hierarchy-heading-3 {\n  font-weight: 500;\n  line-height: 1.375;\n  font-size: 18px;\n}\n\n.calcite-typography-hierarchy-heading-2 {\n  font-weight: 500;\n  line-height: 1.375;\n  font-size: 20px;\n}\n\n.calcite-typography-hierarchy-heading-1 {\n  font-weight: 500;\n  line-height: 1.375;\n  font-size: 24px;\n}\n\n.calcite-typography-hierarchy-display-2 {\n  font-weight: 600;\n  line-height: 1.375;\n  font-size: 20px;\n}\n\n.calcite-typography-hierarchy-display-1 {\n  font-weight: 600;\n  line-height: 1.375;\n  font-size: 24px;\n}\n\n.calcite-typography-regular-minus-1h {\n  font-family: Avenir Next, Avenir, Helvetica Neue, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 16px;\n  paragraph-spacing: 4px;\n  text-case: none;\n  text-decoration: none;\n}\n\n:root {\n  --calcite-color-border-white: #ffffff;\n  --calcite-color-border-ghost: rgba(0, 0, 0, .3);\n  --calcite-color-border-input: #949494;\n  --calcite-color-border-3: #dfdfdf;\n  --calcite-color-border-2: #d4d4d4;\n  --calcite-color-border-1: #cacaca;\n  --calcite-color-text-link: #00619b;\n  --calcite-color-text-inverse: #ffffff;\n  --calcite-color-text-3: #6a6a6a;\n  --calcite-color-text-2: #4a4a4a;\n  --calcite-color-text-1: #151515;\n  --calcite-color-inverse-press: #202020;\n  --calcite-color-inverse-hover: #2b2b2b;\n  --calcite-color-inverse: #353535;\n  --calcite-color-status-danger-press: #7c1d13;\n  --calcite-color-status-danger-hover: #a82b1e;\n  --calcite-color-status-danger: #d83020;\n  --calcite-color-status-warning-press: #bfa200;\n  --calcite-color-status-warning-hover: #d9bc00;\n  --calcite-color-status-warning: #edd317;\n  --calcite-color-status-success-press: #1a6324;\n  --calcite-color-status-success-hover: #288835;\n  --calcite-color-status-success: #35ac46;\n  --calcite-color-status-info-press: #00304d;\n  --calcite-color-status-info-hover: #004874;\n  --calcite-color-status-info: #00619b;\n  --calcite-color-brand-underline: rgba(0, 97, 155, .4);\n  --calcite-color-brand-press: #004874;\n  --calcite-color-brand-hover: #00619b;\n  --calcite-color-brand: #007ac2;\n  --calcite-color-transparent-tint: rgba(255, 255, 255, .8);\n  --calcite-color-transparent-scrim: rgba(255, 255, 255, .85);\n  --calcite-color-transparent-press: rgba(0, 0, 0, .08);\n  --calcite-color-transparent-hover: rgba(0, 0, 0, .04);\n  --calcite-color-transparent: rgba(0, 0, 0, 0);\n  --calcite-color-foreground-current: #c7eaff;\n  --calcite-color-foreground-3: #eaeaea;\n  --calcite-color-foreground-2: #f3f3f3;\n  --calcite-color-foreground-1: #ffffff;\n  --calcite-color-background: #f8f8f8;\n  --calcite-color-focus: #007ac2;\n}\n\n.calcite-mode-light {\n  --calcite-color-border-white: #ffffff;\n  --calcite-color-border-ghost: rgba(0, 0, 0, .3);\n  --calcite-color-border-input: #949494;\n  --calcite-color-border-3: #dfdfdf;\n  --calcite-color-border-2: #d4d4d4;\n  --calcite-color-border-1: #cacaca;\n  --calcite-color-text-link: #00619b;\n  --calcite-color-text-inverse: #ffffff;\n  --calcite-color-text-3: #6a6a6a;\n  --calcite-color-text-2: #4a4a4a;\n  --calcite-color-text-1: #151515;\n  --calcite-color-inverse-press: #202020;\n  --calcite-color-inverse-hover: #2b2b2b;\n  --calcite-color-inverse: #353535;\n  --calcite-color-status-danger-press: #7c1d13;\n  --calcite-color-status-danger-hover: #a82b1e;\n  --calcite-color-status-danger: #d83020;\n  --calcite-color-status-warning-press: #bfa200;\n  --calcite-color-status-warning-hover: #d9bc00;\n  --calcite-color-status-warning: #edd317;\n  --calcite-color-status-success-press: #1a6324;\n  --calcite-color-status-success-hover: #288835;\n  --calcite-color-status-success: #35ac46;\n  --calcite-color-status-info-press: #00304d;\n  --calcite-color-status-info-hover: #004874;\n  --calcite-color-status-info: #00619b;\n  --calcite-color-brand-underline: rgba(0, 97, 155, .4);\n  --calcite-color-brand-press: #004874;\n  --calcite-color-brand-hover: #00619b;\n  --calcite-color-brand: #007ac2;\n  --calcite-color-transparent-tint: rgba(255, 255, 255, .8);\n  --calcite-color-transparent-scrim: rgba(255, 255, 255, .85);\n  --calcite-color-transparent-press: rgba(0, 0, 0, .08);\n  --calcite-color-transparent-hover: rgba(0, 0, 0, .04);\n  --calcite-color-transparent: rgba(0, 0, 0, 0);\n  --calcite-color-foreground-current: #c7eaff;\n  --calcite-color-foreground-3: #eaeaea;\n  --calcite-color-foreground-2: #f3f3f3;\n  --calcite-color-foreground-1: #ffffff;\n  --calcite-color-background: #f8f8f8;\n  --calcite-color-focus: #007ac2;\n}\n\n.calcite-mode-dark {\n  --calcite-color-border-white: #f8f8f8;\n  --calcite-color-border-ghost: rgba(117, 117, 117, .3);\n  --calcite-color-border-input: #757575;\n  --calcite-color-border-3: #404040;\n  --calcite-color-border-2: #4a4a4a;\n  --calcite-color-border-1: #555555;\n  --calcite-color-text-link: #00a0ff;\n  --calcite-color-text-inverse: #151515;\n  --calcite-color-text-3: #9f9f9f;\n  --calcite-color-text-2: #bfbfbf;\n  --calcite-color-text-1: #ffffff;\n  --calcite-color-inverse-press: #f3f3f3;\n  --calcite-color-inverse-hover: #ffffff;\n  --calcite-color-inverse: #f8f8f8;\n  --calcite-color-status-danger-press: #d90012;\n  --calcite-color-status-danger-hover: #ff0015;\n  --calcite-color-status-danger: #fe583e;\n  --calcite-color-status-warning-press: #f5d000;\n  --calcite-color-status-warning-hover: #ffee33;\n  --calcite-color-status-warning: #ffc900;\n  --calcite-color-status-success-press: #00b81b;\n  --calcite-color-status-success-hover: #3bed52;\n  --calcite-color-status-success: #36da43;\n  --calcite-color-status-info-press: #009af2;\n  --calcite-color-status-info-hover: #3db8ff;\n  --calcite-color-status-info: #00a0ff;\n  --calcite-color-brand-underline: rgba(0, 160, 255, .4);\n  --calcite-color-brand-press: #00619b;\n  --calcite-color-brand-hover: #007ac2;\n  --calcite-color-brand: #009af2;\n  --calcite-color-transparent-tint: rgba(43, 43, 43, .8);\n  --calcite-color-transparent-scrim: rgba(0, 0, 0, .85);\n  --calcite-color-transparent-press: rgba(255, 255, 255, .08);\n  --calcite-color-transparent-hover: rgba(255, 255, 255, .04);\n  --calcite-color-transparent: rgba(255, 255, 255, 0);\n  --calcite-color-foreground-current: #214155;\n  --calcite-color-foreground-3: #151515;\n  --calcite-color-foreground-2: #202020;\n  --calcite-color-foreground-1: #2b2b2b;\n  --calcite-color-background: #353535;\n  --calcite-color-focus: #009af2;\n}\n\n:root {\n  --calcite-code-family: \"Consolas\", \"Andale Mono\", \"Lucida Console\", \"Monaco\", monospace;\n  --calcite-sans-family: \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n  --calcite-font-size--3: .625rem;\n  --calcite-font-size--2: .75rem;\n  --calcite-font-size--1: .875rem;\n  --calcite-font-size-0: 1rem;\n  --calcite-font-size-1: 1.125rem;\n  --calcite-font-size-2: 1.25rem;\n  --calcite-font-size-3: 1.625rem;\n  --calcite-font-size-4: 2rem;\n  --calcite-font-size-5: 2.5rem;\n  --calcite-font-size-6: 3rem;\n  --calcite-font-size-7: 3.5rem;\n  --calcite-font-size-8: 4rem;\n  --calcite-font-weight-light: 300;\n  --calcite-font-weight-normal: 400;\n  --calcite-font-weight-medium: 500;\n  --calcite-font-weight-bold: 600;\n  --calcite-ui-brand: var(--calcite-color-brand);\n  --calcite-ui-brand-hover: var(--calcite-color-brand-hover);\n  --calcite-ui-brand-press: var(--calcite-color-brand-press);\n  --calcite-ui-background: var(--calcite-color-background);\n  --calcite-ui-foreground-1: var(--calcite-color-foreground-1);\n  --calcite-ui-foreground-2: var(--calcite-color-foreground-2);\n  --calcite-ui-foreground-3: var(--calcite-color-foreground-3);\n  --calcite-ui-foreground-current: var(--calcite-color-foreground-current);\n  --calcite-ui-focus-offset-invert: var(--calcite-offset-invert-focus);\n  --calcite-semantic-ui-color-foreground-current: var(--calcite-color-foreground-current);\n  --calcite-ui-text-1: var(--calcite-color-text-1);\n  --calcite-ui-text-2: var(--calcite-color-text-2);\n  --calcite-ui-text-3: var(--calcite-color-text-3);\n  --calcite-ui-text-inverse: var(--calcite-color-text-inverse);\n  --calcite-ui-text-link: var(--calcite-color-text-link);\n  --calcite-ui-border-1: var(--calcite-color-border-1);\n  --calcite-ui-border-2: var(--calcite-color-border-2);\n  --calcite-ui-border-3: var(--calcite-color-border-3);\n  --calcite-ui-border-input: var(--calcite-color-border-input);\n  --calcite-ui-info: var(--calcite-color-status-info);\n  --calcite-ui-info-hover: var(--calcite-color-status-info-hover);\n  --calcite-ui-info-press: var(--calcite-color-status-info-press);\n  --calcite-ui-success: var(--calcite-color-status-success);\n  --calcite-ui-success-hover: var(--calcite-color-status-success-hover);\n  --calcite-ui-success-press: var(--calcite-color-status-success-press);\n  --calcite-ui-warning: var(--calcite-color-status-warning);\n  --calcite-ui-warning-hover: var(--calcite-color-status-warning-hover);\n  --calcite-ui-warning-press: var(--calcite-color-status-warning-press);\n  --calcite-ui-danger: var(--calcite-color-status-danger);\n  --calcite-ui-danger-hover: var(--calcite-color-status-danger-hover);\n  --calcite-ui-danger-press: var(--calcite-color-status-danger-press);\n  --calcite-ui-inverse: var(--calcite-color-inverse);\n  --calcite-app-z-index: var(--calcite-z-index);\n  --calcite-app-z-index-tooltip: var(--calcite-z-index-tooltip);\n  --calcite-app-z-index-popup: var(--calcite-z-index-popup);\n  --calcite-app-z-index-modal: var(--calcite-z-index-modal);\n  --calcite-app-z-index-overlay: var(--calcite-z-index-overlay);\n  --calcite-app-z-index-dropdown: var(--calcite-z-index-dropdown);\n  --calcite-app-z-index-toast: var(--calcite-z-index-toast);\n  --calcite-app-z-index-header: var(--calcite-z-index-header);\n  --calcite-app-z-index-sticky: var(--calcite-z-index-sticky);\n  --calcite-app-breakpoint-content-fixed: var(--calcite-container-size-content-fixed);\n  --calcite-app-breakpoint-content-fluid: var(--calcite-container-size-content-fluid);\n  --calcite-app-breakpoint-width-lg: var(--calcite-container-size-width-lg-max);\n  --calcite-app-breakpoint-width-md: var(--calcite-container-size-width-md-max);\n  --calcite-app-breakpoint-width-sm: var(--calcite-container-size-width-sm-max);\n  --calcite-app-breakpoint-width-xs: var(--calcite-container-size-width-xs-max);\n  --calcite-app-breakpoint-width-xxs: var(--calcite-container-size-width-xxs-max);\n  --calcite-app-spacing-11: var(--calcite-spacing-xxxl);\n  --calcite-app-spacing-8: var(--calcite-spacing-xl);\n  --calcite-app-spacing-7: var(--calcite-spacing-lg);\n  --calcite-app-spacing-6: var(--calcite-spacing-md-plus);\n  --calcite-app-spacing-5: var(--calcite-spacing-md);\n  --calcite-app-spacing-3: var(--calcite-spacing-sm);\n  --calcite-app-spacing-2: var(--calcite-spacing-xs);\n  --calcite-app-spacing-1: var(--calcite-spacing-xxs);\n  --calcite-app-spacing-0: var(--calcite-spacing-base);\n  --calcite-app-sizing-11: var(--calcite-size-md);\n  --calcite-app-sizing-9: var(--calcite-size-sm);\n  --calcite-app-sizing-8: var(--calcite-spacing-xl);\n  --calcite-app-sizing-7: var(--calcite-size-xs);\n  --calcite-app-sizing-6: var(--calcite-size-xxxs-plus);\n  --calcite-app-sizing-5: var(--calcite-size-xxxs);\n  --calcite-app-sizing-4: var(--calcite-spacing-sm-plus);\n  --calcite-app-sizing-3: var(--calcite-spacing-sm);\n  --calcite-app-sizing-2: var(--calcite-spacing-xs);\n  --calcite-app-sizing-1: var(--calcite-spacing-xxs);\n  --calcite-app-sizing-0: var(--calcite-spacing-base);\n  --calcite-app-opacity-100: var(--calcite-app-opacity-full);\n  --calcite-app-opacity-85: var(--calcite-app-opacity-dark);\n  --calcite-app-opacity-50: var(--calcite-app-opacity-half);\n  --calcite-app-opacity-40: var(--calcite-app-opacity-light);\n  --calcite-app-border-width-none: var(--calcite-border-width-none);\n  --calcite-app-border-width-2: var(--calcite-border-width-lg);\n  --calcite-app-border-width-1: var(--calcite-border-width-md);\n  --calcite-app-border-width-0: var(--calcite-border-width-sm);\n  --calcite-app-border-radius-full: var(--calcite-corner-radius-pill);\n  --calcite-app-border-radius-none: var(--calcite-corner-radius-sharp);\n  --calcite-app-border-radius-1: var(--calcite-corner-radius-round);\n  --calcite-app-border-radius-0: var(--calcite-corner-radius-0);\n  --calcite-app-font-text-case-capitalize: var(--calcite-font-text-case-capitalize);\n  --calcite-app-font-text-case-lowercase: var(--calcite-font-text-case-lowercase);\n  --calcite-app-font-text-case-uppercase: var(--calcite-font-text-case-uppercase);\n  --calcite-app-font-text-case-none: var(--calcite-font-text-case-none);\n  --calcite-app-font-text-decoration-underline: var(--calcite-font-text-decoration-underline);\n  --calcite-app-font-text-decoration-none: var(--calcite-font-text-decoration-none);\n  --calcite-app-font-paragraph-spacing-normal: var(--calcite-font-paragraph-spacing-normal);\n  --calcite-app-font-letter-spacing-wide: var(--calcite-font-letter-spacing-wide);\n  --calcite-app-font-letter-spacing-normal: var(--calcite-font-letter-spacing-normal);\n  --calcite-app-font-letter-spacing-tight: var(--calcite-font-letter-spacing-tight);\n  --calcite-app-font-size-6: var(--calcite-font-size-xxl);\n  --calcite-app-font-size-5: var(--calcite-font-size-xl);\n  --calcite-app-font-size-4: var(--calcite-font-size-lg);\n  --calcite-app-font-size-3: var(--calcite-font-size-md);\n  --calcite-app-font-size-2: var(--calcite-font-size);\n  --calcite-app-font-size-1: var(--calcite-font-size-sm);\n  --calcite-app-font-size-0: var(--calcite-font-size-xs);\n  --calcite-app-font-line-height-relative-loose: var(--calcite-font-line-height-relative-loose);\n  --calcite-app-font-line-height-relative-relaxed: var(--calcite-font-line-height-relative-relaxed);\n  --calcite-app-font-line-height-relative-normal: var(--calcite-font-line-height-relative-normal);\n  --calcite-app-font-line-height-relative-snug: var(--calcite-font-line-height-relative-snug);\n  --calcite-app-font-line-height-relative-tight: var(--calcite-font-line-height-relative-tight);\n  --calcite-app-font-line-height-relative: var(--calcite-font-line-height-relative);\n  --calcite-app-font-line-height-fixed-3: var(--calcite-font-line-height-fixed-xl);\n  --calcite-app-font-line-height-fixed-2: var(--calcite-font-line-height-fixed-lg);\n  --calcite-app-font-line-height-fixed: var(--calcite-font-line-height-fixed-sm);\n  --calcite-app-font-weight-bold: var(--calcite-font-weight-bold);\n  --calcite-app-font-weight-demi: var(--calcite-font-weight-semibold);\n  --calcite-app-font-weight-medium: var(--calcite-font-weight-medium);\n  --calcite-app-font-weight-regular: var(--calcite-font-weight-regular);\n  --calcite-app-font-weight-light: var(--calcite-font-weight-light);\n  --calcite-app-font-family-code: var(--calcite-font-family-code);\n  --calcite-app-font-family-primary: var(--calcite-font-family-primary);\n  --calcite-floating-ui-transition: var(--calcite-animation-timing);\n  --calcite-floating-ui-z-index: var(--calcite-z-index-dropdown);\n  --calcite-animation-timing: calc(.15s * var(--calcite-internal-duration-factor));\n  --calcite-internal-duration-factor: var(--calcite-duration-factor, 1);\n  --calcite-internal-animation-timing-fast: calc(.1s * var(--calcite-internal-duration-factor));\n  --calcite-internal-animation-timing-medium: calc(.2s * var(--calcite-internal-duration-factor));\n  --calcite-internal-animation-timing-slow: calc(.3s * var(--calcite-internal-duration-factor));\n  --calcite-popover-z-index: var(--calcite-z-index-popup);\n  --calcite-border-radius: var(--calcite-border-radius-round, 4px);\n  --calcite-border-radius-base: 0;\n  --calcite-offset-invert-focus: 0;\n  --calcite-panel-width-multiplier: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: var(--calcite-font-family);\n}\n\n@media (prefers-color-scheme: dark) {\n  .calcite-mode-auto {\n    --calcite-color-border-white: #f8f8f8;\n    --calcite-color-border-ghost: rgba(117, 117, 117, .3);\n    --calcite-color-border-input: #757575;\n    --calcite-color-border-3: #404040;\n    --calcite-color-border-2: #4a4a4a;\n    --calcite-color-border-1: #555555;\n    --calcite-color-text-link: #00a0ff;\n    --calcite-color-text-inverse: #151515;\n    --calcite-color-text-3: #9f9f9f;\n    --calcite-color-text-2: #bfbfbf;\n    --calcite-color-text-1: #ffffff;\n    --calcite-color-inverse-press: #f3f3f3;\n    --calcite-color-inverse-hover: #ffffff;\n    --calcite-color-inverse: #f8f8f8;\n    --calcite-color-status-danger-press: #d90012;\n    --calcite-color-status-danger-hover: #ff0015;\n    --calcite-color-status-danger: #fe583e;\n    --calcite-color-status-warning-press: #f5d000;\n    --calcite-color-status-warning-hover: #ffee33;\n    --calcite-color-status-warning: #ffc900;\n    --calcite-color-status-success-press: #00b81b;\n    --calcite-color-status-success-hover: #3bed52;\n    --calcite-color-status-success: #36da43;\n    --calcite-color-status-info-press: #009af2;\n    --calcite-color-status-info-hover: #3db8ff;\n    --calcite-color-status-info: #00a0ff;\n    --calcite-color-brand-underline: rgba(0, 160, 255, .4);\n    --calcite-color-brand-press: #00619b;\n    --calcite-color-brand-hover: #007ac2;\n    --calcite-color-brand: #009af2;\n    --calcite-color-transparent-tint: rgba(43, 43, 43, .8);\n    --calcite-color-transparent-scrim: rgba(0, 0, 0, .85);\n    --calcite-color-transparent-press: rgba(255, 255, 255, .08);\n    --calcite-color-transparent-hover: rgba(255, 255, 255, .04);\n    --calcite-color-transparent: rgba(255, 255, 255, 0);\n    --calcite-color-foreground-current: #214155;\n    --calcite-color-foreground-3: #151515;\n    --calcite-color-foreground-2: #202020;\n    --calcite-color-foreground-1: #2b2b2b;\n    --calcite-color-background: #353535;\n    --calcite-color-focus: #009af2;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .calcite-mode-auto {\n    --calcite-color-border-white: #ffffff;\n    --calcite-color-border-ghost: rgba(0, 0, 0, .3);\n    --calcite-color-border-input: #949494;\n    --calcite-color-border-3: #dfdfdf;\n    --calcite-color-border-2: #d4d4d4;\n    --calcite-color-border-1: #cacaca;\n    --calcite-color-text-link: #00619b;\n    --calcite-color-text-inverse: #ffffff;\n    --calcite-color-text-3: #6a6a6a;\n    --calcite-color-text-2: #4a4a4a;\n    --calcite-color-text-1: #151515;\n    --calcite-color-inverse-press: #202020;\n    --calcite-color-inverse-hover: #2b2b2b;\n    --calcite-color-inverse: #353535;\n    --calcite-color-status-danger-press: #7c1d13;\n    --calcite-color-status-danger-hover: #a82b1e;\n    --calcite-color-status-danger: #d83020;\n    --calcite-color-status-warning-press: #bfa200;\n    --calcite-color-status-warning-hover: #d9bc00;\n    --calcite-color-status-warning: #edd317;\n    --calcite-color-status-success-press: #1a6324;\n    --calcite-color-status-success-hover: #288835;\n    --calcite-color-status-success: #35ac46;\n    --calcite-color-status-info-press: #00304d;\n    --calcite-color-status-info-hover: #004874;\n    --calcite-color-status-info: #00619b;\n    --calcite-color-brand-underline: rgba(0, 97, 155, .4);\n    --calcite-color-brand-press: #004874;\n    --calcite-color-brand-hover: #00619b;\n    --calcite-color-brand: #007ac2;\n    --calcite-color-transparent-tint: rgba(255, 255, 255, .8);\n    --calcite-color-transparent-scrim: rgba(255, 255, 255, .85);\n    --calcite-color-transparent-press: rgba(0, 0, 0, .08);\n    --calcite-color-transparent-hover: rgba(0, 0, 0, .04);\n    --calcite-color-transparent: rgba(0, 0, 0, 0);\n    --calcite-color-foreground-current: #c7eaff;\n    --calcite-color-foreground-3: #eaeaea;\n    --calcite-color-foreground-2: #f3f3f3;\n    --calcite-color-foreground-1: #ffffff;\n    --calcite-color-background: #f8f8f8;\n    --calcite-color-focus: #007ac2;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  :root {\n    --calcite-internal-duration-factor: 0;\n  }\n}\n@keyframes in {\n  0% {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes in-down {\n  0% {\n    opacity: 0;\n    transform: translate3D(0, -5px, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translateZ(0);\n  }\n}\n@keyframes in-up {\n  0% {\n    opacity: 0;\n    transform: translate3D(0, 5px, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translateZ(0);\n  }\n}\n@keyframes in-right {\n  0% {\n    opacity: 0;\n    transform: translate3D(-5px, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translateZ(0);\n  }\n}\n@keyframes in-left {\n  0% {\n    opacity: 0;\n    transform: translate3D(5px, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translateZ(0);\n  }\n}\n@keyframes in-scale {\n  0% {\n    opacity: 0;\n    transform: scale3D(0.95, 0.95, 1);\n  }\n  to {\n    opacity: 1;\n    transform: scaleZ(1);\n  }\n}\n.calcite-animate {\n  opacity: 0;\n  animation-fill-mode: both;\n  animation-duration: var(--calcite-animation-timing);\n}\n\n.calcite-animate__in {\n  animation-name: in;\n}\n\n.calcite-animate__in-down {\n  animation-name: in-down;\n}\n\n.calcite-animate__in-up {\n  animation-name: in-up;\n}\n\n.calcite-animate__in-right {\n  animation-name: in-right;\n}\n\n.calcite-animate__in-left {\n  animation-name: in-left;\n}\n\n.calcite-animate__in-scale {\n  animation-name: in-scale;\n}\n\n.calcite-sortable--chosen, .calcite-sortable--ghost, .calcite-sortable--drag, .calcite-sortable--fallback {\n  position: relative;\n  overflow: hidden;\n}\n\n.calcite-sortable--ghost:before {\n  content: \"\";\n  position: absolute;\n  inset-block: 0px;\n  inset-inline-start: 0px;\n  inset-inline-end: 0px;\n  z-index: var(--calcite-z-index);\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: dashed;\n  border-color: var(--calcite-color-brand);\n  background-color: var(--calcite-color-foreground-2);\n}\n\n.calcite-sortable--drag {\n  --tw-shadow: 0 6px 20px -4px rgba(0, 0, 0, .1), 0 4px 12px -2px rgba(0, 0, 0, .08);\n  --tw-shadow-colored: 0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);\n}",":not([calcite-hydrated]):is(calcite-accordion, calcite-accordion-item, calcite-action, calcite-action-bar, calcite-action-group, calcite-action-menu, calcite-action-pad, calcite-alert, calcite-autocomplete, calcite-autocomplete-item, calcite-autocomplete-item-group, calcite-avatar, calcite-block, calcite-block-group, calcite-block-section, calcite-button, calcite-card, calcite-card-group, calcite-carousel, calcite-carousel-item, calcite-checkbox, calcite-chip, calcite-chip-group, calcite-color-picker, calcite-color-picker-hex-input, calcite-color-picker-swatch, calcite-combobox, calcite-combobox-item, calcite-combobox-item-group, calcite-date-picker, calcite-date-picker-day, calcite-date-picker-month, calcite-date-picker-month-header, calcite-dialog, calcite-dropdown, calcite-dropdown-group, calcite-dropdown-item, calcite-fab, calcite-filter, calcite-flow, calcite-flow-item, calcite-graph, calcite-handle, calcite-icon, calcite-inline-editable, calcite-input, calcite-input-date-picker, calcite-input-message, calcite-input-number, calcite-input-text, calcite-input-time-picker, calcite-input-time-zone, calcite-label, calcite-link, calcite-list, calcite-list-item, calcite-list-item-group, calcite-loader, calcite-menu, calcite-menu-item, calcite-meter, calcite-modal, calcite-navigation, calcite-navigation-logo, calcite-navigation-user, calcite-notice, calcite-option, calcite-option-group, calcite-pagination, calcite-panel, calcite-popover, calcite-progress, calcite-radio-button, calcite-radio-button-group, calcite-rating, calcite-scrim, calcite-segmented-control, calcite-segmented-control-item, calcite-select, calcite-sheet, calcite-shell, calcite-shell-center-row, calcite-shell-panel, calcite-slider, calcite-sort-handle, calcite-sortable-list, calcite-split-button, calcite-stack, calcite-stepper, calcite-stepper-item, calcite-switch, calcite-tab, calcite-tab-nav, calcite-tab-title, calcite-table, calcite-table-cell, calcite-table-header, calcite-table-row, calcite-tabs, calcite-text-area, calcite-tile, calcite-tile-group, calcite-tile-select, calcite-tile-select-group, calcite-time-picker, calcite-tip, calcite-tip-group, calcite-tip-manager, calcite-tooltip, calcite-tree, calcite-tree-item) {\n  visibility: hidden;\n}\n\n:root {\n  --calcite-z-index-tooltip: 901;\n  --calcite-z-index-popup: 900;\n  --calcite-z-index-modal: 800;\n  --calcite-z-index-overlay: 700;\n  --calcite-z-index-dropdown: 600;\n  --calcite-z-index-toast: 500;\n  --calcite-z-index-header: 400;\n  --calcite-z-index-sticky: 300;\n  --calcite-z-index: 1;\n  --calcite-z-index-deep: -999999;\n  --calcite-spacing-xxxl: 2rem;\n  --calcite-spacing-xxl: 1.5rem;\n  --calcite-spacing-xl: 1.25rem;\n  --calcite-spacing-lg: 1rem;\n  --calcite-spacing-md-plus: .875rem;\n  --calcite-spacing-md: .75rem;\n  --calcite-spacing-sm-plus: .625rem;\n  --calcite-spacing-sm: .5rem;\n  --calcite-spacing-xs: .375rem;\n  --calcite-spacing-xxs: .25rem;\n  --calcite-spacing-base: 2px;\n  --calcite-spacing-px: 1px;\n  --calcite-spacing-none: 0;\n  --calcite-spacing-fixed-xxxl: 32px;\n  --calcite-spacing-fixed-xxl: 20px;\n  --calcite-spacing-fixed-xl: 16px;\n  --calcite-spacing-fixed-lg: 14px;\n  --calcite-spacing-fixed-md: 12px;\n  --calcite-spacing-fixed-sm: 8px;\n  --calcite-spacing-fixed-xs: 6px;\n  --calcite-spacing-fixed-xxs: 4px;\n  --calcite-size-xxxl: 6rem;\n  --calcite-size-xxl: 4rem;\n  --calcite-size-xl: 3rem;\n  --calcite-size-lg: 2.75rem;\n  --calcite-size-md: 2rem;\n  --calcite-size-sm: 1.5rem;\n  --calcite-size-xs: 1rem;\n  --calcite-size-xxs: .875rem;\n  --calcite-size-xxxs: .75rem;\n  --calcite-size-px: 1px;\n  --calcite-size-fixed-xxxl: 32px;\n  --calcite-size-fixed-xxl: 24px;\n  --calcite-size-fixed-xl: 20px;\n  --calcite-size-fixed-lg: 16px;\n  --calcite-size-fixed-md-plus: 14px;\n  --calcite-size-fixed-md: 12px;\n  --calcite-size-fixed-sm-plus: 10px;\n  --calcite-size-fixed-sm: 8px;\n  --calcite-size-fixed-xs: 6px;\n  --calcite-size-fixed-xxs: 4px;\n  --calcite-size-fixed-xxxs: 2px;\n  --calcite-opacity-disabled: .5;\n  --calcite-opacity-full: 1;\n  --calcite-opacity-dark: .85;\n  --calcite-opacity-half: .5;\n  --calcite-opacity-light: .4;\n  --calcite-font-text-case-capitalize: capitalize;\n  --calcite-font-text-case-lowercase: lowercase;\n  --calcite-font-text-case-uppercase: uppercase;\n  --calcite-font-text-case-none: none;\n  --calcite-font-text-decoration-underline: underline;\n  --calcite-font-text-decoration-none: none;\n  --calcite-font-paragraph-spacing-normal: 4px;\n  --calcite-font-letter-spacing-wide: .4;\n  --calcite-font-letter-spacing-normal: 0;\n  --calcite-font-letter-spacing-tight: -.4;\n  --calcite-font-line-height-relative-loose: 2;\n  --calcite-font-line-height-relative-relaxed: 1.625;\n  --calcite-font-line-height-relative-normal: 1.5;\n  --calcite-font-line-height-relative-snug: 1.375;\n  --calcite-font-line-height-relative-tight: 1.25;\n  --calcite-font-line-height-relative: auto;\n  --calcite-font-line-height-fixed-xl: 24px;\n  --calcite-font-line-height-fixed-lg: 20px;\n  --calcite-font-line-height-fixed-base: 16px;\n  --calcite-font-line-height-fixed-sm: 12px;\n  --calcite-font-style-emphasis: italic;\n  --calcite-font-size-xxl: 24px;\n  --calcite-font-size-xl: 20px;\n  --calcite-font-size-lg: 18px;\n  --calcite-font-size-md: 16px;\n  --calcite-font-size: 14px;\n  --calcite-font-size-sm: 12px;\n  --calcite-font-size-xs: 10px;\n  --calcite-font-weight-bold: 600;\n  --calcite-font-weight-semibold: 600;\n  --calcite-font-weight-medium: 500;\n  --calcite-font-weight-regular: 400;\n  --calcite-font-weight-normal: 400;\n  --calcite-font-weight-light: 300;\n  --calcite-font-family-code: Monaco, Consolas, \"Andale Mono\", \"Lucida Console\", monospace;\n  --calcite-font-family: \"Avenir Next\", Avenir, \"Helvetica Neue\", sans-serif;\n  --calcite-corner-radius-pill: 100%;\n  --calcite-corner-radius-round: 4px;\n  --calcite-corner-radius-sharp: 0;\n  --calcite-container-size-content-fixed: 1440px;\n  --calcite-container-size-content-fluid: 100%;\n  --calcite-container-size-gutter: 16px;\n  --calcite-container-size-margin: 24px;\n  --calcite-color-background-none: rgba(255, 255, 255, 0);\n  --calcite-border-width-lg: 4px;\n  --calcite-border-width-md: 2px;\n  --calcite-border-width-sm: 1px;\n  --calcite-border-width-none: 0;\n  --calcite-shadow-md: 0 4px 20px 0 rgba(0, 0, 0, .08), 0 12px 30px rgba(0, 0, 0, .1);\n  --calcite-shadow-sm: 0 2px 8px 0 rgba(0, 0, 0, .04), 0 4px 16px 0 rgba(0, 0, 0, .08);\n  --calcite-shadow-none: 0 0 0 0 rgba(0, 0, 0, 0);\n  --calcite-corner-radius: var(--calcite-corner-radius-sharp);\n}\n\n.calcite-typography-hierarchy-overline {\n  line-height: var(--calcite-font-line-height-fixed-sm);\n  text-case: var(--calcite-font-text-case-uppercase);\n  font-weight: var(--calcite-font-weight-bold);\n}\n\n.calcite-typography-wrap-bold-minus-1 {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-relative-snug);\n}\n\n.calcite-typography-wrap-bold-minus-2 {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-sm);\n}\n\n.calcite-typography-wrap-bold-3 {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-xxl);\n}\n\n.calcite-typography-wrap-bold-2 {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-xl);\n}\n\n.calcite-typography-wrap-bold-1 {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-lg);\n}\n\n.calcite-typography-wrap-bold-0 {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-md);\n}\n\n.calcite-typography-wrap-medium-minus-1 {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-relative-snug);\n}\n\n.calcite-typography-wrap-medium-minus-2 {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-sm);\n}\n\n.calcite-typography-wrap-medium-3 {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-xxl);\n}\n\n.calcite-typography-wrap-medium-2 {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-xl);\n}\n\n.calcite-typography-wrap-medium-1 {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-lg);\n}\n\n.calcite-typography-wrap-medium-0 {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-md);\n}\n\n.calcite-typography-wrap-regular-minus-1 {\n  line-height: var(--calcite-font-line-height-relative-snug);\n}\n\n.calcite-typography-wrap-regular-minus-2 {\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-sm);\n}\n\n.calcite-typography-wrap-regular-3 {\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-xxl);\n}\n\n.calcite-typography-wrap-regular-2 {\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-xl);\n}\n\n.calcite-typography-wrap-regular-1 {\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-lg);\n}\n\n.calcite-typography-wrap-regular-0 {\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-md);\n}\n\n.calcite-typography-wrap-light-minus-1 {\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-relative-snug);\n}\n\n.calcite-typography-wrap-light-minus-2 {\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-sm);\n}\n\n.calcite-typography-wrap-light-3 {\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-relative-tight);\n  font-size: var(--calcite-font-size-xxl);\n}\n\n.calcite-typography-wrap-light-2 {\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-xl);\n}\n\n.calcite-typography-wrap-light-1 {\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-lg);\n}\n\n.calcite-typography-wrap-light-0 {\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-relative-snug);\n  font-size: var(--calcite-font-size-md);\n}\n\n.calcite-typography-bold-1h {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-fixed-xl);\n  font-size: var(--calcite-font-size-lg);\n}\n\n.calcite-typography-bold-0h {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-fixed-lg);\n  font-size: var(--calcite-font-size-md);\n}\n\n.calcite-typography-bold-minus-1h {\n  font-weight: var(--calcite-font-weight-semibold);\n}\n\n.calcite-typography-bold-minus-2h {\n  font-weight: var(--calcite-font-weight-semibold);\n  font-size: var(--calcite-font-size-sm);\n}\n\n.calcite-typography-bold-minus-3h {\n  font-weight: var(--calcite-font-weight-semibold);\n  line-height: var(--calcite-font-line-height-fixed-sm);\n  font-size: var(--calcite-font-size-xs);\n}\n\n.calcite-typography-medium-1h {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-fixed-xl);\n  font-size: var(--calcite-font-size-lg);\n}\n\n.calcite-typography-medium-0h {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-fixed-lg);\n  font-size: var(--calcite-font-size-md);\n}\n\n.calcite-typography-medium-minus-1h {\n  font-weight: var(--calcite-font-weight-medium);\n}\n\n.calcite-typography-medium-minus-2h {\n  font-weight: var(--calcite-font-weight-medium);\n  font-size: var(--calcite-font-size-sm);\n}\n\n.calcite-typography-medium-minus-3h {\n  font-weight: var(--calcite-font-weight-medium);\n  line-height: var(--calcite-font-line-height-fixed-sm);\n  font-size: var(--calcite-font-size-xs);\n}\n\n.calcite-typography-regular-1h {\n  line-height: var(--calcite-font-line-height-fixed-xl);\n  font-size: var(--calcite-font-size-lg);\n}\n\n.calcite-typography-regular-0h {\n  line-height: var(--calcite-font-line-height-fixed-lg);\n  font-size: var(--calcite-font-size-md);\n}\n\n.calcite-typography-regular-minus-2h {\n  font-size: var(--calcite-font-size-sm);\n}\n\n.calcite-typography-regular-minus-3h {\n  line-height: var(--calcite-font-line-height-fixed-sm);\n  font-size: var(--calcite-font-size-xs);\n}\n\n.calcite-typography-light-1h {\n  font-size: var(--calcite-font-size-lg);\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-fixed-xl);\n}\n\n.calcite-typography-light-0h {\n  font-size: var(--calcite-font-size-md);\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-fixed-lg);\n}\n\n.calcite-typography-light-minus-1h {\n  font-weight: var(--calcite-font-weight-light);\n}\n\n.calcite-typography-light-minus-2h {\n  font-size: var(--calcite-font-size-sm);\n  font-weight: var(--calcite-font-weight-light);\n}\n\n.calcite-typography-light-minus-3h {\n  font-size: var(--calcite-font-size-xs);\n  font-weight: var(--calcite-font-weight-light);\n  line-height: var(--calcite-font-line-height-fixed-sm);\n}\n\n.calcite-typography {\n  font-family: var(--calcite-font-family);\n  font-size: var(--calcite-font-size);\n  font-weight: var(--calcite-font-weight-regular);\n  letter-spacing: var(--calcite-font-letter-spacing-normal);\n  line-height: var(--calcite-font-line-height-fixed-base);\n  paragraph-spacing: var(--calcite-font-paragraph-spacing-normal);\n  text-case: var(--calcite-font-text-case-none);\n  -webkit-text-decoration: var(--calcite-font-text-decoration-none);\n  text-decoration: var(--calcite-font-text-decoration-none);\n}\n\n.calcite-typography-hierarchy-caption {\n  line-height: 1.375;\n  font-size: 12px;\n}\n\n.calcite-typography-hierarchy-body {\n  font-family: Avenir Next, Avenir, Helvetica Neue, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 16px;\n  paragraph-spacing: 4px;\n  text-case: none;\n  text-decoration: none;\n}\n\n.calcite-typography-hierarchy-body-snug {\n  line-height: 1.375;\n}\n\n.calcite-typography-hierarchy-heading-5 {\n  font-weight: 500;\n  line-height: 1.375;\n}\n\n.calcite-typography-hierarchy-heading-4 {\n  font-weight: 500;\n  line-height: 1.375;\n  font-size: 16px;\n}\n\n.calcite-typography-hierarchy-heading-3 {\n  font-weight: 500;\n  line-height: 1.375;\n  font-size: 18px;\n}\n\n.calcite-typography-hierarchy-heading-2 {\n  font-weight: 500;\n  line-height: 1.375;\n  font-size: 20px;\n}\n\n.calcite-typography-hierarchy-heading-1 {\n  font-weight: 500;\n  line-height: 1.375;\n  font-size: 24px;\n}\n\n.calcite-typography-hierarchy-display-2 {\n  font-weight: 600;\n  line-height: 1.375;\n  font-size: 20px;\n}\n\n.calcite-typography-hierarchy-display-1 {\n  font-weight: 600;\n  line-height: 1.375;\n  font-size: 24px;\n}\n\n.calcite-typography-regular-minus-1h {\n  font-family: Avenir Next, Avenir, Helvetica Neue, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 16px;\n  paragraph-spacing: 4px;\n  text-case: none;\n  text-decoration: none;\n}\n\n:root {\n  --calcite-color-border-white: #ffffff;\n  --calcite-color-border-ghost: rgba(0, 0, 0, .3);\n  --calcite-color-border-input: #949494;\n  --calcite-color-border-3: #dfdfdf;\n  --calcite-color-border-2: #d4d4d4;\n  --calcite-color-border-1: #cacaca;\n  --calcite-color-text-link: #00619b;\n  --calcite-color-text-inverse: #ffffff;\n  --calcite-color-text-3: #6a6a6a;\n  --calcite-color-text-2: #4a4a4a;\n  --calcite-color-text-1: #151515;\n  --calcite-color-inverse-press: #202020;\n  --calcite-color-inverse-hover: #2b2b2b;\n  --calcite-color-inverse: #353535;\n  --calcite-color-status-danger-press: #7c1d13;\n  --calcite-color-status-danger-hover: #a82b1e;\n  --calcite-color-status-danger: #d83020;\n  --calcite-color-status-warning-press: #bfa200;\n  --calcite-color-status-warning-hover: #d9bc00;\n  --calcite-color-status-warning: #edd317;\n  --calcite-color-status-success-press: #1a6324;\n  --calcite-color-status-success-hover: #288835;\n  --calcite-color-status-success: #35ac46;\n  --calcite-color-status-info-press: #00304d;\n  --calcite-color-status-info-hover: #004874;\n  --calcite-color-status-info: #00619b;\n  --calcite-color-brand-underline: rgba(0, 97, 155, .4);\n  --calcite-color-brand-press: #004874;\n  --calcite-color-brand-hover: #00619b;\n  --calcite-color-brand: #007ac2;\n  --calcite-color-transparent-tint: rgba(255, 255, 255, .8);\n  --calcite-color-transparent-scrim: rgba(255, 255, 255, .85);\n  --calcite-color-transparent-press: rgba(0, 0, 0, .08);\n  --calcite-color-transparent-hover: rgba(0, 0, 0, .04);\n  --calcite-color-transparent: rgba(0, 0, 0, 0);\n  --calcite-color-foreground-current: #c7eaff;\n  --calcite-color-foreground-3: #eaeaea;\n  --calcite-color-foreground-2: #f3f3f3;\n  --calcite-color-foreground-1: #ffffff;\n  --calcite-color-background: #f8f8f8;\n  --calcite-color-focus: #007ac2;\n}\n\n.calcite-mode-light {\n  --calcite-color-border-white: #ffffff;\n  --calcite-color-border-ghost: rgba(0, 0, 0, .3);\n  --calcite-color-border-input: #949494;\n  --calcite-color-border-3: #dfdfdf;\n  --calcite-color-border-2: #d4d4d4;\n  --calcite-color-border-1: #cacaca;\n  --calcite-color-text-link: #00619b;\n  --calcite-color-text-inverse: #ffffff;\n  --calcite-color-text-3: #6a6a6a;\n  --calcite-color-text-2: #4a4a4a;\n  --calcite-color-text-1: #151515;\n  --calcite-color-inverse-press: #202020;\n  --calcite-color-inverse-hover: #2b2b2b;\n  --calcite-color-inverse: #353535;\n  --calcite-color-status-danger-press: #7c1d13;\n  --calcite-color-status-danger-hover: #a82b1e;\n  --calcite-color-status-danger: #d83020;\n  --calcite-color-status-warning-press: #bfa200;\n  --calcite-color-status-warning-hover: #d9bc00;\n  --calcite-color-status-warning: #edd317;\n  --calcite-color-status-success-press: #1a6324;\n  --calcite-color-status-success-hover: #288835;\n  --calcite-color-status-success: #35ac46;\n  --calcite-color-status-info-press: #00304d;\n  --calcite-color-status-info-hover: #004874;\n  --calcite-color-status-info: #00619b;\n  --calcite-color-brand-underline: rgba(0, 97, 155, .4);\n  --calcite-color-brand-press: #004874;\n  --calcite-color-brand-hover: #00619b;\n  --calcite-color-brand: #007ac2;\n  --calcite-color-transparent-tint: rgba(255, 255, 255, .8);\n  --calcite-color-transparent-scrim: rgba(255, 255, 255, .85);\n  --calcite-color-transparent-press: rgba(0, 0, 0, .08);\n  --calcite-color-transparent-hover: rgba(0, 0, 0, .04);\n  --calcite-color-transparent: rgba(0, 0, 0, 0);\n  --calcite-color-foreground-current: #c7eaff;\n  --calcite-color-foreground-3: #eaeaea;\n  --calcite-color-foreground-2: #f3f3f3;\n  --calcite-color-foreground-1: #ffffff;\n  --calcite-color-background: #f8f8f8;\n  --calcite-color-focus: #007ac2;\n}\n\n.calcite-mode-dark {\n  --calcite-color-border-white: #f8f8f8;\n  --calcite-color-border-ghost: rgba(117, 117, 117, .3);\n  --calcite-color-border-input: #757575;\n  --calcite-color-border-3: #404040;\n  --calcite-color-border-2: #4a4a4a;\n  --calcite-color-border-1: #555555;\n  --calcite-color-text-link: #00a0ff;\n  --calcite-color-text-inverse: #151515;\n  --calcite-color-text-3: #9f9f9f;\n  --calcite-color-text-2: #bfbfbf;\n  --calcite-color-text-1: #ffffff;\n  --calcite-color-inverse-press: #f3f3f3;\n  --calcite-color-inverse-hover: #ffffff;\n  --calcite-color-inverse: #f8f8f8;\n  --calcite-color-status-danger-press: #d90012;\n  --calcite-color-status-danger-hover: #ff0015;\n  --calcite-color-status-danger: #fe583e;\n  --calcite-color-status-warning-press: #f5d000;\n  --calcite-color-status-warning-hover: #ffee33;\n  --calcite-color-status-warning: #ffc900;\n  --calcite-color-status-success-press: #00b81b;\n  --calcite-color-status-success-hover: #3bed52;\n  --calcite-color-status-success: #36da43;\n  --calcite-color-status-info-press: #009af2;\n  --calcite-color-status-info-hover: #3db8ff;\n  --calcite-color-status-info: #00a0ff;\n  --calcite-color-brand-underline: rgba(0, 160, 255, .4);\n  --calcite-color-brand-press: #00619b;\n  --calcite-color-brand-hover: #007ac2;\n  --calcite-color-brand: #009af2;\n  --calcite-color-transparent-tint: rgba(43, 43, 43, .8);\n  --calcite-color-transparent-scrim: rgba(0, 0, 0, .85);\n  --calcite-color-transparent-press: rgba(255, 255, 255, .08);\n  --calcite-color-transparent-hover: rgba(255, 255, 255, .04);\n  --calcite-color-transparent: rgba(255, 255, 255, 0);\n  --calcite-color-foreground-current: #214155;\n  --calcite-color-foreground-3: #151515;\n  --calcite-color-foreground-2: #202020;\n  --calcite-color-foreground-1: #2b2b2b;\n  --calcite-color-background: #353535;\n  --calcite-color-focus: #009af2;\n}\n\n:root {\n  --calcite-code-family: \"Consolas\", \"Andale Mono\", \"Lucida Console\", \"Monaco\", monospace;\n  --calcite-sans-family: \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n  --calcite-font-size--3: .625rem;\n  --calcite-font-size--2: .75rem;\n  --calcite-font-size--1: .875rem;\n  --calcite-font-size-0: 1rem;\n  --calcite-font-size-1: 1.125rem;\n  --calcite-font-size-2: 1.25rem;\n  --calcite-font-size-3: 1.625rem;\n  --calcite-font-size-4: 2rem;\n  --calcite-font-size-5: 2.5rem;\n  --calcite-font-size-6: 3rem;\n  --calcite-font-size-7: 3.5rem;\n  --calcite-font-size-8: 4rem;\n  --calcite-font-weight-light: 300;\n  --calcite-font-weight-normal: 400;\n  --calcite-font-weight-medium: 500;\n  --calcite-font-weight-bold: 600;\n  --calcite-ui-brand: var(--calcite-color-brand);\n  --calcite-ui-brand-hover: var(--calcite-color-brand-hover);\n  --calcite-ui-brand-press: var(--calcite-color-brand-press);\n  --calcite-ui-background: var(--calcite-color-background);\n  --calcite-ui-foreground-1: var(--calcite-color-foreground-1);\n  --calcite-ui-foreground-2: var(--calcite-color-foreground-2);\n  --calcite-ui-foreground-3: var(--calcite-color-foreground-3);\n  --calcite-ui-foreground-current: var(--calcite-color-foreground-current);\n  --calcite-ui-focus-offset-invert: var(--calcite-offset-invert-focus);\n  --calcite-semantic-ui-color-foreground-current: var(--calcite-color-foreground-current);\n  --calcite-ui-text-1: var(--calcite-color-text-1);\n  --calcite-ui-text-2: var(--calcite-color-text-2);\n  --calcite-ui-text-3: var(--calcite-color-text-3);\n  --calcite-ui-text-inverse: var(--calcite-color-text-inverse);\n  --calcite-ui-text-link: var(--calcite-color-text-link);\n  --calcite-ui-border-1: var(--calcite-color-border-1);\n  --calcite-ui-border-2: var(--calcite-color-border-2);\n  --calcite-ui-border-3: var(--calcite-color-border-3);\n  --calcite-ui-border-input: var(--calcite-color-border-input);\n  --calcite-ui-info: var(--calcite-color-status-info);\n  --calcite-ui-info-hover: var(--calcite-color-status-info-hover);\n  --calcite-ui-info-press: var(--calcite-color-status-info-press);\n  --calcite-ui-success: var(--calcite-color-status-success);\n  --calcite-ui-success-hover: var(--calcite-color-status-success-hover);\n  --calcite-ui-success-press: var(--calcite-color-status-success-press);\n  --calcite-ui-warning: var(--calcite-color-status-warning);\n  --calcite-ui-warning-hover: var(--calcite-color-status-warning-hover);\n  --calcite-ui-warning-press: var(--calcite-color-status-warning-press);\n  --calcite-ui-danger: var(--calcite-color-status-danger);\n  --calcite-ui-danger-hover: var(--calcite-color-status-danger-hover);\n  --calcite-ui-danger-press: var(--calcite-color-status-danger-press);\n  --calcite-ui-inverse: var(--calcite-color-inverse);\n  --calcite-app-z-index: var(--calcite-z-index);\n  --calcite-app-z-index-tooltip: var(--calcite-z-index-tooltip);\n  --calcite-app-z-index-popup: var(--calcite-z-index-popup);\n  --calcite-app-z-index-modal: var(--calcite-z-index-modal);\n  --calcite-app-z-index-overlay: var(--calcite-z-index-overlay);\n  --calcite-app-z-index-dropdown: var(--calcite-z-index-dropdown);\n  --calcite-app-z-index-toast: var(--calcite-z-index-toast);\n  --calcite-app-z-index-header: var(--calcite-z-index-header);\n  --calcite-app-z-index-sticky: var(--calcite-z-index-sticky);\n  --calcite-app-breakpoint-content-fixed: var(--calcite-container-size-content-fixed);\n  --calcite-app-breakpoint-content-fluid: var(--calcite-container-size-content-fluid);\n  --calcite-app-breakpoint-width-lg: var(--calcite-container-size-width-lg-max);\n  --calcite-app-breakpoint-width-md: var(--calcite-container-size-width-md-max);\n  --calcite-app-breakpoint-width-sm: var(--calcite-container-size-width-sm-max);\n  --calcite-app-breakpoint-width-xs: var(--calcite-container-size-width-xs-max);\n  --calcite-app-breakpoint-width-xxs: var(--calcite-container-size-width-xxs-max);\n  --calcite-app-spacing-11: var(--calcite-spacing-xxxl);\n  --calcite-app-spacing-8: var(--calcite-spacing-xl);\n  --calcite-app-spacing-7: var(--calcite-spacing-lg);\n  --calcite-app-spacing-6: var(--calcite-spacing-md-plus);\n  --calcite-app-spacing-5: var(--calcite-spacing-md);\n  --calcite-app-spacing-3: var(--calcite-spacing-sm);\n  --calcite-app-spacing-2: var(--calcite-spacing-xs);\n  --calcite-app-spacing-1: var(--calcite-spacing-xxs);\n  --calcite-app-spacing-0: var(--calcite-spacing-base);\n  --calcite-app-sizing-11: var(--calcite-size-md);\n  --calcite-app-sizing-9: var(--calcite-size-sm);\n  --calcite-app-sizing-8: var(--calcite-spacing-xl);\n  --calcite-app-sizing-7: var(--calcite-size-xs);\n  --calcite-app-sizing-6: var(--calcite-size-xxxs-plus);\n  --calcite-app-sizing-5: var(--calcite-size-xxxs);\n  --calcite-app-sizing-4: var(--calcite-spacing-sm-plus);\n  --calcite-app-sizing-3: var(--calcite-spacing-sm);\n  --calcite-app-sizing-2: var(--calcite-spacing-xs);\n  --calcite-app-sizing-1: var(--calcite-spacing-xxs);\n  --calcite-app-sizing-0: var(--calcite-spacing-base);\n  --calcite-app-opacity-100: var(--calcite-app-opacity-full);\n  --calcite-app-opacity-85: var(--calcite-app-opacity-dark);\n  --calcite-app-opacity-50: var(--calcite-app-opacity-half);\n  --calcite-app-opacity-40: var(--calcite-app-opacity-light);\n  --calcite-app-border-width-none: var(--calcite-border-width-none);\n  --calcite-app-border-width-2: var(--calcite-border-width-lg);\n  --calcite-app-border-width-1: var(--calcite-border-width-md);\n  --calcite-app-border-width-0: var(--calcite-border-width-sm);\n  --calcite-app-border-radius-full: var(--calcite-corner-radius-pill);\n  --calcite-app-border-radius-none: var(--calcite-corner-radius-sharp);\n  --calcite-app-border-radius-1: var(--calcite-corner-radius-round);\n  --calcite-app-border-radius-0: var(--calcite-corner-radius-0);\n  --calcite-app-font-text-case-capitalize: var(--calcite-font-text-case-capitalize);\n  --calcite-app-font-text-case-lowercase: var(--calcite-font-text-case-lowercase);\n  --calcite-app-font-text-case-uppercase: var(--calcite-font-text-case-uppercase);\n  --calcite-app-font-text-case-none: var(--calcite-font-text-case-none);\n  --calcite-app-font-text-decoration-underline: var(--calcite-font-text-decoration-underline);\n  --calcite-app-font-text-decoration-none: var(--calcite-font-text-decoration-none);\n  --calcite-app-font-paragraph-spacing-normal: var(--calcite-font-paragraph-spacing-normal);\n  --calcite-app-font-letter-spacing-wide: var(--calcite-font-letter-spacing-wide);\n  --calcite-app-font-letter-spacing-normal: var(--calcite-font-letter-spacing-normal);\n  --calcite-app-font-letter-spacing-tight: var(--calcite-font-letter-spacing-tight);\n  --calcite-app-font-size-6: var(--calcite-font-size-xxl);\n  --calcite-app-font-size-5: var(--calcite-font-size-xl);\n  --calcite-app-font-size-4: var(--calcite-font-size-lg);\n  --calcite-app-font-size-3: var(--calcite-font-size-md);\n  --calcite-app-font-size-2: var(--calcite-font-size);\n  --calcite-app-font-size-1: var(--calcite-font-size-sm);\n  --calcite-app-font-size-0: var(--calcite-font-size-xs);\n  --calcite-app-font-line-height-relative-loose: var(--calcite-font-line-height-relative-loose);\n  --calcite-app-font-line-height-relative-relaxed: var(--calcite-font-line-height-relative-relaxed);\n  --calcite-app-font-line-height-relative-normal: var(--calcite-font-line-height-relative-normal);\n  --calcite-app-font-line-height-relative-snug: var(--calcite-font-line-height-relative-snug);\n  --calcite-app-font-line-height-relative-tight: var(--calcite-font-line-height-relative-tight);\n  --calcite-app-font-line-height-relative: var(--calcite-font-line-height-relative);\n  --calcite-app-font-line-height-fixed-3: var(--calcite-font-line-height-fixed-xl);\n  --calcite-app-font-line-height-fixed-2: var(--calcite-font-line-height-fixed-lg);\n  --calcite-app-font-line-height-fixed: var(--calcite-font-line-height-fixed-sm);\n  --calcite-app-font-weight-bold: var(--calcite-font-weight-bold);\n  --calcite-app-font-weight-demi: var(--calcite-font-weight-semibold);\n  --calcite-app-font-weight-medium: var(--calcite-font-weight-medium);\n  --calcite-app-font-weight-regular: var(--calcite-font-weight-regular);\n  --calcite-app-font-weight-light: var(--calcite-font-weight-light);\n  --calcite-app-font-family-code: var(--calcite-font-family-code);\n  --calcite-app-font-family-primary: var(--calcite-font-family-primary);\n  --calcite-floating-ui-transition: var(--calcite-animation-timing);\n  --calcite-floating-ui-z-index: var(--calcite-z-index-dropdown);\n  --calcite-animation-timing: calc(.15s * var(--calcite-internal-duration-factor));\n  --calcite-internal-duration-factor: var(--calcite-duration-factor, 1);\n  --calcite-internal-animation-timing-fast: calc(.1s * var(--calcite-internal-duration-factor));\n  --calcite-internal-animation-timing-medium: calc(.2s * var(--calcite-internal-duration-factor));\n  --calcite-internal-animation-timing-slow: calc(.3s * var(--calcite-internal-duration-factor));\n  --calcite-popover-z-index: var(--calcite-z-index-popup);\n  --calcite-border-radius: var(--calcite-border-radius-round, 4px);\n  --calcite-border-radius-base: 0;\n  --calcite-offset-invert-focus: 0;\n  --calcite-panel-width-multiplier: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: var(--calcite-font-family);\n}\n\n@media (prefers-color-scheme: dark) {\n  .calcite-mode-auto {\n    --calcite-color-border-white: #f8f8f8;\n    --calcite-color-border-ghost: rgba(117, 117, 117, .3);\n    --calcite-color-border-input: #757575;\n    --calcite-color-border-3: #404040;\n    --calcite-color-border-2: #4a4a4a;\n    --calcite-color-border-1: #555555;\n    --calcite-color-text-link: #00a0ff;\n    --calcite-color-text-inverse: #151515;\n    --calcite-color-text-3: #9f9f9f;\n    --calcite-color-text-2: #bfbfbf;\n    --calcite-color-text-1: #ffffff;\n    --calcite-color-inverse-press: #f3f3f3;\n    --calcite-color-inverse-hover: #ffffff;\n    --calcite-color-inverse: #f8f8f8;\n    --calcite-color-status-danger-press: #d90012;\n    --calcite-color-status-danger-hover: #ff0015;\n    --calcite-color-status-danger: #fe583e;\n    --calcite-color-status-warning-press: #f5d000;\n    --calcite-color-status-warning-hover: #ffee33;\n    --calcite-color-status-warning: #ffc900;\n    --calcite-color-status-success-press: #00b81b;\n    --calcite-color-status-success-hover: #3bed52;\n    --calcite-color-status-success: #36da43;\n    --calcite-color-status-info-press: #009af2;\n    --calcite-color-status-info-hover: #3db8ff;\n    --calcite-color-status-info: #00a0ff;\n    --calcite-color-brand-underline: rgba(0, 160, 255, .4);\n    --calcite-color-brand-press: #00619b;\n    --calcite-color-brand-hover: #007ac2;\n    --calcite-color-brand: #009af2;\n    --calcite-color-transparent-tint: rgba(43, 43, 43, .8);\n    --calcite-color-transparent-scrim: rgba(0, 0, 0, .85);\n    --calcite-color-transparent-press: rgba(255, 255, 255, .08);\n    --calcite-color-transparent-hover: rgba(255, 255, 255, .04);\n    --calcite-color-transparent: rgba(255, 255, 255, 0);\n    --calcite-color-foreground-current: #214155;\n    --calcite-color-foreground-3: #151515;\n    --calcite-color-foreground-2: #202020;\n    --calcite-color-foreground-1: #2b2b2b;\n    --calcite-color-background: #353535;\n    --calcite-color-focus: #009af2;\n  }\n}\n@media (prefers-color-scheme: light) {\n  .calcite-mode-auto {\n    --calcite-color-border-white: #ffffff;\n    --calcite-color-border-ghost: rgba(0, 0, 0, .3);\n    --calcite-color-border-input: #949494;\n    --calcite-color-border-3: #dfdfdf;\n    --calcite-color-border-2: #d4d4d4;\n    --calcite-color-border-1: #cacaca;\n    --calcite-color-text-link: #00619b;\n    --calcite-color-text-inverse: #ffffff;\n    --calcite-color-text-3: #6a6a6a;\n    --calcite-color-text-2: #4a4a4a;\n    --calcite-color-text-1: #151515;\n    --calcite-color-inverse-press: #202020;\n    --calcite-color-inverse-hover: #2b2b2b;\n    --calcite-color-inverse: #353535;\n    --calcite-color-status-danger-press: #7c1d13;\n    --calcite-color-status-danger-hover: #a82b1e;\n    --calcite-color-status-danger: #d83020;\n    --calcite-color-status-warning-press: #bfa200;\n    --calcite-color-status-warning-hover: #d9bc00;\n    --calcite-color-status-warning: #edd317;\n    --calcite-color-status-success-press: #1a6324;\n    --calcite-color-status-success-hover: #288835;\n    --calcite-color-status-success: #35ac46;\n    --calcite-color-status-info-press: #00304d;\n    --calcite-color-status-info-hover: #004874;\n    --calcite-color-status-info: #00619b;\n    --calcite-color-brand-underline: rgba(0, 97, 155, .4);\n    --calcite-color-brand-press: #004874;\n    --calcite-color-brand-hover: #00619b;\n    --calcite-color-brand: #007ac2;\n    --calcite-color-transparent-tint: rgba(255, 255, 255, .8);\n    --calcite-color-transparent-scrim: rgba(255, 255, 255, .85);\n    --calcite-color-transparent-press: rgba(0, 0, 0, .08);\n    --calcite-color-transparent-hover: rgba(0, 0, 0, .04);\n    --calcite-color-transparent: rgba(0, 0, 0, 0);\n    --calcite-color-foreground-current: #c7eaff;\n    --calcite-color-foreground-3: #eaeaea;\n    --calcite-color-foreground-2: #f3f3f3;\n    --calcite-color-foreground-1: #ffffff;\n    --calcite-color-background: #f8f8f8;\n    --calcite-color-focus: #007ac2;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  :root {\n    --calcite-internal-duration-factor: 0;\n  }\n}\n@keyframes in {\n  0% {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes in-down {\n  0% {\n    opacity: 0;\n    transform: translate3D(0, -5px, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translateZ(0);\n  }\n}\n@keyframes in-up {\n  0% {\n    opacity: 0;\n    transform: translate3D(0, 5px, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translateZ(0);\n  }\n}\n@keyframes in-right {\n  0% {\n    opacity: 0;\n    transform: translate3D(-5px, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translateZ(0);\n  }\n}\n@keyframes in-left {\n  0% {\n    opacity: 0;\n    transform: translate3D(5px, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translateZ(0);\n  }\n}\n@keyframes in-scale {\n  0% {\n    opacity: 0;\n    transform: scale3D(0.95, 0.95, 1);\n  }\n  to {\n    opacity: 1;\n    transform: scaleZ(1);\n  }\n}\n.calcite-animate {\n  opacity: 0;\n  animation-fill-mode: both;\n  animation-duration: var(--calcite-animation-timing);\n}\n\n.calcite-animate__in {\n  animation-name: in;\n}\n\n.calcite-animate__in-down {\n  animation-name: in-down;\n}\n\n.calcite-animate__in-up {\n  animation-name: in-up;\n}\n\n.calcite-animate__in-right {\n  animation-name: in-right;\n}\n\n.calcite-animate__in-left {\n  animation-name: in-left;\n}\n\n.calcite-animate__in-scale {\n  animation-name: in-scale;\n}\n\n.calcite-sortable--chosen, .calcite-sortable--ghost, .calcite-sortable--drag, .calcite-sortable--fallback {\n  position: relative;\n  overflow: hidden;\n}\n\n.calcite-sortable--ghost:before {\n  content: \"\";\n  position: absolute;\n  inset-block: 0px;\n  inset-inline-start: 0px;\n  inset-inline-end: 0px;\n  z-index: var(--calcite-z-index);\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: dashed;\n  border-color: var(--calcite-color-brand);\n  background-color: var(--calcite-color-foreground-2);\n}\n\n.calcite-sortable--drag {\n  --tw-shadow: 0 6px 20px -4px rgba(0, 0, 0, .1), 0 4px 12px -2px rgba(0, 0, 0, .08);\n  --tw-shadow-colored: 0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/zonaRiesgo/src/runtime/assets/style.css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/zonaRiesgo/src/runtime/assets/style.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.widgetZoneArea {
  background-color: #052042;
  width: 100%;
  height: 100%;
  margin: 0 !important;
  overflow: hidden;
  color: white;
}

.zona-riesgo-main-container {
  padding: 15px;
  width: 100%;
  height: 100%;
}

.zona-riesgo-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.zona-riesgo-buttons {
  width: 100%;
  display: flex;
  button {
    flex: 1;
    padding: 0.5rem 1rem;
    height: 2rem;
    margin: 1rem;
    transition: all 0.3s ease;
    background-color: #1a5276;
    &:hover {
      border: 1px solid #008ecc;
      background-color: #052042;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/zonaRiesgo/src/runtime/assets/style.css","webpack://./../../../Nueva%20carpeta/ArcGISExperienceBuilder/client/your-extensions/widgets/zonaRiesgo/src/runtime/assets/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,YAAA;ACCF;;ADCA;EACE,aAAA;EACA,WAAA;EACA,YAAA;ACEF;;ADCA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,YAAA;EACA,WAAA;ACEF;;ADAA;EACE,WAAA;EACA,aAAA;EACA;IACE,OAAA;IACA,oBAAA;IACA,YAAA;IACA,YAAA;IACA,yBAAA;IACA,yBAAA;IAEA;MACE,yBAAA;MACA,yBAAA;MACA,wCAAA;ICEF;EACF;AACF","sourcesContent":[".widgetZoneArea {\n  background-color: #052042;\n  width: 100%;\n  height: 100%;\n  margin: 0 !important;\n  overflow: hidden;\n  color: white;\n}\n\n.zona-riesgo-main-container {\n  padding: 15px;\n  width: 100%;\n  height: 100%;\n}\n\n.zona-riesgo-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n}\n\n.zona-riesgo-buttons {\n  width: 100%;\n  display: flex;\n  button {\n    flex: 1;\n    padding: 0.5rem 1rem;\n    height: 2rem;\n    margin: 1rem;\n    transition: all 0.3s ease;\n    background-color: #1a5276;\n    &:hover {\n      border: 1px solid #008ecc;\n      background-color: #052042;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n}",".widgetZoneArea {\n  background-color: #052042;\n  width: 100%;\n  height: 100%;\n  margin: 0 !important;\n  overflow: hidden;\n  color: white;\n}\n\n.zona-riesgo-main-container {\n  padding: 15px;\n  width: 100%;\n  height: 100%;\n}\n\n.zona-riesgo-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n}\n\n.zona-riesgo-buttons {\n  width: 100%;\n  display: flex;\n  button {\n    flex: 1;\n    padding: 0.5rem 1rem;\n    height: 2rem;\n    margin: 1rem;\n    transition: all 0.3s ease;\n    background-color: #1a5276;\n    &:hover {\n      border: 1px solid #008ecc;\n      background-color: #052042;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/@esri/calcite-components/dist/calcite/calcite.css":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/calcite/calcite.css ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_calcite_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./calcite.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./node_modules/@esri/calcite-components/dist/calcite/calcite.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_calcite_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_calcite_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_calcite_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_calcite_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./your-extensions/widgets/zonaRiesgo/src/runtime/assets/style.css":
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/zonaRiesgo/src/runtime/assets/style.css ***!
  \*************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/zonaRiesgo/src/runtime/assets/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./your-extensions/widgets/zonaRiesgo/src/runtime/translations.ts":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/zonaRiesgo/src/runtime/translations.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translations: () => (/* binding */ translations)
/* harmony export */ });
const translations = {
    es: {
        widgetLabel: "Detección de áreas quemadas y detección de áreas inundadas",
        description: "Permite identificar áreas de riesgo de incendio y riesgo de inundación para delimitar a través de un polígono la zona afectada. ",
        incendio: "Incendios",
        inundacion: "Inundaciones",
        errorImagen: "Debe seleccionar una imagen antes de ejecutar este proceso",
        errorBuffer: "Debe seleccionar mínimo un polígono.",
        fireLayer: "Zonas quemadas",
        floodLayer: "Zonas inundadas",
        fireError: "Error al cargar riesgo de incendio, intenta de nuevo",
        floodError: "Error al cargar riesgo de inundacion, intenta de nuevo",
        bufferLayer: "Buffer de zona afectada",
    },
    en: {
        widgetLabel: "Detection of burned areas and detection of flooded areas",
        description: "It allows you to identify areas at risk of fire and flooding and delimit the affected area using a polygon.",
        incendio: "Wildfires",
        inundacion: "Floods",
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
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/zonaRiesgo/src/runtime/widget.tsx ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/style.css */ "./your-extensions/widgets/zonaRiesgo/src/runtime/assets/style.css");
/* harmony import */ var _esri_calcite_components_dist_calcite_calcite_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @esri/calcite-components/dist/calcite/calcite.css */ "./node_modules/@esri/calcite-components/dist/calcite/calcite.css");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/esm/esri-loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _hooks_useLocale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useLocale */ "./your-extensions/hooks/useLocale.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./translations */ "./your-extensions/widgets/zonaRiesgo/src/runtime/translations.ts");
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
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [loadingIncendio, setLoadingIncendio] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [loadingInundacion, setLoadingInundacion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const selectedImageries = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedImages; });
    const geoprocess = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.geoprocess; });
    const selectedSensor = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state) => { var _a; return (_a = state.myState) === null || _a === void 0 ? void 0 : _a.selectedSensor; });
    const activeViewChangeHandler = (jmv) => {
        setJimuMapView(jmv);
    };
    const cargarGeometriaEnMapa = (geojsonFileName, proceso) => __awaiter(void 0, void 0, void 0, function* () {
        if (!jimuMapView)
            return;
        if (!geojsonFileName) {
            throw new Error("No se recibió un nombre de archivo válido.");
        }
        try {
            // Obtener la URL base dinámicamente
            // const baseUrl = window.location.origin ;
            const baseUrl = "http://127.0.0.1:5000";
            const queryUrl = String(baseUrl + geojsonFileName);
            const layerResponse = yield fetch(queryUrl);
            if (!layerResponse.ok) {
                throw new Error(`Error al consultar la capa: ${layerResponse.status} ${layerResponse.statusText}`);
            }
            const geojsonData = yield layerResponse.json();
            if (geojsonData) {
                localStorage.setItem("IncendioName", JSON.stringify(geojsonData));
            }
            const [FeatureLayer, Graphic, Polygon, SimpleFillSymbol, geometryEngine] = yield (0,esri_loader__WEBPACK_IMPORTED_MODULE_4__.loadModules)([
                "esri/layers/FeatureLayer",
                "esri/Graphic",
                "esri/geometry/Polygon",
                "esri/symbols/SimpleFillSymbol",
                "esri/geometry/geometryEngine"
            ]);
            var colorPoligon;
            var nombreCapa;
            if (proceso == 2) {
                colorPoligon = new SimpleFillSymbol({
                    color: [255, 0, 0, 0.5],
                    outline: { color: [255, 0, 0], width: 1 }
                });
                nombreCapa = t("fireLayer");
            }
            else if (proceso == 3) {
                colorPoligon = new SimpleFillSymbol({
                    color: [0, 0, 255, 0.5],
                    outline: { color: [0, 0, 255], width: 1 }
                });
                nombreCapa = t("floodLayer");
            }
            if (colorPoligon != null) {
                const featureLayer = new FeatureLayer({
                    title: nombreCapa,
                    source: [],
                    objectIdField: "OBJECTID",
                    fields: [
                        { name: "OBJECTID", alias: "OBJECTID", type: "oid" },
                        { name: "area_m2", alias: "Área (m²)", type: "double" },
                        { name: "area_ha", alias: "Área (ha)", type: "double" },
                        { name: "area_km2", alias: "Área (km²)", type: "double" }
                    ],
                    renderer: {
                        type: "simple",
                        symbol: colorPoligon
                    },
                });
                const graphics = [];
                let graphicIndex = 0;
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
                        const areaM2 = geometryEngine.geodesicArea(geometry, "square-meters");
                        const areaHa = areaM2 / 10000;
                        const areaKm2 = areaM2 / 1000000;
                        graphics.push(new Graphic({
                            geometry: geometry,
                            attributes: {
                                OBJECTID: graphicIndex,
                                area_m2: areaM2,
                                area_ha: areaHa,
                                area_km2: areaKm2
                            }
                        }));
                        graphicIndex++;
                    });
                });
                featureLayer.source = graphics;
                // Agregar la capa al mapa si no existe una con el mismo nombre
                const existingLayer = jimuMapView.view.map.layers.find(layer => layer.title === "Poligono desastre");
                if (existingLayer) {
                    jimuMapView.view.map.remove(existingLayer);
                }
                jimuMapView.view.map.add(featureLayer);
            }
        }
        catch (error) {
            console.error("Error al cargar la geometría en el mapa:", error);
        }
    });
    const incendio = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        setLoadingIncendio(true);
        // if (selectedImageries.length == 0) {
        //   toast.warning(`Debe seleccionar una imagen antes de ejecutar este proceso`, {
        //     position: "top-center",
        //     autoClose: 2000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        //     transition: Bounce,
        //   });
        //   setLoadingIncendio(false)
        // } else {
        if (jimuMapView) {
            try {
                let imagen1 = (_a = selectedImageries[0]) === null || _a === void 0 ? void 0 : _a.OBJECTID;
                if (!imagen1) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warning(t("errorImage"), {
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
                // Construir la URL con los parámetros
                const proceso = 2;
                const entrada = imagen1;
                //Desarrollo
                const response = yield fetch(`http://127.0.0.1:5000/proxy?proceso=${proceso}&Entrada=${entrada}&url=${selectedSensor.url}`, {
                    method: 'GET',
                }).finally(() => {
                    setLoadingIncendio(false);
                });
                ;
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
                    setLoadingIncendio(false);
                }
                const responseData = yield response.json();
                const urlLayer = responseData.PoligonGeoJson;
                yield cargarGeometriaEnMapa(urlLayer, proceso);
                setLoadingIncendio(false);
            }
            catch (error) {
                console.error("Error al cargar la geometría en el mapa:", error);
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
        // }
    });
    const inundacion = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            setLoadingInundacion(true);
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
                setLoadingInundacion(false);
            }
            else {
                if (jimuMapView) {
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
                        method: 'GET',
                    }).finally(() => {
                        setLoadingInundacion(false);
                    });
                    if (!response.ok) {
                        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
                        setLoadingInundacion(false);
                    }
                    const responseData = yield response.json();
                    const urlLayer = responseData.PoligonGeoJson;
                    yield cargarGeometriaEnMapa(urlLayer, proceso);
                    setLoadingInundacion(false);
                }
            }
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
    const cleanLayers = () => {
        if (jimuMapView) {
            const layer = jimuMapView.view.map.allLayers.find(layer => layer.title == t("fireLayer") || layer.title == t("floodLayer"));
            if (layer) {
                jimuMapView.view.map.remove(layer);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        cleanLayers();
    }, [selectedImageries, geoprocess]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "jimu-widget widgetZoneArea" },
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler })),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'zona-riesgo-main-container' },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, null),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'zona-riesgo-container' },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h4", null, t("widgetLabel")),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, t("description"))),
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: 'zona-riesgo-buttons' },
                    loadingIncendio === true ? (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { size: "sm", type: "primary" },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_6__.Loading, { type: "DONUT", height: 20, width: 20 })))
                        :
                            (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: incendio, size: "sm", type: "primary" }, t("incendio"))),
                    loadingInundacion === true ? (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { size: "sm", type: "primary" },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_6__.Loading, { type: "DONUT", height: 20, width: 20 })))
                        :
                            (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: inundacion, size: "sm", type: "primary" }, t("inundacion"))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy96b25hUmllc2dvL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0c7QUFDakI7QUFDckYsOEJBQThCLHNFQUEyQixDQUFDLCtFQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzUUFBc1EsYUFBYSxRQUFRLE9BQU8sV0FBVyxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxZQUFZLFNBQVMsUUFBUSxZQUFZLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxZQUFZLFNBQVMsUUFBUSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxZQUFZLFNBQVMsUUFBUSxZQUFZLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxZQUFZLFNBQVMsUUFBUSxZQUFZLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxTQUFTLFFBQVEsWUFBWSxZQUFZLFNBQVMsUUFBUSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxZQUFZLFNBQVMsUUFBUSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxZQUFZLFNBQVMsUUFBUSxZQUFZLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxZQUFZLFNBQVMsUUFBUSxZQUFZLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxZQUFZLFNBQVMsUUFBUSxZQUFZLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxTQUFTLFFBQVEsWUFBWSxZQUFZLFNBQVMsUUFBUSxZQUFZLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxZQUFZLFNBQVMsUUFBUSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxZQUFZLFNBQVMsUUFBUSxZQUFZLFNBQVMsUUFBUSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxZQUFZLFNBQVMsUUFBUSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxXQUFXLFNBQVMsUUFBUSxZQUFZLFdBQVcsV0FBVyxZQUFZLFlBQVksWUFBWSxXQUFXLFdBQVcsU0FBUyxRQUFRLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxTQUFTLFFBQVEsWUFBWSxZQUFZLFdBQVcsU0FBUyxRQUFRLFlBQVksWUFBWSxXQUFXLFNBQVMsUUFBUSxZQUFZLFlBQVksV0FBVyxTQUFTLFFBQVEsWUFBWSxZQUFZLFdBQVcsU0FBUyxRQUFRLFlBQVksWUFBWSxXQUFXLFNBQVMsUUFBUSxZQUFZLFlBQVksV0FBVyxTQUFTLFFBQVEsWUFBWSxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksV0FBVyxXQUFXLFNBQVMsUUFBUSxXQUFXLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksU0FBUyxRQUFRLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksVUFBVSxLQUFLLFVBQVUsTUFBTSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksVUFBVSxLQUFLLFVBQVUsTUFBTSxXQUFXLFVBQVUsS0FBSyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssVUFBVSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxVQUFVLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLFVBQVUsTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssVUFBVSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxVQUFVLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxpdEVBQWl0RSx1QkFBdUIsR0FBRyxXQUFXLG1DQUFtQyxpQ0FBaUMsaUNBQWlDLG1DQUFtQyxvQ0FBb0MsaUNBQWlDLGtDQUFrQyxrQ0FBa0MseUJBQXlCLG9DQUFvQyxpQ0FBaUMsa0NBQWtDLGtDQUFrQywrQkFBK0IsdUNBQXVDLGlDQUFpQyx1Q0FBdUMsZ0NBQWdDLGtDQUFrQyxrQ0FBa0Ms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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQsSUFBSTtBQUNKO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBVyxRQUFRLGFBQWEsK0NBQStDLE1BQU07QUFDOUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxhQUFhO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWSxNQUFNLE1BQU0scUNBQXFDLDZCQUE2QjtBQUN6SDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0Esa0RBQWtELGtDQUFrQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsWUFBWSxJQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJ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Qiw0REFBQyw0Q0FBTyxJQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFJLENBQ3hDLENBRVY7d0JBQ0MsQ0FBQzs0QkFDRCxDQUNFLDREQUFDLDJDQUFNLElBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxTQUFTLElBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFVLENBQ2pGLENBRUQsQ0FDRixDQUVGLENBQ0YsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsaUVBQWUsTUFBTSxFQUFDO0FBQ2QsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NhbGNpdGUvY2FsY2l0ZS5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3pvbmFSaWVzZ28vc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9lc3JpLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy9jc3MuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9lc3JpLWxvYWRlci9kaXN0L2VzbS91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2VzcmktbG9hZGVyL2Rpc3QvZXNtL3V0aWxzL3VybC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NhbGNpdGUvY2FsY2l0ZS5jc3M/OWMzMCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvem9uYVJpZXNnby9zcmMvcnVudGltZS9hc3NldHMvc3R5bGUuY3NzP2YwYzQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL2hvb2tzL3VzZUxvY2FsZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvem9uYVJpZXNnby9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3dpdGgtc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9kaXN0L3JlYWN0LXJlZHV4Lm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXRvYXN0aWZ5L2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy96b25hUmllc2dvL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6bm90KFtjYWxjaXRlLWh5ZHJhdGVkXSk6aXMoY2FsY2l0ZS1hY2NvcmRpb24sIGNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0sIGNhbGNpdGUtYWN0aW9uLCBjYWxjaXRlLWFjdGlvbi1iYXIsIGNhbGNpdGUtYWN0aW9uLWdyb3VwLCBjYWxjaXRlLWFjdGlvbi1tZW51LCBjYWxjaXRlLWFjdGlvbi1wYWQsIGNhbGNpdGUtYWxlcnQsIGNhbGNpdGUtYXV0b2NvbXBsZXRlLCBjYWxjaXRlLWF1dG9jb21wbGV0ZS1pdGVtLCBjYWxjaXRlLWF1dG9jb21wbGV0ZS1pdGVtLWdyb3VwLCBjYWxjaXRlLWF2YXRhciwgY2FsY2l0ZS1ibG9jaywgY2FsY2l0ZS1ibG9jay1ncm91cCwgY2FsY2l0ZS1ibG9jay1zZWN0aW9uLCBjYWxjaXRlLWJ1dHRvbiwgY2FsY2l0ZS1jYXJkLCBjYWxjaXRlLWNhcmQtZ3JvdXAsIGNhbGNpdGUtY2Fyb3VzZWwsIGNhbGNpdGUtY2Fyb3VzZWwtaXRlbSwgY2FsY2l0ZS1jaGVja2JveCwgY2FsY2l0ZS1jaGlwLCBjYWxjaXRlLWNoaXAtZ3JvdXAsIGNhbGNpdGUtY29sb3ItcGlja2VyLCBjYWxjaXRlLWNvbG9yLXBpY2tlci1oZXgtaW5wdXQsIGNhbGNpdGUtY29sb3ItcGlja2VyLXN3YXRjaCwgY2FsY2l0ZS1jb21ib2JveCwgY2FsY2l0ZS1jb21ib2JveC1pdGVtLCBjYWxjaXRlLWNvbWJvYm94LWl0ZW0tZ3JvdXAsIGNhbGNpdGUtZGF0ZS1waWNrZXIsIGNhbGNpdGUtZGF0ZS1waWNrZXItZGF5LCBjYWxjaXRlLWRhdGUtcGlja2VyLW1vbnRoLCBjYWxjaXRlLWRhdGUtcGlja2VyLW1vbnRoLWhlYWRlciwgY2FsY2l0ZS1kaWFsb2csIGNhbGNpdGUtZHJvcGRvd24sIGNhbGNpdGUtZHJvcGRvd24tZ3JvdXAsIGNhbGNpdGUtZHJvcGRvd24taXRlbSwgY2FsY2l0ZS1mYWIsIGNhbGNpdGUtZmlsdGVyLCBjYWxjaXRlLWZsb3csIGNhbGNpdGUtZmxvdy1pdGVtLCBjYWxjaXRlLWdyYXBoLCBjYWxjaXRlLWhhbmRsZSwgY2FsY2l0ZS1pY29uLCBjYWxjaXRlLWlubGluZS1lZGl0YWJsZSwgY2FsY2l0ZS1pbnB1dCwgY2FsY2l0ZS1pbnB1dC1kYXRlLXBpY2tlciwgY2FsY2l0ZS1pbnB1dC1tZXNzYWdlLCBjYWxjaXRlLWlucHV0LW51bWJlciwgY2FsY2l0ZS1pbnB1dC10ZXh0LCBjYWxjaXRlLWlucHV0LXRpbWUtcGlja2VyLCBjYWxjaXRlLWlucHV0LXRpbWUtem9uZSwgY2FsY2l0ZS1sYWJlbCwgY2FsY2l0ZS1saW5rLCBjYWxjaXRlLWxpc3QsIGNhbGNpdGUtbGlzdC1pdGVtLCBjYWxjaXRlLWxpc3QtaXRlbS1ncm91cCwgY2FsY2l0ZS1sb2FkZXIsIGNhbGNpdGUtbWVudSwgY2FsY2l0ZS1tZW51LWl0ZW0sIGNhbGNpdGUtbWV0ZXIsIGNhbGNpdGUtbW9kYWwsIGNhbGNpdGUtbmF2aWdhdGlvbiwgY2FsY2l0ZS1uYXZpZ2F0aW9uLWxvZ28sIGNhbGNpdGUtbmF2aWdhdGlvbi11c2VyLCBjYWxjaXRlLW5vdGljZSwgY2FsY2l0ZS1vcHRpb24sIGNhbGNpdGUtb3B0aW9uLWdyb3VwLCBjYWxjaXRlLXBhZ2luYXRpb24sIGNhbGNpdGUtcGFuZWwsIGNhbGNpdGUtcG9wb3ZlciwgY2FsY2l0ZS1wcm9ncmVzcywgY2FsY2l0ZS1yYWRpby1idXR0b24sIGNhbGNpdGUtcmFkaW8tYnV0dG9uLWdyb3VwLCBjYWxjaXRlLXJhdGluZywgY2FsY2l0ZS1zY3JpbSwgY2FsY2l0ZS1zZWdtZW50ZWQtY29udHJvbCwgY2FsY2l0ZS1zZWdtZW50ZWQtY29udHJvbC1pdGVtLCBjYWxjaXRlLXNlbGVjdCwgY2FsY2l0ZS1zaGVldCwgY2FsY2l0ZS1zaGVsbCwgY2FsY2l0ZS1zaGVsbC1jZW50ZXItcm93LCBjYWxjaXRlLXNoZWxsLXBhbmVsLCBjYWxjaXRlLXNsaWRlciwgY2FsY2l0ZS1zb3J0LWhhbmRsZSwgY2FsY2l0ZS1zb3J0YWJsZS1saXN0LCBjYWxjaXRlLXNwbGl0LWJ1dHRvbiwgY2FsY2l0ZS1zdGFjaywgY2FsY2l0ZS1zdGVwcGVyLCBjYWxjaXRlLXN0ZXBwZXItaXRlbSwgY2FsY2l0ZS1zd2l0Y2gsIGNhbGNpdGUtdGFiLCBjYWxjaXRlLXRhYi1uYXYsIGNhbGNpdGUtdGFiLXRpdGxlLCBjYWxjaXRlLXRhYmxlLCBjYWxjaXRlLXRhYmxlLWNlbGwsIGNhbGNpdGUtdGFibGUtaGVhZGVyLCBjYWxjaXRlLXRhYmxlLXJvdywgY2FsY2l0ZS10YWJzLCBjYWxjaXRlLXRleHQtYXJlYSwgY2FsY2l0ZS10aWxlLCBjYWxjaXRlLXRpbGUtZ3JvdXAsIGNhbGNpdGUtdGlsZS1zZWxlY3QsIGNhbGNpdGUtdGlsZS1zZWxlY3QtZ3JvdXAsIGNhbGNpdGUtdGltZS1waWNrZXIsIGNhbGNpdGUtdGlwLCBjYWxjaXRlLXRpcC1ncm91cCwgY2FsY2l0ZS10aXAtbWFuYWdlciwgY2FsY2l0ZS10b29sdGlwLCBjYWxjaXRlLXRyZWUsIGNhbGNpdGUtdHJlZS1pdGVtKSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuOnJvb3Qge1xuICAtLWNhbGNpdGUtei1pbmRleC10b29sdGlwOiA5MDE7XG4gIC0tY2FsY2l0ZS16LWluZGV4LXBvcHVwOiA5MDA7XG4gIC0tY2FsY2l0ZS16LWluZGV4LW1vZGFsOiA4MDA7XG4gIC0tY2FsY2l0ZS16LWluZGV4LW92ZXJsYXk6IDcwMDtcbiAgLS1jYWxjaXRlLXotaW5kZXgtZHJvcGRvd246IDYwMDtcbiAgLS1jYWxjaXRlLXotaW5kZXgtdG9hc3Q6IDUwMDtcbiAgLS1jYWxjaXRlLXotaW5kZXgtaGVhZGVyOiA0MDA7XG4gIC0tY2FsY2l0ZS16LWluZGV4LXN0aWNreTogMzAwO1xuICAtLWNhbGNpdGUtei1pbmRleDogMTtcbiAgLS1jYWxjaXRlLXotaW5kZXgtZGVlcDogLTk5OTk5OTtcbiAgLS1jYWxjaXRlLXNwYWNpbmcteHh4bDogMnJlbTtcbiAgLS1jYWxjaXRlLXNwYWNpbmcteHhsOiAxLjVyZW07XG4gIC0tY2FsY2l0ZS1zcGFjaW5nLXhsOiAxLjI1cmVtO1xuICAtLWNhbGNpdGUtc3BhY2luZy1sZzogMXJlbTtcbiAgLS1jYWxjaXRlLXNwYWNpbmctbWQtcGx1czogLjg3NXJlbTtcbiAgLS1jYWxjaXRlLXNwYWNpbmctbWQ6IC43NXJlbTtcbiAgLS1jYWxjaXRlLXNwYWNpbmctc20tcGx1czogLjYyNXJlbTtcbiAgLS1jYWxjaXRlLXNwYWNpbmctc206IC41cmVtO1xuICAtLWNhbGNpdGUtc3BhY2luZy14czogLjM3NXJlbTtcbiAgLS1jYWxjaXRlLXNwYWNpbmcteHhzOiAuMjVyZW07XG4gIC0tY2FsY2l0ZS1zcGFjaW5nLWJhc2U6IDJweDtcbiAgLS1jYWxjaXRlLXNwYWNpbmctcHg6IDFweDtcbiAgLS1jYWxjaXRlLXNwYWNpbmctbm9uZTogMDtcbiAgLS1jYWxjaXRlLXNwYWNpbmctZml4ZWQteHh4bDogMzJweDtcbiAgLS1jYWxjaXRlLXNwYWNpbmctZml4ZWQteHhsOiAyMHB4O1xuICAtLWNhbGNpdGUtc3BhY2luZy1maXhlZC14bDogMTZweDtcbiAgLS1jYWxjaXRlLXNwYWNpbmctZml4ZWQtbGc6IDE0cHg7XG4gIC0tY2FsY2l0ZS1zcGFjaW5nLWZpeGVkLW1kOiAxMnB4O1xuICAtLWNhbGNpdGUtc3BhY2luZy1maXhlZC1zbTogOHB4O1xuICAtLWNhbGNpdGUtc3BhY2luZy1maXhlZC14czogNnB4O1xuICAtLWNhbGNpdGUtc3BhY2luZy1maXhlZC14eHM6IDRweDtcbiAgLS1jYWxjaXRlLXNpemUteHh4bDogNnJlbTtcbiAgLS1jYWxjaXRlLXNpemUteHhsOiA0cmVtO1xuICAtLWNhbGNpdGUtc2l6ZS14bDogM3JlbTtcbiAgLS1jYWxjaXRlLXNpemUtbGc6IDIuNzVyZW07XG4gIC0tY2FsY2l0ZS1zaXplLW1kOiAycmVtO1xuICAtLWNhbGNpdGUtc2l6ZS1zbTogMS41cmVtO1xuICAtLWNhbGNpdGUtc2l6ZS14czogMXJlbTtcbiAgLS1jYWxjaXRlLXNpemUteHhzOiAuODc1cmVtO1xuICAtLWNhbGNpdGUtc2l6ZS14eHhzOiAuNzVyZW07XG4gIC0tY2FsY2l0ZS1zaXplLXB4OiAxcHg7XG4gIC0tY2FsY2l0ZS1zaXplLWZpeGVkLXh4eGw6IDMycHg7XG4gIC0tY2FsY2l0ZS1zaXplLWZpeGVkLXh4bDogMjRweDtcbiAgLS1jYWxjaXRlLXNpemUtZml4ZWQteGw6IDIwcHg7XG4gIC0tY2FsY2l0ZS1zaXplLWZpeGVkLWxnOiAxNnB4O1xuICAtLWNhbGNpdGUtc2l6ZS1maXhlZC1tZC1wbHVzOiAxNHB4O1xuICAtLWNhbGNpdGUtc2l6ZS1maXhlZC1tZDogMTJweDtcbiAgLS1jYWxjaXRlLXNpemUtZml4ZWQtc20tcGx1czogMTBweDtcbiAgLS1jYWxjaXRlLXNpemUtZml4ZWQtc206IDhweDtcbiAgLS1jYWxjaXRlLXNpemUtZml4ZWQteHM6IDZweDtcbiAgLS1jYWxjaXRlLXNpemUtZml4ZWQteHhzOiA0cHg7XG4gIC0tY2FsY2l0ZS1zaXplLWZpeGVkLXh4eHM6IDJweDtcbiAgLS1jYWxjaXRlLW9wYWNpdHktZGlzYWJsZWQ6IC41O1xuICAtLWNhbGNpdGUtb3BhY2l0eS1mdWxsOiAxO1xuICAtLWNhbGNpdGUtb3BhY2l0eS1kYXJrOiAuODU7XG4gIC0tY2FsY2l0ZS1vcGFjaXR5LWhhbGY6IC41O1xuICAtLWNhbGNpdGUtb3BhY2l0eS1saWdodDogLjQ7XG4gIC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS1jYXBpdGFsaXplOiBjYXBpdGFsaXplO1xuICAtLWNhbGNpdGUtZm9udC10ZXh0LWNhc2UtbG93ZXJjYXNlOiBsb3dlcmNhc2U7XG4gIC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS11cHBlcmNhc2U6IHVwcGVyY2FzZTtcbiAgLS1jYWxjaXRlLWZvbnQtdGV4dC1jYXNlLW5vbmU6IG5vbmU7XG4gIC0tY2FsY2l0ZS1mb250LXRleHQtZGVjb3JhdGlvbi11bmRlcmxpbmU6IHVuZGVybGluZTtcbiAgLS1jYWxjaXRlLWZvbnQtdGV4dC1kZWNvcmF0aW9uLW5vbmU6IG5vbmU7XG4gIC0tY2FsY2l0ZS1mb250LXBhcmFncmFwaC1zcGFjaW5nLW5vcm1hbDogNHB4O1xuICAtLWNhbGNpdGUtZm9udC1sZXR0ZXItc3BhY2luZy13aWRlOiAuNDtcbiAgLS1jYWxjaXRlLWZvbnQtbGV0dGVyLXNwYWNpbmctbm9ybWFsOiAwO1xuICAtLWNhbGNpdGUtZm9udC1sZXR0ZXItc3BhY2luZy10aWdodDogLS40O1xuICAtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1sb29zZTogMjtcbiAgLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtcmVsYXhlZDogMS42MjU7XG4gIC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLW5vcm1hbDogMS41O1xuICAtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnOiAxLjM3NTtcbiAgLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtdGlnaHQ6IDEuMjU7XG4gIC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlOiBhdXRvO1xuICAtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC14bDogMjRweDtcbiAgLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtbGc6IDIwcHg7XG4gIC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLWJhc2U6IDE2cHg7XG4gIC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXNtOiAxMnB4O1xuICAtLWNhbGNpdGUtZm9udC1zdHlsZS1lbXBoYXNpczogaXRhbGljO1xuICAtLWNhbGNpdGUtZm9udC1zaXplLXh4bDogMjRweDtcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS14bDogMjBweDtcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZzogMThweDtcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS1tZDogMTZweDtcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZTogMTRweDtcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS1zbTogMTJweDtcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS14czogMTBweDtcbiAgLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWJvbGQ6IDYwMDtcbiAgLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXNlbWlib2xkOiA2MDA7XG4gIC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcbiAgLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcbiAgLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuICAtLWNhbGNpdGUtZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcbiAgLS1jYWxjaXRlLWZvbnQtZmFtaWx5LWNvZGU6IE1vbmFjbywgQ29uc29sYXMsIFwiQW5kYWxlIE1vbm9cIiwgXCJMdWNpZGEgQ29uc29sZVwiLCBtb25vc3BhY2U7XG4gIC0tY2FsY2l0ZS1mb250LWZhbWlseTogXCJBdmVuaXIgTmV4dFwiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgLS1jYWxjaXRlLWNvcm5lci1yYWRpdXMtcGlsbDogMTAwJTtcbiAgLS1jYWxjaXRlLWNvcm5lci1yYWRpdXMtcm91bmQ6IDRweDtcbiAgLS1jYWxjaXRlLWNvcm5lci1yYWRpdXMtc2hhcnA6IDA7XG4gIC0tY2FsY2l0ZS1jb250YWluZXItc2l6ZS1jb250ZW50LWZpeGVkOiAxNDQwcHg7XG4gIC0tY2FsY2l0ZS1jb250YWluZXItc2l6ZS1jb250ZW50LWZsdWlkOiAxMDAlO1xuICAtLWNhbGNpdGUtY29udGFpbmVyLXNpemUtZ3V0dGVyOiAxNnB4O1xuICAtLWNhbGNpdGUtY29udGFpbmVyLXNpemUtbWFyZ2luOiAyNHB4O1xuICAtLWNhbGNpdGUtY29sb3ItYmFja2dyb3VuZC1ub25lOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAtLWNhbGNpdGUtYm9yZGVyLXdpZHRoLWxnOiA0cHg7XG4gIC0tY2FsY2l0ZS1ib3JkZXItd2lkdGgtbWQ6IDJweDtcbiAgLS1jYWxjaXRlLWJvcmRlci13aWR0aC1zbTogMXB4O1xuICAtLWNhbGNpdGUtYm9yZGVyLXdpZHRoLW5vbmU6IDA7XG4gIC0tY2FsY2l0ZS1zaGFkb3ctbWQ6IDAgNHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIC4wOCksIDAgMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjEpO1xuICAtLWNhbGNpdGUtc2hhZG93LXNtOiAwIDJweCA4cHggMCByZ2JhKDAsIDAsIDAsIC4wNCksIDAgNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIC4wOCk7XG4gIC0tY2FsY2l0ZS1zaGFkb3ctbm9uZTogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICAtLWNhbGNpdGUtY29ybmVyLXJhZGl1czogdmFyKC0tY2FsY2l0ZS1jb3JuZXItcmFkaXVzLXNoYXJwKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS1oaWVyYXJjaHktb3ZlcmxpbmUge1xuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXNtKTtcbiAgdGV4dC1jYXNlOiB2YXIoLS1jYWxjaXRlLWZvbnQtdGV4dC1jYXNlLXVwcGVyY2FzZSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWJvbGQpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtYm9sZC1taW51cy0xIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtYm9sZC1taW51cy0yIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXNtKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLWJvbGQtMyB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14eGwpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtYm9sZC0yIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXhsKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLWJvbGQtMSB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZyk7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1ib2xkLTAge1xuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbWQpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtbWVkaXVtLW1pbnVzLTEge1xuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO1xuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtbWVkaXVtLW1pbnVzLTIge1xuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO1xuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXNtKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLW1lZGl1bS0zIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14eGwpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtbWVkaXVtLTIge1xuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO1xuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXhsKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLW1lZGl1bS0xIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZyk7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1tZWRpdW0tMCB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbWQpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtcmVndWxhci1taW51cy0xIHtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLXJlZ3VsYXItbWludXMtMiB7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtc20pO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtcmVndWxhci0zIHtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14eGwpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtcmVndWxhci0yIHtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14bCk7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1yZWd1bGFyLTEge1xuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLWxnKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLXJlZ3VsYXItMCB7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbWQpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtbGlnaHQtbWludXMtMSB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLWxpZ2h0LW1pbnVzLTIge1xuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1saWdodCk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtc20pO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtbGlnaHQtMyB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS10aWdodCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUteHhsKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLWxpZ2h0LTIge1xuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1saWdodCk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUteGwpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtbGlnaHQtMSB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZyk7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1saWdodC0wIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbGlnaHQpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLW1kKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS1ib2xkLTFoIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXhsKTtcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZyk7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktYm9sZC0waCB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC1sZyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbWQpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWJvbGQtbWludXMtMWgge1xuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktYm9sZC1taW51cy0yaCB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1zbSk7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktYm9sZC1taW51cy0zaCB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC1zbSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUteHMpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LW1lZGl1bS0xaCB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQteGwpO1xuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLWxnKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS1tZWRpdW0tMGgge1xuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO1xuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLWxnKTtcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1tZCk7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktbWVkaXVtLW1pbnVzLTFoIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS1tZWRpdW0tbWludXMtMmgge1xuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO1xuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXNtKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS1tZWRpdW0tbWludXMtM2gge1xuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO1xuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXNtKTtcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14cyk7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktcmVndWxhci0xaCB7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQteGwpO1xuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLWxnKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS1yZWd1bGFyLTBoIHtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC1sZyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbWQpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXJlZ3VsYXItbWludXMtMmgge1xuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXNtKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS1yZWd1bGFyLW1pbnVzLTNoIHtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC1zbSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUteHMpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWxpZ2h0LTFoIHtcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZyk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC14bCk7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktbGlnaHQtMGgge1xuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLW1kKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbGlnaHQpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLWxnKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS1saWdodC1taW51cy0xaCB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS1saWdodC1taW51cy0yaCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtc20pO1xuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1saWdodCk7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktbGlnaHQtbWludXMtM2gge1xuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXhzKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbGlnaHQpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXNtKTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jYWxjaXRlLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tY2FsY2l0ZS1mb250LWxldHRlci1zcGFjaW5nLW5vcm1hbCk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtYmFzZSk7XG4gIHBhcmFncmFwaC1zcGFjaW5nOiB2YXIoLS1jYWxjaXRlLWZvbnQtcGFyYWdyYXBoLXNwYWNpbmctbm9ybWFsKTtcbiAgdGV4dC1jYXNlOiB2YXIoLS1jYWxjaXRlLWZvbnQtdGV4dC1jYXNlLW5vbmUpO1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdmFyKC0tY2FsY2l0ZS1mb250LXRleHQtZGVjb3JhdGlvbi1ub25lKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB2YXIoLS1jYWxjaXRlLWZvbnQtdGV4dC1kZWNvcmF0aW9uLW5vbmUpO1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWhpZXJhcmNoeS1jYXB0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktaGllcmFyY2h5LWJvZHkge1xuICBmb250LWZhbWlseTogQXZlbmlyIE5leHQsIEF2ZW5pciwgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYXJhZ3JhcGgtc3BhY2luZzogNHB4O1xuICB0ZXh0LWNhc2U6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS1oaWVyYXJjaHktYm9keS1zbnVnIHtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWhpZXJhcmNoeS1oZWFkaW5nLTUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4zNzU7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktaGllcmFyY2h5LWhlYWRpbmctNCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWhpZXJhcmNoeS1oZWFkaW5nLTMge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4zNzU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS1oaWVyYXJjaHktaGVhZGluZy0yIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktaGllcmFyY2h5LWhlYWRpbmctMSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWhpZXJhcmNoeS1kaXNwbGF5LTIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS4zNzU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNhbGNpdGUtdHlwb2dyYXBoeS1oaWVyYXJjaHktZGlzcGxheS0xIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5jYWxjaXRlLXR5cG9ncmFwaHktcmVndWxhci1taW51cy0xaCB7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIgTmV4dCwgQXZlbmlyLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHBhcmFncmFwaC1zcGFjaW5nOiA0cHg7XG4gIHRleHQtY2FzZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG46cm9vdCB7XG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItd2hpdGU6ICNmZmZmZmY7XG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItZ2hvc3Q6IHJnYmEoMCwgMCwgMCwgLjMpO1xuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLWlucHV0OiAjOTQ5NDk0O1xuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTM6ICNkZmRmZGY7XG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMjogI2Q0ZDRkNDtcbiAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0xOiAjY2FjYWNhO1xuICAtLWNhbGNpdGUtY29sb3ItdGV4dC1saW5rOiAjMDA2MTliO1xuICAtLWNhbGNpdGUtY29sb3ItdGV4dC1pbnZlcnNlOiAjZmZmZmZmO1xuICAtLWNhbGNpdGUtY29sb3ItdGV4dC0zOiAjNmE2YTZhO1xuICAtLWNhbGNpdGUtY29sb3ItdGV4dC0yOiAjNGE0YTRhO1xuICAtLWNhbGNpdGUtY29sb3ItdGV4dC0xOiAjMTUxNTE1O1xuICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZS1wcmVzczogIzIwMjAyMDtcbiAgLS1jYWxjaXRlLWNvbG9yLWludmVyc2UtaG92ZXI6ICMyYjJiMmI7XG4gIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlOiAjMzUzNTM1O1xuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlci1wcmVzczogIzdjMWQxMztcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItaG92ZXI6ICNhODJiMWU7XG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyOiAjZDgzMDIwO1xuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmctcHJlc3M6ICNiZmEyMDA7XG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZy1ob3ZlcjogI2Q5YmMwMDtcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nOiAjZWRkMzE3O1xuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MtcHJlc3M6ICMxYTYzMjQ7XG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1ob3ZlcjogIzI4ODgzNTtcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzOiAjMzVhYzQ2O1xuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8tcHJlc3M6ICMwMDMwNGQ7XG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mby1ob3ZlcjogIzAwNDg3NDtcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvOiAjMDA2MTliO1xuICAtLWNhbGNpdGUtY29sb3ItYnJhbmQtdW5kZXJsaW5lOiByZ2JhKDAsIDk3LCAxNTUsIC40KTtcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXByZXNzOiAjMDA0ODc0O1xuICAtLWNhbGNpdGUtY29sb3ItYnJhbmQtaG92ZXI6ICMwMDYxOWI7XG4gIC0tY2FsY2l0ZS1jb2xvci1icmFuZDogIzAwN2FjMjtcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXRpbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtc2NyaW06IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjg1KTtcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXByZXNzOiByZ2JhKDAsIDAsIDAsIC4wOCk7XG4gIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1ob3ZlcjogcmdiYSgwLCAwLCAwLCAuMDQpO1xuICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLWN1cnJlbnQ6ICNjN2VhZmY7XG4gIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTM6ICNlYWVhZWE7XG4gIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTI6ICNmM2YzZjM7XG4gIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTE6ICNmZmZmZmY7XG4gIC0tY2FsY2l0ZS1jb2xvci1iYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAtLWNhbGNpdGUtY29sb3ItZm9jdXM6ICMwMDdhYzI7XG59XG5cbi5jYWxjaXRlLW1vZGUtbGlnaHQge1xuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLXdoaXRlOiAjZmZmZmZmO1xuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLWdob3N0OiByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci1pbnB1dDogIzk0OTQ5NDtcbiAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0zOiAjZGZkZmRmO1xuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTI6ICNkNGQ0ZDQ7XG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMTogI2NhY2FjYTtcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtbGluazogIzAwNjE5YjtcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtaW52ZXJzZTogI2ZmZmZmZjtcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMzogIzZhNmE2YTtcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMjogIzRhNGE0YTtcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMTogIzE1MTUxNTtcbiAgLS1jYWxjaXRlLWNvbG9yLWludmVyc2UtcHJlc3M6ICMyMDIwMjA7XG4gIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlLWhvdmVyOiAjMmIyYjJiO1xuICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZTogIzM1MzUzNTtcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItcHJlc3M6ICM3YzFkMTM7XG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyLWhvdmVyOiAjYTgyYjFlO1xuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlcjogI2Q4MzAyMDtcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nLXByZXNzOiAjYmZhMjAwO1xuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmctaG92ZXI6ICNkOWJjMDA7XG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZzogI2VkZDMxNztcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzLXByZXNzOiAjMWE2MzI0O1xuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MtaG92ZXI6ICMyODg4MzU7XG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2VzczogIzM1YWM0NjtcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvLXByZXNzOiAjMDAzMDRkO1xuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8taG92ZXI6ICMwMDQ4NzQ7XG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mbzogIzAwNjE5YjtcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXVuZGVybGluZTogcmdiYSgwLCA5NywgMTU1LCAuNCk7XG4gIC0tY2FsY2l0ZS1jb2xvci1icmFuZC1wcmVzczogIzAwNDg3NDtcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLWhvdmVyOiAjMDA2MTliO1xuICAtLWNhbGNpdGUtY29sb3ItYnJhbmQ6ICMwMDdhYzI7XG4gIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC10aW50OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXNjcmltOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44NSk7XG4gIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1wcmVzczogcmdiYSgwLCAwLCAwLCAuMDgpO1xuICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtaG92ZXI6IHJnYmEoMCwgMCwgMCwgLjA0KTtcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDAsIDAsIDAsIDApO1xuICAtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC1jdXJyZW50OiAjYzdlYWZmO1xuICAtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0zOiAjZWFlYWVhO1xuICAtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yOiAjZjNmM2YzO1xuICAtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0xOiAjZmZmZmZmO1xuICAtLWNhbGNpdGUtY29sb3ItYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgLS1jYWxjaXRlLWNvbG9yLWZvY3VzOiAjMDA3YWMyO1xufVxuXG4uY2FsY2l0ZS1tb2RlLWRhcmsge1xuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLXdoaXRlOiAjZjhmOGY4O1xuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLWdob3N0OiByZ2JhKDExNywgMTE3LCAxMTcsIC4zKTtcbiAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci1pbnB1dDogIzc1NzU3NTtcbiAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0zOiAjNDA0MDQwO1xuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTI6ICM0YTRhNGE7XG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMTogIzU1NTU1NTtcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtbGluazogIzAwYTBmZjtcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtaW52ZXJzZTogIzE1MTUxNTtcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMzogIzlmOWY5ZjtcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMjogI2JmYmZiZjtcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMTogI2ZmZmZmZjtcbiAgLS1jYWxjaXRlLWNvbG9yLWludmVyc2UtcHJlc3M6ICNmM2YzZjM7XG4gIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlLWhvdmVyOiAjZmZmZmZmO1xuICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZTogI2Y4ZjhmODtcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItcHJlc3M6ICNkOTAwMTI7XG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyLWhvdmVyOiAjZmYwMDE1O1xuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlcjogI2ZlNTgzZTtcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nLXByZXNzOiAjZjVkMDAwO1xuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmctaG92ZXI6ICNmZmVlMzM7XG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZzogI2ZmYzkwMDtcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzLXByZXNzOiAjMDBiODFiO1xuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MtaG92ZXI6ICMzYmVkNTI7XG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2VzczogIzM2ZGE0MztcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvLXByZXNzOiAjMDA5YWYyO1xuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8taG92ZXI6ICMzZGI4ZmY7XG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mbzogIzAwYTBmZjtcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXVuZGVybGluZTogcmdiYSgwLCAxNjAsIDI1NSwgLjQpO1xuICAtLWNhbGNpdGUtY29sb3ItYnJhbmQtcHJlc3M6ICMwMDYxOWI7XG4gIC0tY2FsY2l0ZS1jb2xvci1icmFuZC1ob3ZlcjogIzAwN2FjMjtcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kOiAjMDA5YWYyO1xuICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtdGludDogcmdiYSg0MywgNDMsIDQzLCAuOCk7XG4gIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1zY3JpbTogcmdiYSgwLCAwLCAwLCAuODUpO1xuICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtcHJlc3M6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA4KTtcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNCk7XG4gIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtY3VycmVudDogIzIxNDE1NTtcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMzogIzE1MTUxNTtcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMjogIzIwMjAyMDtcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMTogIzJiMmIyYjtcbiAgLS1jYWxjaXRlLWNvbG9yLWJhY2tncm91bmQ6ICMzNTM1MzU7XG4gIC0tY2FsY2l0ZS1jb2xvci1mb2N1czogIzAwOWFmMjtcbn1cblxuOnJvb3Qge1xuICAtLWNhbGNpdGUtY29kZS1mYW1pbHk6IFwiQ29uc29sYXNcIiwgXCJBbmRhbGUgTW9ub1wiLCBcIkx1Y2lkYSBDb25zb2xlXCIsIFwiTW9uYWNvXCIsIG1vbm9zcGFjZTtcbiAgLS1jYWxjaXRlLXNhbnMtZmFtaWx5OiBcIkF2ZW5pciBOZXh0XCIsIFwiQXZlbmlyXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMzogLjYyNXJlbTtcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMjogLjc1cmVtO1xuICAtLWNhbGNpdGUtZm9udC1zaXplLS0xOiAuODc1cmVtO1xuICAtLWNhbGNpdGUtZm9udC1zaXplLTA6IDFyZW07XG4gIC0tY2FsY2l0ZS1mb250LXNpemUtMTogMS4xMjVyZW07XG4gIC0tY2FsY2l0ZS1mb250LXNpemUtMjogMS4yNXJlbTtcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS0zOiAxLjYyNXJlbTtcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS00OiAycmVtO1xuICAtLWNhbGNpdGUtZm9udC1zaXplLTU6IDIuNXJlbTtcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS02OiAzcmVtO1xuICAtLWNhbGNpdGUtZm9udC1zaXplLTc6IDMuNXJlbTtcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS04OiA0cmVtO1xuICAtLWNhbGNpdGUtZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcbiAgLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuICAtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XG4gIC0tY2FsY2l0ZS1mb250LXdlaWdodC1ib2xkOiA2MDA7XG4gIC0tY2FsY2l0ZS11aS1icmFuZDogdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZCk7XG4gIC0tY2FsY2l0ZS11aS1icmFuZC1ob3ZlcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZC1ob3Zlcik7XG4gIC0tY2FsY2l0ZS11aS1icmFuZC1wcmVzczogdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZC1wcmVzcyk7XG4gIC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWJhY2tncm91bmQpO1xuICAtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMSk7XG4gIC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTI6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yKTtcbiAgLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMzogdmFyKC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTMpO1xuICAtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50OiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtY3VycmVudCk7XG4gIC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0OiB2YXIoLS1jYWxjaXRlLW9mZnNldC1pbnZlcnQtZm9jdXMpO1xuICAtLWNhbGNpdGUtc2VtYW50aWMtdWktY29sb3ItZm9yZWdyb3VuZC1jdXJyZW50OiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtY3VycmVudCk7XG4gIC0tY2FsY2l0ZS11aS10ZXh0LTE6IHZhcigtLWNhbGNpdGUtY29sb3ItdGV4dC0xKTtcbiAgLS1jYWxjaXRlLXVpLXRleHQtMjogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LTIpO1xuICAtLWNhbGNpdGUtdWktdGV4dC0zOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXRleHQtMyk7XG4gIC0tY2FsY2l0ZS11aS10ZXh0LWludmVyc2U6IHZhcigtLWNhbGNpdGUtY29sb3ItdGV4dC1pbnZlcnNlKTtcbiAgLS1jYWxjaXRlLXVpLXRleHQtbGluazogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LWxpbmspO1xuICAtLWNhbGNpdGUtdWktYm9yZGVyLTE6IHZhcigtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTEpO1xuICAtLWNhbGNpdGUtdWktYm9yZGVyLTI6IHZhcigtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTIpO1xuICAtLWNhbGNpdGUtdWktYm9yZGVyLTM6IHZhcigtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTMpO1xuICAtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0OiB2YXIoLS1jYWxjaXRlLWNvbG9yLWJvcmRlci1pbnB1dCk7XG4gIC0tY2FsY2l0ZS11aS1pbmZvOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvKTtcbiAgLS1jYWxjaXRlLXVpLWluZm8taG92ZXI6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8taG92ZXIpO1xuICAtLWNhbGNpdGUtdWktaW5mby1wcmVzczogdmFyKC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mby1wcmVzcyk7XG4gIC0tY2FsY2l0ZS11aS1zdWNjZXNzOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzKTtcbiAgLS1jYWxjaXRlLXVpLXN1Y2Nlc3MtaG92ZXI6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MtaG92ZXIpO1xuICAtLWNhbGNpdGUtdWktc3VjY2Vzcy1wcmVzczogdmFyKC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1wcmVzcyk7XG4gIC0tY2FsY2l0ZS11aS13YXJuaW5nOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nKTtcbiAgLS1jYWxjaXRlLXVpLXdhcm5pbmctaG92ZXI6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmctaG92ZXIpO1xuICAtLWNhbGNpdGUtdWktd2FybmluZy1wcmVzczogdmFyKC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZy1wcmVzcyk7XG4gIC0tY2FsY2l0ZS11aS1kYW5nZXI6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlcik7XG4gIC0tY2FsY2l0ZS11aS1kYW5nZXItaG92ZXI6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlci1ob3Zlcik7XG4gIC0tY2FsY2l0ZS11aS1kYW5nZXItcHJlc3M6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlci1wcmVzcyk7XG4gIC0tY2FsY2l0ZS11aS1pbnZlcnNlOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWludmVyc2UpO1xuICAtLWNhbGNpdGUtYXBwLXotaW5kZXg6IHZhcigtLWNhbGNpdGUtei1pbmRleCk7XG4gIC0tY2FsY2l0ZS1hcHAtei1pbmRleC10b29sdGlwOiB2YXIoLS1jYWxjaXRlLXotaW5kZXgtdG9vbHRpcCk7XG4gIC0tY2FsY2l0ZS1hcHAtei1pbmRleC1wb3B1cDogdmFyKC0tY2FsY2l0ZS16LWluZGV4LXBvcHVwKTtcbiAgLS1jYWxjaXRlLWFwcC16LWluZGV4LW1vZGFsOiB2YXIoLS1jYWxjaXRlLXotaW5kZXgtbW9kYWwpO1xuICAtLWNhbGNpdGUtYXBwLXotaW5kZXgtb3ZlcmxheTogdmFyKC0tY2FsY2l0ZS16LWluZGV4LW92ZXJsYXkpO1xuICAtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd246IHZhcigtLWNhbGNpdGUtei1pbmRleC1kcm9wZG93bik7XG4gIC0tY2FsY2l0ZS1hcHAtei1pbmRleC10b2FzdDogdmFyKC0tY2FsY2l0ZS16LWluZGV4LXRvYXN0KTtcbiAgLS1jYWxjaXRlLWFwcC16LWluZGV4LWhlYWRlcjogdmFyKC0tY2FsY2l0ZS16LWluZGV4LWhlYWRlcik7XG4gIC0tY2FsY2l0ZS1hcHAtei1pbmRleC1zdGlja3k6IHZhcigtLWNhbGNpdGUtei1pbmRleC1zdGlja3kpO1xuICAtLWNhbGNpdGUtYXBwLWJyZWFrcG9pbnQtY29udGVudC1maXhlZDogdmFyKC0tY2FsY2l0ZS1jb250YWluZXItc2l6ZS1jb250ZW50LWZpeGVkKTtcbiAgLS1jYWxjaXRlLWFwcC1icmVha3BvaW50LWNvbnRlbnQtZmx1aWQ6IHZhcigtLWNhbGNpdGUtY29udGFpbmVyLXNpemUtY29udGVudC1mbHVpZCk7XG4gIC0tY2FsY2l0ZS1hcHAtYnJlYWtwb2ludC13aWR0aC1sZzogdmFyKC0tY2FsY2l0ZS1jb250YWluZXItc2l6ZS13aWR0aC1sZy1tYXgpO1xuICAtLWNhbGNpdGUtYXBwLWJyZWFrcG9pbnQtd2lkdGgtbWQ6IHZhcigtLWNhbGNpdGUtY29udGFpbmVyLXNpemUtd2lkdGgtbWQtbWF4KTtcbiAgLS1jYWxjaXRlLWFwcC1icmVha3BvaW50LXdpZHRoLXNtOiB2YXIoLS1jYWxjaXRlLWNvbnRhaW5lci1zaXplLXdpZHRoLXNtLW1heCk7XG4gIC0tY2FsY2l0ZS1hcHAtYnJlYWtwb2ludC13aWR0aC14czogdmFyKC0tY2FsY2l0ZS1jb250YWluZXItc2l6ZS13aWR0aC14cy1tYXgpO1xuICAtLWNhbGNpdGUtYXBwLWJyZWFrcG9pbnQtd2lkdGgteHhzOiB2YXIoLS1jYWxjaXRlLWNvbnRhaW5lci1zaXplLXdpZHRoLXh4cy1tYXgpO1xuICAtLWNhbGNpdGUtYXBwLXNwYWNpbmctMTE6IHZhcigtLWNhbGNpdGUtc3BhY2luZy14eHhsKTtcbiAgLS1jYWxjaXRlLWFwcC1zcGFjaW5nLTg6IHZhcigtLWNhbGNpdGUtc3BhY2luZy14bCk7XG4gIC0tY2FsY2l0ZS1hcHAtc3BhY2luZy03OiB2YXIoLS1jYWxjaXRlLXNwYWNpbmctbGcpO1xuICAtLWNhbGNpdGUtYXBwLXNwYWNpbmctNjogdmFyKC0tY2FsY2l0ZS1zcGFjaW5nLW1kLXBsdXMpO1xuICAtLWNhbGNpdGUtYXBwLXNwYWNpbmctNTogdmFyKC0tY2FsY2l0ZS1zcGFjaW5nLW1kKTtcbiAgLS1jYWxjaXRlLWFwcC1zcGFjaW5nLTM6IHZhcigtLWNhbGNpdGUtc3BhY2luZy1zbSk7XG4gIC0tY2FsY2l0ZS1hcHAtc3BhY2luZy0yOiB2YXIoLS1jYWxjaXRlLXNwYWNpbmcteHMpO1xuICAtLWNhbGNpdGUtYXBwLXNwYWNpbmctMTogdmFyKC0tY2FsY2l0ZS1zcGFjaW5nLXh4cyk7XG4gIC0tY2FsY2l0ZS1hcHAtc3BhY2luZy0wOiB2YXIoLS1jYWxjaXRlLXNwYWNpbmctYmFzZSk7XG4gIC0tY2FsY2l0ZS1hcHAtc2l6aW5nLTExOiB2YXIoLS1jYWxjaXRlLXNpemUtbWQpO1xuICAtLWNhbGNpdGUtYXBwLXNpemluZy05OiB2YXIoLS1jYWxjaXRlLXNpemUtc20pO1xuICAtLWNhbGNpdGUtYXBwLXNpemluZy04OiB2YXIoLS1jYWxjaXRlLXNwYWNpbmcteGwpO1xuICAtLWNhbGNpdGUtYXBwLXNpemluZy03OiB2YXIoLS1jYWxjaXRlLXNpemUteHMpO1xuICAtLWNhbGNpdGUtYXBwLXNpemluZy02OiB2YXIoLS1jYWxjaXRlLXNpemUteHh4cy1wbHVzKTtcbiAgLS1jYWxjaXRlLWFwcC1zaXppbmctNTogdmFyKC0tY2FsY2l0ZS1zaXplLXh4eHMpO1xuICAtLWNhbGNpdGUtYXBwLXNpemluZy00OiB2YXIoLS1jYWxjaXRlLXNwYWNpbmctc20tcGx1cyk7XG4gIC0tY2FsY2l0ZS1hcHAtc2l6aW5nLTM6IHZhcigtLWNhbGNpdGUtc3BhY2luZy1zbSk7XG4gIC0tY2FsY2l0ZS1hcHAtc2l6aW5nLTI6IHZhcigtLWNhbGNpdGUtc3BhY2luZy14cyk7XG4gIC0tY2FsY2l0ZS1hcHAtc2l6aW5nLTE6IHZhcigtLWNhbGNpdGUtc3BhY2luZy14eHMpO1xuICAtLWNhbGNpdGUtYXBwLXNpemluZy0wOiB2YXIoLS1jYWxjaXRlLXNwYWNpbmctYmFzZSk7XG4gIC0tY2FsY2l0ZS1hcHAtb3BhY2l0eS0xMDA6IHZhcigtLWNhbGNpdGUtYXBwLW9wYWNpdHktZnVsbCk7XG4gIC0tY2FsY2l0ZS1hcHAtb3BhY2l0eS04NTogdmFyKC0tY2FsY2l0ZS1hcHAtb3BhY2l0eS1kYXJrKTtcbiAgLS1jYWxjaXRlLWFwcC1vcGFjaXR5LTUwOiB2YXIoLS1jYWxjaXRlLWFwcC1vcGFjaXR5LWhhbGYpO1xuICAtLWNhbGNpdGUtYXBwLW9wYWNpdHktNDA6IHZhcigtLWNhbGNpdGUtYXBwLW9wYWNpdHktbGlnaHQpO1xuICAtLWNhbGNpdGUtYXBwLWJvcmRlci13aWR0aC1ub25lOiB2YXIoLS1jYWxjaXRlLWJvcmRlci13aWR0aC1ub25lKTtcbiAgLS1jYWxjaXRlLWFwcC1ib3JkZXItd2lkdGgtMjogdmFyKC0tY2FsY2l0ZS1ib3JkZXItd2lkdGgtbGcpO1xuICAtLWNhbGNpdGUtYXBwLWJvcmRlci13aWR0aC0xOiB2YXIoLS1jYWxjaXRlLWJvcmRlci13aWR0aC1tZCk7XG4gIC0tY2FsY2l0ZS1hcHAtYm9yZGVyLXdpZHRoLTA6IHZhcigtLWNhbGNpdGUtYm9yZGVyLXdpZHRoLXNtKTtcbiAgLS1jYWxjaXRlLWFwcC1ib3JkZXItcmFkaXVzLWZ1bGw6IHZhcigtLWNhbGNpdGUtY29ybmVyLXJhZGl1cy1waWxsKTtcbiAgLS1jYWxjaXRlLWFwcC1ib3JkZXItcmFkaXVzLW5vbmU6IHZhcigtLWNhbGNpdGUtY29ybmVyLXJhZGl1cy1zaGFycCk7XG4gIC0tY2FsY2l0ZS1hcHAtYm9yZGVyLXJhZGl1cy0xOiB2YXIoLS1jYWxjaXRlLWNvcm5lci1yYWRpdXMtcm91bmQpO1xuICAtLWNhbGNpdGUtYXBwLWJvcmRlci1yYWRpdXMtMDogdmFyKC0tY2FsY2l0ZS1jb3JuZXItcmFkaXVzLTApO1xuICAtLWNhbGNpdGUtYXBwLWZvbnQtdGV4dC1jYXNlLWNhcGl0YWxpemU6IHZhcigtLWNhbGNpdGUtZm9udC10ZXh0LWNhc2UtY2FwaXRhbGl6ZSk7XG4gIC0tY2FsY2l0ZS1hcHAtZm9udC10ZXh0LWNhc2UtbG93ZXJjYXNlOiB2YXIoLS1jYWxjaXRlLWZvbnQtdGV4dC1jYXNlLWxvd2VyY2FzZSk7XG4gIC0tY2FsY2l0ZS1hcHAtZm9udC10ZXh0LWNhc2UtdXBwZXJjYXNlOiB2YXIoLS1jYWxjaXRlLWZvbnQtdGV4dC1jYXNlLXVwcGVyY2FzZSk7XG4gIC0tY2FsY2l0ZS1hcHAtZm9udC10ZXh0LWNhc2Utbm9uZTogdmFyKC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS1ub25lKTtcbiAgLS1jYWxjaXRlLWFwcC1mb250LXRleHQtZGVjb3JhdGlvbi11bmRlcmxpbmU6IHZhcigtLWNhbGNpdGUtZm9udC10ZXh0LWRlY29yYXRpb24tdW5kZXJsaW5lKTtcbiAgLS1jYWxjaXRlLWFwcC1mb250LXRleHQtZGVjb3JhdGlvbi1ub25lOiB2YXIoLS1jYWxjaXRlLWZvbnQtdGV4dC1kZWNvcmF0aW9uLW5vbmUpO1xuICAtLWNhbGNpdGUtYXBwLWZvbnQtcGFyYWdyYXBoLXNwYWNpbmctbm9ybWFsOiB2YXIoLS1jYWxjaXRlLWZvbnQtcGFyYWdyYXBoLXNwYWNpbmctbm9ybWFsKTtcbiAgLS1jYWxjaXRlLWFwcC1mb250LWxldHRlci1zcGFjaW5nLXdpZGU6IHZhcigtLWNhbGNpdGUtZm9udC1sZXR0ZXItc3BhY2luZy13aWRlKTtcbiAgLS1jYWxjaXRlLWFwcC1mb250LWxldHRlci1zcGFjaW5nLW5vcm1hbDogdmFyKC0tY2FsY2l0ZS1mb250LWxldHRlci1zcGFjaW5nLW5vcm1hbCk7XG4gIC0tY2FsY2l0ZS1hcHAtZm9udC1sZXR0ZXItc3BhY2luZy10aWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxldHRlci1zcGFjaW5nLXRpZ2h0KTtcbiAgLS1jYWxjaXRlLWFwcC1mb250LXNpemUtNjogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUteHhsKTtcbiAgLS1jYWxjaXRlLWFwcC1mb250LXNpemUtNTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUteGwpO1xuICAtLWNhbGNpdGUtYXBwLWZvbnQtc2l6ZS00OiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZyk7XG4gIC0tY2FsY2l0ZS1hcHAtZm9udC1zaXplLTM6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLW1kKTtcbiAgLS1jYWxjaXRlLWFwcC1mb250LXNpemUtMjogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUpO1xuICAtLWNhbGNpdGUtYXBwLWZvbnQtc2l6ZS0xOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1zbSk7XG4gIC0tY2FsY2l0ZS1hcHAtZm9udC1zaXplLTA6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXhzKTtcbiAgLS1jYWxjaXRlLWFwcC1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLWxvb3NlOiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtbG9vc2UpO1xuICAtLWNhbGNpdGUtYXBwLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtcmVsYXhlZDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXJlbGF4ZWQpO1xuICAtLWNhbGNpdGUtYXBwLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtbm9ybWFsOiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtbm9ybWFsKTtcbiAgLS1jYWxjaXRlLWFwcC1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWc6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcbiAgLS1jYWxjaXRlLWFwcC1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXRpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtdGlnaHQpO1xuICAtLWNhbGNpdGUtYXBwLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmU6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZSk7XG4gIC0tY2FsY2l0ZS1hcHAtZm9udC1saW5lLWhlaWdodC1maXhlZC0zOiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQteGwpO1xuICAtLWNhbGNpdGUtYXBwLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtMjogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLWxnKTtcbiAgLS1jYWxjaXRlLWFwcC1mb250LWxpbmUtaGVpZ2h0LWZpeGVkOiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtc20pO1xuICAtLWNhbGNpdGUtYXBwLWZvbnQtd2VpZ2h0LWJvbGQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtYm9sZCk7XG4gIC0tY2FsY2l0ZS1hcHAtZm9udC13ZWlnaHQtZGVtaTogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gIC0tY2FsY2l0ZS1hcHAtZm9udC13ZWlnaHQtbWVkaXVtOiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gIC0tY2FsY2l0ZS1hcHAtZm9udC13ZWlnaHQtcmVndWxhcjogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgLS1jYWxjaXRlLWFwcC1mb250LXdlaWdodC1saWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1saWdodCk7XG4gIC0tY2FsY2l0ZS1hcHAtZm9udC1mYW1pbHktY29kZTogdmFyKC0tY2FsY2l0ZS1mb250LWZhbWlseS1jb2RlKTtcbiAgLS1jYWxjaXRlLWFwcC1mb250LWZhbWlseS1wcmltYXJ5OiB2YXIoLS1jYWxjaXRlLWZvbnQtZmFtaWx5LXByaW1hcnkpO1xuICAtLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjogdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTtcbiAgLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6IHZhcigtLWNhbGNpdGUtei1pbmRleC1kcm9wZG93bik7XG4gIC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOiBjYWxjKC4xNXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpO1xuICAtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOiB2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7XG4gIC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6IGNhbGMoLjFzICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTtcbiAgLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOiBjYWxjKC4ycyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7XG4gIC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6IGNhbGMoLjNzICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTtcbiAgLS1jYWxjaXRlLXBvcG92ZXItei1pbmRleDogdmFyKC0tY2FsY2l0ZS16LWluZGV4LXBvcHVwKTtcbiAgLS1jYWxjaXRlLWJvcmRlci1yYWRpdXM6IHZhcigtLWNhbGNpdGUtYm9yZGVyLXJhZGl1cy1yb3VuZCwgNHB4KTtcbiAgLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMtYmFzZTogMDtcbiAgLS1jYWxjaXRlLW9mZnNldC1pbnZlcnQtZm9jdXM6IDA7XG4gIC0tY2FsY2l0ZS1wYW5lbC13aWR0aC1tdWx0aXBsaWVyOiAxO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNhbGNpdGUtZm9udC1mYW1pbHkpO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIC5jYWxjaXRlLW1vZGUtYXV0byB7XG4gICAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci13aGl0ZTogI2Y4ZjhmODtcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLWdob3N0OiByZ2JhKDExNywgMTE3LCAxMTcsIC4zKTtcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLWlucHV0OiAjNzU3NTc1O1xuICAgIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMzogIzQwNDA0MDtcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTI6ICM0YTRhNGE7XG4gICAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0xOiAjNTU1NTU1O1xuICAgIC0tY2FsY2l0ZS1jb2xvci10ZXh0LWxpbms6ICMwMGEwZmY7XG4gICAgLS1jYWxjaXRlLWNvbG9yLXRleHQtaW52ZXJzZTogIzE1MTUxNTtcbiAgICAtLWNhbGNpdGUtY29sb3ItdGV4dC0zOiAjOWY5ZjlmO1xuICAgIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTI6ICNiZmJmYmY7XG4gICAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMTogI2ZmZmZmZjtcbiAgICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZS1wcmVzczogI2YzZjNmMztcbiAgICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZS1ob3ZlcjogI2ZmZmZmZjtcbiAgICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZTogI2Y4ZjhmODtcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlci1wcmVzczogI2Q5MDAxMjtcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlci1ob3ZlcjogI2ZmMDAxNTtcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlcjogI2ZlNTgzZTtcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmctcHJlc3M6ICNmNWQwMDA7XG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nLWhvdmVyOiAjZmZlZTMzO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZzogI2ZmYzkwMDtcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MtcHJlc3M6ICMwMGI4MWI7XG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzLWhvdmVyOiAjM2JlZDUyO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2VzczogIzM2ZGE0MztcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8tcHJlc3M6ICMwMDlhZjI7XG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvLWhvdmVyOiAjM2RiOGZmO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mbzogIzAwYTBmZjtcbiAgICAtLWNhbGNpdGUtY29sb3ItYnJhbmQtdW5kZXJsaW5lOiByZ2JhKDAsIDE2MCwgMjU1LCAuNCk7XG4gICAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXByZXNzOiAjMDA2MTliO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1icmFuZC1ob3ZlcjogIzAwN2FjMjtcbiAgICAtLWNhbGNpdGUtY29sb3ItYnJhbmQ6ICMwMDlhZjI7XG4gICAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXRpbnQ6IHJnYmEoNDMsIDQzLCA0MywgLjgpO1xuICAgIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1zY3JpbTogcmdiYSgwLCAwLCAwLCAuODUpO1xuICAgIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1wcmVzczogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDgpO1xuICAgIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDQpO1xuICAgIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICAtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC1jdXJyZW50OiAjMjE0MTU1O1xuICAgIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTM6ICMxNTE1MTU7XG4gICAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMjogIzIwMjAyMDtcbiAgICAtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0xOiAjMmIyYjJiO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1iYWNrZ3JvdW5kOiAjMzUzNTM1O1xuICAgIC0tY2FsY2l0ZS1jb2xvci1mb2N1czogIzAwOWFmMjtcbiAgfVxufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcbiAgLmNhbGNpdGUtbW9kZS1hdXRvIHtcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLXdoaXRlOiAjZmZmZmZmO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItZ2hvc3Q6IHJnYmEoMCwgMCwgMCwgLjMpO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItaW5wdXQ6ICM5NDk0OTQ7XG4gICAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0zOiAjZGZkZmRmO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMjogI2Q0ZDRkNDtcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTE6ICNjYWNhY2E7XG4gICAgLS1jYWxjaXRlLWNvbG9yLXRleHQtbGluazogIzAwNjE5YjtcbiAgICAtLWNhbGNpdGUtY29sb3ItdGV4dC1pbnZlcnNlOiAjZmZmZmZmO1xuICAgIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTM6ICM2YTZhNmE7XG4gICAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMjogIzRhNGE0YTtcbiAgICAtLWNhbGNpdGUtY29sb3ItdGV4dC0xOiAjMTUxNTE1O1xuICAgIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlLXByZXNzOiAjMjAyMDIwO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlLWhvdmVyOiAjMmIyYjJiO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlOiAjMzUzNTM1O1xuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyLXByZXNzOiAjN2MxZDEzO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyLWhvdmVyOiAjYTgyYjFlO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyOiAjZDgzMDIwO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZy1wcmVzczogI2JmYTIwMDtcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmctaG92ZXI6ICNkOWJjMDA7XG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nOiAjZWRkMzE3O1xuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1wcmVzczogIzFhNjMyNDtcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MtaG92ZXI6ICMyODg4MzU7XG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzOiAjMzVhYzQ2O1xuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mby1wcmVzczogIzAwMzA0ZDtcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8taG92ZXI6ICMwMDQ4NzQ7XG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvOiAjMDA2MTliO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1icmFuZC11bmRlcmxpbmU6IHJnYmEoMCwgOTcsIDE1NSwgLjQpO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1icmFuZC1wcmVzczogIzAwNDg3NDtcbiAgICAtLWNhbGNpdGUtY29sb3ItYnJhbmQtaG92ZXI6ICMwMDYxOWI7XG4gICAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kOiAjMDA3YWMyO1xuICAgIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC10aW50OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcbiAgICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtc2NyaW06IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjg1KTtcbiAgICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtcHJlc3M6IHJnYmEoMCwgMCwgMCwgLjA4KTtcbiAgICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtaG92ZXI6IHJnYmEoMCwgMCwgMCwgLjA0KTtcbiAgICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtY3VycmVudDogI2M3ZWFmZjtcbiAgICAtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0zOiAjZWFlYWVhO1xuICAgIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTI6ICNmM2YzZjM7XG4gICAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMTogI2ZmZmZmZjtcbiAgICAtLWNhbGNpdGUtY29sb3ItYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAtLWNhbGNpdGUtY29sb3ItZm9jdXM6ICMwMDdhYzI7XG4gIH1cbn1cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIDpyb290IHtcbiAgICAtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaW4tZG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTVweCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGluLXVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCA1cHgsIDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBpbi1yaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoLTVweCwgMCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGluLWxlZnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDVweCwgMCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGluLXNjYWxlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNEKDAuOTUsIDAuOTUsIDEpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGVaKDEpO1xuICB9XG59XG4uY2FsY2l0ZS1hbmltYXRlIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpO1xufVxuXG4uY2FsY2l0ZS1hbmltYXRlX19pbiB7XG4gIGFuaW1hdGlvbi1uYW1lOiBpbjtcbn1cblxuLmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93biB7XG4gIGFuaW1hdGlvbi1uYW1lOiBpbi1kb3duO1xufVxuXG4uY2FsY2l0ZS1hbmltYXRlX19pbi11cCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBpbi11cDtcbn1cblxuLmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHQge1xuICBhbmltYXRpb24tbmFtZTogaW4tcmlnaHQ7XG59XG5cbi5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnQge1xuICBhbmltYXRpb24tbmFtZTogaW4tbGVmdDtcbn1cblxuLmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGUge1xuICBhbmltYXRpb24tbmFtZTogaW4tc2NhbGU7XG59XG5cbi5jYWxjaXRlLXNvcnRhYmxlLS1jaG9zZW4sIC5jYWxjaXRlLXNvcnRhYmxlLS1naG9zdCwgLmNhbGNpdGUtc29ydGFibGUtLWRyYWcsIC5jYWxjaXRlLXNvcnRhYmxlLS1mYWxsYmFjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhbGNpdGUtc29ydGFibGUtLWdob3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQtYmxvY2s6IDBweDtcbiAgaW5zZXQtaW5saW5lLXN0YXJ0OiAwcHg7XG4gIGluc2V0LWlubGluZS1lbmQ6IDBweDtcbiAgei1pbmRleDogdmFyKC0tY2FsY2l0ZS16LWluZGV4KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItYnJhbmQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMik7XG59XG5cbi5jYWxjaXRlLXNvcnRhYmxlLS1kcmFnIHtcbiAgLS10dy1zaGFkb3c6IDAgNnB4IDIwcHggLTRweCByZ2JhKDAsIDAsIDAsIC4xKSwgMCA0cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjA4KTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCA2cHggMjBweCAtNHB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgNHB4IDEycHggLTJweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsIDAsIDAsIDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsIDAsIDAsIDApKSwgdmFyKC0tdHctc2hhZG93KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jYWxjaXRlL2NhbGNpdGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9OdWV2YSUyMGNhcnBldGEvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9jYWxjaXRlL2NhbGNpdGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQW9rRSxrQkFBQTtBQ0Vwa0U7O0FERnNsRTtFQUFNLDhCQUFBO0VBQStCLDRCQUFBO0VBQTZCLDRCQUFBO0VBQTZCLDhCQUFBO0VBQStCLCtCQUFBO0VBQWdDLDRCQUFBO0VBQTZCLDZCQUFBO0VBQThCLDZCQUFBO0VBQThCLG9CQUFBO0VBQXFCLCtCQUFBO0VBQWdDLDRCQUFBO0VBQTZCLDZCQUFBO0VBQThCLDZCQUFBO0VBQThCLDBCQUFBO0VBQTJCLGtDQUFBO0VBQW1DLDRCQUFBO0VBQTZCLGtDQUFBO0VBQW1DLDJCQUFBO0VBQTRCLDZCQUFBO0VBQThCLDZCQUFBO0VBQThCLDJCQUFBO0VBQTRCLHlCQUFBO0VBQTBCLHlCQUFBO0VBQTBCLGtDQUFBO0VBQW1DLGlDQUFBO0VBQWtDLGdDQUFBO0VBQWlDLGdDQUFBO0VBQWlDLGdDQUFBO0VBQWlDLCtCQUFBO0VBQWdDLCtCQUFBO0VBQWdDLGdDQUFBO0VBQWlDLHlCQUFBO0VBQTBCLHdCQUFBO0VBQXlCLHVCQUFBO0VBQXdCLDBCQUFBO0VBQTJCLHVCQUFBO0VBQXdCLHlCQUFBO0VBQTBCLHVCQUFBO0VBQXdCLDJCQUFBO0VBQTRCLDJCQUFBO0VBQTRCLHNCQUFBO0VBQXVCLCtCQUFBO0VBQWdDLDhCQUFBO0VBQStCLDZCQUFBO0VBQThCLDZCQUFBO0VBQThCLGtDQUFBO0VBQW1DLDZCQUFBO0VBQThCLGtDQUFBO0VBQW1DLDRCQUFBO0VBQTZCLDRCQUFBO0VBQTZCLDZCQUFBO0VBQThCLDhCQUFBO0VBQStCLDhCQUFBO0VBQStCLHlCQUFBO0VBQTBCLDJCQUFBO0VBQTRCLDBCQUFBO0VBQTJCLDJCQUFBO0VBQTRCLCtDQUFBO0VBQWdELDZDQUFBO0VBQThDLDZDQUFBO0VBQThDLG1DQUFBO0VBQW9DLG1EQUFBO0VBQW9ELHlDQUFBO0VBQTBDLDRDQUFBO0VBQTZDLHNDQUFBO0VBQXVDLHVDQUFBO0VBQXdDLHdDQUFBO0VBQXlDLDRDQUFBO0VBQTZDLGtEQUFBO0VBQW1ELCtDQUFBO0VBQWdELCtDQUFBO0VBQWdELCtDQUFBO0VBQWdELHlDQUFBO0VBQTBDLHlDQUFBO0VBQTBDLHlDQUFBO0VBQTBDLDJDQUFBO0VBQTRDLHlDQUFBO0VBQTBDLHFDQUFBO0VBQXNDLDZCQUFBO0VBQThCLDRCQUFBO0VBQTZCLDRCQUFBO0VBQTZCLDRCQUFBO0VBQTZCLHlCQUFBO0VBQTBCLDRCQUFBO0VBQTZCLDRCQUFBO0VBQTZCLCtCQUFBO0VBQWdD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ZWttZjtFQUFvQixxQ0FBQTtFQUFzQywrQ0FBQTtFQUFnRCxxQ0FBQTtFQUFzQyxpQ0FBQTtFQUFrQyxpQ0FBQTtFQUFrQyxpQ0FBQTtFQUFrQyxrQ0FBQTtFQUFtQyxxQ0FBQTtFQUFzQywrQkFBQTtFQUFnQywrQkFBQTtFQUFnQywrQkFBQTtFQUFnQyxzQ0FBQTtFQUF1QyxzQ0FBQTtFQUF1QyxnQ0FBQTtFQUFpQyw0Q0FBQTtFQUE2Qyw0Q0FBQTtFQUE2QyxzQ0FBQTtFQUF1Qyw2Q0FBQTtFQUE4Qyw2Q0FBQTtFQUE4Qyx1Q0FBQTtFQUF3Qyw2Q0FBQTtFQUE4Qyw2Q0FBQTtFQUE4Qyx1Q0FBQTtFQUF3QywwQ0FBQTtFQUEyQywwQ0FBQTtFQUEyQyxvQ0FBQTtFQUFxQyxxREFBQTtFQUFzRCxvQ0FBQTtFQUFxQyxvQ0FBQTtFQUFxQyw4QkFBQTtFQUErQix5REFBQTtFQUEwRCwyREFBQTtFQUE0RCxxREFBQTtFQUFzRCxxREFBQTtFQUFzRCw2Q0FBQTtFQUE4QywyQ0FBQTtFQUE0QyxxQ0FBQTtFQUFzQyxxQ0FBQTtFQUFzQyxxQ0FBQTtFQUFzQyxtQ0FBQTtFQUFvQyw4QkFBQTtBQzhnQnJ1aUI7O0FEOWdCb3dpQjtFQUFtQixxQ0FBQTtFQUFzQyxxREFBQTtFQUFzRCxxQ0FBQTtFQUFzQyxpQ0FBQTtFQUFrQyxpQ0FBQTtFQUFrQyxpQ0FBQTtFQUFrQyxrQ0FBQTtFQUFtQyxxQ0FBQTtFQUFzQywrQkFBQTtFQUFnQywrQkFBQTtFQUFnQywrQkFBQTtFQUFnQyxzQ0FBQTtFQUF1QyxzQ0FBQTtFQUF1QyxnQ0FBQTtFQUFpQyw0Q0FBQTtFQUE2Qyw0Q0FBQTtFQUE2QyxzQ0FBQTtFQUF1Qyw2Q0FBQTtFQUE4Qyw2Q0FBQTtFQUE4Qyx1Q0FBQTtFQUF3Qyw2Q0FBQTtFQUE4Qyw2Q0FBQTtFQUE4Qyx1Q0FBQTtFQUF3QywwQ0FBQTtFQUEyQywwQ0FBQTtFQUEyQyxvQ0FBQTtFQUFxQyxzREFBQTtFQUF1RCxvQ0FBQTtFQUFxQyxvQ0FBQTtFQUFxQyw4QkFBQTtFQUErQixzREFBQTtFQUF1RCxxREFBQTtFQUFzRCwyREFBQTtFQUE0RCwyREFBQTtFQUE0RCxtREFBQTtFQUFvRCwyQ0FBQTtFQUE0QyxxQ0FBQTtFQUFzQyxxQ0FBQTtFQUFzQyxxQ0FBQTtFQUFzQyxtQ0FBQTtFQUFvQyw4QkFBQTtBQzBqQnQ1bEI7O0FEMWpCcTdsQjtFQUFNLHVGQUFBO0VBQXdGLDRFQUFBO0VBQTZFLCtCQUFBO0VBQWdDLDhCQUFBO0VBQStCLCtCQUFBO0VBQWdDLDJCQUFBO0VBQTRCLCtCQUFBO0VBQWdDLDhCQUFBO0VBQStCLCtCQUFBO0VBQWdDLDJCQUFBO0VBQTRCLDZCQUFBO0VBQThCLDJCQUFBO0VBQTRCLDZCQUFBO0VBQThCLDJCQUFBO0VBQTRCLGdDQUFBO0VBQWlDLGlDQUFBO0VBQWtDLGlDQUFBO0VBQWtDLCtCQUFBO0VBQWdDLDhDQUFBO0VBQStDLDBEQUFBO0VBQTJELDBEQUFBO0VBQTJELHdEQUFBO0VBQXlELDREQUFBO0VBQTZELDREQUFBO0VBQTZELDREQUFBO0VBQTZELHdFQUFBO0VBQXlFLG9FQUFBO0VBQXFFLHVGQUFBO0VBQXdGLGdEQUFBO0VBQWlELGdEQUFBO0VBQWlELGdEQUFBO0VBQWlELDREQUFBO0VBQTZELHNEQUFBO0VBQXVELG9EQUFBO0VBQXFELG9EQUFBO0VBQXFELG9EQUFBO0VBQXFELDREQUFBO0VBQTZELG1EQUFBO0VBQW9ELCtEQUFBO0VBQWdFLCtEQUFBO0VBQWdFLHlEQUFBO0VBQTBELHFFQUFBO0VBQXNFLHFFQUFBO0VBQXNFLHlEQUFBO0VBQTBELHFFQUFBO0VBQXNFLHFFQUFBO0VBQXNFLHVEQUFBO0VBQXdELG1FQUFBO0VBQW9FLG1FQUFBO0VBQW9FLGtEQUFBO0VBQW1ELDZDQUFBO0VBQThDLDZEQUFBO0VBQThELHlEQUFBO0VBQTBELHlEQUFBO0VBQTBELDZEQUFBO0VBQThELCtEQUFBO0VBQWdFLHlEQUFBO0VBQTBELDJEQUFBO0VBQTRELDJEQUFBO0VBQTRELG1GQUFBO0VBQW9GLG1GQUFBO0VBQW9GLDZFQUFBO0VBQThFLDZFQUFBO0VBQThFLDZFQUFBO0VBQThFLDZFQUFBO0VBQThFLCtFQUFBO0VBQWdGLHFEQUFBO0VBQXNELGtEQUFBO0VBQW1ELGtEQUFBO0VBQW1ELHVEQUFBO0VBQXdELGtEQUFBO0VBQW1ELGtEQUFBO0VBQW1ELGtEQUFBO0VBQW1ELG1EQUFBO0VBQW9ELG9EQUFBO0VBQXFELCtDQUFBO0VBQWdELDhDQUFBO0VBQStDLGlEQUFBO0VBQWtELDhDQUFBO0VBQStDLHFEQUFBO0VBQXNELGdEQUFBO0VBQWlELHNEQUFBO0VBQXVELGlEQUFBO0VBQWtELGlEQUFBO0VBQWtELGtEQUFBO0VBQW1ELG1EQUFBO0VBQW9ELDBEQUFBO0VBQTJELHlEQUFBO0VBQTBELHlEQUFBO0VBQTBELDBEQUFBO0VBQTJELGlFQUFBO0VBQWtFLDREQUFBO0VBQTZELDREQUFBO0VBQTZELDREQUFBO0VBQTZELG1FQUFBO0VBQW9FLG9FQUFBO0VBQXFFLGlFQUFBO0VBQWtFLDZEQUFBO0VBQThELGlGQUFBO0VBQWtGLCtFQUFBO0VBQWdGLCtFQUFBO0VBQWdGLHFFQUFBO0VBQXNFLDJGQUFBO0VBQTRGLGlGQUFBO0VBQWtGLHlGQUFBO0VBQTBGLCtFQUFBO0VBQWdGLG1GQUFBO0VBQW9GLGlGQUFBO0VBQWtGLHVEQUFBO0VBQXdELHNEQUFBO0VBQXVELHNEQUFBO0VBQXVELHNEQUFBO0VBQXVELG1EQUFBO0VBQW9ELHNEQUFBO0VBQXVELHNEQUFBO0VBQXVELDZGQUFBO0VBQThGLGlHQUFBO0VBQWtHLCtGQUFBO0VBQWdHLDJGQUFBO0VBQTRGLDZGQUFBO0VBQThGLGlGQUFBO0VBQWtGLGdGQUFBO0VBQWlGLGdGQUFBO0VBQWlGLDhFQUFBO0VBQStFLCtEQUFBO0VBQWdFLG1FQUFBO0VBQW9FLG1FQUFBO0VBQW9FLHFFQUFBO0VBQXNFLGlFQUFBO0VBQWtFLCtEQUFBO0VBQWdFLHFFQUFBO0VBQXNFLGlFQUFBO0VBQWtFLDhEQUFBO0VBQStELGdGQUFBO0VBQWlGLHFFQUFBO0VBQXNFLDZGQUFBO0VBQThGLCtGQUFBO0VBQWdHLDZGQUFBO0VBQThGLHVEQUFBO0VB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QkFBQTtBQ20zQi90L0I7O0FEbjNCaXYvQjtFQUEwQix1QkFBQTtBQ3UzQjN3L0I7O0FEdjNCa3kvQjtFQUF3QixxQkFBQTtBQzIzQjF6L0I7O0FEMzNCKzAvQjtFQUEyQix3QkFBQTtBQyszQjEyL0I7O0FELzNCazQvQjtFQUEwQix1QkFBQTtBQ200QjU1L0I7O0FEbjRCbTcvQjtFQUEyQix3QkFBQTtBQ3U0Qjk4L0I7O0FEdjRCcysvQjtFQUF1RyxrQkFBQTtFQUFrQixnQkFBQTtBQzQ0Qi9sZ0M7O0FENTRCK21nQztFQUFnQyxXQUFBO0VBQVcsa0JBQUE7RUFBa0IsZ0JBQUE7RUFBZ0IsdUJBQUE7RUFBdUIscUJBQUE7RUFBcUIsK0JBQUE7RUFBK0Isc0JBQUE7RUFBc0IsaUJBQUE7RUFBaUIsb0JBQUE7RUFBb0Isd0NBQUE7RUFBd0MsbURBQUE7QUMwNUIxMmdDOztBRDE1QjY1Z0M7RUFBd0Isa0ZBQUE7RUFBbUYsbUdBQUE7RUFBb0csNkhBQUE7QUNnNkI1bWhDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpub3QoW2NhbGNpdGUtaHlkcmF0ZWRdKTppcyhjYWxjaXRlLWFjY29yZGlvbiwgY2FsY2l0ZS1hY2NvcmRpb24taXRlbSwgY2FsY2l0ZS1hY3Rpb24sIGNhbGNpdGUtYWN0aW9uLWJhciwgY2FsY2l0ZS1hY3Rpb24tZ3JvdXAsIGNhbGNpdGUtYWN0aW9uLW1lbnUsIGNhbGNpdGUtYWN0aW9uLXBhZCwgY2FsY2l0ZS1hbGVydCwgY2FsY2l0ZS1hdXRvY29tcGxldGUsIGNhbGNpdGUtYXV0b2NvbXBsZXRlLWl0ZW0sIGNhbGNpdGUtYXV0b2NvbXBsZXRlLWl0ZW0tZ3JvdXAsIGNhbGNpdGUtYXZhdGFyLCBjYWxjaXRlLWJsb2NrLCBjYWxjaXRlLWJsb2NrLWdyb3VwLCBjYWxjaXRlLWJsb2NrLXNlY3Rpb24sIGNhbGNpdGUtYnV0dG9uLCBjYWxjaXRlLWNhcmQsIGNhbGNpdGUtY2FyZC1ncm91cCwgY2FsY2l0ZS1jYXJvdXNlbCwgY2FsY2l0ZS1jYXJvdXNlbC1pdGVtLCBjYWxjaXRlLWNoZWNrYm94LCBjYWxjaXRlLWNoaXAsIGNhbGNpdGUtY2hpcC1ncm91cCwgY2FsY2l0ZS1jb2xvci1waWNrZXIsIGNhbGNpdGUtY29sb3ItcGlja2VyLWhleC1pbnB1dCwgY2FsY2l0ZS1jb2xvci1waWNrZXItc3dhdGNoLCBjYWxjaXRlLWNvbWJvYm94LCBjYWxjaXRlLWNvbWJvYm94LWl0ZW0sIGNhbGNpdGUtY29tYm9ib3gtaXRlbS1ncm91cCwgY2FsY2l0ZS1kYXRlLXBpY2tlciwgY2FsY2l0ZS1kYXRlLXBpY2tlci1kYXksIGNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGgsIGNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGgtaGVhZGVyLCBjYWxjaXRlLWRpYWxvZywgY2FsY2l0ZS1kcm9wZG93biwgY2FsY2l0ZS1kcm9wZG93bi1ncm91cCwgY2FsY2l0ZS1kcm9wZG93bi1pdGVtLCBjYWxjaXRlLWZhYiwgY2FsY2l0ZS1maWx0ZXIsIGNhbGNpdGUtZmxvdywgY2FsY2l0ZS1mbG93LWl0ZW0sIGNhbGNpdGUtZ3JhcGgsIGNhbGNpdGUtaGFuZGxlLCBjYWxjaXRlLWljb24sIGNhbGNpdGUtaW5saW5lLWVkaXRhYmxlLCBjYWxjaXRlLWlucHV0LCBjYWxjaXRlLWlucHV0LWRhdGUtcGlja2VyLCBjYWxjaXRlLWlucHV0LW1lc3NhZ2UsIGNhbGNpdGUtaW5wdXQtbnVtYmVyLCBjYWxjaXRlLWlucHV0LXRleHQsIGNhbGNpdGUtaW5wdXQtdGltZS1waWNrZXIsIGNhbGNpdGUtaW5wdXQtdGltZS16b25lLCBjYWxjaXRlLWxhYmVsLCBjYWxjaXRlLWxpbmssIGNhbGNpdGUtbGlzdCwgY2FsY2l0ZS1saXN0LWl0ZW0sIGNhbGNpdGUtbGlzdC1pdGVtLWdyb3VwLCBjYWxjaXRlLWxvYWRlciwgY2FsY2l0ZS1tZW51LCBjYWxjaXRlLW1lbnUtaXRlbSwgY2FsY2l0ZS1tZXRlciwgY2FsY2l0ZS1tb2RhbCwgY2FsY2l0ZS1uYXZpZ2F0aW9uLCBjYWxjaXRlLW5hdmlnYXRpb24tbG9nbywgY2FsY2l0ZS1uYXZpZ2F0aW9uLXVzZXIsIGNhbGNpdGUtbm90aWNlLCBjYWxjaXRlLW9wdGlvbiwgY2FsY2l0ZS1vcHRpb24tZ3JvdXAsIGNhbGNpdGUtcGFnaW5hdGlvbiwgY2FsY2l0ZS1wYW5lbCwgY2FsY2l0ZS1wb3BvdmVyLCBjYWxjaXRlLXByb2dyZXNzLCBjYWxjaXRlLXJhZGlvLWJ1dHRvbiwgY2FsY2l0ZS1yYWRpby1idXR0b24tZ3JvdXAsIGNhbGNpdGUtcmF0aW5nLCBjYWxjaXRlLXNjcmltLCBjYWxjaXRlLXNlZ21lbnRlZC1jb250cm9sLCBjYWxjaXRlLXNlZ21lbnRlZC1jb250cm9sLWl0ZW0sIGNhbGNpdGUtc2VsZWN0LCBjYWxjaXRlLXNoZWV0LCBjYWxjaXRlLXNoZWxsLCBjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3csIGNhbGNpdGUtc2hlbGwtcGFuZWwsIGNhbGNpdGUtc2xpZGVyLCBjYWxjaXRlLXNvcnQtaGFuZGxlLCBjYWxjaXRlLXNvcnRhYmxlLWxpc3QsIGNhbGNpdGUtc3BsaXQtYnV0dG9uLCBjYWxjaXRlLXN0YWNrLCBjYWxjaXRlLXN0ZXBwZXIsIGNhbGNpdGUtc3RlcHBlci1pdGVtLCBjYWxjaXRlLXN3aXRjaCwgY2FsY2l0ZS10YWIsIGNhbGNpdGUtdGFiLW5hdiwgY2FsY2l0ZS10YWItdGl0bGUsIGNhbGNpdGUtdGFibGUsIGNhbGNpdGUtdGFibGUtY2VsbCwgY2FsY2l0ZS10YWJsZS1oZWFkZXIsIGNhbGNpdGUtdGFibGUtcm93LCBjYWxjaXRlLXRhYnMsIGNhbGNpdGUtdGV4dC1hcmVhLCBjYWxjaXRlLXRpbGUsIGNhbGNpdGUtdGlsZS1ncm91cCwgY2FsY2l0ZS10aWxlLXNlbGVjdCwgY2FsY2l0ZS10aWxlLXNlbGVjdC1ncm91cCwgY2FsY2l0ZS10aW1lLXBpY2tlciwgY2FsY2l0ZS10aXAsIGNhbGNpdGUtdGlwLWdyb3VwLCBjYWxjaXRlLXRpcC1tYW5hZ2VyLCBjYWxjaXRlLXRvb2x0aXAsIGNhbGNpdGUtdHJlZSwgY2FsY2l0ZS10cmVlLWl0ZW0pIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jYWxjaXRlLXotaW5kZXgtdG9vbHRpcDogOTAxO1xcbiAgLS1jYWxjaXRlLXotaW5kZXgtcG9wdXA6IDkwMDtcXG4gIC0tY2FsY2l0ZS16LWluZGV4LW1vZGFsOiA4MDA7XFxuICAtLWNhbGNpdGUtei1pbmRleC1vdmVybGF5OiA3MDA7XFxuICAtLWNhbGNpdGUtei1pbmRleC1kcm9wZG93bjogNjAwO1xcbiAgLS1jYWxjaXRlLXotaW5kZXgtdG9hc3Q6IDUwMDtcXG4gIC0tY2FsY2l0ZS16LWluZGV4LWhlYWRlcjogNDAwO1xcbiAgLS1jYWxjaXRlLXotaW5kZXgtc3RpY2t5OiAzMDA7XFxuICAtLWNhbGNpdGUtei1pbmRleDogMTtcXG4gIC0tY2FsY2l0ZS16LWluZGV4LWRlZXA6IC05OTk5OTk7XFxuICAtLWNhbGNpdGUtc3BhY2luZy14eHhsOiAycmVtO1xcbiAgLS1jYWxjaXRlLXNwYWNpbmcteHhsOiAxLjVyZW07XFxuICAtLWNhbGNpdGUtc3BhY2luZy14bDogMS4yNXJlbTtcXG4gIC0tY2FsY2l0ZS1zcGFjaW5nLWxnOiAxcmVtO1xcbiAgLS1jYWxjaXRlLXNwYWNpbmctbWQtcGx1czogLjg3NXJlbTtcXG4gIC0tY2FsY2l0ZS1zcGFjaW5nLW1kOiAuNzVyZW07XFxuICAtLWNhbGNpdGUtc3BhY2luZy1zbS1wbHVzOiAuNjI1cmVtO1xcbiAgLS1jYWxjaXRlLXNwYWNpbmctc206IC41cmVtO1xcbiAgLS1jYWxjaXRlLXNwYWNpbmcteHM6IC4zNzVyZW07XFxuICAtLWNhbGNpdGUtc3BhY2luZy14eHM6IC4yNXJlbTtcXG4gIC0tY2FsY2l0ZS1zcGFjaW5nLWJhc2U6IDJweDtcXG4gIC0tY2FsY2l0ZS1zcGFjaW5nLXB4OiAxcHg7XFxuICAtLWNhbGNpdGUtc3BhY2luZy1ub25lOiAwO1xcbiAgLS1jYWxjaXRlLXNwYWNpbmctZml4ZWQteHh4bDogMzJweDtcXG4gIC0tY2FsY2l0ZS1zcGFjaW5nLWZpeGVkLXh4bDogMjBweDtcXG4gIC0tY2FsY2l0ZS1zcGFjaW5nLWZpeGVkLXhsOiAxNnB4O1xcbiAgLS1jYWxjaXRlLXNwYWNpbmctZml4ZWQtbGc6IDE0cHg7XFxuICAtLWNhbGNpdGUtc3BhY2luZy1maXhlZC1tZDogMTJweDtcXG4gIC0tY2FsY2l0ZS1zcGFjaW5nLWZpeGVkLXNtOiA4cHg7XFxuICAtLWNhbGNpdGUtc3BhY2luZy1maXhlZC14czogNnB4O1xcbiAgLS1jYWxjaXRlLXNwYWNpbmctZml4ZWQteHhzOiA0cHg7XFxuICAtLWNhbGNpdGUtc2l6ZS14eHhsOiA2cmVtO1xcbiAgLS1jYWxjaXRlLXNpemUteHhsOiA0cmVtO1xcbiAgLS1jYWxjaXRlLXNpemUteGw6IDNyZW07XFxuICAtLWNhbGNpdGUtc2l6ZS1sZzogMi43NXJlbTtcXG4gIC0tY2FsY2l0ZS1zaXplLW1kOiAycmVtO1xcbiAgLS1jYWxjaXRlLXNpemUtc206IDEuNXJlbTtcXG4gIC0tY2FsY2l0ZS1zaXplLXhzOiAxcmVtO1xcbiAgLS1jYWxjaXRlLXNpemUteHhzOiAuODc1cmVtO1xcbiAgLS1jYWxjaXRlLXNpemUteHh4czogLjc1cmVtO1xcbiAgLS1jYWxjaXRlLXNpemUtcHg6IDFweDtcXG4gIC0tY2FsY2l0ZS1zaXplLWZpeGVkLXh4eGw6IDMycHg7XFxuICAtLWNhbGNpdGUtc2l6ZS1maXhlZC14eGw6IDI0cHg7XFxuICAtLWNhbGNpdGUtc2l6ZS1maXhlZC14bDogMjBweDtcXG4gIC0tY2FsY2l0ZS1zaXplLWZpeGVkLWxnOiAxNnB4O1xcbiAgLS1jYWxjaXRlLXNpemUtZml4ZWQtbWQtcGx1czogMTRweDtcXG4gIC0tY2FsY2l0ZS1zaXplLWZpeGVkLW1kOiAxMnB4O1xcbiAgLS1jYWxjaXRlLXNpemUtZml4ZWQtc20tcGx1czogMTBweDtcXG4gIC0tY2FsY2l0ZS1zaXplLWZpeGVkLXNtOiA4cHg7XFxuICAtLWNhbGNpdGUtc2l6ZS1maXhlZC14czogNnB4O1xcbiAgLS1jYWxjaXRlLXNpemUtZml4ZWQteHhzOiA0cHg7XFxuICAtLWNhbGNpdGUtc2l6ZS1maXhlZC14eHhzOiAycHg7XFxuICAtLWNhbGNpdGUtb3BhY2l0eS1kaXNhYmxlZDogLjU7XFxuICAtLWNhbGNpdGUtb3BhY2l0eS1mdWxsOiAxO1xcbiAgLS1jYWxjaXRlLW9wYWNpdHktZGFyazogLjg1O1xcbiAgLS1jYWxjaXRlLW9wYWNpdHktaGFsZjogLjU7XFxuICAtLWNhbGNpdGUtb3BhY2l0eS1saWdodDogLjQ7XFxuICAtLWNhbGNpdGUtZm9udC10ZXh0LWNhc2UtY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZTtcXG4gIC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS1sb3dlcmNhc2U6IGxvd2VyY2FzZTtcXG4gIC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS11cHBlcmNhc2U6IHVwcGVyY2FzZTtcXG4gIC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS1ub25lOiBub25lO1xcbiAgLS1jYWxjaXRlLWZvbnQtdGV4dC1kZWNvcmF0aW9uLXVuZGVybGluZTogdW5kZXJsaW5lO1xcbiAgLS1jYWxjaXRlLWZvbnQtdGV4dC1kZWNvcmF0aW9uLW5vbmU6IG5vbmU7XFxuICAtLWNhbGNpdGUtZm9udC1wYXJhZ3JhcGgtc3BhY2luZy1ub3JtYWw6IDRweDtcXG4gIC0tY2FsY2l0ZS1mb250LWxldHRlci1zcGFjaW5nLXdpZGU6IC40O1xcbiAgLS1jYWxjaXRlLWZvbnQtbGV0dGVyLXNwYWNpbmctbm9ybWFsOiAwO1xcbiAgLS1jYWxjaXRlLWZvbnQtbGV0dGVyLXNwYWNpbmctdGlnaHQ6IC0uNDtcXG4gIC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLWxvb3NlOiAyO1xcbiAgLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtcmVsYXhlZDogMS42MjU7XFxuICAtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1ub3JtYWw6IDEuNTtcXG4gIC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWc6IDEuMzc1O1xcbiAgLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtdGlnaHQ6IDEuMjU7XFxuICAtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZTogYXV0bztcXG4gIC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXhsOiAyNHB4O1xcbiAgLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtbGc6IDIwcHg7XFxuICAtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC1iYXNlOiAxNnB4O1xcbiAgLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtc206IDEycHg7XFxuICAtLWNhbGNpdGUtZm9udC1zdHlsZS1lbXBoYXNpczogaXRhbGljO1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS14eGw6IDI0cHg7XFxuICAtLWNhbGNpdGUtZm9udC1zaXplLXhsOiAyMHB4O1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZzogMThweDtcXG4gIC0tY2FsY2l0ZS1mb250LXNpemUtbWQ6IDE2cHg7XFxuICAtLWNhbGNpdGUtZm9udC1zaXplOiAxNHB4O1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS1zbTogMTJweDtcXG4gIC0tY2FsY2l0ZS1mb250LXNpemUteHM6IDEwcHg7XFxuICAtLWNhbGNpdGUtZm9udC13ZWlnaHQtYm9sZDogNjAwO1xcbiAgLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXNlbWlib2xkOiA2MDA7XFxuICAtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWNhbGNpdGUtZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xcbiAgLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XFxuICAtLWNhbGNpdGUtZm9udC1mYW1pbHktY29kZTogTW9uYWNvLCBDb25zb2xhcywgXFxcIkFuZGFsZSBNb25vXFxcIiwgXFxcIkx1Y2lkYSBDb25zb2xlXFxcIiwgbW9ub3NwYWNlO1xcbiAgLS1jYWxjaXRlLWZvbnQtZmFtaWx5OiBcXFwiQXZlbmlyIE5leHRcXFwiLCBBdmVuaXIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWNhbGNpdGUtY29ybmVyLXJhZGl1cy1waWxsOiAxMDAlO1xcbiAgLS1jYWxjaXRlLWNvcm5lci1yYWRpdXMtcm91bmQ6IDRweDtcXG4gIC0tY2FsY2l0ZS1jb3JuZXItcmFkaXVzLXNoYXJwOiAwO1xcbiAgLS1jYWxjaXRlLWNvbnRhaW5lci1zaXplLWNvbnRlbnQtZml4ZWQ6IDE0NDBweDtcXG4gIC0tY2FsY2l0ZS1jb250YWluZXItc2l6ZS1jb250ZW50LWZsdWlkOiAxMDAlO1xcbiAgLS1jYWxjaXRlLWNvbnRhaW5lci1zaXplLWd1dHRlcjogMTZweDtcXG4gIC0tY2FsY2l0ZS1jb250YWluZXItc2l6ZS1tYXJnaW46IDI0cHg7XFxuICAtLWNhbGNpdGUtY29sb3ItYmFja2dyb3VuZC1ub25lOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgLS1jYWxjaXRlLWJvcmRlci13aWR0aC1sZzogNHB4O1xcbiAgLS1jYWxjaXRlLWJvcmRlci13aWR0aC1tZDogMnB4O1xcbiAgLS1jYWxjaXRlLWJvcmRlci13aWR0aC1zbTogMXB4O1xcbiAgLS1jYWxjaXRlLWJvcmRlci13aWR0aC1ub25lOiAwO1xcbiAgLS1jYWxjaXRlLXNoYWRvdy1tZDogMCA0cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgLjA4KSwgMCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMSk7XFxuICAtLWNhbGNpdGUtc2hhZG93LXNtOiAwIDJweCA4cHggMCByZ2JhKDAsIDAsIDAsIC4wNCksIDAgNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIC4wOCk7XFxuICAtLWNhbGNpdGUtc2hhZG93LW5vbmU6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcXG4gIC0tY2FsY2l0ZS1jb3JuZXItcmFkaXVzOiB2YXIoLS1jYWxjaXRlLWNvcm5lci1yYWRpdXMtc2hhcnApO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWhpZXJhcmNoeS1vdmVybGluZSB7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXNtKTtcXG4gIHRleHQtY2FzZTogdmFyKC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS11cHBlcmNhc2UpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtYm9sZCk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1ib2xkLW1pbnVzLTEge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLWJvbGQtbWludXMtMiB7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1zZW1pYm9sZCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1zbSk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1ib2xkLTMge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUteHhsKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLWJvbGQtMiB7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1zZW1pYm9sZCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14bCk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1ib2xkLTEge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbGcpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtYm9sZC0wIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLW1kKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLW1lZGl1bS1taW51cy0xIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtbWVkaXVtLW1pbnVzLTIge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXNtKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLW1lZGl1bS0zIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14eGwpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtbWVkaXVtLTIge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXhsKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLW1lZGl1bS0xIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZyk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1tZWRpdW0tMCB7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbWQpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtcmVndWxhci1taW51cy0xIHtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1yZWd1bGFyLW1pbnVzLTIge1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtc20pO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtcmVndWxhci0zIHtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXh4bCk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1yZWd1bGFyLTIge1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUteGwpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtcmVndWxhci0xIHtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLWxnKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLXJlZ3VsYXItMCB7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1tZCk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1saWdodC1taW51cy0xIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1saWdodC1taW51cy0yIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXNtKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLWxpZ2h0LTMge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbGlnaHQpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS10aWdodCk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXh4bCk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1saWdodC0yIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXhsKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLWxpZ2h0LTEge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbGlnaHQpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbGcpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtbGlnaHQtMCB7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1saWdodCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1tZCk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktYm9sZC0xaCB7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1zZW1pYm9sZCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXhsKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbGcpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWJvbGQtMGgge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC1sZyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLW1kKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1ib2xkLW1pbnVzLTFoIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1ib2xkLW1pbnVzLTJoIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtc20pO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWJvbGQtbWludXMtM2gge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC1zbSk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXhzKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1tZWRpdW0tMWgge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQteGwpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZyk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktbWVkaXVtLTBoIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLWxnKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbWQpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LW1lZGl1bS1taW51cy0xaCB7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LW1lZGl1bS1taW51cy0yaCB7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1zbSk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktbWVkaXVtLW1pbnVzLTNoIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXNtKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUteHMpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXJlZ3VsYXItMWgge1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC14bCk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLWxnKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1yZWd1bGFyLTBoIHtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtbGcpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1tZCk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktcmVndWxhci1taW51cy0yaCB7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXNtKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1yZWd1bGFyLW1pbnVzLTNoIHtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtc20pO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14cyk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktbGlnaHQtMWgge1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZyk7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1saWdodCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXhsKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1saWdodC0waCB7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLW1kKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtbGcpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWxpZ2h0LW1pbnVzLTFoIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1saWdodC1taW51cy0yaCB7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXNtKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1saWdodC1taW51cy0zaCB7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXhzKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtc20pO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jYWxjaXRlLWZvbnQtZmFtaWx5KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtcmVndWxhcik7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tY2FsY2l0ZS1mb250LWxldHRlci1zcGFjaW5nLW5vcm1hbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLWJhc2UpO1xcbiAgcGFyYWdyYXBoLXNwYWNpbmc6IHZhcigtLWNhbGNpdGUtZm9udC1wYXJhZ3JhcGgtc3BhY2luZy1ub3JtYWwpO1xcbiAgdGV4dC1jYXNlOiB2YXIoLS1jYWxjaXRlLWZvbnQtdGV4dC1jYXNlLW5vbmUpO1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHZhcigtLWNhbGNpdGUtZm9udC10ZXh0LWRlY29yYXRpb24tbm9uZSk7XFxuICB0ZXh0LWRlY29yYXRpb246IHZhcigtLWNhbGNpdGUtZm9udC10ZXh0LWRlY29yYXRpb24tbm9uZSk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktaGllcmFyY2h5LWNhcHRpb24ge1xcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWhpZXJhcmNoeS1ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIgTmV4dCwgQXZlbmlyLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgcGFyYWdyYXBoLXNwYWNpbmc6IDRweDtcXG4gIHRleHQtY2FzZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1oaWVyYXJjaHktYm9keS1zbnVnIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1oaWVyYXJjaHktaGVhZGluZy01IHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMS4zNzU7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktaGllcmFyY2h5LWhlYWRpbmctNCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWhpZXJhcmNoeS1oZWFkaW5nLTMge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1oaWVyYXJjaHktaGVhZGluZy0yIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMS4zNzU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktaGllcmFyY2h5LWhlYWRpbmctMSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWhpZXJhcmNoeS1kaXNwbGF5LTIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1oaWVyYXJjaHktZGlzcGxheS0xIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMS4zNzU7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktcmVndWxhci1taW51cy0xaCB7XFxuICBmb250LWZhbWlseTogQXZlbmlyIE5leHQsIEF2ZW5pciwgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIHBhcmFncmFwaC1zcGFjaW5nOiA0cHg7XFxuICB0ZXh0LWNhc2U6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItd2hpdGU6ICNmZmZmZmY7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLWdob3N0OiByZ2JhKDAsIDAsIDAsIC4zKTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItaW5wdXQ6ICM5NDk0OTQ7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTM6ICNkZmRmZGY7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTI6ICNkNGQ0ZDQ7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTE6ICNjYWNhY2E7XFxuICAtLWNhbGNpdGUtY29sb3ItdGV4dC1saW5rOiAjMDA2MTliO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtaW52ZXJzZTogI2ZmZmZmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTM6ICM2YTZhNmE7XFxuICAtLWNhbGNpdGUtY29sb3ItdGV4dC0yOiAjNGE0YTRhO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMTogIzE1MTUxNTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlLXByZXNzOiAjMjAyMDIwO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWludmVyc2UtaG92ZXI6ICMyYjJiMmI7XFxuICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZTogIzM1MzUzNTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyLXByZXNzOiAjN2MxZDEzO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItaG92ZXI6ICNhODJiMWU7XFxuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlcjogI2Q4MzAyMDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZy1wcmVzczogI2JmYTIwMDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZy1ob3ZlcjogI2Q5YmMwMDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZzogI2VkZDMxNztcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1wcmVzczogIzFhNjMyNDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1ob3ZlcjogIzI4ODgzNTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2VzczogIzM1YWM0NjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mby1wcmVzczogIzAwMzA0ZDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mby1ob3ZlcjogIzAwNDg3NDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mbzogIzAwNjE5YjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1icmFuZC11bmRlcmxpbmU6IHJnYmEoMCwgOTcsIDE1NSwgLjQpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXByZXNzOiAjMDA0ODc0O1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLWhvdmVyOiAjMDA2MTliO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kOiAjMDA3YWMyO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXRpbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXNjcmltOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44NSk7XFxuICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtcHJlc3M6IHJnYmEoMCwgMCwgMCwgLjA4KTtcXG4gIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1ob3ZlcjogcmdiYSgwLCAwLCAwLCAuMDQpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtY3VycmVudDogI2M3ZWFmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTM6ICNlYWVhZWE7XFxuICAtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yOiAjZjNmM2YzO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMTogI2ZmZmZmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1iYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvY3VzOiAjMDA3YWMyO1xcbn1cXG5cXG4uY2FsY2l0ZS1tb2RlLWxpZ2h0IHtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItd2hpdGU6ICNmZmZmZmY7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLWdob3N0OiByZ2JhKDAsIDAsIDAsIC4zKTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItaW5wdXQ6ICM5NDk0OTQ7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTM6ICNkZmRmZGY7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTI6ICNkNGQ0ZDQ7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTE6ICNjYWNhY2E7XFxuICAtLWNhbGNpdGUtY29sb3ItdGV4dC1saW5rOiAjMDA2MTliO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtaW52ZXJzZTogI2ZmZmZmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTM6ICM2YTZhNmE7XFxuICAtLWNhbGNpdGUtY29sb3ItdGV4dC0yOiAjNGE0YTRhO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMTogIzE1MTUxNTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlLXByZXNzOiAjMjAyMDIwO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWludmVyc2UtaG92ZXI6ICMyYjJiMmI7XFxuICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZTogIzM1MzUzNTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyLXByZXNzOiAjN2MxZDEzO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItaG92ZXI6ICNhODJiMWU7XFxuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlcjogI2Q4MzAyMDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZy1wcmVzczogI2JmYTIwMDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZy1ob3ZlcjogI2Q5YmMwMDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZzogI2VkZDMxNztcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1wcmVzczogIzFhNjMyNDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1ob3ZlcjogIzI4ODgzNTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2VzczogIzM1YWM0NjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mby1wcmVzczogIzAwMzA0ZDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mby1ob3ZlcjogIzAwNDg3NDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mbzogIzAwNjE5YjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1icmFuZC11bmRlcmxpbmU6IHJnYmEoMCwgOTcsIDE1NSwgLjQpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXByZXNzOiAjMDA0ODc0O1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLWhvdmVyOiAjMDA2MTliO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kOiAjMDA3YWMyO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXRpbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXNjcmltOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44NSk7XFxuICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtcHJlc3M6IHJnYmEoMCwgMCwgMCwgLjA4KTtcXG4gIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1ob3ZlcjogcmdiYSgwLCAwLCAwLCAuMDQpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtY3VycmVudDogI2M3ZWFmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTM6ICNlYWVhZWE7XFxuICAtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yOiAjZjNmM2YzO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMTogI2ZmZmZmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1iYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvY3VzOiAjMDA3YWMyO1xcbn1cXG5cXG4uY2FsY2l0ZS1tb2RlLWRhcmsge1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci13aGl0ZTogI2Y4ZjhmODtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItZ2hvc3Q6IHJnYmEoMTE3LCAxMTcsIDExNywgLjMpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci1pbnB1dDogIzc1NzU3NTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMzogIzQwNDA0MDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMjogIzRhNGE0YTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMTogIzU1NTU1NTtcXG4gIC0tY2FsY2l0ZS1jb2xvci10ZXh0LWxpbms6ICMwMGEwZmY7XFxuICAtLWNhbGNpdGUtY29sb3ItdGV4dC1pbnZlcnNlOiAjMTUxNTE1O1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMzogIzlmOWY5ZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTI6ICNiZmJmYmY7XFxuICAtLWNhbGNpdGUtY29sb3ItdGV4dC0xOiAjZmZmZmZmO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWludmVyc2UtcHJlc3M6ICNmM2YzZjM7XFxuICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZS1ob3ZlcjogI2ZmZmZmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlOiAjZjhmOGY4O1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItcHJlc3M6ICNkOTAwMTI7XFxuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlci1ob3ZlcjogI2ZmMDAxNTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyOiAjZmU1ODNlO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nLXByZXNzOiAjZjVkMDAwO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nLWhvdmVyOiAjZmZlZTMzO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nOiAjZmZjOTAwO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzLXByZXNzOiAjMDBiODFiO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzLWhvdmVyOiAjM2JlZDUyO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzOiAjMzZkYTQzO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvLXByZXNzOiAjMDA5YWYyO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvLWhvdmVyOiAjM2RiOGZmO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvOiAjMDBhMGZmO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXVuZGVybGluZTogcmdiYSgwLCAxNjAsIDI1NSwgLjQpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXByZXNzOiAjMDA2MTliO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLWhvdmVyOiAjMDA3YWMyO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kOiAjMDA5YWYyO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXRpbnQ6IHJnYmEoNDMsIDQzLCA0MywgLjgpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXNjcmltOiByZ2JhKDAsIDAsIDAsIC44NSk7XFxuICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtcHJlc3M6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA4KTtcXG4gIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDQpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtY3VycmVudDogIzIxNDE1NTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTM6ICMxNTE1MTU7XFxuICAtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yOiAjMjAyMDIwO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMTogIzJiMmIyYjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1iYWNrZ3JvdW5kOiAjMzUzNTM1O1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvY3VzOiAjMDA5YWYyO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhbGNpdGUtY29kZS1mYW1pbHk6IFxcXCJDb25zb2xhc1xcXCIsIFxcXCJBbmRhbGUgTW9ub1xcXCIsIFxcXCJMdWNpZGEgQ29uc29sZVxcXCIsIFxcXCJNb25hY29cXFwiLCBtb25vc3BhY2U7XFxuICAtLWNhbGNpdGUtc2Fucy1mYW1pbHk6IFxcXCJBdmVuaXIgTmV4dFxcXCIsIFxcXCJBdmVuaXJcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMzogLjYyNXJlbTtcXG4gIC0tY2FsY2l0ZS1mb250LXNpemUtLTI6IC43NXJlbTtcXG4gIC0tY2FsY2l0ZS1mb250LXNpemUtLTE6IC44NzVyZW07XFxuICAtLWNhbGNpdGUtZm9udC1zaXplLTA6IDFyZW07XFxuICAtLWNhbGNpdGUtZm9udC1zaXplLTE6IDEuMTI1cmVtO1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS0yOiAxLjI1cmVtO1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS0zOiAxLjYyNXJlbTtcXG4gIC0tY2FsY2l0ZS1mb250LXNpemUtNDogMnJlbTtcXG4gIC0tY2FsY2l0ZS1mb250LXNpemUtNTogMi41cmVtO1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS02OiAzcmVtO1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS03OiAzLjVyZW07XFxuICAtLWNhbGNpdGUtZm9udC1zaXplLTg6IDRyZW07XFxuICAtLWNhbGNpdGUtZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcXG4gIC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tY2FsY2l0ZS1mb250LXdlaWdodC1ib2xkOiA2MDA7XFxuICAtLWNhbGNpdGUtdWktYnJhbmQ6IHZhcigtLWNhbGNpdGUtY29sb3ItYnJhbmQpO1xcbiAgLS1jYWxjaXRlLXVpLWJyYW5kLWhvdmVyOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWJyYW5kLWhvdmVyKTtcXG4gIC0tY2FsY2l0ZS11aS1icmFuZC1wcmVzczogdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZC1wcmVzcyk7XFxuICAtLWNhbGNpdGUtdWktYmFja2dyb3VuZDogdmFyKC0tY2FsY2l0ZS1jb2xvci1iYWNrZ3JvdW5kKTtcXG4gIC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTE6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0xKTtcXG4gIC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTI6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yKTtcXG4gIC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTM6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0zKTtcXG4gIC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQ6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC1jdXJyZW50KTtcXG4gIC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0OiB2YXIoLS1jYWxjaXRlLW9mZnNldC1pbnZlcnQtZm9jdXMpO1xcbiAgLS1jYWxjaXRlLXNlbWFudGljLXVpLWNvbG9yLWZvcmVncm91bmQtY3VycmVudDogdmFyKC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLWN1cnJlbnQpO1xcbiAgLS1jYWxjaXRlLXVpLXRleHQtMTogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LTEpO1xcbiAgLS1jYWxjaXRlLXVpLXRleHQtMjogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LTIpO1xcbiAgLS1jYWxjaXRlLXVpLXRleHQtMzogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LTMpO1xcbiAgLS1jYWxjaXRlLXVpLXRleHQtaW52ZXJzZTogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LWludmVyc2UpO1xcbiAgLS1jYWxjaXRlLXVpLXRleHQtbGluazogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LWxpbmspO1xcbiAgLS1jYWxjaXRlLXVpLWJvcmRlci0xOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0xKTtcXG4gIC0tY2FsY2l0ZS11aS1ib3JkZXItMjogdmFyKC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMik7XFxuICAtLWNhbGNpdGUtdWktYm9yZGVyLTM6IHZhcigtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTMpO1xcbiAgLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dDogdmFyKC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItaW5wdXQpO1xcbiAgLS1jYWxjaXRlLXVpLWluZm86IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8pO1xcbiAgLS1jYWxjaXRlLXVpLWluZm8taG92ZXI6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8taG92ZXIpO1xcbiAgLS1jYWxjaXRlLXVpLWluZm8tcHJlc3M6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8tcHJlc3MpO1xcbiAgLS1jYWxjaXRlLXVpLXN1Y2Nlc3M6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MpO1xcbiAgLS1jYWxjaXRlLXVpLXN1Y2Nlc3MtaG92ZXI6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MtaG92ZXIpO1xcbiAgLS1jYWxjaXRlLXVpLXN1Y2Nlc3MtcHJlc3M6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MtcHJlc3MpO1xcbiAgLS1jYWxjaXRlLXVpLXdhcm5pbmc6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmcpO1xcbiAgLS1jYWxjaXRlLXVpLXdhcm5pbmctaG92ZXI6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmctaG92ZXIpO1xcbiAgLS1jYWxjaXRlLXVpLXdhcm5pbmctcHJlc3M6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmctcHJlc3MpO1xcbiAgLS1jYWxjaXRlLXVpLWRhbmdlcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyKTtcXG4gIC0tY2FsY2l0ZS11aS1kYW5nZXItaG92ZXI6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlci1ob3Zlcik7XFxuICAtLWNhbGNpdGUtdWktZGFuZ2VyLXByZXNzOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItcHJlc3MpO1xcbiAgLS1jYWxjaXRlLXVpLWludmVyc2U6IHZhcigtLWNhbGNpdGUtY29sb3ItaW52ZXJzZSk7XFxuICAtLWNhbGNpdGUtYXBwLXotaW5kZXg6IHZhcigtLWNhbGNpdGUtei1pbmRleCk7XFxuICAtLWNhbGNpdGUtYXBwLXotaW5kZXgtdG9vbHRpcDogdmFyKC0tY2FsY2l0ZS16LWluZGV4LXRvb2x0aXApO1xcbiAgLS1jYWxjaXRlLWFwcC16LWluZGV4LXBvcHVwOiB2YXIoLS1jYWxjaXRlLXotaW5kZXgtcG9wdXApO1xcbiAgLS1jYWxjaXRlLWFwcC16LWluZGV4LW1vZGFsOiB2YXIoLS1jYWxjaXRlLXotaW5kZXgtbW9kYWwpO1xcbiAgLS1jYWxjaXRlLWFwcC16LWluZGV4LW92ZXJsYXk6IHZhcigtLWNhbGNpdGUtei1pbmRleC1vdmVybGF5KTtcXG4gIC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bjogdmFyKC0tY2FsY2l0ZS16LWluZGV4LWRyb3Bkb3duKTtcXG4gIC0tY2FsY2l0ZS1hcHAtei1pbmRleC10b2FzdDogdmFyKC0tY2FsY2l0ZS16LWluZGV4LXRvYXN0KTtcXG4gIC0tY2FsY2l0ZS1hcHAtei1pbmRleC1oZWFkZXI6IHZhcigtLWNhbGNpdGUtei1pbmRleC1oZWFkZXIpO1xcbiAgLS1jYWxjaXRlLWFwcC16LWluZGV4LXN0aWNreTogdmFyKC0tY2FsY2l0ZS16LWluZGV4LXN0aWNreSk7XFxuICAtLWNhbGNpdGUtYXBwLWJyZWFrcG9pbnQtY29udGVudC1maXhlZDogdmFyKC0tY2FsY2l0ZS1jb250YWluZXItc2l6ZS1jb250ZW50LWZpeGVkKTtcXG4gIC0tY2FsY2l0ZS1hcHAtYnJlYWtwb2ludC1jb250ZW50LWZsdWlkOiB2YXIoLS1jYWxjaXRlLWNvbnRhaW5lci1zaXplLWNvbnRlbnQtZmx1aWQpO1xcbiAgLS1jYWxjaXRlLWFwcC1icmVha3BvaW50LXdpZHRoLWxnOiB2YXIoLS1jYWxjaXRlLWNvbnRhaW5lci1zaXplLXdpZHRoLWxnLW1heCk7XFxuICAtLWNhbGNpdGUtYXBwLWJyZWFrcG9pbnQtd2lkdGgtbWQ6IHZhcigtLWNhbGNpdGUtY29udGFpbmVyLXNpemUtd2lkdGgtbWQtbWF4KTtcXG4gIC0tY2FsY2l0ZS1hcHAtYnJlYWtwb2ludC13aWR0aC1zbTogdmFyKC0tY2FsY2l0ZS1jb250YWluZXItc2l6ZS13aWR0aC1zbS1tYXgpO1xcbiAgLS1jYWxjaXRlLWFwcC1icmVha3BvaW50LXdpZHRoLXhzOiB2YXIoLS1jYWxjaXRlLWNvbnRhaW5lci1zaXplLXdpZHRoLXhzLW1heCk7XFxuICAtLWNhbGNpdGUtYXBwLWJyZWFrcG9pbnQtd2lkdGgteHhzOiB2YXIoLS1jYWxjaXRlLWNvbnRhaW5lci1zaXplLXdpZHRoLXh4cy1tYXgpO1xcbiAgLS1jYWxjaXRlLWFwcC1zcGFjaW5nLTExOiB2YXIoLS1jYWxjaXRlLXNwYWNpbmcteHh4bCk7XFxuICAtLWNhbGNpdGUtYXBwLXNwYWNpbmctODogdmFyKC0tY2FsY2l0ZS1zcGFjaW5nLXhsKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc3BhY2luZy03OiB2YXIoLS1jYWxjaXRlLXNwYWNpbmctbGcpO1xcbiAgLS1jYWxjaXRlLWFwcC1zcGFjaW5nLTY6IHZhcigtLWNhbGNpdGUtc3BhY2luZy1tZC1wbHVzKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc3BhY2luZy01OiB2YXIoLS1jYWxjaXRlLXNwYWNpbmctbWQpO1xcbiAgLS1jYWxjaXRlLWFwcC1zcGFjaW5nLTM6IHZhcigtLWNhbGNpdGUtc3BhY2luZy1zbSk7XFxuICAtLWNhbGNpdGUtYXBwLXNwYWNpbmctMjogdmFyKC0tY2FsY2l0ZS1zcGFjaW5nLXhzKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc3BhY2luZy0xOiB2YXIoLS1jYWxjaXRlLXNwYWNpbmcteHhzKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc3BhY2luZy0wOiB2YXIoLS1jYWxjaXRlLXNwYWNpbmctYmFzZSk7XFxuICAtLWNhbGNpdGUtYXBwLXNpemluZy0xMTogdmFyKC0tY2FsY2l0ZS1zaXplLW1kKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc2l6aW5nLTk6IHZhcigtLWNhbGNpdGUtc2l6ZS1zbSk7XFxuICAtLWNhbGNpdGUtYXBwLXNpemluZy04OiB2YXIoLS1jYWxjaXRlLXNwYWNpbmcteGwpO1xcbiAgLS1jYWxjaXRlLWFwcC1zaXppbmctNzogdmFyKC0tY2FsY2l0ZS1zaXplLXhzKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc2l6aW5nLTY6IHZhcigtLWNhbGNpdGUtc2l6ZS14eHhzLXBsdXMpO1xcbiAgLS1jYWxjaXRlLWFwcC1zaXppbmctNTogdmFyKC0tY2FsY2l0ZS1zaXplLXh4eHMpO1xcbiAgLS1jYWxjaXRlLWFwcC1zaXppbmctNDogdmFyKC0tY2FsY2l0ZS1zcGFjaW5nLXNtLXBsdXMpO1xcbiAgLS1jYWxjaXRlLWFwcC1zaXppbmctMzogdmFyKC0tY2FsY2l0ZS1zcGFjaW5nLXNtKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc2l6aW5nLTI6IHZhcigtLWNhbGNpdGUtc3BhY2luZy14cyk7XFxuICAtLWNhbGNpdGUtYXBwLXNpemluZy0xOiB2YXIoLS1jYWxjaXRlLXNwYWNpbmcteHhzKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc2l6aW5nLTA6IHZhcigtLWNhbGNpdGUtc3BhY2luZy1iYXNlKTtcXG4gIC0tY2FsY2l0ZS1hcHAtb3BhY2l0eS0xMDA6IHZhcigtLWNhbGNpdGUtYXBwLW9wYWNpdHktZnVsbCk7XFxuICAtLWNhbGNpdGUtYXBwLW9wYWNpdHktODU6IHZhcigtLWNhbGNpdGUtYXBwLW9wYWNpdHktZGFyayk7XFxuICAtLWNhbGNpdGUtYXBwLW9wYWNpdHktNTA6IHZhcigtLWNhbGNpdGUtYXBwLW9wYWNpdHktaGFsZik7XFxuICAtLWNhbGNpdGUtYXBwLW9wYWNpdHktNDA6IHZhcigtLWNhbGNpdGUtYXBwLW9wYWNpdHktbGlnaHQpO1xcbiAgLS1jYWxjaXRlLWFwcC1ib3JkZXItd2lkdGgtbm9uZTogdmFyKC0tY2FsY2l0ZS1ib3JkZXItd2lkdGgtbm9uZSk7XFxuICAtLWNhbGNpdGUtYXBwLWJvcmRlci13aWR0aC0yOiB2YXIoLS1jYWxjaXRlLWJvcmRlci13aWR0aC1sZyk7XFxuICAtLWNhbGNpdGUtYXBwLWJvcmRlci13aWR0aC0xOiB2YXIoLS1jYWxjaXRlLWJvcmRlci13aWR0aC1tZCk7XFxuICAtLWNhbGNpdGUtYXBwLWJvcmRlci13aWR0aC0wOiB2YXIoLS1jYWxjaXRlLWJvcmRlci13aWR0aC1zbSk7XFxuICAtLWNhbGNpdGUtYXBwLWJvcmRlci1yYWRpdXMtZnVsbDogdmFyKC0tY2FsY2l0ZS1jb3JuZXItcmFkaXVzLXBpbGwpO1xcbiAgLS1jYWxjaXRlLWFwcC1ib3JkZXItcmFkaXVzLW5vbmU6IHZhcigtLWNhbGNpdGUtY29ybmVyLXJhZGl1cy1zaGFycCk7XFxuICAtLWNhbGNpdGUtYXBwLWJvcmRlci1yYWRpdXMtMTogdmFyKC0tY2FsY2l0ZS1jb3JuZXItcmFkaXVzLXJvdW5kKTtcXG4gIC0tY2FsY2l0ZS1hcHAtYm9yZGVyLXJhZGl1cy0wOiB2YXIoLS1jYWxjaXRlLWNvcm5lci1yYWRpdXMtMCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtdGV4dC1jYXNlLWNhcGl0YWxpemU6IHZhcigtLWNhbGNpdGUtZm9udC10ZXh0LWNhc2UtY2FwaXRhbGl6ZSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtdGV4dC1jYXNlLWxvd2VyY2FzZTogdmFyKC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS1sb3dlcmNhc2UpO1xcbiAgLS1jYWxjaXRlLWFwcC1mb250LXRleHQtY2FzZS11cHBlcmNhc2U6IHZhcigtLWNhbGNpdGUtZm9udC10ZXh0LWNhc2UtdXBwZXJjYXNlKTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC10ZXh0LWNhc2Utbm9uZTogdmFyKC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS1ub25lKTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC10ZXh0LWRlY29yYXRpb24tdW5kZXJsaW5lOiB2YXIoLS1jYWxjaXRlLWZvbnQtdGV4dC1kZWNvcmF0aW9uLXVuZGVybGluZSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtdGV4dC1kZWNvcmF0aW9uLW5vbmU6IHZhcigtLWNhbGNpdGUtZm9udC10ZXh0LWRlY29yYXRpb24tbm9uZSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtcGFyYWdyYXBoLXNwYWNpbmctbm9ybWFsOiB2YXIoLS1jYWxjaXRlLWZvbnQtcGFyYWdyYXBoLXNwYWNpbmctbm9ybWFsKTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC1sZXR0ZXItc3BhY2luZy13aWRlOiB2YXIoLS1jYWxjaXRlLWZvbnQtbGV0dGVyLXNwYWNpbmctd2lkZSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtbGV0dGVyLXNwYWNpbmctbm9ybWFsOiB2YXIoLS1jYWxjaXRlLWZvbnQtbGV0dGVyLXNwYWNpbmctbm9ybWFsKTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC1sZXR0ZXItc3BhY2luZy10aWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxldHRlci1zcGFjaW5nLXRpZ2h0KTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC1zaXplLTY6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXh4bCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtc2l6ZS01OiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14bCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtc2l6ZS00OiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZyk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtc2l6ZS0zOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1tZCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtc2l6ZS0yOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtc2l6ZS0xOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1zbSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtc2l6ZS0wOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14cyk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtbG9vc2U6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1sb29zZSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtcmVsYXhlZDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXJlbGF4ZWQpO1xcbiAgLS1jYWxjaXRlLWFwcC1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLW5vcm1hbDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLW5vcm1hbCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251ZzogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbiAgLS1jYWxjaXRlLWFwcC1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXRpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtdGlnaHQpO1xcbiAgLS1jYWxjaXRlLWFwcC1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlOiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUpO1xcbiAgLS1jYWxjaXRlLWFwcC1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLTM6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC14bCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtMjogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLWxnKTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC1saW5lLWhlaWdodC1maXhlZDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXNtKTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC13ZWlnaHQtYm9sZDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ib2xkKTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC13ZWlnaHQtZGVtaTogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1zZW1pYm9sZCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtd2VpZ2h0LW1lZGl1bTogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgLS1jYWxjaXRlLWFwcC1mb250LXdlaWdodC1yZWd1bGFyOiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgLS1jYWxjaXRlLWFwcC1mb250LXdlaWdodC1saWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1saWdodCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtZmFtaWx5LWNvZGU6IHZhcigtLWNhbGNpdGUtZm9udC1mYW1pbHktY29kZSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtZmFtaWx5LXByaW1hcnk6IHZhcigtLWNhbGNpdGUtZm9udC1mYW1pbHktcHJpbWFyeSk7XFxuICAtLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjogdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTtcXG4gIC0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OiB2YXIoLS1jYWxjaXRlLXotaW5kZXgtZHJvcGRvd24pO1xcbiAgLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6IGNhbGMoLjE1cyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7XFxuICAtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOiB2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7XFxuICAtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OiBjYWxjKC4xcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7XFxuICAtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06IGNhbGMoLjJzICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTtcXG4gIC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6IGNhbGMoLjNzICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTtcXG4gIC0tY2FsY2l0ZS1wb3BvdmVyLXotaW5kZXg6IHZhcigtLWNhbGNpdGUtei1pbmRleC1wb3B1cCk7XFxuICAtLWNhbGNpdGUtYm9yZGVyLXJhZGl1czogdmFyKC0tY2FsY2l0ZS1ib3JkZXItcmFkaXVzLXJvdW5kLCA0cHgpO1xcbiAgLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMtYmFzZTogMDtcXG4gIC0tY2FsY2l0ZS1vZmZzZXQtaW52ZXJ0LWZvY3VzOiAwO1xcbiAgLS1jYWxjaXRlLXBhbmVsLXdpZHRoLW11bHRpcGxpZXI6IDE7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNhbGNpdGUtZm9udC1mYW1pbHkpO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICAuY2FsY2l0ZS1tb2RlLWF1dG8ge1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLXdoaXRlOiAjZjhmOGY4O1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLWdob3N0OiByZ2JhKDExNywgMTE3LCAxMTcsIC4zKTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci1pbnB1dDogIzc1NzU3NTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0zOiAjNDA0MDQwO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTI6ICM0YTRhNGE7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMTogIzU1NTU1NTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRleHQtbGluazogIzAwYTBmZjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRleHQtaW52ZXJzZTogIzE1MTUxNTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMzogIzlmOWY5ZjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMjogI2JmYmZiZjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMTogI2ZmZmZmZjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWludmVyc2UtcHJlc3M6ICNmM2YzZjM7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlLWhvdmVyOiAjZmZmZmZmO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZTogI2Y4ZjhmODtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItcHJlc3M6ICNkOTAwMTI7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyLWhvdmVyOiAjZmYwMDE1O1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlcjogI2ZlNTgzZTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nLXByZXNzOiAjZjVkMDAwO1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmctaG92ZXI6ICNmZmVlMzM7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZzogI2ZmYzkwMDtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzLXByZXNzOiAjMDBiODFiO1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MtaG92ZXI6ICMzYmVkNTI7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2VzczogIzM2ZGE0MztcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvLXByZXNzOiAjMDA5YWYyO1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8taG92ZXI6ICMzZGI4ZmY7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mbzogIzAwYTBmZjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXVuZGVybGluZTogcmdiYSgwLCAxNjAsIDI1NSwgLjQpO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYnJhbmQtcHJlc3M6ICMwMDYxOWI7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1icmFuZC1ob3ZlcjogIzAwN2FjMjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kOiAjMDA5YWYyO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtdGludDogcmdiYSg0MywgNDMsIDQzLCAuOCk7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1zY3JpbTogcmdiYSgwLCAwLCAwLCAuODUpO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtcHJlc3M6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA4KTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNCk7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtY3VycmVudDogIzIxNDE1NTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMzogIzE1MTUxNTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMjogIzIwMjAyMDtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMTogIzJiMmIyYjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWJhY2tncm91bmQ6ICMzNTM1MzU7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1mb2N1czogIzAwOWFmMjtcXG4gIH1cXG59XFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcXG4gIC5jYWxjaXRlLW1vZGUtYXV0byB7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItd2hpdGU6ICNmZmZmZmY7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItZ2hvc3Q6IHJnYmEoMCwgMCwgMCwgLjMpO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLWlucHV0OiAjOTQ5NDk0O1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTM6ICNkZmRmZGY7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMjogI2Q0ZDRkNDtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0xOiAjY2FjYWNhO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdGV4dC1saW5rOiAjMDA2MTliO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdGV4dC1pbnZlcnNlOiAjZmZmZmZmO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdGV4dC0zOiAjNmE2YTZhO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdGV4dC0yOiAjNGE0YTRhO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdGV4dC0xOiAjMTUxNTE1O1xcbiAgICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZS1wcmVzczogIzIwMjAyMDtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWludmVyc2UtaG92ZXI6ICMyYjJiMmI7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlOiAjMzUzNTM1O1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlci1wcmVzczogIzdjMWQxMztcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItaG92ZXI6ICNhODJiMWU7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyOiAjZDgzMDIwO1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmctcHJlc3M6ICNiZmEyMDA7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZy1ob3ZlcjogI2Q5YmMwMDtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nOiAjZWRkMzE3O1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MtcHJlc3M6ICMxYTYzMjQ7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1ob3ZlcjogIzI4ODgzNTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzOiAjMzVhYzQ2O1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8tcHJlc3M6ICMwMDMwNGQ7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mby1ob3ZlcjogIzAwNDg3NDtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvOiAjMDA2MTliO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYnJhbmQtdW5kZXJsaW5lOiByZ2JhKDAsIDk3LCAxNTUsIC40KTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXByZXNzOiAjMDA0ODc0O1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYnJhbmQtaG92ZXI6ICMwMDYxOWI7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1icmFuZDogIzAwN2FjMjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXRpbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtc2NyaW06IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjg1KTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXByZXNzOiByZ2JhKDAsIDAsIDAsIC4wOCk7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1ob3ZlcjogcmdiYSgwLCAwLCAwLCAuMDQpO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLWN1cnJlbnQ6ICNjN2VhZmY7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTM6ICNlYWVhZWE7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTI6ICNmM2YzZjM7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTE6ICNmZmZmZmY7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1iYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbiAgICAtLWNhbGNpdGUtY29sb3ItZm9jdXM6ICMwMDdhYzI7XFxuICB9XFxufVxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICA6cm9vdCB7XFxuICAgIC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgaW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGluLWRvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC01cHgsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgaW4tdXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDVweCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBpbi1yaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoLTVweCwgMCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBpbi1sZWZ0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCg1cHgsIDAsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgaW4tc2NhbGUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMC45NSwgMC45NSwgMSk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVaKDEpO1xcbiAgfVxcbn1cXG4uY2FsY2l0ZS1hbmltYXRlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpO1xcbn1cXG5cXG4uY2FsY2l0ZS1hbmltYXRlX19pbiB7XFxuICBhbmltYXRpb24tbmFtZTogaW47XFxufVxcblxcbi5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd24ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGluLWRvd247XFxufVxcblxcbi5jYWxjaXRlLWFuaW1hdGVfX2luLXVwIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBpbi11cDtcXG59XFxuXFxuLmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGluLXJpZ2h0O1xcbn1cXG5cXG4uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBpbi1sZWZ0O1xcbn1cXG5cXG4uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZSB7XFxuICBhbmltYXRpb24tbmFtZTogaW4tc2NhbGU7XFxufVxcblxcbi5jYWxjaXRlLXNvcnRhYmxlLS1jaG9zZW4sIC5jYWxjaXRlLXNvcnRhYmxlLS1naG9zdCwgLmNhbGNpdGUtc29ydGFibGUtLWRyYWcsIC5jYWxjaXRlLXNvcnRhYmxlLS1mYWxsYmFjayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY2FsY2l0ZS1zb3J0YWJsZS0tZ2hvc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaW5zZXQtYmxvY2s6IDBweDtcXG4gIGluc2V0LWlubGluZS1zdGFydDogMHB4O1xcbiAgaW5zZXQtaW5saW5lLWVuZDogMHB4O1xcbiAgei1pbmRleDogdmFyKC0tY2FsY2l0ZS16LWluZGV4KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWJyYW5kKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yKTtcXG59XFxuXFxuLmNhbGNpdGUtc29ydGFibGUtLWRyYWcge1xcbiAgLS10dy1zaGFkb3c6IDAgNnB4IDIwcHggLTRweCByZ2JhKDAsIDAsIDAsIC4xKSwgMCA0cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjA4KTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgNnB4IDIwcHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCAxMnB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwgMCwgMCwgMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwgMCwgMCwgMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cIixcIjpub3QoW2NhbGNpdGUtaHlkcmF0ZWRdKTppcyhjYWxjaXRlLWFjY29yZGlvbiwgY2FsY2l0ZS1hY2NvcmRpb24taXRlbSwgY2FsY2l0ZS1hY3Rpb24sIGNhbGNpdGUtYWN0aW9uLWJhciwgY2FsY2l0ZS1hY3Rpb24tZ3JvdXAsIGNhbGNpdGUtYWN0aW9uLW1lbnUsIGNhbGNpdGUtYWN0aW9uLXBhZCwgY2FsY2l0ZS1hbGVydCwgY2FsY2l0ZS1hdXRvY29tcGxldGUsIGNhbGNpdGUtYXV0b2NvbXBsZXRlLWl0ZW0sIGNhbGNpdGUtYXV0b2NvbXBsZXRlLWl0ZW0tZ3JvdXAsIGNhbGNpdGUtYXZhdGFyLCBjYWxjaXRlLWJsb2NrLCBjYWxjaXRlLWJsb2NrLWdyb3VwLCBjYWxjaXRlLWJsb2NrLXNlY3Rpb24sIGNhbGNpdGUtYnV0dG9uLCBjYWxjaXRlLWNhcmQsIGNhbGNpdGUtY2FyZC1ncm91cCwgY2FsY2l0ZS1jYXJvdXNlbCwgY2FsY2l0ZS1jYXJvdXNlbC1pdGVtLCBjYWxjaXRlLWNoZWNrYm94LCBjYWxjaXRlLWNoaXAsIGNhbGNpdGUtY2hpcC1ncm91cCwgY2FsY2l0ZS1jb2xvci1waWNrZXIsIGNhbGNpdGUtY29sb3ItcGlja2VyLWhleC1pbnB1dCwgY2FsY2l0ZS1jb2xvci1waWNrZXItc3dhdGNoLCBjYWxjaXRlLWNvbWJvYm94LCBjYWxjaXRlLWNvbWJvYm94LWl0ZW0sIGNhbGNpdGUtY29tYm9ib3gtaXRlbS1ncm91cCwgY2FsY2l0ZS1kYXRlLXBpY2tlciwgY2FsY2l0ZS1kYXRlLXBpY2tlci1kYXksIGNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGgsIGNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGgtaGVhZGVyLCBjYWxjaXRlLWRpYWxvZywgY2FsY2l0ZS1kcm9wZG93biwgY2FsY2l0ZS1kcm9wZG93bi1ncm91cCwgY2FsY2l0ZS1kcm9wZG93bi1pdGVtLCBjYWxjaXRlLWZhYiwgY2FsY2l0ZS1maWx0ZXIsIGNhbGNpdGUtZmxvdywgY2FsY2l0ZS1mbG93LWl0ZW0sIGNhbGNpdGUtZ3JhcGgsIGNhbGNpdGUtaGFuZGxlLCBjYWxjaXRlLWljb24sIGNhbGNpdGUtaW5saW5lLWVkaXRhYmxlLCBjYWxjaXRlLWlucHV0LCBjYWxjaXRlLWlucHV0LWRhdGUtcGlja2VyLCBjYWxjaXRlLWlucHV0LW1lc3NhZ2UsIGNhbGNpdGUtaW5wdXQtbnVtYmVyLCBjYWxjaXRlLWlucHV0LXRleHQsIGNhbGNpdGUtaW5wdXQtdGltZS1waWNrZXIsIGNhbGNpdGUtaW5wdXQtdGltZS16b25lLCBjYWxjaXRlLWxhYmVsLCBjYWxjaXRlLWxpbmssIGNhbGNpdGUtbGlzdCwgY2FsY2l0ZS1saXN0LWl0ZW0sIGNhbGNpdGUtbGlzdC1pdGVtLWdyb3VwLCBjYWxjaXRlLWxvYWRlciwgY2FsY2l0ZS1tZW51LCBjYWxjaXRlLW1lbnUtaXRlbSwgY2FsY2l0ZS1tZXRlciwgY2FsY2l0ZS1tb2RhbCwgY2FsY2l0ZS1uYXZpZ2F0aW9uLCBjYWxjaXRlLW5hdmlnYXRpb24tbG9nbywgY2FsY2l0ZS1uYXZpZ2F0aW9uLXVzZXIsIGNhbGNpdGUtbm90aWNlLCBjYWxjaXRlLW9wdGlvbiwgY2FsY2l0ZS1vcHRpb24tZ3JvdXAsIGNhbGNpdGUtcGFnaW5hdGlvbiwgY2FsY2l0ZS1wYW5lbCwgY2FsY2l0ZS1wb3BvdmVyLCBjYWxjaXRlLXByb2dyZXNzLCBjYWxjaXRlLXJhZGlvLWJ1dHRvbiwgY2FsY2l0ZS1yYWRpby1idXR0b24tZ3JvdXAsIGNhbGNpdGUtcmF0aW5nLCBjYWxjaXRlLXNjcmltLCBjYWxjaXRlLXNlZ21lbnRlZC1jb250cm9sLCBjYWxjaXRlLXNlZ21lbnRlZC1jb250cm9sLWl0ZW0sIGNhbGNpdGUtc2VsZWN0LCBjYWxjaXRlLXNoZWV0LCBjYWxjaXRlLXNoZWxsLCBjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3csIGNhbGNpdGUtc2hlbGwtcGFuZWwsIGNhbGNpdGUtc2xpZGVyLCBjYWxjaXRlLXNvcnQtaGFuZGxlLCBjYWxjaXRlLXNvcnRhYmxlLWxpc3QsIGNhbGNpdGUtc3BsaXQtYnV0dG9uLCBjYWxjaXRlLXN0YWNrLCBjYWxjaXRlLXN0ZXBwZXIsIGNhbGNpdGUtc3RlcHBlci1pdGVtLCBjYWxjaXRlLXN3aXRjaCwgY2FsY2l0ZS10YWIsIGNhbGNpdGUtdGFiLW5hdiwgY2FsY2l0ZS10YWItdGl0bGUsIGNhbGNpdGUtdGFibGUsIGNhbGNpdGUtdGFibGUtY2VsbCwgY2FsY2l0ZS10YWJsZS1oZWFkZXIsIGNhbGNpdGUtdGFibGUtcm93LCBjYWxjaXRlLXRhYnMsIGNhbGNpdGUtdGV4dC1hcmVhLCBjYWxjaXRlLXRpbGUsIGNhbGNpdGUtdGlsZS1ncm91cCwgY2FsY2l0ZS10aWxlLXNlbGVjdCwgY2FsY2l0ZS10aWxlLXNlbGVjdC1ncm91cCwgY2FsY2l0ZS10aW1lLXBpY2tlciwgY2FsY2l0ZS10aXAsIGNhbGNpdGUtdGlwLWdyb3VwLCBjYWxjaXRlLXRpcC1tYW5hZ2VyLCBjYWxjaXRlLXRvb2x0aXAsIGNhbGNpdGUtdHJlZSwgY2FsY2l0ZS10cmVlLWl0ZW0pIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jYWxjaXRlLXotaW5kZXgtdG9vbHRpcDogOTAxO1xcbiAgLS1jYWxjaXRlLXotaW5kZXgtcG9wdXA6IDkwMDtcXG4gIC0tY2FsY2l0ZS16LWluZGV4LW1vZGFsOiA4MDA7XFxuICAtLWNhbGNpdGUtei1pbmRleC1vdmVybGF5OiA3MDA7XFxuICAtLWNhbGNpdGUtei1pbmRleC1kcm9wZG93bjogNjAwO1xcbiAgLS1jYWxjaXRlLXotaW5kZXgtdG9hc3Q6IDUwMDtcXG4gIC0tY2FsY2l0ZS16LWluZGV4LWhlYWRlcjogNDAwO1xcbiAgLS1jYWxjaXRlLXotaW5kZXgtc3RpY2t5OiAzMDA7XFxuICAtLWNhbGNpdGUtei1pbmRleDogMTtcXG4gIC0tY2FsY2l0ZS16LWluZGV4LWRlZXA6IC05OTk5OTk7XFxuICAtLWNhbGNpdGUtc3BhY2luZy14eHhsOiAycmVtO1xcbiAgLS1jYWxjaXRlLXNwYWNpbmcteHhsOiAxLjVyZW07XFxuICAtLWNhbGNpdGUtc3BhY2luZy14bDogMS4yNXJlbTtcXG4gIC0tY2FsY2l0ZS1zcGFjaW5nLWxnOiAxcmVtO1xcbiAgLS1jYWxjaXRlLXNwYWNpbmctbWQtcGx1czogLjg3NXJlbTtcXG4gIC0tY2FsY2l0ZS1zcGFjaW5nLW1kOiAuNzVyZW07XFxuICAtLWNhbGNpdGUtc3BhY2luZy1zbS1wbHVzOiAuNjI1cmVtO1xcbiAgLS1jYWxjaXRlLXNwYWNpbmctc206IC41cmVtO1xcbiAgLS1jYWxjaXRlLXNwYWNpbmcteHM6IC4zNzVyZW07XFxuICAtLWNhbGNpdGUtc3BhY2luZy14eHM6IC4yNXJlbTtcXG4gIC0tY2FsY2l0ZS1zcGFjaW5nLWJhc2U6IDJweDtcXG4gIC0tY2FsY2l0ZS1zcGFjaW5nLXB4OiAxcHg7XFxuICAtLWNhbGNpdGUtc3BhY2luZy1ub25lOiAwO1xcbiAgLS1jYWxjaXRlLXNwYWNpbmctZml4ZWQteHh4bDogMzJweDtcXG4gIC0tY2FsY2l0ZS1zcGFjaW5nLWZpeGVkLXh4bDogMjBweDtcXG4gIC0tY2FsY2l0ZS1zcGFjaW5nLWZpeGVkLXhsOiAxNnB4O1xcbiAgLS1jYWxjaXRlLXNwYWNpbmctZml4ZWQtbGc6IDE0cHg7XFxuICAtLWNhbGNpdGUtc3BhY2luZy1maXhlZC1tZDogMTJweDtcXG4gIC0tY2FsY2l0ZS1zcGFjaW5nLWZpeGVkLXNtOiA4cHg7XFxuICAtLWNhbGNpdGUtc3BhY2luZy1maXhlZC14czogNnB4O1xcbiAgLS1jYWxjaXRlLXNwYWNpbmctZml4ZWQteHhzOiA0cHg7XFxuICAtLWNhbGNpdGUtc2l6ZS14eHhsOiA2cmVtO1xcbiAgLS1jYWxjaXRlLXNpemUteHhsOiA0cmVtO1xcbiAgLS1jYWxjaXRlLXNpemUteGw6IDNyZW07XFxuICAtLWNhbGNpdGUtc2l6ZS1sZzogMi43NXJlbTtcXG4gIC0tY2FsY2l0ZS1zaXplLW1kOiAycmVtO1xcbiAgLS1jYWxjaXRlLXNpemUtc206IDEuNXJlbTtcXG4gIC0tY2FsY2l0ZS1zaXplLXhzOiAxcmVtO1xcbiAgLS1jYWxjaXRlLXNpemUteHhzOiAuODc1cmVtO1xcbiAgLS1jYWxjaXRlLXNpemUteHh4czogLjc1cmVtO1xcbiAgLS1jYWxjaXRlLXNpemUtcHg6IDFweDtcXG4gIC0tY2FsY2l0ZS1zaXplLWZpeGVkLXh4eGw6IDMycHg7XFxuICAtLWNhbGNpdGUtc2l6ZS1maXhlZC14eGw6IDI0cHg7XFxuICAtLWNhbGNpdGUtc2l6ZS1maXhlZC14bDogMjBweDtcXG4gIC0tY2FsY2l0ZS1zaXplLWZpeGVkLWxnOiAxNnB4O1xcbiAgLS1jYWxjaXRlLXNpemUtZml4ZWQtbWQtcGx1czogMTRweDtcXG4gIC0tY2FsY2l0ZS1zaXplLWZpeGVkLW1kOiAxMnB4O1xcbiAgLS1jYWxjaXRlLXNpemUtZml4ZWQtc20tcGx1czogMTBweDtcXG4gIC0tY2FsY2l0ZS1zaXplLWZpeGVkLXNtOiA4cHg7XFxuICAtLWNhbGNpdGUtc2l6ZS1maXhlZC14czogNnB4O1xcbiAgLS1jYWxjaXRlLXNpemUtZml4ZWQteHhzOiA0cHg7XFxuICAtLWNhbGNpdGUtc2l6ZS1maXhlZC14eHhzOiAycHg7XFxuICAtLWNhbGNpdGUtb3BhY2l0eS1kaXNhYmxlZDogLjU7XFxuICAtLWNhbGNpdGUtb3BhY2l0eS1mdWxsOiAxO1xcbiAgLS1jYWxjaXRlLW9wYWNpdHktZGFyazogLjg1O1xcbiAgLS1jYWxjaXRlLW9wYWNpdHktaGFsZjogLjU7XFxuICAtLWNhbGNpdGUtb3BhY2l0eS1saWdodDogLjQ7XFxuICAtLWNhbGNpdGUtZm9udC10ZXh0LWNhc2UtY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZTtcXG4gIC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS1sb3dlcmNhc2U6IGxvd2VyY2FzZTtcXG4gIC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS11cHBlcmNhc2U6IHVwcGVyY2FzZTtcXG4gIC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS1ub25lOiBub25lO1xcbiAgLS1jYWxjaXRlLWZvbnQtdGV4dC1kZWNvcmF0aW9uLXVuZGVybGluZTogdW5kZXJsaW5lO1xcbiAgLS1jYWxjaXRlLWZvbnQtdGV4dC1kZWNvcmF0aW9uLW5vbmU6IG5vbmU7XFxuICAtLWNhbGNpdGUtZm9udC1wYXJhZ3JhcGgtc3BhY2luZy1ub3JtYWw6IDRweDtcXG4gIC0tY2FsY2l0ZS1mb250LWxldHRlci1zcGFjaW5nLXdpZGU6IC40O1xcbiAgLS1jYWxjaXRlLWZvbnQtbGV0dGVyLXNwYWNpbmctbm9ybWFsOiAwO1xcbiAgLS1jYWxjaXRlLWZvbnQtbGV0dGVyLXNwYWNpbmctdGlnaHQ6IC0uNDtcXG4gIC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLWxvb3NlOiAyO1xcbiAgLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtcmVsYXhlZDogMS42MjU7XFxuICAtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1ub3JtYWw6IDEuNTtcXG4gIC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWc6IDEuMzc1O1xcbiAgLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtdGlnaHQ6IDEuMjU7XFxuICAtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZTogYXV0bztcXG4gIC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXhsOiAyNHB4O1xcbiAgLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtbGc6IDIwcHg7XFxuICAtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC1iYXNlOiAxNnB4O1xcbiAgLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtc206IDEycHg7XFxuICAtLWNhbGNpdGUtZm9udC1zdHlsZS1lbXBoYXNpczogaXRhbGljO1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS14eGw6IDI0cHg7XFxuICAtLWNhbGNpdGUtZm9udC1zaXplLXhsOiAyMHB4O1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZzogMThweDtcXG4gIC0tY2FsY2l0ZS1mb250LXNpemUtbWQ6IDE2cHg7XFxuICAtLWNhbGNpdGUtZm9udC1zaXplOiAxNHB4O1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS1zbTogMTJweDtcXG4gIC0tY2FsY2l0ZS1mb250LXNpemUteHM6IDEwcHg7XFxuICAtLWNhbGNpdGUtZm9udC13ZWlnaHQtYm9sZDogNjAwO1xcbiAgLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXNlbWlib2xkOiA2MDA7XFxuICAtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWNhbGNpdGUtZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xcbiAgLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XFxuICAtLWNhbGNpdGUtZm9udC1mYW1pbHktY29kZTogTW9uYWNvLCBDb25zb2xhcywgXFxcIkFuZGFsZSBNb25vXFxcIiwgXFxcIkx1Y2lkYSBDb25zb2xlXFxcIiwgbW9ub3NwYWNlO1xcbiAgLS1jYWxjaXRlLWZvbnQtZmFtaWx5OiBcXFwiQXZlbmlyIE5leHRcXFwiLCBBdmVuaXIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWNhbGNpdGUtY29ybmVyLXJhZGl1cy1waWxsOiAxMDAlO1xcbiAgLS1jYWxjaXRlLWNvcm5lci1yYWRpdXMtcm91bmQ6IDRweDtcXG4gIC0tY2FsY2l0ZS1jb3JuZXItcmFkaXVzLXNoYXJwOiAwO1xcbiAgLS1jYWxjaXRlLWNvbnRhaW5lci1zaXplLWNvbnRlbnQtZml4ZWQ6IDE0NDBweDtcXG4gIC0tY2FsY2l0ZS1jb250YWluZXItc2l6ZS1jb250ZW50LWZsdWlkOiAxMDAlO1xcbiAgLS1jYWxjaXRlLWNvbnRhaW5lci1zaXplLWd1dHRlcjogMTZweDtcXG4gIC0tY2FsY2l0ZS1jb250YWluZXItc2l6ZS1tYXJnaW46IDI0cHg7XFxuICAtLWNhbGNpdGUtY29sb3ItYmFja2dyb3VuZC1ub25lOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgLS1jYWxjaXRlLWJvcmRlci13aWR0aC1sZzogNHB4O1xcbiAgLS1jYWxjaXRlLWJvcmRlci13aWR0aC1tZDogMnB4O1xcbiAgLS1jYWxjaXRlLWJvcmRlci13aWR0aC1zbTogMXB4O1xcbiAgLS1jYWxjaXRlLWJvcmRlci13aWR0aC1ub25lOiAwO1xcbiAgLS1jYWxjaXRlLXNoYWRvdy1tZDogMCA0cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgLjA4KSwgMCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMSk7XFxuICAtLWNhbGNpdGUtc2hhZG93LXNtOiAwIDJweCA4cHggMCByZ2JhKDAsIDAsIDAsIC4wNCksIDAgNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIC4wOCk7XFxuICAtLWNhbGNpdGUtc2hhZG93LW5vbmU6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcXG4gIC0tY2FsY2l0ZS1jb3JuZXItcmFkaXVzOiB2YXIoLS1jYWxjaXRlLWNvcm5lci1yYWRpdXMtc2hhcnApO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWhpZXJhcmNoeS1vdmVybGluZSB7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXNtKTtcXG4gIHRleHQtY2FzZTogdmFyKC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS11cHBlcmNhc2UpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtYm9sZCk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1ib2xkLW1pbnVzLTEge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLWJvbGQtbWludXMtMiB7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1zZW1pYm9sZCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1zbSk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1ib2xkLTMge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUteHhsKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLWJvbGQtMiB7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1zZW1pYm9sZCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14bCk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1ib2xkLTEge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbGcpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtYm9sZC0wIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLW1kKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLW1lZGl1bS1taW51cy0xIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtbWVkaXVtLW1pbnVzLTIge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXNtKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLW1lZGl1bS0zIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14eGwpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtbWVkaXVtLTIge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXhsKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLW1lZGl1bS0xIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZyk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1tZWRpdW0tMCB7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbWQpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtcmVndWxhci1taW51cy0xIHtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1yZWd1bGFyLW1pbnVzLTIge1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtc20pO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtcmVndWxhci0zIHtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXh4bCk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1yZWd1bGFyLTIge1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUteGwpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtcmVndWxhci0xIHtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLWxnKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLXJlZ3VsYXItMCB7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1tZCk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1saWdodC1taW51cy0xIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1saWdodC1taW51cy0yIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXNtKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLWxpZ2h0LTMge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbGlnaHQpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS10aWdodCk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXh4bCk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktd3JhcC1saWdodC0yIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251Zyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXhsKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS13cmFwLWxpZ2h0LTEge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbGlnaHQpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1zbnVnKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbGcpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXdyYXAtbGlnaHQtMCB7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1saWdodCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1tZCk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktYm9sZC0xaCB7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1zZW1pYm9sZCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXhsKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbGcpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWJvbGQtMGgge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC1sZyk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLW1kKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1ib2xkLW1pbnVzLTFoIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1ib2xkLW1pbnVzLTJoIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtc20pO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWJvbGQtbWludXMtM2gge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC1zbSk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXhzKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1tZWRpdW0tMWgge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQteGwpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZyk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktbWVkaXVtLTBoIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLWxnKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUtbWQpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LW1lZGl1bS1taW51cy0xaCB7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LW1lZGl1bS1taW51cy0yaCB7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1zbSk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktbWVkaXVtLW1pbnVzLTNoIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXNtKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUteHMpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LXJlZ3VsYXItMWgge1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC14bCk7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLWxnKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1yZWd1bGFyLTBoIHtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtbGcpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1tZCk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktcmVndWxhci1taW51cy0yaCB7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXNtKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1yZWd1bGFyLW1pbnVzLTNoIHtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtc20pO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14cyk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktbGlnaHQtMWgge1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZyk7XFxuICBmb250LXdlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1saWdodCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXhsKTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1saWdodC0waCB7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLW1kKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtbGcpO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWxpZ2h0LW1pbnVzLTFoIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1saWdodC1taW51cy0yaCB7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXNtKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1saWdodC1taW51cy0zaCB7XFxuICBmb250LXNpemU6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXhzKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtc20pO1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jYWxjaXRlLWZvbnQtZmFtaWx5KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsY2l0ZS1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtcmVndWxhcik7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tY2FsY2l0ZS1mb250LWxldHRlci1zcGFjaW5nLW5vcm1hbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLWJhc2UpO1xcbiAgcGFyYWdyYXBoLXNwYWNpbmc6IHZhcigtLWNhbGNpdGUtZm9udC1wYXJhZ3JhcGgtc3BhY2luZy1ub3JtYWwpO1xcbiAgdGV4dC1jYXNlOiB2YXIoLS1jYWxjaXRlLWZvbnQtdGV4dC1jYXNlLW5vbmUpO1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHZhcigtLWNhbGNpdGUtZm9udC10ZXh0LWRlY29yYXRpb24tbm9uZSk7XFxuICB0ZXh0LWRlY29yYXRpb246IHZhcigtLWNhbGNpdGUtZm9udC10ZXh0LWRlY29yYXRpb24tbm9uZSk7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktaGllcmFyY2h5LWNhcHRpb24ge1xcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWhpZXJhcmNoeS1ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIgTmV4dCwgQXZlbmlyLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgcGFyYWdyYXBoLXNwYWNpbmc6IDRweDtcXG4gIHRleHQtY2FzZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1oaWVyYXJjaHktYm9keS1zbnVnIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1oaWVyYXJjaHktaGVhZGluZy01IHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMS4zNzU7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktaGllcmFyY2h5LWhlYWRpbmctNCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWhpZXJhcmNoeS1oZWFkaW5nLTMge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1oaWVyYXJjaHktaGVhZGluZy0yIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMS4zNzU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktaGllcmFyY2h5LWhlYWRpbmctMSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uY2FsY2l0ZS10eXBvZ3JhcGh5LWhpZXJhcmNoeS1kaXNwbGF5LTIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmNhbGNpdGUtdHlwb2dyYXBoeS1oaWVyYXJjaHktZGlzcGxheS0xIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMS4zNzU7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5jYWxjaXRlLXR5cG9ncmFwaHktcmVndWxhci1taW51cy0xaCB7XFxuICBmb250LWZhbWlseTogQXZlbmlyIE5leHQsIEF2ZW5pciwgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIHBhcmFncmFwaC1zcGFjaW5nOiA0cHg7XFxuICB0ZXh0LWNhc2U6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItd2hpdGU6ICNmZmZmZmY7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLWdob3N0OiByZ2JhKDAsIDAsIDAsIC4zKTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItaW5wdXQ6ICM5NDk0OTQ7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTM6ICNkZmRmZGY7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTI6ICNkNGQ0ZDQ7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTE6ICNjYWNhY2E7XFxuICAtLWNhbGNpdGUtY29sb3ItdGV4dC1saW5rOiAjMDA2MTliO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtaW52ZXJzZTogI2ZmZmZmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTM6ICM2YTZhNmE7XFxuICAtLWNhbGNpdGUtY29sb3ItdGV4dC0yOiAjNGE0YTRhO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMTogIzE1MTUxNTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlLXByZXNzOiAjMjAyMDIwO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWludmVyc2UtaG92ZXI6ICMyYjJiMmI7XFxuICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZTogIzM1MzUzNTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyLXByZXNzOiAjN2MxZDEzO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItaG92ZXI6ICNhODJiMWU7XFxuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlcjogI2Q4MzAyMDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZy1wcmVzczogI2JmYTIwMDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZy1ob3ZlcjogI2Q5YmMwMDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZzogI2VkZDMxNztcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1wcmVzczogIzFhNjMyNDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1ob3ZlcjogIzI4ODgzNTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2VzczogIzM1YWM0NjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mby1wcmVzczogIzAwMzA0ZDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mby1ob3ZlcjogIzAwNDg3NDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mbzogIzAwNjE5YjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1icmFuZC11bmRlcmxpbmU6IHJnYmEoMCwgOTcsIDE1NSwgLjQpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXByZXNzOiAjMDA0ODc0O1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLWhvdmVyOiAjMDA2MTliO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kOiAjMDA3YWMyO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXRpbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXNjcmltOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44NSk7XFxuICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtcHJlc3M6IHJnYmEoMCwgMCwgMCwgLjA4KTtcXG4gIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1ob3ZlcjogcmdiYSgwLCAwLCAwLCAuMDQpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtY3VycmVudDogI2M3ZWFmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTM6ICNlYWVhZWE7XFxuICAtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yOiAjZjNmM2YzO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMTogI2ZmZmZmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1iYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvY3VzOiAjMDA3YWMyO1xcbn1cXG5cXG4uY2FsY2l0ZS1tb2RlLWxpZ2h0IHtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItd2hpdGU6ICNmZmZmZmY7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLWdob3N0OiByZ2JhKDAsIDAsIDAsIC4zKTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItaW5wdXQ6ICM5NDk0OTQ7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTM6ICNkZmRmZGY7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTI6ICNkNGQ0ZDQ7XFxuICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTE6ICNjYWNhY2E7XFxuICAtLWNhbGNpdGUtY29sb3ItdGV4dC1saW5rOiAjMDA2MTliO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtaW52ZXJzZTogI2ZmZmZmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTM6ICM2YTZhNmE7XFxuICAtLWNhbGNpdGUtY29sb3ItdGV4dC0yOiAjNGE0YTRhO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMTogIzE1MTUxNTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlLXByZXNzOiAjMjAyMDIwO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWludmVyc2UtaG92ZXI6ICMyYjJiMmI7XFxuICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZTogIzM1MzUzNTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyLXByZXNzOiAjN2MxZDEzO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItaG92ZXI6ICNhODJiMWU7XFxuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlcjogI2Q4MzAyMDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZy1wcmVzczogI2JmYTIwMDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZy1ob3ZlcjogI2Q5YmMwMDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZzogI2VkZDMxNztcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1wcmVzczogIzFhNjMyNDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1ob3ZlcjogIzI4ODgzNTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2VzczogIzM1YWM0NjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mby1wcmVzczogIzAwMzA0ZDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mby1ob3ZlcjogIzAwNDg3NDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mbzogIzAwNjE5YjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1icmFuZC11bmRlcmxpbmU6IHJnYmEoMCwgOTcsIDE1NSwgLjQpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXByZXNzOiAjMDA0ODc0O1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLWhvdmVyOiAjMDA2MTliO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kOiAjMDA3YWMyO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXRpbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXNjcmltOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44NSk7XFxuICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtcHJlc3M6IHJnYmEoMCwgMCwgMCwgLjA4KTtcXG4gIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1ob3ZlcjogcmdiYSgwLCAwLCAwLCAuMDQpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtY3VycmVudDogI2M3ZWFmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTM6ICNlYWVhZWE7XFxuICAtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yOiAjZjNmM2YzO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMTogI2ZmZmZmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1iYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvY3VzOiAjMDA3YWMyO1xcbn1cXG5cXG4uY2FsY2l0ZS1tb2RlLWRhcmsge1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci13aGl0ZTogI2Y4ZjhmODtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItZ2hvc3Q6IHJnYmEoMTE3LCAxMTcsIDExNywgLjMpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci1pbnB1dDogIzc1NzU3NTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMzogIzQwNDA0MDtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMjogIzRhNGE0YTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMTogIzU1NTU1NTtcXG4gIC0tY2FsY2l0ZS1jb2xvci10ZXh0LWxpbms6ICMwMGEwZmY7XFxuICAtLWNhbGNpdGUtY29sb3ItdGV4dC1pbnZlcnNlOiAjMTUxNTE1O1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMzogIzlmOWY5ZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTI6ICNiZmJmYmY7XFxuICAtLWNhbGNpdGUtY29sb3ItdGV4dC0xOiAjZmZmZmZmO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWludmVyc2UtcHJlc3M6ICNmM2YzZjM7XFxuICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZS1ob3ZlcjogI2ZmZmZmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlOiAjZjhmOGY4O1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItcHJlc3M6ICNkOTAwMTI7XFxuICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlci1ob3ZlcjogI2ZmMDAxNTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyOiAjZmU1ODNlO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nLXByZXNzOiAjZjVkMDAwO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nLWhvdmVyOiAjZmZlZTMzO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nOiAjZmZjOTAwO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzLXByZXNzOiAjMDBiODFiO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzLWhvdmVyOiAjM2JlZDUyO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzOiAjMzZkYTQzO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvLXByZXNzOiAjMDA5YWYyO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvLWhvdmVyOiAjM2RiOGZmO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvOiAjMDBhMGZmO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXVuZGVybGluZTogcmdiYSgwLCAxNjAsIDI1NSwgLjQpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXByZXNzOiAjMDA2MTliO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLWhvdmVyOiAjMDA3YWMyO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kOiAjMDA5YWYyO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXRpbnQ6IHJnYmEoNDMsIDQzLCA0MywgLjgpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXNjcmltOiByZ2JhKDAsIDAsIDAsIC44NSk7XFxuICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtcHJlc3M6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA4KTtcXG4gIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDQpO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtY3VycmVudDogIzIxNDE1NTtcXG4gIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTM6ICMxNTE1MTU7XFxuICAtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yOiAjMjAyMDIwO1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMTogIzJiMmIyYjtcXG4gIC0tY2FsY2l0ZS1jb2xvci1iYWNrZ3JvdW5kOiAjMzUzNTM1O1xcbiAgLS1jYWxjaXRlLWNvbG9yLWZvY3VzOiAjMDA5YWYyO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNhbGNpdGUtY29kZS1mYW1pbHk6IFxcXCJDb25zb2xhc1xcXCIsIFxcXCJBbmRhbGUgTW9ub1xcXCIsIFxcXCJMdWNpZGEgQ29uc29sZVxcXCIsIFxcXCJNb25hY29cXFwiLCBtb25vc3BhY2U7XFxuICAtLWNhbGNpdGUtc2Fucy1mYW1pbHk6IFxcXCJBdmVuaXIgTmV4dFxcXCIsIFxcXCJBdmVuaXJcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMzogLjYyNXJlbTtcXG4gIC0tY2FsY2l0ZS1mb250LXNpemUtLTI6IC43NXJlbTtcXG4gIC0tY2FsY2l0ZS1mb250LXNpemUtLTE6IC44NzVyZW07XFxuICAtLWNhbGNpdGUtZm9udC1zaXplLTA6IDFyZW07XFxuICAtLWNhbGNpdGUtZm9udC1zaXplLTE6IDEuMTI1cmVtO1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS0yOiAxLjI1cmVtO1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS0zOiAxLjYyNXJlbTtcXG4gIC0tY2FsY2l0ZS1mb250LXNpemUtNDogMnJlbTtcXG4gIC0tY2FsY2l0ZS1mb250LXNpemUtNTogMi41cmVtO1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS02OiAzcmVtO1xcbiAgLS1jYWxjaXRlLWZvbnQtc2l6ZS03OiAzLjVyZW07XFxuICAtLWNhbGNpdGUtZm9udC1zaXplLTg6IDRyZW07XFxuICAtLWNhbGNpdGUtZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcXG4gIC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tY2FsY2l0ZS1mb250LXdlaWdodC1ib2xkOiA2MDA7XFxuICAtLWNhbGNpdGUtdWktYnJhbmQ6IHZhcigtLWNhbGNpdGUtY29sb3ItYnJhbmQpO1xcbiAgLS1jYWxjaXRlLXVpLWJyYW5kLWhvdmVyOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWJyYW5kLWhvdmVyKTtcXG4gIC0tY2FsY2l0ZS11aS1icmFuZC1wcmVzczogdmFyKC0tY2FsY2l0ZS1jb2xvci1icmFuZC1wcmVzcyk7XFxuICAtLWNhbGNpdGUtdWktYmFja2dyb3VuZDogdmFyKC0tY2FsY2l0ZS1jb2xvci1iYWNrZ3JvdW5kKTtcXG4gIC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTE6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0xKTtcXG4gIC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTI6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yKTtcXG4gIC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTM6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0zKTtcXG4gIC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQ6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC1jdXJyZW50KTtcXG4gIC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0OiB2YXIoLS1jYWxjaXRlLW9mZnNldC1pbnZlcnQtZm9jdXMpO1xcbiAgLS1jYWxjaXRlLXNlbWFudGljLXVpLWNvbG9yLWZvcmVncm91bmQtY3VycmVudDogdmFyKC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLWN1cnJlbnQpO1xcbiAgLS1jYWxjaXRlLXVpLXRleHQtMTogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LTEpO1xcbiAgLS1jYWxjaXRlLXVpLXRleHQtMjogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LTIpO1xcbiAgLS1jYWxjaXRlLXVpLXRleHQtMzogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LTMpO1xcbiAgLS1jYWxjaXRlLXVpLXRleHQtaW52ZXJzZTogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LWludmVyc2UpO1xcbiAgLS1jYWxjaXRlLXVpLXRleHQtbGluazogdmFyKC0tY2FsY2l0ZS1jb2xvci10ZXh0LWxpbmspO1xcbiAgLS1jYWxjaXRlLXVpLWJvcmRlci0xOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0xKTtcXG4gIC0tY2FsY2l0ZS11aS1ib3JkZXItMjogdmFyKC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMik7XFxuICAtLWNhbGNpdGUtdWktYm9yZGVyLTM6IHZhcigtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTMpO1xcbiAgLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dDogdmFyKC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItaW5wdXQpO1xcbiAgLS1jYWxjaXRlLXVpLWluZm86IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8pO1xcbiAgLS1jYWxjaXRlLXVpLWluZm8taG92ZXI6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8taG92ZXIpO1xcbiAgLS1jYWxjaXRlLXVpLWluZm8tcHJlc3M6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8tcHJlc3MpO1xcbiAgLS1jYWxjaXRlLXVpLXN1Y2Nlc3M6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MpO1xcbiAgLS1jYWxjaXRlLXVpLXN1Y2Nlc3MtaG92ZXI6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MtaG92ZXIpO1xcbiAgLS1jYWxjaXRlLXVpLXN1Y2Nlc3MtcHJlc3M6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MtcHJlc3MpO1xcbiAgLS1jYWxjaXRlLXVpLXdhcm5pbmc6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmcpO1xcbiAgLS1jYWxjaXRlLXVpLXdhcm5pbmctaG92ZXI6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmctaG92ZXIpO1xcbiAgLS1jYWxjaXRlLXVpLXdhcm5pbmctcHJlc3M6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmctcHJlc3MpO1xcbiAgLS1jYWxjaXRlLXVpLWRhbmdlcjogdmFyKC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyKTtcXG4gIC0tY2FsY2l0ZS11aS1kYW5nZXItaG92ZXI6IHZhcigtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlci1ob3Zlcik7XFxuICAtLWNhbGNpdGUtdWktZGFuZ2VyLXByZXNzOiB2YXIoLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItcHJlc3MpO1xcbiAgLS1jYWxjaXRlLXVpLWludmVyc2U6IHZhcigtLWNhbGNpdGUtY29sb3ItaW52ZXJzZSk7XFxuICAtLWNhbGNpdGUtYXBwLXotaW5kZXg6IHZhcigtLWNhbGNpdGUtei1pbmRleCk7XFxuICAtLWNhbGNpdGUtYXBwLXotaW5kZXgtdG9vbHRpcDogdmFyKC0tY2FsY2l0ZS16LWluZGV4LXRvb2x0aXApO1xcbiAgLS1jYWxjaXRlLWFwcC16LWluZGV4LXBvcHVwOiB2YXIoLS1jYWxjaXRlLXotaW5kZXgtcG9wdXApO1xcbiAgLS1jYWxjaXRlLWFwcC16LWluZGV4LW1vZGFsOiB2YXIoLS1jYWxjaXRlLXotaW5kZXgtbW9kYWwpO1xcbiAgLS1jYWxjaXRlLWFwcC16LWluZGV4LW92ZXJsYXk6IHZhcigtLWNhbGNpdGUtei1pbmRleC1vdmVybGF5KTtcXG4gIC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bjogdmFyKC0tY2FsY2l0ZS16LWluZGV4LWRyb3Bkb3duKTtcXG4gIC0tY2FsY2l0ZS1hcHAtei1pbmRleC10b2FzdDogdmFyKC0tY2FsY2l0ZS16LWluZGV4LXRvYXN0KTtcXG4gIC0tY2FsY2l0ZS1hcHAtei1pbmRleC1oZWFkZXI6IHZhcigtLWNhbGNpdGUtei1pbmRleC1oZWFkZXIpO1xcbiAgLS1jYWxjaXRlLWFwcC16LWluZGV4LXN0aWNreTogdmFyKC0tY2FsY2l0ZS16LWluZGV4LXN0aWNreSk7XFxuICAtLWNhbGNpdGUtYXBwLWJyZWFrcG9pbnQtY29udGVudC1maXhlZDogdmFyKC0tY2FsY2l0ZS1jb250YWluZXItc2l6ZS1jb250ZW50LWZpeGVkKTtcXG4gIC0tY2FsY2l0ZS1hcHAtYnJlYWtwb2ludC1jb250ZW50LWZsdWlkOiB2YXIoLS1jYWxjaXRlLWNvbnRhaW5lci1zaXplLWNvbnRlbnQtZmx1aWQpO1xcbiAgLS1jYWxjaXRlLWFwcC1icmVha3BvaW50LXdpZHRoLWxnOiB2YXIoLS1jYWxjaXRlLWNvbnRhaW5lci1zaXplLXdpZHRoLWxnLW1heCk7XFxuICAtLWNhbGNpdGUtYXBwLWJyZWFrcG9pbnQtd2lkdGgtbWQ6IHZhcigtLWNhbGNpdGUtY29udGFpbmVyLXNpemUtd2lkdGgtbWQtbWF4KTtcXG4gIC0tY2FsY2l0ZS1hcHAtYnJlYWtwb2ludC13aWR0aC1zbTogdmFyKC0tY2FsY2l0ZS1jb250YWluZXItc2l6ZS13aWR0aC1zbS1tYXgpO1xcbiAgLS1jYWxjaXRlLWFwcC1icmVha3BvaW50LXdpZHRoLXhzOiB2YXIoLS1jYWxjaXRlLWNvbnRhaW5lci1zaXplLXdpZHRoLXhzLW1heCk7XFxuICAtLWNhbGNpdGUtYXBwLWJyZWFrcG9pbnQtd2lkdGgteHhzOiB2YXIoLS1jYWxjaXRlLWNvbnRhaW5lci1zaXplLXdpZHRoLXh4cy1tYXgpO1xcbiAgLS1jYWxjaXRlLWFwcC1zcGFjaW5nLTExOiB2YXIoLS1jYWxjaXRlLXNwYWNpbmcteHh4bCk7XFxuICAtLWNhbGNpdGUtYXBwLXNwYWNpbmctODogdmFyKC0tY2FsY2l0ZS1zcGFjaW5nLXhsKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc3BhY2luZy03OiB2YXIoLS1jYWxjaXRlLXNwYWNpbmctbGcpO1xcbiAgLS1jYWxjaXRlLWFwcC1zcGFjaW5nLTY6IHZhcigtLWNhbGNpdGUtc3BhY2luZy1tZC1wbHVzKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc3BhY2luZy01OiB2YXIoLS1jYWxjaXRlLXNwYWNpbmctbWQpO1xcbiAgLS1jYWxjaXRlLWFwcC1zcGFjaW5nLTM6IHZhcigtLWNhbGNpdGUtc3BhY2luZy1zbSk7XFxuICAtLWNhbGNpdGUtYXBwLXNwYWNpbmctMjogdmFyKC0tY2FsY2l0ZS1zcGFjaW5nLXhzKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc3BhY2luZy0xOiB2YXIoLS1jYWxjaXRlLXNwYWNpbmcteHhzKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc3BhY2luZy0wOiB2YXIoLS1jYWxjaXRlLXNwYWNpbmctYmFzZSk7XFxuICAtLWNhbGNpdGUtYXBwLXNpemluZy0xMTogdmFyKC0tY2FsY2l0ZS1zaXplLW1kKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc2l6aW5nLTk6IHZhcigtLWNhbGNpdGUtc2l6ZS1zbSk7XFxuICAtLWNhbGNpdGUtYXBwLXNpemluZy04OiB2YXIoLS1jYWxjaXRlLXNwYWNpbmcteGwpO1xcbiAgLS1jYWxjaXRlLWFwcC1zaXppbmctNzogdmFyKC0tY2FsY2l0ZS1zaXplLXhzKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc2l6aW5nLTY6IHZhcigtLWNhbGNpdGUtc2l6ZS14eHhzLXBsdXMpO1xcbiAgLS1jYWxjaXRlLWFwcC1zaXppbmctNTogdmFyKC0tY2FsY2l0ZS1zaXplLXh4eHMpO1xcbiAgLS1jYWxjaXRlLWFwcC1zaXppbmctNDogdmFyKC0tY2FsY2l0ZS1zcGFjaW5nLXNtLXBsdXMpO1xcbiAgLS1jYWxjaXRlLWFwcC1zaXppbmctMzogdmFyKC0tY2FsY2l0ZS1zcGFjaW5nLXNtKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc2l6aW5nLTI6IHZhcigtLWNhbGNpdGUtc3BhY2luZy14cyk7XFxuICAtLWNhbGNpdGUtYXBwLXNpemluZy0xOiB2YXIoLS1jYWxjaXRlLXNwYWNpbmcteHhzKTtcXG4gIC0tY2FsY2l0ZS1hcHAtc2l6aW5nLTA6IHZhcigtLWNhbGNpdGUtc3BhY2luZy1iYXNlKTtcXG4gIC0tY2FsY2l0ZS1hcHAtb3BhY2l0eS0xMDA6IHZhcigtLWNhbGNpdGUtYXBwLW9wYWNpdHktZnVsbCk7XFxuICAtLWNhbGNpdGUtYXBwLW9wYWNpdHktODU6IHZhcigtLWNhbGNpdGUtYXBwLW9wYWNpdHktZGFyayk7XFxuICAtLWNhbGNpdGUtYXBwLW9wYWNpdHktNTA6IHZhcigtLWNhbGNpdGUtYXBwLW9wYWNpdHktaGFsZik7XFxuICAtLWNhbGNpdGUtYXBwLW9wYWNpdHktNDA6IHZhcigtLWNhbGNpdGUtYXBwLW9wYWNpdHktbGlnaHQpO1xcbiAgLS1jYWxjaXRlLWFwcC1ib3JkZXItd2lkdGgtbm9uZTogdmFyKC0tY2FsY2l0ZS1ib3JkZXItd2lkdGgtbm9uZSk7XFxuICAtLWNhbGNpdGUtYXBwLWJvcmRlci13aWR0aC0yOiB2YXIoLS1jYWxjaXRlLWJvcmRlci13aWR0aC1sZyk7XFxuICAtLWNhbGNpdGUtYXBwLWJvcmRlci13aWR0aC0xOiB2YXIoLS1jYWxjaXRlLWJvcmRlci13aWR0aC1tZCk7XFxuICAtLWNhbGNpdGUtYXBwLWJvcmRlci13aWR0aC0wOiB2YXIoLS1jYWxjaXRlLWJvcmRlci13aWR0aC1zbSk7XFxuICAtLWNhbGNpdGUtYXBwLWJvcmRlci1yYWRpdXMtZnVsbDogdmFyKC0tY2FsY2l0ZS1jb3JuZXItcmFkaXVzLXBpbGwpO1xcbiAgLS1jYWxjaXRlLWFwcC1ib3JkZXItcmFkaXVzLW5vbmU6IHZhcigtLWNhbGNpdGUtY29ybmVyLXJhZGl1cy1zaGFycCk7XFxuICAtLWNhbGNpdGUtYXBwLWJvcmRlci1yYWRpdXMtMTogdmFyKC0tY2FsY2l0ZS1jb3JuZXItcmFkaXVzLXJvdW5kKTtcXG4gIC0tY2FsY2l0ZS1hcHAtYm9yZGVyLXJhZGl1cy0wOiB2YXIoLS1jYWxjaXRlLWNvcm5lci1yYWRpdXMtMCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtdGV4dC1jYXNlLWNhcGl0YWxpemU6IHZhcigtLWNhbGNpdGUtZm9udC10ZXh0LWNhc2UtY2FwaXRhbGl6ZSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtdGV4dC1jYXNlLWxvd2VyY2FzZTogdmFyKC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS1sb3dlcmNhc2UpO1xcbiAgLS1jYWxjaXRlLWFwcC1mb250LXRleHQtY2FzZS11cHBlcmNhc2U6IHZhcigtLWNhbGNpdGUtZm9udC10ZXh0LWNhc2UtdXBwZXJjYXNlKTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC10ZXh0LWNhc2Utbm9uZTogdmFyKC0tY2FsY2l0ZS1mb250LXRleHQtY2FzZS1ub25lKTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC10ZXh0LWRlY29yYXRpb24tdW5kZXJsaW5lOiB2YXIoLS1jYWxjaXRlLWZvbnQtdGV4dC1kZWNvcmF0aW9uLXVuZGVybGluZSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtdGV4dC1kZWNvcmF0aW9uLW5vbmU6IHZhcigtLWNhbGNpdGUtZm9udC10ZXh0LWRlY29yYXRpb24tbm9uZSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtcGFyYWdyYXBoLXNwYWNpbmctbm9ybWFsOiB2YXIoLS1jYWxjaXRlLWZvbnQtcGFyYWdyYXBoLXNwYWNpbmctbm9ybWFsKTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC1sZXR0ZXItc3BhY2luZy13aWRlOiB2YXIoLS1jYWxjaXRlLWZvbnQtbGV0dGVyLXNwYWNpbmctd2lkZSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtbGV0dGVyLXNwYWNpbmctbm9ybWFsOiB2YXIoLS1jYWxjaXRlLWZvbnQtbGV0dGVyLXNwYWNpbmctbm9ybWFsKTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC1sZXR0ZXItc3BhY2luZy10aWdodDogdmFyKC0tY2FsY2l0ZS1mb250LWxldHRlci1zcGFjaW5nLXRpZ2h0KTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC1zaXplLTY6IHZhcigtLWNhbGNpdGUtZm9udC1zaXplLXh4bCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtc2l6ZS01OiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14bCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtc2l6ZS00OiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1sZyk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtc2l6ZS0zOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1tZCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtc2l6ZS0yOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtc2l6ZS0xOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS1zbSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtc2l6ZS0wOiB2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS14cyk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtbG9vc2U6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1yZWxhdGl2ZS1sb29zZSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtcmVsYXhlZDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXJlbGF4ZWQpO1xcbiAgLS1jYWxjaXRlLWFwcC1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLW5vcm1hbDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLW5vcm1hbCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtc251ZzogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXNudWcpO1xcbiAgLS1jYWxjaXRlLWFwcC1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlLXRpZ2h0OiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUtdGlnaHQpO1xcbiAgLS1jYWxjaXRlLWFwcC1mb250LWxpbmUtaGVpZ2h0LXJlbGF0aXZlOiB2YXIoLS1jYWxjaXRlLWZvbnQtbGluZS1oZWlnaHQtcmVsYXRpdmUpO1xcbiAgLS1jYWxjaXRlLWFwcC1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLTM6IHZhcigtLWNhbGNpdGUtZm9udC1saW5lLWhlaWdodC1maXhlZC14bCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtbGluZS1oZWlnaHQtZml4ZWQtMjogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLWxnKTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC1saW5lLWhlaWdodC1maXhlZDogdmFyKC0tY2FsY2l0ZS1mb250LWxpbmUtaGVpZ2h0LWZpeGVkLXNtKTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC13ZWlnaHQtYm9sZDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ib2xkKTtcXG4gIC0tY2FsY2l0ZS1hcHAtZm9udC13ZWlnaHQtZGVtaTogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1zZW1pYm9sZCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtd2VpZ2h0LW1lZGl1bTogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgLS1jYWxjaXRlLWFwcC1mb250LXdlaWdodC1yZWd1bGFyOiB2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgLS1jYWxjaXRlLWFwcC1mb250LXdlaWdodC1saWdodDogdmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1saWdodCk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtZmFtaWx5LWNvZGU6IHZhcigtLWNhbGNpdGUtZm9udC1mYW1pbHktY29kZSk7XFxuICAtLWNhbGNpdGUtYXBwLWZvbnQtZmFtaWx5LXByaW1hcnk6IHZhcigtLWNhbGNpdGUtZm9udC1mYW1pbHktcHJpbWFyeSk7XFxuICAtLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjogdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTtcXG4gIC0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OiB2YXIoLS1jYWxjaXRlLXotaW5kZXgtZHJvcGRvd24pO1xcbiAgLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6IGNhbGMoLjE1cyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7XFxuICAtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOiB2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7XFxuICAtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OiBjYWxjKC4xcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7XFxuICAtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06IGNhbGMoLjJzICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTtcXG4gIC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6IGNhbGMoLjNzICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTtcXG4gIC0tY2FsY2l0ZS1wb3BvdmVyLXotaW5kZXg6IHZhcigtLWNhbGNpdGUtei1pbmRleC1wb3B1cCk7XFxuICAtLWNhbGNpdGUtYm9yZGVyLXJhZGl1czogdmFyKC0tY2FsY2l0ZS1ib3JkZXItcmFkaXVzLXJvdW5kLCA0cHgpO1xcbiAgLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMtYmFzZTogMDtcXG4gIC0tY2FsY2l0ZS1vZmZzZXQtaW52ZXJ0LWZvY3VzOiAwO1xcbiAgLS1jYWxjaXRlLXBhbmVsLXdpZHRoLW11bHRpcGxpZXI6IDE7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNhbGNpdGUtZm9udC1mYW1pbHkpO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICAuY2FsY2l0ZS1tb2RlLWF1dG8ge1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLXdoaXRlOiAjZjhmOGY4O1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLWdob3N0OiByZ2JhKDExNywgMTE3LCAxMTcsIC4zKTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci1pbnB1dDogIzc1NzU3NTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0zOiAjNDA0MDQwO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTI6ICM0YTRhNGE7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMTogIzU1NTU1NTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRleHQtbGluazogIzAwYTBmZjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRleHQtaW52ZXJzZTogIzE1MTUxNTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMzogIzlmOWY5ZjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMjogI2JmYmZiZjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMTogI2ZmZmZmZjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWludmVyc2UtcHJlc3M6ICNmM2YzZjM7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlLWhvdmVyOiAjZmZmZmZmO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZTogI2Y4ZjhmODtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItcHJlc3M6ICNkOTAwMTI7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyLWhvdmVyOiAjZmYwMDE1O1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlcjogI2ZlNTgzZTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nLXByZXNzOiAjZjVkMDAwO1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmctaG92ZXI6ICNmZmVlMzM7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZzogI2ZmYzkwMDtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzLXByZXNzOiAjMDBiODFiO1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MtaG92ZXI6ICMzYmVkNTI7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2VzczogIzM2ZGE0MztcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvLXByZXNzOiAjMDA5YWYyO1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8taG92ZXI6ICMzZGI4ZmY7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mbzogIzAwYTBmZjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXVuZGVybGluZTogcmdiYSgwLCAxNjAsIDI1NSwgLjQpO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYnJhbmQtcHJlc3M6ICMwMDYxOWI7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1icmFuZC1ob3ZlcjogIzAwN2FjMjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kOiAjMDA5YWYyO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtdGludDogcmdiYSg0MywgNDMsIDQzLCAuOCk7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1zY3JpbTogcmdiYSgwLCAwLCAwLCAuODUpO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtcHJlc3M6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA4KTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNCk7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtY3VycmVudDogIzIxNDE1NTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMzogIzE1MTUxNTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMjogIzIwMjAyMDtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWZvcmVncm91bmQtMTogIzJiMmIyYjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWJhY2tncm91bmQ6ICMzNTM1MzU7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1mb2N1czogIzAwOWFmMjtcXG4gIH1cXG59XFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcXG4gIC5jYWxjaXRlLW1vZGUtYXV0byB7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItd2hpdGU6ICNmZmZmZmY7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItZ2hvc3Q6IHJnYmEoMCwgMCwgMCwgLjMpO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLWlucHV0OiAjOTQ5NDk0O1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYm9yZGVyLTM6ICNkZmRmZGY7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1ib3JkZXItMjogI2Q0ZDRkNDtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWJvcmRlci0xOiAjY2FjYWNhO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdGV4dC1saW5rOiAjMDA2MTliO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdGV4dC1pbnZlcnNlOiAjZmZmZmZmO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdGV4dC0zOiAjNmE2YTZhO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdGV4dC0yOiAjNGE0YTRhO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdGV4dC0xOiAjMTUxNTE1O1xcbiAgICAtLWNhbGNpdGUtY29sb3ItaW52ZXJzZS1wcmVzczogIzIwMjAyMDtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWludmVyc2UtaG92ZXI6ICMyYjJiMmI7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1pbnZlcnNlOiAjMzUzNTM1O1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWRhbmdlci1wcmVzczogIzdjMWQxMztcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1kYW5nZXItaG92ZXI6ICNhODJiMWU7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtZGFuZ2VyOiAjZDgzMDIwO1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXdhcm5pbmctcHJlc3M6ICNiZmEyMDA7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtd2FybmluZy1ob3ZlcjogI2Q5YmMwMDtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy13YXJuaW5nOiAjZWRkMzE3O1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLXN1Y2Nlc3MtcHJlc3M6ICMxYTYzMjQ7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1ob3ZlcjogIzI4ODgzNTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1zdWNjZXNzOiAjMzVhYzQ2O1xcbiAgICAtLWNhbGNpdGUtY29sb3Itc3RhdHVzLWluZm8tcHJlc3M6ICMwMDMwNGQ7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1zdGF0dXMtaW5mby1ob3ZlcjogIzAwNDg3NDtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXN0YXR1cy1pbmZvOiAjMDA2MTliO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYnJhbmQtdW5kZXJsaW5lOiByZ2JhKDAsIDk3LCAxNTUsIC40KTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLWJyYW5kLXByZXNzOiAjMDA0ODc0O1xcbiAgICAtLWNhbGNpdGUtY29sb3ItYnJhbmQtaG92ZXI6ICMwMDYxOWI7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1icmFuZDogIzAwN2FjMjtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXRpbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQtc2NyaW06IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjg1KTtcXG4gICAgLS1jYWxjaXRlLWNvbG9yLXRyYW5zcGFyZW50LXByZXNzOiByZ2JhKDAsIDAsIDAsIC4wOCk7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci10cmFuc3BhcmVudC1ob3ZlcjogcmdiYSgwLCAwLCAwLCAuMDQpO1xcbiAgICAtLWNhbGNpdGUtY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLWN1cnJlbnQ6ICNjN2VhZmY7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTM6ICNlYWVhZWE7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTI6ICNmM2YzZjM7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1mb3JlZ3JvdW5kLTE6ICNmZmZmZmY7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci1iYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbiAgICAtLWNhbGNpdGUtY29sb3ItZm9jdXM6ICMwMDdhYzI7XFxuICB9XFxufVxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICA6cm9vdCB7XFxuICAgIC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgaW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGluLWRvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC01cHgsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgaW4tdXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDVweCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBpbi1yaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoLTVweCwgMCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBpbi1sZWZ0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCg1cHgsIDAsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgaW4tc2NhbGUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMC45NSwgMC45NSwgMSk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVaKDEpO1xcbiAgfVxcbn1cXG4uY2FsY2l0ZS1hbmltYXRlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpO1xcbn1cXG5cXG4uY2FsY2l0ZS1hbmltYXRlX19pbiB7XFxuICBhbmltYXRpb24tbmFtZTogaW47XFxufVxcblxcbi5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd24ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGluLWRvd247XFxufVxcblxcbi5jYWxjaXRlLWFuaW1hdGVfX2luLXVwIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBpbi11cDtcXG59XFxuXFxuLmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGluLXJpZ2h0O1xcbn1cXG5cXG4uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBpbi1sZWZ0O1xcbn1cXG5cXG4uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZSB7XFxuICBhbmltYXRpb24tbmFtZTogaW4tc2NhbGU7XFxufVxcblxcbi5jYWxjaXRlLXNvcnRhYmxlLS1jaG9zZW4sIC5jYWxjaXRlLXNvcnRhYmxlLS1naG9zdCwgLmNhbGNpdGUtc29ydGFibGUtLWRyYWcsIC5jYWxjaXRlLXNvcnRhYmxlLS1mYWxsYmFjayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY2FsY2l0ZS1zb3J0YWJsZS0tZ2hvc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaW5zZXQtYmxvY2s6IDBweDtcXG4gIGluc2V0LWlubGluZS1zdGFydDogMHB4O1xcbiAgaW5zZXQtaW5saW5lLWVuZDogMHB4O1xcbiAgei1pbmRleDogdmFyKC0tY2FsY2l0ZS16LWluZGV4KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jYWxjaXRlLWNvbG9yLWJyYW5kKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGNpdGUtY29sb3ItZm9yZWdyb3VuZC0yKTtcXG59XFxuXFxuLmNhbGNpdGUtc29ydGFibGUtLWRyYWcge1xcbiAgLS10dy1zaGFkb3c6IDAgNnB4IDIwcHggLTRweCByZ2JhKDAsIDAsIDAsIC4xKSwgMCA0cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjA4KTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgNnB4IDIwcHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCAxMnB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwgMCwgMCwgMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwgMCwgMCwgMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC53aWRnZXRab25lQXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi56b25hLXJpZXNnby1tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi56b25hLXJpZXNnby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi56b25hLXJpZXNnby1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJ1dHRvbiB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNTI3NjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhlY2M7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3pvbmFSaWVzZ28vc3JjL3J1bnRpbWUvYXNzZXRzL3N0eWxlLmNzc1wiLFwid2VicGFjazovLy4vLi4vLi4vLi4vTnVldmElMjBjYXJwZXRhL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy96b25hUmllc2dvL3NyYy9ydW50aW1lL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQTtJQUNFLE9BQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSx5QkFBQTtJQUVBO01BQ0UseUJBQUE7TUFDQSx5QkFBQTtNQUNBLHdDQUFBO0lDRUY7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53aWRnZXRab25lQXJlYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi56b25hLXJpZXNnby1tYWluLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi56b25hLXJpZXNnby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnpvbmEtcmllc2dvLWJ1dHRvbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDI7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgfVxcbiAgfVxcbn1cIixcIi53aWRnZXRab25lQXJlYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi56b25hLXJpZXNnby1tYWluLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi56b25hLXJpZXNnby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnpvbmEtcmllc2dvLWJ1dHRvbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE1Mjc2O1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWNjO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwNDI7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qXG4gIENvcHlyaWdodCAoYykgMjAyMiBFc3JpXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG4vLyByZS1leHBvcnQgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG5leHBvcnQgeyBsb2FkTW9kdWxlcyB9IGZyb20gJy4vbW9kdWxlcyc7XG5leHBvcnQgeyBnZXRTY3JpcHQsIGlzTG9hZGVkLCBsb2FkU2NyaXB0LCBzZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vc2NyaXB0JztcbmV4cG9ydCB7IGxvYWRDc3MgfSBmcm9tICcuL3V0aWxzL2Nzcyc7XG5leHBvcnQgeyB1dGlscyB9O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGdldFNjcmlwdCwgaXNMb2FkZWQsIGxvYWRTY3JpcHQgfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy9pbmRleCc7XG4vLyB3cmFwIERvam8ncyByZXF1aXJlKCkgaW4gYSBwcm9taXNlXG5mdW5jdGlvbiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKSB7XG4gICAgcmV0dXJuIG5ldyB1dGlscy5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgbG9hZGluZyB0aGUgZXNyaS9kb2pvIHNjcmlwdHMsIHJlamVjdCB3aXRoIHRoZSBlcnJvci5cbiAgICAgICAgdmFyIGVycm9ySGFuZGxlciA9IHdpbmRvd1sncmVxdWlyZSddLm9uKCdlcnJvcicsIHJlamVjdCk7XG4gICAgICAgIHdpbmRvd1sncmVxdWlyZSddKG1vZHVsZXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlbW92ZSBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICBlcnJvckhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIHdpdGggdGhlIHBhcmFtZXRlcnMgZnJvbSBkb2pvIHJlcXVpcmUgYXMgYW4gYXJyYXkuXG4gICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbiBhcnJheSBvZiB0aGUgcmVxdWlyZWQgbW9kdWxlc1xuLy8gYWxzbyB3aWxsIGF0dGVtcHQgdG8gbGF6eSBsb2FkIHRoZSBBcmNHSVMgQVBJIGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGxvYWRlZFxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNb2R1bGVzKG1vZHVsZXMsIGxvYWRTY3JpcHRPcHRpb25zKSB7XG4gICAgaWYgKGxvYWRTY3JpcHRPcHRpb25zID09PSB2b2lkIDApIHsgbG9hZFNjcmlwdE9wdGlvbnMgPSB7fTsgfVxuICAgIGlmICghaXNMb2FkZWQoKSkge1xuICAgICAgICAvLyBzY3JpcHQgaXMgbm90IHlldCBsb2FkZWQsIGlzIGl0IGluIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmc/XG4gICAgICAgIHZhciBzY3JpcHQgPSBnZXRTY3JpcHQoKTtcbiAgICAgICAgdmFyIHNyYyA9IHNjcmlwdCAmJiBzY3JpcHQuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgaWYgKCFsb2FkU2NyaXB0T3B0aW9ucy51cmwgJiYgc3JjKSB7XG4gICAgICAgICAgICAvLyBzY3JpcHQgaXMgc3RpbGwgbG9hZGluZyBhbmQgdXNlciBkaWQgbm90IHNwZWNpZnkgYSBVUkxcbiAgICAgICAgICAgIC8vIGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIGRlZmF1bHQgdG8gdGhlIFVSTCB0aGF0J3MgYmVpbmcgbG9hZGVkXG4gICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGRlZmF1bHRpbmcgdG8gdGhlIGxhdGVzdCA0LnggVVJMXG4gICAgICAgICAgICBsb2FkU2NyaXB0T3B0aW9ucy51cmwgPSBzcmM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXR0ZW1wdCB0byBsb2FkIHRoZSBzY3JpcHQgdGhlbiBsb2FkIHRoZSBtb2R1bGVzXG4gICAgICAgIHJldHVybiBsb2FkU2NyaXB0KGxvYWRTY3JpcHRPcHRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlcXVpcmVNb2R1bGVzKG1vZHVsZXMpOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHNjcmlwdCBpcyBhbHJlYWR5IGxvYWRlZCwganVzdCBsb2FkIHRoZSBtb2R1bGVzXG4gICAgICAgIHJldHVybiByZXF1aXJlTW9kdWxlcyhtb2R1bGVzKTtcbiAgICB9XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xuaW1wb3J0IHsgbG9hZENzcyB9IGZyb20gJy4vdXRpbHMvY3NzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IGdldENkblVybCB9IGZyb20gJy4vdXRpbHMvdXJsJztcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZnVuY3Rpb24gY3JlYXRlU2NyaXB0KHVybCkge1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1lc3JpLWxvYWRlcicsICdsb2FkaW5nJyk7XG4gICAgcmV0dXJuIHNjcmlwdDtcbn1cbi8vIGFkZCBhIG9uZS10aW1lIGxvYWQgaGFuZGxlciB0byBzY3JpcHRcbi8vIGFuZCBvcHRpb25hbGx5IGFkZCBhIG9uZSB0aW1lIGVycm9yIGhhbmRsZXIgYXMgd2VsbFxuZnVuY3Rpb24gaGFuZGxlU2NyaXB0TG9hZChzY3JpcHQsIGNhbGxiYWNrLCBlcnJiYWNrKSB7XG4gICAgdmFyIG9uU2NyaXB0RXJyb3I7XG4gICAgaWYgKGVycmJhY2spIHtcbiAgICAgICAgLy8gc2V0IHVwIGFuIGVycm9yIGhhbmRsZXIgYXMgd2VsbFxuICAgICAgICBvblNjcmlwdEVycm9yID0gaGFuZGxlU2NyaXB0RXJyb3Ioc2NyaXB0LCBlcnJiYWNrKTtcbiAgICB9XG4gICAgdmFyIG9uU2NyaXB0TG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gcGFzcyB0aGUgc2NyaXB0IHRvIHRoZSBjYWxsYmFja1xuICAgICAgICBjYWxsYmFjayhzY3JpcHQpO1xuICAgICAgICAvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uU2NyaXB0TG9hZCwgZmFsc2UpO1xuICAgICAgICBpZiAob25TY3JpcHRFcnJvcikge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBlcnJvciBsaXN0ZW5lciBhcyB3ZWxsXG4gICAgICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25TY3JpcHRMb2FkLCBmYWxzZSk7XG59XG4vLyBhZGQgYSBvbmUtdGltZSBlcnJvciBoYW5kbGVyIHRvIHRoZSBzY3JpcHRcbmZ1bmN0aW9uIGhhbmRsZVNjcmlwdEVycm9yKHNjcmlwdCwgY2FsbGJhY2spIHtcbiAgICB2YXIgb25TY3JpcHRFcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIHJlamVjdCB0aGUgcHJvbWlzZSBhbmQgcmVtb3ZlIHRoaXMgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgY2FsbGJhY2soZS5lcnJvciB8fCBuZXcgRXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgYXR0ZW1wdGluZyB0byBsb2FkIFwiLmNvbmNhdChzY3JpcHQuc3JjKSkpO1xuICAgICAgICAvLyByZW1vdmUgdGhpcyBldmVudCBsaXN0ZW5lclxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgfTtcbiAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgcmV0dXJuIG9uU2NyaXB0RXJyb3I7XG59XG4vLyBhbGxvdyB0aGUgdXNlciB0byBjb25maWd1cmUgZGVmYXVsdCBzY3JpcHQgb3B0aW9ucyByYXRoZXIgdGhhbiBwYXNzaW5nIG9wdGlvbnMgdG8gYGxvYWRNb2R1bGVzYCBlYWNoIHRpbWVcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBkZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG59XG4vLyBnZXQgdGhlIHNjcmlwdCBpbmplY3RlZCBieSB0aGlzIGxpYnJhcnlcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JpcHQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLWVzcmktbG9hZGVyXScpO1xufVxuLy8gaGFzIEFyY0dJUyBBUEkgYmVlbiBsb2FkZWQgb24gdGhlIHBhZ2UgeWV0P1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9hZGVkKCkge1xuICAgIHZhciBnbG9iYWxSZXF1aXJlID0gd2luZG93WydyZXF1aXJlJ107XG4gICAgLy8gLm9uKCkgZW5zdXJlcyB0aGF0IGl0J3MgRG9qbydzIEFNRCBsb2FkZXJcbiAgICByZXR1cm4gZ2xvYmFsUmVxdWlyZSAmJiBnbG9iYWxSZXF1aXJlLm9uO1xufVxuLy8gbG9hZCB0aGUgQXJjR0lTIEFQSSBvbiB0aGUgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTY3JpcHQob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgLy8gd2Ugd291bGQgaGF2ZSBsaWtlZCB0byB1c2Ugc3ByZWFkIGxpa2UgeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9XG4gICAgLy8gYnV0IFRTIHdvdWxkIGluamVjdCBhIHBvbHlmaWxsIHRoYXQgd291bGQgcmVxdWlyZSB1c2UgdG8gY29uZmlndXJlIHJvbGx1cCB3IGNvbnRlbnQ6ICd3aW5kb3cnXG4gICAgLy8gaWYgd2UgaGF2ZSBhbm90aGVyIG9jY2FzaW9uIHRvIHVzZSBzcHJlYWQsIGxldCdzIGRvIHRoYXQgYW5kIHJlcGxhY2UgdGhpcyBmb3IuLi5pblxuICAgIHZhciBvcHRzID0ge307XG4gICAgW2RlZmF1bHRPcHRpb25zLCBvcHRpb25zXS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIG9wdHNbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBVUkwgdG8gbG9hZFxuICAgIHZhciB2ZXJzaW9uID0gb3B0cy52ZXJzaW9uO1xuICAgIHZhciB1cmwgPSBvcHRzLnVybCB8fCBnZXRDZG5VcmwodmVyc2lvbik7XG4gICAgcmV0dXJuIG5ldyB1dGlscy5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9IGdldFNjcmlwdCgpO1xuICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgICAvLyB0aGUgQVBJIGlzIGFscmVhZHkgbG9hZGVkIG9yIGluIHRoZSBwcm9jZXNzIG9mIGxvYWRpbmcuLi5cbiAgICAgICAgICAgIC8vIE5PVEU6IGhhdmUgdG8gdGVzdCBhZ2FpbnN0IHNjciBhdHRyaWJ1dGUgdmFsdWUsIG5vdCBzY3JpcHQuc3JjXG4gICAgICAgICAgICAvLyBiL2MgdGhlIGxhdHRlciB3aWxsIHJldHVybiB0aGUgZnVsbCB1cmwgZm9yIHJlbGF0aXZlIHBhdGhzXG4gICAgICAgICAgICB2YXIgc3JjID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgICAgICBpZiAoc3JjICE9PSB1cmwpIHtcbiAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSB0cnlpbmcgdG8gbG9hZCBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIHRoZSBBUElcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQgKFwiLmNvbmNhdChzcmMsIFwiKS5cIikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzY3JpcHQgaGFzIGFscmVhZHkgc3VjY2Vzc2Z1bGx5IGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciB0aGUgc2NyaXB0IHRvIGxvYWQgYW5kIHRoZW4gcmVzb2x2ZVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBBUEkgaGFzIGJlZW4gbG9hZGVkIGJ5IHNvbWUgb3RoZXIgbWVhbnNcbiAgICAgICAgICAgICAgICAvLyBwb3RlbnRpYWxseSB0cnlpbmcgdG8gbG9hZCBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIHRoZSBBUElcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWQuXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYXR0ZW1wdGluZyB0byBsb2FkIHRoZSBBUElcbiAgICAgICAgICAgICAgICB2YXIgY3NzID0gb3B0cy5jc3M7XG4gICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlVmVyc2lvbiA9IGNzcyA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCB0aGUgY3NzIGJlZm9yZSBsb2FkaW5nIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgbG9hZENzcyh1c2VWZXJzaW9uID8gdmVyc2lvbiA6IGNzcywgb3B0cy5pbnNlcnRDc3NCZWZvcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBzY3JpcHQgb2JqZWN0IHdob3NlIHNvdXJjZSBwb2ludHMgdG8gdGhlIEFQSVxuICAgICAgICAgICAgICAgIHNjcmlwdCA9IGNyZWF0ZVNjcmlwdCh1cmwpO1xuICAgICAgICAgICAgICAgIC8vIF9jdXJyZW50VXJsID0gdXJsO1xuICAgICAgICAgICAgICAgIC8vIG9uY2UgdGhlIHNjcmlwdCBpcyBsb2FkZWQuLi5cbiAgICAgICAgICAgICAgICBoYW5kbGVTY3JpcHRMb2FkKHNjcmlwdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHN0YXR1cyBvZiB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXNyaS1sb2FkZXInLCAnbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICAgICAgICAgIC8vIGxvYWQgdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbmltcG9ydCB7IGdldENkbkNzc1VybCwgcGFyc2VWZXJzaW9uIH0gZnJvbSAnLi91cmwnO1xuZnVuY3Rpb24gY3JlYXRlU3R5bGVzaGVldExpbmsoaHJlZikge1xuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgcmV0dXJuIGxpbms7XG59XG5mdW5jdGlvbiBpbnNlcnRMaW5rKGxpbmssIGJlZm9yZSkge1xuICAgIGlmIChiZWZvcmUpIHtcbiAgICAgICAgLy8gdGhlIGxpbmsgc2hvdWxkIGJlIGluc2VydGVkIGJlZm9yZSBhIHNwZWNpZmljIG5vZGVcbiAgICAgICAgdmFyIGJlZm9yZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJlZm9yZSk7XG4gICAgICAgIGJlZm9yZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGluaywgYmVmb3JlTm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBhcHBlbmQgdGhlIGxpbmsgdG8gdGhlbiBlbmQgb2YgdGhlIGhlYWQgdGFnXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfVxufVxuLy8gY2hlY2sgaWYgdGhlIGNzcyB1cmwgaGFzIGJlZW4gaW5qZWN0ZWQgb3IgYWRkZWQgbWFudWFsbHlcbmZ1bmN0aW9uIGdldENzcyh1cmwpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbaHJlZio9XFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIl1cIikpO1xufVxuZnVuY3Rpb24gZ2V0Q3NzVXJsKHVybE9yVmVyc2lvbikge1xuICAgIHJldHVybiAhdXJsT3JWZXJzaW9uIHx8IHBhcnNlVmVyc2lvbih1cmxPclZlcnNpb24pXG4gICAgICAgIC8vIGlmIGl0J3MgYSB2YWxpZCB2ZXJzaW9uIHN0cmluZyByZXR1cm4gdGhlIENETiBVUkxcbiAgICAgICAgPyBnZXRDZG5Dc3NVcmwodXJsT3JWZXJzaW9uKVxuICAgICAgICAvLyBvdGhlcndpc2UgYXNzdW1lIGl0J3MgYSBVUkwgYW5kIHJldHVybiB0aGF0XG4gICAgICAgIDogdXJsT3JWZXJzaW9uO1xufVxuLy8gbGF6eSBsb2FkIHRoZSBDU1MgbmVlZGVkIGZvciB0aGUgQXJjR0lTIEFQSVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDc3ModXJsT3JWZXJzaW9uLCBiZWZvcmUpIHtcbiAgICB2YXIgdXJsID0gZ2V0Q3NzVXJsKHVybE9yVmVyc2lvbik7XG4gICAgdmFyIGxpbmsgPSBnZXRDc3ModXJsKTtcbiAgICBpZiAoIWxpbmspIHtcbiAgICAgICAgLy8gY3JlYXRlICYgbG9hZCB0aGUgY3NzIGxpbmtcbiAgICAgICAgbGluayA9IGNyZWF0ZVN0eWxlc2hlZXRMaW5rKHVybCk7XG4gICAgICAgIGluc2VydExpbmsobGluaywgYmVmb3JlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbms7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMjIgRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuICogQXBhY2hlLTIuMCAqL1xudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuLy8gYWxsb3cgY29uc3VtaW5nIGxpYnJhcmllcyB0byBwcm92aWRlIHRoZWlyIG93biBQcm9taXNlIGltcGxlbWVudGF0aW9uc1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIFByb21pc2U6IGlzQnJvd3NlciA/IHdpbmRvd1snUHJvbWlzZSddIDogdW5kZWZpbmVkXG59O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDIyIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cbnZhciBERUZBVUxUX1ZFUlNJT04gPSAnNC4yNSc7XG52YXIgTkVYVCA9ICduZXh0JztcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZlcnNpb24odmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uLnRvTG93ZXJDYXNlKCkgPT09IE5FWFQpIHtcbiAgICAgICAgcmV0dXJuIE5FWFQ7XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHZlcnNpb24gJiYgdmVyc2lvbi5tYXRjaCgvXihcXGQpXFwuKFxcZCspLyk7XG4gICAgcmV0dXJuIG1hdGNoICYmIHtcbiAgICAgICAgbWFqb3I6IHBhcnNlSW50KG1hdGNoWzFdLCAxMCksXG4gICAgICAgIG1pbm9yOiBwYXJzZUludChtYXRjaFsyXSwgMTApXG4gICAgfTtcbn1cbi8qKlxuICogR2V0IHRoZSBDRE4gdXJsIGZvciBhIGdpdmVuIHZlcnNpb25cbiAqXG4gKiBAcGFyYW0gdmVyc2lvbiBFeDogJzQuMjUnIG9yICczLjQyJy4gRGVmYXVsdHMgdG8gdGhlIGxhdGVzdCA0LnggdmVyc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENkblVybCh2ZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24gPT09IHZvaWQgMCkgeyB2ZXJzaW9uID0gREVGQVVMVF9WRVJTSU9OOyB9XG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9qcy5hcmNnaXMuY29tL1wiLmNvbmNhdCh2ZXJzaW9uLCBcIi9cIik7XG59XG4vKipcbiAqIEdldCB0aGUgQ0ROIHVybCBmb3IgYSB0aGUgQ1NTIGZvciBhIGdpdmVuIHZlcnNpb24gYW5kL29yIHRoZW1lXG4gKlxuICogQHBhcmFtIHZlcnNpb24gRXg6ICc0LjI1JywgJzMuNDInLCBvciAnbmV4dCcuIERlZmF1bHRzIHRvIHRoZSBsYXRlc3QgNC54IHZlcnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5Dc3NVcmwodmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uID09PSB2b2lkIDApIHsgdmVyc2lvbiA9IERFRkFVTFRfVkVSU0lPTjsgfVxuICAgIHZhciBiYXNlVXJsID0gZ2V0Q2RuVXJsKHZlcnNpb24pO1xuICAgIHZhciBwYXJzZWRWZXJzaW9uID0gcGFyc2VWZXJzaW9uKHZlcnNpb24pO1xuICAgIGlmIChwYXJzZWRWZXJzaW9uICE9PSBORVhUICYmIHBhcnNlZFZlcnNpb24ubWFqb3IgPT09IDMpIHtcbiAgICAgICAgLy8gTk9URTogYXQgMy4xMSB0aGUgQ1NTIG1vdmVkIGZyb20gdGhlIC9qcyBmb2xkZXIgdG8gdGhlIHJvb3RcbiAgICAgICAgdmFyIHBhdGggPSBwYXJzZWRWZXJzaW9uLm1pbm9yIDw9IDEwID8gJ2pzLycgOiAnJztcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGJhc2VVcmwpLmNvbmNhdChwYXRoLCBcImVzcmkvY3NzL2VzcmkuY3NzXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gYXNzdW1lIDQueFxuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoYmFzZVVybCwgXCJlc3JpL3RoZW1lcy9saWdodC9tYWluLmNzc1wiKTtcbiAgICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vY2FsY2l0ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9jYWxjaXRlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2NhbGUodHJhbnNsYXRpb25zKSB7XHJcbiAgLy8gRGV0ZWN0YSBsb2NhbGUgZGVzZGUgbGEgVVJMICg/bG9jYWxlPWVuKSBvIGZhbGxiYWNrIGEgXCJlc1wiXHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICBjb25zdCBsb2NhbGUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibG9jYWxlXCIpIHx8IFwiZXNcIjtcclxuXHJcbiAgY29uc3QgdCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIChrZXk6IGtleW9mIHR5cGVvZiB0cmFuc2xhdGlvbnNbXCJlc1wiXSkgPT5cclxuICAgICAgdHJhbnNsYXRpb25zW2xvY2FsZSBhcyBcImVzXCIgfCBcImVuXCJdW2tleV0gPz8ga2V5O1xyXG4gIH0sIFtsb2NhbGVdKTtcclxuXHJcbiAgcmV0dXJuIHsgdCwgbG9jYWxlIH07XHJcbn0iLCJleHBvcnQgY29uc3QgdHJhbnNsYXRpb25zID0ge1xyXG4gICAgZXM6IHtcclxuICAgICAgd2lkZ2V0TGFiZWw6IFwiRGV0ZWNjacOzbiBkZSDDoXJlYXMgcXVlbWFkYXMgeSBkZXRlY2Npw7NuIGRlIMOhcmVhcyBpbnVuZGFkYXNcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiUGVybWl0ZSBpZGVudGlmaWNhciDDoXJlYXMgZGUgcmllc2dvIGRlIGluY2VuZGlvIHkgcmllc2dvIGRlIGludW5kYWNpw7NuIHBhcmEgZGVsaW1pdGFyIGEgdHJhdsOpcyBkZSB1biBwb2zDrWdvbm8gbGEgem9uYSBhZmVjdGFkYS4gXCIsXHJcbiAgICAgIGluY2VuZGlvOiBcIkluY2VuZGlvc1wiLFxyXG4gICAgICBpbnVuZGFjaW9uOiBcIkludW5kYWNpb25lc1wiLFxyXG4gICAgICBlcnJvckltYWdlbjogXCJEZWJlIHNlbGVjY2lvbmFyIHVuYSBpbWFnZW4gYW50ZXMgZGUgZWplY3V0YXIgZXN0ZSBwcm9jZXNvXCIsXHJcbiAgICAgIGVycm9yQnVmZmVyOiBcIkRlYmUgc2VsZWNjaW9uYXIgbcOtbmltbyB1biBwb2zDrWdvbm8uXCIsXHJcbiAgICAgIGZpcmVMYXllcjogXCJab25hcyBxdWVtYWRhc1wiLFxyXG4gICAgICBmbG9vZExheWVyOiBcIlpvbmFzIGludW5kYWRhc1wiLFxyXG4gICAgICBmaXJlRXJyb3I6IFwiRXJyb3IgYWwgY2FyZ2FyIHJpZXNnbyBkZSBpbmNlbmRpbywgaW50ZW50YSBkZSBudWV2b1wiLFxyXG4gICAgICBmbG9vZEVycm9yOiBcIkVycm9yIGFsIGNhcmdhciByaWVzZ28gZGUgaW51bmRhY2lvbiwgaW50ZW50YSBkZSBudWV2b1wiLFxyXG4gICAgICBidWZmZXJMYXllcjogXCJCdWZmZXIgZGUgem9uYSBhZmVjdGFkYVwiLFxyXG5cclxuICAgIH0sXHJcbiAgICBlbjoge1xyXG4gICAgICB3aWRnZXRMYWJlbDogXCJEZXRlY3Rpb24gb2YgYnVybmVkIGFyZWFzIGFuZCBkZXRlY3Rpb24gb2YgZmxvb2RlZCBhcmVhc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJJdCBhbGxvd3MgeW91IHRvIGlkZW50aWZ5IGFyZWFzIGF0IHJpc2sgb2YgZmlyZSBhbmQgZmxvb2RpbmcgYW5kIGRlbGltaXQgdGhlIGFmZmVjdGVkIGFyZWEgdXNpbmcgYSBwb2x5Z29uLlwiLFxyXG4gICAgICBpbmNlbmRpbzogXCJXaWxkZmlyZXNcIixcclxuICAgICAgaW51bmRhY2lvbjogXCJGbG9vZHNcIixcclxuICAgICAgZGlidWphckxpbmVhczogXCJEcmF3IHByb3hpbWl0eSBsaW5lc1wiLFxyXG4gICAgICBlcnJvckltYWdlbjogXCJZb3UgbXVzdCBzZWxlY3QgYW4gaW1hZ2UgYmVmb3JlIHJ1bm5pbmcgdGhpcyBwcm9jZXNzXCIsXHJcbiAgICAgIGVycm9yQnVmZmVyOiBcIllvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCBvbmUgcG9seWdvbi5cIixcclxuICAgICAgbWluS21XYXJuaW5nOiBcIlRoZSB2YWx1ZSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAxMDAga20uXCIsXHJcbiAgICAgIG1heEttV2FybmluZzogXCJUaGUgdmFsdWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMSBrbS5cIixcclxuICAgICAgZmlyZUxheWVyOiBcIkJ1cm5lZCBhcmVhc1wiLFxyXG4gICAgICBmbG9vZExheWVyOiBcIkZsb29kZWQgYXJlYXNcIixcclxuICAgICAgZmlyZUVycm9yOiBcIkVycm9yIGxvYWRpbmcgZmlyZSByaXNrLCB0cnkgYWdhaW4uXCIsXHJcbiAgICAgIGZsb29kRXJyb3I6IFwiRXJyb3IgbG9hZGluZyBmbG9vZCByaXNrLCB0cnkgYWdhaW4uXCIsXHJcbiAgICAgIGJ1ZmZlckxheWVyOiBcImFmZmVjdGVkIGFyZWEgYnVmZmVyXCIsXHJcbiAgICB9XHJcbiAgfTsiLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiB1c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICd1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgICAgdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuICA7XG59XG5cbnZhciBvYmplY3RJcyA9IHR5cGVvZiBPYmplY3QuaXMgPT09ICdmdW5jdGlvbicgPyBPYmplY3QuaXMgOiBpcztcblxudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gUmVhY3QudXNlU3luY0V4dGVybmFsU3RvcmU7XG5cbi8vIGZvciBDb21tb25KUyBpbnRlcm9wLlxuXG52YXIgdXNlUmVmID0gUmVhY3QudXNlUmVmLFxuICAgIHVzZUVmZmVjdCA9IFJlYWN0LnVzZUVmZmVjdCxcbiAgICB1c2VNZW1vID0gUmVhY3QudXNlTWVtbyxcbiAgICB1c2VEZWJ1Z1ZhbHVlID0gUmVhY3QudXNlRGVidWdWYWx1ZTsgLy8gU2FtZSBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSwgYnV0IHN1cHBvcnRzIHNlbGVjdG9yIGFuZCBpc0VxdWFsIGFyZ3VtZW50cy5cblxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3Ioc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QsIHNlbGVjdG9yLCBpc0VxdWFsKSB7XG4gIC8vIFVzZSB0aGlzIHRvIHRyYWNrIHRoZSByZW5kZXJlZCBzbmFwc2hvdC5cbiAgdmFyIGluc3RSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBpbnN0O1xuXG4gIGlmIChpbnN0UmVmLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICBpbnN0ID0ge1xuICAgICAgaGFzVmFsdWU6IGZhbHNlLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9O1xuICAgIGluc3RSZWYuY3VycmVudCA9IGluc3Q7XG4gIH0gZWxzZSB7XG4gICAgaW5zdCA9IGluc3RSZWYuY3VycmVudDtcbiAgfVxuXG4gIHZhciBfdXNlTWVtbyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIC8vIFRyYWNrIHRoZSBtZW1vaXplZCBzdGF0ZSB1c2luZyBjbG9zdXJlIHZhcmlhYmxlcyB0aGF0IGFyZSBsb2NhbCB0byB0aGlzXG4gICAgLy8gbWVtb2l6ZWQgaW5zdGFuY2Ugb2YgYSBnZXRTbmFwc2hvdCBmdW5jdGlvbi4gSW50ZW50aW9uYWxseSBub3QgdXNpbmcgYVxuICAgIC8vIHVzZVJlZiBob29rLCBiZWNhdXNlIHRoYXQgc3RhdGUgd291bGQgYmUgc2hhcmVkIGFjcm9zcyBhbGwgY29uY3VycmVudFxuICAgIC8vIGNvcGllcyBvZiB0aGUgaG9vay9jb21wb25lbnQuXG4gICAgdmFyIGhhc01lbW8gPSBmYWxzZTtcbiAgICB2YXIgbWVtb2l6ZWRTbmFwc2hvdDtcbiAgICB2YXIgbWVtb2l6ZWRTZWxlY3Rpb247XG5cbiAgICB2YXIgbWVtb2l6ZWRTZWxlY3RvciA9IGZ1bmN0aW9uIChuZXh0U25hcHNob3QpIHtcbiAgICAgIGlmICghaGFzTWVtbykge1xuICAgICAgICAvLyBUaGUgZmlyc3QgdGltZSB0aGUgaG9vayBpcyBjYWxsZWQsIHRoZXJlIGlzIG5vIG1lbW9pemVkIHJlc3VsdC5cbiAgICAgICAgaGFzTWVtbyA9IHRydWU7XG4gICAgICAgIG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG5cbiAgICAgICAgdmFyIF9uZXh0U2VsZWN0aW9uID0gc2VsZWN0b3IobmV4dFNuYXBzaG90KTtcblxuICAgICAgICBpZiAoaXNFcXVhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gRXZlbiBpZiB0aGUgc2VsZWN0b3IgaGFzIGNoYW5nZWQsIHRoZSBjdXJyZW50bHkgcmVuZGVyZWQgc2VsZWN0aW9uXG4gICAgICAgICAgLy8gbWF5IGJlIGVxdWFsIHRvIHRoZSBuZXcgc2VsZWN0aW9uLiBXZSBzaG91bGQgYXR0ZW1wdCB0byByZXVzZSB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IHZhbHVlIGlmIHBvc3NpYmxlLCB0byBwcmVzZXJ2ZSBkb3duc3RyZWFtIG1lbW9pemF0aW9ucy5cbiAgICAgICAgICBpZiAoaW5zdC5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3Rpb24gPSBpbnN0LnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoaXNFcXVhbChjdXJyZW50U2VsZWN0aW9uLCBfbmV4dFNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFNlbGVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IF9uZXh0U2VsZWN0aW9uO1xuICAgICAgICByZXR1cm4gX25leHRTZWxlY3Rpb247XG4gICAgICB9IC8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuXG5cbiAgICAgIC8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuICAgICAgdmFyIHByZXZTbmFwc2hvdCA9IG1lbW9pemVkU25hcHNob3Q7XG4gICAgICB2YXIgcHJldlNlbGVjdGlvbiA9IG1lbW9pemVkU2VsZWN0aW9uO1xuXG4gICAgICBpZiAob2JqZWN0SXMocHJldlNuYXBzaG90LCBuZXh0U25hcHNob3QpKSB7XG4gICAgICAgIC8vIFRoZSBzbmFwc2hvdCBpcyB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuIFJldXNlIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uXG4gICAgICAgIHJldHVybiBwcmV2U2VsZWN0aW9uO1xuICAgICAgfSAvLyBUaGUgc25hcHNob3QgaGFzIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBzZWxlY3Rpb24uXG5cblxuICAgICAgLy8gVGhlIHNuYXBzaG90IGhhcyBjaGFuZ2VkLCBzbyB3ZSBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgc2VsZWN0aW9uLlxuICAgICAgdmFyIG5leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpOyAvLyBJZiBhIGN1c3RvbSBpc0VxdWFsIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB1c2UgdGhhdCB0byBjaGVjayBpZiB0aGUgZGF0YVxuICAgICAgLy8gaGFzIGNoYW5nZWQuIElmIGl0IGhhc24ndCwgcmV0dXJuIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uIFRoYXQgc2lnbmFsc1xuICAgICAgLy8gdG8gUmVhY3QgdGhhdCB0aGUgc2VsZWN0aW9ucyBhcmUgY29uY2VwdHVhbGx5IGVxdWFsLCBhbmQgd2UgY2FuIGJhaWxcbiAgICAgIC8vIG91dCBvZiByZW5kZXJpbmcuXG5cbiAgICAgIC8vIElmIGEgY3VzdG9tIGlzRXF1YWwgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHVzZSB0aGF0IHRvIGNoZWNrIGlmIHRoZSBkYXRhXG4gICAgICAvLyBoYXMgY2hhbmdlZC4gSWYgaXQgaGFzbid0LCByZXR1cm4gdGhlIHByZXZpb3VzIHNlbGVjdGlvbi4gVGhhdCBzaWduYWxzXG4gICAgICAvLyB0byBSZWFjdCB0aGF0IHRoZSBzZWxlY3Rpb25zIGFyZSBjb25jZXB0dWFsbHkgZXF1YWwsIGFuZCB3ZSBjYW4gYmFpbFxuICAgICAgLy8gb3V0IG9mIHJlbmRlcmluZy5cbiAgICAgIGlmIChpc0VxdWFsICE9PSB1bmRlZmluZWQgJiYgaXNFcXVhbChwcmV2U2VsZWN0aW9uLCBuZXh0U2VsZWN0aW9uKSkge1xuICAgICAgICByZXR1cm4gcHJldlNlbGVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcbiAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gbmV4dFNlbGVjdGlvbjtcbiAgICAgIHJldHVybiBuZXh0U2VsZWN0aW9uO1xuICAgIH07IC8vIEFzc2lnbmluZyB0aGlzIHRvIGEgY29uc3RhbnQgc28gdGhhdCBGbG93IGtub3dzIGl0IGNhbid0IGNoYW5nZS5cblxuXG4gICAgLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuICAgIHZhciBtYXliZUdldFNlcnZlclNuYXBzaG90ID0gZ2V0U2VydmVyU25hcHNob3QgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBnZXRTZXJ2ZXJTbmFwc2hvdDtcblxuICAgIHZhciBnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZW1vaXplZFNlbGVjdG9yKGdldFNuYXBzaG90KCkpO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3IgPSBtYXliZUdldFNlcnZlclNuYXBzaG90ID09PSBudWxsID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IobWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCgpKTtcbiAgICB9O1xuICAgIHJldHVybiBbZ2V0U25hcHNob3RXaXRoU2VsZWN0b3IsIGdldFNlcnZlclNuYXBzaG90V2l0aFNlbGVjdG9yXTtcbiAgfSwgW2dldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWxdKSxcbiAgICAgIGdldFNlbGVjdGlvbiA9IF91c2VNZW1vWzBdLFxuICAgICAgZ2V0U2VydmVyU2VsZWN0aW9uID0gX3VzZU1lbW9bMV07XG5cbiAgdmFyIHZhbHVlID0gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTZWxlY3Rpb24sIGdldFNlcnZlclNlbGVjdGlvbik7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaW5zdC5oYXNWYWx1ZSA9IHRydWU7XG4gICAgaW5zdC52YWx1ZSA9IHZhbHVlO1xuICB9LCBbdmFsdWVdKTtcbiAgdXNlRGVidWdWYWx1ZSh2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtd2l0aC1zZWxlY3Rvci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS13aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsImZ1bmN0aW9uIHIoZSl7dmFyIHQsZixuPVwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlKW4rPWU7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlpZihBcnJheS5pc0FycmF5KGUpKXt2YXIgbz1lLmxlbmd0aDtmb3IodD0wO3Q8bzt0KyspZVt0XSYmKGY9cihlW3RdKSkmJihuJiYobis9XCIgXCIpLG4rPWYpfWVsc2UgZm9yKGYgaW4gZSllW2ZdJiYobiYmKG4rPVwiIFwiKSxuKz1mKTtyZXR1cm4gbn1leHBvcnQgZnVuY3Rpb24gY2xzeCgpe2Zvcih2YXIgZSx0LGY9MCxuPVwiXCIsbz1hcmd1bWVudHMubGVuZ3RoO2Y8bztmKyspKGU9YXJndW1lbnRzW2ZdKSYmKHQ9cihlKSkmJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBkZWZhdWx0IGNsc3g7IiwiLy8gc3JjL2luZGV4LnRzXG5pbXBvcnQgKiBhcyBSZWFjdDIgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcjIgfSBmcm9tIFwidXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvd2l0aC1zZWxlY3Rvci5qc1wiO1xuXG4vLyBzcmMvdXRpbHMvcmVhY3QudHNcbmltcG9ydCAqIGFzIFJlYWN0T3JpZ2luYWwgZnJvbSBcInJlYWN0XCI7XG52YXIgUmVhY3QgPSAoXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICAvLyBAdHMtaWdub3JlXG4gIFwiZGVmYXVsdFwiIGluIFJlYWN0T3JpZ2luYWwgPyBSZWFjdE9yaWdpbmFsW1wiZGVmYXVsdFwiXSA6IFJlYWN0T3JpZ2luYWxcbik7XG5cbi8vIHNyYy9jb21wb25lbnRzL0NvbnRleHQudHNcbnZhciBDb250ZXh0S2V5ID0gU3ltYm9sLmZvcihgcmVhY3QtcmVkdXgtY29udGV4dGApO1xudmFyIGdUID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogKFxuICAvKiBmYWxsIGJhY2sgdG8gYSBwZXItbW9kdWxlIHNjb3BlIChwcmUtOC4xIGJlaGF2aW91cikgaWYgYGdsb2JhbFRoaXNgIGlzIG5vdCBhdmFpbGFibGUgKi9cbiAge31cbik7XG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICBpZiAoIVJlYWN0LmNyZWF0ZUNvbnRleHQpXG4gICAgcmV0dXJuIHt9O1xuICBjb25zdCBjb250ZXh0TWFwID0gZ1RbQ29udGV4dEtleV0gPz8gKGdUW0NvbnRleHRLZXldID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gIGxldCByZWFsQ29udGV4dCA9IGNvbnRleHRNYXAuZ2V0KFJlYWN0LmNyZWF0ZUNvbnRleHQpO1xuICBpZiAoIXJlYWxDb250ZXh0KSB7XG4gICAgcmVhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgcmVhbENvbnRleHQuZGlzcGxheU5hbWUgPSBcIlJlYWN0UmVkdXhcIjtcbiAgICB9XG4gICAgY29udGV4dE1hcC5zZXQoUmVhY3QuY3JlYXRlQ29udGV4dCwgcmVhbENvbnRleHQpO1xuICB9XG4gIHJldHVybiByZWFsQ29udGV4dDtcbn1cbnZhciBSZWFjdFJlZHV4Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBnZXRDb250ZXh0KCk7XG5cbi8vIHNyYy91dGlscy91c2VTeW5jRXh0ZXJuYWxTdG9yZS50c1xudmFyIG5vdEluaXRpYWxpemVkID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJ1U0VTIG5vdCBpbml0aWFsaXplZCFcIik7XG59O1xuXG4vLyBzcmMvaG9va3MvdXNlUmVkdXhDb250ZXh0LnRzXG5mdW5jdGlvbiBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gdXNlUmVkdXhDb250ZXh0MigpIHtcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KGNvbnRleHQpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWNvbnRleHRWYWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcImNvdWxkIG5vdCBmaW5kIHJlYWN0LXJlZHV4IGNvbnRleHQgdmFsdWU7IHBsZWFzZSBlbnN1cmUgdGhlIGNvbXBvbmVudCBpcyB3cmFwcGVkIGluIGEgPFByb3ZpZGVyPlwiXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICB9O1xufVxudmFyIHVzZVJlZHV4Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVSZWR1eENvbnRleHRIb29rKCk7XG5cbi8vIHNyYy9ob29rcy91c2VTZWxlY3Rvci50c1xudmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gbm90SW5pdGlhbGl6ZWQ7XG52YXIgaW5pdGlhbGl6ZVVzZVNlbGVjdG9yID0gKGZuKSA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gZm47XG59O1xudmFyIHJlZkVxdWFsaXR5ID0gKGEsIGIpID0+IGEgPT09IGI7XG5mdW5jdGlvbiBjcmVhdGVTZWxlY3Rvckhvb2soY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0KSB7XG4gIGNvbnN0IHVzZVJlZHV4Q29udGV4dDIgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZVJlZHV4Q29udGV4dCA6IGNyZWF0ZVJlZHV4Q29udGV4dEhvb2soY29udGV4dCk7XG4gIGNvbnN0IHVzZVNlbGVjdG9yMiA9IChzZWxlY3RvciwgZXF1YWxpdHlGbk9yT3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyBlcXVhbGl0eUZuID0gcmVmRXF1YWxpdHksIGRldk1vZGVDaGVja3MgPSB7fSB9ID0gdHlwZW9mIGVxdWFsaXR5Rm5Pck9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIiA/IHsgZXF1YWxpdHlGbjogZXF1YWxpdHlGbk9yT3B0aW9ucyB9IDogZXF1YWxpdHlGbk9yT3B0aW9ucztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yYCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvcmApO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlcXVhbGl0eUZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYW4gZXF1YWxpdHkgZnVuY3Rpb24gdG8gdXNlU2VsZWN0b3JgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgZ2V0U2VydmVyU3RhdGUsXG4gICAgICBzdGFiaWxpdHlDaGVjayxcbiAgICAgIGlkZW50aXR5RnVuY3Rpb25DaGVja1xuICAgIH0gPSB1c2VSZWR1eENvbnRleHQyKCk7XG4gICAgY29uc3QgZmlyc3RSdW4gPSBSZWFjdC51c2VSZWYodHJ1ZSk7XG4gICAgY29uc3Qgd3JhcHBlZFNlbGVjdG9yID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgICB7XG4gICAgICAgIFtzZWxlY3Rvci5uYW1lXShzdGF0ZSkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrOiBmaW5hbElkZW50aXR5RnVuY3Rpb25DaGVjayxcbiAgICAgICAgICAgICAgc3RhYmlsaXR5Q2hlY2s6IGZpbmFsU3RhYmlsaXR5Q2hlY2tcbiAgICAgICAgICAgIH0gPSB7XG4gICAgICAgICAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgICAgICAgICBpZGVudGl0eUZ1bmN0aW9uQ2hlY2ssXG4gICAgICAgICAgICAgIC4uLmRldk1vZGVDaGVja3NcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZmluYWxTdGFiaWxpdHlDaGVjayA9PT0gXCJhbHdheXNcIiB8fCBmaW5hbFN0YWJpbGl0eUNoZWNrID09PSBcIm9uY2VcIiAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRvQ29tcGFyZSA9IHNlbGVjdG9yKHN0YXRlKTtcbiAgICAgICAgICAgICAgaWYgKCFlcXVhbGl0eUZuKHNlbGVjdGVkLCB0b0NvbXBhcmUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAoeyBzdGFjayB9ID0gZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgIFwiU2VsZWN0b3IgXCIgKyAoc2VsZWN0b3IubmFtZSB8fCBcInVua25vd25cIikgKyBcIiByZXR1cm5lZCBhIGRpZmZlcmVudCByZXN1bHQgd2hlbiBjYWxsZWQgd2l0aCB0aGUgc2FtZSBwYXJhbWV0ZXJzLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy5cXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gYSBuZXcgcmVmZXJlbmNlIChzdWNoIGFzIGFuIG9iamVjdCBvciBhbiBhcnJheSkgc2hvdWxkIGJlIG1lbW9pemVkOiBodHRwczovL3JlZHV4LmpzLm9yZy91c2FnZS9kZXJpdmluZy1kYXRhLXNlbGVjdG9ycyNvcHRpbWl6aW5nLXNlbGVjdG9ycy13aXRoLW1lbW9pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQyOiB0b0NvbXBhcmUsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrID09PSBcImFsd2F5c1wiIHx8IGZpbmFsSWRlbnRpdHlGdW5jdGlvbkNoZWNrID09PSBcIm9uY2VcIiAmJiBmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhY2sgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICh7IHN0YWNrIH0gPSBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgXCJTZWxlY3RvciBcIiArIChzZWxlY3Rvci5uYW1lIHx8IFwidW5rbm93blwiKSArIFwiIHJldHVybmVkIHRoZSByb290IHN0YXRlIHdoZW4gY2FsbGVkLiBUaGlzIGNhbiBsZWFkIHRvIHVubmVjZXNzYXJ5IHJlcmVuZGVycy5cXG5TZWxlY3RvcnMgdGhhdCByZXR1cm4gdGhlIGVudGlyZSBzdGF0ZSBhcmUgYWxtb3N0IGNlcnRhaW5seSBhIG1pc3Rha2UsIGFzIHRoZXkgd2lsbCBjYXVzZSBhIHJlcmVuZGVyIHdoZW5ldmVyICphbnl0aGluZyogaW4gc3RhdGUgY2hhbmdlcy5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhY2sgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaXJzdFJ1bi5jdXJyZW50KVxuICAgICAgICAgICAgICBmaXJzdFJ1bi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgfVtzZWxlY3Rvci5uYW1lXSxcbiAgICAgIFtzZWxlY3Rvciwgc3RhYmlsaXR5Q2hlY2ssIGRldk1vZGVDaGVja3Muc3RhYmlsaXR5Q2hlY2tdXG4gICAgKTtcbiAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IoXG4gICAgICBzdWJzY3JpcHRpb24uYWRkTmVzdGVkU3ViLFxuICAgICAgc3RvcmUuZ2V0U3RhdGUsXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZSB8fCBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgIHdyYXBwZWRTZWxlY3RvcixcbiAgICAgIGVxdWFsaXR5Rm5cbiAgICApO1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUoc2VsZWN0ZWRTdGF0ZSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkU3RhdGU7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24odXNlU2VsZWN0b3IyLCB7XG4gICAgd2l0aFR5cGVzOiAoKSA9PiB1c2VTZWxlY3RvcjJcbiAgfSk7XG4gIHJldHVybiB1c2VTZWxlY3RvcjI7XG59XG52YXIgdXNlU2VsZWN0b3IgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlU2VsZWN0b3JIb29rKCk7XG5cbi8vIHNyYy91dGlscy9yZWFjdC1pcy50c1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpO1xudmFyIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc2VydmVyX2NvbnRleHRcIik7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm9mZnNjcmVlblwiKTtcbnZhciBSRUFDVF9DTElFTlRfUkVGRVJFTkNFID0gU3ltYm9sLmZvcihcInJlYWN0LmNsaWVudC5yZWZlcmVuY2VcIik7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSBcIm9iamVjdFwiICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DTElFTlRfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG9iamVjdC50eXBlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBjb25zdCAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRToge1xuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2b2lkIDA7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuXG4vLyBzcmMvdXRpbHMvd2FybmluZy50c1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbi8vIHNyYy9jb25uZWN0L3ZlcmlmeVN1YnNlbGVjdG9ycy50c1xuZnVuY3Rpb24gdmVyaWZ5KHNlbGVjdG9yLCBtZXRob2ROYW1lKSB7XG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdmFsdWUgZm9yICR7bWV0aG9kTmFtZX0gaW4gY29ubmVjdC5gKTtcbiAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09PSBcIm1hcFN0YXRlVG9Qcm9wc1wiIHx8IG1ldGhvZE5hbWUgPT09IFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWxlY3RvciwgXCJkZXBlbmRzT25Pd25Qcm9wc1wiKSkge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgYFRoZSBzZWxlY3RvciBmb3IgJHttZXRob2ROYW1lfSBvZiBjb25uZWN0IGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy5gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKSB7XG4gIHZlcmlmeShtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIpO1xuICB2ZXJpZnkobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiKTtcbiAgdmVyaWZ5KG1lcmdlUHJvcHMsIFwibWVyZ2VQcm9wc1wiKTtcbn1cblxuLy8gc3JjL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LnRzXG5mdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIHtcbiAgYXJlU3RhdGVzRXF1YWwsXG4gIGFyZU93blByb3BzRXF1YWwsXG4gIGFyZVN0YXRlUHJvcHNFcXVhbFxufSkge1xuICBsZXQgaGFzUnVuQXRMZWFzdE9uY2UgPSBmYWxzZTtcbiAgbGV0IHN0YXRlO1xuICBsZXQgb3duUHJvcHM7XG4gIGxldCBzdGF0ZVByb3BzO1xuICBsZXQgZGlzcGF0Y2hQcm9wcztcbiAgbGV0IG1lcmdlZFByb3BzO1xuICBmdW5jdGlvbiBoYW5kbGVGaXJzdENhbGwoZmlyc3RTdGF0ZSwgZmlyc3RPd25Qcm9wcykge1xuICAgIHN0YXRlID0gZmlyc3RTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IGZpcnN0T3duUHJvcHM7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIGhhc1J1bkF0TGVhc3RPbmNlID0gdHJ1ZTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpIHtcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcylcbiAgICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wcygpIHtcbiAgICBpZiAobWFwU3RhdGVUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKVxuICAgICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpXG4gICAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTmV3U3RhdGUoKSB7XG4gICAgY29uc3QgbmV4dFN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpXG4gICAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICBjb25zdCBwcm9wc0NoYW5nZWQgPSAhYXJlT3duUHJvcHNFcXVhbChuZXh0T3duUHJvcHMsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZUNoYW5nZWQgPSAhYXJlU3RhdGVzRXF1YWwoXG4gICAgICBuZXh0U3RhdGUsXG4gICAgICBzdGF0ZSxcbiAgICAgIG5leHRPd25Qcm9wcyxcbiAgICAgIG93blByb3BzXG4gICAgKTtcbiAgICBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IG5leHRPd25Qcm9wcztcbiAgICBpZiAocHJvcHNDaGFuZ2VkICYmIHN0YXRlQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZClcbiAgICAgIHJldHVybiBoYW5kbGVOZXdQcm9wcygpO1xuICAgIGlmIChzdGF0ZUNoYW5nZWQpXG4gICAgICByZXR1cm4gaGFuZGxlTmV3U3RhdGUoKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIHtcbiAgaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgaW5pdE1lcmdlUHJvcHMsXG4gIC4uLm9wdGlvbnNcbn0pIHtcbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gaW5pdE1hcFN0YXRlVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBjb25zdCBtZXJnZVByb3BzID0gaW5pdE1lcmdlUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKTtcbiAgfVxuICByZXR1cm4gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBvcHRpb25zKTtcbn1cblxuLy8gc3JjL3V0aWxzL2JpbmRBY3Rpb25DcmVhdG9ycy50c1xuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBjb25zdCBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgY29uc3QgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9ICguLi5hcmdzKSA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yKC4uLmFyZ3MpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cbi8vIHNyYy91dGlscy9pc1BsYWluT2JqZWN0LnRzXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiB8fCBvYmogPT09IG51bGwpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICBpZiAocHJvdG8gPT09IG51bGwpXG4gICAgcmV0dXJuIHRydWU7XG4gIGxldCBiYXNlUHJvdG8gPSBwcm90bztcbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pICE9PSBudWxsKSB7XG4gICAgYmFzZVByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90byk7XG4gIH1cbiAgcmV0dXJuIHByb3RvID09PSBiYXNlUHJvdG87XG59XG5cbi8vIHNyYy91dGlscy92ZXJpZnlQbGFpbk9iamVjdC50c1xuZnVuY3Rpb24gdmVyaWZ5UGxhaW5PYmplY3QodmFsdWUsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuaW5nKFxuICAgICAgYCR7bWV0aG9kTmFtZX0oKSBpbiAke2Rpc3BsYXlOYW1lfSBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdC4gSW5zdGVhZCByZWNlaXZlZCAke3ZhbHVlfS5gXG4gICAgKTtcbiAgfVxufVxuXG4vLyBzcmMvY29ubmVjdC93cmFwTWFwVG9Qcm9wcy50c1xuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNDb25zdGFudChnZXRDb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdENvbnN0YW50U2VsZWN0b3IoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBjb25zdGFudCA9IGdldENvbnN0YW50KGRpc3BhdGNoKTtcbiAgICBmdW5jdGlvbiBjb25zdGFudFNlbGVjdG9yKCkge1xuICAgICAgcmV0dXJuIGNvbnN0YW50O1xuICAgIH1cbiAgICBjb25zdGFudFNlbGVjdG9yLmRlcGVuZHNPbk93blByb3BzID0gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnN0YW50U2VsZWN0b3I7XG4gIH07XG59XG5mdW5jdGlvbiBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzID8gQm9vbGVhbihtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSA6IG1hcFRvUHJvcHMubGVuZ3RoICE9PSAxO1xufVxuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLCB7IGRpc3BsYXlOYW1lIH0pIHtcbiAgICBjb25zdCBwcm94eSA9IGZ1bmN0aW9uIG1hcFRvUHJvcHNQcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICByZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPyBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIDogcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIHZvaWQgMCk7XG4gICAgfTtcbiAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IHRydWU7XG4gICAgcHJveHkubWFwVG9Qcm9wcyA9IGZ1bmN0aW9uIGRldGVjdEZhY3RvcnlBbmRWZXJpZnkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IG1hcFRvUHJvcHM7XG4gICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpO1xuICAgICAgbGV0IHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICBpZiAodHlwZW9mIHByb3BzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IHByb3BzO1xuICAgICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKHByb3BzKTtcbiAgICAgICAgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHZlcmlmeVBsYWluT2JqZWN0KHByb3BzLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG59XG5cbi8vIHNyYy9jb25uZWN0L2ludmFsaWRBcmdGYWN0b3J5LnRzXG5mdW5jdGlvbiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShhcmcsIG5hbWUpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgb3B0aW9ucykgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIHZhbHVlIG9mIHR5cGUgJHt0eXBlb2YgYXJnfSBmb3IgJHtuYW1lfSBhcmd1bWVudCB3aGVuIGNvbm5lY3RpbmcgY29tcG9uZW50ICR7b3B0aW9ucy53cmFwcGVkQ29tcG9uZW50TmFtZX0uYFxuICAgICk7XG4gIH07XG59XG5cbi8vIHNyYy9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcy50c1xuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcyAmJiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSBcIm9iamVjdFwiID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChcbiAgICAoZGlzcGF0Y2gpID0+IChcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGJpbmRBY3Rpb25DcmVhdG9ycyhtYXBEaXNwYXRjaFRvUHJvcHMsIGRpc3BhdGNoKVxuICAgIClcbiAgKSA6ICFtYXBEaXNwYXRjaFRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KChkaXNwYXRjaCkgPT4gKHtcbiAgICBkaXNwYXRjaFxuICB9KSkgOiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSBcImZ1bmN0aW9uXCIgPyAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpXG4gICkgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIpO1xufVxuXG4vLyBzcmMvY29ubmVjdC9tYXBTdGF0ZVRvUHJvcHMudHNcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwU3RhdGVUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudCgoKSA9PiAoe30pKSA6IHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHMgPT09IFwiZnVuY3Rpb25cIiA/IChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIilcbiAgKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgXCJtYXBTdGF0ZVRvUHJvcHNcIik7XG59XG5cbi8vIHNyYy9jb25uZWN0L21lcmdlUHJvcHMudHNcbmZ1bmN0aW9uIGRlZmF1bHRNZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gIHJldHVybiB7IC4uLm93blByb3BzLCAuLi5zdGF0ZVByb3BzLCAuLi5kaXNwYXRjaFByb3BzIH07XG59XG5mdW5jdGlvbiB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdE1lcmdlUHJvcHNQcm94eShkaXNwYXRjaCwgeyBkaXNwbGF5TmFtZSwgYXJlTWVyZ2VkUHJvcHNFcXVhbCB9KSB7XG4gICAgbGV0IGhhc1J1bk9uY2UgPSBmYWxzZTtcbiAgICBsZXQgbWVyZ2VkUHJvcHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlUHJvcHNQcm94eShzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAgICAgY29uc3QgbmV4dE1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgICBpZiAoaGFzUnVuT25jZSkge1xuICAgICAgICBpZiAoIWFyZU1lcmdlZFByb3BzRXF1YWwobmV4dE1lcmdlZFByb3BzLCBtZXJnZWRQcm9wcykpXG4gICAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNSdW5PbmNlID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgdmVyaWZ5UGxhaW5PYmplY3QobWVyZ2VkUHJvcHMsIGRpc3BsYXlOYW1lLCBcIm1lcmdlUHJvcHNcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gKCkgPT4gZGVmYXVsdE1lcmdlUHJvcHMgOiB0eXBlb2YgbWVyZ2VQcm9wcyA9PT0gXCJmdW5jdGlvblwiID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWVyZ2VQcm9wcywgXCJtZXJnZVByb3BzXCIpO1xufVxuXG4vLyBzcmMvdXRpbHMvYmF0Y2gudHNcbmZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soKTtcbn1cblxuLy8gc3JjL3V0aWxzL1N1YnNjcmlwdGlvbi50c1xuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICBsZXQgZmlyc3QgPSBudWxsO1xuICBsZXQgbGFzdCA9IG51bGw7XG4gIHJldHVybiB7XG4gICAgY2xlYXIoKSB7XG4gICAgICBmaXJzdCA9IG51bGw7XG4gICAgICBsYXN0ID0gbnVsbDtcbiAgICB9LFxuICAgIG5vdGlmeSgpIHtcbiAgICAgIGRlZmF1bHROb29wQmF0Y2goKCkgPT4ge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcbiAgICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKTtcbiAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0KCkge1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gW107XG4gICAgICBsZXQgbGlzdGVuZXIgPSBmaXJzdDtcbiAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgfSxcbiAgICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgIGxldCBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBsYXN0ID0ge1xuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgcHJldjogbGFzdFxuICAgICAgfTtcbiAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3QgPSBsaXN0ZW5lcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgZmlyc3QgPT09IG51bGwpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGxpc3RlbmVyLm5leHQpIHtcbiAgICAgICAgICBsaXN0ZW5lci5uZXh0LnByZXYgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3QgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgICAgbGlzdGVuZXIucHJldi5uZXh0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaXJzdCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxudmFyIG51bGxMaXN0ZW5lcnMgPSB7XG4gIG5vdGlmeSgpIHtcbiAgfSxcbiAgZ2V0OiAoKSA9PiBbXVxufTtcbmZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSwgcGFyZW50U3ViKSB7XG4gIGxldCB1bnN1YnNjcmliZTtcbiAgbGV0IGxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gIGxldCBzdWJzY3JpcHRpb25zQW1vdW50ID0gMDtcbiAgbGV0IHNlbGZTdWJzY3JpYmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGFkZE5lc3RlZFN1YihsaXN0ZW5lcikge1xuICAgIHRyeVN1YnNjcmliZSgpO1xuICAgIGNvbnN0IGNsZWFudXBMaXN0ZW5lciA9IGxpc3RlbmVycy5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghcmVtb3ZlZCkge1xuICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgY2xlYW51cExpc3RlbmVyKCk7XG4gICAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBub3RpZnlOZXN0ZWRTdWJzKCkge1xuICAgIGxpc3RlbmVycy5ub3RpZnkoKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VXcmFwcGVyKCkge1xuICAgIGlmIChzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBzZWxmU3Vic2NyaWJlZDtcbiAgfVxuICBmdW5jdGlvbiB0cnlTdWJzY3JpYmUoKSB7XG4gICAgc3Vic2NyaXB0aW9uc0Ftb3VudCsrO1xuICAgIGlmICghdW5zdWJzY3JpYmUpIHtcbiAgICAgIHVuc3Vic2NyaWJlID0gcGFyZW50U3ViID8gcGFyZW50U3ViLmFkZE5lc3RlZFN1YihoYW5kbGVDaGFuZ2VXcmFwcGVyKSA6IHN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2VXcmFwcGVyKTtcbiAgICAgIGxpc3RlbmVycyA9IGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpIHtcbiAgICBzdWJzY3JpcHRpb25zQW1vdW50LS07XG4gICAgaWYgKHVuc3Vic2NyaWJlICYmIHN1YnNjcmlwdGlvbnNBbW91bnQgPT09IDApIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICB1bnN1YnNjcmliZSA9IHZvaWQgMDtcbiAgICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgbGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5U3Vic2NyaWJlU2VsZigpIHtcbiAgICBpZiAoIXNlbGZTdWJzY3JpYmVkKSB7XG4gICAgICBzZWxmU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICB0cnlTdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmVTZWxmKCkge1xuICAgIGlmIChzZWxmU3Vic2NyaWJlZCkge1xuICAgICAgc2VsZlN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIHRyeVVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHtcbiAgICBhZGROZXN0ZWRTdWIsXG4gICAgbm90aWZ5TmVzdGVkU3VicyxcbiAgICBoYW5kbGVDaGFuZ2VXcmFwcGVyLFxuICAgIGlzU3Vic2NyaWJlZCxcbiAgICB0cnlTdWJzY3JpYmU6IHRyeVN1YnNjcmliZVNlbGYsXG4gICAgdHJ5VW5zdWJzY3JpYmU6IHRyeVVuc3Vic2NyaWJlU2VsZixcbiAgICBnZXRMaXN0ZW5lcnM6ICgpID0+IGxpc3RlbmVyc1xuICB9O1xuICByZXR1cm4gc3Vic2NyaXB0aW9uO1xufVxuXG4vLyBzcmMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC50c1xudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpO1xudmFyIGlzUmVhY3ROYXRpdmUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSBcIlJlYWN0TmF0aXZlXCI7XG52YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IGNhblVzZURPTSB8fCBpc1JlYWN0TmF0aXZlID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0O1xuXG4vLyBzcmMvdXRpbHMvc2hhbGxvd0VxdWFsLnRzXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKVxuICAgIHJldHVybiB0cnVlO1xuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gXCJvYmplY3RcIiB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIHNyYy91dGlscy9ob2lzdFN0YXRpY3MudHNcbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICQkdHlwZW9mOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICQkdHlwZW9mOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge1xuICBbRm9yd2FyZFJlZl06IEZPUldBUkRfUkVGX1NUQVRJQ1MsXG4gIFtNZW1vXTogTUVNT19TVEFUSUNTXG59O1xuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgaWYgKGlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfVxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFtcIiQkdHlwZW9mXCJdXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgY29uc3QgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIGNvbnN0IHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxuLy8gc3JjL2NvbXBvbmVudHMvY29ubmVjdC50c3hcbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IG5vdEluaXRpYWxpemVkO1xudmFyIGluaXRpYWxpemVDb25uZWN0ID0gKGZuKSA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gZm47XG59O1xudmFyIE5PX1NVQlNDUklQVElPTl9BUlJBWSA9IFtudWxsLCBudWxsXTtcbnZhciBzdHJpbmdpZnlDb21wb25lbnQgPSAoQ29tcCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShDb21wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhDb21wKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhlZmZlY3RGdW5jLCBlZmZlY3RBcmdzLCBkZXBlbmRlbmNpZXMpIHtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiBlZmZlY3RGdW5jKC4uLmVmZmVjdEFyZ3MpLCBkZXBlbmRlbmNpZXMpO1xufVxuZnVuY3Rpb24gY2FwdHVyZVdyYXBwZXJQcm9wcyhsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIHdyYXBwZXJQcm9wcywgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3Vicykge1xuICBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQgPSB3cmFwcGVyUHJvcHM7XG4gIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCkge1xuICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG51bGw7XG4gICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmVVcGRhdGVzKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcywgc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yLCBsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIGlzTW91bnRlZCwgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3VicywgYWRkaXRpb25hbFN1YnNjcmliZUxpc3RlbmVyKSB7XG4gIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgfTtcbiAgbGV0IGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG4gIGxldCBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICBjb25zdCBjaGVja0ZvclVwZGF0ZXMgPSAoKSA9PiB7XG4gICAgaWYgKGRpZFVuc3Vic2NyaWJlIHx8ICFpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYXRlc3RTdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBsZXQgbmV3Q2hpbGRQcm9wcywgZXJyb3I7XG4gICAgdHJ5IHtcbiAgICAgIG5ld0NoaWxkUHJvcHMgPSBjaGlsZFByb3BzU2VsZWN0b3IoXG4gICAgICAgIGxhdGVzdFN0b3JlU3RhdGUsXG4gICAgICAgIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvciA9IGU7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBlO1xuICAgIH1cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICAgIH1cbiAgICBpZiAobmV3Q2hpbGRQcm9wcyA9PT0gbGFzdENoaWxkUHJvcHMuY3VycmVudCkge1xuICAgICAgaWYgKCFyZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50KSB7XG4gICAgICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IHRydWU7XG4gICAgICBhZGRpdGlvbmFsU3Vic2NyaWJlTGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG4gIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gY2hlY2tGb3JVcGRhdGVzO1xuICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gIGNoZWNrRm9yVXBkYXRlcygpO1xuICBjb25zdCB1bnN1YnNjcmliZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcbiAgICBpZiAobGFzdFRocm93bkVycm9yKSB7XG4gICAgICB0aHJvdyBsYXN0VGhyb3duRXJyb3I7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdW5zdWJzY3JpYmVXcmFwcGVyO1xufVxuZnVuY3Rpb24gc3RyaWN0RXF1YWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uID0gZmFsc2U7XG5mdW5jdGlvbiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCB7XG4gIC8vIFRoZSBgcHVyZWAgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQsIHNvIFRTIGRvZXNuJ3QgbGlrZSB1cyBkZXN0cnVjdHVyaW5nIHRoaXMgdG8gY2hlY2sgaXRzIGV4aXN0ZW5jZS5cbiAgLy8gQHRzLWlnbm9yZVxuICBwdXJlLFxuICBhcmVTdGF0ZXNFcXVhbCA9IHN0cmljdEVxdWFsLFxuICBhcmVPd25Qcm9wc0VxdWFsID0gc2hhbGxvd0VxdWFsLFxuICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIGFyZU1lcmdlZFByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIC8vIHVzZSBSZWFjdCdzIGZvcndhcmRSZWYgdG8gZXhwb3NlIGEgcmVmIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudFxuICBmb3J3YXJkUmVmID0gZmFsc2UsXG4gIC8vIHRoZSBjb250ZXh0IGNvbnN1bWVyIHRvIHVzZVxuICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHRcbn0gPSB7fSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHB1cmUgIT09IHZvaWQgMCAmJiAhaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbikge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbiA9IHRydWU7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICAnVGhlIGBwdXJlYCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZC4gYGNvbm5lY3RgIGlzIG5vdyBhbHdheXMgYSBcInB1cmUvbWVtb2l6ZWRcIiBjb21wb25lbnQnXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjb25zdCBDb250ZXh0ID0gY29udGV4dDtcbiAgY29uc3QgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKTtcbiAgY29uc3QgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzKTtcbiAgY29uc3QgaW5pdE1lcmdlUHJvcHMgPSBtZXJnZVByb3BzRmFjdG9yeShtZXJnZVByb3BzKTtcbiAgY29uc3Qgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzID0gQm9vbGVhbihtYXBTdGF0ZVRvUHJvcHMpO1xuICBjb25zdCB3cmFwV2l0aENvbm5lY3QgPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSAvKiBAX19QVVJFX18gKi8gaXNWYWxpZEVsZW1lbnRUeXBlKFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgaWYgKCFpc1ZhbGlkKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFlvdSBtdXN0IHBhc3MgYSBjb21wb25lbnQgdG8gdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGNvbm5lY3QuIEluc3RlYWQgcmVjZWl2ZWQgJHtzdHJpbmdpZnlDb21wb25lbnQoXG4gICAgICAgICAgICBXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgKX1gXG4gICAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID0gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgXCJDb21wb25lbnRcIjtcbiAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGBDb25uZWN0KCR7d3JhcHBlZENvbXBvbmVudE5hbWV9KWA7XG4gICAgY29uc3Qgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IHtcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIGRpc3BsYXlOYW1lLFxuICAgICAgd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50LFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wcyxcbiAgICAgIGFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIENvbm5lY3RGdW5jdGlvbihwcm9wcykge1xuICAgICAgY29uc3QgW3Byb3BzQ29udGV4dCwgcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgd3JhcHBlclByb3BzXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYyLCAuLi53cmFwcGVyUHJvcHMyIH0gPSBwcm9wcztcbiAgICAgICAgcmV0dXJuIFtwcm9wcy5jb250ZXh0LCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmMiwgd3JhcHBlclByb3BzMl07XG4gICAgICB9LCBbcHJvcHNdKTtcbiAgICAgIGNvbnN0IENvbnRleHRUb1VzZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBsZXQgUmVzdWx0Q29udGV4dCA9IENvbnRleHQ7XG4gICAgICAgIGlmIChwcm9wc0NvbnRleHQ/LkNvbnN1bWVyKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IC8qIEBfX1BVUkVfXyAqLyBpc0NvbnRleHRDb25zdW1lcihcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wc0NvbnRleHQuQ29uc3VtZXIsIG51bGwpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBcIllvdSBtdXN0IHBhc3MgYSB2YWxpZCBSZWFjdCBjb250ZXh0IGNvbnN1bWVyIGFzIGBwcm9wcy5jb250ZXh0YFwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZXN1bHRDb250ZXh0ID0gcHJvcHNDb250ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVzdWx0Q29udGV4dDtcbiAgICAgIH0sIFtwcm9wc0NvbnRleHQsIENvbnRleHRdKTtcbiAgICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dFRvVXNlKTtcbiAgICAgIGNvbnN0IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA9IEJvb2xlYW4ocHJvcHMuc3RvcmUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZ2V0U3RhdGUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgY29uc3QgZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPSBCb29sZWFuKGNvbnRleHRWYWx1ZSkgJiYgQm9vbGVhbihjb250ZXh0VmFsdWUuc3RvcmUpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhZGlkU3RvcmVDb21lRnJvbVByb3BzICYmICFkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENvdWxkIG5vdCBmaW5kIFwic3RvcmVcIiBpbiB0aGUgY29udGV4dCBvZiBcIiR7ZGlzcGxheU5hbWV9XCIuIEVpdGhlciB3cmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhIDxQcm92aWRlcj4sIG9yIHBhc3MgYSBjdXN0b20gUmVhY3QgY29udGV4dCBwcm92aWRlciB0byA8UHJvdmlkZXI+IGFuZCB0aGUgY29ycmVzcG9uZGluZyBSZWFjdCBjb250ZXh0IGNvbnN1bWVyIHRvICR7ZGlzcGxheU5hbWV9IGluIGNvbm5lY3Qgb3B0aW9ucy5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBzdG9yZSA9IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHByb3BzLnN0b3JlIDogY29udGV4dFZhbHVlLnN0b3JlO1xuICAgICAgY29uc3QgZ2V0U2VydmVyU3RhdGUgPSBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA/IGNvbnRleHRWYWx1ZS5nZXRTZXJ2ZXJTdGF0ZSA6IHN0b3JlLmdldFN0YXRlO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc1NlbGVjdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiBmaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KHN0b3JlLmRpc3BhdGNoLCBzZWxlY3RvckZhY3RvcnlPcHRpb25zKTtcbiAgICAgIH0sIFtzdG9yZV0pO1xuICAgICAgY29uc3QgW3N1YnNjcmlwdGlvbiwgbm90aWZ5TmVzdGVkU3Vic10gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpXG4gICAgICAgICAgcmV0dXJuIE5PX1NVQlNDUklQVElPTl9BUlJBWTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uMiA9IGNyZWF0ZVN1YnNjcmlwdGlvbihcbiAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyB2b2lkIDAgOiBjb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5vdGlmeU5lc3RlZFN1YnMyID0gc3Vic2NyaXB0aW9uMi5ub3RpZnlOZXN0ZWRTdWJzLmJpbmQoc3Vic2NyaXB0aW9uMik7XG4gICAgICAgIHJldHVybiBbc3Vic2NyaXB0aW9uMiwgbm90aWZ5TmVzdGVkU3ViczJdO1xuICAgICAgfSwgW3N0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZV0pO1xuICAgICAgY29uc3Qgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoZGlkU3RvcmVDb21lRnJvbVByb3BzKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmNvbnRleHRWYWx1ZSxcbiAgICAgICAgICBzdWJzY3JpcHRpb25cbiAgICAgICAgfTtcbiAgICAgIH0sIFtkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZSwgc3Vic2NyaXB0aW9uXSk7XG4gICAgICBjb25zdCBsYXN0Q2hpbGRQcm9wcyA9IFJlYWN0LnVzZVJlZih2b2lkIDApO1xuICAgICAgY29uc3QgbGFzdFdyYXBwZXJQcm9wcyA9IFJlYWN0LnVzZVJlZih3cmFwcGVyUHJvcHMpO1xuICAgICAgY29uc3QgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSA9IFJlYWN0LnVzZVJlZih2b2lkIDApO1xuICAgICAgY29uc3QgcmVuZGVySXNTY2hlZHVsZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgICAgY29uc3QgaXNNb3VudGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICAgIGNvbnN0IGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IgPSBSZWFjdC51c2VSZWYoXG4gICAgICAgIHZvaWQgMFxuICAgICAgKTtcbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFtdKTtcbiAgICAgIGNvbnN0IGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ICYmIHdyYXBwZXJQcm9wcyA9PT0gbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc1NlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHdyYXBwZXJQcm9wcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgIH0sIFtzdG9yZSwgd3JhcHBlclByb3BzXSk7XG4gICAgICBjb25zdCBzdWJzY3JpYmVGb3JSZWFjdCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmUgPSAocmVhY3RMaXN0ZW5lcikgPT4ge1xuICAgICAgICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN1YnNjcmliZVVwZGF0ZXMoXG4gICAgICAgICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNoaWxkUHJvcHNTZWxlY3RvcixcbiAgICAgICAgICAgIGxhc3RXcmFwcGVyUHJvcHMsXG4gICAgICAgICAgICBsYXN0Q2hpbGRQcm9wcyxcbiAgICAgICAgICAgIHJlbmRlcklzU2NoZWR1bGVkLFxuICAgICAgICAgICAgaXNNb3VudGVkLFxuICAgICAgICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSxcbiAgICAgICAgICAgIG5vdGlmeU5lc3RlZFN1YnMsXG4gICAgICAgICAgICByZWFjdExpc3RlbmVyXG4gICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZTtcbiAgICAgIH0sIFtzdWJzY3JpcHRpb25dKTtcbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhjYXB0dXJlV3JhcHBlclByb3BzLCBbXG4gICAgICAgIGxhc3RXcmFwcGVyUHJvcHMsXG4gICAgICAgIGxhc3RDaGlsZFByb3BzLFxuICAgICAgICByZW5kZXJJc1NjaGVkdWxlZCxcbiAgICAgICAgd3JhcHBlclByb3BzLFxuICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLFxuICAgICAgICBub3RpZnlOZXN0ZWRTdWJzXG4gICAgICBdKTtcbiAgICAgIGxldCBhY3R1YWxDaGlsZFByb3BzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYWN0dWFsQ2hpbGRQcm9wcyA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKFxuICAgICAgICAgIC8vIFRPRE8gV2UncmUgcGFzc2luZyB0aHJvdWdoIGEgYmlnIHdyYXBwZXIgdGhhdCBkb2VzIGEgYnVuY2ggb2YgZXh0cmEgc2lkZSBlZmZlY3RzIGJlc2lkZXMgc3Vic2NyaWJpbmdcbiAgICAgICAgICBzdWJzY3JpYmVGb3JSZWFjdCxcbiAgICAgICAgICAvLyBUT0RPIFRoaXMgaXMgaW5jcmVkaWJseSBoYWNreS4gV2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgdGhlIHN0b3JlIHVwZGF0ZSBhbmQgY2FsY3VsYXRlZCBuZXcgY2hpbGQgcHJvcHMsXG4gICAgICAgICAgLy8gVE9ETyBhbmQgd2UncmUganVzdCBwYXNzaW5nIHRoYXQgdGhyb3VnaCBzbyBpdCB0cmlnZ2VycyBhIHJlLXJlbmRlciBmb3IgdXMgcmF0aGVyIHRoYW4gcmVseWluZyBvbiBgdVNFU2AuXG4gICAgICAgICAgYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yLFxuICAgICAgICAgIGdldFNlcnZlclN0YXRlID8gKCkgPT4gY2hpbGRQcm9wc1NlbGVjdG9yKGdldFNlcnZlclN0YXRlKCksIHdyYXBwZXJQcm9wcykgOiBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3JcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAobGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50KSB7XG4gICAgICAgICAgO1xuICAgICAgICAgIGVyci5tZXNzYWdlICs9IGBcblRoZSBlcnJvciBtYXkgYmUgY29ycmVsYXRlZCB3aXRoIHRoaXMgcHJldmlvdXMgZXJyb3I6XG4ke2xhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudC5zdGFja31cblxuYDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gdm9pZCAwO1xuICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSB2b2lkIDA7XG4gICAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBhY3R1YWxDaGlsZFByb3BzO1xuICAgICAgfSk7XG4gICAgICBjb25zdCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBXcmFwcGVkQ29tcG9uZW50LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5hY3R1YWxDaGlsZFByb3BzLFxuICAgICAgICAgICAgICByZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9LCBbcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgV3JhcHBlZENvbXBvbmVudCwgYWN0dWFsQ2hpbGRQcm9wc10pO1xuICAgICAgY29uc3QgcmVuZGVyZWRDaGlsZCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHRUb1VzZS5Qcm92aWRlciwgeyB2YWx1ZTogb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZSB9LCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICB9LCBbQ29udGV4dFRvVXNlLCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQsIG92ZXJyaWRkZW5Db250ZXh0VmFsdWVdKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkO1xuICAgIH1cbiAgICBjb25zdCBfQ29ubmVjdCA9IFJlYWN0Lm1lbW8oQ29ubmVjdEZ1bmN0aW9uKTtcbiAgICBjb25zdCBDb25uZWN0ID0gX0Nvbm5lY3Q7XG4gICAgQ29ubmVjdC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICBDb25uZWN0LmRpc3BsYXlOYW1lID0gQ29ubmVjdEZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgaWYgKGZvcndhcmRSZWYpIHtcbiAgICAgIGNvbnN0IF9mb3J3YXJkZWQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAgICAgICBmdW5jdGlvbiBmb3J3YXJkQ29ubmVjdFJlZihwcm9wcywgcmVmKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbm5lY3QsIHsgLi4ucHJvcHMsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlZiB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGZvcndhcmRlZCA9IF9mb3J3YXJkZWQ7XG4gICAgICBmb3J3YXJkZWQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgIGZvcndhcmRlZC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaG9pc3ROb25SZWFjdFN0YXRpY3MoZm9yd2FyZGVkLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBob2lzdE5vblJlYWN0U3RhdGljcyhDb25uZWN0LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcbiAgcmV0dXJuIHdyYXBXaXRoQ29ubmVjdDtcbn1cbnZhciBjb25uZWN0X2RlZmF1bHQgPSBjb25uZWN0O1xuXG4vLyBzcmMvY29tcG9uZW50cy9Qcm92aWRlci50c3hcbmZ1bmN0aW9uIFByb3ZpZGVyKHtcbiAgc3RvcmUsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICBzZXJ2ZXJTdGF0ZSxcbiAgc3RhYmlsaXR5Q2hlY2sgPSBcIm9uY2VcIixcbiAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrID0gXCJvbmNlXCJcbn0pIHtcbiAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZTogc2VydmVyU3RhdGUgPyAoKSA9PiBzZXJ2ZXJTdGF0ZSA6IHZvaWQgMCxcbiAgICAgIHN0YWJpbGl0eUNoZWNrLFxuICAgICAgaWRlbnRpdHlGdW5jdGlvbkNoZWNrXG4gICAgfTtcbiAgfSwgW3N0b3JlLCBzZXJ2ZXJTdGF0ZSwgc3RhYmlsaXR5Q2hlY2ssIGlkZW50aXR5RnVuY3Rpb25DaGVja10pO1xuICBjb25zdCBwcmV2aW91c1N0YXRlID0gUmVhY3QudXNlTWVtbygoKSA9PiBzdG9yZS5nZXRTdGF0ZSgpLCBbc3RvcmVdKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBzdWJzY3JpcHRpb24gfSA9IGNvbnRleHRWYWx1ZTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgICBpZiAocHJldmlvdXNTdGF0ZSAhPT0gc3RvcmUuZ2V0U3RhdGUoKSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSB2b2lkIDA7XG4gICAgfTtcbiAgfSwgW2NvbnRleHRWYWx1ZSwgcHJldmlvdXNTdGF0ZV0pO1xuICBjb25zdCBDb250ZXh0ID0gY29udGV4dCB8fCBSZWFjdFJlZHV4Q29udGV4dDtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbnRleHRWYWx1ZSB9LCBjaGlsZHJlbik7XG59XG52YXIgUHJvdmlkZXJfZGVmYXVsdCA9IFByb3ZpZGVyO1xuXG4vLyBzcmMvaG9va3MvdXNlU3RvcmUudHNcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlUmVkdXhDb250ZXh0MiA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlUmVkdXhDb250ZXh0IDogKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjcmVhdGVSZWR1eENvbnRleHRIb29rKGNvbnRleHQpXG4gICk7XG4gIGNvbnN0IHVzZVN0b3JlMiA9ICgpID0+IHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB1c2VSZWR1eENvbnRleHQyKCk7XG4gICAgcmV0dXJuIHN0b3JlO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZVN0b3JlMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlU3RvcmUyXG4gIH0pO1xuICByZXR1cm4gdXNlU3RvcmUyO1xufVxudmFyIHVzZVN0b3JlID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVN0b3JlSG9vaygpO1xuXG4vLyBzcmMvaG9va3MvdXNlRGlzcGF0Y2gudHNcbmZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlU3RvcmUyID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VTdG9yZSA6IGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0KTtcbiAgY29uc3QgdXNlRGlzcGF0Y2gyID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUyKCk7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHVzZURpc3BhdGNoMiwge1xuICAgIHdpdGhUeXBlczogKCkgPT4gdXNlRGlzcGF0Y2gyXG4gIH0pO1xuICByZXR1cm4gdXNlRGlzcGF0Y2gyO1xufVxudmFyIHVzZURpc3BhdGNoID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZURpc3BhdGNoSG9vaygpO1xuXG4vLyBzcmMvZXhwb3J0cy50c1xudmFyIGJhdGNoID0gZGVmYXVsdE5vb3BCYXRjaDtcblxuLy8gc3JjL2luZGV4LnRzXG5pbml0aWFsaXplVXNlU2VsZWN0b3IodXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IyKTtcbmluaXRpYWxpemVDb25uZWN0KFJlYWN0Mi51c2VTeW5jRXh0ZXJuYWxTdG9yZSk7XG5leHBvcnQge1xuICBQcm92aWRlcl9kZWZhdWx0IGFzIFByb3ZpZGVyLFxuICBSZWFjdFJlZHV4Q29udGV4dCxcbiAgYmF0Y2gsXG4gIGNvbm5lY3RfZGVmYXVsdCBhcyBjb25uZWN0LFxuICBjcmVhdGVEaXNwYXRjaEhvb2ssXG4gIGNyZWF0ZVNlbGVjdG9ySG9vayxcbiAgY3JlYXRlU3RvcmVIb29rLFxuICBzaGFsbG93RXF1YWwsXG4gIHVzZURpc3BhdGNoLFxuICB1c2VTZWxlY3RvcixcbiAgdXNlU3RvcmVcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1yZWR1eC5tanMubWFwIiwiXCJ1c2UgY2xpZW50XCI7XG5mdW5jdGlvbiBNdCh0KXtpZighdHx8dHlwZW9mIGRvY3VtZW50PT1cInVuZGVmaW5lZFwiKXJldHVybjtsZXQgbz1kb2N1bWVudC5oZWFkfHxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0sZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7ZS50eXBlPVwidGV4dC9jc3NcIixvLmZpcnN0Q2hpbGQ/by5pbnNlcnRCZWZvcmUoZSxvLmZpcnN0Q2hpbGQpOm8uYXBwZW5kQ2hpbGQoZSksZS5zdHlsZVNoZWV0P2Uuc3R5bGVTaGVldC5jc3NUZXh0PXQ6ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KSl9TXQoYDpyb290ey0tdG9hc3RpZnktY29sb3ItbGlnaHQ6ICNmZmY7LS10b2FzdGlmeS1jb2xvci1kYXJrOiAjMTIxMjEyOy0tdG9hc3RpZnktY29sb3ItaW5mbzogIzM0OThkYjstLXRvYXN0aWZ5LWNvbG9yLXN1Y2Nlc3M6ICMwN2JjMGM7LS10b2FzdGlmeS1jb2xvci13YXJuaW5nOiAjZjFjNDBmOy0tdG9hc3RpZnktY29sb3ItZXJyb3I6IGhzbCg2LCA3OCUsIDU3JSk7LS10b2FzdGlmeS1jb2xvci10cmFuc3BhcmVudDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNyk7LS10b2FzdGlmeS1pY29uLWNvbG9yLWluZm86IHZhcigtLXRvYXN0aWZ5LWNvbG9yLWluZm8pOy0tdG9hc3RpZnktaWNvbi1jb2xvci1zdWNjZXNzOiB2YXIoLS10b2FzdGlmeS1jb2xvci1zdWNjZXNzKTstLXRvYXN0aWZ5LWljb24tY29sb3Itd2FybmluZzogdmFyKC0tdG9hc3RpZnktY29sb3Itd2FybmluZyk7LS10b2FzdGlmeS1pY29uLWNvbG9yLWVycm9yOiB2YXIoLS10b2FzdGlmeS1jb2xvci1lcnJvcik7LS10b2FzdGlmeS1jb250YWluZXItd2lkdGg6IGZpdC1jb250ZW50Oy0tdG9hc3RpZnktdG9hc3Qtd2lkdGg6IDMyMHB4Oy0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0OiAxNnB4Oy0tdG9hc3RpZnktdG9hc3QtdG9wOiBtYXgodmFyKC0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0KSwgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTstLXRvYXN0aWZ5LXRvYXN0LXJpZ2h0OiBtYXgodmFyKC0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0KSwgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpOy0tdG9hc3RpZnktdG9hc3QtbGVmdDogbWF4KHZhcigtLXRvYXN0aWZ5LXRvYXN0LW9mZnNldCksIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkpOy0tdG9hc3RpZnktdG9hc3QtYm90dG9tOiBtYXgodmFyKC0tdG9hc3RpZnktdG9hc3Qtb2Zmc2V0KSwgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTstLXRvYXN0aWZ5LXRvYXN0LWJhY2tncm91bmQ6ICNmZmY7LS10b2FzdGlmeS10b2FzdC1wYWRkaW5nOiAxNHB4Oy0tdG9hc3RpZnktdG9hc3QtbWluLWhlaWdodDogNjRweDstLXRvYXN0aWZ5LXRvYXN0LW1heC1oZWlnaHQ6IDgwMHB4Oy0tdG9hc3RpZnktdG9hc3QtYmQtcmFkaXVzOiA2cHg7LS10b2FzdGlmeS10b2FzdC1zaGFkb3c6IDBweCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIC4xKTstLXRvYXN0aWZ5LWZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOy0tdG9hc3RpZnktei1pbmRleDogOTk5OTstLXRvYXN0aWZ5LXRleHQtY29sb3ItbGlnaHQ6ICM3NTc1NzU7LS10b2FzdGlmeS10ZXh0LWNvbG9yLWRhcms6ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLWluZm86ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLXN1Y2Nlc3M6ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLXdhcm5pbmc6ICNmZmY7LS10b2FzdGlmeS10ZXh0LWNvbG9yLWVycm9yOiAjZmZmOy0tdG9hc3RpZnktc3Bpbm5lci1jb2xvcjogIzYxNjE2MTstLXRvYXN0aWZ5LXNwaW5uZXItY29sb3ItZW1wdHktYXJlYTogI2UwZTBlMDstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWxpZ2h0OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0Y2Q5NjQsICM1YWM4ZmEsICMwMDdhZmYsICMzNGFhZGMsICM1ODU2ZDYsICNmZjJkNTUpOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtZGFyazogI2JiODZmYzstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWluZm86IHZhcigtLXRvYXN0aWZ5LWNvbG9yLWluZm8pOy0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3Mtc3VjY2VzczogdmFyKC0tdG9hc3RpZnktY29sb3Itc3VjY2Vzcyk7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy13YXJuaW5nOiB2YXIoLS10b2FzdGlmeS1jb2xvci13YXJuaW5nKTstLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWVycm9yOiB2YXIoLS10b2FzdGlmeS1jb2xvci1lcnJvcik7LS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1iZ286IC4yfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVye3otaW5kZXg6dmFyKC0tdG9hc3RpZnktei1pbmRleCk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLHZhcigtLXRvYXN0aWZ5LXotaW5kZXgpKTtwb3NpdGlvbjpmaXhlZDt3aWR0aDp2YXIoLS10b2FzdGlmeS1jb250YWluZXItd2lkdGgpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjojZmZmO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1sZWZ0e3RvcDp2YXIoLS10b2FzdGlmeS10b2FzdC10b3ApO2xlZnQ6dmFyKC0tdG9hc3RpZnktdG9hc3QtbGVmdCl9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1jZW50ZXJ7dG9wOnZhcigtLXRvYXN0aWZ5LXRvYXN0LXRvcCk7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKTthbGlnbi1pdGVtczpjZW50ZXJ9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1yaWdodHt0b3A6dmFyKC0tdG9hc3RpZnktdG9hc3QtdG9wKTtyaWdodDp2YXIoLS10b2FzdGlmeS10b2FzdC1yaWdodCk7YWxpZ24taXRlbXM6ZW5kfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tbGVmdHtib3R0b206dmFyKC0tdG9hc3RpZnktdG9hc3QtYm90dG9tKTtsZWZ0OnZhcigtLXRvYXN0aWZ5LXRvYXN0LWxlZnQpfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tY2VudGVye2JvdHRvbTp2YXIoLS10b2FzdGlmeS10b2FzdC1ib3R0b20pO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7YWxpZ24taXRlbXM6Y2VudGVyfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tcmlnaHR7Ym90dG9tOnZhcigtLXRvYXN0aWZ5LXRvYXN0LWJvdHRvbSk7cmlnaHQ6dmFyKC0tdG9hc3RpZnktdG9hc3QtcmlnaHQpO2FsaWduLWl0ZW1zOmVuZH0uVG9hc3RpZnlfX3RvYXN0ey0teTogMDtwb3NpdGlvbjpyZWxhdGl2ZTt0b3VjaC1hY3Rpb246bm9uZTt3aWR0aDp2YXIoLS10b2FzdGlmeS10b2FzdC13aWR0aCk7bWluLWhlaWdodDp2YXIoLS10b2FzdGlmeS10b2FzdC1taW4taGVpZ2h0KTtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luLWJvdHRvbToxcmVtO3BhZGRpbmc6dmFyKC0tdG9hc3RpZnktdG9hc3QtcGFkZGluZyk7Ym9yZGVyLXJhZGl1czp2YXIoLS10b2FzdGlmeS10b2FzdC1iZC1yYWRpdXMpO2JveC1zaGFkb3c6dmFyKC0tdG9hc3RpZnktdG9hc3Qtc2hhZG93KTttYXgtaGVpZ2h0OnZhcigtLXRvYXN0aWZ5LXRvYXN0LW1heC1oZWlnaHQpO2ZvbnQtZmFtaWx5OnZhcigtLXRvYXN0aWZ5LWZvbnQtZmFtaWx5KTt6LWluZGV4OjA7ZGlzcGxheTpmbGV4O2ZsZXg6MSBhdXRvO2FsaWduLWl0ZW1zOmNlbnRlcjt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXJ7d2lkdGg6MTAwdnc7bGVmdDplbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO21hcmdpbjowfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS10b3AtbGVmdCwuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLWNlbnRlciwuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLXJpZ2h0e3RvcDplbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tYm90dG9tLWxlZnQsLlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1jZW50ZXIsLlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1yaWdodHtib3R0b206ZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXJ0bHtyaWdodDplbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtsZWZ0OmluaXRpYWx9LlRvYXN0aWZ5X190b2FzdHstLXRvYXN0aWZ5LXRvYXN0LXdpZHRoOiAxMDAlO21hcmdpbi1ib3R0b206MDtib3JkZXItcmFkaXVzOjB9fS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyW2RhdGEtc3RhY2tlZD10cnVlXXt3aWR0aDp2YXIoLS10b2FzdGlmeS10b2FzdC13aWR0aCl9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApIHNjYWxlKHZhcigtLXMpKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3N9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLWNvbGxhcHNlZF0gLlRvYXN0aWZ5X190b2FzdC1ib2R5LC5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1jb2xsYXBzZWRdIC5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9ue3RyYW5zaXRpb246b3BhY2l0eSAuMXN9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLWNvbGxhcHNlZD1mYWxzZV17b3ZlcmZsb3c6dmlzaWJsZX0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtY29sbGFwc2VkPXRydWVdOm5vdCg6bGFzdC1jaGlsZCk+KntvcGFjaXR5OjB9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDphZnRlcntjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OmNhbGModmFyKC0tZykgKiAxcHgpO2JvdHRvbToxMDAlfS5Ub2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRbZGF0YS1wb3M9dG9wXXt0b3A6MH0uVG9hc3RpZnlfX3RvYXN0LS1zdGFja2VkW2RhdGEtcG9zPWJvdF17Ym90dG9tOjB9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLXBvcz1ib3RdLlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDpiZWZvcmV7dHJhbnNmb3JtLW9yaWdpbjp0b3B9LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZFtkYXRhLXBvcz10b3BdLlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDpiZWZvcmV7dHJhbnNmb3JtLW9yaWdpbjpib3R0b219LlRvYXN0aWZ5X190b2FzdC0tc3RhY2tlZDpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2hlaWdodDoxMDAlO3RyYW5zZm9ybTpzY2FsZVkoMyk7ei1pbmRleDotMX0uVG9hc3RpZnlfX3RvYXN0LS1ydGx7ZGlyZWN0aW9uOnJ0bH0uVG9hc3RpZnlfX3RvYXN0LS1jbG9zZS1vbi1jbGlja3tjdXJzb3I6cG9pbnRlcn0uVG9hc3RpZnlfX3RvYXN0LWljb257bWFyZ2luLWlubGluZS1lbmQ6MTBweDt3aWR0aDoyMnB4O2ZsZXgtc2hyaW5rOjA7ZGlzcGxheTpmbGV4fS5Ub2FzdGlmeS0tYW5pbWF0ZXthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOi41c30uVG9hc3RpZnktLWFuaW1hdGUtaWNvbnthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOi4zc30uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1kYXJre2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItZGFyayk7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci1kYXJrKX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1saWdodCwuVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0tZGVmYXVsdHtiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLWxpZ2h0KTtjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLWxpZ2h0KX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0taW5mb3tjb2xvcjp2YXIoLS10b2FzdGlmeS10ZXh0LWNvbG9yLWluZm8pO2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItaW5mbyl9LlRvYXN0aWZ5X190b2FzdC10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fdG9hc3QtLXN1Y2Nlc3N7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci1zdWNjZXNzKTtiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXN1Y2Nlc3MpfS5Ub2FzdGlmeV9fdG9hc3QtdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3RvYXN0LS13YXJuaW5ne2NvbG9yOnZhcigtLXRvYXN0aWZ5LXRleHQtY29sb3Itd2FybmluZyk7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci13YXJuaW5nKX0uVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X190b2FzdC0tZXJyb3J7Y29sb3I6dmFyKC0tdG9hc3RpZnktdGV4dC1jb2xvci1lcnJvcik7YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1lcnJvcil9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWxpZ2h0e2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtbGlnaHQpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1kYXJre2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtZGFyayl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWluZm97YmFja2dyb3VuZDp2YXIoLS10b2FzdGlmeS1jb2xvci1wcm9ncmVzcy1pbmZvKX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tc3VjY2Vzc3tiYWNrZ3JvdW5kOnZhcigtLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLXN1Y2Nlc3MpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13YXJuaW5ne2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3Mtd2FybmluZyl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWVycm9ye2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItcHJvZ3Jlc3MtZXJyb3IpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWluZm8sLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItdGhlbWUtLWNvbG9yZWQuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tc3VjY2VzcywuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tY29sb3JlZC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13YXJuaW5nLC5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS1jb2xvcmVkLlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWVycm9ye2JhY2tncm91bmQ6dmFyKC0tdG9hc3RpZnktY29sb3ItdHJhbnNwYXJlbnQpfS5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9ue2NvbG9yOiNmZmY7cG9zaXRpb246YWJzb2x1dGU7dG9wOjZweDtyaWdodDo2cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtvdXRsaW5lOm5vbmU7Ym9yZGVyOm5vbmU7cGFkZGluZzowO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6Ljc7dHJhbnNpdGlvbjouM3MgZWFzZTt6LWluZGV4OjF9LlRvYXN0aWZ5X190b2FzdC0tcnRsIC5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9ue2xlZnQ6NnB4O3JpZ2h0OnVuc2V0fS5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uLS1saWdodHtjb2xvcjojMDAwO29wYWNpdHk6LjN9LlRvYXN0aWZ5X19jbG9zZS1idXR0b24+c3Zne2ZpbGw6Y3VycmVudENvbG9yO2hlaWdodDoxNnB4O3dpZHRoOjE0cHh9LlRvYXN0aWZ5X19jbG9zZS1idXR0b246aG92ZXIsLlRvYXN0aWZ5X19jbG9zZS1idXR0b246Zm9jdXN7b3BhY2l0eToxfUBrZXlmcmFtZXMgVG9hc3RpZnlfX3RyYWNrUHJvZ3Jlc3N7MCV7dHJhbnNmb3JtOnNjYWxlWCgxKX10b3t0cmFuc2Zvcm06c2NhbGVYKDApfX0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjE7b3BhY2l0eTouNzt0cmFuc2Zvcm0tb3JpZ2luOmxlZnR9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWFuaW1hdGVke2FuaW1hdGlvbjpUb2FzdGlmeV9fdHJhY2tQcm9ncmVzcyBsaW5lYXIgMSBmb3J3YXJkc30uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tY29udHJvbGxlZHt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnN9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXJ0bHtyaWdodDowO2xlZnQ6aW5pdGlhbDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6aW5pdGlhbH0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0td3Jwe3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OmhpZGRlbjtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6NXB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tdG9hc3RpZnktdG9hc3QtYmQtcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS10b2FzdGlmeS10b2FzdC1iZC1yYWRpdXMpfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13cnBbZGF0YS1oaWRkZW49dHJ1ZV17b3BhY2l0eTowfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1iZ3tvcGFjaXR5OnZhcigtLXRvYXN0aWZ5LWNvbG9yLXByb2dyZXNzLWJnbyk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uVG9hc3RpZnlfX3NwaW5uZXJ7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjJweCBzb2xpZDtib3JkZXItcmFkaXVzOjEwMCU7Ym9yZGVyLWNvbG9yOnZhcigtLXRvYXN0aWZ5LXNwaW5uZXItY29sb3ItZW1wdHktYXJlYSk7Ym9yZGVyLXJpZ2h0LWNvbG9yOnZhcigtLXRvYXN0aWZ5LXNwaW5uZXItY29sb3IpO2FuaW1hdGlvbjpUb2FzdGlmeV9fc3BpbiAuNjVzIGxpbmVhciBpbmZpbml0ZX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VJblJpZ2h0ezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMDAwcHgsMCwwKX02MCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjVweCwwLDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTVweCwwLDApfXRve3RyYW5zZm9ybTpub25lfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXRSaWdodHsyMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjBweCx2YXIoLS15KSwwKX10b3tvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlSW5MZWZ0ezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMzAwMHB4LDAsMCl9NjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjVweCwwLDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDVweCwwLDApfXRve3RyYW5zZm9ybTpub25lfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXRMZWZ0ezIwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwcHgsdmFyKC0teSksMCl9dG97b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VJblVwezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDMwMDBweCwwKX02MCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMHB4LDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMHB4LDApfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNXB4LDApfXRve3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXRVcHsyMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYyh2YXIoLS15KSAtIDEwcHgpLDApfTQwJSw0NSV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLGNhbGModmFyKC0teSkgKyAyMHB4KSwwKX10b3tvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlSW5Eb3duezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0zMDAwcHgsMCl9NjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyNXB4LDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApfXRve3RyYW5zZm9ybTpub25lfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXREb3duezIwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKHZhcigtLXkpIC0gMTBweCksMCl9NDAlLDQ1JXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYyh2YXIoLS15KSArIDIwcHgpLDApfXRve29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMDAwcHgsMCl9fS5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS10b3AtbGVmdCwuVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tYm90dG9tLWxlZnR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZUluTGVmdH0uVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tdG9wLXJpZ2h0LC5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS1ib3R0b20tcmlnaHR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZUluUmlnaHR9LlRvYXN0aWZ5X19ib3VuY2UtZW50ZXItLXRvcC1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZUluRG93bn0uVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tYm90dG9tLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlSW5VcH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS10b3AtbGVmdCwuVG9hc3RpZnlfX2JvdW5jZS1leGl0LS1ib3R0b20tbGVmdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlT3V0TGVmdH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS10b3AtcmlnaHQsLlRvYXN0aWZ5X19ib3VuY2UtZXhpdC0tYm90dG9tLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VPdXRSaWdodH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS10b3AtY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VPdXRVcH0uVG9hc3RpZnlfX2JvdW5jZS1leGl0LS1ib3R0b20tY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VPdXREb3dufUBrZXlmcmFtZXMgVG9hc3RpZnlfX3pvb21JbnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfTUwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3pvb21PdXR7MCV7b3BhY2l0eToxfTUwJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCkgc2NhbGUzZCguMywuMywuMyl9dG97b3BhY2l0eTowfX0uVG9hc3RpZnlfX3pvb20tZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3pvb21Jbn0uVG9hc3RpZnlfX3pvb20tZXhpdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fem9vbU91dH1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19mbGlwSW57MCV7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47b3BhY2l0eTowfTQwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTIwZGVnKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59NjAle3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7b3BhY2l0eToxfTgwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTVkZWcpfXRve3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2ZsaXBPdXR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCkgcGVyc3BlY3RpdmUoNDAwcHgpfTMwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKSBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpO29wYWNpdHk6MX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKSBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7b3BhY2l0eTowfX0uVG9hc3RpZnlfX2ZsaXAtZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2ZsaXBJbn0uVG9hc3RpZnlfX2ZsaXAtZXhpdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fZmxpcE91dH1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZUluUmlnaHR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDExMCUsMCwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlSW5MZWZ0ezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTEwJSwwLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVJblVwezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDExMCUsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLHZhcigtLXkpLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZUluRG93bnswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTEwJSwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlT3V0UmlnaHR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsdmFyKC0teSksMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDExMCUsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlT3V0TGVmdHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTExMCUsdmFyKC0teSksMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlT3V0RG93bnswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1MDBweCwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVPdXRVcHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCx2YXIoLS15KSwwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNTAwcHgsMCl9fS5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLXRvcC1sZWZ0LC5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLWJvdHRvbS1sZWZ0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZUluTGVmdH0uVG9hc3RpZnlfX3NsaWRlLWVudGVyLS10b3AtcmlnaHQsLlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tYm90dG9tLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZUluUmlnaHR9LlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tdG9wLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVJbkRvd259LlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tYm90dG9tLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVJblVwfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tdG9wLWxlZnQsLlRvYXN0aWZ5X19zbGlkZS1leGl0LS1ib3R0b20tbGVmdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVPdXRMZWZ0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tZHVyYXRpb246LjNzfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tdG9wLXJpZ2h0LC5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tYm90dG9tLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZU91dFJpZ2h0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tZHVyYXRpb246LjNzfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tdG9wLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVPdXRVcDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLWR1cmF0aW9uOi4zc30uVG9hc3RpZnlfX3NsaWRlLWV4aXQtLWJvdHRvbS1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlT3V0RG93bjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLWR1cmF0aW9uOi4zc31Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zcGluezAle3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1cbmApO2ltcG9ydHtpc1ZhbGlkRWxlbWVudCBhcyAkdH1mcm9tXCJyZWFjdFwiO3ZhciBMPXQ9PnR5cGVvZiB0PT1cIm51bWJlclwiJiYhaXNOYU4odCksTj10PT50eXBlb2YgdD09XCJzdHJpbmdcIixQPXQ9PnR5cGVvZiB0PT1cImZ1bmN0aW9uXCIsbXQ9dD0+Tih0KXx8TCh0KSxCPXQ9Pk4odCl8fFAodCk/dDpudWxsLHB0PSh0LG8pPT50PT09ITF8fEwodCkmJnQ+MD90Om8sej10PT4kdCh0KXx8Tih0KXx8UCh0KXx8TCh0KTtpbXBvcnQgdXQse3VzZUVmZmVjdCBhcyBSdCx1c2VMYXlvdXRFZmZlY3QgYXMgQnQsdXNlUmVmIGFzIHp0fWZyb21cInJlYWN0XCI7ZnVuY3Rpb24gWih0LG8sZT0zMDApe2xldHtzY3JvbGxIZWlnaHQ6cixzdHlsZTpzfT10O3JlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e3MubWluSGVpZ2h0PVwiaW5pdGlhbFwiLHMuaGVpZ2h0PXIrXCJweFwiLHMudHJhbnNpdGlvbj1gYWxsICR7ZX1tc2AscmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57cy5oZWlnaHQ9XCIwXCIscy5wYWRkaW5nPVwiMFwiLHMubWFyZ2luPVwiMFwiLHNldFRpbWVvdXQobyxlKX0pfSl9ZnVuY3Rpb24gJCh7ZW50ZXI6dCxleGl0Om8sYXBwZW5kUG9zaXRpb246ZT0hMSxjb2xsYXBzZTpyPSEwLGNvbGxhcHNlRHVyYXRpb246cz0zMDB9KXtyZXR1cm4gZnVuY3Rpb24oe2NoaWxkcmVuOmEscG9zaXRpb246ZCxwcmV2ZW50RXhpdFRyYW5zaXRpb246Yyxkb25lOlQsbm9kZVJlZjpnLGlzSW46dixwbGF5VG9hc3Q6eH0pe2xldCBDPWU/YCR7dH0tLSR7ZH1gOnQsUz1lP2Ake299LS0ke2R9YDpvLEU9enQoMCk7cmV0dXJuIEJ0KCgpPT57bGV0IGY9Zy5jdXJyZW50LHA9Qy5zcGxpdChcIiBcIiksYj1uPT57bi50YXJnZXQ9PT1nLmN1cnJlbnQmJih4KCksZi5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsYiksZi5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uY2FuY2VsXCIsYiksRS5jdXJyZW50PT09MCYmbi50eXBlIT09XCJhbmltYXRpb25jYW5jZWxcIiYmZi5jbGFzc0xpc3QucmVtb3ZlKC4uLnApKX07KCgpPT57Zi5jbGFzc0xpc3QuYWRkKC4uLnApLGYuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLGIpLGYuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmNhbmNlbFwiLGIpfSkoKX0sW10pLFJ0KCgpPT57bGV0IGY9Zy5jdXJyZW50LHA9KCk9PntmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIixwKSxyP1ooZixULHMpOlQoKX07dnx8KGM/cCgpOigoKT0+e0UuY3VycmVudD0xLGYuY2xhc3NOYW1lKz1gICR7U31gLGYuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLHApfSkoKSl9LFt2XSksdXQuY3JlYXRlRWxlbWVudCh1dC5GcmFnbWVudCxudWxsLGEpfX1pbXBvcnR7Y2xvbmVFbGVtZW50IGFzIEZ0LGlzVmFsaWRFbGVtZW50IGFzIFV0fWZyb21cInJlYWN0XCI7ZnVuY3Rpb24gSih0LG8pe3JldHVybntjb250ZW50OnR0KHQuY29udGVudCx0LnByb3BzKSxjb250YWluZXJJZDp0LnByb3BzLmNvbnRhaW5lcklkLGlkOnQucHJvcHMudG9hc3RJZCx0aGVtZTp0LnByb3BzLnRoZW1lLHR5cGU6dC5wcm9wcy50eXBlLGRhdGE6dC5wcm9wcy5kYXRhfHx7fSxpc0xvYWRpbmc6dC5wcm9wcy5pc0xvYWRpbmcsaWNvbjp0LnByb3BzLmljb24scmVhc29uOnQucmVtb3ZhbFJlYXNvbixzdGF0dXM6b319ZnVuY3Rpb24gdHQodCxvLGU9ITEpe3JldHVybiBVdCh0KSYmIU4odC50eXBlKT9GdCh0LHtjbG9zZVRvYXN0Om8uY2xvc2VUb2FzdCx0b2FzdFByb3BzOm8sZGF0YTpvLmRhdGEsaXNQYXVzZWQ6ZX0pOlAodCk/dCh7Y2xvc2VUb2FzdDpvLmNsb3NlVG9hc3QsdG9hc3RQcm9wczpvLGRhdGE6by5kYXRhLGlzUGF1c2VkOmV9KTp0fWltcG9ydCBvdCBmcm9tXCJyZWFjdFwiO2Z1bmN0aW9uIHl0KHtjbG9zZVRvYXN0OnQsdGhlbWU6byxhcmlhTGFiZWw6ZT1cImNsb3NlXCJ9KXtyZXR1cm4gb3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLHtjbGFzc05hbWU6YFRvYXN0aWZ5X19jbG9zZS1idXR0b24gVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbi0tJHtvfWAsdHlwZTpcImJ1dHRvblwiLG9uQ2xpY2s6cj0+e3Iuc3RvcFByb3BhZ2F0aW9uKCksdCghMCl9LFwiYXJpYS1sYWJlbFwiOmV9LG90LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLHZpZXdCb3g6XCIwIDAgMTQgMTZcIn0sb3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZmlsbFJ1bGU6XCJldmVub2RkXCIsZDpcIk03LjcxIDguMjNsMy43NSAzLjc1LTEuNDggMS40OC0zLjc1LTMuNzUtMy43NSAzLjc1TDEgMTEuOThsMy43NS0zLjc1TDEgNC40OCAyLjQ4IDNsMy43NSAzLjc1TDkuOTggM2wxLjQ4IDEuNDgtMy43NSAzLjc1elwifSkpKX1pbXBvcnQgZXQgZnJvbVwicmVhY3RcIjtpbXBvcnQgVHQgZnJvbVwiY2xzeFwiO2Z1bmN0aW9uIGd0KHtkZWxheTp0LGlzUnVubmluZzpvLGNsb3NlVG9hc3Q6ZSx0eXBlOnI9XCJkZWZhdWx0XCIsaGlkZTpzLGNsYXNzTmFtZTpsLGNvbnRyb2xsZWRQcm9ncmVzczphLHByb2dyZXNzOmQscnRsOmMsaXNJbjpULHRoZW1lOmd9KXtsZXQgdj1zfHxhJiZkPT09MCx4PXthbmltYXRpb25EdXJhdGlvbjpgJHt0fW1zYCxhbmltYXRpb25QbGF5U3RhdGU6bz9cInJ1bm5pbmdcIjpcInBhdXNlZFwifTthJiYoeC50cmFuc2Zvcm09YHNjYWxlWCgke2R9KWApO2xldCBDPVR0KFwiVG9hc3RpZnlfX3Byb2dyZXNzLWJhclwiLGE/XCJUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1jb250cm9sbGVkXCI6XCJUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1hbmltYXRlZFwiLGBUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLXRoZW1lLS0ke2d9YCxgVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tJHtyfWAse1tcIlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXJ0bFwiXTpjfSksUz1QKGwpP2woe3J0bDpjLHR5cGU6cixkZWZhdWx0Q2xhc3NOYW1lOkN9KTpUdChDLGwpLEU9e1thJiZkPj0xP1wib25UcmFuc2l0aW9uRW5kXCI6XCJvbkFuaW1hdGlvbkVuZFwiXTphJiZkPDE/bnVsbDooKT0+e1QmJmUoKX19O3JldHVybiBldC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLXdycFwiLFwiZGF0YS1oaWRkZW5cIjp2fSxldC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpgVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tYmcgVG9hc3RpZnlfX3Byb2dyZXNzLWJhci10aGVtZS0tJHtnfSBUb2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS0ke3J9YH0pLGV0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7cm9sZTpcInByb2dyZXNzYmFyXCIsXCJhcmlhLWhpZGRlblwiOnY/XCJ0cnVlXCI6XCJmYWxzZVwiLFwiYXJpYS1sYWJlbFwiOlwibm90aWZpY2F0aW9uIHRpbWVyXCIsY2xhc3NOYW1lOlMsc3R5bGU6eCwuLi5FfSkpfWltcG9ydCBEdCBmcm9tXCJjbHN4XCI7aW1wb3J0IGN0LHt1c2VFZmZlY3QgYXMgeW8sdXNlUmVmIGFzIFRvLHVzZVN0YXRlIGFzIGdvfWZyb21cInJlYWN0XCI7dmFyIFh0PTEsYXQ9KCk9PmAke1h0Kyt9YDtmdW5jdGlvbiBfdCh0LG8sZSl7bGV0IHI9MSxzPTAsbD1bXSxhPVtdLGQ9byxjPW5ldyBNYXAsVD1uZXcgU2V0LGc9aT0+KFQuYWRkKGkpLCgpPT5ULmRlbGV0ZShpKSksdj0oKT0+e2E9QXJyYXkuZnJvbShjLnZhbHVlcygpKSxULmZvckVhY2goaT0+aSgpKX0seD0oe2NvbnRhaW5lcklkOmksdG9hc3RJZDpuLHVwZGF0ZUlkOnV9KT0+e2xldCBoPWk/aSE9PXQ6dCE9PTEsbT1jLmhhcyhuKSYmdT09bnVsbDtyZXR1cm4gaHx8bX0sQz0oaSxuKT0+e2MuZm9yRWFjaCh1PT57dmFyIGg7KG49PW51bGx8fG49PT11LnByb3BzLnRvYXN0SWQpJiYoKGg9dS50b2dnbGUpPT1udWxsfHxoLmNhbGwodSxpKSl9KX0sUz1pPT57dmFyIG4sdTsodT0obj1pLnByb3BzKT09bnVsbD92b2lkIDA6bi5vbkNsb3NlKT09bnVsbHx8dS5jYWxsKG4saS5yZW1vdmFsUmVhc29uKSxpLmlzQWN0aXZlPSExfSxFPWk9PntpZihpPT1udWxsKWMuZm9yRWFjaChTKTtlbHNle2xldCBuPWMuZ2V0KGkpO24mJlMobil9digpfSxmPSgpPT57cy09bC5sZW5ndGgsbD1bXX0scD1pPT57dmFyIG0sXztsZXR7dG9hc3RJZDpuLHVwZGF0ZUlkOnV9PWkucHJvcHMsaD11PT1udWxsO2kuc3RhbGVJZCYmYy5kZWxldGUoaS5zdGFsZUlkKSxpLmlzQWN0aXZlPSEwLGMuc2V0KG4saSksdigpLGUoSihpLGg/XCJhZGRlZFwiOlwidXBkYXRlZFwiKSksaCYmKChfPShtPWkucHJvcHMpLm9uT3Blbik9PW51bGx8fF8uY2FsbChtKSl9O3JldHVybntpZDp0LHByb3BzOmQsb2JzZXJ2ZTpnLHRvZ2dsZTpDLHJlbW92ZVRvYXN0OkUsdG9hc3RzOmMsY2xlYXJRdWV1ZTpmLGJ1aWxkVG9hc3Q6KGksbik9PntpZih4KG4pKXJldHVybjtsZXR7dG9hc3RJZDp1LHVwZGF0ZUlkOmgsZGF0YTptLHN0YWxlSWQ6XyxkZWxheTprfT1uLE09aD09bnVsbDtNJiZzKys7bGV0IEE9ey4uLmQsc3R5bGU6ZC50b2FzdFN0eWxlLGtleTpyKyssLi4uT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKG4pLmZpbHRlcigoW0QsWV0pPT5ZIT1udWxsKSksdG9hc3RJZDp1LHVwZGF0ZUlkOmgsZGF0YTptLGlzSW46ITEsY2xhc3NOYW1lOkIobi5jbGFzc05hbWV8fGQudG9hc3RDbGFzc05hbWUpLHByb2dyZXNzQ2xhc3NOYW1lOkIobi5wcm9ncmVzc0NsYXNzTmFtZXx8ZC5wcm9ncmVzc0NsYXNzTmFtZSksYXV0b0Nsb3NlOm4uaXNMb2FkaW5nPyExOnB0KG4uYXV0b0Nsb3NlLGQuYXV0b0Nsb3NlKSxjbG9zZVRvYXN0KEQpe2MuZ2V0KHUpLnJlbW92YWxSZWFzb249RCxFKHUpfSxkZWxldGVUb2FzdCgpe2xldCBEPWMuZ2V0KHUpO2lmKEQhPW51bGwpe2lmKGUoSihELFwicmVtb3ZlZFwiKSksYy5kZWxldGUodSkscy0tLHM8MCYmKHM9MCksbC5sZW5ndGg+MCl7cChsLnNoaWZ0KCkpO3JldHVybn12KCl9fX07QS5jbG9zZUJ1dHRvbj1kLmNsb3NlQnV0dG9uLG4uY2xvc2VCdXR0b249PT0hMXx8eihuLmNsb3NlQnV0dG9uKT9BLmNsb3NlQnV0dG9uPW4uY2xvc2VCdXR0b246bi5jbG9zZUJ1dHRvbj09PSEwJiYoQS5jbG9zZUJ1dHRvbj16KGQuY2xvc2VCdXR0b24pP2QuY2xvc2VCdXR0b246ITApO2xldCBSPXtjb250ZW50OmkscHJvcHM6QSxzdGFsZUlkOl99O2QubGltaXQmJmQubGltaXQ+MCYmcz5kLmxpbWl0JiZNP2wucHVzaChSKTpMKGspP3NldFRpbWVvdXQoKCk9PntwKFIpfSxrKTpwKFIpfSxzZXRQcm9wcyhpKXtkPWl9LHNldFRvZ2dsZTooaSxuKT0+e2xldCB1PWMuZ2V0KGkpO3UmJih1LnRvZ2dsZT1uKX0saXNUb2FzdEFjdGl2ZTppPT57dmFyIG47cmV0dXJuKG49Yy5nZXQoaSkpPT1udWxsP3ZvaWQgMDpuLmlzQWN0aXZlfSxnZXRTbmFwc2hvdDooKT0+YX19dmFyIEk9bmV3IE1hcCxGPVtdLHN0PW5ldyBTZXQsVnQ9dD0+c3QuZm9yRWFjaChvPT5vKHQpKSxidD0oKT0+SS5zaXplPjA7ZnVuY3Rpb24gUXQoKXtGLmZvckVhY2godD0+bnQodC5jb250ZW50LHQub3B0aW9ucykpLEY9W119dmFyIHZ0PSh0LHtjb250YWluZXJJZDpvfSk9Pnt2YXIgZTtyZXR1cm4oZT1JLmdldChvfHwxKSk9PW51bGw/dm9pZCAwOmUudG9hc3RzLmdldCh0KX07ZnVuY3Rpb24gWCh0LG8pe3ZhciByO2lmKG8pcmV0dXJuISEoKHI9SS5nZXQobykpIT1udWxsJiZyLmlzVG9hc3RBY3RpdmUodCkpO2xldCBlPSExO3JldHVybiBJLmZvckVhY2gocz0+e3MuaXNUb2FzdEFjdGl2ZSh0KSYmKGU9ITApfSksZX1mdW5jdGlvbiBodCh0KXtpZighYnQoKSl7Rj1GLmZpbHRlcihvPT50IT1udWxsJiZvLm9wdGlvbnMudG9hc3RJZCE9PXQpO3JldHVybn1pZih0PT1udWxsfHxtdCh0KSlJLmZvckVhY2gobz0+e28ucmVtb3ZlVG9hc3QodCl9KTtlbHNlIGlmKHQmJihcImNvbnRhaW5lcklkXCJpbiB0fHxcImlkXCJpbiB0KSl7bGV0IG89SS5nZXQodC5jb250YWluZXJJZCk7bz9vLnJlbW92ZVRvYXN0KHQuaWQpOkkuZm9yRWFjaChlPT57ZS5yZW1vdmVUb2FzdCh0LmlkKX0pfX12YXIgQ3Q9KHQ9e30pPT57SS5mb3JFYWNoKG89PntvLnByb3BzLmxpbWl0JiYoIXQuY29udGFpbmVySWR8fG8uaWQ9PT10LmNvbnRhaW5lcklkKSYmby5jbGVhclF1ZXVlKCl9KX07ZnVuY3Rpb24gbnQodCxvKXt6KHQpJiYoYnQoKXx8Ri5wdXNoKHtjb250ZW50OnQsb3B0aW9uczpvfSksSS5mb3JFYWNoKGU9PntlLmJ1aWxkVG9hc3QodCxvKX0pKX1mdW5jdGlvbiB4dCh0KXt2YXIgbzsobz1JLmdldCh0LmNvbnRhaW5lcklkfHwxKSk9PW51bGx8fG8uc2V0VG9nZ2xlKHQuaWQsdC5mbil9ZnVuY3Rpb24gcnQodCxvKXtJLmZvckVhY2goZT0+eyhvPT1udWxsfHwhKG8hPW51bGwmJm8uY29udGFpbmVySWQpfHwobz09bnVsbD92b2lkIDA6by5jb250YWluZXJJZCk9PT1lLmlkKSYmZS50b2dnbGUodCxvPT1udWxsP3ZvaWQgMDpvLmlkKX0pfWZ1bmN0aW9uIEV0KHQpe2xldCBvPXQuY29udGFpbmVySWR8fDE7cmV0dXJue3N1YnNjcmliZShlKXtsZXQgcj1fdChvLHQsVnQpO0kuc2V0KG8scik7bGV0IHM9ci5vYnNlcnZlKGUpO3JldHVybiBRdCgpLCgpPT57cygpLEkuZGVsZXRlKG8pfX0sc2V0UHJvcHMoZSl7dmFyIHI7KHI9SS5nZXQobykpPT1udWxsfHxyLnNldFByb3BzKGUpfSxnZXRTbmFwc2hvdCgpe3ZhciBlO3JldHVybihlPUkuZ2V0KG8pKT09bnVsbD92b2lkIDA6ZS5nZXRTbmFwc2hvdCgpfX19ZnVuY3Rpb24gUHQodCl7cmV0dXJuIHN0LmFkZCh0KSwoKT0+e3N0LmRlbGV0ZSh0KX19ZnVuY3Rpb24gV3QodCl7cmV0dXJuIHQmJihOKHQudG9hc3RJZCl8fEwodC50b2FzdElkKSk/dC50b2FzdElkOmF0KCl9ZnVuY3Rpb24gVSh0LG8pe3JldHVybiBudCh0LG8pLG8udG9hc3RJZH1mdW5jdGlvbiBWKHQsbyl7cmV0dXJuey4uLm8sdHlwZTpvJiZvLnR5cGV8fHQsdG9hc3RJZDpXdChvKX19ZnVuY3Rpb24gUSh0KXtyZXR1cm4obyxlKT0+VShvLFYodCxlKSl9ZnVuY3Rpb24geSh0LG8pe3JldHVybiBVKHQsVihcImRlZmF1bHRcIixvKSl9eS5sb2FkaW5nPSh0LG8pPT5VKHQsVihcImRlZmF1bHRcIix7aXNMb2FkaW5nOiEwLGF1dG9DbG9zZTohMSxjbG9zZU9uQ2xpY2s6ITEsY2xvc2VCdXR0b246ITEsZHJhZ2dhYmxlOiExLC4uLm99KSk7ZnVuY3Rpb24gR3QodCx7cGVuZGluZzpvLGVycm9yOmUsc3VjY2VzczpyfSxzKXtsZXQgbDtvJiYobD1OKG8pP3kubG9hZGluZyhvLHMpOnkubG9hZGluZyhvLnJlbmRlcix7Li4ucywuLi5vfSkpO2xldCBhPXtpc0xvYWRpbmc6bnVsbCxhdXRvQ2xvc2U6bnVsbCxjbG9zZU9uQ2xpY2s6bnVsbCxjbG9zZUJ1dHRvbjpudWxsLGRyYWdnYWJsZTpudWxsfSxkPShULGcsdik9PntpZihnPT1udWxsKXt5LmRpc21pc3MobCk7cmV0dXJufWxldCB4PXt0eXBlOlQsLi4uYSwuLi5zLGRhdGE6dn0sQz1OKGcpP3tyZW5kZXI6Z306ZztyZXR1cm4gbD95LnVwZGF0ZShsLHsuLi54LC4uLkN9KTp5KEMucmVuZGVyLHsuLi54LC4uLkN9KSx2fSxjPVAodCk/dCgpOnQ7cmV0dXJuIGMudGhlbihUPT5kKFwic3VjY2Vzc1wiLHIsVCkpLmNhdGNoKFQ9PmQoXCJlcnJvclwiLGUsVCkpLGN9eS5wcm9taXNlPUd0O3kuc3VjY2Vzcz1RKFwic3VjY2Vzc1wiKTt5LmluZm89UShcImluZm9cIik7eS5lcnJvcj1RKFwiZXJyb3JcIik7eS53YXJuaW5nPVEoXCJ3YXJuaW5nXCIpO3kud2Fybj15Lndhcm5pbmc7eS5kYXJrPSh0LG8pPT5VKHQsVihcImRlZmF1bHRcIix7dGhlbWU6XCJkYXJrXCIsLi4ub30pKTtmdW5jdGlvbiBxdCh0KXtodCh0KX15LmRpc21pc3M9cXQ7eS5jbGVhcldhaXRpbmdRdWV1ZT1DdDt5LmlzQWN0aXZlPVg7eS51cGRhdGU9KHQsbz17fSk9PntsZXQgZT12dCh0LG8pO2lmKGUpe2xldHtwcm9wczpyLGNvbnRlbnQ6c309ZSxsPXtkZWxheToxMDAsLi4uciwuLi5vLHRvYXN0SWQ6by50b2FzdElkfHx0LHVwZGF0ZUlkOmF0KCl9O2wudG9hc3RJZCE9PXQmJihsLnN0YWxlSWQ9dCk7bGV0IGE9bC5yZW5kZXJ8fHM7ZGVsZXRlIGwucmVuZGVyLFUoYSxsKX19O3kuZG9uZT10PT57eS51cGRhdGUodCx7cHJvZ3Jlc3M6MX0pfTt5Lm9uQ2hhbmdlPVB0O3kucGxheT10PT5ydCghMCx0KTt5LnBhdXNlPXQ9PnJ0KCExLHQpO2ltcG9ydHt1c2VSZWYgYXMgS3QsdXNlU3luY0V4dGVybmFsU3RvcmUgYXMgWXR9ZnJvbVwicmVhY3RcIjtmdW5jdGlvbiBJdCh0KXt2YXIgYTtsZXR7c3Vic2NyaWJlOm8sZ2V0U25hcHNob3Q6ZSxzZXRQcm9wczpyfT1LdChFdCh0KSkuY3VycmVudDtyKHQpO2xldCBzPShhPVl0KG8sZSxlKSk9PW51bGw/dm9pZCAwOmEuc2xpY2UoKTtmdW5jdGlvbiBsKGQpe2lmKCFzKXJldHVybltdO2xldCBjPW5ldyBNYXA7cmV0dXJuIHQubmV3ZXN0T25Ub3AmJnMucmV2ZXJzZSgpLHMuZm9yRWFjaChUPT57bGV0e3Bvc2l0aW9uOmd9PVQucHJvcHM7Yy5oYXMoZyl8fGMuc2V0KGcsW10pLGMuZ2V0KGcpLnB1c2goVCl9KSxBcnJheS5mcm9tKGMsVD0+ZChUWzBdLFRbMV0pKX1yZXR1cm57Z2V0VG9hc3RUb1JlbmRlcjpsLGlzVG9hc3RBY3RpdmU6WCxjb3VudDpzPT1udWxsP3ZvaWQgMDpzLmxlbmd0aH19aW1wb3J0e3VzZUVmZmVjdCBhcyBadCx1c2VSZWYgYXMgU3QsdXNlU3RhdGUgYXMga3R9ZnJvbVwicmVhY3RcIjtmdW5jdGlvbiBBdCh0KXtsZXRbbyxlXT1rdCghMSksW3Isc109a3QoITEpLGw9U3QobnVsbCksYT1TdCh7c3RhcnQ6MCxkZWx0YTowLHJlbW92YWxEaXN0YW5jZTowLGNhbkNsb3NlT25DbGljazohMCxjYW5EcmFnOiExLGRpZE1vdmU6ITF9KS5jdXJyZW50LHthdXRvQ2xvc2U6ZCxwYXVzZU9uSG92ZXI6YyxjbG9zZVRvYXN0OlQsb25DbGljazpnLGNsb3NlT25DbGljazp2fT10O3h0KHtpZDp0LnRvYXN0SWQsY29udGFpbmVySWQ6dC5jb250YWluZXJJZCxmbjplfSksWnQoKCk9PntpZih0LnBhdXNlT25Gb2N1c0xvc3MpcmV0dXJuIHgoKSwoKT0+e0MoKX19LFt0LnBhdXNlT25Gb2N1c0xvc3NdKTtmdW5jdGlvbiB4KCl7ZG9jdW1lbnQuaGFzRm9jdXMoKXx8cCgpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIixmKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIixwKX1mdW5jdGlvbiBDKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLGYpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLHApfWZ1bmN0aW9uIFMobSl7aWYodC5kcmFnZ2FibGU9PT0hMHx8dC5kcmFnZ2FibGU9PT1tLnBvaW50ZXJUeXBlKXtiKCk7bGV0IF89bC5jdXJyZW50O2EuY2FuQ2xvc2VPbkNsaWNrPSEwLGEuY2FuRHJhZz0hMCxfLnN0eWxlLnRyYW5zaXRpb249XCJub25lXCIsdC5kcmFnZ2FibGVEaXJlY3Rpb249PT1cInhcIj8oYS5zdGFydD1tLmNsaWVudFgsYS5yZW1vdmFsRGlzdGFuY2U9Xy5vZmZzZXRXaWR0aCoodC5kcmFnZ2FibGVQZXJjZW50LzEwMCkpOihhLnN0YXJ0PW0uY2xpZW50WSxhLnJlbW92YWxEaXN0YW5jZT1fLm9mZnNldEhlaWdodCoodC5kcmFnZ2FibGVQZXJjZW50PT09ODA/dC5kcmFnZ2FibGVQZXJjZW50KjEuNTp0LmRyYWdnYWJsZVBlcmNlbnQpLzEwMCl9fWZ1bmN0aW9uIEUobSl7bGV0e3RvcDpfLGJvdHRvbTprLGxlZnQ6TSxyaWdodDpBfT1sLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bS5uYXRpdmVFdmVudC50eXBlIT09XCJ0b3VjaGVuZFwiJiZ0LnBhdXNlT25Ib3ZlciYmbS5jbGllbnRYPj1NJiZtLmNsaWVudFg8PUEmJm0uY2xpZW50WT49XyYmbS5jbGllbnRZPD1rP3AoKTpmKCl9ZnVuY3Rpb24gZigpe2UoITApfWZ1bmN0aW9uIHAoKXtlKCExKX1mdW5jdGlvbiBiKCl7YS5kaWRNb3ZlPSExLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLG4pLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIix1KX1mdW5jdGlvbiBpKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsbiksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLHUpfWZ1bmN0aW9uIG4obSl7bGV0IF89bC5jdXJyZW50O2lmKGEuY2FuRHJhZyYmXyl7YS5kaWRNb3ZlPSEwLG8mJnAoKSx0LmRyYWdnYWJsZURpcmVjdGlvbj09PVwieFwiP2EuZGVsdGE9bS5jbGllbnRYLWEuc3RhcnQ6YS5kZWx0YT1tLmNsaWVudFktYS5zdGFydCxhLnN0YXJ0IT09bS5jbGllbnRYJiYoYS5jYW5DbG9zZU9uQ2xpY2s9ITEpO2xldCBrPXQuZHJhZ2dhYmxlRGlyZWN0aW9uPT09XCJ4XCI/YCR7YS5kZWx0YX1weCwgdmFyKC0teSlgOmAwLCBjYWxjKCR7YS5kZWx0YX1weCArIHZhcigtLXkpKWA7Xy5zdHlsZS50cmFuc2Zvcm09YHRyYW5zbGF0ZTNkKCR7a30sMClgLF8uc3R5bGUub3BhY2l0eT1gJHsxLU1hdGguYWJzKGEuZGVsdGEvYS5yZW1vdmFsRGlzdGFuY2UpfWB9fWZ1bmN0aW9uIHUoKXtpKCk7bGV0IG09bC5jdXJyZW50O2lmKGEuY2FuRHJhZyYmYS5kaWRNb3ZlJiZtKXtpZihhLmNhbkRyYWc9ITEsTWF0aC5hYnMoYS5kZWx0YSk+YS5yZW1vdmFsRGlzdGFuY2Upe3MoITApLHQuY2xvc2VUb2FzdCghMCksdC5jb2xsYXBzZUFsbCgpO3JldHVybn1tLnN0eWxlLnRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjJzXCIsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zZm9ybVwiKSxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKX19bGV0IGg9e29uUG9pbnRlckRvd246UyxvblBvaW50ZXJVcDpFfTtyZXR1cm4gZCYmYyYmKGgub25Nb3VzZUVudGVyPXAsdC5zdGFja2VkfHwoaC5vbk1vdXNlTGVhdmU9ZikpLHYmJihoLm9uQ2xpY2s9bT0+e2cmJmcobSksYS5jYW5DbG9zZU9uQ2xpY2smJlQoITApfSkse3BsYXlUb2FzdDpmLHBhdXNlVG9hc3Q6cCxpc1J1bm5pbmc6byxwcmV2ZW50RXhpdFRyYW5zaXRpb246cix0b2FzdFJlZjpsLGV2ZW50SGFuZGxlcnM6aH19aW1wb3J0e3VzZUVmZmVjdCBhcyBKdCx1c2VMYXlvdXRFZmZlY3QgYXMgdG99ZnJvbVwicmVhY3RcIjt2YXIgT3Q9dHlwZW9mIHdpbmRvdyE9XCJ1bmRlZmluZWRcIj90bzpKdDtpbXBvcnQgaXQgZnJvbVwiY2xzeFwiO2ltcG9ydCBxLHtjbG9uZUVsZW1lbnQgYXMgY28saXNWYWxpZEVsZW1lbnQgYXMgZm99ZnJvbVwicmVhY3RcIjtpbXBvcnQgTyx7Y2xvbmVFbGVtZW50IGFzIG9vLGlzVmFsaWRFbGVtZW50IGFzIGVvfWZyb21cInJlYWN0XCI7dmFyIEc9KHt0aGVtZTp0LHR5cGU6byxpc0xvYWRpbmc6ZSwuLi5yfSk9Pk8uY3JlYXRlRWxlbWVudChcInN2Z1wiLHt2aWV3Qm94OlwiMCAwIDI0IDI0XCIsd2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLGZpbGw6dD09PVwiY29sb3JlZFwiP1wiY3VycmVudENvbG9yXCI6YHZhcigtLXRvYXN0aWZ5LWljb24tY29sb3ItJHtvfSlgLC4uLnJ9KTtmdW5jdGlvbiBhbyh0KXtyZXR1cm4gTy5jcmVhdGVFbGVtZW50KEcsey4uLnR9LE8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0yMy4zMiAxNy4xOTFMMTUuNDM4IDIuMTg0QzE0LjcyOC44MzMgMTMuNDE2IDAgMTEuOTk2IDBjLTEuNDIgMC0yLjczMy44MzMtMy40NDMgMi4xODRMLjUzMyAxNy40NDhhNC43NDQgNC43NDQgMCAwMDAgNC4zNjhDMS4yNDMgMjMuMTY3IDIuNTU1IDI0IDMuOTc1IDI0aDE2LjA1QzIyLjIyIDI0IDI0IDIyLjA0NCAyNCAxOS42MzJjMC0uOTA0LS4yNTEtMS43NDYtLjY4LTIuNDR6bS05LjYyMiAxLjQ2YzAgMS4wMzMtLjcyNCAxLjgyMy0xLjY5OCAxLjgyM3MtMS42OTgtLjc5LTEuNjk4LTEuODIydi0uMDQzYzAtMS4wMjguNzI0LTEuODIyIDEuNjk4LTEuODIyczEuNjk4Ljc5IDEuNjk4IDEuODIydi4wNDN6bS4wMzktMTIuMjg1bC0uODQgOC4wNmMtLjA1Ny41ODEtLjQwOC45NDMtLjg5Ny45NDMtLjQ5IDAtLjg0LS4zNjctLjg5Ni0uOTQybC0uODQtOC4wNjVjLS4wNTctLjYyNC4yNS0xLjA5NS43NzktMS4wOTVoMS45MWMuNTI4LjAwNS44NC40NzYuNzg0IDEuMXpcIn0pKX1mdW5jdGlvbiBzbyh0KXtyZXR1cm4gTy5jcmVhdGVFbGVtZW50KEcsey4uLnR9LE8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMiAwYTEyIDEyIDAgMTAxMiAxMkExMi4wMTMgMTIuMDEzIDAgMDAxMiAwem0uMjUgNWExLjUgMS41IDAgMTEtMS41IDEuNSAxLjUgMS41IDAgMDExLjUtMS41em0yLjI1IDEzLjVoLTRhMSAxIDAgMDEwLTJoLjc1YS4yNS4yNSAwIDAwLjI1LS4yNXYtNC41YS4yNS4yNSAwIDAwLS4yNS0uMjVoLS43NWExIDEgMCAwMTAtMmgxYTIgMiAwIDAxMiAydjQuNzVhLjI1LjI1IDAgMDAuMjUuMjVoLjc1YTEgMSAwIDExMCAyelwifSkpfWZ1bmN0aW9uIG5vKHQpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnQoRyx7Li4udH0sTy5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTEyIDBhMTIgMTIgMCAxMDEyIDEyQTEyLjAxNCAxMi4wMTQgMCAwMDEyIDB6bTYuOTI3IDguMmwtNi44NDUgOS4yODlhMS4wMTEgMS4wMTEgMCAwMS0xLjQzLjE4OGwtNC44ODgtMy45MDhhMSAxIDAgMTExLjI1LTEuNTYybDQuMDc2IDMuMjYxIDYuMjI3LTguNDUxYTEgMSAwIDExMS42MSAxLjE4M3pcIn0pKX1mdW5jdGlvbiBybyh0KXtyZXR1cm4gTy5jcmVhdGVFbGVtZW50KEcsey4uLnR9LE8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMS45ODMgMGExMi4yMDYgMTIuMjA2IDAgMDAtOC41MSAzLjY1M0ExMS44IDExLjggMCAwMDAgMTIuMjA3IDExLjc3OSAxMS43NzkgMCAwMDExLjggMjRoLjIxNEExMi4xMTEgMTIuMTExIDAgMDAyNCAxMS43OTEgMTEuNzY2IDExLjc2NiAwIDAwMTEuOTgzIDB6TTEwLjUgMTYuNTQyYTEuNDc2IDEuNDc2IDAgMDExLjQ0OS0xLjUzaC4wMjdhMS41MjcgMS41MjcgMCAwMTEuNTIzIDEuNDcgMS40NzUgMS40NzUgMCAwMS0xLjQ0OSAxLjUzaC0uMDI3YTEuNTI5IDEuNTI5IDAgMDEtMS41MjMtMS40N3pNMTEgMTIuNXYtNmExIDEgMCAwMTIgMHY2YTEgMSAwIDExLTIgMHpcIn0pKX1mdW5jdGlvbiBpbygpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiVG9hc3RpZnlfX3NwaW5uZXJcIn0pfXZhciBXPXtpbmZvOnNvLHdhcm5pbmc6YW8sc3VjY2VzczpubyxlcnJvcjpybyxzcGlubmVyOmlvfSxsbz10PT50IGluIFc7ZnVuY3Rpb24gTnQoe3RoZW1lOnQsdHlwZTpvLGlzTG9hZGluZzplLGljb246cn0pe2xldCBzPW51bGwsbD17dGhlbWU6dCx0eXBlOm99O3JldHVybiByPT09ITF8fChQKHIpP3M9cih7Li4ubCxpc0xvYWRpbmc6ZX0pOmVvKHIpP3M9b28ocixsKTplP3M9Vy5zcGlubmVyKCk6bG8obykmJihzPVdbb10obCkpKSxzfXZhciB3dD10PT57bGV0e2lzUnVubmluZzpvLHByZXZlbnRFeGl0VHJhbnNpdGlvbjplLHRvYXN0UmVmOnIsZXZlbnRIYW5kbGVyczpzLHBsYXlUb2FzdDpsfT1BdCh0KSx7Y2xvc2VCdXR0b246YSxjaGlsZHJlbjpkLGF1dG9DbG9zZTpjLG9uQ2xpY2s6VCx0eXBlOmcsaGlkZVByb2dyZXNzQmFyOnYsY2xvc2VUb2FzdDp4LHRyYW5zaXRpb246Qyxwb3NpdGlvbjpTLGNsYXNzTmFtZTpFLHN0eWxlOmYscHJvZ3Jlc3NDbGFzc05hbWU6cCx1cGRhdGVJZDpiLHJvbGU6aSxwcm9ncmVzczpuLHJ0bDp1LHRvYXN0SWQ6aCxkZWxldGVUb2FzdDptLGlzSW46Xyxpc0xvYWRpbmc6ayxjbG9zZU9uQ2xpY2s6TSx0aGVtZTpBLGFyaWFMYWJlbDpSfT10LEQ9aXQoXCJUb2FzdGlmeV9fdG9hc3RcIixgVG9hc3RpZnlfX3RvYXN0LXRoZW1lLS0ke0F9YCxgVG9hc3RpZnlfX3RvYXN0LS0ke2d9YCx7W1wiVG9hc3RpZnlfX3RvYXN0LS1ydGxcIl06dX0se1tcIlRvYXN0aWZ5X190b2FzdC0tY2xvc2Utb24tY2xpY2tcIl06TX0pLFk9UChFKT9FKHtydGw6dSxwb3NpdGlvbjpTLHR5cGU6ZyxkZWZhdWx0Q2xhc3NOYW1lOkR9KTppdChELEUpLGZ0PU50KHQpLGR0PSEhbnx8IWMsaj17Y2xvc2VUb2FzdDp4LHR5cGU6Zyx0aGVtZTpBfSxIPW51bGw7cmV0dXJuIGE9PT0hMXx8KFAoYSk/SD1hKGopOmZvKGEpP0g9Y28oYSxqKTpIPXl0KGopKSxxLmNyZWF0ZUVsZW1lbnQoQyx7aXNJbjpfLGRvbmU6bSxwb3NpdGlvbjpTLHByZXZlbnRFeGl0VHJhbnNpdGlvbjplLG5vZGVSZWY6cixwbGF5VG9hc3Q6bH0scS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2lkOmgsdGFiSW5kZXg6MCxvbkNsaWNrOlQsXCJkYXRhLWluXCI6XyxjbGFzc05hbWU6WSwuLi5zLHN0eWxlOmYscmVmOnIsLi4uXyYme3JvbGU6aSxcImFyaWEtbGFiZWxcIjpSfX0sZnQhPW51bGwmJnEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6aXQoXCJUb2FzdGlmeV9fdG9hc3QtaWNvblwiLHtbXCJUb2FzdGlmeS0tYW5pbWF0ZS1pY29uIFRvYXN0aWZ5X196b29tLWVudGVyXCJdOiFrfSl9LGZ0KSx0dChkLHQsIW8pLEgsIXQuY3VzdG9tUHJvZ3Jlc3NCYXImJnEuY3JlYXRlRWxlbWVudChndCx7Li4uYiYmIWR0P3trZXk6YHAtJHtifWB9Ont9LHJ0bDp1LHRoZW1lOkEsZGVsYXk6Yyxpc1J1bm5pbmc6byxpc0luOl8sY2xvc2VUb2FzdDp4LGhpZGU6dix0eXBlOmcsY2xhc3NOYW1lOnAsY29udHJvbGxlZFByb2dyZXNzOmR0LHByb2dyZXNzOm58fDB9KSkpfTt2YXIgSz0odCxvPSExKT0+KHtlbnRlcjpgVG9hc3RpZnktLWFuaW1hdGUgVG9hc3RpZnlfXyR7dH0tZW50ZXJgLGV4aXQ6YFRvYXN0aWZ5LS1hbmltYXRlIFRvYXN0aWZ5X18ke3R9LWV4aXRgLGFwcGVuZFBvc2l0aW9uOm99KSxsdD0kKEsoXCJib3VuY2VcIiwhMCkpLG1vPSQoSyhcInNsaWRlXCIsITApKSxwbz0kKEsoXCJ6b29tXCIpKSx1bz0kKEsoXCJmbGlwXCIpKTt2YXIgX289e3Bvc2l0aW9uOlwidG9wLXJpZ2h0XCIsdHJhbnNpdGlvbjpsdCxhdXRvQ2xvc2U6NWUzLGNsb3NlQnV0dG9uOiEwLHBhdXNlT25Ib3ZlcjohMCxwYXVzZU9uRm9jdXNMb3NzOiEwLGRyYWdnYWJsZTpcInRvdWNoXCIsZHJhZ2dhYmxlUGVyY2VudDo4MCxkcmFnZ2FibGVEaXJlY3Rpb246XCJ4XCIscm9sZTpcImFsZXJ0XCIsdGhlbWU6XCJsaWdodFwiLFwiYXJpYS1sYWJlbFwiOlwiTm90aWZpY2F0aW9ucyBBbHQrVFwiLGhvdEtleXM6dD0+dC5hbHRLZXkmJnQuY29kZT09PVwiS2V5VFwifTtmdW5jdGlvbiBMdCh0KXtsZXQgbz17Li4uX28sLi4udH0sZT10LnN0YWNrZWQsW3Isc109Z28oITApLGw9VG8obnVsbCkse2dldFRvYXN0VG9SZW5kZXI6YSxpc1RvYXN0QWN0aXZlOmQsY291bnQ6Y309SXQobykse2NsYXNzTmFtZTpULHN0eWxlOmcscnRsOnYsY29udGFpbmVySWQ6eCxob3RLZXlzOkN9PW87ZnVuY3Rpb24gUyhmKXtsZXQgcD1EdChcIlRvYXN0aWZ5X190b2FzdC1jb250YWluZXJcIixgVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tJHtmfWAse1tcIlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXJ0bFwiXTp2fSk7cmV0dXJuIFAoVCk/VCh7cG9zaXRpb246ZixydGw6dixkZWZhdWx0Q2xhc3NOYW1lOnB9KTpEdChwLEIoVCkpfWZ1bmN0aW9uIEUoKXtlJiYocyghMCkseS5wbGF5KCkpfXJldHVybiBPdCgoKT0+e3ZhciBmO2lmKGUpe2xldCBwPWwuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbj1cInRydWVcIl0nKSxiPTEyLGk9KGY9by5wb3NpdGlvbik9PW51bGw/dm9pZCAwOmYuaW5jbHVkZXMoXCJ0b3BcIiksbj0wLHU9MDtBcnJheS5mcm9tKHApLnJldmVyc2UoKS5mb3JFYWNoKChoLG0pPT57bGV0IF89aDtfLmNsYXNzTGlzdC5hZGQoXCJUb2FzdGlmeV9fdG9hc3QtLXN0YWNrZWRcIiksbT4wJiYoXy5kYXRhc2V0LmNvbGxhcHNlZD1gJHtyfWApLF8uZGF0YXNldC5wb3N8fChfLmRhdGFzZXQucG9zPWk/XCJ0b3BcIjpcImJvdFwiKTtsZXQgaz1uKihyPy4yOjEpKyhyPzA6YiptKTtfLnN0eWxlLnNldFByb3BlcnR5KFwiLS15XCIsYCR7aT9rOmsqLTF9cHhgKSxfLnN0eWxlLnNldFByb3BlcnR5KFwiLS1nXCIsYCR7Yn1gKSxfLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zXCIsYCR7MS0ocj91OjApfWApLG4rPV8ub2Zmc2V0SGVpZ2h0LHUrPS4wMjV9KX19LFtyLGMsZV0pLHlvKCgpPT57ZnVuY3Rpb24gZihwKXt2YXIgaTtsZXQgYj1sLmN1cnJlbnQ7QyhwKSYmKChpPWIucXVlcnlTZWxlY3RvcignW3RhYkluZGV4PVwiMFwiXScpKT09bnVsbHx8aS5mb2N1cygpLHMoITEpLHkucGF1c2UoKSkscC5rZXk9PT1cIkVzY2FwZVwiJiYoZG9jdW1lbnQuYWN0aXZlRWxlbWVudD09PWJ8fGIhPW51bGwmJmIuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpJiYocyghMCkseS5wbGF5KCkpfXJldHVybiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGYpLCgpPT57ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixmKX19LFtDXSksY3QuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIix7cmVmOmwsY2xhc3NOYW1lOlwiVG9hc3RpZnlcIixpZDp4LG9uTW91c2VFbnRlcjooKT0+e2UmJihzKCExKSx5LnBhdXNlKCkpfSxvbk1vdXNlTGVhdmU6RSxcImFyaWEtbGl2ZVwiOlwicG9saXRlXCIsXCJhcmlhLWF0b21pY1wiOlwiZmFsc2VcIixcImFyaWEtcmVsZXZhbnRcIjpcImFkZGl0aW9ucyB0ZXh0XCIsXCJhcmlhLWxhYmVsXCI6b1tcImFyaWEtbGFiZWxcIl19LGEoKGYscCk9PntsZXQgYj1wLmxlbmd0aD97Li4uZ306ey4uLmcscG9pbnRlckV2ZW50czpcIm5vbmVcIn07cmV0dXJuIGN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7dGFiSW5kZXg6LTEsY2xhc3NOYW1lOlMoZiksXCJkYXRhLXN0YWNrZWRcIjplLHN0eWxlOmIsa2V5OmBjLSR7Zn1gfSxwLm1hcCgoe2NvbnRlbnQ6aSxwcm9wczpufSk9PmN0LmNyZWF0ZUVsZW1lbnQod3Qsey4uLm4sc3RhY2tlZDplLGNvbGxhcHNlQWxsOkUsaXNJbjpkKG4udG9hc3RJZCxuLmNvbnRhaW5lcklkKSxrZXk6YHQtJHtuLmtleX1gfSxpKSkpfSkpfWV4cG9ydHtsdCBhcyBCb3VuY2UsdW8gYXMgRmxpcCxXIGFzIEljb25zLG1vIGFzIFNsaWRlLEx0IGFzIFRvYXN0Q29udGFpbmVyLHBvIGFzIFpvb20sWiBhcyBjb2xsYXBzZVRvYXN0LCQgYXMgY3NzVHJhbnNpdGlvbix5IGFzIHRvYXN0fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnamltdS1hcmNnaXMnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBcIkBlc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NhbGNpdGUvY2FsY2l0ZS5jc3NcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBsb2FkTW9kdWxlcyB9IGZyb20gJ2VzcmktbG9hZGVyJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IElNU3RhdGUgfSBmcm9tICdqaW11LWNvcmUnO1xyXG5pbXBvcnQgeyBCb3VuY2UsIFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgQnV0dG9uLCBMb2FkaW5nIH0gZnJvbSAnamltdS11aSc7XHJcblxyXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaG9va3MvdXNlTG9jYWxlXCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0aW9ucyB9IGZyb20gJy4vdHJhbnNsYXRpb25zJztcclxuXHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3QgeyB0IH0gPSB1c2VMb2NhbGUodHJhbnNsYXRpb25zKTtcclxuXHJcbiAgY29uc3QgW2ppbXVNYXBWaWV3LCBzZXRKaW11TWFwVmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9hZGluZ0luY2VuZGlvLCBzZXRMb2FkaW5nSW5jZW5kaW9dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xvYWRpbmdJbnVuZGFjaW9uLCBzZXRMb2FkaW5nSW51bmRhY2lvbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRJbWFnZXJpZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElNU3RhdGUpID0+IHN0YXRlLm15U3RhdGU/LnNlbGVjdGVkSW1hZ2VzKVxyXG4gIGNvbnN0IGdlb3Byb2Nlc3MgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElNU3RhdGUpID0+IHN0YXRlLm15U3RhdGU/Lmdlb3Byb2Nlc3MpXHJcbiAgY29uc3Qgc2VsZWN0ZWRTZW5zb3IgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElNU3RhdGUpID0+IHN0YXRlLm15U3RhdGU/LnNlbGVjdGVkU2Vuc29yKVxyXG5cclxuICBjb25zdCBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXYpID0+IHtcclxuICAgIHNldEppbXVNYXBWaWV3KGptdik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FyZ2FyR2VvbWV0cmlhRW5NYXBhID0gYXN5bmMgKGdlb2pzb25GaWxlTmFtZSwgcHJvY2VzbykgPT4ge1xyXG4gICAgaWYgKCFqaW11TWFwVmlldykgcmV0dXJuO1xyXG4gICAgaWYgKCFnZW9qc29uRmlsZU5hbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgcmVjaWJpw7MgdW4gbm9tYnJlIGRlIGFyY2hpdm8gdsOhbGlkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gT2J0ZW5lciBsYSBVUkwgYmFzZSBkaW7DoW1pY2FtZW50ZVxyXG4gICAgICAvLyBjb25zdCBiYXNlVXJsID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiA7XHJcbiAgICAgIGNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6NTAwMFwiO1xyXG4gICAgICBjb25zdCBxdWVyeVVybCA9IFN0cmluZyhiYXNlVXJsICsgZ2VvanNvbkZpbGVOYW1lKTtcclxuXHJcblxyXG4gICAgICBjb25zdCBsYXllclJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocXVlcnlVcmwpO1xyXG5cclxuICAgICAgaWYgKCFsYXllclJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBhbCBjb25zdWx0YXIgbGEgY2FwYTogJHtsYXllclJlc3BvbnNlLnN0YXR1c30gJHtsYXllclJlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGdlb2pzb25EYXRhID0gYXdhaXQgbGF5ZXJSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBpZiAoZ2VvanNvbkRhdGEpIHtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJJbmNlbmRpb05hbWVcIiwgSlNPTi5zdHJpbmdpZnkoZ2VvanNvbkRhdGEpKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBbRmVhdHVyZUxheWVyLCBHcmFwaGljLCBQb2x5Z29uLCBTaW1wbGVGaWxsU3ltYm9sLCBnZW9tZXRyeUVuZ2luZV0gPSBhd2FpdCBsb2FkTW9kdWxlcyhbXHJcbiAgICAgICAgXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIixcclxuICAgICAgICBcImVzcmkvR3JhcGhpY1wiLFxyXG4gICAgICAgIFwiZXNyaS9nZW9tZXRyeS9Qb2x5Z29uXCIsXHJcbiAgICAgICAgXCJlc3JpL3N5bWJvbHMvU2ltcGxlRmlsbFN5bWJvbFwiLFxyXG4gICAgICAgIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgdmFyIGNvbG9yUG9saWdvblxyXG4gICAgICB2YXIgbm9tYnJlQ2FwYVxyXG5cclxuICAgICAgaWYgKHByb2Nlc28gPT0gMikge1xyXG4gICAgICAgIGNvbG9yUG9saWdvbiA9IG5ldyBTaW1wbGVGaWxsU3ltYm9sKHtcclxuICAgICAgICAgIGNvbG9yOiBbMjU1LCAwLCAwLCAwLjVdLFxyXG4gICAgICAgICAgb3V0bGluZTogeyBjb2xvcjogWzI1NSwgMCwgMF0sIHdpZHRoOiAxIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBub21icmVDYXBhID0gdChcImZpcmVMYXllclwiKVxyXG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc28gPT0gMykge1xyXG4gICAgICAgIGNvbG9yUG9saWdvbiA9IG5ldyBTaW1wbGVGaWxsU3ltYm9sKHtcclxuICAgICAgICAgIGNvbG9yOiBbMCwgMCwgMjU1LCAwLjVdLFxyXG4gICAgICAgICAgb3V0bGluZTogeyBjb2xvcjogWzAsIDAsIDI1NV0sIHdpZHRoOiAxIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBub21icmVDYXBhID0gdChcImZsb29kTGF5ZXJcIilcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbG9yUG9saWdvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgZmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgICB0aXRsZTogbm9tYnJlQ2FwYSxcclxuICAgICAgICAgIHNvdXJjZTogW10sXHJcbiAgICAgICAgICBvYmplY3RJZEZpZWxkOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgeyBuYW1lOiBcIk9CSkVDVElEXCIsIGFsaWFzOiBcIk9CSkVDVElEXCIsIHR5cGU6IFwib2lkXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcImFyZWFfbTJcIiwgYWxpYXM6IFwiw4FyZWEgKG3CsilcIiwgdHlwZTogXCJkb3VibGVcIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiYXJlYV9oYVwiLCBhbGlhczogXCLDgXJlYSAoaGEpXCIsIHR5cGU6IFwiZG91YmxlXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcImFyZWFfa20yXCIsIGFsaWFzOiBcIsOBcmVhIChrbcKyKVwiLCB0eXBlOiBcImRvdWJsZVwiIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICByZW5kZXJlcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxyXG4gICAgICAgICAgICBzeW1ib2w6IGNvbG9yUG9saWdvblxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gW107XHJcbiAgICAgICAgbGV0IGdyYXBoaWNJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIGdlb2pzb25EYXRhLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHtcclxuICAgICAgICAgIGxldCBnZW9tZXRyaWVzID0gW107XHJcblxyXG4gICAgICAgICAgaWYgKGZlYXR1cmUuZ2VvbWV0cnkudHlwZSA9PT0gXCJQb2x5Z29uXCIpIHtcclxuICAgICAgICAgICAgZ2VvbWV0cmllcy5wdXNoKG5ldyBQb2x5Z29uKHtcclxuICAgICAgICAgICAgICByaW5nczogZmVhdHVyZS5nZW9tZXRyeS5jb29yZGluYXRlcyxcclxuICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBqaW11TWFwVmlldy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlLmdlb21ldHJ5LnR5cGUgPT09IFwiTXVsdGlQb2x5Z29uXCIpIHtcclxuICAgICAgICAgICAgZmVhdHVyZS5nZW9tZXRyeS5jb29yZGluYXRlcy5mb3JFYWNoKHBvbHlnb25Db29yZGluYXRlcyA9PiB7XHJcbiAgICAgICAgICAgICAgZ2VvbWV0cmllcy5wdXNoKG5ldyBQb2x5Z29uKHtcclxuICAgICAgICAgICAgICAgIHJpbmdzOiBwb2x5Z29uQ29vcmRpbmF0ZXMsXHJcbiAgICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBqaW11TWFwVmlldy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGdlb21ldHJpZXMuZm9yRWFjaChnZW9tZXRyeSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhcmVhTTIgPSBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0FyZWEoZ2VvbWV0cnksIFwic3F1YXJlLW1ldGVyc1wiKTtcclxuICAgICAgICAgICAgY29uc3QgYXJlYUhhID0gYXJlYU0yIC8gMTAwMDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyZWFLbTIgPSBhcmVhTTIgLyAxXzAwMF8wMDA7XHJcblxyXG4gICAgICAgICAgICBncmFwaGljcy5wdXNoKG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgICBnZW9tZXRyeTogZ2VvbWV0cnksXHJcbiAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICAgICAgT0JKRUNUSUQ6IGdyYXBoaWNJbmRleCxcclxuICAgICAgICAgICAgICAgIGFyZWFfbTI6IGFyZWFNMixcclxuICAgICAgICAgICAgICAgIGFyZWFfaGE6IGFyZWFIYSxcclxuICAgICAgICAgICAgICAgIGFyZWFfa20yOiBhcmVhS20yXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNJbmRleCsrO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZlYXR1cmVMYXllci5zb3VyY2UgPSBncmFwaGljcztcclxuXHJcbiAgICAgICAgLy8gQWdyZWdhciBsYSBjYXBhIGFsIG1hcGEgc2kgbm8gZXhpc3RlIHVuYSBjb24gZWwgbWlzbW8gbm9tYnJlXHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdMYXllciA9IGppbXVNYXBWaWV3LnZpZXcubWFwLmxheWVycy5maW5kKGxheWVyID0+IGxheWVyLnRpdGxlID09PSBcIlBvbGlnb25vIGRlc2FzdHJlXCIpO1xyXG4gICAgICAgIGlmIChleGlzdGluZ0xheWVyKSB7XHJcbiAgICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUoZXhpc3RpbmdMYXllcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQoZmVhdHVyZUxheWVyKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWwgY2FyZ2FyIGxhIGdlb21ldHLDrWEgZW4gZWwgbWFwYTpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluY2VuZGlvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ0luY2VuZGlvKHRydWUpXHJcbiAgICAvLyBpZiAoc2VsZWN0ZWRJbWFnZXJpZXMubGVuZ3RoID09IDApIHtcclxuICAgIC8vICAgdG9hc3Qud2FybmluZyhgRGViZSBzZWxlY2Npb25hciB1bmEgaW1hZ2VuIGFudGVzIGRlIGVqZWN1dGFyIGVzdGUgcHJvY2Vzb2AsIHtcclxuICAgIC8vICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAvLyAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgLy8gICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAvLyAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgLy8gICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgIC8vICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAvLyAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgIC8vICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAvLyAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgLy8gICB9KTtcclxuICAgIC8vICAgc2V0TG9hZGluZ0luY2VuZGlvKGZhbHNlKVxyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGxldCBpbWFnZW4xID0gc2VsZWN0ZWRJbWFnZXJpZXNbMF0/Lk9CSkVDVElEXHJcblxyXG4gICAgICAgICAgaWYgKCFpbWFnZW4xKSB7XHJcbiAgICAgICAgICAgIHRvYXN0Lndhcm5pbmcodChcImVycm9ySW1hZ2VcIiksIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZ0luY2VuZGlvKGZhbHNlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gQ29uc3RydWlyIGxhIFVSTCBjb24gbG9zIHBhcsOhbWV0cm9zXHJcbiAgICAgICAgICBjb25zdCBwcm9jZXNvID0gMjtcclxuICAgICAgICAgIGNvbnN0IGVudHJhZGEgPSBpbWFnZW4xXHJcbiAgICAgICAgICAvL0Rlc2Fycm9sbG9cclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9wcm94eT9wcm9jZXNvPSR7cHJvY2Vzb30mRW50cmFkYT0ke2VudHJhZGF9JnVybD0ke3NlbGVjdGVkU2Vuc29yLnVybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZ0luY2VuZGlvKGZhbHNlKVxyXG4gICAgICAgICAgfSk7O1xyXG5cclxuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBlbiBsYSBzb2xpY2l0dWQ6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmdJbmNlbmRpbyhmYWxzZSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgdXJsTGF5ZXIgPSByZXNwb25zZURhdGEuUG9saWdvbkdlb0pzb247XHJcblxyXG4gICAgICAgICAgYXdhaXQgY2FyZ2FyR2VvbWV0cmlhRW5NYXBhKHVybExheWVyLCBwcm9jZXNvKTtcclxuXHJcbiAgICAgICAgICBzZXRMb2FkaW5nSW5jZW5kaW8oZmFsc2UpXHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWwgY2FyZ2FyIGxhIGdlb21ldHLDrWEgZW4gZWwgbWFwYTpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IodChcImZpcmVFcnJvclwiKSwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBCb3VuY2UsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICAvLyB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW51bmRhY2lvbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldExvYWRpbmdJbnVuZGFjaW9uKHRydWUpXHJcbiAgICAgIGlmIChzZWxlY3RlZEltYWdlcmllcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHRvYXN0Lndhcm5pbmcoYERlYmUgc2VsZWNjaW9uYXIgdW5hIGltYWdlbiBhbnRlcyBkZSBlamVjdXRhciBlc3RlIHByb2Nlc29gLCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgICAgICAgIHRyYW5zaXRpb246IEJvdW5jZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRMb2FkaW5nSW51bmRhY2lvbihmYWxzZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgICAgIGxldCBpbWFnZW4xID0gc2VsZWN0ZWRJbWFnZXJpZXNbMF0/Lk9CSkVDVElEXHJcblxyXG4gICAgICAgICAgaWYgKGltYWdlbjEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGVuIGxhIGNhcmdhIGRlIGltYWdlbmVzOiAke2ltYWdlbjF9YCk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmdJbnVuZGFjaW9uKGZhbHNlKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIENvbnN0cnVpciBsYSBVUkwgY29uIGxvcyBwYXLDoW1ldHJvc1xyXG4gICAgICAgICAgY29uc3QgcHJvY2VzbyA9IDM7XHJcbiAgICAgICAgICBjb25zdCBlbnRyYWRhID0gaW1hZ2VuMVxyXG5cclxuXHJcbiAgICAgICAgICAvL0Rlc2Fycm9sbG9cclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9wcm94eT9wcm9jZXNvPSR7cHJvY2Vzb30mRW50cmFkYT0ke2VudHJhZGF9JnVybD0ke3NlbGVjdGVkU2Vuc29yLnVybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZ0ludW5kYWNpb24oZmFsc2UpXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgZW4gbGEgc29saWNpdHVkOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nSW51bmRhY2lvbihmYWxzZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICBjb25zdCB1cmxMYXllciA9IHJlc3BvbnNlRGF0YS5Qb2xpZ29uR2VvSnNvbjtcclxuXHJcbiAgICAgICAgICBhd2FpdCBjYXJnYXJHZW9tZXRyaWFFbk1hcGEodXJsTGF5ZXIsIHByb2Nlc28pO1xyXG4gICAgICAgICAgc2V0TG9hZGluZ0ludW5kYWNpb24oZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgdG9hc3QuZXJyb3IodChcImZsb29kRXJyb3JcIiksIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogQm91bmNlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xlYW5MYXllcnMgPSAoKSA9PiB7XHJcbiAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgY29uc3QgbGF5ZXIgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZmluZChsYXllciA9PiBsYXllci50aXRsZSA9PSB0KFwiZmlyZUxheWVyXCIpIHx8IGxheWVyLnRpdGxlID09IHQoXCJmbG9vZExheWVyXCIpKVxyXG4gICAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUobGF5ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2xlYW5MYXllcnMoKTtcclxuXHJcbiAgfSwgW3NlbGVjdGVkSW1hZ2VyaWVzLCBnZW9wcm9jZXNzXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldCB3aWRnZXRab25lQXJlYVwiPlxyXG4gICAgICB7cHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmIHByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3pvbmEtcmllc2dvLW1haW4tY29udGFpbmVyJz5cclxuICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nem9uYS1yaWVzZ28tY29udGFpbmVyJz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoND57dChcIndpZGdldExhYmVsXCIpfTwvaDQ+XHJcbiAgICAgICAgICAgIDxwPnt0KFwiZGVzY3JpcHRpb25cIil9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nem9uYS1yaWVzZ28tYnV0dG9ucyc+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsb2FkaW5nSW5jZW5kaW8gPT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9XCJwcmltYXJ5XCIgPlxyXG4gICAgICAgICAgICAgICAgICA8TG9hZGluZyB0eXBlPVwiRE9OVVRcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2luY2VuZGlvfSBzaXplPVwic21cIiB0eXBlPVwicHJpbWFyeVwiPnt0KFwiaW5jZW5kaW9cIil9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxvYWRpbmdJbnVuZGFjaW9uID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiB0eXBlPVwicHJpbWFyeVwiID5cclxuICAgICAgICAgICAgICAgICAgPExvYWRpbmcgdHlwZT1cIkRPTlVUXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtpbnVuZGFjaW9ufSBzaXplPVwic21cIiB0eXBlPVwicHJpbWFyeVwiPnt0KFwiaW51bmRhY2lvblwiKX08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==