var servers = {};
var IsAlive = require('is-alive');
var serverAlive = new IsAlive();

exports.addServer = function (serverConfig) {
    if (serverConfig.checkState) {
        servers[serverConfig.url].config = serverConfig;
        servers[serverConfig.url].check = start(serverConfig)();
    }
};
exports.removeServer = function (serverConfig) {
    stop(servers[serverConfig.url]);
};

var start = function (serverConfig) {
    setInterval(function () {
        servers[serverConfig.url].isAlive = serverAlive.isAlive(serverConfig.url);
        alert(servers[serverConfig.url]);
    }, serverConfig.interval);
};
var stop = function (serverConfig) {
    clearInterval(servers[serverConfig.url].isAlive);
};

var alert = function alert(serverConfig) {

    if (serverConfig.alert) {
        if (serverConfig.alert.mailAlert) {

        }
        if (serverConfig.alert.smsAlert) {

        }
        if (serverConfig.alert.notificationAlert) {

        }
    }
};