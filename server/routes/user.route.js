
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

router.get('/findAllUsers', controller.findAllUsers)
router.post('/signUpUser', controller.signUpUser)


module.exports = router;