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
    } else {
      console.error(error);
      throw new Error(
        ERROR_MESSAGES.SERVER_ERROR || ERROR_MESSAGES.LOGIN_ERROR,
      );
    }
  }
};

export const refreshToken = async () => {
  try {
    const response = await axios.post(`/token`, {});
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Token refresh failed');
  }
};
