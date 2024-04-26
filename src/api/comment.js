import { api } from "../config/network";

export const getByUserId = async (userId) => {
  const res = await api("/api/v1/comments/user" + userId, "get");
  return res;
};
