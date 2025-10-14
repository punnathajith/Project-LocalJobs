import axiosInstance from "./axiosInstance";

// User APIs
export const userAuthApi = {
  login: (data: { email: string; password: string }) =>
    axiosInstance.post("/user/login", data),

  register: (data: { name: string; email: string; password: string }) =>
    axiosInstance.post("/user/register", data),

  refreshToken: () =>
    axiosInstance.post("/user/refresh"),

  getProfile: () =>
    axiosInstance.get("/user/profile"),
};

// Company APIs
export const companyAuthApi = {
  login: (data: { email: string; password: string }) =>
    axiosInstance.post("/company/login", data),

  register: (data: { name: string; email: string; password: string; companyName: string }) =>
    axiosInstance.post("/company/register", data),

  refreshToken: () =>
    axiosInstance.post("/company/refresh"),

  getProfile: () =>
    axiosInstance.get("/company/profile"),
};

// Admin APIs
export const adminAuthApi = {
  login: (data: { email: string; password: string }) =>
    axiosInstance.post("/admin/login", data),

  refreshToken: () =>
    axiosInstance.post("/admin/refresh"),

  getProfile: () =>
    axiosInstance.get("/admin/profile"),
};
