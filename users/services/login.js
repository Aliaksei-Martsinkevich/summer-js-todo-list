import jwt from 'jsonwebtoken';
import { UnauthorizedError } from 'express-jwt';
import config from '../../config';
import User from '../models';

export default async (credentials) => {
  const user = await User.findOne({ name: credentials.name }).exec();
  const isValid = await user.comparePassword(credentials.password);

  if (!isValid) {
    const statusCode = 401;
    throw new UnauthorizedError(statusCode, new Error('Invalid credentials'));
  }

  const payload = {
    name: user.name,
    id: user._id,
  };

  return jwt.sign(payload, config.jwt.secret, {
    algorithm: 'HS512',
    expiresIn: '24h',
  });
};
