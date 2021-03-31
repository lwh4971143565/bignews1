const express =require('express')
const router =express.Router()
const conn =require('../util/sql.js')
const jwt =require('jsonwebtoken')
router.use(express.urlencoded())

//写接口
//注册
router.POST('/api/reguser',(req,res)=>{
    console.log('收到的参数',req.body);
    
})

//登录
router.POST('/api/login',(req,res)=>{
    console.log('收到的参数',req.body);
    
})

