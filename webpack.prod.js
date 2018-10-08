const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
    port: 3333
  },
  plugins: [
   new UglifyJSPlugin({
      sourceMap: true
   })
  ]
});