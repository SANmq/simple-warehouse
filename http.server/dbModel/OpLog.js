// 出入库操作记录
const sequelize = require("./db");
const {DataTypes} = require("sequelize");
module.exports = sequelize.define(
    "OpLog",
    {
        opType: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '操作类型,可选,默认填写,',
        },
        goodId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id',
            comment: '操作的商品编号'
        },
        oldData: {
            type: DataTypes.JSON,
            allowNull: false,
            field: 'old_data',
            comment: '被修改的原始数据',
        },
        newData: {
            type: DataTypes.JSON,
            allowNull: false,
            field: 'new_data',
            comment: '被修改后的新数据',
        },
        isRollback: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'is_rollback',
            comment: '是否支持回滚',
        },
    },
    {
        tableName: 'op_log',
        createdAt: true,
        updatedAt: false,
        paranoid: false,
        deletedAt: true
    }
);