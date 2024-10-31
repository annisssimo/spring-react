import styles from './Button.module.css';

function Button({ children }) {
  return <button className={styles.introButton}>{children}</button>;
}

export default Button;
