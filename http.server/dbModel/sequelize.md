# Sequelize的使用

## 连接mysql数据库
```shell script
npm install sequelize mysql2 --save
```
```javascript
const {Sequelize} = require('sequelize');

// 参数分别为数据库名称、数据库用户名称、数据库用户密码
const sequelize = new Sequelize('database', 'root', 'password', {
    // 数据库地址
    host: '',
    // 数据库类型
    dialect: 'mysql', /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
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
```