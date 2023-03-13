// application entry point for client

// dependencies

const express = require('express');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const { auth } = require('express-openid-connect');

// routers 
const indexRouter = require('./routes/index');

// housekeeping

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_CLIENT_SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
};


const port = process.env.PORT || 3000;
if(!config.baseURL && !process.env.BASE_URL && process.env.PORT && process.env.NODE_ENV !== 'production') {
    config.baseURL = `http://localhost:${port}`;
}

app.use(auth(config));

// middleware to make user object available in templates
app.use(function(req, res, next) {
    res.locals.user = req.oidc.user;
    next();
});


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


http.createServer(app).listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

