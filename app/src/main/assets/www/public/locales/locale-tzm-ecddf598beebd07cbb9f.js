/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-tzm"],{

/***/ 24843:
/*!********************************************!*\
  !*** ../node_modules/moment/locale/tzm.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Central Atlas Tamazight [tzm]\n//! author : Abdel Said : https://github.com/abdelsaid\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var tzm = moment.defineLocale('tzm', {\n    months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),\n    monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),\n    weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),\n    weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),\n    weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'DD/MM/YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY HH:mm',\n      LLLL: 'dddd D MMMM YYYY HH:mm'\n    },\n    calendar: {\n      sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',\n      nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',\n      nextWeek: 'dddd [ⴴ] LT',\n      lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',\n      lastWeek: 'dddd [ⴴ] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',\n      past: 'ⵢⴰⵏ %s',\n      s: 'ⵉⵎⵉⴽ',\n      ss: '%d ⵉⵎⵉⴽ',\n      m: 'ⵎⵉⵏⵓⴺ',\n      mm: '%d ⵎⵉⵏⵓⴺ',\n      h: 'ⵙⴰⵄⴰ',\n      hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',\n      d: 'ⴰⵙⵙ',\n      dd: '%d oⵙⵙⴰⵏ',\n      M: 'ⴰⵢoⵓⵔ',\n      MM: '%d ⵉⵢⵢⵉⵔⵏ',\n      y: 'ⴰⵙⴳⴰⵙ',\n      yy: '%d ⵉⵙⴳⴰⵙⵏ'\n    },\n    week: {\n      dow: 6,\n      // Saturday is the first day of the week.\n      doy: 12 // The week that contains Jan 12th is the first week of the year.\n    }\n  });\n\n  return tzm;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQ4NDMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7O0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZHlzZWUuY29tLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qcz83ODdhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBDZW50cmFsIEF0bGFzIFRhbWF6aWdodCBbdHptXVxuLy8hIGF1dGhvciA6IEFiZGVsIFNhaWQgOiBodHRwczovL2dpdGh1Yi5jb20vYWJkZWxzYWlkXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG5cbiAgICB2YXIgdHptID0gbW9tZW50LmRlZmluZUxvY2FsZSgndHptJywge1xuICAgICAgICBtb250aHM6ICfitYnitY/itY/itLDitaLitZRf4rSx4rWV4rSw4rWi4rWVX+K1juK0sOK1leK1ml/itYnitLHitZTitYnitZRf4rWO4rSw4rWi4rWi4rWTX+K1ouK1k+K1j+K1ouK1k1/itaLitZPitY3itaLitZPitaNf4rWW4rWT4rWb4rWcX+K1m+K1k+K1nOK0sOK1j+K0seK1ieK1lF/itL3itZ/itZPitLHitZVf4rWP4rWT4rWh4rSw4rWP4rSx4rWJ4rWUX+K0t+K1k+K1iuK1j+K0seK1ieK1lCcuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgbW9udGhzU2hvcnQ6XG4gICAgICAgICAgICAn4rWJ4rWP4rWP4rSw4rWi4rWUX+K0seK1leK0sOK1ouK1lV/itY7itLDitZXitZpf4rWJ4rSx4rWU4rWJ4rWUX+K1juK0sOK1ouK1ouK1k1/itaLitZPitY/itaLitZNf4rWi4rWT4rWN4rWi4rWT4rWjX+K1luK1k+K1m+K1nF/itZvitZPitZzitLDitY/itLHitYnitZRf4rS94rWf4rWT4rSx4rWVX+K1j+K1k+K1oeK0sOK1j+K0seK1ieK1lF/itLfitZPitYritY/itLHitYnitZQnLnNwbGl0KFxuICAgICAgICAgICAgICAgICdfJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgd2Vla2RheXM6ICfitLDitZnitLDitY7itLDitZlf4rSw4rWi4rWP4rSw4rWZX+K0sOK1meK1ieK1j+K0sOK1mV/itLDitL3itZTitLDitZlf4rSw4rS94rWh4rSw4rWZX+K0sOK1meK1ieK1juK1oeK0sOK1mV/itLDitZnitYnitLnitaLitLDitZknLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6ICfitLDitZnitLDitY7itLDitZlf4rSw4rWi4rWP4rSw4rWZX+K0sOK1meK1ieK1j+K0sOK1mV/itLDitL3itZTitLDitZlf4rSw4rS94rWh4rSw4rWZX+K0sOK1meK1ieK1juK1oeK0sOK1mV/itLDitZnitYnitLnitaLitLDitZknLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzTWluOiAn4rSw4rWZ4rSw4rWO4rSw4rWZX+K0sOK1ouK1j+K0sOK1mV/itLDitZnitYnitY/itLDitZlf4rSw4rS94rWU4rSw4rWZX+K0sOK0veK1oeK0sOK1mV/itLDitZnitYnitY7itaHitLDitZlf4rSw4rWZ4rWJ4rS54rWi4rSw4rWZJy5zcGxpdCgnXycpLFxuICAgICAgICBsb25nRGF0ZUZvcm1hdDoge1xuICAgICAgICAgICAgTFQ6ICdISDptbScsXG4gICAgICAgICAgICBMVFM6ICdISDptbTpzcycsXG4gICAgICAgICAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgICAgICAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXI6IHtcbiAgICAgICAgICAgIHNhbWVEYXk6ICdb4rSw4rWZ4rS34rWFIOK0tF0gTFQnLFxuICAgICAgICAgICAgbmV4dERheTogJ1vitLDitZnitL3itLAg4rS0XSBMVCcsXG4gICAgICAgICAgICBuZXh0V2VlazogJ2RkZGQgW+K0tF0gTFQnLFxuICAgICAgICAgICAgbGFzdERheTogJ1vitLDitZritLDitY/itZwg4rS0XSBMVCcsXG4gICAgICAgICAgICBsYXN0V2VlazogJ2RkZGQgW+K0tF0gTFQnLFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6ICfitLfitLDitLfitYUg4rWZIOK1ouK0sOK1jyAlcycsXG4gICAgICAgICAgICBwYXN0OiAn4rWi4rSw4rWPICVzJyxcbiAgICAgICAgICAgIHM6ICfitYnitY7itYnitL0nLFxuICAgICAgICAgICAgc3M6ICclZCDitYnitY7itYnitL0nLFxuICAgICAgICAgICAgbTogJ+K1juK1ieK1j+K1k+K0uicsXG4gICAgICAgICAgICBtbTogJyVkIOK1juK1ieK1j+K1k+K0uicsXG4gICAgICAgICAgICBoOiAn4rWZ4rSw4rWE4rSwJyxcbiAgICAgICAgICAgIGhoOiAnJWQg4rWc4rSw4rWZ4rWZ4rSw4rWE4rWJ4rWPJyxcbiAgICAgICAgICAgIGQ6ICfitLDitZnitZknLFxuICAgICAgICAgICAgZGQ6ICclZCBv4rWZ4rWZ4rSw4rWPJyxcbiAgICAgICAgICAgIE06ICfitLDitaJv4rWT4rWUJyxcbiAgICAgICAgICAgIE1NOiAnJWQg4rWJ4rWi4rWi4rWJ4rWU4rWPJyxcbiAgICAgICAgICAgIHk6ICfitLDitZnitLPitLDitZknLFxuICAgICAgICAgICAgeXk6ICclZCDitYnitZnitLPitLDitZnitY8nLFxuICAgICAgICB9LFxuICAgICAgICB3ZWVrOiB7XG4gICAgICAgICAgICBkb3c6IDYsIC8vIFNhdHVyZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgICAgICBkb3k6IDEyLCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxMnRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR6bTtcblxufSkpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24843\n");

/***/ })

}]);