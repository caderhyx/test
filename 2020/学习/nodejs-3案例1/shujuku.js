// 获取请求
var mysql = require('mysql');
// 设置连接信息
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'onepiece'
});
// 打开连接
connection.connect();
// 发送sql返回的数据

module.exports.getdata = function(calls) {
    var sql = 'select * from users ';
    // 回调获取sql返回的数据

    connection.query(sql, function(err, s_data) {
            console.log(err),
                // 导出数据
                // module.exports.res = res;
                calls(s_data)
            connection.end();
        })
        // 结束连接

}



// indexedDB.dats(function() {

//     })
//     //创建一个方法
// module.exports.dats = function(calls) {

//         calls()
//     }
// 调用它 相当于把数据传过去了