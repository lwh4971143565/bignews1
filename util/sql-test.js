
const conn = require('./sql.js')

// conn.query(SQL语句，(错误，结果)=>{})

// 查询出全部的英雄
// SQL语句
conn.query('select * from bignews1', (err, result) => {
    console.log(err)
    console.log(result)
})