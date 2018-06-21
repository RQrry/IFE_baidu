const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 出口文件 
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'bundle.js',      
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, 'dist')  
    },
    // 模块：例如解读CSS，图片如何转换，压缩
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: /src/,
                exclude: /node_modules/
            }
        ]
    },
    // 插件，用域生产模板和各项功能
    plugins: [
        // 配置HTML模板
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 拆分css文件放到dist目录下的css/index.css
        new ExtractTextWebpackPlugin('css/index.css'),
        new CleanWebpackPlugin('dist'),
        // 热替换，热替换不是刷新
        new webpack.HotModuleReplacementPlugin()
    ],
    // 配置webpack开发服务功能
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        host: 'localhost',
        port: 8081,
        compress: true,
        open: true,
        hot: true
    }
}