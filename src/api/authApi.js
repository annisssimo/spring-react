import axios from 'axios';
import { errors } from '../data/errors';

export const authLogin = async ({ username, password }) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/login`,
      {
        username,
        password,
      },
    );

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error(errors.INVALID_CREDENTIALS);
    } else {
      console.error(error);
      throw new Error(errors.SERVER_ERROR || 'An error occurred during login');
    }
  }
};
