import { createAsyncThunk } from '@reduxjs/toolkit';
import { authLogin } from '../../api/authApi';

export const loginThunk = createAsyncThunk(
  'user/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const json = await authLogin({ username, password });
      return json.isAuthenticated;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
