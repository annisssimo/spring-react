import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import toggle from '../../assets/images/toggle.png';
import { menuItems } from '../../data/menuItems';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <img src={logo} alt="Spring Logo" className={styles.headerLogo} />
        <nav className={styles.mobileMenu}>
          <ul className={styles.mobileMenuList} id="mobile-menu"></ul>
        </nav>
        <MobileMenu />
        <div className={styles.headerRightSection}>
          <nav className={styles.headerNav}>
            <ul className={styles.headerMenu} id="menu">
              {menuItems.map((item) => (
                <div key={item.title} className={styles.headerMenuItem}>
                  <span>{item.title}</span>
                  <ul className={styles.headerSubmenu}>
                    {item.submenu.map((subItem) => (
                      <li key={subItem.title}>
                        <a
                          className={styles.headerSubmenuItem}
                          href={subItem.href}
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </nav>
          <img
            src={toggle}
            alt="Toggle"
            className={styles.headerToggle}
            draggable="false"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
