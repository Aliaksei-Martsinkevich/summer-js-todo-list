import { getList } from '../services';

export default (req, res, next) => {
  const user = req.user;
  const filter = {};
  getList(filter, user).then(next).catch(next);
};
