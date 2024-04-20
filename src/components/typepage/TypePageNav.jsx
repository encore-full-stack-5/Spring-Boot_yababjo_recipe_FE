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
                  밑반찬
                </td>
                <td className="p-3 hover:text-lime-500 cursor-pointer">
                  메인반찬
                </td>
                <td className="p-3 hover:text-lime-500 cursor-pointer">
                  국/찌개
                </td>
                <td className="p-3 hover:text-lime-500 cursor-pointer">
                  디저트
                </td>
              </tr>
              <tr className="block px-5 p-3">
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  전체
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  볶음
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  끊이기
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  부침
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  튀김
                </td>
                <td className="px-3 hover:text-lime-500 cursor-pointer">
                  무침
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
