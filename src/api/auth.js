import { api } from "../config/network";

export const signup = async (data) => {
  const res = await api("/api/v1/user/signup", "post", data);
  return res;
};

export const login = async (data) => {
  const res = await api("/api/v1/user/login", "post", data);
  return res;
};
