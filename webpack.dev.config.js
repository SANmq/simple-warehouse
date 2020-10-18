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
        proxy: {
            // 需要代理的路由
            "/": {
                // 代理到的目标网址
                target: "http://localhost:9527",
                // 该方法用于过滤一些请求,将有关页面的请求绕过代理,
                bypass: function (req, res, proxyOptions) {
                    if (req.headers.accept.indexOf("html") !== -1) {
                        console.log("Skipping proxy for browser request.");
                        return "/index.html";
                    }
                },
                // 重写路由,匹配到的api替换成""
                // pathRewrite: {"^/api": ""}
                // 是否开启跨域
                // changeOrigin: true,
            },
        },
    }
    // watch: true
}

module.exports = merge(baseConf, devConf)