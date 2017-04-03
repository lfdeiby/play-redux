const webpack = require('webpack');
const WebpackConfig = require('webpack-config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = require('./paths.js');

module.exports = new WebpackConfig.Config()
  .extend('./webpack/webpack.base.config.js')
  .merge({
    plugins: [
      new CleanWebpackPlugin([PATHS.build], {
        root: PATHS.root,
        verbose: true,
        dry: false,
        exclude: ['index.html']
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        debug: false,
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin(true)
    ]
  });
