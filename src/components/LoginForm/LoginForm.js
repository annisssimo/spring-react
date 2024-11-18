import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

// import { loginThunk } from '../../redux/actions/user.actions';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import styles from './LoginForm.module.css';

import { authLogin } from '../../api/authApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginThunk = createAsyncThunk(
  'user/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { accessToken } = await authLogin({ username, password });
      localStorage.setItem('accessToken', accessToken);
      return accessToken;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await dispatch(loginThunk({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      navigate('/');
    } else {
      setError(result.payload || 'Login failed');
    }
  }

  return (
    <form className={styles.authFormBody} onSubmit={handleSubmit}>
      <InputField
        label="Username"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        label="Password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div className={styles.error}>{error}</div>}
      <Button type="submit" buttonStyle="submitButton">
        Log In
      </Button>
    </form>
  );
}

export default LoginForm;
