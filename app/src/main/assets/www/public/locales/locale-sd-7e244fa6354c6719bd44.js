/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-sd"],{

/***/ 56984:
/*!*******************************************!*\
  !*** ../node_modules/moment/locale/sd.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Sindhi [sd]\n//! author : Narain Sagar : https://github.com/narainsagar\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var months = ['جنوري', 'فيبروري', 'مارچ', 'اپريل', 'مئي', 'جون', 'جولاءِ', 'آگسٽ', 'سيپٽمبر', 'آڪٽوبر', 'نومبر', 'ڊسمبر'],\n    days = ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'];\n  var sd = moment.defineLocale('sd', {\n    months: months,\n    monthsShort: months,\n    weekdays: days,\n    weekdaysShort: days,\n    weekdaysMin: days,\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'DD/MM/YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY HH:mm',\n      LLLL: 'dddd، D MMMM YYYY HH:mm'\n    },\n    meridiemParse: /صبح|شام/,\n    isPM: function isPM(input) {\n      return 'شام' === input;\n    },\n    meridiem: function meridiem(hour, minute, isLower) {\n      if (hour < 12) {\n        return 'صبح';\n      }\n      return 'شام';\n    },\n    calendar: {\n      sameDay: '[اڄ] LT',\n      nextDay: '[سڀاڻي] LT',\n      nextWeek: 'dddd [اڳين هفتي تي] LT',\n      lastDay: '[ڪالهه] LT',\n      lastWeek: '[گزريل هفتي] dddd [تي] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: '%s پوء',\n      past: '%s اڳ',\n      s: 'چند سيڪنڊ',\n      ss: '%d سيڪنڊ',\n      m: 'هڪ منٽ',\n      mm: '%d منٽ',\n      h: 'هڪ ڪلاڪ',\n      hh: '%d ڪلاڪ',\n      d: 'هڪ ڏينهن',\n      dd: '%d ڏينهن',\n      M: 'هڪ مهينو',\n      MM: '%d مهينا',\n      y: 'هڪ سال',\n      yy: '%d سال'\n    },\n    preparse: function preparse(string) {\n      return string.replace(/،/g, ',');\n    },\n    postformat: function postformat(string) {\n      return string.replace(/,/g, '،');\n    },\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n    }\n  });\n\n  return sd;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTY5ODQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7O0FBRUE7QUFFQTtBQWNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZHlzZWUuY29tLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzP2U4N2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFNpbmRoaSBbc2RdXG4vLyEgYXV0aG9yIDogTmFyYWluIFNhZ2FyIDogaHR0cHM6Ly9naXRodWIuY29tL25hcmFpbnNhZ2FyXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG5cbiAgICB2YXIgbW9udGhzID0gW1xuICAgICAgICAgICAgJ9is2YbZiNix2YonLFxuICAgICAgICAgICAgJ9mB2YrYqNix2YjYsdmKJyxcbiAgICAgICAgICAgICfZhdin2LHahicsXG4gICAgICAgICAgICAn2KfZvtix2YrZhCcsXG4gICAgICAgICAgICAn2YXYptmKJyxcbiAgICAgICAgICAgICfYrNmI2YYnLFxuICAgICAgICAgICAgJ9is2YjZhNin2KHZkCcsXG4gICAgICAgICAgICAn2KLar9iz2b0nLFxuICAgICAgICAgICAgJ9iz2YrZvtm92YXYqNixJyxcbiAgICAgICAgICAgICfYotqq2b3ZiNio2LEnLFxuICAgICAgICAgICAgJ9mG2YjZhdio2LEnLFxuICAgICAgICAgICAgJ9qK2LPZhdio2LEnLFxuICAgICAgICBdLFxuICAgICAgICBkYXlzID0gWyfYotqG2LEnLCAn2LPZiNmF2LEnLCAn2Kfasdin2LHZiCcsICfYp9ix2KjYuScsICfYrtmF2YrYsycsICfYrNmF2LknLCAn2ofZhtqH2LEnXTtcblxuICAgIHZhciBzZCA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ3NkJywge1xuICAgICAgICBtb250aHM6IG1vbnRocyxcbiAgICAgICAgbW9udGhzU2hvcnQ6IG1vbnRocyxcbiAgICAgICAgd2Vla2RheXM6IGRheXMsXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6IGRheXMsXG4gICAgICAgIHdlZWtkYXlzTWluOiBkYXlzLFxuICAgICAgICBsb25nRGF0ZUZvcm1hdDoge1xuICAgICAgICAgICAgTFQ6ICdISDptbScsXG4gICAgICAgICAgICBMVFM6ICdISDptbTpzcycsXG4gICAgICAgICAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgICAgICAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgICAgIExMTEw6ICdkZGRk2IwgRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICB9LFxuICAgICAgICBtZXJpZGllbVBhcnNlOiAv2LXYqNitfNi02KfZhS8sXG4gICAgICAgIGlzUE06IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuICfYtNin2YUnID09PSBpbnB1dDtcbiAgICAgICAgfSxcbiAgICAgICAgbWVyaWRpZW06IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICAgICAgICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ9i12KjYrSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ9i02KfZhSc7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW9in2oRdIExUJyxcbiAgICAgICAgICAgIG5leHREYXk6ICdb2LPagNin2rvZil0gTFQnLFxuICAgICAgICAgICAgbmV4dFdlZWs6ICdkZGRkIFvYp9qz2YrZhiDZh9mB2KrZiiDYqtmKXSBMVCcsXG4gICAgICAgICAgICBsYXN0RGF5OiAnW9qq2KfZhNmH2YddIExUJyxcbiAgICAgICAgICAgIGxhc3RXZWVrOiAnW9qv2LLYsdmK2YQg2YfZgdiq2YpdIGRkZGQgW9iq2YpdIExUJyxcbiAgICAgICAgICAgIHNhbWVFbHNlOiAnTCcsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aXZlVGltZToge1xuICAgICAgICAgICAgZnV0dXJlOiAnJXMg2b7ZiNihJyxcbiAgICAgICAgICAgIHBhc3Q6ICclcyDYp9qzJyxcbiAgICAgICAgICAgIHM6ICfahtmG2K8g2LPZitqq2YbaiicsXG4gICAgICAgICAgICBzczogJyVkINiz2YraqtmG2oonLFxuICAgICAgICAgICAgbTogJ9mH2qog2YXZhtm9JyxcbiAgICAgICAgICAgIG1tOiAnJWQg2YXZhtm9JyxcbiAgICAgICAgICAgIGg6ICfZh9qqINqq2YTYp9qqJyxcbiAgICAgICAgICAgIGhoOiAnJWQg2qrZhNin2qonLFxuICAgICAgICAgICAgZDogJ9mH2qog2o/ZitmG2YfZhicsXG4gICAgICAgICAgICBkZDogJyVkINqP2YrZhtmH2YYnLFxuICAgICAgICAgICAgTTogJ9mH2qog2YXZh9mK2YbZiCcsXG4gICAgICAgICAgICBNTTogJyVkINmF2YfZitmG2KcnLFxuICAgICAgICAgICAgeTogJ9mH2qog2LPYp9mEJyxcbiAgICAgICAgICAgIHl5OiAnJWQg2LPYp9mEJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJlcGFyc2U6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgv2IwvZywgJywnKTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdGZvcm1hdDogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8sL2csICfYjCcpO1xuICAgICAgICB9LFxuICAgICAgICB3ZWVrOiB7XG4gICAgICAgICAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICAgICAgZG95OiA0LCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2Q7XG5cbn0pKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///56984\n");

/***/ })

}]);