const mongoose = require('mongoose');
const init = require('./init');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/myblog', {
  useMongoClient: true
});

const db = mongoose.connection;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  pwd: String
});

const articleSchema = new Schema({
  content: String,
  date: Number,
  title: String
});

const linkSchema = new Schema({
  name: String,
  href: String
});

const Models = {
  User: mongoose.model('User', userSchema),
  Article: mongoose.model('Article', articleSchema),
  Link: mongoose.model('Link', linkSchema),
  initialized: false
};


const initialize = function() {
  Models.User.find(null, (err, doc) => {
    if (err) {
      console.log(err);
    } else if (!doc.length) {
      console.log('  DataBase opens for the first time...\n');
      Promise.all(init.map(item => new Models[item.type](item).save()))
        .then(() => {
          console.log('  init successfully');
        }).catch((error) => {
          console.log(error);
        });
    } else {
      Models.initialized = true;
    }
  });
};

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('  connection successfully\n');
  initialize();
});

module.exports = Models;
