import React from "react";
import { useNavigate } from "react-router-dom";

const Navigator = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="flex flex-row items-center gap-x-4 h-13 overflow-visible bg-lime-600">
        <ul className="flex flex-wrap text-center text-white w-full">
          <li className="flex-1">
            <button
              className="w-full px-4 py-3 rounded-lg text-2xl  hover:text-yellow-300"
              onClick={() => handleNavigate("/")}
            >
              추천
            </button>
          </li>
          <li className="flex-1">
            <button
              className="w-full px-4 py-3 rounded-lg text-2xl  hover:text-yellow-300"
              onClick={() => handleNavigate("/typerecipe")}
            >
              분류
            </button>
          </li>
          <li className="flex-1">
            <button
              className="w-full px-4 py-3 rounded-lg text-2xl hover:text-yellow-300"
              onClick={() => handleNavigate("/ranking")}
            >
              랭킹
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigator;
