const path = require('path')

module.exports = (env = {}) => {
  return {
    entry: [
      path.resolve(__dirname, 'src/')
    ],
    output: {
      library: 'RsuiteDaterangepicker',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist'),
      filename: 'rsuite-daterangepicker.js'
    },
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
      'rsuite': 'rsuite'
    }
  }
}
