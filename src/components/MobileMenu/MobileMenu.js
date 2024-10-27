import { useState } from 'react';
import { menuItems } from '../../data/menuItems.js';
import styles from './MobileMenu.module.css';

const MobileMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleSubmenu = (index) => {
    setActiveMenuItem(activeMenuItem === index ? null : index);
  };

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className={`${styles.hamburger} ${
          menuOpen ? styles.hamburgerActive : ''
        }`}
        role="button"
        tabIndex="0"
        onClick={handleToggleMenu}
        onKeyDown={(e) => e.key === 'Enter' && handleToggleMenu()}
      >
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
      </div>
      <nav
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuActive : ''
        }`}
      >
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${styles.mobileMenuItem} ${
                activeMenuItem === index ? styles.mobileMenuItemActive : ''
              }`}
            >
              <span
                className={styles.mobileMenuTitle}
                onClick={() => handleToggleSubmenu(index)}
              >
                {item.title}
              </span>
              <span
                className={styles.menuItemIndicator}
                onClick={() => handleToggleSubmenu(index)}
                role="button"
              ></span>
              <ul
                className={`${styles.submenu} ${
                  activeMenuItem === index ? styles.submenuActive : ''
                }`}
              >
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles.submenuItem}>
                    <a href={subItem.link}>{subItem.title}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
