var RestResult = require('../common/RestResult');

// 404通用处理器
function notFoundHandler(req, res) {
    var result = new RestResult();
    result.errorCode = RestResult.ROUTERS_ERROR;
    result.message = "no found handler, please check your routes or request method!";
    result.method = req.method;
    result.requestAddress = (req.secure ? 'https://' : 'http://') + req.host + req.path;
    res.send(404, result);
}

module.exports = function (app) {

    //跨域设置
    app.all('*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", ' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });

    //***************在此处添加路由模块******************
    app.use('/api', require('./album'));
    app.use('/api', require('./user'));
    app.use('/api', require('./blog'))
    app.use('/api', require('./qiniu'))

    //***********************************************



    //GET POST PUT DELETE 路由通用处理
    app.get('*', notFoundHandler);
    app.post('*', notFoundHandler);
    app.put('*', notFoundHandler);
    app.delete('*', notFoundHandler);


}