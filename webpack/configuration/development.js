const { merge } = require('webpack-merge')
const commom = require('./commom')

module.exports = merge(commom,{
    mode: 'development',
    devtool: 'inline-source-map',
    output:{
        publicPath:'/'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        // contentBase: './src',
        // watchContentBase: true,
        // inline:true
    }
})