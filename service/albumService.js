'use strict';
var RestResult = require('../common/RestResult');
var AlbumModel = require('../models').AlbumModel;


module.exports = {

	create: function (album,callback){
        var result = new RestResult();
		var albumModel = new AlbumModel(album);
		albumModel.save()
			.then((doc) => {
		        result.data = doc.id;
                result.message = "创建成功!";
                callback(result)
			}).catch( (err) => {
                result.errorCode = RestResult.ERROR;
                result.message = "注册失败!";
                callback(result);
		});
	}
}