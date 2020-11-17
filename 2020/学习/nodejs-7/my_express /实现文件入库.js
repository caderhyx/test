var formidable = require('formidable');
// 获取formidable 对象，用于文件上传及表单数据解析
var form = new formidable.IncomingForm();
//  实现文件上传，获取表单数据并解析为对象
// 通过回调函数的形式，将文件上传后的路径等信息及表单数据返回
form.parse(req, (err, fileds, files) => {
    // 设置上传路径
    var file_path = '/img' + files.touxiang.name
        //  将上传后的文件移动到指定的目录并重命名
    fs.rename(files.touxiang.path, './public' + file_path, (err) => {

        // 将文件路径写入对象中
        fileds.img = file_path;
        // 连接数据库，将组装好的数据写入数据库
        shujuku.where('id=' + urlobj.query.id).updata(fileds, data => {
            // 判断数据库的返回数据 >1 说明有改动的地方
            if (data >= 1) {

            }
        })



    })
})