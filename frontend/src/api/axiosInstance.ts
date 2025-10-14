import axios from "axios";
import { store } from "../redux/store";
import { refreshAccessToken, logout } from "../redux/authSlice";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, // 👈 cookies (refresh token) automatically included
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.accessToken;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const state = store.getState();
    const { user } = state.auth;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      user
    ) {
      originalRequest._retry = true;

      try {
        let refreshUrl = "";
        switch (user.type) {
          case "admin":
            refreshUrl = "/admin/refresh";
            break;
          case "company":
            refreshUrl = "/company/refresh";
            break;
          default:
            refreshUrl = "/user/refresh";
        }

        // 👇 Notice: we don’t send refreshToken manually, it comes from httpOnly cookie
        const res = await axios.post(
          `http://localhost:5000${refreshUrl}`,
          {},
          { withCredentials: true }
        );

        const newAccessToken = res.data.accessToken;
        store.dispatch(refreshAccessToken(newAccessToken));

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        store.dispatch(logout());
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
