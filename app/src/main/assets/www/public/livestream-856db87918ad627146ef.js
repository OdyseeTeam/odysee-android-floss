(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["livestream"],{

/***/ "../ui/page/livestream/index.js":
/*!**************************************!*\
  !*** ../ui/page/livestream/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/selectors/claims */ \"../ui/redux/selectors/claims.js\");\n/* harmony import */ var redux_actions_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/actions/content */ \"../ui/redux/actions/content.js\");\n/* harmony import */ var redux_actions_websocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/actions/websocket */ \"../ui/redux/actions/websocket.js\");\n/* harmony import */ var util_claim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util/claim */ \"../ui/util/claim.js\");\n/* harmony import */ var redux_selectors_livestream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux/selectors/livestream */ \"../ui/redux/selectors/livestream.js\");\n/* harmony import */ var redux_selectors_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux/selectors/settings */ \"../ui/redux/selectors/settings.js\");\n/* harmony import */ var constants_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! constants/settings */ \"../ui/constants/settings.js\");\n/* harmony import */ var redux_selectors_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux/selectors/content */ \"../ui/redux/selectors/content.js\");\n/* harmony import */ var redux_actions_livestream__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux/actions/livestream */ \"../ui/redux/actions/livestream.js\");\n/* harmony import */ var redux_actions_memberships__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux/actions/memberships */ \"../ui/redux/actions/memberships.js\");\n/* harmony import */ var redux_selectors_comments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux/selectors/comments */ \"../ui/redux/selectors/comments.js\");\n/* harmony import */ var redux_selectors_memberships__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux/selectors/memberships */ \"../ui/redux/selectors/memberships.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view */ \"../ui/page/livestream/view.jsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar select = function select(state, props) {\n  var uri = props.uri;\n  var claim = Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__[\"selectClaimForUri\"])(state, uri);\n\n  var _ref = claim || {},\n      claimId = _ref.claim_id,\n      canonical_url = _ref.canonical_url;\n\n  var channelClaimId = Object(util_claim__WEBPACK_IMPORTED_MODULE_4__[\"getChannelIdFromClaim\"])(claim);\n  return {\n    chatDisabled: Object(redux_selectors_comments__WEBPACK_IMPORTED_MODULE_11__[\"selectCommentsDisabledSettingForChannelId\"])(state, channelClaimId),\n    activeLivestreamForChannel: Object(redux_selectors_livestream__WEBPACK_IMPORTED_MODULE_5__[\"selectActiveLivestreamForChannel\"])(state, channelClaimId),\n    activeLivestreamInitialized: Object(redux_selectors_livestream__WEBPACK_IMPORTED_MODULE_5__[\"selectActiveLivestreamInitialized\"])(state),\n    channelClaimId: channelClaimId,\n    isStreamPlaying: Object(redux_selectors_content__WEBPACK_IMPORTED_MODULE_8__[\"selectIsUriCurrentlyPlaying\"])(state, uri),\n    socketConnection: Object(redux_selectors_livestream__WEBPACK_IMPORTED_MODULE_5__[\"selectSocketConnectionForId\"])(state, claimId),\n    theaterMode: Object(redux_selectors_settings__WEBPACK_IMPORTED_MODULE_6__[\"selectClientSetting\"])(state, constants_settings__WEBPACK_IMPORTED_MODULE_7__[\"VIDEO_THEATER_MODE\"]),\n    uri: canonical_url || '',\n    contentUnlocked: claimId && Object(redux_selectors_memberships__WEBPACK_IMPORTED_MODULE_12__[\"selectNoRestrictionOrUserIsMemberForContentClaimId\"])(state, claimId)\n  };\n};\n\nvar perform = {\n  doSetPrimaryUri: redux_actions_content__WEBPACK_IMPORTED_MODULE_2__[\"doSetPrimaryUri\"],\n  doCommentSocketConnect: redux_actions_websocket__WEBPACK_IMPORTED_MODULE_3__[\"doCommentSocketConnect\"],\n  doCommentSocketDisconnect: redux_actions_websocket__WEBPACK_IMPORTED_MODULE_3__[\"doCommentSocketDisconnect\"],\n  doFetchChannelLiveStatus: redux_actions_livestream__WEBPACK_IMPORTED_MODULE_9__[\"doFetchChannelLiveStatus\"],\n  doMembershipContentforStreamClaimId: redux_actions_memberships__WEBPACK_IMPORTED_MODULE_10__[\"doMembershipContentforStreamClaimId\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_13__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS9saXZlc3RyZWFtL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL3BhZ2UvbGl2ZXN0cmVhbS9pbmRleC5qcz9jZDQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZWxlY3RDbGFpbUZvclVyaSB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9jbGFpbXMnO1xuaW1wb3J0IHsgZG9TZXRQcmltYXJ5VXJpIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9jb250ZW50JztcbmltcG9ydCB7IGRvQ29tbWVudFNvY2tldENvbm5lY3QsIGRvQ29tbWVudFNvY2tldERpc2Nvbm5lY3QgfSBmcm9tICdyZWR1eC9hY3Rpb25zL3dlYnNvY2tldCc7XG5pbXBvcnQgeyBnZXRDaGFubmVsSWRGcm9tQ2xhaW0gfSBmcm9tICd1dGlsL2NsYWltJztcbmltcG9ydCB7XG4gIHNlbGVjdEFjdGl2ZUxpdmVzdHJlYW1Gb3JDaGFubmVsLFxuICBzZWxlY3RBY3RpdmVMaXZlc3RyZWFtSW5pdGlhbGl6ZWQsXG4gIHNlbGVjdFNvY2tldENvbm5lY3Rpb25Gb3JJZCxcbn0gZnJvbSAncmVkdXgvc2VsZWN0b3JzL2xpdmVzdHJlYW0nO1xuaW1wb3J0IHsgc2VsZWN0Q2xpZW50U2V0dGluZyB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9zZXR0aW5ncyc7XG5pbXBvcnQgKiBhcyBTRVRUSU5HUyBmcm9tICdjb25zdGFudHMvc2V0dGluZ3MnO1xuaW1wb3J0IHsgc2VsZWN0SXNVcmlDdXJyZW50bHlQbGF5aW5nIH0gZnJvbSAncmVkdXgvc2VsZWN0b3JzL2NvbnRlbnQnO1xuaW1wb3J0IHsgZG9GZXRjaENoYW5uZWxMaXZlU3RhdHVzIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9saXZlc3RyZWFtJztcbmltcG9ydCB7IGRvTWVtYmVyc2hpcENvbnRlbnRmb3JTdHJlYW1DbGFpbUlkIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9tZW1iZXJzaGlwcyc7XG5pbXBvcnQgeyBzZWxlY3RDb21tZW50c0Rpc2FibGVkU2V0dGluZ0ZvckNoYW5uZWxJZCB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9jb21tZW50cyc7XG5pbXBvcnQgeyBzZWxlY3ROb1Jlc3RyaWN0aW9uT3JVc2VySXNNZW1iZXJGb3JDb250ZW50Q2xhaW1JZCB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9tZW1iZXJzaGlwcyc7XG5cbmltcG9ydCBMaXZlc3RyZWFtUGFnZSBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBzZWxlY3QgPSAoc3RhdGUsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdXJpIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFpbSA9IHNlbGVjdENsYWltRm9yVXJpKHN0YXRlLCB1cmkpO1xuICBjb25zdCB7IGNsYWltX2lkOiBjbGFpbUlkLCBjYW5vbmljYWxfdXJsIH0gPSBjbGFpbSB8fCB7fTtcbiAgY29uc3QgY2hhbm5lbENsYWltSWQgPSBnZXRDaGFubmVsSWRGcm9tQ2xhaW0oY2xhaW0pO1xuXG4gIHJldHVybiB7XG4gICAgY2hhdERpc2FibGVkOiBzZWxlY3RDb21tZW50c0Rpc2FibGVkU2V0dGluZ0ZvckNoYW5uZWxJZChzdGF0ZSwgY2hhbm5lbENsYWltSWQpLFxuICAgIGFjdGl2ZUxpdmVzdHJlYW1Gb3JDaGFubmVsOiBzZWxlY3RBY3RpdmVMaXZlc3RyZWFtRm9yQ2hhbm5lbChzdGF0ZSwgY2hhbm5lbENsYWltSWQpLFxuICAgIGFjdGl2ZUxpdmVzdHJlYW1Jbml0aWFsaXplZDogc2VsZWN0QWN0aXZlTGl2ZXN0cmVhbUluaXRpYWxpemVkKHN0YXRlKSxcbiAgICBjaGFubmVsQ2xhaW1JZCxcbiAgICBpc1N0cmVhbVBsYXlpbmc6IHNlbGVjdElzVXJpQ3VycmVudGx5UGxheWluZyhzdGF0ZSwgdXJpKSxcbiAgICBzb2NrZXRDb25uZWN0aW9uOiBzZWxlY3RTb2NrZXRDb25uZWN0aW9uRm9ySWQoc3RhdGUsIGNsYWltSWQpLFxuICAgIHRoZWF0ZXJNb2RlOiBzZWxlY3RDbGllbnRTZXR0aW5nKHN0YXRlLCBTRVRUSU5HUy5WSURFT19USEVBVEVSX01PREUpLFxuICAgIHVyaTogY2Fub25pY2FsX3VybCB8fCAnJyxcbiAgICBjb250ZW50VW5sb2NrZWQ6IGNsYWltSWQgJiYgc2VsZWN0Tm9SZXN0cmljdGlvbk9yVXNlcklzTWVtYmVyRm9yQ29udGVudENsYWltSWQoc3RhdGUsIGNsYWltSWQpLFxuICB9O1xufTtcblxuY29uc3QgcGVyZm9ybSA9IHtcbiAgZG9TZXRQcmltYXJ5VXJpLFxuICBkb0NvbW1lbnRTb2NrZXRDb25uZWN0LFxuICBkb0NvbW1lbnRTb2NrZXREaXNjb25uZWN0LFxuICBkb0ZldGNoQ2hhbm5lbExpdmVTdGF0dXMsXG4gIGRvTWVtYmVyc2hpcENvbnRlbnRmb3JTdHJlYW1DbGFpbUlkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QsIHBlcmZvcm0pKExpdmVzdHJlYW1QYWdlKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVBBO0FBQ0E7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/page/livestream/index.js\n");

/***/ })

}]);