import React from "react";

const RecipeFoodName = () => {
  return (
    <div className="flex pb-9">
      <p className="w-1/5 text-xl">요리명</p>
      <input
        className="pr-20 w-full bg-gray-50 border border-gray-300 rounded-md focus:border-blue-500"
        type="text"
        placeholder="예) 1줄 소개"
      />
    </div>
  );
};
export default RecipeFoodName;
