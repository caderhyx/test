const express = require('express');

const app = express();

// 导入 外置路由
var router = require('./router');
// 引用外置路由
app.use(router);

app.listen(888, function() {

})