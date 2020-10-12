const {addGoodItem} = require('../../server/GoodList')
const express = require("express");
const router = express.Router();
const {asyncHandle} = require('../util')

// 这个地方还需要重新考虑处理方案
router.put('/item', asyncHandle(async (req, res, next) => {
    return addGoodItem(req.body.nickname, req.body.classify,
        req.body.parameters, req.body.imageUrlList, req.body.remark, req.body.number)
}))


module.exports = router