import mongoose from 'mongoose';
import config from '../config';

const mongo = config.mongo;

mongoose.Promise = global.Promise;

const connectionUri = `${mongo.scheme}://${mongo.host}:${mongo.port}/${mongo.name}`;
mongoose.connect(connectionUri, { useMongoClient: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log(`Connected to db via ${connectionUri}`);
});

db.on('error', () => {
  console.log('Database connection error');
});

export default db;
