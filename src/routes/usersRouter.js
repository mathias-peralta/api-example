const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

router.get('/api/users', controller.listUser);

router.post('/api/saveNewUser', controller.saveNewUser);
    
module.exports = router;