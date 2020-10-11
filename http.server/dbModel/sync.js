require('./Admin')
require('./ClassifyList')
require('./GoodList')
require('./OpLog')
require('./Outbound')
require('./Inbound')
require('./SaleManage')
const sequelize = require("./db");
sequelize.sync({alter: true}).then(() => {
    console.log('更新完毕')
});