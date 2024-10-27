import styles from './MobileMenuItem.module.css';
import SubMenu from '../SubMenu/SubMenu';

const MobileMenuItem = ({ item, isActive, onToggle }) => {
  const handleClick = () => {
    onToggle();
  };

  return (
    <li
      className={`${styles.mobileMenuItem} ${
        isActive ? styles.mobileMenuItemActive : ''
      }`}
    >
      <span className={styles.mobileMenuTitle} onClick={handleClick}>
        {item.title}
      </span>
      <span
        className={styles.menuItemIndicator}
        onClick={handleClick}
        role="button"
      ></span>
      <SubMenu items={item.submenu} isActive={isActive} />
    </li>
  );
};

export default MobileMenuItem;
