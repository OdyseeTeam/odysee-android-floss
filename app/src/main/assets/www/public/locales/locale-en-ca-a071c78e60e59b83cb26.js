/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-en-ca"],{

/***/ 29431:
/*!**********************************************!*\
  !*** ../node_modules/moment/locale/en-ca.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : English (Canada) [en-ca]\n//! author : Jonathan Abourbih : https://github.com/jonbca\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var enCa = moment.defineLocale('en-ca', {\n    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),\n    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),\n    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),\n    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),\n    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),\n    longDateFormat: {\n      LT: 'h:mm A',\n      LTS: 'h:mm:ss A',\n      L: 'YYYY-MM-DD',\n      LL: 'MMMM D, YYYY',\n      LLL: 'MMMM D, YYYY h:mm A',\n      LLLL: 'dddd, MMMM D, YYYY h:mm A'\n    },\n    calendar: {\n      sameDay: '[Today at] LT',\n      nextDay: '[Tomorrow at] LT',\n      nextWeek: 'dddd [at] LT',\n      lastDay: '[Yesterday at] LT',\n      lastWeek: '[Last] dddd [at] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: 'in %s',\n      past: '%s ago',\n      s: 'a few seconds',\n      ss: '%d seconds',\n      m: 'a minute',\n      mm: '%d minutes',\n      h: 'an hour',\n      hh: '%d hours',\n      d: 'a day',\n      dd: '%d days',\n      M: 'a month',\n      MM: '%d months',\n      y: 'a year',\n      yy: '%d years'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}(st|nd|rd|th)/,\n    ordinal: function ordinal(number) {\n      var b = number % 10,\n        output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';\n      return number + output;\n    }\n  });\n  return enCa;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjk0MzEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7O0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2R5c2VlLmNvbS8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qcz82ZjEzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBFbmdsaXNoIChDYW5hZGEpIFtlbi1jYV1cbi8vISBhdXRob3IgOiBKb25hdGhhbiBBYm91cmJpaCA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb25iY2FcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cblxuICAgIHZhciBlbkNhID0gbW9tZW50LmRlZmluZUxvY2FsZSgnZW4tY2EnLCB7XG4gICAgICAgIG1vbnRoczogJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIG1vbnRoc1Nob3J0OiAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzOiAnU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXknLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzTWluOiAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyksXG4gICAgICAgIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgICAgICAgICBMVDogJ2g6bW0gQScsXG4gICAgICAgICAgICBMVFM6ICdoOm1tOnNzIEEnLFxuICAgICAgICAgICAgTDogJ1lZWVktTU0tREQnLFxuICAgICAgICAgICAgTEw6ICdNTU1NIEQsIFlZWVknLFxuICAgICAgICAgICAgTExMOiAnTU1NTSBELCBZWVlZIGg6bW0gQScsXG4gICAgICAgICAgICBMTExMOiAnZGRkZCwgTU1NTSBELCBZWVlZIGg6bW0gQScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW1RvZGF5IGF0XSBMVCcsXG4gICAgICAgICAgICBuZXh0RGF5OiAnW1RvbW9ycm93IGF0XSBMVCcsXG4gICAgICAgICAgICBuZXh0V2VlazogJ2RkZGQgW2F0XSBMVCcsXG4gICAgICAgICAgICBsYXN0RGF5OiAnW1llc3RlcmRheSBhdF0gTFQnLFxuICAgICAgICAgICAgbGFzdFdlZWs6ICdbTGFzdF0gZGRkZCBbYXRdIExUJyxcbiAgICAgICAgICAgIHNhbWVFbHNlOiAnTCcsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aXZlVGltZToge1xuICAgICAgICAgICAgZnV0dXJlOiAnaW4gJXMnLFxuICAgICAgICAgICAgcGFzdDogJyVzIGFnbycsXG4gICAgICAgICAgICBzOiAnYSBmZXcgc2Vjb25kcycsXG4gICAgICAgICAgICBzczogJyVkIHNlY29uZHMnLFxuICAgICAgICAgICAgbTogJ2EgbWludXRlJyxcbiAgICAgICAgICAgIG1tOiAnJWQgbWludXRlcycsXG4gICAgICAgICAgICBoOiAnYW4gaG91cicsXG4gICAgICAgICAgICBoaDogJyVkIGhvdXJzJyxcbiAgICAgICAgICAgIGQ6ICdhIGRheScsXG4gICAgICAgICAgICBkZDogJyVkIGRheXMnLFxuICAgICAgICAgICAgTTogJ2EgbW9udGgnLFxuICAgICAgICAgICAgTU06ICclZCBtb250aHMnLFxuICAgICAgICAgICAgeTogJ2EgeWVhcicsXG4gICAgICAgICAgICB5eTogJyVkIHllYXJzJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHN0fG5kfHJkfHRoKS8sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTAsXG4gICAgICAgICAgICAgICAgb3V0cHV0ID1cbiAgICAgICAgICAgICAgICAgICAgfn4oKG51bWJlciAlIDEwMCkgLyAxMCkgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBiID09PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYiA9PT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnbmQnXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGIgPT09IDNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAndGgnO1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArIG91dHB1dDtcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBlbkNhO1xuXG59KSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///29431\n");

/***/ })

}]);