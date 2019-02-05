var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_server_state_history.json");
var associations = require("./options/e_server_state_history.json");

module.exports = (sequelize, DataTypes) => {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '1_e_server_state_history',
        timestamps: true
    };

    var Model = sequelize.define('E_server_state_history', attributes, options);
    Model.associate = builder.buildAssociation('E_server_state_history', associations);
    builder.addHooks(Model, 'e_server_state_history', attributes_origin);

    return Model;
};