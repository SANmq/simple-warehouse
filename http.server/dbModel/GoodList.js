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
        nickName: {
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
            default: '其他',
            comment: '商品所属的分类,必填属性,没有将被自动分为其他类',
        },
        parameters: {
            type: DataTypes.JSON,
            allowNull: true,
            comment: '商品的参数配置,必填属性,无参数不可',
        },
        imageUrlList: {
            type: DataTypes.JSON,
            allowNull: true,
            field: 'image_url_list',
            comment: '该商品描述土图片对应的列表'
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '该商品暂无描述',
            comment: '商品描述,允许为空,'
        }
    },
    {
        tableName: 'good_list',
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
    }
);