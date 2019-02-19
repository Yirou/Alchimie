var servers = {};
const isReachable = require('is-reachable');
var moment = require('moment');
var models = require('../models/');


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

var start = async function (serverConfig) {
    servers[serverConfig.id].checkID = setInterval(async function () {
        servers[serverConfig.id].isAlive = await isReachable(serverConfig.url);
        console.log(servers[serverConfig.id].isAlive);
        if (servers[serverConfig.id].isAlive)
            servers[serverConfig.id].pings_failed_nb = 0;
        else
            servers[serverConfig.id].pings_failed_nb++;

        alert(servers[serverConfig.id]);
    }, serverConfig.interval);
};
var stop = function (serverConfig) {
    if (servers[serverConfig.id])
        clearInterval(servers[serverConfig.id].checkID);
};

var alert = function alert(serverConfig) {

    if (serverConfig.alert) {
        if (serverConfig.pings_failed_nb >= serverConfig.server.f_alert_pings_failed) {
            if (serverConfig.alert.mailAlert) {

            }
            if (serverConfig.alert.smsAlert) {

            }
            if (serverConfig.alert.notificationAlert) {

            }
            //create field alert is sent to prevent once and sent date and sent only each hour
            serverConfig.pings_failed_nb = 0;
        }

    }
    addDBLog(serverConfig);

};

var addDBLog = function (serverConfig) {
    /*add log in db each hour*/
    models.E_server_status_history.findOne({
        where: {fk_id_server: serverConfig.config.server.id},
        order: [['id', 'DESC']]
    }).then(function (e_server_status_history) {
        serverConfig.config.server.update({f_is_alive: servers[serverConfig.config.server.id].isAlive});
        if (e_server_status_history) {
            var now = moment();
//            if (now.diff(moment(new Date(e_server_status_history.createdAt)), 'minutes') > 30) {
                models.E_server_status_history.create({
                    fk_id_server: serverConfig.config.server.id,
                    f_is_alive: servers[serverConfig.config.server.id].isAlive
                });
//            }
        } else {
            models.E_server_status_history.create({
                fk_id_server: serverConfig.config.server.id,
                f_is_alive: servers[serverConfig.config.server.id].isAlive
            });
        }
    });
}