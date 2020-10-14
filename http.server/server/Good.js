const Good = require('../dbModel/GoodList');
const GoodM = require('../dbModel/GoodManage')
require('../dbModel/relation')
const {handleMultiTableSearch} = require('./util')

async function addGoodItem(nickname, classify, parameters, imageUrlList, remark, number) {
    const x = await Good.create({nickname, classify, parameters, imageUrlList, remark, number});
    await GoodM.create({id: x.id})
    return x.toJSON()
}

async function updateGoodItem(id, nickname, classify, parameters, imageUrlList, remark, number) {
    const x = await Good.update({nickname, classify, parameters, imageUrlList, remark, number}, {where: {id}})
    if (x[0]) {
        return '修改成功'
    } else {
        throw new Error('修改失败')
    }
}

async function deleteGoodItem(id) {
    const x = await Good.destroy({where: {id}})
    if (x) {
        return '删除成功'
    } else {
        throw new Error('删除失败')
    }
}

/**
 * 根据商品id进行修改商品的成本属性
 * @param id
 * @param obj
 * @returns {Promise<string|boolean>}
 */
async function updateGoodManage(id, obj) {
    const x = await GoodM.update(obj, {where: {id}})
    if (x[0]) {
        return '修改成功'
    } else {
        return false
    }
}


function getGoodWithAttrs(limit, currentPage, attrs, mainAttrs, where) {
    return Good.findAndCountAll({
        attributes: mainAttrs,
        include: [{model: GoodM, attributes: attrs}],
        offset: (currentPage - 1) * limit,
        limit: +limit,
        order: [['createdAt', 'DESC']],
        where
    })

}

/**
 * 根据分页查找数据，默认按照时间降序
 * @param limit 单页数量
 * @param currentPage 当前页
 * @returns {Promise<{total: *, rows: *}>}
 */
async function getGoodCost(limit, currentPage) {
    const attrs = ['cost', 'repairCost', 'transCost']
    const mainAttrs = ['id', 'number', 'nickname', 'remark', 'imageUrlList', 'createdAt']
    const where = {}
    const x = await getGoodWithAttrs(limit, currentPage, attrs, mainAttrs, where)
    return {
        total: x.count, rows: handleMultiTableSearch(x.rows, 'GoodManage')
    }
}

async function getGoodSale(limit, currentPage) {
    const attrs = ['price', 'discount', 'detail', 'isOnSale', 'isSale']
    const mainAttrs = ['id', 'number', 'nickname', 'imageUrlList']
    const where = {}
    const x = await getGoodWithAttrs(limit, currentPage, attrs, mainAttrs, where)
    return {
        total: x.count, rows: handleMultiTableSearch(x.rows, 'GoodManage')
    }
}

module.exports = {addGoodItem, updateGoodItem, deleteGoodItem, updateGoodManage, getGoodCost, getGoodSale}
