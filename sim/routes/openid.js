// open id router 
const router = require('express').Router();
const controller = require('../controllers/openidController');

// GET /openid/profile/email
router.get('/profile/email', controller.profileEmail);