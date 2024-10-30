import styles from './MenuItem.module.css';

function MenuItem({ item }) {
  return (
    <li className={styles.headerMenuItem}>
      <span>{item.title}</span>

      {item.submenu && (
        <ul className={styles.headerSubmenu}>
          {item.submenu.map((subItem) => (
            <li
              key={subItem.title}
              className={
                subItem.title === 'View all projects' ? styles.isLink : ''
              }
            >
              {subItem.title === 'DEVELOPMENT TOOLS' ? (
                <div className={styles.devtools}>{subItem.title}</div>
              ) : (
                <a
                  className={`${styles.headerSubmenuItem} ${
                    subItem.title === 'View all projects' ? styles.isLink : ''
                  }`}
                  href={subItem.href}
                >
                  {subItem.title}
                  {subItem.title === 'Spring Initializr' && (
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-up-right-from-square"
                      className={`${styles.navbarIcon} svg-inline--fa fa-arrow-up-right-from-square`}
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      ></path>
                    </svg>
                  )}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default MenuItem;
