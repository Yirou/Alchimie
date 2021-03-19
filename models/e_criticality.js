var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_criticality.json");
var associations = require("./options/e_criticality.json");

module.exports = (sequelize, DataTypes) => {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '1_e_criticality',
        timestamps: true
    };

    var Model = sequelize.define('E_criticality', attributes, options);
    Model.associate = builder.buildAssociation('E_criticality', associations);
    builder.addHooks(Model, 'e_criticality', attributes_origin);

    return Model;
};