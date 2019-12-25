import express from 'express';
import path from 'path';

const app = express();

const webpack = require('webpack');
const config = require('../../config/webpack.dev.js');
const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

app.use(webpackDevMiddleware(compiler, config.devServer));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('dist'));

app.listen(1337, () => {
  console.log('Server up');
});
