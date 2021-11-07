cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-vibration.notification",
      "file": "plugins/cordova-plugin-vibration/www/vibration.js",
      "pluginId": "cordova-plugin-vibration",
      "merges": [
        "navigator"
      ]
    },
    {
      "id": "cordova-plugin-magnetometer.main",
      "file": "plugins/cordova-plugin-magnetometer/www/magnetometer.js",
      "pluginId": "cordova-plugin-magnetometer",
      "clobbers": [
        "cordova.plugins.magnetometer"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.5",
    "cordova-plugin-vibration": "3.1.1",
    "cordova-plugin-magnetometer": "1.0.0"
  };
});