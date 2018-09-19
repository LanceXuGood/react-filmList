const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
const isDev = ENV !== 'production';
console.log(isDev);
const theme = require('./package.json').theme;

module.exports = {
  entry: [ 'webpack/hot/only-dev-server', 'webpack-dev-server/client?http://0.0.0.0:8000', 'babel-polyfill', path.resolve(__dirname, 'src/index.js')],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.json']
  },
  module: {
    rules: [{
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[hash:8].[name].[ext]',
          }
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.js$|\.js[x]?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['react', ['es2015', {
              'modules': false
            }], 'stage-3'],
            plugins: [
              'react-hot-loader/babel',
              'transform-decorators-legacy',
              'syntax-dynamic-import',
              'transform-class-properties', ['import', {
                libraryName: 'antd-mobile',
                style: true
              }]
            ]
          }
        }, ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
            }
          },
          'sass-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
            }
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: theme
            }
          },
        ],
        include: /node_modules/
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',

            }
          }
        ],
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8000,
    inline: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    compress: true,
    proxy: {
      '/v2': {
        target: 'https://api.douban.com/',
        secure: false,
        changeOrigin: true
      }
    },
  },
  context: __dirname,
  plugins: [
    //  new ExtractTextPlugin({
    //     filename: '[name].[hash:8].css',
    //     allChunks: true,
    //     disable: !isDev,   // Disable css extracting on development
    //     ignoreOrder: true,
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity
    // }),
    new HtmlWebpackPlugin({
      hash: true,
      template: path.resolve(__dirname, './index.html')
    }),
    new webpack.DefinePlugin({
      __DEV__: isDev,
      'process.env': {
        'NODE_ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ],
};
