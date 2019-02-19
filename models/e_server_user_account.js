var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_server_user_account.json");
var associations = require("./options/e_server_user_account.json");

module.exports = (sequelize, DataTypes) => {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '1_e_server_user_account',
        timestamps: true
    };

    var Model = sequelize.define('E_server_user_account', attributes, options);
    Model.associate = builder.buildAssociation('E_server_user_account', associations);
    builder.addHooks(Model, 'e_server_user_account', attributes_origin);

    return Model;
};