const Admin = require('./Admin')
require('./ClassifyList')
require('./GoodList')
require('./OpLog')
require('./GoodManage')
const sequelize = require("./db");
sequelize.sync({alter: true}).then(async () => {
    console.log('更新完毕')
    const admin = await Admin.findByPk('admin')
    if (admin) {
        console.log('已有admin用户无需创建')
    } else {
        await Admin.create({name: 'admin', password: '000000', power: 1})
    }
});