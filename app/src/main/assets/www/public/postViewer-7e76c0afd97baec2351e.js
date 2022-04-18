(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["postViewer"],{

/***/ "../ui/component/fileTitle/index.js":
/*!******************************************!*\
  !*** ../ui/component/fileTitle/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/selectors/claims */ \"../ui/redux/selectors/claims.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"../ui/component/fileTitle/view.jsx\");\n\n\n\n\nvar select = function select(state, props) {\n  return {\n    title: Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__[\"selectTitleForUri\"])(state, props.uri)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select)(_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L2ZpbGVUaXRsZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9jb21wb25lbnQvZmlsZVRpdGxlL2luZGV4LmpzP2IzYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNlbGVjdFRpdGxlRm9yVXJpIH0gZnJvbSAncmVkdXgvc2VsZWN0b3JzL2NsYWltcyc7XG5pbXBvcnQgRmlsZVRpdGxlU2VjdGlvbiBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBzZWxlY3QgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuICB0aXRsZTogc2VsZWN0VGl0bGVGb3JVcmkoc3RhdGUsIHByb3BzLnVyaSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QpKEZpbGVUaXRsZVNlY3Rpb24pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/component/fileTitle/index.js\n");

/***/ }),

/***/ "../ui/component/fileTitle/view.jsx":
/*!******************************************!*\
  !*** ../ui/component/fileTitle/view.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction FileTitle(props) {\n  var title = props.title,\n      children = props.children,\n      className = props.className;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null, title), children);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileTitle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L2ZpbGVUaXRsZS92aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9jb21wb25lbnQvZmlsZVRpdGxlL3ZpZXcuanN4PzUyZjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICB0aXRsZTogc3RyaW5nLFxuICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gIGNoaWxkcmVuPzogTm9kZSxcbn07XG5cbmZ1bmN0aW9uIEZpbGVUaXRsZShwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyB0aXRsZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzTmFtZSl9PlxuICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2gxPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlVGl0bGU7XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/component/fileTitle/view.jsx\n");

/***/ }),

/***/ "../ui/component/postViewer/index.js":
/*!*******************************************!*\
  !*** ../ui/component/postViewer/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/selectors/claims */ \"../ui/redux/selectors/claims.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"../ui/component/postViewer/view.jsx\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n\n\n\n\n\nvar select = function select(state, props) {\n  return {\n    claim: Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__[\"makeSelectClaimForUri\"])(props.uri)(state),\n    claimIsMine: Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__[\"selectClaimIsMineForUri\"])(state, props.uri)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, {\n  doOpenModal: redux_actions_app__WEBPACK_IMPORTED_MODULE_3__[\"doOpenModal\"]\n})(_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L3Bvc3RWaWV3ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vdWkvY29tcG9uZW50L3Bvc3RWaWV3ZXIvaW5kZXguanM/ZWU1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbWFrZVNlbGVjdENsYWltRm9yVXJpLCBzZWxlY3RDbGFpbUlzTWluZUZvclVyaSB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9jbGFpbXMnO1xuaW1wb3J0IFBvc3RWaWV3ZXIgZnJvbSAnLi92aWV3JztcbmltcG9ydCB7IGRvT3Blbk1vZGFsIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9hcHAnO1xuXG5jb25zdCBzZWxlY3QgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuICBjbGFpbTogbWFrZVNlbGVjdENsYWltRm9yVXJpKHByb3BzLnVyaSkoc3RhdGUpLFxuICBjbGFpbUlzTWluZTogc2VsZWN0Q2xhaW1Jc01pbmVGb3JVcmkoc3RhdGUsIHByb3BzLnVyaSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QsIHtcbiAgZG9PcGVuTW9kYWwsXG59KShQb3N0Vmlld2VyKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/component/postViewer/index.js\n");

/***/ }),

/***/ "../ui/component/postViewer/view.jsx":
/*!*******************************************!*\
  !*** ../ui/component/postViewer/view.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var constants_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/icons */ \"../ui/constants/icons.js\");\n/* harmony import */ var constants_modal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/modal_types */ \"../ui/constants/modal_types.js\");\n/* harmony import */ var util_format_credits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util/format-credits */ \"../ui/util/format-credits.js\");\n/* harmony import */ var component_fileDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! component/fileDetails */ \"../ui/component/fileDetails/index.js\");\n/* harmony import */ var component_claimAuthor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! component/claimAuthor */ \"../ui/component/claimAuthor/index.js\");\n/* harmony import */ var component_fileTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! component/fileTitle */ \"../ui/component/fileTitle/index.js\");\n/* harmony import */ var component_fileActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! component/fileActions */ \"../ui/component/fileActions/index.js\");\n/* harmony import */ var component_fileRenderInitiator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! component/fileRenderInitiator */ \"../ui/component/fileRenderInitiator/index.js\");\n/* harmony import */ var component_fileRenderInline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! component/fileRenderInline */ \"../ui/component/fileRenderInline/index.js\");\n/* harmony import */ var component_fileValues__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! component/fileValues */ \"../ui/component/fileValues/index.js\");\n/* harmony import */ var component_fileViewCount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! component/fileViewCount */ \"../ui/component/fileViewCount/index.js\");\n/* harmony import */ var component_claimTags__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! component/claimTags */ \"../ui/component/claimTags/index.js\");\n/* harmony import */ var component_dateTime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! component/dateTime */ \"../ui/component/dateTime/index.js\");\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var component_common_lbc_symbol__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! component/common/lbc-symbol */ \"../ui/component/common/lbc-symbol.jsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);\nfunction _slicedToArray(arr, i) {\n  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\n\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nfunction _iterableToArrayLimit(arr, i) {\n  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) {\n    return;\n  }\n\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar EXPAND = {\n  NONE: 'none',\n  CREDIT_DETAILS: 'credit_details',\n  FILE_DETAILS: 'file_details'\n};\n\nfunction PostViewer(props) {\n  var uri = props.uri,\n      claim = props.claim,\n      claimIsMine = props.claimIsMine,\n      doOpenModal = props.doOpenModal;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"](EXPAND.NONE),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      expand = _React$useState2[0],\n      setExpand = _React$useState2[1];\n\n  if (!claim) {\n    return null;\n  }\n\n  var amount = parseFloat(claim.amount) + parseFloat(claim.meta.support_amount);\n  var formattedAmount = Object(util_format_credits__WEBPACK_IMPORTED_MODULE_3__[\"formatCredits\"])(amount, 2, true);\n  var hasSupport = claim && claim.meta && claim.meta.support_amount && Number(claim.meta.support_amount) > 0;\n\n  function handleExpand(newExpand) {\n    if (expand === newExpand) {\n      setExpand(EXPAND.NONE);\n    } else {\n      setExpand(newExpand);\n    }\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"post\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_fileTitle__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    uri: uri,\n    className: \"post__title\"\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_16___default()('post__info', {\n      'post__info--expanded': expand !== EXPAND.NONE\n    })\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", {\n    className: \"post__date\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_dateTime__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    uri: uri,\n    type: \"date\"\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_fileViewCount__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    uri: uri\n  })), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"post__info--grouped\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    button: \"link\",\n    className: \"dim\",\n    icon: constants_icons__WEBPACK_IMPORTED_MODULE_1__[\"INFO\"],\n    \"aria-label\": __('View claim details'),\n    onClick: function onClick() {\n      return handleExpand(EXPAND.FILE_DETAILS);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    button: \"link\",\n    className: \"dim\",\n    onClick: function onClick() {\n      return handleExpand(EXPAND.CREDIT_DETAILS);\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_common_lbc_symbol__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n    postfix: expand === EXPAND.CREDIT_DETAILS ? __('Hide') : formattedAmount\n  })), claimIsMine && hasSupport && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    button: \"link\",\n    className: \"expandable__button\",\n    icon: constants_icons__WEBPACK_IMPORTED_MODULE_1__[\"UNLOCK\"],\n    \"aria-label\": __('Unlock tips'),\n    onClick: function onClick() {\n      doOpenModal(constants_modal_types__WEBPACK_IMPORTED_MODULE_2__[\"LIQUIDATE_SUPPORTS\"], {\n        uri: uri\n      });\n    }\n  }))), expand === EXPAND.CREDIT_DETAILS && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"section post__info--credit-details\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_fileValues__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    uri: uri\n  })), expand === EXPAND.FILE_DETAILS && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"section post__info--credit-details\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_claimTags__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    uri: uri,\n    type: \"large\"\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_fileDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    uri: uri\n  })), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_claimAuthor__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    uri: uri\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"file-render--post-container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_fileRenderInitiator__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    uri: uri\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_fileRenderInline__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    uri: uri\n  })), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_fileActions__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    uri: uri\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostViewer);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L3Bvc3RWaWV3ZXIvdmlldy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vdWkvY29tcG9uZW50L3Bvc3RWaWV3ZXIvdmlldy5qc3g/NGRjOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgSUNPTlMgZnJvbSAnY29uc3RhbnRzL2ljb25zJztcbmltcG9ydCAqIGFzIE1PREFMUyBmcm9tICdjb25zdGFudHMvbW9kYWxfdHlwZXMnO1xuaW1wb3J0IHsgZm9ybWF0Q3JlZGl0cyB9IGZyb20gJ3V0aWwvZm9ybWF0LWNyZWRpdHMnO1xuaW1wb3J0IEZpbGVEZXRhaWxzIGZyb20gJ2NvbXBvbmVudC9maWxlRGV0YWlscyc7XG5pbXBvcnQgQ2xhaW1BdXRob3IgZnJvbSAnY29tcG9uZW50L2NsYWltQXV0aG9yJztcbmltcG9ydCBGaWxlVGl0bGUgZnJvbSAnY29tcG9uZW50L2ZpbGVUaXRsZSc7XG5pbXBvcnQgRmlsZUFjdGlvbnMgZnJvbSAnY29tcG9uZW50L2ZpbGVBY3Rpb25zJztcbmltcG9ydCBGaWxlUmVuZGVySW5pdGlhdG9yIGZyb20gJ2NvbXBvbmVudC9maWxlUmVuZGVySW5pdGlhdG9yJztcbmltcG9ydCBGaWxlUmVuZGVySW5saW5lIGZyb20gJ2NvbXBvbmVudC9maWxlUmVuZGVySW5saW5lJztcbmltcG9ydCBGaWxlVmFsdWVzIGZyb20gJ2NvbXBvbmVudC9maWxlVmFsdWVzJztcbmltcG9ydCBGaWxlVmlld0NvdW50IGZyb20gJ2NvbXBvbmVudC9maWxlVmlld0NvdW50JztcbmltcG9ydCBDbGFpbVRhZ3MgZnJvbSAnY29tcG9uZW50L2NsYWltVGFncyc7XG5pbXBvcnQgRGF0ZVRpbWUgZnJvbSAnY29tcG9uZW50L2RhdGVUaW1lJztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50L2J1dHRvbic7XG5pbXBvcnQgTGJjU3ltYm9sIGZyb20gJ2NvbXBvbmVudC9jb21tb24vbGJjLXN5bWJvbCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgRVhQQU5EID0ge1xuICBOT05FOiAnbm9uZScsXG4gIENSRURJVF9ERVRBSUxTOiAnY3JlZGl0X2RldGFpbHMnLFxuICBGSUxFX0RFVEFJTFM6ICdmaWxlX2RldGFpbHMnLFxufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgdXJpOiBzdHJpbmcsXG4gIGNsYWltOiA/U3RyZWFtQ2xhaW0sXG4gIGNsYWltSXNNaW5lOiBib29sZWFuLFxuICBkb09wZW5Nb2RhbDogKGlkOiBzdHJpbmcsIHt9KSA9PiB2b2lkLFxufTtcblxuZnVuY3Rpb24gUG9zdFZpZXdlcihwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyB1cmksIGNsYWltLCBjbGFpbUlzTWluZSwgZG9PcGVuTW9kYWwgfSA9IHByb3BzO1xuICBjb25zdCBbZXhwYW5kLCBzZXRFeHBhbmRdID0gUmVhY3QudXNlU3RhdGUoRVhQQU5ELk5PTkUpO1xuXG4gIGlmICghY2xhaW0pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQoY2xhaW0uYW1vdW50KSArIHBhcnNlRmxvYXQoY2xhaW0ubWV0YS5zdXBwb3J0X2Ftb3VudCk7XG4gIGNvbnN0IGZvcm1hdHRlZEFtb3VudCA9IGZvcm1hdENyZWRpdHMoYW1vdW50LCAyLCB0cnVlKTtcbiAgY29uc3QgaGFzU3VwcG9ydCA9IGNsYWltICYmIGNsYWltLm1ldGEgJiYgY2xhaW0ubWV0YS5zdXBwb3J0X2Ftb3VudCAmJiBOdW1iZXIoY2xhaW0ubWV0YS5zdXBwb3J0X2Ftb3VudCkgPiAwO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUV4cGFuZChuZXdFeHBhbmQpIHtcbiAgICBpZiAoZXhwYW5kID09PSBuZXdFeHBhbmQpIHtcbiAgICAgIHNldEV4cGFuZChFWFBBTkQuTk9ORSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4cGFuZChuZXdFeHBhbmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XG4gICAgICA8RmlsZVRpdGxlIHVyaT17dXJpfSBjbGFzc05hbWU9XCJwb3N0X190aXRsZVwiIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncG9zdF9faW5mbycsIHtcbiAgICAgICAgICAncG9zdF9faW5mby0tZXhwYW5kZWQnOiBleHBhbmQgIT09IEVYUEFORC5OT05FLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fZGF0ZVwiPlxuICAgICAgICAgIDxEYXRlVGltZSB1cmk9e3VyaX0gdHlwZT1cImRhdGVcIiAvPlxuICAgICAgICAgIDxGaWxlVmlld0NvdW50IHVyaT17dXJpfSAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9faW5mby0tZ3JvdXBlZFwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJ1dHRvbj1cImxpbmtcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGltXCJcbiAgICAgICAgICAgIGljb249e0lDT05TLklORk99XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtfXygnVmlldyBjbGFpbSBkZXRhaWxzJyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFeHBhbmQoRVhQQU5ELkZJTEVfREVUQUlMUyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIGJ1dHRvbj1cImxpbmtcIiBjbGFzc05hbWU9XCJkaW1cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFeHBhbmQoRVhQQU5ELkNSRURJVF9ERVRBSUxTKX0+XG4gICAgICAgICAgICA8TGJjU3ltYm9sIHBvc3RmaXg9e2V4cGFuZCA9PT0gRVhQQU5ELkNSRURJVF9ERVRBSUxTID8gX18oJ0hpZGUnKSA6IGZvcm1hdHRlZEFtb3VudH0gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7Y2xhaW1Jc01pbmUgJiYgaGFzU3VwcG9ydCAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGJ1dHRvbj1cImxpbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHBhbmRhYmxlX19idXR0b25cIlxuICAgICAgICAgICAgICBpY29uPXtJQ09OUy5VTkxPQ0t9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e19fKCdVbmxvY2sgdGlwcycpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9PcGVuTW9kYWwoTU9EQUxTLkxJUVVJREFURV9TVVBQT1JUUywgeyB1cmkgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtleHBhbmQgPT09IEVYUEFORC5DUkVESVRfREVUQUlMUyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBwb3N0X19pbmZvLS1jcmVkaXQtZGV0YWlsc1wiPlxuICAgICAgICAgIDxGaWxlVmFsdWVzIHVyaT17dXJpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtleHBhbmQgPT09IEVYUEFORC5GSUxFX0RFVEFJTFMgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcG9zdF9faW5mby0tY3JlZGl0LWRldGFpbHNcIj5cbiAgICAgICAgICA8Q2xhaW1UYWdzIHVyaT17dXJpfSB0eXBlPVwibGFyZ2VcIiAvPlxuICAgICAgICAgIDxGaWxlRGV0YWlscyB1cmk9e3VyaX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8Q2xhaW1BdXRob3IgdXJpPXt1cml9IC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1yZW5kZXItLXBvc3QtY29udGFpbmVyXCI+XG4gICAgICAgIDxGaWxlUmVuZGVySW5pdGlhdG9yIHVyaT17dXJpfSAvPlxuICAgICAgICA8RmlsZVJlbmRlcklubGluZSB1cmk9e3VyaX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZpbGVBY3Rpb25zIHVyaT17dXJpfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Vmlld2VyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFjQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/component/postViewer/view.jsx\n");

/***/ })

}]);