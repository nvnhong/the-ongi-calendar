import { axiosInstance } from "./axiosInstance";

export const postUpload = async (data) => {
  const response = await axiosInstance.post("/api/year-end", data);
  return response;
};
