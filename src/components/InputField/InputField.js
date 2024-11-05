import styles from './InputField.module.css';

function InputField({ label, onChange }) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={label}>{label}</label>
      <input onChange={onChange} id={label} />
    </div>
  );
}

export default InputField;
