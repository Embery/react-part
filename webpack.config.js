const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'react-library.bundle.js',
    library: 'ReactLibrary',
    libraryTarget: 'var',
  },
  watch: NODE_ENV === 'development',
  watchOptions: {
      ignored: /node_modules/,
      poll: 1000,
  },
  devtool: NODE_ENV === 'development' ? 'source-map' : false,
  resolve: {
    alias: {
      react: 'dummyReact.js',
    },
  },
  externals: {
    react: 'React',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  optimization: { minimizer: [] },
};