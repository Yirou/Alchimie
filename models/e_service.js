var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_service.json");
var associations = require("./options/e_service.json");

module.exports = (sequelize, DataTypes) => {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '1_e_service',
        timestamps: true
    };

    var Model = sequelize.define('E_service', attributes, options);
    Model.associate = builder.buildAssociation('E_service', associations);
    builder.addHooks(Model, 'e_service', attributes_origin);

    return Model;
};