import { update } from '../services';

export default (req, res, next) => {
  const id = req.params.id;
  const user = {};
  const todo = req.body;
  update(id, todo, user).then(next).catch(next);
};
