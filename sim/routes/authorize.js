const router = require('express').Router();
const controller = require('../controllers/authorizeController');

// /autghorize

router.get('/', controller.authorize);

module.exports = router;