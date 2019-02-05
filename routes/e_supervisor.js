// router/routes.js
var express = require('express');
var router = express.Router();
var block_access = require('../utils/block_access');
var languageConfig = require('../config/language');
var globalConf = require('../config/global');
var multer = require('multer');
var fs = require('fs');
var fse = require('fs-extra');
var crypto = require('../utils/crypto_helper');
var upload = multer().single('file');
var models = require('../models/');
var Jimp = require("jimp");
var entity_helper = require('../utils/entity_helper');
var dust = require('dustjs-linkedin');
var enums_radios = require('../utils/enum_radio.js');
var component_helper = require('../utils/component_helper');
var visualization_helper = require('../utils/visualization_helper');
// Datalist
var filterDataTable = require('../utils/filter_datatable');
var model_builder = require('../utils/model_builder');
// Winston logger
var logger = require('../utils/logger');
// ===========================================
// Redirection Home =====================
// ===========================================

// *** Dynamic Module | Do not remove ***

router.get('/servers', block_access.actionAccessMiddleware("supervisor", "read"), function (req, res) {
    res.render('supervisor/server');
});


router.get('/applications', block_access.actionAccessMiddleware("supervisor", "read"), function (req, res) {
    res.render('supervisor/application');
});

router.get('/server/:id/state', block_access.actionAccessMiddleware("supervisor", "read"), function (req, res) {

    var from_date = req.query.fromd_date;
    var to_date = req.query.to_date;
    models.E_server.findOne({
        where: {id: req.params.id},
        include: [
            {model: models.E_server_state_history, as: 'r_server_state_history', required: true}
        ]
    }).then(function (server) {

    });
});
module.exports = router;