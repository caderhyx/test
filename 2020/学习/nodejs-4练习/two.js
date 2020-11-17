var three = require('./three');

var template = require('art-template');
template.defaults.root = './';

three.getdata(function(data) {
    module.exports.data = template('./index.html', { data: data })
})