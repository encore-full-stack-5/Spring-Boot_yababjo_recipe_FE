import React from "react";

const CookingTip = () => {
  return (
    <>
      <div className="p-10">
        <textarea
          className="w-full p-2 border rounded bg-gray-50"
          placeholder="요리할 때 참고할 내용을 입력하세요"
        ></textarea>
      </div>
    </>
  );
};

export default CookingTip;
