import styles from './Attractions.module.scss';
import Saturday from './Saturday/Saturday';
import Sunday from './Sunday/Sunday';

export default function Attractions() {
  return (
    <section className={styles.attractions__container}>
      <h3>/Line-Up/</h3>
      <Saturday />
      <Sunday />
    </section>
  );
}
