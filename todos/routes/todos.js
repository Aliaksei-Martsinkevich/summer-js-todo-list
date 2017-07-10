import express from 'express';
import validate from 'express-validation';
import jwt from 'express-jwt';
import config from '../../config';
import { json } from '../presentations';
import { getById, getList, create, update } from '../controllers';
import {
  getList as getListValidator,
  getById as getByIdValidator,
  create as createValidator,
  update as updateValidator,
} from '../validators';

const router = express.Router();

router.use(jwt({
  secret: config.jwt.secret,
  getToken: req => req.header('Authorization'),
}));

router.get('/', validate(getListValidator), getList, json);

router.get('/:id', validate(getByIdValidator), getById, json);

router.post('/', validate(createValidator), create, json);

router.put('/:id', validate(updateValidator), update, json);

export default router;
