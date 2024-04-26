import React, { useEffect, useState } from "react";
import "../Mypage.css";

import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";
import { getRecipesByUserId } from "../api/recipe";
import { getByUserId } from "../api/comment";

const MyPage = () => {
  const [action, setAction] = useState("");
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);
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
  const getComment = async () => {
    try {
      const res = await getByUserId(1);
      setComment(res.data);
    } catch (error) {
      console.error("Error fetching comment data", error);
    }
  };

  const changeAction = (target) => {
    setAction(target);
    if (target === "myrecipe") {
      getData();
    } else if (target === "mycomment") {
      getComment();
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
                            {/* Access nickname from user object */}
                            <p>Food Name: {recipe.foodName}</p>
                            <p>Type ID: {recipe.typeId}</p>
                            <p>Serving Size: {recipe.servingSize}</p>
                            <p>Level: {recipe.level}</p>
                            <p>Cooking Time: {recipe.cookingTime}</p>
                            {/* Render other recipe details as needed */}
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
                    <div className="chef-content-result"></div>
                    <div className="chef-content-input">
                      <h2 className="title">댓글</h2>
                      <div className="recipe-list">
                        {comment.map((comment, index) => (
                          <div className="recipe" key={index}>
                            <h3>{comment.userId}</h3>
                            <p>content: {comment.content}</p>
                            <br></br>
                          </div>
                        ))}
                      </div>
                    </div>
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
