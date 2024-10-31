import styles from './LoginForm.module.css';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogIn(e) {
    e.preventDefault();
    console.log(username);
    console.log(password);
  }

  return (
    <form className={styles.authFormBody}>
      <InputField onChange={(e) => setUsername(e.target.value)}>
        Username
      </InputField>
      <InputField onChange={(e) => setPassword(e.target.value)}>
        Password
      </InputField>

      <Button type="submit" buttonStyle="submitButton" onClick={handleLogIn}>
        Log In
      </Button>
    </form>
  );
}

export default LoginForm;
