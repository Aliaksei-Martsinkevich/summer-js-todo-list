import { getById } from '../services/';

export default (req, res, next) => {
  const user = req.user;
  const id = req.params.id;
  getById(id, user).then(next).catch(next);
};
