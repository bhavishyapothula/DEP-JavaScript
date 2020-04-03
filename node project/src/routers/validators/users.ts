import * as joi from '@hapi/joi';
import { createValidator } from 'express-joi-validation';


const validator = createValidator();
const passwordRegEx = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

// user id param schema
const userIdParamSchema = joi.object({
  id: joi.string().required()
});

// new user schema
const newUserSchema = joi.object({
  login: joi.string().required(),
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  password: joi
    .string()
    .required()
    .regex(passwordRegEx)
    .messages({
      'string.regex': 'Password must have at least one letter and one number!'
    }),
  age: joi
    .number()
    .required()
    .min(4)
    .max(130)
});

// update user schema
const updateUserSchema = joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  password: joi
    .string()
    .regex(passwordRegEx)
    .messages({
      'string.regex': 'Password must have at least one letter and one number!'
    }),
  age: joi
    .number()
    .min(4)
    .max(130),
  isDeleted: joi.boolean()
});

// new user schema
const searchUserSchema = joi.object({
  key: joi.string(),
  limit: joi
    .number()
    .min(1)
    .default(5)
});

export const getUserParamValidator = validator.params(userIdParamSchema);

export const putUserParamValidator = validator.params(userIdParamSchema);

export const deleteUserParamValidator = validator.params(userIdParamSchema);

export const postUserBodyValidator = validator.body(newUserSchema);

export const putUserBodyValidator = validator.body(updateUserSchema);

export const searchUserBodyValidator = validator.body(searchUserSchema);
