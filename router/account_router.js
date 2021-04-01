const express =require('express')
const router =express.Router()
const conn =require('../util/sql.js')
const jwt =require('jsonwebtoken')
router.use(express.urlencoded())

//写接口
// router.get('/my/article/cates',(req,res)=>{
//     console.log('收到的参数',req.body);
    
// })

module.exports = router
