const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        warnings: false,
        parse: {},
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        },
      }
    })
  ]
});