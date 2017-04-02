var express = require('express');
var bodyParser = require('body-parser');
var app = express(); //Create the Express app
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//日志工具
var log4js = require('./utils/log');
log4js.use(app);

//添加路由模块
var routes = require('./routes');
routes(app);

app.listen(9001, function() {
	console.log('Ready');
});