var http = require('http');
var one = require('./one');
var server = http.createServer();

one.bind(server);

server.listen(8090, function() {
    console.log('请求127.0.0.1:8090')
})