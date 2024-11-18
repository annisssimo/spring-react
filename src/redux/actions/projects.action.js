import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProjects } from '../../api/projectsApi';
import { ERROR_MESSAGES } from '../../utils/errorMessages';

export const fetchProjectsThunk = createAsyncThunk(
  'projects/fetchProjects',
  async (searchQuery, { rejectWithValue }) => {
    try {
      const data = await fetchProjects(searchQuery);
      return data;
    } catch (error) {
      if (error.response) {
        window.location.href = '/login';
        return rejectWithValue(ERROR_MESSAGES.FORBIDDEN);
      } else {
        return rejectWithValue(ERROR_MESSAGES.SERVER_ERROR);
      }
    }
  },
);
