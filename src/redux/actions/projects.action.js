import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProjects } from '../../api/projectsApi';
import { errors } from '../../data/errors';

export const fetchProjectsThunk = createAsyncThunk(
  'projects/fetchProjects',
  async (searchQuery, { rejectWithValue }) => {
    try {
      const data = await fetchProjects(searchQuery);
      return data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(errors.SERVER_ERROR);
      } else {
        return rejectWithValue(errors.NETWORK_ERROR);
      }
    }
  },
);
