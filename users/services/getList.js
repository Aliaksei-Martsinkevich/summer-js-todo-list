import User from '../models';

export default filter => User.find({}).select('name todos').exec();
