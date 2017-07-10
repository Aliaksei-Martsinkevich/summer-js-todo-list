import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  todos: [{ type: Schema.Types.ObjectId, ref: 'Todo' }],
});

UserSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.hash(user.password, SALT_WORK_FACTOR)
  .then((hash) => {
    user.password = hash;
    next();
  }).catch(err => next(err));
});

UserSchema.methods.comparePassword = candidatePassword =>
  bcrypt.compare(candidatePassword, this.password);

export default UserSchema;
