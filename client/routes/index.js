const { requiresAuth } = require('express-openid-connect');

var router = require('express').Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.get('/profile', requiresAuth(), function (req, res, next) {
    res.render('profile', { 
        userProfile: JSON.stringify(req.oidc.user, null, 2),
        title: 'Profile page'
    });
});

module.exports = router;