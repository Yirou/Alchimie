var builder = require('../utils/model_builder');

var attributes_origin = require("./attributes/c_address_14.json");
var associations = require("./options/c_address_14.json");

module.exports = function(sequelize, DataTypes) {
	var attributes = builder.buildForModel(attributes_origin, DataTypes);
	var options = {
		tableName: '1_c_address_14'
	};

    var Model = sequelize.define('C_address_14', attributes, options);
    Model.associate = builder.buildAssociation('C_address_14', associations);
    builder.addHooks(Model, 'c_address_14', attributes_origin);

    return Model;
};