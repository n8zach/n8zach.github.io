cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-magnetometer/www/magnetometer.js",
        "id": "cordova-plugin-magnetometer.main",
        "pluginId": "cordova-plugin-magnetometer",
        "clobbers": [
            "cordova.plugins.magnetometer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/src/browser/Vibration.js",
        "id": "cordova-plugin-vibration.Vibration",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-magnetometer": "1.0.0",
    "cordova-plugin-vibration": "3.1.1",
    "cordova-plugin-whitelist": "1.3.5"
}
// BOTTOM OF METADATA
});