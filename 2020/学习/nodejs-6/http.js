// 引入http   ./bdsj文件夹  
var http = require('http');
var bdsj = require('./bdsj');

//创建服务器 
var server = http.createServer();
// 绑定监听事件
bdsj.bind(server);

// 服务器监听
server.listen(6608, function() {
    console.log('请求127.0.0.1:6608')
})