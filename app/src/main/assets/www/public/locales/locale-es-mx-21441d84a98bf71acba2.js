/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-es-mx"],{

/***/ 7972:
/*!**********************************************!*\
  !*** ../node_modules/moment/locale/es-mx.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Spanish (Mexico) [es-mx]\n//! author : JC Franco : https://github.com/jcfranco\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),\n    _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),\n    monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],\n    monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\\.?|feb\\.?|mar\\.?|abr\\.?|may\\.?|jun\\.?|jul\\.?|ago\\.?|sep\\.?|oct\\.?|nov\\.?|dic\\.?)/i;\n  var esMx = moment.defineLocale('es-mx', {\n    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),\n    monthsShort: function monthsShort(m, format) {\n      if (!m) {\n        return monthsShortDot;\n      } else if (/-MMM-/.test(format)) {\n        return _monthsShort[m.month()];\n      } else {\n        return monthsShortDot[m.month()];\n      }\n    },\n    monthsRegex: monthsRegex,\n    monthsShortRegex: monthsRegex,\n    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,\n    monthsShortStrictRegex: /^(ene\\.?|feb\\.?|mar\\.?|abr\\.?|may\\.?|jun\\.?|jul\\.?|ago\\.?|sep\\.?|oct\\.?|nov\\.?|dic\\.?)/i,\n    monthsParse: monthsParse,\n    longMonthsParse: monthsParse,\n    shortMonthsParse: monthsParse,\n    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),\n    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),\n    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),\n    weekdaysParseExact: true,\n    longDateFormat: {\n      LT: 'H:mm',\n      LTS: 'H:mm:ss',\n      L: 'DD/MM/YYYY',\n      LL: 'D [de] MMMM [de] YYYY',\n      LLL: 'D [de] MMMM [de] YYYY H:mm',\n      LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'\n    },\n    calendar: {\n      sameDay: function sameDay() {\n        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';\n      },\n      nextDay: function nextDay() {\n        return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';\n      },\n      nextWeek: function nextWeek() {\n        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';\n      },\n      lastDay: function lastDay() {\n        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';\n      },\n      lastWeek: function lastWeek() {\n        return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';\n      },\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: 'en %s',\n      past: 'hace %s',\n      s: 'unos segundos',\n      ss: '%d segundos',\n      m: 'un minuto',\n      mm: '%d minutos',\n      h: 'una hora',\n      hh: '%d horas',\n      d: 'un día',\n      dd: '%d días',\n      w: 'una semana',\n      ww: '%d semanas',\n      M: 'un mes',\n      MM: '%d meses',\n      y: 'un año',\n      yy: '%d años'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}º/,\n    ordinal: '%dº',\n    week: {\n      dow: 0,\n      // Sunday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n    },\n\n    invalidDate: 'Fecha inválida'\n  });\n  return esMx;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzk3Mi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTs7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQWNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZHlzZWUuY29tLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLW14LmpzPzU2ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFNwYW5pc2ggKE1leGljbykgW2VzLW14XVxuLy8hIGF1dGhvciA6IEpDIEZyYW5jbyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qY2ZyYW5jb1xuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuXG4gICAgdmFyIG1vbnRoc1Nob3J0RG90ID1cbiAgICAgICAgICAgICdlbmUuX2ZlYi5fbWFyLl9hYnIuX21heS5fanVuLl9qdWwuX2Fnby5fc2VwLl9vY3QuX25vdi5fZGljLicuc3BsaXQoXG4gICAgICAgICAgICAgICAgJ18nXG4gICAgICAgICAgICApLFxuICAgICAgICBtb250aHNTaG9ydCA9ICdlbmVfZmViX21hcl9hYnJfbWF5X2p1bl9qdWxfYWdvX3NlcF9vY3Rfbm92X2RpYycuc3BsaXQoJ18nKSxcbiAgICAgICAgbW9udGhzUGFyc2UgPSBbXG4gICAgICAgICAgICAvXmVuZS9pLFxuICAgICAgICAgICAgL15mZWIvaSxcbiAgICAgICAgICAgIC9ebWFyL2ksXG4gICAgICAgICAgICAvXmFici9pLFxuICAgICAgICAgICAgL15tYXkvaSxcbiAgICAgICAgICAgIC9eanVuL2ksXG4gICAgICAgICAgICAvXmp1bC9pLFxuICAgICAgICAgICAgL15hZ28vaSxcbiAgICAgICAgICAgIC9ec2VwL2ksXG4gICAgICAgICAgICAvXm9jdC9pLFxuICAgICAgICAgICAgL15ub3YvaSxcbiAgICAgICAgICAgIC9eZGljL2ksXG4gICAgICAgIF0sXG4gICAgICAgIG1vbnRoc1JlZ2V4ID1cbiAgICAgICAgICAgIC9eKGVuZXJvfGZlYnJlcm98bWFyem98YWJyaWx8bWF5b3xqdW5pb3xqdWxpb3xhZ29zdG98c2VwdGllbWJyZXxvY3R1YnJlfG5vdmllbWJyZXxkaWNpZW1icmV8ZW5lXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYXlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNlcFxcLj98b2N0XFwuP3xub3ZcXC4/fGRpY1xcLj8pL2k7XG5cbiAgICB2YXIgZXNNeCA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2VzLW14Jywge1xuICAgICAgICBtb250aHM6ICdlbmVyb19mZWJyZXJvX21hcnpvX2FicmlsX21heW9fanVuaW9fanVsaW9fYWdvc3RvX3NlcHRpZW1icmVfb2N0dWJyZV9ub3ZpZW1icmVfZGljaWVtYnJlJy5zcGxpdChcbiAgICAgICAgICAgICdfJ1xuICAgICAgICApLFxuICAgICAgICBtb250aHNTaG9ydDogZnVuY3Rpb24gKG0sIGZvcm1hdCkge1xuICAgICAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90O1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb250aHNTaG9ydFttLm1vbnRoKCldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbbS5tb250aCgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW9udGhzUmVnZXg6IG1vbnRoc1JlZ2V4LFxuICAgICAgICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcbiAgICAgICAgbW9udGhzU3RyaWN0UmVnZXg6XG4gICAgICAgICAgICAvXihlbmVyb3xmZWJyZXJvfG1hcnpvfGFicmlsfG1heW98anVuaW98anVsaW98YWdvc3RvfHNlcHRpZW1icmV8b2N0dWJyZXxub3ZpZW1icmV8ZGljaWVtYnJlKS9pLFxuICAgICAgICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OlxuICAgICAgICAgICAgL14oZW5lXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYXlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNlcFxcLj98b2N0XFwuP3xub3ZcXC4/fGRpY1xcLj8pL2ksXG4gICAgICAgIG1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgICAgICAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgICAgICAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gICAgICAgIHdlZWtkYXlzOiAnZG9taW5nb19sdW5lc19tYXJ0ZXNfbWnDqXJjb2xlc19qdWV2ZXNfdmllcm5lc19zw6FiYWRvJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiAnZG9tLl9sdW4uX21hci5fbWnDqS5fanVlLl92aWUuX3PDoWIuJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX21pX2p1X3ZpX3PDoScuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICAgICAgICBsb25nRGF0ZUZvcm1hdDoge1xuICAgICAgICAgICAgTFQ6ICdIOm1tJyxcbiAgICAgICAgICAgIExUUzogJ0g6bW06c3MnLFxuICAgICAgICAgICAgTDogJ0REL01NL1lZWVknLFxuICAgICAgICAgICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxuICAgICAgICAgICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nLFxuICAgICAgICAgICAgTExMTDogJ2RkZGQsIEQgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXI6IHtcbiAgICAgICAgICAgIHNhbWVEYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1tob3kgYSBsYScgKyAodGhpcy5ob3VycygpICE9PSAxID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5leHREYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1ttYcOxYW5hIGEgbGEnICsgKHRoaXMuaG91cnMoKSAhPT0gMSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXh0V2VlazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZGRkZCBbYSBsYScgKyAodGhpcy5ob3VycygpICE9PSAxID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhc3REYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1theWVyIGEgbGEnICsgKHRoaXMuaG91cnMoKSAhPT0gMSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYXN0V2VlazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICdbZWxdIGRkZGQgW3Bhc2FkbyBhIGxhJyArXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmhvdXJzKCkgIT09IDEgPyAncycgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAnXSBMVCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhbWVFbHNlOiAnTCcsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aXZlVGltZToge1xuICAgICAgICAgICAgZnV0dXJlOiAnZW4gJXMnLFxuICAgICAgICAgICAgcGFzdDogJ2hhY2UgJXMnLFxuICAgICAgICAgICAgczogJ3Vub3Mgc2VndW5kb3MnLFxuICAgICAgICAgICAgc3M6ICclZCBzZWd1bmRvcycsXG4gICAgICAgICAgICBtOiAndW4gbWludXRvJyxcbiAgICAgICAgICAgIG1tOiAnJWQgbWludXRvcycsXG4gICAgICAgICAgICBoOiAndW5hIGhvcmEnLFxuICAgICAgICAgICAgaGg6ICclZCBob3JhcycsXG4gICAgICAgICAgICBkOiAndW4gZMOtYScsXG4gICAgICAgICAgICBkZDogJyVkIGTDrWFzJyxcbiAgICAgICAgICAgIHc6ICd1bmEgc2VtYW5hJyxcbiAgICAgICAgICAgIHd3OiAnJWQgc2VtYW5hcycsXG4gICAgICAgICAgICBNOiAndW4gbWVzJyxcbiAgICAgICAgICAgIE1NOiAnJWQgbWVzZXMnLFxuICAgICAgICAgICAgeTogJ3VuIGHDsW8nLFxuICAgICAgICAgICAgeXk6ICclZCBhw7FvcycsXG4gICAgICAgIH0sXG4gICAgICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcK6LyxcbiAgICAgICAgb3JkaW5hbDogJyVkwronLFxuICAgICAgICB3ZWVrOiB7XG4gICAgICAgICAgICBkb3c6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICAgICAgZG95OiA0LCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgICAgIH0sXG4gICAgICAgIGludmFsaWREYXRlOiAnRmVjaGEgaW52w6FsaWRhJyxcbiAgICB9KTtcblxuICAgIHJldHVybiBlc014O1xuXG59KSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7972\n");

/***/ })

}]);