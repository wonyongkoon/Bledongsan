const {connection} = require('../connect/db.js')
const mysql = require("mysql");
const jwt = require('jsonwebtoken');

// 모든 유저 정보 받기
const findAllUsers = (req,res) => {
    try{
        connection.query('SELECT * FROM users', function(err, result){
            res.send(result)
        } )
    }
    catch(err){
        console.log(err);
    }
}

// // 유저 테이블 모두 받기
// router.get('/findall', function (req, res) {
//     connection.query('SELECT * FROM users', function (err, result) {
//         res.send(result)
//     })
// })

module.exports={
    findAllUsers,
}