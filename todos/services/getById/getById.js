import Todo from '../../models';

export default async (id, user) => Todo
.findOne({ _id: id, _author: user.id })
.exec();
