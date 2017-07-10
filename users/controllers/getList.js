import { getList } from '../services';

export default (req, res, next) => {
  getList({}).then(next).catch(next);
};
