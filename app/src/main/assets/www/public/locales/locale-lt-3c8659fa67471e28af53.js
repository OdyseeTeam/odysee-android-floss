/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-lt"],{

/***/ 2800:
/*!*******************************************!*\
  !*** ../node_modules/moment/locale/lt.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Lithuanian [lt]\n//! author : Mindaugas Mozūras : https://github.com/mmozuras\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var units = {\n    ss: 'sekundė_sekundžių_sekundes',\n    m: 'minutė_minutės_minutę',\n    mm: 'minutės_minučių_minutes',\n    h: 'valanda_valandos_valandą',\n    hh: 'valandos_valandų_valandas',\n    d: 'diena_dienos_dieną',\n    dd: 'dienos_dienų_dienas',\n    M: 'mėnuo_mėnesio_mėnesį',\n    MM: 'mėnesiai_mėnesių_mėnesius',\n    y: 'metai_metų_metus',\n    yy: 'metai_metų_metus'\n  };\n  function translateSeconds(number, withoutSuffix, key, isFuture) {\n    if (withoutSuffix) {\n      return 'kelios sekundės';\n    } else {\n      return isFuture ? 'kelių sekundžių' : 'kelias sekundes';\n    }\n  }\n  function translateSingular(number, withoutSuffix, key, isFuture) {\n    return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];\n  }\n  function special(number) {\n    return number % 10 === 0 || number > 10 && number < 20;\n  }\n  function forms(key) {\n    return units[key].split('_');\n  }\n  function translate(number, withoutSuffix, key, isFuture) {\n    var result = number + ' ';\n    if (number === 1) {\n      return result + translateSingular(number, withoutSuffix, key[0], isFuture);\n    } else if (withoutSuffix) {\n      return result + (special(number) ? forms(key)[1] : forms(key)[0]);\n    } else {\n      if (isFuture) {\n        return result + forms(key)[1];\n      } else {\n        return result + (special(number) ? forms(key)[1] : forms(key)[2]);\n      }\n    }\n  }\n  var lt = moment.defineLocale('lt', {\n    months: {\n      format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),\n      standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),\n      isFormat: /D[oD]?(\\[[^\\[\\]]*\\]|\\s)+MMMM?|MMMM?(\\[[^\\[\\]]*\\]|\\s)+D[oD]?/\n    },\n    monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),\n    weekdays: {\n      format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),\n      standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),\n      isFormat: /dddd HH:mm/\n    },\n    weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),\n    weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),\n    weekdaysParseExact: true,\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'YYYY-MM-DD',\n      LL: 'YYYY [m.] MMMM D [d.]',\n      LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',\n      LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',\n      l: 'YYYY-MM-DD',\n      ll: 'YYYY [m.] MMMM D [d.]',\n      lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',\n      llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'\n    },\n    calendar: {\n      sameDay: '[Šiandien] LT',\n      nextDay: '[Rytoj] LT',\n      nextWeek: 'dddd LT',\n      lastDay: '[Vakar] LT',\n      lastWeek: '[Praėjusį] dddd LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: 'po %s',\n      past: 'prieš %s',\n      s: translateSeconds,\n      ss: translate,\n      m: translateSingular,\n      mm: translate,\n      h: translateSingular,\n      hh: translate,\n      d: translateSingular,\n      dd: translate,\n      M: translateSingular,\n      MM: translate,\n      y: translateSingular,\n      yy: translate\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}-oji/,\n    ordinal: function ordinal(number) {\n      return number + '-oji';\n    },\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n    }\n  });\n\n  return lt;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgwMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29keXNlZS5jb20vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanM/YzE0YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogTGl0aHVhbmlhbiBbbHRdXG4vLyEgYXV0aG9yIDogTWluZGF1Z2FzIE1vesWrcmFzIDogaHR0cHM6Ly9naXRodWIuY29tL21tb3p1cmFzXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG5cbiAgICB2YXIgdW5pdHMgPSB7XG4gICAgICAgIHNzOiAnc2VrdW5kxJdfc2VrdW5kxb5pxbNfc2VrdW5kZXMnLFxuICAgICAgICBtOiAnbWludXTEl19taW51dMSXc19taW51dMSZJyxcbiAgICAgICAgbW06ICdtaW51dMSXc19taW51xI1pxbNfbWludXRlcycsXG4gICAgICAgIGg6ICd2YWxhbmRhX3ZhbGFuZG9zX3ZhbGFuZMSFJyxcbiAgICAgICAgaGg6ICd2YWxhbmRvc192YWxhbmTFs192YWxhbmRhcycsXG4gICAgICAgIGQ6ICdkaWVuYV9kaWVub3NfZGllbsSFJyxcbiAgICAgICAgZGQ6ICdkaWVub3NfZGllbsWzX2RpZW5hcycsXG4gICAgICAgIE06ICdtxJdudW9fbcSXbmVzaW9fbcSXbmVzxK8nLFxuICAgICAgICBNTTogJ23El25lc2lhaV9txJduZXNpxbNfbcSXbmVzaXVzJyxcbiAgICAgICAgeTogJ21ldGFpX21ldMWzX21ldHVzJyxcbiAgICAgICAgeXk6ICdtZXRhaV9tZXTFs19tZXR1cycsXG4gICAgfTtcbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVTZWNvbmRzKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5LCBpc0Z1dHVyZSkge1xuICAgICAgICBpZiAod2l0aG91dFN1ZmZpeCkge1xuICAgICAgICAgICAgcmV0dXJuICdrZWxpb3Mgc2VrdW5kxJdzJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdrZWxpxbMgc2VrdW5kxb5pxbMnIDogJ2tlbGlhcyBzZWt1bmRlcyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlU2luZ3VsYXIobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXksIGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiB3aXRob3V0U3VmZml4XG4gICAgICAgICAgICA/IGZvcm1zKGtleSlbMF1cbiAgICAgICAgICAgIDogaXNGdXR1cmVcbiAgICAgICAgICAgID8gZm9ybXMoa2V5KVsxXVxuICAgICAgICAgICAgOiBmb3JtcyhrZXkpWzJdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzcGVjaWFsKG51bWJlcikge1xuICAgICAgICByZXR1cm4gbnVtYmVyICUgMTAgPT09IDAgfHwgKG51bWJlciA+IDEwICYmIG51bWJlciA8IDIwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9ybXMoa2V5KSB7XG4gICAgICAgIHJldHVybiB1bml0c1trZXldLnNwbGl0KCdfJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZShudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGtleSwgaXNGdXR1cmUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bWJlciArICcgJztcbiAgICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICByZXN1bHQgKyB0cmFuc2xhdGVTaW5ndWxhcihudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGtleVswXSwgaXNGdXR1cmUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAoc3BlY2lhbChudW1iZXIpID8gZm9ybXMoa2V5KVsxXSA6IGZvcm1zKGtleSlbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzRnV0dXJlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArIGZvcm1zKGtleSlbMV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAoc3BlY2lhbChudW1iZXIpID8gZm9ybXMoa2V5KVsxXSA6IGZvcm1zKGtleSlbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBsdCA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2x0Jywge1xuICAgICAgICBtb250aHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3NhdXNpb192YXNhcmlvX2tvdm9fYmFsYW5kxb5pb19nZWd1xb7El3NfYmlyxb5lbGlvX2xpZXBvc19ydWdwasWrxI1pb19ydWdzxJdqb19zcGFsaW9fbGFwa3JpxI1pb19ncnVvZMW+aW8nLnNwbGl0KFxuICAgICAgICAgICAgICAgICdfJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHN0YW5kYWxvbmU6XG4gICAgICAgICAgICAgICAgJ3NhdXNpc192YXNhcmlzX2tvdmFzX2JhbGFuZGlzX2dlZ3XFvsSXX2JpcsW+ZWxpc19saWVwYV9ydWdwasWrdGlzX3J1Z3PEl2ppc19zcGFsaXNfbGFwa3JpdGlzX2dydW9kaXMnLnNwbGl0KFxuICAgICAgICAgICAgICAgICAgICAnXydcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgaXNGb3JtYXQ6IC9EW29EXT8oXFxbW15cXFtcXF1dKlxcXXxcXHMpK01NTU0/fE1NTU0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStEW29EXT8vLFxuICAgICAgICB9LFxuICAgICAgICBtb250aHNTaG9ydDogJ3NhdV92YXNfa292X2JhbF9nZWdfYmlyX2xpZV9yZ3BfcmdzX3NwYV9sYXBfZ3JkJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5czoge1xuICAgICAgICAgICAgZm9ybWF0OiAnc2VrbWFkaWVuxK9fcGlybWFkaWVuxK9fYW50cmFkaWVuxK9fdHJlxI1pYWRpZW7Er19rZXR2aXJ0YWRpZW7Er19wZW5rdGFkaWVuxK9fxaFlxaF0YWRpZW7Erycuc3BsaXQoXG4gICAgICAgICAgICAgICAgJ18nXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc3RhbmRhbG9uZTpcbiAgICAgICAgICAgICAgICAnc2VrbWFkaWVuaXNfcGlybWFkaWVuaXNfYW50cmFkaWVuaXNfdHJlxI1pYWRpZW5pc19rZXR2aXJ0YWRpZW5pc19wZW5rdGFkaWVuaXNfxaFlxaF0YWRpZW5pcycuc3BsaXQoXG4gICAgICAgICAgICAgICAgICAgICdfJ1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICBpc0Zvcm1hdDogL2RkZGQgSEg6bW0vLFxuICAgICAgICB9LFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiAnU2VrX1Bpcl9BbnRfVHJlX0tldF9QZW5fxaBlxaEnLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzTWluOiAnU19QX0FfVF9LX1BuX8WgJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gICAgICAgIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgICAgICAgICBMVDogJ0hIOm1tJyxcbiAgICAgICAgICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICAgICAgICAgIEw6ICdZWVlZLU1NLUREJyxcbiAgICAgICAgICAgIExMOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dJyxcbiAgICAgICAgICAgIExMTDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgSEg6bW0gW3ZhbC5dJyxcbiAgICAgICAgICAgIExMTEw6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIGRkZGQsIEhIOm1tIFt2YWwuXScsXG4gICAgICAgICAgICBsOiAnWVlZWS1NTS1ERCcsXG4gICAgICAgICAgICBsbDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXScsXG4gICAgICAgICAgICBsbGw6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIEhIOm1tIFt2YWwuXScsXG4gICAgICAgICAgICBsbGxsOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBkZGQsIEhIOm1tIFt2YWwuXScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW8WgaWFuZGllbl0gTFQnLFxuICAgICAgICAgICAgbmV4dERheTogJ1tSeXRval0gTFQnLFxuICAgICAgICAgICAgbmV4dFdlZWs6ICdkZGRkIExUJyxcbiAgICAgICAgICAgIGxhc3REYXk6ICdbVmFrYXJdIExUJyxcbiAgICAgICAgICAgIGxhc3RXZWVrOiAnW1ByYcSXanVzxK9dIGRkZGQgTFQnLFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6ICdwbyAlcycsXG4gICAgICAgICAgICBwYXN0OiAncHJpZcWhICVzJyxcbiAgICAgICAgICAgIHM6IHRyYW5zbGF0ZVNlY29uZHMsXG4gICAgICAgICAgICBzczogdHJhbnNsYXRlLFxuICAgICAgICAgICAgbTogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICAgICAgICBtbTogdHJhbnNsYXRlLFxuICAgICAgICAgICAgaDogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICAgICAgICBoaDogdHJhbnNsYXRlLFxuICAgICAgICAgICAgZDogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICAgICAgICBkZDogdHJhbnNsYXRlLFxuICAgICAgICAgICAgTTogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICAgICAgICBNTTogdHJhbnNsYXRlLFxuICAgICAgICAgICAgeTogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICAgICAgICB5eTogdHJhbnNsYXRlLFxuICAgICAgICB9LFxuICAgICAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0tb2ppLyxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICctb2ppJztcbiAgICAgICAgfSxcbiAgICAgICAgd2Vlazoge1xuICAgICAgICAgICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgICAgIGRveTogNCwgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGx0O1xuXG59KSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2800\n");

/***/ })

}]);