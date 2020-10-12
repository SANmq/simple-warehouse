const GoodList = require('../dbModel/GoodList');

async function addGoodItem(nickname, classify, parameters, imageUrlList, remark, number) {
    const x = await GoodList.create({nickname, classify, parameters, imageUrlList, remark, number});
    return x.toJSON()
}

async function updateGoodItem(id, nickname, classify, parameters, imageUrlList, remark, number) {
    const x = await GoodList.update({nickname, classify, parameters, imageUrlList, remark, number}, {where: {id}})
    if (x[0]) {
        return '修改成功'
    } else {
        throw new Error('修改失败')
    }
}

async function deleteGoodItem(id) {
    const x = await GoodList.destroy({where: {id}})
    if (x) {
        return '删除成功'
    } else {
        throw new Error('删除失败')
    }
}

module.exports = {addGoodItem, updateGoodItem, deleteGoodItem}
