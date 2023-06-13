import styles from './BuyTicketBanner.module.scss';
import BuyTicketBannerImg from 'assets/imgs/buy_ticket_banner_img.jpg';

export default function BuyTicketBanner() {
  return (
    <div className={styles.buy_ticket_banner__container}>
      <img src={BuyTicketBannerImg} alt="Imagem de mulher pulando, explicitando acessibilidade e inclusão" />
      <h1>Garanta seu Ingresso</h1>
    </div>
  );
}
