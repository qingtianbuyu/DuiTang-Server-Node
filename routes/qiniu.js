/**
 * Created by yking on 2017/4/9.
 */
let express = require('express')
let router  = express.Router();
var RestResult = require('../common/RestResult');
let QiniuHelper = require('../utils/qiniuHelper')

router.post('/qiniu/token', (req, res) => {

    var restResult = new RestResult()
    restResult.message = 'token 获取成功!';
    var token = new QiniuHelper('123.png');
    restResult.data = token
    res.send(restResult)
})

module.exports = router