var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express(); //Create the Express app

app.use('/api', function(req, res, next){
	var arr = [ "aa", "bb", "cc"];
	res.send(arr);
});

app.listen(3000);