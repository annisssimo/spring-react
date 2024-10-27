import styles from './HeaderLogo.module.css';
import logo from '../../assets/images/logo.png';

function HeaderLogo() {
  return <img src={logo} alt="Spring Logo" className={styles.headerLogo} />;
}

export default HeaderLogo;
