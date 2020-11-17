var two = require('./two');
var fs = require('fs');

module.exports.bind = function(server) {
    server.on('request', function(request, response) {
        var url = require('url');
        var method = request.method;
        var urlobj = url.parse(request.url, true);
        if (method = 'GET') {
            if (urlobj.pathname = '/') {
                response.end(two.data)
            } else {
                fs.readFile('.' + urlobj.pathname, function(err, data) {
                    response.end(data)
                })
            }
        } else if (method = 'POST') {

        }

    })
}