const router = require('express').Router();
const logger = require('morgan');
const os = require('os');

// GET /.well-known/openid-configuration
router.get('/.well-known/openid-configuration', function(req, res, next) {
    logger(`req.method: ${req.method}`);
    logger(`req.url: ${req.url}`);
    logger(`req.query: ${JSON.stringify(req.query)}`);
    logger(`req.body: ${JSON.stringify(req.body)}`);

    const host = `http://${os.hostname()}:${process.env.PORT}`;
    // prepare response
    const response = {
        "issuer": host,
        "authorization_endpoint": `${host}/authorize`,
        "token_endpoint": `${host}/token`,
        "token_endpoint_auth_methods_supported": [
            "client_secret_basic",
            "private_key_jwt"
        ],
        "token_endpoint_auth_signing_alg_values_supported":
     ["RS256", "ES256"],
   "userinfo_endpoint":   `${host}/userinfo`,
   "check_session_iframe":   `${host}/connect/check_session`,
   "end_session_endpoint": `${host}/connect/end_session`,
   "jwks_uri": `${host}/jwks.json`,
   "registration_endpoint":  `${host}/connect/register`,
   "scopes_supported":
     [
        "openid", 
        "profile", 
        "email", 
        "address",
        "phone", 
        "offline_access"
    ],
   "response_types_supported":
     [
        "code", 
        "code id_token", 
        "id_token", 
        "token id_token"
    ],
   "acr_values_supported":
     ["urn:mace:incommon:iap:silver",
      "urn:mace:incommon:iap:bronze"],
   "subject_types_supported":
     ["public", "pairwise"],
   "userinfo_signing_alg_values_supported":
     ["RS256", "ES256", "HS256"],
   "userinfo_encryption_alg_values_supported":
     ["RSA1_5", "A128KW"],
   "userinfo_encryption_enc_values_supported":
     ["A128CBC-HS256", "A128GCM"],
   "id_token_signing_alg_values_supported":
     ["RS256", "ES256", "HS256"],
   "id_token_encryption_alg_values_supported":
     ["RSA1_5", "A128KW"],
   "id_token_encryption_enc_values_supported":
     ["A128CBC-HS256", "A128GCM"],
   "request_object_signing_alg_values_supported":
     ["none", "RS256", "ES256"],
   "display_values_supported":
     ["page", "popup"],
   "claim_types_supported":
     ["normal", "distributed"],
   "claims_supported":
     ["sub", "iss", "auth_time", "acr",
      "name", "given_name", "family_name", "nickname",
      "profile", "picture", "website",
      "email", "email_verified", "locale", "zoneinfo",
      "http://example.info/claims/groups"],
   "claims_parameter_supported":
     true,
   "service_documentation":
   `${host}/connect/service_documentation.html`,
   "ui_locales_supported":
     ["en-US", "en-GB", "en-CA", "fr-FR", "fr-CA"]
    }

    res.json(response);
});


module.exports = router;