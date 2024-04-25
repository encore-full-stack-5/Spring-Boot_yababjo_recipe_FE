import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="flex w-full rounded ">
      <input className="m-auto" type="text" placeholder="레시피입력..." />
      <button
        className="m-2 rounded  bg-lime-700 px-5 py-2 text-white hover:text-yellow-300"
        type="submit"
        onClick={() => handleNavigate("/searchresult")}
      >
        검색
      </button>
      <button
        className="m-2 rounded  bg-lime-700 px-5 py-2 text-white hover:text-yellow-300"
        type=""
        onClick={() => handleNavigate("/addrecipe")}
      >
        레시피 등록
      </button>
      <button
        className="m-2 rounded  bg-lime-700 px-5 py-2 text-white hover:text-yellow-300"
        type=""
        onClick={() => handleNavigate("/login")}
      >
        로그인
      </button>
      <button
        className="m-2 rounded  bg-lime-700 px-5 py-2 text-white hover:text-yellow-300"
        type=""
        onClick={() => handleNavigate("/mypage")}
      >
        내 페이지
      </button>
    </div>
  );
};
export default SearchBar;
