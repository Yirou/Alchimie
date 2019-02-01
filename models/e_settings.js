var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_settings.json");
var associations = require("./options/e_settings.json");

module.exports = (sequelize, DataTypes) => {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '1_e_settings',
        timestamps: true
    };

    var Model = sequelize.define('E_settings', attributes, options);
    Model.associate = builder.buildAssociation('E_settings', associations);
    builder.addHooks(Model, 'e_settings', attributes_origin);

    return Model;
};