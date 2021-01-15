const express = require('express');
const app = express();
const morgan = require('morgan');

const usersRouter = require('./routes/usersRouter');


//settings
app.set('port', process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//middleware
app.use(morgan('dev'))

//routes
app.use(usersRouter);

//export the server
module.exports = app;