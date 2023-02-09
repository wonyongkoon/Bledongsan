const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require('cookie-parser');

dotenv.config();            // env 파일 사용
app.use(express.json({limit: '100mb'}));   // express에서 body에 json을 읽어오기 위해 선언
app.use(cookieParser());
app.use(cors({origin:true, credentials: true}));  // 다른 서버와 통신하려면 cors 필요 
app.use(express.urlencoded({limit: '100mb', extended: false}));
const PORT = process.env.PORT;

app.listen(PORT, function(){
    console.log(`${PORT} 서버에 연결되었습니다.`)
    
});

app.use('/user',require('./routes/user.route')) // 유저
