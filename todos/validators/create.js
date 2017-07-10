import Joi from 'joi';

export default {
  body: {
    name: Joi.string().alphanum().min(3).max(255).required(),
    text: Joi.string().max(65535),
    isDone: Joi.string().valid('true').valid('false'),
    _id: Joi.any().forbidden(),
  },
};
