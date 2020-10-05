const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.json', '.vue', '.css', '.less'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '&': path.resolve(__dirname, 'src/components')
        }
    },
    stats: {
        colors: true,
        modules: false,
        entrypoints: false,
        children: false,
        builtAt: false
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'assets/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'assets/media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'assets/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            inject: true,
        }),
        new CopyPlugin({
            patterns: [{
                // 将public目录中的所有文件
                from: path.resolve(__dirname, "public"),
                // 复制到 输出目录 的根目录
                to: "./",
                force: false,
                globOptions: {
                    ignore: ['**/index.html'],
                },
            }],
        }),
    ],
}