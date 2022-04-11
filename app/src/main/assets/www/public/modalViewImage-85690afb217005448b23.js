(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalViewImage"],{

/***/ "../ui/modal/modalViewImage/index.js":
/*!*******************************************!*\
  !*** ../ui/modal/modalViewImage/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalViewImage/view.jsx\");\n\n\n\n\nvar perform = function perform(dispatch) {\n  return {\n    closeModal: function closeModal() {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_1__[\"doHideModal\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(null, perform)(_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxWaWV3SW1hZ2UvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vdWkvbW9kYWwvbW9kYWxWaWV3SW1hZ2UvaW5kZXguanM/N2M1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZG9IaWRlTW9kYWwgfSBmcm9tICdyZWR1eC9hY3Rpb25zL2FwcCc7XG5pbXBvcnQgTW9kYWxWaWV3SW1hZ2UgZnJvbSAnLi92aWV3JztcblxuY29uc3QgcGVyZm9ybSA9IGRpc3BhdGNoID0+ICh7XG4gIGNsb3NlTW9kYWw6ICgpID0+IGRpc3BhdGNoKGRvSGlkZU1vZGFsKCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgcGVyZm9ybSkoTW9kYWxWaWV3SW1hZ2UpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modalViewImage/index.js\n");

/***/ }),

/***/ "../ui/modal/modalViewImage/view.jsx":
/*!*******************************************!*\
  !*** ../ui/modal/modalViewImage/view.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ModalMobileSearch; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\n/* harmony import */ var react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-lightbox */ \"../node_modules/react-awesome-lightbox/build/index.js\");\n/* harmony import */ var react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_awesome_lightbox_build_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-lightbox/build/style.css */ \"../node_modules/react-awesome-lightbox/build/style.css\");\n/* harmony import */ var react_awesome_lightbox_build_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_lightbox_build_style_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ModalMobileSearch(props) {\n  var src = props.src,\n      title = props.title,\n      closeModal = props.closeModal;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n    onAborted: closeModal,\n    isOpen: true,\n    type: \"custom\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    image: src,\n    title: title,\n    onClose: closeModal\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxWaWV3SW1hZ2Uvdmlldy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vdWkvbW9kYWwvbW9kYWxWaWV3SW1hZ2Uvdmlldy5qc3g/MjFhYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnbW9kYWwvbW9kYWwnO1xuaW1wb3J0IExpZ2h0Ym94IGZyb20gJ3JlYWN0LWF3ZXNvbWUtbGlnaHRib3gnO1xuaW1wb3J0ICdyZWFjdC1hd2Vzb21lLWxpZ2h0Ym94L2J1aWxkL3N0eWxlLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nLFxuICB0aXRsZTogU3RyaW5nLFxuICBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWxNb2JpbGVTZWFyY2gocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgc3JjLCB0aXRsZSwgY2xvc2VNb2RhbCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgb25BYm9ydGVkPXtjbG9zZU1vZGFsfSBpc09wZW4gdHlwZT1cImN1c3RvbVwiPlxuICAgICAgPExpZ2h0Ym94IGltYWdlPXtzcmN9IHRpdGxlPXt0aXRsZX0gb25DbG9zZT17Y2xvc2VNb2RhbH0gLz5cbiAgICA8L01vZGFsPlxuICApO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/modal/modalViewImage/view.jsx\n");

/***/ })

}]);