import React, { useState } from "react";
import "../Mypage.css";

import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const [action, setAction] = useState("");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <Header></Header>

      <div className="page-container">
        <div className="content-area">
          <div className="my-tabs">
            <ul className="nav-tabs">
              <li className="nav-tab" onClick={() => setAction("myrecipe")}>
                레시피
              </li>

              <li onClick={() => setAction("mycomment")} className="nav-tab">
                댓글
              </li>
            </ul>
          </div>

          {action === "myrecipe" ? (
            <>
              <form name="mypage-form">
                <div className="chef-content">
                  <div className="chef-content-list">
                    <div className="chef-content-result">
                      <img src="https://recipe1.ezmember.co.kr/img/none_recipe.png"></img>
                    </div>
                    <div className="chef-content-input"></div>
                  </div>
                </div>
              </form>{" "}
            </>
          ) : (
            <>
              <form name="mypage-form">
                <div className="chef-content">
                  <div className="chef-content-list">
                    <div className="chef-content-result">
                      <img src="https://recipe1.ezmember.co.kr/img/none_talk.png"></img>
                      <p className="mypage-text1">댓글</p>
                      <br></br>
                      <p className="mypage-text">댓글</p>
                    </div>
                    <div className="chef-content-input"></div>
                  </div>
                </div>
              </form>{" "}
              */
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyPage;

{
  /* <form name="mypage-form">
            <div className="chef-content">
              <div className="chef-content-list">
                <div className="chef-content-result">
                  <img src="https://recipe1.ezmember.co.kr/img/none_recipe.png"></img>
                  <p className="mypage-text1">레시피를 직접 올려주세요!</p>
                  <br></br>
                  <p className="mypage-text">
                    "자랑하고 싶은 나만의 레시피! 공유하고 싶은 멋진 레시피를
                    올려 주세요."
                  </p>

                  <button
                    type="button"
                    className="content-btn"
                    onClick={() => handleNavigate("/addrecipe")}
                  >
                    레시피 등록하기
                  </button>
                </div>
                <div className="chef-content-input"></div>
              </div>
            </div>
          </form> */
}
