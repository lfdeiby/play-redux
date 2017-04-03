const webpack = require('webpack');
const WebpackConfig = require('webpack-config');

const autoprefixer = require('autoprefixer');
const precss = require('precss');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = require('./paths.js');

module.exports = new WebpackConfig.Config().merge({
  entry: {
    app: PATHS.app,
    vendor: PATHS.vendor
  },
  output: {
    path: PATHS.build,
    publicPath: PATHS.publicPath,
    filename: 'assets/js/bundle.js'
  },
  resolve: {
    root: [
      __dirname,
    ],
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'babel',
          'webpack-module-hot-accept'
        ]
      }, {
        test: /\.(css)$/,
        loader: ExtractTextPlugin.extract(['css?sourceMap', 'postcss']),
      }, {
        test: /\.(scss)$/,
        loader: ExtractTextPlugin.extract('css?sourceMap&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss!sass')
      }, {
        test: /\.woff(2)?(\?v=[\d\.]+)?(\?[\w\#]+)?$/,
        loader: 'url-loader?limit=5000&minetype=application/font-woff&name=assets/css/fonts/[hash:7].[ext]'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[\d\.]+)?(\?[\w\#]+)?$/,
        loader: 'file-loader?name=assets/css/fonts/[hash:7].[ext]'
      }, {
        test: /\.(png|jpe?g)$/,
        loaders: [
          'file?hash=sha512&digest=hex&name=assets/img/[hash:7].[ext]',
          'image-webpack',
        ]
      }
    ]
  },
  sassLoader: {
    outputStyle: 'compressed',
  },
  postcss: function() {
    return [precss, autoprefixer];
  },
  imageWebpackLoader: {
    pngquant: {
      quality: '65-90',
      speed: 4,
    }
  },
  plugins: [
    new ExtractTextPlugin('assets/css/app.css', { allChunks: true }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'assets/js/vendor.bundle.js'),
    new webpack.NoErrorsPlugin()
  ]
});
