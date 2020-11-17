var express = require('express');

// 调取路由方法，获取路由对象
var router = express.Router();

router.get('/', (req, res) => {
    res.end('');
});
router.post('/', (req, res) => {
    res.end('')
});

module.exports = router;



// 可直接链式操作
router
    .get('/', (req, res) => {
        res.end('');
    })
    .post('/', (req, res) => {
        res.end('')
    });

module.exports = router;