cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-background-mode.BackgroundMode",
      "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
      "pluginId": "cordova-plugin-background-mode",
      "clobbers": [
        "cordova.plugins.backgroundMode",
        "plugin.backgroundMode"
      ]
    },
    {
      "id": "cordova-plugin-music-controls2.MusicControls",
      "file": "plugins/cordova-plugin-music-controls2/www/MusicControls.js",
      "pluginId": "cordova-plugin-music-controls2",
      "clobbers": [
        "MusicControls"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-insomnia.Insomnia",
      "file": "plugins/cordova-plugin-insomnia/www/Insomnia.js",
      "pluginId": "cordova-plugin-insomnia",
      "clobbers": [
        "window.plugins.insomnia"
      ]
    },
    {
      "id": "cordova-plugin-universal-links.universalLinks",
      "file": "plugins/cordova-plugin-universal-links/www/universal_links.js",
      "pluginId": "cordova-plugin-universal-links",
      "clobbers": [
        "universalLinks"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-chromecast.ChromecastApi",
      "file": "plugins/cordova-plugin-chromecast/www/chrome.cast.js",
      "pluginId": "cordova-plugin-chromecast",
      "clobbers": [
        "chrome.cast"
      ]
    },
    {
      "id": "cordova-plugin-chromecast.EventEmitter",
      "file": "plugins/cordova-plugin-chromecast/www/EventEmitter.js",
      "pluginId": "cordova-plugin-chromecast"
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-background-mode": "0.7.3",
    "cordova-plugin-music-controls2": "3.0.6",
    "cordova-plugin-splashscreen": "6.0.1",
    "cordova-plugin-insomnia": "4.3.0",
    "cordova-plugin-universal-links": "0.3.0",
    "cordova-plugin-inappbrowser": "5.0.0",
    "cordova-plugin-chromecast": "2.0.1"
  };
});