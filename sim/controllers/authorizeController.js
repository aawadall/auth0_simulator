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

    const response = service.authorize(client_id = req.query.client_id, 
        redirect_uri = req.query.redirect_uri, 
        response_type = req.query.response_type, 
        scope = req.query.scope, 
        state = req.query.state, 
        nonce = req.query.nonce);

    console.log('Sending response: ')
    console.log(`response.code: ${response.code}`);
    console.log(`response.headers: ${JSON.stringify(response.headers)}`);

    res.status(response.code).set(response.headers).send();
}

module.exports = {
    authorize
}

