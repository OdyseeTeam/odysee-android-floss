(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tagsFollowingManage"],{

/***/ "../ui/component/tagsSelect/index.js":
/*!*******************************************!*\
  !*** ../ui/component/tagsSelect/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_selectors_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/selectors/tags */ \"../ui/redux/selectors/tags.js\");\n/* harmony import */ var redux_actions_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/actions/tags */ \"../ui/redux/actions/tags.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ \"../ui/component/tagsSelect/view.jsx\");\n\n\n\n\n\nvar select = function select(state, props) {\n  return {\n    unfollowedTags: Object(redux_selectors_tags__WEBPACK_IMPORTED_MODULE_1__[\"selectUnfollowedTags\"])(state),\n    followedTags: Object(redux_selectors_tags__WEBPACK_IMPORTED_MODULE_1__[\"selectFollowedTags\"])(state)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, {\n  doToggleTagFollowDesktop: redux_actions_tags__WEBPACK_IMPORTED_MODULE_2__[\"doToggleTagFollowDesktop\"],\n  doAddTag: redux_actions_tags__WEBPACK_IMPORTED_MODULE_2__[\"doAddTag\"],\n  doDeleteTag: redux_actions_tags__WEBPACK_IMPORTED_MODULE_2__[\"doDeleteTag\"]\n})(_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L3RhZ3NTZWxlY3QvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vdWkvY29tcG9uZW50L3RhZ3NTZWxlY3QvaW5kZXguanM/MWYyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2VsZWN0VW5mb2xsb3dlZFRhZ3MsIHNlbGVjdEZvbGxvd2VkVGFncyB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy90YWdzJztcbmltcG9ydCB7IGRvVG9nZ2xlVGFnRm9sbG93RGVza3RvcCwgZG9BZGRUYWcsIGRvRGVsZXRlVGFnIH0gZnJvbSAncmVkdXgvYWN0aW9ucy90YWdzJztcbmltcG9ydCBEaXNjb3ZlcnlGaXJzdFJ1biBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBzZWxlY3QgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuICB1bmZvbGxvd2VkVGFnczogc2VsZWN0VW5mb2xsb3dlZFRhZ3Moc3RhdGUpLFxuICBmb2xsb3dlZFRhZ3M6IHNlbGVjdEZvbGxvd2VkVGFncyhzdGF0ZSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QsIHtcbiAgZG9Ub2dnbGVUYWdGb2xsb3dEZXNrdG9wLFxuICBkb0FkZFRhZyxcbiAgZG9EZWxldGVUYWcsXG59KShEaXNjb3ZlcnlGaXJzdFJ1bik7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/component/tagsSelect/index.js\n");

/***/ }),

/***/ "../ui/component/tagsSelect/view.jsx":
/*!*******************************************!*\
  !*** ../ui/component/tagsSelect/view.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TagsSelect; });\n/* harmony import */ var constants_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/icons */ \"../ui/constants/icons.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var component_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/tag */ \"../ui/component/tag/index.js\");\n/* harmony import */ var component_tagsSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! component/tagsSearch */ \"../ui/component/tagsSearch/index.js\");\n/* harmony import */ var effects_use_persisted_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! effects/use-persisted-state */ \"../ui/effects/use-persisted-state.js\");\n/* harmony import */ var analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! analytics */ \"../ui/analytics.js\");\n/* harmony import */ var component_common_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! component/common/card */ \"../ui/component/common/card.jsx\");\nfunction _slicedToArray(arr, i) {\n  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\n\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nfunction _iterableToArrayLimit(arr, i) {\n  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) {\n    return;\n  }\n\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n\n\n\n\n\n\n\n\n/*\n  Displays tagsChosen if it exists, otherwise followedTags.\n */\n\nfunction TagsSelect(props) {\n  var showClose = props.showClose,\n      followedTags = props.followedTags,\n      _props$doToggleTagFol = props.doToggleTagFollowDesktop,\n      doToggleTagFollowDesktop = _props$doToggleTagFol === void 0 ? null : _props$doToggleTagFol,\n      title = props.title,\n      help = props.help,\n      tagsChosen = props.tagsChosen,\n      onSelect = props.onSelect,\n      onRemove = props.onRemove,\n      suggestMature = props.suggestMature,\n      disableAutoFocus = props.disableAutoFocus,\n      placeholder = props.placeholder,\n      hideHeader = props.hideHeader,\n      label = props.label,\n      limitShow = props.limitShow,\n      limitSelect = props.limitSelect;\n\n  var _usePersistedState = Object(effects_use_persisted_state__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('tag-select:has-closed', false),\n      _usePersistedState2 = _slicedToArray(_usePersistedState, 2),\n      hasClosed = _usePersistedState2[0],\n      setHasClosed = _usePersistedState2[1];\n\n  var tagsToDisplay = tagsChosen || followedTags;\n  var tagCount = tagsToDisplay.length;\n  var hasMatureTag = tagsToDisplay.map(function (tag) {\n    return tag.name;\n  }).includes('mature');\n\n  function handleClose() {\n    setHasClosed(true);\n  }\n\n  function handleTagClick(tag) {\n    if (onRemove) {\n      onRemove(tag);\n    } else if (doToggleTagFollowDesktop) {\n      doToggleTagFollowDesktop(tag.name);\n      var wasFollowing = followedTags.map(function (tag) {\n        return tag.name;\n      }).includes(tag.name);\n      var nowFollowing = !wasFollowing;\n      analytics__WEBPACK_IMPORTED_MODULE_6__[\"default\"].tagFollowEvent(tag.name, nowFollowing, 'tag-select');\n    }\n  }\n\n  react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"](function () {\n    if (tagCount === 0 && showClose) {\n      setHasClosed(false);\n    }\n  }, [tagCount, setHasClosed, showClose]);\n  return (showClose && !hasClosed || !showClose) && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_common_card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    icon: constants_icons__WEBPACK_IMPORTED_MODULE_0__[\"TAG\"],\n    title: hideHeader ? null : react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, title, showClose && tagsToDisplay.length > 0 && !hasClosed && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      button: \"close\",\n      icon: constants_icons__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE\"],\n      onClick: handleClose\n    })),\n    subtitle: help !== false && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", null, help || __(\"The tags you follow will change what's trending for you.\"), ' ', react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      button: \"link\",\n      label: __('Learn more'),\n      href: \"https://odysee.com/@OdyseeHelp:b/OdyseeBasics:c\"\n    }), \".\"),\n    actions: react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_tagsSearch__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      label: label,\n      onRemove: handleTagClick,\n      onSelect: onSelect,\n      suggestMature: suggestMature && !hasMatureTag,\n      disableAutoFocus: disableAutoFocus,\n      tagsPassedIn: tagsToDisplay,\n      placeholder: placeholder,\n      limitShow: limitShow,\n      limitSelect: limitSelect\n    }))\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L3RhZ3NTZWxlY3Qvdmlldy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vdWkvY29tcG9uZW50L3RhZ3NTZWxlY3Qvdmlldy5qc3g/MDUzNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgSUNPTlMgZnJvbSAnY29uc3RhbnRzL2ljb25zJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50L2J1dHRvbic7XG5pbXBvcnQgVGFnIGZyb20gJ2NvbXBvbmVudC90YWcnO1xuaW1wb3J0IFRhZ3NTZWFyY2ggZnJvbSAnY29tcG9uZW50L3RhZ3NTZWFyY2gnO1xuaW1wb3J0IHVzZVBlcnNpc3RlZFN0YXRlIGZyb20gJ2VmZmVjdHMvdXNlLXBlcnNpc3RlZC1zdGF0ZSc7XG5pbXBvcnQgYW5hbHl0aWNzIGZyb20gJ2FuYWx5dGljcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdjb21wb25lbnQvY29tbW9uL2NhcmQnO1xuXG50eXBlIFByb3BzID0ge1xuICBzaG93Q2xvc2U/OiBib29sZWFuLFxuICBmb2xsb3dlZFRhZ3M6IEFycmF5PFRhZz4sXG4gIGRvVG9nZ2xlVGFnRm9sbG93RGVza3RvcD86IChzdHJpbmcpID0+IHZvaWQsXG4gIHN1Z2dlc3RNYXR1cmU6IGJvb2xlYW4sXG4gIC8vIE92ZXJyaWRlc1xuICAvLyBUaGUgZGVmYXVsdCBjb21wb25lbnQgaXMgZm9yIGZvbGxvd2luZyB0YWdzXG4gIHRpdGxlPzogc3RyaW5nIHwgYm9vbGVhbixcbiAgaGVscD86IHN0cmluZyxcbiAgbGFiZWw/OiBzdHJpbmcsXG4gIHRhZ3NDaG9zZW4/OiBBcnJheTxUYWc+LFxuICBvblNlbGVjdD86IChBcnJheTxUYWc+KSA9PiB2b2lkLFxuICBvblJlbW92ZT86IChUYWcpID0+IHZvaWQsXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxuICBkaXNhYmxlQXV0b0ZvY3VzPzogYm9vbGVhbixcbiAgaGlkZUhlYWRlcj86IGJvb2xlYW4sXG4gIGxpbWl0U2hvdz86IG51bWJlcixcbiAgbGltaXRTZWxlY3Q/OiBudW1iZXIsXG59O1xuXG4vKlxuICBEaXNwbGF5cyB0YWdzQ2hvc2VuIGlmIGl0IGV4aXN0cywgb3RoZXJ3aXNlIGZvbGxvd2VkVGFncy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFnc1NlbGVjdChwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHNob3dDbG9zZSxcbiAgICBmb2xsb3dlZFRhZ3MsXG4gICAgZG9Ub2dnbGVUYWdGb2xsb3dEZXNrdG9wID0gbnVsbCxcbiAgICB0aXRsZSxcbiAgICBoZWxwLFxuICAgIHRhZ3NDaG9zZW4sXG4gICAgb25TZWxlY3QsXG4gICAgb25SZW1vdmUsXG4gICAgc3VnZ2VzdE1hdHVyZSxcbiAgICBkaXNhYmxlQXV0b0ZvY3VzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGhpZGVIZWFkZXIsXG4gICAgbGFiZWwsXG4gICAgbGltaXRTaG93LFxuICAgIGxpbWl0U2VsZWN0LFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IFtoYXNDbG9zZWQsIHNldEhhc0Nsb3NlZF0gPSB1c2VQZXJzaXN0ZWRTdGF0ZSgndGFnLXNlbGVjdDpoYXMtY2xvc2VkJywgZmFsc2UpO1xuICBjb25zdCB0YWdzVG9EaXNwbGF5ID0gdGFnc0Nob3NlbiB8fCBmb2xsb3dlZFRhZ3M7XG4gIGNvbnN0IHRhZ0NvdW50ID0gdGFnc1RvRGlzcGxheS5sZW5ndGg7XG4gIGNvbnN0IGhhc01hdHVyZVRhZyA9IHRhZ3NUb0Rpc3BsYXkubWFwKCh0YWcpID0+IHRhZy5uYW1lKS5pbmNsdWRlcygnbWF0dXJlJyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XG4gICAgc2V0SGFzQ2xvc2VkKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVGFnQ2xpY2sodGFnKSB7XG4gICAgaWYgKG9uUmVtb3ZlKSB7XG4gICAgICBvblJlbW92ZSh0YWcpO1xuICAgIH0gZWxzZSBpZiAoZG9Ub2dnbGVUYWdGb2xsb3dEZXNrdG9wKSB7XG4gICAgICBkb1RvZ2dsZVRhZ0ZvbGxvd0Rlc2t0b3AodGFnLm5hbWUpO1xuXG4gICAgICBjb25zdCB3YXNGb2xsb3dpbmcgPSBmb2xsb3dlZFRhZ3MubWFwKCh0YWcpID0+IHRhZy5uYW1lKS5pbmNsdWRlcyh0YWcubmFtZSk7XG4gICAgICBjb25zdCBub3dGb2xsb3dpbmcgPSAhd2FzRm9sbG93aW5nO1xuICAgICAgYW5hbHl0aWNzLnRhZ0ZvbGxvd0V2ZW50KHRhZy5uYW1lLCBub3dGb2xsb3dpbmcsICd0YWctc2VsZWN0Jyk7XG4gICAgfVxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGFnQ291bnQgPT09IDAgJiYgc2hvd0Nsb3NlKSB7XG4gICAgICBzZXRIYXNDbG9zZWQoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3RhZ0NvdW50LCBzZXRIYXNDbG9zZWQsIHNob3dDbG9zZV0pO1xuXG4gIHJldHVybiAoXG4gICAgKChzaG93Q2xvc2UgJiYgIWhhc0Nsb3NlZCkgfHwgIXNob3dDbG9zZSkgJiYgKFxuICAgICAgPENhcmRcbiAgICAgICAgaWNvbj17SUNPTlMuVEFHfVxuICAgICAgICB0aXRsZT17XG4gICAgICAgICAgaGlkZUhlYWRlciA/IG51bGwgOiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAge3Nob3dDbG9zZSAmJiB0YWdzVG9EaXNwbGF5Lmxlbmd0aCA+IDAgJiYgIWhhc0Nsb3NlZCAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJjbG9zZVwiIGljb249e0lDT05TLlJFTU9WRX0gb25DbGljaz17aGFuZGxlQ2xvc2V9IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBzdWJ0aXRsZT17XG4gICAgICAgICAgaGVscCAhPT0gZmFsc2UgJiYgKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHtoZWxwIHx8IF9fKFwiVGhlIHRhZ3MgeW91IGZvbGxvdyB3aWxsIGNoYW5nZSB3aGF0J3MgdHJlbmRpbmcgZm9yIHlvdS5cIil9eycgJ31cbiAgICAgICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJsaW5rXCIgbGFiZWw9e19fKCdMZWFybiBtb3JlJyl9IGhyZWY9XCJodHRwczovL29keXNlZS5jb20vQE9keXNlZUhlbHA6Yi9PZHlzZWVCYXNpY3M6Y1wiIC8+LlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8VGFnc1NlYXJjaFxuICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAgIG9uUmVtb3ZlPXtoYW5kbGVUYWdDbGlja31cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgICAgICAgICBzdWdnZXN0TWF0dXJlPXtzdWdnZXN0TWF0dXJlICYmICFoYXNNYXR1cmVUYWd9XG4gICAgICAgICAgICAgIGRpc2FibGVBdXRvRm9jdXM9e2Rpc2FibGVBdXRvRm9jdXN9XG4gICAgICAgICAgICAgIHRhZ3NQYXNzZWRJbj17dGFnc1RvRGlzcGxheX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBsaW1pdFNob3c9e2xpbWl0U2hvd31cbiAgICAgICAgICAgICAgbGltaXRTZWxlY3Q9e2xpbWl0U2VsZWN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgKTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBc0JBOzs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBR0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUF0QkE7QUFzQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/component/tagsSelect/view.jsx\n");

/***/ }),

/***/ "../ui/page/tagsFollowingManage/index.js":
/*!***********************************************!*\
  !*** ../ui/page/tagsFollowingManage/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_selectors_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/selectors/tags */ \"../ui/redux/selectors/tags.js\");\n/* harmony import */ var redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/selectors/subscriptions */ \"../ui/redux/selectors/subscriptions.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ \"../ui/page/tagsFollowingManage/view.jsx\");\n\n\n\n\n\nvar select = function select(state) {\n  return {\n    followedTags: Object(redux_selectors_tags__WEBPACK_IMPORTED_MODULE_1__[\"selectFollowedTags\"])(state),\n    subscribedChannels: Object(redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_2__[\"selectSubscriptions\"])(state),\n    suggestedSubscriptions: Object(redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_2__[\"selectSuggestedChannels\"])(state)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select)(_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS90YWdzRm9sbG93aW5nTWFuYWdlL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL3BhZ2UvdGFnc0ZvbGxvd2luZ01hbmFnZS9pbmRleC5qcz82MGZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZWxlY3RGb2xsb3dlZFRhZ3MgfSBmcm9tICdyZWR1eC9zZWxlY3RvcnMvdGFncyc7XG5pbXBvcnQgeyBzZWxlY3RTdWJzY3JpcHRpb25zLCBzZWxlY3RTdWdnZXN0ZWRDaGFubmVscyB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9zdWJzY3JpcHRpb25zJztcbmltcG9ydCBUYWdzRWRpdCBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBzZWxlY3QgPSBzdGF0ZSA9PiAoe1xuICBmb2xsb3dlZFRhZ3M6IHNlbGVjdEZvbGxvd2VkVGFncyhzdGF0ZSksXG4gIHN1YnNjcmliZWRDaGFubmVsczogc2VsZWN0U3Vic2NyaXB0aW9ucyhzdGF0ZSksXG4gIHN1Z2dlc3RlZFN1YnNjcmlwdGlvbnM6IHNlbGVjdFN1Z2dlc3RlZENoYW5uZWxzKHN0YXRlKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCkoVGFnc0VkaXQpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/page/tagsFollowingManage/index.js\n");

/***/ }),

/***/ "../ui/page/tagsFollowingManage/view.jsx":
/*!***********************************************!*\
  !*** ../ui/page/tagsFollowingManage/view.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var component_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component/page */ \"../ui/component/page/index.js\");\n/* harmony import */ var component_tagsSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/tagsSelect */ \"../ui/component/tagsSelect/index.js\");\n\n\n\n\nfunction FollowingPage() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_tagsSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    limitShow: 300,\n    showClose: false,\n    title: __('Follow new tags')\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowingPage);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS90YWdzRm9sbG93aW5nTWFuYWdlL3ZpZXcuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL3BhZ2UvdGFnc0ZvbGxvd2luZ01hbmFnZS92aWV3LmpzeD83MjJhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnY29tcG9uZW50L3BhZ2UnO1xuaW1wb3J0IFRhZ3NTZWxlY3QgZnJvbSAnY29tcG9uZW50L3RhZ3NTZWxlY3QnO1xuXG5mdW5jdGlvbiBGb2xsb3dpbmdQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPFRhZ3NTZWxlY3QgbGltaXRTaG93PXszMDB9IHNob3dDbG9zZT17ZmFsc2V9IHRpdGxlPXtfXygnRm9sbG93IG5ldyB0YWdzJyl9IC8+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dpbmdQYWdlO1xuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/page/tagsFollowingManage/view.jsx\n");

/***/ })

}]);