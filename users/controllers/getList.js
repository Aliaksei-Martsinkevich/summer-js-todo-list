import { getList } from '../services';

export default (req, res, next) => {
  const filter = {};
  const user = req.user;
  getList(filter, user).then(next).catch(next);
};
