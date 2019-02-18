var serverMonitor = require('./serverMonitor_helper');
var appMonitor = require('./appMonitor_helper');
var models = require('../models/');

var defaultsServerConf = {
    interval: 10000,
    nb_pings_failed: 1
};
var defaultsAppConf = {
    interval: 10000,
    nb_pings_failed: 1
};
exports.monitor = {
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
                            checkState: server.r_server_config.f_check_state,
                            interval: server.r_server_config.f_interval || defaultsServerConf.interval,
                            nb_pings_failed: server.r_server_config.f_alert_pings_failed || defaultsServerConf.nb_pings_failed,
                            alert: {
                                mailAlert: server.r_server_config.f_email_alert,
                                smsAlert: server.r_server_config.f_sms_alert,
                                notificationAlert: server.r_server_config.f_notification_alert
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
    },
    loadServersOnStart: function () {
        models.E_server.findAll({
            attributes: ['id'],
            include: [
                {
                    model: models.E_server_config,
                    as: 'r_server_config',
                    required: true,
                    where: {f_check_state: true},
                    attributes: ['id']
                }
            ]}).then(function (servers) {
            servers.forEach(function (server) {
                this.addServer(server);
            });
        }).catch(e => {

        });
    },
    loadApplicationsOnStart: function () {
        models.E_application.findAll({
            where: {f_check_state: true}
        }).then(function (applications) {
            applications.forEach(function (application) {
                this.addApp(application);
            });
        }).catch(e => {

        });
    }

};