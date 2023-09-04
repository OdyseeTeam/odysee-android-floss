/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-hu"],{

/***/ 68450:
/*!*******************************************!*\
  !*** ../node_modules/moment/locale/hu.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Hungarian [hu]\n//! author : Adam Brunner : https://github.com/adambrunner\n//! author : Peter Viszt  : https://github.com/passatgt\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');\n  function translate(number, withoutSuffix, key, isFuture) {\n    var num = number;\n    switch (key) {\n      case 's':\n        return isFuture || withoutSuffix ? 'néhány másodperc' : 'néhány másodperce';\n      case 'ss':\n        return num + (isFuture || withoutSuffix) ? ' másodperc' : ' másodperce';\n      case 'm':\n        return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');\n      case 'mm':\n        return num + (isFuture || withoutSuffix ? ' perc' : ' perce');\n      case 'h':\n        return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');\n      case 'hh':\n        return num + (isFuture || withoutSuffix ? ' óra' : ' órája');\n      case 'd':\n        return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');\n      case 'dd':\n        return num + (isFuture || withoutSuffix ? ' nap' : ' napja');\n      case 'M':\n        return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');\n      case 'MM':\n        return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');\n      case 'y':\n        return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');\n      case 'yy':\n        return num + (isFuture || withoutSuffix ? ' év' : ' éve');\n    }\n    return '';\n  }\n  function week(isFuture) {\n    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';\n  }\n  var hu = moment.defineLocale('hu', {\n    months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),\n    monthsShort: 'jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.'.split('_'),\n    monthsParseExact: true,\n    weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),\n    weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),\n    weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),\n    longDateFormat: {\n      LT: 'H:mm',\n      LTS: 'H:mm:ss',\n      L: 'YYYY.MM.DD.',\n      LL: 'YYYY. MMMM D.',\n      LLL: 'YYYY. MMMM D. H:mm',\n      LLLL: 'YYYY. MMMM D., dddd H:mm'\n    },\n    meridiemParse: /de|du/i,\n    isPM: function isPM(input) {\n      return input.charAt(1).toLowerCase() === 'u';\n    },\n    meridiem: function meridiem(hours, minutes, isLower) {\n      if (hours < 12) {\n        return isLower === true ? 'de' : 'DE';\n      } else {\n        return isLower === true ? 'du' : 'DU';\n      }\n    },\n    calendar: {\n      sameDay: '[ma] LT[-kor]',\n      nextDay: '[holnap] LT[-kor]',\n      nextWeek: function nextWeek() {\n        return week.call(this, true);\n      },\n      lastDay: '[tegnap] LT[-kor]',\n      lastWeek: function lastWeek() {\n        return week.call(this, false);\n      },\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: '%s múlva',\n      past: '%s',\n      s: translate,\n      ss: translate,\n      m: translate,\n      mm: translate,\n      h: translate,\n      hh: translate,\n      d: translate,\n      dd: translate,\n      M: translate,\n      MM: translate,\n      y: translate,\n      yy: translate\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}\\./,\n    ordinal: '%d.',\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n    }\n  });\n\n  return hu;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjg0NTAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2R5c2VlLmNvbS8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qcz8xNDhmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBIdW5nYXJpYW4gW2h1XVxuLy8hIGF1dGhvciA6IEFkYW0gQnJ1bm5lciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hZGFtYnJ1bm5lclxuLy8hIGF1dGhvciA6IFBldGVyIFZpc3p0ICA6IGh0dHBzOi8vZ2l0aHViLmNvbS9wYXNzYXRndFxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuXG4gICAgdmFyIHdlZWtFbmRpbmdzID1cbiAgICAgICAgJ3Zhc8Ohcm5hcCBow6l0ZsWRbiBrZWRkZW4gc3plcmTDoW4gY3PDvHTDtnJ0w7Zrw7ZuIHDDqW50ZWtlbiBzem9tYmF0b24nLnNwbGl0KCcgJyk7XG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5LCBpc0Z1dHVyZSkge1xuICAgICAgICB2YXIgbnVtID0gbnVtYmVyO1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXhcbiAgICAgICAgICAgICAgICAgICAgPyAnbsOpaMOhbnkgbcOhc29kcGVyYydcbiAgICAgICAgICAgICAgICAgICAgOiAnbsOpaMOhbnkgbcOhc29kcGVyY2UnO1xuICAgICAgICAgICAgY2FzZSAnc3MnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgPyAnIG3DoXNvZHBlcmMnXG4gICAgICAgICAgICAgICAgICAgIDogJyBtw6Fzb2RwZXJjZSc7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgcGVyYycgOiAnIHBlcmNlJyk7XG4gICAgICAgICAgICBjYXNlICdtbSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBwZXJjJyA6ICcgcGVyY2UnKTtcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDs3JhJyA6ICcgw7Nyw6FqYScpO1xuICAgICAgICAgICAgY2FzZSAnaGgnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw7NyYScgOiAnIMOzcsOhamEnKTtcbiAgICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBuYXAnIDogJyBuYXBqYScpO1xuICAgICAgICAgICAgY2FzZSAnZGQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgbmFwJyA6ICcgbmFwamEnKTtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBow7NuYXAnIDogJyBow7NuYXBqYScpO1xuICAgICAgICAgICAgY2FzZSAnTU0nOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgaMOzbmFwJyA6ICcgaMOzbmFwamEnKTtcbiAgICAgICAgICAgIGNhc2UgJ3knOlxuICAgICAgICAgICAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDqXYnIDogJyDDqXZlJyk7XG4gICAgICAgICAgICBjYXNlICd5eSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDqXYnIDogJyDDqXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3ZWVrKGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoaXNGdXR1cmUgPyAnJyA6ICdbbcO6bHRdICcpICtcbiAgICAgICAgICAgICdbJyArXG4gICAgICAgICAgICB3ZWVrRW5kaW5nc1t0aGlzLmRheSgpXSArXG4gICAgICAgICAgICAnXSBMVFsta29yXSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgaHUgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdodScsIHtcbiAgICAgICAgbW9udGhzOiAnamFudcOhcl9mZWJydcOhcl9tw6FyY2l1c1/DoXByaWxpc19tw6FqdXNfasO6bml1c19qw7psaXVzX2F1Z3VzenR1c19zemVwdGVtYmVyX29rdMOzYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdChcbiAgICAgICAgICAgICdfJ1xuICAgICAgICApLFxuICAgICAgICBtb250aHNTaG9ydDpcbiAgICAgICAgICAgICdqYW4uX2ZlYi5fbcOhcmMuX8OhcHIuX23DoWouX2rDum4uX2rDumwuX2F1Zy5fc3plcHQuX29rdC5fbm92Ll9kZWMuJy5zcGxpdChcbiAgICAgICAgICAgICAgICAnXydcbiAgICAgICAgICAgICksXG4gICAgICAgIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gICAgICAgIHdlZWtkYXlzOiAndmFzw6FybmFwX2jDqXRmxZFfa2VkZF9zemVyZGFfY3PDvHTDtnJ0w7ZrX3DDqW50ZWtfc3pvbWJhdCcuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNTaG9ydDogJ3Zhc19ow6l0X2tlZGRfc3plX2Nzw7x0X3DDqW5fc3pvJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c01pbjogJ3ZfaF9rX3N6ZV9jc19wX3N6bycuc3BsaXQoJ18nKSxcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgICAgIExUOiAnSDptbScsXG4gICAgICAgICAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICAgICAgICAgIEw6ICdZWVlZLk1NLkRELicsXG4gICAgICAgICAgICBMTDogJ1lZWVkuIE1NTU0gRC4nLFxuICAgICAgICAgICAgTExMOiAnWVlZWS4gTU1NTSBELiBIOm1tJyxcbiAgICAgICAgICAgIExMTEw6ICdZWVlZLiBNTU1NIEQuLCBkZGRkIEg6bW0nLFxuICAgICAgICB9LFxuICAgICAgICBtZXJpZGllbVBhcnNlOiAvZGV8ZHUvaSxcbiAgICAgICAgaXNQTTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuY2hhckF0KDEpLnRvTG93ZXJDYXNlKCkgPT09ICd1JztcbiAgICAgICAgfSxcbiAgICAgICAgbWVyaWRpZW06IGZ1bmN0aW9uIChob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgICAgICAgICAgaWYgKGhvdXJzIDwgMTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNMb3dlciA9PT0gdHJ1ZSA/ICdkZScgOiAnREUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNMb3dlciA9PT0gdHJ1ZSA/ICdkdScgOiAnRFUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYWxlbmRhcjoge1xuICAgICAgICAgICAgc2FtZURheTogJ1ttYV0gTFRbLWtvcl0nLFxuICAgICAgICAgICAgbmV4dERheTogJ1tob2xuYXBdIExUWy1rb3JdJyxcbiAgICAgICAgICAgIG5leHRXZWVrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlZWsuY2FsbCh0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYXN0RGF5OiAnW3RlZ25hcF0gTFRbLWtvcl0nLFxuICAgICAgICAgICAgbGFzdFdlZWs6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2Vlay5jYWxsKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYW1lRWxzZTogJ0wnLFxuICAgICAgICB9LFxuICAgICAgICByZWxhdGl2ZVRpbWU6IHtcbiAgICAgICAgICAgIGZ1dHVyZTogJyVzIG3Dumx2YScsXG4gICAgICAgICAgICBwYXN0OiAnJXMnLFxuICAgICAgICAgICAgczogdHJhbnNsYXRlLFxuICAgICAgICAgICAgc3M6IHRyYW5zbGF0ZSxcbiAgICAgICAgICAgIG06IHRyYW5zbGF0ZSxcbiAgICAgICAgICAgIG1tOiB0cmFuc2xhdGUsXG4gICAgICAgICAgICBoOiB0cmFuc2xhdGUsXG4gICAgICAgICAgICBoaDogdHJhbnNsYXRlLFxuICAgICAgICAgICAgZDogdHJhbnNsYXRlLFxuICAgICAgICAgICAgZGQ6IHRyYW5zbGF0ZSxcbiAgICAgICAgICAgIE06IHRyYW5zbGF0ZSxcbiAgICAgICAgICAgIE1NOiB0cmFuc2xhdGUsXG4gICAgICAgICAgICB5OiB0cmFuc2xhdGUsXG4gICAgICAgICAgICB5eTogdHJhbnNsYXRlLFxuICAgICAgICB9LFxuICAgICAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICAgICAgICBvcmRpbmFsOiAnJWQuJyxcbiAgICAgICAgd2Vlazoge1xuICAgICAgICAgICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgICAgIGRveTogNCwgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGh1O1xuXG59KSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///68450\n");

/***/ })

}]);