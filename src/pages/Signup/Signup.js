import styles from './Signup.module.css';
import SignupForm from '../../components/SignupForm/SignupForm';

const Signup = () => {
  return (
    <div className={styles.main}>
      <div className={styles.authFormContainer}>
        <h1>Sign up to Spring</h1>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
