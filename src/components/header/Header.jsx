import React from "react";
import Navigator from "./Navigator";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div>
        <Navigator />
      </div>
    </>
  );
};

export default Header;
