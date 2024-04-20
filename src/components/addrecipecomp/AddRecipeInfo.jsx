import React from "react";

const AddRecipeInfo = () => {
  return (
    <div>
      <div className="p-2"></div>
      <div className="p-4 border border-gray-200 font-bold text-xl bg-zinc-100">
        레시피 등록
      </div>

      <div className="px-10">
        <div className="flex py-9">
          <p className="w-1/5 text-xl">레시피 제목</p>
          <input
            className="pr-20 w-full bg-gray-50 border border-gray-300 rounded-md focus:border-blue-500"
            type="text"
            placeholder="예) 소고기 미역국 끊이기"
          />
        </div>

        <div className="flex pb-9">
          <p className="w-1/5 text-xl">요리명</p>
          <input
            className="pr-20 w-full bg-gray-50 border border-gray-300 rounded-md focus:border-blue-500"
            type="text"
            placeholder="예) 1줄 소개"
          />
        </div>

        <div className="flex pb-9">
          <p className="w-1/5 pb -12 text-xl">카테고리</p>
          <select
            className="bg-gray-50 mr-5 pr-10 border rounded-md border-gray-300"
            name="type"
            id="type"
            text="종류별"
          >
            <option value>종류별</option>
            <option value>밑반찬</option>
            <option value>메인반찬</option>
            <option value>국/찌개</option>
            <option value>디저트</option>
          </select>
          <select
            className="bg-gray-50 mr-5 pr-12 border rounded-md border-gray-300"
            name="method"
            id="method"
            text="방법별"
          >
            <option value>방법별</option>
            <option value>볶음</option>
            <option value>끓이기</option>
            <option value>부침</option>
            <option value>튀김</option>
            <option value>무침</option>
          </select>
        </div>

        <div className="flex pb-9">
          <p className="w-1/5 pb -12 text-xl">요리정보</p>
          <select
            className="bg-gray-50 mr-5 pr-10 border rounded-md border-gray-300"
            name="cookingserving"
            id="cookingserving"
            text="인원"
          >
            <option value>인원</option>
            <option value={1}>1인분</option>
            <option value={2}>2인분</option>
            <option value={3}>3인분</option>
            <option value={4}>4인분</option>
            <option value={5}>5인분 이상</option>
          </select>
          <select
            className="bg-gray-50 mr-5 pr-10 border rounded-md border-gray-300"
            name="difficulty"
            id="difficulty"
            text="난이도"
          >
            <option value>난이도</option>
            <option value={1}>아무나</option>
            <option value={2}>초급</option>
            <option value={3}>중급</option>
            <option value={4}>고급</option>
            <option value={5}>신</option>
          </select>
          <input
            className="bg-gray-50 w-1/2 border rounded-md border-gray-300 placeholder:text-black"
            type="number"
            placeholder="조리시간(시간단위로 숫자로 입력)"
          />
        </div>
      </div>
    </div>
  );
};

export default AddRecipeInfo;
