import axios from "axios";
import { getCookie } from "@utils/cookieUtil";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  // 서버 요청 시 쿠키에 토큰이 존재하면 header에 토큰을 추가한다.
  const accessToken = getCookie("accessToken");
  if (accessToken) {
    config.headers["Authorization"] = accessToken;
    config.withCredentials = true;
  }
  return config;
});
