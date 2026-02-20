cordova.define("cordova-plugin-android-pip-lite.pip", function(require, exports, module) {
var exec = require('cordova/exec');

exports.isSupported = function (cb, errCb) {
	var callback = typeof cb === 'function' ? cb : function () {};
	var errorCallback = typeof errCb === 'function' ? errCb : function (e) { try { console.warn('PIP.isSupported error:', e); } catch(_) {} };
	exec(function (ok) { callback(!!ok); }, errorCallback, 'Pip', 'isSupported', []);
};

exports.enter = function (opts, success, error) {
	var o = opts || {};
	var w = typeof o.w === 'number' ? o.w : 16;
	var h = typeof o.h === 'number' ? o.h : 9;
	var onSuccess = typeof success === 'function' ? success : function () {};
	var onError = typeof error === 'function' ? error : function (e) { try { console.error('PIP.enter failed:', e); } catch(_) {} };
	exec(onSuccess, onError, 'Pip', 'enter', [{ w: w, h: h }]);
};

exports.setAutoOnBackground = function (enabled) {
	var flag = !!enabled;
	exec(null, null, 'Pip', 'setAutoOnBackground', [{ enabled: flag }]);
};

exports.setAspectRatio = function (width, height, success, error) {
	var w = typeof width === 'number' ? width : 16;
	var h = typeof height === 'number' ? height : 9;
	var onSuccess = typeof success === 'function' ? success : function () {};
	var onError = typeof error === 'function' ? error : function (e) { try { console.error('PIP.setAspectRatio failed:', e); } catch(_) {} };
	exec(onSuccess, onError, 'Pip', 'setAspectRatio', [{ width: w, height: h }]);
};



});
