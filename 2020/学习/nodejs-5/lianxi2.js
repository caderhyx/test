var url = require('url');
var lianxi3 = require('./lianxi3');


module.exports.bind = function(server) {
    Server.on('request', function(request, response) {
        var urlobj = url.parse(request.url, true);
        var method = request.method;
        if (method == 'GET') {
            if (urlobj.pathname == '/') {
                lianxi3.gettall(request, response)
            }
        }
    })
}