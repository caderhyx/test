// 作用：解决回调地狱的问题

var fs = require('fs');

function fun(files) {
    // 先new promise  然后使用一个匿名函数  它有两个参数（正确的话，报错了的话)
    return new Promise(function(succ, err) {
        fs.readFile(files, 'utf8', function(err, data) {
            if (err) {
                err(err)
            } else {
                succ(data)
            }
        })
    });
}

fun('./文件1')
    .then(function(data) {
        console.log(data);
        return (fun('./文件2'))
    })
    .then(function(data) {
        console.log(data);
        return (fun('./文件3'))
    })