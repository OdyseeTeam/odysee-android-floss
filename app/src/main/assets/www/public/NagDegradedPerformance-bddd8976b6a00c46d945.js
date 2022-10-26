(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NagDegradedPerformance"],{

/***/ "./component/nag-degraded-performance.jsx":
/*!************************************************!*\
  !*** ./component/nag-degraded-performance.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NagDegradedPerformance; });\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ \"../config.js\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var component_nag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/nag */ \"../ui/component/nag/index.js\");\n/* harmony import */ var component_i18nMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/i18nMessage */ \"../ui/component/i18nMessage/index.js\");\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n\n\n\n\n\nfunction NagDegradedPerformance(props) {\n  var onClose = props.onClose;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component_nag__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    type: \"error\",\n    message: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component_i18nMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      tokens: {\n        DOMAIN: config__WEBPACK_IMPORTED_MODULE_0__[\"DOMAIN\"],\n        more_information: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          button: \"link\",\n          label: __('more'),\n          href: \"https://help.odysee.tv/\"\n        })\n      }\n    }, \"%DOMAIN% performance may be degraded. You can try to use it, or wait 5 minutes and refresh. Please no crush us.\"),\n    actionText: __('Refresh'),\n    onClick: function onClick() {\n      return window.location.reload();\n    },\n    onClose: onClose\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbmFnLWRlZ3JhZGVkLXBlcmZvcm1hbmNlLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudC9uYWctZGVncmFkZWQtcGVyZm9ybWFuY2UuanN4PzU1ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCB7IERPTUFJTiB9IGZyb20gJ2NvbmZpZyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hZyBmcm9tICdjb21wb25lbnQvbmFnJztcbmltcG9ydCBJMThuTWVzc2FnZSBmcm9tICdjb21wb25lbnQvaTE4bk1lc3NhZ2UnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnQvYnV0dG9uJztcblxudHlwZSBQcm9wcyA9IHtcbiAgb25DbG9zZTogKCkgPT4gdm9pZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hZ0RlZ3JhZGVkUGVyZm9ybWFuY2UocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgb25DbG9zZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8TmFnXG4gICAgICB0eXBlPVwiZXJyb3JcIlxuICAgICAgbWVzc2FnZT17XG4gICAgICAgIDxJMThuTWVzc2FnZVxuICAgICAgICAgIHRva2Vucz17e1xuICAgICAgICAgICAgRE9NQUlOLFxuICAgICAgICAgICAgbW9yZV9pbmZvcm1hdGlvbjogPEJ1dHRvbiBidXR0b249XCJsaW5rXCIgbGFiZWw9e19fKCdtb3JlJyl9IGhyZWY9XCJodHRwczovL2hlbHAub2R5c2VlLnR2L1wiIC8+LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAlRE9NQUlOJSBwZXJmb3JtYW5jZSBtYXkgYmUgZGVncmFkZWQuIFlvdSBjYW4gdHJ5IHRvIHVzZSBpdCwgb3Igd2FpdCA1IG1pbnV0ZXMgYW5kIHJlZnJlc2guIFBsZWFzZSBubyBjcnVzaFxuICAgICAgICAgIHVzLlxuICAgICAgICA8L0kxOG5NZXNzYWdlPlxuICAgICAgfVxuICAgICAgYWN0aW9uVGV4dD17X18oJ1JlZnJlc2gnKX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKX1cbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFVQTtBQUNBO0FBQUE7QUFkQTtBQWVBO0FBZkE7QUFrQkE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/nag-degraded-performance.jsx\n");

/***/ })

}]);