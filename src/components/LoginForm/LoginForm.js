import styles from './LoginForm.module.css';
import InputField from '../InputField/InputField';

function LoginForm() {
  return (
    <form className={styles.authFormBody}>
      <InputField>Username</InputField>
      <InputField>Password</InputField>

      <button className={styles.submitButton} type="submit">
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
