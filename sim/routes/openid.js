// open id router 
const router = require('express').Router();
const controller = require('../controllers/openidController');

// GET /openid/profile/email
router.get('/openid%20profile%20email', controller.profileEmail);

module.exports = router;
