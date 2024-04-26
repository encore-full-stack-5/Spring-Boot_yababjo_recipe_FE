import React from "react";
import { useNavigate } from "react-router-dom";

// 1줄 당 레시피 4개

const TypePageBody = ({ recipes }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="p-6">
      <div className="py-3 text-2xl">카테고리 별 레시피 목록</div>
      <ul className="py-3">
        {Array.isArray(recipes) &&
          recipes.map((recipe) => (
            <li key={recipe.id} className="float-left pr-12 pb-12">
              {/* 사진란 */}
              <div>
                <img
                  src="https://via.placeholder.com/200"
                  alt="recipe.recipeTitle"
                  onClick={() => handleNavigate("/recipe")}
                />
              </div>
              {/* 설명란 (제목,작성자닉네임,별점평균,조회수) */}
              <div>
                <div>{recipe.recipeTitle}</div>
                <div>{recipe.foodName}</div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TypePageBody;
