import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  _author: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  text: String,
  isDone: { type: Boolean, required: true, default: false },
});

export default TodoSchema;
