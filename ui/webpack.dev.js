
const { merge } = require('webpack-merge')
const common = require('./webpack.config')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  //devtool: 'source-map',
  watchOptions: {
    ignored: '**/node_modules',
  }
})
