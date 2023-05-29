import styles from './SectorsStage.module.scss';
import SectorsStageImg from 'assets/imgs/sectors_stage_img.png';

export default function SectorsStage() {
  return (
    <div className={styles.sectors_stage__container}>
      <img src={SectorsStageImg} alt="Imagem dos setores do palco" />
      <div className={styles.sectors_stage__legend_list}>
        <h3>Legenda:</h3>
        <div className={styles.sectors_stage__legend}>
          <div className={styles.premium}></div>
          <p>Pista Premium</p>
        </div>
        <div className={styles.sectors_stage__legend}>
          <div className={styles.comum}></div>
          <p>Pista Comum</p>
        </div>
        <div className={styles.sectors_stage__legend}>
          <div className={styles.ground_floor}></div>
          <p>Cadeiras térreo</p>
        </div>
        <div className={styles.sectors_stage__legend}>
          <div className={styles.superior}></div>
          <p>Cadeiras superiores</p>
        </div>
        <div className={styles.sectors_stage__legend}>
          <div className={styles.ramps}></div>
          <p>Rampas</p>
        </div>
      </div>
    </div>
  );
}
