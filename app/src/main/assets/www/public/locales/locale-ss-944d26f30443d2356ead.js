/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-ss"],{

/***/ 36596:
/*!*******************************************!*\
  !*** ../node_modules/moment/locale/ss.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : siSwati [ss]\n//! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var ss = moment.defineLocale('ss', {\n    months: \"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni\".split('_'),\n    monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),\n    weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),\n    weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),\n    weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),\n    weekdaysParseExact: true,\n    longDateFormat: {\n      LT: 'h:mm A',\n      LTS: 'h:mm:ss A',\n      L: 'DD/MM/YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY h:mm A',\n      LLLL: 'dddd, D MMMM YYYY h:mm A'\n    },\n    calendar: {\n      sameDay: '[Namuhla nga] LT',\n      nextDay: '[Kusasa nga] LT',\n      nextWeek: 'dddd [nga] LT',\n      lastDay: '[Itolo nga] LT',\n      lastWeek: 'dddd [leliphelile] [nga] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: 'nga %s',\n      past: 'wenteka nga %s',\n      s: 'emizuzwana lomcane',\n      ss: '%d mzuzwana',\n      m: 'umzuzu',\n      mm: '%d emizuzu',\n      h: 'lihora',\n      hh: '%d emahora',\n      d: 'lilanga',\n      dd: '%d emalanga',\n      M: 'inyanga',\n      MM: '%d tinyanga',\n      y: 'umnyaka',\n      yy: '%d iminyaka'\n    },\n    meridiemParse: /ekuseni|emini|entsambama|ebusuku/,\n    meridiem: function meridiem(hours, minutes, isLower) {\n      if (hours < 11) {\n        return 'ekuseni';\n      } else if (hours < 15) {\n        return 'emini';\n      } else if (hours < 19) {\n        return 'entsambama';\n      } else {\n        return 'ebusuku';\n      }\n    },\n    meridiemHour: function meridiemHour(hour, meridiem) {\n      if (hour === 12) {\n        hour = 0;\n      }\n      if (meridiem === 'ekuseni') {\n        return hour;\n      } else if (meridiem === 'emini') {\n        return hour >= 11 ? hour : hour + 12;\n      } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {\n        if (hour === 0) {\n          return 0;\n        }\n        return hour + 12;\n      }\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}/,\n    ordinal: '%d',\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n    }\n  });\n\n  return ss;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY1OTYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7O0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZHlzZWUuY29tLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzP2NmNzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IHNpU3dhdGkgW3NzXVxuLy8hIGF1dGhvciA6IE5pY29sYWkgRGF2aWVzPG1haWxAbmljb2xhaS5pbz4gOiBodHRwczovL2dpdGh1Yi5jb20vbmljb2xhaWRhdmllc1xuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuXG4gICAgdmFyIHNzID0gbW9tZW50LmRlZmluZUxvY2FsZSgnc3MnLCB7XG4gICAgICAgIG1vbnRoczogXCJCaGltYmlkdndhbmVfSW5kbG92YW5hX0luZGxvdidsZW5raHVsdV9NYWJhc2FfSW5raHdla2h3ZXRpX0luaGxhYmFfS2hvbHdhbmVfSW5nY2lfSW55b25pX0ltcGhhbGFfTHdldGlfSW5nb25nb25pXCIuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgbW9udGhzU2hvcnQ6ICdCaGlfSW5hX0ludV9NYWJfSW5rX0luaF9LaG9fSWdjX0lueV9JbXBfTHdlX0lnbycuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXM6XG4gICAgICAgICAgICAnTGlzb250Zm9fVW1zb21idWx1a29fTGVzaWJpbGlfTGVzaXRzYXRmdV9MZXNpbmVfTGVzaWhsYW51X1VtZ2NpYmVsbycuc3BsaXQoXG4gICAgICAgICAgICAgICAgJ18nXG4gICAgICAgICAgICApLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiAnTGlzX1VtYl9Mc2JfTGVzX0xzaV9Mc2hfVW1nJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c01pbjogJ0xpX1VzX0xiX0x0X0xzX0xoX1VnJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gICAgICAgIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgICAgICAgICBMVDogJ2g6bW0gQScsXG4gICAgICAgICAgICBMVFM6ICdoOm1tOnNzIEEnLFxuICAgICAgICAgICAgTDogJ0REL01NL1lZWVknLFxuICAgICAgICAgICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgICAgICBMTEw6ICdEIE1NTU0gWVlZWSBoOm1tIEEnLFxuICAgICAgICAgICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIGg6bW0gQScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW05hbXVobGEgbmdhXSBMVCcsXG4gICAgICAgICAgICBuZXh0RGF5OiAnW0t1c2FzYSBuZ2FdIExUJyxcbiAgICAgICAgICAgIG5leHRXZWVrOiAnZGRkZCBbbmdhXSBMVCcsXG4gICAgICAgICAgICBsYXN0RGF5OiAnW0l0b2xvIG5nYV0gTFQnLFxuICAgICAgICAgICAgbGFzdFdlZWs6ICdkZGRkIFtsZWxpcGhlbGlsZV0gW25nYV0gTFQnLFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6ICduZ2EgJXMnLFxuICAgICAgICAgICAgcGFzdDogJ3dlbnRla2EgbmdhICVzJyxcbiAgICAgICAgICAgIHM6ICdlbWl6dXp3YW5hIGxvbWNhbmUnLFxuICAgICAgICAgICAgc3M6ICclZCBtenV6d2FuYScsXG4gICAgICAgICAgICBtOiAndW16dXp1JyxcbiAgICAgICAgICAgIG1tOiAnJWQgZW1penV6dScsXG4gICAgICAgICAgICBoOiAnbGlob3JhJyxcbiAgICAgICAgICAgIGhoOiAnJWQgZW1haG9yYScsXG4gICAgICAgICAgICBkOiAnbGlsYW5nYScsXG4gICAgICAgICAgICBkZDogJyVkIGVtYWxhbmdhJyxcbiAgICAgICAgICAgIE06ICdpbnlhbmdhJyxcbiAgICAgICAgICAgIE1NOiAnJWQgdGlueWFuZ2EnLFxuICAgICAgICAgICAgeTogJ3Vtbnlha2EnLFxuICAgICAgICAgICAgeXk6ICclZCBpbWlueWFrYScsXG4gICAgICAgIH0sXG4gICAgICAgIG1lcmlkaWVtUGFyc2U6IC9la3VzZW5pfGVtaW5pfGVudHNhbWJhbWF8ZWJ1c3VrdS8sXG4gICAgICAgIG1lcmlkaWVtOiBmdW5jdGlvbiAoaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICAgICAgICAgIGlmIChob3VycyA8IDExKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdla3VzZW5pJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPCAxNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZW1pbmknO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChob3VycyA8IDE5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdlbnRzYW1iYW1hJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdlYnVzdWt1JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWVyaWRpZW1Ib3VyOiBmdW5jdGlvbiAoaG91ciwgbWVyaWRpZW0pIHtcbiAgICAgICAgICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1lcmlkaWVtID09PSAnZWt1c2VuaScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaG91cjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICdlbWluaScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaG91ciA+PSAxMSA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnZW50c2FtYmFtYScgfHwgbWVyaWRpZW0gPT09ICdlYnVzdWt1Jykge1xuICAgICAgICAgICAgICAgIGlmIChob3VyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaG91ciArIDEyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0vLFxuICAgICAgICBvcmRpbmFsOiAnJWQnLFxuICAgICAgICB3ZWVrOiB7XG4gICAgICAgICAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICAgICAgZG95OiA0LCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3M7XG5cbn0pKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36596\n");

/***/ })

}]);