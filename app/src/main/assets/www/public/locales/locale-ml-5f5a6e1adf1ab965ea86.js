/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-ml"],{

/***/ 55264:
/*!*******************************************!*\
  !*** ../node_modules/moment/locale/ml.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Malayalam [ml]\n//! author : Floyd Pink : https://github.com/floydpink\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var ml = moment.defineLocale('ml', {\n    months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),\n    monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),\n    monthsParseExact: true,\n    weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),\n    weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),\n    weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),\n    longDateFormat: {\n      LT: 'A h:mm -നു',\n      LTS: 'A h:mm:ss -നു',\n      L: 'DD/MM/YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY, A h:mm -നു',\n      LLLL: 'dddd, D MMMM YYYY, A h:mm -നു'\n    },\n    calendar: {\n      sameDay: '[ഇന്ന്] LT',\n      nextDay: '[നാളെ] LT',\n      nextWeek: 'dddd, LT',\n      lastDay: '[ഇന്നലെ] LT',\n      lastWeek: '[കഴിഞ്ഞ] dddd, LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: '%s കഴിഞ്ഞ്',\n      past: '%s മുൻപ്',\n      s: 'അൽപ നിമിഷങ്ങൾ',\n      ss: '%d സെക്കൻഡ്',\n      m: 'ഒരു മിനിറ്റ്',\n      mm: '%d മിനിറ്റ്',\n      h: 'ഒരു മണിക്കൂർ',\n      hh: '%d മണിക്കൂർ',\n      d: 'ഒരു ദിവസം',\n      dd: '%d ദിവസം',\n      M: 'ഒരു മാസം',\n      MM: '%d മാസം',\n      y: 'ഒരു വർഷം',\n      yy: '%d വർഷം'\n    },\n    meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,\n    meridiemHour: function meridiemHour(hour, meridiem) {\n      if (hour === 12) {\n        hour = 0;\n      }\n      if (meridiem === 'രാത്രി' && hour >= 4 || meridiem === 'ഉച്ച കഴിഞ്ഞ്' || meridiem === 'വൈകുന്നേരം') {\n        return hour + 12;\n      } else {\n        return hour;\n      }\n    },\n    meridiem: function meridiem(hour, minute, isLower) {\n      if (hour < 4) {\n        return 'രാത്രി';\n      } else if (hour < 12) {\n        return 'രാവിലെ';\n      } else if (hour < 17) {\n        return 'ഉച്ച കഴിഞ്ഞ്';\n      } else if (hour < 20) {\n        return 'വൈകുന്നേരം';\n      } else {\n        return 'രാത്രി';\n      }\n    }\n  });\n  return ml;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTUyNjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7O0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZHlzZWUuY29tLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzPzc1MmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IE1hbGF5YWxhbSBbbWxdXG4vLyEgYXV0aG9yIDogRmxveWQgUGluayA6IGh0dHBzOi8vZ2l0aHViLmNvbS9mbG95ZHBpbmtcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cblxuICAgIHZhciBtbCA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ21sJywge1xuICAgICAgICBtb250aHM6ICfgtJzgtKjgtYHgtLXgtLDgtL9f4LSr4LWG4LSs4LWN4LSw4LWB4LS14LSw4LS/X+C0ruC0vuC1vOC0muC1jeC0muC1jV/gtI/gtKrgtY3gtLDgtL/gtb1f4LSu4LWH4LSv4LWNX+C0nOC1guC1ul/gtJzgtYLgtLLgtYhf4LST4LSX4LS44LWN4LSx4LWN4LSx4LWNX+C0uOC1huC0quC1jeC0seC1jeC0seC0guC0rOC1vF/gtJLgtJXgtY3gtJ/gtYvgtKzgtbxf4LSo4LS14LSC4LSs4LW8X+C0oeC0v+C0uOC0guC0rOC1vCcuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgbW9udGhzU2hvcnQ6XG4gICAgICAgICAgICAn4LSc4LSo4LWBLl/gtKvgtYbgtKzgtY3gtLDgtYEuX+C0ruC0vuC1vC5f4LSP4LSq4LWN4LSw4LS/Ll/gtK7gtYfgtK/gtY1f4LSc4LWC4LW6X+C0nOC1guC0suC1iC5f4LST4LSXLl/gtLjgtYbgtKrgtY3gtLHgtY3gtLEuX+C0kuC0leC1jeC0n+C1iy5f4LSo4LS14LSCLl/gtKHgtL/gtLjgtIIuJy5zcGxpdChcbiAgICAgICAgICAgICAgICAnXydcbiAgICAgICAgICAgICksXG4gICAgICAgIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gICAgICAgIHdlZWtkYXlzOlxuICAgICAgICAgICAgJ+C0nuC0vuC0r+C0seC0vuC0tOC1jeC0ml/gtKTgtL/gtJngtY3gtJXgtLPgtL7gtLTgtY3gtJpf4LSa4LWK4LS14LWN4LS14LS+4LS04LWN4LSaX+C0rOC1geC0p+C0qOC0vuC0tOC1jeC0ml/gtLXgtY3gtK/gtL7gtLTgtL7gtLTgtY3gtJpf4LS14LWG4LSz4LWN4LSz4LS/4LSv4LS+4LS04LWN4LSaX+C0tuC0qOC0v+C0r+C0vuC0tOC1jeC0micuc3BsaXQoXG4gICAgICAgICAgICAgICAgJ18nXG4gICAgICAgICAgICApLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiAn4LSe4LS+4LSv4LW8X+C0pOC0v+C0meC1jeC0leC1vl/gtJrgtYrgtLXgtY3gtLVf4LSs4LWB4LSn4LW7X+C0teC1jeC0r+C0vuC0tOC0gl/gtLXgtYbgtLPgtY3gtLPgtL9f4LS24LSo4LS/Jy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c01pbjogJ+C0nuC0vl/gtKTgtL9f4LSa4LWKX+C0rOC1gV/gtLXgtY3gtK/gtL5f4LS14LWGX+C0ticuc3BsaXQoJ18nKSxcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgICAgIExUOiAnQSBoOm1tIC3gtKjgtYEnLFxuICAgICAgICAgICAgTFRTOiAnQSBoOm1tOnNzIC3gtKjgtYEnLFxuICAgICAgICAgICAgTDogJ0REL01NL1lZWVknLFxuICAgICAgICAgICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgICAgICBMTEw6ICdEIE1NTU0gWVlZWSwgQSBoOm1tIC3gtKjgtYEnLFxuICAgICAgICAgICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZLCBBIGg6bW0gLeC0qOC1gScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW+C0h+C0qOC1jeC0qOC1jV0gTFQnLFxuICAgICAgICAgICAgbmV4dERheTogJ1vgtKjgtL7gtLPgtYZdIExUJyxcbiAgICAgICAgICAgIG5leHRXZWVrOiAnZGRkZCwgTFQnLFxuICAgICAgICAgICAgbGFzdERheTogJ1vgtIfgtKjgtY3gtKjgtLLgtYZdIExUJyxcbiAgICAgICAgICAgIGxhc3RXZWVrOiAnW+C0leC0tOC0v+C0nuC1jeC0nl0gZGRkZCwgTFQnLFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6ICclcyDgtJXgtLTgtL/gtJ7gtY3gtJ7gtY0nLFxuICAgICAgICAgICAgcGFzdDogJyVzIOC0ruC1geC1u+C0quC1jScsXG4gICAgICAgICAgICBzOiAn4LSF4LW94LSqIOC0qOC0v+C0ruC0v+C0t+C0meC1jeC0meC1vicsXG4gICAgICAgICAgICBzczogJyVkIOC0uOC1huC0leC1jeC0leC1u+C0oeC1jScsXG4gICAgICAgICAgICBtOiAn4LSS4LSw4LWBIOC0ruC0v+C0qOC0v+C0seC1jeC0seC1jScsXG4gICAgICAgICAgICBtbTogJyVkIOC0ruC0v+C0qOC0v+C0seC1jeC0seC1jScsXG4gICAgICAgICAgICBoOiAn4LSS4LSw4LWBIOC0ruC0o+C0v+C0leC1jeC0leC1guC1vCcsXG4gICAgICAgICAgICBoaDogJyVkIOC0ruC0o+C0v+C0leC1jeC0leC1guC1vCcsXG4gICAgICAgICAgICBkOiAn4LSS4LSw4LWBIOC0puC0v+C0teC0uOC0gicsXG4gICAgICAgICAgICBkZDogJyVkIOC0puC0v+C0teC0uOC0gicsXG4gICAgICAgICAgICBNOiAn4LSS4LSw4LWBIOC0ruC0vuC0uOC0gicsXG4gICAgICAgICAgICBNTTogJyVkIOC0ruC0vuC0uOC0gicsXG4gICAgICAgICAgICB5OiAn4LSS4LSw4LWBIOC0teC1vOC0t+C0gicsXG4gICAgICAgICAgICB5eTogJyVkIOC0teC1vOC0t+C0gicsXG4gICAgICAgIH0sXG4gICAgICAgIG1lcmlkaWVtUGFyc2U6IC/gtLDgtL7gtKTgtY3gtLDgtL984LSw4LS+4LS14LS/4LSy4LWGfOC0ieC0muC1jeC0miDgtJXgtLTgtL/gtJ7gtY3gtJ7gtY184LS14LWI4LSV4LWB4LSo4LWN4LSo4LWH4LSw4LSCfOC0sOC0vuC0pOC1jeC0sOC0vy9pLFxuICAgICAgICBtZXJpZGllbUhvdXI6IGZ1bmN0aW9uIChob3VyLCBtZXJpZGllbSkge1xuICAgICAgICAgICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKG1lcmlkaWVtID09PSAn4LSw4LS+4LSk4LWN4LSw4LS/JyAmJiBob3VyID49IDQpIHx8XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPT09ICfgtIngtJrgtY3gtJog4LSV4LS04LS/4LSe4LWN4LSe4LWNJyB8fFxuICAgICAgICAgICAgICAgIG1lcmlkaWVtID09PSAn4LS14LWI4LSV4LWB4LSo4LWN4LSo4LWH4LSw4LSCJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1lcmlkaWVtOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgICAgICAgICBpZiAoaG91ciA8IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0sOC0vuC0pOC1jeC0sOC0vyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIHJldHVybiAn4LSw4LS+4LS14LS/4LSy4LWGJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDE3KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtIngtJrgtY3gtJog4LSV4LS04LS/4LSe4LWN4LSe4LWNJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDIwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICfgtLXgtYjgtJXgtYHgtKjgtY3gtKjgtYfgtLDgtIInO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+C0sOC0vuC0pOC1jeC0sOC0vyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWw7XG5cbn0pKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///55264\n");

/***/ })

}]);