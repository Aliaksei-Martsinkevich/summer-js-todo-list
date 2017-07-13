import fs from 'fs';

const secret = fs.readFileSync('./keys/key');

export default {
  mongo: {
    scheme: 'mongodb',
    host: 'localhost',
    port: '27017',
    name: 'todosDB',
  },

  server: {
    host: 'localhost',
    port: '3000',
  },

  jwt: {
    secret,
  },
}
;
