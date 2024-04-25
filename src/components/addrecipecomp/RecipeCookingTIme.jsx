import React from "react";

const RecipeCookingTime = ({ cookingTime, setCookingTime }) => {
  return (
    <>
      <input
        className="bg-gray-50 w-1/2 border rounded-md border-gray-300 placeholder:text-black"
        type="number"
        placeholder="조리시간(시간단위로 숫자로 입력)"
        min="0"
        value={cookingTime}
        onChange={(e) => setCookingTime(e.target.value)}
      />
    </>
  );
};
export default RecipeCookingTime;
