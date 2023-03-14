// user info router 

const router = require('express').Router();

const controller = require('../controllers/userinfoController');

// GET /userinfo
router.get('/', controller.userinfo);

module.exports = router;