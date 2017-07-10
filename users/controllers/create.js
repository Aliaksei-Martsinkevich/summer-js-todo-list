import { create } from '../services';

export default (req, res, next) => {
  const credentials = req.body;
  create(credentials).then(next);
};
