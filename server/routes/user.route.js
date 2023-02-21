
const router = require('express').Router();
const {connection} = require('../connect/db.js')
const controller = require('../controllers/user.controller')


// 주소 : /user/findAllUsers
// router.get("./findAllUsers", controller.findAllUsers);
// router.post("./signUpUser", controller.signUpUser);

// 유저 테이블 모두 받기
// router.get('/findAllUsers', function (req, res) {
//     connection.query('SELECT * FROM users', function (err, result) {
//         res.send(result)
//     })
// })

router.get('/findAllUsers', controller.findAllUsers)    // 모든 유저 정보 받기
router.post('/signUpUser', controller.signUpUser)   // 유저 회원가입
router.post('/idDuplicateCheck', controller.idDuplicateCheck)    // 유저 아이디 중복검사
router.post('/userLogin', controller.userLogin)    // 유저로그인


module.exports = router;