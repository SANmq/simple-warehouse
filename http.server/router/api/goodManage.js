// 成本管理
const {updateGoodManage, getGoodCost, getGoodSale} = require('../../server/Good')
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
        return getGoodSale(req.query.limit, req.query.currentPage)
    }
}))


module.exports = router