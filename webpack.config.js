const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin()
  ]
}
