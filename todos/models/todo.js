import mongoose from 'mongoose';
import TodoSchema from '../schemas';

export default mongoose.model('Todo', TodoSchema);
