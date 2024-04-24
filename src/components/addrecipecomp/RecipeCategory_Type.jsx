import React from "react";
const RecipeCategory = () => {
  return (
    <>
      <p className="w-1/5 pb -12 text-xl">카테고리</p>
      <select
        className="bg-gray-50 mr-5 pr-10 border rounded-md border-gray-300"
        name="type"
        id="type"
        text="종류별"
      >
        <option value>종류별</option>
        <option value>밑반찬</option>
        <option value>메인반찬</option>
        <option value>국/찌개</option>
        <option value>디저트</option>
      </select>
    </>
  );
};

export default RecipeCategory;
