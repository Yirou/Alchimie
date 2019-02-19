var apps = {};
const isReachable = require('is-reachable');
var ping = require('ping');
var models = require('../models/');

exports.addApp = function (appConfig) {
    stop(appConfig);
    if (appConfig.checkstatus) {
        apps[appConfig.id] = {};
        apps[appConfig.id].config = appConfig;
        apps[appConfig.id].check = start(appConfig);
    }
};
exports.removeApp = function (appConfig) {
    stop(apps[appConfig.id]);
};

var start = function (appConfig) {
    apps[appConfig.id].checkID = setInterval(function () {
        ping.promise.probe(appConfig.url)
                .then(function (res) {
                    console.log(res);
                    apps[appConfig.id].isAlive = res.alive;
                    alert(apps[appConfig.id]);
                });
    }, appConfig.interval);
};
var stop = function (appConfig) {
    if (apps[appConfig.id])
        clearInterval(apps[appConfig.id].checkID);
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
    addDBLog(appConfig);
};

var addDBLog = function (appConfig) {
    /*add log in db each hour*/
    models.E_application_status_history.findOne({
        where: {fk_id_application: appConfig.config.application.id},
        order: [['id', 'DESC']]
    }).then(function (e_application_status_history) {
        if (e_application_status_history) {
            var now = moment();
            if (now.diff(moment(new Date(e_application_status_history.createdAt)), 'minutes') > 30) {
                models.E_application_status_history.create({
                    fk_id_application: appConfig.config.application.id,
                    f_is_alive: apps[appConfig.config.application.id].isAlive
                });
                appConfig.config.application.update({f_is_alive: apps[appConfig.config.application.id].isAlive});
            }
        } else {
            models.E_application_status_history.create({
                fk_id_application: appConfig.config.application.id,
                f_is_alive: apps[appConfig.config.application.id].isAlive
            });
        }
    });
}