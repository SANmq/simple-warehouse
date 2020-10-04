const {merge} = require('webpack-merge')
const baseConf = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const prodConf = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        })
    ]
}
module.exports = merge(baseConf, prodConf)