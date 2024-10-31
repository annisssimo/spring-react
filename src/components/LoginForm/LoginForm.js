import styles from './LoginForm.module.css';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';

function LoginForm() {
  return (
    <form className={styles.authFormBody}>
      <InputField>Username</InputField>
      <InputField>Password</InputField>

      <Button type="submit" buttonStyle="submitButton">
        Log In
      </Button>
    </form>
  );
}

export default LoginForm;
