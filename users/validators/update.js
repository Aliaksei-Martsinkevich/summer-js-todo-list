import Joi from 'joi';

export default {
  body: {
    name: Joi.string().alphanum().min(3).max(16),
    password: Joi.string().min(4).max(32),
  },

  options: {
    allowUnknownBody: false,
  },
};
