
import Button from '../../../components/Button';
import styles from './DateAndLocation.module.scss';
import date_and_location_img from 'assets/imgs/date_and_location.png'

export default function DateAndLocation() {
  return (
    <section className={styles.date_and_location__container}>
        <img className={styles.date_and_location__img} src={date_and_location_img} alt="Imagem da seção de datas e locatização" />
        <div className={styles.info_container}>
          <h2 className={styles.date_and_location__h2}>&lt; 11 e 12 de Março &gt;<br />Aluródromo de São Paulo</h2>
          <p className={styles.date_and_location__p}>Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!</p>
          <Button ticketIcon={true}>Comprar ingresso!</Button>
        </div>
      </section>
  );
}
