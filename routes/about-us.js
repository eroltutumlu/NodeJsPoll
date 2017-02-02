var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/pages/about-us', { title: 'Express' , pageName:'AboutUs'});
});

module.exports = router;
