const { Router } = require('express');

const UserController = require('./app/controllers/UserController');

// const User = require('./app/models/User');

const routes = new Router();

/**
 * @api {post} /users Users
 * @apiGroup TelNet
 *
 * @apiParam {String} name - Nome do Usuário.
 * @apiParam {String} email - Email do Usuário.
 * @apiParam {String} password - Password do Usuário.
 * @apiParam {Boolean} admin - O usuário é admin (verdadeiro ou falso)
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *     	"name":"Teste",
 *	    "email":"teste5@teste.com.br",
 *	    "password":"123456",
 *	    "admin":true
 *   }
 *
 * @apiSuccess {String} status Mensagem usuário cadastrado com sucesso
 *
 * @apiError UserAlreadyExist O <code>email</code> do usuário já esta cadastrado.
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *       "id": "Id do User",
 *       "name": "Nome do User",
 *       "email": "Email do User",
 *       "admin": true or false,
 *    }
 */
routes.post('/users', UserController.store);

module.exports = routes;
