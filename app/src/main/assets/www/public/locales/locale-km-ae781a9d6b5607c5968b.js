/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-km"],{

/***/ 64072:
/*!*******************************************!*\
  !*** ../node_modules/moment/locale/km.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Cambodian [km]\n//! author : Kruy Vanna : https://github.com/kruyvanna\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var symbolMap = {\n      1: '១',\n      2: '២',\n      3: '៣',\n      4: '៤',\n      5: '៥',\n      6: '៦',\n      7: '៧',\n      8: '៨',\n      9: '៩',\n      0: '០'\n    },\n    numberMap = {\n      '១': '1',\n      '២': '2',\n      '៣': '3',\n      '៤': '4',\n      '៥': '5',\n      '៦': '6',\n      '៧': '7',\n      '៨': '8',\n      '៩': '9',\n      '០': '0'\n    };\n  var km = moment.defineLocale('km', {\n    months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),\n    monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),\n    weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),\n    weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),\n    weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),\n    weekdaysParseExact: true,\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'DD/MM/YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY HH:mm',\n      LLLL: 'dddd, D MMMM YYYY HH:mm'\n    },\n    meridiemParse: /ព្រឹក|ល្ងាច/,\n    isPM: function isPM(input) {\n      return input === 'ល្ងាច';\n    },\n    meridiem: function meridiem(hour, minute, isLower) {\n      if (hour < 12) {\n        return 'ព្រឹក';\n      } else {\n        return 'ល្ងាច';\n      }\n    },\n    calendar: {\n      sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',\n      nextDay: '[ស្អែក ម៉ោង] LT',\n      nextWeek: 'dddd [ម៉ោង] LT',\n      lastDay: '[ម្សិលមិញ ម៉ោង] LT',\n      lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: '%sទៀត',\n      past: '%sមុន',\n      s: 'ប៉ុន្មានវិនាទី',\n      ss: '%d វិនាទី',\n      m: 'មួយនាទី',\n      mm: '%d នាទី',\n      h: 'មួយម៉ោង',\n      hh: '%d ម៉ោង',\n      d: 'មួយថ្ងៃ',\n      dd: '%d ថ្ងៃ',\n      M: 'មួយខែ',\n      MM: '%d ខែ',\n      y: 'មួយឆ្នាំ',\n      yy: '%d ឆ្នាំ'\n    },\n    dayOfMonthOrdinalParse: /ទី\\d{1,2}/,\n    ordinal: 'ទី%d',\n    preparse: function preparse(string) {\n      return string.replace(/[១២៣៤៥៦៧៨៩០]/g, function (match) {\n        return numberMap[match];\n      });\n    },\n    postformat: function postformat(string) {\n      return string.replace(/\\d/g, function (match) {\n        return symbolMap[match];\n      });\n    },\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n    }\n  });\n\n  return km;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjQwNzIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZHlzZWUuY29tLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzPzY2ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IENhbWJvZGlhbiBba21dXG4vLyEgYXV0aG9yIDogS3J1eSBWYW5uYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9rcnV5dmFubmFcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cblxuICAgIHZhciBzeW1ib2xNYXAgPSB7XG4gICAgICAgICAgICAxOiAn4Z+hJyxcbiAgICAgICAgICAgIDI6ICfhn6InLFxuICAgICAgICAgICAgMzogJ+GfoycsXG4gICAgICAgICAgICA0OiAn4Z+kJyxcbiAgICAgICAgICAgIDU6ICfhn6UnLFxuICAgICAgICAgICAgNjogJ+GfpicsXG4gICAgICAgICAgICA3OiAn4Z+nJyxcbiAgICAgICAgICAgIDg6ICfhn6gnLFxuICAgICAgICAgICAgOTogJ+GfqScsXG4gICAgICAgICAgICAwOiAn4Z+gJyxcbiAgICAgICAgfSxcbiAgICAgICAgbnVtYmVyTWFwID0ge1xuICAgICAgICAgICAgJ+GfoSc6ICcxJyxcbiAgICAgICAgICAgICfhn6InOiAnMicsXG4gICAgICAgICAgICAn4Z+jJzogJzMnLFxuICAgICAgICAgICAgJ+GfpCc6ICc0JyxcbiAgICAgICAgICAgICfhn6UnOiAnNScsXG4gICAgICAgICAgICAn4Z+mJzogJzYnLFxuICAgICAgICAgICAgJ+Gfpyc6ICc3JyxcbiAgICAgICAgICAgICfhn6gnOiAnOCcsXG4gICAgICAgICAgICAn4Z+pJzogJzknLFxuICAgICAgICAgICAgJ+GfoCc6ICcwJyxcbiAgICAgICAgfTtcblxuICAgIHZhciBrbSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2ttJywge1xuICAgICAgICBtb250aHM6ICfhnpjhnoDhnprhnrZf4Z6A4Z674Z6Y4Z+S4Z6X4Z+IX+GemOGeuOGek+Getl/hnpjhn4Hhnp/hnrZf4Z6n4Z6f4Z6X4Z62X+GemOGet+GekOGeu+Gek+Getl/hnoDhnoDhn5LhnoDhnorhnrZf4Z6f4Z644Z6g4Z62X+GegOGeieGfkuGeieGetl/hno/hnrvhnpvhnrZf4Z6c4Z634Z6F4Z+S4Z6G4Z634Z6A4Z62X+GekuGfkuGek+GevCcuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgbW9udGhzU2hvcnQ6XG4gICAgICAgICAgICAn4Z6Y4Z6A4Z6a4Z62X+GegOGeu+GemOGfkuGel+GfiF/hnpjhnrjhnpPhnrZf4Z6Y4Z+B4Z6f4Z62X+Gep+Gen+Gel+Getl/hnpjhnrfhnpDhnrvhnpPhnrZf4Z6A4Z6A4Z+S4Z6A4Z6K4Z62X+Gen+GeuOGeoOGetl/hnoDhnonhn5LhnonhnrZf4Z6P4Z674Z6b4Z62X+GenOGet+GeheGfkuGehuGet+GegOGetl/hnpLhn5LhnpPhnrwnLnNwbGl0KFxuICAgICAgICAgICAgICAgICdfJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgd2Vla2RheXM6ICfhnqLhnrbhnpHhnrfhno/hn5Lhnplf4Z6F4Z+Q4Z6T4Z+S4Z6RX+GeouGehOGfkuGeguGetuGeml/hnpbhnrvhnpJf4Z6W4Z+S4Z6a4Z6g4Z6f4Z+S4Z6U4Z6P4Z634Z+NX+Gen+Geu+GegOGfkuGeml/hnp/hn4Xhnprhn40nLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6ICfhnqLhnrZf4Z6FX+Geol/hnpZf4Z6W4Z+S4Z6aX+Gen+Geu1/hnp8nLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzTWluOiAn4Z6i4Z62X+GehV/hnqJf4Z6WX+GeluGfkuGeml/hnp/hnrtf4Z6fJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gICAgICAgIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgICAgICAgICBMVDogJ0hIOm1tJyxcbiAgICAgICAgICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICAgICAgICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICAgICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICAgICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWVyaWRpZW1QYXJzZTogL+GeluGfkuGemuGeueGegHzhnpvhn5LhnoThnrbhnoUvLFxuICAgICAgICBpc1BNOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCA9PT0gJ+Gem+GfkuGehOGetuGehSc7XG4gICAgICAgIH0sXG4gICAgICAgIG1lcmlkaWVtOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgICAgICAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICfhnpbhn5LhnprhnrnhnoAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+Gem+GfkuGehOGetuGehSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW+GekOGfkuGehOGfg+Gek+GfgeGfhyDhnpjhn4nhn4ThnoRdIExUJyxcbiAgICAgICAgICAgIG5leHREYXk6ICdb4Z6f4Z+S4Z6i4Z+C4Z6AIOGemOGfieGfhOGehF0gTFQnLFxuICAgICAgICAgICAgbmV4dFdlZWs6ICdkZGRkIFvhnpjhn4nhn4ThnoRdIExUJyxcbiAgICAgICAgICAgIGxhc3REYXk6ICdb4Z6Y4Z+S4Z6f4Z634Z6b4Z6Y4Z634Z6JIOGemOGfieGfhOGehF0gTFQnLFxuICAgICAgICAgICAgbGFzdFdlZWs6ICdkZGRkIFvhnp/hnpThn5Lhno/hnrbhnqDhn43hnpjhnrvhnpNdIFvhnpjhn4nhn4ThnoRdIExUJyxcbiAgICAgICAgICAgIHNhbWVFbHNlOiAnTCcsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aXZlVGltZToge1xuICAgICAgICAgICAgZnV0dXJlOiAnJXPhnpHhn4Dhno8nLFxuICAgICAgICAgICAgcGFzdDogJyVz4Z6Y4Z674Z6TJyxcbiAgICAgICAgICAgIHM6ICfhnpThn4nhnrvhnpPhn5LhnpjhnrbhnpPhnpzhnrfhnpPhnrbhnpHhnrgnLFxuICAgICAgICAgICAgc3M6ICclZCDhnpzhnrfhnpPhnrbhnpHhnrgnLFxuICAgICAgICAgICAgbTogJ+GemOGeveGemeGek+GetuGekeGeuCcsXG4gICAgICAgICAgICBtbTogJyVkIOGek+GetuGekeGeuCcsXG4gICAgICAgICAgICBoOiAn4Z6Y4Z694Z6Z4Z6Y4Z+J4Z+E4Z6EJyxcbiAgICAgICAgICAgIGhoOiAnJWQg4Z6Y4Z+J4Z+E4Z6EJyxcbiAgICAgICAgICAgIGQ6ICfhnpjhnr3hnpnhnpDhn5LhnoThn4MnLFxuICAgICAgICAgICAgZGQ6ICclZCDhnpDhn5LhnoThn4MnLFxuICAgICAgICAgICAgTTogJ+GemOGeveGemeGegeGfgicsXG4gICAgICAgICAgICBNTTogJyVkIOGegeGfgicsXG4gICAgICAgICAgICB5OiAn4Z6Y4Z694Z6Z4Z6G4Z+S4Z6T4Z624Z+GJyxcbiAgICAgICAgICAgIHl5OiAnJWQg4Z6G4Z+S4Z6T4Z624Z+GJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL+GekeGeuFxcZHsxLDJ9LyxcbiAgICAgICAgb3JkaW5hbDogJ+GekeGeuCVkJyxcbiAgICAgICAgcHJlcGFyc2U6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW+GfoeGfouGfo+GfpOGfpeGfpuGfp+GfqOGfqeGfoF0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlck1hcFttYXRjaF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdGZvcm1hdDogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXGQvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgd2Vlazoge1xuICAgICAgICAgICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgICAgIGRveTogNCwgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGttO1xuXG59KSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///64072\n");

/***/ })

}]);