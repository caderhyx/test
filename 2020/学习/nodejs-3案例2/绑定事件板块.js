var dqsj = require('./读取事件板块');
var fs = require('fs');
module.exports.bind = function(Server) {
    Server.on('request', function(request, response) {
        var method = request.method
        if (method == 'GET') {
            if (request.url == '/') {
                response.end(dqsj.data)
            } else {
                fs.readFile('.' + request.url, function(err, data) {
                    response.end(data);
                })
            }
        } else if (method == 'POST') {
            console.log('post')
        } else {
            console.log('')
        }
    })
}