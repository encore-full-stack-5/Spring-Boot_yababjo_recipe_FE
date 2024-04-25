import React from "react";
import { useState } from "react";

const TypePageNav = () => {
  const [isTableVisible, setTableVisible] = useState(true);
  const toggleTableVisibility = () => {
    setTableVisible(!isTableVisible);
  };
  return (
    <>
      <div className="p-5">
        {isTableVisible && (
          <table className="w-full border border-gray-300">
            <thead className="float-left">
              <tr className="block p-3">
                <th className="text-lime-600 block py-3">종류별</th>
                <th className="text-lime-600 block py-6 ">방법별</th>
              </tr>
            </thead>
            <tbody className="block overflow-x-hidden whitespace-nowrap">
              <tr className="block px-5 py-3 ">
                <td className="p-3 hover:text-lime-500 cursor-pointer">전체</td>
                <td className="p-3 hover:text-lime-500 cursor-pointer">
                  <button>밑반찬</button>
                </td>
                <td className="p-3 hover:text-lime-500 cursor-pointer">
                  <button>메인반찬</button>
                </td>
                <td className="p-3 hover:text-lime-500 cursor-pointer">
                  <button>국/찌개</button>
                </td>
                <td className="p-3 hover:text-lime-500 cursor-pointer">
                  <button>디저트</button>
                </td>
              </tr>
              <tr className="block px-5 p-3">
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  전체
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  <button>볶음</button>
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  <button>끓이기</button>
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  <button>부침</button>
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  <button>튀김</button>
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  <button>무침</button>
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
