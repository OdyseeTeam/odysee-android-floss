/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodysee_com"] = self["webpackChunkodysee_com"] || []).push([["locale-zh-mo"],{

/***/ 24438:
/*!**********************************************!*\
  !*** ../node_modules/moment/locale/zh-mo.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n//! moment.js locale configuration\n//! locale : Chinese (Macau) [zh-mo]\n//! author : Ben : https://github.com/ben-lin\n//! author : Chris Lam : https://github.com/hehachris\n//! author : Tan Yuanhong : https://github.com/le0tan\n\n;\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(/*! ../moment */ 22768)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 22768)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict';\n\n  //! moment.js locale configuration\n  var zhMo = moment.defineLocale('zh-mo', {\n    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),\n    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),\n    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),\n    weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),\n    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'DD/MM/YYYY',\n      LL: 'YYYY年M月D日',\n      LLL: 'YYYY年M月D日 HH:mm',\n      LLLL: 'YYYY年M月D日dddd HH:mm',\n      l: 'D/M/YYYY',\n      ll: 'YYYY年M月D日',\n      lll: 'YYYY年M月D日 HH:mm',\n      llll: 'YYYY年M月D日dddd HH:mm'\n    },\n    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,\n    meridiemHour: function meridiemHour(hour, meridiem) {\n      if (hour === 12) {\n        hour = 0;\n      }\n      if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {\n        return hour;\n      } else if (meridiem === '中午') {\n        return hour >= 11 ? hour : hour + 12;\n      } else if (meridiem === '下午' || meridiem === '晚上') {\n        return hour + 12;\n      }\n    },\n    meridiem: function meridiem(hour, minute, isLower) {\n      var hm = hour * 100 + minute;\n      if (hm < 600) {\n        return '凌晨';\n      } else if (hm < 900) {\n        return '早上';\n      } else if (hm < 1130) {\n        return '上午';\n      } else if (hm < 1230) {\n        return '中午';\n      } else if (hm < 1800) {\n        return '下午';\n      } else {\n        return '晚上';\n      }\n    },\n    calendar: {\n      sameDay: '[今天] LT',\n      nextDay: '[明天] LT',\n      nextWeek: '[下]dddd LT',\n      lastDay: '[昨天] LT',\n      lastWeek: '[上]dddd LT',\n      sameElse: 'L'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}(日|月|週)/,\n    ordinal: function ordinal(number, period) {\n      switch (period) {\n        case 'd':\n        case 'D':\n        case 'DDD':\n          return number + '日';\n        case 'M':\n          return number + '月';\n        case 'w':\n        case 'W':\n          return number + '週';\n        default:\n          return number;\n      }\n    },\n    relativeTime: {\n      future: '%s內',\n      past: '%s前',\n      s: '幾秒',\n      ss: '%d 秒',\n      m: '1 分鐘',\n      mm: '%d 分鐘',\n      h: '1 小時',\n      hh: '%d 小時',\n      d: '1 天',\n      dd: '%d 天',\n      M: '1 個月',\n      MM: '%d 個月',\n      y: '1 年',\n      yy: '%d 年'\n    }\n  });\n  return zhMo;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQ0MzguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBOztBQUVBO0FBRUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2R5c2VlLmNvbS8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qcz9mZTM5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBDaGluZXNlIChNYWNhdSkgW3poLW1vXVxuLy8hIGF1dGhvciA6IEJlbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZW4tbGluXG4vLyEgYXV0aG9yIDogQ2hyaXMgTGFtIDogaHR0cHM6Ly9naXRodWIuY29tL2hlaGFjaHJpc1xuLy8hIGF1dGhvciA6IFRhbiBZdWFuaG9uZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9sZTB0YW5cblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cblxuICAgIHZhciB6aE1vID0gbW9tZW50LmRlZmluZUxvY2FsZSgnemgtbW8nLCB7XG4gICAgICAgIG1vbnRoczogJ+S4gOaciF/kuozmnIhf5LiJ5pyIX+Wbm+aciF/kupTmnIhf5YWt5pyIX+S4g+aciF/lhavmnIhf5Lmd5pyIX+WNgeaciF/ljYHkuIDmnIhf5Y2B5LqM5pyIJy5zcGxpdChcbiAgICAgICAgICAgICdfJ1xuICAgICAgICApLFxuICAgICAgICBtb250aHNTaG9ydDogJzHmnIhfMuaciF8z5pyIXzTmnIhfNeaciF825pyIXzfmnIhfOOaciF855pyIXzEw5pyIXzEx5pyIXzEy5pyIJy5zcGxpdChcbiAgICAgICAgICAgICdfJ1xuICAgICAgICApLFxuICAgICAgICB3ZWVrZGF5czogJ+aYn+acn+aXpV/mmJ/mnJ/kuIBf5pif5pyf5LqMX+aYn+acn+S4iV/mmJ/mnJ/lm5tf5pif5pyf5LqUX+aYn+acn+WFrScuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNTaG9ydDogJ+mAseaXpV/pgLHkuIBf6YCx5LqMX+mAseS4iV/pgLHlm5tf6YCx5LqUX+mAseWFrScuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNNaW46ICfml6Vf5LiAX+S6jF/kuIlf5ZubX+S6lF/lha0nLnNwbGl0KCdfJyksXG4gICAgICAgIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgICAgICAgICBMVDogJ0hIOm1tJyxcbiAgICAgICAgICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICAgICAgICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgICAgIExMOiAnWVlZWeW5tE3mnIhE5pelJyxcbiAgICAgICAgICAgIExMTDogJ1lZWVnlubRN5pyIROaXpSBISDptbScsXG4gICAgICAgICAgICBMTExMOiAnWVlZWeW5tE3mnIhE5pelZGRkZCBISDptbScsXG4gICAgICAgICAgICBsOiAnRC9NL1lZWVknLFxuICAgICAgICAgICAgbGw6ICdZWVlZ5bm0TeaciETml6UnLFxuICAgICAgICAgICAgbGxsOiAnWVlZWeW5tE3mnIhE5pelIEhIOm1tJyxcbiAgICAgICAgICAgIGxsbGw6ICdZWVlZ5bm0TeaciETml6VkZGRkIEhIOm1tJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWVyaWRpZW1QYXJzZTogL+WHjOaZqHzml6nkuIp85LiK5Y2IfOS4reWNiHzkuIvljYh85pma5LiKLyxcbiAgICAgICAgbWVyaWRpZW1Ib3VyOiBmdW5jdGlvbiAoaG91ciwgbWVyaWRpZW0pIHtcbiAgICAgICAgICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1lcmlkaWVtID09PSAn5YeM5pmoJyB8fCBtZXJpZGllbSA9PT0gJ+aXqeS4iicgfHwgbWVyaWRpZW0gPT09ICfkuIrljYgnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn5Lit5Y2IJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBob3VyID49IDExID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfkuIvljYgnIHx8IG1lcmlkaWVtID09PSAn5pma5LiKJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBob3VyICsgMTI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1lcmlkaWVtOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgICAgICAgICB2YXIgaG0gPSBob3VyICogMTAwICsgbWludXRlO1xuICAgICAgICAgICAgaWYgKGhtIDwgNjAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICflh4zmmagnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChobSA8IDkwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAn5pep5LiKJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG0gPCAxMTMwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICfkuIrljYgnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChobSA8IDEyMzApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+S4reWNiCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhtIDwgMTgwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAn5LiL5Y2IJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICfmmZrkuIonO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYWxlbmRhcjoge1xuICAgICAgICAgICAgc2FtZURheTogJ1vku4rlpKldIExUJyxcbiAgICAgICAgICAgIG5leHREYXk6ICdb5piO5aSpXSBMVCcsXG4gICAgICAgICAgICBuZXh0V2VlazogJ1vkuItdZGRkZCBMVCcsXG4gICAgICAgICAgICBsYXN0RGF5OiAnW+aYqOWkqV0gTFQnLFxuICAgICAgICAgICAgbGFzdFdlZWs6ICdb5LiKXWRkZGQgTFQnLFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KOaXpXzmnIh86YCxKS8sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIsIHBlcmlvZCkge1xuICAgICAgICAgICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgICAgICAgICBjYXNlICdEREQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJ+aXpSc7XG4gICAgICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAn5pyIJztcbiAgICAgICAgICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICAgICAgICBjYXNlICdXJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICfpgLEnO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aXZlVGltZToge1xuICAgICAgICAgICAgZnV0dXJlOiAnJXPlhacnLFxuICAgICAgICAgICAgcGFzdDogJyVz5YmNJyxcbiAgICAgICAgICAgIHM6ICflub7np5InLFxuICAgICAgICAgICAgc3M6ICclZCDnp5InLFxuICAgICAgICAgICAgbTogJzEg5YiG6ZCYJyxcbiAgICAgICAgICAgIG1tOiAnJWQg5YiG6ZCYJyxcbiAgICAgICAgICAgIGg6ICcxIOWwj+aZgicsXG4gICAgICAgICAgICBoaDogJyVkIOWwj+aZgicsXG4gICAgICAgICAgICBkOiAnMSDlpKknLFxuICAgICAgICAgICAgZGQ6ICclZCDlpKknLFxuICAgICAgICAgICAgTTogJzEg5YCL5pyIJyxcbiAgICAgICAgICAgIE1NOiAnJWQg5YCL5pyIJyxcbiAgICAgICAgICAgIHk6ICcxIOW5tCcsXG4gICAgICAgICAgICB5eTogJyVkIOW5tCcsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gemhNbztcblxufSkpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24438\n");

/***/ })

}]);