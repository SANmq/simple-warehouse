// 销售物流过程管理
const {updateGoodManage, getGoodOfState} = require('../../server/Good')
const express = require("express");
const router = express.Router();
const {asyncHandle} = require('../util')

/**
 * 处理更新状态等数据
 */
router.post('/', asyncHandle(async (req, res, next) => {
    return await updateGoodManage(req.body.id, req.body.obj)
}))

/**
 * 根据请求返回不同状态商品
 */
router.get('/state', asyncHandle(async (req, res, next) => {
        if (req.query.id) {
            // 有id根据id查询,无id根据分页查询

        } else {
            return getGoodOfState(req.query.limit, req.query.currentPage, Number(req.query.state))
        }
    }
))


module.exports = router