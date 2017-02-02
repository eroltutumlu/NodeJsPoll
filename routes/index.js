var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/pages/index', {pageName:'Home'});
});

module.exports = router;
