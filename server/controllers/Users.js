import User from '../models/User';

export const index = (req, res, err) => {
    User.find().lean().exec((err, users) => res.json(
        {
            users: users.map(user => ({
                ...user
            }))
        }
    ))
};