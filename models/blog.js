var base = require('./BaseModel');
var objectId = base.ObjectId;

var BlogSchema = new base.Schema({
    album: { type: base.Schema.Types.ObjectId, ref: 'AlbumModel'},
    sender: { type: base.Schema.Types.ObjectId, ref: 'UserModel'},
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

var BlogModel = base.mongoose.model('BlogModel', BlogSchema, 'blog');
exports.BlogModel = BlogModel;
