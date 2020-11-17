// 引用express框架
const express = require('express');
// 
const dqwj = require('./dqwj');
// 打开框架
const app = express();

// 用框架设置静态页面(设置css)
app.use(express.static('public'))
    // 读取文件， HTML 为后缀名 ，
app.engine('html', require('express-art-template'))

var router = require('./bdsj')
app.use(router);

app.listen(8000, function() {
    console.log('请求访问 127.0.0.1:8000')
})