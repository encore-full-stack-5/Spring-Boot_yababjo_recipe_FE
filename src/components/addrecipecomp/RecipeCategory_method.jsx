import React from "react";

const RecipeCategory_method = () => {
  return (
    <>
      <select
        className="bg-gray-50 mr-5 pr-12 border rounded-md border-gray-300"
        name="method"
        id="method"
        text="방법별"
      >
        <option value>방법별</option>
        <option value>볶음</option>
        <option value>끓이기</option>
        <option value>부침</option>
        <option value>튀김</option>
        <option value>무침</option>
      </select>
    </>
  );
};
export default RecipeCategory_method;
