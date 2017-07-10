import { login } from '../services';

export default (req, res, next) => {
  const credentials = req.body;
  login(credentials).then(next).catch(next);
};
