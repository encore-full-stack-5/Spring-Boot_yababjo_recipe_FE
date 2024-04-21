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

const AddRecipeInfo = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div>
      <div className="p-2"></div>
      <div className="p-4 border border-gray-200 font-bold text-xl bg-zinc-100">
        레시피 등록
      </div>

      <div className="px-10">
        <RecipeTitle />
        <RecipeFoodName />

        <div className="flex pb-9">
          <RecipeCategory_Type />
          <RecipeCategory_method />
        </div>

        <div className="flex pb-9">
          <RecipeServing />
          <RecipeDifficulty />
          <RecipeCookingTime />
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
        <CookingOrders />
      </div>

      <div className="p-4 border border-gray-200 font-bold text-xl bg-zinc-100">
        요리 팁
      </div>
      <div>
        <CookingTip />
      </div>

      <div className="p-4 border border-gray-200 font-bold text-xl bg-zinc-100">
        태그
      </div>
      <div>
        <TagInput />
      </div>

      <div className="p-4 border border-gray-200 font-bold text-xl bg-zinc-100">
        <button>저장</button>
        <button className="pl-10" onClick={() => handleNavigate("/")}>
          취소
        </button>
      </div>
    </div>
  );
};

export default AddRecipeInfo;
