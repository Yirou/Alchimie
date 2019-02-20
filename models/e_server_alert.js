var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_server_alert.json");
var associations = require("./options/e_server_alert.json");

module.exports = (sequelize, DataTypes) => {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '1_e_server_alert',
        timestamps: true
    };

    var Model = sequelize.define('E_server_alert', attributes, options);
    Model.associate = builder.buildAssociation('E_server_alert', associations);
    builder.addHooks(Model, 'e_server_alert', attributes_origin);

    return Model;
};