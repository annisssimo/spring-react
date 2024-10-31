import styles from './IntroSection.module.css';
import Button from '../Button/Button';

function IntroSection() {
  return (
    <section className={styles.intro}>
      <div className={'container'}>
        <h1 className={styles.introTitle}>Projects</h1>
        <p className={styles.introDescription}>
          From configuration to security, web apps to big data—whatever the
          infrastructure needs of your application may be, there is a Spring
          Project to help you build it. Start small and use just what you
          need—Spring is modular by design.
        </p>
        <Button buttonStyle="introButton">Release Calendar</Button>
      </div>
    </section>
  );
}

export default IntroSection;
