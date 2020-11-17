var mysql = require('mysql');
const { data } = require('jquery');
var connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
});

connection.connect();


module.exports = {
    wh: undefined,
    // where 传的值进来
    where: function(wh) {
        this.wh = wh
        return this;
    },

    select: function(callback) {
        // 如果where没有值，查看所有数据
        if (this.wh = undefined) {
            var sql = 'select * from users'
                // 否则将where的值传进来 查看那个值
        } else {
            var sql = 'select * from users where' + this.wh;
        }
        // 查找你要读的数据
        connection.query(sql, function(err, s_data) {
                // 回调函数将数据传回去
                callback(s_data)
            })
            // 
        this.wh = undefined;
    },
    updata: function(data, callback) {
        if (this.wh = undefined) {
            console.log('没有找到')
        } else {
            // where有值的话 将键值对 循环的加进 '' 中
            var set = '';
            for (i in data) {
                set += i + '=' + data[i] + ',';
            }
            var sql = 'updata users set' + set + 'where' + this.wh;

            connection.query(sql, function(err, data) {
                callback(data.changedRows);
            })
        }
        this.wh = undefined;
    }
}