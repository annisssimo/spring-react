import styles from './SubMenuItem.module.css';
import Icon from '../Icon/Icon';

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
            {subItem.hasIcon && <Icon />}
          </a>
        </li>
      )}
    </>
  );
}

export default SubMenuItem;
