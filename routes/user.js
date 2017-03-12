var express = require('express')
var router = express.Router();
var RestResult = require('../common/RestResult');


var loginService = require('../service/loginService');

//注册
router.post('/user/register', (req, res, next) => {
    var name = req.body.name;
    var pwd = req.body.password;
    var phone = req.body.phone;
    var validationResult = new RestResult();

    if (!name) {
        validationResult.errorCode = RestResult.ERROR;
        validationResult.message = "用户名称不能为空!";
        res.send(validationResult);
        return;
    }

    if (!pwd) {
        validationResult.errorCode = RestResult.ERROR;
        validationResult.message = "用户密码不能为空!";
        res.send(validationResult);
        return;
    }

    if (!phone) {
        validationResult.errorCode = RestResult.ERROR;
        validationResult.message = "用户手机号不能为空!";
        res.send(validationResult);
        return;
    }

    loginService.register(name, pwd,phone, (result) => {
        res.send(result);
    });
});

//登录
router.post('/user/login', (req, res, next) => {
    var phone = req.body.phone;
    var pwd = req.body.password;
    var validationResult = new RestResult();
    if (!phone) {
        validationResult.errorCode = RestResult.ERROR;
        validationResult.message = "手机号不能为空!";
        res.send(validationResult);
        return;
    }

    if (!pwd) {
        validationResult.errorCode = RestResult.ERROR;
        validationResult.message = "用户密码不能为空!";
        res.send(validationResult);
        return;
    }


    loginService.login(name, pwd, (result) => {
        res.send(result);
    });
});

module.exports = router