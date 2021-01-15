const controller = {};
const User = require('../models/User');

controller.listUser = (req, res) => {
    res.send('Users');
}

controller.saveNewUser = async (req, res) => {
    console.log(req.body);
    const newUser = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email
    });
    const usersaved = await newUser.save();
    console.log(usersaved);
}

module.exports = controller;