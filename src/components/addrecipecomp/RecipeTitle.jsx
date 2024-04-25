import React from "react";

const RecipeTitle = ({ recipeTitle, setRecipeTitle }) => {
  return (
    <div className="flex py-9">
      <p className="w-1/5 text-xl">레시피 제목</p>
      <input
        className="pr-20 w-full bg-gray-50 border border-gray-300 rounded-md focus:border-blue-500"
        type="text"
        placeholder="예) 소고기 미역국 끊이기"
        value={recipeTitle}
        onChange={(e) => setRecipeTitle(e.target.value)}
      />
    </div>
  );
};

export default RecipeTitle;
