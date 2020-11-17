// 引入 URL fs ./dqsj 
var dqsj = require('./dqsj');
var url = require('url');
var fs = require('fs');

// 导出监听事件
module.exports.bind = function(server) {
    // 启动监听
    server.on('request', function(request, response) {
        // 请求方式
        var method = request.method;
        // 解析字符串 生成对象
        var urlobj = url.parse(request.url, true);
        // 判断 请求方式为get时
        if (method == 'GET') {
            // 请求路径为'/'时，
            if (urlobj.pathname == '/') {
                // 调用getall方法，显示整个页面全部
                dqsj.getall(request, response);
                // 请求路径为'/getone'时
            } else if (urlobj.pathname == '/getone') {
                // 调用getone方法，查看指定某个功能
                dqsj.getone(request, response);
                // 请求方式为 '/upuser'时
            } else if (urlobj.pathname == '/upuser') {
                // 调用upuser方法，点击修改功能，后显示静态页面
                dqsj.upuser(request, response);
            } else {
                // 读取其他文件
                fs.readFile('.' + urlobj.pathname, function(err, data) {
                    response.end(data);
                })
            }
            // 请求方式为 post 时：
        } else if (method == 'POST') {
            // 
            if (urlobj.pathname == '/add') {
                dqsj.upuser_post(request, response)
            }
        } else {
            console.log('不支持这种方式')
        }
    })
}