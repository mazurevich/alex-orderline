const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            minify: {
                useShortDoctype: true,
                removeStyleLinkTypeAttributes: true,
                removeScriptTypeAttributes: true,
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
        ]
    },
    devServer: {
        port: 5500,
        open: true
    }
}
