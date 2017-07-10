/* eslint no-underscore-dangle: off */
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

UserSchema.pre('findOneAndUpdate', function (next) {
  if (Object.prototype.hasOwnProperty.call(this._update, 'password')) {
    this._update.password =
      bcrypt.hashSync(this._update.password, SALT_WORK_FACTOR);
  }
  next();
});

UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default UserSchema;
