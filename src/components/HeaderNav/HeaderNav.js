import styles from './HeaderNav.module.css';
import { menuItems } from '../../data/menuItems';
import MenuItem from '../MenuItem/MenuItem';

function HeaderNav() {
  return (
    <nav className={styles.headerNav}>
      <ul className={styles.headerMenu} id="menu">
        {menuItems.map((item) => (
          <MenuItem key={item.title} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;
