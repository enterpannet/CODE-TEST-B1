const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const laundryRouter =require('./routes/laundry');

const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://valet:tong007@cluster0-bm8gy.gcp.mongodb.net/apionline?retryWrites=true&w=majority',
 {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/laundry',laundryRouter);


module.exports = app;
