const path = require('path');
const appRootDir = require('app-root-dir');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const API_URL = process.env.API_URL ?
  JSON.stringify(process.env.API_URL) :
  JSON.stringify('/api');

const definePlugin = {
  __DEV__: JSON.stringify(true),
  __API__: API_URL,
};

console.log('Environment:', definePlugin);

let plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin(definePlugin),
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
  }),
  new HtmlWebpackPlugin({
    title: 'react-crud-boilerplate',
    // Required
    inject: false,
    template: require('html-webpack-template'),
    // Optional
    appMountId: 'root',
    devServer: process.env.NODE_ENV !== 'production' ?
      'http://localhost:3000' :
      null,
    mobile: true,
  }),
  new ExtractTextPlugin({
    filename: 'styles.css',
    disable: process.env.NODE_ENV !== 'production',
  }),
];

let entry = [
  'react-hot-loader/patch',
  'bootstrap-loader',
  './src/index.jsx',
];

switch (process.env.NODE_ENV) {
  case 'production':
    plugins = [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true,
        },
        compress: {
          screw_ie8: true,
        },
        comments: false,
      }),
    ].concat(plugins);

    entry = [
      'bootstrap-loader/extractStyles',
      './src/index.jsx',
    ];
    break;
  default:
    plugins = [].concat(plugins);
}

module.exports = {
  entry,
  output: {
    filename: 'bundle-[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: process.env.NODE_ENV === 'production'
    ? false : 'inline-source-map',
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      fonts: path.resolve(path.join(appRootDir.get(), 'public', 'fonts')),
    },
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/, /\.jsx?$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'stage-1',
            'react',
          ],
          plugins: [
            'react-hot-loader/babel',
          ],
        },
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|svg|ttf|otf|eot)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(css|scss)?$/,
        loader: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: { // @import all.scss
              resources: `${path.resolve(path.join(appRootDir.get(), 'src', 'commons', 'styles'))}/fonts.scss`,
            },
          },
        ],
      },
    ],
  },
  plugins,
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  node: {
    net: 'mock',
    dns: 'mock',
  },
};
