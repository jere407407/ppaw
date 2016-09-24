var express = require('express');
var app = express();
var http = require('http');

var options = {
    root: __dirname
};

app.get('/', function(req,res) {
	res.sendFile("index.html",options);
});

app.get('/p', function(req,res) {
	res.send("id is set to " + req.query.id);
});

app.get('bootstrap/css/bootstrap.min.css', function(req,res) {
    res.sendFile("bootstrap/css/bootstrap.min.css", options);
});

app.get('jquery/jquery.min.js', function(req,res) {
    res.sendFile("jquery/jquery.min.js", options);
});

app.get('jquery/jquery.min.js', function(req,res) {
    res.sendFile("jquery/jquery.min.js", options);
});

http.createServer(app).listen(process.env.PORT || 3000);
