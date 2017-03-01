var express = require('express');
var bodyParser = require('body-parser');
var app = express(); //Create the Express app
var routes = require('./routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(3000, function() {
	console.log('Ready');
});