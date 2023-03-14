// simple logger api server 

const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));


// Routes
const wellKnownRouter = require('./routes/wellKnown');
const authRouter = require('./routes/authorize');
const openIdRouter = require('./routes/openid');
const tokenRouter = require('./routes/token');
const userinfoRouter = require('./routes/userinfo');
const logoutRouter = require('./routes/logout');

app.use('/.well-known', wellKnownRouter);
app.use('/authorize', authRouter);
app.use('/token', tokenRouter);
app.use('/userinfo', userinfoRouter);
app.use('/logout', logoutRouter);

// partial path router 
function partialPathMatcher(req, res, next) {
    if (req.path.startsWith('/openid')) {
        return openIdRouter(req, res, next);
    } 
    return next();
}

app.use(partialPathMatcher);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not implemented yet');
    err.status = 404;
    
    console.log(`'NOT IMPLEMENTED YET' ${req.method} ${req.url}`)
    // if we have query params, log them
    if (req.query) {
        console.log(`'QUERY PARAMS' ${JSON.stringify(req.query)}`)
    }
    
    // if we have a body, log it
    if (req.body) {
        console.log(`'BODY' ${JSON.stringify(req.body)}`)
    }
    
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    console.log(`'ERROR' ${err.message}`)
    console.log(`METHOD: ${req.method} URL: ${req.url}`);

    if (req.query) {
        console.log(`QUERY: ${JSON.stringify(req.query)}`)
    }

    if (req.body) {
        console.log(`BODY: ${JSON.stringify(req.body)}`)
    }
    // set locals, only providing error in development
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err 
    });
});


// middleware to log exactly what we're getting
app.use(function(req, res, next) {
    console.log(`'REQUEST' ${req.method} ${req.url}`)
    // if we have query params, log them
    if (Object.keys(req.query).length > 0) {
        console.log(`'QUERY PARAMS' ${JSON.stringify(req.query)}`)
    }

    // if we have a body, log it
    if (Object.keys(req.body).length > 0) {
        console.log(`'BODY' ${JSON.stringify(req.body)}`)
    }

    next();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});