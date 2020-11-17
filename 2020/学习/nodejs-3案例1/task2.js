var shujuku = require('./shujuku');

var template = require('art-template');

template.defaults.root = './';


shujuku.getdata(function(datas) {
    module.exports.data = template('./index.html', { data: datas });
})