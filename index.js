import express from 'express';
import bodyParser from 'body-parser';
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
    res.status(401).end('invalid token');
  } else if (err.name === 'ValidationError') {
    res.status(err.status).end(err.statusText);
  } else if (err.name === 'ForbiddenError') {
    res.status(err.status).end('Forbidden');
  } else if (err.name === 'MongoError') {
    const pattern = /E11000.*:.*\.(\w*)s .*: (.*)_.*/g;
    const regexp = new RegExp(pattern);
    const result = regexp.exec(err.message);
    res.status(400).end(`'${result[1]}' with such field '${result[2]}' already exists`);
  } else {
    console.log(err.name, err.message);
    res.status(400).end('Bad request');
  }
});

app.listen(config.server.port, config.server.host, () => {
  console.log(`Server running at http://${config.server.host}:${config.server.port}/`);
});
