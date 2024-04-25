import React from "react";
import { addRecipe } from "../../api/recipe";
import { useState } from "react";

const RecipeCategory_method = ({ cookingMethodId, setCookingMethodId }) => {
  return (
    <>
      <select
        className="bg-gray-50 mr-5 pr-12 border rounded-md border-gray-300"
        value={cookingMethodId}
        onChange={(e) => setCookingMethodId(e.target.value)}
      >
        <option value={1}>방법별</option>
        <option value={2}>볶음</option>
        <option value={3}>끓이기</option>
        <option value={4}>부침</option>
        <option value={5}>튀김</option>
        <option value={6}>무침</option>
      </select>
    </>
  );
};
export default RecipeCategory_method;
