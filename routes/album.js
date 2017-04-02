var express = require('express')
var router  = express.Router();
var RestResult = require('../common/RestResult');

var albumService = require('../service/albumService');

router.post('/album/create', (req, res) => {
    var album = {
        name: req.body.name,
        desc: req.body.desc,
        tags: req.body.tags,
        user_id: req.body.user_id
    }

    var restResult = new RestResult();

    if(!album.user_id){
        restResult.errorCode = RestResult.ERROR
        restResult.message   = '请提交user_id!'
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


module.exports = router