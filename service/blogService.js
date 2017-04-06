'use strict';
var RestResult = require('../common/RestResult');
var ObjectList = require('../common/ObjectList')
var AlbumModel = require('../models').AlbumModel;
var BlogModel  = require('../models').BlogModel

module.exports = {

    create: function (album,callback){
        var result = new RestResult();
        var blogModel = new BlogModel(album);
        blogModel.save()
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

    listByAlbumId: function (albumId,page, callback) {
        var restResult = new RestResult()

        var options = {
            page: page,
            limit: 40,
            populate: [
                {
                    path: 'sender', select:'username phone'
                },
                {
                    path: 'album', select:'name desc'
                }
            ]
        }

        var query = {album: albumId}

        BlogModel.paginate(query, options)
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