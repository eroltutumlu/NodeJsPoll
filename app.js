var http = require('http'),
    express = require('express'),
    port = process.env.PORT || 3000;

var index = require('./routes/index');

var app = express();
app.set('view engine','ejs');
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use('/',index);

var server = http.createServer(app);

server.listen(port, function(){
    console.log('Listening port: ' + port);
});
