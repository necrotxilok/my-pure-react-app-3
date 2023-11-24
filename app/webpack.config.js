
const path = require('path')

rootDir = process.cwd()

module.exports = {
  externals: ['ui'],
  entry: {
    // Themes
    /*
    default: {
      import: path.resolve(__dirname, 'src/themes/default'),
      filename: 'themes/[name].js',
    },
    colorize: {
      import: path.resolve(__dirname, 'src/themes/colorize'),
      filename: 'themes/[name].js',
    },
    */
    // Application
    app: {
      import: path.resolve(__dirname, 'src/index.jsx'),
    },
  },
  output: {
    path: path.resolve(rootDir, 'dist/app'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },  
  resolve: {
    symlinks: false,
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: path.resolve(__dirname, 'src'),
        use: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'src'),
        use: 'file-loader',
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'esbuild-loader',
        options: {
          target: 'es2015'
        }
      },
    ],
  },
  cache: false,
}
