var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/pages/my-page', {pageName:'MyPage'}); //render çağırmak analmında kullanılır
});

module.exports = router; //modüle dışarda erişim sağlayabilmek için kodu export ediyoruz
