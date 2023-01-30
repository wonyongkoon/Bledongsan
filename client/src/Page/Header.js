import React from 'react'
import '../Style/Header.css'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


const Header = () => {
    // 반응형 화면 구성
    const isMobile = useMediaQuery({
        query : "(max-width:768px)"
      });
    // Header 네비게이터 선언
    const navigate = useNavigate();


  return (
    <div className='Header'>
        {/* 모바일 화면일때는 아래로 출력 */}
        {isMobile ?
        <p>
            모바일이에요
        </p> :
        // PC 화면일 경우 아래로 출력 
        <div className='header_pc'>
          <div className='header_logo_pc' onClick={()=>{navigate("/")}}>
            BLEDONGSAN
          </div>

          <div className='header_nav_pc'>
            <div onClick={()=>{navigate("/investment")}}> 공시 </div>
            <div onClick={()=>{navigate("/market")}}> 마켓 </div>
            <div onClick={()=>{navigate("/mypage")}}> 마이페이지 </div>
            <div onClick={()=>{navigate("/login")}}> 로그인 </div>
          </div>
        </div> 


      }
    
    </div>
  )
}

export default Header