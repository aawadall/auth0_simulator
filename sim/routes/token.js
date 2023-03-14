// token router 
const router = require('express').Router();

const controller = require('../controllers/tokenController');

// POST /token
router.post('/', controller.token);

module.exports = router;