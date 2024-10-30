import styles from './Login.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

function Login() {
  return (
    <div className={styles.main}>
      <div className={styles.authFormContainer}>
        <h1>Log in to Spring</h1>

        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
