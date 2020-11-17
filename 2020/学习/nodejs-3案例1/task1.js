var task2 = require('./task2');
var fs = require('fs');
var url = require('url');

module.exports.bind = function(server) {

    server.on('request', function(request, response) {

        var objurl = url.parse(request.url, true);
        var method = request.method;

        if (method == 'GET') {
            if (objurl.pathname == '/') {
                response.end(task2.data)
            } else if (objurl.pathname = './getone') {
                response.end('getone')
            } else if (urlobj.pathname == './upusers') {
                task2.upusers()
            } else {
                fs.readFile('.' + objurl.pathname, function(err, data) {
                    response.end(data);
                });
            }
        } else if (method == 'POST') {

        }


    })
}


upusers_get: function(res, rso) {
    shujuki.where('id=' + urlobj.query.id).select(function() {
        template('./', { data: data })
        rso(data)
    })
}

upusers_post: function(res, rso) {
    var data_post = '';
    res.on('data', function(che) {
        data_post += che;
    });

    res.on('end', function() {
        querystring.parse(data_post)
        rso.end();
    })
}