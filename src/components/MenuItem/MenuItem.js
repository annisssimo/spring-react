import styles from './MenuItem.module.css';

function MenuItem({ item }) {
  return (
    <div className={styles.headerMenuItem}>
      <span>{item.title}</span>
      {item.submenu && (
        <ul className={styles.headerSubmenu}>
          {item.submenu.map((subItem) => (
            <li key={subItem.title}>
              <a className={styles.headerSubmenuItem} href={subItem.href}>
                {subItem.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MenuItem;
