import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import toggle from '../../assets/images/toggle.png';
import { menuItems } from '../../data/menuItems';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <img src={logo} alt="Spring Logo" className={styles.headerLogo} />
        <nav className={styles.mobileMenu}>
          <ul className={styles.mobileMenuList} id="mobile-menu"></ul>
        </nav>
        <div className={styles.hamburger} role="button" tabIndex="0">
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
        </div>
        <div className={styles.headerRightSection}>
          <nav className={styles.headerNav}>
            <ul className={styles.headerMenu} id="menu">
              {menuItems.map((item) => (
                <li className={styles.headerMenuItem}>
                  <a href="#">{item.title}</a>
                </li>
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
