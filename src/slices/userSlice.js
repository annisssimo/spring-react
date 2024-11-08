import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginThunk = createAsyncThunk(
  'user/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3441/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const json = await response.json();
        return json.isAuthenticated;
      } else {
        return rejectWithValue('Invalid credentials');
      }
    } catch (error) {
      return rejectWithValue('Network error');
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
