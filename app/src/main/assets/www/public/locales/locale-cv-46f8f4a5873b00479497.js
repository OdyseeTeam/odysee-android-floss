/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-cv"],{

/***/ 27976:
/*!*******************************************!*\
  !*** ../node_modules/moment/locale/cv.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Chuvash [cv]\n//! author : Anatoly Mironov : https://github.com/mirontoli\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var cv = moment.defineLocale('cv', {\n    months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),\n    monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),\n    weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),\n    weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),\n    weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'DD-MM-YYYY',\n      LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',\n      LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',\n      LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'\n    },\n    calendar: {\n      sameDay: '[Паян] LT [сехетре]',\n      nextDay: '[Ыран] LT [сехетре]',\n      lastDay: '[Ӗнер] LT [сехетре]',\n      nextWeek: '[Ҫитес] dddd LT [сехетре]',\n      lastWeek: '[Иртнӗ] dddd LT [сехетре]',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: function future(output) {\n        var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';\n        return output + affix;\n      },\n      past: '%s каялла',\n      s: 'пӗр-ик ҫеккунт',\n      ss: '%d ҫеккунт',\n      m: 'пӗр минут',\n      mm: '%d минут',\n      h: 'пӗр сехет',\n      hh: '%d сехет',\n      d: 'пӗр кун',\n      dd: '%d кун',\n      M: 'пӗр уйӑх',\n      MM: '%d уйӑх',\n      y: 'пӗр ҫул',\n      yy: '%d ҫул'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}-мӗш/,\n    ordinal: '%d-мӗш',\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 7 // The week that contains Jan 7th is the first week of the year.\n    }\n  });\n\n  return cv;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc5NzYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7O0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2R5c2VlLmNvbS8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qcz83YmZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBDaHV2YXNoIFtjdl1cbi8vISBhdXRob3IgOiBBbmF0b2x5IE1pcm9ub3YgOiBodHRwczovL2dpdGh1Yi5jb20vbWlyb250b2xpXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG5cbiAgICB2YXIgY3YgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdjdicsIHtcbiAgICAgICAgbW9udGhzOiAn0LrTkdGA0LvQsNGHX9C90LDRgNOR0YFf0L/Rg9GIX9Cw0LrQsF/QvNCw0Llf0qvTl9GA0YLQvNC1X9GD0YLTkV/Sq9GD0YDQu9CwX9Cw0LLTkdC9X9GO0L/QsF/Rh9Oz0Lpf0YDQsNGI0YLQsNCyJy5zcGxpdChcbiAgICAgICAgICAgICdfJ1xuICAgICAgICApLFxuICAgICAgICBtb250aHNTaG9ydDogJ9C605HRgF/QvdCw0YBf0L/Rg9GIX9Cw0LrQsF/QvNCw0Llf0qvTl9GAX9GD0YLTkV/Sq9GD0YBf0LDQstC9X9GO0L/QsF/Rh9Oz0Lpf0YDQsNGIJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5czpcbiAgICAgICAgICAgICfQstGL0YDRgdCw0YDQvdC40LrRg9C9X9GC0YPQvdGC0LjQutGD0L1f0YvRgtC70LDRgNC40LrRg9C9X9GO0L3QutGD0L1f0LrTl9Kr0L3QtdGA0L3QuNC60YPQvV/RjdGA0L3QtdC60YPQvV/RiNOR0LzQsNGC0LrRg9C9Jy5zcGxpdChcbiAgICAgICAgICAgICAgICAnXydcbiAgICAgICAgICAgICksXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6ICfQstGL0YBf0YLRg9C9X9GL0YLQu1/RjtC9X9C605fSq1/RjdGA0L1f0YjTkdC8Jy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c01pbjogJ9Cy0YBf0YLQvV/Ri9GCX9GO0L1f0LrSq1/RjdGAX9GI0LwnLnNwbGl0KCdfJyksXG4gICAgICAgIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgICAgICAgICBMVDogJ0hIOm1tJyxcbiAgICAgICAgICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICAgICAgICAgIEw6ICdERC1NTS1ZWVlZJyxcbiAgICAgICAgICAgIExMOiAnWVlZWSBb0qvRg9C70YXQuF0gTU1NTSBb0YPQudOR0YXTl9C9XSBEWy3QvNOX0YjTl10nLFxuICAgICAgICAgICAgTExMOiAnWVlZWSBb0qvRg9C70YXQuF0gTU1NTSBb0YPQudOR0YXTl9C9XSBEWy3QvNOX0YjTl10sIEhIOm1tJyxcbiAgICAgICAgICAgIExMTEw6ICdkZGRkLCBZWVlZIFvSq9GD0LvRhdC4XSBNTU1NIFvRg9C505HRhdOX0L1dIERbLdC805fRiNOXXSwgSEg6bW0nLFxuICAgICAgICB9LFxuICAgICAgICBjYWxlbmRhcjoge1xuICAgICAgICAgICAgc2FtZURheTogJ1vQn9Cw0Y/QvV0gTFQgW9GB0LXRhdC10YLRgNC1XScsXG4gICAgICAgICAgICBuZXh0RGF5OiAnW9Cr0YDQsNC9XSBMVCBb0YHQtdGF0LXRgtGA0LVdJyxcbiAgICAgICAgICAgIGxhc3REYXk6ICdb05bQvdC10YBdIExUIFvRgdC10YXQtdGC0YDQtV0nLFxuICAgICAgICAgICAgbmV4dFdlZWs6ICdb0qrQuNGC0LXRgV0gZGRkZCBMVCBb0YHQtdGF0LXRgtGA0LVdJyxcbiAgICAgICAgICAgIGxhc3RXZWVrOiAnW9CY0YDRgtC905ddIGRkZGQgTFQgW9GB0LXRhdC10YLRgNC1XScsXG4gICAgICAgICAgICBzYW1lRWxzZTogJ0wnLFxuICAgICAgICB9LFxuICAgICAgICByZWxhdGl2ZVRpbWU6IHtcbiAgICAgICAgICAgIGZ1dHVyZTogZnVuY3Rpb24gKG91dHB1dCkge1xuICAgICAgICAgICAgICAgIHZhciBhZmZpeCA9IC/RgdC10YXQtdGCJC9pLmV4ZWMob3V0cHV0KVxuICAgICAgICAgICAgICAgICAgICA/ICfRgNC10L0nXG4gICAgICAgICAgICAgICAgICAgIDogL9Kr0YPQuyQvaS5leGVjKG91dHB1dClcbiAgICAgICAgICAgICAgICAgICAgPyAn0YLQsNC9J1xuICAgICAgICAgICAgICAgICAgICA6ICfRgNCw0L0nO1xuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQgKyBhZmZpeDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXN0OiAnJXMg0LrQsNGP0LvQu9CwJyxcbiAgICAgICAgICAgIHM6ICfQv9OX0YAt0LjQuiDSq9C10LrQutGD0L3RgicsXG4gICAgICAgICAgICBzczogJyVkINKr0LXQutC60YPQvdGCJyxcbiAgICAgICAgICAgIG06ICfQv9OX0YAg0LzQuNC90YPRgicsXG4gICAgICAgICAgICBtbTogJyVkINC80LjQvdGD0YInLFxuICAgICAgICAgICAgaDogJ9C/05fRgCDRgdC10YXQtdGCJyxcbiAgICAgICAgICAgIGhoOiAnJWQg0YHQtdGF0LXRgicsXG4gICAgICAgICAgICBkOiAn0L/Tl9GAINC60YPQvScsXG4gICAgICAgICAgICBkZDogJyVkINC60YPQvScsXG4gICAgICAgICAgICBNOiAn0L/Tl9GAINGD0LnTkdGFJyxcbiAgICAgICAgICAgIE1NOiAnJWQg0YPQudOR0YUnLFxuICAgICAgICAgICAgeTogJ9C/05fRgCDSq9GD0LsnLFxuICAgICAgICAgICAgeXk6ICclZCDSq9GD0LsnLFxuICAgICAgICB9LFxuICAgICAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0t0LzTl9GILyxcbiAgICAgICAgb3JkaW5hbDogJyVkLdC805fRiCcsXG4gICAgICAgIHdlZWs6IHtcbiAgICAgICAgICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgICAgICBkb3k6IDcsIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDd0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBjdjtcblxufSkpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27976\n");

/***/ })

}]);