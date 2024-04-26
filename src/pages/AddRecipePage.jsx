import React, { useEffect } from "react";
import AddRecipeInfo from "../components/addrecipecomp/AddRecipeInfo";
import Header from "../components/header/Header";
import axios from "axios";

const AddRecipePage = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8080/api/v1/comments/recipe/1"
  //       );
  //       if (response.status === 200) {
  //         alert("API 호출 성공!");
  //         console.log(response.data);
  //       } else {
  //         alert("API 호출 실패!");
  //       }
  //     } catch (error) {
  //       console.error("API 호출 중 오류 발생:", error);
  //       alert("API 호출 중 오류 발생!");
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Header />
      <AddRecipeInfo />
    </>
  );
};

export default AddRecipePage;
