import './App.css';
import { Routes, Route } from "react-router-dom";
import MainLayOut from './layout/MainLayOut';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MenuCategoryPage from './pages/MenuCategoryPage';
import LevelInfoPage from './pages/LevelInfoPage';
import BoardPage from './pages/BoardPage';
import BoardMorePage from './pages/BoardMorePage';
import BoardWritePage from './pages/BoardWritePage';

function App() {
  return (
    <Routes>
      {/* 메인 레이아웃 적용 */}
      <Route element={<MainLayOut/>}>
        
        {/* 메인 페이지 */}
        <Route path="/" element={<MainPage/>} />
        
        {/* 로그인 페이지 */}
        <Route path="/login" element={<LoginPage/>} />

        {/* 회원가입 페이지 */}
        <Route path="/signup" element={<LoginPage/>} />

        {/* 숙련도 페이지 */}
        <Route path="/menuCategory" element={<MenuCategoryPage/>} />
        <Route path='/levelInfo' element={<LevelInfoPage/>} />

        {/* 게시판 페이지 */}
        <Route path="/board" element={<BoardPage/>} />
        <Route path="/boardmore" element={<BoardMorePage />} />
        <Route path="/boardwrite" element={<BoardWritePage/>} />

        {/* 마이 페이지 */}
        <Route path="/mypage" element={<MainPage/>} />

      </Route>
    </Routes>
  )
}

export default App;