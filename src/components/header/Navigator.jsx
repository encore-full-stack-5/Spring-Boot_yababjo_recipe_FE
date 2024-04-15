import React from "react";

const Navigator = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-x-4 h-13 overflow-visible bg-green-600">
        <ul className="flex flex-wrap text-sm font-medium text-center text-white w-full">
          <li className="flex-1">
            <button className="w-full px-4 py-3 rounded-lg text-2xl  hover:text-yellow-300">
              추천
            </button>
          </li>

          <li className="flex-1">
            <button className="w-full px-4 py-3 rounded-lg text-2xl  dark:hover:text-yellow-300">
              분류
            </button>
          </li>
          <li className="flex-1">
            <button className="w-full px-4 py-3 rounded-lg text-2xl dark:hover:text-yellow-300">
              랭킹
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigator;
