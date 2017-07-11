import Todo from '../../models';

export default async (filter, user) => Todo
.find({ _author: user.id })
.select('_id name text isDone _author')
.populate('_author', 'name')
.exec();
