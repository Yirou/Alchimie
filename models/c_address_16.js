var builder = require('../utils/model_builder');

var attributes_origin = require("./attributes/c_address_16.json");
var associations = require("./options/c_address_16.json");

module.exports = function(sequelize, DataTypes) {
	var attributes = builder.buildForModel(attributes_origin, DataTypes);
	var options = {
		tableName: '1_c_address_16'
	};

    var Model = sequelize.define('C_address_16', attributes, options);
    Model.associate = builder.buildAssociation('C_address_16', associations);
    builder.addHooks(Model, 'c_address_16', attributes_origin);

    return Model;
};