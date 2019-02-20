var apps = {};
const isReachable = require('is-reachable');
var ping = require('ping');
var models = require('../models/');
var moment = require('moment');
var mailer = require('./mailer');

exports.addApp = function (appConfig) {
    stop(appConfig);
    if (appConfig.checkstatus) {
        apps[appConfig.id] = {};
        apps[appConfig.id].pings_failed_nb = 0;
        apps[appConfig.id].config = appConfig;
        apps[appConfig.id].check = start(appConfig);
    }
};
exports.removeApp = function (appConfig) {
    stop(apps[appConfig.id]);
};

var start = function (appConfig) {
    apps[appConfig.id].checkIntervalID = setInterval(function () {
        ping.promise.probe(appConfig.url)
                .then(function (res) {
                    apps[appConfig.id].isAlive = res.alive;
                    if (!res.alive) {
                        apps[appConfig.id].pings_failed_nb++;
                    } else
                        apps[appConfig.id].pings_failed_nb = 0;
                    console.log(apps[appConfig.id].isAlive)
                    alert(appConfig, res);
                });
    }, appConfig.interval);
};
var stop = function (appConfig) {
    if (apps[appConfig.id])
        clearInterval(apps[appConfig.id].checkIntervalID);
};

var alert = function alert(appConfig, pingResult) {

    if (appConfig.alert) {
        if (appConfig.alert.mail) {
            sendMailAlert(appConfig);
        }
        if (appConfig.alert.sms) {

        }
        if (appConfig.alert.notification) {

        }
        try {
            addDBLog(appConfig, pingResult);
        } catch (e) {
            console.log(e)
        }

    }

};

var addDBLog = function (appConfig, pingResult) {
    /*add log in db each hour*/
    console.log("add log")
    models.E_application_status_history.findOne({
        where: {fk_id_application: appConfig.id},
        order: [['id', 'DESC']]
    }).then(function (e_application_status_history) {
        if (e_application_status_history) {
            var now = moment();
            if (now.diff(moment(new Date(e_application_status_history.createdAt)), 'minutes') > appConfig.alert.db.period) {
                models.E_application_status_history.create({
                    fk_id_application: appConfig.id,
                    f_is_alive: apps[appConfig.id].isAlive,
                    f_time: pingResult.time,
                    f_min: pingResult.min,
                    f_max: pingResult.max
                });
                appConfig.application.update({f_is_alive: apps[appConfig.id].isAlive});
            }
        } else {
            models.E_application_status_history.create({
                fk_id_application: appConfig.id,
                f_is_alive: apps[appConfig.id].isAlive,
                f_time: pingResult.time,
                f_min: pingResult.min,
                f_max: pingResult.max
            });
        }
    });
}

function sendMailAlert(appConfig) {
    models.E_application_alert.findOne({
        where: {
            fk_id_application: appConfig.id,
            f_type: 'sms'
        },
        order: [['id', 'DESC']]
    }).then(function (e_application_alert) {
        var p0 = new Promise(function (resolve, reject) {
            if (!e_application_alert) {
                resolve();
            } else {
                var now = moment();
                var lastAlert = moment(new Date(e_application_alert.createdAt));
                if (now.diff(moment(lastAlert), 'secondes') > appConfig.alert.mail.period) {
                    resolve();
                }
            }
        });
        p0.then(function () {
            var html = __dirname + '/../views/alert/application_mail.dust';
            var options = {
                to: appConfig.alert.mail.to,
                from: 'Alchimie mail alert',
                subject: 'Ping failed'
            };
            mailer.sendHtml(html, options, []).then(function () {
                models.E_application_alert.create({fk_id_application: appConfig.id, f_type: 'sms', version: 1});
            });
        }).catch(function () {
//            Don't send mail
        });
    });
}
function sendSMSAlert(serverConfig) {
    console.log("send sms")
}
function sendNotificationAlert(serverConfig) {
    console.log("Notification")
}