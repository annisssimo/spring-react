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
  (response) => response, // Успешный ответ
  async (error) => {
    const originalRequest = error.config;

    // Проверяем 401 или 403 для повторной аутентификации
    if (
      (error.response?.status === HTTP_STATUS_CODES.UNAUTHORIZED ||
        error.response?.status === HTTP_STATUS_CODES.FORBIDDEN) &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/token') // Избегаем рекурсии
    ) {
      originalRequest._retry = true; // Помечаем запрос как повторный

      try {
        const newToken = await refreshToken(); // Обновляем токен
        originalRequest.headers.Authorization = `Bearer ${newToken}`; // Применяем новый токен
        return axiosInstance(originalRequest); // Повторяем запрос
      } catch (err) {
        console.error('Ошибка обновления токена:', err);
        localStorage.removeItem('accessToken'); // Удаляем невалидный токен
        window.location.href = '/login'; // Перенаправление на логин
        return Promise.reject(err);
      }
    }

    // Если ошибка не обработана, возвращаем её
    return Promise.reject(error);
  },
);

export default axiosInstance;
