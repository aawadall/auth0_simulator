// logout route
const router = require('express').Router();

const controller = require('../controllers/logoutController');

// GET /logout
router.get('/', controller.logout);

module.exports = router;