/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-te"],{

/***/ 66773:
/*!*******************************************!*\
  !*** ../node_modules/moment/locale/te.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Telugu [te]\n//! author : Krishna Chaitanya Thota : https://github.com/kcthota\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var te = moment.defineLocale('te', {\n    months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),\n    monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),\n    monthsParseExact: true,\n    weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),\n    weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),\n    weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),\n    longDateFormat: {\n      LT: 'A h:mm',\n      LTS: 'A h:mm:ss',\n      L: 'DD/MM/YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY, A h:mm',\n      LLLL: 'dddd, D MMMM YYYY, A h:mm'\n    },\n    calendar: {\n      sameDay: '[నేడు] LT',\n      nextDay: '[రేపు] LT',\n      nextWeek: 'dddd, LT',\n      lastDay: '[నిన్న] LT',\n      lastWeek: '[గత] dddd, LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: '%s లో',\n      past: '%s క్రితం',\n      s: 'కొన్ని క్షణాలు',\n      ss: '%d సెకన్లు',\n      m: 'ఒక నిమిషం',\n      mm: '%d నిమిషాలు',\n      h: 'ఒక గంట',\n      hh: '%d గంటలు',\n      d: 'ఒక రోజు',\n      dd: '%d రోజులు',\n      M: 'ఒక నెల',\n      MM: '%d నెలలు',\n      y: 'ఒక సంవత్సరం',\n      yy: '%d సంవత్సరాలు'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}వ/,\n    ordinal: '%dవ',\n    meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,\n    meridiemHour: function meridiemHour(hour, meridiem) {\n      if (hour === 12) {\n        hour = 0;\n      }\n      if (meridiem === 'రాత్రి') {\n        return hour < 4 ? hour : hour + 12;\n      } else if (meridiem === 'ఉదయం') {\n        return hour;\n      } else if (meridiem === 'మధ్యాహ్నం') {\n        return hour >= 10 ? hour : hour + 12;\n      } else if (meridiem === 'సాయంత్రం') {\n        return hour + 12;\n      }\n    },\n    meridiem: function meridiem(hour, minute, isLower) {\n      if (hour < 4) {\n        return 'రాత్రి';\n      } else if (hour < 10) {\n        return 'ఉదయం';\n      } else if (hour < 17) {\n        return 'మధ్యాహ్నం';\n      } else if (hour < 20) {\n        return 'సాయంత్రం';\n      } else {\n        return 'రాత్రి';\n      }\n    },\n    week: {\n      dow: 0,\n      // Sunday is the first day of the week.\n      doy: 6 // The week that contains Jan 6th is the first week of the year.\n    }\n  });\n\n  return te;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjY3NzMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7O0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29keXNlZS5jb20vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanM/NjY4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogVGVsdWd1IFt0ZV1cbi8vISBhdXRob3IgOiBLcmlzaG5hIENoYWl0YW55YSBUaG90YSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9rY3Rob3RhXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG5cbiAgICB2YXIgdGUgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCd0ZScsIHtcbiAgICAgICAgbW9udGhzOiAn4LCc4LCo4LC14LCw4LC/X+Cwq+Cwv+CwrOCxjeCwsOCwteCwsOCwv1/gsK7gsL7gsLDgsY3gsJrgsL9f4LCP4LCq4LGN4LCw4LC/4LCy4LGNX+CwruCxh1/gsJzgsYLgsKjgsY1f4LCc4LGB4LCy4LGIX+CwhuCwl+CwuOCxjeCwn+CxgV/gsLjgsYbgsKrgsY3gsJ/gsYbgsILgsKzgsLDgsY1f4LCF4LCV4LGN4LCf4LGL4LCs4LCw4LGNX+CwqOCwteCwguCwrOCwsOCxjV/gsKHgsL/gsLjgsYbgsILgsKzgsLDgsY0nLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIG1vbnRoc1Nob3J0OlxuICAgICAgICAgICAgJ+CwnOCwqC5f4LCr4LC/4LCs4LGN4LCwLl/gsK7gsL7gsLDgsY3gsJrgsL9f4LCP4LCq4LGN4LCw4LC/Ll/gsK7gsYdf4LCc4LGC4LCo4LGNX+CwnOCxgeCwsuCxiF/gsIbgsJcuX+CwuOCxhuCwquCxjS5f4LCF4LCV4LGN4LCf4LGLLl/gsKjgsLUuX+CwoeCwv+CwuOCxhi4nLnNwbGl0KFxuICAgICAgICAgICAgICAgICdfJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgICAgICAgd2Vla2RheXM6XG4gICAgICAgICAgICAn4LCG4LCm4LC/4LC14LC+4LCw4LCCX+CwuOCxi+CwruCwteCwvuCwsOCwgl/gsK7gsILgsJfgsLPgsLXgsL7gsLDgsIJf4LCs4LGB4LCn4LC14LC+4LCw4LCCX+Cwl+CxgeCwsOCxgeCwteCwvuCwsOCwgl/gsLbgsYHgsJXgsY3gsLDgsLXgsL7gsLDgsIJf4LC24LCo4LC/4LC14LC+4LCw4LCCJy5zcGxpdChcbiAgICAgICAgICAgICAgICAnXydcbiAgICAgICAgICAgICksXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6ICfgsIbgsKbgsL9f4LC44LGL4LCuX+CwruCwguCwl+Cws1/gsKzgsYHgsKdf4LCX4LGB4LCw4LGBX+CwtuCxgeCwleCxjeCwsF/gsLbgsKjgsL8nLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzTWluOiAn4LCGX+CwuOCxi1/gsK7gsIJf4LCs4LGBX+Cwl+CxgV/gsLbgsYFf4LC2Jy5zcGxpdCgnXycpLFxuICAgICAgICBsb25nRGF0ZUZvcm1hdDoge1xuICAgICAgICAgICAgTFQ6ICdBIGg6bW0nLFxuICAgICAgICAgICAgTFRTOiAnQSBoOm1tOnNzJyxcbiAgICAgICAgICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICAgICAgTExMOiAnRCBNTU1NIFlZWVksIEEgaDptbScsXG4gICAgICAgICAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVksIEEgaDptbScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW+CwqOCxh+CwoeCxgV0gTFQnLFxuICAgICAgICAgICAgbmV4dERheTogJ1vgsLDgsYfgsKrgsYFdIExUJyxcbiAgICAgICAgICAgIG5leHRXZWVrOiAnZGRkZCwgTFQnLFxuICAgICAgICAgICAgbGFzdERheTogJ1vgsKjgsL/gsKjgsY3gsKhdIExUJyxcbiAgICAgICAgICAgIGxhc3RXZWVrOiAnW+Cwl+CwpF0gZGRkZCwgTFQnLFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6ICclcyDgsLLgsYsnLFxuICAgICAgICAgICAgcGFzdDogJyVzIOCwleCxjeCwsOCwv+CwpOCwgicsXG4gICAgICAgICAgICBzOiAn4LCV4LGK4LCo4LGN4LCo4LC/IOCwleCxjeCwt+Cwo+CwvuCwsuCxgScsXG4gICAgICAgICAgICBzczogJyVkIOCwuOCxhuCwleCwqOCxjeCwsuCxgScsXG4gICAgICAgICAgICBtOiAn4LCS4LCVIOCwqOCwv+CwruCwv+Cwt+CwgicsXG4gICAgICAgICAgICBtbTogJyVkIOCwqOCwv+CwruCwv+Cwt+CwvuCwsuCxgScsXG4gICAgICAgICAgICBoOiAn4LCS4LCVIOCwl+CwguCwnycsXG4gICAgICAgICAgICBoaDogJyVkIOCwl+CwguCwn+CwsuCxgScsXG4gICAgICAgICAgICBkOiAn4LCS4LCVIOCwsOCxi+CwnOCxgScsXG4gICAgICAgICAgICBkZDogJyVkIOCwsOCxi+CwnOCxgeCwsuCxgScsXG4gICAgICAgICAgICBNOiAn4LCS4LCVIOCwqOCxhuCwsicsXG4gICAgICAgICAgICBNTTogJyVkIOCwqOCxhuCwsuCwsuCxgScsXG4gICAgICAgICAgICB5OiAn4LCS4LCVIOCwuOCwguCwteCwpOCxjeCwuOCwsOCwgicsXG4gICAgICAgICAgICB5eTogJyVkIOCwuOCwguCwteCwpOCxjeCwuOCwsOCwvuCwsuCxgScsXG4gICAgICAgIH0sXG4gICAgICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfeCwtS8sXG4gICAgICAgIG9yZGluYWw6ICclZOCwtScsXG4gICAgICAgIG1lcmlkaWVtUGFyc2U6IC/gsLDgsL7gsKTgsY3gsLDgsL984LCJ4LCm4LCv4LCCfOCwruCwp+CxjeCwr+CwvuCwueCxjeCwqOCwgnzgsLjgsL7gsK/gsILgsKTgsY3gsLDgsIIvLFxuICAgICAgICBtZXJpZGllbUhvdXI6IGZ1bmN0aW9uIChob3VyLCBtZXJpZGllbSkge1xuICAgICAgICAgICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWVyaWRpZW0gPT09ICfgsLDgsL7gsKTgsY3gsLDgsL8nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvdXIgPCA0ID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfgsIngsKbgsK/gsIInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn4LCu4LCn4LGN4LCv4LC+4LC54LGN4LCo4LCCJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBob3VyID49IDEwID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfgsLjgsL7gsK/gsILgsKTgsY3gsLDgsIInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWVyaWRpZW06IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICAgICAgICAgIGlmIChob3VyIDwgNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAn4LCw4LC+4LCk4LGN4LCw4LC/JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICfgsIngsKbgsK/gsIInO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgMTcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+CwruCwp+CxjeCwr+CwvuCwueCxjeCwqOCwgic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAyMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAn4LC44LC+4LCv4LCC4LCk4LGN4LCw4LCCJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICfgsLDgsL7gsKTgsY3gsLDgsL8nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3ZWVrOiB7XG4gICAgICAgICAgICBkb3c6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICAgICAgZG95OiA2LCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA2dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGU7XG5cbn0pKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///66773\n");

/***/ })

}]);