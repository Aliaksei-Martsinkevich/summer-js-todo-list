import User from '../models';

export default async (filter, user) => User
.find({})
.select('_id name todos')
.populate('todos', 'name')
.exec();
