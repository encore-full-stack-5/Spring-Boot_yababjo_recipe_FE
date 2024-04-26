import { Button } from "bootstrap";
import React from "react";
import { useState } from "react";
import {
  getRecipesSortedByMethod,
  getRecipesSortedByType,
  getRecipesSortedByCreateAt,
} from "../../api/recipe";

const TypePageNav = ({ setRecipes }) => {
  const [isTableVisible, setTableVisible] = useState(true);
  const toggleTableVisibility = () => {
    setTableVisible(!isTableVisible);
  };
  const handleTypeClick = async (typeId) => {
    const recipes = await getRecipesSortedByType(typeId);
    setRecipes(recipes.data);
  };

  const handleMethodClick = async (methodId) => {
    const recipes = await getRecipesSortedByMethod(methodId);
    console.log(recipes.data);
    setRecipes(recipes.data);
  };

  const handleAllClick = async () => {
    const recipes = await getRecipesSortedByCreateAt();
    setRecipes(recipes.data);
  };

  return (
    <>
      <div className="p-5">
        {isTableVisible && (
          <table className="w-full border border-gray-300">
            <thead className="float-left">
              <tr className="block p-3">
                <th className="text-lime-600 block py-3">종류별</th>
                <th className="text-lime-600 block py-6">방법별</th>
              </tr>
            </thead>
            <tbody className="block overflow-x-hidden whitespace-nowrap">
              <tr className="block px-5 py-3 ">
                <td className="p-3 hover:text-lime-500 cursor-pointer">
                  <button onClick={() => handleAllClick()}>전체</button>
                </td>
                <td className="p-3 hover:text-lime-500 cursor-pointer">
                  <button onClick={() => handleTypeClick(2)}>밑반찬</button>
                </td>
                <td className="p-3 hover:text-lime-500 cursor-pointer">
                  <button onClick={() => handleTypeClick(3)}>메인반찬</button>
                </td>
                <td className="p-3 hover:text-lime-500 cursor-pointer">
                  <button onClick={() => handleTypeClick(4)}>국/찌개</button>
                </td>
                <td className="p-3 hover:text-lime-500 cursor-pointer">
                  <button onClick={() => handleTypeClick(5)}>디저트</button>
                </td>
              </tr>
              <tr className="block px-5 p-3">
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  <button onClick={() => handleAllClick()}>전체</button>
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  <button onClick={() => handleMethodClick(2)}>볶음</button>
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  <button onClick={() => handleMethodClick(3)}>끓이기</button>
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  <button onClick={() => handleMethodClick(4)}>부침</button>
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  <button onClick={() => handleMethodClick(5)}>튀김</button>
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  <button onClick={() => handleMethodClick(6)}>무침</button>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <div className="border-b pb-2">
        <button
          className="text-lime-600 w-full"
          onClick={toggleTableVisibility}
        >
          {isTableVisible ? "카테고리 닫기 ▲" : "카테고리 열기 ▼"}
        </button>
      </div>
    </>
  );
};

export default TypePageNav;
