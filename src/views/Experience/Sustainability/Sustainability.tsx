import styles from './Sustainability.module.scss';
import SustainabilityImg from 'assets/imgs/sustainability_img.jpg';

export default function Sustainability() {
  return (
    <div className={styles.sustainability__container}>
      <img src={SustainabilityImg} alt="Imagem de mulher pulando, explicitando acessibilidade e inclusão" />
      <div>
        <h2>Sustentabilidade</h2>
        <p>Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.</p>
      </div>
    </div>
  );
}
