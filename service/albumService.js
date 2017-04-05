'use strict';
var RestResult = require('../common/RestResult');
var ObjectList = require('../common/ObjectList')
var AlbumModel = require('../models').AlbumModel;
var UserModel  = require('../models').UserModel

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
                console.log(err)
                result.errorCode = RestResult.ERROR;
                result.message = err
                callback(result);
        })

	},

    listByUserId: function (userId,page, callback) {
		var restResult = new RestResult()

        var options = {
            page: page,
            limit: 10,
            select: 'name desc create_at user',
            populate: [
                {
                    path: 'user', select:'username phone'
                }
            ]
        }

        var query = {user: userId}

		AlbumModel.paginate(query, options)
			.then((result) => {
				var objectList = new ObjectList(result.total, 0,result.docs, 0,result.limit);
                restResult.data = objectList
				restResult.message = '查询成功!'
				callback(restResult)
			}).catch((err) => {
				restResult.errorCode = RestResult.ERROR
				restResult.message = '查询失败!'
				callback(restResult)
		})
    }

}