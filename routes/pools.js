var express = require('express'),
    router = express.Router();

router.get('/polls/:poolId',function(req, res){
    var poolId = req.params.poolId;
    res.send('<h1>' + poolId + '</h1>');
    console.log(poolId);
});

module.exports = router;