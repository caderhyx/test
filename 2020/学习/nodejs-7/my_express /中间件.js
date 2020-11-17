var express = require('express');
var cs = require('cookie-session');
var app = express();

// express 内置中间件（唯一内置中间件）：设置静态资源路径
app.use(express.static('public'))

//第三方中间件 ：需要你安装，引入，use 就可以了
app.use(cs({
    // cookie 的名字键
    name: 'sessionId',
    // 用于cookie值的加密关键字
    keys: ['dasddas']
}))


// 如果没有next，下面的工序将不再进行

// 中间件
app.use('/', (req, res, next) => {
    console.log(222);
    next();
});

app.get('/', (req, res, next) => {
    console.log(111);
    res.send();
    next()
});

app.post('/', (req, res, next) => {
    console.log(333);
    next();
});

app.all('/', (req, res, next) => {
    console.log(444);
    next()
});


app.listen(8888)