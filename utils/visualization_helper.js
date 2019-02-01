
var dust = require('dustjs-linkedin');
var fs = require('fs');


exports.buildData = function (organization) {
    return new Promise(function (resolve, reject) {
        try {
            var data = {
            };
            data[organization.f_name] = {
                "type": "organization",
                "name": organization.f_name,
                "group": '',
                "docs": '',
                "dependedOnBy": [],
                "depends": [
                ]
            };

            addServerToOrganization(organization, data, organization);
            buildDoc('organization', data[organization.f_name], organization);
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
};

var addServerToOrganization = function (organization, data) {
    organization.r_server.forEach(function (server) {

        if (data[organization.f_name].dependedOnBy.indexOf("Server " + server.f_name) < 0)
            data[organization.f_name].dependedOnBy.push("Server " + server.f_name);

        if (typeof data["Server " + server.f_name] === 'undefined')
            data["Server " + server.f_name] = {
                "type": "server",
                "name": "Server " + server.f_name,
                "docs": '',
                "hasFile": server.f_file !== null,
                "dependedOnBy": []
            };
        if (typeof data["Server " + server.f_name].depends === 'undefined')
            data["Server " + server.f_name].depends = [];

        if (data["Server " + server.f_name].depends.indexOf(organization.f_name) < 0)
            data["Server " + server.f_name].depends.push(organization.f_name);

        buildDoc('server', data["Server " + server.f_name], server);
        addApplicationToServer(server, data);
        addServiceToServer(server, data);
    });
};

var addApplicationToServer = function (server, data) {
    server.r_application.forEach(function (application) {
        if (data["Server " + server.f_name].dependedOnBy.indexOf("Application " + application.f_name) < 0)
            data["Server " + server.f_name].dependedOnBy.push("Application " + application.f_name);

        if (typeof data["Application " + application.f_name] === 'undefined')
            data["Application " + application.f_name] = {
                "type": "application",
                "name": "Application " + application.f_name,
                "docs": '',
                "hasFile": application.f_file !== null,
                "dependedOnBy": [],
                "group": ''
            };
        if (typeof data["Application " + application.f_name].depends === 'undefined')
            data["Application " + application.f_name].depends = [];

        if (data["Application " + application.f_name].depends.indexOf("Server " + server.f_name) < 0)
            data["Application " + application.f_name].depends.push("Server " + server.f_name);
        buildDoc('application', data["Application " + application.f_name], application);
    });
}

var addServiceToServer = function (server, data) {
    server.r_service.forEach(function (service) {
        if (data["Server " + server.f_name].dependedOnBy.indexOf("Service " + service.f_name) < 0)
            data["Server " + server.f_name].dependedOnBy.push("Service " + service.f_name);
        if (typeof data["Service " + service.f_name] === 'undefined')
            data["Service " + service.f_name] = {
                "type": "service",
                "name": "Service " + service.f_name,
                "docs": '',
                "hasFile": service.f_file !== null,
                "dependedOnBy": [],
                "group": ''
            };
        if (typeof data["Service " + service.f_name].depends === 'undefined')
            data["Service " + service.f_name].depends = [];

        if (data["Service " + service.f_name].depends.indexOf("Server " + server.f_name) < 0)
            data["Service " + service.f_name].depends.push("Server " + server.f_name);
        buildDoc('service', data["Service " + service.f_name], service);
    });
}
var buildDoc = function (type, elt, object) {
    switch (type) {
        case "organization":
            var out = fs.readFileSync(__dirname + '/../views/visualization/organization_doc.dust', 'utf8');
            dust.renderSource(out, object, function (err, html) {
                if (!err)
                    elt.docs = html;
            });
            break;

        case "server":
            var out = fs.readFileSync(__dirname + '/../views/visualization/server_doc.dust', 'utf8');
            dust.renderSource(out, object, function (err, html) {
                if (!err)
                    elt.docs = html;
            });
            break;
        case "application":
            var out = fs.readFileSync(__dirname + '/../views/visualization/application_doc.dust', 'utf8');
            dust.renderSource(out, object, function (err, html) {
                if (!err)
                    elt.docs = html;
            });
            break;
        case "service":
            var out = fs.readFileSync(__dirname + '/../views/visualization/service_doc.dust', 'utf8');
            dust.renderSource(out, object, function (err, html) {
                if (!err)
                    elt.docs = html;
            });
            break;
        default:

            break;
    }
}