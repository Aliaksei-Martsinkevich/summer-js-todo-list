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
  if (err instanceof SyntaxError) {
    res.statusCode = 400;
    res.end();
  } else {
    console.log(err);
  }
});

app.listen(config.server.port, config.server.host, () => {
  console.log(`Server running at http://${config.server.host}:${config.server.port}/`);
});
