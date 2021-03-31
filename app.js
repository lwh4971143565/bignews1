//引入 exp 三部曲
const express =require('express')

 const server=express()


//跨域处理
const cors =require('cors')

server.use(cors())


//路由中间件


















 server.listen(3003,()=>{
     console.log('3003号技师为你服务');
     
 })