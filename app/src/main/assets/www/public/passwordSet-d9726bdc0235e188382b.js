(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["passwordSet"],{

/***/ "../ui/component/userPasswordSet/index.js":
/*!************************************************!*\
  !*** ../ui/component/userPasswordSet/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/user */ \"../ui/redux/actions/user.js\");\n/* harmony import */ var redux_actions_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/actions/notifications */ \"../ui/redux/actions/notifications.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ \"../ui/component/userPasswordSet/view.jsx\");\n\n\n\n\n\nvar select = function select(state) {\n  return {// passwordSetSuccess: selectPasswordSetSuccess(state),\n    // passwordSetIsPending: selectPasswordSetIsPending(state),\n    // passwordSetError: selectPasswordSetError(state),\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, {\n  doToast: redux_actions_notifications__WEBPACK_IMPORTED_MODULE_2__[\"doToast\"],\n  doClearEmailEntry: redux_actions_user__WEBPACK_IMPORTED_MODULE_1__[\"doClearEmailEntry\"],\n  doUserFetch: redux_actions_user__WEBPACK_IMPORTED_MODULE_1__[\"doUserFetch\"]\n})(_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L3VzZXJQYXNzd29yZFNldC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9jb21wb25lbnQvdXNlclBhc3N3b3JkU2V0L2luZGV4LmpzP2M2MzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGRvQ2xlYXJFbWFpbEVudHJ5LCBkb1VzZXJGZXRjaCB9IGZyb20gJ3JlZHV4L2FjdGlvbnMvdXNlcic7XG5pbXBvcnQgeyBkb1RvYXN0IH0gZnJvbSAncmVkdXgvYWN0aW9ucy9ub3RpZmljYXRpb25zJztcbmltcG9ydCBVc2VyU2lnbkluIGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IHNlbGVjdCA9IHN0YXRlID0+ICh7XG4gIC8vIHBhc3N3b3JkU2V0U3VjY2Vzczogc2VsZWN0UGFzc3dvcmRTZXRTdWNjZXNzKHN0YXRlKSxcbiAgLy8gcGFzc3dvcmRTZXRJc1BlbmRpbmc6IHNlbGVjdFBhc3N3b3JkU2V0SXNQZW5kaW5nKHN0YXRlKSxcbiAgLy8gcGFzc3dvcmRTZXRFcnJvcjogc2VsZWN0UGFzc3dvcmRTZXRFcnJvcihzdGF0ZSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QsIHtcbiAgZG9Ub2FzdCxcbiAgZG9DbGVhckVtYWlsRW50cnksXG4gIGRvVXNlckZldGNoLFxufSkoVXNlclNpZ25Jbik7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/component/userPasswordSet/index.js\n");

/***/ }),

/***/ "../ui/component/userPasswordSet/view.jsx":
/*!************************************************!*\
  !*** ../ui/component/userPasswordSet/view.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var constants_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/pages */ \"../ui/constants/pages.js\");\n/* harmony import */ var constants_pages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(constants_pages__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lbryinc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lbryinc */ \"../extras/lbryinc/index.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var component_common_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! component/common/card */ \"../ui/component/common/card.jsx\");\n/* harmony import */ var component_common_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! component/common/form */ \"../ui/component/common/form.jsx\");\n/* harmony import */ var component_common_error_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! component/common/error-text */ \"../ui/component/common/error-text.jsx\");\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var component_nag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! component/nag */ \"../ui/component/nag/index.js\");\n/* harmony import */ var component_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! component/spinner */ \"../ui/component/spinner/index.js\");\nfunction _slicedToArray(arr, i) {\n  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\n\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nfunction _iterableToArrayLimit(arr, i) {\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nfunction UserPasswordReset(props) {\n  var doClearEmailEntry = props.doClearEmailEntry,\n      doToast = props.doToast,\n      doUserFetch = props.doUserFetch;\n\n  var _useHistory = Object(react_router__WEBPACK_IMPORTED_MODULE_3__[\"useHistory\"])(),\n      location = _useHistory.location,\n      push = _useHistory.push;\n\n  var urlParams = new URLSearchParams(location.search);\n  var email = urlParams.get('email');\n  var authToken = urlParams.get('auth_token');\n  var verificationToken = urlParams.get('verification_token');\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      password = _React$useState2[0],\n      setPassword = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      error = _React$useState4[0],\n      setError = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState6 = _slicedToArray(_React$useState5, 2),\n      loading = _React$useState6[0],\n      setLoading = _React$useState6[1];\n\n  function handleSubmit() {\n    setLoading(true);\n    lbryinc__WEBPACK_IMPORTED_MODULE_2__[\"Lbryio\"].call('user_email', 'confirm', {\n      email: email,\n      verification_token: verificationToken\n    }).then(function () {\n      return lbryinc__WEBPACK_IMPORTED_MODULE_2__[\"Lbryio\"].call('user_password', 'set', {\n        auth_token: authToken,\n        new_password: password\n      }, 'post');\n    }).then(doUserFetch).then(function () {\n      setLoading(false);\n      doToast({\n        message: __('Password successfully changed!')\n      });\n      push(\"/\");\n    })[\"catch\"](function (error) {\n      setLoading(false);\n      setError(error.message);\n    });\n  }\n\n  function handleRestart() {\n    doClearEmailEntry();\n    push(\"/$/\".concat(constants_pages__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_SIGNIN\"]));\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"section\", {\n    className: \"main__sign-in\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component_common_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: __('Choose a new password'),\n    subtitle: __('Setting a new password for %email%', {\n      email: email\n    }),\n    actions: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component_common_form__WEBPACK_IMPORTED_MODULE_5__[\"Form\"], {\n      onSubmit: handleSubmit,\n      className: \"section\"\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component_common_form__WEBPACK_IMPORTED_MODULE_5__[\"FormField\"], {\n      autoFocus: true,\n      type: \"password\",\n      name: \"password_set\",\n      label: __('New Password'),\n      value: password,\n      onChange: function onChange(e) {\n        return setPassword(e.target.value);\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"section__actions\"\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      button: \"primary\",\n      type: \"submit\",\n      label: loading ? __('Updating Password') : __('Update Password'),\n      disabled: !password || loading\n    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      button: \"link\",\n      label: __('Cancel'),\n      onClick: handleRestart\n    }), loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component_spinner__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      type: \"small\"\n    })))),\n    nag: error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component_nag__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      type: \"error\",\n      relative: true,\n      message: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component_common_error_text__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, error)\n    })\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserPasswordReset);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L3VzZXJQYXNzd29yZFNldC92aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9jb21wb25lbnQvdXNlclBhc3N3b3JkU2V0L3ZpZXcuanN4P2QxYzciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFBBR0VTIGZyb20gJ2NvbnN0YW50cy9wYWdlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGJyeWlvIH0gZnJvbSAnbGJyeWluYyc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBDYXJkIGZyb20gJ2NvbXBvbmVudC9jb21tb24vY2FyZCc7XG5pbXBvcnQgeyBGb3JtLCBGb3JtRmllbGQgfSBmcm9tICdjb21wb25lbnQvY29tbW9uL2Zvcm0nO1xuaW1wb3J0IEVycm9yVGV4dCBmcm9tICdjb21wb25lbnQvY29tbW9uL2Vycm9yLXRleHQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnQvYnV0dG9uJztcbmltcG9ydCBOYWcgZnJvbSAnY29tcG9uZW50L25hZyc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICdjb21wb25lbnQvc3Bpbm5lcic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHVzZXI6ID9Vc2VyLFxuICBkb0NsZWFyRW1haWxFbnRyeTogKCkgPT4gdm9pZCxcbiAgZG9Vc2VyRmV0Y2g6ICgpID0+IHZvaWQsXG4gIGRvVG9hc3Q6ICh7IG1lc3NhZ2U6IHN0cmluZyB9KSA9PiB2b2lkLFxuICBoaXN0b3J5OiB7IHB1c2g6IChzdHJpbmcpID0+IHZvaWQgfSxcbiAgbG9jYXRpb246IHsgc2VhcmNoOiBzdHJpbmcgfSxcbiAgcGFzc3dvcmRTZXRQZW5kaW5nOiBib29sZWFuLFxuICBwYXNzd29yZFNldEVycm9yOiA/c3RyaW5nLFxufTtcblxuZnVuY3Rpb24gVXNlclBhc3N3b3JkUmVzZXQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgZG9DbGVhckVtYWlsRW50cnksIGRvVG9hc3QsIGRvVXNlckZldGNoIH0gPSBwcm9wcztcbiAgY29uc3QgeyBsb2NhdGlvbiwgcHVzaCB9ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XG4gIGNvbnN0IGVtYWlsID0gdXJsUGFyYW1zLmdldCgnZW1haWwnKTtcbiAgY29uc3QgYXV0aFRva2VuID0gdXJsUGFyYW1zLmdldCgnYXV0aF90b2tlbicpO1xuICBjb25zdCB2ZXJpZmljYXRpb25Ub2tlbiA9IHVybFBhcmFtcy5nZXQoJ3ZlcmlmaWNhdGlvbl90b2tlbicpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZSgpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBMYnJ5aW8uY2FsbCgndXNlcl9lbWFpbCcsICdjb25maXJtJywge1xuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgdmVyaWZpY2F0aW9uX3Rva2VuOiB2ZXJpZmljYXRpb25Ub2tlbixcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgTGJyeWlvLmNhbGwoXG4gICAgICAgICAgJ3VzZXJfcGFzc3dvcmQnLFxuICAgICAgICAgICdzZXQnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF1dGhfdG9rZW46IGF1dGhUb2tlbixcbiAgICAgICAgICAgIG5ld19wYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAncG9zdCdcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnRoZW4oZG9Vc2VyRmV0Y2gpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBkb1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBfXygnUGFzc3dvcmQgc3VjY2Vzc2Z1bGx5IGNoYW5nZWQhJyksXG4gICAgICAgIH0pO1xuICAgICAgICBwdXNoKGAvYCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlc3RhcnQoKSB7XG4gICAgZG9DbGVhckVtYWlsRW50cnkoKTtcbiAgICBwdXNoKGAvJC8ke1BBR0VTLkFVVEhfU0lHTklOfWApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluX19zaWduLWluXCI+XG4gICAgICA8Q2FyZFxuICAgICAgICB0aXRsZT17X18oJ0Nob29zZSBhIG5ldyBwYXNzd29yZCcpfVxuICAgICAgICBzdWJ0aXRsZT17X18oJ1NldHRpbmcgYSBuZXcgcGFzc3dvcmQgZm9yICVlbWFpbCUnLCB7IGVtYWlsIH0pfVxuICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRfc2V0XCJcbiAgICAgICAgICAgICAgICBsYWJlbD17X18oJ05ldyBQYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBidXR0b249XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2xvYWRpbmcgPyBfXygnVXBkYXRpbmcgUGFzc3dvcmQnKSA6IF9fKCdVcGRhdGUgUGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcGFzc3dvcmQgfHwgbG9hZGluZ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gYnV0dG9uPVwibGlua1wiIGxhYmVsPXtfXygnQ2FuY2VsJyl9IG9uQ2xpY2s9e2hhbmRsZVJlc3RhcnR9IC8+XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgPFNwaW5uZXIgdHlwZT1cInNtYWxsXCIgLz59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIG5hZz17ZXJyb3IgJiYgPE5hZyB0eXBlPVwiZXJyb3JcIiByZWxhdGl2ZSBtZXNzYWdlPXs8RXJyb3JUZXh0PntlcnJvcn08L0Vycm9yVGV4dD59IC8+fVxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQYXNzd29yZFJlc2V0O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFLQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBckJBO0FBd0JBO0FBQ0E7QUF6QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBU0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNUJBO0FBZ0NBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/component/userPasswordSet/view.jsx\n");

/***/ }),

/***/ "../ui/page/passwordSet/index.js":
/*!***************************************!*\
  !*** ../ui/page/passwordSet/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"../ui/page/passwordSet/view.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS9wYXNzd29yZFNldC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9wYWdlL3Bhc3N3b3JkU2V0L2luZGV4LmpzPzI3YTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhc3N3b3JkU2V0UGFnZSBmcm9tICcuL3ZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZFNldFBhZ2U7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/page/passwordSet/index.js\n");

/***/ }),

/***/ "../ui/page/passwordSet/view.jsx":
/*!***************************************!*\
  !*** ../ui/page/passwordSet/view.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PasswordSetPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var component_userPasswordSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component/userPasswordSet */ \"../ui/component/userPasswordSet/index.js\");\n/* harmony import */ var component_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/page */ \"../ui/component/page/index.js\");\n\n\n\nfunction PasswordSetPage() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    authPage: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_userPasswordSet__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS9wYXNzd29yZFNldC92aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9wYWdlL3Bhc3N3b3JkU2V0L3ZpZXcuanN4PzZhZjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlclBhc3N3b3JkU2V0IGZyb20gJ2NvbXBvbmVudC91c2VyUGFzc3dvcmRTZXQnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnY29tcG9uZW50L3BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXNzd29yZFNldFBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2UgYXV0aFBhZ2U+XG4gICAgICA8VXNlclBhc3N3b3JkU2V0IC8+XG4gICAgPC9QYWdlPlxuICApO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/page/passwordSet/view.jsx\n");

/***/ })

}]);