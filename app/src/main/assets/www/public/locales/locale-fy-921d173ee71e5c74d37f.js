/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-fy"],{

/***/ 26580:
/*!*******************************************!*\
  !*** ../node_modules/moment/locale/fy.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Frisian [fy]\n//! author : Robin van der Vliet : https://github.com/robin0van0der0v\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),\n    monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');\n  var fy = moment.defineLocale('fy', {\n    months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),\n    monthsShort: function monthsShort(m, format) {\n      if (!m) {\n        return monthsShortWithDots;\n      } else if (/-MMM-/.test(format)) {\n        return monthsShortWithoutDots[m.month()];\n      } else {\n        return monthsShortWithDots[m.month()];\n      }\n    },\n    monthsParseExact: true,\n    weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),\n    weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),\n    weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),\n    weekdaysParseExact: true,\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'DD-MM-YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY HH:mm',\n      LLLL: 'dddd D MMMM YYYY HH:mm'\n    },\n    calendar: {\n      sameDay: '[hjoed om] LT',\n      nextDay: '[moarn om] LT',\n      nextWeek: 'dddd [om] LT',\n      lastDay: '[juster om] LT',\n      lastWeek: '[ôfrûne] dddd [om] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: 'oer %s',\n      past: '%s lyn',\n      s: 'in pear sekonden',\n      ss: '%d sekonden',\n      m: 'ien minút',\n      mm: '%d minuten',\n      h: 'ien oere',\n      hh: '%d oeren',\n      d: 'ien dei',\n      dd: '%d dagen',\n      M: 'ien moanne',\n      MM: '%d moannen',\n      y: 'ien jier',\n      yy: '%d jierren'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}(ste|de)/,\n    ordinal: function ordinal(number) {\n      return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');\n    },\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n    }\n  });\n\n  return fy;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjY1ODAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7O0FBRUE7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29keXNlZS5jb20vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanM/NDY2NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogRnJpc2lhbiBbZnldXG4vLyEgYXV0aG9yIDogUm9iaW4gdmFuIGRlciBWbGlldCA6IGh0dHBzOi8vZ2l0aHViLmNvbS9yb2JpbjB2YW4wZGVyMHZcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cblxuICAgIHZhciBtb250aHNTaG9ydFdpdGhEb3RzID1cbiAgICAgICAgICAgICdqYW4uX2ZlYi5fbXJ0Ll9hcHIuX21haV9qdW4uX2p1bC5fYXVnLl9zZXAuX29rdC5fbm92Ll9kZXMuJy5zcGxpdCgnXycpLFxuICAgICAgICBtb250aHNTaG9ydFdpdGhvdXREb3RzID1cbiAgICAgICAgICAgICdqYW5fZmViX21ydF9hcHJfbWFpX2p1bl9qdWxfYXVnX3NlcF9va3Rfbm92X2Rlcycuc3BsaXQoJ18nKTtcblxuICAgIHZhciBmeSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2Z5Jywge1xuICAgICAgICBtb250aHM6ICdqYW5uZXdhcmlzX2ZlYnJld2FyaXNfbWFhcnRfYXByaWxfbWFhaWVfanVueV9qdWx5X2F1Z3VzdHVzX3NlcHRpbWJlcl9va3RvYmVyX25vdmltYmVyX2Rlc2ltYmVyJy5zcGxpdChcbiAgICAgICAgICAgICdfJ1xuICAgICAgICApLFxuICAgICAgICBtb250aHNTaG9ydDogZnVuY3Rpb24gKG0sIGZvcm1hdCkge1xuICAgICAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0V2l0aERvdHM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0V2l0aG91dERvdHNbbS5tb250aCgpXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0V2l0aERvdHNbbS5tb250aCgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgICAgICAgd2Vla2RheXM6ICdzbmVpbl9tb2FuZGVpX3RpaXNkZWlfd29hbnNkZWlfdG9uZ2Vyc2RlaV9mcmVlZF9zbmVvbicuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgd2Vla2RheXNTaG9ydDogJ3NpLl9tby5fdGkuX3dvLl90by5fZnIuX3NvLicuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNNaW46ICdTaV9Nb19UaV9Xb19Ub19Gcl9Tbycuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICAgICAgICBsb25nRGF0ZUZvcm1hdDoge1xuICAgICAgICAgICAgTFQ6ICdISDptbScsXG4gICAgICAgICAgICBMVFM6ICdISDptbTpzcycsXG4gICAgICAgICAgICBMOiAnREQtTU0tWVlZWScsXG4gICAgICAgICAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXI6IHtcbiAgICAgICAgICAgIHNhbWVEYXk6ICdbaGpvZWQgb21dIExUJyxcbiAgICAgICAgICAgIG5leHREYXk6ICdbbW9hcm4gb21dIExUJyxcbiAgICAgICAgICAgIG5leHRXZWVrOiAnZGRkZCBbb21dIExUJyxcbiAgICAgICAgICAgIGxhc3REYXk6ICdbanVzdGVyIG9tXSBMVCcsXG4gICAgICAgICAgICBsYXN0V2VlazogJ1vDtGZyw7tuZV0gZGRkZCBbb21dIExUJyxcbiAgICAgICAgICAgIHNhbWVFbHNlOiAnTCcsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aXZlVGltZToge1xuICAgICAgICAgICAgZnV0dXJlOiAnb2VyICVzJyxcbiAgICAgICAgICAgIHBhc3Q6ICclcyBseW4nLFxuICAgICAgICAgICAgczogJ2luIHBlYXIgc2Vrb25kZW4nLFxuICAgICAgICAgICAgc3M6ICclZCBzZWtvbmRlbicsXG4gICAgICAgICAgICBtOiAnaWVuIG1pbsO6dCcsXG4gICAgICAgICAgICBtbTogJyVkIG1pbnV0ZW4nLFxuICAgICAgICAgICAgaDogJ2llbiBvZXJlJyxcbiAgICAgICAgICAgIGhoOiAnJWQgb2VyZW4nLFxuICAgICAgICAgICAgZDogJ2llbiBkZWknLFxuICAgICAgICAgICAgZGQ6ICclZCBkYWdlbicsXG4gICAgICAgICAgICBNOiAnaWVuIG1vYW5uZScsXG4gICAgICAgICAgICBNTTogJyVkIG1vYW5uZW4nLFxuICAgICAgICAgICAgeTogJ2llbiBqaWVyJyxcbiAgICAgICAgICAgIHl5OiAnJWQgamllcnJlbicsXG4gICAgICAgIH0sXG4gICAgICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShzdGV8ZGUpLyxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBudW1iZXIgK1xuICAgICAgICAgICAgICAgIChudW1iZXIgPT09IDEgfHwgbnVtYmVyID09PSA4IHx8IG51bWJlciA+PSAyMCA/ICdzdGUnIDogJ2RlJylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIHdlZWs6IHtcbiAgICAgICAgICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgICAgICBkb3k6IDQsIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBmeTtcblxufSkpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26580\n");

/***/ })

}]);