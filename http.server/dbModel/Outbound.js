// 出库数据表
const sequelize = require("./db");
const {DataTypes} = require("sequelize");
module.exports = sequelize.define(
    "Outbound",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            comment: '商品的唯一ID编号'
        },
        number: {
            type: DataTypes.INTEGER,
            default: 0,
            comment: '商品最终出库数量',
            set(value) {
                this.setDataValue('number', this.getDataValue('number') ? this.getDataValue('number') + value : value)
            }
        },
        totalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'total_price',
            comment: '商品出库总价格',
            set(value) {
                this.setDataValue('totalPrice', this.getDataValue('totalPrice') ? this.getDataValue('totalPrice') + value : value)
            }
        },
        transCost: {
            type: DataTypes.INTEGER,
            field: 'trans_costs',
            default: 0,
            allowNull: false,
            comment: '商品出售运费总花费',
            set(value) {
                this.setDataValue('transCost', this.getDataValue('transCost') ? this.getDataValue('transCost') + value : value)
            }
        },
        repairCost: {
            type: DataTypes.INTEGER,
            field: 'repair_cost',
            default: 0,
            allowNull: false,
            comment: '商品维修总花费',
            set(value) {
                this.setDataValue('repairCost', this.getDataValue('repairCost') ? this.getDataValue('repairCost') + value : value)
            }
        },
        perPrice: {
            type: DataTypes.VIRTUAL,
            get() {
                return this.getDataValue('number') ? this.getDataValue('totalPrice') / this.getDataValue('number') : 0
            }
        }
    },
    {
        tableName: 'outbound',
        createdAt: true,
        updatedAt: false,
        deletedAt: false
    }
);
