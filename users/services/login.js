import jwt from 'jsonwebtoken';
import { UnauthorizedError } from 'express-jwt';
import config from '../../config';
import User from '../models';

export default credentials =>
User.findOne({ name: credentials.name })
  .exec()
  .then(user => ({ isValid: user.comparePassword(credentials.password), user }))
  .then(({ isValid, user }) => {
    if (!isValid) {
      const statusCode = 401;
      throw new UnauthorizedError(statusCode, new Error('Invalid credentials'));
    } else {
      const payload = {
        name: user.name,
        id: user._id,
      };
      return jwt.sign(payload, config.jwt.secret, {
        expiresIn: '1m',
      });
    }
  });
