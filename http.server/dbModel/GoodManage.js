// 商品动态数据管理
const sequelize = require("./db");
const {DataTypes} = require("sequelize");
module.exports = sequelize.define(
    "GoodManage",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            comment: '商品唯一编号,外键GoodList',
        },
        cost: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '该商品的购入花费'
        },
        repairCost: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '商品的维修过程花费'
        },
        transCost: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '商品售出时的运费花费'
        },
        isOnSale: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            comment: '商品是否上架出售'
        },
        detail: {
            type: DataTypes.STRING(255),
            defaultValue: '暂无任何描述,请联系买家了解商品详情',
            comment: '商品展示时的一些描述字段,可以为空,默认为请联系买家了解商品详情',
            validate: {
                len: [0, 200]
            }
        },
        isSale: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            comment: '商品是否售出'
        }
    },
    {
        tableName: 'good_manage',
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
    }
);