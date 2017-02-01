var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/polls', function(req, res, next) {
  res.render('polls'); //render çağırmak analmında kullanılır
});

module.exports = router; //modüle dışarda erişim sağlayabilmek için kodu export ediyoruz
