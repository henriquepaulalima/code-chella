import SectorsBanner from "./SectorsBanner/SectorsBanner";
import SectorsStage from "./SectorsStage/SectorsStage";
import styles from './Sectors.module.scss';

export default function Sectors() {
  return (
    <section className={styles.sectors__container}>
      <SectorsBanner />
      <SectorsStage />
    </section>
  );
}
