const router = require('express').Router();


// /autghorize

router.get('/', function(req, res, next) {
    console.log(`req.method: ${req.method}`);
    console.log(`req.url: ${req.url}`);
    console.log(`req.query: ${JSON.stringify(req.query)}`);
    console.log(`req.body: ${JSON.stringify(req.body)}`);


    const respCode = 200;
    const response = {}

    res.status(respCode).json(response);
});

module.exports = router;