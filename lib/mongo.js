var config 	 = require('../conf/config');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(config.mongodb);
exports.mongoose = mongoose;