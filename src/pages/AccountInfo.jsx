import React from "react";
import "../AccountInfo.css";
function AccountInfo() {
  return (
    <>
      <div className="mng-account-nav">
        <img src="https://recipe1.ezmember.co.kr/img/logo3.png"></img>
      </div>
      <h2 className="account-page-title">회원정보 수정</h2>
      <div className="mng-account-container m-auto">
        <div className="mng-account-edit-box">
          <p className="mng-account-edit-option">
            {" "}
            이메일 수정{" "}
            <button className="mng-account-edit-button">수정</button>
          </p>
          <div className="box-line"></div>
          <p className="mng-account-edit-option">
            {" "}
            닉네임 수정{" "}
            <button className="mng-account-edit-button">수정</button>
          </p>
          <div className="box-line"></div>
          <p className="mng-account-edit-option">
            {" "}
            회원탈퇴 <button className="mng-account-edit-button">탈퇴</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default AccountInfo;
