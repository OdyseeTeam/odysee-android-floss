/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-es-do"],{

/***/ 53401:
/*!**********************************************!*\
  !*** ../node_modules/moment/locale/es-do.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Spanish (Dominican Republic) [es-do]\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),\n    _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),\n    monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],\n    monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\\.?|feb\\.?|mar\\.?|abr\\.?|may\\.?|jun\\.?|jul\\.?|ago\\.?|sep\\.?|oct\\.?|nov\\.?|dic\\.?)/i;\n  var esDo = moment.defineLocale('es-do', {\n    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),\n    monthsShort: function monthsShort(m, format) {\n      if (!m) {\n        return monthsShortDot;\n      } else if (/-MMM-/.test(format)) {\n        return _monthsShort[m.month()];\n      } else {\n        return monthsShortDot[m.month()];\n      }\n    },\n    monthsRegex: monthsRegex,\n    monthsShortRegex: monthsRegex,\n    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,\n    monthsShortStrictRegex: /^(ene\\.?|feb\\.?|mar\\.?|abr\\.?|may\\.?|jun\\.?|jul\\.?|ago\\.?|sep\\.?|oct\\.?|nov\\.?|dic\\.?)/i,\n    monthsParse: monthsParse,\n    longMonthsParse: monthsParse,\n    shortMonthsParse: monthsParse,\n    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),\n    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),\n    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),\n    weekdaysParseExact: true,\n    longDateFormat: {\n      LT: 'h:mm A',\n      LTS: 'h:mm:ss A',\n      L: 'DD/MM/YYYY',\n      LL: 'D [de] MMMM [de] YYYY',\n      LLL: 'D [de] MMMM [de] YYYY h:mm A',\n      LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'\n    },\n    calendar: {\n      sameDay: function sameDay() {\n        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';\n      },\n      nextDay: function nextDay() {\n        return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';\n      },\n      nextWeek: function nextWeek() {\n        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';\n      },\n      lastDay: function lastDay() {\n        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';\n      },\n      lastWeek: function lastWeek() {\n        return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';\n      },\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: 'en %s',\n      past: 'hace %s',\n      s: 'unos segundos',\n      ss: '%d segundos',\n      m: 'un minuto',\n      mm: '%d minutos',\n      h: 'una hora',\n      hh: '%d horas',\n      d: 'un día',\n      dd: '%d días',\n      w: 'una semana',\n      ww: '%d semanas',\n      M: 'un mes',\n      MM: '%d meses',\n      y: 'un año',\n      yy: '%d años'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}º/,\n    ordinal: '%dº',\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n    }\n  });\n\n  return esDo;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTM0MDEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBOztBQUVBO0FBRUE7QUFJQTtBQUNBO0FBY0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZHlzZWUuY29tLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzP2YzMDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFNwYW5pc2ggKERvbWluaWNhbiBSZXB1YmxpYykgW2VzLWRvXVxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuXG4gICAgdmFyIG1vbnRoc1Nob3J0RG90ID1cbiAgICAgICAgICAgICdlbmUuX2ZlYi5fbWFyLl9hYnIuX21heS5fanVuLl9qdWwuX2Fnby5fc2VwLl9vY3QuX25vdi5fZGljLicuc3BsaXQoXG4gICAgICAgICAgICAgICAgJ18nXG4gICAgICAgICAgICApLFxuICAgICAgICBtb250aHNTaG9ydCA9ICdlbmVfZmViX21hcl9hYnJfbWF5X2p1bl9qdWxfYWdvX3NlcF9vY3Rfbm92X2RpYycuc3BsaXQoJ18nKSxcbiAgICAgICAgbW9udGhzUGFyc2UgPSBbXG4gICAgICAgICAgICAvXmVuZS9pLFxuICAgICAgICAgICAgL15mZWIvaSxcbiAgICAgICAgICAgIC9ebWFyL2ksXG4gICAgICAgICAgICAvXmFici9pLFxuICAgICAgICAgICAgL15tYXkvaSxcbiAgICAgICAgICAgIC9eanVuL2ksXG4gICAgICAgICAgICAvXmp1bC9pLFxuICAgICAgICAgICAgL15hZ28vaSxcbiAgICAgICAgICAgIC9ec2VwL2ksXG4gICAgICAgICAgICAvXm9jdC9pLFxuICAgICAgICAgICAgL15ub3YvaSxcbiAgICAgICAgICAgIC9eZGljL2ksXG4gICAgICAgIF0sXG4gICAgICAgIG1vbnRoc1JlZ2V4ID1cbiAgICAgICAgICAgIC9eKGVuZXJvfGZlYnJlcm98bWFyem98YWJyaWx8bWF5b3xqdW5pb3xqdWxpb3xhZ29zdG98c2VwdGllbWJyZXxvY3R1YnJlfG5vdmllbWJyZXxkaWNpZW1icmV8ZW5lXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYXlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNlcFxcLj98b2N0XFwuP3xub3ZcXC4/fGRpY1xcLj8pL2k7XG5cbiAgICB2YXIgZXNEbyA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2VzLWRvJywge1xuICAgICAgICBtb250aHM6ICdlbmVyb19mZWJyZXJvX21hcnpvX2FicmlsX21heW9fanVuaW9fanVsaW9fYWdvc3RvX3NlcHRpZW1icmVfb2N0dWJyZV9ub3ZpZW1icmVfZGljaWVtYnJlJy5zcGxpdChcbiAgICAgICAgICAgICdfJ1xuICAgICAgICApLFxuICAgICAgICBtb250aHNTaG9ydDogZnVuY3Rpb24gKG0sIGZvcm1hdCkge1xuICAgICAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90O1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb250aHNTaG9ydFttLm1vbnRoKCldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbbS5tb250aCgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW9udGhzUmVnZXg6IG1vbnRoc1JlZ2V4LFxuICAgICAgICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcbiAgICAgICAgbW9udGhzU3RyaWN0UmVnZXg6XG4gICAgICAgICAgICAvXihlbmVyb3xmZWJyZXJvfG1hcnpvfGFicmlsfG1heW98anVuaW98anVsaW98YWdvc3RvfHNlcHRpZW1icmV8b2N0dWJyZXxub3ZpZW1icmV8ZGljaWVtYnJlKS9pLFxuICAgICAgICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OlxuICAgICAgICAgICAgL14oZW5lXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYXlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNlcFxcLj98b2N0XFwuP3xub3ZcXC4/fGRpY1xcLj8pL2ksXG4gICAgICAgIG1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgICAgICAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgICAgICAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gICAgICAgIHdlZWtkYXlzOiAnZG9taW5nb19sdW5lc19tYXJ0ZXNfbWnDqXJjb2xlc19qdWV2ZXNfdmllcm5lc19zw6FiYWRvJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiAnZG9tLl9sdW4uX21hci5fbWnDqS5fanVlLl92aWUuX3PDoWIuJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX21pX2p1X3ZpX3PDoScuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICAgICAgICBsb25nRGF0ZUZvcm1hdDoge1xuICAgICAgICAgICAgTFQ6ICdoOm1tIEEnLFxuICAgICAgICAgICAgTFRTOiAnaDptbTpzcyBBJyxcbiAgICAgICAgICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgICAgIExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZJyxcbiAgICAgICAgICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBoOm1tIEEnLFxuICAgICAgICAgICAgTExMTDogJ2RkZGQsIEQgW2RlXSBNTU1NIFtkZV0gWVlZWSBoOm1tIEEnLFxuICAgICAgICB9LFxuICAgICAgICBjYWxlbmRhcjoge1xuICAgICAgICAgICAgc2FtZURheTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnW2hveSBhIGxhJyArICh0aGlzLmhvdXJzKCkgIT09IDEgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dERheTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnW21hw7FhbmEgYSBsYScgKyAodGhpcy5ob3VycygpICE9PSAxID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5leHRXZWVrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkZGRkIFthIGxhJyArICh0aGlzLmhvdXJzKCkgIT09IDEgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFzdERheTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnW2F5ZXIgYSBsYScgKyAodGhpcy5ob3VycygpICE9PSAxID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhc3RXZWVrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgJ1tlbF0gZGRkZCBbcGFzYWRvIGEgbGEnICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuaG91cnMoKSAhPT0gMSA/ICdzJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgICddIExUJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6ICdlbiAlcycsXG4gICAgICAgICAgICBwYXN0OiAnaGFjZSAlcycsXG4gICAgICAgICAgICBzOiAndW5vcyBzZWd1bmRvcycsXG4gICAgICAgICAgICBzczogJyVkIHNlZ3VuZG9zJyxcbiAgICAgICAgICAgIG06ICd1biBtaW51dG8nLFxuICAgICAgICAgICAgbW06ICclZCBtaW51dG9zJyxcbiAgICAgICAgICAgIGg6ICd1bmEgaG9yYScsXG4gICAgICAgICAgICBoaDogJyVkIGhvcmFzJyxcbiAgICAgICAgICAgIGQ6ICd1biBkw61hJyxcbiAgICAgICAgICAgIGRkOiAnJWQgZMOtYXMnLFxuICAgICAgICAgICAgdzogJ3VuYSBzZW1hbmEnLFxuICAgICAgICAgICAgd3c6ICclZCBzZW1hbmFzJyxcbiAgICAgICAgICAgIE06ICd1biBtZXMnLFxuICAgICAgICAgICAgTU06ICclZCBtZXNlcycsXG4gICAgICAgICAgICB5OiAndW4gYcOxbycsXG4gICAgICAgICAgICB5eTogJyVkIGHDsW9zJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9wrovLFxuICAgICAgICBvcmRpbmFsOiAnJWTCuicsXG4gICAgICAgIHdlZWs6IHtcbiAgICAgICAgICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgICAgICBkb3k6IDQsIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBlc0RvO1xuXG59KSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///53401\n");

/***/ })

}]);