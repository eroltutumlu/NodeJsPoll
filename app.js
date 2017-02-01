var http = require('http'),
    express = require('express'),
    port = process.env.PORT || 3000;

var polls =require('./routes/polls')

var app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use('/polls',polls);

app.get('/', function (request, response) {
    response.render("pages/index");
});
var server = http.createServer(app);

server.listen(port, function(){
    console.log('Listening port: ' + port);
});
