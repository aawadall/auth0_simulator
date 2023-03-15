// openid controller 
const service = require('../services/openIdService');
const axios = require('axios');

const profileEmail = (req, res) => {
    console.log('profileEmail route');
    console.log(`req.headers: ${JSON.stringify(req.headers)}`);
    console.log(`req.method: ${req.method}`);
    console.log(`req.url: ${req.url}`);
    console.log("=====================================");
    if (req.query) {
        console.log(`'QUERY PARAMS' ${JSON.stringify(req.query)}`)
    }

    if (req.body) {
        console.log(`'BODY' ${JSON.stringify(req.body)}`)
    }


    const response = {};
    response.code = 200;
    response.headers = {
        'Content-Type': 'application/json'
    };

    const user = service.profileEmail();
    console.log(`user: ${JSON.stringify(user)}`);
    response.body = {
        "user": user
    };

    console.log('Sending response: ')
    console.log(`response.code: ${response.code}`);
    console.log(`response.headers: ${JSON.stringify(response.headers)}`);
    console.log(`response.body: ${JSON.stringify(response.body)}`);
    // axios({
    //     url: 'client:3000/callback',
    //     method: 'post',
    //     data: response.body,
    // }).then((response) => {
    //     console.log(`Status code: ${response.status}`);
    //     console.log(`Status text: ${response.statusText}`);
    //     console.log(`Response headers: ${response.headers}`);
    //     console.log(`Response data: ${response.data}`);
    // }, (error) => {
    //     console.log(error);
    // });
    res.status(response.code).set(response.headers).send();
}

module.exports = {
    profileEmail
}

const makeEmail = () => {
    // for now return fixed email 
    return "someone@email.com";
    //return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + "@gmail.com";
}