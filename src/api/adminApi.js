import { axiosInstance } from "./axiosInstance";

export const getInfo = async () => {
  const response = await axiosInstance.get(
    import.meta.env.VITE_REACT_APP_ADMIN_A_1
  );
  return response.data;
};

export const getDetail = async (type, value) => {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_REACT_APP_ADMIN_A_DEFAULT}/${type}/${value}`
  );
  return response.data;
};
