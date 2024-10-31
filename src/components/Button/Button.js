import styles from './Button.module.css';

function Button({
  children,
  type = 'button',
  buttonStyle = 'default',
  onClick,
}) {
  const buttonClass = `${styles.button} ${styles[buttonStyle] || ''}`;

  return (
    <button className={buttonClass} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
