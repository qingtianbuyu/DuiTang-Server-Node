var mongoosePaginate = require('mongoose-paginate');

var base = require('./BaseModel');
var objectId = base.ObjectId;


var AlbumSchema = new base.Schema({
	name: String,
	desc: String,
	user_id: String,
	tags: [String],
	create_at: {type: Date, default: Date.now},
});
AlbumSchema.plugin(mongoosePaginate);

var AlbumModel = base.mongoose.model('AlbumModel', AlbumSchema, 'album');
exports.AlbumModel = AlbumModel;
