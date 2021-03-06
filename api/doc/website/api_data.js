define({ "api": [
  {
    "type": "get",
    "url": "/api/getToken/",
    "title": "Basic Auth",
    "version": "1.0.0",
    "group": "1_Authentication",
    "description": "<p>To be able to interact with the API, you need to generate a Bearer Token using the <code>/api/getToken/</code> url</p> <p>Set your HTTP header like so with basic64 encoding : <code>Authorization clientID:clientSecret</code></p>",
    "examples": [
      {
        "title": "Example",
        "content": "var request = require('request');\n\n// API credentials\nvar clientKey = 'THcfYQ7sGW3jRdq';\nvar clientSecret = 'dexXLYNwdhezlxk';\n\n// Base64 encoding\nvar auth = 'Basic ' + new Buffer(clientKey + ':' + clientSecret).toString('base64');\n\n// API request\nrequest(\n    {\n        url : 'http://127.0.0.1:9034/api/getToken',\n        headers : {\n            \"Authorization\" : auth\n        }\n    },\n    function (error, response, body) {\n    \tbody = JSON.parse(body);\n        console.log(body.token);\n    }\n);",
        "type": "node"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ClientID",
            "description": "<p>Generated application's API credentials</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ClientSecret",
            "description": "<p>Generated application's API credentials</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Bearer Token, required for further API calls</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "BadAuthorizationHeader",
            "description": "<p>There is an invalid or no authorization header</p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "AuthenticationFailed",
            "description": "<p>Couldn't match clientID/clientSecret with database</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "1_Authentication",
    "name": "GetApiGettoken"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/website/main.js",
    "group": "_home_magikbyte_NetBeansProjects_newmips_workspace_1_api_doc_website_main_js",
    "groupTitle": "_home_magikbyte_NetBeansProjects_newmips_workspace_1_api_doc_website_main_js",
    "name": ""
  },
  {
    "type": "delete",
    "url": "/api/action/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>action</code> with <code>id</code></p>",
    "group": "e_action",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of action to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No action with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Action",
    "name": "DeleteApiActionIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/action/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>action</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_action",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the action to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "media"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No action with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Action",
    "name": "GetApiActionIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/action/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>action</code> with <code>id</code></p>",
    "group": "e_action",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of action to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "action",
            "description": "<p>Object of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "action.id",
            "description": "<p><code>id</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "action.version",
            "description": "<p><code>version</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "action.f_order",
            "description": "<p><code>f_order</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "action.f_execution",
            "description": "<p><code>f_execution</code> of action</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No action with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Action",
    "name": "GetApiActionIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/action?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>action</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_action",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>List of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "actions.id",
            "description": "<p><code>id</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "actions.version",
            "description": "<p><code>version</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "actions.f_order",
            "description": "<p><code>f_order</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "actions.f_execution",
            "description": "<p><code>f_execution</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for action</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Action",
    "name": "GetApiActionTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/action/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>action</code> using values defined in request's <code>body</code></p>",
    "group": "e_action",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_order",
            "description": "<p><code>f_order</code> of action</p>"
          },
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_execution",
            "description": "<p><code>f_execution</code> of action</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_media",
            "description": "<p><code>id</code> of entity media to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "action",
            "description": "<p>Created action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "action.id",
            "description": "<p><code>id</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "action.f_order",
            "description": "<p><code>f_order</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "action.f_execution",
            "description": "<p><code>f_execution</code> of action</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create action</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Action",
    "name": "PostApiActionTokenToken"
  },
  {
    "type": "put",
    "url": "/api/action/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>action</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_action",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the action to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_order",
            "description": "<p>New value of <code>f_order</code> for action</p>"
          },
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_execution",
            "description": "<p>New value of <code>f_execution</code> for action</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_media",
            "description": "<p><code>id</code> of entity media to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "action",
            "description": "<p>Updated action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "action.id",
            "description": "<p><code>id</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "action.f_order",
            "description": "<p><code>f_order</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "action.f_execution",
            "description": "<p><code>f_execution</code> of action</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No action with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update action</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Action",
    "name": "PutApiActionIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/alert/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>alert</code> with <code>id</code></p>",
    "group": "e_alert",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of alert to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No alert with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Alert",
    "name": "DeleteApiAlertIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/alert/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>alert</code> with <code>id</code></p>",
    "group": "e_alert",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of alert to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "alert",
            "description": "<p>Object of alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "alert.id",
            "description": "<p><code>id</code> of alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "alert.version",
            "description": "<p><code>version</code> of alert</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No alert with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Alert",
    "name": "GetApiAlertIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/alert?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>alert</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_alert",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "alerts",
            "description": "<p>List of alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "alerts.id",
            "description": "<p><code>id</code> of alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "alerts.version",
            "description": "<p><code>version</code> of alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for alert</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Alert",
    "name": "GetApiAlertTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/alert/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>alert</code> using values defined in request's <code>body</code></p>",
    "group": "e_alert",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "alert",
            "description": "<p>Created alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "alert.id",
            "description": "<p><code>id</code> of alert</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create alert</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Alert",
    "name": "PostApiAlertTokenToken",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/api/alert/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>alert</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_alert",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the alert to update</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "alert",
            "description": "<p>Updated alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "alert.id",
            "description": "<p><code>id</code> of alert</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No alert with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update alert</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Alert",
    "name": "PutApiAlertIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/application/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>application</code> with <code>id</code></p>",
    "group": "e_application",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of application to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No application with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application",
    "name": "DeleteApiApplicationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/application/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>application</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_application",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the application to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "history_e_application_s_status",
              "status",
              "application_status_history",
              "application_alert"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No application with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application",
    "name": "GetApiApplicationIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/application/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>application</code> with <code>id</code></p>",
    "group": "e_application",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of application to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application",
            "description": "<p>Object of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.id",
            "description": "<p><code>id</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.version",
            "description": "<p><code>version</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_name",
            "description": "<p><code>f_name</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "application.f_description",
            "description": "<p><code>f_description</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_ip",
            "description": "<p><code>f_ip</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_url",
            "description": "<p><code>f_url</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Virtual",
            "optional": false,
            "field": "application.s_status",
            "description": "<p><code>s_status</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_port",
            "description": "<p><code>f_port</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_file",
            "description": "<p><code>f_file</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_check_status",
            "description": "<p><code>f_check_status</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_interval",
            "description": "<p><code>f_interval</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_is_alive",
            "description": "<p><code>f_is_alive</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_email_alert",
            "description": "<p><code>f_email_alert</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_sms_alert",
            "description": "<p><code>f_sms_alert</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_notification_alert",
            "description": "<p><code>f_notification_alert</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_email_alert_period",
            "description": "<p><code>f_email_alert_period</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_sms_alert_period",
            "description": "<p><code>f_sms_alert_period</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_notification_alert_period",
            "description": "<p><code>f_notification_alert_period</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_email",
            "description": "<p><code>f_email</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_phone",
            "description": "<p><code>f_phone</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_add_ping_log_in_db",
            "description": "<p><code>f_add_ping_log_in_db</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_interval_db_log_store",
            "description": "<p><code>f_interval_db_log_store</code> of application</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No application with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application",
    "name": "GetApiApplicationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/application?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>application</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_application",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "applications",
            "description": "<p>List of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "applications.id",
            "description": "<p><code>id</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "applications.version",
            "description": "<p><code>version</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applications.f_name",
            "description": "<p><code>f_name</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "applications.f_description",
            "description": "<p><code>f_description</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applications.f_ip",
            "description": "<p><code>f_ip</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applications.f_url",
            "description": "<p><code>f_url</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Virtual",
            "optional": false,
            "field": "applications.s_status",
            "description": "<p><code>s_status</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "applications.f_port",
            "description": "<p><code>f_port</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applications.f_file",
            "description": "<p><code>f_file</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "applications.f_check_status",
            "description": "<p><code>f_check_status</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "applications.f_interval",
            "description": "<p><code>f_interval</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "applications.f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "applications.f_is_alive",
            "description": "<p><code>f_is_alive</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "applications.f_email_alert",
            "description": "<p><code>f_email_alert</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "applications.f_sms_alert",
            "description": "<p><code>f_sms_alert</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "applications.f_notification_alert",
            "description": "<p><code>f_notification_alert</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "applications.f_email_alert_period",
            "description": "<p><code>f_email_alert_period</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "applications.f_sms_alert_period",
            "description": "<p><code>f_sms_alert_period</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "applications.f_notification_alert_period",
            "description": "<p><code>f_notification_alert_period</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applications.f_email",
            "description": "<p><code>f_email</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applications.f_phone",
            "description": "<p><code>f_phone</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "applications.f_add_ping_log_in_db",
            "description": "<p><code>f_add_ping_log_in_db</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "applications.f_interval_db_log_store",
            "description": "<p><code>f_interval_db_log_store</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for application</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application",
    "name": "GetApiApplicationTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/application/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>application</code> using values defined in request's <code>body</code></p>",
    "group": "e_application",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_description",
            "description": "<p><code>f_description</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_ip",
            "description": "<p><code>f_ip</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_url",
            "description": "<p><code>f_url</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Virtual",
            "optional": true,
            "field": "s_status",
            "description": "<p><code>s_status</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_port",
            "description": "<p><code>f_port</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_file",
            "description": "<p><code>f_file</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_check_status",
            "description": "<p><code>f_check_status</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_interval",
            "description": "<p><code>f_interval</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_is_alive",
            "description": "<p><code>f_is_alive</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_email_alert",
            "description": "<p><code>f_email_alert</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_sms_alert",
            "description": "<p><code>f_sms_alert</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_notification_alert",
            "description": "<p><code>f_notification_alert</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_email_alert_period",
            "description": "<p><code>f_email_alert_period</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_sms_alert_period",
            "description": "<p><code>f_sms_alert_period</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_notification_alert_period",
            "description": "<p><code>f_notification_alert_period</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_email",
            "description": "<p><code>f_email</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_phone",
            "description": "<p><code>f_phone</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_add_ping_log_in_db",
            "description": "<p><code>f_add_ping_log_in_db</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_interval_db_log_store",
            "description": "<p><code>f_interval_db_log_store</code> of application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_application_history_status",
            "description": "<p><code>id</code> of entity history_e_application_s_status to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_status_status",
            "description": "<p><code>id</code> of entity status to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_application",
            "description": "<p><code>id</code> of entity application_status_history to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application",
            "description": "<p>Created application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.id",
            "description": "<p><code>id</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_name",
            "description": "<p><code>f_name</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "application.f_description",
            "description": "<p><code>f_description</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_ip",
            "description": "<p><code>f_ip</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_url",
            "description": "<p><code>f_url</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Virtual",
            "optional": false,
            "field": "application.s_status",
            "description": "<p><code>s_status</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_port",
            "description": "<p><code>f_port</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_file",
            "description": "<p><code>f_file</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_check_status",
            "description": "<p><code>f_check_status</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_interval",
            "description": "<p><code>f_interval</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_is_alive",
            "description": "<p><code>f_is_alive</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_email_alert",
            "description": "<p><code>f_email_alert</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_sms_alert",
            "description": "<p><code>f_sms_alert</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_notification_alert",
            "description": "<p><code>f_notification_alert</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_email_alert_period",
            "description": "<p><code>f_email_alert_period</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_sms_alert_period",
            "description": "<p><code>f_sms_alert_period</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_notification_alert_period",
            "description": "<p><code>f_notification_alert_period</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_email",
            "description": "<p><code>f_email</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_phone",
            "description": "<p><code>f_phone</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_add_ping_log_in_db",
            "description": "<p><code>f_add_ping_log_in_db</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_interval_db_log_store",
            "description": "<p><code>f_interval_db_log_store</code> of application</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create application</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application",
    "name": "PostApiApplicationTokenToken"
  },
  {
    "type": "put",
    "url": "/api/application/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>application</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_application",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the application to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_description",
            "description": "<p>New value of <code>f_description</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_ip",
            "description": "<p>New value of <code>f_ip</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_url",
            "description": "<p>New value of <code>f_url</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Virtual",
            "optional": true,
            "field": "s_status",
            "description": "<p>New value of <code>s_status</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_port",
            "description": "<p>New value of <code>f_port</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_file",
            "description": "<p>New value of <code>f_file</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_check_status",
            "description": "<p>New value of <code>f_check_status</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_interval",
            "description": "<p>New value of <code>f_interval</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_alert_pings_failed",
            "description": "<p>New value of <code>f_alert_pings_failed</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_is_alive",
            "description": "<p>New value of <code>f_is_alive</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_email_alert",
            "description": "<p>New value of <code>f_email_alert</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_sms_alert",
            "description": "<p>New value of <code>f_sms_alert</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_notification_alert",
            "description": "<p>New value of <code>f_notification_alert</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_email_alert_period",
            "description": "<p>New value of <code>f_email_alert_period</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_sms_alert_period",
            "description": "<p>New value of <code>f_sms_alert_period</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_notification_alert_period",
            "description": "<p>New value of <code>f_notification_alert_period</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_email",
            "description": "<p>New value of <code>f_email</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_phone",
            "description": "<p>New value of <code>f_phone</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_add_ping_log_in_db",
            "description": "<p>New value of <code>f_add_ping_log_in_db</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_interval_db_log_store",
            "description": "<p>New value of <code>f_interval_db_log_store</code> for application</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_application_history_status",
            "description": "<p><code>id</code> of entity history_e_application_s_status to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_status_status",
            "description": "<p><code>id</code> of entity status to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_application",
            "description": "<p><code>id</code> of entity application_status_history to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application",
            "description": "<p>Updated application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.id",
            "description": "<p><code>id</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_name",
            "description": "<p><code>f_name</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "application.f_description",
            "description": "<p><code>f_description</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_ip",
            "description": "<p><code>f_ip</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_url",
            "description": "<p><code>f_url</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Virtual",
            "optional": false,
            "field": "application.s_status",
            "description": "<p><code>s_status</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_port",
            "description": "<p><code>f_port</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_file",
            "description": "<p><code>f_file</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_check_status",
            "description": "<p><code>f_check_status</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_interval",
            "description": "<p><code>f_interval</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_is_alive",
            "description": "<p><code>f_is_alive</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_email_alert",
            "description": "<p><code>f_email_alert</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_sms_alert",
            "description": "<p><code>f_sms_alert</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_notification_alert",
            "description": "<p><code>f_notification_alert</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_email_alert_period",
            "description": "<p><code>f_email_alert_period</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_sms_alert_period",
            "description": "<p><code>f_sms_alert_period</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_notification_alert_period",
            "description": "<p><code>f_notification_alert_period</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_email",
            "description": "<p><code>f_email</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.f_phone",
            "description": "<p><code>f_phone</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application.f_add_ping_log_in_db",
            "description": "<p><code>f_add_ping_log_in_db</code> of application</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application.f_interval_db_log_store",
            "description": "<p><code>f_interval_db_log_store</code> of application</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No application with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update application</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application",
    "name": "PutApiApplicationIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/application_alert/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>application_alert</code> with <code>id</code></p>",
    "group": "e_application_alert",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of application_alert to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No application_alert with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application alert",
    "name": "DeleteApiApplication_alertIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/application_alert/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>application_alert</code> with <code>id</code></p>",
    "group": "e_application_alert",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of application_alert to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application_alert",
            "description": "<p>Object of application_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_alert.id",
            "description": "<p><code>id</code> of application_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_alert.version",
            "description": "<p><code>version</code> of application_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "application_alert.f_type",
            "description": "<p><code>f_type</code> of application_alert</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No application_alert with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application alert",
    "name": "GetApiApplication_alertIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/application_alert?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>application_alert</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_application_alert",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "application_alerts",
            "description": "<p>List of application_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_alerts.id",
            "description": "<p><code>id</code> of application_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_alerts.version",
            "description": "<p><code>version</code> of application_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "application_alerts.f_type",
            "description": "<p><code>f_type</code> of application_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for application_alert</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application alert",
    "name": "GetApiApplication_alertTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/application_alert/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>application_alert</code> using values defined in request's <code>body</code></p>",
    "group": "e_application_alert",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_type",
            "description": "<p><code>f_type</code> of application_alert</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application_alert",
            "description": "<p>Created application_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_alert.id",
            "description": "<p><code>id</code> of application_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "application_alert.f_type",
            "description": "<p><code>f_type</code> of application_alert</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create application_alert</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application alert",
    "name": "PostApiApplication_alertTokenToken"
  },
  {
    "type": "put",
    "url": "/api/application_alert/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>application_alert</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_application_alert",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the application_alert to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_type",
            "description": "<p>New value of <code>f_type</code> for application_alert</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application_alert",
            "description": "<p>Updated application_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_alert.id",
            "description": "<p><code>id</code> of application_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "application_alert.f_type",
            "description": "<p><code>f_type</code> of application_alert</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No application_alert with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update application_alert</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application alert",
    "name": "PutApiApplication_alertIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/application_config/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>application_config</code> with <code>id</code></p>",
    "group": "e_application_config",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of application_config to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No application_config with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application config",
    "name": "DeleteApiApplication_configIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/application_config/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>application_config</code> with <code>id</code></p>",
    "group": "e_application_config",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of application_config to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application_config",
            "description": "<p>Object of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_config.id",
            "description": "<p><code>id</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_config.version",
            "description": "<p><code>version</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application_config.f_check_status",
            "description": "<p><code>f_check_status</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_config.f_interval",
            "description": "<p><code>f_interval</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_config.f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of application_config</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No application_config with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application config",
    "name": "GetApiApplication_configIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/application_config?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>application_config</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_application_config",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "application_configs",
            "description": "<p>List of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_configs.id",
            "description": "<p><code>id</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_configs.version",
            "description": "<p><code>version</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application_configs.f_check_status",
            "description": "<p><code>f_check_status</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_configs.f_interval",
            "description": "<p><code>f_interval</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_configs.f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for application_config</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application config",
    "name": "GetApiApplication_configTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/application_config/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>application_config</code> using values defined in request's <code>body</code></p>",
    "group": "e_application_config",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_check_status",
            "description": "<p><code>f_check_status</code> of application_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_interval",
            "description": "<p><code>f_interval</code> of application_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of application_config</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application_config",
            "description": "<p>Created application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_config.id",
            "description": "<p><code>id</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application_config.f_check_status",
            "description": "<p><code>f_check_status</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_config.f_interval",
            "description": "<p><code>f_interval</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_config.f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of application_config</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create application_config</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application config",
    "name": "PostApiApplication_configTokenToken"
  },
  {
    "type": "put",
    "url": "/api/application_config/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>application_config</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_application_config",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the application_config to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_check_status",
            "description": "<p>New value of <code>f_check_status</code> for application_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_interval",
            "description": "<p>New value of <code>f_interval</code> for application_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_alert_pings_failed",
            "description": "<p>New value of <code>f_alert_pings_failed</code> for application_config</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application_config",
            "description": "<p>Updated application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_config.id",
            "description": "<p><code>id</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application_config.f_check_status",
            "description": "<p><code>f_check_status</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_config.f_interval",
            "description": "<p><code>f_interval</code> of application_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_config.f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of application_config</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No application_config with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update application_config</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application config",
    "name": "PutApiApplication_configIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/application_status_history/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>application_status_history</code> with <code>id</code></p>",
    "group": "e_application_status_history",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of application_status_history to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No application_status_history with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application status history",
    "name": "DeleteApiApplication_status_historyIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/application_status_history/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>application_status_history</code> with <code>id</code></p>",
    "group": "e_application_status_history",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of application_status_history to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application_status_history",
            "description": "<p>Object of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_status_history.id",
            "description": "<p><code>id</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_status_history.version",
            "description": "<p><code>version</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application_status_history.f_is_alive",
            "description": "<p><code>f_is_alive</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "application_status_history.f_comment",
            "description": "<p><code>f_comment</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application_status_history.f_time",
            "description": "<p><code>f_time</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application_status_history.f_min",
            "description": "<p><code>f_min</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application_status_history.f_max",
            "description": "<p><code>f_max</code> of application_status_history</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No application_status_history with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application status history",
    "name": "GetApiApplication_status_historyIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/application_status_history?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>application_status_history</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_application_status_history",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "application_status_historys",
            "description": "<p>List of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_status_historys.id",
            "description": "<p><code>id</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_status_historys.version",
            "description": "<p><code>version</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application_status_historys.f_is_alive",
            "description": "<p><code>f_is_alive</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "application_status_historys.f_comment",
            "description": "<p><code>f_comment</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application_status_historys.f_time",
            "description": "<p><code>f_time</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application_status_historys.f_min",
            "description": "<p><code>f_min</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application_status_historys.f_max",
            "description": "<p><code>f_max</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for application_status_history</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application status history",
    "name": "GetApiApplication_status_historyTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/application_status_history/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>application_status_history</code> using values defined in request's <code>body</code></p>",
    "group": "e_application_status_history",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_is_alive",
            "description": "<p><code>f_is_alive</code> of application_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_comment",
            "description": "<p><code>f_comment</code> of application_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_time",
            "description": "<p><code>f_time</code> of application_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_min",
            "description": "<p><code>f_min</code> of application_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_max",
            "description": "<p><code>f_max</code> of application_status_history</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application_status_history",
            "description": "<p>Created application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_status_history.id",
            "description": "<p><code>id</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application_status_history.f_is_alive",
            "description": "<p><code>f_is_alive</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "application_status_history.f_comment",
            "description": "<p><code>f_comment</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application_status_history.f_time",
            "description": "<p><code>f_time</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application_status_history.f_min",
            "description": "<p><code>f_min</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application_status_history.f_max",
            "description": "<p><code>f_max</code> of application_status_history</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create application_status_history</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application status history",
    "name": "PostApiApplication_status_historyTokenToken"
  },
  {
    "type": "put",
    "url": "/api/application_status_history/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>application_status_history</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_application_status_history",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the application_status_history to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_is_alive",
            "description": "<p>New value of <code>f_is_alive</code> for application_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_comment",
            "description": "<p>New value of <code>f_comment</code> for application_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_time",
            "description": "<p>New value of <code>f_time</code> for application_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_min",
            "description": "<p>New value of <code>f_min</code> for application_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_max",
            "description": "<p>New value of <code>f_max</code> for application_status_history</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application_status_history",
            "description": "<p>Updated application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "application_status_history.id",
            "description": "<p><code>id</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "application_status_history.f_is_alive",
            "description": "<p><code>f_is_alive</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "application_status_history.f_comment",
            "description": "<p><code>f_comment</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application_status_history.f_time",
            "description": "<p><code>f_time</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application_status_history.f_min",
            "description": "<p><code>f_min</code> of application_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application_status_history.f_max",
            "description": "<p><code>f_max</code> of application_status_history</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No application_status_history with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update application_status_history</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Application status history",
    "name": "PutApiApplication_status_historyIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/group/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>group</code> with <code>id</code></p>",
    "group": "e_group",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of group to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No group with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "DeleteApiGroupIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/group/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>group</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_group",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the group to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "user"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No group with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "GetApiGroupIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/group/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>group</code> with <code>id</code></p>",
    "group": "e_group",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of group to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>Object of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "group.id",
            "description": "<p><code>id</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "group.version",
            "description": "<p><code>version</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group.f_label",
            "description": "<p><code>f_label</code> of group</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No group with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "GetApiGroupIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/group?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>group</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_group",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>List of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "groups.id",
            "description": "<p><code>id</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "groups.version",
            "description": "<p><code>version</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "groups.f_label",
            "description": "<p><code>f_label</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for group</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "GetApiGroupTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/group/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>group</code> using values defined in request's <code>body</code></p>",
    "group": "e_group",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_label",
            "description": "<p><code>f_label</code> of group</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>Created group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "group.id",
            "description": "<p><code>id</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group.f_label",
            "description": "<p><code>f_label</code> of group</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create group</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "PostApiGroupTokenToken"
  },
  {
    "type": "put",
    "url": "/api/group/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>group</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_group",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the group to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_label",
            "description": "<p>New value of <code>f_label</code> for group</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>Updated group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "group.id",
            "description": "<p><code>id</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group.f_label",
            "description": "<p><code>f_label</code> of group</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No group with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update group</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "PutApiGroupIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/history/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>history</code> with <code>id</code></p>",
    "group": "e_history",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of history to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No history with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "History",
    "name": "DeleteApiHistoryIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/history/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>history</code> with <code>id</code></p>",
    "group": "e_history",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of history to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "history",
            "description": "<p>Object of history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "history.id",
            "description": "<p><code>id</code> of history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "history.version",
            "description": "<p><code>version</code> of history</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No history with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "History",
    "name": "GetApiHistoryIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/history?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>history</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_history",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "historys",
            "description": "<p>List of history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "historys.id",
            "description": "<p><code>id</code> of history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "historys.version",
            "description": "<p><code>version</code> of history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for history</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "History",
    "name": "GetApiHistoryTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/history/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>history</code> using values defined in request's <code>body</code></p>",
    "group": "e_history",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "history",
            "description": "<p>Created history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "history.id",
            "description": "<p><code>id</code> of history</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create history</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "History",
    "name": "PostApiHistoryTokenToken",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/api/history/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>history</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_history",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the history to update</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "history",
            "description": "<p>Updated history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "history.id",
            "description": "<p><code>id</code> of history</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No history with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update history</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "History",
    "name": "PutApiHistoryIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/inline_help/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>inline_help</code> with <code>id</code></p>",
    "group": "e_inline_help",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of inline_help to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No inline_help with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Inline help",
    "name": "DeleteApiInline_helpIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/inline_help/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>inline_help</code> with <code>id</code></p>",
    "group": "e_inline_help",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of inline_help to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "inline_help",
            "description": "<p>Object of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "inline_help.id",
            "description": "<p><code>id</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "inline_help.version",
            "description": "<p><code>version</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_help.f_entity",
            "description": "<p><code>f_entity</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_help.f_field",
            "description": "<p><code>f_field</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "inline_help.f_content",
            "description": "<p><code>f_content</code> of inline_help</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No inline_help with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Inline help",
    "name": "GetApiInline_helpIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/inline_help?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>inline_help</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_inline_help",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "inline_helps",
            "description": "<p>List of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "inline_helps.id",
            "description": "<p><code>id</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "inline_helps.version",
            "description": "<p><code>version</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_helps.f_entity",
            "description": "<p><code>f_entity</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_helps.f_field",
            "description": "<p><code>f_field</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "inline_helps.f_content",
            "description": "<p><code>f_content</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for inline_help</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Inline help",
    "name": "GetApiInline_helpTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/inline_help/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>inline_help</code> using values defined in request's <code>body</code></p>",
    "group": "e_inline_help",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_entity",
            "description": "<p><code>f_entity</code> of inline_help</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_field",
            "description": "<p><code>f_field</code> of inline_help</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_content",
            "description": "<p><code>f_content</code> of inline_help</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "inline_help",
            "description": "<p>Created inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "inline_help.id",
            "description": "<p><code>id</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_help.f_entity",
            "description": "<p><code>f_entity</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_help.f_field",
            "description": "<p><code>f_field</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "inline_help.f_content",
            "description": "<p><code>f_content</code> of inline_help</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create inline_help</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Inline help",
    "name": "PostApiInline_helpTokenToken"
  },
  {
    "type": "put",
    "url": "/api/inline_help/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>inline_help</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_inline_help",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the inline_help to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_entity",
            "description": "<p>New value of <code>f_entity</code> for inline_help</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_field",
            "description": "<p>New value of <code>f_field</code> for inline_help</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_content",
            "description": "<p>New value of <code>f_content</code> for inline_help</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "inline_help",
            "description": "<p>Updated inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "inline_help.id",
            "description": "<p><code>id</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_help.f_entity",
            "description": "<p><code>f_entity</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_help.f_field",
            "description": "<p><code>f_field</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "inline_help.f_content",
            "description": "<p><code>f_content</code> of inline_help</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No inline_help with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update inline_help</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Inline help",
    "name": "PutApiInline_helpIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/media/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>media</code> with <code>id</code></p>",
    "group": "e_media",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of media to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media",
    "name": "DeleteApiMediaIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>media</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_media",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the media to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "media_mail",
              "media_notification",
              "media_sms"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media",
    "name": "GetApiMediaIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/media/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>media</code> with <code>id</code></p>",
    "group": "e_media",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of media to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Object of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media.id",
            "description": "<p><code>id</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media.version",
            "description": "<p><code>version</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "media.f_type",
            "description": "<p><code>f_type</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media.f_name",
            "description": "<p><code>f_name</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media.f_target_entity",
            "description": "<p><code>f_target_entity</code> of media</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media",
    "name": "GetApiMediaIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>media</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_media",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "medias",
            "description": "<p>List of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "medias.id",
            "description": "<p><code>id</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "medias.version",
            "description": "<p><code>version</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "medias.f_type",
            "description": "<p><code>f_type</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medias.f_name",
            "description": "<p><code>f_name</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medias.f_target_entity",
            "description": "<p><code>f_target_entity</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for media</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media",
    "name": "GetApiMediaTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/media/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>media</code> using values defined in request's <code>body</code></p>",
    "group": "e_media",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_type",
            "description": "<p><code>f_type</code> of media</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of media</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_target_entity",
            "description": "<p><code>f_target_entity</code> of media</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_mail",
            "description": "<p><code>id</code> of entity media_mail to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_notification",
            "description": "<p><code>id</code> of entity media_notification to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_sms",
            "description": "<p><code>id</code> of entity media_sms to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Created media</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media.id",
            "description": "<p><code>id</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "media.f_type",
            "description": "<p><code>f_type</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media.f_name",
            "description": "<p><code>f_name</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media.f_target_entity",
            "description": "<p><code>f_target_entity</code> of media</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create media</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media",
    "name": "PostApiMediaTokenToken"
  },
  {
    "type": "put",
    "url": "/api/media/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>media</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_media",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the media to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_type",
            "description": "<p>New value of <code>f_type</code> for media</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for media</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_target_entity",
            "description": "<p>New value of <code>f_target_entity</code> for media</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_mail",
            "description": "<p><code>id</code> of entity media_mail to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_notification",
            "description": "<p><code>id</code> of entity media_notification to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_sms",
            "description": "<p><code>id</code> of entity media_sms to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Updated media</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media.id",
            "description": "<p><code>id</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "media.f_type",
            "description": "<p><code>f_type</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media.f_name",
            "description": "<p><code>f_name</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media.f_target_entity",
            "description": "<p><code>f_target_entity</code> of media</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update media</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media",
    "name": "PutApiMediaIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/media_mail/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>media_mail</code> with <code>id</code></p>",
    "group": "e_media_mail",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of media_mail to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_mail with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media mail",
    "name": "DeleteApiMedia_mailIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media_mail/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>media_mail</code> with <code>id</code></p>",
    "group": "e_media_mail",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of media_mail to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_mail",
            "description": "<p>Object of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_mail.id",
            "description": "<p><code>id</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_mail.version",
            "description": "<p><code>version</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_to",
            "description": "<p><code>f_to</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_cc",
            "description": "<p><code>f_cc</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_cci",
            "description": "<p><code>f_cci</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_from",
            "description": "<p><code>f_from</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_subject",
            "description": "<p><code>f_subject</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_mail.f_content",
            "description": "<p><code>f_content</code> of media_mail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_mail with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media mail",
    "name": "GetApiMedia_mailIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media_mail?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>media_mail</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_media_mail",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "media_mails",
            "description": "<p>List of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_mails.id",
            "description": "<p><code>id</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_mails.version",
            "description": "<p><code>version</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mails.f_to",
            "description": "<p><code>f_to</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mails.f_cc",
            "description": "<p><code>f_cc</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mails.f_cci",
            "description": "<p><code>f_cci</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mails.f_from",
            "description": "<p><code>f_from</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mails.f_subject",
            "description": "<p><code>f_subject</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_mails.f_content",
            "description": "<p><code>f_content</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for media_mail</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media mail",
    "name": "GetApiMedia_mailTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/media_mail/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>media_mail</code> using values defined in request's <code>body</code></p>",
    "group": "e_media_mail",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_to",
            "description": "<p><code>f_to</code> of media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_cc",
            "description": "<p><code>f_cc</code> of media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_cci",
            "description": "<p><code>f_cci</code> of media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_from",
            "description": "<p><code>f_from</code> of media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_subject",
            "description": "<p><code>f_subject</code> of media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_content",
            "description": "<p><code>f_content</code> of media_mail</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_mail",
            "description": "<p>Created media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_mail.id",
            "description": "<p><code>id</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_to",
            "description": "<p><code>f_to</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_cc",
            "description": "<p><code>f_cc</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_cci",
            "description": "<p><code>f_cci</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_from",
            "description": "<p><code>f_from</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_subject",
            "description": "<p><code>f_subject</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_mail.f_content",
            "description": "<p><code>f_content</code> of media_mail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create media_mail</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media mail",
    "name": "PostApiMedia_mailTokenToken"
  },
  {
    "type": "put",
    "url": "/api/media_mail/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>media_mail</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_media_mail",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the media_mail to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_to",
            "description": "<p>New value of <code>f_to</code> for media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_cc",
            "description": "<p>New value of <code>f_cc</code> for media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_cci",
            "description": "<p>New value of <code>f_cci</code> for media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_from",
            "description": "<p>New value of <code>f_from</code> for media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_subject",
            "description": "<p>New value of <code>f_subject</code> for media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_content",
            "description": "<p>New value of <code>f_content</code> for media_mail</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_mail",
            "description": "<p>Updated media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_mail.id",
            "description": "<p><code>id</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_to",
            "description": "<p><code>f_to</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_cc",
            "description": "<p><code>f_cc</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_cci",
            "description": "<p><code>f_cci</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_from",
            "description": "<p><code>f_from</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_subject",
            "description": "<p><code>f_subject</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_mail.f_content",
            "description": "<p><code>f_content</code> of media_mail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_mail with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update media_mail</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media mail",
    "name": "PutApiMedia_mailIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/media_notification/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>media_notification</code> with <code>id</code></p>",
    "group": "e_media_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of media_notification to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_notification with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media notification",
    "name": "DeleteApiMedia_notificationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media_notification/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>media_notification</code> with <code>id</code></p>",
    "group": "e_media_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of media_notification to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_notification",
            "description": "<p>Object of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_notification.id",
            "description": "<p><code>id</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_notification.version",
            "description": "<p><code>version</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_title",
            "description": "<p><code>f_title</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_description",
            "description": "<p><code>f_description</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_icon",
            "description": "<p><code>f_icon</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_color",
            "description": "<p><code>f_color</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_targets",
            "description": "<p><code>f_targets</code> of media_notification</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_notification with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media notification",
    "name": "GetApiMedia_notificationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media_notification?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>media_notification</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_media_notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "media_notifications",
            "description": "<p>List of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_notifications.id",
            "description": "<p><code>id</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_notifications.version",
            "description": "<p><code>version</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notifications.f_title",
            "description": "<p><code>f_title</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notifications.f_description",
            "description": "<p><code>f_description</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notifications.f_icon",
            "description": "<p><code>f_icon</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notifications.f_color",
            "description": "<p><code>f_color</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notifications.f_targets",
            "description": "<p><code>f_targets</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for media_notification</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media notification",
    "name": "GetApiMedia_notificationTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/media_notification/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>media_notification</code> using values defined in request's <code>body</code></p>",
    "group": "e_media_notification",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_title",
            "description": "<p><code>f_title</code> of media_notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_description",
            "description": "<p><code>f_description</code> of media_notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_icon",
            "description": "<p><code>f_icon</code> of media_notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_color",
            "description": "<p><code>f_color</code> of media_notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_targets",
            "description": "<p><code>f_targets</code> of media_notification</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_notification",
            "description": "<p>Created media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_notification.id",
            "description": "<p><code>id</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_title",
            "description": "<p><code>f_title</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_description",
            "description": "<p><code>f_description</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_icon",
            "description": "<p><code>f_icon</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_color",
            "description": "<p><code>f_color</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_targets",
            "description": "<p><code>f_targets</code> of media_notification</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create media_notification</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media notification",
    "name": "PostApiMedia_notificationTokenToken"
  },
  {
    "type": "put",
    "url": "/api/media_notification/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>media_notification</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_media_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the media_notification to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_title",
            "description": "<p>New value of <code>f_title</code> for media_notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_description",
            "description": "<p>New value of <code>f_description</code> for media_notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_icon",
            "description": "<p>New value of <code>f_icon</code> for media_notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_color",
            "description": "<p>New value of <code>f_color</code> for media_notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_targets",
            "description": "<p>New value of <code>f_targets</code> for media_notification</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_notification",
            "description": "<p>Updated media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_notification.id",
            "description": "<p><code>id</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_title",
            "description": "<p><code>f_title</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_description",
            "description": "<p><code>f_description</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_icon",
            "description": "<p><code>f_icon</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_color",
            "description": "<p><code>f_color</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_targets",
            "description": "<p><code>f_targets</code> of media_notification</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_notification with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update media_notification</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media notification",
    "name": "PutApiMedia_notificationIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/media_sms/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>media_sms</code> with <code>id</code></p>",
    "group": "e_media_sms",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of media_sms to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_sms with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media sms",
    "name": "DeleteApiMedia_smsIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media_sms/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>media_sms</code> with <code>id</code></p>",
    "group": "e_media_sms",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of media_sms to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_sms",
            "description": "<p>Object of media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_sms.id",
            "description": "<p><code>id</code> of media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_sms.version",
            "description": "<p><code>version</code> of media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_sms.f_message",
            "description": "<p><code>f_message</code> of media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_sms.f_phone_numbers",
            "description": "<p><code>f_phone_numbers</code> of media_sms</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_sms with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media sms",
    "name": "GetApiMedia_smsIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media_sms?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>media_sms</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_media_sms",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "media_smss",
            "description": "<p>List of media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_smss.id",
            "description": "<p><code>id</code> of media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_smss.version",
            "description": "<p><code>version</code> of media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_smss.f_message",
            "description": "<p><code>f_message</code> of media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_smss.f_phone_numbers",
            "description": "<p><code>f_phone_numbers</code> of media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for media_sms</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media sms",
    "name": "GetApiMedia_smsTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/media_sms/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>media_sms</code> using values defined in request's <code>body</code></p>",
    "group": "e_media_sms",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_message",
            "description": "<p><code>f_message</code> of media_sms</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_phone_numbers",
            "description": "<p><code>f_phone_numbers</code> of media_sms</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_sms",
            "description": "<p>Created media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_sms.id",
            "description": "<p><code>id</code> of media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_sms.f_message",
            "description": "<p><code>f_message</code> of media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_sms.f_phone_numbers",
            "description": "<p><code>f_phone_numbers</code> of media_sms</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create media_sms</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media sms",
    "name": "PostApiMedia_smsTokenToken"
  },
  {
    "type": "put",
    "url": "/api/media_sms/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>media_sms</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_media_sms",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the media_sms to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_message",
            "description": "<p>New value of <code>f_message</code> for media_sms</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_phone_numbers",
            "description": "<p>New value of <code>f_phone_numbers</code> for media_sms</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_sms",
            "description": "<p>Updated media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_sms.id",
            "description": "<p><code>id</code> of media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_sms.f_message",
            "description": "<p><code>f_message</code> of media_sms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_sms.f_phone_numbers",
            "description": "<p><code>f_phone_numbers</code> of media_sms</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_sms with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update media_sms</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Media sms",
    "name": "PutApiMedia_smsIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/notification/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>notification</code> with <code>id</code></p>",
    "group": "e_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of notification to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No notification with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Notification",
    "name": "DeleteApiNotificationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/notification/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>notification</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the notification to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "user"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No notification with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Notification",
    "name": "GetApiNotificationIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/notification/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>notification</code> with <code>id</code></p>",
    "group": "e_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of notification to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification",
            "description": "<p>Object of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notification.id",
            "description": "<p><code>id</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notification.version",
            "description": "<p><code>version</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_title",
            "description": "<p><code>f_title</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_description",
            "description": "<p><code>f_description</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_url",
            "description": "<p><code>f_url</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_color",
            "description": "<p><code>f_color</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_icon",
            "description": "<p><code>f_icon</code> of notification</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No notification with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Notification",
    "name": "GetApiNotificationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/notification?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>notification</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "notifications",
            "description": "<p>List of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notifications.id",
            "description": "<p><code>id</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notifications.version",
            "description": "<p><code>version</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifications.f_title",
            "description": "<p><code>f_title</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifications.f_description",
            "description": "<p><code>f_description</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifications.f_url",
            "description": "<p><code>f_url</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifications.f_color",
            "description": "<p><code>f_color</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifications.f_icon",
            "description": "<p><code>f_icon</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for notification</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Notification",
    "name": "GetApiNotificationTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/notification/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>notification</code> using values defined in request's <code>body</code></p>",
    "group": "e_notification",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_title",
            "description": "<p><code>f_title</code> of notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_description",
            "description": "<p><code>f_description</code> of notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_url",
            "description": "<p><code>f_url</code> of notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_color",
            "description": "<p><code>f_color</code> of notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_icon",
            "description": "<p><code>f_icon</code> of notification</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification",
            "description": "<p>Created notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notification.id",
            "description": "<p><code>id</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_title",
            "description": "<p><code>f_title</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_description",
            "description": "<p><code>f_description</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_url",
            "description": "<p><code>f_url</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_color",
            "description": "<p><code>f_color</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_icon",
            "description": "<p><code>f_icon</code> of notification</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create notification</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Notification",
    "name": "PostApiNotificationTokenToken"
  },
  {
    "type": "put",
    "url": "/api/notification/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>notification</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the notification to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_title",
            "description": "<p>New value of <code>f_title</code> for notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_description",
            "description": "<p>New value of <code>f_description</code> for notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_url",
            "description": "<p>New value of <code>f_url</code> for notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_color",
            "description": "<p>New value of <code>f_color</code> for notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_icon",
            "description": "<p>New value of <code>f_icon</code> for notification</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification",
            "description": "<p>Updated notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notification.id",
            "description": "<p><code>id</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_title",
            "description": "<p><code>f_title</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_description",
            "description": "<p><code>f_description</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_url",
            "description": "<p><code>f_url</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_color",
            "description": "<p><code>f_color</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_icon",
            "description": "<p><code>f_icon</code> of notification</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No notification with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update notification</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Notification",
    "name": "PutApiNotificationIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/organization/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>organization</code> with <code>id</code></p>",
    "group": "e_organization",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of organization to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No organization with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Organization",
    "name": "DeleteApiOrganizationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/organization/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>organization</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_organization",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the organization to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "address_14",
              "server"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No organization with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Organization",
    "name": "GetApiOrganizationIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/organization/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>organization</code> with <code>id</code></p>",
    "group": "e_organization",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of organization to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "organization",
            "description": "<p>Object of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "organization.id",
            "description": "<p><code>id</code> of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "organization.version",
            "description": "<p><code>version</code> of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organization.f_name",
            "description": "<p><code>f_name</code> of organization</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No organization with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Organization",
    "name": "GetApiOrganizationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/organization?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>organization</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_organization",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "organizations",
            "description": "<p>List of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "organizations.id",
            "description": "<p><code>id</code> of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "organizations.version",
            "description": "<p><code>version</code> of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organizations.f_name",
            "description": "<p><code>f_name</code> of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for organization</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Organization",
    "name": "GetApiOrganizationTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/organization/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>organization</code> using values defined in request's <code>body</code></p>",
    "group": "e_organization",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of organization</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_c_address",
            "description": "<p><code>id</code> of entity address_14 to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_organization_organization",
            "description": "<p><code>id</code> of entity server to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "organization",
            "description": "<p>Created organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "organization.id",
            "description": "<p><code>id</code> of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organization.f_name",
            "description": "<p><code>f_name</code> of organization</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create organization</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Organization",
    "name": "PostApiOrganizationTokenToken"
  },
  {
    "type": "put",
    "url": "/api/organization/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>organization</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_organization",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the organization to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for organization</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_c_address",
            "description": "<p><code>id</code> of entity address_14 to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_organization_organization",
            "description": "<p><code>id</code> of entity server to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "organization",
            "description": "<p>Updated organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "organization.id",
            "description": "<p><code>id</code> of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organization.f_name",
            "description": "<p><code>f_name</code> of organization</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No organization with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update organization</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Organization",
    "name": "PutApiOrganizationIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/partitions/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>partitions</code> with <code>id</code></p>",
    "group": "e_partitions",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of partitions to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No partitions with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Partitions",
    "name": "DeleteApiPartitionsIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/partitions/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>partitions</code> with <code>id</code></p>",
    "group": "e_partitions",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of partitions to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "partitions",
            "description": "<p>Object of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "partitions.id",
            "description": "<p><code>id</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "partitions.version",
            "description": "<p><code>version</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partitions.f_name",
            "description": "<p><code>f_name</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partitions.f_size",
            "description": "<p><code>f_size</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partitions.f_mount_point",
            "description": "<p><code>f_mount_point</code> of partitions</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No partitions with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Partitions",
    "name": "GetApiPartitionsIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/partitions?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>partitions</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_partitions",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "partitionss",
            "description": "<p>List of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "partitionss.id",
            "description": "<p><code>id</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "partitionss.version",
            "description": "<p><code>version</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partitionss.f_name",
            "description": "<p><code>f_name</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partitionss.f_size",
            "description": "<p><code>f_size</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partitionss.f_mount_point",
            "description": "<p><code>f_mount_point</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for partitions</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Partitions",
    "name": "GetApiPartitionsTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/partitions/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>partitions</code> using values defined in request's <code>body</code></p>",
    "group": "e_partitions",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of partitions</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_size",
            "description": "<p><code>f_size</code> of partitions</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_mount_point",
            "description": "<p><code>f_mount_point</code> of partitions</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "partitions",
            "description": "<p>Created partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "partitions.id",
            "description": "<p><code>id</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partitions.f_name",
            "description": "<p><code>f_name</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partitions.f_size",
            "description": "<p><code>f_size</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partitions.f_mount_point",
            "description": "<p><code>f_mount_point</code> of partitions</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create partitions</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Partitions",
    "name": "PostApiPartitionsTokenToken"
  },
  {
    "type": "put",
    "url": "/api/partitions/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>partitions</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_partitions",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the partitions to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for partitions</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_size",
            "description": "<p>New value of <code>f_size</code> for partitions</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_mount_point",
            "description": "<p>New value of <code>f_mount_point</code> for partitions</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "partitions",
            "description": "<p>Updated partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "partitions.id",
            "description": "<p><code>id</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partitions.f_name",
            "description": "<p><code>f_name</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partitions.f_size",
            "description": "<p><code>f_size</code> of partitions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partitions.f_mount_point",
            "description": "<p><code>f_mount_point</code> of partitions</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No partitions with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update partitions</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Partitions",
    "name": "PutApiPartitionsIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/role/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>role</code> with <code>id</code></p>",
    "group": "e_role",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of role to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No role with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "DeleteApiRoleIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/role/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>role</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_role",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the role to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "user"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No role with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "GetApiRoleIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/role/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>role</code> with <code>id</code></p>",
    "group": "e_role",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of role to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>Object of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role.id",
            "description": "<p><code>id</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role.version",
            "description": "<p><code>version</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role.f_label",
            "description": "<p><code>f_label</code> of role</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No role with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "GetApiRoleIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/role?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>role</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_role",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "roles",
            "description": "<p>List of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roles.id",
            "description": "<p><code>id</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roles.version",
            "description": "<p><code>version</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roles.f_label",
            "description": "<p><code>f_label</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for role</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "GetApiRoleTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/role/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>role</code> using values defined in request's <code>body</code></p>",
    "group": "e_role",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_label",
            "description": "<p><code>f_label</code> of role</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>Created role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role.id",
            "description": "<p><code>id</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role.f_label",
            "description": "<p><code>f_label</code> of role</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create role</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "PostApiRoleTokenToken"
  },
  {
    "type": "put",
    "url": "/api/role/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>role</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_role",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the role to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_label",
            "description": "<p>New value of <code>f_label</code> for role</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>Updated role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role.id",
            "description": "<p><code>id</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role.f_label",
            "description": "<p><code>f_label</code> of role</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No role with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update role</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "PutApiRoleIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/server/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>server</code> with <code>id</code></p>",
    "group": "e_server",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of server to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server",
    "name": "DeleteApiServerIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/server/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>server</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_server",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the server to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "address_16",
              "history_e_server_s_status",
              "status",
              "server_category",
              "server",
              "service",
              "application",
              "organization",
              "server_config",
              "server_status_history",
              "server_user_account",
              "server_alert",
              "partitions"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server",
    "name": "GetApiServerIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/server/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>server</code> with <code>id</code></p>",
    "group": "e_server",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of server to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server",
            "description": "<p>Object of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server.id",
            "description": "<p><code>id</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server.version",
            "description": "<p><code>version</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server.f_name",
            "description": "<p><code>f_name</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server.f_ip",
            "description": "<p><code>f_ip</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server.f_location",
            "description": "<p><code>f_location</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Virtual",
            "optional": false,
            "field": "server.s_status",
            "description": "<p><code>s_status</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "server.f_description",
            "description": "<p><code>f_description</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server.f_file",
            "description": "<p><code>f_file</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server.f_is_alive",
            "description": "<p><code>f_is_alive</code> of server</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server",
    "name": "GetApiServerIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/server?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>server</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_server",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "servers",
            "description": "<p>List of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "servers.id",
            "description": "<p><code>id</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "servers.version",
            "description": "<p><code>version</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "servers.f_name",
            "description": "<p><code>f_name</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "servers.f_ip",
            "description": "<p><code>f_ip</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "servers.f_location",
            "description": "<p><code>f_location</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Virtual",
            "optional": false,
            "field": "servers.s_status",
            "description": "<p><code>s_status</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "servers.f_description",
            "description": "<p><code>f_description</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "servers.f_file",
            "description": "<p><code>f_file</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "servers.f_is_alive",
            "description": "<p><code>f_is_alive</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for server</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server",
    "name": "GetApiServerTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/server/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>server</code> using values defined in request's <code>body</code></p>",
    "group": "e_server",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of server</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_ip",
            "description": "<p><code>f_ip</code> of server</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_location",
            "description": "<p><code>f_location</code> of server</p>"
          },
          {
            "group": "Body parameters",
            "type": "Virtual",
            "optional": true,
            "field": "s_status",
            "description": "<p><code>s_status</code> of server</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_description",
            "description": "<p><code>f_description</code> of server</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_file",
            "description": "<p><code>f_file</code> of server</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_is_alive",
            "description": "<p><code>f_is_alive</code> of server</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_c_address",
            "description": "<p><code>id</code> of entity address_16 to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_server_history_status",
            "description": "<p><code>id</code> of entity history_e_server_s_status to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_status_status",
            "description": "<p><code>id</code> of entity status to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_server_category_server_category",
            "description": "<p><code>id</code> of entity server_category to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_server",
            "description": "<p><code>id</code> of entity application to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_organization_organization",
            "description": "<p><code>id</code> of entity organization to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_server_config",
            "description": "<p><code>id</code> of entity server_config to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server",
            "description": "<p>Created server</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server.id",
            "description": "<p><code>id</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server.f_name",
            "description": "<p><code>f_name</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server.f_ip",
            "description": "<p><code>f_ip</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server.f_location",
            "description": "<p><code>f_location</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Virtual",
            "optional": false,
            "field": "server.s_status",
            "description": "<p><code>s_status</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "server.f_description",
            "description": "<p><code>f_description</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server.f_file",
            "description": "<p><code>f_file</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server.f_is_alive",
            "description": "<p><code>f_is_alive</code> of server</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create server</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server",
    "name": "PostApiServerTokenToken"
  },
  {
    "type": "put",
    "url": "/api/server/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>server</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_server",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the server to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for server</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_ip",
            "description": "<p>New value of <code>f_ip</code> for server</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_location",
            "description": "<p>New value of <code>f_location</code> for server</p>"
          },
          {
            "group": "Body parameters",
            "type": "Virtual",
            "optional": true,
            "field": "s_status",
            "description": "<p>New value of <code>s_status</code> for server</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_description",
            "description": "<p>New value of <code>f_description</code> for server</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_file",
            "description": "<p>New value of <code>f_file</code> for server</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_is_alive",
            "description": "<p>New value of <code>f_is_alive</code> for server</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_c_address",
            "description": "<p><code>id</code> of entity address_16 to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_server_history_status",
            "description": "<p><code>id</code> of entity history_e_server_s_status to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_status_status",
            "description": "<p><code>id</code> of entity status to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_server_category_server_category",
            "description": "<p><code>id</code> of entity server_category to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_server",
            "description": "<p><code>id</code> of entity application to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_organization_organization",
            "description": "<p><code>id</code> of entity organization to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_server_config",
            "description": "<p><code>id</code> of entity server_config to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server",
            "description": "<p>Updated server</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server.id",
            "description": "<p><code>id</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server.f_name",
            "description": "<p><code>f_name</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server.f_ip",
            "description": "<p><code>f_ip</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server.f_location",
            "description": "<p><code>f_location</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Virtual",
            "optional": false,
            "field": "server.s_status",
            "description": "<p><code>s_status</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "server.f_description",
            "description": "<p><code>f_description</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server.f_file",
            "description": "<p><code>f_file</code> of server</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server.f_is_alive",
            "description": "<p><code>f_is_alive</code> of server</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update server</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server",
    "name": "PutApiServerIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/server_alert/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>server_alert</code> with <code>id</code></p>",
    "group": "e_server_alert",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of server_alert to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_alert with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server alert",
    "name": "DeleteApiServer_alertIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/server_alert/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>server_alert</code> with <code>id</code></p>",
    "group": "e_server_alert",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of server_alert to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_alert",
            "description": "<p>Object of server_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_alert.id",
            "description": "<p><code>id</code> of server_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_alert.version",
            "description": "<p><code>version</code> of server_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "server_alert.f_type",
            "description": "<p><code>f_type</code> of server_alert</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_alert with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server alert",
    "name": "GetApiServer_alertIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/server_alert?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>server_alert</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_server_alert",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "server_alerts",
            "description": "<p>List of server_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_alerts.id",
            "description": "<p><code>id</code> of server_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_alerts.version",
            "description": "<p><code>version</code> of server_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "server_alerts.f_type",
            "description": "<p><code>f_type</code> of server_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for server_alert</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server alert",
    "name": "GetApiServer_alertTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/server_alert/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>server_alert</code> using values defined in request's <code>body</code></p>",
    "group": "e_server_alert",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_type",
            "description": "<p><code>f_type</code> of server_alert</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_alert",
            "description": "<p>Created server_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_alert.id",
            "description": "<p><code>id</code> of server_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "server_alert.f_type",
            "description": "<p><code>f_type</code> of server_alert</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create server_alert</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server alert",
    "name": "PostApiServer_alertTokenToken"
  },
  {
    "type": "put",
    "url": "/api/server_alert/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>server_alert</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_server_alert",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the server_alert to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_type",
            "description": "<p>New value of <code>f_type</code> for server_alert</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_alert",
            "description": "<p>Updated server_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_alert.id",
            "description": "<p><code>id</code> of server_alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "server_alert.f_type",
            "description": "<p><code>f_type</code> of server_alert</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_alert with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update server_alert</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server alert",
    "name": "PutApiServer_alertIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/server_category/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>server_category</code> with <code>id</code></p>",
    "group": "e_server_category",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of server_category to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_category with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server category",
    "name": "DeleteApiServer_categoryIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/server_category/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>server_category</code> with <code>id</code></p>",
    "group": "e_server_category",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of server_category to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_category",
            "description": "<p>Object of server_category</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_category.id",
            "description": "<p><code>id</code> of server_category</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_category.version",
            "description": "<p><code>version</code> of server_category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_category.f_name",
            "description": "<p><code>f_name</code> of server_category</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_category with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server category",
    "name": "GetApiServer_categoryIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/server_category?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>server_category</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_server_category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "server_categorys",
            "description": "<p>List of server_category</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_categorys.id",
            "description": "<p><code>id</code> of server_category</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_categorys.version",
            "description": "<p><code>version</code> of server_category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_categorys.f_name",
            "description": "<p><code>f_name</code> of server_category</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for server_category</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server category",
    "name": "GetApiServer_categoryTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/server_category/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>server_category</code> using values defined in request's <code>body</code></p>",
    "group": "e_server_category",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of server_category</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_category",
            "description": "<p>Created server_category</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_category.id",
            "description": "<p><code>id</code> of server_category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_category.f_name",
            "description": "<p><code>f_name</code> of server_category</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create server_category</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server category",
    "name": "PostApiServer_categoryTokenToken"
  },
  {
    "type": "put",
    "url": "/api/server_category/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>server_category</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_server_category",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the server_category to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for server_category</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_category",
            "description": "<p>Updated server_category</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_category.id",
            "description": "<p><code>id</code> of server_category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_category.f_name",
            "description": "<p><code>f_name</code> of server_category</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_category with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update server_category</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server category",
    "name": "PutApiServer_categoryIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/server_config/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>server_config</code> with <code>id</code></p>",
    "group": "e_server_config",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of server_config to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_config with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server config",
    "name": "DeleteApiServer_configIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/server_config/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>server_config</code> with <code>id</code></p>",
    "group": "e_server_config",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of server_config to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_config",
            "description": "<p>Object of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.id",
            "description": "<p><code>id</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.version",
            "description": "<p><code>version</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_check_status",
            "description": "<p><code>f_check_status</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_interval",
            "description": "<p><code>f_interval</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_email_alert",
            "description": "<p><code>f_email_alert</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_sms_alert",
            "description": "<p><code>f_sms_alert</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_notification_alert",
            "description": "<p><code>f_notification_alert</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_email_alert_period",
            "description": "<p><code>f_email_alert_period</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_sms_alert_period",
            "description": "<p><code>f_sms_alert_period</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_notification_alert_period",
            "description": "<p><code>f_notification_alert_period</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_config.f_email",
            "description": "<p><code>f_email</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_config.f_phone",
            "description": "<p><code>f_phone</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_add_ping_log_in_db",
            "description": "<p><code>f_add_ping_log_in_db</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_interval_db_log_store",
            "description": "<p><code>f_interval_db_log_store</code> of server_config</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_config with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server config",
    "name": "GetApiServer_configIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/server_config?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>server_config</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_server_config",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "server_configs",
            "description": "<p>List of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_configs.id",
            "description": "<p><code>id</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_configs.version",
            "description": "<p><code>version</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_configs.f_check_status",
            "description": "<p><code>f_check_status</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_configs.f_interval",
            "description": "<p><code>f_interval</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_configs.f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_configs.f_email_alert",
            "description": "<p><code>f_email_alert</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_configs.f_sms_alert",
            "description": "<p><code>f_sms_alert</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_configs.f_notification_alert",
            "description": "<p><code>f_notification_alert</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_configs.f_email_alert_period",
            "description": "<p><code>f_email_alert_period</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_configs.f_sms_alert_period",
            "description": "<p><code>f_sms_alert_period</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_configs.f_notification_alert_period",
            "description": "<p><code>f_notification_alert_period</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_configs.f_email",
            "description": "<p><code>f_email</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_configs.f_phone",
            "description": "<p><code>f_phone</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_configs.f_add_ping_log_in_db",
            "description": "<p><code>f_add_ping_log_in_db</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_configs.f_interval_db_log_store",
            "description": "<p><code>f_interval_db_log_store</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for server_config</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server config",
    "name": "GetApiServer_configTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/server_config/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>server_config</code> using values defined in request's <code>body</code></p>",
    "group": "e_server_config",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_check_status",
            "description": "<p><code>f_check_status</code> of server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_interval",
            "description": "<p><code>f_interval</code> of server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_email_alert",
            "description": "<p><code>f_email_alert</code> of server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_sms_alert",
            "description": "<p><code>f_sms_alert</code> of server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_notification_alert",
            "description": "<p><code>f_notification_alert</code> of server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_email_alert_period",
            "description": "<p><code>f_email_alert_period</code> of server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_sms_alert_period",
            "description": "<p><code>f_sms_alert_period</code> of server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_notification_alert_period",
            "description": "<p><code>f_notification_alert_period</code> of server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_email",
            "description": "<p><code>f_email</code> of server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_phone",
            "description": "<p><code>f_phone</code> of server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_add_ping_log_in_db",
            "description": "<p><code>f_add_ping_log_in_db</code> of server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_interval_db_log_store",
            "description": "<p><code>f_interval_db_log_store</code> of server_config</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_config",
            "description": "<p>Created server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.id",
            "description": "<p><code>id</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_check_status",
            "description": "<p><code>f_check_status</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_interval",
            "description": "<p><code>f_interval</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_email_alert",
            "description": "<p><code>f_email_alert</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_sms_alert",
            "description": "<p><code>f_sms_alert</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_notification_alert",
            "description": "<p><code>f_notification_alert</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_email_alert_period",
            "description": "<p><code>f_email_alert_period</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_sms_alert_period",
            "description": "<p><code>f_sms_alert_period</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_notification_alert_period",
            "description": "<p><code>f_notification_alert_period</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_config.f_email",
            "description": "<p><code>f_email</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_config.f_phone",
            "description": "<p><code>f_phone</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_add_ping_log_in_db",
            "description": "<p><code>f_add_ping_log_in_db</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_interval_db_log_store",
            "description": "<p><code>f_interval_db_log_store</code> of server_config</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create server_config</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server config",
    "name": "PostApiServer_configTokenToken"
  },
  {
    "type": "put",
    "url": "/api/server_config/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>server_config</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_server_config",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the server_config to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_check_status",
            "description": "<p>New value of <code>f_check_status</code> for server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_interval",
            "description": "<p>New value of <code>f_interval</code> for server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_alert_pings_failed",
            "description": "<p>New value of <code>f_alert_pings_failed</code> for server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_email_alert",
            "description": "<p>New value of <code>f_email_alert</code> for server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_sms_alert",
            "description": "<p>New value of <code>f_sms_alert</code> for server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_notification_alert",
            "description": "<p>New value of <code>f_notification_alert</code> for server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_email_alert_period",
            "description": "<p>New value of <code>f_email_alert_period</code> for server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_sms_alert_period",
            "description": "<p>New value of <code>f_sms_alert_period</code> for server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_notification_alert_period",
            "description": "<p>New value of <code>f_notification_alert_period</code> for server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_email",
            "description": "<p>New value of <code>f_email</code> for server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_phone",
            "description": "<p>New value of <code>f_phone</code> for server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_add_ping_log_in_db",
            "description": "<p>New value of <code>f_add_ping_log_in_db</code> for server_config</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_interval_db_log_store",
            "description": "<p>New value of <code>f_interval_db_log_store</code> for server_config</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_config",
            "description": "<p>Updated server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.id",
            "description": "<p><code>id</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_check_status",
            "description": "<p><code>f_check_status</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_interval",
            "description": "<p><code>f_interval</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_alert_pings_failed",
            "description": "<p><code>f_alert_pings_failed</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_email_alert",
            "description": "<p><code>f_email_alert</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_sms_alert",
            "description": "<p><code>f_sms_alert</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_notification_alert",
            "description": "<p><code>f_notification_alert</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_email_alert_period",
            "description": "<p><code>f_email_alert_period</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_sms_alert_period",
            "description": "<p><code>f_sms_alert_period</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_notification_alert_period",
            "description": "<p><code>f_notification_alert_period</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_config.f_email",
            "description": "<p><code>f_email</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_config.f_phone",
            "description": "<p><code>f_phone</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_config.f_add_ping_log_in_db",
            "description": "<p><code>f_add_ping_log_in_db</code> of server_config</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_config.f_interval_db_log_store",
            "description": "<p><code>f_interval_db_log_store</code> of server_config</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_config with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update server_config</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server config",
    "name": "PutApiServer_configIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/server_status_history/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>server_status_history</code> with <code>id</code></p>",
    "group": "e_server_status_history",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of server_status_history to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_status_history with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server status history",
    "name": "DeleteApiServer_status_historyIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/server_status_history/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>server_status_history</code> with <code>id</code></p>",
    "group": "e_server_status_history",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of server_status_history to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_status_history",
            "description": "<p>Object of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_status_history.id",
            "description": "<p><code>id</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_status_history.version",
            "description": "<p><code>version</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_status_history.f_is_alive",
            "description": "<p><code>f_is_alive</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "server_status_history.f_comment",
            "description": "<p><code>f_comment</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_status_history.f_time",
            "description": "<p><code>f_time</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_status_history.f_min",
            "description": "<p><code>f_min</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_status_history.f_max",
            "description": "<p><code>f_max</code> of server_status_history</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_status_history with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server status history",
    "name": "GetApiServer_status_historyIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/server_status_history?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>server_status_history</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_server_status_history",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "server_status_historys",
            "description": "<p>List of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_status_historys.id",
            "description": "<p><code>id</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_status_historys.version",
            "description": "<p><code>version</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_status_historys.f_is_alive",
            "description": "<p><code>f_is_alive</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "server_status_historys.f_comment",
            "description": "<p><code>f_comment</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_status_historys.f_time",
            "description": "<p><code>f_time</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_status_historys.f_min",
            "description": "<p><code>f_min</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_status_historys.f_max",
            "description": "<p><code>f_max</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for server_status_history</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server status history",
    "name": "GetApiServer_status_historyTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/server_status_history/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>server_status_history</code> using values defined in request's <code>body</code></p>",
    "group": "e_server_status_history",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_is_alive",
            "description": "<p><code>f_is_alive</code> of server_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_comment",
            "description": "<p><code>f_comment</code> of server_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_time",
            "description": "<p><code>f_time</code> of server_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_min",
            "description": "<p><code>f_min</code> of server_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_max",
            "description": "<p><code>f_max</code> of server_status_history</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_status_history",
            "description": "<p>Created server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_status_history.id",
            "description": "<p><code>id</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_status_history.f_is_alive",
            "description": "<p><code>f_is_alive</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "server_status_history.f_comment",
            "description": "<p><code>f_comment</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_status_history.f_time",
            "description": "<p><code>f_time</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_status_history.f_min",
            "description": "<p><code>f_min</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_status_history.f_max",
            "description": "<p><code>f_max</code> of server_status_history</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create server_status_history</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server status history",
    "name": "PostApiServer_status_historyTokenToken"
  },
  {
    "type": "put",
    "url": "/api/server_status_history/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>server_status_history</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_server_status_history",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the server_status_history to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_is_alive",
            "description": "<p>New value of <code>f_is_alive</code> for server_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_comment",
            "description": "<p>New value of <code>f_comment</code> for server_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_time",
            "description": "<p>New value of <code>f_time</code> for server_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_min",
            "description": "<p>New value of <code>f_min</code> for server_status_history</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_max",
            "description": "<p>New value of <code>f_max</code> for server_status_history</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_status_history",
            "description": "<p>Updated server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_status_history.id",
            "description": "<p><code>id</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "server_status_history.f_is_alive",
            "description": "<p><code>f_is_alive</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "server_status_history.f_comment",
            "description": "<p><code>f_comment</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_status_history.f_time",
            "description": "<p><code>f_time</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_status_history.f_min",
            "description": "<p><code>f_min</code> of server_status_history</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_status_history.f_max",
            "description": "<p><code>f_max</code> of server_status_history</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_status_history with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update server_status_history</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server status history",
    "name": "PutApiServer_status_historyIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/server_user_account/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>server_user_account</code> with <code>id</code></p>",
    "group": "e_server_user_account",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of server_user_account to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_user_account with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server user account",
    "name": "DeleteApiServer_user_accountIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/server_user_account/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>server_user_account</code> with <code>id</code></p>",
    "group": "e_server_user_account",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of server_user_account to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_user_account",
            "description": "<p>Object of server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_user_account.id",
            "description": "<p><code>id</code> of server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_user_account.version",
            "description": "<p><code>version</code> of server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_user_account.f_account",
            "description": "<p><code>f_account</code> of server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_user_account.f_group",
            "description": "<p><code>f_group</code> of server_user_account</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_user_account with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server user account",
    "name": "GetApiServer_user_accountIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/server_user_account?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>server_user_account</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_server_user_account",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "server_user_accounts",
            "description": "<p>List of server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_user_accounts.id",
            "description": "<p><code>id</code> of server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_user_accounts.version",
            "description": "<p><code>version</code> of server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_user_accounts.f_account",
            "description": "<p><code>f_account</code> of server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_user_accounts.f_group",
            "description": "<p><code>f_group</code> of server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for server_user_account</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server user account",
    "name": "GetApiServer_user_accountTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/server_user_account/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>server_user_account</code> using values defined in request's <code>body</code></p>",
    "group": "e_server_user_account",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_account",
            "description": "<p><code>f_account</code> of server_user_account</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_group",
            "description": "<p><code>f_group</code> of server_user_account</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_user_account",
            "description": "<p>Created server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_user_account.id",
            "description": "<p><code>id</code> of server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_user_account.f_account",
            "description": "<p><code>f_account</code> of server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_user_account.f_group",
            "description": "<p><code>f_group</code> of server_user_account</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create server_user_account</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server user account",
    "name": "PostApiServer_user_accountTokenToken"
  },
  {
    "type": "put",
    "url": "/api/server_user_account/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>server_user_account</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_server_user_account",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the server_user_account to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_account",
            "description": "<p>New value of <code>f_account</code> for server_user_account</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_group",
            "description": "<p>New value of <code>f_group</code> for server_user_account</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "server_user_account",
            "description": "<p>Updated server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "server_user_account.id",
            "description": "<p><code>id</code> of server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_user_account.f_account",
            "description": "<p><code>f_account</code> of server_user_account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server_user_account.f_group",
            "description": "<p><code>f_group</code> of server_user_account</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No server_user_account with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update server_user_account</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Server user account",
    "name": "PutApiServer_user_accountIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/service/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>service</code> with <code>id</code></p>",
    "group": "e_service",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of service to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No service with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Service",
    "name": "DeleteApiServiceIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/service/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>service</code> with <code>id</code></p>",
    "group": "e_service",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of service to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "service",
            "description": "<p>Object of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "service.id",
            "description": "<p><code>id</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "service.version",
            "description": "<p><code>version</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_name",
            "description": "<p><code>f_name</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "service.f_instruction",
            "description": "<p><code>f_instruction</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_start_command",
            "description": "<p><code>f_start_command</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_stop_command",
            "description": "<p><code>f_stop_command</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_restart_command",
            "description": "<p><code>f_restart_command</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_file",
            "description": "<p><code>f_file</code> of service</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No service with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Service",
    "name": "GetApiServiceIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/service?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>service</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_service",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "services",
            "description": "<p>List of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "services.id",
            "description": "<p><code>id</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "services.version",
            "description": "<p><code>version</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "services.f_name",
            "description": "<p><code>f_name</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "services.f_instruction",
            "description": "<p><code>f_instruction</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "services.f_start_command",
            "description": "<p><code>f_start_command</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "services.f_stop_command",
            "description": "<p><code>f_stop_command</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "services.f_restart_command",
            "description": "<p><code>f_restart_command</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "services.f_file",
            "description": "<p><code>f_file</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for service</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Service",
    "name": "GetApiServiceTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/service/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>service</code> using values defined in request's <code>body</code></p>",
    "group": "e_service",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of service</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_instruction",
            "description": "<p><code>f_instruction</code> of service</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_start_command",
            "description": "<p><code>f_start_command</code> of service</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_stop_command",
            "description": "<p><code>f_stop_command</code> of service</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_restart_command",
            "description": "<p><code>f_restart_command</code> of service</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_file",
            "description": "<p><code>f_file</code> of service</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "service",
            "description": "<p>Created service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "service.id",
            "description": "<p><code>id</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_name",
            "description": "<p><code>f_name</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "service.f_instruction",
            "description": "<p><code>f_instruction</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_start_command",
            "description": "<p><code>f_start_command</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_stop_command",
            "description": "<p><code>f_stop_command</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_restart_command",
            "description": "<p><code>f_restart_command</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_file",
            "description": "<p><code>f_file</code> of service</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create service</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Service",
    "name": "PostApiServiceTokenToken"
  },
  {
    "type": "put",
    "url": "/api/service/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>service</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_service",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the service to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for service</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_instruction",
            "description": "<p>New value of <code>f_instruction</code> for service</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_start_command",
            "description": "<p>New value of <code>f_start_command</code> for service</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_stop_command",
            "description": "<p>New value of <code>f_stop_command</code> for service</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_restart_command",
            "description": "<p>New value of <code>f_restart_command</code> for service</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_file",
            "description": "<p>New value of <code>f_file</code> for service</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "service",
            "description": "<p>Updated service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "service.id",
            "description": "<p><code>id</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_name",
            "description": "<p><code>f_name</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "service.f_instruction",
            "description": "<p><code>f_instruction</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_start_command",
            "description": "<p><code>f_start_command</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_stop_command",
            "description": "<p><code>f_stop_command</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_restart_command",
            "description": "<p><code>f_restart_command</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_file",
            "description": "<p><code>f_file</code> of service</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No service with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update service</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Service",
    "name": "PutApiServiceIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/settings/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>settings</code> with <code>id</code></p>",
    "group": "e_settings",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of settings to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No settings with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Settings",
    "name": "DeleteApiSettingsIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/settings/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>settings</code> with <code>id</code></p>",
    "group": "e_settings",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of settings to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "settings",
            "description": "<p>Object of settings</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "settings.id",
            "description": "<p><code>id</code> of settings</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "settings.version",
            "description": "<p><code>version</code> of settings</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "settings.f_types",
            "description": "<p><code>f_types</code> of settings</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No settings with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Settings",
    "name": "GetApiSettingsIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/settings?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>settings</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_settings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "settingss",
            "description": "<p>List of settings</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "settingss.id",
            "description": "<p><code>id</code> of settings</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "settingss.version",
            "description": "<p><code>version</code> of settings</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "settingss.f_types",
            "description": "<p><code>f_types</code> of settings</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for settings</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Settings",
    "name": "GetApiSettingsTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/settings/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>settings</code> using values defined in request's <code>body</code></p>",
    "group": "e_settings",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_types",
            "description": "<p><code>f_types</code> of settings</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "settings",
            "description": "<p>Created settings</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "settings.id",
            "description": "<p><code>id</code> of settings</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "settings.f_types",
            "description": "<p><code>f_types</code> of settings</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create settings</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Settings",
    "name": "PostApiSettingsTokenToken"
  },
  {
    "type": "put",
    "url": "/api/settings/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>settings</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_settings",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the settings to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_types",
            "description": "<p>New value of <code>f_types</code> for settings</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "settings",
            "description": "<p>Updated settings</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "settings.id",
            "description": "<p><code>id</code> of settings</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "settings.f_types",
            "description": "<p><code>f_types</code> of settings</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No settings with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update settings</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Settings",
    "name": "PutApiSettingsIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/status/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>status</code> with <code>id</code></p>",
    "group": "e_status",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of status to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No status with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Status",
    "name": "DeleteApiStatusIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/status/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>status</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_status",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the status to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "group",
              "translation",
              "action",
              "status"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No status with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Status",
    "name": "GetApiStatusIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/status/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>status</code> with <code>id</code></p>",
    "group": "e_status",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of status to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>Object of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.id",
            "description": "<p><code>id</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.version",
            "description": "<p><code>version</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_entity",
            "description": "<p><code>f_entity</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_field",
            "description": "<p><code>f_field</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_name",
            "description": "<p><code>f_name</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_color",
            "description": "<p><code>f_color</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.f_position",
            "description": "<p><code>f_position</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status.f_default",
            "description": "<p><code>f_default</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status.f_comment",
            "description": "<p><code>f_comment</code> of status</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No status with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Status",
    "name": "GetApiStatusIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/status?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>status</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "statuss",
            "description": "<p>List of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statuss.id",
            "description": "<p><code>id</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statuss.version",
            "description": "<p><code>version</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statuss.f_entity",
            "description": "<p><code>f_entity</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statuss.f_field",
            "description": "<p><code>f_field</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statuss.f_name",
            "description": "<p><code>f_name</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statuss.f_color",
            "description": "<p><code>f_color</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statuss.f_position",
            "description": "<p><code>f_position</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "statuss.f_default",
            "description": "<p><code>f_default</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "statuss.f_comment",
            "description": "<p><code>f_comment</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for status</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Status",
    "name": "GetApiStatusTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/status/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>status</code> using values defined in request's <code>body</code></p>",
    "group": "e_status",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_entity",
            "description": "<p><code>f_entity</code> of status</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_field",
            "description": "<p><code>f_field</code> of status</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of status</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_color",
            "description": "<p><code>f_color</code> of status</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_position",
            "description": "<p><code>f_position</code> of status</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_default",
            "description": "<p><code>f_default</code> of status</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_comment",
            "description": "<p><code>f_comment</code> of status</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_status_translations",
            "description": "<p><code>id</code> of entity translation to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_status_actions",
            "description": "<p><code>id</code> of entity action to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>Created status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.id",
            "description": "<p><code>id</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_entity",
            "description": "<p><code>f_entity</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_field",
            "description": "<p><code>f_field</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_name",
            "description": "<p><code>f_name</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_color",
            "description": "<p><code>f_color</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.f_position",
            "description": "<p><code>f_position</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status.f_default",
            "description": "<p><code>f_default</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status.f_comment",
            "description": "<p><code>f_comment</code> of status</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create status</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Status",
    "name": "PostApiStatusTokenToken"
  },
  {
    "type": "put",
    "url": "/api/status/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>status</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_status",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the status to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_entity",
            "description": "<p>New value of <code>f_entity</code> for status</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_field",
            "description": "<p>New value of <code>f_field</code> for status</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for status</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_color",
            "description": "<p>New value of <code>f_color</code> for status</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_position",
            "description": "<p>New value of <code>f_position</code> for status</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_default",
            "description": "<p>New value of <code>f_default</code> for status</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_comment",
            "description": "<p>New value of <code>f_comment</code> for status</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_status_translations",
            "description": "<p><code>id</code> of entity translation to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_status_actions",
            "description": "<p><code>id</code> of entity action to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>Updated status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.id",
            "description": "<p><code>id</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_entity",
            "description": "<p><code>f_entity</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_field",
            "description": "<p><code>f_field</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_name",
            "description": "<p><code>f_name</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_color",
            "description": "<p><code>f_color</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.f_position",
            "description": "<p><code>f_position</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status.f_default",
            "description": "<p><code>f_default</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status.f_comment",
            "description": "<p><code>f_comment</code> of status</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No status with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update status</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Status",
    "name": "PutApiStatusIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/translation/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>translation</code> with <code>id</code></p>",
    "group": "e_translation",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of translation to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No translation with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Translation",
    "name": "DeleteApiTranslationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/translation/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>translation</code> with <code>id</code></p>",
    "group": "e_translation",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of translation to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "translation",
            "description": "<p>Object of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "translation.id",
            "description": "<p><code>id</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "translation.version",
            "description": "<p><code>version</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translation.f_language",
            "description": "<p><code>f_language</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translation.f_value",
            "description": "<p><code>f_value</code> of translation</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No translation with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Translation",
    "name": "GetApiTranslationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/translation?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>translation</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_translation",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "translations",
            "description": "<p>List of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "translations.id",
            "description": "<p><code>id</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "translations.version",
            "description": "<p><code>version</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translations.f_language",
            "description": "<p><code>f_language</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translations.f_value",
            "description": "<p><code>f_value</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for translation</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Translation",
    "name": "GetApiTranslationTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/translation/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>translation</code> using values defined in request's <code>body</code></p>",
    "group": "e_translation",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_language",
            "description": "<p><code>f_language</code> of translation</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_value",
            "description": "<p><code>f_value</code> of translation</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "translation",
            "description": "<p>Created translation</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "translation.id",
            "description": "<p><code>id</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translation.f_language",
            "description": "<p><code>f_language</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translation.f_value",
            "description": "<p><code>f_value</code> of translation</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create translation</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Translation",
    "name": "PostApiTranslationTokenToken"
  },
  {
    "type": "put",
    "url": "/api/translation/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>translation</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_translation",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the translation to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_language",
            "description": "<p>New value of <code>f_language</code> for translation</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_value",
            "description": "<p>New value of <code>f_value</code> for translation</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "translation",
            "description": "<p>Updated translation</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "translation.id",
            "description": "<p><code>id</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translation.f_language",
            "description": "<p><code>f_language</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translation.f_value",
            "description": "<p><code>f_value</code> of translation</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No translation with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update translation</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "Translation",
    "name": "PutApiTranslationIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/user/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>user</code> with <code>id</code></p>",
    "group": "e_user",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of user to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No user with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "DeleteApiUserIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/user/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>user</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_user",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the user to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "role",
              "group",
              "notification",
              "organization"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No user with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "GetApiUserIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/user/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>user</code> with <code>id</code></p>",
    "group": "e_user",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of user to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Object of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.id",
            "description": "<p><code>id</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.version",
            "description": "<p><code>version</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_password",
            "description": "<p><code>f_password</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_email",
            "description": "<p><code>f_email</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_token_password_reset",
            "description": "<p><code>f_token_password_reset</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.f_enabled",
            "description": "<p><code>f_enabled</code> of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No user with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "GetApiUserIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/user?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>user</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.id",
            "description": "<p><code>id</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.version",
            "description": "<p><code>version</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.f_password",
            "description": "<p><code>f_password</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.f_email",
            "description": "<p><code>f_email</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.f_token_password_reset",
            "description": "<p><code>f_token_password_reset</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.f_enabled",
            "description": "<p><code>f_enabled</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for user</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "GetApiUserTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/user/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>user</code> using values defined in request's <code>body</code></p>",
    "group": "e_user",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_email",
            "description": "<p><code>f_email</code> of user</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_organization_organizarion",
            "description": "<p><code>id</code> of entity organization to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Created user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.id",
            "description": "<p><code>id</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_email",
            "description": "<p><code>f_email</code> of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create user</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "PostApiUserTokenToken"
  },
  {
    "type": "put",
    "url": "/api/user/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>user</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_user",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the user to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_login",
            "description": "<p>New value of <code>f_login</code> for user</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_email",
            "description": "<p>New value of <code>f_email</code> for user</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_organization_organizarion",
            "description": "<p><code>id</code> of entity organization to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Updated user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.id",
            "description": "<p><code>id</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_email",
            "description": "<p><code>f_email</code> of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No user with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update user</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/1/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "PutApiUserIdTokenToken"
  }
] });
