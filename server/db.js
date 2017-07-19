const mongoose = require('mongoose');
const init = require('./init.json');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  pwd: String
});

const articleSchema = new Schema({
  name: String,
  href: String
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
      
    }
  });
};
