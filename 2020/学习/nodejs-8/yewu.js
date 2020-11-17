var db = require('./db');
var url = require('url');
var fs = require('fs');

// formidable 替代了 req.on('data',fun)  req.on('end',fun)
var formidable = require('formidable');

module.exports = {
    login_get(req, res) {
        res.render('./login.html', {});
    },
    login_post(req, res) {
        var f = new formidable.IncomingForm();
        f.parse(req, (err, fileds) => {
            if (fileds.user == 'houyx' && fileds.pwd == '123') {
                req.session.se_da = fileds;

                var backstr = "<script>alert('登录成功');window.location.href='/'</script>"
                res.setHeader('content-type', 'text/html,charset=utf-8');
                res.end(backstr);
            } else {
                var backstr = "<script>alert('登录失败');window.location.href='/login'</script>"
                res.setHeader('Content-type', 'text/html;charset=utf-8');
                res.end(backstr);
            }
        })
    },
    getall(req, res) {
        if (!req.session.se_da) {
            var backstr = "<script>alert('请登录');window.location.href='/login'</script>"
            res.setHeader('Content-type', 'text/html;charset=utf-8');
            res.end(backstr);
            return;
        }
        db.select(function(datas) {
            res.render('./index.html', { data: data });
        });
    },

    getone: function(req, res) {
        var uelObj = url.parse(req.url, true);

        db.where('id=' + urlObj.query.id).select(function(data) {
            res.render('./userinfo.html', { data: data });
        })
    },
    upuser_get: function(req, res) {
        var urlObj = url.parse(req.url, true);
        db.where('id=' + urlObj.query.id).select(function(data) {
            res.render('./upuser.html', { data: data });
        })
    },
    delete_user: function(req, res) {
        var urlObj = url.parse(req.url, true);
        db.where('id=' + urlObj.query.id).delete(function(data) {
            if (data >= 1) {
                var backstr = "<script>alert('删除成功');wendow.location.href='/'</script>"
                res.setHeader('content-type', 'text/html;charset=utf-8');
                res.end(backstr);
            }
        });
    },
    upuser_post(req, res) {
        var urlObj = url.parse(req.url, true);

        var form = new formidable.IncomingForm();

        form.parse(req, (err, fileds, files) => {

            var file_path = './img/' + files.touxiang.name

            fs.rename(files.touxiang.path, './public' + file_path, (err) => {

                fileds.img = file_path;

                db.where('id=' + urlObj.query.id).updata(fileds, (data) => {
                    if (data >= 1) {
                        var backstr = "<script>alert('修改成功');window.location.href='/'</script>"
                        res.setHeader('Content-type', 'text/html;charset=utf-8');
                        res.end(backstr);
                    }
                })
            })
        })
    },

    // upuser_post:function(req,res){
    //     var data_post = '';
    //     // 设置监听事件(数据传输)
    //     req.on('data',function(che){
    //         data_post+=che;
    //     });
    //     // 监听数据传输结束的事件
    //     req.on('end',function(){
    //         var urlObj = url.parse(req.url,true);
    //         // 将获取到的数据转义
    //         var data_obj = querystring.parse(data_post);

    //         // console.log(data_obj);
    //         // res.end();
    //         // return;

    //         db.where('id='+urlObj.query.id).update(data_obj,function(data){
    //             // res.end(data.toString());

    //             if(data >=1){
    //                 var backstr = "<script>alert('修改成功');window.location.href='/'</script>"
    //                 res.setHeader('Content-type','text/html;charset=utf-8');
    //                 res.end(backstr);
    //             }


    //         });
    //         // console.log(data_obj);

    //     })
    // }
}