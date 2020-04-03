import { Router } from 'express';
import { winstonLogger, controllerErrorLogger } from '../loggers/winston.logger';
import { postLoginBodyValidator } from './validators/auth';
import { authenticate } from '../services/auth.service';

export const authRouter = Router();

// create user
authRouter.post('/login', postLoginBodyValidator, winstonLogger('authenticate', ['body.login', 'body.password']), async (req, res) => {
    try {
        const { status, message } = await authenticate(req.body.login, req.body.password);
        res.status(status).send(message);
    } catch (err) {
        controllerErrorLogger({
            error: err,
            httpMethod: req.method,
            methodName: 'authenticate',
            methodArgs: [req.body.login, req.body.password]
        });
    }
});
