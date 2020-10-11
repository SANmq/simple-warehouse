const sequelize = require("./db");
const {DataTypes} = require("sequelize");
module.exports = sequelize.define(
    "Admin",
    {
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            comment: '管理员昵称',
            validate: {
                notNull: true,
                len: [1, 20]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '管理员的密码',
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        power: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '管理员权限级别，值越小权限越高,1为最高级别管理员',
            validate: {
                notNull: true,
                max: 5,
                min: 1,
            }
        }
    },
    {
        tableName: 'admin',
        createdAt: true,
        updatedAt: false,
        deletedAt: false,
        paranoid: false
    }
);