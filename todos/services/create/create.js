import Todo from '../../models';
import { model as User } from '../../../users';

export default async (todo, user) => {
  const newTodo = await Todo.create({ ...todo, _author: user.id });
  User.findByIdAndUpdate(
    user.id,
  { $push: { todos: newTodo } },
  { new: true })
  .exec();

  return newTodo;
};
