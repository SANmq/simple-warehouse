// 出入库操作记录
const sequelize = require("./db");
const {DataTypes} = require("sequelize");
module.exports = sequelize.define(
    "OpLog",
    {
        goodId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id',
            comment: '操作的商品编号'
        },
        opType: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '操作类型,可选,默认填写,只记录状态改变,不记录数值参数改变',
        },
    },
    {
        tableName: 'op_log',
        createdAt: true,
        updatedAt: false,
        paranoid: false,
        deletedAt: false
    }
);