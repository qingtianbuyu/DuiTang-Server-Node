/**
 * Created by yking on 2017/4/9.
 */
let config = require('../conf/config')
let qiniu = require("qiniu");
//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = config.qiniuConfig.ACCESS_KEY;
qiniu.conf.SECRET_KEY = config.qiniuConfig.SECRET_KEY;
//要上传的空间
let bucket = config.qiniuConfig.Bucket;

//构建上传策略函数
function uptoken(bucket,key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket,key);
    return  putPolicy.token()
}

//生成上传 Token
var generateTokenWithKing = function (key) {
    this.token = uptoken(bucket, key)
}

module.exports = generateTokenWithKing