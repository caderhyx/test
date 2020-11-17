// 首先引入 express框架
var express = require('express');

// 引入 formidable 插件 处理文件上传
var formidable = require('formidable');

var fs = require('fs');

// 开启框架
var app = express();

// 使用框架的方法
app.post('/', (req, res) => {

    // 获取 formidable对象
    var form = new formidable.IncomingForm();
    // 使用parse方法，自动实现文件的上传 req传出去  他有三个参数 （是否错误 , 表单内容 , 文件内容）
    form.parse(req, (err, filelds, files) => {
        //将文件移出来，它有三个参数 第一个是当前文件所在的地址 第二个是你想要移到哪儿，'./+原文件名'  第三个是err
        fs.rename()
    })
})

app.listen('999')