import SectorsBanner from "./SectorsBanner/SectorsBanner";
import SectorsStage from "./SectorsStage/SectorsStage";
import styles from './Sectors.module.scss';
import SectorsDetails from "./SectorsDetails/SectorsDetails";

export default function Sectors() {
  return (
    <section className={styles.sectors__container}>
      <SectorsBanner />
      <SectorsStage />
      <SectorsDetails />
    </section>
  );
}
