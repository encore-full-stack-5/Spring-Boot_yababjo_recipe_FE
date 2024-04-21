import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddRecipePage from "./pages/AddRecipePage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import RankingPage from "./pages/RankingPage";
import SearchResultPage from "./pages/SearchResultPage";
import TypeRecipePage from "./pages/TypeRecipePage";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/searchresult" element={<SearchResultPage />} />
          <Route path="/typerecipe" element={<TypeRecipePage />} />
          <Route path="/addrecipe" element={<AddRecipePage />} />
          <Route path="/recipe" element={<RecipePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
