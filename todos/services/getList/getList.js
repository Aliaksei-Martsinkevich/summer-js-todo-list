import Todo from '../../models';

export default (filter, user) => Todo.find({}).select('_id name text isDone').exec();
