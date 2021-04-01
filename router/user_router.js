const express = require('express')
const router = express.Router()
const conn = require('../util/sql.js')
const jwt = require('jsonwebtoken')
router.use(express.urlencoded())

//写接口
//注册
router.post('/regiser', (req, res) => {
  console.log('收到的参数', req.body);

})

//登录
router.post('/login', (req, res) => {
    console.log('收到的参数', req.body);

})

module.exports = router
