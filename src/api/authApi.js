import axios from '../api/axiosInstance';
import { ERROR_MESSAGES } from '../utils/errorMessages';
import { HTTP_STATUS_CODES } from '../utils/httpStatusCodes';

export const authLogin = async ({ username, password }) => {
  try {
    const response = await axios.post(`/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    if (
      error.response &&
      error.response.status === HTTP_STATUS_CODES.UNAUTHORIZED
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_CREDENTIALS);
    } else if (
      error.response &&
      error.response.status === HTTP_STATUS_CODES.FORBIDDEN
    ) {
      throw new Error(ERROR_MESSAGES.FORBIDDEN);
    } else {
      console.error(error);
      throw new Error(ERROR_MESSAGES.SERVER_ERROR);
    }
  }
};

export const refreshToken = async () => {
  const response = await axios.post(`/token`, {});
  const { accessToken } = response.data;

  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    return accessToken;
  }

  throw new Error('Error getting token');
};
