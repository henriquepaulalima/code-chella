import styles from './Information.module.scss';
import InformationAccordion from './InformationAccordion/InformationAccordion';
import InformationBanner from './InformationBanner/InformationBanner';

export default function Information() {
  return (
    <section className={styles.information__container}>
      <InformationBanner />
      <InformationAccordion />
    </section>
  );
}
