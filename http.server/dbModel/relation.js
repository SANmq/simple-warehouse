const GoodList = require('./GoodList')
const Inbound = require('./Inbound');
const Outbound = require('./Outbound')
const SaleManage = require('./SaleManage')

// 商品和入库信息对应上
GoodList.hasOne(Inbound, {
    // onDelete: 'SET NULL', //联级删除操作 不需要也不能设置，因为不会真的删除
    foreignKey: {
        name: 'id',
        allowNull: false
    }
})

Inbound.belongsTo(GoodList, {
    foreignKey: {
        name: 'id',
        allowNull: false
    }
})

GoodList.hasOne(Outbound, {
    foreignKey: {
        name: 'id',
        allowNull: false
    }
})

Outbound.belongsTo(GoodList, {
    foreignKey: {
        name: 'id',
        allowNull: false
    }
})

GoodList.hasOne(SaleManage, {
    foreignKey: {
        name: 'id',
        allowNull: false
    }
})
SaleManage.belongsTo(GoodList, {
    foreignKey: {
        name: 'id',
        allowNull: false
    }
})
