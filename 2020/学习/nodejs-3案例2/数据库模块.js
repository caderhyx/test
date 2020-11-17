var mysql = require('mysql')

var connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
});

connection.connect();

module.exports.getdata = function(calls) {
        var sql = 'select * from users'
        connection.query(sql, function(err, s_data) {

            calls(s_data)
        })

    }
    // connection.end()