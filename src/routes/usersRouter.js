const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

router.get('/api/users', controller.listUser);

router.post('/api/saveNewUser', controller.saveNewUser);

router.put('/api/editUser/:id', controller.editUser);

router.delete('/api/deleteUser/:id', controller.deleteUser);

module.exports = router;