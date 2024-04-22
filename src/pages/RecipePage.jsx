import React, { useState } from "react";
import Header from "../components/header/Header";

function RecipePage() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header></Header>

      <div className="p-2"></div>
      <div className="p-10 text-center">
        <div>
          <img
            className="m-auto"
            src="https://via.placeholder.com/400"
            alt=""
          />
        </div>
        <div className="">작성자명</div>
        <div className="">레시피명</div>
        <div className="">조리 팁</div>
        <div className="flex m-auto">
          <div className="pr-10">몇 인분 </div>
          <div className="pr-10">조리 시간 </div>
          <div className="pr-10">난이도 </div>
        </div>
      </div>

      <div className="px-10">
        <p className="w-1/5 pt-12 text-xl">재료 정보</p>
        <div className="flex p-2">
          <p className="pr-10">재료</p>
          <p>소스</p>
        </div>
      </div>

      <div className="px-10">
        <p className="w-1/5 pt-12 text-xl">조리 순서</p>
        <div>1</div>
        <div>2</div>
      </div>

      <div className="px-10">
        <p className="w-1/5 pt-12 text-xl">후기</p>
        <div>1(유저이름,생성날짜,별점,내용)</div>
        <div>2(유저이름,생성날짜,별점,내용)</div>
      </div>

      <div className="px-10">
        <p className="w-1/5 pt-12 pb-2 text-xl">댓글</p>
        <form onSubmit={handleSubmit} className="flex w-full pb-10">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="댓글 남기기"
            className="flex-grow p-4 border-2 border-r-0 border-gray-300"
          />
          <button
            type="submit"
            className="bg-gray-300 p-4 border-2 border-gray-300"
          >
            확인
          </button>
        </form>
      </div>
    </>
  );
}

export default RecipePage;
