const ClassifyList = require('../dbModel/ClassifyList')

/**
 * 添加一个分类
 * @param name
 * @param defaultParams
 * @returns {Promise<*>}
 */
async function addClassifyItem(name, defaultParams) {
    const x = await ClassifyList.create({name, defaultParams})
    return x.toJSON()
}

/**
 * 查找全部,无需分页,数量少
 * @returns {Promise<Model[]>}
 */
async function getClassifyItemAll() {
    return await ClassifyList.findAll()
}

/**
 * 根据分类id更新分类信息
 * @param id
 * @param obj
 * @returns {Promise<string>}
 */
async function updateClassifyItem(id, obj) {
    const x = await ClassifyList.update(obj, {
        where: {id}
    })
    if (x[0]) {
        return '更新成功'
    } else {
        throw new Error('更新失败')
    }
}

module.exports = {addClassifyItem, updateClassifyItem, getClassifyItemAll}