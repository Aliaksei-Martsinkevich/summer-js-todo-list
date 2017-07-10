import express from 'express';
import bodyParser from 'body-parser';
import { ValidationError } from 'express-validation';
import db from './database/';
import { routes as todosRoutes } from './todos';
import config from './config';
import { routes as usersRoutes } from './users';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/todos', todosRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  console.log(`${req.protocol} ${req.method} ${req.originalUrl} ${res.statusCode}`);
  next();
});

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...');
  } else
  if (err instanceof ValidationError) {
    res.status(err.status).end(err.statusText);
  } else {
    res.status(400).end();
  }
});

app.listen(config.server.port, config.server.host, () => {
  console.log(`Server running at http://${config.server.host}:${config.server.port}/`);
});
