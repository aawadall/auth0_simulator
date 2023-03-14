// authorization controller 
const service = require('../services/authorizeService');

const authorize = (req, res, next) => {
    console.log(`req.method: ${req.method}`);
    console.log(`req.url: ${req.url}`);
    
    // print individual query params as key value pairs in the console
    console.log("QUERY PARAMETERS:");
    for (const [key, value] of Object.entries(req.query)) {
        console.log(`${key}: ${value}`);
    }

    const response = service.authorize(req.query.client_id, 
        req.query.redirect_uri, 
        req.query.response_type, 
        req.query.scope, 
        req.query.state, 
        req.query.nonce);

    res.status(response.code).set(response.headers).send();
}

module.exports = {
    authorize
}

