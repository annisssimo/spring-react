import { useState } from 'react';
import { menuItems } from '../../data/menuItems.js';
import styles from './MobileMenu.module.css';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon.js';
import MobileMenuItem from '../MobileMenuItem/MobileMenuItem.js';

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
      <HamburgerIcon isOpen={menuOpen} onClick={handleToggleMenu} />
      <nav
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuActive : ''
        }`}
      >
        <ul>
          {menuItems.map((item, index) => (
            <MobileMenuItem
              key={index}
              item={item}
              isActive={activeMenuItem === index}
              onToggle={() => handleToggleSubmenu(index)}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
