(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalMembershipSplash"],{

/***/ "../ui/modal/modalMembershipSplash/index.js":
/*!**************************************************!*\
  !*** ../ui/modal/modalMembershipSplash/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalMembershipSplash/view.jsx\");\n\n\n\n\nvar perform = function perform(dispatch) {\n  return {\n    closeModal: function closeModal() {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_1__[\"doHideModal\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(null, perform)(_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxNZW1iZXJzaGlwU3BsYXNoL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsTWVtYmVyc2hpcFNwbGFzaC9pbmRleC5qcz8zYTQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkb0hpZGVNb2RhbCB9IGZyb20gJ3JlZHV4L2FjdGlvbnMvYXBwJztcbmltcG9ydCBNb2RhbE1lbWJlcnNoaXBTcGxhc2ggZnJvbSAnLi92aWV3JztcblxuY29uc3QgcGVyZm9ybSA9IChkaXNwYXRjaCkgPT4gKHtcbiAgY2xvc2VNb2RhbDogKCkgPT4gZGlzcGF0Y2goZG9IaWRlTW9kYWwoKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBwZXJmb3JtKShNb2RhbE1lbWJlcnNoaXBTcGxhc2gpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modalMembershipSplash/index.js\n");

/***/ }),

/***/ "../ui/modal/modalMembershipSplash/view.jsx":
/*!**************************************************!*\
  !*** ../ui/modal/modalMembershipSplash/view.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\n/* harmony import */ var component_membershipSplash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/membershipSplash */ \"../ui/component/membershipSplash/index.js\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n\n\n\n\nvar ModalMembershipSplash = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ModalMembershipSplash, _React$PureComponent);\n\n  function ModalMembershipSplash() {\n    _classCallCheck(this, ModalMembershipSplash);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ModalMembershipSplash).apply(this, arguments));\n  }\n\n  _createClass(ModalMembershipSplash, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          closeModal = _this$props.closeModal,\n          uri = _this$props.uri,\n          claimIsMine = _this$props.claimIsMine;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n        onAborted: closeModal,\n        isOpen: true,\n        type: \"card\",\n        width: \"wide\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_membershipSplash__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        uri: uri,\n        claimIsMine: claimIsMine,\n        onCancel: closeModal\n      }));\n    }\n  }]);\n\n  return ModalMembershipSplash;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalMembershipSplash);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxNZW1iZXJzaGlwU3BsYXNoL3ZpZXcuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsTWVtYmVyc2hpcFNwbGFzaC92aWV3LmpzeD9kMDliIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdtb2RhbC9tb2RhbCc7XG5pbXBvcnQgTWVtYmVyc2hpcFNwbGFzaCBmcm9tICdjb21wb25lbnQvbWVtYmVyc2hpcFNwbGFzaCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsb3NlTW9kYWw6ICgpID0+IHZvaWQsXG4gIHVyaTogc3RyaW5nLFxuICBjbGFpbUlzTWluZTogYm9vbGVhbixcbiAgaXNTdXBwb3J0OiBib29sZWFuLFxufTtcblxuY2xhc3MgTW9kYWxNZW1iZXJzaGlwU3BsYXNoIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbG9zZU1vZGFsLCB1cmksIGNsYWltSXNNaW5lIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbCBvbkFib3J0ZWQ9e2Nsb3NlTW9kYWx9IGlzT3BlbiB0eXBlPVwiY2FyZFwiIHdpZHRoPVwid2lkZVwiPlxuICAgICAgICA8TWVtYmVyc2hpcFNwbGFzaCB1cmk9e3VyaX0gY2xhaW1Jc01pbmU9e2NsYWltSXNNaW5lfSBvbkNhbmNlbD17Y2xvc2VNb2RhbH0gLz5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbE1lbWJlcnNoaXBTcGxhc2g7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFUQTtBQUNBO0FBV0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/modal/modalMembershipSplash/view.jsx\n");

/***/ })

}]);