const path = require('path')
console.log(path.resolve(__dirname, "../client/dist/"))


module.exports = {
    mode: "development",
    watch: true,
    entry: path.resolve('../client/app.js'),
    output: {
        path: path.resolve(__dirname, "../client/dist/"),
        filename: "bundle.js",
        publicPath: path.resolve(__dirname, "../client/dist/")
    },
    devServer: {
        contentBase: "./",
        overlay: true
    },
    devtool: 'inline-source-map',
    module:{
        rules: [{
            test: /\.s[c|a]ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
        ],
    }
};