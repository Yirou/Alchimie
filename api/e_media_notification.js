var express = require('express');
var router = express.Router();
var block_access = require('../utils/block_access');

var models = require('../models/');
var attributes = require('../models/attributes/e_media_notification');
var options = require('../models/options/e_media_notification');
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

    models.E_media_notification.findAndCountAll(query).then(function(e_media_notifications) {
        answer["e_media_notifications".substring(2)] = e_media_notifications.rows || [];
        answer.totalCount = e_media_notifications.count;
        answer.rowsCount = answer["e_media_notifications".substring(2)].length;

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
    var id_e_media_notification = parseInt(req.params.id);

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
    var query = {limit: answer.limit, offset: answer.offset, where: {id: id_e_media_notification}};
    if (include.length)
        query.include = include;

    models.E_media_notification.findOne(query).then(function(e_media_notification) {
        if (!e_media_notification) {
            answer.error = "No e_media_notification with ID "+id_e_media_notification;
            return res.status(404).json(answer);
        }
        answer["e_media_notification".substring(2)] = e_media_notification;

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
    var id_e_media_notification = req.params.id;
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

    models.E_media_notification.findOne({
        where: {id: id_e_media_notification},
        include: include
    }).then(function(e_media_notification) {
        if (!e_media_notification) {
            answer.error = "No e_media_notification with ID "+id_e_media_notification;
            return res.status(404).json(answer);
        }
        answer[association] = e_media_notification[include.as];

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

    models.E_media_notification.create(createObject).then(function(e_media_notification) {
        answer["e_media_notification".substring(2)] = e_media_notification;

        // Set associations
        var associationPromises = [];
        for (var prop in req.body)
            if (prop.indexOf('r_') == 0) {
                if (e_media_notification['set'+entity_helper.capitalizeFirstLetter(prop)] !== 'undefined')
                    associationPromises.push(e_media_notification['set'+entity_helper.capitalizeFirstLetter(prop)](req.body[prop]));
                else
                    console.error("API: Couldn't set association.\nAPI: e_media_notification.set"+entity_helper.capitalizeFirstLetter(prop)+"() is undefined.");
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
    var id_e_media_notification = parseInt(req.params.id);
    var updateObject = model_builder.buildForRoute(attributes, options, req.body);

    // Fetch e_media_notification to update
    models.E_media_notification.findOne({where: {id: id_e_media_notification}}).then(function(e_media_notification) {
        if (!e_media_notification) {
            answer.error = "No e_media_notification with ID "+id_e_media_notification;
            return res.status(404).json(answer);
        }

        // Update e_media_notification
        e_media_notification.update(updateObject, {where: {id: id_e_media_notification}}).then(function() {
            answer["e_media_notification".substring(2)] = e_media_notification;

            // Set associations
            var associationPromises = [];
            for (var prop in req.body)
                if (prop.indexOf('r_') == 0) {
                    if (e_media_notification['set'+entity_helper.capitalizeFirstLetter(prop)] !== 'undefined')
                        associationPromises.push(e_media_notification['set'+entity_helper.capitalizeFirstLetter(prop)](req.body[prop]));
                    else
                        console.error("API: Couldn't set association.\nAPI: e_media_notification.set"+entity_helper.capitalizeFirstLetter(prop)+"() is undefined.");
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
    var id_e_media_notification = req.params.id;

    models.E_media_notification.destroy({where: {id: id_e_media_notification}}).then(function() {
        res.status(200).end();
    }).catch(function(err){
        answer.error = err;
        res.status(500).json(answer);
    });
});

module.exports = router;
