const {addClassifyItem, updateClassifyItem, getClassifyItemAll} = require('../../server/Classify')
const express = require("express");
const router = express.Router();
const {asyncHandle} = require('../util')

router.put('/', asyncHandle(async (req, res, next) => {
    console.log(req.body.name, req.body.defaultParams)
    return addClassifyItem(req.body.name, req.body.defaultParams)
}))

router.post('/', asyncHandle(async (req, res, next) => {
    return updateClassifyItem(req.body.id, req.body.obj)
}))


router.get('/', asyncHandle(async (req, res, next) => {
    return getClassifyItemAll()
}))

module.exports = router