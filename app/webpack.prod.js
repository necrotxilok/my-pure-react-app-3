
const { merge } = require('webpack-merge')
const common = require('./webpack.config')

rootDir = process.cwd()

module.exports = merge(common, {
  mode: 'production',
})
