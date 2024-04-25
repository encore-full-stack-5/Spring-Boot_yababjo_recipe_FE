import React from "react";
import { addRecipe } from "../../api/recipe";
import { useState } from "react";

const RecipeFoodName = ({ foodName, setFoodName }) => {
  return (
    <div className="flex pb-9">
      <p className="w-1/5 text-xl">요리명</p>
      <input
        className="pr-20 w-full bg-gray-50 border border-gray-300 rounded-md focus:border-blue-500"
        type="text"
        placeholder="예) 음식명"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
      />
    </div>
  );
};
export default RecipeFoodName;
