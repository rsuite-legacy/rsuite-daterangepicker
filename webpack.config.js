const path = require('path')
const webpack = require('webpack')

const config = {
    src: path.resolve(__dirname, 'src/'),
    dist: path.resolve(__dirname, 'dist'),
    filename: 'rsuite-daterangepicker'
}

const common = {
    entry: path.resolve(__dirname, 'src/'),
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        },
        'moment': 'moment',
        'rsuite': 'rsuite'
    }
}

module.exports = (env = {}) => {
    if (env.min) {
        return Object.assign({}, common, {
            output: {
                library: 'RsuiteDaterangepicker',
                libraryTarget: 'umd',
                path: config.dist,
                filename: config.filename + '.min.js'
            },
            plugins: [
                new webpack.optimize.UglifyJsPlugin({
                    comments: false
                })
            ]
        })
    }

    return Object.assign({}, common, {
        output: {
            library: 'RsuiteDaterangepicker',
            libraryTarget: 'umd',
            path: config.dist,
            filename: config.filename + '.js'
        }
    })
}
