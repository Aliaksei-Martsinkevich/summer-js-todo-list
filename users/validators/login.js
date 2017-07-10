import Joi from 'joi';

export default {
  body: {
    name: Joi.string().alphanum().min(3).max(16).required(),
    password: Joi.string().min(4).max(32).required(),
  },

  post: {
    allowUnknownBody: false,
    allowUnknownQuery: false,
    allowUnknownParams: false,
  },
};
