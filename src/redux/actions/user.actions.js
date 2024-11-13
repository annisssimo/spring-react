import { createAsyncThunk } from '@reduxjs/toolkit';
import { authLogin } from '../../api/authApi';

export const loginThunk = createAsyncThunk(
  'user/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      return await authLogin({ username, password });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
