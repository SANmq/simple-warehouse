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
            type: DataTypes.FLOAT,
            defaultValue: 0,
            comment: '该商品的购入花费',
            validate: {
                min: 0
            }
        },
        repairCost: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            field: 'repair_cost',
            comment: '商品的维修过程花费',
            validate: {
                min: 0
            }
        },
        transCost: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            field: 'trans_cost',
            comment: '商品售出时的运费花费',
            validate: {
                min: 0
            }
        },
        price: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            comment: '商品出售时的标价',
            validate: {
                min: 0
            }
        },
        discount: {
            type: DataTypes.FLOAT,
            defaultValue: 1,
            comment: '商品给出的折扣,1为不打折,默认不打折',
            validate: {
                min: 0,
                max: 1
            }
        },
        isOnSale: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            field: 'is_on_sale',
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
            field: 'is_sale',
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