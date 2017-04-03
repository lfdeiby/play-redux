const webpack = require('webpack');
const WebpackConfig = require('webpack-config');

const PATHS = require('./paths.js');
const devServer = PATHS.dev.concat(PATHS.app);

module.exports = new WebpackConfig.Config()
  .extend('./webpack/webpack.base.config.js')
  .merge({
    debug: true,
    devtool: 'inline-source-map',
    entry: {
      app: devServer
    },
    output: {
      pathinfo: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      })
    ],
  });
