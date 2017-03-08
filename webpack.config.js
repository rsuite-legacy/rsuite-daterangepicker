const path = require('path');
const webpack = require('webpack');

const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const marked = require("marked");
const hl = require('highlight.js');
const renderer = new marked.Renderer();

renderer.code = function (code, lang) {
    lang = lang === 'js' ? 'javascript' : lang;
    if (lang === 'html') {
        lang = 'xml';
    }
    const hlCode = lang ? hl.highlight(lang, code).value : hl.highlightAuto(code).value;
    return `<div class="doc-highlight"><pre><code class="${lang || ''}">${hlCode}</code></pre></div>`;
};

const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});


const common = {
    entry: path.resolve(__dirname, 'src/'),
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, ''),
        publicPath: './assets/'
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'bundle.js',
        publicPath: './'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        extractLess,
        new HtmlwebpackPlugin({
            title: 'RSUITE DateRangePicker',
            filename: 'index.html',
            template: 'docs/index.html',
            inject: true,
            hash: true
        })
    ],
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
                loader: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }, {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: 'markdown-loader',
                        options: {
                            pedantic: true,
                            renderer
                        }
                    }
                ]
            }
        ]
    },
}

module.exports = (env = {}) => {

    if (process.env.NODE_ENV === 'development') {
        return Object.assign({}, common, {
            entry: [
                'react-hot-loader/patch',
                'webpack-dev-server/client?http://127.0.0.1:3100',
                'webpack/hot/only-dev-server',
                path.resolve(__dirname, 'docs/index')
            ],
            devtool: 'source-map'
        });
    }

    if (process.env.NODE_ENV === 'production') {
        return Object.assign({}, common, {
            entry: [
                path.resolve(__dirname, 'docs/index')
            ]
        });
    }
}
