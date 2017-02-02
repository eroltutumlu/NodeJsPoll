var express = require('express'),
    router = express.Router();

router.get('/', function (request, response, next) {
    response.render("pages/index",{
        'pageTitle':'HOME',
        'pageName': 'Home'
    });
});

module.exports = router;