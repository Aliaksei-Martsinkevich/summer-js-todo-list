import User from '../models';
import ForbiddenError from '../../errors/ForbiddenError';

export default async (id, user) => {
  if (user.id !== id) {
    throw new ForbiddenError();
  }
  return User.findById(id).exec();
};
