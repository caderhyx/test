var http = require('http');
var lianxi2 = require('./lianxi2');
var server = http.createServer();

lianxi2.bind(server);

server.listen(8080, function() {
    console.log('请求127.0.0.1:8080')
})