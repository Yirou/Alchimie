var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_server_category.json");
var associations = require("./options/e_server_category.json");

module.exports = (sequelize, DataTypes) => {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '1_e_server_category',
        timestamps: true
    };

    var Model = sequelize.define('E_server_category', attributes, options);
    Model.associate = builder.buildAssociation('E_server_category', associations);
    builder.addHooks(Model, 'e_server_category', attributes_origin);

    return Model;
};