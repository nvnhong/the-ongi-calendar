import { axiosInstance } from "./axiosInstance";

export const imageUpload = async (monthId, photo) => {
  const formData = new FormData();
  formData.append("file", photo);
  formData.append("month", String(monthId));

  const response = await axiosInstance.post("/api/photo", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response;
};

export const getImages = async () => {
  const response = await axiosInstance.get("/api/photo/last-photos");
  return response.data;
};

export const getMonthlyImages = async (monthId) => {
  const response = await axiosInstance.get(`/api/photo/month/${monthId}`);
  return response.data;
};

export const getUserImages = async () => {
  const response = await axiosInstance.get("/api/photo/user-photo");
  return response.data;
};
