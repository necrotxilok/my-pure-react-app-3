
const { merge } = require('webpack-merge')
const common = require('./webpack.config')
const path = require('path')

rootDir = process.cwd()

const package = require(path.resolve(rootDir, 'package'))

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  //devtool: 'source-map',
  output: {
    publicPath: '/app/',
  },
  watchOptions: {
    ignored: '**/node_modules',
  },
  devServer: {
    static: {
      directory: path.resolve(rootDir, 'public'),
    },
    compress: true,
    open: false,
    port: package.config.port || 9000,
  },
})
