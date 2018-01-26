const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.dev.js');

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  publicPath: webpackConfig.output.publicPath,
  inline: true,
  disableHostCheck: true,
  host: '0.0.0.0',
  historyApiFallback: true,
  compress: true,
  proxy: {
    'localhost:8000/api': {
      target: 'http://192.168.1.28:3000/api/',
      secure: false,
      changeOrigin: true
    }
  },
});

server.listen(8000, '0.0.0.0', function () {
  console.log('Starting server on http://0.0.0.0:8000');
});
