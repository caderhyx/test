var express = require('express');

var router = express.Router();

router
    .get('/', function(res, rso) {
        yewu.getall(res, rso)
    }).get('/', function(res, rso) {
        yewu.getone(res, rso)
    });

// 优化：

router
    .get('/', yewu.getall)
    .get('/', yewu.getone)

//  优化前 调用getall，getone 需要通过匿名函数