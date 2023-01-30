
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Page/MainPage';
import Market from './Page/Market';
import LoginPage from './Page/LoginPage';
import MyPage from './Page/MyPage';
import Investment from './Page/Investment';
import Header from './Page/Header';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/market" element={<Market />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/investment" element={<Investment />}></Route>

          {/* 상단에서 찾는 링크가 없을 경우 페이지 출력 */}
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
