import styles from './InputField.module.css';

function InputField({ children }) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={children}>{children}</label>
      <input id={children} />
    </div>
  );
}

export default InputField;
