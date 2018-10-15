const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    inline: true,
    hot: true,
    openPage: '',
    publicPath: '',
    port: 3000,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors:true
  }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});