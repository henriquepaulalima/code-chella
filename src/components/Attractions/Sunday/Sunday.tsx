import styles from '../Attractions.module.scss';

export default function Sunday() {
  return (
    <>
      <div className={styles.attractions_date__container}>
        <div className={styles.attractions_date__line}></div>
        <p className={styles.attractions_date__text}>DOMINGO &lt;12/03&gt;</p>
        <div className={styles.attractions_date__line}></div>
      </div>
      <p className={styles.main_attraction}>Lana Del Ploy</p>
      <div className={styles.levels_attraction__container}>
        <p className={styles.level1_attraction}>Dua Lib</p>
        <p className={styles.level1_attraction}>The Backnd</p>
        <p className={styles.level1_attraction}>CSS Styles</p>
        <p className={styles.level1_attraction}>ArrayAna Grande</p>
        <p className={styles.level1_attraction}>DJ Query</p>
      </div>
      <div className={styles.levels_attraction__container}>
        <p className={styles.level2_attraction}>Miley Cypress</p>
        <p className={styles.level2_attraction}>The Bootstrap Boys</p>
        <p className={styles.level2_attraction}>Json Derulo</p>
        <p className={styles.level2_attraction}>CloudPLay</p>
        <p className={styles.level2_attraction}>Dev Lovato</p>
      </div>
      <div className={styles.levels_attraction__container}>
        <p className={styles.level3_attraction}>Kylie MiLOG</p>
        <p className={styles.level3_attraction}>Jenkins Brothers</p>
        <p className={styles.level3_attraction}>Rubycat Dolls</p>
      </div>
    </>
  );
}
