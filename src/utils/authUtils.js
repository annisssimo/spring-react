import { refreshToken } from '../api/authApi';

export const ACCESS_TOKEN_KEY = 'accessToken';

export const getToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

export const validateToken = async () => {
  const token = getToken();
  if (!token) return false;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp * 1000 > Date.now()) return true;

    const newToken = await refreshToken();
    localStorage.setItem(ACCESS_TOKEN_KEY, newToken);
    return true;
  } catch (error) {
    console.error('Failed to validate or refresh token:', error);
    return false;
  }
};
