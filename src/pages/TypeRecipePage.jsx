import React, { useState } from "react";
import Header from "../components/header/Header";
import TypePageBody from "../components/typepage/TypePageBody";
import TypePageNav from "../components/typepage/TypePageNav";

function TypeRecipePage() {
  const [recipes, setRecipes] = useState([]);

  // 분류 페이지
  // 종류별, 방법별
  return (
    <>
      <Header />
      <TypePageNav setRecipes={setRecipes} />
      <TypePageBody recipes={recipes} />
    </>
  );
}

export default TypeRecipePage;
