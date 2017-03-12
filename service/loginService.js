'use strict';
var RestResult = require('../common/RestResult');
var UserModel = require('../models').UserModel;


module.exports = {

    //用户注册
    register: function (name, pwd, phone, callback) {

        var result = new RestResult();
        //检查是否存在
        UserModel.findOne({phone: phone}).then((doc) => {
            if (doc) {
                result.errorCode = RestResult.ERROR;
                result.message = "手机号已存在!";
                callback(result);
                return null;
            }
            var userEntity = new UserModel({username: name, password: pwd, phone: phone});
            return userEntity.save();

        }).then((doc) => {

            if (doc) {
                result.message = "注册成功!";
                callback(result);
            }

        }).catch((err) => {

            result.errorCode = RestResult.ERROR;
            result.message = "注册失败!";
            callback(result);
        });
    },


    //用户登录
    login: function (phone, password, callback) {
        var result = new RestResult();
        UserModel.findOne({'phone': phone})
            .then((doc) => {
                if (doc && doc.password == password) {
                    var userEntity = {};
                    userEntity.username = doc.username;
                    userEntity.phone = doc.phone;
                    result.message = "登录成功!";
                    result.data = userEntity;
                    callback(result);
                    return;
                }

                result.message = "用户不存在,请检查账号!";
                callback(result);

            }).catch((err) => {
            result.errorCode = RestResult.ERROR;
            result.message = "登录失败!";
            callback(result);
        });
    }
}