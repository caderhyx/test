// 引入一个http
var http = require('http');

// 引入fs
var fs = require('fs');

// 创建一个服务器
var server = http.createServer();

// 绑定事件
server.on('request', function(res, rso) {
    // res : 客户端发出请求    rso : 浏览器的回应
    if (res.method == 'GET') {
        console.log("GET请求");
    } else if (res.method == 'POST') {
        console.log("POST请求");
    }
    //  响应头
    rso.setHeader('content-type', 'text/html;charset=utf-8');
    // 如果不写rso.end()  浏览器会一直转圈，写上相当于给了个响应



    rso.write('韩雅雯');
    rso.write('bbbbbb');
    rso.write('cccccc');
    rso.write('dddddd');
    rso.end()

});

// 监听端口
server.listen(6900, function() {
    console.log('请打开浏览器访问：127.0.0.1:6900')
})

// *****  这些写完都得在终端中写