// 分类记录表
const sequelize = require("./db");
const {DataTypes} = require("sequelize");
module.exports = sequelize.define(
    "ClassifyList",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: '分类列表的编号',
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '分类信息的名称',
            unique: true,
            validate: {
                notNull: true,
                len: [1, 10]
            }
        },
        defaultParams: {
            type: DataTypes.JSON,
            allowNull: false,
            comment: '对应分类的默认参数列表',
            field: 'default_params',
            validate: {
                notNull: true,
            }
        }
    },
    {
        tableName: 'classify_list',
        paranoid: false,
        createdAt: true,
        deletedAt: true,
        updatedAt: false
    }
);