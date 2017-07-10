import Todo from '../../models';

export default (id, todo, user) => Todo.findByIdAndUpdate(id, todo, { new: true }).exec();
