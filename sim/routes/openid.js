// open id router 
const router = require('express').Router();
const controller = require('../controllers/openidController');

// GET /openid/profile/email
router.get('/openid%20profile%20email', controller.profileEmail);

router.get('*', (req, res) => {
    console.log(`'REQUEST' ${req.method} ${req.url}`);
    // if we have query params, log them
    if (Object.keys(req.query).length > 0) {
        console.log(`'QUERY PARAMS' ${JSON.stringify(req.query)}`);
    }

    // if we have a body, log it
    if (Object.keys(req.body).length > 0) {
        console.log(`'BODY' ${JSON.stringify(req.body)}`);
    }

    res.status(501).send('Not implemented yet');
});
module.exports = router;
