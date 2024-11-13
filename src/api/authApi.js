import axios from 'axios';
import { ERROR_MESSAGES } from '../utils/errorMessages';
import { HTTP_STATUS_CODES } from '../utils/httpStatusCodes';

export const authLogin = async ({ username, password }) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/login`,
      {
        username,
        password,
      },
    );

    return response.data.isAuthenticated;
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
