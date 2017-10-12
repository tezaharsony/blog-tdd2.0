var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var articleSchema = new Schema({
  title: String,
  content: String
});

// the schema is useless so far
// we need to create a model using it
var articles = mongoose.model('articles', articleSchema);

// make this available to our users in our Node applications
module.exports = articles;
