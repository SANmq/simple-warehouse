// 销售管理
const sequelize = require("./db");
const {DataTypes} = require("sequelize");
module.exports = sequelize.define(
    "SaleManage",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            comment: '商品唯一编号',
        },
        isSale: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'is_sale',
            comment: '商品是否在售'
        }
    },
    {
        tableName: 'sale_manage',
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        paranoid: false,
    }
);