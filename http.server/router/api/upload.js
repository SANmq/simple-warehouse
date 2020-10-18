// 处理文件上传,主要是仓库图片的静态文件,指定固定的位置就可以了
const fs = require('fs');
const uuid = require('uuid');
const md5 = require('md5')
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path')
const imagePath = path.resolve(__dirname, '../../../dist/upload')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        fs.mkdir(imagePath, () => {
            cb(null, imagePath);
        })
    },
    filename: function (req, file, cb) {
        //对于文件名进行相关的操作
        //获取原始文件的扩展名
        const extension = file.originalname.substr(file.originalname.lastIndexOf('.') + 1).toLowerCase();
        //生成新的文件名
        const filename = md5(uuid.v1()) + '.' + extension;
        cb(null, filename);
    }
})


// 这里是总配置
const upload = multer({
    // dest: imagePath,
    storage,
    fileFilter: function (req, file, cb) {
        if (/^image\//.test(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE', '拒绝非图片类型文件上上传'))
        }
    },
    // preservePath: false // 是否使用文件上传时候的名字。默认就是false

}).array('imageUrl', 8)

/**
 * 用户的登录请求处理,如果已经成功登录，则不做登录请求的处理实际操作
 */
router.post('/', (req, res, next) => {
        upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                res.status(410).send(err)
                return null
                // 发生错误
            } else if (err) {
                // 发生错误
                res.status(410).send('发生了未知的错误' + err)
                return null
            }

            try {
                console.log(req.files)
                console.log('--------------这里是一次请求---------------------')
                const data = req.files.map((v, i, self) => {
                    return {name: v.originalname, url: '/upload/' + v.filename}
                })
                res.send(data)
                // 一切都好
            } catch (e) {
                res.status(410).send('发生了未知的错误' + err)
            }
        })
    }
)


// 处理图片文件的删除,提供upload目录下的文件名称,进行删除,安全,只能指定文件名称进行删除,
// 实际删除文件过程还需要其他的内容进行支持,
router.delete('/', async (req, res, next) => {
    let list = req.query.imageUrl.split(';')
    // 返回删除的文件结果
    let result = []
    // 循环删除文件列表中的文件
    for (let file of list) {
        try {
            console.log(path.join(imagePath, file))
            fs.unlinkSync(path.join(imagePath, file))
            result.push(1)
        } catch (e) {
            result.push(0)
        }
    }
    // 返回删除结果
    res.send(result)
})

module.exports = router;