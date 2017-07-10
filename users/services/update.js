import User from '../models';

export default async (id, update) => {
  return User.findByIdAndUpdate(id, update, { new: true }).exec();
  // const user = await User.findById(id);
  // const keys = Object.keys(update);
  // keys.forEach(key => user[key] = update[key]);
  // return user.save();
};
