import React from 'react'
import "../Style/LoginPage.css"
import "../Style/Style.css"
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {
const navigate = useNavigate();


  return (
    <div className='LoginPage'>
      <div className='LoginPage_Content'>
        {/* <span> BLEDONGSAN </span> */}
        <div className='LoginPage_Content_UserInput'>
          <input placeholder="아이디"></input>
          <input placeholder="비밀번호"></input>
        </div>
        <button className='btn-Shape btn-Size-300'> 로그인 </button>
        <span onClick={()=>{navigate("/signup")}}> 아직 회원이 아니신가요? </span>
      </div>
    </div>
  )
}

export default LoginPage