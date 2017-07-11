import ForbiddenError from '../../../errors/ForbiddenError';
import Todo from '../../models';

export default async (id, user) => {
  const todo = await Todo.findById(id).exec();

  if (todo === null) {
    return todo;
  }

  if (user.id === todo._author.toString()) {
    return todo;
  }
  throw new ForbiddenError();
};
