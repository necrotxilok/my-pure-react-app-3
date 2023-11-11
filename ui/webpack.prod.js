
const { merge } = require('webpack-merge')
const common = require('./webpack.config')
const path = require('path')

rootDir = process.cwd()

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(rootDir, 'dist/app/libs'),
    filename: '[name].js',
  },  
})
