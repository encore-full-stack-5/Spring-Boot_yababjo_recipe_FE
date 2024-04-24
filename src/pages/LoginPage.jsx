import React, { useState } from "react";
import "../LoginSignUp.css";
import user_icon from "../assets/icon/email.png";
import email_icon from "../assets/icon/password.png";
import password_icon from "../assets/icon/person.png";
import { login } from "../api/auth";
const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [message, setMessage] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const nickName = document.getElementById("nickname").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const res = await login({ nickName, password });
    if (res.status === 200) {
      setMessage("로그인 완료");
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
              <img src={email_icon} alt=""></img>
              <input id="nickname" type="text" placeholder="Nickname"></input>
            </div>
            <div className="input">
              <img src={password_icon} alt=""></img>
              <input
                id="password"
                type="password"
                placeholder="Password"
              ></input>
            </div>
            <div />
          </>
        ) : (
          <>
            <div className="input">
              <img src={user_icon} alt=""></img>
              <input id="nickname" type="text" placeholder="Nickname"></input>
            </div>
            <div className="input">
              <img src={email_icon} alt=""></img>
              <input id="email" type="email" placeholder="Email"></input>
            </div>
            <div className="input">
              <img src={password_icon} alt=""></img>
              <input
                id="password"
                type="password"
                placeholder="Password"
              ></input>
            </div>
          </>
        )}
        {/* <div className="input">
          <img src={email_icon} alt=""></img>
          <input type="email" placeholder="Email"></input>
        </div>
        <div className="input">
          <img src={password_icon} alt=""></img>
          <input type="password" placeholder="Password"></input>
        </div> */}
      </div>
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            // setAction("Login");
            handleLogin;
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
