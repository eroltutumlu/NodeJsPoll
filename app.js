var http = require('http'),
    express = require('express'),
    port = process.env.PORT || 3000;

var myPage = require('./routes/my-page'),
    aboutUs = require('./routes/about-us'),
    index = require('./routes/index'),
    polls = require('./routes/polls');

var app = express();
app.set('view engine','ejs');

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

// Routes middlewares
app.use('/my-page',my_page);
app.use('/about-us',about_us);
app.use('/',index);
app.use('/polls',polls);


var server = http.createServer(app);

server.listen(port, function(){
    console.log('Listening port: ' + port);
});