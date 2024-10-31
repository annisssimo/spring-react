import styles from './SubMenuItem.module.css';
import { ReactComponent as Icon } from '../../assets/images/icon.svg';

function SubMenuItem({ subItem }) {
  return (
    <>
      {subItem.isSectionHeader ? (
        <div className={styles.sectionHeader}>{subItem.title}</div>
      ) : (
        <li className={styles.headerSubmenuItem}>
          <a
            href={subItem.href}
            className={`${styles.headerSubmenuItem} ${
              subItem.isLink ? styles.isLink : ''
            }`}
          >
            {subItem.title}
            {subItem.hasIcon && <Icon className={styles.navbarIcon} />}
          </a>
        </li>
      )}
    </>
  );
}

export default SubMenuItem;
