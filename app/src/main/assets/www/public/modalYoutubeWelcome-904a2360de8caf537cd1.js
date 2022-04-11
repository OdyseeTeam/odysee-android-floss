(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalYoutubeWelcome"],{

/***/ "../ui/modal/modalYoutubeWelcome/index.js":
/*!************************************************!*\
  !*** ../ui/modal/modalYoutubeWelcome/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalYoutubeWelcome/view.jsx\");\n\n\n\n\nvar select = function select(state) {\n  return {};\n};\n\nvar perform = {\n  doHideModal: redux_actions_app__WEBPACK_IMPORTED_MODULE_1__[\"doHideModal\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxZb3V0dWJlV2VsY29tZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbFlvdXR1YmVXZWxjb21lL2luZGV4LmpzPzM4MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGRvSGlkZU1vZGFsIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9hcHAnO1xuaW1wb3J0IFdhbGxldFNlbmQgZnJvbSAnLi92aWV3JztcblxuY29uc3Qgc2VsZWN0ID0gc3RhdGUgPT4gKHt9KTtcblxuY29uc3QgcGVyZm9ybSA9IHtcbiAgZG9IaWRlTW9kYWwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzZWxlY3QsXG4gIHBlcmZvcm1cbikoV2FsbGV0U2VuZCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modalYoutubeWelcome/index.js\n");

/***/ }),

/***/ "../ui/modal/modalYoutubeWelcome/view.jsx":
/*!************************************************!*\
  !*** ../ui/modal/modalYoutubeWelcome/view.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ \"../config.js\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var constants_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/pages */ \"../ui/constants/pages.js\");\n/* harmony import */ var constants_pages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(constants_pages__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\n/* harmony import */ var component_common_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! component/common/card */ \"../ui/component/common/card.jsx\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-confetti */ \"../node_modules/react-confetti/dist/react-confetti.min.js\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n\n\n\n\n\n\n\n\nvar YoutubeWelcome = function YoutubeWelcome(props) {\n  var doHideModal = props.doHideModal;\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n    isOpen: true,\n    type: \"card\",\n    onAborted: doHideModal\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_confetti__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    recycle: false,\n    style: {\n      position: 'fixed'\n    },\n    numberOfPieces: 100\n  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_common_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: !config__WEBPACK_IMPORTED_MODULE_0__[\"SIMPLE_SITE\"] ? __(\"You're free!\") : __('Welcome to Odysee'),\n    subtitle: !config__WEBPACK_IMPORTED_MODULE_0__[\"SIMPLE_SITE\"] ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"p\", null, __(\"You've escaped the land of spying, censorship, and exploitation.\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n      className: \"emoji\"\n    }, \" \\uD83D\\uDCA9\")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"p\", null, __('Welcome to the land of content freedom.'), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n      className: \"emoji\"\n    }, \" \\uD83C\\uDF08\"))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"p\", null, __('You make the party extra special!'), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n      className: \"emoji\"\n    }, \" \\uD83D\\uDC96\"))),\n    actions: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"card__actions\"\n    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      button: \"primary\",\n      label: __('Create an Account'),\n      navigate: \"/$/\".concat(constants_pages__WEBPACK_IMPORTED_MODULE_1__[\"AUTH\"]),\n      onClick: doHideModal\n    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      button: \"link\",\n      label: __('Not Yet'),\n      onClick: doHideModal\n    }))\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (YoutubeWelcome);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxZb3V0dWJlV2VsY29tZS92aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbFlvdXR1YmVXZWxjb21lL3ZpZXcuanN4PzRlZWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCB7IFNJTVBMRV9TSVRFIH0gZnJvbSAnY29uZmlnJztcbmltcG9ydCAqIGFzIFBBR0VTIGZyb20gJ2NvbnN0YW50cy9wYWdlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdtb2RhbC9tb2RhbCc7XG5pbXBvcnQgQ2FyZCBmcm9tICdjb21wb25lbnQvY29tbW9uL2NhcmQnO1xuaW1wb3J0IENvbmZldHRpIGZyb20gJ3JlYWN0LWNvbmZldHRpJztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50L2J1dHRvbic7XG5cbnR5cGUgUHJvcHMgPSB7IGRvSGlkZU1vZGFsOiAoKSA9PiB2b2lkIH07XG5cbmNvbnN0IFlvdXR1YmVXZWxjb21lID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGRvSGlkZU1vZGFsIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbCBpc09wZW4gdHlwZT1cImNhcmRcIiBvbkFib3J0ZWQ9e2RvSGlkZU1vZGFsfT5cbiAgICAgIDxDb25mZXR0aSByZWN5Y2xlPXtmYWxzZX0gc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcgfX0gbnVtYmVyT2ZQaWVjZXM9ezEwMH0gLz5cbiAgICAgIDxDYXJkXG4gICAgICAgIHRpdGxlPXshU0lNUExFX1NJVEUgPyBfXyhcIllvdSdyZSBmcmVlIVwiKSA6IF9fKCdXZWxjb21lIHRvIE9keXNlZScpfVxuICAgICAgICBzdWJ0aXRsZT17XG4gICAgICAgICAgIVNJTVBMRV9TSVRFID8gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICB7X18oXCJZb3UndmUgZXNjYXBlZCB0aGUgbGFuZCBvZiBzcHlpbmcsIGNlbnNvcnNoaXAsIGFuZCBleHBsb2l0YXRpb24uXCIpfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVtb2ppXCI+IPCfkqk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAge19fKCdXZWxjb21lIHRvIHRoZSBsYW5kIG9mIGNvbnRlbnQgZnJlZWRvbS4nKX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbW9qaVwiPiDwn4yIPC9zcGFuPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHtfXygnWW91IG1ha2UgdGhlIHBhcnR5IGV4dHJhIHNwZWNpYWwhJyl9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZW1vamlcIj4g8J+Sljwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19hY3Rpb25zXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGJ1dHRvbj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBsYWJlbD17X18oJ0NyZWF0ZSBhbiBBY2NvdW50Jyl9XG4gICAgICAgICAgICAgIG5hdmlnYXRlPXtgLyQvJHtQQUdFUy5BVVRIfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2RvSGlkZU1vZGFsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gYnV0dG9uPVwibGlua1wiIGxhYmVsPXtfXygnTm90IFlldCcpfSBvbkNsaWNrPXtkb0hpZGVNb2RhbH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L01vZGFsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgWW91dHViZVdlbGNvbWU7XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFLQTtBQUFBO0FBSUE7QUFBQTtBQU9BO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUEvQkE7QUFOQTtBQUNBO0FBNENBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/modal/modalYoutubeWelcome/view.jsx\n");

/***/ })

}]);