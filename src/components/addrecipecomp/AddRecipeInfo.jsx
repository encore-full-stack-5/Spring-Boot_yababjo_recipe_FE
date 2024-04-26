import React from "react";
import RecipeCategory_method from "./RecipeCategory_method";
import RecipeCategory_Type from "./RecipeCategory_Type";
import RecipeCookingTime from "./RecipeCookingTIme";
import RecipeDifficulty from "./RecipeDifficulty";
import RecipeFoodName from "./RecipeFoodName";
import RecipeServing from "./RecipeServing";
import RecipeTitle from "./RecipeTitle";
import CookingTip from "./recipe_cookingtip/Cookingtip";
import IngredientsAdd from "./recipe_ingredients/IngredientsAdd";
import SauceAdd from "./recipe_ingredients/SauceAdd";
import CookingOrders from "./recipe_orders/CookingOrders";
import TagInput from "./recipe_Tag/TagInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addCookingOrder, addIngredient, addRecipe } from "../../api/recipe";

const AddRecipeInfo = () => {
  // 레시피 기본 정보
  const [recipeTitle, setRecipeTitle] = useState(null);
  const [foodName, setFoodName] = useState(null);
  const [cookingMethodId, setCookingMethodId] = useState(1);
  const [typeId, setTypeId] = useState(1);
  const [servingSize, setServingSize] = useState(0);
  const [level, setLevel] = useState(0);
  const [cookingTime, setCookingTime] = useState(0);
  const [cookingTip, setCookingTip] = useState("");

  // 레시피 조리 순서
  const [cookingSteps, setCookingSteps] = useState([
    { id: Date.now(), description: "" },
  ]); // 조리 순서를 관리할 상태
  const [order, setOrder] = useState(1);
  const [instruction, setInstruction] = useState("");
  const [recipeId, setRecipeId] = useState(null);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const addRecipeHandler = async () => {
    try {
      const res = await addRecipe({
        recipeTitle,
        foodName,
        cookingMethodId,
        typeId,
        servingSize,
        level,
        cookingTime,
        cookingTip,
        userId: 1,
      });
      if (res.status === 200) {
        const recipeId = res.data.id;
        console.log(recipeId);
        // await addCookingOrderHandler(recipeId); // 조리 순서로 넘어감
        alert("레시피 등록 성공!");
        handleNavigate("/");
      } else {
        alert("레시피 등록 실패...");
      }
    } catch (error) {
      console.error("레시피 등록 오류", error);
      alert("레시피 등록 실패.. 빈 칸이 있는지 확인하세요");
    }
  };
  // const addCookingOrderHandler = async (recipeId, cookingSteps) => {
  //   for (const step of cookingSteps) {
  //     const order = cookingSteps.indexOf(step);
  //     await addCookingOrder({
  //       recipeId,
  //       order,
  //       instruction: step.description,
  //     });
  //   }
  // };
  const addCookingOrderHandler = async (recipeId) => {
    try {
      const orders = await addCookingOrder({
        order,
        instruction,
        recipeId,
      });
      if (orders.status === 200) {
        alert("조리 순서 등록 성공!");
      } else {
        alert("조리 순서 등록 실패...");
      }
    } catch (error) {
      console.error("조리 순서 등록 오류", error);
      alert("조리순서 등록 실패.. 빈 칸이 있는지 확인하세요");
    }
  };

  const saveClickButton = () => {
    addRecipeHandler();
    if (addRecipeHandler) addCookingOrderHandler();
  };

  return (
    <div>
      <div className="p-2"></div>
      <div className="p-4 border border-gray-200 font-bold text-xl bg-zinc-100">
        레시피 등록
      </div>

      <div className="px-10">
        <RecipeTitle
          recipeTitle={recipeTitle}
          setRecipeTitle={setRecipeTitle}
        />
        <RecipeFoodName foodName={foodName} setFoodName={setFoodName} />

        <div className="flex pb-9">
          <RecipeCategory_Type typeId={typeId} setTypeId={setTypeId} />
          <RecipeCategory_method
            cookingMethodId={cookingMethodId}
            setCookingMethodId={setCookingMethodId}
          />
        </div>

        <div className="flex pb-9">
          <RecipeServing
            servingSize={servingSize}
            setServingSize={setServingSize}
          />
          <RecipeDifficulty level={level} setLevel={setLevel} />
          <RecipeCookingTime
            cookingTime={cookingTime}
            setCookingTime={setCookingTime}
          />
        </div>
        <div className="p-2"></div>
      </div>

      <div className="p-5 border border-gray-200 font-bold text-xl bg-zinc-100">
        재료 정보
      </div>
      <div>
        <IngredientsAdd />
        <SauceAdd />
      </div>

      <div className="p-4 border border-gray-200 font-bold text-xl bg-zinc-100">
        조리 순서
      </div>
      <div>
        {/* 에러 발생 부분 */}
        <CookingOrders
          cookingSteps={cookingSteps}
          setCookingSteps={setCookingSteps}
          order={order}
          setOrder={setOrder}
          instruction={instruction}
          setInstruction={setInstruction}
        />
      </div>

      <div className="p-4 border border-gray-200 font-bold text-xl bg-zinc-100">
        요리 팁
      </div>
      <div>
        <CookingTip cookingTip={cookingTip} setCookingTip={setCookingTip} />
      </div>

      <div className="p-4 border border-gray-200 font-bold text-xl bg-zinc-100">
        태그
      </div>
      <div>
        <TagInput />
      </div>

      <div className="p-4 border border-gray-200 font-bold text-xl bg-lime-100">
        <button className="pl-10" onClick={saveClickButton}>
          저장
        </button>
        <button className="pl-20" onClick={() => handleNavigate("/")}>
          취소
        </button>
      </div>
    </div>
  );
};

export default AddRecipeInfo;
