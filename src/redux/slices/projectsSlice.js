import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errors } from '../../data/errors';

export const fetchProjectsThunk = createAsyncThunk(
  'projects/fetchProjects',
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/projects?search=${searchQuery}`,
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(errors.SERVER_ERROR);
      } else {
        console.error('Error fetching projects:', error);
        return rejectWithValue(errors.NETWORK_ERROR);
      }
    }
  },
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProjectsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default projectsSlice.reducer;
