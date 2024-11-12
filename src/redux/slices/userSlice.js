import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from '../actions/user.actions';

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
