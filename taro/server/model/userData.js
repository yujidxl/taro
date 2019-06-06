var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/index', {useNewUrlParser: true});

let schame = new mongoose.Schema({
  user_id: Number,
  user_name: String,
  order: Number,
  num: Number,
  userData: [{
    shop_name: String,
    shop_tag: String
  }],
});

let dataModel = mongoose.model('data', schame);

module.exports = dataModel;