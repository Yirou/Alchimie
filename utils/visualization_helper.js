exports.buildData = function (organization) {
    return new Promise(function (resolve, reject) {
        try {
            var data = {

            };
            data[organization.f_name] = {
                "type": "organization",
                "name": organization.f_name,
                "group": '',
                "depends": [
                ]
            }
            organization.r_server.forEach(function (server) {
                data["server_" + server.f_name] = {
                    "type": "server",
                    "name": "server_" + organization.f_name,
//                    "group": '',
                    "depends": [
                        organization.f_name
                    ]
                }
                server.r_application.forEach(function (application) {
                    data["application_" + server.f_name] = {
                        "type": "application",
                        "name": "application_" + organization.f_name,
//                        "group": '',
                        "depends": [
                            "server_" + server.f_name
                        ]
                    }
                });
                server.r_service.forEach(function (service) {
                    data["service_" + service.f_name] = {
                        "type": "service",
                        "name": "service_" + organization.f_name,
//                        "group": '',
                        "depends": [
                            "server_" + server.f_name
                        ]
                    }
                });
            });
            console.log(data)
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
};