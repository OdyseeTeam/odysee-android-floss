(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalFileTimeout"],{

/***/ "../ui/modal/modalFileTimeout/index.js":
/*!*********************************************!*\
  !*** ../ui/modal/modalFileTimeout/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/selectors/claims */ \"../ui/redux/selectors/claims.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalFileTimeout/view.jsx\");\n\n\n\n\n\nvar select = function select(state, props) {\n  return {\n    metadata: Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__[\"makeSelectMetadataForUri\"])(props.uri)(state)\n  };\n};\n\nvar perform = function perform(dispatch) {\n  return {\n    closeModal: function closeModal() {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_2__[\"doHideModal\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxGaWxlVGltZW91dC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbEZpbGVUaW1lb3V0L2luZGV4LmpzPzk3MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IG1ha2VTZWxlY3RNZXRhZGF0YUZvclVyaSB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9jbGFpbXMnO1xuaW1wb3J0IHsgZG9IaWRlTW9kYWwgfSBmcm9tICdyZWR1eC9hY3Rpb25zL2FwcCc7XG5pbXBvcnQgTW9kYWxGaWxlVGltZW91dCBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBzZWxlY3QgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuICBtZXRhZGF0YTogbWFrZVNlbGVjdE1ldGFkYXRhRm9yVXJpKHByb3BzLnVyaSkoc3RhdGUpLFxufSk7XG5cbmNvbnN0IHBlcmZvcm0gPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGNsb3NlTW9kYWw6ICgpID0+IGRpc3BhdGNoKGRvSGlkZU1vZGFsKCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0LCBwZXJmb3JtKShNb2RhbEZpbGVUaW1lb3V0KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/modal/modalFileTimeout/index.js\n");

/***/ }),

/***/ "../ui/modal/modalFileTimeout/view.jsx":
/*!*********************************************!*\
  !*** ../ui/modal/modalFileTimeout/view.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n\n\n\nvar ModalFileTimeout = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ModalFileTimeout, _React$PureComponent);\n\n  function ModalFileTimeout() {\n    _classCallCheck(this, ModalFileTimeout);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ModalFileTimeout).apply(this, arguments));\n  }\n\n  _createClass(ModalFileTimeout, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          uri = _this$props.uri,\n          title = _this$props.metadata.title,\n          closeModal = _this$props.closeModal;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n        isOpen: true,\n        title: __('Unable to download'),\n        contentLabel: __('Download failed'),\n        onConfirmed: closeModal\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"error-modal__error-list\"\n      }, __('LBRY was unable to download the stream'), \":\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, title ? \"\\\"\".concat(title, \"\\\"\") : uri))));\n    }\n  }]);\n\n  return ModalFileTimeout;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalFileTimeout);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxGaWxlVGltZW91dC92aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbEZpbGVUaW1lb3V0L3ZpZXcuanN4P2U3Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ21vZGFsL21vZGFsJztcblxudHlwZSBQcm9wcyA9IHtcbiAgdXJpOiBzdHJpbmcsXG4gIG1ldGFkYXRhOiBTdHJlYW1NZXRhZGF0YSxcbiAgY2xvc2VNb2RhbDogKCkgPT4gdm9pZCxcbn07XG5cbmNsYXNzIE1vZGFsRmlsZVRpbWVvdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB1cmksXG4gICAgICBtZXRhZGF0YTogeyB0aXRsZSB9LFxuICAgICAgY2xvc2VNb2RhbCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgaXNPcGVuIHRpdGxlPXtfXygnVW5hYmxlIHRvIGRvd25sb2FkJyl9IGNvbnRlbnRMYWJlbD17X18oJ0Rvd25sb2FkIGZhaWxlZCcpfSBvbkNvbmZpcm1lZD17Y2xvc2VNb2RhbH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLW1vZGFsX19lcnJvci1saXN0XCI+XG4gICAgICAgICAge19fKCdMQlJZIHdhcyB1bmFibGUgdG8gZG93bmxvYWQgdGhlIHN0cmVhbScpfTpcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGI+e3RpdGxlID8gYFwiJHt0aXRsZX1cImAgOiB1cml9PC9iPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3A+XG4gICAgICA8L01vZGFsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxGaWxlVGltZW91dDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQVFBOzs7O0FBbEJBO0FBQ0E7QUFvQkE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/modal/modalFileTimeout/view.jsx\n");

/***/ })

}]);