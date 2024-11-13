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
        return rejectWithValue(ERROR_MESSAGES.SERVER_ERROR);
      } else {
        return rejectWithValue(ERROR_MESSAGES.NETWORK_ERROR);
      }
    }
  },
);
