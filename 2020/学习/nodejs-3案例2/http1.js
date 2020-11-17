var http = require('http');
var bdsj = require('./绑定事件板块');
var server = http.createServer();

bdsj.bind(server);

server.listen(8700, function() {
    console.log('请求127.0.0.1:8700')
})