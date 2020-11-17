// 引入一个http
var http = require('http');

// 引入fs
var fs = require('fs');

// 创建一个服务器
var server = http.createServer();

// 绑定事件
server.on('request', function(res, rso) {
    // res : 客户端发出请求    rso : 浏览器的回应
    // console.log(res.url);   浏览器响应得到 /   服务器没有对图片的请求作出响应

    var urls = res.url;
    if (urls == '/') {
        rso.setHeader('content-type', 'text/html;charset=utf-8');
        fs.readFile('./lianxi1.html', 'utf8', function(err, data) {
            rso.end(data);
        })
    } else {
        // 响应一切HTML需要的静态资源 （请求图片，其他需求时都可以 对它们进行响应）
        fs.readFile('.' + urls, function(err, data) {
            rso.end(data);
        })
    }
});

// 监听端口
server.listen(6900, function() {
    console.log('请打开浏览器访问：127.0.0.1:6900')
})