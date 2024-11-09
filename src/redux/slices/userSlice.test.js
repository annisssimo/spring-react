import { configureStore } from '@reduxjs/toolkit';
import userReducer, { loginThunk } from './userSlice';
import { authLogin } from '../../api/authApi';

jest.mock('../../api/authApi');

describe('loginThunk', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { user: userReducer } });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('dispatches fulfilled action and sets isAuthenticated on successful login', async () => {
    authLogin.mockResolvedValueOnce({ isAuthenticated: true });

    const result = await store.dispatch(
      loginThunk({ username: 'admin', password: '1234' }),
    );
    const state = store.getState().user;

    expect(result.type).toBe('user/login/fulfilled');
    expect(state.isAuthenticated).toBe(true);
    expect(state.error).toBeNull();
  });

  test('dispatches rejected action and sets error on failed login', async () => {
    authLogin.mockRejectedValueOnce(new Error('Invalid credentials'));

    const result = await store.dispatch(
      loginThunk({ username: 'test', password: 'wrong' }),
    );
    const state = store.getState().user;

    expect(result.type).toBe('user/login/rejected');
    expect(state.isAuthenticated).toBe(false);
    expect(state.error).toBe('Invalid credentials');
  });
});
