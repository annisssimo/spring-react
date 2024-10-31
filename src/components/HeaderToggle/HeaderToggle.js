import styles from './HeaderToggle.module.css';
import toggle from '../../assets/images/toggle.png';

function HeaderToggle() {
  return (
    <img
      src={toggle}
      alt="Toggle"
      className={styles.headerToggle}
      draggable="false"
    />
  );
}

export default HeaderToggle;
