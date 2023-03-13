// application entry point for client

// dependencies
const dotenv = require('dotenv');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const path = require('path');

// routers 
const indexRouter = require('./routes/index');

// housekeeping
dotenv.load();
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// routes
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: process.env.NODE_ENV != 'production' ? err : {}
    });
});

const port = process.env.PORT || 3000;

http.createServer(app).listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

