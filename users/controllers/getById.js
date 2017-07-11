import { getById } from '../services/';

export default (req, res, next) => {
  const id = req.params.id;
  const user = req.user;
  getById(id, user).then(next).catch(next);
};
