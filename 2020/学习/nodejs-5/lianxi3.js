var lianxi4 = require('./lianxi4');
var template = require('art-template');
template.default.root = './';

module.exports = {
    gettall: function(req, res) {
        lianxi4.select(function(data) {
            var datas = template('', { data: data });
            res.end(datas)
        })
    }
}