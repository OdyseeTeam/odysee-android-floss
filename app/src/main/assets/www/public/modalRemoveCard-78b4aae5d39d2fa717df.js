(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalRemoveCard"],{

/***/ "../ui/modal/modalRemoveCard/index.js":
/*!********************************************!*\
  !*** ../ui/modal/modalRemoveCard/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var redux_actions_claims__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/actions/claims */ \"../ui/redux/actions/claims.js\");\n/* harmony import */ var redux_selectors_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/selectors/wallet */ \"../ui/redux/selectors/wallet.js\");\n/* harmony import */ var redux_actions_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux/actions/notifications */ \"../ui/redux/actions/notifications.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalRemoveCard/view.jsx\");\n\n\n\n\n\n\n\nvar select = function select(state) {\n  return {\n    transactionItems: Object(redux_selectors_wallet__WEBPACK_IMPORTED_MODULE_3__[\"selectTransactionItems\"])(state)\n  };\n};\n\nvar perform = function perform(dispatch) {\n  return {\n    toast: function toast(message, isError) {\n      return dispatch(Object(redux_actions_notifications__WEBPACK_IMPORTED_MODULE_4__[\"doToast\"])({\n        message: message,\n        isError: isError\n      }));\n    },\n    closeModal: function closeModal() {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_1__[\"doHideModal\"])());\n    },\n    abandonTxo: function abandonTxo(txo, cb) {\n      return dispatch(Object(redux_actions_claims__WEBPACK_IMPORTED_MODULE_2__[\"doAbandonTxo\"])(txo, cb));\n    },\n    doResolveUri: function doResolveUri(uri) {\n      return dispatch(Object(redux_actions_claims__WEBPACK_IMPORTED_MODULE_2__[\"doResolveUri\"])(uri));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_5__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxSZW1vdmVDYXJkL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsUmVtb3ZlQ2FyZC9pbmRleC5qcz9lY2M1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkb0hpZGVNb2RhbCB9IGZyb20gJ3JlZHV4L2FjdGlvbnMvYXBwJztcbmltcG9ydCB7IGRvQWJhbmRvblR4bywgZG9SZXNvbHZlVXJpIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9jbGFpbXMnO1xuaW1wb3J0IHsgc2VsZWN0VHJhbnNhY3Rpb25JdGVtcyB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy93YWxsZXQnO1xuaW1wb3J0IHsgZG9Ub2FzdCB9IGZyb20gJ3JlZHV4L2FjdGlvbnMvbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgTW9kYWxSZXZva2VDbGFpbSBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBzZWxlY3QgPSAoc3RhdGUpID0+ICh7XG4gIHRyYW5zYWN0aW9uSXRlbXM6IHNlbGVjdFRyYW5zYWN0aW9uSXRlbXMoc3RhdGUpLFxufSk7XG5cbmNvbnN0IHBlcmZvcm0gPSAoZGlzcGF0Y2gpID0+ICh7XG4gIHRvYXN0OiAobWVzc2FnZSwgaXNFcnJvcikgPT4gZGlzcGF0Y2goZG9Ub2FzdCh7IG1lc3NhZ2UsIGlzRXJyb3IgfSkpLFxuICBjbG9zZU1vZGFsOiAoKSA9PiBkaXNwYXRjaChkb0hpZGVNb2RhbCgpKSxcbiAgYWJhbmRvblR4bzogKHR4bywgY2IpID0+IGRpc3BhdGNoKGRvQWJhbmRvblR4byh0eG8sIGNiKSksXG4gIGRvUmVzb2x2ZVVyaTogKHVyaSkgPT4gZGlzcGF0Y2goZG9SZXNvbHZlVXJpKHVyaSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0LCBwZXJmb3JtKShNb2RhbFJldm9rZUNsYWltKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFFQTtBQUFBO0FBRkE7QUFHQTtBQUFBO0FBSEE7QUFJQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQ0E7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/modal/modalRemoveCard/index.js\n");

/***/ }),

/***/ "../ui/modal/modalRemoveCard/view.jsx":
/*!********************************************!*\
  !*** ../ui/modal/modalRemoveCard/view.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ModalRemoveCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\n/* harmony import */ var component_common_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/common/card */ \"../ui/component/common/card.jsx\");\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var constants_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/icons */ \"../ui/constants/icons.js\");\n/* harmony import */ var lbryinc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lbryinc */ \"../extras/lbryinc/index.js\");\n/* harmony import */ var util_stripe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util/stripe */ \"../ui/util/stripe.js\");\n\n\n\n\n\n\n\nvar stripeEnvironment = Object(util_stripe__WEBPACK_IMPORTED_MODULE_6__[\"getStripeEnvironment\"])();\nfunction ModalRemoveCard(props) {\n  var closeModal = props.closeModal,\n      paymentMethodId = props.paymentMethodId;\n\n  function removeCard() {\n    lbryinc__WEBPACK_IMPORTED_MODULE_5__[\"Lbryio\"].call('customer', 'detach', {\n      environment: stripeEnvironment,\n      payment_method_id: paymentMethodId\n    }, 'post').then(function (removeCardResponse) {\n      // TODO: add toast here\n      // closeModal();\n      // Is there a better way to handle this? Why reload?\n      window.location.reload();\n    });\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n    ariaHideApp: false,\n    isOpen: true,\n    contentLabel: 'hello',\n    type: \"card\",\n    onAborted: closeModal\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_common_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: __('Confirm Remove Card'),\n    actions: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__actions\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      className: \"stripe__confirm-remove-card\",\n      button: \"secondary\",\n      icon: constants_icons__WEBPACK_IMPORTED_MODULE_4__[\"DELETE\"],\n      label: __('Remove Card'),\n      onClick: removeCard\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      button: \"link\",\n      label: __('Cancel'),\n      onClick: closeModal\n    }))\n  }));\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxSZW1vdmVDYXJkL3ZpZXcuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsUmVtb3ZlQ2FyZC92aWV3LmpzeD9hNmJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdtb2RhbC9tb2RhbCc7XG5pbXBvcnQgQ2FyZCBmcm9tICdjb21wb25lbnQvY29tbW9uL2NhcmQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnQvYnV0dG9uJztcbmltcG9ydCAqIGFzIElDT05TIGZyb20gJ2NvbnN0YW50cy9pY29ucyc7XG5pbXBvcnQgeyBMYnJ5aW8gfSBmcm9tICdsYnJ5aW5jJztcbmltcG9ydCB7IGdldFN0cmlwZUVudmlyb25tZW50IH0gZnJvbSAndXRpbC9zdHJpcGUnO1xubGV0IHN0cmlwZUVudmlyb25tZW50ID0gZ2V0U3RyaXBlRW52aXJvbm1lbnQoKTtcblxudHlwZSBQcm9wcyA9IHtcbiAgY2xvc2VNb2RhbDogKCkgPT4gdm9pZCxcbiAgcGF5bWVudE1ldGhvZElkOiBzdHJpbmcsXG4gIHNldEFzQ29uZmlybWluZ0NhcmQ6ICgpID0+IHZvaWQsIC8vID9cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsUmVtb3ZlQ2FyZChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBjbG9zZU1vZGFsLCBwYXltZW50TWV0aG9kSWQgfSA9IHByb3BzO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUNhcmQoKSB7XG4gICAgTGJyeWlvLmNhbGwoXG4gICAgICAnY3VzdG9tZXInLFxuICAgICAgJ2RldGFjaCcsXG4gICAgICB7XG4gICAgICAgIGVudmlyb25tZW50OiBzdHJpcGVFbnZpcm9ubWVudCxcbiAgICAgICAgcGF5bWVudF9tZXRob2RfaWQ6IHBheW1lbnRNZXRob2RJZCxcbiAgICAgIH0sXG4gICAgICAncG9zdCdcbiAgICApLnRoZW4oKHJlbW92ZUNhcmRSZXNwb25zZSkgPT4ge1xuICAgICAgLy8gVE9ETzogYWRkIHRvYXN0IGhlcmVcbiAgICAgIC8vIGNsb3NlTW9kYWwoKTtcbiAgICAgIC8vIElzIHRoZXJlIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcz8gV2h5IHJlbG9hZD9cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIGFyaWFIaWRlQXBwPXtmYWxzZX0gaXNPcGVuIGNvbnRlbnRMYWJlbD17J2hlbGxvJ30gdHlwZT1cImNhcmRcIiBvbkFib3J0ZWQ9e2Nsb3NlTW9kYWx9PlxuICAgICAgPENhcmRcbiAgICAgICAgdGl0bGU9e19fKCdDb25maXJtIFJlbW92ZSBDYXJkJyl9XG4gICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9fYWN0aW9uc1wiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdHJpcGVfX2NvbmZpcm0tcmVtb3ZlLWNhcmRcIlxuICAgICAgICAgICAgICBidXR0b249XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBpY29uPXtJQ09OUy5ERUxFVEV9XG4gICAgICAgICAgICAgIGxhYmVsPXtfXygnUmVtb3ZlIENhcmQnKX1cbiAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlQ2FyZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uIGJ1dHRvbj1cImxpbmtcIiBsYWJlbD17X18oJ0NhbmNlbCcpfSBvbkNsaWNrPXtjbG9zZU1vZGFsfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvTW9kYWw+XG4gICk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFpQkE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/modal/modalRemoveCard/view.jsx\n");

/***/ })

}]);