const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const commom = require('./commom')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(commom, {
    mode:'production',
    output:{
        filename: 'application.js',
        publicPath:'./',
        path: path.resolve('dist'),
        // chunkFileName:'vendor-[id]-[contenthas].js'
    },    
    optimization:{
        minimize:true,
        minimizer:[
            new TerserPlugin({
                terserOptions:{
                    format:{
                        comments:false
                    }
                },
                extractComments: false
            })
        ]
    },
    plugins: [
        new TerserPlugin(),
    ]
})