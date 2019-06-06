var express = require('express');
var router = express.Router();
var userModel = require('../model/users')
var dataModel = require('../model/userData');

router.post('/', function (req, res, next) {
  const user_name = req.body.user_name;
  if(!user_name){
    res.json({
      code: -2,
      msg: '参数不能为空'
    })
    return;
  }
  userModel.find({user_name}, {_id: 0}).exec(function(err1, doc1){
    if(err1){
      res.json({
        code: -1,
        msg: '查询出错'
      })
      return;
    }
    const user_id = doc1[0].id;
    if(!user_id && typeof user_id !== 'number'){
      res.json({
        code: -1,
        msg: '当前数据中没有id字段'
      })
      return;
    } 

    dataModel.find({ user_id }, { _id: 0 }).sort({order: -1,num: 1}).exec(function(err2, doc2){
      if(doc2.length == 1 || doc2.length == 2){
        res.json({
          code: 0,
          msg: '查询成功',
          data: doc2
        })
      }else{
        res.json({
          code: -3,
          msg: '查询出错，当前无数据'
        })
      }
    })
  })

});

module.exports = router;
