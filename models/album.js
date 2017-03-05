var base = require('./BaseModel');
var objectId = base.ObjectId;

var AlbumSchema = new base.Schema({
	sender_id: Number,
	like_count: Number,
	favorite_count:Number,
	extra_type: String,
	msg: String,
	buyable: Number,
	status: Number,
	is_root: Number,
	root_blog_id: Number,
	is_certify_user: Boolean,
	reply_count: Number,
	source_link: String,
	add_datetime: {type: Date, default: Date.now},
	photo: {path: String, width: Number, height: Number, _id: false}
});

var AlbumModel = base.mongoose.model('AlbumModel', AlbumSchema, 'album');
exports.AlbumModel = AlbumModel;
