var http = require('http'),
    express = require('express'),
    port = process.env.PORT || 3000;

<<<<<<< HEAD
<<<<<<< .merge_file_a07372
var my_page = require('./routes/my-page');
=======
var about_us = require('./routes/about-us');
>>>>>>> .merge_file_a09740
=======
var polls =require('./routes/polls')
>>>>>>> polls-ejs-page-routes

var app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
<<<<<<< HEAD
<<<<<<< .merge_file_a07372
app.use('/my_page',my_page);

=======
app.use('/about_us',about_us);
>>>>>>> .merge_file_a09740

=======
app.use('/polls',polls);
>>>>>>> polls-ejs-page-routes

app.get('/', function (request, response) {
    response.render("pages/index");
});
var server = http.createServer(app);

server.listen(port, function(){
    console.log('Listening port: ' + port);
});
