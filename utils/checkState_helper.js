var serverMonitor = require('./serverMonitor_helper');
var appMonitor = require('./appMonitor_helper');

var defaultsServerConf = {
    interval: 10000,
    nb_pings_failed: 1
};
var defaultsAppConf = {
    interval: 10000,
    nb_pings_failed: 1
};
exports.monitor = {
    addServer: function (server) {
        return new Promise(function (resolve, reject) {
            if (server.f_ip) {
                try {
                    var conf = {
                        url: server.f_ip,
                        checkState: server.r_server_config.f_check_state,
                        interval: server.r_server_config.f_interval || defaultsServerConf.interval,
                        nb_pings_failed: server.r_server_config.f_alert_pings_failed || defaultsServerConf.nb_pings_failed,
                        alert: {
                            mailAlert: server.r_server_config.f_email_alert,
                            smsAlert: server.r_server_config.f_sms_alert,
                            notificationAlert: server.r_server_config.f_notification_alert
                        }
                    };
                    serverMonitor.addServer(conf);
                    resolve(conf);
                } catch (e) {
                    reject(e);
                }
            }
            reject();
        });
    },
    addApp: function (app) {
        return new Promise(function (resolve, reject) {
            if (app.f_ip) {
                var conf = {
                    url: app.f_ip + (app.f_port ? ':' + app.f_port : ''),
                    checkState: app.f_check_state,
                    interval: app.f_interval || defaultsAppConf.interval,
                    nb_pings_failed: app.f_alert_pings_failed || defaultsAppConf.nb_pings_failed
                };
                appMonitor.addApp(conf);
                resolve(conf);
            }
            reject();
        });
    },
    removeServer: function (server) {
        return new Promise(function (resolve, reject) {
            if (server.f_ip) {
                try {
                    var conf = {
                        url: server.f_ip
                    };
                    serverMonitor.removeServer(conf);
                    resolve(conf);
                } catch (e) {
                    reject(e);
                }
            }
            reject();
        });
    },
    removeApp: function (app) {
        return new Promise(function (resolve, reject) {
            if (app.f_ip) {
                var conf = {
                    url: app.f_ip
                };
                appMonitor.removeApp(conf);
                resolve(conf);
            }
            reject();
        });
    }

};