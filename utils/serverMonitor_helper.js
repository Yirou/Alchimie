var servers = {};
const isReachable = require('is-reachable');
var moment = require('moment');
var models = require('../models/');
var ping = require('ping');
var mailer = require('./mailer');

exports.addServer = function (serverConfig) {
    /*stop and restart*/
    stop(serverConfig);
    if (serverConfig.checkstatus) {
        servers[serverConfig.id] = {};
        servers[serverConfig.id].pings_failed_nb = 0;
        servers[serverConfig.id].config = serverConfig;
        servers[serverConfig.id].check = start(serverConfig);
    }
};
exports.removeServer = function (serverConfig) {
    stop(servers[serverConfig.url]);
};

var start = function (serverConfig) {
    servers[serverConfig.id].checkIntervalID = setInterval(function () {
        ping.promise.probe(serverConfig.url)
                .then(function (res) {
                    servers[serverConfig.id].isAlive = res.alive;
            
                    if (!res.alive) {
                        serverConfig.pings_failed_nb++;
                    } else
                        servers[serverConfig.id].pings_failed_nb = 0;
                    
                    alert(serverConfig, res);
                    console.log(servers[serverConfig.id].isAlive);
                });
    }, serverConfig.interval);
};
var stop = function (serverConfig) {
    if (servers[serverConfig.id])
        clearInterval(servers[serverConfig.id].checkIntervalID);
};

var alert = function alert(serverConfig, pingResult) {
    if (serverConfig.alert) {
        if (serverConfig.pings_failed_nb >= serverConfig.f_alert_pings_failed) {
            if (serverConfig.alert.mail.enabled) {
                sendMailAlert(serverConfig);
            }
            if (serverConfig.alert.sms.enabled) {
                sendSMSAlert(serverConfig);
            }
            if (serverConfig.alert.notification.enabled) {
                sendNotificationAlert(serverConfig);
            }
            //create field alert is sent to prevent once and sent date and sent only each hour
            serverConfig.pings_failed_nb = 0;
        }
        addDBLog(serverConfig, pingResult);
    }


};

var addDBLog = function (serverConfig, pingResult) {
    /*add log in db each hour*/
    models.E_server_status_history.findOne({
        where: {fk_id_server: serverConfig.id},
        order: [['id', 'DESC']]
    }).then(function (e_server_status_history) {
        serverConfig.server.update({f_is_alive: servers[serverConfig.id].isAlive});
        if (e_server_status_history) {
            var now = moment();
            if (now.diff(moment(new Date(e_server_status_history.createdAt)), 'secondes') > serverConfig.alert.db.period) {
                models.E_server_status_history.create({
                    fk_id_server: serverConfig.id,
                    f_is_alive: servers[serverConfig.id].isAlive,
                    f_time: pingResult.time,
                    f_min: pingResult.min,
                    f_max: pingResult.max
                });
            }
        } else {
            models.E_server_status_history.create({
                fk_id_server: serverConfig.id,
                f_is_alive: servers[serverConfig.id].isAlive,
                f_time: pingResult.time,
                f_min: pingResult.min,
                f_max: pingResult.max
            });
        }
    });
}

function sendMailAlert(serverConfig) {
    models.E_server_alert.findOne({
        where: {
            fk_id_server: serverConfig.id,
            f_type: 'sms'
        },
        order: [['id', 'DESC']]
    }).then(function (e_server_alert) {
        var p0 = new Promise(function (resolve, reject) {
            if (!e_server_alert) {
                resolve();
            } else {
                var now = moment();
                var lastAlert = moment(new Date(e_server_alert.createdAt));
                if (now.diff(moment(lastAlert), 'secondes') > serverConfig.alert.mail.period) {
                    resolve();
                }
            }
        });
        p0.then(function () {
            var html = __dirname + '/../views/alert/server_mail.dust';
            var options = {
                to: serverConfig.alert.mail.to,
                from: 'Alchimie mail alert',
                subject:'Ping failed'
            };
            mailer.sendHtml(html, options, []).then(function () {
                models.E_server_alert.create({fk_id_server: serverConfig.id, f_type: 'sms', version: 1});
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

}