var mongoose = require('mongoose');


// User Schema
var UserSave = mongoose.Schema({
  joke: {
    type:String
  }
});

var User = module.exports = mongoose.model('Search', searchSave);
