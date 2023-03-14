// user info router 
const jwtMw = require('../middleware/jwt');

const router = require('express').Router();

const controller = require('../controllers/userinfoController');

// GET /userinfo
router.get('/', jwtMw.checkJwt, (req, res) => {
    res.json(req.user);
});

module.exports = router;