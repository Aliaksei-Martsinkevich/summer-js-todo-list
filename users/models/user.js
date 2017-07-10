import mongoose from 'mongoose';
import UserSchema from '../schemas/';

export default mongoose.model('User', UserSchema);
