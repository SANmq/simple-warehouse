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
        detail: {
            type: DataTypes.STRING(255),
            defaultValue: '卖家暂未给出该商品任何描述,可尝试联系卖家了解该商品详情',
            comment: '商品展示时的一些描述字段,可以为空,默认为请联系买家了解商品详情',
            validate: {
                len: [0, 200]
            }
        },
        state: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            comment: '商品状态。0：未上架，1：上架，2：待售，3：已售，4：售出，5：退回',
            validate: {
                isIn: [[0, 1, 2, 3, 4, 5]]
            }
        },
        // 上架时间
        onSaleT: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: '商品的上架时间',
        },

        // 拍下时间
        forSaleT: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: '商品的拍下时间'
        },

        // 发出时间
        outSaleT: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: '商品的发出时间'
        },

        // 退回时间
        rebackT: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: '商品的退回时间'
        },

        // 收货时间
        overSaleT: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: '商品的收货时间'
        },
    },
    {
        tableName: 'good_manage',
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
    }
);