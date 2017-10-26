import mongoose from 'mongoose';
import User from './models/User';

const users = [
    {
        first_name: 'Jeremy',
        last_name: 'Delhaie',
        email: 'jeremy.delhaie@gmail.com',
        password: '29081990'
    },
    {
        first_name: 'Elise',
        last_name: 'Puchercos',
        email: 'elise.puchercos@gmail.com',
        password: '29081990'
    }
];

mongoose.connect('mongodb://localhost/inkCMS');

users.map(data => {
   const user = new User(data);
   user.save();
});