(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalAffirmPurchase"],{

/***/ "../ui/modal/modalAffirmPurchase/index.js":
/*!************************************************!*\
  !*** ../ui/modal/modalAffirmPurchase/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/content */ \"../ui/redux/actions/content.js\");\n/* harmony import */ var redux_selectors_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/selectors/content */ \"../ui/redux/selectors/content.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var redux_selectors_claims__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux/selectors/claims */ \"../ui/redux/selectors/claims.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalAffirmPurchase/view.jsx\");\n\n\n\n\n\n\n\nvar select = function select(state, props) {\n  return {\n    metadata: Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_4__[\"makeSelectMetadataForUri\"])(props.uri)(state),\n    playingUri: Object(redux_selectors_content__WEBPACK_IMPORTED_MODULE_2__[\"selectPlayingUri\"])(state)\n  };\n};\n\nvar perform = function perform(dispatch) {\n  return {\n    analyticsPurchaseEvent: function analyticsPurchaseEvent(fileInfo) {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_3__[\"doAnaltyicsPurchaseEvent\"])(fileInfo));\n    },\n    setPlayingUri: function setPlayingUri(params) {\n      return dispatch(Object(redux_actions_content__WEBPACK_IMPORTED_MODULE_1__[\"doSetPlayingUri\"])(params));\n    },\n    closeModal: function closeModal() {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_3__[\"doHideModal\"])());\n    },\n    loadVideo: function loadVideo(uri, onSuccess) {\n      return dispatch(Object(redux_actions_content__WEBPACK_IMPORTED_MODULE_1__[\"doPlayUri\"])(uri, true, undefined, onSuccess));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_5__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxBZmZpcm1QdXJjaGFzZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbEFmZmlybVB1cmNoYXNlL2luZGV4LmpzP2NhZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGRvUGxheVVyaSwgZG9TZXRQbGF5aW5nVXJpIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9jb250ZW50JztcbmltcG9ydCB7IHNlbGVjdFBsYXlpbmdVcmkgfSBmcm9tICdyZWR1eC9zZWxlY3RvcnMvY29udGVudCc7XG5pbXBvcnQgeyBkb0hpZGVNb2RhbCwgZG9BbmFsdHlpY3NQdXJjaGFzZUV2ZW50IH0gZnJvbSAncmVkdXgvYWN0aW9ucy9hcHAnO1xuaW1wb3J0IHsgbWFrZVNlbGVjdE1ldGFkYXRhRm9yVXJpIH0gZnJvbSAncmVkdXgvc2VsZWN0b3JzL2NsYWltcyc7XG5pbXBvcnQgTW9kYWxBZmZpcm1QdXJjaGFzZSBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBzZWxlY3QgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuICBtZXRhZGF0YTogbWFrZVNlbGVjdE1ldGFkYXRhRm9yVXJpKHByb3BzLnVyaSkoc3RhdGUpLFxuICBwbGF5aW5nVXJpOiBzZWxlY3RQbGF5aW5nVXJpKHN0YXRlKSxcbn0pO1xuXG5jb25zdCBwZXJmb3JtID0gKGRpc3BhdGNoKSA9PiAoe1xuICBhbmFseXRpY3NQdXJjaGFzZUV2ZW50OiAoZmlsZUluZm8pID0+IGRpc3BhdGNoKGRvQW5hbHR5aWNzUHVyY2hhc2VFdmVudChmaWxlSW5mbykpLFxuICBzZXRQbGF5aW5nVXJpOiAocGFyYW1zKSA9PiBkaXNwYXRjaChkb1NldFBsYXlpbmdVcmkocGFyYW1zKSksXG4gIGNsb3NlTW9kYWw6ICgpID0+IGRpc3BhdGNoKGRvSGlkZU1vZGFsKCkpLFxuICBsb2FkVmlkZW86ICh1cmksIG9uU3VjY2VzcykgPT4gZGlzcGF0Y2goZG9QbGF5VXJpKHVyaSwgdHJ1ZSwgdW5kZWZpbmVkLCBvblN1Y2Nlc3MpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCwgcGVyZm9ybSkoTW9kYWxBZmZpcm1QdXJjaGFzZSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFFQTtBQUFBO0FBRkE7QUFHQTtBQUFBO0FBSEE7QUFJQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQ0E7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/modal/modalAffirmPurchase/index.js\n");

/***/ }),

/***/ "../ui/modal/modalAffirmPurchase/view.jsx":
/*!************************************************!*\
  !*** ../ui/modal/modalAffirmPurchase/view.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! analytics */ \"../ui/analytics.js\");\n/* harmony import */ var component_filePrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/filePrice */ \"../ui/component/filePrice/index.js\");\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\n/* harmony import */ var component_common_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! component/common/card */ \"../ui/component/common/card.jsx\");\n/* harmony import */ var component_i18nMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! component/i18nMessage */ \"../ui/component/i18nMessage/index.js\");\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var util_lbryURI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util/lbryURI */ \"../ui/util/lbryURI.js\");\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    });\n    keys.push.apply(keys, symbols);\n  }\n\n  return keys;\n}\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        _defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _slicedToArray(arr, i) {\n  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\n\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nfunction _iterableToArrayLimit(arr, i) {\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n\n\n\n\n\n\n\n\n // This number is tied to transitions in scss/purchase.scss\n\nvar ANIMATION_LENGTH = 2500;\n\nfunction ModalAffirmPurchase(props) {\n  var closeModal = props.closeModal,\n      loadVideo = props.loadVideo,\n      metadata = props.metadata,\n      uri = props.uri,\n      analyticsPurchaseEvent = props.analyticsPurchaseEvent,\n      playingUri = props.playingUri,\n      setPlayingUri = props.setPlayingUri,\n      cancelCb = props.cancelCb;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      success = _React$useState2[0],\n      setSuccess = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      purchasing = _React$useState4[0],\n      setPurchasing = _React$useState4[1];\n\n  var modalTitle = __('Confirm Purchase');\n\n  var title = metadata === null || metadata === void 0 ? void 0 : metadata.title;\n  var renderedTitle = title ? \"\\\"\".concat(title, \"\\\"\") : uri;\n\n  function onAffirmPurchase() {\n    setPurchasing(true);\n    loadVideo(uri, function (fileInfo) {\n      setPurchasing(false);\n      setSuccess(true);\n      analyticsPurchaseEvent(fileInfo);\n\n      if (playingUri.uri !== uri) {\n        setPlayingUri(_objectSpread({}, playingUri, {\n          uri: uri\n        }));\n      }\n    });\n  }\n\n  function cancelPurchase() {\n    if (playingUri.uri && Object(util_lbryURI__WEBPACK_IMPORTED_MODULE_8__[\"isURIEqual\"])(uri, playingUri.uri) && !playingUri.collection.collectionId) {\n      setPlayingUri(_objectSpread({}, playingUri, {\n        uri: null\n      }));\n    }\n\n    if (cancelCb) cancelCb();\n    closeModal();\n  }\n\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {\n    var timeout;\n\n    if (success) {\n      timeout = setTimeout(function () {\n        closeModal();\n        setSuccess(false);\n      }, ANIMATION_LENGTH);\n    }\n\n    return function () {\n      if (timeout) {\n        clearTimeout(timeout);\n      }\n    };\n  }, [success, uri]);\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {\n    if (!metadata) {\n      analytics__WEBPACK_IMPORTED_MODULE_2__[\"default\"].log(new Error('ModalAffirmPurchase: null claim'), {\n        fingerprint: ['ModalAffirmPurchase-null-claim'],\n        tags: {\n          uri: uri,\n          callbackExists: cancelCb ? 'yes' : 'no'\n        }\n      });\n    } // eslint-disable-next-line react-hooks/exhaustive-deps -- on mount\n\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_4__[\"Modal\"], {\n    type: \"card\",\n    isOpen: true,\n    contentLabel: modalTitle,\n    onAborted: cancelPurchase\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_common_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: modalTitle,\n    subtitle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('purchase-stuff', {\n        'purchase-stuff--purchased': success\n      })\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_i18nMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      tokens: {\n        claim_title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, renderedTitle)\n      }\n    }, \"Are you sure you want to purchase %claim_title%?\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_filePrice__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      uri: uri,\n      showFullPrice: true,\n      type: \"modal\"\n    }))), success && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"purchase-stuff__text--purchased\"\n    }, __('Purchased!'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"purchase_stuff__subtext--purchased\"\n    }, __('This content will now be in your Library.')))),\n    actions: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__actions\",\n      style: success ? {\n        visibility: 'hidden'\n      } : undefined\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      button: \"primary\",\n      disabled: purchasing,\n      label: purchasing ? __('Purchasing...') : __('Purchase'),\n      onClick: onAffirmPurchase\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      button: \"link\",\n      label: __('Cancel'),\n      onClick: cancelPurchase\n    }))\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalAffirmPurchase);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxBZmZpcm1QdXJjaGFzZS92aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbEFmZmlybVB1cmNoYXNlL3ZpZXcuanN4PzAwNzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBhbmFseXRpY3MgZnJvbSAnYW5hbHl0aWNzJztcbmltcG9ydCBGaWxlUHJpY2UgZnJvbSAnY29tcG9uZW50L2ZpbGVQcmljZSc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ21vZGFsL21vZGFsJztcbmltcG9ydCBDYXJkIGZyb20gJ2NvbXBvbmVudC9jb21tb24vY2FyZCc7XG5pbXBvcnQgSTE4bk1lc3NhZ2UgZnJvbSAnY29tcG9uZW50L2kxOG5NZXNzYWdlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50L2J1dHRvbic7XG5pbXBvcnQgeyBpc1VSSUVxdWFsIH0gZnJvbSAndXRpbC9sYnJ5VVJJJztcblxuLy8gVGhpcyBudW1iZXIgaXMgdGllZCB0byB0cmFuc2l0aW9ucyBpbiBzY3NzL3B1cmNoYXNlLnNjc3NcbmNvbnN0IEFOSU1BVElPTl9MRU5HVEggPSAyNTAwO1xuXG50eXBlIFByb3BzID0ge1xuICBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkLFxuICBsb2FkVmlkZW86IChzdHJpbmcsIChHZXRSZXNwb25zZSkgPT4gdm9pZCkgPT4gdm9pZCxcbiAgdXJpOiBzdHJpbmcsXG4gIGNhbmNlbFB1cmNoYXNlOiAoKSA9PiB2b2lkLFxuICBtZXRhZGF0YTogU3RyZWFtTWV0YWRhdGEsXG4gIGFuYWx5dGljc1B1cmNoYXNlRXZlbnQ6IChHZXRSZXNwb25zZSkgPT4gdm9pZCxcbiAgcGxheWluZ1VyaTogUGxheWluZ1VyaSxcbiAgc2V0UGxheWluZ1VyaTogKHBhcmFtczogUGxheWluZ1VyaSkgPT4gdm9pZCxcbiAgY2FuY2VsQ2I/OiAoKSA9PiB2b2lkLFxufTtcblxuZnVuY3Rpb24gTW9kYWxBZmZpcm1QdXJjaGFzZShwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBjbG9zZU1vZGFsLCBsb2FkVmlkZW8sIG1ldGFkYXRhLCB1cmksIGFuYWx5dGljc1B1cmNoYXNlRXZlbnQsIHBsYXlpbmdVcmksIHNldFBsYXlpbmdVcmksIGNhbmNlbENiIH0gPSBwcm9wcztcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHVyY2hhc2luZywgc2V0UHVyY2hhc2luZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG1vZGFsVGl0bGUgPSBfXygnQ29uZmlybSBQdXJjaGFzZScpO1xuICBjb25zdCB0aXRsZSA9IG1ldGFkYXRhPy50aXRsZTtcbiAgY29uc3QgcmVuZGVyZWRUaXRsZSA9IHRpdGxlID8gYFwiJHt0aXRsZX1cImAgOiB1cmk7XG5cbiAgZnVuY3Rpb24gb25BZmZpcm1QdXJjaGFzZSgpIHtcbiAgICBzZXRQdXJjaGFzaW5nKHRydWUpO1xuICAgIGxvYWRWaWRlbyh1cmksIChmaWxlSW5mbykgPT4ge1xuICAgICAgc2V0UHVyY2hhc2luZyhmYWxzZSk7XG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgYW5hbHl0aWNzUHVyY2hhc2VFdmVudChmaWxlSW5mbyk7XG5cbiAgICAgIGlmIChwbGF5aW5nVXJpLnVyaSAhPT0gdXJpKSB7XG4gICAgICAgIHNldFBsYXlpbmdVcmkoeyAuLi5wbGF5aW5nVXJpLCB1cmkgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxQdXJjaGFzZSgpIHtcbiAgICBpZiAocGxheWluZ1VyaS51cmkgJiYgaXNVUklFcXVhbCh1cmksIHBsYXlpbmdVcmkudXJpKSAmJiAhcGxheWluZ1VyaS5jb2xsZWN0aW9uLmNvbGxlY3Rpb25JZCkge1xuICAgICAgc2V0UGxheWluZ1VyaSh7IC4uLnBsYXlpbmdVcmksIHVyaTogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsQ2IpIGNhbmNlbENiKCk7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZW91dDtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIHNldFN1Y2Nlc3MoZmFsc2UpO1xuICAgICAgfSwgQU5JTUFUSU9OX0xFTkdUSCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbc3VjY2VzcywgdXJpXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW1ldGFkYXRhKSB7XG4gICAgICBhbmFseXRpY3MubG9nKG5ldyBFcnJvcignTW9kYWxBZmZpcm1QdXJjaGFzZTogbnVsbCBjbGFpbScpLCB7XG4gICAgICAgIGZpbmdlcnByaW50OiBbJ01vZGFsQWZmaXJtUHVyY2hhc2UtbnVsbC1jbGFpbSddLFxuICAgICAgICB0YWdzOiB7IHVyaSwgY2FsbGJhY2tFeGlzdHM6IGNhbmNlbENiID8gJ3llcycgOiAnbm8nIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAtLSBvbiBtb3VudFxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgdHlwZT1cImNhcmRcIiBpc09wZW4gY29udGVudExhYmVsPXttb2RhbFRpdGxlfSBvbkFib3J0ZWQ9e2NhbmNlbFB1cmNoYXNlfT5cbiAgICAgIDxDYXJkXG4gICAgICAgIHRpdGxlPXttb2RhbFRpdGxlfVxuICAgICAgICBzdWJ0aXRsZT17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdwdXJjaGFzZS1zdHVmZicsIHsgJ3B1cmNoYXNlLXN0dWZmLS1wdXJjaGFzZWQnOiBzdWNjZXNzIH0pfT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7LyogS2VlcCB0aGlzIG1lc3NhZ2UgcmVuZGVyZWQgYnV0IGhpZGRlbiBzbyB0aGUgd2lkdGggZG9lc24ndCBjaGFuZ2UgKi99XG4gICAgICAgICAgICAgICAgPEkxOG5NZXNzYWdlXG4gICAgICAgICAgICAgICAgICB0b2tlbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgY2xhaW1fdGl0bGU6IDxzdHJvbmc+e3JlbmRlcmVkVGl0bGV9PC9zdHJvbmc+LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcHVyY2hhc2UgJWNsYWltX3RpdGxlJT9cbiAgICAgICAgICAgICAgICA8L0kxOG5NZXNzYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RmlsZVByaWNlIHVyaT17dXJpfSBzaG93RnVsbFByaWNlIHR5cGU9XCJtb2RhbFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7c3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyY2hhc2Utc3R1ZmZfX3RleHQtLXB1cmNoYXNlZFwiPlxuICAgICAgICAgICAgICAgIHtfXygnUHVyY2hhc2VkIScpfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyY2hhc2Vfc3R1ZmZfX3N1YnRleHQtLXB1cmNoYXNlZFwiPlxuICAgICAgICAgICAgICAgICAge19fKCdUaGlzIGNvbnRlbnQgd2lsbCBub3cgYmUgaW4geW91ciBMaWJyYXJ5LicpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX19hY3Rpb25zXCIgc3R5bGU9e3N1Y2Nlc3MgPyB7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH0gOiB1bmRlZmluZWR9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBidXR0b249XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3B1cmNoYXNpbmd9XG4gICAgICAgICAgICAgIGxhYmVsPXtwdXJjaGFzaW5nID8gX18oJ1B1cmNoYXNpbmcuLi4nKSA6IF9fKCdQdXJjaGFzZScpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkFmZmlybVB1cmNoYXNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gYnV0dG9uPVwibGlua1wiIGxhYmVsPXtfXygnQ2FuY2VsJyl9IG9uQ2xpY2s9e2NhbmNlbFB1cmNoYXNlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvTW9kYWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsQWZmaXJtUHVyY2hhc2U7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBRkE7QUFDQTtBQURBO0FBVUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBckNBO0FBMkNBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modalAffirmPurchase/view.jsx\n");

/***/ })

}]);