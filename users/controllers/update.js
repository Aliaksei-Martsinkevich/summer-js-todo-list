import { update } from '../services';

export default (req, res, next) => {
  const id = req.params.id;
  const user = req.body;
  update(id, user).then(next).catch(next);
};
