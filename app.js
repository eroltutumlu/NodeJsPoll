var http = require('http'),
    express = require('express'),
    port = process.env.PORT || 3000;

<<<<<<< .merge_file_a07372
var my_page = require('./routes/my-page');
=======
var about_us = require('./routes/about-us');
>>>>>>> .merge_file_a09740

var app = express();
app.set('view engine','ejs');
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
<<<<<<< .merge_file_a07372
app.use('/my_page',my_page);

=======
app.use('/about_us',about_us);
>>>>>>> .merge_file_a09740


app.get('/', function (request, response) {
    response.render("pages/index");
});

var server = http.createServer(app);

server.listen(port, function(){
    console.log('Listening port: ' + port);
});
