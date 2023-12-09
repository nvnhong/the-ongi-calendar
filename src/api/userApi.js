import { axiosInstance } from "./axiosInstance";
import { setCookie } from "@utils/cookieUtil";

export const signUp = async (userInfo) => {
  const response = await axiosInstance.post("/api/signup", userInfo);

  if (response.status === 200 && response.headers.authorization) {
    const accessToken = response.headers.authorization;
    const maxAge = 60 * 60;
    setCookie("accessToken", accessToken, { path: "/", maxAge });
  }

  return response;
};
