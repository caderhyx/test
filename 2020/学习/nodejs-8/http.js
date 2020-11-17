const express = require('express');
const yewu = require('./yewu');
const app = express();
var cs = require('cookie-session');

app.use(cs({
    name: 'ssessionID',
    keys: ['jiamiguanjianzi']
}))

app.use(express.static('public'))

app.engine('html', require('express-art-template'));

var router = require('./luyou');
app.use(router);


app.listen(999, function() {
    console.log()
})