var http = require('http');
var task1 = require('./task1');

var server = http.createServer();

task1.bind(server);

server.listen(8088, function(err, data) {
    console.log('请求127.0.0.1:8088')
})