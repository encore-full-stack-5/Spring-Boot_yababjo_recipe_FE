import React from "react";

const RecipeServing = () => {
  return (
    <>
      <p className="w-1/5 pb -12 text-xl">요리정보</p>
      <select
        className="bg-gray-50 mr-5 pr-10 border rounded-md border-gray-300"
        name="cookingserving"
        id="cookingserving"
        text="인원"
      >
        <option value>인원</option>
        <option value={1}>1인분</option>
        <option value={2}>2인분</option>
        <option value={3}>3인분</option>
        <option value={4}>4인분</option>
        <option value={5}>5인분 이상</option>
      </select>
    </>
  );
};

export default RecipeServing;
