// simple logger api server 

const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

// Routes
const wellKnownRouter = require('./routes/wellKnown');

app.use('/.well-known', wellKnownRouter);

app.use(function(req, res, next) {
    const err = new Error('Not implemented yet');
    err.status = 501;
    
    console.log(`'NOT IMPLEMENTED YET' ${req.method} ${req.url}`)
    // if we have query params, log them
    if (Object.keys(req.query).length > 0) {
        console.log(`'QUERY PARAMS' ${JSON.stringify(req.query)}`)
    }

    // if we have a body, log it
    if (Object.keys(req.body).length > 0) {
        console.log(`'BODY' ${JSON.stringify(req.body)}`)
    }

    next(err);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});