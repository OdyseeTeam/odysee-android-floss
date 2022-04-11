(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["htmlViewer"],{

/***/ "../ui/component/viewers/htmlViewer.jsx":
/*!**********************************************!*\
  !*** ../ui/component/viewers/htmlViewer.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var util_context_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util/context-menu */ \"../ui/util/context-menu.js\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n\n\n\nvar HtmlViewer = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(HtmlViewer, _React$PureComponent);\n\n  function HtmlViewer(props) {\n    var _this;\n\n    _classCallCheck(this, HtmlViewer);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(HtmlViewer).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"iframe\", void 0);\n\n    _this.state = {\n      loading: true\n    };\n    _this.iframe = react__WEBPACK_IMPORTED_MODULE_0__[\"createRef\"]();\n    return _this;\n  }\n\n  _createClass(HtmlViewer, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var resize = function resize() {\n        var _this2$iframe$current = _this2.iframe.current.contentDocument.body,\n            scrollHeight = _this2$iframe$current.scrollHeight,\n            scrollWidth = _this2$iframe$current.scrollWidth;\n        _this2.iframe.current.style.height = \"\".concat(scrollHeight, \"px\");\n        _this2.iframe.current.style.width = \"\".concat(scrollWidth, \"px\");\n      };\n\n      this.iframe.current.onload = function () {\n        _this2.setState({\n          loading: false\n        });\n\n        resize();\n      };\n\n      this.iframe.current.resize = function () {\n        return resize();\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var source = this.props.source;\n      var loading = this.state.loading;\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n        className: \"file-viewer file-viewer--html file-viewer--iframe\",\n        onContextMenu: util_context_menu__WEBPACK_IMPORTED_MODULE_1__[\"stopContextMenu\"]\n      }, loading && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n        className: \"placeholder--text-document\"\n      }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"iframe\", {\n        ref: this.iframe,\n        hidden: loading,\n        sandbox: \"\",\n        title: __('File preview'),\n        src: source\n      }));\n    }\n  }]);\n\n  return HtmlViewer;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HtmlViewer);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L3ZpZXdlcnMvaHRtbFZpZXdlci5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vdWkvY29tcG9uZW50L3ZpZXdlcnMvaHRtbFZpZXdlci5qc3g/ZWU4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3RvcENvbnRleHRNZW51IH0gZnJvbSAndXRpbC9jb250ZXh0LW1lbnUnO1xuXG50eXBlIFByb3BzID0ge1xuICBzb3VyY2U6IHN0cmluZyxcbn07XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGxvYWRpbmc6IGJvb2xlYW4sXG59O1xuXG5jbGFzcyBIdG1sVmlld2VyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgaWZyYW1lOiBSZWFjdC5FbGVtZW50UmVmPGFueT47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBsb2FkaW5nOiB0cnVlIH07XG4gICAgdGhpcy5pZnJhbWUgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgc2Nyb2xsSGVpZ2h0LCBzY3JvbGxXaWR0aCB9ID0gdGhpcy5pZnJhbWUuY3VycmVudC5jb250ZW50RG9jdW1lbnQuYm9keTtcbiAgICAgIHRoaXMuaWZyYW1lLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7c2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgIHRoaXMuaWZyYW1lLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHtzY3JvbGxXaWR0aH1weGA7XG4gICAgfTtcbiAgICB0aGlzLmlmcmFtZS5jdXJyZW50Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIHJlc2l6ZSgpO1xuICAgIH07XG4gICAgdGhpcy5pZnJhbWUuY3VycmVudC5yZXNpemUgPSAoKSA9PiByZXNpemUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNvdXJjZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS12aWV3ZXIgZmlsZS12aWV3ZXItLWh0bWwgZmlsZS12aWV3ZXItLWlmcmFtZVwiIG9uQ29udGV4dE1lbnU9e3N0b3BDb250ZXh0TWVudX0+XG4gICAgICAgIHtsb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwicGxhY2Vob2xkZXItLXRleHQtZG9jdW1lbnRcIiAvPn1cbiAgICAgICAge31cbiAgICAgICAge31cbiAgICAgICAgPGlmcmFtZSByZWY9e3RoaXMuaWZyYW1lfSBoaWRkZW49e2xvYWRpbmd9IHNhbmRib3g9XCJcIiB0aXRsZT17X18oJ0ZpbGUgcHJldmlldycpfSBzcmM9e3NvdXJjZX0gLz5cbiAgICAgICAge31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSHRtbFZpZXdlcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFTQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBakNBO0FBQ0E7QUFtQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/component/viewers/htmlViewer.jsx\n");

/***/ })

}]);