import { getList } from '../services';

export default (req, res, next) => {
  const user = {};
  const filter = {};
  getList(filter, user).then(next);
};
