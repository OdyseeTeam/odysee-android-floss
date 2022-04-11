(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settingsStripeAccount"],{

/***/ "../ui/page/settingsStripeAccount/index.js":
/*!*************************************************!*\
  !*** ../ui/page/settingsStripeAccount/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"../ui/page/settingsStripeAccount/view.jsx\");\n/* harmony import */ var redux_actions_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/actions/notifications */ \"../ui/redux/actions/notifications.js\");\n\n\n\n\n\nvar select = function select(state) {\n  return {};\n};\n\nvar perform = function perform(dispatch) {\n  return {\n    doToast: function doToast(options) {\n      return dispatch(Object(redux_actions_notifications__WEBPACK_IMPORTED_MODULE_3__[\"doToast\"])(options));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"])));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS9zZXR0aW5nc1N0cmlwZUFjY291bnQvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vdWkvcGFnZS9zZXR0aW5nc1N0cmlwZUFjY291bnQvaW5kZXguanM/YTMzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgU3RyaXBlQWNjb3VudENvbm5lY3Rpb24gZnJvbSAnLi92aWV3JztcbmltcG9ydCB7IGRvVG9hc3QgfSBmcm9tICdyZWR1eC9hY3Rpb25zL25vdGlmaWNhdGlvbnMnO1xuXG5jb25zdCBzZWxlY3QgPSAoc3RhdGUpID0+ICh7fSk7XG5cbmNvbnN0IHBlcmZvcm0gPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGRvVG9hc3Q6IChvcHRpb25zKSA9PiBkaXNwYXRjaChkb1RvYXN0KG9wdGlvbnMpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3Qoc2VsZWN0LCBwZXJmb3JtKShTdHJpcGVBY2NvdW50Q29ubmVjdGlvbikpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/page/settingsStripeAccount/index.js\n");

/***/ }),

/***/ "../ui/page/settingsStripeAccount/view.jsx":
/*!*************************************************!*\
  !*** ../ui/page/settingsStripeAccount/view.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var constants_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/icons */ \"../ui/constants/icons.js\");\n/* harmony import */ var constants_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/pages */ \"../ui/constants/pages.js\");\n/* harmony import */ var constants_pages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(constants_pages__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var component_common_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! component/common/card */ \"../ui/component/common/card.jsx\");\n/* harmony import */ var component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! component/page */ \"../ui/component/page/index.js\");\n/* harmony import */ var lbryinc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lbryinc */ \"../extras/lbryinc/index.js\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! config */ \"../config.js\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var util_stripe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util/stripe */ \"../ui/util/stripe.js\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n\n\n\n\n\n\n\n\n\nvar isDev = false;\nvar stripeEnvironment = Object(util_stripe__WEBPACK_IMPORTED_MODULE_8__[\"getStripeEnvironment\"])();\nvar successStripeRedirectUrl, failureStripeRedirectUrl;\nvar successEndpoint = '/$/settings/tip_account';\nvar failureEndpoint = '/$/settings/tip_account';\n\nif (isDev) {\n  successStripeRedirectUrl = 'http://localhost:' + config__WEBPACK_IMPORTED_MODULE_7__[\"WEBPACK_WEB_PORT\"] + successEndpoint;\n  failureStripeRedirectUrl = 'http://localhost:' + config__WEBPACK_IMPORTED_MODULE_7__[\"WEBPACK_WEB_PORT\"] + failureEndpoint;\n} else {\n  successStripeRedirectUrl = config__WEBPACK_IMPORTED_MODULE_7__[\"URL\"] + successEndpoint;\n  failureStripeRedirectUrl = config__WEBPACK_IMPORTED_MODULE_7__[\"URL\"] + failureEndpoint;\n}\n\nvar StripeAccountConnection = /*#__PURE__*/function (_React$Component) {\n  _inherits(StripeAccountConnection, _React$Component);\n\n  function StripeAccountConnection(props) {\n    var _this;\n\n    _classCallCheck(this, StripeAccountConnection);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(StripeAccountConnection).call(this, props));\n    _this.state = {\n      error: false,\n      content: null,\n      loading: true,\n      accountConfirmed: false,\n      accountPendingConfirmation: false,\n      accountNotConfirmedButReceivedTips: false,\n      unpaidBalance: 0,\n      stripeConnectionUrl: '',\n      pageTitle: 'Add Payout Method',\n      stillRequiringVerification: false,\n      accountTransactions: []\n    };\n    return _this;\n  }\n\n  _createClass(StripeAccountConnection, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var doToast = this.props.doToast;\n      var that = this;\n\n      function getAndSetAccountLink(stillNeedToConfirmAccount) {\n        lbryinc__WEBPACK_IMPORTED_MODULE_6__[\"Lbryio\"].call('account', 'link', {\n          return_url: successStripeRedirectUrl,\n          refresh_url: failureStripeRedirectUrl,\n          environment: stripeEnvironment\n        }, 'post').then(function (accountLinkResponse) {\n          // stripe link for user to navigate to and confirm account\n          var stripeConnectionUrl = accountLinkResponse.url; // set connection url on frontend\n\n          that.setState({\n            stripeConnectionUrl: stripeConnectionUrl\n          }); // show the account confirmation link if not created already\n\n          if (stillNeedToConfirmAccount) {\n            that.setState({\n              accountPendingConfirmation: true\n            });\n          }\n        });\n      } // call the account status endpoint\n\n\n      lbryinc__WEBPACK_IMPORTED_MODULE_6__[\"Lbryio\"].call('account', 'status', {\n        environment: stripeEnvironment\n      }, 'post').then(function (accountStatusResponse) {\n        var yetToBeCashedOutBalance = accountStatusResponse.total_received_unpaid;\n\n        if (yetToBeCashedOutBalance) {\n          that.setState({\n            unpaidBalance: yetToBeCashedOutBalance\n          });\n          lbryinc__WEBPACK_IMPORTED_MODULE_6__[\"Lbryio\"].call('account', 'list', {\n            environment: stripeEnvironment\n          }, 'post').then(function (accountListResponse) {\n            // TODO type this\n            that.setState({\n              accountTransactions: accountListResponse.reverse()\n            });\n          });\n        } // if charges already enabled, no need to generate an account link\n\n\n        if (accountStatusResponse.charges_enabled) {\n          // account has already been confirmed\n          var eventuallyDueInformation = accountStatusResponse.account_info.requirements.eventually_due;\n          var currentlyDueInformation = accountStatusResponse.account_info.requirements.currently_due;\n          var objectToUpdateState = {\n            accountConfirmed: true,\n            stillRequiringVerification: false\n          };\n\n          if (eventuallyDueInformation && eventuallyDueInformation.length || currentlyDueInformation && currentlyDueInformation.length) {\n            objectToUpdateState.stillRequiringVerification = true;\n            getAndSetAccountLink(false);\n          }\n\n          that.setState(objectToUpdateState); // user has not confirmed an account but have received payments\n        } else if (accountStatusResponse.total_received_unpaid > 0) {\n          that.setState({\n            accountNotConfirmedButReceivedTips: true\n          });\n          getAndSetAccountLink(); // user has not received any amount or confirmed an account\n        } else {\n          // get stripe link and set it on the frontend\n          // pass true so it updates the frontend\n          getAndSetAccountLink(true);\n        }\n      })[\"catch\"](function (error) {\n        // errorString passed from the API (with a 403 error)\n        var errorString = 'account not linked to user, please link first'; // if it's beamer's error indicating the account is not linked yet\n\n        if (error.message.indexOf(errorString) > -1) {\n          // get stripe link and set it on the frontend\n          getAndSetAccountLink(true);\n        } else {\n          // probably an error from stripe\n          var displayString = __('There was an error getting your account setup, please try again later');\n\n          doToast({\n            message: displayString,\n            isError: true\n          }); // not an error from Beamer, throw it\n\n          throw new Error(error);\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          stripeConnectionUrl = _this$state.stripeConnectionUrl,\n          accountConfirmed = _this$state.accountConfirmed,\n          accountPendingConfirmation = _this$state.accountPendingConfirmation,\n          unpaidBalance = _this$state.unpaidBalance,\n          accountNotConfirmedButReceivedTips = _this$state.accountNotConfirmedButReceivedTips,\n          pageTitle = _this$state.pageTitle,\n          stillRequiringVerification = _this$state.stillRequiringVerification;\n      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_page__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        noFooter: true,\n        noSideNavigation: true,\n        settingsPage: true,\n        className: \"card-stack\",\n        backout: {\n          title: pageTitle,\n          backLabel: __('Back')\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_common_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"table__header-text\"\n        }, __('Connect a bank account')),\n        isBodyList: true,\n        body: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, !accountConfirmed && !accountPendingConfirmation && !accountNotConfirmedButReceivedTips && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"card__body-actions\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"h3\", null, __('Getting your bank account connection status...'))))), !accountConfirmed && accountPendingConfirmation && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"card__body-actions\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"h3\", null, __('Connect your bank account to Odysee to receive donations directly from users'))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"section__actions\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"a\", {\n          href: stripeConnectionUrl\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          button: \"secondary\",\n          label: __('Connect your bank account'),\n          icon: constants_icons__WEBPACK_IMPORTED_MODULE_0__[\"FINANCE\"]\n        }))))), accountConfirmed && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"card__body-actions\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"h3\", null, __('Congratulations! Your account has been connected with Odysee.')), stillRequiringVerification && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"h3\", {\n          style: {\n            marginTop: '10px'\n          }\n        }, \"Although your account is connected it still requires verification to begin receiving tips.\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"h3\", {\n          style: {\n            marginTop: '10px'\n          }\n        }, \"Please use the button below to complete your verification process and enable tipping for your account.\"))))), accountNotConfirmedButReceivedTips && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"card__body-actions\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"h3\", null, __('Congratulations, you have already begun receiving tips on Odysee!')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"h3\", null, __('Your pending account balance is $%balance% USD.', {\n          balance: unpaidBalance / 100\n        }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"h3\", null, __('Connect your bank account to be able to cash your pending balance out to your account.'))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"section__actions\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"a\", {\n          href: stripeConnectionUrl\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          button: \"secondary\",\n          label: __('Connect your bank account'),\n          icon: constants_icons__WEBPACK_IMPORTED_MODULE_0__[\"FINANCE\"]\n        }))))))) // only show additional buttons if its for additional verification or to show transaction page\n        ,\n        actions: (stillRequiringVerification || accountConfirmed) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, stillRequiringVerification && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          button: \"primary\",\n          label: __('Complete Verification'),\n          icon: constants_icons__WEBPACK_IMPORTED_MODULE_0__[\"SETTINGS\"],\n          navigate: stripeConnectionUrl,\n          className: \"stripe__complete-verification-button\"\n        }), accountConfirmed && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          button: \"secondary\",\n          label: __('View Transactions'),\n          icon: constants_icons__WEBPACK_IMPORTED_MODULE_0__[\"SETTINGS\"],\n          navigate: \"/$/\".concat(constants_pages__WEBPACK_IMPORTED_MODULE_1__[\"WALLET\"], \"?fiatType=incoming&tab=fiat-payment-history&currency=fiat\")\n        }))\n      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null));\n    }\n  }]);\n\n  return StripeAccountConnection;\n}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StripeAccountConnection);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS9zZXR0aW5nc1N0cmlwZUFjY291bnQvdmlldy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vdWkvcGFnZS9zZXR0aW5nc1N0cmlwZUFjY291bnQvdmlldy5qc3g/YjM2MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgSUNPTlMgZnJvbSAnY29uc3RhbnRzL2ljb25zJztcbmltcG9ydCAqIGFzIFBBR0VTIGZyb20gJ2NvbnN0YW50cy9wYWdlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnQvYnV0dG9uJztcbmltcG9ydCBDYXJkIGZyb20gJ2NvbXBvbmVudC9jb21tb24vY2FyZCc7XG5pbXBvcnQgUGFnZSBmcm9tICdjb21wb25lbnQvcGFnZSc7XG5cbmltcG9ydCB7IExicnlpbyB9IGZyb20gJ2xicnlpbmMnO1xuaW1wb3J0IHsgVVJMLCBXRUJQQUNLX1dFQl9QT1JUIH0gZnJvbSAnY29uZmlnJztcbmltcG9ydCB7IGdldFN0cmlwZUVudmlyb25tZW50IH0gZnJvbSAndXRpbC9zdHJpcGUnO1xuXG5jb25zdCBpc0RldiA9IGZhbHNlO1xuXG5sZXQgc3RyaXBlRW52aXJvbm1lbnQgPSBnZXRTdHJpcGVFbnZpcm9ubWVudCgpO1xubGV0IHN1Y2Nlc3NTdHJpcGVSZWRpcmVjdFVybCwgZmFpbHVyZVN0cmlwZVJlZGlyZWN0VXJsO1xubGV0IHN1Y2Nlc3NFbmRwb2ludCA9ICcvJC9zZXR0aW5ncy90aXBfYWNjb3VudCc7XG5sZXQgZmFpbHVyZUVuZHBvaW50ID0gJy8kL3NldHRpbmdzL3RpcF9hY2NvdW50JztcbmlmIChpc0Rldikge1xuICBzdWNjZXNzU3RyaXBlUmVkaXJlY3RVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDonICsgV0VCUEFDS19XRUJfUE9SVCArIHN1Y2Nlc3NFbmRwb2ludDtcbiAgZmFpbHVyZVN0cmlwZVJlZGlyZWN0VXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6JyArIFdFQlBBQ0tfV0VCX1BPUlQgKyBmYWlsdXJlRW5kcG9pbnQ7XG59IGVsc2Uge1xuICBzdWNjZXNzU3RyaXBlUmVkaXJlY3RVcmwgPSBVUkwgKyBzdWNjZXNzRW5kcG9pbnQ7XG4gIGZhaWx1cmVTdHJpcGVSZWRpcmVjdFVybCA9IFVSTCArIGZhaWx1cmVFbmRwb2ludDtcbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgc291cmNlOiBzdHJpbmcsXG4gIGRvT3Blbk1vZGFsOiAoc3RyaW5nLCB7fSkgPT4gdm9pZCxcbiAgZG9Ub2FzdDogKHsgbWVzc2FnZTogc3RyaW5nIH0pID0+IHZvaWQsXG59O1xuXG50eXBlIFN0YXRlID0ge1xuICBlcnJvcjogYm9vbGVhbixcbiAgbG9hZGluZzogYm9vbGVhbixcbiAgY29udGVudDogP3N0cmluZyxcbiAgc3RyaXBlQ29ubmVjdGlvblVybDogc3RyaW5nLFxuICBhY2NvdW50Q29uZmlybWVkOiBib29sZWFuLFxuICBhY2NvdW50UGVuZGluZ0NvbmZpcm1hdGlvbjogYm9vbGVhbixcbiAgYWNjb3VudE5vdENvbmZpcm1lZEJ1dFJlY2VpdmVkVGlwczogYm9vbGVhbixcbiAgdW5wYWlkQmFsYW5jZTogbnVtYmVyLFxuICBwYWdlVGl0bGU6IHN0cmluZyxcbiAgc3RpbGxSZXF1aXJpbmdWZXJpZmljYXRpb246IGJvb2xlYW4sXG4gIGFjY291bnRUcmFuc2FjdGlvbnM6IGFueSxcbn07XG5cbmNsYXNzIFN0cmlwZUFjY291bnRDb25uZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgYWNjb3VudENvbmZpcm1lZDogZmFsc2UsXG4gICAgICBhY2NvdW50UGVuZGluZ0NvbmZpcm1hdGlvbjogZmFsc2UsXG4gICAgICBhY2NvdW50Tm90Q29uZmlybWVkQnV0UmVjZWl2ZWRUaXBzOiBmYWxzZSxcbiAgICAgIHVucGFpZEJhbGFuY2U6IDAsXG4gICAgICBzdHJpcGVDb25uZWN0aW9uVXJsOiAnJyxcbiAgICAgIHBhZ2VUaXRsZTogJ0FkZCBQYXlvdXQgTWV0aG9kJyxcbiAgICAgIHN0aWxsUmVxdWlyaW5nVmVyaWZpY2F0aW9uOiBmYWxzZSxcbiAgICAgIGFjY291bnRUcmFuc2FjdGlvbnM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgZG9Ub2FzdCA9IHRoaXMucHJvcHMuZG9Ub2FzdDtcblxuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGdldEFuZFNldEFjY291bnRMaW5rKHN0aWxsTmVlZFRvQ29uZmlybUFjY291bnQpIHtcbiAgICAgIExicnlpby5jYWxsKFxuICAgICAgICAnYWNjb3VudCcsXG4gICAgICAgICdsaW5rJyxcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybl91cmw6IHN1Y2Nlc3NTdHJpcGVSZWRpcmVjdFVybCxcbiAgICAgICAgICByZWZyZXNoX3VybDogZmFpbHVyZVN0cmlwZVJlZGlyZWN0VXJsLFxuICAgICAgICAgIGVudmlyb25tZW50OiBzdHJpcGVFbnZpcm9ubWVudCxcbiAgICAgICAgfSxcbiAgICAgICAgJ3Bvc3QnXG4gICAgICApLnRoZW4oKGFjY291bnRMaW5rUmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gc3RyaXBlIGxpbmsgZm9yIHVzZXIgdG8gbmF2aWdhdGUgdG8gYW5kIGNvbmZpcm0gYWNjb3VudFxuICAgICAgICBjb25zdCBzdHJpcGVDb25uZWN0aW9uVXJsID0gYWNjb3VudExpbmtSZXNwb25zZS51cmw7XG5cbiAgICAgICAgLy8gc2V0IGNvbm5lY3Rpb24gdXJsIG9uIGZyb250ZW5kXG4gICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgIHN0cmlwZUNvbm5lY3Rpb25VcmwsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHNob3cgdGhlIGFjY291bnQgY29uZmlybWF0aW9uIGxpbmsgaWYgbm90IGNyZWF0ZWQgYWxyZWFkeVxuICAgICAgICBpZiAoc3RpbGxOZWVkVG9Db25maXJtQWNjb3VudCkge1xuICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWNjb3VudFBlbmRpbmdDb25maXJtYXRpb246IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNhbGwgdGhlIGFjY291bnQgc3RhdHVzIGVuZHBvaW50XG4gICAgTGJyeWlvLmNhbGwoXG4gICAgICAnYWNjb3VudCcsXG4gICAgICAnc3RhdHVzJyxcbiAgICAgIHtcbiAgICAgICAgZW52aXJvbm1lbnQ6IHN0cmlwZUVudmlyb25tZW50LFxuICAgICAgfSxcbiAgICAgICdwb3N0J1xuICAgIClcbiAgICAgIC50aGVuKChhY2NvdW50U3RhdHVzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgeWV0VG9CZUNhc2hlZE91dEJhbGFuY2UgPSBhY2NvdW50U3RhdHVzUmVzcG9uc2UudG90YWxfcmVjZWl2ZWRfdW5wYWlkO1xuICAgICAgICBpZiAoeWV0VG9CZUNhc2hlZE91dEJhbGFuY2UpIHtcbiAgICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICAgIHVucGFpZEJhbGFuY2U6IHlldFRvQmVDYXNoZWRPdXRCYWxhbmNlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgTGJyeWlvLmNhbGwoXG4gICAgICAgICAgICAnYWNjb3VudCcsXG4gICAgICAgICAgICAnbGlzdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudmlyb25tZW50OiBzdHJpcGVFbnZpcm9ubWVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncG9zdCdcbiAgICAgICAgICApLnRoZW4oKGFjY291bnRMaXN0UmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy8gVE9ETyB0eXBlIHRoaXNcbiAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBhY2NvdW50VHJhbnNhY3Rpb25zOiBhY2NvdW50TGlzdFJlc3BvbnNlLnJldmVyc2UoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgY2hhcmdlcyBhbHJlYWR5IGVuYWJsZWQsIG5vIG5lZWQgdG8gZ2VuZXJhdGUgYW4gYWNjb3VudCBsaW5rXG4gICAgICAgIGlmIChhY2NvdW50U3RhdHVzUmVzcG9uc2UuY2hhcmdlc19lbmFibGVkKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBoYXMgYWxyZWFkeSBiZWVuIGNvbmZpcm1lZFxuXG4gICAgICAgICAgY29uc3QgZXZlbnR1YWxseUR1ZUluZm9ybWF0aW9uID0gYWNjb3VudFN0YXR1c1Jlc3BvbnNlLmFjY291bnRfaW5mby5yZXF1aXJlbWVudHMuZXZlbnR1YWxseV9kdWU7XG5cbiAgICAgICAgICBjb25zdCBjdXJyZW50bHlEdWVJbmZvcm1hdGlvbiA9IGFjY291bnRTdGF0dXNSZXNwb25zZS5hY2NvdW50X2luZm8ucmVxdWlyZW1lbnRzLmN1cnJlbnRseV9kdWU7XG5cbiAgICAgICAgICBsZXQgb2JqZWN0VG9VcGRhdGVTdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjY291bnRDb25maXJtZWQ6IHRydWUsXG4gICAgICAgICAgICBzdGlsbFJlcXVpcmluZ1ZlcmlmaWNhdGlvbjogZmFsc2UsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChldmVudHVhbGx5RHVlSW5mb3JtYXRpb24gJiYgZXZlbnR1YWxseUR1ZUluZm9ybWF0aW9uLmxlbmd0aCkgfHxcbiAgICAgICAgICAgIChjdXJyZW50bHlEdWVJbmZvcm1hdGlvbiAmJiBjdXJyZW50bHlEdWVJbmZvcm1hdGlvbi5sZW5ndGgpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBvYmplY3RUb1VwZGF0ZVN0YXRlLnN0aWxsUmVxdWlyaW5nVmVyaWZpY2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGdldEFuZFNldEFjY291bnRMaW5rKGZhbHNlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGF0LnNldFN0YXRlKG9iamVjdFRvVXBkYXRlU3RhdGUpO1xuXG4gICAgICAgICAgLy8gdXNlciBoYXMgbm90IGNvbmZpcm1lZCBhbiBhY2NvdW50IGJ1dCBoYXZlIHJlY2VpdmVkIHBheW1lbnRzXG4gICAgICAgIH0gZWxzZSBpZiAoYWNjb3VudFN0YXR1c1Jlc3BvbnNlLnRvdGFsX3JlY2VpdmVkX3VucGFpZCA+IDApIHtcbiAgICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjY291bnROb3RDb25maXJtZWRCdXRSZWNlaXZlZFRpcHM6IHRydWUsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBnZXRBbmRTZXRBY2NvdW50TGluaygpO1xuXG4gICAgICAgICAgLy8gdXNlciBoYXMgbm90IHJlY2VpdmVkIGFueSBhbW91bnQgb3IgY29uZmlybWVkIGFuIGFjY291bnRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBnZXQgc3RyaXBlIGxpbmsgYW5kIHNldCBpdCBvbiB0aGUgZnJvbnRlbmRcbiAgICAgICAgICAvLyBwYXNzIHRydWUgc28gaXQgdXBkYXRlcyB0aGUgZnJvbnRlbmRcbiAgICAgICAgICBnZXRBbmRTZXRBY2NvdW50TGluayh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgLy8gZXJyb3JTdHJpbmcgcGFzc2VkIGZyb20gdGhlIEFQSSAod2l0aCBhIDQwMyBlcnJvcilcbiAgICAgICAgY29uc3QgZXJyb3JTdHJpbmcgPSAnYWNjb3VudCBub3QgbGlua2VkIHRvIHVzZXIsIHBsZWFzZSBsaW5rIGZpcnN0JztcblxuICAgICAgICAvLyBpZiBpdCdzIGJlYW1lcidzIGVycm9yIGluZGljYXRpbmcgdGhlIGFjY291bnQgaXMgbm90IGxpbmtlZCB5ZXRcbiAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UuaW5kZXhPZihlcnJvclN0cmluZykgPiAtMSkge1xuICAgICAgICAgIC8vIGdldCBzdHJpcGUgbGluayBhbmQgc2V0IGl0IG9uIHRoZSBmcm9udGVuZFxuICAgICAgICAgIGdldEFuZFNldEFjY291bnRMaW5rKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHByb2JhYmx5IGFuIGVycm9yIGZyb20gc3RyaXBlXG4gICAgICAgICAgY29uc3QgZGlzcGxheVN0cmluZyA9IF9fKCdUaGVyZSB3YXMgYW4gZXJyb3IgZ2V0dGluZyB5b3VyIGFjY291bnQgc2V0dXAsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXInKTtcbiAgICAgICAgICBkb1RvYXN0KHsgbWVzc2FnZTogZGlzcGxheVN0cmluZywgaXNFcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAvLyBub3QgYW4gZXJyb3IgZnJvbSBCZWFtZXIsIHRocm93IGl0XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RyaXBlQ29ubmVjdGlvblVybCxcbiAgICAgIGFjY291bnRDb25maXJtZWQsXG4gICAgICBhY2NvdW50UGVuZGluZ0NvbmZpcm1hdGlvbixcbiAgICAgIHVucGFpZEJhbGFuY2UsXG4gICAgICBhY2NvdW50Tm90Q29uZmlybWVkQnV0UmVjZWl2ZWRUaXBzLFxuICAgICAgcGFnZVRpdGxlLFxuICAgICAgc3RpbGxSZXF1aXJpbmdWZXJpZmljYXRpb24sXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2VcbiAgICAgICAgbm9Gb290ZXJcbiAgICAgICAgbm9TaWRlTmF2aWdhdGlvblxuICAgICAgICBzZXR0aW5nc1BhZ2VcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1zdGFja1wiXG4gICAgICAgIGJhY2tvdXQ9e3sgdGl0bGU6IHBhZ2VUaXRsZSwgYmFja0xhYmVsOiBfXygnQmFjaycpIH19XG4gICAgICA+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgdGl0bGU9ezxkaXYgY2xhc3NOYW1lPVwidGFibGVfX2hlYWRlci10ZXh0XCI+e19fKCdDb25uZWN0IGEgYmFuayBhY2NvdW50Jyl9PC9kaXY+fVxuICAgICAgICAgIGlzQm9keUxpc3RcbiAgICAgICAgICBib2R5PXtcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHsvKiBzaG93IHdoaWxlIHdhaXRpbmcgZm9yIGFjY291bnQgc3RhdHVzICovfVxuICAgICAgICAgICAgICB7IWFjY291bnRDb25maXJtZWQgJiYgIWFjY291bnRQZW5kaW5nQ29uZmlybWF0aW9uICYmICFhY2NvdW50Tm90Q29uZmlybWVkQnV0UmVjZWl2ZWRUaXBzICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2JvZHktYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+e19fKCdHZXR0aW5nIHlvdXIgYmFuayBhY2NvdW50IGNvbm5lY3Rpb24gc3RhdHVzLi4uJyl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgey8qIHVzZXIgaGFzIHlldCB0byBjb21wbGV0ZSB0aGVpciBpbnRlZ3JhdGlvbiAqL31cbiAgICAgICAgICAgICAgeyFhY2NvdW50Q29uZmlybWVkICYmIGFjY291bnRQZW5kaW5nQ29uZmlybWF0aW9uICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2JvZHktYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+e19fKCdDb25uZWN0IHlvdXIgYmFuayBhY2NvdW50IHRvIE9keXNlZSB0byByZWNlaXZlIGRvbmF0aW9ucyBkaXJlY3RseSBmcm9tIHVzZXJzJyl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9fYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3N0cmlwZUNvbm5lY3Rpb25Vcmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJzZWNvbmRhcnlcIiBsYWJlbD17X18oJ0Nvbm5lY3QgeW91ciBiYW5rIGFjY291bnQnKX0gaWNvbj17SUNPTlMuRklOQU5DRX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHsvKiB1c2VyIGhhcyBjb21wbGV0ZWQgdGhlaXIgaW50ZWdyYXRpb24gKi99XG4gICAgICAgICAgICAgIHthY2NvdW50Q29uZmlybWVkICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2JvZHktYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+e19fKCdDb25ncmF0dWxhdGlvbnMhIFlvdXIgYWNjb3VudCBoYXMgYmVlbiBjb25uZWN0ZWQgd2l0aCBPZHlzZWUuJyl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RpbGxSZXF1aXJpbmdWZXJpZmljYXRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsdGhvdWdoIHlvdXIgYWNjb3VudCBpcyBjb25uZWN0ZWQgaXQgc3RpbGwgcmVxdWlyZXMgdmVyaWZpY2F0aW9uIHRvIGJlZ2luIHJlY2VpdmluZyB0aXBzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHVzZSB0aGUgYnV0dG9uIGJlbG93IHRvIGNvbXBsZXRlIHlvdXIgdmVyaWZpY2F0aW9uIHByb2Nlc3MgYW5kIGVuYWJsZSB0aXBwaW5nIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgYWNjb3VudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHsvKiBUT0RPOiBob3BlZnVsbHkgd2Ugd29uJ3QgYmUgdXNpbmcgdGhpcyBhbnltb3JlIGFuZCBjYW4gcmVtb3ZlIGl0ICovfVxuICAgICAgICAgICAgICB7YWNjb3VudE5vdENvbmZpcm1lZEJ1dFJlY2VpdmVkVGlwcyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19ib2R5LWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPntfXygnQ29uZ3JhdHVsYXRpb25zLCB5b3UgaGF2ZSBhbHJlYWR5IGJlZ3VuIHJlY2VpdmluZyB0aXBzIG9uIE9keXNlZSEnKX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge19fKCdZb3VyIHBlbmRpbmcgYWNjb3VudCBiYWxhbmNlIGlzICQlYmFsYW5jZSUgVVNELicsIHsgYmFsYW5jZTogdW5wYWlkQmFsYW5jZSAvIDEwMCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge19fKCdDb25uZWN0IHlvdXIgYmFuayBhY2NvdW50IHRvIGJlIGFibGUgdG8gY2FzaCB5b3VyIHBlbmRpbmcgYmFsYW5jZSBvdXQgdG8geW91ciBhY2NvdW50LicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3N0cmlwZUNvbm5lY3Rpb25Vcmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJ1dHRvbj1cInNlY29uZGFyeVwiIGxhYmVsPXtfXygnQ29ubmVjdCB5b3VyIGJhbmsgYWNjb3VudCcpfSBpY29uPXtJQ09OUy5GSU5BTkNFfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIG9ubHkgc2hvdyBhZGRpdGlvbmFsIGJ1dHRvbnMgaWYgaXRzIGZvciBhZGRpdGlvbmFsIHZlcmlmaWNhdGlvbiBvciB0byBzaG93IHRyYW5zYWN0aW9uIHBhZ2VcbiAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgIChzdGlsbFJlcXVpcmluZ1ZlcmlmaWNhdGlvbiB8fCBhY2NvdW50Q29uZmlybWVkKSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge3N0aWxsUmVxdWlyaW5nVmVyaWZpY2F0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnQ29tcGxldGUgVmVyaWZpY2F0aW9uJyl9XG4gICAgICAgICAgICAgICAgICAgIGljb249e0lDT05TLlNFVFRJTkdTfVxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZT17c3RyaXBlQ29ubmVjdGlvblVybH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RyaXBlX19jb21wbGV0ZS12ZXJpZmljYXRpb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7YWNjb3VudENvbmZpcm1lZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnVmlldyBUcmFuc2FjdGlvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17SUNPTlMuU0VUVElOR1N9XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlPXtgLyQvJHtQQUdFUy5XQUxMRVR9P2ZpYXRUeXBlPWluY29taW5nJnRhYj1maWF0LXBheW1lbnQtaGlzdG9yeSZjdXJyZW5jeT1maWF0YH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmlwZUFjY291bnRDb25uZWN0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFxQkE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBRkE7QUFlQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQXZCQTtBQU5BO0FBQ0E7QUFDQTtBQWdDQTtBQUlBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUlBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQVRBO0FBUEE7QUFDQTtBQUNBO0FBcUJBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQXdCQTtBQUNBO0FBREE7QUFJQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFsRUE7QUFxRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWxGQTtBQW9GQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQVVBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUFBO0FBT0E7QUFBQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUF2RUE7QUFpRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBOUZBO0FBNEdBOzs7O0FBelFBO0FBQ0E7QUEyUUE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/page/settingsStripeAccount/view.jsx\n");

/***/ })

}]);