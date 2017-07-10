import Todo from '../../models';

export default (id, user) => Todo.findById(id).exec();
