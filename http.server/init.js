const express = require('express')
const path = require('path')

app = express()

app.use(require('connect-history-api-fallback')())
app.use(express.static(path.resolve(__dirname, '../dist')))
app.listen(8080, () => {
    console.log('监听服务器已开启')
    console.log('http://localhost:8080')
})