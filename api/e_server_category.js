var express = require('express');
var router = express.Router();
var block_access = require('../utils/block_access');

var models = require('../models/');
var attributes = require('../models/attributes/e_server_category');
var options = require('../models/options/e_server_category');
var model_builder = require('../utils/model_builder');
var enums_radios = require('../utils/enum_radio.js');
var entity_helper = require('../utils/entity_helper');

//
// FIND ALL
//
router.get('/', function(req, res) {
    var answer = {
        limit: parseInt(req.query.limit || 50),
        offset: parseInt(req.query.offset || 0),
        error: null
    };

    // Build include from query parameter: `?include=r_asso1,r_asso2`
    var include = [];
    if (req.query.include) {
        var queryIncludes = req.query.include.split(',');
        for (var i = 0; i < queryIncludes.length; i++)
            for (var j = 0; j < options.length; j++)
                if (queryIncludes[i] == options[j].as)
                    include.push({
                        model: models[entity_helper.capitalizeFirstLetter(options[j].target)],
                        as: options[j].as
                    });
    }
    var query = {limit: answer.limit, offset: answer.offset};
    if (include.length)
        query.include = include;

    var where = {};
    for (var field in req.query)
        if (field.indexOf('f_') == 0 && attributes[field])
            where[field] = req.query[field];
    if (Object.keys(where).length)
        query.where = where;

    models.E_server_category.findAndCountAll(query).then(function(e_server_categorys) {
        answer["e_server_categorys".substring(2)] = e_server_categorys.rows || [];
        answer.totalCount = e_server_categorys.count;
        answer.rowsCount = answer["e_server_categorys".substring(2)].length;

        res.status(200).json(answer);
    }).catch(function(err) {
        answer.error = err;
        res.status(500).json(answer);
    });
});

//
// FIND ONE
//
router.get('/:id', function(req, res) {
    var answer = {
        error: null
    };
    var id_e_server_category = parseInt(req.params.id);

    // Build include from query parameter: `?include=r_asso1,r_asso2`
    var include = [];
    if (req.query.include) {
        var queryIncludes = req.query.include.split(',');
        for (var i = 0; i < queryIncludes.length; i++)
            for (var j = 0; j < options.length; j++)
                if (queryIncludes[i] == options[j].as)
                    include.push({
                        model: models[entity_helper.capitalizeFirstLetter(options[j].target)],
                        as: options[j].as
                    });
    }
    var query = {limit: answer.limit, offset: answer.offset, where: {id: id_e_server_category}};
    if (include.length)
        query.include = include;

    models.E_server_category.findOne(query).then(function(e_server_category) {
        if (!e_server_category) {
            answer.error = "No e_server_category with ID "+id_e_server_category;
            return res.status(404).json(answer);
        }
        answer["e_server_category".substring(2)] = e_server_category;

        res.status(200).json(answer);
    }).catch(function(err){
        answer.error = err;
        res.status(500).json(answer);
    });
});

//
// FIND ASSOCIATION
//
router.get('/:id/:association', function(req, res) {
    var answer = {
        error: null,
        limit: parseInt(req.query.limit || 50),
        offset: parseInt(req.query.offset || 0)
    };
    var id_e_server_category = req.params.id;
    var association = req.params.association;

    var include = null;
    for (var i = 0; i < options.length; i++) {
        if (options[i].as == 'r_'+association) {
            include = {
                model: models[entity_helper.capitalizeFirstLetter(options[i].target)],
                as: options[i].as,
                limit: answer.limit,
                offset: answer.offset
            };
            break;
        }
    }

    if (include == null) {
        answer.error = "No association with "+association;
        return res.status(404).json(answer);
    }

    var where = {};
    for (var field in req.query)
        if (field.indexOf('f_') == 0)
            where[field] = req.query[field];
    if (Object.keys(where).length)
        include.where = where;

    models.E_server_category.findOne({
        where: {id: id_e_server_category},
        include: include
    }).then(function(e_server_category) {
        if (!e_server_category) {
            answer.error = "No e_server_category with ID "+id_e_server_category;
            return res.status(404).json(answer);
        }
        answer[association] = e_server_category[include.as];

        res.status(200).json(answer);
    }).catch(function(err){
        answer.error = err;
        res.status(500).json(answer);
    });
});

//
// CREATE
//
router.post('/', function(req, res) {
    var answer = {
        error: null
    };

    var createObject = model_builder.buildForRoute(attributes, options, req.body);

    models.E_server_category.create(createObject).then(function(e_server_category) {
        answer["e_server_category".substring(2)] = e_server_category;

        // Set associations
        var associationPromises = [];
        for (var prop in req.body)
            if (prop.indexOf('r_') == 0) {
                if (e_server_category['set'+entity_helper.capitalizeFirstLetter(prop)] !== 'undefined')
                    associationPromises.push(e_server_category['set'+entity_helper.capitalizeFirstLetter(prop)](req.body[prop]));
                else
                    console.error("API: Couldn't set association.\nAPI: e_server_category.set"+entity_helper.capitalizeFirstLetter(prop)+"() is undefined.");
            }

        Promise.all(associationPromises).then(function() {
            res.status(200).json(answer);
        }).catch(function(err) {
            answer.error = "Error with associations";
            res.status(500).json(answer);
        });
    }).catch(function(err){
        answer.error = err;
        res.status(500).json(answer);
    });
});

//
// UPDATE
//
router.put('/:id', function(req, res) {
    var answer = {
        error: null
    };
    var id_e_server_category = parseInt(req.params.id);
    var updateObject = model_builder.buildForRoute(attributes, options, req.body);

    // Fetch e_server_category to update
    models.E_server_category.findOne({where: {id: id_e_server_category}}).then(function(e_server_category) {
        if (!e_server_category) {
            answer.error = "No e_server_category with ID "+id_e_server_category;
            return res.status(404).json(answer);
        }

        // Update e_server_category
        e_server_category.update(updateObject, {where: {id: id_e_server_category}}).then(function() {
            answer["e_server_category".substring(2)] = e_server_category;

            // Set associations
            var associationPromises = [];
            for (var prop in req.body)
                if (prop.indexOf('r_') == 0) {
                    if (e_server_category['set'+entity_helper.capitalizeFirstLetter(prop)] !== 'undefined')
                        associationPromises.push(e_server_category['set'+entity_helper.capitalizeFirstLetter(prop)](req.body[prop]));
                    else
                        console.error("API: Couldn't set association.\nAPI: e_server_category.set"+entity_helper.capitalizeFirstLetter(prop)+"() is undefined.");
                }

            Promise.all(associationPromises).then(function() {
                res.status(200).json(answer);
            }).catch(function(err) {
                answer.error = "Error with associations";
                res.status(500).json(answer);
            });
        }).catch(function(err){
            answer.error = err;
            res.status(500).json(answer);
        });
    }).catch(function(err){
        answer.error = err;
        res.status(500).json(answer);
    });
});

//
// DELETE
//
router.delete('/:id', function(req, res) {
    var answer = {
        error: null
    }
    var id_e_server_category = req.params.id;

    models.E_server_category.destroy({where: {id: id_e_server_category}}).then(function() {
        res.status(200).end();
    }).catch(function(err){
        answer.error = err;
        res.status(500).json(answer);
    });
});

module.exports = router;
