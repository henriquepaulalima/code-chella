import styles from './Information.module.scss';
import InformationBanner from './InformationBanner/InformationBanner';

export default function Information() {
  return (
    <section className={styles.information__container}>
      <InformationBanner />
    </section>
  );
}
