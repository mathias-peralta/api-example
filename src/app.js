const express = require('express');
const app = express();
const morgan = require('morgan');
const usersRouter = require('./routes/usersRouter');



//settings
app.set('port', process.env.PORT || 4000);

//middleware
app.use(morgan('dev'))

//routes
app.use(usersRouter);

module.exports = app;