import React from "react";
import "../Mypage.css";

import Header from "../components/header/Header";

function MyPage() {
  return (
    <>
      <Header></Header>

      <div className="page-container">
        <div className="content-area">
          <div className="my-tabs">
            <ul className="nav-tabs">
              <li className="nav-tab">레시피</li>
              <li className="nav-tab">요리후기</li>
              <li className="nav-tab">댓글</li>
              <li className="nav-tab">스토리</li>
              <li className="nav-tab">쇼핑후기</li>
            </ul>
          </div>
          <form name="mypage-form">
            <div className="chef-content">
              <ul className="chef-content-nav-tab">
                <li>
                  <a>공개중</a>
                </li>
                <li>
                  <a>작성중</a>
                </li>
              </ul>
              <div className="chef-content-list">
                <div className="chef-content-result">
                  <img src="https://recipe1.ezmember.co.kr/img/none_recipe.png"></img>
                  <p>레시피를 직접 올려주세요!</p>
                  <br></br>
                  "자랑하고 싶은 나만의 레시피! 공유하고 싶은 멋진 레시피를 올려
                  주세요."
                  <button type="button" className="content-btn">
                    레시피 등록하기
                  </button>
                </div>
                <div className="chef-content-input"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MyPage;
