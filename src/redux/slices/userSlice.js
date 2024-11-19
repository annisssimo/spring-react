import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from '../actions/user.actions';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    accessToken: null,
    error: null,
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.error = null;
      localStorage.removeItem('accessToken');
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
      })
      .addCase(logout, (state) => {
        state.isAuthenticated = false;
        state.accessToken = null;
        localStorage.removeItem('accessToken');
      });
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
