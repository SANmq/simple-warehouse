// 商品活动记录
const sequelize = require("./db");
const {DataTypes} = require("sequelize");
module.exports = sequelize.define(
    "GoodList",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            comment: '商品唯一编号,自动创建',
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '商品自定义昵称,长度不超过20',
            validate: {
                notNull: true,
                len: [1, 20]
            }
        },
        classify: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '商品所属的分类,必填属性,没有将被自动分为其他类',
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '商品入库的数量，不可以小于1,小于1没有入库的意义',
            validate: {
                min: 1
            }
        },
        parameters: {
            type: DataTypes.JSON,
            allowNull: false,
            comment: '商品的参数配置,必填属性,无参数不可',
        },
        imageUrlList: {
            type: DataTypes.JSON,
            allowNull: true,
            field: 'image_url_list',
            comment: '该商品描述土图片对应的列表'
        },
        remark: {
            type: DataTypes.STRING(255),
            allowNull: true,
            comment: '商品备注,用户自行添加,可以为空,但不可以超过200个字符',
            validate: {
                len: [0, 200]
            }
        }
    },
    {
        tableName: 'good_list',
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
    }
);