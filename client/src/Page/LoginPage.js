import React,{useState} from 'react'
import "../Style/LoginPage.css"
import "../Style/Style.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginPage = () => {
const navigate = useNavigate();
const [userId, setUserId] = useState('')    // 유저 아이디
const [userPassword, setUserPassword] = useState('')    // 유저 비밀번호

  // 유저 아이디 입력(input) 감지
  const onChangeUserId = (e) => {
    setUserId(e.target.value)
  }

  // 유저 비밀번호 입력 감지
  const onChangeUserPassword = (e) => {
    setUserPassword(e.target.value)
  }


// 로그인 버튼 눌렀을때 로그인 실행
const onClick_Login = () =>{
  console.log("로그인 버튼 눌림")
  console.log(userId, userPassword)
  
  axios
      .post("http://localhost:8000/user/userLogin", {
          user_id : userId,
          user_password : userPassword,
      },{withCredentials : true})
      .then(function (response) {
          console.log("로그인 성공")
          // console.log(response.data)
          navigate('/') // 메인화면으로 이동
          
      })
      .catch((Error) => {
          console.log("실패")
          // alert("회원가입에 실패하였습니다.")
          console.log(Error)
      })
}

  return (
    <div className='LoginPage'>
      <div className='LoginPage_Content'>
        {/* <span> BLEDONGSAN </span> */}
        <div className='LoginPage_Content_UserInput'>
          <input placeholder="아이디" type="text" onChange={onChangeUserId}></input>
          <input placeholder="비밀번호" type="password" onChange={onChangeUserPassword}></input>
        </div>
        <button className='btn-Shape btn-Size-300' onClick={onClick_Login}> 로그인 </button>
        <span onClick={()=>{navigate("/signup")}}> 아직 회원이 아니신가요? </span>
      </div>
    </div>
  )
}

export default LoginPage