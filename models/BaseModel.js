var mongodb = require('../lib/mongo');
var mongoose = mongodb.mongoose;
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

exports.mongodb = mongodb;
exports.mongoose = mongoose;
exports.Schema = Schema;
exports.ObjectId = ObjectId;