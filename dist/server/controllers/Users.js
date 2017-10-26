'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = exports.index = function index(req, res, err) {
    _User2.default.find().lean().exec(function (err, users) {
        return res.json({
            users: users.map(function (user) {
                return _extends({}, user);
            })
        });
    });
};
//# sourceMappingURL=Users.js.map