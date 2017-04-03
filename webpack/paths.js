const path = require('path');

module.exports = {
  app: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../public'),
  dev: [
    'webpack/hot/only-dev-server'
  ],
  publicPath: '/',
  root: path.join(__dirname, './../'),
  vendor: [ ],
};
