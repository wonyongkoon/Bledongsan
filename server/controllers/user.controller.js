const {connection} = require('../connect/db.js')
const jwt = require('jsonwebtoken');


// 모든 유저 정보 받기
module.exports.findAllUsers = (req, res) =>{
    try{
        connection.query('SELECT * FROM users', function(err, result){
            res.send(result)
        })
    }
    catch(err){
        console.log(err);
    }
}

// 유저 회원가입
module.exports.signUpUser = (req, res) =>{
    try{
        const user_id = req.body.user_id;   // 유저 아이디
        const user_address = "1234";    // 유저 지갑주소 (임시로 등록)
        connection.query(
            `SELECT * FROM users where user_id = "${user_id}"`,[user_id],
            function(err, result){
                console.log(result)
                if(result.length){
                    //  아이디 중복 체크 
                    //  위의 MySQL 쿼리에서 유저에게 받아온 아이디 값을 DB에서 조회한 후
                    //  같은 값이 있을 경우에는 result에 데이터가 들어가기 때문에 
                    //  length가 1로 되면서 if문이 참으로 성립된다.
                    res.status(400).send("이미 가입된 지갑 주소 입니다.")
                    // 클라이언트에게 중복된 아이디라고 알려줌
                    console.log("중복")
                }
                else{
                    // 중복이 아닐 경우 회원가입 시도
                    connection.query(
                        'INSERT INTO users(user_id, user_password, user_name, user_address) VALUE(?,?,?,?)',
                        [
                            user_id,
                            req.body.user_password,
                            req.body.user_name,
                            user_address,
                        ], function(err, result){
                            if(err)
                                return console.log(err)
                            // res.status(200).json({result: result});
                            res.send("회원가입에 성공하였습니다.")
                            console.log(`${user_id} 회원가입 성공`)
                        })
                }   
            } )

    }
    catch(err){
        console.log(err);
    }
}


// 유저 아이디 중복 검사
module.exports.idDuplicateCheck = (req, res) =>{
    try{
        const user_id = req.body.user_id;   // 유저 아이디
        connection.query(
            `SELECT * FROM users where user_id = "${user_id}"`,[user_id],
            function(err, result){
                console.log(result)
                if(result.length){
                    //  아이디 중복 체크 
                    //  위의 MySQL 쿼리에서 유저에게 받아온 아이디 값을 DB에서 조회한 후
                    //  같은 값이 있을 경우에는 result에 데이터가 들어가기 때문에 
                    //  length가 1로 되면서 if문이 참으로 성립된다.
                    res.send("중복")
                    // status(400).send("이미 가입된 지갑 주소 입니다.")
                    // 클라이언트에게 중복된 아이디라고 알려줌
                    console.log("중복")
                }
                else{
                    res.send("사용가능")
                }
        })
    }
    catch(err){
        console.log(err);
    }
}

// 유저 로그인
module.exports.userLogin = (req, res) =>{
    try{
        const user_id = req.body.user_id;   // 유저 아이디
        const user_password = req.body.user_password;   // 유저 비밀번호
        console.log(user_id, user_password)
        // 입력받은 아이디와 패스워드가 일치하는게 있는지 확인
        connection.query(
            `SELECT * FROM users where user_id = "${user_id}" AND user_password = "${user_password}"`,
            function (err, result) {
                if (err) 
                    return console.log(err);
                if (result.length) {
                    //로그인 성공 시 해당 주소값을 가진 유저의 데이터를 불러옴
                    connection.query(
                        `SELECT id, user_id, user_address, user_name FROM users WHERE user_id = "${user_id}"`,
                        function (err, result) {
                            // JWT에 담을 계정 정보    
                            const payload = {
                                id: result[0].id,
                                user_id: result[0].user_id,
                                user_address: result[0].user_address,
                                user_name: result[0].user_name,
                            }
                            console.log(payload)
                            // // access Token, refresh Token 발급
                            const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
                                expiresIn: '24h',   // 지속시간
                                issuer: 'About tech'
                            });
                            const refreshToken = jwt.sign(payload, process.env.REFRECH_SECRET, {
                                expiresIn: '24h',
                                issuer: 'About tech'
                            });
                            // // 토큰을 쿠키로 전송
                            res.cookie('accessToken', accessToken, {
                                secure: false,
                                httpOnly: true
                            });
                            res.cookie('refreshToken', refreshToken, {
                                secure: false,
                                httpOnly: true
                            });
    
                            res
                                .status(200)
                                .send(payload);
                        }
                    )
                } else {
                    res
                        .status(400)
                        .send("등록된 계정이 없습니다. 회원가입을 진행해 주세요");
                }
            }
        )
    }
    catch(err){
        console.log(err);
    }
}

