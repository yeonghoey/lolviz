const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'production',

  entry: './src/main.js',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
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
