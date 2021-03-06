'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Users = require('./controllers/Users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize the router
var router = (0, _express.Router)();

// Handle /movies.json route with index action from movies controller

// Import index action from movies controller
router.route('/users.json').get(_Users.index);

exports.default = router;
//# sourceMappingURL=router.js.map