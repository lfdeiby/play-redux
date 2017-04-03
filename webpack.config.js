const WebpackConfig = require('webpack-config');

const TARGET = process.env.npm_lifecycle_event

var webpackConfig;

switch (TARGET) {
  case 'start':
    webpackConfig = './webpack/webpack.dev.config.js';
    break;
  case 'build':
    webpackConfig = './webpack/webpack.prod.config.js';
    break;
}

module.exports = new WebpackConfig.Config().extend(webpackConfig);
