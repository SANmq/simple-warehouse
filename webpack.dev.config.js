const {merge} = require('webpack-merge')
const baseConf = require('./webpack.base.config')

const devConf = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }]
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        open: false,
        https: false,
        overlay: {warnings: false, errors: true},
        stats: "minimal",
        historyApiFallback: {
            disableDotRule: true,
            rewrites: [{from: /./, to: '/index.html'}]
        },
    }
}

module.exports = merge(baseConf, devConf)