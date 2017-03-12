var base = require('./BaseModel');
var objectId = base.ObjectId;

var UserSchema = new base.Schema({
	id: Number,
	username: String,
	password: String,
    phone: { type: String, unique: true,required: true },
	avatar: String
});

var UserModel = base.mongoose.model('UserModel', UserSchema, 'user');
exports.UserModel = UserModel;
