import { api } from "../config/network";

export const addrecipe = async (data) => {
  const res = await api("/api/vi/recipe/addrecipe", "post", data);
  return res;
};

export const getrecipeByTypeId = async (typeId) => {
  const res = await api("/api/vi/recipe/type/" + typeId, "get");
  return res;
};
