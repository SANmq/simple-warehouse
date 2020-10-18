const Good = require('../dbModel/GoodList');
const GoodM = require('../dbModel/GoodManage')
const {Op} = require('sequelize')
require('../dbModel/relation')
const {handleMultiTableSearch} = require('./util')

async function addGoodItem(nickname, classify, parameters, imageUrlList, remark, number) {
    const x = await Good.create({nickname, classify, parameters, imageUrlList, remark, number});
    await GoodM.create({id: x.id})
    return x.toJSON()
}

async function updateGoodItem(id, obj) {
    const x = await Good.update(obj, {where: {id}})
    if (x[0]) {
        return '修改成功'
    } else {
        throw new Error('修改失败')
    }
}

/**
 * 根据商品id进行修改商品的属性，如果商品的状态发生改变,则更新状态时间
 * @param id
 * @param obj
 * @returns {Promise<string|boolean>}
 */
async function updateGoodManage(id, obj) {

    if (obj.hasOwnProperty('state')) {
        const gm = await GoodM.findByPk(id)
        if (gm && gm.state < 5) {
            const state = gm.state
            if (obj.state === 1 && state === 0) {
                obj = {...obj, onSaleT: Date.now()}
            } else if (obj.state === 2 && state === 1) {
                obj = {...obj, forSaleT: Date.now()}
            } else if (obj.state === 3 && state === 2) {
                obj = {...obj, outSaleT: Date.now()}
            } else if (obj.state === 4 && state === 3) {
                obj = {...obj, rebackT: Date.now()}
            } else if (obj.state === 5 && state === 3) {
                obj = {...obj, overSaleT: Date.now()}
            } else if (obj.state === 1 && state === 4) {
                obj = {...obj, onsaleT: Date.now()}
            }
        } else {
            return false
        }
    }
    const x = await GoodM.update(obj, {where: {id}})
    if (x[0]) {
        return '修改成功'
    } else {
        return false
    }


}


function getGoodWithAttrs(limit = undefined, currentPage = undefined, attrs = undefined,
                          mainAttrs = undefined, where = {}, mainWhere = {}) {
    limit = limit ? +limit : limit
    let offset = limit && currentPage ? (currentPage - 1) * limit : undefined

    return Good.findAndCountAll({
        attributes: mainAttrs,
        include: [{model: GoodM, attributes: attrs, where}],
        offset,
        limit,
        order: [['createdAt', 'DESC']],
        where: mainWhere
    })
}

/**
 * 根据分页查找数据，默认按照时间降序
 * @param limit 单页数量
 * @param currentPage 当前页
 * @returns {Promise<{total: *, rows: *}>}
 */
async function getGoodCost(limit, currentPage) {
    const attrs = ['cost', 'repairCost', 'transCost', 'state']
    const mainAttrs = ['id', 'nickname', 'classify', 'parameters', 'number', 'remark', 'imageUrlList', 'createdAt']
    const where = {
        [Op.or]: [{state: 0}, {state: 1}, {state: 2}]
    }
    const x = await getGoodWithAttrs(limit, currentPage, attrs, mainAttrs, where)
    return {
        total: x.count, rows: handleMultiTableSearch(x.rows, 'GoodManage')
    }
}


async function getGoodOfState(limit, currentPage, state) {
    let attrs = ['price', 'discount', 'detail', 'state']
    const mainAttrs = ['id', 'nickname', 'classify', 'parameters', 'number', 'remark', 'imageUrlList', 'createdAt']
    const where = {state}
    if (state === 1) {
        attrs.push('onSaleT')
    } else if (state === 2) {
        attrs.push('forSaleT', 'transCost')
    } else if (state === 3) {
        attrs.push('outSaleT')
    } else if (state === 4) {
        attrs.push('rebackT')
    } else if (state === 5) {
        attrs.push('overSaleT', 'cost', 'repairCost', 'transCost')
    }
    const x = await getGoodWithAttrs(limit, currentPage, attrs, mainAttrs, where)
    return {
        total: x.count, rows: handleMultiTableSearch(x.rows, 'GoodManage')
    }
}


module.exports = {addGoodItem, updateGoodItem, updateGoodManage, getGoodCost, getGoodOfState}

