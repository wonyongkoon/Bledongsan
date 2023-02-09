import React, {useState, useEffect} from 'react'
import "../Style/SignUp.css"
import axios from 'axios'


const SignUp = () => {
    const [userId, setUserId] = useState('')    // 유저 아이디
    const [userPassword, setUserPassword] = useState('')    // 유저 비밀번호
    const [userPasswordConfirm, setUserPasswordConfirm] = useState('')    // 유저 비밀번호

    // 유저 아이디 입력(input) 감지
    const onChangeUserId = (e) => {
        setUserId(e.target.value)
    }

    // 유저 비밀번호 입력 감지
    const onChangeUserPassword = (e) => {
        setUserPassword(e.target.value)
    }
    
    // 유저 비밀번호 확인 입력 감지
    const onChangeUserPasswordConfirm = (e) => {
        setUserPasswordConfirm(e.target.value)
    }

    const onClickSignUp = () =>{
        console.log("회원가입 버튼 눌림")

        // axios
        //     .post("http://localhost:8000/user/signup", {
        //         // axios.get("http://localhost:8000/user/findall",{
        //         user_id : userid,
        //         user_password : userpassword,
        //     })
        //     .then(function (response) {
        //         console.log("성공")
        //         console.log(response.data)
        //         navigator('/')
        //     })
        //     .catch((Error) => {
        //         console.log("실패")
        //         console.log(Error)
        //     })

    }



  return (
    <div className='SignUp'>
        <div className='SignUp_Content'>
            <input placeholder="아이디" onChange={onChangeUserId} ></input>
            <input placeholder="비밀번호" onChange={onChangeUserPassword} ></input>
            <input placeholder="비밀번호 확인" onChange={onChangeUserPasswordConfirm} ></input>
            <button className='btn-Shape btn-Size-300' onClick={onClickSignUp}>회원가입</button>
        </div>

    </div>
  )
}

export default SignUp