// token controller 

const token = (req, res, next) => {
    console.log(`'REQUEST' ${req.method} ${req.url}`)
    // if we have query params, log them
    if (Object.keys(req.query).length > 0) {
        console.log(`'QUERY PARAMS' ${JSON.stringify(req.query)}`)
    }

    // if we have a body, log it
    if (Object.keys(req.body).length > 0) {
        console.log(`'BODY' ${JSON.stringify(req.body)}`)
    }

    // TODO: implement token endpoint
    res.status(501).send('Not implemented yet');
    next();
}

module.exports = {
    token
}