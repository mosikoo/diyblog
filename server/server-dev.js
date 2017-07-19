const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');

const compiler = webpack(config);
const app = express();
const DIST_DIR =  path.join(__dirname, '../dist');
const HTMI_FILE = path.join(DIST_DIR, 'index.html');
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));
app.get('*', function (req, res, next) {
  compiler.outputFileSystem.readFile(HTMI_FILE, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

app.listen(4040, () => {
  console.log('Server now is lintening the \'http: //localhost:4040\'');
});
