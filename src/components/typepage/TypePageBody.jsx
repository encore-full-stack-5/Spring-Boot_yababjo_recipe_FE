import React from "react";

// 1줄 당 레시피 4개

const TypePageBody = () => {
  return (
    <div className="p-6">
      <div className="py-3 text-2xl">카테고리 별 레시피 목록</div>
      <ul className="py-3">
        <li className="float-left pr-12 pb-12">
          {/* 사진란 */}
          <div>
            <img src="https://via.placeholder.com/200" alt="" />
          </div>

          {/* 설명란 (제목,작성자닉네임,별점평균,조회수) */}
          <div>
            <div>제목1</div>
            <div>작성자</div>
            <div>별점</div>
          </div>
        </li>
        <li className="float-left pr-12 pb-12">
          <div>
            <img src="https://via.placeholder.com/200" alt="" />
          </div>

          {/* 설명란 (제목,작성자닉네임,별점평균,조회수) */}
          <div>
            <div>제목2</div>
            <div>작성자</div>
            <div>별점</div>
          </div>
        </li>
        <li className="float-left pr-12 pb-12">
          <div>
            <img src="https://via.placeholder.com/200" alt="" />
          </div>

          {/* 설명란 (제목,작성자닉네임,별점평균,조회수) */}
          <div>
            <div>제목3</div>
            <div>작성자</div>
            <div>별점</div>
          </div>
        </li>
        <li className="float-left pr-12 pb-12">
          <div>
            <img src="https://via.placeholder.com/200" alt="" />
          </div>

          {/* 설명란 (제목,작성자닉네임,별점평균,조회수) */}
          <div>
            <div>제목4</div>
            <div>작성자</div>
            <div>별점</div>
          </div>
        </li>
        <li className="float-left pr-12 pb-12">
          <div>
            <img src="https://via.placeholder.com/200" alt="" />
          </div>

          {/* 설명란 (제목,작성자닉네임,별점평균,조회수) */}
          <div>
            <div>제목4</div>
            <div>작성자</div>
            <div>별점</div>
          </div>
        </li>
        <li className="float-left pr-12 pb-12">
          <div>
            <img src="https://via.placeholder.com/200" alt="" />
          </div>

          {/* 설명란 (제목,작성자닉네임,별점평균,조회수) */}
          <div>
            <div>제목4</div>
            <div>작성자</div>
            <div>별점</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TypePageBody;
