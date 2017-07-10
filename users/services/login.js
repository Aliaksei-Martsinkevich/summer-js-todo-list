import User from '../models';

export default credentials =>
User.findOne({ name: credentials.name })
  .exec()
  .then(user => user.comparePassword(credentials.password));
