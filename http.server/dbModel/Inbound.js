// 商品列表,有商品入库后不支持进行修改
const sequelize = require("./db");
const {DataTypes} = require("sequelize");
module.exports = sequelize.define(
    "Inbound",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            comment: '商品的唯一ID编号'
        },
        totalCost: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
            field: 'total_cost',
            comment: '商品的成本',
            set(value) {
                this.setDataValue('totalCost', this.getDataValue('totalCost') ? this.getDataValue('totalCost') + value : value)
            }
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            comment: '商品默认数量',
            set(value) {
                this.setDataValue('number', this.getDataValue('number') ? this.getDataValue('number') + value : value)
            }
        },
        perCost: {
            type: DataTypes.VIRTUAL,
            get() {
                return this.getDataValue('number') ? this.getDataValue('totalCost') / this.getDataValue('number') : 0
            }
        }

    },
    {
        tableName: 'inbound',
        createdAt: true,
        updatedAt: false,
        deletedAt: false
    }
);