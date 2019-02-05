/**
 * @apiDefine token
 * @apiParam (Query parameters) {String} token API Bearer Token, required for authentication
 */
/**
 * @apiDefine tokenLimitOffset
 * @apiParam (Query parameters) {String} token API Bearer Token, required for authentication
 * @apiParam (Query parameters) {Integer} [limit=50] The number of rows to be fetched
 * @apiParam (Query parameters) {Integer} [offset=0] The offset by which rows will be fetched
 */

/**
 * @api {get} /api/getToken/ Basic Auth


 * @apiVersion 1.0.0
 * @apiGroup 1-Authentication

 * @apiDescription To be able to interact with the API, you need to generate a Bearer Token using the <code>/api/getToken/</code> url
 *
 * Set your HTTP header like so with basic64 encoding : <code>Authorization clientID:clientSecret</code>

 * @apiExample {node} Example
 * var request = require('request');
 *
 * // API credentials
 * var clientKey = 'THcfYQ7sGW3jRdq';
 * var clientSecret = 'dexXLYNwdhezlxk';
 *
 * // Base64 encoding
 * var auth = 'Basic ' + new Buffer(clientKey + ':' + clientSecret).toString('base64');
 *
 * // API request
 * request(
 *     {
 *         url : 'http://127.0.0.1:9034/api/getToken',
 *         headers : {
 *             "Authorization" : auth
 *         }
 *     },
 *     function (error, response, body) {
 *     	body = JSON.parse(body);
 *         console.log(body.token);
 *     }
 * );

 * @apiHeader {String} ClientID Generated application's API credentials
 * @apiHeader {String} ClientSecret Generated application's API credentials

 * @apiSuccess {String} token Bearer Token, required for further API calls

 * @apiError (Error 500) BadAuthorizationHeader There is an invalid or no authorization header
 * @apiError (Error 401) AuthenticationFailed Couldn't match clientID/clientSecret with database
 */

/********************************************
 ********************************************
 * USER
 ********************************************
 *******************************************/
/** @apiDefine e_user User */
/**
 * @api {get} /api/user?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>user</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_user
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} users List of user
 * @apiSuccess {Integer} users.id <code>id</code> of user
 * @apiSuccess {Integer} users.version <code>version</code> of user
 * @apiSuccess {String} users.f_login <code>f_login</code> of user
 * @apiSuccess {String} users.f_password <code>f_password</code> of user
 * @apiSuccess {String} users.f_email <code>f_email</code> of user
 * @apiSuccess {String} users.f_token_password_reset <code>f_token_password_reset</code> of user
 * @apiSuccess {Integer} users.f_enabled <code>f_enabled</code> of user
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for user
 */

/**
 * @api {get} /api/user/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>user</code> with <code>id</code>
 * @apiGroup e_user
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of user to fetch
 * @apiSuccess {Object} user Object of user
 * @apiSuccess {Integer} user.id <code>id</code> of user
 * @apiSuccess {Integer} user.version <code>version</code> of user
 * @apiSuccess {String} user.f_login <code>f_login</code> of user
 * @apiSuccess {String} user.f_password <code>f_password</code> of user
 * @apiSuccess {String} user.f_email <code>f_email</code> of user
 * @apiSuccess {String} user.f_token_password_reset <code>f_token_password_reset</code> of user
 * @apiSuccess {Integer} user.f_enabled <code>f_enabled</code> of user
 * @apiError (Error 404) {Object} NotFound No user with ID <code>id</code> found
 */

/**
 * @api {get} /api/user/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>user</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_user
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the user to which <code>association</code> is related
 * @apiParam (Params parameters) {String=role,group,notification,organization} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No user with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/user/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>user</code> using values defined in request's <code>body</code>
 * @apiGroup e_user
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_login] <code>f_login</code> of user
 * @apiParam (Body parameters) {String} [f_email] <code>f_email</code> of user
 * @apiParam (Body parameters) {Integer} [fk_id_organization_organizarion] <code>id</code> of entity organization to associate
 * @apiSuccess {Object} user Created user
 * @apiSuccess {Integer} user.id <code>id</code> of user
 * @apiSuccess {String} user.f_login <code>f_login</code> of user
 * @apiSuccess {String} user.f_email <code>f_email</code> of user
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create user
 */

/**
 * @api {put} /api/user/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>user</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_user
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the user to update
 * @apiParam (Body parameters) {String} [f_login] New value of <code>f_login</code> for user
 * @apiParam (Body parameters) {String} [f_email] New value of <code>f_email</code> for user
 * @apiParam (Body parameters) {Integer} [fk_id_organization_organizarion] <code>id</code> of entity organization to associate
 * @apiSuccess {Object} user Updated user
 * @apiSuccess {Integer} user.id <code>id</code> of user
 * @apiSuccess {String} user.f_login <code>f_login</code> of user
 * @apiSuccess {String} user.f_email <code>f_email</code> of user
 * @apiError (Error 404) {Object} NotFound No user with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update user
 */

/**
 * @api {delete} /api/user/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>user</code> with <code>id</code>
 * @apiGroup e_user
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of user to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No user with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * ROLE
 ********************************************
 *******************************************/
/** @apiDefine e_role Role */
/**
 * @api {get} /api/role?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>role</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_role
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} roles List of role
 * @apiSuccess {Integer} roles.id <code>id</code> of role
 * @apiSuccess {Integer} roles.version <code>version</code> of role
 * @apiSuccess {String} roles.f_label <code>f_label</code> of role
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for role
 */

/**
 * @api {get} /api/role/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>role</code> with <code>id</code>
 * @apiGroup e_role
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of role to fetch
 * @apiSuccess {Object} role Object of role
 * @apiSuccess {Integer} role.id <code>id</code> of role
 * @apiSuccess {Integer} role.version <code>version</code> of role
 * @apiSuccess {String} role.f_label <code>f_label</code> of role
 * @apiError (Error 404) {Object} NotFound No role with ID <code>id</code> found
 */

/**
 * @api {get} /api/role/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>role</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_role
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the role to which <code>association</code> is related
 * @apiParam (Params parameters) {String=user} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No role with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/role/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>role</code> using values defined in request's <code>body</code>
 * @apiGroup e_role
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_label] <code>f_label</code> of role
 * @apiSuccess {Object} role Created role
 * @apiSuccess {Integer} role.id <code>id</code> of role
 * @apiSuccess {String} role.f_label <code>f_label</code> of role
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create role
 */

/**
 * @api {put} /api/role/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>role</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_role
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the role to update
 * @apiParam (Body parameters) {String} [f_label] New value of <code>f_label</code> for role
 * @apiSuccess {Object} role Updated role
 * @apiSuccess {Integer} role.id <code>id</code> of role
 * @apiSuccess {String} role.f_label <code>f_label</code> of role
 * @apiError (Error 404) {Object} NotFound No role with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update role
 */

/**
 * @api {delete} /api/role/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>role</code> with <code>id</code>
 * @apiGroup e_role
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of role to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No role with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * GROUP
 ********************************************
 *******************************************/
/** @apiDefine e_group Group */
/**
 * @api {get} /api/group?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>group</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_group
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} groups List of group
 * @apiSuccess {Integer} groups.id <code>id</code> of group
 * @apiSuccess {Integer} groups.version <code>version</code> of group
 * @apiSuccess {String} groups.f_label <code>f_label</code> of group
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for group
 */

/**
 * @api {get} /api/group/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>group</code> with <code>id</code>
 * @apiGroup e_group
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of group to fetch
 * @apiSuccess {Object} group Object of group
 * @apiSuccess {Integer} group.id <code>id</code> of group
 * @apiSuccess {Integer} group.version <code>version</code> of group
 * @apiSuccess {String} group.f_label <code>f_label</code> of group
 * @apiError (Error 404) {Object} NotFound No group with ID <code>id</code> found
 */

/**
 * @api {get} /api/group/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>group</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_group
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the group to which <code>association</code> is related
 * @apiParam (Params parameters) {String=user} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No group with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/group/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>group</code> using values defined in request's <code>body</code>
 * @apiGroup e_group
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_label] <code>f_label</code> of group
 * @apiSuccess {Object} group Created group
 * @apiSuccess {Integer} group.id <code>id</code> of group
 * @apiSuccess {String} group.f_label <code>f_label</code> of group
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create group
 */

/**
 * @api {put} /api/group/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>group</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_group
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the group to update
 * @apiParam (Body parameters) {String} [f_label] New value of <code>f_label</code> for group
 * @apiSuccess {Object} group Updated group
 * @apiSuccess {Integer} group.id <code>id</code> of group
 * @apiSuccess {String} group.f_label <code>f_label</code> of group
 * @apiError (Error 404) {Object} NotFound No group with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update group
 */

/**
 * @api {delete} /api/group/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>group</code> with <code>id</code>
 * @apiGroup e_group
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of group to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No group with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * STATUS
 ********************************************
 *******************************************/
/** @apiDefine e_status Status */
/**
 * @api {get} /api/status?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>status</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_status
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} statuss List of status
 * @apiSuccess {Integer} statuss.id <code>id</code> of status
 * @apiSuccess {Integer} statuss.version <code>version</code> of status
 * @apiSuccess {String} statuss.f_entity <code>f_entity</code> of status
 * @apiSuccess {String} statuss.f_field <code>f_field</code> of status
 * @apiSuccess {String} statuss.f_name <code>f_name</code> of status
 * @apiSuccess {String} statuss.f_color <code>f_color</code> of status
 * @apiSuccess {Integer} statuss.f_position <code>f_position</code> of status
 * @apiSuccess {Boolean} statuss.f_default <code>f_default</code> of status
 * @apiSuccess {Boolean} statuss.f_comment <code>f_comment</code> of status
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for status
 */

/**
 * @api {get} /api/status/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>status</code> with <code>id</code>
 * @apiGroup e_status
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of status to fetch
 * @apiSuccess {Object} status Object of status
 * @apiSuccess {Integer} status.id <code>id</code> of status
 * @apiSuccess {Integer} status.version <code>version</code> of status
 * @apiSuccess {String} status.f_entity <code>f_entity</code> of status
 * @apiSuccess {String} status.f_field <code>f_field</code> of status
 * @apiSuccess {String} status.f_name <code>f_name</code> of status
 * @apiSuccess {String} status.f_color <code>f_color</code> of status
 * @apiSuccess {Integer} status.f_position <code>f_position</code> of status
 * @apiSuccess {Boolean} status.f_default <code>f_default</code> of status
 * @apiSuccess {Boolean} status.f_comment <code>f_comment</code> of status
 * @apiError (Error 404) {Object} NotFound No status with ID <code>id</code> found
 */

/**
 * @api {get} /api/status/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>status</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_status
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the status to which <code>association</code> is related
 * @apiParam (Params parameters) {String=group,translation,action,status} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No status with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/status/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>status</code> using values defined in request's <code>body</code>
 * @apiGroup e_status
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_entity] <code>f_entity</code> of status
 * @apiParam (Body parameters) {String} [f_field] <code>f_field</code> of status
 * @apiParam (Body parameters) {String} [f_name] <code>f_name</code> of status
 * @apiParam (Body parameters) {String} [f_color] <code>f_color</code> of status
 * @apiParam (Body parameters) {Integer} [f_position] <code>f_position</code> of status
 * @apiParam (Body parameters) {Boolean} [f_default] <code>f_default</code> of status
 * @apiParam (Body parameters) {Boolean} [f_comment] <code>f_comment</code> of status
 * @apiParam (Body parameters) {Integer} [fk_id_status_translations] <code>id</code> of entity translation to associate
 * @apiParam (Body parameters) {Integer} [fk_id_status_actions] <code>id</code> of entity action to associate
 * @apiSuccess {Object} status Created status
 * @apiSuccess {Integer} status.id <code>id</code> of status
 * @apiSuccess {String} status.f_entity <code>f_entity</code> of status
 * @apiSuccess {String} status.f_field <code>f_field</code> of status
 * @apiSuccess {String} status.f_name <code>f_name</code> of status
 * @apiSuccess {String} status.f_color <code>f_color</code> of status
 * @apiSuccess {Integer} status.f_position <code>f_position</code> of status
 * @apiSuccess {Boolean} status.f_default <code>f_default</code> of status
 * @apiSuccess {Boolean} status.f_comment <code>f_comment</code> of status
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create status
 */

/**
 * @api {put} /api/status/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>status</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_status
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the status to update
 * @apiParam (Body parameters) {String} [f_entity] New value of <code>f_entity</code> for status
 * @apiParam (Body parameters) {String} [f_field] New value of <code>f_field</code> for status
 * @apiParam (Body parameters) {String} [f_name] New value of <code>f_name</code> for status
 * @apiParam (Body parameters) {String} [f_color] New value of <code>f_color</code> for status
 * @apiParam (Body parameters) {Integer} [f_position] New value of <code>f_position</code> for status
 * @apiParam (Body parameters) {Boolean} [f_default] New value of <code>f_default</code> for status
 * @apiParam (Body parameters) {Boolean} [f_comment] New value of <code>f_comment</code> for status
 * @apiParam (Body parameters) {Integer} [fk_id_status_translations] <code>id</code> of entity translation to associate
 * @apiParam (Body parameters) {Integer} [fk_id_status_actions] <code>id</code> of entity action to associate
 * @apiSuccess {Object} status Updated status
 * @apiSuccess {Integer} status.id <code>id</code> of status
 * @apiSuccess {String} status.f_entity <code>f_entity</code> of status
 * @apiSuccess {String} status.f_field <code>f_field</code> of status
 * @apiSuccess {String} status.f_name <code>f_name</code> of status
 * @apiSuccess {String} status.f_color <code>f_color</code> of status
 * @apiSuccess {Integer} status.f_position <code>f_position</code> of status
 * @apiSuccess {Boolean} status.f_default <code>f_default</code> of status
 * @apiSuccess {Boolean} status.f_comment <code>f_comment</code> of status
 * @apiError (Error 404) {Object} NotFound No status with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update status
 */

/**
 * @api {delete} /api/status/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>status</code> with <code>id</code>
 * @apiGroup e_status
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of status to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No status with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * TRANSLATION
 ********************************************
 *******************************************/
/** @apiDefine e_translation Translation */
/**
 * @api {get} /api/translation?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>translation</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_translation
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} translations List of translation
 * @apiSuccess {Integer} translations.id <code>id</code> of translation
 * @apiSuccess {Integer} translations.version <code>version</code> of translation
 * @apiSuccess {String} translations.f_language <code>f_language</code> of translation
 * @apiSuccess {String} translations.f_value <code>f_value</code> of translation
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for translation
 */

/**
 * @api {get} /api/translation/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>translation</code> with <code>id</code>
 * @apiGroup e_translation
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of translation to fetch
 * @apiSuccess {Object} translation Object of translation
 * @apiSuccess {Integer} translation.id <code>id</code> of translation
 * @apiSuccess {Integer} translation.version <code>version</code> of translation
 * @apiSuccess {String} translation.f_language <code>f_language</code> of translation
 * @apiSuccess {String} translation.f_value <code>f_value</code> of translation
 * @apiError (Error 404) {Object} NotFound No translation with ID <code>id</code> found
 */

/**
 * @api {post} /api/translation/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>translation</code> using values defined in request's <code>body</code>
 * @apiGroup e_translation
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_language] <code>f_language</code> of translation
 * @apiParam (Body parameters) {String} [f_value] <code>f_value</code> of translation
 * @apiSuccess {Object} translation Created translation
 * @apiSuccess {Integer} translation.id <code>id</code> of translation
 * @apiSuccess {String} translation.f_language <code>f_language</code> of translation
 * @apiSuccess {String} translation.f_value <code>f_value</code> of translation
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create translation
 */

/**
 * @api {put} /api/translation/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>translation</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_translation
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the translation to update
 * @apiParam (Body parameters) {String} [f_language] New value of <code>f_language</code> for translation
 * @apiParam (Body parameters) {String} [f_value] New value of <code>f_value</code> for translation
 * @apiSuccess {Object} translation Updated translation
 * @apiSuccess {Integer} translation.id <code>id</code> of translation
 * @apiSuccess {String} translation.f_language <code>f_language</code> of translation
 * @apiSuccess {String} translation.f_value <code>f_value</code> of translation
 * @apiError (Error 404) {Object} NotFound No translation with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update translation
 */

/**
 * @api {delete} /api/translation/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>translation</code> with <code>id</code>
 * @apiGroup e_translation
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of translation to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No translation with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * MEDIA
 ********************************************
 *******************************************/
/** @apiDefine e_media Media */
/**
 * @api {get} /api/media?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>media</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_media
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} medias List of media
 * @apiSuccess {Integer} medias.id <code>id</code> of media
 * @apiSuccess {Integer} medias.version <code>version</code> of media
 * @apiSuccess {Enum} medias.f_type <code>f_type</code> of media
 * @apiSuccess {String} medias.f_name <code>f_name</code> of media
 * @apiSuccess {String} medias.f_target_entity <code>f_target_entity</code> of media
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for media
 */

/**
 * @api {get} /api/media/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>media</code> with <code>id</code>
 * @apiGroup e_media
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of media to fetch
 * @apiSuccess {Object} media Object of media
 * @apiSuccess {Integer} media.id <code>id</code> of media
 * @apiSuccess {Integer} media.version <code>version</code> of media
 * @apiSuccess {Enum} media.f_type <code>f_type</code> of media
 * @apiSuccess {String} media.f_name <code>f_name</code> of media
 * @apiSuccess {String} media.f_target_entity <code>f_target_entity</code> of media
 * @apiError (Error 404) {Object} NotFound No media with ID <code>id</code> found
 */

/**
 * @api {get} /api/media/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>media</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_media
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the media to which <code>association</code> is related
 * @apiParam (Params parameters) {String=media_mail,media_notification,media_sms} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No media with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/media/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>media</code> using values defined in request's <code>body</code>
 * @apiGroup e_media
 * @apiUse token
 * @apiParam (Body parameters) {Enum} [f_type] <code>f_type</code> of media
 * @apiParam (Body parameters) {String} [f_name] <code>f_name</code> of media
 * @apiParam (Body parameters) {String} [f_target_entity] <code>f_target_entity</code> of media
 * @apiParam (Body parameters) {Integer} [fk_id_media_mail] <code>id</code> of entity media_mail to associate
 * @apiParam (Body parameters) {Integer} [fk_id_media_notification] <code>id</code> of entity media_notification to associate
 * @apiParam (Body parameters) {Integer} [fk_id_media_sms] <code>id</code> of entity media_sms to associate
 * @apiSuccess {Object} media Created media
 * @apiSuccess {Integer} media.id <code>id</code> of media
 * @apiSuccess {Enum} media.f_type <code>f_type</code> of media
 * @apiSuccess {String} media.f_name <code>f_name</code> of media
 * @apiSuccess {String} media.f_target_entity <code>f_target_entity</code> of media
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create media
 */

/**
 * @api {put} /api/media/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>media</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_media
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the media to update
 * @apiParam (Body parameters) {Enum} [f_type] New value of <code>f_type</code> for media
 * @apiParam (Body parameters) {String} [f_name] New value of <code>f_name</code> for media
 * @apiParam (Body parameters) {String} [f_target_entity] New value of <code>f_target_entity</code> for media
 * @apiParam (Body parameters) {Integer} [fk_id_media_mail] <code>id</code> of entity media_mail to associate
 * @apiParam (Body parameters) {Integer} [fk_id_media_notification] <code>id</code> of entity media_notification to associate
 * @apiParam (Body parameters) {Integer} [fk_id_media_sms] <code>id</code> of entity media_sms to associate
 * @apiSuccess {Object} media Updated media
 * @apiSuccess {Integer} media.id <code>id</code> of media
 * @apiSuccess {Enum} media.f_type <code>f_type</code> of media
 * @apiSuccess {String} media.f_name <code>f_name</code> of media
 * @apiSuccess {String} media.f_target_entity <code>f_target_entity</code> of media
 * @apiError (Error 404) {Object} NotFound No media with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update media
 */

/**
 * @api {delete} /api/media/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>media</code> with <code>id</code>
 * @apiGroup e_media
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of media to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No media with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * MEDIA MAIL
 ********************************************
 *******************************************/
/** @apiDefine e_media_mail Media mail */
/**
 * @api {get} /api/media_mail?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>media_mail</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_media_mail
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} media_mails List of media_mail
 * @apiSuccess {Integer} media_mails.id <code>id</code> of media_mail
 * @apiSuccess {Integer} media_mails.version <code>version</code> of media_mail
 * @apiSuccess {String} media_mails.f_to <code>f_to</code> of media_mail
 * @apiSuccess {String} media_mails.f_cc <code>f_cc</code> of media_mail
 * @apiSuccess {String} media_mails.f_cci <code>f_cci</code> of media_mail
 * @apiSuccess {String} media_mails.f_from <code>f_from</code> of media_mail
 * @apiSuccess {String} media_mails.f_subject <code>f_subject</code> of media_mail
 * @apiSuccess {Text} media_mails.f_content <code>f_content</code> of media_mail
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for media_mail
 */

/**
 * @api {get} /api/media_mail/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>media_mail</code> with <code>id</code>
 * @apiGroup e_media_mail
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of media_mail to fetch
 * @apiSuccess {Object} media_mail Object of media_mail
 * @apiSuccess {Integer} media_mail.id <code>id</code> of media_mail
 * @apiSuccess {Integer} media_mail.version <code>version</code> of media_mail
 * @apiSuccess {String} media_mail.f_to <code>f_to</code> of media_mail
 * @apiSuccess {String} media_mail.f_cc <code>f_cc</code> of media_mail
 * @apiSuccess {String} media_mail.f_cci <code>f_cci</code> of media_mail
 * @apiSuccess {String} media_mail.f_from <code>f_from</code> of media_mail
 * @apiSuccess {String} media_mail.f_subject <code>f_subject</code> of media_mail
 * @apiSuccess {Text} media_mail.f_content <code>f_content</code> of media_mail
 * @apiError (Error 404) {Object} NotFound No media_mail with ID <code>id</code> found
 */

/**
 * @api {post} /api/media_mail/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>media_mail</code> using values defined in request's <code>body</code>
 * @apiGroup e_media_mail
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_to] <code>f_to</code> of media_mail
 * @apiParam (Body parameters) {String} [f_cc] <code>f_cc</code> of media_mail
 * @apiParam (Body parameters) {String} [f_cci] <code>f_cci</code> of media_mail
 * @apiParam (Body parameters) {String} [f_from] <code>f_from</code> of media_mail
 * @apiParam (Body parameters) {String} [f_subject] <code>f_subject</code> of media_mail
 * @apiParam (Body parameters) {Text} [f_content] <code>f_content</code> of media_mail
 * @apiSuccess {Object} media_mail Created media_mail
 * @apiSuccess {Integer} media_mail.id <code>id</code> of media_mail
 * @apiSuccess {String} media_mail.f_to <code>f_to</code> of media_mail
 * @apiSuccess {String} media_mail.f_cc <code>f_cc</code> of media_mail
 * @apiSuccess {String} media_mail.f_cci <code>f_cci</code> of media_mail
 * @apiSuccess {String} media_mail.f_from <code>f_from</code> of media_mail
 * @apiSuccess {String} media_mail.f_subject <code>f_subject</code> of media_mail
 * @apiSuccess {Text} media_mail.f_content <code>f_content</code> of media_mail
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create media_mail
 */

/**
 * @api {put} /api/media_mail/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>media_mail</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_media_mail
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the media_mail to update
 * @apiParam (Body parameters) {String} [f_to] New value of <code>f_to</code> for media_mail
 * @apiParam (Body parameters) {String} [f_cc] New value of <code>f_cc</code> for media_mail
 * @apiParam (Body parameters) {String} [f_cci] New value of <code>f_cci</code> for media_mail
 * @apiParam (Body parameters) {String} [f_from] New value of <code>f_from</code> for media_mail
 * @apiParam (Body parameters) {String} [f_subject] New value of <code>f_subject</code> for media_mail
 * @apiParam (Body parameters) {Text} [f_content] New value of <code>f_content</code> for media_mail
 * @apiSuccess {Object} media_mail Updated media_mail
 * @apiSuccess {Integer} media_mail.id <code>id</code> of media_mail
 * @apiSuccess {String} media_mail.f_to <code>f_to</code> of media_mail
 * @apiSuccess {String} media_mail.f_cc <code>f_cc</code> of media_mail
 * @apiSuccess {String} media_mail.f_cci <code>f_cci</code> of media_mail
 * @apiSuccess {String} media_mail.f_from <code>f_from</code> of media_mail
 * @apiSuccess {String} media_mail.f_subject <code>f_subject</code> of media_mail
 * @apiSuccess {Text} media_mail.f_content <code>f_content</code> of media_mail
 * @apiError (Error 404) {Object} NotFound No media_mail with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update media_mail
 */

/**
 * @api {delete} /api/media_mail/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>media_mail</code> with <code>id</code>
 * @apiGroup e_media_mail
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of media_mail to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No media_mail with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * MEDIA NOTIFICATION
 ********************************************
 *******************************************/
/** @apiDefine e_media_notification Media notification */
/**
 * @api {get} /api/media_notification?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>media_notification</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_media_notification
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} media_notifications List of media_notification
 * @apiSuccess {Integer} media_notifications.id <code>id</code> of media_notification
 * @apiSuccess {Integer} media_notifications.version <code>version</code> of media_notification
 * @apiSuccess {String} media_notifications.f_title <code>f_title</code> of media_notification
 * @apiSuccess {String} media_notifications.f_description <code>f_description</code> of media_notification
 * @apiSuccess {String} media_notifications.f_icon <code>f_icon</code> of media_notification
 * @apiSuccess {String} media_notifications.f_color <code>f_color</code> of media_notification
 * @apiSuccess {String} media_notifications.f_targets <code>f_targets</code> of media_notification
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for media_notification
 */

/**
 * @api {get} /api/media_notification/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>media_notification</code> with <code>id</code>
 * @apiGroup e_media_notification
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of media_notification to fetch
 * @apiSuccess {Object} media_notification Object of media_notification
 * @apiSuccess {Integer} media_notification.id <code>id</code> of media_notification
 * @apiSuccess {Integer} media_notification.version <code>version</code> of media_notification
 * @apiSuccess {String} media_notification.f_title <code>f_title</code> of media_notification
 * @apiSuccess {String} media_notification.f_description <code>f_description</code> of media_notification
 * @apiSuccess {String} media_notification.f_icon <code>f_icon</code> of media_notification
 * @apiSuccess {String} media_notification.f_color <code>f_color</code> of media_notification
 * @apiSuccess {String} media_notification.f_targets <code>f_targets</code> of media_notification
 * @apiError (Error 404) {Object} NotFound No media_notification with ID <code>id</code> found
 */

/**
 * @api {post} /api/media_notification/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>media_notification</code> using values defined in request's <code>body</code>
 * @apiGroup e_media_notification
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_title] <code>f_title</code> of media_notification
 * @apiParam (Body parameters) {String} [f_description] <code>f_description</code> of media_notification
 * @apiParam (Body parameters) {String} [f_icon] <code>f_icon</code> of media_notification
 * @apiParam (Body parameters) {String} [f_color] <code>f_color</code> of media_notification
 * @apiParam (Body parameters) {String} [f_targets] <code>f_targets</code> of media_notification
 * @apiSuccess {Object} media_notification Created media_notification
 * @apiSuccess {Integer} media_notification.id <code>id</code> of media_notification
 * @apiSuccess {String} media_notification.f_title <code>f_title</code> of media_notification
 * @apiSuccess {String} media_notification.f_description <code>f_description</code> of media_notification
 * @apiSuccess {String} media_notification.f_icon <code>f_icon</code> of media_notification
 * @apiSuccess {String} media_notification.f_color <code>f_color</code> of media_notification
 * @apiSuccess {String} media_notification.f_targets <code>f_targets</code> of media_notification
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create media_notification
 */

/**
 * @api {put} /api/media_notification/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>media_notification</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_media_notification
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the media_notification to update
 * @apiParam (Body parameters) {String} [f_title] New value of <code>f_title</code> for media_notification
 * @apiParam (Body parameters) {String} [f_description] New value of <code>f_description</code> for media_notification
 * @apiParam (Body parameters) {String} [f_icon] New value of <code>f_icon</code> for media_notification
 * @apiParam (Body parameters) {String} [f_color] New value of <code>f_color</code> for media_notification
 * @apiParam (Body parameters) {String} [f_targets] New value of <code>f_targets</code> for media_notification
 * @apiSuccess {Object} media_notification Updated media_notification
 * @apiSuccess {Integer} media_notification.id <code>id</code> of media_notification
 * @apiSuccess {String} media_notification.f_title <code>f_title</code> of media_notification
 * @apiSuccess {String} media_notification.f_description <code>f_description</code> of media_notification
 * @apiSuccess {String} media_notification.f_icon <code>f_icon</code> of media_notification
 * @apiSuccess {String} media_notification.f_color <code>f_color</code> of media_notification
 * @apiSuccess {String} media_notification.f_targets <code>f_targets</code> of media_notification
 * @apiError (Error 404) {Object} NotFound No media_notification with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update media_notification
 */

/**
 * @api {delete} /api/media_notification/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>media_notification</code> with <code>id</code>
 * @apiGroup e_media_notification
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of media_notification to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No media_notification with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * MEDIA SMS
 ********************************************
 *******************************************/
/** @apiDefine e_media_sms Media sms */
/**
 * @api {get} /api/media_sms?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>media_sms</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_media_sms
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} media_smss List of media_sms
 * @apiSuccess {Integer} media_smss.id <code>id</code> of media_sms
 * @apiSuccess {Integer} media_smss.version <code>version</code> of media_sms
 * @apiSuccess {Text} media_smss.f_message <code>f_message</code> of media_sms
 * @apiSuccess {String} media_smss.f_phone_numbers <code>f_phone_numbers</code> of media_sms
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for media_sms
 */

/**
 * @api {get} /api/media_sms/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>media_sms</code> with <code>id</code>
 * @apiGroup e_media_sms
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of media_sms to fetch
 * @apiSuccess {Object} media_sms Object of media_sms
 * @apiSuccess {Integer} media_sms.id <code>id</code> of media_sms
 * @apiSuccess {Integer} media_sms.version <code>version</code> of media_sms
 * @apiSuccess {Text} media_sms.f_message <code>f_message</code> of media_sms
 * @apiSuccess {String} media_sms.f_phone_numbers <code>f_phone_numbers</code> of media_sms
 * @apiError (Error 404) {Object} NotFound No media_sms with ID <code>id</code> found
 */

/**
 * @api {post} /api/media_sms/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>media_sms</code> using values defined in request's <code>body</code>
 * @apiGroup e_media_sms
 * @apiUse token
 * @apiParam (Body parameters) {Text} [f_message] <code>f_message</code> of media_sms
 * @apiParam (Body parameters) {String} [f_phone_numbers] <code>f_phone_numbers</code> of media_sms
 * @apiSuccess {Object} media_sms Created media_sms
 * @apiSuccess {Integer} media_sms.id <code>id</code> of media_sms
 * @apiSuccess {Text} media_sms.f_message <code>f_message</code> of media_sms
 * @apiSuccess {String} media_sms.f_phone_numbers <code>f_phone_numbers</code> of media_sms
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create media_sms
 */

/**
 * @api {put} /api/media_sms/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>media_sms</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_media_sms
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the media_sms to update
 * @apiParam (Body parameters) {Text} [f_message] New value of <code>f_message</code> for media_sms
 * @apiParam (Body parameters) {String} [f_phone_numbers] New value of <code>f_phone_numbers</code> for media_sms
 * @apiSuccess {Object} media_sms Updated media_sms
 * @apiSuccess {Integer} media_sms.id <code>id</code> of media_sms
 * @apiSuccess {Text} media_sms.f_message <code>f_message</code> of media_sms
 * @apiSuccess {String} media_sms.f_phone_numbers <code>f_phone_numbers</code> of media_sms
 * @apiError (Error 404) {Object} NotFound No media_sms with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update media_sms
 */

/**
 * @api {delete} /api/media_sms/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>media_sms</code> with <code>id</code>
 * @apiGroup e_media_sms
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of media_sms to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No media_sms with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * ACTION
 ********************************************
 *******************************************/
/** @apiDefine e_action Action */
/**
 * @api {get} /api/action?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>action</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_action
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} actions List of action
 * @apiSuccess {Integer} actions.id <code>id</code> of action
 * @apiSuccess {Integer} actions.version <code>version</code> of action
 * @apiSuccess {Integer} actions.f_order <code>f_order</code> of action
 * @apiSuccess {Enum} actions.f_execution <code>f_execution</code> of action
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for action
 */

/**
 * @api {get} /api/action/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>action</code> with <code>id</code>
 * @apiGroup e_action
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of action to fetch
 * @apiSuccess {Object} action Object of action
 * @apiSuccess {Integer} action.id <code>id</code> of action
 * @apiSuccess {Integer} action.version <code>version</code> of action
 * @apiSuccess {Integer} action.f_order <code>f_order</code> of action
 * @apiSuccess {Enum} action.f_execution <code>f_execution</code> of action
 * @apiError (Error 404) {Object} NotFound No action with ID <code>id</code> found
 */

/**
 * @api {get} /api/action/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>action</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_action
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the action to which <code>association</code> is related
 * @apiParam (Params parameters) {String=media} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No action with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/action/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>action</code> using values defined in request's <code>body</code>
 * @apiGroup e_action
 * @apiUse token
 * @apiParam (Body parameters) {Integer} [f_order] <code>f_order</code> of action
 * @apiParam (Body parameters) {Enum} [f_execution] <code>f_execution</code> of action
 * @apiParam (Body parameters) {Integer} [fk_id_media_media] <code>id</code> of entity media to associate
 * @apiSuccess {Object} action Created action
 * @apiSuccess {Integer} action.id <code>id</code> of action
 * @apiSuccess {Integer} action.f_order <code>f_order</code> of action
 * @apiSuccess {Enum} action.f_execution <code>f_execution</code> of action
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create action
 */

/**
 * @api {put} /api/action/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>action</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_action
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the action to update
 * @apiParam (Body parameters) {Integer} [f_order] New value of <code>f_order</code> for action
 * @apiParam (Body parameters) {Enum} [f_execution] New value of <code>f_execution</code> for action
 * @apiParam (Body parameters) {Integer} [fk_id_media_media] <code>id</code> of entity media to associate
 * @apiSuccess {Object} action Updated action
 * @apiSuccess {Integer} action.id <code>id</code> of action
 * @apiSuccess {Integer} action.f_order <code>f_order</code> of action
 * @apiSuccess {Enum} action.f_execution <code>f_execution</code> of action
 * @apiError (Error 404) {Object} NotFound No action with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update action
 */

/**
 * @api {delete} /api/action/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>action</code> with <code>id</code>
 * @apiGroup e_action
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of action to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No action with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * NOTIFICATION
 ********************************************
 *******************************************/
/** @apiDefine e_notification Notification */
/**
 * @api {get} /api/notification?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>notification</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_notification
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} notifications List of notification
 * @apiSuccess {Integer} notifications.id <code>id</code> of notification
 * @apiSuccess {Integer} notifications.version <code>version</code> of notification
 * @apiSuccess {String} notifications.f_title <code>f_title</code> of notification
 * @apiSuccess {String} notifications.f_description <code>f_description</code> of notification
 * @apiSuccess {String} notifications.f_url <code>f_url</code> of notification
 * @apiSuccess {String} notifications.f_color <code>f_color</code> of notification
 * @apiSuccess {String} notifications.f_icon <code>f_icon</code> of notification
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for notification
 */

/**
 * @api {get} /api/notification/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>notification</code> with <code>id</code>
 * @apiGroup e_notification
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of notification to fetch
 * @apiSuccess {Object} notification Object of notification
 * @apiSuccess {Integer} notification.id <code>id</code> of notification
 * @apiSuccess {Integer} notification.version <code>version</code> of notification
 * @apiSuccess {String} notification.f_title <code>f_title</code> of notification
 * @apiSuccess {String} notification.f_description <code>f_description</code> of notification
 * @apiSuccess {String} notification.f_url <code>f_url</code> of notification
 * @apiSuccess {String} notification.f_color <code>f_color</code> of notification
 * @apiSuccess {String} notification.f_icon <code>f_icon</code> of notification
 * @apiError (Error 404) {Object} NotFound No notification with ID <code>id</code> found
 */

/**
 * @api {get} /api/notification/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>notification</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_notification
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the notification to which <code>association</code> is related
 * @apiParam (Params parameters) {String=user} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No notification with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/notification/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>notification</code> using values defined in request's <code>body</code>
 * @apiGroup e_notification
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_title] <code>f_title</code> of notification
 * @apiParam (Body parameters) {String} [f_description] <code>f_description</code> of notification
 * @apiParam (Body parameters) {String} [f_url] <code>f_url</code> of notification
 * @apiParam (Body parameters) {String} [f_color] <code>f_color</code> of notification
 * @apiParam (Body parameters) {String} [f_icon] <code>f_icon</code> of notification
 * @apiSuccess {Object} notification Created notification
 * @apiSuccess {Integer} notification.id <code>id</code> of notification
 * @apiSuccess {String} notification.f_title <code>f_title</code> of notification
 * @apiSuccess {String} notification.f_description <code>f_description</code> of notification
 * @apiSuccess {String} notification.f_url <code>f_url</code> of notification
 * @apiSuccess {String} notification.f_color <code>f_color</code> of notification
 * @apiSuccess {String} notification.f_icon <code>f_icon</code> of notification
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create notification
 */

/**
 * @api {put} /api/notification/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>notification</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_notification
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the notification to update
 * @apiParam (Body parameters) {String} [f_title] New value of <code>f_title</code> for notification
 * @apiParam (Body parameters) {String} [f_description] New value of <code>f_description</code> for notification
 * @apiParam (Body parameters) {String} [f_url] New value of <code>f_url</code> for notification
 * @apiParam (Body parameters) {String} [f_color] New value of <code>f_color</code> for notification
 * @apiParam (Body parameters) {String} [f_icon] New value of <code>f_icon</code> for notification
 * @apiSuccess {Object} notification Updated notification
 * @apiSuccess {Integer} notification.id <code>id</code> of notification
 * @apiSuccess {String} notification.f_title <code>f_title</code> of notification
 * @apiSuccess {String} notification.f_description <code>f_description</code> of notification
 * @apiSuccess {String} notification.f_url <code>f_url</code> of notification
 * @apiSuccess {String} notification.f_color <code>f_color</code> of notification
 * @apiSuccess {String} notification.f_icon <code>f_icon</code> of notification
 * @apiError (Error 404) {Object} NotFound No notification with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update notification
 */

/**
 * @api {delete} /api/notification/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>notification</code> with <code>id</code>
 * @apiGroup e_notification
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of notification to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No notification with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * INLINE HELP
 ********************************************
 *******************************************/
/** @apiDefine e_inline_help Inline help */
/**
 * @api {get} /api/inline_help?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>inline_help</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_inline_help
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} inline_helps List of inline_help
 * @apiSuccess {Integer} inline_helps.id <code>id</code> of inline_help
 * @apiSuccess {Integer} inline_helps.version <code>version</code> of inline_help
 * @apiSuccess {String} inline_helps.f_entity <code>f_entity</code> of inline_help
 * @apiSuccess {String} inline_helps.f_field <code>f_field</code> of inline_help
 * @apiSuccess {Text} inline_helps.f_content <code>f_content</code> of inline_help
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for inline_help
 */

/**
 * @api {get} /api/inline_help/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>inline_help</code> with <code>id</code>
 * @apiGroup e_inline_help
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of inline_help to fetch
 * @apiSuccess {Object} inline_help Object of inline_help
 * @apiSuccess {Integer} inline_help.id <code>id</code> of inline_help
 * @apiSuccess {Integer} inline_help.version <code>version</code> of inline_help
 * @apiSuccess {String} inline_help.f_entity <code>f_entity</code> of inline_help
 * @apiSuccess {String} inline_help.f_field <code>f_field</code> of inline_help
 * @apiSuccess {Text} inline_help.f_content <code>f_content</code> of inline_help
 * @apiError (Error 404) {Object} NotFound No inline_help with ID <code>id</code> found
 */

/**
 * @api {post} /api/inline_help/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>inline_help</code> using values defined in request's <code>body</code>
 * @apiGroup e_inline_help
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_entity] <code>f_entity</code> of inline_help
 * @apiParam (Body parameters) {String} [f_field] <code>f_field</code> of inline_help
 * @apiParam (Body parameters) {Text} [f_content] <code>f_content</code> of inline_help
 * @apiSuccess {Object} inline_help Created inline_help
 * @apiSuccess {Integer} inline_help.id <code>id</code> of inline_help
 * @apiSuccess {String} inline_help.f_entity <code>f_entity</code> of inline_help
 * @apiSuccess {String} inline_help.f_field <code>f_field</code> of inline_help
 * @apiSuccess {Text} inline_help.f_content <code>f_content</code> of inline_help
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create inline_help
 */

/**
 * @api {put} /api/inline_help/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>inline_help</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_inline_help
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the inline_help to update
 * @apiParam (Body parameters) {String} [f_entity] New value of <code>f_entity</code> for inline_help
 * @apiParam (Body parameters) {String} [f_field] New value of <code>f_field</code> for inline_help
 * @apiParam (Body parameters) {Text} [f_content] New value of <code>f_content</code> for inline_help
 * @apiSuccess {Object} inline_help Updated inline_help
 * @apiSuccess {Integer} inline_help.id <code>id</code> of inline_help
 * @apiSuccess {String} inline_help.f_entity <code>f_entity</code> of inline_help
 * @apiSuccess {String} inline_help.f_field <code>f_field</code> of inline_help
 * @apiSuccess {Text} inline_help.f_content <code>f_content</code> of inline_help
 * @apiError (Error 404) {Object} NotFound No inline_help with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update inline_help
 */

/**
 * @api {delete} /api/inline_help/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>inline_help</code> with <code>id</code>
 * @apiGroup e_inline_help
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of inline_help to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No inline_help with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * SETTINGS
 ********************************************
 *******************************************/
/** @apiDefine e_settings Settings */
/**
 * @api {get} /api/settings?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>settings</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_settings
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} settingss List of settings
 * @apiSuccess {Integer} settingss.id <code>id</code> of settings
 * @apiSuccess {Integer} settingss.version <code>version</code> of settings
 * @apiSuccess {Enum} settingss.f_types <code>f_types</code> of settings
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for settings
 */

/**
 * @api {get} /api/settings/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>settings</code> with <code>id</code>
 * @apiGroup e_settings
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of settings to fetch
 * @apiSuccess {Object} settings Object of settings
 * @apiSuccess {Integer} settings.id <code>id</code> of settings
 * @apiSuccess {Integer} settings.version <code>version</code> of settings
 * @apiSuccess {Enum} settings.f_types <code>f_types</code> of settings
 * @apiError (Error 404) {Object} NotFound No settings with ID <code>id</code> found
 */

/**
 * @api {post} /api/settings/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>settings</code> using values defined in request's <code>body</code>
 * @apiGroup e_settings
 * @apiUse token
 * @apiParam (Body parameters) {Enum} [f_types] <code>f_types</code> of settings
 * @apiSuccess {Object} settings Created settings
 * @apiSuccess {Integer} settings.id <code>id</code> of settings
 * @apiSuccess {Enum} settings.f_types <code>f_types</code> of settings
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create settings
 */

/**
 * @api {put} /api/settings/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>settings</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_settings
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the settings to update
 * @apiParam (Body parameters) {Enum} [f_types] New value of <code>f_types</code> for settings
 * @apiSuccess {Object} settings Updated settings
 * @apiSuccess {Integer} settings.id <code>id</code> of settings
 * @apiSuccess {Enum} settings.f_types <code>f_types</code> of settings
 * @apiError (Error 404) {Object} NotFound No settings with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update settings
 */

/**
 * @api {delete} /api/settings/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>settings</code> with <code>id</code>
 * @apiGroup e_settings
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of settings to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No settings with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * ORGANIZATION
 ********************************************
 *******************************************/
/** @apiDefine e_organization Organization */
/**
 * @api {get} /api/organization?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>organization</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_organization
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} organizations List of organization
 * @apiSuccess {Integer} organizations.id <code>id</code> of organization
 * @apiSuccess {Integer} organizations.version <code>version</code> of organization
 * @apiSuccess {String} organizations.f_name <code>f_name</code> of organization
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for organization
 */

/**
 * @api {get} /api/organization/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>organization</code> with <code>id</code>
 * @apiGroup e_organization
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of organization to fetch
 * @apiSuccess {Object} organization Object of organization
 * @apiSuccess {Integer} organization.id <code>id</code> of organization
 * @apiSuccess {Integer} organization.version <code>version</code> of organization
 * @apiSuccess {String} organization.f_name <code>f_name</code> of organization
 * @apiError (Error 404) {Object} NotFound No organization with ID <code>id</code> found
 */

/**
 * @api {get} /api/organization/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>organization</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_organization
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the organization to which <code>association</code> is related
 * @apiParam (Params parameters) {String=address_14,server} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No organization with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/organization/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>organization</code> using values defined in request's <code>body</code>
 * @apiGroup e_organization
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_name] <code>f_name</code> of organization
 * @apiParam (Body parameters) {Integer} [fk_id_c_address] <code>id</code> of entity address_14 to associate
 * @apiParam (Body parameters) {Integer} [fk_id_organization_organization] <code>id</code> of entity server to associate
 * @apiSuccess {Object} organization Created organization
 * @apiSuccess {Integer} organization.id <code>id</code> of organization
 * @apiSuccess {String} organization.f_name <code>f_name</code> of organization
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create organization
 */

/**
 * @api {put} /api/organization/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>organization</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_organization
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the organization to update
 * @apiParam (Body parameters) {String} [f_name] New value of <code>f_name</code> for organization
 * @apiParam (Body parameters) {Integer} [fk_id_c_address] <code>id</code> of entity address_14 to associate
 * @apiParam (Body parameters) {Integer} [fk_id_organization_organization] <code>id</code> of entity server to associate
 * @apiSuccess {Object} organization Updated organization
 * @apiSuccess {Integer} organization.id <code>id</code> of organization
 * @apiSuccess {String} organization.f_name <code>f_name</code> of organization
 * @apiError (Error 404) {Object} NotFound No organization with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update organization
 */

/**
 * @api {delete} /api/organization/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>organization</code> with <code>id</code>
 * @apiGroup e_organization
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of organization to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No organization with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * SERVER CATEGORY
 ********************************************
 *******************************************/
/** @apiDefine e_server_category Server category */
/**
 * @api {get} /api/server_category?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>server_category</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_server_category
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} server_categorys List of server_category
 * @apiSuccess {Integer} server_categorys.id <code>id</code> of server_category
 * @apiSuccess {Integer} server_categorys.version <code>version</code> of server_category
 * @apiSuccess {String} server_categorys.f_name <code>f_name</code> of server_category
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for server_category
 */

/**
 * @api {get} /api/server_category/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>server_category</code> with <code>id</code>
 * @apiGroup e_server_category
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of server_category to fetch
 * @apiSuccess {Object} server_category Object of server_category
 * @apiSuccess {Integer} server_category.id <code>id</code> of server_category
 * @apiSuccess {Integer} server_category.version <code>version</code> of server_category
 * @apiSuccess {String} server_category.f_name <code>f_name</code> of server_category
 * @apiError (Error 404) {Object} NotFound No server_category with ID <code>id</code> found
 */

/**
 * @api {post} /api/server_category/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>server_category</code> using values defined in request's <code>body</code>
 * @apiGroup e_server_category
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_name] <code>f_name</code> of server_category
 * @apiSuccess {Object} server_category Created server_category
 * @apiSuccess {Integer} server_category.id <code>id</code> of server_category
 * @apiSuccess {String} server_category.f_name <code>f_name</code> of server_category
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create server_category
 */

/**
 * @api {put} /api/server_category/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>server_category</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_server_category
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the server_category to update
 * @apiParam (Body parameters) {String} [f_name] New value of <code>f_name</code> for server_category
 * @apiSuccess {Object} server_category Updated server_category
 * @apiSuccess {Integer} server_category.id <code>id</code> of server_category
 * @apiSuccess {String} server_category.f_name <code>f_name</code> of server_category
 * @apiError (Error 404) {Object} NotFound No server_category with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update server_category
 */

/**
 * @api {delete} /api/server_category/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>server_category</code> with <code>id</code>
 * @apiGroup e_server_category
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of server_category to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No server_category with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * SERVER
 ********************************************
 *******************************************/
/** @apiDefine e_server Server */
/**
 * @api {get} /api/server?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>server</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_server
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} servers List of server
 * @apiSuccess {Integer} servers.id <code>id</code> of server
 * @apiSuccess {Integer} servers.version <code>version</code> of server
 * @apiSuccess {String} servers.f_name <code>f_name</code> of server
 * @apiSuccess {String} servers.f_ip <code>f_ip</code> of server
 * @apiSuccess {String} servers.f_location <code>f_location</code> of server
 * @apiSuccess {Virtual} servers.s_status <code>s_status</code> of server
 * @apiSuccess {Text} servers.f_description <code>f_description</code> of server
 * @apiSuccess {String} servers.f_file <code>f_file</code> of server
 * @apiSuccess {Boolean} servers.f_is_alive <code>f_is_alive</code> of server
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for server
 */

/**
 * @api {get} /api/server/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>server</code> with <code>id</code>
 * @apiGroup e_server
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of server to fetch
 * @apiSuccess {Object} server Object of server
 * @apiSuccess {Integer} server.id <code>id</code> of server
 * @apiSuccess {Integer} server.version <code>version</code> of server
 * @apiSuccess {String} server.f_name <code>f_name</code> of server
 * @apiSuccess {String} server.f_ip <code>f_ip</code> of server
 * @apiSuccess {String} server.f_location <code>f_location</code> of server
 * @apiSuccess {Virtual} server.s_status <code>s_status</code> of server
 * @apiSuccess {Text} server.f_description <code>f_description</code> of server
 * @apiSuccess {String} server.f_file <code>f_file</code> of server
 * @apiSuccess {Boolean} server.f_is_alive <code>f_is_alive</code> of server
 * @apiError (Error 404) {Object} NotFound No server with ID <code>id</code> found
 */

/**
 * @api {get} /api/server/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>server</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_server
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the server to which <code>association</code> is related
 * @apiParam (Params parameters) {String=address_16,history_e_server_s_status,status,server_category,server,service,application,organization,user,server_config,server_state_history} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No server with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/server/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>server</code> using values defined in request's <code>body</code>
 * @apiGroup e_server
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_name] <code>f_name</code> of server
 * @apiParam (Body parameters) {String} [f_ip] <code>f_ip</code> of server
 * @apiParam (Body parameters) {String} [f_location] <code>f_location</code> of server
 * @apiParam (Body parameters) {Virtual} [s_status] <code>s_status</code> of server
 * @apiParam (Body parameters) {Text} [f_description] <code>f_description</code> of server
 * @apiParam (Body parameters) {String} [f_file] <code>f_file</code> of server
 * @apiParam (Body parameters) {Boolean} [f_is_alive] <code>f_is_alive</code> of server
 * @apiParam (Body parameters) {Integer} [fk_id_c_address] <code>id</code> of entity address_16 to associate
 * @apiParam (Body parameters) {Integer} [fk_id_server_history_status] <code>id</code> of entity history_e_server_s_status to associate
 * @apiParam (Body parameters) {Integer} [fk_id_status_status] <code>id</code> of entity status to associate
 * @apiParam (Body parameters) {Integer} [fk_id_server_category_server_category] <code>id</code> of entity server_category to associate
 * @apiParam (Body parameters) {Integer} [fk_id_server] <code>id</code> of entity application to associate
 * @apiParam (Body parameters) {Integer} [fk_id_organization_organization] <code>id</code> of entity organization to associate
 * @apiParam (Body parameters) {Integer} [fk_id_server] <code>id</code> of entity user to associate
 * @apiParam (Body parameters) {Integer} [fk_id_server_config] <code>id</code> of entity server_config to associate
 * @apiParam (Body parameters) {Integer} [fk_id_server] <code>id</code> of entity server_state_history to associate
 * @apiSuccess {Object} server Created server
 * @apiSuccess {Integer} server.id <code>id</code> of server
 * @apiSuccess {String} server.f_name <code>f_name</code> of server
 * @apiSuccess {String} server.f_ip <code>f_ip</code> of server
 * @apiSuccess {String} server.f_location <code>f_location</code> of server
 * @apiSuccess {Virtual} server.s_status <code>s_status</code> of server
 * @apiSuccess {Text} server.f_description <code>f_description</code> of server
 * @apiSuccess {String} server.f_file <code>f_file</code> of server
 * @apiSuccess {Boolean} server.f_is_alive <code>f_is_alive</code> of server
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create server
 */

/**
 * @api {put} /api/server/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>server</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_server
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the server to update
 * @apiParam (Body parameters) {String} [f_name] New value of <code>f_name</code> for server
 * @apiParam (Body parameters) {String} [f_ip] New value of <code>f_ip</code> for server
 * @apiParam (Body parameters) {String} [f_location] New value of <code>f_location</code> for server
 * @apiParam (Body parameters) {Virtual} [s_status] New value of <code>s_status</code> for server
 * @apiParam (Body parameters) {Text} [f_description] New value of <code>f_description</code> for server
 * @apiParam (Body parameters) {String} [f_file] New value of <code>f_file</code> for server
 * @apiParam (Body parameters) {Boolean} [f_is_alive] New value of <code>f_is_alive</code> for server
 * @apiParam (Body parameters) {Integer} [fk_id_c_address] <code>id</code> of entity address_16 to associate
 * @apiParam (Body parameters) {Integer} [fk_id_server_history_status] <code>id</code> of entity history_e_server_s_status to associate
 * @apiParam (Body parameters) {Integer} [fk_id_status_status] <code>id</code> of entity status to associate
 * @apiParam (Body parameters) {Integer} [fk_id_server_category_server_category] <code>id</code> of entity server_category to associate
 * @apiParam (Body parameters) {Integer} [fk_id_server] <code>id</code> of entity application to associate
 * @apiParam (Body parameters) {Integer} [fk_id_organization_organization] <code>id</code> of entity organization to associate
 * @apiParam (Body parameters) {Integer} [fk_id_server] <code>id</code> of entity user to associate
 * @apiParam (Body parameters) {Integer} [fk_id_server_config] <code>id</code> of entity server_config to associate
 * @apiParam (Body parameters) {Integer} [fk_id_server] <code>id</code> of entity server_state_history to associate
 * @apiSuccess {Object} server Updated server
 * @apiSuccess {Integer} server.id <code>id</code> of server
 * @apiSuccess {String} server.f_name <code>f_name</code> of server
 * @apiSuccess {String} server.f_ip <code>f_ip</code> of server
 * @apiSuccess {String} server.f_location <code>f_location</code> of server
 * @apiSuccess {Virtual} server.s_status <code>s_status</code> of server
 * @apiSuccess {Text} server.f_description <code>f_description</code> of server
 * @apiSuccess {String} server.f_file <code>f_file</code> of server
 * @apiSuccess {Boolean} server.f_is_alive <code>f_is_alive</code> of server
 * @apiError (Error 404) {Object} NotFound No server with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update server
 */

/**
 * @api {delete} /api/server/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>server</code> with <code>id</code>
 * @apiGroup e_server
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of server to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No server with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * SERVICE
 ********************************************
 *******************************************/
/** @apiDefine e_service Service */
/**
 * @api {get} /api/service?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>service</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_service
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} services List of service
 * @apiSuccess {Integer} services.id <code>id</code> of service
 * @apiSuccess {Integer} services.version <code>version</code> of service
 * @apiSuccess {String} services.f_name <code>f_name</code> of service
 * @apiSuccess {Text} services.f_instruction <code>f_instruction</code> of service
 * @apiSuccess {String} services.f_start_command <code>f_start_command</code> of service
 * @apiSuccess {String} services.f_stop_command <code>f_stop_command</code> of service
 * @apiSuccess {String} services.f_restart_command <code>f_restart_command</code> of service
 * @apiSuccess {String} services.f_file <code>f_file</code> of service
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for service
 */

/**
 * @api {get} /api/service/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>service</code> with <code>id</code>
 * @apiGroup e_service
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of service to fetch
 * @apiSuccess {Object} service Object of service
 * @apiSuccess {Integer} service.id <code>id</code> of service
 * @apiSuccess {Integer} service.version <code>version</code> of service
 * @apiSuccess {String} service.f_name <code>f_name</code> of service
 * @apiSuccess {Text} service.f_instruction <code>f_instruction</code> of service
 * @apiSuccess {String} service.f_start_command <code>f_start_command</code> of service
 * @apiSuccess {String} service.f_stop_command <code>f_stop_command</code> of service
 * @apiSuccess {String} service.f_restart_command <code>f_restart_command</code> of service
 * @apiSuccess {String} service.f_file <code>f_file</code> of service
 * @apiError (Error 404) {Object} NotFound No service with ID <code>id</code> found
 */

/**
 * @api {post} /api/service/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>service</code> using values defined in request's <code>body</code>
 * @apiGroup e_service
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_name] <code>f_name</code> of service
 * @apiParam (Body parameters) {Text} [f_instruction] <code>f_instruction</code> of service
 * @apiParam (Body parameters) {String} [f_start_command] <code>f_start_command</code> of service
 * @apiParam (Body parameters) {String} [f_stop_command] <code>f_stop_command</code> of service
 * @apiParam (Body parameters) {String} [f_restart_command] <code>f_restart_command</code> of service
 * @apiParam (Body parameters) {String} [f_file] <code>f_file</code> of service
 * @apiSuccess {Object} service Created service
 * @apiSuccess {Integer} service.id <code>id</code> of service
 * @apiSuccess {String} service.f_name <code>f_name</code> of service
 * @apiSuccess {Text} service.f_instruction <code>f_instruction</code> of service
 * @apiSuccess {String} service.f_start_command <code>f_start_command</code> of service
 * @apiSuccess {String} service.f_stop_command <code>f_stop_command</code> of service
 * @apiSuccess {String} service.f_restart_command <code>f_restart_command</code> of service
 * @apiSuccess {String} service.f_file <code>f_file</code> of service
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create service
 */

/**
 * @api {put} /api/service/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>service</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_service
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the service to update
 * @apiParam (Body parameters) {String} [f_name] New value of <code>f_name</code> for service
 * @apiParam (Body parameters) {Text} [f_instruction] New value of <code>f_instruction</code> for service
 * @apiParam (Body parameters) {String} [f_start_command] New value of <code>f_start_command</code> for service
 * @apiParam (Body parameters) {String} [f_stop_command] New value of <code>f_stop_command</code> for service
 * @apiParam (Body parameters) {String} [f_restart_command] New value of <code>f_restart_command</code> for service
 * @apiParam (Body parameters) {String} [f_file] New value of <code>f_file</code> for service
 * @apiSuccess {Object} service Updated service
 * @apiSuccess {Integer} service.id <code>id</code> of service
 * @apiSuccess {String} service.f_name <code>f_name</code> of service
 * @apiSuccess {Text} service.f_instruction <code>f_instruction</code> of service
 * @apiSuccess {String} service.f_start_command <code>f_start_command</code> of service
 * @apiSuccess {String} service.f_stop_command <code>f_stop_command</code> of service
 * @apiSuccess {String} service.f_restart_command <code>f_restart_command</code> of service
 * @apiSuccess {String} service.f_file <code>f_file</code> of service
 * @apiError (Error 404) {Object} NotFound No service with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update service
 */

/**
 * @api {delete} /api/service/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>service</code> with <code>id</code>
 * @apiGroup e_service
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of service to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No service with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * APPLICATION
 ********************************************
 *******************************************/
/** @apiDefine e_application Application */
/**
 * @api {get} /api/application?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>application</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_application
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} applications List of application
 * @apiSuccess {Integer} applications.id <code>id</code> of application
 * @apiSuccess {Integer} applications.version <code>version</code> of application
 * @apiSuccess {String} applications.f_name <code>f_name</code> of application
 * @apiSuccess {Text} applications.f_description <code>f_description</code> of application
 * @apiSuccess {String} applications.f_ip <code>f_ip</code> of application
 * @apiSuccess {String} applications.f_url <code>f_url</code> of application
 * @apiSuccess {Virtual} applications.s_status <code>s_status</code> of application
 * @apiSuccess {Integer} applications.f_port <code>f_port</code> of application
 * @apiSuccess {String} applications.f_file <code>f_file</code> of application
 * @apiSuccess {Boolean} applications.f_check_state <code>f_check_state</code> of application
 * @apiSuccess {Integer} applications.f_interval <code>f_interval</code> of application
 * @apiSuccess {Integer} applications.f_alert_pings_failed <code>f_alert_pings_failed</code> of application
 * @apiSuccess {Boolean} applications.f_is_alive <code>f_is_alive</code> of application
 * @apiSuccess {Boolean} applications.f_email_alert <code>f_email_alert</code> of application
 * @apiSuccess {Boolean} applications.f_sms_alert <code>f_sms_alert</code> of application
 * @apiSuccess {Boolean} applications.f_notification_alert <code>f_notification_alert</code> of application
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for application
 */

/**
 * @api {get} /api/application/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>application</code> with <code>id</code>
 * @apiGroup e_application
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of application to fetch
 * @apiSuccess {Object} application Object of application
 * @apiSuccess {Integer} application.id <code>id</code> of application
 * @apiSuccess {Integer} application.version <code>version</code> of application
 * @apiSuccess {String} application.f_name <code>f_name</code> of application
 * @apiSuccess {Text} application.f_description <code>f_description</code> of application
 * @apiSuccess {String} application.f_ip <code>f_ip</code> of application
 * @apiSuccess {String} application.f_url <code>f_url</code> of application
 * @apiSuccess {Virtual} application.s_status <code>s_status</code> of application
 * @apiSuccess {Integer} application.f_port <code>f_port</code> of application
 * @apiSuccess {String} application.f_file <code>f_file</code> of application
 * @apiSuccess {Boolean} application.f_check_state <code>f_check_state</code> of application
 * @apiSuccess {Integer} application.f_interval <code>f_interval</code> of application
 * @apiSuccess {Integer} application.f_alert_pings_failed <code>f_alert_pings_failed</code> of application
 * @apiSuccess {Boolean} application.f_is_alive <code>f_is_alive</code> of application
 * @apiSuccess {Boolean} application.f_email_alert <code>f_email_alert</code> of application
 * @apiSuccess {Boolean} application.f_sms_alert <code>f_sms_alert</code> of application
 * @apiSuccess {Boolean} application.f_notification_alert <code>f_notification_alert</code> of application
 * @apiError (Error 404) {Object} NotFound No application with ID <code>id</code> found
 */

/**
 * @api {get} /api/application/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>application</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_application
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the application to which <code>association</code> is related
 * @apiParam (Params parameters) {String=history_e_application_s_status,status,application_state_history} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No application with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/application/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>application</code> using values defined in request's <code>body</code>
 * @apiGroup e_application
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_name] <code>f_name</code> of application
 * @apiParam (Body parameters) {Text} [f_description] <code>f_description</code> of application
 * @apiParam (Body parameters) {String} [f_ip] <code>f_ip</code> of application
 * @apiParam (Body parameters) {String} [f_url] <code>f_url</code> of application
 * @apiParam (Body parameters) {Virtual} [s_status] <code>s_status</code> of application
 * @apiParam (Body parameters) {Integer} [f_port] <code>f_port</code> of application
 * @apiParam (Body parameters) {String} [f_file] <code>f_file</code> of application
 * @apiParam (Body parameters) {Boolean} [f_check_state] <code>f_check_state</code> of application
 * @apiParam (Body parameters) {Integer} [f_interval] <code>f_interval</code> of application
 * @apiParam (Body parameters) {Integer} [f_alert_pings_failed] <code>f_alert_pings_failed</code> of application
 * @apiParam (Body parameters) {Boolean} [f_is_alive] <code>f_is_alive</code> of application
 * @apiParam (Body parameters) {Boolean} [f_email_alert] <code>f_email_alert</code> of application
 * @apiParam (Body parameters) {Boolean} [f_sms_alert] <code>f_sms_alert</code> of application
 * @apiParam (Body parameters) {Boolean} [f_notification_alert] <code>f_notification_alert</code> of application
 * @apiParam (Body parameters) {Integer} [fk_id_application_history_status] <code>id</code> of entity history_e_application_s_status to associate
 * @apiParam (Body parameters) {Integer} [fk_id_status_status] <code>id</code> of entity status to associate
 * @apiParam (Body parameters) {Integer} [fk_id_application] <code>id</code> of entity application_state_history to associate
 * @apiSuccess {Object} application Created application
 * @apiSuccess {Integer} application.id <code>id</code> of application
 * @apiSuccess {String} application.f_name <code>f_name</code> of application
 * @apiSuccess {Text} application.f_description <code>f_description</code> of application
 * @apiSuccess {String} application.f_ip <code>f_ip</code> of application
 * @apiSuccess {String} application.f_url <code>f_url</code> of application
 * @apiSuccess {Virtual} application.s_status <code>s_status</code> of application
 * @apiSuccess {Integer} application.f_port <code>f_port</code> of application
 * @apiSuccess {String} application.f_file <code>f_file</code> of application
 * @apiSuccess {Boolean} application.f_check_state <code>f_check_state</code> of application
 * @apiSuccess {Integer} application.f_interval <code>f_interval</code> of application
 * @apiSuccess {Integer} application.f_alert_pings_failed <code>f_alert_pings_failed</code> of application
 * @apiSuccess {Boolean} application.f_is_alive <code>f_is_alive</code> of application
 * @apiSuccess {Boolean} application.f_email_alert <code>f_email_alert</code> of application
 * @apiSuccess {Boolean} application.f_sms_alert <code>f_sms_alert</code> of application
 * @apiSuccess {Boolean} application.f_notification_alert <code>f_notification_alert</code> of application
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create application
 */

/**
 * @api {put} /api/application/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>application</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_application
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the application to update
 * @apiParam (Body parameters) {String} [f_name] New value of <code>f_name</code> for application
 * @apiParam (Body parameters) {Text} [f_description] New value of <code>f_description</code> for application
 * @apiParam (Body parameters) {String} [f_ip] New value of <code>f_ip</code> for application
 * @apiParam (Body parameters) {String} [f_url] New value of <code>f_url</code> for application
 * @apiParam (Body parameters) {Virtual} [s_status] New value of <code>s_status</code> for application
 * @apiParam (Body parameters) {Integer} [f_port] New value of <code>f_port</code> for application
 * @apiParam (Body parameters) {String} [f_file] New value of <code>f_file</code> for application
 * @apiParam (Body parameters) {Boolean} [f_check_state] New value of <code>f_check_state</code> for application
 * @apiParam (Body parameters) {Integer} [f_interval] New value of <code>f_interval</code> for application
 * @apiParam (Body parameters) {Integer} [f_alert_pings_failed] New value of <code>f_alert_pings_failed</code> for application
 * @apiParam (Body parameters) {Boolean} [f_is_alive] New value of <code>f_is_alive</code> for application
 * @apiParam (Body parameters) {Boolean} [f_email_alert] New value of <code>f_email_alert</code> for application
 * @apiParam (Body parameters) {Boolean} [f_sms_alert] New value of <code>f_sms_alert</code> for application
 * @apiParam (Body parameters) {Boolean} [f_notification_alert] New value of <code>f_notification_alert</code> for application
 * @apiParam (Body parameters) {Integer} [fk_id_application_history_status] <code>id</code> of entity history_e_application_s_status to associate
 * @apiParam (Body parameters) {Integer} [fk_id_status_status] <code>id</code> of entity status to associate
 * @apiParam (Body parameters) {Integer} [fk_id_application] <code>id</code> of entity application_state_history to associate
 * @apiSuccess {Object} application Updated application
 * @apiSuccess {Integer} application.id <code>id</code> of application
 * @apiSuccess {String} application.f_name <code>f_name</code> of application
 * @apiSuccess {Text} application.f_description <code>f_description</code> of application
 * @apiSuccess {String} application.f_ip <code>f_ip</code> of application
 * @apiSuccess {String} application.f_url <code>f_url</code> of application
 * @apiSuccess {Virtual} application.s_status <code>s_status</code> of application
 * @apiSuccess {Integer} application.f_port <code>f_port</code> of application
 * @apiSuccess {String} application.f_file <code>f_file</code> of application
 * @apiSuccess {Boolean} application.f_check_state <code>f_check_state</code> of application
 * @apiSuccess {Integer} application.f_interval <code>f_interval</code> of application
 * @apiSuccess {Integer} application.f_alert_pings_failed <code>f_alert_pings_failed</code> of application
 * @apiSuccess {Boolean} application.f_is_alive <code>f_is_alive</code> of application
 * @apiSuccess {Boolean} application.f_email_alert <code>f_email_alert</code> of application
 * @apiSuccess {Boolean} application.f_sms_alert <code>f_sms_alert</code> of application
 * @apiSuccess {Boolean} application.f_notification_alert <code>f_notification_alert</code> of application
 * @apiError (Error 404) {Object} NotFound No application with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update application
 */

/**
 * @api {delete} /api/application/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>application</code> with <code>id</code>
 * @apiGroup e_application
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of application to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No application with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * SERVER CONFIG
 ********************************************
 *******************************************/
/** @apiDefine e_server_config Server config */
/**
 * @api {get} /api/server_config?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>server_config</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_server_config
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} server_configs List of server_config
 * @apiSuccess {Integer} server_configs.id <code>id</code> of server_config
 * @apiSuccess {Integer} server_configs.version <code>version</code> of server_config
 * @apiSuccess {Boolean} server_configs.f_check_state <code>f_check_state</code> of server_config
 * @apiSuccess {Integer} server_configs.f_interval <code>f_interval</code> of server_config
 * @apiSuccess {Integer} server_configs.f_alert_pings_failed <code>f_alert_pings_failed</code> of server_config
 * @apiSuccess {Boolean} server_configs.f_email_alert <code>f_email_alert</code> of server_config
 * @apiSuccess {Boolean} server_configs.f_sms_alert <code>f_sms_alert</code> of server_config
 * @apiSuccess {Boolean} server_configs.f_notification_alert <code>f_notification_alert</code> of server_config
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for server_config
 */

/**
 * @api {get} /api/server_config/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>server_config</code> with <code>id</code>
 * @apiGroup e_server_config
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of server_config to fetch
 * @apiSuccess {Object} server_config Object of server_config
 * @apiSuccess {Integer} server_config.id <code>id</code> of server_config
 * @apiSuccess {Integer} server_config.version <code>version</code> of server_config
 * @apiSuccess {Boolean} server_config.f_check_state <code>f_check_state</code> of server_config
 * @apiSuccess {Integer} server_config.f_interval <code>f_interval</code> of server_config
 * @apiSuccess {Integer} server_config.f_alert_pings_failed <code>f_alert_pings_failed</code> of server_config
 * @apiSuccess {Boolean} server_config.f_email_alert <code>f_email_alert</code> of server_config
 * @apiSuccess {Boolean} server_config.f_sms_alert <code>f_sms_alert</code> of server_config
 * @apiSuccess {Boolean} server_config.f_notification_alert <code>f_notification_alert</code> of server_config
 * @apiError (Error 404) {Object} NotFound No server_config with ID <code>id</code> found
 */

/**
 * @api {post} /api/server_config/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>server_config</code> using values defined in request's <code>body</code>
 * @apiGroup e_server_config
 * @apiUse token
 * @apiParam (Body parameters) {Boolean} [f_check_state] <code>f_check_state</code> of server_config
 * @apiParam (Body parameters) {Integer} [f_interval] <code>f_interval</code> of server_config
 * @apiParam (Body parameters) {Integer} [f_alert_pings_failed] <code>f_alert_pings_failed</code> of server_config
 * @apiParam (Body parameters) {Boolean} [f_email_alert] <code>f_email_alert</code> of server_config
 * @apiParam (Body parameters) {Boolean} [f_sms_alert] <code>f_sms_alert</code> of server_config
 * @apiParam (Body parameters) {Boolean} [f_notification_alert] <code>f_notification_alert</code> of server_config
 * @apiSuccess {Object} server_config Created server_config
 * @apiSuccess {Integer} server_config.id <code>id</code> of server_config
 * @apiSuccess {Boolean} server_config.f_check_state <code>f_check_state</code> of server_config
 * @apiSuccess {Integer} server_config.f_interval <code>f_interval</code> of server_config
 * @apiSuccess {Integer} server_config.f_alert_pings_failed <code>f_alert_pings_failed</code> of server_config
 * @apiSuccess {Boolean} server_config.f_email_alert <code>f_email_alert</code> of server_config
 * @apiSuccess {Boolean} server_config.f_sms_alert <code>f_sms_alert</code> of server_config
 * @apiSuccess {Boolean} server_config.f_notification_alert <code>f_notification_alert</code> of server_config
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create server_config
 */

/**
 * @api {put} /api/server_config/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>server_config</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_server_config
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the server_config to update
 * @apiParam (Body parameters) {Boolean} [f_check_state] New value of <code>f_check_state</code> for server_config
 * @apiParam (Body parameters) {Integer} [f_interval] New value of <code>f_interval</code> for server_config
 * @apiParam (Body parameters) {Integer} [f_alert_pings_failed] New value of <code>f_alert_pings_failed</code> for server_config
 * @apiParam (Body parameters) {Boolean} [f_email_alert] New value of <code>f_email_alert</code> for server_config
 * @apiParam (Body parameters) {Boolean} [f_sms_alert] New value of <code>f_sms_alert</code> for server_config
 * @apiParam (Body parameters) {Boolean} [f_notification_alert] New value of <code>f_notification_alert</code> for server_config
 * @apiSuccess {Object} server_config Updated server_config
 * @apiSuccess {Integer} server_config.id <code>id</code> of server_config
 * @apiSuccess {Boolean} server_config.f_check_state <code>f_check_state</code> of server_config
 * @apiSuccess {Integer} server_config.f_interval <code>f_interval</code> of server_config
 * @apiSuccess {Integer} server_config.f_alert_pings_failed <code>f_alert_pings_failed</code> of server_config
 * @apiSuccess {Boolean} server_config.f_email_alert <code>f_email_alert</code> of server_config
 * @apiSuccess {Boolean} server_config.f_sms_alert <code>f_sms_alert</code> of server_config
 * @apiSuccess {Boolean} server_config.f_notification_alert <code>f_notification_alert</code> of server_config
 * @apiError (Error 404) {Object} NotFound No server_config with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update server_config
 */

/**
 * @api {delete} /api/server_config/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>server_config</code> with <code>id</code>
 * @apiGroup e_server_config
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of server_config to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No server_config with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * APPLICATION CONFIG
 ********************************************
 *******************************************/
/** @apiDefine e_application_config Application config */
/**
 * @api {get} /api/application_config?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>application_config</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_application_config
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} application_configs List of application_config
 * @apiSuccess {Integer} application_configs.id <code>id</code> of application_config
 * @apiSuccess {Integer} application_configs.version <code>version</code> of application_config
 * @apiSuccess {Boolean} application_configs.f_check_state <code>f_check_state</code> of application_config
 * @apiSuccess {Integer} application_configs.f_interval <code>f_interval</code> of application_config
 * @apiSuccess {Integer} application_configs.f_alert_pings_failed <code>f_alert_pings_failed</code> of application_config
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for application_config
 */

/**
 * @api {get} /api/application_config/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>application_config</code> with <code>id</code>
 * @apiGroup e_application_config
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of application_config to fetch
 * @apiSuccess {Object} application_config Object of application_config
 * @apiSuccess {Integer} application_config.id <code>id</code> of application_config
 * @apiSuccess {Integer} application_config.version <code>version</code> of application_config
 * @apiSuccess {Boolean} application_config.f_check_state <code>f_check_state</code> of application_config
 * @apiSuccess {Integer} application_config.f_interval <code>f_interval</code> of application_config
 * @apiSuccess {Integer} application_config.f_alert_pings_failed <code>f_alert_pings_failed</code> of application_config
 * @apiError (Error 404) {Object} NotFound No application_config with ID <code>id</code> found
 */

/**
 * @api {post} /api/application_config/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>application_config</code> using values defined in request's <code>body</code>
 * @apiGroup e_application_config
 * @apiUse token
 * @apiParam (Body parameters) {Boolean} [f_check_state] <code>f_check_state</code> of application_config
 * @apiParam (Body parameters) {Integer} [f_interval] <code>f_interval</code> of application_config
 * @apiParam (Body parameters) {Integer} [f_alert_pings_failed] <code>f_alert_pings_failed</code> of application_config
 * @apiSuccess {Object} application_config Created application_config
 * @apiSuccess {Integer} application_config.id <code>id</code> of application_config
 * @apiSuccess {Boolean} application_config.f_check_state <code>f_check_state</code> of application_config
 * @apiSuccess {Integer} application_config.f_interval <code>f_interval</code> of application_config
 * @apiSuccess {Integer} application_config.f_alert_pings_failed <code>f_alert_pings_failed</code> of application_config
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create application_config
 */

/**
 * @api {put} /api/application_config/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>application_config</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_application_config
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the application_config to update
 * @apiParam (Body parameters) {Boolean} [f_check_state] New value of <code>f_check_state</code> for application_config
 * @apiParam (Body parameters) {Integer} [f_interval] New value of <code>f_interval</code> for application_config
 * @apiParam (Body parameters) {Integer} [f_alert_pings_failed] New value of <code>f_alert_pings_failed</code> for application_config
 * @apiSuccess {Object} application_config Updated application_config
 * @apiSuccess {Integer} application_config.id <code>id</code> of application_config
 * @apiSuccess {Boolean} application_config.f_check_state <code>f_check_state</code> of application_config
 * @apiSuccess {Integer} application_config.f_interval <code>f_interval</code> of application_config
 * @apiSuccess {Integer} application_config.f_alert_pings_failed <code>f_alert_pings_failed</code> of application_config
 * @apiError (Error 404) {Object} NotFound No application_config with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update application_config
 */

/**
 * @api {delete} /api/application_config/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>application_config</code> with <code>id</code>
 * @apiGroup e_application_config
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of application_config to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No application_config with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * HISTORY
 ********************************************
 *******************************************/
/** @apiDefine e_history History */
/**
 * @api {get} /api/history?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>history</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_history
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} historys List of history
 * @apiSuccess {Integer} historys.id <code>id</code> of history
 * @apiSuccess {Integer} historys.version <code>version</code> of history
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for history
 */

/**
 * @api {get} /api/history/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>history</code> with <code>id</code>
 * @apiGroup e_history
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of history to fetch
 * @apiSuccess {Object} history Object of history
 * @apiSuccess {Integer} history.id <code>id</code> of history
 * @apiSuccess {Integer} history.version <code>version</code> of history
 * @apiError (Error 404) {Object} NotFound No history with ID <code>id</code> found
 */

/**
 * @api {post} /api/history/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>history</code> using values defined in request's <code>body</code>
 * @apiGroup e_history
 * @apiUse token
 * @apiSuccess {Object} history Created history
 * @apiSuccess {Integer} history.id <code>id</code> of history
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create history
 */

/**
 * @api {put} /api/history/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>history</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_history
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the history to update
 * @apiSuccess {Object} history Updated history
 * @apiSuccess {Integer} history.id <code>id</code> of history
 * @apiError (Error 404) {Object} NotFound No history with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update history
 */

/**
 * @api {delete} /api/history/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>history</code> with <code>id</code>
 * @apiGroup e_history
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of history to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No history with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * SERVER STATE HISTORY
 ********************************************
 *******************************************/
/** @apiDefine e_server_state_history Server state history */
/**
 * @api {get} /api/server_state_history?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>server_state_history</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_server_state_history
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} server_state_historys List of server_state_history
 * @apiSuccess {Integer} server_state_historys.id <code>id</code> of server_state_history
 * @apiSuccess {Integer} server_state_historys.version <code>version</code> of server_state_history
 * @apiSuccess {Boolean} server_state_historys.f_is_alive <code>f_is_alive</code> of server_state_history
 * @apiSuccess {Text} server_state_historys.f_comment <code>f_comment</code> of server_state_history
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for server_state_history
 */

/**
 * @api {get} /api/server_state_history/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>server_state_history</code> with <code>id</code>
 * @apiGroup e_server_state_history
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of server_state_history to fetch
 * @apiSuccess {Object} server_state_history Object of server_state_history
 * @apiSuccess {Integer} server_state_history.id <code>id</code> of server_state_history
 * @apiSuccess {Integer} server_state_history.version <code>version</code> of server_state_history
 * @apiSuccess {Boolean} server_state_history.f_is_alive <code>f_is_alive</code> of server_state_history
 * @apiSuccess {Text} server_state_history.f_comment <code>f_comment</code> of server_state_history
 * @apiError (Error 404) {Object} NotFound No server_state_history with ID <code>id</code> found
 */

/**
 * @api {post} /api/server_state_history/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>server_state_history</code> using values defined in request's <code>body</code>
 * @apiGroup e_server_state_history
 * @apiUse token
 * @apiParam (Body parameters) {Boolean} [f_is_alive] <code>f_is_alive</code> of server_state_history
 * @apiParam (Body parameters) {Text} [f_comment] <code>f_comment</code> of server_state_history
 * @apiSuccess {Object} server_state_history Created server_state_history
 * @apiSuccess {Integer} server_state_history.id <code>id</code> of server_state_history
 * @apiSuccess {Boolean} server_state_history.f_is_alive <code>f_is_alive</code> of server_state_history
 * @apiSuccess {Text} server_state_history.f_comment <code>f_comment</code> of server_state_history
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create server_state_history
 */

/**
 * @api {put} /api/server_state_history/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>server_state_history</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_server_state_history
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the server_state_history to update
 * @apiParam (Body parameters) {Boolean} [f_is_alive] New value of <code>f_is_alive</code> for server_state_history
 * @apiParam (Body parameters) {Text} [f_comment] New value of <code>f_comment</code> for server_state_history
 * @apiSuccess {Object} server_state_history Updated server_state_history
 * @apiSuccess {Integer} server_state_history.id <code>id</code> of server_state_history
 * @apiSuccess {Boolean} server_state_history.f_is_alive <code>f_is_alive</code> of server_state_history
 * @apiSuccess {Text} server_state_history.f_comment <code>f_comment</code> of server_state_history
 * @apiError (Error 404) {Object} NotFound No server_state_history with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update server_state_history
 */

/**
 * @api {delete} /api/server_state_history/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>server_state_history</code> with <code>id</code>
 * @apiGroup e_server_state_history
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of server_state_history to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No server_state_history with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * APPLICATION STATE HISTORY
 ********************************************
 *******************************************/
/** @apiDefine e_application_state_history Application state history */
/**
 * @api {get} /api/application_state_history?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>application_state_history</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_application_state_history
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} application_state_historys List of application_state_history
 * @apiSuccess {Integer} application_state_historys.id <code>id</code> of application_state_history
 * @apiSuccess {Integer} application_state_historys.version <code>version</code> of application_state_history
 * @apiSuccess {Boolean} application_state_historys.f_is_alive <code>f_is_alive</code> of application_state_history
 * @apiSuccess {Text} application_state_historys.f_comment <code>f_comment</code> of application_state_history
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for application_state_history
 */

/**
 * @api {get} /api/application_state_history/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>application_state_history</code> with <code>id</code>
 * @apiGroup e_application_state_history
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of application_state_history to fetch
 * @apiSuccess {Object} application_state_history Object of application_state_history
 * @apiSuccess {Integer} application_state_history.id <code>id</code> of application_state_history
 * @apiSuccess {Integer} application_state_history.version <code>version</code> of application_state_history
 * @apiSuccess {Boolean} application_state_history.f_is_alive <code>f_is_alive</code> of application_state_history
 * @apiSuccess {Text} application_state_history.f_comment <code>f_comment</code> of application_state_history
 * @apiError (Error 404) {Object} NotFound No application_state_history with ID <code>id</code> found
 */

/**
 * @api {post} /api/application_state_history/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>application_state_history</code> using values defined in request's <code>body</code>
 * @apiGroup e_application_state_history
 * @apiUse token
 * @apiParam (Body parameters) {Boolean} [f_is_alive] <code>f_is_alive</code> of application_state_history
 * @apiParam (Body parameters) {Text} [f_comment] <code>f_comment</code> of application_state_history
 * @apiSuccess {Object} application_state_history Created application_state_history
 * @apiSuccess {Integer} application_state_history.id <code>id</code> of application_state_history
 * @apiSuccess {Boolean} application_state_history.f_is_alive <code>f_is_alive</code> of application_state_history
 * @apiSuccess {Text} application_state_history.f_comment <code>f_comment</code> of application_state_history
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create application_state_history
 */

/**
 * @api {put} /api/application_state_history/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>application_state_history</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_application_state_history
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the application_state_history to update
 * @apiParam (Body parameters) {Boolean} [f_is_alive] New value of <code>f_is_alive</code> for application_state_history
 * @apiParam (Body parameters) {Text} [f_comment] New value of <code>f_comment</code> for application_state_history
 * @apiSuccess {Object} application_state_history Updated application_state_history
 * @apiSuccess {Integer} application_state_history.id <code>id</code> of application_state_history
 * @apiSuccess {Boolean} application_state_history.f_is_alive <code>f_is_alive</code> of application_state_history
 * @apiSuccess {Text} application_state_history.f_comment <code>f_comment</code> of application_state_history
 * @apiError (Error 404) {Object} NotFound No application_state_history with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update application_state_history
 */

/**
 * @api {delete} /api/application_state_history/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>application_state_history</code> with <code>id</code>
 * @apiGroup e_application_state_history
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of application_state_history to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No application_state_history with ID <code>id</code> found
 */



