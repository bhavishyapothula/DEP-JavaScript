import * as express from 'express';
import { config } from 'dotenv';
import { usersRouter, groupsRouter } from './routers';
import { testConnection } from './data-access/test-connection.data-access';
import { unhandledErrorLogger, uncaughtExceptionLogger, unhandledRejectionLogger } from './loggers/winston.logger';
import { authRouter } from './routers/auth.routes';
import * as cors from 'cors';

export const initiateExpress = () => {

    const server = express();

    // test connection 
    // testConnection();

    // set up cors
    server.use(cors());

    // setup middleware to parse request json data
    server.use(express.json());

    // auth route
    server.use('/auth', authRouter);

    // setup routes
    server.use('/users', usersRouter);

    // setup routes
    server.use('/groups', groupsRouter);

    // unhandled errors
    server.use(unhandledErrorLogger);

    // uncaughtException logging
    process.on('uncaughtException', uncaughtExceptionLogger);

    // unhandledRejection logging
    process.on('unhandledRejection', unhandledRejectionLogger);

    return server;

};
