import React from "react";

const SearchBar = () => {
  return (
    <div className="flex w-full rounded">
      <input type="text" placeholder="레시피입력..." />
      <button
        className="m-2 rounded bg-green-600 px-10 py-2 text-white hover:text-yellow-300"
        type="submit"
      >
        검색
      </button>
    </div>
  );
};
export default SearchBar;
