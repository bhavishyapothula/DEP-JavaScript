import { Router } from 'express';
import {
    getUsers, addUser, getUser, editUser, deleteUser, searchUsers
} from '../services/users.service';
import {
    getUserParamValidator,
    putUserParamValidator,
    putUserBodyValidator,
    deleteUserParamValidator,
    searchUserBodyValidator,
    postUserBodyValidator
} from './validators/users';
import { winstonLogger, controllerErrorLogger } from '../loggers/winston.logger';
import { validateToken } from '../services/jwt.service';
import * as cors from 'cors';

export const usersRouter = Router();

// create user
usersRouter.post('/', postUserBodyValidator, winstonLogger('addUser', ['body']), validateToken, async (req, res) => {
    try {
        const { status, message } = await addUser(req.body);
        res.status(status).send(message);
    } catch (err) {
        controllerErrorLogger({
            error: err,
            httpMethod: req.method,
            methodName: 'addUser',
            methodArgs: [req.body]
        });
    }
});

// get all users
usersRouter.get('/', winstonLogger('getUsers', []), validateToken, async (req, res) => {
    try {
        const { status, message } = await getUsers();
        res.status(status).send(message);
    } catch (err) {
        controllerErrorLogger({
            error: err,
            httpMethod: req.method,
            methodName: 'getUsers',
            methodArgs: []
        });
    }
});

// get user
usersRouter.get('/:id', getUserParamValidator, winstonLogger('getUser', ['params.id']), validateToken, async (req, res) => {
    try {
        const { status, message } = await getUser(req.params.id);
        res.status(status).send(message);
    } catch (err) {
        controllerErrorLogger({
            error: err,
            httpMethod: req.method,
            methodName: 'getUser',
            methodArgs: [req.params.id]
        });
    }
});

// update user
usersRouter.put(
    '/:id',
    putUserParamValidator,
    putUserBodyValidator,
    winstonLogger('editUser', ['params.id', 'body']),
    validateToken,
    async (req, res) => {
        try {
            const { status, message } = await editUser(req.params.id, req.body);
            res.status(status).send(message);
        } catch (err) {
            controllerErrorLogger({
                error: err,
                httpMethod: req.method,
                methodName: 'editUser',
                methodArgs: [req.params.id, req.body]
            });
        }
    }
);

// delete user
usersRouter.options('/:id', cors());
usersRouter.delete('/:id', deleteUserParamValidator, winstonLogger('deleteUser', ['params.id']), validateToken, async (req, res) => {
    try {
        const { status, message } = await deleteUser(req.params.id);
        res.status(status).send(message);
    } catch (err) {
        controllerErrorLogger({
            error: err,
            httpMethod: req.method,
            methodName: 'deleteUser',
            methodArgs: [req.params.id]
        });
    }
});

// search users
usersRouter.post('/search', searchUserBodyValidator, winstonLogger('searchUsers', ['body.key', 'body.limit']), validateToken, async (req, res) => {
    try {
        const { status, message } = await searchUsers(req.body.key, req.body.limit);
        res.status(status).send(message);
    } catch (err) {
        controllerErrorLogger({
            error: err,
            httpMethod: req.method,
            methodName: 'searchUsers',
            methodArgs: [req.body.key, req.body.limit]
        });
    }
});
