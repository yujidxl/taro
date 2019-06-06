var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/index', { useNewUrlParser: true });
let schame = new mongoose.Schema({
  id: Number,
  user_name: String,
  user_pwd: String
})
let usersModel = mongoose.model('user', schame);

module.exports = usersModel;