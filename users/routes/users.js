import express from 'express';
import validate from 'express-validation';
import jwt from 'express-jwt';
import config from '../../config';
import { json } from '../presentations';
import { getById, getList, create, update, login } from '../controllers';
import {
  getList as getListValidator,
  getById as getByIdValidator,
  create as createValidator,
  update as updateValidator,
  login as loginValidator,
} from '../validators';

const router = express.Router();

// No authentication required
router.post('/', validate(createValidator), create, json);

router.post('/login', validate(loginValidator), login, json);

router.use(jwt({
  secret: config.jwt.secret,
  getToken: req => req.header('Authorization'),
}));

// Authentication required
router.get('/', validate(getListValidator), getList, json);

router.get('/:id', validate(getByIdValidator), getById, json);

router.put('/:id', validate(updateValidator), update, json);

export default router;
