import styles from './MenuItem.module.css';
import SubMenuItem from '../SubMenuItem/SubMenuItem';

function MenuItem({ item }) {
  return (
    <li className={styles.headerMenuItem}>
      <span>{item.title}</span>

      {item.submenu && (
        <ul className={styles.headerSubmenu}>
          {item.submenu.map((subItem) => (
            <SubMenuItem key={subItem.title} subItem={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default MenuItem;
