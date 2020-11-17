var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
});

connection.connect();



module.exports.getdata = function(call) {
    var sql = 'select * from users';

    connection.query('sql', function(err, data) {
        call(data);
    })

    connection.end()
}