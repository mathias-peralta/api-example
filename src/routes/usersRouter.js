const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

router.get('/api/users', controller.listUser);

module.exports = router;