import { axiosInstance } from "./axiosInstance";
import { setCookie } from "@utils/cookieUtil";
import { removeCookie } from "@utils/cookieUtil";

export const signUp = async (userInfo) => {
  const response = await axiosInstance.post("/api/signup", userInfo);

  if (response.status === 200 && response.headers.authorization) {
    const accessToken = response.headers.authorization;
    const maxAge = 60 * 60;
    setCookie("accessToken", accessToken, { path: "/", maxAge });
  }
  return response;
};

export const logout = () => {
  removeCookie("accessToken");
  window.location.href = "/";
};

export const getUserInfo = async () => {
  const response = await axiosInstance.get("/api/user");
  return response.data;
};

export const getUserPost = async () => {
  const response = await axiosInstance.get(`/api/year-end/user-memo`);
  return response.data;
};
