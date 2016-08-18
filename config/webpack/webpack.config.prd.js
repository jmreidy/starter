const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, options) => {
  return Object.assign({}, options, {
    devtool: 'source-map',
    module: Object.assign({}, options.module, {
      loaders: [
        { test: /\.js$/,
          loaders: ['babel'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: [
              'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
              'postcss-loader',
            ],
          }),
        },
      ]
    }),
    plugins: [
      ...options.plugins,
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '"production"',
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false
        },
        mangle: {
          screw_ie8: true
        },
        output: {
          comments: false,
          screw_ie8: true
        }
      }),
      new ExtractTextPlugin('style.css'),
    ],
  });
};

