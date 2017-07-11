import User from '../models';

export default async credentials => User
.create(credentials);
