import './App.css';
import { Routes, Route } from "react-router-dom";
import MainLayOut from './layout/MainLayOut';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MypagePage from './pages/MypagePage';
import MenuCategoryPage from './pages/MenuCategoryPage';
import RestaurantPage from './pages/RestaurantPage';
import RestaurantInfoPage from './pages/RestaurantInfoPage';
import RecommendMenuPage from './pages/RecommendMenuPage';
import RecommendMenuResultPage from './pages/RecommendMenuResultPage';

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
        <Route path="/signup" element={<SignUpPage/>} />

        {/* 마이 페이지 */}
        <Route path="/mypage" element={<MypagePage/>} />

        {/* 메뉴 추천 페이지 */}
        <Route path="/menuCategory" element={<MenuCategoryPage/>} />
        <Route path='/restaurants' element={<RestaurantPage/>} />
        <Route path='/menus' element={<RestaurantInfoPage/>} />
        <Route path='/recommendMenu' element={<RecommendMenuPage/>} />
        <Route path='/recommendMenuResult' element={<RecommendMenuResultPage/>} />


      </Route>
    </Routes>
  )
}

export default App;