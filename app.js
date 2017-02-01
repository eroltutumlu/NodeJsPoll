var http = require('http'),
    express = require('express'),
    port = process.env.PORT || 3000;

var my_page = require('./routes/my-page');
var about_us = require('./routes/about-us');
var index = require('./routes/index');
var polls = require('./routes/polls');


var app = express();
app.set('view engine','ejs');
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use('/my_page',my_page);
app.use('/about_us',about_us);
app.use('/',index);
app.use('/polls',polls);


var server = http.createServer(app);

server.listen(port, function(){
    console.log('Listening port: ' + port);
});
