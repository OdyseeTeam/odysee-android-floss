/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-bg"],{

/***/ 49741:
/*!*******************************************!*\
  !*** ../node_modules/moment/locale/bg.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Bulgarian [bg]\n//! author : Krasen Borisov : https://github.com/kraz\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var bg = moment.defineLocale('bg', {\n    months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),\n    monthsShort: 'яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),\n    weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),\n    weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),\n    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),\n    longDateFormat: {\n      LT: 'H:mm',\n      LTS: 'H:mm:ss',\n      L: 'D.MM.YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY H:mm',\n      LLLL: 'dddd, D MMMM YYYY H:mm'\n    },\n    calendar: {\n      sameDay: '[Днес в] LT',\n      nextDay: '[Утре в] LT',\n      nextWeek: 'dddd [в] LT',\n      lastDay: '[Вчера в] LT',\n      lastWeek: function lastWeek() {\n        switch (this.day()) {\n          case 0:\n          case 3:\n          case 6:\n            return '[Миналата] dddd [в] LT';\n          case 1:\n          case 2:\n          case 4:\n          case 5:\n            return '[Миналия] dddd [в] LT';\n        }\n      },\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: 'след %s',\n      past: 'преди %s',\n      s: 'няколко секунди',\n      ss: '%d секунди',\n      m: 'минута',\n      mm: '%d минути',\n      h: 'час',\n      hh: '%d часа',\n      d: 'ден',\n      dd: '%d дена',\n      w: 'седмица',\n      ww: '%d седмици',\n      M: 'месец',\n      MM: '%d месеца',\n      y: 'година',\n      yy: '%d години'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}-(ев|ен|ти|ви|ри|ми)/,\n    ordinal: function ordinal(number) {\n      var lastDigit = number % 10,\n        last2Digits = number % 100;\n      if (number === 0) {\n        return number + '-ев';\n      } else if (last2Digits === 0) {\n        return number + '-ен';\n      } else if (last2Digits > 10 && last2Digits < 20) {\n        return number + '-ти';\n      } else if (lastDigit === 1) {\n        return number + '-ви';\n      } else if (lastDigit === 2) {\n        return number + '-ри';\n      } else if (lastDigit === 7 || lastDigit === 8) {\n        return number + '-ми';\n      } else {\n        return number + '-ти';\n      }\n    },\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 7 // The week that contains Jan 7th is the first week of the year.\n    }\n  });\n\n  return bg;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk3NDEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7O0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29keXNlZS5jb20vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanM/YTFhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQnVsZ2FyaWFuIFtiZ11cbi8vISBhdXRob3IgOiBLcmFzZW4gQm9yaXNvdiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9rcmF6XG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG5cbiAgICB2YXIgYmcgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdiZycsIHtcbiAgICAgICAgbW9udGhzOiAn0Y/QvdGD0LDRgNC4X9GE0LXQstGA0YPQsNGA0Lhf0LzQsNGA0YJf0LDQv9GA0LjQu1/QvNCw0Llf0Y7QvdC4X9GO0LvQuF/QsNCy0LPRg9GB0YJf0YHQtdC/0YLQtdC80LLRgNC4X9C+0LrRgtC+0LzQstGA0Lhf0L3QvtC10LzQstGA0Lhf0LTQtdC60LXQvNCy0YDQuCcuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgbW9udGhzU2hvcnQ6ICfRj9C90YNf0YTQtdCyX9C80LDRgF/QsNC/0YBf0LzQsNC5X9GO0L3QuF/RjtC70Lhf0LDQstCzX9GB0LXQv1/QvtC60YJf0L3QvtC1X9C00LXQuicuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXM6ICfQvdC10LTQtdC70Y9f0L/QvtC90LXQtNC10LvQvdC40Lpf0LLRgtC+0YDQvdC40Lpf0YHRgNGP0LTQsF/Rh9C10YLQstGK0YDRgtGK0Lpf0L/QtdGC0YrQul/RgdGK0LHQvtGC0LAnLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6ICfQvdC10LRf0L/QvtC9X9Cy0YLQvl/RgdGA0Y9f0YfQtdGCX9C/0LXRgl/RgdGK0LEnLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzTWluOiAn0L3QtF/Qv9C9X9Cy0YJf0YHRgF/Rh9GCX9C/0YJf0YHQsScuc3BsaXQoJ18nKSxcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgICAgIExUOiAnSDptbScsXG4gICAgICAgICAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICAgICAgICAgIEw6ICdELk1NLllZWVknLFxuICAgICAgICAgICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgICAgICBMTEw6ICdEIE1NTU0gWVlZWSBIOm1tJyxcbiAgICAgICAgICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBIOm1tJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXI6IHtcbiAgICAgICAgICAgIHNhbWVEYXk6ICdb0JTQvdC10YEg0LJdIExUJyxcbiAgICAgICAgICAgIG5leHREYXk6ICdb0KPRgtGA0LUg0LJdIExUJyxcbiAgICAgICAgICAgIG5leHRXZWVrOiAnZGRkZCBb0LJdIExUJyxcbiAgICAgICAgICAgIGxhc3REYXk6ICdb0JLRh9C10YDQsCDQsl0gTFQnLFxuICAgICAgICAgICAgbGFzdFdlZWs6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnW9Cc0LjQvdCw0LvQsNGC0LBdIGRkZGQgW9CyXSBMVCc7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnW9Cc0LjQvdCw0LvQuNGPXSBkZGRkIFvQsl0gTFQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYW1lRWxzZTogJ0wnLFxuICAgICAgICB9LFxuICAgICAgICByZWxhdGl2ZVRpbWU6IHtcbiAgICAgICAgICAgIGZ1dHVyZTogJ9GB0LvQtdC0ICVzJyxcbiAgICAgICAgICAgIHBhc3Q6ICfQv9GA0LXQtNC4ICVzJyxcbiAgICAgICAgICAgIHM6ICfQvdGP0LrQvtC70LrQviDRgdC10LrRg9C90LTQuCcsXG4gICAgICAgICAgICBzczogJyVkINGB0LXQutGD0L3QtNC4JyxcbiAgICAgICAgICAgIG06ICfQvNC40L3Rg9GC0LAnLFxuICAgICAgICAgICAgbW06ICclZCDQvNC40L3Rg9GC0LgnLFxuICAgICAgICAgICAgaDogJ9GH0LDRgScsXG4gICAgICAgICAgICBoaDogJyVkINGH0LDRgdCwJyxcbiAgICAgICAgICAgIGQ6ICfQtNC10L0nLFxuICAgICAgICAgICAgZGQ6ICclZCDQtNC10L3QsCcsXG4gICAgICAgICAgICB3OiAn0YHQtdC00LzQuNGG0LAnLFxuICAgICAgICAgICAgd3c6ICclZCDRgdC10LTQvNC40YbQuCcsXG4gICAgICAgICAgICBNOiAn0LzQtdGB0LXRhicsXG4gICAgICAgICAgICBNTTogJyVkINC80LXRgdC10YbQsCcsXG4gICAgICAgICAgICB5OiAn0LPQvtC00LjQvdCwJyxcbiAgICAgICAgICAgIHl5OiAnJWQg0LPQvtC00LjQvdC4JyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LSjQtdCyfNC10L180YLQuHzQstC4fNGA0Lh80LzQuCkvLFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgbGFzdERpZ2l0ID0gbnVtYmVyICUgMTAsXG4gICAgICAgICAgICAgICAgbGFzdDJEaWdpdHMgPSBudW1iZXIgJSAxMDA7XG4gICAgICAgICAgICBpZiAobnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct0LXQsic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3QyRGlnaXRzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct0LXQvSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3QyRGlnaXRzID4gMTAgJiYgbGFzdDJEaWdpdHMgPCAyMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAnLdGC0LgnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJy3QstC4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct0YDQuCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gNyB8fCBsYXN0RGlnaXQgPT09IDgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJy3QvNC4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct0YLQuCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdlZWs6IHtcbiAgICAgICAgICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgICAgICBkb3k6IDcsIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDd0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBiZztcblxufSkpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///49741\n");

/***/ })

}]);