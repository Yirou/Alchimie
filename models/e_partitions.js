var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_partitions.json");
var associations = require("./options/e_partitions.json");

module.exports = (sequelize, DataTypes) => {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '1_e_partitions',
        timestamps: true
    };

    var Model = sequelize.define('E_partitions', attributes, options);
    Model.associate = builder.buildAssociation('E_partitions', associations);
    builder.addHooks(Model, 'e_partitions', attributes_origin);

    return Model;
};