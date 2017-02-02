var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // render html+ejs'i render eder.(Photoshop kullanırızda resmin render olmasını bekleriz ya onun gini)
  // TODO: Commentleri ingilizce yazalım. Bunu okuduktan sonra lütfen sil benim yazdığım commenti.
  res.render('../views/pages/about-us', { title: 'Express' , pageName:'AboutUs'}); //render çağırmak analmında kullanılır
});

module.exports = router; //modüle dışarda erişim sağlayabilmek için kodu export ediyoruz
