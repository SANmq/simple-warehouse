const express = require("express");
const router = express.Router();
const {asyncHandle, publish} = require('../util')
const {login} = require('../../server/Admin')
/**
 * 用户的登录请求处理,如果已经成功登录，则不做登录请求的处理实际操作
 */
router.post('/', asyncHandle(async (req, res, next) => {
        const admin = await login(req.body.name, req.body.password)
        if (admin) {
            publish(res, undefined, {name: admin.name})
            return '登录成功'
        } else {
            res.status(401).send('登录失败')
        }
    }
));

module.exports = router;