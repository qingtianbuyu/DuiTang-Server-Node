var RestResult = require('../common/RestResult');

function notFoundHandler(req, res) {
    var result = new RestResult();
    result.errorCode = RestResult.ROUTERS_ERROR;
    result.message = "no found handler, please check your routes or request method!";
    result.method = req.method;
    result.requestAddress = (req.secure ? 'https://' : 'http://') + req.host + req.path;
    res.send(404, result);
}

module.exports = function (app) {
    app.use('/api', require('./album'));
    app.use('/api', require('./user'));

    //找不到路由通用处理
    app.get('*', notFoundHandler);
    app.post('*', notFoundHandler);
    app.put('*', notFoundHandler);
    app.delete('*', notFoundHandler);
}