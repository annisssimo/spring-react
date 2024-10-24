import styles from './Button.module.css';

function Button({ innerButtonText }) {
  return <button className={styles.introButton}>{innerButtonText}</button>;
}

export default Button;
