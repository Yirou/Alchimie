var apps = {};
var IsAlive = require('is-alive');
var appAlive = new IsAlive();

exports.addServer = function (appConfig) {
    if (appConfig.checkState) {
        apps[appConfig.url].config = appConfig;
        apps[appConfig.url].check = start(appConfig)();
    }
};
exports.removeServer = function (appConfig) {
    stop(apps[appConfig.url]);
};

var start = function (appConfig) {
    setInterval(function () {
        apps[appConfig.url].isAlive = appAlive.isAlive(appConfig.url);
        alert(apps[appConfig.url]);
    }, appConfig.interval);
};
var stop = function (appConfig) {
    clearInterval(apps[appConfig.url].isAlive);
};

var alert = function alert(appConfig) {

    if (appConfig.alert) {
        if (appConfig.alert.mailAlert) {

        }
        if (appConfig.alert.smsAlert) {

        }
        if (appConfig.alert.notificationAlert) {

        }
    }
};