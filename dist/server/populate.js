'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _User = require('./models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = [{
    first_name: 'Jeremy',
    last_name: 'Delhaie',
    email: 'jeremy.delhaie@gmail.com',
    password: '29081990'
}, {
    first_name: 'Elise',
    last_name: 'Puchercos',
    email: 'elise.puchercos@gmail.com',
    password: '29081990'
}];

_mongoose2.default.connect('mongodb://localhost/inkCMS');

users.map(function (data) {
    var user = new _User2.default(data);
    user.save();
});
//# sourceMappingURL=populate.js.map