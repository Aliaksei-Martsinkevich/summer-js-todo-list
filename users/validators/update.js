import Joi from 'joi';

export default {
  body: {
    name: Joi.string().alphanum().min(3).max(16),
    password: Joi.string().min(4).max(32),
    _id: Joi.any().forbidden(),
    todos: Joi.any().forbidden(),
  },
};
