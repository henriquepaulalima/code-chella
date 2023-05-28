import styles from './SectorsBanner.module.scss';
import SectorsBannerImg from  'assets/imgs/sectors_banner_img.jpg';

export default function SectorsBanner() {
  return (
    <div className={styles.sectors_banner__container}>
      <img src={SectorsBannerImg} alt="Banner da seção Mapa de Setores" />
      <h1>Mapa de Setores</h1>
    </div>
  );
}
