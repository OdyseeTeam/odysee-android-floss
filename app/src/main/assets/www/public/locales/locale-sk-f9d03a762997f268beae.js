/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-sk"],{

/***/ 41512:
/*!*******************************************!*\
  !*** ../node_modules/moment/locale/sk.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Slovak [sk]\n//! author : Martin Minka : https://github.com/k2s\n//! based on work of petrbela : https://github.com/petrbela\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),\n    monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');\n  function plural(n) {\n    return n > 1 && n < 5;\n  }\n  function translate(number, withoutSuffix, key, isFuture) {\n    var result = number + ' ';\n    switch (key) {\n      case 's':\n        // a few seconds / in a few seconds / a few seconds ago\n        return withoutSuffix || isFuture ? 'pár sekúnd' : 'pár sekundami';\n      case 'ss':\n        // 9 seconds / in 9 seconds / 9 seconds ago\n        if (withoutSuffix || isFuture) {\n          return result + (plural(number) ? 'sekundy' : 'sekúnd');\n        } else {\n          return result + 'sekundami';\n        }\n      case 'm':\n        // a minute / in a minute / a minute ago\n        return withoutSuffix ? 'minúta' : isFuture ? 'minútu' : 'minútou';\n      case 'mm':\n        // 9 minutes / in 9 minutes / 9 minutes ago\n        if (withoutSuffix || isFuture) {\n          return result + (plural(number) ? 'minúty' : 'minút');\n        } else {\n          return result + 'minútami';\n        }\n      case 'h':\n        // an hour / in an hour / an hour ago\n        return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';\n      case 'hh':\n        // 9 hours / in 9 hours / 9 hours ago\n        if (withoutSuffix || isFuture) {\n          return result + (plural(number) ? 'hodiny' : 'hodín');\n        } else {\n          return result + 'hodinami';\n        }\n      case 'd':\n        // a day / in a day / a day ago\n        return withoutSuffix || isFuture ? 'deň' : 'dňom';\n      case 'dd':\n        // 9 days / in 9 days / 9 days ago\n        if (withoutSuffix || isFuture) {\n          return result + (plural(number) ? 'dni' : 'dní');\n        } else {\n          return result + 'dňami';\n        }\n      case 'M':\n        // a month / in a month / a month ago\n        return withoutSuffix || isFuture ? 'mesiac' : 'mesiacom';\n      case 'MM':\n        // 9 months / in 9 months / 9 months ago\n        if (withoutSuffix || isFuture) {\n          return result + (plural(number) ? 'mesiace' : 'mesiacov');\n        } else {\n          return result + 'mesiacmi';\n        }\n      case 'y':\n        // a year / in a year / a year ago\n        return withoutSuffix || isFuture ? 'rok' : 'rokom';\n      case 'yy':\n        // 9 years / in 9 years / 9 years ago\n        if (withoutSuffix || isFuture) {\n          return result + (plural(number) ? 'roky' : 'rokov');\n        } else {\n          return result + 'rokmi';\n        }\n    }\n  }\n  var sk = moment.defineLocale('sk', {\n    months: months,\n    monthsShort: monthsShort,\n    weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),\n    weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),\n    weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),\n    longDateFormat: {\n      LT: 'H:mm',\n      LTS: 'H:mm:ss',\n      L: 'DD.MM.YYYY',\n      LL: 'D. MMMM YYYY',\n      LLL: 'D. MMMM YYYY H:mm',\n      LLLL: 'dddd D. MMMM YYYY H:mm'\n    },\n    calendar: {\n      sameDay: '[dnes o] LT',\n      nextDay: '[zajtra o] LT',\n      nextWeek: function nextWeek() {\n        switch (this.day()) {\n          case 0:\n            return '[v nedeľu o] LT';\n          case 1:\n          case 2:\n            return '[v] dddd [o] LT';\n          case 3:\n            return '[v stredu o] LT';\n          case 4:\n            return '[vo štvrtok o] LT';\n          case 5:\n            return '[v piatok o] LT';\n          case 6:\n            return '[v sobotu o] LT';\n        }\n      },\n      lastDay: '[včera o] LT',\n      lastWeek: function lastWeek() {\n        switch (this.day()) {\n          case 0:\n            return '[minulú nedeľu o] LT';\n          case 1:\n          case 2:\n            return '[minulý] dddd [o] LT';\n          case 3:\n            return '[minulú stredu o] LT';\n          case 4:\n          case 5:\n            return '[minulý] dddd [o] LT';\n          case 6:\n            return '[minulú sobotu o] LT';\n        }\n      },\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: 'za %s',\n      past: 'pred %s',\n      s: translate,\n      ss: translate,\n      m: translate,\n      mm: translate,\n      h: translate,\n      hh: translate,\n      d: translate,\n      dd: translate,\n      M: translate,\n      MM: translate,\n      y: translate,\n      yy: translate\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}\\./,\n    ordinal: '%d.',\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n    }\n  });\n\n  return sk;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDE1MTIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTs7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2R5c2VlLmNvbS8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qcz82MDhiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBTbG92YWsgW3NrXVxuLy8hIGF1dGhvciA6IE1hcnRpbiBNaW5rYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9rMnNcbi8vISBiYXNlZCBvbiB3b3JrIG9mIHBldHJiZWxhIDogaHR0cHM6Ly9naXRodWIuY29tL3BldHJiZWxhXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG5cbiAgICB2YXIgbW9udGhzID1cbiAgICAgICAgICAgICdqYW51w6FyX2ZlYnJ1w6FyX21hcmVjX2FwcsOtbF9tw6FqX2rDum5fasO6bF9hdWd1c3Rfc2VwdGVtYmVyX29rdMOzYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdChcbiAgICAgICAgICAgICAgICAnXydcbiAgICAgICAgICAgICksXG4gICAgICAgIG1vbnRoc1Nob3J0ID0gJ2phbl9mZWJfbWFyX2Fwcl9tw6FqX2rDum5fasO6bF9hdWdfc2VwX29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpO1xuICAgIGZ1bmN0aW9uIHBsdXJhbChuKSB7XG4gICAgICAgIHJldHVybiBuID4gMSAmJiBuIDwgNTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5LCBpc0Z1dHVyZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVtYmVyICsgJyAnO1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAncyc6IC8vIGEgZmV3IHNlY29uZHMgLyBpbiBhIGZldyBzZWNvbmRzIC8gYSBmZXcgc2Vjb25kcyBhZ29cbiAgICAgICAgICAgICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdww6FyIHNla8O6bmQnIDogJ3DDoXIgc2VrdW5kYW1pJztcbiAgICAgICAgICAgIGNhc2UgJ3NzJzogLy8gOSBzZWNvbmRzIC8gaW4gOSBzZWNvbmRzIC8gOSBzZWNvbmRzIGFnb1xuICAgICAgICAgICAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bWJlcikgPyAnc2VrdW5keScgOiAnc2Vrw7puZCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAnc2VrdW5kYW1pJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdtJzogLy8gYSBtaW51dGUgLyBpbiBhIG1pbnV0ZSAvIGEgbWludXRlIGFnb1xuICAgICAgICAgICAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ21pbsO6dGEnIDogaXNGdXR1cmUgPyAnbWluw7p0dScgOiAnbWluw7p0b3UnO1xuICAgICAgICAgICAgY2FzZSAnbW0nOiAvLyA5IG1pbnV0ZXMgLyBpbiA5IG1pbnV0ZXMgLyA5IG1pbnV0ZXMgYWdvXG4gICAgICAgICAgICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtYmVyKSA/ICdtaW7DunR5JyA6ICdtaW7DunQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ21pbsO6dGFtaSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnaCc6IC8vIGFuIGhvdXIgLyBpbiBhbiBob3VyIC8gYW4gaG91ciBhZ29cbiAgICAgICAgICAgICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdob2RpbmEnIDogaXNGdXR1cmUgPyAnaG9kaW51JyA6ICdob2Rpbm91JztcbiAgICAgICAgICAgIGNhc2UgJ2hoJzogLy8gOSBob3VycyAvIGluIDkgaG91cnMgLyA5IGhvdXJzIGFnb1xuICAgICAgICAgICAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bWJlcikgPyAnaG9kaW55JyA6ICdob2TDrW4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2hvZGluYW1pJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdkJzogLy8gYSBkYXkgLyBpbiBhIGRheSAvIGEgZGF5IGFnb1xuICAgICAgICAgICAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2RlxYgnIDogJ2TFiG9tJztcbiAgICAgICAgICAgIGNhc2UgJ2RkJzogLy8gOSBkYXlzIC8gaW4gOSBkYXlzIC8gOSBkYXlzIGFnb1xuICAgICAgICAgICAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bWJlcikgPyAnZG5pJyA6ICdkbsOtJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArICdkxYhhbWknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ00nOiAvLyBhIG1vbnRoIC8gaW4gYSBtb250aCAvIGEgbW9udGggYWdvXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWVzaWFjJyA6ICdtZXNpYWNvbSc7XG4gICAgICAgICAgICBjYXNlICdNTSc6IC8vIDkgbW9udGhzIC8gaW4gOSBtb250aHMgLyA5IG1vbnRocyBhZ29cbiAgICAgICAgICAgICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW1iZXIpID8gJ21lc2lhY2UnIDogJ21lc2lhY292Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtZXNpYWNtaSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAneSc6IC8vIGEgeWVhciAvIGluIGEgeWVhciAvIGEgeWVhciBhZ29cbiAgICAgICAgICAgICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdyb2snIDogJ3Jva29tJztcbiAgICAgICAgICAgIGNhc2UgJ3l5JzogLy8gOSB5ZWFycyAvIGluIDkgeWVhcnMgLyA5IHllYXJzIGFnb1xuICAgICAgICAgICAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bWJlcikgPyAncm9reScgOiAncm9rb3YnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ3Jva21pJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc2sgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdzaycsIHtcbiAgICAgICAgbW9udGhzOiBtb250aHMsXG4gICAgICAgIG1vbnRoc1Nob3J0OiBtb250aHNTaG9ydCxcbiAgICAgICAgd2Vla2RheXM6ICduZWRlxL5hX3BvbmRlbG9rX3V0b3Jva19zdHJlZGFfxaF0dnJ0b2tfcGlhdG9rX3NvYm90YScuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNTaG9ydDogJ25lX3BvX3V0X3N0X8WhdF9waV9zbycuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNNaW46ICduZV9wb191dF9zdF/FoXRfcGlfc28nLnNwbGl0KCdfJyksXG4gICAgICAgIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgICAgICAgICBMVDogJ0g6bW0nLFxuICAgICAgICAgICAgTFRTOiAnSDptbTpzcycsXG4gICAgICAgICAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgICAgICAgICBMTDogJ0QuIE1NTU0gWVlZWScsXG4gICAgICAgICAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXG4gICAgICAgICAgICBMTExMOiAnZGRkZCBELiBNTU1NIFlZWVkgSDptbScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW2RuZXMgb10gTFQnLFxuICAgICAgICAgICAgbmV4dERheTogJ1t6YWp0cmEgb10gTFQnLFxuICAgICAgICAgICAgbmV4dFdlZWs6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbdiBuZWRlxL51IG9dIExUJztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1t2XSBkZGRkIFtvXSBMVCc7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnW3Ygc3RyZWR1IG9dIExUJztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbdm8gxaF0dnJ0b2sgb10gTFQnO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1t2IHBpYXRvayBvXSBMVCc7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnW3Ygc29ib3R1IG9dIExUJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFzdERheTogJ1t2xI1lcmEgb10gTFQnLFxuICAgICAgICAgICAgbGFzdFdlZWs6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbbWludWzDuiBuZWRlxL51IG9dIExUJztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1ttaW51bMO9XSBkZGRkIFtvXSBMVCc7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnW21pbnVsw7ogc3RyZWR1IG9dIExUJztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1ttaW51bMO9XSBkZGRkIFtvXSBMVCc7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnW21pbnVsw7ogc29ib3R1IG9dIExUJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6ICd6YSAlcycsXG4gICAgICAgICAgICBwYXN0OiAncHJlZCAlcycsXG4gICAgICAgICAgICBzOiB0cmFuc2xhdGUsXG4gICAgICAgICAgICBzczogdHJhbnNsYXRlLFxuICAgICAgICAgICAgbTogdHJhbnNsYXRlLFxuICAgICAgICAgICAgbW06IHRyYW5zbGF0ZSxcbiAgICAgICAgICAgIGg6IHRyYW5zbGF0ZSxcbiAgICAgICAgICAgIGhoOiB0cmFuc2xhdGUsXG4gICAgICAgICAgICBkOiB0cmFuc2xhdGUsXG4gICAgICAgICAgICBkZDogdHJhbnNsYXRlLFxuICAgICAgICAgICAgTTogdHJhbnNsYXRlLFxuICAgICAgICAgICAgTU06IHRyYW5zbGF0ZSxcbiAgICAgICAgICAgIHk6IHRyYW5zbGF0ZSxcbiAgICAgICAgICAgIHl5OiB0cmFuc2xhdGUsXG4gICAgICAgIH0sXG4gICAgICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gICAgICAgIG9yZGluYWw6ICclZC4nLFxuICAgICAgICB3ZWVrOiB7XG4gICAgICAgICAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICAgICAgZG95OiA0LCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2s7XG5cbn0pKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///41512\n");

/***/ })

}]);