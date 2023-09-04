/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-ku"],{

/***/ 81462:
/*!*******************************************!*\
  !*** ../node_modules/moment/locale/ku.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Kurdish [ku]\n//! author : Shahram Mebashar : https://github.com/ShahramMebashar\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var symbolMap = {\n      1: '١',\n      2: '٢',\n      3: '٣',\n      4: '٤',\n      5: '٥',\n      6: '٦',\n      7: '٧',\n      8: '٨',\n      9: '٩',\n      0: '٠'\n    },\n    numberMap = {\n      '١': '1',\n      '٢': '2',\n      '٣': '3',\n      '٤': '4',\n      '٥': '5',\n      '٦': '6',\n      '٧': '7',\n      '٨': '8',\n      '٩': '9',\n      '٠': '0'\n    },\n    months = ['کانونی دووەم', 'شوبات', 'ئازار', 'نیسان', 'ئایار', 'حوزەیران', 'تەمموز', 'ئاب', 'ئەیلوول', 'تشرینی یەكەم', 'تشرینی دووەم', 'كانونی یەکەم'];\n  var ku = moment.defineLocale('ku', {\n    months: months,\n    monthsShort: months,\n    weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),\n    weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),\n    weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),\n    weekdaysParseExact: true,\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'DD/MM/YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY HH:mm',\n      LLLL: 'dddd, D MMMM YYYY HH:mm'\n    },\n    meridiemParse: /ئێواره‌|به‌یانی/,\n    isPM: function isPM(input) {\n      return /ئێواره‌/.test(input);\n    },\n    meridiem: function meridiem(hour, minute, isLower) {\n      if (hour < 12) {\n        return 'به‌یانی';\n      } else {\n        return 'ئێواره‌';\n      }\n    },\n    calendar: {\n      sameDay: '[ئه‌مرۆ كاتژمێر] LT',\n      nextDay: '[به‌یانی كاتژمێر] LT',\n      nextWeek: 'dddd [كاتژمێر] LT',\n      lastDay: '[دوێنێ كاتژمێر] LT',\n      lastWeek: 'dddd [كاتژمێر] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: 'له‌ %s',\n      past: '%s',\n      s: 'چه‌ند چركه‌یه‌ك',\n      ss: 'چركه‌ %d',\n      m: 'یه‌ك خوله‌ك',\n      mm: '%d خوله‌ك',\n      h: 'یه‌ك كاتژمێر',\n      hh: '%d كاتژمێر',\n      d: 'یه‌ك ڕۆژ',\n      dd: '%d ڕۆژ',\n      M: 'یه‌ك مانگ',\n      MM: '%d مانگ',\n      y: 'یه‌ك ساڵ',\n      yy: '%d ساڵ'\n    },\n    preparse: function preparse(string) {\n      return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {\n        return numberMap[match];\n      }).replace(/،/g, ',');\n    },\n    postformat: function postformat(string) {\n      return string.replace(/\\d/g, function (match) {\n        return symbolMap[match];\n      }).replace(/,/g, '،');\n    },\n    week: {\n      dow: 6,\n      // Saturday is the first day of the week.\n      doy: 12 // The week that contains Jan 12th is the first week of the year.\n    }\n  });\n\n  return ku;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODE0NjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2R5c2VlLmNvbS8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qcz8xNmY4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBLdXJkaXNoIFtrdV1cbi8vISBhdXRob3IgOiBTaGFocmFtIE1lYmFzaGFyIDogaHR0cHM6Ly9naXRodWIuY29tL1NoYWhyYW1NZWJhc2hhclxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuXG4gICAgdmFyIHN5bWJvbE1hcCA9IHtcbiAgICAgICAgICAgIDE6ICfZoScsXG4gICAgICAgICAgICAyOiAn2aInLFxuICAgICAgICAgICAgMzogJ9mjJyxcbiAgICAgICAgICAgIDQ6ICfZpCcsXG4gICAgICAgICAgICA1OiAn2aUnLFxuICAgICAgICAgICAgNjogJ9mmJyxcbiAgICAgICAgICAgIDc6ICfZpycsXG4gICAgICAgICAgICA4OiAn2agnLFxuICAgICAgICAgICAgOTogJ9mpJyxcbiAgICAgICAgICAgIDA6ICfZoCcsXG4gICAgICAgIH0sXG4gICAgICAgIG51bWJlck1hcCA9IHtcbiAgICAgICAgICAgICfZoSc6ICcxJyxcbiAgICAgICAgICAgICfZoic6ICcyJyxcbiAgICAgICAgICAgICfZoyc6ICczJyxcbiAgICAgICAgICAgICfZpCc6ICc0JyxcbiAgICAgICAgICAgICfZpSc6ICc1JyxcbiAgICAgICAgICAgICfZpic6ICc2JyxcbiAgICAgICAgICAgICfZpyc6ICc3JyxcbiAgICAgICAgICAgICfZqCc6ICc4JyxcbiAgICAgICAgICAgICfZqSc6ICc5JyxcbiAgICAgICAgICAgICfZoCc6ICcwJyxcbiAgICAgICAgfSxcbiAgICAgICAgbW9udGhzID0gW1xuICAgICAgICAgICAgJ9qp2KfZhtmI2YbbjCDYr9mI2YjbldmFJyxcbiAgICAgICAgICAgICfYtNmI2KjYp9iqJyxcbiAgICAgICAgICAgICfYptin2LLYp9ixJyxcbiAgICAgICAgICAgICfZhtuM2LPYp9mGJyxcbiAgICAgICAgICAgICfYptin24zYp9ixJyxcbiAgICAgICAgICAgICfYrdmI2LLblduM2LHYp9mGJyxcbiAgICAgICAgICAgICfYqtuV2YXZhdmI2LInLFxuICAgICAgICAgICAgJ9im2KfYqCcsXG4gICAgICAgICAgICAn2KbblduM2YTZiNmI2YQnLFxuICAgICAgICAgICAgJ9iq2LTYsduM2YbbjCDbjNuV2YPbldmFJyxcbiAgICAgICAgICAgICfYqti02LHbjNmG24wg2K/ZiNmI25XZhScsXG4gICAgICAgICAgICAn2YPYp9mG2YjZhtuMINuM25XaqduV2YUnLFxuICAgICAgICBdO1xuXG4gICAgdmFyIGt1ID0gbW9tZW50LmRlZmluZUxvY2FsZSgna3UnLCB7XG4gICAgICAgIG1vbnRoczogbW9udGhzLFxuICAgICAgICBtb250aHNTaG9ydDogbW9udGhzLFxuICAgICAgICB3ZWVrZGF5czpcbiAgICAgICAgICAgICfbjNmH4oCM2YPYtNmH4oCM2YXZhdmH4oCMX9iv2YjZiNi02YfigIzZhdmF2YfigIxf2LPbjti02YfigIzZhdmF2YfigIxf2obZiNin2LHYtNmH4oCM2YXZhdmH4oCMX9m+247Zhtis2LTZh+KAjNmF2YXZh+KAjF/Zh9mH4oCM24zZhtuMX9i02YfigIzZhdmF2YfigIwnLnNwbGl0KFxuICAgICAgICAgICAgICAgICdfJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgd2Vla2RheXNTaG9ydDpcbiAgICAgICAgICAgICfbjNmH4oCM2YPYtNmH4oCM2YVf2K/ZiNmI2LTZh+KAjNmFX9iz247YtNmH4oCM2YVf2obZiNin2LHYtNmH4oCM2YVf2b7bjtmG2KzYtNmH4oCM2YVf2YfZh+KAjNuM2YbbjF/YtNmH4oCM2YXZhdmH4oCMJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c01pbjogJ9uMX9ivX9izX9qGX9m+X9mHX9i0Jy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gICAgICAgIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgICAgICAgICBMVDogJ0hIOm1tJyxcbiAgICAgICAgICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICAgICAgICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICAgICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICAgICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWVyaWRpZW1QYXJzZTogL9im247ZiNin2LHZh+KAjHzYqNmH4oCM24zYp9mG24wvLFxuICAgICAgICBpc1BNOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHJldHVybiAv2KbbjtmI2KfYsdmH4oCMLy50ZXN0KGlucHV0KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWVyaWRpZW06IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICAgICAgICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ9io2YfigIzbjNin2YbbjCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAn2KbbjtmI2KfYsdmH4oCMJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXI6IHtcbiAgICAgICAgICAgIHNhbWVEYXk6ICdb2KbZh+KAjNmF2LHbhiDZg9in2KramNmF247YsV0gTFQnLFxuICAgICAgICAgICAgbmV4dERheTogJ1vYqNmH4oCM24zYp9mG24wg2YPYp9iq2pjZhduO2LFdIExUJyxcbiAgICAgICAgICAgIG5leHRXZWVrOiAnZGRkZCBb2YPYp9iq2pjZhduO2LFdIExUJyxcbiAgICAgICAgICAgIGxhc3REYXk6ICdb2K/ZiNuO2YbbjiDZg9in2KramNmF247YsV0gTFQnLFxuICAgICAgICAgICAgbGFzdFdlZWs6ICdkZGRkIFvZg9in2KramNmF247YsV0gTFQnLFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6ICfZhNmH4oCMICVzJyxcbiAgICAgICAgICAgIHBhc3Q6ICclcycsXG4gICAgICAgICAgICBzOiAn2obZh+KAjNmG2K8g2obYsdmD2YfigIzbjNmH4oCM2YMnLFxuICAgICAgICAgICAgc3M6ICfahtix2YPZh+KAjCAlZCcsXG4gICAgICAgICAgICBtOiAn24zZh+KAjNmDINiu2YjZhNmH4oCM2YMnLFxuICAgICAgICAgICAgbW06ICclZCDYrtmI2YTZh+KAjNmDJyxcbiAgICAgICAgICAgIGg6ICfbjNmH4oCM2YMg2YPYp9iq2pjZhduO2LEnLFxuICAgICAgICAgICAgaGg6ICclZCDZg9in2KramNmF247YsScsXG4gICAgICAgICAgICBkOiAn24zZh+KAjNmDINqV24bamCcsXG4gICAgICAgICAgICBkZDogJyVkINqV24bamCcsXG4gICAgICAgICAgICBNOiAn24zZh+KAjNmDINmF2KfZhtqvJyxcbiAgICAgICAgICAgIE1NOiAnJWQg2YXYp9mG2q8nLFxuICAgICAgICAgICAgeTogJ9uM2YfigIzZgyDYs9in2rUnLFxuICAgICAgICAgICAgeXk6ICclZCDYs9in2rUnLFxuICAgICAgICB9LFxuICAgICAgICBwcmVwYXJzZTogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ1xuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9b2aHZotmj2aTZpdmm2afZqNmp2aBdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyTWFwW21hdGNoXTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC/YjC9nLCAnLCcpO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0Zm9ybWF0OiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcZC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvLC9nLCAn2IwnKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2Vlazoge1xuICAgICAgICAgICAgZG93OiA2LCAvLyBTYXR1cmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICAgICAgZG95OiAxMiwgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMTJ0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBrdTtcblxufSkpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///81462\n");

/***/ })

}]);