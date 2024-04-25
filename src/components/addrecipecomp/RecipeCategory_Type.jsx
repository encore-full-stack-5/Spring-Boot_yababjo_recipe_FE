import React from "react";

const RecipeCategory = ({ typeId, setTypeId }) => {
  return (
    <>
      <p className="w-1/5 pb -12 text-xl">카테고리</p>
      <select
        className="bg-gray-50 mr-5 pr-10 border rounded-md border-gray-300"
        value={typeId}
        onChange={(e) => setTypeId(e.target.value)}
      >
        <option value={1}>종류별</option>
        <option value={2}>밑반찬</option>
        <option value={3}>메인반찬</option>
        <option value={4}>국/찌개</option>
        <option value={5}>디저트</option>
      </select>
    </>
  );
};

export default RecipeCategory;
