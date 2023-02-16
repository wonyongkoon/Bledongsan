import React, {useState, useEffect} from 'react'
import "../Style/SignUp.css"
import axios from 'axios'


const SignUp = () => {
    // 유저 입력 값 기억
    const [userId, setUserId] = useState('')    // 유저 아이디
    const [userPassword, setUserPassword] = useState('')    // 유저 비밀번호
    const [userPasswordConfirm, setUserPasswordConfirm] = useState('')    // 유저 비밀번호
    const [userNickName, setUserNickName] = useState('')    // 유저 이름

    // 유효성 검사 
    const [isUserId, setIsUserId] = useState(false) //아이디
    const [ispassword, setIsPassword] = useState(false)  //비밀번호
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)  //비밀번호 확인
    const [isNickName, setIsNickName] = useState(false) //닉네임

    // 유저 입력 값 오류메세지
    const [userIdMessage, setUserIdMessage] = useState('')  //아이디
    const [passwordMessage, setPasswordMessage] = useState('')  //비밀번호
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')  //비밀번호 확인
    const [nickNameMessage, setNickNameMessage] = useState('')  //닉네임
    



    useEffect(() => {
        // 계정 중복 검사
        axios
            .post("http://localhost:8000/user/idDuplicateCheck", {
                user_id : userId,
            })
            .then(function (response) {
                if(response.data === "중복"){
                    setIsUserId(false)
                    setUserIdMessage("이미 가입된 계정입니다.")
                }
                console.log(response.data)
            })
            .catch((Error) => {
                // console.log(Error)

            })
    })

    // 유저 아이디 입력(input) 감지
    const onChangeUserId = (e) => {
        setUserId(e.target.value)
        const checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
        
        if (checkSpc.test(e.target.value)) {
            setIsUserId(false)
            setUserIdMessage('아이디에 특수문자는 넣을 수 없습니다.')
        } else if (e.target.value.length === 0) {
            setIsUserId(false)
        } else if ((e.target.value.length < 5 || e.target.value.length > 15)) {
            setIsUserId(false)
            setUserIdMessage('아이디는 5글자 이상 15글자 미만으로 입력해주세요.')
        } else {
            setIsUserId(true)
            setUserIdMessage('사용가능한 아이디 입니다.')
            setUserId(e.target.value);
        }


    }

    // 유저 비밀번호 입력 감지
    const onChangeUserPassword = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value
        setUserPassword(passwordCurrent)
        if (!passwordRegex.test(e.target.value)) {
            setIsPassword(false)
            setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
        } 
        else {
            setIsPassword(true)
            setPasswordMessage('사용가능한 비밀번호 입니다.')
        }
    }
    
    // 유저 비밀번호 확인 입력 감지
    const onChangeUserPasswordConfirm = (e) => {
        const passwordConfirmCurrent = e.target.value
        setUserPasswordConfirm(passwordConfirmCurrent)
        if (userPassword === passwordConfirmCurrent) {
          setIsPasswordConfirm(true)
          setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요.')
          } 
        else {
          setIsPasswordConfirm(false)
          setPasswordConfirmMessage('비밀번호가 다릅니다.')
        }
    }
    
    // 유저 닉네임 입력 감지
    const onChangeUserNickName = (e) => {
        const checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
        setUserNickName(e.target.value)


        if (checkSpc.test(e.target.value)) {
          setIsNickName(false)
          setNickNameMessage('닉네임에 특수문자는 넣을 수 없습니다.')
        } else if (e.target.value.length === 0) {
          setIsNickName(false)
        } else if (!(e.target.value.length >= 2 || e.target.value.length > 15)) {
          setIsNickName(false)
          setNickNameMessage('닉네임은 2글자 이상 15글자 미만으로 입력해주세요.')
        } else {
          setIsNickName(true)
            setNickNameMessage('사용가능한 닉네임 입니다.')
            setUserNickName(e.target.value);
            
        }
    }

    const onClickSignUp = () =>{
        console.log("회원가입 버튼 눌림")
        axios
            .post("http://localhost:8000/user/signUpUser", {
                // axios.get("http://localhost:8000/user/findall",{
                user_id : userId,
                user_password : userPassword,
                user_name : userNickName,

            })
            .then(function (response) {
                console.log("성공")
                console.log(response.data)
                alert("회원가입에 성공하였습니다.")
                // navigator('/')
            })
            .catch((Error) => {
                console.log("실패")
                alert("회원가입에 실패하였습니다.")
                console.log(Error)
            })

    }



    const test = () => {
        axios
        .get("http://localhost:8000/user/findAllUsers", {
            // axios.get("http://localhost:8000/user/findall",{
        })
        .then(function (response) {
            console.log("성공")
            console.log(response.data)
        })
        .catch((Error) => {
            console.log("실패")
            console.log(Error)
        })
    }


  return (
    <div className='SignUp'>
        <div className='SignUp_Content'>
            <input placeholder="아이디" type="text" onChange={onChangeUserId} ></input>
            {userId.length > 0 && <span className={`SignUp_User_isInput SignUp_User_input_${isUserId ? 'success' : 'error'}`}>{userIdMessage}</span>}
            <input placeholder="비밀번호" type="password" onChange={onChangeUserPassword} ></input>
            {userPassword.length > 0 && <span className={`SignUp_User_isInput SignUp_User_input_${ispassword ? 'success' : 'error'}`}>{passwordMessage}</span>}
            <input placeholder="비밀번호 확인" type="password" onChange={onChangeUserPasswordConfirm} ></input>
            {userPasswordConfirm.length > 0 && <span className={`SignUp_User_isInput SignUp_User_input_${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>}
            <input placeholder="닉네임" type="text" onChange={onChangeUserNickName} ></input>
            {userNickName.length > 0 && <span className={`SignUp_User_isInput SignUp_User_input_${isNickName ? 'success' : 'error'}`}>{nickNameMessage}</span>}
            <div>
                <button className='btn-Shape btn-Size-300' onClick={onClickSignUp}>회원가입</button>
                {/* <button className='btn-Shape btn-Size-300' onClick={test}>테스트</button> */}
            </div>
        </div>

    </div>
  )
}

export default SignUp