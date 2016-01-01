var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;


const common = {
  // Entry accepts a path or an object of entries.
  // The build chapter contains an example of the latter.
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      // Set up jsx. This accepts js too thanks to RegExp
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app
      },
      {
        // Test expects a RegExp! Note the slashes!
        test: /\.css$/,
        loaders: ['style', 'css'],
        // Include accepts either a path or an array of paths.
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        // Include accepts either a path or an array of paths.
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'MyEventsApp',
      template: 'node_modules/html-webpack-template/index.html',
      appMountId: 'app'
    })
  ]
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}
