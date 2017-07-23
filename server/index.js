const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');
// client
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');

const compiler = webpack(config);

const db = require('./db');
const api = require('./api');

const app = express();
app.set('port', process.env.port || 4030);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
app.use('/api', api);

app.post('/api/setup', (req, res) => {
  new db.User(req.body)
    .save()
    .then(() => {
      res.status(200).end();
      db.initialized = true;
    }).catch(() => res.status(500).end());
});
// client--webpack-middle
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res, next) => {
  // TODO：换种方法从内存中取html
  const HTMI_FILE = path.resolve(__dirname, '../dist', db.initialized ? 'index.html' : 'login.html');
  compiler.outputFileSystem.readFile(HTMI_FILE, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

app.listen(app.get('port'), () => {
  console.log(`  you are listening the http://127.0.0.1:${app.get('port')}`);
});
