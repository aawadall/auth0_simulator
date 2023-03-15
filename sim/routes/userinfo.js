// user info router 
const jwtMw = require('../middleware/jwt');

const router = require('express').Router();

const controller = require('../controllers/userinfoController');

// GET /userinfo
router.get('/', jwtMw.checkJwt, (req, res) => {
    console.log('userinfo route');
    console.log(`req.headers: ${JSON.stringify(req.headers)}`);
    console.log(`req.method: ${req.method}`);
    console.log(`req.url: ${req.url}`);
    if(req.user) {
        console.log(`req.user: ${JSON.stringify(req.user)}`);
    }
    res.json(req.user);
});

module.exports = router;