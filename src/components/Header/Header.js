import styles from './Header.module.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderNav from '../HeaderNav/HeaderNav';
import HeaderToggle from '../HeaderToggle/HeaderToggle';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <HeaderLogo />
        <nav className={styles.mobileMenu}>
          <ul className={styles.mobileMenuList} id="mobile-menu"></ul>
        </nav>
        <MobileMenu />
        <div className={styles.headerRightSection}>
          <HeaderNav />
          <HeaderToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
