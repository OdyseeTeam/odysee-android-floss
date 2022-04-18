(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
module.exports = require('./lib/extend');


},{"./lib/extend":3}],3:[function(require,module,exports){
/*!
 * node.extend
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * @fileoverview
 * Port of jQuery.extend that actually works on node.js
 */
var is = require('is');

function extend() {
  var target = arguments[0] || {};
  var i = 1;
  var length = arguments.length;
  var deep = false;
  var options, name, src, copy, copy_is_array, clone;

  // Handle a deep copy situation
  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {};
    // skip the boolean and the target
    i = 2;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== 'object' && !is.fn(target)) {
    target = {};
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    options = arguments[i]
    if (options != null) {
      if (typeof options === 'string') {
          options = options.split('');
      }
      // Extend the base object
      for (name in options) {
        src = target[name];
        copy = options[name];

        // Prevent never-ending loop
        if (target === copy) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if (deep && copy && (is.hash(copy) || (copy_is_array = is.array(copy)))) {
          if (copy_is_array) {
            copy_is_array = false;
            clone = src && is.array(src) ? src : [];
          } else {
            clone = src && is.hash(src) ? src : {};
          }

          // Never move original objects, clone them
          target[name] = extend(deep, clone, copy);

        // Don't bring in undefined values
        } else if (typeof copy !== 'undefined') {
          target[name] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
};

/**
 * @public
 */
extend.version = '1.1.3';

/**
 * Exports module.
 */
module.exports = extend;


},{"is":4}],4:[function(require,module,exports){
/* globals window, HTMLElement */
/**!
 * is
 * the definitive JavaScript type testing library
 *
 * @copyright 2013-2014 Enrico Marino / Jordan Harband
 * @license MIT
 */

var objProto = Object.prototype;
var owns = objProto.hasOwnProperty;
var toStr = objProto.toString;
var symbolValueOf;
if (typeof Symbol === 'function') {
  symbolValueOf = Symbol.prototype.valueOf;
}
var isActualNaN = function (value) {
  return value !== value;
};
var NON_HOST_TYPES = {
  'boolean': 1,
  number: 1,
  string: 1,
  undefined: 1
};

var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
var hexRegex = /^[A-Fa-f0-9]+$/;

/**
 * Expose `is`
 */

var is = module.exports = {};

/**
 * Test general.
 */

/**
 * is.type
 * Test if `value` is a type of `type`.
 *
 * @param {Mixed} value value to test
 * @param {String} type type
 * @return {Boolean} true if `value` is a type of `type`, false otherwise
 * @api public
 */

is.a = is.type = function (value, type) {
  return typeof value === type;
};

/**
 * is.defined
 * Test if `value` is defined.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is defined, false otherwise
 * @api public
 */

is.defined = function (value) {
  return typeof value !== 'undefined';
};

/**
 * is.empty
 * Test if `value` is empty.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is empty, false otherwise
 * @api public
 */

is.empty = function (value) {
  var type = toStr.call(value);
  var key;

  if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
    return value.length === 0;
  }

  if (type === '[object Object]') {
    for (key in value) {
      if (owns.call(value, key)) { return false; }
    }
    return true;
  }

  return !value;
};

/**
 * is.equal
 * Test if `value` is equal to `other`.
 *
 * @param {Mixed} value value to test
 * @param {Mixed} other value to compare with
 * @return {Boolean} true if `value` is equal to `other`, false otherwise
 */

is.equal = function equal(value, other) {
  if (value === other) {
    return true;
  }

  var type = toStr.call(value);
  var key;

  if (type !== toStr.call(other)) {
    return false;
  }

  if (type === '[object Object]') {
    for (key in value) {
      if (!is.equal(value[key], other[key]) || !(key in other)) {
        return false;
      }
    }
    for (key in other) {
      if (!is.equal(value[key], other[key]) || !(key in value)) {
        return false;
      }
    }
    return true;
  }

  if (type === '[object Array]') {
    key = value.length;
    if (key !== other.length) {
      return false;
    }
    while (--key) {
      if (!is.equal(value[key], other[key])) {
        return false;
      }
    }
    return true;
  }

  if (type === '[object Function]') {
    return value.prototype === other.prototype;
  }

  if (type === '[object Date]') {
    return value.getTime() === other.getTime();
  }

  return false;
};

/**
 * is.hosted
 * Test if `value` is hosted by `host`.
 *
 * @param {Mixed} value to test
 * @param {Mixed} host host to test with
 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
 * @api public
 */

is.hosted = function (value, host) {
  var type = typeof host[value];
  return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
};

/**
 * is.instance
 * Test if `value` is an instance of `constructor`.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an instance of `constructor`
 * @api public
 */

is.instance = is['instanceof'] = function (value, constructor) {
  return value instanceof constructor;
};

/**
 * is.nil / is.null
 * Test if `value` is null.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is null, false otherwise
 * @api public
 */

is.nil = is['null'] = function (value) {
  return value === null;
};

/**
 * is.undef / is.undefined
 * Test if `value` is undefined.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is undefined, false otherwise
 * @api public
 */

is.undef = is.undefined = function (value) {
  return typeof value === 'undefined';
};

/**
 * Test arguments.
 */

/**
 * is.args
 * Test if `value` is an arguments object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */

is.args = is.arguments = function (value) {
  var isStandardArguments = toStr.call(value) === '[object Arguments]';
  var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
  return isStandardArguments || isOldArguments;
};

/**
 * Test array.
 */

/**
 * is.array
 * Test if 'value' is an array.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an array, false otherwise
 * @api public
 */

is.array = Array.isArray || function (value) {
  return toStr.call(value) === '[object Array]';
};

/**
 * is.arguments.empty
 * Test if `value` is an empty arguments object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
 * @api public
 */
is.args.empty = function (value) {
  return is.args(value) && value.length === 0;
};

/**
 * is.array.empty
 * Test if `value` is an empty array.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an empty array, false otherwise
 * @api public
 */
is.array.empty = function (value) {
  return is.array(value) && value.length === 0;
};

/**
 * is.arraylike
 * Test if `value` is an arraylike object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */

is.arraylike = function (value) {
  return !!value && !is.bool(value)
    && owns.call(value, 'length')
    && isFinite(value.length)
    && is.number(value.length)
    && value.length >= 0;
};

/**
 * Test boolean.
 */

/**
 * is.bool
 * Test if `value` is a boolean.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a boolean, false otherwise
 * @api public
 */

is.bool = is['boolean'] = function (value) {
  return toStr.call(value) === '[object Boolean]';
};

/**
 * is.false
 * Test if `value` is false.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is false, false otherwise
 * @api public
 */

is['false'] = function (value) {
  return is.bool(value) && Boolean(Number(value)) === false;
};

/**
 * is.true
 * Test if `value` is true.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is true, false otherwise
 * @api public
 */

is['true'] = function (value) {
  return is.bool(value) && Boolean(Number(value)) === true;
};

/**
 * Test date.
 */

/**
 * is.date
 * Test if `value` is a date.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a date, false otherwise
 * @api public
 */

is.date = function (value) {
  return toStr.call(value) === '[object Date]';
};

/**
 * Test element.
 */

/**
 * is.element
 * Test if `value` is an html element.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an HTML Element, false otherwise
 * @api public
 */

is.element = function (value) {
  return value !== undefined
    && typeof HTMLElement !== 'undefined'
    && value instanceof HTMLElement
    && value.nodeType === 1;
};

/**
 * Test error.
 */

/**
 * is.error
 * Test if `value` is an error object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an error object, false otherwise
 * @api public
 */

is.error = function (value) {
  return toStr.call(value) === '[object Error]';
};

/**
 * Test function.
 */

/**
 * is.fn / is.function (deprecated)
 * Test if `value` is a function.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a function, false otherwise
 * @api public
 */

is.fn = is['function'] = function (value) {
  var isAlert = typeof window !== 'undefined' && value === window.alert;
  return isAlert || toStr.call(value) === '[object Function]';
};

/**
 * Test number.
 */

/**
 * is.number
 * Test if `value` is a number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a number, false otherwise
 * @api public
 */

is.number = function (value) {
  return toStr.call(value) === '[object Number]';
};

/**
 * is.infinite
 * Test if `value` is positive or negative infinity.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
 * @api public
 */
is.infinite = function (value) {
  return value === Infinity || value === -Infinity;
};

/**
 * is.decimal
 * Test if `value` is a decimal number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a decimal number, false otherwise
 * @api public
 */

is.decimal = function (value) {
  return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
};

/**
 * is.divisibleBy
 * Test if `value` is divisible by `n`.
 *
 * @param {Number} value value to test
 * @param {Number} n dividend
 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
 * @api public
 */

is.divisibleBy = function (value, n) {
  var isDividendInfinite = is.infinite(value);
  var isDivisorInfinite = is.infinite(n);
  var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
  return isDividendInfinite || isDivisorInfinite || (isNonZeroNumber && value % n === 0);
};

/**
 * is.integer
 * Test if `value` is an integer.
 *
 * @param value to test
 * @return {Boolean} true if `value` is an integer, false otherwise
 * @api public
 */

is.integer = is['int'] = function (value) {
  return is.number(value) && !isActualNaN(value) && value % 1 === 0;
};

/**
 * is.maximum
 * Test if `value` is greater than 'others' values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is greater than `others` values
 * @api public
 */

is.maximum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }
  var len = others.length;

  while (--len >= 0) {
    if (value < others[len]) {
      return false;
    }
  }

  return true;
};

/**
 * is.minimum
 * Test if `value` is less than `others` values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is less than `others` values
 * @api public
 */

is.minimum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }
  var len = others.length;

  while (--len >= 0) {
    if (value > others[len]) {
      return false;
    }
  }

  return true;
};

/**
 * is.nan
 * Test if `value` is not a number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is not a number, false otherwise
 * @api public
 */

is.nan = function (value) {
  return !is.number(value) || value !== value;
};

/**
 * is.even
 * Test if `value` is an even number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an even number, false otherwise
 * @api public
 */

is.even = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 === 0);
};

/**
 * is.odd
 * Test if `value` is an odd number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an odd number, false otherwise
 * @api public
 */

is.odd = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0);
};

/**
 * is.ge
 * Test if `value` is greater than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */

is.ge = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value >= other;
};

/**
 * is.gt
 * Test if `value` is greater than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */

is.gt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value > other;
};

/**
 * is.le
 * Test if `value` is less than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if 'value' is less than or equal to 'other'
 * @api public
 */

is.le = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value <= other;
};

/**
 * is.lt
 * Test if `value` is less than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if `value` is less than `other`
 * @api public
 */

is.lt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value < other;
};

/**
 * is.within
 * Test if `value` is within `start` and `finish`.
 *
 * @param {Number} value value to test
 * @param {Number} start lower bound
 * @param {Number} finish upper bound
 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
 * @api public
 */
is.within = function (value, start, finish) {
  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
    throw new TypeError('all arguments must be numbers');
  }
  var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
  return isAnyInfinite || (value >= start && value <= finish);
};

/**
 * Test object.
 */

/**
 * is.object
 * Test if `value` is an object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an object, false otherwise
 * @api public
 */

is.object = function (value) {
  return toStr.call(value) === '[object Object]';
};

/**
 * is.hash
 * Test if `value` is a hash - a plain object literal.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a hash, false otherwise
 * @api public
 */

is.hash = function (value) {
  return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
};

/**
 * Test regexp.
 */

/**
 * is.regexp
 * Test if `value` is a regular expression.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a regexp, false otherwise
 * @api public
 */

is.regexp = function (value) {
  return toStr.call(value) === '[object RegExp]';
};

/**
 * Test string.
 */

/**
 * is.string
 * Test if `value` is a string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a string, false otherwise
 * @api public
 */

is.string = function (value) {
  return toStr.call(value) === '[object String]';
};

/**
 * Test base64 string.
 */

/**
 * is.base64
 * Test if `value` is a valid base64 encoded string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
 * @api public
 */

is.base64 = function (value) {
  return is.string(value) && (!value.length || base64Regex.test(value));
};

/**
 * Test base64 string.
 */

/**
 * is.hex
 * Test if `value` is a valid hex encoded string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a hex encoded string, false otherwise
 * @api public
 */

is.hex = function (value) {
  return is.string(value) && (!value.length || hexRegex.test(value));
};

/**
 * is.symbol
 * Test if `value` is an ES6 Symbol
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a Symbol, false otherise
 * @api public
 */

is.symbol = function (value) {
  return typeof Symbol === 'function' && toStr.call(value) === '[object Symbol]' && typeof symbolValueOf.call(value) === 'symbol';
};

},{}],5:[function(require,module,exports){
(function (global){
/**
 * @file chromecast-button.js
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var Component = _videoJs2['default'].getComponent('Component');
var ControlBar = _videoJs2['default'].getComponent('ControlBar');
var Button = _videoJs2['default'].getComponent('Button');

/**
 * The base class for buttons that toggle chromecast video
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Button
 * @class ChromeCastButton
 */

var ChromeCastButton = (function (_Button) {
    _inherits(ChromeCastButton, _Button);

    function ChromeCastButton(player, options) {
        _classCallCheck(this, ChromeCastButton);

        _get(Object.getPrototypeOf(ChromeCastButton.prototype), 'constructor', this).call(this, player, options);
        this.hide();
        this.initializeApi();
        options.appId = player.options_.chromecast.appId;
        player.chromecast = this;
    }

    /**
     * Init chromecast sdk api
     *
     * @method initializeApi
     */

    _createClass(ChromeCastButton, [{
        key: 'initializeApi',
        value: function initializeApi() {
            var apiConfig = undefined;
            var appId = undefined;
            var sessionRequest = undefined;

            if (!_videoJs2['default'].browser.IS_CHROME || _videoJs2['default'].browser.IS_EDGE) {
                return;
            }
            if (!chrome.cast || !chrome.cast.isAvailable) {
                _videoJs2['default'].log('Cast APIs not available');
                if (this.tryingReconnect < 10) {
                    this.setTimeout(this.initializeApi, 1000);
                    ++this.tryingReconnect;
                }
                _videoJs2['default'].log('Cast APIs not available. Max reconnect attempt');
                return;
            }

            _videoJs2['default'].log('Cast APIs are available');
            appId = this.options_.appId || chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;
            sessionRequest = new chrome.cast.SessionRequest(appId);
            apiConfig = new chrome.cast.ApiConfig(sessionRequest, this.sessionJoinedListener.bind(this), this.receiverListener.bind(this));
            return chrome.cast.initialize(apiConfig, this.onInitSuccess.bind(this), this.castError.bind(this));
        }
    }, {
        key: 'castError',
        value: function castError(_castError) {

            var error = {
                code: _castError.code,
                message: _castError.description
            };

            switch (_castError.code) {
                case chrome.cast.ErrorCode.API_NOT_INITIALIZED:
                case chrome.cast.ErrorCode.EXTENSION_MISSING:
                case chrome.cast.ErrorCode.EXTENSION_NOT_COMPATIBLE:
                case chrome.cast.ErrorCode.INVALID_PARAMETER:
                case chrome.cast.ErrorCode.LOAD_MEDIA_FAILED:
                case chrome.cast.ErrorCode.RECEIVER_UNAVAILABLE:
                case chrome.cast.ErrorCode.SESSION_ERROR:
                case chrome.cast.ErrorCode.CHANNEL_ERROR:
                case chrome.cast.ErrorCode.TIMEOUT:
                    this.addClass('error');
                    break;
                case chrome.cast.ErrorCode.CANCEL:
                    break;
                default:
                    this.player_.error(error);
                    break;
            }
            return _videoJs2['default'].log('Cast Error: ' + JSON.stringify(_castError));
        }
    }, {
        key: 'onInitSuccess',
        value: function onInitSuccess() {
            return this.apiInitialized = true;
        }
    }, {
        key: 'sessionJoinedListener',
        value: function sessionJoinedListener(session) {
            if (session.media.length) {
                this.apiSession = session;
                this.onMediaDiscovered(session.media[0]);
            }
            return console.log('Session joined');
        }
    }, {
        key: 'receiverListener',
        value: function receiverListener(availability) {
            if (availability === 'available') {
                return this.show();
            }
        }
    }, {
        key: 'doLaunch',
        value: function doLaunch() {
            _videoJs2['default'].log('Cast video: ' + this.player_.cache_.src);
            if (this.apiInitialized) {
                return chrome.cast.requestSession(this.onSessionSuccess.bind(this), this.castError.bind(this));
            } else {
                return _videoJs2['default'].log('Session not initialized');
            }
        }
    }, {
        key: 'onSessionSuccess',
        value: function onSessionSuccess(session) {
            var image = undefined;
            var key = undefined;
            var loadRequest = undefined;
            var mediaInfo = undefined;
            var ref = undefined;
            var value = undefined;

            this.apiSession = session;
            var source = this.player_.cache_.src;
            var type = this.player_.currentType();

            _videoJs2['default'].log('Session initialized: ' + session.sessionId + ' source : ' + source + ' type : ' + type);

            mediaInfo = new chrome.cast.media.MediaInfo(source, type);
            mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata();
            if (this.options_.metadata) {
                ref = this.options_.metadata;
                for (key in ref) {
                    value = ref[key];
                    mediaInfo.metadata[key] = value;
                }
            }
            //Add poster image on player
            var poster = this.player().poster();
            if (poster) {
                image = new chrome.cast.Image(poster);
                mediaInfo.metadata.images = [image];
            }

            // Load/Add caption tracks
            var plTracks = this.player().textTracks();
            var remotePlTracks = this.player().remoteTextTrackEls();
            var tracks = [];
            var i = 0;
            var remotePlTrack = undefined;
            var plTrack = undefined;
            var trackId = 0;
            var track = undefined;
            if (plTracks) {
                for (i = 0; i < plTracks.length; i++) {
                    plTrack = plTracks.tracks_[i];
                    remotePlTrack = remotePlTracks && remotePlTracks.trackElements_ && remotePlTracks.trackElements_[i];
                    trackId++;
                    track = new chrome.cast.media.Track(trackId, chrome.cast.media.TrackType.TEXT);
                    track.trackContentId = remotePlTrack ? remotePlTrack.src : 'caption_' + plTrack.language;
                    track.subtype = chrome.cast.media.TextTrackType.CAPTIONS;
                    track.name = plTrack.label;
                    track.language = plTrack.language;
                    track.customData = null;
                    tracks.push(track);
                }
                mediaInfo.textTrackStyle = new chrome.cast.media.TextTrackStyle();
                mediaInfo.textTrackStyle.foregroundColor = '#FFFFFF';
                mediaInfo.textTrackStyle.backgroundColor = '#00000060';
                mediaInfo.textTrackStyle.edgeType = chrome.cast.media.TextTrackEdgeType.DROP_SHADOW;
                mediaInfo.textTrackStyle.windowType = chrome.cast.media.TextTrackWindowType.ROUNDED_CORNERS;
            }
            // Load/Add audio tracks

            try {
                plTracks = this.player().audioTracks();
                if (plTracks) {
                    for (i = 0; i < plTracks.length; i++) {
                        plTrack = plTracks.tracks_[i];
                        trackId++;
                        track = new chrome.cast.media.Track(trackId, chrome.cast.media.TrackType.AUDIO);
                        track.subtype = null;
                        track.name = plTrack.label;
                        track.language = plTrack.language;
                        track.customData = null;
                        tracks.push(track);
                    }
                }
            } catch (e) {
                _videoJs2['default'].log('get player audioTracks fail' + e);
            }

            if (tracks.length) {
                mediaInfo.tracks = tracks;
            }

            // Request load media source
            loadRequest = new chrome.cast.media.LoadRequest(mediaInfo);

            loadRequest.autoplay = true;
            loadRequest.currentTime = this.player_.currentTime();

            this.apiSession.loadMedia(loadRequest, this.onMediaDiscovered.bind(this), this.castError.bind(this));
            this.apiSession.addUpdateListener(this.onSessionUpdate.bind(this));
        }
    }, {
        key: 'onMediaDiscovered',
        value: function onMediaDiscovered(media) {
            this.player_.loadTech_('Chromecast', {
                type: 'cast',
                apiMedia: media,
                apiSession: this.apiSession
            });

            this.casting = true;
            this.inactivityTimeout = this.player_.options_.inactivityTimeout;
            this.player_.options_.inactivityTimeout = 0;
            this.player_.userActive(true);
            this.addClass('connected');
            this.removeClass('error');
        }
    }, {
        key: 'onSessionUpdate',
        value: function onSessionUpdate(isAlive) {
            if (!this.player_.apiMedia) {
                return;
            }
            if (!isAlive) {
                return this.onStopAppSuccess();
            }
        }
    }, {
        key: 'stopCasting',
        value: function stopCasting() {
            return this.apiSession.stop(this.onStopAppSuccess.bind(this), this.castError.bind(this));
        }
    }, {
        key: 'onStopAppSuccess',
        value: function onStopAppSuccess() {
            this.casting = false;
            var time = this.player_.currentTime();
            this.removeClass('connected');
            this.player_.src(this.player_.options_['sources']);
            if (!this.player_.paused()) {
                this.player_.one('seeked', function () {
                    return this.player_.play();
                });
            }
            this.player_.currentTime(time);
            this.player_.options_.inactivityTimeout = this.inactivityTimeout;
            return this.apiSession = null;
        }

        /**
         * Allow sub components to stack CSS class names
         *
         * @return {String} The constructed class name
         * @method buildCSSClass
         */
    }, {
        key: 'buildCSSClass',
        value: function buildCSSClass() {
            return 'vjs-chromecast-button ' + _get(Object.getPrototypeOf(ChromeCastButton.prototype), 'buildCSSClass', this).call(this);
        }

        /**
         * Handle click on mute
         * @method handleClick
         */
    }, {
        key: 'handleClick',
        value: function handleClick() {
            _get(Object.getPrototypeOf(ChromeCastButton.prototype), 'handleClick', this).call(this);
            if (this.casting) {
                return this.stopCasting();
            } else {
                return this.doLaunch();
            }
        }
    }]);

    return ChromeCastButton;
})(Button);

ChromeCastButton.prototype.tryingReconnect = 0;

ChromeCastButton.prototype.inactivityTimeout = 2000;

ChromeCastButton.prototype.controlText_ = 'Chromecast';

//Replace videojs CaptionButton child with this one
ControlBar.prototype.options_.children.splice(ControlBar.prototype.options_.children.length - 1, 0, 'chromeCastButton');

Component.registerComponent('ChromeCastButton', ChromeCastButton);
exports['default'] = ChromeCastButton;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],6:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var _videojsChromecast = require('./videojs-chromecast');

var _videojsChromecast2 = _interopRequireDefault(_videojsChromecast);

/**
 * The video.js playlist plugin. Invokes the playlist-maker to create a
 * playlist function on the specific player.
 *
 * @param {Array} list
 */
var plugin = function plugin(options) {
  var player = this;
  player.addChild('Chromecast', options);
};

_videoJs2['default'].plugin('chromecast', plugin);

exports['default'] = plugin;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./videojs-chromecast":8}],7:[function(require,module,exports){
(function (global){
/**
 * @file chromecast.js
 * Chromecast Media Controller - Wrapper for HTML5 Media API
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var Component = _videoJs2['default'].getComponent('Component');
var Tech = _videoJs2['default'].getComponent('Tech');

/**
 * Chromecast Media Controller - Wrapper for HTML5 Media API
 *
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready Ready callback function
 * @extends Tech
 * @class Chromecast
 */

var Chromecast = (function (_Tech) {
    _inherits(Chromecast, _Tech);

    function Chromecast(options, ready) {
        var _this = this;

        _classCallCheck(this, Chromecast);

        _get(Object.getPrototypeOf(Chromecast.prototype), 'constructor', this).call(this, options, ready);
        this.apiMedia = this.options_.source.apiMedia;
        this.apiSession = this.options_.source.apiSession;
        this.receiver = this.apiSession.receiver.friendlyName;

        var mediaStatusUpdateHandler = this.onMediaStatusUpdate.bind(this);
        var sessionUpdateHanlder = this.onSessionUpdate.bind(this);

        this.apiMedia.addUpdateListener(mediaStatusUpdateHandler);
        this.apiSession.addUpdateListener(sessionUpdateHanlder);

        this.on('dispose', function () {
            _this.apiMedia.removeUpdateListener(mediaStatusUpdateHandler);
            _this.apiSession.removeUpdateListener(sessionUpdateHanlder);
            _this.onMediaStatusUpdate();
            _this.onSessionUpdate(false);
        });

        var tracks = this.textTracks();
        if (tracks) {
            (function () {
                var changeHandler = _this.handleTextTracksChange.bind(_this);

                tracks.addEventListener('change', changeHandler);
                _this.on('dispose', function () {
                    tracks.removeEventListener('change', changeHandler);
                });

                _this.handleTextTracksChange();
            })();
        }

        try {
            tracks = this.audioTracks();
            if (tracks) {
                (function () {
                    var changeHandler = _this.handleAudioTracksChange.bind(_this);

                    tracks.addEventListener('change', changeHandler);
                    _this.on('dispose', function () {
                        tracks.removeEventListener('change', changeHandler);
                    });
                })();
            }
        } catch (e) {
            _videoJs2['default'].log('get player audioTracks fail' + e);
        }

        try {
            tracks = this.videoTracks();
            if (tracks) {
                (function () {
                    var changeHandler = _this.handleVideoTracksChange.bind(_this);

                    tracks.addEventListener('change', changeHandler);
                    _this.on('dispose', function () {
                        tracks.removeEventListener('change', changeHandler);
                    });
                })();
            }
        } catch (e) {
            _videoJs2['default'].log('get player videoTracks fail' + e);
        }

        this.update();
        this.triggerReady();
    }

    _createClass(Chromecast, [{
        key: 'createEl',
        value: function createEl() {
            var el = _videoJs2['default'].createEl('div', {
                id: this.options_.techId,
                className: 'vjs-tech vjs-tech-chromecast'
            });
            return el;
        }
    }, {
        key: 'update',
        value: function update() {
            this.el_.innerHTML = '<div class="casting-image" style="background-image: url(\'' + this.options_.poster + '\')"></div><div class="casting-overlay"><div class="casting-information"><div class="casting-icon"></div><div class="casting-description"><small>' + this.localize('CASTING TO') + '</small><br>' + this.receiver + '</div></div></div>';
        }
    }, {
        key: 'onSessionUpdate',
        value: function onSessionUpdate(isAlive) {
            if (!this.apiMedia) {
                return;
            }
            if (!isAlive) {
                return this.onStopAppSuccess();
            }
        }
    }, {
        key: 'onStopAppSuccess',
        value: function onStopAppSuccess() {
            this.stopTrackingCurrentTime();
            this.apiMedia = null;
        }
    }, {
        key: 'onMediaStatusUpdate',
        value: function onMediaStatusUpdate() {
            if (!this.apiMedia) {
                return;
            }
            switch (this.apiMedia.playerState) {
                case chrome.cast.media.PlayerState.BUFFERING:
                    this.trigger('waiting');
                    break;
                case chrome.cast.media.PlayerState.IDLE:
                    this.trigger('timeupdate');
                    break;
                case chrome.cast.media.PlayerState.PAUSED:
                    this.trigger('pause');
                    this.paused_ = true;
                    break;
                case chrome.cast.media.PlayerState.PLAYING:
                    this.trigger('playing');
                    this.trigger('play');
                    this.paused_ = false;
                    break;
            }
        }

        /**
         * Set video
         *
         * @param {Object=} src Source object
         * @method setSrc
         */
    }, {
        key: 'src',
        value: function src(_src) {
            //do nothing
        }
    }, {
        key: 'currentSrc',
        value: function currentSrc() {
            if (!this.apiMedia) {
                return;
            }
            return this.apiMedia.media.contentId;
        }
    }, {
        key: 'handleAudioTracksChange',
        value: function handleAudioTracksChange() {
            var trackInfo = [];
            var tTracks = this.textTracks();
            var tracks = this.audioTracks();

            if (!tracks) {
                return;
            }

            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                if (track['enabled']) {
                    //set id of cuurentTrack audio
                    trackInfo.push(i + 1 + tTracks.length);
                }
            }

            if (this.apiMedia && trackInfo.length) {
                this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
                return this.apiMedia.editTracksInfo(this.tracksInfoRequest, this.onTrackSuccess.bind(this), this.onTrackError.bind(this));
            }
        }
    }, {
        key: 'handleVideoTracksChange',
        value: function handleVideoTracksChange() {}
    }, {
        key: 'handleTextTracksChange',
        value: function handleTextTracksChange() {
            var trackInfo = [];
            var tracks = this.textTracks();

            if (!tracks) {
                return;
            }

            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                if (track['mode'] === 'showing') {
                    trackInfo.push(i + 1);
                }
            }

            if (this.apiMedia && trackInfo.length) {
                this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
                return this.apiMedia.editTracksInfo(this.tracksInfoRequest, this.onTrackSuccess.bind(this), this.onTrackError.bind(this));
            }
        }
    }, {
        key: 'onTrackSuccess',
        value: function onTrackSuccess() {
            return _videoJs2['default'].log('track added');
        }
    }, {
        key: 'onTrackError',
        value: function onTrackError(e) {
            return _videoJs2['default'].log('Cast track Error: ' + JSON.stringify(e));
        }
    }, {
        key: 'castError',
        value: function castError(e) {
            return _videoJs2['default'].log('Cast Error: ' + JSON.stringify(e));
        }
    }, {
        key: 'play',
        value: function play() {
            if (!this.apiMedia) {
                return;
            }
            if (this.paused_) {
                this.apiMedia.play(null, this.mediaCommandSuccessCallback.bind(this, 'Playing: ' + this.apiMedia.sessionId), this.castError.bind(this));
            }
            return this.paused_ = false;
        }
    }, {
        key: 'pause',
        value: function pause() {
            if (!this.apiMedia) {
                return;
            }
            if (!this.paused_) {
                this.apiMedia.pause(null, this.mediaCommandSuccessCallback.bind(this, 'Paused: ' + this.apiMedia.sessionId), this.castError.bind(this));
                return this.paused_ = true;
            }
        }
    }, {
        key: 'paused',
        value: function paused() {
            return this.paused_;
        }
    }, {
        key: 'currentTime',
        value: function currentTime() {
            if (!this.apiMedia) {
                return 0;
            }
            return this.apiMedia.getEstimatedTime();
        }
    }, {
        key: 'setCurrentTime',
        value: function setCurrentTime(position) {

            if (!this.apiMedia) {
                return 0;
            }
            var request = undefined;
            request = new chrome.cast.media.SeekRequest();
            request.currentTime = position;
            //if (this.player_.controlBar.progressControl.seekBar.videoWasPlaying) {
            //  request.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START;
            //}
            return this.apiMedia.seek(request, this.onSeekSuccess.bind(this, position), this.castError.bind(this));
        }
    }, {
        key: 'onSeekSuccess',
        value: function onSeekSuccess(position) {
            _videoJs2['default'].log('seek success' + position);
        }
    }, {
        key: 'volume',
        value: function volume() {
            return this.volume_;
        }
    }, {
        key: 'duration',
        value: function duration() {
            if (!this.apiMedia) {
                return 0;
            }
            return this.apiMedia.media.duration || Infinity;
        }
    }, {
        key: 'controls',
        value: function controls() {
            return false;
        }
    }, {
        key: 'setVolume',
        value: function setVolume(level) {
            var mute = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

            var request = undefined;
            var volume = undefined;
            if (!this.apiMedia) {
                return;
            }
            volume = new chrome.cast.Volume();
            volume.level = level;
            volume.muted = mute;
            this.volume_ = volume.level;
            this.muted_ = mute;
            request = new chrome.cast.media.VolumeRequest();
            request.volume = volume;
            this.apiMedia.setVolume(request, this.mediaCommandSuccessCallback.bind(this, 'Volume changed'), this.castError.bind(this));
            return this.trigger('volumechange');
        }
    }, {
        key: 'mediaCommandSuccessCallback',
        value: function mediaCommandSuccessCallback(information) {
            _videoJs2['default'].log(information);
        }
    }, {
        key: 'muted',
        value: function muted() {
            return this.muted_;
        }
    }, {
        key: 'setMuted',
        value: function setMuted(muted) {
            return this.setVolume(this.volume_, muted);
        }
    }, {
        key: 'supportsFullScreen',
        value: function supportsFullScreen() {
            return false;
        }
    }, {
        key: 'resetSrc_',
        value: function resetSrc_(callback) {
            callback();
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            this.resetSrc_(Function.prototype);
            _get(Object.getPrototypeOf(Chromecast.prototype), 'dispose', this).call(this, this);
        }
    }]);

    return Chromecast;
})(Tech);

Chromecast.prototype.paused_ = false;

Chromecast.prototype.options_ = {};

Chromecast.prototype.timerStep = 1000;

/* Chromecast Support Testing -------------------------------------------------------- */

Chromecast.isSupported = function () {
    return true;
};

// Add Source Handler pattern functions to this tech
Tech.withSourceHandlers(Chromecast);

/*
 * The default native source handler.
 * This simply passes the source to the video element. Nothing fancy.
 *
 * @param  {Object} source   The source object
 * @param  {Flash} tech  The instance of the Flash tech
 */
Chromecast.nativeSourceHandler = {};

/**
 * Check if Flash can play the given videotype
 * @param  {String} type    The mimetype to check
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Chromecast.nativeSourceHandler.canPlayType = function (source) {

    var dashTypeRE = /^application\/(?:dash\+xml|(x-|vnd\.apple\.)mpegurl)/i;
    var dashExtRE = /^video\/(mpd|mp4|webm|m3u8)/i;

    if (dashTypeRE.test(source)) {
        return 'probably';
    } else if (dashExtRE.test(source)) {
        return 'maybe';
    } else {
        return '';
    }
};

/*
 * Check Flash can handle the source natively
 *
 * @param  {Object} source  The source object
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Chromecast.nativeSourceHandler.canHandleSource = function (source) {

    // If a type was provided we should rely on that
    if (source.type) {
        return Chromecast.nativeSourceHandler.canPlayType(source.type);
    } else if (source.src) {
        return Chromecast.nativeSourceHandler.canPlayType(source.src);
    }

    return '';
};

/*
 * Pass the source to the flash object
 * Adaptive source handlers will have more complicated workflows before passing
 * video data to the video element
 *
 * @param  {Object} source    The source object
 * @param  {Flash} tech   The instance of the Flash tech
 */
Chromecast.nativeSourceHandler.handleSource = function (source, tech) {
    tech.src(source.src);
};

/*
 * Clean up the source handler when disposing the player or switching sources..
 * (no cleanup is needed when supporting the format natively)
 */
Chromecast.nativeSourceHandler.dispose = function () {};

// Register the native source handler
Chromecast.registerSourceHandler(Chromecast.nativeSourceHandler);

/*
 * Set the tech's volume control support status
 *
 * @type {Boolean}
 */
Chromecast.prototype['featuresVolumeControl'] = true;

/*
 * Set the tech's playbackRate support status
 *
 * @type {Boolean}
 */
Chromecast.prototype['featuresPlaybackRate'] = false;

/*
 * Set the tech's status on moving the video element.
 * In iOS, if you move a video element in the DOM, it breaks video playback.
 *
 * @type {Boolean}
 */
Chromecast.prototype['movingMediaElementInDOM'] = false;

/*
 * Set the the tech's fullscreen resize support status.
 * HTML video is able to automatically resize when going to fullscreen.
 * (No longer appears to be used. Can probably be removed.)
 */
Chromecast.prototype['featuresFullscreenResize'] = false;

/*
 * Set the tech's timeupdate event support status
 * (this disables the manual timeupdate events of the Tech)
 */
Chromecast.prototype['featuresTimeupdateEvents'] = false;

/*
 * Set the tech's progress event support status
 * (this disables the manual progress events of the Tech)
 */
Chromecast.prototype['featuresProgressEvents'] = false;

/*
 * Sets the tech's status on native text track support
 *
 * @type {Boolean}
 */
Chromecast.prototype['featuresNativeTextTracks'] = true;

/*
 * Sets the tech's status on native audio track support
 *
 * @type {Boolean}
 */
Chromecast.prototype['featuresNativeAudioTracks'] = true;

/*
 * Sets the tech's status on native video track support
 *
 * @type {Boolean}
 */
Chromecast.prototype['featuresNativeVideoTracks'] = false;

_videoJs2['default'].options.chromecast = {};

Component.registerComponent('Chromecast', Chromecast);
Tech.registerTech('Chromecast', Chromecast);
exports['default'] = Chromecast;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],8:[function(require,module,exports){
(function (global){
/**
 * ! videojs-chromecast - v1.0.0 - 2016-02-15
 * Copyright (c) 2015 benjipott
 * Licensed under the Apache-2.0 license.
 * @file videojs-chromecast.js
 **/
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var _componentControlBarChromecastButton = require('./component/control-bar/chromecast-button');

var _componentControlBarChromecastButton2 = _interopRequireDefault(_componentControlBarChromecastButton);

var _techChromecast = require('./tech/chromecast');

var _techChromecast2 = _interopRequireDefault(_techChromecast);

var Component = _videoJs2['default'].getComponent('Component');

/**
 * Initialize the plugin.
 * @param options (optional) {object} configuration for the plugin
 */

var Chromecast = (function (_Component) {
    _inherits(Chromecast, _Component);

    function Chromecast(player, options) {
        _classCallCheck(this, Chromecast);

        _get(Object.getPrototypeOf(Chromecast.prototype), 'constructor', this).call(this, player, options);
    }

    return Chromecast;
})(Component);

Chromecast.prototype.options_ = {};

// register the plugin
_videoJs2['default'].options.children.push('chromecast');

_videoJs2['default'].addLanguage('en', {
    'CASTING TO': 'WIEDERGABE AUF'
});

_videoJs2['default'].addLanguage('de', {
    'CASTING TO': 'WIEDERGABE AUF'
});

_videoJs2['default'].addLanguage('it', {
    'CASTING TO': 'PLAYBACK SU'
});

_videoJs2['default'].addLanguage('fr', {
    'CASTING TO': 'CAST EN COURS SUR'
});

var USER_AGENT = window.navigator.userAgent;

_videoJs2['default'].browser.IS_EDGE = /Edge/i.test(USER_AGENT);

Component.registerComponent('Chromecast', Chromecast);
exports['default'] = Chromecast;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./component/control-bar/chromecast-button":5,"./tech/chromecast":7}],9:[function(require,module,exports){
(function (global){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _globalWindow = require('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var _qunit = (typeof window !== "undefined" ? window['QUnit'] : typeof global !== "undefined" ? global['QUnit'] : null);

var _qunit2 = _interopRequireDefault(_qunit);

var _srcJsVideojsChromecast = require('../src/js/videojs-chromecast');

var _srcJsVideojsChromecast2 = _interopRequireDefault(_srcJsVideojsChromecast);

var _playerProxy = require('./player-proxy');

var _playerProxy2 = _interopRequireDefault(_playerProxy);

_qunit2['default'].module('chromecast', {

  beforeEach: function beforeEach() {
    this.oldTimeout = _globalWindow2['default'].setTimeout;
    _globalWindow2['default'].setTimeout = Function.prototype;
  },

  afterEach: function afterEach() {
    _globalWindow2['default'].setTimeout = this.oldTimeout;
  }
});

_qunit2['default'].test('chromecastMaker takes a player and returns a metrics', function (assert) {
  var chromecast = (0, _srcJsVideojsChromecast2['default'])((0, _playerProxy2['default'])(), {});

  assert.equal(typeof chromecast, 'object', 'metrics is an object');
});

_qunit2['default'].test('triger metrics', function (assert) {
  var xhr = this.sandbox.useFakeXMLHttpRequest();
  var requests = this.requests = [];

  var player = (0, _playerProxy2['default'])();

  var chromecast = (0, _srcJsVideojsChromecast2['default'])(player, {});

  player.currentSrc = function () {
    return 'http://vjs.zencdn.net/v/oceans.mp4';
  };

  player.trigger('loadstart');

  assert.equal(requests.length(), 0, 'new currentItem is 0');

  player.trigger('firstplay');

  assert.equal(requests.length(), 1, 'new currentItem is 1');
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../src/js/videojs-chromecast":8,"./player-proxy":10,"global/window":1}],10:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _nodeExtend = require('node.extend');

var _nodeExtend2 = _interopRequireDefault(_nodeExtend);

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var proxy = function proxy(props) {
  var player = (0, _nodeExtend2['default'])(true, {}, _videoJs2['default'].EventTarget.prototype, {
    play: Function.prototype,
    paused: Function.prototype,
    ended: Function.prototype,
    poster: Function.prototype,
    src: Function.prototype,
    addRemoteTextTrack: Function.prototype,
    removeRemoteTextTrack: Function.prototype,
    remoteTextTracks: Function.prototype,
    currentSrc: Function.prototype,
    chromecast: {}
  }, props);

  player.constructor = _videoJs2['default'].getComponent('Player');
  player.chromecast.player_ = player;

  return player;
};

exports['default'] = proxy;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"node.extend":2}],11:[function(require,module,exports){
(function (global){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _qunit = (typeof window !== "undefined" ? window['QUnit'] : typeof global !== "undefined" ? global['QUnit'] : null);

var _qunit2 = _interopRequireDefault(_qunit);

var _sinon = (typeof window !== "undefined" ? window['sinon'] : typeof global !== "undefined" ? global['sinon'] : null);

var _sinon2 = _interopRequireDefault(_sinon);

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var _srcJsPlugin = require('../src/js/plugin');

var _srcJsPlugin2 = _interopRequireDefault(_srcJsPlugin);

_qunit2['default'].test('the environment is sane', function (assert) {
  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
  assert.strictEqual(typeof _sinon2['default'], 'object', 'sinon exists');
  assert.strictEqual(typeof _videoJs2['default'], 'function', 'videojs exists');
  assert.strictEqual(typeof _srcJsPlugin2['default'], 'function', 'plugin is a function');
});

_qunit2['default'].test('registers itself with video.js', function (assert) {
  assert.expect(1);
  assert.strictEqual(_videoJs2['default'].getComponent('Player').prototype.playlist, _srcJsPlugin2['default'], 'videojs-chromecast plugin was registered');
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../src/js/plugin":6}]},{},[9,11]);
