var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: ['babel-polyfill', './index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(s|css)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [require('autoprefixer')]
                            }
                        }
                    },
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'public'),
        host: '0.0.0.0',
        port: 8000
    },
    externals: {
        config: JSON.stringify({
            apiUrl: 'https://api.azintex.com/v1'
        })
    }
}