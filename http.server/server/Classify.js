const ClassifyList = require('../dbModel/ClassifyList')

async function addClassifyItem(name, defaultParams) {
    const x = await ClassifyList.create({name, defaultParams})
    return x.toJSON()
}

async function getClassifyList(currentPage = 1, limit = 10) {
    const rest = await ClassifyList.findAndCountAll({
        offset: (currentPage - 1) * limit,
        limit: +limit
    })
    const classifyList = [].slice.call(rest.rows).map(function (item) {
        return item.toJSON()
    })
    return {total: rest.count, classifyList}
}

async function getClassifyItemAll() {
    const rest = await ClassifyList.findAll()
    console.log(rest, typeof rest)
    return rest
}


/**
 * 更新,根据id
 * @param id
 * @param name
 * @param defaultParams
 * @returns {Promise<string>}
 */
async function updateClassifyItem(id, name, defaultParams) {
    const x = await ClassifyList.update({name, defaultParams}, {
        where: {id}
    })
    if (x[0]) {
        return '更新成功'
    } else {
        throw new Error('更新失败')
    }
}

async function delClassifyItem(id) {
    const x = await ClassifyList.destroy({where: {id}})
    if (x) {
        return '删除成功'
    } else {
        throw new Error('删除失败')
    }
}

module.exports = {addClassifyItem, getClassifyList, updateClassifyItem, delClassifyItem, getClassifyItemAll}


// addClassifyItem('电脑', [{name: '品牌'}, {name: '系统'}, {name: '内存'}, {name: '硬盘'}, {name: 'cpu'}]).then(
//     (x) => {
//     }
// )

// getClassifyList().then((e) => {
//     console.log(e)
// })

// updateClassifyItem(2, '笔记本电脑',
//     [{name: '品牌'}, {name: '系统'}, {name: '内存'}, {name: '硬盘'}, {name: 'cpu'}, {name: '分辨率'}]).then(() => {
// }, (err) => {
//     console.log(err.toString())
// })
//
// delClassifyItem(1).then(() => {
// }, (err) => {
//     console.log(err.toString())
// })