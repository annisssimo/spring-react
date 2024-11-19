import { createAsyncThunk } from '@reduxjs/toolkit';
import { authLogin } from '../../api/authApi';

export const loginThunk = createAsyncThunk(
  'user/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { accessToken } = await authLogin({ username, password });
      localStorage.setItem('accessToken', accessToken);
      return accessToken;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
