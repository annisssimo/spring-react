import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import { loginThunk } from '../../redux/slices/userSlice';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import styles from './LoginForm.module.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const resultAction = await dispatch(loginThunk({ username, password }));
      const result = unwrapResult(resultAction);

      if (result) {
        navigate('/');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert(error || 'Network error');
    }
  }

  return (
    <form className={styles.authFormBody} onSubmit={handleSubmit}>
      <InputField
        label="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" buttonStyle="submitButton">
        Log In
      </Button>
    </form>
  );
}

export default LoginForm;
