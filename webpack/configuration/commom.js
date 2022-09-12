const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports  = {
    entry: './src/index.tsx',
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: "ts-loader"
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.less/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions:{
                                javascriptEnabled:true
                            }
                        }
                    }
                ]
            },
            {
                test:/\.(png|jpg|jpeg|svg)$/,
                use:[
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                type:'asset/resource'
            },
            {
                test:/\.scss$/i,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },    
    plugins: [
        new HtmlWebpackPlugin({
            title:'Afiliados Admin',
            template: './webpack/template/index.ejs',
            inject: 'head'
        })
    ]    
}