// authorization service 


// Example request:
// client_id: HqJwHus26P5E7bbbwYqHZ3ghjVc8mYfb
// scope: openid profile email
// response_type: id_token
// redirect_uri: http://localhost:3000/callback
// response_mode: form_post
// nonce: LHRyi8FViEXn5gCVp-RHc2N3xXwnYV6QZ4SeUGZGCE8
// state: eyJyZXR1cm5UbyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJ9

/**
sim/routes/authorize.js * Authorize 
 * @param {*} client_id 
 * @param {*} scope 
 * @param {*} response_type 
 * @param {*} redirect_uri 
 * @param {*} response_mode 
 * @param {*} nonce 
 * @param {*} state 
 * @returns {*} returns a response object
 */

const authorize = (client_id, scope, response_type, redirect_uri, response_mode, state, nonce) => {
    const response = {};

    console.log(`got state = ${state}`);

    response.code = 302;
    response.headers = {
        Location: `${redirect_uri}?code=${makeCode()}&state=${state}`
    };
    response.body = makeBody();
    return response;
}

module.exports = {
    authorize
}

const makeCode = () => {
    // for now, make a static code
    const code = '1234567890';
    return code;
    //return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const makeBody = () => {
    const body = {};
    body.access_token = makeJWT();
    body.token_type = 'Bearer';
    body.expires_in = 3600;
    body.refresh_token = makeRefreshToken();
    return body;
}

const makeJWT = () => {
    return '1234567890';
}


const makeRefreshToken = () => {
    return '1234567890';
}
