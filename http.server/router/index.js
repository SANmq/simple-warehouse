const express = require('express')
const path = require('path')
const {verify} = require('./util')
const Admin = require('../dbModel/Admin')

app = express()

// 给所有请求配置返回头
app.all('*', function (req, res, next) {
    // console.log(req.hostname)
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Content-Type,X-Requested-With,Authorization,XFILENAME,XFILECATEGORY,XFILESIZE");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By", ' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.use(require('connect-history-api-fallback')())
app.use(express.static(path.resolve(__dirname, '../../dist')))

// 用于解析：application/x-www-form-urlencoded格式的请求
app.use(express.urlencoded({extended: true}))

// 用于解析 application/json 格式的请求
app.use(express.json())

// 用于解析cookies的中间件，可以将请求中的cookie放到cookies里
app.use(require("cookie-parser")())

app.use('/api/login', require('./api/login'))

// 不需要用户认证的路由务必放到这个前面,限制所有api的访问
app.use('/api', verify)
app.use('/api/upload', require('./api/upload'))
app.use('/api/classify', require('./api/classifyList'))


app.listen(8888, async () => {
    // 初始化创建一个管理员,账号admin,密码000000,权限1
    // 该账号无法被删除,至少服务器端不提供删除接口
    const admin = await Admin.findByPk('admin')
    if (admin) {
        console.log('已有admin用户无需创建')
    } else {
        await Admin.create({name: 'admin', password: '000000', power: 1})
    }
    console.log('监听服务器已开启\nhttp://localhost:8888')
})