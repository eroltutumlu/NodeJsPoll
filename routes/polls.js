var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('../views/pages/polls', {pageName:'Polls'}); //render çağırmak analmında kullanılır
});

module.exports = router; //modüle dışarda erişim sağlayabilmek için kodu export ediyoruz
