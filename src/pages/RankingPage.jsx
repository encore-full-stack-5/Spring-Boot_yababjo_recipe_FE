import React from "react";
import Header from "../components/header/Header";

function RankingPage() {
  return (
    <>
      <Header></Header>
      <div>랭킹 페이지</div>

      <p className="text-center text-7xl text-green-500">랭킹</p>
      <div className="h-1 bg-slate-200"></div>
      <p className="text-center text-7xl text-green-500">별점 높은순 TOP 3</p>
      <div>
        <p>"레시피 데이터별점 높은순 데이터" </p>
        <p>key 레시피ID onClick </p>
        <img src="https://via.placeholder.com/200" alt="" />
        <h1 className="text-center text-4xl">레시피.타이틀</h1>
        <h1 className="text-center text-4xl">레시피.작성자"</h1>
        <h2 className="text-center text-2xl">레시피.레이팅</h2>
      </div>
      <div className="h-1 bg-slate-200"></div>
      <p className="text-center text-7xl text-green-500">HOT TOPIC TOP 3</p>
      <div>
        <p>"레시피 데이터tag가 많이 언급된 레시피 데이터" </p>
        <p> key 레시피ID onClick </p>
        <img src="https://via.placeholder.com/200" alt="" />
        <h1 className="text-center text-4xl">레시피.타이틀</h1>
        <h1 className="text-center text-4xl">레시피.작성자</h1>
        <h2 className="text-center text-2xl">레시피.tag</h2>
      </div>
      <p className="text-center text-7xl text-green-500">
        가장 최신 레시피 Top3
      </p>
      <div className="h-1 bg-slate-200"></div>
      <div>
        <p>"레시피 데이터pk 값이 높은순 데이터" </p>
        <p> key 레시피ID onClick </p>
        <img src="https://via.placeholder.com/200" alt="" />
        <h1 className="text-center text-4xl">레시피.타이틀</h1>
        <h1 className="text-center text-4xl">레시피.작성자</h1>
        <h2 className="text-center text-2xl">레시피.작성시간</h2>
      </div>
    </>
  );
}

export default RankingPage;
