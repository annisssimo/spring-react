import styles from './InputField.module.css';

function InputField({ children, onChange }) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={children}>{children}</label>
      <input onChange={onChange} id={children} />
    </div>
  );
}

export default InputField;
