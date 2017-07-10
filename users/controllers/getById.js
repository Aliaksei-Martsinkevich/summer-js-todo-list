import { getById } from '../services/';

export default (req, res, next) => {
  const id = req.params.id;
  getById(id).then(next);
};
