import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../slices/userSlice';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import styles from './LoginForm.module.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const url = 'http://localhost:3441/login';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const json = await response.json();
        if (json.isAuthenticated) {
          dispatch(login());
          navigate('/');
        }
      } else {
        alert('Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      alert('Error Log In');
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
