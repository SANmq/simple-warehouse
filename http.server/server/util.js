module.exports.handleMultiTableSearch = function (x, table) {
    return x.map(value => {
        let temp = {}
        const r = value.toJSON()
        for (let k of Object.keys(r)) {
            if (k === table) {
                temp = {...temp, ...r[k]}
            } else {
                temp[k] = r[k]
            }
        }
        return temp
    })
}