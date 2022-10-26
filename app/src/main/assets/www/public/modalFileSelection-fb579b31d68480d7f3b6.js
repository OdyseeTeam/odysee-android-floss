(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalFileSelection"],{

/***/ "../ui/component/common/file-list.jsx":
/*!********************************************!*\
  !*** ../ui/component/common/file-list.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reakit_Radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reakit/Radio */ \"../node_modules/reakit/es/Radio/index.js\");\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\n\n // Same as FormField type=\"radio\" but it works with reakit:\n\nvar ForwardedRadio = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"radio\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({}, props, {\n    type: \"radio\",\n    ref: ref\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: props.id\n  }, props.label));\n});\n\nfunction FileList(props) {\n  var files = props.files,\n      onChange = props.onChange;\n  var radio = Object(reakit_Radio__WEBPACK_IMPORTED_MODULE_1__[\"useRadioState\"])();\n\n  var getFile = function getFile(value) {\n    if (files && files.length) {\n      return files.find(function (file) {\n        return file.name === value;\n      });\n    }\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {\n    if (radio.stops.length) {\n      if (!radio.currentId) {\n        radio.first();\n      } else {\n        var first = radio.stops[0].ref.current; // First auto-selection\n\n        if (first && first.id === radio.currentId && !radio.state) {\n          var file = getFile(first.value); // Update state and select new file\n\n          onChange(file);\n          radio.setState(first.value);\n        }\n\n        if (radio.state) {\n          // Find selected element\n          var stop = radio.stops.find(function (item) {\n            return item.id === radio.currentId;\n          });\n          var element = stop && stop.ref.current; // Only update state if new item is selected\n\n          if (element && element.value !== radio.state) {\n            var _file = getFile(element.value); // Sselect new file and update state\n\n\n            onChange(_file);\n            radio.setState(element.value);\n          }\n        }\n      }\n    }\n  }, [radio, onChange]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'file-list'\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reakit_Radio__WEBPACK_IMPORTED_MODULE_1__[\"RadioGroup\"], _extends({}, radio, {\n    \"aria-label\": \"files\"\n  }), files.map(function (_ref) {\n    var name = _ref.name;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reakit_Radio__WEBPACK_IMPORTED_MODULE_1__[\"Radio\"], _extends({\n      key: name\n    }, radio, {\n      value: name,\n      label: name,\n      as: ForwardedRadio\n    }));\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L2NvbW1vbi9maWxlLWxpc3QuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL2NvbXBvbmVudC9jb21tb24vZmlsZS1saXN0LmpzeD82YTU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmFkaW9TdGF0ZSwgUmFkaW8sIFJhZGlvR3JvdXAgfSBmcm9tICdyZWFraXQvUmFkaW8nO1xuXG50eXBlIFByb3BzID0ge1xuICBmaWxlczogQXJyYXk8V2ViRmlsZT4sXG4gIG9uQ2hhbmdlOiAoV2ViRmlsZSB8IHZvaWQpID0+IHZvaWQsXG59O1xuXG50eXBlIFJhZGlvUHJvcHMgPSB7XG4gIGlkOiBzdHJpbmcsXG4gIGxhYmVsOiBzdHJpbmcsXG59O1xuXG4vLyBTYW1lIGFzIEZvcm1GaWVsZCB0eXBlPVwicmFkaW9cIiBidXQgaXQgd29ya3Mgd2l0aCByZWFraXQ6XG5jb25zdCBGb3J3YXJkZWRSYWRpbyA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzOiBSYWRpb1Byb3BzLCByZWYpID0+IChcbiAgPHNwYW4gY2xhc3NOYW1lPVwicmFkaW9cIj5cbiAgICA8aW5wdXQgey4uLnByb3BzfSB0eXBlPVwicmFkaW9cIiByZWY9e3JlZn0gLz5cbiAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMuaWR9Pntwcm9wcy5sYWJlbH08L2xhYmVsPlxuICA8L3NwYW4+XG4pKTtcblxuZnVuY3Rpb24gRmlsZUxpc3QocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgZmlsZXMsIG9uQ2hhbmdlIH0gPSBwcm9wcztcbiAgY29uc3QgcmFkaW8gPSB1c2VSYWRpb1N0YXRlKCk7XG5cbiAgY29uc3QgZ2V0RmlsZSA9ICh2YWx1ZT86IHN0cmluZykgPT4ge1xuICAgIGlmIChmaWxlcyAmJiBmaWxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmaWxlcy5maW5kKChmaWxlOiBXZWJGaWxlKSA9PiBmaWxlLm5hbWUgPT09IHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmFkaW8uc3RvcHMubGVuZ3RoKSB7XG4gICAgICBpZiAoIXJhZGlvLmN1cnJlbnRJZCkge1xuICAgICAgICByYWRpby5maXJzdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlyc3QgPSByYWRpby5zdG9wc1swXS5yZWYuY3VycmVudDtcbiAgICAgICAgLy8gRmlyc3QgYXV0by1zZWxlY3Rpb25cbiAgICAgICAgaWYgKGZpcnN0ICYmIGZpcnN0LmlkID09PSByYWRpby5jdXJyZW50SWQgJiYgIXJhZGlvLnN0YXRlKSB7XG4gICAgICAgICAgY29uc3QgZmlsZSA9IGdldEZpbGUoZmlyc3QudmFsdWUpO1xuICAgICAgICAgIC8vIFVwZGF0ZSBzdGF0ZSBhbmQgc2VsZWN0IG5ldyBmaWxlXG4gICAgICAgICAgb25DaGFuZ2UoZmlsZSk7XG4gICAgICAgICAgcmFkaW8uc2V0U3RhdGUoZmlyc3QudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJhZGlvLnN0YXRlKSB7XG4gICAgICAgICAgLy8gRmluZCBzZWxlY3RlZCBlbGVtZW50XG4gICAgICAgICAgY29uc3Qgc3RvcCA9IHJhZGlvLnN0b3BzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSByYWRpby5jdXJyZW50SWQpO1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdG9wICYmIHN0b3AucmVmLmN1cnJlbnQ7XG4gICAgICAgICAgLy8gT25seSB1cGRhdGUgc3RhdGUgaWYgbmV3IGl0ZW0gaXMgc2VsZWN0ZWRcbiAgICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnZhbHVlICE9PSByYWRpby5zdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGdldEZpbGUoZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICAvLyBTc2VsZWN0IG5ldyBmaWxlIGFuZCB1cGRhdGUgc3RhdGVcbiAgICAgICAgICAgIG9uQ2hhbmdlKGZpbGUpO1xuICAgICAgICAgICAgcmFkaW8uc2V0U3RhdGUoZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbcmFkaW8sIG9uQ2hhbmdlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17J2ZpbGUtbGlzdCd9PlxuICAgICAgPFJhZGlvR3JvdXAgey4uLnJhZGlvfSBhcmlhLWxhYmVsPVwiZmlsZXNcIj5cbiAgICAgICAge2ZpbGVzLm1hcCgoeyBuYW1lIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gPFJhZGlvIGtleT17bmFtZX0gey4uLnJhZGlvfSB2YWx1ZT17bmFtZX0gbGFiZWw9e25hbWV9IGFzPXtGb3J3YXJkZWRSYWRpb30gLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9SYWRpb0dyb3VwPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlTGlzdDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBOEJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFTQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/component/common/file-list.jsx\n");

/***/ }),

/***/ "../ui/modal/modalFileSelection/index.js":
/*!***********************************************!*\
  !*** ../ui/modal/modalFileSelection/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var redux_actions_publish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/actions/publish */ \"../ui/redux/actions/publish.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalFileSelection/view.jsx\");\n\n\n\n\n\nvar perform = function perform(dispatch) {\n  return {\n    hideModal: function hideModal(props) {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_1__[\"doHideModal\"])(props));\n    },\n    updatePublishForm: function updatePublishForm(value) {\n      return dispatch(Object(redux_actions_publish__WEBPACK_IMPORTED_MODULE_2__[\"doUpdatePublishForm\"])(value));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(null, perform)(_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxGaWxlU2VsZWN0aW9uL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsRmlsZVNlbGVjdGlvbi9pbmRleC5qcz8xZjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkb0hpZGVNb2RhbCB9IGZyb20gJ3JlZHV4L2FjdGlvbnMvYXBwJztcbmltcG9ydCB7IGRvVXBkYXRlUHVibGlzaEZvcm0gfSBmcm9tICdyZWR1eC9hY3Rpb25zL3B1Ymxpc2gnO1xuXG5pbXBvcnQgTW9kYUZpbGVTZWxlY3Rpb24gZnJvbSAnLi92aWV3JztcblxuY29uc3QgcGVyZm9ybSA9IChkaXNwYXRjaCkgPT4gKHtcbiAgaGlkZU1vZGFsOiAocHJvcHMpID0+IGRpc3BhdGNoKGRvSGlkZU1vZGFsKHByb3BzKSksXG4gIHVwZGF0ZVB1Ymxpc2hGb3JtOiAodmFsdWUpID0+IGRpc3BhdGNoKGRvVXBkYXRlUHVibGlzaEZvcm0odmFsdWUpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHBlcmZvcm0pKE1vZGFGaWxlU2VsZWN0aW9uKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/modal/modalFileSelection/index.js\n");

/***/ }),

/***/ "../ui/modal/modalFileSelection/view.jsx":
/*!***********************************************!*\
  !*** ../ui/modal/modalFileSelection/view.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var constants_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/icons */ \"../ui/constants/icons.js\");\n/* harmony import */ var constants_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/pages */ \"../ui/constants/pages.js\");\n/* harmony import */ var constants_pages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(constants_pages__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var component_common_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! component/common/card */ \"../ui/component/common/card.jsx\");\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var component_common_file_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! component/common/file-list */ \"../ui/component/common/file-list.jsx\");\nfunction _slicedToArray(arr, i) {\n  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\n\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nfunction _iterableToArrayLimit(arr, i) {\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n\n\n\n\n\n\n\n\nvar PUBLISH_URL = \"/$/\".concat(constants_pages__WEBPACK_IMPORTED_MODULE_1__[\"UPLOAD\"]);\n\nvar ModalFileSelection = function ModalFileSelection(props) {\n  var history = props.history,\n      files = props.files,\n      hideModal = props.hideModal,\n      updatePublishForm = props.updatePublishForm;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      selectedFile = _React$useState2[0],\n      setSelectedFile = _React$useState2[1];\n\n  var navigateToPublish = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function () {\n    // Navigate only if location is not publish area:\n    // - Prevent spam in history\n    if (history.location.pathname !== PUBLISH_URL) {\n      history.push(PUBLISH_URL);\n    }\n  }, [history]);\n\n  function handleCloseModal() {\n    hideModal();\n    setSelectedFile(null);\n  }\n\n  function handleSubmit() {\n    updatePublishForm({\n      filePath: selectedFile\n    });\n    handleCloseModal();\n    navigateToPublish();\n  }\n\n  var handleFileChange = function handleFileChange(file) {\n    // $FlowFixMe\n    setSelectedFile(file);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n    isOpen: true,\n    type: \"card\",\n    onAborted: handleCloseModal,\n    onConfirmed: handleCloseModal\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_common_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    icon: constants_icons__WEBPACK_IMPORTED_MODULE_0__[\"PUBLISH\"],\n    title: __('Choose a file'),\n    subtitle: __('Only one file is allowed, choose wisely:'),\n    actions: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_common_file_list__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      files: files,\n      onChange: handleFileChange\n    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"section__actions\"\n    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      disabled: !selectedFile || !files || !files.length,\n      button: \"primary\",\n      label: __('Accept'),\n      onClick: handleSubmit\n    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      button: \"link\",\n      label: __('Cancel'),\n      onClick: handleCloseModal\n    })))\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(ModalFileSelection));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxGaWxlU2VsZWN0aW9uL3ZpZXcuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsRmlsZVNlbGVjdGlvbi92aWV3LmpzeD9lYTMyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBJQ09OUyBmcm9tICdjb25zdGFudHMvaWNvbnMnO1xuaW1wb3J0ICogYXMgUEFHRVMgZnJvbSAnY29uc3RhbnRzL3BhZ2VzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ21vZGFsL21vZGFsJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IENhcmQgZnJvbSAnY29tcG9uZW50L2NvbW1vbi9jYXJkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50L2J1dHRvbic7XG5pbXBvcnQgRmlsZUxpc3QgZnJvbSAnY29tcG9uZW50L2NvbW1vbi9maWxlLWxpc3QnO1xuXG50eXBlIFByb3BzID0ge1xuICBmaWxlczogQXJyYXk8V2ViRmlsZT4sXG4gIGhpZGVNb2RhbDogKCkgPT4gdm9pZCxcbiAgdXBkYXRlUHVibGlzaEZvcm06ICh7fSkgPT4gdm9pZCxcbiAgaGlzdG9yeToge1xuICAgIGxvY2F0aW9uOiB7IHBhdGhuYW1lOiBzdHJpbmcgfSxcbiAgICBwdXNoOiBzdHJpbmcgPT4gdm9pZCxcbiAgfSxcbn07XG5cbmNvbnN0IFBVQkxJU0hfVVJMID0gYC8kLyR7UEFHRVMuVVBMT0FEfWA7XG5cbmNvbnN0IE1vZGFsRmlsZVNlbGVjdGlvbiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBoaXN0b3J5LCBmaWxlcywgaGlkZU1vZGFsLCB1cGRhdGVQdWJsaXNoRm9ybSB9ID0gcHJvcHM7XG4gIGNvbnN0IFtzZWxlY3RlZEZpbGUsIHNldFNlbGVjdGVkRmlsZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBuYXZpZ2F0ZVRvUHVibGlzaCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAvLyBOYXZpZ2F0ZSBvbmx5IGlmIGxvY2F0aW9uIGlzIG5vdCBwdWJsaXNoIGFyZWE6XG4gICAgLy8gLSBQcmV2ZW50IHNwYW0gaW4gaGlzdG9yeVxuICAgIGlmIChoaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lICE9PSBQVUJMSVNIX1VSTCkge1xuICAgICAgaGlzdG9yeS5wdXNoKFBVQkxJU0hfVVJMKTtcbiAgICB9XG4gIH0sIFtoaXN0b3J5XSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VNb2RhbCgpIHtcbiAgICBoaWRlTW9kYWwoKTtcbiAgICBzZXRTZWxlY3RlZEZpbGUobnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgdXBkYXRlUHVibGlzaEZvcm0oeyBmaWxlUGF0aDogc2VsZWN0ZWRGaWxlIH0pO1xuICAgIGhhbmRsZUNsb3NlTW9kYWwoKTtcbiAgICBuYXZpZ2F0ZVRvUHVibGlzaCgpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChmaWxlPzogV2ViRmlsZSkgPT4ge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBzZXRTZWxlY3RlZEZpbGUoZmlsZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgaXNPcGVuIHR5cGU9XCJjYXJkXCIgb25BYm9ydGVkPXtoYW5kbGVDbG9zZU1vZGFsfSBvbkNvbmZpcm1lZD17aGFuZGxlQ2xvc2VNb2RhbH0+XG4gICAgICA8Q2FyZFxuICAgICAgICBpY29uPXtJQ09OUy5QVUJMSVNIfVxuICAgICAgICB0aXRsZT17X18oJ0Nob29zZSBhIGZpbGUnKX1cbiAgICAgICAgc3VidGl0bGU9e19fKCdPbmx5IG9uZSBmaWxlIGlzIGFsbG93ZWQsIGNob29zZSB3aXNlbHk6Jyl9XG4gICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmlsZUxpc3QgZmlsZXM9e2ZpbGVzfSBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX19hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkRmlsZSB8fCAhZmlsZXMgfHwgIWZpbGVzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICBidXR0b249XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBsYWJlbD17X18oJ0FjY2VwdCcpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJsaW5rXCIgbGFiZWw9e19fKCdDYW5jZWwnKX0gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKE1vZGFsRmlsZVNlbGVjdGlvbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFoQkE7QUE5QkE7QUFDQTtBQXNEQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modalFileSelection/view.jsx\n");

/***/ })

}]);