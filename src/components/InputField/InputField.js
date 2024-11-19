import styles from './InputField.module.css';

function InputField({ label, name, onChange, className }) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        onChange={onChange}
        className={`${styles.input} ${className}`}
      />
    </div>
  );
}

export default InputField;
