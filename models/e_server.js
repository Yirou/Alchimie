var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_server.json");
var associations = require("./options/e_server.json");

module.exports = (sequelize, DataTypes) => {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '1_e_server',
        timestamps: true
    };

    var Model = sequelize.define('E_server', attributes, options);
    Model.associate = builder.buildAssociation('E_server', associations);
    builder.addHooks(Model, 'e_server', attributes_origin);

    return Model;
};