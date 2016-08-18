const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = (env, options) => {
  return Object.assign({}, options, {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        options.entry,
    ],
    devtool: 'inline-source-map',
    devServer: {
      hot: true, //HMR
      historyApiFallback: true, //allow for dynamic routing
      quiet: true, //using webpack-dashboard
      contentBase: '/dist',
      publicPath: '/'
    },
    module: Object.assign({}, options.module, {
      loaders: [
        { test: /\.js$/,
          loaders: ['babel'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          loaders: [
            'style',
            'css-loader?modules',
            'postcss-loader',
          ],
        },
      ]
    }),
    plugins: [
      ...options.plugins,
      new DashboardPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '"development"',
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  });
};
