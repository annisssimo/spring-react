import styles from './SubMenu.module.css';

const SubMenu = ({ items, isActive }) => (
  <ul className={`${styles.submenu} ${isActive ? styles.submenuActive : ''}`}>
    {items.map((subItem, index) => (
      <li key={index} className={styles.submenuItem}>
        <a href={subItem.link}>{subItem.title}</a>
      </li>
    ))}
  </ul>
);

export default SubMenu;
