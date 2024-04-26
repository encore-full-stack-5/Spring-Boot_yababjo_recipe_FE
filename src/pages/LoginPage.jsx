import React, { useState } from "react";
import "../LoginSignUp.css";
import user_icon from "../assets/icon/email.png";
import email_icon from "../assets/icon/password.png";
import password_icon from "../assets/icon/person.png";
import { login } from "../api/auth";
import { signup } from "../api/auth";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await login({ nickName, password });
      if (res.status === 200) {
        alert("로그인 완료!");
      } else {
        alert("로그인 실패!");
      }
    } catch (error) {
      console.error("로그인 요청 에러:", error);
      alert("로그인 요청 중 오류가 발생했습니다.");
    }
  };

  const handleSignup = async () => {
    // 회원가입 처리 로직 추가
    try {
      const res = await signup({ nickName, email, password });
      if (res.status === 200) {
        alert("회원가입 완료!");
      } else {
        alert("회원가입 실패");
      }
    } catch (error) {
      console.error("회원가입 요청 에러:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className={"container"}>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <>
            <div className="input">
              <img src={password_icon} alt=""></img>
              <input
                type="text"
                placeholder="NickName"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
              ></input>
            </div>
            <div className="input">
              <img src={email_icon} alt=""></img>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </>
        ) : (
          <>
            <div className="input">
              <img src={password_icon} alt=""></img>
              <input
                type="text"
                placeholder="NickName"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
              ></input>
            </div>
            <div className="input">
              <img src={user_icon} alt=""></img>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="input">
              <img src={email_icon} alt=""></img>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </>
        )}
      </div>
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className="submit"
          onClick={action === "Login" ? handleLogin : handleSignup}
        >
          {action}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
