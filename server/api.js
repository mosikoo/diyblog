const express = require('express');
const db = require('./db');

const router = express.Router();

router.get('/getArticle', (req, res) => {
  // const _id = req.query.id;
  const title = req.query.title;
  db.Article.findOne({ title }, (err, doc) => {
    if (err) {
      console.log(err);
    } else if (doc) {
      res.send(doc);
    }
  });
});

router.post('/login', (req, res) => {
  const { name, pwd } = req.body;
  db.User.findOne({ name }, 'pwd', (err, doc) => {
    if (err) {
      console.log(err);
    } else if (!doc) {
      res.send({ state: 0, msg: 'the account is not existent' });
    } else if (doc.pwd === pwd) {
      res.send({ state: 1, msg: 'login successfully' });
    } else if (doc.pwd !== pwd) {
      res.send({ state: 2, msg: '密码错误' });
    } else {
      res.send({ state: 3, msg: '未知错误' });
    }
  });
});

module.exports = router;

