var express = require('express');
var router = express.Router();
var userModel = require('../model/users');

router.post('/', function(req, res, next) {
  const user_name = req.body.user_name;
  const user_pwd = req.body.user_pwd;
  if(!user_name || !user_pwd){
    res.json({
      code: -2,
      msg: '参数不能为空',
    })
  }
  userModel.find({user_name}).exec(async function(err1, doc1){
    if(err1){
      res.json({
        code: -1,
        msg: err1
      })
      return;
    }
    if(doc1.length === 1){
      res.json({
        code: 1,
        msg: '已存在的账户，请更换账户名'
      })
    }else if(doc1.length === 0){
      userModel.insertMany([{id: 12, user_name: user_name, user_pwd: user_pwd}]).then((doc2) => {
          if (doc2.length === 1) {
            res.json({
              code: 0,
              msg: '注册成功，自动登录中',
              data: doc2
            })
          } else {
            res.json({
              code: 2,
              msg: '注册失败,请联系注册商检查问题'
            })
          }
        }
      ).catch( err2 => {
        if (err2) {
          res.json({
            code: -1,
            msg: err2
          })
        }
      })
    }else{
      res.json({
        code: -3,
        msg: '数据库错误，请尽快修复'
      })
    }
  })
  
});

module.exports = router;
