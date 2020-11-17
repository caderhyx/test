const express = require('express');
const app = express();


// get: 客户端发送了get请求   / 代表URL的判断    
//  这个相当于原来server.on 监听事件的判断 ，get(./)时咋咋咋，这个就是框架的简洁之处
app.get('/', function(req, res) {

    res.send('hello world')
})

// express的内置路由
// app.method(url,fun)

app.listen(666, function() {
    console.log('请访问 127.0.0.1:66')
})