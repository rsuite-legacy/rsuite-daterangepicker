const path = require('path')
const webpack = require('webpack')

const config = {
    src: path.resolve(__dirname, 'src/'),
    devSrc: path.resolve(__dirname, 'src/index.dev.js'),
    deploySrc: path.resolve(__dirname, 'deploy/app.js'),
    dist: path.resolve(__dirname, 'dist'),
    deploy: path.resolve(__dirname, 'deploy'),
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
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
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

    if (env.dev) {
        return Object.assign({}, common, {
            entry: config.devSrc,
            devtool: 'source-map',
            devServer: {
                contentBase: config.src
            }
        });
    }

    if (env.deploy) {
        return Object.assign({}, common, {
            entry: config.deploySrc,
            output: {
                path: config.deploy,
                filename: 'bundle.js'
            },
            devServer: {
                contentBase: config.deploy
            }
        });
    }

    return Object.assign({}, common, {
        output: {
            library: 'RsuiteDaterangepicker',
            libraryTarget: 'umd',
            path: config.dist,
            filename: config.filename + '.js'
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
    })
}
