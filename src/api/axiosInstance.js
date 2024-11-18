import axios from 'axios';
import { refreshToken } from './authApi';
import { HTTP_STATUS_CODES } from '../utils/httpStatusCodes';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === HTTP_STATUS_CODES.UNAUTHORIZED &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/login')
    ) {
      originalRequest._retry = true;

      try {
        const newToken = await refreshToken();

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
