'use strict';
var RestResult = require('../common/RestResult');
var UserModel = require('../models').UserModel;


module.exports = {

    //用户注册
    register: function (name, pwd, phone, callback) {
        var result = new RestResult();
        var albumModel = new UserModel({username: name, password: pwd, phone: phone});
        albumModel.save((err, doc) => {
            if (!err) {
                result.message = "注册成功!";
                callback(result);
                return;
            }
            console.log(err);
            result.errorCode = RestResult.ERROR;
            result.message = "注册失败!";
            callback(result);
        });
    },


    //用户登录
    login: function (name, pwd, callback) {
        UserModel.findOne({username: name, pwd: pwd}, (err, doc) => {
            var result = new RestResult();
            if (!err) {
                result.message = "登录成功!";
                result.data = doc;
                callback(result);
                return;
            }
            result.errorCode = RestResult.ERROR;
            result.message = "登录失败!";
            callback(result);
        });
    }
}