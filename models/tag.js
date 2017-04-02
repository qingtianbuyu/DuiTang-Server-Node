var base = require('./BaseModel');
var objectId = base.ObjectId;

var TagSchema = new base.Schema({
    album_id: String,
    name: String,
    create_at: {type: Date, default: Date.now},
});

var TagModel = base.mongoose.model('TagSchema', TagSchema, 'tag');
exports.TagModel = TagModel;
exports.TagSchema = TagSchema;
