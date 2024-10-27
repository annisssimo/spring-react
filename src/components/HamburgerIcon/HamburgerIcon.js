import styles from './HamburgerIcon.module.css';

const HamburgerIcon = ({ isOpen, onClick }) => (
  <div
    className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ''}`}
    role="button"
    tabIndex="0"
    onClick={onClick}
    onKeyDown={(e) => e.key === 'Enter' && onClick()}
  >
    <div className={styles.hamburgerLine}></div>
    <div className={styles.hamburgerLine}></div>
    <div className={styles.hamburgerLine}></div>
  </div>
);

export default HamburgerIcon;
