const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rucksack = require('rucksack-css');
const postcssImport = require('postcss-import');

const webpackDev = require('./webpack.config.dev');
const webpackPrd = require('./webpack.config.prd');

const defaultConfig = {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, '../../dist'),
      publicPath: '/'
    },
    context: resolve(__dirname, '../../src'),
    postcss: (webpack) => (
      [
        rucksack({
          autoprefixer: true
        }),
        postcssImport({
          addDependencyTo: webpack
        })
      ]
    ),
    module: {
      preLoaders: [
        { test: /\.js$/,
          loaders: ['eslint'],
          exclude: /node_modules/,
        },
      ],
      loaders: [
        { test: /\.js$/,
          loaders: ['babel'],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'My App',
        template: './index.html',
      }),
    ],
};

module.exports = env => {
  let config = webpackPrd;
  if (env.dev) {
    config =  webpackDev;
  }

  return config(env, defaultConfig);
};