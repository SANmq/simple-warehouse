require('./Admin')
require('./ClassifyList')
require('./GoodList')
require('./OpLog')
require('./GoodManage')
const sequelize = require("./db");
sequelize.sync({alter: true}).then(() => {
    console.log('更新完毕')
});