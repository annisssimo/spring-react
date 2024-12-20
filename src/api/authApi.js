import axios from 'axios';
import { ERROR_MESSAGES } from '../utils/errorMessages';
import { HTTP_STATUS_CODES } from '../utils/httpStatusCodes';

export const authLogin = async ({ username, password }) => {
  try {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      username,
      password,
    });
  } catch (error) {
    if (
      error.response &&
      error.response.status === HTTP_STATUS_CODES.UNAUTHORIZED
    ) {
      alert(ERROR_MESSAGES.INVALID_CREDENTIALS);
      throw new Error(ERROR_MESSAGES.INVALID_CREDENTIALS);
    } else {
      console.error(error);
      throw new Error(
        ERROR_MESSAGES.SERVER_ERROR || ERROR_MESSAGES.LOGIN_ERROR,
      );
    }
  }
};
