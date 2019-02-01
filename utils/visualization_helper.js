
exports.buildData = function (organization) {
    return new Promise(function (resolve, reject) {
        try {
            var data = {

            };
            data[organization.f_name] = {
                "type": "organization",
                "name": organization.f_name,
                "group": '',
                "dependedOnBy": [],
                "depends": [
                ]
            };
            addServerToOrganization(organization, data);
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
                "hasFile": server.f_file !== null,
                "dependedOnBy": []
            };
        if (typeof data["Server " + server.f_name].depends === 'undefined')
            data["Server " + server.f_name].depends = [];

        if (data["Server " + server.f_name].depends.indexOf(organization.f_name) < 0)
            data["Server " + server.f_name].depends.push(organization.f_name);
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
                "hasFile": application.f_file !== null,
                "dependedOnBy": [],
                "group": ''
            };
        if (typeof data["Application " + application.f_name].depends === 'undefined')
            data["Application " + application.f_name].depends = [];

        if (data["Application " + application.f_name].depends.indexOf("Server " + server.f_name) < 0)
            data["Application " + application.f_name].depends.push("Server " + server.f_name);
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
                "hasFile": service.f_file !== null,
                "dependedOnBy": [],
                "group": ''
            };
        if (typeof data["Service " + service.f_name].depends === 'undefined')
            data["Service " + service.f_name].depends = [];

        if (data["Service " + service.f_name].depends.indexOf("Server " + server.f_name) < 0)
            data["Service " + service.f_name].depends.push("Server " + server.f_name);
    });
}