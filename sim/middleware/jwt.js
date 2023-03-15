const {expressjwt: jwt} = require('express-jwt');
const jwksRsa = require('jwks-rsa');


const authConfig = {
    domain: `http://${process.env.HOST_NAME}:${process.env.PORT}`,
    audience: `http://${process.env.HOST_NAME}:${process.env.PORT}`,
};


const checkJwt = jwt({
    // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `http://${process.env.HOST_NAME}:${process.env.PORT}/.well-known/jwks.json`,
    }),
    audience: authConfig.audience,
    issuer: authConfig.domain,
    algorithms: ['RS256'],
});

module.exports = {
    checkJwt
}