(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalTransactionFailed"],{

/***/ "../ui/modal/modalTransactionFailed/index.js":
/*!***************************************************!*\
  !*** ../ui/modal/modalTransactionFailed/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalTransactionFailed/view.jsx\");\n\n\n\n\nvar select = function select() {\n  return {};\n};\n\nvar perform = function perform(dispatch) {\n  return {\n    closeModal: function closeModal() {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_1__[\"doHideModal\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxUcmFuc2FjdGlvbkZhaWxlZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbFRyYW5zYWN0aW9uRmFpbGVkL2luZGV4LmpzPzUwYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGRvSGlkZU1vZGFsIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9hcHAnO1xuaW1wb3J0IE1vZGFsVHJhbnNhY3Rpb25GYWlsZWQgZnJvbSAnLi92aWV3JztcblxuY29uc3Qgc2VsZWN0ID0gKCkgPT4gKHt9KTtcblxuY29uc3QgcGVyZm9ybSA9IGRpc3BhdGNoID0+ICh7XG4gIGNsb3NlTW9kYWw6ICgpID0+IGRpc3BhdGNoKGRvSGlkZU1vZGFsKCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHNlbGVjdCxcbiAgcGVyZm9ybVxuKShNb2RhbFRyYW5zYWN0aW9uRmFpbGVkKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modalTransactionFailed/index.js\n");

/***/ }),

/***/ "../ui/modal/modalTransactionFailed/view.jsx":
/*!***************************************************!*\
  !*** ../ui/modal/modalTransactionFailed/view.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config */ \"../config.js\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n\n\n\n\nvar ModalTransactionFailed = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ModalTransactionFailed, _React$PureComponent);\n\n  function ModalTransactionFailed() {\n    _classCallCheck(this, ModalTransactionFailed);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ModalTransactionFailed).apply(this, arguments));\n  }\n\n  _createClass(ModalTransactionFailed, [{\n    key: \"render\",\n    value: function render() {\n      var closeModal = this.props.closeModal;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n        isOpen: true,\n        contentLabel: __('Transaction failed'),\n        title: __('Transaction failed'),\n        onConfirmed: closeModal\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, __('Sorry about that. Contact %SITE_HELP_EMAIL% if you continue to have issues.', {\n        SITE_HELP_EMAIL: config__WEBPACK_IMPORTED_MODULE_2__[\"SITE_HELP_EMAIL\"]\n      })));\n    }\n  }]);\n\n  return ModalTransactionFailed;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalTransactionFailed);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxUcmFuc2FjdGlvbkZhaWxlZC92aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbFRyYW5zYWN0aW9uRmFpbGVkL3ZpZXcuanN4PzNmODkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ21vZGFsL21vZGFsJztcbmltcG9ydCB7IFNJVEVfSEVMUF9FTUFJTCB9IGZyb20gJ2NvbmZpZyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsb3NlTW9kYWw6ICgpID0+IHZvaWQsXG59O1xuXG5jbGFzcyBNb2RhbFRyYW5zYWN0aW9uRmFpbGVkIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbG9zZU1vZGFsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbCBpc09wZW4gY29udGVudExhYmVsPXtfXygnVHJhbnNhY3Rpb24gZmFpbGVkJyl9IHRpdGxlPXtfXygnVHJhbnNhY3Rpb24gZmFpbGVkJyl9IG9uQ29uZmlybWVkPXtjbG9zZU1vZGFsfT5cbiAgICAgICAgPHA+XG4gICAgICAgICAge19fKCdTb3JyeSBhYm91dCB0aGF0LiBDb250YWN0ICVTSVRFX0hFTFBfRU1BSUwlIGlmIHlvdSBjb250aW51ZSB0byBoYXZlIGlzc3Vlcy4nLCB7XG4gICAgICAgICAgICBTSVRFX0hFTFBfRU1BSUwsXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFRyYW5zYWN0aW9uRmFpbGVkO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQU1BOzs7O0FBYkE7QUFDQTtBQWVBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/modal/modalTransactionFailed/view.jsx\n");

/***/ })

}]);