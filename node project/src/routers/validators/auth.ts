import * as joi from '@hapi/joi';
import { createValidator } from 'express-joi-validation';


const validator = createValidator();

// user login schema
const userLoginSchema = joi.object({
  login: joi.string().required(),
  password: joi
    .string()
    .required()
});

export const postLoginBodyValidator = validator.body(userLoginSchema);
