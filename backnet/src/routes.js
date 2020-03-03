const { Router } = require('express');

const UserController = require('./app/controllers/UserController');

// const User = require('./app/models/User');

const routes = new Router();

/**
 * @api {post} /users Usurs
 * @apiGroup TelNet
 *
 * @apiParam {String} name - Nome do Usuário.
 * @apiParam {String} email - Email do Usuário.
 * @apiParam {String} password_hash - Password do Usuário.
 * @apiParam {Boolean} admin - O usuário é admin (verdadeiro ou falso)
 *
 * @apiSuccess {String} status Mensagem usuário cadastrado com sucesso
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *       "id": "",
 *       "name": "Nome do User",
 *       "email": "Email do User",
 *       "password_hash": "password_hash",
 *       "admin": true or false,
 *       "updatedAt": "Data Atualização",
 *       "createdAt": "Data Criação"
 *    }
 */
routes.post('/users', UserController.store);

module.exports = routes;
