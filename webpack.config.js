const path = require('path')
const webpack = require('webpack')

const config = {
    src: path.resolve(__dirname, 'src/'),
    devSrc: path.resolve(__dirname, 'src/index.dev.js'),
    dist: path.resolve(__dirname, 'dist'),
    filename: 'rsuite-daterangepicker'
}

const common = {
    entry: config.src,
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
    } else if (env.dev) {
        let ret = Object.assign({}, common, {
            entry: config.devSrc,
            devtool: 'source-map',
            externals: {}
        });
        ret.module.rules.push({
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        })
        return ret;
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
