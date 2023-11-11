
const path = require('path')

rootDir = process.cwd()

module.exports = {
  entry: {
    // Vendor
    vendor: ['react', 'react-dom'],
    // UI Components
    ui: {
      import: path.resolve(__dirname, 'src/index.js'),
      //dependOn: 'vendor',
    },
  },
  output: {
    path: path.resolve(rootDir, 'public/app/libs'),
    filename: '[name].js',
    libraryTarget: "umd",
    library: "ui",
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
