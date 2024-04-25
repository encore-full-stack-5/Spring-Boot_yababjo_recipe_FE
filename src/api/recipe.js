import { api } from "../config/network";

export const addRecipe = async (data) => {
  const res = await api("/api/v1/recipe/addrecipe", "post", data);
  return res;
};

export const addIngredient = async (data) => {
  const res = await api("/api/v1/ingredient", "post", data);
  return res;
};

export const addCookingOrder = async (data) => {
  const res = await api("/api/v1/order", "post", data);
  return res;
};

export const getrecipeByTypeId = async (typeId) => {
  const res = await api("/api/v1/recipe/type/" + typeId, "get");
  return res;
};

export const getRecipesSortedByCreateAt = async () => {
  const res = await api("/api/v1/recipe/recently", "get");
  return res;
};

export const getRecipesByUserId = async (userId) => {
  const res = await api("/api/v1/recipe/" + userId, "get");
  return res;
};
