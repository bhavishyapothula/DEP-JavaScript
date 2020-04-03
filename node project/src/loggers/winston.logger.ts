import { createLogger, transports, format } from 'winston';
import { get } from 'lodash';

const logToFile = (filename: string) => createLogger(
    {
        format: format.combine(
            format.timestamp(),
            format.json()
        ),
        transports: [
            new transports.File({ filename })
        ]
    }
);

export const winstonLogger = (serviceMethodName: string, argPaths: string[] = []) => (req, res, next) => {

    const serviceMethodArguments = argPaths.map(argPath => get(req, argPath));

    logToFile('service.log').info(
        'Service Method Invoke',
        { serviceMethodName, serviceMethodArguments }
    );
    next();
};


export const unhandledErrorLogger = (err, req, res, next) => {

    if (err) {
        logToFile('unhandled-errors.log').info(
            'Unhanled Error',
            { error: err }
        );
        res.status(500).send(err.stack);
    }
    next();
};

export const uncaughtExceptionLogger = (error) => {

    logToFile('uncaught-exception.log').info(
        'Uncaught Exception',
        { error }
    );

    // can use based on requirement
    // process.exit(1);
};

export const unhandledRejectionLogger = (error) => {

    logToFile('unhandled-rejections.log').info(
        'Unhandled Rejections',
        { error }
    );

    // can use based on requirement
    // process.exit(1);
};

export const controllerErrorLogger = (log) => {

    logToFile('controller-logger.log').info(
        'Uncaught Exception',
        log
    );
};


