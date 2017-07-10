import { getById } from '../services/';

export default (req, res, next) => {
  const user = {};
  const id = req.params.id;
  getById(id, user).then(next);
};
