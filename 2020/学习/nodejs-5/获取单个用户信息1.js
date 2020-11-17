var fs = require('fs');
const { response } = require('_@types_express@4.17.4@@types/express');
const { callbackify } = require('util');
const { createConnection } = require('net');

fs.readFile('request', function(request, respense) {
    if ('getone') {
        dqsj.getone(url.quire.id, function() {
            response.end(data)
        })
    }
})

dqsj.getone(id)

module.exports.getone = function() {
    shuju.getone(id)
}


module.exports.getone = function(id, calls) {

}

module.exports.getone = function(id, callback) {
    shujuku.getone(id, function(data) {

        callback(template('./..html', { data: data }))
    })
}


module.exports.getone = function(id, calls) {
    var sql = 'select * from users where id=' + id;
    connection.query(sql, function(err, sql_data) {
        call(sql_data)
    })
}