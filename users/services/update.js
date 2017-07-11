import User from '../models';

export default async (id, update) => User
.findByIdAndUpdate(id, update, { new: true })
.exec();
