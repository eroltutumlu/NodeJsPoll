var express = require('express'),
    router = express.Router();

router.get('/', function (request, response) {
    response.render("pages/index",{
        'pageTitle':'HOME'
    });
});

module.exports = router;