import axios from 'axios';

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
      throw new Error('Invalid credentials');
    } else {
      console.error('Error during login:', error);
      throw new Error('An error occurred during login');
    }
  }
};
