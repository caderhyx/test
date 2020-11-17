var sjk = require('./数据库模块');
var template = require('art-template');

template.defaults.root = './';

sjk.getdata(function(s_data) {
    module.exports.data = template('./index.html', { data: s_data })
})

module.exports = {
    getall: function(req, res) {
        sjk.select()
    }
}