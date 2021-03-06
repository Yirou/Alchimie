var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_application.json");
var associations = require("./options/e_application.json");

module.exports = (sequelize, DataTypes) => {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '1_e_application',
        timestamps: true
    };

    var Model = sequelize.define('E_application', attributes, options);
    Model.associate = builder.buildAssociation('E_application', associations);
    builder.addHooks(Model, 'e_application', attributes_origin);

    return Model;
};