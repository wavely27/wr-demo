/*
 * @Author: hongbai
 * @Date: 2020-06-03 18:11:10
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-05 17:46:19
 */
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(css)$/,
        exclude: /(global\.css)/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]'
              },
            }
          }
        ]
      },
      {
        test: /(global\.css)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
        ]
      },
    ]
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CleanWebpackPlugin(),
  ]
}