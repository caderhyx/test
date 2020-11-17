var shujuku = require('./shujuku');
var template = require('art-template');
template.defaults.root = './';
var url = request('url');

// 导出
module.exports = {

    // 出现数据库中的内容
    getall: function(request, response) {
        // 从数据库中调用 查看属性
        shujuku.select(function(data) {
            // 读取'./index.html'文件，
            var datas = template('./index.html', { data: data });
            // 返回
            response(datas);
        });
    },
    // 点击查看 出现一个页面
    getone: function(request, response) {
        var urlobj = url.parse(request.url, true);
        // 调用数据库中的where，select 
        shujuku.where('id' + urlobj.query.id).select(function(data) {
            // 点击查看后出现的一个新页面，  
            var data1 = template('./newyemian.html', { data: data })
            response(data1)
        });
    },
    // 点击修改之后 打开一个页面 这个页面也有数据
    upuser: function(request, response) {
        var urlobj = url.parse(request.url, true);
        shujuku.where('id' + urlobj.query.id).select(function(data) {
            var data2 = template('./add.html', { data: data })
            response(data2)
        });
    },

    // 修改之后，提交数据  
    upuser_post: function(request, response) {
        // 接收数据 
        var data_post = '';
        // 设置监听事件 ，数据传进来 data_post 来接
        request.on('data', function(che) {
            data_post += che;
        });
        // 监听数据传输结束事件
        request.on('end', function() {
            var urlobj = url.parse(request.url, true);
            shujuku.where('id=' + urlobj.query.id).updata(data, function() {
                request.end();
            })
        })
    }
}