const GoodList = require('./GoodList')
const GoodManage = require('./GoodManage');


// 商品和入库信息对应上
GoodList.hasOne(GoodManage, {
    // onDelete: 'SET NULL', //联级删除操作 不需要也不能设置，因为不会真的删除
    foreignKey: {
        name: 'id',
        allowNull: false
    }
})

GoodManage.belongsTo(GoodList, {
    foreignKey: {
        name: 'id',
        allowNull: false
    }
})
