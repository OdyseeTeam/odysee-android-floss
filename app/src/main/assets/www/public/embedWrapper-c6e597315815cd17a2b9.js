(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["embedWrapper"],{

/***/ "../ui/page/embedWrapper/index.js":
/*!****************************************!*\
  !*** ../ui/page/embedWrapper/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"../ui/page/embedWrapper/view.jsx\");\n/* harmony import */ var redux_selectors_claims__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/selectors/claims */ \"../ui/redux/selectors/claims.js\");\n/* harmony import */ var redux_selectors_file_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/selectors/file_info */ \"../ui/redux/selectors/file_info.js\");\n/* harmony import */ var redux_actions_claims__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux/actions/claims */ \"../ui/redux/actions/claims.js\");\n/* harmony import */ var util_lbryURI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util/lbryURI */ \"../ui/util/lbryURI.js\");\n/* harmony import */ var redux_actions_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux/actions/content */ \"../ui/redux/actions/content.js\");\n/* harmony import */ var redux_selectors_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux/selectors/content */ \"../ui/redux/selectors/content.js\");\n/* harmony import */ var lbryinc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lbryinc */ \"../extras/lbryinc/index.js\");\n/* harmony import */ var redux_actions_websocket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux/actions/websocket */ \"../ui/redux/actions/websocket.js\");\n/* harmony import */ var redux_actions_livestream__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux/actions/livestream */ \"../ui/redux/actions/livestream.js\");\n/* harmony import */ var redux_selectors_livestream__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux/selectors/livestream */ \"../ui/redux/selectors/livestream.js\");\n/* harmony import */ var util_claim__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! util/claim */ \"../ui/util/claim.js\");\n/* harmony import */ var redux_actions_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux/actions/user */ \"../ui/redux/actions/user.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar select = function select(state, props) {\n  var match = props.match;\n  var params = match.params;\n  var claimName = params.claimName,\n      claimId = params.claimId;\n  var uri = claimName ? Object(util_lbryURI__WEBPACK_IMPORTED_MODULE_5__[\"buildURI\"])({\n    claimName: claimName,\n    claimId: claimId\n  }) : '';\n  var claim = Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_2__[\"selectClaimForUri\"])(state, uri);\n\n  var _ref = claim || {},\n      canonicalUrl = _ref.canonical_url,\n      channelClaim = _ref.signing_channel,\n      txid = _ref.txid,\n      nout = _ref.nout;\n\n  var _ref2 = channelClaim || {},\n      channelClaimId = _ref2.claim_id,\n      channelUri = _ref2.canonical_url,\n      channelTxid = _ref2.txid,\n      channelNout = _ref2.channelNout;\n\n  var haveClaim = Boolean(claim);\n  var nullClaim = claim === null;\n  return {\n    uri: uri,\n    claimId: claimId,\n    haveClaim: haveClaim,\n    nullClaim: nullClaim,\n    canonicalUrl: canonicalUrl,\n    txid: txid,\n    nout: nout,\n    channelUri: channelUri,\n    channelClaimId: channelClaimId,\n    channelTxid: channelTxid,\n    channelNout: channelNout,\n    costInfo: uri && Object(lbryinc__WEBPACK_IMPORTED_MODULE_8__[\"selectCostInfoForUri\"])(state, uri),\n    streamingUrl: uri && Object(redux_selectors_file_info__WEBPACK_IMPORTED_MODULE_3__[\"makeSelectStreamingUrlForUri\"])(uri)(state),\n    isResolvingUri: uri && Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_2__[\"selectIsUriResolving\"])(state, uri),\n    blackListedOutpoints: haveClaim && Object(lbryinc__WEBPACK_IMPORTED_MODULE_8__[\"selectBlackListedOutpoints\"])(state),\n    isCurrentClaimLive: canonicalUrl && Object(redux_selectors_livestream__WEBPACK_IMPORTED_MODULE_11__[\"selectIsActiveLivestreamForUri\"])(state, canonicalUrl),\n    isLivestreamClaim: Object(util_claim__WEBPACK_IMPORTED_MODULE_12__[\"isStreamPlaceholderClaim\"])(claim),\n    obscurePreview: Object(redux_selectors_content__WEBPACK_IMPORTED_MODULE_7__[\"selectShouldObscurePreviewForUri\"])(state, uri),\n    claimThumbnail: Object(util_claim__WEBPACK_IMPORTED_MODULE_12__[\"getThumbnailFromClaim\"])(claim),\n    activeLivestreamInitialized: Object(redux_selectors_livestream__WEBPACK_IMPORTED_MODULE_11__[\"selectActiveLivestreamInitialized\"])(state),\n    geoRestriction: Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_2__[\"selectGeoRestrictionForUri\"])(state, uri)\n  };\n};\n\nvar perform = {\n  doResolveUri: redux_actions_claims__WEBPACK_IMPORTED_MODULE_4__[\"doResolveUri\"],\n  doPlayUri: redux_actions_content__WEBPACK_IMPORTED_MODULE_6__[\"doPlayUri\"],\n  doFetchCostInfoForUri: lbryinc__WEBPACK_IMPORTED_MODULE_8__[\"doFetchCostInfoForUri\"],\n  doFetchChannelLiveStatus: redux_actions_livestream__WEBPACK_IMPORTED_MODULE_10__[\"doFetchChannelLiveStatus\"],\n  doCommentSocketConnect: redux_actions_websocket__WEBPACK_IMPORTED_MODULE_9__[\"doCommentSocketConnect\"],\n  doCommentSocketDisconnect: redux_actions_websocket__WEBPACK_IMPORTED_MODULE_9__[\"doCommentSocketDisconnect\"],\n  doFetchActiveLivestreams: redux_actions_livestream__WEBPACK_IMPORTED_MODULE_10__[\"doFetchActiveLivestreams\"],\n  setReferrer: redux_actions_user__WEBPACK_IMPORTED_MODULE_13__[\"doUserSetReferrerWithUri\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS9lbWJlZFdyYXBwZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vdWkvcGFnZS9lbWJlZFdyYXBwZXIvaW5kZXguanM/MjUxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEVtYmVkV3JhcHBlclBhZ2UgZnJvbSAnLi92aWV3JztcbmltcG9ydCB7IHNlbGVjdENsYWltRm9yVXJpLCBzZWxlY3RJc1VyaVJlc29sdmluZywgc2VsZWN0R2VvUmVzdHJpY3Rpb25Gb3JVcmkgfSBmcm9tICdyZWR1eC9zZWxlY3RvcnMvY2xhaW1zJztcbmltcG9ydCB7IG1ha2VTZWxlY3RTdHJlYW1pbmdVcmxGb3JVcmkgfSBmcm9tICdyZWR1eC9zZWxlY3RvcnMvZmlsZV9pbmZvJztcbmltcG9ydCB7IGRvUmVzb2x2ZVVyaSB9IGZyb20gJ3JlZHV4L2FjdGlvbnMvY2xhaW1zJztcbmltcG9ydCB7IGJ1aWxkVVJJIH0gZnJvbSAndXRpbC9sYnJ5VVJJJztcbmltcG9ydCB7IGRvUGxheVVyaSB9IGZyb20gJ3JlZHV4L2FjdGlvbnMvY29udGVudCc7XG5pbXBvcnQgeyBzZWxlY3RTaG91bGRPYnNjdXJlUHJldmlld0ZvclVyaSB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9jb250ZW50JztcbmltcG9ydCB7IHNlbGVjdENvc3RJbmZvRm9yVXJpLCBkb0ZldGNoQ29zdEluZm9Gb3JVcmksIHNlbGVjdEJsYWNrTGlzdGVkT3V0cG9pbnRzIH0gZnJvbSAnbGJyeWluYyc7XG5pbXBvcnQgeyBkb0NvbW1lbnRTb2NrZXRDb25uZWN0LCBkb0NvbW1lbnRTb2NrZXREaXNjb25uZWN0IH0gZnJvbSAncmVkdXgvYWN0aW9ucy93ZWJzb2NrZXQnO1xuaW1wb3J0IHsgZG9GZXRjaEFjdGl2ZUxpdmVzdHJlYW1zLCBkb0ZldGNoQ2hhbm5lbExpdmVTdGF0dXMgfSBmcm9tICdyZWR1eC9hY3Rpb25zL2xpdmVzdHJlYW0nO1xuaW1wb3J0IHsgc2VsZWN0SXNBY3RpdmVMaXZlc3RyZWFtRm9yVXJpLCBzZWxlY3RBY3RpdmVMaXZlc3RyZWFtSW5pdGlhbGl6ZWQgfSBmcm9tICdyZWR1eC9zZWxlY3RvcnMvbGl2ZXN0cmVhbSc7XG5pbXBvcnQgeyBnZXRUaHVtYm5haWxGcm9tQ2xhaW0sIGlzU3RyZWFtUGxhY2Vob2xkZXJDbGFpbSB9IGZyb20gJ3V0aWwvY2xhaW0nO1xuaW1wb3J0IHsgZG9Vc2VyU2V0UmVmZXJyZXJXaXRoVXJpIH0gZnJvbSAncmVkdXgvYWN0aW9ucy91c2VyJztcblxuY29uc3Qgc2VsZWN0ID0gKHN0YXRlLCBwcm9wcykgPT4ge1xuICBjb25zdCB7IG1hdGNoIH0gPSBwcm9wcztcbiAgY29uc3QgeyBwYXJhbXMgfSA9IG1hdGNoO1xuICBjb25zdCB7IGNsYWltTmFtZSwgY2xhaW1JZCB9ID0gcGFyYW1zO1xuICBjb25zdCB1cmkgPSBjbGFpbU5hbWUgPyBidWlsZFVSSSh7IGNsYWltTmFtZSwgY2xhaW1JZCB9KSA6ICcnO1xuXG4gIGNvbnN0IGNsYWltID0gc2VsZWN0Q2xhaW1Gb3JVcmkoc3RhdGUsIHVyaSk7XG4gIGNvbnN0IHsgY2Fub25pY2FsX3VybDogY2Fub25pY2FsVXJsLCBzaWduaW5nX2NoYW5uZWw6IGNoYW5uZWxDbGFpbSwgdHhpZCwgbm91dCB9ID0gY2xhaW0gfHwge307XG5cbiAgY29uc3QgeyBjbGFpbV9pZDogY2hhbm5lbENsYWltSWQsIGNhbm9uaWNhbF91cmw6IGNoYW5uZWxVcmksIHR4aWQ6IGNoYW5uZWxUeGlkLCBjaGFubmVsTm91dCB9ID0gY2hhbm5lbENsYWltIHx8IHt9O1xuICBjb25zdCBoYXZlQ2xhaW0gPSBCb29sZWFuKGNsYWltKTtcbiAgY29uc3QgbnVsbENsYWltID0gY2xhaW0gPT09IG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICB1cmksXG4gICAgY2xhaW1JZCxcbiAgICBoYXZlQ2xhaW0sXG4gICAgbnVsbENsYWltLFxuICAgIGNhbm9uaWNhbFVybCxcbiAgICB0eGlkLFxuICAgIG5vdXQsXG4gICAgY2hhbm5lbFVyaSxcbiAgICBjaGFubmVsQ2xhaW1JZCxcbiAgICBjaGFubmVsVHhpZCxcbiAgICBjaGFubmVsTm91dCxcbiAgICBjb3N0SW5mbzogdXJpICYmIHNlbGVjdENvc3RJbmZvRm9yVXJpKHN0YXRlLCB1cmkpLFxuICAgIHN0cmVhbWluZ1VybDogdXJpICYmIG1ha2VTZWxlY3RTdHJlYW1pbmdVcmxGb3JVcmkodXJpKShzdGF0ZSksXG4gICAgaXNSZXNvbHZpbmdVcmk6IHVyaSAmJiBzZWxlY3RJc1VyaVJlc29sdmluZyhzdGF0ZSwgdXJpKSxcbiAgICBibGFja0xpc3RlZE91dHBvaW50czogaGF2ZUNsYWltICYmIHNlbGVjdEJsYWNrTGlzdGVkT3V0cG9pbnRzKHN0YXRlKSxcbiAgICBpc0N1cnJlbnRDbGFpbUxpdmU6IGNhbm9uaWNhbFVybCAmJiBzZWxlY3RJc0FjdGl2ZUxpdmVzdHJlYW1Gb3JVcmkoc3RhdGUsIGNhbm9uaWNhbFVybCksXG4gICAgaXNMaXZlc3RyZWFtQ2xhaW06IGlzU3RyZWFtUGxhY2Vob2xkZXJDbGFpbShjbGFpbSksXG4gICAgb2JzY3VyZVByZXZpZXc6IHNlbGVjdFNob3VsZE9ic2N1cmVQcmV2aWV3Rm9yVXJpKHN0YXRlLCB1cmkpLFxuICAgIGNsYWltVGh1bWJuYWlsOiBnZXRUaHVtYm5haWxGcm9tQ2xhaW0oY2xhaW0pLFxuICAgIGFjdGl2ZUxpdmVzdHJlYW1Jbml0aWFsaXplZDogc2VsZWN0QWN0aXZlTGl2ZXN0cmVhbUluaXRpYWxpemVkKHN0YXRlKSxcbiAgICBnZW9SZXN0cmljdGlvbjogc2VsZWN0R2VvUmVzdHJpY3Rpb25Gb3JVcmkoc3RhdGUsIHVyaSksXG4gIH07XG59O1xuXG5jb25zdCBwZXJmb3JtID0ge1xuICBkb1Jlc29sdmVVcmksXG4gIGRvUGxheVVyaSxcbiAgZG9GZXRjaENvc3RJbmZvRm9yVXJpLFxuICBkb0ZldGNoQ2hhbm5lbExpdmVTdGF0dXMsXG4gIGRvQ29tbWVudFNvY2tldENvbm5lY3QsXG4gIGRvQ29tbWVudFNvY2tldERpc2Nvbm5lY3QsXG4gIGRvRmV0Y2hBY3RpdmVMaXZlc3RyZWFtcyxcbiAgc2V0UmVmZXJyZXI6IGRvVXNlclNldFJlZmVycmVyV2l0aFVyaSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0LCBwZXJmb3JtKShFbWJlZFdyYXBwZXJQYWdlKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQWJBO0FBQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/page/embedWrapper/index.js\n");

/***/ })

}]);