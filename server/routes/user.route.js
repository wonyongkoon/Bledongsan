
const router = require('express').Router();
const controller = require('../controllers/user.controller')


// 주소 : /user/findAllUsers
router.post("./findAllUsers", controller.findAllUsers);


module.exports = router;