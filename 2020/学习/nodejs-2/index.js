var fs = require('fs');

fs.readdir('./', 'utf8', function(err, data) {
    var data_arr = [];
    for (var i = 0; i < data.length; i++) {
        var obj = {};
        fs.stat(data[i], function(err, files) {

            obj.name = data[i];
            obj.size = files.size;
            obj.mtime = files.mtime;
        })
        data_arr.push(obj);
    }
})

// i丢失的问题： 循环异步，for循环完之后才进行回调函数，循环完之后i相当于没有
// 所以i丢失了   打印obj.name 结果为 undefined