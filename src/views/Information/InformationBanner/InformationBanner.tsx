import styles from './InformationBanner.module.scss';
import InformationImg from 'assets/imgs/information_banner_img.jpg';

export default function InformationBanner() {
  return (
    <div className={styles.information_banner__container}>
      <img src={InformationImg} alt="Imagem de mulher pulando, explicitando acessibilidade e inclusão" />
      <h1>Informações Gerais</h1>
    </div>
  );
}
