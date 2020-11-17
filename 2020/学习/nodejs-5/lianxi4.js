var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '',

});

connection.connect();

module.exports = {
    wh: undefined,
    where: function(wh) {
        this.wh = wh
        return this;
    },
    select: function(call) {
        if (this.wh == undefined) {
            var sql = 'select * from users';
        } else {
            var sql = 'select * from where' + this.wh;
        }
        connection.query(sql, function(err, s_data) {
            call(s_data)
        })
        this.wh = undefined;
    }
}