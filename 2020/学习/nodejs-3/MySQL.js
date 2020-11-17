var mysql = require('mysql');

var connection = mysql.createConnection({
    // 设置连接信息
    host: "",
    user: "",
    password: "",
    database: ""
});

connection.connect();
// 打开连接
var sql = 'select * from users where id=1';
// 发送sql语句
connection.query(sql, function(err, res, filed) {
    // 回调获取sql返回的数据

    module.exports.res = res;
    // 导出数据
})
connection.end();
// 结束连接，在获取数据之后关闭