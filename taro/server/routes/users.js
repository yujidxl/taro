var express = require('express');
var router = express.Router();
var userModel = require('../model/users');

/* GET users listing. */
router.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  const user_name = req.param('user_name');
  const user_pwd = req.param('user_pwd');
  userModel.find({user_name}, {_id: 0}).exec(function(err1, doc1){
    if(err1){
      res.json({
        code: -1,
        msg: err1
      })
      return;
    }
    if(doc1.length === 1){
      userModel.find({ user_name, user_pwd }, { _id: 0 }).exec(function (err2, doc2) {
        if (err2) {
          res.json({
            code: -1,
            msg: err2
          })
          return;
        }
        if (doc2.length === 0) {
          res.json({
            code: 1,
            msg: '密码错误'
          })
        } else if (doc2.length == 1) {
          res.json({
            code: 0,
            msg: 'success',
            data: doc2
          })
        } else {
          res.json({
            code: -3,
            msg: '数据库错误，请尽快修复'
          })
        }
      })
    }else if(doc1.length === 0){
      res.json({
        code: -2,
        msg: '当前账户不存在,请前往注册'
      })
    }else{
      res.json({
        code: -3,
        msg: '数据库错误，请尽快修复'
      })
    }
  });
});

module.exports = router;
