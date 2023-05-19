import styles from '../Attractions.module.scss';

export default function Saturday() {
  return (
    <>
      <div className={styles.attractions_date__container}>
        <div className={styles.attractions_date__line}></div>
        <p className={styles.attractions_date__text}>SÁBADO &lt;11/03&gt;</p>
        <div className={styles.attractions_date__line}></div>
      </div>
      <p className={styles.main_attraction}>System of a DOM</p>
      <div className={styles.levels_attraction__container}>
        <p className={styles.level1_attraction}>Python Maiden</p>
        <p className={styles.level1_attraction}>Apollo Client 2001</p>
        <p className={styles.level1_attraction}>Bon Java</p>
        <p className={styles.level1_attraction}>NickCallback</p>
      </div>
      <div className={styles.levels_attraction__container}>
        <p className={styles.level2_attraction}>Linkin Promises</p>
        <p className={styles.level2_attraction}>Fullstack Fighters</p>
        <p className={styles.level2_attraction}>Papa React</p>
        <p className={styles.level2_attraction}>Angular in Chains</p>
      </div>
      <div className={styles.levels_attraction__container}>
        <p className={styles.level3_attraction}>Agnostic Front-end</p>
        <p className={styles.level3_attraction}>SlipkNode</p>
        <p className={styles.level3_attraction}>Pink Flutter</p>
        <p className={styles.level3_attraction}>Kiss</p>
      </div>
    </>
  );
}
