var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_history_e_server_s_status.json");
var associations = require("./options/e_history_e_server_s_status.json");

module.exports = (sequelize, DataTypes) => {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '1_e_history_16_62',
        timestamps: true
    };

    var Model = sequelize.define('E_history_e_server_s_status', attributes, options);
    Model.associate = builder.buildAssociation('E_history_e_server_s_status', associations);
    builder.addHooks(Model, 'history_e_server_s_status', attributes_origin);

    return Model;
};