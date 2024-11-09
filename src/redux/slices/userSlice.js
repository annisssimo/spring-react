import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.payload;
      });
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
