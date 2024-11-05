import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../actions/userActions';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import styles from './LoginForm.module.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      username === process.env.REACT_APP_ADMIN_USERNAME &&
      password === process.env.REACT_APP_ADMIN_PASSWORD
    ) {
      dispatch(login());
      navigate('/');
    } else {
      alert('Error');
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
