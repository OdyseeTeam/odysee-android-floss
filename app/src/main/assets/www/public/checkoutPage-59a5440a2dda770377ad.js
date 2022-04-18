(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkoutPage"],{

/***/ "../ui/page/checkoutPage/credit-card-logos.png":
/*!*****************************************************!*\
  !*** ../ui/page/checkoutPage/credit-card-logos.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/credit-card-logos.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS9jaGVja291dFBhZ2UvY3JlZGl0LWNhcmQtbG9nb3MucG5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL3BhZ2UvY2hlY2tvdXRQYWdlL2NyZWRpdC1jYXJkLWxvZ29zLnBuZz80YTNmIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jcmVkaXQtY2FyZC1sb2dvcy5wbmdcIjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/page/checkoutPage/credit-card-logos.png\n");

/***/ }),

/***/ "../ui/page/checkoutPage/index.js":
/*!****************************************!*\
  !*** ../ui/page/checkoutPage/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"../ui/page/checkoutPage/view.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS9jaGVja291dFBhZ2UvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vdWkvcGFnZS9jaGVja291dFBhZ2UvaW5kZXguanM/NjAyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2tvdXRQYWdlIGZyb20gJy4vdmlldyc7XG5leHBvcnQgZGVmYXVsdCBDaGVja291dFBhZ2U7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/page/checkoutPage/index.js\n");

/***/ }),

/***/ "../ui/page/checkoutPage/view.jsx":
/*!****************************************!*\
  !*** ../ui/page/checkoutPage/view.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CheckoutPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var component_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component/page */ \"../ui/component/page/index.js\");\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var component_common_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/common/card */ \"../ui/component/common/card.jsx\");\n/* harmony import */ var _credit_card_logos_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./credit-card-logos.png */ \"../ui/page/checkoutPage/credit-card-logos.png\");\n/* harmony import */ var _credit_card_logos_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_credit_card_logos_png__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction CheckoutPage() {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    authPage: true\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_common_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: __('Checkout'),\n    subtitle: __('Your cart contains 1 item.'),\n    body: react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n      className: \"card--inline card--section card--highlighted\"\n    }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"strong\", null, __('lbry.tv Premium - 1 month')), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, \"$5 per month\")),\n    actions: react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n      className: \"section__actions\"\n    }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      button: \"primary\",\n      label: __('Checkout')\n    }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", {\n      src: _credit_card_logos_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n      style: {\n        height: '1.5rem'\n      }\n    })), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n      className: \"help\"\n    }, \"We will refund no questions asked within 30 days.\"))\n  }));\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS9jaGVja291dFBhZ2Uvdmlldy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vdWkvcGFnZS9jaGVja291dFBhZ2Uvdmlldy5qc3g/MjdiNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnY29tcG9uZW50L3BhZ2UnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnQvYnV0dG9uJztcbmltcG9ydCBDYXJkIGZyb20gJ2NvbXBvbmVudC9jb21tb24vY2FyZCc7XG5pbXBvcnQgQ3JlZGl0Q2FyZHMgZnJvbSAnLi9jcmVkaXQtY2FyZC1sb2dvcy5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja291dFBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2UgYXV0aFBhZ2U+XG4gICAgICA8Q2FyZFxuICAgICAgICB0aXRsZT17X18oJ0NoZWNrb3V0Jyl9XG4gICAgICAgIHN1YnRpdGxlPXtfXygnWW91ciBjYXJ0IGNvbnRhaW5zIDEgaXRlbS4nKX1cbiAgICAgICAgYm9keT17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLS1pbmxpbmUgY2FyZC0tc2VjdGlvbiBjYXJkLS1oaWdobGlnaHRlZFwiPlxuICAgICAgICAgICAgPHN0cm9uZz57X18oJ2xicnkudHYgUHJlbWl1bSAtIDEgbW9udGgnKX08L3N0cm9uZz5cbiAgICAgICAgICAgIDxkaXY+JDUgcGVyIG1vbnRoPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX19hY3Rpb25zXCI+XG4gICAgICAgICAgICA8QnV0dG9uIGJ1dHRvbj1cInByaW1hcnlcIiBsYWJlbD17X18oJ0NoZWNrb3V0Jyl9IC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17Q3JlZGl0Q2FyZHN9IHN0eWxlPXt7IGhlaWdodDogJzEuNXJlbScgfX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwXCI+V2Ugd2lsbCByZWZ1bmQgbm8gcXVlc3Rpb25zIGFza2VkIHdpdGhpbiAzMCBkYXlzLjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBZkE7QUFxQkE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/page/checkoutPage/view.jsx\n");

/***/ })

}]);