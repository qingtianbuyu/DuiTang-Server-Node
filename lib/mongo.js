var config 	  = require('config');
var Mongolass = require('mongolass');
var mongolass = new Mongolass();
mongolass.connect(config.mongodb);


exports.User = mongolass.model('user', {
	name: {type: 'string'},
	password: {type: 'string'}
})
exports.User.index({name:1, {unique: true}}).exec();