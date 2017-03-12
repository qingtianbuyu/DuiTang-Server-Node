//通用返回数据格式
var RestResult = function () {
	this.errorCode = RestResult.NO_ERROR;
	this.message = '';
	this.data = {};
}

var ObjectList = function () {
    this.total = 0;
    this.next_start = 0;
    this.object_list = [];
    this.more = 0;
    this.limit = 0;
}


//操作成功(添加,删除,更新等)
RestResult.NO_ERROR = 0;
//操作失败
RestResult.ERROR  = 1;

//认证错误
RestResult.AUTH_ERROR_CODE  = 2;
//路由匹配错误
RestResult.ROUTERS_ERROR  = 4;
//服务器未知错误
RestResult.SERVER_EXCEPTION_ERROR = 5;

module.exports = RestResult;