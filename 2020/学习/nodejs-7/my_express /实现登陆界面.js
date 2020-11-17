var express = require('express');
var app = express();

var cs = require('cookie-session');
// 传点数据
var cs_obj = {
    name: 'sessionID',
    keys: ['hyxhyxhyx']
}
var ccss = cs(cs_obj);

app.use(ccss);

// 判断有无登陆
app.get('/', (req, res) => {
    if (req.session.session_data) {
        res.send('已经登陆')
    } else {
        res.send('没有登陆')
    }
})


app.get('/uplogin', (req, res) => {
    //  1,获取用户提交的数据
    //  2，链接数据库查询此用户，如果有就是正确登陆

    var userinfo = { name: 'admin', pwd: '123' };

    req.session.session_data = userinfo;
    res.send('session写入成功')

})

app.listen(888);