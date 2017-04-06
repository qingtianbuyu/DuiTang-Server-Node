var express = require('express')
var router  = express.Router();
var RestResult = require('../common/RestResult');

var blogService = require('../service/blogService');

router.post('/blog/create', (req, res) => {
    var blog = {
        msg: req.body.msg,
        tags: req.body.tags,
        sender: req.body.userId,
        album: req.body.albumId,
        photo: {
            path: req.body.path,
            width: req.body.width,
            height: req.body.height
        }
    }

    var restResult = new RestResult();

    if(!blog.sender){
        restResult.errorCode = RestResult.ERROR
        restResult.message   = '请提交userId!'
        res.send(restResult);
        return;
    }

    if(!blog.album){
        restResult.errorCode = RestResult.ERROR
        restResult.message   = '请提交albumId!'
        res.send(restResult);
        return;
    }

    if(!blog.photo.path){
        restResult.errorCode = RestResult.ERROR
        restResult.message   = '请提交图片!'
        res.send(restResult);
        return;
    }

    blogService.create(blog, (result) => {
        res.send(result)
    });
});


//查询用户的专辑
router.get('/blog/list/album', (req, res) => {
    var album = req.query.albumId;
    var page   = req.query.page | 1;
    blogService.listByAlbumId(album,page, (result) => {
        res.send(result);
    })
});


module.exports = router