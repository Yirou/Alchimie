var serverMonitor = require('./serverMonitor_helper');
var appMonitor = require('./appMonitor_helper');
var models = require('../models/');

var defaultsServerConf = {
    interval: 10000,
    f_alert_pings_failed: 1
};
var defaultsAppConf = {
    interval: 10000,
    f_alert_pings_failed: 1
};
var monitor = {
    addServer: function (serverID) {
        return new Promise(function (resolve, reject) {
            models.E_server.findOne({
                where: {id: serverID},
                include: [
                    {model: models.E_server_config, as: 'r_server_config', required: true}
                ]}).then(function (server) {
                if (server) {
                    try {
                        var conf = {
                            id: server.id,
                            url: server.f_ip,
                            checkstatus: server.r_server_config.f_check_status,
                            interval: server.r_server_config.f_interval || defaultsServerConf.interval,
                            f_alert_pings_failed: server.r_server_config.f_alert_pings_failed || defaultsServerConf.f_alert_pings_failed,
                            pings_failed_nb: 0,
                            alert: {
                                mail: {
                                    enabled: server.r_server_config.f_email_alert,
                                    period: server.r_server_config.f_email_alert_period,
                                    to: server.r_server_config.f_email
                                },
                                smsAlert: {
                                    enabled: server.r_server_config.f_sms_alert,
                                    period: server.r_server_config.f_sms_alert_period,
                                    to: server.r_server_config.f_phone
                                },
                                notificationAlert: {
                                    enabled: server.r_server_config.f_notification_alert,
                                    period: server.r_server_config.f_notification_alert_period
                                },
                                db: {
                                    enabled: server.r_server_config.f_add_ping_log_in_db,
                                    period: server.r_server_config.f_interval_db_log_store
                                }

                            },
                            server: server
                        };
                        serverMonitor.addServer(conf);
                        resolve(conf);
                    } catch (e) {
                        serverMonitor.removeServer({id: server.id});
                        reject(e);
                    }
                } else
                    reject({status: 404});
            });
        });
    },
    addApp: function (app) {
        return new Promise(function (resolve, reject) {
            if (app.f_ip) {
                var conf = {
                    url: app.f_ip + (app.f_port ? ':' + app.f_port : ''),
                    checkstatus: app.f_check_status,
                    interval: app.f_interval || defaultsAppConf.interval,
                    f_alert_pings_failed: app.f_alert_pings_failed || defaultsAppConf.f_alert_pings_failed,
                    alert: {
                        mail: {
                            enabled: app.f_email_alert,
                            period: app.f_email_alert_period
                        },
                        smsAlert: {
                            enabled: app.f_sms_alert,
                            period: app.f_sms_alert_period
                        },
                        notificationAlert: {
                            enabled: app.f_notification_alert,
                            period: app.f_notification_alert_period
                        }
                    },
                };
                appMonitor.addApp(conf);
                return  resolve(conf);
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
exports.loadServersSupervisorOnStart = function () {
    models.E_server.findAll({
        attributes: ['id'],
        include: [
            {
                model: models.E_server_config,
                as: 'r_server_config',
                required: true,
                where: {f_check_status: true},
                attributes: ['id']
            }
        ]}).then(function (servers) {
        servers.forEach(function (server) {
            monitor.addServer(server.id);
        });
    }).catch(e => {

    });
}

exports.loadApplicationsSupervisorOnStart = function () {
    models.E_application.findAll({
        where: {f_check_status: true}
    }).then(function (applications) {
        applications.forEach(function (application) {
            monitor.addApp(application);
        });
    }).catch(e => {

    });
};

exports.monitor = monitor;