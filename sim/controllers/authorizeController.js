// authorization controller 
const service = require('../services/authorizeService');
const axios = require('axios');

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
    const callbackUrl = req.query.redirect_uri.replace('http://localhost', 'client');

    console.log(`callbackUrl: ${callbackUrl}`);

    // send POST to callback URL
    axios({
        url: callbackUrl,
        method: 'post',
        data: response.body,
    }).then((response) => {
        console.log(`Status code: ${response.status}`);
        console.log(`Status text: ${response.statusText}`);
        console.log(`Response headers: ${response.headers}`);
        console.log(`Response data: ${response.data}`);
    }, (error) => {
        console.log(error);
    });
    
    res.status(response.code).set(response.headers).send();
    
}

module.exports = {
    authorize
}

