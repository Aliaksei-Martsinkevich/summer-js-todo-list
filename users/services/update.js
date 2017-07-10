import User from '../models';

export default async (id, update) => {
  const user = await User.findById(id);
  const keys = Object.keys(update);
  keys.forEach(key => user[key] = update[key]);
  return user.save();
};
