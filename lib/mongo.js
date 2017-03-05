var config 	 = require('../conf/config');
var mongoose = require('mongoose');
mongoose.connect(config.mongodb);
exports.mongoose = mongoose;