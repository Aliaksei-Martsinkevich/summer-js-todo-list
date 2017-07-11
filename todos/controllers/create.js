import { create } from '../services';

export default (req, res, next) => {
  const user = req.user;
  create(req.body, user).then(next).catch(next);
};
