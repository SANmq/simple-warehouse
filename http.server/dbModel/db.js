const {Sequelize} = require('sequelize');
const password = require('./password')

const sequelize = new Sequelize('store', 'root', password, {
    host: 'localhost',
    dialect: 'mysql', /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
    timezone: '+08:00',  //存在时区问题，不加默认时区0：00
});


module.exports = sequelize

// 用于测试连接的函数
async function net() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

net().then()