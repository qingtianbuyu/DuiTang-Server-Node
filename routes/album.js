var express = require('express')
var router  = express.Router();
var RestResult = require('../common/RestResult');

var albumService = require('../service/albumService');

router.post('/album/create', (req, res) => {
    var album = {
        name: req.body.name,
        desc: req.body.desc,
        tags: req.body.tags,
        user: req.body.userId
    }

    var restResult = new RestResult();
    if(!album.user){
        restResult.errorCode = RestResult.ERROR
        restResult.message   = '请提交userId!'
        res.send(restResult);
        return;
    }

    if(!album.name){
        restResult.errorCode = RestResult.ERROR
        restResult.message   = '专辑名称不能为空!'
        res.send(restResult);
        return;
    }
    albumService.create(album, (result) => {
       res.send(result)
    });
});


//查询用户的专辑
router.get('/album/list', (req, res) => {
    var userId = req.query.userId;
    var page   = req.query.page | 1;
    albumService.listByUserId(userId,page, (result) => {
        res.send(result);
    })
});


module.exports = router