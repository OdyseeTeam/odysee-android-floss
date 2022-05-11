(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalWalletUnlock"],{

/***/ "../ui/modal/modal.jsx":
/*!*****************************!*\
  !*** ../ui/modal/modal.jsx ***!
  \*****************************/
/*! exports provided: Modal, ExpandableModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExpandableModal\", function() { return ExpandableModal; });\n/* harmony import */ var constants_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/icons */ \"../ui/constants/icons.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"../node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var effects_use_screensize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! effects/use-screensize */ \"../ui/effects/use-screensize.js\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n\n  var target = _objectWithoutPropertiesLoose(source, excluded);\n\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n} // These should probably just be combined into one modal component\n\n\n\n\n\n\n\n\nfunction Modal(props) {\n  var children = props.children,\n      _props$type = props.type,\n      type = _props$type === void 0 ? 'alert' : _props$type,\n      _props$confirmButtonL = props.confirmButtonLabel,\n      confirmButtonLabel = _props$confirmButtonL === void 0 ? __('OK') : _props$confirmButtonL,\n      _props$confirmButtonD = props.confirmButtonDisabled,\n      confirmButtonDisabled = _props$confirmButtonD === void 0 ? false : _props$confirmButtonD,\n      onConfirmed = props.onConfirmed,\n      _props$abortButtonLab = props.abortButtonLabel,\n      abortButtonLabel = _props$abortButtonLab === void 0 ? __('Cancel') : _props$abortButtonLab,\n      _props$abortButtonDis = props.abortButtonDisabled,\n      abortButtonDisabled = _props$abortButtonDis === void 0 ? false : _props$abortButtonDis,\n      onAborted = props.onAborted,\n      className = props.className,\n      title = props.title,\n      modalProps = _objectWithoutProperties(props, [\"children\", \"type\", \"confirmButtonLabel\", \"confirmButtonDisabled\", \"onConfirmed\", \"abortButtonLabel\", \"abortButtonDisabled\", \"onAborted\", \"className\", \"title\"]);\n\n  var isMobile = Object(effects_use_screensize__WEBPACK_IMPORTED_MODULE_5__[\"useIsMobile\"])();\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, modalProps, {\n    onRequestClose: onAborted || onConfirmed,\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('modal', className, {\n      'modal--card-internal': type === 'card'\n    }),\n    overlayClassName: \"modal-overlay\"\n  }), title && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"h1\", {\n    className: \"card__title card__title--deprecated\"\n  }, title), type === 'card' && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    iconSize: isMobile ? 24 : undefined,\n    button: \"close\",\n    \"aria-label\": __('Close'),\n    icon: constants_icons__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE\"],\n    onClick: onAborted\n  }), children, type === 'custom' || type === 'card' ? null : // custom modals define their own buttons\n  react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    className: \"card__actions\"\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: \"primary\",\n    label: confirmButtonLabel,\n    disabled: confirmButtonDisabled,\n    onClick: onConfirmed\n  }), type === 'confirm' ? react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: \"link\",\n    label: abortButtonLabel,\n    disabled: abortButtonDisabled,\n    onClick: onAborted\n  }) : null));\n}\nvar ExpandableModal = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ExpandableModal, _React$PureComponent);\n\n  function ExpandableModal(props) {\n    var _this;\n\n    _classCallCheck(this, ExpandableModal);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpandableModal).call(this, props));\n    _this.state = {\n      expanded: false\n    };\n    return _this;\n  }\n\n  _createClass(ExpandableModal, [{\n    key: \"toggleExpanded\",\n    value: function toggleExpanded() {\n      this.setState({\n        expanded: !this.state.expanded\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Modal, _extends({\n        type: \"custom\"\n      }, this.props), this.props.children, this.state.expanded ? react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", null, this.props.extraContent) : null, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"card__actions\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"primary\",\n        label: this.props.confirmButtonLabel,\n        onClick: this.props.onConfirmed\n      }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"link\",\n        label: !this.state.expanded ? this.props.expandButtonLabel : this.props.hideButtonLabel,\n        onClick: function onClick() {\n          _this2.toggleExpanded();\n        }\n      })));\n    }\n  }]);\n\n  return ExpandableModal;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"PureComponent\"]);\n\n_defineProperty(ExpandableModal, \"defaultProps\", {\n  confirmButtonLabel: __('OK'),\n  expandButtonLabel: __('Show More...'),\n  hideButtonLabel: __('Show Less')\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWwuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsLmpzeD9mMDY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vLyBUaGVzZSBzaG91bGQgcHJvYmFibHkganVzdCBiZSBjb21iaW5lZCBpbnRvIG9uZSBtb2RhbCBjb21wb25lbnRcbmltcG9ydCAqIGFzIElDT05TIGZyb20gJ2NvbnN0YW50cy9pY29ucyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudC9idXR0b24nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyB1c2VJc01vYmlsZSB9IGZyb20gJ2VmZmVjdHMvdXNlLXNjcmVlbnNpemUnO1xuXG50eXBlIE1vZGFsUHJvcHMgPSB7XG4gIHR5cGU/OiBzdHJpbmcsXG4gIG92ZXJsYXk/OiBib29sZWFuLFxuICBjb25maXJtQnV0dG9uTGFiZWw/OiBzdHJpbmcsXG4gIGFib3J0QnV0dG9uTGFiZWw/OiBzdHJpbmcsXG4gIGNvbmZpcm1CdXR0b25EaXNhYmxlZD86IGJvb2xlYW4sXG4gIGFib3J0QnV0dG9uRGlzYWJsZWQ/OiBib29sZWFuLFxuICBvbkNvbmZpcm1lZD86IChhbnkpID0+IGFueSxcbiAgb25BYm9ydGVkPzogKGFueSkgPT4gYW55LFxuICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgZXh0cmFDb250ZW50PzogUmVhY3QuTm9kZSxcbiAgZXhwYW5kQnV0dG9uTGFiZWw/OiBzdHJpbmcsXG4gIGhpZGVCdXR0b25MYWJlbD86IHN0cmluZyxcbiAgdGl0bGU/OiBzdHJpbmcgfCBSZWFjdC5Ob2RlLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsKHByb3BzOiBNb2RhbFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICB0eXBlID0gJ2FsZXJ0JyxcbiAgICBjb25maXJtQnV0dG9uTGFiZWwgPSBfXygnT0snKSxcbiAgICBjb25maXJtQnV0dG9uRGlzYWJsZWQgPSBmYWxzZSxcbiAgICBvbkNvbmZpcm1lZCxcbiAgICBhYm9ydEJ1dHRvbkxhYmVsID0gX18oJ0NhbmNlbCcpLFxuICAgIGFib3J0QnV0dG9uRGlzYWJsZWQgPSBmYWxzZSxcbiAgICBvbkFib3J0ZWQsXG4gICAgY2xhc3NOYW1lLFxuICAgIHRpdGxlLFxuICAgIC4uLm1vZGFsUHJvcHNcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlSXNNb2JpbGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdE1vZGFsXG4gICAgICB7Li4ubW9kYWxQcm9wc31cbiAgICAgIG9uUmVxdWVzdENsb3NlPXtvbkFib3J0ZWQgfHwgb25Db25maXJtZWR9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21vZGFsJywgY2xhc3NOYW1lLCB7XG4gICAgICAgICdtb2RhbC0tY2FyZC1pbnRlcm5hbCc6IHR5cGUgPT09ICdjYXJkJyxcbiAgICAgIH0pfVxuICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIlxuICAgID5cbiAgICAgIHt0aXRsZSAmJiA8aDEgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGUgY2FyZF9fdGl0bGUtLWRlcHJlY2F0ZWRcIj57dGl0bGV9PC9oMT59XG4gICAgICB7dHlwZSA9PT0gJ2NhcmQnICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGljb25TaXplPXtpc01vYmlsZSA/IDI0IDogdW5kZWZpbmVkfVxuICAgICAgICAgIGJ1dHRvbj1cImNsb3NlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPXtfXygnQ2xvc2UnKX1cbiAgICAgICAgICBpY29uPXtJQ09OUy5SRU1PVkV9XG4gICAgICAgICAgb25DbGljaz17b25BYm9ydGVkfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHt0eXBlID09PSAnY3VzdG9tJyB8fCB0eXBlID09PSAnY2FyZCcgPyBudWxsIDogKCAvLyBjdXN0b20gbW9kYWxzIGRlZmluZSB0aGVpciBvd24gYnV0dG9uc1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2FjdGlvbnNcIj5cbiAgICAgICAgICA8QnV0dG9uIGJ1dHRvbj1cInByaW1hcnlcIiBsYWJlbD17Y29uZmlybUJ1dHRvbkxhYmVsfSBkaXNhYmxlZD17Y29uZmlybUJ1dHRvbkRpc2FibGVkfSBvbkNsaWNrPXtvbkNvbmZpcm1lZH0gLz5cbiAgICAgICAgICB7dHlwZSA9PT0gJ2NvbmZpcm0nID8gKFxuICAgICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJsaW5rXCIgbGFiZWw9e2Fib3J0QnV0dG9uTGFiZWx9IGRpc2FibGVkPXthYm9ydEJ1dHRvbkRpc2FibGVkfSBvbkNsaWNrPXtvbkFib3J0ZWR9IC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1JlYWN0TW9kYWw+XG4gICk7XG59XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGV4cGFuZGVkOiBib29sZWFuLFxufTtcblxuZXhwb3J0IGNsYXNzIEV4cGFuZGFibGVNb2RhbCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TW9kYWxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb25maXJtQnV0dG9uTGFiZWw6IF9fKCdPSycpLFxuICAgIGV4cGFuZEJ1dHRvbkxhYmVsOiBfXygnU2hvdyBNb3JlLi4uJyksXG4gICAgaGlkZUJ1dHRvbkxhYmVsOiBfXygnU2hvdyBMZXNzJyksXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IE1vZGFsUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICB0b2dnbGVFeHBhbmRlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsIHR5cGU9XCJjdXN0b21cIiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICB7dGhpcy5zdGF0ZS5leHBhbmRlZCA/IDxkaXY+e3RoaXMucHJvcHMuZXh0cmFDb250ZW50fTwvZGl2PiA6IG51bGx9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fYWN0aW9uc1wiPlxuICAgICAgICAgIDxCdXR0b24gYnV0dG9uPVwicHJpbWFyeVwiIGxhYmVsPXt0aGlzLnByb3BzLmNvbmZpcm1CdXR0b25MYWJlbH0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNvbmZpcm1lZH0gLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBidXR0b249XCJsaW5rXCJcbiAgICAgICAgICAgIGxhYmVsPXshdGhpcy5zdGF0ZS5leHBhbmRlZCA/IHRoaXMucHJvcHMuZXhwYW5kQnV0dG9uTGFiZWwgOiB0aGlzLnByb3BzLmhpZGVCdXR0b25MYWJlbH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlZCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBY0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFOQTtBQVFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBTUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFEQTtBQUdBO0FBbkJBO0FBQUE7QUFBQTtBQXFCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7QUF0Q0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQXVDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modal.jsx\n");

/***/ }),

/***/ "../ui/modal/modalWalletUnlock/index.js":
/*!**********************************************!*\
  !*** ../ui/modal/modalWalletUnlock/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/wallet */ \"../ui/redux/actions/wallet.js\");\n/* harmony import */ var redux_selectors_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/selectors/wallet */ \"../ui/redux/selectors/wallet.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalWalletUnlock/view.jsx\");\n\n\n\n\n\n\nvar select = function select(state) {\n  return {\n    walletUnlockSucceded: Object(redux_selectors_wallet__WEBPACK_IMPORTED_MODULE_2__[\"selectWalletUnlockSucceeded\"])(state)\n  };\n};\n\nvar perform = function perform(dispatch) {\n  return {\n    closeModal: function closeModal() {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_3__[\"doHideModal\"])());\n    },\n    quit: function quit() {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_3__[\"doQuit\"])());\n    },\n    unlockWallet: function unlockWallet(password) {\n      return dispatch(Object(redux_actions_wallet__WEBPACK_IMPORTED_MODULE_1__[\"doWalletUnlock\"])(password));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxXYWxsZXRVbmxvY2svaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vdWkvbW9kYWwvbW9kYWxXYWxsZXRVbmxvY2svaW5kZXguanM/M2Y2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZG9XYWxsZXRVbmxvY2sgfSBmcm9tICdyZWR1eC9hY3Rpb25zL3dhbGxldCc7XG5pbXBvcnQgeyBzZWxlY3RXYWxsZXRVbmxvY2tTdWNjZWVkZWQgfSBmcm9tICdyZWR1eC9zZWxlY3RvcnMvd2FsbGV0JztcbmltcG9ydCB7IGRvUXVpdCwgZG9IaWRlTW9kYWwgfSBmcm9tICdyZWR1eC9hY3Rpb25zL2FwcCc7XG5pbXBvcnQgTW9kYWxXYWxsZXRVbmxvY2sgZnJvbSAnLi92aWV3JztcblxuY29uc3Qgc2VsZWN0ID0gKHN0YXRlKSA9PiAoe1xuICB3YWxsZXRVbmxvY2tTdWNjZWRlZDogc2VsZWN0V2FsbGV0VW5sb2NrU3VjY2VlZGVkKHN0YXRlKSxcbn0pO1xuXG5jb25zdCBwZXJmb3JtID0gKGRpc3BhdGNoKSA9PiAoe1xuICBjbG9zZU1vZGFsOiAoKSA9PiBkaXNwYXRjaChkb0hpZGVNb2RhbCgpKSxcbiAgcXVpdDogKCkgPT4gZGlzcGF0Y2goZG9RdWl0KCkpLFxuICB1bmxvY2tXYWxsZXQ6IChwYXNzd29yZCkgPT4gZGlzcGF0Y2goZG9XYWxsZXRVbmxvY2socGFzc3dvcmQpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCwgcGVyZm9ybSkoTW9kYWxXYWxsZXRVbmxvY2spO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRUE7QUFBQTtBQUZBO0FBR0E7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUNBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/modal/modalWalletUnlock/index.js\n");

/***/ }),

/***/ "../ui/modal/modalWalletUnlock/view.jsx":
/*!**********************************************!*\
  !*** ../ui/modal/modalWalletUnlock/view.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var component_common_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component/common/form */ \"../ui/component/common/form.jsx\");\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var util_saved_passwords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util/saved-passwords */ \"../ui/util/saved-passwords.js\");\n/* harmony import */ var util_saved_passwords__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util_saved_passwords__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n\n\n\n\n\n\nvar ModalWalletUnlock = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ModalWalletUnlock, _React$PureComponent);\n\n  function ModalWalletUnlock() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, ModalWalletUnlock);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalWalletUnlock)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      password: '',\n      rememberPassword: false\n    });\n\n    return _this;\n  }\n\n  _createClass(ModalWalletUnlock, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          unlockWallet = _this$props.unlockWallet,\n          shouldTryWithBlankPassword = _this$props.shouldTryWithBlankPassword;\n      Object(util_saved_passwords__WEBPACK_IMPORTED_MODULE_4__[\"getSavedPassword\"])().then(function (p) {\n        if (p !== null) {\n          _this2.setState({\n            password: p,\n            rememberPassword: true\n          });\n\n          unlockWallet(p);\n        } else if (shouldTryWithBlankPassword) {\n          unlockWallet('');\n        }\n      });\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      var props = this.props;\n\n      if (props.walletUnlockSucceded === true) {\n        Object(util_saved_passwords__WEBPACK_IMPORTED_MODULE_4__[\"setSavedPassword\"])(this.state.password, this.state.rememberPassword);\n        props.closeModal();\n      }\n    }\n  }, {\n    key: \"onChangePassword\",\n    value: function onChangePassword(event) {\n      this.setState({\n        password: event.target.value\n      });\n    }\n  }, {\n    key: \"onChangeRememberPassword\",\n    value: function onChangeRememberPassword(event) {\n      this.setState({\n        rememberPassword: event.target.checked\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$props2 = this.props,\n          quit = _this$props2.quit,\n          unlockWallet = _this$props2.unlockWallet,\n          walletUnlockSucceded = _this$props2.walletUnlockSucceded;\n      var _this$state = this.state,\n          password = _this$state.password,\n          rememberPassword = _this$state.rememberPassword;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"], {\n        isOpen: true,\n        title: __('Unlock wallet'),\n        contentLabel: __('Unlock wallet'),\n        type: \"confirm\",\n        shouldCloseOnOverlayClick: false,\n        confirmButtonLabel: __('Unlock'),\n        abortButtonLabel: __('Exit'),\n        onConfirmed: function onConfirmed() {\n          return unlockWallet(password);\n        },\n        onAborted: quit\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, __('Your wallet has been encrypted with a local password. Please enter your wallet password to proceed.'), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"link\",\n        label: __('Learn more'),\n        href: \"https://lbry.com/faq/wallet-encryption\"\n      }), \".\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_common_form__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n        className: \"section\",\n        onSubmit: function onSubmit() {\n          return unlockWallet(password);\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_common_form__WEBPACK_IMPORTED_MODULE_1__[\"FormField\"], {\n        autoFocus: true,\n        error: walletUnlockSucceded === false ? 'Incorrect Password' : false,\n        label: __('Wallet Password'),\n        type: \"password\",\n        name: \"wallet-password\",\n        onChange: function onChange(event) {\n          return _this3.onChangePassword(event);\n        },\n        value: password || ''\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"fieldset-section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_common_form__WEBPACK_IMPORTED_MODULE_1__[\"FormField\"], {\n        label: __('Remember Password'),\n        type: \"checkbox\",\n        name: \"wallet-remember-password\",\n        onChange: function onChange(event) {\n          return _this3.onChangeRememberPassword(event);\n        },\n        checked: rememberPassword\n      }))));\n    }\n  }]);\n\n  return ModalWalletUnlock;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalWalletUnlock);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxXYWxsZXRVbmxvY2svdmlldy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vdWkvbW9kYWwvbW9kYWxXYWxsZXRVbmxvY2svdmlldy5qc3g/OGI5NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0sIEZvcm1GaWVsZCB9IGZyb20gJ2NvbXBvbmVudC9jb21tb24vZm9ybSc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ21vZGFsL21vZGFsJztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50L2J1dHRvbic7XG5pbXBvcnQgeyBnZXRTYXZlZFBhc3N3b3JkLCBzZXRTYXZlZFBhc3N3b3JkIH0gZnJvbSAndXRpbC9zYXZlZC1wYXNzd29yZHMnO1xuXG50eXBlIFByb3BzID0ge1xuICBxdWl0OiAoKSA9PiB2b2lkLFxuICBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkLFxuICB1bmxvY2tXYWxsZXQ6ICg/c3RyaW5nKSA9PiB2b2lkLFxuICB3YWxsZXRVbmxvY2tTdWNjZWRlZDogYm9vbGVhbixcbiAgc2hvdWxkVHJ5V2l0aEJsYW5rUGFzc3dvcmQ6IGJvb2xlYW4sXG59O1xuXG50eXBlIFN0YXRlID0ge1xuICBwYXNzd29yZDogc3RyaW5nLFxuICByZW1lbWJlclBhc3N3b3JkOiBib29sZWFuLFxufTtcblxuY2xhc3MgTW9kYWxXYWxsZXRVbmxvY2sgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZSA9IHtcbiAgICBwYXNzd29yZDogJycsXG4gICAgcmVtZW1iZXJQYXNzd29yZDogZmFsc2UsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyB1bmxvY2tXYWxsZXQsIHNob3VsZFRyeVdpdGhCbGFua1Bhc3N3b3JkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgZ2V0U2F2ZWRQYXNzd29yZCgpLnRoZW4ocCA9PiB7XG4gICAgICBpZiAocCAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IHAsIHJlbWVtYmVyUGFzc3dvcmQ6IHRydWUgfSk7XG4gICAgICAgIHVubG9ja1dhbGxldChwKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkVHJ5V2l0aEJsYW5rUGFzc3dvcmQpIHtcbiAgICAgICAgdW5sb2NrV2FsbGV0KCcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcblxuICAgIGlmIChwcm9wcy53YWxsZXRVbmxvY2tTdWNjZWRlZCA9PT0gdHJ1ZSkge1xuICAgICAgc2V0U2F2ZWRQYXNzd29yZCh0aGlzLnN0YXRlLnBhc3N3b3JkLCB0aGlzLnN0YXRlLnJlbWVtYmVyUGFzc3dvcmQpO1xuICAgICAgcHJvcHMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlUGFzc3dvcmQoZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8Kj4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIG9uQ2hhbmdlUmVtZW1iZXJQYXNzd29yZChldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbWVtYmVyUGFzc3dvcmQ6IGV2ZW50LnRhcmdldC5jaGVja2VkIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcXVpdCwgdW5sb2NrV2FsbGV0LCB3YWxsZXRVbmxvY2tTdWNjZWRlZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgcGFzc3dvcmQsIHJlbWVtYmVyUGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW5cbiAgICAgICAgdGl0bGU9e19fKCdVbmxvY2sgd2FsbGV0Jyl9XG4gICAgICAgIGNvbnRlbnRMYWJlbD17X18oJ1VubG9jayB3YWxsZXQnKX1cbiAgICAgICAgdHlwZT1cImNvbmZpcm1cIlxuICAgICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrPXtmYWxzZX1cbiAgICAgICAgY29uZmlybUJ1dHRvbkxhYmVsPXtfXygnVW5sb2NrJyl9XG4gICAgICAgIGFib3J0QnV0dG9uTGFiZWw9e19fKCdFeGl0Jyl9XG4gICAgICAgIG9uQ29uZmlybWVkPXsoKSA9PiB1bmxvY2tXYWxsZXQocGFzc3dvcmQpfVxuICAgICAgICBvbkFib3J0ZWQ9e3F1aXR9XG4gICAgICA+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtfXygnWW91ciB3YWxsZXQgaGFzIGJlZW4gZW5jcnlwdGVkIHdpdGggYSBsb2NhbCBwYXNzd29yZC4gUGxlYXNlIGVudGVyIHlvdXIgd2FsbGV0IHBhc3N3b3JkIHRvIHByb2NlZWQuJyl9eycgJ31cbiAgICAgICAgICA8QnV0dG9uIGJ1dHRvbj1cImxpbmtcIiBsYWJlbD17X18oJ0xlYXJuIG1vcmUnKX0gaHJlZj1cImh0dHBzOi8vbGJyeS5jb20vZmFxL3dhbGxldC1lbmNyeXB0aW9uXCIgLz4uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwic2VjdGlvblwiIG9uU3VibWl0PXsoKSA9PiB1bmxvY2tXYWxsZXQocGFzc3dvcmQpfT5cbiAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIGVycm9yPXt3YWxsZXRVbmxvY2tTdWNjZWRlZCA9PT0gZmFsc2UgPyAnSW5jb3JyZWN0IFBhc3N3b3JkJyA6IGZhbHNlfVxuICAgICAgICAgICAgbGFiZWw9e19fKCdXYWxsZXQgUGFzc3dvcmQnKX1cbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwid2FsbGV0LXBhc3N3b3JkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQoZXZlbnQpfVxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkIHx8ICcnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGZpZWxkc2V0LXNlY3Rpb24+XG4gICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPXtfXygnUmVtZW1iZXIgUGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgbmFtZT1cIndhbGxldC1yZW1lbWJlci1wYXNzd29yZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLm9uQ2hhbmdlUmVtZW1iZXJQYXNzd29yZChldmVudCl9XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3JlbWVtYmVyUGFzc3dvcmR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZmllbGRzZXQtc2VjdGlvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsV2FsbGV0VW5sb2NrO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQTs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7Ozs7OztBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFOQTtBQVFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUkE7QUFTQTtBQVRBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQU9BO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFLQTtBQUxBO0FBV0E7Ozs7QUE3RUE7QUFDQTtBQStFQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modalWalletUnlock/view.jsx\n");

/***/ })

}]);