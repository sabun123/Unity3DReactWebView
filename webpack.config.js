const path = require('path');
// This plugin is used to minify the HTML file and also inject the bundle
// into the html file (so we don't need to manually type out the script tag and figure out the bundle path)
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules",
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test:/\.png$/,
                use:["url-loader"]
            },
            {
                test:/\.jpg$/,
                use:["file-loader"]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader']
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [ 'url-loader']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [ 'url-loader']
            }
        ]
    },
    plugins: [plugin]
}