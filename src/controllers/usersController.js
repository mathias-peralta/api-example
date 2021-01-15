const controller = {};
const User = require('../models/User');

controller.listUser = async (req, res) => {
    const allUsers = await User.find();
    res.send(allUsers);
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
    res.send('saved...')
}

controller.editUser = async (req, res) => {
    console.log(req.params);
    await User.findByIdAndUpdate(`${req.params.id}`,req.body);
    res.send('edited...');
}

controller.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send('deleted...');
}

module.exports = controller;