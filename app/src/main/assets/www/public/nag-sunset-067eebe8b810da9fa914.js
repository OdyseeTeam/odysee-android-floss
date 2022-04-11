(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nag-sunset"],{

/***/ "./component/nag-sunset.jsx":
/*!**********************************!*\
  !*** ./component/nag-sunset.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NagSunset; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var component_common_nag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component/common/nag */ \"../ui/component/common/nag.jsx\");\n/* harmony import */ var component_i18nMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/i18nMessage */ \"../ui/component/i18nMessage/index.js\");\n/* harmony import */ var constants_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/pages */ \"../ui/constants/pages.js\");\n/* harmony import */ var constants_pages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(constants_pages__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _ui_component_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/component/button */ \"../ui/component/button/index.js\");\n\n\n\n\n\n\nfunction NagSunset(props) {\n  var email = props.email,\n      onClose = props.onClose;\n\n  var _useHistory = Object(react_router__WEBPACK_IMPORTED_MODULE_4__[\"useHistory\"])(),\n      push = _useHistory.push;\n\n  var handleOnClick = function handleOnClick() {\n    onClose();\n    push(\"/$/\".concat(constants_pages__WEBPACK_IMPORTED_MODULE_3__[\"AUTH_SIGNIN\"]));\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_common_nag__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    type: \"helpful\",\n    message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_i18nMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      tokens: {\n        more: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_component_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          button: 'link',\n          label: __('Learn more'),\n          href: \"https://odysee.com/@lbry:3f/retirement\"\n        })\n      }\n    }, \"lbry.tv has been retired. You have been magically transported to Odysee.com. %more%\"),\n    actionText: __('Sign In'),\n    onClick: !email ? handleOnClick : undefined,\n    onClose: onClose\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbmFnLXN1bnNldC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbmFnLXN1bnNldC5qc3g/NDIzYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYWcgZnJvbSAnY29tcG9uZW50L2NvbW1vbi9uYWcnO1xuaW1wb3J0IEkxOG5NZXNzYWdlIGZyb20gJ2NvbXBvbmVudC9pMThuTWVzc2FnZSc7XG5pbXBvcnQgKiBhcyBQQUdFUyBmcm9tICdjb25zdGFudHMvcGFnZXMnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL3VpL2NvbXBvbmVudC9idXR0b24nO1xuXG50eXBlIFByb3BzID0ge1xuICBlbWFpbD86IFVzZXIsXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQsXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmFnU3Vuc2V0KHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGVtYWlsLCBvbkNsb3NlIH0gPSBwcm9wcztcbiAgY29uc3QgeyBwdXNoIH0gPSB1c2VIaXN0b3J5KCk7XG5cbiAgY29uc3QgaGFuZGxlT25DbGljayA9ICgpID0+IHtcbiAgICBvbkNsb3NlKCk7XG4gICAgcHVzaChgLyQvJHtQQUdFUy5BVVRIX1NJR05JTn1gKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8TmFnXG4gICAgICB0eXBlPVwiaGVscGZ1bFwiXG4gICAgICBtZXNzYWdlPXtcbiAgICAgICAgPEkxOG5NZXNzYWdlXG4gICAgICAgICAgdG9rZW5zPXt7XG4gICAgICAgICAgICBtb3JlOiA8QnV0dG9uIGJ1dHRvbj17J2xpbmsnfSBsYWJlbD17X18oJ0xlYXJuIG1vcmUnKX0gaHJlZj1cImh0dHBzOi8vb2R5c2VlLmNvbS9AbGJyeTozZi9yZXRpcmVtZW50XCIgLz4sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIGxicnkudHYgaGFzIGJlZW4gcmV0aXJlZC4gWW91IGhhdmUgYmVlbiBtYWdpY2FsbHkgdHJhbnNwb3J0ZWQgdG8gT2R5c2VlLmNvbS4gJW1vcmUlXG4gICAgICAgIDwvSTE4bk1lc3NhZ2U+XG4gICAgICB9XG4gICAgICBhY3Rpb25UZXh0PXtfXygnU2lnbiBJbicpfVxuICAgICAgb25DbGljaz17IWVtYWlsID8gaGFuZGxlT25DbGljayA6IHVuZGVmaW5lZH1cbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBYkE7QUFnQkE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/nag-sunset.jsx\n");

/***/ })

}]);