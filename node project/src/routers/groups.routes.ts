import { Router } from 'express';
import { postGroupBodyValidator, groupIdParamValidator, putGroupBodyValidator, postUserGroupValidator } from './validators/groups';
import { addGroup, getGroups, getGroup, editGroup, deleteGroup, mapUsersToGroup, getUsersGroups } from '../services/groups.service';
import { winstonLogger, controllerErrorLogger } from '../loggers/winston.logger';
import { validateToken } from '../services/jwt.service';
import * as cors from 'cors';

export const groupsRouter = Router();

// create group
groupsRouter.post('/', postGroupBodyValidator, winstonLogger('addGroup', ['body']), validateToken, async (req, res) => {
    try {
        const { status, message } = await addGroup(req.body);
        res.status(status).send(message);
    } catch (err) {
        controllerErrorLogger({
            error: err,
            httpMethod: req.method,
            methodName: 'addGroup',
            methodArgs: [req.body]
        });
    }
});

// get all groups
groupsRouter.get('/', winstonLogger('getGroups', []), validateToken, async (req, res) => {
    try {
        const { status, message } = await getGroups();
        res.status(status).send(message);
    } catch (err) {
        controllerErrorLogger({
            error: err,
            httpMethod: req.method,
            methodName: 'getGroups',
            methodArgs: []
        });
    }
});

// get all users' groups
groupsRouter.get('/users', winstonLogger('getUsersGroups', []), validateToken, async (req, res) => {
    try {
        const { status, message } = await getUsersGroups();
        res.status(status).send(message);
    } catch (err) {
        controllerErrorLogger({
            error: err,
            httpMethod: req.method,
            methodName: 'getUsersGroups',
            methodArgs: []
        });
    }
});

// get group
groupsRouter.get('/:id', groupIdParamValidator, winstonLogger('getGroup', ['params.id']), validateToken, async (req, res) => {
    try {
        const { status, message } = await getGroup(req.params.id);
        res.status(status).send(message);
    } catch (err) {
        controllerErrorLogger({
            error: err,
            httpMethod: req.method,
            methodName: 'getGroup',
            methodArgs: [req.params.id]
        });
    }
});

// update group
groupsRouter.put(
    '/:id',
    groupIdParamValidator,
    putGroupBodyValidator,
    winstonLogger('editGroup', ['params.id', 'req.body']),
    validateToken,
    async (req, res) => {
        try {
            const { status, message } = await editGroup(req.params.id, req.body);
            res.status(status).send(message);
        } catch (err) {
            controllerErrorLogger({
                error: err,
                httpMethod: req.method,
                methodName: 'editGroup',
                methodArgs: [req.params.id, req.body]
            });
        }
    }
);

// delete group
groupsRouter.options('/:id', cors());
groupsRouter.delete('/:id', groupIdParamValidator, winstonLogger('deleteGroup', ['params.id']), validateToken, async (req, res) => {
    try {
        const { status, message } = await deleteGroup(req.params.id);
        res.status(status).send(message);
    } catch (err) {
        controllerErrorLogger({
            error: err,
            httpMethod: req.method,
            methodName: 'deleteGroup',
            methodArgs: [req.params.id]
        });
    }
});

// post group users mapping
groupsRouter.post('/:id/users', groupIdParamValidator, postUserGroupValidator, winstonLogger('mapUsersToGroup', ['params.id', 'body']), validateToken, async (req, res) => {
    try {
        const { status, message } = await mapUsersToGroup(req.params.id, req.body);
        res.status(status).send(message);
    } catch (err) {
        controllerErrorLogger({
            error: err,
            httpMethod: req.method,
            methodName: 'mapUsersToGroup',
            methodArgs: [req.params.id, req.body]
        });
    }
});
