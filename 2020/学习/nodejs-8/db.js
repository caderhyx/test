var mysql = require('mysql');
const { callbackify } = require('util');

var connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});

connection.connect();

module.exports = {
    wh: undefined,
    where: function(wh) {
        this.wh = wh
        return this;
    },
    select: function(callback) {
        if (this.wh == undefined) {
            var sql = "select * from users";
        } else {
            var sql = "select * from users where" + this.wh;
        }
        // 发送sql语句
        connection.query(sql, function(err, sql_data) {
            var da = sql_data;
            callback(da);
        });
        this.wh = undefined;
    },
    delete: function(callback) {
        if (this.wh == undefined) {
            console.log('请加where条件')
        } else {
            var sql = "delete from users where" + this.wh;
            connection.query(sql, function(err, datas) {
                callback(datas.affectedRows)
            })
        }
        this.wh = undefined;
    },
    updata: function(data, callback) {
        if (this.wh == undefined) {
            console.log('请加where条件');
            return;
        } else {
            // 将客户端传过来的数据以 键值对的形式传入数据库 xx = xx 的形式
            var set = '';
            for (i in data) {
                // data[i] 等于值  ， i 等于 键
                set += i + "=" + data[i]
            }
            var sql = "updata user set " + set + 'where' + this.wh;

            connection.query(sql, function(err, datas) {
                // 受影响的行数
                callback(datas.changedRows);
            })
        }
        this.wh = undefined;
    }
}