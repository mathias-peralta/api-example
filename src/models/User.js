const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: String,
    lastName: String,
    age: Number,
    email: String
})

module.exports = model('User', userSchema);