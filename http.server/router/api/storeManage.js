// 成本管理
const {updateGoodManage, getGoodCost, getGoodOfState} = require('../../server/Good')
const express = require("express");
const router = express.Router();
const {asyncHandle} = require('../util')

router.post('/', asyncHandle(async (req, res, next) => {
    return await updateGoodManage(req.body.id, req.body.obj)
}))

router.get('/cost', asyncHandle(async (req, res, next) => {
        if (req.query.id) {
            // 有id根据id查询,无id根据分页查询
        } else {
            return getGoodCost(req.query.limit, req.query.currentPage)
        }
    }
))

router.get('/sale', asyncHandle(async (req, res, next) => {
    if (req.query.id) {
        // 有id根据id查询
    } else {
        return getGoodOfState(req.query.limit, req.query.currentPage, 0)
    }
}))


module.exports = router