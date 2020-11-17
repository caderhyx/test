var express = require('express');
var yewu = require('yewu');
var router = express.Router();


router
    .get('/', yewu.getall)
    .get('/getone', yewu.getone)
    .get('/upuser', yewu.upuser_get)
    .post('/upuser', yewu.upuser_post)
    .get('/delete', yewu.delete_user)
    .get('/login', yewu.login_get)
    .post('/login', yewu.login_post)