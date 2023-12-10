import { axiosInstance } from "./axiosInstance";

export const postUpload = async (data) => {
  const response = await axiosInstance.post("/api/year-end", data);
  return response;
};

export const postUpdate = async (postId, post) => {
  const response = await axiosInstance.put(`/api/year-end/${postId}`, post);
  return response;
};

export const postDelete = async (postId) => {
  const response = await axiosInstance.delete(`/api/year-end/${postId}`);
  return response;
};
