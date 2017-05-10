var formidable = require('formidable')
var fs = require('fs') //nodejs的文件处理

var exec = {
    getAttachment(req, res) {
        var file_hash = req.query.id
        var localFile = fs.readFileSync("upload/files/" + file_hash, 'binary')
        //设置头文件信息
        //指定一个被下载的文件名
        res.setHeader('Content-disposition', 'inline; filename=' + encodeURIComponent(file_hash))
        //内容类型
        // res.setHeader('Content-Type', result.file.type)
        //服务器响应的字段数
        // res.setHeader('Content-Length', result.file.size)
        res.write(localFile, 'binary')
        res.end()
    },
    file(req) {
        console.log('save file')
        return new Promise(function(resolve, reject) {
            if (req.method.toLowerCase() == 'post') {
                var form = new formidable.IncomingForm();
                form.uploadDir = "upload/temp";
                form.maxFieldsSize = 2 * 1024; //10G
                form.hash = "md5"

                if (!fs.existsSync("upload")) {
                    fs.mkdirSync("upload")
                }

                if (!fs.existsSync("upload/files")) {
                    fs.mkdirSync("upload/files")
                }
                if (!fs.existsSync("upload/temp")) {
                    fs.mkdirSync("upload/temp")
                }

                //每当有一对字段/文件已经接收到，便会触发该事件
                form.on('file', function(name, file) {
                        fs.rename(file.path, "upload/files/" + file.hash, function(result) {
                            console.log("存入数据库")
                            console.log(file.hash)
                                // dealFile(file).then((result) => {
                            resolve(file.hash)
                                // })
                        })
                    })
                    // 当上传流中出现错误便会触发该事件
                form.on('error', function(err) {
                        console.log('error' + err)
                    })
                    //该方法会转换请求中所包含的表单数据
                form.parse(req)
            } else {
                reject("please post")
            }
        })
    }
}

module.exports = function(req, res, next) {
    var action = req.params.action
    Promise.resolve(action).then(function(result) {
        return exec[result](req, res, next)
    }).then(function(result) {
        if (req.params.action != "getAttachment") {
            res.send(result)
        }
    }).catch(function(error) {
        res.status(500).send(error.toString())
    })
}