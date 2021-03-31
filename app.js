//引入 exp 三部曲
const express =require('express')

 const server=express()
 const jwt = require('express-jwt');


//跨域处理
const cors =require('cors')
server.use(cors())
//静态托管
server.use('/uploads',express.static('uploads'))

// jwt() 用于解析token，并将 token 中保存的数据 赋值给 req.user
// unless() 约定某个接口不需要身份认证
server.use(jwt({
    secret: 'bignews1', // 生成token时的 钥匙，必须统一
    algorithms: ['HS256'] // 必填，加密算法，无需了解
  }).unless({
    path: ['/user/login', '/user/register', /^\/uploads\/.*/] // 除了这两个接口，其他都需要认证
  }));
//路由中间件
const categoriesRouter = require('./router/categories_router.js')
const userRouter = require('./router/user_router.js')
server.use('/categories', heroRouter)
server.use('/user', userRouter)


// 错误处理中间件
server.use((err, req, res, next) => {
    console.log('有错误', err)
    if (err.name === 'UnauthorizedError') {
      // res.status(401).send('invalid token...');
      res.status(401).send({ code: 1, message: '身份认证失败！' });
    }
  });














 server.listen(3003,()=>{
     console.log('3003号技师为你服务');
     
 })