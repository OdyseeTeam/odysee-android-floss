(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popoutChat"],{

/***/ "../ui/page/popoutChatWrapper/index.js":
/*!*********************************************!*\
  !*** ../ui/page/popoutChatWrapper/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var util_lbryURI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util/lbryURI */ \"../ui/util/lbryURI.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_websocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/actions/websocket */ \"../ui/redux/actions/websocket.js\");\n/* harmony import */ var redux_actions_claims__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/actions/claims */ \"../ui/redux/actions/claims.js\");\n/* harmony import */ var redux_selectors_claims__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux/selectors/claims */ \"../ui/redux/selectors/claims.js\");\n/* harmony import */ var redux_selectors_memberships__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux/selectors/memberships */ \"../ui/redux/selectors/memberships.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view */ \"../ui/page/popoutChatWrapper/view.jsx\");\n\n\n\n\n\n\n\n\nvar select = function select(state, props) {\n  var match = props.match;\n  var params = match.params;\n  var channelName = params.channelName,\n      streamName = params.streamName;\n  var uri = Object(util_lbryURI__WEBPACK_IMPORTED_MODULE_0__[\"buildURI\"])({\n    channelName: channelName.replace(':', '#'),\n    streamName: streamName.replace(':', '#')\n  }) || '';\n  var claim = Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_4__[\"selectClaimForUri\"])(state, uri);\n  return {\n    claim: claim,\n    uri: uri,\n    isProtectedContent: Boolean(Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_4__[\"selectProtectedContentTagForUri\"])(state, uri)),\n    contentUnlocked: claim && Object(redux_selectors_memberships__WEBPACK_IMPORTED_MODULE_5__[\"selectNoRestrictionOrUserIsMemberForContentClaimId\"])(state, claim.claim_id),\n    contentRestrictedFromUser: claim && Object(redux_selectors_memberships__WEBPACK_IMPORTED_MODULE_5__[\"selectIsProtectedContentLockedFromUserForId\"])(state, claim.claim_id)\n  };\n};\n\nvar perform = {\n  doCommentSocketConnectAsCommenter: redux_actions_websocket__WEBPACK_IMPORTED_MODULE_2__[\"doCommentSocketConnectAsCommenter\"],\n  doCommentSocketDisconnectAsCommenter: redux_actions_websocket__WEBPACK_IMPORTED_MODULE_2__[\"doCommentSocketDisconnectAsCommenter\"],\n  doResolveUri: redux_actions_claims__WEBPACK_IMPORTED_MODULE_3__[\"doResolveUri\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_6__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS9wb3BvdXRDaGF0V3JhcHBlci9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9wYWdlL3BvcG91dENoYXRXcmFwcGVyL2luZGV4LmpzPzI4NTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVpbGRVUkkgfSBmcm9tICd1dGlsL2xicnlVUkknO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGRvQ29tbWVudFNvY2tldENvbm5lY3RBc0NvbW1lbnRlciwgZG9Db21tZW50U29ja2V0RGlzY29ubmVjdEFzQ29tbWVudGVyIH0gZnJvbSAncmVkdXgvYWN0aW9ucy93ZWJzb2NrZXQnO1xuaW1wb3J0IHsgZG9SZXNvbHZlVXJpIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9jbGFpbXMnO1xuaW1wb3J0IHsgc2VsZWN0Q2xhaW1Gb3JVcmksIHNlbGVjdFByb3RlY3RlZENvbnRlbnRUYWdGb3JVcmkgfSBmcm9tICdyZWR1eC9zZWxlY3RvcnMvY2xhaW1zJztcbmltcG9ydCB7XG4gIHNlbGVjdE5vUmVzdHJpY3Rpb25PclVzZXJJc01lbWJlckZvckNvbnRlbnRDbGFpbUlkLFxuICBzZWxlY3RJc1Byb3RlY3RlZENvbnRlbnRMb2NrZWRGcm9tVXNlckZvcklkLFxufSBmcm9tICdyZWR1eC9zZWxlY3RvcnMvbWVtYmVyc2hpcHMnO1xuXG5pbXBvcnQgUG9wb3V0Q2hhdFBhZ2UgZnJvbSAnLi92aWV3JztcblxuY29uc3Qgc2VsZWN0ID0gKHN0YXRlLCBwcm9wcykgPT4ge1xuICBjb25zdCB7IG1hdGNoIH0gPSBwcm9wcztcbiAgY29uc3QgeyBwYXJhbXMgfSA9IG1hdGNoO1xuICBjb25zdCB7IGNoYW5uZWxOYW1lLCBzdHJlYW1OYW1lIH0gPSBwYXJhbXM7XG5cbiAgY29uc3QgdXJpID0gYnVpbGRVUkkoeyBjaGFubmVsTmFtZTogY2hhbm5lbE5hbWUucmVwbGFjZSgnOicsICcjJyksIHN0cmVhbU5hbWU6IHN0cmVhbU5hbWUucmVwbGFjZSgnOicsICcjJykgfSkgfHwgJyc7XG5cbiAgY29uc3QgY2xhaW0gPSBzZWxlY3RDbGFpbUZvclVyaShzdGF0ZSwgdXJpKTtcblxuICByZXR1cm4ge1xuICAgIGNsYWltLFxuICAgIHVyaSxcbiAgICBpc1Byb3RlY3RlZENvbnRlbnQ6IEJvb2xlYW4oc2VsZWN0UHJvdGVjdGVkQ29udGVudFRhZ0ZvclVyaShzdGF0ZSwgdXJpKSksXG4gICAgY29udGVudFVubG9ja2VkOiBjbGFpbSAmJiBzZWxlY3ROb1Jlc3RyaWN0aW9uT3JVc2VySXNNZW1iZXJGb3JDb250ZW50Q2xhaW1JZChzdGF0ZSwgY2xhaW0uY2xhaW1faWQpLFxuICAgIGNvbnRlbnRSZXN0cmljdGVkRnJvbVVzZXI6IGNsYWltICYmIHNlbGVjdElzUHJvdGVjdGVkQ29udGVudExvY2tlZEZyb21Vc2VyRm9ySWQoc3RhdGUsIGNsYWltLmNsYWltX2lkKSxcbiAgfTtcbn07XG5cbmNvbnN0IHBlcmZvcm0gPSB7XG4gIGRvQ29tbWVudFNvY2tldENvbm5lY3RBc0NvbW1lbnRlcixcbiAgZG9Db21tZW50U29ja2V0RGlzY29ubmVjdEFzQ29tbWVudGVyLFxuICBkb1Jlc29sdmVVcmksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCwgcGVyZm9ybSkoUG9wb3V0Q2hhdFBhZ2UpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFUQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/page/popoutChatWrapper/index.js\n");

/***/ }),

/***/ "../ui/page/popoutChatWrapper/view.jsx":
/*!*********************************************!*\
  !*** ../ui/page/popoutChatWrapper/view.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PopoutChatPage; });\n/* harmony import */ var util_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util/url */ \"../ui/util/url.js\");\n/* harmony import */ var component_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component/chat */ \"../ui/component/chat/index.js\");\n/* harmony import */ var component_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/page */ \"../ui/component/page/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var component_yrbl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! component/yrbl */ \"../ui/component/yrbl/index.jsx\");\n\n\n\n\n\nfunction PopoutChatPage(props) {\n  var claim = props.claim,\n      uri = props.uri,\n      doCommentSocketConnectAsCommenter = props.doCommentSocketConnectAsCommenter,\n      doCommentSocketDisconnectAsCommenter = props.doCommentSocketDisconnectAsCommenter,\n      doResolveUri = props.doResolveUri,\n      isProtectedContent = props.isProtectedContent,\n      contentUnlocked = props.contentUnlocked,\n      contentRestrictedFromUser = props.contentRestrictedFromUser;\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    if (!claim) doResolveUri(uri, true);\n  }, [claim, doResolveUri, uri]);\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    if (!claim) return;\n    var claimId = claim.claim_id,\n        channelClaim = claim.signing_channel;\n    var channelName = channelClaim && Object(util_url__WEBPACK_IMPORTED_MODULE_0__[\"formatLbryChannelName\"])(channelClaim.canonical_url);\n    var reversedClaimId = claimId.split('').reverse().join('');\n    var claimIdToUse = isProtectedContent ? reversedClaimId : claimId;\n\n    if (claimId && channelName && contentUnlocked) {\n      doCommentSocketConnectAsCommenter(uri, channelName, claimIdToUse, isProtectedContent);\n    }\n\n    return function () {\n      if (claimId && channelName && contentUnlocked) doCommentSocketDisconnectAsCommenter(claimIdToUse, channelName);\n    };\n  }, [claim, contentUnlocked, doCommentSocketConnectAsCommenter, doCommentSocketDisconnectAsCommenter, isProtectedContent, uri]);\n\n  if (contentRestrictedFromUser) {\n    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n      className: \"main--empty\"\n    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(component_yrbl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      type: \"sad\",\n      subtitle: __('No results')\n    }));\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(component_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    noSideNavigation: true,\n    noFooter: true,\n    noHeader: true,\n    isPopoutWindow: true\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(component_chat__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    uri: uri,\n    isPopoutWindow: true\n  }));\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS9wb3BvdXRDaGF0V3JhcHBlci92aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9wYWdlL3BvcG91dENoYXRXcmFwcGVyL3ZpZXcuanN4PzdkMTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCB7IGZvcm1hdExicnlDaGFubmVsTmFtZSB9IGZyb20gJ3V0aWwvdXJsJztcbmltcG9ydCBDaGF0TGF5b3V0IGZyb20gJ2NvbXBvbmVudC9jaGF0JztcbmltcG9ydCBQYWdlIGZyb20gJ2NvbXBvbmVudC9wYWdlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgWXJibCBmcm9tICdjb21wb25lbnQveXJibCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsYWltOiBTdHJlYW1DbGFpbSxcbiAgdXJpOiBzdHJpbmcsXG4gIGRvQ29tbWVudFNvY2tldENvbm5lY3RBc0NvbW1lbnRlcjogKHN0cmluZywgc3RyaW5nLCBzdHJpbmcsID9ib29sZWFuKSA9PiB2b2lkLFxuICBkb0NvbW1lbnRTb2NrZXREaXNjb25uZWN0QXNDb21tZW50ZXI6IChzdHJpbmcsIHN0cmluZykgPT4gdm9pZCxcbiAgZG9SZXNvbHZlVXJpOiAoc3RyaW5nLCBib29sZWFuKSA9PiB2b2lkLFxuICBpc1Byb3RlY3RlZENvbnRlbnQ6IGJvb2xlYW4sXG4gIGNvbnRlbnRVbmxvY2tlZDogYm9vbGVhbixcbiAgY29udGVudFJlc3RyaWN0ZWRGcm9tVXNlcjogYm9vbGVhbixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcG91dENoYXRQYWdlKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7XG4gICAgY2xhaW0sXG4gICAgdXJpLFxuICAgIGRvQ29tbWVudFNvY2tldENvbm5lY3RBc0NvbW1lbnRlcixcbiAgICBkb0NvbW1lbnRTb2NrZXREaXNjb25uZWN0QXNDb21tZW50ZXIsXG4gICAgZG9SZXNvbHZlVXJpLFxuICAgIGlzUHJvdGVjdGVkQ29udGVudCxcbiAgICBjb250ZW50VW5sb2NrZWQsXG4gICAgY29udGVudFJlc3RyaWN0ZWRGcm9tVXNlcixcbiAgfSA9IHByb3BzO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFjbGFpbSkgZG9SZXNvbHZlVXJpKHVyaSwgdHJ1ZSk7XG4gIH0sIFtjbGFpbSwgZG9SZXNvbHZlVXJpLCB1cmldKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghY2xhaW0pIHJldHVybjtcblxuICAgIGNvbnN0IHsgY2xhaW1faWQ6IGNsYWltSWQsIHNpZ25pbmdfY2hhbm5lbDogY2hhbm5lbENsYWltIH0gPSBjbGFpbTtcbiAgICBjb25zdCBjaGFubmVsTmFtZSA9IGNoYW5uZWxDbGFpbSAmJiBmb3JtYXRMYnJ5Q2hhbm5lbE5hbWUoY2hhbm5lbENsYWltLmNhbm9uaWNhbF91cmwpO1xuXG4gICAgY29uc3QgcmV2ZXJzZWRDbGFpbUlkID0gY2xhaW1JZC5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgIGNvbnN0IGNsYWltSWRUb1VzZSA9IGlzUHJvdGVjdGVkQ29udGVudCA/IHJldmVyc2VkQ2xhaW1JZCA6IGNsYWltSWQ7XG5cbiAgICBpZiAoY2xhaW1JZCAmJiBjaGFubmVsTmFtZSAmJiBjb250ZW50VW5sb2NrZWQpIHtcbiAgICAgIGRvQ29tbWVudFNvY2tldENvbm5lY3RBc0NvbW1lbnRlcih1cmksIGNoYW5uZWxOYW1lLCBjbGFpbUlkVG9Vc2UsIGlzUHJvdGVjdGVkQ29udGVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChjbGFpbUlkICYmIGNoYW5uZWxOYW1lICYmIGNvbnRlbnRVbmxvY2tlZCkgZG9Db21tZW50U29ja2V0RGlzY29ubmVjdEFzQ29tbWVudGVyKGNsYWltSWRUb1VzZSwgY2hhbm5lbE5hbWUpO1xuICAgIH07XG4gIH0sIFtcbiAgICBjbGFpbSxcbiAgICBjb250ZW50VW5sb2NrZWQsXG4gICAgZG9Db21tZW50U29ja2V0Q29ubmVjdEFzQ29tbWVudGVyLFxuICAgIGRvQ29tbWVudFNvY2tldERpc2Nvbm5lY3RBc0NvbW1lbnRlcixcbiAgICBpc1Byb3RlY3RlZENvbnRlbnQsXG4gICAgdXJpLFxuICBdKTtcblxuICBpZiAoY29udGVudFJlc3RyaWN0ZWRGcm9tVXNlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tLWVtcHR5XCI+XG4gICAgICAgIDxZcmJsIHR5cGU9XCJzYWRcIiBzdWJ0aXRsZT17X18oJ05vIHJlc3VsdHMnKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5vU2lkZU5hdmlnYXRpb24gbm9Gb290ZXIgbm9IZWFkZXIgaXNQb3BvdXRXaW5kb3c+XG4gICAgICA8Q2hhdExheW91dCB1cmk9e3VyaX0gaXNQb3BvdXRXaW5kb3cgLz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBYkE7QUFDQTtBQXdCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/page/popoutChatWrapper/view.jsx\n");

/***/ })

}]);