/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-gl"],{

/***/ 69405:
/*!*******************************************!*\
  !*** ../node_modules/moment/locale/gl.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Galician [gl]\n//! author : Juan G. Hurtado : https://github.com/juanghurtado\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var gl = moment.defineLocale('gl', {\n    months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),\n    monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),\n    monthsParseExact: true,\n    weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),\n    weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),\n    weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),\n    weekdaysParseExact: true,\n    longDateFormat: {\n      LT: 'H:mm',\n      LTS: 'H:mm:ss',\n      L: 'DD/MM/YYYY',\n      LL: 'D [de] MMMM [de] YYYY',\n      LLL: 'D [de] MMMM [de] YYYY H:mm',\n      LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'\n    },\n    calendar: {\n      sameDay: function sameDay() {\n        return '[hoxe ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';\n      },\n      nextDay: function nextDay() {\n        return '[mañá ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';\n      },\n      nextWeek: function nextWeek() {\n        return 'dddd [' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';\n      },\n      lastDay: function lastDay() {\n        return '[onte ' + (this.hours() !== 1 ? 'á' : 'a') + '] LT';\n      },\n      lastWeek: function lastWeek() {\n        return '[o] dddd [pasado ' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';\n      },\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: function future(str) {\n        if (str.indexOf('un') === 0) {\n          return 'n' + str;\n        }\n        return 'en ' + str;\n      },\n      past: 'hai %s',\n      s: 'uns segundos',\n      ss: '%d segundos',\n      m: 'un minuto',\n      mm: '%d minutos',\n      h: 'unha hora',\n      hh: '%d horas',\n      d: 'un día',\n      dd: '%d días',\n      M: 'un mes',\n      MM: '%d meses',\n      y: 'un ano',\n      yy: '%d anos'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}º/,\n    ordinal: '%dº',\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n    }\n  });\n\n  return gl;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjk0MDUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7O0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29keXNlZS5jb20vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanM/ZWZkZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogR2FsaWNpYW4gW2dsXVxuLy8hIGF1dGhvciA6IEp1YW4gRy4gSHVydGFkbyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qdWFuZ2h1cnRhZG9cblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cblxuICAgIHZhciBnbCA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2dsJywge1xuICAgICAgICBtb250aHM6ICd4YW5laXJvX2ZlYnJlaXJvX21hcnpvX2FicmlsX21haW9feHXDsW9feHVsbG9fYWdvc3RvX3NldGVtYnJvX291dHVicm9fbm92ZW1icm9fZGVjZW1icm8nLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIG1vbnRoc1Nob3J0OlxuICAgICAgICAgICAgJ3hhbi5fZmViLl9tYXIuX2Fici5fbWFpLl94dcOxLl94dWwuX2Fnby5fc2V0Ll9vdXQuX25vdi5fZGVjLicuc3BsaXQoXG4gICAgICAgICAgICAgICAgJ18nXG4gICAgICAgICAgICApLFxuICAgICAgICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICAgICAgICB3ZWVrZGF5czogJ2RvbWluZ29fbHVuc19tYXJ0ZXNfbcOpcmNvcmVzX3hvdmVzX3ZlbnJlc19zw6FiYWRvJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiAnZG9tLl9sdW4uX21hci5fbcOpci5feG92Ll92ZW4uX3PDoWIuJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX23DqV94b192ZV9zw6EnLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgICAgIExUOiAnSDptbScsXG4gICAgICAgICAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICAgICAgICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgICAgIExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZJyxcbiAgICAgICAgICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJyxcbiAgICAgICAgICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdbaG94ZSAnICsgKHRoaXMuaG91cnMoKSAhPT0gMSA/ICfDoXMnIDogJ8OhJykgKyAnXSBMVCc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dERheTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnW21hw7HDoSAnICsgKHRoaXMuaG91cnMoKSAhPT0gMSA/ICfDoXMnIDogJ8OhJykgKyAnXSBMVCc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dFdlZWs6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2RkZGQgWycgKyAodGhpcy5ob3VycygpICE9PSAxID8gJ8OhcycgOiAnYScpICsgJ10gTFQnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhc3REYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1tvbnRlICcgKyAodGhpcy5ob3VycygpICE9PSAxID8gJ8OhJyA6ICdhJykgKyAnXSBMVCc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFzdFdlZWs6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAnW29dIGRkZGQgW3Bhc2FkbyAnICsgKHRoaXMuaG91cnMoKSAhPT0gMSA/ICfDoXMnIDogJ2EnKSArICddIExUJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoJ3VuJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICduJyArIHN0cjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICdlbiAnICsgc3RyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhc3Q6ICdoYWkgJXMnLFxuICAgICAgICAgICAgczogJ3VucyBzZWd1bmRvcycsXG4gICAgICAgICAgICBzczogJyVkIHNlZ3VuZG9zJyxcbiAgICAgICAgICAgIG06ICd1biBtaW51dG8nLFxuICAgICAgICAgICAgbW06ICclZCBtaW51dG9zJyxcbiAgICAgICAgICAgIGg6ICd1bmhhIGhvcmEnLFxuICAgICAgICAgICAgaGg6ICclZCBob3JhcycsXG4gICAgICAgICAgICBkOiAndW4gZMOtYScsXG4gICAgICAgICAgICBkZDogJyVkIGTDrWFzJyxcbiAgICAgICAgICAgIE06ICd1biBtZXMnLFxuICAgICAgICAgICAgTU06ICclZCBtZXNlcycsXG4gICAgICAgICAgICB5OiAndW4gYW5vJyxcbiAgICAgICAgICAgIHl5OiAnJWQgYW5vcycsXG4gICAgICAgIH0sXG4gICAgICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcK6LyxcbiAgICAgICAgb3JkaW5hbDogJyVkwronLFxuICAgICAgICB3ZWVrOiB7XG4gICAgICAgICAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICAgICAgZG95OiA0LCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZ2w7XG5cbn0pKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///69405\n");

/***/ })

}]);