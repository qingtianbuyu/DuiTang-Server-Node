'use strict';
var User = require('../lib/mongo').User;

module.exports = {
	create: function (msg){
		return User.create(msg).exec();
	}
}