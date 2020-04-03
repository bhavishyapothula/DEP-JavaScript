import * as joi from '@hapi/joi';
import { createValidator } from 'express-joi-validation';

const validator = createValidator();

// group id param schema
const groupIdParamSchema = joi.object({
  id: joi.string().required()
});

// group body schema
const postGroupBodySchema = joi.object({
  name: joi.string().required(),
  permissions: joi
    .array()
    .required()
});

const putGroupBodySchema = joi.object({
  permissions: joi
    .array()
    .required()
});

// group body schema
const postUserGroupBodySchema = joi.array();


export const groupIdParamValidator = validator.params(groupIdParamSchema);
export const postGroupBodyValidator = validator.body(postGroupBodySchema);
export const putGroupBodyValidator = validator.body(putGroupBodySchema);
export const postUserGroupValidator = validator.body(postUserGroupBodySchema);

