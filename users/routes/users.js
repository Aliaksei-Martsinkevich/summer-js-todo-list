import express from 'express';
import validate from 'express-validation';
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

router.get('/', validate(getListValidator), getList, json);

router.get('/:id', validate(getByIdValidator), getById, json);

router.post('/', validate(createValidator), create, json);

router.put('/:id', validate(updateValidator), update, json);

router.post('/login', validate(loginValidator), login, json);

export default router;
