const Admin = require('../dbModel/Admin')

async function login(name, password) {
    return Admin.findOne({
        where: {name, password}
    })
}

module.exports = {login}