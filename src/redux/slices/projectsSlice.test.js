import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';
import { fetchProjectsThunk } from '../actions/projects.action';
import { fetchProjects } from '../../api/projectsApi';
import { ERROR_MESSAGES } from '../../utils/errorMessages';

jest.mock('../../api/projectsApi');

describe('fetchProjectsThunk', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { projects: projectsReducer } });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('dispatches fulfilled action and sets projects data on successful fetch', async () => {
    const mockData = [
      {
        image: 'https://spring.io/img/projects/spring-boot.svg',
        title: 'Spring Boot',
        description: 'Description for Spring Boot',
      },
    ];
    fetchProjects.mockResolvedValueOnce(mockData);

    const result = await store.dispatch(fetchProjectsThunk(''));
    const state = store.getState().projects;

    expect(result.type).toBe('projects/fetchProjects/fulfilled');
    expect(state.data).toEqual(mockData);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  test('dispatches rejected action and sets SERVER_ERROR on server error', async () => {
    fetchProjects.mockRejectedValueOnce({ response: {} });

    const result = await store.dispatch(fetchProjectsThunk(''));
    const state = store.getState().projects;

    expect(result.type).toBe('projects/fetchProjects/rejected');
    expect(state.data).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(ERROR_MESSAGES.SERVER_ERROR);
  });

  test('dispatches rejected action and sets NETWORK_ERROR on network error', async () => {
    fetchProjects.mockRejectedValueOnce(new Error('Network Error'));

    const result = await store.dispatch(fetchProjectsThunk(''));
    const state = store.getState().projects;

    expect(result.type).toBe('projects/fetchProjects/rejected');
    expect(state.data).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(ERROR_MESSAGES.NETWORK_ERROR);
  });
});
