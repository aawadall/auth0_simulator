const router = require('express').Router();
const controller = require('../controllers/authorizeController');

// /authorize

router.get('/', controller.authorize);

module.exports = router;