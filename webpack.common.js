const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
],
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production',
      inject: true,
      template: './src/index.html',
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
   rules: [
       {
           test: /\.css$/,
           use: [{
               loader: "style-loader" // creates style nodes from JS strings
           }, {
               loader: "css-loader" // translates CSS into CommonJS
           }]
       },
       {
           test: /\.(png|svg|jpg|gif)$/,
           use: [
               'file-loader'
           ]
       },
       {
           test: /\.js$/,
           exclude: /(node_modules|bower_components)/,
           loader :'babel-loader',
           query: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0', 'react'],
          }
       }
   ]
}
};
