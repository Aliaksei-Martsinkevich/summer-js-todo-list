import Todo from '../../models';

export default async (id, todo, user) => Todo
.findOneAndUpdate(
  { _id: id, _author: user.id },
   todo,
  { new: true })
.exec();
