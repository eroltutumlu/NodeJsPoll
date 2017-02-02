var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('../views/pages/polls', {pageName:'Polls'});
});

module.exports = router;
