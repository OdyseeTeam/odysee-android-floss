/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-tr"],{

/***/ 15941:
/*!*******************************************!*\
  !*** ../node_modules/moment/locale/tr.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Turkish [tr]\n//! authors : Erhan Gundogan : https://github.com/erhangundogan,\n//!           Burak Yiğit Kaya: https://github.com/BYK\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var suffixes = {\n    1: \"'inci\",\n    5: \"'inci\",\n    8: \"'inci\",\n    70: \"'inci\",\n    80: \"'inci\",\n    2: \"'nci\",\n    7: \"'nci\",\n    20: \"'nci\",\n    50: \"'nci\",\n    3: \"'üncü\",\n    4: \"'üncü\",\n    100: \"'üncü\",\n    6: \"'ncı\",\n    9: \"'uncu\",\n    10: \"'uncu\",\n    30: \"'uncu\",\n    60: \"'ıncı\",\n    90: \"'ıncı\"\n  };\n  var tr = moment.defineLocale('tr', {\n    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),\n    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),\n    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),\n    weekdaysShort: 'Paz_Pzt_Sal_Çar_Per_Cum_Cmt'.split('_'),\n    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),\n    meridiem: function meridiem(hours, minutes, isLower) {\n      if (hours < 12) {\n        return isLower ? 'öö' : 'ÖÖ';\n      } else {\n        return isLower ? 'ös' : 'ÖS';\n      }\n    },\n    meridiemParse: /öö|ÖÖ|ös|ÖS/,\n    isPM: function isPM(input) {\n      return input === 'ös' || input === 'ÖS';\n    },\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'DD.MM.YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY HH:mm',\n      LLLL: 'dddd, D MMMM YYYY HH:mm'\n    },\n    calendar: {\n      sameDay: '[bugün saat] LT',\n      nextDay: '[yarın saat] LT',\n      nextWeek: '[gelecek] dddd [saat] LT',\n      lastDay: '[dün] LT',\n      lastWeek: '[geçen] dddd [saat] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: '%s sonra',\n      past: '%s önce',\n      s: 'birkaç saniye',\n      ss: '%d saniye',\n      m: 'bir dakika',\n      mm: '%d dakika',\n      h: 'bir saat',\n      hh: '%d saat',\n      d: 'bir gün',\n      dd: '%d gün',\n      w: 'bir hafta',\n      ww: '%d hafta',\n      M: 'bir ay',\n      MM: '%d ay',\n      y: 'bir yıl',\n      yy: '%d yıl'\n    },\n    ordinal: function ordinal(number, period) {\n      switch (period) {\n        case 'd':\n        case 'D':\n        case 'Do':\n        case 'DD':\n          return number;\n        default:\n          if (number === 0) {\n            // special case for zero\n            return number + \"'ıncı\";\n          }\n          var a = number % 10,\n            b = number % 100 - a,\n            c = number >= 100 ? 100 : null;\n          return number + (suffixes[a] || suffixes[b] || suffixes[c]);\n      }\n    },\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 7 // The week that contains Jan 7th is the first week of the year.\n    }\n  });\n\n  return tr;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTU5NDEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29keXNlZS5jb20vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanM/MzcxZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogVHVya2lzaCBbdHJdXG4vLyEgYXV0aG9ycyA6IEVyaGFuIEd1bmRvZ2FuIDogaHR0cHM6Ly9naXRodWIuY29tL2VyaGFuZ3VuZG9nYW4sXG4vLyEgICAgICAgICAgIEJ1cmFrIFlpxJ9pdCBLYXlhOiBodHRwczovL2dpdGh1Yi5jb20vQllLXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG5cbiAgICB2YXIgc3VmZml4ZXMgPSB7XG4gICAgICAgIDE6IFwiJ2luY2lcIixcbiAgICAgICAgNTogXCInaW5jaVwiLFxuICAgICAgICA4OiBcIidpbmNpXCIsXG4gICAgICAgIDcwOiBcIidpbmNpXCIsXG4gICAgICAgIDgwOiBcIidpbmNpXCIsXG4gICAgICAgIDI6IFwiJ25jaVwiLFxuICAgICAgICA3OiBcIiduY2lcIixcbiAgICAgICAgMjA6IFwiJ25jaVwiLFxuICAgICAgICA1MDogXCInbmNpXCIsXG4gICAgICAgIDM6IFwiJ8O8bmPDvFwiLFxuICAgICAgICA0OiBcIifDvG5jw7xcIixcbiAgICAgICAgMTAwOiBcIifDvG5jw7xcIixcbiAgICAgICAgNjogXCInbmPEsVwiLFxuICAgICAgICA5OiBcIid1bmN1XCIsXG4gICAgICAgIDEwOiBcIid1bmN1XCIsXG4gICAgICAgIDMwOiBcIid1bmN1XCIsXG4gICAgICAgIDYwOiBcIifEsW5jxLFcIixcbiAgICAgICAgOTA6IFwiJ8SxbmPEsVwiLFxuICAgIH07XG5cbiAgICB2YXIgdHIgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCd0cicsIHtcbiAgICAgICAgbW9udGhzOiAnT2Nha1/FnnViYXRfTWFydF9OaXNhbl9NYXnEsXNfSGF6aXJhbl9UZW1tdXpfQcSfdXN0b3NfRXlsw7xsX0VraW1fS2FzxLFtX0FyYWzEsWsnLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIG1vbnRoc1Nob3J0OiAnT2NhX8WedWJfTWFyX05pc19NYXlfSGF6X1RlbV9BxJ91X0V5bF9Fa2lfS2FzX0FyYScuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXM6ICdQYXphcl9QYXphcnRlc2lfU2FsxLFfw4dhcsWfYW1iYV9QZXLFn2VtYmVfQ3VtYV9DdW1hcnRlc2knLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6ICdQYXpfUHp0X1NhbF/Dh2FyX1Blcl9DdW1fQ210Jy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c01pbjogJ1B6X1B0X1NhX8OHYV9QZV9DdV9DdCcuc3BsaXQoJ18nKSxcbiAgICAgICAgbWVyaWRpZW06IGZ1bmN0aW9uIChob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgICAgICAgICAgaWYgKGhvdXJzIDwgMTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNMb3dlciA/ICfDtsO2JyA6ICfDlsOWJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnw7ZzJyA6ICfDllMnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXJpZGllbVBhcnNlOiAvw7bDtnzDlsOWfMO2c3zDllMvLFxuICAgICAgICBpc1BNOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCA9PT0gJ8O2cycgfHwgaW5wdXQgPT09ICfDllMnO1xuICAgICAgICB9LFxuICAgICAgICBsb25nRGF0ZUZvcm1hdDoge1xuICAgICAgICAgICAgTFQ6ICdISDptbScsXG4gICAgICAgICAgICBMVFM6ICdISDptbTpzcycsXG4gICAgICAgICAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgICAgICAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW2J1Z8O8biBzYWF0XSBMVCcsXG4gICAgICAgICAgICBuZXh0RGF5OiAnW3lhcsSxbiBzYWF0XSBMVCcsXG4gICAgICAgICAgICBuZXh0V2VlazogJ1tnZWxlY2VrXSBkZGRkIFtzYWF0XSBMVCcsXG4gICAgICAgICAgICBsYXN0RGF5OiAnW2TDvG5dIExUJyxcbiAgICAgICAgICAgIGxhc3RXZWVrOiAnW2dlw6dlbl0gZGRkZCBbc2FhdF0gTFQnLFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6ICclcyBzb25yYScsXG4gICAgICAgICAgICBwYXN0OiAnJXMgw7ZuY2UnLFxuICAgICAgICAgICAgczogJ2Jpcmthw6cgc2FuaXllJyxcbiAgICAgICAgICAgIHNzOiAnJWQgc2FuaXllJyxcbiAgICAgICAgICAgIG06ICdiaXIgZGFraWthJyxcbiAgICAgICAgICAgIG1tOiAnJWQgZGFraWthJyxcbiAgICAgICAgICAgIGg6ICdiaXIgc2FhdCcsXG4gICAgICAgICAgICBoaDogJyVkIHNhYXQnLFxuICAgICAgICAgICAgZDogJ2JpciBnw7xuJyxcbiAgICAgICAgICAgIGRkOiAnJWQgZ8O8bicsXG4gICAgICAgICAgICB3OiAnYmlyIGhhZnRhJyxcbiAgICAgICAgICAgIHd3OiAnJWQgaGFmdGEnLFxuICAgICAgICAgICAgTTogJ2JpciBheScsXG4gICAgICAgICAgICBNTTogJyVkIGF5JyxcbiAgICAgICAgICAgIHk6ICdiaXIgecSxbCcsXG4gICAgICAgICAgICB5eTogJyVkIHnEsWwnLFxuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyLCBwZXJpb2QpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnRG8nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0REJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIHplcm9cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyBcIifEsW5jxLFcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IG51bWJlciAlIDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYiA9IChudW1iZXIgJSAxMDApIC0gYSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBudW1iZXIgPj0gMTAwID8gMTAwIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArIChzdWZmaXhlc1thXSB8fCBzdWZmaXhlc1tiXSB8fCBzdWZmaXhlc1tjXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdlZWs6IHtcbiAgICAgICAgICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgICAgICBkb3k6IDcsIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDd0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB0cjtcblxufSkpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15941\n");

/***/ })

}]);