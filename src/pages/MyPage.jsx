import React, { useEffect, useState } from "react";
import "../Mypage.css";

import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";
import { getRecipesByUserId } from "../api/recipe";

const MyPage = () => {
  const [action, setAction] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  const getData = async () => {
    try {
      const response = await getRecipesByUserId(1); // Assuming user ID 1 for now
      setData(response.data); // Set the fetched data to state
    } catch (error) {
      console.error("Error fetching recipe data:", error);
    }
  };

  const changeAction = (target) => {
    setAction(target);
    if (target === "myrecipe") getData();
    else {
    }
  };

  // useEffect(() => {
  //   if (action === "myrecipe") {
  //     // Fetch data only when action is "myrecipe"
  //     getData();
  //   } else {
  //     // Reset recipe data when action is not "myrecipe"
  //     setData([]);
  //   }
  // }, [action]); //
  return (
    <>
      <Header></Header>
      <div className="page-container">
        <div className="content-area">
          <div className="my-tabs">
            <ul className="nav-tabs">
              <li className="nav-tab" onClick={() => changeAction("myrecipe")}>
                레시피
              </li>
              <li onClick={() => changeAction("mycomment")} className="nav-tab">
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
                      {/* <img src="https://recipe1.ezmember.co.kr/img/none_recipe.png"></img> */}
                    </div>
                    <div className="chef-content-input">
                      <h2 className="title">레시피 목록</h2>
                      <div className="recipe-list">
                        {data.map((recipe, index) => (
                          <div className="recipe" key={index}>
                            <h3>{recipe.recipeTitle}</h3>
                            <p>By: {recipe.user.nickname}</p>{" "}
                            <p>Food Name: {recipe.foodName}</p>
                            <p>Type ID: {recipe.typeId}</p>
                            <p>Serving Size: {recipe.servingSize}</p>
                            <p>Level: {recipe.level}</p>
                            <p>Cooking Time: {recipe.cookingTime}</p>
                            <br></br>
                          </div>
                        ))}
                      </div>
                    </div>
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
                      {/* <img src="https://recipe1.ezmember.co.kr/img/none_talk.png"></img> */}
                      <p className="mypage-text1">댓글</p>
                      <br></br>
                      <p className="mypage-text">댓글</p>
                    </div>
                    <div className="chef-content-input"></div>
                  </div>
                </div>
              </form>{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default MyPage;
